const Mocha = require("mocha");
const { expect } = require("chai");

const browserstack = require("browserstack-local");
const { Builder } = require("selenium-webdriver");
const { promisify } = require("util");
const { DEBUG, CI } = require("./constants");
const { version, navigate } = require("./helpers");
const getBrowsers = require("./helpers/get-browsers");
const server = require("./helpers/server");

const {
  BS_CAPABILITIES,
  BS_LOCAL_OPTIONS,
  STOP_ON_FAIL,
  BROWSERSTACK_USERNAME,
  BROWSERSTACK_ACCESS_KEY
} = require("./constants/browserstack");

const localBrowserFilter = ({ browser, browser_version, os, os_version }) =>
  browser === "chrome" && version(browser_version) == 49; // os === "ios" && os == "Windows" && os_version == "8";

const getSeleniumVersion = ({ browser, os, browser_version }) => {
  const isMobile = ["ios", "android"].includes(os);
  if ((browser === "chrome" && version(browser_version) < 50) || isMobile)
    return false;
  return "4.0.0-alpha-2";
};

const getSupportsSendBeacon = ({ browser, os }) => {
  return os === "ios" || browser === "ie" || browser === "safari"
    ? false
    : true;
};
const getSupportsPushState = ({ browser, browser_version }) => {
  return browser === "ie" && version(browser_version) < 10 ? false : true;
};

// 1080000 ms = 10 minutes
const getDriverWithTimeout = (capabilities, timeout = 1080000) =>
  new Promise(resolve => {
    const start = Date.now();
    let responded = false;

    const response = message => {
      if (message instanceof Error) {
        log(message);
        return resolve(message);
      }
      if (responded) return;
      responded = true;
      return Date.now() - start < timeout ? resolve(message) : resolve();
    };

    new Builder()
      .usingServer("http://hub-cloud.browserstack.com/wd/hub")
      .withCapabilities(capabilities)
      .build()
      .then(response)
      .catch(response);

    setTimeout(response, timeout);
  });

const log = (...messages) => DEBUG && console.log("    => Test:", ...messages);

if (!BROWSERSTACK_USERNAME || !BROWSERSTACK_ACCESS_KEY) {
  log("BROWSERSTACK_USERNAME nor BROWSERSTACK_ACCESS_KEY are not defined.");
  process.exit(1);
}

const getDeviceName = ({
  browser,
  browser_version,
  os,
  device,
  os_version
} = {}) =>
  device
    ? `${device} ${
        os === "ios"
          ? `with iOS ${os_version}`
          : `with ${browser} ${os_version}`
      }`
    : `${os} ${os_version} with ${browser} ${browser_version}`;

(async () => {
  const BrowserStackLocal = new browserstack.Local();
  const startLocal = promisify(BrowserStackLocal.start).bind(BrowserStackLocal);
  const stopLocal = promisify(BrowserStackLocal.stop).bind(BrowserStackLocal);

  const stopServer = (await server()).done;
  await startLocal(BS_LOCAL_OPTIONS);
  log("Is BrowserStack Local running?", BrowserStackLocal.isRunning());

  // Do not filter browsers when running as CI
  const retrievedBrowsers = await getBrowsers();
  const browsers = CI
    ? retrievedBrowsers
    : retrievedBrowsers.filter(localBrowserFilter).slice(0, 1);

  log("Testing", browsers.length, "browsers:");
  browsers.map(browser => {
    const name = getDeviceName(browser);
    browser.name = name;
    browser.browserName = browser.browser;
    log(` - ${name}`);
    return browser;
  });

  const mochaInstance = new Mocha();
  mochaInstance.timeout(2 * 60 * 60 * 1000); // 2 hours

  const suiteInstance = Mocha.Suite.create(
    mochaInstance.suite,
    "Public Script Test Suite"
  );

  if (CI)
    suiteInstance.addTest(
      new Mocha.Test(
        `Having enough browsers to test: ${browsers.length}`,
        async function() {
          expect(
            browsers,
            "Should have more than 20 browsers"
          ).to.have.lengthOf.at.least(20);
        }
      )
    );

  for (const browser of browsers) {
    suiteInstance.addTest(
      new Mocha.Test(`Testing ${browser.name}`, async function() {
        if (getSeleniumVersion(browser))
          browser["browserstack.selenium_version"] = getSeleniumVersion(
            browser
          );
        browser.supportsSendBeacon = getSupportsSendBeacon(browser);
        browser.supportsPushState = getSupportsPushState(browser);
        browser.useLocalIp = browser.os === "ios";

        log(`Waiting to get ${browser.name}...`);

        const driver = await getDriverWithTimeout({
          ...BS_CAPABILITIES,
          ...browser
        });

        if (!driver || typeof driver.get !== "function") {
          // Device seems unavailable the test will complete
          expect(true, "Getting device took more than 10 minutes").to.be.false;
          return;
        }

        let commands = [];

        if (browser.supportsSendBeacon) {
          commands = [
            { script: "/latest/hello.js", push: true, beacon: true },
            { wait: "/script.js", amount: 1 },
            { visit: "/empty" }, // Trigger sendBeacon
            { wait: "/simple.gif", amount: 3 },
            { wait: "/append" }
          ];
        } else if (browser.supportsPushState) {
          commands = [
            { script: "/latest/hello.js", push: true },
            { wait: "/script.js", amount: 1 },
            { wait: "/simple.gif", amount: 3 }
          ];
        } else {
          commands = [
            { script: "/latest/hello.js" },
            { wait: "/script.js", amount: 2 },
            {
              wait: "/simple.gif",
              amount: 2,
              params: { body: { type: "pageview" } },
              timeout: browser.browser === "ie" ? 10000 : null
            }
          ];
        }

        // Empty global REQUESTS
        global.REQUESTS = [];

        await navigate({
          ...browser,
          commands,
          driver
        });

        // console.log(JSON.stringify(global.REQUESTS, null, 2));

        if (browser.supportsSendBeacon) {
          log("Testing beacon");
          await require("./test-beacon")(browser);
        } else if (browser.supportsPushState) {
          log("Testing one beacon");
          await require("./test-one-beacon")(browser);
        }

        if (browser.supportsPushState) {
          log("Testing push state");
          await require("./test-pushstate")(browser);
        } else {
          log("Testing no push state");
          await require("./test-no-pushstate")(browser);
        }

        log("Testing events");

        // Empty global REQUESTS
        global.REQUESTS = [];

        commands = [
          { script: "/latest/hello.js", event: "-- event 123 &&" },
          { wait: "/simple.gif", params: { body: { type: "event" } } },
          { script: "/latest/hello.js", event: "function" },
          {
            wait: "/simple.gif",
            params: { body: { type: "event" } },
            amount: 2
          }
        ];

        await navigate({
          ...browser,
          commands,
          driver
        });

        await require("./test-events")(browser);

        await driver.quit();
      })
    );
  }

  mochaInstance.run(async amountFailures => {
    // Stop local server and BrowserStack Local
    await stopLocal();
    await stopServer();

    // Exit with exit code when having failures
    process.exit(STOP_ON_FAIL ? amountFailures > 0 : false);
  });
})();

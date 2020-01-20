const Handlebars = require("handlebars");
const UglifyJS = require("uglify-js");
const fs = require("fs");
const esprima = require("esprima");
const path = require("path");

const GREEN = "\x1b[32m%s\x1b[0m";
const YELLOW = "\x1b[33m%s\x1b[0m";
const RED = "\x1b[31m%s\x1b[0m";

const MINIFY_OPTIONS = {
  warnings: false,
  ie8: true,
  toplevel: true,
  mangle: {
    reserved: ["sa"]
  },
  nameCache: null
};

const DEFAULTS = {
  duration: true,
  events: true,
  hash: true,
  scroll: true,
  spa: true,
  uniques: true,
  online: true
};

const files = [
  {
    type: "js",
    input: `${__dirname}/src/default.js`,
    output: `latest.js`,
    variables: {
      ...DEFAULTS,
      version: 2,
      baseUrl: "simpleanalyticscdn.com",
      apiUrlPrefix: "queue.",
      apiUrlSuffix: "/v2/post",
      onlineUrlPrefix: "online.",
      onlineUrlSuffix: "/v1/online",
      url: "docs.simpleanalytics.com/script"
    }
  },
  {
    type: "js",
    input: `${__dirname}/src/default.js`,
    output: `custom/app.js`,
    variables: {
      ...DEFAULTS,
      version: 2,
      baseUrl: "{{nginxHost}}",
      apiUrlSuffix: "/v2/post",
      onlineUrlSuffix: "/v1/online",
      url: "docs.simpleanalytics.com/script"
    }
  },
  {
    type: "js",
    input: `${__dirname}/src/default.js`,
    output: `custom/latest.js`,
    variables: {
      ...DEFAULTS,
      version: 2,
      baseUrl: "{{nginxHost}}",
      apiUrlSuffix: "/v2/post",
      onlineUrlSuffix: "/v1/online",
      url: "docs.simpleanalytics.com/script"
    }
  },
  {
    type: "js",
    input: `${__dirname}/src/default.js`,
    output: `light.js`,
    variables: {
      ...DEFAULTS,
      version: 2,
      baseUrl: "{{nginxHost}}",
      apiUrlSuffix: "/v2/post",
      duration: false,
      events: false,
      scroll: false,
      uniques: false,
      online: false,
      url: "docs.simpleanalytics.com/script"
    }
  },
  {
    type: "js",
    input: `${__dirname}/src/default.js`,
    output: `custom/light.js`,
    variables: {
      ...DEFAULTS,
      baseUrl: "{{nginxHost}}",
      apiUrlSuffix: "/v2/post",
      version: 2,
      duration: false,
      events: false,
      scroll: false,
      uniques: false,
      online: false,
      url: "docs.simpleanalytics.com/script"
    }
  },
  {
    type: "js",
    input: `${__dirname}/src/embed.js`,
    output: `embed.js`,
    variables: {
      version: 1,
      script: "embed.js",
      url: "docs.simpleanalytics.com/embed-graph-on-your-site"
    }
  }
];

for (const file of files) {
  const { variables, input, output } = file;
  const name = output.toUpperCase();
  const versionFile = `${__dirname}/dist/v${variables.version}/${output}`;
  const latestFile = `${__dirname}/dist/latest/${output}`;

  const contents = fs
    .readFileSync(input, "utf8")
    .replace(/\"\{\{\s?version\s?\}\}"/g, variables.version)
    .replace(/\/\*\*\s?/g, "{{")
    .replace(/\s?\*\*\//g, "}}")
    .replace(/{{endif/g, "{{/if")
    .replace(/{{if/g, "{{#if");

  const template = Handlebars.compile(contents);
  const { code: codeTemplate, warnings } = UglifyJS.minify(
    template(variables),
    MINIFY_OPTIONS
  );

  // console.log(template(variables));

  if (!codeTemplate)
    console.warn(RED, `[MINIFY][${name}] codeTemplate is undefined`);
  if (!template) console.warn(RED, `[MINIFY][${name}] template is undefined`);

  for (const warning of warnings || [])
    console.warn(YELLOW, `[MINIFY][${name}] ${warning}`);

  const code = codeTemplate.replace(
    /\{\{\s?nginxHost\s?\}\}/gi,
    '<!--# echo var="http_host" default="" -->'
  );

  const date = new Date().toISOString().slice(0, 10);
  const hash = require("crypto")
    .createHash("sha256")
    .update(code)
    .digest("hex")
    .slice(0, 4);

  const prepend = `/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; ${date}; ${hash}) */`;
  const lines = [prepend, "", code].join("\n");

  const validate = template({
    ...variables,
    hostname: "sa.example.com",
    script: "sa.example.com/app.js"
  });

  try {
    esprima.parseScript(validate);
  } catch (error) {
    const { index, lineNumber, description } = error;
    console.log(
      RED,
      `[MINIFY][${name}][ERROR] ${input
        .split("/")
        .pop()} ${description} at line ${lineNumber} position ${index}`
    );
    continue;
  }

  fs.mkdirSync(path.dirname(versionFile), { recursive: true });
  fs.mkdirSync(path.dirname(latestFile), { recursive: true });

  fs.writeFileSync(versionFile, lines);
  fs.writeFileSync(latestFile, lines);

  const bytes = new TextEncoder("utf-8").encode(lines).length;

  console.log(
    `[MINIFY][${name}] Minified ${input.split("/").pop()} into ${bytes} bytes`
  );
}

console.log(GREEN, `[MINIFY] Done minifying all files`);

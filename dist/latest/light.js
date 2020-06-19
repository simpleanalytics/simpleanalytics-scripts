/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-06-19; 542e) */

!function(c,e,t){var r,i,n;if(c)try{var p="https:",a="error",o=c.console,s="doNotTrack",u=c.navigator,l=c.location,h=l.hostname,g=c.document,f=u.userAgent,m="Not sending request ",d=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=c.addEventListener,E="https://"+t,_=undefined,b=g.documentElement||{},O="language",x=c.screen,A=u.webdriver||c.__nightmare||"callPhantom"in c||"_phantom"in c||"phantom"in c||/(bot|spider|crawl)/i.test(f)||c.chrome&&(""===u.languages||!u.plugins.length||!(u.plugins instanceof PluginArray)),S={version:3};A&&(S.bot=!0);var T=function(e){o&&o.warn&&o.warn("Simple Analytics:",e)},k=(Date.now,function(){var t=c.crypto||c.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11;return t&&t.getRandomValues?e.replace(/[018]/g,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}):e.replace(/[018]/g,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}),R=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},B=function(e){var t=l.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},C=function(t,e){t=R(S,t);var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=E+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=_}).map(function(e){return d(e)+"="+d(t[e])}).join("&")},D=function(e){e=e.message||e,T(e),C({type:a,error:e,url:U+l.pathname})};w(a,function(e){e.filename&&-1<e.filename.indexOf(t)&&D(e.message)},!1);var P,$="pushState",I=c.dispatchEvent;try{P=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(ne){}var j=g.querySelector('script[src*="'+t+'"]'),H=function(e,t){return e&&e.getAttribute("data-"+t)},M=e.mode||H(j,"mode"),N=!!(n=e.skipDnt)===n?e.skipDnt:"true"==H(j,"ignore-dnt")||"true"==H(j,"skip-dnt"),U=e.hostname||H(j,"hostname")||h,W=e.ignorePages||H(j,"ignore-pages"),q=!("false"==H(j,"auto-collect")||!1===e.autoCollect),V=(e.saGlobal||H(j,"sa-global"),Array.isArray(W)?W:"string"==typeof W&&W.length?W.split(/, ?/):[]);if(S.hostname=U,g.doctype||T("Add DOCTYPE html for more accurate dimensions"),U!==h&&(S.hostname_original=h),!N&&s in u&&"1"==u[s])return T(m+"when "+s+" is enabled");if(-1==h.indexOf(".")||/^[0-9]+$/.test(h.replace(/\./g,"")))return T(m+"from "+h);var z,F={},G=k(),J=(g.referrer||"").replace(h,U).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||_,L="(utm_)?",Y={source:B(L+"source|ref"),medium:B(L+"medium"),campaign:B(L+"campaign"),term:B(L+"term"),content:B(L+"content"),referrer:J},Z="sendBeacon",K=function(e,t){var n={type:"append",original_id:t?e:G};!t&&Z in u?u[Z](E+"/append",y(R(S,n))):C(n)};w("unload",K,!1);var Q=function(e){var t=e||v(l.pathname);if(!function(e){for(var t in V){var n=V[t];if(n){var r="/"==n[0]?n:"/"+n;if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}}return!1}(t))return"hash"==M&&l.hash&&(t+=l.hash.split("?")[0]),t;T(m+"because "+t+" is ignored")},X=function(e,t){var n,r,i,a,o,s=Q(t);s&&z!=s&&(n={path:z=s,viewport_width:Math.max(b.clientWidth||0,c.innerWidth||0)||null,viewport_height:Math.max(b.clientHeight||0,c.innerHeight||0)||null},u[O]&&(n[O]=u[O]),x&&(n.screen_width=x.width,n.screen_height=x.height),i="navigation",a=(r=c.performance)&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type),o=!!J&&J.split("/")[0]==U,F=n,function(e,t,n){e&&K(""+G,!0),G=k(),F.id=G;var r=U+Q();C(R(F,t?{referrer:n?J:null}:Y,{https:l.protocol==p,timezone:P,width:c.innerWidth,type:"pageview"})),J=r}(e,e||a,o))},ee=c.history,te=ee?ee.pushState:_;q&&te&&Event&&I&&(w($,function(){X(1)},!(ee.pushState=(i=ee[r=$],function(){var e,t=arguments,n=i.apply(this,t);return"function"==typeof Event?e=new Event(r):(e=g.createEvent("Event")).initEvent(r,!0,!0),e.arguments=t,I(e),n}))),w("popstate",function(){X(1)},!1)),q&&"hash"==M&&"onhashchange"in c&&w("hashchange",function(){X(1)},!1),q?X():c.sa_pageview=function(e){X(0,e)}}catch(ne){D(ne)}}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=light.js.map
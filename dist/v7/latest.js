/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2021-04-20; c3dd) */

!function(u,e,t,n){try{var r=n+"_loaded";if(!u||!0===u[r])return;u[r]=!0;var p="https:",i="error",a=u.console,o="doNotTrack",l=u.navigator,f=u.location,h=f.hostname,d=u.document,c=l.userAgent,s="Not sending request ",m=!1,g=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=u.addEventListener,_="https://queue."+t,b=undefined,E=d.documentElement||{},O="language",x="Height",A="scroll",M=l.userAgentData,S=A+x,T="offset"+x,D="client"+x,q="pagehide",$="platform",B="platformVersion",C=/(bot|spider|crawl)/i.test(c)&&!/(cubot)/i.test(c),R=u.screen,k=l.webdriver||u.__nightmare||"callPhantom"in u||"_phantom"in u||"phantom"in u||C,H={version:"cdn_latest_7",ua:c};k&&(H.bot=!0),H.sri=!0,M&&(H.mobile=M.mobile,H.brands=y(M.brands));var I=function(e){a&&a.warn&&a.warn("Simple Analytics:",e)},P=Date.now,V=function(){var t=u.crypto||u.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},j=function(e){return"function"==typeof e},N=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},U=function(e){var t=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},z=function(t,e){t=N(H,t);var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=_+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=b}).map(function(e){return g(e)+"="+g(t[e])}).join("&")+"&time="+Date.now()},L=function(e){e=e.message||e,I(e),z({type:i,error:e,url:ee+f.pathname})};w(i,function(e){e.filename&&-1<e.filename.indexOf(t)&&L(e.message)},!1);var W,F="pushState",G=u.dispatchEvent,J=P(),Y=0;try{W=Intl.DateTimeFormat().resolvedOptions().timeZone}catch($e){}var Z=d.querySelector('script[src*="'+t+'"]'),K=function(e,t){return e&&e.getAttribute("data-"+t)},Q=e.mode||K(Z,"mode"),X=!!(qe=e.collectDnt)===qe?e.collectDnt:"true"==K(Z,"ignore-dnt")||"true"==K(Z,"skip-dnt"),ee=e.hostname||K(Z,"hostname")||h,te=!("false"==K(Z,"auto-collect")||!1===e.autoCollect),ne=e.saGlobal||K(Z,"sa-global")||n,re=e.ignorePages||K(Z,"ignore-pages"),ie=Array.isArray(re)?re:"string"==typeof re&&re.length?re.split(/, ?/):[];if(H.hostname=ee,d.doctype||I("Add DOCTYPE html for more accurate dimensions"),ee!==h&&(H.hostname_original=h),!X&&o in l&&"1"==l[o])return I(s+"when "+o+" is enabled");if(-1==h.indexOf(".")||/^[0-9]+$/.test(h.replace(/\./g,"")))return I(s+"from "+h);var ae,oe,ce={},se=V(),ue=(d.referrer||"").replace(h,ee).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||b,pe="(utm_)?",le={source:U(pe+"source|ref"),medium:U(pe+"medium"),campaign:U(pe+"campaign"),term:U(pe+"term"),content:U(pe+"content"),referrer:ue},fe=0,he="sendBeacon",de=function(e,t){var n={type:"append",original_id:t?e:se};n.duration=Math.round((P()-J-fe)/1e3),fe=0,J=P(),n.scrolled=Math.max(0,Y,ge()),!t&&he in l?l[he](_+"/append",y(N(H,n))):z(n)};u.addEventListener("visibilitychange",function(){d.hidden?("on"+q in u||de(),oe=P()):fe+=P()-oe},!1),w(q,de,!1);var me=d.body||{},ge=function(){try{var e=E[D]||0,t=Math.max(me[S]||0,me[T]||0,E[D]||0,E[S]||0,E[T]||0);return Math.min(100,5*Math.round(100*((E.scrollTop||0)+e)/t/5))}catch(n){return 0}};w("load",function(){Y=ge(),w(A,function(){Y<ge()&&(Y=ge())},!1)});var ve=function(e){var t="";try{t=e||v(f.pathname)}catch($e){}if(!function(e){for(var t in ie){var n=ie[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(i){return!1}}}return!1}(t))return"hash"==Q&&f.hash&&(t+=f.hash.split("?")[0]),t;I(s+"because "+t+" is ignored")},ye=function(e,t){var n=ve(t);if(n&&ae!=n){var r={path:ae=n,viewport_width:Math.max(E.clientWidth||0,u.innerWidth||0)||null,viewport_height:Math.max(E[D]||0,u.innerHeight||0)||null};l[O]&&(r[O]=l[O]),R&&(r.screen_width=R.width,r.screen_height=R.height);var i=u.performance,a="navigation",o=i&&i.getEntriesByType&&i.getEntriesByType(a)[0]&&i.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(i.getEntriesByType(a)[0].type):i&&i[a]&&-1<[1,2].indexOf(i[a].type),c=!!ue&&d.referrer.split("/")[2]==h;r.unique=!e&&!o&&!c,ce=r;var s=function(){m=!0,function(e,t,n){e&&de(""+se,!0),se=V(),ce.id=se;var r=ee+ve();z(N(ce,t?{referrer:n?ue:null}:le,{https:f.protocol==p,timezone:W,type:"pageview"})),ue=r}(e,e||o,c)};if(m)s();else try{M&&j(M.getHighEntropyValues)?M.getHighEntropyValues([$,B]).then(function(e){H.os_name=e[$],H.os_version=e[B],s()})["catch"](s):s()}catch($e){s()}}},we=u.history,_e=we?we.pushState:b;te&&_e&&Event&&G&&(we.pushState=(De=we[Te=F],function(){var e,t=arguments,n=De.apply(this,t);return"function"==typeof Event?e=new Event(Te):(e=d.createEvent("Event")).initEvent(Te,!0,!0),e.arguments=t,G(e),n}),w(F,function(){ye(1)},!1),w("popstate",function(){ye(1)},!1)),te&&"hash"==Q&&"onhashchange"in u&&w("hashchange",function(){ye(1)},!1),te?ye():u.sa_pageview=function(e){ye(0,e)};var be=V(),Ee=["string","number"],Oe=function(e,t){var n=j(e),r=j(t)?t:function(){};if(Ee.indexOf(typeof e)<0&&!n)return I("event is not a string: "+e),r();try{if(n&&(e=e(),Ee.indexOf(typeof e)<0))return I("event function output is not a string: "+e),r()}catch(i){return I("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&z(N(le,k?{bot:!0}:{},{type:"event",event:e,page_id:ce.id,session_id:be}),r)},xe=function(e,t){Oe(e,t)};u[ne]||(u[ne]=xe);var Ae=u[ne],Me=Ae&&Ae.q?Ae.q:[];for(var Se in u[ne]=xe,Me)Array.isArray(Me[Se])?Oe.apply(null,Me[Se]):Oe(Me[Se])}catch($e){L($e)}var Te,De,qe}(window,{},"simpleanalyticscdn.com","sa_event");
//# sourceMappingURL=latest.js.map
!function(s,e,n){var r,i,t;if(s)try{var u="https:",a="error",o=s.console,c="doNotTrack",p=s.navigator,f=s.location,l=f.hostname,h=s.document,d=p.userAgent,g="Not sending request ",m=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=s.addEventListener,_="https://queue."+n,E=undefined,b=h.documentElement||{},O="language",x="Height",A="scroll",M=A+x,S="offset"+x,T="client"+x,k=s.screen,q=p.webdriver||s.__nightmare||"callPhantom"in s||"_phantom"in s||"phantom"in s||/(bot|spider|crawl)/i.test(d)||s.chrome&&(""===p.languages||!p.plugins.length||!(p.plugins instanceof PluginArray)),R={version:0};q&&(R.bot=!0);var $=function(e){o&&o.warn&&o.warn("Simple Analytics:",e)},B=Date.now,C=function(){var n=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11;return n&&n.getRandomValues?e.replace(/[018]/g,function(e){return(e^n.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}):e.replace(/[018]/g,function(e){var n=16*Math.random()|0;return(e<2?n:3&n|8).toString(16)})},D=function(){for(var e={},n=arguments,t=0;t<n.length;t++){var r=n[t];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},P=function(e){var n=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]},I=function(n,e){n=D(R,n);var t=new Image;e&&(t.onerror=e,t.onload=e),t.src=_+"/simple.gif?"+Object.keys(n).filter(function(e){return n[e]!=E}).map(function(e){return m(e)+"="+m(n[e])}).join("&")},j=function(e){e=e.message||e,$(e),I({type:a,error:e,url:J+f.pathname})};w(a,function(e){e.filename&&-1<e.filename.indexOf(n)&&j(e.message)},!1);var F,N="pushState",U=s.dispatchEvent,W=B(),z=0;try{F=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(be){}var H=h.querySelector('script[src*="'+n+'"]'),L=function(e,n){return e&&e.getAttribute("data-"+n)},V=e.mode||L(H,"mode"),G=!!(t=e.skipDnt)===t?e.skipDnt:"true"==L(H,"ignore-dnt")||"true"==L(H,"skip-dnt"),J=e.hostname||L(H,"hostname")||l,Y=e.ignorePages||L(H,"ignore-pages"),Z=!("false"==L(H,"auto-collect")||!1===e.autoCollect),K=e.saGlobal||L(H,"sa-global")||"sa_event",Q=Array.isArray(Y)?Y:"string"==typeof Y&&Y.length?Y.split(/, ?/):[];if(R.hostname=J,h.doctype||$("Add DOCTYPE html for more accurate dimensions"),J!==l&&(R.hostname_original=l),!G&&c in p&&"1"==p[c])return $(g+"when "+c+" is enabled");if(-1==l.indexOf(".")||/^[0-9]+$/.test(l.replace(/\./g,"")))return $(g+"from "+l);var X,ee,ne={},te=C(),re=(h.referrer||"").replace(l,J).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||E,ie="(utm_)?",ae={source:P(ie+"source|ref"),medium:P(ie+"medium"),campaign:P(ie+"campaign"),term:P(ie+"term"),content:P(ie+"content"),referrer:re},oe=0;s.addEventListener("visibilitychange",function(){h.hidden?ee=B():oe+=B()-ee},!1);var ce="sendBeacon",se=function(e,n){var t={type:"append",original_id:n?e:te};t.duration=Math.round((B()-W+oe)/1e3),oe=0,W=B(),t.scrolled=Math.max(0,z,pe()),!n&&ce in p?p[ce](_+"/append",y(D(R,t))):I(t)};w("unload",se,!1);var ue=h.body||{},pe=function(){try{var e=b[T]||0,n=Math.max(ue[M]||0,ue[S]||0,b[T]||0,b[M]||0,b[S]||0);return Math.min(100,5*Math.round(100*((b.scrollTop||0)+e)/n/5))}catch(t){return 0}};w("load",function(){z=pe(),w(A,function(){z<pe()&&(z=pe())},!1)});var fe=function(e){var n=e||v(f.pathname);if(!function(e){for(var n in Q){var t=Q[n];if(t){var r="/"==t[0]?t:"/"+t;if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}}return!1}(n))return"hash"==V&&f.hash&&(n+=f.hash.split("?")[0]),n;$(g+"because "+n+" is ignored")},le=function(e,n){var t,r,i,a,o,c=fe(n);c&&X!=c&&(t={path:X=c,viewport_width:Math.max(b.clientWidth||0,s.innerWidth||0)||null,viewport_height:Math.max(b[T]||0,s.innerHeight||0)||null},p[O]&&(t[O]=p[O]),k&&(t.screen_width=k.width,t.screen_height=k.height),i="navigation",a=(r=s.performance)&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type),o=!!re&&re.split("/")[0]==J,t.unique=!e&&!a&&!o,ne=t,function(e,n,t){e&&se(""+te,!0),te=C(),ne.id=te;var r=J+fe();I(D(ne,n?{referrer:t?re:null}:ae,{https:f.protocol==u,timezone:F,width:s.innerWidth,type:"pageview"})),re=r}(e,e||a,o))},he=s.history,de=he?he.pushState:E;Z&&de&&Event&&U&&(he.pushState=(i=he[r=N],function(){var e,n=arguments,t=i.apply(this,n);return"function"==typeof Event?e=new Event(r):(e=h.createEvent("Event")).initEvent(r,!0,!0),e.arguments=n,U(e),t}),w(N,function(){le(1)},!1),w("popstate",function(){le(1)},!1)),Z&&"hash"==V&&"onhashchange"in s&&w("hashchange",function(){le(1)},!1),Z?le():s.sa_pageview=function(e){le(0,e)};var ge=C(),me=["string","number"],ve=function(e,n){var t=e instanceof Function,r=n instanceof Function?n:function(){};if(me.indexOf(typeof e)<0&&!t)return $("event is not a string: "+e),r();try{if(t&&(e=e(),me.indexOf(typeof e)<0))return $("event function output is not a string: "+e),r()}catch(i){return $("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&I(D(ae,{type:"event",event:e,page_id:ne.id,session_id:ge}),r)},ye=function(e,n){ve(e,n)};s[K]||(s[K]=ye);var we=s[K],_e=we&&we.q?we.q:[];for(var Ee in s[K]=ye,_e)ve(_e[Ee])}catch(be){j(be)}}(window,{},"simpleanalyticscdn.com");
//# sourceMappingURL=hello.js.map
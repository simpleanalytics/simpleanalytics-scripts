/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-02-27; 82bd) */

!function(o,n){if(o){function c(){var n=o.crypto||o.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11;return n?e.replace(/[018]/g,function(e){return(e^n.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}):e.replace(/[018]/g,function(e){var n=16*Math.random()|0;return(e<2?n:3&n|8).toString(16)})}var s,p="https:",t="error",r=o.console,e="doNotTrack",a=o.navigator,u=o.location,i=o.document,f="Not sending requests ",h=encodeURIComponent,m=decodeURIComponent,d=JSON.stringify,l=o.addEventListener,g="https://"+n,y=undefined,v={version:2},w=function(e){r&&r.warn&&r.warn("Simple Analytics:",e)},E=(Date.now,function(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];if(t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e});try{s=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(J){}l(t,function(e){e.filename&&-1<e.filename.indexOf(n)&&H(e.message)},!1);function O(e,n){return e&&e.getAttribute("data-"+n)}var S,b,x="pushState",T=o.dispatchEvent,B=i.querySelector('script[src*="'+n+'"]'),k=O(B,"mode"),I="true"==O(B,"skip-dnt"),R=O(B,"hostname")||u.hostname;O(B,"sa-global");if(v.hostname=R,!I&&e in a&&"1"==a[e])return w(f+"when "+e+" is enabled");if(-1==R.indexOf("."))return w(f+"from localhost");try{function $(e){var n=u.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]}function j(e,n){var t={type:"append",original_id:n?e:N};!n&&q in a?a[q](g+"/append",d(t)):F(t)}var A,C={},N=c(),U="(utm_)?",_={source:$(U+"source|source|ref"),medium:$(U+"medium"),campaign:$(U+"campaign"),referrer:(i.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||y},q="sendBeacon";l("unload",j,!1);function D(e){var n=m(u.pathname);if("hash"==k&&u.hash&&(n+=u.hash.split("?")[0]),A!=n){var t={path:A=n},r=o.performance,a="navigation",i=r&&r.getEntriesByType&&r.getEntriesByType(a)[0]&&r.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(a)[0].type):r&&r[a]&&-1<[1,2].indexOf(r[a].type);C=t,function(e,n){e&&j(""+N,!0),N=c(),C.id=N,F(E(C,n?null:_,{https:u.protocol==p,timezone:s,width:o.innerWidth,type:"pageview"}))}(e,e||i)}}var z=o.history;if((z?z.pushState:y)&&Event&&T){l(x,function(){D(1)},!(z.pushState=(b=z[S=x],function(){var e,n=b.apply(this,arguments);return"function"==typeof Event?e=new Event(S):(e=i.createEvent("Event")).initEvent(S,!0,!0),e.arguments=arguments,T(e),n}))),l("popstate",function(){D(1)},!1)}"hash"==k&&"onhashchange"in o&&l("hashchange",function(){D(1)},!1),D()}catch(J){H(J)}}function F(n){n=E(v,n),(new Image).src=g+"/simple.gif?"+Object.keys(n).filter(function(e){return n[e]!=y}).map(function(e){return h(e)+"="+h(n[e])}).join("&")}function H(e){e=e.message||e,w(e),F({type:t,error:e,url:R+u.pathname})}}(window,"<!--# echo var="http_host" default="" -->");
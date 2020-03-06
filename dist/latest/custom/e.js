/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-03-06; 0fb3) */

!function(a,e,n){if(a){function c(){var n=a.crypto||a.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11;return n?e.replace(/[018]/g,function(e){return(e^n.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}):e.replace(/[018]/g,function(e){var n=16*Math.random()|0;return(e<2?n:3&n|8).toString(16)})}var s,u="https:",t="error",r=a.console,i="doNotTrack",o=a.navigator,f=a.location,p=a.document,m="Not sending requests ",d=encodeURIComponent,h=decodeURIComponent,l=JSON.stringify,v=a.addEventListener,g="https://"+n,y=undefined,w={version:2},E=function(e){r&&r.warn&&r.warn("Simple Analytics:",e)},O=Date.now,b=function(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];if(t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};try{s=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(re){}v(t,function(e){e.filename&&-1<e.filename.indexOf(n)&&te(e.message)},!1);function x(e,n){return e&&e.getAttribute("data-"+n)}var N,S,T="pushState",_=a.dispatchEvent,k=O(),D=0,M=p.querySelector('script[src*="'+n+'"]'),q={mode:e.mode||x(M,"mode"),recordDnt:function ie(e){return!!e===e}(e.skipDnt)?e.skipDnt:"true"==x(M,"record-dnt")||"true"==x(M,"skip-dnt"),hostname:e.hostname||x(M,"hostname")||f.hostname,functionName:e.saGlobal||x(M,"sa-global")||"sa"};if(w.hostname=q.hostname,!q.recordDnt&&i in o&&"1"==o[i])return E(m+"when "+i+" is enabled");if(-1==f.hostname.indexOf("."))return E(m+"from "+f.localhost);try{function B(e){var n=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]}var $,I,R={},j=c(),A="(utm_)?",C={source:B(A+"source|source|ref"),medium:B(A+"medium"),campaign:B(A+"campaign"),referrer:(p.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||y},U=0;a.addEventListener("visibilitychange",function(){p.hidden?I=O():U+=O()-I},!1);function z(e,n){var t={type:"append",original_id:n?e:j};t.duration=Math.round((O()-k+U)/1e3),U=0,k=O(),t.scrolled=Math.max(0,D,J()),!n&&F in o?o[F](g+"/append",l(b(w,t))):ne(t)}var F="sendBeacon";v("unload",z,!1);var H="scroll",L=p.body||{},G=p.documentElement||{},J=function(){try{var e="Height",n=H+e,t="offset"+e,r="client"+e,i=G[r]||0,o=Math.max(L[n]||0,L[t]||0,G[r]||0,G[n]||0,G[t]||0);return Math.min(100,5*Math.round(100*((G.scrollTop||0)+i)/o/5))}catch(a){return 0}};v("load",function(){D=J(),v(H,function(){D<J()&&(D=J())},!1)});function P(e){var n=h(f.pathname);if("hash"==q.mode&&f.hash&&(n+=f.hash.split("?")[0]),$!=n){var t={path:$=n},r=a.performance,i="navigation",o=r&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type);t.unique=!e&&!o&&(!p.referrer||p.referrer.split("/")[2]!=f.hostname),R=t,function(e,n){e&&z(""+j,!0),j=c(),R.id=j,ne(b(R,n?null:C,{https:f.protocol==u,timezone:s,width:a.innerWidth,type:"pageview"}))}(e,e||o)}}var V=a.history;if((V?V.pushState:y)&&Event&&_){V.pushState=(S=V[N=T],function(){var e,n=S.apply(this,arguments);return"function"==typeof Event?e=new Event(N):(e=p.createEvent("Event")).initEvent(N,!0,!0),e.arguments=arguments,_(e),n}),v(T,function(){P(1)},!1),v("popstate",function(){P(1)},!1)}"hash"==q.mode&&"onhashchange"in a&&v("hashchange",function(){P(1)},!1),P();function W(e){var n=e instanceof Function;if(Q.indexOf(typeof e)<0&&!n)return E("event is not a string: "+e);try{if(n&&(e=e(),Q.indexOf(typeof e)<0))return E("event function output is not a string: "+e)}catch(t){return E("in your event function: "+t.message)}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&ne(b(C,{type:"event",event:e,session_id:K}))}function Z(e){W(e)}var K=c(),Q=["string","number"];a[q.functionName]||(a[q.functionName]=Z);var X=a[q.functionName],Y=X&&X.q?X.q:[];for(var ee in a[q.functionName]=Z,Y)W(Y[ee])}catch(re){te(re)}}function ne(n){n=b(w,n),(new Image).src=g+"/simple.gif?"+Object.keys(n).filter(function(e){return n[e]!=y}).map(function(e){return d(e)+"="+d(n[e])}).join("&")}function te(e){e=e.message||e,E(e),ne({type:t,error:e,url:q.hostname+f.pathname})}}(window,"<!--# echo var="http_host" default="" -->",{});
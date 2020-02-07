/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-02-07; 1223) */

!function(d,t,e){if(d){var n="https:",r=n+"//",h=r+e+t+"/v2/post",a=r+e+t,l=r+"online."+t+"/v1/visit",i=d.console,o="doNotTrack",p="pageviews",f="events",s=d.navigator,c=s.userAgent,u=d.location,m=d.document,v=u.hostname,g="Not sending requests ",y="Content-Type",w=null,T=encodeURIComponent,E=decodeURIComponent,q="text/plain; charset=UTF-8",b=d.addEventListener,x=function(e){i&&i.warn&&i.warn("Simple Analytics: "+e)};b("error",function(e){e.filename&&-1<e.filename.indexOf(t)&&re(e.message)},!1);function O(e,t){return e&&e.getAttribute("data-"+t)}var S,M,R="pushState",D=d.dispatchEvent,B=Date.now(),H=0,C=m.querySelector('script[src*="'+t+'"]'),I=O(C,"mode"),L="true"===O(C,"skip-dnt"),$=O(C,"sa-global")||"sa";if(!L&&o in s&&"1"===s[o])return x(g+"when "+o+" is enabled");if(-1===v.indexOf("."))return x(g+"from localhost");if(!c||-1<c.search(/(bot|spider|crawl)/gi))return x(g+"because bot detected");try{function _(e){var t=u.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]}var k;try{k=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(ae){}var A="(utm_)?",F={version:0,hostname:v,https:u.protocol===n,timezone:k,width:d.innerWidth,source:{source:_(A+"source|source|ref"),medium:_(A+"medium"),campaign:_(A+"campaign"),referrer:(m.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||w},pageviews:[]},N=0,U=w;d.addEventListener("visibilitychange",function(){m.hidden?U=Date.now():N+=Date.now()-U},!1);function P(e){return Math.round((Date.now()-(e||0))/1e3)}var X,z="sendBeacon",J=JSON.stringify,W=z in s&&!1===/ip(hone|ad)(.*)os\s([1-9]|1[0-2])_/i.test(c);W&&b("unload",function(){try{var e=F[p][F[p].length-1];e.duration=P(B+N),N=0;var t=Math.max(0,H,G());t&&(e.scrolled=t),F.time=P(),s[z](h,J(F))}catch(n){re(n)}},!1);var Z=m.body||{},j=m.documentElement||{},G=function(){try{var e="Height",t="scroll"+e,n="offset"+e,r="client"+e,a=j[r]||0,i=Math.max(Z[t]||0,Z[n]||0,j[r]||0,j[t]||0,j[n]||0);return Math.min(100,5*Math.round(100*((j.scrollTop||0)+a)/i/5))}catch(o){return re(o),0}};b("load",function(){H=G(),b("scroll",function(){H<G()&&(H=G())},!1)});function K(e,t,n){try{var r,a=F[p],i=a?a.length:0,o=i?a[i-1]:w;if(e===f){try{r=""+(t instanceof Function?t():t)}catch(u){x("in your event function: "+u.message),r="event_errored"}if(o?o[f]?o[f].push(r):o[f]=[r]:W&&x("Couldn't save event '"+r+"'"),W)return;delete F[p],F[f]=[r]}else{i&&(o.duration=P(B+N),o.scrolled=H),F[p]?F[p].push(t):F[p]=[t],n&&0===i&&delete F.source;try{var s=new XMLHttpRequest;s.open("POST",l,!0),s.setRequestHeader(y,q),s.send(J(F))}catch(u){}if(W)return B=Date.now(),N=0,void(H=d.setTimeout(G,500))}n&&delete F.source;var c=new XMLHttpRequest;c.open("POST",h,!0),F.time=P(),c.setRequestHeader(y,q),c.send(J(F)),delete F[p],delete F[f]}catch(u){re(u)}}function Q(e){var t=E(u.pathname);if("hash"===I&&u.hash&&(t+=u.hash.split("?")[0]),X!==t){var n={path:X=t,added:P()},r=d.performance,a="navigation",i=r&&r.getEntriesByType&&r.getEntriesByType(a)[0]&&r.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(a)[0].type):r&&r[a]&&-1<[1,2].indexOf(r[a].type);n.unique=!e&&!i&&(!m.referrer||m.referrer.split("/")[2]!==v),K(p,n,e||i)}}var V=d.history;if((V?V.pushState:w)&&Event&&D){V.pushState=(M=V[S=R],function(){var e=M.apply(this,arguments),t=new Event(S);return t.arguments=arguments,D(t),e}),b(R,function(){Q(1)},!1),b("popstate",function(){Q(1)},!1)}"hash"===I&&"onhashchange"in d&&b("hashchange",function(){Q(1)},!1),Q();function Y(e){K(f,e)}d[$]||(d[$]=Y);var ee=d[$],te=ee&&ee.q?ee.q:[];for(var ne in d[$]=Y,te)K(f,te[ne])}catch(ae){re(ae)}}function re(e){e=e.message||e,x(e),(new Image).src=a+"/error.gif?error="+T(e)+"&url="+T(v+u.pathname)}}(window,"simpleanalyticscdn.com","queue.");
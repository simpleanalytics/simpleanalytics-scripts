/* Simple Analytics - Privacy friend analytics (docs.simpleanalytics.com/script) */

!function(r){if(r){function a(e){s&&s.warn&&s.warn("Simple Analytics: "+e)}function e(e){var t=l.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]}var n,i,t="https://",o=t+"<!--# echo var="http_host" default="" -->",s=r.console,c="doNotTrack",u="pageviews",h=r.navigator,l=r.location,p=r.document,d=l.hostname,m={version:2,hostname:d,pageviews:[],events:[]},f="pushState",g=r.dispatchEvent;try{var v,w=h.userAgent,y=r.addEventListener,S=JSON.stringify,b="Not sending requests ",T="sendBeacon"in r.navigator&&!1===/ip(hone|ad)(.*)os\s([1-9]|1[0-2])_/i.test(w);T&&y("unload",function(){m[u][m[u].length-1];A&&(m.timezone=A),m.currentTime=Date.now(),navigator.sendBeacon(o+"post",S(m))},!1);function E(e,t){return e&&e.getAttribute("data-"+t)}var R=p.querySelector('script[src="'+t+scriptUrl+'"]'),q=E(R,"mode"),$="true"===E(R,"skip-dnt");E(R,"sa-global");if(!w||-1<w.search(/(bot|spider|crawl)/gi))return a(b+"because bot detected");var A,D=e("utm_source|source|ref"),I=(e("utm_campaign|campaign"),(p.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||null);try{A=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(_){}function N(e){var t=l.protocol+"//"+d+l.pathname;if("hash"===q&&l.hash&&(t+=l.hash.split("?")[0]),v!==t){if(v=t,!$&&c in h&&"1"===h[c])return a(b+"when "+c+" is enabled");if("localhost"===d||"file:"===l.protocol)return a(b+"from localhost");var n={url:t,added:Date.now()};D&&(n.urlReferrer=D),r.innerWidth&&(n.width=r.innerWidth),e||(I&&(n.referrer=I),A&&(n.timezone=A),n.version=2),function(e,t){if(T){var n=m[e];return n.length,n.push(t)}var r=new XMLHttpRequest;r.open("POST",o+e,!0),r.setRequestHeader("Content-Type","text/plain; charset=UTF-8"),r.send(S(t))}(u,n)}}var O=r.history;if((O?O.pushState:null)&&Event&&g){O.pushState=(i=O[n=f],function(){var e=i.apply(this,arguments),t=new Event(n);return t.arguments=arguments,g(t),e}),y(f,function(){N(1)})}"hash"===q&&"onhashchange"in r&&(r.onhashchange=function(){N(1)}),N()}catch(_){a(_.message);var U=o+"image.gif";_.message&&(U=U+"?error="+encodeURIComponent(_.message)),(new Image).src=U}}}(window);
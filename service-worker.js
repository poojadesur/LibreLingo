!function(s){var e={};function i(l){if(e[l])return e[l].exports;var a=e[l]={i:l,l:!1,exports:{}};return s[l].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=s,i.c=e,i.d=function(s,e,l){i.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:l})},i.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,e){if(1&e&&(s=i(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var a in s)i.d(l,a,function(e){return s[e]}.bind(null,a));return l},i.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(e,"a",e),e},i.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},i.p="",i(i.s=0)}([function(s,e,i){"use strict";i.r(e);const l=["client/../../../static/files/josefin-sans-all-100-italic.woff","client/../../../static/files/josefin-sans-all-100-italic.woff2","client/../../../static/files/josefin-sans-all-100.woff","client/../../../static/files/josefin-sans-all-100.woff2","client/../../../static/files/josefin-sans-all-300-italic.woff","client/../../../static/files/josefin-sans-all-300-italic.woff2","client/../../../static/files/josefin-sans-all-300.woff","client/../../../static/files/josefin-sans-all-300.woff2","client/../../../static/files/josefin-sans-all-400-italic.woff","client/../../../static/files/josefin-sans-all-400-italic.woff2","client/../../../static/files/josefin-sans-all-400.woff","client/../../../static/files/josefin-sans-all-400.woff2","client/../../../static/files/josefin-sans-all-600-italic.woff","client/../../../static/files/josefin-sans-all-600-italic.woff2","client/../../../static/files/josefin-sans-all-600.woff","client/../../../static/files/josefin-sans-all-600.woff2","client/../../../static/files/josefin-sans-all-700-italic.woff","client/../../../static/files/josefin-sans-all-700-italic.woff2","client/../../../static/files/josefin-sans-all-700.woff","client/../../../static/files/josefin-sans-all-700.woff2","client/b5e216cae3ea50b6eb59/index.0.js","client/b5e216cae3ea50b6eb59/main.js","client/b5e216cae3ea50b6eb59/skill_$id.2.js","client/b5e216cae3ea50b6eb59/vendors~skill_$id.3.js","client/css/mystyles.css","client/fonts/josefin-sans-all-100-italic.woff","client/fonts/josefin-sans-all-100-italic.woff2","client/fonts/josefin-sans-all-100.woff","client/fonts/josefin-sans-all-100.woff2","client/fonts/josefin-sans-all-300-italic.woff","client/fonts/josefin-sans-all-300-italic.woff2","client/fonts/josefin-sans-all-300.woff","client/fonts/josefin-sans-all-300.woff2","client/fonts/josefin-sans-all-400-italic.woff","client/fonts/josefin-sans-all-400-italic.woff2","client/fonts/josefin-sans-all-400.woff","client/fonts/josefin-sans-all-400.woff2","client/fonts/josefin-sans-all-600-italic.woff","client/fonts/josefin-sans-all-600-italic.woff2","client/fonts/josefin-sans-all-600.woff","client/fonts/josefin-sans-all-600.woff2","client/fonts/josefin-sans-all-700-italic.woff","client/fonts/josefin-sans-all-700-italic.woff2","client/fonts/josefin-sans-all-700.woff","client/fonts/josefin-sans-all-700.woff2"].concat(["service-worker-index.html","files/josefin-sans-all-100-italic.woff","files/josefin-sans-all-100-italic.woff2","files/josefin-sans-all-100.woff","files/josefin-sans-all-100.woff2","files/josefin-sans-all-300-italic.woff","files/josefin-sans-all-300-italic.woff2","files/josefin-sans-all-300.woff","files/josefin-sans-all-300.woff2","files/josefin-sans-all-400-italic.woff","files/josefin-sans-all-400-italic.woff2","files/josefin-sans-all-400.woff","files/josefin-sans-all-400.woff2","files/josefin-sans-all-600-italic.woff","files/josefin-sans-all-600-italic.woff2","files/josefin-sans-all-600.woff","files/josefin-sans-all-600.woff2","files/josefin-sans-all-700-italic.woff","files/josefin-sans-all-700-italic.woff2","files/josefin-sans-all-700.woff","files/josefin-sans-all-700.woff2","images/bear1.jpg","images/bear2.jpg","images/bear3.jpg","images/bread1.jpg","images/bread2.jpg","images/bread3.jpg","images/cat1.jpg","images/cat2.jpg","images/cat3.jpg","images/couple1.jpg","images/couple2.jpg","images/couple3.jpg","images/dog1.jpg","images/dog2.jpg","images/dog3.jpg","images/duck1.jpg","images/duck2.jpg","images/duck3.jpg","images/lion1.jpg","images/lion2.jpg","images/lion3.jpg","images/milk1.jpg","images/milk2.jpg","images/milk3.jpg","images/pasta1.jpg","images/pasta2.jpg","images/pasta3.jpg","images/people1.jpg","images/people2.jpg","images/people3.jpg","images/sky1.jpg","images/sky2.jpg","images/sky3.jpg","images/student1.jpg","images/student2.jpg","images/student3.jpg","manifest.json","sound/correct.mp3","sound/wrong.mp3"]),a=new Set(l);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1575895067208").then(s=>s.addAll(l)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const e of s)"cache1575895067208"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const e=new URL(s.request.url);e.protocol.startsWith("http")&&(e.hostname===self.location.hostname&&e.port!==self.location.port||(e.host===self.location.host&&a.has(e.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1575895067208").then(async e=>{try{const i=await fetch(s.request);return e.put(s.request,i.clone()),i}catch(i){const l=await e.match(s.request);if(l)return l;throw i}}))))})}]);
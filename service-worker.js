!function(){"use strict";const e=1607572502821,t=`cache${e}`,a=["/client/client.30200547.js","/client/inject_styles.5607aec6.js","/client/index.c111dd6f.js","/client/accentStore.be5792d0.js","/client/writableLocalStorage.c89603c6.js","/client/index.5310caca.js","/client/index.76ae7b18.js","/client/index.89ac5da0.js","/client/index.d5977990.js","/client/index.f48474a5.js","/client/index.d4f0d695.js"].concat(["/service-worker-index.html","/audio/a.mp3","/audio/and.mp3","/audio/be.mp3","/audio/i.mp3","/audio/in.mp3","/audio/it.mp3","/audio/of.mp3","/audio/that.mp3","/audio/the.mp3","/audio/to.mp3","/audio/was.mp3","/css/tailwind.min.css","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),n=new Set(a);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(a))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const a of e)a!==t&&await caches.delete(a);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const a=new URL(t.request.url),i=a.protocol.startsWith("http"),c=a.hostname===self.location.hostname&&a.port!==self.location.port,s=a.host===self.location.host&&n.has(a.pathname),o="only-if-cached"===t.request.cache&&!s;!i||c||o||t.respondWith((async()=>s&&await caches.match(t.request)||async function(t){const a=await caches.open(`offline${e}`);try{const e=await fetch(t);return a.put(t,e.clone()),e}catch(e){const n=await a.match(t);if(n)return n;throw e}}(t.request))())}))}();

!function(){"use strict";const e=1607399014333,t=`cache${e}`,n=["/client/client.aa0386e0.js","/client/inject_styles.5607aec6.js","/client/index.552323a1.js","/client/accentStore.8439cb0f.js","/client/index.7fef537b.js","/client/index.1927f294.js","/client/index.bd5fb850.js","/client/index.95ef4b6e.js","/client/index.58a3fdd8.js","/client/index.cdc28e73.js","/client/index.1ed6e5f0.js","/client/index.4a955c32.js","/client/index.3c191c81.js"].concat(["/service-worker-index.html","/css/tailwind.min.css","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&c.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!s||i||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
!function(){"use strict";const e=1607475415918,t=`cache${e}`,n=["/client/client.0e080634.js","/client/inject_styles.5607aec6.js","/client/index.d0690d8f.js","/client/accentStore.ac44ed59.js","/client/writableLocalStorage.5df6b852.js","/client/index.dfd94110.js","/client/index.f6b48099.js","/client/index.3672efaa.js","/client/index.239fb2a9.js","/client/index.fb6f60c9.js","/client/index.0be32622.js"].concat(["/service-worker-index.html","/css/tailwind.min.css","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!i;!c||a||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();

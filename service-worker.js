!function(){"use strict";const e=1607476415401,t=`cache${e}`,n=["/client/client.85363b0d.js","/client/inject_styles.5607aec6.js","/client/index.55b43cb2.js","/client/accentStore.eeb6c85b.js","/client/writableLocalStorage.73815fac.js","/client/index.e5ab6e03.js","/client/index.21c77b45.js","/client/index.3da0c925.js","/client/index.3364f47b.js","/client/index.21d5bbb0.js","/client/index.14485821.js"].concat(["/service-worker-index.html","/css/tailwind.min.css","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&c.has(n.pathname),l="only-if-cached"===t.request.cache&&!i;!s||a||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();

!function(){"use strict";const a=1607590236600,i=`cache${a}`,t=["/client/client.2f9b888c.js","/client/inject_styles.5607aec6.js","/client/index.62ad3927.js","/client/accentStore.9725e70d.js","/client/writableLocalStorage.13c57639.js","/client/index.66861a67.js","/client/index.8a555fb9.js","/client/colourStore.0f722dbe.js","/client/index.1cd03ac5.js","/client/index.56fea22c.js","/client/index.56f9c856.js","/client/index.db41f85a.js"].concat(["/service-worker-index.html","/audio/australian/a.mp3","/audio/australian/about.mp3","/audio/australian/all.mp3","/audio/australian/an.mp3","/audio/australian/and.mp3","/audio/australian/are.mp3","/audio/australian/as.mp3","/audio/australian/at.mp3","/audio/australian/back.mp3","/audio/australian/be.mp3","/audio/australian/been.mp3","/audio/australian/before.mp3","/audio/australian/big.mp3","/audio/australian/but.mp3","/audio/australian/by.mp3","/audio/australian/call.mp3","/audio/australian/came.mp3","/audio/australian/can.mp3","/audio/australian/come.mp3","/audio/australian/could.mp3","/audio/australian/did.mp3","/audio/australian/do.mp3","/audio/australian/down.mp3","/audio/australian/first.mp3","/audio/australian/for.mp3","/audio/australian/from.mp3","/audio/australian/get.mp3","/audio/australian/go.mp3","/audio/australian/had.mp3","/audio/australian/has.mp3","/audio/australian/have.mp3","/audio/australian/he.mp3","/audio/australian/her.mp3","/audio/australian/here.mp3","/audio/australian/him.mp3","/audio/australian/his.mp3","/audio/australian/i.mp3","/audio/australian/if.mp3","/audio/australian/in.mp3","/audio/australian/into.mp3","/audio/australian/is.mp3","/audio/australian/it.mp3","/audio/australian/just.mp3","/audio/australian/like.mp3","/audio/australian/little.mp3","/audio/australian/look.mp3","/audio/australian/made.mp3","/audio/australian/make.mp3","/audio/australian/me.mp3","/audio/australian/more.mp3","/audio/australian/much.mp3","/audio/australian/must.mp3","/audio/australian/my.mp3","/audio/australian/new.mp3","/audio/australian/no.mp3","/audio/australian/not.mp3","/audio/australian/now.mp3","/audio/australian/of.mp3","/audio/australian/off.mp3","/audio/australian/old.mp3","/audio/australian/on.mp3","/audio/australian/one.mp3","/audio/australian/only.mp3","/audio/australian/or.mp3","/audio/australian/other.mp3","/audio/australian/our.mp3","/audio/australian/out.mp3","/audio/australian/over.mp3","/audio/australian/right.mp3","/audio/australian/said.mp3","/audio/australian/see.mp3","/audio/australian/she.mp3","/audio/australian/so.mp3","/audio/australian/some.mp3","/audio/australian/that.mp3","/audio/australian/the.mp3","/audio/australian/their.mp3","/audio/australian/them.mp3","/audio/australian/then.mp3","/audio/australian/there.mp3","/audio/australian/they.mp3","/audio/australian/this.mp3","/audio/australian/to.mp3","/audio/australian/two.mp3","/audio/australian/up.mp3","/audio/australian/want.mp3","/audio/australian/was.mp3","/audio/australian/we.mp3","/audio/australian/well.mp3","/audio/australian/went.mp3","/audio/australian/were.mp3","/audio/australian/what.mp3","/audio/australian/when.mp3","/audio/australian/where.mp3","/audio/australian/which.mp3","/audio/australian/who.mp3","/audio/australian/will.mp3","/audio/australian/with.mp3","/audio/australian/you.mp3","/audio/australian/your.mp3","/audio/english/a.mp3","/audio/english/about.mp3","/audio/english/all.mp3","/audio/english/an.mp3","/audio/english/and.mp3","/audio/english/are.mp3","/audio/english/as.mp3","/audio/english/at.mp3","/audio/english/back.mp3","/audio/english/be.mp3","/audio/english/been.mp3","/audio/english/before.mp3","/audio/english/big.mp3","/audio/english/but.mp3","/audio/english/by.mp3","/audio/english/call.mp3","/audio/english/came.mp3","/audio/english/can.mp3","/audio/english/come.mp3","/audio/english/could.mp3","/audio/english/did.mp3","/audio/english/do.mp3","/audio/english/down.mp3","/audio/english/first.mp3","/audio/english/for.mp3","/audio/english/from.mp3","/audio/english/get.mp3","/audio/english/go.mp3","/audio/english/had.mp3","/audio/english/has.mp3","/audio/english/have.mp3","/audio/english/he.mp3","/audio/english/her.mp3","/audio/english/here.mp3","/audio/english/him.mp3","/audio/english/his.mp3","/audio/english/i.mp3","/audio/english/if.mp3","/audio/english/in.mp3","/audio/english/into.mp3","/audio/english/is.mp3","/audio/english/it.mp3","/audio/english/just.mp3","/audio/english/like.mp3","/audio/english/little.mp3","/audio/english/look.mp3","/audio/english/made.mp3","/audio/english/make.mp3","/audio/english/me.mp3","/audio/english/more.mp3","/audio/english/much.mp3","/audio/english/must.mp3","/audio/english/my.mp3","/audio/english/new.mp3","/audio/english/no.mp3","/audio/english/not.mp3","/audio/english/now.mp3","/audio/english/of.mp3","/audio/english/off.mp3","/audio/english/old.mp3","/audio/english/on.mp3","/audio/english/one.mp3","/audio/english/only.mp3","/audio/english/or.mp3","/audio/english/other.mp3","/audio/english/our.mp3","/audio/english/out.mp3","/audio/english/over.mp3","/audio/english/right.mp3","/audio/english/said.mp3","/audio/english/see.mp3","/audio/english/she.mp3","/audio/english/so.mp3","/audio/english/some.mp3","/audio/english/that.mp3","/audio/english/the.mp3","/audio/english/their.mp3","/audio/english/them.mp3","/audio/english/then.mp3","/audio/english/there.mp3","/audio/english/they.mp3","/audio/english/this.mp3","/audio/english/to.mp3","/audio/english/two.mp3","/audio/english/up.mp3","/audio/english/want.mp3","/audio/english/was.mp3","/audio/english/we.mp3","/audio/english/well.mp3","/audio/english/went.mp3","/audio/english/were.mp3","/audio/english/what.mp3","/audio/english/when.mp3","/audio/english/where.mp3","/audio/english/which.mp3","/audio/english/who.mp3","/audio/english/will.mp3","/audio/english/with.mp3","/audio/english/you.mp3","/audio/english/your.mp3","/audio/tick.mp3","/audio/unitedStates/a.mp3","/audio/unitedStates/about.mp3","/audio/unitedStates/all.mp3","/audio/unitedStates/an.mp3","/audio/unitedStates/and.mp3","/audio/unitedStates/are.mp3","/audio/unitedStates/as.mp3","/audio/unitedStates/at.mp3","/audio/unitedStates/back.mp3","/audio/unitedStates/be.mp3","/audio/unitedStates/been.mp3","/audio/unitedStates/before.mp3","/audio/unitedStates/big.mp3","/audio/unitedStates/but.mp3","/audio/unitedStates/by.mp3","/audio/unitedStates/call.mp3","/audio/unitedStates/came.mp3","/audio/unitedStates/can.mp3","/audio/unitedStates/come.mp3","/audio/unitedStates/could.mp3","/audio/unitedStates/did.mp3","/audio/unitedStates/do.mp3","/audio/unitedStates/down.mp3","/audio/unitedStates/first.mp3","/audio/unitedStates/for.mp3","/audio/unitedStates/from.mp3","/audio/unitedStates/get.mp3","/audio/unitedStates/go.mp3","/audio/unitedStates/had.mp3","/audio/unitedStates/has.mp3","/audio/unitedStates/have.mp3","/audio/unitedStates/he.mp3","/audio/unitedStates/her.mp3","/audio/unitedStates/here.mp3","/audio/unitedStates/him.mp3","/audio/unitedStates/his.mp3","/audio/unitedStates/i.mp3","/audio/unitedStates/if.mp3","/audio/unitedStates/in.mp3","/audio/unitedStates/into.mp3","/audio/unitedStates/is.mp3","/audio/unitedStates/it.mp3","/audio/unitedStates/just.mp3","/audio/unitedStates/like.mp3","/audio/unitedStates/little.mp3","/audio/unitedStates/look.mp3","/audio/unitedStates/made.mp3","/audio/unitedStates/make.mp3","/audio/unitedStates/me.mp3","/audio/unitedStates/more.mp3","/audio/unitedStates/much.mp3","/audio/unitedStates/must.mp3","/audio/unitedStates/my.mp3","/audio/unitedStates/new.mp3","/audio/unitedStates/no.mp3","/audio/unitedStates/not.mp3","/audio/unitedStates/now.mp3","/audio/unitedStates/of.mp3","/audio/unitedStates/off.mp3","/audio/unitedStates/old.mp3","/audio/unitedStates/on.mp3","/audio/unitedStates/one.mp3","/audio/unitedStates/only.mp3","/audio/unitedStates/or.mp3","/audio/unitedStates/other.mp3","/audio/unitedStates/our.mp3","/audio/unitedStates/out.mp3","/audio/unitedStates/over.mp3","/audio/unitedStates/right.mp3","/audio/unitedStates/said.mp3","/audio/unitedStates/see.mp3","/audio/unitedStates/she.mp3","/audio/unitedStates/so.mp3","/audio/unitedStates/some.mp3","/audio/unitedStates/that.mp3","/audio/unitedStates/the.mp3","/audio/unitedStates/their.mp3","/audio/unitedStates/them.mp3","/audio/unitedStates/then.mp3","/audio/unitedStates/there.mp3","/audio/unitedStates/they.mp3","/audio/unitedStates/this.mp3","/audio/unitedStates/to.mp3","/audio/unitedStates/two.mp3","/audio/unitedStates/up.mp3","/audio/unitedStates/want.mp3","/audio/unitedStates/was.mp3","/audio/unitedStates/we.mp3","/audio/unitedStates/well.mp3","/audio/unitedStates/went.mp3","/audio/unitedStates/were.mp3","/audio/unitedStates/what.mp3","/audio/unitedStates/when.mp3","/audio/unitedStates/where.mp3","/audio/unitedStates/which.mp3","/audio/unitedStates/who.mp3","/audio/unitedStates/will.mp3","/audio/unitedStates/with.mp3","/audio/unitedStates/you.mp3","/audio/unitedStates/your.mp3","/css/tailwind.min.css","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),u=new Set(t);self.addEventListener("install",(a=>{a.waitUntil(caches.open(i).then((a=>a.addAll(t))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(a=>{a.waitUntil(caches.keys().then((async a=>{for(const t of a)t!==i&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(i=>{if("GET"!==i.request.method||i.request.headers.has("range"))return;const t=new URL(i.request.url),e=t.protocol.startsWith("http"),d=t.hostname===self.location.hostname&&t.port!==self.location.port,o=t.host===self.location.host&&u.has(t.pathname),n="only-if-cached"===i.request.cache&&!o;!e||d||n||i.respondWith((async()=>o&&await caches.match(i.request)||async function(i){const t=await caches.open(`offline${a}`);try{const a=await fetch(i);return t.put(i,a.clone()),a}catch(a){const u=await t.match(i);if(u)return u;throw a}}(i.request))())}))}();

function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function a(t){let e;return i(t,(t=>e=t))(),e}function f(t,e,n){t.$$.on_destroy.push(i(e,n))}function u(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function d(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=l(e,n,r,c);t.p(o,i)}}function p(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function b(){return _(" ")}function y(){return _("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t){return Array.from(t.childNodes)}function x(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):$(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return _(e)}function P(t){return w(t," ")}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e,n){t.classList[n?"add":"remove"](e)}function j(t,e=document.body){return Array.from(e.querySelectorAll(t))}let C;function R(t){C=t}function T(){if(!C)throw new Error("Function called outside component initialization");return C}function k(t){T().$$.on_mount.push(t)}function O(t){T().$$.on_destroy.push(t)}function I(){const t=T();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}const L=[],q=[],J=[],U=[],M=Promise.resolve();let B=!1;function K(t){J.push(t)}let W=!1;const z=new Set;function D(){if(!W){W=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];R(e),H(e.$$)}for(R(null),L.length=0;q.length;)q.pop()();for(let t=0;t<J.length;t+=1){const e=J[t];z.has(e)||(z.add(e),e())}J.length=0}while(L.length);for(;U.length;)U.pop()();B=!1,W=!1,z.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const V=new Set;let F;function G(){F={r:0,c:[],p:F}}function Y(){F.r||o(F.c),F=F.p}function X(t,e){t&&t.i&&(V.delete(t),t.i(e))}function Q(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),F.c.push((()=>{V.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Z(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function tt(t){return"object"==typeof t&&null!==t?t:{}}function et(t){t&&t.c()}function nt(t,e){t&&t.l(e)}function rt(t,e,r){const{fragment:c,on_mount:i,on_destroy:a,after_update:f}=t.$$;c&&c.m(e,r),K((()=>{const e=i.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(K)}function ot(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(L.push(t),B||(B=!0,M.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ct(e,n,s,c,i,a,f=[-1]){const u=C;R(e);const l=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:f,skip_bound:!1};let p=!1;if(d.ctx=s?s(e,l,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&st(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=S(n.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&X(e.$$.fragment),rt(e,n.target,n.anchor),D()}R(u)}class it{$destroy(){ot(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function ft(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!at.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),at.push(n,e)}if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function ut(e,n,r){const c=!Array.isArray(e),a=c?[e]:e,f=n.length<2;return function(t,e){return{subscribe:ft(t,e).subscribe}}(r,(e=>{let r=!1;const u=[];let l=0,d=t;const p=()=>{if(l)return;d();const r=n(c?u[0]:u,e);f?e(r):d=s(r)?r:t},h=a.map(((t,e)=>i(t,(t=>{u[e]=t,l&=~(1<<e),r&&p()}),(()=>{l|=1<<e}))));return r=!0,p(),function(){o(h),d()}}))}const lt={};function dt(t){let e,n,r,o,s,c;const i=t[1].default,a=u(i,t,t[0],null);return{c(){e=$("meta"),n=$("meta"),r=$("meta"),o=$("meta"),s=b(),a&&a.c(),this.h()},l(t){const c=j('[data-svelte="svelte-ebsv3r"]',document.head);e=x(c,"META",{name:!0,content:!0}),n=x(c,"META",{name:!0,content:!0}),r=x(c,"META",{name:!0,content:!0}),o=x(c,"META",{name:!0,content:!0}),c.forEach(m),s=P(t),a&&a.l(t),this.h()},h(){E(e,"name","author"),E(e,"content","Tykto"),E(n,"name","description"),E(n,"content","Word games"),E(r,"name","keywords"),E(r,"content","magic words 100"),E(o,"name","robots"),E(o,"content","index, follow"),document.title="M100W - Magic Words"},m(t,i){p(document.head,e),p(document.head,n),p(document.head,r),p(document.head,o),h(t,s,i),a&&a.m(t,i),c=!0},p(t,[e]){a&&a.p&&1&e&&d(a,i,t,t[0],e,null,null)},i(t){c||(X(a,t),c=!0)},o(t){Q(a,t),c=!1},d(t){m(e),m(n),m(r),m(o),t&&m(s),a&&a.d(t)}}}function pt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ht extends it{constructor(t){super(),ct(this,t,pt,dt,c,{})}}function mt(t){let e,n,r=t[1].stack+"";return{c(){e=$("pre"),n=_(r)},l(t){e=x(t,"PRE",{});var o=S(e);n=w(o,r),o.forEach(m)},m(t,r){h(t,e,r),p(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&N(n,r)},d(t){t&&m(e)}}}function gt(e){let n,r,o,s,c,i,a,f,u,l=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&mt(e);return{c(){r=b(),o=$("h1"),s=_(e[0]),c=b(),i=$("p"),a=_(l),f=b(),d&&d.c(),u=y(),this.h()},l(t){j('[data-svelte="svelte-1moakz"]',document.head).forEach(m),r=P(t),o=x(t,"H1",{class:!0});var n=S(o);s=w(n,e[0]),n.forEach(m),c=P(t),i=x(t,"P",{class:!0});var p=S(i);a=w(p,l),p.forEach(m),f=P(t),d&&d.l(t),u=y(),this.h()},h(){E(o,"class","svelte-17w3omn"),E(i,"class","svelte-17w3omn")},m(t,e){h(t,r,e),h(t,o,e),p(o,s),h(t,c,e),h(t,i,e),p(i,a),h(t,f,e),d&&d.m(t,e),h(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&N(s,t[0]),2&e&&l!==(l=t[1].message+"")&&N(a,l),t[2]&&t[1].stack?d?d.p(t,e):(d=mt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&m(r),t&&m(o),t&&m(c),t&&m(i),t&&m(f),d&&d.d(t),t&&m(u)}}}function $t(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class _t extends it{constructor(t){super(),ct(this,t,$t,gt,c,{status:0,error:1})}}function bt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&et(n.$$.fragment),r=y()},l(t){n&&nt(n.$$.fragment,t),r=y()},m(t,e){n&&rt(n,t,e),h(t,r,e),o=!0},p(t,e){const o=16&e?Z(s,[tt(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){G();const t=n;Q(t.$$.fragment,1,0,(()=>{ot(t,1)})),Y()}c?(n=new c(i()),et(n.$$.fragment),X(n.$$.fragment,1),rt(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&X(n.$$.fragment,t),o=!0)},o(t){n&&Q(n.$$.fragment,t),o=!1},d(t){t&&m(r),n&&ot(n,t)}}}function yt(t){let e,n;return e=new _t({props:{error:t[0],status:t[1]}}),{c(){et(e.$$.fragment)},l(t){nt(e.$$.fragment,t)},m(t,r){rt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){ot(e,t)}}}function vt(t){let e,n,r,o;const s=[yt,bt],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){c[e].m(t,n),h(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?c[e].p(t,o):(G(),Q(c[a],1,1,(()=>{c[a]=null})),Y(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),X(n,1),n.m(r.parentNode,r))},i(t){o||(X(n),o=!0)},o(t){Q(n),o=!1},d(t){c[e].d(t),t&&m(r)}}}function Et(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ht({props:s}),{c(){et(n.$$.fragment)},l(t){nt(n.$$.fragment,t)},m(t,e){rt(n,t,e),r=!0},p(t,[e]){const r=12&e?Z(o,[4&e&&{segment:t[2][0]},8&e&&tt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(X(n.$$.fragment,t),r=!0)},o(t){Q(n.$$.fragment,t),r=!1},d(t){ot(n,t)}}}function St(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:a=null}=e,{notify:f}=e;var u,l,d;return u=f,T().$$.after_update.push(u),l=lt,d=r,T().$$.context.set(l,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,f=t.notify)},[o,s,c,i,a,r,f]}class xt extends it{constructor(t){super(),ct(this,t,St,Et,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const wt=[],Pt=[{js:()=>Promise.all([import("./index.c1b7ed00.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.e139ec03.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.33b80946.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.ff5dc691.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.b4a5e48a.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.55e545fc.js"),__inject_styles(["client-e5a9025c.css","index-3f57a38b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.fbed160b.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))}],Nt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/affirmation\/?$/,parts:[{i:1}]},{pattern:/^\/colours\/?$/,parts:[{i:2}]},{pattern:/^\/colours\/games\/?$/,parts:[null,{i:3}]},{pattern:/^\/colours\/games\/pick-the-word\/?$/,parts:[null,null,{i:4}]},{pattern:/^\/colours\/games\/flash-cards\/?$/,parts:[null,null,{i:5}]},{pattern:/^\/accent\/?$/,parts:[{i:6}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function At(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{a(r.next(t))}catch(t){s(t)}}function i(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}a((r=r.apply(t,e||[])).next())}))}function jt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Ct,Rt=1;const Tt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},kt={};let Ot,It;function Lt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ot))return null;let e=t.pathname.slice(Ot.length);if(""===e&&(e="/"),!wt.some((t=>t.test(e))))for(let n=0;n<Nt.length;n+=1){const r=Nt[n],o=r.pattern.exec(e);if(o){const n=Lt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:i}}}}function Jt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=jt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=qt(o);if(s){Bt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Tt.pushState({id:Ct},"",o.href)}}function Ut(){return{x:pageXOffset,y:pageYOffset}}function Mt(t){if(kt[Ct]=Ut(),t.state){const e=qt(new URL(location.href));e?Bt(e,t.state.id):location.href=location.href}else Rt=Rt+1,function(t){Ct=t}(Rt),Tt.replaceState({id:Ct},"",location.href)}function Bt(t,e,n,r){return At(this,void 0,void 0,(function*(){const o=!!e;if(o)Ct=e;else{const t=Ut();kt[Ct]=t,Ct=e=++Rt,kt[Ct]=n?t:{x:0,y:0}}if(yield It(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=kt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),kt[Ct]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Kt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Wt,zt=null;function Dt(t){const e=jt(t.target);e&&"prefetch"===e.rel&&function(t){const e=qt(new URL(t,Kt(document)));if(e)zt&&t===zt.href||(zt={href:t,promise:ae(e)}),zt.promise}(e.href)}function Ht(t){clearTimeout(Wt),Wt=setTimeout((()=>{Dt(t)}),20)}function Vt(t,e={noscroll:!1,replaceState:!1}){const n=qt(new URL(t,Kt(document)));return n?(Tt[e.replaceState?"replaceState":"pushState"]({id:Ct},"",t),Bt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Ft="undefined"!=typeof __SAPPER__&&__SAPPER__;let Gt,Yt,Xt,Qt=!1,Zt=[],te="{}";const ee={page:function(t){const e=ft(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:ft(null),session:ft(Ft&&Ft.session)};let ne,re,oe;function se(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ce(t){return At(this,void 0,void 0,(function*(){Gt&&ee.preloading.set(!0);const e=function(t){return zt&&zt.href===t.href?zt.promise:ae(t)}(t),n=Yt={},r=yield e,{redirect:o}=r;if(n===Yt)if(o)yield Vt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ie(n,e,se(e,t.page))}}))}function ie(t,e,n){return At(this,void 0,void 0,(function*(){ee.page.set(n),ee.preloading.set(!1),Gt?Gt.$set(e):(e.stores={page:{subscribe:ee.page.subscribe},preloading:{subscribe:ee.preloading.subscribe},session:ee.session},e.level0={props:yield Xt},e.notify=ee.page.notify,Gt=new xt({target:oe,props:e,hydrate:!0})),Zt=t,te=JSON.stringify(n.query),Qt=!0,re=!1}))}function ae(t){return At(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Xt){const t=()=>({});Xt=Ft.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},ne)}let i,a=1;try{const o=JSON.stringify(n.query),f=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>At(this,void 0,void 0,(function*(){const l=r[i];if(function(t,e,n,r){if(r!==te)return!0;const o=Zt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,l,f,o)&&(u=!0),s.segments[a]=r[i+1],!e)return{segment:l};const d=a++;if(!re&&!u&&Zt[i]&&Zt[i].part===e.i)return Zt[i];u=!1;const{default:p,preload:h}=yield Pt[e.i].js();let m;return m=Qt||!Ft.preloaded[i+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ne):{}:Ft.preloaded[i+1],s[`level${d}`]={component:p,props:m,segment:l,match:f,part:e.i}})))))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}var fe,ue,le;ee.session.subscribe((t=>At(void 0,void 0,void 0,(function*(){if(ne=t,!Qt)return;re=!0;const e=qt(new URL(location.href)),n=Yt={},{redirect:r,props:o,branch:s}=yield ae(e);n===Yt&&(r?yield Vt(r.location,{replaceState:!0}):yield ie(s,o,se(o,e.page)))})))),fe={target:document.querySelector("#sapper")},ue=fe.target,oe=ue,le=Ft.baseUrl,Ot=le,It=ce,"scrollRestoration"in Tt&&(Tt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Tt.scrollRestoration="auto"})),addEventListener("load",(()=>{Tt.scrollRestoration="manual"})),addEventListener("click",Jt),addEventListener("popstate",Mt),addEventListener("touchstart",Dt),addEventListener("mousemove",Ht),Ft.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Ft;Xt||(Xt=o&&o[0]);const i={error:c,status:s,session:r,level0:{props:Xt},level1:{props:{status:s,error:c},component:_t},segments:o},a=Lt(n);ie([],i,{host:t,path:e,query:a,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Tt.replaceState({id:Rt},"",e);const n=qt(new URL(location.href));if(n)return Bt(n,Rt,!0,t)}));export{I as A,G as B,Y as C,g as D,f as E,ut as F,A as G,N as H,o as I,O as J,q as K,it as S,b as a,S as b,x as c,w as d,$ as e,m as f,P as g,E as h,ct as i,h as j,p as k,a as l,et as m,t as n,k as o,nt as p,rt as q,X as r,c as s,_ as t,Q as u,ot as v,ft as w,u as x,v as y,d as z};

import __inject_styles from './inject_styles.5607aec6.js';
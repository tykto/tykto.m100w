function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e){let n;return function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(e,(t=>n=t))(),n}function a(t,e,n,r){if(t){const o=f(t,e,n,r);return t[0](o)}}function f(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=f(e,n,r,c);t.p(o,i)}}function u(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function _(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function S(t){return E(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e,n){t.classList[n?"add":"remove"](e)}function P(t,e=document.body){return Array.from(e.querySelectorAll(t))}let N;function A(t){N=t}function j(){if(!N)throw new Error("Function called outside component initialization");return N}function C(t){j().$$.on_mount.push(t)}function R(t){j().$$.on_destroy.push(t)}function T(){const t=j();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}const k=[],O=[],I=[],L=[],q=Promise.resolve();let J=!1;function U(t){I.push(t)}let M=!1;const B=new Set;function D(){if(!M){M=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];A(e),K(e.$$)}for(A(null),k.length=0;O.length;)O.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];B.has(e)||(B.add(e),e())}I.length=0}while(k.length);for(;L.length;)L.pop()();J=!1,M=!1,B.clear()}}function K(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const z=new Set;let V;function W(){V={r:0,c:[],p:V}}function F(){V.r||o(V.c),V=V.p}function H(t,e){t&&t.i&&(z.delete(t),t.i(e))}function Y(t,e,n,r){if(t&&t.o){if(z.has(t))return;z.add(t),V.c.push((()=>{z.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function G(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Q(t){t&&t.c()}function Z(t,e){t&&t.l(e)}function tt(t,e,r){const{fragment:c,on_mount:i,on_destroy:a,after_update:f}=t.$$;c&&c.m(e,r),U((()=>{const e=i.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(U)}function et(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(k.push(t),J||(J=!0,q.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,n,s,c,i,a,f=[-1]){const l=N;A(e);const u=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:f,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,u,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&nt(e,t)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&H(e.$$.fragment),tt(e,n.target,n.anchor),D()}A(l)}class ot{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function ct(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!st.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),st.push(n,e)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const it={};function at(t){let e,n,r,o,s,c;const i=t[1].default,f=a(i,t,t[0],null);return{c(){e=h("meta"),n=h("meta"),r=h("meta"),o=h("meta"),s=g(),f&&f.c(),this.h()},l(t){const c=P('[data-svelte="svelte-1p1ld4c"]',document.head);e=v(c,"META",{name:!0,content:!0}),n=v(c,"META",{name:!0,content:!0}),r=v(c,"META",{name:!0,content:!0}),o=v(c,"META",{name:!0,content:!0}),c.forEach(p),s=S(t),f&&f.l(t),this.h()},h(){b(e,"name","author"),b(e,"content","Tykto"),b(n,"name","description"),b(n,"content","Word games"),b(r,"name","keywords"),b(r,"content","magic words 100"),b(o,"name","robots"),b(o,"content","index, follow"),document.title="Tykto Web Design and Development"},m(t,i){u(document.head,e),u(document.head,n),u(document.head,r),u(document.head,o),d(t,s,i),f&&f.m(t,i),c=!0},p(t,[e]){f&&f.p&&1&e&&l(f,i,t,t[0],e,null,null)},i(t){c||(H(f,t),c=!0)},o(t){Y(f,t),c=!1},d(t){p(e),p(n),p(r),p(o),t&&p(s),f&&f.d(t)}}}function ft(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class lt extends ot{constructor(t){super(),rt(this,t,ft,at,c,{})}}function ut(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=m(r)},l(t){e=v(t,"PRE",{});var o=y(e);n=E(o,r),o.forEach(p)},m(t,r){d(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&p(e)}}}function dt(e){let n,r,o,s,c,i,a,f,l,_=e[1].message+"";document.title=n=e[0];let w=e[2]&&e[1].stack&&ut(e);return{c(){r=g(),o=h("h1"),s=m(e[0]),c=g(),i=h("p"),a=m(_),f=g(),w&&w.c(),l=$(),this.h()},l(t){P('[data-svelte="svelte-1moakz"]',document.head).forEach(p),r=S(t),o=v(t,"H1",{class:!0});var n=y(o);s=E(n,e[0]),n.forEach(p),c=S(t),i=v(t,"P",{class:!0});var u=y(i);a=E(u,_),u.forEach(p),f=S(t),w&&w.l(t),l=$(),this.h()},h(){b(o,"class","svelte-17w3omn"),b(i,"class","svelte-17w3omn")},m(t,e){d(t,r,e),d(t,o,e),u(o,s),d(t,c,e),d(t,i,e),u(i,a),d(t,f,e),w&&w.m(t,e),d(t,l,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&_!==(_=t[1].message+"")&&x(a,_),t[2]&&t[1].stack?w?w.p(t,e):(w=ut(t),w.c(),w.m(l.parentNode,l)):w&&(w.d(1),w=null)},i:t,o:t,d(t){t&&p(r),t&&p(o),t&&p(c),t&&p(i),t&&p(f),w&&w.d(t),t&&p(l)}}}function pt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class ht extends ot{constructor(t){super(),rt(this,t,pt,dt,c,{status:0,error:1})}}function mt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&Q(n.$$.fragment),r=$()},l(t){n&&Z(n.$$.fragment,t),r=$()},m(t,e){n&&tt(n,t,e),d(t,r,e),o=!0},p(t,e){const o=16&e?G(s,[X(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){W();const t=n;Y(t.$$.fragment,1,0,(()=>{et(t,1)})),F()}c?(n=new c(i()),Q(n.$$.fragment),H(n.$$.fragment,1),tt(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&H(n.$$.fragment,t),o=!0)},o(t){n&&Y(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&et(n,t)}}}function gt(t){let e,n;return e=new ht({props:{error:t[0],status:t[1]}}),{c(){Q(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,r){tt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function $t(t){let e,n,r,o;const s=[gt,mt],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){c[e].m(t,n),d(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?c[e].p(t,o):(W(),Y(c[a],1,1,(()=>{c[a]=null})),F(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),H(n,1),n.m(r.parentNode,r))},i(t){o||(H(n),o=!0)},o(t){Y(n),o=!1},d(t){c[e].d(t),t&&p(r)}}}function _t(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new lt({props:s}),{c(){Q(n.$$.fragment)},l(t){Z(n.$$.fragment,t)},m(t,e){tt(n,t,e),r=!0},p(t,[e]){const r=12&e?G(o,[4&e&&{segment:t[2][0]},8&e&&X(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(H(n.$$.fragment,t),r=!0)},o(t){Y(n.$$.fragment,t),r=!1},d(t){et(n,t)}}}function bt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:a=null}=e,{notify:f}=e;var l,u,d;return l=f,j().$$.after_update.push(l),u=it,d=r,j().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,f=t.notify)},[o,s,c,i,a,r,f]}class yt extends ot{constructor(t){super(),rt(this,t,bt,_t,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const vt=[],Et=[{js:()=>Promise.all([import("./index.c111dd6f.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.5310caca.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.76ae7b18.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.89ac5da0.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.d5977990.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.f48474a5.js"),__inject_styles(["client-e5a9025c.css","index-67c38faf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.d4f0d695.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))}],St=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/affirmation\/?$/,parts:[{i:1}]},{pattern:/^\/colours\/?$/,parts:[{i:2}]},{pattern:/^\/colours\/games\/?$/,parts:[null,{i:3}]},{pattern:/^\/colours\/games\/pick-the-word\/?$/,parts:[null,null,{i:4}]},{pattern:/^\/colours\/games\/flash-cards\/?$/,parts:[null,null,{i:5}]},{pattern:/^\/accent\/?$/,parts:[{i:6}]}];
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
function xt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{a(r.next(t))}catch(t){s(t)}}function i(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}a((r=r.apply(t,e||[])).next())}))}function wt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Pt,Nt=1;const At="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},jt={};let Ct,Rt;function Tt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function kt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ct))return null;let e=t.pathname.slice(Ct.length);if(""===e&&(e="/"),!vt.some((t=>t.test(e))))for(let n=0;n<St.length;n+=1){const r=St[n],o=r.pattern.exec(e);if(o){const n=Tt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:i}}}}function Ot(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=wt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=kt(o);if(s){qt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),At.pushState({id:Pt},"",o.href)}}function It(){return{x:pageXOffset,y:pageYOffset}}function Lt(t){if(jt[Pt]=It(),t.state){const e=kt(new URL(location.href));e?qt(e,t.state.id):location.href=location.href}else Nt=Nt+1,function(t){Pt=t}(Nt),At.replaceState({id:Pt},"",location.href)}function qt(t,e,n,r){return xt(this,void 0,void 0,(function*(){const o=!!e;if(o)Pt=e;else{const t=It();jt[Pt]=t,Pt=e=++Nt,jt[Pt]=n?t:{x:0,y:0}}if(yield Rt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=jt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),jt[Pt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Jt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ut,Mt=null;function Bt(t){const e=wt(t.target);e&&"prefetch"===e.rel&&function(t){const e=kt(new URL(t,Jt(document)));if(e)Mt&&t===Mt.href||(Mt={href:t,promise:oe(e)}),Mt.promise}(e.href)}function Dt(t){clearTimeout(Ut),Ut=setTimeout((()=>{Bt(t)}),20)}function Kt(t,e={noscroll:!1,replaceState:!1}){const n=kt(new URL(t,Jt(document)));return n?(At[e.replaceState?"replaceState":"pushState"]({id:Pt},"",t),qt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const zt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Vt,Wt,Ft,Ht=!1,Yt=[],Gt="{}";const Xt={page:function(t){const e=ct(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:ct(null),session:ct(zt&&zt.session)};let Qt,Zt,te;function ee(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ne(t){return xt(this,void 0,void 0,(function*(){Vt&&Xt.preloading.set(!0);const e=function(t){return Mt&&Mt.href===t.href?Mt.promise:oe(t)}(t),n=Wt={},r=yield e,{redirect:o}=r;if(n===Wt)if(o)yield Kt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield re(n,e,ee(e,t.page))}}))}function re(t,e,n){return xt(this,void 0,void 0,(function*(){Xt.page.set(n),Xt.preloading.set(!1),Vt?Vt.$set(e):(e.stores={page:{subscribe:Xt.page.subscribe},preloading:{subscribe:Xt.preloading.subscribe},session:Xt.session},e.level0={props:yield Ft},e.notify=Xt.page.notify,Vt=new yt({target:te,props:e,hydrate:!0})),Yt=t,Gt=JSON.stringify(n.query),Ht=!0,Zt=!1}))}function oe(t){return xt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Ft){const t=()=>({});Ft=zt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Qt)}let i,a=1;try{const o=JSON.stringify(n.query),f=e.pattern.exec(n.path);let l=!1;i=yield Promise.all(e.parts.map(((e,i)=>xt(this,void 0,void 0,(function*(){const u=r[i];if(function(t,e,n,r){if(r!==Gt)return!0;const o=Yt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,u,f,o)&&(l=!0),s.segments[a]=r[i+1],!e)return{segment:u};const d=a++;if(!Zt&&!l&&Yt[i]&&Yt[i].part===e.i)return Yt[i];l=!1;const{default:p,preload:h}=yield Et[e.i].js();let m;return m=Ht||!zt.preloaded[i+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Qt):{}:zt.preloaded[i+1],s[`level${d}`]={component:p,props:m,segment:u,match:f,part:e.i}})))))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}var se,ce,ie;Xt.session.subscribe((t=>xt(void 0,void 0,void 0,(function*(){if(Qt=t,!Ht)return;Zt=!0;const e=kt(new URL(location.href)),n=Wt={},{redirect:r,props:o,branch:s}=yield oe(e);n===Wt&&(r?yield Kt(r.location,{replaceState:!0}):yield re(s,o,ee(o,e.page)))})))),se={target:document.querySelector("#sapper")},ce=se.target,te=ce,ie=zt.baseUrl,Ct=ie,Rt=ne,"scrollRestoration"in At&&(At.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{At.scrollRestoration="auto"})),addEventListener("load",(()=>{At.scrollRestoration="manual"})),addEventListener("click",Ot),addEventListener("popstate",Lt),addEventListener("touchstart",Bt),addEventListener("mousemove",Dt),zt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=zt;Ft||(Ft=o&&o[0]);const i={error:c,status:s,session:r,level0:{props:Ft},level1:{props:{status:s,error:c},component:ht},segments:o},a=Tt(n);re([],i,{host:t,path:e,query:a,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;At.replaceState({id:Nt},"",e);const n=kt(new URL(location.href));if(n)return qt(n,Nt,!0,t)}));export{T as A,w as B,x as C,o as D,R as E,O as F,ot as S,g as a,y as b,v as c,E as d,h as e,p as f,S as g,b as h,rt as i,d as j,u as k,i as l,Q as m,t as n,C as o,Z as p,tt as q,H as r,c as s,m as t,Y as u,et as v,ct as w,a as x,_ as y,l as z};

import __inject_styles from './inject_styles.5607aec6.js';
import{S as t,i as r,s as e,e as a,t as n,a as o,c as s,b as c,d as l,f as i,g as u,h as f,B as d,j as p,k as b,y as v,C as h,n as y,D as g,A as x,E as j,m,p as C,q as w,r as A,u as $,v as k,o as E,F as O}from"./client.30200547.js";function T(t){let r,e,x,j,m,C,w,A,$,k,E;return{c(){r=a("div"),e=a("div"),x=a("h1"),j=n(t[3]),C=o(),w=a("div"),this.h()},l(a){r=s(a,"DIV",{class:!0});var n=c(r);e=s(n,"DIV",{class:!0});var o=c(e);x=s(o,"H1",{});var f=c(x);j=l(f,t[3]),f.forEach(i),o.forEach(i),C=u(n),w=s(n,"DIV",{class:!0}),c(w).forEach(i),n.forEach(i),this.h()},h(){f(e,"class",m="t-face t-front "+t[2]+" svelte-82xk4t"),f(w,"class",A="t-face t-back "+t[1]+" svelte-82xk4t"),f(r,"class",$="t-card "+t[0]+" svelte-82xk4t"),d(r,"t-face-down",t[4]),d(r,"t-face-up",!t[4])},m(a,n){p(a,r,n),b(r,e),b(e,x),b(x,j),b(r,C),b(r,w),k||(E=[v(e,"click",t[5]),v(w,"click",t[5])],k=!0)},p(t,[a]){8&a&&h(j,t[3]),4&a&&m!==(m="t-face t-front "+t[2]+" svelte-82xk4t")&&f(e,"class",m),2&a&&A!==(A="t-face t-back "+t[1]+" svelte-82xk4t")&&f(w,"class",A),1&a&&$!==($="t-card "+t[0]+" svelte-82xk4t")&&f(r,"class",$),17&a&&d(r,"t-face-down",t[4]),17&a&&d(r,"t-face-up",!t[4])},i:y,o:y,d(t){t&&i(r),k=!1,g(E)}}}function U(t,r,e){let{cardClass:a=""}=r,{backClass:n=""}=r,{frontClass:o=""}=r,{text:s=""}=r,{disabled:c=!1}=r;const l=()=>{e(4,f=!f),i=setTimeout((()=>{d("flip",{faceDown:f}),d(f?"flipToBack":"flipToFront"),u=!1}),1e3)};let i=null,u=!1,f=!0;const d=x();return j((()=>clearTimeout(i))),t.$$set=t=>{"cardClass"in t&&e(0,a=t.cardClass),"backClass"in t&&e(1,n=t.backClass),"frontClass"in t&&e(2,o=t.frontClass),"text"in t&&e(3,s=t.text),"disabled"in t&&e(6,c=t.disabled)},[a,n,o,s,f,()=>{u||c||(u=!0,l())},c,()=>l()]}class D extends t{constructor(t){super(),r(this,t,U,T,e,{cardClass:0,backClass:1,frontClass:2,text:3,disabled:6,flip:7})}get flip(){return this.$$.ctx[7]}}var I=function(t,r){var e=-1,a=t.length;for(r||(r=Array(a));++e<a;)r[e]=t[e];return r},S=Math.floor,F=Math.random;var _=function(t,r){return t+S(F()*(r-t+1))};var P=function(t,r){var e=-1,a=t.length,n=a-1;for(r=void 0===r?a:r;++e<r;){var o=_(e,n),s=t[o];t[o]=t[e],t[e]=s}return t.length=r,t};var V=function(t){return P(I(t))};var N=function(t,r){for(var e=-1,a=null==t?0:t.length,n=Array(a);++e<a;)n[e]=r(t[e],e,t);return n};var B=function(t,r){return N(r,(function(r){return t[r]}))};var q=function(t,r){for(var e=-1,a=Array(t);++e<t;)a[e]=r(e);return a},H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function M(t,r,e){return t(e={path:r,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&e.path)}},e.exports),e.exports}var G="object"==typeof H&&H&&H.Object===Object&&H,L="object"==typeof self&&self&&self.Object===Object&&self,R=G||L||Function("return this")(),W=R.Symbol,z=Object.prototype,J=z.hasOwnProperty,K=z.toString,Q=W?W.toStringTag:void 0;var X=function(t){var r=J.call(t,Q),e=t[Q];try{t[Q]=void 0;var a=!0}catch(t){}var n=K.call(t);return a&&(r?t[Q]=e:delete t[Q]),n},Y=Object.prototype.toString;var Z=function(t){return Y.call(t)},tt=W?W.toStringTag:void 0;var rt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":tt&&tt in Object(t)?X(t):Z(t)};var et=function(t){return null!=t&&"object"==typeof t};var at=function(t){return et(t)&&"[object Arguments]"==rt(t)},nt=Object.prototype,ot=nt.hasOwnProperty,st=nt.propertyIsEnumerable,ct=at(function(){return arguments}())?at:function(t){return et(t)&&ot.call(t,"callee")&&!st.call(t,"callee")},lt=Array.isArray;var it=function(){return!1},ut=M((function(t,r){var e=r&&!r.nodeType&&r,a=e&&t&&!t.nodeType&&t,n=a&&a.exports===e?R.Buffer:void 0,o=(n?n.isBuffer:void 0)||it;t.exports=o})),ft=/^(?:0|[1-9]\d*)$/;var dt=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&ft.test(t))&&t>-1&&t%1==0&&t<r};var pt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},bt={};bt["[object Float32Array]"]=bt["[object Float64Array]"]=bt["[object Int8Array]"]=bt["[object Int16Array]"]=bt["[object Int32Array]"]=bt["[object Uint8Array]"]=bt["[object Uint8ClampedArray]"]=bt["[object Uint16Array]"]=bt["[object Uint32Array]"]=!0,bt["[object Arguments]"]=bt["[object Array]"]=bt["[object ArrayBuffer]"]=bt["[object Boolean]"]=bt["[object DataView]"]=bt["[object Date]"]=bt["[object Error]"]=bt["[object Function]"]=bt["[object Map]"]=bt["[object Number]"]=bt["[object Object]"]=bt["[object RegExp]"]=bt["[object Set]"]=bt["[object String]"]=bt["[object WeakMap]"]=!1;var vt=function(t){return et(t)&&pt(t.length)&&!!bt[rt(t)]};var ht=function(t){return function(r){return t(r)}},yt=M((function(t,r){var e=r&&!r.nodeType&&r,a=e&&t&&!t.nodeType&&t,n=a&&a.exports===e&&G.process,o=function(){try{var t=a&&a.require&&a.require("util").types;return t||n&&n.binding&&n.binding("util")}catch(t){}}();t.exports=o})),gt=yt&&yt.isTypedArray,xt=gt?ht(gt):vt,jt=Object.prototype.hasOwnProperty;var mt=function(t,r){var e=lt(t),a=!e&&ct(t),n=!e&&!a&&ut(t),o=!e&&!a&&!n&&xt(t),s=e||a||n||o,c=s?q(t.length,String):[],l=c.length;for(var i in t)!r&&!jt.call(t,i)||s&&("length"==i||n&&("offset"==i||"parent"==i)||o&&("buffer"==i||"byteLength"==i||"byteOffset"==i)||dt(i,l))||c.push(i);return c},Ct=Object.prototype;var wt=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Ct)};var At=function(t,r){return function(e){return t(r(e))}}(Object.keys,Object),$t=Object.prototype.hasOwnProperty;var kt=function(t){if(!wt(t))return At(t);var r=[];for(var e in Object(t))$t.call(t,e)&&"constructor"!=e&&r.push(e);return r};var Et=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)};var Ot=function(t){if(!Et(t))return!1;var r=rt(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r};var Tt=function(t){return null!=t&&pt(t.length)&&!Ot(t)};var Ut=function(t){return Tt(t)?mt(t):kt(t)};var Dt=function(t){return null==t?[]:B(t,Ut(t))};var It=function(t){return P(Dt(t))};var St=function(t){return(lt(t)?V:It)(t)};const Ft=[{text:"a",audioUrl:"/audio/a.mp3"},{text:"and",audioUrl:"/audio/and.mp3"},{text:"be",audioUrl:"/audio/be.mp3"},{text:"I",audioUrl:"/audio/i.mp3"},{text:"in",audioUrl:"/audio/in.mp3"},{text:"it",audioUrl:"/audio/it.mp3"},{text:"of",audioUrl:"/audio/of.mp3"},{text:"that",audioUrl:"/audio/that.mp3"},{text:"the",audioUrl:"/audio/the.mp3"},{text:"to",audioUrl:"/audio/to.mp3"},{text:"was",audioUrl:"/audio/was.mp3"}];class _t{constructor(){this._currentCard=-1,this._cards=[]}getNextCard(){return-1===this._currentCard&&(this._cards=St(Ft)),this._currentCard++,this._currentCard>this._cards.length&&(this._currentCard=0),this._cards[this._currentCard]}getProgress(){return{card:this._currentCard+1,cardCount:this._cards.length}}}function Pt(t){let r,e,d,v,y,g,x,j,E,O,T,U,I,S,F,_,P,V,N,B,q,H,M,G=t[1].progress.card+"",L=t[1].progress.cardCount+"",R={cardClass:"flex justify-center items-center h-1/2 w-3/4 sm:w-2/5 xl:w-1/3 2xl:w-1/5 rounded border-solid border-20 border-gray-800 bg-gray-200",backClass:"bg-gray-300",frontClass:"bg-white flex justify-center items-center text-5xl font-bold",text:t[1].card.text,disabled:t[1].disabled};return x=new D({props:R}),t[5](x),x.$on("flip",t[4]),x.$on("flipToFront",t[2]),x.$on("flipToBack",t[3]),{c(){r=a("div"),e=a("div"),d=a("h1"),v=n("Flash Cards"),y=o(),g=a("div"),m(x.$$.fragment),j=o(),E=a("div"),O=a("div"),T=a("span"),U=n("5"),I=o(),S=a("div"),F=a("span"),_=n(G),P=o(),V=a("span"),N=n("of"),B=o(),q=a("span"),H=n(L),this.h()},l(t){r=s(t,"DIV",{class:!0});var a=c(r);e=s(a,"DIV",{class:!0});var n=c(e);d=s(n,"H1",{});var o=c(d);v=l(o,"Flash Cards"),o.forEach(i),n.forEach(i),y=u(a),g=s(a,"DIV",{class:!0});var f=c(g);C(x.$$.fragment,f),f.forEach(i),j=u(a),E=s(a,"DIV",{class:!0});var p=c(E);O=s(p,"DIV",{class:!0});var b=c(O);T=s(b,"SPAN",{class:!0});var h=c(T);U=l(h,"5"),h.forEach(i),b.forEach(i),I=u(p),S=s(p,"DIV",{class:!0});var m=c(S);F=s(m,"SPAN",{class:!0});var w=c(F);_=l(w,G),w.forEach(i),P=u(m),V=s(m,"SPAN",{});var A=c(V);N=l(A,"of"),A.forEach(i),B=u(m),q=s(m,"SPAN",{class:!0});var $=c(q);H=l($,L),$.forEach(i),m.forEach(i),p.forEach(i),a.forEach(i),this.h()},h(){f(e,"class","flex px-2 py-2"),f(g,"class","flex justify-center items-center h-full"),f(T,"class","text-2xl pt-2"),f(O,"class","font-bold py-2 px-4"),f(F,"class","font-medium"),f(q,"class","font-medium"),f(S,"class","flex justify-center items-center px-3 space-x-2"),f(E,"class","flex justify-between px-2 py-2"),f(r,"class","flex flex-col h-full")},m(t,a){p(t,r,a),b(r,e),b(e,d),b(d,v),b(r,y),b(r,g),w(x,g,null),b(r,j),b(r,E),b(E,O),b(O,T),b(T,U),b(E,I),b(E,S),b(S,F),b(F,_),b(S,P),b(S,V),b(V,N),b(S,B),b(S,q),b(q,H),M=!0},p(t,[r]){const e={};2&r&&(e.text=t[1].card.text),2&r&&(e.disabled=t[1].disabled),x.$set(e),(!M||2&r)&&G!==(G=t[1].progress.card+"")&&h(_,G),(!M||2&r)&&L!==(L=t[1].progress.cardCount+"")&&h(H,L)},i(t){M||(A(x.$$.fragment,t),M=!0)},o(t){$(x.$$.fragment,t),M=!1},d(e){e&&i(r),t[5](null),k(x)}}}function Vt(t,r,e){const a=()=>{e(1,c.card=s.getNextCard(),c),e(1,c.progress=s.getProgress(),c),console.log(c.progress)},n=()=>{const t=new Audio(c.card.audioUrl);t.onended=()=>o.flip(),t.play()};let o;const s=new _t,c={timeoutHandle:null,card:{},progress:{},disabled:!1};return E((()=>a())),j((()=>clearTimeout(c.timeoutHandle))),[o,c,()=>e(1,c.timeoutHandle=setTimeout((()=>n()),5e3),c),()=>a(),({detail:t})=>e(1,c.disabled=!t.faceDown,c),function(t){O[t?"unshift":"push"]((()=>{o=t,e(0,o)}))}]}class Nt extends t{constructor(t){super(),r(this,t,Vt,Pt,e,{})}}function Bt(t){let r,e;return r=new Nt({}),{c(){m(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,a){w(r,t,a),e=!0},p:y,i(t){e||(A(r.$$.fragment,t),e=!0)},o(t){$(r.$$.fragment,t),e=!1},d(t){k(r,t)}}}export default class extends t{constructor(t){super(),r(this,t,null,Bt,e,{})}}

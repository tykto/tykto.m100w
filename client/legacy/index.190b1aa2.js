import{_ as t,a as n,b as o,c as r,i as c,s as e,d as u,S as a,B as f,e as s,g as i,h as l,k as h,m as v,n as p,o as d,C as $,D as g,E as m,x as y,y as x,F as R,u as w,v as b,w as D,z as S,G as V,H as C,I as j,t as E,j as k,p as P}from"./client.83d479cb.js";import"./writableLocalStorage.b51911c4.js";import{b as B,g as I,r as N,a as T,o as z,c as A,i as F,v as G,d as H,l as L}from"./colourStore.1286e5da.js";function O(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,e=n(t);if(r){var u=n(this).constructor;c=Reflect.construct(e,arguments,u)}else c=e.apply(this,arguments);return o(this,c)}}function U(t){var n,o,r,c,e,u,a=t[4].default,R=f(a,t,t[3],null);return{c:function(){n=s("button"),o=s("span"),R&&R.c(),this.h()},l:function(t){n=i(t,"BUTTON",{class:!0});var r=l(n);o=i(r,"SPAN",{class:!0});var c=l(o);R&&R.l(c),c.forEach(h),r.forEach(h),this.h()},h:function(){v(o,"class","text-2xl pt-2"),v(n,"class",r="flex flex-col items-center "+t[1]+" shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-4 px-4")},m:function(r,a){p(r,n,a),d(n,o),R&&R.m(o,null),c=!0,e||(u=$(n,"click",t[5]),e=!0)},p:function(t,o){var e=g(o,1)[0];R&&R.p&&8&e&&m(R,a,t,t[3],e,null,null),(!c||2&e&&r!==(r="flex flex-col items-center "+t[1]+" shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-4 px-4"))&&v(n,"class",r)},i:function(t){c||(y(R,t),c=!0)},o:function(t){x(R,t),c=!1},d:function(t){t&&h(n),R&&R.d(t),e=!1,u()}}}function _(t,n,o){var r=n.$$slots,c=void 0===r?{}:r,e=n.$$scope,u=n.colourValue,a=void 0===u?null:u,f=n.colourClass,s=void 0===f?"bg-white":f,i=R();return t.$$set=function(t){"colourValue"in t&&o(0,a=t.colourValue),"colourClass"in t&&o(1,s=t.colourClass),"$$scope"in t&&o(3,e=t.$$scope)},[a,s,i,e,c,function(){return i("click",a)}]}var q=function(n){t(f,a);var o=O(f);function f(t){var n;return r(this,f),n=o.call(this),c(u(n),t,_,U,e,{colourValue:0,colourClass:1}),n}return f}();function J(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,e=n(t);if(r){var u=n(this).constructor;c=Reflect.construct(e,arguments,u)}else c=e.apply(this,arguments);return o(this,c)}}function K(t,n,o){var r=t.slice();return r[2]=n[o],r}function M(t){var n,o=L[t[2]]+"";return{c:function(){n=E(o)},l:function(t){n=k(t,o)},m:function(t,o){p(t,n,o)},p:P,d:function(t){t&&h(n)}}}function Q(t){var n,o;return(n=new q({props:{colourClass:B[t[2]],colourValue:t[2],$$slots:{default:[M]},$$scope:{ctx:t}}})).$on("click",t[1]),{c:function(){w(n.$$.fragment)},l:function(t){b(n.$$.fragment,t)},m:function(t,r){D(n,t,r),o=!0},p:function(t,o){var r={};32&o&&(r.$$scope={dirty:o,ctx:t}),n.$set(r)},i:function(t){o||(y(n.$$.fragment,t),o=!0)},o:function(t){x(n.$$.fragment,t),o=!1},d:function(t){S(n,t)}}}function W(t){for(var n,o,r,c=t[0],e=[],u=0;u<c.length;u+=1)e[u]=Q(K(t,c,u));var a=function(t){return x(e[t],1,1,(function(){e[t]=null}))};return{c:function(){n=s("div"),o=s("div");for(var t=0;t<e.length;t+=1)e[t].c();this.h()},l:function(t){n=i(t,"DIV",{class:!0});var r=l(n);o=i(r,"DIV",{class:!0});for(var c=l(o),u=0;u<e.length;u+=1)e[u].l(c);c.forEach(h),r.forEach(h),this.h()},h:function(){v(o,"class","flex flex-col w-4/5 space-y-6 py-3"),v(n,"class","flex flex-auto flex-col justify-center items-center h-full")},m:function(t,c){p(t,n,c),d(n,o);for(var u=0;u<e.length;u+=1)e[u].m(o,null);r=!0},p:function(t,n){var r=g(n,1)[0];if(3&r){var u;for(c=t[0],u=0;u<c.length;u+=1){var f=K(t,c,u);e[u]?(e[u].p(f,r),y(e[u],1)):(e[u]=Q(f),e[u].c(),y(e[u],1),e[u].m(o,null))}for(V(),u=c.length;u<e.length;u+=1)a(u);C()}},i:function(t){if(!r){for(var n=0;n<c.length;n+=1)y(e[n]);r=!0}},o:function(t){e=e.filter(Boolean);for(var n=0;n<e.length;n+=1)x(e[n]);r=!1},d:function(t){t&&h(n),j(e,t)}}}function X(t){return[[I,N,T,z,A,F,G],function(t){var n=t.detail;H.set(n),window.location.href="/colours/games"}]}var Y=function(n){t(f,a);var o=J(f);function f(t){var n;return r(this,f),n=o.call(this),c(u(n),t,X,W,e,{}),n}return f}();function Z(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,e=n(t);if(r){var u=n(this).constructor;c=Reflect.construct(e,arguments,u)}else c=e.apply(this,arguments);return o(this,c)}}function tt(t){var n,o;return n=new Y({}),{c:function(){w(n.$$.fragment)},l:function(t){b(n.$$.fragment,t)},m:function(t,r){D(n,t,r),o=!0},p:P,i:function(t){o||(y(n.$$.fragment,t),o=!0)},o:function(t){x(n.$$.fragment,t),o=!1},d:function(t){S(n,t)}}}var nt=function(n){t(f,a);var o=Z(f);function f(t){var n;return r(this,f),n=o.call(this),c(u(n),t,null,tt,e,{}),n}return f}();export default nt;
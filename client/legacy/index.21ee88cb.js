import{_ as t,a as n,b as r,c,i as o,s as e,d as u,S as a,B as f,e as s,g as i,h as l,k as h,m as v,n as p,o as d,D as $,E as m,x as g,y,u as x,v as R,w as b,z as w,G as D,H as S,I as j,J as E,t as P,j as k,p as I}from"./client.a0c0371b.js";import"./writableLocalStorage.d7259ebe.js";import"./colourStore.0a25c95b.js";import{b as A}from"./backgroundStore.428a1fa5.js";function B(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,e=n(t);if(c){var u=n(this).constructor;o=Reflect.construct(e,arguments,u)}else o=e.apply(this,arguments);return r(this,o)}}function V(t){var n,r,c,o,e=t[3].default,u=f(e,t,t[2],null);return{c:function(){n=s("a"),r=s("span"),u&&u.c(),this.h()},l:function(t){n=i(t,"A",{href:!0,class:!0});var c=l(n);r=i(c,"SPAN",{class:!0});var o=l(r);u&&u.l(o),o.forEach(h),c.forEach(h),this.h()},h:function(){v(r,"class","text-2xl pt-2"),v(n,"href",t[1]),v(n,"class",c=t[0]+" flex flex-col items-center shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-4 px-4")},m:function(t,c){p(t,n,c),d(n,r),u&&u.m(r,null),o=!0},p:function(t,r){var a=$(r,1)[0];u&&u.p&&4&a&&m(u,e,t,t[2],a,null,null),(!o||2&a)&&v(n,"href",t[1]),(!o||1&a&&c!==(c=t[0]+" flex flex-col items-center shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-4 px-4"))&&v(n,"class",c)},i:function(t){o||(g(u,t),o=!0)},o:function(t){y(u,t),o=!1},d:function(t){t&&h(n),u&&u.d(t)}}}function z(t,n,r){var c=n.$$slots,o=void 0===c?{}:c,e=n.$$scope,u=n.class,a=void 0===u?"":u,f=n.url,s=void 0===f?"/":f;return t.$$set=function(t){"class"in t&&r(0,a=t.class),"url"in t&&r(1,s=t.url),"$$scope"in t&&r(2,e=t.$$scope)},[a,s,e,o]}var C=function(n){t(f,a);var r=B(f);function f(t){var n;return c(this,f),n=r.call(this),o(u(n),t,z,V,e,{class:0,url:1}),n}return f}();function F(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,e=n(t);if(c){var u=n(this).constructor;o=Reflect.construct(e,arguments,u)}else o=e.apply(this,arguments);return r(this,o)}}function G(t,n,r){var c=t.slice();return c[3]=n[r].label,c[4]=n[r].url,c}function H(t){var n,r=t[3]+"";return{c:function(){n=P(r)},l:function(t){n=k(t,r)},m:function(t,r){p(t,n,r)},p:I,d:function(t){t&&h(n)}}}function J(t){var n,r;return n=new C({props:{class:t[0],url:t[4],$$slots:{default:[H]},$$scope:{ctx:t}}}),{c:function(){x(n.$$.fragment)},l:function(t){R(n.$$.fragment,t)},m:function(t,c){b(n,t,c),r=!0},p:function(t,r){var c={};1&r&&(c.class=t[0]),128&r&&(c.$$scope={dirty:r,ctx:t}),n.$set(c)},i:function(t){r||(g(n.$$.fragment,t),r=!0)},o:function(t){y(n.$$.fragment,t),r=!1},d:function(t){w(n,t)}}}function L(t){for(var n,r,c,o=t[1],e=[],u=0;u<o.length;u+=1)e[u]=J(G(t,o,u));var a=function(t){return y(e[t],1,1,(function(){e[t]=null}))};return{c:function(){n=s("div"),r=s("div");for(var t=0;t<e.length;t+=1)e[t].c();this.h()},l:function(t){n=i(t,"DIV",{class:!0});var c=l(n);r=i(c,"DIV",{class:!0});for(var o=l(r),u=0;u<e.length;u+=1)e[u].l(o);o.forEach(h),c.forEach(h),this.h()},h:function(){v(r,"class","flex flex-col w-4/5 space-y-2 py-3"),v(n,"class","flex flex-auto flex-col justify-center items-center h-full")},m:function(t,o){p(t,n,o),d(n,r);for(var u=0;u<e.length;u+=1)e[u].m(r,null);c=!0},p:function(t,n){var c=$(n,1)[0];if(3&c){var u;for(o=t[1],u=0;u<o.length;u+=1){var f=G(t,o,u);e[u]?(e[u].p(f,c),g(e[u],1)):(e[u]=J(f),e[u].c(),g(e[u],1),e[u].m(r,null))}for(D(),u=o.length;u<e.length;u+=1)a(u);S()}},i:function(t){if(!c){for(var n=0;n<o.length;n+=1)g(e[n]);c=!0}},o:function(t){e=e.filter(Boolean);for(var n=0;n<e.length;n+=1)y(e[n]);c=!1},d:function(t){t&&h(n),j(e,t)}}}function N(t,n,r){var c;E(t,A,(function(t){return r(2,c=t)}));var o;return t.$$.update=function(){4&t.$$.dirty&&r(0,o=c)},[o,[{label:"Flash Cards",url:"/colours/games/flash-cards"},{label:"Pick the Word",url:"/colours/games/pick-the-word"}],c]}var W=function(n){t(f,a);var r=F(f);function f(t){var n;return c(this,f),n=r.call(this),o(u(n),t,N,L,e,{}),n}return f}();function _(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,e=n(t);if(c){var u=n(this).constructor;o=Reflect.construct(e,arguments,u)}else o=e.apply(this,arguments);return r(this,o)}}function q(t){var n,r;return n=new W({}),{c:function(){x(n.$$.fragment)},l:function(t){R(n.$$.fragment,t)},m:function(t,c){b(n,t,c),r=!0},p:I,i:function(t){r||(g(n.$$.fragment,t),r=!0)},o:function(t){y(n.$$.fragment,t),r=!1},d:function(t){w(n,t)}}}var K=function(n){t(f,a);var r=_(f);function f(t){var n;return c(this,f),n=r.call(this),o(u(n),t,null,q,e,{}),n}return f}();export default K;

function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,n,r,o=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=j(i,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?v:h,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",d="executing",v="completed",m={};function y(){}function g(){}function b(){}var _={};_[i]=function(){return this};var w=Object.getPrototypeOf,$=w&&w(w(R([])));$&&$!==r&&o.call($,i)&&(_=$);var x=b.prototype=y.prototype=Object.create(_);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(a,i,u,c){var f=l(e[a],e,i);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):n.resolve(p).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,c)}))}c(f.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function R(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:n,done:!0}}return g.prototype=x.constructor=b,b.constructor=g,g.displayName=f(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[u]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),f(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),f=o.call(i,"finallyLoc");if(c&&f){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function h(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function y(t,e){for(var n in e)t[n]=e[n];return t}function g(t){return t()}function b(){return Object.create(null)}function _(t){t.forEach(g)}function w(t){return"function"==typeof t}function $(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function x(t){var e;return function(t){if(null==t)return m;for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=t.subscribe.apply(t,n);return o.unsubscribe?function(){return o.unsubscribe()}:o}(t,(function(t){return e=t}))(),e}function E(t,e,n,r){if(t){var o=S(t,e,n,r);return t[0](o)}}function S(t,e,n,r){return t[1]&&r?y(n.ctx.slice(),t[1](r(e))):n.ctx}function j(e,n,r,o,a,i,u){var c=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],u=Math.max(n.dirty.length,a.length),c=0;c<u;c+=1)i[c]=n.dirty[c]|a[c];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(c){var f=S(n,r,o,u);e.p(f,c)}}function k(t,e){t.appendChild(e)}function P(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function N(){return L(" ")}function A(){return L("")}function T(t,e,n,r){return t.addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t){return Array.from(t.childNodes)}function q(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,u=[];i<a.attributes.length;){var c=a.attributes[i++];n[c.name]||u.push(c.name)}for(var f=0;f<u.length;f++)a.removeAttribute(u[f]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):R(e)}function J(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return L(e)}function D(t){return J(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function F(t){r=t}function M(){if(!r)throw new Error("Function called outside component initialization");return r}function B(t){M().$$.on_mount.push(t)}function K(){var t=M();return function(e,n){var r=t.$$.callbacks[e];if(r){var o=function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((function(e){e.call(t,o)}))}}}var Y=[],z=[],V=[],W=[],H=Promise.resolve(),X=!1;function Q(t){V.push(t)}var Z=!1,tt=new Set;function et(){if(!Z){Z=!0;do{for(var t=0;t<Y.length;t+=1){var e=Y[t];F(e),nt(e.$$)}for(F(null),Y.length=0;z.length;)z.pop()();for(var n=0;n<V.length;n+=1){var r=V[n];tt.has(r)||(tt.add(r),r())}V.length=0}while(Y.length);for(;W.length;)W.pop()();X=!1,Z=!1,tt.clear()}}function nt(t){if(null!==t.fragment){t.update(),_(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}var rt,ot=new Set;function at(){rt={r:0,c:[],p:rt}}function it(){rt.r||_(rt.c),rt=rt.p}function ut(t,e){t&&t.i&&(ot.delete(t),t.i(e))}function ct(t,e,n,r){if(t&&t.o){if(ot.has(t))return;ot.add(t),rt.c.push((function(){ot.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ft(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],u=e[a];if(u){for(var c in i)c in u||(r[c]=1);for(var f in u)o[f]||(n[f]=u[f],o[f]=1);t[a]=u}else for(var s in i)o[s]=1}for(var l in r)l in n||(n[l]=void 0);return n}function st(e){return"object"===t(e)&&null!==e?e:{}}function lt(t){t&&t.c()}function pt(t,e){t&&t.l(e)}function ht(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,u=r.after_update;o&&o.m(e,n),Q((function(){var e=a.map(g).filter(w);i?i.push.apply(i,h(e)):_(e),t.$$.on_mount=[]})),u.forEach(Q)}function dt(t,e){var n=t.$$;null!==n.fragment&&(_(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){-1===t.$$.dirty[0]&&(Y.push(t),X||(X=!0,H.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function mt(t,e,n,o,a,i){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=r;F(t);var f=e.props||{},s=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:b(),dirty:u,skip_bound:!1},l=!1;if(s.ctx=n?n(t,f,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&a(s.ctx[e],s.ctx[e]=r)&&(!s.skip_bound&&s.bound[e]&&s.bound[e](r),l&&vt(t,e)),n})):[],s.update(),l=!0,_(s.before_update),s.fragment=!!o&&o(s.ctx),e.target){if(e.hydrate){var p=I(e.target);s.fragment&&s.fragment.l(p),p.forEach(O)}else s.fragment&&s.fragment.c();e.intro&&ut(t.$$.fragment),ht(t,e.target,e.anchor),et()}F(c)}var yt=function(){function t(){d(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){dt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&v(e.prototype,n),r&&v(e,r),t}(),gt=[];function bt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if($(t,n)&&(t=n,e)){for(var o=!gt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),gt.push(i,t)}if(o){for(var u=0;u<gt.length;u+=2)gt[u][0](gt[u+1]);gt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,u=[a,i];return r.push(u),1===r.length&&(e=n(o)||m),a(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var _t={};function wt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function $t(t){var e,n,r,o,a,i,c=t[1].default,f=E(c,t,t[0],null);return{c:function(){e=R("meta"),n=R("meta"),r=R("meta"),o=R("meta"),a=N(),f&&f.c(),this.h()},l:function(t){var i=G('[data-svelte="svelte-1p1ld4c"]',document.head);e=q(i,"META",{name:!0,content:!0}),n=q(i,"META",{name:!0,content:!0}),r=q(i,"META",{name:!0,content:!0}),o=q(i,"META",{name:!0,content:!0}),i.forEach(O),a=D(t),f&&f.l(t),this.h()},h:function(){C(e,"name","author"),C(e,"content","Tykto"),C(n,"name","description"),C(n,"content","Word games"),C(r,"name","keywords"),C(r,"content","magic words 100"),C(o,"name","robots"),C(o,"content","index, follow"),document.title="Tykto Web Design and Development"},m:function(t,u){k(document.head,e),k(document.head,n),k(document.head,r),k(document.head,o),P(t,a,u),f&&f.m(t,u),i=!0},p:function(t,e){var n=u(e,1)[0];f&&f.p&&1&n&&j(f,c,t,t[0],n,null,null)},i:function(t){i||(ut(f,t),i=!0)},o:function(t){ct(f,t),i=!1},d:function(t){O(e),O(n),O(r),O(o),t&&O(a),f&&f.d(t)}}}function xt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope;return t.$$set=function(t){"$$scope"in t&&n(0,a=t.$$scope)},[a,o]}var Et=function(t){s(n,yt);var e=wt(n);function n(t){var r;return d(this,n),mt(l(r=e.call(this)),t,xt,$t,$,{}),r}return n}();function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function jt(t){var e,n,r=t[1].stack+"";return{c:function(){e=R("pre"),n=L(r)},l:function(t){var o=I(e=q(t,"PRE",{}));n=J(o,r),o.forEach(O)},m:function(t,r){P(t,e,r),k(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&U(n,r)},d:function(t){t&&O(e)}}}function kt(t){var e,n,r,o,a,i,c,f,s,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&jt(t);return{c:function(){n=N(),r=R("h1"),o=L(t[0]),a=N(),i=R("p"),c=L(l),f=N(),p&&p.c(),s=A(),this.h()},l:function(e){G('[data-svelte="svelte-1moakz"]',document.head).forEach(O),n=D(e);var u=I(r=q(e,"H1",{class:!0}));o=J(u,t[0]),u.forEach(O),a=D(e);var h=I(i=q(e,"P",{class:!0}));c=J(h,l),h.forEach(O),f=D(e),p&&p.l(e),s=A(),this.h()},h:function(){C(r,"class","svelte-17w3omn"),C(i,"class","svelte-17w3omn")},m:function(t,e){P(t,n,e),P(t,r,e),k(r,o),P(t,a,e),P(t,i,e),k(i,c),P(t,f,e),p&&p.m(t,e),P(t,s,e)},p:function(t,n){var r=u(n,1)[0];1&r&&e!==(e=t[0])&&(document.title=e),1&r&&U(o,t[0]),2&r&&l!==(l=t[1].message+"")&&U(c,l),t[2]&&t[1].stack?p?p.p(t,r):((p=jt(t)).c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&O(n),t&&O(r),t&&O(a),t&&O(i),t&&O(f),p&&p.d(t),t&&O(s)}}}function Pt(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var Ot=function(t){s(n,yt);var e=St(n);function n(t){var r;return d(this,n),mt(l(r=e.call(this)),t,Pt,kt,$,{status:0,error:1}),r}return n}();function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Lt(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=y(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&lt(e.$$.fragment),n=A()},l:function(t){e&&pt(e.$$.fragment,t),n=A()},m:function(t,o){e&&ht(e,t,o),P(t,n,o),r=!0},p:function(t,r){var u=16&r?ft(o,[st(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){at();var c=e;ct(c.$$.fragment,1,0,(function(){dt(c,1)})),it()}a?(lt((e=new a(i())).$$.fragment),ut(e.$$.fragment,1),ht(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i:function(t){r||(e&&ut(e.$$.fragment,t),r=!0)},o:function(t){e&&ct(e.$$.fragment,t),r=!1},d:function(t){t&&O(n),e&&dt(e,t)}}}function Nt(t){var e,n;return e=new Ot({props:{error:t[0],status:t[1]}}),{c:function(){lt(e.$$.fragment)},l:function(t){pt(e.$$.fragment,t)},m:function(t,r){ht(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(ut(e.$$.fragment,t),n=!0)},o:function(t){ct(e.$$.fragment,t),n=!1},d:function(t){dt(e,t)}}}function At(t){var e,n,r,o,a=[Nt,Lt],i=[];function u(t,e){return t[0]?0:1}return e=u(t),n=i[e]=a[e](t),{c:function(){n.c(),r=A()},l:function(t){n.l(t),r=A()},m:function(t,n){i[e].m(t,n),P(t,r,n),o=!0},p:function(t,o){var c=e;(e=u(t))===c?i[e].p(t,o):(at(),ct(i[c],1,1,(function(){i[c]=null})),it(),(n=i[e])?n.p(t,o):(n=i[e]=a[e](t)).c(),ut(n,1),n.m(r.parentNode,r))},i:function(t){o||(ut(n),o=!0)},o:function(t){ct(n),o=!1},d:function(t){i[e].d(t),t&&O(r)}}}function Tt(t){for(var e,n,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[At]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=y(o,r[a]);return e=new Et({props:o}),{c:function(){lt(e.$$.fragment)},l:function(t){pt(e.$$.fragment,t)},m:function(t,r){ht(e,t,r),n=!0},p:function(t,n){var o=u(n,1)[0],a=12&o?ft(r,[4&o&&{segment:t[2][0]},8&o&&st(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i:function(t){n||(ut(e.$$.fragment,t),n=!0)},o:function(t){ct(e.$$.fragment,t),n=!1},d:function(t){dt(e,t)}}}function Ct(t,e,n){var r,o,a=e.stores,i=e.error,u=e.status,c=e.segments,f=e.level0,s=e.level1,l=void 0===s?null:s,p=e.notify;return function(t){M().$$.after_update.push(t)}(p),r=_t,o=a,M().$$.context.set(r,o),t.$$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,i=t.error),"status"in t&&n(1,u=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,f=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,p=t.notify)},[i,u,c,f,l,a,p]}var It=function(t){s(n,yt);var e=Rt(n);function n(t){var r;return d(this,n),mt(l(r=e.call(this)),t,Ct,Tt,$,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),qt=[],Jt=[{js:function(){return Promise.all([import("./index.1fed89eb.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.1deadb70.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.82f63969.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.028328ae.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.0825d62b.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.3feb381f.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.bbb248d6.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.e8a097a7.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.0e5fbae5.js"),__inject_styles(["client-e5a9025c.css"])]).then((function(t){return t[0]}))}}],Dt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/affirmation\/?$/,parts:[{i:1}]},{pattern:/^\/colours\/?$/,parts:[{i:2}]},{pattern:/^\/colours\/games\/?$/,parts:[null,{i:3}]},{pattern:/^\/colours\/games\/flash-cards%20copy\/?$/,parts:[null,null,{i:4}]},{pattern:/^\/colours\/games\/pick-the-word\/?$/,parts:[null,null,{i:5}]},{pattern:/^\/colours\/games\/flash-cards\/?$/,parts:[null,null,{i:6}]},{pattern:/^\/colours\/games\/accent\/?$/,parts:[null,null,{i:7}]},{pattern:/^\/accent\/?$/,parts:[{i:8}]}];
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
function Ut(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function u(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))}function Gt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Ft,Mt=1;var Bt,Kt,Yt="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},zt={};function Vt(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var r=u(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=r[1],a=r[2],i=void 0===a?"":a;"string"==typeof n[o]&&(n[o]=[n[o]]),"object"===t(n[o])?n[o].push(i):n[o]=i})),n}function Wt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Bt))return null;var e=t.pathname.slice(Bt.length);if(""===e&&(e="/"),!qt.some((function(t){return t.test(e)})))for(var n=0;n<Dt.length;n+=1){var r=Dt[n],o=r.pattern.exec(e);if(o){var a=Vt(t.search),i=r.parts[r.parts.length-1],u=i.params?i.params(o):{},c={host:location.host,path:e,query:a,params:u};return{href:t.href,route:r,match:o,page:c}}}}function Ht(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Gt(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=Wt(a);if(i)Zt(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),Yt.pushState({id:Ft},"",a.href)}}}else location.hash||e.preventDefault()}}}function Xt(){return{x:pageXOffset,y:pageYOffset}}function Qt(t){if(zt[Ft]=Xt(),t.state){var e=Wt(new URL(location.href));e?Zt(e,t.state.id):location.href=location.href}else(function(t){Ft=t})(Mt=Mt+1),Yt.replaceState({id:Ft},"",location.href)}function Zt(t,e,n,r){return Ut(this,void 0,void 0,o.mark((function a(){var i,u,c,f;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!e)?Ft=e:(u=Xt(),zt[Ft]=u,Ft=e=++Mt,zt[Ft]=n?u:{x:0,y:0}),o.next=4,Kt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(c=zt[e],r&&(f=document.getElementById(r.slice(1)))&&(c={x:0,y:f.getBoundingClientRect().top+scrollY}),zt[Ft]=c,i||f?scrollTo(c.x,c.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),a)})))}function te(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var ee,ne=null;function re(t){return ne&&ne.href===t.href?ne.promise:Se(t)}function oe(t){var e=Gt(t.target);e&&"prefetch"===e.rel&&function(t){var e=Wt(new URL(t,te(document)));if(e)ne&&t===ne.href||(ne={href:t,promise:Se(e)}),ne.promise}(e.href)}function ae(t){clearTimeout(ee),ee=setTimeout((function(){oe(t)}),20)}function ie(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=Wt(new URL(t,te(document)));return n?(Yt[e.replaceState?"replaceState":"pushState"]({id:Ft},"",t),Zt(n,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var ue,ce,fe,se,le,pe,he,de,ve,me="undefined"!=typeof __SAPPER__&&__SAPPER__,ye=!1,ge=[],be="{}",_e={page:function(t){var e=bt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:bt(null),session:bt(me&&me.session)};function we(t,e){var n=t.error;return Object.assign({error:n},e)}function $e(t){return Ut(this,void 0,void 0,o.mark((function e(){var n,r,a,i,u,c;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ue&&_e.preloading.set(!0),n=re(t),r=ce={},e.next=5,n;case 5:if(a=e.sent,i=a.redirect,r===ce){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,ie(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return u=a.props,c=a.branch,e.next=17,xe(c,u,we(u,t.page));case 17:case"end":return e.stop()}}),e)})))}function xe(t,e,n){return Ut(this,void 0,void 0,o.mark((function r(){return o.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(_e.page.set(n),_e.preloading.set(!1),!ue){r.next=6;break}ue.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:_e.page.subscribe},preloading:{subscribe:_e.preloading.subscribe},session:_e.session},r.next=9,fe;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=_e.page.notify,ue=new It({target:pe,props:e,hydrate:!0});case 13:ge=t,be=JSON.stringify(n.query),ye=!0,le=!1;case 17:case"end":return r.stop()}}),r)})))}function Ee(t,e,n,r){if(r!==be)return!0;var o=ge[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function Se(t){return Ut(this,void 0,void 0,o.mark((function e(){var n,r,a,i,u,c,f,s,l,p,h,d,v=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,a=r.path.split("/").filter(Boolean),i=null,u={error:null,status:200,segments:[a[0]]},c={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},fe||(f=function(){return{}},fe=me.preloaded[0]||f.call(c,{host:r.host,path:r.path,query:r.query,params:{}},se)),l=1,e.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),d=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Ut(v,void 0,void 0,o.mark((function i(){var f,s,v,m,y,g;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(f=a[n],Ee(n,f,h,p)&&(d=!0),u.segments[l]=a[n+1],e){o.next=5;break}return o.abrupt("return",{segment:f});case 5:if(s=l++,le||d||!ge[n]||ge[n].part!==e.i){o.next=8;break}return o.abrupt("return",ge[n]);case 8:return d=!1,o.next=11,Jt[e.i].js();case 11:if(v=o.sent,m=v.default,y=v.preload,!ye&&me.preloaded[n+1]){o.next=25;break}if(!y){o.next=21;break}return o.next=18,y.call(c,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},se);case 18:o.t0=o.sent,o.next=22;break;case 21:o.t0={};case 22:g=o.t0,o.next=26;break;case 25:g=me.preloaded[n+1];case 26:return o.abrupt("return",u["level".concat(s)]={component:m,props:g,segment:f,match:h,part:e.i});case 27:case"end":return o.stop()}}),i)})))})));case 13:s=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),u.error=e.t0,u.status=500,s=[];case 21:return e.abrupt("return",{redirect:i,props:u,branch:s});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}_e.session.subscribe((function(t){return Ut(void 0,void 0,void 0,o.mark((function e(){var n,r,a,i,u,c;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(se=t,ye){e.next=3;break}return e.abrupt("return");case 3:return le=!0,n=Wt(new URL(location.href)),r=ce={},e.next=8,Se(n);case 8:if(a=e.sent,i=a.redirect,u=a.props,c=a.branch,r===ce){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,ie(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,xe(c,u,we(u,n.page));case 21:case"end":return e.stop()}}),e)})))})),he={target:document.querySelector("#sapper")},de=he.target,pe=de,ve=me.baseUrl,Bt=ve,Kt=$e,"scrollRestoration"in Yt&&(Yt.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Yt.scrollRestoration="auto"})),addEventListener("load",(function(){Yt.scrollRestoration="manual"})),addEventListener("click",Ht),addEventListener("popstate",Qt),addEventListener("touchstart",oe),addEventListener("mousemove",ae),me.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=me.session,a=me.preloaded,i=me.status,u=me.error;fe||(fe=a&&a[0]);var c={error:u,status:i,session:o,level0:{props:fe},level1:{props:{status:i,error:u},component:Ot},segments:a},f=Vt(r);xe([],c,{host:e,path:n,query:f,params:{},error:u})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;Yt.replaceState({id:Mt},"",n);var r=Wt(new URL(location.href));if(r)return Zt(r,Mt,!0,e)}));export{bt as A,E as B,T as C,u as D,j as E,K as F,yt as S,s as _,c as a,p as b,d as c,l as d,R as e,N as f,q as g,I as h,mt as i,J as j,O as k,D as l,C as m,P as n,k as o,m as p,B as q,x as r,$ as s,L as t,lt as u,pt as v,ht as w,ut as x,ct as y,dt as z};

import __inject_styles from './inject_styles.fe622066.js';
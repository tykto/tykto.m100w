import{_ as t,a as r,b as n,c as e,i as o,s as a,d as c,K as u,S as i,e as s,t as f,f as l,g as d,h,j as v,k as p,l as y,m as b,L as x,n as m,o as j,C as g,D as w,M as A,p as $,N as R,F as E,O,P as S,Q as I,R as k,A as D,r as T,u as P,v as C,w as L,x as U,y as F,z as N,J as z,q as V,T as Z}from"./client.0cc49e0d.js";import"./writableLocalStorage.7e30c5b6.js";import{a as W}from"./accentStore.fa8910c8.js";import{g as q,a as G,c as M,i as B,o as H,r as J,v as Y,d as _,e as K,b as Q}from"./colourStore.3e9c23d6.js";function X(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,a=r(t);if(e){var c=r(this).constructor;o=Reflect.construct(a,arguments,c)}else o=a.apply(this,arguments);return n(this,o)}}function tt(t){var r,n,e,o,a,c,u,i,E,O,S;return{c:function(){r=s("div"),n=s("div"),e=s("h1"),o=f(t[3]),c=l(),u=s("div"),this.h()},l:function(a){r=d(a,"DIV",{class:!0});var i=h(r);n=d(i,"DIV",{class:!0});var s=h(n);e=d(s,"H1",{});var f=h(e);o=v(f,t[3]),f.forEach(p),s.forEach(p),c=y(i),u=d(i,"DIV",{class:!0}),h(u).forEach(p),i.forEach(p),this.h()},h:function(){b(n,"class",a="t-face t-front "+t[2]+" svelte-1q1gm5c"),b(u,"class",i="t-face t-back "+t[1]+" svelte-1q1gm5c"),b(r,"class",E="t-card "+t[0]+" svelte-1q1gm5c"),x(r,"t-face-down",t[4]),x(r,"t-face-up",!t[4])},m:function(a,i){m(a,r,i),j(r,n),j(n,e),j(e,o),j(r,c),j(r,u),O||(S=[g(n,"click",t[5]),g(u,"click",t[5])],O=!0)},p:function(t,e){var c=w(e,1)[0];8&c&&A(o,t[3]),4&c&&a!==(a="t-face t-front "+t[2]+" svelte-1q1gm5c")&&b(n,"class",a),2&c&&i!==(i="t-face t-back "+t[1]+" svelte-1q1gm5c")&&b(u,"class",i),1&c&&E!==(E="t-card "+t[0]+" svelte-1q1gm5c")&&b(r,"class",E),17&c&&x(r,"t-face-down",t[4]),17&c&&x(r,"t-face-up",!t[4])},i:$,o:$,d:function(t){t&&p(r),O=!1,R(S)}}}function rt(t,r,n){var e=r.class,o=void 0===e?"":e,a=r.backClass,c=void 0===a?"":a,u=r.disabled,i=void 0!==u&&u,s=r.frontClass,f=void 0===s?"":s,l=r.text,d=void 0===l?"":l,h=function(){n(4,p=!p),y=setTimeout((function(){b("flip",{faceDown:p}),b(p?"flipToBack":"flipToFront"),v=!1}),1e3)},v=!1,p=!0,y=null,b=E();return O((function(){return clearTimeout(y)})),t.$$set=function(t){"class"in t&&n(0,o=t.class),"backClass"in t&&n(1,c=t.backClass),"disabled"in t&&n(6,i=t.disabled),"frontClass"in t&&n(2,f=t.frontClass),"text"in t&&n(3,d=t.text)},[o,c,f,d,p,function(){v||i||(v=!0,h())},i,function(){return h()}]}var nt=function(r){t(s,i);var n=X(s);function s(t){var r;return e(this,s),r=n.call(this),o(c(r),t,rt,tt,a,{class:0,backClass:1,disabled:6,frontClass:2,text:3,flip:7}),r}return u(s,[{key:"flip",get:function(){return this.$$.ctx[7]}}]),s}();class et{async play(t){await new Promise((r=>{const n=new Audio(t);n.onended=()=>r(null),n.play()}))}}const ot={[q]:["a","and","be","I","in","is","it","of","that","the","to","was"],[G]:["an","by","do","go","if","me","my","no","or","up"],[M]:["big","can","did","get","has","him","new","now","off","old","our","out","see","she","two","who"],[B]:["call","come","here","make","must","only","some","then","were","what","will","your"],[H]:["back","been","came","down","from","into","just","like","made","much","over","them","this","well","went","when"],[J]:["all","as","are","at","but","for","had","have","he","her","his","not","on","one","said","so","they","with","we","you"],[Y]:["about","before","could","first","little","look","more","other","right","their","there","want","where","which"]};var at=function(t,r){var n=-1,e=t.length;for(r||(r=Array(e));++n<e;)r[n]=t[n];return r},ct=Math.floor,ut=Math.random;var it=function(t,r){return t+ct(ut()*(r-t+1))};var st=function(t,r){var n=-1,e=t.length,o=e-1;for(r=void 0===r?e:r;++n<r;){var a=it(n,o),c=t[a];t[a]=t[n],t[n]=c}return t.length=r,t};var ft=function(t){return st(at(t))};var lt=function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o};var dt=function(t,r){return lt(r,(function(r){return t[r]}))};var ht=function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e},vt="object"==S(I)&&I&&I.Object===Object&&I,pt="object"==("undefined"==typeof self?"undefined":S(self))&&self&&self.Object===Object&&self,yt=vt||pt||Function("return this")(),bt=yt.Symbol,xt=Object.prototype,mt=xt.hasOwnProperty,jt=xt.toString,gt=bt?bt.toStringTag:void 0;var wt=function(t){var r=mt.call(t,gt),n=t[gt];try{t[gt]=void 0;var e=!0}catch(t){}var o=jt.call(t);return e&&(r?t[gt]=n:delete t[gt]),o},At=Object.prototype.toString;var $t=function(t){return At.call(t)},Rt=bt?bt.toStringTag:void 0;var Et=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Rt&&Rt in Object(t)?wt(t):$t(t)};var Ot=function(t){return null!=t&&"object"==S(t)};var St=function(t){return Ot(t)&&"[object Arguments]"==Et(t)},It=Object.prototype,kt=It.hasOwnProperty,Dt=It.propertyIsEnumerable,Tt=St(function(){return arguments}())?St:function(t){return Ot(t)&&kt.call(t,"callee")&&!Dt.call(t,"callee")},Pt=Array.isArray;var Ct=function(){return!1},Lt=k((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n?yt.Buffer:void 0,a=(o?o.isBuffer:void 0)||Ct;t.exports=a})),Ut=/^(?:0|[1-9]\d*)$/;var Ft=function(t,r){var n=S(t);return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&Ut.test(t))&&t>-1&&t%1==0&&t<r};var Nt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},zt={};zt["[object Float32Array]"]=zt["[object Float64Array]"]=zt["[object Int8Array]"]=zt["[object Int16Array]"]=zt["[object Int32Array]"]=zt["[object Uint8Array]"]=zt["[object Uint8ClampedArray]"]=zt["[object Uint16Array]"]=zt["[object Uint32Array]"]=!0,zt["[object Arguments]"]=zt["[object Array]"]=zt["[object ArrayBuffer]"]=zt["[object Boolean]"]=zt["[object DataView]"]=zt["[object Date]"]=zt["[object Error]"]=zt["[object Function]"]=zt["[object Map]"]=zt["[object Number]"]=zt["[object Object]"]=zt["[object RegExp]"]=zt["[object Set]"]=zt["[object String]"]=zt["[object WeakMap]"]=!1;var Vt=function(t){return Ot(t)&&Nt(t.length)&&!!zt[Et(t)]};var Zt=function(t){return function(r){return t(r)}},Wt=k((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n&&vt.process,a=function(){try{var t=e&&e.require&&e.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),qt=Wt&&Wt.isTypedArray,Gt=qt?Zt(qt):Vt,Mt=Object.prototype.hasOwnProperty;var Bt=function(t,r){var n=Pt(t),e=!n&&Tt(t),o=!n&&!e&&Lt(t),a=!n&&!e&&!o&&Gt(t),c=n||e||o||a,u=c?ht(t.length,String):[],i=u.length;for(var s in t)!r&&!Mt.call(t,s)||c&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Ft(s,i))||u.push(s);return u},Ht=Object.prototype;var Jt=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Ht)};var Yt=function(t,r){return function(n){return t(r(n))}}(Object.keys,Object),_t=Object.prototype.hasOwnProperty;var Kt=function(t){if(!Jt(t))return Yt(t);var r=[];for(var n in Object(t))_t.call(t,n)&&"constructor"!=n&&r.push(n);return r};var Qt=function(t){var r=S(t);return null!=t&&("object"==r||"function"==r)};var Xt=function(t){if(!Qt(t))return!1;var r=Et(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r};var tr=function(t){return null!=t&&Nt(t.length)&&!Xt(t)};var rr=function(t){return tr(t)?Bt(t):Kt(t)};var nr=function(t){return null==t?[]:dt(t,rr(t))};var er=function(t){return st(nr(t))};var or=function(t){return(Pt(t)?ft:er)(t)};const ar=D(!0),cr=D(null),ur=D({current:0,count:0}),ir=D(null),sr=D(null),fr=D(null);class lr{constructor(t){this.options=t,this.words=[],this.currentWord=-1}prepareRound(){this.currentWord++,this.currentWord>=this.words.length&&(this.currentWord=0),0===this.currentWord&&(this.words=or(ot[T(_)])),cr.set(this.words[this.currentWord]),ur.set({current:this.currentWord+1,count:this.words.length}),ir.set(this.options.timeLimitSeconds),ar.set(!1)}startGame(){this.prepareRound()}startRound(){ar.set(!0),sr.set(setInterval((()=>this.tick()),1e3)),fr.set(setTimeout((()=>this.finishRound()),1e3*this.options.timeLimitSeconds))}async finishRound(){clearInterval(T(sr)),ir.set(0),await this.options.wordAudioPlayer.play(this.words[this.currentWord]),await this.options.onFinishRound()}tick(){ir.update((t=>(t>1&&t<=4&&this.options.tickAudioPlayer.play(),t-1)))}}class dr{constructor(t){this.options=t}async play(){await this.options.audioPlayer.play("audio/tick.mp3")}}var hr=function(t,r,n,e){var o=-1,a=null==t?0:t.length;for(e&&a&&(n=t[++o]);++o<a;)n=r(n,t[o],o,t);return n};var vr=function(t){return function(r){return null==t?void 0:t[r]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});var pr=function(t){return"symbol"==S(t)||Ot(t)&&"[object Symbol]"==Et(t)},yr=bt?bt.prototype:void 0,br=yr?yr.toString:void 0;var xr=function t(r){if("string"==typeof r)return r;if(Pt(r))return lt(r,t)+"";if(pr(r))return br?br.call(r):"";var n=r+"";return"0"==n&&1/r==-Infinity?"-0":n};var mr=function(t){return null==t?"":xr(t)},jr=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,gr=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var wr=function(t){return(t=mr(t))&&t.replace(jr,vr).replace(gr,"")},Ar=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var $r=function(t){return t.match(Ar)||[]},Rr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var Er=function(t){return Rr.test(t)},Or="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Sr="["+Or+"]",Ir="\\d+",kr="[\\u2700-\\u27bf]",Dr="[a-z\\xdf-\\xf6\\xf8-\\xff]",Tr="[^\\ud800-\\udfff"+Or+Ir+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",Cr="[\\ud800-\\udbff][\\udc00-\\udfff]",Lr="[A-Z\\xc0-\\xd6\\xd8-\\xde]",Ur="(?:"+Dr+"|"+Tr+")",Fr="(?:"+Lr+"|"+Tr+")",Nr="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",zr="[\\ufe0e\\ufe0f]?"+Nr+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",Pr,Cr].join("|")+")[\\ufe0e\\ufe0f]?"+Nr+")*"),Vr="(?:"+[kr,Pr,Cr].join("|")+")"+zr,Zr=RegExp([Lr+"?"+Dr+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[Sr,Lr,"$"].join("|")+")",Fr+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[Sr,Lr+Ur,"$"].join("|")+")",Lr+"?"+Ur+"+(?:['’](?:d|ll|m|re|s|t|ve))?",Lr+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ir,Vr].join("|"),"g");var Wr=function(t){return t.match(Zr)||[]};var qr=function(t,r,n){return t=mr(t),void 0===(r=n?void 0:r)?Er(t)?Wr(t):$r(t):t.match(r)||[]},Gr=RegExp("['’]","g");var Mr=function(t){return function(r){return hr(qr(wr(r).replace(Gr,"")),t,"")}}((function(t,r,n){return t+(n?" ":"")+r.toLowerCase()}));class Br{constructor(t){this.options=t}async play(t){const r=T(W);await this.options.audioPlayer.play(`audio/${r}/${Mr(t)}.mp3`)}}function Hr(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,a=r(t);if(e){var c=r(this).constructor;o=Reflect.construct(a,arguments,c)}else o=a.apply(this,arguments);return n(this,o)}}function Jr(t){var r,n,e,o,a,c,u,i,x,g,$,R,E,O,S,I,k,D,T,z,V,Z,W,q=t[3].current+"",G=t[3].count+"",M={class:"flex justify-center items-center h-1/2 w-3/4 sm:w-2/5 xl:w-1/3 2xl:w-1/5",backClass:"rounded border-solid border-20 "+t[8]+" "+t[7],frontClass:"bg-white flex justify-center items-center text-5xl font-bold rounded border-solid border-20 "+t[7],text:t[4],disabled:t[2]};return u=new nt({props:M}),t[13](u),u.$on("flipToFront",t[6]),u.$on("flipToBack",t[5]),{c:function(){r=s("div"),n=s("div"),e=s("h1"),o=f("Flash Cards"),a=l(),c=s("div"),P(u.$$.fragment),i=l(),x=s("div"),g=s("div"),$=s("span"),R=f(t[1]),E=l(),O=s("div"),S=s("span"),I=f(q),k=l(),D=s("span"),T=f("of"),z=l(),V=s("span"),Z=f(G),this.h()},l:function(s){r=d(s,"DIV",{class:!0});var f=h(r);n=d(f,"DIV",{class:!0});var l=h(n);e=d(l,"H1",{});var b=h(e);o=v(b,"Flash Cards"),b.forEach(p),l.forEach(p),a=y(f),c=d(f,"DIV",{class:!0});var m=h(c);C(u.$$.fragment,m),m.forEach(p),i=y(f),x=d(f,"DIV",{class:!0});var j=h(x);g=d(j,"DIV",{class:!0});var w=h(g);$=d(w,"SPAN",{class:!0});var A=h($);R=v(A,t[1]),A.forEach(p),w.forEach(p),E=y(j),O=d(j,"DIV",{class:!0});var P=h(O);S=d(P,"SPAN",{class:!0});var L=h(S);I=v(L,q),L.forEach(p),k=y(P),D=d(P,"SPAN",{});var U=h(D);T=v(U,"of"),U.forEach(p),z=y(P),V=d(P,"SPAN",{class:!0});var F=h(V);Z=v(F,G),F.forEach(p),P.forEach(p),j.forEach(p),f.forEach(p),this.h()},h:function(){b(n,"class","flex px-2 py-2"),b(c,"class","flex justify-center items-center h-full"),b($,"class","text-2xl pt-2"),b(g,"class","font-bold py-2 px-4"),b(S,"class","font-medium"),b(V,"class","font-medium"),b(O,"class","flex justify-center items-center px-3 space-x-2"),b(x,"class","flex justify-between px-2 py-2"),b(r,"class","flex flex-col h-full")},m:function(t,s){m(t,r,s),j(r,n),j(n,e),j(e,o),j(r,a),j(r,c),L(u,c,null),j(r,i),j(r,x),j(x,g),j(g,$),j($,R),j(x,E),j(x,O),j(O,S),j(S,I),j(O,k),j(O,D),j(D,T),j(O,z),j(O,V),j(V,Z),W=!0},p:function(t,r){var n=w(r,1)[0],e={};16&n&&(e.text=t[4]),4&n&&(e.disabled=t[2]),u.$set(e),(!W||2&n)&&A(R,t[1]),(!W||8&n)&&q!==(q=t[3].current+"")&&A(I,q),(!W||8&n)&&G!==(G=t[3].count+"")&&A(Z,G)},i:function(t){W||(U(u.$$.fragment,t),W=!0)},o:function(t){F(u.$$.fragment,t),W=!1},d:function(n){n&&p(r),t[13](null),N(u)}}}function Yr(t,r,n){var e,o,a,c,u,i,s;z(t,_,(function(t){return n(14,e=t)})),z(t,ir,(function(t){return n(9,o=t)})),z(t,ar,(function(t){return n(10,a=t)})),z(t,ur,(function(t){return n(11,c=t)})),z(t,cr,(function(t){return n(12,u=t)})),z(t,fr,(function(t){return n(15,i=t)})),z(t,sr,(function(t){return n(16,s=t)}));var f,l,d,h,v,p=K[e],y=Q[e],b=(t=>{const r=new et,n=new dr({audioPlayer:r}),e=new Br({audioPlayer:r});return new lr({onFinishRound:t,timeLimitSeconds:5,tickAudioPlayer:n,wordAudioPlayer:e})})((function(){return f.flip()}));return V((function(){return b.startGame()})),O((function(){return clearTimeout(i)})),O((function(){return clearInterval(s)})),t.$$.update=function(){512&t.$$.dirty&&n(1,l=o),1024&t.$$.dirty&&n(2,d=a),2048&t.$$.dirty&&n(3,h=c),4096&t.$$.dirty&&n(4,v=u)},[f,l,d,h,v,function(){return b.prepareRound()},function(){return b.startRound()},p,y,o,a,c,u,function(t){Z[t?"unshift":"push"]((function(){n(0,f=t)}))}]}var _r=function(r){t(u,i);var n=Hr(u);function u(t){var r;return e(this,u),r=n.call(this),o(c(r),t,Yr,Jr,a,{}),r}return u}();function Kr(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,a=r(t);if(e){var c=r(this).constructor;o=Reflect.construct(a,arguments,c)}else o=a.apply(this,arguments);return n(this,o)}}function Qr(t){var r,n;return r=new _r({}),{c:function(){P(r.$$.fragment)},l:function(t){C(r.$$.fragment,t)},m:function(t,e){L(r,t,e),n=!0},p:$,i:function(t){n||(U(r.$$.fragment,t),n=!0)},o:function(t){F(r.$$.fragment,t),n=!1},d:function(t){N(r,t)}}}var Xr=function(r){t(u,i);var n=Kr(u);function u(t){var r;return e(this,u),r=n.call(this),o(c(r),t,null,Qr,a,{}),r}return u}();export default Xr;

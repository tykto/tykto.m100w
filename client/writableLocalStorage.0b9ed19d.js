import{w as t,l as e}from"./client.e7158151.js";function r(r,s){const o=t(s),{subscribe:a,set:n}=o,c=localStorage.getItem(r);return void 0!==c&&n((t=>{try{return JSON.parse(t)}catch(t){return null}})(c)),{set:t=>{localStorage.setItem(r,JSON.stringify(t)),n(t)},update:t=>{const s=t(e(o));localStorage.setItem(r,JSON.stringify(s)),n(s)},subscribe:a}}const s=(e,s)=>"undefined"==typeof localStorage?t(s):r(e,s);export{s as w};

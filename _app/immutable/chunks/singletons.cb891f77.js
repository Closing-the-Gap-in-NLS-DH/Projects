import{w as u}from"./index.72eee438.js";var _;const k=((_=globalThis.__sveltekit_11ypg6y)==null?void 0:_.base)??"/Closing-The-Gap-In-Non-Latin-Script-Data";var g;const y=((g=globalThis.__sveltekit_11ypg6y)==null?void 0:g.assets)??k,m="1695127573706",A="sveltekit:snapshot",I="sveltekit:scroll",R="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function S(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function x(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||E(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:o,download:l}}function O(e){let t=null,n=null,o=null,r=null,l=null,s=null,a=e;for(;a&&a!==document.documentElement;)o===null&&(o=c(a,"preload-code")),r===null&&(r=c(a,"preload-data")),t===null&&(t=c(a,"keepfocus")),n===null&&(n=c(a,"noscroll")),l===null&&(l=c(a,"reload")),s===null&&(s=c(a,"replacestate")),a=h(a);function i(v){switch(v){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[o??"off"],preload_data:d[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(l),replace_state:i(s)}}function p(e){const t=u(e);let n=!0;function o(){n=!0,t.update(s=>s)}function r(s){n=!1,t.set(s)}function l(s){let a;return t.subscribe(i=>{(a===void 0||n&&i!==a)&&s(a=i)})}return{notify:o,set:r,subscribe:l}}function w(){const{set:e,subscribe:t}=u(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${y}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const s=(await r.json()).version!==m;return s&&(e(!0),clearTimeout(n)),s}catch{return!1}}return{subscribe:t,check:o}}function E(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let b;function U(e){b=e.client}function P(e){return(...t)=>b[e](...t)}const V={url:p({}),page:p({}),navigating:u(null),updated:w()};export{R as I,f as P,I as S,A as a,N as b,O as c,V as d,k as e,L as f,S as g,U as h,E as i,P as j,x as s};

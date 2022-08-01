(function(){"use strict";var t={9358:function(t,n,e){var r=e(9242),o=e(3396),i=e(7139);const u={class:"flex flex-wrap"},a={class:"head w-full text-left p-5"},l={class:"text-5xl ml-3"},c={class:"text-2xl ml-3 mt-4"},f={class:"nav w-full pl-3"};function s(t,n,e,r,s,p){const d=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",a,[(0,o._)("h1",l,(0,i.zw)(r.title),1),(0,o._)("h2",c,(0,i.zw)(r.subtitle),1)]),(0,o._)("div",f,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.nav,((t,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:"nav-item float-left py-3 ml-5 text-xl"},(0,i.zw)(t.label),1)))),128))]),(0,o._)("div",null,[(0,o.Wm)(d)])])}var p=e(4870),d={setup(){const t=(0,p.iH)("Closing the Gap"),n=(0,p.iH)("in Non-Latin Script Data"),e=(0,p.iH)([{label:"Projects"},{label:"Initiatives"},{label:"About"}]);return{title:t,subtitle:n,nav:e}},provide:{rtlCharset:/[\u0600-\u06FF]/}},v=e(89);const b=(0,v.Z)(d,[["render",s]]);var h=b,g=e(678);const m=[{path:"/projects/:tag?",alias:"/",name:"projects",component:()=>e.e(568).then(e.bind(e,568))}],y=(0,g.p7)({history:(0,g.PO)("/Closing-The-Gap-In-Non-Latin-Script-Data/"),routes:m});var w=y;(0,r.ri)(h).use(w).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var u=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[l])}))?r.splice(l--,1):(a=!1,i<u&&(u=i));if(a){t.splice(f--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/"+t+".a3eaf1c6.js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="gui:";e.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var s=c[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+i){a=s;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,e.nc&&a.setAttribute("nonce",e.nc),a.setAttribute("data-webpack",n+i),a.src=r),t[r]=[o];var p=function(n,e){a.onerror=a.onload=null,clearTimeout(d);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(e)})),n)return n(e)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/Closing-The-Gap-In-Non-Latin-Script-Data/"}(),function(){var t={143:0};e.f.j=function(n,r){var o=e.o(t,n)?t[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(e,r){o=t[n]=[e,r]}));r.push(o[2]=i);var u=e.p+e.u(n),a=new Error,l=function(r){if(e.o(t,n)&&(o=t[n],0!==o&&(t[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};e.l(u,l,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],l=r[2],c=0;if(u.some((function(n){return 0!==t[n]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(l)var f=l(e)}for(n&&n(r);c<u.length;c++)i=u[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(f)},r=self["webpackChunkgui"]=self["webpackChunkgui"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(9358)}));r=e.O(r)})();
//# sourceMappingURL=app.a45be6dc.js.map
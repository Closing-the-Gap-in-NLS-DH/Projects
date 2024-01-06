import{_ as D}from"../chunks/preload-helper.0HuHagjb.js";import{s as P,n as u,o as S,h as F,b as L}from"../chunks/scheduler.64hus-lv.js";import{S as $,i as I,s as T,g,F as C,f as d,c as M,h as _,j as x,k as v,a as w,z as O}from"../chunks/index.SmlBE_ep.js";import{e as b,g as V,i as z,o as N}from"../chunks/utils.NnbpIkrd.js";function R(h){let n,s,e;return{c(){n=T(),s=g("div"),e=g("div"),this.h()},l(t){C("svelte-1w6dn8w",document.head).forEach(d),n=M(t),s=_(t,"DIV",{class:!0});var r=x(s);e=_(r,"DIV",{class:!0}),x(e).forEach(d),r.forEach(d),this.h()},h(){document.title="Closing the Gap in Non-Latin-Script Data – Map",v(e,"class","h-[34rem] rounded-md font-normal"),v(s,"class","mx-auto max-w-6xl px-4")},m(t,i){w(t,n,i),w(t,s,i),O(s,e),h[1](e)},p:u,i:u,o:u,d(t){t&&(d(n),d(s)),h[1](null)}}}const A="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/PROJECTS/";function G(h,n,s){let e,t,i;b.subscribe(o=>{i=o});const r={};S(async()=>{const o=await D(()=>import("../chunks/leaflet-src.8KDsyzZe.js").then(a=>a.l),__vite__mapDeps([]),import.meta.url);t=o.map(e).setView([51.53443,9.93228],5),o.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t);const[j,E]=await V();if(i.length!==j){const a=await z(E);b.set(a)}for(const[a,l]of i){const m=N(l.project.places),c=`${A}${a.split("/PROJECTS/")[1]}`;for(const p of m){const f=p.place_name.text+p.coordinates.lat.split(".")[0]+p.coordinates.lng.split(".")[0];if(r[f])r[f].projects.push({title:l.project.title,url:c});else{const k={lat:p.coordinates.lat,lng:p.coordinates.lng,projects:[{title:l.project.title,url:c}]};r[f]=k}}}for(const[,a]of Object.entries(r)){const l=a.projects.map(c=>`<a
							href=${c.url}
							target="_blank"
							rel="noreferrer"
							class="font-fira">${c.title}</a
						>`).join('<hr class="my-1.5" />'),m=o.divIcon({html:`
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48">
					<path
						d="m1 16 15 30 15-30a8 8 0 0 0-30 0Z"
						stroke-width="2"
						stroke="#06F"
						fill="#06F"
						fill-opacity=".4"
					/>
					<circle cx="16" cy="16" r="10" fill="#FFF" stroke="#06F" />
					<text
						text-anchor="middle"
						x="16"
						y="20"
						fill="rgba(0, 0, 0,1)">${a.projects.length}</text
					>
				</svg>
				`,className:"font-fira text-[13px]",iconSize:[32,48],iconAnchor:[16,48]});o.marker([a.lat,a.lng],{icon:m}).addTo(t).bindPopup(l,{maxHeight:250,maxWidth:250})}}),F(async()=>{t&&t.remove()});function y(o){L[o?"unshift":"push"](()=>{e=o,s(0,e)})}return[e,y]}class B extends ${constructor(n){super(),I(this,n,G,R,P,{})}}export{B as component};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

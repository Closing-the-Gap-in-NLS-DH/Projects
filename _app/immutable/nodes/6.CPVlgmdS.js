function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/leaflet-src.CKS_39_u.js","../chunks/_commonjsHelpers.Cpj98o6Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as j}from"../chunks/preload-helper.D6kgxu3v.js";import{s as k,n as u,o as E,a as P,b as S}from"../chunks/scheduler.kPUuJgHu.js";import{S as D,i as $,s as F,e as g,k as I,d as p,f as L,c as _,a as x,m as v,g as w,h as T}from"../chunks/index.CYrHsBOq.js";import{f as C}from"../chunks/utils.2Mjr6J5S.js";import{e as M}from"../chunks/ENTRIES.B8oTZR8-.js";function O(m){let n,a,e;return{c(){n=F(),a=g("div"),e=g("div"),this.h()},l(t){I("svelte-1w6dn8w",document.head).forEach(p),n=L(t),a=_(t,"DIV",{class:!0});var d=x(a);e=_(d,"DIV",{class:!0}),x(e).forEach(p),d.forEach(p),this.h()},h(){document.title="Closing the Gap in Non-Latin-Script Data – Map",v(e,"class","h-[34rem] rounded-md font-normal"),v(a,"class","mx-auto max-w-6xl px-4")},m(t,o){w(t,n,o),w(t,a,o),T(a,e),m[1](e)},p:u,i:u,o:u,d(t){t&&(p(n),p(a)),m[1](null)}}}const R="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/PROJECTS/";function V(m,n,a){let e,t;const o={};E(async()=>{const r=await j(()=>import("../chunks/leaflet-src.CKS_39_u.js").then(s=>s.l),__vite__mapDeps([0,1]),import.meta.url);t=r.map(e).setView([51.53443,9.93228],5),r.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t);const b=M;for(const[s,i]of b){const h=C(i.project.places),l=`${R}${s.split("/PROJECTS/")[1]}`;for(const c of h){const f=c.place_name.text+c.coordinates.lat.split(".")[0]+c.coordinates.lng.split(".")[0];if(o[f])o[f].projects.push({title:i.project.title,url:l});else{const y={lat:c.coordinates.lat,lng:c.coordinates.lng,projects:[{title:i.project.title,url:l}]};o[f]=y}}}for(const[,s]of Object.entries(o)){const i=s.projects.map(l=>`<a
							href=${l.url}
							target="_blank"
							rel="noreferrer"
							class="font-fira">${l.title}</a
						>`).join('<hr class="my-1.5" />'),h=r.divIcon({html:`
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
						fill="rgba(0, 0, 0,1)">${s.projects.length}</text
					>
				</svg>
				`,className:"font-fira text-[13px]",iconSize:[32,48],iconAnchor:[16,48]});r.marker([s.lat,s.lng],{icon:h}).addTo(t).bindPopup(i,{maxHeight:250,maxWidth:250})}}),P(()=>{t&&t.remove()});function d(r){S[r?"unshift":"push"](()=>{e=r,a(0,e)})}return[e,d]}class J extends D{constructor(n){super(),$(this,n,V,O,k,{})}}export{J as component};

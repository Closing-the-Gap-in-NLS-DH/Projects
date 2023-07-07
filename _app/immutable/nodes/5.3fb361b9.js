import{_ as k}from"../chunks/preload-helper.540fffa8.js";import{S as P,i as S,s as L,a as $,k as _,Q as F,h as d,c as I,l as g,m as v,n as x,b as w,D as T,E as u,o as C,W as M,w as O}from"../chunks/index.1edde592.js";import{e as y,i as V,j as N,p as R}from"../chunks/utils.8ce9691e.js";function z(h){let n,a,e;return{c(){n=$(),a=_("div"),e=_("div"),this.h()},l(t){F("svelte-1w6dn8w",document.head).forEach(d),n=I(t),a=g(t,"DIV",{class:!0});var r=v(a);e=g(r,"DIV",{class:!0}),v(e).forEach(d),r.forEach(d),this.h()},h(){document.title="Closing the Gap in Non-Latin-Script Data – Map",x(e,"class","h-[34rem] rounded-md font-normal"),x(a,"class","mx-auto max-w-6xl px-4")},m(t,i){w(t,n,i),w(t,a,i),T(a,e),h[1](e)},p:u,i:u,o:u,d(t){t&&d(n),t&&d(a),h[1](null)}}}const A="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/PROJECTS/";function G(h,n,a){let e,t,i;y.subscribe(o=>{i=o});const r={};C(async()=>{const o=await k(()=>import("../chunks/leaflet-src.e35a4304.js").then(s=>s.l),[]);t=o.map(e).setView([51.53443,9.93228],5),o.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t);const[j,E]=await V();if(i.length!==j){const s=await N(E);y.set(s)}for(const[s,l]of i){const m=R(l.project.places),c=`${A}${s.split("/PROJECTS/")[1]}`;for(const p of m){const f=p.place_name.text+p.coordinates.lat.split(".")[0]+p.coordinates.lng.split(".")[0];if(r[f])r[f].projects.push({title:l.project.title,url:c});else{const D={lat:p.coordinates.lat,lng:p.coordinates.lng,projects:[{title:l.project.title,url:c}]};r[f]=D}}}for(const[,s]of Object.entries(r)){const l=s.projects.map(c=>`<a
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
						fill="rgba(0, 0, 0,1)">${s.projects.length}</text
					>
				</svg>
				`,className:"font-fira text-[13px]",iconSize:[32,48],iconAnchor:[16,48]});o.marker([s.lat,s.lng],{icon:m}).addTo(t).bindPopup(l,{maxHeight:250,maxWidth:250})}}),M(async()=>{t&&t.remove()});function b(o){O[o?"unshift":"push"](()=>{e=o,a(0,e)})}return[e,b]}class W extends P{constructor(n){super(),S(this,n,G,z,L,{})}}export{W as component};

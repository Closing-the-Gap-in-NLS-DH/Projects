import{_ as D}from"../chunks/preload-helper.540fffa8.js";import{S as L,i as P,s as S,a as M,k as u,Q as $,h,c as F,l as _,m as w,n as v,b as x,D as I,E as g,o as T,W as C,w as O}from"../chunks/index.1edde592.js";import{e as y,g as V,i as N,j as R,m as z,k as A,l as G,n as H}from"../chunks/utils.a5460118.js";function J(m){let n,a,s;return{c(){n=M(),a=u("div"),s=u("div"),this.h()},l(t){$("svelte-1w6dn8w",document.head).forEach(h),n=F(t),a=_(t,"DIV",{class:!0});var r=w(a);s=_(r,"DIV",{class:!0}),w(s).forEach(h),r.forEach(h),this.h()},h(){document.title="Closing the Gap in Non-Latin-Script Data – Map",v(s,"class","h-[34rem] rounded-md font-normal"),v(a,"class","mx-auto max-w-6xl px-4")},m(t,i){x(t,n,i),x(t,a,i),I(a,s),m[1](s)},p:g,i:g,o:g,d(t){t&&h(n),t&&h(a),m[1](null)}}}const K="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/PROJECTS/";function U(m,n,a){let s,t,i;y.subscribe(o=>{i=o});const r={};T(async()=>{const o=await D(()=>import("../chunks/leaflet-src.e35a4304.js").then(e=>e.l),[]);t=o.map(s).setView([51.53443,9.93228],5),o.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t);const[j,E]=await V();if(i.length!==j){const e=await N(E),l=R(e),c=z(e);y.set(e),A.set(l),G.set(c)}for(const[e,l]of i){const c=H(l.project.places),p=`${K}${e.split("/PROJECTS/")[1]}`;for(const d of c){const f=d.place_name.text+d.coordinates.lat.split(".")[0]+d.coordinates.lng.split(".")[0];if(r[f])r[f].projects.push({title:l.project.title,url:p});else{const k={lat:d.coordinates.lat,lng:d.coordinates.lng,projects:[{title:l.project.title,url:p}]};r[f]=k}}}for(const[,e]of Object.entries(r)){const l=e.projects.map(p=>`<a
							href=${p.url}
							target="_blank"
							rel="noreferrer"
							class="font-fira">${p.title}</a
						>`).join('<hr class="my-1.5" />'),c=o.divIcon({html:`
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
						fill="rgba(0, 0, 0,1)">${e.projects.length}</text
					>
				</svg>
				`,className:"font-fira text-[13px]",iconSize:[32,48],iconAnchor:[16,48]});o.marker([e.lat,e.lng],{icon:c}).addTo(t).bindPopup(l,{maxHeight:250,maxWidth:250})}}),C(async()=>{t&&t.remove()});function b(o){O[o?"unshift":"push"](()=>{s=o,a(0,s)})}return[s,b]}class Q extends L{constructor(n){super(),P(this,n,U,J,S,{})}}export{Q as component};

import{S as v,i as $,s as b,k as g,l as _,m as w,h as f,n as x,b as j,D as M,E as h,o as P,W as S,w as F,a as I,y as T,Q as C,c as O,z as V,A as z,g as A,d as N,B as R}from"../chunks/index.1edde592.js";import{_ as B}from"../chunks/preload-helper.41c905a7.js";import{e as y,g as G,i as H,j as J,m as K,k as U,l as W,n as q}from"../chunks/utils.a5460118.js";function Q(l){let e,a;return{c(){e=g("div"),a=g("div"),this.h()},l(s){e=_(s,"DIV",{class:!0});var t=w(e);a=_(t,"DIV",{class:!0}),w(a).forEach(f),t.forEach(f),this.h()},h(){x(a,"class","h-[34rem] rounded-md font-normal"),x(e,"class","mx-auto max-w-6xl px-4")},m(s,t){j(s,e,t),M(e,a),l[1](a)},p:h,i:h,o:h,d(s){s&&f(e),l[1](null)}}}const Z="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/PROJECTS/";function X(l,e,a){let s,t,r;y.subscribe(o=>{r=o});const d={};P(async()=>{const o=await B(()=>import("../chunks/leaflet-src.e35a4304.js").then(n=>n.l),[],import.meta.url);t=o.map(s).setView([51.53443,9.93228],5),o.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t);const[L,k]=await G();if(r.length!==L){const n=await H(k),i=J(n),c=K(n);y.set(n),U.set(i),W.set(c)}for(const[n,i]of r){const c=q(i.project.places),p=`${Z}${n.split("/PROJECTS/")[1]}`;for(const m of c){const u=m.place_name.text+m.coordinates.lat.split(".")[0]+m.coordinates.lng.split(".")[0];if(d[u])d[u].projects.push({title:i.project.title,url:p});else{const D={lat:m.coordinates.lat,lng:m.coordinates.lng,projects:[{title:i.project.title,url:p}]};d[u]=D}}}for(const[,n]of Object.entries(d)){const i=n.projects.map(p=>`<a
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
						fill="rgba(0, 0, 0,1)">${n.projects.length}</text
					>
				</svg>
				`,className:"font-fira text-[13px]",iconSize:[32,48],iconAnchor:[16,48]});o.marker([n.lat,n.lng],{icon:c}).addTo(t).bindPopup(i,{maxHeight:250,maxWidth:250})}}),S(async()=>{t&&t.remove()});function E(o){F[o?"unshift":"push"](()=>{s=o,a(0,s)})}return[s,E]}class Y extends v{constructor(e){super(),$(this,e,X,Q,b,{})}}function tt(l){let e,a,s;return a=new Y({}),{c(){e=I(),T(a.$$.fragment),this.h()},l(t){C("svelte-1w6dn8w",document.head).forEach(f),e=O(t),V(a.$$.fragment,t),this.h()},h(){document.title="Closing the Gap in Non-Latin-Script Data – Map"},m(t,r){j(t,e,r),z(a,t,r),s=!0},p:h,i(t){s||(A(a.$$.fragment,t),s=!0)},o(t){N(a.$$.fragment,t),s=!1},d(t){t&&f(e),R(a,t)}}}class nt extends v{constructor(e){super(),$(this,e,null,tt,b,{})}}export{nt as component};

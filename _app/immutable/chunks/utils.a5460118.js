import{w as c}from"./index.92b88944.js";const m=c([]),b=c({}),k=c({}),l=c(""),h=c("search"),r=c(""),L=c([]),p="https://raw.githubusercontent.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/master";async function C(a){const t=Object.entries(a),s=[];for(const[n,e]of t)s.push(`${p}${e.path}${n}.json`);let o=await Promise.all(s.map(async n=>{const u=await(await fetch(n)).json();return[n,u]}));return o=o.sort((n,e)=>w(n[1],e[1])),o}async function T(){const t=await(await fetch(`${p}/PROJECTS.json`)).json();return[Object.keys(t).length,t]}function $(a){return a.filter(t=>t.place_name.text)}function x(a){const t={};for(const[s,o]of a){const n=o.project.keywords;for(const e of n)t[e]?t[e].push(s):t[e]=[s]}return t}function E(a){const t={};for(const[s,o]of a){const n=o.project.research_data.lang;for(const e of n)t[e]?t[e].push(s):t[e]=[s]}return t}function M(){window.location.hash?window.location.hash.startsWith("#keyword=")?(h.set("keywords"),r.set(window.location.hash.split("keyword=")[1])):window.location.hash.startsWith("#language=")?(h.set("languages"),r.set(window.location.hash.split("language=")[1])):(l.set(""),r.set("")):(l.set(""),r.set(""))}function _(){l.set(""),r.set(""),window.location.hash=""}function H(a,t){const s=t.toLowerCase(),o=[];for(const[n,e]of a){if(e.project.title.toLowerCase().includes(s)){o.push([n,e]);continue}if(e.project.abbr.toLowerCase().includes(s)){o.push([n,e]);continue}if(e.project.project_desc.toLowerCase().includes(s)){o.push([n,e]);continue}if(e.project.keywords.join(" ").includes(s)){o.push([n,e]);continue}let i="";for(const f of e.project.places)f.place_name.text&&(i+=f.place_name.text.toLowerCase(),i+=" ");if(i=i.trim(),i.includes(s)){o.push([n,e]);continue}}return o}function P(a,t){r.set(t),window.location.hash=`#${a}=${t}`}function w(a,t){const s=a.project.title.toLowerCase(),o=t.project.title.toLowerCase();return s>o?1:s<o?-1:0}export{h as a,r as b,H as c,L as d,m as e,P as f,T as g,M as h,C as i,x as j,b as k,k as l,E as m,$ as n,_ as r,l as s};

import{s as ll,n as Ve,o as nl}from"../chunks/scheduler.74e22c71.js";import{S as sl,i as al,s as w,g as m,m as k,F as rl,f as p,c as L,h as g,j as d,n as E,x as B,k as u,a as q,z as r,D as ol,o as I,C as Q,e as Fe}from"../chunks/index.e37a1605.js";import{g as cl}from"../chunks/globals.7f7f1b26.js";import{e as N}from"../chunks/each.e59479a4.js";const{window:il}=cl;function Ht(o,l,t){const e=o.slice();return e[16]=l[t],e}function qt(o,l,t){const e=o.slice();return e[19]=l[t],e}function Jt(o,l,t){const e=o.slice();return e[22]=l[t],e}function Ot(o,l,t){const e=o.slice();return e[25]=l[t],e}function Vt(o,l,t){const e=o.slice();return e[28]=l[t],e}function Ft(o,l,t){const e=o.slice();return e[31]=l[t],e}function Kt(o,l,t){const e=o.slice();return e[31]=l[t],e}function Bt(o,l,t){const e=o.slice();return e[36]=l[t],e}function Qt(o,l,t){const e=o.slice();return e[39]=l[t],e}function hl(o){let l,t=N(o[9]),e=[];for(let a=0;a<t.length;a+=1)e[a]=Wt(Qt(o,t,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=Fe()},l(a){for(let c=0;c<e.length;c+=1)e[c].l(a);l=Fe()},m(a,c){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(a,c);q(a,l,c)},p(a,c){if(c[0]&512){t=N(a[9]);let i;for(i=0;i<t.length;i+=1){const f=Qt(a,t,i);e[i]?e[i].p(f,c):(e[i]=Wt(f),e[i].c(),e[i].m(l.parentNode,l))}for(;i<e.length;i+=1)e[i].d(1);e.length=t.length}},d(a){a&&p(l),Q(e,a)}}}function fl(o){let l,t="N/A";return{c(){l=m("li"),l.textContent=t},l(e){l=g(e,"LI",{"data-svelte-h":!0}),B(l)!=="svelte-5y1hlw"&&(l.textContent=t)},m(e,a){q(e,l,a)},p:Ve,d(e){e&&p(l)}}}function Wt(o){let l,t=o[39].from.slice(0,4)+"",e,a,c=o[39].to.slice(0,4)+"",i,f;return{c(){l=m("li"),e=k(t),a=k(" – "),i=k(c),f=w()},l(_){l=g(_,"LI",{});var v=d(l);e=E(v,t),a=E(v," – "),i=E(v,c),f=L(v),v.forEach(p)},m(_,v){q(_,l,v),r(l,e),r(l,a),r(l,i),r(l,f)},p(_,v){v[0]&512&&t!==(t=_[39].from.slice(0,4)+"")&&I(e,t),v[0]&512&&c!==(c=_[39].to.slice(0,4)+"")&&I(i,c)},d(_){_&&p(l)}}}function Xt(o){let l,t,e=o[36].place_name.text+"",a,c,i;return{c(){l=m("li"),t=m("a"),a=k(e),i=w(),this.h()},l(f){l=g(f,"LI",{});var _=d(l);t=g(_,"A",{href:!0,target:!0,rel:!0,class:!0});var v=d(t);a=E(v,e),v.forEach(p),i=L(_),_.forEach(p),this.h()},h(){u(t,"href",c=o[36].place_name.ref[0]),u(t,"target","_blank"),u(t,"rel","noreferrer"),u(t,"class","hover:underline")},m(f,_){q(f,l,_),r(l,t),r(t,a),r(l,i)},p(f,_){_[0]&4&&e!==(e=f[36].place_name.text+"")&&I(a,e),_[0]&4&&c!==(c=f[36].place_name.ref[0])&&u(t,"href",c)},d(f){f&&p(l)}}}function Yt(o){let l,t=o[31]+"",e;return{c(){l=m("li"),e=k(t)},l(a){l=g(a,"LI",{});var c=d(l);e=E(c,t),c.forEach(p)},m(a,c){q(a,l,c),r(l,e)},p(a,c){c[0]&8&&t!==(t=a[31]+"")&&I(e,t)},d(a){a&&p(l)}}}function Zt(o){let l,t=o[31]+"",e;return{c(){l=m("li"),e=k(t)},l(a){l=g(a,"LI",{});var c=d(l);e=E(c,t),c.forEach(p)},m(a,c){q(a,l,c),r(l,e)},p(a,c){c[0]&8192&&t!==(t=a[31]+"")&&I(e,t)},d(a){a&&p(l)}}}function yt(o){let l,t=o[28]+"",e;return{c(){l=m("li"),e=k(t)},l(a){l=g(a,"LI",{});var c=d(l);e=E(c,t),c.forEach(p)},m(a,c){q(a,l,c),r(l,e)},p(a,c){c[0]&32&&t!==(t=a[28]+"")&&I(e,t)},d(a){a&&p(l)}}}function xt(o){let l,t,e=o[25]+"",a,c,i;return{c(){l=m("li"),t=m("a"),a=k(e),i=w(),this.h()},l(f){l=g(f,"LI",{});var _=d(l);t=g(_,"A",{href:!0,target:!0,rel:!0,class:!0});var v=d(t);a=E(v,e),v.forEach(p),i=L(_),_.forEach(p),this.h()},h(){u(t,"href",c=o[25]),u(t,"target","_blank"),u(t,"rel","noreferrer"),u(t,"class","hover:underline")},m(f,_){q(f,l,_),r(l,t),r(t,a),r(l,i)},p(f,_){_[0]&128&&e!==(e=f[25]+"")&&I(a,e),_[0]&128&&c!==(c=f[25])&&u(t,"href",c)},d(f){f&&p(l)}}}function $t(o){let l,t,e=o[22].org_name.text+"",a,c,i,f,_=o[22].relation_type+"",v,J;return{c(){l=m("li"),t=m("a"),a=k(e),i=k(`
					(`),f=m("em"),v=k(_),J=k(`)
				`),this.h()},l(j){l=g(j,"LI",{});var C=d(l);t=g(C,"A",{href:!0,target:!0,rel:!0,class:!0});var D=d(t);a=E(D,e),D.forEach(p),i=E(C,`
					(`),f=g(C,"EM",{});var H=d(f);v=E(H,_),H.forEach(p),J=E(C,`)
				`),C.forEach(p),this.h()},h(){u(t,"href",c=o[22].websites[0]),u(t,"target","_blank"),u(t,"rel","noreferrer"),u(t,"class","hover:underline")},m(j,C){q(j,l,C),r(l,t),r(t,a),r(l,i),r(l,f),r(f,v),r(l,J)},p(j,C){C[0]&1024&&e!==(e=j[22].org_name.text+"")&&I(a,e),C[0]&1024&&c!==(c=j[22].websites[0])&&u(t,"href",c),C[0]&1024&&_!==(_=j[22].relation_type+"")&&I(v,_)},d(j){j&&p(l)}}}function _l(o){let l,t=N(o[11]),e=[];for(let a=0;a<t.length;a+=1)e[a]=el(qt(o,t,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=Fe()},l(a){for(let c=0;c<e.length;c+=1)e[c].l(a);l=Fe()},m(a,c){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(a,c);q(a,l,c)},p(a,c){if(c[0]&2048){t=N(a[11]);let i;for(i=0;i<t.length;i+=1){const f=qt(a,t,i);e[i]?e[i].p(f,c):(e[i]=el(f),e[i].c(),e[i].m(l.parentNode,l))}for(;i<e.length;i+=1)e[i].d(1);e.length=t.length}},d(a){a&&p(l),Q(e,a)}}}function ul(o){let l,t="N/A";return{c(){l=m("li"),l.textContent=t},l(e){l=g(e,"LI",{"data-svelte-h":!0}),B(l)!=="svelte-5y1hlw"&&(l.textContent=t)},m(e,a){q(e,l,a)},p:Ve,d(e){e&&p(l)}}}function el(o){let l,t,e=o[19].title+"",a,c,i,f,_=o[19].relation_type+"",v,J;return{c(){l=m("li"),t=m("a"),a=k(e),i=k(" ("),f=m("em"),v=k(_),J=k(`)
					`),this.h()},l(j){l=g(j,"LI",{});var C=d(l);t=g(C,"A",{href:!0,class:!0});var D=d(t);a=E(D,e),D.forEach(p),i=E(C," ("),f=g(C,"EM",{});var H=d(f);v=E(H,_),H.forEach(p),J=E(C,`)
					`),C.forEach(p),this.h()},h(){u(t,"href",c=`../entry/#${o[19].uuid}`),u(t,"class","hover:underline")},m(j,C){q(j,l,C),r(l,t),r(t,a),r(l,i),r(l,f),r(f,v),r(l,J)},p(j,C){C[0]&2048&&e!==(e=j[19].title+"")&&I(a,e),C[0]&2048&&c!==(c=`../entry/#${j[19].uuid}`)&&u(t,"href",c),C[0]&2048&&_!==(_=j[19].relation_type+"")&&I(v,_)},d(j){j&&p(l)}}}function tl(o){let l,t,e=o[16].pers_name.text+"",a,c,i;return{c(){l=m("li"),t=m("a"),a=k(e),i=w(),this.h()},l(f){l=g(f,"LI",{});var _=d(l);t=g(_,"A",{href:!0,target:!0,rel:!0,class:!0});var v=d(t);a=E(v,e),v.forEach(p),i=L(_),_.forEach(p),this.h()},h(){u(t,"href",c=o[16].websites[0]),u(t,"target","_blank"),u(t,"rel","noreferrer"),u(t,"class","hover:underline")},m(f,_){q(f,l,_),r(l,t),r(t,a),r(l,i)},p(f,_){_[0]&4096&&e!==(e=f[16].pers_name.text+"")&&I(a,e),_[0]&4096&&c!==(c=f[16].websites[0])&&u(t,"href",c)},d(f){f&&p(l)}}}function pl(o){let l,t,e,a,c,i,f,_,v="Abbreviated title:",J,j,C,D,H,Le="Entity type:",ge,y,je,O,W,Pe="Description:",x,X,Ie,A,Ae="Periods of funding/operation:",Ke,$,Be,ee,Ne,Qe,We,te,Xe,le,De,Ye,Ze,ne,ye,se,Se,xe,$e,ae,et,re,kt="Keywords:",tt,oe,lt,Y,ce,Et="Link to JSON record:",nt,K,Ue,st,Z,at,ze,rt,ot,ie,ct,he,Ct="Related institutions:",it,fe,ht,_e,wt="Related entities:",ft,ue,_t,pe,Re,ut,pt,me,mt,Lt;function jt(s,b){return s[9].length===0?fl:hl}let Me=jt(o),V=Me(o),de=N(o[2]),S=[];for(let s=0;s<de.length;s+=1)S[s]=Xt(Bt(o,de,s));let ve=N(o[3]),U=[];for(let s=0;s<ve.length;s+=1)U[s]=Yt(Kt(o,ve,s));let be=N(o[13]),z=[];for(let s=0;s<be.length;s+=1)z[s]=Zt(Ft(o,be,s));let ke=N(o[5]),R=[];for(let s=0;s<ke.length;s+=1)R[s]=yt(Vt(o,ke,s));let Ee=N(o[7]),M=[];for(let s=0;s<Ee.length;s+=1)M[s]=xt(Ot(o,Ee,s));let Ce=N(o[10]),T=[];for(let s=0;s<Ce.length;s+=1)T[s]=$t(Jt(o,Ce,s));function Pt(s,b){return s[11].length===0?ul:_l}let Te=Pt(o),F=Te(o),we=N(o[12]),G=[];for(let s=0;s<we.length;s+=1)G[s]=tl(Ht(o,we,s));return{c(){l=w(),t=m("div"),e=m("div"),a=m("h3"),c=k(o[1]),i=w(),f=m("p"),_=m("span"),_.textContent=v,J=w(),j=k(o[8]),C=w(),D=m("p"),H=m("span"),H.textContent=Le,ge=w(),y=k(o[0]),je=w(),O=m("p"),W=m("span"),W.textContent=Pe,x=w(),X=k(o[4]),Ie=w(),A=m("p"),A.textContent=Ae,Ke=w(),$=m("ul"),V.c(),Be=w(),ee=m("p"),Ne=k(o[14]),Qe=k(" locations:"),We=w(),te=m("ul");for(let s=0;s<S.length;s+=1)S[s].c();Xe=w(),le=m("p"),De=k(o[14]),Ye=k(" working languages:"),Ze=w(),ne=m("ul");for(let s=0;s<U.length;s+=1)U[s].c();ye=w(),se=m("p"),Se=k(o[14]),xe=k(" research languages:"),$e=w(),ae=m("ul");for(let s=0;s<z.length;s+=1)z[s].c();et=w(),re=m("p"),re.textContent=kt,tt=w(),oe=m("ul");for(let s=0;s<R.length;s+=1)R[s].c();lt=w(),Y=m("p"),ce=m("span"),ce.textContent=Et,nt=w(),K=m("a"),Ue=k(o[6]),st=w(),Z=m("p"),at=k("Links to "),ze=k(o[0]),rt=k(" websites:"),ot=w(),ie=m("ul");for(let s=0;s<M.length;s+=1)M[s].c();ct=w(),he=m("p"),he.textContent=Ct,it=w(),fe=m("ul");for(let s=0;s<T.length;s+=1)T[s].c();ht=w(),_e=m("p"),_e.textContent=wt,ft=w(),ue=m("ul"),F.c(),_t=w(),pe=m("p"),Re=k(o[14]),ut=k(" contacts:"),pt=w(),me=m("ul");for(let s=0;s<G.length;s+=1)G[s].c();this.h()},l(s){rl("svelte-ga8zzz",document.head).forEach(p),l=L(s),t=g(s,"DIV",{class:!0});var n=d(t);e=g(n,"DIV",{class:!0});var h=d(e);a=g(h,"H3",{class:!0});var It=d(a);c=E(It,o[1]),It.forEach(p),i=L(h),f=g(h,"P",{class:!0});var Ge=d(f);_=g(Ge,"SPAN",{class:!0,"data-svelte-h":!0}),B(_)!=="svelte-nfu09b"&&(_.textContent=v),J=L(Ge),j=E(Ge,o[8]),Ge.forEach(p),C=L(h),D=g(h,"P",{class:!0});var He=d(D);H=g(He,"SPAN",{class:!0,"data-svelte-h":!0}),B(H)!=="svelte-1ujvk83"&&(H.textContent=Le),ge=L(He),y=E(He,o[0]),He.forEach(p),je=L(h),O=g(h,"P",{class:!0});var qe=d(O);W=g(qe,"SPAN",{class:!0,"data-svelte-h":!0}),B(W)!=="svelte-1lmz2ny"&&(W.textContent=Pe),x=L(qe),X=E(qe,o[4]),qe.forEach(p),Ie=L(h),A=g(h,"P",{class:!0,"data-svelte-h":!0}),B(A)!=="svelte-h70wod"&&(A.textContent=Ae),Ke=L(h),$=g(h,"UL",{class:!0});var At=d($);V.l(At),At.forEach(p),Be=L(h),ee=g(h,"P",{class:!0});var gt=d(ee);Ne=E(gt,o[14]),Qe=E(gt," locations:"),gt.forEach(p),We=L(h),te=g(h,"UL",{class:!0});var Nt=d(te);for(let P=0;P<S.length;P+=1)S[P].l(Nt);Nt.forEach(p),Xe=L(h),le=g(h,"P",{class:!0});var dt=d(le);De=E(dt,o[14]),Ye=E(dt," working languages:"),dt.forEach(p),Ze=L(h),ne=g(h,"UL",{class:!0});var Dt=d(ne);for(let P=0;P<U.length;P+=1)U[P].l(Dt);Dt.forEach(p),ye=L(h),se=g(h,"P",{class:!0});var vt=d(se);Se=E(vt,o[14]),xe=E(vt," research languages:"),vt.forEach(p),$e=L(h),ae=g(h,"UL",{class:!0});var St=d(ae);for(let P=0;P<z.length;P+=1)z[P].l(St);St.forEach(p),et=L(h),re=g(h,"P",{class:!0,"data-svelte-h":!0}),B(re)!=="svelte-1q1yi4x"&&(re.textContent=kt),tt=L(h),oe=g(h,"UL",{class:!0});var Ut=d(oe);for(let P=0;P<R.length;P+=1)R[P].l(Ut);Ut.forEach(p),lt=L(h),Y=g(h,"P",{class:!0});var Je=d(Y);ce=g(Je,"SPAN",{class:!0,"data-svelte-h":!0}),B(ce)!=="svelte-2eft6u"&&(ce.textContent=Et),nt=L(Je),K=g(Je,"A",{href:!0,target:!0,rel:!0,class:!0});var zt=d(K);Ue=E(zt,o[6]),zt.forEach(p),Je.forEach(p),st=L(h),Z=g(h,"P",{class:!0});var Oe=d(Z);at=E(Oe,"Links to "),ze=E(Oe,o[0]),rt=E(Oe," websites:"),Oe.forEach(p),ot=L(h),ie=g(h,"UL",{class:!0});var Rt=d(ie);for(let P=0;P<M.length;P+=1)M[P].l(Rt);Rt.forEach(p),ct=L(h),he=g(h,"P",{class:!0,"data-svelte-h":!0}),B(he)!=="svelte-12p3mwv"&&(he.textContent=Ct),it=L(h),fe=g(h,"UL",{class:!0});var Mt=d(fe);for(let P=0;P<T.length;P+=1)T[P].l(Mt);Mt.forEach(p),ht=L(h),_e=g(h,"P",{class:!0,"data-svelte-h":!0}),B(_e)!=="svelte-1u5zjzb"&&(_e.textContent=wt),ft=L(h),ue=g(h,"UL",{class:!0});var Tt=d(ue);F.l(Tt),Tt.forEach(p),_t=L(h),pe=g(h,"P",{class:!0});var bt=d(pe);Re=E(bt,o[14]),ut=E(bt," contacts:"),bt.forEach(p),pt=L(h),me=g(h,"UL",{class:!0});var Gt=d(me);for(let P=0;P<G.length;P+=1)G[P].l(Gt);Gt.forEach(p),h.forEach(p),n.forEach(p),this.h()},h(){document.title="Closing the Gap in Non-Latin-Script Data",u(a,"class","mb-3 text-2xl font-normal"),u(_,"class","font-normal"),u(f,"class","mb-3"),u(H,"class","font-normal"),u(D,"class","mb-3"),u(W,"class","font-normal"),u(O,"class","mb-3"),u(A,"class","mb-1 font-normal"),u($,"class","mb-3 ml-4 list-disc"),u(ee,"class","mb-1 font-normal"),u(te,"class","mb-3 ml-4 list-disc"),u(le,"class","mb-1 font-normal"),u(ne,"class","mb-3 ml-4 list-disc"),u(se,"class","mb-1 font-normal"),u(ae,"class","mb-3 ml-4 list-disc"),u(re,"class","mb-1 font-normal"),u(oe,"class","mb-3 ml-4 list-disc"),u(ce,"class","font-normal"),u(K,"href",o[6]),u(K,"target","_blank"),u(K,"rel","noreferrer"),u(K,"class","hover:underline"),u(Y,"class","mb-3"),u(Z,"class","mb-1 font-normal"),u(ie,"class","mb-3 ml-4 list-disc"),u(he,"class","mb-1 font-normal"),u(fe,"class","mb-3 ml-4 list-disc"),u(_e,"class","mb-1 font-normal"),u(ue,"class","mb-3 ml-4 list-disc"),u(pe,"class","mb-1 font-normal"),u(me,"class","ml-4 list-disc"),u(e,"class","rounded-lg bg-ctgtan p-4 text-lg"),u(t,"class","mx-auto max-w-4xl px-4")},m(s,b){q(s,l,b),q(s,t,b),r(t,e),r(e,a),r(a,c),r(e,i),r(e,f),r(f,_),r(f,J),r(f,j),r(e,C),r(e,D),r(D,H),r(D,ge),r(D,y),r(e,je),r(e,O),r(O,W),r(O,x),r(O,X),r(e,Ie),r(e,A),r(e,Ke),r(e,$),V.m($,null),r(e,Be),r(e,ee),r(ee,Ne),r(ee,Qe),r(e,We),r(e,te);for(let n=0;n<S.length;n+=1)S[n]&&S[n].m(te,null);r(e,Xe),r(e,le),r(le,De),r(le,Ye),r(e,Ze),r(e,ne);for(let n=0;n<U.length;n+=1)U[n]&&U[n].m(ne,null);r(e,ye),r(e,se),r(se,Se),r(se,xe),r(e,$e),r(e,ae);for(let n=0;n<z.length;n+=1)z[n]&&z[n].m(ae,null);r(e,et),r(e,re),r(e,tt),r(e,oe);for(let n=0;n<R.length;n+=1)R[n]&&R[n].m(oe,null);r(e,lt),r(e,Y),r(Y,ce),r(Y,nt),r(Y,K),r(K,Ue),r(e,st),r(e,Z),r(Z,at),r(Z,ze),r(Z,rt),r(e,ot),r(e,ie);for(let n=0;n<M.length;n+=1)M[n]&&M[n].m(ie,null);r(e,ct),r(e,he),r(e,it),r(e,fe);for(let n=0;n<T.length;n+=1)T[n]&&T[n].m(fe,null);r(e,ht),r(e,_e),r(e,ft),r(e,ue),F.m(ue,null),r(e,_t),r(e,pe),r(pe,Re),r(pe,ut),r(e,pt),r(e,me);for(let n=0;n<G.length;n+=1)G[n]&&G[n].m(me,null);mt||(Lt=ol(il,"hashchange",o[15]),mt=!0)},p(s,b){if(b[0]&2&&I(c,s[1]),b[0]&256&&I(j,s[8]),b[0]&1&&I(y,s[0]),b[0]&16&&I(X,s[4]),Me===(Me=jt(s))&&V?V.p(s,b):(V.d(1),V=Me(s),V&&(V.c(),V.m($,null))),b[0]&16384&&I(Ne,s[14]),b[0]&4){de=N(s[2]);let n;for(n=0;n<de.length;n+=1){const h=Bt(s,de,n);S[n]?S[n].p(h,b):(S[n]=Xt(h),S[n].c(),S[n].m(te,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=de.length}if(b[0]&16384&&I(De,s[14]),b[0]&8){ve=N(s[3]);let n;for(n=0;n<ve.length;n+=1){const h=Kt(s,ve,n);U[n]?U[n].p(h,b):(U[n]=Yt(h),U[n].c(),U[n].m(ne,null))}for(;n<U.length;n+=1)U[n].d(1);U.length=ve.length}if(b[0]&16384&&I(Se,s[14]),b[0]&8192){be=N(s[13]);let n;for(n=0;n<be.length;n+=1){const h=Ft(s,be,n);z[n]?z[n].p(h,b):(z[n]=Zt(h),z[n].c(),z[n].m(ae,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=be.length}if(b[0]&32){ke=N(s[5]);let n;for(n=0;n<ke.length;n+=1){const h=Vt(s,ke,n);R[n]?R[n].p(h,b):(R[n]=yt(h),R[n].c(),R[n].m(oe,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=ke.length}if(b[0]&64&&I(Ue,s[6]),b[0]&64&&u(K,"href",s[6]),b[0]&1&&I(ze,s[0]),b[0]&128){Ee=N(s[7]);let n;for(n=0;n<Ee.length;n+=1){const h=Ot(s,Ee,n);M[n]?M[n].p(h,b):(M[n]=xt(h),M[n].c(),M[n].m(ie,null))}for(;n<M.length;n+=1)M[n].d(1);M.length=Ee.length}if(b[0]&1024){Ce=N(s[10]);let n;for(n=0;n<Ce.length;n+=1){const h=Jt(s,Ce,n);T[n]?T[n].p(h,b):(T[n]=$t(h),T[n].c(),T[n].m(fe,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=Ce.length}if(Te===(Te=Pt(s))&&F?F.p(s,b):(F.d(1),F=Te(s),F&&(F.c(),F.m(ue,null))),b[0]&16384&&I(Re,s[14]),b[0]&4096){we=N(s[12]);let n;for(n=0;n<we.length;n+=1){const h=Ht(s,we,n);G[n]?G[n].p(h,b):(G[n]=tl(h),G[n].c(),G[n].m(me,null))}for(;n<G.length;n+=1)G[n].d(1);G.length=we.length}},i:Ve,o:Ve,d(s){s&&(p(l),p(t)),V.d(),Q(S,s),Q(U,s),Q(z,s),Q(R,s),Q(M,s),Q(T,s),F.d(),Q(G,s),mt=!1,Lt()}}}function ml(o,l,t){let e,a,c=[],i=[],f="",_=[],v="",J=[],j="",C="",D=[],H=[],Le=[],ge=[],y=[];nl(async()=>{const O=window.location.hash;(!O||O.length<2)&&(window.location.href="..");const Pe=await(await fetch("https://raw.githubusercontent.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/master/PROJECTS.json")).json(),x=O.slice(1),X=Pe[x];X||(window.location.href="..");const A=await(await fetch(`https://raw.githubusercontent.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/master${X.path}${x}.json`)).json();t(6,v=`https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/tree/master${X.path}${x}.json`),t(1,a=A.project.title),t(2,c=A.project.places),t(3,i=A.project.lang),t(4,f=A.project.project_desc),t(5,_=A.project.keywords),t(7,J=A.project.websites),t(8,j=A.project.abbr||"N/A"),t(0,C=A.project.type),t(9,D=A.project.date.filter(Ae=>Ae.from)),t(10,H=A.project.related_institutions),t(11,Le=A.project.related_entities),t(12,ge=A.project.contacts),t(13,y=A.project.research_data.lang)});const je=()=>{location.reload()};return o.$$.update=()=>{o.$$.dirty[0]&1&&t(14,e=C.charAt(0).toUpperCase()+C.slice(1))},[C,a,c,i,f,_,v,J,j,D,H,Le,ge,y,e,je]}class kl extends sl{constructor(l){super(),al(this,l,ml,pl,ll,{},null,[-1,-1])}}export{kl as component};

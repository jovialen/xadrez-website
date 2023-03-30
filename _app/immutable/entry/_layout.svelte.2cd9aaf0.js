import{S as j,i as q,s as S,y as L,z as N,A as D,g as h,d as g,B as H,C as W,D as X,E as x,F as J,k as b,a as V,l as w,m as k,h as $,c as A,n as z,b as I,G as v,H as P,q as G,r as U,I as K,v as se,J as te,f as ae,K as R,L as le,M as oe,N as Y,O as ie,P as fe,Q as ue}from"../chunks/index.5750f8eb.js";import{t as ce}from"../chunks/stores.adeda193.js";import{I as ne,a as re,S as $e}from"../chunks/secondary-icon.fcdf70a7.js";function de(l){const e=l-1;return e*e*e+1}function Z(l,{delay:e=0,duration:t=400,easing:n=de,axis:s="y"}={}){const i=getComputedStyle(l),o=+i.opacity,r=s==="y"?"height":"width",a=parseFloat(i[r]),f=s==="y"?["top","bottom"]:["left","right"],c=f.map(u=>`${u[0].toUpperCase()}${u.slice(1)}`),F=parseFloat(i[`padding${c[0]}`]),O=parseFloat(i[`padding${c[1]}`]),y=parseFloat(i[`margin${c[0]}`]),p=parseFloat(i[`margin${c[1]}`]),d=parseFloat(i[`border${c[0]}Width`]),_=parseFloat(i[`border${c[1]}Width`]);return{delay:e,duration:t,easing:n,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*o};${r}: ${u*a}px;padding-${f[0]}: ${u*F}px;padding-${f[1]}: ${u*O}px;margin-${f[0]}: ${u*y}px;margin-${f[1]}: ${u*p}px;border-${f[0]}-width: ${u*d}px;border-${f[1]}-width: ${u*_}px;`}}function me(l){let e;const t=l[1].default,n=W(t,l,l[2],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&4)&&X(n,t,s,s[2],e?J(t,s[2],i,null):x(s[2]),null)},i(s){e||(h(n,s),e=!0)},o(s){g(n,s),e=!1},d(s){n&&n.d(s)}}}function _e(l){let e,t;return e=new ne({props:{href:l[0],class:"block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 transition-colors",$$slots:{default:[me]},$$scope:{ctx:l}}}),{c(){L(e.$$.fragment)},l(n){N(e.$$.fragment,n)},m(n,s){D(e,n,s),t=!0},p(n,[s]){const i={};s&1&&(i.href=n[0]),s&4&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){H(e,n)}}}function pe(l,e,t){let{$$slots:n={},$$scope:s}=e,{href:i="/"}=e;return l.$$set=o=>{"href"in o&&t(0,i=o.href),"$$scope"in o&&t(2,s=o.$$scope)},[i,n,s]}class T extends j{constructor(e){super(),q(this,e,pe,_e,S,{href:0})}}function he(l){let e;return{c(){e=G("Home")},l(t){e=U(t,"Home")},m(t,n){I(t,e,n)},d(t){t&&$(e)}}}function ge(l){let e;return{c(){e=G("Play")},l(t){e=U(t,"Play")},m(t,n){I(t,e,n)},d(t){t&&$(e)}}}function ve(l){let e;return{c(){e=G("Analyze")},l(t){e=U(t,"Analyze")},m(t,n){I(t,e,n)},d(t){t&&$(e)}}}function be(l){let e;return{c(){e=G("Notation")},l(t){e=U(t,"Notation")},m(t,n){I(t,e,n)},d(t){t&&$(e)}}}function we(l){let e,t,n,s,i,o,r,a,f,c,F,O,y,p,d,_;return s=new T({props:{href:"/",$$slots:{default:[he]},$$scope:{ctx:l}}}),r=new T({props:{href:"/play",$$slots:{default:[ge]},$$scope:{ctx:l}}}),c=new T({props:{href:"/analyze",$$slots:{default:[ve]},$$scope:{ctx:l}}}),y=new T({props:{href:"/notation",$$slots:{default:[be]},$$scope:{ctx:l}}}),{c(){e=b("nav"),t=b("ul"),n=b("li"),L(s.$$.fragment),i=V(),o=b("li"),L(r.$$.fragment),a=V(),f=b("li"),L(c.$$.fragment),F=V(),O=b("li"),L(y.$$.fragment),this.h()},l(u){e=w(u,"NAV",{class:!0});var m=k(e);t=w(m,"UL",{class:!0});var E=k(t);n=w(E,"LI",{});var C=k(n);N(s.$$.fragment,C),C.forEach($),i=A(E),o=w(E,"LI",{});var B=k(o);N(r.$$.fragment,B),B.forEach($),a=A(E),f=w(E,"LI",{});var M=k(f);N(c.$$.fragment,M),M.forEach($),F=A(E),O=w(E,"LI",{});var Q=k(O);N(y.$$.fragment,Q),Q.forEach($),E.forEach($),m.forEach($),this.h()},h(){z(t,"class","flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"),z(e,"class","items-center justify-between md:flex")},m(u,m){I(u,e,m),v(e,t),v(t,n),D(s,n,null),v(t,i),v(t,o),D(r,o,null),v(t,a),v(t,f),D(c,f,null),v(t,F),v(t,O),D(y,O,null),p=!0,d||(_=P(e,"click",l[0]),d=!0)},p(u,[m]){const E={};m&2&&(E.$$scope={dirty:m,ctx:u}),s.$set(E);const C={};m&2&&(C.$$scope={dirty:m,ctx:u}),r.$set(C);const B={};m&2&&(B.$$scope={dirty:m,ctx:u}),c.$set(B);const M={};m&2&&(M.$$scope={dirty:m,ctx:u}),y.$set(M)},i(u){p||(h(s.$$.fragment,u),h(r.$$.fragment,u),h(c.$$.fragment,u),h(y.$$.fragment,u),p=!0)},o(u){g(s.$$.fragment,u),g(r.$$.fragment,u),g(c.$$.fragment,u),g(y.$$.fragment,u),p=!1},d(u){u&&$(e),H(s),H(r),H(c),H(y),d=!1,_()}}}function ke(l){function e(t){K.call(this,l,t)}return[e]}class ye extends j{constructor(e){super(),q(this,e,ke,we,S,{})}}function Ee(l){let e,t,n,s;const i=l[1].default,o=W(i,l,l[0],null);return{c(){e=b("button"),o&&o.c(),this.h()},l(r){e=w(r,"BUTTON",{class:!0});var a=k(e);o&&o.l(a),a.forEach($),this.h()},h(){z(e,"class","flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors")},m(r,a){I(r,e,a),o&&o.m(e,null),t=!0,n||(s=P(e,"click",l[2]),n=!0)},p(r,[a]){o&&o.p&&(!t||a&1)&&X(o,i,r,r[0],t?J(i,r[0],a,null):x(r[0]),null)},i(r){t||(h(o,r),t=!0)},o(r){g(o,r),t=!1},d(r){r&&$(e),o&&o.d(r),n=!1,s()}}}function Ie(l,e,t){let{$$slots:n={},$$scope:s}=e;function i(o){K.call(this,l,o)}return l.$$set=o=>{"$$scope"in o&&t(0,s=o.$$scope)},[s,n,i]}class ze extends j{constructor(e){super(),q(this,e,Ie,Ee,S,{})}}function Le(l){let e,t,n,s,i;n=new re({props:{origin:l[1],icon:l[0],color:"text-white",size:"text-base"}});const o=l[2].default,r=W(o,l,l[4],null);return{c(){e=b("div"),t=b("div"),L(n.$$.fragment),s=V(),r&&r.c(),this.h()},l(a){e=w(a,"DIV",{class:!0});var f=k(e);t=w(f,"DIV",{class:!0});var c=k(t);N(n.$$.fragment,c),c.forEach($),s=A(f),r&&r.l(f),f.forEach($),this.h()},h(){z(t,"class","place-self-center"),z(e,"class","flex gap-2")},m(a,f){I(a,e,f),v(e,t),D(n,t,null),v(e,s),r&&r.m(e,null),i=!0},p(a,f){const c={};f&2&&(c.origin=a[1]),f&1&&(c.icon=a[0]),n.$set(c),r&&r.p&&(!i||f&16)&&X(r,o,a,a[4],i?J(o,a[4],f,null):x(a[4]),null)},i(a){i||(h(n.$$.fragment,a),h(r,a),i=!0)},o(a){g(n.$$.fragment,a),g(r,a),i=!1},d(a){a&&$(e),H(n),r&&r.d(a)}}}function Ne(l){let e,t;return e=new ze({props:{$$slots:{default:[Le]},$$scope:{ctx:l}}}),e.$on("click",l[3]),{c(){L(e.$$.fragment)},l(n){N(e.$$.fragment,n)},m(n,s){D(e,n,s),t=!0},p(n,[s]){const i={};s&19&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){H(e,n)}}}function De(l,e,t){let{$$slots:n={},$$scope:s}=e,{icon:i=""}=e,{origin:o="fa-solid"}=e;function r(a){K.call(this,l,a)}return l.$$set=a=>{"icon"in a&&t(0,i=a.icon),"origin"in a&&t(1,o=a.origin),"$$scope"in a&&t(4,s=a.$$scope)},[i,o,n,r,s]}class He extends j{constructor(e){super(),q(this,e,De,Ne,S,{icon:0,origin:1})}}function Fe(l,e){function t(n){l.contains(n.target)||e()}return document.body.addEventListener("click",t,!0),{update(n){e=n},destroy(){document.body.removeEventListener("click",t,!0)}}}function Oe(l){let e,t,n,s,i;return e=new re({props:{icon:"fa-chess-knight",size:"text-3xl sm:text-4xl",color:"text-blue-700"}}),{c(){L(e.$$.fragment),t=V(),n=b("h1"),s=G("Xadrez"),this.h()},l(o){N(e.$$.fragment,o),t=A(o),n=w(o,"H1",{class:!0});var r=k(n);s=U(r,"Xadrez"),r.forEach($),this.h()},h(){z(n,"class","ml-2 text-xl font-semibold")},m(o,r){D(e,o,r),I(o,t,r),I(o,n,r),v(n,s),i=!0},p:te,i(o){i||(h(e.$$.fragment,o),i=!0)},o(o){g(e.$$.fragment,o),i=!1},d(o){H(e,o),o&&$(t),o&&$(n)}}}function Ve(l){let e;return{c(){e=G("On GitHub")},l(t){e=U(t,"On GitHub")},m(t,n){I(t,e,n)},d(t){t&&$(e)}}}function ee(l){let e,t,n,s,i,o;return t=new ye({}),{c(){e=b("div"),L(t.$$.fragment),this.h()},l(r){e=w(r,"DIV",{class:!0});var a=k(e);N(t.$$.fragment,a),a.forEach($),this.h()},h(){z(e,"class","place-self-center w-full md:w-auto md:order-1 md:block"),R(e,"hidden",!l[0])},m(r,a){I(r,e,a),D(t,e,null),s=!0,i||(o=[P(e,"introstart",l[5]),P(e,"outrostart",l[6]),P(e,"introend",l[7]),P(e,"outroend",l[8]),P(e,"click",l[3]),le(Fe.call(null,e,l[4]))],i=!0)},p(r,a){(!s||a&1)&&R(e,"hidden",!r[0])},i(r){s||(h(t.$$.fragment,r),oe(()=>{s&&(n||(n=Y(e,Z,{},!0)),n.run(1))}),s=!0)},o(r){g(t.$$.fragment,r),n||(n=Y(e,Z,{},!1)),n.run(0),s=!1},d(r){r&&$(e),H(t),r&&n&&n.end(),i=!1,ie(o)}}}function Ae(l){let e,t,n,s,i,o,r,a,f,c,F,O=l[0],y;n=new ne({props:{href:"/",class:"flex",$$slots:{default:[Oe]},$$scope:{ctx:l}}}),r=new He({props:{origin:"fa-brands",icon:"fa-github-alt",$$slots:{default:[Ve]},$$scope:{ctx:l}}}),c=new $e({props:{icon:"fa-bars-staggered"}}),c.$on("click",l[2]);let p=ee(l);return{c(){e=b("header"),t=b("div"),L(n.$$.fragment),s=V(),i=b("div"),o=b("a"),L(r.$$.fragment),a=V(),f=b("div"),L(c.$$.fragment),F=V(),p.c(),this.h()},l(d){e=w(d,"HEADER",{class:!0});var _=k(e);t=w(_,"DIV",{class:!0});var u=k(t);N(n.$$.fragment,u),u.forEach($),s=A(_),i=w(_,"DIV",{class:!0});var m=k(i);o=w(m,"A",{href:!0,target:!0});var E=k(o);N(r.$$.fragment,E),E.forEach($),a=A(m),f=w(m,"DIV",{class:!0});var C=k(f);N(c.$$.fragment,C),C.forEach($),m.forEach($),F=A(_),p.l(_),_.forEach($),this.h()},h(){z(t,"class","place-self-center"),z(o,"href","https://github.com/jovialen/xadrez"),z(o,"target","_blank"),z(f,"class","md:hidden ml-2"),z(i,"class","place-self-center flex md:order-2"),z(e,"class","container mx-auto bg-white flex flex-wrap justify-between px-2 sm:px-4 py-2.5 relative")},m(d,_){I(d,e,_),v(e,t),D(n,t,null),v(e,s),v(e,i),v(i,o),D(r,o,null),v(i,a),v(i,f),D(c,f,null),v(e,F),p.m(e,null),y=!0},p(d,[_]){const u={};_&512&&(u.$$scope={dirty:_,ctx:d}),n.$set(u);const m={};_&512&&(m.$$scope={dirty:_,ctx:d}),r.$set(m),_&1&&S(O,O=d[0])?(se(),g(p,1,1,te),ae(),p=ee(d),p.c(),h(p,1),p.m(e,null)):p.p(d,_)},i(d){y||(h(n.$$.fragment,d),h(r.$$.fragment,d),h(c.$$.fragment,d),h(p),y=!0)},o(d){g(n.$$.fragment,d),g(r.$$.fragment,d),g(c.$$.fragment,d),g(p),y=!1},d(d){d&&$(e),H(n),H(r),H(c),p.d(d)}}}function Ce(l,e,t){let n=!1,s=!1;function i(){s||t(0,n=!n)}function o(){t(0,n=!1)}function r(){s||o()}return[n,s,i,o,r,()=>t(1,s=!0),()=>t(1,s=!0),()=>t(1,s=!1),()=>t(1,s=!1)]}class Pe extends j{constructor(e){super(),q(this,e,Ce,Ae,S,{})}}function Se(l){let e,t,n,s,i;document.title=e=l[0],n=new Pe({});const o=l[2].default,r=W(o,l,l[1],null);return{c(){t=V(),L(n.$$.fragment),s=V(),r&&r.c()},l(a){fe("svelte-1igowiq",document.head).forEach($),t=A(a),N(n.$$.fragment,a),s=A(a),r&&r.l(a)},m(a,f){I(a,t,f),D(n,a,f),I(a,s,f),r&&r.m(a,f),i=!0},p(a,[f]){(!i||f&1)&&e!==(e=a[0])&&(document.title=e),r&&r.p&&(!i||f&2)&&X(r,o,a,a[1],i?J(o,a[1],f,null):x(a[1]),null)},i(a){i||(h(n.$$.fragment,a),h(r,a),i=!0)},o(a){g(n.$$.fragment,a),g(r,a),i=!1},d(a){a&&$(t),H(n,a),a&&$(s),r&&r.d(a)}}}function je(l,e,t){let n;ue(l,ce,o=>t(0,n=o));let{$$slots:s={},$$scope:i}=e;return l.$$set=o=>{"$$scope"in o&&t(1,i=o.$$scope)},[n,i,s]}class Be extends j{constructor(e){super(),q(this,e,je,Se,S,{})}}export{Be as default};

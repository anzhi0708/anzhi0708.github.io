import{q as P,v as S,w as O,x as V,y as k,z as I,A as E,B as C,H as Y,C as q,D as b,E as g,F as A,G as B,I as v,J as $,K as j,L as z,M as F,N as G,O as J,P as K,Q,p as W,c as U,R as T,b as X}from"./CwJuRQzD.js";import{b as Z}from"./BUxDpllJ.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,D=new Set;function m(r){var R;var e=this,s=e.ownerDocument,c=r.type,o=((R=r.composedPath)==null?void 0:R.call(r))||[],t=o[0]||r.target,u=0,_=r.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var h=o.indexOf(e);if(h===-1)return;d<=h&&(u=d)}if(t=o[u]||r.target,t!==e){P(r,"currentTarget",{configurable:!0,get(){return t||s}});var w=k,i=I;S(null),O(null);try{for(var a,n=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!=null&&(!t.disabled||r.target===t))if(V(l)){var[H,...M]=l;H.apply(t,[r,...M])}else l.call(t,r)}catch(y){a?n.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of n)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,S(w),O(i)}}}function nr(r,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s+"")}function tr(r,e){return L(r,e)}function ir(r,e){E(),e.intro=e.intro??!1;const s=e.target,c=T,o=v;try{for(var t=C(s);t&&(t.nodeType!==8||t.data!==Y);)t=q(t);if(!t)throw b;g(!0),A(t),B();const u=L(r,{...e,anchor:t});if(v===null||v.nodeType!==8||v.data!==$)throw j(),b;return g(!1),u}catch(u){if(u===b)return e.recover===!1&&z(),E(),F(s),g(!1),tr(r,e);throw u}finally{g(c),A(o)}}const p=new Map;function L(r,{target:e,anchor:s,props:c={},events:o,context:t,intro:u=!0}){E();var _=new Set,d=i=>{for(var a=0;a<i.length;a++){var n=i[a];if(!_.has(n)){_.add(n);var f=rr(n);e.addEventListener(n,m,{passive:f});var l=p.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,l+1)}}};d(G(er)),D.add(d);var h=void 0,w=J(()=>{var i=s??e.appendChild(K());return Q(()=>{if(t){W({});var a=U;a.c=t}o&&(c.$$events=o),T&&Z(i,null),h=r(i,c)||{},T&&(I.nodes_end=v),t&&X()}),()=>{var f;for(var a of _){e.removeEventListener(a,m);var n=p.get(a);--n===0?(document.removeEventListener(a,m),p.delete(a)):p.set(a,n)}D.delete(d),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return N.set(h,w),h}let N=new WeakMap;function or(r,e){const s=N.get(r);return s?(N.delete(r),s(e)):Promise.resolve()}export{ir as h,tr as m,nr as s,or as u};

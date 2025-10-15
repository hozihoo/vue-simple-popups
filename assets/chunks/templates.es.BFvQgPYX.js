import{d as L,c as $,o as h,j as r,t as C,G as x,k as u,a7 as w,p as k,n as _,N as g,b as z}from"./framework.CUYNqCBt.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,a)=>a?a.toUpperCase():o.toLowerCase()),E=e=>{const t=B(e);return t.charAt(0).toUpperCase()+t.slice(1)},W=(...e)=>e.filter((t,o,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===o).join(" ").trim(),j=e=>e==="";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=({name:e,iconNode:t,absoluteStrokeWidth:o,"absolute-stroke-width":a,strokeWidth:i,"stroke-width":n,size:l=p.width,color:f=p.stroke,...m},{slots:d})=>w("svg",{...p,...m,width:l,height:l,stroke:f,"stroke-width":j(o)||j(a)||o===!0||a===!0?Number(i||n||p["stroke-width"])*24/Number(l):i||n||p["stroke-width"],class:W("lucide",m.class,...e?[`lucide-${M(E(e))}-icon`,`lucide-${M(e)}`]:["lucide-icon"])},[...t.map(y=>w(...y)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(e,t)=>(o,{slots:a,attrs:i})=>w(D,{...i,...o,iconNode:t,name:e},a);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=v("arrow-big-right-dash",[["path",{d:"M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",key:"67vhrh"}],["path",{d:"M4 9v6",key:"bns7oa"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=v("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=v("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=v("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=v("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),I={class:"relative bg-white rounded-lg min-w-[320px] shadow-2xl overflow-hidden"},O={class:"px-6 py-4 border-b border-gray-200 flex justify-between items-center"},P={class:"text-lg font-semibold text-gray-800"},U={class:"text-gray-400 hover:text-gray-600 transition-colors"},X={class:"px-6 py-5 text-gray-900"},Z={class:"px-6 py-4 bg-gray-50 flex justify-end space-x-3"},oe=L({__name:"vsp-dialog",props:{title:{},content:{}},emits:["close","cancel","confirm"],setup(e){return(t,o)=>(h(),$("div",I,[r("div",O,[r("h3",P,C(t.$props.title),1),r("button",U,[x(u(H),{onClick:o[0]||(o[0]=a=>t.$emit("close"))})])]),r("div",X,C(t.$props.content),1),r("div",Z,[r("button",{class:"px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",onClick:o[1]||(o[1]=a=>t.$emit("cancel"))}," 取消 "),r("button",{class:"px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors",onClick:o[2]||(o[2]=a=>t.$emit("confirm",!0))}," 确认 ")])]))}}),N=(e,t)=>{const o=e.__vccOpts||e;for(const[a,i]of t)o[a]=i;return o},G={},J={class:"loader"};function K(e,t){return h(),$("span",J)}const se=N(G,[["render",K],["__scopeId","data-v-a6e85508"]]),Q={class:"bg-white rounded-lg shadow-2xl overflow-hidden select-none px-2"},R={class:"relative overflow-hidden"},Y=["src"],F=["src"],T={class:"relative w-full h-[38px] mt-1 mb-2"},ee=L({__name:"vsp-slide-captcha",props:{width:{default:360},height:{default:220},tailWidth:{default:60},picture:{},tile:{},y:{default:0},blockColor:{default:"#42b883"},barColor:{default:"#a4c9b9"}},emits:["cancel","refresh","finished"],setup(e,{emit:t}){const o=e,a=t,i=k(!1),n=k(!1),l=k(0);let f=0;function m(s){s.stopPropagation(),s.preventDefault(),!i.value&&(f=s.screenX,document.body.addEventListener("mousemove",d,!1),document.body.addEventListener("mouseup",y,!1))}function d(s){s.stopPropagation(),s.preventDefault();const{screenX:c}=s,b=c-f;if(b<0){l.value=0;return}b>o.width-o.tailWidth||(l.value=b)}function y(s){s.stopPropagation(),s.preventDefault(),document.body.removeEventListener("mousemove",d,!1),document.body.removeEventListener("mouseup",y,!1),i.value=!0,n.value=!0,a("finished",l.value)}return(s,c)=>(h(),$("div",Q,[r("div",{class:_(["flex items-center justify-end gap-2 px-2 py-2",n.value?"text-gray-300":"text-gray-400"])},[x(u(q),{class:"cursor-pointer",onClick:c[0]||(c[0]=()=>{n.value||s.$emit("refresh")})}),x(u(A),{class:"cursor-pointer",onClick:c[1]||(c[1]=()=>{n.value||s.$emit("cancel")})})],2),r("div",R,[r("img",{style:g({width:`${s.$props.width}px`,height:`${s.$props.height}px`}),src:s.$props.picture},null,12,Y),r("img",{class:"absolute left-0",style:g({top:`${s.$props.y}px`,left:`${l.value}px`}),src:s.$props.tile},null,12,F)]),r("div",T,[r("div",{class:"h-full absolute top-0 left-0 rounded",style:g({backgroundColor:s.$props.barColor,width:`${l.value+10}px`})},null,4),r("div",{class:_(["flex items-center justify-center h-full absolute top-0 rounded",n.value?"cursor-wait":"cursor-pointer"]),style:g({backgroundColor:s.$props.blockColor,left:`${l.value}px`,width:`${s.$props.tailWidth}px`}),onMousedown:m},[n.value?(h(),z(u(S),{key:1,class:"loader"})):(h(),z(u(V),{key:0}))],38)])]))}}),ae=N(ee,[["__scopeId","data-v-e14c0f3a"]]);export{ae as i,se as n,oe as s};

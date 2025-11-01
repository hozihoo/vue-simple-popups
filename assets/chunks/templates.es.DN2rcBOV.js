import{d as j,c as C,o as h,j as r,t as b,G as w,k as u,a7 as $,p as k,n as _,N as g,b as z}from"./framework.CUYNqCBt.js";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,a)=>a?a.toUpperCase():o.toLowerCase()),E=t=>{const e=N(t);return e.charAt(0).toUpperCase()+e.slice(1)},W=(...t)=>t.filter((e,o,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===o).join(" ").trim(),M=t=>t==="";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=({name:t,iconNode:e,absoluteStrokeWidth:o,"absolute-stroke-width":a,strokeWidth:n,"stroke-width":i,size:l=p.width,color:v=p.stroke,...m},{slots:d})=>$("svg",{...p,...m,width:l,height:l,stroke:v,"stroke-width":M(o)||M(a)||o===!0||a===!0?Number(n||i||p["stroke-width"])*24/Number(l):n||i||p["stroke-width"],class:W("lucide",m.class,...t?[`lucide-${B(E(t))}-icon`,`lucide-${B(t)}`]:["lucide-icon"])},[...e.map(y=>$(...y)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(t,e)=>(o,{slots:a,attrs:n})=>$(D,{...n,...o,iconNode:e,name:t},a);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=f("arrow-big-right-dash",[["path",{d:"M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",key:"67vhrh"}],["path",{d:"M4 9v6",key:"bns7oa"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=f("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=f("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=f("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=f("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),q={class:"relative bg-white rounded-lg min-w-[320px] shadow-2xl overflow-hidden"},H={class:"px-6 py-4 border-b border-gray-200 flex justify-between items-center"},I={class:"text-lg font-semibold text-gray-800"},O={class:"text-gray-400 hover:text-gray-600 transition-colors"},U={class:"px-6 py-5 text-gray-900"},X={class:"px-6 py-4 bg-gray-50 flex justify-end space-x-3"},oe=j({__name:"vsp-dialog",props:{title:{},content:{},confirmButtonText:{},cancelButtonText:{}},emits:["close","cancel","confirm"],setup(t){return(e,o)=>(h(),C("div",q,[r("div",H,[r("h3",I,b(e.$props.title),1),r("button",O,[w(u(S),{onClick:o[0]||(o[0]=a=>e.$emit("close"))})])]),r("div",U,b(e.$props.content),1),r("div",X,[r("button",{class:"px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",onClick:o[1]||(o[1]=a=>e.$emit("cancel"))},b(e.$props.cancelButtonText||"取消"),1),r("button",{class:"px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors",onClick:o[2]||(o[2]=a=>e.$emit("confirm",!0))},b(e.$props.confirmButtonText||"确定"),1)])]))}}),L=(t,e)=>{const o=t.__vccOpts||t;for(const[a,n]of e)o[a]=n;return o},G={},Z={class:"loader"};function J(t,e){return h(),C("span",Z)}const se=L(G,[["render",J],["__scopeId","data-v-a6e85508"]]),K={class:"bg-white rounded-lg shadow-2xl overflow-hidden select-none px-2"},Q={class:"relative overflow-hidden"},R=["src"],Y=["src"],F={class:"relative w-full h-[38px] mt-1 mb-2"},ee=j({__name:"vsp-slide-captcha",props:{width:{default:360},height:{default:220},tailWidth:{default:60},picture:{},tile:{},y:{default:0},blockColor:{default:"#42b883"},barColor:{default:"#a4c9b9"}},emits:["cancel","refresh","finished"],setup(t,{emit:e}){const o=t,a=e,n=k(!1),i=k(!1),l=k(0);let v=0;function m(s){s.stopPropagation(),s.preventDefault(),!n.value&&(v=s.screenX,document.body.addEventListener("mousemove",d,!1),document.body.addEventListener("mouseup",y,!1))}function d(s){s.stopPropagation(),s.preventDefault();const{screenX:c}=s,x=c-v;if(x<0){l.value=0;return}x>o.width-o.tailWidth||(l.value=x)}function y(s){s.stopPropagation(),s.preventDefault(),document.body.removeEventListener("mousemove",d,!1),document.body.removeEventListener("mouseup",y,!1),n.value=!0,i.value=!0,a("finished",l.value)}return(s,c)=>(h(),C("div",K,[r("div",{class:_(["flex items-center justify-end gap-2 px-2 py-2",i.value?"text-gray-300":"text-gray-400"])},[w(u(P),{class:"cursor-pointer",onClick:c[0]||(c[0]=()=>{i.value||s.$emit("refresh")})}),w(u(V),{class:"cursor-pointer",onClick:c[1]||(c[1]=()=>{i.value||s.$emit("cancel")})})],2),r("div",Q,[r("img",{style:g({width:`${s.$props.width}px`,height:`${s.$props.height}px`}),src:s.$props.picture},null,12,R),r("img",{class:"absolute left-0",style:g({top:`${s.$props.y}px`,left:`${l.value}px`}),src:s.$props.tile},null,12,Y)]),r("div",F,[r("div",{class:"h-full absolute top-0 left-0 rounded",style:g({backgroundColor:s.$props.barColor,width:`${l.value+10}px`})},null,4),r("div",{class:_(["flex items-center justify-center h-full absolute top-0 rounded",i.value?"cursor-wait":"cursor-pointer"]),style:g({backgroundColor:s.$props.blockColor,left:`${l.value}px`,width:`${s.$props.tailWidth}px`}),onMousedown:m},[i.value?(h(),z(u(A),{key:1,class:"loader"})):(h(),z(u(T),{key:0}))],38)])]))}}),ae=L(ee,[["__scopeId","data-v-e14c0f3a"]]);export{ae as i,se as n,oe as s};

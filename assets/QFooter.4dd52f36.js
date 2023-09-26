import{Q as O}from"./QScrollObserver.ac6fd869.js";import{H as _,i as $,O as y,P as C,r as q,c as o,w as c,S as L,ah as P,h as b,g as R,ai as I,aj as N}from"./index.ef28cfcc.js";var K=_({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:Q,emit:V}){const{proxy:{$q:f}}=R(),e=$(C,y);if(e===y)return console.error("QHeader needs to be child of QLayout"),y;const n=q(parseInt(a.heightHint,10)),l=q(!0),g=o(()=>a.reveal===!0||e.view.value.indexOf("H")>-1||f.platform.is.ios&&e.isContainer.value===!0),h=o(()=>{if(a.modelValue!==!0)return 0;if(g.value===!0)return l.value===!0?n.value:0;const t=n.value-e.scroll.value.position;return t>0?t:0}),w=o(()=>a.modelValue!==!0||g.value===!0&&l.value!==!0),z=o(()=>a.modelValue===!0&&w.value===!0&&a.reveal===!0),H=o(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(a.bordered===!0?" q-header--bordered":"")+(w.value===!0?" q-header--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus":"")),B=o(()=>{const t=e.rows.value.top,d={};return t[0]==="l"&&e.left.space===!0&&(d[f.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),t[2]==="r"&&e.right.space===!0&&(d[f.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),d});function r(t,d){e.update("header",t,d)}function m(t,d){t.value!==d&&(t.value=d)}function i({height:t}){m(n,t),r("size",t)}function v(t){z.value===!0&&m(l,!0),V("focusin",t)}c(()=>a.modelValue,t=>{r("space",t),m(l,!0),e.animate()}),c(h,t=>{r("offset",t)}),c(()=>a.reveal,t=>{t===!1&&m(l,a.modelValue)}),c(l,t=>{e.animate(),V("reveal",t)}),c(e.scroll,t=>{a.reveal===!0&&m(l,t.direction==="up"||t.position<=a.revealOffset||t.position-t.inflectionPoint<100)});const x={};return e.instances.header=x,a.modelValue===!0&&r("size",n.value),r("space",a.modelValue),r("offset",h.value),L(()=>{e.instances.header===x&&(e.instances.header=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const t=P(Q.default,[]);return a.elevated===!0&&t.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(b(O,{debounce:0,onResize:i})),b("header",{class:H.value,style:B.value,onFocusin:v},t)}}}),M=_({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:Q,emit:V}){const{proxy:{$q:f}}=R(),e=$(C,y);if(e===y)return console.error("QFooter needs to be child of QLayout"),y;const n=q(parseInt(a.heightHint,10)),l=q(!0),g=q(I.value===!0||e.isContainer.value===!0?0:window.innerHeight),h=o(()=>a.reveal===!0||e.view.value.indexOf("F")>-1||f.platform.is.ios&&e.isContainer.value===!0),w=o(()=>e.isContainer.value===!0?e.containerHeight.value:g.value),z=o(()=>{if(a.modelValue!==!0)return 0;if(h.value===!0)return l.value===!0?n.value:0;const u=e.scroll.value.position+w.value+n.value-e.height.value;return u>0?u:0}),H=o(()=>a.modelValue!==!0||h.value===!0&&l.value!==!0),B=o(()=>a.modelValue===!0&&H.value===!0&&a.reveal===!0),r=o(()=>"q-footer q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-bottom"+(a.bordered===!0?" q-footer--bordered":"")+(H.value===!0?" q-footer--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus"+(h.value!==!0?" hidden":""):"")),m=o(()=>{const u=e.rows.value.bottom,s={};return u[0]==="l"&&e.left.space===!0&&(s[f.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),u[2]==="r"&&e.right.space===!0&&(s[f.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),s});function i(u,s){e.update("footer",u,s)}function v(u,s){u.value!==s&&(u.value=s)}function x({height:u}){v(n,u),i("size",u)}function t(){if(a.reveal!==!0)return;const{direction:u,position:s,inflectionPoint:S}=e.scroll.value;v(l,u==="up"||s-S<100||e.height.value-w.value-s-n.value<300)}function d(u){B.value===!0&&v(l,!0),V("focusin",u)}c(()=>a.modelValue,u=>{i("space",u),v(l,!0),e.animate()}),c(z,u=>{i("offset",u)}),c(()=>a.reveal,u=>{u===!1&&v(l,a.modelValue)}),c(l,u=>{e.animate(),V("reveal",u)}),c([n,e.scroll,e.height],t),c(()=>f.screen.height,u=>{e.isContainer.value!==!0&&v(g,u)});const F={};return e.instances.footer=F,a.modelValue===!0&&i("size",n.value),i("space",a.modelValue),i("offset",z.value),L(()=>{e.instances.footer===F&&(e.instances.footer=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const u=N(Q.default,[b(O,{debounce:0,onResize:x})]);return a.elevated===!0&&u.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),b("footer",{class:r.value,style:m.value,onFocusin:d},u)}}});export{K as Q,M as a};

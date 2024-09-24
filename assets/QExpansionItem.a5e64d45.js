import{I as H,S as j,h as a,av as J,a$ as W,aY as $,K as X,L as Z,M as p,N as ee,r as E,b0 as te,Q as ne,c as h,w as k,g as ae,b1 as ie,b2 as O,U as oe,ad as le,J as ue,a4 as A,ac as se}from"./index.312bfc2c.js";import{b as re,a as B,Q as q}from"./position-engine.7a2cb73f.js";var de=H({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:I,emit:T}){let r=!1,m,i,o=null,l=null,d,S;function b(){m&&m(),m=null,r=!1,o!==null&&(clearTimeout(o),o=null),l!==null&&(clearTimeout(l),l=null),i!==void 0&&i.removeEventListener("transitionend",d),d=null}function u(n,s,g){s!==void 0&&(n.style.height=`${s}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,r=!0,m=g}function c(n,s){n.style.overflowY=null,n.style.height=null,n.style.transition=null,b(),s!==S&&T(s)}function L(n,s){let g=0;i=n,r===!0?(b(),g=n.offsetHeight===n.scrollHeight?0:void 0):(S="hide",n.style.overflowY="hidden"),u(n,g,s),o=setTimeout(()=>{o=null,n.style.height=`${n.scrollHeight}px`,d=v=>{l=null,(Object(v)!==v||v.target===n)&&c(n,"show")},n.addEventListener("transitionend",d),l=setTimeout(d,e.duration*1.1)},100)}function y(n,s){let g;i=n,r===!0?b():(S="show",n.style.overflowY="hidden",g=n.scrollHeight),u(n,g,s),o=setTimeout(()=>{o=null,n.style.height=0,d=v=>{l=null,(Object(v)!==v||v.target===n)&&c(n,"hide")},n.addEventListener("transitionend",d),l=setTimeout(d,e.duration*1.1)},100)}return j(()=>{r===!0&&b()}),()=>a(J,{css:!1,appear:e.appear,onEnter:L,onLeave:y},I.default)}});const x=W({}),ce=Object.keys($);var fe=H({name:"QExpansionItem",props:{...$,...X,...Z,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...p,"click","afterShow","afterHide"],setup(e,{slots:I,emit:T}){const{proxy:{$q:r}}=ae(),m=ee(e,r),i=E(e.modelValue!==null?e.modelValue:e.defaultOpened),o=E(null),l=te(),{show:d,hide:S,toggle:b}=ne({showing:i});let u,c;const L=h(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),y=h(()=>{if(e.contentInsetLevel===void 0)return null;const t=r.lang.rtl===!0?"Right":"Left";return{["padding"+t]:e.contentInsetLevel*56+"px"}}),n=h(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),s=h(()=>{const t={};return ce.forEach(f=>{t[f]=e[f]}),t}),g=h(()=>n.value===!0||e.expandIconToggle!==!0),v=h(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||r.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),N=h(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),P=h(()=>({expanded:i.value===!0,detailsId:l.value,toggle:b,show:d,hide:S})),_=h(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:r.lang.label[i.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":i.value===!0?"true":"false","aria-controls":l.value,"aria-label":t}});k(()=>e.group,t=>{c!==void 0&&c(),t!==void 0&&Q()});function R(t){n.value!==!0&&b(t),T("click",t)}function D(t){t.keyCode===13&&C(t,!0)}function C(t,f){f!==!0&&o.value!==null&&o.value.focus(),b(t),se(t)}function K(){T("afterShow")}function M(){T("afterHide")}function Q(){u===void 0&&(u=ie()),i.value===!0&&(x[e.group]=u);const t=k(i,w=>{w===!0?x[e.group]=u:x[e.group]===u&&delete x[e.group]}),f=k(()=>x[e.group],(w,z)=>{z===u&&w!==void 0&&w!==u&&S()});c=()=>{t(),f(),x[e.group]===u&&delete x[e.group],c=void 0}}function Y(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},f=[a(A,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:v.value})];return N.value===!0&&(Object.assign(t,{tabindex:0,..._.value,onClick:C,onKeyup:D}),f.unshift(a("div",{ref:o,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),a(q,t,()=>f)}function G(){let t;return I.header!==void 0?t=[].concat(I.header(P.value)):(t=[a(q,()=>[a(B,{lines:e.labelLines},()=>e.label||""),e.caption?a(B,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](a(q,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>a(A,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](Y()),t}function U(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:m.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return g.value===!0&&(t.clickable=!0,t.onClick=R,Object.assign(t,n.value===!0?s.value:_.value)),a(re,t,G)}function F(){return oe(a("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:y.value,id:l.value},ue(I.default)),[[le,i.value]])}function V(){const t=[U(),a(de,{duration:e.duration,onShow:K,onHide:M},F)];return e.expandSeparator===!0&&t.push(a(O,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:m.value}),a(O,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:m.value})),t}return e.group!==void 0&&Q(),j(()=>{c!==void 0&&c()}),()=>a("div",{class:L.value},[a("div",{class:"q-expansion-item__container relative-position"},V())])}});export{de as Q,fe as a};

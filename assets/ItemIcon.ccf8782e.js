import{S as ne,a5 as ie,aL as b,aM as se,a6 as le,r as i,c as h,aN as re,a7 as ce,aO as ue,a9 as de,aP as fe,w as O,ab as C,ar as E,aq as H,aQ as me,h as M,aR as ge,g as ve,a4 as he,$ as pe,n as q,q as ye,t as Te,G as be,l as Se,P as S,I as Pe,aS as A}from"./index.cf591b40.js";import{u as _e,v as L,c as we,p as B,d as Ie,e as xe,r as D,s as ke,f as Oe}from"./position-engine.fcb91d72.js";import{c as z}from"./selection.cc14137b.js";import{_ as Ce}from"./plugin-vue_export-helper.21dcd24c.js";var Ee=ne({name:"QTooltip",inheritAttrs:!1,props:{..._e,...ie,...b,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...b.transitionShow,default:"jump-down"},transitionHide:{...b.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:L},self:{type:String,default:"top middle",validator:L},offset:{type:Array,default:()=>[14,14],validator:we},scrollTarget:se,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...le],setup(e,{slots:p,emit:a,attrs:c}){let s,l;const m=ve(),{proxy:{$q:o}}=m,u=i(null),g=i(!1),N=h(()=>B(e.anchor,o.lang.rtl)),j=h(()=>B(e.self,o.lang.rtl)),Q=h(()=>e.persistent!==!0),{registerTick:U,removeTick:R}=re(),{registerTimeout:v}=ce(),{transitionProps:V,transitionStyle:W}=ue(e),{localScrollTarget:P,changeScrollEvent:G,unconfigureScrollTarget:$}=Ie(e,x),{anchorEl:n,canShow:F,anchorEvents:d}=xe({showing:g,configureAnchorEl:te}),{show:J,hide:y}=de({showing:g,canShow:F,handleShow:X,handleHide:Y,hideOnRouteChange:Q,processOnMount:!0});Object.assign(d,{delayShow:Z,delayHide:ee});const{showPortal:_,hidePortal:w,renderPortal:K}=fe(m,u,oe,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:n,innerRef:u,onClickOutside(r){return y(r),r.target.classList.contains("q-dialog__backdrop")&&pe(r),!0}},T=h(()=>e.modelValue===null&&e.persistent!==!0&&g.value===!0);O(T,r=>{(r===!0?Oe:D)(t)}),C(()=>{D(t)})}function X(t){_(),U(()=>{l=new MutationObserver(()=>f()),l.observe(u.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),f(),x()}),s===void 0&&(s=O(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,f)),v(()=>{_(!0),a("show",t)},e.transitionDuration)}function Y(t){R(),w(),I(),v(()=>{w(!0),a("hide",t)},e.transitionDuration)}function I(){l!==void 0&&(l.disconnect(),l=void 0),s!==void 0&&(s(),s=void 0),$(),E(d,"tooltipTemp")}function f(){ke({targetEl:u.value,offset:e.offset,anchorEl:n.value,anchorOrigin:N.value,selfOrigin:j.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Z(t){if(o.platform.is.mobile===!0){z(),document.body.classList.add("non-selectable");const T=n.value,r=["touchmove","touchcancel","touchend","click"].map(k=>[T,k,"delayHide","passiveCapture"]);H(d,"tooltipTemp",r)}v(()=>{J(t)},e.delay)}function ee(t){o.platform.is.mobile===!0&&(E(d,"tooltipTemp"),z(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),v(()=>{y(t)},e.hideDelay)}function te(){if(e.noParentEvent===!0||n.value===null)return;const t=o.platform.is.mobile===!0?[[n.value,"touchstart","delayShow","passive"]]:[[n.value,"mouseenter","delayShow","passive"],[n.value,"mouseleave","delayHide","passive"]];H(d,"anchor",t)}function x(){if(n.value!==null||e.scrollTarget!==void 0){P.value=me(n.value,e.scrollTarget);const t=e.noParentEvent===!0?f:y;G(P.value,t)}}function ae(){return g.value===!0?M("div",{...c,ref:u,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",c.class],style:[c.style,W.value],role:"tooltip"},he(p.default)):null}function oe(){return M(ge,V.value,ae)}return C(I),Object.assign(m.proxy,{updatePosition:f}),K}});const He=["innerHTML"],Me={class:"ItemAmount"},qe={__name:"ItemIcon",props:{icon:i(""),locIcon:i(""),grade:i(1),amount:i(null),toolText:i(""),size:i(null)},setup(e){const p=String("https://api.aa.dllib.ru/"),a=e;function c(){return a.size?a.size:"45px"}function s(){if(a.icon)return"url("+p+"img/icons/90/"+a.icon+")";if(a.locIcon)return"url("+a.locIcon+")"}function l(){return"url(/img/grade/"+a.grade+".png)"}return(m,o)=>(q(),ye("div",{class:"ItemIcon",style:A({backgroundImage:s(),width:c(),height:c()})},[e.toolText?(q(),Te(Ee,{key:0,class:"bg-tooltip"},{default:be(()=>[S("div",{innerHTML:e.toolText},null,8,He)]),_:1})):Se("",!0),S("div",{class:"grade",style:A({backgroundImage:l()})},[S("div",Me,Pe(e.amount),1)],4)],4))}};var ze=Ce(qe,[["__scopeId","data-v-206bd5e0"]]);export{ze as I,Ee as Q};

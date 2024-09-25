import{H as ne,J as ie,ao as b,ap as se,L as le,r as i,c as h,ag as re,N as ce,aq as ue,P as de,ar as fe,w as O,S as C,as as E,at as H,au as ge,h as q,av as me,g as ve,I as he,ac as pe,q as A,t as ye,v as Te,Y as be,l as Se,a6 as S,$ as _e,aw as L}from"./index.be968432.js";import{u as we,v as M,c as Pe,p as B,d as Ie,e as xe,r as D,s as ke,f as Oe}from"./position-engine.c21b03aa.js";import{c as z}from"./selection.aacd3f71.js";import{_ as Ce}from"./plugin-vue_export-helper.21dcd24c.js";var Ee=ne({name:"QTooltip",inheritAttrs:!1,props:{...we,...ie,...b,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...b.transitionShow,default:"jump-down"},transitionHide:{...b.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:M},self:{type:String,default:"top middle",validator:M},offset:{type:Array,default:()=>[14,14],validator:Pe},scrollTarget:se,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...le],setup(e,{slots:p,emit:o,attrs:c}){let s,l;const g=ve(),{proxy:{$q:a}}=g,u=i(null),m=i(!1),N=h(()=>B(e.anchor,a.lang.rtl)),j=h(()=>B(e.self,a.lang.rtl)),U=h(()=>e.persistent!==!0),{registerTick:Q,removeTick:V}=re(),{registerTimeout:v}=ce(),{transitionProps:W,transitionStyle:R}=ue(e),{localScrollTarget:_,changeScrollEvent:$,unconfigureScrollTarget:G}=Ie(e,x),{anchorEl:n,canShow:J,anchorEvents:d}=xe({showing:m,configureAnchorEl:te}),{show:Y,hide:y}=de({showing:m,canShow:J,handleShow:K,handleHide:X,hideOnRouteChange:U,processOnMount:!0});Object.assign(d,{delayShow:Z,delayHide:ee});const{showPortal:w,hidePortal:P,renderPortal:F}=fe(g,u,ae,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:n,innerRef:u,onClickOutside(r){return y(r),r.target.classList.contains("q-dialog__backdrop")&&pe(r),!0}},T=h(()=>e.modelValue===null&&e.persistent!==!0&&m.value===!0);O(T,r=>{(r===!0?Oe:D)(t)}),C(()=>{D(t)})}function K(t){w(),Q(()=>{l=new MutationObserver(()=>f()),l.observe(u.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),f(),x()}),s===void 0&&(s=O(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,f)),v(()=>{w(!0),o("show",t)},e.transitionDuration)}function X(t){V(),P(),I(),v(()=>{P(!0),o("hide",t)},e.transitionDuration)}function I(){l!==void 0&&(l.disconnect(),l=void 0),s!==void 0&&(s(),s=void 0),G(),E(d,"tooltipTemp")}function f(){ke({targetEl:u.value,offset:e.offset,anchorEl:n.value,anchorOrigin:N.value,selfOrigin:j.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Z(t){if(a.platform.is.mobile===!0){z(),document.body.classList.add("non-selectable");const T=n.value,r=["touchmove","touchcancel","touchend","click"].map(k=>[T,k,"delayHide","passiveCapture"]);H(d,"tooltipTemp",r)}v(()=>{Y(t)},e.delay)}function ee(t){a.platform.is.mobile===!0&&(E(d,"tooltipTemp"),z(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),v(()=>{y(t)},e.hideDelay)}function te(){if(e.noParentEvent===!0||n.value===null)return;const t=a.platform.is.mobile===!0?[[n.value,"touchstart","delayShow","passive"]]:[[n.value,"mouseenter","delayShow","passive"],[n.value,"mouseleave","delayHide","passive"]];H(d,"anchor",t)}function x(){if(n.value!==null||e.scrollTarget!==void 0){_.value=ge(n.value,e.scrollTarget);const t=e.noParentEvent===!0?f:y;$(_.value,t)}}function oe(){return m.value===!0?q("div",{...c,ref:u,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",c.class],style:[c.style,R.value],role:"tooltip"},he(p.default)):null}function ae(){return q(me,W.value,oe)}return C(I),Object.assign(g.proxy,{updatePosition:f}),F}});const He=["innerHTML"],qe={class:"ItemAmount"},Ae={__name:"ItemIcon",props:{icon:i(""),locIcon:i(""),grade:i(1),amount:i(null),toolText:i(""),size:i(null)},setup(e){const p=String("https://api.aa.dllib.ru/"),o=e;function c(){return o.size?o.size:"45px"}function s(){if(o.icon)return"url("+p+"img/icons/90/"+o.icon+")";if(o.locIcon)return"url("+o.locIcon+")"}function l(){return"url(/img/grade/"+o.grade+".png)"}return(g,a)=>(A(),ye("div",{class:"ItemIcon",style:L({backgroundImage:s(),width:c(),height:c()})},[e.toolText?(A(),Te(Ee,{key:0,class:"bg-tooltip"},{default:be(()=>[S("div",{innerHTML:e.toolText},null,8,He)]),_:1})):Se("",!0),S("div",{class:"grade",style:L({backgroundImage:l()})},[S("div",qe,_e(e.amount),1)],4)],4))}};var ze=Ce(Ae,[["__scopeId","data-v-206bd5e0"]]);export{ze as I,Ee as Q};

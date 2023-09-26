import{H as ae,J as ne,an as ie,L as le,r as i,c as p,af as se,N as re,ao as ue,Q as ce,ap as de,w as k,S as O,aq as C,ar as E,as as fe,h as H,at as ge,g as me,I as ve,ab as he,s as A,t as pe,v as ye,X as Te,l as be,a5 as b,_ as Se,au as L,av as _e}from"./index.ef28cfcc.js";import{u as we,v as M,c as Ie,p as q,d as Pe,e as xe,r as D,s as ke,f as Oe}from"./position-engine.a753418a.js";import{c as z}from"./selection.e0a85ebc.js";var Ce=ae({name:"QTooltip",inheritAttrs:!1,props:{...we,...ne,...ie,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:M},self:{type:String,default:"top middle",validator:M},offset:{type:Array,default:()=>[14,14],validator:Ie},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...le],setup(e,{slots:a,emit:g,attrs:u}){let l,s;const m=me(),{proxy:{$q:o}}=m,c=i(null),v=i(!1),B=p(()=>q(e.anchor,o.lang.rtl)),N=p(()=>q(e.self,o.lang.rtl)),j=p(()=>e.persistent!==!0),{registerTick:Q,removeTick:U}=se(),{registerTimeout:h}=re(),{transitionProps:V,transitionStyle:W}=ue(e),{localScrollTarget:S,changeScrollEvent:R,unconfigureScrollTarget:G}=Pe(e,P),{anchorEl:n,canShow:J,anchorEvents:d}=xe({showing:v,configureAnchorEl:ee}),{show:X,hide:y}=ce({showing:v,canShow:J,handleShow:F,handleHide:K,hideOnRouteChange:j,processOnMount:!0});Object.assign(d,{delayShow:Y,delayHide:Z});const{showPortal:_,hidePortal:w,renderPortal:$}=de(m,c,oe,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:n,innerRef:c,onClickOutside(r){return y(r),r.target.classList.contains("q-dialog__backdrop")&&he(r),!0}},T=p(()=>e.modelValue===null&&e.persistent!==!0&&v.value===!0);k(T,r=>{(r===!0?Oe:D)(t)}),O(()=>{D(t)})}function F(t){_(),Q(()=>{s=new MutationObserver(()=>f()),s.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),f(),P()}),l===void 0&&(l=k(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,f)),h(()=>{_(!0),g("show",t)},e.transitionDuration)}function K(t){U(),w(),I(),h(()=>{w(!0),g("hide",t)},e.transitionDuration)}function I(){s!==void 0&&(s.disconnect(),s=void 0),l!==void 0&&(l(),l=void 0),G(),C(d,"tooltipTemp")}function f(){ke({targetEl:c.value,offset:e.offset,anchorEl:n.value,anchorOrigin:B.value,selfOrigin:N.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Y(t){if(o.platform.is.mobile===!0){z(),document.body.classList.add("non-selectable");const T=n.value,r=["touchmove","touchcancel","touchend","click"].map(x=>[T,x,"delayHide","passiveCapture"]);E(d,"tooltipTemp",r)}h(()=>{X(t)},e.delay)}function Z(t){o.platform.is.mobile===!0&&(C(d,"tooltipTemp"),z(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),h(()=>{y(t)},e.hideDelay)}function ee(){if(e.noParentEvent===!0||n.value===null)return;const t=o.platform.is.mobile===!0?[[n.value,"touchstart","delayShow","passive"]]:[[n.value,"mouseenter","delayShow","passive"],[n.value,"mouseleave","delayHide","passive"]];E(d,"anchor",t)}function P(){if(n.value!==null||e.scrollTarget!==void 0){S.value=fe(n.value,e.scrollTarget);const t=e.noParentEvent===!0?f:y;R(S.value,t)}}function te(){return v.value===!0?H("div",{...u,ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",u.class],style:[u.style,W.value],role:"tooltip"},ve(a.default)):null}function oe(){return H(ge,V.value,te)}return O(I),Object.assign(m.proxy,{updatePosition:f}),$}});const Ee=["innerHTML"],He={class:"ItemAmount"},Ae={__name:"ItemIcon",props:{icon:i(""),locIcon:i(""),grade:i(1),amount:i(null),toolText:i(""),size:i(null)},setup(e){const a=e,g=String("https://api.dllib.ru/");function u(){return a.size?a.size:"45px"}function l(){if(a.icon)return"url("+g+"img/icons/90/"+a.icon+")";if(a.locIcon)return"url("+a.locIcon+")"}function s(){return"url(/img/grade/"+a.grade+".png)"}return(m,o)=>(A(),pe("div",{class:"ItemIcon",style:L({backgroundImage:l(),width:u(),height:u()})},[e.toolText?(A(),ye(Ce,{key:0,class:"bg-tooltip"},{default:Te(()=>[b("div",{innerHTML:e.toolText},null,8,Ee)]),_:1})):be("",!0),b("div",{class:"grade",style:L({backgroundImage:s()})},[b("div",He,Se(e.amount),1)],4)],4))}};var De=_e(Ae,[["__scopeId","data-v-206bd5e0"]]);export{De as I,Ce as Q};

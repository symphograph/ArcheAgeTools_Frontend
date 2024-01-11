import{Q as D}from"./QList.a850d90c.js";import{api as N}from"./axios.c53f7cff.js";import{u as z}from"./use-meta.44c0b124.js";import{u as F}from"./use-quasar.0c941a1e.js";import{n as G}from"./myFuncts.80e53bd5.js";import{b as x,Q as B,a as d}from"./position-engine.a34c8035.js";import{H as L,c as y,h as g,I as A,bw as I,an as U,r as _,a_ as W,bx as X,w as Q,o as V,a3 as Z,ae as q,g as J,aP as K,s as w,v,X as o,b6 as Y,f as r,t as p,a4 as H,Z as c,_ as f,F as P,b7 as ee,av as ae,l as te}from"./index.5175d5c0.js";import{Q as ne}from"./QMenu.12801ee8.js";import"./selection.50e195ba.js";var oe=L({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:i}){const u=y(()=>{const a=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(n=>e[n]===!0).map(n=>`q-btn-group--${n}`).join(" ");return`q-btn-group row no-wrap${a.length!==0?" "+a:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>g("div",{class:u.value},A(i.default))}});const le=Object.keys(I),re=e=>le.reduce((i,u)=>{const a=e[u];return a!==void 0&&(i[u]=a),i},{});var ue=L({name:"QBtnDropdown",props:{...I,...U,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:i,emit:u}){const{proxy:a}=J(),n=_(e.modelValue),l=_(null),s=W(),b=y(()=>{const t={"aria-expanded":n.value===!0?"true":"false","aria-haspopup":"true","aria-controls":s,"aria-label":e.toggleAriaLabel||a.$q.lang.label[n.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(t["aria-disabled"]="true"),t}),h=y(()=>"q-btn-dropdown__arrow"+(n.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),m=y(()=>X(e)),C=y(()=>re(e));Q(()=>e.modelValue,t=>{l.value!==null&&l.value[t?"show":"hide"]()}),Q(()=>e.split,S);function M(t){n.value=!0,u("beforeShow",t)}function j(t){u("show",t),u("update:modelValue",!0)}function O(t){n.value=!1,u("beforeHide",t)}function R(t){u("hide",t),u("update:modelValue",!1)}function $(t){u("click",t)}function T(t){K(t),S(),u("click",t)}function E(t){l.value!==null&&l.value.toggle(t)}function k(t){l.value!==null&&l.value.show(t)}function S(t){l.value!==null&&l.value.hide(t)}return Object.assign(a,{show:k,hide:S,toggle:E}),V(()=>{e.modelValue===!0&&k()}),()=>{const t=[g(Z,{class:h.value,name:e.dropdownIcon||a.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&t.push(g(ne,{ref:l,id:s,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:M,onShow:j,onBeforeHide:O,onHide:R},i.default)),e.split===!1?g(q,{class:"q-btn-dropdown q-btn-dropdown--simple",...C.value,...b.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:$},{default:()=>A(i.label,[]).concat(t),loading:i.loading}):g(oe,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...m.value,glossy:e.glossy,stretch:e.stretch},()=>[g(q,{class:"q-btn-dropdown--current",...C.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:T},{default:i.label,loading:i.loading}),g(q,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...b.value,...m.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>t)])}}});const ie={__name:"LogTrace",props:{trace:_([])},setup(e){return(i,u)=>(w(),v(Y,{dark:""},{default:o(()=>[r(ee,{class:"traceCard"},{default:o(()=>[r(D,{dark:"",dense:"",separator:"",class:"traceList"},{default:o(()=>[(w(!0),p(P,null,H(e.trace,(a,n)=>(w(),v(x,{key:n,dense:"",dark:""},{default:o(()=>[r(B,null,{default:o(()=>[r(d,{class:"path"},{default:o(()=>[c(f(a.file+":"+(a!=null&&a.line?a==null?void 0:a.line:"")),1)]),_:2},1024),r(d,null,{default:o(()=>[c(f("function: "+a.function),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}};var se=ae(ie,[["__scopeId","data-v-6f3f15c5"]]);const de={__name:"LogRow",props:{row:_({})},setup(e){return _(!1),(i,u)=>(w(),v(x,null,{default:o(()=>[r(B,{avatar:"",top:""},{default:o(()=>[r(d,{caption:""},{default:o(()=>[c(f(e.row.datetime),1)]),_:1}),r(d,{class:"type"},{default:o(()=>[c(f(e.row.type),1)]),_:1})]),_:1}),r(B,{top:""},{default:o(()=>{var a,n;return[r(d,{class:"msg"},{default:o(()=>[c(f(e.row.msg),1)]),_:1}),r(d,{class:"path"},{default:o(()=>[c(f(e.row.script),1)]),_:1}),r(d,{class:"path"},{default:o(()=>{var l;return[c(f((l=e.row)!=null&&l.file?e.row.file+"("+e.row.line+")":""),1)]}),_:1}),(n=(a=e.row)==null?void 0:a.trace)!=null&&n.length?(w(),v(ue,{key:0,label:"trace"},{default:o(()=>[r(se,{trace:e.row.trace},null,8,["trace"])]),_:1})):te("",!0)]}),_:1}),r(B,{top:""},{default:o(()=>[r(d,{caption:""},{default:o(()=>{var a,n,l;return[c(f((l=(n=(a=e.row)==null?void 0:a.agent)==null?void 0:n.platform)!=null?l:""),1)]}),_:1}),r(d,{caption:""},{default:o(()=>{var a,n,l;return[c(f((l=(n=(a=e.row)==null?void 0:a.agent)==null?void 0:n.browser)!=null?l:""),1)]}),_:1}),r(d,{caption:""},{default:o(()=>{var a,n;return[c(f((n=(a=e.row)==null?void 0:a.ip)!=null?n:""),1)]}),_:1})]),_:1}),r(B)]),_:1}))}},Be={__name:"LogsPage",setup(e){const i=F(),u=String("https://api.aa.dllib.ru/"),a=_([]);V(()=>{console.log("jh"),l()}),z({title:"\u041B\u043E\u0433\u0438"});function l(){N.post(u+"test/logs.php",{params:{}}).then(s=>{var b,h,m;if(!((b=s==null?void 0:s.data)!=null&&b.result))throw new Error;a.value=(m=(h=s==null?void 0:s.data)==null?void 0:h.data)!=null?m:[]}).catch(s=>{i.notify(G(s))})}return(s,b)=>(w(),v(D,{dark:"",separator:""},{default:o(()=>[(w(!0),p(P,null,H(a.value,(h,m)=>(w(),v(de,{key:m,row:h},null,8,["row"]))),128))]),_:1}))}};export{Be as default};

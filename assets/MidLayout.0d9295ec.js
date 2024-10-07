import"./QPage.f909c7b8.js";import{Q as dt,a as st}from"./QLayout.cbbc064b.js";import{Q as ft,a as vt}from"./QHeader.bbda11ec.js";import{api as pe}from"./axios.ddc478b8.js";import{P as gt}from"./LocalStorage.cb419eb6.js";import{u as Ce}from"./use-quasar.d747f14e.js";import{Q as ee,a as Z,b as Se}from"./position-engine.26aa5e7a.js";import{n as w,t as M,G as u,f as c,Q as $e,H as U,I as fe,J as k,i as z,r as $,c as p,o as Te,K as ht,q as re,l as j,L as Ze,M as Oe,N as Be,F as me,O as Ee,b as Fe,P as we,R as mt,S as Qe,U as et,V as tt,W as yt,w as V,h as K,g as at,X as Ve,Y as kt,Z as bt,_ as _t,$ as Re,a0 as lt,a1 as pt,a2 as He,u as Ge,a3 as xt,a4 as We,a5 as St,a6 as wt,a7 as Ct,a8 as Me,a9 as Lt,aa as Tt,ab as At,ac as je,ad as qt,ae as Bt,d as $t,af as Xe,p as X,k as Qt,m as It}from"./index.5f348600.js";import{Q as nt}from"./QSelect.8e81547d.js";import{I as De}from"./ItemIcon.c3b6e505.js";import{Q as it}from"./QImg.0433f768.js";import{d as Kt,n as xe}from"./myFuncts.8be67628.js";import{m as ze,a as Ue}from"./myAuth.e7ed00d7.js";import{Q as Nt,a as Mt}from"./QExpansionItem.8daf2a78.js";import{Q as Pt}from"./QList.f73218e7.js";import{Q as Ot}from"./QTabs.f94338b9.js";import{T as Pe}from"./TouchPan.990df45f.js";import{b as qe}from"./format.959830d0.js";import"./QScrollObserver.96244c85.js";import"./selection.eefc3e68.js";import"./QMenu.665dfa9b.js";import"./plugin-vue_export-helper.21dcd24c.js";const rt={__name:"DynamicFormItem",props:{btnLabel:String,icon:String,url:String},setup(e){Ce();const C=e;return(s,q)=>(w(),M(Se,{clickable:"",dark:"",onClick:q[0]||(q[0]=Q=>k(Kt)(e.url,{AccessToken:k(ze).self.AccessToken,SessionToken:k(ze).self.SessionToken}))},{default:u(()=>[c(ee,{avatar:""},{default:u(()=>[c($e,null,{default:u(()=>[c(it,{src:e.icon},null,8,["src"])]),_:1})]),_:1}),c(ee,null,{default:u(()=>[c(Z,{caption:""},{default:u(()=>q[1]||(q[1]=[U("\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437")])),_:1}),c(Z,null,{default:u(()=>[U(fe(C.btnLabel),1)]),_:1})]),_:1})]),_:1}))}},Et={key:0,style:{width:"40px"}},ot={__name:"AccountSelector",emits:["onSelectAccount"],setup(e,{emit:C}){Ce();const s=String("https://aa.dllib.ru/tauth/"),q=z("ServerGroupList"),Q=z("AccountList");function x(){return Q.value.filter(d=>d.authType!=="deefault")}const f=z("curAccount");$({id:1,nickName:"\u041D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D",avatar:"init_ava.png",grade:1,serverId:9});const P=z("authTypes"),B=$(null),v=z("reLogin");function n(d){return q.value.find(m=>m.id===d)}const A=p(()=>{var m,y;const d=n((y=(m=f.value)==null?void 0:m.settings)==null?void 0:y.serverGroupId);return d||null});return Te(()=>{}),(d,m)=>{var y,G,F,h;return(y=x())!=null&&y.length?(w(),M(nt,{key:0,modelValue:k(f),"onUpdate:modelValue":[m[0]||(m[0]=L=>Fe(f)?f.value=L:null),m[1]||(m[1]=L=>k(v)(k(f).id,k(f).authType))],style:{"min-width":"16em"},ref_key:"selector",ref:B,dark:"","label-color":"grey",filled:"",label:`${(h=(F=(G=k(f))==null?void 0:G.settings)==null?void 0:F.publicNick)!=null?h:"dsd"}`,options:x(),"option-value":"id","map-options":"","option-label":"nickName"},ht({selected:u(()=>[c(Se,{dark:"",dense:""},{default:u(()=>[c(ee,null,{default:u(()=>[c(Z,{caption:""},{default:u(()=>{var L;return[U(fe((L=A.value)==null?void 0:L.label),1)]}),_:1})]),_:1})]),_:1})]),"before-options":u(()=>[c(Se,{clickable:"",to:"/accounts"},{default:u(()=>[c(ee,{avatar:""},{default:u(()=>[c($e,{icon:"ionicon person outline"})]),_:1}),c(ee,null,{default:u(()=>[c(Z,{caption:"",class:"text-grey"},{default:u(()=>m[2]||(m[2]=[U("\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430\u043C\u0438")])),_:1}),c(Z,null,{default:u(()=>m[3]||(m[3]=[U("\u041F\u0440\u043E\u0444\u0438\u043B\u044C")])),_:1})]),_:1})]),_:1})]),option:u(L=>[L.opt.id!==k(f).id&&L.opt.authType!=="default"?(w(),M(Se,Ze(Oe({key:0},L.itemProps)),{default:u(()=>[c(ee,{avatar:""},{default:u(()=>{var W;return[c(De,{locIcon:k(s)+((W=L.opt.Avatar)==null?void 0:W.src),grade:1,size:"70px"},null,8,["locIcon"])]}),_:2},1024),c(ee,null,{default:u(()=>[c(Z,{caption:"",class:"text-grey-9"},{default:u(()=>[m[4]||(m[4]=U(" \u0412\u043E\u0439\u0442\u0438 \u043A\u0430\u043A ")),c(Be,{name:"img:/img/auth/"+L.opt.authType+".svg"},null,8,["name"])]),_:2},1024),c(Z,null,{default:u(()=>[U(fe(L.opt.nickName),1)]),_:2},1024),c(Z,{caption:"",class:"text-grey-6"},{default:u(()=>{var W,ae;return[U(fe((ae=(W=L.opt.settings)==null?void 0:W.publicNick)!=null?ae:""),1)]}),_:2},1024),c(Z,{caption:"",class:"text-grey-9"},{default:u(()=>{var W;return[U(fe(n((W=L.opt.settings)==null?void 0:W.serverGroupId).label),1)]}),_:2},1024)]),_:2},1024)]),_:2},1040)):j("",!0)]),"after-options":u(()=>[(w(!0),re(me,null,Ee(k(P),L=>(w(),re("div",{key:L.id},[c(rt,{btnLabel:L.label,icon:L.img,url:k(s)+L.url},null,8,["btnLabel","icon","url"])]))),128))]),_:2},[k(f)?{name:"append",fn:u(()=>[k(f).Avatar?(w(),re("div",Et,[c(De,{locIcon:k(s)+k(f).Avatar.src,grade:k(f).settings.grade},null,8,["locIcon","grade"])])):j("",!0)]),key:"0"}:void 0]),1032,["modelValue","label","options"])):j("",!0)}}},ut={__name:"LoginList",setup(e){const C=String("https://aa.dllib.ru/tauth/"),s=z("authTypes"),q=$(null);return(Q,x)=>(w(),M(nt,{modelValue:q.value,"onUpdate:modelValue":x[0]||(x[0]=f=>q.value=f),options:k(s),"map-options":"",label:"\u0412\u043E\u0439\u0442\u0438",style:{"min-width":"16em"},ref:"selector",dark:"",filled:"","option-value":"id","label-color":"grey"},{option:u(f=>[we("div",Ze(mt(f.itemProps)),[c(rt,{btnLabel:f.opt.label,icon:f.opt.img,url:k(C)+f.opt.url},null,8,["btnLabel","icon","url"])],16)]),_:1},8,["modelValue","options"]))}},Je={__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},ava:{type:String,default:""},children:{type:Array,default:()=>[]}},setup(e){return(C,s)=>(w(),M(Se,{clickable:"",tag:"a",to:e.link,dark:""},{default:u(()=>[e.icon||e.ava?(w(),M(ee,{key:0,avatar:""},{default:u(()=>[e.icon?(w(),M(Be,{key:0,name:e.icon},null,8,["name"])):j("",!0),e.ava?(w(),M($e,{key:1},{default:u(()=>[c(it,{src:e.ava,ratio:30/30},null,8,["src"])]),_:1})):j("",!0)]),_:1})):j("",!0),c(ee,null,{default:u(()=>[c(Z,null,{default:u(()=>[U(fe(e.title),1)]),_:1}),c(Z,{caption:""},{default:u(()=>[U(fe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"]))}},Ft=["none","strict","leaf","leaf-filtered"];var Vt=Qe({name:"QTree",props:{...et,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:e=>Ft.includes(e)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:{},noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(e,{slots:C,emit:s}){const{proxy:q}=at(),{$q:Q}=q,x=tt(e,Q),f=$({}),P=$(e.ticked||[]),B=$(e.expanded||[]);let v={};yt(()=>{v={}});const n=p(()=>`q-tree q-tree--${e.dense===!0?"dense":"standard"}`+(e.noConnectors===!0?" q-tree--no-connectors":"")+(x.value===!0?" q-tree--dark":"")+(e.color!==void 0?` text-${e.color}`:"")),A=p(()=>e.selected!==void 0),d=p(()=>e.icon||Q.iconSet.tree.icon),m=p(()=>e.controlColor||e.color),y=p(()=>e.textColor!==void 0?` text-${e.textColor}`:""),G=p(()=>{const a=e.selectedColor||e.color;return a?` text-${a}`:""}),F=p(()=>e.filterMethod!==void 0?e.filterMethod:(a,r)=>{const t=r.toLowerCase();return a[e.labelKey]&&a[e.labelKey].toLowerCase().indexOf(t)!==-1}),h=p(()=>{const a={},r=(t,g)=>{const o=t.tickStrategy||(g?g.tickStrategy:e.tickStrategy),T=t[e.nodeKey],O=t[e.childrenKey]&&Array.isArray(t[e.childrenKey])&&t[e.childrenKey].length!==0,ce=t.disabled!==!0&&A.value===!0&&t.selectable!==!1,D=t.disabled!==!0&&t.expandable!==!1,Ke=o!=="none",de=o==="strict",R=o==="leaf-filtered",Y=o==="leaf"||o==="leaf-filtered";let he=t.disabled!==!0&&t.tickable!==!1;Y===!0&&he===!0&&g&&g.tickable!==!0&&(he=!1);let se=t.lazy;se===!0&&f.value[T]!==void 0&&Array.isArray(t[e.childrenKey])===!0&&(se=f.value[T]);const S={key:T,parent:g,isParent:O,lazy:se,disabled:t.disabled,link:t.disabled!==!0&&(ce===!0||D===!0&&(O===!0||se===!0)),children:[],matchesFilter:e.filter?F.value(t,e.filter):!0,selected:T===e.selected&&ce===!0,selectable:ce,expanded:O===!0?B.value.includes(T):!1,expandable:D,noTick:t.noTick===!0||de!==!0&&se&&se!=="loaded",tickable:he,tickStrategy:o,hasTicking:Ke,strictTicking:de,leafFilteredTicking:R,leafTicking:Y,ticked:de===!0?P.value.includes(T):O===!0?!1:P.value.includes(T)};if(a[T]=S,O===!0&&(S.children=t[e.childrenKey].map(E=>r(E,S)),e.filter&&(S.matchesFilter!==!0?S.matchesFilter=S.children.some(E=>E.matchesFilter):S.noTick!==!0&&S.disabled!==!0&&S.tickable===!0&&R===!0&&S.children.every(E=>E.matchesFilter!==!0||E.noTick===!0||E.tickable!==!0)===!0&&(S.tickable=!1)),S.matchesFilter===!0&&(S.noTick!==!0&&de!==!0&&S.children.every(E=>E.noTick)===!0&&(S.noTick=!0),Y))){if(S.ticked=!1,S.indeterminate=S.children.some(E=>E.indeterminate===!0),S.tickable=S.tickable===!0&&S.children.some(E=>E.tickable),S.indeterminate!==!0){const E=S.children.reduce((_e,te)=>te.ticked===!0?_e+1:_e,0);E===S.children.length?S.ticked=!0:E>0&&(S.indeterminate=!0)}S.indeterminate===!0&&(S.indeterminateNextState=S.children.every(E=>E.tickable!==!0||E.ticked!==!0))}return S};return e.nodes.forEach(t=>r(t,null)),a});V(()=>e.ticked,a=>{P.value=a}),V(()=>e.expanded,a=>{B.value=a});function L(a){const r=[].reduce,t=(g,o)=>{if(g||!o)return g;if(Array.isArray(o)===!0)return r.call(Object(o),t,g);if(o[e.nodeKey]===a)return o;if(o[e.childrenKey])return t(null,o[e.childrenKey])};return t(null,e.nodes)}function W(){return P.value.map(a=>L(a))}function ae(){return B.value.map(a=>L(a))}function ye(a){return a&&h.value[a]?h.value[a].expanded:!1}function le(){e.expanded!==void 0?s("update:expanded",[]):B.value=[]}function ke(){const a=[],r=t=>{t[e.childrenKey]&&t[e.childrenKey].length!==0&&t.expandable!==!1&&t.disabled!==!0&&(a.push(t[e.nodeKey]),t[e.childrenKey].forEach(r))};e.nodes.forEach(r),e.expanded!==void 0?s("update:expanded",a):B.value=a}function ve(a,r,t=L(a),g=h.value[a]){if(g.lazy&&g.lazy!=="loaded"){if(g.lazy==="loading")return;f.value[a]="loading",Array.isArray(t[e.childrenKey])!==!0&&(t[e.childrenKey]=[]),s("lazyLoad",{node:t,key:a,done:o=>{f.value[a]="loaded",t[e.childrenKey]=Array.isArray(o)===!0?o:[],Ve(()=>{const T=h.value[a];T&&T.isParent===!0&&ne(a,!0)})},fail:()=>{delete f.value[a],t[e.childrenKey].length===0&&delete t[e.childrenKey]}})}else g.isParent===!0&&g.expandable===!0&&ne(a,r)}function ne(a,r){let t=B.value;const g=e.expanded!==void 0;if(g===!0&&(t=t.slice()),r){if(e.accordion&&h.value[a]){const o=[];h.value[a].parent?h.value[a].parent.children.forEach(T=>{T.key!==a&&T.expandable===!0&&o.push(T.key)}):e.nodes.forEach(T=>{const O=T[e.nodeKey];O!==a&&o.push(O)}),o.length!==0&&(t=t.filter(T=>o.includes(T)===!1))}t=t.concat([a]).filter((o,T,O)=>O.indexOf(o)===T)}else t=t.filter(o=>o!==a);g===!0?s("update:expanded",t):B.value=t}function i(a){return a&&h.value[a]?h.value[a].ticked:!1}function b(a,r){let t=P.value;const g=e.ticked!==void 0;g===!0&&(t=t.slice()),r?t=t.concat(a).filter((o,T,O)=>O.indexOf(o)===T):t=t.filter(o=>a.includes(o)===!1),g===!0&&s("update:ticked",t)}function N(a,r,t){const g={tree:q,node:a,key:t,color:e.color,dark:x.value};return He(g,"expanded",()=>r.expanded,o=>{o!==r.expanded&&ve(t,o)}),He(g,"ticked",()=>r.ticked,o=>{o!==r.ticked&&b([t],o)}),g}function I(a){return(e.filter?a.filter(r=>h.value[r[e.nodeKey]].matchesFilter):a).map(r=>oe(r))}function J(a){if(a.icon!==void 0)return K(Be,{class:"q-tree__icon q-mr-sm",name:a.icon,color:a.iconColor});const r=a.img||a.avatar;if(r)return K("img",{class:`q-tree__${a.img?"img":"avatar"} q-mr-sm`,src:r})}function ge(){s("afterShow")}function ie(){s("afterHide")}function oe(a){const r=a[e.nodeKey],t=h.value[r],g=a.header&&C[`header-${a.header}`]||C["default-header"],o=t.isParent===!0?I(a[e.childrenKey]):[],T=o.length!==0||t.lazy&&t.lazy!=="loaded";let O=a.body&&C[`body-${a.body}`]||C["default-body"];const ce=g!==void 0||O!==void 0?N(a,t,r):null;return O!==void 0&&(O=K("div",{class:"q-tree__node-body relative-position"},[K("div",{class:y.value},[O(ce)])])),K("div",{key:r,class:`q-tree__node relative-position q-tree__node--${T===!0?"parent":"child"}`},[K("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(t.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(t.selected===!0?" q-tree__node--selected":"")+(t.disabled===!0?" q-tree__node--disabled":""),tabindex:t.link===!0?0:-1,ariaExpanded:o.length>0?t.expanded:null,role:"treeitem",onClick:D=>{ue(a,t,D)},onKeypress(D){kt(D)!==!0&&(D.keyCode===13?ue(a,t,D,!0):D.keyCode===32&&Le(a,t,D,!0))}},[K("div",{class:"q-focus-helper",tabindex:-1,ref:D=>{v[t.key]=D}}),t.lazy==="loading"?K(bt,{class:"q-tree__spinner",color:m.value}):T===!0?K(Be,{class:"q-tree__arrow"+(t.expanded===!0?" q-tree__arrow--rotate":""),name:d.value,onClick(D){Le(a,t,D)}}):null,t.hasTicking===!0&&t.noTick!==!0?K(_t,{class:"q-tree__tickbox",modelValue:t.indeterminate===!0?null:t.ticked,color:m.value,dark:x.value,dense:!0,keepColor:!0,disable:t.tickable!==!0,onKeydown:Re,"onUpdate:modelValue":D=>{Ie(t,D)}}):null,K("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(t.selected===!0?G.value:y.value)},[g?g(ce):[J(a),K("div",a[e.labelKey])]])]),T===!0?e.noTransition===!0?t.expanded===!0?K("div",{class:"q-tree__node-collapsible"+y.value,key:`${r}__q`},[O,K("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":""),role:"group"},o)]):null:K(Nt,{duration:e.duration,onShow:ge,onHide:ie},()=>lt(K("div",{class:"q-tree__node-collapsible"+y.value,key:`${r}__q`},[O,K("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":""),role:"group"},o)]),[[pt,t.expanded]])):O])}function be(a){const r=v[a];r&&r.focus()}function ue(a,r,t,g){g!==!0&&r.selectable!==!1&&be(r.key),A.value&&r.selectable?e.noSelectionUnset===!1?s("update:selected",r.key!==e.selected?r.key:null):r.key!==e.selected&&s("update:selected",r.key===void 0?null:r.key):Le(a,r,t,g),typeof a.handler=="function"&&a.handler(a)}function Le(a,r,t,g){t!==void 0&&Re(t),g!==!0&&r.selectable!==!1&&be(r.key),ve(r.key,!r.expanded,a,r)}function Ie(a,r){if(a.indeterminate===!0&&(r=a.indeterminateNextState),a.strictTicking)b([a.key],r);else if(a.leafTicking){const t=[],g=o=>{o.isParent?(r!==!0&&o.noTick!==!0&&o.tickable===!0&&t.push(o.key),o.leafTicking===!0&&o.children.forEach(g)):o.noTick!==!0&&o.tickable===!0&&(o.leafFilteredTicking!==!0||o.matchesFilter===!0)&&t.push(o.key)};g(a),b(t,r)}}return e.defaultExpandAll===!0&&ke(),Object.assign(q,{getNodeByKey:L,getTickedNodes:W,getExpandedNodes:ae,isExpanded:ye,collapseAll:le,expandAll:ke,setExpanded:ve,isTicked:i,setTicked:b}),()=>{const a=I(e.nodes);return K("div",{class:n.value,role:"tree"},a.length===0?e.filter?e.noResultsLabel||Q.lang.tree.noResults:e.noNodesLabel||Q.lang.tree.noNodes:a)}}});const Dt={__name:"CategoryTree",setup(e){const C=Ce(),s=String("https://aa.dllib.ru/tapi/"),q=Ge(),Q=xt(),x=z("CategoriesList"),f=z("expandedCategNode"),P=z("selCategId"),B=z("selCategNode"),v=$(null);z("categMode"),V(P,()=>{if(!v.value)return;let d=v.value.getNodeByKey(P.value);if(d){let m=v.value.getNodeByKey(d.parent);B.value=d,f.value=[m.parent,d.parent]}else B.value=null},{deep:!0}),Te(()=>{A()});function n(){q.path!=="/category"&&Q.push({path:"/category"})}function A(){pe.post(s+"api/options.php",{params:{method:"getCategories"}}).then(d=>{var m,y,G;if(!((m=d==null?void 0:d.data)!=null&&m.result))throw new Error;d.data.result&&(x.value=(G=(y=d==null?void 0:d.data)==null?void 0:y.data)!=null?G:[])}).catch(d=>{C.notify(xe(d,"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C"))})}return(d,m)=>k(x)?(w(),M(Se,{key:0,separator:"",dark:""},{default:u(()=>[c(ee,null,{default:u(()=>[c(Vt,{dark:"",color:"gray","control-color":"black",ref_key:"tree",ref:v,accordion:"",nodes:k(x),"label-key":"name",expanded:k(f),"onUpdate:expanded":m[0]||(m[0]=y=>Fe(f)?f.value=y:null),selected:k(P),"onUpdate:selected":[m[1]||(m[1]=y=>Fe(P)?P.value=y:null),n],"no-transition":"","selected-color":"orange","node-key":"id",dense:""},null,8,["nodes","expanded","selected"])]),_:1})]),_:1})):j("",!0)}},zt=["src"],Ut={__name:"DrawerContent",setup(e){const C=Ge(),s=Ce(),q=z("AccountList"),Q=[{title:"\u041F\u0430\u043A\u0438",caption:"\u0420\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u043C\u044B\u0439",ava:"/img/pack.png",children:[{title:"\u041F\u0430\u043A\u0438",caption:"\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043F\u0430\u043A\u043E\u0432",ava:"/img/pack.png",link:"/packs"},{title:"\u041F\u0430\u043A\u0443\u043B\u044F\u0442\u043E\u0440",caption:"\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u043F\u0430\u043A\u043E\u0432",ava:"/img/packmaker.png",link:"/packinfo"}]},{title:"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B",caption:"\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438",ava:"/img/crafcul.png",children:[{title:"\u041A\u0440\u0430\u0444\u043A\u0443\u043B\u044F\u0442\u043E\u0440",caption:"\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438",link:"/item/"},{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",caption:"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",link:"/category"}]},{title:"\u041C\u043E\u0438 \u0446\u0435\u043D\u044B",caption:"\u0426\u0435\u043D\u044B \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432",ava:"/img/myprices.png",link:"/myprices/"},{title:"\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E",caption:"\u0426\u0435\u043D\u044B \u0438\u0433\u0440\u043E\u043A\u043E\u0432",ava:"/img/community.png",link:"/members"},{title:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",caption:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0441\u0432\u043E\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",ava:"/img/settings.png",link:"/settings"}],x=z("ServerGroupList"),f=p(()=>!!C.path.match(/^\/item\//)||!!C.path.match(/^\/category/));return Te(()=>{}),(P,B)=>(w(),re(me,null,[k(s).platform.is.mobile?(w(),re(me,{key:0},[k(q)&&k(q).some(v=>v.authType!=="default")?(w(),M(ot,{key:0})):(w(),M(ut,{key:1}))],64)):j("",!0),c(Pt,{separator:""},{default:u(()=>[c(Z,{header:""},{default:u(()=>B[0]||(B[0]=[U(" Graph Tools ")])),_:1}),(w(),re(me,null,Ee(Q,v=>(w(),re(me,{key:v.title},[(v==null?void 0:v.children)&&(v==null?void 0:v.children.length)?(w(),M(Mt,{key:0,"content-inset-level":.2,"expand-separator":"",label:v.title,caption:v.caption,"default-closed":""},{header:u(()=>[v!=null&&v.ava?(w(),M(ee,{key:0,avatar:""},{default:u(()=>[c($e,null,{default:u(()=>[we("img",{src:v.ava},null,8,zt)]),_:2},1024)]),_:2},1024)):j("",!0),c(ee,null,{default:u(()=>[U(fe(v.title),1)]),_:2},1024)]),default:u(()=>[(w(!0),re(me,null,Ee(v.children,n=>(w(),M(Je,Oe({key:n.title,ref_for:!0},n,{title:n.title}),null,16,["title"]))),128))]),_:2},1032,["label","caption"])):(w(),M(Je,Oe({key:v.title,ref_for:!0},v,{title:v.title}),null,16,["title"]))],64))),64)),f.value&&k(x).length?(w(),M(Dt,{key:0})):j("",!0)]),_:1})],64))}};var Gt=Qe({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:C}){const s=p(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>K("div",{class:s.value},We(C.default))}}),Wt=Qe({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:C}){const s=p(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>K("div",{class:s.value,role:"toolbar"},We(C.default))}});const Ye=150;var Rt=Qe({name:"QDrawer",inheritAttrs:!1,props:{...St,...et,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...wt,"onLayout","miniState"],setup(e,{slots:C,emit:s,attrs:q}){const Q=at(),{proxy:{$q:x}}=Q,f=tt(e,x),{preventBodyScroll:P}=Bt(),{registerTimeout:B,removeTimeout:v}=Ct(),n=z(qt,Me);if(n===Me)return console.error("QDrawer needs to be child of QLayout"),Me;let A,d=null,m;const y=$(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),G=p(()=>e.mini===!0&&y.value!==!0),F=p(()=>G.value===!0?e.miniWidth:e.width),h=$(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),L=p(()=>e.persistent!==!0&&(y.value===!0||Le.value===!0));function W(l,_){if(ke(),l!==!1&&n.animate(),R(0),y.value===!0){const H=n.instances[ie.value];H!==void 0&&H.belowBreakpoint===!0&&H.hide(!1),Y(1),n.isContainer.value!==!0&&P(!0)}else Y(0),l!==!1&&he(!1);B(()=>{l!==!1&&he(!0),_!==!0&&s("show",l)},Ye)}function ae(l,_){ve(),l!==!1&&n.animate(),Y(0),R(b.value*F.value),_e(),_!==!0?B(()=>{s("hide",l)},Ye):v()}const{show:ye,hide:le}=Lt({showing:h,hideOnRouteChange:L,handleShow:W,handleHide:ae}),{addToHistory:ke,removeFromHistory:ve}=Tt(h,le,L),ne={belowBreakpoint:y,hide:le},i=p(()=>e.side==="right"),b=p(()=>(x.lang.rtl===!0?-1:1)*(i.value===!0?1:-1)),N=$(0),I=$(!1),J=$(!1),ge=$(F.value*b.value),ie=p(()=>i.value===!0?"left":"right"),oe=p(()=>h.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:F.value:0),be=p(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(i.value?"R":"L")!==-1||x.platform.is.ios===!0&&n.isContainer.value===!0),ue=p(()=>e.overlay===!1&&h.value===!0&&y.value===!1),Le=p(()=>e.overlay===!0&&h.value===!0&&y.value===!1),Ie=p(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&I.value===!1?" hidden":"")),a=p(()=>({backgroundColor:`rgba(0,0,0,${N.value*.4})`})),r=p(()=>i.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),t=p(()=>i.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),g=p(()=>{const l={};return n.header.space===!0&&r.value===!1&&(be.value===!0?l.top=`${n.header.offset}px`:n.header.space===!0&&(l.top=`${n.header.size}px`)),n.footer.space===!0&&t.value===!1&&(be.value===!0?l.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(l.bottom=`${n.footer.size}px`)),l}),o=p(()=>{const l={width:`${F.value}px`,transform:`translateX(${ge.value}px)`};return y.value===!0?l:Object.assign(l,g.value)}),T=p(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),O=p(()=>`q-drawer q-drawer--${e.side}`+(J.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(f.value===!0?" q-drawer--dark q-dark":"")+(I.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${G.value===!0?"mini":"standard"}`+(be.value===!0||ue.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(r.value===!0?" q-drawer--top-padding":""))),ce=p(()=>{const l=x.lang.rtl===!0?e.side:ie.value;return[[Pe,S,void 0,{[l]:!0,mouse:!0}]]}),D=p(()=>{const l=x.lang.rtl===!0?ie.value:e.side;return[[Pe,E,void 0,{[l]:!0,mouse:!0}]]}),Ke=p(()=>{const l=x.lang.rtl===!0?ie.value:e.side;return[[Pe,E,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){ct(y,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}V(y,l=>{l===!0?(A=h.value,h.value===!0&&le(!1)):e.overlay===!1&&e.behavior!=="mobile"&&A!==!1&&(h.value===!0?(R(0),Y(0),_e()):ye(!1))}),V(()=>e.side,(l,_)=>{n.instances[_]===ne&&(n.instances[_]=void 0,n[_].space=!1,n[_].offset=0),n.instances[l]=ne,n[l].size=F.value,n[l].space=ue.value,n[l].offset=oe.value}),V(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),V(()=>e.behavior+e.breakpoint,de),V(n.isContainer,l=>{h.value===!0&&P(l!==!0),l===!0&&de()}),V(n.scrollbarWidth,()=>{R(h.value===!0?0:void 0)}),V(oe,l=>{te("offset",l)}),V(ue,l=>{s("onLayout",l),te("space",l)}),V(i,()=>{R()}),V(F,l=>{R(),Ne(e.miniToOverlay,l)}),V(()=>e.miniToOverlay,l=>{Ne(l,F.value)}),V(()=>x.lang.rtl,()=>{R()}),V(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(se(),n.animate())}),V(G,l=>{s("miniState",l)});function R(l){l===void 0?Ve(()=>{l=h.value===!0?0:F.value,R(b.value*l)}):(n.isContainer.value===!0&&i.value===!0&&(y.value===!0||Math.abs(l)===F.value)&&(l+=b.value*n.scrollbarWidth.value),ge.value=l)}function Y(l){N.value=l}function he(l){const _=l===!0?"remove":n.isContainer.value!==!0?"add":"";_!==""&&document.body.classList[_]("q-body--drawer-toggle")}function se(){d!==null&&clearTimeout(d),Q.proxy&&Q.proxy.$el&&Q.proxy.$el.classList.add("q-drawer--mini-animate"),J.value=!0,d=setTimeout(()=>{d=null,J.value=!1,Q&&Q.proxy&&Q.proxy.$el&&Q.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function S(l){if(h.value!==!1)return;const _=F.value,H=qe(l.distance.x,0,_);if(l.isFinal===!0){H>=Math.min(75,_)===!0?ye():(n.animate(),Y(0),R(b.value*_)),I.value=!1;return}R((x.lang.rtl===!0?i.value!==!0:i.value)?Math.max(_-H,0):Math.min(0,H-_)),Y(qe(H/_,0,1)),l.isFirst===!0&&(I.value=!0)}function E(l){if(h.value!==!0)return;const _=F.value,H=l.direction===e.side,Ae=(x.lang.rtl===!0?H!==!0:H)?qe(l.distance.x,0,_):0;if(l.isFinal===!0){Math.abs(Ae)<Math.min(75,_)===!0?(n.animate(),Y(1),R(0)):le(),I.value=!1;return}R(b.value*Ae),Y(qe(1-Ae/_,0,1)),l.isFirst===!0&&(I.value=!0)}function _e(){P(!1),he(!0)}function te(l,_){n.update(e.side,l,_)}function ct(l,_){l.value!==_&&(l.value=_)}function Ne(l,_){te("size",l===!0?e.miniWidth:_)}return n.instances[e.side]=ne,Ne(e.miniToOverlay,F.value),te("space",ue.value),te("offset",oe.value),e.showIfAbove===!0&&e.modelValue!==!0&&h.value===!0&&e["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!0),Te(()=>{s("onLayout",ue.value),s("miniState",G.value),A=e.showIfAbove===!0;const l=()=>{(h.value===!0?W:ae)(!1,!0)};if(n.totalWidth.value!==0){Ve(l);return}m=V(n.totalWidth,()=>{m(),m=void 0,h.value===!1&&e.showIfAbove===!0&&y.value===!1?ye(!1):l()})}),At(()=>{m!==void 0&&m(),d!==null&&(clearTimeout(d),d=null),h.value===!0&&_e(),n.instances[e.side]===ne&&(n.instances[e.side]=void 0,te("size",0),te("offset",0),te("space",!1))}),()=>{const l=[];y.value===!0&&(e.noSwipeOpen===!1&&l.push(lt(K("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ce.value)),l.push(je("div",{ref:"backdrop",class:Ie.value,style:a.value,"aria-hidden":"true",onClick:le},void 0,"backdrop",e.noSwipeBackdrop!==!0&&h.value===!0,()=>Ke.value)));const _=G.value===!0&&C.mini!==void 0,H=[K("div",{...q,key:""+_,class:[T.value,q.class]},_===!0?C.mini():We(C.default))];return e.elevated===!0&&h.value===!0&&H.push(K("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(je("aside",{ref:"content",class:O.value,style:o.value},H,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>D.value)),K("div",{class:"q-drawer-container"},l)}}});const Ht=$t({__name:"MainHeader",emits:["reLogin"],setup(e,{emit:C}){const s=Ce(),q=String("https://aa.dllib.ru/tauth/"),Q=C,x=$(!1),f=z("AccountList"),P=z("curAccount");function B(){x.value=!x.value}function v(){pe.post(String("https://aa.dllib.ru/tapi/")+"api/test.php",{params:{method:"test"}}).then(n=>{var A;(A=n==null?void 0:n.data)!=null&&A.result}).catch(n=>{s.notify(xe(n))})}return(n,A)=>(w(),re(me,null,[c(ft,{elevated:""},{default:u(()=>[c(Wt,null,{default:u(()=>[c(Xe,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:B}),c(Gt,null,{default:u(()=>A[3]||(A[3]=[U(" GraphTools ")])),_:1}),A[4]||(A[4]=we("div",{style:{margin:"auto",color:"red"}},"* \u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 *",-1)),k(s).platform.is.desktop?(w(),M(Ot,{key:0,"inline-label":"",class:"bg-primary text-white shadow-2",align:"center"},{default:u(()=>[c(Xe,{label:"test",onClick:A[0]||(A[0]=d=>v())}),k(f)&&k(f).some(d=>d.authType!=="default")?(w(),M(ot,{key:0,onOnSelectAccount:A[1]||(A[1]=d=>Q("reLogin"))})):(w(),M(ut,{key:1}))]),_:1})):(w(),M(De,{key:1,locIcon:k(q)+k(P).Avatar.src,grade:k(Ue).self.grade,onClick:B},null,8,["locIcon","grade"]))]),_:1})]),_:1}),c(Rt,{modelValue:x.value,"onUpdate:modelValue":A[2]||(A[2]=d=>x.value=d),"show-if-above":"",behavior:"default",bordered:"",dark:!0},{default:u(()=>[c(Ut)]),_:1},8,["modelValue"])],64))}}),ba={__name:"MidLayout",emits:["reLogin"],setup(e,{emit:C}){const s=Ce(),q=String("https://aa.dllib.ru/tapi/"),Q=String("https://aa.dllib.ru/tauth/"),x=Ge();z("progress");const f=z("isOptionsLoaded"),P=C,B=$([]);X("AccountList",B);const v=$({settings:{}});X("curAccount",v);const n=$({});X("AccSets",n);const A=$([]);X("AccSetList",A);const d=$([]);X("ServerGroupList",d);function m(){let i=B.value.map(b=>{const N=A.value.find(I=>I.accountId===b.id);return N?{...b,settings:N}:b});B.value=i.sort((b,N)=>new Date(N.visitedAt)-new Date(b.visitedAt))}const y=$(0);X("selCategId",y);const G=$(null);X("selCategNode",G);const F=$([]);X("ProfLvls",F);const h=$([{id:2,label:"\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C",url:"login/telegram/login.php",img:"/img/auth/telegram.svg"},{id:3,label:"MailRu",url:"login/mailru/login.php",img:"/img/auth/mailru.svg"},{id:4,label:"Discord",url:"login/discord/login.php",img:"/img/auth/discord.svg"},{id:4,label:"V\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435",url:"login/vkontakte/login.php",img:"/img/auth/vkontakte.svg"}]);X("authTypes",h);const L=$(null);X("CategoriesList",L);const W=$([]);X("expandedCategNode",W);const ae=$(!1);X("categMode",ae),X("selectOptionsStyle",{backgroundColor:"rgb(181 238 8 / 93%)",color:"#4B3A23"});function le(){pe.post(q+"api/options.php",{params:{method:"getMain"}}).then(i=>{var b,N,I,J,ge,ie,oe;if(!((b=i==null?void 0:i.data)!=null&&b.result))throw new Error;d.value=(J=(I=(N=i==null?void 0:i.data)==null?void 0:N.data)==null?void 0:I.ServerGroupList)!=null?J:[],F.value=(oe=(ie=(ge=i==null?void 0:i.data)==null?void 0:ge.data)==null?void 0:ie.ProfLvls)!=null?oe:[],ke()}).catch(i=>{s.notify(xe(i))})}function ke(){pe.post(Q+"api/account.php",{params:{method:"list"}}).then(i=>{var N,I;if(!((N=i==null?void 0:i.data)!=null&&N.result))throw new Error;let b=(I=i==null?void 0:i.data)==null?void 0:I.data;v.value=b.find(J=>J.id===ze.self.accountId()),B.value=b.filter(J=>J.authType!=="default"),ve()}).catch(i=>{console.error(i),s.notify(xe(i))})}function ve(){pe.post(q+"api/settings.php",{params:{method:"get"}}).then(i=>{var b,N,I;if(!((b=i==null?void 0:i.data)!=null&&b.result))throw new Error;n.value=(N=i==null?void 0:i.data)==null?void 0:N.data,v.value.settings=(I=i==null?void 0:i.data)==null?void 0:I.data,Ue.self=new Ue(i.data.data),ne()}).catch(i=>{s.notify(xe(i))})}function ne(){pe.post(q+"api/settings.php",{params:{method:"list",ids:B.value.map(i=>i.id)}}).then(i=>{var b,N,I;if(!((b=i==null?void 0:i.data)!=null&&b.result))throw new Error;A.value=(I=(N=i==null?void 0:i.data)==null?void 0:N.data)!=null?I:[],m(),f.value=!0}).catch(i=>{s.notify(xe(i))})}return V(x,i=>{gt.set("lastPath",i.path)}),Qt(()=>{console.log("midLayout BeforeMount")}),Te(()=>{le()}),(i,b)=>{const N=It("router-view");return k(f)?(w(),M(dt,{key:0,view:"lHh Lpr lFf"},{default:u(()=>[c(Ht,{onReLogin:b[0]||(b[0]=I=>P("reLogin"))}),v.value?(w(),M(st,{key:0},{default:u(()=>[k(f)?(w(),M(N,{key:0})):j("",!0),j("",!0)]),_:1})):j("",!0),c(vt,null,{default:u(()=>b[2]||(b[2]=[we("div",{class:"footer"},[U("\xA9 "),we("a",{href:"https://vk.com/roman_chubich",target:"_blank"},"\u0413\u0440\u0430\u0444"),U(" * "),we("a",{href:"https://github.com/symphograph/ArcheAgeTools_Frontend",target:"_blank"},"Github"),U(" * \u0428\u0430\u0435\u0434\u0430 ")],-1)])),_:1})]),_:1})):j("",!0)}}};export{ba as default};

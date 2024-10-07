import{Q as ye}from"./QLinearProgress.87b14ffb.js";import"./QScrollArea.34a033e9.js";import{api as ie}from"./axios.84dd43a9.js";import{P as J}from"./LocalStorage.fb478afd.js";import{u as ge}from"./use-meta.946c3654.js";import{u as le}from"./use-quasar.bc7896a7.js";import{i as b,r as I,n as f,t as $,G as u,q as V,F as G,O as oe,J as s,Q as te,P as c,f as n,L as be,R as _e,H as F,I as A,bf as ke,b as Pe,bd as ne,a3 as he,c as k,p as O,w as Z,o as re,be as Se,l as T,bg as ue,S as ve,U as Ie,V as Te,h as W,a4 as xe,g as Le,aM as ze,k as Fe,B as Ve,C as we,ab as $e,aQ as Re,as as ce,ak as qe,N as Ce,X as Oe}from"./index.85a18687.js";import{Q as X,I as me}from"./ItemIcon.23b1ef6d.js";import{N as ae,Z as Qe,a as Be,S as Me}from"./SalaryCard.cb2f7682.js";import{b as Y,Q as U,a as z}from"./position-engine.fab5a7b7.js";import{Q as pe,u as Ne,a as Ze}from"./QSelect.8eed0032.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import{D as De}from"./DialogWindow.aef90c80.js";import{n as de}from"./myFuncts.325243df.js";import{Q as Ae}from"./QList.559d0f30.js";import{P as ee}from"./PriceImagerComponent.79c11853.js";import{L as Ue}from"./LostList.d74c1e4e.js";import"./QScrollObserver.75ce28c9.js";import"./TouchPan.a58a75fc.js";import"./selection.a1f2ef76.js";import"./format.959830d0.js";import"./QMenu.a0aa64e9.js";import"./price.2525409f.js";const je=["src"],Ee=["src"],Je={__name:"TypeSelect",setup(l){const v=b("selectedTypes"),i=I("Input"),o=b("packTypes"),_=b("selectOptionsStyle");return(g,d)=>(f(),$(pe,{options:s(o),multiple:"",modelValue:s(v),"onUpdate:modelValue":d[0]||(d[0]=m=>Pe(v)?v.value=m:null),"option-label":"name","option-value":"id","map-options":"",label:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438","display-value":"",borderless:"","popup-content-style":s(_),class:ne(i.value),onFocus:d[1]||(d[1]=m=>i.value="Input InputActive"),onBlur:d[2]||(d[2]=m=>i.value="Input")},{selected:u(()=>[(f(!0),V(G,null,oe(s(v),m=>(f(),$(te,{key:m,size:"2em"},{default:u(()=>[c("img",{src:"/img/packtypes/"+m.id+".png"},null,8,je)]),_:2},1024))),128))]),option:u(({itemProps:m,opt:a,selected:p,toggleOption:q})=>[n(Y,be(_e(m)),{default:u(()=>[n(U,{avatar:""},{default:u(()=>[n(te,null,{default:u(()=>[c("img",{src:"/img/packtypes/"+a.id+".png"},null,8,Ee)]),_:2},1024)]),_:2},1024),n(U,null,{default:u(()=>[n(z,null,{default:u(()=>[F(A(a.name),1)]),_:2},1024)]),_:2},1024),n(U,{side:""},{default:u(()=>[n(ke,{"model-value":p,color:"green","onUpdate:modelValue":P=>q(a)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1040)]),_:1},8,["options","modelValue","popup-content-style","class"]))}};var Ge=H(Je,[["__scopeId","data-v-520cd2f8"]]);const He={__name:"SelectSort",setup(l){const v=b("sortOptions"),i=b("ptSettings"),o=b("selectOptionsStyle"),_=I("Input");return(g,d)=>(f(),$(pe,{options:s(v),modelValue:s(i).sort,"onUpdate:modelValue":d[0]||(d[0]=m=>s(i).sort=m),"map-options":"","emit-value":"",borderless:"",label:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E","popup-content-style":s(o),class:ne(_.value),onFocus:d[1]||(d[1]=m=>_.value="Input InputActive"),onBlur:d[2]||(d[2]=m=>_.value="Input")},null,8,["options","modelValue","popup-content-style","class"]))}};var Ke=H(He,[["__scopeId","data-v-10cb226d"]]);const We={__name:"SideButtons",emits:["sideSelected"],setup(l,{emit:v}){const i=b("ptSettings"),o=[{label:"\u0417\u0430\u043F\u0430\u0434",value:1},{label:"\u0421\u0435\u0432\u0435\u0440",value:3},{label:"\u0412\u043E\u0441\u0442\u043E\u043A",value:2}],_=v;function g(d){i.value.side=d,_("sideSelected")}return(d,m)=>(f(),V(G,null,oe(o,a=>n(ae,{key:a.value,label:a.label,active:s(i).side===a.value,imgBtn:"/img/side/"+a.value+".png",onClick:p=>g(a.value)},null,8,["label","active","imgBtn","onClick"])),64))}};const Xe={class:"menuArea"},Ye={class:"menuRow",style:{"justify-content":"space-evenly"}},et={class:"sideBtnCard"},tt={style:{display:"flex"}},at={style:{display:"flex"}},lt={class:"menuRow"},ot={class:"menuSection"},nt={class:"menuSection"},rt={__name:"PackMenu",emits:["sideSelected"],setup(l,{emit:v}){const i=le(),o=String("https://aa.dllib.ru/be/"),_=he();I("Input");const g=b("curAccount"),d=b("packList"),m=b("Lost"),a=b("ptSettings"),p=b("progress"),q=b("disabled"),P=I({}),Q=I([]),C=k(()=>{if(!Object.keys(P.value).length||!a.value.side)return[{id:0,name:"\u0412\u0441\u0435"}];let r=[...P.value[a.value.side]];return r.unshift({id:0,name:"\u0412\u0441\u0435",ZonesTo:Q.value[a.value.side]}),r});O("zonesFrom",C);const R=k(()=>{if(!C.value.length||!a.value.side)return[{id:0,name:"\u0412\u0441\u0435"}];let r=[...C.value];return r=r.find(y=>y.id===a.value.zoneFromId),!r||!r.ZonesTo?[]:r.ZonesTo});O("zonesTo",R);const h=b("currencyPrices");Z(()=>a.value.zoneFromId,()=>{if(a.value.zoneFromId&&R.value)return a.value.zoneFromId===a.value.zoneToId&&(a.value.zoneToId=R.value[0].id),R.value.length===2&&(a.value.zoneToId=R.value[1].id),!0;a.value.zoneToId=0}),Z(()=>a.value.addProfit,()=>{m.value=[],a.value.addProfit&&!p.value&&x()}),Z(()=>a.value.side,()=>{a.value.side&&(a.value.zoneFromId=0,a.value.zoneToId=0,x())}),re(()=>{j()});function w(){if(!g.value.settings.serverGroupId)return a.value.addProfit=!1,D(),!1;if(!a.value.side)return i.notify({color:"negative",position:"center",message:"\u041C\u0430\u0442\u0435\u0440\u0438\u043A \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D",icon:"report_problem",timeout:100,closeBtn:"x"}),!1;a.value.addProfit=!a.value.addProfit,a.value.addProfit&&(a.value.sort="byProfit")}function D(){i.dialog({component:De,componentProps:{text:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D.<br>\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438?",okBtnText:"\u0412 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",cancelBtnText:"\u041D\u0435 \u0441\u0435\u0439\u0447\u0430\u0441"},cancel:!0,persistent:!0}).onOk(()=>{}).onOk(()=>{_.push("/account")}).onCancel(()=>{}).onDismiss(()=>{})}function x(){p.value||(p.value=!0,ie.post(o+"api/pack.php",{params:{method:"list",side:a.value.side,addProfit:a.value.addProfit,siol:a.value.siol}}).then(r=>{var y,L,t,e,S,B,N,K,M,E;if(!((y=r==null?void 0:r.data)!=null&&y.result))throw new Error;d.value=(e=(t=(L=r==null?void 0:r.data)==null?void 0:L.data)==null?void 0:t.Packs)!=null?e:[],m.value=(N=(B=(S=r==null?void 0:r.data)==null?void 0:S.data)==null?void 0:B.Lost)!=null?N:[],h.value=(E=(M=(K=r==null?void 0:r.data)==null?void 0:K.data)==null?void 0:M.currencyPrices)!=null?E:[]}).catch(r=>{i.notify(de(r)),d.value=[],m.value=[]}).finally(()=>{p.value=!1}))}function j(){ie.post(o+"api/options.php",{params:{method:"getZones"}}).then(r=>{var y,L,t,e,S,B,N;if(!((y=r==null?void 0:r.data)!=null&&y.result))throw new Error;Q.value=(e=(t=(L=r==null?void 0:r.data)==null?void 0:L.data)==null?void 0:t.allZonesTo)!=null?e:[],P.value=(N=(B=(S=r==null?void 0:r.data)==null?void 0:S.data)==null?void 0:B.zonesFrom)!=null?N:[]}).catch(r=>{i.notify(de(r,"\u041E\u0439! Zones \u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 :(")),P.value={}})}return(r,y)=>(f(),V("div",Xe,[c("div",Ye,[c("div",et,[n(We)]),y[4]||(y[4]=c("h1",null,"\u041F\u0430\u043A\u0438 8.0",-1)),c("div",tt,[n(Se,{modelValue:s(a).ratePercent,"onUpdate:modelValue":y[0]||(y[0]=L=>s(a).ratePercent=L),class:"Input",loading:s(p),dense:"",style:{width:"9em",height:"3em",margin:"1em"},suffix:"%",borderless:"",type:"number",step:"5",max:"130",min:"50"},null,8,["modelValue","loading"]),n(ae,{label:"\u0421\u0438\u043E\u043B\u044C",active:s(a).siol,imgBtn:"/img/siol.png",onClick:y[1]||(y[1]=L=>s(a).siol=!s(a).siol)},null,8,["active"])]),c("div",at,[n(Ge),n(ae,{label:"+\u041F\u0440\u043E\u0444\u0438\u0442",active:s(a).addProfit,imgBtn:"/img/profit.png",isDisabled:!s(g).settings.serverGroupId,toolText:`\u0420\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u0438\u0431\u044B\u043B\u044C.<br>
                    \u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043B\u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438 \u0438 \u0446\u0435\u043D\u044B \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445, \u044D\u0442\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u0431\u0435\u0441\u043F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u043E\u043F\u0446\u0438\u044F`,onOnClick:w},null,8,["active","isDisabled"])])]),c("div",lt,[c("div",ot,[c("div",null,[s(a).side?s(q)?(f(),$(X,{key:1},{default:u(()=>y[6]||(y[6]=[F("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u044B")])),_:1})):T("",!0):(f(),$(X,{key:0},{default:u(()=>y[5]||(y[5]=[F("\u041C\u0430\u0442\u0435\u0440\u0438\u043A \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D")])),_:1})),Object.keys(P.value).length?(f(),$(Qe,{key:2})):T("",!0),Object.keys(P.value).length?(f(),$(Be,{key:3})):T("",!0)]),c("div",null,[c("div",null,[n(ue,{modelValue:s(a).condition,"onUpdate:modelValue":y[2]||(y[2]=L=>s(a).condition=L),label:"\u0417\u0440\u0435\u043B\u044B\u0435",val:1},null,8,["modelValue"])]),c("div",null,[n(ue,{modelValue:s(a).condition,"onUpdate:modelValue":y[3]||(y[3]=L=>s(a).condition=L),label:"\u041F\u0440\u043E\u0442\u0443\u0445\u0448\u0438\u0435",val:0},null,8,["modelValue"])])])]),c("div",nt,[n(Ke)])])]))}};var st=H(rt,[["__scopeId","data-v-6603c6a2"]]);const it=["horizontal","vertical","cell","none"];var ut=ve({name:"QMarkupTable",props:{...Ie,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:l=>it.includes(l)}},setup(l,{slots:v}){const i=Le(),o=Te(l,i.proxy.$q),_=k(()=>`q-markup-table q-table__container q-table__card q-table--${l.separator}-separator`+(o.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(l.dense===!0?" q-table--dense":"")+(l.flat===!0?" q-table--flat":"")+(l.bordered===!0?" q-table--bordered":"")+(l.square===!0?" q-table--square":"")+(l.wrapCells===!1?" q-table--no-wrap":""));return()=>W("div",{class:_.value},[W("table",{class:"q-table"},xe(v.default))])}});function ct(l,v){return W("div",l,[W("table",{class:"q-table"},v)])}const dt={list:Ae,table:ut},vt=["list","table","__qtable"];var mt=ve({name:"QVirtualScroll",props:{...Ne,type:{type:String,default:"list",validator:l=>vt.includes(l)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:ze},setup(l,{slots:v,attrs:i}){let o;const _=I(null),g=k(()=>l.itemsSize>=0&&l.itemsFn!==void 0?parseInt(l.itemsSize,10):Array.isArray(l.items)?l.items.length:0),{virtualScrollSliceRange:d,localResetVirtualScroll:m,padVirtualScroll:a,onVirtualScrollEvt:p}=Ze({virtualScrollLength:g,getVirtualScrollTarget:R,getVirtualScrollEl:C}),q=k(()=>{if(g.value===0)return[];const x=(j,r)=>({index:d.value.from+r,item:j});return l.itemsFn===void 0?l.items.slice(d.value.from,d.value.to).map(x):l.itemsFn(d.value.from,d.value.to-d.value.from).map(x)}),P=k(()=>"q-virtual-scroll q-virtual-scroll"+(l.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(l.scrollTarget!==void 0?"":" scroll")),Q=k(()=>l.scrollTarget!==void 0?{}:{tabindex:0});Z(g,()=>{m()}),Z(()=>l.scrollTarget,()=>{w(),h()});function C(){return _.value.$el||_.value}function R(){return o}function h(){o=Re(C(),l.scrollTarget),o.addEventListener("scroll",p,ce.passive)}function w(){o!==void 0&&(o.removeEventListener("scroll",p,ce.passive),o=void 0)}function D(){let x=a(l.type==="list"?"div":"tbody",q.value.map(v.default));return v.before!==void 0&&(x=v.before().concat(x)),qe(v.after,x)}return Fe(()=>{m()}),re(()=>{h()}),Ve(()=>{h()}),we(()=>{w()}),$e(()=>{w()}),()=>{if(v.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return l.type==="__qtable"?ct({ref:_,class:"q-table__middle "+P.value},D()):W(dt[l.type],{...i,ref:_,class:[i.class,P.value],...Q.value},D)}}});const pt={class:"PackMatsToolTip"},ft={__name:"MatIcons",props:{mats:I([])},setup(l){return(v,i)=>(f(),V("div",pt,[(f(!0),V(G,null,oe(l.mats,o=>(f(),$(me,{key:o.itemId,grade:o.grade?o.grade:o.Item.grade,icon:o.Item.icon,amount:o.need},null,8,["grade","icon","amount"]))),128))]))}};var yt=H(ft,[["__scopeId","data-v-30cdf4b3"]]);const gt={class:"ptCol1",colspan:"2"},bt=["src"],_t={key:0},kt={key:1},Pt={style:{"text-align":"right"}},ht={__name:"PackRow",props:{pRoute:I(null),idx:Number},setup(l){const v=le(),i=l,o=b("ptSettings"),_=b("progress"),g=b("currencyPrices"),d=k(()=>o.value.condition?i.pRoute.Freshness.bestLvl:i.pRoute.Freshness.worstLvl),m=k(()=>i.pRoute.Freshness.FreshLvls[d.value].percent),a=k(()=>Math.round(i.pRoute.dbPrice/130*100)),p=k(()=>o.value.siol&&i.pRoute.currencyId===500?5:0),q=k(()=>a.value*(o.value.ratePercent/100)*(1+p.value/100)),P=k(()=>{let h=q.value*(1+m.value/100);return h*=1.02,i.pRoute.currencyId!==500&&(h/=100),Math.round(h)}),Q=k(()=>{if(i.pRoute.currencyId===500)return P.value;let h=P.value*g.value[i.pRoute.currencyId].price*.9;return Math.round(h)}),C=k(()=>Q.value-i.pRoute.Pack.craftPrice),R=k(()=>Math.round(C.value/i.pRoute.Pack.laborNeed));return(h,w)=>(f(),V(G,null,[T("",!0),c("tr",{class:ne(l.idx%2?"prow1":"prow2")},[c("td",gt,[n(Y,{dense:"",to:/item/+l.pRoute.itemId},{default:u(()=>[n(U,{avatar:""},{default:u(()=>[n(X,{anchor:"center right",class:"bg-tooltip no-padding"},{default:u(()=>[n(yt,{mats:l.pRoute.Mats},null,8,["mats"])]),_:1}),n(te,{size:"1.5em",style:{position:"absolute",top:"-0.3em",left:"0.5em","z-index":"99"}},{default:u(()=>[c("img",{src:"/img/packtypes/"+l.pRoute.Pack.typeId+".png",alt:""},null,8,bt)]),_:1}),n(me,{amount:m.value+"%",icon:l.pRoute.Pack.icon,grade:l.pRoute.Pack.grade,size:"60px"},null,8,["amount","icon","grade"])]),_:1}),n(U,{top:""},{default:u(()=>[n(z,{lines:"2"},{default:u(()=>[F(A(l.pRoute.Pack.name),1)]),_:1}),s(v).platform.is.desktop?(f(),$(z,{key:0,caption:""},{default:u(()=>[F(A(l.pRoute.Freshness.name),1)]),_:1})):T("",!0),s(v).platform.is.desktop?T("",!0):(f(),$(z,{key:1,caption:""},{default:u(()=>[F(A(l.pRoute.ZoneFrom.name),1)]),_:1})),s(v).platform.is.desktop?T("",!0):(f(),$(z,{key:2,caption:""},{default:u(()=>[F(A(l.pRoute.ZoneTo.name),1)]),_:1}))]),_:1})]),_:1},8,["to"])]),s(v).platform.is.desktop?(f(),V("td",_t,[n(z,{caption:""},{default:u(()=>[F(A(l.pRoute.ZoneFrom.name),1)]),_:1})])):T("",!0),s(v).platform.is.desktop?(f(),V("td",kt,[n(z,{caption:""},{default:u(()=>[F(A(l.pRoute.ZoneTo.name),1)]),_:1})])):T("",!0),c("td",Pt,[n(z,null,{default:u(()=>[n(X,{class:"bg-tooltip"},{default:u(()=>[n(Me,{siol:s(o).siol,ratePercent:s(o).ratePercent,freshPercent:m.value,dbPrice:l.pRoute.dbPrice,currencyId:l.pRoute.currencyId,goldSalary:Q.value,factoryPrice:q.value,flatSalary:a.value,finalSalary:P.value},null,8,["siol","ratePercent","freshPercent","dbPrice","currencyId","goldSalary","factoryPrice","flatSalary","finalSalary"])]),_:1}),n(ee,{price:P.value,"currency-id":l.pRoute.currencyId},null,8,["price","currency-id"])]),_:1}),s(o).addProfit&&!s(_)?(f(),V(G,{key:0},[n(z,null,{default:u(()=>[n(Ce,{name:"add",color:"green"}),n(ee,{price:C.value,"currency-id":500},null,8,["price"])]),_:1}),n(z,{caption:""},{default:u(()=>[n(ee,{price:R.value,"currency-id":500},null,8,["price"]),w[2]||(w[2]=F("/ ")),w[3]||(w[3]=c("img",{style:{width:"1em"},src:"/img/valuta/2.png"},null,-1))]),_:1})],64)):T("",!0)])],2)],64))}};var St=H(ht,[["__scopeId","data-v-b3aca51a"]]);const It={key:0,style:{width:"100%"}},Tt={style:{position:"sticky",top:"0"}},xt={key:0,style:{"min-width":"100px","font-size":"12px","align-content":"end"}},Lt={style:{display:"flex","justify-content":"end"}},zt={class:"thead-sticky",style:{position:"sticky",top:"0"}},Ft={key:0,style:{"min-width":"100px","font-size":"12px","align-content":"end"}},Vt={style:{display:"flex","justify-content":"end"}},wt={__name:"PackList",setup(l){const v=b("packList"),i=b("Lost"),o=b("ptSettings"),_=b("selectedTypes"),g=b("progress"),d=k(()=>_.value.map(t=>t.id)),m=b("currencyPrices"),a=I([]),p=k(()=>{if(!d.value.length)return[];let t=[...v.value];return t=t.filter(e=>d.value.includes(e.Pack.typeId)),o.value.zoneFromId&&(t=t.filter(e=>e.zoneFromId===o.value.zoneFromId)),o.value.zoneToId&&(t=t.filter(e=>e.zoneToId===o.value.zoneToId)),t}),q=(t,e)=>t.Pack.typeId-e.Pack.typeId,P=(t,e)=>t.Pack.name.localeCompare(e.Pack.name,"ru"),Q=(t,e)=>t.ZoneFrom.name.localeCompare(e.ZoneFrom.name,"ru"),C=(t,e)=>t.ZoneTo.name.localeCompare(e.ZoneTo.name,"ru"),R=(t,e)=>q(t,e)||h(t,e),h=(t,e)=>P(t,e)||x(t,e),w=(t,e)=>Q(t,e)||x(t,e),D=(t,e)=>C(t,e)||x(t,e),x=(t,e)=>e.cachedValues.goldSalary-t.cachedValues.goldSalary,j=(t,e)=>e.cachedValues.profitValue-t.cachedValues.profitValue,r=(t,e)=>e.cachedValues.profitPerLabor-t.cachedValues.profitPerLabor;k(()=>{if(!p.value.length)return[];switch(o.value.sort){case"byType":return[...p.value].sort(R);case"byName":return[...p.value].sort(h);case"byFrom":return[...p.value].sort(w);case"byTo":return[...p.value].sort(D);case"byFinalSalary":return[...p.value].sort(x);case"byProfit":return[...p.value].sort(j);case"byProfitPerLabor":return[...p.value].sort(r);default:return p.value}});async function y(){console.log("computeSortedList"),g.value=!0,console.log("progress",g.value),await Oe();const t=p.value.map(S=>(S.cachedValues=L(S),S));let e=[];switch(o.value.sort){case"byType":e=[...t].sort(R);break;case"byName":e=[...t].sort(h);break;case"byFrom":e=[...t].sort(w);break;case"byTo":e=[...t].sort(D);break;case"byFinalSalary":e=[...t].sort(x);break;case"byProfit":e=[...t].sort(j);break;case"byProfitPerLabor":e=[...t].sort(r);break;default:e=t;break}a.value=e||[],g.value=!1,console.log("progress",g.value)}Z([()=>p.value,()=>o.value.sort,()=>o.value.ratePercent,()=>o.value.siol,()=>o.value.condition,()=>m.value],()=>{y()},{immediate:!0});function L(t){const e=o.value.condition?t.Freshness.bestLvl:t.Freshness.worstLvl,S=t.Freshness.FreshLvls[e].percent,B=Math.round(t.dbPrice/130*100),N=o.value.siol&&t.currencyId===500?5:0,K=B*(o.value.ratePercent/100)*(1+N/100);let M=K*(1+S/100)*1.02;t.currencyId!==500&&(M/=100),M=Math.round(M);let E=M;t.currencyId!==500&&(E=Math.round(M*m.value[t.currencyId].price*.9));const se=E-t.Pack.craftPrice,fe=Math.round(se/t.Pack.laborNeed);return{freshPercent:S,flatSalary:B,siolPercent:N,factoryPrice:K,finalSalary:M,goldSalary:E,profitValue:se,profitPerLabor:fe}}return(t,e)=>(f(),V(G,null,[s(v).length>1e8?(f(),V("table",It,[c("thead",Tt,[c("tr",null,[e[2]||(e[2]=c("th",{style:{"max-width":"2em","text-align":"left"}},null,-1)),e[3]||(e[3]=c("th",{style:{"text-align":"left"}},null,-1)),e[4]||(e[4]=c("th",{style:{"max-width":"150px"},class:"mobile-hide"}," \u041E\u0442\u043A\u0443\u0434\u0430 ",-1)),e[5]||(e[5]=c("th",{class:"mobile-hide"}," \u041A\u0443\u0434\u0430 ",-1)),e[6]||(e[6]=c("th",{style:{"min-width":"100px"}}," \u0412\u044B\u0440\u0443\u0447\u043A\u0430 ",-1)),s(o).addProfit?(f(),V("th",xt,[c("div",Lt,[n(Y,null,{default:u(()=>[n(U,null,{default:u(()=>[n(z,null,{default:u(()=>e[0]||(e[0]=[F("\u041F\u0440\u0438\u0431\u044B\u043B\u044C")])),_:1}),n(z,{caption:""},{default:u(()=>e[1]||(e[1]=[F("\u043D\u0430 1\u043E\u0440")])),_:1})]),_:1})]),_:1})])])):T("",!0)])]),c("tbody",null,[T("",!0)])])):T("",!0),n(mt,{type:"table",items:a.value,"virtual-scroll-item-size":"79","virtual-scroll-slice-size":"79","virtual-scroll-sticky-size-start":48,"virtual-scroll-sticky-size-end":132},{before:u(()=>[c("thead",zt,[c("tr",null,[e[9]||(e[9]=c("th",{style:{"max-width":"2em","text-align":"left"}},null,-1)),e[10]||(e[10]=c("th",{style:{"text-align":"left"}},null,-1)),e[11]||(e[11]=c("th",{style:{"max-width":"150px"},class:"mobile-hide"}," \u041E\u0442\u043A\u0443\u0434\u0430 ",-1)),e[12]||(e[12]=c("th",{class:"mobile-hide"}," \u041A\u0443\u0434\u0430 ",-1)),s(o).addProfit?(f(),V("th",Ft,[c("div",Vt,[n(Y,null,{default:u(()=>[n(U,null,{default:u(()=>[n(z,null,{default:u(()=>e[7]||(e[7]=[F("\u041F\u0440\u0438\u0431\u044B\u043B\u044C")])),_:1}),n(z,{caption:""},{default:u(()=>e[8]||(e[8]=[F("\u043D\u0430 1\u043E\u0440")])),_:1})]),_:1})]),_:1})])])):T("",!0)])])]),default:u(({item:S,index:B})=>[(f(),$(St,{pRoute:S,idx:B,key:S.itemId+"_"+S.zoneFromId+"_"+S.zoneToId},null,8,["pRoute","idx"]))]),_:1},8,["items"]),s(i).length?(f(),$(Ue,{key:1,Lost:s(i),msg:`<b>\u0420\u0430\u0441\u0447\u0435\u0442 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0441\u044F.</b><br>
    \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u043D\u0430\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0446\u0435\u043D\u044B.`},null,8,["Lost"])):T("",!0)],64))}};var $t=H(wt,[["__scopeId","data-v-c03c6800"]]);const Rt={class:"content-container"},la={__name:"PackPage",setup(l){le();const v=I([]);O("packList",v);const i=I([]);O("Lost",i);const o=I({siol:!1,side:null,ratePercent:130,condition:0,addProfit:!1,zoneFromId:0,zoneToId:0,sort:"byName"});O("ptSettings",o);const _=I([{label:"\u0422\u0438\u043F",value:"byType"},{label:"\u0418\u043C\u044F \u043F\u0430\u043A\u0430",value:"byName"},{label:"\u041E\u0442\u043A\u0443\u0434\u0430",value:"byFrom"},{label:"\u041A\u0443\u0434\u0430",value:"byTo"},{label:"\u0412\u044B\u0440\u0443\u0447\u043A\u0430",value:"byFinalSalary"},{label:"\u041F\u043E \u043F\u0440\u0438\u0431\u044B\u043B\u0438",value:"byProfit"},{label:"\u041F\u043E \u043F\u0440\u0438\u0431\u044B\u043B\u0438 \u043D\u0430 1 \u041E\u0420",value:"byProfitPerLabor"}]);O("sortOptions",_);const g=I([{id:1,name:"\u041E\u0431\u044B\u0447\u043D\u044B\u0435",checked:!0},{id:6,name:"\u0414\u043B\u044F \u043C\u0435\u0441\u0442\u043D\u044B\u0445",checked:!1},{id:8,name:"\u0417\u0430 \u0414\u0417",checked:!0},{id:2,name:"\u041A\u043E\u043C\u043F\u043E\u0441\u0442",checked:!1},{id:3,name:"\u0421 \u043D\u0430\u0432\u0435\u0441\u0430",checked:!1},{id:4,name:"\u0420\u0430\u0441\u0442\u0432\u043E\u0440\u044B",checked:!1},{id:5,name:"\u0412\u0435\u043A\u0441\u0435\u043B\u044C\u043D\u044B\u0435",checked:!1},{id:7,name:"\u0422\u0440\u043E\u0444\u0435\u0439\u043D\u044B\u0435",checked:!1},{id:9,name:"\u041B\u0430\u0432\u043E\u0447\u043D\u044B\u0435",checked:!1}]);O("selectedTypes",g),Z(g,()=>{J.set("selectedTypes",JSON.stringify(g.value))}),Z(o,()=>{J.set("ptSettings",JSON.stringify(o.value))},{deep:!0});const d=k(()=>!o.value.side||!g.value.length);O("disabled",d);const m=I(!1);O("progress",m),O("packTypes",[{id:1,name:"\u041E\u0431\u044B\u0447\u043D\u044B\u0435",checked:!0},{id:6,name:"\u0414\u043B\u044F \u043C\u0435\u0441\u0442\u043D\u044B\u0445",checked:!1},{id:8,name:"\u0417\u0430 \u0414\u0417",checked:!0},{id:2,name:"\u041A\u043E\u043C\u043F\u043E\u0441\u0442",checked:!1},{id:3,name:"\u0421 \u043D\u0430\u0432\u0435\u0441\u0430",checked:!1},{id:4,name:"\u0420\u0430\u0441\u0442\u0432\u043E\u0440\u044B",checked:!1},{id:5,name:"\u0412\u0435\u043A\u0441\u0435\u043B\u044C\u043D\u044B\u0435",checked:!1},{id:7,name:"\u0422\u0440\u043E\u0444\u0435\u0439\u043D\u044B\u0435",checked:!1},{id:9,name:"\u041B\u0430\u0432\u043E\u0447\u043D\u044B\u0435",checked:!1}]);const p=I({});return O("currencyPrices",p),re(()=>{J.getItem("selectedTypes")&&(g.value=JSON.parse(J.getItem("selectedTypes"))),J.getItem("ptSettings")?o.value=JSON.parse(J.getItem("ptSettings")):o.value.sort="byProfit"}),ge({title:"\u041F\u0430\u043A\u0438",meta:{viewport:{name:"viewport",content:"initial-scale=0.6,width=device-width, user-scalable=yes"}}}),(P,Q)=>(f(),V("div",Rt,[n(st),n(ye,{"animation-speed":200,color:"green",indeterminate:!!m.value},null,8,["indeterminate"]),n($t),T("",!0)]))}};export{la as default};

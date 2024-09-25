import{i as h,r as v,a0 as s,q as S,v as T,a1 as se,Y as l,f as a,a4 as ie,bf as ce,_ as g,$ as F,l as V,a3 as de,Z as H,a6 as y,b as J,bd as ve,p as k,c as u,w as me,o as pe,t as K,ba as O,be as fe,b9 as R}from"./index.be968432.js";import{Q as ye}from"./QLinearProgress.4407f396.js";import{_ as _e,Z as Pe,a as Ie,N as ke,S as ge}from"./SalaryCard.abe2bec8.js";import{api as D}from"./axios.b332e97b.js";import{n as W}from"./myFuncts.cb4da9fc.js";import{u as Se}from"./use-quasar.fb03a9a8.js";import{b as Y,Q as B,a as b}from"./position-engine.c21b03aa.js";import{Q as X}from"./QSelect.9f8f8695.js";import{I as G}from"./ItemIcon.fe913ccd.js";import{_ as ee}from"./plugin-vue_export-helper.21dcd24c.js";import"./QList.94ac3282.js";import"./PriceImagerComponent.f6dd7c48.js";import"./price.8aed5ca0.js";import"./selection.aacd3f71.js";import"./QMenu.6a6c9ff8.js";import"./format.959830d0.js";const ze=["src"],he={__name:"PackSelect",emits:["onSelect"],setup(N,{emit:_}){const m=h("ptSettings"),d=h("filteredPackList"),I=v([...d.value]),e=h("selectedPack"),i=h("selectOptionsStyle");v([]);const p=_;function z(P,r,c){if(P===""){r(()=>{I.value=[...d.value]});return}r(()=>{const x=P.toLowerCase();let L=[...d.value];P&&(L=[...L].filter(j=>j.Pack.name.toLowerCase().indexOf(x)>-1)),I.value=L})}function o(){e.value=null,m.value.zoneFromId=0,m.value.zoneToId=0}return(P,r)=>s(d).length?(S(),T(X,{key:0,options:I.value,modelValue:s(e),"onUpdate:modelValue":[r[0]||(r[0]=c=>J(e)?e.value=c:null),r[1]||(r[1]=c=>p("onSelect"))],"popup-content-style":s(i),"use-input":"","fill-input":"","map-options":"","option-value":"id","option-label":"name","hide-selected":"",onFilter:z},se({label:l(()=>[r[2]||(r[2]=g("jhj"))]),"selected-item":l(()=>[Object.keys(s(e)).length?(S(),T(Y,{key:0,dense:""},{default:l(()=>[a(B,{avatar:""}),a(B,null,{default:l(()=>[a(b,null,{default:l(()=>[g(F(s(e).Pack.name),1)]),_:1}),a(b,{caption:""},{default:l(()=>[g(F(s(e).ZoneFrom.name),1)]),_:1}),a(b,{caption:""},{default:l(()=>[g(F(s(e).ZoneTo.name),1)]),_:1})]),_:1})]),_:1})):V("",!0)]),option:l(c=>[a(Y,de(c.itemProps,{dense:""}),{default:l(()=>[a(B,{avatar:""},{default:l(()=>[a(H,{size:"1.5em",style:{position:"absolute",top:"-0.3em",left:"0.5em","z-index":"99"}},{default:l(()=>[y("img",{src:"/img/packtypes/"+c.opt.Pack.typeId+".png",alt:""},null,8,ze)]),_:2},1024),a(G,{icon:c.opt.Pack.icon,grade:c.opt.Pack.grade,size:"60px"},null,8,["icon","grade"])]),_:2},1024),a(B,null,{default:l(()=>[a(b,null,{default:l(()=>[g(F(c.opt.Pack.name),1)]),_:2},1024),a(b,{caption:""},{default:l(()=>[g(F(c.opt.ZoneFrom.name),1)]),_:2},1024),a(b,{caption:""},{default:l(()=>[g(F(c.opt.ZoneTo.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:2},[s(e)?{name:"prepend",fn:l(()=>[a(G,{icon:s(e).Pack.icon,grade:s(e).Pack.grade,size:"60px"},null,8,["icon","grade"])]),key:"0"}:void 0,s(e)?{name:"append",fn:l(()=>[a(ie,{name:"cancel",onClick:ce(o,["stop","prevent"]),class:"cursor-pointer"})]),key:"1"}:void 0]),1032,["options","modelValue","popup-content-style"])):V("",!0)}};const Fe={__name:"FreshSelect",setup(N){const _=h("selectedFresh"),m=h("selectedPack"),d=v("Input"),I=h("selectOptionsStyle");return(e,i)=>(S(),T(X,{options:s(m).Freshness.FreshLvls,"map-options":"","option-value":"lvl","option-label":"name",borderless:"",dense:"",modelValue:s(_),"onUpdate:modelValue":i[0]||(i[0]=p=>J(_)?_.value=p:null),class:ve(d.value),onFocus:i[1]||(i[1]=p=>d.value="Input InputActive"),onBlur:i[2]||(i[2]=p=>d.value="Input"),"popup-content-style":s(I)},{prepend:l(()=>[a(H,null,{default:l(()=>i[3]||(i[3]=[y("img",{src:"/img/time.png"},null,-1)])),_:1})]),_:1},8,["options","modelValue","class","popup-content-style"]))}};var be=ee(Fe,[["__scopeId","data-v-764a5c61"]]);const Te={class:"paculatorArea"},xe={style:{display:"flex","justify-content":"space-evenly",width:"100%"}},Le={style:{width:"100%",display:"flex","justify-content":"center"}},Ce={style:{display:"flex","justify-content":"space-evenly"}},Ze={__name:"PackCalculator",setup(N){const _=Se(),m=String("https://api.aa.dllib.ru/"),d=v({}),I=v([]),e=v({zoneFromId:0,zoneToId:0,side:0,siol:!1,ratePercent:130});k("ptSettings",e);const i=u(()=>M.value);k("disabled",i);const p=u(()=>{if(!Object.keys(d.value).length||!e.value.side)return[{id:0,name:"\u0412\u0441\u0435"}];let t=[...d.value[e.value.side]];return t.unshift({id:0,name:"\u0412\u0441\u0435",ZonesTo:I.value[e.value.side]}),t});k("zonesFrom",p);const z=u(()=>{if(!p.value.length||!e.value.side)return[{id:0,name:"\u0412\u0441\u0435"}];let t=[...p.value];return t=t.find(n=>n.id===e.value.zoneFromId),!t||!t.ZonesTo?[]:t.ZonesTo});k("zonesTo",z);const o=v(null);k("selectedPack",o);const P=v(null);k("selectedFresh",P);const r=v([]),c=v([]),x=v([]);k("currencyPrices",x);const L=u(()=>{if(!r.value.length)return[];let t=[...r.value];return e.value.zoneFromId?t.filter(n=>n.zoneFromId===e.value.zoneFromId):t}),j=u(()=>{let t=[...L.value];return e.value.zoneToId?t.filter(n=>n.zoneToId===e.value.zoneToId):t});k("filteredPackList",j);const M=v(!1);function te(){D.post(m+"api/options.php",{params:{method:"getZones"}}).then(t=>{var n,f,C,Z,w,Q,$;if(!((n=t==null?void 0:t.data)!=null&&n.result))throw new Error;I.value=(Z=(C=(f=t==null?void 0:t.data)==null?void 0:f.data)==null?void 0:C.allZonesTo)!=null?Z:[],d.value=($=(Q=(w=t==null?void 0:t.data)==null?void 0:w.data)==null?void 0:Q.zonesFrom)!=null?$:[]}).catch(t=>{_.notify(W(t,"\u041E\u0439! Zones \u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 :(")),p.value=[]})}function ae(){M.value=!0,D.post(m+"api/get/packs.php",{params:{side:e.value.side,addProfit:!1}}).then(t=>{var n,f,C,Z,w,Q,$;if(!((n=t==null?void 0:t.data)!=null&&n.result))throw new Error;r.value=(Z=(C=(f=t==null?void 0:t.data)==null?void 0:f.data)==null?void 0:C.Packs)!=null?Z:[],x.value=($=(Q=(w=t==null?void 0:t.data)==null?void 0:w.data)==null?void 0:Q.currencyPrices)!=null?$:[]}).catch(t=>{progress.value=!1,_.notify(W(t,"\u041E\u0439! Packs \u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 :(")),r.value=[],c.value=[]}).finally(()=>{M.value=!1})}function le(){e.value.zoneFromId=o.value.zoneFromId,e.value.zoneToId=o.value.zoneToId,P.value=o.value.Freshness.FreshLvls[o.value.Freshness.bestLvl]}function Ve(){}function ne(){e.value.zoneFromId=0,e.value.zoneToId=0,ae()}u(()=>e.value.condition?o.value.Freshness.bestLvl:o.value.Freshness.worstLvl);const oe=u(()=>P.value.percent),E=u(()=>Math.round(o.value.dbPrice/130*100)),re=u(()=>e.value.siol&&o.value.currencyId===500?5:0),U=u(()=>E.value*(e.value.ratePercent/100)*(1+re.value/100)),A=u(()=>{let t=U.value*(1+oe.value/100);return t*=1.02,o.value.currencyId!==500&&(t/=100),Math.round(t)}),q=u(()=>{if(o.value.currencyId===500)return A.value;let t=A.value*x.value[o.value.currencyId].price*.9;return Math.round(t)}),ue=u(()=>q.value-props.pRoute.Pack.craftPrice);return u(()=>Math.round(ue.value/o.value.Pack.laborNeed)),me(()=>e.value.zoneFromId,()=>{if(e.value.zoneFromId&&z.value)return e.value.zoneFromId===e.value.zoneToId&&(e.value.zoneToId=z.value[0].id),z.value.length===2&&(e.value.zoneToId=z.value[1].id),!0;e.value.zoneToId=0}),pe(()=>{te()}),(t,n)=>(S(),K("div",Te,[a(R,{class:"packCard"},{default:l(()=>[a(O,{horizontal:""},{default:l(()=>[y("div",xe,[a(_e,{onSideSelected:n[0]||(n[0]=f=>ne())})]),y("div",null,[a(Pe,{onOnSelect:n[1]||(n[1]=f=>void 0)}),a(Ie)]),y("div",Le,[a(ke,{active:e.value.siol,imgBtn:"/img/siol.png",onClick:n[2]||(n[2]=f=>e.value.siol=!e.value.siol)},null,8,["active"])])]),_:1}),a(ye,{"animation-speed":200,color:"green",indeterminate:i.value},null,8,["indeterminate"]),a(O,null,{default:l(()=>[j.value.length?(S(),T(he,{key:0,onOnSelect:le})):V("",!0)]),_:1}),o.value?(S(),T(O,{key:0},{default:l(()=>[y("div",Ce,[y("div",null,[a(fe,{modelValue:e.value.ratePercent,"onUpdate:modelValue":n[3]||(n[3]=f=>e.value.ratePercent=f),class:"Input",dense:"",style:{width:"9em",height:"max-content",margin:"0"},suffix:"%",borderless:"",type:"number",step:"5",max:"130",min:"50"},null,8,["modelValue"])]),a(be)])]),_:1})):V("",!0),o.value?(S(),T(O,{key:1},{default:l(()=>[a(ge,{siol:e.value.siol,ratePercent:e.value.ratePercent,freshPercent:P.value.percent,dbPrice:o.value.dbPrice,currencyId:o.value.currencyId,goldSalary:q.value,factoryPrice:U.value,flatSalary:E.value,finalSalary:A.value},null,8,["siol","ratePercent","freshPercent","dbPrice","currencyId","goldSalary","factoryPrice","flatSalary","finalSalary"])]),_:1})):V("",!0)]),_:1}),a(R,{class:"packCard"},{default:l(()=>n[4]||(n[4]=[g("eee")])),_:1})]))}};var we=ee(Ze,[["__scopeId","data-v-7790c0b3"]]);const Qe={class:"WindowArea column"},$e={class:"ItemArea"},Ke={__name:"PackInfoPage",setup(N){return(_,m)=>(S(),K("div",Qe,[m[0]||(m[0]=y("div",{style:{display:"flex","justify-content":"center"}},[y("h1",null,"\u041F\u0430\u043A\u0418\u043D\u0444\u043E")],-1)),y("div",$e,[a(we)])]))}};export{Ke as default};

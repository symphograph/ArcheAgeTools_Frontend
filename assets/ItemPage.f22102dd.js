import{Q as x,a as D,b as R}from"./position-engine.c21b03aa.js";import{Q as bt}from"./QLinearProgress.4407f396.js";import{Q as kt}from"./QScrollArea.b5e345b1.js";import{api as H}from"./axios.b332e97b.js";import{P as ot}from"./LocalStorage.b844722c.js";import{u as j}from"./use-quasar.fb03a9a8.js";import{u as Y,m as nt,i as h,r as C,w as et,o as lt,a0 as f,q as u,v as S,a1 as xt,Y as e,a6 as A,f as t,bf as St,a4 as $t,_ as L,$ as V,l as w,a2 as Lt,a7 as wt,b as Bt,c as z,t as B,F as N,a5 as Z,af as K,U as mt,Z as gt,ab as vt,aH as pt,p as G,b9 as It,ba as ut,be as yt,R as At}from"./index.be968432.js";import{Q as Tt}from"./QSelect.9f8f8695.js";import{I as E,Q as it}from"./ItemIcon.fe913ccd.js";import{n as q,c as Ct,a as tt,e as dt}from"./myFuncts.cb4da9fc.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import{a as at}from"./QExpansionItem.98de9ed8.js";import{Q as st}from"./QList.94ac3282.js";import{p as X,a as rt,b as ct}from"./price.8aed5ca0.js";import{L as Pt}from"./LostList.c1b8f950.js";import{P as Dt}from"./PriceItemInput.10f24817.js";import{P as ft}from"./PriceImagerComponent.f6dd7c48.js";import{_ as Mt}from"./DelBtn.671513d4.js";import{Q as Ut}from"./QImg.6da176f4.js";import{_ as Rt}from"./ServerGroupSelect.d6d78223.js";import{D as Qt}from"./DialogWindow.a6f475df.js";import"./selection.aacd3f71.js";import"./QScrollObserver.6c220ff6.js";import"./TouchPan.291d6ccd.js";import"./format.959830d0.js";import"./QMenu.6a6c9ff8.js";const Vt={style:{width:"40px"}},Ot={__name:"SearchSelect",emits:["iAmSelected"],setup(d,{emit:I}){const s=Y(),b=nt(),c=j(),r=String("https://api.aa.dllib.ru/"),a=h("SearchList"),l=h("selectedItem"),p=C([...a.value]),$=h("Item"),k=h("selCategId");h("selCategNode",null);const v=C(null),m=I;function P(){return $.value&&k.value?$.value.Info.Category.name:"\u0412\u0441\u0435"}function _(){s.params.id=l.value.id,b.push({path:"/item/"+s.params.id}),k.value=l.value.categId,m("iAmSelected")}et(k,()=>{k.value},{deep:!0}),et($,()=>{a.value.length&&s.params.id&&$.value&&(l.value=a.value.find(y=>y.id===$.value.id),k.value=l.value.categId)},{deep:!0});function i(y,T,U){if(y===""){T(()=>{p.value=[...a.value]});return}T(()=>{const W=y.toLowerCase();let Q=[...a.value];y&&(Q=[...Q].filter(O=>O.name.toLowerCase().indexOf(W)>-1)),p.value=Q})}function g(){H.post(r+"api/options.php",{params:{method:"getSearchList"}}).then(y=>{var T,U,W,Q,O;if(!((T=y==null?void 0:y.data)!=null&&T.result))throw new Error;o((W=(U=y==null?void 0:y.data)==null?void 0:U.data)!=null?W:[]),a.value=(O=(Q=y==null?void 0:y.data)==null?void 0:Q.data)!=null?O:[]}).catch(y=>{c.notify(q(y))})}function n(){let y=indexedDB.open("prepData",1);y.onupgradeneeded=function(){let T=y.result;T.objectStoreNames.contains("cachedData")||T.createObjectStore("cachedData",{keyPath:"id"})},y.onerror=function(){console.error("Error",y.error)},y.onsuccess=function(){let Q=y.result.transaction("cachedData","readonly").objectStore("cachedData").get("searchList");Q.onsuccess=O=>{let J=O.target.result;J?a.value=J.content:g()},Q.onerror=O=>{console.log("SearchList \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D")}}}function o(y){let T=indexedDB.open("prepData",1);T.onupgradeneeded=function(){console.log("\u0438\u043D\u0438\u0446\u0438\u043B\u0438\u0430\u0437\u0438\u044F \u0431\u0434");let U=T.result;U.objectStoreNames.contains("cachedData")||U.createObjectStore("cachedData",{keyPath:"id"})},T.onerror=function(){console.error("Error",T.error)},T.onsuccess=function(){let U=T.result;console.log("\u0432\u0438\u0436\u0443 \u0431\u0434");let Q=U.transaction("cachedData","readwrite").objectStore("cachedData"),O={id:"searchList",content:y},J=Q.add(O);J.onsuccess=function(){console.log("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435",J.result)},J.onerror=function(){console.log("\u041E\u0448\u0438\u0431\u043A\u0430",J.error)}}}function M(){l.value=null,k.value=0}return lt(()=>{n()}),(y,T)=>f(a).length?(u(),S(Tt,{key:0,options:p.value,modelValue:f(l),"onUpdate:modelValue":[T[0]||(T[0]=U=>Bt(l)?l.value=U:null),_],"option-label":"name","option-value":"id","map-options":"",filled:"","use-input":"",autocomplete:"off","fill-input":"","hide-selected":"",label:P(),"input-debounce":"0",ref_key:"searchInput",ref:v,onFilter:i,"popup-content-style":{backgroundColor:"rgb(181 238 8 / 97%)"}},xt({option:e(U=>[t(R,Lt(wt(U.itemProps)),{default:e(()=>[t(x,{avatar:""},{default:e(()=>[t(E,{icon:U.opt.icon,grade:U.opt.grade},null,8,["icon","grade"])]),_:2},1024),t(x,null,{default:e(()=>[t(D,null,{default:e(()=>[L(V(U.opt.name),1)]),_:2},1024),U.opt.craftable?(u(),S(D,{key:0,caption:""},{default:e(()=>T[1]||(T[1]=[L("\u041A\u0440\u0430\u0444\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0439")])),_:1})):w("",!0),U.opt.personal?(u(),S(D,{key:1,caption:""},{default:e(()=>T[2]||(T[2]=[L("\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439")])),_:1})):w("",!0)]),_:2},1024)]),_:2},1040)]),_:2},[f(l)?{name:"prepend",fn:e(()=>[A("div",Vt,[t(E,{icon:f(l).icon,grade:f(l).grade},null,8,["icon","grade"])])]),key:"0"}:void 0,f(l)?{name:"append",fn:e(()=>[t($t,{name:"cancel",onClick:St(M,["stop","prevent"]),class:"cursor-pointer"})]),key:"1"}:void 0]),1032,["options","modelValue","label"])):w("",!0)}};const Gt={class:"upCraftArea"},Et={__name:"CraftResults",props:{CraftResults:C(null)},setup(d){Y(),nt(),h("itemId");const I=d,s=(a,l)=>a.id>l.id?1:-1,b=C(0);function c(a,l){return l?a+'<br><span style="color: gray">\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439</span>':a}const r=z(()=>{if(!I.CraftResults.length)return[];switch(b.value){case 0:return[...I.CraftResults].sort(s);default:return s}});return(a,l)=>(u(),B(N,null,[l[0]||(l[0]=A("div",{class:"MainName"},"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0445:",-1)),A("div",Gt,[(u(!0),B(N,null,Z(r.value,p=>(u(),S(K,{key:p.id,class:"no-padding",dense:"",flat:"",to:"/item/"+p.id},{default:e(()=>[t(E,{toolText:c(p.name,p.personal),icon:p.icon,grade:p.grade},null,8,["toolText","icon","grade"])]),_:2},1032,["to"]))),128))])],64))}};var Nt=F(Et,[["__scopeId","data-v-fe286c14"]]);const Ht={key:0,class:"CraftInfo"},qt={class:"InfoCol"},jt=["innerHTML"],Ft=["innerHTML"],zt={class:"InfoCol"},Wt={class:"InfoCol"},Kt={__name:"CraftInfo",props:{Craft:C(null)},emits:["onSetUBest"],setup(d,{emit:I}){const s=j(),b=String("https://api.aa.dllib.ru/"),c=d,r=C(c.Craft.countData.isUBest),a=C(c.Craft.countData.isBest);C(c.Craft.countData.isBuyOnly);const l=I,p=h("Item"),$=z(()=>{if(!p.value.Pricing.isGoldable)return 0;if(!p.value.Pricing.Price.price)return!1;let n=p.value.Pricing.Price.price+"";return n=n.replace(/[^0-9]/g,"")*.9,n=Math.round(n),n-c.Craft.countData.craftCost});function k(n){Ct(n).then(()=>{s.notify({color:"positive",position:"center",message:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E",icon:"content_copy",timeout:1})}).catch(()=>{})}function v(n){return n?n<1e3?n:Math.round(n/1e3)+"k":""}function m(n){return Math.round(n*100)/100}function P(){H.post(b+"api/item.php",{params:{method:p.value.isBuyOnly?"addToBuyable":"delFromBuyable",itemId:p.value.id}}).then(n=>{var o,M,y;if(!((o=n==null?void 0:n.data)!=null&&o.result))throw new Error;s.notify(tt((y=(M=n==null?void 0:n.data)==null?void 0:M.result)!=null?y:"\u041E\u0439!"))}).catch(n=>{s.notify(q(n))})}function _(){r.value?i():g()}function i(){H.post(b+"api/craft.php",{params:{method:"setAsUBest",craftId:c.Craft.id}}).then(n=>{var o,M,y;if(!((o=n==null?void 0:n.data)!=null&&o.result))throw new Error;s.notify(tt((y=(M=n==null?void 0:n.data)==null?void 0:M.result)!=null?y:"\u041E\u0439!")),l("onSetUBest")}).catch(n=>{s.notify(q(n))})}function g(){H.post(b+"api/craft.php",{params:{method:"resetUBest",craftId:c.Craft.id}}).then(n=>{var o,M,y;if(!((o=n==null?void 0:n.data)!=null&&o.result))throw new Error;s.notify(tt((y=(M=n==null?void 0:n.data)==null?void 0:M.result)!=null?y:"\u041E\u0439!")),l("onSetUBest")}).catch(n=>{s.notify(q(n))})}return(n,o)=>d.Craft?(u(),B("div",Ht,[A("div",qt,[a.value?(u(),S(R,{key:0,dense:""},{default:e(()=>[t(x,null,{default:e(()=>[L(V(r.value?"\u0412\u044B\u0431\u0440\u0430\u043D \u0432\u0430\u043C\u0438":"\u0412\u044B\u0431\u0440\u0430\u043D \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u043E\u043C"),1)]),_:1})]),_:1})):w("",!0),t(R,{dense:""},{default:e(()=>[t(x,null,{default:e(()=>o[5]||(o[5]=[L(" Craft Id: ")])),_:1}),t(x,{side:""},{default:e(()=>[t(K,{label:d.Craft.id,"icon-right":"content_copy",class:"no-padding",dense:"",flat:"",onClick:o[0]||(o[0]=M=>k(d.Craft.id))},null,8,["label"])]),_:1})]),_:1}),t(R,{dense:"",class:"listItem"},{default:e(()=>[t(x,null,{default:e(()=>[t(D,null,{default:e(()=>o[6]||(o[6]=[L(" \u041A\u043E\u044D\u0444 SPM: ")])),_:1})]),_:1}),t(x,{side:""},{default:e(()=>[t(D,null,{default:e(()=>[L(V(m(d.Craft.countData.spmu)),1)]),_:1})]),_:1})]),_:1}),t(R,{dense:"",class:"listItem"},{default:e(()=>[t(x,null,{default:e(()=>[t(D,null,{default:e(()=>o[7]||(o[7]=[L(" \u0421\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ")])),_:1})]),_:1}),t(x,{side:""},{default:e(()=>[t(D,null,{default:e(()=>[A("span",{innerHTML:f(X)(d.Craft.countData.craftCost)},null,8,jt)]),_:1})]),_:1})]),_:1}),$.value!==!1?(u(),S(R,{key:1,dense:"",class:"listItem"},{default:e(()=>[t(x,null,{default:e(()=>[t(D,null,{default:e(()=>o[8]||(o[8]=[L(" \u041F\u0440\u0438\u0431\u044B\u043B\u044C: ")])),_:1})]),_:1}),t(x,{side:""},{default:e(()=>[t(D,null,{default:e(()=>[A("span",{innerHTML:f(X)($.value)},null,8,Ft)]),_:1})]),_:1})]),_:1})):w("",!0)]),A("div",zt,[t(st,{dense:""},{default:e(()=>[t(R,{dense:""},{default:e(()=>[t(x,{avatar:""},{default:e(()=>[t(E,{grade:d.Craft.Prof.lvl,locIcon:"/img/profs/"+d.Craft.Prof.id+".png","tool-text":"\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F",size:"30px"},null,8,["grade","locIcon"])]),_:1}),t(x,null,{default:e(()=>[L(V(d.Craft.Prof.name),1)]),_:1}),t(x,{side:""},{default:e(()=>[L(V(v(d.Craft.profNeed)),1)]),_:1})]),_:1}),t(R,{dense:""},{default:e(()=>[t(x,{avatar:""},{default:e(()=>[t(E,{grade:1,locIcon:"/img/interface/doodad.png","tool-text":"\u041F\u0440\u0438\u0441\u043F\u043E\u0441\u043E\u0431\u043B\u0435\u043D\u0438\u0435",size:"30px"})]),_:1}),t(x,null,{default:e(()=>[L(V(d.Craft.doodName),1)]),_:1}),t(x,{side:""})]),_:1}),a.value&&f(p).isMat&&!f(p).personal?mt((u(),S(R,{key:0,tag:"label",dense:""},{default:e(()=>[t(it,{class:"bg-tooltip"},{default:e(()=>o[9]||(o[9]=[L(" \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u0440\u0430\u0441\u0447\u0435\u0442\u0430\u0445 \u0446\u0435\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043A\u0440\u0430\u0444\u0442\u0430 ")])),_:1}),t(x,{avatar:""},{default:e(()=>[t(gt,{size:"2.5em"},{default:e(()=>o[10]||(o[10]=[A("img",{src:"/img/interface/perdaru.png",alt:""},null,-1)])),_:1})]),_:1}),t(x,null,{default:e(()=>[t(D,null,{default:e(()=>o[11]||(o[11]=[L("\u041F\u043E\u043A\u0443\u043F\u0430\u0435\u043C\u044B\u0439")])),_:1})]),_:1}),t(x,{side:""},{default:e(()=>[t(vt,{modelValue:f(p).isBuyOnly,"onUpdate:modelValue":[o[1]||(o[1]=M=>f(p).isBuyOnly=M),o[2]||(o[2]=M=>P())]},null,8,["modelValue"])]),_:1})]),_:1})),[[pt]]):w("",!0),f(p).personal?w("",!0):mt((u(),S(R,{key:1,tag:"label",dense:""},{default:e(()=>[t(it,{class:"bg-tooltip"},{default:e(()=>o[12]||(o[12]=[L(" \u0412\u044B\u0431\u0438\u0440\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0440\u0435\u0446\u0435\u043F\u0442 \u043F\u0440\u0438 \u0440\u0430\u0441\u0447\u0435\u0442\u0430\u0445 ")])),_:1}),t(x,{avatar:""},{default:e(()=>[t(E,{grade:12,locIcon:"/img/interface/perdaru.png","tool-text":"\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439",size:"30px"})]),_:1}),t(x,null,{default:e(()=>[t(D,null,{default:e(()=>o[13]||(o[13]=[L("\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439")])),_:1})]),_:1}),t(x,{side:""},{default:e(()=>[t(vt,{modelValue:r.value,"onUpdate:modelValue":[o[3]||(o[3]=M=>r.value=M),o[4]||(o[4]=M=>_())]},null,8,["modelValue"])]),_:1})]),_:1})),[[pt]])]),_:1})]),A("div",Wt,[t(st,{dense:""},{default:e(()=>[t(R,{dense:"",class:"listItem"},{default:e(()=>[t(x,null,{default:e(()=>[t(D,null,{default:e(()=>o[14]||(o[14]=[L(" \u041E\u0420 \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442: ")])),_:1})]),_:1}),t(x,{side:""},{default:e(()=>[t(D,null,{default:e(()=>[L(V(m(d.Craft.countData.LaborData.forThisCraftBonused))+" ",1),o[15]||(o[15]=A("img",{class:"smallIcon",src:"/img/valuta/2.png",alt:""},null,-1))]),_:1})]),_:1})]),_:1}),t(R,{dense:"",class:"listItem"},{default:e(()=>[t(x,{class:"no-padding"},{default:e(()=>[t(D,null,{default:e(()=>o[16]||(o[16]=[L(" \u041E\u0420 \u043D\u0430 1\u0448\u0442: ")])),_:1})]),_:1}),t(x,{side:""},{default:e(()=>[t(D,null,{default:e(()=>[L(V(m(d.Craft.countData.LaborData.forOneUnitOfThisCraft))+" ",1),o[17]||(o[17]=A("img",{class:"smallIcon",src:"/img/valuta/2.png",alt:""},null,-1))]),_:1})]),_:1})]),_:1}),t(R,{dense:"",class:"listItem"},{default:e(()=>[t(x,null,{default:e(()=>[t(D,null,{default:e(()=>o[18]||(o[18]=[L(" \u041E\u0420 \u043D\u0430 \u0446\u0435\u043F\u043E\u0447\u043A\u0443: ")])),_:1})]),_:1}),t(x,{side:""},{default:e(()=>[t(D,null,{default:e(()=>[L(V(m(d.Craft.countData.laborTotal))+" ",1),o[19]||(o[19]=A("img",{class:"smallIcon",src:"/img/valuta/2.png",alt:""},null,-1))]),_:1})]),_:1})]),_:1})]),_:1})])])):w("",!0)}};var Yt=F(Kt,[["__scopeId","data-v-c06f4f74"]]);const Zt={class:"MatRow"},Jt={__name:"MatRow",props:{Craft:C(null)},setup(d){const I=h("itemId"),s=h("Item");function b(r){var a,l;return(a=r==null?void 0:r.Price)!=null&&a.method?r.Item.name+'<br><span style="color: '+rt(((l=r==null?void 0:r.Price)==null?void 0:l.method)||"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")+'">'+ct((r==null?void 0:r.Price)||{})+":</span><br>"+X(r.Price.price,500):"\u041A\u0430\u043A\u0430\u044F-\u0442\u043E \u0444\u0438\u0433\u043D\u044F..."}function c(r){I.value=r}return(r,a)=>(u(),B("div",Zt,[t(R,{dense:"",class:"matArea"},{default:e(()=>[t(x,{avatar:"",style:{width:"max-content"},class:"no-padding"},{default:e(()=>[t(E,{grade:f(s).grade,icon:f(s).icon,amount:d.Craft.resultAmount,"tool-text":f(s).name,size:"70px",onClick:a[0]||(a[0]=l=>c(f(s).id))},null,8,["grade","icon","amount","tool-text"])]),_:1}),t(x,{class:"no-padding",top:"",thumbnail:""},{default:e(()=>[t(D,null,{default:e(()=>[(u(!0),B(N,null,Z(d.Craft.Mats,l=>(u(),S(K,{key:l.id,class:"no-padding",dense:"",flat:"",to:"/item/"+l.id},{default:e(()=>[t(E,{grade:l.grade?l.grade:l.Item.grade,icon:l.Item.icon,amount:l.need,"tool-text":b(l)},null,8,["grade","icon","amount","tool-text"])]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})]))}};var Xt=F(Jt,[["__scopeId","data-v-a7cee79a"]]);const te={class:"MatPool"},ee={__name:"MatPool",props:{matPool:C(null)},setup(d){const I=h("resultAmount");function s(c){return c.Item.name+"<br>"+b(c.need*I)+'\u0448\u0442<br><span style="color: '+rt(c.Price.method)+'">'+ct(c.Price)+":</span><br>"+X(c.Price.price)+"<br>"}function b(c){return Math.round(c*10)/10}return(c,r)=>(u(),S(at,{label:"\u0412\u0441\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",popup:""},{default:e(()=>[A("div",te,[(u(!0),B(N,null,Z(d.matPool,a=>(u(),S(K,{key:a.id,class:"no-padding",dense:"",flat:"",to:"/item/"+a.id},{default:e(()=>[t(E,{grade:a.grade?a.grade:a.Item.grade,icon:a.Item.icon,amount:b(a.need*f(I)),"tool-text":s(a)},null,8,["grade","icon","amount","tool-text"])]),_:2},1032,["to"]))),128))])]),_:1}))}};var ae=F(ee,[["__scopeId","data-v-1e82fef1"]]);const le={class:"MatPool"},re={__name:"TrashPool",props:{trashPool:C(null)},setup(d){const I=h("resultAmount");function s(c){return c.Item.name+"<br>"+b(c.need*I)+'\u0448\u0442<br><span style="color: '+rt(c.Price.method)+'">'+ct(c.Price)+":</span><br>"+X(c.Price.price)+"<br>"}function b(c){return Math.round(c*10)/10}return(c,r)=>(u(),S(at,{label:"\u0412\u0441\u0435 \u043E\u0442\u0445\u043E\u0434\u044B",popup:""},{default:e(()=>[A("div",le,[(u(!0),B(N,null,Z(d.trashPool,a=>(u(),S(K,{key:a.id,class:"no-padding",dense:"",flat:"",to:"/item/"+a.id},{default:e(()=>[t(E,{grade:a.grade?a.grade:a.Item.grade,icon:a.Item.icon,amount:b(a.need*f(I)),"tool-text":s(a)},null,8,["grade","icon","amount","tool-text"])]),_:2},1032,["to"]))),128))])]),_:1}))}};var ne=F(re,[["__scopeId","data-v-ba009fcc"]]);const ue={class:"wrapContainer"},oe={class:"wrapElement"},ie={__name:"CraftCard",props:{Craft:C(null)},emits:["onSetUBest","delUBest"],setup(d,{emit:I}){j(),h("itemId");const s=h("Item"),b=d,c=h("progress");h("isSingleCraft"),G("resultAmount",b.Craft.resultAmount);const r=I;return(a,l)=>f(s)&&!f(c)?(u(),S(It,{key:0,class:"CraftCard","transition-show":"jump-down","transition-hide":"jump-up"},{default:e(()=>[t(ut,null,{default:e(()=>[t(Yt,{Craft:d.Craft,onOnSetUBest:l[0]||(l[0]=p=>r("onSetUBest"))},null,8,["Craft"])]),_:1}),t(ut,null,{default:e(()=>[A("div",ue,[A("div",oe,[t(Xt,{Craft:d.Craft},null,8,["Craft"])])])]),_:1}),d.Craft.matPool?(u(),S(ut,{key:0},{default:e(()=>[t(ae,{matPool:d.Craft.matPool},null,8,["matPool"]),t(ne,{trashPool:d.Craft.trashPool},null,8,["trashPool"])]),_:1})):w("",!0)]),_:1})):w("",!0)}};var _t=F(ie,[["__scopeId","data-v-3ee609c0"]]);const se={key:1},de={__name:"CraftList",setup(d,{expose:I}){const s=j(),b=String("https://api.aa.dllib.ru/"),c=Y(),r=h("Item");h("itemId");const a=C(null),l=C([]),p=C([]),$=h("CraftProgress"),k=z(()=>!(l.value&&l.value.length));G("isSingleCraft",k),I({loadCrafts:v}),et(r,()=>{r.value&&r.value.craftable},{deep:!0}),lt(()=>{console.log("craftList mounted")});function v(){!r.value.craftable||(p.value=[],$.value=!0,H.post(b+"api/craft.php",{params:{method:"getList",itemId:c.params.id}}).then(m=>{var P,_,i,g,n,o,M,y,T,U,W,Q,O;if(!((P=m==null?void 0:m.data)!=null&&P.result))throw new Error;if((g=(i=(_=m==null?void 0:m.data)==null?void 0:_.data)==null?void 0:i.Lost)!=null&&g.length){p.value=(M=(o=(n=m==null?void 0:m.data)==null?void 0:n.data)==null?void 0:o.Lost)!=null?M:[],l.value=[],a.value=null;return}l.value=(U=(T=(y=m==null?void 0:m.data)==null?void 0:y.data)==null?void 0:T.otherCrafts)!=null?U:[],a.value=(O=(Q=(W=m==null?void 0:m.data)==null?void 0:W.data)==null?void 0:Q.mainCraft)!=null?O:null}).catch(m=>{l.value=[],a.value=null,s.notify(q(m,"\u041E\u0439! CraftList \u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 :("))}).finally(()=>{$.value=!1}))}return(m,P)=>(u(),B(N,null,[a.value?(u(),S(_t,{Craft:a.value,key:a.value.id,onOnSetUBest:P[0]||(P[0]=_=>v())},null,8,["Craft"])):(u(),B("div",se,"\u0420\u0435\u0446\u0435\u043F\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B")),l.value.length?(u(),S(at,{key:2,label:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u044B",popup:""},{default:e(()=>[(u(!0),B(N,null,Z(l.value,_=>(u(),S(_t,{key:_.id,Craft:_,onOnSetUBest:P[1]||(P[1]=i=>v())},null,8,["Craft"]))),128))]),_:1})):w("",!0),p.value&&p.value.length?(u(),S(Pt,{key:3,Lost:p.value,msg:`<b>\u0420\u0430\u0441\u0447\u0435\u0442 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0441\u044F.</b><br>
    \u0412 \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0445 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0445 \u0435\u0441\u0442\u044C \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0435 \u0446\u0435\u043D\u044B.<br>
    \u0411\u0435\u0437 \u043D\u0438\u0445 \u044F \u043D\u0435 \u043C\u043E\u0433\u0443 \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0438 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C.`},null,8,["Lost"])):w("",!0)],64))}};var ce=F(de,[["__scopeId","data-v-3d11ac26"]]);const fe={class:"itemIconsArea"},me={__name:"CurrencyTradable",setup(d){j(),Y(),h("progress"),h("Item");const I=h("TradableItems"),s=(r,a)=>r.categId>a.categId?1:-1,b=C(0),c=z(()=>{if(!I.value)return[];switch(b.value){case 0:return[...I.value].sort(s);default:return s}});return(r,a)=>(u(),B("div",fe,[(u(!0),B(N,null,Z(c.value,l=>(u(),S(K,{key:l.id,class:"no-padding",dense:"",flat:"",to:"/item/"+l.id},{default:e(()=>[t(E,{icon:l.icon,grade:l.grade,"tool-text":l.name},null,8,["icon","grade","tool-text"])]),_:2},1032,["to"]))),128))]))}};const ve=["src"],pe=["innerHTML"],_e={__name:"PriceCurrencyItem",props:{CurItem:C(null)},emits:["delPrice","updated"],setup(d,{emit:I}){const s=j(),b=String("https://api.aa.dllib.ru/"),c=nt(),r=d,a=I,l=C(r.CurItem.Item.Price.price),p=C(null),$=C(!1);C(r.CurItem.Item.Price.buyOnly);const k=h("curAccount");function v(i){c.push({path:"/item/"+i})}function m(){H.post(b+"api/price.php",{params:{method:"del",itemId:r.CurItem.Item.id}}).then(i=>{var g,n,o;if(!((g=i==null?void 0:i.data)!=null&&g.result))throw new Error;s.notify(tt((o=(n=i==null?void 0:i.data)==null?void 0:n.result)!=null?o:"\u041E\u0439!"))}).catch(i=>{s.notify(q(i))})}function P(){p.value.blur(),H.post(b+"api/price.php",{params:{method:"set",price:l.value,itemId:r.CurItem.Item.id}}).then(i=>{var g,n,o;if(!((g=i==null?void 0:i.data)!=null&&g.result))throw new Error;s.notify(tt((o=(n=i==null?void 0:i.data)==null?void 0:n.result)!=null?o:"\u041E\u0439!")),a("updated")}).catch(i=>{s.notify(q(i))})}function _(i){Ct(i).then(()=>{s.notify({color:"positive",position:"center",message:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E",icon:"content_copy",timeout:1})}).catch(()=>{})}return(i,g)=>(u(),S(R,{dense:"",class:"PriceCell"},{default:e(()=>[t(x,null,{default:e(()=>[t(D,{lines:1},{default:e(()=>[A("div",{class:"PriceLabel",onClick:g[0]||(g[0]=n=>_(d.CurItem.Item.name))},V(d.CurItem.Item.name),1)]),_:1}),t(yt,{mask:"## ## ##",class:"PriceInput",label:f(dt)(d.CurItem.Item.Price.updatedAt)+" - "+d.CurItem.Item.Price.author,"label-color":f(rt)(d.CurItem.Item.Price.method),dense:"",filled:"",borderless:"","reverse-fill-mask":"",ref_key:"priceRef",ref:p,modelValue:l.value,"onUpdate:modelValue":g[2]||(g[2]=n=>l.value=n),onFocus:g[3]||(g[3]=n=>$.value=!0),onBlur:g[4]||(g[4]=n=>$.value=!1)},{before:e(()=>[t(K,{class:"no-padding",dense:"",flat:"",to:"/item/"+d.CurItem.Item.Price.itemId,onClick:g[1]||(g[1]=n=>v(d.CurItem.Item.Price.itemId))},{default:e(()=>[t(E,{icon:d.CurItem.Item.icon,grade:d.CurItem.Item.grade,"tool-text":d.CurItem.Item.name},null,8,["icon","grade","tool-text"])]),_:1},8,["to"])]),append:e(()=>[$.value?(u(),S(K,{key:0,label:"Ok",class:"DefBtn",dense:"","no-caps":"",flat:"",onClick:P})):w("",!0)]),after:e(()=>[t(it,null,{default:e(()=>g[5]||(g[5]=[L("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")])),_:1}),t(Mt,{onOnOk:m,disable:d.CurItem.Item.Price.accountId!==f(k).id},null,8,["disable"])]),_:1},8,["label","label-color","modelValue"]),t(D,{style:{"font-size":"14px",padding:"3px 0"}},{default:e(()=>[g[6]||(g[6]=L(" 1")),A("img",{class:"imgValut",src:"/img/valuta/"+d.CurItem.Item.currencyId+".png",alt:""},null,8,ve),g[7]||(g[7]=L(" = ")),A("span",{innerHTML:f(X)(d.CurItem.currencyPrice)},null,8,pe)]),_:1})]),_:1})]),_:1}))}};var ge=F(_e,[["__scopeId","data-v-7d67eeeb"]]);const Ie={key:0},ye={class:"MainName"},Ce=["src"],Pe={key:1},he=["src"],be={key:2,class:"PricesArea"},ke={key:0},xe={key:1},Se=["src"],$e={__name:"CurrencyArea",setup(d){const I=j(),s=String("https://api.aa.dllib.ru/");Y();const b=h("progress"),c=h("CurrencyProgress"),r=h("Item"),a=C(null),l=z(()=>a.value?a.value.TradableItems:[]),p=z(()=>r.value.categId===173?r.value.id:r.value.currencyId);G("TradableItems",l),et(r,()=>{r.value&&$()},{deep:!0}),lt(()=>{$()});function $(){c.value=!0,H.post(s+"api/get/currency.php",{params:{id:p.value}}).then(k=>{var v,m,P;if(!((v=k==null?void 0:k.data)!=null&&v.result))throw new Error;b.value=!1,a.value=(P=(m=k==null?void 0:k.data)==null?void 0:m.data)!=null?P:null}).catch(k=>{a.value=null,b.value=!1,I.notify(q(k,"\u041E\u0439! Currency \u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 :("))}).finally(()=>{c.value=!1})}return(k,v)=>a.value?(u(),B("div",Ie,[t(at,{label:"\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u0440 \u0432\u0430\u043B\u044E\u0442\u044B",icon:"img:/img/valuta/"+a.value.id+".png"},{default:e(()=>[t(Dt,{price:a.value.Price},null,8,["price"]),A("div",ye,[v[0]||(v[0]=L("\u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0437\u0430 ")),A("img",{class:"imgValut",src:"/img/valuta/"+a.value.id+".png",alt:""},null,8,Ce)]),l.value.length?(u(),S(me,{key:0})):w("",!0),a.value.median?(u(),B("div",Pe,[v[1]||(v[1]=L(" \u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0446\u0435\u043D\u0430 ")),A("img",{class:"imgValut",src:"/img/valuta/"+a.value.id+".png",alt:""},null,8,he),v[2]||(v[2]=L(": ")),t(ft,{price:a.value.median,"currency-id":500},null,8,["price"])])):w("",!0),a.value.MonetisationItems.length?(u(),B("div",be,[(u(!0),B(N,null,Z(a.value.MonetisationItems,m=>(u(),S(ge,{key:m.id,CurItem:m,onUpdated:$,onDelPrice:$},null,8,["CurItem"]))),128))])):w("",!0),a.value.lost.length?(u(),B(N,{key:3},[a.value.MonetisationItems.length?(u(),B("div",ke,v[3]||(v[3]=[L(" \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C."),A("br",null,null,-1)]))):(u(),B("div",xe,[v[4]||(v[4]=L(" \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0440\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0440\u0435\u0434\u043D\u044E\u044E \u0446\u0435\u043D\u0443 ")),A("img",{class:"imgValut",src:"/img/valuta/"+a.value.id+".png",alt:""},null,8,Se),v[5]||(v[5]=A("br",null,null,-1))])),t(at,{label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0446\u0435\u043D\u044B",icon:"add"},{default:e(()=>[t(Pt,{Lost:a.value.lost,msg:"\u0427\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0446\u0435\u043D \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0443, \u0442\u0435\u043C \u0442\u043E\u0447\u043D\u0435\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"},null,8,["Lost"])]),_:1})],64)):w("",!0)]),_:1},8,["icon"])])):w("",!0)}},Le={__name:"PriceInput",props:{Price:C(null)},emits:["delPrice","updated"],setup(d,{emit:I}){const s=j(),b=String("https://api.aa.dllib.ru/"),c=h("curAccount"),r=d,a=C({...r.Price}),l=h("Item"),p=C(null);et(r,()=>{a.value={...r.Price}});const $=I,k=z(()=>{switch(!0){case!c.value.settings.serverGroupId:return!0;case!l.value.Pricing.isGoldable:return!0;default:return!1}}),v=z(()=>{if(!c.value.settings.serverGroupId)return"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D";switch(!0){case a.value.price===0:return"";case a.value.price>0:return"";case a.value.price==="":return"\u041D\u0435 \u0432\u0438\u0436\u0443";case a.value.price===void 0:return"\u041D\u0435 \u0432\u0438\u0436\u0443";case a.value.price===null:return"\u041D\u0435 \u0432\u0438\u0436\u0443";default:return""}}),m=z(()=>{switch(!0){case!l.value.Pricing.isGoldable:return"\u041D\u0435\u043B\u044C\u0437\u044F \u043F\u0440\u043E\u0434\u0430\u0442\u044C";case a.value.method==="byToNPC":return"\u041D\u041F\u0421 \u043A\u0443\u043F\u0438\u0442 \u0437\u0430";case a.value.method==="empty":return"\u0426\u0435\u043D\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430";case!a.value.author:return"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439";case!c.value.settings.serverGroupId:return"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D";case!k.value:return dt(a.value.updatedAt)+" - "+a.value.author;default:return"\u0426\u0435\u043D\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"}});function P(){p.value.blur(),H.post(b+"api/price.php",{params:{method:"set",price:a.value.price,itemId:l.value.id}}).then(_=>{var i,g,n;if(!((i=_==null?void 0:_.data)!=null&&i.result))throw new Error;s.notify(tt((n=(g=_==null?void 0:_.data)==null?void 0:g.result)!=null?n:"\u041E\u0439!")),$("updated")}).catch(_=>{s.notify(q(_))})}return(_,i)=>(u(),S(yt,{modelValue:a.value.price,"onUpdate:modelValue":i[1]||(i[1]=g=>a.value.price=g),filled:"",label:m.value,"label-color":f(rt)(a.value.method),mask:"## ## ##",ref_key:"priceRef",ref:p,disable:!f(l).Pricing.isGoldable||k.value,"reverse-fill-mask":"",rules:[g=>!v.value.length||v.value]},{append:e(()=>[v.value===""&&!k.value?(u(),S(K,{key:0,label:"Ok",class:"DefBtn",dense:"","no-caps":"",onClick:i[0]||(i[0]=g=>P())})):w("",!0)]),_:1},8,["modelValue","label","label-color","disable","rules"]))}};const we={style:{width:"100%"}},Be={key:0},Ae={key:1},Te=["innerHTML"],De={__name:"PriceCard",emits:["updated"],setup(d,{emit:I}){const s=h("Item"),b=I;return(c,r)=>(u(),B("div",we,[f(s)?(u(),S(It,{key:0,class:"PriceCard"},{default:e(()=>[t(Le,{Price:f(s).Pricing.Price,onUpdated:r[0]||(r[0]=a=>b("updated"))},null,8,["Price"]),f(s).isTradeNPC?(u(),B("div",Be,[r[1]||(r[1]=L("\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0443 NPC: ")),t(ft,{price:f(s).Pricing.priceFromNPC,currencyId:f(s).Pricing.currencyId},null,8,["price","currencyId"])])):f(s).Pricing.goldable?(u(),B("div",Ae,[A("span",{innerHTML:f(X)(f(s).Pricing.Price.price)},null,8,Te)])):w("",!0)]),_:1})):w("",!0)]))}};var ht=F(De,[["__scopeId","data-v-4b833810"]]);const Me={__name:"PriceHistory",setup(d){const I=j(),s=String("https://api.aa.dllib.ru/"),b=String("https://auth.symphograph.ru/"),c=Y(),r=h("curAccount"),a=h("PriceHistoryProgress"),l=C([]),p=h("ServerGroupList"),$=C(r.value.settings.serverGroupId),k=z(()=>{var _;return(_=l.value)!=null&&_.length?$.value===100?l.value:l.value.filter(i=>i.serverGroupId===$.value):[]});function v(P){$.value=P}function m(){a.value=!0,H.post(s+"/api/price.php",{params:{method:"history",itemId:c.params.id}}).then(P=>{var _,i;if(!((_=P==null?void 0:P.data)!=null&&_.result))throw new Error;l.value=((i=P==null?void 0:P.data)==null?void 0:i.data)||[]}).catch(P=>{I.notify(q(P))}).finally(()=>{a.value=!1})}return lt(()=>{}),(P,_)=>(u(),S(at,{label:"\u0422\u0435\u043A\u0443\u0449\u0438\u0435 \u0446\u0435\u043D\u044B",onBeforeShow:_[1]||(_[1]=i=>m()),popup:""},{default:e(()=>[t(st,{dense:"",separator:""},{default:e(()=>[t(R,null,{default:e(()=>[t(x,null,{default:e(()=>[t(D,null,{default:e(()=>[t(Rt,{groupId:$.value,onOnSelect:_[0]||(_[0]=i=>v(i)),ref:"refServerGroupSelect"},null,8,["groupId"])]),_:1})]),_:1})]),_:1}),(u(!0),B(N,null,Z(k.value,i=>(u(),S(R,{key:String(i.accountId)+String(i.serverGroupId)+i.updatedAt,style:{padding:"1em"}},{default:e(()=>[t(x,{avatar:""},{default:e(()=>[t(gt,null,{default:e(()=>[t(Ut,{src:f(b)+"img/avatars/"+i.avaFileName},null,8,["src"])]),_:2},1024)]),_:2},1024),t(x,null,{default:e(()=>[t(D,{caption:""},{default:e(()=>[L(V(f(dt)(i.updatedAt)+" - "+i.publicNick),1)]),_:2},1024),$.value===100?(u(),S(D,{key:0,caption:""},{default:e(()=>[L(V(f(p).find(g=>g.id===i.serverGroupId).label),1)]),_:2},1024)):w("",!0),t(D,null,{default:e(()=>[t(ft,{price:i.price},null,8,["price"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}};const Ue={key:0,class:"ItemArea"},Re={key:4},Qe={key:5},Ve={__name:"ItemArea",setup(d,{expose:I}){const s=j(),b=String("https://api.aa.dllib.ru/"),c=Y(),r=h("Item");h("itemId");const a=h("progress"),l=h("ItemProgress"),p=C("PriceHistoryProgress");G("PriceHistoryProgress",p);const $=C(null);I({loadItem:k}),lt(()=>{c.params.id&&k()});function k(){l.value=!0,H.post(b+"/api/item.php",{params:{method:"get",id:c.params.id}}).then(v=>{var m,P,_;if(!((m=v==null?void 0:v.data)!=null&&m.result))throw new Error;r.value=(_=(P=v==null?void 0:v.data)==null?void 0:P.data)!=null?_:null,l.value=!1,console.log("Item loaded"),At(()=>{r.value.craftable&&$.value.loadCrafts()}),ot.set("lastItem",r.value.id)}).catch(v=>{r.value=null,s.notify(q(v))}).finally(()=>{a.value=!1,l.value=!1})}return(v,m)=>{var P,_;return f(r)?(u(),B("div",Ue,[f(r)&&((P=f(r).Info)==null?void 0:P.CraftResults)?(u(),S(Nt,{key:0,CraftResults:f(r).Info.CraftResults},null,8,["CraftResults"])):w("",!0),f(s).platform.is.mobile?(u(),S(ht,{key:1,onUpdated:k})):w("",!0),f(l)?w("",!0):(u(),B(N,{key:2},[f(r).currencyId&&f(r).currencyId!==500||f(r).categId===173?(u(),S($e,{key:0})):w("",!0)],64)),(_=f(r))!=null&&_.craftable?(u(),S(ce,{key:3,ref_key:"refCraftList",ref:$},null,512)):w("",!0),f(r).craftable?w("",!0):(u(),B("div",Re,"\u041D\u0435\u043A\u0440\u0430\u0444\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E")),!f(l)&&f(r).Pricing.isGoldable?(u(),B("div",Qe,[t(Me)])):w("",!0)])):w("",!0)}}};var Oe=F(Ve,[["__scopeId","data-v-6ab7288c"]]);const Ge={class:"WindowArea column"},Ee={style:{"min-width":"20em",width:"calc(100% - 20em)"}},Ne={key:0,style:{width:"20em"}},He={__name:"ItemPage",setup(d){const I=Y(),s=nt(),b=j(),c=h("curAccount");C(122345678);const r=h("categMode"),a=C(null),l=h("progress"),p=C(!1);G("ItemProgress",p);const $=C(!1);G("CraftProgress",$);const k=C(!1);G("CurrencyProgress",k);const v=C(0);G("itemId",v);const m=C(null);G("Item",m);const P=C(!1);G("needUpdate",P);const _=C(null);G("selectedItem",_);const i=C([]);G("SearchList",i);const g=C(null);function n(){return l.value||p.value||$.value||k.value}h("CategoriesList"),et(I,()=>{I.params.id&&i.value.length&&g.value.loadItem()},{deep:!0}),lt(()=>{(!c.value.settings.serverGroupId||c.value.settings.serverGroupId===100)&&M(),I.params.id?v.value=I.params.id*1:ot.getItem("lastItem")&&(I.params.id=ot.getItem("lastItem"),s.push({path:"/item/"+I.params.id}))});function o(){r.value=!1}function M(){b.dialog({component:Qt,componentProps:{text:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D.<br>\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438?",okBtnText:"\u0412 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",cancelBtnText:"\u041D\u0435 \u0441\u0435\u0439\u0447\u0430\u0441"},cancel:!0,persistent:!0}).onOk(()=>{}).onOk(()=>{s.push("/settings")}).onCancel(()=>{}).onDismiss(()=>{})}return(y,T)=>(u(),B("div",Ge,[A("div",{class:"navigator",ref_key:"navigatorRef",ref:a},[A("div",Ee,[t(Ot,{onIAmSelected:o}),t(D,{style:{padding:"0 1em"},caption:""},{default:e(()=>[L(V(m.value&&m.value.personal?"\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439":"\u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0439"),1)]),_:1})]),f(b).platform.is.desktop?(u(),B("div",Ne,[t(ht)])):w("",!0)],512),t(bt,{"animation-speed":200,color:"green",indeterminate:n()},null,8,["indeterminate"]),t(kt,{class:"col myScrollArea"},{default:e(()=>[i.value.length?(u(),S(Oe,{key:0,ref_key:"refItemArea",ref:g},null,512)):w("",!0)]),_:1})]))}};var _a=F(He,[["__scopeId","data-v-584e5b5c"]]);export{_a as default};
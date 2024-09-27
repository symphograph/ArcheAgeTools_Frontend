var ke=Object.defineProperty;var Se=(m,d,l)=>d in m?ke(m,d,{enumerable:!0,configurable:!0,writable:!0,value:l}):m[d]=l;var W=(m,d,l)=>(Se(m,typeof d!="symbol"?d+"":d,l),l);import{Q as k,a as D,b as U}from"./position-engine.fcb91d72.js";import{Q as Be}from"./QLinearProgress.7a6544ed.js";import{Q as $e}from"./QScrollArea.15a45ecc.js";import{api as q}from"./axios.c7c3d222.js";import{P as se}from"./LocalStorage.dd197208.js";import{u as O}from"./use-quasar.df17c2ed.js";import{u as J,a3 as ne,i as C,r as y,w as te,o as ue,J as c,n as o,t as S,K as xe,G as a,P as w,f as e,bf as Le,N as we,H as B,I as R,l as $,L as Ae,R as De,b as Ee,c as H,q as L,F as V,O as X,af as K,d as Te,a0 as pe,Q as ye,_ as ve,aB as _e,p as F,b9 as Ce,ba as oe,be as Pe,X as Ue}from"./index.cf591b40.js";import{Q as Me}from"./QSelect.85e4a152.js";import{I as N,Q as ie}from"./ItemIcon.ccf8782e.js";import{n as j,a as re,c as Re,e as ce,g as Fe}from"./myFuncts.7b3aa3f0.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import{a as ae}from"./QExpansionItem.b1bf63f1.js";import{Q as de}from"./QList.c381a4c6.js";import{p as Z,a as le,b as fe}from"./price.d927648c.js";import{I as Qe,P as Ne}from"./PriceItemInput.98775a72.js";import{P as Ve}from"./prof.0442639e.js";import{L as he}from"./LostList.72a882a9.js";import{P as me}from"./PriceImagerComponent.100ecfc5.js";import{_ as Oe}from"./DelBtn.a67cfcf4.js";import{Q as Ge}from"./QImg.78289a08.js";import{_ as He}from"./ServerGroupSelect.0eebe946.js";import{D as qe}from"./DialogWindow.ce8755d6.js";import"./selection.cc14137b.js";import"./QScrollObserver.42abb11c.js";import"./TouchPan.dc0265e9.js";import"./format.959830d0.js";import"./QMenu.5a066f52.js";import"./myAuth.8a31f6b7.js";const je={style:{width:"40px"}},ze={__name:"SearchSelect",emits:["iAmSelected"],setup(m,{emit:d}){const l=J(),_=ne(),i=O(),u=String("https://api.aa.dllib.ru/"),t=C("SearchList"),r=C("selectedItem"),I=y([...t.value]),h=C("Item"),b=C("selCategId");C("selCategNode",null);const p=y(null),f=d;function P(){return h.value&&b.value?h.value.Info.Category.name:"\u0412\u0441\u0435"}function v(){l.params.id=r.value.id,_.push({path:"/item/"+l.params.id}),b.value=r.value.categId,f("iAmSelected")}te(b,()=>{b.value},{deep:!0}),te(h,()=>{t.value.length&&l.params.id&&h.value&&(r.value=t.value.find(x=>x.id===h.value.id),b.value=r.value.categId)},{deep:!0});function g(x,A,T){if(x===""){A(()=>{I.value=[...t.value]});return}A(()=>{const z=x.toLowerCase();let M=[...t.value];x&&(M=[...M].filter(Q=>Q.name.toLowerCase().indexOf(z)>-1)),I.value=M})}function n(){q.post(u+"api/options.php",{params:{method:"getSearchList"}}).then(x=>{var A,T,z,M,Q;if(!((A=x==null?void 0:x.data)!=null&&A.result))throw new Error;E((z=(T=x==null?void 0:x.data)==null?void 0:T.data)!=null?z:[]),t.value=(Q=(M=x==null?void 0:x.data)==null?void 0:M.data)!=null?Q:[]}).catch(x=>{i.notify(j(x))})}function s(){let x=indexedDB.open("prepData",1);x.onupgradeneeded=function(){let A=x.result;A.objectStoreNames.contains("cachedData")||A.createObjectStore("cachedData",{keyPath:"id"})},x.onerror=function(){console.error("Error",x.error)},x.onsuccess=function(){let M=x.result.transaction("cachedData","readonly").objectStore("cachedData").get("searchList");M.onsuccess=Q=>{let Y=Q.target.result;Y?t.value=Y.content:n()},M.onerror=Q=>{console.log("SearchList \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D")}}}function E(x){let A=indexedDB.open("prepData",1);A.onupgradeneeded=function(){console.log("\u0438\u043D\u0438\u0446\u0438\u043B\u0438\u0430\u0437\u0438\u044F \u0431\u0434");let T=A.result;T.objectStoreNames.contains("cachedData")||T.createObjectStore("cachedData",{keyPath:"id"})},A.onerror=function(){console.error("Error",A.error)},A.onsuccess=function(){let T=A.result;console.log("\u0432\u0438\u0436\u0443 \u0431\u0434");let M=T.transaction("cachedData","readwrite").objectStore("cachedData"),Q={id:"searchList",content:x},Y=M.add(Q);Y.onsuccess=function(){console.log("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435",Y.result)},Y.onerror=function(){console.log("\u041E\u0448\u0438\u0431\u043A\u0430",Y.error)}}}function ee(){r.value=null,b.value=0}return ue(()=>{s()}),(x,A)=>c(t).length?(o(),S(Me,{key:0,options:I.value,modelValue:c(r),"onUpdate:modelValue":[A[0]||(A[0]=T=>Ee(r)?r.value=T:null),v],"option-label":"name","option-value":"id","map-options":"",filled:"","use-input":"",autocomplete:"off","fill-input":"","hide-selected":"",label:P(),"input-debounce":"0",ref_key:"searchInput",ref:p,onFilter:g,"popup-content-style":{backgroundColor:"rgb(181 238 8 / 97%)"}},xe({option:a(T=>[e(U,Ae(De(T.itemProps)),{default:a(()=>[e(k,{avatar:""},{default:a(()=>[e(N,{icon:T.opt.icon,grade:T.opt.grade},null,8,["icon","grade"])]),_:2},1024),e(k,null,{default:a(()=>[e(D,null,{default:a(()=>[B(R(T.opt.name),1)]),_:2},1024),T.opt.craftable?(o(),S(D,{key:0,caption:""},{default:a(()=>A[1]||(A[1]=[B("\u041A\u0440\u0430\u0444\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0439")])),_:1})):$("",!0),T.opt.personal?(o(),S(D,{key:1,caption:""},{default:a(()=>A[2]||(A[2]=[B("\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439")])),_:1})):$("",!0)]),_:2},1024)]),_:2},1040)]),_:2},[c(r)?{name:"prepend",fn:a(()=>[w("div",je,[e(N,{icon:c(r).icon,grade:c(r).grade},null,8,["icon","grade"])])]),key:"0"}:void 0,c(r)?{name:"append",fn:a(()=>[e(we,{name:"cancel",onClick:Le(ee,["stop","prevent"]),class:"cursor-pointer"})]),key:"1"}:void 0]),1032,["options","modelValue","label"])):$("",!0)}};const Ke={class:"upCraftArea"},We={__name:"CraftResults",props:{CraftResults:y(null)},setup(m){J(),ne(),C("itemId");const d=m,l=(t,r)=>t.id>r.id?1:-1,_=y(0);function i(t,r){return r?t+'<br><span style="color: gray">\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439</span>':t}const u=H(()=>{if(!d.CraftResults.length)return[];switch(_.value){case 0:return[...d.CraftResults].sort(l);default:return l}});return(t,r)=>(o(),L(V,null,[r[0]||(r[0]=w("div",{class:"MainName"},"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0445:",-1)),w("div",Ke,[(o(!0),L(V,null,X(u.value,I=>(o(),S(K,{key:I.id,class:"no-padding",dense:"",flat:"",to:"/item/"+I.id},{default:a(()=>[e(N,{toolText:i(I.name,I.personal),icon:I.icon,grade:I.grade},null,8,["toolText","icon","grade"])]),_:2},1032,["to"]))),128))])],64))}};var Je=G(We,[["__scopeId","data-v-fe286c14"]]);class ge{constructor({id:d=-1,craftName:l="\u041D\u043E\u0432\u044B\u0439 \u0438\u0442\u0435\u043C",resultItemId:_=-1,countData:i,Prof:u,profNeed:t=0,doodName:r=""}={}){W(this,"id");W(this,"craftName");W(this,"resultItemId");W(this,"countData");W(this,"Prof");W(this,"profNeed");W(this,"doodName");this.id=d,this.craftName=l,this.resultItemId=_,this.countData=i,this.Prof=u||new Ve,this.profNeed=t,this.doodName=r}static async setAsUBest(d,l){var u;const _=String("https://api.aa.dllib.ru/")+"api/craft.php",i={method:"setAsUBest",craftId:l};try{const t=await q.post(_,{params:i});if(!((u=t==null?void 0:t.data)!=null&&u.result))throw new Error;return d.notify(re()),!0}catch(t){return d.notify(j(t)),!1}}static async resetUBest(d,l){var u;const _=String("https://api.aa.dllib.ru/")+"api/craft.php",i={method:"resetUBest",craftId:l};try{const t=await q.post(_,{params:i});if(!((u=t==null?void 0:t.data)!=null&&u.result))throw new Error;return d.notify(re()),!0}catch(t){return d.notify(j(t)),!1}}}const Xe={key:0,class:"CraftInfo"},Ye={class:"InfoCol"},Ze=["innerHTML"],et=["innerHTML"],tt={class:"InfoCol"},at={class:"InfoCol"},ut=Te({__name:"CraftInfo",props:{craft:{}},emits:["onSetUBest"],setup(m,{emit:d}){const l=O(),_=m,i=y(!1),u=y(_.craft.countData.isUBest),t=y(_.craft.countData.isBest),r=d,I=C("Item"),h=H(()=>{if(!I.value.Pricing.isGoldable)return 0;if(!I.value.Pricing.Price.price)return!1;let n=I.value.Pricing.Price.price;return n=String(n),n=n.replace(/[^0-9]/g,"")*.9,n=Math.round(n),n-_.craft.countData.craftCost});function b(n){return n?n<1e3?n:Math.round(n/1e3)+"k":""}function p(n){return Math.round(n*100)/100}function f(){Qe.setBuyOnly(l,I.value.id,I.value.isBuyOnly)}function P(){u.value?v():g()}async function v(){i.value=!0,await ge.setAsUBest(l,_.craft.id)&&r("onSetUBest"),i.value=!1}async function g(){i.value=!0,await ge.resetUBest(l,_.craft.id)&&r("onSetUBest"),i.value=!1}return(n,s)=>n.craft?(o(),L("div",Xe,[w("div",Ye,[t.value?(o(),S(U,{key:0,dense:""},{default:a(()=>[e(k,null,{default:a(()=>[B(R(u.value?"\u0412\u044B\u0431\u0440\u0430\u043D \u0432\u0430\u043C\u0438":"\u0412\u044B\u0431\u0440\u0430\u043D \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u043E\u043C"),1)]),_:1})]),_:1})):$("",!0),e(U,{dense:""},{default:a(()=>[e(k,null,{default:a(()=>s[5]||(s[5]=[B(" Craft Id: ")])),_:1}),e(k,{side:""},{default:a(()=>[e(K,{label:n.craft.id,"icon-right":"content_copy",class:"no-padding",dense:"",flat:"",onClick:s[0]||(s[0]=E=>c(Re)(n.craft.id,c(l)))},null,8,["label"])]),_:1})]),_:1}),e(U,{dense:"",class:"listItem"},{default:a(()=>[e(k,null,{default:a(()=>[e(D,null,{default:a(()=>s[6]||(s[6]=[B(" \u041A\u043E\u044D\u0444 SPM: ")])),_:1})]),_:1}),e(k,{side:""},{default:a(()=>[e(D,null,{default:a(()=>[B(R(p(n.craft.countData.spmu)),1)]),_:1})]),_:1})]),_:1}),e(U,{dense:"",class:"listItem"},{default:a(()=>[e(k,null,{default:a(()=>[e(D,null,{default:a(()=>s[7]||(s[7]=[B(" \u0421\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ")])),_:1})]),_:1}),e(k,{side:""},{default:a(()=>[e(D,null,{default:a(()=>[w("span",{innerHTML:c(Z)(n.craft.countData.craftCost)},null,8,Ze)]),_:1})]),_:1})]),_:1}),h.value!==!1?(o(),S(U,{key:1,dense:"",class:"listItem"},{default:a(()=>[e(k,null,{default:a(()=>[e(D,null,{default:a(()=>s[8]||(s[8]=[B(" \u041F\u0440\u0438\u0431\u044B\u043B\u044C: ")])),_:1})]),_:1}),e(k,{side:""},{default:a(()=>[e(D,null,{default:a(()=>[w("span",{innerHTML:c(Z)(h.value)},null,8,et)]),_:1})]),_:1})]),_:1})):$("",!0)]),w("div",tt,[e(de,{dense:""},{default:a(()=>[e(U,{dense:""},{default:a(()=>[e(k,{avatar:""},{default:a(()=>{var E;return[e(N,{grade:((E=n.craft.Prof)==null?void 0:E.lvl)||0,locIcon:"/img/profs/"+n.craft.Prof.id+".png","tool-text":"\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F",size:"30px"},null,8,["grade","locIcon"])]}),_:1}),e(k,null,{default:a(()=>[B(R(n.craft.Prof.name),1)]),_:1}),e(k,{side:""},{default:a(()=>[B(R(b(n.craft.profNeed)),1)]),_:1})]),_:1}),e(U,{dense:""},{default:a(()=>[e(k,{avatar:""},{default:a(()=>[e(N,{grade:1,locIcon:"/img/interface/doodad.png","tool-text":"\u041F\u0440\u0438\u0441\u043F\u043E\u0441\u043E\u0431\u043B\u0435\u043D\u0438\u0435",size:"30px"})]),_:1}),e(k,null,{default:a(()=>[B(R(n.craft.doodName),1)]),_:1}),e(k,{side:""})]),_:1}),t.value&&c(I).isMat&&!c(I).personal?pe((o(),S(U,{key:0,tag:"label",dense:""},{default:a(()=>[e(ie,{class:"bg-tooltip"},{default:a(()=>s[9]||(s[9]=[B(" \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u0440\u0430\u0441\u0447\u0435\u0442\u0430\u0445 \u0446\u0435\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043A\u0440\u0430\u0444\u0442\u0430 ")])),_:1}),e(k,{avatar:""},{default:a(()=>[e(ye,{size:"2.5em"},{default:a(()=>s[10]||(s[10]=[w("img",{src:"/img/interface/perdaru.png",alt:""},null,-1)])),_:1})]),_:1}),e(k,null,{default:a(()=>[e(D,null,{default:a(()=>s[11]||(s[11]=[B("\u041F\u043E\u043A\u0443\u043F\u0430\u0435\u043C\u044B\u0439")])),_:1})]),_:1}),e(k,{side:""},{default:a(()=>[e(ve,{modelValue:c(I).isBuyOnly,"onUpdate:modelValue":[s[1]||(s[1]=E=>c(I).isBuyOnly=E),s[2]||(s[2]=E=>f())],disable:i.value},null,8,["modelValue","disable"])]),_:1})]),_:1})),[[_e]]):$("",!0),c(I).personal?$("",!0):pe((o(),S(U,{key:1,tag:"label",dense:""},{default:a(()=>[e(ie,{class:"bg-tooltip"},{default:a(()=>s[12]||(s[12]=[B(" \u0412\u044B\u0431\u0438\u0440\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0440\u0435\u0446\u0435\u043F\u0442 \u043F\u0440\u0438 \u0440\u0430\u0441\u0447\u0435\u0442\u0430\u0445 ")])),_:1}),e(k,{avatar:""},{default:a(()=>[e(N,{grade:12,locIcon:"/img/interface/perdaru.png","tool-text":"\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439",size:"30px"})]),_:1}),e(k,null,{default:a(()=>[e(D,null,{default:a(()=>s[13]||(s[13]=[B("\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439")])),_:1})]),_:1}),e(k,{side:""},{default:a(()=>[e(ve,{modelValue:u.value,"onUpdate:modelValue":[s[3]||(s[3]=E=>u.value=E),s[4]||(s[4]=E=>P())]},null,8,["modelValue"])]),_:1})]),_:1})),[[_e]])]),_:1})]),w("div",at,[e(de,{dense:""},{default:a(()=>[e(U,{dense:"",class:"listItem"},{default:a(()=>[e(k,null,{default:a(()=>[e(D,null,{default:a(()=>s[14]||(s[14]=[B(" \u041E\u0420 \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0442: ")])),_:1})]),_:1}),e(k,{side:""},{default:a(()=>[e(D,null,{default:a(()=>[B(R(p(n.craft.countData.LaborData.forThisCraftBonused))+" ",1),s[15]||(s[15]=w("img",{class:"smallIcon",src:"/img/valuta/2.png",alt:""},null,-1))]),_:1})]),_:1})]),_:1}),e(U,{dense:"",class:"listItem"},{default:a(()=>[e(k,{class:"no-padding"},{default:a(()=>[e(D,null,{default:a(()=>s[16]||(s[16]=[B(" \u041E\u0420 \u043D\u0430 1\u0448\u0442: ")])),_:1})]),_:1}),e(k,{side:""},{default:a(()=>[e(D,null,{default:a(()=>[B(R(p(n.craft.countData.LaborData.forOneUnitOfThisCraft))+" ",1),s[17]||(s[17]=w("img",{class:"smallIcon",src:"/img/valuta/2.png",alt:""},null,-1))]),_:1})]),_:1})]),_:1}),e(U,{dense:"",class:"listItem"},{default:a(()=>[e(k,null,{default:a(()=>[e(D,null,{default:a(()=>s[18]||(s[18]=[B(" \u041E\u0420 \u043D\u0430 \u0446\u0435\u043F\u043E\u0447\u043A\u0443: ")])),_:1})]),_:1}),e(k,{side:""},{default:a(()=>[e(D,null,{default:a(()=>[B(R(p(n.craft.countData.laborTotal))+" ",1),s[19]||(s[19]=w("img",{class:"smallIcon",src:"/img/valuta/2.png",alt:""},null,-1))]),_:1})]),_:1})]),_:1})]),_:1})])])):$("",!0)}});var rt=G(ut,[["__scopeId","data-v-3732aa72"]]);const lt={class:"MatRow"},nt={__name:"MatRow",props:{Craft:y(null)},setup(m){const d=C("itemId"),l=C("Item");function _(u){var t,r;return(t=u==null?void 0:u.Price)!=null&&t.method?u.Item.name+'<br><span style="color: '+le(((r=u==null?void 0:u.Price)==null?void 0:r.method)||"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")+'">'+fe((u==null?void 0:u.Price)||{})+":</span><br>"+Z(u.Price.price,500):"\u041A\u0430\u043A\u0430\u044F-\u0442\u043E \u0444\u0438\u0433\u043D\u044F..."}function i(u){d.value=u}return(u,t)=>(o(),L("div",lt,[e(U,{dense:"",class:"matArea"},{default:a(()=>[e(k,{avatar:"",style:{width:"max-content"},class:"no-padding"},{default:a(()=>[e(N,{grade:c(l).grade,icon:c(l).icon,amount:m.Craft.resultAmount,"tool-text":c(l).name,size:"70px",onClick:t[0]||(t[0]=r=>i(c(l).id))},null,8,["grade","icon","amount","tool-text"])]),_:1}),e(k,{class:"no-padding",top:"",thumbnail:""},{default:a(()=>[e(D,null,{default:a(()=>[(o(!0),L(V,null,X(m.Craft.Mats,r=>(o(),S(K,{key:r.id,class:"no-padding",dense:"",flat:"",to:"/item/"+r.id},{default:a(()=>[e(N,{grade:r.grade?r.grade:r.Item.grade,icon:r.Item.icon,amount:r.need,"tool-text":_(r)},null,8,["grade","icon","amount","tool-text"])]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})]))}};var ot=G(nt,[["__scopeId","data-v-a7cee79a"]]);const st={class:"MatPool"},it={__name:"MatPool",props:{matPool:y(null)},setup(m){const d=C("resultAmount");function l(i){return i.Item.name+"<br>"+_(i.need*d)+'\u0448\u0442<br><span style="color: '+le(i.Price.method)+'">'+fe(i.Price)+":</span><br>"+Z(i.Price.price)+"<br>"}function _(i){return Math.round(i*10)/10}return(i,u)=>(o(),S(ae,{label:"\u0412\u0441\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",popup:""},{default:a(()=>[w("div",st,[(o(!0),L(V,null,X(m.matPool,t=>(o(),S(K,{key:t.id,class:"no-padding",dense:"",flat:"",to:"/item/"+t.id},{default:a(()=>[e(N,{grade:t.grade?t.grade:t.Item.grade,icon:t.Item.icon,amount:_(t.need*c(d)),"tool-text":l(t)},null,8,["grade","icon","amount","tool-text"])]),_:2},1032,["to"]))),128))])]),_:1}))}};var dt=G(it,[["__scopeId","data-v-1e82fef1"]]);const ct={class:"MatPool"},ft={__name:"TrashPool",props:{trashPool:y(null)},setup(m){const d=C("resultAmount");function l(i){return i.Item.name+"<br>"+_(i.need*d)+'\u0448\u0442<br><span style="color: '+le(i.Price.method)+'">'+fe(i.Price)+":</span><br>"+Z(i.Price.price)+"<br>"}function _(i){return Math.round(i*10)/10}return(i,u)=>(o(),S(ae,{label:"\u0412\u0441\u0435 \u043E\u0442\u0445\u043E\u0434\u044B",popup:""},{default:a(()=>[w("div",ct,[(o(!0),L(V,null,X(m.trashPool,t=>(o(),S(K,{key:t.id,class:"no-padding",dense:"",flat:"",to:"/item/"+t.id},{default:a(()=>[e(N,{grade:t.grade?t.grade:t.Item.grade,icon:t.Item.icon,amount:_(t.need*c(d)),"tool-text":l(t)},null,8,["grade","icon","amount","tool-text"])]),_:2},1032,["to"]))),128))])]),_:1}))}};var mt=G(ft,[["__scopeId","data-v-ba009fcc"]]);const pt={class:"wrapContainer"},vt={class:"wrapElement"},_t={__name:"CraftCard",props:{Craft:y(null)},emits:["onSetUBest","delUBest"],setup(m,{emit:d}){O(),C("itemId");const l=C("Item"),_=m,i=C("progress");C("isSingleCraft"),F("resultAmount",_.Craft.resultAmount);const u=d;return(t,r)=>c(l)&&!c(i)?(o(),S(Ce,{key:0,class:"CraftCard","transition-show":"jump-down","transition-hide":"jump-up"},{default:a(()=>[e(oe,null,{default:a(()=>[e(rt,{craft:m.Craft,onOnSetUBest:r[0]||(r[0]=I=>u("onSetUBest"))},null,8,["craft"])]),_:1}),e(oe,null,{default:a(()=>[w("div",pt,[w("div",vt,[e(ot,{Craft:m.Craft},null,8,["Craft"])])])]),_:1}),m.Craft.matPool?(o(),S(oe,{key:0},{default:a(()=>[e(dt,{matPool:m.Craft.matPool},null,8,["matPool"]),e(mt,{trashPool:m.Craft.trashPool},null,8,["trashPool"])]),_:1})):$("",!0)]),_:1})):$("",!0)}};var Ie=G(_t,[["__scopeId","data-v-394cf200"]]);const gt={key:1},It={__name:"CraftList",setup(m,{expose:d}){const l=O(),_=String("https://api.aa.dllib.ru/"),i=J(),u=C("Item");C("itemId");const t=y(null),r=y([]),I=y([]),h=C("CraftProgress"),b=H(()=>!(r.value&&r.value.length));F("isSingleCraft",b),d({loadCrafts:p}),te(u,()=>{u.value&&u.value.craftable},{deep:!0}),ue(()=>{console.log("craftList mounted")});function p(){!u.value.craftable||(I.value=[],h.value=!0,q.post(_+"api/craft.php",{params:{method:"getList",itemId:i.params.id}}).then(f=>{var P,v,g,n,s,E,ee,x,A,T,z,M,Q;if(!((P=f==null?void 0:f.data)!=null&&P.result))throw new Error;if((n=(g=(v=f==null?void 0:f.data)==null?void 0:v.data)==null?void 0:g.Lost)!=null&&n.length){I.value=(ee=(E=(s=f==null?void 0:f.data)==null?void 0:s.data)==null?void 0:E.Lost)!=null?ee:[],r.value=[],t.value=null;return}r.value=(T=(A=(x=f==null?void 0:f.data)==null?void 0:x.data)==null?void 0:A.otherCrafts)!=null?T:[],t.value=(Q=(M=(z=f==null?void 0:f.data)==null?void 0:z.data)==null?void 0:M.mainCraft)!=null?Q:null}).catch(f=>{r.value=[],t.value=null,l.notify(j(f,"\u041E\u0439! CraftList \u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 :("))}).finally(()=>{h.value=!1}))}return(f,P)=>(o(),L(V,null,[t.value?(o(),S(Ie,{Craft:t.value,key:t.value.id,onOnSetUBest:P[0]||(P[0]=v=>p())},null,8,["Craft"])):(o(),L("div",gt,"\u0420\u0435\u0446\u0435\u043F\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B")),r.value.length?(o(),S(ae,{key:2,label:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0446\u0435\u043F\u0442\u044B",popup:""},{default:a(()=>[(o(!0),L(V,null,X(r.value,v=>(o(),S(Ie,{key:v.id,Craft:v,onOnSetUBest:P[1]||(P[1]=g=>p())},null,8,["Craft"]))),128))]),_:1})):$("",!0),I.value&&I.value.length?(o(),S(he,{key:3,Lost:I.value,msg:`<b>\u0420\u0430\u0441\u0447\u0435\u0442 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0441\u044F.</b><br>
    \u0412 \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0445 \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u0445 \u0435\u0441\u0442\u044C \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0435 \u0446\u0435\u043D\u044B.<br>
    \u0411\u0435\u0437 \u043D\u0438\u0445 \u044F \u043D\u0435 \u043C\u043E\u0433\u0443 \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0438 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C.`},null,8,["Lost"])):$("",!0)],64))}};var yt=G(It,[["__scopeId","data-v-3d11ac26"]]);const Ct={class:"itemIconsArea"},Pt={__name:"CurrencyTradable",setup(m){O(),J(),C("progress"),C("Item");const d=C("TradableItems"),l=(u,t)=>u.categId>t.categId?1:-1,_=y(0),i=H(()=>{if(!d.value)return[];switch(_.value){case 0:return[...d.value].sort(l);default:return l}});return(u,t)=>(o(),L("div",Ct,[(o(!0),L(V,null,X(i.value,r=>(o(),S(K,{key:r.id,class:"no-padding",dense:"",flat:"",to:"/item/"+r.id},{default:a(()=>[e(N,{icon:r.icon,grade:r.grade,"tool-text":r.name},null,8,["icon","grade","tool-text"])]),_:2},1032,["to"]))),128))]))}};const ht=["src"],bt=["innerHTML"],kt={__name:"PriceCurrencyItem",props:{CurItem:y(null)},emits:["delPrice","updated"],setup(m,{emit:d}){const l=O(),_=String("https://api.aa.dllib.ru/"),i=ne(),u=m,t=d,r=y(u.CurItem.Item.Price.price),I=y(null),h=y(!1);y(u.CurItem.Item.Price.buyOnly);const b=C("curAccount");function p(g){i.push({path:"/item/"+g})}function f(){q.post(_+"api/price.php",{params:{method:"del",itemId:u.CurItem.Item.id}}).then(g=>{var n,s,E;if(!((n=g==null?void 0:g.data)!=null&&n.result))throw new Error;l.notify(re((E=(s=g==null?void 0:g.data)==null?void 0:s.result)!=null?E:"\u041E\u0439!"))}).catch(g=>{l.notify(j(g))})}function P(){I.value.blur(),q.post(_+"api/price.php",{params:{method:"set",price:r.value,itemId:u.CurItem.Item.id}}).then(g=>{var n,s,E;if(!((n=g==null?void 0:g.data)!=null&&n.result))throw new Error;l.notify(re((E=(s=g==null?void 0:g.data)==null?void 0:s.result)!=null?E:"\u041E\u0439!")),t("updated")}).catch(g=>{l.notify(j(g))})}function v(g){Fe(g).then(()=>{l.notify({color:"positive",position:"center",message:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E",icon:"content_copy",timeout:1})}).catch(()=>{})}return(g,n)=>(o(),S(U,{dense:"",class:"PriceCell"},{default:a(()=>[e(k,null,{default:a(()=>[e(D,{lines:1},{default:a(()=>[w("div",{class:"PriceLabel",onClick:n[0]||(n[0]=s=>v(m.CurItem.Item.name))},R(m.CurItem.Item.name),1)]),_:1}),e(Pe,{mask:"## ## ##",class:"PriceInput",label:c(ce)(m.CurItem.Item.Price.updatedAt)+" - "+m.CurItem.Item.Price.author,"label-color":c(le)(m.CurItem.Item.Price.method),dense:"",filled:"",borderless:"","reverse-fill-mask":"",ref_key:"priceRef",ref:I,modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=s=>r.value=s),onFocus:n[3]||(n[3]=s=>h.value=!0),onBlur:n[4]||(n[4]=s=>h.value=!1)},{before:a(()=>[e(K,{class:"no-padding",dense:"",flat:"",to:"/item/"+m.CurItem.Item.Price.itemId,onClick:n[1]||(n[1]=s=>p(m.CurItem.Item.Price.itemId))},{default:a(()=>[e(N,{icon:m.CurItem.Item.icon,grade:m.CurItem.Item.grade,"tool-text":m.CurItem.Item.name},null,8,["icon","grade","tool-text"])]),_:1},8,["to"])]),append:a(()=>[h.value?(o(),S(K,{key:0,label:"Ok",class:"DefBtn",dense:"","no-caps":"",flat:"",onClick:P})):$("",!0)]),after:a(()=>[e(ie,null,{default:a(()=>n[5]||(n[5]=[B("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")])),_:1}),e(Oe,{onOnOk:f,disable:m.CurItem.Item.Price.accountId!==c(b).id},null,8,["disable"])]),_:1},8,["label","label-color","modelValue"]),e(D,{style:{"font-size":"14px",padding:"3px 0"}},{default:a(()=>[n[6]||(n[6]=B(" 1")),w("img",{class:"imgValut",src:"/img/valuta/"+m.CurItem.Item.currencyId+".png",alt:""},null,8,ht),n[7]||(n[7]=B(" = ")),w("span",{innerHTML:c(Z)(m.CurItem.currencyPrice)},null,8,bt)]),_:1})]),_:1})]),_:1}))}};var St=G(kt,[["__scopeId","data-v-7d67eeeb"]]);const Bt={key:0},$t={class:"MainName"},xt=["src"],Lt={key:1},wt=["src"],At={key:2,class:"PricesArea"},Dt={key:0},Et={key:1},Tt=["src"],Ut={__name:"CurrencyArea",setup(m){const d=O(),l=String("https://api.aa.dllib.ru/");J();const _=C("progress"),i=C("CurrencyProgress"),u=C("Item"),t=y(null),r=H(()=>t.value?t.value.TradableItems:[]),I=H(()=>u.value.categId===173?u.value.id:u.value.currencyId);F("TradableItems",r),te(u,()=>{u.value&&h()},{deep:!0}),ue(()=>{h()});function h(){i.value=!0,q.post(l+"api/price.php",{params:{method:"getCurrency",id:I.value}}).then(b=>{var p,f,P;if(!((p=b==null?void 0:b.data)!=null&&p.result))throw new Error;t.value=(P=(f=b==null?void 0:b.data)==null?void 0:f.data)!=null?P:null}).catch(b=>{t.value=null,d.notify(j(b,"\u041E\u0439! Currency \u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 :("))}).finally(()=>{_.value=!1,i.value=!1})}return(b,p)=>t.value?(o(),L("div",Bt,[e(ae,{label:"\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u0440 \u0432\u0430\u043B\u044E\u0442\u044B",icon:"img:/img/valuta/"+t.value.id+".png"},{default:a(()=>[e(Ne,{price:t.value.Price},null,8,["price"]),w("div",$t,[p[0]||(p[0]=B("\u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0437\u0430 ")),w("img",{class:"imgValut",src:"/img/valuta/"+t.value.id+".png",alt:""},null,8,xt)]),r.value.length?(o(),S(Pt,{key:0})):$("",!0),t.value.median?(o(),L("div",Lt,[p[1]||(p[1]=B(" \u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0446\u0435\u043D\u0430 ")),w("img",{class:"imgValut",src:"/img/valuta/"+t.value.id+".png",alt:""},null,8,wt),p[2]||(p[2]=B(": ")),e(me,{price:t.value.median,"currency-id":500},null,8,["price"])])):$("",!0),t.value.MonetisationItems.length?(o(),L("div",At,[(o(!0),L(V,null,X(t.value.MonetisationItems,f=>(o(),S(St,{key:f.id,CurItem:f,onUpdated:h,onDelPrice:h},null,8,["CurItem"]))),128))])):$("",!0),t.value.lost.length?(o(),L(V,{key:3},[t.value.MonetisationItems.length?(o(),L("div",Dt,p[3]||(p[3]=[B(" \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C."),w("br",null,null,-1)]))):(o(),L("div",Et,[p[4]||(p[4]=B(" \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0440\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0440\u0435\u0434\u043D\u044E\u044E \u0446\u0435\u043D\u0443 ")),w("img",{class:"imgValut",src:"/img/valuta/"+t.value.id+".png",alt:""},null,8,Tt),p[5]||(p[5]=w("br",null,null,-1))])),e(ae,{label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0446\u0435\u043D\u044B",icon:"add"},{default:a(()=>[e(he,{Lost:t.value.lost,msg:"\u0427\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0446\u0435\u043D \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0443, \u0442\u0435\u043C \u0442\u043E\u0447\u043D\u0435\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"},null,8,["Lost"])]),_:1})],64)):$("",!0)]),_:1},8,["icon"])])):$("",!0)}},Mt={__name:"PriceInput",props:{Price:y(null)},emits:["delPrice","updated"],setup(m,{emit:d}){const l=O(),_=String("https://api.aa.dllib.ru/"),i=C("curAccount"),u=m,t=y({...u.Price}),r=C("Item"),I=y(null);te(u,()=>{t.value={...u.Price}});const h=d,b=H(()=>{switch(!0){case!i.value.settings.serverGroupId:return!0;case!r.value.Pricing.isGoldable:return!0;default:return!1}}),p=H(()=>{if(!i.value.settings.serverGroupId)return"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D";switch(!0){case t.value.price===0:return"";case t.value.price>0:return"";case t.value.price==="":return"\u041D\u0435 \u0432\u0438\u0436\u0443";case t.value.price===void 0:return"\u041D\u0435 \u0432\u0438\u0436\u0443";case t.value.price===null:return"\u041D\u0435 \u0432\u0438\u0436\u0443";default:return""}}),f=H(()=>{switch(!0){case!r.value.Pricing.isGoldable:return"\u041D\u0435\u043B\u044C\u0437\u044F \u043F\u0440\u043E\u0434\u0430\u0442\u044C";case t.value.method==="byToNPC":return"\u041D\u041F\u0421 \u043A\u0443\u043F\u0438\u0442 \u0437\u0430";case t.value.method==="empty":return"\u0426\u0435\u043D\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430";case!t.value.author:return"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439";case!i.value.settings.serverGroupId:return"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D";case!b.value:return ce(t.value.updatedAt)+" - "+t.value.author;default:return"\u0426\u0435\u043D\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"}});function P(){I.value.blur(),q.post(_+"api/price.php",{params:{method:"set",price:t.value.price,itemId:r.value.id}}).then(v=>{var g,n,s;if(!((g=v==null?void 0:v.data)!=null&&g.result))throw new Error;l.notify(re((s=(n=v==null?void 0:v.data)==null?void 0:n.result)!=null?s:"\u041E\u0439!")),h("updated")}).catch(v=>{l.notify(j(v))})}return(v,g)=>(o(),S(Pe,{modelValue:t.value.price,"onUpdate:modelValue":g[1]||(g[1]=n=>t.value.price=n),filled:"",label:f.value,"label-color":c(le)(t.value.method),mask:"## ## ##",ref_key:"priceRef",ref:I,disable:!c(r).Pricing.isGoldable||b.value,"reverse-fill-mask":"",rules:[n=>!p.value.length||p.value]},{append:a(()=>[p.value===""&&!b.value?(o(),S(K,{key:0,label:"Ok",class:"DefBtn",dense:"","no-caps":"",onClick:g[0]||(g[0]=n=>P())})):$("",!0)]),_:1},8,["modelValue","label","label-color","disable","rules"]))}};const Rt={style:{width:"100%"}},Ft={key:0},Qt={key:1},Nt=["innerHTML"],Vt={__name:"PriceCard",emits:["updated"],setup(m,{emit:d}){const l=C("Item"),_=d;return(i,u)=>(o(),L("div",Rt,[c(l)?(o(),S(Ce,{key:0,class:"PriceCard"},{default:a(()=>[e(Mt,{Price:c(l).Pricing.Price,onUpdated:u[0]||(u[0]=t=>_("updated"))},null,8,["Price"]),c(l).isTradeNPC?(o(),L("div",Ft,[u[1]||(u[1]=B("\u041F\u0440\u043E\u0434\u0430\u0435\u0442\u0441\u044F \u0443 NPC: ")),e(me,{price:c(l).Pricing.priceFromNPC,currencyId:c(l).Pricing.currencyId},null,8,["price","currencyId"])])):c(l).Pricing.goldable?(o(),L("div",Qt,[w("span",{innerHTML:c(Z)(c(l).Pricing.Price.price)},null,8,Nt)])):$("",!0)]),_:1})):$("",!0)]))}};var be=G(Vt,[["__scopeId","data-v-4b833810"]]);const Ot={__name:"PriceHistory",setup(m){const d=O(),l=String("https://api.aa.dllib.ru/"),_=String("https://auth.symphograph.ru/"),i=J(),u=C("curAccount"),t=C("PriceHistoryProgress");F("progress",t);const r=y([]),I=C("ServerGroupList"),h=y(u.value.settings.serverGroupId);H(()=>{var P;return(P=r.value)!=null&&P.length?h.value===100?r.value:r.value.filter(v=>v.serverGroupId===h.value):[]});function b(f){h.value=f,p()}function p(){t.value=!0,q.post(l+"/api/price.php",{params:{method:"history",itemId:i.params.id,serverGroupId:h.value}}).then(f=>{var P,v;if(!((P=f==null?void 0:f.data)!=null&&P.result))throw new Error;r.value=((v=f==null?void 0:f.data)==null?void 0:v.data)||[]}).catch(f=>{d.notify(j(f))}).finally(()=>{t.value=!1})}return ue(()=>{}),(f,P)=>(o(),S(ae,{label:"\u0422\u0435\u043A\u0443\u0449\u0438\u0435 \u0446\u0435\u043D\u044B",onBeforeShow:P[1]||(P[1]=v=>p()),popup:""},{default:a(()=>[e(de,{dense:"",separator:""},{default:a(()=>[e(U,null,{default:a(()=>[e(k,null,{default:a(()=>[e(D,null,{default:a(()=>[e(He,{groupId:h.value,onOnSelect:P[0]||(P[0]=v=>b(v)),ref:"refServerGroupSelect"},null,8,["groupId"])]),_:1})]),_:1})]),_:1}),(o(!0),L(V,null,X(r.value,v=>(o(),S(U,{key:String(v.accountId)+String(v.serverGroupId)+v.updatedAt,style:{padding:"1em"}},{default:a(()=>[e(k,{avatar:""},{default:a(()=>[e(ye,null,{default:a(()=>[e(Ge,{src:c(_)+"img/avatars/"+v.avaFileName},null,8,["src"])]),_:2},1024)]),_:2},1024),e(k,null,{default:a(()=>[e(D,{caption:""},{default:a(()=>[B(R(c(ce)(v.updatedAt)+" - "+v.publicNick),1)]),_:2},1024),h.value===100?(o(),S(D,{key:0,caption:""},{default:a(()=>[B(R(c(I).find(g=>g.id===v.serverGroupId).label),1)]),_:2},1024)):$("",!0),e(D,null,{default:a(()=>[e(me,{price:v.price},null,8,["price"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}};const Gt={key:0,class:"ItemArea"},Ht={key:4},qt={key:5},jt={__name:"ItemArea",setup(m,{expose:d}){const l=O(),_=String("https://api.aa.dllib.ru/"),i=J(),u=C("Item");C("itemId");const t=C("progress"),r=C("ItemProgress"),I=y(!1);F("PriceHistoryProgress",I);const h=y(null);d({loadItem:b}),ue(()=>{i.params.id&&b()});function b(){r.value=!0,q.post(_+"/api/item.php",{params:{method:"get",id:i.params.id}}).then(p=>{var f,P,v;if(!((f=p==null?void 0:p.data)!=null&&f.result))throw new Error;u.value=(v=(P=p==null?void 0:p.data)==null?void 0:P.data)!=null?v:null,r.value=!1,console.log("Item loaded"),Ue(()=>{u.value.craftable&&h.value.loadCrafts()}),se.set("lastItem",u.value.id)}).catch(p=>{u.value=null,l.notify(j(p))}).finally(()=>{t.value=!1,r.value=!1})}return(p,f)=>{var P,v;return c(u)?(o(),L("div",Gt,[c(u)&&((P=c(u).Info)==null?void 0:P.CraftResults)?(o(),S(Je,{key:0,CraftResults:c(u).Info.CraftResults},null,8,["CraftResults"])):$("",!0),c(l).platform.is.mobile?(o(),S(be,{key:1,onUpdated:b})):$("",!0),c(r)?$("",!0):(o(),L(V,{key:2},[c(u).currencyId&&c(u).currencyId!==500||c(u).categId===173?(o(),S(Ut,{key:0})):$("",!0)],64)),(v=c(u))!=null&&v.craftable?(o(),S(yt,{key:3,ref_key:"refCraftList",ref:h},null,512)):$("",!0),c(u).craftable?$("",!0):(o(),L("div",Ht,"\u041D\u0435\u043A\u0440\u0430\u0444\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E")),!c(r)&&c(u).Pricing.isGoldable?(o(),L("div",qt,[e(Ot)])):$("",!0)])):$("",!0)}}};var zt=G(jt,[["__scopeId","data-v-2bce3e0f"]]);const Kt={class:"WindowArea column"},Wt={style:{"min-width":"20em",width:"calc(100% - 20em)"}},Jt={key:0,style:{width:"20em"}},Xt={__name:"ItemPage",setup(m){const d=J(),l=ne(),_=O(),i=C("curAccount");y(122345678);const u=C("categMode"),t=y(null),r=C("progress"),I=y(!1);F("ItemProgress",I);const h=y(!1);F("CraftProgress",h);const b=y(!1);F("CurrencyProgress",b);const p=y(0);F("itemId",p);const f=y(null);F("Item",f);const P=y(!1);F("needUpdate",P);const v=y(null);F("selectedItem",v);const g=y([]);F("SearchList",g);const n=y(null);function s(){return r.value||I.value||h.value||b.value}C("CategoriesList"),te(d,()=>{d.params.id&&g.value.length&&n.value.loadItem()},{deep:!0}),ue(()=>{(!i.value.settings.serverGroupId||i.value.settings.serverGroupId===100)&&ee(),d.params.id?p.value=d.params.id*1:se.getItem("lastItem")&&(d.params.id=se.getItem("lastItem"),l.push({path:"/item/"+d.params.id}))});function E(){u.value=!1}function ee(){_.dialog({component:qe,componentProps:{text:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D.<br>\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438?",okBtnText:"\u0412 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",cancelBtnText:"\u041D\u0435 \u0441\u0435\u0439\u0447\u0430\u0441"},cancel:!0,persistent:!0}).onOk(()=>{}).onOk(()=>{l.push("/settings")}).onCancel(()=>{}).onDismiss(()=>{})}return(x,A)=>(o(),L("div",Kt,[w("div",{class:"navigator",ref_key:"navigatorRef",ref:t},[w("div",Wt,[e(ze,{onIAmSelected:E}),e(D,{style:{padding:"0 1em"},caption:""},{default:a(()=>[B(R(f.value&&f.value.personal?"\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439":"\u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0439"),1)]),_:1})]),c(_).platform.is.desktop?(o(),L("div",Jt,[e(be)])):$("",!0)],512),e(Be,{"animation-speed":200,color:"green",indeterminate:s()},null,8,["indeterminate"]),e($e,{class:"col myScrollArea"},{default:a(()=>[g.value.length?(o(),S(zt,{key:0,ref_key:"refItemArea",ref:n},null,512)):$("",!0)]),_:1})]))}};var $a=G(Xt,[["__scopeId","data-v-584e5b5c"]]);export{$a as default};

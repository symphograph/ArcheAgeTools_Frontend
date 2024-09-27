import{r as u,n as _,q as F,f as g,_ as k,t as V,G as p,H as M,I as Z,l as U,S as W,bk as ee,bl as te,h as H,aM as ae,c as b,w as I,B as le,C as re,ab as ne,o as G,al as oe,a4 as ie,as as se,bm as Q,X as $,aY as j,bc as q,aQ as ue,bn as O,aC as ce,g as fe,i as J,K as de,F as ve,O as me,J as ge,P as be,p as R}from"./index.cf591b40.js";import{_ as pe}from"./FilterInput.a2c78056.js";import{_ as K}from"./plugin-vue_export-helper.21dcd24c.js";import{b as he,Q as z,a as A}from"./position-engine.fcb91d72.js";import{I as _e}from"./ItemIcon.ccf8782e.js";import{Q as ye}from"./QList.c381a4c6.js";import{Q as xe}from"./QScrollArea.15a45ecc.js";import{api as Se}from"./axios.c7c3d222.js";import{l as Le,n as Ce}from"./myFuncts.7b3aa3f0.js";import{u as De}from"./use-quasar.df17c2ed.js";import"./selection.cc14137b.js";import"./QScrollObserver.42abb11c.js";import"./TouchPan.dc0265e9.js";import"./format.959830d0.js";const Ie={class:"navigator"},Ne={__name:"CategoryNavigator",props:{filters:u(null)},setup(l){const r=u(l.filters);return(c,n)=>(_(),F("div",Ie,[g(k,{label:"\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435",modelValue:r.value.personal,"onUpdate:modelValue":n[0]||(n[0]=i=>r.value.personal=i)},null,8,["modelValue"]),g(k,{label:"\u041D\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435",modelValue:r.value.public,"onUpdate:modelValue":n[1]||(n[1]=i=>r.value.public=i)},null,8,["modelValue"]),g(k,{label:"\u041A\u0440\u0430\u0444\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0435",disable:!r.value.personal&&!r.value.public,modelValue:r.value.craftable,"onUpdate:modelValue":n[2]||(n[2]=i=>r.value.craftable=i)},null,8,["disable","modelValue"]),g(k,{label:"\u041D\u0435 \u043A\u0440\u0430\u0444\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0435",disable:!r.value.personal&&!r.value.public,modelValue:r.value.uncraftable,"onUpdate:modelValue":n[3]||(n[3]=i=>r.value.uncraftable=i)},null,8,["disable","modelValue"]),g(pe)]))}};var Pe=K(Ne,[["__scopeId","data-v-3fadaf37"]]);const Ve={__name:"ItemRow",props:{item:u(null)},setup(l){return(d,r)=>(_(),V(he,{tag:"label",to:"/item/"+l.item.id},{default:p(()=>[g(z,{avatar:""},{default:p(()=>[g(_e,{icon:l.item.icon,grade:l.item.grade},null,8,["icon","grade"])]),_:1}),g(z,null,{default:p(()=>[g(A,null,{default:p(()=>[M(Z(l.item.name),1)]),_:1}),l.item.personal?(_(),V(A,{key:0,caption:""},{default:p(()=>r[0]||(r[0]=[M(" \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 ")])),_:1})):U("",!0),l.item.craftable?(_(),V(A,{key:1,caption:""},{default:p(()=>r[1]||(r[1]=[M(" \u041A\u0440\u0430\u0444\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0439 ")])),_:1})):U("",!0)]),_:1})]),_:1},8,["to"]))}},we='<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';var Be=W({name:"QSpinnerDots",props:ee,setup(l){const{cSize:d,classes:r}=te(l);return()=>H("svg",{class:r.value,fill:"currentColor",width:d.value,height:d.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",innerHTML:we})}});const{passive:D}=se;var ke=W({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:ae,initialIndex:{type:Number,default:0},disable:Boolean,reverse:Boolean},emits:["load"],setup(l,{slots:d,emit:r}){const c=u(!1),n=u(!0),i=u(null),y=u(null);let x=l.initialIndex,t,f;const T=b(()=>"q-infinite-scroll__loading"+(c.value===!0?"":" invisible"));function h(){if(l.disable===!0||c.value===!0||n.value===!1)return;const o=Q(t),s=j(t),m=O(t);l.reverse===!1?Math.round(s+m+l.offset)>=Math.round(o)&&N():Math.round(s)<=l.offset&&N()}function N(){if(l.disable===!0||c.value===!0||n.value===!1)return;x++,c.value=!0;const o=Q(t);r("load",x,s=>{n.value===!0&&(c.value=!1,$(()=>{if(l.reverse===!0){const m=Q(t),X=j(t),Y=m-o;q(t,X+Y)}s===!0?P():i.value&&i.value.closest("body")&&f()}))})}function L(){x=0}function C(){n.value===!1&&(n.value=!0,t.addEventListener("scroll",f,D)),h()}function P(){n.value===!0&&(n.value=!1,c.value=!1,t.removeEventListener("scroll",f,D),f!==void 0&&f.cancel!==void 0&&f.cancel())}function w(){if(t&&n.value===!0&&t.removeEventListener("scroll",f,D),t=ue(i.value,l.scrollTarget),n.value===!0){if(t.addEventListener("scroll",f,D),l.reverse===!0){const o=Q(t),s=O(t);q(t,o-s)}h()}}function E(o){x=o}function B(o){o=parseInt(o,10);const s=f;f=o<=0?h:ce(h,isNaN(o)===!0?100:o),t&&n.value===!0&&(s!==void 0&&t.removeEventListener("scroll",s,D),t.addEventListener("scroll",f,D))}function e(o){if(a.value===!0){if(y.value===null){o!==!0&&$(()=>{e(!0)});return}const s=`${c.value===!0?"un":""}pauseAnimations`;Array.from(y.value.getElementsByTagName("svg")).forEach(m=>{m[s]()})}}const a=b(()=>l.disable!==!0&&n.value===!0);I([c,a],()=>{e()}),I(()=>l.disable,o=>{o===!0?P():C()}),I(()=>l.reverse,()=>{c.value===!1&&n.value===!0&&h()}),I(()=>l.scrollTarget,w),I(()=>l.debounce,B);let v=!1;le(()=>{v!==!1&&t&&q(t,v)}),re(()=>{v=t?j(t):!1}),ne(()=>{n.value===!0&&t.removeEventListener("scroll",f,D)}),G(()=>{B(l.debounce),w(),c.value===!1&&e()});const S=fe();return Object.assign(S.proxy,{poll:()=>{f!==void 0&&f()},trigger:N,stop:P,reset:L,resume:C,setIndex:E,updateScrollTarget:w}),()=>{const o=oe(d.default,[]);return a.value===!0&&o[l.reverse===!1?"push":"unshift"](H("div",{ref:y,class:T.value},ie(d.loading))),H("div",{class:"q-infinite-scroll",ref:i},o)}}});const Qe={class:"row justify-center q-my-md"},Te=50,Ee={__name:"ItemList",setup(l){const d=J("filteredList");Math.ceil(d.length/Te),u(!1),u(2),u(0);const r=u(20);u([{},{},{},{},{},{},{}]);const c=b(()=>{var i;return(i=d.value)!=null&&i.length?d.value.slice(0,r.value):[]});function n(i,y){setTimeout(()=>{r.value+=20,y()},1)}return(i,y)=>(_(),V(xe,{class:"col myScrollArea"},{default:p(()=>[g(ye,{dense:"",separator:""},{default:p(()=>[g(ke,{onLoad:n,offset:100},de({default:p(()=>[(_(!0),F(ve,null,me(c.value,(x,t)=>(_(),V(Ve,{key:t,item:x},null,8,["item"]))),128))]),_:2},[r.value<ge(d).length?{name:"loading",fn:p(()=>[be("div",Qe,[g(Be,{color:"primary",size:"40px"})])]),key:"0"}:void 0]),1024)]),_:1})]),_:1}))}};const Me={class:"WindowArea column"},je={__name:"CategoryPage",setup(l){const d=De(),r=J("selCategId"),c=u("");R("searchText",c);const n=u(!1),i=u({craftable:!0,uncraftable:!0,personal:!0,public:!0});u(!1);const y=b(()=>i.value.personal?C.value.filter(a=>a.personal):[]),x=b(()=>i.value.public?C.value.filter(a=>!a.personal):[]),t=b(()=>{if(!C.value||!C.value.length)return[];let e=[];return e.push(...y.value),e.push(...x.value),e}),f=b(()=>i.value.craftable?t.value.filter(a=>a.craftable):[]),T=b(()=>i.value.uncraftable?t.value.filter(a=>!a.craftable):[]),h=b(()=>{if(!t.value||!t.value.length)return[];let e=[];return e.push(...f.value),e.push(...T.value),e}),N=b(()=>{if(!h.value||!h.value.length)return[];let e=h.value,a=Le(c.value);if(a!==""){let v=a.toLowerCase();e=e.filter(S=>S.name.toLowerCase().indexOf(v)!==-1)}return e});R("filteredList",N),G(()=>{w()}),I(r,()=>{P()}),I(i.value,()=>{P()},{deep:!0});const L=u([]),C=b(()=>!L.value||!L.value.length?[]:[...L.value].filter(a=>a.categId===r.value));function P(){n.value=!0,$(()=>{n.value=!1})}function w(){let e=indexedDB.open("prepData",1);e.onupgradeneeded=function(){let a=e.result;a.objectStoreNames.contains("cachedData")||a.createObjectStore("cachedData",{keyPath:"id"})},e.onerror=function(){console.error("Error",e.error)},e.onsuccess=function(){let o=e.result.transaction("cachedData","readonly").objectStore("cachedData").get("searchList");o.onsuccess=s=>{let m=s.target.result;m?L.value=m.content:B()},o.onerror=s=>{console.log("SearchList \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D")}}}function E(e){let a=indexedDB.open("prepData",1);a.onupgradeneeded=function(){console.log("\u0438\u043D\u0438\u0446\u0438\u043B\u0438\u0430\u0437\u0438\u044F \u0431\u0434");let v=a.result;v.objectStoreNames.contains("cachedData")||v.createObjectStore("cachedData",{keyPath:"id"})},a.onerror=function(){console.error("Error",a.error)},a.onsuccess=function(){let v=a.result;console.log("\u0432\u0438\u0436\u0443 \u0431\u0434");let o=v.transaction("cachedData","readwrite").objectStore("cachedData"),s={id:"searchList",content:e},m=o.add(s);m.onsuccess=function(){console.log("\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435",m.result)},m.onerror=function(){console.log("\u041E\u0448\u0438\u0431\u043A\u0430",m.error)}}}function B(){Se.post(apiUrl+"api/options.php",{params:{method:"getSearchList"}}).then(e=>{var a,v,S,o,s;if(!((a=e==null?void 0:e.data)!=null&&a.result))throw new Error;E((S=(v=e==null?void 0:e.data)==null?void 0:v.data)!=null?S:[]),L.value=(s=(o=e==null?void 0:e.data)==null?void 0:o.data)!=null?s:[]}).catch(e=>{d.notify(Ce(e,"\u041E\u0439! Search \u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 :("))})}return(e,a)=>(_(),F("div",Me,[g(Pe,{filters:i.value},null,8,["filters"]),N.value.length&&!n.value?(_(),V(Ee,{key:0})):U("",!0)]))}};var Ye=K(je,[["__scopeId","data-v-0f19f217"]]);export{Ye as default};

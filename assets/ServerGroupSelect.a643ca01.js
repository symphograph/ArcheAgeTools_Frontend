import{Q as x,a as i,b as V}from"./position-engine.7c83a723.js";import{Q as _}from"./QSelect.e75683dc.js";import{u as A}from"./use-quasar.90e44688.js";import{api as $}from"./axios.5aa6e63e.js";import{n as w}from"./myFuncts.568a70aa.js";import{r as v,i as a,s as B,v as C,X as s,f as l,Z as c,_ as m,a1 as L,a6 as N,$ as d,be as P}from"./index.8b7d4eab.js";const D={__name:"ServerGroupSelect",props:{groupId:Number},emits:["onSelect","onSave"],setup(f,{expose:S,emit:n}){const r=v(f.groupId),I=A(),b=String("https://api.aa.dllib.ru/");a("curAccount");const g=a("AccSets"),p=v("Input"),u=a("progress"),y=a("ServerGroupList"),Q=a("selectOptionsStyle");S({saveServerGroup:G});function G(){u.value=!0,$.post(b+"api/set/server.php",{params:{serverGroupId:r.value}}).then(o=>{var e;if(!((e=o==null?void 0:o.data)!=null&&e.result))throw new Error;g.value.serverGroupId=r.value,n("onSave")}).catch(o=>{I.notify(w(o))}).finally(()=>{u.value=!1})}return(o,e)=>(B(),C(_,{modelValue:r.value,"onUpdate:modelValue":[e[0]||(e[0]=t=>r.value=t),e[3]||(e[3]=t=>n("onSelect",r.value))],options:d(y),borderless:"","option-value":"id","popup-content-style":d(Q),onFocus:e[1]||(e[1]=t=>p.value="Input InputActive"),onBlur:e[2]||(e[2]=t=>p.value="Input"),class:P(p.value),label:"\u0421\u0435\u0440\u0432\u0435\u0440","map-options":"","emit-value":""},{option:s(t=>[l(V,L(N(t.itemProps)),{default:s(()=>[l(x,null,{default:s(()=>[l(i,null,{default:s(()=>[c("\u0413\u0440\u0443\u043F\u043F\u0430 "+m(t.opt.id),1)]),_:2},1024),l(i,{caption:""},{default:s(()=>[c(m(t.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","popup-content-style","class"]))}};export{D as _};

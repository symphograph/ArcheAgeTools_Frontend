import{i as N,r as s,t as o,x as v,Y as w,af as x,l as E,a0 as p,be as V,bf as $}from"./index.312bfc2c.js";import{u as y}from"./use-quasar.d7abd3d3.js";import{api as f}from"./axios.8ef9e684.js";import{b as I,n as A}from"./myFuncts.f85c9e09.js";const Q={__name:"NickInput",setup(B){const r=y(),c=String("https://api.aa.dllib.ru/"),n=N("curAccount"),l=s(""),i=s(null),u=s("Input");function k(){return n.value.settings.publicNick.length<3?(l.value="\u041D\u0435 \u043A\u043E\u0440\u043E\u0447\u0435 3",i.value.validate(),!1):n.value.settings.publicNick.length>20?(l.value="\u041D\u0435 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 20",i.value.validate(),!1):d()?(m(),!0):(i.value.validate(),!1)}function d(){let t=n.value.settings.publicNick,e=new RegExp("^([a-zA-Z\u0430-\u044F\u0410-\u042F\u0451\u04010-9]{3,20})$"),a=new RegExp("^([a-zA-Z0-9]{3,20})$"),g=new RegExp("^([\u0430-\u044F\u0410-\u042F\u0451\u04010-9]{3,20})$");if(a.test(t)||g.test(t))return l.value="",!0;if(e.test(t))return l.value="\u041D\u0435 \u0441\u043C\u0435\u0448\u0438\u0432\u0430\u0439\u0442\u0435 \u044F\u0437\u044B\u043A\u0438",!1;l.value="\u0422\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u043A\u0432\u044B \u0438 \u0446\u0438\u0444\u0440\u044B"}function m(){f.post(c+"api/set/nick.php",{params:{nick:n.value.settings.publicNick,save:!1}}).then(t=>{var e;if(!((e=t==null?void 0:t.data)!=null&&e.result))throw new Error;l.value="",i.value.validate()}).catch(t=>{var e,a;l.value=(a=(e=t==null?void 0:t.response)==null?void 0:e.data)!=null&&a.error?t.response.data.error:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B",i.value.validate()})}function b(){i.value.blur(),f.post(c+"api/set/nick.php",{params:{nick:n.value.settings.publicNick,save:!0}}).then(t=>{var e;if(!((e=t==null?void 0:t.data)!=null&&e.result))throw new Error;r.notify(I())}).catch(t=>{r.notify(A(t))})}return(t,e)=>(o(),v($,{modelValue:p(n).settings.publicNick,"onUpdate:modelValue":[e[1]||(e[1]=a=>p(n).settings.publicNick=a),e[4]||(e[4]=a=>k())],ref_key:"nickRef",ref:i,label:"\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0439 \u043D\u0438\u043A",borderless:"",autocomplete:"off",class:V(u.value),onFocus:e[2]||(e[2]=a=>u.value="Input InputActive"),onBlur:e[3]||(e[3]=a=>u.value="Input"),rules:[a=>!l.value.length||l.value]},{append:w(()=>[l.value===""?(o(),v(x,{key:0,label:"Ok",class:"DefBtn",dense:"","no-caps":"",onClick:e[0]||(e[0]=a=>b())})):E("",!0)]),_:1},8,["modelValue","class","rules"]))}};export{Q as _};

import{i as y,r as P,s as x,v as q,X as g,ae,l as M,$ as S,be as le,bb as he,O as J,ag as we,c as I,S as $e,o as Y,U as qe,aG as Te,h as w,ab as K,aQ as Ve,a8 as Be,a3 as ve,aj as Ne,g as re,aL as Ee,b7 as Re,H as oe,aS as Qe,B as O,y as Le,aT as Me,ar as z,aU as ee,aV as pe,aq as te,w as Ue,n as De,at as Oe,bg as Ke,I as ie,bh as Fe,K as Ge,M as We,V as ze,f as m,a1 as Pe,a6 as ke,Z as j,_ as se,a5 as ue,av as Z,t as U,F as ce,a4 as Se,m as je,p as Xe}from"./index.ef28cfcc.js";import{Q as He}from"./QTabs.f708b23c.js";import{g as fe,s as me}from"./TouchPan.f4f61c8d.js";import{c as Ye}from"./selection.e0a85ebc.js";import{u as Ze}from"./use-cache.b0833c75.js";import{Q as Je}from"./QScrollArea.65f95583.js";import{api as Q}from"./axios.c040a620.js";import{u as et}from"./use-meta.d65e4da6.js";import{u as L}from"./use-quasar.5324f940.js";import{b as F,n as D,e as tt}from"./myFuncts.bc1bbbc0.js";import{_ as at}from"./ServerGroupSelect.f4ea06ca.js";import{b as de,Q as X,a as H}from"./position-engine.a753418a.js";import{Q as xe}from"./QSelect.50b500bd.js";import{I as ne,Q as be}from"./ItemIcon.11d1a9c7.js";import{_ as nt}from"./DelBtn.9bdef3d5.js";import"./jwt-decode.esm.81f958e7.js";import"./QScrollObserver.ac6fd869.js";import"./format.865294d5.js";import"./QMenu.f41bcb0a.js";import"./DialogWindow.2128b9ef.js";const lt={__name:"NickInput",setup(e){const o=L(),u=String("https://api.dllib.ru/");y("curAccount");const i=y("AccSets"),a=P(""),t=P(null),n=P("Input");function d(){return i.value.publicNick.length<3?(a.value="\u041D\u0435 \u043A\u043E\u0440\u043E\u0447\u0435 3",t.value.validate(),!1):i.value.publicNick.length>20?(a.value="\u041D\u0435 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 20",t.value.validate(),!1):c()?(p(),!0):(t.value.validate(),!1)}function c(){let s=i.value.publicNick,r=new RegExp("^([a-zA-Z\u0430-\u044F\u0410-\u042F\u0451\u04010-9]{3,20})$"),b=new RegExp("^([a-zA-Z0-9]{3,20})$"),$=new RegExp("^([\u0430-\u044F\u0410-\u042F\u0451\u04010-9]{3,20})$");if(b.test(s)||$.test(s))return a.value="",!0;if(r.test(s))return a.value="\u041D\u0435 \u0441\u043C\u0435\u0448\u0438\u0432\u0430\u0439\u0442\u0435 \u044F\u0437\u044B\u043A\u0438",!1;a.value="\u0422\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u043A\u0432\u044B \u0438 \u0446\u0438\u0444\u0440\u044B"}function p(){Q.post(u+"api/set/nick.php",{params:{nick:i.value.publicNick,save:!1}}).then(s=>{var r;if(!((r=s==null?void 0:s.data)!=null&&r.result))throw new Error;a.value="",t.value.validate()}).catch(s=>{var r,b;a.value=(b=(r=s==null?void 0:s.response)==null?void 0:r.data)!=null&&b.error?s.response.data.error:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B",t.value.validate()})}function l(){t.value.blur(),Q.post(u+"api/set/nick.php",{params:{nick:i.value.publicNick,save:!0}}).then(s=>{var r;if(!((r=s==null?void 0:s.data)!=null&&r.result))throw new Error;o.notify(F())}).catch(s=>{o.notify(D(s))})}return(s,r)=>(x(),q(he,{modelValue:S(i).publicNick,"onUpdate:modelValue":[r[1]||(r[1]=b=>S(i).publicNick=b),r[4]||(r[4]=b=>d())],ref_key:"nickRef",ref:t,label:"\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0439 \u043D\u0438\u043A",borderless:"",autocomplete:"off",class:le(n.value),onFocus:r[2]||(r[2]=b=>n.value="Input InputActive"),onBlur:r[3]||(r[3]=b=>n.value="Input"),rules:[b=>!a.value.length||a.value]},{append:g(()=>[a.value===""?(x(),q(ae,{key:0,label:"Ok",class:"DefBtn",dense:"","no-caps":"",onClick:r[0]||(r[0]=b=>l())})):M("",!0)]),_:1},8,["modelValue","class","rules"]))}};let rt=0;const ot=["click","keydown"],it={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${rt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function st(e,o,u,i){const a=y(we,J);if(a===J)return console.error("QTab/QRouteTab component needs to be child of QTabs"),J;const{proxy:t}=re(),n=P(null),d=P(null),c=P(null),p=I(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),l=I(()=>a.currentModel.value===e.name),s=I(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(l.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(i!==void 0?i.linkClass.value:"")),r=I(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),b=I(()=>e.disable===!0||a.hasFocus.value===!0||l.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function $(f,A){if(A!==!0&&n.value!==null&&n.value.focus(),e.disable===!0){i!==void 0&&i.hasRouterLink.value===!0&&K(f);return}if(i===void 0){a.updateModel({name:e.name}),u("click",f);return}if(i.hasRouterLink.value===!0){const N=(V={})=>{let B;const G=V.to===void 0||Ee(V.to,e.to)===!0?a.avoidRouteWatcher=Re():null;return i.navigateToRouterLink(f,{...V,returnRouterError:!0}).catch(R=>{B=R}).then(R=>{if(G===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,B===void 0&&(R===void 0||R.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),V.returnRouterError===!0)return B!==void 0?Promise.reject(B):R})};u("click",f,N),f.defaultPrevented!==!0&&N();return}u("click",f)}function _(f){Ve(f,[13,32])?$(f,!0):Be(f)!==!0&&f.keyCode>=35&&f.keyCode<=40&&f.altKey!==!0&&f.metaKey!==!0&&a.onKbdNavigate(f.keyCode,t.$el)===!0&&K(f),u("keydown",f)}function h(){const f=a.tabProps.value.narrowIndicator,A=[],N=w("div",{ref:c,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&A.push(w(ve,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&A.push(w("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&A.push(e.alertIcon!==void 0?w(ve,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):w("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),f===!0&&A.push(N);const V=[w("div",{class:"q-focus-helper",tabindex:-1,ref:n}),w("div",{class:r.value},Ne(o.default,A))];return f===!1&&V.push(N),V}const C={name:I(()=>e.name),rootRef:d,tabIndicatorRef:c,routeData:i};$e(()=>{a.unregisterTab(C)}),Y(()=>{a.registerTab(C)});function T(f,A){const N={ref:d,class:s.value,tabindex:b.value,role:"tab","aria-selected":l.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:$,onKeydown:_,...A};return qe(w(f,N,h()),[[Te,p.value]])}return{renderTab:T,$tabs:a}}var ge=oe({name:"QTab",props:it,emits:ot,setup(e,{slots:o,emit:u}){const{renderTab:i}=st(e,o,u);return()=>i("div")}});function ut(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((u,i)=>{const a=parseFloat(u);a&&(o[i]=a)}),o}var ct=Qe({name:"touch-swipe",beforeMount(e,{value:o,arg:u,modifiers:i}){if(i.mouse!==!0&&O.has.touch!==!0)return;const a=i.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:ut(u),direction:fe(i),noop:Le,mouseStart(n){me(n,t)&&Me(n)&&(z(t,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(n,!0))},touchStart(n){if(me(n,t)){const d=n.target;z(t,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","notPassiveCapture"],[d,"touchend","end","notPassiveCapture"]]),t.start(n)}},start(n,d){O.is.firefox===!0&&ee(e,!0);const c=pe(n);t.event={x:c.left,y:c.top,time:Date.now(),mouse:d===!0,dir:!1}},move(n){if(t.event===void 0)return;if(t.event.dir!==!1){K(n);return}const d=Date.now()-t.event.time;if(d===0)return;const c=pe(n),p=c.left-t.event.x,l=Math.abs(p),s=c.top-t.event.y,r=Math.abs(s);if(t.event.mouse!==!0){if(l<t.sensitivity[1]&&r<t.sensitivity[1]){t.end(n);return}}else if(window.getSelection().toString()!==""){t.end(n);return}else if(l<t.sensitivity[2]&&r<t.sensitivity[2])return;const b=l/d,$=r/d;t.direction.vertical===!0&&l<r&&l<100&&$>t.sensitivity[0]&&(t.event.dir=s<0?"up":"down"),t.direction.horizontal===!0&&l>r&&r<100&&b>t.sensitivity[0]&&(t.event.dir=p<0?"left":"right"),t.direction.up===!0&&l<r&&s<0&&l<100&&$>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&l<r&&s>0&&l<100&&$>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&l>r&&p<0&&r<100&&b>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&l>r&&p>0&&r<100&&b>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(K(n),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ye(),t.styleCleanup=_=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const h=()=>{document.body.classList.remove("no-pointer-events--children")};_===!0?setTimeout(h,50):h()}),t.handler({evt:n,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:d,distance:{x:l,y:r}})):t.end(n)},end(n){t.event!==void 0&&(te(t,"temp"),O.is.firefox===!0&&ee(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),n!==void 0&&t.event.dir!==!1&&K(n),t.event=void 0)}};if(e.__qtouchswipe=t,i.mouse===!0){const n=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";z(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}O.has.touch===!0&&z(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const u=e.__qtouchswipe;u!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&u.end(),u.handler=o.value),u.direction=fe(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(te(o,"main"),te(o,"temp"),O.is.firefox===!0&&ee(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});const dt={name:{required:!0},disable:Boolean},_e={setup(e,{slots:o}){return()=>w("div",{class:"q-panel scroll",role:"tabpanel"},ie(o.default))}},vt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},pt=["update:modelValue","beforeTransition","transition"];function ft(){const{props:e,emit:o,proxy:u}=re(),{getCacheWithFn:i}=Ze();let a,t;const n=P(null),d=P(null);function c(v){const k=e.vertical===!0?"up":"left";B((u.$q.lang.rtl===!0?-1:1)*(v.direction===k?1:-1))}const p=I(()=>[[ct,c,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),l=I(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),s=I(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),r=I(()=>`--q-transition-duration: ${e.transitionDuration}ms`),b=I(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),$=I(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),_=I(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Ue(()=>e.modelValue,(v,k)=>{const E=f(v)===!0?A(v):-1;t!==!0&&V(E===-1?0:E<A(k)?-1:1),n.value!==E&&(n.value=E,o("beforeTransition",v,k),De(()=>{o("transition",v,k)}))});function h(){B(1)}function C(){B(-1)}function T(v){o("update:modelValue",v)}function f(v){return v!=null&&v!==""}function A(v){return a.findIndex(k=>k.props.name===v&&k.props.disable!==""&&k.props.disable!==!0)}function N(){return a.filter(v=>v.props.disable!==""&&v.props.disable!==!0)}function V(v){const k=v!==0&&e.animated===!0&&n.value!==-1?"q-transition--"+(v===-1?l.value:s.value):null;d.value!==k&&(d.value=k)}function B(v,k=n.value){let E=k+v;for(;E>-1&&E<a.length;){const W=a[E];if(W!==void 0&&W.props.disable!==""&&W.props.disable!==!0){V(v),t=!0,o("update:modelValue",W.props.name),setTimeout(()=>{t=!1});return}E+=v}e.infinite===!0&&a.length!==0&&k!==-1&&k!==a.length&&B(v,v===-1?a.length:-1)}function G(){const v=A(e.modelValue);return n.value!==v&&(n.value=v),!0}function R(){const v=f(e.modelValue)===!0&&G()&&a[n.value];return e.keepAlive===!0?[w(Fe,$.value,[w(_.value===!0?i(b.value,()=>({..._e,name:b.value})):_e,{key:b.value,style:r.value},()=>v)])]:[w("div",{class:"q-panel scroll",style:r.value,key:b.value,role:"tabpanel"},[v])]}function Ce(){if(a.length!==0)return e.animated===!0?[w(Oe,{name:d.value},R)]:R()}function Ae(v){return a=Ke(ie(v.default,[])).filter(k=>k.props!==null&&k.props.slot===void 0&&f(k.props.name)===!0),a.length}function Ie(){return a}return Object.assign(u,{next:h,previous:C,goTo:T}),{panelIndex:n,panelDirectives:p,updatePanelsList:Ae,updatePanelIndex:G,getPanelContent:Ce,getEnabledPanels:N,getPanels:Ie,isValidPanelName:f,keepAliveProps:$,needsUniqueKeepAliveWrapper:_,goToPanelByOffset:B,goToPanel:T,nextPanel:h,previousPanel:C}}var ye=oe({name:"QTabPanel",props:dt,setup(e,{slots:o}){return()=>w("div",{class:"q-tab-panel",role:"tabpanel"},ie(o.default))}}),mt=oe({name:"QTabPanels",props:{...vt,...Ge},emits:pt,setup(e,{slots:o}){const u=re(),i=We(e,u.proxy.$q),{updatePanelsList:a,getPanelContent:t,panelDirectives:n}=ft(),d=I(()=>"q-tab-panels q-panel-parent"+(i.value===!0?" q-tab-panels--dark q-dark":""));return()=>(a(o),ze("div",{class:d.value},t(),"pan",e.swipeable,()=>n.value))}});const bt=["innerHTML"],gt={__name:"ModeSelect",emits:["saved"],setup(e,{emit:o}){const u=L(),i=String("https://api.dllib.ru/");y("curAccount");const a=y("AccSets"),t=P("Input"),n=y("progress"),d=P([{mode:1,name:"\u0421 \u043C\u0438\u0440\u0443 \u043F\u043E \u043D\u0438\u0442\u043A\u0435",description:"\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u0442 \u0412\u0430\u0448\u0438 \u0446\u0435\u043D\u044B \u0438\u043B\u0438 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u044B\u0435 \u0438\u0437 \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0445.<br>\u0415\u0441\u043B\u0438 \u0438\u0445 \u043D\u0435\u0442, \u0438\u0449\u0435\u0442 \u0443 \u0434\u0440\u0443\u0433\u0438\u0445.<br>\u0421\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E, \u0435\u0441\u043B\u0438 \u043D\u0438\u043A\u0442\u043E \u0438 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u043B \u0446\u0435\u043D\u0443."},{mode:2,name:"\u0414\u043E\u0432\u0435\u0440\u0438\u0435",description:"\u041D\u0435 \u0432\u0438\u0434\u0438\u0442 \u043D\u0438\u0447\u044C\u0438\u0445 \u0446\u0435\u043D, \u043A\u0440\u043E\u043C\u0435 \u0412\u0430\u0448\u0438\u0445 \u0438 \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u0412\u044B \u0434\u043E\u0432\u0435\u0440\u044F\u0435\u0442\u0435.<br>\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u044B\u0435.<br>\u041E\u0420, \u0420\u0420, \u0427\u0435\u0441\u0442\u044C \u0438 \u043F\u0440\u043E\u0447\u0438\u0435 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u0442 \u0412\u0430\u0448\u0438 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0438\u0445 \u043D\u043E\u0432\u0438\u0437\u043D\u044B."},{mode:3,name:"\u0425\u0430\u0440\u0434\u043A\u043E\u0440",description:"\u0412\u0438\u0434\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0412\u0430\u0448\u0438 \u0446\u0435\u043D\u044B.<br>\u0412 \u043B\u044E\u0431\u043E\u0439 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C."}]);function c(){n.value=!0,Q.post(i+"api/set/mode.php",{params:{mode:a.value.mode}}).then(p=>{var l;if(!((l=p==null?void 0:p.data)!=null&&l.result))throw new Error;u.notify(F(p.data.result)),o("saved")}).catch(p=>{u.notify(D(p))}).finally(()=>{n.value=!1})}return(p,l)=>(x(),q(xe,{modelValue:S(a).mode,"onUpdate:modelValue":[l[0]||(l[0]=s=>S(a).mode=s),l[3]||(l[3]=s=>c())],options:d.value,borderless:"","option-value":"mode","option-label":"name","options-html":"","popup-content-style":{backgroundColor:"rgb(181 238 8 / 93%)",color:"#4B3A23"},onFocus:l[1]||(l[1]=s=>t.value="Input InputActive"),onBlur:l[2]||(l[2]=s=>t.value="Input"),class:le(t.value),label:"\u0420\u0435\u0436\u0438\u043C \u0432\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0446\u0435\u043D","map-options":"","emit-value":""},{option:g(s=>[m(de,Pe(ke(s.itemProps)),{default:g(()=>[m(X,null,{default:g(()=>[m(H,null,{default:g(()=>[j(se(s.opt.name),1)]),_:2},1024),m(H,{caption:""},{default:g(()=>[ue("div",{innerHTML:s.opt.description},null,8,bt)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","popup-content-style","class"]))}};const _t={__name:"AccountSets",emits:["saved"],setup(e,{emit:o}){L(),y("progress");const u=y("AccSets"),i=P();function a(){i.value.saveServerGroup()}return(t,n)=>(x(),U(ce,null,[m(lt),m(at,{groupId:S(u).serverGroupId,onOnSelect:n[0]||(n[0]=d=>a()),onOnSave:n[1]||(n[1]=d=>o("saved")),ref_key:"refServerGroupSelect",ref:i},null,8,["groupId"]),m(gt,{onSaved:n[2]||(n[2]=d=>o("saved"))})],64))}};var yt=Z(_t,[["__scopeId","data-v-3f7c4db3"]]);const ht={__name:"ProfSelect",props:{prof:P(null)},setup(e){const o=e,u=L(),i=String("https://api.dllib.ru/");P(1);const a=y("ProfLvls"),t=P(null),n=P("Input");y("curAccount");const d=y("AccSets"),c=y("selectOptionsStyle");function p(){t.value.blur(),Q.post(i+"api/set/prof.php",{params:{profId:o.prof.id,lvl:d.value.Profs.find(l=>l.id===o.prof.id).lvl}}).then(l=>{var s;if(!((s=l==null?void 0:l.data)!=null&&s.result))throw new Error;u.notify(F())}).catch(l=>{u.notify(D(l))})}return(l,s)=>(x(),q(xe,{label:e.prof.name,class:le(n.value),options:S(a),"option-value":"lvl",modelValue:S(d).Profs.find(r=>r.id===e.prof.id).lvl,"onUpdate:modelValue":[s[0]||(s[0]=r=>S(d).Profs.find(b=>b.id===e.prof.id).lvl=r),p],"map-options":"","emit-value":"",borderless:"",ref_key:"profRef",ref:t,"popup-content-style":S(c)},{prepend:g(()=>[m(ne,{"loc-icon":"/img/profs/"+e.prof.id+".png",grade:S(d).Profs.find(r=>r.id===e.prof.id).lvl},null,8,["loc-icon","grade"])]),option:g(r=>[m(de,Pe(ke(r.itemProps)),{default:g(()=>[m(X,{avatar:""},{default:g(()=>[m(ne,{"loc-icon":"/img/profs/"+e.prof.id+".png",grade:r.opt.lvl},null,8,["loc-icon","grade"])]),_:2},1024),m(X,null,{default:g(()=>[m(H,null,{default:g(()=>[j(se(r.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["label","class","options","modelValue","popup-content-style"]))}};const Pt={class:"ProfList"},kt={__name:"ProfList",setup(e){y("curAccount");const o=y("AccSets");return(u,i)=>(x(),U("div",Pt,[(x(!0),U(ce,null,Se(S(o).Profs,a=>(x(),q(ht,{key:a.id,prof:a},null,8,["prof"]))),128))]))}};var St=Z(kt,[["__scopeId","data-v-62234c23"]]);const xt={class:"PriceLabel"},Ct={__name:"BasedPriceItem",props:{price:P(null)},emits:["delPrice"],setup(e,{emit:o}){const u=e,i=L(),a=String("https://api.dllib.ru/"),t=je(),n=y("curAccount"),d=y("AccSets"),c=P(u.price),p=P(null),l=P(!1),s=y("disable");function r(_){t.push({path:"/item/"+_})}function b(){Q.post(a+"api/set/price/del.php",{params:{itemId:u.price.itemId}}).then(_=>{var h,C,T;if(!((h=_==null?void 0:_.data)!=null&&h.result))throw new Error;i.notify(F((T=(C=_==null?void 0:_.data)==null?void 0:C.result)!=null?T:"\u041E\u0439!"))}).catch(_=>{i.notify(D(_))})}function $(){p.value.blur(),Q.post(a+"api/set/price/price.php",{params:{price:c.value.price,itemId:u.price.itemId}}).then(_=>{var h,C,T,f,A;if(!((h=_==null?void 0:_.data)!=null&&h.result))throw new Error;i.notify(F()),c.value.accountId=(T=(C=n==null?void 0:n.value)==null?void 0:C.id)!=null?T:0,c.value.author=(A=(f=d.value)==null?void 0:f.publicNick)!=null?A:"Error",c.value.method="bySolo"}).catch(_=>{i.notify(D(_))})}return Y(()=>{}),(_,h)=>(x(),q(de,{dense:"",class:"PriceCell"},{default:g(()=>[m(X,null,{default:g(()=>[m(H,{lines:1},{default:g(()=>[ue("div",xt,se(e.price.name),1)]),_:1}),S(s)?(x(),q(be,{key:0},{default:g(()=>[j("\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D")]),_:1})):M("",!0),m(he,{mask:"## ## ##",class:"PriceInput",dense:"",filled:"",borderless:"",disable:!!S(s),"label-color":S(tt)(e.price.method),"stack-label":"",label:e.price.accountId===1?"\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E":e.price.author,"reverse-fill-mask":"",ref_key:"priceRef",ref:p,modelValue:c.value.price,"onUpdate:modelValue":h[1]||(h[1]=C=>c.value.price=C),onFocus:h[2]||(h[2]=C=>l.value=!0),onBlur:h[3]||(h[3]=C=>l.value=!1)},{before:g(()=>[m(ae,{class:"no-padding",dense:"",flat:"",to:"/item/"+e.price.itemId,onClick:h[0]||(h[0]=C=>r(e.price.itemId))},{default:g(()=>[m(ne,{icon:e.price.icon,grade:e.price.grade,"tool-text":e.price.name},null,8,["icon","grade","tool-text"])]),_:1},8,["to"])]),append:g(()=>[l.value?(x(),q(ae,{key:0,label:"Ok",class:"DefBtn",dense:"","no-caps":"",flat:"",onClick:$})):M("",!0)]),after:g(()=>[m(be,null,{default:g(()=>[j("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")]),_:1}),m(nt,{onOnOk:b,disable:e.price.accountId!==S(n).id},null,8,["disable"])]),_:1},8,["disable","label-color","label","modelValue"])]),_:1})]),_:1}))}};var At=Z(Ct,[["__scopeId","data-v-2f039d60"]]);const It={class:"PricesArea"},wt={__name:"BasedPrices",setup(e,{expose:o}){const u=L(),i=String("https://api.dllib.ru/");y("curAccount");const a=y("AccSets");y("progress");const t=I(()=>a.value.serverGroupId===100);Xe("disable",t);const n=P(null);Y(()=>{d()}),o({loadPrices:d});function d(){Q.post(i+"/api/get/price/based.php").then(c=>{var p,l,s,r;if(!((p=c==null?void 0:c.data)!=null&&p.result))throw new Error;n.value=(r=(s=(l=c==null?void 0:c.data)==null?void 0:l.data)==null?void 0:s.Prices)!=null?r:[]}).catch(c=>{n.value=[],u.notify(D(c))})}return(c,p)=>(x(),U("div",It,[(x(!0),U(ce,null,Se(n.value,l=>(x(),q(At,{key:l.itemId,price:l},null,8,["price"]))),128))]))}};const $t={class:"WindowArea column"},qt={class:"navigator"},Tt={__name:"AccountPage",setup(e){L();const o=P(null),u=y("curAccount"),i=y("AccSets"),a=P("basedPrices"),t=y("progress");return Y(()=>{console.log("AccountPage mounted")}),et({title:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",meta:{viewport:{name:"viewport",content:"initial-scale=0.6,width=device-width, user-scalable=yes"}}}),(d,c)=>{var p;return x(),U("div",$t,[ue("div",qt,[(p=S(i))!=null&&p.serverGroupId?(x(),q(yt,{key:0})):M("",!0)]),S(u)?(x(),q(Je,{key:0,class:"col"},{default:g(()=>[m(He,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=l=>a.value=l)},{default:g(()=>[m(ge,{name:"basedPrices",label:"\u0411\u0430\u0437\u043E\u0432\u044B\u0435 \u0446\u0435\u043D\u044B"}),m(ge,{name:"profs",label:"\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438"})]),_:1},8,["modelValue"]),m(mt,{modelValue:a.value,"onUpdate:modelValue":c[1]||(c[1]=l=>a.value=l),animated:"",class:"TabPanels"},{default:g(()=>[m(ye,{name:"basedPrices"},{default:g(()=>[S(t)?M("",!0):(x(),q(wt,{key:0,ref_key:"refBasedPrices",ref:o},null,512))]),_:1}),m(ye,{name:"profs"},{default:g(()=>[m(St)]),_:1})]),_:1},8,["modelValue"])]),_:1})):M("",!0)])}}};var Zt=Z(Tt,[["__scopeId","data-v-e78046c2"]]);export{Zt as default};
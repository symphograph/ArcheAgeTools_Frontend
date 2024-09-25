import{i as I,O as Z,r as P,c as S,S as qe,o as X,ah as Ae,U as Te,aH as $e,h as w,ac as U,aR as Be,a9 as Ve,a4 as de,ak as Qe,g as ne,aM as Re,b0 as Le,H as oe,aT as Ee,B as D,y as Me,aU as Ne,at as G,aV as ee,aW as ve,as as te,N as De,w as Ue,av as Oe,bh as Ke,I as re,bi as We,K as Fe,M as Ge,V as je,q as C,v as $,Y as g,f as m,a2 as Pe,a7 as he,_ as j,$ as ie,a6 as le,a0 as k,bd as xe,t as M,F as se,a5 as ke,m as ze,l as O,be as He,af as pe,p as Ye}from"./index.be968432.js";import{Q as Xe}from"./QTabs.dbf65b39.js";import{g as fe,s as me}from"./TouchPan.291d6ccd.js";import{c as Je}from"./selection.aacd3f71.js";import{u as Ze}from"./use-render-cache.3aae9b27.js";import{Q as et}from"./QScrollArea.b5e345b1.js";import{api as K}from"./axios.b332e97b.js";import{u as tt}from"./use-meta.7ad3f80c.js";import{u as N}from"./use-quasar.fb03a9a8.js";import{_ as at}from"./NickInput.6a4a82d2.js";import{_ as nt}from"./ServerGroupSelect.d6d78223.js";import{b as ue,Q as z,a as H}from"./position-engine.c21b03aa.js";import{Q as Ce}from"./QSelect.9f8f8695.js";import{a as Y,n as W}from"./myFuncts.cb4da9fc.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";import{I as ae,Q as be}from"./ItemIcon.fe913ccd.js";import{_ as ot}from"./DelBtn.671513d4.js";import{a as rt}from"./price.8aed5ca0.js";import"./QScrollObserver.6c220ff6.js";import"./format.959830d0.js";import"./QMenu.6a6c9ff8.js";import"./DialogWindow.a6f475df.js";let it=0;const lt=["click","keydown"],st={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${it++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function ut(e,r,u,l){const n=I(Ae,Z);if(n===Z)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Z;const{proxy:t}=ne(),o=P(null),a=P(null),c=P(null),_=S(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),i=S(()=>n.currentModel.value===e.name),v=S(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(i.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),s=S(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),q=S(()=>e.disable===!0||n.hasFocus.value===!0||i.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function p(f,x){if(x!==!0&&o.value!==null&&o.value.focus(),e.disable===!0){l!==void 0&&l.hasRouterLink.value===!0&&U(f);return}if(l===void 0){n.updateModel({name:e.name}),u("click",f);return}if(l.hasRouterLink.value===!0){const T=(B={})=>{let L;const E=B.to===void 0||Re(B.to,e.to)===!0?n.avoidRouteWatcher=Le():null;return l.navigateToRouterLink(f,{...B,returnRouterError:!0}).catch(V=>{L=V}).then(V=>{if(E===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,L===void 0&&(V===void 0||V.message!==void 0&&V.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:e.name})),B.returnRouterError===!0)return L!==void 0?Promise.reject(L):V})};u("click",f,T),f.defaultPrevented!==!0&&T();return}u("click",f)}function b(f){Be(f,[13,32])?p(f,!0):Ve(f)!==!0&&f.keyCode>=35&&f.keyCode<=40&&f.altKey!==!0&&f.metaKey!==!0&&n.onKbdNavigate(f.keyCode,t.$el)===!0&&U(f),u("keydown",f)}function h(){const f=n.tabProps.value.narrowIndicator,x=[],T=w("div",{ref:c,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&x.push(w(de,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&x.push(w("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&x.push(e.alertIcon!==void 0?w(de,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):w("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),f===!0&&x.push(T);const B=[w("div",{class:"q-focus-helper",tabindex:-1,ref:o}),w("div",{class:s.value},Qe(r.default,x))];return f===!1&&B.push(T),B}const A={name:S(()=>e.name),rootRef:a,tabIndicatorRef:c,routeData:l};qe(()=>{n.unregisterTab(A)}),X(()=>{n.registerTab(A)});function R(f,x){const T={ref:a,class:v.value,tabindex:q.value,role:"tab","aria-selected":i.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:p,onKeydown:b,...x};return Te(w(f,T,h()),[[$e,_.value]])}return{renderTab:R,$tabs:n}}var ge=oe({name:"QTab",props:st,emits:lt,setup(e,{slots:r,emit:u}){const{renderTab:l}=ut(e,r,u);return()=>l("div")}});function ct(e){const r=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((u,l)=>{const n=parseFloat(u);n&&(r[l]=n)}),r}var dt=Ee({name:"touch-swipe",beforeMount(e,{value:r,arg:u,modifiers:l}){if(l.mouse!==!0&&D.has.touch!==!0)return;const n=l.mouseCapture===!0?"Capture":"",t={handler:r,sensitivity:ct(u),direction:fe(l),noop:Me,mouseStart(o){me(o,t)&&Ne(o)&&(G(t,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(me(o,t)){const a=o.target;G(t,"temp",[[a,"touchmove","move","notPassiveCapture"],[a,"touchcancel","end","notPassiveCapture"],[a,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,a){D.is.firefox===!0&&ee(e,!0);const c=ve(o);t.event={x:c.left,y:c.top,time:Date.now(),mouse:a===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){U(o);return}const a=Date.now()-t.event.time;if(a===0)return;const c=ve(o),_=c.left-t.event.x,i=Math.abs(_),v=c.top-t.event.y,s=Math.abs(v);if(t.event.mouse!==!0){if(i<t.sensitivity[1]&&s<t.sensitivity[1]){t.end(o);return}}else if(window.getSelection().toString()!==""){t.end(o);return}else if(i<t.sensitivity[2]&&s<t.sensitivity[2])return;const q=i/a,p=s/a;t.direction.vertical===!0&&i<s&&i<100&&p>t.sensitivity[0]&&(t.event.dir=v<0?"up":"down"),t.direction.horizontal===!0&&i>s&&s<100&&q>t.sensitivity[0]&&(t.event.dir=_<0?"left":"right"),t.direction.up===!0&&i<s&&v<0&&i<100&&p>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&i<s&&v>0&&i<100&&p>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&i>s&&_<0&&s<100&&q>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&i>s&&_>0&&s<100&&q>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(U(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Je(),t.styleCleanup=b=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const h=()=>{document.body.classList.remove("no-pointer-events--children")};b===!0?setTimeout(h,50):h()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:a,distance:{x:i,y:s}})):t.end(o)},end(o){t.event!==void 0&&(te(t,"temp"),D.is.firefox===!0&&ee(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),o!==void 0&&t.event.dir!==!1&&U(o),t.event=void 0)}};if(e.__qtouchswipe=t,l.mouse===!0){const o=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";G(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}D.has.touch===!0&&G(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const u=e.__qtouchswipe;u!==void 0&&(r.oldValue!==r.value&&(typeof r.value!="function"&&u.end(),u.handler=r.value),u.direction=fe(r.modifiers))},beforeUnmount(e){const r=e.__qtouchswipe;r!==void 0&&(te(r,"main"),te(r,"temp"),D.is.firefox===!0&&ee(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchswipe)}});const vt={name:{required:!0},disable:Boolean},_e={setup(e,{slots:r}){return()=>w("div",{class:"q-panel scroll",role:"tabpanel"},re(r.default))}},pt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ft=["update:modelValue","beforeTransition","transition"];function mt(){const{props:e,emit:r,proxy:u}=ne(),{getCache:l}=Ze(),{registerTimeout:n}=De();let t,o;const a=P(null),c=P(null);function _(d){const y=e.vertical===!0?"up":"left";E((u.$q.lang.rtl===!0?-1:1)*(d.direction===y?1:-1))}const i=S(()=>[[dt,_,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),v=S(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),s=S(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),q=S(()=>`--q-transition-duration: ${e.transitionDuration}ms`),p=S(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),b=S(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),h=S(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Ue(()=>e.modelValue,(d,y)=>{const Q=x(d)===!0?T(d):-1;o!==!0&&L(Q===-1?0:Q<T(y)?-1:1),a.value!==Q&&(a.value=Q,r("beforeTransition",d,y),n(()=>{r("transition",d,y)},e.transitionDuration))});function A(){E(1)}function R(){E(-1)}function f(d){r("update:modelValue",d)}function x(d){return d!=null&&d!==""}function T(d){return t.findIndex(y=>y.props.name===d&&y.props.disable!==""&&y.props.disable!==!0)}function B(){return t.filter(d=>d.props.disable!==""&&d.props.disable!==!0)}function L(d){const y=d!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(d===-1?v.value:s.value):null;c.value!==y&&(c.value=y)}function E(d,y=a.value){let Q=y+d;for(;Q!==-1&&Q<t.length;){const F=t[Q];if(F!==void 0&&F.props.disable!==""&&F.props.disable!==!0){L(d),o=!0,r("update:modelValue",F.props.name),setTimeout(()=>{o=!1});return}Q+=d}e.infinite===!0&&t.length!==0&&y!==-1&&y!==t.length&&E(d,d===-1?t.length:-1)}function V(){const d=T(e.modelValue);return a.value!==d&&(a.value=d),!0}function ce(){const d=x(e.modelValue)===!0&&V()&&t[a.value];return e.keepAlive===!0?[w(We,b.value,[w(h.value===!0?l(p.value,()=>({..._e,name:p.value})):_e,{key:p.value,style:q.value},()=>d)])]:[w("div",{class:"q-panel scroll",style:q.value,key:p.value,role:"tabpanel"},[d])]}function Se(){if(t.length!==0)return e.animated===!0?[w(Oe,{name:c.value},ce)]:ce()}function Ie(d){return t=Ke(re(d.default,[])).filter(y=>y.props!==null&&y.props.slot===void 0&&x(y.props.name)===!0),t.length}function we(){return t}return Object.assign(u,{next:A,previous:R,goTo:f}),{panelIndex:a,panelDirectives:i,updatePanelsList:Ie,updatePanelIndex:V,getPanelContent:Se,getEnabledPanels:B,getPanels:we,isValidPanelName:x,keepAliveProps:b,needsUniqueKeepAliveWrapper:h,goToPanelByOffset:E,goToPanel:f,nextPanel:A,previousPanel:R}}var ye=oe({name:"QTabPanel",props:vt,setup(e,{slots:r}){return()=>w("div",{class:"q-tab-panel",role:"tabpanel"},re(r.default))}}),bt=oe({name:"QTabPanels",props:{...pt,...Fe},emits:ft,setup(e,{slots:r}){const u=ne(),l=Ge(e,u.proxy.$q),{updatePanelsList:n,getPanelContent:t,panelDirectives:o}=mt(),a=S(()=>"q-tab-panels q-panel-parent"+(l.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(r),je("div",{class:a.value},t(),"pan",e.swipeable,()=>o.value))}});const gt=["innerHTML"],_t={__name:"ModeSelect",emits:["saved"],setup(e,{emit:r}){const u=N(),l=String("https://api.aa.dllib.ru/"),n=I("curAccount"),t=P("Input"),o=r,a=I("progress"),c=P([{mode:1,name:"\u0421 \u043C\u0438\u0440\u0443 \u043F\u043E \u043D\u0438\u0442\u043A\u0435",description:"\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u0442 \u0412\u0430\u0448\u0438 \u0446\u0435\u043D\u044B \u0438\u043B\u0438 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u044B\u0435 \u0438\u0437 \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0445.<br>\u0415\u0441\u043B\u0438 \u0438\u0445 \u043D\u0435\u0442, \u0438\u0449\u0435\u0442 \u0443 \u0434\u0440\u0443\u0433\u0438\u0445.<br>\u0421\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E, \u0435\u0441\u043B\u0438 \u043D\u0438\u043A\u0442\u043E \u0438 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u043B \u0446\u0435\u043D\u0443."},{mode:2,name:"\u0414\u043E\u0432\u0435\u0440\u0438\u0435",description:"\u041D\u0435 \u0432\u0438\u0434\u0438\u0442 \u043D\u0438\u0447\u044C\u0438\u0445 \u0446\u0435\u043D, \u043A\u0440\u043E\u043C\u0435 \u0412\u0430\u0448\u0438\u0445 \u0438 \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u0412\u044B \u0434\u043E\u0432\u0435\u0440\u044F\u0435\u0442\u0435.<br>\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u044B\u0435.<br>\u041E\u0420, \u0420\u0420, \u0427\u0435\u0441\u0442\u044C \u0438 \u043F\u0440\u043E\u0447\u0438\u0435 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u0442 \u0412\u0430\u0448\u0438 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0438\u0445 \u043D\u043E\u0432\u0438\u0437\u043D\u044B."},{mode:3,name:"\u0425\u0430\u0440\u0434\u043A\u043E\u0440",description:"\u0412\u0438\u0434\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0412\u0430\u0448\u0438 \u0446\u0435\u043D\u044B.<br>\u0412 \u043B\u044E\u0431\u043E\u0439 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u043E\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C."}]);function _(){a.value=!0,K.post(l+"api/set/mode.php",{params:{mode:n.value.settings.mode}}).then(i=>{var v;if(!((v=i==null?void 0:i.data)!=null&&v.result))throw new Error;u.notify(Y(i.data.result)),o("saved")}).catch(i=>{u.notify(W(i))}).finally(()=>{a.value=!1})}return(i,v)=>(C(),$(Ce,{modelValue:k(n).settings.mode,"onUpdate:modelValue":[v[0]||(v[0]=s=>k(n).settings.mode=s),v[3]||(v[3]=s=>_())],options:c.value,borderless:"","option-value":"mode","option-label":"name","options-html":"","popup-content-style":{backgroundColor:"rgb(181 238 8 / 93%)",color:"#4B3A23"},onFocus:v[1]||(v[1]=s=>t.value="Input InputActive"),onBlur:v[2]||(v[2]=s=>t.value="Input"),class:xe(t.value),label:"\u0420\u0435\u0436\u0438\u043C \u0432\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0446\u0435\u043D","map-options":"","emit-value":""},{option:g(s=>[m(ue,Pe(he(s.itemProps)),{default:g(()=>[m(z,null,{default:g(()=>[m(H,null,{default:g(()=>[j(ie(s.opt.name),1)]),_:2},1024),m(H,{caption:""},{default:g(()=>[le("div",{innerHTML:s.opt.description},null,8,gt)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","class"]))}};const yt={__name:"AccountSets",emits:["saved"],setup(e,{emit:r}){N(),I("progress");const u=I("curAccount"),l=r,n=P();function t(){n.value.saveServerGroup()}return(o,a)=>(C(),M(se,null,[m(at),m(nt,{groupId:k(u).settings.serverGroupId,onOnSelect:a[0]||(a[0]=c=>t()),onOnSave:a[1]||(a[1]=c=>l("saved")),ref_key:"refServerGroupSelect",ref:n},null,8,["groupId"]),m(_t,{onSaved:a[2]||(a[2]=c=>l("saved"))})],64))}};var Pt=J(yt,[["__scopeId","data-v-61be8ddf"]]);const ht={__name:"ProfSelect",props:{prof:P(null)},setup(e){const r=N(),u=String("https://api.aa.dllib.ru/"),l=e;P(1);const n=I("ProfLvls"),t=P(null),o=P("Input"),a=I("curAccount"),c=I("selectOptionsStyle");function _(){t.value.blur(),K.post(u+"api/set/prof.php",{params:{profId:l.prof.id,lvl:a.value.settings.Profs.find(i=>i.id===l.prof.id).lvl}}).then(i=>{var v;if(!((v=i==null?void 0:i.data)!=null&&v.result))throw new Error;r.notify(Y())}).catch(i=>{r.notify(W(i))})}return(i,v)=>(C(),$(Ce,{label:e.prof.name,class:xe(o.value),options:k(n),"option-value":"lvl",modelValue:k(a).settings.Profs.find(s=>s.id===e.prof.id).lvl,"onUpdate:modelValue":[v[0]||(v[0]=s=>k(a).settings.Profs.find(q=>q.id===e.prof.id).lvl=s),_],"map-options":"","emit-value":"",borderless:"",ref_key:"profRef",ref:t,"popup-content-style":k(c)},{prepend:g(()=>[m(ae,{"loc-icon":"/img/profs/"+e.prof.id+".png",grade:k(a).settings.Profs.find(s=>s.id===e.prof.id).lvl},null,8,["loc-icon","grade"])]),option:g(s=>[m(ue,Pe(he(s.itemProps)),{default:g(()=>[m(z,{avatar:""},{default:g(()=>[m(ae,{"loc-icon":"/img/profs/"+e.prof.id+".png",grade:s.opt.lvl},null,8,["loc-icon","grade"])]),_:2},1024),m(z,null,{default:g(()=>[m(H,null,{default:g(()=>[j(ie(s.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["label","class","options","modelValue","popup-content-style"]))}};const xt={class:"ProfList"},kt={__name:"ProfList",setup(e){const r=I("curAccount");return(u,l)=>(C(),M("div",xt,[(C(!0),M(se,null,ke(k(r).settings.Profs,n=>(C(),$(ht,{key:n.id,prof:n},null,8,["prof"]))),128))]))}};var Ct=J(kt,[["__scopeId","data-v-7f713b21"]]);const St={class:"PriceLabel"},It={__name:"BasedPriceItem",props:{price:P(null)},emits:["delPrice"],setup(e,{emit:r}){const u=N(),l=String("https://api.aa.dllib.ru/"),n=ze(),t=I("curAccount"),o=e,a=P(o.price),c=P(null),_=P(!1),i=I("disable");function v(p){n.push({path:"/item/"+p})}function s(){K.post(l+"api/price.php",{params:{method:"del",itemId:o.price.itemId}}).then(p=>{var b,h,A;if(!((b=p==null?void 0:p.data)!=null&&b.result))throw new Error;u.notify(Y((A=(h=p==null?void 0:p.data)==null?void 0:h.result)!=null?A:"\u041E\u0439!"))}).catch(p=>{u.notify(W(p))})}function q(){c.value.blur(),K.post(l+"api/price.php",{params:{method:"set",price:a.value.price,itemId:o.price.itemId}}).then(p=>{var b,h,A,R,f,x;if(!((b=p==null?void 0:p.data)!=null&&b.result))throw new Error;u.notify(Y()),a.value.accountId=(A=(h=t==null?void 0:t.value)==null?void 0:h.id)!=null?A:0,a.value.author=(x=(f=(R=t.value)==null?void 0:R.settings)==null?void 0:f.publicNick)!=null?x:"Error",a.value.method="bySolo"}).catch(p=>{u.notify(W(p))})}return X(()=>{}),(p,b)=>(C(),$(ue,{dense:"",class:"PriceCell"},{default:g(()=>[m(z,null,{default:g(()=>[m(H,{lines:1},{default:g(()=>[le("div",St,ie(e.price.name),1)]),_:1}),k(i)?(C(),$(be,{key:0},{default:g(()=>b[4]||(b[4]=[j("\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D")])),_:1})):O("",!0),m(He,{mask:"## ## ##",class:"PriceInput",dense:"",filled:"",borderless:"",disable:!!k(i),"label-color":k(rt)(e.price.method),"stack-label":"",label:e.price.accountId===1?"\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E":e.price.author,"reverse-fill-mask":"",ref_key:"priceRef",ref:c,modelValue:a.value.price,"onUpdate:modelValue":b[1]||(b[1]=h=>a.value.price=h),onFocus:b[2]||(b[2]=h=>_.value=!0),onBlur:b[3]||(b[3]=h=>_.value=!1)},{before:g(()=>[m(pe,{class:"no-padding",dense:"",flat:"",to:"/item/"+e.price.itemId,onClick:b[0]||(b[0]=h=>v(e.price.itemId))},{default:g(()=>[m(ae,{icon:e.price.icon,grade:e.price.grade,"tool-text":e.price.name},null,8,["icon","grade","tool-text"])]),_:1},8,["to"])]),append:g(()=>[_.value?(C(),$(pe,{key:0,label:"Ok",class:"DefBtn",dense:"","no-caps":"",flat:"",onClick:q})):O("",!0)]),after:g(()=>[m(be,null,{default:g(()=>b[5]||(b[5]=[j("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")])),_:1}),m(ot,{onOnOk:s,disable:e.price.accountId!==k(t).id},null,8,["disable"])]),_:1},8,["disable","label-color","label","modelValue"])]),_:1})]),_:1}))}};var wt=J(It,[["__scopeId","data-v-7645e5a3"]]);const qt={class:"PricesArea"},At={__name:"BasedPrices",setup(e,{expose:r}){const u=N(),l=String("https://api.aa.dllib.ru/"),n=I("curAccount");I("progress");const t=S(()=>n.value.settings.serverGroupId===100);Ye("disable",t);const o=P(null);X(()=>{a()}),r({loadPrices:a});function a(){K.post(l+"/api/price.php",{params:{method:"getBasedList"}}).then(c=>{var _,i,v,s;if(!((_=c==null?void 0:c.data)!=null&&_.result))throw new Error;o.value=(s=(v=(i=c==null?void 0:c.data)==null?void 0:i.data)==null?void 0:v.Prices)!=null?s:[]}).catch(c=>{o.value=[],u.notify(W(c))})}return(c,_)=>(C(),M("div",qt,[(C(!0),M(se,null,ke(o.value,i=>(C(),$(wt,{key:i.itemId,price:i},null,8,["price"]))),128))]))}};const Tt={class:"WindowArea column"},$t={class:"navigator"},Bt={__name:"SettingsPage",setup(e){N();const r=P(null),u=I("curAccount"),l=P("basedPrices"),n=I("progress");return X(()=>{console.log("AccountPage mounted")}),tt({title:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",meta:{viewport:{name:"viewport",content:"initial-scale=0.6,width=device-width, user-scalable=yes"}}}),(o,a)=>{var c;return C(),M("div",Tt,[le("div",$t,[(c=k(u).settings)!=null&&c.serverGroupId?(C(),$(Pt,{key:0})):O("",!0)]),k(u)?(C(),$(et,{key:0,class:"col"},{default:g(()=>[m(Xe,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=_=>l.value=_)},{default:g(()=>[m(ge,{name:"basedPrices",label:"\u0411\u0430\u0437\u043E\u0432\u044B\u0435 \u0446\u0435\u043D\u044B"}),m(ge,{name:"profs",label:"\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0438"})]),_:1},8,["modelValue"]),m(bt,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=_=>l.value=_),animated:"",class:"TabPanels"},{default:g(()=>[m(ye,{name:"basedPrices"},{default:g(()=>[k(n)?O("",!0):(C(),$(At,{key:0,ref_key:"refBasedPrices",ref:r},null,512))]),_:1}),m(ye,{name:"profs"},{default:g(()=>[m(Ct)]),_:1})]),_:1},8,["modelValue"])]),_:1})):O("",!0)])}}};var ta=J(Bt,[["__scopeId","data-v-63eeeb06"]]);export{ta as default};

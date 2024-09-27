import{S as je,au as Qe,av as vt,aw as mt,ax as St,U as Bt,ay as Et,V as Rt,az as Tt,c as f,ac as Ht,g as Ue,h as y,N as Be,aA as Lt,aB as Dt,$ as ne,x as Pt,r as R,w as me,X as G,aC as $t,k as Nt,C as Kt,B as jt,ab as ht,aD as Qt,aE as Ut,aF as rt,aG as xe,W as Wt,aH as Xt,ap as $e,aI as Yt,aJ as ve,ao as Gt,Y as Jt,aK as Zt,ak as el}from"./index.cf591b40.js";import{Q as tl,a as ll,b as ul}from"./position-engine.fcb91d72.js";import{Q as nl}from"./QMenu.5a066f52.js";import{n as ct}from"./format.959830d0.js";var ol=je({name:"QField",inheritAttrs:!1,props:{...Qe,tag:{type:String,default:"label"}},emits:vt,setup(){return mt(St({tagProp:!0}))}});const al={xs:8,sm:10,md:14,lg:20,xl:24};var il=je({name:"QChip",props:{...Bt,...Et,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:i}){const{proxy:{$q:d}}=Ue(),M=Rt(e,d),a=Tt(e,al),F=f(()=>e.selected===!0||e.icon!==void 0),b=f(()=>e.selected===!0?e.iconSelected||d.iconSet.chip.selected:e.icon),g=f(()=>e.iconRemove||d.iconSet.chip.remove),z=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=f(()=>{const s=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(s?` text-${s} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(M.value===!0?" q-chip--dark q-dark":"")}),w=f(()=>{const s=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...s,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||d.lang.label.remove};return{chip:s,remove:D}});function C(s){s.keyCode===13&&x(s)}function x(s){e.disable||(i("update:selected",!e.selected),i("click",s))}function A(s){(s.keyCode===void 0||s.keyCode===13)&&(ne(s),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function L(){const s=[];z.value===!0&&s.push(y("div",{class:"q-focus-helper"})),F.value===!0&&s.push(y(Be,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const D=e.label!==void 0?[y("div",{class:"ellipsis"},[e.label])]:void 0;return s.push(y("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Lt(r.default,D))),e.iconRight&&s.push(y(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&s.push(y(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...w.value.remove,onClick:A,onKeyup:A})),s}return()=>{if(e.modelValue===!1)return;const s={class:c.value,style:a.value};return z.value===!0&&Object.assign(s,w.value.chip,{onClick:x,onKeyup:C}),Ht("div",s,L(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Dt,e.ripple]])}}});let Ee=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const r=document.createElement("div");Object.assign(r.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,Ee=e.scrollLeft>=0,e.remove()}const K=1e3,rl=["start","center","end","start-force","center-force","end-force"],gt=Array.prototype.filter,cl=window.getComputedStyle(document.body).overflowAnchor===void 0?Pt:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];gt.call(i,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const d=i[r];d&&d.dataset&&(d.dataset.qVsAnchor="")}))};function Se(e,r){return e+r}function Ne(e,r,i,d,M,a,F,b){const g=e===window?document.scrollingElement||document.documentElement:e,z=M===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-F-b,scrollMaxSize:0,offsetStart:-F,offsetEnd:-b};if(M===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=g.scrollLeft,c.scrollViewSize+=g.clientWidth),c.scrollMaxSize=g.scrollWidth,a===!0&&(c.scrollStart=(Ee===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=g.scrollTop,c.scrollViewSize+=g.clientHeight),c.scrollMaxSize=g.scrollHeight),i!==null)for(let w=i.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=w[z]);if(d!==null)for(let w=d.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=w[z]);if(r!==e){const w=g.getBoundingClientRect(),C=r.getBoundingClientRect();M===!0?(c.offsetStart+=C.left-w.left,c.offsetEnd-=C.width):(c.offsetStart+=C.top-w.top,c.offsetEnd-=C.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function st(e,r,i,d){r==="end"&&(r=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(d===!0&&(r=(Ee===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):i===!0?(d===!0&&(r=(Ee===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function ke(e,r,i,d){if(i>=d)return 0;const M=r.length,a=Math.floor(i/K),F=Math.floor((d-1)/K)+1;let b=e.slice(a,F).reduce(Se,0);return i%K!==0&&(b-=r.slice(a*K,i).reduce(Se,0)),d%K!==0&&d!==M&&(b-=r.slice(d,F*K).reduce(Se,0)),b}const sl={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},dt={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...sl};function dl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:i,virtualScrollItemSizeComputed:d}){const M=Ue(),{props:a,emit:F,proxy:b}=M,{$q:g}=b;let z,c,w,C=[],x;const A=R(0),L=R(0),s=R({}),D=R(null),W=R(null),H=R(null),O=R({from:0,to:0}),pe=f(()=>a.tableColspan!==void 0?a.tableColspan:100);d===void 0&&(d=f(()=>a.virtualScrollItemSize));const _=f(()=>d.value+";"+a.virtualScrollHorizontal),X=f(()=>_.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);me(X,()=>{j()}),me(_,J);function J(){oe(c,!0)}function he(l){oe(l===void 0?c:l)}function Z(l,o){const m=r();if(m==null||m.nodeType===8)return;const q=Ne(m,i(),D.value,W.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);w!==q.scrollViewSize&&j(q.scrollViewSize),P(m,q,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,rl.indexOf(o)!==-1?o:c!==-1&&l>c?"end":"start")}function qe(){const l=r();if(l==null||l.nodeType===8)return;const o=Ne(l,i(),D.value,W.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),m=e.value-1,q=o.scrollMaxSize-o.offsetStart-o.offsetEnd-L.value;if(z===o.scrollStart)return;if(o.scrollMaxSize<=0){P(l,o,0,0);return}w!==o.scrollViewSize&&j(o.scrollViewSize),ge(O.value.from);const B=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(x[m],o.scrollViewSize/2));if(B>0&&Math.ceil(o.scrollStart)>=B){P(l,o,m,o.scrollMaxSize-o.offsetEnd-C.reduce(Se,0));return}let V=0,h=o.scrollStart-o.offsetStart,E=h;if(h<=q&&h+o.scrollViewSize>=A.value)h-=A.value,V=O.value.from,E=h;else for(let S=0;h>=C[S]&&V<m;S++)h-=C[S],V+=K;for(;h>0&&V<m;)h-=x[V],h>-o.scrollViewSize?(V++,E=h):E=x[V]+h;P(l,o,V,E)}function P(l,o,m,q,B){const V=typeof B=="string"&&B.indexOf("-force")!==-1,h=V===!0?B.replace("-force",""):B,E=h!==void 0?h:"start";let S=Math.max(0,m-s.value[E]),$=S+s.value.total;$>e.value&&($=e.value,S=Math.max(0,$-s.value.total)),z=o.scrollStart;const Y=S!==O.value.from||$!==O.value.to;if(Y===!1&&h===void 0){ye(m);return}const{activeElement:ze}=document,Q=H.value;Y===!0&&Q!==null&&Q!==ze&&Q.contains(ze)===!0&&(Q.addEventListener("focusout",Ae),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",Ae)})),cl(Q,m-S);const Ie=h!==void 0?x.slice(S,m).reduce(Se,0):0;if(Y===!0){const ee=$>=O.value.from&&S<=O.value.to?O.value.to:$;O.value={from:S,to:ee},A.value=ke(C,x,0,S),L.value=ke(C,x,$,e.value),requestAnimationFrame(()=>{O.value.to!==$&&z===o.scrollStart&&(O.value={from:O.value.from,to:$},L.value=ke(C,x,$,e.value))})}requestAnimationFrame(()=>{if(z!==o.scrollStart)return;Y===!0&&ge(S);const ee=x.slice(S,m).reduce(Se,0),te=ee+o.offsetStart+A.value,Me=te+x[m];let we=te+q;if(h!==void 0){const Te=ee-Ie,Ve=o.scrollStart+Te;we=V!==!0&&Ve<te&&Me<Ve+o.scrollViewSize?Ve:h==="end"?Me-o.scrollViewSize:te-(h==="start"?0:Math.round((o.scrollViewSize-x[m])/2))}z=we,st(l,we,a.virtualScrollHorizontal,g.lang.rtl),ye(m)})}function ge(l){const o=H.value;if(o){const m=gt.call(o.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),q=m.length,B=a.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let V=l,h,E;for(let S=0;S<q;){for(h=B(m[S]),S++;S<q&&m[S].classList.contains("q-virtual-scroll--with-prev")===!0;)h+=B(m[S]),S++;E=h-x[V],E!==0&&(x[V]+=E,C[Math.floor(V/K)]+=E),V++}}}function Ae(){H.value!==null&&H.value!==void 0&&H.value.focus()}function oe(l,o){const m=1*d.value;(o===!0||Array.isArray(x)===!1)&&(x=[]);const q=x.length;x.length=e.value;for(let V=e.value-1;V>=q;V--)x[V]=m;const B=Math.floor((e.value-1)/K);C=[];for(let V=0;V<=B;V++){let h=0;const E=Math.min((V+1)*K,e.value);for(let S=V*K;S<E;S++)h+=x[S];C.push(h)}c=-1,z=void 0,A.value=ke(C,x,0,O.value.from),L.value=ke(C,x,O.value.to,e.value),l>=0?(ge(O.value.from),G(()=>{Z(l)})):ae()}function j(l){if(l===void 0&&typeof window!="undefined"){const h=r();h!=null&&h.nodeType!==8&&(l=Ne(h,i(),D.value,W.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const o=parseFloat(a.virtualScrollSliceRatioBefore)||0,m=parseFloat(a.virtualScrollSliceRatioAfter)||0,q=1+o+m,B=l===void 0||l<=0?1:Math.ceil(l/d.value),V=Math.max(1,B,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/q));s.value={total:Math.ceil(V*q),start:Math.ceil(V*o),center:Math.ceil(V*(.5+o)),end:Math.ceil(V*(1+o)),view:B}}function Re(l,o){const m=a.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+m]:d.value+"px"};return[l==="tbody"?y(l,{class:"q-virtual-scroll__padding",key:"before",ref:D},[y("tr",[y("td",{style:{[m]:`${A.value}px`,...q},colspan:pe.value})])]):y(l,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[m]:`${A.value}px`,...q}}),y(l,{class:"q-virtual-scroll__content",key:"content",ref:H,tabindex:-1},o.flat()),l==="tbody"?y(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[y("tr",[y("td",{style:{[m]:`${L.value}px`,...q},colspan:pe.value})])]):y(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[m]:`${L.value}px`,...q}})]}function ye(l){c!==l&&(a.onVirtualScroll!==void 0&&F("virtualScroll",{index:l,from:O.value.from,to:O.value.to-1,direction:l<c?"decrease":"increase",ref:b}),c=l)}j();const ae=$t(qe,g.platform.is.ios===!0?120:35);Nt(()=>{j()});let be=!1;return Kt(()=>{be=!0}),jt(()=>{if(be!==!0)return;const l=r();z!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?st(l,z,a.virtualScrollHorizontal,g.lang.rtl):Z(c)}),ht(()=>{ae.cancel()}),Object.assign(b,{scrollTo:Z,reset:J,refresh:he}),{virtualScrollSliceRange:O,virtualScrollSliceSizeComputed:s,setVirtualScrollSize:j,onVirtualScrollEvt:ae,localResetVirtualScroll:oe,padVirtualScroll:Re,scrollTo:Z,reset:J,refresh:he}}const ft=e=>["add","add-unique","toggle"].includes(e),fl=".*+?^${}()|[]\\",vl=Object.keys(Qe);function Ke(e,r){if(typeof e=="function")return e;const i=e!==void 0?e:r;return d=>d!==null&&typeof d=="object"&&i in d?d[i]:d}var yl=je({name:"QSelect",inheritAttrs:!1,props:{...dt,...Qt,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ft},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:dt.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...vt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:r,emit:i}){const{proxy:d}=Ue(),{$q:M}=d,a=R(!1),F=R(!1),b=R(-1),g=R(""),z=R(!1),c=R(!1);let w=null,C=null,x,A,L,s=null,D,W,H,O;const pe=R(null),_=R(null),X=R(null),J=R(null),he=R(null),Z=Ut(e),qe=Yt(ut),P=f(()=>e.options.length),ge=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Ae,virtualScrollSliceSizeComputed:oe,localResetVirtualScroll:j,padVirtualScroll:Re,onVirtualScrollEvt:ye,scrollTo:ae,setVirtualScrollSize:be}=dl({virtualScrollLength:P,getVirtualScrollTarget:Vt,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:ge}),l=St(),o=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0){const n=e.mapOptions===!0&&x!==void 0?x:[],v=u.map(p=>wt(p,n));return e.modelValue===null&&t===!0?v.filter(p=>p!==null):v}return u}),m=f(()=>{const t={};return vl.forEach(u=>{const n=e[u];n!==void 0&&(t[u]=n)}),t}),q=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=f(()=>rt(o.value)),V=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),h=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),E=f(()=>P.value===0),S=f(()=>o.value.map(t=>N.value(t)).join(", ")),$=f(()=>e.displayValue!==void 0?e.displayValue:S.value),Y=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ze=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(Y.value))),Q=f(()=>l.focused.value===!0?e.tabindex:-1),Ie=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return b.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${b.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>o.value.map((t,u)=>({index:u,opt:t,html:Y.value(t),selected:!0,removeAtIndex:bt,toggleOption:le,tabindex:Q.value}))),Me=f(()=>{if(P.value===0)return[];const{from:t,to:u}=Ae.value;return e.options.slice(t,u).map((n,v)=>{const p=ie.value(n)===!0,k=Le(n)===!0,T=t+v,I={clickable:!0,active:k,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:q.value,role:"option","aria-selected":k===!0?"true":"false",id:`${l.targetUid.value}_${T}`,onClick:()=>{le(n)}};return p!==!0&&(b.value===T&&(I.focused=!0),M.platform.is.desktop===!0&&(I.onMousemove=()=>{a.value===!0&&re(T)})),{index:T,opt:n,html:Y.value(n),label:N.value(n),selected:I.active,focused:I.focused,toggleOption:le,setOptionIndex:re,itemProps:I}})}),we=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),Te=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=f(()=>Ke(e.optionValue,"value")),N=f(()=>Ke(e.optionLabel,"label")),ie=f(()=>Ke(e.optionDisable,"disable")),Oe=f(()=>o.value.map(U.value)),yt=f(()=>{const t={onInput:ut,onChange:qe,onKeydown:et,onKeyup:Je,onKeypress:Ze,onFocus:Ye,onClick(u){A===!0&&ve(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=qe,t});me(o,t=>{x=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(F.value!==!0&&a.value!==!0||B.value!==!0)&&(L!==!0&&fe(),(F.value===!0||a.value===!0)&&ce(""))},{immediate:!0}),me(()=>e.fillInput,fe),me(a,De),me(P,Ft);function We(t){return e.emitValue===!0?U.value(t):t}function He(t){if(t!==-1&&t<o.value.length)if(e.multiple===!0){const u=e.modelValue.slice();i("remove",{index:t,value:u.splice(t,1)[0]}),i("update:modelValue",u)}else i("update:modelValue",null)}function bt(t){He(t),l.focus()}function Xe(t,u){const n=We(t);if(e.multiple!==!0){e.fillInput===!0&&Ce(N.value(t),!0,!0),i("update:modelValue",n);return}if(o.value.length===0){i("add",{index:0,value:n}),i("update:modelValue",e.multiple===!0?[n]:n);return}if(u===!0&&Le(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();i("add",{index:v.length,value:n}),v.push(n),i("update:modelValue",v)}function le(t,u){if(l.editable.value!==!0||t===void 0||ie.value(t)===!0)return;const n=U.value(t);if(e.multiple!==!0){u!==!0&&(Ce(e.fillInput===!0?N.value(t):"",!0,!0),ue()),_.value!==null&&_.value.focus(),(o.value.length===0||xe(U.value(o.value[0]),n)!==!0)&&i("update:modelValue",e.emitValue===!0?n:t);return}if((A!==!0||z.value===!0)&&l.focus(),Ye(),o.value.length===0){const k=e.emitValue===!0?n:t;i("add",{index:0,value:k}),i("update:modelValue",e.multiple===!0?[k]:k);return}const v=e.modelValue.slice(),p=Oe.value.findIndex(k=>xe(k,n));if(p!==-1)i("remove",{index:p,value:v.splice(p,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const k=e.emitValue===!0?n:t;i("add",{index:v.length,value:k}),v.push(k)}i("update:modelValue",v)}function re(t){if(M.platform.is.desktop!==!0)return;const u=t!==-1&&t<P.value?t:-1;b.value!==u&&(b.value=u)}function _e(t=1,u){if(a.value===!0){let n=b.value;do n=ct(n+t,-1,P.value-1);while(n!==-1&&n!==b.value&&ie.value(e.options[n])===!0);b.value!==n&&(re(n),ae(n),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(n>=0?N.value(e.options[n]):D,!0))}}function wt(t,u){const n=v=>xe(U.value(v),t);return e.options.find(n)||u.find(n)||t}function Le(t){const u=U.value(t);return Oe.value.find(n=>xe(n,u))!==void 0}function Ye(t){e.useInput===!0&&_.value!==null&&(t===void 0||_.value===t.target&&t.target.value===S.value)&&_.value.select()}function Ge(t){Gt(t,27)===!0&&a.value===!0&&(ve(t),ue(),fe()),i("keyup",t)}function Je(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ge(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),fe(),typeof u=="string"&&u.length!==0){const n=u.toLocaleLowerCase(),v=k=>{const T=e.options.find(I=>k.value(I).toLocaleLowerCase()===n);return T===void 0?!1:(o.value.indexOf(T)===-1?le(T):ue(),!0)},p=k=>{v(U)!==!0&&(v(N)===!0||k===!0||ce(u,!0,()=>p(!0)))};p()}else l.clearValue(t)}function Ze(t){i("keypress",t)}function et(t){if(i("keydown",t),Jt(t)===!0)return;const u=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(b.value!==-1||u===!0);if(t.keyCode===27){$e(t);return}if(t.keyCode===9&&n===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&a.value===!1){ne(t),de();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ne(t),b.value=-1,_e(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&oe.value!==void 0&&(ne(t),b.value=Math.max(-1,Math.min(P.value,b.value+(t.keyCode===33?-1:1)*oe.value.view)),_e(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ne(t),_e(t.keyCode===38?-1:1,e.multiple));const v=P.value;if((H===void 0||O<Date.now())&&(H=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||H.length!==0)){a.value!==!0&&de(t);const p=t.key.toLocaleLowerCase(),k=H.length===1&&H[0]===p;O=Date.now()+1500,k===!1&&(ne(t),H+=p);const T=new RegExp("^"+H.split("").map(Pe=>fl.indexOf(Pe)!==-1?"\\"+Pe:Pe).join(".*"),"i");let I=b.value;if(k===!0||I<0||T.test(N.value(e.options[I]))!==!0)do I=ct(I+1,-1,v-1);while(I!==b.value&&(ie.value(e.options[I])===!0||T.test(N.value(e.options[I]))!==!0));b.value!==I&&G(()=>{re(I),ae(I),I>=0&&e.useInput===!0&&e.fillInput===!0&&Fe(N.value(e.options[I]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||H!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&ne(t),b.value!==-1&&b.value<v){le(e.options[b.value]);return}if(u===!0){const p=(k,T)=>{if(T){if(ft(T)!==!0)return}else T=e.newValueMode;if(Ce("",e.multiple!==!0,!0),k==null)return;(T==="toggle"?le:Xe)(k,T==="add-unique"),e.multiple!==!0&&(_.value!==null&&_.value.focus(),ue())};if(e.onNewValue!==void 0?i("newValue",g.value,p):p(g.value),e.multiple!==!0)return}a.value===!0?se():l.innerLoading.value!==!0&&de()}}function tt(){return A===!0?he.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Vt(){return tt()}function Ct(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?te.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?te.value.map((t,u)=>y(il,{key:"option-"+u,removable:l.editable.value===!0&&ie.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(u)}},()=>y("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:N.value(t.opt)}))):[y("span",{[ze.value===!0?"innerHTML":"textContent"]:$.value})]}function lt(){if(E.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:g.value}):void 0;const t=r.option!==void 0?r.option:n=>y(ul,{key:n.index,...n.itemProps},()=>y(tl,()=>y(ll,()=>y("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let u=Re("div",Me.value.map(t));return r["before-options"]!==void 0&&(u=r["before-options"]().concat(u)),el(r["after-options"],u)}function xt(t,u){const n=u===!0?{...Ie.value,...l.splitAttrs.attributes.value}:void 0,v={ref:u===!0?_:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...n,id:u===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...yt.value};return t!==!0&&A===!0&&(Array.isArray(v.class)===!0?v.class=[...v.class,"no-pointer-events"]:v.class+=" no-pointer-events"),y("input",v)}function ut(t){w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),L=!0,D=g.value,l.focused.value!==!0&&(A!==!0||z.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,ce(g.value)},e.inputDebounce)))}function Fe(t,u){g.value!==t&&(g.value=t,u===!0||e.inputDebounce===0||e.inputDebounce==="0"?i("inputValue",t):C=setTimeout(()=>{C=null,i("inputValue",t)},e.inputDebounce))}function Ce(t,u,n){L=n!==!0,e.useInput===!0&&(Fe(t,!0),(u===!0||n!==!0)&&(D=t),u!==!0&&ce(t))}function ce(t,u,n){if(e.onFilter===void 0||u!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?i("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&L!==!0&&t===N.value(o.value[0])&&(t="");const v=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);s!==null&&clearTimeout(s),s=v,i("filter",t,(p,k)=>{(u===!0||l.focused.value===!0)&&s===v&&(clearTimeout(s),typeof p=="function"&&p(),c.value=!1,G(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(u===!0?a.value===!0&&ue():a.value===!0?De(!0):a.value=!0),typeof k=="function"&&G(()=>{k(d)}),typeof n=="function"&&G(()=>{n(d)})}))},()=>{l.focused.value===!0&&s===v&&(clearTimeout(s),l.innerLoading.value=!1,c.value=!1),a.value===!0&&(a.value=!1)})}function kt(){return y(nl,{ref:X,class:h.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&E.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:q.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Te.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:ye,onBeforeShow:ot,onBeforeHide:pt,onShow:qt},lt)}function pt(t){at(t),se()}function qt(){be()}function At(t){ve(t),_.value!==null&&_.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function zt(t){ve(t),G(()=>{z.value=!1})}function It(){const t=[y(ol,{class:`col-auto ${l.fieldClass.value}`,...m.value,for:l.targetUid.value,dark:q.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...l.splitAttrs.listeners.value,onFocus:At,onBlur:zt},{...r,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(y("div",{ref:he,class:h.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:$e,onScrollPassive:ye},lt())),y(Zt,{ref:J,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ot,onBeforeHide:Mt,onHide:Ot,onShow:_t},()=>y("div",{class:"q-select__dialog"+(q.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function Mt(t){at(t),J.value!==null&&J.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Ot(t){ue(),l.focused.value===!1&&i("blur",t),fe()}function _t(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&_.value!==null&&_.value!==t&&_.value.focus(),be()}function se(){F.value!==!0&&(b.value=-1,a.value===!0&&(a.value=!1),l.focused.value===!1&&(s!==null&&(clearTimeout(s),s=null),l.innerLoading.value===!0&&(i("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function de(t){l.editable.value===!0&&(A===!0?(l.onControlFocusin(t),F.value=!0,G(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ce(g.value):(E.value!==!0||r["no-option"]!==void 0)&&(a.value=!0))}function ue(){F.value=!1,se()}function fe(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&N.value(o.value[0])||"",!0,!0)}function De(t){let u=-1;if(t===!0){if(o.value.length!==0){const n=U.value(o.value[0]);u=e.options.findIndex(v=>xe(U.value(v),n))}j(u)}re(u)}function Ft(t,u){a.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),G(()=>{a.value===!0&&l.innerLoading.value===!1&&(t>u?j():De(!0))}))}function nt(){F.value===!1&&X.value!==null&&X.value.updatePosition()}function ot(t){t!==void 0&&ve(t),i("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function at(t){t!==void 0&&ve(t),i("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function it(){A=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||E.value===!1:!0),W=M.platform.is.ios===!0&&A===!0&&e.useInput===!0?"fade":e.transitionShow}return Wt(it),Xt(nt),it(),ht(()=>{w!==null&&clearTimeout(w),C!==null&&clearTimeout(C)}),Object.assign(d,{showPopup:de,hidePopup:ue,removeAtIndex:He,add:Xe,toggleOption:le,getOptionIndex:()=>b.value,setOptionIndex:re,moveOptionSelection:_e,filter:ce,updateMenuPosition:nt,updateInputValue:Ce,isOptionSelected:Le,getEmittingOptionValue:We,isOptionDisabled:(...t)=>ie.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>N.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:pe,targetRef:_,hasValue:B,showPopup:de,floatingLabel:f(()=>e.hideSelected!==!0&&B.value===!0||typeof g.value=="number"||g.value.length!==0||rt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(F.value===!0||E.value!==!0||r["no-option"]!==void 0))return A===!0?It():kt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{fe(),se()})},onClick(t){if($e(t),A!==!0&&a.value===!0){se(),_.value!==null&&_.value.focus();return}de(t)}},getControl:t=>{const u=Ct(),n=t===!0||F.value!==!0||A!==!0;if(e.useInput===!0)u.push(xt(t,n));else if(l.editable.value===!0){const p=n===!0?Ie.value:void 0;u.push(y("input",{ref:n===!0?_:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:$.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...p,onKeydown:et,onKeyup:Ge,onKeypress:Ze})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&u.push(y("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Je}))}if(Z.value!==void 0&&e.disable!==!0&&Oe.value.length!==0){const p=Oe.value.map(k=>y("option",{value:k,selected:!0}));u.push(y("select",{class:"hidden",name:Z.value,multiple:e.multiple},p))}const v=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return y("div",{class:"q-field__native row items-center",...v,...l.splitAttrs.listeners.value},u)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[y(Be,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:we.value})]:null}),mt(l)}});export{yl as Q,Ee as r};

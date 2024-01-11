import{H as je,az as Qe,aA as ft,aB as vt,aC as mt,K as Ft,aD as Bt,M as Et,aE as Lt,c as f,V as Rt,g as Ue,h,a3 as Be,aF as Ht,aG as Tt,ab as ne,y as Dt,r as L,w as me,n as G,aH as Pt,k as Nt,D as Kt,C as $t,S as St,aI as jt,aJ as Qt,aK as rt,aL as ke,a7 as Ut,aM as Wt,aN as Ke,aO as Xt,aP as ve,aQ as Yt,a8 as Gt,aR as Jt,aj as Zt}from"./index.5175d5c0.js";import{Q as el,a as tl,b as ll}from"./position-engine.a34c8035.js";import{Q as ul}from"./QMenu.12801ee8.js";import{n as ct}from"./format.865294d5.js";let Ee=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const r=document.createElement("div");Object.assign(r.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,Ee=e.scrollLeft>=0,e.remove()}var nl=je({name:"QField",inheritAttrs:!1,props:Qe,emits:ft,setup(){return vt(mt())}});const al={xs:8,sm:10,md:14,lg:20,xl:24};var il=je({name:"QChip",props:{...Ft,...Bt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:o}){const{proxy:{$q:b}}=Ue(),M=Et(e,b),i=Lt(e,al),F=f(()=>e.selected===!0||e.icon!==void 0),y=f(()=>e.selected===!0?e.iconSelected||b.iconSet.chip.selected:e.icon),g=f(()=>e.iconRemove||b.iconSet.chip.remove),z=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=f(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(M.value===!0?" q-chip--dark q-dark":"")}),w=f(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||b.lang.label.remove};return{chip:d,remove:D}});function C(d){d.keyCode===13&&x(d)}function x(d){e.disable||(o("update:selected",!e.selected),o("click",d))}function p(d){(d.keyCode===void 0||d.keyCode===13)&&(ne(d),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function T(){const d=[];z.value===!0&&d.push(h("div",{class:"q-focus-helper"})),F.value===!0&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--left",name:y.value}));const D=e.label!==void 0?[h("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(h("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ht(r.default,D))),e.iconRight&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(h(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...w.value.remove,onClick:p,onKeyup:p})),d}return()=>{if(e.modelValue===!1)return;const d={class:c.value,style:i.value};return z.value===!0&&Object.assign(d,w.value.chip,{onClick:x,onKeyup:C}),Rt("div",d,T(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Tt,e.ripple]])}}});const $=1e3,ol=["start","center","end","start-force","center-force","end-force"],gt=Array.prototype.filter,rl=window.getComputedStyle(document.body).overflowAnchor===void 0?Dt:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const o=e.children||[];gt.call(o,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const b=o[r];b&&b.dataset&&(b.dataset.qVsAnchor="")}))};function Se(e,r){return e+r}function $e(e,r,o,b,M,i,F,y){const g=e===window?document.scrollingElement||document.documentElement:e,z=M===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-F-y,scrollMaxSize:0,offsetStart:-F,offsetEnd:-y};if(M===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=g.scrollLeft,c.scrollViewSize+=g.clientWidth),c.scrollMaxSize=g.scrollWidth,i===!0&&(c.scrollStart=(Ee===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=g.scrollTop,c.scrollViewSize+=g.clientHeight),c.scrollMaxSize=g.scrollHeight),o!==null)for(let w=o.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=w[z]);if(b!==null)for(let w=b.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=w[z]);if(r!==e){const w=g.getBoundingClientRect(),C=r.getBoundingClientRect();M===!0?(c.offsetStart+=C.left-w.left,c.offsetEnd-=C.width):(c.offsetStart+=C.top-w.top,c.offsetEnd-=C.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function st(e,r,o,b){r==="end"&&(r=(e===window?document.body:e)[o===!0?"scrollWidth":"scrollHeight"]),e===window?o===!0?(b===!0&&(r=(Ee===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):o===!0?(b===!0&&(r=(Ee===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function xe(e,r,o,b){if(o>=b)return 0;const M=r.length,i=Math.floor(o/$),F=Math.floor((b-1)/$)+1;let y=e.slice(i,F).reduce(Se,0);return o%$!==0&&(y-=r.slice(i*$,o).reduce(Se,0)),b%$!==0&&b!==M&&(y-=r.slice(b,F*$).reduce(Se,0)),y}const cl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},sl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...cl};function dl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:o,virtualScrollItemSizeComputed:b}){const M=Ue(),{props:i,emit:F,proxy:y}=M,{$q:g}=y;let z,c,w,C=[],x;const p=L(0),T=L(0),d=L({}),D=L(null),W=L(null),R=L(null),O=L({from:0,to:0}),Ae=f(()=>i.tableColspan!==void 0?i.tableColspan:100);b===void 0&&(b=f(()=>i.virtualScrollItemSize));const _=f(()=>b.value+";"+i.virtualScrollHorizontal),X=f(()=>_.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);me(X,()=>{j()}),me(_,J);function J(){ae(c,!0)}function ge(l){ae(l===void 0?c:l)}function Z(l,a){const v=r();if(v==null||v.nodeType===8)return;const q=$e(v,o(),D.value,W.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);w!==q.scrollViewSize&&j(q.scrollViewSize),P(v,q,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,ol.indexOf(a)>-1?a:c>-1&&l>c?"end":"start")}function qe(){const l=r();if(l==null||l.nodeType===8)return;const a=$e(l,o(),D.value,W.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),v=e.value-1,q=a.scrollMaxSize-a.offsetStart-a.offsetEnd-T.value;if(z===a.scrollStart)return;if(a.scrollMaxSize<=0){P(l,a,0,0);return}w!==a.scrollViewSize&&j(a.scrollViewSize),he(O.value.from);const B=Math.floor(a.scrollMaxSize-Math.max(a.scrollViewSize,a.offsetEnd)-Math.min(x[v],a.scrollViewSize/2));if(B>0&&Math.ceil(a.scrollStart)>=B){P(l,a,v,a.scrollMaxSize-a.offsetEnd-C.reduce(Se,0));return}let V=0,S=a.scrollStart-a.offsetStart,E=S;if(S<=q&&S+a.scrollViewSize>=p.value)S-=p.value,V=O.value.from,E=S;else for(let m=0;S>=C[m]&&V<v;m++)S-=C[m],V+=$;for(;S>0&&V<v;)S-=x[V],S>-a.scrollViewSize?(V++,E=S):E=x[V]+S;P(l,a,V,E)}function P(l,a,v,q,B){const V=typeof B=="string"&&B.indexOf("-force")>-1,S=V===!0?B.replace("-force",""):B,E=S!==void 0?S:"start";let m=Math.max(0,v-d.value[E]),N=m+d.value.total;N>e.value&&(N=e.value,m=Math.max(0,N-d.value.total)),z=a.scrollStart;const Y=m!==O.value.from||N!==O.value.to;if(Y===!1&&S===void 0){ye(v);return}const{activeElement:ze}=document,Q=R.value;Y===!0&&Q!==null&&Q!==ze&&Q.contains(ze)===!0&&(Q.addEventListener("focusout",pe),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",pe)})),rl(Q,v-m);const Ie=S!==void 0?x.slice(m,v).reduce(Se,0):0;if(Y===!0){const ee=N>=O.value.from&&m<=O.value.to?O.value.to:N;O.value={from:m,to:ee},p.value=xe(C,x,0,m),T.value=xe(C,x,N,e.value),requestAnimationFrame(()=>{O.value.to!==N&&z===a.scrollStart&&(O.value={from:O.value.from,to:N},T.value=xe(C,x,N,e.value))})}requestAnimationFrame(()=>{if(z!==a.scrollStart)return;Y===!0&&he(m);const ee=x.slice(m,v).reduce(Se,0),te=ee+a.offsetStart+p.value,Me=te+x[v];let we=te+q;if(S!==void 0){const Re=ee-Ie,Ve=a.scrollStart+Re;we=V!==!0&&Ve<te&&Me<Ve+a.scrollViewSize?Ve:S==="end"?Me-a.scrollViewSize:te-(S==="start"?0:Math.round((a.scrollViewSize-x[v])/2))}z=we,st(l,we,i.virtualScrollHorizontal,g.lang.rtl),ye(v)})}function he(l){const a=R.value;if(a){const v=gt.call(a.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),q=v.length,B=i.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let V=l,S,E;for(let m=0;m<q;){for(S=B(v[m]),m++;m<q&&v[m].classList.contains("q-virtual-scroll--with-prev")===!0;)S+=B(v[m]),m++;E=S-x[V],E!==0&&(x[V]+=E,C[Math.floor(V/$)]+=E),V++}}}function pe(){R.value!==null&&R.value!==void 0&&R.value.focus()}function ae(l,a){const v=1*b.value;(a===!0||Array.isArray(x)===!1)&&(x=[]);const q=x.length;x.length=e.value;for(let V=e.value-1;V>=q;V--)x[V]=v;const B=Math.floor((e.value-1)/$);C=[];for(let V=0;V<=B;V++){let S=0;const E=Math.min((V+1)*$,e.value);for(let m=V*$;m<E;m++)S+=x[m];C.push(S)}c=-1,z=void 0,p.value=xe(C,x,0,O.value.from),T.value=xe(C,x,O.value.to,e.value),l>=0?(he(O.value.from),G(()=>{Z(l)})):ie()}function j(l){if(l===void 0&&typeof window!="undefined"){const S=r();S!=null&&S.nodeType!==8&&(l=$e(S,o(),D.value,W.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const a=parseFloat(i.virtualScrollSliceRatioBefore)||0,v=parseFloat(i.virtualScrollSliceRatioAfter)||0,q=1+a+v,B=l===void 0||l<=0?1:Math.ceil(l/b.value),V=Math.max(1,B,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/q));d.value={total:Math.ceil(V*q),start:Math.ceil(V*a),center:Math.ceil(V*(.5+a)),end:Math.ceil(V*(1+a)),view:B}}function Le(l,a){const v=i.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+v]:b.value+"px"};return[l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"before",ref:D},[h("tr",[h("td",{style:{[v]:`${p.value}px`,...q},colspan:Ae.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[v]:`${p.value}px`,...q}}),h(l,{class:"q-virtual-scroll__content",key:"content",ref:R,tabindex:-1},a.flat()),l==="tbody"?h(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[h("tr",[h("td",{style:{[v]:`${T.value}px`,...q},colspan:Ae.value})])]):h(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[v]:`${T.value}px`,...q}})]}function ye(l){c!==l&&(i.onVirtualScroll!==void 0&&F("virtualScroll",{index:l,from:O.value.from,to:O.value.to-1,direction:l<c?"decrease":"increase",ref:y}),c=l)}j();const ie=Pt(qe,g.platform.is.ios===!0?120:35);Nt(()=>{j()});let be=!1;return Kt(()=>{be=!0}),$t(()=>{if(be!==!0)return;const l=r();z!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?st(l,z,i.virtualScrollHorizontal,g.lang.rtl):Z(c)}),St(()=>{ie.cancel()}),Object.assign(y,{scrollTo:Z,reset:J,refresh:ge}),{virtualScrollSliceRange:O,virtualScrollSliceSizeComputed:d,setVirtualScrollSize:j,onVirtualScrollEvt:ie,localResetVirtualScroll:ae,padVirtualScroll:Le,scrollTo:Z,reset:J,refresh:ge}}const dt=e=>["add","add-unique","toggle"].includes(e),fl=".*+?^${}()|[]\\",vl=Object.keys(Qe);var yl=je({name:"QSelect",inheritAttrs:!1,props:{...sl,...jt,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:dt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...ft,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:r,emit:o}){const{proxy:b}=Ue(),{$q:M}=b,i=L(!1),F=L(!1),y=L(-1),g=L(""),z=L(!1),c=L(!1);let w=null,C=null,x,p,T,d=null,D,W,R,O;const Ae=L(null),_=L(null),X=L(null),J=L(null),ge=L(null),Z=Qt(e),qe=Xt(ut),P=f(()=>Array.isArray(e.options)?e.options.length:0),he=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:pe,virtualScrollSliceSizeComputed:ae,localResetVirtualScroll:j,padVirtualScroll:Le,onVirtualScrollEvt:ye,scrollTo:ie,setVirtualScrollSize:be}=dl({virtualScrollLength:P,getVirtualScrollTarget:wt,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:he}),l=mt(),a=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&x!==void 0?x:[],s=n.map(A=>bt(A,u));return e.modelValue===null&&t===!0?s.filter(A=>A!==null):s}return n}),v=f(()=>{const t={};return vl.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),q=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=f(()=>rt(a.value)),V=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||a.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),S=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),E=f(()=>P.value===0),m=f(()=>a.value.map(t=>K.value(t)).join(", ")),N=f(()=>e.displayValue!==void 0?e.displayValue:m.value),Y=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ze=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||a.value.some(Y.value))),Q=f(()=>l.focused.value===!0?e.tabindex:-1),Ie=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return y.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${y.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>a.value.map((t,n)=>({index:n,opt:t,html:Y.value(t),selected:!0,removeAtIndex:yt,toggleOption:le,tabindex:Q.value}))),Me=f(()=>{if(P.value===0)return[];const{from:t,to:n}=pe.value;return e.options.slice(t,n).map((u,s)=>{const A=oe.value(u)===!0,k=t+s,I={clickable:!0,active:!1,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:A,tabindex:-1,dense:e.optionsDense,dark:q.value,role:"option",id:`${l.targetUid.value}_${k}`,onClick:()=>{le(u)}};return A!==!0&&(De(u)===!0&&(I.active=!0),y.value===k&&(I.focused=!0),I["aria-selected"]=I.active===!0?"true":"false",M.platform.is.desktop===!0&&(I.onMousemove=()=>{i.value===!0&&re(k)})),{index:k,opt:u,html:Y.value(u),label:K.value(u),selected:I.active,focused:I.focused,toggleOption:le,setOptionIndex:re,itemProps:I}})}),we=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),Re=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=f(()=>Te(e.optionValue,"value")),K=f(()=>Te(e.optionLabel,"label")),oe=f(()=>Te(e.optionDisable,"disable")),Oe=f(()=>a.value.map(t=>U.value(t))),ht=f(()=>{const t={onInput:ut,onChange:qe,onKeydown:et,onKeyup:Je,onKeypress:Ze,onFocus:Ye,onClick(n){p===!0&&ve(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=qe,t});me(a,t=>{x=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(F.value!==!0&&i.value!==!0||B.value!==!0)&&(T!==!0&&fe(),(F.value===!0||i.value===!0)&&ce(""))},{immediate:!0}),me(()=>e.fillInput,fe),me(i,Pe),me(P,_t);function We(t){return e.emitValue===!0?U.value(t):t}function He(t){if(t>-1&&t<a.value.length)if(e.multiple===!0){const n=e.modelValue.slice();o("remove",{index:t,value:n.splice(t,1)[0]}),o("update:modelValue",n)}else o("update:modelValue",null)}function yt(t){He(t),l.focus()}function Xe(t,n){const u=We(t);if(e.multiple!==!0){e.fillInput===!0&&Ce(K.value(t),!0,!0),o("update:modelValue",u);return}if(a.value.length===0){o("add",{index:0,value:u}),o("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&De(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const s=e.modelValue.slice();o("add",{index:s.length,value:u}),s.push(u),o("update:modelValue",s)}function le(t,n){if(l.editable.value!==!0||t===void 0||oe.value(t)===!0)return;const u=U.value(t);if(e.multiple!==!0){n!==!0&&(Ce(e.fillInput===!0?K.value(t):"",!0,!0),ue()),_.value!==null&&_.value.focus(),(a.value.length===0||ke(U.value(a.value[0]),u)!==!0)&&o("update:modelValue",e.emitValue===!0?u:t);return}if((p!==!0||z.value===!0)&&l.focus(),Ye(),a.value.length===0){const k=e.emitValue===!0?u:t;o("add",{index:0,value:k}),o("update:modelValue",e.multiple===!0?[k]:k);return}const s=e.modelValue.slice(),A=Oe.value.findIndex(k=>ke(k,u));if(A>-1)o("remove",{index:A,value:s.splice(A,1)[0]});else{if(e.maxValues!==void 0&&s.length>=e.maxValues)return;const k=e.emitValue===!0?u:t;o("add",{index:s.length,value:k}),s.push(k)}o("update:modelValue",s)}function re(t){if(M.platform.is.desktop!==!0)return;const n=t>-1&&t<P.value?t:-1;y.value!==n&&(y.value=n)}function _e(t=1,n){if(i.value===!0){let u=y.value;do u=ct(u+t,-1,P.value-1);while(u!==-1&&u!==y.value&&oe.value(e.options[u])===!0);y.value!==u&&(re(u),ie(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(u>=0?K.value(e.options[u]):D,!0))}}function bt(t,n){const u=s=>ke(U.value(s),t);return e.options.find(u)||n.find(u)||t}function Te(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:s=>s!==null&&typeof s=="object"&&u in s?s[u]:s}function De(t){const n=U.value(t);return Oe.value.find(u=>ke(u,n))!==void 0}function Ye(t){e.useInput===!0&&_.value!==null&&(t===void 0||_.value===t.target&&t.target.value===m.value)&&_.value.select()}function Ge(t){Yt(t,27)===!0&&i.value===!0&&(ve(t),ue(),fe()),o("keyup",t)}function Je(t){const{value:n}=t.target;if(t.keyCode!==void 0){Ge(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),fe(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),s=k=>{const I=e.options.find(H=>k.value(H).toLocaleLowerCase()===u);return I===void 0?!1:(a.value.indexOf(I)===-1?le(I):ue(),!0)},A=k=>{s(U)!==!0&&(s(K)===!0||k===!0||ce(n,!0,()=>A(!0)))};A()}else l.clearValue(t)}function Ze(t){o("keypress",t)}function et(t){if(o("keydown",t),Gt(t)===!0)return;const n=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(y.value>-1||n===!0);if(t.keyCode===27){Ke(t);return}if(t.keyCode===9&&u===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){ne(t),de();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&o("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ne(t),y.value=-1,_e(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ae.value!==void 0&&(ne(t),y.value=Math.max(-1,Math.min(P.value,y.value+(t.keyCode===33?-1:1)*ae.value.view)),_e(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ne(t),_e(t.keyCode===38?-1:1,e.multiple));const s=P.value;if((R===void 0||O<Date.now())&&(R=""),s>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||R.length!==0)){i.value!==!0&&de(t);const A=t.key.toLocaleLowerCase(),k=R.length===1&&R[0]===A;O=Date.now()+1500,k===!1&&(ne(t),R+=A);const I=new RegExp("^"+R.split("").map(Ne=>fl.indexOf(Ne)>-1?"\\"+Ne:Ne).join(".*"),"i");let H=y.value;if(k===!0||H<0||I.test(K.value(e.options[H]))!==!0)do H=ct(H+1,-1,s-1);while(H!==y.value&&(oe.value(e.options[H])===!0||I.test(K.value(e.options[H]))!==!0));y.value!==H&&G(()=>{re(H),ie(H),H>=0&&e.useInput===!0&&e.fillInput===!0&&Fe(K.value(e.options[H]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||R!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ne(t),y.value>-1&&y.value<s){le(e.options[y.value]);return}if(n===!0){const A=(k,I)=>{if(I){if(dt(I)!==!0)return}else I=e.newValueMode;if(Ce("",e.multiple!==!0,!0),k==null)return;(I==="toggle"?le:Xe)(k,I==="add-unique"),e.multiple!==!0&&(_.value!==null&&_.value.focus(),ue())};if(e.onNewValue!==void 0?o("newValue",g.value,A):A(g.value),e.multiple!==!0)return}i.value===!0?se():l.innerLoading.value!==!0&&de()}}function tt(){return p===!0?ge.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function wt(){return tt()}function Vt(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?te.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?te.value.map((t,n)=>h(il,{key:"option-"+n,removable:l.editable.value===!0&&oe.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(n)}},()=>h("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:K.value(t.opt)}))):[h("span",{[ze.value===!0?"innerHTML":"textContent"]:N.value})]}function lt(){if(E.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:g.value}):void 0;const t=r.option!==void 0?r.option:u=>h(ll,{key:u.index,...u.itemProps},()=>h(el,()=>h(tl,()=>h("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=Le("div",Me.value.map(t));return r["before-options"]!==void 0&&(n=r["before-options"]().concat(n)),Zt(r["after-options"],n)}function Ct(t,n){const u=n===!0?{...Ie.value,...l.splitAttrs.attributes.value}:void 0,s={ref:n===!0?_:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...u,id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...ht.value};return t!==!0&&p===!0&&(Array.isArray(s.class)===!0?s.class=[...s.class,"no-pointer-events"]:s.class+=" no-pointer-events"),h("input",s)}function ut(t){w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),T=!0,D=g.value,l.focused.value!==!0&&(p!==!0||z.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,ce(g.value)},e.inputDebounce)))}function Fe(t,n){g.value!==t&&(g.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?o("inputValue",t):C=setTimeout(()=>{C=null,o("inputValue",t)},e.inputDebounce))}function Ce(t,n,u){T=u!==!0,e.useInput===!0&&(Fe(t,!0),(n===!0||u!==!0)&&(D=t),n!==!0&&ce(t))}function ce(t,n,u){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?o("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&a.value.length!==0&&T!==!0&&t===K.value(a.value[0])&&(t="");const s=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);d!==null&&clearTimeout(d),d=s,o("filter",t,(A,k)=>{(n===!0||l.focused.value===!0)&&d===s&&(clearTimeout(d),typeof A=="function"&&A(),c.value=!1,G(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?i.value===!0&&ue():i.value===!0?Pe(!0):i.value=!0),typeof k=="function"&&G(()=>{k(b)}),typeof u=="function"&&G(()=>{u(b)})}))},()=>{l.focused.value===!0&&d===s&&(clearTimeout(d),l.innerLoading.value=!1,c.value=!1),i.value===!0&&(i.value=!1)})}function kt(){return h(ul,{ref:X,class:S.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&E.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:q.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Re.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:ye,onBeforeShow:at,onBeforeHide:xt,onShow:At},lt)}function xt(t){it(t),se()}function At(){be()}function qt(t){ve(t),_.value!==null&&_.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function pt(t){ve(t),G(()=>{z.value=!1})}function zt(){const t=[h(nl,{class:`col-auto ${l.fieldClass.value}`,...v.value,for:l.targetUid.value,dark:q.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...l.splitAttrs.listeners.value,onFocus:qt,onBlur:pt},{...r,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(h("div",{ref:ge,class:S.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:Ke,onScrollPassive:ye},lt())),h(Jt,{ref:J,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:at,onBeforeHide:It,onHide:Mt,onShow:Ot},()=>h("div",{class:"q-select__dialog"+(q.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function It(t){it(t),J.value!==null&&J.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Mt(t){ue(),l.focused.value===!1&&o("blur",t),fe()}function Ot(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&_.value!==null&&_.value!==t&&_.value.focus(),be()}function se(){F.value!==!0&&(y.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(d!==null&&(clearTimeout(d),d=null),l.innerLoading.value===!0&&(o("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function de(t){l.editable.value===!0&&(p===!0?(l.onControlFocusin(t),F.value=!0,G(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ce(g.value):(E.value!==!0||r["no-option"]!==void 0)&&(i.value=!0))}function ue(){F.value=!1,se()}function fe(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&a.value.length!==0&&K.value(a.value[0])||"",!0,!0)}function Pe(t){let n=-1;if(t===!0){if(a.value.length!==0){const u=U.value(a.value[0]);n=e.options.findIndex(s=>ke(U.value(s),u))}j(n)}re(n)}function _t(t,n){i.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),G(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>n?j():Pe(!0))}))}function nt(){F.value===!1&&X.value!==null&&X.value.updatePosition()}function at(t){t!==void 0&&ve(t),o("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function it(t){t!==void 0&&ve(t),o("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function ot(){p=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||E.value===!1:!0),W=M.platform.is.ios===!0&&p===!0&&e.useInput===!0?"fade":e.transitionShow}return Ut(ot),Wt(nt),ot(),St(()=>{w!==null&&clearTimeout(w),C!==null&&clearTimeout(C)}),Object.assign(b,{showPopup:de,hidePopup:ue,removeAtIndex:He,add:Xe,toggleOption:le,getOptionIndex:()=>y.value,setOptionIndex:re,moveOptionSelection:_e,filter:ce,updateMenuPosition:nt,updateInputValue:Ce,isOptionSelected:De,getEmittingOptionValue:We,isOptionDisabled:(...t)=>oe.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>K.value.apply(null,t)}),Object.assign(l,{innerValue:a,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:Ae,targetRef:_,hasValue:B,showPopup:de,floatingLabel:f(()=>e.hideSelected!==!0&&B.value===!0||typeof g.value=="number"||g.value.length!==0||rt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(F.value===!0||E.value!==!0||r["no-option"]!==void 0))return p===!0?zt():kt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{fe(),se()})},onClick(t){if(Ke(t),p!==!0&&i.value===!0){se(),_.value!==null&&_.value.focus();return}de(t)}},getControl:t=>{const n=Vt(),u=t===!0||F.value!==!0||p!==!0;if(e.useInput===!0)n.push(Ct(t,u));else if(l.editable.value===!0){const A=u===!0?Ie.value:void 0;n.push(h("input",{ref:u===!0?_:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:N.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...A,onKeydown:et,onKeyup:Ge,onKeypress:Ze})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(h("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Je}))}if(Z.value!==void 0&&e.disable!==!0&&Oe.value.length!==0){const A=Oe.value.map(k=>h("option",{value:k,selected:!0}));n.push(h("select",{class:"hidden",name:Z.value,multiple:e.multiple},A))}const s=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return h("div",{class:"q-field__native row items-center",...s,...l.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[h(Be,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:we.value})]:null}),vt(l)}});export{yl as Q,Ee as r};

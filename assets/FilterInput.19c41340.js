import{i as p,q as t,v as n,Y as r,f as u,a4 as l,a0 as o,l as c,b as m,be as d}from"./index.be968432.js";const x={__name:"FilterInput",setup(i){const e=p("searchText");return(_,a)=>(t(),n(d,{modelValue:o(e),"onUpdate:modelValue":a[1]||(a[1]=s=>m(e)?e.value=s:null),class:"Input",style:{width:"100%"},label:"\u0444\u0438\u043B\u044C\u0442\u0440",borderless:""},{prepend:r(()=>[u(l,{name:"search"})]),append:r(()=>[o(e)!==""?(t(),n(l,{key:0,name:"close",onClick:a[0]||(a[0]=s=>e.value=""),class:"cursor-pointer"})):c("",!0)]),_:1},8,["modelValue"]))}};export{x as _};
import{d as I,_ as N,a as P,q as D}from"./C_u4EVgb.js";import{d as K,q as S,y as T,z as c,A as U,B as V,C as z,D as t,c as M,g as r,w as h,e,t as a,E as j,f as y,s as F,l as G,K as k,i as v,G as H}from"./B7Fjp08m.js";import{_ as J}from"./p5syXUm9.js";import{_ as O}from"./Bpaf0lLg.js";import{u as Q}from"./Dfn2dZ-d.js";import{_ as W}from"./DlAUqK2U.js";const X={key:0},Y={class:"text-sm font-extralight"},Z={class:"writing mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"},tt={class:"info-section mt-1 flex flex-col gap-2 sm:flex-row sm:gap-4"},et=K({__name:"[...slug]",async setup(ot){let n,u;const s=S(),{locale:_,t:m,localeProperties:$}=T(),C=c(()=>Array.isArray(s.params.slug)?s.params.slug:[s.params.slug]),p=c(()=>F(G(_.value,"articles",...C.value))),A=c(()=>`articles_${_.value}`),{data:o}=([n,u]=U(async()=>Q(p.value,async()=>await D(A.value).path(p.value).first(),"$q8yekERBLR")),n=await n,u(),n);if(!o.value)throw V({statusCode:404,statusMessage:"Page not found"});const{copy:d}=z();function B(){d(`${window.location.origin}${s.fullPath}`),k.success(m("global.article_link_copied"))}return I({meta_k:{usingInput:!0,handler:()=>{d(`${window.location.origin}${s.fullPath}`),k.success(m("global.article_link_copied"))}}}),(i,l)=>{var g,x,f,w;const L=N,b=H,R=J,q=O,E=P;return t(o)?(v(),M("div",X,[r(L,{page:t(o),"is-writing":t(s).path.includes("/articles/")},null,8,["page","is-writing"]),r(R,{to:"/writing",class:"mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted hover:text-primary transition-colors duration-200 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"},{default:h(()=>[r(b,{name:"lucide:arrow-left",class:"size-4"}),e("span",Y,a(i.$t("navigation.writing")),1)]),_:1}),e("article",Z,[e("h1",null,a((g=t(o))==null?void 0:g.title),1),e("div",tt,[e("p",null,a((x=t(o))==null?void 0:x.date),1),l[0]||(l[0]=e("p",{class:"hidden sm:block"}," | ",-1)),e("p",null,a((f=t(o))==null?void 0:f.readingTime)+" "+a(i.$t("writing.readingTime")),1),l[1]||(l[1]=e("p",{class:"hidden sm:block"}," | ",-1)),r(q,{text:i.$t("writing.copy_link"),shortcuts:["⌘","K"]},{default:h(()=>[e("p",{class:"flex cursor-pointer select-none items-center gap-1 transition-colors duration-200 hover:text-primary",onClick:B},a(i.$t("writing.share")),1)]),_:1},8,["text"])]),t(o)?(v(),j(E,{key:0,dir:((w=t($))==null?void 0:w.dir)??"ltr",value:t(o)},null,8,["dir","value"])):y("",!0)])])):y("",!0)}}}),ct=W(et,[["__scopeId","data-v-058df20d"]]);export{ct as default};

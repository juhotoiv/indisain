import{d as c,c as a,i as n,g as e,t,F as r,as as d}from"./BzzvaWc5.js";const p={class:"flex flex-col gap-3"},_={class:"mb-4 text-white-shadow font-newsreader italic text-2xl"},x={class:"flex flex-col gap-4"},m={class:"font-semibold"},f={class:"flex gap-1"},u=c({__name:"Experiences",props:{experiences:{type:Object,required:!0}},setup(o){return(i,l)=>(n(),a("div",p,[e("h3",_,t(i.$t("global.experiences")),1),e("div",x,[(n(!0),a(r,null,d(o.experiences,s=>(n(),a("div",{key:s.title},[e("h4",m,t(s.title),1),e("div",f,[e("p",null,t(s.date),1),l[0]||(l[0]=e("span",{class:"mx-1"}," / ",-1)),e("p",null,t(s.company),1)])]))),128))])]))}}),h=Object.assign(u,{__name:"Experiences"});export{h as default};

"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),o=e.defineComponent({name:"Bar",__name:"Bar",props:{title:{}},setup(t){const r=t,n=e.ref("hello world!");return(l,a)=>(e.openBlock(),e.createElementBlock("div",null,[e.createTextVNode(e.toDisplayString(n.value)+" ",1),e.createElementVNode("div",null,e.toDisplayString(r.title),1)]))}});exports.Bar=o;

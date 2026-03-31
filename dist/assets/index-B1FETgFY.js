import{r as p,a as Os,R as ue,L as S,N as we,u as an,b as Qt,c as Ls,d as Zt,e as R,B as Ms}from"./vendor-BEWf7q9E.js";import{_ as Gt,C as Vt,r as dt,S as Ce,F as xt,g as z,a as er,b as Ds,c as on,d as Us,L as Bs,e as ln,i as Fs,f as zs,h as Ws,E as tr,j as J,k as Hs,l as cn,m as F,n as qs,q as Ge,o as Gs,p as Vs,s as $s,t as Ks,u as Ue,v as Be,w as Xs,x as Ys,y as Js,z as me,A as U,B as bt,D as Qs,G as Pe,H as _t,I as K,J as Re,K as X,M as rr,N as Zs}from"./firebase-CTHkSIQd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var dn={exports:{}},jt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ei=p,ti=Symbol.for("react.element"),ri=Symbol.for("react.fragment"),ni=Object.prototype.hasOwnProperty,si=ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ii={key:!0,ref:!0,__self:!0,__source:!0};function un(t,e,n){var s,i={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)ni.call(e,s)&&!ii.hasOwnProperty(s)&&(i[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:ti,type:t,key:a,ref:o,props:i,_owner:si.current}}jt.Fragment=ri;jt.jsx=un;jt.jsxs=un;dn.exports=jt;var r=dn.exports,$t={},Tr=Os;$t.createRoot=Tr.createRoot,$t.hydrateRoot=Tr.hydrateRoot;var hn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Er=ue.createContext&&ue.createContext(hn),ai=["attr","size","title"];function oi(t,e){if(t==null)return{};var n,s,i=li(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function li(t,e){if(t==null)return{};var n={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(e.indexOf(s)!==-1)continue;n[s]=t[s]}return n}function ut(){return ut=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)({}).hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ut.apply(null,arguments)}function Cr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function ht(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cr(Object(n),!0).forEach(function(s){ci(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cr(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function ci(t,e,n){return(e=di(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function di(t){var e=ui(t,"string");return typeof e=="symbol"?e:e+""}function ui(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function mn(t){return t&&t.map((e,n)=>ue.createElement(e.tag,ht({key:n},e.attr),mn(e.child)))}function _(t){return e=>ue.createElement(hi,ut({attr:ht({},t.attr)},e),mn(t.child))}function hi(t){var e=n=>{var{attr:s,size:i,title:a}=t,o=oi(t,ai),c=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ue.createElement("svg",ut({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,o,{className:l,style:ht(ht({color:t.color||n.color},n.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&ue.createElement("title",null,a),t.children)};return Er!==void 0?ue.createElement(Er.Consumer,null,n=>e(n)):e(hn)}function mi(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]},{tag:"line",attr:{x1:"11",y1:"8",x2:"11",y2:"14"},child:[]},{tag:"line",attr:{x1:"8",y1:"11",x2:"14",y2:"11"},child:[]}]})(t)}function pi(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(t)}function Ve(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(t)}function nr(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function sr(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function fi(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(t)}function pn(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"3",width:"15",height:"13"},child:[]},{tag:"polygon",attr:{points:"16 8 20 8 23 11 23 16 16 16 16 8"},child:[]},{tag:"circle",attr:{cx:"5.5",cy:"18.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"18.5",cy:"18.5",r:"2.5"},child:[]}]})(t)}function gi(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(t)}function yi(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(t)}function ir(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(t)}function vi(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(t)}function fn(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(t)}function gn(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(t)}function yn(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(t)}function xi(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(t)}function wt(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(t)}function se(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(t)}function vn(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"5 9 2 12 5 15"},child:[]},{tag:"polyline",attr:{points:"9 5 12 2 15 5"},child:[]},{tag:"polyline",attr:{points:"15 19 12 22 9 19"},child:[]},{tag:"polyline",attr:{points:"19 9 22 12 19 15"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"22"},child:[]}]})(t)}function bi(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(t)}function ar(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(t)}function $e(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(t)}function _i(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(t)}function ji(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function ge(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(t)}function or(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(t)}function lr(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(t)}function wi(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(t)}function xn(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(t)}function bn(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function ki(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(t)}function Si(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(t)}function Ni(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(t)}function Ii(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(t)}function Ti(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(t)}function Ei(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(t)}function _n(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(t)}function jn(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(t)}function wn(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(t)}function kn(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(t)}function Ci(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(t)}function Pi(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(t)}function re(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(t)}function Sn(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(t)}function Ri(t){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="firebasestorage.googleapis.com",In="storageBucket",Ai=2*60*1e3,Oi=10*60*1e3,Li=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C extends xt{constructor(e,n,s=0){super(Mt(e),`Firebase Storage: ${n} (${Mt(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,C.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mt(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var I;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(I||(I={}));function Mt(t){return"storage/"+t}function cr(){const t="An unknown error occurred, please check the error payload for server response.";return new C(I.UNKNOWN,t)}function Mi(t){return new C(I.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Di(t){return new C(I.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ui(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new C(I.UNAUTHENTICATED,t)}function Bi(){return new C(I.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Fi(t){return new C(I.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Tn(){return new C(I.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function En(){return new C(I.CANCELED,"User canceled the upload/download.")}function zi(t){return new C(I.INVALID_URL,"Invalid URL '"+t+"'.")}function Wi(t){return new C(I.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hi(){return new C(I.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+In+"' property when initializing the app?")}function Cn(){return new C(I.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qi(){return new C(I.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Gi(){return new C(I.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Vi(t){return new C(I.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Kt(t){return new C(I.INVALID_ARGUMENT,t)}function Pn(){return new C(I.APP_DELETED,"The Firebase app was deleted.")}function $i(t){return new C(I.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Fe(t,e){return new C(I.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function De(t){throw new C(I.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=B.makeFromUrl(e,n)}catch{return new B(e,"")}if(s.path==="")return s;throw Wi(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function a(f){f.path.charAt(f.path.length-1)==="/"&&(f.path_=f.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function d(f){f.path_=decodeURIComponent(f.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${i}/o${g}`,"i"),x={bucket:1,path:3},N=n===Nn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,j="([^?#]*)",y=new RegExp(`^https?://${N}/${i}/${j}`,"i"),k=[{regex:c,indices:l,postModify:a},{regex:m,indices:x,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let f=0;f<k.length;f++){const E=k[f],P=E.regex.exec(e);if(P){const H=P[E.indices.bucket];let W=P[E.indices.path];W||(W=""),s=new B(H,W),E.postModify(s);break}}if(s==null)throw zi(e);return s}}class Ki{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t,e,n){let s=1,i=null,a=null,o=!1,c=0;function l(){return c===2}let d=!1;function u(...j){d||(d=!0,e.apply(null,j))}function h(j){i=setTimeout(()=>{i=null,t(m,l())},j)}function g(){a&&clearTimeout(a)}function m(j,...y){if(d){g();return}if(j){g(),u.call(null,j,...y);return}if(l()||o){g(),u.call(null,j,...y);return}s<64&&(s*=2);let k;c===1?(c=2,k=0):k=(s+Math.random())*1e3,h(k)}let x=!1;function N(j){x||(x=!0,g(),!d&&(i!==null?(j||(c=2),clearTimeout(i),h(0)):j||(c=1)))}return h(0),a=setTimeout(()=>{o=!0,N(!0)},n),N}function Yi(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return t!==void 0}function Qi(t){return typeof t=="function"}function Zi(t){return typeof t=="object"&&!Array.isArray(t)}function kt(t){return typeof t=="string"||t instanceof String}function Pr(t){return dr()&&t instanceof Blob}function dr(){return typeof Blob<"u"}function Rr(t,e,n,s){if(s<e)throw Kt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Kt(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Rn(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var fe;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fe||(fe={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,a=e.indexOf(t)!==-1;return n||i||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,s,i,a,o,c,l,d,u,h,g=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=a,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=u,this.connectionFactory_=h,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,x)=>{this.resolve_=m,this.reject_=x,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new nt(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&a.addUploadProgressListener(o),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(o),this.pendingConnection_=null;const c=a.getErrorCode()===fe.NO_ERROR,l=a.getStatus();if(!c||An(l,this.additionalRetryCodes_)&&this.retry){const u=a.getErrorCode()===fe.ABORT;s(!1,new nt(!1,null,u));return}const d=this.successCodes_.indexOf(l)!==-1;s(!0,new nt(d,a))})},n=(s,i)=>{const a=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Ji(l)?a(l):a()}catch(l){o(l)}else if(c!==null){const l=cr();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Pn():En();o(l)}else{const l=Tn();o(l)}};this.canceled_?n(!1,new nt(!1,null,!0)):this.backoffId_=Xi(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Yi(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nt{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ta(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ra(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function na(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sa(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ia(t,e,n,s,i,a,o=!0){const c=Rn(t.urlParams),l=t.url+c,d=Object.assign({},t.headers);return na(d,e),ta(d,n),ra(d,a),sa(d,s),new ea(l,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function oa(...t){const e=aa();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(dr())return new Blob(t);throw new C(I.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function la(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){if(typeof atob>"u")throw Vi("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dt{constructor(e,n){this.data=e,this.contentType=n||null}}function da(t,e){switch(t){case G.RAW:return new Dt(On(e));case G.BASE64:case G.BASE64URL:return new Dt(Ln(t,e));case G.DATA_URL:return new Dt(ha(e),ma(e))}throw cr()}function On(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const a=s,o=t.charCodeAt(++n);s=65536|(a&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function ua(t){let e;try{e=decodeURIComponent(t)}catch{throw Fe(G.DATA_URL,"Malformed data URL.")}return On(e)}function Ln(t,e){switch(t){case G.BASE64:{const i=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(i||a)throw Fe(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case G.BASE64URL:{const i=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(i||a)throw Fe(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ca(e)}catch(i){throw i.message.includes("polyfill")?i:Fe(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Mn{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Fe(G.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=pa(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function ha(t){const e=new Mn(t);return e.base64?Ln(G.BASE64,e.rest):ua(e.rest)}function ma(t){return new Mn(t).contentType}function pa(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){let s=0,i="";Pr(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Pr(this.data_)){const s=this.data_,i=la(s,e,n);return i===null?null:new ae(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new ae(s,!0)}}static getBlob(...e){if(dr()){const n=e.map(s=>s instanceof ae?s.data_:s);return new ae(oa.apply(null,n))}else{const n=e.map(o=>kt(o)?da(G.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let a=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)i[a++]=o[c]}),new ae(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){let e;try{e=JSON.parse(t)}catch{return null}return Zi(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ga(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Un(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t,e){return e}class L{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||ya}}let st=null;function va(t){return!kt(t)||t.length<2?t:Un(t)}function Bn(){if(st)return st;const t=[];t.push(new L("bucket")),t.push(new L("generation")),t.push(new L("metageneration")),t.push(new L("name","fullPath",!0));function e(a,o){return va(o)}const n=new L("name");n.xform=e,t.push(n);function s(a,o){return o!==void 0?Number(o):o}const i=new L("size");return i.xform=s,t.push(i),t.push(new L("timeCreated")),t.push(new L("updated")),t.push(new L("md5Hash",null,!0)),t.push(new L("cacheControl",null,!0)),t.push(new L("contentDisposition",null,!0)),t.push(new L("contentEncoding",null,!0)),t.push(new L("contentLanguage",null,!0)),t.push(new L("contentType",null,!0)),t.push(new L("metadata","customMetadata",!0)),st=t,st}function xa(t,e){function n(){const s=t.bucket,i=t.fullPath,a=new B(s,i);return e._makeStorageReference(a)}Object.defineProperty(t,"ref",{get:n})}function ba(t,e,n){const s={};s.type="file";const i=n.length;for(let a=0;a<i;a++){const o=n[a];s[o.local]=o.xform(s,e[o.server])}return xa(s,t),s}function Fn(t,e,n){const s=Dn(e);return s===null?null:ba(t,s,n)}function _a(t,e,n,s){const i=Dn(e);if(i===null||!kt(i.downloadTokens))return null;const a=i.downloadTokens;if(a.length===0)return null;const o=encodeURIComponent;return a.split(",").map(d=>{const u=t.bucket,h=t.fullPath,g="/b/"+o(u)+"/o/"+o(h),m=Ke(g,n,s),x=Rn({alt:"media",token:d});return m+x})[0]}function zn(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const a=e[i];a.writable&&(n[a.server]=t[a.local])}return JSON.stringify(n)}class Ae{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t){if(!t)throw cr()}function ur(t,e){function n(s,i){const a=Fn(t,i,e);return te(a!==null),a}return n}function ja(t,e){function n(s,i){const a=Fn(t,i,e);return te(a!==null),_a(a,i,t.host,t._protocol)}return n}function Xe(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Bi():i=Ui():n.getStatus()===402?i=Di(t.bucket):n.getStatus()===403?i=Fi(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function Wn(t){const e=Xe(t);function n(s,i){let a=e(s,i);return s.getStatus()===404&&(a=Mi(t.path)),a.serverResponse=i.serverResponse,a}return n}function wa(t,e,n){const s=e.fullServerUrl(),i=Ke(s,t.host,t._protocol),a="GET",o=t.maxOperationRetryTime,c=new Ae(i,a,ur(t,n),o);return c.errorHandler=Wn(e),c}function ka(t,e,n){const s=e.fullServerUrl(),i=Ke(s,t.host,t._protocol),a="GET",o=t.maxOperationRetryTime,c=new Ae(i,a,ja(t,n),o);return c.errorHandler=Wn(e),c}function Sa(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Hn(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Sa(null,e)),s}function Na(t,e,n,s,i){const a=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let k="";for(let f=0;f<2;f++)k=k+Math.random().toString().slice(2);return k}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const d=Hn(e,s,i),u=zn(d,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,g=`\r
--`+l+"--",m=ae.getBlob(h,s,g);if(m===null)throw Cn();const x={name:d.fullPath},N=Ke(a,t.host,t._protocol),j="POST",y=t.maxUploadRetryTime,v=new Ae(N,j,ur(t,n),y);return v.urlParams=x,v.headers=o,v.body=m.uploadData(),v.errorHandler=Xe(e),v}class mt{constructor(e,n,s,i){this.current=e,this.total=n,this.finalized=!!s,this.metadata=i||null}}function hr(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{te(!1)}return te(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Ia(t,e,n,s,i){const a=e.bucketOnlyServerUrl(),o=Hn(e,s,i),c={name:o.fullPath},l=Ke(a,t.host,t._protocol),d="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=zn(o,n),g=t.maxUploadRetryTime;function m(N){hr(N);let j;try{j=N.getResponseHeader("X-Goog-Upload-URL")}catch{te(!1)}return te(kt(j)),j}const x=new Ae(l,d,m,g);return x.urlParams=c,x.headers=u,x.body=h,x.errorHandler=Xe(e),x}function Ta(t,e,n,s){const i={"X-Goog-Upload-Command":"query"};function a(d){const u=hr(d,["active","final"]);let h=null;try{h=d.getResponseHeader("X-Goog-Upload-Size-Received")}catch{te(!1)}h||te(!1);const g=Number(h);return te(!isNaN(g)),new mt(g,s.size(),u==="final")}const o="POST",c=t.maxUploadRetryTime,l=new Ae(n,o,a,c);return l.headers=i,l.errorHandler=Xe(e),l}const Ar=256*1024;function Ea(t,e,n,s,i,a,o,c){const l=new mt(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw qi();const d=l.total-l.current;let u=d;i>0&&(u=Math.min(u,i));const h=l.current,g=h+u;let m="";u===0?m="finalize":d===u?m="upload, finalize":m="upload";const x={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${l.current}`},N=s.slice(h,g);if(N===null)throw Cn();function j(f,E){const P=hr(f,["active","final"]),H=l.current+u,W=s.size();let M;return P==="final"?M=ur(e,a)(f,E):M=null,new mt(H,W,P==="final",M)}const y="POST",v=e.maxUploadRetryTime,k=new Ae(n,y,j,v);return k.headers=x,k.body=N.uploadData(),k.progressCallback=c||null,k.errorHandler=Xe(t),k}const D={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ut(t){switch(t){case"running":case"pausing":case"canceling":return D.RUNNING;case"paused":return D.PAUSED;case"success":return D.SUCCESS;case"canceled":return D.CANCELED;case"error":return D.ERROR;default:return D.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,s){if(Qi(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const a=e;this.next=a.next,this.error=a.error,this.complete=a.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Pa{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fe.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fe.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fe.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw De("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw De("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw De("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw De("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw De("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ra extends Pa{initXhr(){this.xhr_.responseType="text"}}function ke(){return new Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Bn(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(I.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const a=this.isExponentialBackoffExpired();if(An(i.status,[]))if(a)i=Tn();else{this.sleepTime=Math.max(this.sleepTime*2,Li),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(I.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,a)=>{this._resolve=i,this._reject=a,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=Ia(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,ke,e,n);this._request=i,i.getPromise().then(a=>{this._request=void 0,this._uploadUrl=a,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const i=Ta(this._ref.storage,this._ref._location,e,this._blob),a=this._ref.storage._makeRequest(i,ke,n,s);this._request=a,a.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ar*this._chunkMultiplier,n=new mt(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,a)=>{let o;try{o=Ea(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const c=this._ref.storage._makeRequest(o,ke,i,a,!1);this._request=c,c.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ar*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=wa(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,ke,e,n);this._request=i,i.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=Na(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,ke,e,n);this._request=i,i.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=En(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ut(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,i){const a=new Ca(n||void 0,s||void 0,i||void 0);return this._addObserver(a),()=>{this._removeObserver(a)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ut(this._state)){case D.SUCCESS:je(this._resolve.bind(null,this.snapshot))();break;case D.CANCELED:case D.ERROR:const n=this._reject;je(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ut(this._state)){case D.RUNNING:case D.PAUSED:e.next&&je(e.next.bind(e,this.snapshot))();break;case D.SUCCESS:e.complete&&je(e.complete.bind(e))();break;case D.CANCELED:case D.ERROR:e.error&&je(e.error.bind(e,this._error))();break;default:e.error&&je(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this._service=e,n instanceof B?this._location=n:this._location=B.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ye(e,n)}get root(){const e=new B(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Un(this._location.path)}get storage(){return this._service}get parent(){const e=fa(this._location.path);if(e===null)return null;const n=new B(this._location.bucket,e);return new ye(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $i(e)}}function Oa(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Aa(t,new ae(e),n)}function La(t){t._throwIfRoot("getDownloadURL");const e=ka(t.storage,t._location,Bn());return t.storage.makeRequestWithTokens(e,ke).then(n=>{if(n===null)throw Gi();return n})}function Ma(t,e){const n=ga(t._location.path,e),s=new B(t._location.bucket,n);return new ye(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){return/^[A-Za-z]+:\/\//.test(t)}function Ua(t,e){return new ye(t,e)}function qn(t,e){if(t instanceof mr){const n=t;if(n._bucket==null)throw Hi();const s=new ye(n,n._bucket);return e!=null?qn(s,e):s}else return e!==void 0?Ma(t,e):t}function Ba(t,e){if(e&&Da(e)){if(t instanceof mr)return Ua(t,e);throw Kt("To use ref(service, url), the first argument must be a Storage instance.")}else return qn(t,e)}function Or(t,e){const n=e==null?void 0:e[In];return n==null?null:B.makeFromBucketSpec(n,t)}function Fa(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Us(i,t.app.options.projectId))}class mr{constructor(e,n,s,i,a){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=a,this._bucket=null,this._host=Nn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ai,this._maxUploadRetryTime=Oi,this._requests=new Set,i!=null?this._bucket=B.makeFromBucketSpec(i,this._host):this._bucket=Or(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=B.makeFromBucketSpec(this._url,e):this._bucket=Or(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rr("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rr("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ye(this,e)}_makeRequest(e,n,s,i,a=!0){if(this._deleted)return new Ki(Pn());{const o=ia(e,this._appId,s,i,n,this._firebaseVersion,a);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Lr="@firebase/storage",Mr="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="storage";function za(t,e,n){return t=z(t),Oa(t,e,n)}function Wa(t){return t=z(t),La(t)}function Ha(t,e){return t=z(t),Ba(t,e)}function qa(t=on(),e){t=z(t);const s=er(t,Gn).getImmediate({identifier:e}),i=Ds("storage");return i&&Ga(s,...i),s}function Ga(t,e,n,s={}){Fa(t,e,n,s)}function Va(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new mr(n,s,i,e,Ce)}function $a(){Gt(new Vt(Gn,Va,"PUBLIC").setMultipleInstances(!0)),dt(Lr,Mr,""),dt(Lr,Mr,"esm2017")}$a();function pr(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Vn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ka=Vn,$n=new tr("auth","Firebase",Vn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new Bs("@firebase/auth");function Xa(t,...e){pt.logLevel<=cn.WARN&&pt.warn(`Auth (${Ce}): ${t}`,...e)}function at(t,...e){pt.logLevel<=cn.ERROR&&pt.error(`Auth (${Ce}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,...e){throw fr(t,...e)}function V(t,...e){return fr(t,...e)}function Kn(t,e,n){const s=Object.assign(Object.assign({},Ka()),{[e]:n});return new tr("auth","Firebase",s).create(e,{appName:t.name})}function he(t){return Kn(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fr(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return $n.create(t,...e)}function b(t,e,...n){if(!t)throw fr(e,...n)}function Q(t){const e="INTERNAL ASSERTION FAILED: "+t;throw at(e),new Error(e)}function ne(t,e){t||Q(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ya(){return Dr()==="http:"||Dr()==="https:"}function Dr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ya()||Ws()||"connection"in navigator)?navigator.onLine:!0}function Qa(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.shortDelay=e,this.longDelay=n,ne(n>e,"Short delay should be less than long delay!"),this.isMobile=Fs()||zs()}get(){return Ja()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){ne(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Q("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Q("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Q("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new Ye(3e4,6e4);function xe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pe(t,e,n,s,i={}){return Yn(t,i,async()=>{let a={},o={};s&&(e==="GET"?o=s:a={body:JSON.stringify(s)});const c=Ge(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:l},a);return Xs()||(d.referrerPolicy="no-referrer"),Xn.fetch()(Jn(t,t.config.apiHost,n,c),d)})}async function Yn(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Za),e);try{const i=new ro(t),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw it(t,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const c=a.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw it(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw it(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw it(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Kn(t,u,d);q(t,u)}}catch(i){if(i instanceof xt)throw i;q(t,"network-request-failed",{message:String(i)})}}async function St(t,e,n,s,i={}){const a=await pe(t,e,n,s,i);return"mfaPendingCredential"in a&&q(t,"multi-factor-auth-required",{_serverResponse:a}),a}function Jn(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?gr(t.config,i):`${t.config.apiScheme}://${i}`}function to(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ro{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(V(this.auth,"network-request-failed")),eo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function it(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=V(t,e,s);return i.customData._tokenResponse=n,i}function Ur(t){return t!==void 0&&t.enterprise!==void 0}class no{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return to(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function so(t,e){return pe(t,"GET","/v2/recaptchaConfig",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e){return pe(t,"POST","/v1/accounts:delete",e)}async function Qn(t,e){return pe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ao(t,e=!1){const n=z(t),s=await n.getIdToken(e),i=yr(s);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:s,authTime:ze(Bt(i.auth_time)),issuedAtTime:ze(Bt(i.iat)),expirationTime:ze(Bt(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Bt(t){return Number(t)*1e3}function yr(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return at("JWT malformed, contained fewer than 3 sections"),null;try{const i=qs(n);return i?JSON.parse(i):(at("Failed to decode base64 JWT payload"),null)}catch(i){return at("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Br(t){const e=yr(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof xt&&oo(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function oo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ze(this.lastLoginAt),this.creationTime=ze(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(t){var e;const n=t.auth,s=await t.getIdToken(),i=await We(t,Qn(n,{idToken:s}));b(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const o=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Zn(a.providerUserInfo):[],c=uo(t.providerData,o),l=t.isAnonymous,d=!(t.email&&a.passwordHash)&&!(c!=null&&c.length),u=l?d:!1,h={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Yt(a.createdAt,a.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function co(t){const e=z(t);await ft(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uo(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Zn(t){return t.map(e=>{var{providerId:n}=e,s=pr(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t,e){const n=await Yn(t,{},async()=>{const s=Ge({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,o=Jn(t,i,"/v1/token",`key=${a}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Xn.fetch()(o,{method:"POST",headers:c,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mo(t,e){return pe(t,"POST","/v2/accounts:revokeToken",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Br(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=Br(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:a}=await ho(e,n);this.updateTokensAndExpiration(s,i,Number(a))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:a}=n,o=new Ne;return s&&(b(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),a&&(b(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ne,this.toJSON())}_performRefresh(){return Q("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Z{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,a=pr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Yt(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await We(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ao(this,e)}reload(){return co(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Z(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ft(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(J(this.auth.app))return Promise.reject(he(this.auth));const e=await this.getIdToken();return await We(this,io(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,a,o,c,l,d,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,m=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,j=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:f,isAnonymous:E,providerData:P,stsTokenManager:H}=n;b(k&&H,e,"internal-error");const W=Ne.fromJSON(this.name,H);b(typeof k=="string",e,"internal-error"),ie(h,e.name),ie(g,e.name),b(typeof f=="boolean",e,"internal-error"),b(typeof E=="boolean",e,"internal-error"),ie(m,e.name),ie(x,e.name),ie(N,e.name),ie(j,e.name),ie(y,e.name),ie(v,e.name);const M=new Z({uid:k,auth:e,email:g,emailVerified:f,displayName:h,isAnonymous:E,photoURL:x,phoneNumber:m,tenantId:N,stsTokenManager:W,createdAt:y,lastLoginAt:v});return P&&Array.isArray(P)&&(M.providerData=P.map(Lt=>Object.assign({},Lt))),j&&(M._redirectEventId=j),M}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ne;i.updateFromServerResponse(n);const a=new Z({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ft(a),a}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];b(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Zn(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),c=new Ne;c.updateFromIdToken(s);const l=new Z({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Yt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Map;function ee(t){ne(t instanceof Function,"Expected a class definition");let e=Fr.get(t);return e?(ne(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}es.type="NONE";const zr=es;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,e,n){return`firebase:${t}:${e}:${n}`}class Ie{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:a}=this.auth;this.fullUserKey=ot(this.userKey,i.apiKey,a),this.fullPersistenceKey=ot("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Z._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ie(ee(zr),e,s);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=i[0]||ee(zr);const o=ot(s,e.config.apiKey,e.name);let c=null;for(const d of n)try{const u=await d._get(o);if(u){const h=Z._fromJSON(e,u);d!==a&&(c=h),a=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new Ie(a,e,s):(a=l[0],c&&await a._set(o,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new Ie(a,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ss(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ts(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(as(e))return"Blackberry";if(os(e))return"Webos";if(rs(e))return"Safari";if((e.includes("chrome/")||ns(e))&&!e.includes("edge/"))return"Chrome";if(is(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ts(t=F()){return/firefox\//i.test(t)}function rs(t=F()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ns(t=F()){return/crios\//i.test(t)}function ss(t=F()){return/iemobile/i.test(t)}function is(t=F()){return/android/i.test(t)}function as(t=F()){return/blackberry/i.test(t)}function os(t=F()){return/webos/i.test(t)}function vr(t=F()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function po(t=F()){var e;return vr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fo(){return $s()&&document.documentMode===10}function ls(t=F()){return vr(t)||is(t)||os(t)||as(t)||/windows phone/i.test(t)||ss(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t,e=[]){let n;switch(t){case"Browser":n=Wr(F());break;case"Worker":n=`${Wr(F())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ce}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=a=>new Promise((o,c)=>{try{const l=e(a);o(l)}catch(l){c(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e={}){return pe(t,"GET","/v2/passwordPolicy",xe(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=6;class xo{constructor(e){var n,s,i,a;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vo,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,a,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hr(this),this.idTokenSubscription=new Hr(this),this.beforeStateQueue=new go(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$n,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ee(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ie.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qn(this,{idToken:e}),s=await Z._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(J(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ft(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(J(this.app))return Promise.reject(he(this));const n=e?z(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return J(this.app)?Promise.reject(he(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return J(this.app)?Promise.reject(he(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yo(this),n=new xo(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await mo(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ee(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Ie.create(this,[ee(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(c,this,"internal-error"),c.then(()=>{o||a(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Xa(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Oe(t){return z(t)}class Hr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hs(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _o(t){Nt=t}function ds(t){return Nt.loadJS(t)}function jo(){return Nt.recaptchaEnterpriseScript}function wo(){return Nt.gapiScript}function ko(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const So="recaptcha-enterprise",No="NO_RECAPTCHA";class Io{constructor(e){this.type=So,this.auth=Oe(e)}async verify(e="verify",n=!1){async function s(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,c)=>{so(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new no(l);return a.tenantId==null?a._agentRecaptchaConfig=d:a._tenantRecaptchaConfigs[a.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function i(a,o,c){const l=window.grecaptcha;Ur(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:e}).then(d=>{o(d)}).catch(()=>{o(No)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{s(this.auth).then(c=>{if(!n&&Ur(window.grecaptcha))i(c,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=jo();l.length!==0&&(l+=c),ds(l).then(()=>{i(c,a,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function qr(t,e,n,s=!1){const i=new Io(t);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Gr(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await qr(t,e,n,n==="getOobCode");return s(t,a)}else return s(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qr(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e){const n=er(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(Vs(a,e??{}))return i;q(i,"already-initialized")}return n.initialize({options:e})}function Eo(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ee);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Co(t,e,n){const s=Oe(t);b(s._canInitEmulator,s,"emulator-config-failed"),b(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,a=us(e),{host:o,port:c}=Po(e),l=c===null?"":`:${c}`;s.config.emulator={url:`${a}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ro()}function us(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Po(t){const e=us(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const a=i[1];return{host:a,port:Vr(s.substr(a.length+1))}}else{const[a,o]=s.split(":");return{host:a,port:Vr(o)}}}function Vr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ro(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Q("not implemented")}_getIdTokenResponse(e){return Q("not implemented")}_linkToIdToken(e,n){return Q("not implemented")}_getReauthenticationResolver(e){return Q("not implemented")}}async function Ao(t,e){return pe(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(t,e){return St(t,"POST","/v1/accounts:signInWithPassword",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t,e){return St(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}async function Mo(t,e){return St(t,"POST","/v1/accounts:signInWithEmailLink",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends xr{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new He(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new He(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gr(e,n,"signInWithPassword",Oo);case"emailLink":return Lo(e,{email:this._email,oobCode:this._password});default:q(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gr(e,s,"signUpPassword",Ao);case"emailLink":return Mo(e,{idToken:n,email:this._email,oobCode:this._password});default:q(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(t,e){return St(t,"POST","/v1/accounts:signInWithIdp",xe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="http://localhost";class ve extends xr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):q("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,a=pr(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ve(s,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Te(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Te(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Te(e,n)}buildRequest(){const e={requestUri:Do,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ge(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bo(t){const e=Ue(Be(t)).link,n=e?Ue(Be(e)).deep_link_id:null,s=Ue(Be(t)).deep_link_id;return(s?Ue(Be(s)).link:null)||s||n||e||t}class br{constructor(e){var n,s,i,a,o,c;const l=Ue(Be(e)),d=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Uo((i=l.mode)!==null&&i!==void 0?i:null);b(d&&u&&h,"argument-error"),this.apiKey=d,this.operation=h,this.code=u,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Bo(e);try{return new br(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(){this.providerId=Le.PROVIDER_ID}static credential(e,n){return He._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=br.parseLink(n);return b(s,"argument-error"),He._fromEmailAndCode(e,s.code,s.tenantId)}}Le.PROVIDER_ID="password";Le.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Le.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends hs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends Je{constructor(){super("facebook.com")}static credential(e){return ve._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oe.credential(e.oauthAccessToken)}catch{return null}}}oe.FACEBOOK_SIGN_IN_METHOD="facebook.com";oe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends Je{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ve._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return le.credential(n,s)}catch{return null}}}le.GOOGLE_SIGN_IN_METHOD="google.com";le.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends Je{constructor(){super("github.com")}static credential(e){return ve._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ce.credentialFromTaggedObject(e)}static credentialFromError(e){return ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ce.credential(e.oauthAccessToken)}catch{return null}}}ce.GITHUB_SIGN_IN_METHOD="github.com";ce.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends Je{constructor(){super("twitter.com")}static credential(e,n){return ve._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return de.credential(n,s)}catch{return null}}}de.TWITTER_SIGN_IN_METHOD="twitter.com";de.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const a=await Z._fromIdTokenResponse(e,s,i),o=$r(s);return new Ee({user:a,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=$r(s);return new Ee({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function $r(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends xt{constructor(e,n,s,i){var a;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,gt.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new gt(e,n,s,i)}}function ms(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?gt._fromErrorAndOperation(t,a,e,s):a})}async function Fo(t,e,n=!1){const s=await We(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ee._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t,e,n=!1){const{auth:s}=t;if(J(s.app))return Promise.reject(he(s));const i="reauthenticate";try{const a=await We(t,ms(s,i,e,t),n);b(a.idToken,s,"internal-error");const o=yr(a.idToken);b(o,s,"internal-error");const{sub:c}=o;return b(t.uid===c,s,"user-mismatch"),Ee._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&q(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e,n=!1){if(J(t.app))return Promise.reject(he(t));const s="signIn",i=await ms(t,s,e),a=await Ee._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(a.user),a}async function Wo(t,e){return ps(Oe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t){const e=Oe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function qo(t,e,n){return J(t.app)?Promise.reject(he(t)):Wo(z(t),Le.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ho(t),s})}function Go(t,e,n,s){return z(t).onIdTokenChanged(e,n,s)}function Vo(t,e,n){return z(t).beforeAuthStateChanged(e,n)}function $o(t,e,n,s){return z(t).onAuthStateChanged(e,n,s)}function Ko(t){return z(t).signOut()}const yt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yt,"1"),this.storage.removeItem(yt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=1e3,Yo=10;class gs extends fs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ls(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},a=this.storage.getItem(s);fo()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Yo):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Xo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gs.type="LOCAL";const Jo=gs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends fs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ys.type="SESSION";const vs=ys;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new It(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(async d=>d(n.origin,a)),l=await Qo(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}It.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((c,l)=>{const d=_r("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const g=h;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(u),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(g.data.response);break;default:clearTimeout(u),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return window}function el(t){$().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(){return typeof $().WorkerGlobalScope<"u"&&typeof $().importScripts=="function"}async function tl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rl(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nl(){return xs()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="firebaseLocalStorageDb",sl=1,vt="firebaseLocalStorage",_s="fbase_key";class Qe{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tt(t,e){return t.transaction([vt],e?"readwrite":"readonly").objectStore(vt)}function il(){const t=indexedDB.deleteDatabase(bs);return new Qe(t).toPromise()}function Jt(){const t=indexedDB.open(bs,sl);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(vt,{keyPath:_s})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(vt)?e(s):(s.close(),await il(),e(await Jt()))})})}async function Kr(t,e,n){const s=Tt(t,!0).put({[_s]:e,value:n});return new Qe(s).toPromise()}async function al(t,e){const n=Tt(t,!1).get(e),s=await new Qe(n).toPromise();return s===void 0?null:s.value}function Xr(t,e){const n=Tt(t,!0).delete(e);return new Qe(n).toPromise()}const ol=800,ll=3;class js{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ll)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=It._getInstance(nl()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tl(),!this.activeServiceWorker)return;this.sender=new Zo(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jt();return await Kr(e,yt,"1"),await Xr(e,yt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kr(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>al(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Tt(i,!1).getAll();return new Qe(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ol)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}js.type="LOCAL";const cl=js;new Ye(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t,e){return e?ee(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends xr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Te(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Te(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Te(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ul(t){return ps(t.auth,new jr(t),t.bypassAuthState)}function hl(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),zo(n,new jr(t),t.bypassAuthState)}async function ml(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Fo(n,new jr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n,s,i,a=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:a,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ul;case"linkViaPopup":case"linkViaRedirect":return ml;case"reauthViaPopup":case"reauthViaRedirect":return hl;default:q(this.auth,"internal-error")}}resolve(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Ye(2e3,1e4);class Se extends ws{constructor(e,n,s,i,a){super(e,n,i,a),this.provider=s,this.authWindow=null,this.pollId=null,Se.currentPopupAction&&Se.currentPopupAction.cancel(),Se.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){ne(this.filter.length===1,"Popup operations only handle one event");const e=_r();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(V(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(V(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Se.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(V(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pl.get())};e()}}Se.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="pendingRedirect",lt=new Map;class gl extends ws{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lt.get(this.auth._key());if(!e){try{const s=await yl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lt.set(this.auth._key(),e)}return this.bypassAuthState||lt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yl(t,e){const n=bl(e),s=xl(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function vl(t,e){lt.set(t._key(),e)}function xl(t){return ee(t._redirectPersistence)}function bl(t){return ot(fl,t.config.apiKey,t.name)}async function _l(t,e,n=!1){if(J(t.app))return Promise.reject(he(t));const s=Oe(t),i=dl(s,e),o=await new gl(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=10*60*1e3;class wl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kl(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ks(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(V(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yr(e))}saveEventToCache(e){this.cachedEventUids.add(Yr(e)),this.lastProcessedEventTime=Date.now()}}function Yr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ks({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kl(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ks(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(t,e={}){return pe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Il=/^https?/;async function Tl(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sl(t);for(const n of e)try{if(El(n))return}catch{}q(t,"unauthorized-domain")}function El(t){const e=Xt(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Il.test(n))return!1;if(Nl.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=new Ye(3e4,6e4);function Jr(){const t=$().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Pl(t){return new Promise((e,n)=>{var s,i,a;function o(){Jr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jr(),n(V(t,"network-request-failed"))},timeout:Cl.get()})}if(!((i=(s=$().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=$().gapi)===null||a===void 0)&&a.load)o();else{const c=ko("iframefcb");return $()[c]=()=>{gapi.load?o():n(V(t,"network-request-failed"))},ds(`${wo()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw ct=null,e})}let ct=null;function Rl(t){return ct=ct||Pl(t),ct}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Ye(5e3,15e3),Ol="__/auth/iframe",Ll="emulator/auth/iframe",Ml={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ul(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gr(e,Ll):`https://${t.config.authDomain}/${Ol}`,s={apiKey:e.apiKey,appName:t.name,v:Ce},i=Dl.get(t.config.apiHost);i&&(s.eid=i);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Ge(s).slice(1)}`}async function Bl(t){const e=await Rl(t),n=$().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:Ul(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ml,dontclear:!0},s=>new Promise(async(i,a)=>{await s.restyle({setHideOnLeave:!1});const o=V(t,"network-request-failed"),c=$().setTimeout(()=>{a(o)},Al.get());function l(){$().clearTimeout(c),i(s)}s.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zl=500,Wl=600,Hl="_blank",ql="http://localhost";class Qr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gl(t,e,n,s=zl,i=Wl){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Fl),{width:s.toString(),height:i.toString(),top:a,left:o}),d=F().toLowerCase();n&&(c=ns(d)?Hl:n),ts(d)&&(e=e||ql,l.scrollbars="yes");const u=Object.entries(l).reduce((g,[m,x])=>`${g}${m}=${x},`,"");if(po(d)&&c!=="_self")return Vl(e||"",c),new Qr(null);const h=window.open(e||"",c,u);b(h,t,"popup-blocked");try{h.focus()}catch{}return new Qr(h)}function Vl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="__/auth/handler",Kl="emulator/auth/handler",Xl=encodeURIComponent("fac");async function Zr(t,e,n,s,i,a){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ce,eventId:i};if(e instanceof hs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ks(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Je){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await t._getAppCheckToken(),d=l?`#${Xl}=${encodeURIComponent(l)}`:"";return`${Yl(t)}?${Ge(c).slice(1)}${d}`}function Yl({config:t}){return t.emulator?gr(t,Kl):`https://${t.authDomain}/${$l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="webStorageSupport";class Jl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vs,this._completeRedirectFn=_l,this._overrideRedirectResult=vl}async _openPopup(e,n,s,i){var a;ne((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Zr(e,n,s,Xt(),i);return Gl(e,o,_r())}async _openRedirect(e,n,s,i){await this._originValidation(e);const a=await Zr(e,n,s,Xt(),i);return el(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(ne(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Bl(e),s=new wl(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ft,{type:Ft},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Ft];o!==void 0&&n(!!o),q(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Tl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ls()||rs()||vr()}}const Ql=Jl;var en="@firebase/auth",tn="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tc(t){Gt(new Vt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cs(t)},d=new bo(s,i,a,l);return Eo(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Gt(new Vt("auth-internal",e=>{const n=Oe(e.getProvider("auth").getImmediate());return(s=>new Zl(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dt(en,tn,ec(t)),dt(en,tn,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=5*60,nc=ln("authIdTokenMaxAge")||rc;let rn=null;const sc=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>nc)return;const i=n==null?void 0:n.token;rn!==i&&(rn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ic(t=on()){const e=er(t,"auth");if(e.isInitialized())return e.getImmediate();const n=To(t,{popupRedirectResolver:Ql,persistence:[cl,Jo,vs]}),s=ln("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const o=sc(a.toString());Vo(n,o,()=>o(n.currentUser)),Go(n,c=>o(c))}}const i=Gs("auth");return i&&Co(n,`http://${i}`),n}function ac(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_o({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const a=V("internal-error");a.customData=i,n(a)},s.type="text/javascript",s.charset="UTF-8",ac().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tc("Browser");const oc={apiKey:"AIzaSyAl8PHbEFc-e15zzHTq_hIM6gikxv5meGU",authDomain:"pant-krupa-paperboard.firebaseapp.com",projectId:"pant-krupa-paperboard",storageBucket:"pant-krupa-paperboard.firebasestorage.app",messagingSenderId:"924556723281",appId:"1:924556723281:web:3cff254321c0d486b0a470",measurementId:"G-Z2Y4ZZD09C"},wr=Ys(oc),T=Js(wr),lc=qa(wr),zt=ic(wr),cc=async t=>(await Pe(U(T,"enquiries"),{...t,createdAt:X(),read:!1})).id,Ss=async()=>{const t=bt(U(T,"enquiries"),Qs("createdAt","desc"));return(await me(t)).docs.map(n=>({id:n.id,...n.data()}))},dc=async t=>{await Re(K(T,"enquiries",t))},Et=async()=>(await me(U(T,"categories"))).docs.map(e=>({id:e.id,...e.data()})).sort((e,n)=>(e.name||"").localeCompare(n.name||"")),uc=async t=>(await Pe(U(T,"categories"),{...t,createdAt:X()})).id,hc=async(t,e)=>{await _t(K(T,"categories",t),{...e,updatedAt:X()})},mc=async t=>{await Re(K(T,"categories",t))},kr=async()=>(await me(U(T,"gallery"))).docs.map(e=>({id:e.id,...e.data()})).sort((e,n)=>{var s,i;return(((s=n.createdAt)==null?void 0:s.seconds)||0)-(((i=e.createdAt)==null?void 0:i.seconds)||0)}),pc=async t=>(await Pe(U(T,"gallery"),{...t,createdAt:X()})).id,fc=async t=>{await Re(K(T,"gallery",t))},Ns=async()=>(await me(U(T,"dealers"))).docs.map(e=>({id:e.id,...e.data()})).sort((e,n)=>(e.name||"").localeCompare(n.name||"")),gc=async t=>(await Pe(U(T,"dealers"),{...t,createdAt:X()})).id,yc=async(t,e)=>{await _t(K(T,"dealers",t),{...e,updatedAt:X()})},vc=async t=>{await Re(K(T,"dealers",t))};function xc(){const[t,e]=p.useState(!1),[n,s]=p.useState(!1),[i,a]=p.useState([]),[o,c]=p.useState(!1),l=p.useRef(null);p.useEffect(()=>{const u=()=>e(window.scrollY>50);return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),p.useEffect(()=>{Et().then(a).catch(()=>{})},[]),p.useEffect(()=>{const u=h=>{l.current&&!l.current.contains(h.target)&&c(!1)};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[]);const d=[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/industries",label:"Industries"},{to:"/blog",label:"Blog"},{to:"/gallery",label:"Gallery"}];return r.jsxs("nav",{className:`navbar-custom ${t?"scrolled":""}`,children:[r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"d-flex align-items-center justify-content-between py-2",children:[r.jsxs(S,{to:"/",className:"navbar-brand-custom",children:[r.jsx("div",{className:"brand-icon",children:r.jsx(se,{})}),r.jsxs("div",{children:[r.jsx("div",{className:"brand-text-main",children:"Shri Pant Krupa"}),r.jsx("div",{className:"brand-text-sub",children:"Paper Board"})]})]}),r.jsxs("div",{className:"d-none d-lg-flex align-items-center gap-0",children:[d.slice(0,2).map(u=>r.jsx(we,{to:u.to,end:u.to==="/",className:({isActive:h})=>`nav-link-custom ${h?"active":""}`,children:u.label},u.to)),r.jsxs("div",{ref:l,style:{position:"relative"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[r.jsxs(we,{to:"/products",className:({isActive:u})=>`nav-link-custom ${u?"active":""}`,style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:["Products ",r.jsx(_n,{size:13,style:{transition:"transform 0.2s",transform:o?"rotate(180deg)":"rotate(0deg)"}})]}),o&&r.jsxs("div",{style:{position:"absolute",top:"100%",left:0,background:"#fff",borderRadius:8,boxShadow:"0 8px 32px rgba(26,58,46,0.15)",border:"1px solid var(--border)",minWidth:200,zIndex:1e3,padding:"0.5rem 0",animation:"fadeInDown 0.15s ease"},children:[r.jsx(S,{to:"/products",onClick:()=>c(!1),style:{display:"block",padding:"0.6rem 1.25rem",fontSize:"0.85rem",color:"var(--text-dark)",fontWeight:600,borderBottom:"1px solid var(--border)",marginBottom:"0.25rem"},onMouseEnter:u=>u.currentTarget.style.background="var(--cream)",onMouseLeave:u=>u.currentTarget.style.background="transparent",children:"All Products"}),i.map(u=>r.jsx(S,{to:`/products?category=${encodeURIComponent(u.name)}`,onClick:()=>c(!1),style:{display:"block",padding:"0.55rem 1.25rem",fontSize:"0.83rem",color:"var(--text-mid)"},onMouseEnter:h=>{h.currentTarget.style.background="var(--cream)",h.currentTarget.style.color="var(--primary)"},onMouseLeave:h=>{h.currentTarget.style.background="transparent",h.currentTarget.style.color="var(--text-mid)"},children:u.name},u.id))]})]}),d.slice(2).map(u=>r.jsx(we,{to:u.to,className:({isActive:h})=>`nav-link-custom ${h?"active":""}`,children:u.label},u.to)),r.jsx(we,{to:"/contact",className:"nav-link-custom nav-cta",children:"Contact Us"})]}),r.jsx("button",{className:"d-lg-none border-0 bg-transparent p-2",onClick:()=>s(!n),style:{fontSize:"1.4rem",color:"var(--primary)"},children:n?r.jsx(Ve,{}):r.jsx(bi,{})})]}),n&&r.jsxs("div",{className:"d-lg-none pb-3",style:{borderTop:"1px solid var(--border)"},children:[[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/products",label:"Products"},{to:"/industries",label:"Industries"},{to:"/blog",label:"Blog"},{to:"/gallery",label:"Gallery"},{to:"/contact",label:"Contact Us"}].map(u=>r.jsx(we,{to:u.to,end:u.to==="/",className:({isActive:h})=>`d-block py-2 px-3 ${h?"text-primary fw-semibold":""}`,style:{fontFamily:"var(--ff-body)",fontSize:"0.9rem",color:"var(--text-dark)"},onClick:()=>s(!1),children:u.label},u.to)),i.length>0&&r.jsx("div",{style:{paddingLeft:"1.5rem",borderTop:"1px solid var(--border)",paddingTop:"0.5rem",marginTop:"0.25rem"},children:i.map(u=>r.jsxs(S,{to:`/products?category=${encodeURIComponent(u.name)}`,onClick:()=>s(!1),style:{display:"block",padding:"0.4rem 0.75rem",fontSize:"0.82rem",color:"var(--text-mid)"},children:["— ",u.name]},u.id))})]})]}),r.jsx("style",{children:`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}function Ze(t){return _({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function bc(t){return _({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(t)}function Is(t){return _({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"},child:[]}]})(t)}function _c(t){return _({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(t)}function jc(){const t=new Date().getFullYear();return r.jsxs("footer",{className:"footer-custom",children:[r.jsx("div",{className:"container",children:r.jsxs("div",{className:"row g-5",children:[r.jsxs("div",{className:"col-lg-4 col-md-6",children:[r.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[r.jsx("div",{style:{width:36,height:36,background:"var(--accent)",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff"},children:r.jsx(se,{})}),r.jsx("div",{className:"footer-brand",children:"Shri Pant Krupa Paper Board"})]}),r.jsx("div",{className:"footer-tagline",children:"Paper Board Manufacturer & Trader"}),r.jsx("p",{className:"footer-desc",children:"Premium quality paper board products from Kolhapur, Maharashtra. Serving packaging industries, corrugated box manufacturers, and paper converters across India."})]}),r.jsxs("div",{className:"col-lg-2 col-md-6 col-6",children:[r.jsx("div",{className:"footer-heading",children:"Quick Links"}),r.jsx("ul",{className:"footer-links",children:["Home","About","Products","Industries","Blog","Gallery","Contact"].map(e=>r.jsx("li",{children:r.jsxs(S,{to:`/${e==="Home"?"":e.toLowerCase()}`,children:[r.jsx(re,{size:12})," ",e]})},e))})]}),r.jsxs("div",{className:"col-lg-2 col-md-6 col-6",children:[r.jsx("div",{className:"footer-heading",children:"Products"}),r.jsx("ul",{className:"footer-links",children:["Kraft Paper Rolls","Mill Board","Duplex Board","Grey Board","Packing Board"].map(e=>r.jsx("li",{children:r.jsxs(S,{to:"/products",children:[r.jsx(re,{size:12})," ",e]})},e))})]}),r.jsxs("div",{className:"col-lg-4 col-md-6",children:[r.jsx("div",{className:"footer-heading",children:"Contact Info"}),r.jsxs("div",{className:"footer-contact-item",children:[r.jsx(ar,{className:"footer-contact-icon"}),r.jsx("span",{children:"GATE NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202, India"})]}),r.jsxs("div",{className:"footer-contact-item",children:[r.jsx(wt,{className:"footer-contact-icon"}),r.jsx("span",{children:"+91 98765 43210"})]}),r.jsxs("div",{className:"footer-contact-item",children:[r.jsx($e,{className:"footer-contact-icon"}),r.jsx("span",{children:"info@pantkriupapaperboard.com"})]}),r.jsxs("div",{className:"footer-contact-item",children:[r.jsx(Ze,{className:"footer-contact-icon",style:{color:"#25d366"}}),r.jsx("span",{children:"WhatsApp: +91 98765 43210"})]})]})]})}),r.jsx("div",{className:"footer-bottom",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center gap-2",children:[r.jsxs("span",{children:["© ",t," Shri Pant Krupa Paper Board. All rights reserved."," · ",r.jsx(S,{to:"/admin/login",style:{color:"rgba(255,255,255,0.2)",fontSize:"0.75rem",textDecoration:"none",transition:"color 0.2s ease"},onMouseEnter:e=>e.currentTarget.style.color="rgba(200,150,62,0.7)",onMouseLeave:e=>e.currentTarget.style.color="rgba(255,255,255,0.2)",children:"Admin"})]}),r.jsxs("span",{children:["Proprietor: ",r.jsx("strong",{style:{color:"rgba(255,255,255,0.7)"},children:"Omkar Shrikant Patil"})]})]})})})]})}const Ts="917397849730",wc=encodeURIComponent(`Hello,
I am interested in your paper board products.
Please share more details.`);function kc(){return r.jsx("a",{href:`https://wa.me/${Ts}?text=${wc}`,target:"_blank",rel:"noopener noreferrer",className:"whatsapp-float","aria-label":"Chat on WhatsApp",title:"Chat with us on WhatsApp",children:r.jsx(Ze,{})})}function Sc({product:t=""}){const e=encodeURIComponent(`Hello,
I'm interested in getting a quote for: ${t||"your paper board products"}.
Please share more details.`);return r.jsxs("a",{href:`https://wa.me/${Ts}?text=${e}`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.85rem 2rem",background:"#25d366",color:"#fff",fontSize:"0.9rem",fontWeight:500,letterSpacing:"0.05em",border:"2px solid #25d366",borderRadius:"var(--radius)",transition:"all 0.3s ease",textTransform:"uppercase",fontFamily:"var(--ff-body)"},children:[r.jsx(Ze,{size:18})," Get WhatsApp Quote"]})}const Nc=[{num:"01",name:"Kraft Board Paper Roll",gsm:"200 – 550 GSM"},{num:"02",name:"Mill Board Paper Roll",gsm:"200 – 550 GSM"}];function Ic(){return r.jsxs("section",{className:"hero-section",children:[r.jsx("div",{className:"hero-pattern"}),r.jsx("div",{className:"container hero-container",children:r.jsxs("div",{className:"row align-items-center",children:[r.jsx("div",{className:"col-lg-7",children:r.jsxs("div",{className:"hero-content",children:[r.jsxs("div",{className:"hero-eyebrow",children:[r.jsx(Is,{size:9}),"Est. Paper Board Manufacturer · Kolhapur"]}),r.jsxs("h1",{className:"hero-title",children:["Premium Quality",r.jsx("span",{className:"accent-word",children:"Paper Boards"}),"For Every Industry"]}),r.jsx("p",{className:"hero-subtitle",children:"Shri Pant Krupa Paper Board delivers high-grade Kraft Paper, Mill Board, and Duplex Board to packaging industries across India. Quality you can trust, supply you can count on."}),r.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[r.jsxs(S,{to:"/products",className:"btn-accent-custom",children:["Explore Products ",r.jsx(re,{size:15})]}),r.jsxs(S,{to:"/contact",className:"btn-outline-custom hero-btn-outline",children:[r.jsx(wt,{size:15})," Get Quote"]})]}),r.jsx("div",{className:"hero-stats",children:[{num:"500+",label:"Happy Clients"},{num:"15+",label:"Years Experience"},{num:"50+",label:"Product Varieties"},{num:"PAN India",label:"Delivery"}].map(t=>r.jsxs("div",{children:[r.jsx("div",{className:"hero-stat-num",children:t.num}),r.jsx("div",{className:"hero-stat-label",children:t.label})]},t.label))})]})}),r.jsx("div",{className:"col-lg-5 d-none d-lg-block",children:r.jsxs("div",{className:"hero-panel-wrap",children:[r.jsx("div",{className:"hero-panel-header",children:"Our Products"}),Nc.map(t=>r.jsxs(S,{to:"/products",className:"hero-tile",children:[r.jsx("div",{className:"hero-tile-num",children:t.num}),r.jsxs("div",{children:[r.jsx("div",{className:"hero-tile-name",children:t.name}),r.jsxs("div",{className:"hero-tile-meta",children:[r.jsx("span",{className:"hero-tile-gsm",children:t.gsm}),r.jsx("span",{className:"hero-tile-dot"}),r.jsx("span",{className:"hero-tile-stock",children:"In Stock"})]})]}),r.jsx("div",{className:"hero-tile-arrow",children:"→"})]},t.num)),r.jsxs("div",{className:"hero-panel-footer",children:[r.jsx("span",{className:"hpf-text",children:"Kolhapur, Maharashtra · PAN India Delivery"}),r.jsxs("span",{className:"hpf-live",children:[r.jsx("span",{className:"hpf-dot"}),"Live Stock"]})]})]})})]})})]})}function Es({product:t}){var e;return r.jsxs("div",{className:"product-card",children:[r.jsx("div",{className:"product-card-image",children:(e=t.images)!=null&&e[0]?r.jsx("img",{src:t.images[0],alt:t.name,loading:"lazy"}):r.jsxs("div",{className:"product-card-placeholder",children:[r.jsx(ge,{size:32}),r.jsx("span",{children:"Paper Board"})]})}),r.jsxs("div",{className:"product-card-body",children:[r.jsx("div",{className:"product-card-category",children:t.category||"Paper Board"}),r.jsx("div",{className:"product-card-title",children:t.name}),r.jsxs("div",{className:"product-card-meta",children:[t.gsm&&r.jsxs("span",{children:[r.jsx(ge,{size:12})," GSM: ",t.gsm]}),t.width&&r.jsxs("span",{children:[r.jsx(vn,{size:12})," ",t.width]})]}),t.description&&r.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-mid)",marginBottom:"1rem",lineHeight:1.6},children:[t.description.substring(0,90),"..."]}),r.jsxs(S,{to:`/products/${t.slug}`,className:"product-card-link",children:["View Details ",r.jsx(re,{size:13})]})]})]})}const et="products",Ct=async(t={})=>{try{let e=U(T,et);const n=[];t.category&&n.push(rr("category","==",t.category)),t.limit&&n.push(Zs(t.limit)),n.length>0&&(e=bt(e,...n));let i=(await me(e)).docs.map(a=>({id:a.id,...a.data()}));return t.featured&&(i=i.filter(a=>a.featured===!0)),i.sort((a,o)=>{var d,u;const c=((d=a.createdAt)==null?void 0:d.seconds)||0;return(((u=o.createdAt)==null?void 0:u.seconds)||0)-c}),i}catch(e){return console.error("Error fetching products:",e),[]}},Tc=async t=>{try{const e=bt(U(T,et),rr("slug","==",t)),n=await me(e);if(n.empty)return null;const s=n.docs[0];return{id:s.id,...s.data()}}catch(e){return console.error("Error fetching product:",e),null}},Ec=async t=>{try{return(await Pe(U(T,et),{...t,createdAt:X()})).id}catch(e){throw console.error("Error adding product:",e),e}},Cc=async(t,e)=>{try{await _t(K(T,et,t),{...e,updatedAt:X()})}catch(n){throw console.error("Error updating product:",n),n}},Pc=async t=>{try{await Re(K(T,et,t))}catch(e){throw console.error("Error deleting product:",e),e}},Rc=[{id:"1",name:"Kraft Paper Roll",slug:"kraft-paper-roll",category:"Kraft Paper",gsm:"70-200",width:"18-72 inch",description:"High tensile strength brown kraft paper rolls suitable for packaging, wrapping and industrial use.",images:[]},{id:"2",name:"Mill Board",slug:"mill-board",category:"Mill Board",gsm:"200-600",width:"Custom",description:"Heavy duty mill board for industrial packaging, book binding and stiffening applications.",images:[]},{id:"3",name:"Duplex Board",slug:"duplex-board",category:"Duplex Board",gsm:"250-450",width:"Custom",description:"White coated duplex board ideal for carton boxes, cosmetic packaging and food grade packaging.",images:[]},{id:"4",name:"Grey Board",slug:"grey-board",category:"Grey Board",gsm:"400-2000",width:"Custom",description:"Rigid grey board used for book covers, shoe boxes, industrial partitions and heavy-duty packaging.",images:[]},{id:"5",name:"Packing Board",slug:"packing-board",category:"Packing Board",gsm:"150-350",width:"Standard",description:"Economical packing board for secondary packaging, dividers and general purpose industrial uses.",images:[]},{id:"6",name:"Corrugated Medium",slug:"corrugated-medium",category:"Kraft Paper",gsm:"90-180",width:"18-60 inch",description:"Corrugating medium paper for manufacturing 3-ply and 5-ply corrugated boxes.",images:[]}];function Ac(){const[t,e]=p.useState(Rc);return p.useEffect(()=>{Ct({limit:6}).then(n=>{n.length>0&&e(n)}).catch(()=>{})},[]),r.jsx("section",{className:"section-padded",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"row mb-5",children:[r.jsxs("div",{className:"col-lg-6",children:[r.jsx("div",{className:"section-eyebrow",children:"Our Products"}),r.jsx("div",{className:"divider-accent"}),r.jsx("h2",{className:"section-title mb-3",children:"Quality Paper Board Products"}),r.jsx("p",{className:"section-lead",children:"From lightweight kraft paper to heavy-duty grey boards — we supply the full spectrum of paper board products to meet diverse industrial requirements."})]}),r.jsx("div",{className:"col-lg-6 d-flex align-items-end justify-content-lg-end mt-3 mt-lg-0",children:r.jsxs(S,{to:"/products",className:"btn-outline-custom",children:["View All Products ",r.jsx(re,{size:16})]})})]}),r.jsx("div",{className:"row g-4",children:t.map((n,s)=>r.jsx("div",{className:`col-lg-4 col-md-6 fade-in delay-${Math.min(s+1,4)}`,children:r.jsx(Es,{product:n})},n.id))})]})})}const Oc=[{icon:r.jsx(kn,{}),title:"Packaging Industry",desc:"Supplying robust paper board for rigid and flexible packaging solutions across India."},{icon:r.jsx(lr,{}),title:"Corrugated Box Manufacturers",desc:"Providing medium and liner papers for 3-ply, 5-ply and 7-ply corrugated boards."},{icon:r.jsx(ge,{}),title:"Paper Converters",desc:"Raw board materials for converting into specialty packaging and printing substrates."},{icon:r.jsx(se,{}),title:"Industrial Packaging",desc:"Heavy-duty board grades for machinery, automotive, and electronics packaging."},{icon:r.jsx(pn,{}),title:"E-Commerce & Logistics",desc:"Lightweight yet strong kraft papers for e-commerce fulfillment and courier packaging."},{icon:r.jsx(fn,{}),title:"Printing & Publishing",desc:"Smooth coated boards for high-quality printing, book binding and stationery."}];function Lc(){return r.jsx("section",{className:"section-padded section-bg-cream",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"text-center mb-5",children:[r.jsx("div",{className:"section-eyebrow",children:"Industries We Serve"}),r.jsx("div",{className:"divider-accent center"}),r.jsx("h2",{className:"section-title",children:"Trusted Across Industries"}),r.jsx("p",{className:"section-lead mx-auto mt-3",children:"Our paper board products serve a wide range of industries requiring consistent quality and reliable supply chains."})]}),r.jsx("div",{className:"row g-4",children:Oc.map((t,e)=>r.jsx("div",{className:`col-lg-4 col-md-6 fade-in delay-${Math.min(e+1,4)}`,children:r.jsxs("div",{className:"industry-card",children:[r.jsx("div",{className:"industry-icon",children:t.icon}),r.jsx("div",{className:"industry-title",children:t.title}),r.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-mid)",lineHeight:1.7,margin:0},children:t.desc})]})},e))})]})})}const Mc=[{icon:r.jsx(Pi,{}),title:"Premium Quality Assured",desc:"Every batch undergoes quality checks to meet ISI standards and customer specifications."},{icon:r.jsx(vi,{}),title:"Consistent GSM & Width",desc:"Precise manufacturing ensures uniform GSM, width, and surface quality across all orders."},{icon:r.jsx(xi,{}),title:"Reliable Supply Chain",desc:"Well-stocked inventory ensures on-time delivery for both bulk and small quantity orders."},{icon:r.jsx(nr,{}),title:"Dedicated Customer Support",desc:"Personalized service from inquiry to delivery with post-sale technical support."},{icon:r.jsx(pi,{}),title:"Competitive Pricing",desc:"Factory-direct pricing with transparent quotes and no hidden charges for all clients."},{icon:r.jsx(wi,{}),title:"Pan-India Distribution",desc:"Efficient logistics network for timely delivery across Maharashtra and all India."}];function Dc(){return r.jsx("section",{className:"section-padded",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"row align-items-center g-5",children:[r.jsxs("div",{className:"col-lg-5",children:[r.jsx("div",{className:"section-eyebrow",children:"Why Choose Us"}),r.jsx("div",{className:"divider-accent"}),r.jsx("h2",{className:"section-title mb-3",children:"The Pant Krupa Advantage"}),r.jsx("p",{className:"section-lead",children:"With over 15 years of experience in the paper board industry, we've built our reputation on quality, reliability, and exceptional customer service."}),r.jsxs("div",{className:"mt-4",style:{background:"var(--cream)",padding:"1.5rem",borderRadius:"var(--radius-md)",borderLeft:"4px solid var(--accent)"},children:[r.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.1rem",color:"var(--primary-dark)",marginBottom:"0.5rem"},children:'"Omkar Shrikant Patil"'}),r.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-mid)",fontStyle:"italic"},children:"Proprietor, Shri Pant Krupa Paper Board"}),r.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-mid)",marginTop:"0.75rem",lineHeight:1.7,marginBottom:0},children:'"Our mission is to provide the paper board industry with materials that exceed expectations — consistent quality, fair pricing, and reliable delivery, every time."'})]})]}),r.jsx("div",{className:"col-lg-7",children:r.jsx("div",{className:"row g-3",children:Mc.map((t,e)=>r.jsx("div",{className:`col-md-6 fade-in delay-${Math.min(e+1,4)}`,children:r.jsxs("div",{className:"why-item",children:[r.jsx("div",{className:"why-icon",children:t.icon}),r.jsxs("div",{children:[r.jsx("div",{className:"why-title",children:t.title}),r.jsx("div",{className:"why-desc",children:t.desc})]})]})},e))})})]})})})}const Uc="917397849730",Bc=encodeURIComponent(`Hello,
I am interested in your paper board products.
Please share more details.`);function Pt(){return r.jsx("section",{className:"cta-section",children:r.jsx("div",{className:"container position-relative",style:{zIndex:1},children:r.jsx("div",{className:"row justify-content-center text-center",children:r.jsxs("div",{className:"col-lg-8",children:[r.jsx("div",{className:"section-eyebrow",style:{justifyContent:"center",display:"flex",marginBottom:"1rem"},children:"Ready to Order?"}),r.jsx("h2",{className:"cta-title",children:"Need Paper Board for Your Business?"}),r.jsx("p",{style:{color:"rgba(255,255,255,0.7)",fontSize:"1.05rem",lineHeight:1.8,margin:"1rem auto 2.5rem",maxWidth:560},children:"Get in touch with us today for a custom quote, product samples, or to discuss your specific requirements with our team."}),r.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-3",children:[r.jsxs(S,{to:"/contact",className:"btn-accent-custom",children:["Request Quote ",r.jsx(re,{size:16})]}),r.jsxs("a",{href:`https://wa.me/${Uc}?text=${Bc}`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.85rem 2rem",background:"#25d366",color:"#fff",borderRadius:"var(--radius)",border:"2px solid #25d366",fontSize:"0.9rem",fontWeight:500,letterSpacing:"0.05em",textTransform:"uppercase",fontFamily:"var(--ff-body)",transition:"all 0.3s ease"},children:[r.jsx(Ze,{size:18})," WhatsApp Us"]}),r.jsxs("a",{href:"tel:+919876543210",className:"btn-outline-custom",style:{borderColor:"rgba(255,255,255,0.4)",color:"#fff"},children:[r.jsx(wt,{size:16})," Call Now"]})]})]})})})})}function Cs({blog:t}){var n,s;const e=(n=t.createdAt)!=null&&n.toDate?t.createdAt.toDate().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"Recent";return r.jsxs("div",{className:"blog-card",children:[r.jsx("div",{className:"blog-card-image",children:t.featuredImage?r.jsx("img",{src:t.featuredImage,alt:t.title,loading:"lazy"}):r.jsxs("div",{style:{width:"100%",height:"100%",background:"var(--cream)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-light)",flexDirection:"column",gap:"0.5rem"},children:[r.jsxs("svg",{width:"32",height:"32",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:[r.jsx("path",{d:"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z"}),r.jsx("path",{d:"M13 2v6h6M9 12h6M9 16h4"})]}),r.jsx("span",{style:{fontSize:"0.75rem"},children:"Blog Post"})]})}),r.jsxs("div",{className:"blog-card-body",children:[r.jsxs("div",{className:"blog-card-date",children:[r.jsx(wn,{size:12})," ",e,t.author&&r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{margin:"0 0.25rem"},children:"·"}),r.jsx(sr,{size:12})," ",t.author]})]}),r.jsx("div",{className:"blog-card-title",children:t.title}),r.jsxs("p",{className:"blog-card-excerpt",children:[t.excerpt||((s=t.content)==null?void 0:s.substring(0,120)),"..."]}),r.jsxs(S,{to:`/blog/${t.slug}`,className:"product-card-link",children:["Read More ",r.jsx(re,{size:13})]})]})]})}const tt="blogs",Rt=async(t={})=>{try{let n=(await me(U(T,tt))).docs.map(s=>({id:s.id,...s.data()}));return t.status&&(n=n.filter(s=>s.status===t.status)),n.sort((s,i)=>{var a,o;return(((a=i.createdAt)==null?void 0:a.seconds)||0)-(((o=s.createdAt)==null?void 0:o.seconds)||0)}),t.limit&&(n=n.slice(0,t.limit)),n}catch(e){return console.error("Error fetching blogs:",e),[]}},Fc=async t=>{try{const e=bt(U(T,tt),rr("slug","==",t)),n=await me(e);if(n.empty)return null;const s=n.docs[0];return{id:s.id,...s.data()}}catch(e){return console.error("Error fetching blog:",e),null}},zc=async t=>(await Pe(U(T,tt),{...t,createdAt:X()})).id,nn=async(t,e)=>{await _t(K(T,tt,t),{...e,updatedAt:X()})},Wc=async t=>{await Re(K(T,tt,t))};function be(){p.useEffect(()=>{const t=document.querySelectorAll(".fade-in, .slide-up"),e=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&(s.target.classList.add("visible"),e.unobserve(s.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return t.forEach(n=>e.observe(n)),()=>e.disconnect()},[])}const Hc=[{id:"1",title:"Understanding GSM in Paper Boards: A Complete Guide",slug:"gsm-paper-boards-guide",author:"Admin",excerpt:"Learn what GSM means in paper boards and how to choose the right weight for your packaging needs.",createdAt:null,status:"published"},{id:"2",title:"Kraft Paper vs Duplex Board: Which Is Right for Your Business?",slug:"kraft-vs-duplex-board",author:"Admin",excerpt:"A detailed comparison of kraft paper and duplex board to help you make the right purchasing decision.",createdAt:null,status:"published"},{id:"3",title:"Sustainable Packaging Trends in India's Paper Board Industry",slug:"sustainable-packaging-trends",author:"Admin",excerpt:"Explore how Indian paper board manufacturers are adapting to eco-friendly packaging demands.",createdAt:new Date,status:"published"}];function qc(){be();const[t,e]=p.useState(Hc);return p.useEffect(()=>{Rt({status:"published",limit:3}).then(n=>{n.length>0&&e(n)}).catch(()=>{})},[]),r.jsxs(r.Fragment,{children:[r.jsx(Ic,{}),r.jsx("div",{style:{background:"var(--primary)",padding:"1.5rem 0"},children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"row align-items-center text-center text-md-start",children:[r.jsx("div",{className:"col-md-8",children:r.jsx("p",{style:{color:"rgba(255,255,255,0.85)",margin:0,fontSize:"0.95rem"},children:"📍 GATE NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202  |  Proprietor: Omkar Shrikant Patil"})}),r.jsx("div",{className:"col-md-4 text-md-end mt-2 mt-md-0",children:r.jsx("a",{href:"tel:+919876543210",style:{color:"var(--accent-light)",fontFamily:"var(--ff-heading)",fontSize:"1rem",fontWeight:600},children:"📞 +91 98765 43210"})})]})})}),r.jsx(Ac,{}),r.jsx(Lc,{}),r.jsx(Dc,{}),r.jsx("section",{className:"section-padded section-bg-cream",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"row mb-5",children:[r.jsxs("div",{className:"col-lg-6",children:[r.jsx("div",{className:"section-eyebrow",children:"From Our Blog"}),r.jsx("div",{className:"divider-accent"}),r.jsx("h2",{className:"section-title",children:"Industry Insights & News"})]}),r.jsx("div",{className:"col-lg-6 d-flex align-items-end justify-content-lg-end mt-3 mt-lg-0",children:r.jsxs(S,{to:"/blog",className:"btn-outline-custom",children:["View All Posts ",r.jsx(re,{size:16})]})})]}),r.jsx("div",{className:"row g-4",children:t.map((n,s)=>r.jsx("div",{className:`col-lg-4 col-md-6 fade-in delay-${s+1}`,children:r.jsx(Cs,{blog:n})},n.id))})]})}),r.jsx(Pt,{})]})}function Gc(){return be(),r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"page-header",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"page-header-breadcrumb",children:[r.jsx(S,{to:"/",children:"Home"})," / About Us"]}),r.jsx("h1",{className:"page-header-title mt-2",children:"About Us"}),r.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Kolhapur's trusted paper board manufacturer since years"})]})}),r.jsx("section",{className:"section-padded",children:r.jsx("div",{className:"container",children:r.jsxs("div",{className:"row align-items-center g-5",children:[r.jsxs("div",{className:"col-lg-6 fade-in",children:[r.jsx("div",{className:"section-eyebrow",children:"Our Story"}),r.jsx("div",{className:"divider-accent"}),r.jsx("h2",{className:"section-title mb-3",children:"Who We Are"}),r.jsxs("p",{style:{color:"var(--text-mid)",lineHeight:1.9,marginBottom:"1.25rem"},children:["Shri Pant Krupa Paper Board is a leading paper board manufacturer and trader based in Kolhapur, Maharashtra. Founded by ",r.jsx("strong",{children:"Omkar Shrikant Patil"}),", we have built a reputation for delivering consistent quality paper board products to clients across India."]}),r.jsx("p",{style:{color:"var(--text-mid)",lineHeight:1.9,marginBottom:"1.75rem"},children:"Located at GAT NO 3, A-2, A/P Halsavade, Kolhapur — our facility is equipped with modern manufacturing infrastructure to produce Kraft Paper, Mill Board, Duplex Board, Grey Board, and specialty packing boards across a wide range of GSM specifications."}),r.jsx("div",{className:"row g-3",children:[{icon:r.jsx(Is,{}),label:"Manufacturing & Trading"},{icon:r.jsx(bc,{}),label:"Eco-Friendly Practices"},{icon:r.jsx(_c,{}),label:"Pan-India Supply"}].map((t,e)=>r.jsx("div",{className:"col-sm-4",children:r.jsxs("div",{style:{background:"var(--cream)",padding:"1rem",borderRadius:"var(--radius-md)",textAlign:"center"},children:[r.jsx("div",{style:{color:"var(--primary)",fontSize:"1.25rem",marginBottom:"0.5rem"},children:t.icon}),r.jsx("div",{style:{fontSize:"0.8rem",fontWeight:600,color:"var(--text-dark)"},children:t.label})]})},e))})]}),r.jsx("div",{className:"col-lg-6 fade-in delay-2",children:r.jsxs("div",{style:{background:"var(--primary)",borderRadius:"var(--radius-lg)",padding:"2.5rem",color:"#fff"},children:[r.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.4rem",fontWeight:700,marginBottom:"1.5rem",borderBottom:"1px solid rgba(255,255,255,0.15)",paddingBottom:"1rem"},children:"Company Details"}),[{label:"Company",value:"Shri Pant Krupa Paper Board"},{label:"Proprietor",value:"Omkar Shrikant Patil"},{label:"Business Type",value:"Manufacturer / Trader"},{label:"Location",value:"Halsavade, Kolhapur, MH"},{label:"GSM Range",value:"70 – 2000 GSM"},{label:"Products",value:"Kraft, Mill Board, Duplex, Grey Board"},{label:"Delivery",value:"Pan India"}].map((t,e)=>r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.6rem 0",borderBottom:"1px solid rgba(255,255,255,0.07)",fontSize:"0.88rem"},children:[r.jsx("span",{style:{color:"rgba(255,255,255,0.55)",textTransform:"uppercase",letterSpacing:"0.05em",fontSize:"0.75rem"},children:t.label}),r.jsx("span",{style:{color:"#fff",fontWeight:500,textAlign:"right",maxWidth:"60%"},children:t.value})]},e))]})})]})})}),r.jsx("section",{className:"section-padded section-bg-cream",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"text-center mb-5",children:[r.jsx("div",{className:"section-eyebrow",children:"Our Direction"}),r.jsx("div",{className:"divider-accent center"}),r.jsx("h2",{className:"section-title",children:"Vision & Mission"})]}),r.jsxs("div",{className:"row g-4",children:[r.jsx("div",{className:"col-md-6 fade-in delay-1",children:r.jsxs("div",{style:{background:"#fff",padding:"2.5rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border)",height:"100%"},children:[r.jsx("div",{style:{width:56,height:56,background:"var(--primary)",borderRadius:"var(--radius)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-light)",fontSize:"1.3rem",marginBottom:"1.5rem"},children:r.jsx(bn,{})}),r.jsx("h3",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.4rem",color:"var(--primary-dark)",marginBottom:"1rem"},children:"Our Vision"}),r.jsx("p",{style:{color:"var(--text-mid)",lineHeight:1.9,margin:0},children:"To become the most trusted and preferred paper board supplier in Western India, known for uncompromising quality standards, sustainable manufacturing practices, and building long-term partnerships with our clients."})]})}),r.jsx("div",{className:"col-md-6 fade-in delay-2",children:r.jsxs("div",{style:{background:"#fff",padding:"2.5rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border)",height:"100%"},children:[r.jsx("div",{style:{width:56,height:56,background:"var(--accent)",borderRadius:"var(--radius)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"1.3rem",marginBottom:"1.5rem"},children:r.jsx(yi,{})}),r.jsx("h3",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.4rem",color:"var(--primary-dark)",marginBottom:"1rem"},children:"Our Mission"}),r.jsx("p",{style:{color:"var(--text-mid)",lineHeight:1.9,margin:0},children:"To manufacture and supply high-quality paper board products consistently, while maintaining competitive pricing, ensuring reliable delivery timelines, and providing personalized service that makes every client feel valued and supported."})]})})]})]})}),r.jsx("section",{className:"section-padded",children:r.jsx("div",{className:"container",children:r.jsx("div",{className:"row justify-content-center",children:r.jsxs("div",{className:"col-lg-8 text-center fade-in",children:[r.jsx("div",{className:"section-eyebrow",children:"From the Proprietor"}),r.jsx("div",{className:"divider-accent center"}),r.jsx("h2",{className:"section-title mb-4",children:"A Message from Our Founder"}),r.jsxs("div",{style:{background:"var(--cream)",padding:"3rem",borderRadius:"var(--radius-lg)",borderTop:"4px solid var(--accent)",position:"relative"},children:[r.jsx("div",{style:{fontSize:"4rem",color:"var(--accent)",opacity:.3,fontFamily:"Georgia",lineHeight:1,marginBottom:"1rem"},children:'"'}),r.jsx("p",{style:{fontSize:"1.05rem",color:"var(--text-mid)",lineHeight:1.9,fontStyle:"italic",marginBottom:"1.5rem"},children:"We started Shri Pant Krupa Paper Board with a single goal: to supply the Indian paper board industry with materials they can depend on. Quality has never been a compromise for us — it's the foundation of every product we manufacture. As we grow, we remain committed to our clients, our community, and to sustainable business practices that respect our environment."}),r.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.1rem",fontWeight:700,color:"var(--primary-dark)"},children:"Omkar Shrikant Patil"}),r.jsx("div",{style:{fontSize:"0.8rem",color:"var(--accent)",letterSpacing:"0.1em",textTransform:"uppercase",marginTop:"0.25rem"},children:"Proprietor"})]})]})})})}),r.jsx("section",{className:"section-padded section-bg-cream",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"text-center mb-5",children:[r.jsx("div",{className:"section-eyebrow",children:"What We Do"}),r.jsx("div",{className:"divider-accent center"}),r.jsx("h2",{className:"section-title",children:"Manufacturing Capabilities"})]}),r.jsx("div",{className:"row g-4",children:[{title:"Wide GSM Range",desc:"Manufacturing paper boards from 70 GSM lightweight to 2000 GSM heavy grades.",icon:"⚖️"},{title:"Custom Widths",desc:"Available in standard and custom widths from 18 to 72 inches based on client requirements.",icon:"📏"},{title:"Multiple Grades",desc:"Kraft, Mill, Duplex, Grey, and specialty grades for diverse packaging applications.",icon:"🗂️"},{title:"Bulk Supply",desc:"Capacity to handle bulk orders with consistent quality for large manufacturers.",icon:"🏭"},{title:"Quality Testing",desc:"In-house quality checks for GSM, burst factor, tensile strength, and moisture content.",icon:"🔬"},{title:"Timely Delivery",desc:"Reliable logistics and warehousing ensure on-time delivery across India.",icon:"🚛"}].map((t,e)=>r.jsx("div",{className:`col-lg-4 col-md-6 fade-in delay-${Math.min(e+1,4)}`,children:r.jsxs("div",{style:{background:"#fff",padding:"1.75rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border)",display:"flex",gap:"1rem",alignItems:"flex-start"},children:[r.jsx("div",{style:{fontSize:"1.75rem",lineHeight:1},children:t.icon}),r.jsxs("div",{children:[r.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontWeight:600,color:"var(--primary-dark)",marginBottom:"0.5rem"},children:t.title}),r.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-mid)",lineHeight:1.7},children:t.desc})]})]})},e))})]})}),r.jsx("section",{className:"section-padded",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"text-center mb-4",children:[r.jsx("div",{className:"section-eyebrow",children:"Our Location"}),r.jsx("div",{className:"divider-accent center"}),r.jsx("h2",{className:"section-title",children:"Find Us"}),r.jsxs("p",{style:{color:"var(--text-mid)",display:"flex",alignItems:"center",gap:"0.4rem",justifyContent:"center",marginTop:"0.5rem"},children:[r.jsx(ar,{color:"var(--accent)"})," GAT NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202"]})]}),r.jsx("div",{style:{borderRadius:"var(--radius-lg)",overflow:"hidden",height:400,border:"1px solid var(--border)"},children:r.jsx("iframe",{title:"Shri Pant Krupa Paper Board Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8252008960726!2d74.3325096111029!3d16.635539684062838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0fdfed4edea8b%3A0x772879a571c95b7c!2sSHRI%20PANT%20KRUPA%20PAPER%20BOARD!5e0!3m2!1sen!2sin!4v1773083309900!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy"})})]})}),r.jsx(Pt,{})]})}function Vc(){be();const[t,e]=p.useState([]),[n,s]=p.useState(!0),[i,a]=p.useState([]),[o]=p.useState(()=>new URLSearchParams(window.location.search)),[c,l]=p.useState(()=>new URLSearchParams(window.location.search).get("category")||"All"),[d,u]=p.useState("");p.useEffect(()=>{Ct().then(m=>e(m)).catch(()=>e([])).finally(()=>s(!1))},[]);const h=["All",...new Set(t.map(m=>m.category).filter(Boolean))],g=t.filter(m=>{const x=c==="All"||m.category===c,N=!d||m.name.toLowerCase().includes(d.toLowerCase());return x&&N});return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"page-header cream-bottom",style:{"--page-bg":"var(--cream)"},children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"page-header-breadcrumb",children:[r.jsx(S,{to:"/",children:"Home"})," / Products"]}),r.jsx("h1",{className:"page-header-title mt-2",children:"Our Products"}),r.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Premium paper board products for every industrial requirement"})]})}),r.jsx("section",{className:"section-padded",style:{paddingTop:"3rem"},children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"d-flex flex-wrap gap-3 align-items-center mb-5",children:[r.jsx("div",{className:"d-flex flex-wrap gap-2",children:h.map(m=>r.jsx("button",{onClick:()=>l(m),style:{padding:"0.5rem 1.1rem",borderRadius:100,border:"1.5px solid",borderColor:c===m?"var(--primary)":"var(--border)",background:c===m?"var(--primary)":"transparent",color:c===m?"#fff":"var(--text-mid)",fontSize:"0.8rem",fontWeight:500,cursor:"pointer",transition:"all 0.2s ease",fontFamily:"var(--ff-body)"},children:m},m))}),r.jsxs("div",{className:"ms-md-auto",style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"#f9fafb",border:"1px solid var(--border)",borderRadius:"var(--radius)",padding:"0.5rem 1rem"},children:[r.jsx(yn,{size:14,color:"var(--text-light)"}),r.jsx("input",{value:d,onChange:m=>u(m.target.value),placeholder:"Search products...",style:{border:"none",background:"none",outline:"none",fontSize:"0.85rem",color:"var(--text-dark)",minWidth:180}})]})]}),n?r.jsxs("div",{className:"text-center py-5",children:[r.jsx("div",{className:"spinner-border",style:{color:"var(--primary)"}}),r.jsx("p",{style:{color:"var(--text-light)",marginTop:"1rem"},children:"Loading products..."})]}):g.length===0?r.jsx("div",{className:"text-center py-5",children:r.jsx("p",{style:{color:"var(--text-light)"},children:"No products found."})}):r.jsx("div",{className:"row g-4",children:g.map((m,x)=>r.jsx("div",{className:`col-lg-3 col-md-6 fade-in delay-${Math.min(x%4+1,4)}`,children:r.jsx(Es,{product:m})},m.id))})]})}),r.jsx(Pt,{})]})}function Ps({productName:t=""}){const[e,n]=p.useState({name:"",phone:"",email:"",product:t,message:""}),[s,i]=p.useState(!1),[a,o]=p.useState(!1),[c,l]=p.useState(""),d=h=>n(g=>({...g,[h.target.name]:h.target.value})),u=async h=>{if(h.preventDefault(),!e.name||!e.phone){l("Name and phone are required.");return}i(!0),l("");try{await cc(e),o(!0),n({name:"",phone:"",email:"",product:t,message:""})}catch{l("Failed to submit. Please try again.")}finally{i(!1)}};return a?r.jsxs("div",{className:"text-center py-5",children:[r.jsx(jn,{size:48,color:"var(--accent)",className:"mb-3"}),r.jsx("h4",{style:{fontFamily:"var(--ff-heading)",color:"var(--primary-dark)"},children:"Enquiry Submitted!"}),r.jsx("p",{style:{color:"var(--text-mid)"},children:"We'll get back to you within 24 hours."}),r.jsx("button",{className:"btn-primary-custom mt-3",onClick:()=>o(!1),children:"Send Another"})]}):r.jsxs("form",{onSubmit:u,children:[c&&r.jsx("div",{className:"alert alert-danger mb-3",style:{fontSize:"0.85rem"},children:c}),r.jsxs("div",{className:"row g-3",children:[r.jsxs("div",{className:"col-md-6",children:[r.jsx("label",{className:"form-label-custom",children:"Full Name *"}),r.jsx("input",{name:"name",value:e.name,onChange:d,className:"form-control-custom",placeholder:"Your name",required:!0})]}),r.jsxs("div",{className:"col-md-6",children:[r.jsx("label",{className:"form-label-custom",children:"Phone *"}),r.jsx("input",{name:"phone",value:e.phone,onChange:d,className:"form-control-custom",placeholder:"+91 XXXXX XXXXX",required:!0})]}),r.jsxs("div",{className:"col-md-6",children:[r.jsx("label",{className:"form-label-custom",children:"Email"}),r.jsx("input",{name:"email",type:"email",value:e.email,onChange:d,className:"form-control-custom",placeholder:"your@email.com"})]}),r.jsxs("div",{className:"col-md-6",children:[r.jsx("label",{className:"form-label-custom",children:"Product of Interest"}),r.jsx("input",{name:"product",value:e.product,onChange:d,className:"form-control-custom",placeholder:"e.g. Kraft Paper"})]}),r.jsxs("div",{className:"col-12",children:[r.jsx("label",{className:"form-label-custom",children:"Message"}),r.jsx("textarea",{name:"message",value:e.message,onChange:d,className:"form-control-custom",rows:4,placeholder:"Tell us about your requirements...",style:{resize:"vertical"}})]}),r.jsx("div",{className:"col-12",children:r.jsx("button",{type:"submit",className:"btn-primary-custom",disabled:s,children:s?"Submitting...":r.jsxs(r.Fragment,{children:[r.jsx(gn,{})," Send Enquiry"]})})})]})]})}const $c={"kraft-paper-roll":{name:"Kraft Paper Roll",category:"Kraft Paper",gsm:"70–200 GSM",width:"18–72 inch",description:`Kraft paper rolls manufactured from high-quality virgin and recycled pulp with superior tensile strength and bursting factor. Our Kraft paper is ideal for all types of packaging, wrapping, and corrugated box manufacturing applications.

Available in bleached (white) and unbleached (brown/natural) variants. Custom GSM, width, and roll size available on request.`,applications:["Corrugated box liners","Industrial packaging","Paper bags and sacks","Lamination base","Wrapping paper","Multi-wall bags"],images:[]},"mill-board":{name:"Mill Board",category:"Mill Board",gsm:"200–600 GSM",width:"Custom",description:`Mill board is a heavyweight paperboard made from recycled fibre, offering excellent stiffness and hardness. Our mill board is tested for GSM consistency, moisture content, and surface smoothness.

Used widely in book binding, case making, industrial packaging partitions, and stiffening applications across manufacturing industries.`,applications:["Book binding & case making","Stiffening inserts","Industrial partitions","Display boards","File boards","Storage boxes"],images:[]},"duplex-board":{name:"Duplex Board",category:"Duplex Board",gsm:"250–450 GSM",width:"Custom",description:`White coated duplex board with excellent printability and a smooth white surface, ideal for high-quality packaging applications. Our duplex board offers superior whiteness, stiffness, and fold resistance.

Available in single white and double white coating variants with consistent caliper and GSM throughout the roll.`,applications:["Carton boxes","Cosmetic packaging","Food grade packaging","Pharmaceutical boxes","Consumer goods packaging","Retail packaging"],images:[]}};function Kc(){var c,l,d;const{slug:t}=an(),[e,n]=p.useState($c[t]||null),[s,i]=p.useState(0),[a,o]=p.useState(!1);return p.useEffect(()=>{Tc(t).then(u=>{u&&n(u)}).catch(()=>{})},[t]),e?r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{background:"var(--cream)",padding:"1.25rem 0",borderBottom:"1px solid var(--border)"},children:r.jsx("div",{className:"container",children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.82rem",color:"var(--text-mid)"},children:[r.jsx(S,{to:"/",style:{color:"var(--accent)"},children:"Home"})," /",r.jsx(S,{to:"/products",style:{color:"var(--accent)"},children:"Products"})," /",e.name]})})}),r.jsx("section",{className:"section-padded",style:{paddingTop:"3rem"},children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"row g-5",children:[r.jsxs("div",{className:"col-lg-5",children:[r.jsx("div",{style:{borderRadius:"var(--radius-lg)",overflow:"hidden",background:"var(--cream)",height:380,display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--border)"},children:(c=e.images)!=null&&c[s]?r.jsx("img",{src:e.images[s],alt:e.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):r.jsxs("div",{style:{textAlign:"center",color:"var(--text-light)"},children:[r.jsx(ge,{size:64,strokeWidth:1}),r.jsx("p",{style:{marginTop:"1rem",fontFamily:"var(--ff-heading)",fontSize:"1.1rem"},children:e.name})]})}),((l=e.images)==null?void 0:l.length)>1&&r.jsx("div",{className:"d-flex gap-2 mt-3",children:e.images.map((u,h)=>r.jsx("div",{onClick:()=>i(h),style:{width:68,height:68,borderRadius:"var(--radius)",overflow:"hidden",cursor:"pointer",border:`2px solid ${s===h?"var(--primary)":"var(--border)"}`},children:r.jsx("img",{src:u,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})},h))})]}),r.jsxs("div",{className:"col-lg-7",children:[r.jsx("div",{style:{fontSize:"0.75rem",fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"0.5rem"},children:e.category}),r.jsx("h1",{style:{fontFamily:"var(--ff-heading)",fontSize:"clamp(1.75rem, 3vw, 2.5rem)",fontWeight:700,color:"var(--primary-dark)",marginBottom:"1.5rem"},children:e.name}),r.jsxs("div",{className:"d-flex gap-4 mb-3",children:[e.gsm&&r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.9rem",color:"var(--text-mid)"},children:[r.jsx(ge,{size:16,color:"var(--accent)"})," ",r.jsx("strong",{children:"GSM:"})," ",e.gsm]}),e.width&&r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.9rem",color:"var(--text-mid)"},children:[r.jsx(vn,{size:16,color:"var(--accent)"})," ",r.jsx("strong",{children:"Width:"})," ",e.width]})]}),r.jsx("div",{style:{height:2,background:"var(--border)",margin:"1.5rem 0"}}),r.jsx("p",{style:{color:"var(--text-mid)",lineHeight:1.9,whiteSpace:"pre-line",marginBottom:"1.5rem"},children:e.description}),((d=e.applications)==null?void 0:d.length)>0&&r.jsxs("div",{style:{marginBottom:"2rem"},children:[r.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontWeight:600,color:"var(--primary-dark)",marginBottom:"0.75rem"},children:"Applications"}),r.jsx("div",{className:"row g-2",children:e.applications.map((u,h)=>r.jsx("div",{className:"col-sm-6",children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",color:"var(--text-mid)"},children:[r.jsx(jn,{size:14,color:"var(--accent)"})," ",u]})},h))})]}),r.jsxs("div",{className:"d-flex flex-wrap gap-3",children:[r.jsxs("button",{onClick:()=>o(!a),className:"btn-primary-custom",children:[r.jsx(gn,{size:15})," ",a?"Hide Form":"Send Enquiry"]}),r.jsx(Sc,{product:e.name})]})]})]}),a&&r.jsx("div",{className:"row justify-content-center mt-5",children:r.jsx("div",{className:"col-lg-8",children:r.jsxs("div",{style:{background:"var(--cream)",padding:"2.5rem",borderRadius:"var(--radius-lg)",border:"1px solid var(--border)"},children:[r.jsxs("h3",{style:{fontFamily:"var(--ff-heading)",color:"var(--primary-dark)",marginBottom:"1.5rem"},children:["Enquire About ",e.name]}),r.jsx(Ps,{productName:e.name})]})})}),r.jsx("div",{className:"mt-4",children:r.jsxs(S,{to:"/products",style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",fontSize:"0.85rem",color:"var(--primary)",fontWeight:500},children:[r.jsx(Sn,{size:14})," Back to Products"]})})]})})]}):r.jsxs("div",{className:"container py-5 text-center",children:[r.jsx("h2",{style:{fontFamily:"var(--ff-heading)"},children:"Product Not Found"}),r.jsx(S,{to:"/products",className:"btn-primary-custom mt-3",children:"Back to Products"})]})}const Xc=[{icon:r.jsx(kn,{size:28}),title:"Packaging Industry",desc:"We supply premium paper boards to packaging manufacturers who require consistent GSM, strength, and surface finish for primary and secondary packaging.",products:["Duplex Board","Kraft Liner","Mill Board"]},{icon:r.jsx(lr,{size:28}),title:"Corrugated Box Manufacturers",desc:"Providing corrugating medium, test liners, and kraft liners for manufacturing 3-ply, 5-ply, and 7-ply corrugated boards for all industries.",products:["Corrugated Medium","Kraft Liner","Test Liner"]},{icon:r.jsx(ge,{size:28}),title:"Paper Converters",desc:"Raw board materials for converting into specialty packaging, laminates, foil boards, and printing substrates for various end uses.",products:["Mill Board","Duplex Board","Grey Board"]},{icon:r.jsx(se,{size:28}),title:"Industrial Packaging",desc:"Heavy-duty board grades for machinery, automotive spare parts, electronics, and engineering goods requiring robust protective packaging.",products:["Grey Board","Rigid Board","Mill Board"]},{icon:r.jsx(pn,{size:28}),title:"E-Commerce & Logistics",desc:"Lightweight yet strong kraft papers and liner boards for e-commerce fulfillment, courier packaging and retail-ready packaging solutions.",products:["Kraft Paper","Packing Board","Test Liner"]},{icon:r.jsx(fn,{size:28}),title:"Printing & Publishing",desc:"Smooth coated boards for high-quality offset and digital printing, book binding, stationery, and premium packaging with print.",products:["Duplex Board","Chrome Board","Art Board"]}];function Yc(){return be(),r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"page-header",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"page-header-breadcrumb",children:[r.jsx(S,{to:"/",children:"Home"})," / Industries"]}),r.jsx("h1",{className:"page-header-title mt-2",children:"Industries We Serve"}),r.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Trusted paper board supplier across diverse industries"})]})}),r.jsx("section",{className:"section-padded",children:r.jsx("div",{className:"container",children:r.jsx("div",{className:"row g-4",children:Xc.map((t,e)=>r.jsx("div",{className:`col-lg-6 fade-in delay-${Math.min(e%3+1,3)}`,children:r.jsx("div",{style:{background:"#fff",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",padding:"2rem",height:"100%",transition:"all 0.3s ease"},children:r.jsxs("div",{style:{display:"flex",gap:"1.25rem",alignItems:"flex-start"},children:[r.jsx("div",{style:{width:60,height:60,background:"var(--cream)",borderRadius:"var(--radius)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)",flexShrink:0},children:t.icon}),r.jsxs("div",{children:[r.jsx("h3",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.25rem",color:"var(--primary-dark)",marginBottom:"0.75rem"},children:t.title}),r.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-mid)",lineHeight:1.8,marginBottom:"1rem"},children:t.desc}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:t.products.map(n=>r.jsx("span",{style:{background:"var(--cream)",color:"var(--primary)",fontSize:"0.75rem",fontWeight:600,padding:"0.25rem 0.75rem",borderRadius:100,border:"1px solid var(--border)"},children:n},n))})]})]})})},e))})})}),r.jsx(Pt,{})]})}const sn=[{id:"1",title:"Understanding GSM in Paper Boards: A Complete Guide",slug:"gsm-paper-boards-guide",author:"Admin",excerpt:"Learn what GSM means in paper boards and how to choose the right weight for your specific packaging needs.",status:"published",createdAt:null},{id:"2",title:"Kraft Paper vs Duplex Board: Which Is Right for Your Business?",slug:"kraft-vs-duplex-board",author:"Admin",excerpt:"A detailed comparison of kraft paper and duplex board to help you make the right purchasing decision for your packaging line.",status:"published",createdAt:null},{id:"3",title:"Sustainable Packaging Trends in India's Paper Board Industry",slug:"sustainable-packaging-trends",author:"Admin",excerpt:"Explore how Indian paper board manufacturers are adapting to growing eco-friendly packaging demands from global brands.",status:"published",createdAt:null},{id:"4",title:"How to Select the Right Mill Board for Book Binding",slug:"mill-board-book-binding",author:"Admin",excerpt:"A practical guide for publishers and binders on selecting the correct mill board grade, GSM and surface finish.",status:"published",createdAt:null},{id:"5",title:"Corrugated Box Manufacturing: Raw Material Selection Guide",slug:"corrugated-box-raw-materials",author:"Admin",excerpt:"Understanding liner grades, medium quality, and how the right kraft paper impacts the final strength of corrugated boxes.",status:"published",createdAt:null},{id:"6",title:"Why Kolhapur is a Hub for Paper Board Manufacturing in Maharashtra",slug:"kolhapur-paper-board-hub",author:"Admin",excerpt:"An insight into why Kolhapur has emerged as a key production center for paper board in western Maharashtra.",status:"published",createdAt:null}];function Jc(){be();const[t,e]=p.useState(sn);return p.useEffect(()=>{Rt({status:"published"}).then(n=>e(n.length>0?n:sn)).catch(()=>{})},[]),r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"page-header",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"page-header-breadcrumb",children:[r.jsx(S,{to:"/",children:"Home"})," / Blog"]}),r.jsx("h1",{className:"page-header-title mt-2",children:"Blog & Insights"}),r.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Industry knowledge, product guides, and paper board insights"})]})}),r.jsx("section",{className:"section-padded",children:r.jsxs("div",{className:"container",children:[r.jsx("div",{className:"row g-4",children:t.map((n,s)=>r.jsx("div",{className:`col-lg-4 col-md-6 fade-in delay-${Math.min(s%3+1,3)}`,children:r.jsx(Cs,{blog:n})},n.id))}),t.length===0&&r.jsx("div",{className:"text-center py-5",children:r.jsx("p",{style:{color:"var(--text-light)"},children:"No blog posts yet. Check back soon!"})})]})})]})}const Qc={"gsm-paper-boards-guide":{title:"Understanding GSM in Paper Boards: A Complete Guide",author:"Admin",status:"published",content:`GSM stands for Grams per Square Metre, and it is the standard unit used to measure the weight (and indirectly, the thickness and density) of paper and paperboard.

**What is GSM?**

GSM is calculated by weighing one square metre of paper. A higher GSM number means heavier, thicker, and typically more rigid paper. For paper boards used in industrial and commercial applications, GSM is the most critical specification.

**Common GSM Ranges for Paper Boards:**

- **70–120 GSM**: Lightweight kraft paper for wrapping and general packaging
- **120–200 GSM**: Medium kraft liner for corrugated boxes and bags
- **200–350 GSM**: Mill board and duplex board for carton boxes
- **350–600 GSM**: Heavy mill board for book binding and stiff applications
- **600–2000 GSM**: Grey board and rigid board for luxury packaging

**Why GSM Matters for Your Business:**

Choosing the correct GSM is critical for packaging performance. Too low a GSM means your packaging may not protect the product adequately. Too high a GSM adds unnecessary cost and weight.

For corrugated box manufacturers, the liner and medium GSM directly impacts the final box's ECT (Edge Crush Test) and BCT (Box Compression Test) values.

**How to Choose the Right GSM:**

Consider these factors when selecting GSM:
1. Product weight and fragility
2. Stacking strength requirements
3. Moisture resistance needs
4. Print quality requirements
5. Cost optimization

At Shri Pant Krupa Paper Board, we help our clients select the exact GSM specification that optimizes performance and cost for their specific application.`,tags:["GSM","Paper Board","Packaging","Guide"]}};function Zc(){var o,c;const{slug:t}=an(),[e,n]=p.useState(Qc[t]||null),[s,i]=p.useState(!0);if(p.useEffect(()=>{Fc(t).then(l=>{l&&n(l)}).catch(()=>{}).finally(()=>i(!1))},[t]),s)return r.jsx("div",{className:"container py-5 text-center",children:r.jsx("div",{className:"spinner-border",style:{color:"var(--primary)"}})});if(!e)return r.jsxs("div",{className:"container py-5 text-center",children:[r.jsx("h2",{style:{fontFamily:"var(--ff-heading)"},children:"Blog Post Not Found"}),r.jsx(S,{to:"/blog",className:"btn-primary-custom mt-3",children:"Back to Blog"})]});const a=(o=e.createdAt)!=null&&o.toDate?e.createdAt.toDate().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):"Recent";return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"page-header",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"page-header-breadcrumb",children:[r.jsx(S,{to:"/",children:"Home"})," / ",r.jsx(S,{to:"/blog",children:"Blog"})," / Article"]}),r.jsx("h1",{className:"page-header-title mt-2",style:{fontSize:"clamp(1.5rem, 3vw, 2.5rem)"},children:e.title}),r.jsxs("div",{className:"d-flex flex-wrap gap-3 mt-3",style:{color:"rgba(255,255,255,0.65)",fontSize:"0.85rem"},children:[r.jsxs("span",{className:"d-flex align-items-center gap-1",children:[r.jsx(wn,{size:13})," ",a]}),e.author&&r.jsxs("span",{className:"d-flex align-items-center gap-1",children:[r.jsx(sr,{size:13})," ",e.author]})]})]})}),r.jsx("section",{className:"section-padded",children:r.jsx("div",{className:"container",children:r.jsx("div",{className:"row justify-content-center",children:r.jsxs("div",{className:"col-lg-8",children:[e.featuredImage&&r.jsx("img",{src:e.featuredImage,alt:e.title,style:{width:"100%",height:400,objectFit:"cover",borderRadius:"var(--radius-lg)",marginBottom:"2.5rem"}}),r.jsx("article",{style:{fontFamily:"var(--ff-body)",fontSize:"1rem",lineHeight:1.9,color:"var(--text-mid)"},children:(e.content||"").split(`
`).map((l,d)=>l.trim()?l.startsWith("**")&&l.endsWith("**")?r.jsx("h3",{style:{fontFamily:"var(--ff-heading)",color:"var(--primary-dark)",margin:"2rem 0 1rem",fontSize:"1.3rem"},children:l.replace(/\*\*/g,"")},d):l.startsWith("- ")?r.jsx("li",{style:{marginBottom:"0.5rem"},children:l.replace("- ","")},d):/^\d+\./.test(l)?r.jsx("li",{style:{marginBottom:"0.5rem"},children:l.replace(/^\d+\.\s/,"")},d):r.jsx("p",{children:l.replace(/\*\*/g,"")},d):r.jsx("br",{},d))}),((c=e.tags)==null?void 0:c.length)>0&&r.jsxs("div",{className:"mt-4",style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",alignItems:"center"},children:[r.jsx(ir,{size:14,color:"var(--text-light)"}),e.tags.map(l=>r.jsx("span",{style:{background:"var(--cream)",color:"var(--primary)",fontSize:"0.78rem",fontWeight:600,padding:"0.25rem 0.75rem",borderRadius:100,border:"1px solid var(--border)"},children:l},l))]}),r.jsx("div",{className:"mt-5",style:{paddingTop:"2rem",borderTop:"1px solid var(--border)"},children:r.jsxs(S,{to:"/blog",style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",fontSize:"0.85rem",color:"var(--primary)",fontWeight:500},children:[r.jsx(Sn,{size:14})," Back to Blog"]})})]})})})})]})}const ed=[{id:"1",title:"Kraft Paper Manufacturing",category:"Manufacturing",image:""},{id:"2",title:"Paper Board Rolls",category:"Products",image:""},{id:"3",title:"Mill Board Stacks",category:"Products",image:""},{id:"4",title:"Production Floor",category:"Facility",image:""},{id:"5",title:"Duplex Board Samples",category:"Products",image:""},{id:"6",title:"Quality Testing",category:"Quality",image:""},{id:"7",title:"Dispatch Area",category:"Facility",image:""},{id:"8",title:"Grey Board Rolls",category:"Products",image:""}];function td(){be();const[t,e]=p.useState(ed),[n,s]=p.useState("All"),[i,a]=p.useState(null);p.useEffect(()=>{kr().then(l=>{l.length>0&&e(l)}).catch(()=>{})},[]);const o=["All",...new Set(t.map(l=>l.category).filter(Boolean))],c=n==="All"?t:t.filter(l=>l.category===n);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"page-header",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"page-header-breadcrumb",children:[r.jsx(S,{to:"/",children:"Home"})," / Gallery"]}),r.jsx("h1",{className:"page-header-title mt-2",children:"Gallery"}),r.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Our facility, products, and manufacturing capabilities"})]})}),r.jsx("section",{className:"section-padded",children:r.jsxs("div",{className:"container",children:[r.jsx("div",{className:"d-flex flex-wrap gap-2 justify-content-center mb-5",children:o.map(l=>r.jsx("button",{onClick:()=>s(l),style:{padding:"0.5rem 1.25rem",borderRadius:100,cursor:"pointer",border:"1.5px solid",borderColor:n===l?"var(--primary)":"var(--border)",background:n===l?"var(--primary)":"transparent",color:n===l?"#fff":"var(--text-mid)",fontSize:"0.82rem",fontWeight:500,transition:"all 0.2s ease",fontFamily:"var(--ff-body)"},children:l},l))}),r.jsx("div",{className:"row g-3",children:c.map((l,d)=>r.jsx("div",{className:`col-lg-3 col-md-4 col-6 fade-in delay-${Math.min(d%4+1,4)}`,children:r.jsx("div",{className:"gallery-item",onClick:()=>l.image&&a(l),children:l.image?r.jsxs(r.Fragment,{children:[r.jsx("img",{src:l.image,alt:l.title,loading:"lazy"}),r.jsx("div",{className:"gallery-overlay",children:r.jsxs("div",{children:[r.jsx("div",{className:"gallery-title",children:l.title}),r.jsx("div",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.7)",textTransform:"uppercase",letterSpacing:"0.1em"},children:l.category})]})})]}):r.jsxs("div",{style:{height:260,background:"var(--cream)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"0.5rem",color:"var(--text-light)",borderRadius:"var(--radius-md)",border:"1px solid var(--border)"},children:[r.jsx(mi,{size:28,strokeWidth:1.5}),r.jsx("div",{style:{fontSize:"0.8rem",textAlign:"center",padding:"0 1rem"},children:l.title}),r.jsx("div",{style:{fontSize:"0.7rem",color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em"},children:l.category})]})})},l.id))})]})}),i&&r.jsx("div",{className:"modal-overlay",onClick:()=>a(null),style:{background:"rgba(0,0,0,0.9)"},children:r.jsxs("div",{style:{position:"relative",maxWidth:900,width:"100%"},onClick:l=>l.stopPropagation(),children:[r.jsx("button",{onClick:()=>a(null),style:{position:"absolute",top:-40,right:0,background:"transparent",border:"none",color:"#fff",fontSize:"1.5rem",cursor:"pointer"},children:r.jsx(Ve,{})}),r.jsx("img",{src:i.image,alt:i.title,style:{width:"100%",borderRadius:"var(--radius-md)"}}),r.jsxs("div",{style:{color:"#fff",textAlign:"center",marginTop:"1rem"},children:[r.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.1rem"},children:i.title}),r.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:"0.1em"},children:i.category})]})]})})]})}const rd="919876543210";function nd(){return be(),r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"page-header",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"page-header-breadcrumb",children:[r.jsx(S,{to:"/",children:"Home"})," / Contact"]}),r.jsx("h1",{className:"page-header-title mt-2",children:"Contact Us"}),r.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Get in touch for enquiries, quotes, and business partnerships"})]})}),r.jsx("section",{className:"section-padded",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"row g-5",children:[r.jsxs("div",{className:"col-lg-5",children:[r.jsx("div",{className:"section-eyebrow",children:"Get In Touch"}),r.jsx("div",{className:"divider-accent"}),r.jsx("h2",{className:"section-title mb-3",children:"We're Here to Help"}),r.jsx("p",{style:{color:"var(--text-mid)",lineHeight:1.9,marginBottom:"2rem"},children:"Whether you need a custom quote, product information, or want to discuss a bulk order — our team is ready to assist you promptly."}),r.jsx("div",{className:"d-flex flex-column gap-3 mb-4",children:[{icon:r.jsx(ar,{}),label:"Address",value:"GAT NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202, India"},{icon:r.jsx(wt,{}),label:"Phone",value:"+91 98765 43210"},{icon:r.jsx($e,{}),label:"Email",value:"info@pantkriupapaperboard.com"},{icon:r.jsx(Ni,{}),label:"Business Hours",value:"Mon–Sat: 9:00 AM – 7:00 PM"}].map((t,e)=>r.jsxs("div",{className:"contact-info-card fade-in",style:{transitionDelay:`${e*.1}s`},children:[r.jsx("div",{className:"contact-info-icon",children:t.icon}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-light)",marginBottom:"0.25rem"},children:t.label}),r.jsx("div",{style:{fontSize:"0.9rem",color:"var(--text-dark)",fontWeight:500},children:t.value})]})]},e))}),r.jsxs("a",{href:`https://wa.me/${rd}`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.6rem",background:"#25d366",color:"#fff",padding:"0.9rem 1.75rem",borderRadius:"var(--radius)",fontSize:"0.9rem",fontWeight:500,fontFamily:"var(--ff-body)",textDecoration:"none",transition:"all 0.3s ease"},children:[r.jsx(Ze,{size:20})," Chat on WhatsApp"]})]}),r.jsx("div",{className:"col-lg-7 fade-in delay-2",children:r.jsxs("div",{style:{background:"var(--cream)",padding:"2.5rem",borderRadius:"var(--radius-lg)",border:"1px solid var(--border)"},children:[r.jsx("h3",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.5rem",color:"var(--primary-dark)",marginBottom:"0.5rem"},children:"Send an Enquiry"}),r.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-mid)",marginBottom:"2rem"},children:"Fill in the form and we'll get back to you within 24 hours."}),r.jsx(Ps,{})]})})]}),r.jsxs("div",{className:"mt-5 fade-in",children:[r.jsx("h3",{style:{fontFamily:"var(--ff-heading)",color:"var(--primary-dark)",marginBottom:"1.25rem"},children:"Our Location"}),r.jsx("div",{style:{borderRadius:"var(--radius-lg)",overflow:"hidden",height:400,border:"1px solid var(--border)"},children:r.jsx("iframe",{title:"Shri Pant Krupa Paper Board",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8252008960726!2d74.3325096111029!3d16.635539684062838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0fdfed4edea8b%3A0x772879a571c95b7c!2sSHRI%20PANT%20KRUPA%20PAPER%20BOARD!5e0!3m2!1sen!2sin!4v1773083309900!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy"})})]})]})})]})}const Rs=p.createContext(null);function sd({children:t}){const[e,n]=p.useState(void 0);p.useEffect(()=>$o(zt,o=>n(o??null)),[]);const s=(a,o)=>qo(zt,a,o),i=()=>Ko(zt);return r.jsx(Rs.Provider,{value:{user:e,login:s,logout:i,loading:e===void 0},children:t})}function At(){return p.useContext(Rs)}function id({children:t}){const{user:e,loading:n}=At();return n?r.jsxs("div",{style:{minHeight:"100vh",background:"var(--primary-dark)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1rem"},children:[r.jsx("div",{style:{width:56,height:56,background:"var(--accent)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(se,{size:24,color:"#fff"})}),r.jsx("div",{style:{width:32,height:32,border:"3px solid rgba(200,150,62,0.3)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite"}}),r.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}):e?t:r.jsx(Qt,{to:"/admin/login",replace:!0})}const ad=[{label:"Main Menu",items:[{to:"/admin",icon:r.jsx(lr,{}),label:"Dashboard",end:!0}]},{label:"Content",items:[{to:"/admin/categories",icon:r.jsx(ir,{}),label:"Categories"},{to:"/admin/products",icon:r.jsx(se,{}),label:"Products"},{to:"/admin/blog",icon:r.jsx(xn,{}),label:"Blog"},{to:"/admin/gallery",icon:r.jsx(or,{}),label:"Gallery"}]},{label:"Business",items:[{to:"/admin/dealers",icon:r.jsx(nr,{}),label:"Dealers"},{to:"/admin/enquiries",icon:r.jsx($e,{}),label:"Enquiries"}]}];function od(){return r.jsxs("aside",{className:"admin-sidebar",children:[r.jsxs("div",{className:"sidebar-brand",children:[r.jsx("div",{className:"sidebar-brand-icon",children:r.jsx(se,{size:18,color:"#fff"})}),r.jsx("div",{className:"sidebar-brand-text",children:"Pant Krupa Admin"})]}),r.jsx("nav",{className:"sidebar-nav",children:ad.map(t=>r.jsxs("div",{children:[r.jsx("div",{className:"sidebar-section-label",children:t.label}),t.items.map(e=>r.jsxs(we,{to:e.to,end:e.end,className:({isActive:n})=>`sidebar-link ${n?"active":""}`,children:[r.jsx("span",{className:"link-icon",children:e.icon}),e.label]},e.to))]},t.label))}),r.jsx("div",{style:{padding:"1rem 1.5rem",borderTop:"1px solid rgba(255,255,255,0.08)"},children:r.jsxs("a",{href:"/",target:"_blank",rel:"noopener noreferrer",className:"sidebar-link",style:{padding:"0.5rem 0"},children:[r.jsx(Si,{className:"link-icon",size:16}),"View Website"]})})]})}function ld(){const{login:t}=At(),e=Ls(),[n,s]=p.useState({email:"",password:""}),[i,a]=p.useState(!1),[o,c]=p.useState(!1),[l,d]=p.useState(""),u=m=>s(x=>({...x,[m.target.name]:m.target.value})),h={"auth/invalid-credential":"Incorrect email or password.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/network-request-failed":"Network error. Check your connection.","auth/invalid-email":"Please enter a valid email address."},g=async m=>{m.preventDefault(),d(""),c(!0);try{await t(n.email,n.password),e("/admin")}catch(x){d(h[x.code]||"Login failed. Please check your credentials.")}finally{c(!1)}};return r.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 60%, var(--primary-light) 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem",position:"relative",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",inset:0,opacity:.04,backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/svg%3E")`}}),r.jsx("div",{style:{position:"absolute",top:"-15%",right:"-10%",width:500,height:500,background:"radial-gradient(circle, rgba(200,150,62,0.15) 0%, transparent 70%)",borderRadius:"50%"}}),r.jsx("div",{style:{position:"absolute",bottom:"-15%",left:"-10%",width:400,height:400,background:"radial-gradient(circle, rgba(200,150,62,0.1) 0%, transparent 70%)",borderRadius:"50%"}}),r.jsxs("div",{style:{width:"100%",maxWidth:420,position:"relative",zIndex:1},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[r.jsx("div",{style:{width:64,height:64,background:"var(--accent)",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem",boxShadow:"0 8px 32px rgba(200,150,62,0.4)"},children:r.jsx(se,{size:28,color:"#fff"})}),r.jsx("h1",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.5rem",fontWeight:700,color:"#fff",marginBottom:"0.25rem"},children:"Admin Panel"}),r.jsx("p",{style:{color:"rgba(255,255,255,0.55)",fontSize:"0.85rem"},children:"Shri Pant Krupa Paper Board"})]}),r.jsxs("div",{style:{background:"#fff",borderRadius:16,padding:"2.5rem",boxShadow:"0 24px 64px rgba(0,0,0,0.2)"},children:[r.jsx("h2",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.3rem",color:"var(--primary-dark)",marginBottom:"0.375rem"},children:"Sign in"}),r.jsx("p",{style:{color:"var(--text-light)",fontSize:"0.85rem",marginBottom:"2rem"},children:"Enter your admin credentials to continue"}),l&&r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem",background:"#fff1f2",border:"1px solid #fecdd3",borderRadius:8,padding:"0.75rem 1rem",marginBottom:"1.5rem",color:"#be123c",fontSize:"0.85rem"},children:[r.jsx(Ri,{size:16,style:{flexShrink:0}}),l]}),r.jsxs("form",{onSubmit:g,children:[r.jsxs("div",{style:{marginBottom:"1.25rem"},children:[r.jsx("label",{style:{display:"block",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-mid)",marginBottom:"0.5rem"},children:"Email Address"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx($e,{size:16,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:"var(--text-light)"}}),r.jsx("input",{type:"email",name:"email",value:n.email,onChange:u,placeholder:"admin@yourdomain.com",required:!0,autoComplete:"email",style:{width:"100%",padding:"0.8rem 1rem 0.8rem 2.75rem",border:`1.5px solid ${l?"#fecdd3":"var(--border)"}`,borderRadius:8,fontSize:"0.9rem",fontFamily:"var(--ff-body)",outline:"none",transition:"all 0.2s ease",color:"var(--text-dark)",background:"#fff"},onFocus:m=>m.target.style.borderColor="var(--primary)",onBlur:m=>m.target.style.borderColor=l?"#fecdd3":"var(--border)"})]})]}),r.jsxs("div",{style:{marginBottom:"1.75rem"},children:[r.jsx("label",{style:{display:"block",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-mid)",marginBottom:"0.5rem"},children:"Password"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(ji,{size:16,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:"var(--text-light)"}}),r.jsx("input",{type:i?"text":"password",name:"password",value:n.password,onChange:u,placeholder:"••••••••",required:!0,autoComplete:"current-password",style:{width:"100%",padding:"0.8rem 3rem 0.8rem 2.75rem",border:`1.5px solid ${l?"#fecdd3":"var(--border)"}`,borderRadius:8,fontSize:"0.9rem",fontFamily:"var(--ff-body)",outline:"none",transition:"all 0.2s ease",color:"var(--text-dark)",background:"#fff"},onFocus:m=>m.target.style.borderColor="var(--primary)",onBlur:m=>m.target.style.borderColor=l?"#fecdd3":"var(--border)"}),r.jsx("button",{type:"button",onClick:()=>a(m=>!m),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-light)",padding:4},children:i?r.jsx(ki,{size:16}):r.jsx(bn,{size:16})})]})]}),r.jsx("button",{type:"submit",disabled:o,style:{width:"100%",padding:"0.9rem",background:o?"var(--primary-light)":"var(--primary)",color:"#fff",border:"none",borderRadius:8,fontSize:"0.9rem",fontWeight:600,fontFamily:"var(--ff-body)",letterSpacing:"0.05em",textTransform:"uppercase",cursor:o?"not-allowed":"pointer",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:o?r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{width:16,height:16,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}}),"Signing in…"]}):"Sign In"})]})]}),r.jsx("p",{style:{textAlign:"center",color:"rgba(255,255,255,0.45)",fontSize:"0.78rem",marginTop:"1.5rem"},children:"To create an admin account, go to Firebase Console → Authentication → Add user"})]}),r.jsx("style",{children:`
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function cd(){const[t,e]=p.useState({products:0,categories:0,blogs:0,enquiries:0,dealers:0,gallery:0}),[n,s]=p.useState([]),[i,a]=p.useState(!0);p.useEffect(()=>{Promise.all([Ct(),Rt(),Ss(),Et(),Ns(),kr()]).then(([c,l,d,u,h,g])=>{e({products:c.length,categories:u.length,blogs:l.length,enquiries:d.length,dealers:h.length,gallery:g.length}),s(d.slice(0,5))}).catch(()=>{}).finally(()=>a(!1))},[]);const o=[{icon:r.jsx(se,{}),label:"Products",value:t.products,color:"green",to:"/admin/products"},{icon:r.jsx(ir,{}),label:"Categories",value:t.categories,color:"blue",to:"/admin/categories"},{icon:r.jsx(xn,{}),label:"Blog Posts",value:t.blogs,color:"amber",to:"/admin/blog"},{icon:r.jsx($e,{}),label:"Enquiries",value:t.enquiries,color:"purple",to:"/admin/enquiries"},{icon:r.jsx(nr,{}),label:"Dealers",value:t.dealers,color:"rose",to:"/admin/dealers"},{icon:r.jsx(or,{}),label:"Gallery",value:t.gallery,color:"blue",to:"/admin/gallery"}];return r.jsxs("div",{children:[r.jsx("div",{className:"admin-page-title mb-1",children:"Dashboard"}),r.jsx("p",{style:{color:"var(--text-light)",fontSize:"0.88rem",marginBottom:"2rem"},children:"Welcome back! Here's an overview of your website content."}),r.jsx("div",{className:"row g-3 mb-4",children:o.map(c=>r.jsx("div",{className:"col-lg-2 col-md-4 col-6",children:r.jsx(S,{to:c.to,style:{textDecoration:"none"},children:r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:`stat-icon ${c.color}`,children:c.icon}),r.jsxs("div",{children:[r.jsx("div",{className:"stat-num",children:i?"—":c.value}),r.jsx("div",{className:"stat-label",children:c.label})]})]})})},c.label))}),r.jsx("div",{className:"row g-3 mb-4",children:r.jsx("div",{className:"col-12",children:r.jsxs("div",{style:{background:"#fff",border:"1px solid #e5e7eb",borderRadius:"var(--radius-md)",padding:"1.5rem"},children:[r.jsx("h4",{style:{fontFamily:"var(--ff-heading)",color:"var(--primary-dark)",marginBottom:"1.25rem",fontSize:"1.1rem"},children:"Quick Actions"}),r.jsx("div",{className:"d-flex flex-wrap gap-2",children:[{label:"Add Product",to:"/admin/products"},{label:"New Blog Post",to:"/admin/blog"},{label:"Upload Gallery",to:"/admin/gallery"},{label:"View Enquiries",to:"/admin/enquiries"},{label:"Add Dealer",to:"/admin/dealers"}].map(c=>r.jsx(S,{to:c.to,children:r.jsx("button",{className:"btn-outline-custom",style:{padding:"0.5rem 1rem",fontSize:"0.82rem"},children:c.label})},c.label))})]})})}),r.jsxs("div",{className:"data-table-wrapper",children:[r.jsxs("div",{className:"data-table-header",children:[r.jsx("h4",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.1rem",color:"var(--primary-dark)",margin:0},children:"Recent Enquiries"}),r.jsxs(S,{to:"/admin/enquiries",style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.82rem",color:"var(--primary)",fontWeight:500},children:["View All ",r.jsx(re,{size:13})]})]}),r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Phone"}),r.jsx("th",{children:"Product"}),r.jsx("th",{children:"Message"}),r.jsx("th",{children:"Date"})]})}),r.jsx("tbody",{children:n.length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:5,style:{textAlign:"center",padding:"2rem",color:"var(--text-light)"},children:"No enquiries yet."})}):n.map(c=>{var l;return r.jsxs("tr",{children:[r.jsx("td",{style:{fontWeight:600},children:c.name}),r.jsx("td",{children:c.phone}),r.jsx("td",{children:c.product||"—"}),r.jsx("td",{style:{maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c.message||"—"}),r.jsx("td",{style:{color:"var(--text-light)",fontSize:"0.82rem"},children:(l=c.createdAt)!=null&&l.toDate?c.createdAt.toDate().toLocaleDateString("en-IN"):"Recent"})]},c.id)})})]})]})]})}function Me({columns:t,data:e,onEdit:n,onDelete:s,onView:i,onAdd:a,addLabel:o="Add New",title:c,renderActions:l,extraHeaderContent:d}){const[u,h]=p.useState(""),[g,m]=p.useState(""),[x,N]=p.useState("asc"),[j,y]=p.useState(1),[v,k]=p.useState([]),f=10,E=w=>{g===w?N(A=>A==="asc"?"desc":"asc"):(m(w),N("asc"))},P=e.filter(w=>t.some(A=>{const _e=A.accessor?w[A.accessor]:"";return String(_e||"").toLowerCase().includes(u.toLowerCase())})),H=[...P].sort((w,A)=>{if(!g)return 0;const _e=w[g]||"",Ir=A[g]||"";return x==="asc"?String(_e).localeCompare(String(Ir)):String(Ir).localeCompare(String(_e))}),W=Math.ceil(H.length/f),M=H.slice((j-1)*f,j*f),Lt=w=>k(A=>A.includes(w)?A.filter(_e=>_e!==w):[...A,w]),As=()=>k(w=>w.length===M.length?[]:M.map(A=>A.id));return r.jsxs("div",{className:"data-table-wrapper",children:[r.jsxs("div",{className:"data-table-header",children:[r.jsxs("div",{className:"d-flex align-items-center gap-3 flex-wrap",children:[c&&r.jsx("h3",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.1rem",color:"var(--primary-dark)",margin:0},children:c}),v.length>0&&r.jsxs("button",{onClick:()=>{v.forEach(w=>s&&s(w)),k([])},style:{display:"flex",alignItems:"center",gap:"0.35rem",padding:"0.35rem 0.875rem",background:"#fee2e2",color:"#e11d48",border:"none",borderRadius:"var(--radius)",fontSize:"0.8rem",fontWeight:600,cursor:"pointer"},children:[r.jsx(gi,{size:13})," Delete (",v.length,")"]}),d]}),r.jsxs("div",{className:"d-flex gap-2 align-items-center flex-wrap",children:[r.jsxs("div",{className:"search-input-admin",children:[r.jsx(yn,{size:14,color:"var(--text-light)"}),r.jsx("input",{value:u,onChange:w=>{h(w.target.value),y(1)},placeholder:"Search..."})]}),a&&r.jsxs("button",{onClick:a,className:"btn-primary-custom",style:{padding:"0.5rem 1rem",fontSize:"0.8rem"},children:["+ ",o]})]})]}),r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{width:40},children:r.jsx("input",{type:"checkbox",checked:v.length===M.length&&M.length>0,onChange:As})}),t.map(w=>r.jsx("th",{onClick:()=>w.sortable!==!1&&E(w.accessor||w.key),style:{cursor:w.sortable===!1?"default":"pointer",userSelect:"none"},children:r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[w.label,g===(w.accessor||w.key)&&(x==="asc"?r.jsx(Ii,{size:12}):r.jsx(_n,{size:12}))]})},w.key)),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:M.length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:t.length+2,style:{textAlign:"center",padding:"3rem",color:"var(--text-light)"},children:"No records found."})}):M.map(w=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("input",{type:"checkbox",checked:v.includes(w.id),onChange:()=>Lt(w.id)})}),t.map(A=>r.jsx("td",{children:A.render?A.render(w):w[A.accessor]||"—"},A.key)),r.jsx("td",{children:r.jsx("div",{style:{display:"flex",gap:"0.25rem"},children:l?l(w):r.jsxs(r.Fragment,{children:[i&&r.jsx("button",{className:"action-btn view",onClick:()=>i(w),title:"View",children:r.jsxs("svg",{width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[r.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),r.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),n&&r.jsx("button",{className:"action-btn edit",onClick:()=>n(w),title:"Edit",children:r.jsxs("svg",{width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[r.jsx("path",{d:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"}),r.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),s&&r.jsx("button",{className:"action-btn delete",onClick:()=>{window.confirm("Delete this record?")&&s(w.id)},title:"Delete",children:r.jsxs("svg",{width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[r.jsx("polyline",{points:"3 6 5 6 21 6"}),r.jsx("path",{d:"M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"})]})})]})})})]},w.id))})]})}),r.jsxs("div",{className:"table-pagination",children:[r.jsxs("span",{children:["Showing ",Math.min((j-1)*f+1,P.length),"–",Math.min(j*f,P.length)," of ",P.length," records"]}),r.jsxs("div",{className:"pagination-btns",children:[r.jsx("button",{className:"page-btn",onClick:()=>y(w=>Math.max(1,w-1)),disabled:j===1,children:r.jsx(Ei,{size:13})}),Array.from({length:Math.min(W,5)},(w,A)=>A+1).map(w=>r.jsx("button",{className:`page-btn ${j===w?"active":""}`,onClick:()=>y(w),children:w},w)),r.jsx("button",{className:"page-btn",onClick:()=>y(w=>Math.min(W,w+1)),disabled:j===W||W===0,children:r.jsx(Ti,{size:13})})]})]})]})}function rt({show:t,onClose:e,title:n,onSubmit:s,loading:i,children:a}){return t?r.jsx("div",{className:"modal-overlay",onClick:e,children:r.jsxs("div",{className:"modal-box",onClick:o=>o.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("div",{className:"modal-title",children:n}),r.jsx("button",{onClick:e,style:{background:"none",border:"none",cursor:"pointer",padding:4,color:"var(--text-mid)",borderRadius:6},children:r.jsx(Ve,{size:20})})]}),r.jsxs("form",{onSubmit:s,children:[r.jsx("div",{className:"modal-body",children:a}),r.jsxs("div",{className:"modal-footer",children:[r.jsx("button",{type:"button",onClick:e,className:"btn-outline-custom",style:{padding:"0.6rem 1.25rem",fontSize:"0.85rem"},children:"Cancel"}),r.jsx("button",{type:"submit",className:"btn-primary-custom",style:{padding:"0.6rem 1.25rem",fontSize:"0.85rem"},disabled:i,children:i?"Saving...":"Save"})]})]})]})}):null}function Ot({label:t,required:e,children:n}){return r.jsxs("div",{style:{marginBottom:"1.25rem"},children:[r.jsxs("label",{className:"form-label-custom",children:[t," ",e&&r.jsx("span",{style:{color:"#e11d48"},children:"*"})]}),n]})}function O({label:t,required:e,type:n="text",...s}){return r.jsx(Ot,{label:t,required:e,children:r.jsx("input",{type:n,className:"form-control-custom",required:e,...s})})}function Sr({label:t,required:e,rows:n=4,...s}){return r.jsx(Ot,{label:t,required:e,children:r.jsx("textarea",{className:"form-control-custom",rows:n,required:e,style:{resize:"vertical"},...s})})}function qe({label:t,required:e,options:n,...s}){return r.jsx(Ot,{label:t,required:e,children:r.jsxs("select",{className:"form-control-custom",required:e,...s,children:[r.jsx("option",{value:"",children:"Select..."}),n.map(i=>r.jsx("option",{value:i.value,children:i.label},i.value))]})})}function dd(){const[t,e]=p.useState([]),[n,s]=p.useState(!1),[i,a]=p.useState(null),[o,c]=p.useState({name:"",slug:"",description:""}),[l,d]=p.useState(!1),u=()=>Et().then(e).catch(()=>{});p.useEffect(()=>{u()},[]);const h=y=>c(v=>({...v,[y.target.name]:y.target.value})),g=()=>{a(null),c({name:"",slug:"",description:""}),s(!0)},m=y=>{a(y),c({name:y.name,slug:y.slug,description:y.description||""}),s(!0)},x=async y=>{y.preventDefault(),d(!0);try{i?await hc(i.id,o):await uc(o),u(),s(!1)}catch{}finally{d(!1)}},N=async y=>{await mc(y),u()},j=[{key:"name",label:"Name",accessor:"name",render:y=>r.jsx("strong",{children:y.name})},{key:"slug",label:"Slug",accessor:"slug",render:y=>r.jsx("code",{style:{fontSize:"0.8rem",background:"#f3f4f6",padding:"2px 6px",borderRadius:4},children:y.slug})},{key:"description",label:"Description",accessor:"description",sortable:!1,render:y=>r.jsx("span",{style:{color:"var(--text-mid)",fontSize:"0.85rem"},children:(y.description||"").substring(0,50)||"—"})}];return r.jsxs("div",{children:[r.jsx("div",{className:"admin-page-title mb-4",children:"Categories"}),r.jsx(Me,{columns:j,data:t,onAdd:g,addLabel:"Add Category",onEdit:m,onDelete:N,title:`${t.length} Categories`}),r.jsxs(rt,{show:n,onClose:()=>s(!1),title:i?"Edit Category":"Add Category",onSubmit:x,loading:l,children:[r.jsx(O,{label:"Category Name",name:"name",value:o.name,onChange:h,required:!0,placeholder:"e.g. Kraft Paper"}),r.jsx(O,{label:"Slug",name:"slug",value:o.slug,onChange:h,required:!0,placeholder:"e.g. kraft-paper"}),r.jsx(Sr,{label:"Description",name:"description",value:o.description,onChange:h,rows:3,placeholder:"Short description..."})]})]})}const ud=(t,e="general",n)=>new Promise((s,i)=>{const a=`${Date.now()}-${t.name.replace(/\s+/g,"-")}`,o=Ha(lc,`pant-krupa/${e}/${a}`),c=za(o,t);c.on("state_changed",l=>{const d=Math.round(l.bytesTransferred/l.totalBytes*100);n&&n(d)},l=>i(l),async()=>{const l=await Wa(c.snapshot.ref);s(l)})});function Nr({folder:t="general",value:e,onChange:n,label:s="Image"}){const[i,a]=p.useState(!1),[o,c]=p.useState(0),[l,d]=p.useState(""),u=async m=>{const x=m.target.files[0];if(!x)return;const N=URL.createObjectURL(x);d(N),a(!0),c(0);try{const j=await ud(x,t,y=>c(y));n(j),d("")}catch(j){console.error("Upload failed:",j),alert("Image upload failed. Check Firebase Storage rules."),d("")}finally{a(!1)}},h=()=>{n(""),d("")},g=l||e;return r.jsxs("div",{style:{marginBottom:"1.25rem"},children:[r.jsx("label",{style:{display:"block",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-mid)",marginBottom:"0.5rem"},children:s}),g?r.jsxs("div",{style:{position:"relative",display:"inline-block",width:"100%"},children:[r.jsx("img",{src:g,alt:"Preview",style:{width:"100%",maxHeight:180,objectFit:"cover",borderRadius:8,border:"1px solid var(--border)",display:"block"}}),i&&r.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.55)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[r.jsxs("div",{style:{color:"#fff",fontSize:"0.9rem",fontWeight:700},children:[o,"%"]}),r.jsx("div",{style:{width:"60%",height:5,background:"rgba(255,255,255,0.3)",borderRadius:3},children:r.jsx("div",{style:{width:`${o}%`,height:"100%",background:"var(--accent)",borderRadius:3,transition:"width 0.2s"}})}),r.jsx("div",{style:{color:"rgba(255,255,255,0.7)",fontSize:"0.75rem"},children:"Uploading..."})]}),!i&&r.jsx("button",{type:"button",onClick:h,style:{position:"absolute",top:6,right:6,width:26,height:26,background:"#e11d48",border:"none",borderRadius:"50%",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Ve,{size:13})})]}):r.jsxs("label",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"0.5rem",padding:"2rem",border:"2px dashed var(--border)",borderRadius:8,cursor:"pointer",background:"#fafafa",transition:"all 0.2s ease"},onMouseEnter:m=>m.currentTarget.style.borderColor="var(--primary)",onMouseLeave:m=>m.currentTarget.style.borderColor="var(--border)",children:[r.jsx(fi,{size:24,color:"var(--text-light)"}),r.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-mid)",fontWeight:500},children:"Click to upload image"}),r.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-light)"},children:"JPG, PNG, WEBP up to 5MB"}),r.jsx("input",{type:"file",accept:"image/*",onChange:u,style:{display:"none"}})]})]})}const Wt={name:"",slug:"",category:"",gsm:"",width:"",priceRange:"",description:"",applications:"",images:[],featured:!1};function hd(){var k;const[t,e]=p.useState([]),[n,s]=p.useState([]),[i,a]=p.useState(!1),[o,c]=p.useState(null),[l,d]=p.useState(Wt),[u,h]=p.useState(!1),g=()=>{Ct().then(e),Et().then(s)};p.useEffect(()=>{g()},[]);const m=f=>{const E=f.target.type==="checkbox"?f.target.checked:f.target.value;d(P=>({...P,[f.target.name]:E}))},x=()=>{c(null),d(Wt),a(!0)},N=f=>{c(f),d({...Wt,...f,applications:Array.isArray(f.applications)?f.applications.join(", "):f.applications||"",images:f.images||[]}),a(!0)},j=async f=>{f.preventDefault(),h(!0);try{const E={...l,applications:l.applications.split(",").map(P=>P.trim()).filter(Boolean),featured:!!l.featured,images:l.images||[]};o?await Cc(o.id,E):await Ec(E),g(),a(!1)}catch{}finally{h(!1)}},y=async f=>{await Pc(f),g()},v=[{key:"image",label:"Image",sortable:!1,render:f=>{var E;return(E=f.images)!=null&&E[0]?r.jsx("img",{src:f.images[0],alt:"",className:"table-thumb"}):r.jsx("div",{className:"table-thumb",style:{display:"flex",alignItems:"center",justifyContent:"center",background:"var(--cream)",color:"var(--text-light)"},children:r.jsx(ge,{})})}},{key:"name",label:"Product Name",accessor:"name",render:f=>r.jsx("strong",{children:f.name})},{key:"category",label:"Category",accessor:"category"},{key:"gsm",label:"GSM",accessor:"gsm"},{key:"featured",label:"Featured",accessor:"featured",render:f=>r.jsx("span",{className:`badge-status ${f.featured?"badge-active":"badge-inactive"}`,children:f.featured?"Yes":"No"})}];return r.jsxs("div",{children:[r.jsx("div",{className:"admin-page-title mb-4",children:"Products"}),r.jsx(Me,{columns:v,data:t,onAdd:x,addLabel:"Add Product",onEdit:N,onDelete:y,title:`${t.length} Products`}),r.jsx(rt,{show:i,onClose:()=>a(!1),title:o?"Edit Product":"Add Product",onSubmit:j,loading:u,children:r.jsxs("div",{className:"row g-3",children:[r.jsx("div",{className:"col-6",children:r.jsx(O,{label:"Product Name",name:"name",value:l.name,onChange:m,required:!0,placeholder:"e.g. Kraft Paper Roll"})}),r.jsx("div",{className:"col-6",children:r.jsx(O,{label:"Slug",name:"slug",value:l.slug,onChange:m,required:!0,placeholder:"e.g. kraft-paper-roll"})}),r.jsx("div",{className:"col-6",children:r.jsx(qe,{label:"Category",name:"category",value:l.category,onChange:m,options:[...n.map(f=>({value:f.name,label:f.name})),...["Kraft Paper","Mill Board","Duplex Board","Grey Board","Packing Board"].map(f=>({value:f,label:f}))].filter((f,E,P)=>P.findIndex(H=>H.value===f.value)===E)})}),r.jsx("div",{className:"col-4",children:r.jsx(O,{label:"GSM Range",name:"gsm",value:l.gsm,onChange:m,placeholder:"e.g. 70-200"})}),r.jsx("div",{className:"col-4",children:r.jsx(O,{label:"Width",name:"width",value:l.width,onChange:m,placeholder:"e.g. 18-72 inch"})}),r.jsx("div",{className:"col-4",children:r.jsx(O,{label:"Price Range (₹/kg)",name:"priceRange",value:l.priceRange,onChange:m,placeholder:"e.g. ₹45-60/kg"})}),r.jsx("div",{className:"col-12",children:r.jsx(Nr,{folder:"products",label:"Product Image",value:((k=l.images)==null?void 0:k[0])||"",onChange:f=>d(E=>({...E,images:f?[f]:[]}))})}),r.jsx("div",{className:"col-12",children:r.jsx(Sr,{label:"Description",name:"description",value:l.description,onChange:m,rows:3})}),r.jsx("div",{className:"col-12",children:r.jsx(O,{label:"Applications (comma separated)",name:"applications",value:l.applications,onChange:m,placeholder:"e.g. Packaging, Wrapping, Bags"})}),r.jsx("div",{className:"col-12",children:r.jsx(Ot,{label:"Featured",children:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer",fontFamily:"var(--ff-body)",fontSize:"0.9rem"},children:[r.jsx("input",{type:"checkbox",name:"featured",checked:l.featured,onChange:m}),"Show as featured product on homepage"]})})})]})})]})}const Ht={title:"",slug:"",author:"Admin",content:"",tags:"",status:"draft",featuredImage:""},md=[{value:"draft",label:"Draft"},{value:"published",label:"Published"},{value:"unpublished",label:"Unpublished"}];function pd(){const[t,e]=p.useState([]),[n,s]=p.useState(!1),[i,a]=p.useState(null),[o,c]=p.useState(Ht),[l,d]=p.useState(!1),u=()=>Rt().then(e).catch(()=>{});p.useEffect(()=>{u()},[]);const h=v=>c(k=>({...k,[v.target.name]:v.target.value})),g=()=>{a(null),c(Ht),s(!0)},m=v=>{a(v),c({...Ht,...v,tags:Array.isArray(v.tags)?v.tags.join(", "):v.tags||""}),s(!0)},x=async v=>{v.preventDefault(),d(!0);try{const k={...o,tags:o.tags.split(",").map(f=>f.trim()).filter(Boolean)};i?await nn(i.id,k):await zc(k),u(),s(!1)}catch{}finally{d(!1)}},N=async v=>{await Wc(v),u()},j=async(v,k)=>{await nn(v.id,{status:k}),u()},y=[{key:"title",label:"Title",accessor:"title",render:v=>r.jsx("strong",{style:{fontSize:"0.88rem"},children:v.title})},{key:"author",label:"Author",accessor:"author"},{key:"status",label:"Status",accessor:"status",render:v=>r.jsx("span",{className:`badge-status badge-${v.status}`,children:v.status})},{key:"date",label:"Date",accessor:"createdAt",render:v=>{var k;return r.jsx("span",{style:{color:"var(--text-light)",fontSize:"0.82rem"},children:(k=v.createdAt)!=null&&k.toDate?v.createdAt.toDate().toLocaleDateString("en-IN"):"—"})}}];return r.jsxs("div",{children:[r.jsx("div",{className:"admin-page-title mb-4",children:"Blog Management"}),r.jsx(Me,{columns:y,data:t,onAdd:g,addLabel:"New Post",onEdit:m,onDelete:N,title:`${t.length} Posts`,renderActions:v=>r.jsxs("div",{style:{display:"flex",gap:"0.25rem",flexWrap:"wrap"},children:[r.jsx("button",{className:"action-btn edit",onClick:()=>m(v),title:"Edit",children:"✏️"}),v.status!=="published"&&r.jsx("button",{onClick:()=>j(v,"published"),title:"Publish",style:{fontSize:"0.7rem",padding:"2px 6px",background:"#d1fae5",color:"#065f46",border:"none",borderRadius:4,cursor:"pointer",fontWeight:600},children:"Publish"}),v.status==="published"&&r.jsx("button",{onClick:()=>j(v,"unpublished"),title:"Unpublish",style:{fontSize:"0.7rem",padding:"2px 6px",background:"#fef3c7",color:"#92400e",border:"none",borderRadius:4,cursor:"pointer",fontWeight:600},children:"Unpublish"}),r.jsx("button",{className:"action-btn delete",onClick:()=>{window.confirm("Delete?")&&N(v.id)},title:"Delete",children:"🗑"})]})}),r.jsxs(rt,{show:n,onClose:()=>s(!1),title:i?"Edit Post":"New Blog Post",onSubmit:x,loading:l,children:[r.jsx(O,{label:"Title",name:"title",value:o.title,onChange:h,required:!0,placeholder:"Blog post title"}),r.jsx(O,{label:"Slug",name:"slug",value:o.slug,onChange:h,required:!0,placeholder:"e.g. my-blog-post"}),r.jsxs("div",{className:"row g-3",children:[r.jsx("div",{className:"col-6",children:r.jsx(O,{label:"Author",name:"author",value:o.author,onChange:h})}),r.jsx("div",{className:"col-6",children:r.jsx(qe,{label:"Status",name:"status",value:o.status,onChange:h,options:md})})]}),r.jsx(Nr,{folder:"blog",label:"Featured Image",value:o.featuredImage,onChange:v=>c(k=>({...k,featuredImage:v}))}),r.jsx(Sr,{label:"Content",name:"content",value:o.content,onChange:h,rows:8,placeholder:"Write your blog content here..."}),r.jsx(O,{label:"Tags (comma separated)",name:"tags",value:o.tags,onChange:h,placeholder:"e.g. Packaging, GSM, Tips"})]})]})}const fd=[{value:"Products",label:"Products"},{value:"Manufacturing",label:"Manufacturing"},{value:"Facility",label:"Facility"},{value:"Quality",label:"Quality"}];function gd(){const[t,e]=p.useState([]),[n,s]=p.useState(!1),[i,a]=p.useState({title:"",category:"",image:""}),[o,c]=p.useState(!1),l=()=>kr().then(e).catch(()=>{});p.useEffect(()=>{l()},[]);const d=m=>a(x=>({...x,[m.target.name]:m.target.value})),u=async m=>{m.preventDefault(),c(!0);try{await pc(i),l(),s(!1),a({title:"",category:"",image:""})}catch{}finally{c(!1)}},h=async m=>{await fc(m),l()},g=[{key:"preview",label:"Preview",sortable:!1,render:m=>m.image?r.jsx("img",{src:m.image,alt:m.title,className:"table-thumb"}):r.jsx("div",{className:"table-thumb",style:{display:"flex",alignItems:"center",justifyContent:"center",background:"var(--cream)",color:"var(--text-light)"},children:r.jsx(or,{})})},{key:"title",label:"Title",accessor:"title",render:m=>r.jsx("strong",{children:m.title})},{key:"category",label:"Category",accessor:"category"},{key:"date",label:"Uploaded",accessor:"createdAt",render:m=>{var x;return r.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-light)"},children:(x=m.createdAt)!=null&&x.toDate?m.createdAt.toDate().toLocaleDateString("en-IN"):"—"})}}];return r.jsxs("div",{children:[r.jsx("div",{className:"admin-page-title mb-4",children:"Gallery"}),r.jsxs("p",{style:{color:"var(--text-light)",fontSize:"0.85rem",marginBottom:"1.5rem"},children:["Upload images via ",r.jsx("strong",{children:"Cloudinary"})," (folder: ",r.jsx("code",{children:"pant-krupa/gallery"}),") then paste the URL below."]}),r.jsx(Me,{columns:g,data:t,onAdd:()=>s(!0),addLabel:"Add Image",onDelete:h,title:`${t.length} Images`}),r.jsxs(rt,{show:n,onClose:()=>s(!1),title:"Add Gallery Image",onSubmit:u,loading:o,children:[r.jsx(O,{label:"Image Title",name:"title",value:i.title,onChange:d,required:!0,placeholder:"e.g. Kraft Paper Production"}),r.jsx(qe,{label:"Category",name:"category",value:i.category,onChange:d,options:fd}),r.jsx(Nr,{folder:"gallery",label:"Gallery Image",value:i.image,onChange:m=>a(x=>({...x,image:m}))}),i.image&&r.jsx("div",{style:{marginTop:"0.75rem"},children:r.jsx("img",{src:i.image,alt:"Preview",style:{width:"100%",height:160,objectFit:"cover",borderRadius:"var(--radius)",border:"1px solid var(--border)"}})})]})]})}const qt={name:"",company:"",phone:"",email:"",city:"",state:"Maharashtra",address:"",status:"active"},yd=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}],vd=["Maharashtra","Gujarat","Karnataka","Goa","Madhya Pradesh","Rajasthan","Delhi","Other"].map(t=>({value:t,label:t}));function xd(){const[t,e]=p.useState([]),[n,s]=p.useState(!1),[i,a]=p.useState(null),[o,c]=p.useState(qt),[l,d]=p.useState(!1),u=()=>Ns().then(e).catch(()=>{});p.useEffect(()=>{u()},[]);const h=y=>c(v=>({...v,[y.target.name]:y.target.value})),g=()=>{a(null),c(qt),s(!0)},m=y=>{a(y),c({...qt,...y}),s(!0)},x=async y=>{y.preventDefault(),d(!0);try{i?await yc(i.id,o):await gc(o),u(),s(!1)}catch{}finally{d(!1)}},N=async y=>{await vc(y),u()},j=[{key:"name",label:"Dealer Name",accessor:"name",render:y=>r.jsx("strong",{children:y.name})},{key:"company",label:"Company",accessor:"company"},{key:"phone",label:"Phone",accessor:"phone"},{key:"city",label:"City",accessor:"city"},{key:"state",label:"State",accessor:"state"},{key:"status",label:"Status",accessor:"status",render:y=>r.jsx("span",{className:`badge-status badge-${y.status}`,children:y.status})}];return r.jsxs("div",{children:[r.jsx("div",{className:"admin-page-title mb-4",children:"Dealers"}),r.jsx(Me,{columns:j,data:t,onAdd:g,addLabel:"Add Dealer",onEdit:m,onDelete:N,title:`${t.length} Dealers`}),r.jsx(rt,{show:n,onClose:()=>s(!1),title:i?"Edit Dealer":"Add Dealer",onSubmit:x,loading:l,children:r.jsxs("div",{className:"row g-3",children:[r.jsx("div",{className:"col-6",children:r.jsx(O,{label:"Contact Name",name:"name",value:o.name,onChange:h,required:!0})}),r.jsx("div",{className:"col-6",children:r.jsx(O,{label:"Company Name",name:"company",value:o.company,onChange:h,required:!0})}),r.jsx("div",{className:"col-6",children:r.jsx(O,{label:"Phone",name:"phone",value:o.phone,onChange:h,required:!0})}),r.jsx("div",{className:"col-6",children:r.jsx(O,{label:"Email",name:"email",type:"email",value:o.email,onChange:h})}),r.jsx("div",{className:"col-6",children:r.jsx(O,{label:"City",name:"city",value:o.city,onChange:h})}),r.jsx("div",{className:"col-6",children:r.jsx(qe,{label:"State",name:"state",value:o.state,onChange:h,options:vd})}),r.jsx("div",{className:"col-12",children:r.jsx(O,{label:"Address",name:"address",value:o.address,onChange:h})}),r.jsx("div",{className:"col-6",children:r.jsx(qe,{label:"Status",name:"status",value:o.status,onChange:h,options:yd})})]})})]})}function bd(){var c;const[t,e]=p.useState([]),[n,s]=p.useState(null),i=()=>Ss().then(e).catch(()=>{});p.useEffect(()=>{i()},[]);const a=async l=>{await dc(l),i()},o=[{key:"name",label:"Name",accessor:"name",render:l=>r.jsx("strong",{children:l.name})},{key:"phone",label:"Phone",accessor:"phone"},{key:"email",label:"Email",accessor:"email",render:l=>r.jsx("span",{style:{color:"var(--text-mid)",fontSize:"0.85rem"},children:l.email||"—"})},{key:"product",label:"Product",accessor:"product",render:l=>l.product||"—"},{key:"message",label:"Message",sortable:!1,render:l=>r.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-mid)",maxWidth:200,display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l.message||"—"})},{key:"date",label:"Date",accessor:"createdAt",render:l=>{var d;return r.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-light)"},children:(d=l.createdAt)!=null&&d.toDate?l.createdAt.toDate().toLocaleDateString("en-IN"):"Recent"})}}];return r.jsxs("div",{children:[r.jsx("div",{className:"admin-page-title mb-4",children:"Enquiries"}),r.jsx(Me,{columns:o,data:t,onDelete:a,onView:l=>s(l),title:`${t.length} Enquiries`}),n&&r.jsx("div",{className:"modal-overlay",onClick:()=>s(null),children:r.jsxs("div",{className:"modal-box",onClick:l=>l.stopPropagation(),style:{maxWidth:480},children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("div",{className:"modal-title",children:"Enquiry Details"}),r.jsx("button",{onClick:()=>s(null),style:{background:"none",border:"none",cursor:"pointer",padding:4,color:"var(--text-mid)",borderRadius:6},children:r.jsx(Ve,{size:20})})]}),r.jsxs("div",{className:"modal-body",children:[[{label:"Name",value:n.name},{label:"Phone",value:n.phone},{label:"Email",value:n.email||"—"},{label:"Product",value:n.product||"—"},{label:"Date",value:(c=n.createdAt)!=null&&c.toDate?n.createdAt.toDate().toLocaleString("en-IN"):"Recent"}].map(l=>r.jsxs("div",{style:{display:"flex",marginBottom:"0.875rem",gap:"1rem"},children:[r.jsx("span",{style:{fontSize:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-light)",width:80,flexShrink:0,paddingTop:2},children:l.label}),r.jsx("span",{style:{fontSize:"0.9rem",color:"var(--text-dark)"},children:l.value})]},l.label)),n.message&&r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-light)",marginBottom:"0.5rem"},children:"Message"}),r.jsx("div",{style:{background:"var(--cream)",padding:"1rem",borderRadius:"var(--radius)",fontSize:"0.9rem",lineHeight:1.7,color:"var(--text-mid)"},children:n.message})]})]}),r.jsxs("div",{className:"modal-footer",children:[r.jsx("button",{onClick:()=>{window.confirm("Delete this enquiry?")&&(a(n.id),s(null))},style:{padding:"0.6rem 1.25rem",background:"#fee2e2",color:"#e11d48",border:"none",borderRadius:"var(--radius)",fontSize:"0.85rem",fontWeight:600,cursor:"pointer"},children:"Delete"}),r.jsx("button",{onClick:()=>s(null),className:"btn-primary-custom",style:{padding:"0.6rem 1.25rem",fontSize:"0.85rem"},children:"Close"})]})]})})]})}function _d(){var a;const{user:t,logout:e}=At(),[n,s]=p.useState(!1),i=async()=>{window.confirm("Sign out of the admin panel?")&&await e()};return r.jsxs("div",{className:"admin-layout",children:[r.jsx(od,{}),r.jsxs("main",{className:"admin-main",children:[r.jsxs("div",{className:"admin-topbar",children:[r.jsx("div",{className:"d-flex align-items-center gap-2",children:r.jsx("span",{style:{fontFamily:"var(--ff-body)",fontSize:"0.85rem",color:"var(--text-light)"},children:"Shri Pant Krupa Paper Board — Admin"})}),r.jsxs("div",{className:"d-flex align-items-center gap-3",children:[r.jsx("button",{style:{background:"none",border:"none",color:"var(--text-mid)",cursor:"pointer",fontSize:"1.1rem"},children:r.jsx(Ci,{})}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>s(o=>!o),style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"none",border:"1px solid var(--border)",borderRadius:8,padding:"0.4rem 0.75rem",cursor:"pointer",transition:"all 0.2s ease"},children:[r.jsx("div",{style:{width:28,height:28,background:"var(--primary)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"0.75rem"},children:r.jsx(sr,{size:13})}),r.jsx("span",{style:{fontSize:"0.82rem",fontWeight:500,color:"var(--text-dark)",maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:((a=t==null?void 0:t.email)==null?void 0:a.split("@")[0])||"Admin"})]}),n&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{position:"fixed",inset:0,zIndex:98},onClick:()=>s(!1)}),r.jsxs("div",{style:{position:"absolute",top:"calc(100% + 8px)",right:0,background:"#fff",border:"1px solid var(--border)",borderRadius:10,boxShadow:"var(--shadow-md)",minWidth:220,zIndex:99,overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"0.875rem 1rem",borderBottom:"1px solid var(--border)"},children:[r.jsx("div",{style:{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-light)",marginBottom:"0.25rem"},children:"Signed in as"}),r.jsx("div",{style:{fontSize:"0.88rem",color:"var(--text-dark)",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t==null?void 0:t.email})]}),r.jsxs("button",{onClick:i,style:{width:"100%",display:"flex",alignItems:"center",gap:"0.625rem",padding:"0.75rem 1rem",background:"none",border:"none",fontSize:"0.88rem",color:"#e11d48",cursor:"pointer",fontFamily:"var(--ff-body)",fontWeight:500,transition:"background 0.15s ease"},onMouseEnter:o=>o.currentTarget.style.background="#fff1f2",onMouseLeave:o=>o.currentTarget.style.background="none",children:[r.jsx(_i,{size:15})," Sign Out"]})]})]})]})]})]}),r.jsx("div",{className:"admin-content",children:r.jsxs(Zt,{children:[r.jsx(R,{path:"",element:r.jsx(cd,{})}),r.jsx(R,{path:"categories",element:r.jsx(dd,{})}),r.jsx(R,{path:"products",element:r.jsx(hd,{})}),r.jsx(R,{path:"blog",element:r.jsx(pd,{})}),r.jsx(R,{path:"gallery",element:r.jsx(gd,{})}),r.jsx(R,{path:"dealers",element:r.jsx(xd,{})}),r.jsx(R,{path:"enquiries",element:r.jsx(bd,{})}),r.jsx(R,{path:"*",element:r.jsx(Qt,{to:"/admin",replace:!0})})]})})]})]})}function jd(){return r.jsx(sd,{children:r.jsxs(Zt,{children:[r.jsx(R,{path:"login",element:r.jsx(wd,{})}),r.jsx(R,{path:"*",element:r.jsx(id,{children:r.jsx(_d,{})})})]})})}function wd(){const{user:t,loading:e}=At();return e?null:t?r.jsx(Qt,{to:"/admin",replace:!0}):r.jsx(ld,{})}function Y({children:t}){return r.jsxs(r.Fragment,{children:[r.jsx(xc,{}),r.jsx("main",{children:t}),r.jsx(jc,{}),r.jsx(kc,{})]})}function kd(){return r.jsxs(Zt,{children:[r.jsx(R,{path:"/admin/*",element:r.jsx(jd,{})}),r.jsx(R,{path:"/",element:r.jsx(Y,{children:r.jsx(qc,{})})}),r.jsx(R,{path:"/about",element:r.jsx(Y,{children:r.jsx(Gc,{})})}),r.jsx(R,{path:"/products",element:r.jsx(Y,{children:r.jsx(Vc,{})})}),r.jsx(R,{path:"/products/:slug",element:r.jsx(Y,{children:r.jsx(Kc,{})})}),r.jsx(R,{path:"/industries",element:r.jsx(Y,{children:r.jsx(Yc,{})})}),r.jsx(R,{path:"/blog",element:r.jsx(Y,{children:r.jsx(Jc,{})})}),r.jsx(R,{path:"/blog/:slug",element:r.jsx(Y,{children:r.jsx(Zc,{})})}),r.jsx(R,{path:"/gallery",element:r.jsx(Y,{children:r.jsx(td,{})})}),r.jsx(R,{path:"/contact",element:r.jsx(Y,{children:r.jsx(nd,{})})})]})}$t.createRoot(document.getElementById("root")).render(r.jsx(ue.StrictMode,{children:r.jsx(Ms,{children:r.jsx(kd,{})})}));

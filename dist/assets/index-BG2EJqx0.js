import{r as m,a as ei,R as se,L as _,N as ge,u as Dr,b as Ur,c as Br,d as Dt,e as Ut,f as A,B as ti}from"./vendor-BZne2Lg4.js";import{_ as Et,C as Pt,r as Je,S as je,a as O,F as ot,g as W,b as Bt,c as ri,d as Fr,i as lt,p as zr,e as ni,L as ii,f as Wr,h as si,j as ai,k as oi,E as Ft,l as li,m as Kr,n as R,o as ci,q as Re,s as di,t as Ct,u as ui,v as hi,w as Ne,x as Ae,y as mi,z as pi,A as gi,B as oe,D as C,G as ct,H as fi,I as ke,J as dt,K,M as we,N as H,O as zt,P as yi}from"./firebase-BFkD7f_E.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var Hr={exports:{}},ut={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=m,vi=Symbol.for("react.element"),bi=Symbol.for("react.fragment"),ji=Object.prototype.hasOwnProperty,ki=xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wi={key:!0,ref:!0,__self:!0,__source:!0};function Vr(r,e,n){var i,s={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ji.call(e,i)&&!wi.hasOwnProperty(i)&&(s[i]=e[i]);if(r&&r.defaultProps)for(i in e=r.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:vi,type:r,key:a,ref:o,props:s,_owner:ki.current}}ut.Fragment=bi;ut.jsx=Vr;ut.jsxs=Vr;Hr.exports=ut;var t=Hr.exports,Rt={},or=ei;Rt.createRoot=or.createRoot,Rt.hydrateRoot=or.hydrateRoot;var qr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lr=se.createContext&&se.createContext(qr),Si=["attr","size","title"];function _i(r,e){if(r==null)return{};var n,i,s=Ii(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(r,n)&&(s[n]=r[n])}return s}function Ii(r,e){if(r==null)return{};var n={};for(var i in r)if({}.hasOwnProperty.call(r,i)){if(e.indexOf(i)!==-1)continue;n[i]=r[i]}return n}function Qe(){return Qe=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},Qe.apply(null,arguments)}function cr(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),n.push.apply(n,i)}return n}function Xe(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?cr(Object(n),!0).forEach(function(i){Ni(r,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):cr(Object(n)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(n,i))})}return r}function Ni(r,e,n){return(e=Ai(e))in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function Ai(r){var e=Ti(r,"string");return typeof e=="symbol"?e:e+""}function Ti(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var i=n.call(r,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Gr(r){return r&&r.map((e,n)=>se.createElement(e.tag,Xe({key:n},e.attr),Gr(e.child)))}function j(r){return e=>se.createElement(Ei,Qe({attr:Xe({},r.attr)},e),Gr(r.child))}function Ei(r){var e=n=>{var{attr:i,size:s,title:a}=r,o=_i(r,Si),c=s||n.size||"1em",l;return n.className&&(l=n.className),r.className&&(l=(l?l+" ":"")+r.className),se.createElement("svg",Qe({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:Xe(Xe({color:r.color||n.color},n.style),r.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&se.createElement("title",null,a),r.children)};return lr!==void 0?se.createElement(lr.Consumer,null,n=>e(n)):e(qr)}function Pi(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]},{tag:"line",attr:{x1:"11",y1:"8",x2:"11",y2:"14"},child:[]},{tag:"line",attr:{x1:"8",y1:"11",x2:"14",y2:"11"},child:[]}]})(r)}function Ci(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(r)}function Le(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(r)}function Wt(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(r)}function Kt(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(r)}function Ri(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(r)}function $r(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"3",width:"15",height:"13"},child:[]},{tag:"polygon",attr:{points:"16 8 20 8 23 11 23 16 16 16 16 8"},child:[]},{tag:"circle",attr:{cx:"5.5",cy:"18.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"18.5",cy:"18.5",r:"2.5"},child:[]}]})(r)}function Li(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(r)}function Oi(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(r)}function ht(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(r)}function Mi(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(r)}function Yr(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(r)}function Jr(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(r)}function Qr(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(r)}function Di(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(r)}function Ht(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(r)}function X(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(r)}function Xr(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"5 9 2 12 5 15"},child:[]},{tag:"polyline",attr:{points:"9 5 12 2 15 5"},child:[]},{tag:"polyline",attr:{points:"15 19 12 22 9 19"},child:[]},{tag:"polyline",attr:{points:"19 9 22 12 19 15"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"22"},child:[]}]})(r)}function Ui(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(r)}function Vt(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(r)}function Oe(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(r)}function Bi(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(r)}function Fi(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(r)}function ce(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(r)}function qt(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"},child:[]},{tag:"polyline",attr:{points:"21 15 16 10 5 21"},child:[]}]})(r)}function Gt(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(r)}function zi(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(r)}function Zr(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(r)}function en(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(r)}function Wi(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(r)}function Ki(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(r)}function Hi(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(r)}function Vi(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(r)}function tn(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(r)}function rn(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"},child:[]}]})(r)}function nn(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(r)}function sn(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(r)}function an(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(r)}function on(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(r)}function qi(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(r)}function Gi(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(r)}function J(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(r)}function ln(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(r)}function $i(r){return j({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(r)}const Yi="/assets/sp_logo-CTs1-qW7.png";/**
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
 */const cn="firebasestorage.googleapis.com",Ji="storageBucket",Qi=2*60*1e3,Xi=10*60*1e3;/**
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
 */class V extends ot{constructor(e,n,i=0){super(wt(e),`Firebase Storage: ${n} (${wt(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,V.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wt(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var z;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(z||(z={}));function wt(r){return"storage/"+r}function Zi(){const r="An unknown error occurred, please check the error payload for server response.";return new V(z.UNKNOWN,r)}function es(){return new V(z.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ts(){return new V(z.CANCELED,"User canceled the upload/download.")}function rs(r){return new V(z.INVALID_URL,"Invalid URL '"+r+"'.")}function ns(r){return new V(z.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function dr(r){return new V(z.INVALID_ARGUMENT,r)}function dn(){return new V(z.APP_DELETED,"The Firebase app was deleted.")}function is(r){return new V(z.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class M{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=M.makeFromUrl(e,n)}catch{return new M(e,"")}if(i.path==="")return i;throw ns(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function a(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(v){v.path_=decodeURIComponent(v.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${g}`,"i"),y={bucket:1,path:3},S=n===cn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",f=new RegExp(`^https?://${S}/${s}/${w}`,"i"),I=[{regex:c,indices:l,postModify:a},{regex:p,indices:y,postModify:d},{regex:f,indices:{bucket:1,path:2},postModify:d}];for(let v=0;v<I.length;v++){const P=I[v],L=P.regex.exec(e);if(L){const Ke=L[P.indices.bucket];let Z=L[P.indices.path];Z||(Z=""),i=new M(Ke,Z),P.postModify(i);break}}if(i==null)throw rs(e);return i}}class ss{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function as(r,e,n){let i=1,s=null,a=null,o=!1,c=0;function l(){return c===2}let d=!1;function u(...w){d||(d=!0,e.apply(null,w))}function h(w){s=setTimeout(()=>{s=null,r(p,l())},w)}function g(){a&&clearTimeout(a)}function p(w,...f){if(d){g();return}if(w){g(),u.call(null,w,...f);return}if(l()||o){g(),u.call(null,w,...f);return}i<64&&(i*=2);let I;c===1?(c=2,I=0):I=(i+Math.random())*1e3,h(I)}let y=!1;function S(w){y||(y=!0,g(),!d&&(s!==null?(w||(c=2),clearTimeout(s),h(0)):w||(c=1)))}return h(0),a=setTimeout(()=>{o=!0,S(!0)},n),S}function os(r){r(!1)}/**
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
 */function ls(r){return r!==void 0}function ur(r,e,n,i){if(i<e)throw dr(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>n)throw dr(`Invalid value for '${r}'. Expected ${n} or less.`)}function cs(r){const e=encodeURIComponent;let n="?";for(const i in r)if(r.hasOwnProperty(i)){const s=e(i)+"="+e(r[i]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ze;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Ze||(Ze={}));/**
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
 */function ds(r,e){const n=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,a=e.indexOf(r)!==-1;return n||s||a}/**
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
 */class us{constructor(e,n,i,s,a,o,c,l,d,u,h,g=!0,p=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=u,this.connectionFactory_=h,this.retry=g,this.isUsingEmulator=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,S)=>{this.resolve_=y,this.reject_=S,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new He(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&a.addUploadProgressListener(o),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(o),this.pendingConnection_=null;const c=a.getErrorCode()===Ze.NO_ERROR,l=a.getStatus();if(!c||ds(l,this.additionalRetryCodes_)&&this.retry){const u=a.getErrorCode()===Ze.ABORT;i(!1,new He(!1,null,u));return}const d=this.successCodes_.indexOf(l)!==-1;i(!0,new He(d,a))})},n=(i,s)=>{const a=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());ls(l)?a(l):a()}catch(l){o(l)}else if(c!==null){const l=Zi();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?dn():ts();o(l)}else{const l=es();o(l)}};this.canceled_?n(!1,new He(!1,null,!0)):this.backoffId_=as(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&os(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class He{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function hs(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function ms(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ps(r,e){e&&(r["X-Firebase-GMPID"]=e)}function gs(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function fs(r,e,n,i,s,a,o=!0,c=!1){const l=cs(r.urlParams),d=r.url+l,u=Object.assign({},r.headers);return ps(u,e),hs(u,n),ms(u,a),gs(u,i),new us(d,r.method,u,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o,c)}/**
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
 */function ys(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function xs(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class et{constructor(e,n){this._service=e,n instanceof M?this._location=n:this._location=M.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new et(e,n)}get root(){const e=new M(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xs(this._location.path)}get storage(){return this._service}get parent(){const e=ys(this._location.path);if(e===null)return null;const n=new M(this._location.bucket,e);return new et(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw is(e)}}function hr(r,e){const n=e==null?void 0:e[Ji];return n==null?null:M.makeFromBucketSpec(n,r)}function vs(r,e,n,i={}){r.host=`${e}:${n}`;const s=lt(e);s&&zr(`https://${r.host}/b`),r._isUsingEmulator=!0,r._protocol=s?"https":"http";const{mockUserToken:a}=i;a&&(r._overrideAuthToken=typeof a=="string"?a:ni(a,r.app.options.projectId))}class bs{constructor(e,n,i,s,a,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=a,this._isUsingEmulator=o,this._bucket=null,this._host=cn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qi,this._maxUploadRetryTime=Xi,this._requests=new Set,s!=null?this._bucket=M.makeFromBucketSpec(s,this._host):this._bucket=hr(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=M.makeFromBucketSpec(this._url,e):this._bucket=hr(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ur("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ur("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(O(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new et(this,e)}_makeRequest(e,n,i,s,a=!0){if(this._deleted)return new ss(dn());{const o=fs(e,this._appId,i,s,n,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const mr="@firebase/storage",pr="0.14.2";/**
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
 */const un="storage";function js(r=Fr(),e){r=W(r);const i=Bt(r,un).getImmediate({identifier:e}),s=ri("storage");return s&&ks(i,...s),i}function ks(r,e,n,i={}){vs(r,e,n,i)}function ws(r,{instanceIdentifier:e}){const n=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new bs(n,i,s,e,je)}function Ss(){Et(new Pt(un,ws,"PUBLIC").setMultipleInstances(!0)),Je(mr,pr,""),Je(mr,pr,"esm2020")}Ss();function hn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _s=hn,mn=new Ft("auth","Firebase",hn());/**
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
 */const tt=new ii("@firebase/auth");function Is(r,...e){tt.logLevel<=Kr.WARN&&tt.warn(`Auth (${je}): ${r}`,...e)}function qe(r,...e){tt.logLevel<=Kr.ERROR&&tt.error(`Auth (${je}): ${r}`,...e)}/**
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
 */function U(r,...e){throw $t(r,...e)}function B(r,...e){return $t(r,...e)}function pn(r,e,n){const i={..._s(),[e]:n};return new Ft("auth","Firebase",i).create(e,{appName:r.name})}function ae(r){return pn(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $t(r,...e){if(typeof r!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(n,...i)}return mn.create(r,...e)}function b(r,e,...n){if(!r)throw $t(e,...n)}function $(r){const e="INTERNAL ASSERTION FAILED: "+r;throw qe(e),new Error(e)}function Q(r,e){r||$(e)}/**
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
 */function Lt(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function Ns(){return gr()==="http:"||gr()==="https:"}function gr(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function As(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ns()||oi()||"connection"in navigator)?navigator.onLine:!0}function Ts(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Me{constructor(e,n){this.shortDelay=e,this.longDelay=n,Q(n>e,"Short delay should be less than long delay!"),this.isMobile=si()||ai()}get(){return As()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yt(r,e){Q(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gn{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Es={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ps=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cs=new Me(3e4,6e4);function ue(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function le(r,e,n,i,s={}){return fn(r,s,async()=>{let a={},o={};i&&(e==="GET"?o=i:a={body:JSON.stringify(i)});const c=Re({key:r.config.apiKey,...o}).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const d={method:e,headers:l,...a};return mi()||(d.referrerPolicy="no-referrer"),r.emulatorConfig&&lt(r.emulatorConfig.host)&&(d.credentials="include"),gn.fetch()(await yn(r,r.config.apiHost,n,c),d)})}async function fn(r,e,n){r._canInitEmulator=!1;const i={...Es,...e};try{const s=new Ls(r),a=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Ve(r,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const c=a.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ve(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ve(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ve(r,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw pn(r,u,d);U(r,u)}}catch(s){if(s instanceof ot)throw s;U(r,"network-request-failed",{message:String(s)})}}async function mt(r,e,n,i,s={}){const a=await le(r,e,n,i,s);return"mfaPendingCredential"in a&&U(r,"multi-factor-auth-required",{_serverResponse:a}),a}async function yn(r,e,n,i){const s=`${e}${n}?${i}`,a=r,o=a.config.emulator?Yt(r.config,s):`${r.config.apiScheme}://${s}`;return Ps.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(o).toString():o}function Rs(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ls{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(B(this.auth,"network-request-failed")),Cs.get())})}}function Ve(r,e,n){const i={appName:r.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=B(r,e,i);return s.customData._tokenResponse=n,s}function fr(r){return r!==void 0&&r.enterprise!==void 0}class Os{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Rs(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ms(r,e){return le(r,"GET","/v2/recaptchaConfig",ue(r,e))}/**
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
 */async function Ds(r,e){return le(r,"POST","/v1/accounts:delete",e)}async function rt(r,e){return le(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Te(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Us(r,e=!1){const n=W(r),i=await n.getIdToken(e),s=Jt(i);b(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:s,token:i,authTime:Te(St(s.auth_time)),issuedAtTime:Te(St(s.iat)),expirationTime:Te(St(s.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function St(r){return Number(r)*1e3}function Jt(r){const[e,n,i]=r.split(".");if(e===void 0||n===void 0||i===void 0)return qe("JWT malformed, contained fewer than 3 sections"),null;try{const s=ci(n);return s?JSON.parse(s):(qe("Failed to decode base64 JWT payload"),null)}catch(s){return qe("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yr(r){const e=Jt(r);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ee(r,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ot&&Bs(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function Bs({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Fs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ot{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Te(this.lastLoginAt),this.creationTime=Te(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nt(r){var h;const e=r.auth,n=await r.getIdToken(),i=await Ee(r,rt(e,{idToken:n}));b(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=(h=s.providerUserInfo)!=null&&h.length?xn(s.providerUserInfo):[],o=Ws(r.providerData,a),c=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),d=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ot(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(r,u)}async function zs(r){const e=W(r);await nt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ws(r,e){return[...r.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function xn(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Ks(r,e){const n=await fn(r,{},async()=>{const i=Re({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=r.config,o=await yn(r,s,"/v1/token",`key=${a}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return r.emulatorConfig&&lt(r.emulatorConfig.host)&&(l.credentials="include"),gn.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Hs(r,e){return le(r,"POST","/v2/accounts:revokeToken",ue(r,e))}/**
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
 */class ye{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=yr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:a}=await Ks(e,n);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:a}=n,o=new ye;return i&&(b(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(b(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),a&&(b(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ye,this.toJSON())}_performRefresh(){return $("not implemented")}}/**
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
 */function ee(r,e){b(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class D{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Fs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ot(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ee(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Us(this,e)}reload(){return zs(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new D({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await nt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(O(this.auth.app))return Promise.reject(ae(this.auth));const e=await this.getIdToken();return await Ee(this,Ds(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,a=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,d=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:g,isAnonymous:p,providerData:y,stsTokenManager:S}=n;b(h&&S,e,"internal-error");const w=ye.fromJSON(this.name,S);b(typeof h=="string",e,"internal-error"),ee(i,e.name),ee(s,e.name),b(typeof g=="boolean",e,"internal-error"),b(typeof p=="boolean",e,"internal-error"),ee(a,e.name),ee(o,e.name),ee(c,e.name),ee(l,e.name),ee(d,e.name),ee(u,e.name);const f=new D({uid:h,auth:e,email:s,emailVerified:g,displayName:i,isAnonymous:p,photoURL:o,phoneNumber:a,tenantId:c,stsTokenManager:w,createdAt:d,lastLoginAt:u});return y&&Array.isArray(y)&&(f.providerData=y.map(x=>({...x}))),l&&(f._redirectEventId=l),f}static async _fromIdTokenResponse(e,n,i=!1){const s=new ye;s.updateFromServerResponse(n);const a=new D({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await nt(a),a}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];b(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?xn(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),c=new ye;c.updateFromIdToken(i);const l=new D({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ot(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(l,d),l}}/**
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
 */const xr=new Map;function Y(r){Q(r instanceof Function,"Expected a class definition");let e=xr.get(r);return e?(Q(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,xr.set(r,e),e)}/**
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
 */class vn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vn.type="NONE";const vr=vn;/**
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
 */function Ge(r,e,n){return`firebase:${r}:${e}:${n}`}class xe{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=Ge(this.userKey,s.apiKey,a),this.fullPersistenceKey=Ge("persistence",s.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await rt(this.auth,{idToken:e}).catch(()=>{});return n?D._fromGetAccountInfoResponse(this.auth,n,e):null}return D._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new xe(Y(vr),e,i);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=s[0]||Y(vr);const o=Ge(i,e.config.apiKey,e.name);let c=null;for(const d of n)try{const u=await d._get(o);if(u){let h;if(typeof u=="string"){const g=await rt(e,{idToken:u}).catch(()=>{});if(!g)break;h=await D._fromGetAccountInfoResponse(e,g,u)}else h=D._fromJSON(e,u);d!==a&&(c=h),a=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new xe(a,e,i):(a=l[0],c&&await a._set(o,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new xe(a,e,i))}}/**
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
 */function br(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_n(e))return"Blackberry";if(In(e))return"Webos";if(jn(e))return"Safari";if((e.includes("chrome/")||kn(e))&&!e.includes("edge/"))return"Chrome";if(Sn(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function bn(r=R()){return/firefox\//i.test(r)}function jn(r=R()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kn(r=R()){return/crios\//i.test(r)}function wn(r=R()){return/iemobile/i.test(r)}function Sn(r=R()){return/android/i.test(r)}function _n(r=R()){return/blackberry/i.test(r)}function In(r=R()){return/webos/i.test(r)}function Qt(r=R()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Vs(r=R()){var e;return Qt(r)&&!!((e=window.navigator)!=null&&e.standalone)}function qs(){return ui()&&document.documentMode===10}function Nn(r=R()){return Qt(r)||Sn(r)||In(r)||_n(r)||/windows phone/i.test(r)||wn(r)}/**
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
 */function An(r,e=[]){let n;switch(r){case"Browser":n=br(R());break;case"Worker":n=`${br(R())}-${r}`;break;default:n=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${je}/${i}`}/**
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
 */class Gs{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=a=>new Promise((o,c)=>{try{const l=e(a);o(l)}catch(l){c(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function $s(r,e={}){return le(r,"GET","/v2/passwordPolicy",ue(r,e))}/**
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
 */const Ys=6;class Js{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ys,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class Qs{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jr(this),this.idTokenSubscription=new jr(this),this.beforeStateQueue=new Gs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Y(n)),this._initializationPromise=this.queue(async()=>{var i,s,a;if(!this._deleted&&(this.persistenceManager=await xe.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rt(this,{idToken:e}),i=await D._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(O(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(a=this.redirectUser)==null?void 0:a._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ts()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(O(this.app))return Promise.reject(ae(this));const n=e?W(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return O(this.app)?Promise.reject(ae(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return O(this.app)?Promise.reject(ae(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Y(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $s(this),n=new Js(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ft("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Hs(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Y(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await xe.create(this,[Y(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(c,this,"internal-error"),c.then(()=>{o||a(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=An(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(O(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Is(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Se(r){return W(r)}class jr{constructor(e){this.auth=e,this.observer=null,this.addObserver=li(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Xs(r){pt=r}function Tn(r){return pt.loadJS(r)}function Zs(){return pt.recaptchaEnterpriseScript}function ea(){return pt.gapiScript}function ta(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class ra{constructor(){this.enterprise=new na}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class na{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ia="recaptcha-enterprise",En="NO_RECAPTCHA";class sa{constructor(e){this.type=ia,this.auth=Se(e)}async verify(e="verify",n=!1){async function i(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,c)=>{Ms(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Os(l);return a.tenantId==null?a._agentRecaptchaConfig=d:a._tenantRecaptchaConfigs[a.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function s(a,o,c){const l=window.grecaptcha;fr(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:e}).then(d=>{o(d)}).catch(()=>{o(En)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ra().execute("siteKey",{action:"verify"}):new Promise((a,o)=>{i(this.auth).then(c=>{if(!n&&fr(window.grecaptcha))s(c,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Zs();l.length!==0&&(l+=c),Tn(l).then(()=>{s(c,a,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function kr(r,e,n,i=!1,s=!1){const a=new sa(r);let o;if(s)o=En;else try{o=await a.verify(n)}catch{o=await a.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function wr(r,e,n,i,s){var a;if((a=r._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await kr(r,e,n,n==="getOobCode");return i(r,o)}else return i(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await kr(r,e,n,n==="getOobCode");return i(r,c)}else return Promise.reject(o)})}/**
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
 */function aa(r,e){const n=Bt(r,"auth");if(n.isInitialized()){const s=n.getImmediate(),a=n.getOptions();if(Ct(a,e??{}))return s;U(s,"already-initialized")}return n.initialize({options:e})}function oa(r,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Y);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function la(r,e,n){const i=Se(r);b(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,a=Pn(e),{host:o,port:c}=ca(e),l=c===null?"":`:${c}`,d={url:`${a}//${o}${l}/`},u=Object.freeze({host:o,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){b(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),b(Ct(d,i.config.emulator)&&Ct(u,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=u,i.settings.appVerificationDisabledForTesting=!0,lt(o)?zr(`${a}//${o}${l}`):da()}function Pn(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ca(r){const e=Pn(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:Sr(i.substr(a.length+1))}}else{const[a,o]=i.split(":");return{host:a,port:Sr(o)}}}function Sr(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function da(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Xt{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $("not implemented")}_getIdTokenResponse(e){return $("not implemented")}_linkToIdToken(e,n){return $("not implemented")}_getReauthenticationResolver(e){return $("not implemented")}}async function ua(r,e){return le(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ha(r,e){return mt(r,"POST","/v1/accounts:signInWithPassword",ue(r,e))}/**
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
 */async function ma(r,e){return mt(r,"POST","/v1/accounts:signInWithEmailLink",ue(r,e))}async function pa(r,e){return mt(r,"POST","/v1/accounts:signInWithEmailLink",ue(r,e))}/**
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
 */class Pe extends Xt{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Pe(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Pe(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wr(e,n,"signInWithPassword",ha);case"emailLink":return ma(e,{email:this._email,oobCode:this._password});default:U(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wr(e,i,"signUpPassword",ua);case"emailLink":return pa(e,{idToken:n,email:this._email,oobCode:this._password});default:U(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ve(r,e){return mt(r,"POST","/v1/accounts:signInWithIdp",ue(r,e))}/**
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
 */const ga="http://localhost";class de extends Xt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new de(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):U("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...a}=n;if(!i||!s)return null;const o=new de(i,s);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ve(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ve(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ve(e,n)}buildRequest(){const e={requestUri:ga,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Re(n)}return e}}/**
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
 */function fa(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ya(r){const e=Ne(Ae(r)).link,n=e?Ne(Ae(e)).deep_link_id:null,i=Ne(Ae(r)).deep_link_id;return(i?Ne(Ae(i)).link:null)||i||n||e||r}class Zt{constructor(e){const n=Ne(Ae(e)),i=n.apiKey??null,s=n.oobCode??null,a=fa(n.mode??null);b(i&&s&&a,"argument-error"),this.apiKey=i,this.operation=a,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ya(e);try{return new Zt(n)}catch{return null}}}/**
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
 */class _e{constructor(){this.providerId=_e.PROVIDER_ID}static credential(e,n){return Pe._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Zt.parseLink(n);return b(i,"argument-error"),Pe._fromEmailAndCode(e,i.code,i.tenantId)}}_e.PROVIDER_ID="password";_e.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_e.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Cn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class De extends Cn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class te extends De{constructor(){super("facebook.com")}static credential(e){return de._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return te.credential(e.oauthAccessToken)}catch{return null}}}te.FACEBOOK_SIGN_IN_METHOD="facebook.com";te.PROVIDER_ID="facebook.com";/**
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
 */class re extends De{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return de._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return re.credential(n,i)}catch{return null}}}re.GOOGLE_SIGN_IN_METHOD="google.com";re.PROVIDER_ID="google.com";/**
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
 */class ne extends De{constructor(){super("github.com")}static credential(e){return de._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ne.credential(e.oauthAccessToken)}catch{return null}}}ne.GITHUB_SIGN_IN_METHOD="github.com";ne.PROVIDER_ID="github.com";/**
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
 */class ie extends De{constructor(){super("twitter.com")}static credential(e,n){return de._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ie.credentialFromTaggedObject(e)}static credentialFromError(e){return ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ie.credential(n,i)}catch{return null}}}ie.TWITTER_SIGN_IN_METHOD="twitter.com";ie.PROVIDER_ID="twitter.com";/**
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
 */class be{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const a=await D._fromIdTokenResponse(e,i,s),o=_r(i);return new be({user:a,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=_r(i);return new be({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function _r(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class it extends ot{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,it.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new it(e,n,i,s)}}function Rn(r,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?it._fromErrorAndOperation(r,a,e,i):a})}async function xa(r,e,n=!1){const i=await Ee(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return be._forOperation(r,"link",i)}/**
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
 */async function va(r,e,n=!1){const{auth:i}=r;if(O(i.app))return Promise.reject(ae(i));const s="reauthenticate";try{const a=await Ee(r,Rn(i,s,e,r),n);b(a.idToken,i,"internal-error");const o=Jt(a.idToken);b(o,i,"internal-error");const{sub:c}=o;return b(r.uid===c,i,"user-mismatch"),be._forOperation(r,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&U(i,"user-mismatch"),a}}/**
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
 */async function Ln(r,e,n=!1){if(O(r.app))return Promise.reject(ae(r));const i="signIn",s=await Rn(r,i,e),a=await be._fromIdTokenResponse(r,i,s);return n||await r._updateCurrentUser(a.user),a}async function ba(r,e){return Ln(Se(r),e)}/**
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
 */async function ja(r){const e=Se(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ka(r,e,n){return O(r.app)?Promise.reject(ae(r)):ba(W(r),_e.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ja(r),i})}function wa(r,e,n,i){return W(r).onIdTokenChanged(e,n,i)}function Sa(r,e,n){return W(r).beforeAuthStateChanged(e,n)}function _a(r,e,n,i){return W(r).onAuthStateChanged(e,n,i)}function Ia(r){return W(r).signOut()}const st="__sak";/**
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
 */class On{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(st,"1"),this.storage.removeItem(st),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Na=1e3,Aa=10;class Mn extends On{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},a=this.storage.getItem(i);qs()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Aa):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Na)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mn.type="LOCAL";const Ta=Mn;/**
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
 */class Dn extends On{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dn.type="SESSION";const Un=Dn;/**
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
 */function Ea(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new gt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:a}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async d=>d(n.origin,a)),l=await Ea(c);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gt.receivers=[];/**
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
 */function er(r="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class Pa{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,o;return new Promise((c,l)=>{const d=er("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(u),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(g.data.response);break;default:clearTimeout(u),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function F(){return window}function Ca(r){F().location.href=r}/**
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
 */function Bn(){return typeof F().WorkerGlobalScope<"u"&&typeof F().importScripts=="function"}async function Ra(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function La(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Oa(){return Bn()?self:null}/**
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
 */const Fn="firebaseLocalStorageDb",Ma=1,at="firebaseLocalStorage",zn="fbase_key";class Ue{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ft(r,e){return r.transaction([at],e?"readwrite":"readonly").objectStore(at)}function Da(){const r=indexedDB.deleteDatabase(Fn);return new Ue(r).toPromise()}function Mt(){const r=indexedDB.open(Fn,Ma);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(at,{keyPath:zn})}catch(s){n(s)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(at)?e(i):(i.close(),await Da(),e(await Mt()))})})}async function Ir(r,e,n){const i=ft(r,!0).put({[zn]:e,value:n});return new Ue(i).toPromise()}async function Ua(r,e){const n=ft(r,!1).get(e),i=await new Ue(n).toPromise();return i===void 0?null:i.value}function Nr(r,e){const n=ft(r,!0).delete(e);return new Ue(n).toPromise()}const Ba=800,Fa=3;class Wn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Fa)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gt._getInstance(Oa()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await Ra(),!this.activeServiceWorker)return;this.sender=new Pa(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||La()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mt();return await Ir(e,st,"1"),await Nr(e,st),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ir(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Ua(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=ft(s,!1).getAll();return new Ue(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ba)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wn.type="LOCAL";const za=Wn;new Me(3e4,6e4);/**
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
 */function Wa(r,e){return e?Y(e):(b(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class tr extends Xt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ve(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ve(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ka(r){return Ln(r.auth,new tr(r),r.bypassAuthState)}function Ha(r){const{auth:e,user:n}=r;return b(n,e,"internal-error"),va(n,new tr(r),r.bypassAuthState)}async function Va(r){const{auth:e,user:n}=r;return b(n,e,"internal-error"),xa(n,new tr(r),r.bypassAuthState)}/**
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
 */class Kn{constructor(e,n,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:a,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ka;case"linkViaPopup":case"linkViaRedirect":return Va;case"reauthViaPopup":case"reauthViaRedirect":return Ha;default:U(this.auth,"internal-error")}}resolve(e){Q(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Q(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qa=new Me(2e3,1e4);class fe extends Kn{constructor(e,n,i,s,a){super(e,n,s,a),this.provider=i,this.authWindow=null,this.pollId=null,fe.currentPopupAction&&fe.currentPopupAction.cancel(),fe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Q(this.filter.length===1,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(B(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(B(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(B(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qa.get())};e()}}fe.currentPopupAction=null;/**
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
 */const Ga="pendingRedirect",$e=new Map;class $a extends Kn{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=$e.get(this.auth._key());if(!e){try{const i=await Ya(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}$e.set(this.auth._key(),e)}return this.bypassAuthState||$e.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ya(r,e){const n=Xa(e),i=Qa(r);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Ja(r,e){$e.set(r._key(),e)}function Qa(r){return Y(r._redirectPersistence)}function Xa(r){return Ge(Ga,r.config.apiKey,r.name)}async function Za(r,e,n=!1){if(O(r.app))return Promise.reject(ae(r));const i=Se(r),s=Wa(i,e),o=await new $a(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const eo=10*60*1e3;class to{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ro(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Hn(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(B(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eo&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ar(e))}saveEventToCache(e){this.cachedEventUids.add(Ar(e)),this.lastProcessedEventTime=Date.now()}}function Ar(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Hn({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ro(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hn(r);default:return!1}}/**
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
 */async function no(r,e={}){return le(r,"GET","/v1/projects",e)}/**
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
 */const io=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,so=/^https?/;async function ao(r){if(r.config.emulator)return;const{authorizedDomains:e}=await no(r);for(const n of e)try{if(oo(n))return}catch{}U(r,"unauthorized-domain")}function oo(r){const e=Lt(),{protocol:n,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&i===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!so.test(n))return!1;if(io.test(r))return i===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const lo=new Me(3e4,6e4);function Tr(){const r=F().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function co(r){return new Promise((e,n)=>{var s,a,o;function i(){Tr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tr(),n(B(r,"network-request-failed"))},timeout:lo.get()})}if((a=(s=F().gapi)==null?void 0:s.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((o=F().gapi)!=null&&o.load)i();else{const c=ta("iframefcb");return F()[c]=()=>{gapi.load?i():n(B(r,"network-request-failed"))},Tn(`${ea()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ye=null,e})}let Ye=null;function uo(r){return Ye=Ye||co(r),Ye}/**
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
 */const ho=new Me(5e3,15e3),mo="__/auth/iframe",po="emulator/auth/iframe",go={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yo(r){const e=r.config;b(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Yt(e,po):`https://${r.config.authDomain}/${mo}`,i={apiKey:e.apiKey,appName:r.name,v:je},s=fo.get(r.config.apiHost);s&&(i.eid=s);const a=r._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${Re(i).slice(1)}`}async function xo(r){const e=await uo(r),n=F().gapi;return b(n,r,"internal-error"),e.open({where:document.body,url:yo(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:go,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const o=B(r,"network-request-failed"),c=F().setTimeout(()=>{a(o)},ho.get());function l(){F().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{a(o)})}))}/**
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
 */const vo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bo=500,jo=600,ko="_blank",wo="http://localhost";class Er{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function So(r,e,n,i=bo,s=jo){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...vo,width:i.toString(),height:s.toString(),top:a,left:o},d=R().toLowerCase();n&&(c=kn(d)?ko:n),bn(d)&&(e=e||wo,l.scrollbars="yes");const u=Object.entries(l).reduce((g,[p,y])=>`${g}${p}=${y},`,"");if(Vs(d)&&c!=="_self")return _o(e||"",c),new Er(null);const h=window.open(e||"",c,u);b(h,r,"popup-blocked");try{h.focus()}catch{}return new Er(h)}function _o(r,e){const n=document.createElement("a");n.href=r,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Io="__/auth/handler",No="emulator/auth/handler",Ao=encodeURIComponent("fac");async function Pr(r,e,n,i,s,a){b(r.config.authDomain,r,"auth-domain-config-required"),b(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:i,v:je,eventId:s};if(e instanceof Cn){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",hi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof De){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const l=await r._getAppCheckToken(),d=l?`#${Ao}=${encodeURIComponent(l)}`:"";return`${To(r)}?${Re(c).slice(1)}${d}`}function To({config:r}){return r.emulator?Yt(r,No):`https://${r.authDomain}/${Io}`}/**
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
 */const _t="webStorageSupport";class Eo{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Un,this._completeRedirectFn=Za,this._overrideRedirectResult=Ja}async _openPopup(e,n,i,s){var o;Q((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Pr(e,n,i,Lt(),s);return So(e,a,er())}async _openRedirect(e,n,i,s){await this._originValidation(e);const a=await Pr(e,n,i,Lt(),s);return Ca(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:a}=this.eventManagers[n];return s?Promise.resolve(s):(Q(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await xo(e),i=new to(e);return n.register("authEvent",s=>(b(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_t,{type:_t},s=>{var o;const a=(o=s==null?void 0:s[0])==null?void 0:o[_t];a!==void 0&&n(!!a),U(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ao(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nn()||jn()||Qt()}}const Po=Eo;var Cr="@firebase/auth",Rr="1.12.2";/**
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
 */class Co{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ro(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lo(r){Et(new Pt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:An(r)},d=new Qs(i,s,a,l);return oa(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Et(new Pt("auth-internal",e=>{const n=Se(e.getProvider("auth").getImmediate());return(i=>new Co(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Cr,Rr,Ro(r)),Je(Cr,Rr,"esm2020")}/**
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
 */const Oo=5*60,Mo=Wr("authIdTokenMaxAge")||Oo;let Lr=null;const Do=r=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Mo)return;const s=n==null?void 0:n.token;Lr!==s&&(Lr=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Uo(r=Fr()){const e=Bt(r,"auth");if(e.isInitialized())return e.getImmediate();const n=aa(r,{popupRedirectResolver:Po,persistence:[za,Ta,Un]}),i=Wr("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const o=Do(a.toString());Sa(n,o,()=>o(n.currentUser)),wa(n,c=>o(c))}}const s=di("auth");return s&&la(n,`http://${s}`),n}function Bo(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Xs({loadJS(r){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=s=>{const a=B("internal-error");a.customData=s,n(a)},i.type="text/javascript",i.charset="UTF-8",Bo().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lo("Browser");const Fo={apiKey:"AIzaSyAl8PHbEFc-e15zzHTq_hIM6gikxv5meGU",authDomain:"pant-krupa-paperboard.firebaseapp.com",projectId:"pant-krupa-paperboard",storageBucket:"pant-krupa-paperboard.firebasestorage.app",messagingSenderId:"924556723281",appId:"1:924556723281:web:3cff254321c0d486b0a470",measurementId:"G-Z2Y4ZZD09C"},rr=pi(Fo),N=gi(rr);js(rr);const It=Uo(rr),zo=async r=>(await ke(C(N,"enquiries"),{...r,createdAt:H(),read:!1})).id,Vn=async()=>{const r=ct(C(N,"enquiries"),fi("createdAt","desc"));return(await oe(r)).docs.map(n=>({id:n.id,...n.data()}))},Wo=async r=>{await we(K(N,"enquiries",r))},yt=async()=>(await oe(C(N,"categories"))).docs.map(e=>({id:e.id,...e.data()})).sort((e,n)=>(e.name||"").localeCompare(n.name||"")),Ko=async r=>(await ke(C(N,"categories"),{...r,createdAt:H()})).id,Ho=async(r,e)=>{await dt(K(N,"categories",r),{...e,updatedAt:H()})},Vo=async r=>{await we(K(N,"categories",r))},nr=async()=>(await oe(C(N,"gallery"))).docs.map(e=>({id:e.id,...e.data()})).sort((e,n)=>{var i,s;return(((i=n.createdAt)==null?void 0:i.seconds)||0)-(((s=e.createdAt)==null?void 0:s.seconds)||0)}),qo=async r=>(await ke(C(N,"gallery"),{...r,createdAt:H()})).id,Go=async r=>{await we(K(N,"gallery",r))},qn=async()=>(await oe(C(N,"dealers"))).docs.map(e=>({id:e.id,...e.data()})).sort((e,n)=>(e.name||"").localeCompare(n.name||"")),$o=async r=>(await ke(C(N,"dealers"),{...r,createdAt:H()})).id,Yo=async(r,e)=>{await dt(K(N,"dealers",r),{...e,updatedAt:H()})},Jo=async r=>{await we(K(N,"dealers",r))};function Qo(){const[r,e]=m.useState(!1),[n,i]=m.useState(!1),[s,a]=m.useState([]),[o,c]=m.useState(!1),l=m.useRef(null);m.useEffect(()=>{const u=()=>e(window.scrollY>50);return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),m.useEffect(()=>{yt().then(a).catch(()=>{})},[]),m.useEffect(()=>{const u=h=>{l.current&&!l.current.contains(h.target)&&c(!1)};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[]);const d=[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/industries",label:"Industries"},{to:"/blog",label:"Blog"},{to:"/gallery",label:"Gallery"}];return t.jsxs("nav",{className:`navbar-custom ${r?"scrolled":""}`,children:[t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"d-flex align-items-center justify-content-between py-2",children:[t.jsxs(_,{to:"/",className:"navbar-brand-custom",children:[t.jsx("img",{src:Yi,alt:"Shri Pant Krupa Logo",style:{width:56,height:56,objectFit:"contain"}}),t.jsxs("div",{children:[t.jsx("div",{className:"brand-text-main",children:"Shri Pant Krupa"}),t.jsx("div",{className:"brand-text-sub",children:"Paper Board"})]})]}),t.jsxs("div",{className:"d-none d-lg-flex align-items-center gap-0",children:[d.slice(0,2).map(u=>t.jsx(ge,{to:u.to,end:u.to==="/",className:({isActive:h})=>`nav-link-custom ${h?"active":""}`,children:u.label},u.to)),t.jsxs("div",{ref:l,style:{position:"relative"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[t.jsxs(ge,{to:"/products",className:({isActive:u})=>`nav-link-custom ${u?"active":""}`,style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:["Products ",t.jsx(nn,{size:13,style:{transition:"transform 0.2s",transform:o?"rotate(180deg)":"rotate(0deg)"}})]}),o&&t.jsxs("div",{style:{position:"absolute",top:"100%",left:0,background:"#fff",borderRadius:8,boxShadow:"0 8px 32px rgba(26,58,46,0.15)",border:"1px solid var(--border)",minWidth:200,zIndex:1e3,padding:"0.5rem 0",animation:"fadeInDown 0.15s ease"},children:[t.jsx(_,{to:"/products",onClick:()=>c(!1),style:{display:"block",padding:"0.6rem 1.25rem",fontSize:"0.85rem",color:"var(--text-dark)",fontWeight:600,borderBottom:"1px solid var(--border)",marginBottom:"0.25rem"},onMouseEnter:u=>u.currentTarget.style.background="var(--cream)",onMouseLeave:u=>u.currentTarget.style.background="transparent",children:"All Products"}),s.map(u=>t.jsx(_,{to:`/products?category=${encodeURIComponent(u.name)}`,onClick:()=>c(!1),style:{display:"block",padding:"0.55rem 1.25rem",fontSize:"0.83rem",color:"var(--text-mid)"},onMouseEnter:h=>{h.currentTarget.style.background="var(--cream)",h.currentTarget.style.color="var(--primary)"},onMouseLeave:h=>{h.currentTarget.style.background="transparent",h.currentTarget.style.color="var(--text-mid)"},children:u.name},u.id))]})]}),d.slice(2).map(u=>t.jsx(ge,{to:u.to,className:({isActive:h})=>`nav-link-custom ${h?"active":""}`,children:u.label},u.to)),t.jsx(ge,{to:"/contact",className:"nav-link-custom nav-cta",children:"Contact Us"})]}),t.jsx("button",{className:"d-lg-none border-0 bg-transparent p-2",onClick:()=>i(!n),style:{fontSize:"1.4rem",color:"var(--primary)"},children:n?t.jsx(Le,{}):t.jsx(Ui,{})})]}),n&&t.jsxs("div",{className:"d-lg-none pb-3",style:{borderTop:"1px solid var(--border)"},children:[[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/products",label:"Products"},{to:"/industries",label:"Industries"},{to:"/blog",label:"Blog"},{to:"/gallery",label:"Gallery"},{to:"/contact",label:"Contact Us"}].map(u=>t.jsx(ge,{to:u.to,end:u.to==="/",className:({isActive:h})=>`d-block py-2 px-3 ${h?"text-primary fw-semibold":""}`,style:{fontFamily:"var(--ff-body)",fontSize:"0.9rem",color:"var(--text-dark)"},onClick:()=>i(!1),children:u.label},u.to)),s.length>0&&t.jsx("div",{style:{paddingLeft:"1.5rem",borderTop:"1px solid var(--border)",paddingTop:"0.5rem",marginTop:"0.25rem"},children:s.map(u=>t.jsxs(_,{to:`/products?category=${encodeURIComponent(u.name)}`,onClick:()=>i(!1),style:{display:"block",padding:"0.4rem 0.75rem",fontSize:"0.82rem",color:"var(--text-mid)"},children:["— ",u.name]},u.id))})]})]}),t.jsx("style",{children:`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}function Be(r){return j({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(r)}function Xo(r){return j({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(r)}function Zo(r){return j({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"},child:[]}]})(r)}function el(r){return j({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(r)}function tl(){const r=new Date().getFullYear();return t.jsxs("footer",{className:"footer-custom",children:[t.jsx("div",{className:"container",children:t.jsxs("div",{className:"row g-5",children:[t.jsxs("div",{className:"col-lg-4 col-md-6",children:[t.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[t.jsx("div",{style:{width:36,height:36,background:"var(--accent)",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff"},children:t.jsx(X,{})}),t.jsx("div",{className:"footer-brand",children:"Shri Pant Krupa Paper Board"})]}),t.jsx("div",{className:"footer-tagline",children:"Paper Board Manufacturer & Trader"}),t.jsx("p",{className:"footer-desc",children:"Premium quality paper board products from Kolhapur, Maharashtra. Serving packaging industries, corrugated box manufacturers, and paper converters across India."})]}),t.jsxs("div",{className:"col-lg-2 col-md-6 col-6",children:[t.jsx("div",{className:"footer-heading",children:"Quick Links"}),t.jsx("ul",{className:"footer-links",children:["Home","About","Products","Industries","Blog","Gallery","Contact"].map(e=>t.jsx("li",{children:t.jsxs(_,{to:`/${e==="Home"?"":e.toLowerCase()}`,children:[t.jsx(J,{size:12})," ",e]})},e))})]}),t.jsxs("div",{className:"col-lg-2 col-md-6 col-6",children:[t.jsx("div",{className:"footer-heading",children:"Products"}),t.jsx("ul",{className:"footer-links",children:["Kraft Paper Rolls","Mill Board","Duplex Board","Grey Board","Packing Board"].map(e=>t.jsx("li",{children:t.jsxs(_,{to:"/products",children:[t.jsx(J,{size:12})," ",e]})},e))})]}),t.jsxs("div",{className:"col-lg-4 col-md-6",children:[t.jsx("div",{className:"footer-heading",children:"Contact Info"}),t.jsxs("div",{className:"footer-contact-item",children:[t.jsx(Vt,{className:"footer-contact-icon"}),t.jsx("span",{children:"GATE NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202, India"})]}),t.jsxs("div",{className:"footer-contact-item",children:[t.jsx(Ht,{className:"footer-contact-icon"}),t.jsx("span",{children:"+91 98765 43210"})]}),t.jsxs("div",{className:"footer-contact-item",children:[t.jsx(Oe,{className:"footer-contact-icon"}),t.jsx("span",{children:"info@pantkriupapaperboard.com"})]}),t.jsxs("div",{className:"footer-contact-item",children:[t.jsx(Be,{className:"footer-contact-icon",style:{color:"#25d366"}}),t.jsx("span",{children:"WhatsApp: +91 98765 43210"})]})]})]})}),t.jsx("div",{className:"footer-bottom",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center gap-2",children:[t.jsxs("span",{children:["© ",r," Shri Pant Krupa Paper Board. All rights reserved."," · ",t.jsx(_,{to:"/admin/login",style:{color:"rgba(255,255,255,0.2)",fontSize:"0.75rem",textDecoration:"none",transition:"color 0.2s ease"},onMouseEnter:e=>e.currentTarget.style.color="rgba(200,150,62,0.7)",onMouseLeave:e=>e.currentTarget.style.color="rgba(255,255,255,0.2)",children:"Admin"})]}),t.jsxs("span",{children:["Proprietor: ",t.jsx("strong",{style:{color:"rgba(255,255,255,0.7)"},children:"Omkar Shrikant Patil"})]})]})})})]})}const Gn="917397849730",rl=encodeURIComponent(`Hello,
I am interested in your paper board products.
Please share more details.`);function nl(){return t.jsx("a",{href:`https://wa.me/${Gn}?text=${rl}`,target:"_blank",rel:"noopener noreferrer",className:"whatsapp-float","aria-label":"Chat on WhatsApp",title:"Chat with us on WhatsApp",children:t.jsx(Be,{})})}function il({product:r=""}){const e=encodeURIComponent(`Hello,
I'm interested in getting a quote for: ${r||"your paper board products"}.
Please share more details.`);return t.jsxs("a",{href:`https://wa.me/${Gn}?text=${e}`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.85rem 2rem",background:"#25d366",color:"#fff",fontSize:"0.9rem",fontWeight:500,letterSpacing:"0.05em",border:"2px solid #25d366",borderRadius:"var(--radius)",transition:"all 0.3s ease",textTransform:"uppercase",fontFamily:"var(--ff-body)"},children:[t.jsx(Be,{size:18})," Get WhatsApp Quote"]})}const sl="/assets/mill_rolling-DarJDsWK.jpg",al="/assets/mill_rolling_b-da7-i_iq.jpg",ol="/assets/mill_boards-BeeWqXCk.jpg",ll="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAC0ALQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2SiiloAKSlooASilooAKSlpKAFpKWigBKKWigApKWigBKKWigBKWiigBKKWigBKWiigBKKKKAClpKKAFoopKAFopKKAFpKM0UALRSUUALRSUUALRRSUALRSUUALRSUtABRSUUALRSUtACUUUUAFLSUUALSUtJQAtNd1jUs7BVHUk8CmTzx20DzTMFjQZYmuL1LXJb+YnlYQfkT09z71E58qLhByZ0k2uQq2IlL/7ROBUX9uP/AM80/AmuU+2HuaUXuK5nVmzoVOCOsGuccxD86cNbQ9Yv/Hq5MXnfNPF570vaT7h7OHY6z+2Iz/Af++qcNXi7o35iuTF5jvThd+9HtageygdYNVhP8L/pSjVIPR/yrlVvPeni896PbTD2UDqRqUJ/vflS/wBoQ+rflXMrd+9WIrgyEAc0e3mg9jE3jqEA/ib8qkgvIbglY3yw7Hg1iHpVbzXhmWRfvKcio+uST1WhX1VNaPU6qlqOGQSxLIv3WAIp9d6d1c4gpaSlpgJRRRQAtFJS0AFJS1Dczra20s7/AHYkLn8BmgDlPFmq+ZcixjPyRYMmO7dh+H9faud8yoZZ3nmeWQ5eRizH3PNM3GuGcuZ3OyMeVWLG+k31BuNG40rlWJ9+BR5lVt59aTzKYi15vvSibHQmqZlpDNQBe88+ppRcsP4qzvO96PPoA1BdMO9bumKwt1Z/vP8AN9B2rl7Efa7yOL+EnLf7o6/4fjXVxuC31rGq+hpTj1LrfcNZ8rcmrzNtiPrWazZkbIxXLN6HTTR0+jSeZpsf+ySv61frK8PnNg3tIf5CtWvYw7vSi/I8qsrVJLzCikpa2MhKKKKAClpKKAFrE8XT+R4dnAODIVT8zz+grbrmvHZxoUfvcL/JqmbtFlwV5I4QNS5qEMaUNXDc7rEuaM1GGpc0XCw40yl3U0mmieUaxxUbtxSsaiZsVSFYQvxTfM96YzcVC0mBz0FMR0nh5cRzXB/iOxfw5P8AT8q3oJAGz+VYunD7Pp0MfRtuT9Tyf51ehkyRzXJUd2dEFZG3KwFsST+VZYfLDvz1q1czbbAN6nFZ6N82O2a5qjOimjrfD3/IPY+sh/pWtWboKbdJiP8AeLN+taNe1h1alH0PHru9SXqFLSUtbGQlFFFABS0lFAC1geNITL4bmYf8snR/1x/Wt+quo2gvtPuLY4/exsmT2JHH61MldNDi7NM8hDUuahYtHIySAq6kqwPYjrSh64D0ialz71EHB704GkFh2aaTQTTSaYWGO1QO1SvVeQ00yWhjvUSjzpo4+u9gv60O2KfpoL6nD6AlvyBpt2RKWp0/m/pUiTYOKp7+tHmH5vYVxt3OlIv3GsRSTLpqgmZIhO7dlBOAPr3/ACqeJvmJ9Kpx2cSA3ar+9nwHb1C8AVfsITNcRxjq7AfrWU1d2RrB2Wp3WnR+Tp9uncRirVNUY4HQClr34qySPDbu7i0UlLTEJRRRQAUtJS0AFJS0lAHnHj7QJLO6bVrZCbeUjzwP+Wbf3vof5/WuPWcHvXuzosiMjqGVgQVIyCPSuG1v4Z29yzTaNP8AZJDz5LgtEfp3X9R7VzVKLbvE6adaytI4YTCpVl96Zqfh7WtEyb6wk8of8tof3ifmOR+IFZ8V2GGVYEexrnaa3OlST2NTzM0b6pLcZ708S5pFIldqgc05nqF2zTEyOQ4qzowzqBPpGf5iqjmruhjN7L/1z/qKUn7rCK1NfoDTlGWPvSEcVPAm6ReM5xXK2dCRqGLFlEvoK1fDVr5l8JCOIwT+PSqrR5jUegro9AtfIsi5HMhz+Ap4eHPVX3mWInyU35mqKWkpa9s8kKKSloASiiigApaSloAKSlpKAFpKWkoAMVg6v4K0TWdz3Fkkcx/5bQfu3/Ejr+Oa36Sk0nuNNrY8t1T4W6hbZfSL2O5QdIp/kf8A76HB/IVyN/a3+jy+XqdnPat0BkX5T9G6H8DX0DUcsMc8TRzRpJGwwVdcg/gaylQi9jaNeS3Pn1bjd3pTJmvVNW+GWiagWe0WTT5j3tz8n4oePyxXE6t8O9e0vc9uiahCP4oOH/FD/QmsJUpI3jWjI59jmtDQP+Qi6+sR/mKyGdo5WilR45V+8jqVYfUHmr+jTCLVYGJwrEoSfcY/nisZrQ2judMEJNXrCAGQH9KiWPLY79RWpp8GDkiuJs6DQhgM0iRr1Y4rqY0EcaoowqjArN0q1wDOw68J9PWtTFeng6XLHmfU8zFVeeVl0ClpKWu05hKWkpaAEooooAKWkpaACkpaKACkpaKACkpaSgBaSlooAKSlooAz9U0LTdai8vUbOG4A6My/Mv0bqPwriNV+E6gmTRb9oyORDc/MB9HHI/EGvR6KiUIy3RcZyjszzoabqNvHH9vtGjl6MUO9SfUEdj74rf0jS5ZcPMrJF78Fq6XFFcywUOa99Doli5uNrCKoUAAYA7U6iiuw5BKWiigBKWiigBKKKKACiiloAKSlooASilooAKSlpKAFpKWigBKKWigApKWigBKKWigBKWiigBKKWigBKWiigBKKKKACiiloAKSlpKACilpKAFpKWkoAWkpaSgAopaSgBaSlooASiiigApaKKAEoopaAEpaSloASiiigAooooAWkoooAKKKKAFpKKKAFpKKKACiiigBaSiigAooooAKWiigBKKKKACloooASiiigD//Z",cl="/assets/sundry-CTNHHckZ.jpg",q=[{id:1,image:sl,eyebrow:"Est. Manufacturer · Kolhapur",title:"Welcome to Shree Pant Krupa Paper Board",subtitle:"Kolhapur's trusted paper board manufacturer — delivering premium quality to packaging industries across India.",cta:"Explore Products",ctaPath:"/products"},{id:2,image:al,eyebrow:"Our Process",title:"Precision Crafted From Raw Pulp to Finished Roll",subtitle:"State-of-the-art rolling mills convert high-grade pulp into perfectly calibrated paper sheets — every batch quality-checked.",cta:"Learn More",ctaPath:"/products"},{id:3,image:ol,eyebrow:"Product · Mill Board",title:"High-Strength Mill Board Sheets",subtitle:"Available from 200–550 GSM, our mill boards offer superior rigidity and printability for heavy-duty packaging applications.",cta:"View Mill Board",ctaPath:"/products"},{id:4,image:ll,eyebrow:"Product · Kraft Paper",title:"Durable Kraft Board Paper Rolls",subtitle:"Premium Kraft paper rolls — 200 to 550 GSM — engineered for corrugated boxes, cartons, and industrial packaging.",cta:"View Kraft Rolls",ctaPath:"/products"},{id:5,image:cl,eyebrow:"Product · Sundry & Sheet Cutting",title:"Sundry Products & Custom Sheet Cutting",subtitle:"From specialty sundry items to precision sheet-cut boards in any size — tailored to your exact production needs.",cta:"Explore Range",ctaPath:"/products"}],dl=()=>{const[r,e]=m.useState(0),[n,i]=m.useState(!1),[s,a]=m.useState({}),[o,c]=m.useState(null),l=m.useRef(null),d=Dr(),u=q.length;m.useEffect(()=>{q.forEach((y,S)=>{const w=new window.Image;w.src=y.image,w.onload=()=>a(f=>({...f,[S]:!0}))})},[]);const h=m.useCallback(y=>e(y),[]),g=m.useCallback(()=>h((r+1)%u),[r,u,h]),p=m.useCallback(()=>h((r-1+u)%u),[r,u,h]);return m.useEffect(()=>(n||(l.current=setInterval(g,5e3)),()=>clearInterval(l.current)),[g,n]),m.useEffect(()=>{const y=S=>{S.key==="ArrowRight"&&g(),S.key==="ArrowLeft"&&p()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[g,p]),t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@400;500;600;700&display=swap');

        /* ── Root ───────────────────────────────────────────── */
        .hero-root {
          position:   relative;
          height:     90vh;
          min-height: 580px;
          overflow:   hidden;
          background: #080c18;
          font-family: 'Montserrat', sans-serif;
        }
        @media (max-width: 768px) {
          .hero-root { height: 75vh; min-height: 440px; }
        }

        /* ── Slide layers ───────────────────────────────────── */
        .hero-slide-layer {
          position:    absolute;
          inset:       0;
          transition:  opacity 1s ease;
          will-change: opacity;
        }
        .hero-slide-layer.is-active   { opacity: 1; z-index: 2; }
        .hero-slide-layer.is-inactive { opacity: 0; z-index: 1; }

        .hero-slide-bg {
          position:            absolute;
          inset:               0;
          background-size:     cover;
          background-position: center;
          transform:           scale(1.05);
          transition:          transform 7s ease;
        }
        .hero-slide-layer.is-active .hero-slide-bg {
          transform: scale(1);
        }

        .hero-overlay {
          position:   absolute;
          inset:      0;
          background: linear-gradient(
            110deg,
            rgba(5,10,25,0.80) 0%,
            rgba(5,10,25,0.45) 55%,
            rgba(5,10,25,0.20) 100%
          );
        }

        /* ── Content ────────────────────────────────────────── */
        .hero-content {
          position:    relative;
          z-index:     10;
          height:      100%;
          display:     flex;
          align-items: center;
        }

        .hero-text-wrap { max-width: 700px; }

        /* Eyebrow */
        .hero-eyebrow {
          display:        inline-flex;
          align-items:    center;
          gap:            0.45rem;
          background:     rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          border:         1px solid rgba(255,255,255,0.18);
          color:          rgba(255,255,255,0.9);
          font-size:      0.75rem;
          font-weight:    600;
          padding:        0.38rem 1rem;
          border-radius:  20px;
          margin-bottom:  1.1rem;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          animation:      hFadeUp 0.65s ease both;
        }
        .hero-eyebrow::before {
          content:       '';
          display:       inline-block;
          width:         7px;
          height:        7px;
          border-radius: 50%;
          background:    #f5a623;
          flex-shrink:   0;
        }

        /* Title */
        .hero-title {
          font-family:   'Playfair Display', serif;
          font-size:     clamp(1.9rem, 4.8vw, 3.8rem);
          font-weight:   900;
          color:         #ffffff;
          line-height:   1.13;
          margin-bottom: 1.1rem;
          letter-spacing: -0.3px;
          text-shadow:   0 6px 32px rgba(0,0,0,0.35);
          animation:     hFadeUp 0.65s ease 0.1s both;
        }

        /* Subtitle */
        .hero-sub {
          font-size:     clamp(0.9rem, 1.6vw, 1.05rem);
          color:         rgba(255,255,255,0.72);
          line-height:   1.7;
          margin-bottom: 2rem;
          max-width:     560px;
          font-weight:   400;
          animation:     hFadeUp 0.65s ease 0.18s both;
        }

        /* CTA */
        .hero-cta-btn {
          display:        inline-flex;
          align-items:    center;
          gap:            0.55rem;
          background:     linear-gradient(135deg, #f5a623 0%, #e8850a 100%);
          border:         none;
          border-radius:  10px;
          color:          #1a0d00;
          font-weight:    700;
          font-size:      0.95rem;
          padding:        0.8rem 2rem;
          cursor:         pointer;
          box-shadow:     0 8px 28px rgba(245,166,35,0.40);
          transition:     all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          font-family:    'Montserrat', sans-serif;
          letter-spacing: 0.2px;
          animation:      hFadeUp 0.65s ease 0.26s both;
        }
        .hero-cta-btn:hover {
          transform:  translateY(-3px) scale(1.04);
          box-shadow: 0 14px 36px rgba(245,166,35,0.55);
        }

        /* ── Arrow buttons ──────────────────────────────────── */
        .hero-arrow-btn {
          position:        absolute;
          top:             50%;
          transform:       translateY(-50%);
          z-index:         10;
          width:           50px;
          height:          50px;
          border-radius:   50%;
          border:          1.5px solid rgba(255,255,255,0.28);
          background:      rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          color:           white;
          display:         flex;
          align-items:     center;
          justify-content: center;
          cursor:          pointer;
          transition:      all 0.25s ease;
        }
        .hero-arrow-btn:hover {
          background:   rgba(245,166,35,0.22);
          border-color: #f5a623;
          transform:    translateY(-50%) scale(1.1);
        }
        @media (max-width: 768px) { .hero-arrow-btn { display: none !important; } }

        /* ── Dot indicators ─────────────────────────────────── */
        .hero-dot-btn {
          border:        none;
          cursor:        pointer;
          border-radius: 3px;
          height:        3px;
          background:    rgba(255,255,255,0.30);
          transition:    all 0.35s ease;
          padding:       0;
        }
        .hero-dot-btn.active {
          background: #f5a623;
          width:      30px !important;
        }

        /* ── Slide counter ──────────────────────────────────── */
        .hero-counter {
          position:      absolute;
          bottom:        2rem;
          right:         2rem;
          z-index:       10;
          color:         rgba(255,255,255,0.55);
          font-size:     0.82rem;
          font-weight:   700;
          letter-spacing: 1.5px;
          font-family:   'Montserrat', sans-serif;
        }
        .hero-counter strong { color: rgba(255,255,255,0.9); }

        /* ── Progress bar ───────────────────────────────────── */
        .hero-progress-track {
          position:   absolute;
          bottom:     0; left: 0; right: 0;
          height:     3px;
          background: rgba(255,255,255,0.10);
          z-index:    10;
        }
        .hero-progress-fill {
          height:     100%;
          background: linear-gradient(90deg, #f5a623, #ffd580);
        }

        /* ── Animations ─────────────────────────────────────── */
        @keyframes hFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes hProgressBar {
          from { width: 0%;   }
          to   { width: 100%; }
        }
      `}),t.jsxs("section",{className:"hero-root",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onTouchStart:y=>c(y.touches[0].clientX),onTouchEnd:y=>{if(o===null)return;const S=o-y.changedTouches[0].clientX;Math.abs(S)>50&&(S>0?g():p()),c(null)},"aria-label":"Hero banner",children:[q.map((y,S)=>t.jsxs("div",{className:`hero-slide-layer ${S===r?"is-active":"is-inactive"}`,children:[t.jsx("div",{className:"hero-slide-bg",style:{backgroundImage:`url(${y.image})`},role:"img","aria-label":y.title}),t.jsx("div",{className:"hero-overlay"})]},y.id)),t.jsx("div",{className:"container hero-content",children:t.jsxs("div",{className:"hero-text-wrap",children:[t.jsx("div",{className:"hero-eyebrow",children:q[r].eyebrow},`ey-${r}`),t.jsx("h1",{className:"hero-title",children:q[r].title},`ti-${r}`),t.jsx("p",{className:"hero-sub",children:q[r].subtitle},`su-${r}`),t.jsxs("button",{className:"hero-cta-btn",onClick:()=>d(q[r].ctaPath),children:[q[r].cta," ",t.jsx(J,{size:16})]},`cta-${r}`)]})}),t.jsx("button",{className:"hero-arrow-btn",style:{left:"1.5rem"},onClick:p,"aria-label":"Previous slide",children:t.jsx(rn,{size:22})}),t.jsx("button",{className:"hero-arrow-btn",style:{right:"1.5rem"},onClick:g,"aria-label":"Next slide",children:t.jsx(tn,{size:22})}),t.jsx("div",{style:{position:"absolute",bottom:"2rem",left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",alignItems:"center",gap:"0.45rem"},children:q.map((y,S)=>t.jsx("button",{className:`hero-dot-btn ${S===r?"active":""}`,style:{width:S===r?30:9},onClick:()=>h(S),"aria-label":`Go to slide ${S+1}`},S))}),t.jsxs("div",{className:"hero-counter",children:[t.jsx("strong",{children:String(r+1).padStart(2,"0")}),t.jsxs("span",{style:{opacity:.4},children:[" / ",String(u).padStart(2,"0")]})]}),t.jsx("div",{className:"hero-progress-track",children:t.jsx("div",{className:"hero-progress-fill",style:{animation:n?"none":"hProgressBar 5s linear forwards"}},`pb-${r}-${n}`)})]})]})};function $n({product:r}){var e;return t.jsxs("div",{className:"product-card",children:[t.jsx("div",{className:"product-card-image",children:(e=r.images)!=null&&e[0]?t.jsx("img",{src:r.images[0],alt:r.name,loading:"lazy"}):t.jsxs("div",{className:"product-card-placeholder",children:[t.jsx(ce,{size:32}),t.jsx("span",{children:"Paper Board"})]})}),t.jsxs("div",{className:"product-card-body",children:[t.jsx("div",{className:"product-card-category",children:r.category||"Paper Board"}),t.jsx("div",{className:"product-card-title",children:r.name}),t.jsxs("div",{className:"product-card-meta",children:[r.gsm&&t.jsxs("span",{children:[t.jsx(ce,{size:12})," GSM: ",r.gsm]}),r.width&&t.jsxs("span",{children:[t.jsx(Xr,{size:12})," ",r.width]})]}),r.description&&t.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-mid)",marginBottom:"1rem",lineHeight:1.6},children:[r.description.substring(0,90),"..."]}),t.jsxs(_,{to:`/products/${r.slug}`,className:"product-card-link",children:["View Details ",t.jsx(J,{size:13})]})]})]})}const Fe="products",xt=async(r={})=>{try{let e=C(N,Fe);const n=[];r.category&&n.push(zt("category","==",r.category)),r.limit&&n.push(yi(r.limit)),n.length>0&&(e=ct(e,...n));let s=(await oe(e)).docs.map(a=>({id:a.id,...a.data()}));return r.featured&&(s=s.filter(a=>a.featured===!0)),s.sort((a,o)=>{var d,u;const c=((d=a.createdAt)==null?void 0:d.seconds)||0;return(((u=o.createdAt)==null?void 0:u.seconds)||0)-c}),s}catch(e){return console.error("Error fetching products:",e),[]}},ul=async r=>{try{const e=ct(C(N,Fe),zt("slug","==",r)),n=await oe(e);if(n.empty)return null;const i=n.docs[0];return{id:i.id,...i.data()}}catch(e){return console.error("Error fetching product:",e),null}},hl=async r=>{try{return(await ke(C(N,Fe),{...r,createdAt:H()})).id}catch(e){throw console.error("Error adding product:",e),e}},ml=async(r,e)=>{try{await dt(K(N,Fe,r),{...e,updatedAt:H()})}catch(n){throw console.error("Error updating product:",n),n}},pl=async r=>{try{await we(K(N,Fe,r))}catch(e){throw console.error("Error deleting product:",e),e}};function gl(){const[r,e]=m.useState([]),[n,i]=m.useState(!0),[s]=Ur(),[a,o]=m.useState(s.get("category")||"All"),[c,l]=m.useState("");return m.useEffect(()=>{xt().then(d=>e(d)).catch(()=>e([])).finally(()=>i(!1))},[]),m.useEffect(()=>{const d=s.get("category");d&&o(d)},[s]),t.jsx("section",{className:"section-padded",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"row mb-5",children:[t.jsxs("div",{className:"col-lg-6",children:[t.jsx("div",{className:"section-eyebrow",children:"Our Products"}),t.jsx("div",{className:"divider-accent"}),t.jsx("h2",{className:"section-title mb-3",children:"Quality Paper Board Products"}),t.jsx("p",{className:"section-lead",children:"From lightweight kraft paper to heavy-duty grey boards — we supply the full spectrum of paper board products to meet diverse industrial requirements."})]}),t.jsx("div",{className:"col-lg-6 d-flex align-items-end justify-content-lg-end mt-3 mt-lg-0",children:t.jsxs(_,{to:"/products",className:"btn-outline-custom",children:["View All Products ",t.jsx(J,{size:16})]})})]}),t.jsx("div",{className:"row g-4",children:r.map((d,u)=>t.jsx("div",{className:`col-lg-4 col-md-6 fade-in delay-${Math.min(u+1,4)}`,children:t.jsx($n,{product:d})},d.id))})]})})}const fl=[{icon:t.jsx(on,{}),title:"Packaging Industry",desc:"Supplying robust paper board for rigid and flexible packaging solutions across India."},{icon:t.jsx(Gt,{}),title:"Corrugated Box Manufacturers",desc:"Providing medium and liner papers for 3-ply, 5-ply and 7-ply corrugated boards."},{icon:t.jsx(ce,{}),title:"Paper Converters",desc:"Raw board materials for converting into specialty packaging and printing substrates."},{icon:t.jsx(X,{}),title:"Industrial Packaging",desc:"Heavy-duty board grades for machinery, automotive, and electronics packaging."},{icon:t.jsx($r,{}),title:"E-Commerce & Logistics",desc:"Lightweight yet strong kraft papers for e-commerce fulfillment and courier packaging."},{icon:t.jsx(Yr,{}),title:"Printing & Publishing",desc:"Smooth coated boards for high-quality printing, book binding and stationery."}];function yl(){return t.jsx("section",{className:"section-padded section-bg-cream",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"text-center mb-5",children:[t.jsx("div",{className:"section-eyebrow",children:"Industries We Serve"}),t.jsx("div",{className:"divider-accent center"}),t.jsx("h2",{className:"section-title",children:"Trusted Across Industries"}),t.jsx("p",{className:"section-lead mx-auto mt-3",children:"Our paper board products serve a wide range of industries requiring consistent quality and reliable supply chains."})]}),t.jsx("div",{className:"row g-4",children:fl.map((r,e)=>t.jsx("div",{className:`col-lg-4 col-md-6 fade-in delay-${Math.min(e+1,4)}`,children:t.jsxs("div",{className:"industry-card",children:[t.jsx("div",{className:"industry-icon",children:r.icon}),t.jsx("div",{className:"industry-title",children:r.title}),t.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-mid)",lineHeight:1.7,margin:0},children:r.desc})]})},e))})]})})}const xl=[{icon:t.jsx(Gi,{}),title:"Premium Quality Assured",desc:"Every batch undergoes quality checks to meet ISI standards and customer specifications."},{icon:t.jsx(Mi,{}),title:"Consistent GSM & Width",desc:"Precise manufacturing ensures uniform GSM, width, and surface quality across all orders."},{icon:t.jsx(Di,{}),title:"Reliable Supply Chain",desc:"Well-stocked inventory ensures on-time delivery for both bulk and small quantity orders."},{icon:t.jsx(Wt,{}),title:"Dedicated Customer Support",desc:"Personalized service from inquiry to delivery with post-sale technical support."},{icon:t.jsx(Ci,{}),title:"Competitive Pricing",desc:"Factory-direct pricing with transparent quotes and no hidden charges for all clients."},{icon:t.jsx(zi,{}),title:"Pan-India Distribution",desc:"Efficient logistics network for timely delivery across Maharashtra and all India."}];function vl(){return t.jsx("section",{className:"section-padded",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"row align-items-center g-5",children:[t.jsxs("div",{className:"col-lg-5",children:[t.jsx("div",{className:"section-eyebrow",children:"Why Choose Us"}),t.jsx("div",{className:"divider-accent"}),t.jsx("h2",{className:"section-title mb-3",children:"The Pant Krupa Advantage"}),t.jsx("p",{className:"section-lead",children:"With over 11+ years of experience in the paper board industry, we've built our reputation on quality, reliability, and exceptional customer service."}),t.jsxs("div",{className:"mt-4",style:{background:"var(--cream)",padding:"1.5rem",borderRadius:"var(--radius-md)",borderLeft:"4px solid var(--accent)"},children:[t.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.1rem",color:"var(--primary-dark)",marginBottom:"0.5rem"},children:'"Shrikant D. Patil"'}),t.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-mid)",fontStyle:"italic"},children:"Proprietor, Shri Pant Krupa Paper Board"}),t.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-mid)",marginTop:"0.75rem",lineHeight:1.7,marginBottom:0},children:'"Our mission is to provide the paper board industry with materials that exceed expectations — consistent quality, fair pricing, and reliable delivery, every time."'})]})]}),t.jsx("div",{className:"col-lg-7",children:t.jsx("div",{className:"row g-3",children:xl.map((r,e)=>t.jsx("div",{className:`col-md-6 fade-in delay-${Math.min(e+1,4)}`,children:t.jsxs("div",{className:"why-item",children:[t.jsx("div",{className:"why-icon",children:r.icon}),t.jsxs("div",{children:[t.jsx("div",{className:"why-title",children:r.title}),t.jsx("div",{className:"why-desc",children:r.desc})]})]})},e))})})]})})})}const bl="917397849730",jl=encodeURIComponent(`Hello,
I am interested in your paper board products.
Please share more details.`);function vt(){return t.jsx("section",{className:"cta-section",children:t.jsx("div",{className:"container position-relative",style:{zIndex:1},children:t.jsx("div",{className:"row justify-content-center text-center",children:t.jsxs("div",{className:"col-lg-8",children:[t.jsx("div",{className:"section-eyebrow",style:{justifyContent:"center",display:"flex",marginBottom:"1rem"},children:"Ready to Order?"}),t.jsx("h2",{className:"cta-title",children:"Need Paper Board for Your Business?"}),t.jsx("p",{style:{color:"rgba(255,255,255,0.7)",fontSize:"1.05rem",lineHeight:1.8,margin:"1rem auto 2.5rem",maxWidth:560},children:"Get in touch with us today for a custom quote, product samples, or to discuss your specific requirements with our team."}),t.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-3",children:[t.jsxs(_,{to:"/contact",className:"btn-accent-custom",children:["Request Quote ",t.jsx(J,{size:16})]}),t.jsxs("a",{href:`https://wa.me/${bl}?text=${jl}`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.85rem 2rem",background:"#25d366",color:"#fff",borderRadius:"var(--radius)",border:"2px solid #25d366",fontSize:"0.9rem",fontWeight:500,letterSpacing:"0.05em",textTransform:"uppercase",fontFamily:"var(--ff-body)",transition:"all 0.3s ease"},children:[t.jsx(Be,{size:18})," WhatsApp Us"]}),t.jsxs("a",{href:"tel:+919876543210",className:"btn-outline-custom",style:{borderColor:"rgba(255,255,255,0.4)",color:"#fff"},children:[t.jsx(Ht,{size:16})," Call Now"]})]})]})})})})}function Yn({blog:r}){var n,i;const e=(n=r.createdAt)!=null&&n.toDate?r.createdAt.toDate().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"Recent";return t.jsxs("div",{className:"blog-card",children:[t.jsx("div",{className:"blog-card-image",children:r.featuredImage?t.jsx("img",{src:r.featuredImage,alt:r.title,loading:"lazy"}):t.jsxs("div",{style:{width:"100%",height:"100%",background:"var(--cream)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-light)",flexDirection:"column",gap:"0.5rem"},children:[t.jsxs("svg",{width:"32",height:"32",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:[t.jsx("path",{d:"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z"}),t.jsx("path",{d:"M13 2v6h6M9 12h6M9 16h4"})]}),t.jsx("span",{style:{fontSize:"0.75rem"},children:"Blog Post"})]})}),t.jsxs("div",{className:"blog-card-body",children:[t.jsxs("div",{className:"blog-card-date",children:[t.jsx(an,{size:12})," ",e,r.author&&t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{margin:"0 0.25rem"},children:"·"}),t.jsx(Kt,{size:12})," ",r.author]})]}),t.jsx("div",{className:"blog-card-title",children:r.title}),t.jsxs("p",{className:"blog-card-excerpt",children:[r.excerpt||((i=r.content)==null?void 0:i.substring(0,120)),"..."]}),t.jsxs(_,{to:`/blog/${r.slug}`,className:"product-card-link",children:["Read More ",t.jsx(J,{size:13})]})]})]})}const ze="blogs",bt=async(r={})=>{try{let n=(await oe(C(N,ze))).docs.map(i=>({id:i.id,...i.data()}));return r.status&&(n=n.filter(i=>i.status===r.status)),n.sort((i,s)=>{var a,o;return(((a=s.createdAt)==null?void 0:a.seconds)||0)-(((o=i.createdAt)==null?void 0:o.seconds)||0)}),r.limit&&(n=n.slice(0,r.limit)),n}catch(e){return console.error("Error fetching blogs:",e),[]}},kl=async r=>{try{const e=ct(C(N,ze),zt("slug","==",r)),n=await oe(e);if(n.empty)return null;const i=n.docs[0];return{id:i.id,...i.data()}}catch(e){return console.error("Error fetching blog:",e),null}},wl=async r=>(await ke(C(N,ze),{...r,createdAt:H()})).id,Or=async(r,e)=>{await dt(K(N,ze,r),{...e,updatedAt:H()})},Sl=async r=>{await we(K(N,ze,r))};function he(){m.useEffect(()=>{const r=document.querySelectorAll(".fade-in, .slide-up"),e=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),e.unobserve(i.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return r.forEach(n=>e.observe(n)),()=>e.disconnect()},[])}const _l=[{id:"1",title:"Understanding GSM in Paper Boards: A Complete Guide",slug:"gsm-paper-boards-guide",author:"Admin",excerpt:"Learn what GSM means in paper boards and how to choose the right weight for your packaging needs.",createdAt:null,status:"published"},{id:"2",title:"Kraft Paper vs Duplex Board: Which Is Right for Your Business?",slug:"kraft-vs-duplex-board",author:"Admin",excerpt:"A detailed comparison of kraft paper and duplex board to help you make the right purchasing decision.",createdAt:null,status:"published"},{id:"3",title:"Sustainable Packaging Trends in India's Paper Board Industry",slug:"sustainable-packaging-trends",author:"Admin",excerpt:"Explore how Indian paper board manufacturers are adapting to eco-friendly packaging demands.",createdAt:new Date,status:"published"}];function Il(){he();const[r,e]=m.useState(_l);return m.useEffect(()=>{bt({status:"published",limit:3}).then(n=>{n.length>0&&e(n)}).catch(()=>{})},[]),t.jsxs(t.Fragment,{children:[t.jsx(dl,{}),t.jsx("div",{style:{background:"var(--primary)",padding:"1.5rem 0"},children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"row align-items-center text-center text-md-start",children:[t.jsx("div",{className:"col-md-8",children:t.jsx("p",{style:{color:"rgba(255,255,255,0.85)",margin:0,fontSize:"0.95rem"},children:"📍 GATE NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202  |  Proprietor: Omkar Shrikant Patil"})}),t.jsx("div",{className:"col-md-4 text-md-end mt-2 mt-md-0",children:t.jsx("a",{href:"tel:+919876543210",style:{color:"var(--accent-light)",fontFamily:"var(--ff-heading)",fontSize:"1rem",fontWeight:600},children:"📞 +91 98765 43210"})})]})})}),t.jsx(gl,{}),t.jsx(yl,{}),t.jsx(vl,{}),t.jsx("section",{className:"section-padded section-bg-cream",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"row mb-5",children:[t.jsxs("div",{className:"col-lg-6",children:[t.jsx("div",{className:"section-eyebrow",children:"From Our Blog"}),t.jsx("div",{className:"divider-accent"}),t.jsx("h2",{className:"section-title",children:"Industry Insights & News"})]}),t.jsx("div",{className:"col-lg-6 d-flex align-items-end justify-content-lg-end mt-3 mt-lg-0",children:t.jsxs(_,{to:"/blog",className:"btn-outline-custom",children:["View All Posts ",t.jsx(J,{size:16})]})})]}),t.jsx("div",{className:"row g-4",children:r.map((n,i)=>t.jsx("div",{className:`col-lg-4 col-md-6 fade-in delay-${i+1}`,children:t.jsx(Yn,{blog:n})},n.id))})]})}),t.jsx(vt,{})]})}function Nl(){return he(),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"page-header",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"page-header-breadcrumb",children:[t.jsx(_,{to:"/",children:"Home"})," / About Us"]}),t.jsx("h1",{className:"page-header-title mt-2",children:"About Us"}),t.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Kolhapur's trusted paper board manufacturer since years"})]})}),t.jsx("section",{className:"section-padded",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"row align-items-center g-5",children:[t.jsxs("div",{className:"col-lg-6 fade-in",children:[t.jsx("div",{className:"section-eyebrow",children:"Our Story"}),t.jsx("div",{className:"divider-accent"}),t.jsx("h2",{className:"section-title mb-3",children:"Who We Are"}),t.jsxs("p",{style:{color:"var(--text-mid)",lineHeight:1.9,marginBottom:"1.25rem"},children:["Shri Pant Krupa Paper Board is a leading paper board manufacturer and trader based in Kolhapur, Maharashtra. Founded by ",t.jsx("strong",{children:"Omkar Shrikant Patil"}),", we have built a reputation for delivering consistent quality paper board products to clients across India."]}),t.jsx("p",{style:{color:"var(--text-mid)",lineHeight:1.9,marginBottom:"1.75rem"},children:"Located at GAT NO 3, A-2, A/P Halsavade, Kolhapur — our facility is equipped with modern manufacturing infrastructure to produce Kraft Paper, Mill Board, Duplex Board, Grey Board, and specialty packing boards across a wide range of GSM specifications."}),t.jsx("div",{className:"row g-3",children:[{icon:t.jsx(Zo,{}),label:"Manufacturing & Trading"},{icon:t.jsx(Xo,{}),label:"Eco-Friendly Practices"},{icon:t.jsx(el,{}),label:"India-wide Distribution"}].map((r,e)=>t.jsx("div",{className:"col-sm-4",children:t.jsxs("div",{style:{background:"var(--cream)",padding:"1rem",borderRadius:"var(--radius-md)",textAlign:"center"},children:[t.jsx("div",{style:{color:"var(--primary)",fontSize:"1.25rem",marginBottom:"0.5rem"},children:r.icon}),t.jsx("div",{style:{fontSize:"0.8rem",fontWeight:600,color:"var(--text-dark)"},children:r.label})]})},e))})]}),t.jsx("div",{className:"col-lg-6 fade-in delay-2",children:t.jsxs("div",{style:{background:"var(--primary)",borderRadius:"var(--radius-lg)",padding:"2.5rem",color:"#fff"},children:[t.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.4rem",fontWeight:700,marginBottom:"1.5rem",borderBottom:"1px solid rgba(255,255,255,0.15)",paddingBottom:"1rem"},children:"Company Details"}),[{label:"Company",value:"Shri Pant Krupa Paper Board"},{label:"Proprietor",value:"Shrikant D. Patil"},{label:"Business Type",value:"Manufacturer / Trader"},{label:"Location",value:"Halsavade, Kolhapur, MH"},{label:"GSM Range",value:"200 – 550 GSM"},{label:"Products",value:"Kraft, Mill Board, Duplex, Grey Board"},{label:"Delivery",value:"Pan India"}].map((r,e)=>t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.6rem 0",borderBottom:"1px solid rgba(255,255,255,0.07)",fontSize:"0.88rem"},children:[t.jsx("span",{style:{color:"rgba(255,255,255,0.55)",textTransform:"uppercase",letterSpacing:"0.05em",fontSize:"0.75rem"},children:r.label}),t.jsx("span",{style:{color:"#fff",fontWeight:500,textAlign:"right",maxWidth:"60%"},children:r.value})]},e))]})})]})})}),t.jsx("section",{className:"section-padded section-bg-cream",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"text-center mb-5",children:[t.jsx("div",{className:"section-eyebrow",children:"Our Direction"}),t.jsx("div",{className:"divider-accent center"}),t.jsx("h2",{className:"section-title",children:"Vision & Mission"})]}),t.jsxs("div",{className:"row g-4",children:[t.jsx("div",{className:"col-md-6 fade-in delay-1",children:t.jsxs("div",{style:{background:"#fff",padding:"2.5rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border)",height:"100%"},children:[t.jsx("div",{style:{width:56,height:56,background:"var(--primary)",borderRadius:"var(--radius)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-light)",fontSize:"1.3rem",marginBottom:"1.5rem"},children:t.jsx(en,{})}),t.jsx("h3",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.4rem",color:"var(--primary-dark)",marginBottom:"1rem"},children:"Our Vision"}),t.jsx("p",{style:{color:"var(--text-mid)",lineHeight:1.9,margin:0},children:"To become the most trusted and preferred paper board supplier in Western India, known for uncompromising quality standards, sustainable manufacturing practices, and building long-term partnerships with our clients."})]})}),t.jsx("div",{className:"col-md-6 fade-in delay-2",children:t.jsxs("div",{style:{background:"#fff",padding:"2.5rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border)",height:"100%"},children:[t.jsx("div",{style:{width:56,height:56,background:"var(--accent)",borderRadius:"var(--radius)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"1.3rem",marginBottom:"1.5rem"},children:t.jsx(Oi,{})}),t.jsx("h3",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.4rem",color:"var(--primary-dark)",marginBottom:"1rem"},children:"Our Mission"}),t.jsx("p",{style:{color:"var(--text-mid)",lineHeight:1.9,margin:0},children:"To manufacture and supply high-quality paper board products consistently, while maintaining competitive pricing, ensuring reliable delivery timelines, and providing personalized service that makes every client feel valued and supported."})]})})]})]})}),t.jsx("section",{className:"section-padded",children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row justify-content-center",children:t.jsxs("div",{className:"col-lg-8 text-center fade-in",children:[t.jsx("div",{className:"section-eyebrow",children:"From the Proprietor"}),t.jsx("div",{className:"divider-accent center"}),t.jsx("h2",{className:"section-title mb-4",children:"A Message from Our Founder"}),t.jsxs("div",{style:{background:"var(--cream)",padding:"3rem",borderRadius:"var(--radius-lg)",borderTop:"4px solid var(--accent)",position:"relative"},children:[t.jsx("div",{style:{fontSize:"4rem",color:"var(--accent)",opacity:.3,fontFamily:"Georgia",lineHeight:1,marginBottom:"1rem"},children:'"'}),t.jsx("p",{style:{fontSize:"1.05rem",color:"var(--text-mid)",lineHeight:1.9,fontStyle:"italic",marginBottom:"1.5rem"},children:"We started Shri Pant Krupa Paper Board with a single goal: to supply the Indian paper board industry with materials they can depend on. Quality has never been a compromise for us — it's the foundation of every product we manufacture. As we grow, we remain committed to our clients, our community, and to sustainable business practices that respect our environment."}),t.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.1rem",fontWeight:700,color:"var(--primary-dark)"},children:"Omkar Shrikant Patil"}),t.jsx("div",{style:{fontSize:"0.8rem",color:"var(--accent)",letterSpacing:"0.1em",textTransform:"uppercase",marginTop:"0.25rem"},children:"Proprietor"})]})]})})})}),t.jsx("section",{className:"section-padded section-bg-cream",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"text-center mb-5",children:[t.jsx("div",{className:"section-eyebrow",children:"What We Do"}),t.jsx("div",{className:"divider-accent center"}),t.jsx("h2",{className:"section-title",children:"Manufacturing Capabilities"})]}),t.jsx("div",{className:"row g-4",children:[{title:"Wide GSM Range",desc:"Manufacturing paper boards from 200 GSM lightweight to 550 GSM heavy grades.",icon:"⚖️"},{title:"Custom Widths",desc:"Available in standard and custom widths from 18 to 46 inches based on client requirements.",icon:"📏"},{title:"Multiple Grades",desc:"Kraft, Mill, Duplex, Grey, and specialty grades for diverse packaging applications.",icon:"🗂️"},{title:"Bulk Supply",desc:"Capacity to handle bulk orders with consistent quality for large manufacturers.",icon:"🏭"},{title:"Quality Testing",desc:"In-house quality checks for GSM, burst factor, tensile strength, and moisture content.",icon:"🔬"},{title:"Timely Delivery",desc:"Reliable logistics network Efficient warehousing solutions Timely delivery across India",icon:"🚛"}].map((r,e)=>t.jsx("div",{className:`col-lg-4 col-md-6 fade-in delay-${Math.min(e+1,4)}`,children:t.jsxs("div",{style:{background:"#fff",padding:"1.75rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border)",display:"flex",gap:"1rem",alignItems:"flex-start"},children:[t.jsx("div",{style:{fontSize:"1.75rem",lineHeight:1},children:r.icon}),t.jsxs("div",{children:[t.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontWeight:600,color:"var(--primary-dark)",marginBottom:"0.5rem"},children:r.title}),t.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-mid)",lineHeight:1.7},children:r.desc})]})]})},e))})]})}),t.jsx("section",{className:"section-padded",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"text-center mb-4",children:[t.jsx("div",{className:"section-eyebrow",children:"Our Location"}),t.jsx("div",{className:"divider-accent center"}),t.jsx("h2",{className:"section-title",children:"Find Us"}),t.jsxs("p",{style:{color:"var(--text-mid)",display:"flex",alignItems:"center",gap:"0.4rem",justifyContent:"center",marginTop:"0.5rem"},children:[t.jsx(Vt,{color:"var(--accent)"})," GAT NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202"]})]}),t.jsx("div",{style:{borderRadius:"var(--radius-lg)",overflow:"hidden",height:400,border:"1px solid var(--border)"},children:t.jsx("iframe",{title:"Shri Pant Krupa Paper Board Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8252008960726!2d74.3325096111029!3d16.635539684062838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0fdfed4edea8b%3A0x772879a571c95b7c!2sSHRI%20PANT%20KRUPA%20PAPER%20BOARD!5e0!3m2!1sen!2sin!4v1773083309900!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy"})})]})}),t.jsx(vt,{})]})}function Al(){he();const[r,e]=m.useState([]),[n,i]=m.useState(!0),[s]=Ur(),[a,o]=m.useState(s.get("category")||"All"),[c,l]=m.useState("");m.useEffect(()=>{xt().then(h=>e(h)).catch(()=>e([])).finally(()=>i(!1))},[]),m.useEffect(()=>{const h=s.get("category");h&&o(h)},[s]);const d=["All",...new Set(r.map(h=>h.category).filter(Boolean))],u=r.filter(h=>{const g=a==="All"||h.category===a,p=!c||h.name.toLowerCase().includes(c.toLowerCase());return g&&p});return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"page-header cream-bottom",style:{"--page-bg":"var(--cream)"},children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"page-header-breadcrumb",children:[t.jsx(_,{to:"/",children:"Home"})," / Products"]}),t.jsx("h1",{className:"page-header-title mt-2",children:"Our Products"}),t.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Premium paper board products for every industrial requirement"})]})}),t.jsx("section",{className:"section-padded",style:{paddingTop:"3rem"},children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"d-flex flex-wrap gap-3 align-items-center mb-5",children:[t.jsx("div",{className:"d-flex flex-wrap gap-2",children:d.map(h=>t.jsx("button",{onClick:()=>o(h),style:{padding:"0.5rem 1.1rem",borderRadius:100,border:"1.5px solid",borderColor:a===h?"var(--primary)":"var(--border)",background:a===h?"var(--primary)":"transparent",color:a===h?"#fff":"var(--text-mid)",fontSize:"0.8rem",fontWeight:500,cursor:"pointer",transition:"all 0.2s ease",fontFamily:"var(--ff-body)"},children:h},h))}),t.jsxs("div",{className:"ms-md-auto",style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"#f9fafb",border:"1px solid var(--border)",borderRadius:"var(--radius)",padding:"0.5rem 1rem"},children:[t.jsx(Qr,{size:14,color:"var(--text-light)"}),t.jsx("input",{value:c,onChange:h=>l(h.target.value),placeholder:"Search products...",style:{border:"none",background:"none",outline:"none",fontSize:"0.85rem",color:"var(--text-dark)",minWidth:180}})]})]}),n?t.jsxs("div",{className:"text-center py-5",children:[t.jsx("div",{className:"spinner-border",style:{color:"var(--primary)"}}),t.jsx("p",{style:{color:"var(--text-light)",marginTop:"1rem"},children:"Loading products..."})]}):u.length===0?t.jsx("div",{className:"text-center py-5",children:t.jsx("p",{style:{color:"var(--text-light)"},children:"No products found."})}):t.jsx("div",{className:"row g-4",children:u.map((h,g)=>t.jsx("div",{className:`col-lg-3 col-md-6 fade-in delay-${Math.min(g%4+1,4)}`,children:t.jsx($n,{product:h})},h.id))})]})}),t.jsx(vt,{})]})}function Jn({productName:r=""}){const[e,n]=m.useState({name:"",phone:"",email:"",product:r,message:""}),[i,s]=m.useState(!1),[a,o]=m.useState(!1),[c,l]=m.useState(""),d=h=>n(g=>({...g,[h.target.name]:h.target.value})),u=async h=>{if(h.preventDefault(),!e.name||!e.phone){l("Name and phone are required.");return}s(!0),l("");try{await zo(e),o(!0),n({name:"",phone:"",email:"",product:r,message:""})}catch{l("Failed to submit. Please try again.")}finally{s(!1)}};return a?t.jsxs("div",{className:"text-center py-5",children:[t.jsx(sn,{size:48,color:"var(--accent)",className:"mb-3"}),t.jsx("h4",{style:{fontFamily:"var(--ff-heading)",color:"var(--primary-dark)"},children:"Enquiry Submitted!"}),t.jsx("p",{style:{color:"var(--text-mid)"},children:"We'll get back to you within 24 hours."}),t.jsx("button",{className:"btn-primary-custom mt-3",onClick:()=>o(!1),children:"Send Another"})]}):t.jsxs("form",{onSubmit:u,children:[c&&t.jsx("div",{className:"alert alert-danger mb-3",style:{fontSize:"0.85rem"},children:c}),t.jsxs("div",{className:"row g-3",children:[t.jsxs("div",{className:"col-md-6",children:[t.jsx("label",{className:"form-label-custom",children:"Full Name *"}),t.jsx("input",{name:"name",value:e.name,onChange:d,className:"form-control-custom",placeholder:"Your name",required:!0})]}),t.jsxs("div",{className:"col-md-6",children:[t.jsx("label",{className:"form-label-custom",children:"Phone *"}),t.jsx("input",{name:"phone",value:e.phone,onChange:d,className:"form-control-custom",placeholder:"+91 XXXXX XXXXX",required:!0})]}),t.jsxs("div",{className:"col-md-6",children:[t.jsx("label",{className:"form-label-custom",children:"Email"}),t.jsx("input",{name:"email",type:"email",value:e.email,onChange:d,className:"form-control-custom",placeholder:"your@email.com"})]}),t.jsxs("div",{className:"col-md-6",children:[t.jsx("label",{className:"form-label-custom",children:"Product of Interest"}),t.jsx("input",{name:"product",value:e.product,onChange:d,className:"form-control-custom",placeholder:"e.g. Kraft Paper"})]}),t.jsxs("div",{className:"col-12",children:[t.jsx("label",{className:"form-label-custom",children:"Message"}),t.jsx("textarea",{name:"message",value:e.message,onChange:d,className:"form-control-custom",rows:4,placeholder:"Tell us about your requirements...",style:{resize:"vertical"}})]}),t.jsx("div",{className:"col-12",children:t.jsx("button",{type:"submit",className:"btn-primary-custom",disabled:i,children:i?"Submitting...":t.jsxs(t.Fragment,{children:[t.jsx(Jr,{})," Send Enquiry"]})})})]})]})}function Tl(){var d,u,h;const{slug:r}=Br(),[e,n]=m.useState(null),[i,s]=m.useState(!0),[a,o]=m.useState(0),[c,l]=m.useState(!1);return m.useEffect(()=>{s(!0),n(null),ul(r).then(g=>n(g)).catch(()=>n(null)).finally(()=>s(!1))},[r]),i?t.jsxs("div",{className:"container py-5 text-center",children:[t.jsx("div",{className:"spinner-border",style:{color:"var(--primary)"}}),t.jsx("p",{style:{color:"var(--text-light)",marginTop:"1rem"},children:"Loading product..."})]}):e?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{background:"var(--cream)",padding:"1.25rem 0",borderBottom:"1px solid var(--border)"},children:t.jsx("div",{className:"container",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.82rem",color:"var(--text-mid)"},children:[t.jsx(_,{to:"/",style:{color:"var(--accent)"},children:"Home"})," /",t.jsx(_,{to:"/products",style:{color:"var(--accent)"},children:"Products"})," /",t.jsx("span",{children:e.name})]})})}),t.jsx("section",{className:"section-padded",style:{paddingTop:"3rem"},children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"row g-5",children:[t.jsxs("div",{className:"col-lg-5",children:[t.jsx("div",{style:{borderRadius:"var(--radius-lg)",overflow:"hidden",background:"var(--cream)",height:380,display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--border)"},children:(d=e.images)!=null&&d[a]?t.jsx("img",{src:e.images[a],alt:e.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):t.jsxs("div",{style:{textAlign:"center",color:"var(--text-light)"},children:[t.jsx(ce,{size:64,strokeWidth:1}),t.jsx("p",{style:{marginTop:"1rem",fontFamily:"var(--ff-heading)",fontSize:"1.1rem"},children:e.name}),t.jsx("p",{style:{fontSize:"0.8rem"},children:"No image available"})]})}),((u=e.images)==null?void 0:u.length)>1&&t.jsx("div",{className:"d-flex gap-2 mt-3 flex-wrap",children:e.images.map((g,p)=>t.jsx("div",{onClick:()=>o(p),style:{width:68,height:68,borderRadius:"var(--radius)",overflow:"hidden",cursor:"pointer",border:`2px solid ${a===p?"var(--primary)":"var(--border)"}`,transition:"border-color 0.2s"},children:t.jsx("img",{src:g,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}})},p))})]}),t.jsxs("div",{className:"col-lg-7",children:[e.category&&t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.35rem",fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--accent)",background:"rgba(200,150,62,0.1)",padding:"0.3rem 0.75rem",borderRadius:100,marginBottom:"0.75rem"},children:[t.jsx(ht,{size:11})," ",e.category]}),t.jsx("h1",{style:{fontFamily:"var(--ff-heading)",fontSize:"clamp(1.75rem, 3vw, 2.5rem)",fontWeight:700,color:"var(--primary-dark)",marginBottom:"1.25rem"},children:e.name}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1.25rem",marginBottom:"1.25rem",padding:"1rem",background:"var(--cream)",borderRadius:"var(--radius-md)"},children:[e.gsm&&t.jsxs("div",{style:{fontSize:"0.88rem",color:"var(--text-mid)"},children:[t.jsx(ce,{size:14,color:"var(--accent)",style:{marginRight:4}}),t.jsx("strong",{children:"GSM:"})," ",e.gsm]}),e.width&&t.jsxs("div",{style:{fontSize:"0.88rem",color:"var(--text-mid)"},children:[t.jsx(Xr,{size:14,color:"var(--accent)",style:{marginRight:4}}),t.jsx("strong",{children:"Width:"})," ",e.width]}),e.priceRange&&t.jsxs("div",{style:{fontSize:"0.88rem",color:"var(--text-mid)"},children:[t.jsx("strong",{style:{color:"var(--primary)"},children:"Price:"})," ",e.priceRange]})]}),t.jsx("div",{style:{height:1,background:"var(--border)",margin:"1.25rem 0"}}),e.description&&t.jsx("p",{style:{color:"var(--text-mid)",lineHeight:1.9,whiteSpace:"pre-line",marginBottom:"1.5rem"},children:e.description}),((h=e.applications)==null?void 0:h.length)>0&&t.jsxs("div",{style:{marginBottom:"2rem"},children:[t.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontWeight:600,color:"var(--primary-dark)",marginBottom:"0.75rem"},children:"Applications"}),t.jsx("div",{className:"row g-2",children:e.applications.map((g,p)=>t.jsx("div",{className:"col-sm-6",children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",color:"var(--text-mid)"},children:[t.jsx(sn,{size:14,color:"var(--accent)"})," ",g]})},p))})]}),t.jsxs("div",{className:"d-flex flex-wrap gap-3",children:[t.jsxs("button",{onClick:()=>l(!c),className:"btn-primary-custom",children:[t.jsx(Jr,{size:15})," ",c?"Hide Form":"Send Enquiry"]}),t.jsx(il,{product:e.name})]})]})]}),c&&t.jsx("div",{className:"row justify-content-center mt-5",children:t.jsx("div",{className:"col-lg-8",children:t.jsxs("div",{style:{background:"var(--cream)",padding:"2.5rem",borderRadius:"var(--radius-lg)",border:"1px solid var(--border)"},children:[t.jsxs("h3",{style:{fontFamily:"var(--ff-heading)",color:"var(--primary-dark)",marginBottom:"1.5rem"},children:["Enquire About ",e.name]}),t.jsx(Jn,{productName:e.name})]})})}),t.jsx("div",{className:"mt-4",children:t.jsxs(_,{to:"/products",style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",fontSize:"0.85rem",color:"var(--primary)",fontWeight:500},children:[t.jsx(ln,{size:14})," Back to Products"]})})]})})]}):t.jsxs("div",{className:"container py-5 text-center",children:[t.jsx(X,{size:48,color:"var(--text-light)",strokeWidth:1}),t.jsx("h2",{style:{fontFamily:"var(--ff-heading)",marginTop:"1rem"},children:"Product Not Found"}),t.jsx("p",{style:{color:"var(--text-light)"},children:"This product may have been removed or the link is incorrect."}),t.jsx(_,{to:"/products",className:"btn-primary-custom mt-3",children:"Back to Products"})]})}const El=[{icon:t.jsx(on,{size:28}),title:"Packaging Industry",desc:"We supply premium paper boards to packaging manufacturers who require consistent GSM, strength, and surface finish for primary and secondary packaging.",products:["Duplex Board","Kraft Liner","Mill Board"]},{icon:t.jsx(Gt,{size:28}),title:"Corrugated Box Manufacturers",desc:"Providing corrugating medium, test liners, and kraft liners for manufacturing 3-ply, 5-ply, and 7-ply corrugated boards for all industries.",products:["Corrugated Medium","Kraft Liner","Test Liner"]},{icon:t.jsx(ce,{size:28}),title:"Paper Converters",desc:"Raw board materials for converting into specialty packaging, laminates, foil boards, and printing substrates for various end uses.",products:["Mill Board","Duplex Board","Grey Board"]},{icon:t.jsx(X,{size:28}),title:"Industrial Packaging",desc:"Heavy-duty board grades for machinery, automotive spare parts, electronics, and engineering goods requiring robust protective packaging.",products:["Grey Board","Rigid Board","Mill Board"]},{icon:t.jsx($r,{size:28}),title:"E-Commerce & Logistics",desc:"Lightweight yet strong kraft papers and liner boards for e-commerce fulfillment, courier packaging and retail-ready packaging solutions.",products:["Kraft Paper","Packing Board","Test Liner"]},{icon:t.jsx(Yr,{size:28}),title:"Printing & Publishing",desc:"Smooth coated boards for high-quality offset and digital printing, book binding, stationery, and premium packaging with print.",products:["Duplex Board","Chrome Board","Art Board"]}];function Pl(){return he(),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"page-header",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"page-header-breadcrumb",children:[t.jsx(_,{to:"/",children:"Home"})," / Industries"]}),t.jsx("h1",{className:"page-header-title mt-2",children:"Industries We Serve"}),t.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Trusted paper board supplier across diverse industries"})]})}),t.jsx("section",{className:"section-padded",children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row g-4",children:El.map((r,e)=>t.jsx("div",{className:`col-lg-6 fade-in delay-${Math.min(e%3+1,3)}`,children:t.jsx("div",{style:{background:"#fff",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",padding:"2rem",height:"100%",transition:"all 0.3s ease"},children:t.jsxs("div",{style:{display:"flex",gap:"1.25rem",alignItems:"flex-start"},children:[t.jsx("div",{style:{width:60,height:60,background:"var(--cream)",borderRadius:"var(--radius)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)",flexShrink:0},children:r.icon}),t.jsxs("div",{children:[t.jsx("h3",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.25rem",color:"var(--primary-dark)",marginBottom:"0.75rem"},children:r.title}),t.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-mid)",lineHeight:1.8,marginBottom:"1rem"},children:r.desc}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:r.products.map(n=>t.jsx("span",{style:{background:"var(--cream)",color:"var(--primary)",fontSize:"0.75rem",fontWeight:600,padding:"0.25rem 0.75rem",borderRadius:100,border:"1px solid var(--border)"},children:n},n))})]})]})})},e))})})}),t.jsx(vt,{})]})}const Mr=[{id:"1",title:"Understanding GSM in Paper Boards: A Complete Guide",slug:"gsm-paper-boards-guide",author:"Admin",excerpt:"Learn what GSM means in paper boards and how to choose the right weight for your specific packaging needs.",status:"published",createdAt:null},{id:"2",title:"Kraft Paper vs Duplex Board: Which Is Right for Your Business?",slug:"kraft-vs-duplex-board",author:"Admin",excerpt:"A detailed comparison of kraft paper and duplex board to help you make the right purchasing decision for your packaging line.",status:"published",createdAt:null},{id:"3",title:"Sustainable Packaging Trends in India's Paper Board Industry",slug:"sustainable-packaging-trends",author:"Admin",excerpt:"Explore how Indian paper board manufacturers are adapting to growing eco-friendly packaging demands from global brands.",status:"published",createdAt:null},{id:"4",title:"How to Select the Right Mill Board for Book Binding",slug:"mill-board-book-binding",author:"Admin",excerpt:"A practical guide for publishers and binders on selecting the correct mill board grade, GSM and surface finish.",status:"published",createdAt:null},{id:"5",title:"Corrugated Box Manufacturing: Raw Material Selection Guide",slug:"corrugated-box-raw-materials",author:"Admin",excerpt:"Understanding liner grades, medium quality, and how the right kraft paper impacts the final strength of corrugated boxes.",status:"published",createdAt:null},{id:"6",title:"Why Kolhapur is a Hub for Paper Board Manufacturing in Maharashtra",slug:"kolhapur-paper-board-hub",author:"Admin",excerpt:"An insight into why Kolhapur has emerged as a key production center for paper board in western Maharashtra.",status:"published",createdAt:null}];function Cl(){he();const[r,e]=m.useState(Mr);return m.useEffect(()=>{bt({status:"published"}).then(n=>e(n.length>0?n:Mr)).catch(()=>{})},[]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"page-header",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"page-header-breadcrumb",children:[t.jsx(_,{to:"/",children:"Home"})," / Blog"]}),t.jsx("h1",{className:"page-header-title mt-2",children:"Blog & Insights"}),t.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Industry knowledge, product guides, and paper board insights"})]})}),t.jsx("section",{className:"section-padded",children:t.jsxs("div",{className:"container",children:[t.jsx("div",{className:"row g-4",children:r.map((n,i)=>t.jsx("div",{className:`col-lg-4 col-md-6 fade-in delay-${Math.min(i%3+1,3)}`,children:t.jsx(Yn,{blog:n})},n.id))}),r.length===0&&t.jsx("div",{className:"text-center py-5",children:t.jsx("p",{style:{color:"var(--text-light)"},children:"No blog posts yet. Check back soon!"})})]})})]})}const Rl={"gsm-paper-boards-guide":{title:"Understanding GSM in Paper Boards: A Complete Guide",author:"Admin",status:"published",content:`GSM stands for Grams per Square Metre, and it is the standard unit used to measure the weight (and indirectly, the thickness and density) of paper and paperboard.

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

At Shri Pant Krupa Paper Board, we help our clients select the exact GSM specification that optimizes performance and cost for their specific application.`,tags:["GSM","Paper Board","Packaging","Guide"]}};function Ll(){var o,c;const{slug:r}=Br(),[e,n]=m.useState(Rl[r]||null),[i,s]=m.useState(!0);if(m.useEffect(()=>{kl(r).then(l=>{l&&n(l)}).catch(()=>{}).finally(()=>s(!1))},[r]),i)return t.jsx("div",{className:"container py-5 text-center",children:t.jsx("div",{className:"spinner-border",style:{color:"var(--primary)"}})});if(!e)return t.jsxs("div",{className:"container py-5 text-center",children:[t.jsx("h2",{style:{fontFamily:"var(--ff-heading)"},children:"Blog Post Not Found"}),t.jsx(_,{to:"/blog",className:"btn-primary-custom mt-3",children:"Back to Blog"})]});const a=(o=e.createdAt)!=null&&o.toDate?e.createdAt.toDate().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):"Recent";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"page-header",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"page-header-breadcrumb",children:[t.jsx(_,{to:"/",children:"Home"})," / ",t.jsx(_,{to:"/blog",children:"Blog"})," / Article"]}),t.jsx("h1",{className:"page-header-title mt-2",style:{fontSize:"clamp(1.5rem, 3vw, 2.5rem)"},children:e.title}),t.jsxs("div",{className:"d-flex flex-wrap gap-3 mt-3",style:{color:"rgba(255,255,255,0.65)",fontSize:"0.85rem"},children:[t.jsxs("span",{className:"d-flex align-items-center gap-1",children:[t.jsx(an,{size:13})," ",a]}),e.author&&t.jsxs("span",{className:"d-flex align-items-center gap-1",children:[t.jsx(Kt,{size:13})," ",e.author]})]})]})}),t.jsx("section",{className:"section-padded",children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row justify-content-center",children:t.jsxs("div",{className:"col-lg-8",children:[e.featuredImage&&t.jsx("img",{src:e.featuredImage,alt:e.title,style:{width:"100%",height:400,objectFit:"cover",borderRadius:"var(--radius-lg)",marginBottom:"2.5rem"}}),t.jsx("article",{style:{fontFamily:"var(--ff-body)",fontSize:"1rem",lineHeight:1.9,color:"var(--text-mid)"},children:(e.content||"").split(`
`).map((l,d)=>l.trim()?l.startsWith("**")&&l.endsWith("**")?t.jsx("h3",{style:{fontFamily:"var(--ff-heading)",color:"var(--primary-dark)",margin:"2rem 0 1rem",fontSize:"1.3rem"},children:l.replace(/\*\*/g,"")},d):l.startsWith("- ")?t.jsx("li",{style:{marginBottom:"0.5rem"},children:l.replace("- ","")},d):/^\d+\./.test(l)?t.jsx("li",{style:{marginBottom:"0.5rem"},children:l.replace(/^\d+\.\s/,"")},d):t.jsx("p",{children:l.replace(/\*\*/g,"")},d):t.jsx("br",{},d))}),((c=e.tags)==null?void 0:c.length)>0&&t.jsxs("div",{className:"mt-4",style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",alignItems:"center"},children:[t.jsx(ht,{size:14,color:"var(--text-light)"}),e.tags.map(l=>t.jsx("span",{style:{background:"var(--cream)",color:"var(--primary)",fontSize:"0.78rem",fontWeight:600,padding:"0.25rem 0.75rem",borderRadius:100,border:"1px solid var(--border)"},children:l},l))]}),t.jsx("div",{className:"mt-5",style:{paddingTop:"2rem",borderTop:"1px solid var(--border)"},children:t.jsxs(_,{to:"/blog",style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",fontSize:"0.85rem",color:"var(--primary)",fontWeight:500},children:[t.jsx(ln,{size:14})," Back to Blog"]})})]})})})})]})}const Ol=[{id:"1",title:"Kraft Paper Manufacturing",category:"Manufacturing",image:""},{id:"2",title:"Paper Board Rolls",category:"Products",image:""},{id:"3",title:"Mill Board Stacks",category:"Products",image:""},{id:"4",title:"Production Floor",category:"Facility",image:""},{id:"5",title:"Duplex Board Samples",category:"Products",image:""},{id:"6",title:"Quality Testing",category:"Quality",image:""},{id:"7",title:"Dispatch Area",category:"Facility",image:""},{id:"8",title:"Grey Board Rolls",category:"Products",image:""}];function Ml(){he();const[r,e]=m.useState(Ol),[n,i]=m.useState("All"),[s,a]=m.useState(null);m.useEffect(()=>{nr().then(l=>{l.length>0&&e(l)}).catch(()=>{})},[]);const o=["All",...new Set(r.map(l=>l.category).filter(Boolean))],c=n==="All"?r:r.filter(l=>l.category===n);return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"page-header",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"page-header-breadcrumb",children:[t.jsx(_,{to:"/",children:"Home"})," / Gallery"]}),t.jsx("h1",{className:"page-header-title mt-2",children:"Gallery"}),t.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Our facility, products, and manufacturing capabilities"})]})}),t.jsx("section",{className:"section-padded",children:t.jsxs("div",{className:"container",children:[t.jsx("div",{className:"d-flex flex-wrap gap-2 justify-content-center mb-5",children:o.map(l=>t.jsx("button",{onClick:()=>i(l),style:{padding:"0.5rem 1.25rem",borderRadius:100,cursor:"pointer",border:"1.5px solid",borderColor:n===l?"var(--primary)":"var(--border)",background:n===l?"var(--primary)":"transparent",color:n===l?"#fff":"var(--text-mid)",fontSize:"0.82rem",fontWeight:500,transition:"all 0.2s ease",fontFamily:"var(--ff-body)"},children:l},l))}),t.jsx("div",{className:"row g-3",children:c.map((l,d)=>t.jsx("div",{className:`col-lg-3 col-md-4 col-6 fade-in delay-${Math.min(d%4+1,4)}`,children:t.jsx("div",{className:"gallery-item",onClick:()=>l.image&&a(l),children:l.image?t.jsxs(t.Fragment,{children:[t.jsx("img",{src:l.image,alt:l.title,loading:"lazy"}),t.jsx("div",{className:"gallery-overlay",children:t.jsxs("div",{children:[t.jsx("div",{className:"gallery-title",children:l.title}),t.jsx("div",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.7)",textTransform:"uppercase",letterSpacing:"0.1em"},children:l.category})]})})]}):t.jsxs("div",{style:{height:260,background:"var(--cream)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"0.5rem",color:"var(--text-light)",borderRadius:"var(--radius-md)",border:"1px solid var(--border)"},children:[t.jsx(Pi,{size:28,strokeWidth:1.5}),t.jsx("div",{style:{fontSize:"0.8rem",textAlign:"center",padding:"0 1rem"},children:l.title}),t.jsx("div",{style:{fontSize:"0.7rem",color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em"},children:l.category})]})})},l.id))})]})}),s&&t.jsx("div",{className:"modal-overlay",onClick:()=>a(null),style:{background:"rgba(0,0,0,0.9)"},children:t.jsxs("div",{style:{position:"relative",maxWidth:900,width:"100%"},onClick:l=>l.stopPropagation(),children:[t.jsx("button",{onClick:()=>a(null),style:{position:"absolute",top:-40,right:0,background:"transparent",border:"none",color:"#fff",fontSize:"1.5rem",cursor:"pointer"},children:t.jsx(Le,{})}),t.jsx("img",{src:s.image,alt:s.title,style:{width:"100%",borderRadius:"var(--radius-md)"}}),t.jsxs("div",{style:{color:"#fff",textAlign:"center",marginTop:"1rem"},children:[t.jsx("div",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.1rem"},children:s.title}),t.jsx("div",{style:{fontSize:"0.78rem",color:"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:"0.1em"},children:s.category})]})]})})]})}const Dl="919876543210";function Ul(){return he(),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"page-header",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"page-header-breadcrumb",children:[t.jsx(_,{to:"/",children:"Home"})," / Contact"]}),t.jsx("h1",{className:"page-header-title mt-2",children:"Contact Us"}),t.jsx("p",{style:{color:"rgba(255,255,255,0.7)",marginTop:"0.5rem"},children:"Get in touch for enquiries, quotes, and business partnerships"})]})}),t.jsx("section",{className:"section-padded",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"row g-5",children:[t.jsxs("div",{className:"col-lg-5",children:[t.jsx("div",{className:"section-eyebrow",children:"Get In Touch"}),t.jsx("div",{className:"divider-accent"}),t.jsx("h2",{className:"section-title mb-3",children:"We're Here to Help"}),t.jsx("p",{style:{color:"var(--text-mid)",lineHeight:1.9,marginBottom:"2rem"},children:"Whether you need a custom quote, product information, or want to discuss a bulk order — our team is ready to assist you promptly."}),t.jsx("div",{className:"d-flex flex-column gap-3 mb-4",children:[{icon:t.jsx(Vt,{}),label:"Address",value:"GAT NO 3, A-2, A/P Halsavade, Kolhapur, Maharashtra – 416202, India"},{icon:t.jsx(Ht,{}),label:"Phone",value:"+91 98765 43210"},{icon:t.jsx(Oe,{}),label:"Email",value:"info@pantkriupapaperboard.com"},{icon:t.jsx(Hi,{}),label:"Business Hours",value:"Mon–Sat: 9:00 AM – 7:00 PM"}].map((r,e)=>t.jsxs("div",{className:"contact-info-card fade-in",style:{transitionDelay:`${e*.1}s`},children:[t.jsx("div",{className:"contact-info-icon",children:r.icon}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--text-light)",marginBottom:"0.25rem"},children:r.label}),t.jsx("div",{style:{fontSize:"0.9rem",color:"var(--text-dark)",fontWeight:500},children:r.value})]})]},e))}),t.jsxs("a",{href:`https://wa.me/${Dl}`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.6rem",background:"#25d366",color:"#fff",padding:"0.9rem 1.75rem",borderRadius:"var(--radius)",fontSize:"0.9rem",fontWeight:500,fontFamily:"var(--ff-body)",textDecoration:"none",transition:"all 0.3s ease"},children:[t.jsx(Be,{size:20})," Chat on WhatsApp"]})]}),t.jsx("div",{className:"col-lg-7 fade-in delay-2",children:t.jsxs("div",{style:{background:"var(--cream)",padding:"2.5rem",borderRadius:"var(--radius-lg)",border:"1px solid var(--border)"},children:[t.jsx("h3",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.5rem",color:"var(--primary-dark)",marginBottom:"0.5rem"},children:"Send an Enquiry"}),t.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-mid)",marginBottom:"2rem"},children:"Fill in the form and we'll get back to you within 24 hours."}),t.jsx(Jn,{})]})})]}),t.jsxs("div",{className:"mt-5 fade-in",children:[t.jsx("h3",{style:{fontFamily:"var(--ff-heading)",color:"var(--primary-dark)",marginBottom:"1.25rem"},children:"Our Location"}),t.jsx("div",{style:{borderRadius:"var(--radius-lg)",overflow:"hidden",height:400,border:"1px solid var(--border)"},children:t.jsx("iframe",{title:"Shri Pant Krupa Paper Board",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8252008960726!2d74.3325096111029!3d16.635539684062838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0fdfed4edea8b%3A0x772879a571c95b7c!2sSHRI%20PANT%20KRUPA%20PAPER%20BOARD!5e0!3m2!1sen!2sin!4v1773083309900!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy"})})]})]})})]})}const Qn=m.createContext(null);function Bl({children:r}){const[e,n]=m.useState(void 0);m.useEffect(()=>_a(It,o=>n(o??null)),[]);const i=(a,o)=>ka(It,a,o),s=()=>Ia(It);return t.jsx(Qn.Provider,{value:{user:e,login:i,logout:s,loading:e===void 0},children:r})}function jt(){return m.useContext(Qn)}function Fl({children:r}){const{user:e,loading:n}=jt();return n?t.jsxs("div",{style:{minHeight:"100vh",background:"var(--primary-dark)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1rem"},children:[t.jsx("div",{style:{width:56,height:56,background:"var(--accent)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(X,{size:24,color:"#fff"})}),t.jsx("div",{style:{width:32,height:32,border:"3px solid rgba(200,150,62,0.3)",borderTopColor:"var(--accent)",borderRadius:"50%",animation:"spin 0.7s linear infinite"}}),t.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}):e?r:t.jsx(Dt,{to:"/admin/login",replace:!0})}const zl=[{label:"Main Menu",items:[{to:"/admin",icon:t.jsx(Gt,{}),label:"Dashboard",end:!0}]},{label:"Content",items:[{to:"/admin/categories",icon:t.jsx(ht,{}),label:"Categories"},{to:"/admin/products",icon:t.jsx(X,{}),label:"Products"},{to:"/admin/blog",icon:t.jsx(Zr,{}),label:"Blog"},{to:"/admin/gallery",icon:t.jsx(qt,{}),label:"Gallery"}]},{label:"Business",items:[{to:"/admin/dealers",icon:t.jsx(Wt,{}),label:"Dealers"},{to:"/admin/enquiries",icon:t.jsx(Oe,{}),label:"Enquiries"}]}];function Wl(){return t.jsxs("aside",{className:"admin-sidebar",children:[t.jsxs("div",{className:"sidebar-brand",children:[t.jsx("div",{className:"sidebar-brand-icon",children:t.jsx(X,{size:18,color:"#fff"})}),t.jsx("div",{className:"sidebar-brand-text",children:"Pant Krupa Admin"})]}),t.jsx("nav",{className:"sidebar-nav",children:zl.map(r=>t.jsxs("div",{children:[t.jsx("div",{className:"sidebar-section-label",children:r.label}),r.items.map(e=>t.jsxs(ge,{to:e.to,end:e.end,className:({isActive:n})=>`sidebar-link ${n?"active":""}`,children:[t.jsx("span",{className:"link-icon",children:e.icon}),e.label]},e.to))]},r.label))}),t.jsx("div",{style:{padding:"1rem 1.5rem",borderTop:"1px solid rgba(255,255,255,0.08)"},children:t.jsxs("a",{href:"/",target:"_blank",rel:"noopener noreferrer",className:"sidebar-link",style:{padding:"0.5rem 0"},children:[t.jsx(Ki,{className:"link-icon",size:16}),"View Website"]})})]})}function Kl(){const{login:r}=jt(),e=Dr(),[n,i]=m.useState({email:"",password:""}),[s,a]=m.useState(!1),[o,c]=m.useState(!1),[l,d]=m.useState(""),u=p=>i(y=>({...y,[p.target.name]:p.target.value})),h={"auth/invalid-credential":"Incorrect email or password.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/network-request-failed":"Network error. Check your connection.","auth/invalid-email":"Please enter a valid email address."},g=async p=>{p.preventDefault(),d(""),c(!0);try{await r(n.email,n.password),e("/admin")}catch(y){d(h[y.code]||"Login failed. Please check your credentials.")}finally{c(!1)}};return t.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 60%, var(--primary-light) 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem",position:"relative",overflow:"hidden"},children:[t.jsx("div",{style:{position:"absolute",inset:0,opacity:.04,backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/svg%3E")`}}),t.jsx("div",{style:{position:"absolute",top:"-15%",right:"-10%",width:500,height:500,background:"radial-gradient(circle, rgba(200,150,62,0.15) 0%, transparent 70%)",borderRadius:"50%"}}),t.jsx("div",{style:{position:"absolute",bottom:"-15%",left:"-10%",width:400,height:400,background:"radial-gradient(circle, rgba(200,150,62,0.1) 0%, transparent 70%)",borderRadius:"50%"}}),t.jsxs("div",{style:{width:"100%",maxWidth:420,position:"relative",zIndex:1},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[t.jsx("div",{style:{width:64,height:64,background:"var(--accent)",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem",boxShadow:"0 8px 32px rgba(200,150,62,0.4)"},children:t.jsx(X,{size:28,color:"#fff"})}),t.jsx("h1",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.5rem",fontWeight:700,color:"#fff",marginBottom:"0.25rem"},children:"Admin Panel"}),t.jsx("p",{style:{color:"rgba(255,255,255,0.55)",fontSize:"0.85rem"},children:"Shri Pant Krupa Paper Board"})]}),t.jsxs("div",{style:{background:"#fff",borderRadius:16,padding:"2.5rem",boxShadow:"0 24px 64px rgba(0,0,0,0.2)"},children:[t.jsx("h2",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.3rem",color:"var(--primary-dark)",marginBottom:"0.375rem"},children:"Sign in"}),t.jsx("p",{style:{color:"var(--text-light)",fontSize:"0.85rem",marginBottom:"2rem"},children:"Enter your admin credentials to continue"}),l&&t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem",background:"#fff1f2",border:"1px solid #fecdd3",borderRadius:8,padding:"0.75rem 1rem",marginBottom:"1.5rem",color:"#be123c",fontSize:"0.85rem"},children:[t.jsx($i,{size:16,style:{flexShrink:0}}),l]}),t.jsxs("form",{onSubmit:g,children:[t.jsxs("div",{style:{marginBottom:"1.25rem"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-mid)",marginBottom:"0.5rem"},children:"Email Address"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(Oe,{size:16,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:"var(--text-light)"}}),t.jsx("input",{type:"email",name:"email",value:n.email,onChange:u,placeholder:"admin@yourdomain.com",required:!0,autoComplete:"email",style:{width:"100%",padding:"0.8rem 1rem 0.8rem 2.75rem",border:`1.5px solid ${l?"#fecdd3":"var(--border)"}`,borderRadius:8,fontSize:"0.9rem",fontFamily:"var(--ff-body)",outline:"none",transition:"all 0.2s ease",color:"var(--text-dark)",background:"#fff"},onFocus:p=>p.target.style.borderColor="var(--primary)",onBlur:p=>p.target.style.borderColor=l?"#fecdd3":"var(--border)"})]})]}),t.jsxs("div",{style:{marginBottom:"1.75rem"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-mid)",marginBottom:"0.5rem"},children:"Password"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(Fi,{size:16,style:{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",color:"var(--text-light)"}}),t.jsx("input",{type:s?"text":"password",name:"password",value:n.password,onChange:u,placeholder:"••••••••",required:!0,autoComplete:"current-password",style:{width:"100%",padding:"0.8rem 3rem 0.8rem 2.75rem",border:`1.5px solid ${l?"#fecdd3":"var(--border)"}`,borderRadius:8,fontSize:"0.9rem",fontFamily:"var(--ff-body)",outline:"none",transition:"all 0.2s ease",color:"var(--text-dark)",background:"#fff"},onFocus:p=>p.target.style.borderColor="var(--primary)",onBlur:p=>p.target.style.borderColor=l?"#fecdd3":"var(--border)"}),t.jsx("button",{type:"button",onClick:()=>a(p=>!p),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-light)",padding:4},children:s?t.jsx(Wi,{size:16}):t.jsx(en,{size:16})})]})]}),t.jsx("button",{type:"submit",disabled:o,style:{width:"100%",padding:"0.9rem",background:o?"var(--primary-light)":"var(--primary)",color:"#fff",border:"none",borderRadius:8,fontSize:"0.9rem",fontWeight:600,fontFamily:"var(--ff-body)",letterSpacing:"0.05em",textTransform:"uppercase",cursor:o?"not-allowed":"pointer",transition:"all 0.2s ease",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:o?t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{width:16,height:16,border:"2px solid rgba(255,255,255,0.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin 0.7s linear infinite",display:"inline-block"}}),"Signing in…"]}):"Sign In"})]})]}),t.jsx("p",{style:{textAlign:"center",color:"rgba(255,255,255,0.45)",fontSize:"0.78rem",marginTop:"1.5rem"},children:"To create an admin account, go to Firebase Console → Authentication → Add user"})]}),t.jsx("style",{children:`
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function Hl(){const[r,e]=m.useState({products:0,categories:0,blogs:0,enquiries:0,dealers:0,gallery:0}),[n,i]=m.useState([]),[s,a]=m.useState(!0);m.useEffect(()=>{Promise.all([xt(),bt(),Vn(),yt(),qn(),nr()]).then(([c,l,d,u,h,g])=>{e({products:c.length,categories:u.length,blogs:l.length,enquiries:d.length,dealers:h.length,gallery:g.length}),i(d.slice(0,5))}).catch(()=>{}).finally(()=>a(!1))},[]);const o=[{icon:t.jsx(X,{}),label:"Products",value:r.products,color:"green",to:"/admin/products"},{icon:t.jsx(ht,{}),label:"Categories",value:r.categories,color:"blue",to:"/admin/categories"},{icon:t.jsx(Zr,{}),label:"Blog Posts",value:r.blogs,color:"amber",to:"/admin/blog"},{icon:t.jsx(Oe,{}),label:"Enquiries",value:r.enquiries,color:"purple",to:"/admin/enquiries"},{icon:t.jsx(Wt,{}),label:"Dealers",value:r.dealers,color:"rose",to:"/admin/dealers"},{icon:t.jsx(qt,{}),label:"Gallery",value:r.gallery,color:"blue",to:"/admin/gallery"}];return t.jsxs("div",{children:[t.jsx("div",{className:"admin-page-title mb-1",children:"Dashboard"}),t.jsx("p",{style:{color:"var(--text-light)",fontSize:"0.88rem",marginBottom:"2rem"},children:"Welcome back! Here's an overview of your website content."}),t.jsx("div",{className:"row g-3 mb-4",children:o.map(c=>t.jsx("div",{className:"col-lg-2 col-md-4 col-6",children:t.jsx(_,{to:c.to,style:{textDecoration:"none"},children:t.jsxs("div",{className:"stat-card",children:[t.jsx("div",{className:`stat-icon ${c.color}`,children:c.icon}),t.jsxs("div",{children:[t.jsx("div",{className:"stat-num",children:s?"—":c.value}),t.jsx("div",{className:"stat-label",children:c.label})]})]})})},c.label))}),t.jsx("div",{className:"row g-3 mb-4",children:t.jsx("div",{className:"col-12",children:t.jsxs("div",{style:{background:"#fff",border:"1px solid #e5e7eb",borderRadius:"var(--radius-md)",padding:"1.5rem"},children:[t.jsx("h4",{style:{fontFamily:"var(--ff-heading)",color:"var(--primary-dark)",marginBottom:"1.25rem",fontSize:"1.1rem"},children:"Quick Actions"}),t.jsx("div",{className:"d-flex flex-wrap gap-2",children:[{label:"Add Product",to:"/admin/products"},{label:"New Blog Post",to:"/admin/blog"},{label:"Upload Gallery",to:"/admin/gallery"},{label:"View Enquiries",to:"/admin/enquiries"},{label:"Add Dealer",to:"/admin/dealers"}].map(c=>t.jsx(_,{to:c.to,children:t.jsx("button",{className:"btn-outline-custom",style:{padding:"0.5rem 1rem",fontSize:"0.82rem"},children:c.label})},c.label))})]})})}),t.jsxs("div",{className:"data-table-wrapper",children:[t.jsxs("div",{className:"data-table-header",children:[t.jsx("h4",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.1rem",color:"var(--primary-dark)",margin:0},children:"Recent Enquiries"}),t.jsxs(_,{to:"/admin/enquiries",style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.82rem",color:"var(--primary)",fontWeight:500},children:["View All ",t.jsx(J,{size:13})]})]}),t.jsxs("table",{className:"data-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Phone"}),t.jsx("th",{children:"Product"}),t.jsx("th",{children:"Message"}),t.jsx("th",{children:"Date"})]})}),t.jsx("tbody",{children:n.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,style:{textAlign:"center",padding:"2rem",color:"var(--text-light)"},children:"No enquiries yet."})}):n.map(c=>{var l;return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:600},children:c.name}),t.jsx("td",{children:c.phone}),t.jsx("td",{children:c.product||"—"}),t.jsx("td",{style:{maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c.message||"—"}),t.jsx("td",{style:{color:"var(--text-light)",fontSize:"0.82rem"},children:(l=c.createdAt)!=null&&l.toDate?c.createdAt.toDate().toLocaleDateString("en-IN"):"Recent"})]},c.id)})})]})]})]})}function Ie({columns:r,data:e,onEdit:n,onDelete:i,onView:s,onAdd:a,addLabel:o="Add New",title:c,renderActions:l,extraHeaderContent:d}){const[u,h]=m.useState(""),[g,p]=m.useState(""),[y,S]=m.useState("asc"),[w,f]=m.useState(1),[x,I]=m.useState([]),v=10,P=k=>{g===k?S(T=>T==="asc"?"desc":"asc"):(p(k),S("asc"))},L=e.filter(k=>r.some(T=>{const pe=T.accessor?k[T.accessor]:"";return String(pe||"").toLowerCase().includes(u.toLowerCase())})),Ke=[...L].sort((k,T)=>{if(!g)return 0;const pe=k[g]||"",ar=T[g]||"";return y==="asc"?String(pe).localeCompare(String(ar)):String(ar).localeCompare(String(pe))}),Z=Math.ceil(Ke.length/v),me=Ke.slice((w-1)*v,w*v),Xn=k=>I(T=>T.includes(k)?T.filter(pe=>pe!==k):[...T,k]),Zn=()=>I(k=>k.length===me.length?[]:me.map(T=>T.id));return t.jsxs("div",{className:"data-table-wrapper",children:[t.jsxs("div",{className:"data-table-header",children:[t.jsxs("div",{className:"d-flex align-items-center gap-3 flex-wrap",children:[c&&t.jsx("h3",{style:{fontFamily:"var(--ff-heading)",fontSize:"1.1rem",color:"var(--primary-dark)",margin:0},children:c}),x.length>0&&t.jsxs("button",{onClick:()=>{x.forEach(k=>i&&i(k)),I([])},style:{display:"flex",alignItems:"center",gap:"0.35rem",padding:"0.35rem 0.875rem",background:"#fee2e2",color:"#e11d48",border:"none",borderRadius:"var(--radius)",fontSize:"0.8rem",fontWeight:600,cursor:"pointer"},children:[t.jsx(Li,{size:13})," Delete (",x.length,")"]}),d]}),t.jsxs("div",{className:"d-flex gap-2 align-items-center flex-wrap",children:[t.jsxs("div",{className:"search-input-admin",children:[t.jsx(Qr,{size:14,color:"var(--text-light)"}),t.jsx("input",{value:u,onChange:k=>{h(k.target.value),f(1)},placeholder:"Search..."})]}),a&&t.jsxs("button",{onClick:a,className:"btn-primary-custom",style:{padding:"0.5rem 1rem",fontSize:"0.8rem"},children:["+ ",o]})]})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"data-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{width:40},children:t.jsx("input",{type:"checkbox",checked:x.length===me.length&&me.length>0,onChange:Zn})}),r.map(k=>t.jsx("th",{onClick:()=>k.sortable!==!1&&P(k.accessor||k.key),style:{cursor:k.sortable===!1?"default":"pointer",userSelect:"none"},children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[k.label,g===(k.accessor||k.key)&&(y==="asc"?t.jsx(Vi,{size:12}):t.jsx(nn,{size:12}))]})},k.key)),t.jsx("th",{children:"Actions"})]})}),t.jsx("tbody",{children:me.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:r.length+2,style:{textAlign:"center",padding:"3rem",color:"var(--text-light)"},children:"No records found."})}):me.map(k=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("input",{type:"checkbox",checked:x.includes(k.id),onChange:()=>Xn(k.id)})}),r.map(T=>t.jsx("td",{children:T.render?T.render(k):k[T.accessor]||"—"},T.key)),t.jsx("td",{children:t.jsx("div",{style:{display:"flex",gap:"0.25rem"},children:l?l(k):t.jsxs(t.Fragment,{children:[s&&t.jsx("button",{className:"action-btn view",onClick:()=>s(k),title:"View",children:t.jsxs("svg",{width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[t.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),t.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),n&&t.jsx("button",{className:"action-btn edit",onClick:()=>n(k),title:"Edit",children:t.jsxs("svg",{width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[t.jsx("path",{d:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"}),t.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),i&&t.jsx("button",{className:"action-btn delete",onClick:()=>{window.confirm("Delete this record?")&&i(k.id)},title:"Delete",children:t.jsxs("svg",{width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[t.jsx("polyline",{points:"3 6 5 6 21 6"}),t.jsx("path",{d:"M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"})]})})]})})})]},k.id))})]})}),t.jsxs("div",{className:"table-pagination",children:[t.jsxs("span",{children:["Showing ",Math.min((w-1)*v+1,L.length),"–",Math.min(w*v,L.length)," of ",L.length," records"]}),t.jsxs("div",{className:"pagination-btns",children:[t.jsx("button",{className:"page-btn",onClick:()=>f(k=>Math.max(1,k-1)),disabled:w===1,children:t.jsx(rn,{size:13})}),Array.from({length:Math.min(Z,5)},(k,T)=>T+1).map(k=>t.jsx("button",{className:`page-btn ${w===k?"active":""}`,onClick:()=>f(k),children:k},k)),t.jsx("button",{className:"page-btn",onClick:()=>f(k=>Math.min(Z,k+1)),disabled:w===Z||Z===0,children:t.jsx(tn,{size:13})})]})]})]})}function We({show:r,onClose:e,title:n,onSubmit:i,loading:s,children:a}){return r?t.jsx("div",{className:"modal-overlay",onClick:e,children:t.jsxs("div",{className:"modal-box",onClick:o=>o.stopPropagation(),children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("div",{className:"modal-title",children:n}),t.jsx("button",{type:"button",onClick:e,style:{background:"none",border:"none",cursor:"pointer",padding:4,color:"var(--text-mid)",borderRadius:6},children:t.jsx(Le,{size:20})})]}),t.jsxs("div",{children:[t.jsx("div",{className:"modal-body",children:a}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{type:"button",onClick:e,className:"btn-outline-custom",style:{padding:"0.6rem 1.25rem",fontSize:"0.85rem"},children:"Cancel"}),t.jsx("button",{type:"button",onClick:i,className:"btn-primary-custom",style:{padding:"0.6rem 1.25rem",fontSize:"0.85rem"},disabled:s,children:s?"Saving...":"Save"})]})]})]})}):null}function kt({label:r,required:e,children:n}){return t.jsxs("div",{style:{marginBottom:"1.25rem"},children:[t.jsxs("label",{className:"form-label-custom",children:[r," ",e&&t.jsx("span",{style:{color:"#e11d48"},children:"*"})]}),n]})}function E({label:r,required:e,type:n="text",...i}){return t.jsx(kt,{label:r,required:e,children:t.jsx("input",{type:n,className:"form-control-custom",required:e,...i})})}function ir({label:r,required:e,rows:n=4,...i}){return t.jsx(kt,{label:r,required:e,children:t.jsx("textarea",{className:"form-control-custom",rows:n,required:e,style:{resize:"vertical"},...i})})}function Ce({label:r,required:e,options:n,...i}){return t.jsx(kt,{label:r,required:e,children:t.jsxs("select",{className:"form-control-custom",required:e,...i,children:[t.jsx("option",{value:"",children:"Select..."}),n.map(s=>t.jsx("option",{value:s.value,children:s.label},s.value))]})})}function Vl(){const[r,e]=m.useState([]),[n,i]=m.useState(!1),[s,a]=m.useState(null),[o,c]=m.useState({name:"",slug:"",description:""}),[l,d]=m.useState(!1),u=()=>yt().then(e).catch(()=>{});m.useEffect(()=>{u()},[]);const h=f=>c(x=>({...x,[f.target.name]:f.target.value})),g=()=>{a(null),c({name:"",slug:"",description:""}),i(!0)},p=f=>{a(f),c({name:f.name,slug:f.slug,description:f.description||""}),i(!0)},y=async f=>{if(f!=null&&f.preventDefault&&f.preventDefault(),!o.name.trim()||!o.slug.trim()){alert("Name and Slug are required.");return}d(!0);try{s?await Ho(s.id,o):await Ko(o),u(),i(!1)}catch(x){console.error("Save failed:",x),alert((x==null?void 0:x.message)||"Failed to save. Please try again.")}finally{d(!1)}},S=async f=>{await Vo(f),u()},w=[{key:"name",label:"Name",accessor:"name",render:f=>t.jsx("strong",{children:f.name})},{key:"slug",label:"Slug",accessor:"slug",render:f=>t.jsx("code",{style:{fontSize:"0.8rem",background:"#f3f4f6",padding:"2px 6px",borderRadius:4},children:f.slug})},{key:"description",label:"Description",accessor:"description",sortable:!1,render:f=>t.jsx("span",{style:{color:"var(--text-mid)",fontSize:"0.85rem"},children:(f.description||"").substring(0,50)||"—"})}];return t.jsxs("div",{children:[t.jsx("div",{className:"admin-page-title mb-4",children:"Categories"}),t.jsx(Ie,{columns:w,data:r,onAdd:g,addLabel:"Add Category",onEdit:p,onDelete:S,title:`${r.length} Categories`}),t.jsxs(We,{show:n,onClose:()=>i(!1),title:s?"Edit Category":"Add Category",onSubmit:y,loading:l,children:[t.jsx(E,{label:"Category Name",name:"name",value:o.name,onChange:h,required:!0,placeholder:"e.g. Kraft Paper"}),t.jsx(E,{label:"Slug",name:"slug",value:o.slug,onChange:h,required:!0,placeholder:"e.g. kraft-paper"}),t.jsx(ir,{label:"Description",name:"description",value:o.description,onChange:h,rows:3,placeholder:"Short description..."})]})]})}const ql=async(r,e="general",n)=>{const i="dmfbratlt",s="pant_krupa_upload",a=new FormData;return a.append("file",r),a.append("upload_preset",s),a.append("folder",`pant-krupa/${e}`),new Promise((o,c)=>{const l=new XMLHttpRequest;l.upload.addEventListener("progress",d=>{if(d.lengthComputable&&n){const u=Math.round(d.loaded/d.total*100);n(u)}}),l.addEventListener("load",()=>{var d;if(l.status===200){const u=JSON.parse(l.responseText);o(u.secure_url)}else{const u=JSON.parse(l.responseText);c(new Error(((d=u.error)==null?void 0:d.message)||"Upload failed"))}}),l.addEventListener("error",()=>c(new Error("Network error during upload"))),l.open("POST",`https://api.cloudinary.com/v1_1/${i}/image/upload`),l.send(a)})};function sr({folder:r="general",value:e,onChange:n,label:i="Image"}){const[s,a]=m.useState(!1),[o,c]=m.useState(0),[l,d]=m.useState(""),u=async p=>{const y=p.target.files[0];if(!y)return;const S=URL.createObjectURL(y);d(S),a(!0),c(0);try{const w=await ql(y,r,f=>c(f));n(w),d("")}catch(w){console.error("Upload failed:",w),alert(`Upload failed: ${w.code||w.message}

Make sure Firebase Storage rules allow write access.`),d(""),n("")}finally{a(!1)}},h=()=>{n(""),d("")},g=l||e;return t.jsxs("div",{style:{marginBottom:"1.25rem"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-mid)",marginBottom:"0.5rem"},children:i}),g?t.jsxs("div",{style:{position:"relative",display:"inline-block",width:"100%"},children:[t.jsx("img",{src:g,alt:"Preview",style:{width:"100%",maxHeight:180,objectFit:"cover",borderRadius:8,border:"1px solid var(--border)",display:"block"}}),s&&t.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.55)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[t.jsxs("div",{style:{color:"#fff",fontSize:"0.9rem",fontWeight:700},children:[o,"%"]}),t.jsx("div",{style:{width:"60%",height:5,background:"rgba(255,255,255,0.3)",borderRadius:3},children:t.jsx("div",{style:{width:`${o}%`,height:"100%",background:"var(--accent)",borderRadius:3,transition:"width 0.2s"}})}),t.jsx("div",{style:{color:"rgba(255,255,255,0.7)",fontSize:"0.75rem"},children:"Uploading..."})]}),!s&&t.jsx("button",{type:"button",onClick:h,style:{position:"absolute",top:6,right:6,width:26,height:26,background:"#e11d48",border:"none",borderRadius:"50%",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(Le,{size:13})})]}):t.jsxs("label",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"0.5rem",padding:"2rem",border:"2px dashed var(--border)",borderRadius:8,cursor:"pointer",background:"#fafafa",transition:"all 0.2s ease"},onMouseEnter:p=>p.currentTarget.style.borderColor="var(--primary)",onMouseLeave:p=>p.currentTarget.style.borderColor="var(--border)",children:[t.jsx(Ri,{size:24,color:"var(--text-light)"}),t.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-mid)",fontWeight:500},children:"Click to upload image"}),t.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-light)"},children:"JPG, PNG, WEBP up to 5MB"}),t.jsx("input",{type:"file",accept:"image/*",onChange:u,style:{display:"none"}})]})]})}const Nt={name:"",slug:"",category:"",gsm:"",width:"",priceRange:"",description:"",applications:"",images:[],featured:!1},Gl=r=>r.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");function $l(){var I;const[r,e]=m.useState([]),[n,i]=m.useState([]),[s,a]=m.useState(!1),[o,c]=m.useState(null),[l,d]=m.useState(Nt),[u,h]=m.useState(!1),g=()=>{xt().then(e).catch(()=>{}),yt().then(i).catch(()=>{})};m.useEffect(()=>{g()},[]);const p=v=>{const P=v.target.type==="checkbox"?v.target.checked:v.target.value;d(L=>({...L,[v.target.name]:P,...v.target.name==="name"?{slug:Gl(P)}:{}}))},y=()=>{c(null),d({...Nt,images:[]}),a(!0)},S=v=>{c(v),d({...Nt,...v,applications:Array.isArray(v.applications)?v.applications.join(", "):v.applications||"",images:v.images||[]}),a(!0)},w=async v=>{v.preventDefault(),h(!0);try{const P={...l,applications:l.applications.split(",").map(L=>L.trim()).filter(Boolean),featured:!!l.featured,images:l.images||[]};o?await ml(o.id,P):await hl(P),g(),a(!1)}catch{}finally{h(!1)}},f=async v=>{await pl(v),g()},x=[{key:"image",label:"Image",sortable:!1,render:v=>{var P;return(P=v.images)!=null&&P[0]?t.jsx("img",{src:v.images[0],alt:"",className:"table-thumb"}):t.jsx("div",{className:"table-thumb",style:{display:"flex",alignItems:"center",justifyContent:"center",background:"var(--cream)",color:"var(--text-light)"},children:t.jsx(ce,{})})}},{key:"name",label:"Product Name",accessor:"name",render:v=>t.jsx("strong",{children:v.name})},{key:"category",label:"Category",accessor:"category"},{key:"gsm",label:"GSM",accessor:"gsm"},{key:"featured",label:"Featured",accessor:"featured",render:v=>t.jsx("span",{className:`badge-status ${v.featured?"badge-active":"badge-inactive"}`,children:v.featured?"Yes":"No"})}];return t.jsxs("div",{children:[t.jsx("div",{className:"admin-page-title mb-4",children:"Products"}),t.jsx(Ie,{columns:x,data:r,onAdd:y,addLabel:"Add Product",onEdit:S,onDelete:f,title:`${r.length} Products`}),t.jsx(We,{show:s,onClose:()=>a(!1),title:o?"Edit Product":"Add Product",onSubmit:w,loading:u,children:t.jsxs("div",{className:"row g-3",children:[t.jsx("div",{className:"col-6",children:t.jsx(E,{label:"Product Name",name:"name",value:l.name,onChange:p,required:!0,placeholder:"e.g. Kraft Paper Roll"})}),t.jsx("div",{className:"col-6",children:t.jsx(E,{label:"Slug (auto-generated)",name:"slug",value:l.slug,onChange:p,required:!0,placeholder:"auto from name"})}),t.jsx("div",{className:"col-6",children:t.jsx(Ce,{label:"Category",name:"category",value:l.category,onChange:p,options:n.map(v=>({value:v.name,label:v.name}))})}),t.jsx("div",{className:"col-4",children:t.jsx(E,{label:"GSM Range",name:"gsm",value:l.gsm,onChange:p,placeholder:"e.g. 70-200"})}),t.jsx("div",{className:"col-4",children:t.jsx(E,{label:"Width",name:"width",value:l.width,onChange:p,placeholder:"e.g. 18-72 inch"})}),t.jsx("div",{className:"col-4",children:t.jsx(E,{label:"Price Range (₹/kg)",name:"priceRange",value:l.priceRange,onChange:p,placeholder:"e.g. ₹45-60/kg"})}),t.jsx("div",{className:"col-12",children:t.jsx(sr,{folder:"products",label:"Product Image",value:((I=l.images)==null?void 0:I[0])||"",onChange:v=>d(P=>({...P,images:v?[v]:[]}))})}),t.jsx("div",{className:"col-12",children:t.jsx(ir,{label:"Description",name:"description",value:l.description,onChange:p,rows:3})}),t.jsx("div",{className:"col-12",children:t.jsx(E,{label:"Applications (comma separated)",name:"applications",value:l.applications,onChange:p,placeholder:"e.g. Packaging, Wrapping, Bags"})}),t.jsx("div",{className:"col-12",children:t.jsx(kt,{label:"Featured",children:t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer",fontFamily:"var(--ff-body)",fontSize:"0.9rem"},children:[t.jsx("input",{type:"checkbox",name:"featured",checked:l.featured,onChange:p}),"Show as featured product on homepage"]})})})]})})]})}const At={title:"",slug:"",author:"Admin",content:"",tags:"",status:"draft",featuredImage:""},Yl=[{value:"draft",label:"Draft"},{value:"published",label:"Published"},{value:"unpublished",label:"Unpublished"}];function Jl(){const[r,e]=m.useState([]),[n,i]=m.useState(!1),[s,a]=m.useState(null),[o,c]=m.useState(At),[l,d]=m.useState(!1),u=()=>bt().then(e).catch(()=>{});m.useEffect(()=>{u()},[]);const h=x=>c(I=>({...I,[x.target.name]:x.target.value})),g=()=>{a(null),c(At),i(!0)},p=x=>{a(x),c({...At,...x,tags:Array.isArray(x.tags)?x.tags.join(", "):x.tags||""}),i(!0)},y=async x=>{x.preventDefault(),d(!0);try{const I={...o,tags:o.tags.split(",").map(v=>v.trim()).filter(Boolean)};s?await Or(s.id,I):await wl(I),u(),i(!1)}catch{}finally{d(!1)}},S=async x=>{await Sl(x),u()},w=async(x,I)=>{await Or(x.id,{status:I}),u()},f=[{key:"title",label:"Title",accessor:"title",render:x=>t.jsx("strong",{style:{fontSize:"0.88rem"},children:x.title})},{key:"author",label:"Author",accessor:"author"},{key:"status",label:"Status",accessor:"status",render:x=>t.jsx("span",{className:`badge-status badge-${x.status}`,children:x.status})},{key:"date",label:"Date",accessor:"createdAt",render:x=>{var I;return t.jsx("span",{style:{color:"var(--text-light)",fontSize:"0.82rem"},children:(I=x.createdAt)!=null&&I.toDate?x.createdAt.toDate().toLocaleDateString("en-IN"):"—"})}}];return t.jsxs("div",{children:[t.jsx("div",{className:"admin-page-title mb-4",children:"Blog Management"}),t.jsx(Ie,{columns:f,data:r,onAdd:g,addLabel:"New Post",onEdit:p,onDelete:S,title:`${r.length} Posts`,renderActions:x=>t.jsxs("div",{style:{display:"flex",gap:"0.25rem",flexWrap:"wrap"},children:[t.jsx("button",{className:"action-btn edit",onClick:()=>p(x),title:"Edit",children:"✏️"}),x.status!=="published"&&t.jsx("button",{onClick:()=>w(x,"published"),title:"Publish",style:{fontSize:"0.7rem",padding:"2px 6px",background:"#d1fae5",color:"#065f46",border:"none",borderRadius:4,cursor:"pointer",fontWeight:600},children:"Publish"}),x.status==="published"&&t.jsx("button",{onClick:()=>w(x,"unpublished"),title:"Unpublish",style:{fontSize:"0.7rem",padding:"2px 6px",background:"#fef3c7",color:"#92400e",border:"none",borderRadius:4,cursor:"pointer",fontWeight:600},children:"Unpublish"}),t.jsx("button",{className:"action-btn delete",onClick:()=>{window.confirm("Delete?")&&S(x.id)},title:"Delete",children:"🗑"})]})}),t.jsxs(We,{show:n,onClose:()=>i(!1),title:s?"Edit Post":"New Blog Post",onSubmit:y,loading:l,children:[t.jsx(E,{label:"Title",name:"title",value:o.title,onChange:h,required:!0,placeholder:"Blog post title"}),t.jsx(E,{label:"Slug",name:"slug",value:o.slug,onChange:h,required:!0,placeholder:"e.g. my-blog-post"}),t.jsxs("div",{className:"row g-3",children:[t.jsx("div",{className:"col-6",children:t.jsx(E,{label:"Author",name:"author",value:o.author,onChange:h})}),t.jsx("div",{className:"col-6",children:t.jsx(Ce,{label:"Status",name:"status",value:o.status,onChange:h,options:Yl})})]}),t.jsx(sr,{folder:"blog",label:"Featured Image",value:o.featuredImage,onChange:x=>c(I=>({...I,featuredImage:x}))}),t.jsx(ir,{label:"Content",name:"content",value:o.content,onChange:h,rows:8,placeholder:"Write your blog content here..."}),t.jsx(E,{label:"Tags (comma separated)",name:"tags",value:o.tags,onChange:h,placeholder:"e.g. Packaging, GSM, Tips"})]})]})}const Ql=[{value:"Products",label:"Products"},{value:"Manufacturing",label:"Manufacturing"},{value:"Facility",label:"Facility"},{value:"Quality",label:"Quality"}];function Xl(){const[r,e]=m.useState([]),[n,i]=m.useState(!1),[s,a]=m.useState({title:"",category:"",image:""}),[o,c]=m.useState(!1),l=()=>nr().then(e).catch(()=>{});m.useEffect(()=>{l()},[]);const d=p=>a(y=>({...y,[p.target.name]:p.target.value})),u=async p=>{p.preventDefault(),c(!0);try{await qo(s),l(),i(!1),a({title:"",category:"",image:""})}catch{}finally{c(!1)}},h=async p=>{await Go(p),l()},g=[{key:"preview",label:"Preview",sortable:!1,render:p=>p.image?t.jsx("img",{src:p.image,alt:p.title,className:"table-thumb"}):t.jsx("div",{className:"table-thumb",style:{display:"flex",alignItems:"center",justifyContent:"center",background:"var(--cream)",color:"var(--text-light)"},children:t.jsx(qt,{})})},{key:"title",label:"Title",accessor:"title",render:p=>t.jsx("strong",{children:p.title})},{key:"category",label:"Category",accessor:"category"},{key:"date",label:"Uploaded",accessor:"createdAt",render:p=>{var y;return t.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-light)"},children:(y=p.createdAt)!=null&&y.toDate?p.createdAt.toDate().toLocaleDateString("en-IN"):"—"})}}];return t.jsxs("div",{children:[t.jsx("div",{className:"admin-page-title mb-4",children:"Gallery"}),t.jsxs("p",{style:{color:"var(--text-light)",fontSize:"0.85rem",marginBottom:"1.5rem"},children:["Upload images via ",t.jsx("strong",{children:"Cloudinary"})," (folder: ",t.jsx("code",{children:"pant-krupa/gallery"}),") then paste the URL below."]}),t.jsx(Ie,{columns:g,data:r,onAdd:()=>i(!0),addLabel:"Add Image",onDelete:h,title:`${r.length} Images`}),t.jsxs(We,{show:n,onClose:()=>i(!1),title:"Add Gallery Image",onSubmit:u,loading:o,children:[t.jsx(E,{label:"Image Title",name:"title",value:s.title,onChange:d,required:!0,placeholder:"e.g. Kraft Paper Production"}),t.jsx(Ce,{label:"Category",name:"category",value:s.category,onChange:d,options:Ql}),t.jsx(sr,{folder:"gallery",label:"Gallery Image",value:s.image,onChange:p=>a(y=>({...y,image:p}))}),s.image&&t.jsx("div",{style:{marginTop:"0.75rem"},children:t.jsx("img",{src:s.image,alt:"Preview",style:{width:"100%",height:160,objectFit:"cover",borderRadius:"var(--radius)",border:"1px solid var(--border)"}})})]})]})}const Tt={name:"",company:"",phone:"",email:"",city:"",state:"Maharashtra",address:"",status:"active"},Zl=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}],ec=["Maharashtra","Gujarat","Karnataka","Goa","Madhya Pradesh","Rajasthan","Delhi","Other"].map(r=>({value:r,label:r}));function tc(){const[r,e]=m.useState([]),[n,i]=m.useState(!1),[s,a]=m.useState(null),[o,c]=m.useState(Tt),[l,d]=m.useState(!1),u=()=>qn().then(e).catch(()=>{});m.useEffect(()=>{u()},[]);const h=f=>c(x=>({...x,[f.target.name]:f.target.value})),g=()=>{a(null),c(Tt),i(!0)},p=f=>{a(f),c({...Tt,...f}),i(!0)},y=async f=>{f.preventDefault(),d(!0);try{s?await Yo(s.id,o):await $o(o),u(),i(!1)}catch{}finally{d(!1)}},S=async f=>{await Jo(f),u()},w=[{key:"name",label:"Dealer Name",accessor:"name",render:f=>t.jsx("strong",{children:f.name})},{key:"company",label:"Company",accessor:"company"},{key:"phone",label:"Phone",accessor:"phone"},{key:"city",label:"City",accessor:"city"},{key:"state",label:"State",accessor:"state"},{key:"status",label:"Status",accessor:"status",render:f=>t.jsx("span",{className:`badge-status badge-${f.status}`,children:f.status})}];return t.jsxs("div",{children:[t.jsx("div",{className:"admin-page-title mb-4",children:"Dealers"}),t.jsx(Ie,{columns:w,data:r,onAdd:g,addLabel:"Add Dealer",onEdit:p,onDelete:S,title:`${r.length} Dealers`}),t.jsx(We,{show:n,onClose:()=>i(!1),title:s?"Edit Dealer":"Add Dealer",onSubmit:y,loading:l,children:t.jsxs("div",{className:"row g-3",children:[t.jsx("div",{className:"col-6",children:t.jsx(E,{label:"Contact Name",name:"name",value:o.name,onChange:h,required:!0})}),t.jsx("div",{className:"col-6",children:t.jsx(E,{label:"Company Name",name:"company",value:o.company,onChange:h,required:!0})}),t.jsx("div",{className:"col-6",children:t.jsx(E,{label:"Phone",name:"phone",value:o.phone,onChange:h,required:!0})}),t.jsx("div",{className:"col-6",children:t.jsx(E,{label:"Email",name:"email",type:"email",value:o.email,onChange:h})}),t.jsx("div",{className:"col-6",children:t.jsx(E,{label:"City",name:"city",value:o.city,onChange:h})}),t.jsx("div",{className:"col-6",children:t.jsx(Ce,{label:"State",name:"state",value:o.state,onChange:h,options:ec})}),t.jsx("div",{className:"col-12",children:t.jsx(E,{label:"Address",name:"address",value:o.address,onChange:h})}),t.jsx("div",{className:"col-6",children:t.jsx(Ce,{label:"Status",name:"status",value:o.status,onChange:h,options:Zl})})]})})]})}function rc(){var c;const[r,e]=m.useState([]),[n,i]=m.useState(null),s=()=>Vn().then(e).catch(()=>{});m.useEffect(()=>{s()},[]);const a=async l=>{await Wo(l),s()},o=[{key:"name",label:"Name",accessor:"name",render:l=>t.jsx("strong",{children:l.name})},{key:"phone",label:"Phone",accessor:"phone"},{key:"email",label:"Email",accessor:"email",render:l=>t.jsx("span",{style:{color:"var(--text-mid)",fontSize:"0.85rem"},children:l.email||"—"})},{key:"product",label:"Product",accessor:"product",render:l=>l.product||"—"},{key:"message",label:"Message",sortable:!1,render:l=>t.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-mid)",maxWidth:200,display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l.message||"—"})},{key:"date",label:"Date",accessor:"createdAt",render:l=>{var d;return t.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-light)"},children:(d=l.createdAt)!=null&&d.toDate?l.createdAt.toDate().toLocaleDateString("en-IN"):"Recent"})}}];return t.jsxs("div",{children:[t.jsx("div",{className:"admin-page-title mb-4",children:"Enquiries"}),t.jsx(Ie,{columns:o,data:r,onDelete:a,onView:l=>i(l),title:`${r.length} Enquiries`}),n&&t.jsx("div",{className:"modal-overlay",onClick:()=>i(null),children:t.jsxs("div",{className:"modal-box",onClick:l=>l.stopPropagation(),style:{maxWidth:480},children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("div",{className:"modal-title",children:"Enquiry Details"}),t.jsx("button",{onClick:()=>i(null),style:{background:"none",border:"none",cursor:"pointer",padding:4,color:"var(--text-mid)",borderRadius:6},children:t.jsx(Le,{size:20})})]}),t.jsxs("div",{className:"modal-body",children:[[{label:"Name",value:n.name},{label:"Phone",value:n.phone},{label:"Email",value:n.email||"—"},{label:"Product",value:n.product||"—"},{label:"Date",value:(c=n.createdAt)!=null&&c.toDate?n.createdAt.toDate().toLocaleString("en-IN"):"Recent"}].map(l=>t.jsxs("div",{style:{display:"flex",marginBottom:"0.875rem",gap:"1rem"},children:[t.jsx("span",{style:{fontSize:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-light)",width:80,flexShrink:0,paddingTop:2},children:l.label}),t.jsx("span",{style:{fontSize:"0.9rem",color:"var(--text-dark)"},children:l.value})]},l.label)),n.message&&t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-light)",marginBottom:"0.5rem"},children:"Message"}),t.jsx("div",{style:{background:"var(--cream)",padding:"1rem",borderRadius:"var(--radius)",fontSize:"0.9rem",lineHeight:1.7,color:"var(--text-mid)"},children:n.message})]})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{onClick:()=>{window.confirm("Delete this enquiry?")&&(a(n.id),i(null))},style:{padding:"0.6rem 1.25rem",background:"#fee2e2",color:"#e11d48",border:"none",borderRadius:"var(--radius)",fontSize:"0.85rem",fontWeight:600,cursor:"pointer"},children:"Delete"}),t.jsx("button",{onClick:()=>i(null),className:"btn-primary-custom",style:{padding:"0.6rem 1.25rem",fontSize:"0.85rem"},children:"Close"})]})]})})]})}function nc(){var a;const{user:r,logout:e}=jt(),[n,i]=m.useState(!1),s=async()=>{window.confirm("Sign out of the admin panel?")&&await e()};return t.jsxs("div",{className:"admin-layout",children:[t.jsx(Wl,{}),t.jsxs("main",{className:"admin-main",children:[t.jsxs("div",{className:"admin-topbar",children:[t.jsx("div",{className:"d-flex align-items-center gap-2",children:t.jsx("span",{style:{fontFamily:"var(--ff-body)",fontSize:"0.85rem",color:"var(--text-light)"},children:"Shri Pant Krupa Paper Board — Admin"})}),t.jsxs("div",{className:"d-flex align-items-center gap-3",children:[t.jsx("button",{style:{background:"none",border:"none",color:"var(--text-mid)",cursor:"pointer",fontSize:"1.1rem"},children:t.jsx(qi,{})}),t.jsxs("div",{style:{position:"relative"},children:[t.jsxs("button",{onClick:()=>i(o=>!o),style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"none",border:"1px solid var(--border)",borderRadius:8,padding:"0.4rem 0.75rem",cursor:"pointer",transition:"all 0.2s ease"},children:[t.jsx("div",{style:{width:28,height:28,background:"var(--primary)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"0.75rem"},children:t.jsx(Kt,{size:13})}),t.jsx("span",{style:{fontSize:"0.82rem",fontWeight:500,color:"var(--text-dark)",maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:((a=r==null?void 0:r.email)==null?void 0:a.split("@")[0])||"Admin"})]}),n&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{position:"fixed",inset:0,zIndex:98},onClick:()=>i(!1)}),t.jsxs("div",{style:{position:"absolute",top:"calc(100% + 8px)",right:0,background:"#fff",border:"1px solid var(--border)",borderRadius:10,boxShadow:"var(--shadow-md)",minWidth:220,zIndex:99,overflow:"hidden"},children:[t.jsxs("div",{style:{padding:"0.875rem 1rem",borderBottom:"1px solid var(--border)"},children:[t.jsx("div",{style:{fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-light)",marginBottom:"0.25rem"},children:"Signed in as"}),t.jsx("div",{style:{fontSize:"0.88rem",color:"var(--text-dark)",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r==null?void 0:r.email})]}),t.jsxs("button",{onClick:s,style:{width:"100%",display:"flex",alignItems:"center",gap:"0.625rem",padding:"0.75rem 1rem",background:"none",border:"none",fontSize:"0.88rem",color:"#e11d48",cursor:"pointer",fontFamily:"var(--ff-body)",fontWeight:500,transition:"background 0.15s ease"},onMouseEnter:o=>o.currentTarget.style.background="#fff1f2",onMouseLeave:o=>o.currentTarget.style.background="none",children:[t.jsx(Bi,{size:15})," Sign Out"]})]})]})]})]})]}),t.jsx("div",{className:"admin-content",children:t.jsxs(Ut,{children:[t.jsx(A,{path:"",element:t.jsx(Hl,{})}),t.jsx(A,{path:"categories",element:t.jsx(Vl,{})}),t.jsx(A,{path:"products",element:t.jsx($l,{})}),t.jsx(A,{path:"blog",element:t.jsx(Jl,{})}),t.jsx(A,{path:"gallery",element:t.jsx(Xl,{})}),t.jsx(A,{path:"dealers",element:t.jsx(tc,{})}),t.jsx(A,{path:"enquiries",element:t.jsx(rc,{})}),t.jsx(A,{path:"*",element:t.jsx(Dt,{to:"/admin",replace:!0})})]})})]})]})}function ic(){return t.jsx(Bl,{children:t.jsxs(Ut,{children:[t.jsx(A,{path:"login",element:t.jsx(sc,{})}),t.jsx(A,{path:"*",element:t.jsx(Fl,{children:t.jsx(nc,{})})})]})})}function sc(){const{user:r,loading:e}=jt();return e?null:r?t.jsx(Dt,{to:"/admin",replace:!0}):t.jsx(Kl,{})}function G({children:r}){return t.jsxs(t.Fragment,{children:[t.jsx(Qo,{}),t.jsx("main",{children:r}),t.jsx(tl,{}),t.jsx(nl,{})]})}function ac(){return t.jsxs(Ut,{children:[t.jsx(A,{path:"/admin/*",element:t.jsx(ic,{})}),t.jsx(A,{path:"/",element:t.jsx(G,{children:t.jsx(Il,{})})}),t.jsx(A,{path:"/about",element:t.jsx(G,{children:t.jsx(Nl,{})})}),t.jsx(A,{path:"/products",element:t.jsx(G,{children:t.jsx(Al,{})})}),t.jsx(A,{path:"/products/:slug",element:t.jsx(G,{children:t.jsx(Tl,{})})}),t.jsx(A,{path:"/industries",element:t.jsx(G,{children:t.jsx(Pl,{})})}),t.jsx(A,{path:"/blog",element:t.jsx(G,{children:t.jsx(Cl,{})})}),t.jsx(A,{path:"/blog/:slug",element:t.jsx(G,{children:t.jsx(Ll,{})})}),t.jsx(A,{path:"/gallery",element:t.jsx(G,{children:t.jsx(Ml,{})})}),t.jsx(A,{path:"/contact",element:t.jsx(G,{children:t.jsx(Ul,{})})})]})}Rt.createRoot(document.getElementById("root")).render(t.jsx(se.StrictMode,{children:t.jsx(ti,{children:t.jsx(ac,{})})}));

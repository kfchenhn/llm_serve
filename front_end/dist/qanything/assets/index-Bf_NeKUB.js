import{r as R,C as re,_ as s,o as Oe,p as Ke,i as et,s as Z,c as v,d as oe,w as J,B as tt,e as l,f as x,F as Be,b as W,ap as Ve,k as nt,P as rt,I as ie,g as ot,aR as q,m as Ae,au as it,q as at,at as lt,u as Ye,ax as ge,V as st,n as ut}from"./index-BSTqmw9T.js";import{m as ct,a4 as vt,E as De,$ as F,K as Le,ab as ft,R as pt}from"./RightOutlined-C3BWjZSa.js";import{q as gt,e as He,r as dt,D as mt,n as Ue,s as wt,t as ht,L as bt,E as Ct}from"./useChatSource-CWL3hNcM.js";var yt="[object Number]";function St(e){return typeof e=="number"||ct(e)&&vt(e)==yt}function Pt(e){const t=R(null),n=re(s({},e)),r=R([]),o=u=>{t.value===null&&(r.value=[],t.value=De(()=>{let f;r.value.forEach(g=>{f=s(s({},f),g)}),s(n,f),t.value=null})),r.value.push(u)};return Oe(()=>{t.value&&De.cancel(t.value)}),[n,o]}function ze(e,t,n,r){const o=t+n,u=(n-r)/2;if(n>r){if(t>0)return{[e]:u};if(t<0&&o<r)return{[e]:-u}}else if(t<0||o>r)return{[e]:t<0?u:-u};return{}}function Ot(e,t,n,r){const{width:o,height:u}=gt();let f=null;return e<=o&&t<=u?f={x:0,y:0}:(e>o||t>u)&&(f=s(s({},ze("x",n,e,o)),ze("y",r,t,u))),f}var xt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Ee=Symbol("previewGroupContext"),xe={provide:e=>{Ke(Ee,e)},inject:()=>et(Ee,{isPreviewGroup:Z(!1),previewUrls:v(()=>new Map),setPreviewUrls:()=>{},current:R(null),setCurrent:()=>{},setShowPreview:()=>{},setMousePosition:()=>{},registerImage:null,rootClassName:""})},Mt=()=>({previewPrefixCls:String,preview:{type:[Boolean,Object],default:!0},icons:{type:Object,default:()=>({})}}),It=oe({compatConfig:{MODE:3},name:"PreviewGroup",inheritAttrs:!1,props:Mt(),setup(e,t){let{slots:n}=t;const r=v(()=>{const a={visible:void 0,onVisibleChange:()=>{},getContainer:void 0,current:0};return typeof e.preview=="object"?Fe(e.preview,a):a}),o=re(new Map),u=R(),f=v(()=>r.value.visible),g=v(()=>r.value.getContainer),S=(a,O)=>{var y,L;(L=(y=r.value).onVisibleChange)===null||L===void 0||L.call(y,a,O)},[M,p]=He(!!f.value,{value:f,onChange:S}),m=R(null),A=v(()=>f.value!==void 0),d=v(()=>Array.from(o.keys())),h=v(()=>d.value[r.value.current]),b=v(()=>new Map(Array.from(o).filter(a=>{let[,{canPreview:O}]=a;return!!O}).map(a=>{let[O,{url:y}]=a;return[O,y]}))),w=function(a,O){let y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;o.set(a,{url:O,canPreview:y})},C=a=>{u.value=a},D=a=>{m.value=a},T=function(a,O){let y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const L=()=>{o.delete(a)};return o.set(a,{url:O,canPreview:y}),L},P=a=>{a==null||a.stopPropagation(),p(!1),D(null)};return J(h,a=>{C(a)},{immediate:!0,flush:"post"}),tt(()=>{M.value&&A.value&&C(h.value)},{flush:"post"}),xe.provide({isPreviewGroup:Z(!0),previewUrls:b,setPreviewUrls:w,current:u,setCurrent:C,setShowPreview:p,setMousePosition:D,registerImage:T}),()=>{const a=xt(r.value,[]);return l(Be,null,[n.default&&n.default(),l(Ze,x(x({},a),{},{"ria-hidden":!M.value,visible:M.value,prefixCls:e.previewPrefixCls,onClose:P,mousePosition:m.value,src:b.value.get(u.value),icons:e.icons,getContainer:g.value}),null)])}}}),Xe=It,X={x:0,y:0},$t=s(s({},dt()),{src:String,alt:String,rootClassName:String,icons:{type:Object,default:()=>({})}}),Ze=oe({compatConfig:{MODE:3},name:"Preview",inheritAttrs:!1,props:$t,emits:["close","afterClose"],setup(e,t){let{emit:n,attrs:r}=t;const{rotateLeft:o,rotateRight:u,zoomIn:f,zoomOut:g,close:S,left:M,right:p,flipX:m,flipY:A}=re(e.icons),d=Z(1),h=Z(0),b=re({x:1,y:1}),[w,C]=Pt(X),D=()=>n("close"),T=Z(),P=re({originX:0,originY:0,deltaX:0,deltaY:0}),a=Z(!1),O=xe.inject(),{previewUrls:y,current:L,isPreviewGroup:K,setCurrent:N}=O,V=v(()=>y.value.size),Y=v(()=>Array.from(y.value.keys())),I=v(()=>Y.value.indexOf(L.value)),me=v(()=>K.value?y.value.get(L.value):e.src),z=v(()=>K.value&&V.value>1),k=Z({wheelDirection:0}),ee=()=>{d.value=1,h.value=0,b.x=1,b.y=1,C(X),n("afterClose")},c=i=>{i?d.value+=.5:d.value++,C(X)},E=i=>{d.value>1&&(i?d.value-=.5:d.value--),C(X)},$=()=>{h.value+=90},H=()=>{h.value-=90},ae=()=>{b.x=-b.x},we=()=>{b.y=-b.y},le=i=>{i.preventDefault(),i.stopPropagation(),I.value>0&&N(Y.value[I.value-1])},se=i=>{i.preventDefault(),i.stopPropagation(),I.value<V.value-1&&N(Y.value[I.value+1])},te=W({[`${e.prefixCls}-moving`]:a.value}),he=`${e.prefixCls}-operations-operation`,be=`${e.prefixCls}-operations-icon`,ue=[{icon:S,onClick:D,type:"close"},{icon:f,onClick:()=>c(),type:"zoomIn"},{icon:g,onClick:()=>E(),type:"zoomOut",disabled:v(()=>d.value===1)},{icon:u,onClick:$,type:"rotateRight"},{icon:o,onClick:H,type:"rotateLeft"},{icon:m,onClick:ae,type:"flipX"},{icon:A,onClick:we,type:"flipY"}],ce=()=>{if(e.visible&&a.value){const i=T.value.offsetWidth*d.value,j=T.value.offsetHeight*d.value,{left:_,top:U}=Ue(T.value),G=h.value%180!==0;a.value=!1;const B=Ot(G?j:i,G?i:j,_,U);B&&C(s({},B))}},Ce=i=>{i.button===0&&(i.preventDefault(),i.stopPropagation(),P.deltaX=i.pageX-w.x,P.deltaY=i.pageY-w.y,P.originX=w.x,P.originY=w.y,a.value=!0)},ve=i=>{e.visible&&a.value&&C({x:i.pageX-P.deltaX,y:i.pageY-P.deltaY})},ye=i=>{if(!e.visible)return;i.preventDefault();const j=i.deltaY;k.value={wheelDirection:j}},Se=i=>{!e.visible||!z.value||(i.preventDefault(),i.keyCode===Le.LEFT?I.value>0&&N(Y.value[I.value-1]):i.keyCode===Le.RIGHT&&I.value<V.value-1&&N(Y.value[I.value+1]))},fe=()=>{e.visible&&(d.value!==1&&(d.value=1),(w.x!==X.x||w.y!==X.y)&&C(X))};let ne=()=>{};return Oe(()=>{J([()=>e.visible,a],()=>{ne();let i,j;const _=F(window,"mouseup",ce,!1),U=F(window,"mousemove",ve,!1),G=F(window,"wheel",ye,{passive:!1}),B=F(window,"keydown",Se,!1);try{window.top!==window.self&&(i=F(window.top,"mouseup",ce,!1),j=F(window.top,"mousemove",ve,!1))}catch{}ne=()=>{_.remove(),U.remove(),G.remove(),B.remove(),i&&i.remove(),j&&j.remove()}},{flush:"post",immediate:!0}),J([k],()=>{const{wheelDirection:i}=k.value;i>0?E(!0):i<0&&c(!0)})}),Ve(()=>{ne()}),()=>{const{visible:i,prefixCls:j,rootClassName:_}=e;return l(mt,x(x({},r),{},{transitionName:e.transitionName,maskTransitionName:e.maskTransitionName,closable:!1,keyboard:!0,prefixCls:j,onClose:D,afterClose:ee,visible:i,wrapClassName:te,rootClassName:_,getContainer:e.getContainer}),{default:()=>[l("div",{class:[`${e.prefixCls}-operations-wrapper`,_]},[l("ul",{class:`${e.prefixCls}-operations`},[ue.map(U=>{let{icon:G,onClick:B,type:Ne,disabled:pe}=U;return l("li",{class:W(he,{[`${e.prefixCls}-operations-operation-disabled`]:pe&&(pe==null?void 0:pe.value)}),onClick:B,key:Ne},[nt(G,{class:be})])})])]),l("div",{class:`${e.prefixCls}-img-wrapper`,style:{transform:`translate3d(${w.x}px, ${w.y}px, 0)`}},[l("img",{onMousedown:Ce,onDblclick:fe,ref:T,class:`${e.prefixCls}-img`,src:me.value,alt:e.alt,style:{transform:`scale3d(${b.x*d.value}, ${b.y*d.value}, 1) rotate(${h.value}deg)`}},null)]),z.value&&l("div",{class:W(`${e.prefixCls}-switch-left`,{[`${e.prefixCls}-switch-left-disabled`]:I.value<=0}),onClick:le},[M]),z.value&&l("div",{class:W(`${e.prefixCls}-switch-right`,{[`${e.prefixCls}-switch-right-disabled`]:I.value>=V.value-1}),onClick:se},[p])]})}}});var jt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const We=()=>({src:String,wrapperClassName:String,wrapperStyle:{type:Object,default:void 0},rootClassName:String,prefixCls:String,previewPrefixCls:String,previewMask:{type:[Boolean,Function],default:void 0},placeholder:rt.any,fallback:String,preview:{type:[Boolean,Object],default:!0},onClick:{type:Function},onError:{type:Function}}),Fe=(e,t)=>{const n=s({},e);return Object.keys(t).forEach(r=>{e[r]===void 0&&(n[r]=t[r])}),n};let Nt=0;const Qe=oe({compatConfig:{MODE:3},name:"VcImage",inheritAttrs:!1,props:We(),emits:["click","error"],setup(e,t){let{attrs:n,slots:r,emit:o}=t;const u=v(()=>e.prefixCls),f=v(()=>`${u.value}-preview`),g=v(()=>{const c={visible:void 0,onVisibleChange:()=>{},getContainer:void 0};return typeof e.preview=="object"?Fe(e.preview,c):c}),S=v(()=>{var c;return(c=g.value.src)!==null&&c!==void 0?c:e.src}),M=v(()=>e.placeholder&&e.placeholder!==!0||r.placeholder),p=v(()=>g.value.visible),m=v(()=>g.value.getContainer),A=v(()=>p.value!==void 0),d=(c,E)=>{var $,H;(H=($=g.value).onVisibleChange)===null||H===void 0||H.call($,c,E)},[h,b]=He(!!p.value,{value:p,onChange:d}),w=R(M.value?"loading":"normal");J(()=>e.src,()=>{w.value=M.value?"loading":"normal"});const C=R(null),D=v(()=>w.value==="error"),T=xe.inject(),{isPreviewGroup:P,setCurrent:a,setShowPreview:O,setMousePosition:y,registerImage:L}=T,K=R(Nt++),N=v(()=>e.preview&&!D.value),V=()=>{w.value="normal"},Y=c=>{w.value="error",o("error",c)},I=c=>{if(!A.value){const{left:E,top:$}=Ue(c.target);P.value?(a(K.value),y({x:E,y:$})):C.value={x:E,y:$}}P.value?O(!0):b(!0),o("click",c)},me=()=>{b(!1),A.value||(C.value=null)},z=R(null);J(()=>z,()=>{w.value==="loading"&&z.value.complete&&(z.value.naturalWidth||z.value.naturalHeight)&&V()});let k=()=>{};Oe(()=>{J([S,N],()=>{if(k(),!P.value)return()=>{};k=L(K.value,S.value,N.value),N.value||k()},{flush:"post",immediate:!0})}),Ve(()=>{k()});const ee=c=>St(c)?c+"px":c;return()=>{const{prefixCls:c,wrapperClassName:E,fallback:$,src:H,placeholder:ae,wrapperStyle:we,rootClassName:le}=e,{width:se,height:te,crossorigin:he,decoding:be,alt:ue,sizes:ce,srcset:Ce,usemap:ve,class:ye,style:Se}=n,fe=g.value,{icons:ne,maskClassName:i}=fe,j=jt(fe,["icons","maskClassName"]),_=W(c,E,le,{[`${c}-error`]:D.value}),U=D.value&&$?$:S.value,G={crossorigin:he,decoding:be,alt:ue,sizes:ce,srcset:Ce,usemap:ve,width:se,height:te,class:W(`${c}-img`,{[`${c}-img-placeholder`]:ae===!0},ye),style:s({height:ee(te)},Se)};return l(Be,null,[l("div",{class:_,onClick:N.value?I:B=>{o("click",B)},style:s({width:ee(se),height:ee(te)},we)},[l("img",x(x(x({},G),D.value&&$?{src:$}:{onLoad:V,onError:Y,src:H}),{},{ref:z}),null),w.value==="loading"&&l("div",{"aria-hidden":"true",class:`${c}-placeholder`},[ae||r.placeholder&&r.placeholder()]),r.previewMask&&N.value&&l("div",{class:[`${c}-mask`,i]},[r.previewMask()])]),!P.value&&N.value&&l(Ze,x(x({},j),{},{"aria-hidden":!h.value,visible:h.value,prefixCls:f.value,onClose:me,mousePosition:C.value,src:U,alt:ue,getContainer:m.value,icons:ne,rootClassName:le}),null)])}}});Qe.PreviewGroup=Xe;const At=Qe;var Dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};function Re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){Lt(e,o,n[o])})}return e}function Lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Me=function(t,n){var r=Re({},t,n.attrs);return l(ie,Re({},r,{icon:Dt}),null)};Me.displayName="RotateLeftOutlined";Me.inheritAttrs=!1;var zt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};function Te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){Et(e,o,n[o])})}return e}function Et(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ie=function(t,n){var r=Te({},t,n.attrs);return l(ie,Te({},r,{icon:zt}),null)};Ie.displayName="RotateRightOutlined";Ie.inheritAttrs=!1;var Rt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};function ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){Tt(e,o,n[o])})}return e}function Tt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $e=function(t,n){var r=ke({},t,n.attrs);return l(ie,ke({},r,{icon:Rt}),null)};$e.displayName="ZoomInOutlined";$e.inheritAttrs=!1;var kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};function _e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){_t(e,o,n[o])})}return e}function _t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var je=function(t,n){var r=_e({},t,n.attrs);return l(ie,_e({},r,{icon:kt}),null)};je.displayName="ZoomOutOutlined";je.inheritAttrs=!1;var Gt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};function Ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){Bt(e,o,n[o])})}return e}function Bt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var de=function(t,n){var r=Ge({},t,n.attrs);return l(ie,Ge({},r,{icon:Gt}),null)};de.displayName="SwapOutlined";de.inheritAttrs=!1;const Pe=e=>({position:e||"absolute",inset:0}),Vt=e=>{const{iconCls:t,motionDurationSlow:n,paddingXXS:r,marginXXS:o,prefixCls:u}=e;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",background:new q("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${n}`,[`.${u}-mask-info`]:s(s({},it),{padding:`0 ${r}px`,[t]:{marginInlineEnd:o,svg:{verticalAlign:"baseline"}}})}},Yt=e=>{const{previewCls:t,modalMaskBg:n,paddingSM:r,previewOperationColorDisabled:o,motionDurationSlow:u}=e,f=new q(n).setAlpha(.1),g=f.clone().setAlpha(.2);return{[`${t}-operations`]:s(s({},at(e)),{display:"flex",flexDirection:"row-reverse",alignItems:"center",color:e.previewOperationColor,listStyle:"none",background:f.toRgbString(),pointerEvents:"auto","&-operation":{marginInlineStart:r,padding:r,cursor:"pointer",transition:`all ${u}`,userSelect:"none","&:hover":{background:g.toRgbString()},"&-disabled":{color:o,pointerEvents:"none"},"&:last-of-type":{marginInlineStart:0}},"&-progress":{position:"absolute",left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%)"},"&-icon":{fontSize:e.previewOperationSize}})}},Ht=e=>{const{modalMaskBg:t,iconCls:n,previewOperationColorDisabled:r,previewCls:o,zIndexPopup:u,motionDurationSlow:f}=e,g=new q(t).setAlpha(.1),S=g.clone().setAlpha(.2);return{[`${o}-switch-left, ${o}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:u+1,display:"flex",alignItems:"center",justifyContent:"center",width:e.imagePreviewSwitchSize,height:e.imagePreviewSwitchSize,marginTop:-e.imagePreviewSwitchSize/2,color:e.previewOperationColor,background:g.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${f}`,pointerEvents:"auto",userSelect:"none","&:hover":{background:S.toRgbString()},"&-disabled":{"&, &:hover":{color:r,background:"transparent",cursor:"not-allowed",[`> ${n}`]:{cursor:"not-allowed"}}},[`> ${n}`]:{fontSize:e.previewOperationSize}},[`${o}-switch-left`]:{insetInlineStart:e.marginSM},[`${o}-switch-right`]:{insetInlineEnd:e.marginSM}}},Ut=e=>{const{motionEaseOut:t,previewCls:n,motionDurationSlow:r,componentCls:o}=e;return[{[`${o}-preview-root`]:{[n]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${n}-body`]:s(s({},Pe()),{overflow:"hidden"}),[`${n}-img`]:{maxWidth:"100%",maxHeight:"100%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${r} ${t} 0s`,userSelect:"none",pointerEvents:"auto","&-wrapper":s(s({},Pe()),{transition:`transform ${r} ${t} 0s`,display:"flex",justifyContent:"center",alignItems:"center","&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${n}-moving`]:{[`${n}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${o}-preview-root`]:{[`${n}-wrap`]:{zIndex:e.zIndexPopup}}},{[`${o}-preview-operations-wrapper`]:{position:"fixed",insetBlockStart:0,insetInlineEnd:0,zIndex:e.zIndexPopup+1,width:"100%"},"&":[Yt(e),Ht(e)]}]},Xt=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",display:"inline-block",[`${t}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${t}-img-placeholder`]:{backgroundColor:e.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${t}-mask`]:s({},Vt(e)),[`${t}-mask:hover`]:{opacity:1},[`${t}-placeholder`]:s({},Pe())}}},Zt=e=>{const{previewCls:t}=e;return{[`${t}-root`]:ft(e,"zoom"),"&":ht(e,!0)}},Je=ot("Image",e=>{const t=`${e.componentCls}-preview`,n=Ae(e,{previewCls:t,modalMaskBg:new q("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:e.controlHeightLG});return[Xt(n),Ut(n),wt(Ae(n,{componentCls:t})),Zt(n)]},e=>({zIndexPopup:e.zIndexPopupBase+80,previewOperationColor:new q(e.colorTextLightSolid).toRgbString(),previewOperationColorDisabled:new q(e.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:e.fontSizeIcon*1.5})),qe={rotateLeft:l(Me,null,null),rotateRight:l(Ie,null,null),zoomIn:l($e,null,null),zoomOut:l(je,null,null),close:l(lt,null,null),left:l(bt,null,null),right:l(pt,null,null),flipX:l(de,null,null),flipY:l(de,{rotate:90},null)},Wt=()=>({previewPrefixCls:String,preview:st()}),Ft=oe({compatConfig:{MODE:3},name:"AImagePreviewGroup",inheritAttrs:!1,props:Wt(),setup(e,t){let{attrs:n,slots:r}=t;const{prefixCls:o,rootPrefixCls:u}=Ye("image",e),f=v(()=>`${o.value}-preview`),[g,S]=Je(o),M=v(()=>{const{preview:p}=e;if(p===!1)return p;const m=typeof p=="object"?p:{};return s(s({},m),{rootClassName:S.value,transitionName:ge(u.value,"zoom",m.transitionName),maskTransitionName:ge(u.value,"fade",m.maskTransitionName)})});return()=>g(l(Xe,x(x({},s(s({},n),e)),{},{preview:M.value,icons:qe,previewPrefixCls:f.value}),r))}}),Qt=Ft,Q=oe({name:"AImage",inheritAttrs:!1,props:We(),setup(e,t){let{slots:n,attrs:r}=t;const{prefixCls:o,rootPrefixCls:u,configProvider:f}=Ye("image",e),[g,S]=Je(o),M=v(()=>{const{preview:p}=e;if(p===!1)return p;const m=typeof p=="object"?p:{};return s(s({icons:qe},m),{transitionName:ge(u.value,"zoom",m.transitionName),maskTransitionName:ge(u.value,"fade",m.maskTransitionName)})});return()=>{var p,m;const A=((m=(p=f.locale)===null||p===void 0?void 0:p.value)===null||m===void 0?void 0:m.Image)||ut.Image,d=()=>l("div",{class:`${o.value}-mask-info`},[l(Ct,null,null),A==null?void 0:A.preview]),{previewMask:h=n.previewMask||d}=e;return g(l(At,x(x({},s(s(s({},r),e),{prefixCls:o.value})),{},{preview:M.value,rootClassName:W(e.rootClassName,S.value)}),s(s({},n),{previewMask:typeof h=="function"?h:null})))}}});Q.PreviewGroup=Qt;Q.install=function(e){return e.component(Q.name,Q),e.component(Q.PreviewGroup.name,Q.PreviewGroup),e};export{Q as I};

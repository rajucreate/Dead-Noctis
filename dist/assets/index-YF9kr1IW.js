const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-CG93nHYD.js","assets/ContinuousWorld-BDIpywGr.js","assets/AboutSection-DAwhe4Wd.js","assets/usePageMeta-YHNFPTbG.js","assets/EventsSection-g6LVngd2.js","assets/HoloTiltCard-zaktEksd.js","assets/RulesSection-BwUqlDy0.js","assets/FaqSection-DuVlzb-E.js","assets/AboutPage-D3DAc2d9.js","assets/EventsPage-Ds4s-EDz.js","assets/RulesPage-CmAqNRQy.js","assets/FaqPage-B_VNl36L.js","assets/RegisterPage-BCKf15YB.js","assets/PageShell-CBJbn47L.js","assets/NotFoundPage-Dyztje1g.js"])))=>i.map(i=>d[i]);
function kM(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function BM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _v={exports:{}},rf={},vv={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ql=Symbol.for("react.element"),zM=Symbol.for("react.portal"),VM=Symbol.for("react.fragment"),GM=Symbol.for("react.strict_mode"),HM=Symbol.for("react.profiler"),WM=Symbol.for("react.provider"),XM=Symbol.for("react.context"),YM=Symbol.for("react.forward_ref"),qM=Symbol.for("react.suspense"),$M=Symbol.for("react.memo"),KM=Symbol.for("react.lazy"),Dg=Symbol.iterator;function ZM(n){return n===null||typeof n!="object"?null:(n=Dg&&n[Dg]||n["@@iterator"],typeof n=="function"?n:null)}var xv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yv=Object.assign,Sv={};function go(n,e,t){this.props=n,this.context=e,this.refs=Sv,this.updater=t||xv}go.prototype.isReactComponent={};go.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};go.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Mv(){}Mv.prototype=go.prototype;function qp(n,e,t){this.props=n,this.context=e,this.refs=Sv,this.updater=t||xv}var $p=qp.prototype=new Mv;$p.constructor=qp;yv($p,go.prototype);$p.isPureReactComponent=!0;var Ng=Array.isArray,Ev=Object.prototype.hasOwnProperty,Kp={current:null},wv={key:!0,ref:!0,__self:!0,__source:!0};function Tv(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Ev.call(e,i)&&!wv.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ql,type:n,key:s,ref:a,props:r,_owner:Kp.current}}function jM(n,e){return{$$typeof:ql,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Zp(n){return typeof n=="object"&&n!==null&&n.$$typeof===ql}function QM(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Ig=/\/+/g;function Cf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?QM(""+n.key):e.toString(36)}function Ku(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case ql:case zM:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Cf(a,0):i,Ng(r)?(t="",n!=null&&(t=n.replace(Ig,"$&/")+"/"),Ku(r,e,t,"",function(u){return u})):r!=null&&(Zp(r)&&(r=jM(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ig,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ng(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Cf(s,o);a+=Ku(s,e,t,l,r)}else if(l=ZM(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Cf(s,o++),a+=Ku(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function lu(n,e,t){if(n==null)return n;var i=[],r=0;return Ku(n,i,"","",function(s){return e.call(t,s,r++)}),i}function JM(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var An={current:null},Zu={transition:null},eE={ReactCurrentDispatcher:An,ReactCurrentBatchConfig:Zu,ReactCurrentOwner:Kp};function bv(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:lu,forEach:function(n,e,t){lu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return lu(n,function(){e++}),e},toArray:function(n){return lu(n,function(e){return e})||[]},only:function(n){if(!Zp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};qe.Component=go;qe.Fragment=VM;qe.Profiler=HM;qe.PureComponent=qp;qe.StrictMode=GM;qe.Suspense=qM;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eE;qe.act=bv;qe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=yv({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Kp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)Ev.call(e,l)&&!wv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:ql,type:n.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(n){return n={$$typeof:XM,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:WM,_context:n},n.Consumer=n};qe.createElement=Tv;qe.createFactory=function(n){var e=Tv.bind(null,n);return e.type=n,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(n){return{$$typeof:YM,render:n}};qe.isValidElement=Zp;qe.lazy=function(n){return{$$typeof:KM,_payload:{_status:-1,_result:n},_init:JM}};qe.memo=function(n,e){return{$$typeof:$M,type:n,compare:e===void 0?null:e}};qe.startTransition=function(n){var e=Zu.transition;Zu.transition={};try{n()}finally{Zu.transition=e}};qe.unstable_act=bv;qe.useCallback=function(n,e){return An.current.useCallback(n,e)};qe.useContext=function(n){return An.current.useContext(n)};qe.useDebugValue=function(){};qe.useDeferredValue=function(n){return An.current.useDeferredValue(n)};qe.useEffect=function(n,e){return An.current.useEffect(n,e)};qe.useId=function(){return An.current.useId()};qe.useImperativeHandle=function(n,e,t){return An.current.useImperativeHandle(n,e,t)};qe.useInsertionEffect=function(n,e){return An.current.useInsertionEffect(n,e)};qe.useLayoutEffect=function(n,e){return An.current.useLayoutEffect(n,e)};qe.useMemo=function(n,e){return An.current.useMemo(n,e)};qe.useReducer=function(n,e,t){return An.current.useReducer(n,e,t)};qe.useRef=function(n){return An.current.useRef(n)};qe.useState=function(n){return An.current.useState(n)};qe.useSyncExternalStore=function(n,e,t){return An.current.useSyncExternalStore(n,e,t)};qe.useTransition=function(){return An.current.useTransition()};qe.version="18.3.1";vv.exports=qe;var ae=vv.exports;const sf=BM(ae),tE=kM({__proto__:null,default:sf},[ae]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE=ae,iE=Symbol.for("react.element"),rE=Symbol.for("react.fragment"),sE=Object.prototype.hasOwnProperty,aE=nE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oE={key:!0,ref:!0,__self:!0,__source:!0};function Av(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)sE.call(e,i)&&!oE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:iE,type:n,key:s,ref:a,props:r,_owner:aE.current}}rf.Fragment=rE;rf.jsx=Av;rf.jsxs=Av;_v.exports=rf;var le=_v.exports,Xd={},Cv={exports:{}},ri={},Rv={exports:{}},Pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(F,O){var G=F.length;F.push(O);e:for(;0<G;){var K=G-1>>>1,fe=F[K];if(0<r(fe,O))F[K]=O,F[G]=fe,G=K;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var O=F[0],G=F.pop();if(G!==O){F[0]=G;e:for(var K=0,fe=F.length,Ee=fe>>>1;K<Ee;){var Ne=2*(K+1)-1,Ie=F[Ne],ke=Ne+1,j=F[ke];if(0>r(Ie,G))ke<fe&&0>r(j,Ie)?(F[K]=j,F[ke]=G,K=ke):(F[K]=Ie,F[Ne]=G,K=Ne);else if(ke<fe&&0>r(j,G))F[K]=j,F[ke]=G,K=ke;else break e}}return O}function r(F,O){var G=F.sortIndex-O.sortIndex;return G!==0?G:F.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(F){for(var O=t(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=F)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(u)}}function x(F){if(g=!1,S(F),!_)if(t(l)!==null)_=!0,q(M);else{var O=t(u);O!==null&&X(x,O.startTime-F)}}function M(F,O){_=!1,g&&(g=!1,h(y),y=-1),p=!0;var G=f;try{for(S(O),d=t(l);d!==null&&(!(d.expirationTime>O)||F&&!D());){var K=d.callback;if(typeof K=="function"){d.callback=null,f=d.priorityLevel;var fe=K(d.expirationTime<=O);O=n.unstable_now(),typeof fe=="function"?d.callback=fe:d===t(l)&&i(l),S(O)}else i(l);d=t(l)}if(d!==null)var Ee=!0;else{var Ne=t(u);Ne!==null&&X(x,Ne.startTime-O),Ee=!1}return Ee}finally{d=null,f=G,p=!1}}var w=!1,A=null,y=-1,b=5,C=-1;function D(){return!(n.unstable_now()-C<b)}function N(){if(A!==null){var F=n.unstable_now();C=F;var O=!0;try{O=A(!0,F)}finally{O?k():(w=!1,A=null)}}else w=!1}var k;if(typeof v=="function")k=function(){v(N)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,B=L.port2;L.port1.onmessage=N,k=function(){B.postMessage(null)}}else k=function(){m(N,0)};function q(F){A=F,w||(w=!0,k())}function X(F,O){y=m(function(){F(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,q(M))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(F){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var G=f;f=O;try{return F()}finally{f=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,O){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var G=f;f=F;try{return O()}finally{f=G}},n.unstable_scheduleCallback=function(F,O,G){var K=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?K+G:K):G=K,F){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=G+fe,F={id:c++,callback:O,priorityLevel:F,startTime:G,expirationTime:fe,sortIndex:-1},G>K?(F.sortIndex=G,e(u,F),t(l)===null&&F===t(u)&&(g?(h(y),y=-1):g=!0,X(x,G-K))):(F.sortIndex=fe,e(l,F),_||p||(_=!0,q(M))),F},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(F){var O=f;return function(){var G=f;f=O;try{return F.apply(this,arguments)}finally{f=G}}}})(Pv);Rv.exports=Pv;var lE=Rv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uE=ae,ti=lE;function ue(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lv=new Set,ml={};function Js(n,e){to(n,e),to(n+"Capture",e)}function to(n,e){for(ml[n]=e,n=0;n<e.length;n++)Lv.add(e[n])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yd=Object.prototype.hasOwnProperty,cE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ug={},Fg={};function fE(n){return Yd.call(Fg,n)?!0:Yd.call(Ug,n)?!1:cE.test(n)?Fg[n]=!0:(Ug[n]=!0,!1)}function dE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function hE(n,e,t,i){if(e===null||typeof e>"u"||dE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Cn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var un={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){un[n]=new Cn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];un[e]=new Cn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){un[n]=new Cn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){un[n]=new Cn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){un[n]=new Cn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){un[n]=new Cn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){un[n]=new Cn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){un[n]=new Cn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){un[n]=new Cn(n,5,!1,n.toLowerCase(),null,!1,!1)});var jp=/[\-:]([a-z])/g;function Qp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(jp,Qp);un[e]=new Cn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(jp,Qp);un[e]=new Cn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(jp,Qp);un[e]=new Cn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){un[n]=new Cn(n,1,!1,n.toLowerCase(),null,!1,!1)});un.xlinkHref=new Cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){un[n]=new Cn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Jp(n,e,t,i){var r=un.hasOwnProperty(e)?un[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hE(e,t,r,i)&&(t=null),i||r===null?fE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Cr=uE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uu=Symbol.for("react.element"),Aa=Symbol.for("react.portal"),Ca=Symbol.for("react.fragment"),em=Symbol.for("react.strict_mode"),qd=Symbol.for("react.profiler"),Dv=Symbol.for("react.provider"),Nv=Symbol.for("react.context"),tm=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),Kd=Symbol.for("react.suspense_list"),nm=Symbol.for("react.memo"),Gr=Symbol.for("react.lazy"),Iv=Symbol.for("react.offscreen"),Og=Symbol.iterator;function Ao(n){return n===null||typeof n!="object"?null:(n=Og&&n[Og]||n["@@iterator"],typeof n=="function"?n:null)}var Nt=Object.assign,Rf;function qo(n){if(Rf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Rf=e&&e[1]||""}return`
`+Rf+n}var Pf=!1;function Lf(n,e){if(!n||Pf)return"";Pf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Pf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?qo(n):""}function pE(n){switch(n.tag){case 5:return qo(n.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return n=Lf(n.type,!1),n;case 11:return n=Lf(n.type.render,!1),n;case 1:return n=Lf(n.type,!0),n;default:return""}}function Zd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ca:return"Fragment";case Aa:return"Portal";case qd:return"Profiler";case em:return"StrictMode";case $d:return"Suspense";case Kd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Nv:return(n.displayName||"Context")+".Consumer";case Dv:return(n._context.displayName||"Context")+".Provider";case tm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case nm:return e=n.displayName||null,e!==null?e:Zd(n.type)||"Memo";case Gr:e=n._payload,n=n._init;try{return Zd(n(e))}catch{}}return null}function mE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zd(e);case 8:return e===em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Uv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gE(n){var e=Uv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function cu(n){n._valueTracker||(n._valueTracker=gE(n))}function Fv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Uv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function _c(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function jd(n,e){var t=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function kg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=fs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ov(n,e){e=e.checked,e!=null&&Jp(n,"checked",e,!1)}function Qd(n,e){Ov(n,e);var t=fs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Jd(n,e.type,t):e.hasOwnProperty("defaultValue")&&Jd(n,e.type,fs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Bg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Jd(n,e,t){(e!=="number"||_c(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var $o=Array.isArray;function Ga(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+fs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function eh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function zg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ue(92));if($o(t)){if(1<t.length)throw Error(ue(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:fs(t)}}function kv(n,e){var t=fs(e.value),i=fs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Vg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Bv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function th(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Bv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fu,zv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(fu=fu||document.createElement("div"),fu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function gl(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var tl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_E=["Webkit","ms","Moz","O"];Object.keys(tl).forEach(function(n){_E.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),tl[e]=tl[n]})});function Vv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||tl.hasOwnProperty(n)&&tl[n]?(""+e).trim():e+"px"}function Gv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Vv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var vE=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nh(n,e){if(e){if(vE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function ih(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rh=null;function im(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sh=null,Ha=null,Wa=null;function Gg(n){if(n=Zl(n)){if(typeof sh!="function")throw Error(ue(280));var e=n.stateNode;e&&(e=cf(e),sh(n.stateNode,n.type,e))}}function Hv(n){Ha?Wa?Wa.push(n):Wa=[n]:Ha=n}function Wv(){if(Ha){var n=Ha,e=Wa;if(Wa=Ha=null,Gg(n),e)for(n=0;n<e.length;n++)Gg(e[n])}}function Xv(n,e){return n(e)}function Yv(){}var Df=!1;function qv(n,e,t){if(Df)return n(e,t);Df=!0;try{return Xv(n,e,t)}finally{Df=!1,(Ha!==null||Wa!==null)&&(Yv(),Wv())}}function _l(n,e){var t=n.stateNode;if(t===null)return null;var i=cf(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ue(231,e,typeof t));return t}var ah=!1;if(Sr)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){ah=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{ah=!1}function xE(n,e,t,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var nl=!1,vc=null,xc=!1,oh=null,yE={onError:function(n){nl=!0,vc=n}};function SE(n,e,t,i,r,s,a,o,l){nl=!1,vc=null,xE.apply(yE,arguments)}function ME(n,e,t,i,r,s,a,o,l){if(SE.apply(this,arguments),nl){if(nl){var u=vc;nl=!1,vc=null}else throw Error(ue(198));xc||(xc=!0,oh=u)}}function ea(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function $v(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Hg(n){if(ea(n)!==n)throw Error(ue(188))}function EE(n){var e=n.alternate;if(!e){if(e=ea(n),e===null)throw Error(ue(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Hg(r),n;if(s===i)return Hg(r),e;s=s.sibling}throw Error(ue(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ue(189))}}if(t.alternate!==i)throw Error(ue(190))}if(t.tag!==3)throw Error(ue(188));return t.stateNode.current===t?n:e}function Kv(n){return n=EE(n),n!==null?Zv(n):null}function Zv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Zv(n);if(e!==null)return e;n=n.sibling}return null}var jv=ti.unstable_scheduleCallback,Wg=ti.unstable_cancelCallback,wE=ti.unstable_shouldYield,TE=ti.unstable_requestPaint,zt=ti.unstable_now,bE=ti.unstable_getCurrentPriorityLevel,rm=ti.unstable_ImmediatePriority,Qv=ti.unstable_UserBlockingPriority,yc=ti.unstable_NormalPriority,AE=ti.unstable_LowPriority,Jv=ti.unstable_IdlePriority,af=null,$i=null;function CE(n){if($i&&typeof $i.onCommitFiberRoot=="function")try{$i.onCommitFiberRoot(af,n,void 0,(n.current.flags&128)===128)}catch{}}var Ni=Math.clz32?Math.clz32:LE,RE=Math.log,PE=Math.LN2;function LE(n){return n>>>=0,n===0?32:31-(RE(n)/PE|0)|0}var du=64,hu=4194304;function Ko(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Sc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Ko(o):(s&=a,s!==0&&(i=Ko(s)))}else a=t&~r,a!==0?i=Ko(a):s!==0&&(i=Ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ni(e),r=1<<t,i|=n[t],e&=~r;return i}function DE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-Ni(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=DE(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function lh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ex(){var n=du;return du<<=1,!(du&4194240)&&(du=64),n}function Nf(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function $l(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ni(e),n[e]=t}function IE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ni(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function sm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Ni(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var lt=0;function tx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var nx,am,ix,rx,sx,uh=!1,pu=[],es=null,ts=null,ns=null,vl=new Map,xl=new Map,Xr=[],UE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xg(n,e){switch(n){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":vl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(e.pointerId)}}function Ro(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Zl(e),e!==null&&am(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function FE(n,e,t,i,r){switch(e){case"focusin":return es=Ro(es,n,e,t,i,r),!0;case"dragenter":return ts=Ro(ts,n,e,t,i,r),!0;case"mouseover":return ns=Ro(ns,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return vl.set(s,Ro(vl.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,xl.set(s,Ro(xl.get(s)||null,n,e,t,i,r)),!0}return!1}function ax(n){var e=Ls(n.target);if(e!==null){var t=ea(e);if(t!==null){if(e=t.tag,e===13){if(e=$v(t),e!==null){n.blockedOn=e,sx(n.priority,function(){ix(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ju(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ch(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);rh=i,t.target.dispatchEvent(i),rh=null}else return e=Zl(t),e!==null&&am(e),n.blockedOn=t,!1;e.shift()}return!0}function Yg(n,e,t){ju(n)&&t.delete(e)}function OE(){uh=!1,es!==null&&ju(es)&&(es=null),ts!==null&&ju(ts)&&(ts=null),ns!==null&&ju(ns)&&(ns=null),vl.forEach(Yg),xl.forEach(Yg)}function Po(n,e){n.blockedOn===e&&(n.blockedOn=null,uh||(uh=!0,ti.unstable_scheduleCallback(ti.unstable_NormalPriority,OE)))}function yl(n){function e(r){return Po(r,n)}if(0<pu.length){Po(pu[0],n);for(var t=1;t<pu.length;t++){var i=pu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(es!==null&&Po(es,n),ts!==null&&Po(ts,n),ns!==null&&Po(ns,n),vl.forEach(e),xl.forEach(e),t=0;t<Xr.length;t++)i=Xr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Xr.length&&(t=Xr[0],t.blockedOn===null);)ax(t),t.blockedOn===null&&Xr.shift()}var Xa=Cr.ReactCurrentBatchConfig,Mc=!0;function kE(n,e,t,i){var r=lt,s=Xa.transition;Xa.transition=null;try{lt=1,om(n,e,t,i)}finally{lt=r,Xa.transition=s}}function BE(n,e,t,i){var r=lt,s=Xa.transition;Xa.transition=null;try{lt=4,om(n,e,t,i)}finally{lt=r,Xa.transition=s}}function om(n,e,t,i){if(Mc){var r=ch(n,e,t,i);if(r===null)Hf(n,e,i,Ec,t),Xg(n,i);else if(FE(r,n,e,t,i))i.stopPropagation();else if(Xg(n,i),e&4&&-1<UE.indexOf(n)){for(;r!==null;){var s=Zl(r);if(s!==null&&nx(s),s=ch(n,e,t,i),s===null&&Hf(n,e,i,Ec,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hf(n,e,i,null,t)}}var Ec=null;function ch(n,e,t,i){if(Ec=null,n=im(i),n=Ls(n),n!==null)if(e=ea(n),e===null)n=null;else if(t=e.tag,t===13){if(n=$v(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ec=n,null}function ox(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bE()){case rm:return 1;case Qv:return 4;case yc:case AE:return 16;case Jv:return 536870912;default:return 16}default:return 16}}var $r=null,lm=null,Qu=null;function lx(){if(Qu)return Qu;var n,e=lm,t=e.length,i,r="value"in $r?$r.value:$r.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Qu=r.slice(n,1<i?1-i:void 0)}function Ju(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function mu(){return!0}function qg(){return!1}function si(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mu:qg,this.isPropagationStopped=qg,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=mu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=mu)},persist:function(){},isPersistent:mu}),e}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},um=si(_o),Kl=Nt({},_o,{view:0,detail:0}),zE=si(Kl),If,Uf,Lo,of=Nt({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lo&&(Lo&&n.type==="mousemove"?(If=n.screenX-Lo.screenX,Uf=n.screenY-Lo.screenY):Uf=If=0,Lo=n),If)},movementY:function(n){return"movementY"in n?n.movementY:Uf}}),$g=si(of),VE=Nt({},of,{dataTransfer:0}),GE=si(VE),HE=Nt({},Kl,{relatedTarget:0}),Ff=si(HE),WE=Nt({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),XE=si(WE),YE=Nt({},_o,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),qE=si(YE),$E=Nt({},_o,{data:0}),Kg=si($E),KE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=jE[n])?!!e[n]:!1}function cm(){return QE}var JE=Nt({},Kl,{key:function(n){if(n.key){var e=KE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ju(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ZE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cm,charCode:function(n){return n.type==="keypress"?Ju(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ju(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),e1=si(JE),t1=Nt({},of,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zg=si(t1),n1=Nt({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cm}),i1=si(n1),r1=Nt({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=si(r1),a1=Nt({},of,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),o1=si(a1),l1=[9,13,27,32],fm=Sr&&"CompositionEvent"in window,il=null;Sr&&"documentMode"in document&&(il=document.documentMode);var u1=Sr&&"TextEvent"in window&&!il,ux=Sr&&(!fm||il&&8<il&&11>=il),jg=" ",Qg=!1;function cx(n,e){switch(n){case"keyup":return l1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ra=!1;function c1(n,e){switch(n){case"compositionend":return fx(e);case"keypress":return e.which!==32?null:(Qg=!0,jg);case"textInput":return n=e.data,n===jg&&Qg?null:n;default:return null}}function f1(n,e){if(Ra)return n==="compositionend"||!fm&&cx(n,e)?(n=lx(),Qu=lm=$r=null,Ra=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ux&&e.locale!=="ko"?null:e.data;default:return null}}var d1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!d1[n.type]:e==="textarea"}function dx(n,e,t,i){Hv(i),e=wc(e,"onChange"),0<e.length&&(t=new um("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var rl=null,Sl=null;function h1(n){Ex(n,0)}function lf(n){var e=Da(n);if(Fv(e))return n}function p1(n,e){if(n==="change")return e}var hx=!1;if(Sr){var Of;if(Sr){var kf="oninput"in document;if(!kf){var e_=document.createElement("div");e_.setAttribute("oninput","return;"),kf=typeof e_.oninput=="function"}Of=kf}else Of=!1;hx=Of&&(!document.documentMode||9<document.documentMode)}function t_(){rl&&(rl.detachEvent("onpropertychange",px),Sl=rl=null)}function px(n){if(n.propertyName==="value"&&lf(Sl)){var e=[];dx(e,Sl,n,im(n)),qv(h1,e)}}function m1(n,e,t){n==="focusin"?(t_(),rl=e,Sl=t,rl.attachEvent("onpropertychange",px)):n==="focusout"&&t_()}function g1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return lf(Sl)}function _1(n,e){if(n==="click")return lf(e)}function v1(n,e){if(n==="input"||n==="change")return lf(e)}function x1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Fi=typeof Object.is=="function"?Object.is:x1;function Ml(n,e){if(Fi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Yd.call(e,r)||!Fi(n[r],e[r]))return!1}return!0}function n_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function i_(n,e){var t=n_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=n_(t)}}function mx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?mx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function gx(){for(var n=window,e=_c();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=_c(n.document)}return e}function dm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function y1(n){var e=gx(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&mx(t.ownerDocument.documentElement,t)){if(i!==null&&dm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=i_(t,s);var a=i_(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var S1=Sr&&"documentMode"in document&&11>=document.documentMode,Pa=null,fh=null,sl=null,dh=!1;function r_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;dh||Pa==null||Pa!==_c(i)||(i=Pa,"selectionStart"in i&&dm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),sl&&Ml(sl,i)||(sl=i,i=wc(fh,"onSelect"),0<i.length&&(e=new um("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Pa)))}function gu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var La={animationend:gu("Animation","AnimationEnd"),animationiteration:gu("Animation","AnimationIteration"),animationstart:gu("Animation","AnimationStart"),transitionend:gu("Transition","TransitionEnd")},Bf={},_x={};Sr&&(_x=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function uf(n){if(Bf[n])return Bf[n];if(!La[n])return n;var e=La[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in _x)return Bf[n]=e[t];return n}var vx=uf("animationend"),xx=uf("animationiteration"),yx=uf("animationstart"),Sx=uf("transitionend"),Mx=new Map,s_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _s(n,e){Mx.set(n,e),Js(e,[n])}for(var zf=0;zf<s_.length;zf++){var Vf=s_[zf],M1=Vf.toLowerCase(),E1=Vf[0].toUpperCase()+Vf.slice(1);_s(M1,"on"+E1)}_s(vx,"onAnimationEnd");_s(xx,"onAnimationIteration");_s(yx,"onAnimationStart");_s("dblclick","onDoubleClick");_s("focusin","onFocus");_s("focusout","onBlur");_s(Sx,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);Js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Js("onBeforeInput",["compositionend","keypress","textInput","paste"]);Js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function a_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ME(i,e,void 0,n),n.currentTarget=null}function Ex(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;a_(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;a_(r,o,u),s=l}}}if(xc)throw n=oh,xc=!1,oh=null,n}function yt(n,e){var t=e[_h];t===void 0&&(t=e[_h]=new Set);var i=n+"__bubble";t.has(i)||(wx(e,n,2,!1),t.add(i))}function Gf(n,e,t){var i=0;e&&(i|=4),wx(t,n,i,e)}var _u="_reactListening"+Math.random().toString(36).slice(2);function El(n){if(!n[_u]){n[_u]=!0,Lv.forEach(function(t){t!=="selectionchange"&&(w1.has(t)||Gf(t,!1,n),Gf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[_u]||(e[_u]=!0,Gf("selectionchange",!1,e))}}function wx(n,e,t,i){switch(ox(e)){case 1:var r=kE;break;case 4:r=BE;break;default:r=om}t=r.bind(null,e,t,n),r=void 0,!ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Hf(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ls(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}qv(function(){var u=s,c=im(t),d=[];e:{var f=Mx.get(n);if(f!==void 0){var p=um,_=n;switch(n){case"keypress":if(Ju(t)===0)break e;case"keydown":case"keyup":p=e1;break;case"focusin":_="focus",p=Ff;break;case"focusout":_="blur",p=Ff;break;case"beforeblur":case"afterblur":p=Ff;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=GE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=i1;break;case vx:case xx:case yx:p=XE;break;case Sx:p=s1;break;case"scroll":p=zE;break;case"wheel":p=o1;break;case"copy":case"cut":case"paste":p=qE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zg}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var v=u,S;v!==null;){S=v;var x=S.stateNode;if(S.tag===5&&x!==null&&(S=x,h!==null&&(x=_l(v,h),x!=null&&g.push(wl(v,x,S)))),m)break;v=v.return}0<g.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==rh&&(_=t.relatedTarget||t.fromElement)&&(Ls(_)||_[Mr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?Ls(_):null,_!==null&&(m=ea(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=$g,x="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=Zg,x="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:Da(p),S=_==null?f:Da(_),f=new g(x,v+"leave",p,t,c),f.target=m,f.relatedTarget=S,x=null,Ls(c)===u&&(g=new g(h,v+"enter",_,t,c),g.target=S,g.relatedTarget=m,x=g),m=x,p&&_)t:{for(g=p,h=_,v=0,S=g;S;S=ca(S))v++;for(S=0,x=h;x;x=ca(x))S++;for(;0<v-S;)g=ca(g),v--;for(;0<S-v;)h=ca(h),S--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=ca(g),h=ca(h)}g=null}else g=null;p!==null&&o_(d,f,p,g,!1),_!==null&&m!==null&&o_(d,m,_,g,!0)}}e:{if(f=u?Da(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var M=p1;else if(Jg(f))if(hx)M=v1;else{M=g1;var w=m1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=_1);if(M&&(M=M(n,u))){dx(d,M,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Jd(f,"number",f.value)}switch(w=u?Da(u):window,n){case"focusin":(Jg(w)||w.contentEditable==="true")&&(Pa=w,fh=u,sl=null);break;case"focusout":sl=fh=Pa=null;break;case"mousedown":dh=!0;break;case"contextmenu":case"mouseup":case"dragend":dh=!1,r_(d,t,c);break;case"selectionchange":if(S1)break;case"keydown":case"keyup":r_(d,t,c)}var A;if(fm)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ra?cx(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(ux&&t.locale!=="ko"&&(Ra||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ra&&(A=lx()):($r=c,lm="value"in $r?$r.value:$r.textContent,Ra=!0)),w=wc(u,y),0<w.length&&(y=new Kg(y,n,null,t,c),d.push({event:y,listeners:w}),A?y.data=A:(A=fx(t),A!==null&&(y.data=A)))),(A=u1?c1(n,t):f1(n,t))&&(u=wc(u,"onBeforeInput"),0<u.length&&(c=new Kg("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=A))}Ex(d,e)})}function wl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function wc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_l(n,t),s!=null&&i.unshift(wl(n,s,r)),s=_l(n,e),s!=null&&i.push(wl(n,s,r))),n=n.return}return i}function ca(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function o_(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=_l(t,s),l!=null&&a.unshift(wl(t,l,o))):r||(l=_l(t,s),l!=null&&a.push(wl(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var T1=/\r\n?/g,b1=/\u0000|\uFFFD/g;function l_(n){return(typeof n=="string"?n:""+n).replace(T1,`
`).replace(b1,"")}function vu(n,e,t){if(e=l_(e),l_(n)!==e&&t)throw Error(ue(425))}function Tc(){}var hh=null,ph=null;function mh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gh=typeof setTimeout=="function"?setTimeout:void 0,A1=typeof clearTimeout=="function"?clearTimeout:void 0,u_=typeof Promise=="function"?Promise:void 0,C1=typeof queueMicrotask=="function"?queueMicrotask:typeof u_<"u"?function(n){return u_.resolve(null).then(n).catch(R1)}:gh;function R1(n){setTimeout(function(){throw n})}function Wf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),yl(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);yl(e)}function is(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function c_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var vo=Math.random().toString(36).slice(2),Wi="__reactFiber$"+vo,Tl="__reactProps$"+vo,Mr="__reactContainer$"+vo,_h="__reactEvents$"+vo,P1="__reactListeners$"+vo,L1="__reactHandles$"+vo;function Ls(n){var e=n[Wi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Mr]||t[Wi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=c_(n);n!==null;){if(t=n[Wi])return t;n=c_(n)}return e}n=t,t=n.parentNode}return null}function Zl(n){return n=n[Wi]||n[Mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Da(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ue(33))}function cf(n){return n[Tl]||null}var vh=[],Na=-1;function vs(n){return{current:n}}function St(n){0>Na||(n.current=vh[Na],vh[Na]=null,Na--)}function gt(n,e){Na++,vh[Na]=n.current,n.current=e}var ds={},yn=vs(ds),Nn=vs(!1),Ws=ds;function no(n,e){var t=n.type.contextTypes;if(!t)return ds;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function In(n){return n=n.childContextTypes,n!=null}function bc(){St(Nn),St(yn)}function f_(n,e,t){if(yn.current!==ds)throw Error(ue(168));gt(yn,e),gt(Nn,t)}function Tx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,mE(n)||"Unknown",r));return Nt({},t,i)}function Ac(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ds,Ws=yn.current,gt(yn,n),gt(Nn,Nn.current),!0}function d_(n,e,t){var i=n.stateNode;if(!i)throw Error(ue(169));t?(n=Tx(n,e,Ws),i.__reactInternalMemoizedMergedChildContext=n,St(Nn),St(yn),gt(yn,n)):St(Nn),gt(Nn,t)}var fr=null,ff=!1,Xf=!1;function bx(n){fr===null?fr=[n]:fr.push(n)}function D1(n){ff=!0,bx(n)}function xs(){if(!Xf&&fr!==null){Xf=!0;var n=0,e=lt;try{var t=fr;for(lt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}fr=null,ff=!1}catch(r){throw fr!==null&&(fr=fr.slice(n+1)),jv(rm,xs),r}finally{lt=e,Xf=!1}}return null}var Ia=[],Ua=0,Cc=null,Rc=0,fi=[],di=0,Xs=null,pr=1,mr="";function Cs(n,e){Ia[Ua++]=Rc,Ia[Ua++]=Cc,Cc=n,Rc=e}function Ax(n,e,t){fi[di++]=pr,fi[di++]=mr,fi[di++]=Xs,Xs=n;var i=pr;n=mr;var r=32-Ni(i)-1;i&=~(1<<r),t+=1;var s=32-Ni(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,pr=1<<32-Ni(e)+r|t<<r|i,mr=s+n}else pr=1<<s|t<<r|i,mr=n}function hm(n){n.return!==null&&(Cs(n,1),Ax(n,1,0))}function pm(n){for(;n===Cc;)Cc=Ia[--Ua],Ia[Ua]=null,Rc=Ia[--Ua],Ia[Ua]=null;for(;n===Xs;)Xs=fi[--di],fi[di]=null,mr=fi[--di],fi[di]=null,pr=fi[--di],fi[di]=null}var Jn=null,Zn=null,wt=!1,Ci=null;function Cx(n,e){var t=hi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function h_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Jn=n,Zn=is(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Jn=n,Zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Xs!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=hi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Jn=n,Zn=null,!0):!1;default:return!1}}function xh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function yh(n){if(wt){var e=Zn;if(e){var t=e;if(!h_(n,e)){if(xh(n))throw Error(ue(418));e=is(t.nextSibling);var i=Jn;e&&h_(n,e)?Cx(i,t):(n.flags=n.flags&-4097|2,wt=!1,Jn=n)}}else{if(xh(n))throw Error(ue(418));n.flags=n.flags&-4097|2,wt=!1,Jn=n}}}function p_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function xu(n){if(n!==Jn)return!1;if(!wt)return p_(n),wt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!mh(n.type,n.memoizedProps)),e&&(e=Zn)){if(xh(n))throw Rx(),Error(ue(418));for(;e;)Cx(n,e),e=is(e.nextSibling)}if(p_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ue(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Zn=is(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Zn=null}}else Zn=Jn?is(n.stateNode.nextSibling):null;return!0}function Rx(){for(var n=Zn;n;)n=is(n.nextSibling)}function io(){Zn=Jn=null,wt=!1}function mm(n){Ci===null?Ci=[n]:Ci.push(n)}var N1=Cr.ReactCurrentBatchConfig;function Do(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ue(309));var i=t.stateNode}if(!i)throw Error(ue(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ue(284));if(!t._owner)throw Error(ue(290,n))}return n}function yu(n,e){throw n=Object.prototype.toString.call(e),Error(ue(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function m_(n){var e=n._init;return e(n._payload)}function Px(n){function e(h,v){if(n){var S=h.deletions;S===null?(h.deletions=[v],h.flags|=16):S.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=os(h,v),h.index=0,h.sibling=null,h}function s(h,v,S){return h.index=S,n?(S=h.alternate,S!==null?(S=S.index,S<v?(h.flags|=2,v):S):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return n&&h.alternate===null&&(h.flags|=2),h}function o(h,v,S,x){return v===null||v.tag!==6?(v=Qf(S,h.mode,x),v.return=h,v):(v=r(v,S),v.return=h,v)}function l(h,v,S,x){var M=S.type;return M===Ca?c(h,v,S.props.children,x,S.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gr&&m_(M)===v.type)?(x=r(v,S.props),x.ref=Do(h,v,S),x.return=h,x):(x=ac(S.type,S.key,S.props,null,h.mode,x),x.ref=Do(h,v,S),x.return=h,x)}function u(h,v,S,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Jf(S,h.mode,x),v.return=h,v):(v=r(v,S.children||[]),v.return=h,v)}function c(h,v,S,x,M){return v===null||v.tag!==7?(v=Bs(S,h.mode,x,M),v.return=h,v):(v=r(v,S),v.return=h,v)}function d(h,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Qf(""+v,h.mode,S),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case uu:return S=ac(v.type,v.key,v.props,null,h.mode,S),S.ref=Do(h,null,v),S.return=h,S;case Aa:return v=Jf(v,h.mode,S),v.return=h,v;case Gr:var x=v._init;return d(h,x(v._payload),S)}if($o(v)||Ao(v))return v=Bs(v,h.mode,S,null),v.return=h,v;yu(h,v)}return null}function f(h,v,S,x){var M=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:o(h,v,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case uu:return S.key===M?l(h,v,S,x):null;case Aa:return S.key===M?u(h,v,S,x):null;case Gr:return M=S._init,f(h,v,M(S._payload),x)}if($o(S)||Ao(S))return M!==null?null:c(h,v,S,x,null);yu(h,S)}return null}function p(h,v,S,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(S)||null,o(v,h,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case uu:return h=h.get(x.key===null?S:x.key)||null,l(v,h,x,M);case Aa:return h=h.get(x.key===null?S:x.key)||null,u(v,h,x,M);case Gr:var w=x._init;return p(h,v,S,w(x._payload),M)}if($o(x)||Ao(x))return h=h.get(S)||null,c(v,h,x,M,null);yu(v,x)}return null}function _(h,v,S,x){for(var M=null,w=null,A=v,y=v=0,b=null;A!==null&&y<S.length;y++){A.index>y?(b=A,A=null):b=A.sibling;var C=f(h,A,S[y],x);if(C===null){A===null&&(A=b);break}n&&A&&C.alternate===null&&e(h,A),v=s(C,v,y),w===null?M=C:w.sibling=C,w=C,A=b}if(y===S.length)return t(h,A),wt&&Cs(h,y),M;if(A===null){for(;y<S.length;y++)A=d(h,S[y],x),A!==null&&(v=s(A,v,y),w===null?M=A:w.sibling=A,w=A);return wt&&Cs(h,y),M}for(A=i(h,A);y<S.length;y++)b=p(A,h,y,S[y],x),b!==null&&(n&&b.alternate!==null&&A.delete(b.key===null?y:b.key),v=s(b,v,y),w===null?M=b:w.sibling=b,w=b);return n&&A.forEach(function(D){return e(h,D)}),wt&&Cs(h,y),M}function g(h,v,S,x){var M=Ao(S);if(typeof M!="function")throw Error(ue(150));if(S=M.call(S),S==null)throw Error(ue(151));for(var w=M=null,A=v,y=v=0,b=null,C=S.next();A!==null&&!C.done;y++,C=S.next()){A.index>y?(b=A,A=null):b=A.sibling;var D=f(h,A,C.value,x);if(D===null){A===null&&(A=b);break}n&&A&&D.alternate===null&&e(h,A),v=s(D,v,y),w===null?M=D:w.sibling=D,w=D,A=b}if(C.done)return t(h,A),wt&&Cs(h,y),M;if(A===null){for(;!C.done;y++,C=S.next())C=d(h,C.value,x),C!==null&&(v=s(C,v,y),w===null?M=C:w.sibling=C,w=C);return wt&&Cs(h,y),M}for(A=i(h,A);!C.done;y++,C=S.next())C=p(A,h,y,C.value,x),C!==null&&(n&&C.alternate!==null&&A.delete(C.key===null?y:C.key),v=s(C,v,y),w===null?M=C:w.sibling=C,w=C);return n&&A.forEach(function(N){return e(h,N)}),wt&&Cs(h,y),M}function m(h,v,S,x){if(typeof S=="object"&&S!==null&&S.type===Ca&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case uu:e:{for(var M=S.key,w=v;w!==null;){if(w.key===M){if(M=S.type,M===Ca){if(w.tag===7){t(h,w.sibling),v=r(w,S.props.children),v.return=h,h=v;break e}}else if(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gr&&m_(M)===w.type){t(h,w.sibling),v=r(w,S.props),v.ref=Do(h,w,S),v.return=h,h=v;break e}t(h,w);break}else e(h,w);w=w.sibling}S.type===Ca?(v=Bs(S.props.children,h.mode,x,S.key),v.return=h,h=v):(x=ac(S.type,S.key,S.props,null,h.mode,x),x.ref=Do(h,v,S),x.return=h,h=x)}return a(h);case Aa:e:{for(w=S.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){t(h,v.sibling),v=r(v,S.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=Jf(S,h.mode,x),v.return=h,h=v}return a(h);case Gr:return w=S._init,m(h,v,w(S._payload),x)}if($o(S))return _(h,v,S,x);if(Ao(S))return g(h,v,S,x);yu(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,S),v.return=h,h=v):(t(h,v),v=Qf(S,h.mode,x),v.return=h,h=v),a(h)):t(h,v)}return m}var ro=Px(!0),Lx=Px(!1),Pc=vs(null),Lc=null,Fa=null,gm=null;function _m(){gm=Fa=Lc=null}function vm(n){var e=Pc.current;St(Pc),n._currentValue=e}function Sh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ya(n,e){Lc=n,gm=Fa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Dn=!0),n.firstContext=null)}function _i(n){var e=n._currentValue;if(gm!==n)if(n={context:n,memoizedValue:e,next:null},Fa===null){if(Lc===null)throw Error(ue(308));Fa=n,Lc.dependencies={lanes:0,firstContext:n}}else Fa=Fa.next=n;return e}var Ds=null;function xm(n){Ds===null?Ds=[n]:Ds.push(n)}function Dx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,xm(e)):(t.next=r.next,r.next=t),e.interleaved=t,Er(n,i)}function Er(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Hr=!1;function ym(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _r(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function rs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Er(n,t)}return r=i.interleaved,r===null?(e.next=e,xm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Er(n,t)}function ec(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,sm(n,t)}}function g_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Dc(n,e,t,i){var r=n.updateQueue;Hr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=n.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,c=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=n,g=o;switch(f=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Nt({},d,f);break e;case 2:Hr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qs|=a,n.lanes=a,n.memoizedState=d}}function __(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var jl={},Ki=vs(jl),bl=vs(jl),Al=vs(jl);function Ns(n){if(n===jl)throw Error(ue(174));return n}function Sm(n,e){switch(gt(Al,e),gt(bl,n),gt(Ki,jl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:th(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=th(e,n)}St(Ki),gt(Ki,e)}function so(){St(Ki),St(bl),St(Al)}function Ix(n){Ns(Al.current);var e=Ns(Ki.current),t=th(e,n.type);e!==t&&(gt(bl,n),gt(Ki,t))}function Mm(n){bl.current===n&&(St(Ki),St(bl))}var Ct=vs(0);function Nc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yf=[];function Em(){for(var n=0;n<Yf.length;n++)Yf[n]._workInProgressVersionPrimary=null;Yf.length=0}var tc=Cr.ReactCurrentDispatcher,qf=Cr.ReactCurrentBatchConfig,Ys=0,Dt=null,$t=null,Jt=null,Ic=!1,al=!1,Cl=0,I1=0;function dn(){throw Error(ue(321))}function wm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Fi(n[t],e[t]))return!1;return!0}function Tm(n,e,t,i,r,s){if(Ys=s,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tc.current=n===null||n.memoizedState===null?k1:B1,n=t(i,r),al){s=0;do{if(al=!1,Cl=0,25<=s)throw Error(ue(301));s+=1,Jt=$t=null,e.updateQueue=null,tc.current=z1,n=t(i,r)}while(al)}if(tc.current=Uc,e=$t!==null&&$t.next!==null,Ys=0,Jt=$t=Dt=null,Ic=!1,e)throw Error(ue(300));return n}function bm(){var n=Cl!==0;return Cl=0,n}function Vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Dt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function vi(){if($t===null){var n=Dt.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var e=Jt===null?Dt.memoizedState:Jt.next;if(e!==null)Jt=e,$t=n;else{if(n===null)throw Error(ue(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?Dt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function Rl(n,e){return typeof e=="function"?e(n):e}function $f(n){var e=vi(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=$t,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((Ys&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Dt.lanes|=c,qs|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Fi(i,e.memoizedState)||(Dn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Dt.lanes|=s,qs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Kf(n){var e=vi(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);Fi(s,e.memoizedState)||(Dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ux(){}function Fx(n,e){var t=Dt,i=vi(),r=e(),s=!Fi(i.memoizedState,r);if(s&&(i.memoizedState=r,Dn=!0),i=i.queue,Am(Bx.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Jt!==null&&Jt.memoizedState.tag&1){if(t.flags|=2048,Pl(9,kx.bind(null,t,i,r,e),void 0,null),en===null)throw Error(ue(349));Ys&30||Ox(t,e,r)}return r}function Ox(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function kx(n,e,t,i){e.value=t,e.getSnapshot=i,zx(e)&&Vx(n)}function Bx(n,e,t){return t(function(){zx(e)&&Vx(n)})}function zx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Fi(n,t)}catch{return!0}}function Vx(n){var e=Er(n,1);e!==null&&Ii(e,n,1,-1)}function v_(n){var e=Vi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rl,lastRenderedState:n},e.queue=n,n=n.dispatch=O1.bind(null,Dt,n),[e.memoizedState,n]}function Pl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Gx(){return vi().memoizedState}function nc(n,e,t,i){var r=Vi();Dt.flags|=n,r.memoizedState=Pl(1|e,t,void 0,i===void 0?null:i)}function df(n,e,t,i){var r=vi();i=i===void 0?null:i;var s=void 0;if($t!==null){var a=$t.memoizedState;if(s=a.destroy,i!==null&&wm(i,a.deps)){r.memoizedState=Pl(e,t,s,i);return}}Dt.flags|=n,r.memoizedState=Pl(1|e,t,s,i)}function x_(n,e){return nc(8390656,8,n,e)}function Am(n,e){return df(2048,8,n,e)}function Hx(n,e){return df(4,2,n,e)}function Wx(n,e){return df(4,4,n,e)}function Xx(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Yx(n,e,t){return t=t!=null?t.concat([n]):null,df(4,4,Xx.bind(null,e,n),t)}function Cm(){}function qx(n,e){var t=vi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&wm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function $x(n,e){var t=vi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&wm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Kx(n,e,t){return Ys&21?(Fi(t,e)||(t=ex(),Dt.lanes|=t,qs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=t)}function U1(n,e){var t=lt;lt=t!==0&&4>t?t:4,n(!0);var i=qf.transition;qf.transition={};try{n(!1),e()}finally{lt=t,qf.transition=i}}function Zx(){return vi().memoizedState}function F1(n,e,t){var i=as(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},jx(n))Qx(e,t);else if(t=Dx(n,e,t,i),t!==null){var r=bn();Ii(t,n,i,r),Jx(t,e,i)}}function O1(n,e,t){var i=as(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(jx(n))Qx(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,Fi(o,a)){var l=e.interleaved;l===null?(r.next=r,xm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Dx(n,e,r,i),t!==null&&(r=bn(),Ii(t,n,i,r),Jx(t,e,i))}}function jx(n){var e=n.alternate;return n===Dt||e!==null&&e===Dt}function Qx(n,e){al=Ic=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Jx(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,sm(n,t)}}var Uc={readContext:_i,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},k1={readContext:_i,useCallback:function(n,e){return Vi().memoizedState=[n,e===void 0?null:e],n},useContext:_i,useEffect:x_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,nc(4194308,4,Xx.bind(null,e,n),t)},useLayoutEffect:function(n,e){return nc(4194308,4,n,e)},useInsertionEffect:function(n,e){return nc(4,2,n,e)},useMemo:function(n,e){var t=Vi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Vi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=F1.bind(null,Dt,n),[i.memoizedState,n]},useRef:function(n){var e=Vi();return n={current:n},e.memoizedState=n},useState:v_,useDebugValue:Cm,useDeferredValue:function(n){return Vi().memoizedState=n},useTransition:function(){var n=v_(!1),e=n[0];return n=U1.bind(null,n[1]),Vi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Dt,r=Vi();if(wt){if(t===void 0)throw Error(ue(407));t=t()}else{if(t=e(),en===null)throw Error(ue(349));Ys&30||Ox(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,x_(Bx.bind(null,i,s,n),[n]),i.flags|=2048,Pl(9,kx.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Vi(),e=en.identifierPrefix;if(wt){var t=mr,i=pr;t=(i&~(1<<32-Ni(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Cl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=I1++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},B1={readContext:_i,useCallback:qx,useContext:_i,useEffect:Am,useImperativeHandle:Yx,useInsertionEffect:Hx,useLayoutEffect:Wx,useMemo:$x,useReducer:$f,useRef:Gx,useState:function(){return $f(Rl)},useDebugValue:Cm,useDeferredValue:function(n){var e=vi();return Kx(e,$t.memoizedState,n)},useTransition:function(){var n=$f(Rl)[0],e=vi().memoizedState;return[n,e]},useMutableSource:Ux,useSyncExternalStore:Fx,useId:Zx,unstable_isNewReconciler:!1},z1={readContext:_i,useCallback:qx,useContext:_i,useEffect:Am,useImperativeHandle:Yx,useInsertionEffect:Hx,useLayoutEffect:Wx,useMemo:$x,useReducer:Kf,useRef:Gx,useState:function(){return Kf(Rl)},useDebugValue:Cm,useDeferredValue:function(n){var e=vi();return $t===null?e.memoizedState=n:Kx(e,$t.memoizedState,n)},useTransition:function(){var n=Kf(Rl)[0],e=vi().memoizedState;return[n,e]},useMutableSource:Ux,useSyncExternalStore:Fx,useId:Zx,unstable_isNewReconciler:!1};function Ti(n,e){if(n&&n.defaultProps){e=Nt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Mh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Nt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var hf={isMounted:function(n){return(n=n._reactInternals)?ea(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=bn(),r=as(n),s=_r(i,r);s.payload=e,t!=null&&(s.callback=t),e=rs(n,s,r),e!==null&&(Ii(e,n,r,i),ec(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=bn(),r=as(n),s=_r(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=rs(n,s,r),e!==null&&(Ii(e,n,r,i),ec(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=bn(),i=as(n),r=_r(t,i);r.tag=2,e!=null&&(r.callback=e),e=rs(n,r,i),e!==null&&(Ii(e,n,i,t),ec(e,n,i))}};function y_(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ml(t,i)||!Ml(r,s):!0}function ey(n,e,t){var i=!1,r=ds,s=e.contextType;return typeof s=="object"&&s!==null?s=_i(s):(r=In(e)?Ws:yn.current,i=e.contextTypes,s=(i=i!=null)?no(n,r):ds),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hf,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function S_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&hf.enqueueReplaceState(e,e.state,null)}function Eh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},ym(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=_i(s):(s=In(e)?Ws:yn.current,r.context=no(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hf.enqueueReplaceState(r,r.state,null),Dc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ao(n,e){try{var t="",i=e;do t+=pE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Zf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function wh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var V1=typeof WeakMap=="function"?WeakMap:Map;function ty(n,e,t){t=_r(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Oc||(Oc=!0,Ih=i),wh(n,e)},t}function ny(n,e,t){t=_r(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){wh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){wh(n,e),typeof i!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function M_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new V1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=tw.bind(null,n,e,t),e.then(n,n))}function E_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function w_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=_r(-1,1),e.tag=2,rs(t,e,1))),t.lanes|=1),n)}var G1=Cr.ReactCurrentOwner,Dn=!1;function Tn(n,e,t,i){e.child=n===null?Lx(e,null,t,i):ro(e,n.child,t,i)}function T_(n,e,t,i,r){t=t.render;var s=e.ref;return Ya(e,r),i=Tm(n,e,t,i,s,r),t=bm(),n!==null&&!Dn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,wr(n,e,r)):(wt&&t&&hm(e),e.flags|=1,Tn(n,e,i,r),e.child)}function b_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Fm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,iy(n,e,s,i,r)):(n=ac(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ml,t(a,i)&&n.ref===e.ref)return wr(n,e,r)}return e.flags|=1,n=os(s,i),n.ref=e.ref,n.return=e,e.child=n}function iy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ml(s,i)&&n.ref===e.ref)if(Dn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Dn=!0);else return e.lanes=n.lanes,wr(n,e,r)}return Th(n,e,t,i,r)}function ry(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(ka,Xn),Xn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,gt(ka,Xn),Xn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,gt(ka,Xn),Xn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,gt(ka,Xn),Xn|=i;return Tn(n,e,r,t),e.child}function sy(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Th(n,e,t,i,r){var s=In(t)?Ws:yn.current;return s=no(e,s),Ya(e,r),t=Tm(n,e,t,i,s,r),i=bm(),n!==null&&!Dn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,wr(n,e,r)):(wt&&i&&hm(e),e.flags|=1,Tn(n,e,t,r),e.child)}function A_(n,e,t,i,r){if(In(t)){var s=!0;Ac(e)}else s=!1;if(Ya(e,r),e.stateNode===null)ic(n,e),ey(e,t,i),Eh(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=_i(u):(u=In(t)?Ws:yn.current,u=no(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&S_(e,a,i,u),Hr=!1;var f=e.memoizedState;a.state=f,Dc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Nn.current||Hr?(typeof c=="function"&&(Mh(e,t,c,i),l=e.memoizedState),(o=Hr||y_(e,t,o,i,f,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Nx(n,e),o=e.memoizedProps,u=e.type===e.elementType?o:Ti(e.type,o),a.props=u,d=e.pendingProps,f=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=_i(l):(l=In(t)?Ws:yn.current,l=no(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&S_(e,a,i,l),Hr=!1,f=e.memoizedState,a.state=f,Dc(e,i,a,r);var _=e.memoizedState;o!==d||f!==_||Nn.current||Hr?(typeof p=="function"&&(Mh(e,t,p,i),_=e.memoizedState),(u=Hr||y_(e,t,u,i,f,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return bh(n,e,t,i,s,r)}function bh(n,e,t,i,r,s){sy(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&d_(e,t,!1),wr(n,e,s);i=e.stateNode,G1.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=ro(e,n.child,null,s),e.child=ro(e,null,o,s)):Tn(n,e,o,s),e.memoizedState=i.state,r&&d_(e,t,!0),e.child}function ay(n){var e=n.stateNode;e.pendingContext?f_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&f_(n,e.context,!1),Sm(n,e.containerInfo)}function C_(n,e,t,i,r){return io(),mm(r),e.flags|=256,Tn(n,e,t,i),e.child}var Ah={dehydrated:null,treeContext:null,retryLane:0};function Ch(n){return{baseLanes:n,cachePool:null,transitions:null}}function oy(n,e,t){var i=e.pendingProps,r=Ct.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),gt(Ct,r&1),n===null)return yh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=gf(a,i,0,null),n=Bs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ch(t),e.memoizedState=Ah,n):Rm(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return H1(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=os(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=os(o,s):(s=Bs(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Ch(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Ah,i}return s=n.child,n=s.sibling,i=os(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Rm(n,e){return e=gf({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Su(n,e,t,i){return i!==null&&mm(i),ro(e,n.child,null,t),n=Rm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function H1(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=Zf(Error(ue(422))),Su(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gf({mode:"visible",children:i.children},r,0,null),s=Bs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ro(e,n.child,null,a),e.child.memoizedState=Ch(a),e.memoizedState=Ah,s);if(!(e.mode&1))return Su(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ue(419)),i=Zf(s,i,void 0),Su(n,e,a,i)}if(o=(a&n.childLanes)!==0,Dn||o){if(i=en,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Er(n,r),Ii(i,n,r,-1))}return Um(),i=Zf(Error(ue(421))),Su(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=nw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Zn=is(r.nextSibling),Jn=e,wt=!0,Ci=null,n!==null&&(fi[di++]=pr,fi[di++]=mr,fi[di++]=Xs,pr=n.id,mr=n.overflow,Xs=e),e=Rm(e,i.children),e.flags|=4096,e)}function R_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Sh(n.return,e,t)}function jf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function ly(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Tn(n,e,i.children,t),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&R_(n,t,e);else if(n.tag===19)R_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(gt(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Nc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),jf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Nc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}jf(e,!0,t,null,s);break;case"together":jf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ic(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function wr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),qs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ue(153));if(e.child!==null){for(n=e.child,t=os(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=os(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function W1(n,e,t){switch(e.tag){case 3:ay(e),io();break;case 5:Ix(e);break;case 1:In(e.type)&&Ac(e);break;case 4:Sm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(Pc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(Ct,Ct.current&1),e.flags|=128,null):t&e.child.childLanes?oy(n,e,t):(gt(Ct,Ct.current&1),n=wr(n,e,t),n!==null?n.sibling:null);gt(Ct,Ct.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return ly(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,ry(n,e,t)}return wr(n,e,t)}var uy,Rh,cy,fy;uy=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Rh=function(){};cy=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ns(Ki.current);var s=null;switch(t){case"input":r=jd(n,r),i=jd(n,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=eh(n,r),i=eh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Tc)}nh(t,i);var a;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ml.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ml.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&yt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fy=function(n,e,t,i){t!==i&&(e.flags|=4)};function No(n,e){if(!wt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function hn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function X1(n,e,t){var i=e.pendingProps;switch(pm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(e),null;case 1:return In(e.type)&&bc(),hn(e),null;case 3:return i=e.stateNode,so(),St(Nn),St(yn),Em(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(xu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ci!==null&&(Oh(Ci),Ci=null))),Rh(n,e),hn(e),null;case 5:Mm(e);var r=Ns(Al.current);if(t=e.type,n!==null&&e.stateNode!=null)cy(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return hn(e),null}if(n=Ns(Ki.current),xu(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Wi]=e,i[Tl]=s,n=(e.mode&1)!==0,t){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Zo.length;r++)yt(Zo[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":kg(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":zg(i,s),yt("invalid",i)}nh(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&vu(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&vu(i.textContent,o,n),r=["children",""+o]):ml.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&yt("scroll",i)}switch(t){case"input":cu(i),Bg(i,s,!0);break;case"textarea":cu(i),Vg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Bv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Wi]=e,n[Tl]=i,uy(n,e,!1,!1),e.stateNode=n;e:{switch(a=ih(t,i),t){case"dialog":yt("cancel",n),yt("close",n),r=i;break;case"iframe":case"object":case"embed":yt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Zo.length;r++)yt(Zo[r],n);r=i;break;case"source":yt("error",n),r=i;break;case"img":case"image":case"link":yt("error",n),yt("load",n),r=i;break;case"details":yt("toggle",n),r=i;break;case"input":kg(n,i),r=jd(n,i),yt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),yt("invalid",n);break;case"textarea":zg(n,i),r=eh(n,i),yt("invalid",n);break;default:r=i}nh(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Gv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&gl(n,l):typeof l=="number"&&gl(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ml.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",n):l!=null&&Jp(n,s,l,a))}switch(t){case"input":cu(n),Bg(n,i,!1);break;case"textarea":cu(n),Vg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+fs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ga(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ga(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Tc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return hn(e),null;case 6:if(n&&e.stateNode!=null)fy(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(t=Ns(Al.current),Ns(Ki.current),xu(e)){if(i=e.stateNode,t=e.memoizedProps,i[Wi]=e,(s=i.nodeValue!==t)&&(n=Jn,n!==null))switch(n.tag){case 3:vu(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&vu(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Wi]=e,e.stateNode=i}return hn(e),null;case 13:if(St(Ct),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(wt&&Zn!==null&&e.mode&1&&!(e.flags&128))Rx(),io(),e.flags|=98560,s=!1;else if(s=xu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[Wi]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;hn(e),s=!1}else Ci!==null&&(Oh(Ci),Ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ct.current&1?Kt===0&&(Kt=3):Um())),e.updateQueue!==null&&(e.flags|=4),hn(e),null);case 4:return so(),Rh(n,e),n===null&&El(e.stateNode.containerInfo),hn(e),null;case 10:return vm(e.type._context),hn(e),null;case 17:return In(e.type)&&bc(),hn(e),null;case 19:if(St(Ct),s=e.memoizedState,s===null)return hn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)No(s,!1);else{if(Kt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Nc(n),a!==null){for(e.flags|=128,No(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return gt(Ct,Ct.current&1|2),e.child}n=n.sibling}s.tail!==null&&zt()>oo&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304)}else{if(!i)if(n=Nc(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!wt)return hn(e),null}else 2*zt()-s.renderingStartTime>oo&&t!==1073741824&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=zt(),e.sibling=null,t=Ct.current,gt(Ct,i?t&1|2:t&1),e):(hn(e),null);case 22:case 23:return Im(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Xn&1073741824&&(hn(e),e.subtreeFlags&6&&(e.flags|=8192)):hn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Y1(n,e){switch(pm(e),e.tag){case 1:return In(e.type)&&bc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return so(),St(Nn),St(yn),Em(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Mm(e),null;case 13:if(St(Ct),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));io()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return St(Ct),null;case 4:return so(),null;case 10:return vm(e.type._context),null;case 22:case 23:return Im(),null;case 24:return null;default:return null}}var Mu=!1,gn=!1,q1=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Oa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ut(n,e,i)}else t.current=null}function Ph(n,e,t){try{t()}catch(i){Ut(n,e,i)}}var P_=!1;function $1(n,e){if(hh=Mc,n=gx(),dm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(o=a),f===s&&++c===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(ph={focusedElem:n,selectionRange:t},Mc=!1,Ae=e;Ae!==null;)if(e=Ae,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ae=n;else for(;Ae!==null;){e=Ae;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Ti(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(x){Ut(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}return _=P_,P_=!1,_}function ol(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ph(e,t,s)}r=r.next}while(r!==i)}}function pf(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Lh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function dy(n){var e=n.alternate;e!==null&&(n.alternate=null,dy(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Wi],delete e[Tl],delete e[_h],delete e[P1],delete e[L1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function hy(n){return n.tag===5||n.tag===3||n.tag===4}function L_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||hy(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Dh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Tc));else if(i!==4&&(n=n.child,n!==null))for(Dh(n,e,t),n=n.sibling;n!==null;)Dh(n,e,t),n=n.sibling}function Nh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Nh(n,e,t),n=n.sibling;n!==null;)Nh(n,e,t),n=n.sibling}var rn=null,bi=!1;function Nr(n,e,t){for(t=t.child;t!==null;)py(n,e,t),t=t.sibling}function py(n,e,t){if($i&&typeof $i.onCommitFiberUnmount=="function")try{$i.onCommitFiberUnmount(af,t)}catch{}switch(t.tag){case 5:gn||Oa(t,e);case 6:var i=rn,r=bi;rn=null,Nr(n,e,t),rn=i,bi=r,rn!==null&&(bi?(n=rn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):rn.removeChild(t.stateNode));break;case 18:rn!==null&&(bi?(n=rn,t=t.stateNode,n.nodeType===8?Wf(n.parentNode,t):n.nodeType===1&&Wf(n,t),yl(n)):Wf(rn,t.stateNode));break;case 4:i=rn,r=bi,rn=t.stateNode.containerInfo,bi=!0,Nr(n,e,t),rn=i,bi=r;break;case 0:case 11:case 14:case 15:if(!gn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ph(t,e,a),r=r.next}while(r!==i)}Nr(n,e,t);break;case 1:if(!gn&&(Oa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Ut(t,e,o)}Nr(n,e,t);break;case 21:Nr(n,e,t);break;case 22:t.mode&1?(gn=(i=gn)||t.memoizedState!==null,Nr(n,e,t),gn=i):Nr(n,e,t);break;default:Nr(n,e,t)}}function D_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new q1),e.forEach(function(i){var r=iw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Si(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:rn=o.stateNode,bi=!1;break e;case 3:rn=o.stateNode.containerInfo,bi=!0;break e;case 4:rn=o.stateNode.containerInfo,bi=!0;break e}o=o.return}if(rn===null)throw Error(ue(160));py(s,a,r),rn=null,bi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ut(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)my(e,n),e=e.sibling}function my(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(e,n),ki(n),i&4){try{ol(3,n,n.return),pf(3,n)}catch(g){Ut(n,n.return,g)}try{ol(5,n,n.return)}catch(g){Ut(n,n.return,g)}}break;case 1:Si(e,n),ki(n),i&512&&t!==null&&Oa(t,t.return);break;case 5:if(Si(e,n),ki(n),i&512&&t!==null&&Oa(t,t.return),n.flags&32){var r=n.stateNode;try{gl(r,"")}catch(g){Ut(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Ov(r,s),ih(o,a);var u=ih(o,s);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?Gv(r,d):c==="dangerouslySetInnerHTML"?zv(r,d):c==="children"?gl(r,d):Jp(r,c,d,u)}switch(o){case"input":Qd(r,s);break;case"textarea":kv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ga(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ga(r,!!s.multiple,s.defaultValue,!0):Ga(r,!!s.multiple,s.multiple?[]:"",!1))}r[Tl]=s}catch(g){Ut(n,n.return,g)}}break;case 6:if(Si(e,n),ki(n),i&4){if(n.stateNode===null)throw Error(ue(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Ut(n,n.return,g)}}break;case 3:if(Si(e,n),ki(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{yl(e.containerInfo)}catch(g){Ut(n,n.return,g)}break;case 4:Si(e,n),ki(n);break;case 13:Si(e,n),ki(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Dm=zt())),i&4&&D_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(gn=(u=gn)||c,Si(e,n),gn=u):Si(e,n),ki(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ae=n,c=n.child;c!==null;){for(d=Ae=c;Ae!==null;){switch(f=Ae,p=f.child,f.tag){case 0:case 11:case 14:case 15:ol(4,f,f.return);break;case 1:Oa(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Ut(i,t,g)}}break;case 5:Oa(f,f.return);break;case 22:if(f.memoizedState!==null){I_(d);continue}}p!==null?(p.return=f,Ae=p):I_(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Vv("display",a))}catch(g){Ut(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Ut(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Si(e,n),ki(n),i&4&&D_(n);break;case 21:break;default:Si(e,n),ki(n)}}function ki(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(hy(t)){var i=t;break e}t=t.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(gl(r,""),i.flags&=-33);var s=L_(n);Nh(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=L_(n);Dh(n,o,a);break;default:throw Error(ue(161))}}catch(l){Ut(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function K1(n,e,t){Ae=n,gy(n)}function gy(n,e,t){for(var i=(n.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Mu;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||gn;o=Mu;var u=gn;if(Mu=a,(gn=l)&&!u)for(Ae=r;Ae!==null;)a=Ae,l=a.child,a.tag===22&&a.memoizedState!==null?U_(r):l!==null?(l.return=a,Ae=l):U_(r);for(;s!==null;)Ae=s,gy(s),s=s.sibling;Ae=r,Mu=o,gn=u}N_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):N_(n)}}function N_(n){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gn||pf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!gn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ti(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&__(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}__(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&yl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}gn||e.flags&512&&Lh(e)}catch(f){Ut(e,e.return,f)}}if(e===n){Ae=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function I_(n){for(;Ae!==null;){var e=Ae;if(e===n){Ae=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function U_(n){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{pf(4,e)}catch(l){Ut(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ut(e,r,l)}}var s=e.return;try{Lh(e)}catch(l){Ut(e,s,l)}break;case 5:var a=e.return;try{Lh(e)}catch(l){Ut(e,a,l)}}}catch(l){Ut(e,e.return,l)}if(e===n){Ae=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ae=o;break}Ae=e.return}}var Z1=Math.ceil,Fc=Cr.ReactCurrentDispatcher,Pm=Cr.ReactCurrentOwner,gi=Cr.ReactCurrentBatchConfig,nt=0,en=null,Xt=null,an=0,Xn=0,ka=vs(0),Kt=0,Ll=null,qs=0,mf=0,Lm=0,ll=null,Pn=null,Dm=0,oo=1/0,ur=null,Oc=!1,Ih=null,ss=null,Eu=!1,Kr=null,kc=0,ul=0,Uh=null,rc=-1,sc=0;function bn(){return nt&6?zt():rc!==-1?rc:rc=zt()}function as(n){return n.mode&1?nt&2&&an!==0?an&-an:N1.transition!==null?(sc===0&&(sc=ex()),sc):(n=lt,n!==0||(n=window.event,n=n===void 0?16:ox(n.type)),n):1}function Ii(n,e,t,i){if(50<ul)throw ul=0,Uh=null,Error(ue(185));$l(n,t,i),(!(nt&2)||n!==en)&&(n===en&&(!(nt&2)&&(mf|=t),Kt===4&&Yr(n,an)),Un(n,i),t===1&&nt===0&&!(e.mode&1)&&(oo=zt()+500,ff&&xs()))}function Un(n,e){var t=n.callbackNode;NE(n,e);var i=Sc(n,n===en?an:0);if(i===0)t!==null&&Wg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Wg(t),e===1)n.tag===0?D1(F_.bind(null,n)):bx(F_.bind(null,n)),C1(function(){!(nt&6)&&xs()}),t=null;else{switch(tx(i)){case 1:t=rm;break;case 4:t=Qv;break;case 16:t=yc;break;case 536870912:t=Jv;break;default:t=yc}t=wy(t,_y.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function _y(n,e){if(rc=-1,sc=0,nt&6)throw Error(ue(327));var t=n.callbackNode;if(qa()&&n.callbackNode!==t)return null;var i=Sc(n,n===en?an:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Bc(n,i);else{e=i;var r=nt;nt|=2;var s=xy();(en!==n||an!==e)&&(ur=null,oo=zt()+500,ks(n,e));do try{J1();break}catch(o){vy(n,o)}while(!0);_m(),Fc.current=s,nt=r,Xt!==null?e=0:(en=null,an=0,e=Kt)}if(e!==0){if(e===2&&(r=lh(n),r!==0&&(i=r,e=Fh(n,r))),e===1)throw t=Ll,ks(n,0),Yr(n,i),Un(n,zt()),t;if(e===6)Yr(n,i);else{if(r=n.current.alternate,!(i&30)&&!j1(r)&&(e=Bc(n,i),e===2&&(s=lh(n),s!==0&&(i=s,e=Fh(n,s))),e===1))throw t=Ll,ks(n,0),Yr(n,i),Un(n,zt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Rs(n,Pn,ur);break;case 3:if(Yr(n,i),(i&130023424)===i&&(e=Dm+500-zt(),10<e)){if(Sc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){bn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=gh(Rs.bind(null,n,Pn,ur),e);break}Rs(n,Pn,ur);break;case 4:if(Yr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-Ni(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Z1(i/1960))-i,10<i){n.timeoutHandle=gh(Rs.bind(null,n,Pn,ur),i);break}Rs(n,Pn,ur);break;case 5:Rs(n,Pn,ur);break;default:throw Error(ue(329))}}}return Un(n,zt()),n.callbackNode===t?_y.bind(null,n):null}function Fh(n,e){var t=ll;return n.current.memoizedState.isDehydrated&&(ks(n,e).flags|=256),n=Bc(n,e),n!==2&&(e=Pn,Pn=t,e!==null&&Oh(e)),n}function Oh(n){Pn===null?Pn=n:Pn.push.apply(Pn,n)}function j1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Fi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yr(n,e){for(e&=~Lm,e&=~mf,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ni(e),i=1<<t;n[t]=-1,e&=~i}}function F_(n){if(nt&6)throw Error(ue(327));qa();var e=Sc(n,0);if(!(e&1))return Un(n,zt()),null;var t=Bc(n,e);if(n.tag!==0&&t===2){var i=lh(n);i!==0&&(e=i,t=Fh(n,i))}if(t===1)throw t=Ll,ks(n,0),Yr(n,e),Un(n,zt()),t;if(t===6)throw Error(ue(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Rs(n,Pn,ur),Un(n,zt()),null}function Nm(n,e){var t=nt;nt|=1;try{return n(e)}finally{nt=t,nt===0&&(oo=zt()+500,ff&&xs())}}function $s(n){Kr!==null&&Kr.tag===0&&!(nt&6)&&qa();var e=nt;nt|=1;var t=gi.transition,i=lt;try{if(gi.transition=null,lt=1,n)return n()}finally{lt=i,gi.transition=t,nt=e,!(nt&6)&&xs()}}function Im(){Xn=ka.current,St(ka)}function ks(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,A1(t)),Xt!==null)for(t=Xt.return;t!==null;){var i=t;switch(pm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bc();break;case 3:so(),St(Nn),St(yn),Em();break;case 5:Mm(i);break;case 4:so();break;case 13:St(Ct);break;case 19:St(Ct);break;case 10:vm(i.type._context);break;case 22:case 23:Im()}t=t.return}if(en=n,Xt=n=os(n.current,null),an=Xn=e,Kt=0,Ll=null,Lm=mf=qs=0,Pn=ll=null,Ds!==null){for(e=0;e<Ds.length;e++)if(t=Ds[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Ds=null}return n}function vy(n,e){do{var t=Xt;try{if(_m(),tc.current=Uc,Ic){for(var i=Dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ic=!1}if(Ys=0,Jt=$t=Dt=null,al=!1,Cl=0,Pm.current=null,t===null||t.return===null){Kt=1,Ll=e,Xt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=an,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=E_(a);if(p!==null){p.flags&=-257,w_(p,a,o,s,e),p.mode&1&&M_(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){M_(s,u,e),Um();break e}l=Error(ue(426))}}else if(wt&&o.mode&1){var m=E_(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),w_(m,a,o,s,e),mm(ao(l,o));break e}}s=l=ao(l,o),Kt!==4&&(Kt=2),ll===null?ll=[s]:ll.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=ty(s,l,e);g_(s,h);break e;case 1:o=l;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ss===null||!ss.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=ny(s,o,e);g_(s,x);break e}}s=s.return}while(s!==null)}Sy(t)}catch(M){e=M,Xt===t&&t!==null&&(Xt=t=t.return);continue}break}while(!0)}function xy(){var n=Fc.current;return Fc.current=Uc,n===null?Uc:n}function Um(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),en===null||!(qs&268435455)&&!(mf&268435455)||Yr(en,an)}function Bc(n,e){var t=nt;nt|=2;var i=xy();(en!==n||an!==e)&&(ur=null,ks(n,e));do try{Q1();break}catch(r){vy(n,r)}while(!0);if(_m(),nt=t,Fc.current=i,Xt!==null)throw Error(ue(261));return en=null,an=0,Kt}function Q1(){for(;Xt!==null;)yy(Xt)}function J1(){for(;Xt!==null&&!wE();)yy(Xt)}function yy(n){var e=Ey(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,e===null?Sy(n):Xt=e,Pm.current=null}function Sy(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Y1(t,e),t!==null){t.flags&=32767,Xt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kt=6,Xt=null;return}}else if(t=X1(t,e,Xn),t!==null){Xt=t;return}if(e=e.sibling,e!==null){Xt=e;return}Xt=e=n}while(e!==null);Kt===0&&(Kt=5)}function Rs(n,e,t){var i=lt,r=gi.transition;try{gi.transition=null,lt=1,ew(n,e,t,i)}finally{gi.transition=r,lt=i}return null}function ew(n,e,t,i){do qa();while(Kr!==null);if(nt&6)throw Error(ue(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ue(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(IE(n,s),n===en&&(Xt=en=null,an=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Eu||(Eu=!0,wy(yc,function(){return qa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=gi.transition,gi.transition=null;var a=lt;lt=1;var o=nt;nt|=4,Pm.current=null,$1(n,t),my(t,n),y1(ph),Mc=!!hh,ph=hh=null,n.current=t,K1(t),TE(),nt=o,lt=a,gi.transition=s}else n.current=t;if(Eu&&(Eu=!1,Kr=n,kc=r),s=n.pendingLanes,s===0&&(ss=null),CE(t.stateNode),Un(n,zt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Oc)throw Oc=!1,n=Ih,Ih=null,n;return kc&1&&n.tag!==0&&qa(),s=n.pendingLanes,s&1?n===Uh?ul++:(ul=0,Uh=n):ul=0,xs(),null}function qa(){if(Kr!==null){var n=tx(kc),e=gi.transition,t=lt;try{if(gi.transition=null,lt=16>n?16:n,Kr===null)var i=!1;else{if(n=Kr,Kr=null,kc=0,nt&6)throw Error(ue(331));var r=nt;for(nt|=4,Ae=n.current;Ae!==null;){var s=Ae,a=s.child;if(Ae.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ae=u;Ae!==null;){var c=Ae;switch(c.tag){case 0:case 11:case 15:ol(8,c,s)}var d=c.child;if(d!==null)d.return=c,Ae=d;else for(;Ae!==null;){c=Ae;var f=c.sibling,p=c.return;if(dy(c),c===u){Ae=null;break}if(f!==null){f.return=p,Ae=f;break}Ae=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Ae=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ae=a;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ol(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ae=h;break e}Ae=s.return}}var v=n.current;for(Ae=v;Ae!==null;){a=Ae;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Ae=S;else e:for(a=v;Ae!==null;){if(o=Ae,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:pf(9,o)}}catch(M){Ut(o,o.return,M)}if(o===a){Ae=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,Ae=x;break e}Ae=o.return}}if(nt=r,xs(),$i&&typeof $i.onPostCommitFiberRoot=="function")try{$i.onPostCommitFiberRoot(af,n)}catch{}i=!0}return i}finally{lt=t,gi.transition=e}}return!1}function O_(n,e,t){e=ao(t,e),e=ty(n,e,1),n=rs(n,e,1),e=bn(),n!==null&&($l(n,1,e),Un(n,e))}function Ut(n,e,t){if(n.tag===3)O_(n,n,t);else for(;e!==null;){if(e.tag===3){O_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ss===null||!ss.has(i))){n=ao(t,n),n=ny(e,n,1),e=rs(e,n,1),n=bn(),e!==null&&($l(e,1,n),Un(e,n));break}}e=e.return}}function tw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=bn(),n.pingedLanes|=n.suspendedLanes&t,en===n&&(an&t)===t&&(Kt===4||Kt===3&&(an&130023424)===an&&500>zt()-Dm?ks(n,0):Lm|=t),Un(n,e)}function My(n,e){e===0&&(n.mode&1?(e=hu,hu<<=1,!(hu&130023424)&&(hu=4194304)):e=1);var t=bn();n=Er(n,e),n!==null&&($l(n,e,t),Un(n,t))}function nw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),My(n,t)}function iw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),My(n,t)}var Ey;Ey=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Nn.current)Dn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Dn=!1,W1(n,e,t);Dn=!!(n.flags&131072)}else Dn=!1,wt&&e.flags&1048576&&Ax(e,Rc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ic(n,e),n=e.pendingProps;var r=no(e,yn.current);Ya(e,t),r=Tm(null,e,i,n,r,t);var s=bm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,In(i)?(s=!0,Ac(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ym(e),r.updater=hf,e.stateNode=r,r._reactInternals=e,Eh(e,i,n,t),e=bh(null,e,i,!0,s,t)):(e.tag=0,wt&&s&&hm(e),Tn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ic(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sw(i),n=Ti(i,n),r){case 0:e=Th(null,e,i,n,t);break e;case 1:e=A_(null,e,i,n,t);break e;case 11:e=T_(null,e,i,n,t);break e;case 14:e=b_(null,e,i,Ti(i.type,n),t);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),Th(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),A_(n,e,i,r,t);case 3:e:{if(ay(e),n===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Nx(n,e),Dc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ao(Error(ue(423)),e),e=C_(n,e,i,t,r);break e}else if(i!==r){r=ao(Error(ue(424)),e),e=C_(n,e,i,t,r);break e}else for(Zn=is(e.stateNode.containerInfo.firstChild),Jn=e,wt=!0,Ci=null,t=Lx(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(io(),i===r){e=wr(n,e,t);break e}Tn(n,e,i,t)}e=e.child}return e;case 5:return Ix(e),n===null&&yh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,mh(i,r)?a=null:s!==null&&mh(i,s)&&(e.flags|=32),sy(n,e),Tn(n,e,a,t),e.child;case 6:return n===null&&yh(e),null;case 13:return oy(n,e,t);case 4:return Sm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ro(e,null,i,t):Tn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),T_(n,e,i,r,t);case 7:return Tn(n,e,e.pendingProps,t),e.child;case 8:return Tn(n,e,e.pendingProps.children,t),e.child;case 12:return Tn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(Pc,i._currentValue),i._currentValue=a,s!==null)if(Fi(s.value,a)){if(s.children===r.children&&!Nn.current){e=wr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_r(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Sh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ue(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Sh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Tn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ya(e,t),r=_i(r),i=i(r),e.flags|=1,Tn(n,e,i,t),e.child;case 14:return i=e.type,r=Ti(i,e.pendingProps),r=Ti(i.type,r),b_(n,e,i,r,t);case 15:return iy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),ic(n,e),e.tag=1,In(i)?(n=!0,Ac(e)):n=!1,Ya(e,t),ey(e,i,r),Eh(e,i,r,t),bh(null,e,i,!0,n,t);case 19:return ly(n,e,t);case 22:return ry(n,e,t)}throw Error(ue(156,e.tag))};function wy(n,e){return jv(n,e)}function rw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,e,t,i){return new rw(n,e,t,i)}function Fm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sw(n){if(typeof n=="function")return Fm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===tm)return 11;if(n===nm)return 14}return 2}function os(n,e){var t=n.alternate;return t===null?(t=hi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ac(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Fm(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Ca:return Bs(t.children,r,s,e);case em:a=8,r|=8;break;case qd:return n=hi(12,t,e,r|2),n.elementType=qd,n.lanes=s,n;case $d:return n=hi(13,t,e,r),n.elementType=$d,n.lanes=s,n;case Kd:return n=hi(19,t,e,r),n.elementType=Kd,n.lanes=s,n;case Iv:return gf(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Dv:a=10;break e;case Nv:a=9;break e;case tm:a=11;break e;case nm:a=14;break e;case Gr:a=16,i=null;break e}throw Error(ue(130,n==null?n:typeof n,""))}return e=hi(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Bs(n,e,t,i){return n=hi(7,n,i,e),n.lanes=t,n}function gf(n,e,t,i){return n=hi(22,n,i,e),n.elementType=Iv,n.lanes=t,n.stateNode={isHidden:!1},n}function Qf(n,e,t){return n=hi(6,n,null,e),n.lanes=t,n}function Jf(n,e,t){return e=hi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function aw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nf(0),this.expirationTimes=Nf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Om(n,e,t,i,r,s,a,o,l){return n=new aw(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=hi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ym(s),n}function ow(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Aa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ty(n){if(!n)return ds;n=n._reactInternals;e:{if(ea(n)!==n||n.tag!==1)throw Error(ue(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(In(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(n.tag===1){var t=n.type;if(In(t))return Tx(n,t,e)}return e}function by(n,e,t,i,r,s,a,o,l){return n=Om(t,i,!0,n,r,s,a,o,l),n.context=Ty(null),t=n.current,i=bn(),r=as(t),s=_r(i,r),s.callback=e??null,rs(t,s,r),n.current.lanes=r,$l(n,r,i),Un(n,i),n}function _f(n,e,t,i){var r=e.current,s=bn(),a=as(r);return t=Ty(t),e.context===null?e.context=t:e.pendingContext=t,e=_r(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=rs(r,e,a),n!==null&&(Ii(n,r,a,s),ec(n,r,a)),a}function zc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function k_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function km(n,e){k_(n,e),(n=n.alternate)&&k_(n,e)}function lw(){return null}var Ay=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bm(n){this._internalRoot=n}vf.prototype.render=Bm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ue(409));_f(n,e,null,null)};vf.prototype.unmount=Bm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;$s(function(){_f(null,n,null,null)}),e[Mr]=null}};function vf(n){this._internalRoot=n}vf.prototype.unstable_scheduleHydration=function(n){if(n){var e=rx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Xr.length&&e!==0&&e<Xr[t].priority;t++);Xr.splice(t,0,n),t===0&&ax(n)}};function zm(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function B_(){}function uw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=zc(a);s.call(u)}}var a=by(e,i,n,0,null,!1,!1,"",B_);return n._reactRootContainer=a,n[Mr]=a.current,El(n.nodeType===8?n.parentNode:n),$s(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=zc(l);o.call(u)}}var l=Om(n,0,!1,null,null,!1,!1,"",B_);return n._reactRootContainer=l,n[Mr]=l.current,El(n.nodeType===8?n.parentNode:n),$s(function(){_f(e,l,t,i)}),l}function yf(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=zc(a);o.call(l)}}_f(e,a,n,r)}else a=uw(t,e,n,r,i);return zc(a)}nx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ko(e.pendingLanes);t!==0&&(sm(e,t|1),Un(e,zt()),!(nt&6)&&(oo=zt()+500,xs()))}break;case 13:$s(function(){var i=Er(n,1);if(i!==null){var r=bn();Ii(i,n,1,r)}}),km(n,1)}};am=function(n){if(n.tag===13){var e=Er(n,134217728);if(e!==null){var t=bn();Ii(e,n,134217728,t)}km(n,134217728)}};ix=function(n){if(n.tag===13){var e=as(n),t=Er(n,e);if(t!==null){var i=bn();Ii(t,n,e,i)}km(n,e)}};rx=function(){return lt};sx=function(n,e){var t=lt;try{return lt=n,e()}finally{lt=t}};sh=function(n,e,t){switch(e){case"input":if(Qd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=cf(i);if(!r)throw Error(ue(90));Fv(i),Qd(i,r)}}}break;case"textarea":kv(n,t);break;case"select":e=t.value,e!=null&&Ga(n,!!t.multiple,e,!1)}};Xv=Nm;Yv=$s;var cw={usingClientEntryPoint:!1,Events:[Zl,Da,cf,Hv,Wv,Nm]},Io={findFiberByHostInstance:Ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fw={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Kv(n),n===null?null:n.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{af=wu.inject(fw),$i=wu}catch{}}ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw;ri.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zm(e))throw Error(ue(200));return ow(n,e,null,t)};ri.createRoot=function(n,e){if(!zm(n))throw Error(ue(299));var t=!1,i="",r=Ay;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Om(n,1,!1,null,null,t,!1,i,r),n[Mr]=e.current,El(n.nodeType===8?n.parentNode:n),new Bm(e)};ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ue(188)):(n=Object.keys(n).join(","),Error(ue(268,n)));return n=Kv(e),n=n===null?null:n.stateNode,n};ri.flushSync=function(n){return $s(n)};ri.hydrate=function(n,e,t){if(!xf(e))throw Error(ue(200));return yf(null,n,e,!0,t)};ri.hydrateRoot=function(n,e,t){if(!zm(n))throw Error(ue(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=Ay;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=by(e,null,n,1,t??null,r,!1,s,a),n[Mr]=e.current,El(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new vf(e)};ri.render=function(n,e,t){if(!xf(e))throw Error(ue(200));return yf(null,n,e,!1,t)};ri.unmountComponentAtNode=function(n){if(!xf(n))throw Error(ue(40));return n._reactRootContainer?($s(function(){yf(null,null,n,!1,function(){n._reactRootContainer=null,n[Mr]=null})}),!0):!1};ri.unstable_batchedUpdates=Nm;ri.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!xf(t))throw Error(ue(200));if(n==null||n._reactInternals===void 0)throw Error(ue(38));return yf(n,e,t,!1,i)};ri.version="18.3.1-next-f1338f8080-20240426";function Cy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cy)}catch(n){console.error(n)}}Cy(),Cv.exports=ri;var Ry=Cv.exports,z_=Ry;Xd.createRoot=z_.createRoot,Xd.hydrateRoot=z_.hydrateRoot;const dw="modulepreload",hw=function(n){return"/"+n},V_={},ta=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=hw(l),l in V_)return;V_[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":dw,u||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),u)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dl(){return Dl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Dl.apply(null,arguments)}var Zr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Zr||(Zr={}));const G_="popstate";function pw(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return kh("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:Vc(r)}return gw(e,t,null,n)}function qt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Py(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mw(){return Math.random().toString(36).substr(2,8)}function H_(n,e){return{usr:n.state,key:n.key,idx:e}}function kh(n,e,t,i){return t===void 0&&(t=null),Dl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?xo(e):e,{state:t,key:e&&e.key||i||mw()})}function Vc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function xo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function gw(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Zr.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Dl({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){o=Zr.Pop;let m=c(),h=m==null?null:m-u;u=m,l&&l({action:o,location:g.location,delta:h})}function f(m,h){o=Zr.Push;let v=kh(g.location,m,h);u=c()+1;let S=H_(v,u),x=g.createHref(v);try{a.pushState(S,"",x)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;r.location.assign(x)}s&&l&&l({action:o,location:g.location,delta:1})}function p(m,h){o=Zr.Replace;let v=kh(g.location,m,h);u=c();let S=H_(v,u),x=g.createHref(v);a.replaceState(S,"",x),s&&l&&l({action:o,location:g.location,delta:0})}function _(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Vc(m);return v=v.replace(/ $/,"%20"),qt(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let g={get action(){return o},get location(){return n(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(G_,d),l=m,()=>{r.removeEventListener(G_,d),l=null}},createHref(m){return e(r,m)},createURL:_,encodeLocation(m){let h=_(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(m){return a.go(m)}};return g}var W_;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(W_||(W_={}));function _w(n,e,t){return t===void 0&&(t="/"),vw(n,e,t)}function vw(n,e,t,i){let r=typeof e=="string"?xo(e):e,s=Vm(r.pathname||"/",t);if(s==null)return null;let a=Ly(n);xw(a);let o=null,l=Lw(s);for(let u=0;o==null&&u<a.length;++u)o=Cw(a[u],l);return o}function Ly(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(qt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=ls([i,l.relativePath]),c=t.concat(l);s.children&&s.children.length>0&&(qt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ly(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:bw(u,s.index),routesMeta:c})};return n.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Dy(s.path))r(s,a,l)}),e}function Dy(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Dy(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>n.startsWith("/")&&l===""?"/":l)}function xw(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Aw(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const yw=/^:[\w-]+$/,Sw=3,Mw=2,Ew=1,ww=10,Tw=-2,X_=n=>n==="*";function bw(n,e){let t=n.split("/"),i=t.length;return t.some(X_)&&(i+=Tw),e&&(i+=Mw),t.filter(r=>!X_(r)).reduce((r,s)=>r+(yw.test(s)?Sw:s===""?Ew:ww),i)}function Aw(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function Cw(n,e,t){let{routesMeta:i}=n,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",d=Rw({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!d)return null;Object.assign(r,d.params),a.push({params:r,pathname:ls([s,d.pathname]),pathnameBase:Iw(ls([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=ls([s,d.pathnameBase]))}return a}function Rw(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=Pw(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,c,d)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let g=o[d]||"";a=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const _=o[d];return p&&!_?u[f]=void 0:u[f]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:n}}function Pw(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Py(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Lw(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Py(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Vm(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function Dw(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?xo(n):n,s;return t?(t=Uy(t),t.startsWith("/")?s=Y_(t.substring(1),"/"):s=Y_(t,e)):s=e,{pathname:s,search:Uw(i),hash:Fw(r)}}function Y_(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function ed(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Nw(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ny(n,e){let t=Nw(n);return e?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Iy(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=xo(n):(r=Dl({},n),qt(!r.pathname||!r.pathname.includes("?"),ed("?","pathname","search",r)),qt(!r.pathname||!r.pathname.includes("#"),ed("#","pathname","hash",r)),qt(!r.search||!r.search.includes("#"),ed("#","search","hash",r)));let s=n===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=t;else{let d=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}o=d>=0?e[d]:"/"}let l=Dw(r,o),u=a&&a!=="/"&&a.endsWith("/"),c=(s||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Uy=n=>n.replace(/\/\/+/g,"/"),ls=n=>Uy(n.join("/")),Iw=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Uw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Fw=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Ow(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Fy=["post","put","patch","delete"];new Set(Fy);const kw=["get",...Fy];new Set(kw);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nl(){return Nl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Nl.apply(null,arguments)}const Gm=ae.createContext(null),Bw=ae.createContext(null),na=ae.createContext(null),Sf=ae.createContext(null),ia=ae.createContext({outlet:null,matches:[],isDataRoute:!1}),Oy=ae.createContext(null);function zw(n,e){let{relative:t}=e===void 0?{}:e;Ql()||qt(!1);let{basename:i,navigator:r}=ae.useContext(na),{hash:s,pathname:a,search:o}=zy(n,{relative:t}),l=a;return i!=="/"&&(l=a==="/"?i:ls([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Ql(){return ae.useContext(Sf)!=null}function yo(){return Ql()||qt(!1),ae.useContext(Sf).location}function ky(n){ae.useContext(na).static||ae.useLayoutEffect(n)}function By(){let{isDataRoute:n}=ae.useContext(ia);return n?Jw():Vw()}function Vw(){Ql()||qt(!1);let n=ae.useContext(Gm),{basename:e,future:t,navigator:i}=ae.useContext(na),{matches:r}=ae.useContext(ia),{pathname:s}=yo(),a=JSON.stringify(Ny(r,t.v7_relativeSplatPath)),o=ae.useRef(!1);return ky(()=>{o.current=!0}),ae.useCallback(function(u,c){if(c===void 0&&(c={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let d=Iy(u,JSON.parse(a),s,c.relative==="path");n==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:ls([e,d.pathname])),(c.replace?i.replace:i.push)(d,c.state,c)},[e,i,a,s,n])}function zy(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=ae.useContext(na),{matches:r}=ae.useContext(ia),{pathname:s}=yo(),a=JSON.stringify(Ny(r,i.v7_relativeSplatPath));return ae.useMemo(()=>Iy(n,JSON.parse(a),s,t==="path"),[n,a,s,t])}function Gw(n,e){return Hw(n,e)}function Hw(n,e,t,i){Ql()||qt(!1);let{navigator:r}=ae.useContext(na),{matches:s}=ae.useContext(ia),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=yo(),c;if(e){var d;let m=typeof e=="string"?xo(e):e;l==="/"||(d=m.pathname)!=null&&d.startsWith(l)||qt(!1),c=m}else c=u;let f=c.pathname||"/",p=f;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let _=_w(n,{pathname:p}),g=$w(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:ls([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:ls([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,t,i);return e&&g?ae.createElement(Sf.Provider,{value:{location:Nl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Zr.Pop}},g):g}function Ww(){let n=Qw(),e=Ow(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ae.createElement(ae.Fragment,null,ae.createElement("h2",null,"Unexpected Application Error!"),ae.createElement("h3",{style:{fontStyle:"italic"}},e),t?ae.createElement("pre",{style:r},t):null,null)}const Xw=ae.createElement(Ww,null);class Yw extends ae.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ae.createElement(ia.Provider,{value:this.props.routeContext},ae.createElement(Oy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qw(n){let{routeContext:e,match:t,children:i}=n,r=ae.useContext(Gm);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ae.createElement(ia.Provider,{value:e},i)}function $w(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=(r=t)==null?void 0:r.errors;if(o!=null){let c=a.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);c>=0||qt(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(t&&i&&i.v7_partialHydration)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:p}=t,_=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,d,f)=>{let p,_=!1,g=null,m=null;t&&(p=o&&d.route.id?o[d.route.id]:void 0,g=d.route.errorElement||Xw,l&&(u<0&&f===0?(eT("route-fallback"),_=!0,m=null):u===f&&(_=!0,m=d.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,f+1)),v=()=>{let S;return p?S=g:_?S=m:d.route.Component?S=ae.createElement(d.route.Component,null):d.route.element?S=d.route.element:S=c,ae.createElement(qw,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:t!=null},children:S})};return t&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?ae.createElement(Yw,{location:t.location,revalidation:t.revalidation,component:g,error:p,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var Vy=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Vy||{}),Gy=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Gy||{});function Kw(n){let e=ae.useContext(Gm);return e||qt(!1),e}function Zw(n){let e=ae.useContext(Bw);return e||qt(!1),e}function jw(n){let e=ae.useContext(ia);return e||qt(!1),e}function Hy(n){let e=jw(),t=e.matches[e.matches.length-1];return t.route.id||qt(!1),t.route.id}function Qw(){var n;let e=ae.useContext(Oy),t=Zw(),i=Hy();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function Jw(){let{router:n}=Kw(Vy.UseNavigateStable),e=Hy(Gy.UseNavigateStable),t=ae.useRef(!1);return ky(()=>{t.current=!0}),ae.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,Nl({fromRouteId:e},s)))},[n,e])}const q_={};function eT(n,e,t){q_[n]||(q_[n]=!0)}function tT(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Vr(n){qt(!1)}function nT(n){let{basename:e="/",children:t=null,location:i,navigationType:r=Zr.Pop,navigator:s,static:a=!1,future:o}=n;Ql()&&qt(!1);let l=e.replace(/^\/*/,"/"),u=ae.useMemo(()=>({basename:l,navigator:s,static:a,future:Nl({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=xo(i));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:_="default"}=i,g=ae.useMemo(()=>{let m=Vm(c,l);return m==null?null:{location:{pathname:m,search:d,hash:f,state:p,key:_},navigationType:r}},[l,c,d,f,p,_,r]);return g==null?null:ae.createElement(na.Provider,{value:u},ae.createElement(Sf.Provider,{children:t,value:g}))}function iT(n){let{children:e,location:t}=n;return Gw(Bh(e),t)}new Promise(()=>{});function Bh(n,e){e===void 0&&(e=[]);let t=[];return ae.Children.forEach(n,(i,r)=>{if(!ae.isValidElement(i))return;let s=[...e,r];if(i.type===ae.Fragment){t.push.apply(t,Bh(i.props.children,s));return}i.type!==Vr&&qt(!1),!i.props.index||!i.props.children||qt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Bh(i.props.children,s)),t.push(a)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zh(){return zh=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},zh.apply(null,arguments)}function rT(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}function sT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function aT(n,e){return n.button===0&&(!e||e==="_self")&&!sT(n)}const oT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lT="6";try{window.__reactRouterVersion=lT}catch{}const uT="startTransition",$_=tE[uT];function cT(n){let{basename:e,children:t,future:i,window:r}=n,s=ae.useRef();s.current==null&&(s.current=pw({window:r,v5Compat:!0}));let a=s.current,[o,l]=ae.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},c=ae.useCallback(d=>{u&&$_?$_(()=>l(d)):l(d)},[l,u]);return ae.useLayoutEffect(()=>a.listen(c),[a,c]),ae.useEffect(()=>tT(i),[i]),ae.createElement(nT,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,future:i})}const fT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$a=ae.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:c,viewTransition:d}=e,f=rT(e,oT),{basename:p}=ae.useContext(na),_,g=!1;if(typeof u=="string"&&dT.test(u)&&(_=u,fT))try{let S=new URL(window.location.href),x=u.startsWith("//")?new URL(S.protocol+u):new URL(u),M=Vm(x.pathname,p);x.origin===S.origin&&M!=null?u=M+x.search+x.hash:g=!0}catch{}let m=zw(u,{relative:r}),h=hT(u,{replace:a,state:o,target:l,preventScrollReset:c,relative:r,viewTransition:d});function v(S){i&&i(S),S.defaultPrevented||h(S)}return ae.createElement("a",zh({},f,{href:_||m,onClick:g||s?i:v,ref:t,target:l}))});var K_;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(K_||(K_={}));var Z_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Z_||(Z_={}));function hT(n,e){let{target:t,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=By(),u=yo(),c=zy(n,{relative:a});return ae.useCallback(d=>{if(aT(d,t)){d.preventDefault();let f=i!==void 0?i:Vc(u)===Vc(c);l(n,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[u,l,c,i,r,t,n,s,a,o])}const pT="/assets/kl-university-Y5tZSaRd.png",mT="/assets/gdg-Ci9jTZog.png",gT="/assets/whh-MpHZy7vv.png",_T="/assets/hero-concept-WRGJKhrB.jpg",Ri={meta:{title:"DEAD NOCTIS CTF – Level 1 | GDG KL University x WHH",description:"Dead Noctis CTF is a beginner-friendly capture the flag event organized by Google Developer Groups (GDG), KL University in collaboration with White Hat Hackers (WHH)."},logos:{klUniversity:{src:pT,alt:"KL University"},gdg:{src:mT,alt:"Google Developer Groups",wordmark:"Google Developer Groups"},whh:{src:gT,alt:"White Hat Hackers"}},hero:{presenterLine1:"Google Developer Groups",presenterLine2:"PRESENTS",eyebrow:"THE",tagline:{prefix:"ENTER THE DIMENSION WITH ",highlight:"WHH"},scrollLabel:"SCROLL"},glitch:{minIntervalSeconds:8,maxIntervalSeconds:12},assetPaths:{heroBackground:_T}},oD={eventTitle:"THE DEAD NOCTIS",eventSubtitle:"CTF - LEVEL 1"},Gc=[{id:"home",label:"HOME",path:"/"},{id:"about",label:"ABOUT",path:"/about"},{id:"events",label:"EVENTS",path:"/events"},{id:"rules",label:"RULES",path:"/rules"},{id:"faq",label:"FAQ",path:"/faq"},{id:"register",label:"REGISTER",path:"/register",isCta:!0}],lD={primaryCta:"REGISTER NOW",secondaryCta:"LEARN MORE"},uD={label:"ABOUT",body:"The Dead Noctis CTF is a beginner friendly capture the flag event by Google Developer Groups, KL University in collaboration with White Hat Hackers.",highlights:[{id:"learn",icon:"◈",title:"LEARN",subtitle:"Real world skills"},{id:"solve",icon:"◉",title:"SOLVE",subtitle:"Hands on challenges"},{id:"connect",icon:"◎",title:"CONNECT",subtitle:"With like minded hackers"}]},cD={label:"EVENTS",heading:"CTF - LEVEL 1",body:"A beginner friendly CTF to kickstart your hacking journey.",infoCards:[{id:"date",icon:"◷",title:"COMING SOON",subtitle:"Event Date"},{id:"venue",icon:"◈",title:"KL UNIVERSITY",subtitle:"Venue"},{id:"scope",icon:"◉",title:"NATIONAL LEVEL",subtitle:"Open to all"}]},fD={label:"RULES",heading:"PLAY FAIR HACK HARD",items:[{num:1,body:"Individual participation only."},{num:2,body:"No brute forcing or DoS attacks."},{num:3,body:"No sharing of flags."},{num:4,body:"Use only provided infrastructure."},{num:5,body:"Organizers' decision is final."}]},dD={label:"FAQ",subtitle:"Essential operational details regarding eligibility, squad configuration, competition mechanics, and toolsets.",categories:[{id:"all",label:"ALL INTEL"},{id:"general",label:"GENERAL"},{id:"teams",label:"ELIGIBILITY & TEAMS"},{id:"challenges",label:"CHALLENGES & TOOLS"},{id:"scoring",label:"SCORING & REWARDS"}],items:[{id:"what-is-ctf",category:"general",categoryLabel:"GENERAL // 01",question:"What is Dead Noctis CTF?",answer:"Dead Noctis CTF is a beginner-friendly Capture The Flag competition organized by Google Developer Groups (GDG) on Campus KL University in collaboration with White Hat Hackers (WHH). Operatives solve technical puzzles across web security, cryptography, reverse engineering, and digital forensics to uncover hidden flags.",highlight:"Level 1: Beginner-Friendly Capture The Flag"},{id:"who-can-participate",category:"teams",categoryLabel:"OPERATIVE ACCESS // 02",question:"Who can participate in this event?",answer:"Any university student or technology enthusiast with a passion for cybersecurity and problem-solving is welcome to participate. Level 1 is engineered specifically for students taking their first steps in cybersecurity competitions.",highlight:"Open to all university students"},{id:"is-it-free",category:"general",categoryLabel:"ENTRY PROTOCOL // 03",question:"Is there a registration or participation fee?",answer:"Zero entry fee. Dead Noctis CTF Level 1 is 100% free of cost for all registered university operatives and cybersecurity participants.",highlight:"100% Free of Cost"},{id:"team-size",category:"teams",categoryLabel:"SQUAD CONFIG // 04",question:"Can I participate solo or do I need a squad?",answer:"Both options are fully supported! You can deploy as an individual operative (Solo) or assemble a tactical squad of up to 4 operatives. All squad members collaborate under a single scoreboard handle.",highlight:"Solo or Squads up to 4 Operatives"},{id:"prior-experience",category:"challenges",categoryLabel:"SKILL LEVEL // 05",question:"Do I need prior cybersecurity or hacking experience?",answer:"No prior CTF experience is required. Level 1 is designed as an educational launchpad. Challenges begin with guided foundational puzzles, and mentors will be available throughout the event to assist with problem-solving strategies.",highlight:"No Prior Experience Required"},{id:"hardware-tools",category:"challenges",categoryLabel:"ARSENAL & SCOPE // 06",question:"What hardware and software tools are needed?",answer:"All you need is a laptop with internet connectivity and a modern web browser. Helpful free tools include Linux or WSL, Python 3, Wireshark, Burp Suite Community Edition, and online cryptographic utilities like CyberChef.",highlight:"Laptop + Web Browser + Free Tools"},{id:"flag-scoring",category:"scoring",categoryLabel:"SCOREBOARD // 07",question:"How does flag submission and dynamic scoring work?",answer:"Each solved challenge reveals a unique flag formatted as CTF{...}. Submitting the flag into the challenge portal instantly awards points to your handle. Ties on the live leaderboard are dynamically broken by solve timestamps.",highlight:"Standard format: CTF{...}"},{id:"prizes-certificates",category:"scoring",categoryLabel:"ACCREDITATION // 08",question:"Will certificates and awards be provided?",answer:"Yes! Official certificates of achievement and participation will be issued jointly by Google Developer Groups KL University and White Hat Hackers, alongside special honors for top scoreboard operatives.",highlight:"Official GDG & WHH Certificates"}]},hD={label:"REGISTER",heading:"BE PART OF THE CHALLENGE",body:"Registrations will be announced soon. Stay connected for updates."},vT={message:"ENTERING THE DIMENSION..."},pD={label:"404",heading:"LOST IN THE DIMENSION",body:"The page you are looking for doesn't exist (or it's in another dimension).",buttonLabel:"GO BACK HOME"},j_="(prefers-reduced-motion: reduce)";function So(){const[n,e]=ae.useState(()=>typeof window>"u"?!1:window.matchMedia(j_).matches);return ae.useEffect(()=>{if(typeof window>"u")return;const t=window.matchMedia(j_),i=r=>{e(r.matches)};return e(t.matches),t.addEventListener?(t.addEventListener("change",i),()=>t.removeEventListener("change",i)):(t.addListener(i),()=>t.removeListener(i))},[]),n}function Wy(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=Wy(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function xT(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=Wy(n))&&(i&&(i+=" "),i+=e);return i}const Hm="-",yT=n=>{const e=MT(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:a=>{const o=a.split(Hm);return o[0]===""&&o.length!==1&&o.shift(),Xy(o,e)||ST(a)},getConflictingClassGroupIds:(a,o)=>{const l=t[a]||[];return o&&i[a]?[...l,...i[a]]:l}}},Xy=(n,e)=>{var a;if(n.length===0)return e.classGroupId;const t=n[0],i=e.nextPart.get(t),r=i?Xy(n.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=n.join(Hm);return(a=e.validators.find(({validator:o})=>o(s)))==null?void 0:a.classGroupId},Q_=/^\[(.+)\]$/,ST=n=>{if(Q_.test(n)){const e=Q_.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},MT=n=>{const{theme:e,prefix:t}=n,i={nextPart:new Map,validators:[]};return wT(Object.entries(n.classGroups),t).forEach(([s,a])=>{Vh(a,i,s,e)}),i},Vh=(n,e,t,i)=>{n.forEach(r=>{if(typeof r=="string"){const s=r===""?e:J_(e,r);s.classGroupId=t;return}if(typeof r=="function"){if(ET(r)){Vh(r(i),e,t,i);return}e.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(([s,a])=>{Vh(a,J_(e,s),t,i)})})},J_=(n,e)=>{let t=n;return e.split(Hm).forEach(i=>{t.nextPart.has(i)||t.nextPart.set(i,{nextPart:new Map,validators:[]}),t=t.nextPart.get(i)}),t},ET=n=>n.isThemeGetter,wT=(n,e)=>e?n.map(([t,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([a,o])=>[e+a,o])):s);return[t,r]}):n,TT=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,i=new Map;const r=(s,a)=>{t.set(s,a),e++,e>n&&(e=0,i=t,t=new Map)};return{get(s){let a=t.get(s);if(a!==void 0)return a;if((a=i.get(s))!==void 0)return r(s,a),a},set(s,a){t.has(s)?t.set(s,a):r(s,a)}}},Yy="!",bT=n=>{const{separator:e,experimentalParseClassName:t}=n,i=e.length===1,r=e[0],s=e.length,a=o=>{const l=[];let u=0,c=0,d;for(let m=0;m<o.length;m++){let h=o[m];if(u===0){if(h===r&&(i||o.slice(m,m+s)===e)){l.push(o.slice(c,m)),c=m+s;continue}if(h==="/"){d=m;continue}}h==="["?u++:h==="]"&&u--}const f=l.length===0?o:o.substring(c),p=f.startsWith(Yy),_=p?f.substring(1):f,g=d&&d>c?d-c:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:_,maybePostfixModifierPosition:g}};return t?o=>t({className:o,parseClassName:a}):a},AT=n=>{if(n.length<=1)return n;const e=[];let t=[];return n.forEach(i=>{i[0]==="["?(e.push(...t.sort(),i),t=[]):t.push(i)}),e.push(...t.sort()),e},CT=n=>({cache:TT(n.cacheSize),parseClassName:bT(n),...yT(n)}),RT=/\s+/,PT=(n,e)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],a=n.trim().split(RT);let o="";for(let l=a.length-1;l>=0;l-=1){const u=a[l],{modifiers:c,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=t(u);let _=!!p,g=i(_?f.substring(0,p):f);if(!g){if(!_){o=u+(o.length>0?" "+o:o);continue}if(g=i(f),!g){o=u+(o.length>0?" "+o:o);continue}_=!1}const m=AT(c).join(":"),h=d?m+Yy:m,v=h+g;if(s.includes(v))continue;s.push(v);const S=r(g,_);for(let x=0;x<S.length;++x){const M=S[x];s.push(h+M)}o=u+(o.length>0?" "+o:o)}return o};function LT(){let n=0,e,t,i="";for(;n<arguments.length;)(e=arguments[n++])&&(t=qy(e))&&(i&&(i+=" "),i+=t);return i}const qy=n=>{if(typeof n=="string")return n;let e,t="";for(let i=0;i<n.length;i++)n[i]&&(e=qy(n[i]))&&(t&&(t+=" "),t+=e);return t};function DT(n,...e){let t,i,r,s=a;function a(l){const u=e.reduce((c,d)=>d(c),n());return t=CT(u),i=t.cache.get,r=t.cache.set,s=o,o(l)}function o(l){const u=i(l);if(u)return u;const c=PT(l,t);return r(l,c),c}return function(){return s(LT.apply(null,arguments))}}const xt=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},$y=/^\[(?:([a-z-]+):)?(.+)\]$/i,NT=/^\d+\/\d+$/,IT=new Set(["px","full","screen"]),UT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,FT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,OT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,kT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,BT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ir=n=>Ka(n)||IT.has(n)||NT.test(n),Ir=n=>Mo(n,"length",qT),Ka=n=>!!n&&!Number.isNaN(Number(n)),td=n=>Mo(n,"number",Ka),Uo=n=>!!n&&Number.isInteger(Number(n)),zT=n=>n.endsWith("%")&&Ka(n.slice(0,-1)),Ve=n=>$y.test(n),Ur=n=>UT.test(n),VT=new Set(["length","size","percentage"]),GT=n=>Mo(n,VT,Ky),HT=n=>Mo(n,"position",Ky),WT=new Set(["image","url"]),XT=n=>Mo(n,WT,KT),YT=n=>Mo(n,"",$T),Fo=()=>!0,Mo=(n,e,t)=>{const i=$y.exec(n);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):t(i[2]):!1},qT=n=>FT.test(n)&&!OT.test(n),Ky=()=>!1,$T=n=>kT.test(n),KT=n=>BT.test(n),ZT=()=>{const n=xt("colors"),e=xt("spacing"),t=xt("blur"),i=xt("brightness"),r=xt("borderColor"),s=xt("borderRadius"),a=xt("borderSpacing"),o=xt("borderWidth"),l=xt("contrast"),u=xt("grayscale"),c=xt("hueRotate"),d=xt("invert"),f=xt("gap"),p=xt("gradientColorStops"),_=xt("gradientColorStopPositions"),g=xt("inset"),m=xt("margin"),h=xt("opacity"),v=xt("padding"),S=xt("saturate"),x=xt("scale"),M=xt("sepia"),w=xt("skew"),A=xt("space"),y=xt("translate"),b=()=>["auto","contain","none"],C=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",Ve,e],N=()=>[Ve,e],k=()=>["",ir,Ir],L=()=>["auto",Ka,Ve],B=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],F=()=>["start","end","center","between","around","evenly","stretch"],O=()=>["","0",Ve],G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>[Ka,Ve];return{cacheSize:500,separator:":",theme:{colors:[Fo],spacing:[ir,Ir],blur:["none","",Ur,Ve],brightness:K(),borderColor:[n],borderRadius:["none","","full",Ur,Ve],borderSpacing:N(),borderWidth:k(),contrast:K(),grayscale:O(),hueRotate:K(),invert:O(),gap:N(),gradientColorStops:[n],gradientColorStopPositions:[zT,Ir],inset:D(),margin:D(),opacity:K(),padding:N(),saturate:K(),scale:K(),sepia:O(),skew:K(),space:N(),translate:N()},classGroups:{aspect:[{aspect:["auto","square","video",Ve]}],container:["container"],columns:[{columns:[Ur]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...B(),Ve]}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:b()}],"overscroll-x":[{"overscroll-x":b()}],"overscroll-y":[{"overscroll-y":b()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Uo,Ve]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ve]}],grow:[{grow:O()}],shrink:[{shrink:O()}],order:[{order:["first","last","none",Uo,Ve]}],"grid-cols":[{"grid-cols":[Fo]}],"col-start-end":[{col:["auto",{span:["full",Uo,Ve]},Ve]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[Fo]}],"row-start-end":[{row:["auto",{span:[Uo,Ve]},Ve]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ve]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ve]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...F()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...F(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...F(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ve,e]}],"min-w":[{"min-w":[Ve,e,"min","max","fit"]}],"max-w":[{"max-w":[Ve,e,"none","full","min","max","fit","prose",{screen:[Ur]},Ur]}],h:[{h:[Ve,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ve,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ve,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ve,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Ur,Ir]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",td]}],"font-family":[{font:[Fo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ve]}],"line-clamp":[{"line-clamp":["none",Ka,td]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",ir,Ve]}],"list-image":[{"list-image":["none",Ve]}],"list-style-type":[{list:["none","disc","decimal",Ve]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",ir,Ir]}],"underline-offset":[{"underline-offset":["auto",ir,Ve]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ve]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ve]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...B(),HT]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",GT]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},XT]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:q()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[ir,Ve]}],"outline-w":[{outline:[ir,Ir]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:k()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[ir,Ir]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",Ur,YT]}],"shadow-color":[{shadow:[Fo]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...X(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":X()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Ur,Ve]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[d]}],saturate:[{saturate:[S]}],sepia:[{sepia:[M]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ve]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",Ve]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ve]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[Uo,Ve]}],"translate-x":[{"translate-x":[y]}],"translate-y":[{"translate-y":[y]}],"skew-x":[{"skew-x":[w]}],"skew-y":[{"skew-y":[w]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ve]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ve]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ve]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[ir,Ir,td]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},jT=DT(ZT);function Ai(...n){return jT(xT(n))}const Zy=({variant:n="primary",size:e="md",showArrow:t=!1,arrowDirection:i="right",magnetic:r=!0,children:s,className:a,onPointerMove:o,onPointerLeave:l,...u})=>{const c=ae.useRef(null),d=So(),f=h=>{if(o&&o(h),d||!r||h.pointerType==="touch")return;const v=c.current;if(!v)return;const S=v.getBoundingClientRect(),x=(h.clientX-(S.left+S.width/2))*.14,M=(h.clientY-(S.top+S.height/2))*.18,w=Math.max(-4,Math.min(4,x)),A=Math.max(-3,Math.min(3,M));v.style.transform=`translate3d(${w.toFixed(1)}px, ${A.toFixed(1)}px, 0) translateY(-2px)`},p=h=>{l&&l(h),c.current&&(c.current.style.transform="")},_=Ai("group relative inline-flex items-center justify-center font-nav uppercase font-bold tracking-cyber select-none cursor-pointer overflow-hidden","transition-transform duration-200 ease-out","active:translate-y-[1px]","focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-background-void","disabled:opacity-50 disabled:pointer-events-none"),g={sm:"text-xs px-4 py-1.5 h-9 min-h-[36px]",md:"text-sm px-6 py-2.5 h-11 min-h-[44px]",lg:"text-base px-8 py-3.5 h-12 min-h-[48px]"},m={primary:Ai("bg-[#050a07] text-accent-green border-2","border-t-[#72ffab] border-l-[#48ff9f] border-r-[#0d4a2b] border-b-[#052113]","shadow-[0_0_12px_rgba(34,255,136,0.22)]","hover:bg-accent-green/15 hover:border-t-[#8affbe] hover:border-l-[#65ffb1] hover:shadow-[0_0_24px_rgba(34,255,136,0.45)]"),secondary:Ai("bg-[#050a07]/80 text-ctf-text border-2","border-t-[#8fa89a] border-l-[#688274] border-r-[#15291f] border-b-[#0b1711]","hover:border-t-accent-green/80 hover:border-l-accent-green/70 hover:text-accent-green hover:bg-accent-green/10 hover:shadow-[0_0_16px_rgba(34,255,136,0.2)]"),ghost:Ai("bg-transparent text-ctf-text border-2","border-t-ctf-border border-l-ctf-border border-r-[#0d4a2b] border-b-[#052113]","hover:border-t-accent-green hover:border-l-accent-green hover:text-accent-green hover:bg-accent-green/10 hover:shadow-[0_0_14px_rgba(34,255,136,0.25)]"),nav:Ai("bg-transparent text-accent-green border-2","border-t-[#72ffab]/70 border-l-[#48ff9f]/60 border-r-[#0d4a2b] border-b-[#052113]","hover:bg-accent-green/10 hover:border-t-accent-green hover:border-l-accent-green hover:shadow-neon-sm","text-xs px-5 py-2 h-9 min-h-[36px]")};return le.jsxs("button",{ref:c,onPointerMove:f,onPointerLeave:p,className:Ai(_,g[e],m[n],"pixel-notch",a),...u,children:[!d&&le.jsx("span",{className:"absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0","aria-hidden":"true",children:le.jsx("span",{className:"absolute -inset-[100%] bg-[linear-gradient(115deg,transparent_38%,rgba(34,255,136,0.22)_50%,transparent_62%)] animate-button-sweep will-change-transform"})}),le.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:[le.jsx("span",{children:s}),t&&le.jsx("span",{"aria-hidden":"true",className:Ai("transition-transform duration-150 inline-block [transition-timing-function:steps(2,jump-none)]",i==="right"&&"group-hover:translate-x-1",i==="down"&&"group-hover:translate-y-0.5"),children:i==="right"?"→":"⌄"})]})]})},QT=({isOpen:n,onClose:e,activeId:t,onRegisterClick:i})=>{const r=ae.useRef(null),s=ae.useRef(null),a=By();ae.useEffect(()=>{if(!n)return;const l=document.body.style.overflow;document.body.style.overflow="hidden";const u=setTimeout(()=>{var d;(d=r.current)==null||d.focus()},50),c=d=>{d.key==="Escape"&&(d.preventDefault(),e())};return window.addEventListener("keydown",c),()=>{document.body.style.overflow=l,window.removeEventListener("keydown",c),clearTimeout(u)}},[n,e]);const o=()=>{e(),i?i():a("/register")};return!n||typeof document>"u"?null:Ry.createPortal(le.jsxs("div",{className:"fixed inset-0 z-[120] md:hidden",role:"dialog","aria-modal":"true","aria-label":"Mobile Navigation Drawer",children:[le.jsx("div",{className:"fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity cursor-pointer",onClick:e,"aria-hidden":"true"}),le.jsxs("div",{ref:s,className:"fixed inset-y-0 right-0 w-[82%] max-w-xs bg-[#050a07] border-l border-accent-green/30 p-6 flex flex-col justify-between shadow-[0_0_60px_rgba(0,0,0,0.95)] z-10",children:[le.jsxs("div",{children:[le.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-ctf-border/30",children:[le.jsx("span",{className:"text-xs uppercase tracking-cyber-widest text-ctf-muted",children:"NAVIGATION"}),le.jsx("button",{ref:r,type:"button",onClick:e,className:"w-11 h-11 flex items-center justify-center text-ctf-muted hover:text-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green rounded transition-colors cursor-pointer","aria-label":"Close menu",children:le.jsx("svg",{className:"w-6 h-6 stroke-current",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:le.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),le.jsx("nav",{className:"mt-8 flex flex-col gap-6","aria-label":"Mobile Navigation Links",children:Gc.filter(l=>!("isCta"in l&&l.isCta)).map(l=>{const u=t===l.path||t===l.id;return le.jsxs($a,{to:l.path,onClick:()=>{if(e(),window.location.pathname==="/"&&l.id!=="register"){const c=document.getElementById(l.id);c&&c.scrollIntoView({behavior:"smooth"})}},className:Ai("text-base uppercase font-semibold tracking-cyber transition-colors flex items-center justify-between py-1 cursor-pointer",u?"text-accent-green":"text-ctf-text hover:text-accent-green"),children:[le.jsx("span",{children:l.label}),u&&le.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-accent-green shadow-neon-sm"})]},l.id)})})]}),le.jsx("div",{className:"pt-6 border-t border-ctf-border/30",children:le.jsx(Zy,{variant:"primary",className:"w-full justify-center",onClick:o,children:"REGISTER"})})]})]}),document.body)},JT=["home","about","events","rules","faq","register"],Gh=new Set;let Hh="home";function eb(n){Hh!==n&&(Hh=n,Gh.forEach(e=>e(n)))}function tb(){const[n,e]=ae.useState(Hh);return ae.useEffect(()=>{const t=i=>e(i);return Gh.add(t),()=>{Gh.delete(t)}},[]),n}function mD(){const n=So(),[e,t]=ae.useState({progress:0,rawProgress:0,activeSection:"home",scrollY:0}),i=ae.useRef(0),r=ae.useRef(0),s=ae.useRef(0),a=ae.useRef("home"),o=ae.useRef(!1),l=ae.useRef(null),u=ae.useRef([]),c=ae.useCallback(()=>{const d=window.scrollY||window.pageYOffset||0;u.current=JT.map(f=>{const p=document.getElementById(f);if(!p)return{id:f,top:0};const _=p.getBoundingClientRect();return{id:f,top:_.top+d}})},[]);return ae.useEffect(()=>{c();const d=S=>{const x=S+window.innerHeight*.35;let M="home";const w=u.current;for(let A=w.length-1;A>=0;A--){const y=w[A];if(y.top>0&&x>=y.top-60){M=y.id;break}}return a.current!==M&&(a.current=M,eb(M)),M},f=()=>{const S=window.scrollY||window.pageYOffset||0,x=document.documentElement.scrollHeight-window.innerHeight,M=x>0?Math.min(Math.max(S/x,0),1):0;s.current=S,i.current=M,d(S)},p=n?1:.08,_=5e-4,g=()=>{if(document.hidden){o.current=!1,l.current=null;return}const S=i.current,x=r.current,M=S-x;Math.abs(M)>_?(r.current+=M*p,t(w=>({...w,progress:r.current,rawProgress:S,activeSection:a.current,scrollY:s.current})),l.current=requestAnimationFrame(g)):(r.current=S,t(w=>({...w,progress:S,rawProgress:S,activeSection:a.current,scrollY:s.current})),o.current=!1,l.current=null)},m=()=>{f(),!o.current&&!document.hidden&&(o.current=!0,l.current=requestAnimationFrame(g))},h=()=>{c(),f()},v=()=>{document.hidden?l.current!==null&&(cancelAnimationFrame(l.current),l.current=null,o.current=!1):(f(),Math.abs(i.current-r.current)>_&&(o.current=!0,l.current=requestAnimationFrame(g)))};return window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",h,{passive:!0}),document.addEventListener("visibilitychange",v),f(),()=>{window.removeEventListener("scroll",m),window.removeEventListener("resize",h),document.removeEventListener("visibilitychange",v),l.current!==null&&cancelAnimationFrame(l.current)}},[c,n]),e}const nb=({activeSection:n,onRegisterClick:e,className:t})=>{const[i,r]=ae.useState(!1),s=ae.useRef(null),a=yo(),o=tb(),l=So(),u=ae.useRef(null),c=ae.useRef({}),[d,f]=ae.useState({left:0,width:0,opacity:0}),p=n??o,_=a.pathname==="/"||a.pathname==="";ae.useEffect(()=>{const h=()=>{const x=Gc.find(M=>_?M.id===p:a.pathname===M.path);if(x&&!("isCta"in x&&x.isCta)){const M=c.current[x.id],w=u.current;if(M&&w){const A=w.getBoundingClientRect(),y=M.getBoundingClientRect(),b=y.left-A.left,C=y.width;f({left:b,width:C,opacity:1});return}}f(M=>({...M,opacity:0}))};h();const v=requestAnimationFrame(h),S=setTimeout(h,120);return window.addEventListener("resize",h,{passive:!0}),()=>{cancelAnimationFrame(v),clearTimeout(S),window.removeEventListener("resize",h)}},[p,a.pathname,_]);const g=()=>{r(!1),setTimeout(()=>{var h;(h=s.current)==null||h.focus()},50)},m=h=>{_&&(h.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))};return le.jsxs("header",{className:Ai("fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300","bg-gradient-to-b from-background-void/95 via-background-void/70 to-transparent backdrop-blur-[4px]",t),children:[le.jsxs("div",{className:"max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between",children:[le.jsxs($a,{to:"/",onClick:m,className:"flex items-center gap-2.5 sm:gap-4 select-none group","aria-label":"Dead Noctis CTF Home",children:[le.jsx("div",{className:"flex items-center",children:le.jsx("img",{src:Ri.logos.klUniversity.src,alt:Ri.logos.klUniversity.alt,className:"h-7 sm:h-8 md:h-9 w-auto object-contain",loading:"eager",decoding:"async"})}),le.jsx("div",{className:"h-4 sm:h-5 w-px bg-ctf-muted/30","aria-hidden":"true"}),le.jsxs("div",{className:"flex items-center gap-2",children:[le.jsx("img",{src:Ri.logos.gdg.src,alt:Ri.logos.gdg.alt,className:"h-5 sm:h-6 md:h-7 w-auto object-contain",loading:"eager",decoding:"async"}),le.jsx("span",{className:"hidden lg:inline-block text-xs sm:text-sm font-semibold text-ctf-text tracking-wide whitespace-nowrap group-hover:text-accent-green transition-colors",children:Ri.logos.gdg.wordmark})]})]}),le.jsxs("nav",{ref:u,"aria-label":"Main Navigation",className:"relative hidden md:flex items-center gap-5 lg:gap-8 py-2",children:[Gc.map(h=>{const v=_?h.id===p:a.pathname===h.path,S=x=>{if(h.id==="register"&&e){x.preventDefault(),e();return}if(_&&h.id!=="register"){if(h.id==="home"){x.preventDefault(),window.scrollTo({top:0,behavior:"smooth"});return}const M=document.getElementById(h.id);M&&(x.preventDefault(),M.scrollIntoView({behavior:"smooth"}))}};return"isCta"in h&&h.isCta?le.jsx($a,{to:h.path,onClick:S,children:le.jsx(Zy,{variant:"nav",size:"sm",className:Ai(v&&"bg-accent-green/20 border-accent-green shadow-neon-sm"),children:h.label})},h.id):le.jsx($a,{ref:x=>{c.current[h.id]=x},to:h.path,onClick:S,className:Ai("text-xs lg:text-sm uppercase font-semibold tracking-cyber transition-colors duration-200 relative py-1 cursor-pointer select-none",v?"text-accent-green":"text-ctf-muted hover:text-ctf-text"),children:h.label},h.id)}),le.jsxs("span",{className:"absolute -bottom-0.5 h-[2.5px] bg-accent-green pointer-events-none rounded-full will-change-transform",style:{transform:`translate3d(${d.left}px, 0, 0)`,width:`${d.width}px`,opacity:d.opacity,boxShadow:"0 0 10px rgba(34, 255, 136, 0.85), 0 0 18px rgba(0, 255, 102, 0.5)",transition:l?"none":"transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), width 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease-out"},"aria-hidden":"true",children:[le.jsx("span",{className:"absolute inset-0 bg-white/70 blur-[0.8px] rounded-full"}),le.jsx("span",{className:"absolute -top-[1.5px] right-0 w-1.5 h-1.5 bg-[#48ff9f] shadow-[0_0_6px_#00ff66]"})]})]}),le.jsxs("button",{ref:s,type:"button",onClick:()=>r(!0),className:"md:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-1.5 p-2 rounded focus:outline-none focus:ring-1 focus:ring-accent-green transition-all","aria-label":"Open menu","aria-expanded":i,children:[le.jsx("span",{className:"w-6 h-0.5 bg-accent-green rounded-full shadow-neon-sm block"}),le.jsx("span",{className:"w-6 h-0.5 bg-accent-green rounded-full shadow-neon-sm block"}),le.jsx("span",{className:"w-6 h-0.5 bg-accent-green rounded-full shadow-neon-sm block"})]})]}),le.jsx(QT,{isOpen:i,onClose:g,activeId:_?p:a.pathname,onRegisterClick:e})]})},ib=()=>le.jsx("footer",{className:"relative z-20 border-t border-ctf-border/40 bg-background-void/90 py-12 sm:py-16 select-none backdrop-blur-md",children:le.jsxs("div",{className:"max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 flex flex-col md:flex-row items-center justify-between gap-8",children:[le.jsxs($a,{to:"/",className:"flex items-center gap-3 sm:gap-4","aria-label":"Dead Noctis CTF Home",children:[le.jsx("img",{src:Ri.logos.klUniversity.src,alt:Ri.logos.klUniversity.alt,className:"h-6 sm:h-7 w-auto object-contain"}),le.jsx("div",{className:"h-4 w-px bg-ctf-muted/30","aria-hidden":"true"}),le.jsx("img",{src:Ri.logos.gdg.src,alt:Ri.logos.gdg.alt,className:"h-5 sm:h-6 w-auto object-contain"}),le.jsx("div",{className:"h-4 w-px bg-ctf-muted/30","aria-hidden":"true"}),le.jsx("img",{src:Ri.logos.whh.src,alt:Ri.logos.whh.alt,className:"h-6 sm:h-7 w-auto object-contain rounded-full"})]}),le.jsx("nav",{"aria-label":"Footer Navigation",className:"flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs font-semibold tracking-cyber uppercase text-ctf-muted",children:Gc.map(n=>le.jsx($a,{to:n.path,className:"hover:text-accent-green transition-colors cursor-pointer",children:n.label},n.id))}),le.jsxs("div",{className:"text-center md:text-right font-mono text-[10px] text-ctf-muted/70",children:[le.jsx("p",{children:"© 2026 DEAD NOCTIS CTF // LEVEL 1"}),le.jsx("p",{className:"text-accent-green/80 mt-1",children:"GDG KL UNIVERSITY × WHH"})]})]})});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wm="186",rb=0,e0=1,sb=2,oc=1,ab=2,jo=3,Ks=0,Fn=1,hr=2,vr=0,cl=1,Hc=2,t0=3,n0=4,ob=5,ba=100,lb=101,ub=102,cb=103,fb=104,db=200,hb=201,pb=202,mb=203,jy=204,Qy=205,gb=206,_b=207,vb=208,xb=209,yb=210,Sb=211,Mb=212,Eb=213,wb=214,Wh=0,Xh=1,Yh=2,Il=3,qh=4,$h=5,Kh=6,Zh=7,Jy=0,Tb=1,bb=2,Zi=0,eS=1,tS=2,nS=3,iS=4,rS=5,sS=6,aS=7,oS=300,Zs=301,lo=302,nd=303,id=304,Mf=306,jh=1e3,gr=1001,Qh=1002,sn=1003,Ab=1004,Tu=1005,Yt=1006,rd=1007,Is=1008,$n=1009,lS=1010,uS=1011,Ul=1012,Xm=1013,Qi=1014,Li=1015,Ji=1016,Ym=1017,qm=1018,Fl=1020,cS=35902,fS=35899,dS=1021,hS=1022,Di=1023,Tr=1026,Us=1027,$m=1028,Km=1029,js=1030,Zm=1031,jm=1033,lc=33776,uc=33777,cc=33778,fc=33779,Jh=35840,ep=35841,tp=35842,np=35843,ip=36196,rp=37492,sp=37496,ap=37488,op=37489,Wc=37490,lp=37491,up=37808,cp=37809,fp=37810,dp=37811,hp=37812,pp=37813,mp=37814,gp=37815,_p=37816,vp=37817,xp=37818,yp=37819,Sp=37820,Mp=37821,Ep=36492,wp=36494,Tp=36495,bp=36283,Ap=36284,Xc=36285,Cp=36286,Cb=3200,Rp=0,Rb=1,qr="",ci="srgb",Yc="srgb-linear",qc="linear",ot="srgb",sd=7680,Pb=519,Lb=512,Db=513,Nb=514,Qm=515,Ib=516,Ub=517,Jm=518,Fb=519,Ob=35044,i0="300 es",Yi=2e3,Ol=2001;function kb(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $c(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bb(){const n=$c("canvas");return n.style.display="block",n}const r0={};function s0(...n){const e="THREE."+n.shift();console.log(e,...n)}function pS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=pS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function it(...n){n=pS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Za(...n){const e=n.join(" ");e in r0||(r0[e]=!0,Oe(...n))}function zb(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Vb={[Wh]:Xh,[Yh]:Kh,[qh]:Zh,[Il]:$h,[Xh]:Wh,[Kh]:Yh,[Zh]:qh,[$h]:Il};class ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=Math.PI/180,Pp=180/Math.PI;function Jl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Gb(n,e){return(n%e+e)%e}function od(n,e,t){return(1-t)*n+t*e}function Oo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Mg=class Mg{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mg.prototype.isVector2=!0;let et=Mg;class Eo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(d!==g||l!==f||u!==p||c!==_){let m=l*f+u*p+c*_+d*g;m<0&&(f=-f,p=-p,_=-_,g=-g,m=-m);let h=1-o;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);h=Math.sin(h*v)/S,o=Math.sin(o*v)/S,l=l*h+f*o,u=u*h+p*o,c=c*h+_*o,d=d*h+g*o}else{l=l*h+f*o,u=u*h+p*o,c=c*h+_*o,d=d*h+g*o;const v=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=v,u*=v,c*=v,d*=v}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-o*p,e[t+2]=u*_+c*p+o*f-l*d,e[t+3]=c*_-o*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Eg=class Eg{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(a0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(a0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*u+a*d-o*c,this.y=i+l*c+o*u-s*d,this.z=r+l*d+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eg.prototype.isVector3=!0;let $=Eg;const ld=new $,a0=new Eo,wg=class wg{constructor(e,t,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],v=r[1],S=r[4],x=r[7],M=r[2],w=r[5],A=r[8];return s[0]=a*g+o*v+l*M,s[3]=a*m+o*S+l*w,s[6]=a*h+o*x+l*A,s[1]=u*g+c*v+d*M,s[4]=u*m+c*S+d*w,s[7]=u*h+c*x+d*A,s[2]=f*g+p*v+_*M,s[5]=f*m+p*S+_*w,s[8]=f*h+p*x+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=c*a-o*u,f=o*l-c*s,p=u*s-a*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(o*i-r*a)*g,e[3]=f*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return Za("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ud.makeScale(e,t)),this}rotate(e){return Za("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ud.makeRotation(-e)),this}translate(e,t){return Za("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ud.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wg.prototype.isMatrix3=!0;let Be=wg;const ud=new Be,o0=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l0=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hb(){const n={enabled:!0,workingColorSpace:Yc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=ja(r.r),r.g=ja(r.g),r.b=ja(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qr?qc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Za("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Za("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yc]:{primaries:e,whitePoint:i,transfer:qc,toXYZ:o0,fromXYZ:l0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:o0,fromXYZ:l0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),n}const je=Hb();function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ja(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fa;class Wb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fa===void 0&&(fa=$c("canvas")),fa.width=e.width,fa.height=e.height;const r=fa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$c("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xr(t[i]/255)*255):t[i]=xr(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xb=0;class eg{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=Jl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(cd(r[a].image)):s.push(cd(r[a]))}else s=cd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function cd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let Yb=0;const fd=new $;class vn extends ra{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=gr,r=gr,s=Yt,a=Is,o=Di,l=$n,u=vn.DEFAULT_ANISOTROPY,c=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Jl(),this.name="",this.source=new eg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=oS;vn.DEFAULT_ANISOTROPY=1;const Tg=class Tg{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,x=(p+1)/2,M=(h+1)/2,w=(c+f)/4,A=(d+g)/4,y=(_+m)/4;return S>x&&S>M?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=A/i):x>M?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=y/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tg.prototype.isVector4=!0;let Pt=Tg;class qb extends ra{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new vn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new eg(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends qb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mS extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $b extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const nf=class nf{constructor(e,t,i,r,s,a,o,l,u,c,d,f,p,_,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,d,f,p,_,g,m)}set(e,t,i,r,s,a,o,l,u,c,d,f,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nf().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/da.setFromMatrixColumn(e,0).length(),s=1/da.setFromMatrixColumn(e,1).length(),a=1/da.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*c,p=a*d,_=o*c,g=o*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-g*u,t[9]=-o*l,t[2]=g-f*u,t[6]=_+p*u,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f+g*o,t[4]=_*o-p,t[8]=a*u,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=p*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f-g*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*c,t[9]=g-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,p=a*d,_=o*c,g=o*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+g,t[1]=l*d,t[5]=g*u+f,t[9]=p*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,_=o*l,g=o*u;t[0]=l*c,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,p=a*u,_=o*l,g=o*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+g,t[5]=a*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*c,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kb,e,Zb)}lookAt(e,t,i){const r=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Fr.crossVectors(i,Gn),Fr.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Fr.crossVectors(i,Gn)),Fr.normalize(),bu.crossVectors(Gn,Fr),r[0]=Fr.x,r[4]=bu.x,r[8]=Gn.x,r[1]=Fr.y,r[5]=bu.y,r[9]=Gn.y,r[2]=Fr.z,r[6]=bu.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],v=i[3],S=i[7],x=i[11],M=i[15],w=r[0],A=r[4],y=r[8],b=r[12],C=r[1],D=r[5],N=r[9],k=r[13],L=r[2],B=r[6],q=r[10],X=r[14],F=r[3],O=r[7],G=r[11],K=r[15];return s[0]=a*w+o*C+l*L+u*F,s[4]=a*A+o*D+l*B+u*O,s[8]=a*y+o*N+l*q+u*G,s[12]=a*b+o*k+l*X+u*K,s[1]=c*w+d*C+f*L+p*F,s[5]=c*A+d*D+f*B+p*O,s[9]=c*y+d*N+f*q+p*G,s[13]=c*b+d*k+f*X+p*K,s[2]=_*w+g*C+m*L+h*F,s[6]=_*A+g*D+m*B+h*O,s[10]=_*y+g*N+m*q+h*G,s[14]=_*b+g*k+m*X+h*K,s[3]=v*w+S*C+x*L+M*F,s[7]=v*A+S*D+x*B+M*O,s[11]=v*y+S*N+x*q+M*G,s[15]=v*b+S*k+x*X+M*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15],v=l*p-u*f,S=o*p-u*d,x=o*f-l*d,M=a*p-u*c,w=a*f-l*c,A=a*d-o*c;return t*(g*v-m*S+h*x)-i*(_*v-m*M+h*w)+r*(_*S-g*M+h*A)-s*(_*x-g*w+m*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],c=e[10];return t*(a*c-o*u)-i*(s*c-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],v=t*o-i*a,S=t*l-r*a,x=t*u-s*a,M=i*l-r*o,w=i*u-s*o,A=r*u-s*l,y=c*g-d*_,b=c*m-f*_,C=c*h-p*_,D=d*m-f*g,N=d*h-p*g,k=f*h-p*m,L=v*k-S*N+x*D+M*C-w*b+A*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return e[0]=(o*k-l*N+u*D)*B,e[1]=(r*N-i*k-s*D)*B,e[2]=(g*A-m*w+h*M)*B,e[3]=(f*w-d*A-p*M)*B,e[4]=(l*C-a*k-u*b)*B,e[5]=(t*k-r*C+s*b)*B,e[6]=(m*x-_*A-h*S)*B,e[7]=(c*A-f*x+p*S)*B,e[8]=(a*N-o*C+u*y)*B,e[9]=(i*C-t*N-s*y)*B,e[10]=(_*w-g*x+h*v)*B,e[11]=(d*x-c*w-p*v)*B,e[12]=(o*b-a*D-l*y)*B,e[13]=(t*D-i*b+r*y)*B,e[14]=(g*S-_*M-m*v)*B,e[15]=(c*M-d*S+f*v)*B,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,d=o+o,f=s*u,p=s*c,_=s*d,g=a*c,m=a*d,h=o*d,v=l*u,S=l*c,x=l*d,M=i.x,w=i.y,A=i.z;return r[0]=(1-(g+h))*M,r[1]=(p+x)*M,r[2]=(_-S)*M,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(f+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+S)*A,r[9]=(m-v)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=da.set(r[0],r[1],r[2]).length();const o=da.set(r[4],r[5],r[6]).length(),l=da.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Mi.copy(this);const u=1/a,c=1/o,d=1/l;return Mi.elements[0]*=u,Mi.elements[1]*=u,Mi.elements[2]*=u,Mi.elements[4]*=c,Mi.elements[5]*=c,Mi.elements[6]*=c,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,t.setFromRotationMatrix(Mi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Yi,l=!1){const u=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Yi)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ol)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Yi,l=!1){const u=this.elements,c=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Yi)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===Ol)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};nf.prototype.isMatrix4=!0;let Mt=nf;const da=new $,Mi=new Mt,Kb=new $(0,0,0),Zb=new $(1,1,1),Fr=new $,bu=new $,Gn=new $,u0=new Mt,c0=new Eo;class hs{constructor(e=0,t=0,i=0,r=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return u0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return c0.setFromEuler(this),this.setFromQuaternion(c0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class gS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jb=0;const f0=new $,ha=new Eo,rr=new Mt,Au=new $,ko=new $,Qb=new $,Jb=new Eo,d0=new $(1,0,0),h0=new $(0,1,0),p0=new $(0,0,1),m0={type:"added"},eA={type:"removed"},pa={type:"childadded",child:null},dd={type:"childremoved",child:null};class on extends ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Jl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new $,t=new hs,i=new Eo,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Be}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.multiply(ha),this}rotateOnWorldAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.premultiply(ha),this}rotateX(e){return this.rotateOnAxis(d0,e)}rotateY(e){return this.rotateOnAxis(h0,e)}rotateZ(e){return this.rotateOnAxis(p0,e)}translateOnAxis(e,t){return f0.copy(e).applyQuaternion(this.quaternion),this.position.add(f0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(d0,e)}translateY(e){return this.translateOnAxis(h0,e)}translateZ(e){return this.translateOnAxis(p0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Au.copy(e):Au.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(ko,Au,this.up):rr.lookAt(Au,ko,this.up),this.quaternion.setFromRotationMatrix(rr),r&&(rr.extractRotation(r.matrixWorld),ha.setFromRotationMatrix(rr),this.quaternion.premultiply(ha.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m0),pa.child=e,this.dispatchEvent(pa),pa.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eA),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m0),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,Qb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,Jb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}on.DEFAULT_UP=new $(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fs extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tA={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _S={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},Cu={h:0,s:0,l:0};function pd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Gb(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=pd(a,s,e+1/3),this.g=pd(a,s,e),this.b=pd(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=ci){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){const i=_S[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return je.workingToColorSpace(mn.copy(this),e),Math.round(Qe(mn.r*255,0,255))*65536+Math.round(Qe(mn.g*255,0,255))*256+Math.round(Qe(mn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(mn.copy(this),t);const i=mn.r,r=mn.g,s=mn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=ci){je.workingToColorSpace(mn.copy(this),e);const t=mn.r,i=mn.g,r=mn.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(Cu);const i=od(Or.h,Cu.h,t),r=od(Or.s,Cu.s,t),s=od(Or.l,Cu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new We;We.NAMES=_S;class nA extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ei=new $,sr=new $,md=new $,ar=new $,ma=new $,ga=new $,g0=new $,gd=new $,_d=new $,vd=new $,xd=new Pt,yd=new Pt,Sd=new Pt;class Pi{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ei.subVectors(e,t),r.cross(Ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ei.subVectors(r,t),sr.subVectors(i,t),md.subVectors(e,t);const a=Ei.dot(Ei),o=Ei.dot(sr),l=Ei.dot(md),u=sr.dot(sr),c=sr.dot(md),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-o*c)*f,_=(a*c-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ar.x),l.addScaledVector(a,ar.y),l.addScaledVector(o,ar.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return xd.setScalar(0),yd.setScalar(0),Sd.setScalar(0),xd.fromBufferAttribute(e,t),yd.fromBufferAttribute(e,i),Sd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(xd,s.x),a.addScaledVector(yd,s.y),a.addScaledVector(Sd,s.z),a}static isFrontFacing(e,t,i,r){return Ei.subVectors(i,t),sr.subVectors(e,t),Ei.cross(sr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ei.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Pi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ma.subVectors(r,i),ga.subVectors(s,i),gd.subVectors(e,i);const l=ma.dot(gd),u=ga.dot(gd);if(l<=0&&u<=0)return t.copy(i);_d.subVectors(e,r);const c=ma.dot(_d),d=ga.dot(_d);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(ma,a);vd.subVectors(e,s);const p=ma.dot(vd),_=ga.dot(vd);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(ga,o);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return g0.subVectors(s,r),o=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(g0,o);const h=1/(m+g+f);return a=g*h,o=f*h,t.copy(i).addScaledVector(ma,a).addScaledVector(ga,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sa{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wi):wi.fromBufferAttribute(s,a),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ru.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ru.copy(i.boundingBox)),Ru.applyMatrix4(e.matrixWorld),this.union(Ru)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),Pu.subVectors(this.max,Bo),_a.subVectors(e.a,Bo),va.subVectors(e.b,Bo),xa.subVectors(e.c,Bo),kr.subVectors(va,_a),Br.subVectors(xa,va),Ss.subVectors(_a,xa);let t=[0,-kr.z,kr.y,0,-Br.z,Br.y,0,-Ss.z,Ss.y,kr.z,0,-kr.x,Br.z,0,-Br.x,Ss.z,0,-Ss.x,-kr.y,kr.x,0,-Br.y,Br.x,0,-Ss.y,Ss.x,0];return!Md(t,_a,va,xa,Pu)||(t=[1,0,0,0,1,0,0,0,1],!Md(t,_a,va,xa,Pu))?!1:(Lu.crossVectors(kr,Br),t=[Lu.x,Lu.y,Lu.z],Md(t,_a,va,xa,Pu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new $,new $,new $,new $,new $,new $,new $,new $],wi=new $,Ru=new sa,_a=new $,va=new $,xa=new $,kr=new $,Br=new $,Ss=new $,Bo=new $,Pu=new $,Lu=new $,Ms=new $;function Md(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ms.fromArray(n,s);const o=r.x*Math.abs(Ms.x)+r.y*Math.abs(Ms.y)+r.z*Math.abs(Ms.z),l=e.dot(Ms),u=t.dot(Ms),c=i.dot(Ms);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Ht=new $,Du=new et;let iA=0;class ji extends ra{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ob,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Du.fromBufferAttribute(this,t),Du.applyMatrix3(e),this.setXY(t,Du.x,Du.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Oo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),r=Rn(r,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class vS extends ji{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xS extends ji{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yr extends ji{constructor(e,t,i){super(new Float32Array(e),t,i)}}const rA=new sa,zo=new $,Ed=new $;class eu{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const t=zo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Ed)),this.expandByPoint(zo.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sA=0;const oi=new Mt,wd=new on,ya=new $,Hn=new sa,Vo=new sa,Qt=new $;class Rr extends ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sA++}),this.uuid=Jl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kb(e)?xS:vS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ya).negate(),this.translate(ya.x,ya.y,ya.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vo.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Hn.min,Vo.min),Hn.expandByPoint(Qt),Qt.addVectors(Hn.max,Vo.max),Hn.expandByPoint(Qt)):(Hn.expandByPoint(Vo.min),Hn.expandByPoint(Vo.max))}Hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Qt.fromBufferAttribute(o,u),l&&(ya.fromBufferAttribute(e,u),Qt.add(ya)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ji(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new $,l[y]=new $;const u=new $,c=new $,d=new $,f=new et,p=new et,_=new et,g=new $,m=new $;function h(y,b,C){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,C),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,C),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(D),o[y].add(g),o[b].add(g),o[C].add(g),l[y].add(m),l[b].add(m),l[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,b=v.length;y<b;++y){const C=v[y],D=C.start,N=C.count;for(let k=D,L=D+N;k<L;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new $,x=new $,M=new $,w=new $;function A(y){M.fromBufferAttribute(r,y),w.copy(M);const b=o[y];S.copy(b),S.sub(M.multiplyScalar(M.dot(b))).normalize(),x.crossVectors(w,b);const D=x.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,D)}for(let y=0,b=v.length;y<b;++y){const C=v[y],D=C.start,N=C.count;for(let k=D,L=D+N;k<L;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ji(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,u=new $,c=new $,d=new $;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,d=o.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new ji(f,c,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Td=new $,aA=new $,oA=new Be;class Wr{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Td.subVectors(i,t).cross(aA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Td),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||oA.getNormalMatrix(e),r=this.coplanarPoint(Td).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let lA=0;class tu extends ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lA++}),this.uuid=Jl(),this.name="",this.type="Material",this.blending=cl,this.side=Ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jy,this.blendDst=Qy,this.blendEquation=ba,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sd,this.stencilZFail=sd,this.stencilZPass=sd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Wr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const lr=new $,bd=new $,Nu=new $,Iu=new $;class uA{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bd.copy(e).add(t).multiplyScalar(.5),Nu.copy(t).sub(e).normalize(),Iu.copy(this.origin).sub(bd);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Nu),o=Iu.dot(this.direction),l=-Iu.dot(Nu),u=Iu.lengthSq(),c=Math.abs(1-a*a);let d,f,p,_;if(c>0)if(d=a*l-o,f=a*o-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const g=1/c;d*=g,f*=g,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(bd).addScaledVector(Nu,f),p}intersectSphere(e,t){if(e.radius<0)return null;lr.subVectors(e.center,this.origin);const i=lr.dot(this.direction),r=lr.dot(lr)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,u=o.y,c=o.z,d=e.x-a.x,f=e.y-a.y,p=e.z-a.z,_=t.x-a.x,g=t.y-a.y,m=t.z-a.z,h=i.x-a.x,v=i.y-a.y,S=i.z-a.z,x=Math.abs(l),M=Math.abs(u),w=Math.abs(c);let A,y,b,C,D,N,k,L,B,q,X,F;if(x>=M&&x>=w?(b=l,N=d,B=_,F=h,l>=0?(A=u,y=c,C=f,D=p,k=g,L=m,q=v,X=S):(A=c,y=u,C=p,D=f,k=m,L=g,q=S,X=v)):M>=w?(b=u,N=f,B=g,F=v,u>=0?(A=c,y=l,C=p,D=d,k=m,L=_,q=S,X=h):(A=l,y=c,C=d,D=p,k=_,L=m,q=h,X=S)):(b=c,N=p,B=m,F=S,c>=0?(A=l,y=u,C=d,D=f,k=_,L=g,q=h,X=v):(A=u,y=l,C=f,D=d,k=g,L=_,q=v,X=h)),b===0)return null;const O=A/b,G=y/b,K=1/b,fe=C-O*N,Ee=D-G*N,Ne=k-O*B,Ie=L-G*B,ke=q-O*F,j=X-G*F,ie=ke*Ie-j*Ne,we=fe*j-Ee*ke,Ue=Ne*Ee-Ie*fe;if(r){if(ie<0||we<0||Ue<0)return null}else if((ie<0||we<0||Ue<0)&&(ie>0||we>0||Ue>0))return null;const he=ie+we+Ue;if(he===0)return null;const ze=K*(ie*N+we*B+Ue*F);return(he>0?ze<0:ze>0)?null:this.at(ze/he,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class li extends tu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=Jy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _0=new Mt,Es=new uA,Uu=new eu,v0=new $,Fu=new $,Ou=new $,ku=new $,Ad=new $,Bu=new $,x0=new $,zu=new $;class bt extends on{constructor(e=new Rr,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Bu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],d=s[l];c!==0&&(Ad.fromBufferAttribute(d,e),a?Bu.addScaledVector(Ad,c):Bu.addScaledVector(Ad.sub(t),c))}t.add(Bu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uu.copy(i.boundingSphere),Uu.applyMatrix4(s),Es.copy(e.ray).recast(e.near),!(Uu.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Uu,v0)===null||Es.origin.distanceToSquared(v0)>(e.far-e.near)**2))&&(_0.copy(s).invert(),Es.copy(e.ray).applyMatrix4(_0),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,M=S;x<M;x+=3){const w=o.getX(x),A=o.getX(x+1),y=o.getX(x+2);r=Vu(this,h,e,i,u,c,d,w,A,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);r=Vu(this,a,e,i,u,c,d,v,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,M=S;x<M;x+=3){const w=x,A=x+1,y=x+2;r=Vu(this,h,e,i,u,c,d,w,A,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=m,S=m+1,x=m+2;r=Vu(this,a,e,i,u,c,d,v,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function cA(n,e,t,i,r,s,a,o){let l;if(e.side===Fn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ks,o),l===null)return null;zu.copy(o),zu.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(zu);return u<t.near||u>t.far?null:{distance:u,point:zu.clone(),object:n}}function Vu(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,Fu),n.getVertexPosition(l,Ou),n.getVertexPosition(u,ku);const c=cA(n,e,t,i,Fu,Ou,ku,x0);if(c){const d=new $;Pi.getBarycoord(x0,Fu,Ou,ku,d),r&&(c.uv=Pi.getInterpolatedAttribute(r,o,l,u,d,new et)),s&&(c.uv1=Pi.getInterpolatedAttribute(s,o,l,u,d,new et)),a&&(c.normal=Pi.getInterpolatedAttribute(a,o,l,u,d,new $),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new $,materialIndex:0};Pi.getNormal(Fu,Ou,ku,f.normal),c.face=f,c.barycoord=d}return c}class yS extends vn{constructor(e=null,t=1,i=1,r,s,a,o,l,u=sn,c=sn,d,f){super(null,a,o,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class y0 extends ji{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sa=new Mt,S0=new Mt,Gu=[],M0=new sa,fA=new Mt,Go=new bt,Ho=new eu;class dA extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new y0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,fA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sa),M0.copy(e.boundingBox).applyMatrix4(Sa),this.boundingBox.union(M0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new eu),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sa),Ho.copy(e.boundingSphere).applyMatrix4(Sa),this.boundingSphere.union(Ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Go.geometry=this.geometry,Go.material=this.material,Go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(i),e.ray.intersectsSphere(Ho)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Sa),S0.multiplyMatrices(i,Sa),Go.matrixWorld=S0,Go.raycast(e,Gu);for(let a=0,o=Gu.length;a<o;a++){const l=Gu[a];l.instanceId=s,l.object=this,t.push(l)}Gu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new y0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new yS(new Float32Array(r*this.count),r,this.count,$m,Li));const s=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ws=new eu,hA=new et(.5,.5),Hu=new $;class tg{constructor(e=new Wr,t=new Wr,i=new Wr,r=new Wr,s=new Wr,a=new Wr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],p=s[7],_=s[8],g=s[9],m=s[10],h=s[11],v=s[12],S=s[13],x=s[14],M=s[15];if(r[0].setComponents(u-a,p-c,h-_,M-v).normalize(),r[1].setComponents(u+a,p+c,h+_,M+v).normalize(),r[2].setComponents(u+o,p+d,h+g,M+S).normalize(),r[3].setComponents(u-o,p-d,h-g,M-S).normalize(),i)r[4].setComponents(l,f,m,x).normalize(),r[5].setComponents(u-l,p-f,h-m,M-x).normalize();else if(r[4].setComponents(u-l,p-f,h-m,M-x).normalize(),t===Yi)r[5].setComponents(u+l,p+f,h+m,M+x).normalize();else if(t===Ol)r[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const t=hA.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Hu.x=r.normal.x>0?e.max.x:e.min.x,Hu.y=r.normal.y>0?e.max.y:e.min.y,Hu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class SS extends vn{constructor(e=[],t=Zs,i,r,s,a,o,l,u,c){super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E0 extends vn{constructor(e,t,i,r,s,a,o,l,u){super(e,t,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kl extends vn{constructor(e,t,i=Qi,r,s,a,o=sn,l=sn,u,c=Tr,d=1){if(c!==Tr&&c!==Us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class pA extends kl{constructor(e,t=Qi,i=Zs,r,s,a=sn,o=sn,l,u=Tr){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,r,s,a,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class MS extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qs extends Rr{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yr(u,3)),this.setAttribute("normal",new yr(c,3)),this.setAttribute("uv",new yr(d,2));function _(g,m,h,v,S,x,M,w,A,y,b){const C=x/A,D=M/y,N=x/2,k=M/2,L=w/2,B=A+1,q=y+1;let X=0,F=0;const O=new $;for(let G=0;G<q;G++){const K=G*D-k;for(let fe=0;fe<B;fe++){const Ee=fe*C-N;O[g]=Ee*v,O[m]=K*S,O[h]=L,u.push(O.x,O.y,O.z),O[g]=0,O[m]=0,O[h]=w>0?1:-1,c.push(O.x,O.y,O.z),d.push(fe/A),d.push(1-G/y),X+=1}}for(let G=0;G<y;G++)for(let K=0;K<A;K++){const fe=f+K+B*G,Ee=f+K+B*(G+1),Ne=f+(K+1)+B*(G+1),Ie=f+(K+1)+B*G;l.push(fe,Ee,Ie),l.push(Ee,Ne,Ie),F+=6}o.addGroup(p,F,b),p+=F,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wn extends Rr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,d=e/o,f=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<c;h++){const v=h*f-a;for(let S=0;S<u;S++){const x=S*d-s;_.push(x,-v,0),g.push(0,0,1),m.push(S/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const S=v+u*h,x=v+u*(h+1),M=v+1+u*(h+1),w=v+1+u*h;p.push(S,x,w),p.push(x,M,w)}this.setIndex(p),this.setAttribute("position",new yr(_,3)),this.setAttribute("normal",new yr(g,3)),this.setAttribute("uv",new yr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}function uo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(w0(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(w0(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function wn(n){const e={};for(let t=0;t<n.length;t++){const i=uo(n[t]);for(const r in i)e[r]=i[r]}return e}function w0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function mA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ES(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const gA={clone:uo,merge:wn};var _A=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends tu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_A,this.fragmentShader=vA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=mA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new We().setHex(r.value);break;case"v2":this.uniforms[i].value=new et().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xA extends er{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cd extends tu{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rp,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yA extends tu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SA extends tu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ng extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Rd=new Mt,T0=new $,b0=new $;class wS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tg,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;T0.setFromMatrixPosition(e.matrixWorld),t.position.copy(T0),b0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(b0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Rd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Rd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Ol||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wu=new $,Xu=new Eo,Bi=new $;class TS extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wu,Xu,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wu,Xu,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Wu,Xu,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wu,Xu,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zr=new $,A0=new et,C0=new et;class qn extends TS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pp*2*Math.atan(Math.tan(ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,A0,C0),t.subVectors(C0,A0)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ad*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class MA extends wS{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class EA extends ng{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new MA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ig extends TS{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wA extends wS{constructor(){super(new ig(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pd extends ng{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new wA}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class TA extends ng{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ma=-90,Ea=1;class bA extends on{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(Ma,Ea,e,t);r.layers=this.layers,this.add(r);const s=new qn(Ma,Ea,e,t);s.layers=this.layers,this.add(s);const a=new qn(Ma,Ea,e,t);a.layers=this.layers,this.add(a);const o=new qn(Ma,Ea,e,t);o.layers=this.layers,this.add(o);const l=new qn(Ma,Ea,e,t);l.layers=this.layers,this.add(l);const u=new qn(Ma,Ea,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class AA extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bg=class bg{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};bg.prototype.isMatrix2=!0;let R0=bg;function P0(n,e,t,i){const r=CA(i);switch(t){case dS:return n*e;case $m:return n*e/r.components*r.byteLength;case Km:return n*e/r.components*r.byteLength;case js:return n*e*2/r.components*r.byteLength;case Zm:return n*e*2/r.components*r.byteLength;case hS:return n*e*3/r.components*r.byteLength;case Di:return n*e*4/r.components*r.byteLength;case jm:return n*e*4/r.components*r.byteLength;case lc:case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cc:case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ep:case np:return Math.max(n,16)*Math.max(e,8)/4;case Jh:case tp:return Math.max(n,8)*Math.max(e,8)/2;case ip:case rp:case ap:case op:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sp:case Wc:case lp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _p:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ep:case wp:case Tp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bp:case Ap:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xc:case Cp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CA(n){switch(n){case $n:case lS:return{byteLength:1,components:1};case Ul:case uS:case Ji:return{byteLength:2,components:1};case Ym:case qm:return{byteLength:2,components:4};case Qi:case Xm:case Li:return{byteLength:4,components:1};case cS:case fS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wm}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bS(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function RA(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,o),d.length===0)n.bufferSubData(u,0,c);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],g=d[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const g=d[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var PA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,BA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,QA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,JA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,nC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aC="gl_FragColor = linearToOutputTexel( gl_FragColor );",oC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,uC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_C=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,MC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,EC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,NC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$C=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,JC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,aR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_R=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ER=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$R=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:PA,alphahash_pars_fragment:LA,alphamap_fragment:DA,alphamap_pars_fragment:NA,alphatest_fragment:IA,alphatest_pars_fragment:UA,aomap_fragment:FA,aomap_pars_fragment:OA,batching_pars_vertex:kA,batching_vertex:BA,begin_vertex:zA,beginnormal_vertex:VA,bsdfs:GA,iridescence_fragment:HA,bumpmap_pars_fragment:WA,clipping_planes_fragment:XA,clipping_planes_pars_fragment:YA,clipping_planes_pars_vertex:qA,clipping_planes_vertex:$A,color_fragment:KA,color_pars_fragment:ZA,color_pars_vertex:jA,color_vertex:QA,common:JA,cube_uv_reflection_fragment:eC,defaultnormal_vertex:tC,displacementmap_pars_vertex:nC,displacementmap_vertex:iC,emissivemap_fragment:rC,emissivemap_pars_fragment:sC,colorspace_fragment:aC,colorspace_pars_fragment:oC,envmap_fragment:lC,envmap_common_pars_fragment:uC,envmap_pars_fragment:cC,envmap_pars_vertex:fC,envmap_physical_pars_fragment:MC,envmap_vertex:dC,fog_vertex:hC,fog_pars_vertex:pC,fog_fragment:mC,fog_pars_fragment:gC,gradientmap_pars_fragment:_C,lightmap_pars_fragment:vC,lights_lambert_fragment:xC,lights_lambert_pars_fragment:yC,lights_pars_begin:SC,lights_toon_fragment:EC,lights_toon_pars_fragment:wC,lights_phong_fragment:TC,lights_phong_pars_fragment:bC,lights_physical_fragment:AC,lights_physical_pars_fragment:CC,lights_fragment_begin:RC,lights_fragment_maps:PC,lights_fragment_end:LC,lightprobes_pars_fragment:DC,logdepthbuf_fragment:NC,logdepthbuf_pars_fragment:IC,logdepthbuf_pars_vertex:UC,logdepthbuf_vertex:FC,map_fragment:OC,map_pars_fragment:kC,map_particle_fragment:BC,map_particle_pars_fragment:zC,metalnessmap_fragment:VC,metalnessmap_pars_fragment:GC,morphinstance_vertex:HC,morphcolor_vertex:WC,morphnormal_vertex:XC,morphtarget_pars_vertex:YC,morphtarget_vertex:qC,normal_fragment_begin:$C,normal_fragment_maps:KC,normal_pars_fragment:ZC,normal_pars_vertex:jC,normal_vertex:QC,normalmap_pars_fragment:JC,clearcoat_normal_fragment_begin:eR,clearcoat_normal_fragment_maps:tR,clearcoat_pars_fragment:nR,iridescence_pars_fragment:iR,opaque_fragment:rR,packing:sR,premultiplied_alpha_fragment:aR,project_vertex:oR,dithering_fragment:lR,dithering_pars_fragment:uR,roughnessmap_fragment:cR,roughnessmap_pars_fragment:fR,shadowmap_pars_fragment:dR,shadowmap_pars_vertex:hR,shadowmap_vertex:pR,shadowmask_pars_fragment:mR,skinbase_vertex:gR,skinning_pars_vertex:_R,skinning_vertex:vR,skinnormal_vertex:xR,specularmap_fragment:yR,specularmap_pars_fragment:SR,tonemapping_fragment:MR,tonemapping_pars_fragment:ER,transmission_fragment:wR,transmission_pars_fragment:TR,uv_pars_fragment:bR,uv_pars_vertex:AR,uv_vertex:CR,worldpos_vertex:RR,background_vert:PR,background_frag:LR,backgroundCube_vert:DR,backgroundCube_frag:NR,cube_vert:IR,cube_frag:UR,depth_vert:FR,depth_frag:OR,distance_vert:kR,distance_frag:BR,equirect_vert:zR,equirect_frag:VR,linedashed_vert:GR,linedashed_frag:HR,meshbasic_vert:WR,meshbasic_frag:XR,meshlambert_vert:YR,meshlambert_frag:qR,meshmatcap_vert:$R,meshmatcap_frag:KR,meshnormal_vert:ZR,meshnormal_frag:jR,meshphong_vert:QR,meshphong_frag:JR,meshphysical_vert:eP,meshphysical_frag:tP,meshtoon_vert:nP,meshtoon_frag:iP,points_vert:rP,points_frag:sP,shadow_vert:aP,shadow_frag:oP,sprite_vert:lP,sprite_frag:uP},ve={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Hi={basic:{uniforms:wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:wn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:wn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:wn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new We(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:wn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:wn([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:wn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:wn([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:wn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:wn([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:wn([ve.common,ve.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:wn([ve.lights,ve.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Hi.physical={uniforms:wn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Yu={r:0,b:0,g:0},cP=new Mt,AS=new Be;AS.set(-1,0,0,0,1,0,0,0,1);function fP(n,e,t,i,r,s){const a=new We(0);let o=r===!0?0:1,l,u,c=null,d=0,f=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const x=v.backgroundBlurriness>0;S=e.get(S,x)}return S}function _(v){let S=!1;const x=p(v);x===null?m(a,o):x&&x.isColor&&(m(x,1),S=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,S){const x=p(S);x&&(x.isCubeTexture||x.mapping===Mf)?(u===void 0&&(u=new bt(new Qs(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:uo(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cP.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(AS),u.material.toneMapped=je.getTransfer(x.colorSpace)!==ot,(c!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new bt(new Wn(2,2),new er({name:"BackgroundMaterial",uniforms:uo(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(Yu,ES(n)),t.buffers.color.setClear(Yu.r,Yu.g,Yu.b,S,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:_,addToRenderList:g,dispose:h}}function dP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(D,N,k,L,B){let q=!1;const X=d(D,L,k,N);s!==X&&(s=X,u(s.object)),q=p(D,L,k,B),q&&_(D,L,k,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(D,N,k,L),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function u(D){return n.bindVertexArray(D)}function c(D){return n.deleteVertexArray(D)}function d(D,N,k,L){const B=L.wireframe===!0;let q=i[N.id];q===void 0&&(q={},i[N.id]=q);const X=D.isInstancedMesh===!0?D.id:0;let F=q[X];F===void 0&&(F={},q[X]=F);let O=F[k.id];O===void 0&&(O={},F[k.id]=O);let G=O[B];return G===void 0&&(G=f(l()),O[B]=G),G}function f(D){const N=[],k=[],L=[];for(let B=0;B<t;B++)N[B]=0,k[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:L,object:D,attributes:{},index:null}}function p(D,N,k,L){const B=s.attributes,q=N.attributes;let X=0;const F=k.getAttributes();for(const O in F)if(F[O].location>=0){const K=B[O];let fe=q[O];if(fe===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),K===void 0||K.attribute!==fe||fe&&K.data!==fe.data)return!0;X++}return s.attributesNum!==X||s.index!==L}function _(D,N,k,L){const B={},q=N.attributes;let X=0;const F=k.getAttributes();for(const O in F)if(F[O].location>=0){let K=q[O];K===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const fe={};fe.attribute=K,K&&K.data&&(fe.data=K.data),B[O]=fe,X++}s.attributes=B,s.attributesNum=X,s.index=L}function g(){const D=s.newAttributes;for(let N=0,k=D.length;N<k;N++)D[N]=0}function m(D){h(D,0)}function h(D,N){const k=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;k[D]=1,L[D]===0&&(n.enableVertexAttribArray(D),L[D]=1),B[D]!==N&&(n.vertexAttribDivisor(D,N),B[D]=N)}function v(){const D=s.newAttributes,N=s.enabledAttributes;for(let k=0,L=N.length;k<L;k++)N[k]!==D[k]&&(n.disableVertexAttribArray(k),N[k]=0)}function S(D,N,k,L,B,q,X){X===!0?n.vertexAttribIPointer(D,N,k,B,q):n.vertexAttribPointer(D,N,k,L,B,q)}function x(D,N,k,L){g();const B=L.attributes,q=k.getAttributes(),X=N.defaultAttributeValues;for(const F in q){const O=q[F];if(O.location>=0){let G=B[F];if(G===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),G!==void 0){const K=G.normalized,fe=G.itemSize,Ee=e.get(G);if(Ee===void 0)continue;const Ne=Ee.buffer,Ie=Ee.type,ke=Ee.bytesPerElement,j=Ie===n.INT||Ie===n.UNSIGNED_INT||G.gpuType===Xm;if(G.isInterleavedBufferAttribute){const ie=G.data,we=ie.stride,Ue=G.offset;if(ie.isInstancedInterleavedBuffer){for(let he=0;he<O.locationSize;he++)h(O.location+he,ie.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<O.locationSize;he++)m(O.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let he=0;he<O.locationSize;he++)S(O.location+he,fe/O.locationSize,Ie,K,we*ke,(Ue+fe/O.locationSize*he)*ke,j)}else{if(G.isInstancedBufferAttribute){for(let ie=0;ie<O.locationSize;ie++)h(O.location+ie,G.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ie=0;ie<O.locationSize;ie++)m(O.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let ie=0;ie<O.locationSize;ie++)S(O.location+ie,fe/O.locationSize,Ie,K,fe*ke,fe/O.locationSize*ie*ke,j)}}else if(X!==void 0){const K=X[F];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(O.location,K);break;case 3:n.vertexAttrib3fv(O.location,K);break;case 4:n.vertexAttrib4fv(O.location,K);break;default:n.vertexAttrib1fv(O.location,K)}}}}v()}function M(){b();for(const D in i){const N=i[D];for(const k in N){const L=N[k];for(const B in L){const q=L[B];for(const X in q)c(q[X].object),delete q[X];delete L[B]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const N=i[D.id];for(const k in N){const L=N[k];for(const B in L){const q=L[B];for(const X in q)c(q[X].object),delete q[X];delete L[B]}}delete i[D.id]}function A(D){for(const N in i){const k=i[N];for(const L in k){const B=k[L];if(B[D.id]===void 0)continue;const q=B[D.id];for(const X in q)c(q[X].object),delete q[X];delete B[D.id]}}}function y(D){for(const N in i){const k=i[N],L=D.isInstancedMesh===!0?D.id:0,B=k[L];if(B!==void 0){for(const q in B){const X=B[q];for(const F in X)c(X[F].object),delete X[F];delete B[q]}delete k[L],Object.keys(k).length===0&&delete i[N]}}}function b(){C(),a=!0,s!==r&&(s=r,u(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function hP(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function o(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function pP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Di&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==$n&&A!==Li&&!y&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(Oe("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:M,samples:w}}function mP(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Wr,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,S=v*4;let x=h.clippingState||null;l.value=x,x=c(_,f,S,p);for(let M=0;M!==S;++M)x[M]=t[M];h.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,x=p;S!==g;++S,x+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}const Ba=4,gP=6,_P=20,vP=256,Wo=new ig,L0=new We;let Ld=null,Dd=0,Nd=0,Id=!1;const xP=new $,Ts=new $;class D0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=xP}=s;Ld=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Dd,Nd),this._renderer.xr.enabled=Id,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ji,format:Di,colorSpace:Yc,depthBuffer:!1},r=N0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N0(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yP(s)),this._blurMaterial=MP(s,e,t),this._ggxMaterial=SP(s,e,t)}return r}_compileMaterial(e){const t=new bt(new Rr,e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,i,r,s){const l=new qn(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(L0),d.toneMapping=Zi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new Qs,new li({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let h=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,h=!0):(m.color.copy(L0),h=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[S],s.y,s.z)):x===1?(l.up.set(0,0,u[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[S],s.z)):(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[S]));const M=this._cubeSize;wa(r,x*M,S>2?M:0,M,M),d.setRenderTarget(r),h&&d.render(g,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zs||e.mapping===lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=U0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;wa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Wo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=u*1.25,p=d*f,{_lodMax:_}=this,g=this._sizeLods[i],m=3*g*(i>_-Ba?i-_+Ba:0),h=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,wa(s,m,h,3*g,2*g),r.setRenderTarget(s),r.render(o,Wo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,wa(e,m,h,3*g,2*g),r.setRenderTarget(e),r.render(o,Wo)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const c=this._sizeLods[r],d=3*c*(r>this._lodMax-Ba?r-this._lodMax+Ba:0),f=4*(this._cubeSize-c);wa(t,d,f,3*c,2*c),a.setRenderTarget(t),a.render(l,Wo)}}function yP(n){const e=[],t=[];let i=n;const r=n-Ba+1+gP;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,u=1+o,c=[l,l,u,l,u,u,l,l,u,u,l,u],d=6,f=6,p=3,_=new Float32Array(p*f*d),g=new Float32Array(p*f*d);for(let h=0;h<d;h++){const v=h%3*2/3-1,S=h>2?0:-1,x=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];_.set(x,p*f*h);for(let M=0;M<f;M++){const w=c[M*2]*2-1,A=c[M*2+1]*2-1;h===0?Ts.set(1,A,w):h===1?Ts.set(-w,1,-A):h===2?Ts.set(-w,A,1):h===3?Ts.set(-1,A,-w):h===4?Ts.set(-w,-1,A):Ts.set(w,A,-1),Ts.toArray(g,(h*f+M)*p)}}const m=new Rr;m.setAttribute("position",new ji(_,p)),m.setAttribute("outputDirection",new ji(g,p)),t.push(new bt(m,null)),i>Ba&&i--}return{lodMeshes:t,sizeLods:e}}function N0(n,e,t){const i=new Ui(n,e,t);return i.texture.mapping=Mf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function SP(n,e,t){return new er({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ef(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function MP(n,e,t){return new er({name:"SphericalGaussianBlur",defines:{SAMPLES:_P,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ef(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function I0(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function U0(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Ef(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class CS extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new SS(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qs(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:vr});s.uniforms.tEquirect.value=t;const a=new bt(r,s),o=t.minFilter;return t.minFilter===Is&&(t.minFilter=Yt),new bA(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function EP(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===nd||p===id)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const g=new CS(_.height);return g.fromEquirectangularTexture(n,f),e.set(f,g),f.addEventListener("dispose",u),o(g.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,_=p===nd||p===id,g=p===Zs||p===lo;if(_||g){let m=t.get(f);const h=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new D0(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const v=f.image;return _&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new D0(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function o(f,p){return p===nd?f.mapping=Zs:p===id&&(f.mapping=lo),f}function l(f){let p=0;const _=6;for(let g=0;g<_;g++)f[g]!==void 0&&p++;return p===_}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function wP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Za("WebGLRenderer: "+i+" extension not supported."),r}}}function TP(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(_===void 0)return;if(p!==null){const v=p.array;g=p.version;for(let S=0,x=v.length;S<x;S+=3){const M=v[S+0],w=v[S+1],A=v[S+2];f.push(M,w,w,A,A,M)}}else{const v=_.array;g=_.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const M=S+0,w=S+1,A=S+2;f.push(M,w,w,A,A,M)}}const m=new(_.count>=65535?xS:vS)(f,1);m.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function bP(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function u(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,d*a,p),t.update(f,i,p))}function c(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function AP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function CP(n,e,t){const i=new WeakMap,r=new Pt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let b=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let x=o.attributes.position.count*S,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*M*4*d),A=new mS(w,x,M,d);A.type=Li,A.needsUpdate=!0;const y=S*4;for(let C=0;C<d;C++){const D=m[C],N=h[C],k=v[C],L=x*M*4*C;for(let B=0;B<D.count;B++){const q=B*y;p===!0&&(r.fromBufferAttribute(D,B),w[L+q+0]=r.x,w[L+q+1]=r.y,w[L+q+2]=r.z,w[L+q+3]=0),_===!0&&(r.fromBufferAttribute(N,B),w[L+q+4]=r.x,w[L+q+5]=r.y,w[L+q+6]=r.z,w[L+q+7]=0),g===!0&&(r.fromBufferAttribute(k,B),w[L+q+8]=r.x,w[L+q+9]=r.y,w[L+q+10]=r.z,w[L+q+11]=k.itemSize===4?r.w:1)}}f={count:d,texture:A,size:new et(x,M)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<u.length;g++)p+=u[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function RP(n,e,t,i,r){let s=new WeakMap;function a(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const PP={[eS]:"LINEAR_TONE_MAPPING",[tS]:"REINHARD_TONE_MAPPING",[nS]:"CINEON_TONE_MAPPING",[iS]:"ACES_FILMIC_TONE_MAPPING",[sS]:"AGX_TONE_MAPPING",[aS]:"NEUTRAL_TONE_MAPPING",[rS]:"CUSTOM_TONE_MAPPING"};function LP(n,e,t,i,r,s){const a=new Ui(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const u=new Rr;u.setAttribute("position",new yr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new yr([0,2,0,0,2,0],2));const c=new xA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new bt(u,c),f=new ig(-1,1,1,-1,0,1);let p=null,_=null,g=!1,m,h=null,v=[],S=!1;this.setSize=function(x,M){a.setSize(x,M),o!==null&&o.setSize(x,M),l!==null&&l.setSize(x,M);for(let w=0;w<v.length;w++){const A=v[w];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){v=x,S=v.length>0&&v[0].isRenderPass===!0;const M=a.width,w=a.height;v.length>0&&o===null&&(o=new Ui(M,w,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),l=new Ui(M,w,{type:Ji,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){const y=v[A];y.setSize&&y.setSize(M,w)}},this.begin=function(x,M){if(g||x.toneMapping===Zi&&v.length===0)return!1;if(h=M,M!==null){const w=M.width,A=M.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return S===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Zi,!0},this.hasRenderPass=function(){return S},this.end=function(x,M){x.toneMapping=m,g=!0;let w=a,A=o;for(let y=0;y<v.length;y++){const b=v[y];b.enabled!==!1&&(b.render(x,A,w,M),b.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(p!==x.outputColorSpace||_!==x.toneMapping){p=x.outputColorSpace,_=x.toneMapping,c.defines={},je.getTransfer(p)===ot&&(c.defines.SRGB_TRANSFER="");const y=PP[_];y&&(c.defines[y]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(h),x.render(d,f),h=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),c.dispose()}}const RS=new vn,Lp=new kl(1,1),PS=new mS,LS=new $b,DS=new SS,F0=[],O0=[],k0=new Float32Array(16),B0=new Float32Array(9),z0=new Float32Array(4);function wo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=F0[r];if(s===void 0&&(s=new Float32Array(r),F0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wf(n,e){let t=O0[e];t===void 0&&(t=new Int32Array(e),O0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function DP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function NP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function IP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function UP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function FP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,i))return;z0.set(i),n.uniformMatrix2fv(this.addr,!1,z0),jt(t,i)}}function OP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,i))return;B0.set(i),n.uniformMatrix3fv(this.addr,!1,B0),jt(t,i)}}function kP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,i))return;k0.set(i),n.uniformMatrix4fv(this.addr,!1,k0),jt(t,i)}}function BP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function VP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function GP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function HP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function WP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function XP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function YP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function qP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Lp.compareFunction=t.isReversedDepthBuffer()?Jm:Qm,s=Lp):s=RS,t.setTexture2D(e||s,r)}function $P(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||LS,r)}function KP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||DS,r)}function ZP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||PS,r)}function jP(n){switch(n){case 5126:return DP;case 35664:return NP;case 35665:return IP;case 35666:return UP;case 35674:return FP;case 35675:return OP;case 35676:return kP;case 5124:case 35670:return BP;case 35667:case 35671:return zP;case 35668:case 35672:return VP;case 35669:case 35673:return GP;case 5125:return HP;case 36294:return WP;case 36295:return XP;case 36296:return YP;case 35678:case 36198:case 36298:case 36306:case 35682:return qP;case 35679:case 36299:case 36307:return $P;case 35680:case 36300:case 36308:case 36293:return KP;case 36289:case 36303:case 36311:case 36292:return ZP}}function QP(n,e){n.uniform1fv(this.addr,e)}function JP(n,e){const t=wo(e,this.size,2);n.uniform2fv(this.addr,t)}function e2(n,e){const t=wo(e,this.size,3);n.uniform3fv(this.addr,t)}function t2(n,e){const t=wo(e,this.size,4);n.uniform4fv(this.addr,t)}function n2(n,e){const t=wo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function i2(n,e){const t=wo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function r2(n,e){const t=wo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function s2(n,e){n.uniform1iv(this.addr,e)}function a2(n,e){n.uniform2iv(this.addr,e)}function o2(n,e){n.uniform3iv(this.addr,e)}function l2(n,e){n.uniform4iv(this.addr,e)}function u2(n,e){n.uniform1uiv(this.addr,e)}function c2(n,e){n.uniform2uiv(this.addr,e)}function f2(n,e){n.uniform3uiv(this.addr,e)}function d2(n,e){n.uniform4uiv(this.addr,e)}function h2(n,e,t){const i=this.cache,r=e.length,s=wf(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Lp:a=RS;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function p2(n,e,t){const i=this.cache,r=e.length,s=wf(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||LS,s[a])}function m2(n,e,t){const i=this.cache,r=e.length,s=wf(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||DS,s[a])}function g2(n,e,t){const i=this.cache,r=e.length,s=wf(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||PS,s[a])}function _2(n){switch(n){case 5126:return QP;case 35664:return JP;case 35665:return e2;case 35666:return t2;case 35674:return n2;case 35675:return i2;case 35676:return r2;case 5124:case 35670:return s2;case 35667:case 35671:return a2;case 35668:case 35672:return o2;case 35669:case 35673:return l2;case 5125:return u2;case 36294:return c2;case 36295:return f2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return p2;case 35680:case 36300:case 36308:case 36293:return m2;case 36289:case 36303:case 36311:case 36292:return g2}}class v2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jP(t.type)}}class x2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_2(t.type)}}class y2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function V0(n,e){n.seq.push(e),n.map[e.id]=e}function S2(n,e,t){const i=n.name,r=i.length;for(Ud.lastIndex=0;;){const s=Ud.exec(i),a=Ud.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){V0(t,u===void 0?new v2(o,n,e):new x2(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new y2(o),V0(t,d)),t=d}}}class dc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);S2(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function G0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const M2=37297;let E2=0;function w2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const H0=new Be;function T2(n){je._getMatrix(H0,je.workingColorSpace,n);const e=`mat3( ${H0.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case qc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function W0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+w2(n.getShaderSource(e),o)}else return s}function b2(n,e){const t=T2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const A2={[eS]:"Linear",[tS]:"Reinhard",[nS]:"Cineon",[iS]:"ACESFilmic",[sS]:"AgX",[aS]:"Neutral",[rS]:"Custom"};function C2(n,e){const t=A2[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qu=new $;function R2(){je.getLuminanceCoefficients(qu);const n=qu.x.toFixed(4),e=qu.y.toFixed(4),t=qu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function L2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function D2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Qo(n){return n!==""}function X0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(n){return n.replace(N2,U2)}const I2=new Map;function U2(n,e){let t=He[e];if(t===void 0){const i=I2.get(e);if(i!==void 0)t=He[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dp(t)}const F2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q0(n){return n.replace(F2,O2)}function O2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const k2={[oc]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function B2(n){return k2[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const z2={[Zs]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE",[Mf]:"ENVMAP_TYPE_CUBE_UV"};function V2(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":z2[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const G2={[lo]:"ENVMAP_MODE_REFRACTION"};function H2(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":G2[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const W2={[Jy]:"ENVMAP_BLENDING_MULTIPLY",[Tb]:"ENVMAP_BLENDING_MIX",[bb]:"ENVMAP_BLENDING_ADD"};function X2(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":W2[n.combine]||"ENVMAP_BLENDING_NONE"}function Y2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function q2(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=B2(t),u=V2(t),c=H2(t),d=X2(t),f=Y2(t),p=P2(t),_=L2(s),g=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qo).join(`
`),h.length>0&&(h+=`
`)):(m=[$0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),h=[$0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?He.tonemapping_pars_fragment:"",t.toneMapping!==Zi?C2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,b2("linearToOutputTexel",t.outputColorSpace),R2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),a=Dp(a),a=X0(a,t),a=Y0(a,t),o=Dp(o),o=X0(o,t),o=Y0(o,t),a=q0(a),o=q0(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=v+m+a,x=v+h+o,M=G0(r,r.VERTEX_SHADER,S),w=G0(r,r.FRAGMENT_SHADER,x);r.attachShader(g,M),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(D){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(g)||"",k=r.getShaderInfoLog(M)||"",L=r.getShaderInfoLog(w)||"",B=N.trim(),q=k.trim(),X=L.trim();let F=!0,O=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,M,w);else{const G=W0(r,M,"vertex"),K=W0(r,w,"fragment");it("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+G+`
`+K)}else B!==""?Oe("WebGLProgram: Program Info Log:",B):(q===""||X==="")&&(O=!1);O&&(D.diagnostics={runnable:F,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(M),r.deleteShader(w),y=new dc(r,g),b=D2(r,g)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(g,M2)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}let $2=0;class K2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Z2(e),t.set(e,i)),i}}class Z2{constructor(e){this.id=$2++,this.code=e,this.usedTimes=0}}function j2(n){return n===js||n===Wc||n===Xc}function Q2(n,e,t,i,r,s){const a=new gS,o=new K2,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,b,C,D,N,k){const L=D.fog,B=N.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=e.get(y.envMap||q,X),O=F&&F.mapping===Mf?F.image.height:null,G=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,fe=K!==void 0?K.length:0;let Ee=0;B.morphAttributes.position!==void 0&&(Ee=1),B.morphAttributes.normal!==void 0&&(Ee=2),B.morphAttributes.color!==void 0&&(Ee=3);let Ne,Ie,ke,j;if(G){const st=Hi[G];Ne=st.vertexShader,Ie=st.fragmentShader}else{Ne=y.vertexShader,Ie=y.fragmentShader;const st=o.getVertexShaderStage(y),$e=o.getFragmentShaderStage(y);o.update(y,st,$e),ke=st.id,j=$e.id}const ie=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,he=N.isBatchedMesh===!0,ze=!!y.map,Et=!!y.matcap,Fe=!!F,Ke=!!y.aoMap,rt=!!y.lightMap,Xe=!!y.bumpMap&&y.wireframe===!1,ut=!!y.normalMap,It=!!y.displacementMap,Ot=!!y.emissiveMap,_t=!!y.metalnessMap,ft=!!y.roughnessMap,U=y.anisotropy>0,Vt=y.clearcoat>0,Ze=y.dispersion>0,R=y.retroreflectivity>0,E=y.iridescence>0,z=y.sheen>0,Y=y.transmission>0,Q=U&&!!y.anisotropyMap,ce=Vt&&!!y.clearcoatMap,pe=Vt&&!!y.clearcoatNormalMap,J=Vt&&!!y.clearcoatRoughnessMap,te=E&&!!y.iridescenceMap,me=E&&!!y.iridescenceThicknessMap,Ce=z&&!!y.sheenColorMap,_e=z&&!!y.sheenRoughnessMap,ge=!!y.specularMap,Le=!!y.specularColorMap,ee=!!y.specularIntensityMap,oe=Y&&!!y.transmissionMap,P=Y&&!!y.thicknessMap,ne=!!y.gradientMap,V=!!y.alphaMap,re=y.alphaTest>0,de=!!y.alphaHash,se=!!y.extensions;let xe=Zi;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(xe=n.toneMapping);const Me={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:Ne,fragmentShader:Ie,defines:y.defines,customVertexShaderID:ke,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:he,batchingColor:he&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ze,matcap:Et,envMap:Fe,envMapMode:Fe&&F.mapping,envMapCubeUVHeight:O,aoMap:Ke,lightMap:rt,bumpMap:Xe,normalMap:ut,displacementMap:It,emissiveMap:Ot,normalMapObjectSpace:ut&&y.normalMapType===Rb,normalMapTangentSpace:ut&&y.normalMapType===Rp,packedNormalMap:ut&&y.normalMapType===Rp&&j2(y.normalMap.format),metalnessMap:_t,roughnessMap:ft,anisotropy:U,anisotropyMap:Q,clearcoat:Vt,clearcoatMap:ce,clearcoatNormalMap:pe,clearcoatRoughnessMap:J,dispersion:Ze,retroreflection:R,iridescence:E,iridescenceMap:te,iridescenceThicknessMap:me,sheen:z,sheenColorMap:Ce,sheenRoughnessMap:_e,specularMap:ge,specularColorMap:Le,specularIntensityMap:ee,transmission:Y,transmissionMap:oe,thicknessMap:P,gradientMap:ne,opaque:y.transparent===!1&&y.blending===cl&&y.alphaToCoverage===!1,alphaMap:V,alphaTest:re,alphaHash:de,combine:y.combine,mapUv:ze&&_(y.map.channel),aoMapUv:Ke&&_(y.aoMap.channel),lightMapUv:rt&&_(y.lightMap.channel),bumpMapUv:Xe&&_(y.bumpMap.channel),normalMapUv:ut&&_(y.normalMap.channel),displacementMapUv:It&&_(y.displacementMap.channel),emissiveMapUv:Ot&&_(y.emissiveMap.channel),metalnessMapUv:_t&&_(y.metalnessMap.channel),roughnessMapUv:ft&&_(y.roughnessMap.channel),anisotropyMapUv:Q&&_(y.anisotropyMap.channel),clearcoatMapUv:ce&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(y.sheenRoughnessMap.channel),specularMapUv:ge&&_(y.specularMap.channel),specularColorMapUv:Le&&_(y.specularColorMap.channel),specularIntensityMapUv:ee&&_(y.specularIntensityMap.channel),transmissionMapUv:oe&&_(y.transmissionMap.channel),thicknessMapUv:P&&_(y.thicknessMap.channel),alphaMapUv:V&&_(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ut||U),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(ze||V),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&ut===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ee,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:ze&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===ot,decodeVideoTextureEmissive:Ot&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hr,flipSided:y.side===Fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&y.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(h(b,y),v(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function h(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function S(y){const b=p[y.type];let C;if(b){const D=Hi[b];C=gA.clone(D.uniforms)}else C=y.uniforms;return C}function x(y,b){let C=c.get(b);return C!==void 0?++C.usedTimes:(C=new q2(n,b,y,r),u.push(C),c.set(b,C)),C}function M(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:A}}function J2(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function e3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function K0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Z0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,_,g,m,h){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:_,materialVariant:a(f),groupOrder:g,renderOrder:f.renderOrder,z:m,group:h},n[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=_,v.materialVariant=a(f),v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=m,v.group=h),e++,v}function l(f,p,_,g,m,h,v){v.reversedDepth===!0&&(m=-m);const S=o(f,p,_,g,m,h);_.transmission>0?i.push(S):_.transparent===!0?r.push(S):t.push(S)}function u(f,p,_,g,m,h){const v=o(f,p,_,g,m,h);_.transmission>0?i.unshift(v):_.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,p){t.length>1&&t.sort(f||e3),i.length>1&&i.sort(p||K0),r.length>1&&r.sort(p||K0)}function d(){for(let f=e,p=n.length;f<p;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function t3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Z0,n.set(i,[a])):r>=s.length?(a=new Z0,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function n3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new We};break;case"SpotLight":t={position:new $,direction:new $,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function i3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let r3=0;function s3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a3(n){const e=new n3,t=i3(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new $);const r=new $,s=new Mt,a=new Mt;function o(u){let c=0,d=0,f=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,_=0,g=0,m=0,h=0,v=0,S=0,x=0,M=0,w=0,A=0,y=0,b=0,C=0;u.sort(s3);for(let N=0,k=u.length;N<k;N++){const L=u[N],B=L.color,q=L.intensity,X=L.distance;let F=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===js?F=L.shadow.map.texture:F=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=B.r*q,d+=B.g*q,f+=B.b*q;else if(L.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(L.sh.coefficients[O],q);C++}else if(L.isSunLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,K=t.get(L);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[_]=K,i.sunShadowMap[_]=F;const fe=G.getViewportCount();for(let Ee=0;Ee<fe;Ee++)i.sunShadowMatrix[g+Ee]=G.getMatrix(Ee),i.sunShadowCascade[g+Ee]=G._cascadeData[Ee];g+=fe,_++}i.sun[p]=O,p++}else if(L.isDirectionalLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,K=t.get(L);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=L.shadow.matrix,M++}i.directional[m]=O,m++}else if(L.isSpotLight){const O=e.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(B).multiplyScalar(q),O.distance=X,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,i.spot[v]=O;const G=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,G.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[v]=G.matrix,L.castShadow){const K=t.get(L);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,i.spotShadow[v]=K,i.spotShadowMap[v]=F,A++}v++}else if(L.isRectAreaLight){const O=e.get(L);O.color.copy(B).multiplyScalar(q),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=O,S++}else if(L.isPointLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const G=L.shadow,K=t.get(L);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,i.pointShadow[h]=K,i.pointShadowMap[h]=F,i.pointShadowMatrix[h]=L.shadow.matrix,w++}i.point[h]=O,h++}else if(L.isHemisphereLight){const O=e.get(L);O.skyColor.copy(L.color).multiplyScalar(q),O.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[x]=O,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==h||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==x||D.numSunShadows!==_||D.numDirectionalShadows!==M||D.numPointShadows!==w||D.numSpotShadows!==A||D.numSpotMaps!==y||D.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=m,i.spot.length=v,i.rectArea.length=S,i.point.length=h,i.hemi.length=x,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+y-b,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,D.sunLength=p,D.directionalLength=m,D.pointLength=h,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=x,D.numSunShadows=_,D.numDirectionalShadows=M,D.numPointShadows=w,D.numSpotShadows=A,D.numSpotMaps=y,D.numLightProbes=C,i.version=r3++)}function l(u,c){let d=0,f=0,p=0,_=0,g=0,m=0;const h=c.matrixWorldInverse;for(let v=0,S=u.length;v<S;v++){const x=u[v];if(x.isSunLight){const M=i.sun[d];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(h),d++}else if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(h),f++}else if(x.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(h),_++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(h),a.identity(),s.copy(x.matrixWorld),s.premultiply(h),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:i}}function j0(n){const e=new a3(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function o3(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new j0(n),e.set(r,[o])):s>=a.length?(o=new j0(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const l3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c3=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],f3=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Q0=new Mt,Xo=new $,Fd=new $;function d3(n,e,t){let i=new tg;const r=new et,s=new et,a=new Pt,o=new yA,l=new SA,u={},c=t.maxTextureSize,d={[Ks]:Fn,[Fn]:Ks,[hr]:hr},f=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:l3,fragmentShader:u3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Rr;_.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new bt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let h=this.type;this.render=function(w,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===ab&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oc);const b=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),N=n.state;N.setBlending(vr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=h!==this.type;k&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=w.length;L<B;L++){const q=w[L],X=q.shadow;if(X===void 0){Oe("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const F=X.getFrameExtents();r.multiply(F),s.copy(X.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,X.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,X.mapSize.y=s.y));const O=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=O,X.map===null||k===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===jo){if(q.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ui(r.x,r.y,{format:js,type:Ji,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new kl(r.x,r.y,Li),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Tr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=sn,X.map.depthTexture.magFilter=sn}else q.isPointLight?(X.map=new CS(r.x),X.map.depthTexture=new pA(r.x,Qi)):(X.map=new Ui(r.x,r.y),X.map.depthTexture=new kl(r.x,r.y,Qi)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Tr,this.type===oc?(X.map.depthTexture.compareFunction=O?Jm:Qm,X.map.depthTexture.minFilter=Yt,X.map.depthTexture.magFilter=Yt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=sn,X.map.depthTexture.magFilter=sn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const G=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,y);for(let K=0;K<G;K++){const fe=X.getCamera(K);if(q.isPointLight){const Ee=X.camera,Ne=X.matrix,Ie=q.distance||Ee.far;Ie!==Ee.far&&(Ee.far=Ie,Ee.updateProjectionMatrix()),Xo.setFromMatrixPosition(q.matrixWorld),Ee.position.copy(Xo),Fd.copy(Ee.position),Fd.add(c3[K]),Ee.up.copy(f3[K]),Ee.lookAt(Fd),Ee.updateMatrixWorld(),Ne.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Q0.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Q0,Ee.coordinateSystem,Ee.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,K),n.clear();else{K===0&&(n.setRenderTarget(X.map),n.clear());const Ee=X.getViewport(K);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),N.viewport(a)}i=X.getFrustum(K),x(A,y,fe,q,this.type)}X.isPointLightShadow!==!0&&this.type===jo&&v(X,y),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(b,C,D)};function v(w,A){const y=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ui(r.x,r.y,{format:js,type:Ji}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,y,f,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,y,p,g,null)}function S(w,A,y,b){let C=null;const D=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=y.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=C.uuid,k=A.uuid;let L=u[N];L===void 0&&(L={},u[N]=L);let B=L[k];B===void 0&&(B=C.clone(),L[k]=B,A.addEventListener("dispose",M)),C=B}if(C.visible=A.visible,C.wireframe=A.wireframe,b===jo?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=n.properties.get(C);N.light=y}return C}function x(w,A,y,b,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===jo)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const k=e.update(w),L=w.material;if(Array.isArray(L)){const B=k.groups;for(let q=0,X=B.length;q<X;q++){const F=B[q],O=L[F.materialIndex];if(O&&O.visible){const G=S(w,O,b,C);w.onBeforeShadow(n,w,A,y,k,G,F),n.renderBufferDirect(y,null,k,G,w,F),w.onAfterShadow(n,w,A,y,k,G,F)}}}else if(L.visible){const B=S(w,L,b,C);w.onBeforeShadow(n,w,A,y,k,B,null),n.renderBufferDirect(y,null,k,B,w,null),w.onAfterShadow(n,w,A,y,k,B,null)}}const N=w.children;for(let k=0,L=N.length;k<L;k++)x(N[k],A,y,b,C)}function M(w){w.target.removeEventListener("dispose",M);for(const y in u){const b=u[y],C=w.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function h3(n,e){function t(){let P=!1;const ne=new Pt;let V=null;const re=new Pt(0,0,0,0);return{setMask:function(de){V!==de&&!P&&(n.colorMask(de,de,de,de),V=de)},setLocked:function(de){P=de},setClear:function(de,se,xe,Me,st){st===!0&&(de*=Me,se*=Me,xe*=Me),ne.set(de,se,xe,Me),re.equals(ne)===!1&&(n.clearColor(de,se,xe,Me),re.copy(ne))},reset:function(){P=!1,V=null,re.set(-1,0,0,0)}}}function i(){let P=!1,ne=!1,V=null,re=null,de=null;return{setReversed:function(se){if(ne!==se){const xe=e.get("EXT_clip_control");se?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ne=se;const Me=de;de=null,this.setClear(Me)}},getReversed:function(){return ne},setTest:function(se){se?ie(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(se){V!==se&&!P&&(n.depthMask(se),V=se)},setFunc:function(se){if(ne&&(se=Vb[se]),re!==se){switch(se){case Wh:n.depthFunc(n.NEVER);break;case Xh:n.depthFunc(n.ALWAYS);break;case Yh:n.depthFunc(n.LESS);break;case Il:n.depthFunc(n.LEQUAL);break;case qh:n.depthFunc(n.EQUAL);break;case $h:n.depthFunc(n.GEQUAL);break;case Kh:n.depthFunc(n.GREATER);break;case Zh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=se}},setLocked:function(se){P=se},setClear:function(se){de!==se&&(de=se,ne&&(se=1-se),n.clearDepth(se))},reset:function(){P=!1,V=null,re=null,de=null,ne=!1}}}function r(){let P=!1,ne=null,V=null,re=null,de=null,se=null,xe=null,Me=null,st=null;return{setTest:function($e){P||($e?ie(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function($e){ne!==$e&&!P&&(n.stencilMask($e),ne=$e)},setFunc:function($e,Sn,nn){(V!==$e||re!==Sn||de!==nn)&&(n.stencilFunc($e,Sn,nn),V=$e,re=Sn,de=nn)},setOp:function($e,Sn,nn){(se!==$e||xe!==Sn||Me!==nn)&&(n.stencilOp($e,Sn,nn),se=$e,xe=Sn,Me=nn)},setLocked:function($e){P=$e},setClear:function($e){st!==$e&&(n.clearStencil($e),st=$e)},reset:function(){P=!1,ne=null,V=null,re=null,de=null,se=null,xe=null,Me=null,st=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},p=new WeakMap,_=[],g=null,m=!1,h=null,v=null,S=null,x=null,M=null,w=null,A=null,y=new We(0,0,0),b=0,C=!1,D=null,N=null,k=null,L=null,B=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,F=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),X=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),X=F>=2);let G=null,K={};const fe=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),Ne=new Pt().fromArray(fe),Ie=new Pt().fromArray(Ee);function ke(P,ne,V,re){const de=new Uint8Array(4),se=n.createTexture();n.bindTexture(P,se),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<V;xe++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ne+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return se}const j={};j[n.TEXTURE_2D]=ke(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Il),Xe(!1),ut(e0),ie(n.CULL_FACE),Ke(vr);function ie(P){c[P]!==!0&&(n.enable(P),c[P]=!0)}function we(P){c[P]!==!1&&(n.disable(P),c[P]=!1)}function Ue(P,ne){return f[P]!==ne?(n.bindFramebuffer(P,ne),f[P]=ne,P===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ne),P===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function he(P,ne){let V=_,re=!1;if(P){V=p.get(ne),V===void 0&&(V=[],p.set(ne,V));const de=P.textures;if(V.length!==de.length||V[0]!==n.COLOR_ATTACHMENT0){for(let se=0,xe=de.length;se<xe;se++)V[se]=n.COLOR_ATTACHMENT0+se;V.length=de.length,re=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,re=!0);re&&n.drawBuffers(V)}function ze(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const Et={[ba]:n.FUNC_ADD,[lb]:n.FUNC_SUBTRACT,[ub]:n.FUNC_REVERSE_SUBTRACT};Et[cb]=n.MIN,Et[fb]=n.MAX;const Fe={[db]:n.ZERO,[hb]:n.ONE,[pb]:n.SRC_COLOR,[jy]:n.SRC_ALPHA,[yb]:n.SRC_ALPHA_SATURATE,[vb]:n.DST_COLOR,[gb]:n.DST_ALPHA,[mb]:n.ONE_MINUS_SRC_COLOR,[Qy]:n.ONE_MINUS_SRC_ALPHA,[xb]:n.ONE_MINUS_DST_COLOR,[_b]:n.ONE_MINUS_DST_ALPHA,[Sb]:n.CONSTANT_COLOR,[Mb]:n.ONE_MINUS_CONSTANT_COLOR,[Eb]:n.CONSTANT_ALPHA,[wb]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(P,ne,V,re,de,se,xe,Me,st,$e){if(P===vr){m===!0&&(we(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),P!==ob){if(P!==h||$e!==C){if((v!==ba||M!==ba)&&(n.blendEquation(n.FUNC_ADD),v=ba,M=ba),$e)switch(P){case cl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hc:n.blendFunc(n.ONE,n.ONE);break;case t0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case n0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",P);break}else switch(P){case cl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case t0:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n0:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",P);break}S=null,x=null,w=null,A=null,y.set(0,0,0),b=0,h=P,C=$e}return}de=de||ne,se=se||V,xe=xe||re,(ne!==v||de!==M)&&(n.blendEquationSeparate(Et[ne],Et[de]),v=ne,M=de),(V!==S||re!==x||se!==w||xe!==A)&&(n.blendFuncSeparate(Fe[V],Fe[re],Fe[se],Fe[xe]),S=V,x=re,w=se,A=xe),(Me.equals(y)===!1||st!==b)&&(n.blendColor(Me.r,Me.g,Me.b,st),y.copy(Me),b=st),h=P,C=!1}function rt(P,ne){P.side===hr?we(n.CULL_FACE):ie(n.CULL_FACE);let V=P.side===Fn;ne&&(V=!V),Xe(V),P.blending===cl&&P.transparent===!1?Ke(vr):Ke(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const re=P.stencilWrite;o.setTest(re),re&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ot(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(P){D!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),D=P)}function ut(P){P!==rb?(ie(n.CULL_FACE),P!==N&&(P===e0?n.cullFace(n.BACK):P===sb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),N=P}function It(P){P!==k&&(X&&n.lineWidth(P),k=P)}function Ot(P,ne,V){P?(ie(n.POLYGON_OFFSET_FILL),(L!==ne||B!==V)&&(L=ne,B=V,a.getReversed()&&(ne=-ne),n.polygonOffset(ne,V))):we(n.POLYGON_OFFSET_FILL)}function _t(P){P?ie(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function ft(P){P===void 0&&(P=n.TEXTURE0+q-1),G!==P&&(n.activeTexture(P),G=P)}function U(P,ne,V){V===void 0&&(G===null?V=n.TEXTURE0+q-1:V=G);let re=K[V];re===void 0&&(re={type:void 0,texture:void 0},K[V]=re),(re.type!==P||re.texture!==ne)&&(G!==V&&(n.activeTexture(V),G=V),n.bindTexture(P,ne||j[P]),re.type=P,re.texture=ne)}function Vt(){const P=K[G];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ze(){try{n.compressedTexImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function E(){try{n.texSubImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function z(){try{n.texSubImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function ce(){try{n.texStorage2D(...arguments)}catch(P){it("WebGLState:",P)}}function pe(){try{n.texStorage3D(...arguments)}catch(P){it("WebGLState:",P)}}function J(){try{n.texImage2D(...arguments)}catch(P){it("WebGLState:",P)}}function te(){try{n.texImage3D(...arguments)}catch(P){it("WebGLState:",P)}}function me(P){return d[P]!==void 0?d[P]:n.getParameter(P)}function Ce(P,ne){d[P]!==ne&&(n.pixelStorei(P,ne),d[P]=ne)}function _e(P){Ne.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Ne.copy(P))}function ge(P){Ie.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ie.copy(P))}function Le(P,ne){let V=u.get(ne);V===void 0&&(V=new WeakMap,u.set(ne,V));let re=V.get(P);re===void 0&&(re=n.getUniformBlockIndex(ne,P.name),V.set(P,re))}function ee(P,ne){const re=u.get(ne).get(P);l.get(ne)!==re&&(n.uniformBlockBinding(ne,re,P.__bindingPointIndex),l.set(ne,re))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},G=null,K={},f={},p=new WeakMap,_=[],g=null,m=!1,h=null,v=null,S=null,x=null,M=null,w=null,A=null,y=new We(0,0,0),b=0,C=!1,D=null,N=null,k=null,L=null,B=null,Ne.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:we,bindFramebuffer:Ue,drawBuffers:he,useProgram:ze,setBlending:Ke,setMaterial:rt,setFlipSided:Xe,setCullFace:ut,setLineWidth:It,setPolygonOffset:Ot,setScissorTest:_t,activeTexture:ft,bindTexture:U,unbindTexture:Vt,compressedTexImage2D:Ze,compressedTexImage3D:R,texImage2D:J,texImage3D:te,pixelStorei:Ce,getParameter:me,updateUBOMapping:Le,uniformBlockBinding:ee,texStorage2D:ce,texStorage3D:pe,texSubImage2D:E,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:_e,viewport:ge,reset:oe}}function p3(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,c=new WeakMap,d=new Set;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return _?new OffscreenCanvas(R,E):$c("canvas")}function m(R,E,z){let Y=1;const Q=Ze(R);if((Q.width>z||Q.height>z)&&(Y=z/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ce=Math.floor(Y*Q.width),pe=Math.floor(Y*Q.height);f===void 0&&(f=g(ce,pe));const J=E?g(ce,pe):f;return J.width=ce,J.height=pe,J.getContext("2d").drawImage(R,0,0,ce,pe),Oe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ce+"x"+pe+")."),J}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function h(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,E,z,Y,Q,ce=!1){if(R!==null){if(n[R]!==void 0)return n[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe;Y&&(pe=e.get("EXT_texture_norm16"),pe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=E;if(E===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8),z===n.UNSIGNED_SHORT&&pe&&(J=pe.R16_EXT),z===n.SHORT&&pe&&(J=pe.R16_SNORM_EXT)),E===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),E===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8),z===n.UNSIGNED_SHORT&&pe&&(J=pe.RG16_EXT),z===n.SHORT&&pe&&(J=pe.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),E===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),E===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),E===n.RGB&&(z===n.UNSIGNED_SHORT&&pe&&(J=pe.RGB16_EXT),z===n.SHORT&&pe&&(J=pe.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),E===n.RGBA){const te=ce?qc:je.getTransfer(Q);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=te===ot?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&pe&&(J=pe.RGBA16_EXT),z===n.SHORT&&pe&&(J=pe.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(R,E){let z;return R?E===null||E===Qi||E===Fl?z=n.DEPTH24_STENCIL8:E===Li?z=n.DEPTH32F_STENCIL8:E===Ul&&(z=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qi||E===Fl?z=n.DEPTH_COMPONENT24:E===Li?z=n.DEPTH_COMPONENT32F:E===Ul&&(z=n.DEPTH_COMPONENT16),z}function w(R,E){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==Yt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),b(E),E.isVideoTexture&&c.delete(E),E.isHTMLTexture&&d.delete(E)}function y(R){const E=R.target;E.removeEventListener("dispose",y),D(E)}function b(R){const E=i.get(R);if(E.__webglInit===void 0)return;const z=R.source,Y=p.get(z);if(Y){const Q=Y[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(R),Object.keys(Y).length===0&&p.delete(z)}i.remove(R)}function C(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const z=R.source,Y=p.get(z);delete Y[E.__cacheKey],a.memory.textures--}function D(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let Q=0;Q<E.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)n.deleteFramebuffer(E.__webglFramebuffer[Y]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=R.textures;for(let Y=0,Q=z.length;Y<Q;Y++){const ce=i.get(z[Y]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(z[Y])}i.remove(R)}let N=0;function k(){N=0}function L(){return N}function B(R){N=R}function q(){const R=N;return R>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function X(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function F(R,E){const z=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const Y=R.image;if(Y===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{we(z,R,E);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+E)}function O(R,E){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){we(z,R,E);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+E)}function G(R,E){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){we(z,R,E);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+E)}function K(R,E){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Ue(z,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+E)}const fe={[jh]:n.REPEAT,[gr]:n.CLAMP_TO_EDGE,[Qh]:n.MIRRORED_REPEAT},Ee={[sn]:n.NEAREST,[Ab]:n.NEAREST_MIPMAP_NEAREST,[Tu]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[rd]:n.LINEAR_MIPMAP_NEAREST,[Is]:n.LINEAR_MIPMAP_LINEAR},Ne={[Lb]:n.NEVER,[Fb]:n.ALWAYS,[Db]:n.LESS,[Qm]:n.LEQUAL,[Nb]:n.EQUAL,[Jm]:n.GEQUAL,[Ib]:n.GREATER,[Ub]:n.NOTEQUAL};function Ie(R,E){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yt||E.magFilter===rd||E.magFilter===Tu||E.magFilter===Is||E.minFilter===Yt||E.minFilter===rd||E.minFilter===Tu||E.minFilter===Is)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,fe[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,fe[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,fe[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ee[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ee[E.minFilter]),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ne[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===sn||E.minFilter!==Tu&&E.minFilter!==Is||E.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ke(R,E){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const Y=E.source;let Q=p.get(Y);Q===void 0&&(Q={},p.set(Y,Q));const ce=X(E);if(ce!==R.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[ce].usedTimes++;const pe=Q[R.__cacheKey];pe!==void 0&&(Q[R.__cacheKey].usedTimes--,pe.usedTimes===0&&C(E)),R.__cacheKey=ce,R.__webglTexture=Q[ce].texture}return z}function j(R,E,z){return Math.floor(Math.floor(R/z)/E)}function ie(R,E,z,Y){const ce=R.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,z,Y,E.data);else{ce.sort((Ce,_e)=>Ce.start-_e.start);let pe=0;for(let Ce=1;Ce<ce.length;Ce++){const _e=ce[pe],ge=ce[Ce],Le=_e.start+_e.count,ee=j(ge.start,E.width,4),oe=j(_e.start,E.width,4);ge.start<=Le+1&&ee===oe&&j(ge.start+ge.count-1,E.width,4)===ee?_e.count=Math.max(_e.count,ge.start+ge.count-_e.start):(++pe,ce[pe]=ge)}ce.length=pe+1;const J=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Ce=0,_e=ce.length;Ce<_e;Ce++){const ge=ce[Ce],Le=Math.floor(ge.start/4),ee=Math.ceil(ge.count/4),oe=Le%E.width,P=Math.floor(Le/E.width),ne=ee,V=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,oe,P,ne,V,z,Y,E.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function we(R,E,z){let Y=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=ke(R,E),ce=E.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+z);const pe=i.get(ce);if(ce.version!==pe.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const V=je.getPrimaries(je.workingColorSpace),re=E.colorSpace===qr?null:je.getPrimaries(E.colorSpace),de=E.colorSpace===qr||V===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let te=m(E.image,!1,r.maxTextureSize);te=Vt(E,te);const me=s.convert(E.format,E.colorSpace),Ce=s.convert(E.type);let _e=x(E.internalFormat,me,Ce,E.normalized,E.colorSpace,E.isVideoTexture);Ie(Y,E);let ge;const Le=E.mipmaps,ee=E.isVideoTexture!==!0,oe=pe.__version===void 0||Q===!0,P=ce.dataReady,ne=w(E,te);if(E.isDepthTexture)_e=M(E.format===Us,E.type),oe&&(ee?t.texStorage2D(n.TEXTURE_2D,1,_e,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,_e,te.width,te.height,0,me,Ce,null));else if(E.isDataTexture)if(Le.length>0){ee&&oe&&t.texStorage2D(n.TEXTURE_2D,ne,_e,Le[0].width,Le[0].height);for(let V=0,re=Le.length;V<re;V++)ge=Le[V],ee?P&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Ce,ge.data):t.texImage2D(n.TEXTURE_2D,V,_e,ge.width,ge.height,0,me,Ce,ge.data);E.generateMipmaps=!1}else ee?(oe&&t.texStorage2D(n.TEXTURE_2D,ne,_e,te.width,te.height),P&&ie(E,te,me,Ce)):t.texImage2D(n.TEXTURE_2D,0,_e,te.width,te.height,0,me,Ce,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ee&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,_e,Le[0].width,Le[0].height,te.depth);for(let V=0,re=Le.length;V<re;V++)if(ge=Le[V],E.format!==Di)if(me!==null)if(ee){if(P)if(E.layerUpdates.size>0){const de=P0(ge.width,ge.height,E.format,E.type);for(const se of E.layerUpdates){const xe=ge.data.subarray(se*de/ge.data.BYTES_PER_ELEMENT,(se+1)*de/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,se,ge.width,ge.height,1,me,xe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,te.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,_e,ge.width,ge.height,te.depth,0,ge.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,te.depth,me,Ce,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,_e,ge.width,ge.height,te.depth,0,me,Ce,ge.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ee&&oe&&t.texStorage2D(n.TEXTURE_2D,ne,_e,Le[0].width,Le[0].height);for(let V=0,re=Le.length;V<re;V++)ge=Le[V],E.format!==Di?me!==null?ee?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,V,_e,ge.width,ge.height,0,ge.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?P&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Ce,ge.data):t.texImage2D(n.TEXTURE_2D,V,_e,ge.width,ge.height,0,me,Ce,ge.data)}else if(E.isDataArrayTexture)if(ee){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,_e,te.width,te.height,te.depth),P)if(E.layerUpdates.size>0){const V=P0(te.width,te.height,E.format,E.type);for(const re of E.layerUpdates){const de=te.data.subarray(re*V/te.data.BYTES_PER_ELEMENT,(re+1)*V/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,te.width,te.height,1,me,Ce,de)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Ce,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,te.width,te.height,te.depth,0,me,Ce,te.data);else if(E.isData3DTexture)ee?(oe&&t.texStorage3D(n.TEXTURE_3D,ne,_e,te.width,te.height,te.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Ce,te.data)):t.texImage3D(n.TEXTURE_3D,0,_e,te.width,te.height,te.depth,0,me,Ce,te.data);else if(E.isFramebufferTexture){if(oe)if(ee)t.texStorage2D(n.TEXTURE_2D,ne,_e,te.width,te.height);else{let V=te.width,re=te.height;for(let de=0;de<ne;de++)t.texImage2D(n.TEXTURE_2D,de,_e,V,re,0,me,Ce,null),V>>=1,re>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const V=n.canvas;if(V.hasAttribute("layoutsubtree")||V.setAttribute("layoutsubtree","true"),te.parentNode!==V){V.appendChild(te),d.add(E),V.onpaint=re=>{const de=re.changedElements;for(const se of d)de.includes(se.image)&&(se.needsUpdate=!0)},V.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const de=n.RGBA,se=n.RGBA,xe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,de,se,xe,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Le.length>0){if(ee&&oe){const V=Ze(Le[0]);t.texStorage2D(n.TEXTURE_2D,ne,_e,V.width,V.height)}for(let V=0,re=Le.length;V<re;V++)ge=Le[V],ee?P&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,me,Ce,ge):t.texImage2D(n.TEXTURE_2D,V,_e,me,Ce,ge);E.generateMipmaps=!1}else if(ee){if(oe){const V=Ze(te);t.texStorage2D(n.TEXTURE_2D,ne,_e,V.width,V.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ce,te)}else t.texImage2D(n.TEXTURE_2D,0,_e,me,Ce,te);h(E)&&v(Y),pe.__version=ce.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ue(R,E,z){if(E.image.length!==6)return;const Y=ke(R,E),Q=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const ce=i.get(Q);if(Q.version!==ce.__version||Y===!0){t.activeTexture(n.TEXTURE0+z);const pe=je.getPrimaries(je.workingColorSpace),J=E.colorSpace===qr?null:je.getPrimaries(E.colorSpace),te=E.colorSpace===qr||pe===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const me=E.isCompressedTexture||E.image[0].isCompressedTexture,Ce=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let se=0;se<6;se++)!me&&!Ce?_e[se]=m(E.image[se],!0,r.maxCubemapSize):_e[se]=Ce?E.image[se].image:E.image[se],_e[se]=Vt(E,_e[se]);const ge=_e[0],Le=s.convert(E.format,E.colorSpace),ee=s.convert(E.type),oe=x(E.internalFormat,Le,ee,E.normalized,E.colorSpace),P=E.isVideoTexture!==!0,ne=ce.__version===void 0||Y===!0,V=Q.dataReady;let re=w(E,ge);Ie(n.TEXTURE_CUBE_MAP,E);let de;if(me){P&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,re,oe,ge.width,ge.height);for(let se=0;se<6;se++){de=_e[se].mipmaps;for(let xe=0;xe<de.length;xe++){const Me=de[xe];E.format!==Di?Le!==null?P?V&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,Me.width,Me.height,Le,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,oe,Me.width,Me.height,0,Me.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,Me.width,Me.height,Le,ee,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,oe,Me.width,Me.height,0,Le,ee,Me.data)}}}else{if(de=E.mipmaps,P&&ne){de.length>0&&re++;const se=Ze(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,re,oe,se.width,se.height)}for(let se=0;se<6;se++)if(Ce){P?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,_e[se].width,_e[se].height,Le,ee,_e[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,oe,_e[se].width,_e[se].height,0,Le,ee,_e[se].data);for(let xe=0;xe<de.length;xe++){const st=de[xe].image[se].image;P?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,st.width,st.height,Le,ee,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,oe,st.width,st.height,0,Le,ee,st.data)}}else{P?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,ee,_e[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,oe,Le,ee,_e[se]);for(let xe=0;xe<de.length;xe++){const Me=de[xe];P?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,Le,ee,Me.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,oe,Le,ee,Me.image[se])}}}h(E)&&v(n.TEXTURE_CUBE_MAP),ce.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function he(R,E,z,Y,Q,ce){const pe=s.convert(z.format,z.colorSpace),J=s.convert(z.type),te=x(z.internalFormat,pe,J,z.normalized,z.colorSpace),me=i.get(E),Ce=i.get(z);if(Ce.__renderTarget=E,!me.__hasExternalTextures){const _e=Math.max(1,E.width>>ce),ge=Math.max(1,E.height>>ce);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ce,te,_e,ge,E.depth,0,pe,J,null):t.texImage2D(Q,ce,te,_e,ge,0,pe,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ft(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,Ce.__webglTexture,0,_t(E)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,Ce.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(R,E,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer){const Y=E.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,ce=M(E.stencilBuffer,Q),pe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ft(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(E),ce,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(E),ce,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ce,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,R)}else{const Y=E.textures;for(let Q=0;Q<Y.length;Q++){const ce=Y[Q],pe=s.convert(ce.format,ce.colorSpace),J=s.convert(ce.type),te=x(ce.internalFormat,pe,J,ce.normalized,ce.colorSpace);ft(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(E),te,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(E),te,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,te,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(R,E,z){const Y=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(E.depthTexture);if(Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,E.depthTexture);const me=s.convert(E.depthTexture.format),Ce=s.convert(E.depthTexture.type);let _e;E.depthTexture.format===Tr?_e=n.DEPTH_COMPONENT24:E.depthTexture.format===Us&&(_e=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_e,E.width,E.height,0,me,Ce,null)}}else F(E.depthTexture,0);const ce=Q.__webglTexture,pe=_t(E),J=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,te=E.depthTexture.format===Us?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Tr)ft(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,ce,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,te,J,ce,0);else if(E.depthTexture.format===Us)ft(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,ce,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,te,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(R){const E=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=Y}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)Et(E.__webglFramebuffer[Y],R,Y);else{const Y=R.texture.mipmaps;Y&&Y.length>0?Et(E.__webglFramebuffer[0],R,0):Et(E.__webglFramebuffer,R,0)}else if(z){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=n.createRenderbuffer(),ze(E.__webglDepthbuffer[Y],R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ce)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ze(E.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(R,E,z){const Y=i.get(R);E!==void 0&&he(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Fe(R)}function rt(R){const E=R.texture,z=i.get(R),Y=i.get(E);R.addEventListener("dispose",y);const Q=R.textures,ce=R.isWebGLCubeRenderTarget===!0,pe=Q.length>1;if(pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=E.version,a.memory.textures++),ce){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let te=0;te<E.mipmaps.length;te++)z.__webglFramebuffer[J][te]=n.createFramebuffer()}else z.__webglFramebuffer[J]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<E.mipmaps.length;J++)z.__webglFramebuffer[J]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(pe)for(let J=0,te=Q.length;J<te;J++){const me=i.get(Q[J]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ft(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){const te=Q[J];z.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const me=s.convert(te.format,te.colorSpace),Ce=s.convert(te.type),_e=x(te.internalFormat,me,Ce,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),ge=_t(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,_e,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,z.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,E);for(let J=0;J<6;J++)if(E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)he(z.__webglFramebuffer[J][te],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else he(z.__webglFramebuffer[J],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);h(E)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let J=0,te=Q.length;J<te;J++){const me=Q[J],Ce=i.get(me);let _e=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Ce.__webglTexture),Ie(_e,me),he(z.__webglFramebuffer,R,me,n.COLOR_ATTACHMENT0+J,_e,0),h(me)&&v(_e)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,Y.__webglTexture),Ie(J,E),E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)he(z.__webglFramebuffer[te],R,E,n.COLOR_ATTACHMENT0,J,te);else he(z.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,J,0);h(E)&&v(J),t.unbindTexture()}R.depthBuffer&&Fe(R)}function Xe(R){const E=R.textures;for(let z=0,Y=E.length;z<Y;z++){const Q=E[z];if(h(Q)){const ce=S(R),pe=i.get(Q).__webglTexture;t.bindTexture(ce,pe),v(ce),t.unbindTexture()}}}const ut=[],It=[];function Ot(R){if(R.samples>0){if(ft(R)===!1){const E=R.textures,z=R.width,Y=R.height;let Q=n.COLOR_BUFFER_BIT;const ce=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(R),J=E.length>1;if(J)for(let me=0;me<E.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<E.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Ce=i.get(E[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ce,0)}n.blitFramebuffer(0,0,z,Y,0,0,z,Y,Q,n.NEAREST),l===!0&&(ut.length=0,It.length=0,ut.push(n.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ut.push(ce),It.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,It)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let me=0;me<E.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Ce=i.get(E[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const E=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function _t(R){return Math.min(r.maxSamples,R.samples)}function ft(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function U(R){const E=a.render.frame;c.get(R)!==E&&(c.set(R,E),R.update())}function Vt(R,E){const z=R.colorSpace,Y=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Yc&&z!==qr&&(je.getTransfer(z)===ot?(Y!==Di||Q!==$n)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",z)),E}function Ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=Ke,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function m3(n,e){function t(i,r=qr){let s;const a=je.getTransfer(r);if(i===$n)return n.UNSIGNED_BYTE;if(i===Ym)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lS)return n.BYTE;if(i===uS)return n.SHORT;if(i===Ul)return n.UNSIGNED_SHORT;if(i===Xm)return n.INT;if(i===Qi)return n.UNSIGNED_INT;if(i===Li)return n.FLOAT;if(i===Ji)return n.HALF_FLOAT;if(i===dS)return n.ALPHA;if(i===hS)return n.RGB;if(i===Di)return n.RGBA;if(i===Tr)return n.DEPTH_COMPONENT;if(i===Us)return n.DEPTH_STENCIL;if(i===$m)return n.RED;if(i===Km)return n.RED_INTEGER;if(i===js)return n.RG;if(i===Zm)return n.RG_INTEGER;if(i===jm)return n.RGBA_INTEGER;if(i===lc||i===uc||i===cc||i===fc)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jh||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ep)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===np)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ip||i===rp||i===sp||i===ap||i===op||i===Wc||i===lp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ip||i===rp)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ap)return s.COMPRESSED_R11_EAC;if(i===op)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Wc)return s.COMPRESSED_RG11_EAC;if(i===lp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===up||i===cp||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===_p||i===vp||i===xp||i===yp||i===Sp||i===Mp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===up)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_p)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mp)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ep||i===wp||i===Tp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ep)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bp||i===Ap||i===Xc||i===Cp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ap)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const g3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class v3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new MS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new er({vertexShader:g3,fragmentShader:_3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Wn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x3 extends ra{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const g=typeof XRWebGLBinding<"u",m=new v3,h={},v=t.getContextAttributes();let S=null,x=null;const M=[],w=[],A=new et;let y=null,b=null;const C=new qn;C.viewport=new Pt;const D=new qn;D.viewport=new Pt;const N=[C,D],k=new AA;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=M[j];return ie===void 0&&(ie=new hd,M[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=M[j];return ie===void 0&&(ie=new hd,M[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=M[j];return ie===void 0&&(ie=new hd,M[j]=ie),ie.getHandSpace()};function q(j){const ie=w.indexOf(j.inputSource);if(ie===-1)return;const we=M[ie];we!==void 0&&(we.update(j.inputSource,j.frame,u||a),we.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",F);for(let j=0;j<M.length;j++){const ie=w[j];ie!==null&&(w[j]=null,M[j].disconnect(ie))}L=null,B=null,m.reset();for(const j in h)delete h[j];if(e.setRenderTarget(S),p=null,f=null,d=null,r=null,x=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),b!==null){const j=b.camera;j.fov=b.fov,j.zoom=b.zoom,j.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",X),r.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ue=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=v.stencil?Us:Tr,Ue=v.stencil?Fl:Qi);const ze={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ui(f.textureWidth,f.textureHeight,{format:Di,type:$n,depthTexture:new kl(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ui(p.framebufferWidth,p.framebufferHeight,{format:Di,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(j){for(let ie=0;ie<j.removed.length;ie++){const we=j.removed[ie],Ue=w.indexOf(we);Ue>=0&&(w[Ue]=null,M[Ue].disconnect(we))}for(let ie=0;ie<j.added.length;ie++){const we=j.added[ie];let Ue=w.indexOf(we);if(Ue===-1){for(let ze=0;ze<M.length;ze++)if(ze>=w.length){w.push(we),Ue=ze;break}else if(w[ze]===null){w[ze]=we,Ue=ze;break}if(Ue===-1)break}const he=M[Ue];he&&he.connect(we)}}const O=new $,G=new $;function K(j,ie,we){O.setFromMatrixPosition(ie.matrixWorld),G.setFromMatrixPosition(we.matrixWorld);const Ue=O.distanceTo(G),he=ie.projectionMatrix.elements,ze=we.projectionMatrix.elements,Et=he[14]/(he[10]-1),Fe=he[14]/(he[10]+1),Ke=(he[9]+1)/he[5],rt=(he[9]-1)/he[5],Xe=(he[8]-1)/he[0],ut=(ze[8]+1)/ze[0],It=Et*Xe,Ot=Et*ut,_t=Ue/(-Xe+ut),ft=_t*-Xe;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ft),j.translateZ(_t),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),he[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const U=Et+_t,Vt=Fe+_t,Ze=It-ft,R=Ot+(Ue-ft),E=Ke*Fe/Vt*U,z=rt*Fe/Vt*U;j.projectionMatrix.makePerspective(Ze,R,E,z,U,Vt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function fe(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,we=j.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(we=m.depthFar)),k.near=D.near=C.near=ie,k.far=D.far=C.far=we,(L!==k.near||B!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,B=k.far),k.layers.mask=j.layers.mask|6,C.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;const Ue=j.parent,he=k.cameras;fe(k,Ue);for(let ze=0;ze<he.length;ze++)fe(he[ze],Ue);he.length===2?K(k,C,D):k.projectionMatrix.copy(C.projectionMatrix),b===null&&j.isPerspectiveCamera&&(b={camera:j,fov:j.fov,zoom:j.zoom}),Ee(j,k,Ue)};function Ee(j,ie,we){we===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(we.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pp*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(j){return h[j]};let Ne=null;function Ie(j,ie){if(c=ie.getViewerPose(u||a),_=ie,c!==null){const we=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ue=!1;we.length!==k.cameras.length&&(k.cameras.length=0,Ue=!0);for(let Fe=0;Fe<we.length;Fe++){const Ke=we[Fe];let rt=null;if(p!==null)rt=p.getViewport(Ke);else{const ut=d.getViewSubImage(f,Ke);rt=ut.viewport,Fe===0&&(e.setRenderTargetTextures(x,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(x))}let Xe=N[Fe];Xe===void 0&&(Xe=new qn,Xe.layers.enable(Fe),Xe.viewport=new Pt,N[Fe]=Xe),Xe.matrix.fromArray(Ke.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ke.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(rt.x,rt.y,rt.width,rt.height),Fe===0&&(k.matrix.copy(Xe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ue===!0&&k.cameras.push(Xe)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=i.getBinding();const Fe=d.getDepthInformation(we[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,r.renderState)}if(he&&he.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let Fe=0;Fe<we.length;Fe++){const Ke=we[Fe].camera;if(Ke){let rt=h[Ke];rt||(rt=new MS,h[Ke]=rt);const Xe=d.getCameraImage(Ke);rt.sourceTexture=Xe}}}}for(let we=0;we<M.length;we++){const Ue=w[we],he=M[we];Ue!==null&&he!==void 0&&he.update(Ue,ie,u||a)}Ne&&Ne(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const ke=new bS;ke.setAnimationLoop(Ie),this.setAnimationLoop=function(j){Ne=j},this.dispose=function(){}}}const y3=new Mt,NS=new Be;NS.set(-1,0,0,0,1,0,0,0,1);function S3(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,ES(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,S,x){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,v,S):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Fn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Fn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(y3.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(NS),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=S*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Fn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function M3(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const w=M.program;i.uniformBlockBinding(x,w)}function u(x,M){let w=r[x.id];w===void 0&&(m(x),w=c(x),r[x.id]=w,x.addEventListener("dispose",v));const A=M.program;i.updateUBOMapping(x,A);const y=e.render.frame;s[x.id]!==y&&(f(x),s[x.id]=y)}function c(x){const M=d();x.__bindingPointIndex=M;const w=n.createBuffer(),A=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=r[x.id],w=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,b=w.length;y<b;y++){const C=w[y];if(Array.isArray(C))for(let D=0,N=C.length;D<N;D++)p(C[D],y,D,A);else p(C,y,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,M,w,A){if(g(x,M,w,A)===!0){const y=x.__offset,b=x.value;if(Array.isArray(b)){let C=0;for(let D=0;D<b.length;D++){const N=b[D],k=h(N);_(N,x.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function _(x,M,w){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,w)}function g(x,M,w,A){const y=x.value,b=M+"_"+w;if(A[b]===void 0)return typeof y=="number"||typeof y=="boolean"?A[b]=y:ArrayBuffer.isView(y)?A[b]=y.slice():A[b]=y.clone(),!0;{const C=A[b];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return A[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(x){const M=x.uniforms;let w=0;const A=16;for(let b=0,C=M.length;b<C;b++){const D=Array.isArray(M[b])?M[b]:[M[b]];for(let N=0,k=D.length;N<k;N++){const L=D[N],B=Array.isArray(L.value)?L.value:[L.value];for(let q=0,X=B.length;q<X;q++){const F=B[q],O=h(F),G=w%A,K=G%O.boundary,fe=G+K;w+=K,fe!==0&&A-fe<O.storage&&(w+=A-fe),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=O.storage}}}const y=w%A;return y>0&&(w+=A-y),x.__size=w,x.__cache={},this}function h(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",x),M}function v(x){const M=x.target;M.removeEventListener("dispose",v);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function S(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:S}}const E3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function w3(){return zi===null&&(zi=new yS(E3,16,16,js,Ji),zi.name="DFG_LUT",zi.minFilter=Yt,zi.magFilter=Yt,zi.wrapS=gr,zi.wrapT=gr,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class T3{constructor(e={}){const{canvas:t=Bb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=$n}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const g=p,m=new Set([jm,Zm,Km]),h=new Set([$n,Qi,Ul,Fl,Ym,qm]),v=new Uint32Array(4),S=new Int32Array(4),x=new $;let M=null,w=null;const A=[],y=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,N=null,k=null,L=null,B=null;this._outputColorSpace=ci;let q=0,X=0,F=null,O=-1,G=null;const K=new Pt,fe=new Pt;let Ee=null;const Ne=new We(0);let Ie=0,ke=t.width,j=t.height,ie=1,we=null,Ue=null;const he=new Pt(0,0,ke,j),ze=new Pt(0,0,ke,j);let Et=!1;const Fe=new tg;let Ke=!1,rt=!1;const Xe=new Mt,ut=new $,It=new Pt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function ft(){return F===null?ie:1}let U=i;function Vt(T,I){return t.getContext(T,I)}let Ze,R,E,z,Y,Q,ce,pe,J,te,me,Ce,_e,ge,Le,ee,oe,P,ne,V,re,de,se;try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wm}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),U===null){const I="webgl2";if(U=Vt(I,T),U===null)throw Vt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xe()}catch(T){throw t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),it("WebGLRenderer: "+T.message),T}function xe(){Ze=new wP(U),Ze.init(),re=new m3(U,Ze),R=new pP(U,Ze,e,re),E=new h3(U,Ze),R.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),k=U.createFramebuffer(),L=U.createFramebuffer(),B=U.createFramebuffer(),z=new AP(U),Y=new J2,Q=new p3(U,Ze,E,Y,R,re,z),ce=new EP(C),pe=new RA(U),de=new dP(U,pe),J=new TP(U,pe,z,de),te=new RP(U,J,pe,de,z),P=new CP(U,R,Q),Le=new mP(Y),me=new Q2(C,ce,Ze,R,de,Le),Ce=new S3(C,Y),_e=new t3,ge=new o3(Ze),oe=new fP(C,ce,E,te,_,l),ee=new d3(C,te,R),se=new M3(U,z,R,E),ne=new hP(U,Ze,z),V=new bP(U,Ze,z),z.programs=me.programs,C.capabilities=R,C.extensions=Ze,C.properties=Y,C.renderLists=_e,C.shadowMap=ee,C.state=E,C.info=z}g!==$n&&(b=new LP(g,t.width,t.height,o,r,s));const Me=new x3(C,U);this.xr=Me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(ke,j,!1))},this.getSize=function(T){return T.set(ke,j)},this.setSize=function(T,I,Z=!0){if(Me.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=T,j=I,t.width=Math.floor(T*ie),t.height=Math.floor(I*ie),Z===!0&&(t.style.width=T+"px",t.style.height=I+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(ke*ie,j*ie).floor()},this.setDrawingBufferSize=function(T,I,Z){ke=T,j=I,ie=Z,t.width=Math.floor(T*Z),t.height=Math.floor(I*Z),this.setViewport(0,0,T,I)},this.setEffects=function(T){if(g===$n){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let I=0;I<T.length;I++)if(T[I].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,I,Z,H){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,I,Z,H),E.viewport(K.copy(he).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(ze)},this.setScissor=function(T,I,Z,H){T.isVector4?ze.set(T.x,T.y,T.z,T.w):ze.set(T,I,Z,H),E.scissor(fe.copy(ze).multiplyScalar(ie).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(T){E.setScissorTest(Et=T)},this.setOpaqueSort=function(T){we=T},this.setTransparentSort=function(T){Ue=T},this.getClearColor=function(T){return T.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(T=!0,I=!0,Z=!0){let H=0;if(T){let W=!1;if(F!==null){const Se=F.texture.format;W=m.has(Se)}if(W){const Se=F.texture.type,be=h.has(Se),ye=oe.getClearColor(),Re=oe.getClearAlpha(),De=ye.r,Ge=ye.g,Ye=ye.b;be?(v[0]=De,v[1]=Ge,v[2]=Ye,v[3]=Re,U.clearBufferuiv(U.COLOR,0,v)):(S[0]=De,S[1]=Ge,S[2]=Ye,S[3]=Re,U.clearBufferiv(U.COLOR,0,S))}else H|=U.COLOR_BUFFER_BIT}I&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),oe.dispose(),_e.dispose(),ge.dispose(),Y.dispose(),ce.dispose(),te.dispose(),de.dispose(),se.dispose(),me.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",cn),Me.removeEventListener("sessionend",yi),Mn.stop()};function st(T){T.preventDefault(),s0("WebGLRenderer: Context Lost."),D=!0}function $e(){s0("WebGLRenderer: Context Restored."),D=!1;const T=z.autoReset,I=ee.enabled,Z=ee.autoUpdate,H=ee.needsUpdate,W=ee.type;xe(),z.autoReset=T,ee.enabled=I,ee.autoUpdate=Z,ee.needsUpdate=H,ee.type=W}function Sn(T){it("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function nn(T){const I=T.target;I.removeEventListener("dispose",nn),xi(I)}function xi(T){oa(T),Y.remove(T)}function oa(T){const I=Y.get(T).programs;I!==void 0&&(I.forEach(function(Z){me.releaseProgram(Z)}),T.isShaderMaterial&&me.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,Z,H,W,Se){I===null&&(I=Ot);const be=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=UM(T,I,Z,H,W);E.setMaterial(H,be);let Re=Z.index,De=1;if(H.wireframe===!0){if(Re=J.getWireframeAttribute(Z),Re===void 0)return;De=2}const Ge=Z.drawRange,Ye=Z.attributes.position;let Pe=Ge.start*De,at=(Ge.start+Ge.count)*De;Se!==null&&(Pe=Math.max(Pe,Se.start*De),at=Math.min(at,(Se.start+Se.count)*De)),Re!==null?(Pe=Math.max(Pe,0),at=Math.min(at,Re.count)):Ye!=null&&(Pe=Math.max(Pe,0),at=Math.min(at,Ye.count));const Gt=at-Pe;if(Gt<0||Gt===1/0)return;de.setup(W,H,ye,Z,Re);let vt,dt=ne;if(Re!==null&&(vt=pe.get(Re),dt=V,dt.setIndex(vt)),W.isMesh)H.wireframe===!0?(E.setLineWidth(H.wireframeLinewidth*ft()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(W.isLine){let fn=H.linewidth;fn===void 0&&(fn=1),E.setLineWidth(fn*ft()),W.isLineSegments?dt.setMode(U.LINES):W.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else W.isPoints?dt.setMode(U.POINTS):W.isSprite&&dt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const fn=W._multiDrawStarts,Te=W._multiDrawCounts,En=W._multiDrawCount,tt=Re?pe.get(Re).bytesPerElement:1,ai=Y.get(H).currentProgram.getUniforms();for(let Oi=0;Oi<En;Oi++)ai.setValue(U,"_gl_DrawID",Oi),dt.render(fn[Oi]/tt,Te[Oi])}else if(W.isInstancedMesh)dt.renderInstances(Pe,Gt,W.count);else if(Z.isInstancedBufferGeometry){const fn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Te=Math.min(Z.instanceCount,fn);dt.renderInstances(Pe,Gt,Te)}else dt.render(Pe,Gt)};function To(T,I,Z,H){N!==null&&T.isNodeMaterial&&N.setObject(H,T),Ke===!0&&Le.setState(T,Z,!1),T.transparent===!0&&T.side===hr&&T.forceSinglePass===!1?(T.side=Fn,T.needsUpdate=!0,ou(T,I,H),T.side=Ks,T.needsUpdate=!0,ou(T,I,H),T.side=hr):ou(T,I,H)}this.compile=function(T,I,Z=null){Z===null&&(Z=T),N!==null&&N.renderStart(T,I,Z),w=ge.get(Z),w.init(I),y.push(w),Z.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),T!==Z&&T.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),rt=this.localClippingEnabled,Ke=Le.init(this.clippingPlanes,rt),Ke===!0&&Le.setGlobalState(this.clippingPlanes,I),N!==null&&ee.render(w.state.shadowsArray,Z,I);const H=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let be=0;be<Se.length;be++){const ye=Se[be];To(ye,Z,I,W),H.add(ye)}else To(Se,Z,I,W),H.add(Se)}),w=y.pop(),N!==null&&N.renderEnd(),H},this.compileAsync=function(T,I,Z=null){const H=this.compile(T,I,Z);return new Promise(W=>{function Se(){if(H.forEach(function(be){const Re=Y.get(be).currentProgram;(Re===void 0||Re.isReady())&&H.delete(be)}),H.size===0){W(T);return}setTimeout(Se,10)}Ze.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let bo=null;function iu(T){bo&&bo(T)}function cn(){Mn.stop()}function yi(){Mn.start()}const Mn=new bS;Mn.setAnimationLoop(iu),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(T){bo=T,Me.setAnimationLoop(T),T===null?Mn.stop():Mn.start()},Me.addEventListener("sessionstart",cn),Me.addEventListener("sessionend",yi),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(T,I);const Z=Me.enabled===!0&&Me.isPresenting===!0,H=b!==null&&(F===null||Z)&&b.begin(C,F);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(I),I=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,I,F),w=ge.get(T,y.length),w.init(I),w.state.textureUnits=Q.getTextureUnits(),y.push(w),Xe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Fe.setFromProjectionMatrix(Xe,Yi,I.reversedDepth),rt=this.localClippingEnabled,Ke=Le.init(this.clippingPlanes,rt),M=_e.get(T,A.length),M.init(),A.push(M),Me.enabled===!0&&Me.isPresenting===!0){const be=C.xr.getDepthSensingMesh();be!==null&&nr(be,I,-1/0,C.sortObjects)}nr(T,I,0,C.sortObjects),M.finish(),N!==null&&N.updateLights(w.state.lightsArray),C.sortObjects===!0&&M.sort(we,Ue),_t=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,_t&&oe.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Le.beginShadows();const W=w.state.shadowsArray;if(ee.render(W,T,I),Ke===!0&&Le.endShadows(),(H&&b.hasRenderPass())===!1){const be=M.opaque,ye=M.transmissive;if(w.setupLights(),I.isArrayCamera){const Re=I.cameras;if(ye.length>0)for(let De=0,Ge=Re.length;De<Ge;De++){const Ye=Re[De];su(be,ye,T,Ye)}_t&&oe.render(T);for(let De=0,Ge=Re.length;De<Ge;De++){const Ye=Re[De];ru(M,T,Ye,Ye.viewport)}}else ye.length>0&&su(be,ye,T,I),_t&&oe.render(T),ru(M,T,I)}F!==null&&X===0&&(Q.updateMultisampleRenderTarget(F),Q.updateRenderTargetMipmap(F)),H&&b.end(C),T.isScene===!0&&T.onAfterRender(C,T,I),de.resetDefaultState(),O=-1,G=null,y.pop(),y.length>0?(w=y[y.length-1],Q.setTextureUnits(w.state.textureUnits),Ke===!0&&Le.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,N!==null&&N.renderEnd()};function nr(T,I,Z,H){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Fe)){H&&It.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Xe);const be=te.update(T),ye=T.material;ye.visible&&M.push(T,be,ye,Z,It.z,null,I)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Fe))){const be=te.update(T),ye=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),It.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),It.copy(be.boundingSphere.center)),It.applyMatrix4(T.matrixWorld).applyMatrix4(Xe)),Array.isArray(ye)){const Re=be.groups;for(let De=0,Ge=Re.length;De<Ge;De++){const Ye=Re[De],Pe=ye[Ye.materialIndex];Pe&&Pe.visible&&M.push(T,be,Pe,Z,It.z,Ye,I)}}else ye.visible&&M.push(T,be,ye,Z,It.z,null,I)}}const Se=T.children;for(let be=0,ye=Se.length;be<ye;be++)nr(Se[be],I,Z,H)}function ru(T,I,Z,H){const{opaque:W,transmissive:Se,transparent:be}=T;w.setupLightsView(Z),Ke===!0&&Le.setGlobalState(C.clippingPlanes,Z),H&&E.viewport(K.copy(H)),W.length>0&&au(W,I,Z),Se.length>0&&au(Se,I,Z),be.length>0&&au(be,I,Z),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function su(T,I,Z,H){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Pe=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Ui(1,1,{generateMipmaps:!0,type:Pe?Ji:$n,minFilter:Is,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const Se=w.state.transmissionRenderTarget[H.id],be=H.viewport||K;Se.setSize(be.z*C.transmissionResolutionScale,be.w*C.transmissionResolutionScale);const ye=C.getRenderTarget(),Re=C.getActiveCubeFace(),De=C.getActiveMipmapLevel();C.setRenderTarget(Se),C.getClearColor(Ne),Ie=C.getClearAlpha(),Ie<1&&C.setClearColor(16777215,.5),C.clear(),_t&&oe.render(Z);const Ge=C.toneMapping;C.toneMapping=Zi;const Ye=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Ke===!0&&Le.setGlobalState(C.clippingPlanes,H),au(T,Z,H),Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let at=0,Gt=I.length;at<Gt;at++){const vt=I[at],{object:dt,geometry:fn,material:Te,group:En}=vt;if(Te.side===hr&&dt.layers.test(H.layers)){const tt=Te.side;Te.side=Fn,Te.needsUpdate=!0,Ag(dt,Z,H,fn,Te,En),Te.side=tt,Te.needsUpdate=!0,Pe=!0}}Pe===!0&&(Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se))}C.setRenderTarget(ye,Re,De),C.setClearColor(Ne,Ie),Ye!==void 0&&(H.viewport=Ye),C.toneMapping=Ge}function au(T,I,Z){const H=I.isScene===!0?I.overrideMaterial:null;for(let W=0,Se=T.length;W<Se;W++){const be=T[W],{object:ye,geometry:Re,group:De}=be;let Ge=be.material;Ge.allowOverride===!0&&H!==null&&(Ge=H),ye.layers.test(Z.layers)&&Ag(ye,I,Z,Re,Ge,De)}}function Ag(T,I,Z,H,W,Se){N!==null&&W.isNodeMaterial&&N.setObject(T,W),T.onBeforeRender(C,I,Z,H,W,Se),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(C,I,Z,H,T,Se),W.transparent===!0&&W.side===hr&&W.forceSinglePass===!1?(W.side=Fn,W.needsUpdate=!0,C.renderBufferDirect(Z,I,H,W,T,Se),W.side=Ks,W.needsUpdate=!0,C.renderBufferDirect(Z,I,H,W,T,Se),W.side=hr):C.renderBufferDirect(Z,I,H,W,T,Se),T.onAfterRender(C,I,Z,H,W,Se)}function ou(T,I,Z){I.isScene!==!0&&(I=Ot);const H=Y.get(T),W=w.state.lights,Se=w.state.shadowsArray,be=W.state.version,ye=me.getParameters(T,W.state,Se,I,Z,w.state.lightProbeGridArray),Re=me.getProgramCacheKey(ye);let De=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?I.environment:null,H.fog=I.fog;const Ge=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=ce.get(T.envMap||H.environment,Ge),H.envMapRotation=H.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",nn),De=new Map,H.programs=De);let Ye=De.get(Re);if(Ye!==void 0){if(H.currentProgram===Ye&&H.lightsStateVersion===be)return Rg(T,ye),Ye}else ye.uniforms=me.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,Z,ye),T.onBeforeCompile(ye,C),Ye=me.acquireProgram(ye,Re),De.set(Re,Ye),H.uniforms=ye.uniforms;const Pe=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=Le.uniform),Rg(T,ye),H.needsLights=OM(T),H.lightsStateVersion=be,H.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.sunLights.value=W.state.sun,Pe.sunLightShadows.value=W.state.sunShadow,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.sunShadowMatrix.value=W.state.sunShadowMatrix,Pe.sunShadowCascade.value=W.state.sunShadowCascade,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=Ye,H.uniformsList=null,Ye}function Cg(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=dc.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Rg(T,I){const Z=Y.get(T);Z.outputColorSpace=I.outputColorSpace,Z.batching=I.batching,Z.batchingColor=I.batchingColor,Z.instancing=I.instancing,Z.instancingColor=I.instancingColor,Z.instancingMorph=I.instancingMorph,Z.skinning=I.skinning,Z.morphTargets=I.morphTargets,Z.morphNormals=I.morphNormals,Z.morphColors=I.morphColors,Z.morphTargetsCount=I.morphTargetsCount,Z.numClippingPlanes=I.numClippingPlanes,Z.numIntersection=I.numClipIntersection,Z.vertexAlphas=I.vertexAlphas,Z.vertexTangents=I.vertexTangents,Z.toneMapping=I.toneMapping}function IM(T,I){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(I.matrixWorld);for(let Z=0,H=T.length;Z<H;Z++){const W=T[Z];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function UM(T,I,Z,H,W){I.isScene!==!0&&(I=Ot),Q.resetTextureUnits();const Se=I.fog,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?I.environment:null,ye=F===null?C.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:je.workingColorSpace,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,De=ce.get(H.envMap||be,Re),Ge=H.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ye=!!Z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!Z.morphAttributes.position,at=!!Z.morphAttributes.normal,Gt=!!Z.morphAttributes.color;let vt=Zi;H.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(vt=C.toneMapping);const dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fn=dt!==void 0?dt.length:0,Te=Y.get(H),En=w.state.lights;if(Ke===!0&&(rt===!0||T!==G)){const mt=T===G&&H.id===O;Le.setState(H,T,mt)}let tt=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==En.state.version||Te.outputColorSpace!==ye||W.isBatchedMesh&&Te.batching===!1||!W.isBatchedMesh&&Te.batching===!0||W.isBatchedMesh&&Te.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Te.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Te.instancing===!1||!W.isInstancedMesh&&Te.instancing===!0||W.isSkinnedMesh&&Te.skinning===!1||!W.isSkinnedMesh&&Te.skinning===!0||W.isInstancedMesh&&Te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Te.instancingMorph===!1&&W.morphTexture!==null||Te.envMap!==De||H.fog===!0&&Te.fog!==Se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Le.numPlanes||Te.numIntersection!==Le.numIntersection)||Te.vertexAlphas!==Ge||Te.vertexTangents!==Ye||Te.morphTargets!==Pe||Te.morphNormals!==at||Te.morphColors!==Gt||Te.toneMapping!==vt||Te.morphTargetsCount!==fn||!!Te.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Te.__version=H.version);let ai=Te.currentProgram;tt===!0&&(ai=ou(H,I,W),N&&H.isNodeMaterial&&N.onUpdateProgram(H,ai,Te));let Oi=!1,Pr=!1,la=!1;const ct=ai.getUniforms(),kt=Te.uniforms;if(E.useProgram(ai.program)&&(Oi=!0,Pr=!0,la=!0),H.id!==O&&(O=H.id,Pr=!0),Te.needsLights){const mt=IM(w.state.lightProbeGridArray,W);Te.lightProbeGrid!==mt&&(Te.lightProbeGrid=mt,Pr=!0)}if(Oi||G!==T){E.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ct.setValue(U,"projectionMatrix",T.projectionMatrix),ct.setValue(U,"viewMatrix",T.matrixWorldInverse);const Dr=ct.map.cameraPosition;Dr!==void 0&&Dr.setValue(U,ut.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&ct.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,Pr=!0,la=!0)}if(Te.needsLights&&(En.state.sunShadowMap.length>0&&ct.setValue(U,"sunShadowMap",En.state.sunShadowMap,Q),En.state.directionalShadowMap.length>0&&ct.setValue(U,"directionalShadowMap",En.state.directionalShadowMap,Q),En.state.spotShadowMap.length>0&&ct.setValue(U,"spotShadowMap",En.state.spotShadowMap,Q),En.state.pointShadowMap.length>0&&ct.setValue(U,"pointShadowMap",En.state.pointShadowMap,Q)),W.isSkinnedMesh){ct.setOptional(U,W,"bindMatrix"),ct.setOptional(U,W,"bindMatrixInverse");const mt=W.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ct.setValue(U,"boneTexture",mt.boneTexture,Q))}W.isBatchedMesh&&(ct.setOptional(U,W,"batchingTexture"),ct.setValue(U,"batchingTexture",W._matricesTexture,Q),ct.setOptional(U,W,"batchingIdTexture"),ct.setValue(U,"batchingIdTexture",W._indirectTexture,Q),ct.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&ct.setValue(U,"batchingColorTexture",W._colorsTexture,Q));const Lr=Z.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0)&&P.update(W,Z,ai),(Pr||Te.receiveShadow!==W.receiveShadow)&&(Te.receiveShadow=W.receiveShadow,ct.setValue(U,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&I.environment!==null&&(kt.envMapIntensity.value=I.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=w3()),Pr){if(ct.setValue(U,"toneMappingExposure",C.toneMappingExposure),Te.needsLights&&FM(kt,la),Se&&H.fog===!0&&Ce.refreshFogUniforms(kt,Se),Ce.refreshMaterialUniforms(kt,H,ie,j,w.state.transmissionRenderTarget[T.id]),Te.needsLights&&Te.lightProbeGrid){const mt=Te.lightProbeGrid;kt.probesSH.value=mt.texture,kt.probesMin.value.copy(mt.boundingBox.min),kt.probesMax.value.copy(mt.boundingBox.max),kt.probesResolution.value.copy(mt.resolution)}dc.upload(U,Cg(Te),kt,Q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(dc.upload(U,Cg(Te),kt,Q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(U,"center",W.center),ct.setValue(U,"modelViewMatrix",W.modelViewMatrix),ct.setValue(U,"normalMatrix",W.normalMatrix),ct.setValue(U,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const mt=H.uniformsGroups;for(let Dr=0,ua=mt.length;Dr<ua;Dr++){const Lg=mt[Dr];se.update(Lg,ai),se.bind(Lg,ai)}}return ai}function FM(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.sunLights.needsUpdate=I,T.sunLightShadows.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function OM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,I,Z){const H=Y.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Y.get(T.texture).__webglTexture=I,Y.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,I){const Z=Y.get(T);Z.__webglFramebuffer=I,Z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,Z=0){F=T,q=I,X=Z;let H=null,W=!1,Se=!1;if(T){const ye=Y.get(T);if(ye.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(U.FRAMEBUFFER,ye.__webglFramebuffer),K.copy(T.viewport),fe.copy(T.scissor),Ee=T.scissorTest,E.viewport(K),E.scissor(fe),E.setScissorTest(Ee),O=-1;return}else if(ye.__webglFramebuffer===void 0)Q.setupRenderTarget(T);else if(ye.__hasExternalTextures)Q.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ge=T.depthTexture;if(ye.__boundDepthTexture!==Ge){if(Ge!==null&&Y.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(T)}}const Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);const De=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[I])?H=De[I][Z]:H=De[I],W=!0):T.samples>0&&Q.useMultisampledRTT(T)===!1?H=Y.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?H=De[Z]:H=De,K.copy(T.viewport),fe.copy(T.scissor),Ee=T.scissorTest}else K.copy(he).multiplyScalar(ie).floor(),fe.copy(ze).multiplyScalar(ie).floor(),Ee=Et;if(Z!==0&&(H=k),E.bindFramebuffer(U.FRAMEBUFFER,H)&&E.drawBuffers(T,H),E.viewport(K),E.scissor(fe),E.setScissorTest(Ee),W){const ye=Y.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,Z)}else if(Se){const ye=I;for(let Re=0;Re<T.textures.length;Re++){const De=Y.get(T.textures[Re]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Re,De.__webglTexture,Z,ye)}}else if(T!==null&&Z!==0){const ye=Y.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ye.__webglTexture,Z)}O=-1};function Pg(T){const I=Y.get(T);return(I.__readFormat!==T.format||I.__readType!==T.type)&&(I.__readFormat=T.format,I.__readType=T.type,I.__formatReadable=R.textureFormatReadable(T.format),I.__typeReadable=R.textureTypeReadable(T.type)),I}this.readRenderTargetPixels=function(T,I,Z,H,W,Se,be,ye=0){if(!(T&&T.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){E.bindFramebuffer(U.FRAMEBUFFER,Re);try{const De=T.textures[ye],Ge=De.format,Ye=De.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ye);const Pe=Pg(De);if(Pe.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-H&&Z>=0&&Z<=T.height-W&&U.readPixels(I,Z,H,W,re.convert(Ge),re.convert(Ye),Se)}finally{const De=F!==null?Y.get(F).__webglFramebuffer:null;E.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,I,Z,H,W,Se,be,ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re)if(I>=0&&I<=T.width-H&&Z>=0&&Z<=T.height-W){E.bindFramebuffer(U.FRAMEBUFFER,Re);const De=T.textures[ye],Ge=De.format,Ye=De.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ye);const Pe=Pg(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,Se.byteLength,U.STREAM_READ),U.readPixels(I,Z,H,W,re.convert(Ge),re.convert(Ye),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Gt=F!==null?Y.get(F).__webglFramebuffer:null;E.bindFramebuffer(U.FRAMEBUFFER,Gt);const vt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await zb(U,vt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Se),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(at),U.deleteSync(vt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,I=null,Z=0){const H=Math.pow(2,-Z),W=Math.floor(T.image.width*H),Se=Math.floor(T.image.height*H),be=I!==null?I.x:0,ye=I!==null?I.y:0;Q.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,be,ye,W,Se),E.unbindTexture()},this.copyTextureToTexture=function(T,I,Z=null,H=null,W=0,Se=0){let be,ye,Re,De,Ge,Ye,Pe,at,Gt;const vt=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(Z!==null)be=Z.max.x-Z.min.x,ye=Z.max.y-Z.min.y,Re=Z.isBox3?Z.max.z-Z.min.z:1,De=Z.min.x,Ge=Z.min.y,Ye=Z.isBox3?Z.min.z:0;else{const kt=Math.pow(2,-W);be=Math.floor(vt.width*kt),ye=Math.floor(vt.height*kt),T.isDataArrayTexture?Re=vt.depth:T.isData3DTexture?Re=Math.floor(vt.depth*kt):Re=1,De=0,Ge=0,Ye=0}H!==null?(Pe=H.x,at=H.y,Gt=H.z):(Pe=0,at=0,Gt=0);const dt=re.convert(I.format),fn=re.convert(I.type);let Te;I.isData3DTexture?(Q.setTexture3D(I,0),Te=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Q.setTexture2DArray(I,0),Te=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(I,0),Te=U.TEXTURE_2D),E.activeTexture(U.TEXTURE0),E.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),E.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),E.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const En=E.getParameter(U.UNPACK_ROW_LENGTH),tt=E.getParameter(U.UNPACK_IMAGE_HEIGHT),ai=E.getParameter(U.UNPACK_SKIP_PIXELS),Oi=E.getParameter(U.UNPACK_SKIP_ROWS),Pr=E.getParameter(U.UNPACK_SKIP_IMAGES);E.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),E.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),E.pixelStorei(U.UNPACK_SKIP_PIXELS,De),E.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),E.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);const la=T.isDataArrayTexture||T.isData3DTexture,ct=I.isDataArrayTexture||I.isData3DTexture;if(T.isDepthTexture){const kt=Y.get(T),Lr=Y.get(I),mt=Y.get(kt.__renderTarget),Dr=Y.get(Lr.__renderTarget);E.bindFramebuffer(U.READ_FRAMEBUFFER,mt.__webglFramebuffer),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let ua=0;ua<Re;ua++)la&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(T).__webglTexture,W,Ye+ua),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(I).__webglTexture,Se,Gt+ua)),U.blitFramebuffer(De,Ge,be,ye,Pe,at,be,ye,U.DEPTH_BUFFER_BIT,U.NEAREST);E.bindFramebuffer(U.READ_FRAMEBUFFER,null),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||Y.has(T)){const kt=Y.get(T),Lr=Y.get(I);E.bindFramebuffer(U.READ_FRAMEBUFFER,L),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let mt=0;mt<Re;mt++)la?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,W,Ye+mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,kt.__webglTexture,W),ct?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lr.__webglTexture,Se,Gt+mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Lr.__webglTexture,Se),W!==0?U.blitFramebuffer(De,Ge,be,ye,Pe,at,be,ye,U.COLOR_BUFFER_BIT,U.NEAREST):ct?U.copyTexSubImage3D(Te,Se,Pe,at,Gt+mt,De,Ge,be,ye):U.copyTexSubImage2D(Te,Se,Pe,at,De,Ge,be,ye);E.bindFramebuffer(U.READ_FRAMEBUFFER,null),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ct?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Te,Se,Pe,at,Gt,be,ye,Re,dt,fn,vt.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,Se,Pe,at,Gt,be,ye,Re,dt,vt.data):U.texSubImage3D(Te,Se,Pe,at,Gt,be,ye,Re,dt,fn,vt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Se,Pe,at,be,ye,dt,fn,vt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Se,Pe,at,vt.width,vt.height,dt,vt.data):U.texSubImage2D(U.TEXTURE_2D,Se,Pe,at,be,ye,dt,fn,vt);E.pixelStorei(U.UNPACK_ROW_LENGTH,En),E.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),E.pixelStorei(U.UNPACK_SKIP_PIXELS,ai),E.pixelStorei(U.UNPACK_SKIP_ROWS,Oi),E.pixelStorei(U.UNPACK_SKIP_IMAGES,Pr),Se===0&&I.generateMipmaps&&U.generateMipmap(Te),E.unbindTexture()},this.initRenderTarget=function(T){Y.get(T).__webglFramebuffer===void 0&&Q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Q.setTextureCube(T,0):T.isData3DTexture?Q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Q.setTexture2DArray(T,0):Q.setTexture2D(T,0),E.unbindTexture()},this.resetState=function(){q=0,X=0,F=null,E.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const IS="/assets/dead-noctis-only-pzS37NN3.png",fl=typeof window<"u"?new Image:null;fl&&(fl.src=IS);const b3=({onComplete:n,className:e})=>{const t=ae.useRef(null),i=ae.useRef(null),r=ae.useRef(n);r.current=n;const s=So();return ae.useEffect(()=>{if(s){r.current();return}const a=t.current,o=i.current;if(!a||!o)return;let l=a.clientWidth||window.innerWidth,u=a.clientHeight||window.innerHeight,c,d,f;try{c=new nA,c.background=new We(0),d=new qn(50,l/u,.1,1e3),d.position.set(0,0,50),f=new T3({canvas:o,antialias:!0,alpha:!1,powerPreference:"high-performance"}),f.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),f.setSize(l,u)}catch(ee){console.warn("WebGL initialization failed, falling back to landing page:",ee),n();return}const p=new TA(1055252,1.2);c.add(p);const _=new Pd(16777215,2.8);_.position.set(0,6,28),c.add(_);const g=new Pd(2293640,1.6);g.position.set(24,20,-8),c.add(g);const m=new Pd(62904,.8);m.position.set(-24,-14,-6),c.add(m);const h=new EA(65382,0,80);h.position.set(-25,0,12),c.add(h);const v=140,S=new Qs(.42,.42,.42),x=new Cd({roughness:.3,metalness:.5}),M=new dA(S,x,v);c.add(M);const w=[],A=new on,y=[new We(2293640),new We(65382),new We(62904),new We(1144644)];for(let ee=0;ee<v;ee++){const oe=-120+Math.random()*160,P=45+Math.abs(oe)*.35,ne=30+Math.abs(oe)*.25;let V=(Math.random()-.5)*P*2,re=(Math.random()-.5)*ne*2;Math.abs(V)<14&&re>-5&&re<8&&oe>-1&&oe<25&&(V+=(V>=0?1:-1)*12);const de=new $(V,re,oe);w.push({pos:de,originPos:de.clone(),velocity:new $((Math.random()-.5)*.05,(Math.random()-.5)*.05,.42+Math.random()*.65),rotSpeed:new $((Math.random()-.5)*.04,(Math.random()-.5)*.04,(Math.random()-.5)*.04),rot:new $(Math.random()*6,Math.random()*6,Math.random()*6),scale:.6+Math.random()*.8});const se=y[Math.floor(Math.random()*y.length)];M.setColorAt(ee,se)}M.instanceColor&&(M.instanceColor.needsUpdate=!0);function b(ee,oe=1024,P=128){const ne=document.createElement("canvas");ne.width=oe,ne.height=P;const V=ne.getContext("2d");V&&ee(V,oe,P);const re=new E0(ne);return re.minFilter=Yt,re.magFilter=Yt,re}const C=b((ee,oe,P)=>{ee.clearRect(0,0,oe,P),ee.font='300 32px "Rajdhani", monospace',ee.fillStyle="#e8f5ee",ee.textAlign="center",ee.textBaseline="middle",ee.letterSpacing="10px",ee.fillText("SYSTEM INITIALIZING...",oe/2,P/2)},1024,128),D=b((ee,oe,P)=>{ee.clearRect(0,0,oe,P),ee.shadowColor="rgba(255, 255, 255, 0.45)",ee.shadowBlur=6,ee.font='700 50px "Rajdhani", sans-serif',ee.fillStyle="#ffffff",ee.textAlign="center",ee.textBaseline="middle",ee.letterSpacing="2px",ee.fillText("Google Developer Groups",oe/2,P/2)},1440,140),N=b((ee,oe,P)=>{ee.clearRect(0,0,oe,P),ee.shadowColor="rgba(255, 255, 255, 0.45)",ee.shadowBlur=5,ee.font='700 38px "Rajdhani", sans-serif',ee.fillStyle="#ffffff",ee.textAlign="center",ee.textBaseline="middle",ee.letterSpacing="5px",ee.fillText("PRESENTS",oe/2,P/2)},1024,128),k=b((ee,oe,P)=>{ee.clearRect(0,0,oe,P),ee.font='700 36px "Rajdhani", sans-serif',ee.fillStyle="#22ff88",ee.textAlign="center",ee.textBaseline="middle",ee.letterSpacing="6px",ee.shadowColor="#00ff66",ee.shadowBlur=12,ee.fillText("THE",oe/2,P/2)},512,128),L=b((ee,oe,P)=>{ee.clearRect(0,0,oe,P),ee.font='700 52px "Rajdhani", sans-serif',ee.fillStyle="#22ff88",ee.textAlign="center",ee.textBaseline="middle",ee.letterSpacing="6px",ee.shadowColor="#00ff66",ee.shadowBlur=18,ee.fillText("CTF - LEVEL 1",oe/2,P/2)},1280,160),B=new Fs;B.position.set(0,0,12),c.add(B);const q=new li({map:C,transparent:!0,opacity:0}),X=new bt(new Wn(16,2),q);B.add(X);const F=new li({color:665624,transparent:!0,opacity:0}),O=new bt(new Wn(3.6,.12),F);O.position.set(0,-1.2,0),B.add(O);const G=new li({color:2293640,transparent:!0,opacity:0}),K=new bt(new Wn(3.6,.12),G);K.position.set(0,-1.2,.02),K.scale.set(.001,1,1),B.add(K);const fe=new Fs;fe.position.set(0,0,0),c.add(fe);const Ee=new li({map:D,transparent:!0,opacity:0}),Ne=new bt(new Wn(17,2.15),Ee);Ne.position.set(0,5.7,0),fe.add(Ne);const Ie=new li({map:N,transparent:!0,opacity:0}),ke=new bt(new Wn(12,1.5),Ie);ke.position.set(0,4.3,0),fe.add(ke);const j=new li({map:k,transparent:!0,opacity:0}),ie=new bt(new Wn(5,1.25),j);ie.position.set(0,2.7,0),fe.add(ie);const we=new li({map:L,transparent:!0,opacity:0}),Ue=new bt(new Wn(18,2.25),we);Ue.position.set(0,-3.2,0),fe.add(Ue);const he=new Fs;he.position.set(0,0,0),fe.add(he);const ze=document.createElement("canvas");ze.width=632,ze.height=60;const Et=ze.getContext("2d"),Fe=new E0(ze);Fe.minFilter=Yt,Fe.magFilter=Yt;const Ke=new Image;Ke.src=IS;const rt=fl&&fl.complete?fl:Ke,Xe=ee=>{if(!Et)return;Et.drawImage(ee,0,0);const oe=Et.getImageData(0,0,632,60),P=oe.data;for(let ne=0;ne<P.length;ne+=4)if(P[ne+3]>10){const V=P[ne]*.299+P[ne+1]*.587+P[ne+2]*.114,re=Math.min(255,Math.round(V*1.38));P[ne]=re,P[ne+1]=re,P[ne+2]=re}Et.putImageData(oe,0,0),Fe.needsUpdate=!0};rt.complete?Xe(rt):rt.onload=()=>Xe(rt);const ut=22,It=2.2,Ot=7,_t=6,ft=[],U=It/Ot;for(let ee=0;ee<Ot;ee++){const oe=(Ot-1-ee)/Ot,P=new Wn(ut,U),ne=P.attributes.uv;for(let xe=0;xe<ne.count;xe++){const Me=ne.getX(xe),st=ne.getY(xe);ne.setXY(xe,Me,oe+st/Ot)}ne.needsUpdate=!0;const V=new Cd({map:Fe,transparent:!0,roughness:.15,metalness:.05,color:new We(16777215),opacity:0}),re=new bt(P,V),de=(Ot/2-ee-.5)*U;re.position.set(0,de,0),he.add(re);const se=[];for(let xe=1;xe<=_t;xe++){const Me=-xe*.16,$e=.15*Math.max(.18,1-xe*.14),Sn=new Cd({map:Fe,transparent:!0,color:new We($e,$e,$e),roughness:.75,metalness:.2,opacity:0}),nn=new bt(P,Sn);nn.position.set(0,de,Me),he.add(nn),se.push(nn)}ft.push({frontMesh:re,extrusions:se,originX:(ee%2===0?-1:1)*(14+Math.random()*8),targetX:0,rotY:ee%2===0?-.3:.3})}const Vt=new Wn(ut,It),Ze=new li({map:Fe,transparent:!0,color:65382,blending:Hc,opacity:0}),R=new bt(Vt,Ze);R.position.set(0,0,.04),he.add(R);const E=new li({map:Fe,transparent:!0,color:58879,blending:Hc,opacity:0}),z=new bt(Vt,E);z.position.set(0,0,.06),he.add(z);const Y=10,Q=new Qs(.18,.18,.18),ce=new li({color:2293640,transparent:!0,opacity:0}),pe=[];for(let ee=0;ee<Y;ee++){const oe=new bt(Q,ce);oe.visible=!1,he.add(oe),pe.push(oe)}const J=()=>{const ee=l/u,oe=24.7*ee,P=ee<1?Math.min(1,oe*.82/22):ee<1.4?.88:1;fe.scale.setScalar(P),B.scale.setScalar(Math.min(1,P*1.25))};J();let te=performance.now(),me,Ce=!1;const _e=setTimeout(()=>{Ce||(Ce=!0,r.current())},3200),ge=()=>{!a||!f||(l=a.clientWidth||window.innerWidth,u=a.clientHeight||window.innerHeight,d.aspect=l/u,d.updateProjectionMatrix(),f.setSize(l,u),J())};window.addEventListener("resize",ge);const Le=ee=>{const oe=(ee-te)/1e3;if(oe<=.4){const ne=Math.min(1,oe/.4);d.position.z=50-ne*5;const V=Math.min(1,oe/.15);q.opacity=V,F.opacity=V*.4,G.opacity=V,K.scale.x=Math.max(.001,Math.min(1,oe/.35)),ft.forEach(re=>{re.frontMesh.material.opacity=0,re.extrusions.forEach(de=>{de.material.opacity=0})})}else if(oe<=.65){const ne=(oe-.4)/.25;d.position.z=45-ne*13,q.opacity=Math.max(0,1-ne*2.5),G.opacity=Math.max(0,1-ne*2.5),F.opacity=Math.max(0,1-ne*2.5),oe<.55?X.position.x=(Math.random()-.5)*.4:X.position.x=0,ft.forEach(V=>{V.frontMesh.material.opacity=0,V.extrusions.forEach(re=>{re.material.opacity=0})})}else if(oe<=1.9){const ne=(oe-.65)/1.25;q.opacity=0,G.opacity=0,F.opacity=0,d.position.z=32-Math.sin(ne*Math.PI*.5)*5.5;const V=Math.min(1,(oe-.65)/.2);Ee.opacity=V,Ne.position.y=5.7,Ie.opacity=V,ke.position.y=4.3;const re=.65,de=1,xe=re+de,Me=.25,st=xe+Me,$e=Math.min(1,Math.max(0,(oe-re)/de)),Sn=.5-.5*Math.cos($e*Math.PI),nn=oe>=xe&&oe<=st;let xi=0,oa=1;if(nn){const cn=(oe-xe)/Me;xi=Math.sin(cn*Math.PI)*.9+.1,cn>.12&&cn<.24?oa=.38:cn>.42&&cn<.54?oa=.48:cn>.72&&cn<.82&&(oa=.58),he.position.x=(Math.random()-.5)*.45*xi,he.position.y=(Math.random()-.5)*.08*xi,Ze.opacity=.85*xi,R.position.x=.45*xi+(Math.random()-.5)*.08,R.position.y=(Math.random()-.5)*.05,E.opacity=.75*xi,z.position.x=-.45*xi+(Math.random()-.5)*.08,z.position.y=(Math.random()-.5)*.05,ce.opacity=.85*xi,pe.forEach((yi,Mn)=>{yi.visible=!0;const nr=(Mn*13.37+oe*20)%1,ru=(Mn/Y-.5)*ut+(nr-.5)*1.8,su=Math.sin(Mn*2.5+oe*10)*.5*(It*.8);yi.position.set(ru,su,.15),yi.scale.setScalar(.7+nr*.6)})}else he.position.x=0,he.position.y=0,Ze.opacity=0,E.opacity=0,ce.opacity=0,pe.forEach(cn=>{cn.visible=!1});he.rotation.set(0,0,0);const To=Sn*oa;ft.forEach((cn,yi)=>{let Mn=0;nn&&(yi===0||yi===2||yi===5)&&(Mn=(yi%2===0?1:-1)*(.35+Math.random()*.45)*xi),cn.frontMesh.position.x=Mn,cn.frontMesh.material.opacity=To,cn.extrusions.forEach(nr=>{nr.position.x=Mn,nr.material.opacity=To*.85})});const bo=Math.min(1,Math.max(0,(oe-.7)/.2));j.opacity=bo;const iu=Math.min(1,Math.max(0,(oe-.75)/.25));we.opacity=iu,Ue.position.y=-3.2-(1-iu)*.5,h.intensity=0}else if(oe<=2.15){d.position.z=26.5,d.position.x=0,d.position.y=0,Ee.opacity=1,Ne.position.y=5.7,Ne.position.x=0,Ie.opacity=1,ke.position.y=4.3,ke.position.x=0,j.opacity=1,ie.position.y=2.7,ie.position.x=0,we.opacity=1,Ue.position.y=-3.2,Ue.position.x=0,he.position.set(0,0,0),he.rotation.set(0,0,0),Ze.opacity=0,E.opacity=0,ce.opacity=0,pe.forEach(re=>{re.visible=!1}),ft.forEach(re=>{re.frontMesh.position.x=0,re.frontMesh.material.opacity=1,re.extrusions.forEach(de=>{de.position.x=0,de.material.opacity=.85})});const ne=(oe-1.9)/.25;h.intensity=Math.sin(ne*Math.PI)*3.5,h.position.x=-22+ne*44;const V=a.parentElement||a;V.style.opacity="1",a.style.opacity="1"}else if(oe<=2.7){const re=Math.min(1,Math.max(0,(oe-2.15)/.55)),de=.5+.5*Math.cos(re*Math.PI);d.position.z=26.5,d.position.x=0,d.position.y=0,he.position.set(0,0,0),he.rotation.set(0,0,0),ft.forEach(xe=>{xe.frontMesh.position.x=0,xe.extrusions.forEach(Me=>{Me.position.x=0})}),h.intensity=0;const se=a.parentElement||a;se.style.opacity=String(de),a.style.opacity="1"}else{Ce||(Ce=!0,clearTimeout(_e),r.current());return}const P=oe>=.45&&oe<=.85;for(let ne=0;ne<v;ne++){const V=w[ne];if(P){const re=Math.sign(V.originPos.x||1)*(14+Math.abs(V.originPos.x)*.15);V.pos.x+=(re-V.pos.x)*.045,V.pos.y+=(0-V.pos.y)*.04}else if(V.pos.z+=V.velocity.z,V.pos.z>d.position.z+5){V.pos.z=-120;const re=45+Math.abs(V.pos.z)*.35,de=30+Math.abs(V.pos.z)*.25;V.pos.x=(Math.random()-.5)*re*2,V.pos.y=(Math.random()-.5)*de*2}V.rot.x+=V.rotSpeed.x,V.rot.y+=V.rotSpeed.y,V.rot.z+=V.rotSpeed.z,A.position.copy(V.pos),A.rotation.set(V.rot.x,V.rot.y,V.rot.z),A.scale.setScalar(V.scale),A.updateMatrix(),M.setMatrixAt(ne,A.matrix)}M.instanceMatrix.needsUpdate=!0,f.render(c,d),me=requestAnimationFrame(Le)};return me=requestAnimationFrame(Le),()=>{clearTimeout(_e),cancelAnimationFrame(me),window.removeEventListener("resize",ge);try{const ee=a==null?void 0:a.parentElement;ee&&(ee.style.opacity=""),a&&(a.style.opacity=""),S.dispose(),x.dispose(),M.dispose(),C.dispose(),D.dispose(),N.dispose(),k.dispose(),L.dispose(),Fe.dispose(),Vt.dispose(),Ze.dispose(),E.dispose(),Q.dispose(),ce.dispose(),f.dispose()}catch{}}},[s]),le.jsx("div",{ref:t,className:e,style:{position:"fixed",inset:0,zIndex:100,backgroundColor:"#000000",overflow:"hidden"},children:le.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%",pointerEvents:"none"}})})},US=ae.createContext({isIntroActive:!1,hasHandoffStarted:!0}),A3=()=>ae.useContext(US),C3=({onIntroComplete:n,children:e})=>{const t=So(),[i,r]=ae.useState(!t),[s,a]=ae.useState(t);ae.useEffect(()=>{if(t){a(!0);return}const l=setTimeout(()=>{a(!0)},2300);return()=>clearTimeout(l)},[t]);const o=ae.useCallback(()=>{a(!0),r(!1),n&&n()},[n]);return ae.useEffect(()=>{const l=u=>{u.key==="Escape"&&i&&o()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i,o]),le.jsxs(US.Provider,{value:{isIntroActive:i,hasHandoffStarted:s},children:[i&&le.jsxs("div",{className:"fixed inset-0 z-[100] select-none overflow-hidden",role:"status","aria-live":"polite",children:[le.jsx("button",{type:"button",onClick:o,className:"absolute top-6 right-6 z-[110] text-[10px] font-mono tracking-cyber-widest uppercase text-ctf-muted/70 hover:text-accent-green border border-ctf-border/30 hover:border-accent-green px-3 py-1 rounded chamfer-sm transition-colors cursor-pointer","aria-label":"Skip intro animation",children:"SKIP [ESC]"}),le.jsx(b3,{onComplete:o})]}),e]})};function cr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function FS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Bl={duration:.5,overwrite:!1,delay:0},rg,ln,Tt,pi=1e8,pt=1/pi,Np=Math.PI*2,R3=Np/4,P3=0,OS=Math.sqrt,L3=Math.cos,D3=Math.sin,tn=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},br=function(e){return typeof e=="number"},sg=function(e){return typeof e>"u"},tr=function(e){return typeof e=="object"},On=function(e){return e!==!1},ag=function(){return typeof window<"u"},$u=function(e){return Ft(e)||tn(e)},kS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xn=Array.isArray,N3=/random\([^)]+\)/g,I3=/,\s*/g,J0=/(?:-?\.?\d|\.)+/gi,BS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,za=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Od=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zS=/[+-]=-?[.\d]+/,U3=/[^,'"\[\]\s]+/gi,F3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,Gi,Ip,og,ni={},Kc={},VS,GS=function(e){return(Kc=co(e,ni))&&Vn},lg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},zl=function(e,t){return!t&&console.warn(e)},HS=function(e,t){return e&&(ni[e]=t)&&Kc&&(Kc[e]=t)||ni},Vl=function(){return 0},O3={suppressEvents:!0,isStart:!0,kill:!1},hc={suppressEvents:!0,kill:!1},k3={suppressEvents:!0},ug={},us=[],Up={},WS,Yn={},kd={},ev=30,pc=[],cg="",fg=function(e){var t=e[0],i,r;if(tr(t)||Ft(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=pc.length;r--&&!pc[r].targetTest(t););i=pc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new dM(e[r],i)))||e.splice(r,1);return e},zs=function(e){return e._gsap||fg(mi(e))[0]._gsap},XS=function(e,t,i){return(i=e[t])&&Ft(i)?e[t]():sg(i)&&e.getAttribute&&e.getAttribute(t)||i},kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},At=function(e){return Math.round(e*1e7)/1e7||0},Qa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},B3=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Zc=function(){var e=us.length,t=us.slice(0),i,r;for(Up={},us.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},dg=function(e){return!!(e._initted||e._startAt||e.add)},YS=function(e,t,i,r){us.length&&!ln&&Zc(),e.render(t,i,!!(ln&&t<0&&dg(e))),us.length&&!ln&&Zc()},qS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(U3).length<2?t:tn(e)?e.trim():e},$S=function(e){return e},ii=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},z3=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},co=function(e,t){for(var i in t)e[i]=t[i];return e},tv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=tr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},jc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},dl=function(e){var t=e.parent||Rt,i=e.keyframes?z3(xn(e.keyframes)):ii;if(On(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},V3=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},KS=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Tf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ps=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},G3=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Fp=function(e,t,i,r){return e._startAt&&(ln?e._startAt.revert(hc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},H3=function n(e){return!e||e._ts&&n(e.parent)},nv=function(e){return e._repeat?fo(e._tTime,e=e.duration()+e._rDelay)*e:0},fo=function(e,t){var i=Math.floor(e=At(e/t));return e&&i===e?i-1:i},Qc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},bf=function(e){return e._end=At(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},Af=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=At(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),bf(e),i._dirty||Vs(i,e)),e},ZS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Qc(e.rawTime(),t),(!t._dur||nu(0,t.totalDuration(),i)-t._tTime>pt)&&t.render(i,!0)),Vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-pt}},Xi=function(e,t,i,r){return t.parent&&ps(t),t._start=At((br(i)?i:i||e!==Rt?ui(e,i,t):e._time)+t._delay),t._end=At(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),KS(e,t,"_first","_last",e._sort?"_start":0),Op(t)||(e._recent=t),r||ZS(e,t),e._ts<0&&Af(e,e._tTime),e},jS=function(e,t){return(ni.ScrollTrigger||lg("scrollTrigger",t))&&ni.ScrollTrigger.create(t,e)},QS=function(e,t,i,r,s){if(pg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&WS!==Kn.frame)return us.push(e),e._lazy=[s,r],1},W3=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Op=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},X3=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&W3(e)&&!(!e._initted&&Op(e))||(e._ts<0||e._dp._ts<0)&&!Op(e))?0:1,o=e._rDelay,l=0,u,c,d;if(o&&e._repeat&&(l=nu(0,e._tDur,t),c=fo(l,o),e._yoyo&&c&1&&(a=1-a),c!==fo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||ln||r||e._zTime===pt||!t&&e._zTime){if(!e._initted&&QS(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?pt:0),i||(i=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&Fp(e,t,i,!0),e._onUpdate&&!i&&jn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ps(e,1),!i&&!ln&&(jn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Y3=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ho=function(e,t,i,r){var s=e._repeat,a=At(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:At(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Af(e,e._tTime=e._tDur*o),e.parent&&bf(e),i||Vs(e.parent,e),e},iv=function(e){return e instanceof Ln?Vs(e):ho(e,e._dur)},q3={_start:0,endTime:Vl,totalDuration:Vl},ui=function n(e,t,i){var r=e.labels,s=e._recent||q3,a=e.duration()>=pi?s.endTime(!1):e._dur,o,l,u;return tn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&i&&(l=l/100*(xn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},hl=function(e,t,i){var r=br(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=On(l.vars.inherit)&&l.parent;a.immediateRender=On(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Wt(t[0],a,t[s+1])},ys=function(e,t){return e||e===0?t(e):t},nu=function(e,t,i){return i<e?e:i>t?t:i},_n=function(e,t){return!tn(e)||!(t=F3.exec(e))?"":t[1]},$3=function(e,t,i){return ys(i,function(r){return nu(e,t,r)})},kp=[].slice,JS=function(e,t){return e&&tr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&tr(e[0]))&&!e.nodeType&&e!==Gi},K3=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return tn(r)&&!t||JS(r,1)?(s=i).push.apply(s,mi(r)):i.push(r)})||i},mi=function(e,t,i){return Tt&&!t&&Tt.selector?Tt.selector(e):tn(e)&&!i&&(Ip||!po())?kp.call((t||og).querySelectorAll(e),0):xn(e)?K3(e,i):JS(e)?kp.call(e,0):e?[e]:[]},Bp=function(e){return e=mi(e)[0]||zl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return mi(t,i.querySelectorAll?i:i===e?zl("Invalid scope")||og.createElement("div"):e)}},eM=function(e){return e.sort(function(){return .5-Math.random()})},tM=function(e){if(Ft(e))return e;var t=tr(e)?e:{each:e},i=Gs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,u=t.axis,c=r,d=r;return tn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(c=r[0],d=r[1]),function(f,p,_){var g=(_||t).length,m=a[g],h,v,S,x,M,w,A,y,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,pi])[1],!b){for(A=-pi;A<(A=_[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(m=a[g]=[],h=l?Math.min(b,g)*c-.5:r%b,v=b===pi?0:l?g*d/b-.5:r/b|0,A=0,y=pi,w=0;w<g;w++)S=w%b-h,x=v-(w/b|0),m[w]=M=u?Math.abs(u==="y"?x:S):OS(S*S+x*x),M>A&&(A=M),M<y&&(y=M);r==="random"&&eM(m),m.max=A-y,m.min=y,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:u?u==="y"?g/b:b:Math.max(b,g/b))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=_n(t.amount||t.each)||0,i=i&&g<0?lL(i):i}return g=(m[f]-m.min)/m.max||0,At(m.b+(i?i(g):g)*m.v)+m.u}},zp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=At(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(br(i)?0:_n(i))}},nM=function(e,t){var i=xn(e),r,s;return!i&&tr(e)&&(r=i=e.radius||pi,e.values?(e=mi(e.values),(s=!br(e[0]))&&(r*=r)):e=zp(e.increment)),ys(t,i?Ft(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=pi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-o,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-o),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:a,s||c===a||br(a)?c:c+_n(a)}:zp(e))},iM=function(e,t,i,r){return ys(xn(e)?!t:i===!0?!!(i=0):!r,function(){return xn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Z3=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},j3=function(e,t){return function(i){return e(parseFloat(i))+(t||_n(i))}},Q3=function(e,t,i){return sM(e,t,0,1,i)},rM=function(e,t,i){return ys(i,function(r){return e[~~t(r)]})},J3=function n(e,t,i){var r=t-e;return xn(e)?rM(e,n(0,e.length),t):ys(i,function(s){return(r+(s-e)%r)%r+e})},eL=function n(e,t,i){var r=t-e,s=r*2;return xn(e)?rM(e,n(0,e.length-1),t):ys(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Gl=function(e){return e.replace(N3,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(I3);return iM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},sM=function(e,t,i,r,s){var a=t-e,o=r-i;return ys(s,function(l){return i+((l-e)/a*o||0)})},tL=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=tn(e),o={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(xn(e)&&!xn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return c[g](_-g)},i=t}else r||(e=co(xn(e)?[]:{},e));if(!c){for(l in t)hg.call(o,e,l,"get",t[l]);s=function(_){return _g(_,o)||(a?e.p:e)}}}return ys(i,s)},rv=function(e,t,i){var r=e.labels,s=pi,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},jn=function(e,t,i){var r=e.vars,s=r[t],a=Tt,o=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&us.length&&Zc(),o&&(Tt=o),c=l?s.apply(u,l):s.call(u),Tt=a,c},Jo=function(e){return ps(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&jn(e,"onInterrupt"),e},Va,aM=[],oM=function(e){if(e)if(e=!e.name&&e.default||e,ag()||e.headless){var t=e.name,i=Ft(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Vl,render:_g,add:hg,kill:vL,modifier:_L,rawVars:0},a={targetTest:0,get:0,getSetter:gg,aliases:{},register:0};if(po(),e!==r){if(Yn[t])return;ii(r,ii(jc(e,s),a)),co(r.prototype,co(s,jc(e,a))),Yn[r.prop=t]=r,e.targetTest&&(pc.push(r),ug[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}HS(t,r),e.register&&e.register(Vn,r,Bn)}else aM.push(e)},ht=255,el={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},Bd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ht+.5|0},lM=function(e,t,i){var r=e?br(e)?[e>>16,e>>8&ht,e&ht]:0:el.black,s,a,o,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),el[e])r=el[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ht,r&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(J0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,r.length>3&&(r[3]*=1),r[0]=Bd(l+1/3,s,a),r[1]=Bd(l,s,a),r[2]=Bd(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(BS),i&&r.length<4&&(r[3]=1),r}else r=e.match(J0)||el.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/ht,a=r[1]/ht,o=r[2]/ht,d=Math.max(s,a,o),f=Math.min(s,a,o),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(a-o)/p+(a<o?6:0):d===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},uM=function(e){var t=[],i=[],r=-1;return e.split(cs).forEach(function(s){var a=s.match(za)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},sv=function(e,t,i){var r="",s=(e+r).match(cs),a=t?"hsla(":"rgba(",o=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=lM(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=uM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(cs,"1").split(za),d=u.length-1;o<d;o++)r+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(cs),d=u.length-1;o<d;o++)r+=u[o]+s[o];return r+u[d]},cs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in el)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),nL=/hsl[a]?\(/,cM=function(e){var t=e.join(" "),i;if(cs.lastIndex=0,cs.test(t))return i=nL.test(t),e[1]=sv(e[1],i),e[0]=sv(e[0],i,uM(e[1])),!0},Hl,Kn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,u,c,d,f,p,_=function g(m){var h=n()-r,v=m===!0,S,x,M,w;if((h>e||h<0)&&(i+=h-t),r+=h,M=r-i,S=M-a,(S>0||v)&&(w=++d.frame,f=M-d.time*1e3,d.time=M=M/1e3,a+=S+(S>=s?4:s-S),x=1),v||(l=u(g)),x)for(p=0;p<o.length;p++)o[p](M,f,w,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){VS&&(!Ip&&ag()&&(Gi=Ip=window,og=Gi.document||{},ni.gsap=Vn,(Gi.gsapVersions||(Gi.gsapVersions=[])).push(Vn.version),GS(Kc||Gi.GreenSockGlobals||!Gi.gsap&&Gi||{}),aM.forEach(oM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Hl=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Hl=0,u=Vl},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,h,v){var S=h?function(x,M,w,A){m(x,M,w,A),d.remove(S)}:m;return d.remove(m),o[v?"unshift":"push"](S),po(),S},remove:function(m,h){~(h=o.indexOf(m))&&o.splice(h,1)&&p>=h&&p--},_listeners:o},d}(),po=function(){return!Hl&&Kn.wake()},Je={},iL=/^[\d.\-M][\d.\-,\s]/,rL=/["']/g,sL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,u;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),t[r]=isNaN(u)?u.replace(rL,"").trim():+u,r=l.substr(o+1).trim();return t},aL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},oL=function(e){var t=(e+"").split("("),i=Je[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[sL(t[1])]:aL(e).split(",").map(qS)):Je._CE&&iL.test(e)?Je._CE("",e):i},lL=function(e){return function(t){return 1-e(1-t)}},Gs=function(e,t){return e&&(Ft(e)?e:Je[e]||oL(e))||t},aa=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return kn(e,function(o){Je[o]=ni[o]=s,Je[a=o.toLowerCase()]=i;for(var l in s)Je[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Je[o+"."+l]=s[l]}),s},fM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Np*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*D3((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:fM(o);return s=Np/s,l.config=function(u,c){return n(e,u,c)},l},Vd=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:fM(i);return r.config=function(s){return n(e,s)},r};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;aa(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Je.Linear.easeNone=Je.none=Je.Linear.easeIn;aa("Elastic",zd("in"),zd("out"),zd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};aa("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);aa("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});aa("Circ",function(n){return-(OS(1-n*n)-1)});aa("Sine",function(n){return n===1?1:-L3(n*R3)+1});aa("Back",Vd("in"),Vd("out"),Vd());Je.SteppedEase=Je.steps=ni.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-pt;return function(o){return((r*nu(0,a,o)|0)+s)*i}}};Bl.ease=Je["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return cg+=n+","+n+"Params,"});var dM=function(e,t){this.id=P3++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:XS,this.set=t?t.getSetter:gg},Wl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ho(this,+t.duration,1,1),this.data=t.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),Hl||Kn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ho(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(po(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Af(this,i),!s._dp||s.parent||ZS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===pt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),YS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+nv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+nv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?fo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Qc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-pt?0:this._rts,this.totalTime(nu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),bf(this),G3(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(po(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=At(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Xi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(On(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=k3);var r=ln;return ln=i,dg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ln=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,iv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,iv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ui(this,i),On(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,On(r)),this._dur||(this._zTime=-pt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-pt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Ft(i)?i:$S,l=function(){var c=r.then;r.then=null,s&&s(),Ft(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),a(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Jo(this)},n}();ii(Wl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var Ln=function(n){FS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=On(i.sortChildren),Rt&&Xi(i.parent||Rt,cr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&jS(cr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return hl(0,arguments,this),this},t.from=function(r,s,a){return hl(1,arguments,this),this},t.fromTo=function(r,s,a,o){return hl(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,dl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(r,s,ui(this,a),1),this},t.call=function(r,s,a){return Xi(this,Wt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new Wt(r,a,ui(this,l)),this},t.staggerFrom=function(r,s,a,o,l,u,c){return a.runBackwards=1,dl(a).immediateRender=On(a.immediateRender),this.staggerTo(r,s,a,o,l,u,c)},t.staggerFromTo=function(r,s,a,o,l,u,c,d){return o.startAt=a,dl(o).immediateRender=On(o.immediateRender),this.staggerTo(r,s,o,l,u,c,d)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:At(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,g,m,h,v,S,x,M,w,A;if(this!==Rt&&c>l&&r>=0&&(c=l),c!==this._tTime||a||d){if(o!==this._time&&u&&(c+=this._time-o,r+=this._time-o),f=c,x=this._start,S=this._ts,h=!S,d&&(u||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=At(c%m),c===l?(g=this._repeat,f=u):(M=At(c/m),g=~~M,g&&g===M&&(f=u,g--),f>u&&(f=u)),M=fo(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),w&&g&1&&(f=u-f,A=1),g!==M&&!this._lock){var y=w&&M&1,b=y===(w&&g&1);if(g<M&&(y=!y),o=y?0:c%u?u:c,this._lock=1,this.render(o||(A?0:At(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=g),o&&o!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,b&&(this._lock=2,o=y?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Y3(this,At(o),At(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&c&&u&&!s&&!M&&(jn(this,"onStart"),this._tTime!==c))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=-pt);break}}p=_}else{p=this._last;for(var C=r<0?r:f;p;){if(_=p._prev,(p._act||C<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(C-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(C-p._start)*p._ts,s,a||ln&&dg(p)),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=C?-pt:pt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-pt)._zTime=f>=o?1:-1,this._ts))return this._start=x,bf(this),this.render(r,s,a);this._onUpdate&&!s&&jn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&ps(this,1),!s&&!(r<0&&!o)&&(c||o||!l)&&(jn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(br(s)||(s=ui(this,s,r)),!(r instanceof Wl)){if(xn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(tn(r))return this.addLabel(r,s);if(Ft(r))r=Wt.delayedCall(0,r);else return this}return this!==r?Xi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-pi);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof Wt?s&&l.push(u):(a&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return tn(r)?this.removeLabel(r):Ft(r)?this.killTweensOf(r):(r.parent===this&&Tf(this,r),r===this._recent&&(this._recent=this._last),Vs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=At(Kn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ui(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Wt.delayedCall(0,s||Vl,a);return o.data="isPause",this._hasPause=1,Xi(this,o,ui(this,r))},t.removePause=function(r){var s=this._first;for(r=ui(this,r);s;)s._start===r&&s.data==="isPause"&&ps(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)jr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=mi(r),l=this._first,u=br(s),c;l;)l instanceof Wt?B3(l._targets,o)&&(u?(!jr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=ui(a,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Wt.to(a,ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||pt,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());_._dur!==m&&ho(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,ii({startAt:{time:ui(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),rv(this,ui(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),rv(this,ui(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,u;for(r=At(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=r);return Vs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Vs(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=pi,u,c,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Xi(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=At(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;ho(a,a===Rt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Rt._ts&&(YS(Rt,Qc(r,Rt)),WS=Kn.frame),Kn.frame>=ev){ev+=ei.autoSleep||120;var s=Rt._first;if((!s||!s._ts)&&ei.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},e}(Wl);ii(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var uL=function(e,t,i,r,s,a,o){var l=new Bn(this._pt,e,t,0,1,vM,null,s),u=0,c=0,d,f,p,_,g,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Gl(r)),a&&(v=[i,r],a(v,e,t),i=v[0],r=v[1]),f=i.match(Od)||[];d=Od.exec(r);)_=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Qa(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=Od.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=o,(zS.test(r)||h)&&(l.e=0),this._pt=l,l},hg=function(e,t,i,r,s,a,o,l,u,c){Ft(r)&&(r=r(s||0,e,a));var d=e[t],f=i!=="get"?i:Ft(d)?u?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Ft(d)?u?pL:gM:mg,_;if(tn(r)&&(~r.indexOf("random(")&&(r=Gl(r)),r.charAt(1)==="="&&(_=Qa(f,r)+(_n(f)||0),(_||_===0)&&(r=_))),!c||f!==r||Vp)return!isNaN(f*r)&&r!==""?(_=new Bn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?gL:_M,0,p),u&&(_.fp=u),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&lg(t,r),uL.call(this,e,t,f,r,p,l||ei.stringFilter,u))},cL=function(e,t,i,r,s){if(Ft(e)&&(e=pl(e,s,t,i,r)),!tr(e)||e.style&&e.nodeType||xn(e)||kS(e))return tn(e)?pl(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=pl(e[o],s,t,i,r);return a},hM=function(e,t,i,r,s,a){var o,l,u,c;if(Yn[e]&&(o=new Yn[e]).init(s,o.rawVars?t[e]:cL(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Bn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Va))for(u=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},jr,Vp,pg=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,S=e._overwrite==="auto"&&!rg,x=e.timeline,M=r.easeReverse||d,w,A,y,b,C,D,N,k,L,B,q,X,F;if(x&&(!f||!s)&&(s="none"),e._ease=Gs(s,Bl.ease),e._rEase=M&&(Gs(M)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||f&&!r.stagger){if(k=m[0]?zs(m[0]).harness:0,X=k&&r[k.prop],w=jc(r,ug),g&&(g._zTime<0&&g.progress(1),t<0&&c&&o&&!p?g.render(-1,!0):g.revert(c&&_?hc:O3),g._lazy=0),a){if(ps(e._startAt=Wt.set(m,ii({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&On(l),startAt:null,delay:0,onUpdate:u&&function(){return jn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!o&&!p)&&e._startAt.revert(hc),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(o=!1),y=ii({overwrite:!1,data:"isFromStart",lazy:o&&!g&&On(l),immediateRender:o,stagger:0,parent:h},w),X&&(y[k.prop]=X),ps(e._startAt=Wt.set(m,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(hc):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&On(l)||l&&!_,A=0;A<m.length;A++){if(C=m[A],N=C._gsap||fg(m)[A]._gsap,e._ptLookup[A]=B={},Up[N.id]&&us.length&&Zc(),q=v===m?A:v.indexOf(C),k&&(L=new k).init(C,X||w,e,q,v)!==!1&&(e._pt=b=new Bn(e._pt,C,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(O){B[O]=b}),L.priority&&(D=1)),!k||X)for(y in w)Yn[y]&&(L=hM(y,w,e,q,C,v))?L.priority&&(D=1):B[y]=b=hg.call(e,C,y,"get",w[y],q,v,0,r.stringFilter);e._op&&e._op[A]&&e.kill(C,e._op[A]),S&&e._pt&&(jr=e,Rt.killTweensOf(C,B,e.globalTime(t)),F=!e.parent,jr=0),e._pt&&l&&(Up[N.id]=1)}D&&xM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!F,f&&t<=0&&x.render(pi,!0,!0)},fL=function(e,t,i,r,s,a,o,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Vp=1,e.vars[t]="+=0",pg(e,o),Vp=0,l?zl(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=i-c.s,d.e&&(d.e=Bt(i)+_n(d.e)),d.b&&(d.b=c.s+_n(d.b))},dL=function(e,t){var i=e[0]?zs(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=co({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},hL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(xn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,u){return o.push({t:u/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},pl=function(e,t,i,r,s){return Ft(e)?e.call(t,i,r,s):tn(e)&&~e.indexOf("random(")?Gl(e):e},pM=cg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",mM={};kn(pM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return mM[n]=1});var Wt=function(n){FS(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:dl(r))||this;var l=o.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=r.parent||Rt,v=(xn(i)||kS(i)?br(i[0]):"length"in r)?[i]:mi(i),S,x,M,w,A,y,b,C;if(o._targets=v.length?fg(v):zl("GSAP target "+i+" not found. https://gsap.com",!ei.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||f||$u(u)||$u(c)){r=o.vars;var D=r.easeReverse||r.yoyoEase;if(S=o.timeline=new Ln({data:"nested",defaults:g||{},targets:h&&h.data==="nested"?h.vars.targets:v}),S.kill(),S.parent=S._dp=cr(o),S._start=0,f||$u(u)||$u(c)){if(w=v.length,b=f&&tM(f),tr(f))for(A in f)~pM.indexOf(A)&&(C||(C={}),C[A]=f[A]);for(x=0;x<w;x++)M=jc(r,mM),M.stagger=0,D&&(M.easeReverse=D),C&&co(M,C),y=v[x],M.duration=+pl(u,cr(o),x,y,v),M.delay=(+pl(c,cr(o),x,y,v)||0)-o._delay,!f&&w===1&&M.delay&&(o._delay=c=M.delay,o._start+=c,M.delay=0),S.to(y,M,b?b(x,y,v):0),S._ease=Je.none;S.duration()?u=c=0:o.timeline=0}else if(_){dl(ii(S.vars.defaults,{ease:"none"})),S._ease=Gs(_.ease||r.ease||"none");var N=0,k,L,B;if(xn(_))_.forEach(function(q){return S.to(v,q,">")}),S.duration();else{M={};for(A in _)A==="ease"||A==="easeEach"||hL(A,_[A],M,_.easeEach);for(A in M)for(k=M[A].sort(function(q,X){return q.t-X.t}),N=0,x=0;x<k.length;x++)L=k[x],B={ease:L.e,duration:(L.t-(x?k[x-1].t:0))/100*u},B[A]=L.v,S.to(v,B,N),N+=B.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||o.duration(u=S.duration())}else o.timeline=0;return p===!0&&!rg&&(jr=cr(o),Rt.killTweensOf(v),jr=0),Xi(h,cr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!u&&!_&&o._start===At(h._time)&&On(d)&&H3(cr(o))&&h.data!=="nested")&&(o._tTime=-pt,o.render(Math.max(0,-c)||0)),m&&jS(cr(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-pt&&!c?l:r<pt?0:r,f,p,_,g,m,h,v,S;if(!u)X3(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,S=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,a);if(f=At(d%g),d===l?(_=this._repeat,f=u):(m=At(d/g),_=~~m,_&&_===m?(f=u,_--):f>u&&(f=u)),h=this._yoyo&&_&1,h&&(f=u-f),m=fo(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(At(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(QS(this,c?r:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,a)}if(this._rEase){var x=f<o;if(x!==this._inv){var M=x?o:u-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(jn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;S&&S.render(r<0?r:S._dur*S._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Fp(this,r,s,a),jn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&jn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Fp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ps(this,1),!s&&!(c&&!o)&&(d||o||h)&&(jn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Hl||Kn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||pg(this,u),c=this._ease(u/this._dur),fL(this,r,s,a,o,c,u,l)?this.resetTo(r,s,a,o,1):(Af(this,0),this.parent||KS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Jo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ln),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,jr&&jr.vars.overwrite!==!0)._first||Jo(this),this.parent&&a!==this.timeline.totalDuration()&&ho(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?mi(r):o,u=this._ptLookup,c=this._pt,d,f,p,_,g,m,h;if((!s||s==="all")&&V3(o,l))return s==="all"&&(this._pt=0),Jo(this);for(d=this._op=this._op||[],s!=="all"&&(tn(s)&&(g={},kn(s,function(v){return g[v]=1}),s=g),s=dL(o,s)),h=o.length;h--;)if(~l.indexOf(o[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Tf(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Jo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return hl(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return hl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Rt.killTweensOf(r,s,a)},e}(Wl);ii(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(n){Wt[n]=function(){var e=new Ln,t=kp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var mg=function(e,t,i){return e[t]=i},gM=function(e,t,i){return e[t](i)},pL=function(e,t,i,r){return e[t](r.fp,i)},mL=function(e,t,i){return e.setAttribute(t,i)},gg=function(e,t){return Ft(e[t])?gM:sg(e[t])&&e.setAttribute?mL:mg},_M=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},gL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},_g=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},_L=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},vL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Tf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},xL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},xM=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},Bn=function(){function n(t,i,r,s,a,o,l,u,c){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||_M,this.d=l||this,this.set=u||mg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=xL,this.m=i,this.mt=s,this.tween=r},n}();kn(cg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return ug[n]=1});ni.TweenMax=ni.TweenLite=Wt;ni.TimelineLite=ni.TimelineMax=Ln;Rt=new Ln({sortChildren:!1,defaults:Bl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ei.stringFilter=cM;var Hs=[],mc={},yL=[],av=0,SL=0,Gd=function(e){return(mc[e]||yL).map(function(t){return t()})},Gp=function(){var e=Date.now(),t=[];e-av>2&&(Gd("matchMediaInit"),Hs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,u;for(o in r)a=Gi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(i.revert(),l&&t.push(i))}),Gd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),av=e,Gd("matchMedia"))},yM=function(){function n(t,i){this.selector=i&&Bp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=SL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Ft(i)&&(s=r,r=i,i=Ft);var a=this,o=function(){var u=Tt,c=a.selector,d;return u&&u!==a&&u.data.push(a),s&&(a.selector=Bp(s)),Tt=a,d=r.apply(a,arguments),Ft(d)&&a._r.push(d),Tt=u,a.selector=c,a.isReverted=!1,d};return a.last=o,i===Ft?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=Tt;Tt=null,i(this),Tt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Wt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Ln?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Wt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Hs.length;a--;)Hs[a].id===this.id&&Hs.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),ML=function(){function n(t){this.contexts=[],this.scope=t,Tt&&Tt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){tr(i)||(i={matches:i});var a=new yM(0,s||this.scope),o=a.conditions={},l,u,c;Tt&&!a.selector&&(a.selector=Tt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(u in i)u==="all"?c=1:(l=Gi.matchMedia(i[u]),l&&(Hs.indexOf(a)<0&&Hs.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(Gp):l.addEventListener("change",Gp)));return c&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Jc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return oM(r)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,i,r){tn(e)&&(e=mi(e)[0]);var s=zs(e||{}).get,a=i?$S:qS;return i==="native"&&(i=""),e&&(t?a((Yn[t]&&Yn[t].get||s)(e,t,i,r)):function(o,l,u){return a((Yn[o]&&Yn[o].get||s)(e,o,l,u))})},quickSetter:function(e,t,i){if(e=mi(e),e.length>1){var r=e.map(function(c){return Vn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var a=Yn[t],o=zs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(c){var d=new a;Va._pt=0,d.init(e,i?c+i:c,Va,0,[e]),d.render(1,d),Va._pt&&_g(1,Va)}:o.set(e,l);return a?u:function(c){return u(e,l,i?c+i:c,o,1)}},quickTo:function(e,t,i){var r,s=Vn.to(e,ii((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,u,c){return s.resetTo(t,l,u,c)};return a.tween=s,a},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gs(e.ease,Bl.ease)),tv(Bl,e||{})},config:function(e){return tv(ei,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Yn[o]&&!ni[o]&&zl(t+" effect requires "+o+" plugin.")}),kd[t]=function(o,l,u){return i(mi(o),ii(l||{},s),u)},a&&(Ln.prototype[t]=function(o,l,u){return this.add(kd[t](o,tr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Je[e]=Gs(t)},parseEase:function(e,t){return arguments.length?Gs(e,t):Je},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Ln(e),r,s;for(i.smoothChildTiming=On(e.smoothChildTiming),Rt.remove(i),i._dp=0,i._time=i._tTime=Rt._time,r=Rt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Wt&&r.vars.onComplete===r._targets[0]))&&Xi(i,r,r._start-r._delay),r=s;return Xi(Rt,i,0),i},context:function(e,t){return e?new yM(e,t):Tt},matchMedia:function(e){return new ML(e)},matchMediaRefresh:function(){return Hs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Gp()},addEventListener:function(e,t){var i=mc[e]||(mc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=mc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:J3,wrapYoyo:eL,distribute:tM,random:iM,snap:nM,normalize:Q3,getUnit:_n,clamp:$3,splitColor:lM,toArray:mi,selector:Bp,mapRange:sM,pipe:Z3,unitize:j3,interpolate:tL,shuffle:eM},install:GS,effects:kd,ticker:Kn,updateRoot:Ln.updateRoot,plugins:Yn,globalTimeline:Rt,core:{PropTween:Bn,globals:HS,Tween:Wt,Timeline:Ln,Animation:Wl,getCache:zs,_removeLinkedListItem:Tf,reverting:function(){return ln},context:function(e){return e&&Tt&&(Tt.data.push(e),e._ctx=Tt),Tt},suppressOverwrites:function(e){return rg=e}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Jc[n]=Wt[n]});Kn.add(Ln.updateRoot);Va=Jc.to({},{duration:0});var EL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},wL=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=EL(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},Hd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,u;if(tn(s)&&(l={},kn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}wL(o,s)}}}},Vn=Jc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)ln?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Hd("roundProps",zp),Hd("modifiers"),Hd("snap",nM))||Jc;Wt.version=Ln.version=Vn.version="3.15.0";VS=1;ag()&&po();Je.Power0;Je.Power1;Je.Power2;Je.Power3;Je.Power4;Je.Linear;Je.Quad;Je.Cubic;Je.Quart;Je.Quint;Je.Strong;Je.Elastic;Je.Back;Je.SteppedEase;Je.Bounce;Je.Sine;Je.Expo;Je.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ov,Qr,Ja,vg,Os,lv,xg,TL=function(){return typeof window<"u"},Ar={},Ps=180/Math.PI,eo=Math.PI/180,Ta=Math.atan2,uv=1e8,yg=/([A-Z])/g,bL=/(left|right|width|margin|padding|x)/i,AL=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},CL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},RL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},PL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},LL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},SM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},MM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},DL=function(e,t,i){return e.style[t]=i},NL=function(e,t,i){return e.style.setProperty(t,i)},IL=function(e,t,i){return e._gsap[t]=i},UL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},FL=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},OL=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Lt="transform",zn=Lt+"Origin",kL=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Ar&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=dr(r,o)}):this.tfm[e]=a.x?a[e]:dr(r,e),e===zn&&(this.tfm.zOrigin=a.zOrigin);else return qi.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Lt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(zn,t,"")),e=Lt}(s||t)&&this.props.push(e,t,s[e])},EM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},BL=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(yg,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xg(),(!s||!s.isStart)&&!i[Lt]&&(EM(i),r.zOrigin&&i[zn]&&(i[zn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},wM=function(e,t){var i={target:e,props:[],revert:BL,save:kL};return e._gsap||Vn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},TM,Wp=function(e,t){var i=Qr.createElementNS?Qr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qr.createElement(e);return i&&i.style?i:Qr.createElement(e)},Qn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(yg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,mo(t)||t,1)||""},cv="O,Moz,ms,Ms,Webkit".split(","),mo=function(e,t,i){var r=t||Os,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(cv[a]+e in s););return a<0?null:(a===3?"ms":a>=0?cv[a]:"")+e},Xp=function(){TL()&&window.document&&(ov=window,Qr=ov.document,Ja=Qr.documentElement,Os=Wp("div")||{style:{}},Wp("div"),Lt=mo(Lt),zn=Lt+"Origin",Os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",TM=!!mo("perspective"),xg=Vn.core.reverting,vg=1)},fv=function(e){var t=e.ownerSVGElement,i=Wp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ja.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ja.removeChild(i),s},dv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},bM=function(e){var t,i;try{t=e.getBBox()}catch{t=fv(e),i=1}return t&&(t.width||t.height)||i||(t=fv(e)),t&&!t.width&&!t.x&&!t.y?{x:+dv(e,["x","cx","x1"])||0,y:+dv(e,["y","cy","y1"])||0,width:0,height:0}:t},AM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&bM(e))},ms=function(e,t){if(t){var i=e.style,r;t in Ar&&t!==zn&&(t=Lt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(yg,"-$1").toLowerCase())):i.removeAttribute(t)}},Jr=function(e,t,i,r,s,a){var o=new Bn(e._pt,t,i,0,1,a?MM:SM);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},hv={deg:1,rad:1,turn:1},zL={grid:1,flex:1},gs=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Os.style,l=bL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,g,m,h;if(r===a||!s||hv[r]||hv[a])return s;if(a!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&AM(e),(p||a==="%")&&(Ar[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Bt(p?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(f?a:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Qr||!g.appendChild)&&(g=Qr.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Kn.time&&!m.uncache)return Bt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,_=e[c],v?e.style[t]=v:ms(e,t)}else(p||a==="%")&&!zL[Qn(g,"display")]&&(o.position=Qn(e,"position")),g===e&&(o.position="static"),g.appendChild(Os),_=Os[c],g.removeChild(Os),o.position="absolute";return l&&p&&(m=zs(g),m.time=Kn.time,m.width=g[c]),Bt(f?_*s/d:_&&s?d/_*s:0)},dr=function(e,t,i,r){var s;return vg||Xp(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ar[t]&&t!=="transform"?(s=Yl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:tf(Qn(e,zn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ef[t]&&ef[t](e,t,i)||Qn(e,t)||XS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?gs(e,t,s,i)+i:s},VL=function(e,t,i,r){if(!i||i==="none"){var s=mo(t,e,1),a=s&&Qn(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Qn(e,"borderTopColor"))}var o=new Bn(this._pt,e.style,t,0,1,vM),l=0,u=0,c,d,f,p,_,g,m,h,v,S,x,M;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Qn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Qn(e,t)||r,g?e.style[t]=g:ms(e,t)),c=[i,r],cM(c),i=c[0],r=c[1],f=i.match(za)||[],M=r.match(za)||[],M.length){for(;d=za.exec(r);)m=d[0],v=r.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=f[u++]||"")&&(p=parseFloat(g)||0,x=g.substr((p+"").length),m.charAt(1)==="="&&(m=Qa(p,m)+x),h=parseFloat(m),S=m.substr((h+"").length),l=za.lastIndex-S.length,S||(S=S||ei.units[t]||x,l===r.length&&(r+=S,o.e+=S)),x!==S&&(p=gs(e,t,g,S)||0),o._pt={_next:o._pt,p:v||u===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?MM:SM;return zS.test(r)&&(o.e=0),this._pt=o,o},pv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},GL=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=pv[i]||i,t[1]=pv[r]||r,t.join(" ")},HL=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],Ar[o]&&(l=1,o=o==="transformOrigin"?zn:Lt),ms(i,o);l&&(ms(i,Lt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Yl(i,1),a.uncache=1,EM(r)))}},ef={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Bn(e._pt,t,i,0,0,HL);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Xl=[1,0,0,1,0,0],CM={},RM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},mv=function(e){var t=Qn(e,Lt);return RM(t)?Xl:t.substr(7).match(BS).map(Bt)},Sg=function(e,t){var i=e._gsap||zs(e),r=e.style,s=mv(e),a,o,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xl:s):(s===Xl&&!e.offsetParent&&e!==Ja&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,o=e.nextElementSibling,Ja.appendChild(e)),s=mv(e),l?r.display=l:ms(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ja.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yp=function(e,t,i,r,s,a){var o=e._gsap,l=s||Sg(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],v=l[5],S=t.split(" "),x=parseFloat(S[0])||0,M=parseFloat(S[1])||0,w,A,y,b;i?l!==Xl&&(A=p*m-_*g)&&(y=x*(m/A)+M*(-g/A)+(g*v-m*h)/A,b=x*(-_/A)+M*(p/A)-(p*v-_*h)/A,x=y,M=b):(w=bM(e),x=w.x+(~S[0].indexOf("%")?x/100*w.width:x),M=w.y+(~(S[1]||S[0]).indexOf("%")?M/100*w.height:M)),r||r!==!1&&o.smooth?(h=x-u,v=M-c,o.xOffset=d+(h*p+v*g)-h,o.yOffset=f+(h*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=M,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[zn]="0px 0px",a&&(Jr(a,o,"xOrigin",u,x),Jr(a,o,"yOrigin",c,M),Jr(a,o,"xOffset",d,o.xOffset),Jr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},Yl=function(e,t){var i=e._gsap||new dM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=Qn(e,zn)||"0",c,d,f,p,_,g,m,h,v,S,x,M,w,A,y,b,C,D,N,k,L,B,q,X,F,O,G,K,fe,Ee,Ne,Ie;return c=d=f=g=m=h=v=S=x=0,p=_=1,i.svg=!!(e.getCTM&&AM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),r.scale=r.rotate=r.translate="none"),A=Sg(e,i.svg),i.svg&&(i.uncache?(F=e.getBBox(),u=i.xOrigin-F.x+"px "+(i.yOrigin-F.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Yp(e,X||u,!!X||i.originIsAbsolute,i.smooth!==!1,A)),M=i.xOrigin||0,w=i.yOrigin||0,A!==Xl&&(D=A[0],N=A[1],k=A[2],L=A[3],c=B=A[4],d=q=A[5],A.length===6?(p=Math.sqrt(D*D+N*N),_=Math.sqrt(L*L+k*k),g=D||N?Ta(N,D)*Ps:0,v=k||L?Ta(k,L)*Ps+g:0,v&&(_*=Math.abs(Math.cos(v*eo))),i.svg&&(c-=M-(M*D+w*k),d-=w-(M*N+w*L))):(Ie=A[6],Ee=A[7],G=A[8],K=A[9],fe=A[10],Ne=A[11],c=A[12],d=A[13],f=A[14],y=Ta(Ie,fe),m=y*Ps,y&&(b=Math.cos(-y),C=Math.sin(-y),X=B*b+G*C,F=q*b+K*C,O=Ie*b+fe*C,G=B*-C+G*b,K=q*-C+K*b,fe=Ie*-C+fe*b,Ne=Ee*-C+Ne*b,B=X,q=F,Ie=O),y=Ta(-k,fe),h=y*Ps,y&&(b=Math.cos(-y),C=Math.sin(-y),X=D*b-G*C,F=N*b-K*C,O=k*b-fe*C,Ne=L*C+Ne*b,D=X,N=F,k=O),y=Ta(N,D),g=y*Ps,y&&(b=Math.cos(y),C=Math.sin(y),X=D*b+N*C,F=B*b+q*C,N=N*b-D*C,q=q*b-B*C,D=X,B=F),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Bt(Math.sqrt(D*D+N*N+k*k)),_=Bt(Math.sqrt(q*q+Ie*Ie)),y=Ta(B,q),v=Math.abs(y)>2e-4?y*Ps:0,x=Ne?1/(Ne<0?-Ne:Ne):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!RM(Qn(e,Lt)),X&&e.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Bt(p),i.scaleY=Bt(_),i.rotation=Bt(g)+o,i.rotationX=Bt(m)+o,i.rotationY=Bt(h)+o,i.skewX=v+o,i.skewY=S+o,i.transformPerspective=x+a,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[zn]=tf(u)),i.xOffset=i.yOffset=0,i.force3D=ei.force3D,i.renderTransform=i.svg?XL:TM?PM:WL,i.uncache=0,i},tf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wd=function(e,t,i){var r=_n(t);return Bt(parseFloat(t)+parseFloat(gs(e,"x",i+"px",r)))+r},WL=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,PM(e,t)},bs="0deg",Yo="0px",As=") ",PM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,S=i.zOrigin,x="",M=h==="auto"&&e&&e!==1||h===!0;if(S&&(d!==bs||c!==bs)){var w=parseFloat(c)*eo,A=Math.sin(w),y=Math.cos(w),b;w=parseFloat(d)*eo,b=Math.cos(w),a=Wd(v,a,A*b*-S),o=Wd(v,o,-Math.sin(w)*-S),l=Wd(v,l,y*b*-S+S)}m!==Yo&&(x+="perspective("+m+As),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(M||a!==Yo||o!==Yo||l!==Yo)&&(x+=l!==Yo||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+As),u!==bs&&(x+="rotate("+u+As),c!==bs&&(x+="rotateY("+c+As),d!==bs&&(x+="rotateX("+d+As),(f!==bs||p!==bs)&&(x+="skew("+f+", "+p+As),(_!==1||g!==1)&&(x+="scale("+_+", "+g+As),v.style[Lt]=x||"translate(0, 0)"},XL=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,S=parseFloat(a),x=parseFloat(o),M,w,A,y,b;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=eo,u*=eo,M=Math.cos(l)*d,w=Math.sin(l)*d,A=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=eo,b=Math.tan(u-c),b=Math.sqrt(1+b*b),A*=b,y*=b,c&&(b=Math.tan(c),b=Math.sqrt(1+b*b),M*=b,w*=b)),M=Bt(M),w=Bt(w),A=Bt(A),y=Bt(y)):(M=d,y=f,w=A=0),(S&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(S=gs(p,"x",a,"px"),x=gs(p,"y",o,"px")),(_||g||m||h)&&(S=Bt(S+_-(_*M+g*A)+m),x=Bt(x+g-(_*w+g*y)+h)),(r||s)&&(b=p.getBBox(),S=Bt(S+r/100*b.width),x=Bt(x+s/100*b.height)),b="matrix("+M+","+w+","+A+","+y+","+S+","+x+")",p.setAttribute("transform",b),v&&(p.style[Lt]=b)},YL=function(e,t,i,r,s){var a=360,o=tn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ps:1),u=l-r,c=r+u+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),d==="cw"&&u<0?u=(u+a*uv)%a-~~(u/a)*a:d==="ccw"&&u>0&&(u=(u-a*uv)%a-~~(u/a)*a)),e._pt=f=new Bn(e._pt,t,i,r,u,CL),f.e=c,f.u="deg",e._props.push(i),f},gv=function(e,t){for(var i in t)e[i]=t[i];return e},qL=function(e,t,i){var r=gv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),a[Lt]=t,o=Yl(i,1),ms(i,Lt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Lt],a[Lt]=t,o=Yl(i,1),a[Lt]=u);for(l in Ar)u=r[l],c=o[l],u!==c&&s.indexOf(l)<0&&(p=_n(u),_=_n(c),d=p!==_?gs(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new Bn(e._pt,o,l,d,f-d,Hp),e._pt.u=_||0,e._props.push(l));gv(o,r)};kn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});ef[e>1?"border"+n:n]=function(o,l,u,c,d){var f,p;if(arguments.length<4)return f=a.map(function(_){return dr(o,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},a.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,p,d)}});var LM={name:"css",register:Xp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,u,c,d,f,p,_,g,m,h,v,S,x,M,w,A,y,b;vg||Xp(),this.styles=this.styles||wM(e),y=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(Yn[g]&&hM(g,t,i,r,e,s)))){if(p=typeof c,_=ef[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Gl(c)),_)_(this,e,g,c,i)&&(A=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",cs.lastIndex=0,cs.test(u)||(m=_n(u),h=_n(c),h?m!==h&&(u=gs(e,g,u,h)+h):m&&(c+=m)),this.add(o,"setProperty",u,c,r,s,0,0,g),a.push(g),y.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],tn(u)&&~u.indexOf("random(")&&(u=Gl(u)),_n(u+"")||u==="auto"||(u+=ei.units[g]||_n(dr(e,g))||""),(u+"").charAt(1)==="="&&(u=dr(e,g))):u=dr(e,g),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),g in qi&&(g==="autoAlpha"&&(f===1&&dr(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,o.visibility),Jr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=qi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Ar,S){if(this.styles.save(g),b=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Qn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=c,c=Qn(e,"perspective"),C?e.style.perspective=C:ms(e,"perspective")}d=parseFloat(c)}if(x||(M=e._gsap,M.renderTransform&&!t.parseTransform||Yl(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,x=this._pt=new Bn(this._pt,o,Lt,0,1,M.renderTransform,M,0,-1),x.dep=1),g==="scale")this._pt=new Bn(this._pt,M,"scaleY",M.scaleY,(v?Qa(M.scaleY,v+d):d)-M.scaleY||0,Hp),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){y.push(zn,0,o[zn]),c=GL(c),M.svg?Yp(e,c,0,w,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==M.zOrigin&&Jr(this,M,"zOrigin",M.zOrigin,h),Jr(this,o,g,tf(u),tf(c)));continue}else if(g==="svgOrigin"){Yp(e,c,1,w,0,this);continue}else if(g in CM){YL(this,M,g,f,v?Qa(f,v+c):c);continue}else if(g==="smoothOrigin"){Jr(this,M,"smooth",M.smooth,c);continue}else if(g==="force3D"){M[g]=c;continue}else if(g==="transform"){qL(this,c,e);continue}}else g in o||(g=mo(g)||g);if(S||(d||d===0)&&(f||f===0)&&!AL.test(c)&&g in o)m=(u+"").substr((f+"").length),d||(d=0),h=_n(c)||(g in ei.units?ei.units[g]:m),m!==h&&(f=gs(e,g,u,h)),this._pt=new Bn(this._pt,S?M:o,g,f,(v?Qa(f,v+d):d)-f,!S&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?LL:Hp),this._pt.u=h||0,S&&b!==c?(this._pt.b=u,this._pt.e=b,this._pt.r=PL):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=RL);else if(g in o)VL.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){lg(g,c);continue}S||(g in o?y.push(g,0,o[g]):typeof e[g]=="function"?y.push(g,2,e[g]()):y.push(g,1,u||e[g])),a.push(g)}}A&&xM(this)},render:function(e,t){if(t.tween._time||!xg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:dr,aliases:qi,getSetter:function(e,t,i){var r=qi[t];return r&&r.indexOf(",")<0&&(t=r),t in Ar&&t!==zn&&(e._gsap.x||dr(e,"x"))?i&&lv===i?t==="scale"?UL:IL:(lv=i||{})&&(t==="scale"?FL:OL):e.style&&!sg(e.style[t])?DL:~t.indexOf("-")?NL:gg(e,t)},core:{_removeProperty:ms,_getMatrix:Sg}};Vn.utils.checkPrefix=mo;Vn.core.getStyleSaver=wM;(function(n,e,t,i){var r=kn(n+","+e+","+t,function(s){Ar[s]=1});kn(e,function(s){ei.units[s]="deg",CM[s]=1}),qi[r[13]]=n+","+e,kn(i,function(s){var a=s.split(":");qi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){ei.units[n]="px"});Vn.registerPlugin(LM);var gc=Vn.registerPlugin(LM)||Vn;gc.core.Tween;function $L(n,e){const{portal:t,screenFlash:i,pixelParticles:r}=n,s=gc.timeline({paused:!0,onComplete:()=>{e&&e()}});return i&&gc.set(i,{opacity:0,display:"block"}),r&&r.length>0&&r.forEach(a=>{gc.set(a,{opacity:0,scale:0,x:0,y:0})}),t&&s.to(t,{scale:1.35,filter:"brightness(2.2) drop-shadow(0 0 40px #22ff88)",duration:.28,ease:"power2.in"},0),i&&(s.to(i,{opacity:.75,duration:.2,ease:"power2.in"},.12),s.to(i,{opacity:0,duration:.32,ease:"power2.out"},.32)),r&&r.length>0&&(s.to(r,{opacity:1,scale:()=>.8+Math.random()*.8,duration:.1,stagger:.005},.16),s.to(r,{x:()=>(Math.random()-.5)*500,y:()=>(Math.random()-.5)*400,rotation:()=>(Math.random()-.5)*180,scale:0,opacity:0,duration:.42,ease:"power3.out",stagger:.005},.22)),t&&s.to(t,{scale:1,filter:"brightness(1.0) drop-shadow(0 0 15px rgba(34,255,136,0.3))",duration:.3,ease:"power2.out"},.35),{timeline:s,play:()=>s.play(0),pause:()=>s.pause(),kill:()=>s.kill(),revert:()=>s.revert(),skip:()=>{s.progress(1),e&&e()}}}const DM=ae.createContext({triggerTransition:()=>{},isTransitioning:!1}),gD=()=>ae.useContext(DM),KL=32,ZL=({children:n})=>{const[e,t]=ae.useState(!1),i=ae.useRef(null),r=ae.useRef(null),s=ae.useRef([]),a=So(),o=u=>{if(a){u&&u();return}if(e)return;t(!0);const c=s.current.filter(f=>f!==null);$L({portal:i.current,screenFlash:r.current,pixelParticles:c},()=>{t(!1),u&&u()}).play()},l=Array.from({length:KL},(u,c)=>c);return le.jsxs(DM.Provider,{value:{triggerTransition:o,isTransitioning:e},children:[n,le.jsxs("div",{className:"fixed inset-0 pointer-events-none z-[80] overflow-hidden select-none","aria-hidden":"true",children:[le.jsx("div",{ref:i,className:"absolute right-[12%] md:right-[16%] top-[16%] md:top-[22%] w-[280px] md:w-[380px] h-[400px] md:h-[500px] rounded-full bg-accent-glow/40 blur-[50px] opacity-0"}),le.jsx("div",{ref:r,className:"absolute inset-0 bg-accent-green/80 mix-blend-screen opacity-0"}),le.jsx("div",{className:"absolute right-[18%] md:right-[22%] top-[30%] md:top-[35%] w-0 h-0",children:l.map(u=>{const c=6+u%4*4,d=u%3===0;return le.jsx("div",{ref:f=>{s.current[u]=f},className:"absolute opacity-0 rounded-none shadow-neon-sm",style:{width:`${c}px`,height:`${c}px`,backgroundColor:d?"#00f5b8":"#22ff88",boxShadow:"0 0 10px rgba(34, 255, 136, 0.8)"}},u)})})]})]})},jL=ae.lazy(()=>ta(()=>import("./HomePage-CG93nHYD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),QL=ae.lazy(()=>ta(()=>import("./AboutPage-D3DAc2d9.js"),__vite__mapDeps([8,2,3,1]))),JL=ae.lazy(()=>ta(()=>import("./EventsPage-Ds4s-EDz.js"),__vite__mapDeps([9,4,3,5,1]))),eD=ae.lazy(()=>ta(()=>import("./RulesPage-CmAqNRQy.js"),__vite__mapDeps([10,6,3,5,1]))),tD=ae.lazy(()=>ta(()=>import("./FaqPage-B_VNl36L.js"),__vite__mapDeps([11,7,3,1]))),nD=ae.lazy(()=>ta(()=>import("./RegisterPage-BCKf15YB.js"),__vite__mapDeps([12,13,3]))),iD=ae.lazy(()=>ta(()=>import("./NotFoundPage-Dyztje1g.js"),__vite__mapDeps([14,13,3]))),rD=()=>{const{pathname:n}=yo();return sf.useEffect(()=>{window.scrollTo(0,0)},[n]),null},sD=()=>{const{hasHandoffStarted:n}=A3();return sf.useEffect(()=>(n&&document.body.classList.add("ambient-active"),()=>{document.body.classList.remove("ambient-active")}),[n]),le.jsxs("div",{className:"min-h-screen bg-background-void text-ctf-text font-body selection:bg-accent-green selection:text-background-void relative overflow-x-hidden flex flex-col justify-between",children:[le.jsx(rD,{}),le.jsx(nb,{}),le.jsx("div",{className:"flex-1",children:le.jsx(ae.Suspense,{fallback:le.jsxs("div",{className:"min-h-[70vh] flex flex-col items-center justify-center font-mono text-accent-green tracking-cyber text-xs sm:text-sm select-none",role:"status","aria-live":"polite",children:[le.jsx("span",{className:"w-2.5 h-2.5 bg-accent-green shadow-neon-sm mb-3 animate-pulse"}),le.jsx("span",{children:vT.message})]}),children:le.jsxs(iT,{children:[le.jsx(Vr,{path:"/",element:le.jsx(jL,{})}),le.jsx(Vr,{path:"/about",element:le.jsx(QL,{})}),le.jsx(Vr,{path:"/events",element:le.jsx(JL,{})}),le.jsx(Vr,{path:"/rules",element:le.jsx(eD,{})}),le.jsx(Vr,{path:"/faq",element:le.jsx(tD,{})}),le.jsx(Vr,{path:"/register",element:le.jsx(nD,{})}),le.jsx(Vr,{path:"*",element:le.jsx(iD,{})})]})})}),le.jsx(ib,{})]})},aD=()=>le.jsx(cT,{children:le.jsx(ZL,{children:le.jsx(C3,{children:le.jsx(sD,{})})})}),NM=document.getElementById("root");if(!NM)throw new Error("Failed to find root element");Xd.createRoot(NM).render(le.jsx(sf.StrictMode,{children:le.jsx(aD,{})}));export{Zy as B,$a as L,sf as R,A3 as a,oD as b,Ai as c,IS as d,mD as e,gD as f,By as g,lD as h,uD as i,le as j,cD as k,fD as l,dD as m,hD as n,pD as o,ae as r,Ri as s,So as u};

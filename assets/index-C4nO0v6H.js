(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function r(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=r(c);fetch(c.href,d)}})();function Lf(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var _c={exports:{}},Ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function q5(){if(Nm)return Ul;Nm=1;var l=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(s,c,d){var m=null;if(d!==void 0&&(m=""+d),c.key!==void 0&&(m=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:l,type:s,key:m,ref:c!==void 0?c:null,props:d}}return Ul.Fragment=a,Ul.jsx=r,Ul.jsxs=r,Ul}var Rm;function I5(){return Rm||(Rm=1,_c.exports=q5()),_c.exports}var C=I5(),Gc={exports:{}},nt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function F5(){if(Lm)return nt;Lm=1;var l=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),N=Symbol.iterator;function q(S){return S===null||typeof S!="object"?null:(S=N&&S[N]||S["@@iterator"],typeof S=="function"?S:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,K={};function O(S,L,te){this.props=S,this.context=L,this.refs=K,this.updater=te||U}O.prototype.isReactComponent={},O.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},O.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function V(){}V.prototype=O.prototype;function W(S,L,te){this.props=S,this.context=L,this.refs=K,this.updater=te||U}var ce=W.prototype=new V;ce.constructor=W,X(ce,O.prototype),ce.isPureReactComponent=!0;var re=Array.isArray;function ie(){}var ue={H:null,A:null,T:null,S:null},Re=Object.prototype.hasOwnProperty;function Oe(S,L,te){var P=te.ref;return{$$typeof:l,type:S,key:L,ref:P!==void 0?P:null,props:te}}function Be(S,L){return Oe(S.type,L,S.props)}function Je(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function Ve(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(te){return L[te]})}var ft=/\/+/g;function et(S,L){return typeof S=="object"&&S!==null&&S.key!=null?Ve(""+S.key):L.toString(36)}function lt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(ie,ie):(S.status="pending",S.then(function(L){S.status==="pending"&&(S.status="fulfilled",S.value=L)},function(L){S.status==="pending"&&(S.status="rejected",S.reason=L)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function B(S,L,te,P,xe){var ke=typeof S;(ke==="undefined"||ke==="boolean")&&(S=null);var Ee=!1;if(S===null)Ee=!0;else switch(ke){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(S.$$typeof){case l:case a:Ee=!0;break;case k:return Ee=S._init,B(Ee(S._payload),L,te,P,xe)}}if(Ee)return xe=xe(S),Ee=P===""?"."+et(S,0):P,re(xe)?(te="",Ee!=null&&(te=Ee.replace(ft,"$&/")+"/"),B(xe,L,te,"",function(an){return an})):xe!=null&&(Je(xe)&&(xe=Be(xe,te+(xe.key==null||S&&S.key===xe.key?"":(""+xe.key).replace(ft,"$&/")+"/")+Ee)),L.push(xe)),1;Ee=0;var Ie=P===""?".":P+":";if(re(S))for(var Fe=0;Fe<S.length;Fe++)P=S[Fe],ke=Ie+et(P,Fe),Ee+=B(P,L,te,ke,xe);else if(Fe=q(S),typeof Fe=="function")for(S=Fe.call(S),Fe=0;!(P=S.next()).done;)P=P.value,ke=Ie+et(P,Fe++),Ee+=B(P,L,te,ke,xe);else if(ke==="object"){if(typeof S.then=="function")return B(lt(S),L,te,P,xe);throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function ne(S,L,te){if(S==null)return S;var P=[],xe=0;return B(S,P,"","",function(ke){return L.call(te,ke,xe++)}),P}function ee(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(te){(S._status===0||S._status===-1)&&(S._status=1,S._result=te)},function(te){(S._status===0||S._status===-1)&&(S._status=2,S._result=te)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var Te=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},Se={map:ne,forEach:function(S,L,te){ne(S,function(){L.apply(this,arguments)},te)},count:function(S){var L=0;return ne(S,function(){L++}),L},toArray:function(S){return ne(S,function(L){return L})||[]},only:function(S){if(!Je(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return nt.Activity=M,nt.Children=Se,nt.Component=O,nt.Fragment=r,nt.Profiler=c,nt.PureComponent=W,nt.StrictMode=s,nt.Suspense=y,nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,nt.__COMPILER_RUNTIME={__proto__:null,c:function(S){return ue.H.useMemoCache(S)}},nt.cache=function(S){return function(){return S.apply(null,arguments)}},nt.cacheSignal=function(){return null},nt.cloneElement=function(S,L,te){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var P=X({},S.props),xe=S.key;if(L!=null)for(ke in L.key!==void 0&&(xe=""+L.key),L)!Re.call(L,ke)||ke==="key"||ke==="__self"||ke==="__source"||ke==="ref"&&L.ref===void 0||(P[ke]=L[ke]);var ke=arguments.length-2;if(ke===1)P.children=te;else if(1<ke){for(var Ee=Array(ke),Ie=0;Ie<ke;Ie++)Ee[Ie]=arguments[Ie+2];P.children=Ee}return Oe(S.type,xe,P)},nt.createContext=function(S){return S={$$typeof:m,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},nt.createElement=function(S,L,te){var P,xe={},ke=null;if(L!=null)for(P in L.key!==void 0&&(ke=""+L.key),L)Re.call(L,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(xe[P]=L[P]);var Ee=arguments.length-2;if(Ee===1)xe.children=te;else if(1<Ee){for(var Ie=Array(Ee),Fe=0;Fe<Ee;Fe++)Ie[Fe]=arguments[Fe+2];xe.children=Ie}if(S&&S.defaultProps)for(P in Ee=S.defaultProps,Ee)xe[P]===void 0&&(xe[P]=Ee[P]);return Oe(S,ke,xe)},nt.createRef=function(){return{current:null}},nt.forwardRef=function(S){return{$$typeof:g,render:S}},nt.isValidElement=Je,nt.lazy=function(S){return{$$typeof:k,_payload:{_status:-1,_result:S},_init:ee}},nt.memo=function(S,L){return{$$typeof:v,type:S,compare:L===void 0?null:L}},nt.startTransition=function(S){var L=ue.T,te={};ue.T=te;try{var P=S(),xe=ue.S;xe!==null&&xe(te,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(ie,Te)}catch(ke){Te(ke)}finally{L!==null&&te.types!==null&&(L.types=te.types),ue.T=L}},nt.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},nt.use=function(S){return ue.H.use(S)},nt.useActionState=function(S,L,te){return ue.H.useActionState(S,L,te)},nt.useCallback=function(S,L){return ue.H.useCallback(S,L)},nt.useContext=function(S){return ue.H.useContext(S)},nt.useDebugValue=function(){},nt.useDeferredValue=function(S,L){return ue.H.useDeferredValue(S,L)},nt.useEffect=function(S,L){return ue.H.useEffect(S,L)},nt.useEffectEvent=function(S){return ue.H.useEffectEvent(S)},nt.useId=function(){return ue.H.useId()},nt.useImperativeHandle=function(S,L,te){return ue.H.useImperativeHandle(S,L,te)},nt.useInsertionEffect=function(S,L){return ue.H.useInsertionEffect(S,L)},nt.useLayoutEffect=function(S,L){return ue.H.useLayoutEffect(S,L)},nt.useMemo=function(S,L){return ue.H.useMemo(S,L)},nt.useOptimistic=function(S,L){return ue.H.useOptimistic(S,L)},nt.useReducer=function(S,L,te){return ue.H.useReducer(S,L,te)},nt.useRef=function(S){return ue.H.useRef(S)},nt.useState=function(S){return ue.H.useState(S)},nt.useSyncExternalStore=function(S,L,te){return ue.H.useSyncExternalStore(S,L,te)},nt.useTransition=function(){return ue.H.useTransition()},nt.version="19.2.8",nt}var Om;function Du(){return Om||(Om=1,Gc.exports=F5()),Gc.exports}var le=Du();const tr=Lf(le);var Yc={exports:{}},_l={},Vc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function U5(){return Bm||(Bm=1,(function(l){function a(B,ne){var ee=B.length;B.push(ne);e:for(;0<ee;){var Te=ee-1>>>1,Se=B[Te];if(0<c(Se,ne))B[Te]=ne,B[ee]=Se,ee=Te;else break e}}function r(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var ne=B[0],ee=B.pop();if(ee!==ne){B[0]=ee;e:for(var Te=0,Se=B.length,S=Se>>>1;Te<S;){var L=2*(Te+1)-1,te=B[L],P=L+1,xe=B[P];if(0>c(te,ee))P<Se&&0>c(xe,te)?(B[Te]=xe,B[P]=ee,Te=P):(B[Te]=te,B[L]=ee,Te=L);else if(P<Se&&0>c(xe,ee))B[Te]=xe,B[P]=ee,Te=P;else break e}}return ne}function c(B,ne){var ee=B.sortIndex-ne.sortIndex;return ee!==0?ee:B.id-ne.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var m=Date,g=m.now();l.unstable_now=function(){return m.now()-g}}var y=[],v=[],k=1,M=null,N=3,q=!1,U=!1,X=!1,K=!1,O=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function ce(B){for(var ne=r(v);ne!==null;){if(ne.callback===null)s(v);else if(ne.startTime<=B)s(v),ne.sortIndex=ne.expirationTime,a(y,ne);else break;ne=r(v)}}function re(B){if(X=!1,ce(B),!U)if(r(y)!==null)U=!0,ie||(ie=!0,Ve());else{var ne=r(v);ne!==null&&lt(re,ne.startTime-B)}}var ie=!1,ue=-1,Re=5,Oe=-1;function Be(){return K?!0:!(l.unstable_now()-Oe<Re)}function Je(){if(K=!1,ie){var B=l.unstable_now();Oe=B;var ne=!0;try{e:{U=!1,X&&(X=!1,V(ue),ue=-1),q=!0;var ee=N;try{t:{for(ce(B),M=r(y);M!==null&&!(M.expirationTime>B&&Be());){var Te=M.callback;if(typeof Te=="function"){M.callback=null,N=M.priorityLevel;var Se=Te(M.expirationTime<=B);if(B=l.unstable_now(),typeof Se=="function"){M.callback=Se,ce(B),ne=!0;break t}M===r(y)&&s(y),ce(B)}else s(y);M=r(y)}if(M!==null)ne=!0;else{var S=r(v);S!==null&&lt(re,S.startTime-B),ne=!1}}break e}finally{M=null,N=ee,q=!1}ne=void 0}}finally{ne?Ve():ie=!1}}}var Ve;if(typeof W=="function")Ve=function(){W(Je)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,et=ft.port2;ft.port1.onmessage=Je,Ve=function(){et.postMessage(null)}}else Ve=function(){O(Je,0)};function lt(B,ne){ue=O(function(){B(l.unstable_now())},ne)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(B){B.callback=null},l.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<B?Math.floor(1e3/B):5},l.unstable_getCurrentPriorityLevel=function(){return N},l.unstable_next=function(B){switch(N){case 1:case 2:case 3:var ne=3;break;default:ne=N}var ee=N;N=ne;try{return B()}finally{N=ee}},l.unstable_requestPaint=function(){K=!0},l.unstable_runWithPriority=function(B,ne){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=N;N=B;try{return ne()}finally{N=ee}},l.unstable_scheduleCallback=function(B,ne,ee){var Te=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Te+ee:Te):ee=Te,B){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ee+Se,B={id:k++,callback:ne,priorityLevel:B,startTime:ee,expirationTime:Se,sortIndex:-1},ee>Te?(B.sortIndex=ee,a(v,B),r(y)===null&&B===r(v)&&(X?(V(ue),ue=-1):X=!0,lt(re,ee-Te))):(B.sortIndex=Se,a(y,B),U||q||(U=!0,ie||(ie=!0,Ve()))),B},l.unstable_shouldYield=Be,l.unstable_wrapCallback=function(B){var ne=N;return function(){var ee=N;N=ne;try{return B.apply(this,arguments)}finally{N=ee}}}})(Xc)),Xc}var Hm;function _5(){return Hm||(Hm=1,Vc.exports=U5()),Vc.exports}var Wc={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function G5(){if(jm)return un;jm=1;var l=Du();function a(y){var v="https://react.dev/errors/"+y;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)v+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+y+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(a(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(y,v,k){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:""+M,children:y,containerInfo:v,implementation:k}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,v){if(y==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,un.createPortal=function(y,v){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(a(299));return d(y,v,null,k)},un.flushSync=function(y){var v=m.T,k=s.p;try{if(m.T=null,s.p=2,y)return y()}finally{m.T=v,s.p=k,s.d.f()}},un.preconnect=function(y,v){typeof y=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(y,v))},un.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},un.preinit=function(y,v){if(typeof y=="string"&&v&&typeof v.as=="string"){var k=v.as,M=g(k,v.crossOrigin),N=typeof v.integrity=="string"?v.integrity:void 0,q=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;k==="style"?s.d.S(y,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:M,integrity:N,fetchPriority:q}):k==="script"&&s.d.X(y,{crossOrigin:M,integrity:N,fetchPriority:q,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},un.preinitModule=function(y,v){if(typeof y=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var k=g(v.as,v.crossOrigin);s.d.M(y,{crossOrigin:k,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(y)},un.preload=function(y,v){if(typeof y=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var k=v.as,M=g(k,v.crossOrigin);s.d.L(y,k,{crossOrigin:M,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},un.preloadModule=function(y,v){if(typeof y=="string")if(v){var k=g(v.as,v.crossOrigin);s.d.m(y,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:k,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(y)},un.requestFormReset=function(y){s.d.r(y)},un.unstable_batchedUpdates=function(y,v){return y(v)},un.useFormState=function(y,v,k){return m.H.useFormState(y,v,k)},un.useFormStatus=function(){return m.H.useHostTransitionStatus()},un.version="19.2.8",un}var qm;function Y5(){if(qm)return Wc.exports;qm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),Wc.exports=G5(),Wc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function V5(){if(Im)return _l;Im=1;var l=_5(),a=Du(),r=Y5();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(d(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var u=o.alternate;if(u===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===n)return y(o),e;if(u===i)return y(o),t;u=u.sibling}throw Error(s(188))}if(n.return!==i.return)n=o,i=u;else{for(var p=!1,x=o.child;x;){if(x===n){p=!0,n=o,i=u;break}if(x===i){p=!0,i=o,n=u;break}x=x.sibling}if(!p){for(x=u.child;x;){if(x===n){p=!0,n=u,i=o;break}if(x===i){p=!0,i=u,n=o;break}x=x.sibling}if(!p)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,N=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),W=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Oe=Symbol.for("react.activity"),Be=Symbol.for("react.memo_cache_sentinel"),Je=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=Je&&e[Je]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case O:return"Profiler";case K:return"StrictMode";case re:return"Suspense";case ie:return"SuspenseList";case Oe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case W:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ue:return t=e.displayName||null,t!==null?t:et(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return et(e(t))}catch{}}return null}var lt=Array.isArray,B=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},Te=[],Se=-1;function S(e){return{current:e}}function L(e){0>Se||(e.current=Te[Se],Te[Se]=null,Se--)}function te(e,t){Se++,Te[Se]=e.current,e.current=t}var P=S(null),xe=S(null),ke=S(null),Ee=S(null);function Ie(e,t){switch(te(ke,t),te(xe,e),te(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?em(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=em(t),e=tm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(P),te(P,e)}function Fe(){L(P),L(xe),L(ke)}function an(e){e.memoizedState!==null&&te(Ee,e);var t=P.current,n=tm(t,e.type);t!==n&&(te(xe,e),te(P,n))}function Ze(e){xe.current===e&&(L(P),L(xe)),Ee.current===e&&(L(Ee),jl._currentValue=ee)}var Qe,Ae;function _(e){if(Qe===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qe=t&&t[1]||"",Ae=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+Ae}var I=!1;function G(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(Y){var F=Y}Reflect.construct(e,[],J)}else{try{J.call()}catch(Y){F=Y}e.call(J.prototype)}}else{try{throw Error()}catch(Y){F=Y}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(Y){if(Y&&F&&typeof Y.stack=="string")return[Y.stack,F.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),p=u[0],x=u[1];if(p&&x){var E=p.split(`
`),j=x.split(`
`);for(o=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;if(i===E.length||o===j.length)for(i=E.length-1,o=j.length-1;1<=i&&0<=o&&E[i]!==j[o];)o--;for(;1<=i&&0<=o;i--,o--)if(E[i]!==j[o]){if(i!==1||o!==1)do if(i--,o--,0>o||E[i]!==j[o]){var Z=`
`+E[i].replace(" at new "," at ");return e.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",e.displayName)),Z}while(1<=i&&0<=o);break}}}finally{I=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?_(n):""}function ge(e,t){switch(e.tag){case 26:case 27:case 5:return _(e.type);case 16:return _("Lazy");case 13:return e.child!==t&&t!==null?_("Suspense Fallback"):_("Suspense");case 19:return _("SuspenseList");case 0:case 15:return G(e.type,!1);case 11:return G(e.type.render,!1);case 1:return G(e.type,!0);case 31:return _("Activity");default:return""}}function he(e){try{var t="",n=null;do t+=ge(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ce=Object.prototype.hasOwnProperty,be=l.unstable_scheduleCallback,ve=l.unstable_cancelCallback,ye=l.unstable_shouldYield,De=l.unstable_requestPaint,me=l.unstable_now,pe=l.unstable_getCurrentPriorityLevel,He=l.unstable_ImmediatePriority,tt=l.unstable_UserBlockingPriority,Pe=l.unstable_NormalPriority,it=l.unstable_LowPriority,st=l.unstable_IdlePriority,dt=l.log,Et=l.unstable_setDisableYieldValue,Ct=null,Ke=null;function yt(e){if(typeof dt=="function"&&Et(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(Ct,e)}catch{}}var Xe=Math.clz32?Math.clz32:oa,Ln=Math.log,kn=Math.LN2;function oa(e){return e>>>=0,e===0?32:31-(Ln(e)/kn|0)|0}var Yt=256,mn=262144,ar=4194304;function Qn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Aa(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var o=0,u=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var x=i&134217727;return x!==0?(i=x&~u,i!==0?o=Qn(i):(p&=x,p!==0?o=Qn(p):n||(n=x&~e,n!==0&&(o=Qn(n))))):(x=i&~u,x!==0?o=Qn(x):p!==0?o=Qn(p):n||(n=i&~e,n!==0&&(o=Qn(n)))),o===0?0:t!==0&&t!==o&&(t&u)===0&&(u=o&-o,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:o}function Ma(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pr(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fn(){var e=ar;return ar<<=1,(ar&62914560)===0&&(ar=4194304),e}function Zr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Lt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ri(e,t,n,i,o,u){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,E=e.expirationTimes,j=e.hiddenUpdates;for(n=p&~n;0<n;){var Z=31-Xe(n),J=1<<Z;x[Z]=0,E[Z]=-1;var F=j[Z];if(F!==null)for(j[Z]=null,Z=0;Z<F.length;Z++){var Y=F[Z];Y!==null&&(Y.lane&=-536870913)}n&=~J}i!==0&&Kr(e,i,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(p&~t))}function Kr(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Xe(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Cn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Xe(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}function ir(e,t){var n=t&-t;return n=(n&42)!==0?1:Li(n),(n&(e.suspendedLanes|t))!==0?0:n}function Li(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rr(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:Cm(e.type))}function Q(e,t){var n=ne.p;try{return ne.p=e,t()}finally{ne.p=n}}var ze=Math.random().toString(36).slice(2),Ue="__reactFiber$"+ze,je="__reactProps$"+ze,jt="__reactContainer$"+ze,pn="__reactEvents$"+ze,On="__reactListeners$"+ze,fa="__reactHandles$"+ze,Pn="__reactResources$"+ze,gn="__reactMarker$"+ze;function Bn(e){delete e[Ue],delete e[je],delete e[pn],delete e[On],delete e[fa]}function vn(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=om(e);e!==null;){if(n=e[Ue])return n;e=om(e)}return t}e=n,n=e.parentNode}return null}function Tn(e){if(e=e[Ue]||e[jt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ea(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function pa(e){var t=e[Pn];return t||(t=e[Pn]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ft(e){e[gn]=!0}var $r=new Set,Jr={};function ca(e,t){Da(e,t),Da(e+"Capture",t)}function Da(e,t){for(Jr[e]=t,e=0;e<t.length;e++)$r.add(t[e])}var Kl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),R0={},$l={};function L0(e){return Ce.call($l,e)?!0:Ce.call(R0,e)?!1:Kl.test(e)?$l[e]=!0:(R0[e]=!0,!1)}function lr(e,t,n){if(L0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function sr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ua(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Zn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function N2(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(p){n=""+p,u.call(this,p)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function O0(e){if(!e._valueTracker){var t=Xu(e)?"checked":"value";e._valueTracker=N2(e,t,""+e[t])}}function Wu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Xu(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var R2=/[\n"\\]/g;function Kn(e){return e.replace(R2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function B0(e,t,n,i,o,u,p,x){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Zn(t)):e.value!==""+Zn(t)&&(e.value=""+Zn(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?H0(e,p,Zn(t)):n!=null?H0(e,p,Zn(n)):i!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Zn(x):e.removeAttribute("name")}function Qu(e,t,n,i,o,u,p,x){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){O0(e);return}n=n!=null?""+Zn(n):"",t=t!=null?""+Zn(t):n,x||t===e.value||(e.value=t),e.defaultValue=t}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=x?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),O0(e)}function H0(e,t,n){t==="number"&&Jl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function or(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Pu(e,t,n){if(t!=null&&(t=""+Zn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Zn(n):""}function Zu(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(s(92));if(lt(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Zn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),O0(e)}function cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var L2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ku(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||L2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function $u(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var o in t)i=t[o],t.hasOwnProperty(o)&&n[o]!==i&&Ku(e,o,i)}else for(var u in t)t.hasOwnProperty(u)&&Ku(e,u,t[u])}function j0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function es(e){return B2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function za(){}var q0=null;function I0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ur=null,dr=null;function Ju(e){var t=Tn(e);if(t&&(e=t.stateNode)){var n=e[je]||null;e:switch(e=t.stateNode,t.type){case"input":if(B0(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=i[je]||null;if(!o)throw Error(s(90));B0(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Wu(i)}break e;case"textarea":Pu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}}}var F0=!1;function e1(e,t,n){if(F0)return e(t,n);F0=!0;try{var i=e(t);return i}finally{if(F0=!1,(ur!==null||dr!==null)&&(Us(),ur&&(t=ur,e=dr,dr=ur=null,Ju(t),e)))for(t=0;t<e.length;t++)Ju(e[t])}}function el(e,t){var n=e.stateNode;if(n===null)return null;var i=n[je]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),U0=!1;if(Na)try{var tl={};Object.defineProperty(tl,"passive",{get:function(){U0=!0}}),window.addEventListener("test",tl,tl),window.removeEventListener("test",tl,tl)}catch{U0=!1}var ei=null,_0=null,ts=null;function t1(){if(ts)return ts;var e,t=_0,n=t.length,i,o="value"in ei?ei.value:ei.textContent,u=o.length;for(e=0;e<n&&t[e]===o[e];e++);var p=n-e;for(i=1;i<=p&&t[n-i]===o[u-i];i++);return ts=o.slice(e,1<i?1-i:void 0)}function ns(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function as(){return!0}function n1(){return!1}function An(e){function t(n,i,o,u,p){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(u):u[x]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?as:n1,this.isPropagationStopped=n1,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=as)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=as)},persist:function(){},isPersistent:as}),t}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=An(Bi),nl=M({},Bi,{view:0,detail:0}),H2=An(nl),G0,Y0,al,rs=M({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:X0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==al&&(al&&e.type==="mousemove"?(G0=e.screenX-al.screenX,Y0=e.screenY-al.screenY):Y0=G0=0,al=e),G0)},movementY:function(e){return"movementY"in e?e.movementY:Y0}}),a1=An(rs),j2=M({},rs,{dataTransfer:0}),q2=An(j2),I2=M({},nl,{relatedTarget:0}),V0=An(I2),F2=M({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),U2=An(F2),_2=M({},Bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G2=An(_2),Y2=M({},Bi,{data:0}),i1=An(Y2),V2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=W2[e])?!!t[e]:!1}function X0(){return Q2}var P2=M({},nl,{key:function(e){if(e.key){var t=V2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:X0,charCode:function(e){return e.type==="keypress"?ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z2=An(P2),K2=M({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),r1=An(K2),$2=M({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:X0}),J2=An($2),e4=M({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),t4=An(e4),n4=M({},rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a4=An(n4),i4=M({},Bi,{newState:0,oldState:0}),r4=An(i4),l4=[9,13,27,32],W0=Na&&"CompositionEvent"in window,il=null;Na&&"documentMode"in document&&(il=document.documentMode);var s4=Na&&"TextEvent"in window&&!il,l1=Na&&(!W0||il&&8<il&&11>=il),s1=" ",o1=!1;function c1(e,t){switch(e){case"keyup":return l4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function o4(e,t){switch(e){case"compositionend":return u1(t);case"keypress":return t.which!==32?null:(o1=!0,s1);case"textInput":return e=t.data,e===s1&&o1?null:e;default:return null}}function c4(e,t){if(hr)return e==="compositionend"||!W0&&c1(e,t)?(e=t1(),ts=_0=ei=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return l1&&t.locale!=="ko"?null:t.data;default:return null}}var u4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function d1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!u4[e.type]:t==="textarea"}function h1(e,t,n,i){ur?dr?dr.push(i):dr=[i]:ur=i,t=Qs(t,"onChange"),0<t.length&&(n=new is("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var rl=null,ll=null;function d4(e){Qh(e,0)}function ls(e){var t=Ea(e);if(Wu(t))return e}function m1(e,t){if(e==="change")return t}var f1=!1;if(Na){var Q0;if(Na){var P0="oninput"in document;if(!P0){var p1=document.createElement("div");p1.setAttribute("oninput","return;"),P0=typeof p1.oninput=="function"}Q0=P0}else Q0=!1;f1=Q0&&(!document.documentMode||9<document.documentMode)}function g1(){rl&&(rl.detachEvent("onpropertychange",v1),ll=rl=null)}function v1(e){if(e.propertyName==="value"&&ls(ll)){var t=[];h1(t,ll,e,I0(e)),e1(d4,t)}}function h4(e,t,n){e==="focusin"?(g1(),rl=t,ll=n,rl.attachEvent("onpropertychange",v1)):e==="focusout"&&g1()}function m4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ls(ll)}function f4(e,t){if(e==="click")return ls(t)}function p4(e,t){if(e==="input"||e==="change")return ls(t)}function g4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Hn=typeof Object.is=="function"?Object.is:g4;function sl(e,t){if(Hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!Ce.call(t,o)||!Hn(e[o],t[o]))return!1}return!0}function y1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function b1(e,t){var n=y1(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=y1(n)}}function x1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?x1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function w1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jl(e.document)}return t}function Z0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var v4=Na&&"documentMode"in document&&11>=document.documentMode,mr=null,K0=null,ol=null,$0=!1;function S1(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$0||mr==null||mr!==Jl(i)||(i=mr,"selectionStart"in i&&Z0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ol&&sl(ol,i)||(ol=i,i=Qs(K0,"onSelect"),0<i.length&&(t=new is("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=mr)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionrun:Hi("Transition","TransitionRun"),transitionstart:Hi("Transition","TransitionStart"),transitioncancel:Hi("Transition","TransitionCancel"),transitionend:Hi("Transition","TransitionEnd")},J0={},k1={};Na&&(k1=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function ji(e){if(J0[e])return J0[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in k1)return J0[e]=t[n];return e}var C1=ji("animationend"),T1=ji("animationiteration"),A1=ji("animationstart"),y4=ji("transitionrun"),b4=ji("transitionstart"),x4=ji("transitioncancel"),M1=ji("transitionend"),E1=new Map,eo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eo.push("scrollEnd");function da(e,t){E1.set(e,t),ca(t,[e])}var ss=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$n=[],pr=0,to=0;function os(){for(var e=pr,t=to=pr=0;t<e;){var n=$n[t];$n[t++]=null;var i=$n[t];$n[t++]=null;var o=$n[t];$n[t++]=null;var u=$n[t];if($n[t++]=null,i!==null&&o!==null){var p=i.pending;p===null?o.next=o:(o.next=p.next,p.next=o),i.pending=o}u!==0&&D1(n,o,u)}}function cs(e,t,n,i){$n[pr++]=e,$n[pr++]=t,$n[pr++]=n,$n[pr++]=i,to|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function no(e,t,n,i){return cs(e,t,n,i),us(e)}function qi(e,t){return cs(e,null,null,t),us(e)}function D1(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var o=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&t!==null&&(o=31-Xe(n),e=u.hiddenUpdates,i=e[o],i===null?e[o]=[t]:i.push(t),t.lane=n|536870912),u):null}function us(e){if(50<zl)throw zl=0,hc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gr={};function w4(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,t,n,i){return new w4(e,t,n,i)}function ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ra(e,t){var n=e.alternate;return n===null?(n=jn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function z1(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ds(e,t,n,i,o,u){var p=0;if(i=e,typeof e=="function")ao(e)&&(p=1);else if(typeof e=="string")p=A5(e,n,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Oe:return e=jn(31,n,t,o),e.elementType=Oe,e.lanes=u,e;case X:return Ii(n.children,o,u,t);case K:p=8,o|=24;break;case O:return e=jn(12,n,t,o|2),e.elementType=O,e.lanes=u,e;case re:return e=jn(13,n,t,o),e.elementType=re,e.lanes=u,e;case ie:return e=jn(19,n,t,o),e.elementType=ie,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:p=10;break e;case V:p=9;break e;case ce:p=11;break e;case ue:p=14;break e;case Re:p=16,i=null;break e}p=29,n=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=jn(p,n,t,o),t.elementType=e,t.type=i,t.lanes=u,t}function Ii(e,t,n,i){return e=jn(7,e,i,t),e.lanes=n,e}function io(e,t,n){return e=jn(6,e,null,t),e.lanes=n,e}function N1(e){var t=jn(18,null,null,0);return t.stateNode=e,t}function ro(e,t,n){return t=jn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var R1=new WeakMap;function Jn(e,t){if(typeof e=="object"&&e!==null){var n=R1.get(e);return n!==void 0?n:(t={value:e,source:t,stack:he(t)},R1.set(e,t),t)}return{value:e,source:t,stack:he(t)}}var vr=[],yr=0,hs=null,cl=0,ea=[],ta=0,ti=null,ga=1,va="";function La(e,t){vr[yr++]=cl,vr[yr++]=hs,hs=e,cl=t}function L1(e,t,n){ea[ta++]=ga,ea[ta++]=va,ea[ta++]=ti,ti=e;var i=ga;e=va;var o=32-Xe(i)-1;i&=~(1<<o),n+=1;var u=32-Xe(t)+o;if(30<u){var p=o-o%5;u=(i&(1<<p)-1).toString(32),i>>=p,o-=p,ga=1<<32-Xe(t)+o|n<<o|i,va=u+e}else ga=1<<u|n<<o|i,va=e}function lo(e){e.return!==null&&(La(e,1),L1(e,1,0))}function so(e){for(;e===hs;)hs=vr[--yr],vr[yr]=null,cl=vr[--yr],vr[yr]=null;for(;e===ti;)ti=ea[--ta],ea[ta]=null,va=ea[--ta],ea[ta]=null,ga=ea[--ta],ea[ta]=null}function O1(e,t){ea[ta++]=ga,ea[ta++]=va,ea[ta++]=ti,ga=t.id,va=t.overflow,ti=e}var ln=null,Nt=null,pt=!1,ni=null,na=!1,oo=Error(s(519));function ai(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ul(Jn(t,e)),oo}function B1(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Ue]=e,t[je]=i,n){case"dialog":ut("cancel",t),ut("close",t);break;case"iframe":case"object":case"embed":ut("load",t);break;case"video":case"audio":for(n=0;n<Rl.length;n++)ut(Rl[n],t);break;case"source":ut("error",t);break;case"img":case"image":case"link":ut("error",t),ut("load",t);break;case"details":ut("toggle",t);break;case"input":ut("invalid",t),Qu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ut("invalid",t);break;case"textarea":ut("invalid",t),Zu(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||$h(t.textContent,n)?(i.popover!=null&&(ut("beforetoggle",t),ut("toggle",t)),i.onScroll!=null&&ut("scroll",t),i.onScrollEnd!=null&&ut("scrollend",t),i.onClick!=null&&(t.onclick=za),t=!0):t=!1,t||ai(e,!0)}function H1(e){for(ln=e.return;ln;)switch(ln.tag){case 5:case 31:case 13:na=!1;return;case 27:case 3:na=!0;return;default:ln=ln.return}}function br(e){if(e!==ln)return!1;if(!pt)return H1(e),pt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Mc(e.type,e.memoizedProps)),n=!n),n&&Nt&&ai(e),H1(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Nt=sm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Nt=sm(e)}else t===27?(t=Nt,vi(e.type)?(e=Rc,Rc=null,Nt=e):Nt=t):Nt=ln?ia(e.stateNode.nextSibling):null;return!0}function Fi(){Nt=ln=null,pt=!1}function co(){var e=ni;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),ni=null),e}function ul(e){ni===null?ni=[e]:ni.push(e)}var uo=S(null),Ui=null,Oa=null;function ii(e,t,n){te(uo,t._currentValue),t._currentValue=n}function Ba(e){e._currentValue=uo.current,L(uo)}function ho(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function mo(e,t,n,i){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var p=o.child;u=u.firstContext;e:for(;u!==null;){var x=u;u=o;for(var E=0;E<t.length;E++)if(x.context===t[E]){u.lanes|=n,x=u.alternate,x!==null&&(x.lanes|=n),ho(u.return,n,e),i||(p=null);break e}u=x.next}}else if(o.tag===18){if(p=o.return,p===null)throw Error(s(341));p.lanes|=n,u=p.alternate,u!==null&&(u.lanes|=n),ho(p,n,e),p=null}else p=o.child;if(p!==null)p.return=o;else for(p=o;p!==null;){if(p===e){p=null;break}if(o=p.sibling,o!==null){o.return=p.return,p=o;break}p=p.return}o=p}}function xr(e,t,n,i){e=null;for(var o=t,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var p=o.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var x=o.type;Hn(o.pendingProps.value,p.value)||(e!==null?e.push(x):e=[x])}}else if(o===Ee.current){if(p=o.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(jl):e=[jl])}o=o.return}e!==null&&mo(t,e,n,i),t.flags|=262144}function ms(e){for(e=e.firstContext;e!==null;){if(!Hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _i(e){Ui=e,Oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sn(e){return j1(Ui,e)}function fs(e,t){return Ui===null&&_i(e),j1(e,t)}function j1(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Oa===null){if(e===null)throw Error(s(308));Oa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Oa=Oa.next=t;return n}var S4=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},k4=l.unstable_scheduleCallback,C4=l.unstable_NormalPriority,Wt={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fo(){return{controller:new S4,data:new Map,refCount:0}}function dl(e){e.refCount--,e.refCount===0&&k4(C4,function(){e.controller.abort()})}var hl=null,po=0,wr=0,Sr=null;function T4(e,t){if(hl===null){var n=hl=[];po=0,wr=yc(),Sr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return po++,t.then(q1,q1),t}function q1(){if(--po===0&&hl!==null){Sr!==null&&(Sr.status="fulfilled");var e=hl;hl=null,wr=0,Sr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function A4(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(i.status="rejected",i.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),i}var I1=B.S;B.S=function(e,t){Sh=me(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&T4(e,t),I1!==null&&I1(e,t)};var Gi=S(null);function go(){var e=Gi.current;return e!==null?e:Dt.pooledCache}function ps(e,t){t===null?te(Gi,Gi.current):te(Gi,t.pool)}function F1(){var e=go();return e===null?null:{parent:Wt._currentValue,pool:e}}var kr=Error(s(460)),vo=Error(s(474)),gs=Error(s(542)),vs={then:function(){}};function U1(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _1(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(za,za),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Y1(e),e;default:if(typeof t.status=="string")t.then(za,za);else{if(e=Dt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=i}},function(i){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Y1(e),e}throw Vi=t,kr}}function Yi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Vi=n,kr):n}}var Vi=null;function G1(){if(Vi===null)throw Error(s(459));var e=Vi;return Vi=null,e}function Y1(e){if(e===kr||e===gs)throw Error(s(483))}var Cr=null,ml=0;function ys(e){var t=ml;return ml+=1,Cr===null&&(Cr=[]),_1(Cr,e,t)}function fl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bs(e,t){throw t.$$typeof===N?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function V1(e){function t(R,D){if(e){var H=R.deletions;H===null?(R.deletions=[D],R.flags|=16):H.push(D)}}function n(R,D){if(!e)return null;for(;D!==null;)t(R,D),D=D.sibling;return null}function i(R){for(var D=new Map;R!==null;)R.key!==null?D.set(R.key,R):D.set(R.index,R),R=R.sibling;return D}function o(R,D){return R=Ra(R,D),R.index=0,R.sibling=null,R}function u(R,D,H){return R.index=H,e?(H=R.alternate,H!==null?(H=H.index,H<D?(R.flags|=67108866,D):H):(R.flags|=67108866,D)):(R.flags|=1048576,D)}function p(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function x(R,D,H,$){return D===null||D.tag!==6?(D=io(H,R.mode,$),D.return=R,D):(D=o(D,H),D.return=R,D)}function E(R,D,H,$){var qe=H.type;return qe===X?Z(R,D,H.props.children,$,H.key):D!==null&&(D.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===Re&&Yi(qe)===D.type)?(D=o(D,H.props),fl(D,H),D.return=R,D):(D=ds(H.type,H.key,H.props,null,R.mode,$),fl(D,H),D.return=R,D)}function j(R,D,H,$){return D===null||D.tag!==4||D.stateNode.containerInfo!==H.containerInfo||D.stateNode.implementation!==H.implementation?(D=ro(H,R.mode,$),D.return=R,D):(D=o(D,H.children||[]),D.return=R,D)}function Z(R,D,H,$,qe){return D===null||D.tag!==7?(D=Ii(H,R.mode,$,qe),D.return=R,D):(D=o(D,H),D.return=R,D)}function J(R,D,H){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=io(""+D,R.mode,H),D.return=R,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case q:return H=ds(D.type,D.key,D.props,null,R.mode,H),fl(H,D),H.return=R,H;case U:return D=ro(D,R.mode,H),D.return=R,D;case Re:return D=Yi(D),J(R,D,H)}if(lt(D)||Ve(D))return D=Ii(D,R.mode,H,null),D.return=R,D;if(typeof D.then=="function")return J(R,ys(D),H);if(D.$$typeof===W)return J(R,fs(R,D),H);bs(R,D)}return null}function F(R,D,H,$){var qe=D!==null?D.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return qe!==null?null:x(R,D,""+H,$);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case q:return H.key===qe?E(R,D,H,$):null;case U:return H.key===qe?j(R,D,H,$):null;case Re:return H=Yi(H),F(R,D,H,$)}if(lt(H)||Ve(H))return qe!==null?null:Z(R,D,H,$,null);if(typeof H.then=="function")return F(R,D,ys(H),$);if(H.$$typeof===W)return F(R,D,fs(R,H),$);bs(R,H)}return null}function Y(R,D,H,$,qe){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return R=R.get(H)||null,x(D,R,""+$,qe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case q:return R=R.get($.key===null?H:$.key)||null,E(D,R,$,qe);case U:return R=R.get($.key===null?H:$.key)||null,j(D,R,$,qe);case Re:return $=Yi($),Y(R,D,H,$,qe)}if(lt($)||Ve($))return R=R.get(H)||null,Z(D,R,$,qe,null);if(typeof $.then=="function")return Y(R,D,H,ys($),qe);if($.$$typeof===W)return Y(R,D,H,fs(D,$),qe);bs(D,$)}return null}function Ne(R,D,H,$){for(var qe=null,gt=null,Le=D,rt=D=0,mt=null;Le!==null&&rt<H.length;rt++){Le.index>rt?(mt=Le,Le=null):mt=Le.sibling;var vt=F(R,Le,H[rt],$);if(vt===null){Le===null&&(Le=mt);break}e&&Le&&vt.alternate===null&&t(R,Le),D=u(vt,D,rt),gt===null?qe=vt:gt.sibling=vt,gt=vt,Le=mt}if(rt===H.length)return n(R,Le),pt&&La(R,rt),qe;if(Le===null){for(;rt<H.length;rt++)Le=J(R,H[rt],$),Le!==null&&(D=u(Le,D,rt),gt===null?qe=Le:gt.sibling=Le,gt=Le);return pt&&La(R,rt),qe}for(Le=i(Le);rt<H.length;rt++)mt=Y(Le,R,rt,H[rt],$),mt!==null&&(e&&mt.alternate!==null&&Le.delete(mt.key===null?rt:mt.key),D=u(mt,D,rt),gt===null?qe=mt:gt.sibling=mt,gt=mt);return e&&Le.forEach(function(Si){return t(R,Si)}),pt&&La(R,rt),qe}function Ge(R,D,H,$){if(H==null)throw Error(s(151));for(var qe=null,gt=null,Le=D,rt=D=0,mt=null,vt=H.next();Le!==null&&!vt.done;rt++,vt=H.next()){Le.index>rt?(mt=Le,Le=null):mt=Le.sibling;var Si=F(R,Le,vt.value,$);if(Si===null){Le===null&&(Le=mt);break}e&&Le&&Si.alternate===null&&t(R,Le),D=u(Si,D,rt),gt===null?qe=Si:gt.sibling=Si,gt=Si,Le=mt}if(vt.done)return n(R,Le),pt&&La(R,rt),qe;if(Le===null){for(;!vt.done;rt++,vt=H.next())vt=J(R,vt.value,$),vt!==null&&(D=u(vt,D,rt),gt===null?qe=vt:gt.sibling=vt,gt=vt);return pt&&La(R,rt),qe}for(Le=i(Le);!vt.done;rt++,vt=H.next())vt=Y(Le,R,rt,vt.value,$),vt!==null&&(e&&vt.alternate!==null&&Le.delete(vt.key===null?rt:vt.key),D=u(vt,D,rt),gt===null?qe=vt:gt.sibling=vt,gt=vt);return e&&Le.forEach(function(j5){return t(R,j5)}),pt&&La(R,rt),qe}function Mt(R,D,H,$){if(typeof H=="object"&&H!==null&&H.type===X&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case q:e:{for(var qe=H.key;D!==null;){if(D.key===qe){if(qe=H.type,qe===X){if(D.tag===7){n(R,D.sibling),$=o(D,H.props.children),$.return=R,R=$;break e}}else if(D.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===Re&&Yi(qe)===D.type){n(R,D.sibling),$=o(D,H.props),fl($,H),$.return=R,R=$;break e}n(R,D);break}else t(R,D);D=D.sibling}H.type===X?($=Ii(H.props.children,R.mode,$,H.key),$.return=R,R=$):($=ds(H.type,H.key,H.props,null,R.mode,$),fl($,H),$.return=R,R=$)}return p(R);case U:e:{for(qe=H.key;D!==null;){if(D.key===qe)if(D.tag===4&&D.stateNode.containerInfo===H.containerInfo&&D.stateNode.implementation===H.implementation){n(R,D.sibling),$=o(D,H.children||[]),$.return=R,R=$;break e}else{n(R,D);break}else t(R,D);D=D.sibling}$=ro(H,R.mode,$),$.return=R,R=$}return p(R);case Re:return H=Yi(H),Mt(R,D,H,$)}if(lt(H))return Ne(R,D,H,$);if(Ve(H)){if(qe=Ve(H),typeof qe!="function")throw Error(s(150));return H=qe.call(H),Ge(R,D,H,$)}if(typeof H.then=="function")return Mt(R,D,ys(H),$);if(H.$$typeof===W)return Mt(R,D,fs(R,H),$);bs(R,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,D!==null&&D.tag===6?(n(R,D.sibling),$=o(D,H),$.return=R,R=$):(n(R,D),$=io(H,R.mode,$),$.return=R,R=$),p(R)):n(R,D)}return function(R,D,H,$){try{ml=0;var qe=Mt(R,D,H,$);return Cr=null,qe}catch(Le){if(Le===kr||Le===gs)throw Le;var gt=jn(29,Le,null,R.mode);return gt.lanes=$,gt.return=R,gt}finally{}}}var Xi=V1(!0),X1=V1(!1),ri=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function li(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function si(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(bt&2)!==0){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,t=us(e),D1(e,null,n),t}return cs(e,i,t,n),us(e)}function pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Cn(e,n)}}function xo(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?o=u=p:u=u.next=p,n=n.next}while(n!==null);u===null?o=u=t:u=u.next=t}else o=u=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var wo=!1;function gl(){if(wo){var e=Sr;if(e!==null)throw e}}function vl(e,t,n,i){wo=!1;var o=e.updateQueue;ri=!1;var u=o.firstBaseUpdate,p=o.lastBaseUpdate,x=o.shared.pending;if(x!==null){o.shared.pending=null;var E=x,j=E.next;E.next=null,p===null?u=j:p.next=j,p=E;var Z=e.alternate;Z!==null&&(Z=Z.updateQueue,x=Z.lastBaseUpdate,x!==p&&(x===null?Z.firstBaseUpdate=j:x.next=j,Z.lastBaseUpdate=E))}if(u!==null){var J=o.baseState;p=0,Z=j=E=null,x=u;do{var F=x.lane&-536870913,Y=F!==x.lane;if(Y?(ht&F)===F:(i&F)===F){F!==0&&F===wr&&(wo=!0),Z!==null&&(Z=Z.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var Ne=e,Ge=x;F=t;var Mt=n;switch(Ge.tag){case 1:if(Ne=Ge.payload,typeof Ne=="function"){J=Ne.call(Mt,J,F);break e}J=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Ge.payload,F=typeof Ne=="function"?Ne.call(Mt,J,F):Ne,F==null)break e;J=M({},J,F);break e;case 2:ri=!0}}F=x.callback,F!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=o.callbacks,Y===null?o.callbacks=[F]:Y.push(F))}else Y={lane:F,tag:x.tag,payload:x.payload,callback:x.callback,next:null},Z===null?(j=Z=Y,E=J):Z=Z.next=Y,p|=F;if(x=x.next,x===null){if(x=o.shared.pending,x===null)break;Y=x,x=Y.next,Y.next=null,o.lastBaseUpdate=Y,o.shared.pending=null}}while(!0);Z===null&&(E=J),o.baseState=E,o.firstBaseUpdate=j,o.lastBaseUpdate=Z,u===null&&(o.shared.lanes=0),hi|=p,e.lanes=p,e.memoizedState=J}}function W1(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Q1(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)W1(n[e],t)}var Tr=S(null),xs=S(0);function P1(e,t){e=Ya,te(xs,e),te(Tr,t),Ya=e|t.baseLanes}function So(){te(xs,Ya),te(Tr,Tr.current)}function ko(){Ya=xs.current,L(Tr),L(xs)}var qn=S(null),aa=null;function oi(e){var t=e.alternate;te(Vt,Vt.current&1),te(qn,e),aa===null&&(t===null||Tr.current!==null||t.memoizedState!==null)&&(aa=e)}function Co(e){te(Vt,Vt.current),te(qn,e),aa===null&&(aa=e)}function Z1(e){e.tag===22?(te(Vt,Vt.current),te(qn,e),aa===null&&(aa=e)):ci()}function ci(){te(Vt,Vt.current),te(qn,qn.current)}function In(e){L(qn),aa===e&&(aa=null),L(Vt)}var Vt=S(0);function ws(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||zc(n)||Nc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ha=0,at=null,Tt=null,Qt=null,Ss=!1,Ar=!1,Wi=!1,ks=0,yl=0,Mr=null,M4=0;function Ut(){throw Error(s(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Hn(e[n],t[n]))return!1;return!0}function Ao(e,t,n,i,o,u){return Ha=u,at=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?Ld:Uo,Wi=!1,u=n(i,o),Wi=!1,Ar&&(u=$1(t,n,i,o)),K1(e),u}function K1(e){B.H=wl;var t=Tt!==null&&Tt.next!==null;if(Ha=0,Qt=Tt=at=null,Ss=!1,yl=0,Mr=null,t)throw Error(s(300));e===null||Pt||(e=e.dependencies,e!==null&&ms(e)&&(Pt=!0))}function $1(e,t,n,i){at=e;var o=0;do{if(Ar&&(Mr=null),yl=0,Ar=!1,25<=o)throw Error(s(301));if(o+=1,Qt=Tt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}B.H=Od,u=t(n,i)}while(Ar);return u}function E4(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?bl(t):t,e=e.useState()[0],(Tt!==null?Tt.memoizedState:null)!==e&&(at.flags|=1024),t}function Mo(){var e=ks!==0;return ks=0,e}function Eo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(Ss){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ss=!1}Ha=0,Qt=Tt=at=null,Ar=!1,yl=ks=0,Mr=null}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?at.memoizedState=Qt=e:Qt=Qt.next=e,Qt}function Xt(){if(Tt===null){var e=at.alternate;e=e!==null?e.memoizedState:null}else e=Tt.next;var t=Qt===null?at.memoizedState:Qt.next;if(t!==null)Qt=t,Tt=e;else{if(e===null)throw at.alternate===null?Error(s(467)):Error(s(310));Tt=e,e={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Qt===null?at.memoizedState=Qt=e:Qt=Qt.next=e}return Qt}function Cs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(e){var t=yl;return yl+=1,Mr===null&&(Mr=[]),e=_1(Mr,e,t),t=at,(Qt===null?t.memoizedState:Qt.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?Ld:Uo),e}function Ts(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bl(e);if(e.$$typeof===W)return sn(e)}throw Error(s(438,String(e)))}function zo(e){var t=null,n=at.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=at.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Cs(),at.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Be;return t.index++,n}function ja(e,t){return typeof t=="function"?t(e):t}function As(e){var t=Xt();return No(t,Tt,e)}function No(e,t,n){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=n;var o=e.baseQueue,u=i.pending;if(u!==null){if(o!==null){var p=o.next;o.next=u.next,u.next=p}t.baseQueue=o=u,i.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{t=o.next;var x=p=null,E=null,j=t,Z=!1;do{var J=j.lane&-536870913;if(J!==j.lane?(ht&J)===J:(Ha&J)===J){var F=j.revertLane;if(F===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),J===wr&&(Z=!0);else if((Ha&F)===F){j=j.next,F===wr&&(Z=!0);continue}else J={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},E===null?(x=E=J,p=u):E=E.next=J,at.lanes|=F,hi|=F;J=j.action,Wi&&n(u,J),u=j.hasEagerState?j.eagerState:n(u,J)}else F={lane:J,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},E===null?(x=E=F,p=u):E=E.next=F,at.lanes|=J,hi|=J;j=j.next}while(j!==null&&j!==t);if(E===null?p=u:E.next=x,!Hn(u,e.memoizedState)&&(Pt=!0,Z&&(n=Sr,n!==null)))throw n;e.memoizedState=u,e.baseState=p,e.baseQueue=E,i.lastRenderedState=u}return o===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ro(e){var t=Xt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,u=t.memoizedState;if(o!==null){n.pending=null;var p=o=o.next;do u=e(u,p.action),p=p.next;while(p!==o);Hn(u,t.memoizedState)||(Pt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function J1(e,t,n){var i=at,o=Xt(),u=pt;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=t();var p=!Hn((Tt||o).memoizedState,n);if(p&&(o.memoizedState=n,Pt=!0),o=o.queue,Bo(nd.bind(null,i,o,e),[e]),o.getSnapshot!==t||p||Qt!==null&&Qt.memoizedState.tag&1){if(i.flags|=2048,Er(9,{destroy:void 0},td.bind(null,i,o,n,t),null),Dt===null)throw Error(s(349));u||(Ha&127)!==0||ed(i,t,n)}return n}function ed(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=at.updateQueue,t===null?(t=Cs(),at.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function td(e,t,n,i){t.value=n,t.getSnapshot=i,ad(t)&&id(e)}function nd(e,t,n){return n(function(){ad(t)&&id(e)})}function ad(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Hn(e,n)}catch{return!0}}function id(e){var t=qi(e,2);t!==null&&Nn(t,e,2)}function Lo(e){var t=yn();if(typeof e=="function"){var n=e;if(e=n(),Wi){yt(!0);try{n()}finally{yt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:e},t}function rd(e,t,n,i){return e.baseState=n,No(e,Tt,typeof i=="function"?i:ja)}function D4(e,t,n,i,o){if(Ds(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};B.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,ld(t,u)):(u.next=n.next,t.pending=n.next=u)}}function ld(e,t){var n=t.action,i=t.payload,o=e.state;if(t.isTransition){var u=B.T,p={};B.T=p;try{var x=n(o,i),E=B.S;E!==null&&E(p,x),sd(e,t,x)}catch(j){Oo(e,t,j)}finally{u!==null&&p.types!==null&&(u.types=p.types),B.T=u}}else try{u=n(o,i),sd(e,t,u)}catch(j){Oo(e,t,j)}}function sd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){od(e,t,i)},function(i){return Oo(e,t,i)}):od(e,t,n)}function od(e,t,n){t.status="fulfilled",t.value=n,cd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ld(e,n)))}function Oo(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,cd(t),t=t.next;while(t!==i)}e.action=null}function cd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ud(e,t){return t}function dd(e,t){if(pt){var n=Dt.formState;if(n!==null){e:{var i=at;if(pt){if(Nt){t:{for(var o=Nt,u=na;o.nodeType!==8;){if(!u){o=null;break t}if(o=ia(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){Nt=ia(o.nextSibling),i=o.data==="F!";break e}}ai(i)}i=!1}i&&(t=n[0])}}return n=yn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ud,lastRenderedState:t},n.queue=i,n=zd.bind(null,at,i),i.dispatch=n,i=Lo(!1),u=Fo.bind(null,at,!1,i.queue),i=yn(),o={state:t,dispatch:null,action:e,pending:null},i.queue=o,n=D4.bind(null,at,o,u,n),o.dispatch=n,i.memoizedState=e,[t,n,!1]}function hd(e){var t=Xt();return md(t,Tt,e)}function md(e,t,n){if(t=No(e,t,ud)[0],e=As(ja)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=bl(t)}catch(p){throw p===kr?gs:p}else i=t;t=Xt();var o=t.queue,u=o.dispatch;return n!==t.memoizedState&&(at.flags|=2048,Er(9,{destroy:void 0},z4.bind(null,o,n),null)),[i,u,e]}function z4(e,t){e.action=t}function fd(e){var t=Xt(),n=Tt;if(n!==null)return md(t,n,e);Xt(),t=t.memoizedState,n=Xt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Er(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=at.updateQueue,t===null&&(t=Cs(),at.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function pd(){return Xt().memoizedState}function Ms(e,t,n,i){var o=yn();at.flags|=e,o.memoizedState=Er(1|t,{destroy:void 0},n,i===void 0?null:i)}function Es(e,t,n,i){var o=Xt();i=i===void 0?null:i;var u=o.memoizedState.inst;Tt!==null&&i!==null&&To(i,Tt.memoizedState.deps)?o.memoizedState=Er(t,u,n,i):(at.flags|=e,o.memoizedState=Er(1|t,u,n,i))}function gd(e,t){Ms(8390656,8,e,t)}function Bo(e,t){Es(2048,8,e,t)}function N4(e){at.flags|=4;var t=at.updateQueue;if(t===null)t=Cs(),at.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function vd(e){var t=Xt().memoizedState;return N4({ref:t,nextImpl:e}),function(){if((bt&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function yd(e,t){return Es(4,2,e,t)}function bd(e,t){return Es(4,4,e,t)}function xd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wd(e,t,n){n=n!=null?n.concat([e]):null,Es(4,4,xd.bind(null,t,e),n)}function Ho(){}function Sd(e,t){var n=Xt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&To(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function kd(e,t){var n=Xt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&To(t,i[1]))return i[0];if(i=e(),Wi){yt(!0);try{e()}finally{yt(!1)}}return n.memoizedState=[i,t],i}function jo(e,t,n){return n===void 0||(Ha&1073741824)!==0&&(ht&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Ch(),at.lanes|=e,hi|=e,n)}function Cd(e,t,n,i){return Hn(n,t)?n:Tr.current!==null?(e=jo(e,n,i),Hn(e,t)||(Pt=!0),e):(Ha&42)===0||(Ha&1073741824)!==0&&(ht&261930)===0?(Pt=!0,e.memoizedState=n):(e=Ch(),at.lanes|=e,hi|=e,t)}function Td(e,t,n,i,o){var u=ne.p;ne.p=u!==0&&8>u?u:8;var p=B.T,x={};B.T=x,Fo(e,!1,t,n);try{var E=o(),j=B.S;if(j!==null&&j(x,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var Z=A4(E,i);xl(e,t,Z,_n(e))}else xl(e,t,i,_n(e))}catch(J){xl(e,t,{then:function(){},status:"rejected",reason:J},_n())}finally{ne.p=u,p!==null&&x.types!==null&&(p.types=x.types),B.T=p}}function R4(){}function qo(e,t,n,i){if(e.tag!==5)throw Error(s(476));var o=Ad(e).queue;Td(e,o,t,ee,n===null?R4:function(){return Md(e),n(i)})}function Ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Md(e){var t=Ad(e);t.next===null&&(t=e.alternate.memoizedState),xl(e,t.next.queue,{},_n())}function Io(){return sn(jl)}function Ed(){return Xt().memoizedState}function Dd(){return Xt().memoizedState}function L4(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_n();e=li(n);var i=si(t,e,n);i!==null&&(Nn(i,t,n),pl(i,t,n)),t={cache:fo()},e.payload=t;return}t=t.return}}function O4(e,t,n){var i=_n();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ds(e)?Nd(t,n):(n=no(e,t,n,i),n!==null&&(Nn(n,e,i),Rd(n,t,i)))}function zd(e,t,n){var i=_n();xl(e,t,n,i)}function xl(e,t,n,i){var o={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))Nd(t,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var p=t.lastRenderedState,x=u(p,n);if(o.hasEagerState=!0,o.eagerState=x,Hn(x,p))return cs(e,t,o,0),Dt===null&&os(),!1}catch{}finally{}if(n=no(e,t,o,i),n!==null)return Nn(n,e,i),Rd(n,t,i),!0}return!1}function Fo(e,t,n,i){if(i={lane:2,revertLane:yc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(t)throw Error(s(479))}else t=no(e,n,i,2),t!==null&&Nn(t,e,2)}function Ds(e){var t=e.alternate;return e===at||t!==null&&t===at}function Nd(e,t){Ar=Ss=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rd(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Cn(e,n)}}var wl={readContext:sn,use:Ts,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut};wl.useEffectEvent=Ut;var Ld={readContext:sn,use:Ts,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:sn,useEffect:gd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ms(4194308,4,xd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){Ms(4,2,e,t)},useMemo:function(e,t){var n=yn();t=t===void 0?null:t;var i=e();if(Wi){yt(!0);try{e()}finally{yt(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=yn();if(n!==void 0){var o=n(t);if(Wi){yt(!0);try{n(t)}finally{yt(!1)}}}else o=t;return i.memoizedState=i.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=O4.bind(null,at,e),[i.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:function(e){e=Lo(e);var t=e.queue,n=zd.bind(null,at,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ho,useDeferredValue:function(e,t){var n=yn();return jo(n,e,t)},useTransition:function(){var e=Lo(!1);return e=Td.bind(null,at,e.queue,!0,!1),yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=at,o=yn();if(pt){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Dt===null)throw Error(s(349));(ht&127)!==0||ed(i,t,n)}o.memoizedState=n;var u={value:n,getSnapshot:t};return o.queue=u,gd(nd.bind(null,i,u,e),[e]),i.flags|=2048,Er(9,{destroy:void 0},td.bind(null,i,u,n,t),null),n},useId:function(){var e=yn(),t=Dt.identifierPrefix;if(pt){var n=va,i=ga;n=(i&~(1<<32-Xe(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ks++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=M4++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Io,useFormState:dd,useActionState:dd,useOptimistic:function(e){var t=yn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fo.bind(null,at,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return yn().memoizedState=L4.bind(null,at)},useEffectEvent:function(e){var t=yn(),n={impl:e};return t.memoizedState=n,function(){if((bt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Uo={readContext:sn,use:Ts,useCallback:Sd,useContext:sn,useEffect:Bo,useImperativeHandle:wd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:kd,useReducer:As,useRef:pd,useState:function(){return As(ja)},useDebugValue:Ho,useDeferredValue:function(e,t){var n=Xt();return Cd(n,Tt.memoizedState,e,t)},useTransition:function(){var e=As(ja)[0],t=Xt().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:J1,useId:Ed,useHostTransitionStatus:Io,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var n=Xt();return rd(n,Tt,e,t)},useMemoCache:zo,useCacheRefresh:Dd};Uo.useEffectEvent=vd;var Od={readContext:sn,use:Ts,useCallback:Sd,useContext:sn,useEffect:Bo,useImperativeHandle:wd,useInsertionEffect:yd,useLayoutEffect:bd,useMemo:kd,useReducer:Ro,useRef:pd,useState:function(){return Ro(ja)},useDebugValue:Ho,useDeferredValue:function(e,t){var n=Xt();return Tt===null?jo(n,e,t):Cd(n,Tt.memoizedState,e,t)},useTransition:function(){var e=Ro(ja)[0],t=Xt().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:J1,useId:Ed,useHostTransitionStatus:Io,useFormState:fd,useActionState:fd,useOptimistic:function(e,t){var n=Xt();return Tt!==null?rd(n,Tt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:zo,useCacheRefresh:Dd};Od.useEffectEvent=vd;function _o(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Go={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=_n(),o=li(i);o.payload=t,n!=null&&(o.callback=n),t=si(e,o,i),t!==null&&(Nn(t,e,i),pl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=_n(),o=li(i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=si(e,o,i),t!==null&&(Nn(t,e,i),pl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_n(),i=li(n);i.tag=2,t!=null&&(i.callback=t),t=si(e,i,n),t!==null&&(Nn(t,e,n),pl(t,e,n))}};function Bd(e,t,n,i,o,u,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,p):t.prototype&&t.prototype.isPureReactComponent?!sl(n,i)||!sl(o,u):!0}function Hd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Go.enqueueReplaceState(t,t.state,null)}function Qi(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=M({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function jd(e){ss(e)}function qd(e){console.error(e)}function Id(e){ss(e)}function zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Fd(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Yo(e,t,n){return n=li(n),n.tag=3,n.payload={element:null},n.callback=function(){zs(e,t)},n}function Ud(e){return e=li(e),e.tag=3,e}function _d(e,t,n,i){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var u=i.value;e.payload=function(){return o(u)},e.callback=function(){Fd(t,n,i)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Fd(t,n,i),typeof o!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})})}function B4(e,t,n,i,o){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&xr(t,n,o,!0),n=qn.current,n!==null){switch(n.tag){case 31:case 13:return aa===null?_s():n.alternate===null&&_t===0&&(_t=3),n.flags&=-257,n.flags|=65536,n.lanes=o,i===vs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),pc(e,i,o)),!1;case 22:return n.flags|=65536,i===vs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),pc(e,i,o)),!1}throw Error(s(435,n.tag))}return pc(e,i,o),_s(),!1}if(pt)return t=qn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,i!==oo&&(e=Error(s(422),{cause:i}),ul(Jn(e,n)))):(i!==oo&&(t=Error(s(423),{cause:i}),ul(Jn(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,i=Jn(i,n),o=Yo(e.stateNode,i,o),xo(e,o),_t!==4&&(_t=2)),!1;var u=Error(s(520),{cause:i});if(u=Jn(u,n),Dl===null?Dl=[u]:Dl.push(u),_t!==4&&(_t=2),t===null)return!0;i=Jn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Yo(n.stateNode,i,e),xo(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(mi===null||!mi.has(u))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Ud(o),_d(o,e,n,i),xo(n,o),!1}n=n.return}while(n!==null);return!1}var Vo=Error(s(461)),Pt=!1;function on(e,t,n,i){t.child=e===null?X1(t,null,n,i):Xi(t,e.child,n,i)}function Gd(e,t,n,i,o){n=n.render;var u=t.ref;if("ref"in i){var p={};for(var x in i)x!=="ref"&&(p[x]=i[x])}else p=i;return _i(t),i=Ao(e,t,n,p,u,o),x=Mo(),e!==null&&!Pt?(Eo(e,t,o),qa(e,t,o)):(pt&&x&&lo(t),t.flags|=1,on(e,t,i,o),t.child)}function Yd(e,t,n,i,o){if(e===null){var u=n.type;return typeof u=="function"&&!ao(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Vd(e,t,u,i,o)):(e=ds(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Jo(e,o)){var p=u.memoizedProps;if(n=n.compare,n=n!==null?n:sl,n(p,i)&&e.ref===t.ref)return qa(e,t,o)}return t.flags|=1,e=Ra(u,i),e.ref=t.ref,e.return=t,t.child=e}function Vd(e,t,n,i,o){if(e!==null){var u=e.memoizedProps;if(sl(u,i)&&e.ref===t.ref)if(Pt=!1,t.pendingProps=i=u,Jo(e,o))(e.flags&131072)!==0&&(Pt=!0);else return t.lanes=e.lanes,qa(e,t,o)}return Xo(e,t,n,i,o)}function Xd(e,t,n,i){var o=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;i=o&~u}else i=0,t.child=null;return Wd(e,t,u,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ps(t,u!==null?u.cachePool:null),u!==null?P1(t,u):So(),Z1(t);else return i=t.lanes=536870912,Wd(e,t,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(ps(t,u.cachePool),P1(t,u),ci(),t.memoizedState=null):(e!==null&&ps(t,null),So(),ci());return on(e,t,o,n),t.child}function Sl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Wd(e,t,n,i,o){var u=go();return u=u===null?null:{parent:Wt._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&ps(t,null),So(),Z1(t),e!==null&&xr(e,t,i,!0),t.childLanes=o,null}function Ns(e,t){return t=Ls({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Qd(e,t,n){return Xi(t,e.child,null,n),e=Ns(t,t.pendingProps),e.flags|=2,In(t),t.memoizedState=null,e}function H4(e,t,n){var i=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pt){if(i.mode==="hidden")return e=Ns(t,i),t.lanes=536870912,Sl(null,e);if(Co(t),(e=Nt)?(e=lm(e,na),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ti!==null?{id:ga,overflow:va}:null,retryLane:536870912,hydrationErrors:null},n=N1(e),n.return=t,t.child=n,ln=t,Nt=null)):e=null,e===null)throw ai(t);return t.lanes=536870912,null}return Ns(t,i)}var u=e.memoizedState;if(u!==null){var p=u.dehydrated;if(Co(t),o)if(t.flags&256)t.flags&=-257,t=Qd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Pt||xr(e,t,n,!1),o=(n&e.childLanes)!==0,Pt||o){if(i=Dt,i!==null&&(p=ir(i,n),p!==0&&p!==u.retryLane))throw u.retryLane=p,qi(e,p),Nn(i,e,p),Vo;_s(),t=Qd(e,t,n)}else e=u.treeContext,Nt=ia(p.nextSibling),ln=t,pt=!0,ni=null,na=!1,e!==null&&O1(t,e),t=Ns(t,i),t.flags|=4096;return t}return e=Ra(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Rs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Xo(e,t,n,i,o){return _i(t),n=Ao(e,t,n,i,void 0,o),i=Mo(),e!==null&&!Pt?(Eo(e,t,o),qa(e,t,o)):(pt&&i&&lo(t),t.flags|=1,on(e,t,n,o),t.child)}function Pd(e,t,n,i,o,u){return _i(t),t.updateQueue=null,n=$1(t,i,n,o),K1(e),i=Mo(),e!==null&&!Pt?(Eo(e,t,u),qa(e,t,u)):(pt&&i&&lo(t),t.flags|=1,on(e,t,n,u),t.child)}function Zd(e,t,n,i,o){if(_i(t),t.stateNode===null){var u=gr,p=n.contextType;typeof p=="object"&&p!==null&&(u=sn(p)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Go,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},yo(t),p=n.contextType,u.context=typeof p=="object"&&p!==null?sn(p):gr,u.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(_o(t,n,p,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&Go.enqueueReplaceState(u,u.state,null),vl(t,i,u,o),gl(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var x=t.memoizedProps,E=Qi(n,x);u.props=E;var j=u.context,Z=n.contextType;p=gr,typeof Z=="object"&&Z!==null&&(p=sn(Z));var J=n.getDerivedStateFromProps;Z=typeof J=="function"||typeof u.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,Z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x||j!==p)&&Hd(t,u,i,p),ri=!1;var F=t.memoizedState;u.state=F,vl(t,i,u,o),gl(),j=t.memoizedState,x||F!==j||ri?(typeof J=="function"&&(_o(t,n,J,i),j=t.memoizedState),(E=ri||Bd(t,n,E,i,F,j,p))?(Z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=j),u.props=i,u.state=j,u.context=p,i=E):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,bo(e,t),p=t.memoizedProps,Z=Qi(n,p),u.props=Z,J=t.pendingProps,F=u.context,j=n.contextType,E=gr,typeof j=="object"&&j!==null&&(E=sn(j)),x=n.getDerivedStateFromProps,(j=typeof x=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==J||F!==E)&&Hd(t,u,i,E),ri=!1,F=t.memoizedState,u.state=F,vl(t,i,u,o),gl();var Y=t.memoizedState;p!==J||F!==Y||ri||e!==null&&e.dependencies!==null&&ms(e.dependencies)?(typeof x=="function"&&(_o(t,n,x,i),Y=t.memoizedState),(Z=ri||Bd(t,n,Z,i,F,Y,E)||e!==null&&e.dependencies!==null&&ms(e.dependencies))?(j||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,Y,E),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,Y,E)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Y),u.props=i,u.state=Y,u.context=E,i=Z):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,Rs(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=Xi(t,e.child,null,o),t.child=Xi(t,null,n,o)):on(e,t,n,o),t.memoizedState=u.state,e=t.child):e=qa(e,t,o),e}function Kd(e,t,n,i){return Fi(),t.flags|=256,on(e,t,n,i),t.child}var Wo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qo(e){return{baseLanes:e,cachePool:F1()}}function Po(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Un),e}function $d(e,t,n){var i=t.pendingProps,o=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(Vt.current&2)!==0),p&&(o=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(pt){if(o?oi(t):ci(),(e=Nt)?(e=lm(e,na),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ti!==null?{id:ga,overflow:va}:null,retryLane:536870912,hydrationErrors:null},n=N1(e),n.return=t,t.child=n,ln=t,Nt=null)):e=null,e===null)throw ai(t);return Nc(e)?t.lanes=32:t.lanes=536870912,null}var x=i.children;return i=i.fallback,o?(ci(),o=t.mode,x=Ls({mode:"hidden",children:x},o),i=Ii(i,o,n,null),x.return=t,i.return=t,x.sibling=i,t.child=x,i=t.child,i.memoizedState=Qo(n),i.childLanes=Po(e,p,n),t.memoizedState=Wo,Sl(null,i)):(oi(t),Zo(t,x))}var E=e.memoizedState;if(E!==null&&(x=E.dehydrated,x!==null)){if(u)t.flags&256?(oi(t),t.flags&=-257,t=Ko(e,t,n)):t.memoizedState!==null?(ci(),t.child=e.child,t.flags|=128,t=null):(ci(),x=i.fallback,o=t.mode,i=Ls({mode:"visible",children:i.children},o),x=Ii(x,o,n,null),x.flags|=2,i.return=t,x.return=t,i.sibling=x,t.child=i,Xi(t,e.child,null,n),i=t.child,i.memoizedState=Qo(n),i.childLanes=Po(e,p,n),t.memoizedState=Wo,t=Sl(null,i));else if(oi(t),Nc(x)){if(p=x.nextSibling&&x.nextSibling.dataset,p)var j=p.dgst;p=j,i=Error(s(419)),i.stack="",i.digest=p,ul({value:i,source:null,stack:null}),t=Ko(e,t,n)}else if(Pt||xr(e,t,n,!1),p=(n&e.childLanes)!==0,Pt||p){if(p=Dt,p!==null&&(i=ir(p,n),i!==0&&i!==E.retryLane))throw E.retryLane=i,qi(e,i),Nn(p,e,i),Vo;zc(x)||_s(),t=Ko(e,t,n)}else zc(x)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Nt=ia(x.nextSibling),ln=t,pt=!0,ni=null,na=!1,e!==null&&O1(t,e),t=Zo(t,i.children),t.flags|=4096);return t}return o?(ci(),x=i.fallback,o=t.mode,E=e.child,j=E.sibling,i=Ra(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,j!==null?x=Ra(j,x):(x=Ii(x,o,n,null),x.flags|=2),x.return=t,i.return=t,i.sibling=x,t.child=i,Sl(null,i),i=t.child,x=e.child.memoizedState,x===null?x=Qo(n):(o=x.cachePool,o!==null?(E=Wt._currentValue,o=o.parent!==E?{parent:E,pool:E}:o):o=F1(),x={baseLanes:x.baseLanes|n,cachePool:o}),i.memoizedState=x,i.childLanes=Po(e,p,n),t.memoizedState=Wo,Sl(e.child,i)):(oi(t),n=e.child,e=n.sibling,n=Ra(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Zo(e,t){return t=Ls({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ls(e,t){return e=jn(22,e,null,t),e.lanes=0,e}function Ko(e,t,n){return Xi(t,e.child,null,n),e=Zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ho(e.return,t,n)}function $o(e,t,n,i,o,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o,treeForkCount:u}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=n,p.tailMode=o,p.treeForkCount=u)}function eh(e,t,n){var i=t.pendingProps,o=i.revealOrder,u=i.tail;i=i.children;var p=Vt.current,x=(p&2)!==0;if(x?(p=p&1|2,t.flags|=128):p&=1,te(Vt,p),on(e,t,i,n),i=pt?cl:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jd(e,n,t);else if(e.tag===19)Jd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ws(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$o(t,!1,o,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ws(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$o(t,!0,n,null,u,i);break;case"together":$o(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function qa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hi|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(xr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Ra(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ra(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ms(e)))}function j4(e,t,n){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),ii(t,Wt,e.memoizedState.cache),Fi();break;case 27:case 5:an(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:ii(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Co(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(oi(t),t.flags|=128,null):(n&t.child.childLanes)!==0?$d(e,t,n):(oi(t),e=qa(e,t,n),e!==null?e.sibling:null);oi(t);break;case 19:var o=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(xr(e,t,n,!1),i=(n&t.childLanes)!==0),o){if(i)return eh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(Vt,Vt.current),i)break;return null;case 22:return t.lanes=0,Xd(e,t,n,t.pendingProps);case 24:ii(t,Wt,e.memoizedState.cache)}return qa(e,t,n)}function th(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pt=!0;else{if(!Jo(e,n)&&(t.flags&128)===0)return Pt=!1,j4(e,t,n);Pt=(e.flags&131072)!==0}else Pt=!1,pt&&(t.flags&1048576)!==0&&L1(t,cl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Yi(t.elementType),t.type=e,typeof e=="function")ao(e)?(i=Qi(e,i),t.tag=1,t=Zd(null,t,e,i,n)):(t.tag=0,t=Xo(null,t,e,i,n));else{if(e!=null){var o=e.$$typeof;if(o===ce){t.tag=11,t=Gd(null,t,e,i,n);break e}else if(o===ue){t.tag=14,t=Yd(null,t,e,i,n);break e}}throw t=et(e)||e,Error(s(306,t,""))}}return t;case 0:return Xo(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,o=Qi(i,t.pendingProps),Zd(e,t,i,o,n);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var u=t.memoizedState;o=u.element,bo(e,t),vl(t,i,null,n);var p=t.memoizedState;if(i=p.cache,ii(t,Wt,i),i!==u.cache&&mo(t,[Wt],n,!0),gl(),i=p.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Kd(e,t,i,n);break e}else if(i!==o){o=Jn(Error(s(424)),t),ul(o),t=Kd(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Nt=ia(e.firstChild),ln=t,pt=!0,ni=null,na=!0,n=X1(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Fi(),i===o){t=qa(e,t,n);break e}on(e,t,i,n)}t=t.child}return t;case 26:return Rs(e,t),e===null?(n=hm(t.type,null,t.pendingProps,null))?t.memoizedState=n:pt||(n=t.type,e=t.pendingProps,i=Ps(ke.current).createElement(n),i[Ue]=t,i[je]=e,cn(i,n,e),Ft(i),t.stateNode=i):t.memoizedState=hm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return an(t),e===null&&pt&&(i=t.stateNode=cm(t.type,t.pendingProps,ke.current),ln=t,na=!0,o=Nt,vi(t.type)?(Rc=o,Nt=ia(i.firstChild)):Nt=o),on(e,t,t.pendingProps.children,n),Rs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pt&&((o=i=Nt)&&(i=m5(i,t.type,t.pendingProps,na),i!==null?(t.stateNode=i,ln=t,Nt=ia(i.firstChild),na=!1,o=!0):o=!1),o||ai(t)),an(t),o=t.type,u=t.pendingProps,p=e!==null?e.memoizedProps:null,i=u.children,Mc(o,u)?i=null:p!==null&&Mc(o,p)&&(t.flags|=32),t.memoizedState!==null&&(o=Ao(e,t,E4,null,null,n),jl._currentValue=o),Rs(e,t),on(e,t,i,n),t.child;case 6:return e===null&&pt&&((e=n=Nt)&&(n=f5(n,t.pendingProps,na),n!==null?(t.stateNode=n,ln=t,Nt=null,e=!0):e=!1),e||ai(t)),null;case 13:return $d(e,t,n);case 4:return Ie(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Xi(t,null,i,n):on(e,t,i,n),t.child;case 11:return Gd(e,t,t.type,t.pendingProps,n);case 7:return on(e,t,t.pendingProps,n),t.child;case 8:return on(e,t,t.pendingProps.children,n),t.child;case 12:return on(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ii(t,t.type,i.value),on(e,t,i.children,n),t.child;case 9:return o=t.type._context,i=t.pendingProps.children,_i(t),o=sn(o),i=i(o),t.flags|=1,on(e,t,i,n),t.child;case 14:return Yd(e,t,t.type,t.pendingProps,n);case 15:return Vd(e,t,t.type,t.pendingProps,n);case 19:return eh(e,t,n);case 31:return H4(e,t,n);case 22:return Xd(e,t,n,t.pendingProps);case 24:return _i(t),i=sn(Wt),e===null?(o=go(),o===null&&(o=Dt,u=fo(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=n),o=u),t.memoizedState={parent:i,cache:o},yo(t),ii(t,Wt,o)):((e.lanes&n)!==0&&(bo(e,t),vl(t,null,null,n),gl()),o=e.memoizedState,u=t.memoizedState,o.parent!==i?(o={parent:i,cache:i},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),ii(t,Wt,i)):(i=u.cache,ii(t,Wt,i),i!==o.cache&&mo(t,[Wt],n,!0))),on(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ia(e){e.flags|=4}function ec(e,t,n,i,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Eh())e.flags|=8192;else throw Vi=vs,vo}else e.flags&=-16777217}function nh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vm(t))if(Eh())e.flags|=8192;else throw Vi=vs,vo}function Os(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fn():536870912,e.lanes|=t,Rr|=t)}function kl(e,t){if(!pt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&65011712,i|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function q4(e,t,n){var i=t.pendingProps;switch(so(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(t),null;case 1:return Rt(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ba(Wt),Fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(br(t)?Ia(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,co())),Rt(t),null;case 26:var o=t.type,u=t.memoizedState;return e===null?(Ia(t),u!==null?(Rt(t),nh(t,u)):(Rt(t),ec(t,o,null,i,n))):u?u!==e.memoizedState?(Ia(t),Rt(t),nh(t,u)):(Rt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ia(t),Rt(t),ec(t,o,e,i,n)),null;case 27:if(Ze(t),n=ke.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ia(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Rt(t),null}e=P.current,br(t)?B1(t):(e=cm(o,i,n),t.stateNode=e,Ia(t))}return Rt(t),null;case 5:if(Ze(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ia(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Rt(t),null}if(u=P.current,br(t))B1(t);else{var p=Ps(ke.current);switch(u){case 1:u=p.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=p.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=p.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?p.createElement(o,{is:i.is}):p.createElement(o)}}u[Ue]=t,u[je]=i;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)u.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=u;e:switch(cn(u,o,i),o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ia(t)}}return Rt(t),ec(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ia(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=ke.current,br(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,o=ln,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}e[Ue]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||$h(e.nodeValue,n)),e||ai(t,!0)}else e=Ps(e).createTextNode(i),e[Ue]=t,t.stateNode=e}return Rt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=br(t),n!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ue]=t}else Fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Rt(t),e=!1}else n=co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(In(t),t):(In(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Rt(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=br(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[Ue]=t}else Fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Rt(t),o=!1}else o=co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(In(t),t):(In(t),null)}return In(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==o&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Os(t,t.updateQueue),Rt(t),null);case 4:return Fe(),e===null&&Sc(t.stateNode.containerInfo),Rt(t),null;case 10:return Ba(t.type),Rt(t),null;case 19:if(L(Vt),i=t.memoizedState,i===null)return Rt(t),null;if(o=(t.flags&128)!==0,u=i.rendering,u===null)if(o)kl(i,!1);else{if(_t!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ws(e),u!==null){for(t.flags|=128,kl(i,!1),e=u.updateQueue,t.updateQueue=e,Os(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)z1(n,e),n=n.sibling;return te(Vt,Vt.current&1|2),pt&&La(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&me()>Is&&(t.flags|=128,o=!0,kl(i,!1),t.lanes=4194304)}else{if(!o)if(e=ws(u),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Os(t,e),kl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!pt)return Rt(t),null}else 2*me()-i.renderingStartTime>Is&&n!==536870912&&(t.flags|=128,o=!0,kl(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=me(),e.sibling=null,n=Vt.current,te(Vt,o?n&1|2:n&1),pt&&La(t,i.treeForkCount),e):(Rt(t),null);case 22:case 23:return In(t),ko(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Rt(t),t.subtreeFlags&6&&(t.flags|=8192)):Rt(t),n=t.updateQueue,n!==null&&Os(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&L(Gi),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ba(Wt),Rt(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function I4(e,t){switch(so(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ba(Wt),Fe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ze(t),null;case 31:if(t.memoizedState!==null){if(In(t),t.alternate===null)throw Error(s(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(In(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Vt),null;case 4:return Fe(),null;case 10:return Ba(t.type),null;case 22:case 23:return In(t),ko(),e!==null&&L(Gi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ba(Wt),null;case 25:return null;default:return null}}function ah(e,t){switch(so(t),t.tag){case 3:Ba(Wt),Fe();break;case 26:case 27:case 5:Ze(t);break;case 4:Fe();break;case 31:t.memoizedState!==null&&In(t);break;case 13:In(t);break;case 19:L(Vt);break;case 10:Ba(t.type);break;case 22:case 23:In(t),ko(),e!==null&&L(Gi);break;case 24:Ba(Wt)}}function Cl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){i=void 0;var u=n.create,p=n.inst;i=u(),p.destroy=i}n=n.next}while(n!==o)}}catch(x){kt(t,t.return,x)}}function ui(e,t,n){try{var i=t.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var u=o.next;i=u;do{if((i.tag&e)===e){var p=i.inst,x=p.destroy;if(x!==void 0){p.destroy=void 0,o=t;var E=n,j=x;try{j()}catch(Z){kt(o,E,Z)}}}i=i.next}while(i!==u)}}catch(Z){kt(t,t.return,Z)}}function ih(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Q1(t,n)}catch(i){kt(e,e.return,i)}}}function rh(e,t,n){n.props=Qi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){kt(e,t,i)}}function Tl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){kt(e,t,o)}}function ya(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(o){kt(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){kt(e,t,o)}else n.current=null}function lh(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(o){kt(e,e.return,o)}}function tc(e,t,n){try{var i=e.stateNode;s5(i,e.type,n,t),i[je]=t}catch(o){kt(e,e.return,o)}}function sh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vi(e.type)||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=za));else if(i!==4&&(i===27&&vi(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ac(e,t,n),e=e.sibling;e!==null;)ac(e,t,n),e=e.sibling}function Bs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&vi(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}function oh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);cn(t,i,n),t[Ue]=e,t[je]=n}catch(u){kt(e,e.return,u)}}var Fa=!1,Zt=!1,ic=!1,ch=typeof WeakSet=="function"?WeakSet:Set,rn=null;function F4(e,t){if(e=e.containerInfo,Tc=n0,e=w1(e),Z0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var p=0,x=-1,E=-1,j=0,Z=0,J=e,F=null;t:for(;;){for(var Y;J!==n||o!==0&&J.nodeType!==3||(x=p+o),J!==u||i!==0&&J.nodeType!==3||(E=p+i),J.nodeType===3&&(p+=J.nodeValue.length),(Y=J.firstChild)!==null;)F=J,J=Y;for(;;){if(J===e)break t;if(F===n&&++j===o&&(x=p),F===u&&++Z===i&&(E=p),(Y=J.nextSibling)!==null)break;J=F,F=J.parentNode}J=Y}n=x===-1||E===-1?null:{start:x,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ac={focusedElem:e,selectionRange:n},n0=!1,rn=t;rn!==null;)if(t=rn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,rn=e;else for(;rn!==null;){switch(t=rn,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,o=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var Ne=Qi(n.type,o);e=i.getSnapshotBeforeUpdate(Ne,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(Ge){kt(n,n.return,Ge)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Dc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Dc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,rn=e;break}rn=t.return}}function uh(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:_a(e,n),i&4&&Cl(5,n);break;case 1:if(_a(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){kt(n,n.return,p)}else{var o=Qi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){kt(n,n.return,p)}}i&64&&ih(n),i&512&&Tl(n,n.return);break;case 3:if(_a(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Q1(e,t)}catch(p){kt(n,n.return,p)}}break;case 27:t===null&&i&4&&oh(n);case 26:case 5:_a(e,n),t===null&&i&4&&lh(n),i&512&&Tl(n,n.return);break;case 12:_a(e,n);break;case 31:_a(e,n),i&4&&mh(e,n);break;case 13:_a(e,n),i&4&&fh(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=P4.bind(null,n),p5(e,n))));break;case 22:if(i=n.memoizedState!==null||Fa,!i){t=t!==null&&t.memoizedState!==null||Zt,o=Fa;var u=Zt;Fa=i,(Zt=t)&&!u?Ga(e,n,(n.subtreeFlags&8772)!==0):_a(e,n),Fa=o,Zt=u}break;case 30:break;default:_a(e,n)}}function dh(e){var t=e.alternate;t!==null&&(e.alternate=null,dh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ot=null,Mn=!1;function Ua(e,t,n){for(n=n.child;n!==null;)hh(e,t,n),n=n.sibling}function hh(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Ct,n)}catch{}switch(n.tag){case 26:Zt||ya(n,t),Ua(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Zt||ya(n,t);var i=Ot,o=Mn;vi(n.type)&&(Ot=n.stateNode,Mn=!1),Ua(e,t,n),Ol(n.stateNode),Ot=i,Mn=o;break;case 5:Zt||ya(n,t);case 6:if(i=Ot,o=Mn,Ot=null,Ua(e,t,n),Ot=i,Mn=o,Ot!==null)if(Mn)try{(Ot.nodeType===9?Ot.body:Ot.nodeName==="HTML"?Ot.ownerDocument.body:Ot).removeChild(n.stateNode)}catch(u){kt(n,t,u)}else try{Ot.removeChild(n.stateNode)}catch(u){kt(n,t,u)}break;case 18:Ot!==null&&(Mn?(e=Ot,im(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fr(e)):im(Ot,n.stateNode));break;case 4:i=Ot,o=Mn,Ot=n.stateNode.containerInfo,Mn=!0,Ua(e,t,n),Ot=i,Mn=o;break;case 0:case 11:case 14:case 15:ui(2,n,t),Zt||ui(4,n,t),Ua(e,t,n);break;case 1:Zt||(ya(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&rh(n,t,i)),Ua(e,t,n);break;case 21:Ua(e,t,n);break;case 22:Zt=(i=Zt)||n.memoizedState!==null,Ua(e,t,n),Zt=i;break;default:Ua(e,t,n)}}function mh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fr(e)}catch(n){kt(t,t.return,n)}}}function fh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fr(e)}catch(n){kt(t,t.return,n)}}function U4(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ch),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ch),t;default:throw Error(s(435,e.tag))}}function Hs(e,t){var n=U4(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var o=Z4.bind(null,e,i);i.then(o,o)}})}function En(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i],u=e,p=t,x=p;e:for(;x!==null;){switch(x.tag){case 27:if(vi(x.type)){Ot=x.stateNode,Mn=!1;break e}break;case 5:Ot=x.stateNode,Mn=!1;break e;case 3:case 4:Ot=x.stateNode.containerInfo,Mn=!0;break e}x=x.return}if(Ot===null)throw Error(s(160));hh(u,p,o),Ot=null,Mn=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ph(t,e),t=t.sibling}var ha=null;function ph(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(t,e),Dn(e),i&4&&(ui(3,e,e.return),Cl(3,e),ui(5,e,e.return));break;case 1:En(t,e),Dn(e),i&512&&(Zt||n===null||ya(n,n.return)),i&64&&Fa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var o=ha;if(En(t,e),Dn(e),i&512&&(Zt||n===null||ya(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(i){case"title":u=o.getElementsByTagName("title")[0],(!u||u[gn]||u[Ue]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(i),o.head.insertBefore(u,o.querySelector("head > title"))),cn(u,i,n),u[Ue]=e,Ft(u),i=u;break e;case"link":var p=pm("link","href",o).get(i+(n.href||""));if(p){for(var x=0;x<p.length;x++)if(u=p[x],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(x,1);break t}}u=o.createElement(i),cn(u,i,n),o.head.appendChild(u);break;case"meta":if(p=pm("meta","content",o).get(i+(n.content||""))){for(x=0;x<p.length;x++)if(u=p[x],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(x,1);break t}}u=o.createElement(i),cn(u,i,n),o.head.appendChild(u);break;default:throw Error(s(468,i))}u[Ue]=e,Ft(u),i=u}e.stateNode=i}else gm(o,e.type,e.stateNode);else e.stateNode=fm(o,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?gm(o,e.type,e.stateNode):fm(o,i,e.memoizedProps)):i===null&&e.stateNode!==null&&tc(e,e.memoizedProps,n.memoizedProps)}break;case 27:En(t,e),Dn(e),i&512&&(Zt||n===null||ya(n,n.return)),n!==null&&i&4&&tc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(En(t,e),Dn(e),i&512&&(Zt||n===null||ya(n,n.return)),e.flags&32){o=e.stateNode;try{cr(o,"")}catch(Ne){kt(e,e.return,Ne)}}i&4&&e.stateNode!=null&&(o=e.memoizedProps,tc(e,o,n!==null?n.memoizedProps:o)),i&1024&&(ic=!0);break;case 6:if(En(t,e),Dn(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(Ne){kt(e,e.return,Ne)}}break;case 3:if($s=null,o=ha,ha=Zs(t.containerInfo),En(t,e),ha=o,Dn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(Ne){kt(e,e.return,Ne)}ic&&(ic=!1,gh(e));break;case 4:i=ha,ha=Zs(e.stateNode.containerInfo),En(t,e),Dn(e),ha=i;break;case 12:En(t,e),Dn(e);break;case 31:En(t,e),Dn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Hs(e,i)));break;case 13:En(t,e),Dn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qs=me()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Hs(e,i)));break;case 22:o=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,j=Fa,Z=Zt;if(Fa=j||o,Zt=Z||E,En(t,e),Zt=Z,Fa=j,Dn(e),i&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||E||Fa||Zt||Pi(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(u=E.stateNode,o)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{x=E.stateNode;var J=E.memoizedProps.style,F=J!=null&&J.hasOwnProperty("display")?J.display:null;x.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(Ne){kt(E,E.return,Ne)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=o?"":E.memoizedProps}catch(Ne){kt(E,E.return,Ne)}}}else if(t.tag===18){if(n===null){E=t;try{var Y=E.stateNode;o?rm(Y,!0):rm(E.stateNode,!1)}catch(Ne){kt(E,E.return,Ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Hs(e,n))));break;case 19:En(t,e),Dn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Hs(e,i)));break;case 30:break;case 21:break;default:En(t,e),Dn(e)}}function Dn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(sh(i)){n=i;break}i=i.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var o=n.stateNode,u=nc(e);Bs(e,u,o);break;case 5:var p=n.stateNode;n.flags&32&&(cr(p,""),n.flags&=-33);var x=nc(e);Bs(e,x,p);break;case 3:case 4:var E=n.stateNode.containerInfo,j=nc(e);ac(e,j,E);break;default:throw Error(s(161))}}catch(Z){kt(e,e.return,Z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _a(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uh(e,t.alternate,t),t=t.sibling}function Pi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ui(4,t,t.return),Pi(t);break;case 1:ya(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&rh(t,t.return,n),Pi(t);break;case 27:Ol(t.stateNode);case 26:case 5:ya(t,t.return),Pi(t);break;case 22:t.memoizedState===null&&Pi(t);break;case 30:Pi(t);break;default:Pi(t)}e=e.sibling}}function Ga(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,o=e,u=t,p=u.flags;switch(u.tag){case 0:case 11:case 15:Ga(o,u,n),Cl(4,u);break;case 1:if(Ga(o,u,n),i=u,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(j){kt(i,i.return,j)}if(i=u,o=i.updateQueue,o!==null){var x=i.stateNode;try{var E=o.shared.hiddenCallbacks;if(E!==null)for(o.shared.hiddenCallbacks=null,o=0;o<E.length;o++)W1(E[o],x)}catch(j){kt(i,i.return,j)}}n&&p&64&&ih(u),Tl(u,u.return);break;case 27:oh(u);case 26:case 5:Ga(o,u,n),n&&i===null&&p&4&&lh(u),Tl(u,u.return);break;case 12:Ga(o,u,n);break;case 31:Ga(o,u,n),n&&p&4&&mh(o,u);break;case 13:Ga(o,u,n),n&&p&4&&fh(o,u);break;case 22:u.memoizedState===null&&Ga(o,u,n),Tl(u,u.return);break;case 30:break;default:Ga(o,u,n)}t=t.sibling}}function rc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&dl(n))}function lc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&dl(e))}function ma(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vh(e,t,n,i),t=t.sibling}function vh(e,t,n,i){var o=t.flags;switch(t.tag){case 0:case 11:case 15:ma(e,t,n,i),o&2048&&Cl(9,t);break;case 1:ma(e,t,n,i);break;case 3:ma(e,t,n,i),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&dl(e)));break;case 12:if(o&2048){ma(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,p=u.id,x=u.onPostCommit;typeof x=="function"&&x(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){kt(t,t.return,E)}}else ma(e,t,n,i);break;case 31:ma(e,t,n,i);break;case 13:ma(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,p=t.alternate,t.memoizedState!==null?u._visibility&2?ma(e,t,n,i):Al(e,t):u._visibility&2?ma(e,t,n,i):(u._visibility|=2,Dr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),o&2048&&rc(p,t);break;case 24:ma(e,t,n,i),o&2048&&lc(t.alternate,t);break;default:ma(e,t,n,i)}}function Dr(e,t,n,i,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,p=t,x=n,E=i,j=p.flags;switch(p.tag){case 0:case 11:case 15:Dr(u,p,x,E,o),Cl(8,p);break;case 23:break;case 22:var Z=p.stateNode;p.memoizedState!==null?Z._visibility&2?Dr(u,p,x,E,o):Al(u,p):(Z._visibility|=2,Dr(u,p,x,E,o)),o&&j&2048&&rc(p.alternate,p);break;case 24:Dr(u,p,x,E,o),o&&j&2048&&lc(p.alternate,p);break;default:Dr(u,p,x,E,o)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,o=i.flags;switch(i.tag){case 22:Al(n,i),o&2048&&rc(i.alternate,i);break;case 24:Al(n,i),o&2048&&lc(i.alternate,i);break;default:Al(n,i)}t=t.sibling}}var Ml=8192;function zr(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)yh(e,t,n),e=e.sibling}function yh(e,t,n){switch(e.tag){case 26:zr(e,t,n),e.flags&Ml&&e.memoizedState!==null&&M5(n,ha,e.memoizedState,e.memoizedProps);break;case 5:zr(e,t,n);break;case 3:case 4:var i=ha;ha=Zs(e.stateNode.containerInfo),zr(e,t,n),ha=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ml,Ml=16777216,zr(e,t,n),Ml=i):zr(e,t,n));break;default:zr(e,t,n)}}function bh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function El(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];rn=i,wh(i,e)}bh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xh(e),e=e.sibling}function xh(e){switch(e.tag){case 0:case 11:case 15:El(e),e.flags&2048&&ui(9,e,e.return);break;case 3:El(e);break;case 12:El(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,js(e)):El(e);break;default:El(e)}}function js(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];rn=i,wh(i,e)}bh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ui(8,t,t.return),js(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,js(t));break;default:js(t)}e=e.sibling}}function wh(e,t){for(;rn!==null;){var n=rn;switch(n.tag){case 0:case 11:case 15:ui(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:dl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,rn=i;else e:for(n=e;rn!==null;){i=rn;var o=i.sibling,u=i.return;if(dh(i),i===n){rn=null;break e}if(o!==null){o.return=u,rn=o;break e}rn=u}}}var _4={getCacheForType:function(e){var t=sn(Wt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sn(Wt).controller.signal}},G4=typeof WeakMap=="function"?WeakMap:Map,bt=0,Dt=null,ct=null,ht=0,St=0,Fn=null,di=!1,Nr=!1,sc=!1,Ya=0,_t=0,hi=0,Zi=0,oc=0,Un=0,Rr=0,Dl=null,zn=null,cc=!1,qs=0,Sh=0,Is=1/0,Fs=null,mi=null,en=0,fi=null,Lr=null,Va=0,uc=0,dc=null,kh=null,zl=0,hc=null;function _n(){return(bt&2)!==0&&ht!==0?ht&-ht:B.T!==null?yc():rr()}function Ch(){if(Un===0)if((ht&536870912)===0||pt){var e=mn;mn<<=1,(mn&3932160)===0&&(mn=262144),Un=e}else Un=536870912;return e=qn.current,e!==null&&(e.flags|=32),Un}function Nn(e,t,n){(e===Dt&&(St===2||St===9)||e.cancelPendingCommit!==null)&&(Or(e,0),pi(e,ht,Un,!1)),Lt(e,n),((bt&2)===0||e!==Dt)&&(e===Dt&&((bt&2)===0&&(Zi|=n),_t===4&&pi(e,ht,Un,!1)),ba(e))}function Th(e,t,n){if((bt&6)!==0)throw Error(s(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ma(e,t),o=i?X4(e,t):fc(e,t,!0),u=i;do{if(o===0){Nr&&!i&&pi(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Y4(n)){o=fc(e,t,!1),u=!1;continue}if(o===2){if(u=t,e.errorRecoveryDisabledLanes&u)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var x=e;o=Dl;var E=x.current.memoizedState.isDehydrated;if(E&&(Or(x,p).flags|=256),p=fc(x,p,!1),p!==2){if(sc&&!E){x.errorRecoveryDisabledLanes|=u,Zi|=u,o=4;break e}u=zn,zn=o,u!==null&&(zn===null?zn=u:zn.push.apply(zn,u))}o=p}if(u=!1,o!==2)continue}}if(o===1){Or(e,0),pi(e,t,0,!0);break}e:{switch(i=e,u=o,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:pi(i,t,Un,!di);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(o=qs+300-me(),10<o)){if(pi(i,t,Un,!di),Aa(i,0,!0)!==0)break e;Va=t,i.timeoutHandle=nm(Ah.bind(null,i,n,zn,Fs,cc,t,Un,Zi,Rr,di,u,"Throttled",-0,0),o);break e}Ah(i,n,zn,Fs,cc,t,Un,Zi,Rr,di,u,null,-0,0)}}break}while(!0);ba(e)}function Ah(e,t,n,i,o,u,p,x,E,j,Z,J,F,Y){if(e.timeoutHandle=-1,J=t.subtreeFlags,J&8192||(J&16785408)===16785408){J={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:za},yh(t,u,J);var Ne=(u&62914560)===u?qs-me():(u&4194048)===u?Sh-me():0;if(Ne=E5(J,Ne),Ne!==null){Va=u,e.cancelPendingCommit=Ne(Oh.bind(null,e,t,u,n,i,o,p,x,E,Z,J,null,F,Y)),pi(e,u,p,!j);return}}Oh(e,t,u,n,i,o,p,x,E)}function Y4(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var o=n[i],u=o.getSnapshot;o=o.value;try{if(!Hn(u(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pi(e,t,n,i){t&=~oc,t&=~Zi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var o=t;0<o;){var u=31-Xe(o),p=1<<u;i[u]=-1,o&=~p}n!==0&&Kr(e,n,t)}function Us(){return(bt&6)===0?(Nl(0),!1):!0}function mc(){if(ct!==null){if(St===0)var e=ct.return;else e=ct,Oa=Ui=null,Do(e),Cr=null,ml=0,e=ct;for(;e!==null;)ah(e.alternate,e),e=e.return;ct=null}}function Or(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,u5(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Va=0,mc(),Dt=e,ct=n=Ra(e.current,null),ht=t,St=0,Fn=null,di=!1,Nr=Ma(e,t),sc=!1,Rr=Un=oc=Zi=hi=_t=0,zn=Dl=null,cc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var o=31-Xe(i),u=1<<o;t|=e[o],i&=~u}return Ya=t,os(),n}function Mh(e,t){at=null,B.H=wl,t===kr||t===gs?(t=G1(),St=3):t===vo?(t=G1(),St=4):St=t===Vo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Fn=t,ct===null&&(_t=1,zs(e,Jn(t,e.current)))}function Eh(){var e=qn.current;return e===null?!0:(ht&4194048)===ht?aa===null:(ht&62914560)===ht||(ht&536870912)!==0?e===aa:!1}function Dh(){var e=B.H;return B.H=wl,e===null?wl:e}function zh(){var e=B.A;return B.A=_4,e}function _s(){_t=4,di||(ht&4194048)!==ht&&qn.current!==null||(Nr=!0),(hi&134217727)===0&&(Zi&134217727)===0||Dt===null||pi(Dt,ht,Un,!1)}function fc(e,t,n){var i=bt;bt|=2;var o=Dh(),u=zh();(Dt!==e||ht!==t)&&(Fs=null,Or(e,t)),t=!1;var p=_t;e:do try{if(St!==0&&ct!==null){var x=ct,E=Fn;switch(St){case 8:mc(),p=6;break e;case 3:case 2:case 9:case 6:qn.current===null&&(t=!0);var j=St;if(St=0,Fn=null,Br(e,x,E,j),n&&Nr){p=0;break e}break;default:j=St,St=0,Fn=null,Br(e,x,E,j)}}V4(),p=_t;break}catch(Z){Mh(e,Z)}while(!0);return t&&e.shellSuspendCounter++,Oa=Ui=null,bt=i,B.H=o,B.A=u,ct===null&&(Dt=null,ht=0,os()),p}function V4(){for(;ct!==null;)Nh(ct)}function X4(e,t){var n=bt;bt|=2;var i=Dh(),o=zh();Dt!==e||ht!==t?(Fs=null,Is=me()+500,Or(e,t)):Nr=Ma(e,t);e:do try{if(St!==0&&ct!==null){t=ct;var u=Fn;t:switch(St){case 1:St=0,Fn=null,Br(e,t,u,1);break;case 2:case 9:if(U1(u)){St=0,Fn=null,Rh(t);break}t=function(){St!==2&&St!==9||Dt!==e||(St=7),ba(e)},u.then(t,t);break e;case 3:St=7;break e;case 4:St=5;break e;case 7:U1(u)?(St=0,Fn=null,Rh(t)):(St=0,Fn=null,Br(e,t,u,7));break;case 5:var p=null;switch(ct.tag){case 26:p=ct.memoizedState;case 5:case 27:var x=ct;if(p?vm(p):x.stateNode.complete){St=0,Fn=null;var E=x.sibling;if(E!==null)ct=E;else{var j=x.return;j!==null?(ct=j,Gs(j)):ct=null}break t}}St=0,Fn=null,Br(e,t,u,5);break;case 6:St=0,Fn=null,Br(e,t,u,6);break;case 8:mc(),_t=6;break e;default:throw Error(s(462))}}W4();break}catch(Z){Mh(e,Z)}while(!0);return Oa=Ui=null,B.H=i,B.A=o,bt=n,ct!==null?0:(Dt=null,ht=0,os(),_t)}function W4(){for(;ct!==null&&!ye();)Nh(ct)}function Nh(e){var t=th(e.alternate,e,Ya);e.memoizedProps=e.pendingProps,t===null?Gs(e):ct=t}function Rh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Pd(n,t,t.pendingProps,t.type,void 0,ht);break;case 11:t=Pd(n,t,t.pendingProps,t.type.render,t.ref,ht);break;case 5:Do(t);default:ah(n,t),t=ct=z1(t,Ya),t=th(n,t,Ya)}e.memoizedProps=e.pendingProps,t===null?Gs(e):ct=t}function Br(e,t,n,i){Oa=Ui=null,Do(t),Cr=null,ml=0;var o=t.return;try{if(B4(e,o,t,n,ht)){_t=1,zs(e,Jn(n,e.current)),ct=null;return}}catch(u){if(o!==null)throw ct=o,u;_t=1,zs(e,Jn(n,e.current)),ct=null;return}t.flags&32768?(pt||i===1?e=!0:Nr||(ht&536870912)!==0?e=!1:(di=e=!0,(i===2||i===9||i===3||i===6)&&(i=qn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Lh(t,e)):Gs(t)}function Gs(e){var t=e;do{if((t.flags&32768)!==0){Lh(t,di);return}e=t.return;var n=q4(t.alternate,t,Ya);if(n!==null){ct=n;return}if(t=t.sibling,t!==null){ct=t;return}ct=t=e}while(t!==null);_t===0&&(_t=5)}function Lh(e,t){do{var n=I4(e.alternate,e);if(n!==null){n.flags&=32767,ct=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ct=e;return}ct=e=n}while(e!==null);_t=6,ct=null}function Oh(e,t,n,i,o,u,p,x,E){e.cancelPendingCommit=null;do Ys();while(en!==0);if((bt&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=to,Ri(e,n,u,p,x,E),e===Dt&&(ct=Dt=null,ht=0),Lr=t,fi=e,Va=n,uc=u,dc=o,kh=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,K4(Pe,function(){return Ih(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=B.T,B.T=null,o=ne.p,ne.p=2,p=bt,bt|=4;try{F4(e,t,n)}finally{bt=p,ne.p=o,B.T=i}}en=1,Bh(),Hh(),jh()}}function Bh(){if(en===1){en=0;var e=fi,t=Lr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var i=ne.p;ne.p=2;var o=bt;bt|=4;try{ph(t,e);var u=Ac,p=w1(e.containerInfo),x=u.focusedElem,E=u.selectionRange;if(p!==x&&x&&x.ownerDocument&&x1(x.ownerDocument.documentElement,x)){if(E!==null&&Z0(x)){var j=E.start,Z=E.end;if(Z===void 0&&(Z=j),"selectionStart"in x)x.selectionStart=j,x.selectionEnd=Math.min(Z,x.value.length);else{var J=x.ownerDocument||document,F=J&&J.defaultView||window;if(F.getSelection){var Y=F.getSelection(),Ne=x.textContent.length,Ge=Math.min(E.start,Ne),Mt=E.end===void 0?Ge:Math.min(E.end,Ne);!Y.extend&&Ge>Mt&&(p=Mt,Mt=Ge,Ge=p);var R=b1(x,Ge),D=b1(x,Mt);if(R&&D&&(Y.rangeCount!==1||Y.anchorNode!==R.node||Y.anchorOffset!==R.offset||Y.focusNode!==D.node||Y.focusOffset!==D.offset)){var H=J.createRange();H.setStart(R.node,R.offset),Y.removeAllRanges(),Ge>Mt?(Y.addRange(H),Y.extend(D.node,D.offset)):(H.setEnd(D.node,D.offset),Y.addRange(H))}}}}for(J=[],Y=x;Y=Y.parentNode;)Y.nodeType===1&&J.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<J.length;x++){var $=J[x];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}n0=!!Tc,Ac=Tc=null}finally{bt=o,ne.p=i,B.T=n}}e.current=t,en=2}}function Hh(){if(en===2){en=0;var e=fi,t=Lr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var i=ne.p;ne.p=2;var o=bt;bt|=4;try{uh(e,t.alternate,t)}finally{bt=o,ne.p=i,B.T=n}}en=3}}function jh(){if(en===4||en===3){en=0,De();var e=fi,t=Lr,n=Va,i=kh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?en=5:(en=0,Lr=fi=null,qh(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(mi=null),Oi(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Ct,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=B.T,o=ne.p,ne.p=2,B.T=null;try{for(var u=e.onRecoverableError,p=0;p<i.length;p++){var x=i[p];u(x.value,{componentStack:x.stack})}}finally{B.T=t,ne.p=o}}(Va&3)!==0&&Ys(),ba(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===hc?zl++:(zl=0,hc=e):zl=0,Nl(0)}}function qh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,dl(t)))}function Ys(){return Bh(),Hh(),jh(),Ih()}function Ih(){if(en!==5)return!1;var e=fi,t=uc;uc=0;var n=Oi(Va),i=B.T,o=ne.p;try{ne.p=32>n?32:n,B.T=null,n=dc,dc=null;var u=fi,p=Va;if(en=0,Lr=fi=null,Va=0,(bt&6)!==0)throw Error(s(331));var x=bt;if(bt|=4,xh(u.current),vh(u,u.current,p,n),bt=x,Nl(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Ct,u)}catch{}return!0}finally{ne.p=o,B.T=i,qh(e,t)}}function Fh(e,t,n){t=Jn(n,t),t=Yo(e.stateNode,t,2),e=si(e,t,2),e!==null&&(Lt(e,2),ba(e))}function kt(e,t,n){if(e.tag===3)Fh(e,e,n);else for(;t!==null;){if(t.tag===3){Fh(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(mi===null||!mi.has(i))){e=Jn(n,e),n=Ud(2),i=si(t,n,2),i!==null&&(_d(n,i,t,e),Lt(i,2),ba(i));break}}t=t.return}}function pc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new G4;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(sc=!0,o.add(n),e=Q4.bind(null,e,t,n),t.then(e,e))}function Q4(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Dt===e&&(ht&n)===n&&(_t===4||_t===3&&(ht&62914560)===ht&&300>me()-qs?(bt&2)===0&&Or(e,0):oc|=n,Rr===ht&&(Rr=0)),ba(e)}function Uh(e,t){t===0&&(t=fn()),e=qi(e,t),e!==null&&(Lt(e,t),ba(e))}function P4(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uh(e,n)}function Z4(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Uh(e,n)}function K4(e,t){return be(e,t)}var Vs=null,Hr=null,gc=!1,Xs=!1,vc=!1,gi=0;function ba(e){e!==Hr&&e.next===null&&(Hr===null?Vs=Hr=e:Hr=Hr.next=e),Xs=!0,gc||(gc=!0,J4())}function Nl(e,t){if(!vc&&Xs){vc=!0;do for(var n=!1,i=Vs;i!==null;){if(e!==0){var o=i.pendingLanes;if(o===0)var u=0;else{var p=i.suspendedLanes,x=i.pingedLanes;u=(1<<31-Xe(42|e)+1)-1,u&=o&~(p&~x),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Vh(i,u))}else u=ht,u=Aa(i,i===Dt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Ma(i,u)||(n=!0,Vh(i,u));i=i.next}while(n);vc=!1}}function $4(){_h()}function _h(){Xs=gc=!1;var e=0;gi!==0&&c5()&&(e=gi);for(var t=me(),n=null,i=Vs;i!==null;){var o=i.next,u=Gh(i,t);u===0?(i.next=null,n===null?Vs=o:n.next=o,o===null&&(Hr=n)):(n=i,(e!==0||(u&3)!==0)&&(Xs=!0)),i=o}en!==0&&en!==5||Nl(e),gi!==0&&(gi=0)}function Gh(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var p=31-Xe(u),x=1<<p,E=o[p];E===-1?((x&n)===0||(x&i)!==0)&&(o[p]=Pr(x,t)):E<=t&&(e.expiredLanes|=x),u&=~x}if(t=Dt,n=ht,n=Aa(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(St===2||St===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ve(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ma(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ve(i),Oi(n)){case 2:case 8:n=tt;break;case 32:n=Pe;break;case 268435456:n=st;break;default:n=Pe}return i=Yh.bind(null,e),n=be(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ve(i),e.callbackPriority=2,e.callbackNode=null,2}function Yh(e,t){if(en!==0&&en!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ys()&&e.callbackNode!==n)return null;var i=ht;return i=Aa(e,e===Dt?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Th(e,i,t),Gh(e,me()),e.callbackNode!=null&&e.callbackNode===n?Yh.bind(null,e):null)}function Vh(e,t){if(Ys())return null;Th(e,t,!0)}function J4(){d5(function(){(bt&6)!==0?be(He,$4):_h()})}function yc(){if(gi===0){var e=wr;e===0&&(e=Yt,Yt<<=1,(Yt&261888)===0&&(Yt=256)),gi=e}return gi}function Xh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:es(""+e)}function Wh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function e5(e,t,n,i,o){if(t==="submit"&&n&&n.stateNode===o){var u=Xh((o[je]||null).action),p=i.submitter;p&&(t=(t=p[je]||null)?Xh(t.formAction):p.getAttribute("formAction"),t!==null&&(u=t,p=null));var x=new is("action","action",null,i,o);e.push({event:x,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(gi!==0){var E=p?Wh(o,p):new FormData(o);qo(n,{pending:!0,data:E,method:o.method,action:u},null,E)}}else typeof u=="function"&&(x.preventDefault(),E=p?Wh(o,p):new FormData(o),qo(n,{pending:!0,data:E,method:o.method,action:u},u,E))},currentTarget:o}]})}}for(var bc=0;bc<eo.length;bc++){var xc=eo[bc],t5=xc.toLowerCase(),n5=xc[0].toUpperCase()+xc.slice(1);da(t5,"on"+n5)}da(C1,"onAnimationEnd"),da(T1,"onAnimationIteration"),da(A1,"onAnimationStart"),da("dblclick","onDoubleClick"),da("focusin","onFocus"),da("focusout","onBlur"),da(y4,"onTransitionRun"),da(b4,"onTransitionStart"),da(x4,"onTransitionCancel"),da(M1,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function Qh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var p=i.length-1;0<=p;p--){var x=i[p],E=x.instance,j=x.currentTarget;if(x=x.listener,E!==u&&o.isPropagationStopped())break e;u=x,o.currentTarget=j;try{u(o)}catch(Z){ss(Z)}o.currentTarget=null,u=E}else for(p=0;p<i.length;p++){if(x=i[p],E=x.instance,j=x.currentTarget,x=x.listener,E!==u&&o.isPropagationStopped())break e;u=x,o.currentTarget=j;try{u(o)}catch(Z){ss(Z)}o.currentTarget=null,u=E}}}}function ut(e,t){var n=t[pn];n===void 0&&(n=t[pn]=new Set);var i=e+"__bubble";n.has(i)||(Ph(t,e,2,!1),n.add(i))}function wc(e,t,n){var i=0;t&&(i|=4),Ph(n,e,i,t)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function Sc(e){if(!e[Ws]){e[Ws]=!0,$r.forEach(function(n){n!=="selectionchange"&&(a5.has(n)||wc(n,!1,e),wc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ws]||(t[Ws]=!0,wc("selectionchange",!1,t))}}function Ph(e,t,n,i){switch(Cm(t)){case 2:var o=N5;break;case 8:o=R5;break;default:o=jc}n=o.bind(null,t,n,e),o=void 0,!U0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function kc(e,t,n,i,o){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var x=i.stateNode.containerInfo;if(x===o)break;if(p===4)for(p=i.return;p!==null;){var E=p.tag;if((E===3||E===4)&&p.stateNode.containerInfo===o)return;p=p.return}for(;x!==null;){if(p=vn(x),p===null)return;if(E=p.tag,E===5||E===6||E===26||E===27){i=u=p;continue e}x=x.parentNode}}i=i.return}e1(function(){var j=u,Z=I0(n),J=[];e:{var F=E1.get(e);if(F!==void 0){var Y=is,Ne=e;switch(e){case"keypress":if(ns(n)===0)break e;case"keydown":case"keyup":Y=Z2;break;case"focusin":Ne="focus",Y=V0;break;case"focusout":Ne="blur",Y=V0;break;case"beforeblur":case"afterblur":Y=V0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=a1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=q2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=J2;break;case C1:case T1:case A1:Y=U2;break;case M1:Y=t4;break;case"scroll":case"scrollend":Y=H2;break;case"wheel":Y=a4;break;case"copy":case"cut":case"paste":Y=G2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=r1;break;case"toggle":case"beforetoggle":Y=r4}var Ge=(t&4)!==0,Mt=!Ge&&(e==="scroll"||e==="scrollend"),R=Ge?F!==null?F+"Capture":null:F;Ge=[];for(var D=j,H;D!==null;){var $=D;if(H=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||H===null||R===null||($=el(D,R),$!=null&&Ge.push(Ll(D,$,H))),Mt)break;D=D.return}0<Ge.length&&(F=new Y(F,Ne,null,n,Z),J.push({event:F,listeners:Ge}))}}if((t&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",F&&n!==q0&&(Ne=n.relatedTarget||n.fromElement)&&(vn(Ne)||Ne[jt]))break e;if((Y||F)&&(F=Z.window===Z?Z:(F=Z.ownerDocument)?F.defaultView||F.parentWindow:window,Y?(Ne=n.relatedTarget||n.toElement,Y=j,Ne=Ne?vn(Ne):null,Ne!==null&&(Mt=d(Ne),Ge=Ne.tag,Ne!==Mt||Ge!==5&&Ge!==27&&Ge!==6)&&(Ne=null)):(Y=null,Ne=j),Y!==Ne)){if(Ge=a1,$="onMouseLeave",R="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(Ge=r1,$="onPointerLeave",R="onPointerEnter",D="pointer"),Mt=Y==null?F:Ea(Y),H=Ne==null?F:Ea(Ne),F=new Ge($,D+"leave",Y,n,Z),F.target=Mt,F.relatedTarget=H,$=null,vn(Z)===j&&(Ge=new Ge(R,D+"enter",Ne,n,Z),Ge.target=H,Ge.relatedTarget=Mt,$=Ge),Mt=$,Y&&Ne)t:{for(Ge=i5,R=Y,D=Ne,H=0,$=R;$;$=Ge($))H++;$=0;for(var qe=D;qe;qe=Ge(qe))$++;for(;0<H-$;)R=Ge(R),H--;for(;0<$-H;)D=Ge(D),$--;for(;H--;){if(R===D||D!==null&&R===D.alternate){Ge=R;break t}R=Ge(R),D=Ge(D)}Ge=null}else Ge=null;Y!==null&&Zh(J,F,Y,Ge,!1),Ne!==null&&Mt!==null&&Zh(J,Mt,Ne,Ge,!0)}}e:{if(F=j?Ea(j):window,Y=F.nodeName&&F.nodeName.toLowerCase(),Y==="select"||Y==="input"&&F.type==="file")var gt=m1;else if(d1(F))if(f1)gt=p4;else{gt=m4;var Le=h4}else Y=F.nodeName,!Y||Y.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?j&&j0(j.elementType)&&(gt=m1):gt=f4;if(gt&&(gt=gt(e,j))){h1(J,gt,n,Z);break e}Le&&Le(e,F,j),e==="focusout"&&j&&F.type==="number"&&j.memoizedProps.value!=null&&H0(F,"number",F.value)}switch(Le=j?Ea(j):window,e){case"focusin":(d1(Le)||Le.contentEditable==="true")&&(mr=Le,K0=j,ol=null);break;case"focusout":ol=K0=mr=null;break;case"mousedown":$0=!0;break;case"contextmenu":case"mouseup":case"dragend":$0=!1,S1(J,n,Z);break;case"selectionchange":if(v4)break;case"keydown":case"keyup":S1(J,n,Z)}var rt;if(W0)e:{switch(e){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else hr?c1(e,n)&&(mt="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(mt="onCompositionStart");mt&&(l1&&n.locale!=="ko"&&(hr||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&hr&&(rt=t1()):(ei=Z,_0="value"in ei?ei.value:ei.textContent,hr=!0)),Le=Qs(j,mt),0<Le.length&&(mt=new i1(mt,e,null,n,Z),J.push({event:mt,listeners:Le}),rt?mt.data=rt:(rt=u1(n),rt!==null&&(mt.data=rt)))),(rt=s4?o4(e,n):c4(e,n))&&(mt=Qs(j,"onBeforeInput"),0<mt.length&&(Le=new i1("onBeforeInput","beforeinput",null,n,Z),J.push({event:Le,listeners:mt}),Le.data=rt)),e5(J,e,j,n,Z)}Qh(J,t)})}function Ll(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qs(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=el(e,n),o!=null&&i.unshift(Ll(e,o,u)),o=el(e,t),o!=null&&i.push(Ll(e,o,u))),e.tag===3)return i;e=e.return}return[]}function i5(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zh(e,t,n,i,o){for(var u=t._reactName,p=[];n!==null&&n!==i;){var x=n,E=x.alternate,j=x.stateNode;if(x=x.tag,E!==null&&E===i)break;x!==5&&x!==26&&x!==27||j===null||(E=j,o?(j=el(n,u),j!=null&&p.unshift(Ll(n,j,E))):o||(j=el(n,u),j!=null&&p.push(Ll(n,j,E)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var r5=/\r\n?/g,l5=/\u0000|\uFFFD/g;function Kh(e){return(typeof e=="string"?e:""+e).replace(r5,`
`).replace(l5,"")}function $h(e,t){return t=Kh(t),Kh(e)===t}function At(e,t,n,i,o,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||cr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&cr(e,""+i);break;case"className":sr(e,"class",i);break;case"tabIndex":sr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":sr(e,n,i);break;case"style":$u(e,i,u);break;case"data":if(t!=="object"){sr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=es(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&At(e,t,"name",o.name,o,null),At(e,t,"formEncType",o.formEncType,o,null),At(e,t,"formMethod",o.formMethod,o,null),At(e,t,"formTarget",o.formTarget,o,null)):(At(e,t,"encType",o.encType,o,null),At(e,t,"method",o.method,o,null),At(e,t,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=es(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=za);break;case"onScroll":i!=null&&ut("scroll",e);break;case"onScrollEnd":i!=null&&ut("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=es(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ut("beforetoggle",e),ut("toggle",e),lr(e,"popover",i);break;case"xlinkActuate":ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ua(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ua(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ua(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ua(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":lr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=O2.get(n)||n,lr(e,n,i))}}function Cc(e,t,n,i,o,u){switch(n){case"style":$u(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof i=="string"?cr(e,i):(typeof i=="number"||typeof i=="bigint")&&cr(e,""+i);break;case"onScroll":i!=null&&ut("scroll",e);break;case"onScrollEnd":i!=null&&ut("scrollend",e);break;case"onClick":i!=null&&(e.onclick=za);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),u=e[je]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,o),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,o);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):lr(e,n,i)}}}function cn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ut("error",e),ut("load",e);var i=!1,o=!1,u;for(u in n)if(n.hasOwnProperty(u)){var p=n[u];if(p!=null)switch(u){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:At(e,t,u,p,n,null)}}o&&At(e,t,"srcSet",n.srcSet,n,null),i&&At(e,t,"src",n.src,n,null);return;case"input":ut("invalid",e);var x=u=p=o=null,E=null,j=null;for(i in n)if(n.hasOwnProperty(i)){var Z=n[i];if(Z!=null)switch(i){case"name":o=Z;break;case"type":p=Z;break;case"checked":E=Z;break;case"defaultChecked":j=Z;break;case"value":u=Z;break;case"defaultValue":x=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(s(137,t));break;default:At(e,t,i,Z,n,null)}}Qu(e,u,x,E,j,p,o,!1);return;case"select":ut("invalid",e),i=p=u=null;for(o in n)if(n.hasOwnProperty(o)&&(x=n[o],x!=null))switch(o){case"value":u=x;break;case"defaultValue":p=x;break;case"multiple":i=x;default:At(e,t,o,x,n,null)}t=u,n=p,e.multiple=!!i,t!=null?or(e,!!i,t,!1):n!=null&&or(e,!!i,n,!0);return;case"textarea":ut("invalid",e),u=o=i=null;for(p in n)if(n.hasOwnProperty(p)&&(x=n[p],x!=null))switch(p){case"value":i=x;break;case"defaultValue":o=x;break;case"children":u=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(s(91));break;default:At(e,t,p,x,n,null)}Zu(e,i,o,u);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(i=n[E],i!=null))switch(E){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:At(e,t,E,i,n,null)}return;case"dialog":ut("beforetoggle",e),ut("toggle",e),ut("cancel",e),ut("close",e);break;case"iframe":case"object":ut("load",e);break;case"video":case"audio":for(i=0;i<Rl.length;i++)ut(Rl[i],e);break;case"image":ut("error",e),ut("load",e);break;case"details":ut("toggle",e);break;case"embed":case"source":case"link":ut("error",e),ut("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in n)if(n.hasOwnProperty(j)&&(i=n[j],i!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:At(e,t,j,i,n,null)}return;default:if(j0(t)){for(Z in n)n.hasOwnProperty(Z)&&(i=n[Z],i!==void 0&&Cc(e,t,Z,i,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(i=n[x],i!=null&&At(e,t,x,i,n,null))}function s5(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,p=null,x=null,E=null,j=null,Z=null;for(Y in n){var J=n[Y];if(n.hasOwnProperty(Y)&&J!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":E=J;default:i.hasOwnProperty(Y)||At(e,t,Y,null,i,J)}}for(var F in i){var Y=i[F];if(J=n[F],i.hasOwnProperty(F)&&(Y!=null||J!=null))switch(F){case"type":u=Y;break;case"name":o=Y;break;case"checked":j=Y;break;case"defaultChecked":Z=Y;break;case"value":p=Y;break;case"defaultValue":x=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:Y!==J&&At(e,t,F,Y,i,J)}}B0(e,p,x,E,j,Z,u,o);return;case"select":Y=p=x=F=null;for(u in n)if(E=n[u],n.hasOwnProperty(u)&&E!=null)switch(u){case"value":break;case"multiple":Y=E;default:i.hasOwnProperty(u)||At(e,t,u,null,i,E)}for(o in i)if(u=i[o],E=n[o],i.hasOwnProperty(o)&&(u!=null||E!=null))switch(o){case"value":F=u;break;case"defaultValue":x=u;break;case"multiple":p=u;default:u!==E&&At(e,t,o,u,i,E)}t=x,n=p,i=Y,F!=null?or(e,!!n,F,!1):!!i!=!!n&&(t!=null?or(e,!!n,t,!0):or(e,!!n,n?[]:"",!1));return;case"textarea":Y=F=null;for(x in n)if(o=n[x],n.hasOwnProperty(x)&&o!=null&&!i.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:At(e,t,x,null,i,o)}for(p in i)if(o=i[p],u=n[p],i.hasOwnProperty(p)&&(o!=null||u!=null))switch(p){case"value":F=o;break;case"defaultValue":Y=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==u&&At(e,t,p,o,i,u)}Pu(e,F,Y);return;case"option":for(var Ne in n)if(F=n[Ne],n.hasOwnProperty(Ne)&&F!=null&&!i.hasOwnProperty(Ne))switch(Ne){case"selected":e.selected=!1;break;default:At(e,t,Ne,null,i,F)}for(E in i)if(F=i[E],Y=n[E],i.hasOwnProperty(E)&&F!==Y&&(F!=null||Y!=null))switch(E){case"selected":e.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:At(e,t,E,F,i,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ge in n)F=n[Ge],n.hasOwnProperty(Ge)&&F!=null&&!i.hasOwnProperty(Ge)&&At(e,t,Ge,null,i,F);for(j in i)if(F=i[j],Y=n[j],i.hasOwnProperty(j)&&F!==Y&&(F!=null||Y!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,t));break;default:At(e,t,j,F,i,Y)}return;default:if(j0(t)){for(var Mt in n)F=n[Mt],n.hasOwnProperty(Mt)&&F!==void 0&&!i.hasOwnProperty(Mt)&&Cc(e,t,Mt,void 0,i,F);for(Z in i)F=i[Z],Y=n[Z],!i.hasOwnProperty(Z)||F===Y||F===void 0&&Y===void 0||Cc(e,t,Z,F,i,Y);return}}for(var R in n)F=n[R],n.hasOwnProperty(R)&&F!=null&&!i.hasOwnProperty(R)&&At(e,t,R,null,i,F);for(J in i)F=i[J],Y=n[J],!i.hasOwnProperty(J)||F===Y||F==null&&Y==null||At(e,t,J,F,i,Y)}function Jh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function o5(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var o=n[i],u=o.transferSize,p=o.initiatorType,x=o.duration;if(u&&x&&Jh(p)){for(p=0,x=o.responseEnd,i+=1;i<n.length;i++){var E=n[i],j=E.startTime;if(j>x)break;var Z=E.transferSize,J=E.initiatorType;Z&&Jh(J)&&(E=E.responseEnd,p+=Z*(E<x?1:(x-j)/(E-j)))}if(--i,t+=8*(u+p)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tc=null,Ac=null;function Ps(e){return e.nodeType===9?e:e.ownerDocument}function em(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Mc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ec=null;function c5(){var e=window.event;return e&&e.type==="popstate"?e===Ec?!1:(Ec=e,!0):(Ec=null,!1)}var nm=typeof setTimeout=="function"?setTimeout:void 0,u5=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,d5=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(e){return am.resolve(null).then(e).catch(h5)}:nm;function h5(e){setTimeout(function(){throw e})}function vi(e){return e==="head"}function im(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(o),Fr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ol(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ol(n);for(var u=n.firstChild;u;){var p=u.nextSibling,x=u.nodeName;u[gn]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=p}}else n==="body"&&Ol(e.ownerDocument.body);n=o}while(n);Fr(t)}function rm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Dc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Dc(n),Bn(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function m5(e,t,n,i){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[gn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=ia(e.nextSibling),e===null)break}return null}function f5(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ia(e.nextSibling),e===null))return null;return e}function lm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ia(e.nextSibling),e===null))return null;return e}function zc(e){return e.data==="$?"||e.data==="$~"}function Nc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function p5(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ia(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Rc=null;function sm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ia(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function om(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function cm(e,t,n){switch(t=Ps(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ol(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bn(e)}var ra=new Map,um=new Set;function Zs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xa=ne.d;ne.d={f:g5,r:v5,D:y5,C:b5,L:x5,m:w5,X:k5,S:S5,M:C5};function g5(){var e=Xa.f(),t=Us();return e||t}function v5(e){var t=Tn(e);t!==null&&t.tag===5&&t.type==="form"?Md(t):Xa.r(e)}var jr=typeof document>"u"?null:document;function dm(e,t,n){var i=jr;if(i&&typeof t=="string"&&t){var o=Kn(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),um.has(o)||(um.add(o),e={rel:e,crossOrigin:n,href:t},i.querySelector(o)===null&&(t=i.createElement("link"),cn(t,"link",e),Ft(t),i.head.appendChild(t)))}}function y5(e){Xa.D(e),dm("dns-prefetch",e,null)}function b5(e,t){Xa.C(e,t),dm("preconnect",e,t)}function x5(e,t,n){Xa.L(e,t,n);var i=jr;if(i&&e&&t){var o='link[rel="preload"][as="'+Kn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Kn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Kn(n.imageSizes)+'"]')):o+='[href="'+Kn(e)+'"]';var u=o;switch(t){case"style":u=qr(e);break;case"script":u=Ir(e)}ra.has(u)||(e=M({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ra.set(u,e),i.querySelector(o)!==null||t==="style"&&i.querySelector(Bl(u))||t==="script"&&i.querySelector(Hl(u))||(t=i.createElement("link"),cn(t,"link",e),Ft(t),i.head.appendChild(t)))}}function w5(e,t){Xa.m(e,t);var n=jr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Kn(i)+'"][href="'+Kn(e)+'"]',u=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ir(e)}if(!ra.has(u)&&(e=M({rel:"modulepreload",href:e},t),ra.set(u,e),n.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Hl(u)))return}i=n.createElement("link"),cn(i,"link",e),Ft(i),n.head.appendChild(i)}}}function S5(e,t,n){Xa.S(e,t,n);var i=jr;if(i&&e){var o=pa(i).hoistableStyles,u=qr(e);t=t||"default";var p=o.get(u);if(!p){var x={loading:0,preload:null};if(p=i.querySelector(Bl(u)))x.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ra.get(u))&&Lc(e,n);var E=p=i.createElement("link");Ft(E),cn(E,"link",e),E._p=new Promise(function(j,Z){E.onload=j,E.onerror=Z}),E.addEventListener("load",function(){x.loading|=1}),E.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Ks(p,t,i)}p={type:"stylesheet",instance:p,count:1,state:x},o.set(u,p)}}}function k5(e,t){Xa.X(e,t);var n=jr;if(n&&e){var i=pa(n).hoistableScripts,o=Ir(e),u=i.get(o);u||(u=n.querySelector(Hl(o)),u||(e=M({src:e,async:!0},t),(t=ra.get(o))&&Oc(e,t),u=n.createElement("script"),Ft(u),cn(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(o,u))}}function C5(e,t){Xa.M(e,t);var n=jr;if(n&&e){var i=pa(n).hoistableScripts,o=Ir(e),u=i.get(o);u||(u=n.querySelector(Hl(o)),u||(e=M({src:e,async:!0,type:"module"},t),(t=ra.get(o))&&Oc(e,t),u=n.createElement("script"),Ft(u),cn(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(o,u))}}function hm(e,t,n,i){var o=(o=ke.current)?Zs(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=qr(n.href),n=pa(o).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=qr(n.href);var u=pa(o).hoistableStyles,p=u.get(e);if(p||(o=o.ownerDocument||o,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,p),(u=o.querySelector(Bl(e)))&&!u._p&&(p.instance=u,p.state.loading=5),ra.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ra.set(e,n),u||T5(o,e,n,p.state))),t&&i===null)throw Error(s(528,""));return p}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ir(n),n=pa(o).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function qr(e){return'href="'+Kn(e)+'"'}function Bl(e){return'link[rel="stylesheet"]['+e+"]"}function mm(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function T5(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),cn(t,"link",n),Ft(t),e.head.appendChild(t))}function Ir(e){return'[src="'+Kn(e)+'"]'}function Hl(e){return"script[async]"+e}function fm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Kn(n.href)+'"]');if(i)return t.instance=i,Ft(i),i;var o=M({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ft(i),cn(i,"style",o),Ks(i,n.precedence,e),t.instance=i;case"stylesheet":o=qr(n.href);var u=e.querySelector(Bl(o));if(u)return t.state.loading|=4,t.instance=u,Ft(u),u;i=mm(n),(o=ra.get(o))&&Lc(i,o),u=(e.ownerDocument||e).createElement("link"),Ft(u);var p=u;return p._p=new Promise(function(x,E){p.onload=x,p.onerror=E}),cn(u,"link",i),t.state.loading|=4,Ks(u,n.precedence,e),t.instance=u;case"script":return u=Ir(n.src),(o=e.querySelector(Hl(u)))?(t.instance=o,Ft(o),o):(i=n,(o=ra.get(u))&&(i=M({},n),Oc(i,o)),e=e.ownerDocument||e,o=e.createElement("script"),Ft(o),cn(o,"link",i),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Ks(i,n.precedence,e));return t.instance}function Ks(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,u=o,p=0;p<i.length;p++){var x=i[p];if(x.dataset.precedence===t)u=x;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $s=null;function pm(e,t,n){if($s===null){var i=new Map,o=$s=new Map;o.set(n,i)}else o=$s,i=o.get(n),i||(i=new Map,o.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var u=n[o];if(!(u[gn]||u[Ue]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(t)||"";p=e+p;var x=i.get(p);x?x.push(u):i.set(p,[u])}}return i}function gm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function A5(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function M5(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=qr(i.href),u=t.querySelector(Bl(o));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Js.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,Ft(u);return}u=t.ownerDocument||t,i=mm(i),(o=ra.get(o))&&Lc(i,o),u=u.createElement("link"),Ft(u);var p=u;p._p=new Promise(function(x,E){p.onload=x,p.onerror=E}),cn(u,"link",i),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Js.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Bc=0;function E5(e,t){return e.stylesheets&&e.count===0&&t0(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&t0(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Bc===0&&(Bc=62500*o5());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&t0(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Bc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(o)}}:null}function Js(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)t0(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var e0=null;function t0(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,e0=new Map,t.forEach(D5,e),e0=null,Js.call(e))}function D5(e,t){if(!(t.state.loading&4)){var n=e0.get(e);if(n)var i=n.get(null);else{n=new Map,e0.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var p=o[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),i=p)}i&&n.set(null,i)}o=t.instance,p=o.getAttribute("data-precedence"),u=n.get(p)||i,u===i&&n.set(null,o),n.set(p,o),this.count++,i=Js.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var jl={$$typeof:W,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function z5(e,t,n,i,o,u,p,x,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zr(0),this.hiddenUpdates=Zr(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function ym(e,t,n,i,o,u,p,x,E,j,Z,J){return e=new z5(e,t,n,p,E,j,Z,J,x),t=1,u===!0&&(t|=24),u=jn(3,null,null,t),e.current=u,u.stateNode=e,t=fo(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},yo(u),e}function bm(e){return e?(e=gr,e):gr}function xm(e,t,n,i,o,u){o=bm(o),i.context===null?i.context=o:i.pendingContext=o,i=li(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=si(e,i,t),n!==null&&(Nn(n,e,t),pl(n,e,t))}function wm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hc(e,t){wm(e,t),(e=e.alternate)&&wm(e,t)}function Sm(e){if(e.tag===13||e.tag===31){var t=qi(e,67108864);t!==null&&Nn(t,e,67108864),Hc(e,67108864)}}function km(e){if(e.tag===13||e.tag===31){var t=_n();t=Li(t);var n=qi(e,t);n!==null&&Nn(n,e,t),Hc(e,t)}}var n0=!0;function N5(e,t,n,i){var o=B.T;B.T=null;var u=ne.p;try{ne.p=2,jc(e,t,n,i)}finally{ne.p=u,B.T=o}}function R5(e,t,n,i){var o=B.T;B.T=null;var u=ne.p;try{ne.p=8,jc(e,t,n,i)}finally{ne.p=u,B.T=o}}function jc(e,t,n,i){if(n0){var o=qc(i);if(o===null)kc(e,t,i,a0,n),Tm(e,i);else if(O5(o,e,t,n,i))i.stopPropagation();else if(Tm(e,i),t&4&&-1<L5.indexOf(e)){for(;o!==null;){var u=Tn(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=Qn(u.pendingLanes);if(p!==0){var x=u;for(x.pendingLanes|=2,x.entangledLanes|=2;p;){var E=1<<31-Xe(p);x.entanglements[1]|=E,p&=~E}ba(u),(bt&6)===0&&(Is=me()+500,Nl(0))}}break;case 31:case 13:x=qi(u,2),x!==null&&Nn(x,u,2),Us(),Hc(u,2)}if(u=qc(i),u===null&&kc(e,t,i,a0,n),u===o)break;o=u}o!==null&&i.stopPropagation()}else kc(e,t,i,null,n)}}function qc(e){return e=I0(e),Ic(e)}var a0=null;function Ic(e){if(a0=null,e=vn(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return a0=e,null}function Cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pe()){case He:return 2;case tt:return 8;case Pe:case it:return 32;case st:return 268435456;default:return 32}default:return 32}}var Fc=!1,yi=null,bi=null,xi=null,ql=new Map,Il=new Map,wi=[],L5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tm(e,t){switch(e){case"focusin":case"focusout":yi=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":xi=null;break;case"pointerover":case"pointerout":ql.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(t.pointerId)}}function Fl(e,t,n,i,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[o]},t!==null&&(t=Tn(t),t!==null&&Sm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function O5(e,t,n,i,o){switch(t){case"focusin":return yi=Fl(yi,e,t,n,i,o),!0;case"dragenter":return bi=Fl(bi,e,t,n,i,o),!0;case"mouseover":return xi=Fl(xi,e,t,n,i,o),!0;case"pointerover":var u=o.pointerId;return ql.set(u,Fl(ql.get(u)||null,e,t,n,i,o)),!0;case"gotpointercapture":return u=o.pointerId,Il.set(u,Fl(Il.get(u)||null,e,t,n,i,o)),!0}return!1}function Am(e){var t=vn(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Q(e.priority,function(){km(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,Q(e.priority,function(){km(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function i0(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);q0=i,n.target.dispatchEvent(i),q0=null}else return t=Tn(n),t!==null&&Sm(t),e.blockedOn=n,!1;t.shift()}return!0}function Mm(e,t,n){i0(e)&&n.delete(t)}function B5(){Fc=!1,yi!==null&&i0(yi)&&(yi=null),bi!==null&&i0(bi)&&(bi=null),xi!==null&&i0(xi)&&(xi=null),ql.forEach(Mm),Il.forEach(Mm)}function r0(e,t){e.blockedOn===t&&(e.blockedOn=null,Fc||(Fc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,B5)))}var l0=null;function Em(e){l0!==e&&(l0=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){l0===e&&(l0=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],o=e[t+2];if(typeof i!="function"){if(Ic(i||n)===null)continue;break}var u=Tn(n);u!==null&&(e.splice(t,3),t-=3,qo(u,{pending:!0,data:o,method:n.method,action:i},i,o))}}))}function Fr(e){function t(E){return r0(E,e)}yi!==null&&r0(yi,e),bi!==null&&r0(bi,e),xi!==null&&r0(xi,e),ql.forEach(t),Il.forEach(t);for(var n=0;n<wi.length;n++){var i=wi[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<wi.length&&(n=wi[0],n.blockedOn===null);)Am(n),n.blockedOn===null&&wi.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var o=n[i],u=n[i+1],p=o[je]||null;if(typeof u=="function")p||Em(n);else if(p){var x=null;if(u&&u.hasAttribute("formAction")){if(o=u,p=u[je]||null)x=p.formAction;else if(Ic(o)!==null)continue}else x=p.action;typeof x=="function"?n[i+1]=x:(n.splice(i,3),i-=3),Em(n)}}}function Dm(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(p){return o=p})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Uc(e){this._internalRoot=e}s0.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,i=_n();xm(n,i,e,t,null,null)},s0.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xm(e.current,2,null,e,null,null),Us(),t[jt]=null}};function s0(e){this._internalRoot=e}s0.prototype.unstable_scheduleHydration=function(e){if(e){var t=rr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wi.length&&t!==0&&t<wi[n].priority;n++);wi.splice(n,0,e),n===0&&Am(e)}};var zm=a.version;if(zm!=="19.2.8")throw Error(s(527,zm,"19.2.8"));ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var H5={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var o0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!o0.isDisabled&&o0.supportsFiber)try{Ct=o0.inject(H5),Ke=o0}catch{}}return _l.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,i="",o=jd,u=qd,p=Id;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=ym(e,1,!1,null,null,n,i,null,o,u,p,Dm),e[jt]=t.current,Sc(e),new Uc(t)},_l.hydrateRoot=function(e,t,n){if(!c(e))throw Error(s(299));var i=!1,o="",u=jd,p=qd,x=Id,E=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=ym(e,1,!0,t,n??null,i,o,E,u,p,x,Dm),t.context=bm(null),n=t.current,i=_n(),i=Li(i),o=li(i),o.callback=null,si(n,o,i),n=i,t.current.lanes=n,Lt(t,n),ba(t),e[jt]=t.current,Sc(e),new s0(t)},_l.version="19.2.8",_l}var Fm;function X5(){if(Fm)return Yc.exports;Fm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),Yc.exports=V5(),Yc.exports}var W5=X5();const Q5=Lf(W5),P5=`# Flint Developer Documentation

Welcome to the official Flint Developer Documentation. Flint is an open-source, local-first personal knowledge base and modular markdown workspace engineered for deep focus, long-term data durability, and native desktop performance.

Whether you are building custom TypeScript extensions, crafting CSS themes, or exploring Flint's underlying architecture, this documentation covers everything you need to know.


## 1. Core Architectural Pillars

---

Flint is designed around four foundational engineering invariants:

- **Local-First & Sovereign Data**: Every note in Flint is a standard, human-readable CommonMark \`.md\` file stored in your local directory. There are no proprietary file formats or cloud lock-ins. Explore the [[Dual-Storage Architecture]] to see how disk text files sync with embedded databases.
- **Micro-Kernel & Strict Isolation**: The host application internals are strictly separated from extensions. Core directories never leak into plugins, and extensions integrate exclusively through the [[Flint SDK API Reference]] and typed events. Learn more in [[Micro-Kernel & Extension Architecture]].
- **Sub-50ms Desktop Ergonomics**: Built with React 19, TipTap/ProseMirror, and Tailwind CSS inside a lightweight Tauri Rust container, all micro-interactions execute instantly with zero artificial transition lag.
- **Native AI Tooling (MCP)**: Every extension can register structured tools and prompts via the Model Context Protocol. AI agents can safely query your local notes and trigger actions. See [[Model Context Protocol (MCP) Tools]].


## 2. Quick Navigation

---

Jump directly to the relevant guides and references:

| Category | Primary Topics | Description |
| :--- | :--- | :--- |
| **Getting Started** | [[Introduction to Flint]]<br>[[Installation & Setup]] | System overview, local Hearths, and compiling from source. |
| **User Guide** | [[Live Preview Editor & Markdown]]<br>[[Links, Backlinks & Graph]]<br>[[Infinite 2D Spatial Canvas]]<br>[[FSRS Spaced Repetition]]<br>[[Tasks Dashboard & Journal]]<br>[[Hearths & Workspace Storage]]<br>[[Keyboard Shortcuts & Commands]]<br>[[AI Assistants & MCP Tools]] | Comprehensive guides for writing, active recall, spatial whiteboarding, and AI agent integration. |
| **Extensions** | [[Plugin Quick Start]]<br>[[Starter Templates & Boilerplates]]<br>[[Manifest Specification]]<br>[[Extension Points Reference]]<br>[[Model Context Protocol (MCP) Tools]]<br>[[Events & Relational Storage]]<br>[[Optimizing Extension Load Time]] | Building, testing, and distributing modular TypeScript plugins. |
| **Themes** | [[Build Your First Theme]]<br>[[Submitting Themes]] | Customizing surface palettes, syntax tokens, and dark/light modes. |
| **Reference** | [[CSS Variables & Design Tokens]]<br>[[Flint UI Components]]<br>[[Flint SDK API Reference]]<br>[[Database Schema Reference]]<br>[[Dual-Storage Architecture]]<br>[[Micro-Kernel & Extension Architecture]] | Exhaustive reference for design tokens, UI components, APIs, and SQLite tables. |
| **Community Directory** | [[Community Directory Overview]]<br>[[Developer Policies & Guidelines]]<br>[[Plugin Submission Requirements]]<br>[[Developer FAQ]] | Extension distribution, guidelines, and upcoming community features. |


## 3. The Hearth Concept

---

In Flint, note vaults are called **Hearths**. A Hearth is simply any directory on your computer containing Markdown files. When opened in Flint, an embedded \`.flint/\` directory tracks local relational indexes and configurations:

\`\`\`
My-Knowledge-Base/             <-- Hearth Root Directory
├── .flint/                   <-- Local Workspace Metadata & Index
│   ├── flint.sqlite          <-- Native Rust SQLite database (WAL mode)
│   ├── flint.sqlite-wal      <-- SQLite Write-Ahead Log journal
│   ├── settings.json         <-- Workspace configuration
│   └── plugins/              <-- Local extensions
│       └── word-counter/
│           ├── manifest.json
│           └── main.js
├── Projects/
├── Notes/
└── Index.md
\`\`\`

You can install community extensions locally by dropping their compiled folder into \`.flint/plugins/\`. Learn how to create your first plugin in [[Plugin Quick Start]] or jump straight into prebuilt boilerplates with [[Starter Templates & Boilerplates]].


## 4. Contributing & Community

---

Flint is open source under the GPLv3 license. I welcome contributions, bug reports, and extension showcases:

- **Source Code & Issue Tracker**: [github.com/yvliet/flint](https://github.com/yvliet/flint)
- **Feature Requests & Technical Discussions**: [GitHub Discussions](https://github.com/yvliet/flint/discussions)
- **Submitting Pull Requests**: Please read the repository contributing guide before submitting PRs.

> [!NOTE]
> I am actively developing a centralized community extension marketplace and registry. Currently, community plugins and themes are loaded and tested directly from local \`<hearth>/.flint/plugins/\` directories.
`,Z5=`# Introduction to Flint

It was one evening on August 25, 2026 (25/08/2026), when I decided that I needed a dedicated place to store my life. I wanted a personal knowledge base where my thoughts, notes, and context could live in one sovereign place, so I didn't have to re-explain who I was or what I was doing every single time I talked to an AI.

At first I thought, *“Obsidian is there.”*

> [!QUOTE]
> “Nah, I don't want to use Obsidian. It seems way too complicated and... too intimidating.”

And thus, I made Flint as a fun project born out of that thought. I set out to make something lighter, much more modular than Obsidian, and delightfully easy to use with native built-in capabilities: pairing plain Markdown files on disk with instant desktop responsiveness, clean relational SQLite indexing, and native Model Context Protocol (MCP) AI tooling.


## 1. Core Philosophy: Local-First & Sovereign Data

---

Traditional cloud-based knowledge management tools store notes on remote servers behind proprietary database schemas and authentication walls. When servers experience downtime, network connectivity drops, or vendors change their pricing tiers, access to personal thinking and company archives is compromised.

Flint adheres strictly to the **Local-First Software principles**:

- **Plain Markdown Files on Disk**: Every document in Flint exists as an ordinary, human-readable \`.md\` file on your local storage drive. You can open, edit, index, or grep your notes using VS Code, Obsidian, Vim, or standard UNIX terminal utilities without running Flint.
- **Zero Cloud Lock-in**: Your data is yours forever. There are no mandatory user accounts, proprietary binary encodings, or telemetry tracking your keystrokes.
- **Instantaneous Offline Operation**: All computations run locally on your device with zero network round-trips, including graph physics, full-text search, Wikilink resolution, and spaced-repetition card scheduling.
- **Git & Sync Neutrality**: Because your Hearth consists of standard text files and lightweight configuration JSON, you can synchronize your notes across machines using Git, Syncthing, iCloud Drive, Dropbox, or any file synchronization system of your choice.


## 2. The "Hearth" Concept

---

In Flint, individual workspaces or note vaults are called **Hearths**.

A Hearth is simply any standard folder on your filesystem that you designate as a Flint workspace. When you open or create a Hearth, Flint establishes a hidden \`.flint/\` directory within that root folder to store local workspace state:

\`\`\`
My-Knowledge-Base/             <-- Hearth Root Directory
├── .flint/                   <-- Local Workspace Metadata & Cache
│   ├── flint.sqlite          <-- Embedded native SQLite relational & FTS5 engine
│   ├── flint.sqlite-wal      <-- SQLite Write-Ahead Log journal
│   ├── settings.json         <-- Hearth-specific settings & toggles
│   └── extensions/           <-- Community and custom extensions
│       └── word-counter/
│           ├── manifest.json
│           └── main.js
├── Projects/
│   ├── Architecture.md
│   └── Q3 Objectives.md
├── Journal/
│   └── 2026-09-05.md
└── Index.md
\`\`\`

### Multi-Hearth Agility

Flint is engineered for effortless multi-workspace management:
- **Instant Workspace Switching**: Switch between personal, research, and work Hearths in milliseconds without restarting the desktop application.
- **Cross-Hearth Auto-Discovery**: The application and its integrated AI agent runtime track all recent Hearths on your system, allowing global discovery and cross-workspace search without manual path re-configuration.


## 3. Dual-Storage & Embedded SQLite Engine

---

A frequent trade-off in note-taking software lies between **file transparency** and **query performance**:
1. Storing data solely as raw files makes complex relational queries (such as bidirectional backlinks, tag hierarchies, and recursive graph algorithms) slow, requiring intensive disk I/O scans on large collections.
2. Storing data exclusively in a database loses the benefits of simple text files, version control readability, and third-party editor compatibility.

Flint resolves this tension through a **Dual-Storage Architecture**:

\`\`\`
[ Physical Filesystem ]
  Markdown Documents (*.md) + YAML Frontmatter Properties
  │
  │  Two-Way Sync & Echo-Suppressed File Watcher
  ▼
[ Flint Core Engine ]
  TipTap/ProseMirror Live Preview + AST Parser + EventBus
  │
  │  Continuous Transaction Indexing (Tauri IPC)
  ▼
[ Embedded SQLite Engine ]
  Native SQLite (Tauri/WAL rusqlite) / In-Memory WASM Fallback
  • documents: file metadata & hierarchy
  • document_links: Wikilink graph edges
  • document_tags: indexed tag taxonomies
  • blocks_fts: SQLite FTS5 BM25 full-text index
\`\`\`

- **Source of Truth**: The \`.md\` markdown files on your drive remain the immutable source of truth.
- **Query Accelerator**: An embedded SQLite database (\`.flint/flint.sqlite\`) maintains a real-time relational model of note titles, forward links, backlinks, tags, properties, and full-text search tokens.
- **Engine Implementations**:
  - In the **Desktop App**, Flint communicates with a native compiled SQLite engine running in Rust via Tauri IPC. Transactions use Write-Ahead Logging (WAL) mode for atomic, sub-millisecond commits without WebAssembly memory overhead.
  - In **Web Previews and Browser Environments**, Flint switches to an in-memory WebAssembly SQLite (\`sql.js\`) engine with debounced binary serialization.


## 4. Native Extensibility & AI Copilot Integration

---

Flint is structured as a **micro-kernel**: internal core features and external community plugins share the identical extension runtime.

- **Unified Extension Model**: Features like Graph View, Infinite Canvas, FSRS Spaced-Repetition Flashcards, Task Management, Daily Notes, and Backlinks are all constructed using the Flint Extension SDK (\`src/sdk\`).
- **Zero Native Core Leakage**: Host application internals remain strictly decoupled from extensions. Extensions interact through declared Inversion of Control (IoC) registries and an asynchronous typed \`EventBus\`.
- **First-Class Model Context Protocol (MCP)**: Every extension can register structured AI tools and prompts via \`this.registerTool()\`. External AI coding assistants (Claude Desktop, Cursor, Antigravity) and in-app agent copilots can immediately query your notes, execute tasks, and trigger actions with zero configuration.


## 5. Next Steps

---

Ready to dive in?
- [[Installation & Setup]]: Download the desktop application or build from source.
- [[Live Preview Editor & Markdown]]: Master TipTap/ProseMirror editing, formulas, and tables.
- [[Links, Backlinks & Graph]]: Build your second brain with bidirectional links and graph physics.
- [[Infinite 2D Spatial Canvas]]: Explore non-linear visual whiteboarding and mindmaps.
- [[FSRS Spaced Repetition]]: Supercharge memory retention with embedded active recall cards.
- [[Tasks Dashboard & Journal]]: Organize vault-wide tasks and daily scratchpads.
- [[AI Assistants & MCP Tools]]: Connect Claude Desktop, Antigravity, and Cursor via MCP.
- [[Dual-Storage Architecture]]: Deep-dive into file synchronization and SQLite schemas.
- [[Micro-Kernel & Extension Architecture]]: Understand core isolation and extension runtimes.
- [[Plugin Quick Start]]: Build your first Flint extension in 5 minutes.
`,K5=`# Installation & Setup

Flint is distributed as a lightweight, cross-platform native desktop application built with Rust and Tauri. You can install pre-compiled binaries or build directly from source.


## 1. Desktop Installation

---

### System Requirements

| Operating System | Supported Versions | Architecture |
| :--- | :--- | :--- |
| **macOS** | macOS 12 Monterey or newer | Apple Silicon (M1/M2/M3/M4) & Intel (x64) |
| **Windows** | Windows 10 (1809+) and Windows 11 | x64, ARM64 |
| **Linux** | Ubuntu 22.04+, Fedora 38+, Arch Linux | x64, ARM64 (WebKitGTK 4.1) |

---

### macOS

1. Download the latest \`.dmg\` release from the [Flint Releases page](https://github.com/yvliet/flint/releases).
2. Open the downloaded \`.dmg\` disk image.
3. Drag **Flint.app** into your \`/Applications\` folder.
4. Launch Flint from Spotlight (\`Cmd + Space\`) or Launchpad.

> [!NOTE]
> On initial launch, macOS Gatekeeper may prompt for confirmation if the binary was downloaded directly via browser. You can permit launch via **System Settings > Privacy & Security > Open Anyway**.

---

### Windows

1. Download the Windows installer (\`Flint-Setup-x64.exe\` or \`.msi\`) from the [Releases page](https://github.com/yvliet/flint/releases).
2. Run the installer wizard to install Flint into your user profile (\`%LOCALAPPDATA%\\Programs\\Flint\`).
3. Launch Flint via the Start Menu or desktop shortcut.

> [!TIP]
> Flint requires **Microsoft Edge WebView2 Runtime**, which is pre-installed on all Windows 11 and modern Windows 10 installations. If missing, the installer will automatically download the evergreen runtime bootstrapper from Microsoft.

---

### Linux

Flint provides both portable AppImage packages and native Debian packages:

#### AppImage (Universal)
\`\`\`bash
# Make the AppImage executable

---
chmod +x Flint-x86_64.AppImage

# Launch Flint

---
./Flint-x86_64.AppImage
\`\`\`

#### Debian / Ubuntu (\`.deb\`)
\`\`\`bash
sudo apt update
sudo apt install -y libwebkit2gtk-4.1-0 libssl3 libappindicator3-1
sudo dpkg -i flint_*_amd64.deb
\`\`\`


## 2. Opening or Creating Your First Hearth

---

When you first launch Flint, the workspace selector greets you:

1. **Create New Hearth**: Select an empty directory on your machine. Flint will initialize the \`.flint/\` metadata folder and create a starter note.
2. **Open Existing Folder**: Choose any existing directory containing Markdown notes (such as an existing Obsidian vault, Foam directory, or GitHub documentation repo). Flint scans the directory, populates its SQLite index, and renders your note hierarchy without altering your existing files.


## 3. Building From Source

---

Developers wishing to contribute to Flint core or test unreleased features can compile the desktop application from source.

### Prerequisites

1. **Node.js**: Version \`20.0.0\` or higher (\`v22\` LTS or \`v24\` recommended).
2. **Rust & Cargo**: Version \`1.78.0\` or higher. Install via [rustup.rs](https://rustup.rs/):
   \`\`\`bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   \`\`\`
3. **Platform Build Dependencies**:
   - **Windows**: [Visual Studio C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) (select "Desktop development with C++").
   - **macOS**: Xcode Command Line Tools (\`xcode-select --install\`).
   - **Linux (Debian/Ubuntu)**:
     \`\`\`bash
     sudo apt install -y build-essential curl wget file libssl-dev libgtk-3-dev \\
       libayatana-appindicator3-dev librsvg2-dev libwebkit2gtk-4.1-dev
     \`\`\`

---

### Step-by-Step Build Instructions

#### Step 1: Clone the Repository
\`\`\`bash
git clone https://github.com/yvliet/flint.git
cd flint
\`\`\`

#### Step 2: Install Frontend Dependencies
\`\`\`bash
npm install
\`\`\`

#### Step 3: Launch in Development Mode
To run the live development environment with hot module replacement (HMR) for both the React frontend and Tauri Rust backend:
\`\`\`bash
npm run tauri dev
\`\`\`
Flint's Vite dev server will start at \`http://localhost:1420\`, and Tauri will spawn the native desktop window.

#### Step 4: Run Headless Web Preview
To preview the web frontend in your browser without compiling the Rust desktop container:
\`\`\`bash
npm run dev
\`\`\`
Open \`http://localhost:5173\` in your browser. Web mode uses the WebAssembly SQLite fallback engine and mock platform adapters.

#### Step 5: Compile Production Binary
To generate an optimized, stripped standalone installer for your current operating system:
\`\`\`bash
npm run tauri build
\`\`\`
The resulting installers and standalone binaries will be placed in:
\`\`\`
src-tauri/target/release/bundle/
\`\`\`


## 4. Verification & Type Checking

---

Ensure that all TypeScript types and Rust components pass static analysis:

\`\`\`bash
# Verify TypeScript typing across all core modules

---
npx tsc --noEmit

# Verify Rust compilation and linting

---
cd src-tauri && cargo check
\`\`\`


## 5. Next Steps

---

Once your environment is set up:
- Read [[Introduction to Flint]] to understand the Hearth model and data sovereignty.
- Check [[Dual-Storage Architecture]] to explore disk sync and SQLite caching.
- Build your first custom plugin with [[Plugin Quick Start]].
- Learn how to customize colors with [[Build Your First Theme]] and [[CSS Variables & Design Tokens]].
`,$5="# Live Preview Editor & Markdown\n\nFlint features an advanced, high-performance **Live Preview editor** engineered on top of TipTap 2.x and ProseMirror. It combines the tactile immediacy of WYSIWYG editing with the durability and portability of plain-text CommonMark.\n\nFlint coordinates the editor through an immediate memory-to-disk pipeline: **TipTap / ProseMirror Layer** (active in-memory state with sub-8ms transaction mapping) → **Debounced Persistence Engine** (300ms save debounce with AST metadata extraction) → **Universal Plain CommonMark Storage** (authoritative `.md` on disk).\n\n---\n\n## 1. Live Preview vs. Source Mode\n\nFlint provides two synchronized editing experiences:\n\n1. **Live Preview (Default)**: Markdown formatting renders interactively as you type. Syntax tokens (such as `**bold**`, `# heading`, or `$...$`) seamlessly transform into styled visual elements while remaining editable in place when the cursor enters the text range.\n2. **Source Mode**: Raw, unrendered CommonMark text with monospaced typography, ideal for batch editing frontmatter, macro manipulation, or structural diff review.\n\nYou can switch between modes anytime using the document options menu (`...` in the top right) or via the Command Palette (`Ctrl+K` → *Toggle Source Mode*).\n\n---\n\n## 2. Typing Performance & Decoration Mapping\n\nMany web-based editors suffer from severe input lag when opening documents exceeding 20,000 words. Flint guarantees a **sub-8ms input latency** on documents of 100,000+ words through a series of systems-level invariants:\n\n- **$O(1)$ Transaction Mapping**: Rather than re-parsing the entire document AST on every keystroke, Flint maps active decorations through ProseMirror transaction steps (`DecorationSet.map`).\n- **Dirty-Range AST Scans**: Only modified textblocks and immediate parent containers are re-scanned for inline tokens, wikilinks, and tags.\n- **Formula Memoization**: KaTeX rendering trees are cached in an LRU memory buffer, preventing repetitive LaTeX parsing during cursor movement.\n- **Bounded Undo History**: ProseMirror history depth is bounded to 50 snapshots to maintain a lean, constant-size memory working set.\n\n---\n\n## 3. Formatting & Keyboard Shortcuts\n\nFlint supports standard CommonMark syntax and intuitive desktop shortcuts:\n\n| Formatting Element | Markdown Syntax | Keyboard Shortcut |\n| :--- | :--- | :--- |\n| **Bold** | `**text**` or `__text__` | `Ctrl+B` / `Cmd+B` |\n| *Italic* | `*text*` or `_text_` | `Ctrl+I` / `Cmd+I` |\n| ~~Strikethrough~~ | `~~text~~` | `Ctrl+Shift+X` / `Cmd+Shift+X` |\n| ==Highlight== | `==text==` | `Ctrl+Shift+H` / `Cmd+Shift+H` |\n| `Inline Code` | `` `code` `` | `Ctrl+E` / `Cmd+E` |\n| **Heading 1-6** | `# H1` through `###### H6` | `Ctrl+Alt+1..6` |\n| **Bullet List** | `- Item` or `* Item` | `Ctrl+Shift+8` |\n| **Numbered List** | `1. Item` | `Ctrl+Shift+7` |\n| **Task Checklist** | `- [ ] Task` or `- [x] Completed` | `Ctrl+Shift+9` |\n| **Blockquote** | `> Quote text` | `Ctrl+Shift+.` |\n| **Horizontal Rule** | `---` or `***` | Auto-converted on enter |\n| **Inline Link** | `[Title](https://...)` | `Ctrl+K` (in editor selection) |\n| **Internal Wiki-Link** | `[[Note Title]]` | Type `[[` |\n\n### Auto-Pairing\nTyping opening characters like `(`, `[`, `{`, `\"`, `'`, or `` ` `` around an active text selection automatically wraps the selection without overwriting it.\n\n### Smart Indentation\n- Pressing `Tab` inside a bullet or numbered list nests the item under its parent.\n- Pressing `Shift+Tab` unindents the list item.\n- Pressing `Enter` on an empty list item breaks out of the list back to standard paragraph text.\n\n---\n\n## 4. Slash Commands Menu (`/`)\n\nPressing `/` on an empty line or after a space opens the **Slash Commands Palette**. This provides instant access to rich block insertion without taking your hands off the keyboard.\n\n```\n/\n├── H1 Heading 1\n├── H2 Heading 2\n├── H3 Heading 3\n├── Task List Checkbox\n├── Bulleted List\n├── Numbered List\n├── Table Grid\n├── Callout Box\n├── Math Equation Block\n└── Code Block\n```\n\nType to filter commands (e.g. `/tab` for Table, `/cal` for Callout, `/mat` for Math), and press `Enter` or `Tab` to insert.\n\n---\n\n## 5. Mathematical Formulas & KaTeX\n\nFlint provides deep mathematical typesetting with both inline and multi-line display equations powered by KaTeX and MathLive.\n\n### Inline Math\nWrap formulas in single dollar signs:\n```markdown\nEuler's identity is defined as $e^{i\\pi} + 1 = 0$.\n```\n\n### Display Math Blocks\nWrap formulas in double dollar signs or insert a math block via `/math`:\n```markdown\n$$\n\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}\n$$\n```\n\n### Interactive Math Keyboard\nWhen you click on a math formula chip, Flint opens an interactive **MathLive On-Screen Keyboard** featuring:\n- Greek symbols ($\\alpha, \\beta, \\gamma, \\theta, \\lambda, \\sigma, \\omega$)\n- Calculus operators ($\\int, \\frac{d}{dx}, \\sum, \\prod, \\lim$)\n- Matrix builders ($2\\times 2$, $3\\times 3$)\n- Logic and set notation ($\\in, \\subset, \\forall, \\exists, \\land, \\lor$)\n\nFormulas render with instant mathematical typesetting while preserving the raw LaTeX code directly in your markdown file.\n\n---\n\n## 6. Interactive Visual Tables\n\nFlint features a fully visual table editing engine that eliminates the friction of hand-formatting raw ASCII markdown tables.\n\n### Creating Tables\n- Use the `/table` slash command to pick an initial grid dimension (e.g. $3\\times 3$).\n- Or type standard CommonMark table syntax:\n  ```markdown\n  | Column A | Column B | Column C |\n  | :--- | :---: | ---: |\n  | Left-aligned | Centered | Right-aligned |\n  | Val 1 | Val 2 | Val 3 |\n  ```\n\n### Table Controls & Actions\n- **Edge Controls**: Click the `+` buttons along table borders to instantly insert rows or columns.\n- **Floating Toolbar**: Highlight cells to toggle header rows, change column alignments (left, center, right), clear cell contents, or delete rows and columns.\n- **Keyboard Navigation**: Press `Tab` to navigate to the next cell; pressing `Tab` in the final cell automatically appends a new row. Press `Shift+Tab` to navigate backward.\n\n---\n\n## 7. Callouts & Alerts\n\nEmphasize critical ideas, warnings, and implementation notes using GitHub-style callouts:\n\n```markdown\n> [!NOTE]\n> Background context, implementation details, or helpful explanations.\n\n> [!TIP]\n> Practical suggestions, keyboard shortcuts, or performance best practices.\n\n> [!IMPORTANT]\n> Essential steps, requirements, or must-know concepts.\n\n> [!WARNING]\n> Critical warnings, potential data pitfalls, or compatibility notices.\n\n> [!CAUTION]\n> High-risk actions, destructive operations, or permanent deletion warnings.\n```\n\nCallouts render with crisp colored borders, thematic background fills, and distinct icons, while remaining completely standard CommonMark blockquotes on disk.\n\n---\n\n## 8. Media & Document Embeds\n\nFlint supports embedding local attachments and cross-document transclusions using the `![[...]]` syntax:\n\n- **Images**: `![[diagram.png]]` or `![Alt text](assets/diagram.png)`\n- **Audio**: `![[interview.mp3]]` renders an inline HTML5 audio player.\n- **Video**: `![[walkthrough.mp4]]` renders an interactive video player.\n- **PDF Documents**: `![[whitepaper.pdf]]` renders an embedded viewer pane.\n- **Note Transclusions**: `![[Architecture Overview]]` embeds the live content of another note directly inside the active document.\n\n---\n\n## 9. Intelligent Web Clip Cleaner\n\nCopying content from Wikipedia, research papers, or web articles often clutters notes with unwanted citation brackets (e.g. `[1]`, `[citation needed]`) and messy HTML inline tags.\n\nFlint includes an **Intelligent Paste Pipeline**:\n- Automatically strips numeric reference links (`[1]`, `[12]`, `[cite]`).\n- Converts rich HTML tables, headers, and bullet lists into clean CommonMark.\n- Preserves code fences with correct syntax language tags.\n- Removes tracking query parameters from pasted URLs.\n\n---\n\n## 10. Hierarchical Folding\n\nTo keep extensive notes organized and navigable:\n- Hover over any heading (`# H1` through `###### H6`) or list item to reveal the **fold chevron** (`▾`).\n- Click the chevron to collapse the entire section beneath it.\n- An ellipsis badge (`...`) appears when folded; clicking it expands the section immediately.\n- Fold states are managed through non-destructive ProseMirror mapped decorations, ensuring the underlying markdown file remains completely intact.\n",J5=`# Bidirectional Links & Knowledge Graph

Flint turns disconnected documents into an interconnected web of knowledge through bidirectional linking, real-time relational backlinks, unlinked mention resolution, and an interactive 2D force-directed knowledge graph.

---

## 1. Bidirectional Linking with \`[[Wikilinks]]\`

In Flint, you connect ideas naturally without managing rigid folder taxonomies.

### Basic Link Syntax
Type \`[[\` anywhere in the editor to trigger the **Fuzzy Note Linker**:
\`\`\`markdown
Flint features an embedded [[Dual-Storage Architecture]] for relational performance.
\`\`\`

### Aliased Links
Display alternative label text while linking to a canonical document using the pipe (\`|\`) delimiter:
\`\`\`markdown
Learn more about our [[Micro-Kernel & Extension Architecture|extension runtime]].
\`\`\`

### Missing Note Resolution & Ghost Links
When you reference a note that does not yet exist on disk (e.g. \`[[Future Research Roadmap]]\`):
- The link renders with a distinct muted styling indicating an uncreated document.
- Clicking the link instantly creates the target Markdown file in your active Hearth and navigates directly to it.
- Your relational graph immediately tracks the edge, allowing top-down thought structuring without breaking your writing flow.

---

## 2. Persistent Visited Link Tracking

To provide a true native browsing feel and prevent you from losing orientation in deep research sessions, Flint implements **persistent visited link tracking**:

- **Cross-Surface Consistency**: Visited states remain synchronized across the Live Preview editor, reading view, right sidebar backlinks, and search results.
- **Customizable Color Schemes**: In *Settings → Appearance → Link Styling*, choose between:
  - **Theme Accent**: Visited links harmonize with your active color theme.
  - **Classic Browser**: Vibrant browser blue (\`#2563eb\`) for unvisited links and traditional purple (\`#9333ea\`) for visited links.
  - **Neutral**: Subdued monochrome styling.
- **Underline Modes**: Choose between *Always Underlined* or *Underline on Hover*.
- **External Link Indicators**: Toggle clean trailing arrow icons (\`↗\`) on external HTTP/HTTPS links.

---

## 3. Backlinks, Outgoing Links & Unlinked Mentions

The **Backlinks Pane** in the right sidebar (\`Ctrl+Shift+\\\`) provides a 360-degree view of how any document connects to your broader vault.

\`\`\`
Backlinks Sidebar
├── Incoming Linked References (3)
│   ├── Architecture Overview.md
│   │   └── "...built on top of [[Dual-Storage Architecture]]..."
│   └── 2026-09-06.md
│       └── "...reviewed [[Dual-Storage Architecture]] PR..."
├── Unlinked Mentions (2)
│   └── Research Notes.md
│       └── "...benefits of dual storage in personal wikis..."  [Link Idea]
└── Outgoing Forward Links (5)
    ├── SQLite Engine
    └── File Manifest
\`\`\`

### Sub-Millisecond Indexed Joins
Unlike traditional markdown viewers that perform expensive recursive text grep scans across the filesystem, Flint's native SQLite engine (\`rusqlite\`) indexes all link edges into the \`document_links\` table on save:

\`\`\`sql
SELECT d.title, d.id, dl.link_text 
FROM document_links dl
JOIN documents d ON d.id = dl.source_document_id
WHERE dl.target_document_id = ?;
\`\`\`
Even in vaults containing over 50,000 notes, backlink queries return in under 2ms.

### Unlinked Mentions
Flint automatically scans notes for text occurrences that match existing document titles or aliases without explicit \`[[...]]\` brackets. Clicking **[Link Idea]** transforms the plain text into an active bidirectional wikilink with zero typing required.

---

## 4. 2D Force-Directed Knowledge Graph

The **Knowledge Graph View** provides a macroscopic visual model of your entire second brain.

### Opening the Graph
- Click the **Graph** icon on the left Action Rail.
- Or press \`Ctrl+G\` (or Command Palette: \`Ctrl+K\` → *Open Graph View*).
- Open a localized **Local Graph** tab for the active note from the document options menu.

### Physics Simulation & Ergonomics
- **Repulsion Force**: Adjust the repulsive charge between nodes to cluster related topics while maintaining visual breathing room.
- **Link Distance & Rigidity**: Fine-tune spring tension between interconnected notes.
- **Node Size Scaling**: Nodes dynamically scale in diameter based on the quantity of incoming and outgoing connections.
- **Color Coding**: Nodes color-code automatically by folder, tag, or document type.

### Automatic Physics Suspension (Zero Idle Overhead)
Force-directed simulations can consume significant CPU/GPU resources if left running in the background. Flint's physics engine employs an **automatic kinematic sleep cycle**:
- Simulation physics settle into equilibrium within 3-5 seconds of user pan/zoom interaction.
- If the application window is minimized, hidden, or switched to another tab, the physics animation loop **suspends immediately**, eliminating unnecessary battery drain and GPU utilization.
`,ep=`# Infinite 2D Spatial Canvas

Linear text documents are ideal for long-form writing, but creative brainstorming, system design, and concept exploration often demand non-linear spatial organization. Flint provides an integrated **Infinite 2D Spatial Canvas** that combines free-form visual whiteboarding with your actual Markdown notes.

---

## 1. Overview & Canvas Philosophy

The Canvas gives you an unbounded 2D plane where ideas can exist as interactive cards, sticky notes, visual groups, and directional connection pathways.

- **Unified Knowledge**: Canvas items are not isolated drawings; they reference your real notes in the Hearth.
- **Local-First Storage**: Canvas workspaces serialize into human-readable JSON files saved locally in \`.flint/canvas/\`.
- **Hardware-Accelerated 60 FPS**: Utilizes viewport frustum culling and hardware-accelerated transforms to maintain smooth pan and zoom even with hundreds of active cards.

To launch a canvas, click the **Canvas** icon on the left Action Rail or run \`Ctrl+K\` → *Open Canvas*.

---

## 2. Canvas Node Types

You can place four fundamental node types onto the spatial plane:

### 1. Note Cards
Drag any document from your sidebar file tree directly onto the canvas, or press the **+ Note** button in the canvas floating toolbar:
- Renders an interactive live preview of the note's markdown content directly on the card surface.
- Double-clicking the card header navigates directly to the full document in a split editor tab.
- Modifications made in the note editor automatically update the card in real time.

### 2. Sticky Text Nodes
Quick, lightweight notes for fleeting ideas, task checklists, or annotations:
- Click **+ Text** or double-click anywhere on the canvas background.
- Supports full inline markdown, bullet points, checklists, and code snippets.
- Adjustable pastel and accent color presets for instant visual tagging.

### 3. Visual Group Containers
Organize clusters of related nodes into bounded regions:
- Select multiple cards and press \`Ctrl+G\` (or choose **Group** from the toolbar).
- Give the group a labeled title header (e.g. *"Phase 1: Architecture"*).
- Moving or resizing the group automatically transports all contained nodes together.

### 4. Media & Web Cards
- Drop local images, audio clips, or PDF documents onto the canvas for visual reference boards.
- Embed external web links with automatic metadata cards.

---

## 3. Connections & Edge Routing

Connect thoughts visually using flexible relationship arrows between cards (**Note Card A** → *Cubic Bezier Connector* → **Note Card B**):

- **Creating Connections**: Hover over any node's perimeter to reveal connector anchor points (top, right, bottom, left). Click and drag the anchor handle to any other node to form a link.
- **Bezier Curve Pathways**: Connectors calculate smooth cubic Bezier paths that dynamically route around neighboring cards.
- **Directional Styles**: Toggle arrow directions (unidirectional, bidirectional, or nondirectional) and line styles (solid, dashed, dotted).
- **Edge Labels**: Double-click any connector arrow to type an explanatory label (e.g. *"implements"*, *"depends on"*, *"leads to"*).

---

## 4. Canvas Navigation & Controls

| Action | Control / Shortcut |
| :--- | :--- |
| **Pan Canvas** | Spacebar + Drag, Middle Mouse Drag, or Two-finger Scroll |
| **Zoom In / Out** | Mouse Wheel (\`Ctrl+Wheel\`), or \`Ctrl + +\` / \`Ctrl + -\` |
| **Reset Zoom (100%)** | \`Ctrl + 0\` |
| **Zoom to Fit All** | \`Shift + 1\` |
| **Multi-Select Nodes** | \`Shift + Drag\` marquee selection box |
| **Delete Selected** | \`Delete\` or \`Backspace\` |
| **Duplicate Node** | \`Alt + Drag\` or \`Ctrl + D\` |
| **Snap to Grid** | Toggle in the bottom-left canvas toolbar (50px snap interval) |

---

## 5. Performance Engineering on Large Canvases

To guarantee steady 60 FPS performance when building massive mindmaps with hundreds of nodes:

1. **Frustum Culling**: Nodes and connector edges located outside the active viewport bounding box skip DOM layout computations.
2. **Simplified Level-of-Detail (LOD)**: When zooming far out to inspect the overall macro layout, detailed Markdown typography switches to optimized schematic representations, saving GPU rasterization cycles.
3. **Hardware Acceleration**: Canvas translation and scaling execute via GPU-accelerated CSS \`transform: translate3d(...) scale(...)\`.
`,tp=`# Embedded FSRS Spaced Repetition

Flint incorporates a state-of-the-art **Spaced Repetition Review Engine** directly into your everyday note-taking workflow. Powered by the modern **FSRS-4.5 algorithm (Free Spaced Repetition Scheduler)** via \`ts-fsrs\`, Flint turns plain Markdown notes into high-efficiency active recall flashcards without requiring external apps like Anki.

---

## 1. Why FSRS-4.5 over Traditional SM-2?

Most legacy flashcard systems rely on the SuperMemo-2 (SM-2) algorithm from 1987, which uses heuristic "ease factors" that lead to card scheduling collapse (the "ease hell" trap).

Flint uses **FSRS-4.5**, a modern mathematical memory model based on empirical human memory retention studies:

- **Two-Component Memory Model**: Separates memory **Stability** ($S$, how long a memory trace endures in days) and **Difficulty** ($D$, the intrinsic complexity of the subject matter).
- **Target Retention Calibration**: Lets you configure an exact retention goal (e.g. 90%), dynamically calculating review intervals to achieve that rate with the fewest reviews possible.
- **Adaptive Scheduling**: Card intervals expand exponentially when recalled easily and adjust smoothly when forgotten, without penalizing future ease indefinitely.

---

## 2. Inline Markdown Flashcard Syntax

You never have to switch into a dedicated card authoring menu. Write flashcards directly in your notes using three intuitive syntax formats:

### 1. Concept Cards (\`::\`)
A single-direction question and answer pair:
\`\`\`markdown
What is Write-Ahead Logging (WAL) in SQLite? :: A transaction log mechanism where changes are appended to a separate log file before modifying the primary database pages.
\`\`\`

### 2. Bidirectional Cards (\`;;\`)
Generates **two** independent study cards (Forward: $A \\to B$ and Reverse: $B \\to A$), ideal for language learning, medical terminology, and code definitions:
\`\`\`markdown
Ephemeral Port Range ;; 49152 to 65535
\`\`\`
- Card 1 tests: *"Ephemeral Port Range"* $\\to$ Reveals: *"49152 to 65535"*
- Card 2 tests: *"49152 to 65535"* $\\to$ Reveals: *"Ephemeral Port Range"*

### 3. Cloze Deletion Cards (\`{...}\` or \`==...==\`)
Hide specific keywords within a contextual sentence:
\`\`\`markdown
In Flint, disk text files are the single source of truth, while {flint.sqlite} acts as an embedded relational query accelerator.
\`\`\`
Or use standard Markdown highlights:
\`\`\`markdown
The Tauri v2 architecture uses ==rusqlite== with WAL mode for native persistence.
\`\`\`

---

## 3. The Study Review Deck

Launch the study session by clicking the **Flashcards** icon on the left Action Rail or selecting *Review Due Cards* from the Command Palette (\`Ctrl+K\`).

During a review session, Flint presents flashcards sequentially with prompt, answer reveal, and interval forecasts:

- **Prompt (Front)**: The question extracted from your note (e.g. *What is Write-Ahead Logging (WAL) in SQLite?*).
- **Reveal**: Press \`Space\` or click **Show Answer** to reveal the answer.
- **Grading Responses**: Grade your recall using keys \`1\` to \`4\` or the rating buttons:
  - \`1\` **Again** (\`< 10m\`): Complete blackout or incorrect answer; resets card to the learning queue.
  - \`2\` **Hard** (\`1.2d\`): Recalled with substantial effort; advances interval conservatively.
  - \`3\` **Good** (\`3.5d\`): Standard correct recall; advances stability according to the FSRS model.
  - \`4\` **Easy** (\`7.1d\`): Instant, effortless recall; advances interval significantly.

Estimated review intervals for each grade are calculated in real time by the FSRS algorithm and displayed directly on the rating buttons.

---

## 4. Background Reconciliation & Data Safety

- **Deterministic Card Keys**: Flashcards compute deterministic content hashes and document IDs. If you reorganize or rename your note files, Flint reconciles card history seamlessly.
- **Relational Integrity**: Card review states (stability, difficulty, due dates, review logs) are stored in the local SQLite database.
- **Cascade Cleanup**: If a note containing flashcards is deleted or moved to \`.trash/\`, its associated cards are cleaned up automatically.
`,np=`# Tasks Dashboard & Daily Journal

Flint eliminates the separation between note-taking, project tracking, and daily reflection. Through the **Global Tasks Dashboard** and **Daily Journal Engine**, your action items and daily scratchpads stay organized without requiring fragmented third-party productivity apps.

---

## 1. Centralized Tasks Dashboard

In traditional Markdown systems, task checkboxes (\`- [ ]\`) scattered across dozens of project notes often go forgotten. Flint indexes every task in your Hearth into a unified, actionable control center.

### Task Syntax
Write tasks naturally in any note:
\`\`\`markdown
## Sprint Tasks
- [ ] Implement FTS5 diacritics tokenization #backend ^task-101
- [x] Configure Tauri v2 memory limits
- [ ] Design custom SVG folder icons #design
\`\`\`

### Accessing the Dashboard
- Click the **Tasks** icon on the left Action Rail.
- Or run \`Ctrl+K\` → *Open Tasks Dashboard*.

| **To Do (5)** | **In Progress (2)** | **Completed (14)** |
| :--- | :--- | :--- |
| • [ ] **Implement FTS5 diacritics**<br />\`#backend\` • \`Architecture.md\` | • [ ] **Configure Tauri memory limits**<br />\`#runtime\` • \`Runtime.md\` | • [x] ~~**Establish native rusqlite engine**~~<br />\`#database\` • \`Engine.md\` |
| • [ ] **Design custom SVG folder icons**<br />\`#design\` • \`Icons.md\` | • [ ] **Audit FSRS-4.5 retention curve**<br />\`#fsrs\` • \`Algorithm.md\` | • [x] ~~**TipTap 2.x Live Preview**~~<br />\`#editor\` • \`Editor.md\` |


---

## 2. Views & Two-Way Disk Synchronization

### Kanban & List Modes
- **Kanban Board**: Drag task cards between *To Do*, *In Progress*, and *Completed* columns.
- **Checklist Mode**: Clean aggregated list grouped by document source or tag category.
- **Source Link Navigation**: Clicking the document badge on any task card immediately opens the source note and scrolls the editor directly to that specific task line.

### Atomic Two-Way Synchronization
When you check off a task or drag it into the *Completed* column in the Tasks Dashboard:
1. Flint locates the source \`.md\` file on disk.
2. Applies the state change (\`- [ ]\` $\\to$ \`- [x]\`) using the atomic temp-and-rename pipeline.
3. Updates the \`blocks\` table in SQLite.
4. Suppresses echo file reload loops, ensuring smooth UI continuity.

---

## 3. Daily Journal & Reflection

The **Journal** feature provides zero-friction capture for morning plans, meeting logs, and evening reflections.

### Creating Today's Journal Note
- Click the **Calendar / Journal** icon on the left Action Rail.
- Or press \`Ctrl+Alt+J\`.
- Flint instantly opens today's note (e.g. \`Journal/2026-09-06.md\`). If it doesn't exist yet, it creates it instantly using your configured template.

### Configuring Journal Settings
Navigate to *Settings → Extensions → Journal*:

- **Journal Folder**: Set the root directory for daily notes (default: \`Journal/\`).
- **Date Format**: Configure file name formatting:
  - \`YYYY-MM-DD\` (e.g. \`2026-09-06.md\`)
  - \`YYYY/MM/DD\` (auto-creates nested monthly folders: \`2026/09/06.md\`)
  - \`DD-MM-YYYY\`
- **Default Template**: Specify boilerplate content to preload into new daily notes (e.g. Daily Standup, Priorities, Gratitude).

### Chronological Navigation
At the top of each daily note, Flint displays a lightweight sub-header bar with:
- **Previous Day (\`Alt+←\`)**: Navigates to the preceding daily note.
- **Next Day (\`Alt+→\`)**: Navigates to the following daily note.
- **Calendar Date Picker**: Jump directly to any historical date in your archive.
`,ap=`# Hearths & Workspace Management

In Flint, individual workspaces or note vaults are called **Hearths**. This document covers how Hearths work, multi-workspace switching, full-text search with SQLite FTS5, file safety in the \`.trash/\` folder, and cloud/Git synchronization best practices.

---

## 1. The "Hearth" Structure

A Hearth is simply any standard folder on your computer that contains Markdown files. When opened in Flint, an internal \`.flint/\` directory is established at the root:

\`\`\`
My-Knowledge-Base/            <-- Hearth Root Directory
├── .flint/                   <-- Local Workspace Metadata & Cache
│   ├── flint.sqlite          <-- Native Rust SQLite database (WAL mode)
│   ├── flint.sqlite-wal      <-- SQLite Write-Ahead Log
│   ├── settings.json         <-- Hearth-specific settings & toggles
│   ├── canvas/               <-- Spatial canvas JSON definitions
│   └── plugins/              <-- Locally installed community extensions
├── .trash/                   <-- Soft-delete safety folder
├── Projects/
│   ├── Architecture.md
│   └── Roadmap.md
├── Journal/
│   └── 2026-09-06.md
└── Index.md
\`\`\`

### Physical Ground Truth Invariant
- **Your files are never trapped in a database**: All text, frontmatter, and embedded media live as standard plain-text files on your hard drive.
- **The database is disposable**: If \`flint.sqlite\` is ever deleted or damaged, Flint automatically scans your markdown files on the next boot and reconstructs the relational index and search catalog in seconds.

---

## 2. Multi-Hearth Agility

Flint is engineered for seamless multi-workspace management:

- **Hearth Switcher (\`Ctrl+Shift+O\`)**: Press \`Ctrl+Shift+O\` or click the workspace name in the top titlebar to open the Hearth Switcher modal.
- **Instant Context Switching**: Switch between *Work*, *Personal*, *Research*, or *Client* vaults in milliseconds without restarting the desktop application.
- **Cross-Hearth Auto-Discovery**: Flint maintains a system-wide registry of recently opened vaults. External AI tools and the built-in MCP server can discover and search across all known Hearths automatically.

---

## 3. High-Performance Full-Text Search (SQLite FTS5 + BM25)

Finding notes across a library of thousands of documents is instantaneous in Flint.

### Quick Open (\`Ctrl+K\` or \`Ctrl+O\`)
Press \`Ctrl+K\` to open the Command & Note Search Palette. Start typing to filter notes by title, alias, or file path.

### Full-Text Deep Search
Click the **Search** icon in the sidebar or press \`Ctrl+Shift+F\` for deep body text search.

- **Statistical BM25 Ranking**: Search results are scored using the industry-standard Okapi BM25 ranking algorithm, matching term frequency and inverse document frequency.
- **Diacritics Removal**: Searching for \`resume\` finds \`résumé\` automatically via SQLite's \`unicode61 remove_diacritics 1\` tokenizer.
- **Syntax Filters**:
  - \`tag:#architecture\`: Restricts results to documents with the specified tag.
  - \`path:Projects/\`: Restricts search to a specific directory subtree.
  - \`"exact phrase"\`: Matches literal multi-word strings.

---

## 4. File Safety & Soft-Delete Recovery (\`.trash/\`)

Accidental file deletion should never result in permanent data loss. Flint implements a **safe soft-delete pipeline**:

1. **Trash Folder Relocation**: When a document is deleted via the file tree, command palette, or MCP tool, Flint moves the physical \`.md\` file into the hidden \`.trash/\` directory inside your Hearth.
2. **Metadata Preservation**: Original file paths, timestamps, and document IDs are recorded in the \`trash_items\` SQLite table.
3. **Restoration**: Deleted notes can be inspected and restored to their original location with a single click in *Settings → File Safety → Trash Bin*.

---

## 5. Synchronization & Backup Best Practices

Because Flint stores plain CommonMark files alongside lightweight SQLite journals, you have complete freedom to choose your synchronization tool:

### Using Git
Git is an ideal synchronization tool for Flint Hearths:
- Notes remain human-readable diffs in commit histories.
- Create a \`.gitignore\` inside your Hearth root:
  \`\`\`gitignore
  # Ignore temporary SQLite cache and WAL logs
  .flint/flint.sqlite*
  .flint/*.tmp*
  .trash/
  \`\`\`
  *(Flint will automatically regenerate \`flint.sqlite\` on other machines upon launch).*

### Using Syncthing, iCloud Drive, or Dropbox
- Set your Hearth folder directly within your synchronized cloud directory.
- Flint's **atomic temp-and-rename writes** and **echo suppression signatures** prevent file-watcher conflict loops during remote sync updates.
`,ip="# Keyboard Shortcuts & Command Palette\n\nFlint is designed for keyboard-driven focus. You can navigate between files, execute commands, split editor panes, and format notes without lifting your hands from the keyboard.\n\n---\n\n## 1. The Command Palette (`Ctrl+K` / `Cmd+K`)\n\nThe **Command Palette** is your central cockpit in Flint.\n\n- Press `Ctrl+K` (or `Cmd+K` on macOS) from anywhere in the app.\n- Start typing to search for open notes, recent documents, or application commands.\n- Use `↑` and `↓` arrow keys to navigate options, and press `Enter` to execute.\n\n```\n> Type a command or note name...\n  • Dual-Storage Architecture.md\n  • Micro-Kernel & Extension Architecture.md\n  • Toggle Split Editor (Ctrl+Alt+S)\n  • Open 2D Knowledge Graph View (Ctrl+G)\n  • Open Spaced Repetition Review Deck\n  • Switch Active Hearth Workspace (Ctrl+Shift+O)\n```\n\n---\n\n## 2. Navigation & Workspace Shortcuts\n\n| Action | Windows / Linux | macOS |\n| :--- | :--- | :--- |\n| **Command Palette / Quick Open** | `Ctrl + K` or `Ctrl + O` | `Cmd + K` or `Cmd + O` |\n| **Toggle Left Sidebar (File Tree)** | `Ctrl + \\` | `Cmd + \\` |\n| **Toggle Right Sidebar (Backlinks/Outline)** | `Ctrl + Shift + \\` | `Cmd + Shift + \\` |\n| **Switch Active Hearth** | `Ctrl + Shift + O` | `Cmd + Shift + O` |\n| **Vault-Wide Full-Text Search** | `Ctrl + Shift + F` | `Cmd + Shift + F` |\n| **Open Settings Window** | `Ctrl + ,` | `Cmd + ,` |\n| **Open Help & Shortcuts Guide** | `F1` | `F1` |\n\n---\n\n## 3. Tabs & Split Editor Panes\n\n| Action | Windows / Linux | macOS |\n| :--- | :--- | :--- |\n| **New Note Tab** | `Ctrl + T` | `Cmd + T` |\n| **Close Active Tab** | `Ctrl + W` | `Cmd + W` |\n| **Next Tab** | `Ctrl + Tab` | `Ctrl + Tab` |\n| **Previous Tab** | `Ctrl + Shift + Tab` | `Ctrl + Shift + Tab` |\n| **Jump to Tab 1 through 8** | `Ctrl + 1` ... `Ctrl + 8` | `Cmd + 1` ... `Cmd + 8` |\n| **Jump to Last Tab** | `Ctrl + 9` | `Cmd + 9` |\n| **Navigate Back in History** | `Alt + ←` | `Cmd + [` |\n| **Navigate Forward in History** | `Alt + →` | `Cmd + ]` |\n| **Toggle Split Editor Side-by-Side** | `Ctrl + Alt + S` | `Cmd + Alt + S` |\n\n---\n\n## 4. Editing & Text Formatting\n\n| Action | Windows / Linux | macOS |\n| :--- | :--- | :--- |\n| **Create New Note** | `Ctrl + N` | `Cmd + N` |\n| **Save Active Note Immediately** | `Ctrl + S` *(auto-saved)* | `Cmd + S` *(auto-saved)* |\n| **Toggle Bold Text** | `Ctrl + B` | `Cmd + B` |\n| **Toggle Italic Text** | `Ctrl + I` | `Cmd + I` |\n| **Toggle Strikethrough** | `Ctrl + Shift + X` | `Cmd + Shift + X` |\n| **Toggle Highlight** | `Ctrl + Shift + H` | `Cmd + Shift + H` |\n| **Inline Code Span** | `Ctrl + E` | `Cmd + E` |\n| **Heading Levels 1 to 6** | `Ctrl + Alt + 1..6` | `Cmd + Alt + 1..6` |\n| **Insert Task Item Checkbox** | `Ctrl + Shift + 9` | `Cmd + Shift + 9` |\n| **Insert Bullet List** | `Ctrl + Shift + 8` | `Cmd + Shift + 8` |\n| **Insert Numbered List** | `Ctrl + Shift + 7` | `Cmd + Shift + 7` |\n| **Insert Blockquote** | `Ctrl + Shift + .` | `Cmd + Shift + .` |\n| **Trigger Slash Commands Menu** | `/` | `/` |\n| **Trigger Wiki-Link Autocomplete** | `[[` | `[[` |\n| **Smart List Indent / Unindent** | `Tab` / `Shift + Tab` | `Tab` / `Shift + Tab` |\n\n---\n\n## 5. View Launchers & Modals\n\n| Action | Windows / Linux | macOS |\n| :--- | :--- | :--- |\n| **Open 2D Knowledge Graph** | `Ctrl + G` | `Cmd + G` |\n| **Open Infinite Canvas** | `Ctrl + Alt + C` | `Cmd + Alt + C` |\n| **Open Tasks Dashboard** | `Ctrl + Alt + T` | `Cmd + Alt + T` |\n| **Open Today's Journal Note** | `Ctrl + Alt + J` | `Cmd + Alt + J` |\n| **Open Flashcard Review Deck** | `Ctrl + Alt + F` | `Cmd + Alt + F` |\n| **Quick Note Scratchpad HUD** | `Ctrl + Alt + N` | `Cmd + Alt + N` |\n\n---\n\n## 6. Window Zoom & Display Scaling\n\n| Action | Windows / Linux | macOS |\n| :--- | :--- | :--- |\n| **Zoom In** | `Ctrl + +` | `Cmd + +` |\n| **Zoom Out** | `Ctrl + -` | `Cmd + -` |\n| **Reset Zoom (100%)** | `Ctrl + 0` | `Cmd + 0` |\n",rp=`# AI Assistants & Model Context Protocol (MCP)

Flint is designed from the ground up to be **AI-Native**. It bridges the gap between local human thought and autonomous AI reasoning by implementing the open **Model Context Protocol (MCP)** specification.

Through a native stdio MCP server (\`bin/flint-mcp-server.cjs\`), external AI assistants (such as Claude Desktop, Google Antigravity, Cursor, and Gemini Code Assist) can search, read, write, and reason over your personal knowledge base without manual copy-pasting or cloud uploads.

\`\`\`
[ External AI Assistants / Coding Agents ]
  Claude Desktop • Google Antigravity • Cursor • Gemini
  │
  │  JSON-RPC 2.0 over stdio (Model Context Protocol)
  ▼
[ Flint Native MCP Server ]
  bin/flint-mcp-server.cjs
  │
  │  Direct SQLite FTS5 Queries & Atomic File I/O
  ▼
[ Active Hearth Knowledge Base ]
  Markdown Notes (*.md) • flint.sqlite (WAL) • Tasks • FSRS Deck
\`\`\`

---

## 1. Built-in MCP Tools Reference

Flint exposes **13 structured RPC tools** directly to connected AI agents:

| Tool Name | Scope | Capability |
| :--- | :--- | :--- |
| \`flint_list_hearths\` | Workspace | Discovers all known Hearths and their filesystem paths on the machine. |
| \`flint_get_active_hearth\` | Workspace | Retrieves the path, title, and configuration of the active workspace. |
| \`flint_switch_hearth\` | Workspace | Switches the active workspace context to a different Hearth folder. |
| \`flint_search_notes\` | Search | Queries notes using SQLite FTS5 with BM25 statistical relevance ranking. |
| \`flint_search_across_hearths\` | Search | Searches across every known vault on the computer in a single query. |
| \`flint_read_note\` | Document | Reads note text, parsing YAML frontmatter and raw CommonMark body. |
| \`flint_create_note\` | Document | Atomically creates a new Markdown note with frontmatter metadata. |
| \`flint_update_note\` | Document | Safely updates note content while preserving frontmatter properties. |
| \`flint_delete_note\` | Document | Moves a note to the \`.trash/\` folder (*destructive, requires confirmation*). |
| \`flint_list_all_notes\` | Document | Lists note titles, relative paths, tags, and timestamps. |
| \`flint_get_backlinks\` | Graph | Resolves incoming references, forward links, and unlinked mentions. |
| \`tasks_get_all\` | Tasks | Aggregates all open and completed \`- [ ]\` markdown tasks across the vault. |
| \`fsrs-spaced-repetition_get_due_cards\` | Study | Retrieves flashcards currently due for active recall review. |

---

## 2. Connecting Claude Desktop

To connect Claude Desktop to your Flint notes, edit your Claude Desktop configuration file:

- **Windows**: \`%APPDATA%\\Claude\\claude_desktop_config.json\`
- **macOS**: \`~/Library/Application Support/Claude/claude_desktop_config.json\`

Add the \`flint\` entry under \`mcpServers\`:

\`\`\`json
{
  "mcpServers": {
    "flint": {
      "command": "node",
      "args": ["C:/absolute/path/to/flint/bin/flint-mcp-server.cjs"]
    }
  }
}
\`\`\`
*(On macOS/Linux, use standard Unix paths like \`"/Users/username/flint/bin/flint-mcp-server.cjs"\`).*

Restart Claude Desktop. The hammer icon (🛠️) will appear in the chat prompt, confirming that Flint tools are loaded.

---

## 3. Connecting Google Antigravity & Agent Runtimes

In Antigravity or standard MCP client configurations:

\`\`\`json
{
  "mcpServers": {
    "flint": {
      "command": "node",
      "args": ["<path-to-flint>/bin/flint-mcp-server.cjs"],
      "env": {}
    }
  }
}
\`\`\`

Now you can prompt your AI:
> *"Search my Flint notes for our Q3 database migration plan, find open tasks, and summarize the key risks."*

The AI will call \`flint_search_notes\`, \`tasks_get_all\`, and \`flint_get_backlinks\` autonomously to produce a grounded response.

---

## 4. Connecting Cursor IDE

In Cursor:
1. Open **Cursor Settings** (\`Ctrl+,\`).
2. Navigate to **Features → MCP**.
3. Click **+ Add New MCP Server**.
4. Configure:
   - **Name**: \`flint\`
   - **Type**: \`command\`
   - **Command**: \`node <path-to-flint>/bin/flint-mcp-server.cjs\`

---

## 5. Built-in Flint Copilot (In-App AI Chat)

In addition to external MCP clients, Flint includes a pre-bundled showcase extension: **Copilot for Flint** (\`flint-copilot\`).

- **Multi-Provider BYOK**: Connect your own API key for Anthropic Claude, OpenAI, Google Gemini, Ollama (Local LLMs), Groq, DeepSeek, or OpenRouter.
- **Context-Aware Chat**: Automatically attaches the content of your currently active note to the chat conversation.
- **Sidebar Integration**: Dock the Copilot pane into the right sidebar or open it in a standalone tab.
- **In-App Tool Execution**: The Copilot extension runs tools natively against your Hearth to modify notes or generate flashcards upon command.
`,lp=`# Dual-Storage Architecture

Flint combines the transparency of plain-text Markdown files with the query power of an embedded relational database. This document details how Flint separates document files on disk from the SQLite metadata engine, how synchronization occurs, and the performance characteristics of this design.


## 1. Architectural Motivation

---

Note-taking systems typically select one of two extremes:

1. **Pure File-Tree Architecture** (e.g., standard markdown folders):
   - *Pros*: Complete user ownership, inspectable via standard tools, easy to back up with Git.
   - *Cons*: O(N) file system scans for backlink resolution, slow full-text search across thousands of files, and sluggish graph traversal.
2. **Pure Relational/Document Database** (e.g., proprietary cloud databases):
   - *Pros*: O(1) indexed queries, fast graph traversal, and instant full-text search.
   - *Cons*: Vendor lock-in, proprietary storage formats, inability to inspect raw notes, and complex conflict resolution.

Flint eliminates this trade-off with a **Dual-Storage Engine**:
- **Disk Markdown Files (\`.md\`)**: The authoritative source of truth.
- **Relational SQLite Database (\`.flint/flint.sqlite\`)**: A compiled native Rust SQLite engine (\`rusqlite\` with WAL mode and FTS5) acting as an instant metadata cache and query accelerator.

If \`.flint/flint.sqlite\` is ever deleted or corrupted, Flint simply re-scans the Markdown files in the Hearth using the differential \`file_manifest\` and rebuilds the relational cache in seconds.


## 2. Synchronization Pipeline

---

Synchronization between the file system and SQLite operates through a bidirectional, event-driven pipeline:

| Storage Layer | Synchronization Pipeline |
|:---|:---|
| **Track 1: Authoritative Disk Storage** | Local filesystem Markdown (\`*.md\`) serving as the permanent source of truth |
| **Atomic Write Engine** | Writes to temp file \`.flint-tmp-*\` then atomic-renames to prevent data loss |
| **Filesystem Watcher** | Debounced cross-platform file monitoring for external edits |
| **AST Metadata Tokenizer** | Extracts frontmatter, \`[[wikilinks]]\`, \`#tags\`, headings, and task checkboxes |
| **Track 2: SQLite Relational Index** | Embedded \`rusqlite\` WAL-mode cache for high-speed indexing & graph queries |
| **\`documents\` & \`blocks_fts\`** | Fast document metadata lookup and BM25 full-text search index |
| **\`document_links\`** | Indexed forward and backward links for instant graph rendering & backlinks |
| **\`extension_storage\`** | Dynamic SQLite tables managed by extensions (e.g. FSRS card state, task boards) |
| **Central \`EventBus\`** | Dispatches \`document:saved\` and \`document:deleted\` across host & extension handlers |

### Save Lifecycle (Internal Edit)

1. **Typing in Editor**: The user types in the TipTap/ProseMirror editor. Changes mutate the in-memory document state immediately for sub-8ms input latency.
2. **Debounced Disk Flush**: A 300ms debounce timer triggers file writing. The editor serializes the document into standard UTF-8 CommonMark with YAML frontmatter.
3. **AST Metadata Extraction**: As part of the save pipeline, the AST tokenizer extracts:
   - Frontmatter properties (\`tags\`, \`aliases\`, custom YAML fields).
   - Wikilinks (\`[[Target Document]]\` or \`[[Target Document|Alias]]\`).
   - Task checkboxes (\`- [ ]\`, \`- [x]\`).
   - Heading outlines (\`#\`, \`##\`, \`###\`).
4. **Relational Indexing**: In a single SQLite transaction:
   - Updates the \`documents\` row with current title, modified timestamp (\`mtime\`), and frontmatter JSON.
   - Synchronizes forward edges in the \`links\` table.
   - Updates tag relations in \`document_tags\`.
   - Re-indexes the full text in \`fts_documents\`.
5. **Event Broadcast**: Emits \`document:saved\` on the \`EventBus\`, alerting UI tabs and listening extensions.


## 3. Database Schema Overview

---

The embedded SQLite schema lives in \`.flint/flint.sqlite\`. Key tables include:

### \`documents\`
Stores file metadata and hierarchy:

\`\`\`sql
CREATE TABLE IF NOT EXISTS documents (
  id TEXT PRIMARY KEY,
  path TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  parent_id TEXT,
  is_folder INTEGER DEFAULT 0,
  mtime INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  deleted_at INTEGER DEFAULT NULL,
  properties TEXT DEFAULT '{}'
);
CREATE INDEX IF NOT EXISTS idx_documents_parent ON documents(parent_id);
CREATE INDEX IF NOT EXISTS idx_documents_mtime ON documents(mtime);
\`\`\`

### \`links\`
Stores bidirectional Wikilink graph edges:

\`\`\`sql
CREATE TABLE IF NOT EXISTS links (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_id TEXT NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  target_title TEXT NOT NULL,
  target_id TEXT REFERENCES documents(id) ON DELETE SET NULL,
  link_text TEXT,
  line_number INTEGER,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_links_source ON links(source_id);
CREATE INDEX IF NOT EXISTS idx_links_target ON links(target_id);
CREATE INDEX IF NOT EXISTS idx_links_target_title ON links(target_title);
\`\`\`

### \`document_tags\`
Stores tag associations:

\`\`\`sql
CREATE TABLE IF NOT EXISTS document_tags (
  document_id TEXT NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  tag TEXT NOT NULL,
  PRIMARY KEY (document_id, tag)
);
CREATE INDEX IF NOT EXISTS idx_document_tags_tag ON document_tags(tag);
\`\`\`

### \`fts_documents\` (FTS5 Full-Text Search)
Enables instantaneous BM25 ranking across note collections:

\`\`\`sql
CREATE VIRTUAL TABLE IF NOT EXISTS fts_documents USING fts5(
  document_id UNINDEXED,
  title,
  content,
  tokenize = 'porter unicode61'
);
\`\`\`


## 4. Backlink Resolution Engine

---

Resolving backlinks in pure file-based editors requires searching every file in the directory. In Flint, resolving incoming backlinks for any document is a sub-millisecond query:

\`\`\`sql
SELECT
  d.id,
  d.title,
  d.path,
  l.line_number,
  l.link_text
FROM links l
JOIN documents d ON l.source_id = d.id
WHERE l.target_id = ? OR l.target_title = ?
ORDER BY d.mtime DESC;
\`\`\`

When a document is renamed from \`Project Alpha\` to \`Project Beta\`:
1. The filesystem file is renamed on disk.
2. The \`documents\` table updates \`title = 'Project Beta'\`.
3. Flint triggers an automated link refactoring pass, updating all referencing Markdown files and relational rows within the same atomic operation.


## 5. Storage Engine Implementations

---

Flint supports two runtime execution targets for SQLite:

### A. Desktop Mode: Native Rusqlite (Tauri IPC)
- Uses native C/Rust SQLite compiled directly into the Tauri binary.
- Configured with \`PRAGMA journal_mode = WAL;\` (Write-Ahead Logging) and \`PRAGMA synchronous = NORMAL;\`.
- Eliminates the ~100MB memory footprint of WebAssembly runtimes.
- Page commits execute on disk in microseconds on background worker threads, guaranteeing that typing in the UI thread never drops frames.

### B. Web Mode: WebAssembly SQLite (\`sql.js\`)
- Runs when previewing Flint in standard browsers or web playgrounds.
- In-memory execution using WebAssembly with debounced IndexedDB binary dumps.
- Full SQL compatibility ensures extensions run without code changes between desktop and web builds.


## 6. Related Reading & References

---

- [[Database Schema Reference]]: Inspect all tables, columns, indexes, and FTS5 definitions.
- [[Micro-Kernel & Extension Architecture]]: Understand how extensions safely interact with the host.
- [[Events & Relational Storage]]: Learn how extensions register dynamic SQLite tables.
- [[Model Context Protocol (MCP) Tools]]: Expose database queries to AI agent copilots.
`,sp=`# Micro-Kernel & Extension Architecture

Flint is architected around a strict **micro-kernel** design. The host application provides core windowing, layout primitives, document persistence, and registry managers. Virtually all user-facing features are implemented as modular extensions that plug into host extension points, including the Graph View, Infinite Canvas, Task Manager, Flashcard Reviewer, and Backlinks Panel.


## 1. Zero Native Core Leakage

---

A fundamental architectural invariant in Flint is **strict native core isolation**:

> [!IMPORTANT]
> Native directories (\`src/core\`, \`src/lib\`, \`src/store\`, \`src/components\`, \`src/types\`, \`src/sdk\`) must never import code, types, or models from extensions or plugins (\`src/plugins/*\`, \`src/extensions/*\`).

All interaction between the host application and extensions is decoupled using:
1. **The Flint SDK (\`src/sdk\`)**: A stable public contract exposing base classes, interfaces, and registry helpers.
2. **Inversion of Control (IoC) Registries**: Central registries where extensions contribute UI elements, commands, and views.
3. **The Typed EventBus (\`EventBus\`)**: A publish-subscribe system for lifecycle and document events.

| Architectural Layer | Scope & Subsystems |
|:---|:---|
| **Flint Extensions Layer** | Modular extensions consuming only the public SDK boundary |
| **Core Built-ins** | Graph View, Infinite Canvas, Task Manager, FSRS Flashcards, Journal, Backlinks |
| **Community & Custom** | Cascade Chat, AI Copilot, Quicknote, Custom User Plugins |
| **Public SDK Surface (\`src/sdk\`)** | Stable host-extension contract decoupling kernel internals from plugins |
| **Core Interfaces** | \`Extension\` base class, \`FlintApp\` locator, Disposable Manager, Event Hooks |
| **Tool Builder** | Schema builders, Typed MCP definitions, Settings API |
| **Micro-Kernel IoC Registries** | Central inversion-of-control registries managed by the host application |
| \`CommandRegistry\` | Palette commands, keybindings, and hotkey listeners |
| \`ViewRegistry\` | Leaf views, tab types, and split pane panels |
| \`ActionRailRegistry\` | Left activity bar icons and action triggers |
| \`StatusBarRegistry\` | Bottom status items and progress indicators |
| \`ContextMenuRegistry\` | File tree, editor, and tab context menus |
| \`ToolRegistry\` (MCP) | Model Context Protocol dynamic tool registration |
| \`SlotRegistry\` | Pluggable UI injection points and modal slots |
| \`Typed EventBus\` | Async publish-subscribe channel for document and workspace lifecycle events |

This isolation ensures that any extension can be enabled, disabled, hot-reloaded, or completely removed without breaking host compilation or causing runtime reference leaks.


## 2. The Host Application Container (\`FlintApp\`)

---

Every extension receives a reference to \`FlintApp\`, which serves as the host application's central service locator:

\`\`\`typescript
export interface FlintApp {
  /** Workspace state: active document, open tabs, toasts */
  workspace: WorkspaceManager;
  /** Command palette items and hotkey bindings */
  commands: CommandRegistry;
  /** Left icon rail (Action Rail / Ribbon) */
  actionRail: ActionRailRegistry;
  /** Bottom status bar widgets */
  statusBar: StatusBarRegistry;
  /** Left and right sidebar tabs */
  sidebars: SidebarRegistry;
  /** Workspace content views (tabs) */
  views: ViewRegistry;
  /** Rich text editor extensions, headers, and footers */
  editor: EditorRegistry;
  /** Right-click context menus */
  contextMenu: ContextMenuRegistry;
  /** Application modal dialogs */
  modals: ModalRegistry;
  /** Frontmatter property types and filters */
  properties: PropertyRegistry;
  /** Model Context Protocol (MCP) tools and prompts */
  tools: ToolRegistry;
  /** Dynamic React layout portal slots */
  slots: SlotRegistry;
  /** Declarative SQLite tables and migrations */
  dbManager: ExtensionDbManager;
  /** Background Web Worker thread pool */
  workerPool: ExtensionWorkerPool;
  /** Central typed event bus */
  events: EventBus;
}
\`\`\`


## 3. The \`Disposable\` Pattern & Resource Management

---

Extensions frequently register event listeners, interval timers, DOM elements, and UI widgets. If an extension is disabled or uninstalled, orphaned resources cause memory leaks and zombie UI artifacts.

Flint solves this by enforcing the **Disposable Pattern**:

\`\`\`typescript
export interface Disposable {
  dispose: () => void;
}
\`\`\`

Every registration method on the \`Extension\` base class tracks disposables automatically:

\`\`\`typescript
import { Extension } from 'flint';

export default class ExampleExtension extends Extension {
  async onload() {
    // 1. Registering a command returns a Disposable tracked by the extension
    this.addCommand({
      id: 'greet',
      title: 'Show Greeting',
      action: (app) => app.workspace.showToast('Hello from extension!'),
    });

    // 2. Event subscriptions are also tracked automatically
    this.onEvent('document:saved', (data) => {
      console.log('Saved note:', data.title);
    });

    // 3. Custom resources (timers, sockets) can be tracked manually
    const timer = setInterval(() => this.tick(), 60000);
    this.registerDisposable({
      dispose: () => clearInterval(timer),
    });
  }

  onunload() {
    // Standard registrations are cleaned up automatically.
    // Custom non-disposable cleanup can be placed here.
  }
}
\`\`\`

When \`app.extensions.disableExtension(id)\` is called:
1. \`extension.unload()\` executes \`extension.onunload()\`.
2. All registered disposables are invoked in reverse order.
3. Extension-scoped SQLite connections and Web Workers are terminated.
4. The extension is garbage collected with zero memory leakage.


## 4. Namespacing & Isolation Invariants

---

To avoid name collisions between independent extensions:

- **Command IDs**: Scoped as \`\${extensionId}:\${commandId}\`.
- **Action Rail & Status Bar IDs**: Scoped as \`\${extensionId}:\${itemId}\`.
- **MCP Tool Names**: Automatically prefixed as \`\${extensionId}_\${toolName}\`.
- **Storage**: Key-value data is isolated in \`.flint/extensions/\${extensionId}/data.json\`.
- **Database Tables**: Tables created via \`this.defineTable()\` are namespaced with the extension ID prefix in SQLite to prevent cross-extension schema corruption.


## 5. Related Reading & References

---

- [[Flint SDK API Reference]]: Inspect all classes, lifecycle hooks, and service locators.
- [[Dual-Storage Architecture]]: How the host coordinates filesystem I/O with SQLite metadata.
- [[Extension Points Reference]]: Learn how to register commands, ribbons, and modals.
- [[Model Context Protocol (MCP) Tools]]: Expose safe AI agent tools with JSON schema and Zod.
- [[Developer Policies & Guidelines]]: Invariants for privacy, stability, and desktop performance.
`,op=`# Systems & Performance Engineering

Flint is engineered with explicit performance invariants designed to maintain fluid 60 FPS rendering, sub-8ms typing latency, and sub-150MB memory footprint even across vaults containing tens of thousands of notes.


## 1. Performance Invariants

---

| Subsystem | Optimization Strategy | Implementation Details |
| :--- | :--- | :--- |
| **Relational Indexing** | Compiled Native \`rusqlite\` | Direct Tauri IPC invocation to Rust SQLite; zero WASM overhead, zero whole-db exports, WAL journaling with 256MB memory-mapped I/O (\`PRAGMA mmap_size = 268435456\`). |
| **Full-Text Retrieval** | SQLite FTS5 Virtual Tables + BM25 | Block-level tokenization with \`unicode61 remove_diacritics 1\` and statistical BM25 ranking. |
| **Live Preview Editor** | Incremental Decoration Mapping | $O(1)$ transaction mapping (\`DecorationSet.map\`) rescans only dirty textblocks. KaTeX formulas memoize in RAM. Undo history is bounded to 50 snapshots. |
| **WebView2 RAM Tuning** | Browser Arguments Injection | In-process GPU compositing (\`--in-process-gpu\`), single renderer process cap, capped disk (10MB) and media (5MB) caches, and size-optimized V8 flags. |
| **Working Set Trimming** | Win32 Memory Trimming | Windows API \`SetProcessWorkingSetSize\` trims physical working set memory after 120s of idle time. |
| **Startup Differential Sync** | Manifest Tracking | \`file_manifest\` compares timestamps and hashes to skip AST re-indexing on unchanged notes. |
| **Echo Suppression** | Signature-Based Write Tracking | Records internal save signatures to prevent file watchers from triggering recursive reload loops. |
| **Instant UI Snappiness** | Zero Transition Delay | Micro-interactions execute instantly with zero artificial transition delays or visual smearing. |
`,cp=`# Plugin Quick Start

Create and run your first Flint extension in under 5 minutes. This tutorial guides you through building a real-time word counter extension with a status bar widget, command palette action, and action rail button.


## 1. Directory Structure

---

Extensions live within the active Hearth's \`.flint/extensions/\` directory:

\`\`\`
<My-Hearth>/
└── .flint/
    └── extensions/
        └── word-counter/
            ├── manifest.json   # Extension metadata
            └── main.js         # Compiled JavaScript entry point
\`\`\`

Create a new directory named \`word-counter\` inside your Hearth's \`.flint/extensions/\` folder:

\`\`\`bash
mkdir -p .flint/extensions/word-counter
cd .flint/extensions/word-counter
\`\`\`


## 2. Writing the Manifest (\`manifest.json\`)

---

The manifest file defines your extension's identity, version, author, and description.

Create \`manifest.json\`:

\`\`\`json
{
  "id": "word-counter",
  "name": "Word & Reading Time Counter",
  "version": "1.0.0",
  "minAppVersion": "0.2.0",
  "description": "Displays live word counts and estimated reading time for the active note.",
  "author": "Yuliet Li",
  "authorUrl": "https://github.com/yvliet",
  "tags": ["productivity", "writing"]
}
\`\`\`


## 3. Writing the Extension Logic (\`main.js\`)

---

Extensions extend the \`Extension\` (or legacy \`Plugin\`) base class and implement the \`onload()\` lifecycle hook.

Create \`main.js\`:

\`\`\`javascript
const { Extension } = require('flint');
const React = require('react');

module.exports = class WordCounterExtension extends Extension {
  async onload() {
    console.log(\`[\${this.manifest.name}] Loaded successfully.\`);

    // 1. Register Action Rail Icon (Left Toolbar)
    this.addActionRailIcon(
      'count-words-btn',
      '⏱️',
      'Calculate Reading Stats',
      (app) => {
        const title = app.workspace.activeDocument?.title || 'No active note';
        app.workspace.showToast(\`Analyzing: \${title}\`, 'info');
      }
    );

    // 2. Register Command in Command Palette (Ctrl+K / Cmd+K)
    this.addCommand({
      id: 'show-stats',
      title: 'Word Counter: Show Document Statistics',
      hotkey: 'Ctrl+Shift+U',
      action: (app) => {
        const doc = app.workspace.activeDocument;
        if (!doc) {
          app.workspace.showToast('No active document open.', 'warning');
          return;
        }

        const words = (doc.content || '').trim().split(/\\s+/).filter(Boolean).length;
        const readTime = Math.ceil(words / 200);

        app.workspace.showToast(
          \`"\${doc.title}": \${words} words (approx. \${readTime} min read)\`,
          'success'
        );
      },
    });

    // 3. Register Live Status Bar Widget (Bottom Bar)
    this.addStatusBarItem({
      id: 'stats-widget',
      alignment: 'right',
      order: 10,
      render: (app) => {
        const doc = app.workspace.activeDocument;
        const words = doc?.content ? doc.content.trim().split(/\\s+/).filter(Boolean).length : 0;
        const readTime = Math.ceil(words / 200);

        return React.createElement(
          'span',
          { className: 'text-neutral-400 text-xs font-mono select-none' },
          \`📝 \${words} words • ~\${readTime} min\`
        );
      },
    });

    // 4. Listen to Document Save Events
    this.onEvent('document:saved', ({ id, title }) => {
      console.log(\`[WordCounter] Document "\${title}" (\${id}) was saved.\`);
    });
  }

  onunload() {
    console.log(\`[\${this.manifest.name}] Unloaded.\`);
    // All UI elements, commands, status widgets, and event listeners
    // registered with this.add* or this.onEvent are cleaned up automatically!
  }
};
\`\`\`


## 4. Testing Your Extension

---

1. Open Flint.
2. Open the Hearth containing your \`.flint/extensions/word-counter/\` directory.
3. Open **Settings** (\`Ctrl + ,\` / \`Cmd + ,\`) and navigate to the **Extensions** tab.
4. Locate **Word & Reading Time Counter** in the list of installed extensions and toggle it **On**.
5. Observe:
   - A new action icon appears in the left Action Rail.
   - The status bar at the bottom displays real-time word and reading time stats.
   - Pressing \`Ctrl+Shift+U\` executes the custom command and triggers a toast notification.


## 5. Development with TypeScript & Bundlers

---

For larger extensions, I strongly recommend authoring in TypeScript and compiling with **Vite** or **esbuild**.

### Minimal \`package.json\`
\`\`\`json
{
  "name": "flint-word-counter",
  "version": "1.0.0",
  "scripts": {
    "build": "esbuild src/index.ts --bundle --platform=neutral --format=cjs --outfile=main.js --external:flint --external:react"
  },
  "devDependencies": {
    "esbuild": "^0.23.0",
    "typescript": "^5.5.0"
  }
}
\`\`\`

### TypeScript Source (\`src/index.ts\`)
\`\`\`typescript
import { Extension, FlintApp } from 'flint';
import React from 'react';

export default class WordCounterExtension extends Extension {
  async onload(): Promise<void> {
    this.addCommand({
      id: 'show-stats',
      title: 'Word Counter: Show Document Statistics',
      action: (app: FlintApp) => {
        app.workspace.showToast('Statistics calculated!', 'info');
      },
    });
  }
}
\`\`\`

Build your bundle:
\`\`\`bash
npm run build
\`\`\`
Copy \`manifest.json\` and the resulting \`main.js\` into your Hearth's extension directory.


## 5. Next Steps

---

- Explore full copyable project boilerplates in [[Starter Templates & Boilerplates]].
- Discover all available ribbons, commands, and status bar hooks in [[UI Extension Points]].
- Browse interactive UI primitives in [[Flint UI Components]].
`,up=`# Extension Manifest Specification (\`manifest.json\`)

Every Flint extension must include a valid \`manifest.json\` file in its root directory. This manifest provides the host application with metadata needed to discover, load, sandbox, and categorize the extension.


## 1. Example Manifest

---

\`\`\`json
{
  "id": "kanban-boards",
  "name": "Kanban Boards & Sprint Planner",
  "version": "1.2.0",
  "minAppVersion": "0.2.0",
  "description": "Visual drag-and-drop boards integrated with markdown tasks and SQLite metadata.",
  "author": "Yuliet Li",
  "authorUrl": "https://github.com/yvliet",
  "tags": ["productivity", "visualization", "tasks"],
  "icon": "ViewBoardIcon",
  "bannerImage": "assets/banner.png",
  "readme": "# Kanban Boards for Flint\\nOrganize tasks across columns..."
}
\`\`\`


## 2. Field Reference

---

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| \`id\` | \`string\` | **Yes** | Unique identifier for the extension. Must be lowercase alphanumeric with hyphens (e.g., \`word-counter\`, \`kanban-boards\`). |
| \`name\` | \`string\` | **Yes** | Human-readable title displayed in the extensions manager and community marketplace. |
| \`version\` | \`string\` | **Yes** | Semantic versioning string formatted as \`MAJOR.MINOR.PATCH\` (e.g., \`1.0.0\`). |
| \`description\` | \`string\` | **Yes** | Brief one- or two-sentence overview of the extension's capabilities (recommended: 40-160 characters). |
| \`minAppVersion\` | \`string\` | No | Minimum version of the Flint host application required for compatibility (e.g., \`0.2.0\`). Defaults to \`0.1.0\`. |
| \`author\` | \`string\` | No | Name of the author, team, or maintainer. |
| \`authorUrl\` | \`string\` | No | Web URL to the author's GitHub profile, portfolio, or documentation site. |
| \`tags\` | \`string[]\` | No | Array of category keywords for search and marketplace filtering (e.g., \`["productivity", "formatting", "ai"]\`). |
| \`icon\` | \`string\` | No | Icon identifier (matching standard icon names) or custom SVG string for display in cards. |
| \`readme\` | \`string\` | No | Full Markdown documentation shown in the Marketplace details modal. |
| \`bannerImage\` | \`string\` | No | Relative path (e.g., \`assets/banner.png\`) or URL to a header image displayed in the marketplace. |
| \`isCore\` | \`boolean\` | No | Reserved for Flint internal bundled extensions. Community extensions must omit this or set it to \`false\`. |


## 3. Manifest JSON Schema

---

You can validate your \`manifest.json\` using the official JSON Schema:

\`\`\`json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "FlintExtensionManifest",
  "type": "object",
  "required": ["id", "name", "version", "description"],
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[a-z0-9]+(-[a-z0-9]+)*$",
      "description": "Unique, lowercase hyphenated extension identifier."
    },
    "name": {
      "type": "string",
      "minLength": 2,
      "maxLength": 60,
      "description": "Display name of the extension."
    },
    "version": {
      "type": "string",
      "pattern": "^(0|[1-9]\\\\d*)\\\\.(0|[1-9]\\\\d*)\\\\.(0|[1-9]\\\\d*)(?:-((?:0|[1-9]\\\\d*|\\\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\\\.(?:0|[1-9]\\\\d*|\\\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\\\+([0-9a-zA-Z-]+(?:\\\\.[0-9a-zA-Z-]+)*))?$",
      "description": "SemVer version string."
    },
    "minAppVersion": {
      "type": "string",
      "description": "Minimum Flint application version required."
    },
    "description": {
      "type": "string",
      "minLength": 10,
      "maxLength": 300,
      "description": "Short summary of the extension."
    },
    "author": {
      "type": "string",
      "description": "Author or maintainer name."
    },
    "authorUrl": {
      "type": "string",
      "format": "uri",
      "description": "URL to the author's website or profile."
    },
    "tags": {
      "type": "array",
      "items": { "type": "string" },
      "description": "Search categories and classification tags."
    },
    "icon": {
      "type": "string",
      "description": "Icon identifier or SVG markup."
    },
    "bannerImage": {
      "type": "string",
      "description": "Relative asset path or URL for marketplace banner."
    },
    "readme": {
      "type": "string",
      "description": "Markdown formatted readme text."
    },
    "isCore": {
      "type": "boolean",
      "description": "True only for internal host extensions."
    }
  },
  "additionalProperties": false
}
\`\`\`


## 4. Validation Rules & Common Errors

---

When Flint boots or loads a new extension, it runs validation on \`manifest.json\`. Common validation failures include:

1. **Invalid ID Format**: IDs with uppercase letters, spaces, or special characters (\`WordCounter\` or \`my_plugin\`) will fail. Use kebab-case: \`word-counter\` or \`my-plugin\`.
2. **Missing Required Fields**: Omitting \`description\`, \`version\`, or \`name\` prevents the extension from loading.
3. **App Version Mismatch**: If \`minAppVersion\` is higher than the currently running Flint application version, the extension is disabled with an incompatibility notice.


## 5. Related Reading & References

---

- [[Plugin Quick Start]]: Build and run your first extension with a valid manifest.
- [[Extension Points Reference]]: Register commands, ribbon icons, and status bar items.
- [[Plugin Submission Requirements]]: Guidelines for packaging and distribution.
- [[Developer Policies & Guidelines]]: Best practices for privacy and local-first architecture.
`,dp=`# Extension Points Reference

Flint provides a rich set of declarative extension points allowing plugins to seamlessly inject buttons, views, menus, and editor behaviors into the workspace.


## 1. Action Rail (Left Ribbon Toolbar)

---

The Action Rail is the narrow vertical icon bar on the far-left side of the Flint window. Use it for high-frequency global actions or view toggles.

\`\`\`typescript
import { Extension, FlintApp } from 'flint';
import React from 'react';

export default class ActionRailExample extends Extension {
  async onload() {
    this.addActionRailIcon(
      'daily-quote',                            // Identifier (scoped automatically)
      React.createElement('span', null, '💡'), // React element or SVG icon
      'Show Daily Quote',                       // Hover tooltip
      (app: FlintApp) => {
        app.workspace.showToast('Stay curious and keep writing.', 'info');
      },
      15,                                       // Order priority (lower numbers appear higher)
      (app: FlintApp) => true                   // Optional isActive predicate
    );
  }
}
\`\`\`


## 2. Command Palette (\`Ctrl+K\` / \`Cmd+K\`)

---

Commands appear in Flint's searchable Command Palette and can be bound to custom keyboard shortcuts.

\`\`\`typescript
this.addCommand({
  id: 'insert-timestamp',
  title: 'Insert Current ISO Timestamp',
  section: 'Editor Actions',
  hotkey: 'Ctrl+Alt+T',
  allowInInput: true, // Enables firing even when an input or editor has focus
  action: (app: FlintApp) => {
    const timestamp = new Date().toISOString();
    app.workspace.showToast(\`Timestamp: \${timestamp}\`, 'success');
  },
  isVisible: (app: FlintApp) => true, // Optional conditional filter
});
\`\`\`


## 3. Status Bar (Bottom Information Rail)

---

Widgets in the bottom status bar provide persistent, unobtrusive status information, counters, or quick triggers.

\`\`\`typescript
this.addStatusBarItem({
  id: 'sync-indicator',
  alignment: 'right', // 'left' or 'right'
  order: 5,
  render: (app: FlintApp) => {
    return React.createElement(
      'div',
      {
        className: 'flex items-center gap-1.5 text-xs text-neutral-400 cursor-pointer',
        onClick: () => app.workspace.showToast('All changes synced locally.', 'info')
      },
      React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-500' }),
      React.createElement('span', null, 'Local Synced')
    );
  },
});
\`\`\`


## 4. Context Menus (Right-Click Menus)

---

Flint features contextual right-click menus scoped to specific UI targets:
- \`'file-tree'\`: Right-clicking files or folders in the sidebar.
- \`'file-tree-root'\`: Right-clicking empty space in the file tree.
- \`'editor'\`: Right-clicking inside the document editor.
- \`'tab'\`: Right-clicking tabs in the window tab bar.
- \`'universal'\`: Appears across all context menus.

\`\`\`typescript
// Registering a file action in the file tree
this.registerContextMenuItem({
  id: 'export-markdown',
  title: 'Export as Clean Markdown...',
  scope: 'file-tree',
  icon: React.createElement('span', null, '📄'),
  isVisible: (app, file: any) => !file?.is_folder,
  onClick: (app, file: any) => {
    app.workspace.showToast(\`Exporting \${file.title}...\`, 'info');
  },
});

// Registering an editor selection transformation with nested submenus
this.registerContextMenuItem({
  id: 'transform-text',
  title: 'Transform Selection',
  scope: 'editor',
  submenu: [
    {
      id: 'uppercase',
      title: 'UPPERCASE',
      onClick: (app, { editor, selectedText }: any) => {
        if (editor && selectedText) {
          editor.chain().focus().insertContent(selectedText.toUpperCase()).run();
        }
      },
    },
    {
      id: 'lowercase',
      title: 'lowercase',
      onClick: (app, { editor, selectedText }: any) => {
        if (editor && selectedText) {
          editor.chain().focus().insertContent(selectedText.toLowerCase()).run();
        }
      },
    },
  ],
});
\`\`\`


## 5. Custom Workspace Views (Tab Panes)

---

Extensions can register full-screen view types that render inside workspace tabs (similar to Flint's native Graph View or Canvas).

\`\`\`typescript
// 1. Register the custom view definition
this.registerView({
  type: 'pomodoro-timer',
  title: 'Focus Timer',
  icon: React.createElement('span', null, '⏳'),
  render: ({ app, tabId }) => {
    return React.createElement(
      'div',
      { className: 'flex flex-col items-center justify-center h-full p-8 text-neutral-200' },
      React.createElement('h1', { className: 'text-3xl font-bold mb-4' }, '25:00'),
      React.createElement('button', {
        className: 'px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded text-sm font-medium',
        onClick: () => app.workspace.showToast('Pomodoro session started!', 'success')
      }, 'Start Focus Session')
    );
  },
});

// 2. Open the view from a command or button
this.addCommand({
  id: 'open-pomodoro',
  title: 'Open Focus Timer',
  action: (app) => {
    app.workspace.openTab({
      viewType: 'pomodoro-timer',
      title: 'Focus Timer',
      newTab: true,
    });
  },
});
\`\`\`


## 6. Global Modals & Dialogs

---

Register modal dialogs managed centrally by Flint's modal system:

\`\`\`typescript
this.registerModal({
  id: 'welcome-dialog',
  render: (app) => {
    return React.createElement(
      'div',
      { className: 'p-6 bg-neutral-900 border border-neutral-700 rounded-lg max-w-md w-full' },
      React.createElement('h2', { className: 'text-lg font-semibold text-white' }, 'Welcome to Flint!'),
      React.createElement('p', { className: 'text-sm text-neutral-400 mt-2' },
        'Your local-first sanctuary for ideas and structured knowledge.'
      ),
      React.createElement('button', {
        className: 'mt-4 px-3 py-1.5 bg-neutral-700 hover:bg-neutral-600 rounded text-xs text-white',
        onClick: () => app.modals.closeModal(\`\${this.manifest.id}:welcome-dialog\`)
      }, 'Dismiss')
    );
  },
});
\`\`\`


## 7. Settings Tabs

---

Provide a configuration interface in the Flint Settings modal:

\`\`\`typescript
this.registerSettingTab({
  id: 'preferences',
  name: 'Focus Timer',
  render: () => {
    return React.createElement(
      'div',
      { className: 'space-y-4 p-4 text-neutral-300' },
      React.createElement('h3', { className: 'text-base font-medium text-white' }, 'Timer Settings'),
      React.createElement('div', { className: 'flex items-center justify-between' },
        React.createElement('span', { className: 'text-sm' }, 'Default Interval (minutes)'),
        React.createElement('input', {
          type: 'number',
          defaultValue: 25,
          className: 'bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-sm w-20'
        })
      )
    );
  },
});
\`\`\`


## 8. Advanced Editor Extension Points

---

For deep integration with the TipTap/ProseMirror text editor:

### Document Headers & Footers
Inject collapsible metadata panels above or below document content:
\`\`\`typescript
this.registerDocumentHeader({
  id: 'reading-summary',
  order: 10,
  render: ({ document, app }) => {
    return React.createElement(
      'div',
      { className: 'mb-4 p-3 bg-neutral-900/60 border border-neutral-800 rounded text-xs text-neutral-400' },
      \`Metadata for "\${document?.title || 'Untitled'}"\`
    );
  },
});
\`\`\`

### Editor Slash Commands
Provide autocompletes when users type \`/\` at the start of an empty line:
\`\`\`typescript
this.registerSlashCommand({
  title: 'Callout Box',
  description: 'Insert an emphasized callout container',
  icon: '💡',
  command: ({ editor, range }) => {
    editor.chain().focus().deleteRange(range).insertContent('> [!NOTE]\\n> ').run();
  },
});
\`\`\`

### Dynamic React Portal Slots
Mount arbitrary React components into layout anchor slots (\`editor:viewport-overlay\`, \`editor:floating-toolbar\`, \`editor:minimap\`, \`editor:gutter\`):
\`\`\`typescript
this.registerPortalSlot({
  id: 'editor-word-badge',
  slot: 'editor:floating-toolbar',
  order: 5,
  when: (ctx) => ctx.viewMode === 'Visible',
  render: (ctx) => {
    return React.createElement(
      'div',
      { className: 'px-2 py-0.5 bg-neutral-800/80 rounded text-[11px] text-neutral-400 font-mono' },
      'Editing Note'
    );
  },
});
\`\`\`


## 7. Related Reading & References

---

- [[Flint UI Components]]: Use native buttons, inputs, toggles, cards, and setting builders.
- [[CSS Variables & Design Tokens]]: Style custom controls using Flint's theme variables.
- [[Flint SDK API Reference]]: Complete method signatures and hook definitions.
- [[Events & Relational Storage]]: Coordinate UI actions with database events.
- [[Model Context Protocol (MCP) Tools]]: Expose extension capabilities to AI agent copilots.
`,hp=`# ProseMirror & Editor Bridge

Extensions in Flint can integrate directly into the TipTap 2.x and ProseMirror Live Preview editor engine using \`this.registerEditorPlugin()\`.


## 1. Registering an Editor Plugin

---

\`\`\`typescript
this.registerEditorPlugin({
  id: 'custom-mention-decorator',
  decorations: (state, ctx) => {
    // Return custom mapped DecorationSet
    return null;
  },
  shortcuts: {
    'Mod-Alt-m': (editor) => {
      editor.chain().focus().insertContent('@').run();
      return true;
    },
  },
});
\`\`\`


## 2. $O(1)$ Transaction Decoration Mapping

---

Flint maps editor decorations through ProseMirror transaction steps (\`mapping.map(decorations)\`), running in $O(K)$ time over active decorations rather than rescanning the whole document, preserving sub-8ms typing latency on documents with over 100,000 words.
`,mp=`# Model Context Protocol (MCP) Tools

Model Context Protocol (MCP) is an open standard that allows AI agents and Large Language Models (LLMs) to discover and invoke tools exposed by local applications. In Flint, MCP is a first-class architectural primitive: **every extension that manages queryable data or performs state changes can expose tools to AI agents**.


## 1. How MCP Operates in Flint

---

Flint implements a native, in-process MCP tool registry. When an extension registers a tool via \`this.registerTool()\`, it becomes immediately available to:

1. **In-App AI Copilots & Assistants**: Agents running inside Flint can search, create, summarize, and reorganize notes directly in memory with zero IPC serialization latency.
2. **External Desktop Clients**: Applications like **Claude Desktop**, **Cursor**, and **Antigravity** connect to Flint over standard I/O (\`flint-mcp-server\`) and discover all core and extension tools automatically.

| Client & Protocol Layer | In-Process Resolution Pipeline |
|:---|:---|
| **AI Client Layer** | Applications communicating via standard Model Context Protocol (MCP) |
| **Supported Clients** | In-App AI Copilot, Claude Desktop, Cursor, Antigravity, custom LLM orchestrators |
| **Transport Layer** | In-memory direct call (In-App) or JSON-RPC 2.0 over standard I/O (\`flint-mcp-server\`) |
| **Flint \`ToolRegistry\` Engine** | Central discovery and dispatch coordinator |
| **Core Built-in Tools** | \`flint_search_notes\`, \`flint_read_note\`, \`tasks_get_all\`, \`fsrs_get_due_cards\`, etc. |
| **Extension Registered Tools** | Dynamic tools registered during extension lifecycle via \`this.registerTool()\` |
| **Execution Handlers** | Type-safe async handlers querying SQLite database or in-memory stores with zero UI lag |


## 2. Tool Registration Guidelines & Conventions

---

When authoring MCP tools in your extensions:

- **Automatic Namespacing**: Tool names are automatically prefixed with your extension's manifest ID. If an extension with \`id: "tasks"\` registers \`get_all\`, the resulting MCP tool identifier is \`tasks_get_all\`.
- **Naming Verbs**: Use standard \`snake_case\` verbs:
  - Read: \`get_\`, \`list_\`, \`search_\`, \`read_\`
  - Write: \`create_\`, \`update_\`, \`toggle_\`
  - Destructive: \`delete_\`, \`remove_\`, \`archive_\`
- **Destructive Flag**: If a tool permanently deletes data or performs irreversible mutations, set \`isDestructive: true\`. AI interfaces use this flag to request explicit human confirmation before invocation.
- **Non-Blocking Execution**: Tool handlers must execute asynchronously and query in-memory stores or SQLite. Never perform synchronous raw disk I/O on the main thread.


## 3. Style A: Registering Tools with JSON Schema

---

Use standard MCP JSON Schema definitions when you prefer raw schema declarations without extra dependencies:

\`\`\`typescript
import { Extension, McpToolDefinition, McpToolResult } from 'flint';

export default class ReadingStatsExtension extends Extension {
  async onload() {
    this.registerTool({
      name: 'get_reading_stats',
      description: 'Calculates word count, character count, and estimated reading time for a document.',
      category: 'documents',
      parameters: {
        type: 'object',
        properties: {
          documentId: {
            type: 'string',
            description: 'The unique ID or path of the document to inspect.',
          },
          wordsPerMinute: {
            type: 'number',
            description: 'Estimated reading speed in words per minute (default: 200).',
            default: 200,
          },
        },
        required: ['documentId'],
      },
      handler: async (args, app): Promise<McpToolResult> => {
        const docId = String(args.documentId);
        const wpm = Number(args.wordsPerMinute) || 200;

        // Query the document via Flint's database or workspace
        const doc = await app.workspace.getDocument(docId);
        if (!doc) {
          return {
            content: [
              { type: 'text', text: \`Error: Document with ID "\${docId}" not found.\` }
            ],
            isError: true,
          };
        }

        const words = (doc.content || '').trim().split(/\\s+/).filter(Boolean).length;
        const minutes = Math.ceil(words / wpm);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                documentId: doc.id,
                title: doc.title,
                wordCount: words,
                readingTimeMinutes: minutes,
              }, null, 2),
            },
          ],
        };
      },
    });
  }
}
\`\`\`


## 4. Style B: Type-Safe Zod Schema Registration

---

For end-to-end type safety, Flint supports [Zod](https://zod.dev) schemas. Flint automatically infers TypeScript handler argument types and compiles the Zod schema into MCP-compliant JSON Schema at runtime:

\`\`\`typescript
import { Extension, McpToolResult } from 'flint';
import { z } from 'zod';

export default class TaskExtension extends Extension {
  async onload() {
    this.registerTool({
      name: 'create_task',
      description: 'Appends a new actionable task item to a note.',
      category: 'tasks',
      isDestructive: false,
      schema: z.object({
        documentId: z.string().describe('Target document ID'),
        taskDescription: z.string().min(3).describe('Description of the task'),
        dueDate: z.string().optional().describe('Due date in YYYY-MM-DD format'),
      }),
      handler: async ({ documentId, taskDescription, dueDate }, app): Promise<McpToolResult> => {
        const doc = await app.workspace.getDocument(documentId);
        if (!doc) {
          return {
            content: [{ type: 'text', text: \`Document "\${documentId}" does not exist.\` }],
            isError: true,
          };
        }

        const taskLine = \`\\n- [ ] \${taskDescription}\${dueDate ? \` 📅 \${dueDate}\` : ''}\`;
        await app.workspace.updateDocument(documentId, (doc.content || '') + taskLine);

        return {
          content: [
            { type: 'text', text: \`Successfully appended task to "\${doc.title}".\` },
          ],
        };
      },
    });
  }
}
\`\`\`


## 5. Registering Reusable MCP Prompts (\`this.registerPrompt\`)

---

Extensions can also define reusable prompt workflows for external agents and conversational copilots:

\`\`\`typescript
this.registerPrompt({
  name: 'summarize_project',
  description: 'Gathers a project document and its backlinks for executive summary synthesis.',
  arguments: [
    { name: 'documentId', description: 'ID of the project overview note', required: true },
  ],
  getMessages: async ({ documentId }, app) => {
    const doc = await app.workspace.getDocument(documentId);
    const backlinks = await app.workspace.getBacklinks(documentId);

    return {
      description: \`Project summary context for \${doc?.title || documentId}\`,
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: \`Please generate a comprehensive status report for "\${doc?.title}".\\n\\nContent:\\n\${doc?.content}\\n\\nLinked Notes:\\n\${JSON.stringify(backlinks)}\`,
          },
        },
      ],
    };
  },
});
\`\`\`


## 6. External Agent Setup

---

Because Flint's native MCP server auto-discovers all known Hearths, configuring external AI tools requires zero file path arguments:

### Claude Desktop Configuration
Add to \`claude_desktop_config.json\`:
\`\`\`json
{
  "mcpServers": {
    "flint": {
      "command": "flint-mcp-server"
    }
  }
}
\`\`\`

### Cursor Configuration
Add to \`.cursor/mcp.json\`:
\`\`\`json
{
  "mcpServers": {
    "flint": {
      "command": "flint-mcp-server"
    }
  }
}
\`\`\`

External agents can now search your notes (\`flint_search_notes\`), query your tasks (\`tasks_get_all\`), and invoke your custom extension tools seamlessly.


## 7. Related Reading & References

---

- [[Flint SDK API Reference]]: Complete MCP interfaces, Zod helpers, and tool definitions.
- [[Events & Relational Storage]]: Coordinate AI actions with database transactions.
- [[Dual-Storage Architecture]]: How AI tools query SQLite indexes with sub-millisecond latency.
- [[Database Schema Reference]]: Inspect tables exposed to AI query handlers.
`,fp=`# Events & Relational Storage

Flint provides two foundational primitives for data management in extensions:
1. **The Typed EventBus**: For reactive real-time notifications when documents are saved, opened, or deleted.
2. **Declarative Relational Storage**: For high-performance SQLite tables and lightweight JSON key-value persistence.


## 1. The Central EventBus

---

Flint uses a strongly-typed publish-subscribe event system. Subscribing via \`this.onEvent()\` registers a listener that automatically unregisters when your extension is unloaded.

\`\`\`typescript
import { Extension } from 'flint';

export default class EventWatcherExtension extends Extension {
  async onload() {
    // 1. Document Saved Event
    this.onEvent('document:saved', ({ id, title }) => {
      console.log(\`Document saved: "\${title}" (\${id})\`);
    });

    // 2. Document Deleted Event (Crucial for cleaning up extension data)
    this.onEvent('document:deleted', ({ id }) => {
      console.log(\`Document deleted: \${id}\`);
      this.cleanupDocumentMetadata(id);
    });

    // 3. Tab Changed Event
    this.onEvent('tab:changed', ({ activeTabId }) => {
      console.log(\`Active tab changed to: \${activeTabId}\`);
    });

    // 4. Hearth/Vault Loaded Event
    this.onEvent('vault:loaded', ({ path, name }) => {
      console.log(\`Loaded Hearth "\${name}" at \${path}\`);
    });
  }

  private async cleanupDocumentMetadata(docId: string) {
    // Clean up SQLite records associated with the deleted note
  }
}
\`\`\`

### Key Workspace Events

| Event Key | Payload | Description |
| :--- | :--- | :--- |
| \`'document:opened'\` | \`{ id: string, title: string }\` | Fires when a document is viewed in an editor tab. |
| \`'document:saved'\` | \`{ id: string, title: string }\` | Fires immediately after a note is serialized to disk and indexed. |
| \`'document:deleted'\` | \`{ id: string }\` | Fires when a note is permanently deleted or moved to trash. |
| \`'document:renamed'\` | \`{ id: string, oldTitle: string, newTitle: string }\` | Fires when a note is renamed. |
| \`'tab:changed'\` | \`{ activeTabId: string \\| null }\` | Fires when the user switches tabs. |
| \`'view:mode-changed'\` | \`{ mode: string }\` | Fires when toggling between Live Preview (\`Visible\`) and Source Markdown (\`Source\`). |
| \`'mcp:tool-called'\` | \`{ toolName: string, args: Record<string, unknown>, source: string }\` | Fires when an in-app or external AI client invokes an MCP tool. |


## 2. Lightweight JSON Settings (\`loadData\` & \`saveData\`)

---

For simple plugin configuration (such as API keys, user preferences, or toggle states), use \`this.loadData()\` and \`this.saveData()\`. Data is serialized as JSON in \`.flint/extensions/<plugin-id>/data.json\`.

\`\`\`typescript
interface MyPluginConfig {
  autoSummarize: boolean;
  refreshInterval: number;
  tagsToWatch: string[];
}

const DEFAULT_CONFIG: MyPluginConfig = {
  autoSummarize: false,
  refreshInterval: 300,
  tagsToWatch: ['#project', '#review'],
};

export default class ConfigurableExtension extends Extension {
  private config: MyPluginConfig = DEFAULT_CONFIG;

  async onload() {
    // Load stored settings or fall back to defaults
    const loaded = await this.loadData<MyPluginConfig>();
    this.config = Object.assign({}, DEFAULT_CONFIG, loaded);

    console.log('Current config:', this.config);
  }

  async updateAutoSummarize(enabled: boolean) {
    this.config.autoSummarize = enabled;
    // Persist changes to disk
    await this.saveData(this.config);
  }
}
\`\`\`


## 3. Declarative Relational SQLite Tables (\`this.defineTable\`)

---

When your extension manages structured, relational, or high-volume data (such as flashcard review logs, canvas node vectors, or task audit trails), JSON files become slow and inefficient.

Flint allows extensions to **declare typed SQLite tables** directly within the Hearth's embedded database via \`this.defineTable()\`:

\`\`\`typescript
import { Extension, ExtensionTable } from 'flint';

interface FlashcardRow {
  id: string;
  documentId: string;
  front: string;
  back: string;
  repetition: number;
  intervalDays: number;
  easeFactor: number;
  nextReviewDate: number;
}

export default class SpacedRepetitionExtension extends Extension {
  private cardsTable!: ExtensionTable<FlashcardRow>;

  async onload() {
    // 1. Declare the SQLite schema with automatic migration handling
    this.cardsTable = await this.defineTable<FlashcardRow>({
      tableName: 'flashcards',
      version: 1,
      columns: {
        id: { type: 'text', primaryKey: true },
        documentId: {
          type: 'text',
          nullable: false,
          references: { table: 'documents', column: 'id', onDelete: 'cascade' },
        },
        front: { type: 'text', nullable: false },
        back: { type: 'text', nullable: false },
        repetition: { type: 'integer', default: 0 },
        intervalDays: { type: 'real', default: 0.0 },
        easeFactor: { type: 'real', default: 2.5 },
        nextReviewDate: { type: 'integer', indexed: true },
      },
      indexes: [
        { name: 'idx_flashcards_due', columns: ['nextReviewDate'] },
        { name: 'idx_flashcards_doc', columns: ['documentId'] },
      ],
      teardownPolicy: 'drop-on-uninstall',
    });

    // 2. Perform CRUD queries
    await this.addCard('note-101', 'What is WAL mode in SQLite?', 'Write-Ahead Logging.');
    const dueCards = await this.getDueCards();
    console.log(\`Found \${dueCards.length} cards due for review.\`);
  }

  async addCard(documentId: string, front: string, back: string) {
    await this.cardsTable.insert({
      id: crypto.randomUUID(),
      documentId,
      front,
      back,
      repetition: 0,
      intervalDays: 1.0,
      easeFactor: 2.5,
      nextReviewDate: Date.now() + 86400000,
    });
  }

  async getDueCards(): Promise<FlashcardRow[]> {
    return this.cardsTable.select({
      where: { nextReviewDate: Date.now() },
      orderBy: 'nextReviewDate',
      orderDirection: 'ASC',
      limit: 50,
    });
  }
}
\`\`\`

### Features of \`defineTable()\`
- **Foreign Key Cascade**: Columns referencing \`documents(id)\` with \`onDelete: 'cascade'\` are cleaned up automatically when the user deletes a note.
- **Automated Versioned Migrations**: Declare a \`migrations\` map for seamless schema evolution across plugin versions.
- **Teardown Safety**: When \`teardownPolicy: 'drop-on-uninstall'\` is specified, Flint removes the table upon extension uninstallation, leaving no database bloat behind.


## 4. Off-Thread Web Workers (\`this.registerWorkerTask\`)

---

For computationally heavy tasks (such as semantic vector embeddings, image hashing, or large graph layout computations), Flint provides an off-thread Web Worker pool to preserve 60 FPS typing performance.

\`\`\`typescript
// 1. Register the task in onload()
this.registerWorkerTask('calculate-embeddings', async (input: { texts: string[] }, emitEvent) => {
  const vectors = [];
  for (let i = 0; i < input.texts.length; i++) {
    // Perform intensive vector calculation
    vectors.push(new Float32Array(384));
    emitEvent('embedding:progress', { percent: ((i + 1) / input.texts.length) * 100 });
  }
  return vectors;
});

// 2. Execute off-thread when needed
const embeddings = await this.runTask('calculate-embeddings', { texts: ['Hello world', 'Local first'] });
\`\`\`


## 5. Related Reading & References

---

- [[Database Schema Reference]]: Inspect Flint's internal SQLite tables and indexes.
- [[Dual-Storage Architecture]]: Understand how in-memory SQLite syncs with disk Markdown.
- [[Flint SDK API Reference]]: Complete EventBus signatures and database manager interfaces.
- [[Optimizing Extension Load Time]]: Best practices for debouncing database writes.
- [[Model Context Protocol (MCP) Tools]]: Expose database-backed queries to AI agents.
`,pp=`# Optimizing Extension Load Time

Flint prioritizes an instant desktop feel with sub-50ms cold startup times. Heavy extensions that block the main thread during initialization degrade application performance. Follow these optimization techniques to keep your extensions light and responsive.


## 1. Lazy-Loading Heavy Dependencies

---

Never import heavy third-party libraries (such as PDF parsers, charting engines, or LaTeX renderers) at the top level of your entry file:

\`\`\`typescript
// ❌ Slower: Evaluates the heavy bundle immediately on Flint boot
import * as Papa from 'papaparse';

export default class CsvExporterExtension extends Extension {
  async onload() {
    this.addCommand({
      id: 'export-csv',
      title: 'Export Table as CSV',
      action: () => {
        Papa.unparse(...);
      }
    });
  }
}
\`\`\`

Instead, dynamically import modules when the user actually triggers the action:

\`\`\`typescript
// ✅ Optimized: Zero startup overhead
export default class CsvExporterExtension extends Extension {
  async onload() {
    this.addCommand({
      id: 'export-csv',
      title: 'Export Table as CSV',
      action: async () => {
        const Papa = await import('papaparse');
        Papa.unparse(...);
      }
    });
  }
}
\`\`\`


## 2. Offloading to the Web Worker Pool

---

If your extension needs to perform computationally intensive calculations (such as computing graph layouts, generating semantic embeddings, or indexing thousands of blocks), offload the work to Flint's Web Worker thread pool:

\`\`\`typescript
// Execute heavy work off the UI thread
const result = await this.app.workerPool.runTask({
  taskName: 'heavy-indexing',
  payload: { documentIds },
  timeoutMs: 10000,
});
\`\`\`

This prevents frame drops and keeps editor input latency under 8ms. Learn more in [[Flint SDK API Reference]].


## 3. Debouncing Database Writes

---

When your extension listens to \`document:changed\` events to update custom metadata, avoid writing to SQLite on every single keystroke. Keep an in-memory state representation and debounce database persistence:

\`\`\`typescript
import { Extension } from 'flint';

export default class WordCounterExtension extends Extension {
  private saveDebounceTimer: number | null = null;

  async onload() {
    this.registerEvent(
      this.app.events.on('document:changed', ({ documentId, content }) => {
        this.updateMemoryStats(documentId, content);

        if (this.saveDebounceTimer !== null) {
          window.clearTimeout(this.saveDebounceTimer);
        }
        this.saveDebounceTimer = window.setTimeout(() => {
          this.flushStatsToDatabase(documentId);
        }, 500);
      })
    );
  }
}
\`\`\`


## 4. Measuring Activation Latency

---

You can benchmark your extension's activation time inside \`onload()\`:

\`\`\`typescript
async onload() {
  const start = performance.now();

  // Initialization logic...

  const elapsed = performance.now() - start;
  if (elapsed > 30) {
    console.warn(\`[Performance] Extension onload took \${elapsed.toFixed(2)}ms\`);
  }
}
\`\`\`

For more architectural best practices, read [[Micro-Kernel & Extension Architecture]] and [[Developer Policies & Guidelines]].
`,gp='# Publishing Extensions & Marketplace Roadmap\n\nShare your creations with the Flint community. This guide walks you through preparing, packaging, and distributing your extensions today, as well as my roadmap for the upcoming centralized Community Marketplace.\n\n\n## 1. Distribution Today: Local Hearth Installation & GitHub\n\n---\n\nIn the current version of Flint, extensions and themes operate on a local-first model:\n\n- **Local Hearth Installation**: Users install extensions by downloading or cloning an extension folder into their Hearth\'s `.flint/plugins/<extension-id>/` directory.\n- **GitHub Distribution**: Developers distribute their extensions as open-source repositories on GitHub, attaching pre-built `main.js` and `manifest.json` bundles to GitHub Releases.\n\n```\n<your-hearth>/\n└── .flint/\n    └── plugins/\n        └── markdown-slides/\n            ├── manifest.json\n            ├── main.js\n            └── styles.css (optional)\n```\n\n\n## 2. Release Preparation Checklist\n\n---\n\nBefore tagging a release for your extension, ensure your repository satisfies the following standards:\n\n- [ ] **Valid `manifest.json`**:\n  - `id`: Unique, lowercase kebab-case (e.g., `markdown-slides`).\n  - `name`: Clean, descriptive display title.\n  - `version`: Strict Semantic Versioning string (e.g., `1.0.0`).\n  - `description`: Crisp summary (40-160 characters).\n  - `author`: Your name or organization.\n  - `authorUrl`: GitHub profile or project URL.\n  - `tags`: Relevant keywords (e.g., `["visualization", "productivity"]`).\n- [ ] **Compiled `main.js`**:\n  - Bundled as CommonJS (`cjs`) targeting Node/neutral.\n  - Core dependencies (`flint`, `react`, `react-dom`) must be marked as **external** in your `esbuild` or `rollup` config so duplicate React runtimes are not bundled.\n- [ ] **Optional `styles.css`**: Scoped styles prefixed with your extension identifier to avoid polluting host styling (see [[CSS Variables & Design Tokens]]).\n- [ ] **`README.md`**: Clear documentation detailing features, keyboard shortcuts, and registered [[Model Context Protocol (MCP) Tools]].\n- [ ] **Desktop Responsiveness**: Verified that UI elements respond instantly with zero frame stutter or artificial animation delays (see [[Flint UI Components]]).\n\n\n## 3. Packaging for GitHub Releases\n\n---\n\nA clean and convenient way to distribute your extension to users is via GitHub Releases:\n\n1. Build your production bundle:\n   ```bash\n   npm run build\n   ```\n2. Create a release archive containing:\n   - `manifest.json`\n   - `main.js`\n   - `styles.css` (if applicable)\n   - `README.md`\n3. Draft a new Release on your GitHub repository (e.g. `v1.0.0`) and attach the compiled `main.js`, `manifest.json`, and `.zip` archive.\n4. Users can simply extract the archive into their `<hearth>/.flint/plugins/` directory and enable it under **Settings > Extensions**.\n\n\n## 4. Centralized Marketplace Roadmap\n\n---\n\nI am actively engineering an official centralized Community Marketplace:\n\n> [!NOTE]\n> The automated Web Publishing Portal, CLI publishing tool (`flint-cli`), and in-app one-click installer are currently in active development. When ready, developers will be able to publish directly from GitHub Actions or CLI with cryptographic verification.\n\nUntil the registry service is live:\n- Tag your GitHub repositories with `flint-extension` and `flint-notes`.\n- Showcase your plugin and gather feedback on the official [Flint GitHub Discussions](https://github.com/yvliet/flint/discussions).\n- Read [[Developer Policies & Guidelines]] and [[Plugin Submission Requirements]] to ensure long-term compatibility.\n',vp=`# Starter Templates & Boilerplates

Kickstart your Flint extension or theme with production-ready, copyable starter boilerplates. Every boilerplate includes strict TypeScript types, bundling configurations, and instant lifecycle integration with the Flint SDK.


## 1. Quick CLI Scaffolder (1-Liner)

---

Run this one-liner in your terminal to bootstrap an extension project in your Hearth's \`.flint/plugins/\` directory:

\`\`\`bash
# Create directory and initialize project

---
mkdir -p my-flint-plugin/src && cd my-flint-plugin && npm init -y
npm install --save-dev typescript esbuild @types/node @types/react
\`\`\`


## 2. Minimal Extension Starter

---

A lightweight, zero-bloat extension template registering an Action Rail icon, a Command Palette action, and a bottom Status Bar item.

#### \`manifest.json\`
\`\`\`json
{
  "id": "minimal-extension",
  "name": "Minimal Extension Starter",
  "version": "1.0.0",
  "minAppVersion": "0.2.0",
  "description": "Clean foundation for building custom Flint UI and command extensions.",
  "author": "Yuliet Li",
  "authorUrl": "https://github.com/yvliet",
  "tags": ["utility", "starter"]
}
\`\`\`

#### \`package.json\`
\`\`\`json
{
  "name": "flint-minimal-extension",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "node build.js",
    "watch": "node build.js --watch"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "esbuild": "^0.25.0",
    "typescript": "^5.7.0"
  },
  "peerDependencies": {
    "flint": "^0.2.0"
  }
}
\`\`\`

#### \`tsconfig.json\`
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "moduleResolution": "node",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
\`\`\`

#### \`src/main.ts\`
\`\`\`typescript
import { Extension, FlintApp } from 'flint';

export default class MinimalStarterExtension extends Extension {
  async onload(): Promise<void> {
    console.log(\`[\${this.manifest.name}] Initialized.\`);

    // 1. Register Action Rail Icon (Left Toolbar)
    this.addActionRailIcon(
      'starter-action-btn',
      '⚡',
      'Trigger Starter Action',
      (app: FlintApp) => {
        const title = app.workspace.activeDocument?.title || 'No active note';
        app.workspace.showToast(\`Active document: "\${title}"\`, 'info');
      }
    );

    // 2. Register Command in Command Palette (Ctrl+K / Cmd+K)
    this.addCommand({
      id: 'quick-action',
      title: 'Minimal Starter: Run Quick Action',
      hotkey: 'Ctrl+Shift+P',
      action: (app: FlintApp) => {
        app.workspace.showToast('Starter command executed successfully!', 'success');
      },
    });

    // 3. Register Status Bar Indicator (Bottom Bar)
    this.addStatusBarItem({
      id: 'starter-status',
      alignment: 'right',
      render: () => '⚡ Ready',
      onClick: (app: FlintApp) => {
        app.workspace.showToast('Status bar clicked', 'info');
      },
    });
  }

  async onunload(): Promise<void> {
    console.log(\`[\${this.manifest.name}] Cleaned up.\`);
  }
}
\`\`\`

#### \`build.js\` (esbuild bundler)
\`\`\`javascript
const esbuild = require('esbuild');

const isWatch = process.argv.includes('--watch');

const buildOptions = {
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'main.js',
  format: 'cjs',
  target: 'es2022',
  external: ['flint', 'react', 'react-dom'],
  sourcemap: 'inline',
};

if (isWatch) {
  esbuild.context(buildOptions).then((ctx) => {
    ctx.watch();
    console.log('Watching for changes...');
  });
} else {
  esbuild.build(buildOptions).then(() => {
    console.log('Build complete: main.js');
  });
}
\`\`\`


## 3. Model Context Protocol (MCP) Tool Provider Starter

---

A specialized extension template that exposes structured AI Agent tools to LLM copilots via Flint's Model Context Protocol bridge.

#### \`manifest.json\`
\`\`\`json
{
  "id": "mcp-tool-provider",
  "name": "MCP Tool Provider Starter",
  "version": "1.0.0",
  "minAppVersion": "0.2.0",
  "description": "Exposes structured query and note inspection tools to AI agent copilots.",
  "author": "Yuliet Li",
  "authorUrl": "https://github.com/yvliet",
  "tags": ["ai", "mcp", "copilot"]
}
\`\`\`

#### \`src/main.ts\`
\`\`\`typescript
import { Extension, McpToolDefinition, McpToolResult } from 'flint';

export default class McpStarterExtension extends Extension {
  async onload(): Promise<void> {
    console.log(\`[\${this.manifest.name}] Registering MCP Copilot Tools...\`);

    // Register Structured Tool: search_tagged_notes
    this.registerTool({
      name: 'search_tagged_notes',
      description: 'Search for markdown notes matching a specific tag or keyword in the active Hearth.',
      parameters: {
        type: 'object',
        properties: {
          tag: {
            type: 'string',
            description: 'The tag to filter notes by (e.g., #todo, #architecture).',
          },
          maxResults: {
            type: 'number',
            description: 'Maximum number of notes to return (default: 10).',
          },
        },
        required: ['tag'],
      },
      handler: async (args: { tag: string; maxResults?: number }): Promise<McpToolResult> => {
        const { tag, maxResults = 10 } = args;

        // Query in-memory metadata index via Flint host
        const notes = await this.app.db.query(
          \`SELECT id, title, path FROM documents 
           WHERE tags LIKE ? 
           LIMIT ?\`,
          [\`%\${tag}%\`, maxResults]
        );

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(notes, null, 2),
            },
          ],
        };
      },
    });
  }

  async onunload(): Promise<void> {
    console.log(\`[\${this.manifest.name}] MCP Tools unregistered.\`);
  }
}
\`\`\`


## 4. SQLite Relational Storage Starter

---

Template demonstrating how to dynamically create custom SQLite tables, execute queries, and subscribe to relational updates via the Flint EventBus.

#### \`manifest.json\`
\`\`\`json
{
  "id": "relational-storage-plugin",
  "name": "Relational Storage Starter",
  "version": "1.0.0",
  "minAppVersion": "0.2.0",
  "description": "Dynamic SQLite schema management, index creation, and reactive event listeners.",
  "author": "Yuliet Li",
  "authorUrl": "https://github.com/yvliet",
  "tags": ["database", "sqlite", "storage"]
}
\`\`\`

#### \`src/main.ts\`
\`\`\`typescript
import { Extension } from 'flint';

export default class RelationalStorageExtension extends Extension {
  async onload(): Promise<void> {
    // 1. Dynamically initialize extension SQLite table
    await this.app.db.execute(\`
      CREATE TABLE IF NOT EXISTS plugin_reading_progress (
        document_id TEXT PRIMARY KEY,
        scroll_percentage REAL DEFAULT 0,
        completed INTEGER DEFAULT 0,
        last_read_at INTEGER
      );
      CREATE INDEX IF NOT EXISTS idx_reading_progress_date 
      ON plugin_reading_progress (last_read_at);
    \`);

    // 2. Listen to document deletions to keep table clean
    this.registerEvent(
      this.app.events.on('document:deleted', async (event) => {
        await this.app.db.execute(
          'DELETE FROM plugin_reading_progress WHERE document_id = ?',
          [event.documentId]
        );
      })
    );

    // 3. Register Command to Mark Active Note Completed
    this.addCommand({
      id: 'mark-completed',
      title: 'Reading Progress: Mark Document Completed',
      action: async (app) => {
        const doc = app.workspace.activeDocument;
        if (!doc) return;

        await this.app.db.execute(
          \`INSERT INTO plugin_reading_progress (document_id, scroll_percentage, completed, last_read_at)
           VALUES (?, 1.0, 1, ?)
           ON CONFLICT(document_id) DO UPDATE SET completed = 1, last_read_at = ?\`,
          [doc.id, Date.now(), Date.now()]
        );

        app.workspace.showToast(\`Marked "\${doc.title}" as completed!\`, 'success');
      },
    });
  }

  async onunload(): Promise<void> {
    // Event listeners registered via this.registerEvent() are cleaned up automatically
    console.log(\`[\${this.manifest.name}] Unloaded.\`);
  }
}
\`\`\`


## 5. Custom Theme Package Starter

---

A clean theme package template customizing surface background tokens, typography, borders, and syntax highlighting colors.

#### \`manifest.json\`
\`\`\`json
{
  "id": "nordic-frost-theme",
  "name": "Nordic Frost",
  "version": "1.0.0",
  "minAppVersion": "0.2.0",
  "description": "An arctic, dark north-atlantic palette tailored for focused nocturnal writing.",
  "author": "Yuliet Li",
  "authorUrl": "https://github.com/yvliet",
  "tags": ["theme", "dark", "nord"]
}
\`\`\`

#### \`theme.css\`
\`\`\`css
/* Nordic Frost Theme for Flint */
.theme-nordic-frost {
  /* Surfaces */
  --flint-surface-base: #2e3440;
  --flint-surface-card: #3b4252;
  --flint-surface-popover: #434c5e;
  --flint-surface-active: #4c566a;

  /* Borders */
  --flint-border-subtle: #3b4252;
  --flint-border-base: #4c566a;
  --flint-border-strong: #81a1c1;

  /* Typography */
  --flint-text-base: #eceff4;
  --flint-text-muted: #d8dee9;
  --flint-text-faint: #4c566a;

  /* Accent & Interactive States */
  --flint-accent-primary: #88c0d0;
  --flint-accent-hover: #8fbcbb;
  --flint-accent-active: #5e81ac;

  /* Syntax Highlighting */
  --flint-syntax-keyword: #81a1c1;
  --flint-syntax-string: #a3be8c;
  --flint-syntax-number: #b48ead;
  --flint-syntax-comment: #616e88;
}
\`\`\`


## 6. Next Steps

---

- Explore the [[UI Extension Points]] to discover all action ribbons, command palette slots, and modal dialogs.
- Browse the [[Flint UI Components]] to preview live interactive buttons, text inputs, toggles, and setting cards.
- Learn about tool registration in [[Model Context Protocol (MCP) Tools]].
- Review distribution invariants in [[Developer Policies & Guidelines]].
`,yp=`# Build Your First Theme

Themes in Flint allow you to completely customize the colors, font typography, surface gradients, and syntax highlights of the workspace using standard CSS.

Flint includes live hot-reloading for theme development: whenever you edit and save your theme's \`styles.css\` file, Flint updates the running desktop application immediately without requiring a restart.


## 1. Theme Directory Layout

---

Themes are stored within your active Hearth in the \`.flint/themes/\` directory. Each theme resides in its own folder:

\`\`\`
<your-hearth>/
└── .flint/
    └── themes/
        └── my-custom-theme/
            ├── manifest.json   <-- Theme metadata
            ├── styles.css      <-- CSS variable overrides & rules
            └── banner.png      <-- Optional preview thumbnail (400x250)
\`\`\`


## 2. Creating the Manifest (\`manifest.json\`)

---

Create \`manifest.json\` inside your theme folder:

\`\`\`json
{
  "id": "solar-ember",
  "name": "Solar Ember",
  "version": "1.0.0",
  "minAppVersion": "0.1.0",
  "type": "theme",
  "description": "A high-contrast dark theme with warm embers and deep charcoal surfaces.",
  "author": "Yuliet Li",
  "authorUrl": "https://github.com/yvliet"
}
\`\`\`


## 3. Writing Theme CSS (\`styles.css\`)

---

Flint uses semantic CSS custom properties defined in [[CSS Variables & Design Tokens]]. You only need to declare the tokens you wish to change:

\`\`\`css
/* ==========================================================================
   Solar Ember Theme for Flint
   ========================================================================== */

/* Dark Mode Overrides */
:root {
  /* Surfaces */
  --flint-bg-app: #181412;
  --flint-bg-sidebar: #1f1a17;
  --flint-bg-main: #241e1a;
  --flint-bg-card: #2c2520;
  --flint-bg-popover: #2c2520;
  --flint-bg-input: #1a1613;

  /* Borders */
  --flint-border-subtle: #2d241e;
  --flint-border-base: #3d322a;
  --flint-border-strong: #544438;

  /* Typography */
  --flint-text-primary: #fdf6e2;
  --flint-text-secondary: #e6dac3;
  --flint-text-muted: #a89984;

  /* Accent */
  --flint-accent: #f97316;
  --flint-accent-hover: #fb923c;
  --flint-accent-active: #ea580c;
  --flint-accent-subtle: rgba(249, 115, 22, 0.16);

  /* Code Syntax Blocks */
  --flint-code-bg: #1c1714;
  --flint-code-text: #fbeee0;
}

/* Light Mode Overrides (when user selects light appearance) */
.theme-light {
  --flint-bg-app: #fffbf5;
  --flint-bg-sidebar: #f7ede0;
  --flint-bg-main: #ffffff;
  --flint-bg-card: #f2e4d4;
  --flint-border-base: #e0ceba;

  --flint-text-primary: #3d2c1d;
  --flint-text-secondary: #5c432d;
  --flint-text-muted: #8c6e51;

  --flint-accent: #ea580c;
  --flint-accent-hover: #c2410c;
}
\`\`\`


## 4. Activating & Testing Your Theme

---

1. Open Flint.
2. Go to **Settings > Appearance** (\`Cmd+,\` / \`Ctrl+,\`).
3. Under the **Installed Themes** dropdown, select **Solar Ember**.
4. Flint immediately applies your CSS rules.
5. Keep \`styles.css\` open in your favorite code editor; each time you save, Flint updates the preview instantly.


## 5. Next Steps

---

- Explore the complete list of design tokens in [[CSS Variables & Design Tokens]].
- See how native controls adapt to your theme in [[Flint UI Components]].
- Ready to share your theme? Check out [[Submitting Themes]].
`,bp=`# Submitting Themes

Ready to share your custom theme with the Flint developer community? This guide outlines packaging requirements, preview standards, and sharing workflows.


## 1. Theme Submission Checklist

---

Before publishing your theme repository, verify that your theme package satisfies the following criteria:

- [ ] **Valid Manifest**: \`manifest.json\` contains valid JSON with \`"type": "theme"\`, a unique lowercase \`id\`, semantic \`version\`, and \`minAppVersion\`.
- [ ] **Both Modes Supported**: Includes accessible color definitions for both \`:root\` (dark mode) and \`.theme-light\` (light mode).
- [ ] **Native Design Tokens**: Relies on standard tokens from [[CSS Variables & Design Tokens]] instead of arbitrary hardcoded styles.
- [ ] **Preview Banner**: Contains a \`banner.png\` image (recommended: 800x500px, 16:10 ratio) showcasing your theme in action.
- [ ] **No Destructive Overrides**: Does not alter window controls, minimize/maximize buttons, or essential layout containers.


## 2. Directory Structure

---

A clean theme repository should follow this layout:

\`\`\`
solar-ember-theme/
├── manifest.json
├── styles.css
├── banner.png
├── README.md
└── LICENSE
\`\`\`


## 3. How Users Install Your Theme Today

---

Flint is currently developing an automated community directory. In the current release, users install themes manually by cloning or copying the theme folder into their local workspace:

\`\`\`bash
# Clone directly into the Hearth's themes folder

---
cd /path/to/my-hearth/.flint/themes/
git clone https://github.com/yvliet/solar-ember-theme.git solar-ember
\`\`\`

Once placed in \`.flint/themes/\`, the theme appears immediately under **Settings > Appearance** without requiring an application restart.


## 4. Community Showcase on GitHub

---

While the centralized marketplace registry is in development:

1. Push your theme repository to GitHub.
2. Tag your repository with the topics \`flint-theme\` and \`flint-notes\`.
3. Share your theme in the [Flint GitHub Discussions Showcase](https://github.com/yvliet/flint/discussions) with a screenshot and installation steps.

To learn more about developer standards, read [[Developer Policies & Guidelines]].
`,xp='# Foundations\n\nThe Foundations layer defines core color palettes, typography scales, elevation shadows, border radii, and accent states across the Flint desktop application.\n\n\n## 1. Surface & Background Tokens\n\n---\n\nFlint structures background tokens across a depth hierarchy:\n\n| Token | Dark Default | Light Default | Description |\n| :--- | :--- | :--- | :--- |\n| `--flint-bg-app` | `#141414` | `#f8fafc` | Outermost application shell and frame background. |\n| `--flint-bg-topbar` | `#0d0d0d` | `#f1f5f9` | Title bar and draggable window region. |\n| `--flint-bg-ribbon` | `#111111` | `#e2e8f0` | Left vertical Action Rail / Ribbon icon strip. |\n| `--flint-bg-sidebar` | `#151515` | `#f1f5f9` | Left and right collapsible navigation sidebars. |\n| `--flint-bg-sidebar-hover` | `#1f1f1f` | `#e2e8f0` | Hover state for tree items and sidebar tabs. |\n| `--flint-bg-sidebar-active` | `#272727` | `#cbd5e1` | Selected active state for tree items. |\n| `--flint-bg-main` | `#1c1c1c` | `#ffffff` | Primary editor and reading canvas. |\n| `--flint-bg-card` | `#222222` | `#f8fafc` | Settings cards, callouts, and info panels. |\n| `--flint-bg-card-hover` | `#2a2a2a` | `#f1f5f9` | Hover state for interactive cards. |\n| `--flint-bg-popover` | `#232323` | `#ffffff` | Floating dropdown menus and context menus. |\n| `--flint-bg-statusbar` | `#1f1f1f` | `#f1f5f9` | Bottom status bar strip. |\n\n\n## 2. Border Tokens\n\n---\n\n| Token | Dark Default | Light Default | Description |\n| :--- | :--- | :--- | :--- |\n| `--flint-border-subtle` | `#202020` | `#e2e8f0` | Faint divider lines, tab group separators, and outline guides. |\n| `--flint-border-base` | `#292929` | `#cbd5e1` | Standard component borders and card outlines. |\n| `--flint-border-strong` | `#383838` | `#94a3b8` | Emphasized dividers, active borders, and modal edges. |\n\n\n## 3. Typography & Text Colors\n\n---\n\n| Token | Dark Default | Light Default | Description |\n| :--- | :--- | :--- | :--- |\n| `--flint-text-primary` | `#ffffff` | `#0f172a` | Primary body text, headings, and active labels. |\n| `--flint-text-secondary` | `#dcddde` | `#334155` | Secondary text, file tree items, and subtitles. |\n| `--flint-text-muted` | `#888888` | `#64748b` | Muted captions, timestamps, and hotkey hints. |\n| `--flint-text-faint` | `#555555` | `#94a3b8` | Placeholders and disabled elements. |\n\n\n## 4. Accent & Brand Palette\n\n---\n\nThe default Flint brand accent is flame orange (`#ea580c`):\n\n| Token | Dark Default | Description |\n| :--- | :--- | :--- |\n| `--flint-accent` | `#ea580c` | Primary brand accent color. |\n| `--flint-accent-hover` | `#c2410c` | Hover state for primary controls. |\n| `--flint-accent-active` | `#9a3412` | Pressed / active state for accent buttons. |\n| `--flint-accent-subtle` | `rgba(234, 88, 12, 0.15)` | Subtle background tint for active selections. |\n\n\n## 5. Elevation & Box Shadows\n\n---\n\n| Token | Default Value | Description |\n| :--- | :--- | :--- |\n| `--flint-shadow-1` | `0 1px 3px 0 rgba(0, 0, 0, 0.25)` | Subtle card elevation and dropdown buttons. |\n| `--flint-shadow-2` | `0 4px 16px 0 rgba(0, 0, 0, 0.40)` | Floating popovers and search palettes. |\n| `--flint-shadow-3` | `0 8px 32px 0 rgba(0, 0, 0, 0.60)` | Modal dialogs and graph overlays. |\n\n\n## 6. System Font Stacks\n\n---\n\n```css\n/* UI and navigation controls */\n--font-interface: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";\n\n/* Long-form document reading and writing */\n--font-text: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n\n/* Monospace code blocks and inline syntax */\n--font-monospace: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;\n```\n',wp="# Window & Frame Variables\n\nVariables controlling the desktop window title bar, frameless window boundaries, draggable regions, native window controls, and global status bar.\n\n\n## 1. Title Bar & Header Strip\n\n---\n\n| Token | Dark Default | Light Default | Description |\n| :--- | :--- | :--- | :--- |\n| `--flint-bg-topbar` | `#0d0d0d` | `#f1f5f9` | Title bar background. |\n| `--flint-topbar-height` | `38px` | `38px` | Height of the draggable top title bar. |\n| `--flint-topbar-title-color` | `#ffffff` | `#0f172a` | Color of active Hearth name in title bar. |\n| `--flint-topbar-border` | `1px solid var(--flint-border-subtle)` | Bottom border dividing title bar from workspace. |\n\n\n## 2. Window Controls (Minimize / Maximize / Close)\n\n---\n\nFlint utilizes custom desktop title bar buttons that match the native platform feel:\n\n```css\n/* Custom title bar drag region */\n.titlebar-drag-region {\n  -webkit-app-region: drag;\n}\n\n/* Non-draggable controls inside titlebar */\n.titlebar-no-drag {\n  -webkit-app-region: no-drag;\n}\n```\n\n| Token | Value | Description |\n| :--- | :--- | :--- |\n| `--flint-window-btn-hover` | `rgba(255, 255, 255, 0.08)` | Background on window control hover. |\n| `--flint-window-close-hover`| `#ef4444` | Red background on window close button hover. |\n| `--flint-window-close-text` | `#ffffff` | Close icon color when hovered. |\n\n\n## 3. Left Action Rail / Ribbon\n\n---\n\nThe Action Rail provides quick-access launchers:\n\n| Token | Dark Default | Light Default | Description |\n| :--- | :--- | :--- | :--- |\n| `--flint-bg-ribbon` | `#111111` | `#e2e8f0` | Action rail icon column background. |\n| `--flint-ribbon-width` | `44px` | `44px` | Standard ribbon width. |\n| `--flint-ribbon-icon` | `#888888` | `#64748b` | Inactive ribbon icon color. |\n| `--flint-ribbon-icon-hover`| `#ffffff` | `#0f172a` | Hovered ribbon icon color. |\n| `--flint-ribbon-icon-active`| `var(--flint-accent)` | Active launcher icon color. |\n\n\n## 4. Status Bar Tokens\n\n---\n\nThe bottom status bar hosts live word counts, sync indicators, and extension widgets:\n\n| Token | Dark Default | Light Default | Description |\n| :--- | :--- | :--- | :--- |\n| `--flint-bg-statusbar` | `#1f1f1f` | `#f1f5f9` | Bottom status bar strip background. |\n| `--flint-statusbar-height`| `26px` | `26px` | Height of the status bar. |\n| `--flint-statusbar-text` | `#888888` | `#64748b` | Status bar text color. |\n| `--flint-statusbar-border` | `1px solid var(--flint-border-subtle)` | Top border of status bar. |\n",Sp="# Editor Variables\n\nCSS variables and styling rules for the TipTap 2.x and ProseMirror Live Preview editor engine, markdown typography, selection highlights, and code blocks.\n\n\n## 1. Document Canvas & Sizing\n\n---\n\n| Token | Default Value | Description |\n| :--- | :--- | :--- |\n| `--flint-bg-main` | `#1c1c1c` | Background of the active editor reading canvas. |\n| `--editor-font-size` | `16px` | Configurable base typography size. |\n| `--editor-line-height` | `1.75` | Proportional line height for readability. |\n| `--editor-max-width` | `760px` | Centered reading view column width. |\n\n\n## 2. Selection & Cursor Tokens\n\n---\n\n| Token | Dark Default | Description |\n| :--- | :--- | :--- |\n| `--flint-selection-bg` | `#4a4e57` | Background highlight for selected text. |\n| `--flint-selection-text` | `#ffffff` | Foreground color of selected text. |\n| `--flint-caret-color` | `var(--flint-accent)` | Blinking text insertion cursor color. |\n\n\n## 3. Headings & Markdown Typography\n\n---\n\n| Token | Dark Default | Sizing | Description |\n| :--- | :--- | :--- | :--- |\n| `--flint-h1-color` | `#ffffff` | `2.0em / font-bold` | Level 1 document headings (`#`). |\n| `--flint-h2-color` | `#ffffff` | `1.5em / font-semibold`| Level 2 section headings (`##`). |\n| `--flint-h3-color` | `#f0f0f0` | `1.25em / font-semibold`| Level 3 subsection headings (`###`). |\n| `--flint-h4-color` | `#d4d4d4` | `1.1em / font-semibold`| Level 4 headings (`####`). |\n\n\n## 4. Code Blocks & Monospace Syntax\n\n---\n\n| Token | Dark Default | Description |\n| :--- | :--- | :--- |\n| `--flint-code-bg` | `#242424` | Background for inline \\`code\\` and fenced code blocks. |\n| `--flint-code-text` | `#e5e7eb` | Monospaced text color. |\n| `--flint-code-border` | `1px solid var(--flint-border-base)` | Code block boundary border. |\n\n\n## 5. Wikilinks & Internal References\n\n---\n\n| Token | Value | Description |\n| :--- | :--- | :--- |\n| `--flint-link-color` | `var(--flint-accent)` | Internal `[[Wikilinks]]` and external anchors. |\n| `--flint-link-hover` | `var(--flint-accent-hover)` | Hovered link state. |\n| `--flint-link-visited`| `var(--flint-accent)` | Persistent visited link color. |\n| `--flint-link-decoration-color` | `var(--flint-border-strong)` | Underline decoration color. |\n\n\n## 6. Folding Gutters & Placeholders\n\n---\n\n| Token | Dark Default | Description |\n| :--- | :--- | :--- |\n| `--flint-fold-chevron` | `#666666` | Fold chevron icon color. |\n| `--flint-fold-chevron-hover` | `#ffffff` | Hovered fold chevron color. |\n| `--flint-fold-ellipsis-bg` | `#262626` | Background of collapsed placeholder badge (`...`). |\n| `--flint-fold-ellipsis-text` | `#999999` | Text of collapsed placeholder badge. |\n",kp="# Component Variables\n\nCSS variables and class tokens for interactive UI components: 3D tactile buttons (`flint-btn`), form inputs, checkboxes, toggles, select menus, dropdowns, and modal dialogs.\n\n\n## 1. Tactile 3D Buttons (`flint-btn`)\n\n---\n\nFlint features tactile buttons with crisp borders and visual depth:\n\n| Token | Dark Default | Description |\n| :--- | :--- | :--- |\n| `--flint-btn-bg` | `#232323` | Default button background. |\n| `--flint-btn-bg-hover` | `#2d2d2d` | Hover state background. |\n| `--flint-btn-border` | `#383838` | Button boundary border. |\n| `--flint-btn-border-bottom` | `#181818` | Darker bottom border producing tactile 3D depth. |\n| `--flint-btn-primary-bg` | `var(--flint-accent)` | Primary action button background. |\n| `--flint-btn-primary-hover` | `var(--flint-accent-hover)` | Primary action hover background. |\n\n```css\n.flint-btn {\n  background-color: var(--flint-btn-bg);\n  border: 1px solid var(--flint-btn-border);\n  border-bottom: 2px solid var(--flint-btn-border-bottom);\n  color: var(--flint-text-primary);\n  border-radius: 6px;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n```\n\n\n## 2. Text Inputs & Search Boxes\n\n---\n\n| Token | Dark Default | Description |\n| :--- | :--- | :--- |\n| `--flint-input-bg` | `#181818` | Text input background. |\n| `--flint-input-border` | `#2e2e2e` | Text input border. |\n| `--flint-input-focus-border`| `var(--flint-accent)` | Focused input outline color. |\n| `--flint-input-text` | `#ffffff` | Typed input text color. |\n| `--flint-input-placeholder`| `#666666` | Placeholder text color. |\n\n\n## 3. Toggle Switches & Checkboxes\n\n---\n\n| Token | Dark Default | Description |\n| :--- | :--- | :--- |\n| `--flint-toggle-bg-off` | `#2e2e2e` | Inactive toggle pill background. |\n| `--flint-toggle-bg-on` | `var(--flint-accent)` | Active toggle pill background. |\n| `--flint-toggle-knob` | `#ffffff` | Circular sliding knob color. |\n\n\n## 4. Modal Dialogs & Overlays\n\n---\n\n| Token | Dark Default | Description |\n| :--- | :--- | :--- |\n| `--flint-modal-backdrop` | `rgba(0, 0, 0, 0.70)` | Darkened background overlay. |\n| `--flint-modal-bg` | `#1e1e1e` | Modal surface background. |\n| `--flint-modal-border` | `#383838` | Modal outer border. |\n| `--flint-modal-shadow` | `var(--flint-shadow-3)`| 3D drop shadow. |\n\n\n## 5. Dropdowns & Context Menus\n\n---\n\n| Token | Dark Default | Description |\n| :--- | :--- | :--- |\n| `--flint-menu-bg` | `#232323` | Context menu container background. |\n| `--flint-menu-border` | `#363636` | Menu container border. |\n| `--flint-menu-item-hover` | `rgba(255, 255, 255, 0.08)` | Hovered menu row background. |\n",Cp=`# Plugin & Extension CSS Variables

Standards and design tokens for styling custom extension UI components, dynamic React portal slots, sidebar views, settings tabs, and status bar badges.


## 1. Scoped Extension Styling

---

Extensions should scope their CSS rules to prevent unintended pollution of host application styles:

\`\`\`css
/* Good: Scoped to the extension unique identifier */
.flint-ext-word-counter {
  background-color: var(--flint-bg-card);
  border: 1px solid var(--flint-border-base);
  border-radius: 6px;
  padding: 8px 12px;
}

.flint-ext-word-counter .counter-badge {
  color: var(--flint-text-secondary);
  font-size: 0.85em;
}
\`\`\`


## 2. Dynamic Portal Slot Tokens

---

When mounting into portal slots (\`workspace:root\`, \`editor:floating-toolbar\`, \`editor:minimap\`), use standard host layout tokens:

| Token | Description |
| :--- | :--- |
| \`--flint-portal-z-floating\` | \`z-index: 40\`: Floating toolbars and active note HUDs. |
| \`--flint-portal-z-modal\` | \`z-index: 100\`: Full-screen modals and lightboxes. |
| \`--flint-portal-z-popover\` | \`z-index: 60\`: Dropdown menus and slash command menus. |


## 3. Settings Preferences Tokens

---

When implementing a custom settings tab via \`this.registerSettingTab()\`:

| Token | Dark Default | Description |
| :--- | :--- | :--- |
| \`--flint-setting-row-border\` | \`var(--flint-border-subtle)\` | Divider between setting items. |
| \`--flint-setting-title-color\`| \`var(--flint-text-primary)\` | Setting title text color. |
| \`--flint-setting-desc-color\` | \`var(--flint-text-muted)\` | Setting description subtext color. |


## 4. Status Bar Extension Badges

---

| Token | Dark Default | Description |
| :--- | :--- | :--- |
| \`--flint-status-badge-bg\` | \`#282828\` | Background of pill badges in the status bar. |
| \`--flint-status-badge-text\` | \`#b3b3b3\` | Foreground text in status bar badges. |
`,Tp=`# Publish & Theme CSS Variables

Tokens and asset guidelines for theme distribution, marketplace previews, banner cards, and export styles.


## 1. Marketplace Preview Cards

---

When themes or extensions appear in the Flint Community Marketplace, cards format using these CSS tokens:

| Token | Dark Default | Description |
| :--- | :--- | :--- |
| \`--flint-market-card-bg\` | \`#1c1c1c\` | Background of marketplace item card. |
| \`--flint-market-card-border\` | \`#2d2d2d\` | Border around item card. |
| \`--flint-market-card-hover\` | \`#242424\` | Hover background. |
| \`--flint-market-tag-bg\` | \`#292929\` | Background of classification pill tags. |
| \`--flint-market-tag-text\` | \`#b8b8b8\` | Tag text color. |


## 2. Banner Image Standards

---

Themes and extensions can bundle a \`banner.png\` image for marketplace display:

- **Dimensions**: \`800 x 500 px\` (16:10 aspect ratio) or \`400 x 250 px\` thumbnail.
- **Format**: High-DPI PNG or optimized WebP.
- **Placement**: Placed in the root directory or \`assets/banner.png\`.


## 3. Print & PDF Export Styling

---

Flint includes clean \`@media print\` rules:

\`\`\`css
@media print {
  body {
    background: #ffffff !important;
    color: #000000 !important;
  }
  .titlebar,
  .sidebar-container,
  .statusbar,
  .action-rail {
    display: none !important;
  }
}
\`\`\`
`,Ap=`# About Styling in Flint

Flint provides a clean, modular styling architecture built on standard CSS Custom Properties (design tokens). Flint operates on a live hot-reloading architecture: when you edit your theme's \`styles.css\` file, changes reflect instantly across the active workspace.


## 1. The Design Token Philosophy

---

Flint avoids hardcoded color hex values and proprietary CSS runtimes. Every visual element, from application windows and navigation trees to TipTap editor blocks and status widgets, consumes standardized \`--flint-*\` CSS custom properties.

### Key Benefits
- **Zero Layout Shifts**: Design tokens evaluate synchronously in the browser engine.
- **Dark & Light Mode Support**: Themes provide definitions for dark mode (\`:root\`) and light mode (\`.theme-light\`).
- **Seamless Extension Integration**: Extensions and plugins inherit host design tokens automatically.


## 2. Token Cascade & Scopes

---

Flint resolves styling rules using a clear cascade:

| Cascade Priority | Token Scope & Target Layer |
|:---|:---|
| **Level 1: Host Base Defaults** | \`flintDark.ts\` / \`flintLight.ts\` fallback palette for standard core views |
| **Level 2: Active Theme Overrides** | \`.flint/themes/<theme>/theme.json\` + \`styles.css\` custom palette tokens |
| **Level 3: User Customizations** | Settings UI accent color selection, interface scale, and custom fonts |
| **Level 4: Extension Custom Scopes** | Plugin-specific CSS namespaces (\`.flint-ext-*\`) inheriting standard variables |


## 3. Dark & Light Theme Structure

---

A standard theme stylesheet defines rules for both appearance modes:

\`\`\`css
/* ==========================================================================
   Dark Mode (Default Root Scope)
   ========================================================================== */
:root {
  --flint-bg-app: #141414;
  --flint-bg-sidebar: #181818;
  --flint-bg-main: #1e1e1e;
  --flint-bg-card: #242424;
  --flint-border-base: #2e2e2e;
  --flint-text-primary: #ffffff;
  --flint-text-secondary: #d4d4d4;
  --flint-accent: #ea580c;
}

/* ==========================================================================
   Light Mode (Applied when user switches appearance to Light)
   ========================================================================== */
.theme-light {
  --flint-bg-app: #f8fafc;
  --flint-bg-sidebar: #f1f5f9;
  --flint-bg-main: #ffffff;
  --flint-bg-card: #f8fafc;
  --flint-border-base: #e2e8f0;
  --flint-text-primary: #0f172a;
  --flint-text-secondary: #334155;
  --flint-accent: #ea580c;
}
\`\`\`


## 4. Instant UI Responsiveness

---

All micro-interactions in Flint (buttons, toggles, menus, tabs) render with zero artificial transition delays for an instant desktop feel.


## 5. Related Reading

---

- [[Foundations]]: Colors, typography, elevations, and spacing tokens.
- [[Window Variables]]: Window titlebars, frames, and draggable regions.
- [[Editor Variables]]: Markdown reading canvas and TipTap typography tokens.
- [[Component Variables]]: Form controls, buttons, cards, and modal dialogs.
`,Mp=`# TypeScript API: Manifest Specification

Every Flint extension and theme must include a \`manifest.json\` file in its root folder. This document details the TypeScript type definitions, JSON schema, and validation rules.


## 1. TypeScript Interface

---

\`\`\`typescript
export interface ExtensionManifest {
  /** Unique lowercase hyphenated identifier (e.g., 'word-counter') */
  id: string;

  /** Human-readable display title */
  name: string;

  /** Semantic version string (e.g., '1.0.0') */
  version: string;

  /** Brief overview of functionality (40-160 characters) */
  description: string;

  /** Minimum host application version required (e.g., '0.2.0') */
  minAppVersion?: string;

  /** Author or maintainer name */
  author?: string;

  /** Link to author's GitHub profile or website */
  authorUrl?: string;

  /** Classification tags for marketplace search */
  tags?: string[];

  /** Icon name from standard catalog or SVG string */
  icon?: string;

  /** Relative path or URL to preview banner */
  bannerImage?: string;

  /** Full markdown readme shown in details view */
  readme?: string;

  /** Package type: 'extension' (default) or 'theme' */
  type?: 'extension' | 'theme';

  /** Reserved for internal host extensions */
  isCore?: boolean;
}
\`\`\`


## 2. Example \`manifest.json\`

---

\`\`\`json
{
  "id": "word-counter",
  "name": "Live Reading Time Counter",
  "version": "1.0.0",
  "minAppVersion": "0.1.0",
  "description": "Calculates estimated reading time for your active note in the status bar.",
  "author": "Yuliet Li",
  "authorUrl": "https://github.com/yvliet",
  "tags": ["productivity", "writing"],
  "icon": "TimerIcon"
}
\`\`\`


## 3. Validation Rules

---

1. **ID Format**: Must match \`^[a-z0-9]+(-[a-z0-9]+)*$\` (kebab-case only).
2. **Version**: Must strictly comply with SemVer (\`MAJOR.MINOR.PATCH\`).
3. **Core Isolation**: Community extensions must omit \`isCore\` or set it to \`false\`.
`,Ep=`# TypeScript API: Versioning & Compatibility

Flint uses strict Semantic Versioning (\`MAJOR.MINOR.PATCH\`) to guarantee API compatibility and prevent breaking changes from affecting installed community extensions and themes.


## 1. The \`minAppVersion\` Field

---

Extensions specify their minimum required host application version in \`manifest.json\`:

\`\`\`json
{
  "minAppVersion": "0.2.0"
}
\`\`\`

### Compatibility Check Logic
- If the current Flint version is \`< minAppVersion\`, Flint displays an incompatibility badge in **Settings > Extensions** and does not execute \`onload()\`.
- If \`minAppVersion\` is omitted, Flint defaults to \`"0.1.0"\`.


## 2. API Version Stability Matrix

---

| API Surface | Stability Guarantee | Breaking Change Policy |
| :--- | :--- | :--- |
| **\`Extension\` Base Class** | Stable | Guaranteed backwards-compatible across minor versions. |
| **\`app.workspace\`** | Stable | Deprecated methods provide a 2-minor-version grace period. |
| **\`app.vault\`** | Stable | Asynchronous atomic file operations remain stable. |
| **\`app.events\` (EventBus)** | Stable | Event payloads are strictly additive. |
| **\`this.defineTable\` (SQLite)**| Stable | Columns automatically migrate with non-destructive ALTERs. |
| **\`this.registerTool\` (MCP)** | Stable | Compliant with Model Context Protocol standards. |


## 3. Deprecation Best Practices

---

When an API is marked for deprecation:
1. Flint logs a runtime warning in the developer console.
2. The method remains functional until the next major version bump (\`1.0.0\`).
3. Extensions can feature-detect capabilities:

\`\`\`typescript
if (typeof this.app.workspace.showInputDialog === 'function') {
  await this.app.workspace.showInputDialog({ title: 'Enter Name' });
} else {
  // Fallback for older versions
}
\`\`\`
`,Dp="# TypeScript API: `Extension` Base Class\n\nThe `Extension` base class (`src/sdk/Extension.ts`) is the primary entry point for all Flint plugins. It handles automatic lifecycle disposal, registry binding, and EventBus tracking.\n\n\n## 1. Class Overview\n\n---\n\n```typescript\nimport { Extension, FlintApp, CommandItem, StatusBarItem } from 'flint';\n\nexport default class MyExtension extends Extension {\n  /**\n   * Called once when the extension is initialized or enabled.\n   */\n  async onload(): Promise<void> {\n    console.log(`[${this.manifest.name}] loaded.`);\n  }\n\n  /**\n   * Called when the extension is disabled or uninstalled.\n   * Auto-registered UI elements and events are cleaned up automatically.\n   */\n  async onunload(): Promise<void> {\n    console.log(`[${this.manifest.name}] unloaded.`);\n  }\n}\n```\n\n\n## 2. Core Registration Methods\n\n---\n\n| Method | Signature | Description |\n| :--- | :--- | :--- |\n| `addCommand` | `(command: CommandItem) => void` | Registers an action in Command Palette (`Ctrl+K`). |\n| `addActionRailIcon` | `(id, icon, tooltip, callback, order?) => void` | Injects an icon into the left Action Rail. |\n| `addStatusBarItem` | `(item: StatusBarItem) => HTMLElement` | Adds a widget to the bottom status bar. |\n| `registerSettingTab`| `(tab: ExtensionSettingTab) => void` | Adds a configuration panel in Settings. |\n| `registerContextMenuItem`| `(item: ContextMenuItem) => void` | Injects right-click context menu options. |\n| `registerPortalSlot`| `(slot: PortalSlotDefinition) => void` | Injects React components into UI portal slots. |\n| `registerTool` | `(tool: McpToolDefinition) => void` | Exposes a Model Context Protocol tool to AI agents. |\n| `registerEditorPlugin` | `(plugin: EditorPluginDefinition) => void` | Bridges ProseMirror / TipTap editor extensions. |\n| `defineTable` | `(schema: TableSchema) => Promise<TableHandle>` | Creates declarative SQLite tables with cascade rules. |\n| `registerWorkerTask` | `(taskName, handler) => void` | Offloads CPU tasks to background Web Workers. |\n| `onEvent` / `registerEvent` | `(event, listener) => Disposable` | Listens to EventBus events with auto-cleanup. |\n| `loadData` | `() => Promise<any>` | Loads persisted plugin JSON settings. |\n| `saveData` | `(data: any) => Promise<void>` | Saves updated plugin JSON settings. |\n",zp=`# TypeScript API: \`FlintApp\` Container

The \`FlintApp\` instance (\`this.app\`) provides extensions with controlled, modular access to workspace services, document operations, vault files, and system events.


## 1. Interface Definition

---

\`\`\`typescript
export interface FlintApp {
  /** Document navigation, tab management, dialogs, and notifications */
  workspace: WorkspaceAPI;
  /** Active Hearth directory, recent vaults, and workspace switching */
  hearth: HearthAPI;
  /** File read, write, rename, and directory operations */
  vault: VaultAPI;
  /** In-memory and disk SQLite database operations */
  db: ExtensionDatabaseManager;
  /** Central typed event bus */
  events: EventBus;
  /** Application settings manager */
  settings: SettingsAPI;
}
\`\`\`


## 2. Workspace API (\`app.workspace\`)

---

- \`app.workspace.activeDocument\`: Returns currently open \`DocumentItem\` or \`null\`.
- \`app.workspace.openDocument(idOrPath: string)\`: Opens a note in the active editor.
- \`app.workspace.showToast(message: string, type?: 'info' | 'success' | 'warning' | 'error')\`: Displays a non-blocking toast.
- \`app.workspace.showConfirmDialog(config: ConfirmDialogConfig)\`: Opens a confirmation modal.
- \`app.workspace.showInputDialog(config: InputDialogConfig)\`: Prompts user for text input.


## 3. Vault API (\`app.vault\`)

---

- \`app.vault.read(path: string): Promise<string>\`: Reads a raw UTF-8 file.
- \`app.vault.write(path: string, content: string): Promise<void>\`: Atomically writes a note to disk.
- \`app.vault.delete(path: string): Promise<void>\`: Moves a note to the \`.trash/\` safety folder.
- \`app.vault.readNote(documentId: string)\`: Retrieves note content and parsed frontmatter.
`,Np=`# TypeScript API: Relational SQLite (\`defineTable\`)

Flint enables extensions to declare type-safe relational SQLite tables directly in TypeScript, complete with automatic column migrations, version tracking, and cascade cleanup.


## 1. Defining a Table

---

\`\`\`typescript
this.myTable = await this.defineTable({
  tableName: 'reading_analytics',
  columns: [
    { name: 'documentId', type: 'TEXT', notNull: true, onDelete: 'cascade' },
    { name: 'wordCount', type: 'INTEGER', notNull: true },
    { name: 'estimatedMinutes', type: 'REAL', notNull: true },
    { name: 'recordedAt', type: 'INTEGER', notNull: true },
  ],
  indexes: [
    { name: 'idx_analytics_doc', columns: ['documentId'] },
  ],
});
\`\`\`


## 2. Table Operations

---

### Insert
\`\`\`typescript
await this.myTable.insert({
  documentId: 'note-123',
  wordCount: 850,
  estimatedMinutes: 4.25,
  recordedAt: Date.now(),
});
\`\`\`

### Query / Select
\`\`\`typescript
const rows = await this.myTable.select({
  where: { documentId: 'note-123' },
  orderBy: 'recordedAt DESC',
  limit: 10,
});
\`\`\`

### Update & Delete
\`\`\`typescript
await this.myTable.update(
  { wordCount: 900 },
  { where: { documentId: 'note-123' } }
);

await this.myTable.delete({
  where: { documentId: 'note-123' }
});
\`\`\`


## 3. Automatic Cascade Cleanup

---

When notes are moved to \`.trash/\` or deleted, columns configured with \`onDelete: 'cascade'\` automatically clean up associated rows.
`,Rp=`# TypeScript API: Model Context Protocol (MCP)

Every extension managing queryable state can expose native AI agent tools and prompts using standard Zod schemas via \`this.registerTool()\`.


## 1. Registering an AI Tool

---

\`\`\`typescript
import { z } from 'flint';

this.registerTool({
  name: 'calculate_reading_metrics',
  description: 'Calculates word count, reading time, and complexity for a document.',
  schema: z.object({
    documentId: z.string().describe('Target document identifier'),
    targetWpm: z.number().default(200).describe('Words per minute reading baseline'),
  }),
  handler: async ({ documentId, targetWpm }, app) => {
    const doc = await app.vault.readNote(documentId);
    const words = (doc?.content || '').split(/\\s+/).filter(Boolean).length;
    const minutes = Math.ceil(words / targetWpm);

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ documentId, words, estimatedMinutes: minutes }),
        },
      ],
    };
  },
});
\`\`\`


## 2. Registering an AI Workflow Prompt

---

\`\`\`typescript
this.registerPrompt({
  name: 'summarize_reading_digest',
  description: 'Prepares a structured synthesis prompt for the user active reading list.',
  arguments: [
    { name: 'category', description: 'Category filter', required: false },
  ],
  getMessages: async ({ category }, app) => {
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: \`Please generate a reading digest summary for category: \${category || 'all'}.\`,
          },
        },
      ],
    };
  },
});
\`\`\`
`,Lp=`# TypeScript API: Dynamic React Portal Slots

Flint allows extensions to mount React components directly into host layout regions (\`workspace:root\`, \`editor:floating-toolbar\`, \`editor:minimap\`) without DOM mutation or CSS monkey-patching.


## 1. Registering a Portal Slot

---

\`\`\`typescript
import React from 'react';
import { PortalSlotLocation } from 'flint';

this.registerPortalSlot({
  id: 'reading-time-pill',
  slot: 'editor:floating-toolbar',
  order: 10,
  when: (ctx) => ctx.viewMode === 'Visible' && !!ctx.document,
  render: (ctx) => {
    const words = (ctx.document?.content || '').split(/\\s+/).filter(Boolean).length;
    return (
      <div className="bg-surface border border-border px-2 py-0.5 rounded text-xs text-muted shadow-sm">
        ⏱️ {Math.ceil(words / 200)} min read
      </div>
    );
  },
});
\`\`\`


## 2. Available Host Slot Locations

---

- \`workspace:root\`: Full viewport modal overlays, HUD widgets, and floating draw panels.
- \`editor:floating-toolbar\`: Docked above the active editor selection or floating right.
- \`editor:minimap\`: Vertical right-side outline / overview strip next to editor.
- \`editor:viewport-overlay\`: In-editor canvas decorations.
- \`sidebar:left:bottom\`: Docked below the left file tree.
- \`sidebar:right:bottom\`: Docked below the backlinks outline panel.
`,Op=`# TypeScript API: Web Worker Task Pool

To preserve sub-8ms typing latency on massive documents, CPU-intensive algorithms (syntax clustering, geometry triangulation, AST parsing) can execute in background Web Workers.


## 1. Registering a Worker Task

---

\`\`\`typescript
this.registerWorkerTask('heavy-calculation', (input: { numbers: number[] }, emitEvent) => {
  let sum = 0;
  for (let i = 0; i < input.numbers.length; i++) {
    sum += input.numbers[i];
    if (i % 1000 === 0) {
      emitEvent('calc:progress', { percent: (i / input.numbers.length) * 100 });
    }
  }
  return sum;
});
\`\`\`


## 2. Executing Off-Thread Tasks

---

\`\`\`typescript
const total = await this.runTask('heavy-calculation', {
  numbers: [1, 2, 3, 4, 5, 1000],
});

console.log('Result from off-thread worker:', total);
\`\`\`
`,Bp=`# Flint UI Components

Flint provides a suite of native UI primitives and setting builders directly via the Flint Extension SDK (\`src/sdk/index.ts\` and \`src/components/ui/\`). All components are styled with Flint's design tokens and follow the native desktop responsiveness standard. They render, hover, and toggle instantly with zero artificial transition delays.

Extension authors should use these components to build custom settings tabs, modal dialogs, status bar widgets, and workspace panels that seamlessly blend with the host application.


## 1. Importing UI Primitives

---

All UI components and their TypeScript prop types are exported from the Flint SDK:

\`\`\`typescript
import {
  Button,
  TextInput,
  Toggle,
  Select,
  Slider,
  SettingCard,
  SettingItem,
  SettingBuilder,
} from 'flint';
\`\`\`


## 2. Button Component

---

The \`Button\` component provides standard desktop button behaviors with unified sizing, variant styling, and keyboard accessibility.

:::preview button

\`\`\`typescript
import React from 'react';
import { Button } from 'flint';

export const MyActionToolbar: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="primary"
        size="md"
        onClick={() => console.log('Saved')}
      >
        Save Note
      </Button>

      <Button
        variant="secondary"
        size="md"
        onClick={() => console.log('Exported')}
      >
        Export
      </Button>

      <Button
        variant="danger"
        size="sm"
        onClick={() => console.log('Deleted')}
      >
        Delete
      </Button>
    </div>
  );
};
\`\`\`

### Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| \`variant\` | \`'primary' \\| 'secondary' \\| 'danger' \\| 'ghost' \\| 'link'\` | \`'secondary'\` | Visual style variant. |
| \`size\` | \`'sm' \\| 'md' \\| 'lg'\` | \`'md'\` | Padding and font sizing. \`sm\`: 26px height, \`md\`: 32px height, \`lg\`: 38px height. |
| \`disabled\` | \`boolean\` | \`false\` | Disables pointer interactions and dims opacity. |
| \`icon\` | \`React.ReactNode\` | \`undefined\` | Optional icon rendered to the left of the button label. |
| \`onClick\` | \`(e: React.MouseEvent) => void\` | \`undefined\` | Click handler callback. |


## 3. TextInput Component

---

\`TextInput\` is a clean, focused single-line text input field supporting clear buttons, shortcut badges, and validation states.

:::preview textinput

\`\`\`typescript
import React, { useState } from 'react';
import { TextInput } from 'flint';

export const SearchField: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <TextInput
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Filter tasks..."
      clearable
      onClear={() => setQuery('')}
      shortcutBadge="Ctrl+F"
    />
  );
};
\`\`\`

### Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| \`value\` | \`string\` | Required | Current string value of the input. |
| \`onChange\` | \`(e: React.ChangeEvent<HTMLInputElement>) => void\` | Required | Change event handler. |
| \`placeholder\` | \`string\` | \`''\` | Input placeholder text. |
| \`clearable\` | \`boolean\` | \`false\` | Displays a quick clear (\`x\`) button when value is non-empty. |
| \`onClear\` | \`() => void\` | \`undefined\` | Triggered when the user clicks the clear button. |
| \`shortcutBadge\` | \`string\` | \`undefined\` | Displays an inline keyboard shortcut badge (e.g., \`'Esc'\`). |
| \`error\` | \`string\` | \`undefined\` | Highlights input border in danger red and displays error caption. |


## 4. Toggle / ToggleSwitch Component

---

The \`Toggle\` component provides instant, accessible boolean switches. In accordance with Flint's desktop feel, toggles transition state immediately without sluggish frame animations.

:::preview toggle

\`\`\`typescript
import React, { useState } from 'react';
import { Toggle } from 'flint';

export const AutoSaveSetting: React.FC = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <Toggle
      checked={enabled}
      onChange={(val) => setEnabled(val)}
      label="Enable Auto-Save"
      description="Save document changes to disk after 300ms idle"
    />
  );
};
\`\`\`

### Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| \`checked\` | \`boolean\` | Required | Active toggle state. |
| \`onChange\` | \`(checked: boolean) => void\` | Required | State change callback. |
| \`label\` | \`string\` | \`undefined\` | Main setting title. |
| \`description\` | \`string\` | \`undefined\` | Optional subtext displayed below the title. |
| \`disabled\` | \`boolean\` | \`false\` | Disables interaction. |


## 5. Select / CustomSelect Component

---

A native desktop dropdown selector matching Flint's theme popovers and keyboard navigation.

:::preview select

\`\`\`typescript
import React, { useState } from 'react';
import { Select, SelectOption } from 'flint';

const VIEW_OPTIONS: SelectOption[] = [
  { value: 'source', label: 'Raw Markdown' },
  { value: 'live', label: 'Live Preview' },
  { value: 'reading', label: 'Reading View' },
];

export const ViewModeSelector: React.FC = () => {
  const [mode, setMode] = useState('live');

  return (
    <Select
      value={mode}
      options={VIEW_OPTIONS}
      onChange={(newVal) => setMode(newVal)}
    />
  );
};
\`\`\`


## 6. Slider Component

---

A continuous or stepped numerical range input with a real-time value display badge.

:::preview slider

\`\`\`typescript
import React, { useState } from 'react';
import { Slider } from 'flint';

export const SpacingSetting: React.FC = () => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <Slider
      value={fontSize}
      min={12}
      max={24}
      step={1}
      unit="px"
      onChange={(val) => setFontSize(val)}
    />
  );
};
\`\`\`


## 7. SettingCard & SettingItem

---

Settings pages in Flint follow an organized card-and-row structure. \`SettingCard\` acts as a group container, while \`SettingItem\` pairs a title and description with an interactive control slot.

:::preview settingbuilder

\`\`\`typescript
import React, { useState } from 'react';
import { SettingCard, SettingItem, Toggle, TextInput } from 'flint';

export const ExtensionSettingsTab: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [debugMode, setDebugMode] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <SettingCard title="General Configuration" description="Configure core parameters for this extension.">
        <SettingItem
          name="API Key"
          description="Your personal API access token."
        >
          <TextInput
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="flint_..."
          />
        </SettingItem>

        <SettingItem
          name="Debug Logging"
          description="Print detailed event traces to the developer console."
        >
          <Toggle
            checked={debugMode}
            onChange={(val) => setDebugMode(val)}
          />
        </SettingItem>
      </SettingCard>
    </div>
  );
};
\`\`\`


## 8. Fluent SettingBuilder API

---

For extensions that prefer a procedural, Obsidian-style settings tab configuration without writing raw JSX, Flint provides the \`SettingBuilder\`:

\`\`\`typescript
import { Extension, ExtensionSettingTab, SettingBuilder, FlintApp } from 'flint';

export class MySettingsTab implements ExtensionSettingTab {
  id = 'my-extension-settings';
  name = 'Word Counter Settings';

  display(containerEl: HTMLElement, app: FlintApp): void {
    containerEl.innerHTML = ''; // Clear container

    new SettingBuilder(containerEl)
      .setName('Status Bar Visibility')
      .setDesc('Show live word count indicator in the bottom status bar.')
      .addToggle((toggle) => {
        toggle
          .setValue(true)
          .onChange((val) => {
            console.log('Status bar visibility toggled:', val);
          });
      });

    new SettingBuilder(containerEl)
      .setName('Target Word Count')
      .setDesc('Daily writing goal in words.')
      .addText((text) => {
        text
          .setPlaceholder('500')
          .setValue('1000')
          .onChange((val) => {
            console.log('New target:', val);
          });
      });

    new SettingBuilder(containerEl)
      .setName('Reading Speed')
      .setDesc('Words per minute used for reading time calculations.')
      .addSlider((slider) => {
        slider
          .setLimits(100, 400, 25)
          .setValue(200)
          .onChange((val) => {
            console.log('Reading speed:', val);
          });
      });
  }
}
\`\`\`


## 9. Application Modal Dialogs

---

Flint provides built-in dialog helpers on \`app.workspace\` for user confirmations and prompts:

- \`app.workspace.showConfirmDialog({ title, message, confirmText, onConfirm })\`: Displays an alert modal with confirm and cancel buttons.
- \`app.workspace.showInputDialog({ title, message, placeholder, onConfirm })\`: Requests user text input.
- \`app.workspace.showToast(message, 'info' | 'success' | 'warning' | 'error')\`: Displays non-intrusive toast alerts in the bottom-right corner.

To learn how to register custom settings tabs, see [[Extension Points Reference]]. To view the underlying design tokens, explore [[CSS Variables & Design Tokens]].
`,Hp=`# Flint SDK API Reference

The Flint Extension SDK (\`src/sdk/index.ts\`) is the official public programming interface for building extensions and themes. It exposes base classes, typed service registries, event subscribers, and data models while maintaining strict separation from host application internals.


## 1. The \`Extension\` Base Class

---

Every Flint extension extends the \`Extension\` (or \`Plugin\`) base class. It provides automated resource tracking so that all commands, event listeners, status bar widgets, and tools registered through its methods are automatically disposed of when the extension is disabled or reloaded.

\`\`\`typescript
import { Extension, FlintApp } from 'flint';

export default class MyCustomExtension extends Extension {
  /**
   * Called once when the extension is loaded into the active Hearth.
   * Initialize state, register commands, bind event listeners, and register MCP tools here.
   */
  async onload(): Promise<void> {
    console.log('Extension loaded in Hearth:', this.app.hearth.activeHearthPath);
  }

  /**
   * Called when the extension is disabled, uninstalled, or when Flint is switching Hearths.
   * Clean up non-tracked resources, custom WebSockets, or worker threads here.
   */
  async onunload(): Promise<void> {
    console.log('Extension cleanly unloaded.');
  }
}
\`\`\`

### Core Registration Methods on \`Extension\`

| Method | Description |
| :--- | :--- |
| \`this.addCommand(command: CommandItem): void\` | Registers an action into the Command Palette (\`Ctrl+K\` / \`Cmd+K\`). |
| \`this.addActionRailIcon(id, icon, tooltip, callback, order?): void\` | Adds a high-frequency icon trigger to the left vertical Action Rail / Ribbon. |
| \`this.addStatusBarItem(item: StatusBarItem): HTMLElement\` | Adds a status indicator or live counter to the bottom status bar. |
| \`this.addSettingTab(tab: ExtensionSettingTab): void\` | Injects a custom configuration panel into Flint Settings. |
| \`this.registerEvent(disposable: Disposable): void\` | Binds an EventBus listener and tracks it for automatic disposal. |
| \`this.registerTool(tool: McpToolDefinition): void\` | Exposes a Model Context Protocol tool to AI agents. |
| \`this.registerView(viewType, factory): void\` | Registers a custom main content view or tab mode. |
| \`this.registerPortalSlot(slot: PortalSlotDefinition): void\` | Injects React components into dynamic application portal slots. |
| \`this.registerWorkerTask(task: WorkerTaskDefinition): void\` | Registers an off-thread background Web Worker routine. |


## 2. The \`FlintApp\` Container

---

Extensions access host capabilities through the \`FlintApp\` instance (\`this.app\`).

\`\`\`typescript
export interface FlintApp {
  /** Document navigation, tab management, dialogs, and notifications */
  workspace: WorkspaceAPI;
  /** Active Hearth directory, recent vaults, and workspace switching */
  hearth: HearthAPI;
  /** File read, write, rename, and directory operations */
  vault: VaultAPI;
  /** In-memory and disk SQLite database operations */
  db: ExtensionDatabaseManager;
  /** Central typed event bus */
  events: EventBus;
  /** Application settings manager */
  settings: SettingsAPI;
}
\`\`\`

### Workspace API (\`app.workspace\`)

- \`app.workspace.activeDocument\`: Retrieves the currently opened \`DocumentItem\` or \`null\`.
- \`app.workspace.openDocument(idOrPath: string)\`: Opens a document in the active editor tab.
- \`app.workspace.showToast(message: string, type?: 'info' | 'success' | 'warning' | 'error')\`: Shows a non-blocking toast notification.
- \`app.workspace.showConfirmDialog(config: ConfirmDialogConfig)\`: Opens an interactive confirmation modal dialog.
- \`app.workspace.showInputDialog(config: InputDialogConfig)\`: Opens a text prompt dialog.

### Hearth API (\`app.hearth\`)

- \`app.hearth.activeHearthPath\`: Absolute filesystem path to the currently opened Hearth.
- \`app.hearth.switchHearth(path: string)\`: Programmatically switches the active Hearth.
- \`app.hearth.getRecentHearths()\`: Returns a list of recently opened Hearth paths and names.

### Vault API (\`app.vault\`)

- \`app.vault.read(path: string): Promise<string>\`: Reads a raw UTF-8 file from the Hearth.
- \`app.vault.write(path: string, content: string): Promise<void>\`: Writes text to disk.
- \`app.vault.delete(path: string): Promise<void>\`: Moves a file to the Hearth \`.trash/\` folder or deletes it.


## 3. The \`EventBus\`

---

The \`EventBus\` enables loosely coupled communication between the Flint core and extensions. Always subscribe through \`this.registerEvent(this.app.events.on(...))\` to prevent memory leaks:

\`\`\`typescript
// Subscribing to document creation
this.registerEvent(
  this.app.events.on('document:created', ({ documentId, title, path }) => {
    console.log(\`Note created: \${title} (\${path})\`);
  })
);

// Subscribing to document changes
this.registerEvent(
  this.app.events.on('document:changed', ({ documentId, content }) => {
    this.recomputeMetrics(documentId, content);
  })
);

// Subscribing to Hearth switching
this.registerEvent(
  this.app.events.on('hearth:switched', ({ hearthPath }) => {
    this.reloadExtensionState(hearthPath);
  })
);
\`\`\`

### Common Workspace Events

| Event Name | Payload | Trigger Condition |
| :--- | :--- | :--- |
| \`document:created\` | \`{ documentId, path, title }\` | A new markdown note is created. |
| \`document:changed\` | \`{ documentId, content }\` | Editor content is edited by the user. |
| \`document:saved\` | \`{ documentId, path }\` | Document is debounced and persisted to disk. |
| \`document:deleted\` | \`{ documentId, path }\` | Note is removed from the Hearth. |
| \`hearth:switched\` | \`{ hearthPath }\` | User switches to a different Hearth folder. |
| \`tag:renamed\` | \`{ oldTag, newTag }\` | A tag taxonomy is refactored across notes. |


## 4. Inversion of Control: \`SlotRegistry\`

---

Flint provides dynamic React portal slots that allow extensions to mount UI components directly into native application shell regions:

\`\`\`typescript
import { PortalSlotLocation } from 'flint';

this.registerPortalSlot({
  id: 'header-reading-timer',
  location: 'editor:header' as PortalSlotLocation,
  order: 10,
  component: ({ activeDoc }) => {
    if (!activeDoc) return null;
    return <div className="text-xs text-neutral-400">Estimated: 3 min</div>;
  },
});
\`\`\`

### Available Portal Locations

- \`window:header:left\`: Title bar left items (next to workspace name).
- \`window:header:right\`: Title bar right items (before window controls).
- \`editor:header\`: Top toolbar above the markdown reading canvas.
- \`editor:footer\`: Bottom bar below the markdown content.
- \`sidebar:left:bottom\`: Docked below the left file tree.
- \`sidebar:right:bottom\`: Docked below the backlinks outline panel.


## 5. Background Web Worker Pool (\`ExtensionWorkerPool\`)

---

To ensure the UI thread remains completely fluid (sub-8ms input latency), heavy computational tasks (such as large-scale natural language processing, vector embeddings, or dense PDF parsing) can be offloaded to the worker pool:

\`\`\`typescript
const result = await this.app.workerPool.runTask({
  taskName: 'generate-embeddings',
  payload: { documentContent: '...' },
  timeoutMs: 5000,
});
\`\`\`

To learn how extensions store relational data, read [[Database Schema Reference]] and [[Events & Relational Storage]]. To register AI tools, read [[Model Context Protocol (MCP) Tools]].
`,jp=`# Database Schema Reference

Flint implements a high-performance, embedded SQLite relational engine (\`.flint/flint.sqlite\`) that serves as a real-time query accelerator alongside your disk Markdown files. This document details the canonical database schema, indexes, virtual full-text search tables, and conventions for extension-defined tables.


## 1. Architectural Role of SQLite

---

In Flint's [[Dual-Storage Architecture]], the physical CommonMark files on your storage drive are the primary source of truth. The SQLite database is an embedded metadata cache:

- **Sub-Millisecond Graph Traversal**: Bidirectional Wikilink resolution across thousands of notes executes in less than 2ms.
- **Hierarchical Taxonomies**: Tags and folder trees are indexed for instant search and filtering.
- **FTS5 Full-Text Search**: Note bodies are tokenized into an SQLite FTS5 virtual table for instant BM25-ranked searches without scanning files.
- **Disposability**: If the database file is ever deleted, Flint scans the Hearth's markdown files and reconstructs the entire database automatically.


## 2. Core Relational Tables

---

### The \`documents\` Table

Stores metadata, frontmatter properties, and tree hierarchy for all files and folders in the Hearth.

\`\`\`sql
CREATE TABLE IF NOT EXISTS documents (
  id TEXT PRIMARY KEY,
  parent_id TEXT,
  title TEXT NOT NULL DEFAULT 'Untitled',
  content_json TEXT NOT NULL DEFAULT '{}',
  is_daily_note INTEGER NOT NULL DEFAULT 0,
  is_folder INTEGER NOT NULL DEFAULT 0,
  is_bookmarked INTEGER NOT NULL DEFAULT 0,
  doc_type TEXT NOT NULL DEFAULT 'base',
  properties TEXT DEFAULT '{}',
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_docs_parent_id ON documents(parent_id);
CREATE INDEX IF NOT EXISTS idx_docs_title ON documents(title);
CREATE INDEX IF NOT EXISTS idx_docs_is_folder ON documents(is_folder);
\`\`\`

### The \`blocks\` Table

Represents individual content blocks within notes (paragraphs, code blocks, task list items) for granular queries.

\`\`\`sql
CREATE TABLE IF NOT EXISTS blocks (
  id TEXT PRIMARY KEY,
  document_id TEXT NOT NULL,
  parent_block_id TEXT,
  content_text TEXT NOT NULL,
  block_type TEXT NOT NULL DEFAULT 'paragraph',
  order_index REAL NOT NULL,
  is_task INTEGER NOT NULL DEFAULT 0,
  task_completed INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_blocks_document_id ON blocks(document_id);
CREATE INDEX IF NOT EXISTS idx_blocks_is_task ON blocks(is_task, task_completed);
\`\`\`

### The \`document_links\` Table (Wikilinks Graph)

Indexes all forward links and backlinks generated by \`[[Wikilinks]]\` in note content. This table directly powers the graph view and the backlinks panel.

\`\`\`sql
CREATE TABLE IF NOT EXISTS document_links (
  source_document_id TEXT NOT NULL,
  target_document_id TEXT NOT NULL,
  link_text TEXT,
  PRIMARY KEY (source_document_id, target_document_id)
);

CREATE INDEX IF NOT EXISTS idx_doc_links_target ON document_links(target_document_id);
\`\`\`

### The \`document_tags\` Table

Tracks document-to-tag mappings extracted from \`#tag\` syntax in note bodies and YAML frontmatter:

\`\`\`sql
CREATE TABLE IF NOT EXISTS document_tags (
  document_id TEXT NOT NULL,
  tag TEXT NOT NULL,
  PRIMARY KEY (document_id, tag)
);

CREATE INDEX IF NOT EXISTS idx_doc_tags_tag ON document_tags(tag);
\`\`\`

### The \`file_manifest\` Table

Tracks filesystem timestamps (\`mtime\`), file sizes, and SHA-256 content hashes to detect external file modifications:

\`\`\`sql
CREATE TABLE IF NOT EXISTS file_manifest (
  relative_path TEXT PRIMARY KEY,
  mtime INTEGER NOT NULL,
  size INTEGER NOT NULL,
  content_hash TEXT NOT NULL,
  indexed_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_manifest_mtime ON file_manifest(mtime);
\`\`\`

### The \`trash_items\` Table

Maintains metadata for soft-deleted documents moved to the \`.trash\` directory:

\`\`\`sql
CREATE TABLE IF NOT EXISTS trash_items (
  id TEXT PRIMARY KEY,
  original_id TEXT NOT NULL,
  parent_id TEXT,
  title TEXT NOT NULL,
  content_json TEXT NOT NULL DEFAULT '{}',
  is_daily_note INTEGER NOT NULL DEFAULT 0,
  is_folder INTEGER NOT NULL DEFAULT 0,
  is_bookmarked INTEGER NOT NULL DEFAULT 0,
  doc_type TEXT NOT NULL DEFAULT 'base',
  properties TEXT DEFAULT '{}',
  deleted_at INTEGER NOT NULL,
  original_path TEXT
);

CREATE INDEX IF NOT EXISTS idx_trash_deleted_at ON trash_items(deleted_at);
\`\`\`


## 3. Full-Text Search (FTS5) Virtual Table

---

Flint indexes block content into an SQLite FTS5 table with Unicode diacritic removal for typo-tolerant, instant search:

\`\`\`sql
CREATE VIRTUAL TABLE IF NOT EXISTS blocks_fts USING fts5(
  block_id UNINDEXED,
  document_id UNINDEXED,
  content_text,
  tokenize = 'unicode61 remove_diacritics 1'
);
\`\`\`

### Querying FTS with BM25 Ranking

\`\`\`sql
SELECT
  d.id,
  d.title,
  snippet(blocks_fts, 2, '<mark>', '</mark>', '...', 24) AS match_snippet,
  bm25(blocks_fts) AS rank
FROM blocks_fts
JOIN documents d ON d.id = blocks_fts.document_id
WHERE blocks_fts MATCH 'kernel isolation'
ORDER BY rank
LIMIT 20;
\`\`\`


## 4. Extension Table Isolation Rules

---

In accordance with [[Micro-Kernel & Extension Architecture]], extensions must never alter core tables. Instead, extensions register their own dynamic schemas upon \`onload()\`:

\`\`\`typescript
import { Extension } from 'flint';

export default class FlashcardsExtension extends Extension {
  async onload() {
    await this.app.db.execute(\`
      CREATE TABLE IF NOT EXISTS plugin_flashcards (
        id TEXT PRIMARY KEY,
        document_id TEXT NOT NULL,
        card_front TEXT NOT NULL,
        card_back TEXT NOT NULL,
        due_timestamp INTEGER NOT NULL,
        stability REAL NOT NULL DEFAULT 1.0,
        difficulty REAL NOT NULL DEFAULT 5.0
      );
      CREATE INDEX IF NOT EXISTS idx_flashcards_due ON plugin_flashcards(due_timestamp);
    \`);
  }

  async onunload() {
    // Keep data intact unless extension is permanently uninstalled
  }
}
\`\`\`

For guidelines on listening to database lifecycle events, see [[Events & Relational Storage]]. To query the database from AI tools, see [[Model Context Protocol (MCP) Tools]].
`,qp=`# Community Directory Overview

The Flint Community Directory is designed to connect creators with users who want to extend their personal knowledge workspace with custom plugins, themes, and AI tools.


## 1. Current State: Local-First Extension Loading

---

Flint is engineered as a local-first application. In the current release:

- **Local Discovery**: Extensions reside directly within your active workspace folder at \`<hearth>/.flint/plugins/<extension-id>/\`.
- **Zero Network Required**: Extensions execute entirely offline inside your local sandbox.
- **Direct Testing**: As soon as an extension folder containing \`manifest.json\` and \`main.js\` is placed inside \`.flint/plugins/\`, Flint detects it and permits activation via **Settings > Extensions**.

\`\`\`
My-Hearth/
└── .flint/
    └── plugins/
        ├── word-counter/
        │   ├── manifest.json
        │   └── main.js
        └── my-custom-plugin/
            ├── manifest.json
            └── main.js
\`\`\`


## 2. Planned Cloud Registry & One-Click Installation

---

I am actively developing an official community directory registry. When launched, this will provide:

- **In-App Discovery**: Browse, search, and install verified community plugins directly within the desktop application interface.
- **Automated Version Checks**: Automatic notifications when plugin authors release new versions on GitHub.
- **Cryptographic Publisher Verification**: Secure namespace verification linking plugin authors to their verified GitHub identities.

Until this service launches, extensions and themes are distributed via GitHub repositories and installed by placing the compiled files into your local Hearth.


## 3. Getting Involved

---

- To build your first extension, follow [[Plugin Quick Start]].
- To style custom themes, follow [[Build Your First Theme]].
- Review my privacy and performance requirements in [[Developer Policies & Guidelines]].
- Share your extensions and discuss new APIs with me and fellow developers on [GitHub Discussions](https://github.com/yvliet/flint/discussions).
`,Ip=`# Setting Up & Claiming Extensions

This guide describes how extension namespaces, IDs, and publisher identities are handled in Flint.


## 1. Extension Identifiers (\`id\`)

---

Every Flint extension is uniquely identified by the \`id\` property in its \`manifest.json\`.

\`\`\`json
{
  "id": "pomodoro-timer",
  "name": "Pomodoro Focus Timer",
  "version": "1.0.0"
}
\`\`\`

### Identifier Invariants

- **Characters**: Lowercase letters (\`a-z\`), numbers (\`0-9\`), and single hyphens (\`-\`).
- **No Namespace Collisions**: The identifier should be descriptive and avoid generic collisions (e.g., prefer \`reading-stats\` or \`org-reading-stats\` over \`stats\`).
- **Command & Tool Scoping**: Flint automatically prefixes all commands (\`pomodoro-timer:start\`) and MCP tools (\`pomodoro-timer_start\`) with this \`id\` to prevent conflicts between extensions.


## 2. Claiming Ownership on GitHub

---

Currently, extension development and ownership are tracked via public GitHub repositories:

1. Host your extension code in a public GitHub repository.
2. Maintain your \`manifest.json\` at the root of the repository.
3. Ensure the \`author\` and \`authorUrl\` fields in \`manifest.json\` link directly to your GitHub profile or organization.
4. When the upcoming community directory registry opens, publisher accounts will authenticate directly via GitHub OAuth to bind repository ownership to your published extension identifier.


## 3. Related Reading

---

- Review the required manifest format in [[Manifest Specification]].
- Ensure your extension satisfies [[Plugin Submission Requirements]].
- Check my core principles in [[Developer Policies & Guidelines]].
`,Fp=`# Managing Your Extension

Once you have built an extension, this guide covers versioning strategies, local updates, and handling breaking changes.


## 1. Semantic Versioning (SemVer)

---

Flint follows strict **Semantic Versioning** (\`MAJOR.MINOR.PATCH\`):

- **MAJOR** (\`1.0.0\` → \`2.0.0\`): Incompatible changes, breaking API removals, or substantial SQLite schema revisions.
- **MINOR** (\`1.0.0\` → \`1.1.0\`): Backwards-compatible new features, newly added commands, or additional MCP tools.
- **PATCH** (\`1.0.0\` → \`1.0.1\`): Backwards-compatible bug fixes and performance optimizations.


## 2. Managing Database Migrations

---

If your extension creates custom SQLite tables as described in [[Events & Relational Storage]], handle table evolution safely without dropping user data:

\`\`\`typescript
async onload() {
  // Always use CREATE TABLE IF NOT EXISTS
  await this.app.db.execute(\`
    CREATE TABLE IF NOT EXISTS plugin_bookmarks (
      id TEXT PRIMARY KEY,
      url TEXT NOT NULL,
      title TEXT
    );
  \`);

  // Use try/catch for non-destructive column additions
  try {
    await this.app.db.execute(\`
      ALTER TABLE plugin_bookmarks ADD COLUMN favorite INTEGER DEFAULT 0;
    \`);
  } catch {
    // Column already exists from previous version; safely continue
  }
}
\`\`\`


## 3. Graceful Cleanups on Unload

---

Whenever an extension is disabled or updated, Flint calls its \`onunload()\` hook:

- All commands, ribbon icons, status bar widgets, and event listeners registered through \`this.add*\` and \`this.registerEvent\` are disposed of automatically.
- Manually terminate any active interval timers (\`clearInterval\`), WebSockets, or worker tasks in \`onunload()\`.

\`\`\`typescript
export default class SyncExtension extends Extension {
  private syncTimer: number | null = null;

  async onload() {
    this.syncTimer = window.setInterval(() => this.runSync(), 60000);
  }

  async onunload() {
    if (this.syncTimer !== null) {
      window.clearInterval(this.syncTimer);
      this.syncTimer = null;
    }
  }
}
\`\`\`

For more lifecycle details, read [[Flint SDK API Reference]] and [[Developer Policies & Guidelines]].
`,Up=`# Developer Policies & Guidelines

Flint is committed to providing a secure, private, and distraction-free knowledge environment. All extensions must adhere to these policies.


## 1. Zero Telemetry & User Privacy

---

- **No Unauthorized Tracking**: Extensions must never transmit telemetry, user keystrokes, document contents, note metadata, or IP addresses to third-party servers without explicit, informed user consent.
- **Local-First by Default**: If an extension integrates with an external cloud service (such as an LLM provider or cloud backup), all API keys must be entered by the user (Bring Your Own Key) and stored locally.


## 2. Snappy Desktop Performance

---

- **Zero Artificial Latency**: UI components must render, toggle, and open immediately. Never introduce artificial delay animations or slow CSS transitions on micro-interactions (see [[Flint UI Components]]).
- **Non-Blocking Main Thread**: Heavy operations (text embeddings, graph physics, large PDF parsing) must be offloaded to Web Workers via \`app.workerPool\` or debounced. The editor input latency must remain under 8ms.
- **Fast Activation**: Extensions must activate in less than 50ms. Dynamic imports should be used for heavy submodules. Read [[Optimizing Extension Load Time]].


## 3. Sandboxing & Cross-Platform Neutrality

---

- **Cross-Platform Safety**: Avoid invoking desktop-only platform APIs directly inside view components. Use the Flint SDK's cross-platform bridges so extensions remain functional across macOS, Windows, and Linux.
- **Clean Uninstallation**: When uninstalled, extensions must drop any custom SQLite tables they created and leave no lingering artifacts.


## 4. Model Context Protocol (MCP) Standards

---

- Extensions that manage structured data should expose MCP tools for AI copilot interaction (see [[Model Context Protocol (MCP) Tools]]).
- Destructive operations (permanent note deletions, mass modifications) must declare \`isDestructive: true\` to require explicit user confirmation.
`,_p=`# Plugin Submission Requirements

These guidelines define the standards that extensions must meet to ensure security, reliability, and code quality across the Flint ecosystem.


## 1. Manifest Requirements

---

- \`id\`: Lowercase alphanumeric string with hyphens. Must be unique.
- \`name\`: Human-readable display title.
- \`version\`: Valid Semantic Versioning string (e.g. \`1.0.0\`).
- \`minAppVersion\`: Specifies the lowest compatible Flint version.
- \`description\`: Clear, concise summary of capabilities.
- \`author\`: Developer or team name.

See [[Manifest Specification]] for the complete schema.


## 2. Code Quality & Bundling

---

- **Single Bundle**: Extensions must compile into a self-contained \`main.js\` bundle (CommonJS or ESM).
- **No Unused Boilerplate**: Remove sample counter buttons, debug logs, and unused boilerplate code before publishing.
- **Strict Native Core Isolation**: Plugins must never import native core paths. Only import from the public \`flint\` SDK module. Read [[Micro-Kernel & Extension Architecture]].
- **Proper Command IDs**: Do not include your plugin ID in the \`id\` field passed to \`this.addCommand()\`; Flint prefixes it automatically.


## 3. Financial Support & Links

---

If you accept donations or patronage for your open-source work:
- You may include a \`fundingUrl\` in your \`manifest.json\` linking to services like GitHub Sponsors, Buy Me a Coffee, or Patreon.
- Extensions must not display unsolicited intrusive popups requesting donations.

For questions, open a discussion in the [Flint GitHub Discussions](https://github.com/yvliet/flint/discussions).
`,Gp=`# Organizations & Teams

Open-source teams, research labs, and collective developer groups can publish and maintain Flint extensions collaboratively.


## 1. Collaborative Ownership

---

When developing extensions under an organization or team handle:

- Host the repository under your GitHub organization.
- Specify the organization handle in the \`author\` field of \`manifest.json\`.
- Provide an \`authorUrl\` pointing to your organization profile or documentation portal.

\`\`\`json
{
  "id": "chem-formula-renderer",
  "name": "Chemical Formula Renderer",
  "author": "OpenScience Labs",
  "authorUrl": "https://github.com/openscience-labs"
}
\`\`\`


## 2. Namespace Recommendations

---

For organization-scoped extensions, I recommend prefixing your extension \`id\` with your team abbreviation if working on specialized domain tools:

- \`osl-chem-renderer\`
- \`osl-citation-importer\`

This ensures clear brand recognition and prevents collisions with general community utilities.

To build and test extensions with your team, follow [[Plugin Quick Start]] and [[Extension Points Reference]].
`,Yp=`# Frequently Asked Questions (FAQ)

Answers to common developer questions about Flint's architecture, extension runtime, and roadmap.

---

### Where are extensions installed in Flint?
Extensions are stored inside your active Hearth directory at \`<hearth>/.flint/plugins/<plugin-id>/\`. Every extension folder must contain at least a \`manifest.json\` and a compiled \`main.js\`.

### Can extensions access the embedded SQLite database?
Yes! Through \`this.app.db\`, extensions can execute SQL queries, create dynamic tables, and index custom metadata. Read [[Database Schema Reference]] and [[Events & Relational Storage]].

### What languages can I use to write extensions?
Extensions are typically written in TypeScript or JavaScript. They are compiled and bundled into a standalone \`main.js\` bundle using tools like \`esbuild\` or \`tsup\`. See [[Plugin Quick Start]].

### Is there an official centralized community directory right now?
Not yet. An official community extension marketplace and registry is currently in active development. In the current version of Flint, extensions and themes are loaded and tested locally from \`.flint/plugins/\` and \`.flint/themes/\`, and shared via GitHub repositories.

### Where can I ask technical questions or report bugs?
Join technical discussions and report issues on the official [Flint GitHub Repository](https://github.com/yvliet/flint/discussions).

### How do I expose my extension to AI agents?
Flint includes native support for the Model Context Protocol (MCP). In your extension's \`onload()\` method, call \`this.registerTool(...)\`. See [[Model Context Protocol (MCP) Tools]].
`,Ki=[{id:"home",title:"Home",slug:"home",aliases:["Flint Developer Docs","Overview","Developer Portal"],content:P5},{id:"getting-started",title:"Getting Started",slug:"getting-started",isFolder:!0,children:[{id:"introduction",title:"Introduction to Flint",slug:"introduction",aliases:["Introduction","Intro","Core Philosophy","Hearth"],content:Z5},{id:"installation",title:"Installation & Setup",slug:"installation",aliases:["Installation","Install","Setup","Building from source"],content:K5}]},{id:"user-guide",title:"User Guide",slug:"user-guide",isFolder:!0,children:[{id:"editor-and-markdown",title:"Live Preview Editor & Markdown",slug:"editor-and-markdown",aliases:["Editor","Markdown","Live Preview","Slash Commands","Math","KaTeX","Tables","Callouts"],content:$5},{id:"links-and-graph",title:"Links, Backlinks & Graph",slug:"links-and-graph",aliases:["Wikilinks","Backlinks","Graph View","Knowledge Graph","Unlinked Mentions","Visited Links"],content:J5},{id:"spatial-canvas",title:"Infinite 2D Spatial Canvas",slug:"spatial-canvas",aliases:["Canvas","Whiteboard","Spatial Canvas","Mindmap","Visual Notes"],content:ep},{id:"spaced-repetition",title:"FSRS Spaced Repetition",slug:"spaced-repetition",aliases:["Spaced Repetition","FSRS","Flashcards","Active Recall","Review Deck"],content:tp},{id:"tasks-and-journal",title:"Tasks Dashboard & Journal",slug:"tasks-and-journal",aliases:["Tasks","Kanban","Journal","Daily Notes","Checklists"],content:np},{id:"hearths-and-storage",title:"Hearths & Workspace Storage",slug:"hearths-and-storage",aliases:["Hearths","Workspaces","Full-Text Search","FTS5","Trash Bin","Sync"],content:ap},{id:"shortcuts-and-commands",title:"Keyboard Shortcuts & Commands",slug:"shortcuts-and-commands",aliases:["Keyboard Shortcuts","Shortcuts","Command Palette","Hotkeys","Keybindings"],content:ip},{id:"ai-and-mcp",title:"AI Assistants & MCP Tools",slug:"ai-and-mcp",aliases:["MCP","Model Context Protocol","AI Assistants","Claude Desktop","Antigravity","Cursor","Copilot"],content:rp}]},{id:"architecture",title:"Architecture",slug:"architecture",isFolder:!0,children:[{id:"dual-storage",title:"Dual-Storage Architecture",slug:"dual-storage",aliases:["Dual storage architecture","Dual Storage","Storage Architecture"],content:lp},{id:"kernel-design",title:"Micro-Kernel & Core Isolation",slug:"kernel-design",aliases:["Kernel design","Kernel Design & Core Isolation","Micro-Kernel & Isolation","Micro-Kernel","Micro-Kernel & Extension Architecture","Microkernel","Microkernel & Extension Architecture","Microkernel & Core Isolation"],content:sp},{id:"performance-engineering",title:"Systems & Performance Engineering",slug:"performance-engineering",aliases:["Performance","Systems Engineering","Sub-8ms","Working Set Trimming"],content:op}]},{id:"extensions",title:"Extensions",slug:"extensions",isFolder:!0,children:[{id:"build-first-extension",title:"Plugin Quick Start",slug:"build-first-extension",aliases:["Build your first extension","Quick Start","First Plugin","Word Counter"],content:cp},{id:"starter-templates",title:"Starter Templates & Boilerplates",slug:"starter-templates",aliases:["Starter Templates & Boilerplates","Starter Templates","Boilerplates","Templates","Starter Boilerplates","Extension Templates","MCP Starter"],content:vp},{id:"manifest-spec",title:"Manifest Specification",slug:"manifest-spec",aliases:["Manifest spec","manifest.json","Extension Manifest"],content:up},{id:"extension-points",title:"UI Extension Points",slug:"extension-points",aliases:["Extension points","Action Rail","Command Palette","Status Bar","Context Menus"],content:dp},{id:"editor-plugins",title:"ProseMirror & Editor Bridge",slug:"editor-plugins",aliases:["Editor plugins","TipTap Bridge","ProseMirror Bridge"],content:hp},{id:"mcp-tools",title:"Model Context Protocol (MCP) Tools",slug:"mcp-tools",aliases:["Model Context Protocol (MCP)","MCP","MCP Tools","Model Context Protocol"],content:mp},{id:"events-storage",title:"Events & Relational Storage",slug:"events-storage",aliases:["Events and storage","EventBus","Event Bus","Relational Storage","WASM SQLite Storage"],content:fp},{id:"optimize-load-time",title:"Optimizing Extension Load Time",slug:"optimize-load-time",aliases:["Optimize extension load time","Performance","Sub-50ms","Startup Performance"],content:pp},{id:"submit-extension",title:"Publishing to Marketplace",slug:"submit-extension",aliases:["Submit your extension","Publishing Extensions","Marketplace","Publishing to Marketplace"],content:gp}]},{id:"themes",title:"Themes",slug:"themes",isFolder:!0,children:[{id:"build-first-theme",title:"Build Your First Theme",slug:"build-first-theme",aliases:["Build your first theme","Custom Themes","Theme Tutorial"],content:yp},{id:"submit-theme",title:"Submitting Themes",slug:"submit-theme",aliases:["Submit your theme","Submit theme","Publish theme"],content:bp}]},{id:"reference",title:"Reference",slug:"reference",isFolder:!0,children:[{id:"css-variables",title:"CSS variables",slug:"css-variables",aliases:["CSS Variables & Design Tokens","CSS Variables","Design Tokens","CSS Tokens"],isFolder:!0,children:[{id:"components-variables",title:"Components",slug:"components-variables",aliases:["Components CSS Variables","Button Tokens","Input Tokens"],content:kp},{id:"editor-variables",title:"Editor",slug:"editor-variables",aliases:["Editor Variables","Canvas Tokens","Syntax Tokens"],content:Sp},{id:"foundations",title:"Foundations",slug:"foundations",aliases:["Foundations","Colors","Surfaces","Borders","Typography Tokens"],content:xp},{id:"plugins-variables",title:"Plugins",slug:"plugins-variables",aliases:["Plugins CSS Variables","Extension Tokens","Portal Tokens"],content:Cp},{id:"publish-variables",title:"Publish",slug:"publish-variables",aliases:["Publish Variables","Marketplace Tokens","Banner Standards"],content:Tp},{id:"window-variables",title:"Window",slug:"window-variables",isFolder:!0,children:[{id:"about-styling",title:"About styling",slug:"about-styling",aliases:["About styling","Styling Philosophy","Token Cascade"],content:Ap},{id:"window-tokens",title:"CSS variables",slug:"window-tokens",aliases:["Window CSS variables","Window Frame","Titlebar Variables"],content:wp}]}]},{id:"typescript-api",title:"TypeScript API",slug:"typescript-api",aliases:["TypeScript API Reference","TypeScript API","TS API","Flint TypeScript API"],isFolder:!0,children:[{id:"manifest-api",title:"Manifest",slug:"manifest-api",aliases:["Manifest API","ExtensionManifest","Manifest Interface"],content:Mp},{id:"extension-class",title:"Extension Base Class",slug:"extension-class",aliases:["Extension Class","Extension SDK"],content:Dp},{id:"app-api",title:"FlintApp API",slug:"app-api",aliases:["FlintApp API","Workspace API","Vault API"],content:zp},{id:"database-api",title:"Database & SQLite",slug:"database-api",aliases:["Database API","defineTable API","SQLite Tables"],content:Np},{id:"mcp-api",title:"Model Context Protocol",slug:"mcp-api",aliases:["MCP API","registerTool API","Zod Tools"],content:Rp},{id:"portal-slots-api",title:"Portal Slots",slug:"portal-slots-api",aliases:["Portal Slots API","registerPortalSlot"],content:Lp},{id:"worker-pool-api",title:"Worker Task Pool",slug:"worker-pool-api",aliases:["Worker Pool API","registerWorkerTask"],content:Op},{id:"versions",title:"Versions",slug:"versions",aliases:["Versions","Compatibility","minAppVersion Matrix"],content:Ep}]},{id:"components",title:"Flint UI Components",slug:"components",aliases:["Components","Flint UI","Button","TextInput","SettingBuilder","Toggle","Select","Slider"],content:Bp},{id:"sdk-api",title:"SDK Quick Reference",slug:"sdk-api",aliases:["SDK Quick Reference","Flint SDK Overview","Flint SDK API Reference","Flint SDK","SDK API Reference","SDK Reference","SDK API","SDK"],content:Hp},{id:"database-schema",title:"Database Schema Reference",slug:"database-schema",aliases:["Database schema","SQLite Schema","Database Schema","Schema"],content:jp}]},{id:"community-directory",title:"Community Directory",slug:"community-directory",isFolder:!0,children:[{id:"directory-overview",title:"Community Directory Overview",slug:"community-directory-overview",aliases:["Community directory","Directory Overview","Community"],content:qp},{id:"set-up-and-claim",title:"Setting Up & Claiming Extensions",slug:"set-up-and-claim",aliases:["Set up and claim","Claim account","Claim namespace"],content:Ip},{id:"manage-extension",title:"Managing Your Extension",slug:"manage-extension",aliases:["Manage your extension or theme","Manage extension","Managing extensions"],content:Fp},{id:"developer-policies",title:"Developer Policies & Guidelines",slug:"developer-policies",aliases:["Developer policies","Policies","Privacy Policy","Security Guidelines"],content:Up},{id:"submission-requirements",title:"Plugin Submission Requirements",slug:"submission-requirements",aliases:["Submission requirements for plugins","Submission requirements","Plugin Requirements"],content:_p},{id:"organizations",title:"Organizations & Teams",slug:"organizations",aliases:["Organizations","Teams"],content:Gp},{id:"faq",title:"Developer FAQ",slug:"faq",aliases:["Frequently asked questions","FAQ"],content:Yp}]}],Of=tr.memo(({id:l,level:a=0,title:r,suffix:s,typeBadge:c,isFolder:d=!1,isOpen:m=!1,isActive:g=!1,isHighlighted:y=!1,onSelect:v,onToggle:k,className:M="",children:N})=>{const q=X=>{d?k?k(X):v&&v(X):v==null||v(X)},U=X=>{X.stopPropagation(),k==null||k(X)};return C.jsxs("div",{"data-tree-item-id":l,"data-is-folder":d?"true":"false",className:`select-none text-sm w-full ${M}`,children:[C.jsxs("div",{onClick:q,style:{paddingLeft:a===0?d?6:22:0},className:`group relative flex items-start justify-between py-1 pr-2 my-0 cursor-pointer transition-none bg-transparent ${g&&!d?"text-[#ea580c] hover:text-[#f97316] font-normal":y?"text-[#fef08a] font-normal":d?"text-[#cccccc] hover:text-white font-normal":"text-[#999999] hover:text-white font-normal"}`,children:[a>0&&C.jsx("span",{style:{left:a===1?-14.5:-15,width:1},className:`absolute top-0 bottom-0 pointer-events-none transition-none ${g&&!d?"bg-[#ea580c] z-10":"bg-transparent group-hover:bg-white z-10"}`}),C.jsxs("div",{className:"flex items-start gap-1.5 min-w-0 flex-1",children:[d&&C.jsx("button",{type:"button",onClick:U,className:"w-4 h-4 mt-0.5 flex items-center justify-center shrink-0 text-[#777777] group-hover:text-white cursor-pointer",title:m?"Collapse":"Expand",children:m?C.jsx("svg",{viewBox:"0 0 24 24",width:"11",height:"11",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:C.jsx("path",{d:"M6 9l6 6 6-6"})}):C.jsx("svg",{viewBox:"0 0 24 24",width:"11",height:"11",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:C.jsx("path",{d:"M9 18l6-6-6-6"})})}),C.jsx("span",{className:"flex-1 min-w-0 text-[13.5px] leading-snug font-normal whitespace-normal break-words",children:r}),s,c&&C.jsx("span",{className:"text-[10px] text-[#777777] uppercase tracking-wider shrink-0 ml-1 select-none",children:c})]})]}),m&&N&&C.jsx("div",{className:`relative flex flex-col border-l border-[#262626] ${a===0?"ml-[14px] pl-[14px]":"ml-[8px] pl-[14px]"}`,children:N})]})});Of.displayName="DocTreeNodeRow";const Vp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},Bf=le.forwardRef(({color:l="currentColor",size:a=24,strokeWidth:r,absoluteStrokeWidth:s=!1,className:c="",altIcon:d,showAlt:m=!1,icon:g,primaryColor:y,secondaryColor:v,disableSecondaryOpacity:k=!1,...M},N)=>{const q=r!==void 0?s?Number(r)*24/Number(a):r:void 0,U=q!==void 0?{strokeWidth:q,stroke:"currentColor"}:{},X={ref:N,...Vp,width:a,height:a,color:y||l,className:c,...U,...M},O=[...m&&d?d:g].sort(([,V],[,W])=>{const ce=V.opacity!==void 0;return W.opacity!==void 0?1:ce?-1:0}).map(([V,W])=>{const ce=W.opacity!==void 0,re=ce&&!k?W.opacity:void 0,ie=v?{...W.stroke!==void 0?{stroke:ce?v:y||l}:{fill:ce?v:y||l}}:{};return le.createElement(V,{...W,...U,...ie,opacity:re,key:W.key})});return le.createElement("svg",X,O)});Bf.displayName="HugeiconsIcon";const Xp=[["path",{d:"M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M12 17V13",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M12 9.25H12.125M12.25 9.25C12.25 9.11193 12.1381 9 12 9C11.8619 9 11.75 9.11193 11.75 9.25C11.75 9.38807 11.8619 9.5 12 9.5C12.1381 9.5 12.25 9.38807 12.25 9.25Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],Wp=[["path",{d:"M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M12 9V13",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],Qp=[["path",{d:"M5.92089 5.92089C8.15836 3.68342 9.2771 2.56468 10.5857 2.19562C11.5105 1.93479 12.4895 1.93479 13.4143 2.19562C14.7229 2.56468 15.8416 3.68342 18.0791 5.92089C20.3166 8.15836 21.4353 9.2771 21.8044 10.5857C22.0652 11.5105 22.0652 12.4895 21.8044 13.4143C21.4353 14.7229 20.3166 15.8416 18.0791 18.0791C15.8416 20.3166 14.7229 21.4353 13.4143 21.8044C12.4895 22.0652 11.5105 22.0652 10.5857 21.8044C9.2771 21.4353 8.15836 20.3166 5.92089 18.0791C3.68342 15.8416 2.56468 14.7229 2.19562 13.4143C1.93479 12.4895 1.93479 11.5105 2.19562 10.5857C2.56468 9.2771 3.68342 8.15836 5.92089 5.92089Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M12 8V12",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M12.125 15.75H12M12.25 15.75C12.25 15.8881 12.1381 16 12 16C11.8619 16 11.75 15.8881 11.75 15.75C11.75 15.6119 11.8619 15.5 12 15.5C12.1381 15.5 12.25 15.6119 12.25 15.75Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],Pp=[["path",{d:"M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],Zp=[["path",{d:"M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],Kp=[["path",{d:"M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],$p=[["path",{d:"M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],Jp=[["path",{d:"M7.99978 3.5H6.60021C4.43183 3.5 3.34764 3.5 2.67399 4.17362C2.00034 4.84724 2.00029 5.93144 2.00021 8.09982L2 13.3998C1.99992 15.5684 1.99987 16.6526 2.67353 17.3263C3.34719 18 4.43146 18 6.6 18H8.95042C10.4329 18 11.7092 19.0464 11.9999 20.5V5.5C11.0556 4.24097 9.99989 3.5 7.99978 3.5Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M16.0001 3.5H17.3997C19.5681 3.5 20.6523 3.5 21.3259 4.17362C21.9996 4.84724 21.9996 5.93144 21.9997 8.09982L21.9999 13.3998C22 15.5684 22 16.6526 21.3264 17.3263C20.6527 18 19.5684 18 17.3999 18H15.0495C13.567 18 12.2907 19.0464 12 20.5V5.5C12.9443 4.24097 14 3.5 16.0001 3.5Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],e3=[["path",{d:"M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M4 7H20",stroke:"currentColor",strokeWidth:"1.5",key:"1"}]],t3=[["path",{d:"M4.22222 21.9948V18.4451C4.22222 17.1737 3.88927 16.5128 3.23482 15.4078C2.4503 14.0833 2 12.5375 2 10.8866C2 5.97866 5.97969 2 10.8889 2C15.7981 2 19.7778 5.97866 19.7778 10.8866C19.7778 11.4663 19.7778 11.7562 19.802 11.9187C19.8598 12.3072 20.0411 12.6414 20.2194 12.9873L22 16.4407L20.6006 17.1402C20.195 17.3429 19.9923 17.4443 19.851 17.6314C19.7097 17.8184 19.67 18.0296 19.5904 18.4519L19.5826 18.4931C19.4004 19.4606 19.1993 20.5286 18.6329 21.2024C18.4329 21.4403 18.1853 21.6336 17.9059 21.7699C17.4447 21.9948 16.8777 21.9948 15.7437 21.9948C15.219 21.9948 14.6928 22.0069 14.1682 21.9942C12.9247 21.9639 12 20.9184 12 19.7044",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M14.388 10.5315C13.9617 10.5315 13.5729 10.3702 13.2784 10.1048M14.388 10.5315C14.388 11.6774 13.7241 12.7658 12.4461 12.7658C11.1681 12.7658 10.5043 13.8541 10.5043 15M14.388 10.5315C16.5373 10.5315 16.5373 7.18017 14.388 7.18017C14.1927 7.18017 14.0053 7.21403 13.8312 7.27624C13.9362 4.77819 10.3349 4.1 9.51923 6.44018M10.5043 8.29729C10.5043 7.52323 10.1133 6.8411 9.51923 6.44018M9.51923 6.44018C7.66742 5.19034 5.19883 7.4331 6.37324 9.43277C4.40226 9.72827 4.61299 12.7658 6.6205 12.7658C7.18344 12.7658 7.68111 12.4844 7.98234 12.0538",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],n3=[["path",{d:"M17.2916 16C18.9525 14.5341 20 12.3894 20 10C20 5.58173 16.4182 2 12 2C7.58173 2 4 5.58173 4 10C4 12.3894 5.04751 14.5341 6.70836 16",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M12 11V16",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M8.5 19H15.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}],["path",{d:"M10 22H14",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"3"}]],a3=[["path",{d:"M18 6L6.00081 17.9992M17.9992 18L6 6.00085",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],i3=[["path",{d:"M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M14.9994 15L9 9M9.00064 15L15 9",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],r3=[["path",{d:"M9.13432 2.5C6.46805 2.56075 4.9107 2.81456 3.84664 3.87493C2.91537 4.80297 2.60406 6.10756 2.5 8.2M14.8657 2.5C17.532 2.56075 19.0893 2.81456 20.1534 3.87493C21.0846 4.80297 21.3959 6.10756 21.5 8.2M14.8657 21.5C17.532 21.4392 19.0893 21.1854 20.1534 20.1251C21.0846 19.197 21.3959 17.8924 21.5 15.8M9.13432 21.5C6.46805 21.4392 4.9107 21.1854 3.84664 20.1251C2.91537 19.197 2.60406 17.8924 2.5 15.8",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],l3=[["path",{d:"M5 13.2592L7.58583 15.9568C8.2525 16.6523 8.58583 17 9.00004 17C9.41425 17 9.74759 16.6523 10.4143 15.9568L19 7",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],s3=[["path",{d:"M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z",stroke:"currentColor",strokeWidth:"1.5",key:"0"}],["path",{d:"M8 12.5L10.5 15L16 9",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],o3=[["path",{d:"M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],c3=[["path",{d:"M9.00005 18C9.00005 18 15 13.5811 15 12C15 10.4188 9 6 9 6",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],u3=[["path",{d:"M16 6.99998L19.0664 9.64296C20.3554 10.7541 21 11.3096 21 12C21 12.6903 20.3555 13.2459 19.0664 14.357L16 17",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M8 6.99998L4.93365 9.64296C3.64455 10.7541 3 11.3096 3 12C3 12.6903 3.64455 13.2459 4.93365 14.357L8 17",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],d3=[["path",{d:"M7.5 14.5C7.5 11.2002 7.5 9.55025 8.52513 8.52513C9.55025 7.5 11.2002 7.5 14.5 7.5C17.7998 7.5 19.4497 7.5 20.4749 8.52513C21.5 9.55025 21.5 11.2002 21.5 14.5C21.5 17.7998 21.5 19.4497 20.4749 20.4749C19.4497 21.5 17.7998 21.5 14.5 21.5C11.2002 21.5 9.55025 21.5 8.52513 20.4749C7.5 19.4497 7.5 17.7998 7.5 14.5Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M7.5 16.5C6.10355 16.5 5.40533 16.5 4.84402 16.3036C3.83866 15.9518 3.0482 15.1613 2.69641 14.156C2.5 13.5947 2.5 12.8964 2.5 11.5V9.5C2.5 6.20017 2.5 4.55025 3.52513 3.52513C4.55025 2.5 6.20017 2.5 9.5 2.5H11.5C12.8964 2.5 13.5947 2.5 14.156 2.69641C15.1613 3.0482 15.9518 3.83866 16.3036 4.84402C16.5 5.40533 16.5 6.10355 16.5 7.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],h3=[["path",{d:"M2.99969 17.0002C2.99969 17.9302 2.99969 18.3952 3.10192 18.7767C3.37932 19.8119 4.18796 20.6206 5.22324 20.898C5.60474 21.0002 6.06972 21.0002 6.99969 21.0002L16.9997 21.0002C17.9297 21.0002 18.3947 21.0002 18.7762 20.898C19.8114 20.6206 20.6201 19.8119 20.8975 18.7767C20.9997 18.3952 20.9997 17.9302 20.9997 17.0002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M16.4998 11.5002C16.4998 11.5002 13.1856 16.0002 11.9997 16.0002C10.8139 16.0002 7.49976 11.5002 7.49976 11.5002M11.9997 15.0002V3.00016",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],m3=[["path",{d:"M15 3H18C19.4142 3 20.1213 3 20.5607 3.43934C21 3.87868 21 4.58579 21 6V9M20 4L11 13",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M20 13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"1"}]],f3=[["path",{d:"M8 7L16 7",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M8 11L12 11",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M13 21.5V21C13 18.1716 13 16.7574 13.8787 15.8787C14.7574 15 16.1716 15 19 15H19.5M20 13.3431V10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2C8.22877 2 6.34315 2 5.17157 3.17157C4 4.34314 4 6.22876 4 10L4 14.5442C4 17.7892 4 19.4117 4.88607 20.5107C5.06508 20.7327 5.26731 20.9349 5.48933 21.1139C6.58831 22 8.21082 22 11.4558 22C12.1614 22 12.5141 22 12.8372 21.886C12.9044 21.8623 12.9702 21.835 13.0345 21.8043C13.3436 21.6564 13.593 21.407 14.0919 20.9081L18.8284 16.1716C19.4065 15.5935 19.6955 15.3045 19.8478 14.9369C20 14.5694 20 14.1606 20 13.3431Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],p3=[["path",{d:"M8 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"0"}]],g3=[["path",{d:"M2.5 20V8.87695C2.5 7.58945 2.5 6.9457 2.78533 6.47048C2.9541 6.18939 3.18939 5.9541 3.47048 5.78533C3.9457 5.5 4.59449 5.5 5.89206 5.5C6.52339 5.5 6.83906 5.5 7.12612 5.58819C7.31759 5.64702 7.49914 5.73428 7.66469 5.84705C7.91289 6.01611 8.10859 6.26074 8.5 6.75C8.89141 7.23926 9.08711 7.48389 9.33531 7.65295C9.50086 7.76572 9.68241 7.85298 9.87388 7.91181C10.1609 8 10.4742 8 11.1008 8H15C16.4045 8 17.1067 8 17.6111 8.33706C17.8295 8.48298 18.017 8.67048 18.1629 8.88886C18.5 9.39331 18.5 10.0955 18.5 11.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M4.42028 14.0144L3.63368 16.0144C2.65618 18.4998 2.16743 19.7425 2.7524 20.6213C3.33737 21.5 4.65337 21.5 7.28537 21.5H15.1903C16.4249 21.5 17.0422 21.5 17.5295 21.1795C18.0169 20.859 18.2702 20.2865 18.7769 19.1415L19.6618 17.1415C20.7866 14.5992 21.349 13.3281 20.7679 12.4141C20.1868 11.5 18.8163 11.5 16.0752 11.5H8.07196C6.78232 11.5 6.1375 11.5 5.63811 11.8439C5.13872 12.1877 4.89924 12.7966 4.42028 14.0144Z",stroke:"currentColor",strokeWidth:"1.5",key:"1"}],["path",{d:"M11.5 4.51456C12.4151 3.28409 13.6662 2.55594 15.5125 2.50161C16.1155 2.48386 16.7152 2.61395 17.2682 2.85544C18.5748 3.42601 19.4185 4.15644 20 5.5L21.5 3",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],v3=[["path",{d:"M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z",stroke:"currentColor",strokeWidth:"1.5",key:"0"}],["path",{d:"M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z",stroke:"currentColor",strokeWidth:"1.5",key:"1"}],["path",{d:"M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z",stroke:"currentColor",strokeWidth:"1.5",key:"2"}],["path",{d:"M6.01734 8.74067C6.01734 10.4142 5.77537 12.1995 9.22051 11.9855H12.0053M17.9929 8.57617C18.1259 11.9855 16.9199 11.7648 15.7861 11.9855H12.0053M12.0053 15.7001V11.9855",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"3"}]],y3=[["circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.3569 14.0689 11.1131 13.4117 11.5636C12.7283 12.0319 12 12.6716 12 13.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],b3=[["circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M12 16V12",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M12.125 8.25H12M12.25 8.25C12.25 8.11193 12.1381 8 12 8C11.8619 8 11.75 8.11193 11.75 8.25C11.75 8.38807 11.8619 8.5 12 8.5C12.1381 8.5 12.25 8.38807 12.25 8.25Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],x3=[["path",{d:"M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],w3=[["path",{d:"M9.14339 10.691L9.35031 10.4841C11.329 8.50532 14.5372 8.50532 16.5159 10.4841C18.4947 12.4628 18.4947 15.671 16.5159 17.6497L13.6497 20.5159C11.671 22.4947 8.46279 22.4947 6.48405 20.5159C4.50532 18.5372 4.50532 15.329 6.48405 13.3503L6.9484 12.886",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M17.0516 11.114L17.5159 10.6497C19.4947 8.67095 19.4947 5.46279 17.5159 3.48405C15.5372 1.50532 12.329 1.50532 10.3503 3.48405L7.48405 6.35031C5.50532 8.32904 5.50532 11.5372 7.48405 13.5159C9.46279 15.4947 12.671 15.4947 14.6497 13.5159L14.8566 13.309",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"1"}]],S3=[["path",{d:"M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"1"}]],k3=[["path",{d:"M19.9264 22.2516V20.691C19.9264 20.288 20.0525 19.8966 20.2639 19.5531C21.7583 17.1245 22.2279 14.5196 21.9002 13.505C20.857 11.3418 17.3758 10.4907 15.76 10.2878L16.7966 5.12292C16.9705 4.30387 16.3513 3.47938 15.4135 3.28136C14.4758 3.08334 13.5746 3.58679 13.4007 4.40583L11.3462 14.0815L8.77462 12.4424C8.77462 12.4424 7.47969 11.406 6.44041 12.4424C5.40114 13.4788 6.44041 14.7701 6.44041 14.7701L10.3488 19.7776C10.6003 20.0997 10.7468 20.4908 10.7688 20.8984L10.8401 22.2177",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M7.32936 1.85194C7.32936 1.85194 9.54861 1.58797 9.867 1.90156C10.1124 2.14335 9.867 4.36134 9.867 4.36134M9.867 1.90156L6.89808 4.84002M4.6477 9.59694C4.6477 9.59694 2.42845 9.86092 2.11005 9.54732C1.86463 9.30553 2.11005 7.08754 2.11005 7.08754M2.11005 9.54732L5.07898 6.60886",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],C3=[["path",{d:"M4 5L20 5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M4 12L20 12",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M4 19L20 19",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],T3=[["path",{d:"M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],A3=[["path",{d:"M12 22C11.1818 22 10.4002 21.6698 8.83693 21.0095C4.94564 19.3657 3 18.5438 3 17.1613C3 16.7742 3 10.0645 3 7M12 22C12.8182 22 13.5998 21.6698 15.1631 21.0095C19.0544 19.3657 21 18.5438 21 17.1613V7M12 22L12 11.3548",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M8.32592 9.69138L5.40472 8.27785C3.80157 7.5021 3 7.11423 3 6.5C3 5.88577 3.80157 5.4979 5.40472 4.72215L8.32592 3.30862C10.1288 2.43621 11.0303 2 12 2C12.9697 2 13.8712 2.4362 15.6741 3.30862L18.5953 4.72215C20.1984 5.4979 21 5.88577 21 6.5C21 7.11423 20.1984 7.5021 18.5953 8.27785L15.6741 9.69138C13.8712 10.5638 12.9697 11 12 11C11.0303 11 10.1288 10.5638 8.32592 9.69138Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M6 12L8 13",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}],["path",{d:"M17 4L7 9",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"3"}]],M3=[["path",{d:"M12.828 6.00096C12.9388 5.68791 12.999 5.35099 12.999 5C12.999 3.34315 11.6559 2 9.99904 2C8.34219 2 6.99904 3.34315 6.99904 5C6.99904 5.35099 7.05932 5.68791 7.17008 6.00096C4.88532 6.0093 3.66601 6.09039 2.87772 6.87868C2.08951 7.66689 2.00836 8.88603 2 11.1704C2.31251 11.06 2.64876 11 2.99904 11C4.6559 11 5.99904 12.3431 5.99904 14C5.99904 15.6569 4.6559 17 2.99904 17C2.64876 17 2.31251 16.94 2 16.8296C2.00836 19.114 2.08951 20.3331 2.87772 21.1213C3.66593 21.9095 4.88508 21.9907 7.16941 21.999C7.05908 21.6865 6.99904 21.3503 6.99904 21C6.99904 19.3431 8.34219 18 9.99904 18C11.6559 18 12.999 19.3431 12.999 21C12.999 21.3503 12.939 21.6865 12.8287 21.999C15.113 21.9907 16.3322 21.9095 17.1204 21.1213C17.9086 20.333 17.9897 19.1137 17.9981 16.829C18.3111 16.9397 18.648 17 18.999 17C20.6559 17 21.999 15.6569 21.999 14C21.999 12.3431 20.6559 11 18.999 11C18.648 11 18.3111 11.0603 17.9981 11.171C17.9897 8.88627 17.9086 7.66697 17.1204 6.87868C16.3321 6.09039 15.1128 6.0093 12.828 6.00096Z",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],E3=[["path",{d:"M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z",stroke:"currentColor",strokeWidth:"1.5",key:"0"}],["path",{d:"M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z",stroke:"currentColor",strokeWidth:"1.5",key:"2"}],["path",{d:"M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"3"}]],D3=[["path",{d:"M17 17L21 21",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],z3=[["path",{d:"M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z",stroke:"currentColor",strokeWidth:"1.5",key:"0"}],["path",{d:"M21.011 14.0965C21.5329 13.9558 21.7939 13.8854 21.8969 13.7508C22 13.6163 22 13.3998 22 12.9669V11.0332C22 10.6003 22 10.3838 21.8969 10.2493C21.7938 10.1147 21.5329 10.0443 21.011 9.90358C19.0606 9.37759 17.8399 7.33851 18.3433 5.40087C18.4817 4.86799 18.5509 4.60156 18.4848 4.44529C18.4187 4.28902 18.2291 4.18134 17.8497 3.96596L16.125 2.98673C15.7528 2.77539 15.5667 2.66972 15.3997 2.69222C15.2326 2.71472 15.0442 2.90273 14.6672 3.27873C13.208 4.73448 10.7936 4.73442 9.33434 3.27864C8.95743 2.90263 8.76898 2.71463 8.60193 2.69212C8.43489 2.66962 8.24877 2.77529 7.87653 2.98663L6.15184 3.96587C5.77253 4.18123 5.58287 4.28891 5.51678 4.44515C5.45068 4.6014 5.51987 4.86787 5.65825 5.4008C6.16137 7.3385 4.93972 9.37763 2.98902 9.9036C2.46712 10.0443 2.20617 10.1147 2.10308 10.2492C2 10.3838 2 10.6003 2 11.0332V12.9669C2 13.3998 2 13.6163 2.10308 13.7508C2.20615 13.8854 2.46711 13.9558 2.98902 14.0965C4.9394 14.6225 6.16008 16.6616 5.65672 18.5992C5.51829 19.1321 5.44907 19.3985 5.51516 19.5548C5.58126 19.7111 5.77092 19.8188 6.15025 20.0341L7.87495 21.0134C8.24721 21.2247 8.43334 21.3304 8.6004 21.3079C8.76746 21.2854 8.95588 21.0973 9.33271 20.7213C10.7927 19.2644 13.2088 19.2643 14.6689 20.7212C15.0457 21.0973 15.2341 21.2853 15.4012 21.3078C15.5682 21.3303 15.7544 21.2246 16.1266 21.0133L17.8513 20.034C18.2307 19.8187 18.4204 19.711 18.4864 19.5547C18.5525 19.3984 18.4833 19.132 18.3448 18.5991C17.8412 16.6616 19.0609 14.6226 21.011 14.0965Z",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"1"}]],N3=[["path",{d:"M2 12C2 8.25027 2 6.3754 2.95491 5.06107C3.26331 4.6366 3.6366 4.26331 4.06107 3.95491C5.3754 3 7.25027 3 11 3H13C16.7497 3 18.6246 3 19.9389 3.95491C20.3634 4.26331 20.7367 4.6366 21.0451 5.06107C22 6.3754 22 8.25027 22 12C22 15.7497 22 17.6246 21.0451 18.9389C20.7367 19.3634 20.3634 19.7367 19.9389 20.0451C18.6246 21 16.7497 21 13 21H11C7.25027 21 5.3754 21 4.06107 20.0451C3.6366 19.7367 3.26331 19.3634 2.95491 18.9389C2 17.6246 2 15.7497 2 12Z",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M9.5 3.5L9.5 20.5",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M5 7C5 7 5.91421 7 6.5 7",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}],["path",{d:"M5 11H6.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"3"}],["path",{d:"M17 10L15.7735 11.0572C15.2578 11.5016 15 11.7239 15 12C15 12.2761 15.2578 12.4984 15.7735 12.9428L17 14",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"4"}]],R3=[["path",{d:"M3.99963 5.00055L9.99963 5.00031",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M12.9996 5.00031L19.9996 5.00031",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M15.9996 9.00031L15.9996 15.0003",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"2"}],["path",{d:"M9.99963 2.00031L9.99963 8.00031",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"3"}],["path",{d:"M11.9996 16.0003L11.9996 22.0003",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"4"}],["path",{d:"M15.9996 12.0001L19.9996 12.0003",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"5"}],["path",{d:"M3.99963 12.0005L12.9996 12.0003",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"6"}],["path",{d:"M11.9996 19.0003L19.9996 19.0003",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"7"}],["path",{d:"M3.99963 19.0005L8.99963 19.0003",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"8"}]],L3=[["path",{d:"M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],O3=[["path",{d:"M11.5 5C14.3284 5 15.7426 5 16.6213 5.87868C17.5 6.75736 17.5 8.17157 17.5 11C17.5 19 21.5 19 21.5 19H7.23863C6.91067 19 6.74668 19 6.37485 18.9032C6.00302 18.8063 5.94387 18.7733 5.82558 18.7072C4.6855 18.0702 2.5 16.1742 2.5 11C2.5 8.17157 2.5 6.75736 3.37868 5.87868C4.25736 5 5.67157 5 8.5 5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M2.5 10V16C2.5 18.8284 2.5 20.2426 3.37868 21.1213C4.25736 22 5.67157 22 8.5 22H11.5761C14.4045 22 15.8188 22 16.6974 21.1213C17.1873 20.6314 17.4041 19.9751 17.5 19",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M11.5 3.5V6.5C11.5 6.96594 11.5 7.19891 11.4239 7.38268C11.3224 7.62771 11.1277 7.82239 10.8827 7.92388C10.6989 8 10.4659 8 10 8C9.53406 8 9.30109 8 9.11732 7.92388C8.87229 7.82239 8.67761 7.62771 8.57612 7.38268C8.5 7.19891 8.5 6.96594 8.5 6.5V3.5C8.5 3.03406 8.5 2.80109 8.57612 2.61732C8.67761 2.37229 8.87229 2.17761 9.11732 2.07612C9.30109 2 9.53406 2 10 2C10.4659 2 10.6989 2 10.8827 2.07612C11.1277 2.17761 11.3224 2.37229 11.4239 2.61732C11.5 2.80109 11.5 3.03406 11.5 3.5Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],B3=[["path",{d:"M3.50002 10V15C3.50002 17.8284 3.50002 19.2426 4.37869 20.1213C5.25737 21 6.67159 21 9.50002 21H14.5C17.3284 21 18.7427 21 19.6213 20.1213C20.5 19.2426 20.5 17.8284 20.5 15V10",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M17 7.50184C17 8.88255 15.8807 9.99997 14.5 9.99997C13.1193 9.99997 12 8.88068 12 7.49997C12 8.88068 10.8807 9.99997 9.50002 9.99997C8.1193 9.99997 7.00002 8.88068 7.00002 7.49997C7.00002 8.88068 5.82655 9.99997 4.37901 9.99997C3.59984 9.99997 2.90008 9.67567 2.42 9.16087C1.59462 8.2758 2.12561 6.97403 2.81448 5.98842L3.20202 5.45851C4.08386 4.2527 4.52478 3.6498 5.16493 3.32494C5.80508 3.00008 6.55201 3.00018 8.04587 3.00038L15.9551 3.00143C17.4485 3.00163 18.1952 3.00173 18.8351 3.32658C19.475 3.65143 19.9158 4.25414 20.7974 5.45957L21.1855 5.99029C21.8744 6.97589 22.4054 8.27766 21.58 9.16273C21.0999 9.67754 20.4002 10.0018 19.621 10.0018C18.1734 10.0018 17 8.88255 17 7.50184Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M14.9971 17C14.3133 17.6072 13.2247 18 11.9985 18C10.7723 18 9.68376 17.6072 9 17",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],H3=[["path",{d:"M16.9991 12C16.9991 14.7614 14.7605 17 11.9991 17C9.23766 17 6.99908 14.7614 6.99908 12C6.99908 9.23858 9.23766 7 11.9991 7C14.7605 7 16.9991 9.23858 16.9991 12Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M12.1247 3.25H11.9997M12.1242 20.75H11.9992M20.75 12.125V12M3.25 12.125V12M18.2752 5.90098L18.1868 5.81259M5.90051 18.275L5.81212 18.1866M18.0987 18.2756L18.187 18.1872M5.72429 5.9012L5.81267 5.81282M12.2497 3.25C12.2497 3.38807 12.1378 3.5 11.9997 3.5C11.8616 3.5 11.7497 3.38807 11.7497 3.25C11.7497 3.11193 11.8616 3 11.9997 3C12.1378 3 12.2497 3.11193 12.2497 3.25ZM12.2492 20.75C12.2492 20.8881 12.1373 21 11.9992 21C11.8611 21 11.7492 20.8881 11.7492 20.75C11.7492 20.6119 11.8611 20.5 11.9992 20.5C12.1373 20.5 12.2492 20.6119 12.2492 20.75ZM20.75 12.25C20.6119 12.25 20.5 12.1381 20.5 12C20.5 11.8619 20.6119 11.75 20.75 11.75C20.8881 11.75 21 11.8619 21 12C21 12.1381 20.8881 12.25 20.75 12.25ZM3.25 12.25C3.11193 12.25 3 12.1381 3 12C3 11.8619 3.11193 11.75 3.25 11.75C3.38807 11.75 3.5 11.8619 3.5 12C3.5 12.1381 3.38807 12.25 3.25 12.25ZM18.3636 5.98937C18.266 6.087 18.1077 6.087 18.01 5.98937C17.9124 5.89174 17.9124 5.73345 18.01 5.63582C18.1077 5.53819 18.266 5.53819 18.3636 5.63582C18.4612 5.73345 18.4612 5.89174 18.3636 5.98937ZM5.9889 18.3634C5.89127 18.461 5.73297 18.461 5.63534 18.3634C5.53771 18.2658 5.53771 18.1075 5.63534 18.0099C5.73297 17.9122 5.89127 17.9122 5.9889 18.0099C6.08653 18.1075 6.08653 18.2658 5.9889 18.3634ZM18.0103 18.364C17.9126 18.2663 17.9126 18.108 18.0103 18.0104C18.1079 17.9128 18.2662 17.9128 18.3638 18.0104C18.4614 18.108 18.4614 18.2663 18.3638 18.364C18.2662 18.4616 18.1079 18.4616 18.0103 18.364ZM5.6359 5.98959C5.53827 5.89196 5.53827 5.73367 5.6359 5.63604C5.73353 5.53841 5.89182 5.53841 5.98945 5.63604C6.08708 5.73367 6.08708 5.89196 5.98945 5.98959C5.89182 6.08722 5.73353 6.08722 5.6359 5.98959Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],j3=[["circle",{cx:"1.5",cy:"1.5",r:"1.5",transform:"matrix(1 0 0 -1 16 8.00024)",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M2.77423 11.1439C1.77108 12.2643 1.7495 13.9546 2.67016 15.1437C4.49711 17.5033 6.49674 19.5029 8.85633 21.3298C10.0454 22.2505 11.7357 22.2289 12.8561 21.2258C15.8979 18.5022 18.6835 15.6559 21.3719 12.5279C21.6377 12.2187 21.8039 11.8397 21.8412 11.4336C22.0062 9.63798 22.3452 4.46467 20.9403 3.05974C19.5353 1.65481 14.362 1.99377 12.5664 2.15876C12.1603 2.19608 11.7813 2.36233 11.472 2.62811C8.34412 5.31646 5.49781 8.10211 2.77423 11.1439Z",stroke:"currentColor",strokeWidth:"1.5",key:"1"}],["path",{d:"M7.00002 14.0002L10 17.0002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}]],q3=[["path",{d:"M2.99994 17C2.99994 17.93 2.99994 18.395 3.10216 18.7765C3.37956 19.8117 4.18821 20.6204 5.22348 20.8978C5.60498 21 6.06997 21 6.99994 21L16.9999 21C17.9299 21 18.3949 21 18.7764 20.8978C19.8117 20.6204 20.6203 19.8117 20.8977 18.7765C20.9999 18.395 20.9999 17.93 20.9999 17",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M16.5 7.49993C16.5 7.49993 13.1858 2.99997 12 2.99996C10.8141 2.99995 7.50002 7.49996 7.50002 7.49996M12 3.99996V16",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}]],We=l=>tr.memo(({size:a=16,className:r="",color:s="currentColor",strokeWidth:c=1.5,...d})=>C.jsx(Bf,{icon:l,size:a,className:r,color:s,strokeWidth:c,...d}));We(f3);We(p3);We(g3);const I3=We(D3),F3=We(a3);We(h3);We(q3);const Um=We(l3);We(Jp);We(B3);We($p);We(Pp);const U3=We(Zp),_3=We(Kp);We(o3);We(c3);const G3=We(d3);We(m3);We(L3);We(t3);We(O3);We(j3);We(w3);const Y3=We(S3),V3=We(Wp),X3=We(Xp);We(A3);We(M3);We(u3);We(s3);We(i3);We(y3);We(R3);We(C3);We(N3);We(v3);We(x3);We(z3);We(e3);const W3=We(k3),Q3=We(r3),P3=We(b3),Z3=We(n3),K3=We(Qp),$3=We(E3),J3=We(H3),e6=We(T3),_m="flint_docs_open_folders",Gm="flint_docs_theme",cu=(l,a,r=[])=>{var c,d;if(!l)return null;const s=l.toLowerCase();for(const m of a){if(((c=m.id)==null?void 0:c.toLowerCase())===s||((d=m.slug)==null?void 0:d.toLowerCase())===s)return r;if(m.children&&m.children.length>0){const g=cu(l,m.children,[...r,m.id]);if(g)return g}}return null},Hf=tr.memo(({nodes:l,activeDocId:a,onSelectDoc:r,className:s=""})=>{const[c,d]=le.useState(""),[m,g]=le.useState(()=>{try{const O=localStorage.getItem(Gm);if(O)return O==="dark"}catch{}return!document.documentElement.classList.contains("theme-light")}),y=le.useCallback(()=>{g(O=>{const V=!O;try{localStorage.setItem(Gm,V?"dark":"light")}catch{}return V?(document.documentElement.classList.remove("theme-light","light"),document.documentElement.classList.add("dark")):(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("theme-light","light")),V})},[]);le.useEffect(()=>{m?(document.documentElement.classList.remove("theme-light","light"),document.documentElement.classList.add("dark")):(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("theme-light","light"))},[m]);const[v,k]=le.useState(()=>{try{const W=localStorage.getItem(_m);if(W){const ce=JSON.parse(W);if(Array.isArray(ce))return new Set(ce)}}catch{}const O=new Set,V=cu(a,l);return V&&V.length>0&&V.forEach(W=>O.add(W)),O});le.useEffect(()=>{try{localStorage.setItem(_m,JSON.stringify(Array.from(v)))}catch{}},[v]),le.useEffect(()=>{if(!a)return;const O=cu(a,l);O&&O.length>0&&k(V=>{let W=!1;const ce=new Set(V);return O.forEach(re=>{ce.has(re)||(ce.add(re),W=!0)}),W?ce:V})},[a,l]);const M=le.useCallback(O=>{k(V=>{const W=new Set(V);return W.has(O)?W.delete(O):W.add(O),W})},[]),N=le.useMemo(()=>l.find(O=>O.id==="home"||O.slug==="home"),[l]),q=le.useMemo(()=>l.filter(O=>O.id!=="home"&&O.slug!=="home"),[l]),{filteredNodes:U,matchCount:X}=le.useMemo(()=>{if(!c.trim())return{filteredNodes:q,matchCount:0};const O=c.toLowerCase();let V=0;const W=new Set,ce=(ie,ue=[])=>{const Re=[];for(const Oe of ie){const Be=Oe.title.toLowerCase().includes(O),Je=Oe.content?Oe.content.toLowerCase().includes(O):!1,Ve=[...ue,Oe.id];let ft;Oe.children&&(ft=ce(Oe.children,Ve));const et=ft&&ft.length>0;(Be||Je||et)&&((Be||Je)&&(V++,ue.forEach(lt=>W.add(lt))),et&&W.add(Oe.id),Re.push({...Oe,children:ft}))}return Re},re=ce(q);return k(ie=>new Set([...ie,...W])),{filteredNodes:re,matchCount:V}},[q,c]),K=(O,V=0)=>{const W=!!(O.isFolder||O.children&&O.children.length>0),ce=v.has(O.id),re=a===O.id||a===O.slug;return C.jsx(Of,{id:O.id,level:V,title:O.title,typeBadge:O.badge,isFolder:W,isOpen:ce,isActive:re,onSelect:()=>{W?M(O.id):r(O)},onToggle:()=>M(O.id),children:W&&O.children&&O.children.map(ie=>K(ie,V+1))},O.id)};return C.jsxs("aside",{className:`sidebar-container w-[280px] shrink-0 sticky top-0 h-screen max-h-screen flex flex-col bg-transparent select-none pt-2 pl-4 pr-1.5 border-r border-[#363636] overscroll-contain overflow-x-hidden ${s}`,children:[C.jsx("div",{className:"pt-4 px-3 pb-2.5 flex items-center",children:C.jsxs("a",{href:"#docs/home",onClick:O=>{O.preventDefault(),N?r(N):window.location.hash="#docs/home"},className:"flex items-start gap-1.5 text-white hover:text-white cursor-pointer",children:[C.jsx("img",{src:"./flint-icon.png",alt:"Flint",className:"h-[21px] w-auto object-contain shrink-0 translate-y-[1.5px]"}),C.jsx("span",{className:"text-[21px] font-bold tracking-tight text-white leading-tight",children:"Flint Docs"})]})}),C.jsx("div",{className:"px-3 pb-3 flex items-center",children:C.jsx("button",{type:"button",onClick:y,title:m?"Switch to light mode":"Switch to dark mode",className:`flex items-center justify-between w-[46px] h-[22px] px-1.5 rounded-full cursor-pointer select-none transition-none ${m?"bg-[#1e1e1e] border border-[#2b2b2b] hover:border-[#3a3a3a]":"bg-[#e4e4e7] border border-[#d4d4d8] hover:border-[#a1a1aa]"}`,children:m?C.jsxs(C.Fragment,{children:[C.jsx(e6,{size:12,className:"text-[#999999] shrink-0"}),C.jsx("div",{className:"w-3 h-3 rounded-full bg-white shrink-0 shadow-sm"})]}):C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"w-3 h-3 rounded-full bg-white shrink-0 shadow-sm"}),C.jsx(J3,{size:12,className:"text-[#52525b] shrink-0"})]})})}),C.jsxs("div",{className:"px-3 pb-3",children:[C.jsxs("div",{className:"relative flex items-center w-full",children:[C.jsx(I3,{size:13,className:"absolute left-2.5 text-[#555555] pointer-events-none shrink-0"}),C.jsx("input",{type:"text",value:c,onChange:O=>d(O.target.value),placeholder:"Search page or heading...",className:"w-full h-8 pl-8 pr-7 bg-[#1a1a1a] border border-[#282828] rounded-md text-[13px] text-[#dadada] placeholder-[#666666] outline-none focus:border-[#444444]"}),c&&C.jsx("button",{type:"button",onClick:()=>d(""),className:"absolute right-2 text-[#666666] hover:text-[#dadada] cursor-pointer",children:C.jsx(F3,{size:12})})]}),c&&C.jsxs("div",{className:"text-[11px] text-[#777777] mt-1.5 px-0.5",children:[X," ",X===1?"match":"matches"]})]}),C.jsx("div",{className:"flex-1 sidebar-hover-scrollbar px-1 pb-6",children:C.jsxs("div",{className:"flex flex-col w-full space-y-0.5",children:[U.map(O=>K(O,0)),N&&!c&&C.jsx("div",{onClick:()=>r(N),style:{paddingLeft:28},className:`flex items-center pr-2 py-1 cursor-pointer text-[13.5px] font-normal transition-none bg-transparent ${a==="home"||a===N.slug||a===N.id?"text-[#ea580c] hover:text-[#f97316]":"text-[#999999] hover:text-[#ffffff]"}`,children:C.jsx("span",{children:"Home"})})]})})]})});Hf.displayName="DocTreeSidebar";class oe extends Error{constructor(a,r){var s="KaTeX parse error: "+a,c,d,m=r&&r.loc;if(m&&m.start<=m.end){var g=m.lexer.input;c=m.start,d=m.end,c===g.length?s+=" at end of input: ":s+=" at position "+(c+1)+": ";var y=g.slice(c,d).replace(/[^]/g,"$&̲"),v;c>15?v="…"+g.slice(c-15,c):v=g.slice(0,c);var k;d+15<g.length?k=g.slice(d,d+15)+"…":k=g.slice(d),s+=v+y+k}super(s),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,oe.prototype),this.position=c,c!=null&&d!=null&&(this.length=d-c),this.rawMessage=a}}var t6=/([A-Z])/g,n6=l=>l.replace(t6,"-$1").toLowerCase(),a6={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},i6=/[&><"']/g,hn=l=>String(l).replace(i6,a=>a6[a]),g0=l=>l.type==="ordgroup"||l.type==="color"?l.body.length===1?g0(l.body[0]):l:l.type==="font"?g0(l.body):l,r6=new Set(["mathord","textord","atom"]),Ka=l=>r6.has(g0(l).type),l6=l=>{var a=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(l);return a?a[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(a[1])?null:a[1].toLowerCase():"_relative"},uu={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:l=>"#"+l},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(l,a)=>(a.push(l),a)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:l=>Math.max(0,l),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:l=>Math.max(0,l),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:l=>Math.max(0,l),cli:"-e, --max-expand <n>",cliProcessor:l=>l==="Infinity"?1/0:parseInt(l)},globalGroup:{type:"boolean",cli:!1}};function s6(l){if(typeof l!="string")return l.enum[0];switch(l){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function o6(l){if(Object.prototype.hasOwnProperty.call(l,"default")&&l.default!==void 0)return l.default;var a=Array.isArray(l.type)?l.type[0]:l.type;return s6(a)}function c6(l,a,r,s){var c=Object.prototype.hasOwnProperty.call(r,a)?r[a]:void 0,d=Object.prototype.hasOwnProperty.call(s,"processor")?s.processor:void 0;l[a]=c!==void 0?d?d(c):c:o6(s)}class zu{constructor(a){a===void 0&&(a={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,a=a||{};for(var r of Object.keys(uu)){var s=uu[r];s&&c6(this,r,a,s)}}reportNonstrict(a,r,s){var c=this.strict;if(typeof c=="function"&&(c=c(a,r,s)),!(!c||c==="ignore")){if(c===!0||c==="error")throw new oe("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+a+"]"),s);c==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+a+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+c+"': "+r+" ["+a+"]"))}}useStrictBehavior(a,r,s){var c=this.strict;if(typeof c=="function")try{c=c(a,r,s)}catch{c="error"}return!c||c==="ignore"?!1:c===!0||c==="error"?!0:c==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+a+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+c+"': "+r+" ["+a+"]")),!1)}isTrusted(a){if("url"in a&&a.url&&!a.protocol){var r=l6(a.url);if(r==null)return!1;a.protocol=r}var s=typeof this.trust=="function"?this.trust(a):this.trust;return!!s}}class ki{constructor(a,r,s){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=a,this.size=r,this.cramped=s}sup(){return wa[u6[this.id]]}sub(){return wa[d6[this.id]]}fracNum(){return wa[h6[this.id]]}fracDen(){return wa[m6[this.id]]}cramp(){return wa[f6[this.id]]}text(){return wa[p6[this.id]]}isTight(){return this.size>=2}}var Nu=0,b0=1,_r=2,Pa=3,Vl=4,la=5,Gr=6,wn=7,wa=[new ki(Nu,0,!1),new ki(b0,0,!0),new ki(_r,1,!1),new ki(Pa,1,!0),new ki(Vl,2,!1),new ki(la,2,!0),new ki(Gr,3,!1),new ki(wn,3,!0)],u6=[Vl,la,Vl,la,Gr,wn,Gr,wn],d6=[la,la,la,la,wn,wn,wn,wn],h6=[_r,Pa,Vl,la,Gr,wn,Gr,wn],m6=[Pa,Pa,la,la,wn,wn,wn,wn],f6=[b0,b0,Pa,Pa,la,la,wn,wn],p6=[Nu,b0,_r,Pa,_r,Pa,_r,Pa],$e={DISPLAY:wa[Nu],TEXT:wa[_r],SCRIPT:wa[Vl],SCRIPTSCRIPT:wa[Gr]},du=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function g6(l){for(var a=0;a<du.length;a++)for(var r=du[a],s=0;s<r.blocks.length;s++){var c=r.blocks[s];if(l>=c[0]&&l<=c[1])return r.name}return null}var v0=[];du.forEach(l=>l.blocks.forEach(a=>v0.push(...a)));function jf(l){for(var a=0;a<v0.length;a+=2)if(l>=v0[a]&&l<=v0[a+1])return!0;return!1}var tn=l=>l+" "+l,Ur=80,v6=function(a,r){return"M95,"+(622+a+r)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+a/2.075+" -"+a+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+a)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+a)+" "+r+"h400000v"+(40+a)+"h-400000z"},y6=function(a,r){return"M263,"+(601+a+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+a/2.084+" -"+a+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+a)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+a)+" "+r+"h400000v"+(40+a)+"h-400000z"},b6=function(a,r){return"M983 "+(10+a+r)+`
l`+a/3.13+" -"+a+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+a)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+a)+" "+r+"h400000v"+(40+a)+"h-400000z"},x6=function(a,r){return"M424,"+(2398+a+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+a/4.223+" -"+a+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+a)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+a)+" "+r+`
h400000v`+(40+a)+"h-400000z"},w6=function(a,r){return"M473,"+(2713+a+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+a/5.298+" -"+a+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+a)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+a)+" "+r+"h400000v"+(40+a)+"H1017.7z"},S6=function(a){var r=a/2;return"M400000 "+a+" H0 L"+r+" 0 l65 45 L145 "+(a-80)+" H400000z"},k6=function(a,r,s){var c=s-54-r-a;return"M702 "+(a+r)+"H400000"+(40+a)+`
H742v`+c+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+a)+"H742z"},C6=function(a,r,s){r=1e3*r;var c="";switch(a){case"sqrtMain":c=v6(r,Ur);break;case"sqrtSize1":c=y6(r,Ur);break;case"sqrtSize2":c=b6(r,Ur);break;case"sqrtSize3":c=x6(r,Ur);break;case"sqrtSize4":c=w6(r,Ur);break;case"sqrtTall":c=k6(r,Ur,s)}return c},T6=function(a,r){switch(a){case"⎜":return tn("M291 0 H417 V"+r+" H291z");case"∣":return tn("M145 0 H188 V"+r+" H145z");case"∥":return tn("M145 0 H188 V"+r+" H145z")+tn("M367 0 H410 V"+r+" H367z");case"⎟":return tn("M457 0 H583 V"+r+" H457z");case"⎢":return tn("M319 0 H403 V"+r+" H319z");case"⎥":return tn("M263 0 H347 V"+r+" H263z");case"⎪":return tn("M384 0 H504 V"+r+" H384z");case"⏐":return tn("M312 0 H355 V"+r+" H312z");case"‖":return tn("M257 0 H300 V"+r+" H257z")+tn("M478 0 H521 V"+r+" H478z");default:return""}},Ym={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:tn("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:tn("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:tn("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:tn("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:tn("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:tn("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:tn("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:tn("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},A6=function(a,r){switch(a){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+r+" v1759 v84 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+r+" v1759 h84z";case"vert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+" v585 h43z";case"doublevert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+` v585 h43z
M367 15 v585 v`+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+r+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+r+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+r+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v602 h84z
M403 1759 V0 H319 V1759 v`+r+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v602 h84z
M347 1759 V0 h-84 V1759 v`+r+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(r+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(r+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(r+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(r+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function M6(l){return"toText"in l}class Xr{constructor(a){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=a,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(a){return this.classes.includes(a)}toNode(){for(var a=document.createDocumentFragment(),r=0;r<this.children.length;r++)a.appendChild(this.children[r].toNode());return a}toMarkup(){for(var a="",r=0;r<this.children.length;r++)a+=this.children[r].toMarkup();return a}toText(){return this.children.map(a=>{if(M6(a))return a.toText();throw new Error("Expected MathDomNode with toText, got "+a.constructor.name)}).join("")}}var hu={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},E6={ex:!0,em:!0,mu:!0},qf=function(a){return typeof a!="string"&&(a=a.unit),a in hu||a in E6||a==="ex"},It=function(a,r){var s;if(a.unit in hu)s=hu[a.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(a.unit==="mu")s=r.fontMetrics().cssEmPerMu;else{var c;if(r.style.isTight()?c=r.havingStyle(r.style.text()):c=r,a.unit==="ex")s=c.fontMetrics().xHeight;else if(a.unit==="em")s=c.fontMetrics().quad;else throw new oe("Invalid unit: '"+a.unit+"'");c!==r&&(s*=c.sizeMultiplier/r.sizeMultiplier)}return Math.min(a.number*s,r.maxSize)},fe=function(a){return+a.toFixed(4)+"em"},Mi=function(a){return a.filter(r=>r).join(" ")},Ru=function(a){var r="";for(var s of Object.keys(a)){var c=a[s];c!==void 0&&(r+=n6(s)+":"+c+";")}return r},If=function(a,r,s){if(this.classes=a||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=s||{},r){r.style.isTight()&&this.classes.push("mtight");var c=r.getColor();c&&(this.style.color=c)}},Ff=function(a){var r=document.createElement(a);r.className=Mi(this.classes),Object.assign(r.style,this.style);for(var s of Object.keys(this.attributes))r.setAttribute(s,this.attributes[s]);for(var c=0;c<this.children.length;c++)r.appendChild(this.children[c].toNode());return r},D6=/[\s"'>/=\x00-\x1f]/,Uf=function(a){var r="<"+a;this.classes.length&&(r+=' class="'+hn(Mi(this.classes))+'"');var s=Ru(this.style);s&&(r+=' style="'+hn(s)+'"');for(var c of Object.keys(this.attributes)){if(D6.test(c))throw new oe("Invalid attribute name '"+c+"'");r+=" "+c+'="'+hn(this.attributes[c])+'"'}r+=">";for(var d=0;d<this.children.length;d++)r+=this.children[d].toMarkup();return r+="</"+a+">",r};class Wr{constructor(a,r,s,c){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,If.call(this,a,s,c),this.children=r||[]}setAttribute(a,r){this.attributes[a]=r}hasClass(a){return this.classes.includes(a)}toNode(){return Ff.call(this,"span")}toMarkup(){return Uf.call(this,"span")}}class w0{constructor(a,r,s,c){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,If.call(this,r,c),this.children=s||[],this.setAttribute("href",a)}setAttribute(a,r){this.attributes[a]=r}hasClass(a){return this.classes.includes(a)}toNode(){return Ff.call(this,"a")}toMarkup(){return Uf.call(this,"a")}}class z6{constructor(a,r,s){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=a,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=s}hasClass(a){return this.classes.includes(a)}toNode(){var a=document.createElement("img");return a.src=this.src,a.alt=this.alt,a.className="mord",Object.assign(a.style,this.style),a}toMarkup(){var a='<img src="'+hn(this.src)+'"'+(' alt="'+hn(this.alt)+'"'),r=Ru(this.style);return r&&(a+=' style="'+hn(r)+'"'),a+="'/>",a}}var N6={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class Vn{constructor(a,r,s,c,d,m,g,y){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=a,this.height=r||0,this.depth=s||0,this.italic=c||0,this.skew=d||0,this.width=m||0,this.classes=g||[],this.style=y||{},this.maxFontSize=0;var v=g6(this.text.charCodeAt(0));v&&this.classes.push(v+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=N6[this.text])}hasClass(a){return this.classes.includes(a)}toNode(){var a=document.createTextNode(this.text),r=null;return this.italic>0&&(r=document.createElement("span"),r.style.marginRight=fe(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Mi(this.classes)),Object.keys(this.style).length>0&&(r=r||document.createElement("span"),Object.assign(r.style,this.style)),r?(r.appendChild(a),r):a}toMarkup(){var a=!1,r="<span";this.classes.length&&(a=!0,r+=' class="',r+=hn(Mi(this.classes)),r+='"');var s="";this.italic>0&&(s+="margin-right:"+fe(this.italic)+";"),s+=Ru(this.style),s&&(a=!0,r+=' style="'+hn(s)+'"');var c=hn(this.text);return a?(r+=">",r+=c,r+="</span>",r):c}}class Za{constructor(a,r){this.children=void 0,this.attributes=void 0,this.children=a||[],this.attributes=r||{}}toNode(){var a="http://www.w3.org/2000/svg",r=document.createElementNS(a,"svg");for(var s of Object.keys(this.attributes))r.setAttribute(s,this.attributes[s]);for(var c=0;c<this.children.length;c++)r.appendChild(this.children[c].toNode());return r}toMarkup(){var a='<svg xmlns="http://www.w3.org/2000/svg"';for(var r of Object.keys(this.attributes))a+=" "+r+'="'+hn(this.attributes[r])+'"';a+=">";for(var s=0;s<this.children.length;s++)a+=this.children[s].toMarkup();return a+="</svg>",a}}class Ei{constructor(a,r){this.pathName=void 0,this.alternate=void 0,this.pathName=a,this.alternate=r}toNode(){var a="http://www.w3.org/2000/svg",r=document.createElementNS(a,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",Ym[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+hn(this.alternate)+'"/>':'<path d="'+hn(Ym[this.pathName])+'"/>'}}class mu{constructor(a){this.attributes=void 0,this.attributes=a||{}}toNode(){var a="http://www.w3.org/2000/svg",r=document.createElementNS(a,"line");for(var s of Object.keys(this.attributes))r.setAttribute(s,this.attributes[s]);return r}toMarkup(){var a="<line";for(var r of Object.keys(this.attributes))a+=" "+r+'="'+hn(this.attributes[r])+'"';return a+="/>",a}}function R6(l){if(l instanceof Vn)return l;throw new Error("Expected symbolNode but got "+String(l)+".")}function L6(l){if(l instanceof Wr)return l;throw new Error("Expected span<HtmlDomNode> but got "+String(l)+".")}var O6=l=>l instanceof Wr||l instanceof w0||l instanceof Xr,Sa={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Qc={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Vm={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function B6(l,a){Sa[l]=a}function Lu(l,a,r){if(!Sa[a])throw new Error("Font metrics not found for font: "+a+".");var s=l.charCodeAt(0),c=Sa[a][s];if(!c&&l[0]in Vm&&(s=Vm[l[0]].charCodeAt(0),c=Sa[a][s]),!c&&r==="text"&&jf(s)&&(c=Sa[a][77]),c)return{depth:c[0],height:c[1],italic:c[2],skew:c[3],width:c[4]}}var Pc={};function H6(l){var a;if(l>=5?a=0:l>=3?a=1:a=2,!Pc[a]){var r=Pc[a]={cssEmPerMu:Qc.quad[a]/18};for(var s of Object.keys(Qc))r[s]=Qc[s][a]}return Pc[a]}var Bt={math:{},text:{}};function h(l,a,r,s,c,d){Bt[l][c]={font:a,group:r,replace:s},d&&s&&(Bt[l][s]=Bt[l][c])}var f="math",ae="text",b="main",T="ams",Ht="accent-token",Me="bin",Sn="close",Qr="inner",_e="mathord",Jt="op-token",Xn="open",Zl="punct",A="rel",$a="spacing",z="textord";h(f,b,A,"≡","\\equiv",!0);h(f,b,A,"≺","\\prec",!0);h(f,b,A,"≻","\\succ",!0);h(f,b,A,"∼","\\sim",!0);h(f,b,A,"⊥","\\perp");h(f,b,A,"⪯","\\preceq",!0);h(f,b,A,"⪰","\\succeq",!0);h(f,b,A,"≃","\\simeq",!0);h(f,b,A,"∣","\\mid",!0);h(f,b,A,"≪","\\ll",!0);h(f,b,A,"≫","\\gg",!0);h(f,b,A,"≍","\\asymp",!0);h(f,b,A,"∥","\\parallel");h(f,b,A,"⋈","\\bowtie",!0);h(f,b,A,"⌣","\\smile",!0);h(f,b,A,"⊑","\\sqsubseteq",!0);h(f,b,A,"⊒","\\sqsupseteq",!0);h(f,b,A,"≐","\\doteq",!0);h(f,b,A,"⌢","\\frown",!0);h(f,b,A,"∋","\\ni",!0);h(f,b,A,"∝","\\propto",!0);h(f,b,A,"⊢","\\vdash",!0);h(f,b,A,"⊣","\\dashv",!0);h(f,b,A,"∋","\\owns");h(f,b,Zl,".","\\ldotp");h(f,b,Zl,"⋅","\\cdotp");h(f,b,Zl,"⋅","·");h(ae,b,z,"⋅","·");h(f,b,z,"#","\\#");h(ae,b,z,"#","\\#");h(f,b,z,"&","\\&");h(ae,b,z,"&","\\&");h(f,b,z,"ℵ","\\aleph",!0);h(f,b,z,"∀","\\forall",!0);h(f,b,z,"ℏ","\\hbar",!0);h(f,b,z,"∃","\\exists",!0);h(f,b,z,"∇","\\nabla",!0);h(f,b,z,"♭","\\flat",!0);h(f,b,z,"ℓ","\\ell",!0);h(f,b,z,"♮","\\natural",!0);h(f,b,z,"♣","\\clubsuit",!0);h(f,b,z,"℘","\\wp",!0);h(f,b,z,"♯","\\sharp",!0);h(f,b,z,"♢","\\diamondsuit",!0);h(f,b,z,"ℜ","\\Re",!0);h(f,b,z,"♡","\\heartsuit",!0);h(f,b,z,"ℑ","\\Im",!0);h(f,b,z,"♠","\\spadesuit",!0);h(f,b,z,"§","\\S",!0);h(ae,b,z,"§","\\S");h(f,b,z,"¶","\\P",!0);h(ae,b,z,"¶","\\P");h(f,b,z,"†","\\dag");h(ae,b,z,"†","\\dag");h(ae,b,z,"†","\\textdagger");h(f,b,z,"‡","\\ddag");h(ae,b,z,"‡","\\ddag");h(ae,b,z,"‡","\\textdaggerdbl");h(f,b,Sn,"⎱","\\rmoustache",!0);h(f,b,Xn,"⎰","\\lmoustache",!0);h(f,b,Sn,"⟯","\\rgroup",!0);h(f,b,Xn,"⟮","\\lgroup",!0);h(f,b,Me,"∓","\\mp",!0);h(f,b,Me,"⊖","\\ominus",!0);h(f,b,Me,"⊎","\\uplus",!0);h(f,b,Me,"⊓","\\sqcap",!0);h(f,b,Me,"∗","\\ast");h(f,b,Me,"⊔","\\sqcup",!0);h(f,b,Me,"◯","\\bigcirc",!0);h(f,b,Me,"∙","\\bullet",!0);h(f,b,Me,"‡","\\ddagger");h(f,b,Me,"≀","\\wr",!0);h(f,b,Me,"⨿","\\amalg");h(f,b,Me,"&","\\And");h(f,b,A,"⟵","\\longleftarrow",!0);h(f,b,A,"⇐","\\Leftarrow",!0);h(f,b,A,"⟸","\\Longleftarrow",!0);h(f,b,A,"⟶","\\longrightarrow",!0);h(f,b,A,"⇒","\\Rightarrow",!0);h(f,b,A,"⟹","\\Longrightarrow",!0);h(f,b,A,"↔","\\leftrightarrow",!0);h(f,b,A,"⟷","\\longleftrightarrow",!0);h(f,b,A,"⇔","\\Leftrightarrow",!0);h(f,b,A,"⟺","\\Longleftrightarrow",!0);h(f,b,A,"↦","\\mapsto",!0);h(f,b,A,"⟼","\\longmapsto",!0);h(f,b,A,"↗","\\nearrow",!0);h(f,b,A,"↩","\\hookleftarrow",!0);h(f,b,A,"↪","\\hookrightarrow",!0);h(f,b,A,"↘","\\searrow",!0);h(f,b,A,"↼","\\leftharpoonup",!0);h(f,b,A,"⇀","\\rightharpoonup",!0);h(f,b,A,"↙","\\swarrow",!0);h(f,b,A,"↽","\\leftharpoondown",!0);h(f,b,A,"⇁","\\rightharpoondown",!0);h(f,b,A,"↖","\\nwarrow",!0);h(f,b,A,"⇌","\\rightleftharpoons",!0);h(f,T,A,"≮","\\nless",!0);h(f,T,A,"","\\@nleqslant");h(f,T,A,"","\\@nleqq");h(f,T,A,"⪇","\\lneq",!0);h(f,T,A,"≨","\\lneqq",!0);h(f,T,A,"","\\@lvertneqq");h(f,T,A,"⋦","\\lnsim",!0);h(f,T,A,"⪉","\\lnapprox",!0);h(f,T,A,"⊀","\\nprec",!0);h(f,T,A,"⋠","\\npreceq",!0);h(f,T,A,"⋨","\\precnsim",!0);h(f,T,A,"⪹","\\precnapprox",!0);h(f,T,A,"≁","\\nsim",!0);h(f,T,A,"","\\@nshortmid");h(f,T,A,"∤","\\nmid",!0);h(f,T,A,"⊬","\\nvdash",!0);h(f,T,A,"⊭","\\nvDash",!0);h(f,T,A,"⋪","\\ntriangleleft");h(f,T,A,"⋬","\\ntrianglelefteq",!0);h(f,T,A,"⊊","\\subsetneq",!0);h(f,T,A,"","\\@varsubsetneq");h(f,T,A,"⫋","\\subsetneqq",!0);h(f,T,A,"","\\@varsubsetneqq");h(f,T,A,"≯","\\ngtr",!0);h(f,T,A,"","\\@ngeqslant");h(f,T,A,"","\\@ngeqq");h(f,T,A,"⪈","\\gneq",!0);h(f,T,A,"≩","\\gneqq",!0);h(f,T,A,"","\\@gvertneqq");h(f,T,A,"⋧","\\gnsim",!0);h(f,T,A,"⪊","\\gnapprox",!0);h(f,T,A,"⊁","\\nsucc",!0);h(f,T,A,"⋡","\\nsucceq",!0);h(f,T,A,"⋩","\\succnsim",!0);h(f,T,A,"⪺","\\succnapprox",!0);h(f,T,A,"≆","\\ncong",!0);h(f,T,A,"","\\@nshortparallel");h(f,T,A,"∦","\\nparallel",!0);h(f,T,A,"⊯","\\nVDash",!0);h(f,T,A,"⋫","\\ntriangleright");h(f,T,A,"⋭","\\ntrianglerighteq",!0);h(f,T,A,"","\\@nsupseteqq");h(f,T,A,"⊋","\\supsetneq",!0);h(f,T,A,"","\\@varsupsetneq");h(f,T,A,"⫌","\\supsetneqq",!0);h(f,T,A,"","\\@varsupsetneqq");h(f,T,A,"⊮","\\nVdash",!0);h(f,T,A,"⪵","\\precneqq",!0);h(f,T,A,"⪶","\\succneqq",!0);h(f,T,A,"","\\@nsubseteqq");h(f,T,Me,"⊴","\\unlhd");h(f,T,Me,"⊵","\\unrhd");h(f,T,A,"↚","\\nleftarrow",!0);h(f,T,A,"↛","\\nrightarrow",!0);h(f,T,A,"⇍","\\nLeftarrow",!0);h(f,T,A,"⇏","\\nRightarrow",!0);h(f,T,A,"↮","\\nleftrightarrow",!0);h(f,T,A,"⇎","\\nLeftrightarrow",!0);h(f,T,A,"△","\\vartriangle");h(f,T,z,"ℏ","\\hslash");h(f,T,z,"▽","\\triangledown");h(f,T,z,"◊","\\lozenge");h(f,T,z,"Ⓢ","\\circledS");h(f,T,z,"®","\\circledR");h(ae,T,z,"®","\\circledR");h(f,T,z,"∡","\\measuredangle",!0);h(f,T,z,"∄","\\nexists");h(f,T,z,"℧","\\mho");h(f,T,z,"Ⅎ","\\Finv",!0);h(f,T,z,"⅁","\\Game",!0);h(f,T,z,"‵","\\backprime");h(f,T,z,"▲","\\blacktriangle");h(f,T,z,"▼","\\blacktriangledown");h(f,T,z,"■","\\blacksquare");h(f,T,z,"⧫","\\blacklozenge");h(f,T,z,"★","\\bigstar");h(f,T,z,"∢","\\sphericalangle",!0);h(f,T,z,"∁","\\complement",!0);h(f,T,z,"ð","\\eth",!0);h(ae,b,z,"ð","ð");h(f,T,z,"╱","\\diagup");h(f,T,z,"╲","\\diagdown");h(f,T,z,"□","\\square");h(f,T,z,"□","\\Box");h(f,T,z,"◊","\\Diamond");h(f,T,z,"¥","\\yen",!0);h(ae,T,z,"¥","\\yen",!0);h(f,T,z,"✓","\\checkmark",!0);h(ae,T,z,"✓","\\checkmark");h(f,T,z,"ℶ","\\beth",!0);h(f,T,z,"ℸ","\\daleth",!0);h(f,T,z,"ℷ","\\gimel",!0);h(f,T,z,"ϝ","\\digamma",!0);h(f,T,z,"ϰ","\\varkappa");h(f,T,Xn,"┌","\\@ulcorner",!0);h(f,T,Sn,"┐","\\@urcorner",!0);h(f,T,Xn,"└","\\@llcorner",!0);h(f,T,Sn,"┘","\\@lrcorner",!0);h(f,T,A,"≦","\\leqq",!0);h(f,T,A,"⩽","\\leqslant",!0);h(f,T,A,"⪕","\\eqslantless",!0);h(f,T,A,"≲","\\lesssim",!0);h(f,T,A,"⪅","\\lessapprox",!0);h(f,T,A,"≊","\\approxeq",!0);h(f,T,Me,"⋖","\\lessdot");h(f,T,A,"⋘","\\lll",!0);h(f,T,A,"≶","\\lessgtr",!0);h(f,T,A,"⋚","\\lesseqgtr",!0);h(f,T,A,"⪋","\\lesseqqgtr",!0);h(f,T,A,"≑","\\doteqdot");h(f,T,A,"≓","\\risingdotseq",!0);h(f,T,A,"≒","\\fallingdotseq",!0);h(f,T,A,"∽","\\backsim",!0);h(f,T,A,"⋍","\\backsimeq",!0);h(f,T,A,"⫅","\\subseteqq",!0);h(f,T,A,"⋐","\\Subset",!0);h(f,T,A,"⊏","\\sqsubset",!0);h(f,T,A,"≼","\\preccurlyeq",!0);h(f,T,A,"⋞","\\curlyeqprec",!0);h(f,T,A,"≾","\\precsim",!0);h(f,T,A,"⪷","\\precapprox",!0);h(f,T,A,"⊲","\\vartriangleleft");h(f,T,A,"⊴","\\trianglelefteq");h(f,T,A,"⊨","\\vDash",!0);h(f,T,A,"⊪","\\Vvdash",!0);h(f,T,A,"⌣","\\smallsmile");h(f,T,A,"⌢","\\smallfrown");h(f,T,A,"≏","\\bumpeq",!0);h(f,T,A,"≎","\\Bumpeq",!0);h(f,T,A,"≧","\\geqq",!0);h(f,T,A,"⩾","\\geqslant",!0);h(f,T,A,"⪖","\\eqslantgtr",!0);h(f,T,A,"≳","\\gtrsim",!0);h(f,T,A,"⪆","\\gtrapprox",!0);h(f,T,Me,"⋗","\\gtrdot");h(f,T,A,"⋙","\\ggg",!0);h(f,T,A,"≷","\\gtrless",!0);h(f,T,A,"⋛","\\gtreqless",!0);h(f,T,A,"⪌","\\gtreqqless",!0);h(f,T,A,"≖","\\eqcirc",!0);h(f,T,A,"≗","\\circeq",!0);h(f,T,A,"≜","\\triangleq",!0);h(f,T,A,"∼","\\thicksim");h(f,T,A,"≈","\\thickapprox");h(f,T,A,"⫆","\\supseteqq",!0);h(f,T,A,"⋑","\\Supset",!0);h(f,T,A,"⊐","\\sqsupset",!0);h(f,T,A,"≽","\\succcurlyeq",!0);h(f,T,A,"⋟","\\curlyeqsucc",!0);h(f,T,A,"≿","\\succsim",!0);h(f,T,A,"⪸","\\succapprox",!0);h(f,T,A,"⊳","\\vartriangleright");h(f,T,A,"⊵","\\trianglerighteq");h(f,T,A,"⊩","\\Vdash",!0);h(f,T,A,"∣","\\shortmid");h(f,T,A,"∥","\\shortparallel");h(f,T,A,"≬","\\between",!0);h(f,T,A,"⋔","\\pitchfork",!0);h(f,T,A,"∝","\\varpropto");h(f,T,A,"◀","\\blacktriangleleft");h(f,T,A,"∴","\\therefore",!0);h(f,T,A,"∍","\\backepsilon");h(f,T,A,"▶","\\blacktriangleright");h(f,T,A,"∵","\\because",!0);h(f,T,A,"⋘","\\llless");h(f,T,A,"⋙","\\gggtr");h(f,T,Me,"⊲","\\lhd");h(f,T,Me,"⊳","\\rhd");h(f,T,A,"≂","\\eqsim",!0);h(f,b,A,"⋈","\\Join");h(f,T,A,"≑","\\Doteq",!0);h(f,T,Me,"∔","\\dotplus",!0);h(f,T,Me,"∖","\\smallsetminus");h(f,T,Me,"⋒","\\Cap",!0);h(f,T,Me,"⋓","\\Cup",!0);h(f,T,Me,"⩞","\\doublebarwedge",!0);h(f,T,Me,"⊟","\\boxminus",!0);h(f,T,Me,"⊞","\\boxplus",!0);h(f,T,Me,"⋇","\\divideontimes",!0);h(f,T,Me,"⋉","\\ltimes",!0);h(f,T,Me,"⋊","\\rtimes",!0);h(f,T,Me,"⋋","\\leftthreetimes",!0);h(f,T,Me,"⋌","\\rightthreetimes",!0);h(f,T,Me,"⋏","\\curlywedge",!0);h(f,T,Me,"⋎","\\curlyvee",!0);h(f,T,Me,"⊝","\\circleddash",!0);h(f,T,Me,"⊛","\\circledast",!0);h(f,T,Me,"⋅","\\centerdot");h(f,T,Me,"⊺","\\intercal",!0);h(f,T,Me,"⋒","\\doublecap");h(f,T,Me,"⋓","\\doublecup");h(f,T,Me,"⊠","\\boxtimes",!0);h(f,T,A,"⇢","\\dashrightarrow",!0);h(f,T,A,"⇠","\\dashleftarrow",!0);h(f,T,A,"⇇","\\leftleftarrows",!0);h(f,T,A,"⇆","\\leftrightarrows",!0);h(f,T,A,"⇚","\\Lleftarrow",!0);h(f,T,A,"↞","\\twoheadleftarrow",!0);h(f,T,A,"↢","\\leftarrowtail",!0);h(f,T,A,"↫","\\looparrowleft",!0);h(f,T,A,"⇋","\\leftrightharpoons",!0);h(f,T,A,"↶","\\curvearrowleft",!0);h(f,T,A,"↺","\\circlearrowleft",!0);h(f,T,A,"↰","\\Lsh",!0);h(f,T,A,"⇈","\\upuparrows",!0);h(f,T,A,"↿","\\upharpoonleft",!0);h(f,T,A,"⇃","\\downharpoonleft",!0);h(f,b,A,"⊶","\\origof",!0);h(f,b,A,"⊷","\\imageof",!0);h(f,T,A,"⊸","\\multimap",!0);h(f,T,A,"↭","\\leftrightsquigarrow",!0);h(f,T,A,"⇉","\\rightrightarrows",!0);h(f,T,A,"⇄","\\rightleftarrows",!0);h(f,T,A,"↠","\\twoheadrightarrow",!0);h(f,T,A,"↣","\\rightarrowtail",!0);h(f,T,A,"↬","\\looparrowright",!0);h(f,T,A,"↷","\\curvearrowright",!0);h(f,T,A,"↻","\\circlearrowright",!0);h(f,T,A,"↱","\\Rsh",!0);h(f,T,A,"⇊","\\downdownarrows",!0);h(f,T,A,"↾","\\upharpoonright",!0);h(f,T,A,"⇂","\\downharpoonright",!0);h(f,T,A,"⇝","\\rightsquigarrow",!0);h(f,T,A,"⇝","\\leadsto");h(f,T,A,"⇛","\\Rrightarrow",!0);h(f,T,A,"↾","\\restriction");h(f,b,z,"‘","`");h(f,b,z,"$","\\$");h(ae,b,z,"$","\\$");h(ae,b,z,"$","\\textdollar");h(f,b,z,"%","\\%");h(ae,b,z,"%","\\%");h(f,b,z,"_","\\_");h(ae,b,z,"_","\\_");h(ae,b,z,"_","\\textunderscore");h(f,b,z,"∠","\\angle",!0);h(f,b,z,"∞","\\infty",!0);h(f,b,z,"′","\\prime");h(f,b,z,"△","\\triangle");h(f,b,z,"Γ","\\Gamma",!0);h(f,b,z,"Δ","\\Delta",!0);h(f,b,z,"Θ","\\Theta",!0);h(f,b,z,"Λ","\\Lambda",!0);h(f,b,z,"Ξ","\\Xi",!0);h(f,b,z,"Π","\\Pi",!0);h(f,b,z,"Σ","\\Sigma",!0);h(f,b,z,"Υ","\\Upsilon",!0);h(f,b,z,"Φ","\\Phi",!0);h(f,b,z,"Ψ","\\Psi",!0);h(f,b,z,"Ω","\\Omega",!0);h(f,b,z,"A","Α");h(f,b,z,"B","Β");h(f,b,z,"E","Ε");h(f,b,z,"Z","Ζ");h(f,b,z,"H","Η");h(f,b,z,"I","Ι");h(f,b,z,"K","Κ");h(f,b,z,"M","Μ");h(f,b,z,"N","Ν");h(f,b,z,"O","Ο");h(f,b,z,"P","Ρ");h(f,b,z,"T","Τ");h(f,b,z,"X","Χ");h(f,b,z,"¬","\\neg",!0);h(f,b,z,"¬","\\lnot");h(f,b,z,"⊤","\\top");h(f,b,z,"⊥","\\bot");h(f,b,z,"∅","\\emptyset");h(f,T,z,"∅","\\varnothing");h(f,b,_e,"α","\\alpha",!0);h(f,b,_e,"β","\\beta",!0);h(f,b,_e,"γ","\\gamma",!0);h(f,b,_e,"δ","\\delta",!0);h(f,b,_e,"ϵ","\\epsilon",!0);h(f,b,_e,"ζ","\\zeta",!0);h(f,b,_e,"η","\\eta",!0);h(f,b,_e,"θ","\\theta",!0);h(f,b,_e,"ι","\\iota",!0);h(f,b,_e,"κ","\\kappa",!0);h(f,b,_e,"λ","\\lambda",!0);h(f,b,_e,"μ","\\mu",!0);h(f,b,_e,"ν","\\nu",!0);h(f,b,_e,"ξ","\\xi",!0);h(f,b,_e,"ο","\\omicron",!0);h(f,b,_e,"π","\\pi",!0);h(f,b,_e,"ρ","\\rho",!0);h(f,b,_e,"σ","\\sigma",!0);h(f,b,_e,"τ","\\tau",!0);h(f,b,_e,"υ","\\upsilon",!0);h(f,b,_e,"ϕ","\\phi",!0);h(f,b,_e,"χ","\\chi",!0);h(f,b,_e,"ψ","\\psi",!0);h(f,b,_e,"ω","\\omega",!0);h(f,b,_e,"ε","\\varepsilon",!0);h(f,b,_e,"ϑ","\\vartheta",!0);h(f,b,_e,"ϖ","\\varpi",!0);h(f,b,_e,"ϱ","\\varrho",!0);h(f,b,_e,"ς","\\varsigma",!0);h(f,b,_e,"φ","\\varphi",!0);h(f,b,Me,"∗","*",!0);h(f,b,Me,"+","+");h(f,b,Me,"−","-",!0);h(f,b,Me,"⋅","\\cdot",!0);h(f,b,Me,"∘","\\circ",!0);h(f,b,Me,"÷","\\div",!0);h(f,b,Me,"±","\\pm",!0);h(f,b,Me,"×","\\times",!0);h(f,b,Me,"∩","\\cap",!0);h(f,b,Me,"∪","\\cup",!0);h(f,b,Me,"∖","\\setminus",!0);h(f,b,Me,"∧","\\land");h(f,b,Me,"∨","\\lor");h(f,b,Me,"∧","\\wedge",!0);h(f,b,Me,"∨","\\vee",!0);h(f,b,z,"√","\\surd");h(f,b,Xn,"⟨","\\langle",!0);h(f,b,Xn,"∣","\\lvert");h(f,b,Xn,"∥","\\lVert");h(f,b,Sn,"?","?");h(f,b,Sn,"!","!");h(f,b,Sn,"⟩","\\rangle",!0);h(f,b,Sn,"∣","\\rvert");h(f,b,Sn,"∥","\\rVert");h(f,b,A,"=","=");h(f,b,A,":",":");h(f,b,A,"≈","\\approx",!0);h(f,b,A,"≅","\\cong",!0);h(f,b,A,"≥","\\ge");h(f,b,A,"≥","\\geq",!0);h(f,b,A,"←","\\gets");h(f,b,A,">","\\gt",!0);h(f,b,A,"∈","\\in",!0);h(f,b,A,"","\\@not");h(f,b,A,"⊂","\\subset",!0);h(f,b,A,"⊃","\\supset",!0);h(f,b,A,"⊆","\\subseteq",!0);h(f,b,A,"⊇","\\supseteq",!0);h(f,T,A,"⊈","\\nsubseteq",!0);h(f,T,A,"⊉","\\nsupseteq",!0);h(f,b,A,"⊨","\\models");h(f,b,A,"←","\\leftarrow",!0);h(f,b,A,"≤","\\le");h(f,b,A,"≤","\\leq",!0);h(f,b,A,"<","\\lt",!0);h(f,b,A,"→","\\rightarrow",!0);h(f,b,A,"→","\\to");h(f,T,A,"≱","\\ngeq",!0);h(f,T,A,"≰","\\nleq",!0);h(f,b,$a," ","\\ ");h(f,b,$a," ","\\space");h(f,b,$a," ","\\nobreakspace");h(ae,b,$a," ","\\ ");h(ae,b,$a," "," ");h(ae,b,$a," ","\\space");h(ae,b,$a," ","\\nobreakspace");h(f,b,$a,"","\\nobreak");h(f,b,$a,"","\\allowbreak");h(f,b,Zl,",",",");h(f,b,Zl,";",";");h(f,T,Me,"⊼","\\barwedge",!0);h(f,T,Me,"⊻","\\veebar",!0);h(f,b,Me,"⊙","\\odot",!0);h(f,b,Me,"⊕","\\oplus",!0);h(f,b,Me,"⊗","\\otimes",!0);h(f,b,z,"∂","\\partial",!0);h(f,b,Me,"⊘","\\oslash",!0);h(f,T,Me,"⊚","\\circledcirc",!0);h(f,T,Me,"⊡","\\boxdot",!0);h(f,b,Me,"△","\\bigtriangleup");h(f,b,Me,"▽","\\bigtriangledown");h(f,b,Me,"†","\\dagger");h(f,b,Me,"⋄","\\diamond");h(f,b,Me,"⋆","\\star");h(f,b,Me,"◃","\\triangleleft");h(f,b,Me,"▹","\\triangleright");h(f,b,Xn,"{","\\{");h(ae,b,z,"{","\\{");h(ae,b,z,"{","\\textbraceleft");h(f,b,Sn,"}","\\}");h(ae,b,z,"}","\\}");h(ae,b,z,"}","\\textbraceright");h(f,b,Xn,"{","\\lbrace");h(f,b,Sn,"}","\\rbrace");h(f,b,Xn,"[","\\lbrack",!0);h(ae,b,z,"[","\\lbrack",!0);h(f,b,Sn,"]","\\rbrack",!0);h(ae,b,z,"]","\\rbrack",!0);h(f,b,Xn,"(","\\lparen",!0);h(f,b,Sn,")","\\rparen",!0);h(ae,b,z,"<","\\textless",!0);h(ae,b,z,">","\\textgreater",!0);h(f,b,Xn,"⌊","\\lfloor",!0);h(f,b,Sn,"⌋","\\rfloor",!0);h(f,b,Xn,"⌈","\\lceil",!0);h(f,b,Sn,"⌉","\\rceil",!0);h(f,b,z,"\\","\\backslash");h(f,b,z,"∣","|");h(f,b,z,"∣","\\vert");h(ae,b,z,"|","\\textbar",!0);h(f,b,z,"∥","\\|");h(f,b,z,"∥","\\Vert");h(ae,b,z,"∥","\\textbardbl");h(ae,b,z,"~","\\textasciitilde");h(ae,b,z,"\\","\\textbackslash");h(ae,b,z,"^","\\textasciicircum");h(f,b,A,"↑","\\uparrow",!0);h(f,b,A,"⇑","\\Uparrow",!0);h(f,b,A,"↓","\\downarrow",!0);h(f,b,A,"⇓","\\Downarrow",!0);h(f,b,A,"↕","\\updownarrow",!0);h(f,b,A,"⇕","\\Updownarrow",!0);h(f,b,Jt,"∐","\\coprod");h(f,b,Jt,"⋁","\\bigvee");h(f,b,Jt,"⋀","\\bigwedge");h(f,b,Jt,"⨄","\\biguplus");h(f,b,Jt,"⋂","\\bigcap");h(f,b,Jt,"⋃","\\bigcup");h(f,b,Jt,"∫","\\int");h(f,b,Jt,"∫","\\intop");h(f,b,Jt,"∬","\\iint");h(f,b,Jt,"∭","\\iiint");h(f,b,Jt,"∏","\\prod");h(f,b,Jt,"∑","\\sum");h(f,b,Jt,"⨂","\\bigotimes");h(f,b,Jt,"⨁","\\bigoplus");h(f,b,Jt,"⨀","\\bigodot");h(f,b,Jt,"∮","\\oint");h(f,b,Jt,"∯","\\oiint");h(f,b,Jt,"∰","\\oiiint");h(f,b,Jt,"⨆","\\bigsqcup");h(f,b,Jt,"∫","\\smallint");h(ae,b,Qr,"…","\\textellipsis");h(f,b,Qr,"…","\\mathellipsis");h(ae,b,Qr,"…","\\ldots",!0);h(f,b,Qr,"…","\\ldots",!0);h(f,b,Qr,"⋯","\\@cdots",!0);h(f,b,Qr,"⋱","\\ddots",!0);h(f,b,z,"⋮","\\varvdots");h(ae,b,z,"⋮","\\varvdots");h(f,b,Ht,"ˊ","\\acute");h(f,b,Ht,"ˋ","\\grave");h(f,b,Ht,"¨","\\ddot");h(f,b,Ht,"~","\\tilde");h(f,b,Ht,"ˉ","\\bar");h(f,b,Ht,"˘","\\breve");h(f,b,Ht,"ˇ","\\check");h(f,b,Ht,"^","\\hat");h(f,b,Ht,"⃗","\\vec");h(f,b,Ht,"˙","\\dot");h(f,b,Ht,"˚","\\mathring");h(f,b,_e,"","\\@imath");h(f,b,_e,"","\\@jmath");h(f,b,z,"ı","ı");h(f,b,z,"ȷ","ȷ");h(ae,b,z,"ı","\\i",!0);h(ae,b,z,"ȷ","\\j",!0);h(ae,b,z,"ß","\\ss",!0);h(ae,b,z,"æ","\\ae",!0);h(ae,b,z,"œ","\\oe",!0);h(ae,b,z,"ø","\\o",!0);h(ae,b,z,"Æ","\\AE",!0);h(ae,b,z,"Œ","\\OE",!0);h(ae,b,z,"Ø","\\O",!0);h(ae,b,Ht,"ˊ","\\'");h(ae,b,Ht,"ˋ","\\`");h(ae,b,Ht,"ˆ","\\^");h(ae,b,Ht,"˜","\\~");h(ae,b,Ht,"ˉ","\\=");h(ae,b,Ht,"˘","\\u");h(ae,b,Ht,"˙","\\.");h(ae,b,Ht,"¸","\\c");h(ae,b,Ht,"˚","\\r");h(ae,b,Ht,"ˇ","\\v");h(ae,b,Ht,"¨",'\\"');h(ae,b,Ht,"˝","\\H");h(ae,b,Ht,"◯","\\textcircled");var _f={"--":!0,"---":!0,"``":!0,"''":!0};h(ae,b,z,"–","--",!0);h(ae,b,z,"–","\\textendash");h(ae,b,z,"—","---",!0);h(ae,b,z,"—","\\textemdash");h(ae,b,z,"‘","`",!0);h(ae,b,z,"‘","\\textquoteleft");h(ae,b,z,"’","'",!0);h(ae,b,z,"’","\\textquoteright");h(ae,b,z,"“","``",!0);h(ae,b,z,"“","\\textquotedblleft");h(ae,b,z,"”","''",!0);h(ae,b,z,"”","\\textquotedblright");h(f,b,z,"°","\\degree",!0);h(ae,b,z,"°","\\degree");h(ae,b,z,"°","\\textdegree",!0);h(f,b,z,"£","\\pounds");h(f,b,z,"£","\\mathsterling",!0);h(ae,b,z,"£","\\pounds");h(ae,b,z,"£","\\textsterling",!0);h(f,T,z,"✠","\\maltese");h(ae,T,z,"✠","\\maltese");var Xm='0123456789/@."';for(var Zc=0;Zc<Xm.length;Zc++){var Wm=Xm.charAt(Zc);h(f,b,z,Wm,Wm)}var Qm='0123456789!@*()-=+";:?/.,';for(var Kc=0;Kc<Qm.length;Kc++){var Pm=Qm.charAt(Kc);h(ae,b,z,Pm,Pm)}var x0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var $c=0;$c<x0.length;$c++){var c0=x0.charAt($c);h(f,b,_e,c0,c0),h(ae,b,z,c0,c0)}h(f,T,z,"C","ℂ");h(ae,T,z,"C","ℂ");h(f,T,z,"H","ℍ");h(ae,T,z,"H","ℍ");h(f,T,z,"N","ℕ");h(ae,T,z,"N","ℕ");h(f,T,z,"P","ℙ");h(ae,T,z,"P","ℙ");h(f,T,z,"Q","ℚ");h(ae,T,z,"Q","ℚ");h(f,T,z,"R","ℝ");h(ae,T,z,"R","ℝ");h(f,T,z,"Z","ℤ");h(ae,T,z,"Z","ℤ");h(f,b,_e,"h","ℎ");h(ae,b,_e,"h","ℎ");var Ye;for(var bn=0;bn<x0.length;bn++){var Gt=x0.charAt(bn);Ye=String.fromCharCode(55349,56320+bn),h(f,b,_e,Gt,Ye),h(ae,b,z,Gt,Ye),Ye=String.fromCharCode(55349,56372+bn),h(f,b,_e,Gt,Ye),h(ae,b,z,Gt,Ye),Ye=String.fromCharCode(55349,56424+bn),h(f,b,_e,Gt,Ye),h(ae,b,z,Gt,Ye),Ye=String.fromCharCode(55349,56580+bn),h(f,b,_e,Gt,Ye),h(ae,b,z,Gt,Ye),Ye=String.fromCharCode(55349,56684+bn),h(f,b,_e,Gt,Ye),h(ae,b,z,Gt,Ye),Ye=String.fromCharCode(55349,56736+bn),h(f,b,_e,Gt,Ye),h(ae,b,z,Gt,Ye),Ye=String.fromCharCode(55349,56788+bn),h(f,b,_e,Gt,Ye),h(ae,b,z,Gt,Ye),Ye=String.fromCharCode(55349,56840+bn),h(f,b,_e,Gt,Ye),h(ae,b,z,Gt,Ye),Ye=String.fromCharCode(55349,56944+bn),h(f,b,_e,Gt,Ye),h(ae,b,z,Gt,Ye),bn<26&&(Ye=String.fromCharCode(55349,56632+bn),h(f,b,_e,Gt,Ye),h(ae,b,z,Gt,Ye),Ye=String.fromCharCode(55349,56476+bn),h(f,b,_e,Gt,Ye),h(ae,b,z,Gt,Ye))}Ye="𝕜";h(f,b,_e,"k",Ye);h(ae,b,z,"k",Ye);for(var $i=0;$i<10;$i++){var Ci=$i.toString();Ye=String.fromCharCode(55349,57294+$i),h(f,b,_e,Ci,Ye),h(ae,b,z,Ci,Ye),Ye=String.fromCharCode(55349,57314+$i),h(f,b,_e,Ci,Ye),h(ae,b,z,Ci,Ye),Ye=String.fromCharCode(55349,57324+$i),h(f,b,_e,Ci,Ye),h(ae,b,z,Ci,Ye),Ye=String.fromCharCode(55349,57334+$i),h(f,b,_e,Ci,Ye),h(ae,b,z,Ci,Ye)}var fu="ÐÞþ";for(var Jc=0;Jc<fu.length;Jc++){var u0=fu.charAt(Jc);h(f,b,_e,u0,u0),h(ae,b,z,u0,u0)}var pu={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},Zm={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},Km={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},j6={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},er={mathClass:"",textClass:"",font:""},$m={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},Jm={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},ef={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},gu={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},vu={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},tf={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},yu={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},nf=[pu,pu,Zm,Zm,Km,Km,j6,er,er,er,$m,$m,Jm,Jm,ef,ef,gu,gu,vu,vu,tf,tf,er,er,yu,yu],q6=[pu,er,gu,vu,yu],I6=l=>{var a=l.charCodeAt(0),r=l.charCodeAt(1),s=(a-55296)*1024+(r-56320)+65536;if(119808<=s&&s<120484){var c=Math.floor((s-119808)/26);return nf[c]}else if(120782<=s&&s<=120831){var d=Math.floor((s-120782)/10);return q6[d]}else{if(s===120485||s===120486)return nf[0];if(120486<s&&s<120782)return er;throw new oe("Unsupported character: "+l)}},S0=function(a,r,s){if(Bt[s][a]){var c=Bt[s][a].replace;c&&(a=c)}return{value:a,metrics:Lu(a,r,s)}},xn=function(a,r,s,c,d){var m=S0(a,r,s),g=m.metrics;a=m.value;var y;if(g){var v=g.italic;(s==="text"||c&&c.font==="mathit")&&(v=0),y=new Vn(a,g.height,g.depth,v,g.skew,g.width,d)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+a+"' in style '"+r+"' and mode '"+s+"'")),y=new Vn(a,0,0,0,0,0,d);if(c){y.maxFontSize=c.sizeMultiplier,c.style.isTight()&&y.classes.push("mtight");var k=c.getColor();k&&(y.style.color=k)}return y},Ou=function(a,r,s,c){return c===void 0&&(c=[]),s.font==="boldsymbol"&&S0(a,"Main-Bold",r).metrics?xn(a,"Main-Bold",r,s,c.concat(["mathbf"])):a==="\\"||Bt[r][a].font==="main"?xn(a,"Main-Regular",r,s,c):xn(a,"AMS-Regular",r,s,c.concat(["amsrm"]))},F6=function(a,r,s){return s!=="textord"&&S0(a,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},k0=function(a,r){var s=a.type==="mathord"?"mathord":"textord",c=a.mode,d=a.text,m=["mord"],g=r.font,y=r.fontFamily,v=r.fontWeight,k=r.fontShape,M=c==="math"||c==="text"&&!!g,N=M?g:y,q="",U="";if(d.charCodeAt(0)===55349){var X=I6(d);q=X.font,U=X[c+"Class"]}if(q)return xn(d,q,c,r,m.concat(U));if(N){var K,O;if(N==="boldsymbol"){var V=F6(d,c,s);K=V.fontName,O=[V.fontClass]}else M?(K=bu[g].fontName,O=[g]):(K=d0(y,v,k),O=[y,v,k]);if(S0(d,K,c).metrics)return xn(d,K,c,r,m.concat(O));if(Object.prototype.hasOwnProperty.call(_f,d)&&K.slice(0,10)==="Typewriter"){for(var W=[],ce=0;ce<d.length;ce++)W.push(xn(d[ce],K,c,r,m.concat(O)));return Ja(W)}}if(s==="mathord")return xn(d,"Math-Italic",c,r,m.concat(["mathnormal"]));if(s==="textord"){var re=Bt[c][d]&&Bt[c][d].font;if(re==="ams"){var ie=d0("amsrm",v,k);return xn(d,ie,c,r,m.concat("amsrm",v,k))}else if(re==="main"||!re){var ue=d0("textrm",v,k);return xn(d,ue,c,r,m.concat(v,k))}else{var Re=d0(re,v,k);return xn(d,Re,c,r,m.concat(Re,v,k))}}else throw new Error("unexpected type: "+s+" in makeOrd")},U6=(l,a)=>{if(Mi(l.classes)!==Mi(a.classes)||l.skew!==a.skew||l.maxFontSize!==a.maxFontSize||l.italic!==0&&l.hasClass("mathnormal"))return!1;if(l.classes.length===1){var r=l.classes[0];if(r==="mbin"||r==="mord")return!1}for(var s of Object.keys(l.style))if(l.style[s]!==a.style[s])return!1;for(var c of Object.keys(a.style))if(l.style[c]!==a.style[c])return!1;return!0},Gf=l=>{for(var a=0;a<l.length-1;a++){var r=l[a],s=l[a+1];r instanceof Vn&&s instanceof Vn&&U6(r,s)&&(r.text+=s.text,r.height=Math.max(r.height,s.height),r.depth=Math.max(r.depth,s.depth),r.italic=s.italic,l.splice(a+1,1),a--)}return l},Bu=function(a){for(var r=0,s=0,c=0,d=0;d<a.children.length;d++){var m=a.children[d];m.height>r&&(r=m.height),m.depth>s&&(s=m.depth),m.maxFontSize>c&&(c=m.maxFontSize)}a.height=r,a.depth=s,a.maxFontSize=c},se=function(a,r,s,c){var d=new Wr(a,r,s,c);return Bu(d),d},Di=(l,a,r,s)=>new Wr(l,a,r,s),Yr=function(a,r,s){var c=se([a],[],r);return c.height=Math.max(s||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),c.style.borderBottomWidth=fe(c.height),c.maxFontSize=1,c},_6=function(a,r,s,c){var d=new w0(a,r,s,c);return Bu(d),d},Ja=function(a){var r=new Xr(a);return Bu(r),r},Vr=function(a,r){return a instanceof Xr?se([],[a],r):a},G6=function(a){if(a.positionType==="individualShift"){for(var r=a.children,s=[r[0]],c=-r[0].shift-r[0].elem.depth,d=c,m=1;m<r.length;m++){var g=-r[m].shift-d-r[m].elem.depth,y=g-(r[m-1].elem.height+r[m-1].elem.depth);d=d+g,s.push({type:"kern",size:y}),s.push(r[m])}return{children:s,depth:c}}var v;if(a.positionType==="top"){for(var k=a.positionData,M=0;M<a.children.length;M++){var N=a.children[M];k-=N.type==="kern"?N.size:N.elem.height+N.elem.depth}v=k}else if(a.positionType==="bottom")v=-a.positionData;else{var q=a.children[0];if(q.type!=="elem")throw new Error('First child must have type "elem".');if(a.positionType==="shift")v=-q.elem.depth-a.positionData;else if(a.positionType==="firstBaseline")v=-q.elem.depth;else throw new Error("Invalid positionType "+a.positionType+".")}return{children:a.children,depth:v}},xt=function(a,r){for(var s=G6(a),c=s.children,d=s.depth,m=0,g=0;g<c.length;g++){var y=c[g];if(y.type==="elem"){var v=y.elem;m=Math.max(m,v.maxFontSize,v.height)}}m+=2;var k=se(["pstrut"],[]);k.style.height=fe(m);for(var M=[],N=d,q=d,U=d,X=0;X<c.length;X++){var K=c[X];if(K.type==="kern")U+=K.size;else{var O=K.elem,V=K.wrapperClasses||[],W=K.wrapperStyle||{},ce=se(V,[k,O],void 0,W);ce.style.top=fe(-m-U-O.depth),K.marginLeft&&(ce.style.marginLeft=K.marginLeft),K.marginRight&&(ce.style.marginRight=K.marginRight),M.push(ce),U+=O.height+O.depth}N=Math.min(N,U),q=Math.max(q,U)}var re=se(["vlist"],M);re.style.height=fe(q);var ie;if(N<0){var ue=se([],[]),Re=se(["vlist"],[ue]);Re.style.height=fe(-N);var Oe=se(["vlist-s"],[new Vn("​")]);ie=[se(["vlist-r"],[re,Oe]),se(["vlist-r"],[Re])]}else ie=[se(["vlist-r"],[re])];var Be=se(["vlist-t"],ie);return ie.length===2&&Be.classes.push("vlist-t2"),Be.height=q,Be.depth=-N,Be},Yf=(l,a)=>{var r=se(["mspace"],[],a),s=It(l,a);return r.style.marginRight=fe(s),r},d0=(l,a,r)=>{var s,c;switch(l){case"amsrm":s="AMS";break;case"textrm":s="Main";break;case"textsf":s="SansSerif";break;case"texttt":s="Typewriter";break;default:s=l}return a==="textbf"&&r==="textit"?c="BoldItalic":a==="textbf"?c="Bold":r==="textit"?c="Italic":c="Regular",s+"-"+c},bu={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Vf={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Xf=function(a,r){var s=Vf[a],c=s[0],d=s[1],m=s[2],g=new Ei(c),y=new Za([g],{width:fe(d),height:fe(m),style:"width:"+fe(d),viewBox:"0 0 "+1e3*d+" "+1e3*m,preserveAspectRatio:"xMinYMin"}),v=Di(["katex-overlay"],[y],r);return v.height=m,v.style.height=fe(m),v.style.width=fe(d),v},qt={number:3,unit:"mu"},Ji={number:4,unit:"mu"},Wa={number:5,unit:"mu"},Y6={mord:{mop:qt,mbin:Ji,mrel:Wa,minner:qt},mop:{mord:qt,mop:qt,mrel:Wa,minner:qt},mbin:{mord:Ji,mop:Ji,mopen:Ji,minner:Ji},mrel:{mord:Wa,mop:Wa,mopen:Wa,minner:Wa},mopen:{},mclose:{mop:qt,mbin:Ji,mrel:Wa,minner:qt},mpunct:{mord:qt,mop:qt,mrel:Wa,mopen:qt,mclose:qt,mpunct:qt,minner:qt},minner:{mord:qt,mop:qt,mbin:Ji,mrel:Wa,mopen:qt,mpunct:qt,minner:qt}},V6={mord:{mop:qt},mop:{mord:qt,mop:qt},mbin:{},mrel:{},mopen:{},mclose:{mop:qt},mpunct:{},minner:{mop:qt}},Wf={},Xl={},Wl={};function we(l){for(var a=l.type,r=l.names,s=l.htmlBuilder,c=l.mathmlBuilder,d=0;d<r.length;++d)Wf[r[d]]=l;a&&(s&&(Xl[a]=s),c&&(Wl[a]=c))}function nr(l){var a=l.type,r=l.htmlBuilder,s=l.mathmlBuilder;r&&(Xl[a]=r),s&&(Wl[a]=s)}var Ql=function(a){return a.type==="ordgroup"&&a.body.length===1?a.body[0]:a},Kt=function(a){return a.type==="ordgroup"?a.body:[a]},X6=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),W6=new Set(["rightmost","mrel","mclose","mpunct"]),Q6={display:$e.DISPLAY,text:$e.TEXT,script:$e.SCRIPT,scriptscript:$e.SCRIPTSCRIPT},P6={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},nn=function(a,r,s,c){c===void 0&&(c=[null,null]);for(var d=[],m=0;m<a.length;m++){var g=wt(a[m],r);if(g instanceof Xr){var y=g.children;d.push(...y)}else d.push(g)}if(Gf(d),!s)return d;var v=r;if(a.length===1){var k=a[0];k.type==="sizing"?v=r.havingSize(k.size):k.type==="styling"&&(v=r.havingStyle(Q6[k.style]))}var M=se([c[0]||"leftmost"],[],r),N=se([c[1]||"rightmost"],[],r),q=s==="root";return xu(d,(U,X)=>{var K=X.classes[0],O=U.classes[0];K==="mbin"&&W6.has(O)?X.classes[0]="mord":O==="mbin"&&X6.has(K)&&(U.classes[0]="mord")},{node:M},N,q),xu(d,(U,X)=>{var K,O,V=Su(X),W=Su(U),ce=V&&W?U.hasClass("mtight")?(K=V6[V])==null?void 0:K[W]:(O=Y6[V])==null?void 0:O[W]:null;if(ce)return Yf(ce,v)},{node:M},N,q),d},xu=function(a,r,s,c,d){c&&a.push(c);for(var m=0;m<a.length;m++){var g=a[m],y=Qf(g);if(y){xu(y.children,r,s,null,d);continue}var v=!g.hasClass("mspace");if(v){var k=r(g,s.node);k&&(s.insertAfter?s.insertAfter(k):(a.unshift(k),m++))}v?s.node=g:d&&g.hasClass("katex-newline")&&(s.node=se(["leftmost"])),s.insertAfter=(M=>N=>{a.splice(M+1,0,N),m++})(m)}c&&a.pop()},Qf=function(a){return a instanceof Xr||a instanceof w0||a instanceof Wr&&a.hasClass("enclosing")?a:null},wu=function(a,r){var s=Qf(a);if(s){var c=s.children;if(c.length){if(r==="right")return wu(c[c.length-1],"right");if(r==="left")return wu(c[0],"left")}}return a},Su=function(a,r){if(!a)return null;r&&(a=wu(a,r));var s=a.classes[0];return P6[s]||null},Pl=function(a,r){var s=["nulldelimiter"].concat(a.baseSizingClasses());return se(r.concat(s))},wt=function(a,r,s){if(!a)return se();if(Xl[a.type]){var c=Xl[a.type](a,r);if(s&&r.size!==s.size){c=se(r.sizingClasses(s),[c],r);var d=r.sizeMultiplier/s.sizeMultiplier;c.height*=d,c.depth*=d}return c}else throw new oe("Got group of unknown type: '"+a.type+"'")};function h0(l,a){var r=se(["katex-base"],l,a),s=se(["katex-strut"]);return s.style.height=fe(r.height+r.depth),r.depth&&(s.style.verticalAlign=fe(-r.depth)),r.children.unshift(s),r}function ku(l,a){var r=null;l.length===1&&l[0].type==="tag"&&(r=l[0].tag,l=l[0].body);var s=nn(l,a,"root"),c;s.length===2&&s[1].hasClass("katex-tag")&&(c=s.pop());for(var d=[],m=[],g=0;g<s.length;g++)if(m.push(s[g]),s[g].hasClass("mbin")||s[g].hasClass("mrel")||s[g].hasClass("allowbreak")){for(var y=!1;g<s.length-1&&s[g+1].hasClass("mspace")&&!s[g+1].hasClass("katex-newline");)g++,m.push(s[g]),s[g].hasClass("nobreak")&&(y=!0);y||(d.push(h0(m,a)),m=[])}else s[g].hasClass("katex-newline")&&(m.pop(),m.length>0&&(d.push(h0(m,a)),m=[]),d.push(s[g]));m.length>0&&d.push(h0(m,a));var v;r?(v=h0(nn(r,a,!0),a),v.classes=["katex-tag"],d.push(v)):c&&d.push(c);var k=se(["katex-html"],d);if(k.setAttribute("aria-hidden","true"),v){var M=v.children[0];M.style.height=fe(k.height+k.depth),k.depth&&(M.style.verticalAlign=fe(-k.depth))}return k}function Pf(l){return new Xr(l)}class de{constructor(a,r,s){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=a,this.attributes={},this.children=r||[],this.classes=s||[]}setAttribute(a,r){this.attributes[a]=r}getAttribute(a){return this.attributes[a]}toNode(){var a=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r of Object.entries(this.attributes)){var s=r[0],c=r[1];a.setAttribute(s,c)}this.classes.length>0&&(a.className=Mi(this.classes));for(var d=0;d<this.children.length;d++)if(this.children[d]instanceof $t&&this.children[d+1]instanceof $t){for(var m=this.children[d].toText()+this.children[++d].toText();this.children[d+1]instanceof $t;)m+=this.children[++d].toText();a.appendChild(new $t(m).toNode())}else a.appendChild(this.children[d].toNode());return a}toMarkup(){var a="<"+this.type;for(var r of Object.entries(this.attributes)){var s=r[0],c=r[1];a+=" "+s+'="',a+=hn(c),a+='"'}this.classes.length>0&&(a+=' class ="'+hn(Mi(this.classes))+'"'),a+=">";for(var d=0;d<this.children.length;d++)a+=this.children[d].toMarkup();return a+="</"+this.type+">",a}toText(){return this.children.map(a=>a.toText()).join("")}}class $t{constructor(a){this.text=void 0,this.text=a}toNode(){return document.createTextNode(this.text)}toMarkup(){return hn(this.toText())}toText(){return this.text}}class Zf{constructor(a){this.width=void 0,this.character=void 0,this.width=a,a>=.05555&&a<=.05556?this.character=" ":a>=.1666&&a<=.1667?this.character=" ":a>=.2222&&a<=.2223?this.character=" ":a>=.2777&&a<=.2778?this.character="  ":a>=-.05556&&a<=-.05555?this.character=" ⁣":a>=-.1667&&a<=-.1666?this.character=" ⁣":a>=-.2223&&a<=-.2222?this.character=" ⁣":a>=-.2778&&a<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var a=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return a.setAttribute("width",fe(this.width)),a}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+fe(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Z6=new Set(["\\imath","\\jmath"]),K6=new Set(["mrow","mtable"]),sa=function(a,r,s){var c,d;return Bt[r][a]&&Bt[r][a].replace&&a.charCodeAt(0)!==55349&&!(Object.prototype.hasOwnProperty.call(_f,a)&&((s==null||(c=s.fontFamily)==null?void 0:c.slice(4,6))==="tt"||(s==null||(d=s.font)==null?void 0:d.slice(4,6))==="tt"))&&(a=Bt[r][a].replace),new $t(a)},Hu=function(a){return a.length===1?a[0]:new de("mrow",a)},$6={mathit:"italic",boldsymbol:l=>l.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},ju=(l,a)=>{if(l.mode==="text"){if(a.fontFamily==="texttt")return"monospace";if(a.fontFamily==="textsf")return a.fontShape==="textit"&&a.fontWeight==="textbf"?"sans-serif-bold-italic":a.fontShape==="textit"?"sans-serif-italic":a.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(a.fontShape==="textit"&&a.fontWeight==="textbf")return"bold-italic";if(a.fontShape==="textit")return"italic";if(a.fontWeight==="textbf")return"bold"}var r=a.font;if(!r||r==="mathnormal")return null;var s=l.mode,c=$6[r];if(c)return typeof c=="function"?c(l):c;var d=l.text;if(Z6.has(d))return null;if(Bt[s][d]){var m=Bt[s][d].replace;m&&(d=m)}var g=bu[r].fontName;return Lu(d,g,s)?bu[r].variant:null};function eu(l){if(!l)return!1;if(l.type==="mi"&&l.children.length===1){var a=l.children[0];return a instanceof $t&&a.text==="."}else if(l.type==="mo"&&l.children.length===1&&l.getAttribute("separator")==="true"&&l.getAttribute("lspace")==="0em"&&l.getAttribute("rspace")==="0em"){var r=l.children[0];return r instanceof $t&&r.text===","}else return!1}var Wn=function(a,r,s){if(a.length===1){var c=zt(a[0],r);return s&&c instanceof de&&c.type==="mo"&&(c.setAttribute("lspace","0em"),c.setAttribute("rspace","0em")),[c]}for(var d=[],m,g=0;g<a.length;g++){var y=zt(a[g],r);if(y instanceof de&&m instanceof de){if(y.type==="mtext"&&m.type==="mtext"&&y.getAttribute("mathvariant")===m.getAttribute("mathvariant")){m.children.push(...y.children);continue}else if(y.type==="mn"&&m.type==="mn"){m.children.push(...y.children);continue}else if(eu(y)&&m.type==="mn"){m.children.push(...y.children);continue}else if(y.type==="mn"&&eu(m))y.children=[...m.children,...y.children],d.pop();else if((y.type==="msup"||y.type==="msub")&&y.children.length>=1&&(m.type==="mn"||eu(m))){var v=y.children[0];v instanceof de&&v.type==="mn"&&(v.children=[...m.children,...v.children],d.pop())}else if(m.type==="mi"&&m.children.length===1){var k=m.children[0];if(k instanceof $t&&k.text==="̸"&&(y.type==="mo"||y.type==="mi"||y.type==="mn")){var M=y.children[0];M instanceof $t&&M.text.length>0&&(M.text=M.text.slice(0,1)+"̸"+M.text.slice(1),d.pop())}}}d.push(y),m=y}return d},zi=function(a,r,s){return Hu(Wn(a,r,s))},zt=function(a,r){if(!a)return new de("mrow");if(Wl[a.type])return Wl[a.type](a,r);throw new oe("Got group of unknown type: '"+a.type+"'")};function af(l,a,r,s,c){var d=Wn(l,r),m;d.length===1&&d[0]instanceof de&&K6.has(d[0].type)?m=d[0]:m=new de("mrow",d);var g=new de("annotation",[new $t(a)]);g.setAttribute("encoding","application/x-tex");var y=new de("semantics",[m,g]),v=new de("math",[y]);v.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),s&&v.setAttribute("display","block");var k=c?"katex":"katex-mathml";return se([k],[v])}var J6=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],rf=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],lf=function(a,r){return r.size<2?a:J6[a-1][r.size-1]};class Qa{constructor(a){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=a.style,this.color=a.color,this.size=a.size||Qa.BASESIZE,this.textSize=a.textSize||this.size,this.phantom=!!a.phantom,this.font=a.font||"",this.fontFamily=a.fontFamily||"",this.fontWeight=a.fontWeight||"",this.fontShape=a.fontShape||"",this.sizeMultiplier=rf[this.size-1],this.maxSize=a.maxSize,this.minRuleThickness=a.minRuleThickness,this._fontMetrics=void 0}extend(a){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(r,a),new Qa(r)}havingStyle(a){return this.style===a?this:this.extend({style:a,size:lf(this.textSize,a)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(a){return this.size===a&&this.textSize===a?this:this.extend({style:this.style.text(),size:a,textSize:a,sizeMultiplier:rf[a-1]})}havingBaseStyle(a){a=a||this.style.text();var r=lf(Qa.BASESIZE,a);return this.size===r&&this.textSize===Qa.BASESIZE&&this.style===a?this:this.extend({style:a,size:r})}havingBaseSizing(){var a;switch(this.style.id){case 4:case 5:a=3;break;case 6:case 7:a=1;break;default:a=6}return this.extend({style:this.style.text(),size:a})}withColor(a){return this.extend({color:a})}withPhantom(){return this.extend({phantom:!0})}withFont(a){return this.extend({font:a})}withTextFontFamily(a){return this.extend({fontFamily:a,font:""})}withTextFontWeight(a){return this.extend({fontWeight:a,font:""})}withTextFontShape(a){return this.extend({fontShape:a,font:""})}sizingClasses(a){return a.size!==this.size?["katex-sizing","reset-size"+a.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Qa.BASESIZE?["katex-sizing","reset-size"+this.size,"size"+Qa.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=H6(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Qa.BASESIZE=6;var Kf=function(a){return new Qa({style:a.displayMode?$e.DISPLAY:$e.TEXT,maxSize:a.maxSize,minRuleThickness:a.minRuleThickness})},$f=function(a,r){if(r.displayMode){var s=["katex-display"];r.leqno&&s.push("leqno"),r.fleqn&&s.push("fleqn"),a=se(s,[a])}return a},e7=function(a,r,s){var c=Kf(s),d;if(s.output==="mathml")return af(a,r,c,s.displayMode,!0);if(s.output==="html"){var m=ku(a,c);d=se(["katex"],[m])}else{var g=af(a,r,c,s.displayMode,!1),y=ku(a,c);d=se(["katex"],[g,y])}return $f(d,s)},t7=function(a,r,s){var c=Kf(s),d=ku(a,c),m=se(["katex"],[d]);return $f(m,s)},n7={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},C0=function(a){var r=new de("mo",[new $t(n7[a.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},a7={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},i7=new Set(["widehat","widecheck","widetilde","utilde"]),T0=function(a,r){function s(){var y=4e5,v=a.label.slice(1);if(i7.has(v)&&"base"in a){var k=a.base.type==="ordgroup"?a.base.body.length:1,M,N,q;if(k>5)v==="widehat"||v==="widecheck"?(M=420,y=2364,q=.42,N=v+"4"):(M=312,y=2340,q=.34,N="tilde4");else{var U=[1,1,2,2,3,3][k];v==="widehat"||v==="widecheck"?(y=[0,1062,2364,2364,2364][U],M=[0,239,300,360,420][U],q=[0,.24,.3,.3,.36,.42][U],N=v+U):(y=[0,600,1033,2339,2340][U],M=[0,260,286,306,312][U],q=[0,.26,.286,.3,.306,.34][U],N="tilde"+U)}var X=new Ei(N),K=new Za([X],{width:"100%",height:fe(q),viewBox:"0 0 "+y+" "+M,preserveAspectRatio:"none"});return{span:Di([],[K],r),minWidth:0,height:q}}else{var O=[],V=a7[v];if(!V)throw new Error('No SVG data for "'+v+'".');var W=V[0],ce=V[1],re=V[2],ie=re/1e3,ue=W.length,Re,Oe;if(ue===1){if(V.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+v+'".');Re=["hide-tail"],Oe=[V[3]]}else if(ue===2)Re=["halfarrow-left","halfarrow-right"],Oe=["xMinYMin","xMaxYMin"];else if(ue===3)Re=["brace-left","brace-center","brace-right"],Oe=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+ue+" children.");for(var Be=0;Be<ue;Be++){var Je=new Ei(W[Be]),Ve=new Za([Je],{width:"400em",height:fe(ie),viewBox:"0 0 "+y+" "+re,preserveAspectRatio:Oe[Be]+" slice"}),ft=Di([Re[Be]],[Ve],r);if(ue===1)return{span:ft,minWidth:ce,height:ie};ft.style.height=fe(ie),O.push(ft)}return{span:se(["katex-stretchy"],O,r),minWidth:ce,height:ie}}}var c=s(),d=c.span,m=c.minWidth,g=c.height;return d.height=g,d.style.height=fe(g),m>0&&(d.style.minWidth=fe(m)),d},r7=function(a,r,s,c,d){var m,g=a.height+a.depth+s+c;if(/fbox|color|angl/.test(r)){if(m=se(["katex-stretchy",r],[],d),r==="fbox"){var y=d.color&&d.getColor();y&&(m.style.borderColor=y)}}else{var v=[];/^[bx]cancel$/.test(r)&&v.push(new mu({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&v.push(new mu({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var k=new Za(v,{width:"100%",height:fe(g)});m=Di([],[k],d)}return m.height=g,m.style.height=fe(g),m},l7=["bin","close","inner","open","punct","rel"],s7=["accent-token","mathord","op-token","spacing","textord"],o7=new Set(l7),c7=new Set(s7);function u7(l){return o7.has(l)}function ot(l,a){if(!l||l.type!==a)throw new Error("Expected node of type "+a+", but got "+(l?"node of type "+l.type:String(l)));return l}function A0(l){var a=M0(l);if(!a)throw new Error("Expected node of symbol group type, but got "+(l?"node of type "+l.type:String(l)));return a}function M0(l){return l.type==="atom"||c7.has(l.type)?l:null}function qu(l,a,r){var s="";for(var c of l.body)if(c.type==="textord")s+=c.text;else if(r&&c.type==="spacing"&&c.text===" ")s+=" ";else throw new oe(a,l);return s}var Jf=l=>{if(l instanceof Vn)return l;if(O6(l)&&l.children.length===1)return Jf(l.children[0])},e2=(l,a)=>{var r,s,c;l&&l.type==="supsub"?(s=ot(l.base,"accent"),r=s.base,l.base=r,c=L6(wt(l,a)),l.base=s):(s=ot(l,"accent"),r=s.base);var d=wt(r,a.havingCrampedStyle()),m=s.isShifty&&Ka(r),g=0;if(m){var y,v;g=(y=(v=Jf(d))==null?void 0:v.skew)!=null?y:0}var k=s.label==="\\c",M=k?d.height+d.depth:Math.min(d.height,a.fontMetrics().xHeight),N;if(s.isStretchy)N=T0(s,a),N=xt({positionType:"firstBaseline",children:[{type:"elem",elem:d},{type:"elem",elem:N,wrapperClasses:["svg-align"],wrapperStyle:g>0?{width:"calc(100% - "+fe(2*g)+")",marginLeft:fe(2*g)}:void 0}]});else{var q,U;s.label==="\\vec"?(q=Xf("vec",a),U=Vf.vec[1]):(q=k0({type:"textord",mode:s.mode,text:s.label},a),q=R6(q),q.italic=0,U=q.width,k&&(M+=q.depth)),N=se(["accent-body"],[q]);var X=s.label==="\\textcircled";X&&(N.classes.push("accent-full"),M=d.height);var K=g;X||(K-=U/2),N.style.left=fe(K),s.label==="\\textcircled"&&(N.style.top=".2em"),N=xt({positionType:"firstBaseline",children:[{type:"elem",elem:d},{type:"kern",size:-M},{type:"elem",elem:N}]})}var O=se(["mord","katex-accent"],[N],a);return c?(c.children[0]=O,c.height=Math.max(O.height,c.height),c.classes[0]="mord",c):O},d7=(l,a)=>{var r=l.isStretchy?C0(l.label):new de("mo",[sa(l.label,l.mode)]),s=new de("mover",[zt(l.base,a),r]);return s.setAttribute("accent","true"),s},h7=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(l=>"\\"+l).join("|"));we({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],numArgs:1,handler:(l,a)=>{var r=Ql(a[0]),s=!h7.test(l.funcName),c=!s||l.funcName==="\\widehat"||l.funcName==="\\widetilde"||l.funcName==="\\widecheck";return{type:"accent",mode:l.parser.mode,label:l.funcName,isStretchy:s,isShifty:c,base:r}},htmlBuilder:e2,mathmlBuilder:d7});we({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"],handler:(l,a)=>{var r=a[0],s=l.parser.mode;return s==="math"&&(l.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+l.funcName+" works only in text mode"),s="text"),{type:"accent",mode:s,label:l.funcName,isStretchy:!1,isShifty:!0,base:r}}});we({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],numArgs:1,handler:(l,a)=>{var r=l.parser,s=l.funcName,c=a[0];return{type:"accentUnder",mode:r.mode,label:s,base:c}},htmlBuilder:(l,a)=>{var r=wt(l.base,a),s=T0(l,a),c=l.label==="\\utilde"?.12:0,d=xt({positionType:"top",positionData:r.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:c},{type:"elem",elem:r}]});return se(["mord","accentunder"],[d],a)},mathmlBuilder:(l,a)=>{var r=C0(l.label),s=new de("munder",[zt(l.base,a),r]);return s.setAttribute("accentunder","true"),s}});var m0=l=>{var a=new de("mpadded",l?[l]:[]);return a.setAttribute("width","+0.6em"),a.setAttribute("lspace","0.3em"),a};we({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],numArgs:1,numOptionalArgs:1,handler(l,a,r){var s=l.parser,c=l.funcName;return{type:"xArrow",mode:s.mode,label:c,body:a[0],below:r[0]}},htmlBuilder(l,a){var r=a.style,s=a.havingStyle(r.sup()),c=Vr(wt(l.body,s,a),a),d=l.label.slice(0,2)==="\\x"?"x":"cd";c.classes.push(d+"-arrow-pad");var m;l.below&&(s=a.havingStyle(r.sub()),m=Vr(wt(l.below,s,a),a),m.classes.push(d+"-arrow-pad"));var g=T0(l,a),y=-a.fontMetrics().axisHeight+.5*g.height,v=-a.fontMetrics().axisHeight-.5*g.height-.111;(c.depth>.25||l.label==="\\xleftequilibrium")&&(v-=c.depth);var k;if(m){var M=-a.fontMetrics().axisHeight+m.height+.5*g.height+.111;k=xt({positionType:"individualShift",children:[{type:"elem",elem:c,shift:v},{type:"elem",elem:g,shift:y,wrapperClasses:["svg-align"]},{type:"elem",elem:m,shift:M}]})}else k=xt({positionType:"individualShift",children:[{type:"elem",elem:c,shift:v},{type:"elem",elem:g,shift:y,wrapperClasses:["svg-align"]}]});return se(["mrel","x-arrow"],[k],a)},mathmlBuilder(l,a){var r=C0(l.label);r.setAttribute("minsize",l.label.charAt(0)==="x"?"1.75em":"3.0em");var s;if(l.body){var c=m0(zt(l.body,a));if(l.below){var d=m0(zt(l.below,a));s=new de("munderover",[r,d,c])}else s=new de("mover",[r,c])}else if(l.below){var m=m0(zt(l.below,a));s=new de("munder",[r,m])}else s=m0(),s=new de("mover",[r,s]);return s}});function m7(l,a){var r=nn(l.body,a,!0);return se([l.mclass],r,a)}function f7(l,a){var r,s=Wn(l.body,a);return l.mclass==="minner"?r=new de("mpadded",s):l.mclass==="mord"?l.isCharacterBox?(r=s[0],r.type="mi"):r=new de("mi",s):(l.isCharacterBox?(r=s[0],r.type="mo"):r=new de("mo",s),l.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):l.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):(l.mclass==="mopen"||l.mclass==="mclose")&&(r.attributes.lspace="0em",r.attributes.rspace="0em")),r}we({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],numArgs:1,primitive:!0,handler(l,a){var r=l.parser,s=l.funcName,c=a[0];return{type:"mclass",mode:r.mode,mclass:"m"+s.slice(5),body:Kt(c),isCharacterBox:Ka(c)}},htmlBuilder:m7,mathmlBuilder:f7});var E0=l=>{var a=l.type==="ordgroup"&&l.body.length?l.body[0]:l;return a.type==="atom"&&(a.family==="bin"||a.family==="rel")?"m"+a.family:"mord"};we({type:"mclass",names:["\\@binrel"],numArgs:2,handler(l,a){var r=l.parser;return{type:"mclass",mode:r.mode,mclass:E0(a[0]),body:Kt(a[1]),isCharacterBox:Ka(a[1])}}});we({type:"mclass",names:["\\stackrel","\\overset","\\underset"],numArgs:2,handler(l,a){var r=l.parser,s=l.funcName,c=a[1],d=a[0],m;s!=="\\stackrel"?m=E0(c):m="mrel";var g={type:"op",mode:c.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:s!=="\\stackrel",body:Kt(c)},y=s==="\\underset"?{type:"supsub",mode:d.mode,base:g,sub:d}:{type:"supsub",mode:d.mode,base:g,sup:d};return{type:"mclass",mode:r.mode,mclass:m,body:[y],isCharacterBox:Ka(y)}}});we({type:"pmb",names:["\\pmb"],numArgs:1,allowedInText:!0,handler(l,a){var r=l.parser;return{type:"pmb",mode:r.mode,mclass:E0(a[0]),body:Kt(a[0])}},htmlBuilder(l,a){var r=nn(l.body,a,!0),s=se([l.mclass],r,a);return s.style.textShadow="0.02em 0.01em 0.04px",s},mathmlBuilder(l,a){var r=Wn(l.body,a),s=new de("mstyle",r);return s.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),s}});var p7={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},sf=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),of=l=>l.type==="textord"&&l.text==="@",g7=(l,a)=>(l.type==="mathord"||l.type==="atom")&&l.text===a;function v7(l,a,r){var s=p7[l];switch(s){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(s,[a[0]],[a[1]]);case"\\uparrow":case"\\downarrow":{var c=r.callFunction("\\\\cdleft",[a[0]],[]),d={type:"atom",text:s,mode:"math",family:"rel"},m=r.callFunction("\\Big",[d],[]),g=r.callFunction("\\\\cdright",[a[1]],[]),y={type:"ordgroup",mode:"math",body:[c,m,g]};return r.callFunction("\\\\cdparent",[y],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var v={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[v],[])}default:return{type:"textord",text:" ",mode:"math"}}}function y7(l){var a=[];for(l.gullet.beginGroup(),l.gullet.macros.set("\\cr","\\\\\\relax"),l.gullet.beginGroup();;){a.push(l.parseExpression(!1,"\\\\")),l.gullet.endGroup(),l.gullet.beginGroup();var r=l.fetch().text;if(r==="&"||r==="\\\\")l.consume();else if(r==="\\end"){a[a.length-1].length===0&&a.pop();break}else throw new oe("Expected \\\\ or \\cr or \\end",l.nextToken)}for(var s=[],c=[s],d=0;d<a.length;d++){for(var m=a[d],g=sf(),y=0;y<m.length;y++)if(!of(m[y]))g.body.push(m[y]);else{s.push(g),y+=1;var v=A0(m[y]).text,k=new Array(2);if(k[0]={type:"ordgroup",mode:"math",body:[]},k[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(v))if("<>AV".includes(v))for(var M=0;M<2;M++){for(var N=!0,q=y+1;q<m.length;q++){if(g7(m[q],v)){N=!1,y=q;break}if(of(m[q]))throw new oe("Missing a "+v+" character to complete a CD arrow.",m[q]);k[M].body.push(m[q])}if(N)throw new oe("Missing a "+v+" character to complete a CD arrow.",m[y])}else throw new oe('Expected one of "<>AV=|." after @',m[y]);var U=v7(v,k,l),X={type:"styling",body:[U],mode:"math",style:"display",resetFont:!0};s.push(X),g=sf()}d%2===0?s.push(g):s.shift(),s=[],c.push(s)}l.gullet.endGroup(),l.gullet.endGroup();var K=new Array(c[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:c,arraystretch:1,addJot:!0,rowGaps:[null],cols:K,colSeparationType:"CD",hLinesBeforeRow:new Array(c.length+1).fill([])}}we({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],numArgs:1,handler(l,a){var r=l.parser,s=l.funcName;return{type:"cdlabel",mode:r.mode,side:s.slice(4),label:a[0]}},htmlBuilder(l,a){var r=a.havingStyle(a.style.sup()),s=Vr(wt(l.label,r,a),a);return s.classes.push("cd-label-"+l.side),s.style.bottom=fe(.8-s.depth),s.height=0,s.depth=0,s},mathmlBuilder(l,a){var r=new de("mrow",[zt(l.label,a)]);return r=new de("mpadded",[r]),r.setAttribute("width","0"),l.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new de("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});we({type:"cdlabelparent",names:["\\\\cdparent"],numArgs:1,handler(l,a){var r=l.parser;return{type:"cdlabelparent",mode:r.mode,fragment:a[0]}},htmlBuilder(l,a){var r=Vr(wt(l.fragment,a),a);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(l,a){return new de("mrow",[zt(l.fragment,a)])}});we({type:"textord",names:["\\@char"],numArgs:1,allowedInText:!0,handler(l,a){var r=l.parser,s=ot(a[0],"ordgroup"),c=qu(s,"\\@char has non-numeric argument"),d=parseInt(c),m;if(isNaN(d))throw new oe("\\@char has non-numeric argument "+c);if(d<0||d>1114111)throw new oe("\\@char with invalid code point "+c);return d<=65535?m=String.fromCharCode(d):(d-=65536,m=String.fromCharCode((d>>10)+55296,(d&1023)+56320)),{type:"textord",mode:r.mode,text:m}}});var b7=(l,a)=>{var r=nn(l.body,a.withColor(l.color),!1);return Ja(r)},x7=(l,a)=>{var r=Wn(l.body,a.withColor(l.color)),s=new de("mstyle",r);return s.setAttribute("mathcolor",l.color),s};we({type:"color",names:["\\textcolor"],numArgs:2,allowedInText:!0,argTypes:["color","original"],handler(l,a){var r=l.parser,s=ot(a[0],"color-token").color,c=a[1];return{type:"color",mode:r.mode,color:s,body:Kt(c)}},htmlBuilder:b7,mathmlBuilder:x7});we({type:"color",names:["\\color"],numArgs:1,allowedInText:!0,argTypes:["color"],handler(l,a){var r=l.parser,s=l.breakOnTokenText,c=ot(a[0],"color-token").color;r.gullet.macros.set("\\current@color",c);var d=r.parseExpression(!0,s);return{type:"color",mode:r.mode,color:c,body:d}}});we({type:"cr",names:["\\\\"],numArgs:0,numOptionalArgs:0,allowedInText:!0,handler(l,a,r){var s=l.parser,c=s.gullet.future().text==="["?s.parseSizeGroup(!0):null,d=!s.settings.displayMode||!s.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:s.mode,newLine:d,size:c&&ot(c,"size").value}},htmlBuilder(l,a){var r=se(["mspace"],[],a);return l.newLine&&(r.classes.push("katex-newline"),l.size&&(r.style.marginTop=fe(It(l.size,a)))),r},mathmlBuilder(l,a){var r=new de("mspace");return l.newLine&&(r.setAttribute("linebreak","newline"),l.size&&r.setAttribute("height",fe(It(l.size,a)))),r}});var Cu={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},t2=l=>{var a=l.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new oe("Expected a control sequence",l);return a},w7=l=>{var a=l.gullet.popToken();return a.text==="="&&(a=l.gullet.popToken(),a.text===" "&&(a=l.gullet.popToken())),a},n2=(l,a,r,s)=>{var c=l.gullet.macros.get(r.text);c==null&&(r.noexpand=!0,c={tokens:[r],numArgs:0,unexpandable:!l.gullet.isExpandable(r.text)}),l.gullet.macros.set(a,c,s)};we({type:"internal",names:["\\global","\\long","\\\\globallong"],numArgs:0,allowedInText:!0,handler(l){var a=l.parser,r=l.funcName;a.consumeSpaces();var s=a.fetch();if(Cu[s.text])return(r==="\\global"||r==="\\\\globallong")&&(s.text=Cu[s.text]),ot(a.parseFunction(),"internal");throw new oe("Invalid token after macro prefix",s)}});we({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],numArgs:0,allowedInText:!0,primitive:!0,handler(l){var a=l.parser,r=l.funcName,s=a.gullet.popToken(),c=s.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(c))throw new oe("Expected a control sequence",s);for(var d=0,m,g=[[]];a.gullet.future().text!=="{";)if(s=a.gullet.popToken(),s.text==="#"){if(a.gullet.future().text==="{"){m=a.gullet.future(),g[d].push("{");break}if(s=a.gullet.popToken(),!/^[1-9]$/.test(s.text))throw new oe('Invalid argument number "'+s.text+'"');if(parseInt(s.text)!==d+1)throw new oe('Argument number "'+s.text+'" out of order');d++,g.push([])}else{if(s.text==="EOF")throw new oe("Expected a macro definition");g[d].push(s.text)}var y=a.gullet.consumeArg(),v=y.tokens;return m&&v.unshift(m),(r==="\\edef"||r==="\\xdef")&&(v=a.gullet.expandTokens(v),v.reverse()),a.gullet.macros.set(c,{tokens:v,numArgs:d,delimiters:g},r===Cu[r]),{type:"internal",mode:a.mode}}});we({type:"internal",names:["\\let","\\\\globallet"],numArgs:0,allowedInText:!0,primitive:!0,handler(l){var a=l.parser,r=l.funcName,s=t2(a.gullet.popToken());a.gullet.consumeSpaces();var c=w7(a);return n2(a,s,c,r==="\\\\globallet"),{type:"internal",mode:a.mode}}});we({type:"internal",names:["\\futurelet","\\\\globalfuture"],numArgs:0,allowedInText:!0,primitive:!0,handler(l){var a=l.parser,r=l.funcName,s=t2(a.gullet.popToken()),c=a.gullet.popToken(),d=a.gullet.popToken();return n2(a,s,d,r==="\\\\globalfuture"),a.gullet.pushToken(d),a.gullet.pushToken(c),{type:"internal",mode:a.mode}}});var Gl=function(a,r,s){var c=Bt.math[a]&&Bt.math[a].replace,d=Lu(c||a,r,s);if(!d)throw new Error("Unsupported symbol "+a+" and font size "+r+".");return d},Iu=function(a,r,s,c){var d=s.havingBaseStyle(r),m=se(c.concat(d.sizingClasses(s)),[a],s),g=d.sizeMultiplier/s.sizeMultiplier;return m.height*=g,m.depth*=g,m.maxFontSize=d.sizeMultiplier,m},a2=function(a,r,s){var c=r.havingBaseStyle(s),d=(1-r.sizeMultiplier/c.sizeMultiplier)*r.fontMetrics().axisHeight;a.classes.push("delimcenter"),a.style.top=fe(d),a.height-=d,a.depth+=d},S7=function(a,r,s,c,d,m){var g=xn(a,"Main-Regular",d,c),y=Iu(g,r,c,m);return a2(y,c,r),y},k7=function(a,r,s,c){return xn(a,"Size"+r+"-Regular",s,c)},i2=function(a,r,s,c,d,m){var g=k7(a,r,d,c),y=Iu(se(["delimsizing","size"+r],[g],c),$e.TEXT,c,m);return s&&a2(y,c,$e.TEXT),y},tu=function(a,r,s){var c;r==="Size1-Regular"?c="delim-size1":c="delim-size4";var d=se(["delimsizinginner",c],[se([],[xn(a,r,s)])]);return{type:"elem",elem:d}},nu=function(a,r,s){var c=Sa["Size4-Regular"][a.charCodeAt(0)]?Sa["Size4-Regular"][a.charCodeAt(0)][4]:Sa["Size1-Regular"][a.charCodeAt(0)][4],d=new Ei("inner",T6(a,Math.round(1e3*r))),m=new Za([d],{width:fe(c),height:fe(r),style:"width:"+fe(c),viewBox:"0 0 "+1e3*c+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),g=Di([],[m],s);return g.height=r,g.style.height=fe(r),g.style.width=fe(c),{type:"elem",elem:g}},Tu=.008,f0={type:"kern",size:-1*Tu},C7=new Set(["|","\\lvert","\\rvert","\\vert"]),T7=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),r2=function(a,r,s,c,d,m){var g,y,v,k,M="",N=0;g=v=k=a,y=null;var q="Size1-Regular";a==="\\uparrow"?v=k="⏐":a==="\\Uparrow"?v=k="‖":a==="\\downarrow"?g=v="⏐":a==="\\Downarrow"?g=v="‖":a==="\\updownarrow"?(g="\\uparrow",v="⏐",k="\\downarrow"):a==="\\Updownarrow"?(g="\\Uparrow",v="‖",k="\\Downarrow"):C7.has(a)?(v="∣",M="vert",N=333):T7.has(a)?(v="∥",M="doublevert",N=556):a==="["||a==="\\lbrack"?(g="⎡",v="⎢",k="⎣",q="Size4-Regular",M="lbrack",N=667):a==="]"||a==="\\rbrack"?(g="⎤",v="⎥",k="⎦",q="Size4-Regular",M="rbrack",N=667):a==="\\lfloor"||a==="⌊"?(v=g="⎢",k="⎣",q="Size4-Regular",M="lfloor",N=667):a==="\\lceil"||a==="⌈"?(g="⎡",v=k="⎢",q="Size4-Regular",M="lceil",N=667):a==="\\rfloor"||a==="⌋"?(v=g="⎥",k="⎦",q="Size4-Regular",M="rfloor",N=667):a==="\\rceil"||a==="⌉"?(g="⎤",v=k="⎥",q="Size4-Regular",M="rceil",N=667):a==="("||a==="\\lparen"?(g="⎛",v="⎜",k="⎝",q="Size4-Regular",M="lparen",N=875):a===")"||a==="\\rparen"?(g="⎞",v="⎟",k="⎠",q="Size4-Regular",M="rparen",N=875):a==="\\{"||a==="\\lbrace"?(g="⎧",y="⎨",k="⎩",v="⎪",q="Size4-Regular"):a==="\\}"||a==="\\rbrace"?(g="⎫",y="⎬",k="⎭",v="⎪",q="Size4-Regular"):a==="\\lgroup"||a==="⟮"?(g="⎧",k="⎩",v="⎪",q="Size4-Regular"):a==="\\rgroup"||a==="⟯"?(g="⎫",k="⎭",v="⎪",q="Size4-Regular"):a==="\\lmoustache"||a==="⎰"?(g="⎧",k="⎭",v="⎪",q="Size4-Regular"):(a==="\\rmoustache"||a==="⎱")&&(g="⎫",k="⎩",v="⎪",q="Size4-Regular");var U=Gl(g,q,d),X=U.height+U.depth,K=Gl(v,q,d),O=K.height+K.depth,V=Gl(k,q,d),W=V.height+V.depth,ce=0,re=1;if(y!==null){var ie=Gl(y,q,d);ce=ie.height+ie.depth,re=2}var ue=X+W+ce,Re=Math.max(0,Math.ceil((r-ue)/(re*O))),Oe=ue+Re*re*O,Be=c.fontMetrics().axisHeight;s&&(Be*=c.sizeMultiplier);var Je=Oe/2-Be,Ve=[];if(M.length>0){var ft=Oe-X-W,et=Math.round(Oe*1e3),lt=A6(M,Math.round(ft*1e3)),B=new Ei(M,lt),ne=fe(N/1e3),ee=fe(et/1e3),Te=new Za([B],{width:ne,height:ee,viewBox:"0 0 "+N+" "+et}),Se=Di([],[Te],c);Se.height=et/1e3,Se.style.width=ne,Se.style.height=ee,Ve.push({type:"elem",elem:Se})}else{if(Ve.push(tu(k,q,d)),Ve.push(f0),y===null){var S=Oe-X-W+2*Tu;Ve.push(nu(v,S,c))}else{var L=(Oe-X-W-ce)/2+2*Tu;Ve.push(nu(v,L,c)),Ve.push(f0),Ve.push(tu(y,q,d)),Ve.push(f0),Ve.push(nu(v,L,c))}Ve.push(f0),Ve.push(tu(g,q,d))}var te=c.havingBaseStyle($e.TEXT),P=xt({positionType:"bottom",positionData:Je,children:Ve});return Iu(se(["delimsizing","mult"],[P],te),$e.TEXT,c,m)},au=80,iu=.08,ru=function(a,r,s,c,d){var m=C6(a,c,s),g=new Ei(a,m),y=new Za([g],{width:"400em",height:fe(r),viewBox:"0 0 400000 "+s,preserveAspectRatio:"xMinYMin slice"});return Di(["hide-tail"],[y],d)},A7=function(a,r){var s=r.havingBaseSizing(),c=u2("\\surd",a*s.sizeMultiplier,c2,s),d=s.sizeMultiplier,m=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),g,y,v,k,M;return c.type==="small"?(k=1e3+1e3*m+au,a<1?d=1:a<1.4&&(d=.7),y=(1+m+iu)/d,v=(1+m)/d,g=ru("sqrtMain",y,k,m,r),g.style.minWidth="0.853em",M=.833/d):c.type==="large"?(k=(1e3+au)*Yl[c.size],v=(Yl[c.size]+m)/d,y=(Yl[c.size]+m+iu)/d,g=ru("sqrtSize"+c.size,y,k,m,r),g.style.minWidth="1.02em",M=1/d):(y=a+m+iu,v=a+m,k=Math.floor(1e3*a+m)+au,g=ru("sqrtTall",y,k,m,r),g.style.minWidth="0.742em",M=1.056),g.height=v,g.style.height=fe(y),{span:g,advanceWidth:M,ruleWidth:(r.fontMetrics().sqrtRuleThickness+m)*d}},l2=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),M7=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),s2=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Yl=[0,1.2,1.8,2.4,3],o2=function(a,r,s,c,d){if(a==="<"||a==="\\lt"||a==="⟨"?a="\\langle":(a===">"||a==="\\gt"||a==="⟩")&&(a="\\rangle"),l2.has(a)||s2.has(a))return i2(a,r,!1,s,c,d);if(M7.has(a))return r2(a,Yl[r],!1,s,c,d);throw new oe("Illegal delimiter: '"+a+"'")},E7=[{type:"small",style:$e.SCRIPTSCRIPT},{type:"small",style:$e.SCRIPT},{type:"small",style:$e.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],D7=[{type:"small",style:$e.SCRIPTSCRIPT},{type:"small",style:$e.SCRIPT},{type:"small",style:$e.TEXT},{type:"stack"}],c2=[{type:"small",style:$e.SCRIPTSCRIPT},{type:"small",style:$e.SCRIPT},{type:"small",style:$e.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],z7=function(a){if(a.type==="small")return"Main-Regular";if(a.type==="large")return"Size"+a.size+"-Regular";if(a.type==="stack")return"Size4-Regular";var r=a.type;throw new Error("Add support for delim type '"+r+"' here.")},u2=function(a,r,s,c){for(var d=Math.min(2,3-c.style.size),m=d;m<s.length;m++){var g=s[m];if(g.type==="stack")break;var y=Gl(a,z7(g),"math"),v=y.height+y.depth;if(g.type==="small"){var k=c.havingBaseStyle(g.style);v*=k.sizeMultiplier}if(v>r)return g}return s[s.length-1]},Au=function(a,r,s,c,d,m){a==="<"||a==="\\lt"||a==="⟨"?a="\\langle":(a===">"||a==="\\gt"||a==="⟩")&&(a="\\rangle");var g;s2.has(a)?g=E7:l2.has(a)?g=c2:g=D7;var y=u2(a,r,g,c);return y.type==="small"?S7(a,y.style,s,c,d,m):y.type==="large"?i2(a,y.size,s,c,d,m):r2(a,r,s,c,d,m)},lu=function(a,r,s,c,d,m){var g=c.fontMetrics().axisHeight*c.sizeMultiplier,y=901,v=5/c.fontMetrics().ptPerEm,k=Math.max(r-g,s+g),M=Math.max(k/500*y,2*k-v);return Au(a,M,!0,c,d,m)},cf={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},N7=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function uf(l){return"isMiddle"in l}function D0(l,a){var r=M0(l);if(r&&N7.has(r.text))return r;throw r?new oe("Invalid delimiter '"+r.text+"' after '"+a.funcName+"'",l):new oe("Invalid delimiter type '"+l.type+"'",l)}we({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],numArgs:1,argTypes:["primitive"],handler:(l,a)=>{var r=D0(Ql(a[0]),l);return{type:"delimsizing",mode:l.parser.mode,size:cf[l.funcName].size,mclass:cf[l.funcName].mclass,delim:r.text}},htmlBuilder:(l,a)=>l.delim==="."?se([l.mclass]):o2(l.delim,l.size,a,l.mode,[l.mclass]),mathmlBuilder:l=>{var a=[];l.delim!=="."&&a.push(sa(l.delim,l.mode));var r=new de("mo",a);l.mclass==="mopen"||l.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var s=fe(Yl[l.size]);return r.setAttribute("minsize",s),r.setAttribute("maxsize",s),r}});function df(l){if(!l.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}we({type:"leftright-right",names:["\\right"],numArgs:1,primitive:!0,handler:(l,a)=>{var r=l.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new oe("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:l.parser.mode,delim:D0(a[0],l).text,color:r}}});we({type:"leftright",names:["\\left"],numArgs:1,primitive:!0,handler:(l,a)=>{var r=D0(a[0],l),s=l.parser;++s.leftrightDepth;var c=s.parseExpression(!1);--s.leftrightDepth,s.expect("\\right",!1);var d=ot(s.parseFunction(),"leftright-right");return{type:"leftright",mode:s.mode,body:c,left:r.text,right:d.delim,rightColor:d.color}},htmlBuilder:(l,a)=>{df(l);for(var r=nn(l.body,a,!0,["mopen","mclose"]),s=0,c=0,d=!1,m=0;m<r.length;m++){var g=r[m];uf(g)?d=!0:(s=Math.max(r[m].height,s),c=Math.max(r[m].depth,c))}s*=a.sizeMultiplier,c*=a.sizeMultiplier;var y;if(l.left==="."?y=Pl(a,["mopen"]):y=lu(l.left,s,c,a,l.mode,["mopen"]),r.unshift(y),d)for(var v=1;v<r.length;v++){var k=r[v];if(uf(k)){var M=k.isMiddle;r[v]=lu(M.delim,s,c,M.options,l.mode,[])}}var N;if(l.right===".")N=Pl(a,["mclose"]);else{var q=l.rightColor?a.withColor(l.rightColor):a;N=lu(l.right,s,c,q,l.mode,["mclose"])}return r.push(N),se(["minner"],r,a)},mathmlBuilder:(l,a)=>{df(l);var r=Wn(l.body,a);if(l.left!=="."){var s=new de("mo",[sa(l.left,l.mode)]);s.setAttribute("fence","true"),r.unshift(s)}if(l.right!=="."){var c=new de("mo",[sa(l.right,l.mode)]);c.setAttribute("fence","true"),l.rightColor&&c.setAttribute("mathcolor",l.rightColor),r.push(c)}return Hu(r)}});we({type:"middle",names:["\\middle"],numArgs:1,primitive:!0,handler:(l,a)=>{var r=D0(a[0],l);if(!l.parser.leftrightDepth)throw new oe("\\middle without preceding \\left",r);return{type:"middle",mode:l.parser.mode,delim:r.text}},htmlBuilder:(l,a)=>{var r;return l.delim==="."?r=Pl(a,[]):(r=o2(l.delim,1,a,l.mode,[]),r.isMiddle={delim:l.delim,options:a}),r},mathmlBuilder:(l,a)=>{var r=l.delim==="\\vert"||l.delim==="|"?sa("|","text"):sa(l.delim,l.mode),s=new de("mo",[r]);return s.setAttribute("fence","true"),s.setAttribute("lspace","0.05em"),s.setAttribute("rspace","0.05em"),s}});var R7=(l,a)=>{var r=Vr(wt(l.body,a),a),s=l.label.slice(1),c=a.sizeMultiplier,d,m,g=Ka(l.body);if(s==="sout")d=se(["katex-stretchy","katex-sout"]),d.height=a.fontMetrics().defaultRuleThickness/c,m=-.5*a.fontMetrics().xHeight;else if(s==="phase"){var y=It({number:.6,unit:"pt"},a),v=It({number:.35,unit:"ex"},a),k=a.havingBaseSizing();c=c/k.sizeMultiplier;var M=r.height+r.depth+y+v;r.style.paddingLeft=fe(M/2+y);var N=Math.floor(1e3*M*c),q=S6(N),U=new Za([new Ei("phase",q)],{width:"400em",height:fe(N/1e3),viewBox:"0 0 400000 "+N,preserveAspectRatio:"xMinYMin slice"});d=Di(["hide-tail"],[U],a),d.style.height=fe(M),m=r.depth+y+v}else{/cancel/.test(s)?g||r.classes.push("cancel-pad"):s==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var X,K,O=0;/box/.test(s)?(O=Math.max(a.fontMetrics().fboxrule,a.minRuleThickness),X=a.fontMetrics().fboxsep+(s==="colorbox"?0:O),K=X):s==="angl"?(O=Math.max(a.fontMetrics().defaultRuleThickness,a.minRuleThickness),X=4*O,K=Math.max(0,.25-r.depth)):(X=g?.2:0,K=X),d=r7(r,s,X,K,a),/fbox|boxed|fcolorbox/.test(s)?(d.style.borderStyle="solid",d.style.borderWidth=fe(O)):s==="angl"&&O!==.049&&(d.style.borderTopWidth=fe(O),d.style.borderRightWidth=fe(O)),m=r.depth+K,l.backgroundColor&&(d.style.backgroundColor=l.backgroundColor,l.borderColor&&(d.style.borderColor=l.borderColor))}var V;if(l.backgroundColor)V=xt({positionType:"individualShift",children:[{type:"elem",elem:d,shift:m},{type:"elem",elem:r,shift:0}]});else{var W=/cancel|phase/.test(s)?["svg-align"]:[];V=xt({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:d,shift:m,wrapperClasses:W}]})}return/cancel/.test(s)&&(V.height=r.height,V.depth=r.depth),/cancel/.test(s)&&!g?se(["mord","cancel-lap"],[V],a):se(["mord"],[V],a)},L7=(l,a)=>{var r,s=new de(l.label.includes("colorbox")?"mpadded":"menclose",[zt(l.body,a)]);switch(l.label){case"\\cancel":s.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":s.setAttribute("notation","downdiagonalstrike");break;case"\\phase":s.setAttribute("notation","phasorangle");break;case"\\sout":s.setAttribute("notation","horizontalstrike");break;case"\\fbox":s.setAttribute("notation","box");break;case"\\angl":s.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=a.fontMetrics().fboxsep*a.fontMetrics().ptPerEm,s.setAttribute("width","+"+2*r+"pt"),s.setAttribute("height","+"+2*r+"pt"),s.setAttribute("lspace",r+"pt"),s.setAttribute("voffset",r+"pt"),l.label==="\\fcolorbox"){var c=Math.max(a.fontMetrics().fboxrule,a.minRuleThickness);s.setAttribute("style","border: "+fe(c)+" solid "+l.borderColor)}break;case"\\xcancel":s.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return l.backgroundColor&&s.setAttribute("mathbackground",l.backgroundColor),s};we({type:"enclose",names:["\\colorbox"],numArgs:2,allowedInText:!0,argTypes:["color","hbox"],handler(l,a,r){var s=l.parser,c=l.funcName,d=ot(a[0],"color-token").color,m=a[1];return{type:"enclose",mode:s.mode,label:c,backgroundColor:d,body:m}},htmlBuilder:R7,mathmlBuilder:L7});we({type:"enclose",names:["\\fcolorbox"],numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"],handler(l,a,r){var s=l.parser,c=l.funcName,d=ot(a[0],"color-token").color,m=ot(a[1],"color-token").color,g=a[2];return{type:"enclose",mode:s.mode,label:c,backgroundColor:m,borderColor:d,body:g}}});we({type:"enclose",names:["\\fbox"],numArgs:1,argTypes:["hbox"],allowedInText:!0,handler(l,a){var r=l.parser;return{type:"enclose",mode:r.mode,label:"\\fbox",body:a[0]}}});we({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],numArgs:1,handler(l,a){var r=l.parser,s=l.funcName,c=a[0];return{type:"enclose",mode:r.mode,label:s,body:c}}});we({type:"enclose",names:["\\sout"],numArgs:1,allowedInText:!0,handler(l,a){var r=l.parser,s=l.funcName;r.mode==="math"&&r.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var c=a[0];return{type:"enclose",mode:r.mode,label:s,body:c}}});we({type:"enclose",names:["\\angl"],numArgs:1,argTypes:["hbox"],allowedInText:!1,handler(l,a){var r=l.parser;return{type:"enclose",mode:r.mode,label:"\\angl",body:a[0]}}});var d2={};function ka(l){for(var a=l.type,r=l.names,s=l.props,c=l.handler,d=l.htmlBuilder,m=l.mathmlBuilder,g={type:a,numArgs:s.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:c},y=0;y<r.length;++y)d2[r[y]]=g;d&&(Xl[a]=d),m&&(Wl[a]=m)}var h2={};function w(l,a){h2[l]=a}class Rn{constructor(a,r,s){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=a,this.start=r,this.end=s}static range(a,r){return r?!a||!a.loc||!r.loc||a.loc.lexer!==r.loc.lexer?null:new Rn(a.loc.lexer,a.loc.start,r.loc.end):a&&a.loc}}class Yn{constructor(a,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=a,this.loc=r}range(a,r){return new Yn(r,Rn.range(this,a))}}function hf(l){var a=[];l.consumeSpaces();var r=l.fetch().text;for(r==="\\relax"&&(l.consume(),l.consumeSpaces(),r=l.fetch().text);r==="\\hline"||r==="\\hdashline";)l.consume(),a.push(r==="\\hdashline"),l.consumeSpaces(),r=l.fetch().text;return a}var z0=l=>{var a=l.parser.settings;if(!a.displayMode)throw new oe("{"+l.envName+"} can be used only in display mode.")},O7=new Set(["gather","gather*"]);function Fu(l){if(!l.includes("ed"))return!l.includes("*")}function Ni(l,a,r){var s=a.hskipBeforeAndAfter,c=a.addJot,d=a.cols,m=a.arraystretch,g=a.colSeparationType,y=a.autoTag,v=a.singleRow,k=a.emptySingleRow,M=a.maxNumCols,N=a.leqno;if(l.gullet.beginGroup(),v||l.gullet.macros.set("\\cr","\\\\\\relax"),!m){var q=l.gullet.expandMacroAsText("\\arraystretch");if(q==null)m=1;else if(m=parseFloat(q),!m||m<0)throw new oe("Invalid \\arraystretch: "+q)}l.gullet.beginGroup();var U=[],X=[U],K=[],O=[],V=y!=null?[]:void 0;function W(){y&&l.gullet.macros.set("\\@eqnsw","1",!0)}function ce(){V&&(l.gullet.macros.get("\\df@tag")?(V.push(l.subparse([new Yn("\\df@tag")])),l.gullet.macros.set("\\df@tag",void 0,!0)):V.push(!!y&&l.gullet.macros.get("\\@eqnsw")==="1"))}for(W(),O.push(hf(l));;){var re=l.parseExpression(!1,v?"\\end":"\\\\");l.gullet.endGroup(),l.gullet.beginGroup();var ie={type:"ordgroup",mode:l.mode,body:re};r&&(ie={type:"styling",mode:l.mode,style:r,resetFont:!0,body:[ie]}),U.push(ie);var ue=l.fetch().text;if(ue==="&"){if(M&&U.length===M){if(v||g)throw new oe("Too many tab characters: &",l.nextToken);l.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}l.consume()}else if(ue==="\\end"){ce(),U.length===1&&ie.type==="styling"&&ie.body.length===1&&ie.body[0].type==="ordgroup"&&ie.body[0].body.length===0&&(X.length>1||!k)&&!Array.isArray(V==null?void 0:V[V.length-1])&&X.pop(),O.length<X.length+1&&O.push([]);break}else if(ue==="\\\\"){l.consume();var Re=void 0;l.gullet.future().text!==" "&&(Re=l.parseSizeGroup(!0)),K.push(Re?Re.value:null),ce(),O.push(hf(l)),U=[],X.push(U),W()}else throw new oe("Expected & or \\\\ or \\cr or \\end",l.nextToken)}return l.gullet.endGroup(),l.gullet.endGroup(),{type:"array",mode:l.mode,addJot:c,arraystretch:m,body:X,cols:d,rowGaps:K,hskipBeforeAndAfter:s,hLinesBeforeRow:O,colSeparationType:g,tags:V,leqno:N}}function Uu(l){return l.slice(0,1)==="d"?"display":"text"}var Ca=function(a,r){var s,c,d=a.body.length,m=a.hLinesBeforeRow,g=0,y=new Array(d),v=[],k=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),M=1/r.fontMetrics().ptPerEm,N=5*M;if(a.colSeparationType&&a.colSeparationType==="small"){var q=r.havingStyle($e.SCRIPT).sizeMultiplier;N=.2778*(q/r.sizeMultiplier)}var U=a.colSeparationType==="CD"?It({number:3,unit:"ex"},r):12*M,X=3*M,K=a.arraystretch*U,O=.7*K,V=.3*K,W=0;function ce(Pe){for(var it=0;it<Pe.length;++it)it>0&&(W+=.25),v.push({pos:W,isDashed:Pe[it]})}for(ce(m[0]),s=0;s<a.body.length;++s){var re=a.body[s],ie=O,ue=V;g<re.length&&(g=re.length);var Re={cells:new Array(re.length),height:0,depth:0,pos:0};for(c=0;c<re.length;++c){var Oe=wt(re[c],r);ue<Oe.depth&&(ue=Oe.depth),ie<Oe.height&&(ie=Oe.height),Re.cells[c]=Oe}var Be=a.rowGaps[s],Je=0;Be&&(Je=It(Be,r),Je>0&&(Je+=V,ue<Je&&(ue=Je),Je=0)),a.addJot&&s<a.body.length-1&&(ue+=X),Re.height=ie,Re.depth=ue,W+=ie,Re.pos=W,W+=ue+Je,y[s]=Re,ce(m[s+1])}var Ve=W/2+r.fontMetrics().axisHeight,ft=a.cols||[],et=[],lt,B,ne=[];if(a.tags&&a.tags.some(Pe=>Pe))for(s=0;s<d;++s){var ee=y[s],Te=ee.pos-Ve,Se=a.tags[s],S=void 0;Se===!0?S=se(["eqn-num"],[],r):Se===!1?S=se([],[],r):S=se([],nn(Se,r,!0),r),S.depth=ee.depth,S.height=ee.height,ne.push({type:"elem",elem:S,shift:Te})}for(c=0,B=0;c<g||B<ft.length;++c,++B){for(var L,te=ft[B],P=!0;((xe=te)==null?void 0:xe.type)==="separator";){var xe;if(P||(lt=se(["arraycolsep"],[]),lt.style.width=fe(r.fontMetrics().doubleRuleSep),et.push(lt)),te.separator==="|"||te.separator===":"){var ke=te.separator==="|"?"solid":"dashed",Ee=se(["vertical-separator"],[],r);Ee.style.height=fe(W),Ee.style.borderRightWidth=fe(k),Ee.style.borderRightStyle=ke,Ee.style.margin="0 "+fe(-k/2);var Ie=W-Ve;Ie&&(Ee.style.verticalAlign=fe(-Ie)),et.push(Ee)}else throw new oe("Invalid separator type: "+te.separator);B++,te=ft[B],P=!1}if(!(c>=g)){var Fe=void 0;if(c>0||a.hskipBeforeAndAfter){var an,Ze;Fe=(an=(Ze=te)==null?void 0:Ze.pregap)!=null?an:N,Fe!==0&&(lt=se(["arraycolsep"],[]),lt.style.width=fe(Fe),et.push(lt))}var Qe=[];for(s=0;s<d;++s){var Ae=y[s],_=Ae.cells[c];if(_){var I=Ae.pos-Ve;_.depth=Ae.depth,_.height=Ae.height,Qe.push({type:"elem",elem:_,shift:I})}}var G=xt({positionType:"individualShift",children:Qe}),ge=se(["col-align-"+(((L=te)==null?void 0:L.align)||"c")],[G]);if(et.push(ge),c<g-1||a.hskipBeforeAndAfter){var he,Ce;Fe=(he=(Ce=te)==null?void 0:Ce.postgap)!=null?he:N,Fe!==0&&(lt=se(["arraycolsep"],[]),lt.style.width=fe(Fe),et.push(lt))}}}var be=se(["mtable"],et);if(v.length>0){for(var ve=Yr("katex-hline",r,k),ye=Yr("katex-hdashline",r,k),De=[{type:"elem",elem:be,shift:0}];v.length>0;){var me=v.pop(),pe=me.pos-Ve;me.isDashed?De.push({type:"elem",elem:ye,shift:pe}):De.push({type:"elem",elem:ve,shift:pe})}be=xt({positionType:"individualShift",children:De})}if(ne.length===0)return se(["mord"],[be],r);var He=xt({positionType:"individualShift",children:ne}),tt=se(["katex-tag"],[He],r);return Ja([be,tt])},B7={c:"center ",l:"left ",r:"right "},Ta=function(a,r){for(var s=[],c=new de("mtd",[],["mtr-glue"]),d=new de("mtd",[],["mml-eqn-num"]),m=0;m<a.body.length;m++){for(var g=a.body[m],y=[],v=0;v<g.length;v++)y.push(new de("mtd",[zt(g[v],r)]));a.tags&&a.tags[m]&&(y.unshift(c),y.push(c),a.leqno?y.unshift(d):y.push(d)),s.push(new de("mtr",y))}var k=new de("mtable",s),M=a.arraystretch===.5?.1:.16+a.arraystretch-1+(a.addJot?.09:0);k.setAttribute("rowspacing",fe(M));var N="",q="";if(a.cols&&a.cols.length>0){var U=a.cols,X="",K=!1,O=0,V=U.length;U[0].type==="separator"&&(N+="top ",O=1),U[U.length-1].type==="separator"&&(N+="bottom ",V-=1);for(var W=O;W<V;W++){var ce=U[W];ce.type==="align"?(q+=B7[ce.align],K&&(X+="none "),K=!0):ce.type==="separator"&&K&&(X+=ce.separator==="|"?"solid ":"dashed ",K=!1)}k.setAttribute("columnalign",q.trim()),/[sd]/.test(X)&&k.setAttribute("columnlines",X.trim())}if(a.colSeparationType==="align"){for(var re=a.cols||[],ie="",ue=1;ue<re.length;ue++)ie+=ue%2?"0em ":"1em ";k.setAttribute("columnspacing",ie.trim())}else a.colSeparationType==="alignat"||a.colSeparationType==="gather"?k.setAttribute("columnspacing","0em"):a.colSeparationType==="small"?k.setAttribute("columnspacing","0.2778em"):a.colSeparationType==="CD"?k.setAttribute("columnspacing","0.5em"):k.setAttribute("columnspacing","1em");var Re="",Oe=a.hLinesBeforeRow;N+=Oe[0].length>0?"left ":"",N+=Oe[Oe.length-1].length>0?"right ":"";for(var Be=1;Be<Oe.length-1;Be++)Re+=Oe[Be].length===0?"none ":Oe[Be][0]?"dashed ":"solid ";return/[sd]/.test(Re)&&k.setAttribute("rowlines",Re.trim()),N!==""&&(k=new de("menclose",[k]),k.setAttribute("notation",N.trim())),a.arraystretch&&a.arraystretch<1&&(k=new de("mstyle",[k]),k.setAttribute("scriptlevel","1")),k},m2=function(a,r){a.envName.includes("ed")||z0(a);var s=[],c=a.envName==="split",d=Ni(a.parser,{cols:s,addJot:!0,autoTag:c?void 0:Fu(a.envName),emptySingleRow:!0,colSeparationType:a.envName.includes("at")?"alignat":"align",maxNumCols:c?2:void 0,leqno:a.parser.settings.leqno},"display"),m=0,g=0,y={type:"ordgroup",mode:a.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){var v="Number of columns should be a positive integer",k=qu(r[0],v);if(!/^[0-9]+$/.test(k)||Number(k)<1)throw new oe(v,r[0]);m=Number(k),g=m*2}var M=!g;d.body.forEach(function(X){for(var K=1;K<X.length;K+=2){var O=ot(X[K],"styling"),V=ot(O.body[0],"ordgroup");V.body.unshift(y)}if(M)g<X.length&&(g=X.length);else{var W=X.length/2;if(m<W)throw new oe("Too many math in a row: "+("expected "+m+", but got "+W),X[0])}});for(var N=0;N<g;++N){var q="r",U=0;N%2===1?q="l":N>0&&M&&(U=1),s[N]={type:"align",align:q,pregap:U,postgap:0}}return d.colSeparationType=M?"align":"alignat",d};ka({type:"array",names:["array","darray"],props:{numArgs:1},handler(l,a){var r=M0(a[0]),s=r?[a[0]]:ot(a[0],"ordgroup").body,c=s.map(function(m){var g=A0(m),y=g.text;if("lcr".includes(y))return{type:"align",align:y};if(y==="|")return{type:"separator",separator:"|"};if(y===":")return{type:"separator",separator:":"};throw new oe("Unknown column alignment: "+y,m)}),d={cols:c,hskipBeforeAndAfter:!0,maxNumCols:c.length};return Ni(l.parser,d,Uu(l.envName))},htmlBuilder:Ca,mathmlBuilder:Ta});ka({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(l){var a={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[l.envName.replace("*","")],r="c",s={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(l.envName.charAt(l.envName.length-1)==="*"){var c=l.parser;if(c.consumeSpaces(),c.fetch().text==="["){if(c.consume(),c.consumeSpaces(),r=c.fetch().text,!"lcr".includes(r))throw new oe("Expected l or c or r",c.nextToken);c.consume(),c.consumeSpaces(),c.expect("]"),c.consume(),s.cols=[{type:"align",align:r}]}}var d=Ni(l.parser,s,Uu(l.envName)),m=Math.max(0,...d.body.map(g=>g.length));return d.cols=new Array(m).fill({type:"align",align:r}),a?{type:"leftright",mode:l.mode,body:[d],left:a[0],right:a[1],rightColor:void 0}:d},htmlBuilder:Ca,mathmlBuilder:Ta});ka({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(l){var a={arraystretch:.5},r=Ni(l.parser,a,"script");return r.colSeparationType="small",r},htmlBuilder:Ca,mathmlBuilder:Ta});ka({type:"array",names:["subarray"],props:{numArgs:1},handler(l,a){var r=M0(a[0]),s=r?[a[0]]:ot(a[0],"ordgroup").body,c=s.map(function(g){var y=A0(g),v=y.text;if("lc".includes(v))return{type:"align",align:v};throw new oe("Unknown column alignment: "+v,g)});if(c.length>1)throw new oe("{subarray} can contain only one column");var d={cols:c,hskipBeforeAndAfter:!1,arraystretch:.5},m=Ni(l.parser,d,"script");if(m.body.length>0&&m.body[0].length>1)throw new oe("{subarray} can contain only one column");return m},htmlBuilder:Ca,mathmlBuilder:Ta});ka({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(l){var a={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Ni(l.parser,a,Uu(l.envName));return{type:"leftright",mode:l.mode,body:[r],left:l.envName.includes("r")?".":"\\{",right:l.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Ca,mathmlBuilder:Ta});ka({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:m2,htmlBuilder:Ca,mathmlBuilder:Ta});ka({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(l){O7.has(l.envName)&&z0(l);var a={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Fu(l.envName),emptySingleRow:!0,leqno:l.parser.settings.leqno};return Ni(l.parser,a,"display")},htmlBuilder:Ca,mathmlBuilder:Ta});ka({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:m2,htmlBuilder:Ca,mathmlBuilder:Ta});ka({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(l){z0(l);var a={autoTag:Fu(l.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:l.parser.settings.leqno};return Ni(l.parser,a,"display")},htmlBuilder:Ca,mathmlBuilder:Ta});ka({type:"array",names:["CD"],props:{numArgs:0},handler(l){return z0(l),y7(l.parser)},htmlBuilder:Ca,mathmlBuilder:Ta});w("\\nonumber","\\gdef\\@eqnsw{0}");w("\\notag","\\nonumber");we({type:"text",names:["\\hline","\\hdashline"],numArgs:0,allowedInText:!0,allowedInMath:!0,handler(l,a){throw new oe(l.funcName+" valid only within array environment")}});var mf=d2;we({type:"environment",names:["\\begin","\\end"],numArgs:1,argTypes:["text"],handler(l,a){var r=l.parser,s=l.funcName,c=a[0];if(c.type!=="ordgroup")throw new oe("Invalid environment name",c);var d=qu(c,"Environment name should contain only text characters and spaces",!0);if(s==="\\begin"){if(!Object.prototype.hasOwnProperty.call(mf,d))throw new oe("No such environment: "+d,c);var m=mf[d],g=r.parseArguments("\\begin{"+d+"}",m),y=g.args,v=g.optArgs,k={mode:r.mode,envName:d,parser:r},M=m.handler(k,y,v);r.expect("\\end",!1);var N=r.nextToken,q=ot(r.parseFunction(),"environment");if(q.name!==d)throw new oe("Mismatch: \\begin{"+d+"} matched by \\end{"+q.name+"}",N);return M}return{type:"environment",mode:r.mode,name:d,nameGroup:c}}});var H7=(l,a)=>{var r=l.font,s=a.withFont(r);return wt(l.body,s)},j7=(l,a)=>{var r=l.font,s=a.withFont(r);return zt(l.body,s)},ff={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};we({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],numArgs:1,allowedInArgument:!0,handler:(l,a)=>{var r=l.parser,s=l.funcName,c=Ql(a[0]),d=s in ff?ff[s]:s;return{type:"font",mode:r.mode,font:d.slice(1),body:c}},htmlBuilder:H7,mathmlBuilder:j7});we({type:"mclass",names:["\\boldsymbol","\\bm"],numArgs:1,handler:(l,a)=>{var r=l.parser,s=a[0];return{type:"mclass",mode:r.mode,mclass:E0(s),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:s}],isCharacterBox:Ka(s)}}});we({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],numArgs:0,allowedInText:!0,handler:(l,a)=>{var r=l.parser,s=l.funcName,c=l.breakOnTokenText,d=r.mode,m=r.parseExpression(!0,c);return{type:"font",mode:d,font:"math"+s.slice(1),body:{type:"ordgroup",mode:r.mode,body:m}}}});var q7=(l,a)=>{var r=a.style,s=r.fracNum(),c=r.fracDen(),d;d=a.havingStyle(s);var m=wt(l.numer,d,a);if(l.continued){var g=8.5/a.fontMetrics().ptPerEm,y=3.5/a.fontMetrics().ptPerEm;m.height=m.height<g?g:m.height,m.depth=m.depth<y?y:m.depth}d=a.havingStyle(c);var v=wt(l.denom,d,a),k,M,N;l.hasBarLine?(l.barSize?(M=It(l.barSize,a),k=Yr("frac-line",a,M)):k=Yr("frac-line",a),M=k.height,N=k.height):(k=null,M=0,N=a.fontMetrics().defaultRuleThickness);var q,U,X;r.size===$e.DISPLAY.size?(q=a.fontMetrics().num1,M>0?U=3*N:U=7*N,X=a.fontMetrics().denom1):(M>0?(q=a.fontMetrics().num2,U=N):(q=a.fontMetrics().num3,U=3*N),X=a.fontMetrics().denom2);var K;if(k){var V=a.fontMetrics().axisHeight;q-m.depth-(V+.5*M)<U&&(q+=U-(q-m.depth-(V+.5*M))),V-.5*M-(v.height-X)<U&&(X+=U-(V-.5*M-(v.height-X)));var W=-(V-.5*M);K=xt({positionType:"individualShift",children:[{type:"elem",elem:v,shift:X},{type:"elem",elem:k,shift:W},{type:"elem",elem:m,shift:-q}]})}else{var O=q-m.depth-(v.height-X);O<U&&(q+=.5*(U-O),X+=.5*(U-O)),K=xt({positionType:"individualShift",children:[{type:"elem",elem:v,shift:X},{type:"elem",elem:m,shift:-q}]})}d=a.havingStyle(r),K.height*=d.sizeMultiplier/a.sizeMultiplier,K.depth*=d.sizeMultiplier/a.sizeMultiplier;var ce;r.size===$e.DISPLAY.size?ce=a.fontMetrics().delim1:r.size===$e.SCRIPTSCRIPT.size?ce=a.havingStyle($e.SCRIPT).fontMetrics().delim2:ce=a.fontMetrics().delim2;var re,ie;return l.leftDelim==null?re=Pl(a,["mopen"]):re=Au(l.leftDelim,ce,!0,a.havingStyle(r),l.mode,["mopen"]),l.continued?ie=se([]):l.rightDelim==null?ie=Pl(a,["mclose"]):ie=Au(l.rightDelim,ce,!0,a.havingStyle(r),l.mode,["mclose"]),se(["mord"].concat(d.sizingClasses(a)),[re,se(["mfrac"],[K]),ie],a)},I7=(l,a)=>{var r=new de("mfrac",[zt(l.numer,a),zt(l.denom,a)]);if(!l.hasBarLine)r.setAttribute("linethickness","0px");else if(l.barSize){var s=It(l.barSize,a);r.setAttribute("linethickness",fe(s))}if(l.leftDelim!=null||l.rightDelim!=null){var c=[];if(l.leftDelim!=null){var d=new de("mo",[new $t(l.leftDelim.replace("\\",""))]);d.setAttribute("fence","true"),c.push(d)}if(c.push(r),l.rightDelim!=null){var m=new de("mo",[new $t(l.rightDelim.replace("\\",""))]);m.setAttribute("fence","true"),c.push(m)}return Hu(c)}return r},f2=(l,a)=>{if(!a)return l;var r={type:"styling",mode:l.mode,style:a,body:[l]};return r};we({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],numArgs:2,allowedInArgument:!0,handler:(l,a)=>{var r=l.parser,s=l.funcName,c=a[0],d=a[1],m,g=null,y=null;switch(s){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":m=!0;break;case"\\\\atopfrac":m=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":m=!1,g="(",y=")";break;case"\\\\bracefrac":m=!1,g="\\{",y="\\}";break;case"\\\\brackfrac":m=!1,g="[",y="]";break;default:throw new Error("Unrecognized genfrac command")}var v=s==="\\cfrac",k=null;return v||s.startsWith("\\d")?k="display":s.startsWith("\\t")&&(k="text"),f2({type:"genfrac",mode:r.mode,numer:c,denom:d,continued:v,hasBarLine:m,leftDelim:g,rightDelim:y,barSize:null},k)},htmlBuilder:q7,mathmlBuilder:I7});we({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],numArgs:0,infix:!0,handler(l){var a=l.parser,r=l.funcName,s=l.token,c;switch(r){case"\\over":c="\\frac";break;case"\\choose":c="\\binom";break;case"\\atop":c="\\\\atopfrac";break;case"\\brace":c="\\\\bracefrac";break;case"\\brack":c="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:a.mode,replaceWith:c,token:s}}});var pf=["display","text","script","scriptscript"],gf=function(a){var r=null;return a.length>0&&(r=a,r=r==="."?null:r),r};we({type:"genfrac",names:["\\genfrac"],numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"],handler(l,a){var r=l.parser,s=a[4],c=a[5],d=Ql(a[0]),m=d.type==="atom"&&d.family==="open"?gf(d.text):null,g=Ql(a[1]),y=g.type==="atom"&&g.family==="close"?gf(g.text):null,v=ot(a[2],"size"),k,M=null;v.isBlank?k=!0:(M=v.value,k=M.number>0);var N=null,q=a[3];if(q.type==="ordgroup"){if(q.body.length>0){var U=ot(q.body[0],"textord");N=pf[Number(U.text)]}}else q=ot(q,"textord"),N=pf[Number(q.text)];return f2({type:"genfrac",mode:r.mode,numer:s,denom:c,continued:!1,hasBarLine:k,barSize:M,leftDelim:m,rightDelim:y},N)}});we({type:"infix",names:["\\above"],numArgs:1,argTypes:["size"],infix:!0,handler(l,a){var r=l.parser;l.funcName;var s=l.token;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:ot(a[0],"size").value,token:s}}});we({type:"genfrac",names:["\\\\abovefrac"],numArgs:3,argTypes:["math","size","math"],handler:(l,a)=>{var r=l.parser;l.funcName;var s=a[0],c=ot(a[1],"infix").size;if(!c)throw new Error("\\\\abovefrac expected size, but got "+String(c));var d=a[2],m=c.number>0;return{type:"genfrac",mode:r.mode,numer:s,denom:d,continued:!1,hasBarLine:m,barSize:c,leftDelim:null,rightDelim:null}}});var p2=(l,a)=>{var r=a.style,s,c;l.type==="supsub"?(s=l.sup?wt(l.sup,a.havingStyle(r.sup()),a):wt(l.sub,a.havingStyle(r.sub()),a),c=ot(l.base,"horizBrace")):c=ot(l,"horizBrace");var d=wt(c.base,a.havingBaseStyle($e.DISPLAY)),m=T0(c,a),g;if(c.isOver?g=xt({positionType:"firstBaseline",children:[{type:"elem",elem:d},{type:"kern",size:.1},{type:"elem",elem:m,wrapperClasses:["svg-align"]}]}):g=xt({positionType:"bottom",positionData:d.depth+.1+m.height,children:[{type:"elem",elem:m,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:d}]}),s){var y=se(["minner",c.isOver?"mover":"munder"],[g],a);c.isOver?g=xt({positionType:"firstBaseline",children:[{type:"elem",elem:y},{type:"kern",size:.2},{type:"elem",elem:s}]}):g=xt({positionType:"bottom",positionData:y.depth+.2+s.height+s.depth,children:[{type:"elem",elem:s},{type:"kern",size:.2},{type:"elem",elem:y}]})}return se(["minner",c.isOver?"mover":"munder"],[g],a)},F7=(l,a)=>{var r=C0(l.label);return new de(l.isOver?"mover":"munder",[zt(l.base,a),r])};we({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],numArgs:1,handler(l,a){var r=l.parser,s=l.funcName;return{type:"horizBrace",mode:r.mode,label:s,isOver:s.includes("\\over"),base:a[0]}},htmlBuilder:p2,mathmlBuilder:F7});we({type:"href",names:["\\href"],numArgs:2,argTypes:["url","original"],allowedInText:!0,handler:(l,a)=>{var r=l.parser,s=a[1],c=ot(a[0],"url").url;return r.settings.isTrusted({command:"\\href",url:c})?{type:"href",mode:r.mode,href:c,body:Kt(s)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(l,a)=>{var r=nn(l.body,a,!1);return _6(l.href,[],r,a)},mathmlBuilder:(l,a)=>{var r=zi(l.body,a);return r instanceof de||(r=new de("mrow",[r])),r.setAttribute("href",l.href),r}});we({type:"href",names:["\\url"],numArgs:1,argTypes:["url"],allowedInText:!0,handler:(l,a)=>{var r=l.parser,s=ot(a[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:s}))return r.formatUnsupportedCmd("\\url");for(var c=[],d=0;d<s.length;d++){var m=s[d];m==="~"&&(m="\\textasciitilde"),c.push({type:"textord",mode:"text",text:m})}var g={type:"text",mode:r.mode,font:"\\texttt",body:c};return{type:"href",mode:r.mode,href:s,body:Kt(g)}}});we({type:"hbox",names:["\\hbox"],numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0,handler(l,a){var r=l.parser;return{type:"hbox",mode:r.mode,body:Kt(a[0])}},htmlBuilder(l,a){var r=nn(l.body,a.withFont(""),!1);return Ja(r)},mathmlBuilder(l,a){return new de("mrow",Wn(l.body,a.withFont("")))}});we({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],numArgs:2,argTypes:["raw","original"],allowedInText:!0,handler:(l,a)=>{var r=l.parser,s=l.funcName;l.token;var c=ot(a[0],"raw").string,d=a[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var m,g={};switch(s){case"\\htmlClass":g.class=c,m={command:"\\htmlClass",class:c};break;case"\\htmlId":g.id=c,m={command:"\\htmlId",id:c};break;case"\\htmlStyle":g.style=c,m={command:"\\htmlStyle",style:c};break;case"\\htmlData":{for(var y="{,}",v=[],k="",M=0;M<c.length;M++)c.startsWith(y,M)?(k+=",",M+=y.length-1):c[M]===","?(v.push(k),k=""):k+=c[M];v.push(k);for(var N=0;N<v.length;N++){var q=v[N],U=q.indexOf("=");if(U<0)throw new oe("\\htmlData key/value '"+q+"' missing equals sign");var X=q.slice(0,U),K=q.slice(U+1);g["data-"+X.trim()]=K}m={command:"\\htmlData",attributes:g};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(m)?{type:"html",mode:r.mode,attributes:g,body:Kt(d)}:r.formatUnsupportedCmd(s)},htmlBuilder:(l,a)=>{var r=nn(l.body,a,!1),s=["enclosing"];l.attributes.class&&s.push(...l.attributes.class.trim().split(/\s+/));var c=se(s,r,a);for(var d of Object.entries(l.attributes)){var m=d[0],g=d[1];m!=="class"&&c.setAttribute(m,g)}return c},mathmlBuilder:(l,a)=>zi(l.body,a)});we({type:"htmlmathml",names:["\\html@mathml"],numArgs:2,allowedInArgument:!0,allowedInText:!0,handler:(l,a)=>{var r=l.parser;return{type:"htmlmathml",mode:r.mode,html:Kt(a[0]),mathml:Kt(a[1])}},htmlBuilder:(l,a)=>{var r=nn(l.html,a,!1);return Ja(r)},mathmlBuilder:(l,a)=>zi(l.mathml,a)});var su=function(a){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(a))return{number:+a,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(a);if(!r)throw new oe("Invalid size: '"+a+"' in \\includegraphics");var s={number:+(r[1]+r[2]),unit:r[3]};if(!qf(s))throw new oe("Invalid unit: '"+s.unit+"' in \\includegraphics.");return s};we({type:"includegraphics",names:["\\includegraphics"],numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1,handler:(l,a,r)=>{var s=l.parser,c={number:0,unit:"em"},d={number:.9,unit:"em"},m={number:0,unit:"em"},g="";if(r[0])for(var y=ot(r[0],"raw").string,v=y.split(","),k=0;k<v.length;k++){var M=v[k].split("=");if(M.length===2){var N=M[1].trim();switch(M[0].trim()){case"alt":g=N;break;case"width":c=su(N);break;case"height":d=su(N);break;case"totalheight":m=su(N);break;default:throw new oe("Invalid key: '"+M[0]+"' in \\includegraphics.")}}}var q=ot(a[0],"url").url;return g===""&&(g=q,g=g.replace(/^.*[\\/]/,""),g=g.substring(0,g.lastIndexOf("."))),s.settings.isTrusted({command:"\\includegraphics",url:q})?{type:"includegraphics",mode:s.mode,alt:g,width:c,height:d,totalheight:m,src:q}:s.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(l,a)=>{var r=It(l.height,a),s=0;l.totalheight.number>0&&(s=It(l.totalheight,a)-r);var c=0;l.width.number>0&&(c=It(l.width,a));var d={height:fe(r+s)};c>0&&(d.width=fe(c)),s>0&&(d.verticalAlign=fe(-s));var m=new z6(l.src,l.alt,d);return m.height=r,m.depth=s,m},mathmlBuilder:(l,a)=>{var r=new de("mglyph",[]);r.setAttribute("alt",l.alt);var s=It(l.height,a),c=0;if(l.totalheight.number>0&&(c=It(l.totalheight,a)-s,r.setAttribute("valign",fe(-c))),r.setAttribute("height",fe(s+c)),l.width.number>0){var d=It(l.width,a);r.setAttribute("width",fe(d))}return r.setAttribute("src",l.src),r}});we({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0,handler(l,a){var r=l.parser,s=l.funcName,c=ot(a[0],"size");if(r.settings.strict){var d=s[1]==="m",m=c.value.unit==="mu";d?(m||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" supports only mu units, "+("not "+c.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" works only in math mode")):m&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:c.value}},htmlBuilder(l,a){return Yf(l.dimension,a)},mathmlBuilder(l,a){var r=It(l.dimension,a);return new Zf(r)}});we({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],numArgs:1,allowedInText:!0,handler:(l,a)=>{var r=l.parser,s=l.funcName,c=a[0];return{type:"lap",mode:r.mode,alignment:s.slice(5),body:c}},htmlBuilder:(l,a)=>{var r;l.alignment==="clap"?(r=se([],[wt(l.body,a)]),r=se(["katex-inner"],[r],a)):r=se(["katex-inner"],[wt(l.body,a)]);var s=se(["katex-fix"],[]),c=se([l.alignment],[r,s],a),d=se(["katex-strut"]);return d.style.height=fe(c.height+c.depth),c.depth&&(d.style.verticalAlign=fe(-c.depth)),c.children.unshift(d),c=se(["katex-thinbox"],[c],a),se(["mord","katex-vbox"],[c],a)},mathmlBuilder:(l,a)=>{var r=new de("mpadded",[zt(l.body,a)]);if(l.alignment!=="rlap"){var s=l.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",s+"width")}return r.setAttribute("width","0px"),r}});we({type:"styling",names:["\\(","$"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(l,a){var r=l.funcName,s=l.parser,c=s.mode;s.switchMode("math");var d=r==="\\("?"\\)":"$",m=s.parseExpression(!1,d);return s.expect(d),s.switchMode(c),{type:"styling",mode:s.mode,style:"text",resetFont:!0,body:m}}});we({type:"text",names:["\\)","\\]"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(l,a){throw new oe("Mismatched "+l.funcName)}});var vf=(l,a)=>{switch(a.style.size){case $e.DISPLAY.size:return l.display;case $e.TEXT.size:return l.text;case $e.SCRIPT.size:return l.script;case $e.SCRIPTSCRIPT.size:return l.scriptscript;default:return l.text}};we({type:"mathchoice",names:["\\mathchoice"],numArgs:4,primitive:!0,handler:(l,a)=>{var r=l.parser;return{type:"mathchoice",mode:r.mode,display:Kt(a[0]),text:Kt(a[1]),script:Kt(a[2]),scriptscript:Kt(a[3])}},htmlBuilder:(l,a)=>{var r=vf(l,a),s=nn(r,a,!1);return Ja(s)},mathmlBuilder:(l,a)=>{var r=vf(l,a);return zi(r,a)}});var g2=(l,a,r,s,c,d,m)=>{l=se([],[l]);var g=r&&Ka(r),y,v;if(a){var k=wt(a,s.havingStyle(c.sup()),s);v={elem:k,kern:Math.max(s.fontMetrics().bigOpSpacing1,s.fontMetrics().bigOpSpacing3-k.depth)}}if(r){var M=wt(r,s.havingStyle(c.sub()),s);y={elem:M,kern:Math.max(s.fontMetrics().bigOpSpacing2,s.fontMetrics().bigOpSpacing4-M.height)}}var N;if(v&&y){var q=s.fontMetrics().bigOpSpacing5+y.elem.height+y.elem.depth+y.kern+l.depth+m;N=xt({positionType:"bottom",positionData:q,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:y.elem,marginLeft:fe(-d)},{type:"kern",size:y.kern},{type:"elem",elem:l},{type:"kern",size:v.kern},{type:"elem",elem:v.elem,marginLeft:fe(d)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else if(y){var U=l.height-m;N=xt({positionType:"top",positionData:U,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:y.elem,marginLeft:fe(-d)},{type:"kern",size:y.kern},{type:"elem",elem:l}]})}else if(v){var X=l.depth+m;N=xt({positionType:"bottom",positionData:X,children:[{type:"elem",elem:l},{type:"kern",size:v.kern},{type:"elem",elem:v.elem,marginLeft:fe(d)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else return l;var K=[N];if(y&&d!==0&&!g){var O=se(["mspace"],[],s);O.style.marginRight=fe(d),K.unshift(O)}return se(["mop","op-limits"],K,s)},v2=new Set(["\\smallint"]),y2=(l,a)=>{var r,s,c=!1,d;l.type==="supsub"?(r=l.sup,s=l.sub,d=ot(l.base,"op"),c=!0):d=ot(l,"op");var m=a.style,g=!1;m.size===$e.DISPLAY.size&&d.symbol&&!v2.has(d.name)&&(g=!0);var y,v;if(d.symbol){var k=g?"Size2-Regular":"Size1-Regular",M="";if((d.name==="\\oiint"||d.name==="\\oiiint")&&(M=d.name.slice(1),d.name=M==="oiint"?"\\iint":"\\iiint"),y=xn(d.name,k,"math",a,["mop","op-symbol",g?"large-op":"small-op"]),v=y.italic,M.length>0){var N=Xf(M+"Size"+(g?"2":"1"),a);y=xt({positionType:"individualShift",children:[{type:"elem",elem:y,shift:0},{type:"elem",elem:N,shift:g?.08:0}]}),d.name="\\"+M,y.classes.unshift("mop"),y.italic=v}}else if(d.body){var q=nn(d.body,a,!0);q.length===1&&q[0]instanceof Vn?(y=q[0],y.classes[0]="mop"):y=se(["mop"],q,a)}else{for(var U=[],X=1;X<d.name.length;X++)U.push(Ou(d.name[X],d.mode,a));y=se(["mop"],U,a)}var K=0,O=0;if((y instanceof Vn||d.name==="\\oiint"||d.name==="\\oiiint")&&!d.suppressBaseShift){var V;K=(y.height-y.depth)/2-a.fontMetrics().axisHeight,O=(V=y.italic)!=null?V:0}return c?g2(y,r,s,a,m,O,K):(K&&(y.style.position="relative",y.style.top=fe(K)),y)},U7=(l,a)=>{var r;if(l.symbol)r=new de("mo",[sa(l.name,l.mode)]),v2.has(l.name)&&r.setAttribute("largeop","false");else if(l.body)r=new de("mo",Wn(l.body,a));else{r=new de("mi",[new $t(l.name.slice(1))]);var s=new de("mo",[sa("⁡","text")]);l.parentIsSupSub?r=new de("mrow",[r,s]):r=Pf([r,s])}return r},_7={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};we({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],numArgs:0,handler:(l,a)=>{var r=l.parser,s=l.funcName,c=s;return c.length===1&&(c=_7[c]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:c}},htmlBuilder:y2,mathmlBuilder:U7});we({type:"op",names:["\\mathop"],numArgs:1,primitive:!0,handler:(l,a)=>{var r=l.parser,s=a[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Kt(s)}}});var G7={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};we({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],numArgs:0,handler(l){var a=l.parser,r=l.funcName;return{type:"op",mode:a.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}}});we({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],numArgs:0,handler(l){var a=l.parser,r=l.funcName;return{type:"op",mode:a.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}}});we({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],numArgs:0,allowedInArgument:!0,handler(l){var a=l.parser,r=l.funcName,s=r;return s.length===1&&(s=G7[s]),{type:"op",mode:a.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:s}}});var b2=(l,a)=>{var r,s,c=!1,d;l.type==="supsub"?(r=l.sup,s=l.sub,d=ot(l.base,"operatorname"),c=!0):d=ot(l,"operatorname");var m;if(d.body.length>0){for(var g=d.body.map(M=>{var N="text"in M?M.text:void 0;return typeof N=="string"?{type:"textord",mode:M.mode,text:N}:M}),y=nn(g,a.withFont("mathrm"),!0),v=0;v<y.length;v++){var k=y[v];k instanceof Vn&&(k.text=k.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}m=se(["mop"],y,a)}else m=se(["mop"],[],a);return c?g2(m,r,s,a,a.style,0,0):m},Y7=(l,a)=>{for(var r=Wn(l.body,a.withFont("mathrm")),s=!0,c=0;c<r.length;c++){var d=r[c];if(!(d instanceof Zf))if(d instanceof de)switch(d.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var m=d.children[0];d.children.length===1&&m instanceof $t?m.text=m.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):s=!1;break}default:s=!1}else s=!1}if(s){var g=r.map(k=>k.toText()).join("");r=[new $t(g)]}var y=new de("mi",r);y.setAttribute("mathvariant","normal");var v=new de("mo",[sa("⁡","text")]);return l.parentIsSupSub?new de("mrow",[y,v]):Pf([y,v])};we({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],numArgs:1,handler:(l,a)=>{var r=l.parser,s=l.funcName,c=a[0];return{type:"operatorname",mode:r.mode,body:Kt(c),alwaysHandleSupSub:s==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:b2,mathmlBuilder:Y7});w("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");nr({type:"ordgroup",htmlBuilder(l,a){return l.semisimple?Ja(nn(l.body,a,!1)):se(["mord"],nn(l.body,a,!0),a)},mathmlBuilder(l,a){return zi(l.body,a,!0)}});we({type:"overline",names:["\\overline"],numArgs:1,handler(l,a){var r=l.parser,s=a[0];return{type:"overline",mode:r.mode,body:s}},htmlBuilder(l,a){var r=wt(l.body,a.havingCrampedStyle()),s=Yr("overline-line",a),c=a.fontMetrics().defaultRuleThickness,d=xt({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*c},{type:"elem",elem:s},{type:"kern",size:c}]});return se(["mord","katex-overline"],[d],a)},mathmlBuilder(l,a){var r=new de("mo",[new $t("‾")]);r.setAttribute("stretchy","true");var s=new de("mover",[zt(l.body,a),r]);return s.setAttribute("accent","true"),s}});we({type:"phantom",names:["\\phantom"],numArgs:1,allowedInText:!0,handler:(l,a)=>{var r=l.parser,s=a[0];return{type:"phantom",mode:r.mode,body:Kt(s)}},htmlBuilder:(l,a)=>{var r=nn(l.body,a.withPhantom(),!1);return Ja(r)},mathmlBuilder:(l,a)=>{var r=Wn(l.body,a);return new de("mphantom",r)}});w("\\hphantom","\\smash{\\phantom{#1}}");we({type:"vphantom",names:["\\vphantom"],numArgs:1,allowedInText:!0,handler:(l,a)=>{var r=l.parser,s=a[0];return{type:"vphantom",mode:r.mode,body:s}},htmlBuilder:(l,a)=>{var r=se(["katex-inner"],[wt(l.body,a.withPhantom())]),s=se(["katex-fix"],[]);return se(["mord","rlap"],[r,s],a)},mathmlBuilder:(l,a)=>{var r=Wn(Kt(l.body),a),s=new de("mphantom",r),c=new de("mpadded",[s]);return c.setAttribute("width","0px"),c}});we({type:"raisebox",names:["\\raisebox"],numArgs:2,argTypes:["size","hbox"],allowedInText:!0,handler(l,a){var r=l.parser,s=ot(a[0],"size").value,c=a[1];return{type:"raisebox",mode:r.mode,dy:s,body:c}},htmlBuilder(l,a){var r=wt(l.body,a),s=It(l.dy,a);return xt({positionType:"shift",positionData:-s,children:[{type:"elem",elem:r}]})},mathmlBuilder(l,a){var r=new de("mpadded",[zt(l.body,a)]),s=l.dy.number+l.dy.unit;return r.setAttribute("voffset",s),r}});we({type:"internal",names:["\\relax"],numArgs:0,allowedInText:!0,allowedInArgument:!0,handler(l){var a=l.parser;return{type:"internal",mode:a.mode}}});we({type:"rule",names:["\\rule"],numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"],handler(l,a,r){var s=l.parser,c=r[0],d=ot(a[0],"size"),m=ot(a[1],"size");return{type:"rule",mode:s.mode,shift:c&&ot(c,"size").value,width:d.value,height:m.value}},htmlBuilder(l,a){var r=se(["mord","katex-rule"],[],a),s=It(l.width,a),c=It(l.height,a),d=l.shift?It(l.shift,a):0;return r.style.borderRightWidth=fe(s),r.style.borderTopWidth=fe(c),r.style.bottom=fe(d),r.width=s,r.height=c+d,r.depth=-d,r.maxFontSize=c*1.125*a.sizeMultiplier,r},mathmlBuilder(l,a){var r=It(l.width,a),s=It(l.height,a),c=l.shift?It(l.shift,a):0,d=a.color&&a.getColor()||"black",m=new de("mspace");m.setAttribute("mathbackground",d),m.setAttribute("width",fe(r)),m.setAttribute("height",fe(s));var g=new de("mpadded",[m]);return c>=0?g.setAttribute("height",fe(c)):(g.setAttribute("height",fe(c)),g.setAttribute("depth",fe(-c))),g.setAttribute("voffset",fe(c)),g}});function x2(l,a,r){for(var s=nn(l,a,!1),c=a.sizeMultiplier/r.sizeMultiplier,d=0;d<s.length;d++){var m=s[d].classes.indexOf("katex-sizing");m<0?Array.prototype.push.apply(s[d].classes,a.sizingClasses(r)):s[d].classes[m+1]==="reset-size"+a.size&&(s[d].classes[m+1]="reset-size"+r.size),s[d].height*=c,s[d].depth*=c}return Ja(s)}var yf=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],V7=(l,a)=>{var r=a.havingSize(l.size);return x2(l.body,r,a)};we({type:"sizing",names:yf,numArgs:0,allowedInText:!0,handler:(l,a)=>{var r=l.breakOnTokenText,s=l.funcName,c=l.parser,d=c.parseExpression(!1,r);return{type:"sizing",mode:c.mode,size:yf.indexOf(s)+1,body:d}},htmlBuilder:V7,mathmlBuilder:(l,a)=>{var r=a.havingSize(l.size),s=Wn(l.body,r),c=new de("mstyle",s);return c.setAttribute("mathsize",fe(r.sizeMultiplier)),c}});we({type:"smash",names:["\\smash"],numArgs:1,numOptionalArgs:1,allowedInText:!0,handler:(l,a,r)=>{var s=l.parser,c=!1,d=!1,m=r[0]&&ot(r[0],"ordgroup");if(m)for(var g,y=0;y<m.body.length;++y){var v=m.body[y];if(g=A0(v).text,g==="t")c=!0;else if(g==="b")d=!0;else{c=!1,d=!1;break}}else c=!0,d=!0;var k=a[0];return{type:"smash",mode:s.mode,body:k,smashHeight:c,smashDepth:d}},htmlBuilder:(l,a)=>{var r=se([],[wt(l.body,a)]);if(!l.smashHeight&&!l.smashDepth)return r;if(l.smashHeight&&(r.height=0),l.smashDepth&&(r.depth=0),l.smashHeight&&l.smashDepth)return se(["mord","katex-smash"],[r],a);if(r.children)for(var s=0;s<r.children.length;s++)l.smashHeight&&(r.children[s].height=0),l.smashDepth&&(r.children[s].depth=0);var c=xt({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return se(["mord"],[c],a)},mathmlBuilder:(l,a)=>{var r=new de("mpadded",[zt(l.body,a)]);return l.smashHeight&&r.setAttribute("height","0px"),l.smashDepth&&r.setAttribute("depth","0px"),r}});we({type:"sqrt",names:["\\sqrt"],numArgs:1,numOptionalArgs:1,handler(l,a,r){var s=l.parser,c=r[0],d=a[0];return{type:"sqrt",mode:s.mode,body:d,index:c}},htmlBuilder(l,a){var r=wt(l.body,a.havingCrampedStyle());r.height===0&&(r.height=a.fontMetrics().xHeight),r=Vr(r,a);var s=a.fontMetrics(),c=s.defaultRuleThickness,d=c;a.style.id<$e.TEXT.id&&(d=a.fontMetrics().xHeight);var m=c+d/4,g=r.height+r.depth+m+c,y=A7(g,a),v=y.span,k=y.ruleWidth,M=y.advanceWidth,N=v.height-k;N>r.height+r.depth+m&&(m=(m+N-r.height-r.depth)/2);var q=v.height-r.height-m-k;r.style.paddingLeft=fe(M);var U=xt({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+q)},{type:"elem",elem:v},{type:"kern",size:k}]});if(l.index){var X=a.havingStyle($e.SCRIPTSCRIPT),K=wt(l.index,X,a),O=.6*(U.height-U.depth),V=xt({positionType:"shift",positionData:-O,children:[{type:"elem",elem:K}]}),W=se(["katex-root"],[V]);return se(["mord","sqrt"],[W,U],a)}else return se(["mord","sqrt"],[U],a)},mathmlBuilder(l,a){var r=l.body,s=l.index;return s?new de("mroot",[zt(r,a),zt(s,a)]):new de("msqrt",[zt(r,a)])}});var Mu={display:$e.DISPLAY,text:$e.TEXT,script:$e.SCRIPT,scriptscript:$e.SCRIPTSCRIPT};function X7(l){return l in Mu}we({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],numArgs:0,allowedInText:!0,primitive:!0,handler(l,a){var r=l.breakOnTokenText,s=l.funcName,c=l.parser,d=c.parseExpression(!0,r),m=s.slice(1,s.length-5);if(!X7(m))throw new Error("Unknown style: "+m);return{type:"styling",mode:c.mode,style:m,body:d}},htmlBuilder(l,a){var r=Mu[l.style],s=a.havingStyle(r);return l.resetFont&&(s=s.withFont("")),x2(l.body,s,a)},mathmlBuilder(l,a){var r=Mu[l.style],s=a.havingStyle(r);l.resetFont&&(s=s.withFont(""));var c=Wn(l.body,s),d=new de("mstyle",c),m={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},g=m[l.style];return d.setAttribute("scriptlevel",g[0]),d.setAttribute("displaystyle",g[1]),d}});var W7=function(a,r){var s=a.base;if(s)if(s.type==="op"){var c=s.limits&&(r.style.size===$e.DISPLAY.size||s.alwaysHandleSupSub);return c?y2:null}else if(s.type==="operatorname"){var d=s.alwaysHandleSupSub&&(r.style.size===$e.DISPLAY.size||s.limits);return d?b2:null}else{if(s.type==="accent")return Ka(s.base)?e2:null;if(s.type==="horizBrace"){var m=!a.sub;return m===s.isOver?p2:null}else return null}else return null};nr({type:"supsub",htmlBuilder(l,a){var r=W7(l,a);if(r)return r(l,a);var s=l.base,c=l.sup,d=l.sub,m=wt(s,a),g,y,v=a.fontMetrics(),k=0,M=0,N=s&&Ka(s);if(c){var q=a.havingStyle(a.style.sup());g=wt(c,q,a),N||(k=m.height-q.fontMetrics().supDrop*q.sizeMultiplier/a.sizeMultiplier)}if(d){var U=a.havingStyle(a.style.sub());y=wt(d,U,a),N||(M=m.depth+U.fontMetrics().subDrop*U.sizeMultiplier/a.sizeMultiplier)}var X;a.style===$e.DISPLAY?X=v.sup1:a.style.cramped?X=v.sup3:X=v.sup2;var K=a.sizeMultiplier,O=fe(.5/v.ptPerEm/K),V=null;if(y){var W=l.base&&l.base.type==="op"&&l.base.name&&(l.base.name==="\\oiint"||l.base.name==="\\oiiint");if(m instanceof Vn||W){var ce;V=fe(-((ce=m.italic)!=null?ce:0))}}var re;if(g&&y){k=Math.max(k,X,g.depth+.25*v.xHeight),M=Math.max(M,v.sub2);var ie=v.defaultRuleThickness,ue=4*ie;if(k-g.depth-(y.height-M)<ue){M=ue-(k-g.depth)+y.height;var Re=.8*v.xHeight-(k-g.depth);Re>0&&(k+=Re,M-=Re)}var Oe=[{type:"elem",elem:y,shift:M,marginRight:O,marginLeft:V},{type:"elem",elem:g,shift:-k,marginRight:O}];re=xt({positionType:"individualShift",children:Oe})}else if(y){M=Math.max(M,v.sub1,y.height-.8*v.xHeight);var Be=[{type:"elem",elem:y,marginLeft:V,marginRight:O}];re=xt({positionType:"shift",positionData:M,children:Be})}else if(g)k=Math.max(k,X,g.depth+.25*v.xHeight),re=xt({positionType:"shift",positionData:-k,children:[{type:"elem",elem:g,marginRight:O}]});else throw new Error("supsub must have either sup or sub.");var Je=Su(m,"right")||"mord";return se([Je],[m,se(["msupsub"],[re])],a)},mathmlBuilder(l,a){var r=!1,s,c;l.base&&l.base.type==="horizBrace"&&(c=!!l.sup,c===l.base.isOver&&(r=!0,s=l.base.isOver)),l.base&&(l.base.type==="op"||l.base.type==="operatorname")&&(l.base.parentIsSupSub=!0);var d=[zt(l.base,a)];l.sub&&d.push(zt(l.sub,a)),l.sup&&d.push(zt(l.sup,a));var m;if(r)m=s?"mover":"munder";else if(l.sub)if(l.sup){var v=l.base;v&&v.type==="op"&&v.limits&&a.style===$e.DISPLAY||v&&v.type==="operatorname"&&v.alwaysHandleSupSub&&(a.style===$e.DISPLAY||v.limits)?m="munderover":m="msubsup"}else{var y=l.base;y&&y.type==="op"&&y.limits&&(a.style===$e.DISPLAY||y.alwaysHandleSupSub)||y&&y.type==="operatorname"&&y.alwaysHandleSupSub&&(y.limits||a.style===$e.DISPLAY)?m="munder":m="msub"}else{var g=l.base;g&&g.type==="op"&&g.limits&&(a.style===$e.DISPLAY||g.alwaysHandleSupSub)||g&&g.type==="operatorname"&&g.alwaysHandleSupSub&&(g.limits||a.style===$e.DISPLAY)?m="mover":m="msup"}return new de(m,d)}});nr({type:"atom",htmlBuilder(l,a){return Ou(l.text,l.mode,a,["m"+l.family])},mathmlBuilder(l,a){var r=new de("mo",[sa(l.text,l.mode)]);if(l.family==="bin"){var s=ju(l,a);s==="bold-italic"&&r.setAttribute("mathvariant",s)}else l.family==="punct"?r.setAttribute("separator","true"):(l.family==="open"||l.family==="close")&&r.setAttribute("stretchy","false");return r}});var w2={mi:"italic",mn:"normal",mtext:"normal"};nr({type:"mathord",htmlBuilder(l,a){return k0(l,a)},mathmlBuilder(l,a){var r=new de("mi",[sa(l.text,l.mode,a)]),s=ju(l,a)||"italic";return s!==w2[r.type]&&r.setAttribute("mathvariant",s),r}});nr({type:"textord",htmlBuilder(l,a){return k0(l,a)},mathmlBuilder(l,a){var r=sa(l.text,l.mode,a),s=ju(l,a)||"normal",c;return l.mode==="text"?c=new de("mtext",[r]):/[0-9]/.test(l.text)?c=new de("mn",[r]):l.text==="\\prime"?c=new de("mo",[r]):c=new de("mi",[r]),s!==w2[c.type]&&c.setAttribute("mathvariant",s),c}});var bf=new Map([["\\nobreak","nobreak"],["\\allowbreak","allowbreak"]]),xf=new Map([[" ",{}],["\\ ",{}],["~",{className:"nobreak"}],["\\space",{}],["\\nobreakspace",{className:"nobreak"}]]);nr({type:"spacing",htmlBuilder(l,a){var r=xf.get(l.text),s=bf.get(l.text);if(r){var c=r.className||"";if(l.mode==="text"){var d=k0(l,a);return d.classes.push(c),d}else return se(["mspace",c],[Ou(l.text,l.mode,a)],a)}else{if(s)return se(["mspace",s],[],a);throw new oe('Unknown type of space "'+l.text+'"')}},mathmlBuilder(l,a){var r;if(xf.has(l.text))r=new de("mtext",[new $t(" ")]);else{if(bf.has(l.text))return new de("mspace");throw new oe('Unknown type of space "'+l.text+'"')}return r}});var wf=()=>{var l=new de("mtd",[]);return l.setAttribute("width","50%"),l};nr({type:"tag",mathmlBuilder(l,a){var r=new de("mtable",[new de("mtr",[wf(),new de("mtd",[zi(l.body,a)]),wf(),new de("mtd",[zi(l.tag,a)])])]);return r.setAttribute("width","100%"),r}});var Sf={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},kf={"\\textbf":"textbf","\\textmd":"textmd"},Q7={"\\textit":"textit","\\textup":"textup"},Cf=(l,a)=>{var r=l.font;if(r){if(Sf[r])return a.withTextFontFamily(Sf[r]);if(kf[r])return a.withTextFontWeight(kf[r]);if(r==="\\emph")return a.fontShape==="textit"?a.withTextFontShape("textup"):a.withTextFontShape("textit")}else return a;return a.withTextFontShape(Q7[r])};we({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0,handler(l,a){var r=l.parser,s=l.funcName,c=a[0];return{type:"text",mode:r.mode,body:Kt(c),font:s}},htmlBuilder(l,a){var r=Cf(l,a),s=nn(l.body,r,!0);return se(["mord","text"],s,r)},mathmlBuilder(l,a){var r=Cf(l,a);return zi(l.body,r)}});we({type:"underline",names:["\\underline"],numArgs:1,allowedInText:!0,handler(l,a){var r=l.parser;return{type:"underline",mode:r.mode,body:a[0]}},htmlBuilder(l,a){var r=wt(l.body,a),s=Yr("underline-line",a),c=a.fontMetrics().defaultRuleThickness,d=xt({positionType:"top",positionData:r.height,children:[{type:"kern",size:c},{type:"elem",elem:s},{type:"kern",size:3*c},{type:"elem",elem:r}]});return se(["mord","katex-underline"],[d],a)},mathmlBuilder(l,a){var r=new de("mo",[new $t("‾")]);r.setAttribute("stretchy","true");var s=new de("munder",[zt(l.body,a),r]);return s.setAttribute("accentunder","true"),s}});we({type:"vcenter",names:["\\vcenter"],numArgs:1,argTypes:["original"],allowedInText:!1,handler(l,a){var r=l.parser;return{type:"vcenter",mode:r.mode,body:a[0]}},htmlBuilder(l,a){var r=wt(l.body,a),s=a.fontMetrics().axisHeight,c=.5*(r.height-s-(r.depth+s));return xt({positionType:"shift",positionData:c,children:[{type:"elem",elem:r}]})},mathmlBuilder(l,a){var r=new de("mpadded",[zt(l.body,a)],["vcenter"]);return new de("mrow",[r])}});we({type:"verb",names:["\\verb"],numArgs:0,allowedInText:!0,handler(l,a,r){throw new oe("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(l,a){for(var r=Tf(l),s=[],c=a.havingStyle(a.style.text()),d=0;d<r.length;d++){var m=r[d];m==="~"&&(m="\\textasciitilde"),s.push(xn(m,"Typewriter-Regular",l.mode,c,["mord","texttt"]))}return se(["mord","text"].concat(c.sizingClasses(a)),Gf(s),c)},mathmlBuilder(l,a){var r=new $t(Tf(l)),s=new de("mtext",[r]);return s.setAttribute("mathvariant","monospace"),s}});var Tf=l=>l.body.replace(/ /g,l.star?"␣":" "),Ai=Wf,S2=`[ \r
	]`,P7="\\\\[a-zA-Z@]+",Z7="\\\\[^\uD800-\uDFFF]",K7="("+P7+")"+S2+"*",$7=`\\\\(
|[ \r	]+
?)[ \r	]*`,Eu="[̀-ͯ]",J7=new RegExp(Eu+"+$"),e8="("+S2+"+)|"+($7+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Eu+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Eu+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+K7)+("|"+Z7+")");class Af{constructor(a,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=a,this.settings=r,this.tokenRegex=new RegExp(e8,"g"),this.catcodes={"%":14,"~":13}}setCatcode(a,r){this.catcodes[a]=r}lex(){var a=this.input,r=this.tokenRegex.lastIndex;if(r===a.length)return new Yn("EOF",new Rn(this,r,r));var s=this.tokenRegex.exec(a);if(s===null||s.index!==r)throw new oe("Unexpected character: '"+a[r]+"'",new Yn(a[r],new Rn(this,r,r+1)));var c=s[6]||s[3]||(s[2]?"\\ ":" ");if(this.catcodes[c]===14){var d=a.indexOf(`
`,this.tokenRegex.lastIndex);return d===-1?(this.tokenRegex.lastIndex=a.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=d+1,this.lex()}return new Yn(c,new Rn(this,r,this.tokenRegex.lastIndex))}}class t8{constructor(a,r){a===void 0&&(a={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=a,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new oe("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var a=this.undefStack.pop();for(var r of Object.keys(a))a[r]===void 0?delete this.current[r]:this.current[r]=a[r]}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(a){return Object.prototype.hasOwnProperty.call(this.current,a)||Object.prototype.hasOwnProperty.call(this.builtins,a)}get(a){return Object.prototype.hasOwnProperty.call(this.current,a)?this.current[a]:Object.prototype.hasOwnProperty.call(this.builtins,a)?this.builtins[a]:void 0}set(a,r,s){if(s===void 0&&(s=!1),s){for(var c=0;c<this.undefStack.length;c++)delete this.undefStack[c][a];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][a]=r)}else{var d=this.undefStack[this.undefStack.length-1];d&&!Object.prototype.hasOwnProperty.call(d,a)&&(d[a]=Object.prototype.hasOwnProperty.call(this.current,a)?this.current[a]:void 0)}r==null?delete this.current[a]:this.current[a]=r}}var n8=h2;w("\\noexpand",function(l){var a=l.popToken();return l.isExpandable(a.text)&&(a.noexpand=!0,a.treatAsRelax=!0),{tokens:[a],numArgs:0}});w("\\expandafter",function(l){var a=l.popToken();return l.expandOnce(!0),{tokens:[a],numArgs:0}});w("\\@firstoftwo",function(l){var a=l.consumeArgs(2);return{tokens:a[0],numArgs:0}});w("\\@secondoftwo",function(l){var a=l.consumeArgs(2);return{tokens:a[1],numArgs:0}});w("\\@ifnextchar",function(l){var a=l.consumeArgs(3);l.consumeSpaces();var r=l.future();return a[0].length===1&&a[0][0].text===r.text?{tokens:a[1],numArgs:0}:{tokens:a[2],numArgs:0}});w("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");w("\\TextOrMath",function(l){var a=l.consumeArgs(2);return l.mode==="text"?{tokens:a[0],numArgs:0}:{tokens:a[1],numArgs:0}});var Mf={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};w("\\char",function(l){var a=l.popToken(),r,s=0;if(a.text==="'")r=8,a=l.popToken();else if(a.text==='"')r=16,a=l.popToken();else if(a.text==="`")if(a=l.popToken(),a.text[0]==="\\")s=a.text.charCodeAt(1);else{if(a.text==="EOF")throw new oe("\\char` missing argument");s=a.text.charCodeAt(0)}else r=10;if(r){if(s=Mf[a.text],s==null||s>=r)throw new oe("Invalid base-"+r+" digit "+a.text);for(var c;(c=Mf[l.future().text])!=null&&c<r;)s*=r,s+=c,l.popToken()}return"\\@char{"+s+"}"});var _u=(l,a,r,s)=>{var c=l.consumeArg().tokens;if(c.length!==1)throw new oe("\\newcommand's first argument must be a macro name");var d=c[0].text,m=l.isDefined(d);if(m&&!a)throw new oe("\\newcommand{"+d+"} attempting to redefine "+(d+"; use \\renewcommand"));if(!m&&!r)throw new oe("\\renewcommand{"+d+"} when command "+d+" does not yet exist; use \\newcommand");var g=0;if(c=l.consumeArg().tokens,c.length===1&&c[0].text==="["){for(var y="",v=l.expandNextToken();v.text!=="]"&&v.text!=="EOF";)y+=v.text,v=l.expandNextToken();if(!y.match(/^\s*[0-9]+\s*$/))throw new oe("Invalid number of arguments: "+y);g=parseInt(y),c=l.consumeArg().tokens}return m&&s||l.macros.set(d,{tokens:c,numArgs:g}),""};w("\\newcommand",l=>_u(l,!1,!0,!1));w("\\renewcommand",l=>_u(l,!0,!1,!1));w("\\providecommand",l=>_u(l,!0,!0,!0));w("\\message",l=>{var a=l.consumeArgs(1)[0];return console.log(a.reverse().map(r=>r.text).join("")),""});w("\\errmessage",l=>{var a=l.consumeArgs(1)[0];return console.error(a.reverse().map(r=>r.text).join("")),""});w("\\show",l=>{var a=l.popToken(),r=a.text;return console.log(a,l.macros.get(r),Ai[r],Bt.math[r],Bt.text[r]),""});w("\\bgroup","{");w("\\egroup","}");w("~","\\nobreakspace");w("\\lq","`");w("\\rq","'");w("\\aa","\\r a");w("\\AA","\\r A");w("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");w("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");w("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");w("ℬ","\\mathscr{B}");w("ℰ","\\mathscr{E}");w("ℱ","\\mathscr{F}");w("ℋ","\\mathscr{H}");w("ℐ","\\mathscr{I}");w("ℒ","\\mathscr{L}");w("ℳ","\\mathscr{M}");w("ℛ","\\mathscr{R}");w("ℭ","\\mathfrak{C}");w("ℌ","\\mathfrak{H}");w("ℨ","\\mathfrak{Z}");w("\\Bbbk","\\Bbb{k}");w("\\llap","\\mathllap{\\textrm{#1}}");w("\\rlap","\\mathrlap{\\textrm{#1}}");w("\\clap","\\mathclap{\\textrm{#1}}");w("\\mathstrut","\\vphantom{(}");w("\\underbar","\\underline{\\text{#1}}");w("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');w("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");w("\\ne","\\neq");w("≠","\\neq");w("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");w("∉","\\notin");w("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");w("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");w("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");w("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");w("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");w("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");w("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");w("⟂","\\perp");w("‼","\\mathclose{!\\mkern-0.8mu!}");w("∌","\\notni");w("⌜","\\ulcorner");w("⌝","\\urcorner");w("⌞","\\llcorner");w("⌟","\\lrcorner");w("©","\\copyright");w("®","\\textregistered");w("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');w("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');w("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');w("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');w("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");w("⋮","\\vdots");w("\\varGamma","\\mathit{\\Gamma}");w("\\varDelta","\\mathit{\\Delta}");w("\\varTheta","\\mathit{\\Theta}");w("\\varLambda","\\mathit{\\Lambda}");w("\\varXi","\\mathit{\\Xi}");w("\\varPi","\\mathit{\\Pi}");w("\\varSigma","\\mathit{\\Sigma}");w("\\varUpsilon","\\mathit{\\Upsilon}");w("\\varPhi","\\mathit{\\Phi}");w("\\varPsi","\\mathit{\\Psi}");w("\\varOmega","\\mathit{\\Omega}");w("\\substack","\\begin{subarray}{c}#1\\end{subarray}");w("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");w("\\boxed","\\fbox{$\\displaystyle{#1}$}");w("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");w("\\implies","\\DOTSB\\;\\Longrightarrow\\;");w("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");w("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");w("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Ef={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},a8=new Set(["bin","rel"]);w("\\dots",function(l){var a="\\dotso",r=l.expandAfterFuture().text;return r in Ef?a=Ef[r]:(r.slice(0,4)==="\\not"||r in Bt.math&&a8.has(Bt.math[r].group))&&(a="\\dotsb"),a});var Gu={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};w("\\dotso",function(l){var a=l.future().text;return a in Gu?"\\ldots\\,":"\\ldots"});w("\\dotsc",function(l){var a=l.future().text;return a in Gu&&a!==","?"\\ldots\\,":"\\ldots"});w("\\cdots",function(l){var a=l.future().text;return a in Gu?"\\@cdots\\,":"\\@cdots"});w("\\dotsb","\\cdots");w("\\dotsm","\\cdots");w("\\dotsi","\\!\\cdots");w("\\dotsx","\\ldots\\,");w("\\DOTSI","\\relax");w("\\DOTSB","\\relax");w("\\DOTSX","\\relax");w("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");w("\\,","\\tmspace+{3mu}{.1667em}");w("\\thinspace","\\,");w("\\>","\\mskip{4mu}");w("\\:","\\tmspace+{4mu}{.2222em}");w("\\medspace","\\:");w("\\;","\\tmspace+{5mu}{.2777em}");w("\\thickspace","\\;");w("\\!","\\tmspace-{3mu}{.1667em}");w("\\negthinspace","\\!");w("\\negmedspace","\\tmspace-{4mu}{.2222em}");w("\\negthickspace","\\tmspace-{5mu}{.277em}");w("\\enspace","\\kern.5em ");w("\\enskip","\\hskip.5em\\relax");w("\\quad","\\hskip1em\\relax");w("\\qquad","\\hskip2em\\relax");w("\\tag","\\@ifstar\\tag@literal\\tag@paren");w("\\tag@paren","\\tag@literal{({#1})}");w("\\tag@literal",l=>{if(l.macros.get("\\df@tag"))throw new oe("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});w("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");w("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");w("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");w("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");w("\\newline","\\\\\\relax");w("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var k2=fe(Sa["Main-Regular"][84][1]-.7*Sa["Main-Regular"][65][1]);w("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+k2+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");w("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+k2+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");w("\\hspace","\\@ifstar\\@hspacer\\@hspace");w("\\@hspace","\\hskip #1\\relax");w("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");w("\\ordinarycolon",":");w("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");w("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');w("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');w("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');w("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');w("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');w("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');w("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');w("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');w("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');w("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');w("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');w("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');w("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');w("∷","\\dblcolon");w("∹","\\eqcolon");w("≔","\\coloneqq");w("≕","\\eqqcolon");w("⩴","\\Coloneqq");w("\\ratio","\\vcentcolon");w("\\coloncolon","\\dblcolon");w("\\colonequals","\\coloneqq");w("\\coloncolonequals","\\Coloneqq");w("\\equalscolon","\\eqqcolon");w("\\equalscoloncolon","\\Eqqcolon");w("\\colonminus","\\coloneq");w("\\coloncolonminus","\\Coloneq");w("\\minuscolon","\\eqcolon");w("\\minuscoloncolon","\\Eqcolon");w("\\coloncolonapprox","\\Colonapprox");w("\\coloncolonsim","\\Colonsim");w("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");w("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");w("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");w("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");w("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");w("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");w("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");w("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");w("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");w("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");w("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");w("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");w("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");w("\\nleqq","\\html@mathml{\\@nleqq}{≰}");w("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");w("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");w("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");w("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");w("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");w("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");w("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");w("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");w("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");w("\\imath","\\html@mathml{\\@imath}{ı}");w("\\jmath","\\html@mathml{\\@jmath}{ȷ}");w("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");w("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");w("⟦","\\llbracket");w("⟧","\\rrbracket");w("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");w("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");w("⦃","\\lBrace");w("⦄","\\rBrace");w("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");w("⦵","\\minuso");w("\\darr","\\downarrow");w("\\dArr","\\Downarrow");w("\\Darr","\\Downarrow");w("\\lang","\\langle");w("\\rang","\\rangle");w("\\uarr","\\uparrow");w("\\uArr","\\Uparrow");w("\\Uarr","\\Uparrow");w("\\N","\\mathbb{N}");w("\\R","\\mathbb{R}");w("\\Z","\\mathbb{Z}");w("\\alef","\\aleph");w("\\alefsym","\\aleph");w("\\Alpha","\\mathrm{A}");w("\\Beta","\\mathrm{B}");w("\\bull","\\bullet");w("\\Chi","\\mathrm{X}");w("\\clubs","\\clubsuit");w("\\cnums","\\mathbb{C}");w("\\Complex","\\mathbb{C}");w("\\Dagger","\\ddagger");w("\\diamonds","\\diamondsuit");w("\\empty","\\emptyset");w("\\Epsilon","\\mathrm{E}");w("\\Eta","\\mathrm{H}");w("\\exist","\\exists");w("\\harr","\\leftrightarrow");w("\\hArr","\\Leftrightarrow");w("\\Harr","\\Leftrightarrow");w("\\hearts","\\heartsuit");w("\\image","\\Im");w("\\infin","\\infty");w("\\Iota","\\mathrm{I}");w("\\isin","\\in");w("\\Kappa","\\mathrm{K}");w("\\larr","\\leftarrow");w("\\lArr","\\Leftarrow");w("\\Larr","\\Leftarrow");w("\\lrarr","\\leftrightarrow");w("\\lrArr","\\Leftrightarrow");w("\\Lrarr","\\Leftrightarrow");w("\\Mu","\\mathrm{M}");w("\\natnums","\\mathbb{N}");w("\\Nu","\\mathrm{N}");w("\\Omicron","\\mathrm{O}");w("\\plusmn","\\pm");w("\\rarr","\\rightarrow");w("\\rArr","\\Rightarrow");w("\\Rarr","\\Rightarrow");w("\\real","\\Re");w("\\reals","\\mathbb{R}");w("\\Reals","\\mathbb{R}");w("\\Rho","\\mathrm{P}");w("\\sdot","\\cdot");w("\\sect","\\S");w("\\spades","\\spadesuit");w("\\sub","\\subset");w("\\sube","\\subseteq");w("\\supe","\\supseteq");w("\\Tau","\\mathrm{T}");w("\\thetasym","\\vartheta");w("\\weierp","\\wp");w("\\Zeta","\\mathrm{Z}");w("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");w("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");w("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");w("\\bra","\\mathinner{\\langle{#1}|}");w("\\ket","\\mathinner{|{#1}\\rangle}");w("\\braket","\\mathinner{\\langle{#1}\\rangle}");w("\\Bra","\\left\\langle#1\\right|");w("\\Ket","\\left|#1\\right\\rangle");var C2=l=>a=>{var r=a.consumeArg().tokens,s=a.consumeArg().tokens,c=a.consumeArg().tokens,d=a.consumeArg().tokens,m=a.macros.get("|"),g=a.macros.get("\\|");a.macros.beginGroup();var y=M=>N=>{l&&(N.macros.set("|",m),c.length&&N.macros.set("\\|",g));var q=M;if(!M&&c.length){var U=N.future();U.text==="|"&&(N.popToken(),q=!0)}return{tokens:q?c:s,numArgs:0}};a.macros.set("|",y(!1)),c.length&&a.macros.set("\\|",y(!0));var v=a.consumeArg().tokens,k=a.expandTokens([...d,...v,...r]);return a.macros.endGroup(),{tokens:k.reverse(),numArgs:0}};w("\\bra@ket",C2(!1));w("\\bra@set",C2(!0));w("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");w("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");w("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");w("\\angln","{\\angl n}");w("\\blue","\\textcolor{##6495ed}{#1}");w("\\orange","\\textcolor{##ffa500}{#1}");w("\\pink","\\textcolor{##ff00af}{#1}");w("\\red","\\textcolor{##df0030}{#1}");w("\\green","\\textcolor{##28ae7b}{#1}");w("\\gray","\\textcolor{gray}{#1}");w("\\purple","\\textcolor{##9d38bd}{#1}");w("\\blueA","\\textcolor{##ccfaff}{#1}");w("\\blueB","\\textcolor{##80f6ff}{#1}");w("\\blueC","\\textcolor{##63d9ea}{#1}");w("\\blueD","\\textcolor{##11accd}{#1}");w("\\blueE","\\textcolor{##0c7f99}{#1}");w("\\tealA","\\textcolor{##94fff5}{#1}");w("\\tealB","\\textcolor{##26edd5}{#1}");w("\\tealC","\\textcolor{##01d1c1}{#1}");w("\\tealD","\\textcolor{##01a995}{#1}");w("\\tealE","\\textcolor{##208170}{#1}");w("\\greenA","\\textcolor{##b6ffb0}{#1}");w("\\greenB","\\textcolor{##8af281}{#1}");w("\\greenC","\\textcolor{##74cf70}{#1}");w("\\greenD","\\textcolor{##1fab54}{#1}");w("\\greenE","\\textcolor{##0d923f}{#1}");w("\\goldA","\\textcolor{##ffd0a9}{#1}");w("\\goldB","\\textcolor{##ffbb71}{#1}");w("\\goldC","\\textcolor{##ff9c39}{#1}");w("\\goldD","\\textcolor{##e07d10}{#1}");w("\\goldE","\\textcolor{##a75a05}{#1}");w("\\redA","\\textcolor{##fca9a9}{#1}");w("\\redB","\\textcolor{##ff8482}{#1}");w("\\redC","\\textcolor{##f9685d}{#1}");w("\\redD","\\textcolor{##e84d39}{#1}");w("\\redE","\\textcolor{##bc2612}{#1}");w("\\maroonA","\\textcolor{##ffbde0}{#1}");w("\\maroonB","\\textcolor{##ff92c6}{#1}");w("\\maroonC","\\textcolor{##ed5fa6}{#1}");w("\\maroonD","\\textcolor{##ca337c}{#1}");w("\\maroonE","\\textcolor{##9e034e}{#1}");w("\\purpleA","\\textcolor{##ddd7ff}{#1}");w("\\purpleB","\\textcolor{##c6b9fc}{#1}");w("\\purpleC","\\textcolor{##aa87ff}{#1}");w("\\purpleD","\\textcolor{##7854ab}{#1}");w("\\purpleE","\\textcolor{##543b78}{#1}");w("\\mintA","\\textcolor{##f5f9e8}{#1}");w("\\mintB","\\textcolor{##edf2df}{#1}");w("\\mintC","\\textcolor{##e0e5cc}{#1}");w("\\grayA","\\textcolor{##f6f7f7}{#1}");w("\\grayB","\\textcolor{##f0f1f2}{#1}");w("\\grayC","\\textcolor{##e3e5e6}{#1}");w("\\grayD","\\textcolor{##d6d8da}{#1}");w("\\grayE","\\textcolor{##babec2}{#1}");w("\\grayF","\\textcolor{##888d93}{#1}");w("\\grayG","\\textcolor{##626569}{#1}");w("\\grayH","\\textcolor{##3b3e40}{#1}");w("\\grayI","\\textcolor{##21242c}{#1}");w("\\kaBlue","\\textcolor{##314453}{#1}");w("\\kaGreen","\\textcolor{##71B307}{#1}");var T2={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class i8{constructor(a,r,s){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(a),this.macros=new t8(n8,r.macros),this.mode=s,this.stack=[]}feed(a){this.lexer=new Af(a,this.settings)}switchMode(a){this.mode=a}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(a){this.stack.push(a)}pushTokens(a){this.stack.push(...a)}scanArgument(a){var r,s,c;if(a){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken();var d=this.consumeArg(["]"]);c=d.tokens,s=d.end}else{var m=this.consumeArg();c=m.tokens,r=m.start,s=m.end}return this.pushToken(new Yn("EOF",s.loc)),this.pushTokens(c),new Yn("",Rn.range(r,s))}consumeSpaces(){for(;;){var a=this.future();if(a.text===" ")this.stack.pop();else break}}consumeArg(a){var r=[],s=a&&a.length>0;s||this.consumeSpaces();var c=this.future(),d,m=0,g=0;do{if(d=this.popToken(),r.push(d),d.text==="{")++m;else if(d.text==="}"){if(--m,m===-1)throw new oe("Extra }",d)}else if(d.text==="EOF")throw new oe("Unexpected end of input in a macro argument, expected '"+(a&&s?a[g]:"}")+"'",d);if(a&&s)if((m===0||m===1&&a[g]==="{")&&d.text===a[g]){if(++g,g===a.length){r.splice(-g,g);break}}else g=0}while(m!==0||s);return c.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:c,end:d}}consumeArgs(a,r){if(r){if(r.length!==a+1)throw new oe("The length of delimiters doesn't match the number of args!");for(var s=r[0],c=0;c<s.length;c++){var d=this.popToken();if(s[c]!==d.text)throw new oe("Use of the macro doesn't match its definition",d)}}for(var m=[],g=0;g<a;g++)m.push(this.consumeArg(r&&r[g+1]).tokens);return m}countExpansion(a){if(this.expansionCount+=a,this.expansionCount>this.settings.maxExpand)throw new oe("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(a){var r=this.popToken(),s=r.text,c=r.noexpand?null:this._getExpansion(s);if(c==null||a&&c.unexpandable){if(a&&c==null&&s[0]==="\\"&&!this.isDefined(s))throw new oe("Undefined control sequence: "+s);return this.pushToken(r),!1}this.countExpansion(1);var d=c.tokens,m=this.consumeArgs(c.numArgs,c.delimiters);if(c.numArgs){d=d.slice();for(var g=d.length-1;g>=0;--g){var y=d[g];if(y.text==="#"){if(g===0)throw new oe("Incomplete placeholder at end of macro body",y);if(y=d[--g],y.text==="#")d.splice(g+1,1);else if(/^[1-9]$/.test(y.text))d.splice(g,2,...m[+y.text-1]);else throw new oe("Not a valid argument number",y)}}}return this.pushTokens(d),d.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var a=this.stack.pop();return a.treatAsRelax&&(a.text="\\relax"),a}}expandMacro(a){return this.macros.has(a)?this.expandTokens([new Yn(a)]):void 0}expandTokens(a){var r=[],s=this.stack.length;for(this.pushTokens(a);this.stack.length>s;)if(this.expandOnce(!0)===!1){var c=this.stack.pop();c.treatAsRelax&&(c.noexpand=!1,c.treatAsRelax=!1),r.push(c)}return this.countExpansion(r.length),r}expandMacroAsText(a){var r=this.expandMacro(a);return r&&r.map(s=>s.text).join("")}_getExpansion(a){var r=this.macros.get(a);if(r==null)return r;if(a.length===1){var s=this.lexer.catcodes[a];if(s!=null&&s!==13)return}var c=typeof r=="function"?r(this):r;if(typeof c=="string"){var d=0;if(c.includes("#"))for(var m=c.replace(/##/g,"");m.includes("#"+(d+1));)++d;for(var g=new Af(c,this.settings),y=[],v=g.lex();v.text!=="EOF";)y.push(v),v=g.lex();y.reverse();var k={tokens:y,numArgs:d};return k}return c}isDefined(a){return this.macros.has(a)||Object.prototype.hasOwnProperty.call(Ai,a)||Object.prototype.hasOwnProperty.call(Bt.math,a)||Object.prototype.hasOwnProperty.call(Bt.text,a)||Object.prototype.hasOwnProperty.call(T2,a)}isExpandable(a){var r=this.macros.get(a);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Object.prototype.hasOwnProperty.call(Ai,a)&&!Ai[a].primitive}}var Df=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,p0=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),ou={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},zf={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class N0{constructor(a,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new i8(a,r,this.mode),this.settings=r,this.leftrightDepth=0,this.nextToken=null}expect(a,r){if(r===void 0&&(r=!0),this.fetch().text!==a)throw new oe("Expected '"+a+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(a){this.mode=a,this.gullet.switchMode(a)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var a=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),a}finally{this.gullet.endGroups()}}subparse(a){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Yn("}")),this.gullet.pushTokens(a);var s=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,s}parseExpression(a,r){for(var s=[];;){this.mode==="math"&&this.consumeSpaces();var c=this.fetch();if(N0.endOfExpression.has(c.text)||r&&c.text===r||a&&Ai[c.text]&&Ai[c.text].infix)break;var d=this.parseAtom(r);if(d){if(d.type==="internal")continue}else break;s.push(d)}return this.mode==="text"&&this.formLigatures(s),this.handleInfixNodes(s)}handleInfixNodes(a){for(var r=-1,s,c=0;c<a.length;c++){var d=a[c];if(d.type==="infix"){if(r!==-1)throw new oe("only one infix operator per group",d.token);r=c,s=d.replaceWith}}if(r!==-1&&s){var m,g,y=a.slice(0,r),v=a.slice(r+1);y.length===1&&y[0].type==="ordgroup"?m=y[0]:m={type:"ordgroup",mode:this.mode,body:y},v.length===1&&v[0].type==="ordgroup"?g=v[0]:g={type:"ordgroup",mode:this.mode,body:v};var k;return s==="\\\\abovefrac"?k=this.callFunction(s,[m,a[r],g],[]):k=this.callFunction(s,[m,g],[]),[k]}else return a}handleSupSubscript(a){var r=this.fetch(),s=r.text;this.consume(),this.consumeSpaces();var c;do{var d;c=this.parseGroup(a)}while(((d=c)==null?void 0:d.type)==="internal");if(!c)throw new oe("Expected group after '"+s+"'",r);return c}formatUnsupportedCmd(a){for(var r=[],s=0;s<a.length;s++)r.push({type:"textord",mode:"text",text:a[s]});var c={type:"text",mode:this.mode,body:r},d={type:"color",mode:this.mode,color:this.settings.errorColor,body:[c]};return d}parseAtom(a){var r=this.parseGroup("atom",a);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var s,c;;){this.consumeSpaces();var d=this.fetch();if(d.text==="\\limits"||d.text==="\\nolimits"){if(r&&r.type==="op")r.limits=d.text==="\\limits",r.alwaysHandleSupSub=!0;else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=d.text==="\\limits");else throw new oe("Limit controls must follow a math operator",d);this.consume()}else if(d.text==="^"){if(s)throw new oe("Double superscript",d);s=this.handleSupSubscript("superscript")}else if(d.text==="_"){if(c)throw new oe("Double subscript",d);c=this.handleSupSubscript("subscript")}else if(d.text==="'"){if(s)throw new oe("Double superscript",d);var m={type:"textord",mode:this.mode,text:"\\prime"},g=[m];for(this.consume();this.fetch().text==="'";)g.push(m),this.consume();this.fetch().text==="^"&&g.push(this.handleSupSubscript("superscript")),s={type:"ordgroup",mode:this.mode,body:g}}else if(p0[d.text]){var y=Df.test(d.text),v=[];for(v.push(new Yn(p0[d.text])),this.consume();;){var k=this.fetch().text;if(!p0[k]||Df.test(k)!==y)break;v.unshift(new Yn(p0[k])),this.consume()}var M=this.subparse(v);y?c={type:"ordgroup",mode:"math",body:M}:s={type:"ordgroup",mode:"math",body:M}}else break}return s&&c?{type:"supsub",mode:this.mode,base:r,sup:s,sub:c}:s?{type:"supsub",mode:this.mode,base:r,sup:s}:c?{type:"supsub",mode:this.mode,base:r,sub:c}:r}parseFunction(a,r){var s=this.fetch(),c=s.text,d=Ai[c];if(!d)return null;if(this.consume(),r&&r!=="atom"&&!d.allowedInArgument)throw new oe("Got function '"+c+"' with no arguments"+(r?" as "+r:""),s);if(this.mode==="text"&&!d.allowedInText)throw new oe("Can't use function '"+c+"' in text mode",s);if(this.mode==="math"&&d.allowedInMath===!1)throw new oe("Can't use function '"+c+"' in math mode",s);var m=this.parseArguments(c,d),g=m.args,y=m.optArgs;return this.callFunction(c,g,y,s,a)}callFunction(a,r,s,c,d){var m={funcName:a,parser:this,token:c,breakOnTokenText:d},g=Ai[a];if(g&&g.handler)return g.handler(m,r,s);throw new oe("No function handler for "+a)}parseArguments(a,r){var s,c=(s=r.numOptionalArgs)!=null?s:0,d=r.numArgs+c;if(d===0)return{args:[],optArgs:[]};for(var m=[],g=[],y=0;y<d;y++){var v,k=(v=r.argTypes)==null?void 0:v[y],M=y<c;("primitive"in r&&r.primitive&&k==null||r.type==="sqrt"&&y===1&&g[0]==null)&&(k="primitive");var N=this.parseGroupOfType("argument to '"+a+"'",k,M);if(M)g.push(N);else if(N!=null)m.push(N);else throw new oe("Null argument, please report this as a bug")}return{args:m,optArgs:g}}parseGroupOfType(a,r,s){switch(r){case"color":return this.parseColorGroup(s);case"size":return this.parseSizeGroup(s);case"url":return this.parseUrlGroup(s);case"math":case"text":return this.parseArgumentGroup(s,r);case"hbox":{var c=this.parseArgumentGroup(s,"text");return c!=null?{type:"styling",mode:c.mode,body:[c],style:"text",resetFont:!0}:null}case"raw":{var d=this.parseStringGroup(s);return d!=null?{type:"raw",mode:"text",string:d.text}:null}case"primitive":{if(s)throw new oe("A primitive argument cannot be optional");var m=this.parseGroup(a);if(m==null)throw new oe("Expected group as "+a,this.fetch());return m}case"original":case void 0:return this.parseArgumentGroup(s);default:throw new oe("Unknown group type as "+a,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(a){var r=this.gullet.scanArgument(a);if(r==null)return null;for(var s="",c;(c=this.fetch()).text!=="EOF";)s+=c.text,this.consume();return this.consume(),r.text=s,r}parseRegexGroup(a,r){for(var s=this.fetch(),c=s,d="",m;(m=this.fetch()).text!=="EOF"&&a.test(d+m.text);)c=m,d+=c.text,this.consume();if(d==="")throw new oe("Invalid "+r+": '"+s.text+"'",s);return s.range(c,d)}parseColorGroup(a){var r=this.parseStringGroup(a);if(r==null)return null;var s=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!s)throw new oe("Invalid color: '"+r.text+"'",r);var c=s[0];return/^[0-9a-f]{6}$/i.test(c)&&(c="#"+c),{type:"color-token",mode:this.mode,color:c}}parseSizeGroup(a){var r,s=!1;if(this.gullet.consumeSpaces(),!a&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup(a),!r)return null;!a&&r.text.length===0&&(r.text="0pt",s=!0);var c=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!c)throw new oe("Invalid size: '"+r.text+"'",r);var d={number:+(c[1]+c[2]),unit:c[3]};if(!qf(d))throw new oe("Invalid unit: '"+d.unit+"'",r);return{type:"size",mode:this.mode,value:d,isBlank:s}}parseUrlGroup(a){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup(a);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var s=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:s}}parseArgumentGroup(a,r){var s=this.gullet.scanArgument(a);if(s==null)return null;var c=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var d=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var m={type:"ordgroup",mode:this.mode,loc:s.loc,body:d};return r&&this.switchMode(c),m}parseGroup(a,r){var s=this.fetch(),c=s.text,d;if(c==="{"||c==="\\begingroup"){this.consume();var m=c==="{"?"}":"\\endgroup";this.gullet.beginGroup();var g=this.parseExpression(!1,m),y=this.fetch();this.expect(m),this.gullet.endGroup(),d={type:"ordgroup",mode:this.mode,loc:Rn.range(s,y),body:g,semisimple:c==="\\begingroup"||void 0}}else if(d=this.parseFunction(r,a)||this.parseSymbol(),d==null&&c[0]==="\\"&&!Object.prototype.hasOwnProperty.call(T2,c)){if(this.settings.throwOnError)throw new oe("Undefined control sequence: "+c,s);d=this.formatUnsupportedCmd(c),this.consume()}return d}formLigatures(a){for(var r=a.length-1,s=0;s<r;++s){var c=a[s];if(c.type==="textord"){var d=c.text,m=a[s+1];if(!(!m||m.type!=="textord")){if(d==="-"&&m.text==="-"){var g=a[s+2];s+1<r&&g&&g.type==="textord"&&g.text==="-"?(a.splice(s,3,{type:"textord",mode:"text",loc:Rn.range(c,g),text:"---"}),r-=2):(a.splice(s,2,{type:"textord",mode:"text",loc:Rn.range(c,m),text:"--"}),r-=1)}(d==="'"||d==="`")&&m.text===d&&(a.splice(s,2,{type:"textord",mode:"text",loc:Rn.range(c,m),text:d+d}),r-=1)}}}}parseSymbol(){var a=this.fetch(),r=a.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var s=r.slice(5),c=s.charAt(0)==="*";if(c&&(s=s.slice(1)),s.length<2||s.charAt(0)!==s.slice(-1))throw new oe(`\\verb assertion failed --
                    please report what input caused this bug`);return s=s.slice(1,-1),{type:"verb",mode:"text",body:s,star:c}}Object.prototype.hasOwnProperty.call(zf,r[0])&&!Bt[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',a),r=zf[r[0]]+r.slice(1));var d=J7.exec(r);d&&(r=r.substring(0,d.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var m;if(Bt[this.mode][r]){this.settings.strict&&this.mode==="math"&&fu.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',a);var g=Bt[this.mode][r].group,y=Rn.range(a),v;u7(g)?v={type:"atom",mode:this.mode,family:g,loc:y,text:r}:v={type:g,mode:this.mode,loc:y,text:r},m=v}else if(r.charCodeAt(0)>=128)this.settings.strict&&(jf(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',a):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),a)),m={type:"textord",mode:"text",loc:Rn.range(a),text:r};else return null;if(this.consume(),d)for(var k=0;k<d[0].length;k++){var M=d[0][k];if(!ou[M])throw new oe("Unknown accent ' "+M+"'",a);var N=ou[M][this.mode]||ou[M].text;if(!N)throw new oe("Accent "+M+" unsupported in "+this.mode+" mode",a);m={type:"accent",mode:this.mode,loc:Rn.range(a),label:N,isStretchy:!1,isShifty:!0,base:m}}return m}}N0.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Yu=function(a,r){if(!(typeof a=="string"||a instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var s=new N0(a,r);delete s.gullet.macros.current["\\df@tag"];var c=s.parse();if(delete s.gullet.macros.current["\\current@color"],delete s.gullet.macros.current["\\color"],s.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new oe("\\tag works only in display equations");c=[{type:"tag",mode:"text",body:c,tag:s.subparse([new Yn("\\df@tag")])}]}return c},A2=function(a,r,s){r.textContent="";var c=Vu(a,s).toNode();r.appendChild(c)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),A2=function(){throw new oe("KaTeX doesn't work in quirks mode.")});var r8=function(a,r){var s=Vu(a,r).toMarkup();return s},l8=function(a,r){var s=new zu(r);return Yu(a,s)},M2=function(a,r,s){if(s.throwOnError||!(a instanceof oe))throw a;var c=se(["katex-error"],[new Vn(r)]);return c.setAttribute("title",a.toString()),c.setAttribute("style","color:"+s.errorColor),c},Vu=function(a,r){var s=new zu(r);try{var c=Yu(a,s);return e7(c,a,s)}catch(d){return M2(d,a,s)}},s8=function(a,r){var s=new zu(r);try{var c=Yu(a,s);return t7(c,a,s)}catch(d){return M2(d,a,s)}},o8="0.18.6",c8={Span:Wr,Anchor:w0,SymbolNode:Vn,SvgNode:Za,PathNode:Ei,LineNode:mu},y0={version:o8,render:A2,renderToString:r8,ParseError:oe,SETTINGS_SCHEMA:uu,__parse:l8,__renderToDomTree:Vu,__renderToHTMLTree:s8,__setFontMetrics:B6,__defineSymbol:h,__defineFunction:we,__defineMacro:w,__domTree:c8};function dn(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}const u8=new Set(["import","export","default","from","as","const","let","var","function","class","interface","type","enum","extends","implements","public","private","protected","readonly","static","override","async","await","return","yield","new","this","super","if","else","switch","case","break","continue","for","while","do","in","of","try","catch","finally","throw","typeof","instanceof","void","delete","debugger"]),d8=new Set(["string","number","boolean","any","unknown","never","void","null","undefined","symbol","bigint","object","Record","Array","Promise","Partial","Omit","Pick","Required","Readonly","Extract","Exclude","NonNullable","Parameters","ReturnType","InstanceType","React","ReactNode","FC","Component","useState","useEffect","useMemo","useCallback","useRef","Extension","ExtensionManifest","FlintApp"]),h8=new Set(["select","from","where","insert","into","values","update","set","delete","create","table","drop","alter","add","column","primary","key","foreign","references","index","unique","distinct","join","left","right","inner","outer","on","group","by","order","having","limit","offset","and","or","not","in","is","null","like","as"]);function m8(l,a="typescript"){const r=(a||"typescript").toLowerCase().trim(),s=/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|#(?![\w-]|[\da-fA-F]{3,8})[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|<\/?[A-Za-z0-9_.-]+|\/?=>|===|!==|==|!=|<=|>=|\+\+|--|\&\&|\|\||[a-zA-Z_$][a-zA-Z0-9_$]*|\b\d+(?:\.\d+)?\b|[^\s\w]|\s+)/g;let c="",d;for(;(d=s.exec(l))!==null;){const m=d[0];if(m.startsWith("//")||m.startsWith("/*")||m.startsWith("#")&&(r==="shell"||r==="bash"||r==="sh"||r==="yaml"||r==="yml")){c+=`<span class="text-[#8b949e] italic">${dn(m)}</span>`;continue}if(m.startsWith('"')&&m.endsWith('"')||m.startsWith("'")&&m.endsWith("'")||m.startsWith("`")&&m.endsWith("`")){const g=l.slice(s.lastIndex);if(/^\s*:/.test(g)){c+=`<span class="text-[#79c0ff]">${dn(m)}</span>`;continue}c+=`<span class="text-[#7ee787]">${dn(m)}</span>`;continue}if(/^\d+(?:\.\d+)?$/.test(m)){c+=`<span class="text-[#ffa657]">${dn(m)}</span>`;continue}if(m==="true"||m==="false"){c+=`<span class="text-[#ff7b72] font-semibold">${dn(m)}</span>`;continue}if(m==="null"||m==="undefined"){c+=`<span class="text-[#ff7b72]">${dn(m)}</span>`;continue}if(m.startsWith("<")&&!m.startsWith("<=")&&!m.startsWith("<<")){const g=m.startsWith("</"),y=g?m.slice(2):m.slice(1);if(/^[A-Za-z]/.test(y)){c+=`&lt;${g?"/":""}<span class="text-[#7ee787]">${dn(y)}</span>`;continue}}if(m==="/>"||m===">"){c+=`<span class="text-[#8b949e]">${dn(m)}</span>`;continue}if(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(m)){const g=m.toLowerCase();if(r==="sql"&&h8.has(g)){c+=`<span class="text-[#ff7b72] font-semibold">${dn(m.toUpperCase())}</span>`;continue}if(u8.has(m)){c+=`<span class="text-[#ff7b72] font-medium">${dn(m)}</span>`;continue}if(d8.has(m)||/^[A-Z][a-zA-Z0-9_$]*$/.test(m)){c+=`<span class="text-[#e5c07b] font-normal">${dn(m)}</span>`;continue}const v=l.slice(s.lastIndex).match(/^\s*([^\s])/);if(v&&v[1]==="("){c+=`<span class="text-[#79c0ff]">${dn(m)}</span>`;continue}if(v&&v[1]===":"&&!l.slice(0,d.index).trim().endsWith("?")){c+=`<span class="text-[#79c0ff]">${dn(m)}</span>`;continue}c+=`<span class="text-[#e6edf3]">${dn(m)}</span>`;continue}if(m==="=>"||m==="==="||m==="!=="||m==="&&"||m==="||"){c+=`<span class="text-[#ff7b72]">${dn(m)}</span>`;continue}c+=dn(m)}return c}const f8=()=>{const[l,a]=le.useState(0),[r,s]=le.useState("md"),[c,d]=le.useState(!1),m={sm:"px-2.5 py-1 text-xs",md:"px-3.5 py-1.5 text-[13px]",lg:"px-4.5 py-2 text-sm"};return C.jsxs("div",{className:"my-4 rounded-xl border border-[#363636] bg-[#161616] overflow-hidden select-none",children:[C.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 border-b border-[#2d2d2d] bg-[#1a1a1a]/80 text-xs",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-[#888888] font-medium",children:"Size:"}),["sm","md","lg"].map(g=>C.jsx("button",{type:"button",onClick:()=>s(g),className:`px-2 py-0.5 rounded cursor-pointer uppercase text-[11px] font-mono ${r===g?"bg-[#ea580c] text-white font-semibold":"bg-[#252525] text-[#a0a0a0] hover:text-white hover:bg-[#303030]"}`,children:g},g))]}),C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer text-[#a0a0a0] hover:text-white",children:[C.jsx("input",{type:"checkbox",checked:c,onChange:g=>d(g.target.checked),className:"accent-[#ea580c] cursor-pointer rounded"}),C.jsx("span",{children:"Disabled"})]}),C.jsxs("span",{className:"text-[#777777] font-mono",children:["Clicks: ",l]})]})]}),C.jsxs("div",{className:"p-6 flex flex-wrap items-center justify-center gap-3 bg-[#141414]",children:[C.jsx("button",{type:"button",disabled:c,onClick:()=>a(g=>g+1),className:`rounded-md font-medium cursor-pointer ${m[r]} ${c?"bg-[#ea580c]/40 text-white/50 cursor-not-allowed":"bg-[#ea580c] hover:bg-[#f97316] text-white active:scale-[0.98]"}`,children:"Primary Action"}),C.jsx("button",{type:"button",disabled:c,onClick:()=>a(g=>g+1),className:`rounded-md font-medium cursor-pointer border ${m[r]} ${c?"bg-[#202020]/40 border-[#303030] text-[#666666] cursor-not-allowed":"bg-[#222222] hover:bg-[#2b2b2b] border-[#363636] text-[#dadada] hover:text-white"}`,children:"Secondary"}),C.jsx("button",{type:"button",disabled:c,onClick:()=>a(g=>g+1),className:`rounded-md font-medium cursor-pointer border ${m[r]} ${c?"bg-rose-950/20 border-rose-900/30 text-rose-800 cursor-not-allowed":"bg-rose-950/40 hover:bg-rose-900/60 border-rose-800/60 text-rose-300 hover:text-rose-100"}`,children:"Danger"}),C.jsx("button",{type:"button",disabled:c,onClick:()=>a(g=>g+1),className:`rounded-md font-medium cursor-pointer ${m[r]} ${c?"text-[#555555] cursor-not-allowed":"hover:bg-[#222222] text-[#999999] hover:text-[#dadada]"}`,children:"Ghost"}),C.jsx("button",{type:"button",disabled:c,onClick:()=>a(g=>g+1),className:`font-medium cursor-pointer underline underline-offset-2 ${m[r]} ${c?"text-[#555555] cursor-not-allowed no-underline":"text-[#ea580c] hover:text-[#f97316]"}`,children:"Link"})]})]})},p8=()=>{const[l,a]=le.useState("My Knowledge Base"),[r,s]=le.useState(!1),[c,d]=le.useState(!0);return C.jsxs("div",{className:"my-4 rounded-xl border border-[#363636] bg-[#161616] overflow-hidden select-none",children:[C.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 border-b border-[#2d2d2d] bg-[#1a1a1a]/80 text-xs",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer text-[#a0a0a0] hover:text-white",children:[C.jsx("input",{type:"checkbox",checked:r,onChange:m=>s(m.target.checked),className:"accent-[#ea580c] cursor-pointer rounded"}),C.jsx("span",{children:"Error state"})]}),C.jsxs("label",{className:"flex items-center gap-1.5 cursor-pointer text-[#a0a0a0] hover:text-white",children:[C.jsx("input",{type:"checkbox",checked:c,onChange:m=>d(m.target.checked),className:"accent-[#ea580c] cursor-pointer rounded"}),C.jsx("span",{children:"Shortcut badge"})]})]}),C.jsxs("span",{className:"text-[#777777] font-mono text-[11px]",children:["Length: ",l.length," chars"]})]}),C.jsxs("div",{className:"p-6 flex flex-col items-center justify-center gap-2 bg-[#141414]",children:[C.jsxs("div",{className:"relative w-full max-w-md",children:[C.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-[#777777] pointer-events-none",children:C.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[C.jsx("circle",{cx:"11",cy:"11",r:"8"}),C.jsx("path",{d:"m21 21-4.35-4.35"})]})}),C.jsx("input",{type:"text",value:l,onChange:m=>a(m.target.value),placeholder:"Search notes or commands...",className:`w-full h-9 pl-9 pr-20 bg-[#1c1c1c] rounded-md text-[13.5px] text-[#dadada] placeholder-[#666666] outline-none border ${r?"border-rose-500/80 focus:border-rose-500":"border-[#363636] focus:border-[#ea580c]"}`}),C.jsxs("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5",children:[l&&C.jsx("button",{type:"button",onClick:()=>a(""),className:"w-4 h-4 flex items-center justify-center rounded-full bg-[#2a2a2a] hover:bg-[#383838] text-[#888888] hover:text-white text-[10px] cursor-pointer",title:"Clear text",children:"✕"}),c&&C.jsx("kbd",{className:"px-1.5 py-0.5 rounded bg-[#262626] border border-[#383838] text-[10px] font-mono text-[#888888] select-none",children:"Ctrl+F"})]})]}),r&&C.jsx("span",{className:"text-xs text-rose-400 self-start max-w-md mx-auto",children:"Please enter a valid vault identifier."})]})]})},g8=()=>{const[l,a]=le.useState(!0),[r,s]=le.useState(!1),[c,d]=le.useState(!0);return C.jsxs("div",{className:"my-4 rounded-xl border border-[#363636] bg-[#161616] overflow-hidden select-none",children:[C.jsx("div",{className:"px-4 py-2.5 border-b border-[#2d2d2d] bg-[#1a1a1a]/80 text-xs text-[#888888]",children:"Interactive Toggle Switch Primitives"}),C.jsxs("div",{className:"p-5 flex flex-col gap-3 bg-[#141414] max-w-lg mx-auto",children:[C.jsxs("div",{className:"flex items-center justify-between gap-4 p-2.5 rounded-lg bg-[#1a1a1a] border border-[#2b2b2b]",children:[C.jsxs("div",{className:"flex flex-col",children:[C.jsx("span",{className:"text-[13.5px] font-medium text-[#dadada]",children:"Disk Auto-Sync"}),C.jsx("span",{className:"text-xs text-[#777777]",children:"Debounced 150ms write stream to local markdown files"})]}),C.jsx("button",{type:"button",role:"switch","aria-checked":l,onClick:()=>a(m=>!m),className:`relative w-10 h-5.5 rounded-full cursor-pointer p-0.5 border ${l?"bg-[#ea580c] border-[#ea580c]":"bg-[#262626] border-[#383838]"}`,children:C.jsx("span",{className:`block w-4 h-4 rounded-full bg-white shadow-sm ${l?"translate-x-[18px]":"translate-x-0"}`})})]}),C.jsxs("div",{className:"flex items-center justify-between gap-4 p-2.5 rounded-lg bg-[#1a1a1a] border border-[#2b2b2b]",children:[C.jsxs("div",{className:"flex flex-col",children:[C.jsx("span",{className:"text-[13.5px] font-medium text-[#dadada]",children:"Vim Keybindings"}),C.jsx("span",{className:"text-xs text-[#777777]",children:"Modal editing in TipTap/ProseMirror editor buffers"})]}),C.jsx("button",{type:"button",role:"switch","aria-checked":r,onClick:()=>s(m=>!m),className:`relative w-10 h-5.5 rounded-full cursor-pointer p-0.5 border ${r?"bg-[#ea580c] border-[#ea580c]":"bg-[#262626] border-[#383838]"}`,children:C.jsx("span",{className:`block w-4 h-4 rounded-full bg-white shadow-sm ${r?"translate-x-[18px]":"translate-x-0"}`})})]}),C.jsxs("div",{className:"flex items-center justify-between gap-4 p-2.5 rounded-lg bg-[#1a1a1a] border border-[#2b2b2b]",children:[C.jsxs("div",{className:"flex flex-col",children:[C.jsx("span",{className:"text-[13.5px] font-medium text-[#dadada]",children:"Model Context Protocol (MCP)"}),C.jsx("span",{className:"text-xs text-[#777777]",children:"Expose safe relational SQLite query tools to AI agents"})]}),C.jsx("button",{type:"button",role:"switch","aria-checked":c,onClick:()=>d(m=>!m),className:`relative w-10 h-5.5 rounded-full cursor-pointer p-0.5 border ${c?"bg-[#ea580c] border-[#ea580c]":"bg-[#262626] border-[#383838]"}`,children:C.jsx("span",{className:`block w-4 h-4 rounded-full bg-white shadow-sm ${c?"translate-x-[18px]":"translate-x-0"}`})})]})]})]})},v8=()=>{const[l,a]=le.useState("flint-dark");return C.jsxs("div",{className:"my-4 rounded-xl border border-[#363636] bg-[#161616] overflow-hidden select-none",children:[C.jsxs("div",{className:"px-4 py-2.5 border-b border-[#2d2d2d] bg-[#1a1a1a]/80 text-xs text-[#888888] flex justify-between items-center",children:[C.jsx("span",{children:"Select Dropdown Primitive"}),C.jsxs("span",{className:"font-mono text-[#ea580c]",children:["Selected: ",l]})]}),C.jsx("div",{className:"p-6 flex flex-col items-center justify-center gap-3 bg-[#141414]",children:C.jsxs("div",{className:"w-full max-w-sm",children:[C.jsx("label",{className:"block text-xs font-medium text-[#999999] mb-1.5",children:"Active Workspace Theme"}),C.jsxs("div",{className:"relative",children:[C.jsxs("select",{value:l,onChange:r=>a(r.target.value),className:"w-full h-9 pl-3 pr-8 rounded-md bg-[#1c1c1c] border border-[#363636] text-[13.5px] text-[#dadada] outline-none focus:border-[#ea580c] cursor-pointer appearance-none",children:[C.jsx("option",{value:"flint-dark",children:"Flint Dark (Default Charcoal)"}),C.jsx("option",{value:"obsidian-nord",children:"Nordic Frost"}),C.jsx("option",{value:"monokai-pro",children:"Monokai Pro Synth"}),C.jsx("option",{value:"paper-light",children:"Warm Paper Light"})]}),C.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#777777]",children:C.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:C.jsx("path",{d:"m6 9 6 6 6-6"})})})]})]})})]})},y8=()=>{const[l,a]=le.useState(15),[r,s]=le.useState(1.75);return C.jsxs("div",{className:"my-4 rounded-xl border border-[#363636] bg-[#161616] overflow-hidden select-none",children:[C.jsx("div",{className:"px-4 py-2.5 border-b border-[#2d2d2d] bg-[#1a1a1a]/80 text-xs text-[#888888]",children:"Numeric Range Slider Primitive"}),C.jsxs("div",{className:"p-6 flex flex-col gap-5 bg-[#141414] max-w-md mx-auto",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center justify-between text-xs mb-1.5",children:[C.jsx("span",{className:"font-medium text-[#dadada]",children:"Editor Font Size"}),C.jsxs("span",{className:"font-mono text-[#ea580c]",children:[l,"px"]})]}),C.jsx("input",{type:"range",min:"12",max:"24",step:"1",value:l,onChange:c=>a(Number(c.target.value)),className:"w-full h-1.5 bg-[#252525] rounded-lg appearance-none cursor-pointer accent-[#ea580c]"})]}),C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center justify-between text-xs mb-1.5",children:[C.jsx("span",{className:"font-medium text-[#dadada]",children:"Line Height Multiplier"}),C.jsx("span",{className:"font-mono text-[#ea580c]",children:r.toFixed(2)})]}),C.jsx("input",{type:"range",min:"1.2",max:"2.4",step:"0.05",value:r,onChange:c=>s(Number(c.target.value)),className:"w-full h-1.5 bg-[#252525] rounded-lg appearance-none cursor-pointer accent-[#ea580c]"})]}),C.jsx("div",{className:"p-3 rounded-md bg-[#1c1c1c] border border-[#2c2c2c] text-[#b8b8b8]",style:{fontSize:`${l}px`,lineHeight:r},children:"Flint is engineered for deep focus and long-term data durability."})]})]})},Nf=()=>{const[l,a]=le.useState("sk-ant-api03-flint..."),[r,s]=le.useState(!0),[c,d]=le.useState(2048),[m,g]=le.useState(null),y=()=>{g("Settings saved successfully to .flint/settings.json"),setTimeout(()=>g(null),2500)};return C.jsxs("div",{className:"my-4 rounded-xl border border-[#363636] bg-[#161616] overflow-hidden select-none",children:[C.jsxs("div",{className:"px-4 py-2.5 border-b border-[#2d2d2d] bg-[#1a1a1a]/80 text-xs flex justify-between items-center",children:[C.jsx("span",{className:"text-[#888888] font-medium",children:"SettingCard & SettingItem Composition"}),C.jsx("span",{className:"text-[11px] font-mono text-[#777777]",children:"SettingBuilder API"})]}),C.jsx("div",{className:"p-6 bg-[#141414]",children:C.jsxs("div",{className:"max-w-xl mx-auto rounded-lg border border-[#303030] bg-[#181818] overflow-hidden shadow-lg",children:[C.jsxs("div",{className:"px-5 py-3.5 border-b border-[#282828] bg-[#1f1f1f]/50",children:[C.jsx("h4",{className:"text-sm font-semibold text-white",children:"AI Copilot & Model Context Protocol"}),C.jsx("p",{className:"text-xs text-[#888888] mt-0.5",children:"Configure local LLM endpoints and tool call execution policies."})]}),C.jsxs("div",{className:"divide-y divide-[#262626]",children:[C.jsxs("div",{className:"p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[C.jsxs("div",{className:"flex flex-col",children:[C.jsx("span",{className:"text-[13.5px] font-medium text-[#dadada]",children:"API Authentication Key"}),C.jsx("span",{className:"text-xs text-[#777777]",children:"Used to query LLM embeddings for vector indexing"})]}),C.jsx("input",{type:"password",value:l,onChange:v=>a(v.target.value),className:"h-8 px-2.5 rounded bg-[#131313] border border-[#333333] text-xs text-[#dadada] outline-none focus:border-[#ea580c] w-full sm:w-48 font-mono"})]}),C.jsxs("div",{className:"p-4 flex items-center justify-between gap-3",children:[C.jsxs("div",{className:"flex flex-col",children:[C.jsx("span",{className:"text-[13.5px] font-medium text-[#dadada]",children:"Stream Token Generation"}),C.jsx("span",{className:"text-xs text-[#777777]",children:"Render text tokens incrementally in the active buffer"})]}),C.jsx("button",{type:"button",role:"switch","aria-checked":r,onClick:()=>s(v=>!v),className:`relative w-9 h-5 rounded-full cursor-pointer p-0.5 border ${r?"bg-[#ea580c] border-[#ea580c]":"bg-[#262626] border-[#383838]"}`,children:C.jsx("span",{className:`block w-3.5 h-3.5 rounded-full bg-white shadow-sm ${r?"translate-x-[16px]":"translate-x-0"}`})})]}),C.jsxs("div",{className:"p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[C.jsxs("div",{className:"flex flex-col",children:[C.jsx("span",{className:"text-[13.5px] font-medium text-[#dadada]",children:"Max Context Window"}),C.jsx("span",{className:"text-xs text-[#777777]",children:"Maximum response tokens allowed per tool query"})]}),C.jsxs("div",{className:"flex items-center gap-2.5 w-full sm:w-48",children:[C.jsx("input",{type:"range",min:"512",max:"8192",step:"256",value:c,onChange:v=>d(Number(v.target.value)),className:"w-full h-1.5 bg-[#252525] rounded-lg appearance-none cursor-pointer accent-[#ea580c]"}),C.jsx("span",{className:"text-xs font-mono text-[#ea580c] w-12 text-right",children:c})]})]})]}),C.jsxs("div",{className:"px-5 py-3 border-t border-[#282828] bg-[#1c1c1c]/60 flex items-center justify-between",children:[m?C.jsx("span",{className:"text-xs text-emerald-400",children:m}):C.jsx("span",{className:"text-xs text-[#666666]",children:"Local configuration stored in Hearth metadata"}),C.jsx("button",{type:"button",onClick:y,className:"px-3 py-1.5 rounded bg-[#ea580c] hover:bg-[#f97316] text-white text-xs font-medium cursor-pointer",children:"Apply Changes"})]})]})})]})},b8={button:f8,textinput:p8,toggle:g8,select:v8,slider:y8,settingbuilder:Nf,settingcard:Nf};function xa(l){return l.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/^-+|-+$/g,"")}function x8(l){if(!l)return[];const a=l.replace(/\r\n/g,`
`).split(`
`),r=[];let s=!1;for(const c of a){if(c.trim().startsWith("```")){s=!s;continue}if(s)continue;const d=c.match(/^(#{2,3})\s+(.+)$/);if(d){const m=d[1].length,g=d[2].trim(),y=g.replace(/[`'"]/g,"").trim();if(/\.(json|ts|tsx|js|jsx|css|md|yaml|yml|toml|sql|sh|html)$/i.test(y)||/^(manifest|package|tsconfig|build|styles|theme|src\/)/i.test(y))continue;const k=g.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,(N,q,U)=>U||q).replace(/`([^`]+)`/g,"$1").replace(new RegExp("(?<!\\\\)\\$([^\\$\\r\\n]+?)(?<!\\\\)\\$","g"),"$1").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1"),M=xa(k);r.push({id:M,text:k,level:m})}}return r}function w8(l,a){const r=[],s=g=>{for(const y of g)!y.isFolder&&y.content&&r.push(y),y.children&&s(y.children)};s(a);const c=new Set;if(c.add(l.title.toLowerCase()),c.add(l.id.toLowerCase()),l.slug&&c.add(l.slug.toLowerCase()),l.aliases)for(const g of l.aliases)c.add(g.toLowerCase());const d=/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g,m=[];for(const g of r){if(g.id===l.id||g.slug===l.slug)continue;const y=g.content||"";let v,k=!1;for(;(v=d.exec(y))!==null;){const M=v[1].split("#")[0].trim().toLowerCase();if(c.has(M)){k=!0;break}}k&&m.push(g)}return m}function Gn(l){const a=[],r=m=>`CODE_${m}`;let s=l.replace(/(`+)([\s\S]*?)\1/g,(m,g,y)=>{let v=y;v.length>=2&&v.startsWith(" ")&&v.endsWith(" ")&&v.trim().length>0&&(v=v.slice(1,-1));const M=`<code class="px-1.5 py-0.5 rounded text-[0.875em] font-mono bg-[#1f1f1f] text-[#dadada] border border-[#363636]">${v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code>`,N=r(a.length);return a.push(M),N});const c=[],d=m=>`MATH_${m}`;s=s.replace(new RegExp("(?<!\\\\)\\$(?!\\s)([^\\$\\r\\n]+?)(?<!\\s)(?<!\\\\)\\$","g"),(m,g)=>{const y=g.trim();if(!y)return m;try{const v=y0.renderToString(y,{displayMode:!1,throwOnError:!1}),k=d(c.length);return c.push(v),k}catch{return m}}),s=s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&lt;br\s*\/?&gt;/gi,"<br />"),s=s.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g,'<a href="#docs/$1" data-wikilink="$1" class="internal-link text-[#ea580c] hover:text-[#f97316] underline underline-offset-2 font-normal cursor-pointer">$2</a>').replace(/\[\[([^\]]+)\]\]/g,'<a href="#docs/$1" data-wikilink="$1" class="internal-link text-[#ea580c] hover:text-[#f97316] underline underline-offset-2 font-normal cursor-pointer">$1</a>'),s=s.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noreferrer" class="text-[#ea580c] hover:text-[#f97316] underline underline-offset-2 font-normal">$1</a>'),s=s.replace(/==([^=]+)==/g,'<mark class="px-1.5 py-0.5 rounded bg-[#ea580c]/20 text-[#f97316] font-medium border border-[#ea580c]/30">$1</mark>'),s=s.replace(/\*\*([^*]+)\*\*/g,'<strong class="font-bold text-white">$1</strong>').replace(/__([^_]+)__/g,'<strong class="font-bold text-white">$1</strong>'),s=s.replace(/\*([^*]+)\*/g,'<em class="italic text-[#b3b3b3]">$1</em>').replace(new RegExp("(?<!\\w)_([^_]+)_(?!\\w)","g"),'<em class="italic text-[#b3b3b3]">$1</em>'),s=s.replace(/~~([^~]+)~~/g,'<del class="line-through text-[#888]">$1</del>');for(let m=0;m<c.length;m++)s=s.replace(d(m),()=>c[m]);for(let m=0;m<a.length;m++)s=s.replace(r(m),()=>a[m]);return s}const E2=tr.memo(({doc:l,allDocs:a,onSelectDoc:r})=>{const[s,c]=le.useState(null),[d,m]=le.useState(null),g=le.useRef(null),y=le.useMemo(()=>{const K=[],O=V=>{V.forEach(W=>{(!W.isFolder||W.content&&W.content.trim().length>0)&&K.push(W),W.children&&O(W.children)})};return O(a),K},[a]),v=y.findIndex(K=>K.id===l.id||K.slug===l.slug),k=v>0?y[v-1]:null,M=v>=0&&v<y.length-1?y[v+1]:null,N=K=>K.toLowerCase().replace(/[^a-z0-9]/g,""),q=le.useCallback(K=>{const O=K.split("#")[0].replace(/&amp;/g,"&").trim();if(!O)return null;const V=O.toLowerCase(),W=N(O);for(const re of y){if(re.id.toLowerCase()===V||re.title.toLowerCase()===V||re.slug&&re.slug.toLowerCase()===V)return re;if(re.aliases){for(const ie of re.aliases)if(ie.toLowerCase()===V)return re}}for(const re of y){if(N(re.id)===W||N(re.title)===W||re.slug&&N(re.slug)===W)return re;if(re.aliases){for(const ie of re.aliases)if(N(ie)===W)return re}}for(const re of y){const ie=N(re.title),ue=N(re.id);if(ie.includes(W)||W.includes(ie)||ue.includes(W)||W.includes(ue))return re}const ce=re=>{for(const ie of re){if(ie.id.toLowerCase()===V||ie.title.toLowerCase()===V||ie.slug&&ie.slug.toLowerCase()===V||N(ie.title)===W||ie.aliases&&ie.aliases.some(ue=>N(ue)===W||ue.toLowerCase()===V)){if(ie.content&&ie.content.trim().length>0)return ie;if(ie.children&&ie.children.length>0){const ue=ie.children.find(Re=>Re.content&&Re.content.trim().length>0);if(ue)return ue}}if(ie.children){const ue=ce(ie.children);if(ue)return ue}}return null};return ce(a)},[y,a]),U=le.useCallback(K=>{const O=K.target.closest("a.internal-link");if(O){K.preventDefault();const V=O.getAttribute("data-wikilink");if(V){const[W,ce]=V.split("#"),re=q(W);re?(r(re),ce&&setTimeout(()=>{const ie=document.getElementById(xa(ce));ie&&ie.scrollIntoView({behavior:"smooth"})},80)):window.location.hash=`#docs/${xa(W)}${ce?"#"+xa(ce):""}`}}},[q,r]),X=le.useMemo(()=>{const O=(l.content||"").replace(/\r\n/g,`
`).split(`
`),V=[];let W=!1,ce="",re=[],ie=0,ue=!1,Re=[],Oe=!1,Be=[],Je=!1,Ve=[],ft=!1,et=[],lt=[],B=!1;const ne=S=>{if(lt.length>0){const te=lt[0].type==="ordered"?"ol":"ul";V.push(C.jsx(te,{className:"my-2 pl-6 space-y-1 text-[#dadada] text-[16px] leading-[1.75]",children:lt.map((P,xe)=>{const ke=P.indent>0?{paddingLeft:`${P.indent*24}px`}:void 0;return P.type==="task"?C.jsxs("li",{style:ke,className:"flex items-start gap-2 list-none mb-1",children:[C.jsx("label",{className:"flex items-center justify-center h-[1.75em] shrink-0 select-none",children:C.jsx("input",{type:"checkbox",checked:P.checked,readOnly:!0,className:"w-[14px] h-[14px] cursor-default accent-[#ea580c] rounded"})}),C.jsx("span",{className:`flex-1 ${P.checked?"line-through text-[#666666]":""}`,dangerouslySetInnerHTML:{__html:Gn(P.text)}})]},xe):P.type==="ordered"?C.jsxs("li",{style:ke,className:"flex items-start gap-2 list-none",children:[C.jsx("span",{className:"text-[#888888] font-normal text-[14px] shrink-0 min-w-[20px]",children:P.marker}),C.jsx("span",{className:"flex-1",dangerouslySetInnerHTML:{__html:Gn(P.text)}})]},xe):C.jsxs("li",{style:ke,className:"flex items-start gap-2 list-none",children:[C.jsx("span",{className:"text-[#888888] shrink-0 select-none text-[13px] pt-1 leading-none",children:"•"}),C.jsx("span",{className:"flex-1",dangerouslySetInnerHTML:{__html:Gn(P.text)}})]},xe)})},`list-${S}`)),lt=[]}},ee=S=>{if(Re.length>0){const L=Re.map(te=>te.split(new RegExp("(?<!\\\\)\\|")).map(P=>P.trim().replace(/\\\|/g,"|")).filter((P,xe,ke)=>xe>0&&xe<ke.length-1||P!==""));if(L.length>=1){let te=-1;const P=[];for(let Ze=0;Ze<L.length;Ze++)if(L[Ze].length>0&&L[Ze].every(Ae=>/^:?-+:?$/.test(Ae.trim()))){te=Ze,L[Ze].forEach(Ae=>{const _=Ae.trim(),I=_.startsWith(":"),G=_.endsWith(":");I&&G?P.push("center"):G?P.push("right"):P.push("left")});break}const xe=te>=0?L.filter((Ze,Qe)=>Qe!==te):L,ke=te>0?te:1,Ee=Math.max(...xe.map(Ze=>Ze.length),P.length,1),Ie=xe.map((Ze,Qe)=>{const Ae=Qe<ke,_=[];for(let I=0;I<Ee;I++){const G=Ze[I]??"";_.push({content:G,colSpan:1,rowSpan:1,align:P[I]||"left",isMerged:!1,isHeader:Ae})}return _});for(let Ze=0;Ze<Ie.length;Ze++)for(let Qe=0;Qe<Ee;Qe++){const Ae=Ie[Ze][Qe];if(Ae.isMerged)continue;let _=Ae.content;const I=_.match(/\[(?:colspan|cols?)=(\d+)\]|\{(?:colspan|cols?)=(\d+)\}/i);I&&(Ae.colSpan=parseInt(I[1]||I[2],10),_=_.replace(I[0],"").trim());const G=_.match(/\[(?:rowspan|rows?)=(\d+)\]|\{(?:rowspan|rows?)=(\d+)\}/i);G&&(Ae.rowSpan=parseInt(G[1]||G[2],10),_=_.replace(G[0],"").trim());const ge=_.match(/\[align=(left|center|right)\]|\{align=(left|center|right)\}/i);if(ge&&(Ae.align=(ge[1]||ge[2]).toLowerCase(),_=_.replace(ge[0],"").trim()),Ae.content=_,_===">"||_==="||"){Ae.isMerged=!0;for(let he=Qe-1;he>=0;he--)if(!Ie[Ze][he].isMerged){Ie[Ze][he].colSpan+=1;break}continue}if(_==="^"){Ae.isMerged=!0;for(let he=Ze-1;he>=0;he--)if(!Ie[he][Qe].isMerged){Ie[he][Qe].rowSpan+=1;break}continue}if(Ae.colSpan>1){for(let he=1;he<Ae.colSpan&&Qe+he<Ee;he++)Ie[Ze][Qe+he].isMerged=!0;!ge&&Ae.isHeader&&(Ae.align="center")}if(Ae.rowSpan>1)for(let he=1;he<Ae.rowSpan&&Ze+he<Ie.length;he++)Ie[Ze+he][Qe].isMerged=!0}const Fe=Ie.filter((Ze,Qe)=>Qe<ke),an=Ie.filter((Ze,Qe)=>Qe>=ke);V.push(C.jsx("div",{className:"my-4 overflow-x-auto rounded-lg border border-[#2e2e2e] bg-[#161616]",children:C.jsxs("table",{className:"w-full text-left text-[13.5px] leading-[1.5] border-collapse",children:[Fe.length>0&&C.jsx("thead",{children:Fe.map((Ze,Qe)=>C.jsx("tr",{className:"bg-[#1c1c1c] text-[#dadada] font-semibold border-b border-[#2e2e2e]",children:Ze.map((Ae,_)=>{if(Ae.isMerged)return null;const I=Ae.align==="center"?"text-center":Ae.align==="right"?"text-right":"text-left",G=Ae.colSpan>1;return C.jsx("th",{colSpan:Ae.colSpan>1?Ae.colSpan:void 0,rowSpan:Ae.rowSpan>1?Ae.rowSpan:void 0,className:`px-3.5 py-2.5 border-r border-[#2e2e2e] last:border-r-0 ${I} ${G?"table-header-merged":""}`,dangerouslySetInnerHTML:{__html:Gn(Ae.content)}},`th-${Qe}-${_}`)})},`th-row-${Qe}`))}),C.jsx("tbody",{children:an.map((Ze,Qe)=>C.jsx("tr",{className:"border-b border-[#242424] last:border-b-0 hover:bg-[#1a1a1a]",children:Ze.map((Ae,_)=>{if(Ae.isMerged)return null;const I=Ae.align==="center"?"text-center":Ae.align==="right"?"text-right":"text-left",G=Ae.colSpan===Ee;return C.jsx("td",{colSpan:Ae.colSpan>1?Ae.colSpan:void 0,rowSpan:Ae.rowSpan>1?Ae.rowSpan:void 0,className:`px-3.5 py-2.5 border-r border-[#242424] last:border-r-0 text-[#dadada] ${I} ${G?"bg-[#1e1e1e] font-semibold text-[#f0f0f0]":""}`,dangerouslySetInnerHTML:{__html:Gn(Ae.content)}},`td-${Qe}-${_}`)})},`tb-row-${Qe}`))})]})},`table-${S}`))}Re=[],ue=!1}},Te=S=>{if(Be.length>0){const te=Be.join(`
`).replace(/<(t[hd])([^>]*)>([\s\S]*?)<\/\1>/gi,(P,xe,ke,Ee)=>{const Ie=Gn(Ee.trim());return`<${xe}${ke}>${Ie}</${xe}>`});V.push(C.jsx("div",{className:"my-4 overflow-x-auto rounded-lg border border-[#2e2e2e] bg-[#161616]",dangerouslySetInnerHTML:{__html:te.replace(/<table(?:\s+[^>]*)?>/i,'<table class="w-full text-left text-[13.5px] leading-[1.5] border-collapse">').replace(/<thead(?:\s+[^>]*)?>/gi,'<thead class="bg-[#1c1c1c] text-[#dadada] font-semibold border-b border-[#2e2e2e]">').replace(/<tbody(?:\s+[^>]*)?>/gi,"<tbody>").replace(/<tr(?:\s+[^>]*)?>/gi,'<tr class="border-b border-[#242424] last:border-b-0 hover:bg-[#1a1a1a]">').replace(/<th(?:\s+([^>]*))?>/gi,'<th class="px-3.5 py-2.5 border-r border-[#2e2e2e] last:border-r-0 font-semibold" $1>').replace(/<td(?:\s+([^>]*))?>/gi,'<td class="px-3.5 py-2.5 border-r border-[#242424] last:border-r-0 text-[#dadada]" $1>')}},`html-table-${S}`)),Be=[],Oe=!1}},Se=S=>{var L;if(Ve.length>0){const te=Ve.map(ke=>{const Ee=ke.trim().match(/^>\s?(.*)$/);return Ee?Ee[1]:ke.trim()}),xe=te[0].trim().match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|QUOTE)\](?:\s*(.*))?$/i);if(xe){const ke=xe[1].toUpperCase(),Ee=((L=xe[2])==null?void 0:L.trim())||"",Ie={NOTE:{border:"border-blue-500/50",bg:"bg-blue-500/10",text:"text-blue-400",icon:P3},TIP:{border:"border-emerald-500/50",bg:"bg-emerald-500/10",text:"text-emerald-400",icon:Z3},IMPORTANT:{border:"border-purple-500/50",bg:"bg-purple-500/10",text:"text-purple-400",icon:V3},WARNING:{border:"border-amber-500/50",bg:"bg-amber-500/10",text:"text-amber-400",icon:X3},CAUTION:{border:"border-rose-500/50",bg:"bg-rose-500/10",text:"text-rose-400",icon:K3},QUOTE:{border:"border-[#555555]",bg:"bg-[#1e1e1e]/90",text:"text-[#aaaaaa]",icon:$3}},Fe=Ie[ke]||Ie.NOTE,an=Fe.icon,Ze=te.slice(1);let Qe=[];if(Ze.length===0&&Ee)Qe=[Ee];else{let Ae=[];for(const _ of Ze){const I=_.trim();I?I.startsWith("- ")||I.startsWith("* ")?(Ae.length>0&&(Qe.push(Ae.join(" ")),Ae=[]),Qe.push(I)):Ae.push(I):Ae.length>0&&(Qe.push(Ae.join(" ")),Ae=[])}Ae.length>0&&Qe.push(Ae.join(" "))}V.push(C.jsxs("div",{className:`my-3 p-3.5 border-l-[3px] ${Fe.border} ${Fe.bg} rounded-r-md text-[14px]`,children:[C.jsxs("div",{className:`font-semibold ${Fe.text} flex items-center gap-1.5 uppercase tracking-wide text-xs ${Qe.length>0?"mb-1.5":""}`,children:[C.jsx(an,{size:14,className:"shrink-0"}),C.jsx("span",{children:ke}),Ee&&Ze.length>0&&C.jsxs("span",{className:"text-white/90 normal-case font-medium ml-1",children:["• ",Ee]})]}),Qe.length>0&&C.jsx("div",{className:"text-[#dadada] leading-[1.7] space-y-2",children:Qe.map((Ae,_)=>Ae.startsWith("- ")||Ae.startsWith("* ")?C.jsxs("div",{className:"flex items-start gap-2 pl-1",children:[C.jsx("span",{className:"text-[#888888] select-none",children:"•"}),C.jsx("span",{dangerouslySetInnerHTML:{__html:Gn(Ae.slice(2))}})]},_):C.jsx("p",{dangerouslySetInnerHTML:{__html:Gn(Ae)}},_))})]},`callout-${S}`))}else{let ke=[],Ee=[];for(const Ie of te){const Fe=Ie.trim();Fe?Fe.startsWith("- ")||Fe.startsWith("* ")?(Ee.length>0&&(ke.push(Ee.join(" ")),Ee=[]),ke.push(Fe)):Ee.push(Fe):Ee.length>0&&(ke.push(Ee.join(" ")),Ee=[])}Ee.length>0&&ke.push(Ee.join(" ")),V.push(C.jsx("blockquote",{className:"my-3 pl-4 border-l-[3px] border-[#383838] text-[#a0a0a0] text-[15px] italic leading-[1.75] space-y-2",children:ke.map((Ie,Fe)=>Ie.startsWith("- ")||Ie.startsWith("* ")?C.jsxs("div",{className:"flex items-start gap-2 not-italic pl-1",children:[C.jsx("span",{className:"text-[#888888] select-none",children:"•"}),C.jsx("span",{dangerouslySetInnerHTML:{__html:Gn(Ie.slice(2))}})]},Fe):C.jsx("p",{dangerouslySetInnerHTML:{__html:Gn(Ie)}},Fe))},`quote-${S}`))}Ve=[],Je=!1,B=!1}};for(let S=0;S<O.length;S++){const L=O[S],te=L.trim().match(/^:::preview\s+([a-zA-Z0-9_-]+)/i)||L.trim().match(/^<!--\s*preview:\s*([a-zA-Z0-9_-]+)\s*-->/i);if(te&&!W){ne(S),ee(S),Se(S);const I=te[1].toLowerCase().replace(/[^a-z0-9]/g,""),G=b8[I];G&&V.push(C.jsx(G,{},`preview-${S}-${I}`)),B=!1;continue}if(L.trim().startsWith("```")){if(W){const I=re.join(`
`),G=S,ge=s===G,he=/^(diagram|text|txt|plain|flow|preview|ui)$/i.test(ce),Ce=he?"font-sans text-[14px]":"font-mono text-[13.5px]";V.push(C.jsxs("div",{className:"relative group my-3 rounded-lg overflow-hidden border border-[#2e2e2e] bg-[#191919]",children:[C.jsx("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(I),c(G),setTimeout(()=>c(null),1500)},className:`absolute top-2.5 right-2.5 z-10 w-7 h-7 flex items-center justify-center rounded-md bg-[#252525]/90 hover:bg-[#333333] text-[#888888] hover:text-white border border-[#383838]/80 cursor-pointer ${ge?"opacity-100":"opacity-0 group-hover:opacity-100"}`,title:ge?"Copied":"Copy code","aria-label":"Copy code",children:ge?C.jsx(Um,{size:14,className:"text-emerald-400"}):C.jsx(G3,{size:14})}),C.jsx("pre",{className:`p-4 md:p-4.5 ${Ce} text-[#dadada] overflow-x-auto leading-[1.65]`,children:C.jsx("code",{dangerouslySetInnerHTML:{__html:he?Gn(I):m8(I,ce)}})})]},`code-${S}`)),re=[],W=!1,ce="",ie=0,B=!1}else ne(S),ee(S),Te(S),Se(S),W=!0,ie=L.length-L.trimStart().length,ce=L.trim().slice(3).trim(),B=!1;continue}if(W){const I=ie>0?L.slice(ie):L;re.push(I);continue}const P=L.trim().match(/^\$\$(.+?)\$\$$/);if(P){ne(S),ee(S),Se(S);const I=P[1].trim();try{const G=y0.renderToString(I,{displayMode:!0,throwOnError:!1});V.push(C.jsx("div",{className:"my-4 overflow-x-auto py-3 px-4 rounded-lg bg-[#161616] border border-[#2e2e2e] text-center",dangerouslySetInnerHTML:{__html:G}},`math-${S}`))}catch{V.push(C.jsx("div",{className:"my-4 p-4 rounded-lg bg-[#161616] border border-[#2e2e2e] text-center font-mono text-[#ea580c]",children:I},`math-${S}`))}B=!1;continue}if(L.trim()==="$$"||L.trim().startsWith("$$")&&!L.trim().slice(2).includes("$$"))if(ft){const I=L.trim().slice(2).trim();I&&et.push(I);const G=et.join(`
`).trim(),ge=S;try{const he=y0.renderToString(G,{displayMode:!0,throwOnError:!1});V.push(C.jsx("div",{className:"my-4 overflow-x-auto py-3 px-4 rounded-lg bg-[#161616] border border-[#2e2e2e] text-center",dangerouslySetInnerHTML:{__html:he}},`math-${ge}`))}catch{V.push(C.jsx("div",{className:"my-4 p-4 rounded-lg bg-[#161616] border border-[#2e2e2e] text-center font-mono text-[#ea580c]",children:G},`math-${ge}`))}et=[],ft=!1,B=!1;continue}else{ne(S),ee(S),Se(S),ft=!0;const I=L.trim().slice(2).trim();I&&et.push(I),B=!1;continue}if(ft){et.push(L);continue}if(L.trim().startsWith("<table")||Oe){ne(S),ee(S),Se(S),Oe=!0,Be.push(L),L.includes("</table>")&&Te(S);continue}if(L.trim().startsWith("|")&&L.trim().endsWith("|")){ne(S),Te(S),Se(S),ue=!0,Re.push(L.trim());continue}else ue&&ee(S);const xe=L.match(/^(\s*)[-*+]\s+\[([ xX])\]\s+(.*)$/);if(xe){ee(S),Te(S),Se(S);const I=Math.floor(xe[1].length/2),G=xe[2].toLowerCase()==="x";lt.push({type:"task",marker:G?"[x]":"[ ]",text:xe[3],checked:G,indent:I}),B=!1;continue}const ke=L.match(/^(\s*)(\d+\.|\w+\.)\s+(.*)$/);if(ke){ee(S),Te(S),Se(S);const I=Math.floor(ke[1].length/2);lt.push({type:"ordered",marker:ke[2],text:ke[3],indent:I}),B=!1;continue}const Ee=L.match(/^(\s*)[-*+]\s+(.*)$/);if(Ee){ee(S),Te(S),Se(S);const I=Math.floor(Ee[1].length/2);lt.push({type:"bullet",marker:"•",text:Ee[2],indent:I}),B=!1;continue}if(!L.trim()){ne(S),ee(S),Te(S),Se(S);continue}const Ie=(I,G,ge,he,Ce,be=15)=>{const ve=d===G;return C.jsxs(I,{id:G,className:`group ${Ce}`,children:[C.jsx("span",{dangerouslySetInnerHTML:{__html:Gn(ge)}}),C.jsx("button",{type:"button",onClick:ye=>{ye.preventDefault(),ye.stopPropagation();const De=window.location.origin+window.location.pathname,me=l.slug||l.id,pe=`${De}#docs/${me}#${G}`;window.location.hash=`#docs/${me}#${G}`,navigator.clipboard.writeText(pe).then(()=>{m(G),setTimeout(()=>{m(He=>He===G?null:He)},1500)})},title:ve?"Copied link to section!":"Copy link to section","aria-label":`Copy link to section ${ge}`,className:`inline-flex items-center align-middle ml-1.5 p-0 rounded cursor-pointer transition-none ${ve?"opacity-100 text-[#ea580c]":"opacity-0 group-hover:opacity-100 text-[#777777] hover:text-[#ea580c]"}`,children:ve?C.jsx(Um,{size:be}):C.jsx(Y3,{size:be})})]},he)},Fe=L.match(/^#\s+(.+)$/);if(Fe){ne(S),ee(S),Te(S),Se(S);const I=Fe[1].trim(),G=xa(I),ge=V.length===0;V.push(Ie("h1",G,I,`h1-${S}`,ge?"text-[28px] sm:text-[32px] font-bold text-white tracking-tight mb-4 leading-[1.3] scroll-mt-6":"text-[26px] sm:text-[28px] font-bold text-white tracking-tight mt-6 mb-2 leading-[1.3] scroll-mt-6",25)),B=!0;continue}const an=L.match(/^##\s+(.+)$/);if(an){ne(S),ee(S),Te(S),Se(S);const I=an[1].trim(),G=xa(I);V.push(Ie("h2",G,I,`h2-${S}`,"text-[21px] sm:text-[23px] font-semibold text-white tracking-tight mt-5 mb-2 leading-[1.35] scroll-mt-6",20)),B=!0;continue}const Ze=L.match(/^###\s+(.+)$/);if(Ze){ne(S),ee(S),Te(S),Se(S);const I=Ze[1].trim(),G=xa(I);V.push(Ie("h3",G,I,`h3-${S}`,"text-[17px] sm:text-[19px] font-semibold text-[#f0f0f0] tracking-tight mt-4 mb-2 leading-[1.4] scroll-mt-6",17)),B=!0;continue}const Qe=L.match(/^####\s+(.+)$/);if(Qe){ne(S),ee(S),Te(S),Se(S);const I=Qe[1].trim(),G=xa(I);V.push(Ie("h4",G,I,`h4-${S}`,"text-[15px] sm:text-[17px] font-semibold text-[#d4d4d4] tracking-tight mt-3.5 mb-1.5 leading-[1.45] scroll-mt-6",15)),B=!0;continue}const Ae=L.match(/^#####\s+(.+)$/);if(Ae){ne(S),ee(S),Te(S),Se(S);const I=Ae[1].trim(),G=xa(I);V.push(Ie("h5",G,I,`h5-${S}`,"text-[14px] sm:text-[15px] font-semibold text-[#a0a0a0] tracking-tight mt-3 mb-1 leading-[1.45] scroll-mt-6",14)),B=!0;continue}const _=L.match(/^######\s+(.+)$/);if(_){ne(S),ee(S),Te(S),Se(S);const I=_[1].trim(),G=xa(I);V.push(Ie("h6",G,I,`h6-${S}`,"text-[13px] sm:text-[14px] font-semibold text-[#888888] tracking-tight mt-2.5 mb-1 leading-[1.45] scroll-mt-6",13)),B=!0;continue}if(L.trim().startsWith(">")){ne(S),ee(S),Te(S),Je=!0,Ve.push(L);continue}else Je&&Se(S);if(/^(\*\*\*|---|___)$/.test(L.trim())){ne(S),ee(S),Te(S),Se(S);const I=B?"mt-1 mb-4":"my-7";V.push(C.jsx("hr",{className:`${I} border-0 border-t border-[#363636]`},`hr-${S}`)),B=!1;continue}ne(S),ee(S),Te(S),Se(S),V.push(C.jsx("p",{className:"text-[16px] text-[#dadada] leading-[1.75] my-2",dangerouslySetInnerHTML:{__html:Gn(L)}},`p-${S}`)),B=!1}if(ne(O.length),ee(O.length),Te(O.length),Se(O.length),ft&&et.length>0){const S=et.join(`
`).trim();try{const L=y0.renderToString(S,{displayMode:!0,throwOnError:!1});V.push(C.jsx("div",{className:"my-4 overflow-x-auto py-3 px-4 rounded-lg bg-[#161616] border border-[#2e2e2e] text-center",dangerouslySetInnerHTML:{__html:L}},"math-end"))}catch{V.push(C.jsx("div",{className:"my-4 p-4 rounded-lg bg-[#161616] border border-[#2e2e2e] text-center font-mono text-[#ea580c]",children:S},"math-end"))}et=[],ft=!1}return V},[l.content,l.id,l.slug,s,d]);return C.jsx("div",{ref:g,onClick:U,className:"flex-1 min-w-0 px-6 sm:px-10 py-6 bg-transparent select-text",children:C.jsxs("article",{className:"max-w-3xl w-full mx-auto flex flex-col pb-24",children:[C.jsx("div",{className:"flex flex-col flex-1 leading-normal",children:X}),C.jsxs("div",{className:"mt-12 pt-6 border-t border-[#363636] flex items-center justify-between gap-4 select-none",children:[k?C.jsxs("button",{type:"button",onClick:()=>r(k),className:"px-3.5 py-2.5 rounded-md bg-[#191919] hover:bg-[#202020] border border-[#363636] hover:border-[#484848] text-left flex items-center gap-2 max-w-[48%] cursor-pointer",children:[C.jsx(U3,{size:14,className:"shrink-0 text-[#888888]"}),C.jsxs("div",{className:"min-w-0",children:[C.jsx("div",{className:"text-[10px] text-[#777777] uppercase tracking-wider",children:"Previous"}),C.jsx("div",{className:"text-xs font-medium text-[#dadada] truncate hover:text-[#ea580c]",children:k.title})]})]}):C.jsx("div",{}),M?C.jsxs("button",{type:"button",onClick:()=>r(M),className:"px-3.5 py-2.5 rounded-md bg-[#191919] hover:bg-[#202020] border border-[#363636] hover:border-[#484848] text-right flex items-center gap-2 max-w-[48%] ml-auto cursor-pointer",children:[C.jsxs("div",{className:"min-w-0",children:[C.jsx("div",{className:"text-[10px] text-[#777777] uppercase tracking-wider",children:"Next"}),C.jsx("div",{className:"text-xs font-medium text-[#dadada] truncate hover:text-[#ea580c]",children:M.title})]}),C.jsx(_3,{size:14,className:"shrink-0 text-[#888888]"})]}):C.jsx("div",{})]})]})})});E2.displayName="DocsReader";function Ti(l){let a=2166136261;for(let r=0;r<l.length;r++)a=Math.imul(a^l.charCodeAt(r),16777619);return(a>>>0)/4294967296}function S8(l,a=0){const r=2.399963229728653,s=(Ti(l+":angle")-.5)*.7,c=a*r+s,d=Ti(l+":dist"),m=75+Math.sqrt(a+1)*50+(d-.5)*28;return{x:Math.round(Math.cos(c)*m),y:Math.round(Math.sin(c)*m)}}const D2=tr.memo(({nodes:l,activeDocId:a,onSelectDoc:r,className:s=""})=>{const[c,d]=le.useState(!1),[m,g]=le.useState(""),y=!c,v=le.useMemo(()=>{const _=[],I=G=>{for(const ge of G)(!ge.isFolder||ge.content&&ge.content.trim().length>0)&&_.push(ge),ge.children&&I(ge.children)};return I(l),_},[l]),k=le.useMemo(()=>{const _=(a||"").toLowerCase();for(const I of v){if(I.id.toLowerCase()===_||I.slug&&I.slug.toLowerCase()===_||I.title.toLowerCase()===_)return I;if(I.aliases){for(const G of I.aliases)if(G.toLowerCase()===_)return I}}return v[0]||null},[a,v]),M=le.useMemo(()=>{const _=new Map;for(const I of v)if(_.set(I.id.toLowerCase(),I),_.set(I.title.toLowerCase(),I),I.slug&&_.set(I.slug.toLowerCase(),I),I.aliases)for(const G of I.aliases)_.set(G.toLowerCase(),I);return _},[v]),N=le.useMemo(()=>{const _=[],I=new Set,G=/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g;for(const ge of v){const he=ge.content||"";let Ce;for(;(Ce=G.exec(he))!==null;){const be=Ce[1].trim().toLowerCase(),ve=M.get(be);if(ve&&ve.id!==ge.id){const ye=`${ge.id}->${ve.id}`,De=`${ve.id}->${ge.id}`;!I.has(ye)&&!I.has(De)&&(_.push({source:ge.id,target:ve.id}),I.add(ye))}}}return _},[v,M]),{displayedDocs:q,displayedLinks:U}=le.useMemo(()=>{if(!y||!k)return{displayedDocs:v,displayedLinks:N};const _=new Set([k.id]);for(const ge of N)ge.source===k.id&&_.add(ge.target),ge.target===k.id&&_.add(ge.source);const I=v.filter(ge=>_.has(ge.id)),G=N.filter(ge=>_.has(ge.source)&&_.has(ge.target));return{displayedDocs:I,displayedLinks:G}},[y,k,v,N]),X=le.useRef(null),K=le.useRef(null),O=le.useRef(null),V=le.useRef(null),W=c?V:K,ce=c?O:X,re=le.useRef([]),ie=le.useRef([]),ue=le.useRef(new Map),Re=le.useRef(null),Oe=le.useRef(null),Be=le.useRef(null),Je=le.useRef(!1),Ve=le.useRef({x:0,y:0}),ft=le.useRef({x:0,y:0}),et=le.useRef([]),lt=le.useRef({vx:0,vy:0}),B=le.useRef(new Map),ne=le.useRef(null),ee=le.useRef({x:0,y:0,scale:1}),Te=le.useRef({x:0,y:0,scale:1}),Se=le.useRef(.001),S=le.useRef(null),L=le.useRef(!1),te=le.useRef(()=>{}),P=le.useCallback(()=>{S.current||(S.current=requestAnimationFrame(te.current))},[]);le.useEffect(()=>{const _=new Map;for(const ye of U)_.set(ye.source,(_.get(ye.source)||0)+1),_.set(ye.target,(_.get(ye.target)||0)+1);const I=new Map;for(const ye of re.current)I.set(ye.id,ye);const G=q.filter(ye=>ye.id!==(k==null?void 0:k.id)),ge=2*Math.PI/Math.max(1,G.length),he=q.map((ye,De)=>{const me=I.get(ye.id),pe=!!(k&&ye.id===k.id);let He;if(me&&Number.isFinite(me.x)&&Number.isFinite(me.y))He={x:me.x,y:me.y};else if(y)if(pe)He={x:0,y:0};else{const Pe=G.findIndex(dt=>dt.id===ye.id),it=(Pe>=0?Pe:De)*ge,st=90+(De%2===0?0:25);He={x:Math.round(Math.cos(it)*st),y:Math.round(Math.sin(it)*st)}}else He=S8(ye.id,De);const tt=_.get(ye.id)||0;return{id:ye.id,title:ye.title,displayTitle:ye.title.includes("/")&&ye.title.split("/").pop()||ye.title,slug:ye.slug||ye.id,x:He.x,y:He.y,vx:me?me.vx:0,vy:me?me.vy:0,radius:pe?7.5:Math.min(6.5,Math.max(4.5,4.5+tt*.45)),linkCount:tt,hoverAlpha:(me==null?void 0:me.hoverAlpha)??0,dimAlpha:(me==null?void 0:me.dimAlpha)??0,connectAlpha:(me==null?void 0:me.connectAlpha)??0,popScale:1,popAlpha:1,floatPhaseX:Ti(ye.id+":fx")*Math.PI*2,floatPhaseY:Ti(ye.id+":fy")*Math.PI*2,floatFreq:8e-4+Ti(ye.id+":ff")*6e-4,rawDoc:ye}});let Ce=.85;const be=y?105:130,ve=new Map;for(const ye of he)ve.set(ye.id,ye);for(let ye=0;ye<45;ye++){for(let pe=0;pe<he.length;pe++)for(let He=pe+1;He<he.length;He++){const tt=he[pe],Pe=he[He];let it=Pe.x-tt.x,st=Pe.y-tt.y;if(Math.abs(it)<.1&&Math.abs(st)<.1){const Et=Ti(tt.id+Pe.id+":sep")*Math.PI*2;it=Math.cos(Et)*3,st=Math.sin(Et)*3}const dt=it*it+st*st;if(dt<be*be*2.2){const Et=Math.sqrt(dt+1);if(Et<be){const Ct=(be-Et)/be,Ke=Ct*Ct*16*Ce,yt=it/Et*Ke,Xe=st/Et*Ke;tt.vx-=yt,tt.vy-=Xe,Pe.vx+=yt,Pe.vy+=Xe}}}const De=.042;for(const pe of U){const He=ve.get(pe.source),tt=ve.get(pe.target);if(He&&tt){const Pe=tt.x-He.x,it=tt.y-He.y,st=Math.sqrt(Pe*Pe+it*it)||1,dt=st-be,Et=dt>30?Math.min(8,Math.pow((dt-30)/40,1.3)*.4):0,Ct=(dt*De+Et)*Ce,Ke=Pe/st*Ct,yt=it/st*Ct;He.vx+=Ke,He.vy+=yt,tt.vx-=Ke,tt.vy-=yt}}const me=.024*Ce;for(const pe of he){if(y&&k&&pe.id===k.id){pe.x=0,pe.y=0,pe.vx=0,pe.vy=0;continue}pe.vx-=pe.x*me,pe.vy-=pe.y*me,pe.vx*=.85,pe.vy*=.85,pe.x+=pe.vx,pe.y+=pe.vy}Ce*=.95}re.current=he,ie.current=U.map(ye=>({...ye})),Se.current=.001,L.current=!1,P()},[q,U,y,k==null?void 0:k.id,P]);const xe=le.useCallback((_=!1)=>{const I=W.current,G=re.current;if(!I||G.length===0)return!1;const ge=I.getBoundingClientRect(),he=ge.width,Ce=ge.height;if(he<=0||Ce<=0)return!1;let be=1/0,ve=-1/0,ye=1/0,De=-1/0,me=0;for(let oa=0;oa<G.length;oa++){const Yt=G[oa];if(!Number.isFinite(Yt.x)||!Number.isFinite(Yt.y))continue;const mn=(Yt.radius||6)+20;Yt.x-mn<be&&(be=Yt.x-mn),Yt.x+mn>ve&&(ve=Yt.x+mn),Yt.y-mn<ye&&(ye=Yt.y-mn),Yt.y+mn>De&&(De=Yt.y+mn),me++}if(me===0||!Number.isFinite(be)||!Number.isFinite(ve)||!Number.isFinite(ye)||!Number.isFinite(De))return ee.current={x:he/2,y:Ce/2,scale:1},_&&(Te.current={...ee.current}),!0;const pe=Math.max(30,ve-be),He=Math.max(30,De-ye),tt=(be+ve)/2,Pe=(ye+De)/2,it=Math.min(60,he*.12),st=Math.min(60,Ce*.12),dt=Math.max(30,he-it*2),Et=Math.max(30,Ce-st*2),Ct=dt/pe,Ke=Et/He,yt=G.length<=2?1:c?1.4:1.1,Xe=Math.min(yt,Math.max(.15,Math.min(Ct,Ke))),Ln=he/2-tt*Xe,kn=Ce/2-Pe*Xe;return ee.current={x:Number.isFinite(Ln)?Ln:he/2,y:Number.isFinite(kn)?kn:Ce/2,scale:Xe},_&&(Te.current={...ee.current}),P(),!0},[W,c,P]),ke=le.useCallback(()=>{xe(!1)},[xe]),Ee=le.useCallback(_=>{if(Se.current<.002&&!Be.current)return;const I=re.current,G=ie.current,ge=Be.current,he=Se.current,Ce=130,be=I.length;for(let me=0;me<be;me++)for(let pe=me+1;pe<be;pe++){const He=I[me],tt=I[pe];if(!Number.isFinite(He.x)||!Number.isFinite(He.y)||!Number.isFinite(tt.x)||!Number.isFinite(tt.y))continue;let Pe=tt.x-He.x,it=tt.y-He.y;if(Math.abs(Pe)<.1&&Math.abs(it)<.1){const dt=Ti(He.id+tt.id+":sep")*Math.PI*2;Pe=Math.cos(dt)*3,it=Math.sin(dt)*3}const st=Pe*Pe+it*it;if(st<Ce*Ce*2.2){const dt=Math.sqrt(st+1);if(dt<Ce){const Et=(Ce-dt)/Ce,Ct=Et*Et*16*he,Ke=Pe/dt*Ct,yt=it/dt*Ct;He!==ge&&(He.vx-=Ke,He.vy-=yt),tt!==ge&&(tt.vx+=Ke,tt.vy+=yt)}}}const ve=ue.current;ve.clear();for(let me=0;me<I.length;me++)ve.set(I[me].id,I[me]);const ye=.042;for(const me of G){const pe=ve.get(me.source),He=ve.get(me.target);if(pe&&He&&Number.isFinite(pe.x)&&Number.isFinite(pe.y)&&Number.isFinite(He.x)&&Number.isFinite(He.y)){const tt=He.x-pe.x,Pe=He.y-pe.y,it=Math.sqrt(tt*tt+Pe*Pe)||1,st=it-Ce,dt=st>30?Math.min(8,Math.pow((st-30)/40,1.3)*.4):0,Et=(st*ye+dt)*he,Ct=tt/it*Et,Ke=Pe/it*Et,yt=-Pe/it,Xe=tt/it,kn=(Ti(me.source+me.target+":torque")-.5)*2*.42*he;pe!==ge&&(pe.vx+=Ct+yt*kn,pe.vy+=Ke+Xe*kn),He!==ge&&(He.vx-=Ct-yt*kn,He.vy-=Ke-Xe*kn)}}const De=.024*he;for(let me=0;me<I.length;me++){const pe=I[me];if(pe===ge)continue;const tt=y&&k&&pe.id===k.id?.08*he:De;pe.vx-=pe.x*tt,pe.vy-=pe.y*tt,pe.vx*=.85,pe.vy*=.85,pe.x+=pe.vx,pe.y+=pe.vy;const Pe=pe.floatFreq||.001;pe.x+=Math.cos(_*Pe+(pe.floatPhaseX||0))*.04,pe.y+=Math.sin(_*Pe+(pe.floatPhaseY||0))*.04}Se.current>.002&&(Se.current*=.985)},[]);te.current=_=>{S.current=null;const I=W.current;if(!I)return;const G=I.getContext("2d");if(!G)return;const ge=I.getBoundingClientRect(),he=window.devicePixelRatio||1,Ce=ge.width,be=ge.height;if(Ce===0||be===0)return;(I.width!==Math.floor(Ce*he)||I.height!==Math.floor(be*he))&&(I.width=Math.floor(Ce*he),I.height=Math.floor(be*he));const ve=Te.current.x===0&&Te.current.y===0;(!L.current||ve)&&re.current.length>0&&xe(!0)&&(L.current=!0),Ee(_);const ye=ee.current,De=Te.current;let me=!1;const pe=lt.current,He=Math.hypot(pe.vx,pe.vy);He>.04?(ye.x+=pe.vx,ye.y+=pe.vy,De.x+=pe.vx,De.y+=pe.vy,pe.vx*=.952,pe.vy*=.952,me=!0):He>0&&(lt.current={vx:0,vy:0});const tt=Je.current||Be.current?1:.16,Pe=ye.scale-De.scale,it=ye.x-De.x,st=ye.y-De.y;Math.abs(Pe)>2e-4||Math.abs(it)>.03||Math.abs(st)>.03?(De.scale+=Pe*tt,De.x+=it*tt,De.y+=st*tt,me=!0):(De.scale=ye.scale,De.x=ye.x,De.y=ye.y);const dt=Number.isFinite(De.scale)&&De.scale>0?De.scale:1,Et=Number.isFinite(De.x)?De.x:0,Ct=Number.isFinite(De.y)?De.y:0,Ke=re.current,yt=ie.current,Xe=Re.current,Ln=!!Xe,kn=Oe.current,oa=.12,Yt=ue.current;Yt.clear();for(let Q=0;Q<Ke.length;Q++)Yt.set(Ke[Q].id,Ke[Q]);for(let Q=0;Q<Ke.length;Q++){const ze=Ke[Q];ze.popAlpha!==void 0&&ze.popAlpha<.99?(ze.popAlpha+=(1-ze.popAlpha)*.16,me=!0):ze.popAlpha=1,ze.popScale!==void 0&&ze.popScale<.99?(ze.popScale+=(1-ze.popScale)*.18,me=!0):ze.popScale=1}const mn=I.width/he,ar=I.height/he,Qn=-Et/dt,Aa=-Ct/dt,Ma=Qn+mn/dt,Pr=Aa+ar/dt,fn=50,Zr=Math.min(1,Math.max(0,(dt-.48)/.55));G.clearRect(0,0,I.width,I.height),G.save(),G.scale(he,he);const Lt=document.documentElement.classList.contains("theme-light")||document.documentElement.classList.contains("light");G.fillStyle=Lt?"#ffffff":"#151515",G.fillRect(0,0,Ce,be),G.translate(Et,Ct),G.scale(dt,dt);const Ri=[],Kr=[],Cn=m.trim()!=="";for(let Q=0;Q<yt.length;Q++){const ze=yt[Q],Ue=Yt.get(ze.source),je=Yt.get(ze.target);if(!Ue||!je||!Number.isFinite(Ue.x)||!Number.isFinite(Ue.y)||!Number.isFinite(je.x)||!Number.isFinite(je.y)||Ue.x<Qn-fn&&je.x<Qn-fn||Ue.x>Ma+fn&&je.x>Ma+fn||Ue.y<Aa-fn&&je.y<Aa-fn||Ue.y>Pr+fn&&je.y>Pr+fn)continue;const jt=!Cn||Ue.title.toLowerCase().includes(m.toLowerCase()),pn=!Cn||je.title.toLowerCase().includes(m.toLowerCase()),On=Cn&&(!jt||!pn),fa=Ln&&Xe&&(ze.source===Xe.id||ze.target===Xe.id);fa&&Xe&&(ze.hoverOriginId=Xe.id);const Pn=fa?1:0,gn=Ln&&!fa||On?1:0,Bn=ze.hoverAlpha??0,vn=ze.dimAlpha??0;ze.hoverAlpha=Bn+(Pn-Bn)*oa,ze.dimAlpha=vn+(gn-vn)*oa,Math.abs(Pn-ze.hoverAlpha)<.002&&(ze.hoverAlpha=Pn),Math.abs(gn-ze.dimAlpha)<.002&&(ze.dimAlpha=gn),ze.hoverAlpha<.002&&(ze.hoverOriginId=void 0),(Math.abs(Pn-ze.hoverAlpha)>.001||Math.abs(gn-ze.dimAlpha)>.001)&&(me=!0);const Tn={link:ze,s:Ue,t:je};(ze.hoverAlpha??0)>.005&&Kr.push(Tn),(ze.hoverAlpha??0)<.99&&Ri.push(Tn)}if(G.lineWidth=1,!Ln&&!Cn){G.beginPath(),G.strokeStyle=Lt?"rgba(215, 220, 228, 0.75)":"rgba(110, 115, 125, 0.450)";for(let Q=0;Q<Ri.length;Q++){const{s:ze,t:Ue}=Ri[Q];G.moveTo(ze.x,ze.y),G.lineTo(Ue.x,Ue.y)}G.stroke()}else{const Q=[],ze=[];for(let Ue=0;Ue<Ri.length;Ue++){const je=Ri[Ue];(je.link.dimAlpha??0)>.5?ze.push(je):Q.push(je)}if(Q.length>0){G.beginPath(),G.strokeStyle=Lt?"rgba(215, 220, 228, 0.75)":"rgba(110, 115, 125, 0.450)";for(let Ue=0;Ue<Q.length;Ue++){const{s:je,t:jt}=Q[Ue];G.moveTo(je.x,je.y),G.lineTo(jt.x,jt.y)}G.stroke()}if(ze.length>0){G.beginPath(),G.strokeStyle=Lt?"rgba(232, 235, 240, 0.45)":"rgba(65, 65, 70, 0.180)";for(let Ue=0;Ue<ze.length;Ue++){const{s:je,t:jt}=ze[Ue];G.moveTo(je.x,je.y),G.lineTo(jt.x,jt.y)}G.stroke()}}for(const{link:Q,s:ze,t:Ue}of Kr){const je=Q.hoverAlpha??0;if(je<=.005)continue;const jt=(Q.hoverOriginId||(Xe&&Q.source===Xe.id?Q.source:""))===Q.source,pn=jt?ze:Ue,On=jt?Ue:ze,fa=On.x-pn.x,Pn=On.y-pn.y,gn=Math.hypot(fa,Pn);if(G.beginPath(),G.moveTo(ze.x,ze.y),G.lineTo(Ue.x,Ue.y),gn>1){const Bn=G.createLinearGradient(pn.x,pn.y,On.x,On.y),vn=.95*je;Bn.addColorStop(0,Lt?`rgba(15, 23, 42, ${vn.toFixed(3)})`:`rgba(255, 255, 255, ${vn.toFixed(3)})`);const Tn=Math.round(Lt?148*(1-je)+15*je:110*(1-je)+156*je),Ea=Math.round(Lt?163*(1-je)+23*je:115*(1-je)+163*je),pa=Math.round(Lt?184*(1-je)+42*je:125*(1-je)+175*je),Ft=.55*je;Bn.addColorStop(1,`rgba(${Tn}, ${Ea}, ${pa}, ${Ft.toFixed(3)})`),G.strokeStyle=Bn}else G.strokeStyle=Lt?`rgba(15, 23, 42, ${(.95*je).toFixed(3)})`:`rgba(255, 255, 255, ${(.95*je).toFixed(3)})`;G.lineWidth=1+.6*je,G.stroke()}const ir=[],Li=[];let Oi=null;for(let Q=0;Q<Ke.length;Q++){const ze=Ke[Q];Xe&&ze.id===Xe.id?Oi=ze:kn&&kn.has(ze.id)&&Ln?Li.push(ze):ir.push(ze)}const rr=Q=>{if(!Number.isFinite(Q.x)||!Number.isFinite(Q.y)||Q.x<Qn-fn||Q.x>Ma+fn||Q.y<Aa-fn||Q.y>Pr+fn)return;const ze=!Cn||Q.title.toLowerCase().includes(m.toLowerCase()),Ue=(Xe==null?void 0:Xe.id)===Q.id,je=kn?kn.has(Q.id):!1,jt=Ue?1:0,pn=!Ue&&je&&Ln?1:0,On=Ln&&!Ue&&!je||Cn&&!ze?1:0,fa=Q.hoverAlpha??0,Pn=Q.connectAlpha??0,gn=Q.dimAlpha??0;Q.hoverAlpha=fa+(jt-fa)*oa,Q.connectAlpha=Pn+(pn-Pn)*oa,Q.dimAlpha=gn+(On-gn)*oa,Math.abs(jt-Q.hoverAlpha)<.002&&(Q.hoverAlpha=jt),Math.abs(pn-Q.connectAlpha)<.002&&(Q.connectAlpha=pn),Math.abs(On-Q.dimAlpha)<.002&&(Q.dimAlpha=On),(Math.abs(jt-Q.hoverAlpha)>.001||Math.abs(pn-Q.connectAlpha)>.001||Math.abs(On-Q.dimAlpha)>.001)&&(me=!0);const Bn=Cn&&ze?235:Lt?100:156,vn=Cn&&ze?240:Lt?116:163,Tn=Cn&&ze?255:Lt?139:175,Ea=Lt?Math.min(255,Math.max(0,Math.round(Bn*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+15*Q.hoverAlpha+200*Q.dimAlpha))):Math.min(255,Math.max(0,Math.round(Bn*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+255*Q.hoverAlpha+45*Q.dimAlpha))),pa=Lt?Math.min(255,Math.max(0,Math.round(vn*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+23*Q.hoverAlpha+200*Q.dimAlpha))):Math.min(255,Math.max(0,Math.round(vn*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+255*Q.hoverAlpha+45*Q.dimAlpha))),Ft=Lt?Math.min(255,Math.max(0,Math.round(Tn*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+42*Q.hoverAlpha+200*Q.dimAlpha))):Math.min(255,Math.max(0,Math.round(Tn*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+255*Q.hoverAlpha+45*Q.dimAlpha))),$r=!!(k&&Q.id===k.id),Jr=Math.max(3.5,(Q.radius||4.5)*(Q.popScale||1)),ca=Number.isFinite(Q.popAlpha)&&Q.popAlpha>.05?Q.popAlpha:1;G.beginPath(),G.arc(Q.x,Q.y,Jr,0,2*Math.PI),G.fillStyle=`rgba(${Ea}, ${pa}, ${Ft}, ${ca.toFixed(3)})`,G.fill();const Da=$r||Ue||je&&Ln||Cn&&ze,Kl=Da?ca:ca*Zr;if(Kl>.01&&(Da||dt>=.75)){G.font=Ue||$r||Cn&&ze?'600 10px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif':'9.5px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';const $l=Lt?Math.min(255,Math.max(0,Math.round(15*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+0*Q.hoverAlpha+160*Q.dimAlpha))):Math.min(255,Math.max(0,Math.round(220*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+255*Q.hoverAlpha+60*Q.dimAlpha))),L0=Lt?Math.min(255,Math.max(0,Math.round(23*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+0*Q.hoverAlpha+160*Q.dimAlpha))):Math.min(255,Math.max(0,Math.round(221*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+255*Q.hoverAlpha+60*Q.dimAlpha))),lr=Lt?Math.min(255,Math.max(0,Math.round(42*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+0*Q.hoverAlpha+160*Q.dimAlpha))):Math.min(255,Math.max(0,Math.round(222*(1-Q.dimAlpha)*(1-Q.hoverAlpha)+255*Q.hoverAlpha+60*Q.dimAlpha)));G.fillStyle=`rgba(${$l}, ${L0}, ${lr}, ${Kl.toFixed(3)})`,G.textAlign="center";const sr=Q.displayTitle||Q.title,ua=(Q.hoverAlpha??0)*4.5;G.fillText(sr,Q.x,Q.y+Jr+11+ua)}};for(let Q=0;Q<ir.length;Q++)rr(ir[Q]);for(let Q=0;Q<Li.length;Q++)rr(Li[Q]);Oi&&rr(Oi),G.restore(),(Se.current>.002||Je.current||Be.current!==null||me)&&(S.current=requestAnimationFrame(te.current))};const Ie=le.useCallback((_,I,G)=>{const ge=G.getBoundingClientRect(),he=Number.isFinite(Te.current.scale)&&Te.current.scale>0?Te.current.scale:1,Ce=(_-ge.left-(Te.current.x||0))/he,be=(I-ge.top-(Te.current.y||0))/he;return{worldX:Ce,worldY:be,screenX:_-ge.left,screenY:I-ge.top}},[]),Fe=le.useCallback((_,I)=>{const G=re.current;for(let ge=G.length-1;ge>=0;ge--){const he=G[ge];if(!Number.isFinite(he.x)||!Number.isFinite(he.y))continue;const Ce=he.x-_,be=he.y-I,ve=Math.max((he.radius||5)+6,11);if(Ce*Ce+be*be<=ve*ve)return he}return null},[]),an=le.useCallback(_=>{var Ce,be;const I=_.currentTarget;try{(be=(Ce=_.target)==null?void 0:Ce.setPointerCapture)==null||be.call(Ce,_.pointerId)}catch{}if(B.current.set(_.pointerId,{x:_.clientX,y:_.clientY}),lt.current={vx:0,vy:0},B.current.size>=2){Be.current=null,Je.current=!1,et.current=[];const ve=Array.from(B.current.values()),ye=Math.hypot(ve[1].x-ve[0].x,ve[1].y-ve[0].y),De=I.getBoundingClientRect();ne.current={dist:Math.max(ye,1),scale:ee.current.scale||1,center:{x:(ve[0].x+ve[1].x)/2-De.left,y:(ve[0].y+ve[1].y)/2-De.top},transform:{x:ee.current.x||0,y:ee.current.y||0}},P();return}Ve.current={x:_.clientX,y:_.clientY},ft.current={x:_.clientX,y:_.clientY},et.current=[{x:_.clientX,y:_.clientY,t:performance.now()}];const{worldX:G,worldY:ge}=Ie(_.clientX,_.clientY,I),he=Fe(G,ge);he?(Be.current=he,he.vx=0,he.vy=0,Se.current=Math.max(Se.current,.45)):Je.current=!0,P()},[Ie,Fe,P]),Ze=le.useCallback(_=>{var he;const I=_.currentTarget;if(B.current.has(_.pointerId)&&B.current.set(_.pointerId,{x:_.clientX,y:_.clientY}),B.current.size>=2&&ne.current&&ne.current.dist>0){const Ce=ne.current,be=Array.from(B.current.values()),ye=Math.hypot(be[1].x-be[0].x,be[1].y-be[0].y)/Ce.dist,De=Math.min(4,Math.max(.15,Ce.scale*ye)),me=I.getBoundingClientRect(),pe={x:(be[0].x+be[1].x)/2-me.left,y:(be[0].y+be[1].y)/2-me.top};ee.current={x:pe.x-(Ce.center.x-Ce.transform.x)*(De/Ce.scale),y:pe.y-(Ce.center.y-Ce.transform.y)*(De/Ce.scale),scale:De},Te.current.x=ee.current.x,Te.current.y=ee.current.y,Te.current.scale=ee.current.scale,P();return}const{worldX:G,worldY:ge}=Ie(_.clientX,_.clientY,I);if(Be.current){const Ce=G-Be.current.x,be=ge-Be.current.y;Be.current.vx=Ce*.45,Be.current.vy=be*.45,Be.current.x=G,Be.current.y=ge,Se.current=Math.max(Se.current,.42),P()}else if(Je.current){const Ce=_.clientX-ft.current.x,be=_.clientY-ft.current.y;ee.current.x=(ee.current.x||0)+Ce,ee.current.y=(ee.current.y||0)+be,Te.current.x=ee.current.x,Te.current.y=ee.current.y,ft.current={x:_.clientX,y:_.clientY};const ve=performance.now();for(et.current.push({x:_.clientX,y:_.clientY,t:ve}),et.current.length>8&&et.current.shift();et.current.length>2&&ve-et.current[0].t>90;)et.current.shift();P()}else if(_.pointerType==="mouse"){const Ce=((he=Re.current)==null?void 0:he.id)||null,be=Fe(G,ge),ve=(be==null?void 0:be.id)||null;if(Ce!==ve){if(Re.current=be,be){const ye=new Set([be.id]);for(const De of ie.current)De.source===be.id&&ye.add(De.target),De.target===be.id&&ye.add(De.source);Oe.current=ye}else Oe.current=null;I.style.cursor=be?"pointer":"grab",P()}}},[Ie,Fe,P]),Qe=le.useCallback(_=>{if(B.current.delete(_.pointerId),B.current.size>=1){ne.current=null,Be.current=null;const G=Array.from(B.current.values())[0];ft.current={x:G.x,y:G.y},Ve.current={x:G.x,y:G.y},et.current=[{x:G.x,y:G.y,t:performance.now()}],Je.current=!0;return}ne.current=null;const I=Math.hypot(_.clientX-Ve.current.x,_.clientY-Ve.current.y);if(Be.current&&(I<6&&(r(Be.current.rawDoc),c&&d(!1)),Se.current=Math.max(Se.current,.72),Be.current=null),Je.current){Je.current=!1;const G=performance.now(),ge=et.current;if(ge.length>=2){const he=ge[0],Ce=G-he.t;if(Ce>10&&Ce<120){const be=_.clientX-he.x,ve=_.clientY-he.y,ye=be/Ce*17.5,De=ve/Ce*17.5,me=60,pe=Math.hypot(ye,De),He=pe>me?me/pe:1;lt.current={vx:ye*He,vy:De*He}}}et.current=[]}P()},[r,c,P]),Ae=le.useCallback(_=>{B.current.delete(_.pointerId),B.current.size===0&&(ne.current=null,Be.current=null,Je.current=!1,Re.current=null,Oe.current=null,_.currentTarget.style.cursor="grab",P())},[P]);return le.useEffect(()=>{const _=ve=>{const ye=ce.current,De=W.current;if(!ye||!De)return;const me=De.getBoundingClientRect(),pe=ve.clientX>=me.left&&ve.clientX<=me.right&&ve.clientY>=me.top&&ve.clientY<=me.bottom,He=ve.target,tt=He?ye.contains(He)||He===De:!1;if(!pe&&!tt)return;ve.preventDefault(),ve.stopPropagation(),lt.current={vx:0,vy:0};const Pe=ve.clientX-me.left,it=ve.clientY-me.top,st=Number.isFinite(ee.current.scale)&&ee.current.scale>0?ee.current.scale:1,dt=Number.isFinite(ee.current.x)?ee.current.x:0,Et=Number.isFinite(ee.current.y)?ee.current.y:0;let Ct=ve.deltaX,Ke=ve.deltaY;if(ve.deltaMode===1?(Ct*=16,Ke*=16):ve.deltaMode===2&&(Ct*=window.innerHeight,Ke*=window.innerHeight),ve.ctrlKey||ve.metaKey){const yt=Math.exp(-Ke*.012),Xe=Math.min(4,Math.max(.15,st*yt));Math.abs(Xe-st)>1e-4&&(ee.current={x:Pe-(Pe-dt)*(Xe/st),y:it-(it-Et)*(Xe/st),scale:Xe},P())}else if(ve.shiftKey)ee.current={x:dt-(Math.abs(Ke)>0?Ke:Ct),y:Et,scale:st},P();else if(Math.abs(Ct)>0&&Math.abs(Ke)===0)ee.current={x:dt-Ct,y:Et,scale:st},P();else{let yt;Math.abs(Ke)<30&&ve.deltaMode===0?yt=Math.exp(-Ke*.008):yt=Ke<0?1.18:.84;const Xe=Math.min(4,Math.max(.15,st*yt));Math.abs(Xe-st)>1e-4&&(ee.current={x:Pe-(Pe-dt)*(Xe/st),y:it-(it-Et)*(Xe/st),scale:Xe},P())}};let I=1,G={x:0,y:0};const ge=ve=>{ve.preventDefault(),I=ee.current.scale||1,G={x:ee.current.x||0,y:ee.current.y||0}},he=ve=>{ve.preventDefault();const ye=W.current;if(!ye)return;const De=ye.getBoundingClientRect(),me=(ve.clientX||De.width/2)-De.left,pe=(ve.clientY||De.height/2)-De.top,He=Math.min(4,Math.max(.15,I*(ve.scale||1)));ee.current={x:me-(me-G.x)*(He/I),y:pe-(pe-G.y)*(He/I),scale:He},Te.current.x=ee.current.x,Te.current.y=ee.current.y,Te.current.scale=ee.current.scale,P()},Ce=ve=>{ve.preventDefault(),P()};window.addEventListener("wheel",_,{passive:!1});const be=ce.current;return be&&(be.addEventListener("gesturestart",ge,{passive:!1}),be.addEventListener("gesturechange",he,{passive:!1}),be.addEventListener("gestureend",Ce,{passive:!1})),()=>{window.removeEventListener("wheel",_),be&&(be.removeEventListener("gesturestart",ge),be.removeEventListener("gesturechange",he),be.removeEventListener("gestureend",Ce))}},[ce,W,P]),le.useEffect(()=>{const _=ce.current;if(!_)return;const I=new ResizeObserver(G=>{const ge=G[0];ge&&ge.contentRect.width>0&&ge.contentRect.height>0&&!L.current&&re.current.length>0&&xe(!0)&&(L.current=!0),P()});return I.observe(_),()=>I.disconnect()},[ce,xe,P]),le.useEffect(()=>{L.current=!1;const _=requestAnimationFrame(()=>{xe(!0)&&(L.current=!0),P()});return()=>cancelAnimationFrame(_)},[c,xe,P]),le.useEffect(()=>{P()},[m,P]),le.useEffect(()=>{const _=new MutationObserver(()=>{P()});_.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});const I=()=>{P()};return window.addEventListener("flint-theme-change",I),()=>{_.disconnect(),window.removeEventListener("flint-theme-change",I)}},[P]),le.useEffect(()=>{if(!c)return;const _=I=>{I.key==="Escape"&&d(!1)};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[c]),C.jsxs(C.Fragment,{children:[C.jsx("div",{className:`flex flex-col select-none ${s}`,children:C.jsxs("div",{ref:X,className:"relative w-full aspect-square rounded-lg border border-[#363636] bg-[#151515] overflow-hidden group touch-none",style:{overscrollBehavior:"contain"},children:[C.jsxs("div",{className:"absolute top-2 right-2 z-10 flex items-center gap-1 opacity-60 hover:opacity-100",children:[C.jsx("button",{type:"button",onClick:ke,className:"p-1 rounded bg-[#202020]/80 hover:bg-[#2c2c2c] text-[#9e9e9e] hover:text-white border border-[#333] cursor-pointer",title:"Fit to center",children:C.jsx(Q3,{size:13})}),C.jsx("button",{type:"button",onClick:()=>{d(!0),L.current=!1,P()},className:"p-1 rounded bg-[#202020]/80 hover:bg-[#2c2c2c] text-[#9e9e9e] hover:text-white border border-[#333] cursor-pointer",title:"Expand interactive graph",children:C.jsx(W3,{size:13})})]}),C.jsx("canvas",{ref:K,onPointerDown:an,onPointerMove:Ze,onPointerUp:Qe,onPointerLeave:Ae,className:"w-full h-full block cursor-grab active:cursor-grabbing touch-none"})]})}),c&&C.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 select-none touch-none",onClick:()=>d(!1),children:C.jsx("div",{ref:O,onClick:_=>_.stopPropagation(),className:"relative w-full max-w-[1385px] h-[87vh] max-h-[960px] rounded-xl bg-[#141414] border border-[#363636] shadow-2xl overflow-hidden flex flex-col",children:C.jsx("div",{className:"flex-1 w-full h-full relative overflow-hidden bg-[#141414]",children:C.jsx("canvas",{ref:V,onPointerDown:an,onPointerMove:Ze,onPointerUp:Qe,onPointerLeave:Ae,className:"w-full h-full block cursor-grab active:cursor-grabbing touch-none"})})})})]})});D2.displayName="InteractiveGraphWidget";const z2=tr.memo(({items:l,activeHeadingId:a,onSelectHeading:r,backlinks:s=[],onSelectDoc:c,className:d=""})=>{const m=l.length>0,g=s.length>0;return!m&&!g?null:C.jsxs("div",{className:`flex flex-col px-1 pt-1 pb-6 select-none ${d}`,children:[m&&C.jsxs("div",{className:"flex flex-col",children:[C.jsx("div",{className:"text-[11px] font-semibold text-[#cccccc] uppercase tracking-wider mb-2.5",children:"On this page"}),C.jsx("nav",{className:"flex flex-col pr-1",children:l.map(y=>{const v=a===y.id,k=y.level>2?(y.level-2)*14+4:0;return C.jsxs("button",{type:"button",onClick:()=>r(y.id),title:y.text,style:{paddingLeft:`${k}px`},className:`group relative text-left text-[13px] py-0.5 pr-1 whitespace-normal break-words cursor-pointer leading-[1.35] transition-none ${v?"text-[#ea580c] font-normal":"text-[#999999] hover:text-white font-normal"}`,children:[y.level>2&&Array.from({length:y.level-2}).map((M,N)=>C.jsx("span",{style:{left:`${N*14+3}px`},className:"absolute top-0 bottom-0 w-[1px] bg-[#333333] pointer-events-none"},N)),y.text]},y.id)})})]}),g&&C.jsxs("div",{className:`flex flex-col ${m?"mt-6":""}`,children:[C.jsx("div",{className:"text-[11px] font-semibold text-[#cccccc] uppercase tracking-wider mb-2.5",children:"Links to this page"}),C.jsx("nav",{className:"flex flex-col pr-1",children:s.map(y=>C.jsx("a",{href:`#docs/${y.slug||y.id}`,onClick:v=>{v.preventDefault(),c==null||c(y)},title:y.title,className:"text-left text-[13px] text-[#ea580c] hover:text-[#f97316] underline underline-offset-2 font-normal cursor-pointer py-0.5 pr-1 whitespace-normal break-words leading-[1.35] transition-none",children:y.title},y.id))})]})]})});z2.displayName="OnThisPageOutline";const k8=()=>{const l=le.useCallback((U,X=Ki)=>{var O;const K=U.toLowerCase();for(const V of X){if(((O=V.slug)==null?void 0:O.toLowerCase())===K||V.id.toLowerCase()===K)return V;if(V.children){const W=l(K,V.children);if(W)return W}}return null},[]),[a,r]=le.useState(()=>{const U=window.location.hash.toLowerCase();if(U.startsWith("#docs/")){const K=U.replace("#docs/","").split("#")[0],O=l(K);if(O)return O}return Ki[0]}),[s,c]=le.useState(!0),[d,m]=le.useState(!0),[g,y]=le.useState(""),v=le.useMemo(()=>x8(a.content||""),[a.content]),k=le.useMemo(()=>w8(a,Ki),[a]),M=le.useRef(null);le.useEffect(()=>{const U=window.location.hash.toLowerCase();if(U.startsWith("#docs/")){const K=U.replace("#docs/","").split("#");K.length>1&&K[1]&&setTimeout(()=>{const O=document.getElementById(K[1]);O&&O.scrollIntoView({behavior:"smooth"})},150)}},[]),le.useEffect(()=>{const U=()=>{var K,O;const X=window.location.hash.toLowerCase();if(X.startsWith("#docs/")){const V=X.replace("#docs/",""),[W,ce]=V.split("#"),re=l(W);re&&(r(re),ce?setTimeout(()=>{const ie=document.getElementById(ce);ie&&ie.scrollIntoView({behavior:"smooth"})},60):(K=M.current)==null||K.scrollTo({top:0,behavior:"instant"}))}else(!X||X==="#"||X==="#home")&&(r(Ki[0]),(O=M.current)==null||O.scrollTo({top:0,behavior:"instant"}))};return window.addEventListener("hashchange",U),()=>window.removeEventListener("hashchange",U)},[l]);const N=le.useCallback(U=>{var X;r(U),window.location.hash=`#docs/${U.slug||U.id}`,(X=M.current)==null||X.scrollTo({top:0,behavior:"instant"})},[]),q=le.useCallback(U=>{y(U);const X=document.getElementById(U);X&&X.scrollIntoView({behavior:"smooth"})},[]);return le.useEffect(()=>{const U=M.current;if(!U||v.length===0){y("");return}let X=null;const K=()=>{const W=U.getBoundingClientRect(),{scrollTop:ce,scrollHeight:re,clientHeight:ie}=U;if(ce+ie>=re-20){y(v[v.length-1].id);return}const ue=120;let Re=v[0].id;for(let Oe=0;Oe<v.length;Oe++){const Be=v[Oe],Je=document.getElementById(Be.id);if(!Je)continue;if(Je.getBoundingClientRect().top-W.top<=ue)Re=Be.id;else break}y(Re)},O=()=>{X===null&&(X=requestAnimationFrame(()=>{X=null,K()}))};K();const V=setTimeout(K,60);return U.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",O,{passive:!0}),()=>{X!==null&&cancelAnimationFrame(X),clearTimeout(V),U.removeEventListener("scroll",O),window.removeEventListener("resize",O)}},[v,a.id]),C.jsx("div",{ref:M,className:"w-full h-screen overflow-y-auto custom-scrollbar bg-[#151515] text-[#dadada] overscroll-none",children:C.jsxs("div",{className:"w-full flex items-start min-h-full justify-between px-4 sm:px-8 lg:pl-[124px] lg:pr-[6vw]",children:[s&&C.jsx(Hf,{nodes:Ki,activeDocId:a.id,onSelectDoc:N}),C.jsx(E2,{doc:a,allDocs:Ki,onSelectDoc:N}),d&&C.jsxs("aside",{className:"w-[260px] xl:w-[280px] shrink-0 sticky top-0 h-screen hidden lg:flex flex-col bg-transparent select-none pt-[35px] pb-6 overflow-hidden",children:[C.jsx(D2,{nodes:Ki,activeDocId:a.id,onSelectDoc:N}),C.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto custom-scrollbar mt-6",children:C.jsx(z2,{items:v,activeHeadingId:g,onSelectHeading:q,backlinks:k,onSelectDoc:N})})]})]})})},Rf=document.getElementById("root");Rf&&Q5.createRoot(Rf).render(C.jsx(tr.StrictMode,{children:C.jsx(k8,{})}));

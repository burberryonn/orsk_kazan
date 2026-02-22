(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))J(D);new MutationObserver(D=>{for(const U of D)if(U.type==="childList")for(const oe of U.addedNodes)oe.tagName==="LINK"&&oe.rel==="modulepreload"&&J(oe)}).observe(document,{childList:!0,subtree:!0});function h(D){const U={};return D.integrity&&(U.integrity=D.integrity),D.referrerPolicy&&(U.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?U.credentials="include":D.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function J(D){if(D.ep)return;D.ep=!0;const U=h(D);fetch(D.href,U)}})();var Co={exports:{}},xr={},_o={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Fd(){if(zu)return F;zu=1;var z=Symbol.for("react.element"),R=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),oe=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),me=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),b=Symbol.iterator;function Y(d){return d===null||typeof d!="object"?null:(d=b&&d[b]||d["@@iterator"],typeof d=="function"?d:null)}var Le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Re=Object.assign,X={};function k(d,g,I){this.props=d,this.context=g,this.refs=X,this.updater=I||Le}k.prototype.isReactComponent={},k.prototype.setState=function(d,g){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,g,"setState")},k.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function q(){}q.prototype=k.prototype;function Be(d,g,I){this.props=d,this.context=g,this.refs=X,this.updater=I||Le}var _e=Be.prototype=new q;_e.constructor=Be,Re(_e,k.prototype),_e.isPureReactComponent=!0;var Se=Array.isArray,tt=Object.prototype.hasOwnProperty,ze={current:null},Oe={key:!0,ref:!0,__self:!0,__source:!0};function Ye(d,g,I){var A,B={},H=null,G=null;if(g!=null)for(A in g.ref!==void 0&&(G=g.ref),g.key!==void 0&&(H=""+g.key),g)tt.call(g,A)&&!Oe.hasOwnProperty(A)&&(B[A]=g[A]);var $=arguments.length-2;if($===1)B.children=I;else if(1<$){for(var ne=Array($),We=0;We<$;We++)ne[We]=arguments[We+2];B.children=ne}if(d&&d.defaultProps)for(A in $=d.defaultProps,$)B[A]===void 0&&(B[A]=$[A]);return{$$typeof:z,type:d,key:H,ref:G,props:B,_owner:ze.current}}function _t(d,g){return{$$typeof:z,type:d.type,key:g,ref:d.ref,props:d.props,_owner:d._owner}}function yt(d){return typeof d=="object"&&d!==null&&d.$$typeof===z}function Yt(d){var g={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(I){return g[I]})}var dt=/\/+/g;function He(d,g){return typeof d=="object"&&d!==null&&d.key!=null?Yt(""+d.key):g.toString(36)}function nt(d,g,I,A,B){var H=typeof d;(H==="undefined"||H==="boolean")&&(d=null);var G=!1;if(d===null)G=!0;else switch(H){case"string":case"number":G=!0;break;case"object":switch(d.$$typeof){case z:case R:G=!0}}if(G)return G=d,B=B(G),d=A===""?"."+He(G,0):A,Se(B)?(I="",d!=null&&(I=d.replace(dt,"$&/")+"/"),nt(B,g,I,"",function(We){return We})):B!=null&&(yt(B)&&(B=_t(B,I+(!B.key||G&&G.key===B.key?"":(""+B.key).replace(dt,"$&/")+"/")+d)),g.push(B)),1;if(G=0,A=A===""?".":A+":",Se(d))for(var $=0;$<d.length;$++){H=d[$];var ne=A+He(H,$);G+=nt(H,g,I,ne,B)}else if(ne=Y(d),typeof ne=="function")for(d=ne.call(d),$=0;!(H=d.next()).done;)H=H.value,ne=A+He(H,$++),G+=nt(H,g,I,ne,B);else if(H==="object")throw g=String(d),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return G}function ft(d,g,I){if(d==null)return d;var A=[],B=0;return nt(d,A,"","",function(H){return g.call(I,H,B++)}),A}function Me(d){if(d._status===-1){var g=d._result;g=g(),g.then(function(I){(d._status===0||d._status===-1)&&(d._status=1,d._result=I)},function(I){(d._status===0||d._status===-1)&&(d._status=2,d._result=I)}),d._status===-1&&(d._status=0,d._result=g)}if(d._status===1)return d._result.default;throw d._result}var se={current:null},S={transition:null},O={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:S,ReactCurrentOwner:ze};function E(){throw Error("act(...) is not supported in production builds of React.")}return F.Children={map:ft,forEach:function(d,g,I){ft(d,function(){g.apply(this,arguments)},I)},count:function(d){var g=0;return ft(d,function(){g++}),g},toArray:function(d){return ft(d,function(g){return g})||[]},only:function(d){if(!yt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},F.Component=k,F.Fragment=h,F.Profiler=D,F.PureComponent=Be,F.StrictMode=J,F.Suspense=Q,F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,F.act=E,F.cloneElement=function(d,g,I){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var A=Re({},d.props),B=d.key,H=d.ref,G=d._owner;if(g!=null){if(g.ref!==void 0&&(H=g.ref,G=ze.current),g.key!==void 0&&(B=""+g.key),d.type&&d.type.defaultProps)var $=d.type.defaultProps;for(ne in g)tt.call(g,ne)&&!Oe.hasOwnProperty(ne)&&(A[ne]=g[ne]===void 0&&$!==void 0?$[ne]:g[ne])}var ne=arguments.length-2;if(ne===1)A.children=I;else if(1<ne){$=Array(ne);for(var We=0;We<ne;We++)$[We]=arguments[We+2];A.children=$}return{$$typeof:z,type:d.type,key:B,ref:H,props:A,_owner:G}},F.createContext=function(d){return d={$$typeof:oe,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:U,_context:d},d.Consumer=d},F.createElement=Ye,F.createFactory=function(d){var g=Ye.bind(null,d);return g.type=d,g},F.createRef=function(){return{current:null}},F.forwardRef=function(d){return{$$typeof:ae,render:d}},F.isValidElement=yt,F.lazy=function(d){return{$$typeof:fe,_payload:{_status:-1,_result:d},_init:Me}},F.memo=function(d,g){return{$$typeof:me,type:d,compare:g===void 0?null:g}},F.startTransition=function(d){var g=S.transition;S.transition={};try{d()}finally{S.transition=g}},F.unstable_act=E,F.useCallback=function(d,g){return se.current.useCallback(d,g)},F.useContext=function(d){return se.current.useContext(d)},F.useDebugValue=function(){},F.useDeferredValue=function(d){return se.current.useDeferredValue(d)},F.useEffect=function(d,g){return se.current.useEffect(d,g)},F.useId=function(){return se.current.useId()},F.useImperativeHandle=function(d,g,I){return se.current.useImperativeHandle(d,g,I)},F.useInsertionEffect=function(d,g){return se.current.useInsertionEffect(d,g)},F.useLayoutEffect=function(d,g){return se.current.useLayoutEffect(d,g)},F.useMemo=function(d,g){return se.current.useMemo(d,g)},F.useReducer=function(d,g,I){return se.current.useReducer(d,g,I)},F.useRef=function(d){return se.current.useRef(d)},F.useState=function(d){return se.current.useState(d)},F.useSyncExternalStore=function(d,g,I){return se.current.useSyncExternalStore(d,g,I)},F.useTransition=function(){return se.current.useTransition()},F.version="18.3.1",F}var Pu;function Oo(){return Pu||(Pu=1,_o.exports=Fd()),_o.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Ud(){if(Tu)return xr;Tu=1;var z=Oo(),R=Symbol.for("react.element"),h=Symbol.for("react.fragment"),J=Object.prototype.hasOwnProperty,D=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function oe(ae,Q,me){var fe,b={},Y=null,Le=null;me!==void 0&&(Y=""+me),Q.key!==void 0&&(Y=""+Q.key),Q.ref!==void 0&&(Le=Q.ref);for(fe in Q)J.call(Q,fe)&&!U.hasOwnProperty(fe)&&(b[fe]=Q[fe]);if(ae&&ae.defaultProps)for(fe in Q=ae.defaultProps,Q)b[fe]===void 0&&(b[fe]=Q[fe]);return{$$typeof:R,type:ae,key:Y,ref:Le,props:b,_owner:D.current}}return xr.Fragment=h,xr.jsx=oe,xr.jsxs=oe,xr}var Lu;function Ad(){return Lu||(Lu=1,Co.exports=Ud()),Co.exports}var s=Ad(),Ll={},zo={exports:{}},Ve={},Po={exports:{}},To={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Vd(){return Ru||(Ru=1,(function(z){function R(S,O){var E=S.length;S.push(O);e:for(;0<E;){var d=E-1>>>1,g=S[d];if(0<D(g,O))S[d]=O,S[E]=g,E=d;else break e}}function h(S){return S.length===0?null:S[0]}function J(S){if(S.length===0)return null;var O=S[0],E=S.pop();if(E!==O){S[0]=E;e:for(var d=0,g=S.length,I=g>>>1;d<I;){var A=2*(d+1)-1,B=S[A],H=A+1,G=S[H];if(0>D(B,E))H<g&&0>D(G,B)?(S[d]=G,S[H]=E,d=H):(S[d]=B,S[A]=E,d=A);else if(H<g&&0>D(G,E))S[d]=G,S[H]=E,d=H;else break e}}return O}function D(S,O){var E=S.sortIndex-O.sortIndex;return E!==0?E:S.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var U=performance;z.unstable_now=function(){return U.now()}}else{var oe=Date,ae=oe.now();z.unstable_now=function(){return oe.now()-ae}}var Q=[],me=[],fe=1,b=null,Y=3,Le=!1,Re=!1,X=!1,k=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,Be=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _e(S){for(var O=h(me);O!==null;){if(O.callback===null)J(me);else if(O.startTime<=S)J(me),O.sortIndex=O.expirationTime,R(Q,O);else break;O=h(me)}}function Se(S){if(X=!1,_e(S),!Re)if(h(Q)!==null)Re=!0,Me(tt);else{var O=h(me);O!==null&&se(Se,O.startTime-S)}}function tt(S,O){Re=!1,X&&(X=!1,q(Ye),Ye=-1),Le=!0;var E=Y;try{for(_e(O),b=h(Q);b!==null&&(!(b.expirationTime>O)||S&&!Yt());){var d=b.callback;if(typeof d=="function"){b.callback=null,Y=b.priorityLevel;var g=d(b.expirationTime<=O);O=z.unstable_now(),typeof g=="function"?b.callback=g:b===h(Q)&&J(Q),_e(O)}else J(Q);b=h(Q)}if(b!==null)var I=!0;else{var A=h(me);A!==null&&se(Se,A.startTime-O),I=!1}return I}finally{b=null,Y=E,Le=!1}}var ze=!1,Oe=null,Ye=-1,_t=5,yt=-1;function Yt(){return!(z.unstable_now()-yt<_t)}function dt(){if(Oe!==null){var S=z.unstable_now();yt=S;var O=!0;try{O=Oe(!0,S)}finally{O?He():(ze=!1,Oe=null)}}else ze=!1}var He;if(typeof Be=="function")He=function(){Be(dt)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ft=nt.port2;nt.port1.onmessage=dt,He=function(){ft.postMessage(null)}}else He=function(){k(dt,0)};function Me(S){Oe=S,ze||(ze=!0,He())}function se(S,O){Ye=k(function(){S(z.unstable_now())},O)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(S){S.callback=null},z.unstable_continueExecution=function(){Re||Le||(Re=!0,Me(tt))},z.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_t=0<S?Math.floor(1e3/S):5},z.unstable_getCurrentPriorityLevel=function(){return Y},z.unstable_getFirstCallbackNode=function(){return h(Q)},z.unstable_next=function(S){switch(Y){case 1:case 2:case 3:var O=3;break;default:O=Y}var E=Y;Y=O;try{return S()}finally{Y=E}},z.unstable_pauseExecution=function(){},z.unstable_requestPaint=function(){},z.unstable_runWithPriority=function(S,O){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var E=Y;Y=S;try{return O()}finally{Y=E}},z.unstable_scheduleCallback=function(S,O,E){var d=z.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?d+E:d):E=d,S){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=E+g,S={id:fe++,callback:O,priorityLevel:S,startTime:E,expirationTime:g,sortIndex:-1},E>d?(S.sortIndex=E,R(me,S),h(Q)===null&&S===h(me)&&(X?(q(Ye),Ye=-1):X=!0,se(Se,E-d))):(S.sortIndex=g,R(Q,S),Re||Le||(Re=!0,Me(tt))),S},z.unstable_shouldYield=Yt,z.unstable_wrapCallback=function(S){var O=Y;return function(){var E=Y;Y=O;try{return S.apply(this,arguments)}finally{Y=E}}}})(To)),To}var Ou;function Bd(){return Ou||(Ou=1,Po.exports=Vd()),Po.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function Hd(){if(Mu)return Ve;Mu=1;var z=Oo(),R=Bd();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J=new Set,D={};function U(e,t){oe(e,t),oe(e+"Capture",t)}function oe(e,t){for(D[e]=t,e=0;e<t.length;e++)J.add(t[e])}var ae=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Q=Object.prototype.hasOwnProperty,me=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fe={},b={};function Y(e){return Q.call(b,e)?!0:Q.call(fe,e)?!1:me.test(e)?b[e]=!0:(fe[e]=!0,!1)}function Le(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Re(e,t,n,r){if(t===null||typeof t>"u"||Le(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function X(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new X(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function Be(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(q,Be);k[t]=new X(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(q,Be);k[t]=new X(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(q,Be);k[t]=new X(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function _e(e,t,n,r){var l=k.hasOwnProperty(t)?k[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Re(t,n,l,r)&&(n=null),r||l===null?Y(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Se=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),ze=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),Ye=Symbol.for("react.strict_mode"),_t=Symbol.for("react.profiler"),yt=Symbol.for("react.provider"),Yt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),S=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,d;function g(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var I=!1;function A(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var l=m.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function B(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=A(e.type,!1),e;case 11:return e=A(e.type.render,!1),e;case 1:return e=A(e.type,!0),e;default:return""}}function H(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Oe:return"Fragment";case ze:return"Portal";case _t:return"Profiler";case Ye:return"StrictMode";case He:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yt:return(e.displayName||"Context")+".Consumer";case yt:return(e._context.displayName||"Context")+".Provider";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:H(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return H(e(t))}catch{}}return null}function G(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===Ye?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ne(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function We(e){var t=ne(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=We(e))}function Mo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ne(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Do(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Io(e,t){t=t.checked,t!=null&&_e(e,"checked",t,!1)}function Ol(e,t){Io(e,t);var n=$(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ml(e,t.type,$(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ml(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return E({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Mn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$(n)}}function Ao(e,t){var n=$(t.value),r=$(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,Ho=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bu=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Bu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function Wo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Qo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Wo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Hu=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(Hu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function Vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,cn=null,dn=null;function $o(e){if(e=lr(e)){if(typeof Bl!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Kr(t),Bl(e.stateNode,e.type,t))}}function Ko(e){cn?dn?dn.push(e):dn=[e]:cn=e}function qo(){if(cn){var e=cn,t=dn;if(dn=cn=null,$o(e),t)for(e=0;e<t.length;e++)$o(t[e])}}function Yo(e,t){return e(t)}function Xo(){}var Hl=!1;function Go(e,t,n){if(Hl)return e(t,n);Hl=!0;try{return Yo(e,t,n)}finally{Hl=!1,(cn!==null||dn!==null)&&(Xo(),qo())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=Kr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Wl=!1;if(ae)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{Wl=!1}function Wu(e,t,n,r,l,i,o,a,u){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(y){this.onError(y)}}var An=!1,jr=null,Er=!1,Ql=null,Qu={onError:function(e){An=!0,jr=e}};function $u(e,t,n,r,l,i,o,a,u){An=!1,jr=null,Wu.apply(Qu,arguments)}function Ku(e,t,n,r,l,i,o,a,u){if($u.apply(this,arguments),An){if(An){var m=jr;An=!1,jr=null}else throw Error(h(198));Er||(Er=!0,Ql=m)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jo(e){if(Xt(e)!==e)throw Error(h(188))}function qu(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Jo(l),e;if(i===r)return Jo(l),t;i=i.sibling}throw Error(h(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function bo(e){return e=qu(e),e!==null?ea(e):null}function ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ea(e);if(t!==null)return t;e=e.sibling}return null}var ta=R.unstable_scheduleCallback,na=R.unstable_cancelCallback,Yu=R.unstable_shouldYield,Xu=R.unstable_requestPaint,ce=R.unstable_now,Gu=R.unstable_getCurrentPriorityLevel,$l=R.unstable_ImmediatePriority,ra=R.unstable_UserBlockingPriority,Cr=R.unstable_NormalPriority,Zu=R.unstable_LowPriority,la=R.unstable_IdlePriority,_r=null,pt=null;function Ju(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(_r,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:tc,bu=Math.log,ec=Math.LN2;function tc(e){return e>>>=0,e===0?32:31-(bu(e)/ec|0)|0}var zr=64,Pr=4194304;function Vn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=Vn(a):(i&=o,i!==0&&(r=Vn(i)))}else o=n&~l,o!==0?r=Vn(o):i!==0&&(r=Vn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),l=1<<n,r|=e[n],t&=~l;return r}function nc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-rt(i),a=1<<o,u=l[o];u===-1?((a&n)===0||(a&r)!==0)&&(l[o]=nc(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ia(){var e=zr;return zr<<=1,(zr&4194240)===0&&(zr=64),e}function ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function lc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-rt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Yl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var K=0;function oa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var aa,Xl,sa,ua,ca,Gl=!1,Lr=[],zt=null,Pt=null,Tt=null,Hn=new Map,Wn=new Map,Lt=[],ic="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function da(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Qn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=lr(t),t!==null&&Xl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function oc(e,t,n,r,l){switch(t){case"focusin":return zt=Qn(zt,e,t,n,r,l),!0;case"dragenter":return Pt=Qn(Pt,e,t,n,r,l),!0;case"mouseover":return Tt=Qn(Tt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Hn.set(i,Qn(Hn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Wn.set(i,Qn(Wn.get(i)||null,e,t,n,r,l)),!0}return!1}function fa(e){var t=Gt(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=Zo(n),t!==null){e.blockedOn=t,ca(e.priority,function(){sa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Al=r,n.target.dispatchEvent(r),Al=null}else return t=lr(n),t!==null&&Xl(t),e.blockedOn=n,!1;t.shift()}return!0}function pa(e,t,n){Rr(e)&&n.delete(t)}function ac(){Gl=!1,zt!==null&&Rr(zt)&&(zt=null),Pt!==null&&Rr(Pt)&&(Pt=null),Tt!==null&&Rr(Tt)&&(Tt=null),Hn.forEach(pa),Wn.forEach(pa)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,R.unstable_scheduleCallback(R.unstable_NormalPriority,ac)))}function Kn(e){function t(l){return $n(l,e)}if(0<Lr.length){$n(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&$n(zt,e),Pt!==null&&$n(Pt,e),Tt!==null&&$n(Tt,e),Hn.forEach(t),Wn.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)fa(n),n.blockedOn===null&&Lt.shift()}var fn=Se.ReactCurrentBatchConfig,Or=!0;function sc(e,t,n,r){var l=K,i=fn.transition;fn.transition=null;try{K=1,Zl(e,t,n,r)}finally{K=l,fn.transition=i}}function uc(e,t,n,r){var l=K,i=fn.transition;fn.transition=null;try{K=4,Zl(e,t,n,r)}finally{K=l,fn.transition=i}}function Zl(e,t,n,r){if(Or){var l=Jl(e,t,n,r);if(l===null)hi(e,t,r,Mr,n),da(e,r);else if(oc(l,e,t,n,r))r.stopPropagation();else if(da(e,r),t&4&&-1<ic.indexOf(e)){for(;l!==null;){var i=lr(l);if(i!==null&&aa(i),i=Jl(e,t,n,r),i===null&&hi(e,t,r,Mr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else hi(e,t,r,null,n)}}var Mr=null;function Jl(e,t,n,r){if(Mr=null,e=Vl(r),e=Gt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mr=e,null}function ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gu()){case $l:return 1;case ra:return 4;case Cr:case Zu:return 16;case la:return 536870912;default:return 16}default:return 16}}var Rt=null,bl=null,Dr=null;function ha(){if(Dr)return Dr;var e,t=bl,n=t.length,r,l="value"in Rt?Rt.value:Rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function va(){return!1}function Qe(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fr:va,this.isPropagationStopped=va,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=Qe(pn),qn=E({},pn,{view:0,detail:0}),cc=Qe(qn),ti,ni,Yn,Ur=E({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(ti=e.screenX-Yn.screenX,ni=e.screenY-Yn.screenY):ni=ti=0,Yn=e),ti)},movementY:function(e){return"movementY"in e?e.movementY:ni}}),ga=Qe(Ur),dc=E({},Ur,{dataTransfer:0}),fc=Qe(dc),pc=E({},qn,{relatedTarget:0}),ri=Qe(pc),mc=E({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),hc=Qe(mc),vc=E({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gc=Qe(vc),yc=E({},pn,{data:0}),ya=Qe(yc),xc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kc[e])?!!t[e]:!1}function li(){return Sc}var Nc=E({},qn,{key:function(e){if(e.key){var t=xc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jc=Qe(Nc),Ec=E({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xa=Qe(Ec),Cc=E({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),_c=Qe(Cc),zc=E({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pc=Qe(zc),Tc=E({},Ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lc=Qe(Tc),Rc=[9,13,27,32],ii=ae&&"CompositionEvent"in window,Xn=null;ae&&"documentMode"in document&&(Xn=document.documentMode);var Oc=ae&&"TextEvent"in window&&!Xn,wa=ae&&(!ii||Xn&&8<Xn&&11>=Xn),ka=" ",Sa=!1;function Na(e,t){switch(e){case"keyup":return Rc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ja(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Mc(e,t){switch(e){case"compositionend":return ja(t);case"keypress":return t.which!==32?null:(Sa=!0,ka);case"textInput":return e=t.data,e===ka&&Sa?null:e;default:return null}}function Dc(e,t){if(mn)return e==="compositionend"||!ii&&Na(e,t)?(e=ha(),Dr=bl=Rt=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wa&&t.locale!=="ko"?null:t.data;default:return null}}var Ic={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ic[e.type]:t==="textarea"}function Ca(e,t,n,r){Ko(r),t=Wr(t,"onChange"),0<t.length&&(n=new ei("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Zn=null;function Fc(e){Qa(e,0)}function Ar(e){var t=xn(e);if(Mo(t))return e}function Uc(e,t){if(e==="change")return t}var _a=!1;if(ae){var oi;if(ae){var ai="oninput"in document;if(!ai){var za=document.createElement("div");za.setAttribute("oninput","return;"),ai=typeof za.oninput=="function"}oi=ai}else oi=!1;_a=oi&&(!document.documentMode||9<document.documentMode)}function Pa(){Gn&&(Gn.detachEvent("onpropertychange",Ta),Zn=Gn=null)}function Ta(e){if(e.propertyName==="value"&&Ar(Zn)){var t=[];Ca(t,Zn,e,Vl(e)),Go(Fc,t)}}function Ac(e,t,n){e==="focusin"?(Pa(),Gn=t,Zn=n,Gn.attachEvent("onpropertychange",Ta)):e==="focusout"&&Pa()}function Vc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ar(Zn)}function Bc(e,t){if(e==="click")return Ar(t)}function Hc(e,t){if(e==="input"||e==="change")return Ar(t)}function Wc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Wc;function Jn(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Q.call(t,l)||!lt(e[l],t[l]))return!1}return!0}function La(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ra(e,t){var n=La(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=La(n)}}function Oa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ma(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qc(e){var t=Ma(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Oa(n.ownerDocument.documentElement,n)){if(r!==null&&si(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ra(n,i);var o=Ra(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $c=ae&&"documentMode"in document&&11>=document.documentMode,hn=null,ui=null,bn=null,ci=!1;function Da(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ci||hn==null||hn!==Sr(r)||(r=hn,"selectionStart"in r&&si(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&Jn(bn,r)||(bn=r,r=Wr(ui,"onSelect"),0<r.length&&(t=new ei("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:Vr("Animation","AnimationEnd"),animationiteration:Vr("Animation","AnimationIteration"),animationstart:Vr("Animation","AnimationStart"),transitionend:Vr("Transition","TransitionEnd")},di={},Ia={};ae&&(Ia=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Br(e){if(di[e])return di[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ia)return di[e]=t[n];return e}var Fa=Br("animationend"),Ua=Br("animationiteration"),Aa=Br("animationstart"),Va=Br("transitionend"),Ba=new Map,Ha="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){Ba.set(e,t),U(t,[e])}for(var fi=0;fi<Ha.length;fi++){var pi=Ha[fi],Kc=pi.toLowerCase(),qc=pi[0].toUpperCase()+pi.slice(1);Ot(Kc,"on"+qc)}Ot(Fa,"onAnimationEnd"),Ot(Ua,"onAnimationIteration"),Ot(Aa,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Va,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),U("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),U("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),U("onBeforeInput",["compositionend","keypress","textInput","paste"]),U("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Wa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ku(r,t,void 0,e),e.currentTarget=null}function Qa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,m=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;Wa(l,a,m),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,m=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;Wa(l,a,m),i=u}}}if(Er)throw e=Ql,Er=!1,Ql=null,e}function ee(e,t){var n=t[ki];n===void 0&&(n=t[ki]=new Set);var r=e+"__bubble";n.has(r)||($a(t,e,2,!1),n.add(r))}function mi(e,t,n){var r=0;t&&(r|=4),$a(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Hr]){e[Hr]=!0,J.forEach(function(n){n!=="selectionchange"&&(Yc.has(n)||mi(n,!1,e),mi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,mi("selectionchange",!1,t))}}function $a(e,t,n,r){switch(ma(t)){case 1:var l=sc;break;case 4:l=uc;break;default:l=Zl}n=l.bind(null,t,n,e),l=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function hi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Gt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Go(function(){var m=i,y=Vl(n),x=[];e:{var v=Ba.get(e);if(v!==void 0){var N=ei,C=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":N=jc;break;case"focusin":C="focus",N=ri;break;case"focusout":C="blur",N=ri;break;case"beforeblur":case"afterblur":N=ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=fc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=_c;break;case Fa:case Ua:case Aa:N=hc;break;case Va:N=Pc;break;case"scroll":N=cc;break;case"wheel":N=Lc;break;case"copy":case"cut":case"paste":N=gc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=xa}var _=(t&4)!==0,de=!_&&e==="scroll",f=_?v!==null?v+"Capture":null:v;_=[];for(var c=m,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Fn(c,f),w!=null&&_.push(nr(c,w,p)))),de)break;c=c.return}0<_.length&&(v=new N(v,C,null,n,y),x.push({event:v,listeners:_}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",v&&n!==Al&&(C=n.relatedTarget||n.fromElement)&&(Gt(C)||C[xt]))break e;if((N||v)&&(v=y.window===y?y:(v=y.ownerDocument)?v.defaultView||v.parentWindow:window,N?(C=n.relatedTarget||n.toElement,N=m,C=C?Gt(C):null,C!==null&&(de=Xt(C),C!==de||C.tag!==5&&C.tag!==6)&&(C=null)):(N=null,C=m),N!==C)){if(_=ga,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=xa,w="onPointerLeave",f="onPointerEnter",c="pointer"),de=N==null?v:xn(N),p=C==null?v:xn(C),v=new _(w,c+"leave",N,n,y),v.target=de,v.relatedTarget=p,w=null,Gt(y)===m&&(_=new _(f,c+"enter",C,n,y),_.target=p,_.relatedTarget=de,w=_),de=w,N&&C)t:{for(_=N,f=C,c=0,p=_;p;p=gn(p))c++;for(p=0,w=f;w;w=gn(w))p++;for(;0<c-p;)_=gn(_),c--;for(;0<p-c;)f=gn(f),p--;for(;c--;){if(_===f||f!==null&&_===f.alternate)break t;_=gn(_),f=gn(f)}_=null}else _=null;N!==null&&Ka(x,v,N,_,!1),C!==null&&de!==null&&Ka(x,de,C,_,!0)}}e:{if(v=m?xn(m):window,N=v.nodeName&&v.nodeName.toLowerCase(),N==="select"||N==="input"&&v.type==="file")var P=Uc;else if(Ea(v))if(_a)P=Hc;else{P=Vc;var T=Ac}else(N=v.nodeName)&&N.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(P=Bc);if(P&&(P=P(e,m))){Ca(x,P,n,y);break e}T&&T(e,v,m),e==="focusout"&&(T=v._wrapperState)&&T.controlled&&v.type==="number"&&Ml(v,"number",v.value)}switch(T=m?xn(m):window,e){case"focusin":(Ea(T)||T.contentEditable==="true")&&(hn=T,ui=m,bn=null);break;case"focusout":bn=ui=hn=null;break;case"mousedown":ci=!0;break;case"contextmenu":case"mouseup":case"dragend":ci=!1,Da(x,n,y);break;case"selectionchange":if($c)break;case"keydown":case"keyup":Da(x,n,y)}var L;if(ii)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else mn?Na(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(wa&&n.locale!=="ko"&&(mn||M!=="onCompositionStart"?M==="onCompositionEnd"&&mn&&(L=ha()):(Rt=y,bl="value"in Rt?Rt.value:Rt.textContent,mn=!0)),T=Wr(m,M),0<T.length&&(M=new ya(M,e,null,n,y),x.push({event:M,listeners:T}),L?M.data=L:(L=ja(n),L!==null&&(M.data=L)))),(L=Oc?Mc(e,n):Dc(e,n))&&(m=Wr(m,"onBeforeInput"),0<m.length&&(y=new ya("onBeforeInput","beforeinput",null,n,y),x.push({event:y,listeners:m}),y.data=L))}Qa(x,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Fn(e,n),i!=null&&r.unshift(nr(e,i,l)),i=Fn(e,t),i!=null&&r.push(nr(e,i,l))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ka(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,m=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&m!==null&&(a=m,l?(u=Fn(n,i),u!=null&&o.unshift(nr(n,u,a))):l||(u=Fn(n,i),u!=null&&o.push(nr(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xc=/\r\n?/g,Gc=/\u0000|\uFFFD/g;function qa(e){return(typeof e=="string"?e:""+e).replace(Xc,`
`).replace(Gc,"")}function Qr(e,t,n){if(t=qa(t),qa(e)!==t&&n)throw Error(h(425))}function $r(){}var vi=null,gi=null;function yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout=="function"?setTimeout:void 0,Zc=typeof clearTimeout=="function"?clearTimeout:void 0,Ya=typeof Promise=="function"?Promise:void 0,Jc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ya<"u"?function(e){return Ya.resolve(null).then(e).catch(bc)}:xi;function bc(e){setTimeout(function(){throw e})}function wi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Kn(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),mt="__reactFiber$"+yn,rr="__reactProps$"+yn,xt="__reactContainer$"+yn,ki="__reactEvents$"+yn,ed="__reactListeners$"+yn,td="__reactHandles$"+yn;function Gt(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xa(e);e!==null;){if(n=e[mt])return n;e=Xa(e)}return t}e=n,n=e.parentNode}return null}function lr(e){return e=e[mt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Kr(e){return e[rr]||null}var Si=[],wn=-1;function Dt(e){return{current:e}}function te(e){0>wn||(e.current=Si[wn],Si[wn]=null,wn--)}function Z(e,t){wn++,Si[wn]=e.current,e.current=t}var It={},Ne=Dt(It),De=Dt(!1),Zt=It;function kn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ie(e){return e=e.childContextTypes,e!=null}function qr(){te(De),te(Ne)}function Ga(e,t,n){if(Ne.current!==It)throw Error(h(168));Z(Ne,t),Z(De,n)}function Za(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(h(108,G(e)||"Unknown",l));return E({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,Zt=Ne.current,Z(Ne,e),Z(De,De.current),!0}function Ja(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Za(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,te(De),te(Ne),Z(Ne,e)):te(De),Z(De,n)}var wt=null,Xr=!1,Ni=!1;function ba(e){wt===null?wt=[e]:wt.push(e)}function nd(e){Xr=!0,ba(e)}function Ft(){if(!Ni&&wt!==null){Ni=!0;var e=0,t=K;try{var n=wt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,Xr=!1}catch(l){throw wt!==null&&(wt=wt.slice(e+1)),ta($l,Ft),l}finally{K=t,Ni=!1}}return null}var Sn=[],Nn=0,Gr=null,Zr=0,Xe=[],Ge=0,Jt=null,kt=1,St="";function bt(e,t){Sn[Nn++]=Zr,Sn[Nn++]=Gr,Gr=e,Zr=t}function es(e,t,n){Xe[Ge++]=kt,Xe[Ge++]=St,Xe[Ge++]=Jt,Jt=e;var r=kt;e=St;var l=32-rt(r)-1;r&=~(1<<l),n+=1;var i=32-rt(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,kt=1<<32-rt(t)+l|n<<l|r,St=i+e}else kt=1<<i|n<<l|r,St=e}function ji(e){e.return!==null&&(bt(e,1),es(e,1,0))}function Ei(e){for(;e===Gr;)Gr=Sn[--Nn],Sn[Nn]=null,Zr=Sn[--Nn],Sn[Nn]=null;for(;e===Jt;)Jt=Xe[--Ge],Xe[Ge]=null,St=Xe[--Ge],Xe[Ge]=null,kt=Xe[--Ge],Xe[Ge]=null}var $e=null,Ke=null,re=!1,it=null;function ts(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ns(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Ke=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Ke=null,!0):!1;default:return!1}}function Ci(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(re){var t=Ke;if(t){var n=t;if(!ns(e,t)){if(Ci(e))throw Error(h(418));t=Mt(n.nextSibling);var r=$e;t&&ns(e,t)?ts(r,n):(e.flags=e.flags&-4097|2,re=!1,$e=e)}}else{if(Ci(e))throw Error(h(418));e.flags=e.flags&-4097|2,re=!1,$e=e}}}function rs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Jr(e){if(e!==$e)return!1;if(!re)return rs(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yi(e.type,e.memoizedProps)),t&&(t=Ke)){if(Ci(e))throw ls(),Error(h(418));for(;t;)ts(e,t),t=Mt(t.nextSibling)}if(rs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=$e?Mt(e.stateNode.nextSibling):null;return!0}function ls(){for(var e=Ke;e;)e=Mt(e.nextSibling)}function jn(){Ke=$e=null,re=!1}function zi(e){it===null?it=[e]:it.push(e)}var rd=Se.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function is(e){var t=e._init;return t(e._payload)}function os(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=$t(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,w){return c===null||c.tag!==6?(c=wo(p,f.mode,w),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,w){var P=p.type;return P===Oe?y(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Me&&is(P)===c.type)?(w=l(c,p.props),w.ref=ir(f,c,p),w.return=f,w):(w=Nl(p.type,p.key,p.props,null,f.mode,w),w.ref=ir(f,c,p),w.return=f,w)}function m(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ko(p,f.mode,w),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function y(f,c,p,w,P){return c===null||c.tag!==7?(c=sn(p,f.mode,w,P),c.return=f,c):(c=l(c,p),c.return=f,c)}function x(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case tt:return p=Nl(c.type,c.key,c.props,null,f.mode,p),p.ref=ir(f,null,c),p.return=f,p;case ze:return c=ko(c,f.mode,p),c.return=f,c;case Me:var w=c._init;return x(f,w(c._payload),p)}if(Mn(c)||O(c))return c=sn(c,f.mode,p,null),c.return=f,c;br(f,c)}return null}function v(f,c,p,w){var P=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return P!==null?null:a(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:return p.key===P?u(f,c,p,w):null;case ze:return p.key===P?m(f,c,p,w):null;case Me:return P=p._init,v(f,c,P(p._payload),w)}if(Mn(p)||O(p))return P!==null?null:y(f,c,p,w,null);br(f,p)}return null}function N(f,c,p,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(c,f,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case tt:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,P);case ze:return f=f.get(w.key===null?p:w.key)||null,m(c,f,w,P);case Me:var T=w._init;return N(f,c,p,T(w._payload),P)}if(Mn(w)||O(w))return f=f.get(p)||null,y(c,f,w,P,null);br(c,w)}return null}function C(f,c,p,w){for(var P=null,T=null,L=c,M=c=0,xe=null;L!==null&&M<p.length;M++){L.index>M?(xe=L,L=null):xe=L.sibling;var W=v(f,L,p[M],w);if(W===null){L===null&&(L=xe);break}e&&L&&W.alternate===null&&t(f,L),c=i(W,c,M),T===null?P=W:T.sibling=W,T=W,L=xe}if(M===p.length)return n(f,L),re&&bt(f,M),P;if(L===null){for(;M<p.length;M++)L=x(f,p[M],w),L!==null&&(c=i(L,c,M),T===null?P=L:T.sibling=L,T=L);return re&&bt(f,M),P}for(L=r(f,L);M<p.length;M++)xe=N(L,f,M,p[M],w),xe!==null&&(e&&xe.alternate!==null&&L.delete(xe.key===null?M:xe.key),c=i(xe,c,M),T===null?P=xe:T.sibling=xe,T=xe);return e&&L.forEach(function(Kt){return t(f,Kt)}),re&&bt(f,M),P}function _(f,c,p,w){var P=O(p);if(typeof P!="function")throw Error(h(150));if(p=P.call(p),p==null)throw Error(h(151));for(var T=P=null,L=c,M=c=0,xe=null,W=p.next();L!==null&&!W.done;M++,W=p.next()){L.index>M?(xe=L,L=null):xe=L.sibling;var Kt=v(f,L,W.value,w);if(Kt===null){L===null&&(L=xe);break}e&&L&&Kt.alternate===null&&t(f,L),c=i(Kt,c,M),T===null?P=Kt:T.sibling=Kt,T=Kt,L=xe}if(W.done)return n(f,L),re&&bt(f,M),P;if(L===null){for(;!W.done;M++,W=p.next())W=x(f,W.value,w),W!==null&&(c=i(W,c,M),T===null?P=W:T.sibling=W,T=W);return re&&bt(f,M),P}for(L=r(f,L);!W.done;M++,W=p.next())W=N(L,f,M,W.value,w),W!==null&&(e&&W.alternate!==null&&L.delete(W.key===null?M:W.key),c=i(W,c,M),T===null?P=W:T.sibling=W,T=W);return e&&L.forEach(function(Id){return t(f,Id)}),re&&bt(f,M),P}function de(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Oe&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case tt:e:{for(var P=p.key,T=c;T!==null;){if(T.key===P){if(P=p.type,P===Oe){if(T.tag===7){n(f,T.sibling),c=l(T,p.props.children),c.return=f,f=c;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Me&&is(P)===T.type){n(f,T.sibling),c=l(T,p.props),c.ref=ir(f,T,p),c.return=f,f=c;break e}n(f,T);break}else t(f,T);T=T.sibling}p.type===Oe?(c=sn(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Nl(p.type,p.key,p.props,null,f.mode,w),w.ref=ir(f,c,p),w.return=f,f=w)}return o(f);case ze:e:{for(T=p.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ko(p,f.mode,w),c.return=f,f=c}return o(f);case Me:return T=p._init,de(f,c,T(p._payload),w)}if(Mn(p))return C(f,c,p,w);if(O(p))return _(f,c,p,w);br(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=wo(p,f.mode,w),c.return=f,f=c),o(f)):n(f,c)}return de}var En=os(!0),as=os(!1),el=Dt(null),tl=null,Cn=null,Pi=null;function Ti(){Pi=Cn=tl=null}function Li(e){var t=el.current;te(el),e._currentValue=t}function Ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){tl=e,Pi=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fe=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(Pi!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(tl===null)throw Error(h(308));Cn=e,tl.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var en=null;function Oi(e){en===null?en=[e]:en.push(e)}function ss(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Oi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Nt(e,n)}return l=r.interleaved,l===null?(t.next=t,Oi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Nt(e,n)}function nl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yl(e,n)}}function cs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var l=e.updateQueue;Ut=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,m=u.next;u.next=null,o===null?i=m:o.next=m,o=u;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==o&&(a===null?y.firstBaseUpdate=m:a.next=m,y.lastBaseUpdate=u))}if(i!==null){var x=l.baseState;o=0,y=m=u=null,a=i;do{var v=a.lane,N=a.eventTime;if((r&v)===v){y!==null&&(y=y.next={eventTime:N,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=e,_=a;switch(v=t,N=n,_.tag){case 1:if(C=_.payload,typeof C=="function"){x=C.call(N,x,v);break e}x=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=_.payload,v=typeof C=="function"?C.call(N,x,v):C,v==null)break e;x=E({},x,v);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[a]:v.push(a))}else N={eventTime:N,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(m=y=N,u=x):y=y.next=N,o|=v;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;v=a,a=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);if(y===null&&(u=x),l.baseState=u,l.firstBaseUpdate=m,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);rn|=o,e.lanes=o,e.memoizedState=x}}function ds(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var or={},ht=Dt(or),ar=Dt(or),sr=Dt(or);function tn(e){if(e===or)throw Error(h(174));return e}function Di(e,t){switch(Z(sr,t),Z(ar,e),Z(ht,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Il(t,e)}te(ht),Z(ht,t)}function zn(){te(ht),te(ar),te(sr)}function fs(e){tn(sr.current);var t=tn(ht.current),n=Il(t,e.type);t!==n&&(Z(ar,e),Z(ht,n))}function Ii(e){ar.current===e&&(te(ht),te(ar))}var le=Dt(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fi=[];function Ui(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var il=Se.ReactCurrentDispatcher,Ai=Se.ReactCurrentBatchConfig,nn=0,ie=null,he=null,ge=null,ol=!1,ur=!1,cr=0,ld=0;function je(){throw Error(h(321))}function Vi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Bi(e,t,n,r,l,i){if(nn=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,il.current=e===null||e.memoizedState===null?sd:ud,e=n(r,l),ur){i=0;do{if(ur=!1,cr=0,25<=i)throw Error(h(301));i+=1,ge=he=null,t.updateQueue=null,il.current=cd,e=n(r,l)}while(ur)}if(il.current=ul,t=he!==null&&he.next!==null,nn=0,ge=he=ie=null,ol=!1,t)throw Error(h(300));return e}function Hi(){var e=cr!==0;return cr=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function Je(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,he=e;else{if(e===null)throw Error(h(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function dr(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=Je(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=he,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,m=i;do{var y=m.lane;if((nn&y)===y)u!==null&&(u=u.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var x={lane:y,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};u===null?(a=u=x,o=r):u=u.next=x,ie.lanes|=y,rn|=y}m=m.next}while(m!==null&&m!==i);u===null?o=r:u.next=a,lt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ie.lanes|=i,rn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=Je(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);lt(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ps(){}function ms(e,t){var n=ie,r=Je(),l=t(),i=!lt(r.memoizedState,l);if(i&&(r.memoizedState=l,Fe=!0),r=r.queue,$i(gs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,fr(9,vs.bind(null,n,r,l,t),void 0,null),ye===null)throw Error(h(349));(nn&30)!==0||hs(n,t,l)}return l}function hs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vs(e,t,n,r){t.value=n,t.getSnapshot=r,ys(t)&&xs(e)}function gs(e,t,n){return n(function(){ys(t)&&xs(e)})}function ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function xs(e){var t=Nt(e,1);t!==null&&ut(t,e,1,-1)}function ws(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=ad.bind(null,ie,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ks(){return Je().memoizedState}function al(e,t,n,r){var l=vt();ie.flags|=e,l.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=Je();r=r===void 0?null:r;var i=void 0;if(he!==null){var o=he.memoizedState;if(i=o.destroy,r!==null&&Vi(r,o.deps)){l.memoizedState=fr(t,n,i,r);return}}ie.flags|=e,l.memoizedState=fr(1|t,n,i,r)}function Ss(e,t){return al(8390656,8,e,t)}function $i(e,t){return sl(2048,8,e,t)}function Ns(e,t){return sl(4,2,e,t)}function js(e,t){return sl(4,4,e,t)}function Es(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cs(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,Es.bind(null,t,e),n)}function Ki(){}function _s(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zs(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ps(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n):(lt(n,t)||(n=ia(),ie.lanes|=n,rn|=n,e.baseState=!0),t)}function id(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Ai.transition;Ai.transition={};try{e(!1),t()}finally{K=n,Ai.transition=r}}function Ts(){return Je().memoizedState}function od(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e))Rs(t,n);else if(n=ss(e,t,n,r),n!==null){var l=Te();ut(n,e,r,l),Os(n,t,r)}}function ad(e,t,n){var r=Wt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,lt(a,o)){var u=t.interleaved;u===null?(l.next=l,Oi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ss(e,t,l,r),n!==null&&(l=Te(),ut(n,e,r,l),Os(n,t,r))}}function Ls(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Rs(e,t){ur=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Os(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yl(e,n)}}var ul={readContext:Ze,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},sd={readContext:Ze,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Ss,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,al(4194308,4,Es.bind(null,t,e),n)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=od.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:ws,useDebugValue:Ki,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=ws(!1),t=e[0];return e=id.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,l=vt();if(re){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),ye===null)throw Error(h(349));(nn&30)!==0||hs(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ss(gs.bind(null,r,i,e),[e]),r.flags|=2048,fr(9,vs.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vt(),t=ye.identifierPrefix;if(re){var n=St,r=kt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ld++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ud={readContext:Ze,useCallback:_s,useContext:Ze,useEffect:$i,useImperativeHandle:Cs,useInsertionEffect:Ns,useLayoutEffect:js,useMemo:zs,useReducer:Wi,useRef:ks,useState:function(){return Wi(dr)},useDebugValue:Ki,useDeferredValue:function(e){var t=Je();return Ps(t,he.memoizedState,e)},useTransition:function(){var e=Wi(dr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:ps,useSyncExternalStore:ms,useId:Ts,unstable_isNewReconciler:!1},cd={readContext:Ze,useCallback:_s,useContext:Ze,useEffect:$i,useImperativeHandle:Cs,useInsertionEffect:Ns,useLayoutEffect:js,useMemo:zs,useReducer:Qi,useRef:ks,useState:function(){return Qi(dr)},useDebugValue:Ki,useDeferredValue:function(e){var t=Je();return he===null?t.memoizedState=e:Ps(t,he.memoizedState,e)},useTransition:function(){var e=Qi(dr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:ps,useSyncExternalStore:ms,useId:Ts,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=E({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function qi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),l=Wt(e),i=jt(r,l);i.payload=t,n!=null&&(i.callback=n),t=At(e,i,l),t!==null&&(ut(t,e,l,r),nl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),l=Wt(e),i=jt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=At(e,i,l),t!==null&&(ut(t,e,l,r),nl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Wt(e),l=jt(n,r);l.tag=2,t!=null&&(l.callback=t),t=At(e,l,r),t!==null&&(ut(t,e,r,n),nl(t,e,r))}};function Ms(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(l,i):!0}function Ds(e,t,n){var r=!1,l=It,i=t.contextType;return typeof i=="object"&&i!==null?i=Ze(i):(l=Ie(t)?Zt:Ne.current,r=t.contextTypes,i=(r=r!=null)?kn(e,l):It),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Is(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Yi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Mi(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ze(i):(i=Ie(t)?Zt:Ne.current,l.context=kn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(qi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&cl.enqueueReplaceState(l,l.state,null),rl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Pn(e,t){try{var n="",r=t;do n+=B(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Xi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dd=typeof WeakMap=="function"?WeakMap:Map;function Fs(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gl||(gl=!0,fo=r),Gi(e,t)},n}function Us(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Gi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Gi(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function As(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ed.bind(null,e,t,n),t.then(e,e))}function Vs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bs(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var fd=Se.ReactCurrentOwner,Fe=!1;function Pe(e,t,n,r){t.child=e===null?as(t,null,n,r):En(t,e.child,n,r)}function Hs(e,t,n,r,l){n=n.render;var i=t.ref;return _n(t,l),r=Bi(e,t,n,r,i,l),n=Hi(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(re&&n&&ji(t),t.flags|=1,Pe(e,t,r,l),t.child)}function Ws(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!xo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Qs(e,t,i,r,l)):(e=Nl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(o,r)&&e.ref===t.ref)return Et(e,t,l)}return t.flags|=1,e=$t(i,r),e.ref=t.ref,e.return=t,t.child=e}function Qs(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Jn(i,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,Et(e,t,l)}return Zi(e,t,n,r,l)}function $s(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Ln,qe),qe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Ln,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Ln,qe),qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Ln,qe),qe|=r;return Pe(e,t,l,n),t.child}function Ks(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zi(e,t,n,r,l){var i=Ie(n)?Zt:Ne.current;return i=kn(t,i),_n(t,l),n=Bi(e,t,n,r,i,l),r=Hi(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(re&&r&&ji(t),t.flags|=1,Pe(e,t,n,l),t.child)}function qs(e,t,n,r,l){if(Ie(n)){var i=!0;Yr(t)}else i=!1;if(_n(t,l),t.stateNode===null)fl(e,t),Ds(t,n,r),Yi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,m=n.contextType;typeof m=="object"&&m!==null?m=Ze(m):(m=Ie(n)?Zt:Ne.current,m=kn(t,m));var y=n.getDerivedStateFromProps,x=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==m)&&Is(t,o,r,m),Ut=!1;var v=t.memoizedState;o.state=v,rl(t,r,o,l),u=t.memoizedState,a!==r||v!==u||De.current||Ut?(typeof y=="function"&&(qi(t,n,y,r),u=t.memoizedState),(a=Ut||Ms(t,n,a,r,v,u,m))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=m,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,us(e,t),a=t.memoizedProps,m=t.type===t.elementType?a:ot(t.type,a),o.props=m,x=t.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ze(u):(u=Ie(n)?Zt:Ne.current,u=kn(t,u));var N=n.getDerivedStateFromProps;(y=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==x||v!==u)&&Is(t,o,r,u),Ut=!1,v=t.memoizedState,o.state=v,rl(t,r,o,l);var C=t.memoizedState;a!==x||v!==C||De.current||Ut?(typeof N=="function"&&(qi(t,n,N,r),C=t.memoizedState),(m=Ut||Ms(t,n,m,r,v,C,u)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),o.props=r,o.state=C,o.context=u,r=m):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Ji(e,t,n,r,i,l)}function Ji(e,t,n,r,l,i){Ks(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ja(t,n,!1),Et(e,t,i);r=t.stateNode,fd.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=En(t,e.child,null,i),t.child=En(t,null,a,i)):Pe(e,t,a,i),t.memoizedState=r.state,l&&Ja(t,n,!0),t.child}function Ys(e){var t=e.stateNode;t.pendingContext?Ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ga(e,t.context,!1),Di(e,t.containerInfo)}function Xs(e,t,n,r,l){return jn(),zi(l),t.flags|=256,Pe(e,t,n,r),t.child}var bi={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gs(e,t,n){var r=t.pendingProps,l=le.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Z(le,l&1),e===null)return _i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=jl(o,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=eo(n),t.memoizedState=bi,e):to(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return pd(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=$t(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=$t(a,i):(i=sn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?eo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=bi,r}return i=e.child,e=i.sibling,r=$t(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function to(e,t){return t=jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dl(e,t,n,r){return r!==null&&zi(r),En(t,e.child,null,n),e=to(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pd(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Xi(Error(h(422))),dl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=jl({mode:"visible",children:r.children},l,0,null),i=sn(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&En(t,e.child,null,o),t.child.memoizedState=eo(o),t.memoizedState=bi,i);if((t.mode&1)===0)return dl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(h(419)),r=Xi(i,r,void 0),dl(e,t,o,r)}if(a=(o&e.childLanes)!==0,Fe||a){if(r=ye,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Nt(e,l),ut(r,e,l,-1))}return yo(),r=Xi(Error(h(421))),dl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Cd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ke=Mt(l.nextSibling),$e=t,re=!0,it=null,e!==null&&(Xe[Ge++]=kt,Xe[Ge++]=St,Xe[Ge++]=Jt,kt=e.id,St=e.overflow,Jt=t),t=to(t,r.children),t.flags|=4096,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ri(e.return,t,n)}function no(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Js(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Pe(e,t,r.children,n),r=le.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(le,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),no(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ll(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}no(t,!0,n,null,i);break;case"together":no(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function md(e,t,n){switch(t.tag){case 3:Ys(t),jn();break;case 5:fs(t);break;case 1:Ie(t.type)&&Yr(t);break;case 4:Di(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;Z(el,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(le,le.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gs(e,t,n):(Z(le,le.current&1),e=Et(e,t,n),e!==null?e.sibling:null);Z(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Js(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,$s(e,t,n)}return Et(e,t,n)}var bs,ro,eu,tu;bs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ro=function(){},eu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,tn(ht.current);var i=null;switch(n){case"input":l=Rl(e,l),r=Rl(e,r),i=[];break;case"select":l=E({},l,{value:void 0}),r=E({},r,{value:void 0}),i=[];break;case"textarea":l=Dl(e,l),r=Dl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}Fl(n,r);var o;n=null;for(m in l)if(!r.hasOwnProperty(m)&&l.hasOwnProperty(m)&&l[m]!=null)if(m==="style"){var a=l[m];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(D.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in r){var u=r[m];if(a=l?.[m],r.hasOwnProperty(m)&&u!==a&&(u!=null||a!=null))if(m==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(m,n)),n=u;else m==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(m,u)):m==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(m,""+u):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(D.hasOwnProperty(m)?(u!=null&&m==="onScroll"&&ee("scroll",e),i||a===u||(i=[])):(i=i||[]).push(m,u))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}},tu=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hd(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ie(t.type)&&qr(),Ee(t),null;case 3:return r=t.stateNode,zn(),te(De),te(Ne),Ui(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(ho(it),it=null))),ro(e,t),Ee(t),null;case 5:Ii(t);var l=tn(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)eu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Ee(t),null}if(e=tn(ht.current),Jr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[rr]=i,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(l=0;l<er.length;l++)ee(er[l],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Do(r,i),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ee("invalid",r);break;case"textarea":Uo(r,i),ee("invalid",r)}Fl(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,a,e),l=["children",""+a]):D.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":kr(r),Fo(r,i,!0);break;case"textarea":kr(r),Vo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$r)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[mt]=t,e[rr]=r,bs(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ul(n,r),n){case"dialog":ee("cancel",e),ee("close",e),l=r;break;case"iframe":case"object":case"embed":ee("load",e),l=r;break;case"video":case"audio":for(l=0;l<er.length;l++)ee(er[l],e);l=r;break;case"source":ee("error",e),l=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),l=r;break;case"details":ee("toggle",e),l=r;break;case"input":Do(e,r),l=Rl(e,r),ee("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=E({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Uo(e,r),l=Dl(e,r),ee("invalid",e);break;default:l=r}Fl(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Qo(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ho(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(D.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ee("scroll",e):u!=null&&_e(e,i,u,o))}switch(n){case"input":kr(e),Fo(e,r,!1);break;case"textarea":kr(e),Vo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)tu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=tn(sr.current),tn(ht.current),Jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Ee(t),null;case 13:if(te(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ke!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ls(),jn(),t.flags|=98560,i=!1;else if(i=Jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[mt]=t}else jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else it!==null&&(ho(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(le.current&1)!==0?ve===0&&(ve=3):yo())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return zn(),ro(e,t),e===null&&tr(t.stateNode.containerInfo),Ee(t),null;case 10:return Li(t.type._context),Ee(t),null;case 17:return Ie(t.type)&&qr(),Ee(t),null;case 19:if(te(le),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)pr(i,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ll(e),o!==null){for(t.flags|=128,pr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>Rn&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ll(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!re)return Ee(t),null}else 2*ce()-i.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=le.current,Z(le,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return go(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(qe&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function vd(e,t){switch(Ei(t),t.tag){case 1:return Ie(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),te(De),te(Ne),Ui(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ii(t),null;case 13:if(te(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(le),null;case 4:return zn(),null;case 10:return Li(t.type._context),null;case 22:case 23:return go(),null;case 24:return null;default:return null}}var pl=!1,Ce=!1,gd=typeof WeakSet=="function"?WeakSet:Set,j=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function lo(e,t,n){try{n()}catch(r){ue(e,t,r)}}var nu=!1;function yd(e,t){if(vi=Or,e=Ma(),si(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,m=0,y=0,x=e,v=null;t:for(;;){for(var N;x!==n||l!==0&&x.nodeType!==3||(a=o+l),x!==i||r!==0&&x.nodeType!==3||(u=o+r),x.nodeType===3&&(o+=x.nodeValue.length),(N=x.firstChild)!==null;)v=x,x=N;for(;;){if(x===e)break t;if(v===n&&++m===l&&(a=o),v===i&&++y===r&&(u=o),(N=x.nextSibling)!==null)break;x=v,v=x.parentNode}x=N}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},Or=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var C=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var _=C.memoizedProps,de=C.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?_:ot(t.type,_),de);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){ue(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return C=nu,nu=!1,C}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&lo(t,n,i)}l=l.next}while(l!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function io(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ru(e){var t=e.alternate;t!==null&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[rr],delete t[ki],delete t[ed],delete t[td])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lu(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}function ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}var we=null,at=!1;function Vt(e,t,n){for(n=n.child;n!==null;)ou(e,t,n),n=n.sibling}function ou(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(_r,n)}catch{}switch(n.tag){case 5:Ce||Tn(n,t);case 6:var r=we,l=at;we=null,Vt(e,t,n),we=r,at=l,we!==null&&(at?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(at?(e=we,n=n.stateNode,e.nodeType===8?wi(e.parentNode,n):e.nodeType===1&&wi(e,n),Kn(e)):wi(we,n.stateNode));break;case 4:r=we,l=at,we=n.stateNode.containerInfo,at=!0,Vt(e,t,n),we=r,at=l;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&lo(n,t,o),l=l.next}while(l!==r)}Vt(e,t,n);break;case 1:if(!Ce&&(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,t,a)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Vt(e,t,n),Ce=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gd),t.forEach(function(r){var l=_d.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,at=!1;break e;case 3:we=a.stateNode.containerInfo,at=!0;break e;case 4:we=a.stateNode.containerInfo,at=!0;break e}a=a.return}if(we===null)throw Error(h(160));ou(i,o,l),we=null,at=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(m){ue(l,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)su(t,e),t=t.sibling}function su(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),gt(e),r&4){try{mr(3,e,e.return),ml(3,e)}catch(_){ue(e,e.return,_)}try{mr(5,e,e.return)}catch(_){ue(e,e.return,_)}}break;case 1:st(t,e),gt(e),r&512&&n!==null&&Tn(n,n.return);break;case 5:if(st(t,e),gt(e),r&512&&n!==null&&Tn(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(_){ue(e,e.return,_)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Io(l,i),Ul(a,o);var m=Ul(a,i);for(o=0;o<u.length;o+=2){var y=u[o],x=u[o+1];y==="style"?Qo(l,x):y==="dangerouslySetInnerHTML"?Ho(l,x):y==="children"?Dn(l,x):_e(l,y,x,m)}switch(a){case"input":Ol(l,i);break;case"textarea":Ao(l,i);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?un(l,!!i.multiple,N,!1):v!==!!i.multiple&&(i.defaultValue!=null?un(l,!!i.multiple,i.defaultValue,!0):un(l,!!i.multiple,i.multiple?[]:"",!1))}l[rr]=i}catch(_){ue(e,e.return,_)}}break;case 6:if(st(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(_){ue(e,e.return,_)}}break;case 3:if(st(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(_){ue(e,e.return,_)}break;case 4:st(t,e),gt(e);break;case 13:st(t,e),gt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(co=ce())),r&4&&au(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(m=Ce)||y,st(t,e),Ce=m):st(t,e),gt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!y&&(e.mode&1)!==0)for(j=e,y=e.child;y!==null;){for(x=j=y;j!==null;){switch(v=j,N=v.child,v.tag){case 0:case 11:case 14:case 15:mr(4,v,v.return);break;case 1:Tn(v,v.return);var C=v.stateNode;if(typeof C.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(_){ue(r,n,_)}}break;case 5:Tn(v,v.return);break;case 22:if(v.memoizedState!==null){du(x);continue}}N!==null?(N.return=v,j=N):du(x)}y=y.sibling}e:for(y=null,x=e;;){if(x.tag===5){if(y===null){y=x;try{l=x.stateNode,m?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=x.stateNode,u=x.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Wo("display",o))}catch(_){ue(e,e.return,_)}}}else if(x.tag===6){if(y===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(_){ue(e,e.return,_)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;y===x&&(y=null),x=x.return}y===x&&(y=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:st(t,e),gt(e),r&4&&au(e);break;case 21:break;default:st(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lu(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var i=iu(e);ao(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=iu(e);oo(e,a,o);break;default:throw Error(h(161))}}catch(u){ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xd(e,t,n){j=e,uu(e)}function uu(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||pl;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||Ce;a=pl;var m=Ce;if(pl=o,(Ce=u)&&!m)for(j=l;j!==null;)o=j,u=o.child,o.tag===22&&o.memoizedState!==null?fu(l):u!==null?(u.return=o,j=u):fu(l);for(;i!==null;)j=i,uu(i),i=i.sibling;j=l,pl=a,Ce=m}cu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,j=i):cu(e)}}function cu(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ce||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ds(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ds(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var y=m.memoizedState;if(y!==null){var x=y.dehydrated;x!==null&&Kn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Ce||t.flags&512&&io(t)}catch(v){ue(t,t.return,v)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function du(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function fu(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(u){ue(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){ue(t,l,u)}}var i=t.return;try{io(t)}catch(u){ue(t,i,u)}break;case 5:var o=t.return;try{io(t)}catch(u){ue(t,o,u)}}}catch(u){ue(t,t.return,u)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var wd=Math.ceil,hl=Se.ReactCurrentDispatcher,so=Se.ReactCurrentOwner,be=Se.ReactCurrentBatchConfig,V=0,ye=null,pe=null,ke=0,qe=0,Ln=Dt(0),ve=0,hr=null,rn=0,vl=0,uo=0,vr=null,Ue=null,co=0,Rn=1/0,Ct=null,gl=!1,fo=null,Bt=null,yl=!1,Ht=null,xl=0,gr=0,po=null,wl=-1,kl=0;function Te(){return(V&6)!==0?ce():wl!==-1?wl:wl=ce()}function Wt(e){return(e.mode&1)===0?1:(V&2)!==0&&ke!==0?ke&-ke:rd.transition!==null?(kl===0&&(kl=ia()),kl):(e=K,e!==0||(e=window.event,e=e===void 0?16:ma(e.type)),e)}function ut(e,t,n,r){if(50<gr)throw gr=0,po=null,Error(h(185));Bn(e,n,r),((V&2)===0||e!==ye)&&(e===ye&&((V&2)===0&&(vl|=n),ve===4&&Qt(e,ke)),Ae(e,r),n===1&&V===0&&(t.mode&1)===0&&(Rn=ce()+500,Xr&&Ft()))}function Ae(e,t){var n=e.callbackNode;rc(e,t);var r=Tr(e,e===ye?ke:0);if(r===0)n!==null&&na(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&na(n),t===1)e.tag===0?nd(mu.bind(null,e)):ba(mu.bind(null,e)),Jc(function(){(V&6)===0&&Ft()}),n=null;else{switch(oa(r)){case 1:n=$l;break;case 4:n=ra;break;case 16:n=Cr;break;case 536870912:n=la;break;default:n=Cr}n=Su(n,pu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pu(e,t){if(wl=-1,kl=0,(V&6)!==0)throw Error(h(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=Tr(e,e===ye?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Sl(e,r);else{t=r;var l=V;V|=2;var i=vu();(ye!==e||ke!==t)&&(Ct=null,Rn=ce()+500,on(e,t));do try{Nd();break}catch(a){hu(e,a)}while(!0);Ti(),hl.current=i,V=l,pe!==null?t=0:(ye=null,ke=0,t=ve)}if(t!==0){if(t===2&&(l=Kl(e),l!==0&&(r=l,t=mo(e,l))),t===1)throw n=hr,on(e,0),Qt(e,r),Ae(e,ce()),n;if(t===6)Qt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!kd(l)&&(t=Sl(e,r),t===2&&(i=Kl(e),i!==0&&(r=i,t=mo(e,i))),t===1))throw n=hr,on(e,0),Qt(e,r),Ae(e,ce()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:an(e,Ue,Ct);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=co+500-ce(),10<t)){if(Tr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=xi(an.bind(null,e,Ue,Ct),t);break}an(e,Ue,Ct);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-rt(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wd(r/1960))-r,10<r){e.timeoutHandle=xi(an.bind(null,e,Ue,Ct),r);break}an(e,Ue,Ct);break;case 5:an(e,Ue,Ct);break;default:throw Error(h(329))}}}return Ae(e,ce()),e.callbackNode===n?pu.bind(null,e):null}function mo(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Sl(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&ho(t)),e}function ho(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function kd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!lt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~uo,t&=~vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function mu(e){if((V&6)!==0)throw Error(h(327));On();var t=Tr(e,0);if((t&1)===0)return Ae(e,ce()),null;var n=Sl(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=mo(e,r))}if(n===1)throw n=hr,on(e,0),Qt(e,t),Ae(e,ce()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Ue,Ct),Ae(e,ce()),null}function vo(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Rn=ce()+500,Xr&&Ft())}}function ln(e){Ht!==null&&Ht.tag===0&&(V&6)===0&&On();var t=V;V|=1;var n=be.transition,r=K;try{if(be.transition=null,K=1,e)return e()}finally{K=r,be.transition=n,V=t,(V&6)===0&&Ft()}}function go(){qe=Ln.current,te(Ln)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zc(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:zn(),te(De),te(Ne),Ui();break;case 5:Ii(r);break;case 4:zn();break;case 13:te(le);break;case 19:te(le);break;case 10:Li(r.type._context);break;case 22:case 23:go()}n=n.return}if(ye=e,pe=e=$t(e.current,null),ke=qe=t,ve=0,hr=null,uo=vl=rn=0,Ue=vr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}en=null}return e}function hu(e,t){do{var n=pe;try{if(Ti(),il.current=ul,ol){for(var r=ie.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ol=!1}if(nn=0,ge=he=ie=null,ur=!1,cr=0,so.current=null,n===null||n.return===null){ve=1,hr=t,pe=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=ke,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var m=u,y=a,x=y.tag;if((y.mode&1)===0&&(x===0||x===11||x===15)){var v=y.alternate;v?(y.updateQueue=v.updateQueue,y.memoizedState=v.memoizedState,y.lanes=v.lanes):(y.updateQueue=null,y.memoizedState=null)}var N=Vs(o);if(N!==null){N.flags&=-257,Bs(N,o,a,i,t),N.mode&1&&As(i,m,t),t=N,u=m;var C=t.updateQueue;if(C===null){var _=new Set;_.add(u),t.updateQueue=_}else C.add(u);break e}else{if((t&1)===0){As(i,m,t),yo();break e}u=Error(h(426))}}else if(re&&a.mode&1){var de=Vs(o);if(de!==null){(de.flags&65536)===0&&(de.flags|=256),Bs(de,o,a,i,t),zi(Pn(u,a));break e}}i=u=Pn(u,a),ve!==4&&(ve=2),vr===null?vr=[i]:vr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Fs(i,u,t);cs(i,f);break e;case 1:a=u;var c=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Bt===null||!Bt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Us(i,a,t);cs(i,w);break e}}i=i.return}while(i!==null)}yu(n)}catch(P){t=P,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function vu(){var e=hl.current;return hl.current=ul,e===null?ul:e}function yo(){(ve===0||ve===3||ve===2)&&(ve=4),ye===null||(rn&268435455)===0&&(vl&268435455)===0||Qt(ye,ke)}function Sl(e,t){var n=V;V|=2;var r=vu();(ye!==e||ke!==t)&&(Ct=null,on(e,t));do try{Sd();break}catch(l){hu(e,l)}while(!0);if(Ti(),V=n,hl.current=r,pe!==null)throw Error(h(261));return ye=null,ke=0,ve}function Sd(){for(;pe!==null;)gu(pe)}function Nd(){for(;pe!==null&&!Yu();)gu(pe)}function gu(e){var t=ku(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?yu(e):pe=t,so.current=null}function yu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=hd(n,t,qe),n!==null){pe=n;return}}else{if(n=vd(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,pe=null;return}}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ve===0&&(ve=5)}function an(e,t,n){var r=K,l=be.transition;try{be.transition=null,K=1,jd(e,t,n,r)}finally{be.transition=l,K=r}return null}function jd(e,t,n,r){do On();while(Ht!==null);if((V&6)!==0)throw Error(h(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(lc(e,i),e===ye&&(pe=ye=null,ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yl||(yl=!0,Su(Cr,function(){return On(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=be.transition,be.transition=null;var o=K;K=1;var a=V;V|=4,so.current=null,yd(e,n),su(n,e),Qc(gi),Or=!!vi,gi=vi=null,e.current=n,xd(n),Xu(),V=a,K=o,be.transition=i}else e.current=n;if(yl&&(yl=!1,Ht=e,xl=l),i=e.pendingLanes,i===0&&(Bt=null),Ju(n.stateNode),Ae(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=fo,fo=null,e;return(xl&1)!==0&&e.tag!==0&&On(),i=e.pendingLanes,(i&1)!==0?e===po?gr++:(gr=0,po=e):gr=0,Ft(),null}function On(){if(Ht!==null){var e=oa(xl),t=be.transition,n=K;try{if(be.transition=null,K=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,xl=0,(V&6)!==0)throw Error(h(331));var l=V;for(V|=4,j=e.current;j!==null;){var i=j,o=i.child;if((j.flags&16)!==0){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var m=a[u];for(j=m;j!==null;){var y=j;switch(y.tag){case 0:case 11:case 15:mr(8,y,i)}var x=y.child;if(x!==null)x.return=y,j=x;else for(;j!==null;){y=j;var v=y.sibling,N=y.return;if(ru(y),y===m){j=null;break}if(v!==null){v.return=N,j=v;break}j=N}}}var C=i.alternate;if(C!==null){var _=C.child;if(_!==null){C.child=null;do{var de=_.sibling;_.sibling=null,_=de}while(_!==null)}}j=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){o=j;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,j=p;else e:for(o=c;j!==null;){if(a=j,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ml(9,a)}}catch(P){ue(a,a.return,P)}if(a===o){j=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,j=w;break e}j=a.return}}if(V=l,Ft(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(_r,e)}catch{}r=!0}return r}finally{K=n,be.transition=t}}return!1}function xu(e,t,n){t=Pn(n,t),t=Fs(e,t,1),e=At(e,t,1),t=Te(),e!==null&&(Bn(e,1,t),Ae(e,t))}function ue(e,t,n){if(e.tag===3)xu(e,e,n);else for(;t!==null;){if(t.tag===3){xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=Pn(n,e),e=Us(t,e,1),t=At(t,e,1),e=Te(),t!==null&&(Bn(t,1,e),Ae(t,e));break}}t=t.return}}function Ed(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(ke&n)===n&&(ve===4||ve===3&&(ke&130023424)===ke&&500>ce()-co?on(e,0):uo|=n),Ae(e,t)}function wu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pr,Pr<<=1,(Pr&130023424)===0&&(Pr=4194304)));var n=Te();e=Nt(e,t),e!==null&&(Bn(e,t,n),Ae(e,n))}function Cd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wu(e,n)}function _d(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),wu(e,n)}var ku;ku=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Fe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Fe=!1,md(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,re&&(t.flags&1048576)!==0&&es(t,Zr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fl(e,t),e=t.pendingProps;var l=kn(t,Ne.current);_n(t,n),l=Bi(null,t,r,e,l,n);var i=Hi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(i=!0,Yr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Mi(t),l.updater=cl,t.stateNode=l,l._reactInternals=t,Yi(t,r,e,n),t=Ji(null,t,r,!0,i,n)):(t.tag=0,re&&i&&ji(t),Pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Pd(r),e=ot(r,e),l){case 0:t=Zi(null,t,r,e,n);break e;case 1:t=qs(null,t,r,e,n);break e;case 11:t=Hs(null,t,r,e,n);break e;case 14:t=Ws(null,t,r,ot(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Zi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),qs(e,t,r,l,n);case 3:e:{if(Ys(t),e===null)throw Error(h(387));r=t.pendingProps,i=t.memoizedState,l=i.element,us(e,t),rl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Pn(Error(h(423)),t),t=Xs(e,t,r,n,l);break e}else if(r!==l){l=Pn(Error(h(424)),t),t=Xs(e,t,r,n,l);break e}else for(Ke=Mt(t.stateNode.containerInfo.firstChild),$e=t,re=!0,it=null,n=as(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===l){t=Et(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return fs(t),e===null&&_i(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,yi(r,l)?o=null:i!==null&&yi(r,i)&&(t.flags|=32),Ks(e,t),Pe(e,t,o,n),t.child;case 6:return e===null&&_i(t),null;case 13:return Gs(e,t,n);case 4:return Di(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Hs(e,t,r,l,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,Z(el,r._currentValue),r._currentValue=o,i!==null)if(lt(i.value,o)){if(i.children===l.children&&!De.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=jt(-1,n&-n),u.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var y=m.pending;y===null?u.next=u:(u.next=y.next,y.next=u),m.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ri(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ri(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,_n(t,n),l=Ze(l),r=r(l),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),Ws(e,t,r,l,n);case 15:return Qs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),fl(e,t),t.tag=1,Ie(r)?(e=!0,Yr(t)):e=!1,_n(t,n),Ds(t,r,l),Yi(t,r,l,n),Ji(null,t,r,!0,e,n);case 19:return Js(e,t,n);case 22:return $s(e,t,n)}throw Error(h(156,t.tag))};function Su(e,t){return ta(e,t)}function zd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new zd(e,t,n,r)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pd(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dt)return 11;if(e===ft)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")xo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Oe:return sn(n.children,l,i,t);case Ye:o=8,l|=8;break;case _t:return e=et(12,n,t,l|2),e.elementType=_t,e.lanes=i,e;case He:return e=et(13,n,t,l),e.elementType=He,e.lanes=i,e;case nt:return e=et(19,n,t,l),e.elementType=nt,e.lanes=i,e;case se:return jl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yt:o=10;break e;case Yt:o=9;break e;case dt:o=11;break e;case ft:o=14;break e;case Me:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=et(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function jl(e,t,n,r){return e=et(22,e,r,t),e.elementType=se,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function ko(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Td(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function So(e,t,n,r,l,i,o,a,u){return e=new Td(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mi(i),e}function Ld(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ze,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nu(e){if(!e)return It;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Za(e,n,t)}return t}function ju(e,t,n,r,l,i,o,a,u){return e=So(n,r,!0,e,l,i,o,a,u),e.context=Nu(null),n=e.current,r=Te(),l=Wt(n),i=jt(r,l),i.callback=t??null,At(n,i,l),e.current.lanes=l,Bn(e,l,r),Ae(e,r),e}function El(e,t,n,r){var l=t.current,i=Te(),o=Wt(l);return n=Nu(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(l,t,o),e!==null&&(ut(e,l,o,i),nl(e,l,o)),o}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function No(e,t){Eu(e,t),(e=e.alternate)&&Eu(e,t)}function Rd(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function jo(e){this._internalRoot=e}_l.prototype.render=jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));El(e,t,null,null)},_l.prototype.unmount=jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){El(null,e,null,null)}),t[xt]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=ua();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&fa(e)}};function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _u(){}function Od(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var m=Cl(o);i.call(m)}}var o=ju(t,r,e,0,null,!1,!1,"",_u);return e._reactRootContainer=o,e[xt]=o.current,tr(e.nodeType===8?e.parentNode:e),ln(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var m=Cl(u);a.call(m)}}var u=So(e,0,!1,null,null,!1,!1,"",_u);return e._reactRootContainer=u,e[xt]=u.current,tr(e.nodeType===8?e.parentNode:e),ln(function(){El(t,u,n,r)}),u}function Pl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=Cl(o);a.call(u)}}El(t,o,e,l)}else o=Od(n,t,e,l,r);return Cl(o)}aa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vn(t.pendingLanes);n!==0&&(Yl(t,n|1),Ae(t,ce()),(V&6)===0&&(Rn=ce()+500,Ft()))}break;case 13:ln(function(){var r=Nt(e,1);if(r!==null){var l=Te();ut(r,e,1,l)}}),No(e,1)}},Xl=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Te();ut(t,e,134217728,n)}No(e,134217728)}},sa=function(e){if(e.tag===13){var t=Wt(e),n=Nt(e,t);if(n!==null){var r=Te();ut(n,e,t,r)}No(e,t)}},ua=function(){return K},ca=function(e,t){var n=K;try{return K=e,t()}finally{K=n}},Bl=function(e,t,n){switch(t){case"input":if(Ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Kr(r);if(!l)throw Error(h(90));Mo(r),Ol(r,l)}}}break;case"textarea":Ao(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Yo=vo,Xo=ln;var Md={usingClientEntryPoint:!1,Events:[lr,xn,Kr,Ko,qo,vo]},yr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dd={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bo(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Rd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{_r=Tl.inject(Dd),pt=Tl}catch{}}return Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md,Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eo(t))throw Error(h(200));return Ld(e,t,null,n)},Ve.createRoot=function(e,t){if(!Eo(e))throw Error(h(299));var n=!1,r="",l=Cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=So(e,1,!1,null,null,n,!1,r,l),e[xt]=t.current,tr(e.nodeType===8?e.parentNode:e),new jo(t)},Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=bo(t),e=e===null?null:e.stateNode,e},Ve.flushSync=function(e){return ln(e)},Ve.hydrate=function(e,t,n){if(!zl(t))throw Error(h(200));return Pl(null,e,t,!0,n)},Ve.hydrateRoot=function(e,t,n){if(!Eo(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Cu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ju(t,null,e,1,n??null,l,!1,i,o),e[xt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new _l(t)},Ve.render=function(e,t,n){if(!zl(t))throw Error(h(200));return Pl(null,e,t,!1,n)},Ve.unmountComponentAtNode=function(e){if(!zl(e))throw Error(h(40));return e._reactRootContainer?(ln(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1},Ve.unstable_batchedUpdates=vo,Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Pl(e,t,n,!1,r)},Ve.version="18.3.1-next-f1338f8080-20240426",Ve}var Du;function Wd(){if(Du)return zo.exports;Du=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(R){console.error(R)}}return z(),zo.exports=Hd(),zo.exports}var Iu;function Qd(){if(Iu)return Ll;Iu=1;var z=Wd();return Ll.createRoot=z.createRoot,Ll.hydrateRoot=z.hydrateRoot,Ll}var $d=Qd(),qt=Oo();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qd=z=>z.replace(/^([A-Z])|[\s-_]+(\w)/g,(R,h,J)=>J?J.toUpperCase():h.toLowerCase()),Fu=z=>{const R=qd(z);return R.charAt(0).toUpperCase()+R.slice(1)},Vu=(...z)=>z.filter((R,h,J)=>!!R&&R.trim()!==""&&J.indexOf(R)===h).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=qt.forwardRef(({color:z="currentColor",size:R=24,strokeWidth:h=2,absoluteStrokeWidth:J,className:D="",children:U,iconNode:oe,...ae},Q)=>qt.createElement("svg",{ref:Q,...Yd,width:R,height:R,stroke:z,strokeWidth:J?Number(h)*24/Number(R):h,className:Vu("lucide",D),...ae},[...oe.map(([me,fe])=>qt.createElement(me,fe)),...Array.isArray(U)?U:[U]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(z,R)=>{const h=qt.forwardRef(({className:J,...D},U)=>qt.createElement(Xd,{ref:U,iconNode:R,className:Vu(`lucide-${Kd(Fu(z))}`,`lucide-${z}`,J),...D}));return h.displayName=Fu(z),h};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Zd=ct("badge-check",Gd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],Uu=ct("car",Jd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ef=ct("chevron-down",bd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],wr=ct("circle-check-big",tf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],rf=ct("clock",nf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],of=ct("menu",lf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Lo=ct("message-circle",af);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Ro=ct("phone",sf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Au=ct("send",uf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],df=ct("shield",cf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],pf=ct("x",ff),mf="/assets/Toyota_Alphard-C0c8fmJ3.jpg",hf="/assets/Volkswagen_Caravelle-Bzm8mT6M.jpg",vf="/assets/Toyota%20Hiace-BrbWTcUc.jpg";function gf(){const[z,R]=qt.useState(!1),[h,J]=qt.useState(null),[D,U]=qt.useState({name:"",phone:"",route:"",date:""}),oe=[{from:"Орск",to:"Оренбург - Казань",time:"22:00",duration:"12 часов",price:"3500",priceOld:"4000"},{from:"Казань",to:"Оренбург - Орск",time:"22:00",duration:"12 часов",price:"3500",priceOld:"4000"},{from:"Орск",to:"Набережные Челны",time:"23:00",duration:"10 часов",price:"3200",priceOld:"3600"},{from:"Набережные Челны",to:"Орск",time:"23:00",duration:"10 часов",price:"3200",priceOld:"3600"}],ae=[{title:"Заказ трансфера",description:"Индивидуальные и групповые поездки по вашему запросу."},{title:"Наличный и безналичный расчёт",description:"Можно оплатить наличными, переводом или по карте."},{title:"Грузы, посылки, документы",description:"Берём к отправке вместе с рейсом по согласованию."}],Q=[{region:"Оренбургская область",cities:["Новотроицк","Медногорск","Кувандык","Оренбург","Шарлык","Абдулино"]},{region:"Республика Татарстан",cities:["Бавлы","Бугульма","Альметьевск","Нижнекамск (по договорённости)","Набережные Челны","Елабуга"]}],me=["Чебоксары","Киров","Йошкар-Ола","Ижевск"],fe=[{name:"Toyota Alphard",image:mf,type:"Микроавтобус",seats:"18-20 мест",comfort:"Премиум",features:["Кондиционер","Мягкие сиденья","Багажный отсек","USB-зарядка"]},{name:"Volkswagen Caravelle",image:hf,type:"Микроавтобус",seats:"16-18 мест",comfort:"Комфорт",features:["Климат-контроль","Откидные сиденья","Вместительный багажник","Аудиосистема"]},{name:"Toyota Hiace",image:vf,type:"Минивэн",seats:"10-12 мест",comfort:"Бизнес",features:["Кожаные сиденья","Кондиционер","Просторный салон","Зарядные устройства"]}],b=[{name:"Анна Петрова",city:"Казань",rating:5,text:"Пользуюсь услугами уже 3 года. Всегда вовремя, чистые машины, вежливые водители. Рекомендую!"},{name:"Михаил Сергеев",city:"Орск",rating:5,text:"Отличный сервис! Езжу регулярно по работе. Цены адекватные, машины комфортные. Спасибо за надёжность!"},{name:"Елена Иванова",city:"Оренбург",rating:5,text:"Очень удобно бронировать через WhatsApp. Всегда на связи, быстрое подтверждение. Доверяю только им."}],Y=[{question:"Как забронировать место?",answer:"Позвоните по телефону +7 (905) 845-07-61, напишите в WhatsApp или Telegram, либо заполните форму на сайте. Мы подтвердим бронирование в течение 15 минут."},{question:"Нужна ли предоплата?",answer:"Предоплата не требуется. Доступен наличный и безналичный расчёт при посадке."},{question:"Можно отправить груз, посылку или документы?",answer:"Да, принимаем к отправке грузы, посылки и документы. Условия и стоимость уточняются заранее при бронировании."},{question:"Что делать, если я опаздываю?",answer:"Сообщите нам как можно скорее. Мы постараемся подождать, но отправление строго по расписанию для комфорта всех пассажиров."},{question:"Есть ли детские кресла?",answer:"Да, детские кресла предоставляются бесплатно по предварительному запросу при бронировании."},{question:"Можно ли отменить бронирование?",answer:"Да, отмена бесплатна за 3 часа до отправления. Позвоните или напишите нам."}],Le=[{icon:s.jsx(Uu,{className:"advantage-icon"}),title:"Собственный автопарк",description:"Современные комфортабельные микроавтобусы и минивэны"},{icon:s.jsx(rf,{className:"advantage-icon"}),title:"Ежедневные рейсы",description:"Удобное расписание с вечерними отправлениями"},{icon:s.jsx(df,{className:"advantage-icon"}),title:"Безопасность",description:"Опытные водители, исправный транспорт, все документы"},{icon:s.jsx(Zd,{className:"advantage-icon"}),title:"С 2015 года",description:"Более 9 лет успешной работы и тысячи довольных клиентов"}],Re=[{number:"01",title:"Выберите маршрут",description:"Ознакомьтесь с расписанием и ценами на нужное направление"},{number:"02",title:"Забронируйте место или трансфер",description:"Позвоните, напишите или заполните форму на сайте"},{number:"03",title:"Получите подтверждение",description:"Мы подтвердим бронь и сообщим детали посадки"},{number:"04",title:"Комфортная поездка",description:"Приезжайте за 10 минут до отправления и в путь!"}],X=k=>{k.preventDefault(),alert("Спасибо! Мы свяжемся с вами в ближайшее время для подтверждения бронирования."),U({name:"",phone:"",route:"",date:""})};return s.jsxs("div",{className:"orsk-kazan-site",children:[s.jsx("style",{children:`
        /* ============================================
           ORSK-KAZAN SITE STYLES
           ============================================ */
        
        .orsk-kazan-site {
          min-height: 100vh;
        }
        
        /* HEADER */
        .header {
          position: sticky;
          top: 0;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          z-index: var(--z-sticky);
        }
        
        .header-container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: var(--space-4) var(--container-padding);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-6);
        }
        
        .logo {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--font-weight-extrabold);
          color: var(--text-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        
        .logo-icon {
          color: var(--brand-green-primary);
        }
        
        .header-nav {
          display: none;
          gap: var(--space-8);
        }
        
        @media (min-width: 1024px) {
          .header-nav {
            display: flex;
          }
        }
        
        .header-nav a {
          font-size: var(--text-sm);
          font-weight: var(--font-weight-medium);
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }
        
        .header-nav a:hover {
          color: var(--brand-green-dark);
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }
        
        .phone-link {
          display: none;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-base);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          text-decoration: none;
        }
        
        @media (min-width: 768px) {
          .phone-link {
            display: flex;
          }
        }
        
        .phone-link .phone-icon {
          color: var(--brand-green-primary);
          width: 20px;
          height: 20px;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-6);
          font-size: var(--text-base);
          font-weight: var(--font-weight-semibold);
          border-radius: var(--radius-lg);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-decoration: none;
          white-space: nowrap;
        }
        
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .btn-primary {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
        }
        
        .btn-primary:hover:not(:disabled) {
          background: var(--btn-primary-bg-hover);
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }
        
        .btn-primary:active:not(:disabled) {
          background: var(--btn-primary-bg-active);
          transform: translateY(0);
        }
        
        .btn-secondary {
          background: var(--btn-secondary-bg);
          color: var(--btn-secondary-text);
          border: 1px solid var(--btn-secondary-border);
        }
        
        .btn-secondary:hover:not(:disabled) {
          background: var(--btn-secondary-bg-hover);
          border-color: var(--brand-green-primary);
        }
        
        .btn-ghost {
          background: transparent;
          color: var(--text-secondary);
          padding: var(--space-2);
        }
        
        .btn-ghost:hover:not(:disabled) {
          background: var(--btn-ghost-bg-hover);
        }
        
        .btn-sm {
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
        }
        
        .btn-lg {
          padding: var(--space-4) var(--space-8);
          font-size: var(--text-lg);
        }
        
        .menu-toggle {
          display: flex;
          padding: var(--space-2);
        }
        
        @media (min-width: 1024px) {
          .menu-toggle {
            display: none;
          }
        }
        
        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          top: 73px;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-primary);
          padding: var(--space-6);
          z-index: var(--z-fixed);
          transform: translateX(100%);
          transition: transform var(--transition-base);
          overflow-y: auto;
        }
        
        .mobile-menu.open {
          transform: translateX(0);
        }
        
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        
        .mobile-nav a {
          font-size: var(--text-lg);
          font-weight: var(--font-weight-medium);
          color: var(--text-primary);
          padding: var(--space-3) 0;
          border-bottom: 1px solid var(--border-light);
        }
        
        /* CONTAINER */
        .container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding-left: var(--container-padding);
          padding-right: var(--container-padding);
        }
        
        /* SECTION */
        .section {
          padding: var(--space-16) 0;
        }
        
        .section-sm {
          padding: var(--space-12) 0;
        }
        
        .section-lg {
          padding: var(--space-20) 0;
        }
        
        @media (min-width: 1024px) {
          .section {
            padding: var(--space-20) 0;
          }
          
          .section-lg {
            padding: var(--space-24) 0;
          }
        }
        
        .section-white {
          background: var(--bg-primary);
        }
        
        .section-gray {
          background: var(--bg-secondary);
        }
        
        .section-green {
          background: var(--bg-tertiary);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }
        
        .section-title {
          margin-bottom: var(--space-4);
        }
        
        .section-subtitle {
          font-size: var(--text-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* HERO */
        .hero {
          background: linear-gradient(135deg, var(--brand-green-subtle) 0%, var(--bg-primary) 100%);
          padding: var(--space-20) 0;
          position: relative;
          overflow: hidden;
        }
        
        @media (min-width: 1024px) {
          .hero {
            padding: var(--space-24) 0;
          }
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.3;
          pointer-events: none;
        }
        
        .hero-container {
          position: relative;
          z-index: 1;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .hero-title {
          margin-bottom: var(--space-6);
          line-height: var(--leading-tight);
        }
        
        .hero-description {
          font-size: var(--text-xl);
          color: var(--text-secondary);
          margin-bottom: var(--space-8);
          line-height: var(--leading-relaxed);
        }
        
        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          align-items: center;
          justify-content: center;
        }
        
        @media (min-width: 640px) {
          .hero-cta {
            flex-direction: row;
          }
        }
        
        .hero-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-6);
          margin-top: var(--space-12);
          text-align: center;
        }
        
        .hero-feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-3);
        }
        
        .hero-feature-icon {
          width: 48px;
          height: 48px;
          color: var(--brand-green-primary);
        }
        
        .hero-feature-title {
          font-size: var(--text-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
        }
        
        .hero-feature-text {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }
        
        /* ADVANTAGES */
        .advantages-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }
        
        @media (min-width: 640px) {
          .advantages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .advantages-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .advantage-card {
          text-align: center;
          padding: var(--space-6);
          background: var(--bg-primary);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-light);
          transition: all var(--transition-base);
        }
        
        .advantage-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--brand-green-primary);
        }
        
        .advantage-icon {
          width: 48px;
          height: 48px;
          color: var(--brand-green-primary);
          margin: 0 auto var(--space-4);
        }
        
        .advantage-title {
          font-size: var(--text-lg);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--space-2);
        }
        
        .advantage-description {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
        }
        
        /* ROUTES */
        .routes-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        
        @media (min-width: 768px) {
          .routes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .routes-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-8);
          }
        }
        
        .route-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          transition: all var(--transition-base);
        }
        
        .route-card:hover {
          box-shadow: var(--shadow-lg);
          border-color: var(--brand-green-primary);
        }
        
        .route-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-4);
        }
        
        .route-direction {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          flex: 1;
        }
        
        .route-city {
          font-size: var(--text-xl);
          font-weight: var(--font-weight-bold);
          color: var(--text-primary);
        }
        
        .route-arrow {
          color: var(--brand-green-primary);
          font-size: var(--text-2xl);
          font-weight: var(--font-weight-bold);
        }
        
        .route-info {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          padding: var(--space-4);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          margin-bottom: var(--space-4);
        }
        
        .route-info-item {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        
        .route-info-label {
          font-size: var(--text-xs);
          color: var(--text-tertiary);
          text-transform: uppercase;
          font-weight: var(--font-weight-medium);
        }
        
        .route-info-value {
          font-size: var(--text-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
        }
        
        .route-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
        }
        
        .route-price-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        
        .route-price-old {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
          text-decoration: line-through;
        }
        
        .route-price {
          font-size: var(--text-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--brand-green-primary);
        }
        
        .route-price-currency {
          font-size: var(--text-lg);
          margin-left: var(--space-1);
        }
        
        /* FLEET */
        .fleet-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }
        
        @media (min-width: 768px) {
          .fleet-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .fleet-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .fleet-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: all var(--transition-base);
        }
        
        .fleet-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        
        .fleet-image {
          width: 100%;
          height: 240px;
          background: linear-gradient(135deg, var(--neutral-200) 0%, var(--neutral-300) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .fleet-image-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .fleet-content {
          padding: var(--space-6);
        }
        
        .fleet-header {
          margin-bottom: var(--space-4);
        }
        
        .fleet-type {
          font-size: var(--text-xs);
          color: var(--brand-green-dark);
          text-transform: uppercase;
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--space-2);
        }
        
        .fleet-name {
          font-size: var(--text-xl);
          font-weight: var(--font-weight-bold);
          margin-bottom: var(--space-3);
        }
        
        .fleet-specs {
          display: flex;
          gap: var(--space-4);
          margin-bottom: var(--space-4);
        }
        
        .fleet-spec {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }
        
        .fleet-features {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        
        .fleet-feature {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }
        
        .fleet-feature-icon {
          width: 16px;
          height: 16px;
          color: var(--brand-green-primary);
          flex-shrink: 0;
        }
        
        /* STEPS */
        .steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
          position: relative;
        }
        
        @media (min-width: 1024px) {
          .steps-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--space-6);
          }
          
          .steps-grid::before {
            content: '';
            position: absolute;
            top: 40px;
            left: 12.5%;
            right: 12.5%;
            height: 2px;
            background: var(--border-light);
            z-index: 0;
          }
        }
        
        .step-card {
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .step-number {
          width: 80px;
          height: 80px;
          margin: 0 auto var(--space-4);
          background: var(--brand-green-primary);
          color: var(--text-inverse);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-3xl);
          font-weight: var(--font-weight-bold);
          font-family: var(--font-heading);
          box-shadow: var(--shadow-lg);
        }
        
        .step-title {
          font-size: var(--text-xl);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--space-3);
        }
        
        .step-description {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
        }
        
        /* BOOKING FORM */
        .booking-container {
          max-width: 600px;
          margin: 0 auto;
          background: var(--bg-primary);
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--border-light);
        }
        
        .form-group {
          margin-bottom: var(--space-6);
        }
        
        .form-label {
          display: block;
          font-size: var(--text-sm);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }
        
        .form-input,
        .form-select {
          width: 100%;
          padding: var(--space-3) var(--space-4);
          font-size: var(--text-base);
          color: var(--text-primary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          transition: all var(--transition-fast);
        }
        
        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: var(--brand-green-primary);
          background: var(--bg-primary);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        
        .form-input::placeholder {
          color: var(--text-tertiary);
        }
        
        .form-button {
          width: 100%;
        }
        
        /* TESTIMONIALS */
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }
        
        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .testimonial-card {
          background: var(--bg-primary);
          padding: var(--space-6);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-light);
          transition: all var(--transition-base);
        }
        
        .testimonial-card:hover {
          box-shadow: var(--shadow-lg);
          border-color: var(--brand-green-primary);
        }
        
        .testimonial-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: var(--space-4);
        }
        
        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }
        
        .testimonial-name {
          font-size: var(--text-base);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
        }
        
        .testimonial-city {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }
        
        .testimonial-rating {
          display: flex;
          gap: var(--space-1);
        }
        
        .star {
          color: #FCD34D;
          font-size: var(--text-lg);
        }
        
        .testimonial-text {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
        }
        
        /* FAQ */
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        
        .faq-item {
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-fast);
        }
        
        .faq-item.open {
          border-color: var(--brand-green-primary);
          box-shadow: var(--shadow-md);
        }
        
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
          padding: var(--space-5);
          background: transparent;
          border: none;
          text-align: left;
          font-size: var(--text-base);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        
        .faq-question:hover {
          background: var(--bg-secondary);
        }
        
        .faq-icon {
          width: 20px;
          height: 20px;
          color: var(--brand-green-primary);
          transition: transform var(--transition-base);
          flex-shrink: 0;
        }
        
        .faq-item.open .faq-icon {
          transform: rotate(180deg);
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-base);
        }
        
        .faq-item.open .faq-answer {
          max-height: 500px;
        }
        
        .faq-answer-content {
          padding: 0 var(--space-5) var(--space-5);
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
        }
        
        /* FOOTER */
        .footer {
          background: var(--neutral-900);
          color: var(--text-inverse);
          padding: var(--space-12) 0 var(--space-6);
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
          margin-bottom: var(--space-8);
        }
        
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }
        }
        
        .footer-section h4 {
          color: var(--text-inverse);
          margin-bottom: var(--space-4);
        }
        
        .footer-description {
          font-size: var(--text-sm);
          color: var(--neutral-400);
          line-height: var(--leading-relaxed);
          margin-bottom: var(--space-4);
        }
        
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        
        .footer-contact a {
          color: var(--neutral-300);
          font-size: var(--text-sm);
          transition: color var(--transition-fast);
        }
        
        .footer-contact a:hover {
          color: var(--brand-green-primary);
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        
        .footer-links a {
          color: var(--neutral-300);
          font-size: var(--text-sm);
          transition: color var(--transition-fast);
        }
        
        .footer-links a:hover {
          color: var(--brand-green-primary);
        }
        
        .footer-bottom {
          padding-top: var(--space-6);
          border-top: 1px solid var(--neutral-800);
          text-align: center;
        }
        
        .footer-copyright {
          font-size: var(--text-sm);
          color: var(--neutral-500);
        }
        
        /* SOCIAL BUTTONS */
        .social-buttons {
          display: flex;
          gap: var(--space-3);
        }
        
        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
          font-weight: var(--font-weight-medium);
          border-radius: var(--radius-lg);
          border: 1px solid;
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        
        .social-btn-whatsapp {
          background: #25D366;
          color: white;
          border-color: #25D366;
        }
        
        .social-btn-whatsapp:hover {
          background: #128C7E;
          border-color: #128C7E;
          transform: translateY(-1px);
        }
        
        .social-btn-telegram {
          background: #0088cc;
          color: white;
          border-color: #0088cc;
        }
        
        .social-btn-telegram:hover {
          background: #006699;
          border-color: #006699;
          transform: translateY(-1px);
        }
        
        /* BADGE */
        .badge {
          display: inline-flex;
          align-items: center;
          padding: var(--space-2) var(--space-3);
          background: var(--brand-green-light);
          color: var(--brand-green-dark);
          font-size: var(--text-xs);
          font-weight: var(--font-weight-semibold);
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .services-pickup-block {
          margin-top: var(--space-12);
        }

        .services-grid {
          grid-template-columns: repeat(auto-fit, minmax(240px, 320px));
          justify-content: center;
        }

        .services-grid .advantage-card {
          width: 100%;
          height: 100%;
        }

        .services-subtitle {
          text-align: center;
          margin-bottom: var(--space-6);
        }

        .services-connection {
          margin-top: var(--space-10);
          text-align: center;
        }

        .services-connection-text {
          margin-top: var(--space-4);
          margin-bottom: 0;
        }
        
        /* UTILITIES */
        .text-center {
          text-align: center;
        }
        
        .mb-0 {
          margin-bottom: 0 !important;
        }
      `}),s.jsxs("header",{className:"header",children:[s.jsxs("div",{className:"header-container",children:[s.jsxs("a",{href:"#",className:"logo",children:[s.jsx(Uu,{className:"logo-icon",size:28}),s.jsx("span",{children:"Орск-Казань"})]}),s.jsxs("nav",{className:"header-nav",children:[s.jsx("a",{href:"#routes",children:"Маршруты"}),s.jsx("a",{href:"#services",children:"Услуги"}),s.jsx("a",{href:"#fleet",children:"Автопарк"}),s.jsx("a",{href:"#booking",children:"Бронирование"}),s.jsx("a",{href:"#faq",children:"Вопросы"}),s.jsx("a",{href:"#contacts",children:"Контакты"})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("a",{href:"tel:+79058450761",className:"phone-link",children:[s.jsx(Ro,{className:"phone-icon"}),s.jsx("span",{children:"+7 (905) 845-07-61"})]}),s.jsxs("a",{href:"https://wa.me/79058450761",className:"btn btn-primary btn-sm",target:"_blank",rel:"noopener noreferrer",children:[s.jsx(Lo,{size:18}),s.jsx("span",{className:"hidden sm:inline",children:"WhatsApp"})]}),s.jsx("button",{className:"btn btn-ghost menu-toggle",onClick:()=>R(!z),children:z?s.jsx(pf,{size:24}):s.jsx(of,{size:24})})]})]}),s.jsx("div",{className:`mobile-menu ${z?"open":""}`,children:s.jsxs("nav",{className:"mobile-nav",children:[s.jsx("a",{href:"#routes",onClick:()=>R(!1),children:"Маршруты и цены"}),s.jsx("a",{href:"#services",onClick:()=>R(!1),children:"Услуги"}),s.jsx("a",{href:"#fleet",onClick:()=>R(!1),children:"Наш автопарк"}),s.jsx("a",{href:"#booking",onClick:()=>R(!1),children:"Забронировать"}),s.jsx("a",{href:"#testimonials",onClick:()=>R(!1),children:"Отзывы"}),s.jsx("a",{href:"#faq",onClick:()=>R(!1),children:"Вопросы и ответы"}),s.jsx("a",{href:"#contacts",onClick:()=>R(!1),children:"Контакты"}),s.jsxs("a",{href:"tel:+79058450761",className:"btn btn-primary",children:[s.jsx(Ro,{size:20}),"Позвонить"]})]})})]}),s.jsx("section",{className:"hero",children:s.jsx("div",{className:"container hero-container",children:s.jsxs("div",{className:"hero-content",children:[s.jsx("h1",{className:"hero-title",children:"Пассажирские перевозки: Орск - Оренбург - Казань, Казань - Оренбург - Орск, Набережные Челны"}),s.jsx("p",{className:"hero-description",children:"Ежедневные рейсы и заказ трансфера. Перевозим пассажиров, грузы, посылки и документы. Наличный и безналичный расчёт."}),s.jsxs("div",{className:"hero-cta",children:[s.jsx("a",{href:"#booking",className:"btn btn-primary btn-lg",children:"Забронировать место"}),s.jsxs("a",{href:"tel:+79058450761",className:"btn btn-secondary btn-lg",children:[s.jsx(Ro,{size:20}),"Позвонить"]})]}),s.jsxs("div",{className:"hero-features",children:[s.jsxs("div",{className:"hero-feature",children:[s.jsx(wr,{className:"hero-feature-icon"}),s.jsx("div",{className:"hero-feature-title",children:"Заказ трансфера"}),s.jsx("div",{className:"hero-feature-text",children:"Индивидуально и для групп"})]}),s.jsxs("div",{className:"hero-feature",children:[s.jsx(wr,{className:"hero-feature-icon"}),s.jsx("div",{className:"hero-feature-title",children:"Наличный и безналичный расчёт"}),s.jsx("div",{className:"hero-feature-text",children:"Выбирайте удобный формат оплаты"})]}),s.jsxs("div",{className:"hero-feature",children:[s.jsx(wr,{className:"hero-feature-icon"}),s.jsx("div",{className:"hero-feature-title",children:"Грузы и документы"}),s.jsx("div",{className:"hero-feature-text",children:"Отправка в попутном рейсе"})]})]})]})})}),s.jsx("section",{id:"routes",className:"section section-gray",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{className:"section-title",children:"Пассажирские перевозки"}),s.jsx("p",{className:"section-subtitle",children:"Орск - Оренбург - Казань, Казань - Оренбург - Орск и рейсы в Набережные Челны"})]}),s.jsx("div",{className:"routes-grid",children:oe.map((k,q)=>s.jsxs("div",{className:"route-card",children:[s.jsx("div",{className:"route-header",children:s.jsxs("div",{className:"route-direction",children:[s.jsx("div",{className:"route-city",children:k.from}),s.jsx("div",{className:"route-arrow",children:"→"}),s.jsx("div",{className:"route-city",children:k.to})]})}),s.jsxs("div",{className:"route-info",children:[s.jsxs("div",{className:"route-info-item",children:[s.jsx("div",{className:"route-info-label",children:"Отправление"}),s.jsx("div",{className:"route-info-value",children:k.time})]}),s.jsxs("div",{className:"route-info-item",children:[s.jsx("div",{className:"route-info-label",children:"В пути"}),s.jsx("div",{className:"route-info-value",children:k.duration})]})]}),s.jsxs("div",{className:"route-footer",children:[s.jsxs("div",{className:"route-price-container",children:[s.jsxs("div",{className:"route-price-old",children:[k.priceOld," ₽"]}),s.jsxs("div",{className:"route-price",children:[k.price,s.jsx("span",{className:"route-price-currency",children:"₽"})]})]}),s.jsx("a",{href:"#booking",className:"btn btn-primary",children:"Забронировать"})]})]},q))})]})}),s.jsx("section",{id:"services",className:"section section-green",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{className:"section-title",children:"Услуги, посадка и пересадки"}),s.jsx("p",{className:"section-subtitle",children:"Работаем по основным маршрутам и в попутных направлениях"})]}),s.jsx("div",{className:"advantages-grid services-grid",children:ae.map((k,q)=>s.jsxs("div",{className:"advantage-card",children:[s.jsx(wr,{className:"advantage-icon"}),s.jsx("h3",{className:"advantage-title",children:k.title}),s.jsx("p",{className:"advantage-description mb-0",children:k.description})]},q))}),s.jsxs("div",{className:"services-pickup-block",children:[s.jsx("h3",{className:"services-subtitle",children:"Забираем пассажиров"}),s.jsx("div",{className:"advantages-grid services-grid",children:Q.map((k,q)=>s.jsxs("div",{className:"advantage-card",children:[s.jsx("h4",{className:"advantage-title",children:k.region}),s.jsx("p",{className:"advantage-description mb-0",children:k.cities.join(", ")})]},q))})]}),s.jsxs("div",{className:"services-connection",children:[s.jsx("span",{className:"badge",children:"Пересадка в попутном направлении"}),s.jsxs("p",{className:"section-subtitle services-connection-text",children:["С нами можно добраться с пересадкой:"," ",me.join(", "),"."]})]})]})}),s.jsx("section",{id:"fleet",className:"section section-white",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{className:"section-title",children:"Наш автопарк"}),s.jsx("p",{className:"section-subtitle",children:"Современные комфортабельные микроавтобусы и минивэны с кондиционером"})]}),s.jsx("div",{className:"fleet-grid",children:fe.map((k,q)=>s.jsxs("div",{className:"fleet-card",children:[s.jsx("div",{className:"fleet-image",children:s.jsx("img",{src:k.image,alt:k.name,className:"fleet-image-element",loading:"lazy"})}),s.jsxs("div",{className:"fleet-content",children:[s.jsxs("div",{className:"fleet-header",children:[s.jsx("div",{className:"fleet-type",children:k.type}),s.jsx("h3",{className:"fleet-name",children:k.name}),s.jsxs("div",{className:"fleet-specs",children:[s.jsx("span",{className:"fleet-spec",children:k.seats}),s.jsx("span",{className:"fleet-spec",children:"•"}),s.jsx("span",{className:"fleet-spec",children:k.comfort})]})]}),s.jsx("div",{className:"fleet-features",children:k.features.map((Be,_e)=>s.jsxs("div",{className:"fleet-feature",children:[s.jsx(wr,{className:"fleet-feature-icon"}),s.jsx("span",{children:Be})]},_e))})]})]},q))})]})}),s.jsx("section",{className:"section section-green",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{className:"section-title",children:"Как это работает"}),s.jsx("p",{className:"section-subtitle",children:"Простой процесс бронирования — всего за 4 шага"})]}),s.jsx("div",{className:"steps-grid",children:Re.map((k,q)=>s.jsxs("div",{className:"step-card",children:[s.jsx("div",{className:"step-number",children:k.number}),s.jsx("h3",{className:"step-title",children:k.title}),s.jsx("p",{className:"step-description mb-0",children:k.description})]},q))})]})}),s.jsx("section",{id:"booking",className:"section section-white",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{className:"section-title",children:"Забронировать место или заказать трансфер"}),s.jsx("p",{className:"section-subtitle",children:"Оставьте заявку на поездку, трансфер или отправку документов и груза"})]}),s.jsxs("div",{className:"booking-container",children:[s.jsxs("form",{onSubmit:X,children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"name",className:"form-label",children:"Ваше имя"}),s.jsx("input",{type:"text",id:"name",className:"form-input",placeholder:"Иван Иванов",value:D.name,onChange:k=>U({...D,name:k.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"phone",className:"form-label",children:"Номер телефона"}),s.jsx("input",{type:"tel",id:"phone",className:"form-input",placeholder:"+7 (905) 845-07-61",value:D.phone,onChange:k=>U({...D,phone:k.target.value}),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"route",className:"form-label",children:"Маршрут"}),s.jsxs("select",{id:"route",className:"form-select",value:D.route,onChange:k=>U({...D,route:k.target.value}),required:!0,children:[s.jsx("option",{value:"",children:"Выберите маршрут"}),s.jsx("option",{value:"orsk-orenburg-kazan",children:"Орск → Оренбург → Казань"}),s.jsx("option",{value:"kazan-orenburg-orsk",children:"Казань → Оренбург → Орск"}),s.jsx("option",{value:"orsk-chelny",children:"Орск → Набережные Челны"}),s.jsx("option",{value:"chelny-orsk",children:"Набережные Челны → Орск"}),s.jsx("option",{value:"transfer-order",children:"Заказ трансфера (по договорённости)"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"date",className:"form-label",children:"Дата поездки"}),s.jsx("input",{type:"date",id:"date",className:"form-input",value:D.date,onChange:k=>U({...D,date:k.target.value}),required:!0})]}),s.jsx("button",{type:"submit",className:"btn btn-primary btn-lg form-button",children:"Отправить заявку"})]}),s.jsxs("div",{style:{marginTop:"var(--space-6)",textAlign:"center"},children:[s.jsx("p",{style:{fontSize:"var(--text-sm)",color:"var(--text-secondary)",marginBottom:"var(--space-4)"},children:"Или свяжитесь с нами напрямую:"}),s.jsxs("div",{className:"social-buttons",style:{justifyContent:"center"},children:[s.jsxs("a",{href:"https://wa.me/79058450761",className:"social-btn social-btn-whatsapp",target:"_blank",rel:"noopener noreferrer",children:[s.jsx(Lo,{size:18}),"WhatsApp"]}),s.jsxs("a",{href:"https://t.me/orskkazan",className:"social-btn social-btn-telegram",target:"_blank",rel:"noopener noreferrer",children:[s.jsx(Au,{size:18}),"Telegram"]})]})]})]})]})}),s.jsx("section",{id:"testimonials",className:"section section-gray",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{className:"section-title",children:"Отзывы наших пассажиров"}),s.jsx("p",{className:"section-subtitle",children:"Более 10 000 довольных клиентов за 9 лет работы"})]}),s.jsx("div",{className:"testimonials-grid",children:b.map((k,q)=>s.jsxs("div",{className:"testimonial-card",children:[s.jsxs("div",{className:"testimonial-header",children:[s.jsxs("div",{className:"testimonial-author",children:[s.jsx("div",{className:"testimonial-name",children:k.name}),s.jsx("div",{className:"testimonial-city",children:k.city})]}),s.jsx("div",{className:"testimonial-rating",children:[...Array(k.rating)].map((Be,_e)=>s.jsx("span",{className:"star",children:"★"},_e))})]}),s.jsx("p",{className:"testimonial-text mb-0",children:k.text})]},q))})]})}),s.jsx("section",{id:"faq",className:"section section-white",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{className:"section-title",children:"Часто задаваемые вопросы"}),s.jsx("p",{className:"section-subtitle",children:"Ответы на популярные вопросы о наших услугах"})]}),s.jsx("div",{className:"faq-container",children:s.jsx("div",{className:"faq-list",children:Y.map((k,q)=>s.jsxs("div",{className:`faq-item ${h===q?"open":""}`,children:[s.jsxs("button",{className:"faq-question",onClick:()=>J(h===q?null:q),children:[s.jsx("span",{children:k.question}),s.jsx(ef,{className:"faq-icon"})]}),s.jsx("div",{className:"faq-answer",children:s.jsx("div",{className:"faq-answer-content",children:k.answer})})]},q))})})]})}),s.jsx("section",{className:"section section-gray",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{className:"section-title",children:"Почему выбирают нас"}),s.jsx("p",{className:"section-subtitle",children:"Надёжные поездки, прозрачные условия и внимание к каждому заказу"})]}),s.jsx("div",{className:"advantages-grid",children:Le.map((k,q)=>s.jsxs("div",{className:"advantage-card",children:[k.icon,s.jsx("h3",{className:"advantage-title",children:k.title}),s.jsx("p",{className:"advantage-description mb-0",children:k.description})]},q))})]})}),s.jsx("footer",{id:"contacts",className:"footer",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-section",children:[s.jsx("h4",{children:"Орск-Казань"}),s.jsx("p",{className:"footer-description",children:"Пассажирские перевозки по направлениям Орск - Оренбург - Казань, Казань - Оренбург - Орск и Набережные Челны. Также доступны трансфер, грузы, посылки и документы."}),s.jsxs("div",{className:"social-buttons",children:[s.jsxs("a",{href:"https://wa.me/79058450761",className:"social-btn social-btn-whatsapp",target:"_blank",rel:"noopener noreferrer",children:[s.jsx(Lo,{size:18}),"WhatsApp"]}),s.jsxs("a",{href:"https://t.me/orskkazan",className:"social-btn social-btn-telegram",target:"_blank",rel:"noopener noreferrer",children:[s.jsx(Au,{size:18}),"Telegram"]})]})]}),s.jsxs("div",{className:"footer-section",children:[s.jsx("h4",{children:"Контакты"}),s.jsxs("div",{className:"footer-contact",children:[s.jsx("a",{href:"tel:+79058450761",children:"+7 (905) 845-07-61"}),s.jsx("a",{href:"mailto:info@orsk-kazan.ru",children:"info@orsk-kazan.ru"}),s.jsx("p",{style:{fontSize:"var(--text-sm)",color:"var(--neutral-400)"},children:"Работаем 24/7"})]})]}),s.jsxs("div",{className:"footer-section",children:[s.jsx("h4",{children:"Маршруты"}),s.jsxs("div",{className:"footer-links",children:[s.jsx("a",{href:"#routes",children:"Орск — Оренбург — Казань"}),s.jsx("a",{href:"#routes",children:"Казань — Оренбург — Орск"}),s.jsx("a",{href:"#routes",children:"Орск — Набережные Челны"}),s.jsx("a",{href:"#services",children:"Чебоксары, Киров, Йошкар-Ола, Ижевск"})]})]}),s.jsxs("div",{className:"footer-section",children:[s.jsx("h4",{children:"Информация"}),s.jsxs("div",{className:"footer-links",children:[s.jsx("a",{href:"#services",children:"Услуги и посадка"}),s.jsx("a",{href:"#fleet",children:"Автопарк"}),s.jsx("a",{href:"#booking",children:"Бронирование"}),s.jsx("a",{href:"#testimonials",children:"Отзывы"}),s.jsx("a",{href:"#faq",children:"Вопросы и ответы"})]})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsx("p",{className:"footer-copyright",children:"© 2015–2026 Орск-Казань. Все права защищены."})})]})})]})}$d.createRoot(document.getElementById("root")).render(s.jsx(gf,{}));

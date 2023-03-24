(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Hc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ry="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iy=Hc(ry);function jd(t){return!!t||t===""}function qc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=je(s)?cy(s):qc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(je(t))return t;if(be(t))return t}}const oy=/;(?![^(]*\))/g,ay=/:(.+)/;function cy(t){const e={};return t.split(oy).forEach(n=>{if(n){const s=n.split(ay);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Tn(t){let e="";if(je(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Tn(t[n]);s&&(e+=s+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yt=t=>je(t)?t:t==null?"":W(t)||be(t)&&(t.toString===zd||!ee(t.toString))?JSON.stringify(t,Hd,2):String(t),Hd=(t,e)=>e&&e.__v_isRef?Hd(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:qd(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!W(e)&&!Wd(e)?String(e):e,ye={},_s=[],Rt=()=>{},ly=()=>!1,uy=/^on[^a-z]/,Eo=t=>uy.test(t),Kc=t=>t.startsWith("onUpdate:"),nt=Object.assign,zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hy=Object.prototype.hasOwnProperty,ae=(t,e)=>hy.call(t,e),W=Array.isArray,ws=t=>Io(t)==="[object Map]",qd=t=>Io(t)==="[object Set]",ee=t=>typeof t=="function",je=t=>typeof t=="string",Wc=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Kd=t=>be(t)&&ee(t.then)&&ee(t.catch),zd=Object.prototype.toString,Io=t=>zd.call(t),dy=t=>Io(t).slice(8,-1),Wd=t=>Io(t)==="[object Object]",Gc=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pi=Hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fy=/-(\w)/g,jt=bo(t=>t.replace(fy,(e,n)=>n?n.toUpperCase():"")),py=/\B([A-Z])/g,Bs=bo(t=>t.replace(py,"-$1").toLowerCase()),To=bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ga=bo(t=>t?`on${To(t)}`:""),wr=(t,e)=>!Object.is(t,e),xi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ki=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ja=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cu;const gy=()=>Cu||(Cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let mt;class Gd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&mt&&(this.parent=mt,this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=mt;try{return mt=this,e()}finally{mt=n}}}on(){mt=this}off(){mt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Qd(t){return new Gd(t)}function my(t,e=mt){e&&e.active&&e.effects.push(t)}function yy(){return mt}function vy(t){mt&&mt.cleanups.push(t)}const Qc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Yd=t=>(t.w&Sn)>0,Xd=t=>(t.n&Sn)>0,_y=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Sn},wy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Yd(r)&&!Xd(r)?r.delete(t):e[n++]=r,r.w&=~Sn,r.n&=~Sn}e.length=n}},Ha=new WeakMap;let tr=0,Sn=1;const qa=30;let At;const zn=Symbol(""),Ka=Symbol("");class Yc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,my(this,s)}run(){if(!this.active)return this.fn();let e=At,n=mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=At,At=this,mn=!0,Sn=1<<++tr,tr<=qa?_y(this):Au(this),this.fn()}finally{tr<=qa&&wy(this),Sn=1<<--tr,At=this.parent,mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){At===this?this.deferStop=!0:this.active&&(Au(this),this.onStop&&this.onStop(),this.active=!1)}}function Au(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mn=!0;const Jd=[];function js(){Jd.push(mn),mn=!1}function Hs(){const t=Jd.pop();mn=t===void 0?!0:t}function vt(t,e,n){if(mn&&At){let s=Ha.get(t);s||Ha.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Qc()),Zd(r)}}function Zd(t,e){let n=!1;tr<=qa?Xd(t)||(t.n|=Sn,n=!Yd(t)):n=!t.has(At),n&&(t.add(At),At.deps.push(t))}function Jt(t,e,n,s,r,i){const o=Ha.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Gc(n)&&a.push(o.get("length")):(a.push(o.get(zn)),ws(t)&&a.push(o.get(Ka)));break;case"delete":W(t)||(a.push(o.get(zn)),ws(t)&&a.push(o.get(Ka)));break;case"set":ws(t)&&a.push(o.get(zn));break}if(a.length===1)a[0]&&za(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);za(Qc(c))}}function za(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&ku(s);for(const s of n)s.computed||ku(s)}function ku(t,e){(t!==At||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ey=Hc("__proto__,__v_isRef,__isVue"),ef=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wc)),Iy=Xc(),by=Xc(!1,!0),Ty=Xc(!0),Ru=Sy();function Sy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let i=0,o=this.length;i<o;i++)vt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ue)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){js();const s=ue(this)[e].apply(this,n);return Hs(),s}}),t}function Xc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?By:of:e?rf:sf).get(s))return s;const o=W(s);if(!t&&o&&ae(Ru,r))return Reflect.get(Ru,r,i);const a=Reflect.get(s,r,i);return(Wc(r)?ef.has(r):Ey(r))||(t||vt(s,"get",r),e)?a:Ae(a)?o&&Gc(r)?a:a.value:be(a)?t?af(a):Nn(a):a}}const Cy=tf(),Ay=tf(!0);function tf(t=!1){return function(n,s,r,i){let o=n[s];if(As(o)&&Ae(o)&&!Ae(r))return!1;if(!t&&(!zi(r)&&!As(r)&&(o=ue(o),r=ue(r)),!W(n)&&Ae(o)&&!Ae(r)))return o.value=r,!0;const a=W(n)&&Gc(s)?Number(s)<n.length:ae(n,s),c=Reflect.set(n,s,r,i);return n===ue(i)&&(a?wr(r,o)&&Jt(n,"set",s,r):Jt(n,"add",s,r)),c}}function ky(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Jt(t,"delete",e,void 0),s}function Ry(t,e){const n=Reflect.has(t,e);return(!Wc(e)||!ef.has(e))&&vt(t,"has",e),n}function Ny(t){return vt(t,"iterate",W(t)?"length":zn),Reflect.ownKeys(t)}const nf={get:Iy,set:Cy,deleteProperty:ky,has:Ry,ownKeys:Ny},Dy={get:Ty,set(t,e){return!0},deleteProperty(t,e){return!0}},Oy=nt({},nf,{get:by,set:Ay}),Jc=t=>t,So=t=>Reflect.getPrototypeOf(t);function _i(t,e,n=!1,s=!1){t=t.__v_raw;const r=ue(t),i=ue(e);n||(e!==i&&vt(r,"get",e),vt(r,"get",i));const{has:o}=So(r),a=s?Jc:n?tl:Er;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function wi(t,e=!1){const n=this.__v_raw,s=ue(n),r=ue(t);return e||(t!==r&&vt(s,"has",t),vt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ei(t,e=!1){return t=t.__v_raw,!e&&vt(ue(t),"iterate",zn),Reflect.get(t,"size",t)}function Nu(t){t=ue(t);const e=ue(this);return So(e).has.call(e,t)||(e.add(t),Jt(e,"add",t,t)),this}function Du(t,e){e=ue(e);const n=ue(this),{has:s,get:r}=So(n);let i=s.call(n,t);i||(t=ue(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?wr(e,o)&&Jt(n,"set",t,e):Jt(n,"add",t,e),this}function Ou(t){const e=ue(this),{has:n,get:s}=So(e);let r=n.call(e,t);r||(t=ue(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Jt(e,"delete",t,void 0),i}function Pu(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Jt(t,"clear",void 0,void 0),n}function Ii(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ue(o),c=e?Jc:t?tl:Er;return!t&&vt(a,"iterate",zn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function bi(t,e,n){return function(...s){const r=this.__v_raw,i=ue(r),o=ws(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Jc:e?tl:Er;return!e&&vt(i,"iterate",c?Ka:zn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function an(t){return function(...e){return t==="delete"?!1:this}}function Py(){const t={get(i){return _i(this,i)},get size(){return Ei(this)},has:wi,add:Nu,set:Du,delete:Ou,clear:Pu,forEach:Ii(!1,!1)},e={get(i){return _i(this,i,!1,!0)},get size(){return Ei(this)},has:wi,add:Nu,set:Du,delete:Ou,clear:Pu,forEach:Ii(!1,!0)},n={get(i){return _i(this,i,!0)},get size(){return Ei(this,!0)},has(i){return wi.call(this,i,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:Ii(!0,!1)},s={get(i){return _i(this,i,!0,!0)},get size(){return Ei(this,!0)},has(i){return wi.call(this,i,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:Ii(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bi(i,!1,!1),n[i]=bi(i,!0,!1),e[i]=bi(i,!1,!0),s[i]=bi(i,!0,!0)}),[t,n,e,s]}const[xy,My,Ly,Uy]=Py();function Zc(t,e){const n=e?t?Uy:Ly:t?My:xy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ae(n,r)&&r in s?n:s,r,i)}const Fy={get:Zc(!1,!1)},Vy={get:Zc(!1,!0)},$y={get:Zc(!0,!1)},sf=new WeakMap,rf=new WeakMap,of=new WeakMap,By=new WeakMap;function jy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hy(t){return t.__v_skip||!Object.isExtensible(t)?0:jy(dy(t))}function Nn(t){return As(t)?t:el(t,!1,nf,Fy,sf)}function qy(t){return el(t,!1,Oy,Vy,rf)}function af(t){return el(t,!0,Dy,$y,of)}function el(t,e,n,s,r){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Hy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function yn(t){return As(t)?yn(t.__v_raw):!!(t&&t.__v_isReactive)}function As(t){return!!(t&&t.__v_isReadonly)}function zi(t){return!!(t&&t.__v_isShallow)}function cf(t){return yn(t)||As(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function Zn(t){return Ki(t,"__v_skip",!0),t}const Er=t=>be(t)?Nn(t):t,tl=t=>be(t)?af(t):t;function lf(t){mn&&At&&(t=ue(t),Zd(t.dep||(t.dep=Qc())))}function uf(t,e){t=ue(t),t.dep&&za(t.dep)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function Ot(t){return hf(t,!1)}function Ky(t){return hf(t,!0)}function hf(t,e){return Ae(t)?t:new zy(t,e)}class zy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Er(e)}get value(){return lf(this),this._value}set value(e){const n=this.__v_isShallow||zi(e)||As(e);e=n?e:ue(e),wr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Er(e),uf(this))}}function xe(t){return Ae(t)?t.value:t}const Wy={get:(t,e,n)=>xe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function df(t){return yn(t)?t:new Proxy(t,Wy)}function Gy(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=Yy(t,n);return e}class Qy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Yy(t,e,n){const s=t[e];return Ae(s)?s:new Qy(t,e,n)}var ff;class Xy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ff]=!1,this._dirty=!0,this.effect=new Yc(e,()=>{this._dirty||(this._dirty=!0,uf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ue(this);return lf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ff="__v_isReadonly";function Jy(t,e,n=!1){let s,r;const i=ee(t);return i?(s=t,r=Rt):(s=t.get,r=t.set),new Xy(s,r,i||!r,n)}function vn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Co(i,e,n)}return r}function Et(t,e,n,s){if(ee(t)){const i=vn(t,e,n,s);return i&&Kd(i)&&i.catch(o=>{Co(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Et(t[i],e,n,s));return r}function Co(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){vn(c,null,10,[t,o,a]);return}}Zy(t,n,r,s)}function Zy(t,e,n,s=!0){console.error(t)}let Ir=!1,Wa=!1;const Xe=[];let Ft=0;const Es=[];let Kt=null,Vn=0;const pf=Promise.resolve();let nl=null;function sl(t){const e=nl||pf;return t?e.then(this?t.bind(this):t):e}function ev(t){let e=Ft+1,n=Xe.length;for(;e<n;){const s=e+n>>>1;br(Xe[s])<t?e=s+1:n=s}return e}function rl(t){(!Xe.length||!Xe.includes(t,Ir&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?Xe.push(t):Xe.splice(ev(t.id),0,t),gf())}function gf(){!Ir&&!Wa&&(Wa=!0,nl=pf.then(yf))}function tv(t){const e=Xe.indexOf(t);e>Ft&&Xe.splice(e,1)}function nv(t){W(t)?Es.push(...t):(!Kt||!Kt.includes(t,t.allowRecurse?Vn+1:Vn))&&Es.push(t),gf()}function xu(t,e=Ir?Ft+1:0){for(;e<Xe.length;e++){const n=Xe[e];n&&n.pre&&(Xe.splice(e,1),e--,n())}}function mf(t){if(Es.length){const e=[...new Set(Es)];if(Es.length=0,Kt){Kt.push(...e);return}for(Kt=e,Kt.sort((n,s)=>br(n)-br(s)),Vn=0;Vn<Kt.length;Vn++)Kt[Vn]();Kt=null,Vn=0}}const br=t=>t.id==null?1/0:t.id,sv=(t,e)=>{const n=br(t)-br(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function yf(t){Wa=!1,Ir=!0,Xe.sort(sv);const e=Rt;try{for(Ft=0;Ft<Xe.length;Ft++){const n=Xe[Ft];n&&n.active!==!1&&vn(n,null,14)}}finally{Ft=0,Xe.length=0,mf(),Ir=!1,nl=null,(Xe.length||Es.length)&&yf()}}function rv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ye;d&&(r=n.map(p=>p.trim())),h&&(r=n.map(ja))}let a,c=s[a=ga(e)]||s[a=ga(jt(e))];!c&&i&&(c=s[a=ga(Bs(e))]),c&&Et(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Et(l,t,6,r)}}function vf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=vf(l,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(be(t)&&s.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):nt(o,i),be(t)&&s.set(t,o),o)}function Ao(t,e){return!t||!Eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Bs(e))||ae(t,e))}let Ze=null,_f=null;function Wi(t){const e=Ze;return Ze=t,_f=t&&t.type.__scopeId||null,e}function ks(t,e=Ze,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ku(-1);const i=Wi(e),o=t(...r);return Wi(i),s._d&&Ku(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function ma(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:v}=t;let S,C;const x=Wi(t);try{if(n.shapeFlag&4){const G=r||s;S=Ut(u.call(G,G,h,i,p,d,m)),C=c}else{const G=e;S=Ut(G.length>1?G(i,{attrs:c,slots:a,emit:l}):G(i,null)),C=e.props?c:iv(c)}}catch(G){ur.length=0,Co(G,t,1),S=ke(It)}let K=S;if(C&&v!==!1){const G=Object.keys(C),{shapeFlag:Z}=K;G.length&&Z&7&&(o&&G.some(Kc)&&(C=ov(C,o)),K=Cn(K,C))}return n.dirs&&(K=Cn(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),S=K,Wi(x),S}const iv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Eo(n))&&((e||(e={}))[n]=t[n]);return e},ov=(t,e)=>{const n={};for(const s in t)(!Kc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function av(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Mu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ao(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Mu(s,o,l):!0:!!o;return!1}function Mu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ao(n,i))return!0}return!1}function cv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const lv=t=>t.__isSuspense;function uv(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):nv(t)}function Mi(t,e){if(Be){let n=Be.provides;const s=Be.parent&&Be.parent.provides;s===n&&(n=Be.provides=Object.create(s)),n[t]=e}}function Nt(t,e,n=!1){const s=Be||Ze;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ee(e)?e.call(s.proxy):e}}const Lu={};function Wn(t,e,n){return wf(t,e,n)}function wf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ye){const a=Be;let c,l=!1,u=!1;if(Ae(t)?(c=()=>t.value,l=zi(t)):yn(t)?(c=()=>t,s=!0):W(t)?(u=!0,l=t.some(C=>yn(C)||zi(C)),c=()=>t.map(C=>{if(Ae(C))return C.value;if(yn(C))return jn(C);if(ee(C))return vn(C,a,2)})):ee(t)?e?c=()=>vn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Et(t,a,3,[d])}:c=Rt,e&&s){const C=c;c=()=>jn(C())}let h,d=C=>{h=S.onStop=()=>{vn(C,a,4)}};if(Cr)return d=Rt,e?n&&Et(e,a,3,[c(),u?[]:void 0,d]):c(),Rt;let p=u?[]:Lu;const m=()=>{if(!!S.active)if(e){const C=S.run();(s||l||(u?C.some((x,K)=>wr(x,p[K])):wr(C,p)))&&(h&&h(),Et(e,a,3,[C,p===Lu?void 0:p,d]),p=C)}else S.run()};m.allowRecurse=!!e;let v;r==="sync"?v=m:r==="post"?v=()=>ut(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),v=()=>rl(m));const S=new Yc(c,v);return e?n?m():p=S.run():r==="post"?ut(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&zc(a.scope.effects,S)}}function hv(t,e,n){const s=this.proxy,r=je(t)?t.includes(".")?Ef(s,t):()=>s[t]:t.bind(s,s);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Be;Rs(this);const a=wf(r,i.bind(s),n);return o?Rs(o):Gn(),a}function Ef(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function jn(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))jn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)jn(t[n],e);else if(qd(t)||ws(t))t.forEach(n=>{jn(n,e)});else if(Wd(t))for(const n in t)jn(t[n],e);return t}function dv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return No(()=>{t.isMounted=!0}),Cf(()=>{t.isUnmounting=!0}),t}const wt=[Function,Array],fv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wt,onEnter:wt,onAfterEnter:wt,onEnterCancelled:wt,onBeforeLeave:wt,onLeave:wt,onAfterLeave:wt,onLeaveCancelled:wt,onBeforeAppear:wt,onAppear:wt,onAfterAppear:wt,onAppearCancelled:wt},setup(t,{slots:e}){const n=ul(),s=dv();let r;return()=>{const i=e.default&&bf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==It){o=v;break}}const a=ue(t),{mode:c}=a;if(s.isLeaving)return ya(o);const l=Uu(o);if(!l)return ya(o);const u=Ga(l,a,s,n);Qa(l,u);const h=n.subTree,d=h&&Uu(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const v=m();r===void 0?r=v:v!==r&&(r=v,p=!0)}if(d&&d.type!==It&&(!$n(l,d)||p)){const v=Ga(d,a,s,n);if(Qa(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update()},ya(o);c==="in-out"&&l.type!==It&&(v.delayLeave=(S,C,x)=>{const K=If(s,d);K[String(d.key)]=d,S._leaveCb=()=>{C(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},pv=fv;function If(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ga(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:v,onAppear:S,onAfterAppear:C,onAppearCancelled:x}=e,K=String(t.key),G=If(n,t),Z=(M,ie)=>{M&&Et(M,s,9,ie)},pe=(M,ie)=>{const ce=ie[1];Z(M,ie),W(M)?M.every(Se=>Se.length<=1)&&ce():M.length<=1&&ce()},X={mode:i,persisted:o,beforeEnter(M){let ie=a;if(!n.isMounted)if(r)ie=v||a;else return;M._leaveCb&&M._leaveCb(!0);const ce=G[K];ce&&$n(t,ce)&&ce.el._leaveCb&&ce.el._leaveCb(),Z(ie,[M])},enter(M){let ie=c,ce=l,Se=u;if(!n.isMounted)if(r)ie=S||c,ce=C||l,Se=x||u;else return;let Fe=!1;const pt=M._enterCb=it=>{Fe||(Fe=!0,it?Z(Se,[M]):Z(ce,[M]),X.delayedLeave&&X.delayedLeave(),M._enterCb=void 0)};ie?pe(ie,[M,pt]):pt()},leave(M,ie){const ce=String(t.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return ie();Z(h,[M]);let Se=!1;const Fe=M._leaveCb=pt=>{Se||(Se=!0,ie(),pt?Z(m,[M]):Z(p,[M]),M._leaveCb=void 0,G[ce]===t&&delete G[ce])};G[ce]=t,d?pe(d,[M,Fe]):Fe()},clone(M){return Ga(M,e,n,s)}};return X}function ya(t){if(ko(t))return t=Cn(t),t.children=null,t}function Uu(t){return ko(t)?t.children?t.children[0]:void 0:t}function Qa(t,e){t.shapeFlag&6&&t.component?Qa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function bf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ht?(o.patchFlag&128&&r++,s=s.concat(bf(o.children,e,a))):(e||o.type!==It)&&s.push(a!=null?Cn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Tf(t){return ee(t)?{setup:t,name:t.name}:t}const lr=t=>!!t.type.__asyncLoader,ko=t=>t.type.__isKeepAlive;function gv(t,e){Sf(t,"a",e)}function mv(t,e){Sf(t,"da",e)}function Sf(t,e,n=Be){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ro(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ko(r.parent.vnode)&&yv(s,e,n,r),r=r.parent}}function yv(t,e,n,s){const r=Ro(e,t,s,!0);Do(()=>{zc(s[e],r)},n)}function Ro(t,e,n=Be,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;js(),Rs(n);const a=Et(e,n,t,o);return Gn(),Hs(),a});return s?r.unshift(i):r.push(i),i}}const rn=t=>(e,n=Be)=>(!Cr||t==="sp")&&Ro(t,(...s)=>e(...s),n),vv=rn("bm"),No=rn("m"),_v=rn("bu"),wv=rn("u"),Cf=rn("bum"),Do=rn("um"),Ev=rn("sp"),Iv=rn("rtg"),bv=rn("rtc");function Tv(t,e=Be){Ro("ec",t,e)}function Ya(t,e){const n=Ze;if(n===null)return t;const s=Mo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ye]=e[i];ee(o)&&(o={mounted:o,updated:o}),o.deep&&jn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Mn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(js(),Et(c,n,8,[t.el,a,t,e]),Hs())}}const Af="components";function il(t,e){return Cv(Af,t,!0,e)||t}const Sv=Symbol();function Cv(t,e,n=!0,s=!1){const r=Ze||Be;if(r){const i=r.type;if(t===Af){const a=s_(i,!1);if(a&&(a===e||a===jt(e)||a===To(jt(e))))return i}const o=Fu(r[t]||i[t],e)||Fu(r.appContext[t],e);return!o&&s?i:o}}function Fu(t,e){return t&&(t[e]||t[jt(e)]||t[To(jt(e))])}function Av(t,e,n,s){let r;const i=n&&n[s];if(W(t)||je(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(be(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function kv(t,e,n={},s,r){if(Ze.isCE||Ze.parent&&lr(Ze.parent)&&Ze.parent.isCE)return ke("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),Pe();const o=i&&kf(i(n)),a=Oo(ht,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function kf(t){return t.some(e=>Yi(e)?!(e.type===It||e.type===ht&&!kf(e.children)):!0)?t:null}const Xa=t=>t?Vf(t)?Mo(t)||t.proxy:Xa(t.parent):null,Gi=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xa(t.parent),$root:t=>Xa(t.root),$emit:t=>t.emit,$options:t=>ol(t),$forceUpdate:t=>t.f||(t.f=()=>rl(t.update)),$nextTick:t=>t.n||(t.n=sl.bind(t.proxy)),$watch:t=>hv.bind(t)}),Rv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ye&&ae(s,e))return o[e]=1,s[e];if(r!==ye&&ae(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==ye&&ae(n,e))return o[e]=4,n[e];Ja&&(o[e]=0)}}const u=Gi[e];let h,d;if(u)return e==="$attrs"&&vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ye&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==ye&&ae(r,e)?(r[e]=n,!0):s!==ye&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ye&&ae(t,o)||e!==ye&&ae(e,o)||(a=i[0])&&ae(a,o)||ae(s,o)||ae(Gi,o)||ae(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ja=!0;function Nv(t){const e=ol(t),n=t.proxy,s=t.ctx;Ja=!1,e.beforeCreate&&Vu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:v,deactivated:S,beforeDestroy:C,beforeUnmount:x,destroyed:K,unmounted:G,render:Z,renderTracked:pe,renderTriggered:X,errorCaptured:M,serverPrefetch:ie,expose:ce,inheritAttrs:Se,components:Fe,directives:pt,filters:it}=e;if(l&&Dv(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ve in o){const ge=o[ve];ee(ge)&&(s[ve]=ge.bind(n))}if(r){const ve=r.call(n,n);be(ve)&&(t.data=Nn(ve))}if(Ja=!0,i)for(const ve in i){const ge=i[ve],Tt=ee(ge)?ge.bind(n,n):ee(ge.get)?ge.get.bind(n,n):Rt,xn=!ee(ge)&&ee(ge.set)?ge.set.bind(n):Rt,St=We({get:Tt,set:xn});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>St.value,set:lt=>St.value=lt})}if(a)for(const ve in a)Rf(a[ve],s,n,ve);if(c){const ve=ee(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(ge=>{Mi(ge,ve[ge])})}u&&Vu(u,t,"c");function Re(ve,ge){W(ge)?ge.forEach(Tt=>ve(Tt.bind(n))):ge&&ve(ge.bind(n))}if(Re(vv,h),Re(No,d),Re(_v,p),Re(wv,m),Re(gv,v),Re(mv,S),Re(Tv,M),Re(bv,pe),Re(Iv,X),Re(Cf,x),Re(Do,G),Re(Ev,ie),W(ce))if(ce.length){const ve=t.exposed||(t.exposed={});ce.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:Tt=>n[ge]=Tt})})}else t.exposed||(t.exposed={});Z&&t.render===Rt&&(t.render=Z),Se!=null&&(t.inheritAttrs=Se),Fe&&(t.components=Fe),pt&&(t.directives=pt)}function Dv(t,e,n=Rt,s=!1){W(t)&&(t=Za(t));for(const r in t){const i=t[r];let o;be(i)?"default"in i?o=Nt(i.from||r,i.default,!0):o=Nt(i.from||r):o=Nt(i),Ae(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Vu(t,e,n){Et(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rf(t,e,n,s){const r=s.includes(".")?Ef(n,s):()=>n[s];if(je(t)){const i=e[t];ee(i)&&Wn(r,i)}else if(ee(t))Wn(r,t.bind(n));else if(be(t))if(W(t))t.forEach(i=>Rf(i,e,n,s));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&Wn(r,i,t)}}function ol(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Qi(c,l,o,!0)),Qi(c,e,o)),be(e)&&i.set(e,c),c}function Qi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Qi(t,i,n,!0),r&&r.forEach(o=>Qi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ov[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ov={data:$u,props:Un,emits:Un,methods:Un,computed:Un,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Un,directives:Un,watch:xv,provide:$u,inject:Pv};function $u(t,e){return e?t?function(){return nt(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function Pv(t,e){return Un(Za(t),Za(e))}function Za(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Un(t,e){return t?nt(nt(Object.create(null),t),e):e}function xv(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const s in e)n[s]=ot(t[s],e[s]);return n}function Mv(t,e,n,s=!1){const r={},i={};Ki(i,Po,1),t.propsDefaults=Object.create(null),Nf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:qy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Lv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ue(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ao(t.emitsOptions,d))continue;const p=e[d];if(c)if(ae(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const m=jt(d);r[m]=ec(c,a,m,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{Nf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=Bs(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ec(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ae(e,h)&&!0)&&(delete i[h],l=!0)}l&&Jt(t,"set","$attrs")}function Nf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Pi(c))continue;const l=e[c];let u;r&&ae(r,u=jt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ao(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ue(n),l=a||ye;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ec(r,c,h,l[h],t,!ae(l,h))}}return o}function ec(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ee(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Rs(r),s=l[n]=c.call(null,e),Gn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Bs(n))&&(s=!0))}return s}function Df(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[d,p]=Df(h,e,!0);nt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return be(t)&&s.set(t,_s),_s;if(W(i))for(let u=0;u<i.length;u++){const h=jt(i[u]);Bu(h)&&(o[h]=ye)}else if(i)for(const u in i){const h=jt(u);if(Bu(h)){const d=i[u],p=o[h]=W(d)||ee(d)?{type:d}:d;if(p){const m=qu(Boolean,p.type),v=qu(String,p.type);p[0]=m>-1,p[1]=v<0||m<v,(m>-1||ae(p,"default"))&&a.push(h)}}}const l=[o,a];return be(t)&&s.set(t,l),l}function Bu(t){return t[0]!=="$"}function ju(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Hu(t,e){return ju(t)===ju(e)}function qu(t,e){return W(e)?e.findIndex(n=>Hu(n,t)):ee(e)&&Hu(e,t)?0:-1}const Of=t=>t[0]==="_"||t==="$stable",al=t=>W(t)?t.map(Ut):[Ut(t)],Uv=(t,e,n)=>{if(e._n)return e;const s=ks((...r)=>al(e(...r)),n);return s._c=!1,s},Pf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Of(r))continue;const i=t[r];if(ee(i))e[r]=Uv(r,i,s);else if(i!=null){const o=al(i);e[r]=()=>o}}},xf=(t,e)=>{const n=al(e);t.slots.default=()=>n},Fv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Ki(e,"_",n)):Pf(e,t.slots={})}else t.slots={},e&&xf(t,e);Ki(t.slots,Po,1)},Vv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(nt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Pf(e,r)),o=e}else e&&(xf(t,e),o={default:1});if(i)for(const a in r)!Of(a)&&!(a in o)&&delete r[a]};function Mf(){return{app:null,config:{isNativeTag:ly,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $v=0;function Bv(t,e){return function(s,r=null){ee(s)||(s=Object.assign({},s)),r!=null&&!be(r)&&(r=null);const i=Mf(),o=new Set;let a=!1;const c=i.app={_uid:$v++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:i_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ke(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Mo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function tc(t,e,n,s,r=!1){if(W(t)){t.forEach((d,p)=>tc(d,e&&(W(e)?e[p]:e),n,s,r));return}if(lr(s)&&!r)return;const i=s.shapeFlag&4?Mo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(je(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Ae(l)&&(l.value=null)),ee(c))vn(c,a,12,[o,u]);else{const d=je(c),p=Ae(c);if(d||p){const m=()=>{if(t.f){const v=d?u[c]:c.value;r?W(v)&&zc(v,i):W(v)?v.includes(i)||v.push(i):d?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,ut(m,n)):m()}}}const ut=uv;function jv(t){return Hv(t)}function Hv(t,e){const n=gy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Rt,insertStaticContent:m}=t,v=(f,g,y,_=null,E=null,k=null,D=!1,A=null,R=!!g.dynamicChildren)=>{if(f===g)return;f&&!$n(f,g)&&(_=N(f),lt(f,E,k,!0),f=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:I,ref:$,shapeFlag:L}=g;switch(I){case cl:S(f,g,y,_);break;case It:C(f,g,y,_);break;case va:f==null&&x(g,y,_,D);break;case ht:Fe(f,g,y,_,E,k,D,A,R);break;default:L&1?Z(f,g,y,_,E,k,D,A,R):L&6?pt(f,g,y,_,E,k,D,A,R):(L&64||L&128)&&I.process(f,g,y,_,E,k,D,A,R,le)}$!=null&&E&&tc($,f&&f.ref,k,g||f,!g)},S=(f,g,y,_)=>{if(f==null)s(g.el=a(g.children),y,_);else{const E=g.el=f.el;g.children!==f.children&&l(E,g.children)}},C=(f,g,y,_)=>{f==null?s(g.el=c(g.children||""),y,_):g.el=f.el},x=(f,g,y,_)=>{[f.el,f.anchor]=m(f.children,g,y,_,f.el,f.anchor)},K=({el:f,anchor:g},y,_)=>{let E;for(;f&&f!==g;)E=d(f),s(f,y,_),f=E;s(g,y,_)},G=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),r(f),f=y;r(g)},Z=(f,g,y,_,E,k,D,A,R)=>{D=D||g.type==="svg",f==null?pe(g,y,_,E,k,D,A,R):ie(f,g,E,k,D,A,R)},pe=(f,g,y,_,E,k,D,A)=>{let R,I;const{type:$,props:L,shapeFlag:B,transition:Q,dirs:se}=f;if(R=f.el=o(f.type,k,L&&L.is,L),B&8?u(R,f.children):B&16&&M(f.children,R,null,_,E,k&&$!=="foreignObject",D,A),se&&Mn(f,null,_,"created"),L){for(const me in L)me!=="value"&&!Pi(me)&&i(R,me,null,L[me],k,f.children,_,E,P);"value"in L&&i(R,"value",null,L.value),(I=L.onVnodeBeforeMount)&&Lt(I,_,f)}X(R,f,f.scopeId,D,_),se&&Mn(f,null,_,"beforeMount");const _e=(!E||E&&!E.pendingBranch)&&Q&&!Q.persisted;_e&&Q.beforeEnter(R),s(R,g,y),((I=L&&L.onVnodeMounted)||_e||se)&&ut(()=>{I&&Lt(I,_,f),_e&&Q.enter(R),se&&Mn(f,null,_,"mounted")},E)},X=(f,g,y,_,E)=>{if(y&&p(f,y),_)for(let k=0;k<_.length;k++)p(f,_[k]);if(E){let k=E.subTree;if(g===k){const D=E.vnode;X(f,D,D.scopeId,D.slotScopeIds,E.parent)}}},M=(f,g,y,_,E,k,D,A,R=0)=>{for(let I=R;I<f.length;I++){const $=f[I]=A?un(f[I]):Ut(f[I]);v(null,$,g,y,_,E,k,D,A)}},ie=(f,g,y,_,E,k,D)=>{const A=g.el=f.el;let{patchFlag:R,dynamicChildren:I,dirs:$}=g;R|=f.patchFlag&16;const L=f.props||ye,B=g.props||ye;let Q;y&&Ln(y,!1),(Q=B.onVnodeBeforeUpdate)&&Lt(Q,y,g,f),$&&Mn(g,f,y,"beforeUpdate"),y&&Ln(y,!0);const se=E&&g.type!=="foreignObject";if(I?ce(f.dynamicChildren,I,A,y,_,se,k):D||ge(f,g,A,null,y,_,se,k,!1),R>0){if(R&16)Se(A,g,L,B,y,_,E);else if(R&2&&L.class!==B.class&&i(A,"class",null,B.class,E),R&4&&i(A,"style",L.style,B.style,E),R&8){const _e=g.dynamicProps;for(let me=0;me<_e.length;me++){const Ne=_e[me],Ct=L[Ne],us=B[Ne];(us!==Ct||Ne==="value")&&i(A,Ne,Ct,us,E,f.children,y,_,P)}}R&1&&f.children!==g.children&&u(A,g.children)}else!D&&I==null&&Se(A,g,L,B,y,_,E);((Q=B.onVnodeUpdated)||$)&&ut(()=>{Q&&Lt(Q,y,g,f),$&&Mn(g,f,y,"updated")},_)},ce=(f,g,y,_,E,k,D)=>{for(let A=0;A<g.length;A++){const R=f[A],I=g[A],$=R.el&&(R.type===ht||!$n(R,I)||R.shapeFlag&70)?h(R.el):y;v(R,I,$,null,_,E,k,D,!0)}},Se=(f,g,y,_,E,k,D)=>{if(y!==_){if(y!==ye)for(const A in y)!Pi(A)&&!(A in _)&&i(f,A,y[A],null,D,g.children,E,k,P);for(const A in _){if(Pi(A))continue;const R=_[A],I=y[A];R!==I&&A!=="value"&&i(f,A,I,R,D,g.children,E,k,P)}"value"in _&&i(f,"value",y.value,_.value)}},Fe=(f,g,y,_,E,k,D,A,R)=>{const I=g.el=f?f.el:a(""),$=g.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:Q}=g;Q&&(A=A?A.concat(Q):Q),f==null?(s(I,y,_),s($,y,_),M(g.children,y,$,E,k,D,A,R)):L>0&&L&64&&B&&f.dynamicChildren?(ce(f.dynamicChildren,B,y,E,k,D,A),(g.key!=null||E&&g===E.subTree)&&Lf(f,g,!0)):ge(f,g,y,$,E,k,D,A,R)},pt=(f,g,y,_,E,k,D,A,R)=>{g.slotScopeIds=A,f==null?g.shapeFlag&512?E.ctx.activate(g,y,_,D,R):it(g,y,_,E,k,D,R):Ve(f,g,R)},it=(f,g,y,_,E,k,D)=>{const A=f.component=Jv(f,_,E);if(ko(f)&&(A.ctx.renderer=le),Zv(A),A.asyncDep){if(E&&E.registerDep(A,Re),!f.el){const R=A.subTree=ke(It);C(null,R,g,y)}return}Re(A,f,g,y,E,k,D)},Ve=(f,g,y)=>{const _=g.component=f.component;if(av(f,g,y))if(_.asyncDep&&!_.asyncResolved){ve(_,g,y);return}else _.next=g,tv(_.update),_.update();else g.el=f.el,_.vnode=g},Re=(f,g,y,_,E,k,D)=>{const A=()=>{if(f.isMounted){let{next:$,bu:L,u:B,parent:Q,vnode:se}=f,_e=$,me;Ln(f,!1),$?($.el=se.el,ve(f,$,D)):$=se,L&&xi(L),(me=$.props&&$.props.onVnodeBeforeUpdate)&&Lt(me,Q,$,se),Ln(f,!0);const Ne=ma(f),Ct=f.subTree;f.subTree=Ne,v(Ct,Ne,h(Ct.el),N(Ct),f,E,k),$.el=Ne.el,_e===null&&cv(f,Ne.el),B&&ut(B,E),(me=$.props&&$.props.onVnodeUpdated)&&ut(()=>Lt(me,Q,$,se),E)}else{let $;const{el:L,props:B}=g,{bm:Q,m:se,parent:_e}=f,me=lr(g);if(Ln(f,!1),Q&&xi(Q),!me&&($=B&&B.onVnodeBeforeMount)&&Lt($,_e,g),Ln(f,!0),L&&te){const Ne=()=>{f.subTree=ma(f),te(L,f.subTree,f,E,null)};me?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Ne()):Ne()}else{const Ne=f.subTree=ma(f);v(null,Ne,y,_,f,E,k),g.el=Ne.el}if(se&&ut(se,E),!me&&($=B&&B.onVnodeMounted)){const Ne=g;ut(()=>Lt($,_e,Ne),E)}(g.shapeFlag&256||_e&&lr(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&ut(f.a,E),f.isMounted=!0,g=y=_=null}},R=f.effect=new Yc(A,()=>rl(I),f.scope),I=f.update=()=>R.run();I.id=f.uid,Ln(f,!0),I()},ve=(f,g,y)=>{g.component=f;const _=f.vnode.props;f.vnode=g,f.next=null,Lv(f,g.props,_,y),Vv(f,g.children,y),js(),xu(),Hs()},ge=(f,g,y,_,E,k,D,A,R=!1)=>{const I=f&&f.children,$=f?f.shapeFlag:0,L=g.children,{patchFlag:B,shapeFlag:Q}=g;if(B>0){if(B&128){xn(I,L,y,_,E,k,D,A,R);return}else if(B&256){Tt(I,L,y,_,E,k,D,A,R);return}}Q&8?($&16&&P(I,E,k),L!==I&&u(y,L)):$&16?Q&16?xn(I,L,y,_,E,k,D,A,R):P(I,E,k,!0):($&8&&u(y,""),Q&16&&M(L,y,_,E,k,D,A,R))},Tt=(f,g,y,_,E,k,D,A,R)=>{f=f||_s,g=g||_s;const I=f.length,$=g.length,L=Math.min(I,$);let B;for(B=0;B<L;B++){const Q=g[B]=R?un(g[B]):Ut(g[B]);v(f[B],Q,y,null,E,k,D,A,R)}I>$?P(f,E,k,!0,!1,L):M(g,y,_,E,k,D,A,R,L)},xn=(f,g,y,_,E,k,D,A,R)=>{let I=0;const $=g.length;let L=f.length-1,B=$-1;for(;I<=L&&I<=B;){const Q=f[I],se=g[I]=R?un(g[I]):Ut(g[I]);if($n(Q,se))v(Q,se,y,null,E,k,D,A,R);else break;I++}for(;I<=L&&I<=B;){const Q=f[L],se=g[B]=R?un(g[B]):Ut(g[B]);if($n(Q,se))v(Q,se,y,null,E,k,D,A,R);else break;L--,B--}if(I>L){if(I<=B){const Q=B+1,se=Q<$?g[Q].el:_;for(;I<=B;)v(null,g[I]=R?un(g[I]):Ut(g[I]),y,se,E,k,D,A,R),I++}}else if(I>B)for(;I<=L;)lt(f[I],E,k,!0),I++;else{const Q=I,se=I,_e=new Map;for(I=se;I<=B;I++){const gt=g[I]=R?un(g[I]):Ut(g[I]);gt.key!=null&&_e.set(gt.key,I)}let me,Ne=0;const Ct=B-se+1;let us=!1,bu=0;const Xs=new Array(Ct);for(I=0;I<Ct;I++)Xs[I]=0;for(I=Q;I<=L;I++){const gt=f[I];if(Ne>=Ct){lt(gt,E,k,!0);continue}let Mt;if(gt.key!=null)Mt=_e.get(gt.key);else for(me=se;me<=B;me++)if(Xs[me-se]===0&&$n(gt,g[me])){Mt=me;break}Mt===void 0?lt(gt,E,k,!0):(Xs[Mt-se]=I+1,Mt>=bu?bu=Mt:us=!0,v(gt,g[Mt],y,null,E,k,D,A,R),Ne++)}const Tu=us?qv(Xs):_s;for(me=Tu.length-1,I=Ct-1;I>=0;I--){const gt=se+I,Mt=g[gt],Su=gt+1<$?g[gt+1].el:_;Xs[I]===0?v(null,Mt,y,Su,E,k,D,A,R):us&&(me<0||I!==Tu[me]?St(Mt,y,Su,2):me--)}}},St=(f,g,y,_,E=null)=>{const{el:k,type:D,transition:A,children:R,shapeFlag:I}=f;if(I&6){St(f.component.subTree,g,y,_);return}if(I&128){f.suspense.move(g,y,_);return}if(I&64){D.move(f,g,y,le);return}if(D===ht){s(k,g,y);for(let L=0;L<R.length;L++)St(R[L],g,y,_);s(f.anchor,g,y);return}if(D===va){K(f,g,y);return}if(_!==2&&I&1&&A)if(_===0)A.beforeEnter(k),s(k,g,y),ut(()=>A.enter(k),E);else{const{leave:L,delayLeave:B,afterLeave:Q}=A,se=()=>s(k,g,y),_e=()=>{L(k,()=>{se(),Q&&Q()})};B?B(k,se,_e):_e()}else s(k,g,y)},lt=(f,g,y,_=!1,E=!1)=>{const{type:k,props:D,ref:A,children:R,dynamicChildren:I,shapeFlag:$,patchFlag:L,dirs:B}=f;if(A!=null&&tc(A,null,y,f,!0),$&256){g.ctx.deactivate(f);return}const Q=$&1&&B,se=!lr(f);let _e;if(se&&(_e=D&&D.onVnodeBeforeUnmount)&&Lt(_e,g,f),$&6)w(f.component,y,_);else{if($&128){f.suspense.unmount(y,_);return}Q&&Mn(f,null,g,"beforeUnmount"),$&64?f.type.remove(f,g,y,E,le,_):I&&(k!==ht||L>0&&L&64)?P(I,g,y,!1,!0):(k===ht&&L&384||!E&&$&16)&&P(R,g,y),_&&ls(f)}(se&&(_e=D&&D.onVnodeUnmounted)||Q)&&ut(()=>{_e&&Lt(_e,g,f),Q&&Mn(f,null,g,"unmounted")},y)},ls=f=>{const{type:g,el:y,anchor:_,transition:E}=f;if(g===ht){vi(y,_);return}if(g===va){G(f);return}const k=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:D,delayLeave:A}=E,R=()=>D(y,k);A?A(f.el,k,R):R()}else k()},vi=(f,g)=>{let y;for(;f!==g;)y=d(f),r(f),f=y;r(g)},w=(f,g,y)=>{const{bum:_,scope:E,update:k,subTree:D,um:A}=f;_&&xi(_),E.stop(),k&&(k.active=!1,lt(D,f,g,y)),A&&ut(A,g),ut(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},P=(f,g,y,_=!1,E=!1,k=0)=>{for(let D=k;D<f.length;D++)lt(f[D],g,y,_,E)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),V=(f,g,y)=>{f==null?g._vnode&&lt(g._vnode,null,null,!0):v(g._vnode||null,f,g,null,null,null,y),xu(),mf(),g._vnode=f},le={p:v,um:lt,m:St,r:ls,mt:it,mc:M,pc:ge,pbc:ce,n:N,o:t};let Te,te;return e&&([Te,te]=e(le)),{render:V,hydrate:Te,createApp:Bv(V,Te)}}function Ln({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lf(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=un(r[i]),a.el=o.el),n||Lf(o,a))}}function qv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Kv=t=>t.__isTeleport,ht=Symbol(void 0),cl=Symbol(void 0),It=Symbol(void 0),va=Symbol(void 0),ur=[];let kt=null;function Pe(t=!1){ur.push(kt=t?null:[])}function zv(){ur.pop(),kt=ur[ur.length-1]||null}let Tr=1;function Ku(t){Tr+=t}function Uf(t){return t.dynamicChildren=Tr>0?kt||_s:null,zv(),Tr>0&&kt&&kt.push(t),t}function at(t,e,n,s,r,i){return Uf(O(t,e,n,s,r,i,!0))}function Oo(t,e,n,s,r){return Uf(ke(t,e,n,s,r,!0))}function Yi(t){return t?t.__v_isVNode===!0:!1}function $n(t,e){return t.type===e.type&&t.key===e.key}const Po="__vInternal",Ff=({key:t})=>t!=null?t:null,Li=({ref:t,ref_key:e,ref_for:n})=>t!=null?je(t)||Ae(t)||ee(t)?{i:Ze,r:t,k:e,f:!!n}:t:null;function O(t,e=null,n=null,s=0,r=null,i=t===ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ff(e),ref:e&&Li(e),scopeId:_f,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(ll(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),Tr>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const ke=Wv;function Wv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Sv)&&(t=It),Yi(t)){const a=Cn(t,e,!0);return n&&ll(a,n),Tr>0&&!i&&kt&&(a.shapeFlag&6?kt[kt.indexOf(t)]=a:kt.push(a)),a.patchFlag|=-2,a}if(r_(t)&&(t=t.__vccOpts),e){e=Gv(e);let{class:a,style:c}=e;a&&!je(a)&&(e.class=Tn(a)),be(c)&&(cf(c)&&!W(c)&&(c=nt({},c)),e.style=qc(c))}const o=je(t)?1:lv(t)?128:Kv(t)?64:be(t)?4:ee(t)?2:0;return O(t,e,n,s,r,o,i,!0)}function Gv(t){return t?cf(t)||Po in t?nt({},t):t:null}function Cn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Qv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ff(a),ref:e&&e.ref?n&&r?W(r)?r.concat(Li(e)):[r,Li(e)]:Li(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor}}function Sr(t=" ",e=0){return ke(cl,null,t,e)}function xo(t="",e=!1){return e?(Pe(),Oo(It,null,t)):ke(It,null,t)}function Ut(t){return t==null||typeof t=="boolean"?ke(It):W(t)?ke(ht,null,t.slice()):typeof t=="object"?un(t):ke(cl,null,String(t))}function un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cn(t)}function ll(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ll(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Po in e)?e._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),s&64?(n=16,e=[Sr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Tn([e.class,s.class]));else if(r==="style")e.style=qc([e.style,s.style]);else if(Eo(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Lt(t,e,n,s=null){Et(t,e,7,[n,s])}const Yv=Mf();let Xv=0;function Jv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Yv,i={uid:Xv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Df(s,r),emitsOptions:vf(s,r),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rv.bind(null,i),t.ce&&t.ce(i),i}let Be=null;const ul=()=>Be||Ze,Rs=t=>{Be=t,t.scope.on()},Gn=()=>{Be&&Be.scope.off(),Be=null};function Vf(t){return t.vnode.shapeFlag&4}let Cr=!1;function Zv(t,e=!1){Cr=e;const{props:n,children:s}=t.vnode,r=Vf(t);Mv(t,n,r,e),Fv(t,s);const i=r?e_(t,e):void 0;return Cr=!1,i}function e_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zn(new Proxy(t.ctx,Rv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?n_(t):null;Rs(t),js();const i=vn(s,t,0,[t.props,r]);if(Hs(),Gn(),Kd(i)){if(i.then(Gn,Gn),e)return i.then(o=>{zu(t,o,e)}).catch(o=>{Co(o,t,0)});t.asyncDep=i}else zu(t,i,e)}else $f(t,e)}function zu(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=df(e)),$f(t,n)}let Wu;function $f(t,e,n){const s=t.type;if(!t.render){if(!e&&Wu&&!s.render){const r=s.template||ol(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=nt(nt({isCustomElement:i,delimiters:a},o),c);s.render=Wu(r,l)}}t.render=s.render||Rt}Rs(t),js(),Nv(t),Hs(),Gn()}function t_(t){return new Proxy(t.attrs,{get(e,n){return vt(t,"get","$attrs"),e[n]}})}function n_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=t_(t))},slots:t.slots,emit:t.emit,expose:e}}function Mo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(df(Zn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gi)return Gi[n](t)}}))}function s_(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function r_(t){return ee(t)&&"__vccOpts"in t}const We=(t,e)=>Jy(t,e,Cr);function Bf(t,e,n){const s=arguments.length;return s===2?be(e)&&!W(e)?Yi(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Yi(n)&&(n=[n]),ke(t,e,n))}const i_="3.2.40",o_="http://www.w3.org/2000/svg",Bn=typeof document<"u"?document:null,Gu=Bn&&Bn.createElement("template"),a_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Bn.createElementNS(o_,t):Bn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Gu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Gu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function c_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l_(t,e,n){const s=t.style,r=je(n);if(n&&!r){for(const i in n)nc(s,i,n[i]);if(e&&!je(e))for(const i in e)n[i]==null&&nc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Qu=/\s*!important$/;function nc(t,e,n){if(W(n))n.forEach(s=>nc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=u_(t,e);Qu.test(n)?t.setProperty(Bs(s),n.replace(Qu,""),"important"):t[s]=n}}const Yu=["Webkit","Moz","ms"],_a={};function u_(t,e){const n=_a[e];if(n)return n;let s=jt(e);if(s!=="filter"&&s in t)return _a[e]=s;s=To(s);for(let r=0;r<Yu.length;r++){const i=Yu[r]+s;if(i in t)return _a[e]=i}return e}const Xu="http://www.w3.org/1999/xlink";function h_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Xu,e.slice(6,e.length)):t.setAttributeNS(Xu,e,n);else{const i=iy(e);n==null||i&&!jd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function d_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=jd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[jf,f_]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let sc=0;const p_=Promise.resolve(),g_=()=>{sc=0},m_=()=>sc||(p_.then(g_),sc=jf());function ps(t,e,n,s){t.addEventListener(e,n,s)}function y_(t,e,n,s){t.removeEventListener(e,n,s)}function v_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=__(e);if(s){const l=i[e]=w_(s,r);ps(t,a,l,c)}else o&&(y_(t,a,o,c),i[e]=void 0)}}const Ju=/(?:Once|Passive|Capture)$/;function __(t){let e;if(Ju.test(t)){e={};let s;for(;s=t.match(Ju);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bs(t.slice(2)),e]}function w_(t,e){const n=s=>{const r=s.timeStamp||jf();(f_||r>=n.attached-1)&&Et(E_(s,n.value),e,5,[s])};return n.value=t,n.attached=m_(),n}function E_(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Zu=/^on[a-z]/,I_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?c_(t,s,r):e==="style"?l_(t,n,s):Eo(e)?Kc(e)||v_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):b_(t,e,s,r))?d_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),h_(t,e,s,r))};function b_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Zu.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Zu.test(e)&&je(n)?!1:e in t}const T_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};pv.props;const eh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>xi(e,n):e};function S_(t){t.target.composing=!0}function th(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nh={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=eh(r);const i=s||r.props&&r.props.type==="number";ps(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ja(a)),t._assign(a)}),n&&ps(t,"change",()=>{t.value=t.value.trim()}),e||(ps(t,"compositionstart",S_),ps(t,"compositionend",th),ps(t,"change",th))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=eh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&ja(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},C_=["ctrl","shift","alt","meta"],A_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>C_.some(n=>t[`${n}Key`]&&!e.includes(n))},hr=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=A_[e[r]];if(i&&i(n,e))return}return t(n,...s)},k_=nt({patchProp:I_},a_);let sh;function R_(){return sh||(sh=jv(k_))}const N_=(...t)=>{const e=R_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=D_(s);if(!r)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function D_(t){return je(t)?document.querySelector(t):t}var O_=!1;/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Hf;const Lo=t=>Hf=t,qf=Symbol();function rc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var dr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(dr||(dr={}));function P_(){const t=Qd(!0),e=t.run(()=>Ot({}));let n=[],s=[];const r=Zn({install(i){Lo(r),r._a=i,i.provide(qf,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!O_?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Kf=()=>{};function rh(t,e,n,s=Kf){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&ul()&&Do(r),r}function hs(t,...e){t.slice().forEach(n=>{n(...e)})}function ic(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];rc(r)&&rc(s)&&t.hasOwnProperty(n)&&!Ae(s)&&!yn(s)?t[n]=ic(r,s):t[n]=s}return t}const x_=Symbol();function M_(t){return!rc(t)||!t.hasOwnProperty(x_)}const{assign:zt}=Object;function L_(t){return!!(Ae(t)&&t.effect)}function U_(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Gy(n.state.value[t]);return zt(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Zn(We(()=>{Lo(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=zf(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(d=>{zt(d,h)})},c}function zf(t,e,n={},s,r,i){let o;const a=zt({actions:{}},n),c={deep:!0};let l,u,h=Zn([]),d=Zn([]),p;const m=s.state.value[t];!i&&!m&&(s.state.value[t]={}),Ot({});let v;function S(X){let M;l=u=!1,typeof X=="function"?(X(s.state.value[t]),M={type:dr.patchFunction,storeId:t,events:p}):(ic(s.state.value[t],X),M={type:dr.patchObject,payload:X,storeId:t,events:p});const ie=v=Symbol();sl().then(()=>{v===ie&&(l=!0)}),u=!0,hs(h,M,s.state.value[t])}const C=Kf;function x(){o.stop(),h=[],d=[],s._s.delete(t)}function K(X,M){return function(){Lo(s);const ie=Array.from(arguments),ce=[],Se=[];function Fe(Ve){ce.push(Ve)}function pt(Ve){Se.push(Ve)}hs(d,{args:ie,name:X,store:Z,after:Fe,onError:pt});let it;try{it=M.apply(this&&this.$id===t?this:Z,ie)}catch(Ve){throw hs(Se,Ve),Ve}return it instanceof Promise?it.then(Ve=>(hs(ce,Ve),Ve)).catch(Ve=>(hs(Se,Ve),Promise.reject(Ve))):(hs(ce,it),it)}}const G={_p:s,$id:t,$onAction:rh.bind(null,d),$patch:S,$reset:C,$subscribe(X,M={}){const ie=rh(h,X,M.detached,()=>ce()),ce=o.run(()=>Wn(()=>s.state.value[t],Se=>{(M.flush==="sync"?u:l)&&X({storeId:t,type:dr.direct,events:p},Se)},zt({},c,M)));return ie},$dispose:x},Z=Nn(zt({},G));s._s.set(t,Z);const pe=s._e.run(()=>(o=Qd(),o.run(()=>e())));for(const X in pe){const M=pe[X];if(Ae(M)&&!L_(M)||yn(M))i||(m&&M_(M)&&(Ae(M)?M.value=m[X]:ic(M,m[X])),s.state.value[t][X]=M);else if(typeof M=="function"){const ie=K(X,M);pe[X]=ie,a.actions[X]=M}}return zt(Z,pe),zt(ue(Z),pe),Object.defineProperty(Z,"$state",{get:()=>s.state.value[t],set:X=>{S(M=>{zt(M,X)})}}),s._p.forEach(X=>{zt(Z,o.run(()=>X({store:Z,app:s._a,pinia:s,options:a})))}),m&&i&&n.hydrate&&n.hydrate(Z.$state,m),l=!0,u=!0,Z}function Wf(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=ul();return a=a||l&&Nt(qf),a&&Lo(a),a=Hf,a._s.has(s)||(i?zf(s,e,r,a):U_(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
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
 *//**
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
 */const Gf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},F_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):F_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},V_=function(t){const e=Gf(t);return Qf.encodeByteArray(e,!0)},Xi=function(t){return V_(t).replace(/\./g,"")},Yf=function(t){try{return Qf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function B_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function j_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H_(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function q_(){return typeof indexedDB=="object"}function K_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function z_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const W_=()=>z_().__FIREBASE_DEFAULTS__,G_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Q_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yf(t[1]);return e&&JSON.parse(e)},hl=()=>{try{return W_()||G_()||Q_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xf=t=>{var e,n;return(n=(e=hl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Y_=t=>{const e=Xf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},X_=()=>{var t;return(t=hl())===null||t===void 0?void 0:t.config},Jf=t=>{var e;return(e=hl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class J_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Z_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xi(JSON.stringify(n)),Xi(JSON.stringify(o)),a].join(".")}/**
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
 */const ew="FirebaseError";class on extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ew,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qr.prototype.create)}}class qr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?tw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new on(r,a,s)}}function tw(t,e){return t.replace(nw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const nw=/\{\$([^}]+)}/g;function sw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ji(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ih(i)&&ih(o)){if(!Ji(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ih(t){return t!==null&&typeof t=="object"}/**
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
 */function Kr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function nr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function sr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rw(t,e){const n=new iw(t,e);return n.subscribe.bind(n)}class iw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ow(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=wa),r.error===void 0&&(r.error=wa),r.complete===void 0&&(r.complete=wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ow(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wa(){}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class es{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fn="[DEFAULT]";/**
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
 */class aw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new J_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lw(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cw(t){return t===Fn?void 0:t}function lw(t){return t.instantiationMode==="EAGER"}/**
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
 */class uw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const hw={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},dw=he.INFO,fw={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},pw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=fw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dl{constructor(e){this.name=e,this._logLevel=dw,this._logHandler=pw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const gw=(t,e)=>e.some(n=>t instanceof n);let oh,ah;function mw(){return oh||(oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yw(){return ah||(ah=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zf=new WeakMap,oc=new WeakMap,ep=new WeakMap,Ea=new WeakMap,fl=new WeakMap;function vw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_n(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zf.set(n,t)}).catch(()=>{}),fl.set(e,t),e}function _w(t){if(oc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});oc.set(t,e)}let ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ep.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ww(t){ac=t(ac)}function Ew(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ia(this),e,...n);return ep.set(s,e.sort?e.sort():[e]),_n(s)}:yw().includes(t)?function(...e){return t.apply(Ia(this),e),_n(Zf.get(this))}:function(...e){return _n(t.apply(Ia(this),e))}}function Iw(t){return typeof t=="function"?Ew(t):(t instanceof IDBTransaction&&_w(t),gw(t,mw())?new Proxy(t,ac):t)}function _n(t){if(t instanceof IDBRequest)return vw(t);if(Ea.has(t))return Ea.get(t);const e=Iw(t);return e!==t&&(Ea.set(t,e),fl.set(e,t)),e}const Ia=t=>fl.get(t);function bw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",c=>{s(_n(o.result),c.oldVersion,c.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Tw=["get","getKey","getAll","getAllKeys","count"],Sw=["put","add","delete","clear"],ba=new Map;function ch(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ba.get(e))return ba.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Sw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Tw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return ba.set(e,i),i}ww(t=>({...t,get:(e,n,s)=>ch(e,n)||t.get(e,n,s),has:(e,n)=>!!ch(e,n)||t.has(e,n)}));/**
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
 */class Cw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Aw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Aw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cc="@firebase/app",lh="0.8.2";/**
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
 */const ts=new dl("@firebase/app"),kw="@firebase/app-compat",Rw="@firebase/analytics-compat",Nw="@firebase/analytics",Dw="@firebase/app-check-compat",Ow="@firebase/app-check",Pw="@firebase/auth",xw="@firebase/auth-compat",Mw="@firebase/database",Lw="@firebase/database-compat",Uw="@firebase/functions",Fw="@firebase/functions-compat",Vw="@firebase/installations",$w="@firebase/installations-compat",Bw="@firebase/messaging",jw="@firebase/messaging-compat",Hw="@firebase/performance",qw="@firebase/performance-compat",Kw="@firebase/remote-config",zw="@firebase/remote-config-compat",Ww="@firebase/storage",Gw="@firebase/storage-compat",Qw="@firebase/firestore",Yw="@firebase/firestore-compat",Xw="firebase",Jw="9.12.1";/**
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
 */const lc="[DEFAULT]",Zw={[cc]:"fire-core",[kw]:"fire-core-compat",[Nw]:"fire-analytics",[Rw]:"fire-analytics-compat",[Ow]:"fire-app-check",[Dw]:"fire-app-check-compat",[Pw]:"fire-auth",[xw]:"fire-auth-compat",[Mw]:"fire-rtdb",[Lw]:"fire-rtdb-compat",[Uw]:"fire-fn",[Fw]:"fire-fn-compat",[Vw]:"fire-iid",[$w]:"fire-iid-compat",[Bw]:"fire-fcm",[jw]:"fire-fcm-compat",[Hw]:"fire-perf",[qw]:"fire-perf-compat",[Kw]:"fire-rc",[zw]:"fire-rc-compat",[Ww]:"fire-gcs",[Gw]:"fire-gcs-compat",[Qw]:"fire-fst",[Yw]:"fire-fst-compat","fire-js":"fire-js",[Xw]:"fire-js-all"};/**
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
 */const Zi=new Map,uc=new Map;function eE(t,e){try{t.container.addComponent(e)}catch(n){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ns(t){const e=t.name;if(uc.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;uc.set(e,t);for(const n of Zi.values())eE(n,t);return!0}function pl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const tE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wn=new qr("app","Firebase",tE);/**
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
 */class nE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=Jw;function tp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:lc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw wn.create("bad-app-name",{appName:String(r)});if(n||(n=X_()),!n)throw wn.create("no-options");const i=Zi.get(r);if(i){if(Ji(n,i.options)&&Ji(s,i.config))return i;throw wn.create("duplicate-app",{appName:r})}const o=new uw(r);for(const c of uc.values())o.addComponent(c);const a=new nE(n,s,o);return Zi.set(r,a),a}function np(t=lc){const e=Zi.get(t);if(!e&&t===lc)return tp();if(!e)throw wn.create("no-app",{appName:t});return e}function En(t,e,n){var s;let r=(s=Zw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(a.join(" "));return}Ns(new es(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const sE="firebase-heartbeat-database",rE=1,Ar="firebase-heartbeat-store";let Ta=null;function sp(){return Ta||(Ta=bw(sE,rE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ar)}}}).catch(t=>{throw wn.create("idb-open",{originalErrorMessage:t.message})})),Ta}async function iE(t){var e;try{return(await sp()).transaction(Ar).objectStore(Ar).get(rp(t))}catch(n){if(n instanceof on)ts.warn(n.message);else{const s=wn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ts.warn(s.message)}}}async function uh(t,e){var n;try{const r=(await sp()).transaction(Ar,"readwrite");return await r.objectStore(Ar).put(e,rp(t)),r.done}catch(s){if(s instanceof on)ts.warn(s.message);else{const r=wn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});ts.warn(r.message)}}}function rp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oE=1024,aE=30*24*60*60*1e3;class cE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=aE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hh(),{heartbeatsToSend:n,unsentEntries:s}=lE(this._heartbeatsCache.heartbeats),r=Xi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function hh(){return new Date().toISOString().substring(0,10)}function lE(t,e=oE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),dh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),dh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class uE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q_()?K_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function dh(t){return Xi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hE(t){Ns(new es("platform-logger",e=>new Cw(e),"PRIVATE")),Ns(new es("heartbeat",e=>new cE(e),"PRIVATE")),En(cc,lh,t),En(cc,lh,"esm2017"),En("fire-js","")}hE("");var dE="firebase",fE="9.12.1";/**
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
 */En(dE,fE,"app");var pE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,gl=gl||{},z=pE||self;function eo(){}function Uo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gE(t){return Object.prototype.hasOwnProperty.call(t,Sa)&&t[Sa]||(t[Sa]=++mE)}var Sa="closure_uid_"+(1e9*Math.random()>>>0),mE=0;function yE(t,e,n){return t.call.apply(t.bind,arguments)}function vE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=yE:et=vE,et.apply(null,arguments)}function Ti(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Dn(){this.s=this.s,this.o=this.o}var _E=0;Dn.prototype.s=!1;Dn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),_E!=0)&&gE(this)};Dn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ip=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ml(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function fh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Uo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var wE=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",eo,e),z.removeEventListener("test",eo,e)}catch{}return t}();function to(t){return/^[\s\xa0]*$/.test(t)}var ph=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ca(t,e){return t<e?-1:t>e?1:0}function Fo(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Vt(t){return Fo().indexOf(t)!=-1}function yl(t){return yl[" "](t),t}yl[" "]=eo;function EE(t){var e=TE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var IE=Vt("Opera"),Ds=Vt("Trident")||Vt("MSIE"),op=Vt("Edge"),hc=op||Ds,ap=Vt("Gecko")&&!(Fo().toLowerCase().indexOf("webkit")!=-1&&!Vt("Edge"))&&!(Vt("Trident")||Vt("MSIE"))&&!Vt("Edge"),bE=Fo().toLowerCase().indexOf("webkit")!=-1&&!Vt("Edge");function cp(){var t=z.document;return t?t.documentMode:void 0}var no;e:{var Aa="",ka=function(){var t=Fo();if(ap)return/rv:([^\);]+)(\)|;)/.exec(t);if(op)return/Edge\/([\d\.]+)/.exec(t);if(Ds)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bE)return/WebKit\/(\S+)/.exec(t);if(IE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ka&&(Aa=ka?ka[1]:""),Ds){var Ra=cp();if(Ra!=null&&Ra>parseFloat(Aa)){no=String(Ra);break e}}no=Aa}var TE={};function SE(){return EE(function(){let t=0;const e=ph(String(no)).split("."),n=ph("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ca(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ca(r[2].length==0,i[2].length==0)||Ca(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var dc;if(z.document&&Ds){var gh=cp();dc=gh||parseInt(no,10)||void 0}else dc=void 0;var CE=dc;function kr(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ap){e:{try{yl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:AE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&kr.X.h.call(this)}}Qe(kr,tt);var AE={2:"touch",3:"pen",4:"mouse"};kr.prototype.h=function(){kr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gr="closure_listenable_"+(1e6*Math.random()|0),kE=0;function RE(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++kE,this.ba=this.ea=!1}function Vo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function vl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function lp(t){const e={};for(const n in t)e[n]=t[n];return e}const mh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function up(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<mh.length;i++)n=mh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function $o(t){this.src=t,this.g={},this.h=0}$o.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=pc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new RE(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function fc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ip(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Vo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var _l="closure_lm_"+(1e6*Math.random()|0),Na={};function hp(t,e,n,s,r){if(s&&s.once)return fp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)hp(t,e[i],n,s,r);return null}return n=Il(n),t&&t[Gr]?t.N(e,n,Wr(s)?!!s.capture:!!s,r):dp(t,e,n,!1,s,r)}function dp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Wr(r)?!!r.capture:!!r,a=El(t);if(a||(t[_l]=a=new $o(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=NE(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)wE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(gp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function NE(){function t(n){return e.call(t.src,t.listener,n)}const e=DE;return t}function fp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)fp(t,e[i],n,s,r);return null}return n=Il(n),t&&t[Gr]?t.O(e,n,Wr(s)?!!s.capture:!!s,r):dp(t,e,n,!0,s,r)}function pp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)pp(t,e[i],n,s,r);else s=Wr(s)?!!s.capture:!!s,n=Il(n),t&&t[Gr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=pc(i,n,s,r),-1<n&&(Vo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=El(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pc(e,n,s,r)),(n=-1<t?e[t]:null)&&wl(n))}function wl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Gr])fc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(gp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=El(e))?(fc(n,t),n.h==0&&(n.src=null,e[_l]=null)):Vo(t)}}}function gp(t){return t in Na?Na[t]:Na[t]="on"+t}function DE(t,e){if(t.ba)t=!0;else{e=new kr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wl(t),t=n.call(s,e)}return t}function El(t){return t=t[_l],t instanceof $o?t:null}var Da="__closure_events_fn_"+(1e9*Math.random()>>>0);function Il(t){return typeof t=="function"?t:(t[Da]||(t[Da]=function(e){return t.handleEvent(e)}),t[Da])}function qe(){Dn.call(this),this.i=new $o(this),this.P=this,this.I=null}Qe(qe,Dn);qe.prototype[Gr]=!0;qe.prototype.removeEventListener=function(t,e,n,s){pp(this,t,e,n,s)};function Ge(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var r=e;e=new tt(s,t),up(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Si(o,s,!0,e)&&r}if(o=e.g=t,r=Si(o,s,!0,e)&&r,r=Si(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Si(o,s,!1,e)&&r}qe.prototype.M=function(){if(qe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Vo(n[s]);delete t.g[e],t.h--}}this.I=null};qe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Si(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&fc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var bl=z.JSON.stringify;function OE(){var t=vp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class PE{constructor(){this.h=this.g=null}add(e,n){const s=mp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var mp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new xE,t=>t.reset());class xE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ME(t){z.setTimeout(()=>{throw t},0)}function yp(t,e){gc||LE(),mc||(gc(),mc=!0),vp.add(t,e)}var gc;function LE(){var t=z.Promise.resolve(void 0);gc=function(){t.then(UE)}}var mc=!1,vp=new PE;function UE(){for(var t;t=OE();){try{t.h.call(t.g)}catch(n){ME(n)}var e=mp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}mc=!1}function Bo(t,e){qe.call(this),this.h=t||1,this.g=e||z,this.j=et(this.lb,this),this.l=Date.now()}Qe(Bo,qe);U=Bo.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ge(this,"tick"),this.ca&&(Tl(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Bo.X.M.call(this),Tl(this),delete this.g};function Sl(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function _p(t){t.g=Sl(()=>{t.g=null,t.i&&(t.i=!1,_p(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class FE extends Dn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_p(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rr(t){Dn.call(this),this.h=t,this.g={}}Qe(Rr,Dn);var yh=[];function wp(t,e,n,s){Array.isArray(n)||(n&&(yh[0]=n.toString()),n=yh);for(var r=0;r<n.length;r++){var i=hp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ep(t){vl(t.g,function(e,n){this.g.hasOwnProperty(n)&&wl(e)},t),t.g={}}Rr.prototype.M=function(){Rr.X.M.call(this),Ep(this)};Rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jo(){this.g=!0}jo.prototype.Aa=function(){this.g=!1};function VE(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function $E(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ms(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+jE(t,n)+(s?" "+s:"")})}function BE(t,e){t.info(function(){return"TIMEOUT: "+e})}jo.prototype.info=function(){};function jE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return bl(n)}catch{return e}}var os={},vh=null;function Ho(){return vh=vh||new qe}os.Pa="serverreachability";function Ip(t){tt.call(this,os.Pa,t)}Qe(Ip,tt);function Nr(t){const e=Ho();Ge(e,new Ip(e))}os.STAT_EVENT="statevent";function bp(t,e){tt.call(this,os.STAT_EVENT,t),this.stat=e}Qe(bp,tt);function ct(t){const e=Ho();Ge(e,new bp(e,t))}os.Qa="timingevent";function Tp(t,e){tt.call(this,os.Qa,t),this.size=e}Qe(Tp,tt);function Qr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var qo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Sp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Cl(){}Cl.prototype.h=null;function _h(t){return t.h||(t.h=t.i())}function Cp(){}var Yr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Al(){tt.call(this,"d")}Qe(Al,tt);function kl(){tt.call(this,"c")}Qe(kl,tt);var yc;function Ko(){}Qe(Ko,Cl);Ko.prototype.g=function(){return new XMLHttpRequest};Ko.prototype.i=function(){return{}};yc=new Ko;function Xr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Rr(this),this.O=HE,t=hc?125:void 0,this.T=new Bo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ap}function Ap(){this.i=null,this.g="",this.h=!1}var HE=45e3,vc={},so={};U=Xr.prototype;U.setTimeout=function(t){this.O=t};function _c(t,e,n){t.K=1,t.v=Wo(Zt(e)),t.s=n,t.P=!0,kp(t,null)}function kp(t,e){t.F=Date.now(),Jr(t),t.A=Zt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Lp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Ap,t.g=sg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new FE(et(t.La,t,t.g),t.N)),wp(t.S,t.g,"readystatechange",t.ib),e=t.H?lp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Nr(),VE(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&Wt(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=Wt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||hc||this.g&&(this.h.h||this.g.fa()||bh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Nr(3):Nr(2)),zo(this);var n=this.g.aa();this.Y=n;t:if(Rp(this)){var s=bh(this.g);t="";var r=s.length,i=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hn(this),fr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,$E(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!to(a)){var l=a;break t}}l=null}if(n=l)ms(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wc(this,n);else{this.i=!1,this.o=3,ct(12),Hn(this),fr(this);break e}}this.P?(Np(this,u,o),hc&&this.i&&u==3&&(wp(this.S,this.T,"tick",this.hb),this.T.start())):(ms(this.j,this.m,o,null),wc(this,o)),u==4&&Hn(this),this.i&&!this.I&&(u==4?Zp(this.l,this):(this.i=!1,Jr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Hn(this),fr(this)}}}catch{}finally{}};function Rp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Np(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=qE(t,n),r==so){e==4&&(t.o=4,ct(14),s=!1),ms(t.j,t.m,null,"[Incomplete Response]");break}else if(r==vc){t.o=4,ct(15),ms(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ms(t.j,t.m,r,null),wc(t,r);Rp(t)&&r!=so&&r!=vc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ml(e),e.K=!0,ct(11))):(ms(t.j,t.m,n,"[Invalid Chunked Response]"),Hn(t),fr(t))}U.hb=function(){if(this.g){var t=Wt(this.g),e=this.g.fa();this.C<e.length&&(zo(this),Np(this,t,e),this.i&&t!=4&&Jr(this))}};function qE(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?so:(n=Number(e.substring(n,s)),isNaN(n)?vc:(s+=1,s+n>e.length?so:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,Hn(this)};function Jr(t){t.V=Date.now()+t.O,Dp(t,t.O)}function Dp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Qr(et(t.gb,t),e)}function zo(t){t.B&&(z.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(BE(this.j,this.A),this.K!=2&&(Nr(),ct(17)),Hn(this),this.o=2,fr(this)):Dp(this,this.V-t)};function fr(t){t.l.G==0||t.I||Zp(t.l,t)}function Hn(t){zo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Tl(t.T),Ep(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function wc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ec(n.h,t))){if(!t.J&&Ec(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)oo(n),Yo(n);else break e;xl(n),ct(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Qr(et(n.cb,n),6e3));if(1>=Vp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else qn(n,11)}else if((t.J||n.g==t)&&oo(n),!to(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Rl(i,i.h),i.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Ee(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ng(s,s.H?s.ka:null,s.V),o.J){$p(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(zo(a),Jr(a)),s.g=o}else Xp(s);0<n.i.length&&Xo(n)}else l[0]!="stop"&&l[0]!="close"||qn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?qn(n,7):Pl(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Nr(4)}catch{}}function KE(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Uo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function zE(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Uo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Op(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Uo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=zE(t),s=KE(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Qn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qn){this.h=e!==void 0?e:t.h,ro(this,t.j),this.s=t.s,this.g=t.g,io(this,t.m),this.l=t.l,e=t.i;var n=new Dr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),wh(this,n),this.o=t.o}else t&&(n=String(t).match(Pp))?(this.h=!!e,ro(this,n[1]||"",!0),this.s=rr(n[2]||""),this.g=rr(n[3]||"",!0),io(this,n[4]),this.l=rr(n[5]||"",!0),wh(this,n[6]||"",!0),this.o=rr(n[7]||"")):(this.h=!!e,this.i=new Dr(null,this.h))}Qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ir(e,Eh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ir(e,Eh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ir(n,n.charAt(0)=="/"?YE:QE,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ir(n,JE)),t.join("")};function Zt(t){return new Qn(t)}function ro(t,e,n){t.j=n?rr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function io(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wh(t,e,n){e instanceof Dr?(t.i=e,ZE(t.i,t.h)):(n||(e=ir(e,XE)),t.i=new Dr(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Wo(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function rr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ir(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Eh=/[#\/\?@]/g,QE=/[#\?:]/g,YE=/[#\?]/g,XE=/[#\?@]/g,JE=/#/g;function Dr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function On(t){t.g||(t.g=new Map,t.h=0,t.i&&WE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Dr.prototype;U.add=function(t,e){On(this),this.i=null,t=qs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function xp(t,e){On(t),e=qs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Mp(t,e){return On(t),e=qs(t,e),t.g.has(e)}U.forEach=function(t,e){On(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){On(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){On(this);let e=[];if(typeof t=="string")Mp(this,t)&&(e=e.concat(this.g.get(qs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return On(this),this.i=null,t=qs(this,t),Mp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Lp(t,e,n){xp(t,e),0<n.length&&(t.i=null,t.g.set(qs(t,e),ml(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function qs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZE(t,e){e&&!t.j&&(On(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(xp(this,s),Lp(this,r,n))},t)),t.j=e}var e0=class{constructor(t,e){this.h=t,this.g=e}};function Up(t){this.l=t||t0,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var t0=10;function Fp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vp(t){return t.h?1:t.g?t.g.size:0}function Ec(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rl(t,e){t.g?t.g.add(e):t.h=e}function $p(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Up.prototype.cancel=function(){if(this.i=Bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ml(t.i)}function Nl(){}Nl.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Nl.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function n0(){this.g=new Nl}function s0(t,e,n){const s=n||"";try{Op(t,function(r,i){let o=r;Wr(r)&&(o=bl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function r0(t,e){const n=new jo;if(z.Image){const s=new Image;s.onload=Ti(Ci,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ti(Ci,n,s,"TestLoadImage: error",!1,e),s.onabort=Ti(Ci,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ti(Ci,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ci(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Zr(t){this.l=t.ac||null,this.j=t.jb||!1}Qe(Zr,Cl);Zr.prototype.g=function(){return new Go(this.l,this.j)};Zr.prototype.i=function(t){return function(){return t}}({});function Go(t,e){qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(Go,qe);var Dl=0;U=Go.prototype;U.open=function(t,e){if(this.readyState!=Dl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Or(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=Dl};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function jp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ei(this):Or(this),this.readyState==3&&jp(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,ei(this))};U.Ua=function(t){this.g&&(this.response=t,ei(this))};U.ga=function(){this.g&&ei(this)};function ei(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Or(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Or(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var i0=z.JSON.parse;function Ce(t){qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hp,this.K=this.L=!1}Qe(Ce,qe);var Hp="",o0=/^https?$/i,a0=["POST","PUT"];U=Ce.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yc.g(),this.C=this.u?_h(this.u):_h(yc),this.g.onreadystatechange=et(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ih(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=ip(a0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zp(this),0<this.B&&((this.K=c0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.qa,this)):this.A=Sl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ih(this,i)}};function c0(t){return Ds&&SE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof gl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function Ih(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qp(t),Qo(t)}function qp(t){t.D||(t.D=!0,Ge(t,"complete"),Ge(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Qo(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qo(this,!0)),Ce.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?Kp(this):this.fb())};U.fb=function(){Kp(this)};function Kp(t){if(t.h&&typeof gl<"u"&&(!t.C[1]||Wt(t)!=4||t.aa()!=2)){if(t.v&&Wt(t)==4)Sl(t.Ha,0,t);else if(Ge(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Pp)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!o0.test(r?r.toLowerCase():"")}n=s}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var o=2<Wt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",qp(t)}}finally{Qo(t)}}}}function Qo(t,e){if(t.g){zp(t);const n=t.g,s=t.C[0]?eo:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=s}catch{}}}function zp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Wt(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),i0(e)}};function bh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Wp(t){let e="";return vl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ol(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Wp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gp(t){this.Ca=0,this.i=[],this.j=new jo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Js("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Js("baseRetryDelayMs",5e3,t),this.bb=Js("retryDelaySeedMs",1e4,t),this.$a=Js("forwardChannelMaxRetries",2,t),this.ta=Js("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Up(t&&t.concurrentRequestLimit),this.Fa=new n0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=Gp.prototype;U.ma=8;U.G=1;function Pl(t){if(Qp(t),t.G==3){var e=t.U++,n=Zt(t.F);Ee(n,"SID",t.I),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),ti(t,n),e=new Xr(t,t.j,e,void 0),e.K=2,e.v=Wo(Zt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=sg(e.l,null),e.g.da(e.v)),e.F=Date.now(),Jr(e)}tg(t)}function Yo(t){t.g&&(Ml(t),t.g.cancel(),t.g=null)}function Qp(t){Yo(t),t.u&&(z.clearTimeout(t.u),t.u=null),oo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Xo(t){Fp(t.h)||t.m||(t.m=!0,yp(t.Ja,t),t.C=0)}function l0(t,e){return Vp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Qr(et(t.Ja,t,e),eg(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Xr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=lp(i),up(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Yp(this,r,e),n=Zt(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),ti(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Wp(i)))+"&"+e:this.o&&Ol(n,this.o,i)),Rl(this.h,r),this.Ya&&Ee(n,"TYPE","init"),this.O?(Ee(n,"$req",e),Ee(n,"SID","null"),r.Z=!0,_c(r,n,null)):_c(r,n,e),this.G=2}}else this.G==3&&(t?Th(this,t):this.i.length==0||Fp(this.h)||Th(this))};function Th(t,e){var n;e?n=e.m:n=t.U++;const s=Zt(t.F);Ee(s,"SID",t.I),Ee(s,"RID",n),Ee(s,"AID",t.T),ti(t,s),t.o&&t.s&&Ol(s,t.o,t.s),n=new Xr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Yp(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rl(t.h,n),_c(n,s,e)}function ti(t,e){t.ia&&vl(t.ia,function(n,s){Ee(e,s,n)}),t.l&&Op({},function(n,s){Ee(e,s,n)})}function Yp(t,e,n){n=Math.min(t.i.length,n);var s=t.l?et(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{s0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Xp(t){t.g||t.u||(t.Z=1,yp(t.Ia,t),t.A=0)}function xl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Qr(et(t.Ia,t),eg(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,Jp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Qr(et(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ct(10),Yo(this),Jp(this))};function Ml(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Jp(t){t.g=new Xr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Zt(t.sa);Ee(e,"RID","rpc"),Ee(e,"SID",t.I),Ee(e,"CI",t.L?"0":"1"),Ee(e,"AID",t.T),Ee(e,"TYPE","xmlhttp"),ti(t,e),t.o&&t.s&&Ol(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Wo(Zt(e)),n.s=null,n.P=!0,kp(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Yo(this),xl(this),ct(19))};function oo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Zp(t,e){var n=null;if(t.g==e){oo(t),Ml(t),t.g=null;var s=2}else if(Ec(t.h,e))n=e.D,$p(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ho(),Ge(s,new Tp(s,n)),Xo(t)}else Xp(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&l0(t,e)||s==2&&xl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:qn(t,5);break;case 4:qn(t,10);break;case 3:qn(t,6);break;default:qn(t,2)}}}function eg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function qn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=et(t.kb,t);n||(n=new Qn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||ro(n,"https"),Wo(n)),r0(n.toString(),s)}else ct(2);t.G=0,t.l&&t.l.va(e),tg(t),Qp(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function tg(t){if(t.G=0,t.la=[],t.l){const e=Bp(t.h);(e.length!=0||t.i.length!=0)&&(fh(t.la,e),fh(t.la,t.i),t.h.i.length=0,ml(t.i),t.i.length=0),t.l.ua()}}function ng(t,e,n){var s=n instanceof Qn?Zt(n):new Qn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),io(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Qn(null,void 0);s&&ro(i,s),e&&(i.g=e),r&&io(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ee(s,n,e),Ee(s,"VER",t.ma),ti(t,s),s}function sg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ce(new Zr({jb:!0})):new Ce(t.ra),e.Ka(t.H),e}function rg(){}U=rg.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function ao(){if(Ds&&!(10<=Number(CE)))throw Error("Environmental error: no available transport.")}ao.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){qe.call(this),this.g=new Gp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!to(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!to(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ks(this)}Qe(_t,qe);_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ng(t,null,t.V),Xo(t)};_t.prototype.close=function(){Pl(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bl(t),t=n);e.i.push(new e0(e.ab++,t)),e.G==3&&Xo(e)};_t.prototype.M=function(){this.g.l=null,delete this.j,Pl(this.g),delete this.g,_t.X.M.call(this)};function ig(t){Al.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(ig,Al);function og(){kl.call(this),this.status=1}Qe(og,kl);function Ks(t){this.g=t}Qe(Ks,rg);Ks.prototype.xa=function(){Ge(this.g,"a")};Ks.prototype.wa=function(t){Ge(this.g,new ig(t))};Ks.prototype.va=function(t){Ge(this.g,new og)};Ks.prototype.ua=function(){Ge(this.g,"b")};ao.prototype.createWebChannel=ao.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;qo.NO_ERROR=0;qo.TIMEOUT=8;qo.HTTP_ERROR=6;Sp.COMPLETE="complete";Cp.EventType=Yr;Yr.OPEN="a";Yr.CLOSE="b";Yr.ERROR="c";Yr.MESSAGE="d";qe.prototype.listen=qe.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.Oa;Ce.prototype.getLastErrorCode=Ce.prototype.Ea;Ce.prototype.getStatus=Ce.prototype.aa;Ce.prototype.getResponseJson=Ce.prototype.Sa;Ce.prototype.getResponseText=Ce.prototype.fa;Ce.prototype.send=Ce.prototype.da;Ce.prototype.setWithCredentials=Ce.prototype.Ka;var u0=function(){return new ao},h0=function(){return Ho()},Oa=qo,d0=Sp,f0=os,Sh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},p0=Zr,Ai=Cp,g0=Ce;const Ch="@firebase/firestore";/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let zs="9.12.1";/**
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
 */const ns=new dl("@firebase/firestore");function Ah(){return ns.logLevel}function F(t,...e){if(ns.logLevel<=he.DEBUG){const n=e.map(Ll);ns.debug(`Firestore (${zs}): ${t}`,...n)}}function en(t,...e){if(ns.logLevel<=he.ERROR){const n=e.map(Ll);ns.error(`Firestore (${zs}): ${t}`,...n)}}function Ic(t,...e){if(ns.logLevel<=he.WARN){const n=e.map(Ll);ns.warn(`Firestore (${zs}): ${t}`,...n)}}function Ll(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+t;throw en(e),new Error(e)}function we(t,e){t||Y()}function J(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ag{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class m0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class y0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class v0{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(we(typeof s.accessToken=="string"),new ag(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Ye(e)}}class _0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(we(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class w0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new _0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class E0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.A=n.token,new E0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function b0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class cg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=b0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function de(t,e){return t<e?-1:t>e?1:0}function Os(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Me(0,0))}static max(){return new ne(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Pr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Pr{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const T0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Pr{construct(e,n,s){return new Je(e,n,s)}static isValidIdentifier(e){return T0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new j(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new j(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ie.fromString(e))}static fromName(e){return new H(Ie.fromString(e).popFirst(5))}static empty(){return new H(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ie(e.slice()))}}function S0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ne.fromTimestamp(s===1e9?new Me(n+1,0):new Me(n,s));return new An(r,H.empty(),e)}function C0(t){return new An(t.readTime,t.key,-1)}class An{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new An(ne.min(),H.empty(),-1)}static max(){return new An(ne.max(),H.empty(),-1)}}function A0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const k0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class R0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ni(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==k0)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function si(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ul{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function kh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function as(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Ul.at=-1;class Ue{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ki(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ki(this.root,e,this.comparator,!1)}getReverseIterator(){return new ki(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ki(this.root,e,this.comparator,!0)}}class ki{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ke.RED,this.left=r!=null?r:Ke.EMPTY,this.right=i!=null?i:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ke(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rh(this.data.getIterator())}getIteratorFrom(e){return new Rh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class Rh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Le(Je.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const N0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(t){if(we(!!t),typeof t=="string"){let e=0;const n=N0.exec(t);if(we(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ps(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */function ug(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hg(t){const e=t.mapValue.fields.__previous_value__;return ug(e)?hg(e):e}function xr(t){const e=kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class D0{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Mr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mr&&e.projectId===this.projectId&&e.database===this.database}}function Jo(t){return t==null}function co(t){return t===0&&1/t==-1/0}function O0(t){return typeof t=="number"&&Number.isInteger(t)&&!co(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ri={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ug(t)?4:P0(t)?9007199254740991:10:Y()}function Ht(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xr(t).isEqual(xr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=kn(s.timestampValue),o=kn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ps(s.bytesValue).isEqual(Ps(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Oe(s.geoPointValue.latitude)===Oe(r.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Oe(s.integerValue)===Oe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Oe(s.doubleValue),o=Oe(r.doubleValue);return i===o?co(i)===co(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(kh(i)!==kh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ht(i[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Lr(t,e){return(t.values||[]).find(n=>Ht(n,e))!==void 0}function xs(t,e){if(t===e)return 0;const n=ss(t),s=ss(e);if(n!==s)return de(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Oe(r.integerValue||r.doubleValue),a=Oe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Nh(t.timestampValue,e.timestampValue);case 4:return Nh(xr(t),xr(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ps(r),a=Ps(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=de(o[c],a[c]);if(l!==0)return l}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=de(Oe(r.latitude),Oe(i.latitude));return o!==0?o:de(Oe(r.longitude),Oe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=xs(o[c],a[c]);if(l)return l}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ri.mapValue&&i===Ri.mapValue)return 0;if(r===Ri.mapValue)return 1;if(i===Ri.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=de(a[u],l[u]);if(h!==0)return h;const d=xs(o[a[u]],c[l[u]]);if(d!==0)return d}return de(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Nh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=kn(t),s=kn(e),r=de(n.seconds,s.seconds);return r!==0?r:de(n.nanos,s.nanos)}function Is(t){return bc(t)}function bc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=kn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ps(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=bc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${bc(s.fields[a])}`;return i+"}"}(t.mapValue):Y();var e,n}function Tc(t){return!!t&&"integerValue"in t}function Fl(t){return!!t&&"arrayValue"in t}function Dh(t){return!!t&&"nullValue"in t}function Oh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ui(t){return!!t&&"mapValue"in t}function pr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return as(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=pr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function P0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ui(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pr(n)}setAll(e){let n=Je.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=pr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ui(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ui(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){as(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new dt(pr(this.value))}}function dg(t){const e=[];return as(t.fields,(n,s)=>{const r=new Je([n]);if(Ui(s)){const i=dg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new bt(e)}/**
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
 */class ze{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new ze(e,0,ne.min(),ne.min(),dt.empty(),0)}static newFoundDocument(e,n,s){return new ze(e,1,n,ne.min(),s,0)}static newNoDocument(e,n){return new ze(e,2,n,ne.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,ne.min(),dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class x0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Ph(t,e=null,n=[],s=[],r=null,i=null,o=null){return new x0(t,e,n,s,r,i,o)}function Vl(t){const e=J(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Is(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Jo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Is(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Is(s)).join(",")),e.ht=n}return e.ht}function M0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Is(s.value)}`;var s}).join(", ")}]`),Jo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Is(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Is(n)).join(",")),`Target(${e})`}function $l(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!H0(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Ht(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mh(t.startAt,e.startAt)&&Mh(t.endAt,e.endAt)}function Sc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ft extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new L0(e,n,s):n==="array-contains"?new V0(e,s):n==="in"?new $0(e,s):n==="not-in"?new B0(e,s):n==="array-contains-any"?new j0(e,s):new ft(e,n,s)}static lt(e,n,s){return n==="in"?new U0(e,s):new F0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(xs(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.ft(xs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class L0 extends ft{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.ft(n)}}class U0 extends ft{constructor(e,n){super(e,"in",n),this.keys=fg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class F0 extends ft{constructor(e,n){super(e,"not-in",n),this.keys=fg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class V0 extends ft{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fl(n)&&Lr(n.arrayValue,this.value)}}class $0 extends ft{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lr(this.value.arrayValue,n)}}class B0 extends ft{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lr(this.value.arrayValue,n)}}class j0 extends ft{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Lr(this.value.arrayValue,s))}}class lo{constructor(e,n){this.position=e,this.inclusive=n}}class bs{constructor(e,n="asc"){this.field=e,this.dir=n}}function H0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function xh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=xs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ri{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function q0(t,e,n,s,r,i,o,a){return new ri(t,e,n,s,r,i,o,a)}function Bl(t){return new ri(t)}function Lh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function gg(t){for(const e of t.filters)if(e.dt())return e.field;return null}function K0(t){return t.collectionGroup!==null}function Ur(t){const e=J(t);if(e._t===null){e._t=[];const n=gg(e),s=pg(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new bs(n)),e._t.push(new bs(Je.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new bs(Je.keyField(),i))}}}return e._t}function tn(t){const e=J(t);if(!e.wt)if(e.limitType==="F")e.wt=Ph(e.path,e.collectionGroup,Ur(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ur(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new bs(i.field,o))}const s=e.endAt?new lo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new lo(e.startAt.position,e.startAt.inclusive):null;e.wt=Ph(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Cc(t,e,n){return new ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zo(t,e){return $l(tn(t),tn(e))&&t.limitType===e.limitType}function mg(t){return`${Vl(tn(t))}|lt:${t.limitType}`}function Ac(t){return`Query(target=${M0(tn(t))}; limitType=${t.limitType})`}function jl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=xh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ur(n),s)||n.endAt&&!function(r,i,o){const a=xh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ur(n),s))}(t,e)}function z0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yg(t){return(e,n)=>{let s=!1;for(const r of Ur(t)){const i=W0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function W0(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?xs(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
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
 */function vg(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:co(e)?"-0":e}}function _g(t){return{integerValue:""+t}}function G0(t,e){return O0(e)?_g(e):vg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ea{constructor(){this._=void 0}}function Q0(t,e,n){return t instanceof uo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Fr?Eg(t,e):t instanceof Vr?Ig(t,e):function(s,r){const i=wg(s,r),o=Uh(i)+Uh(s.yt);return Tc(i)&&Tc(s.yt)?_g(o):vg(s.It,o)}(t,e)}function Y0(t,e,n){return t instanceof Fr?Eg(t,e):t instanceof Vr?Ig(t,e):n}function wg(t,e){return t instanceof ho?Tc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class uo extends ea{}class Fr extends ea{constructor(e){super(),this.elements=e}}function Eg(t,e){const n=bg(e);for(const s of t.elements)n.some(r=>Ht(r,s))||n.push(s);return{arrayValue:{values:n}}}class Vr extends ea{constructor(e){super(),this.elements=e}}function Ig(t,e){let n=bg(e);for(const s of t.elements)n=n.filter(r=>!Ht(r,s));return{arrayValue:{values:n}}}class ho extends ea{constructor(e,n){super(),this.It=e,this.yt=n}}function Uh(t){return Oe(t.integerValue||t.doubleValue)}function bg(t){return Fl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function X0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Fr&&s instanceof Fr||n instanceof Vr&&s instanceof Vr?Os(n.elements,s.elements,Ht):n instanceof ho&&s instanceof ho?Ht(n.yt,s.yt):n instanceof uo&&s instanceof uo}(t.transform,e.transform)}class J0{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ta{}function Tg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hl(t.key,Dt.none()):new ii(t.key,t.data,Dt.none());{const n=t.data,s=dt.empty();let r=new Le(Je.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Pn(t.key,s,new bt(r.toArray()),Dt.none())}}function Z0(t,e,n){t instanceof ii?function(s,r,i){const o=s.value.clone(),a=Vh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Pn?function(s,r,i){if(!Fi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Vh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Sg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function gr(t,e,n,s){return t instanceof ii?function(r,i,o,a){if(!Fi(r.precondition,i))return o;const c=r.value.clone(),l=$h(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Pn?function(r,i,o,a){if(!Fi(r.precondition,i))return o;const c=$h(r.fieldTransforms,a,i),l=i.data;return l.setAll(Sg(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Fi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function eI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=wg(s.transform,r||null);i!=null&&(n===null&&(n=dt.empty()),n.set(s.field,i))}return n||null}function Fh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Os(n,s,(r,i)=>X0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ii extends ta{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Pn extends ta{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Vh(t,e,n){const s=new Map;we(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Y0(o,a,n[r]))}return s}function $h(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Q0(i,o,e))}return s}class Hl extends ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tI extends ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nI{constructor(e){this.count=e}}/**
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
 */var De,oe;function sI(t){switch(t){default:return Y();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Cg(t){if(t===void 0)return en("GRPC error has no .code"),b.UNKNOWN;switch(t){case De.OK:return b.OK;case De.CANCELLED:return b.CANCELLED;case De.UNKNOWN:return b.UNKNOWN;case De.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case De.INTERNAL:return b.INTERNAL;case De.UNAVAILABLE:return b.UNAVAILABLE;case De.UNAUTHENTICATED:return b.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case De.NOT_FOUND:return b.NOT_FOUND;case De.ALREADY_EXISTS:return b.ALREADY_EXISTS;case De.PERMISSION_DENIED:return b.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case De.ABORTED:return b.ABORTED;case De.OUT_OF_RANGE:return b.OUT_OF_RANGE;case De.UNIMPLEMENTED:return b.UNIMPLEMENTED;case De.DATA_LOSS:return b.DATA_LOSS;default:return Y()}}(oe=De||(De={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return lg(this.inner)}size(){return this.innerSize}}/**
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
 */const rI=new Ue(H.comparator);function nn(){return rI}const Ag=new Ue(H.comparator);function or(...t){let e=Ag;for(const n of t)e=e.insert(n.key,n);return e}function kg(t){let e=Ag;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Kn(){return mr()}function Rg(){return mr()}function mr(){return new Ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const iI=new Ue(H.comparator),oI=new Le(H.comparator);function re(...t){let e=oI;for(const n of t)e=e.add(n);return e}const aI=new Le(de);function Ng(){return aI}/**
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
 */class na{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,oi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new na(ne.min(),r,Ng(),nn(),re())}}class oi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new oi(s,n,re(),re(),re())}}/**
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
 */class Vi{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class Dg{constructor(e,n){this.targetId=e,this.At=n}}class Og{constructor(e,n,s=rt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Bh{constructor(){this.Rt=0,this.bt=Hh(),this.Pt=rt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=re(),n=re(),s=re();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Y()}}),new oi(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Hh()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class cI{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=nn(),this.qt=jh(),this.Kt=new Le(de)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(Sc(i))if(s===0){const o=new H(i.path);this.jt(n,o,ze.newNoDocument(o,ne.min()))}else we(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Sc(a.target)){const c=new H(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,ze.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=re();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new na(e,n,this.Kt,this.Ut,s);return this.Ut=nn(),this.qt=jh(),this.Kt=new Le(de),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Bh,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Le(de),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Bh),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function jh(){return new Ue(H.comparator)}function Hh(){return new Ue(H.comparator)}/**
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
 */const lI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class hI{constructor(e,n){this.databaseId=e,this.gt=n}}function fo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pg(t,e){return t.gt?e.toBase64():e.toUint8Array()}function dI(t,e){return fo(t,e.toTimestamp())}function Xt(t){return we(!!t),ne.fromTimestamp(function(e){const n=kn(e);return new Me(n.seconds,n.nanos)}(t))}function ql(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function xg(t){const e=Ie.fromString(t);return we(Ug(e)),e}function kc(t,e){return ql(t.databaseId,e.path)}function Pa(t,e){const n=xg(e);if(n.get(1)!==t.databaseId.projectId)throw new j(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Mg(n))}function Rc(t,e){return ql(t.databaseId,e)}function fI(t){const e=xg(t);return e.length===4?Ie.emptyPath():Mg(e)}function Nc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mg(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qh(t,e,n){return{name:kc(t,e),fields:n.value.mapValue.fields}}function pI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(we(l===void 0||typeof l=="string"),rt.fromBase64String(l||"")):(we(l===void 0||l instanceof Uint8Array),rt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:Cg(c.code);return new j(l,c.message||"")}(o);n=new Og(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Pa(t,s.document.name),i=Xt(s.document.updateTime),o=new dt({mapValue:{fields:s.document.fields}}),a=ze.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Vi(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Pa(t,s.document),i=s.readTime?Xt(s.readTime):ne.min(),o=ze.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Vi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Pa(t,s.document),i=s.removedTargetIds||[];n=new Vi([],i,r,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new nI(r),o=s.targetId;n=new Dg(o,i)}}return n}function gI(t,e){let n;if(e instanceof ii)n={update:qh(t,e.key,e.value)};else if(e instanceof Hl)n={delete:kc(t,e.key)};else if(e instanceof Pn)n={update:qh(t,e.key,e.data),updateMask:SI(e.fieldMask)};else{if(!(e instanceof tI))return Y();n={verify:kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof uo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Vr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ho)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:dI(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function mI(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Xt(s.updateTime):Xt(r);return i.isEqual(ne.min())&&(i=Xt(r)),new J0(i,s.transformResults||[])}(n,e))):[]}function yI(t,e){return{documents:[Rc(t,e.path)]}}function vI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Rc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Oh(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NAN"}};if(Dh(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Oh(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NOT_NAN"}};if(Dh(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(h.field),op:II(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ds(u.field),direction:EI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||Jo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function _I(t){let e=fI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){we(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Lg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new bs(ys(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Jo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new lo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new lo(d,h)}(n.endAt)),q0(e,r,o,i,a,"F",c,l)}function wI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lg(t){return t?t.unaryFilter!==void 0?[TI(t)]:t.fieldFilter!==void 0?[bI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Lg(e)).reduce((e,n)=>e.concat(n)):Y():[]}function EI(t){return lI[t]}function II(t){return uI[t]}function ds(t){return{fieldPath:t.canonicalString()}}function ys(t){return Je.fromServerFormat(t.fieldPath)}function bI(t){return ft.create(ys(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function TI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ys(t.unaryFilter.field);return ft.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ys(t.unaryFilter.field);return ft.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ys(t.unaryFilter.field);return ft.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ys(t.unaryFilter.field);return ft.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function SI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ug(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class CI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Z0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=gr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=gr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Rg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Tg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ne.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(n,s)=>Fh(n,s))&&Os(this.baseMutations,e.baseMutations,(n,s)=>Fh(n,s))}}class Kl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){we(e.mutations.length===s.length);let r=iI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Kl(e,n,s,r)}}/**
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
 */class AI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Xn{constructor(e,n,s,r,i=ne.min(),o=ne.min(),a=rt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class kI{constructor(e){this.re=e}}function RI(t){const e=_I({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cc(e,e.limit,"L"):e}/**
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
 */class NI{constructor(){this.Ye=new DI}addToCollectionParentIndex(e,n){return this.Ye.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(An.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(An.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class DI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Le(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Le(Ie.comparator)).toArray()}}/**
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
 */class Ms{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ms(0)}static vn(){return new Ms(-1)}}/**
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
 */class OI{constructor(){this.changes=new Ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class PI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class xI{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&gr(s.mutation,r,bt.empty(),Me.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,re()).next(()=>s))}getLocalViewOfDocuments(e,n,s=re()){const r=Kn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=or();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Kn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,re()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=nn();const o=mr(),a=mr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Pn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),gr(u.mutation,l,u.mutation.getFieldMask(),Me.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new PI(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=mr();let r=new Ue((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||bt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||re()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Rg();u.forEach(d=>{if(!i.has(d)){const p=Tg(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):K0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(Kn());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:kg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=or();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=or();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new ri(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,ze.newInvalidDocument(l)))});let o=or();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&gr(l.mutation,c,bt.empty(),Me.now()),jl(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(ze.newInvalidDocument(n))}}/**
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
 */class MI{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Xt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:RI(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),T.resolve()}}/**
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
 */class LI{constructor(){this.overlays=new Ue(H.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Kn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=Kn(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ue((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Kn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Kn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new AI(n,s));let i=this.es.get(n);i===void 0&&(i=re(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class zl{constructor(){this.ns=new Le($e.ss),this.rs=new Le($e.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new $e(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new $e(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new H(new Ie([])),s=new $e(n,e),r=new $e(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new H(new Ie([])),s=new $e(n,e),r=new $e(n,e+1);let i=re();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class $e{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return H.comparator(e.key,n.key)||de(e._s,n._s)}static os(e,n){return de(e._s,n._s)||H.comparator(e.key,n.key)}}/**
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
 */class UI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Le($e.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new $e(n,0),r=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Le(de);return n.forEach(r=>{const i=new $e(r,0),o=new $e(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new $e(new H(i),0);let a=new Le(de);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){we(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(n.mutations,r=>{const i=new $e(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new $e(n,0),r=this.gs.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FI{constructor(e){this.Es=e,this.docs=new Ue(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let s=nn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ze.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=nn();const i=new H(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||A0(C0(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){Y()}As(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new VI(this)}getSize(e){return T.resolve(this.size)}}class VI extends OI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class $I{constructor(e){this.persistence=e,this.Rs=new Ws(n=>Vl(n),$l),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.bs=0,this.Ps=new zl,this.targetCount=0,this.vs=Ms.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ms(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
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
 */class BI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ul(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new $I(this),this.indexManager=new NI,this.remoteDocumentCache=function(s){return new FI(s)}(s=>this.referenceDelegate.xs(s)),this.It=new kI(n),this.Ns=new MI(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new UI(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new jI(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class jI extends R0{constructor(e){super(),this.currentSequenceNumber=e}}class Wl{constructor(e){this.persistence=e,this.Fs=new zl,this.$s=null}static Bs(e){return new Wl(e)}get Ls(){if(this.$s)return this.$s;throw Y()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const r=H.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,ne.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Gl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=re(),r=re();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Gl(e,n.fromCache,s,r)}}/**
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
 */class HI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Lh(n))return T.resolve(null);let s=tn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Cc(n,null,"F"),s=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=re(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,Cc(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return Lh(n)||r.isEqual(ne.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Ah()<=he.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ac(n)),this.Bi(e,o,n,S0(r,-1)))})}Fi(e,n){let s=new Le(yg(e));return n.forEach((r,i)=>{jl(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Ah()<=he.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Ac(n)),this.Ni.getDocumentsMatchingQuery(e,n,An.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class qI{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Ue(de),this.qi=new Ws(i=>Vl(i),$l),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function KI(t,e,n,s){return new qI(t,e,n,s)}async function Fg(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=re();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function zI(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=T.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const v=c.docVersions.get(p);we(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=re();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Vg(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function WI(t,e){const n=J(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(rt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(m,v,S){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,p,u)&&a.push(n.Cs.updateTargetData(i,p))});let c=nn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(GI(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(ne.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function GI(t,e,n){let s=re(),r=re();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=nn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function QI(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function YI(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Xn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Dc(t,e,n){const s=J(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!si(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Kh(t,e,n){const s=J(t);let r=ne.min(),i=re();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.qi.get(l);return h!==void 0?T.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,tn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:ne.min(),n?i:re())).next(a=>(XI(s,z0(e),a),{documents:a,Hi:i})))}function XI(t,e,n){let s=t.Ki.get(e)||ne.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class zh{constructor(){this.activeTargetIds=Ng()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JI{constructor(){this.Lr=new zh,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new zh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ZI{qr(e){}shutdown(){}}/**
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
 */class Wh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const eb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class nb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);F("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw Ic("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+zs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=eb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new g0;a.setWithCredentials(!0),a.listenOnce(d0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Oa.NO_ERROR:const l=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Oa.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new j(b.DEADLINE_EXCEEDED,"Request time out"));break;case Oa.HTTP_ERROR:const u=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(m)>=0?m:b.UNKNOWN}(h.status);o(new j(d,h.message))}else o(new j(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(b.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=u0(),o=h0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new p0({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");F("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new tb({Hr:m=>{h?F("Connection","Not sending because WebChannel is closed:",m):(u||(F("Connection","Opening WebChannel transport."),l.open(),u=!0),F("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),p=(m,v,S)=>{m.listen(v,C=>{try{S(C)}catch(x){setTimeout(()=>{throw x},0)}})};return p(l,Ai.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),p(l,Ai.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),d.io())}),p(l,Ai.EventType.ERROR,m=>{h||(h=!0,Ic("Connection","WebChannel transport errored:",m),d.io(new j(b.UNAVAILABLE,"The operation could not be completed")))}),p(l,Ai.EventType.MESSAGE,m=>{var v;if(!h){const S=m.data[0];we(!!S);const C=S,x=C.error||((v=C[0])===null||v===void 0?void 0:v.error);if(x){F("Connection","WebChannel received error:",x);const K=x.status;let G=function(pe){const X=De[pe];if(X!==void 0)return Cg(X)}(K),Z=x.message;G===void 0&&(G=b.INTERNAL,Z="Unknown error status: "+K+" with message "+x.message),h=!0,d.io(new j(G,Z)),l.close()}else F("Connection","WebChannel received:",S),d.ro(S)}}),p(o,f0.STAT_EVENT,m=>{m.stat===Sh.PROXY?F("Connection","Detected buffering proxy"):m.stat===Sh.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function xa(){return typeof document<"u"?document:null}/**
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
 */function sa(t){return new hI(t,!0)}class $g{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Bg{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new $g(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(en(n.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===n&&this.Qo(s,r)},s=>{e(()=>{const r=new j(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sb extends Bg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=pI(this.It,e),s=function(r){if(!("targetChange"in r))return ne.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ne.min():i.readTime?Xt(i.readTime):ne.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Nc(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=Sc(a)?{documents:yI(r,a)}:{query:vI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Pg(r,i.resumeToken):i.snapshotVersion.compareTo(ne.min())>0&&(o.readTime=fo(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=wI(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Nc(this.It),n.removeTarget=e,this.Lo(n)}}class rb extends Bg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=mI(e.writeResults,e.commitTime),s=Xt(e.commitTime);return this.listener.tu(s,n)}return we(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Nc(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>gI(this.It,s))};this.Lo(n)}}/**
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
 */class ib extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=r,this.su=!1}iu(){if(this.su)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(b.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.So._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(b.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class ob{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(en(n),this.uu=!1):F("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class ab{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.qr(o=>{s.enqueueAndForget(async()=>{cs(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.wu.add(4),await ai(c),c.yu.set("Unknown"),c.wu.delete(4),await ra(c)}(this))})}),this.yu=new ob(s,r)}}async function ra(t){if(cs(t))for(const e of t.mu)await e(!0)}async function ai(t){for(const e of t.mu)await e(!1)}function jg(t,e){const n=J(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Xl(n)?Yl(n):Gs(n).Oo()&&Ql(n,e))}function Hg(t,e){const n=J(t),s=Gs(n);n._u.delete(e),s.Oo()&&qg(n,e),n._u.size===0&&(s.Oo()?s.$o():cs(n)&&n.yu.set("Unknown"))}function Ql(t,e){t.pu.Mt(e.targetId),Gs(t).Ho(e)}function qg(t,e){t.pu.Mt(e),Gs(t).Jo(e)}function Yl(t){t.pu=new cI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Gs(t).start(),t.yu.cu()}function Xl(t){return cs(t)&&!Gs(t).ko()&&t._u.size>0}function cs(t){return J(t).wu.size===0}function Kg(t){t.pu=void 0}async function cb(t){t._u.forEach((e,n)=>{Ql(t,e)})}async function lb(t,e){Kg(t),Xl(t)?(t.yu.lu(e),Yl(t)):t.yu.set("Unknown")}async function ub(t,e,n){if(t.yu.set("Online"),e instanceof Og&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await po(t,s)}else if(e instanceof Vi?t.pu.Gt(e):e instanceof Dg?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(ne.min()))try{const s=await Vg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.pu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r._u.get(c);l&&r._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(rt.EMPTY_BYTE_STRING,c.snapshotVersion)),qg(r,a);const l=new Xn(c.target,a,1,c.sequenceNumber);Ql(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await po(t,s)}}async function po(t,e,n){if(!si(e))throw e;t.wu.add(1),await ai(t),t.yu.set("Offline"),n||(n=()=>Vg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ra(t)})}function zg(t,e){return e().catch(n=>po(t,n,e))}async function ia(t){const e=J(t),n=Rn(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;hb(e);)try{const r=await QI(e.localStore,s);if(r===null){e.du.length===0&&n.$o();break}s=r.batchId,db(e,r)}catch(r){await po(e,r)}Wg(e)&&Gg(e)}function hb(t){return cs(t)&&t.du.length<10}function db(t,e){t.du.push(e);const n=Rn(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function Wg(t){return cs(t)&&!Rn(t).ko()&&t.du.length>0}function Gg(t){Rn(t).start()}async function fb(t){Rn(t).nu()}async function pb(t){const e=Rn(t);for(const n of t.du)e.Zo(n.mutations)}async function gb(t,e,n){const s=t.du.shift(),r=Kl.from(s,e,n);await zg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ia(t)}async function mb(t,e){e&&Rn(t).Xo&&await async function(n,s){if(r=s.code,sI(r)&&r!==b.ABORTED){const i=n.du.shift();Rn(n).Fo(),await zg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ia(n)}var r}(t,e),Wg(t)&&Gg(t)}async function Gh(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=cs(n);n.wu.add(3),await ai(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ra(n)}async function yb(t,e){const n=J(t);e?(n.wu.delete(2),await ra(n)):e||(n.wu.add(2),await ai(n),n.yu.set("Unknown"))}function Gs(t){return t.Iu||(t.Iu=function(e,n,s){const r=J(e);return r.iu(),new sb(n,r.So,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:cb.bind(null,t),Zr:lb.bind(null,t),zo:ub.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Xl(t)?Yl(t):t.yu.set("Unknown")):(await t.Iu.stop(),Kg(t))})),t.Iu}function Rn(t){return t.Tu||(t.Tu=function(e,n,s){const r=J(e);return r.iu(),new rb(n,r.So,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:fb.bind(null,t),Zr:mb.bind(null,t),eu:pb.bind(null,t),tu:gb.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await ia(t)):(await t.Tu.stop(),t.du.length>0&&(F("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class Jl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Jl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zl(t,e){if(en("AsyncQueue",`${e}: ${t}`),si(t))return new j(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ts{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=or(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new Ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ts;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Qh{constructor(){this.Eu=new Ue(H.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Y():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ls{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ls(e,n,Ts.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class vb{constructor(){this.Ru=void 0,this.listeners=[]}}class _b{constructor(){this.queries=new Ws(e=>mg(e),Zo),this.onlineState="Unknown",this.bu=new Set}}async function wb(t,e){const n=J(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new vb),r)try{i.Ru=await n.onListen(s)}catch(o){const a=Zl(o,`Initialization of query '${Ac(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.vu(i.Ru)&&eu(n)}async function Eb(t,e){const n=J(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Ib(t,e){const n=J(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Ru=r}}s&&eu(n)}function bb(t,e,n){const s=J(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function eu(t){t.bu.forEach(e=>{e.next()})}class Tb{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ls(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class Qg{constructor(e){this.key=e}}class Yg{constructor(e){this.key=e}}class Sb{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=re(),this.mutatedKeys=re(),this.Gu=yg(e),this.Qu=new Ts(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new Qh,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=jl(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let S=!1;d&&p?d.data.isEqual(p.data)?m!==v&&(s.track({type:3,doc:p}),S=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),S=!0,(c&&this.Gu(p,c)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),S=!0):d&&!p&&(s.track({type:1,doc:d}),S=!0,(c||l)&&(a=!0)),S&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return p(h)-p(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Ls(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Qh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=re(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Yg(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Qg(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=re();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ls.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Cb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ab{constructor(e){this.key=e,this.nc=!1}}class kb{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ws(a=>mg(a),Zo),this.rc=new Map,this.oc=new Set,this.uc=new Ue(H.comparator),this.cc=new Map,this.ac=new zl,this.hc={},this.lc=new Map,this.fc=Ms.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Rb(t,e){const n=Vb(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await YI(n.localStore,tn(e));n.isPrimaryClient&&jg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Nb(n,e,s,a==="current",o.resumeToken)}return r}async function Nb(t,e,n,s,r){t._c=(h,d,p)=>async function(m,v,S,C){let x=v.view.Wu(S);x.$i&&(x=await Kh(m.localStore,v.query,!1).then(({documents:Z})=>v.view.Wu(Z,x)));const K=C&&C.targetChanges.get(v.targetId),G=v.view.applyChanges(x,m.isPrimaryClient,K);return Xh(m,v.targetId,G.Xu),G.snapshot}(t,h,d,p);const i=await Kh(t.localStore,e,!0),o=new Sb(e,i.Hi),a=o.Wu(i.documents),c=oi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Xh(t,n,l.Xu);const u=new Cb(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function Db(t,e){const n=J(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Zo(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Dc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Hg(n.remoteStore,s.targetId),Oc(n,s.targetId)}).catch(ni)):(Oc(n,s.targetId),await Dc(n.localStore,s.targetId,!0))}async function Ob(t,e,n){const s=$b(t);try{const r=await function(i,o){const a=J(i),c=Me.now(),l=o.reduce((d,p)=>d.add(p.key),re());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=nn(),m=re();return a.Gi.getEntries(d,l).next(v=>{p=v,p.forEach((S,C)=>{C.isValidDocument()||(m=m.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{u=v;const S=[];for(const C of o){const x=eI(C,u.get(C.key).overlayedDocument);x!=null&&S.push(new Pn(C.key,x,dg(x.value.mapValue),Dt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,S,o)}).next(v=>{h=v;const S=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,S)})}).then(()=>({batchId:h.batchId,changes:kg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ue(de)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await ci(s,r.changes),await ia(s.remoteStore)}catch(r){const i=Zl(r,"Failed to persist write");n.reject(i)}}async function Xg(t,e){const n=J(t);try{const s=await WI(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(we(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?we(o.nc):r.removedDocuments.size>0&&(we(o.nc),o.nc=!1))}),await ci(n,s,e)}catch(s){await ni(s)}}function Yh(t,e,n){const s=J(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&eu(a)}(s.eventManager,e),r.length&&s.sc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Pb(t,e,n){const s=J(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ue(H.comparator);o=o.insert(i,ze.newNoDocument(i,ne.min()));const a=re().add(i),c=new na(ne.min(),new Map,new Le(de),o,a);await Xg(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),tu(s)}else await Dc(s.localStore,e,!1).then(()=>Oc(s,e,n)).catch(ni)}async function xb(t,e){const n=J(t),s=e.batch.batchId;try{const r=await zI(n.localStore,e);Zg(n,s,null),Jg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ci(n,r)}catch(r){await ni(r)}}async function Mb(t,e,n){const s=J(t);try{const r=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(we(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Zg(s,e,n),Jg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ci(s,r)}catch(r){await ni(r)}}function Jg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Zg(t,e,n){const s=J(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Oc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||em(t,s)})}function em(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Hg(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),tu(t))}function Xh(t,e,n){for(const s of n)s instanceof Qg?(t.ac.addReference(s.key,e),Lb(t,s)):s instanceof Yg?(F("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||em(t,s.key)):Y()}function Lb(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(F("SyncEngine","New document in limbo: "+n),t.oc.add(s),tu(t))}function tu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new H(Ie.fromString(e)),s=t.fc.next();t.cc.set(s,new Ab(n)),t.uc=t.uc.insert(n,s),jg(t.remoteStore,new Xn(tn(Bl(n.path)),s,2,Ul.at))}}async function ci(t,e,n){const s=J(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Gl.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.zo(r),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!si(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.Ui=l.Ui.insert(h,m)}}}(s.localStore,i))}async function Ub(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await Fg(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new j(b.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ci(n,s.ji)}}function Fb(t,e){const n=J(t),s=n.cc.get(e);if(s&&s.nc)return re().add(s.key);{let r=re();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Vb(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pb.bind(null,e),e.sc.zo=Ib.bind(null,e.eventManager),e.sc.wc=bb.bind(null,e.eventManager),e}function $b(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mb.bind(null,e),e}class Bb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=sa(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return KI(this.persistence,new HI,e.initialUser,this.It)}yc(e){return new BI(Wl.Bs,this.It)}gc(e){return new JI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ub.bind(null,this.syncEngine),await yb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _b}createDatastore(e){const n=sa(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new nb(r));var r;return function(i,o,a,c){return new ib(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Yh(this.syncEngine,a,0),o=Wh.C()?new Wh:new ZI,new ab(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new kb(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);F("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await ai(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function tm(t,e,n){if(!n)throw new j(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hb(t,e,n,s){if(e===!0&&s===!0)throw new j(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jh(t){if(!H.isDocumentKey(t))throw new j(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zh(t){if(H.isDocumentKey(t))throw new j(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function In(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nu(t);throw new j(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const ed=new Map;class td{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Hb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class oa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new td({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new td(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new m0;switch(n.type){case"gapi":const s=n.client;return new w0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ed.get(e);n&&(F("ComponentProvider","Removing Datastore"),ed.delete(e),n.terminate())}(this),Promise.resolve()}}function qb(t,e,n,s={}){var r;const i=(t=In(t,oa))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ic("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ye.MOCK_USER;else{o=Z_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new j(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ye(c)}t._authCredentials=new y0(new ag(o,a))}}/**
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
 */class yt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class li{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new li(this.firestore,e,this._query)}}class bn extends li{constructor(e,n,s){super(e,n,Bl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new H(e))}withConverter(e){return new bn(this.firestore,e,this._path)}}function Kb(t,e,...n){if(t=He(t),tm("collection","path",e),t instanceof oa){const s=Ie.fromString(e,...n);return Zh(s),new bn(t,null,s)}{if(!(t instanceof yt||t instanceof bn))throw new j(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Zh(s),new bn(t.firestore,null,s)}}function Pc(t,e,...n){if(t=He(t),arguments.length===1&&(e=cg.R()),tm("doc","path",e),t instanceof oa){const s=Ie.fromString(e,...n);return Jh(s),new yt(t,null,new H(s))}{if(!(t instanceof yt||t instanceof bn))throw new j(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Jh(s),new yt(t.firestore,t instanceof bn?t.converter:null,new H(s))}}/**
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
 *//**
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
 */class zb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):en("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Wb{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ye.UNAUTHENTICATED,this.clientId=cg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Zl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gb(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Fg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Qb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Yb(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Gh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Gh(e.remoteStore,i)),t.onlineComponents=e}async function Yb(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await Gb(t,new Bb)),t.offlineComponents}async function nm(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await Qb(t,new jb)),t.onlineComponents}function Xb(t){return nm(t).then(e=>e.syncEngine)}async function nd(t){const e=await nm(t),n=e.eventManager;return n.onListen=Rb.bind(null,e.syncEngine),n.onUnlisten=Db.bind(null,e.syncEngine),n}class Jb{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new $g(this,"async_queue_retry"),this.Wc=()=>{const n=xa();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=xa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=xa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Yn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!si(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw en("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Jl.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&Y()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function sd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Us extends oa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Jb,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rm(this),this._firestoreClient.terminate()}}function Zb(t,e){const n=typeof t=="object"?t:np(),s=typeof t=="string"?t:e||"(default)",r=pl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Y_("firestore");i&&qb(r,...i)}return r}function sm(t){return t._firestoreClient||rm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new D0(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Wb(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class Fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fs(rt.fromBase64String(e))}catch(n){throw new j(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fs(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class aa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class su{constructor(e){this._methodName=e}}/**
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
 */class ru{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const eT=/^__.*__$/;class tT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Pn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ii(e,this.data,n,this.fieldTransforms)}}class im{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Pn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function om(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class iu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new iu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return go(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(om(this.sa)&&eT.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class nT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||sa(e)}da(e,n,s,r=!1){return new iu({sa:e,methodName:n,fa:s,path:Je.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function am(t){const e=t._freezeSettings(),n=sa(t._databaseId);return new nT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sT(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);ou("Data must be an object, but it was:",o,s);const a=cm(s,o);let c,l;if(i.merge)c=new bt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=xc(e,h,n);if(!o.contains(d))throw new j(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);um(u,d)||u.push(d)}c=new bt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new tT(new dt(a),c,l)}class ca extends su{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ca}}function rT(t,e,n,s){const r=t.da(1,e,n);ou("Data must be an object, but it was:",r,s);const i=[],o=dt.empty();as(s,(c,l)=>{const u=au(e,c,n);l=He(l);const h=r.ca(u);if(l instanceof ca)i.push(u);else{const d=la(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new bt(i);return new im(o,a,r.fieldTransforms)}function iT(t,e,n,s,r,i){const o=t.da(1,e,n),a=[xc(e,s,n)],c=[r];if(i.length%2!=0)throw new j(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(xc(e,i[d])),c.push(i[d+1]);const l=[],u=dt.empty();for(let d=a.length-1;d>=0;--d)if(!um(l,a[d])){const p=a[d];let m=c[d];m=He(m);const v=o.ca(p);if(m instanceof ca)l.push(p);else{const S=la(m,v);S!=null&&(l.push(p),u.set(p,S))}}const h=new bt(l);return new im(u,h,o.fieldTransforms)}function la(t,e){if(lm(t=He(t)))return ou("Unsupported field value:",e,t),cm(t,e);if(t instanceof su)return function(n,s){if(!om(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=la(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=He(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return G0(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Me.fromDate(n);return{timestampValue:fo(s.It,r)}}if(n instanceof Me){const r=new Me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fo(s.It,r)}}if(n instanceof ru)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fs)return{bytesValue:Pg(s.It,n._byteString)};if(n instanceof yt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ql(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${nu(n)}`)}(t,e)}function cm(t,e){const n={};return lg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(t,(s,r)=>{const i=la(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function lm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof ru||t instanceof Fs||t instanceof yt||t instanceof su)}function ou(t,e,n){if(!lm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=nu(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function xc(t,e,n){if((e=He(e))instanceof aa)return e._internalPath;if(typeof e=="string")return au(t,e);throw go("Field path arguments must be of type string or ",t,!1,void 0,n)}const oT=new RegExp("[~\\*/\\[\\]]");function au(t,e,n){if(e.search(oT)>=0)throw go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new aa(...e.split("."))._internalPath}catch{throw go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function go(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new j(b.INVALID_ARGUMENT,a+t+c)}function um(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class hm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aT extends hm{data(){return super.data()}}function cu(t,e){return typeof e=="string"?au(t,e):e instanceof aa?e._internalPath:e._delegate._internalPath}/**
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
 */function cT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lT{}function uT(t,...e){for(const n of e)t=n._apply(t);return t}class hT extends lT{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new j(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new bs(r,i);return function(a,c){if(pg(a)===null){const l=gg(a);l!==null&&fT(a,l,c.field)}}(s,o),o}(e._query,this.ma,this.pa);return new li(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new ri(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function dT(t,e="asc"){const n=e,s=cu("orderBy",t);return new hT(s,n)}function fT(t,e,n){if(!n.isEqual(e))throw new j(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class pT{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const s={};return as(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ru(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=hg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(xr(e));default:return null}}convertTimestamp(e){const n=kn(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);we(Ug(s));const r=new Mr(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||en(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function gT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class ar{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dm extends hm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class $i extends dm{data(e={}){return super.data(e)}}class mT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ar(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new $i(this._firestore,this._userDataWriter,s.key,s,new ar(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new $i(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ar(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new $i(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ar(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:yT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class fm extends pT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function vT(t,e,n,...s){t=In(t,yt);const r=In(t.firestore,Us),i=am(r);let o;return o=typeof(e=He(e))=="string"||e instanceof aa?iT(i,"updateDoc",t._key,e,n,s):rT(i,"updateDoc",t._key,e),lu(r,[o.toMutation(t._key,Dt.exists(!0))])}function _T(t){return lu(In(t.firestore,Us),[new Hl(t._key,Dt.none())])}function wT(t,e){const n=In(t.firestore,Us),s=Pc(t),r=gT(t.converter,e);return lu(n,[sT(am(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Dt.exists(!1))]).then(()=>s)}function ET(t,...e){var n,s,r;t=He(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||sd(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(sd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof yt)l=In(t.firestore,Us),u=Bl(t._key.path),c={next:h=>{e[o]&&e[o](IT(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=In(t,li);l=In(h.firestore,Us),u=h._query;const d=new fm(l);c={next:p=>{e[o]&&e[o](new mT(l,d,h,p))},error:e[o+1],complete:e[o+2]},cT(t._query)}return function(h,d,p,m){const v=new zb(m),S=new Tb(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>wb(await nd(h),S)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>Eb(await nd(h),S))}}(sm(l),u,a,c)}function lu(t,e){return function(n,s){const r=new Yn;return n.asyncQueue.enqueueAndForget(async()=>Ob(await Xb(n),s,r)),r.promise}(sm(t),e)}function IT(t,e,n){const s=n.docs.get(e._key),r=new fm(t);return new dm(t,r,e._key,s,new ar(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){zs=n})(zr),Ns(new es("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Us(new v0(n.getProvider("auth-internal")),new I0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new j(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),En(Ch,"3.7.1",t),En(Ch,"3.7.1","esm2017")})();function uu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function pm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bT=pm,gm=new qr("auth","Firebase",pm());/**
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
 */const rd=new dl("@firebase/auth");function Bi(t,...e){rd.logLevel<=he.ERROR&&rd.error(`Auth (${zr}): ${t}`,...e)}/**
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
 */function Pt(t,...e){throw hu(t,...e)}function $t(t,...e){return hu(t,...e)}function TT(t,e,n){const s=Object.assign(Object.assign({},bT()),{[e]:n});return new qr("auth","Firebase",s).create(e,{appName:t.name})}function hu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return gm.create(t,...e)}function q(t,e,...n){if(!t)throw hu(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bi(e),new Error(e)}function sn(t,e){t||Gt(e)}/**
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
 */const id=new Map;function Qt(t){sn(t instanceof Function,"Expected a class definition");let e=id.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,id.set(t,e),e)}/**
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
 */function ST(t,e){const n=pl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ji(i,e!=null?e:{}))return r;Pt(r,"already-initialized")}return n.initialize({options:e})}function CT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Mc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AT(){return od()==="http:"||od()==="https:"}function od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AT()||B_()||"connection"in navigator)?navigator.onLine:!0}function RT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=$_()||j_()}get(){return kT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function du(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const DT=new ui(3e4,6e4);function hi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function di(t,e,n,s,r={}){return ym(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Kr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),mm.fetch()(vm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ym(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},NT),e);try{const r=new OT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ni(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ni(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ni(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ni(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw TT(t,u,l);Pt(t,u)}}catch(r){if(r instanceof on)throw r;Pt(t,"network-request-failed")}}async function fi(t,e,n,s,r={}){const i=await di(t,e,n,s,r);return"mfaPendingCredential"in i&&Pt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vm(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?du(t.config,r):`${t.config.apiScheme}://${r}`}class OT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s($t(this.auth,"network-request-failed")),DT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ni(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=$t(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function PT(t,e){return di(t,"POST","/v1/accounts:delete",e)}async function xT(t,e){return di(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function yr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MT(t,e=!1){const n=He(t),s=await n.getIdToken(e),r=fu(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:yr(Ma(r.auth_time)),issuedAtTime:yr(Ma(r.iat)),expirationTime:yr(Ma(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ma(t){return Number(t)*1e3}function fu(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yf(s);return i?JSON.parse(i):(Bi("Failed to decode base64 JWT payload"),null)}catch(i){return Bi("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function LT(t){const e=fu(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $r(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof on&&UT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function UT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _m{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yr(this.lastLoginAt),this.creationTime=yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await $r(t,xT(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?BT(i.providerUserInfo):[],a=$T(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _m(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function VT(t){const e=He(t);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $T(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function BT(t){return t.map(e=>{var{providerId:n}=e,s=uu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function jT(t,e){const n=await ym(t,{},async()=>{const s=Kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=vm(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):LT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await jT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Br;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
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
 */function cn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _m(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $r(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MT(this,e)}reload(){return VT(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await mo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $r(this,PT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:G,isAnonymous:Z,providerData:pe,stsTokenManager:X}=n;q(K&&X,e,"internal-error");const M=Br.fromJSON(this.name,X);q(typeof K=="string",e,"internal-error"),cn(h,e.name),cn(d,e.name),q(typeof G=="boolean",e,"internal-error"),q(typeof Z=="boolean",e,"internal-error"),cn(p,e.name),cn(m,e.name),cn(v,e.name),cn(S,e.name),cn(C,e.name),cn(x,e.name);const ie=new Jn({uid:K,auth:e,email:d,emailVerified:G,displayName:h,isAnonymous:Z,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:M,createdAt:C,lastLoginAt:x});return pe&&Array.isArray(pe)&&(ie.providerData=pe.map(ce=>Object.assign({},ce))),S&&(ie._redirectEventId=S),ie}static async _fromIdTokenResponse(e,n,s=!1){const r=new Br;r.updateFromServerResponse(n);const i=new Jn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await mo(i),i}}/**
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
 */class wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wm.type="NONE";const ad=wm;/**
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
 */function ji(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ji(this.userKey,r.apiKey,i),this.fullPersistenceKey=ji("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ss(Qt(ad),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Qt(ad);const o=ji(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Jn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ss(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ss(i,e,s))}}/**
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
 */function cd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Em(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sm(e))return"Blackberry";if(Cm(e))return"Webos";if(pu(e))return"Safari";if((e.includes("chrome/")||Im(e))&&!e.includes("edge/"))return"Chrome";if(Tm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Em(t=st()){return/firefox\//i.test(t)}function pu(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Im(t=st()){return/crios\//i.test(t)}function bm(t=st()){return/iemobile/i.test(t)}function Tm(t=st()){return/android/i.test(t)}function Sm(t=st()){return/blackberry/i.test(t)}function Cm(t=st()){return/webos/i.test(t)}function ua(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HT(t=st()){var e;return ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qT(){return H_()&&document.documentMode===10}function Am(t=st()){return ua(t)||Tm(t)||Cm(t)||Sm(t)||/windows phone/i.test(t)||bm(t)}function KT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function km(t,e=[]){let n;switch(t){case"Browser":n=cd(st());break;case"Worker":n=`${cd(st())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${s}`}/**
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
 */class zT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class WT{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ld(this),this.idTokenSubscription=new ld(this),this.beforeStateQueue=new zT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await mo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=km(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function pi(t){return He(t)}class ld{constructor(e){this.auth=e,this.observer=null,this.addObserver=rw(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function GT(t,e,n){const s=pi(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Rm(e),{host:o,port:a}=QT(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||YT()}function Rm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QT(t){const e=Rm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ud(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:ud(o)}}}function ud(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}async function XT(t,e){return di(t,"POST","/v1/accounts:update",e)}/**
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
 */async function JT(t,e){return fi(t,"POST","/v1/accounts:signInWithPassword",hi(t,e))}/**
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
 */async function ZT(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",hi(t,e))}async function eS(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",hi(t,e))}/**
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
 */class jr extends gu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new jr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new jr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return JT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ZT(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return XT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eS(e,{idToken:n,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cs(t,e){return fi(t,"POST","/v1/accounts:signInWithIdp",hi(t,e))}/**
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
 */const tS="http://localhost";class rs extends gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=uu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new rs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Cs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:tS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kr(n)}return e}}/**
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
 */function nS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sS(t){const e=nr(sr(t)).link,n=e?nr(sr(e)).deep_link_id:null,s=nr(sr(t)).deep_link_id;return(s?nr(sr(s)).link:null)||s||n||e||t}class mu{constructor(e){var n,s,r,i,o,a;const c=nr(sr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=nS((r=c.mode)!==null&&r!==void 0?r:null);q(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sS(e);try{return new mu(n)}catch{return null}}}/**
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
 */class Qs{constructor(){this.providerId=Qs.PROVIDER_ID}static credential(e,n){return jr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=mu.parseLink(n);return q(s,"argument-error"),jr._fromEmailAndCode(e,s.code,s.tenantId)}}Qs.PROVIDER_ID="password";Qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gi extends Nm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends gi{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class fn extends gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return fn.credential(n,s)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
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
 */class pn extends gi{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
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
 */class gn extends gi{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */async function rS(t,e){return fi(t,"POST","/v1/accounts:signUp",hi(t,e))}/**
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
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Jn._fromIdTokenResponse(e,s,r),o=hd(s);return new is({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=hd(s);return new is({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function hd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yo extends on{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new yo(e,n,s,r)}}function Dm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yo._fromErrorAndOperation(t,i,e,s):i})}async function iS(t,e,n=!1){const s=await $r(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",s)}/**
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
 */async function oS(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await $r(t,Dm(r,i,e,t),n);q(o.idToken,r,"internal-error");const a=fu(o.idToken);q(a,r,"internal-error");const{sub:c}=a;return q(t.uid===c,r,"user-mismatch"),is._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Pt(r,"user-mismatch"),o}}/**
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
 */async function Om(t,e,n=!1){const s="signIn",r=await Dm(t,s,e),i=await is._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function aS(t,e){return Om(pi(t),e)}async function cS(t,e,n){const s=pi(t),r=await rS(s,{returnSecureToken:!0,email:e,password:n}),i=await is._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function lS(t,e,n){return aS(He(t),Qs.credential(e,n))}function uS(t,e,n,s){return He(t).onIdTokenChanged(e,n,s)}function hS(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function dS(t,e,n,s){return He(t).onAuthStateChanged(e,n,s)}function fS(t){return He(t).signOut()}const vo="__sak";/**
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
 */class Pm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vo,"1"),this.storage.removeItem(vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pS(){const t=st();return pu(t)||ua(t)}const gS=1e3,mS=10;class xm extends Pm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pS()&&KT(),this.fallbackToPolling=Am(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);qT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,mS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},gS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xm.type="LOCAL";const yS=xm;/**
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
 */class Mm extends Pm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mm.type="SESSION";const Lm=Mm;/**
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
 */function vS(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ha(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await vS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ha.receivers=[];/**
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
 */function yu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _S{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=yu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bt(){return window}function wS(t){Bt().location.href=t}/**
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
 */function Um(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function ES(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bS(){return Um()?self:null}/**
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
 */const Fm="firebaseLocalStorageDb",TS=1,_o="firebaseLocalStorage",Vm="fbase_key";class mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function da(t,e){return t.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function SS(){const t=indexedDB.deleteDatabase(Fm);return new mi(t).toPromise()}function Lc(){const t=indexedDB.open(Fm,TS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_o,{keyPath:Vm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_o)?e(s):(s.close(),await SS(),e(await Lc()))})})}async function dd(t,e,n){const s=da(t,!0).put({[Vm]:e,value:n});return new mi(s).toPromise()}async function CS(t,e){const n=da(t,!1).get(e),s=await new mi(n).toPromise();return s===void 0?null:s.value}function fd(t,e){const n=da(t,!0).delete(e);return new mi(n).toPromise()}const AS=800,kS=3;class $m{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>kS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ha._getInstance(bS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ES(),!this.activeServiceWorker)return;this.sender=new _S(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lc();return await dd(e,vo,"1"),await fd(e,vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>dd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>CS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=da(r,!1).getAll();return new mi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$m.type="LOCAL";const RS=$m;/**
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
 */function NS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function DS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=$t("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",NS().appendChild(s)})}function OS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ui(3e4,6e4);/**
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
 */function PS(t,e){return e?Qt(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vu extends gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xS(t){return Om(t.auth,new vu(t),t.bypassAuthState)}function MS(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),oS(n,new vu(t),t.bypassAuthState)}async function LS(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),iS(n,new vu(t),t.bypassAuthState)}/**
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
 */class Bm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xS;case"linkViaPopup":case"linkViaRedirect":return LS;case"reauthViaPopup":case"reauthViaRedirect":return MS;default:Pt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const US=new ui(2e3,1e4);class vs extends Bm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,US.get())};e()}}vs.currentPopupAction=null;/**
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
 */const FS="pendingRedirect",Hi=new Map;class VS extends Bm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const s=await $S(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $S(t,e){const n=HS(e),s=jS(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function BS(t,e){Hi.set(t._key(),e)}function jS(t){return Qt(t._redirectPersistence)}function HS(t){return ji(FS,t.config.apiKey,t.name)}async function qS(t,e,n=!1){const s=pi(t),r=PS(s,e),o=await new VS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const KS=10*60*1e3;class zS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!jm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError($t(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KS&&this.cachedEventUids.clear(),this.cachedEventUids.has(pd(e))}saveEventToCache(e){this.cachedEventUids.add(pd(e)),this.lastProcessedEventTime=Date.now()}}function pd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jm(t);default:return!1}}/**
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
 */async function GS(t,e={}){return di(t,"GET","/v1/projects",e)}/**
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
 */const QS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YS=/^https?/;async function XS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GS(t);for(const n of e)try{if(JS(n))return}catch{}Pt(t,"unauthorized-domain")}function JS(t){const e=Mc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!YS.test(n))return!1;if(QS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const ZS=new ui(3e4,6e4);function gd(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eC(t){return new Promise((e,n)=>{var s,r,i;function o(){gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gd(),n($t(t,"network-request-failed"))},timeout:ZS.get()})}if(!((r=(s=Bt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Bt().gapi)===null||i===void 0)&&i.load)o();else{const a=OS("iframefcb");return Bt()[a]=()=>{gapi.load?o():n($t(t,"network-request-failed"))},DS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw qi=null,e})}let qi=null;function tC(t){return qi=qi||eC(t),qi}/**
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
 */const nC=new ui(5e3,15e3),sC="__/auth/iframe",rC="emulator/auth/iframe",iC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aC(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?du(e,rC):`https://${t.config.authDomain}/${sC}`,s={apiKey:e.apiKey,appName:t.name,v:zr},r=oC.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Kr(s).slice(1)}`}async function cC(t){const e=await tC(t),n=Bt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:aC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=$t(t,"network-request-failed"),a=Bt().setTimeout(()=>{i(o)},nC.get());function c(){Bt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const lC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uC=500,hC=600,dC="_blank",fC="http://localhost";class md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pC(t,e,n,s=uC,r=hC){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},lC),{width:s.toString(),height:r.toString(),top:i,left:o}),l=st().toLowerCase();n&&(a=Im(l)?dC:n),Em(l)&&(e=e||fC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(HT(l)&&a!=="_self")return gC(e||"",a),new md(null);const h=window.open(e||"",a,u);q(h,t,"popup-blocked");try{h.focus()}catch{}return new md(h)}function gC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const mC="__/auth/handler",yC="emulator/auth/handler";function yd(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:zr,eventId:r};if(e instanceof Nm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof gi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${vC(t)}?${Kr(a).slice(1)}`}function vC({config:t}){return t.emulator?du(t,yC):`https://${t.authDomain}/${mC}`}/**
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
 */const La="webStorageSupport";class _C{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lm,this._completeRedirectFn=qS,this._overrideRedirectResult=BS}async _openPopup(e,n,s,r){var i;sn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=yd(e,n,s,Mc(),r);return pC(e,o,yu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),wS(yd(e,n,s,Mc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(sn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await cC(e),s=new zS(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(La,{type:La},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[La];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Am()||pu()||ua()}}const wC=_C;var vd="@firebase/auth",_d="0.20.10";/**
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
 */class EC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bC(t){Ns(new es("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:km(t)},u=new WT(a,c,l);return CT(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ns(new es("auth-internal",e=>{const n=pi(e.getProvider("auth").getImmediate());return(s=>new EC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(vd,_d,IC(t)),En(vd,_d,"esm2017")}/**
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
 */const TC=5*60,SC=Jf("authIdTokenMaxAge")||TC;let wd=null;const CC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>SC)return;const r=n==null?void 0:n.token;wd!==r&&(wd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function AC(t=np()){const e=pl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ST(t,{popupRedirectResolver:wC,persistence:[RS,yS,Lm]}),s=Jf("authTokenSyncURL");if(s){const i=CC(s);hS(n,i,()=>i(n.currentUser)),uS(n,o=>i(o))}const r=Xf("auth");return r&&GT(n,`http://${r}`),n}bC("Browser");const kC={apiKey:"AIzaSyABeH16jlWOLYNy86QCjnQNUbFkhrIkhC4",authDomain:"noteballs-7961a.firebaseapp.com",projectId:"noteballs-7961a",storageBucket:"noteballs-7961a.appspot.com",messagingSenderId:"1030822046472",appId:"1:1030822046472:web:907f9e7048cb92e3321abd"},Hm=tp(kC),RC=Zb(Hm),Di=AC(Hm);let Zs,Ed,Ua=null;const Ys=Wf({id:"storeNotes",state:()=>({notes:[],notesLoaded:!1}),actions:{init(){const t=yi();Zs=Kb(RC,"users",t.user.id,"notes"),Ed=uT(Zs,dT("date","desc")),this.getNotes()},async getNotes(){this.notesLoaded=!1,Ua=ET(Ed,t=>{let e=[];t.forEach(n=>{let s={id:n.id,content:n.data().content,date:n.data().date};e.push(s)}),this.notes=e,this.notesLoaded=!0},t=>{console.log(t.message)})},clearNotes(){this.notes=[],Ua&&Ua()},addNote(t){console.log(t);let e=new Date().getTime(),n=e.toString();wT(Zs,{content:t,date:n})},deleteNote(t){_T(Pc(Zs,t))},updateNote(t,e){vT(Pc(Zs,t),{content:e})}},getters:{getNoteContent:t=>e=>t.notes.filter(n=>n.id==e)[0].content,totalNoteCount:t=>t.notes.length,totalCharactersCount:t=>{let e=0;return t.notes.forEach(n=>{e+=n.content.length}),e}}}),yi=Wf({id:"storeAuth",state:()=>({user:{}}),actions:{init(){const t=Ys();dS(Di,e=>{e?(this.user.id=e.uid,this.user.email=e.email,this.router.push("/"),t.init(),console.log("logged in",e)):(this.user={},this.router.replace("/auth"),console.log("logged out",e),t.clearNotes())})},async registerUser(t){let{email:e,password:n}=t;try{const r=(await cS(Di,e,n)).user}catch(s){console.log(s),s.code,s.message}},async loginUser(t){let{email:e,password:n}=t;try{const r=(await lS(Di,e,n)).user}catch(s){s.code,s.message}},async logoutUser(){try{let t=await fS(Di)}catch(t){console.log(t.message)}}}});const NC={class:"navbar is-success",role:"navigation","aria-label":"main navigation"},DC={class:"container is-max-desktop px-2"},OC={class:"navbar-brand"},PC=O("div",{class:"navbar-item is-size-4 is-family-monospace"}," NoteBalls ",-1),xC=O("span",{"aria-hidden":"true"},null,-1),MC=O("span",{"aria-hidden":"true"},null,-1),LC=O("span",{"aria-hidden":"true"},null,-1),UC=[xC,MC,LC],FC={class:"navbar-start"},VC={class:"navbar-end"},$C={__name:"Navbar",setup(t){const e=yi(),n=Ot(!1),s=()=>{n.value=!1,e.logoutUser()};return(r,i)=>{const o=il("RouterLink");return Pe(),at("nav",NC,[O("div",DC,[O("div",OC,[PC,O("a",{role:"button",class:Tn(["navbar-burger",{"is-active":n.value}]),onClick:i[0]||(i[0]=hr(a=>n.value=!n.value,["prevent"])),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},UC,2)]),O("div",{id:"navbarBasicExample",class:Tn(["navbar-menu",{"is-active":n.value}])},[O("div",FC,[xe(e).user.id?(Pe(),at("button",{key:0,onClick:s,class:"button is-small is-info mt-3 ml-3"}," Log out "+Yt(xe(e).user.email),1)):xo("",!0)]),O("div",VC,[ke(o,{onClick:i[1]||(i[1]=a=>n.value=!1),to:"/",class:"navbar-item","active-class":"is-active"},{default:ks(()=>[Sr(" Notes ")]),_:1}),ke(o,{onClick:i[2]||(i[2]=a=>n.value=!1),to:"/stats",class:"navbar-item","active-class":"is-active"},{default:ks(()=>[Sr(" Stats ")]),_:1})])],2)])])}}};const BC={class:"wrapper"},jC={class:"container is-max-desktop px-2 py-4"},HC={__name:"App",setup(t){const e=yi();return No(()=>{e.init()}),(n,s)=>{const r=il("RouterView");return Pe(),at("div",BC,[ke($C),O("div",jC,[ke(r)])])}}};/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const gs=typeof window<"u";function qC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function Fa(t,e){const n={};for(const s in e){const r=e[s];n[s]=xt(r)?r.map(t):t(r)}return n}const vr=()=>{},xt=Array.isArray,KC=/\/$/,zC=t=>t.replace(KC,"");function Va(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=YC(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function WC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Id(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function GC(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Vs(e.matched[s],n.matched[r])&&qm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!QC(t[n],e[n]))return!1;return!0}function QC(t,e){return xt(t)?bd(t,e):xt(e)?bd(e,t):t===e}function bd(t,e){return xt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function YC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Hr;(function(t){t.pop="pop",t.push="push"})(Hr||(Hr={}));var _r;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_r||(_r={}));function XC(t){if(!t)if(gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zC(t)}const JC=/^[^#]+#/;function ZC(t,e){return t.replace(JC,"#")+e}function eA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function tA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=eA(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Td(t,e){return(history.state?history.state.position-e:-1)+t}const Uc=new Map;function nA(t,e){Uc.set(t,e)}function sA(t){const e=Uc.get(t);return Uc.delete(t),e}let rA=()=>location.protocol+"//"+location.host;function Km(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Id(c,"")}return Id(n,t)+s+r}function iA(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=Km(t,location),m=n.value,v=e.value;let S=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}S=v?d.position-v.position:0}else s(p);r.forEach(C=>{C(n.value,m,{delta:S,type:Hr.pop,direction:S?S>0?_r.forward:_r.back:_r.unknown})})};function c(){o=n.value}function l(d){r.push(d);const p=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(fe({},d.state,{scroll:fa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Sd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?fa():null}}function oA(t){const{history:e,location:n}=window,s={value:Km(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:rA()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=fe({},e.state,Sd(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=fe({},r.value,e.state,{forward:c,scroll:fa()});i(u.current,u,!0);const h=fe({},Sd(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function aA(t){t=XC(t);const e=oA(t),n=iA(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=fe({location:"",base:t,go:s,createHref:ZC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function cA(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),aA(t)}function lA(t){return typeof t=="string"||t&&typeof t=="object"}function zm(t){return typeof t=="string"||typeof t=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wm=Symbol("");var Cd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Cd||(Cd={}));function $s(t,e){return fe(new Error,{type:t,[Wm]:!0},e)}function qt(t,e){return t instanceof Error&&Wm in t&&(e==null||!!(t.type&e))}const Ad="[^/]+?",uA={sensitive:!1,strict:!1,start:!0,end:!0},hA=/[.+*?^${}()[\]/\\]/g;function dA(t,e){const n=fe({},uA,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(hA,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:v,optional:S,regexp:C}=d;i.push({name:m,repeatable:v,optional:S});const x=C||Ad;if(x!==Ad){p+=10;try{new RegExp(`(${x})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${m}" (${x}): `+G.message)}}let K=v?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(K=S&&l.length<2?`(?:/${K})`:"/"+K),S&&(K+="?"),r+=K,p+=20,S&&(p+=-8),v&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=i[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:v,optional:S}=p,C=m in l?l[m]:"";if(xt(C)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const x=xt(C)?C.join("/"):C;if(!x)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=x}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function fA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function pA(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=fA(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(kd(s))return 1;if(kd(r))return-1}return r.length-s.length}function kd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gA={type:0,value:""},mA=/[a-zA-Z0-9_]/;function yA(t){if(!t)return[[]];if(t==="/")return[[gA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:mA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function vA(t,e,n){const s=dA(yA(t.path),n),r=fe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function _A(t,e){const n=[],s=new Map;e=Dd({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const p=!d,m=wA(u);m.aliasOf=d&&d.record;const v=Dd(e,u),S=[m];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const G of K)S.push(fe({},m,{components:d?d.record.components:m.components,path:G,aliasOf:d?d.record:m}))}let C,x;for(const K of S){const{path:G}=K;if(h&&G[0]!=="/"){const Z=h.record.path,pe=Z[Z.length-1]==="/"?"":"/";K.path=h.record.path+(G&&pe+G)}if(C=vA(K,h,v),d?d.alias.push(C):(x=x||C,x!==C&&x.alias.push(C),p&&u.name&&!Nd(C)&&o(u.name)),m.children){const Z=m.children;for(let pe=0;pe<Z.length;pe++)i(Z[pe],C,d&&d.children[pe])}d=d||C,c(C)}return x?()=>{o(x)}:vr}function o(u){if(zm(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&pA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Gm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Nd(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},m,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw $s(1,{location:u});v=d.record.name,p=fe(Rd(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Rd(u.params,d.keys.map(x=>x.name))),m=d.stringify(p)}else if("path"in u)m=u.path,d=n.find(x=>x.re.test(m)),d&&(p=d.parse(m),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw $s(1,{location:u,currentLocation:h});v=d.record.name,p=fe({},h.params,u.params),m=d.stringify(p)}const S=[];let C=d;for(;C;)S.unshift(C.record),C=C.parent;return{name:v,path:m,params:p,matched:S,meta:IA(S)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Rd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function wA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:EA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function EA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Nd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function IA(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Dd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Gm(t,e){return e.children.some(n=>n===t||Gm(t,n))}const Qm=/#/g,bA=/&/g,TA=/\//g,SA=/=/g,CA=/\?/g,Ym=/\+/g,AA=/%5B/g,kA=/%5D/g,Xm=/%5E/g,RA=/%60/g,Jm=/%7B/g,NA=/%7C/g,Zm=/%7D/g,DA=/%20/g;function _u(t){return encodeURI(""+t).replace(NA,"|").replace(AA,"[").replace(kA,"]")}function OA(t){return _u(t).replace(Jm,"{").replace(Zm,"}").replace(Xm,"^")}function Fc(t){return _u(t).replace(Ym,"%2B").replace(DA,"+").replace(Qm,"%23").replace(bA,"%26").replace(RA,"`").replace(Jm,"{").replace(Zm,"}").replace(Xm,"^")}function PA(t){return Fc(t).replace(SA,"%3D")}function xA(t){return _u(t).replace(Qm,"%23").replace(CA,"%3F")}function MA(t){return t==null?"":xA(t).replace(TA,"%2F")}function wo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function LA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Ym," "),o=i.indexOf("="),a=wo(o<0?i:i.slice(0,o)),c=o<0?null:wo(i.slice(o+1));if(a in e){let l=e[a];xt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Od(t){let e="";for(let n in t){const s=t[n];if(n=PA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(xt(s)?s.map(i=>i&&Fc(i)):[s&&Fc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function UA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=xt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const FA=Symbol(""),Pd=Symbol(""),pa=Symbol(""),wu=Symbol(""),Vc=Symbol("");function er(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function hn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a($s(4,{from:n,to:e})):h instanceof Error?a(h):lA(h)?a($s(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function $a(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(VA(a)){const l=(a.__vccOpts||a)[e];l&&r.push(hn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=qC(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&hn(d,n,s,i,o)()}))}}return r}function VA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xd(t){const e=Nt(pa),n=Nt(wu),s=We(()=>e.resolve(xe(t.to))),r=We(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Vs.bind(null,u));if(d>-1)return d;const p=Md(c[l-2]);return l>1&&Md(u)===p&&h[h.length-1].path!==p?h.findIndex(Vs.bind(null,c[l-2])):d}),i=We(()=>r.value>-1&&HA(n.params,s.value.params)),o=We(()=>r.value>-1&&r.value===n.matched.length-1&&qm(n.params,s.value.params));function a(c={}){return jA(c)?e[xe(t.replace)?"replace":"push"](xe(t.to)).catch(vr):Promise.resolve()}return{route:s,href:We(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const $A=Tf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xd,setup(t,{slots:e}){const n=Nn(xd(t)),{options:s}=Nt(pa),r=We(()=>({[Ld(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ld(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Bf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),BA=$A;function jA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function HA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!xt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Md(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ld=(t,e,n)=>t!=null?t:e!=null?e:n,qA=Tf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Nt(Vc),r=We(()=>t.route||s.value),i=Nt(Pd,0),o=We(()=>{let l=xe(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=We(()=>r.value.matched[o.value]);Mi(Pd,We(()=>o.value+1)),Mi(FA,a),Mi(Vc,r);const c=Ot();return Wn(()=>[c.value,a.value,t.name],([l,u,h],[d,p,m])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Vs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ud(n.default,{Component:d,route:l});const p=h.props[u],m=p?p===!0?l.params:typeof p=="function"?p(l):p:null,S=Bf(d,fe({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ud(n.default,{Component:S,route:l})||S}}});function Ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KA=qA;function zA(t){const e=_A(t.routes,t),n=t.parseQuery||LA,s=t.stringifyQuery||Od,r=t.history,i=er(),o=er(),a=er(),c=Ky(ln);let l=ln;gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fa.bind(null,w=>""+w),h=Fa.bind(null,MA),d=Fa.bind(null,wo);function p(w,P){let N,V;return zm(w)?(N=e.getRecordMatcher(w),V=P):V=w,e.addRoute(V,N)}function m(w){const P=e.getRecordMatcher(w);P&&e.removeRoute(P)}function v(){return e.getRoutes().map(w=>w.record)}function S(w){return!!e.getRecordMatcher(w)}function C(w,P){if(P=fe({},P||c.value),typeof w=="string"){const f=Va(n,w,P.path),g=e.resolve({path:f.path},P),y=r.createHref(f.fullPath);return fe(f,g,{params:d(g.params),hash:wo(f.hash),redirectedFrom:void 0,href:y})}let N;if("path"in w)N=fe({},w,{path:Va(n,w.path,P.path).path});else{const f=fe({},w.params);for(const g in f)f[g]==null&&delete f[g];N=fe({},w,{params:h(w.params)}),P.params=h(P.params)}const V=e.resolve(N,P),le=w.hash||"";V.params=u(d(V.params));const Te=WC(s,fe({},w,{hash:OA(le),path:V.path})),te=r.createHref(Te);return fe({fullPath:Te,hash:le,query:s===Od?UA(w.query):w.query||{}},V,{redirectedFrom:void 0,href:te})}function x(w){return typeof w=="string"?Va(n,w,c.value.path):fe({},w)}function K(w,P){if(l!==w)return $s(8,{from:P,to:w})}function G(w){return X(w)}function Z(w){return G(fe(x(w),{replace:!0}))}function pe(w){const P=w.matched[w.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let V=typeof N=="function"?N(w):N;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=x(V):{path:V},V.params={}),fe({query:w.query,hash:w.hash,params:"path"in V?{}:w.params},V)}}function X(w,P){const N=l=C(w),V=c.value,le=w.state,Te=w.force,te=w.replace===!0,f=pe(N);if(f)return X(fe(x(f),{state:typeof f=="object"?fe({},le,f.state):le,force:Te,replace:te}),P||N);const g=N;g.redirectedFrom=P;let y;return!Te&&GC(s,V,N)&&(y=$s(16,{to:g,from:V}),xn(V,V,!0,!1)),(y?Promise.resolve(y):ie(g,V)).catch(_=>qt(_)?qt(_,2)?_:Tt(_):ve(_,g,V)).then(_=>{if(_){if(qt(_,2))return X(fe({replace:te},x(_.to),{state:typeof _.to=="object"?fe({},le,_.to.state):le,force:Te}),P||g)}else _=Se(g,V,!0,te,le);return ce(g,V,_),_})}function M(w,P){const N=K(w,P);return N?Promise.reject(N):Promise.resolve()}function ie(w,P){let N;const[V,le,Te]=WA(w,P);N=$a(V.reverse(),"beforeRouteLeave",w,P);for(const f of V)f.leaveGuards.forEach(g=>{N.push(hn(g,w,P))});const te=M.bind(null,w,P);return N.push(te),fs(N).then(()=>{N=[];for(const f of i.list())N.push(hn(f,w,P));return N.push(te),fs(N)}).then(()=>{N=$a(le,"beforeRouteUpdate",w,P);for(const f of le)f.updateGuards.forEach(g=>{N.push(hn(g,w,P))});return N.push(te),fs(N)}).then(()=>{N=[];for(const f of w.matched)if(f.beforeEnter&&!P.matched.includes(f))if(xt(f.beforeEnter))for(const g of f.beforeEnter)N.push(hn(g,w,P));else N.push(hn(f.beforeEnter,w,P));return N.push(te),fs(N)}).then(()=>(w.matched.forEach(f=>f.enterCallbacks={}),N=$a(Te,"beforeRouteEnter",w,P),N.push(te),fs(N))).then(()=>{N=[];for(const f of o.list())N.push(hn(f,w,P));return N.push(te),fs(N)}).catch(f=>qt(f,8)?f:Promise.reject(f))}function ce(w,P,N){for(const V of a.list())V(w,P,N)}function Se(w,P,N,V,le){const Te=K(w,P);if(Te)return Te;const te=P===ln,f=gs?history.state:{};N&&(V||te?r.replace(w.fullPath,fe({scroll:te&&f&&f.scroll},le)):r.push(w.fullPath,le)),c.value=w,xn(w,P,N,te),Tt()}let Fe;function pt(){Fe||(Fe=r.listen((w,P,N)=>{if(!vi.listening)return;const V=C(w),le=pe(V);if(le){X(fe(le,{replace:!0}),V).catch(vr);return}l=V;const Te=c.value;gs&&nA(Td(Te.fullPath,N.delta),fa()),ie(V,Te).catch(te=>qt(te,12)?te:qt(te,2)?(X(te.to,V).then(f=>{qt(f,20)&&!N.delta&&N.type===Hr.pop&&r.go(-1,!1)}).catch(vr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ve(te,V,Te))).then(te=>{te=te||Se(V,Te,!1),te&&(N.delta&&!qt(te,8)?r.go(-N.delta,!1):N.type===Hr.pop&&qt(te,20)&&r.go(-1,!1)),ce(V,Te,te)}).catch(vr)}))}let it=er(),Ve=er(),Re;function ve(w,P,N){Tt(w);const V=Ve.list();return V.length?V.forEach(le=>le(w,P,N)):console.error(w),Promise.reject(w)}function ge(){return Re&&c.value!==ln?Promise.resolve():new Promise((w,P)=>{it.add([w,P])})}function Tt(w){return Re||(Re=!w,pt(),it.list().forEach(([P,N])=>w?N(w):P()),it.reset()),w}function xn(w,P,N,V){const{scrollBehavior:le}=t;if(!gs||!le)return Promise.resolve();const Te=!N&&sA(Td(w.fullPath,0))||(V||!N)&&history.state&&history.state.scroll||null;return sl().then(()=>le(w,P,Te)).then(te=>te&&tA(te)).catch(te=>ve(te,w,P))}const St=w=>r.go(w);let lt;const ls=new Set,vi={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:S,getRoutes:v,resolve:C,options:t,push:G,replace:Z,go:St,back:()=>St(-1),forward:()=>St(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ve.add,isReady:ge,install(w){const P=this;w.component("RouterLink",BA),w.component("RouterView",KA),w.config.globalProperties.$router=P,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>xe(c)}),gs&&!lt&&c.value===ln&&(lt=!0,G(r.location).catch(le=>{}));const N={};for(const le in ln)N[le]=We(()=>c.value[le]);w.provide(pa,P),w.provide(wu,Nn(N)),w.provide(Vc,c);const V=w.unmount;ls.add(w),w.unmount=function(){ls.delete(w),ls.size<1&&(l=ln,Fe&&Fe(),Fe=null,c.value=ln,lt=!1,Re=!1),V()}}};return vi}function fs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function WA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Vs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Vs(l,c))||r.push(c))}return[n,s,r]}function GA(){return Nt(pa)}function QA(){return Nt(wu)}var Fd;const ey=typeof window<"u",YA=t=>typeof t=="string",Ba=()=>{};ey&&((Fd=window==null?void 0:window.navigator)==null?void 0:Fd.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function $c(t){return typeof t=="function"?t():xe(t)}function XA(t){return t}function JA(t){return yy()?(vy(t),!0):!1}const ZA=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ek=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g,tk=(t,e,n,s)=>{let r=t<12?"AM":"PM";return s&&(r=r.split("").reduce((i,o)=>i+=`${o}.`,"")),n?r.toLowerCase():r},nk=(t,e,n={})=>{var s;const r=t.getFullYear(),i=t.getMonth(),o=t.getDate(),a=t.getHours(),c=t.getMinutes(),l=t.getSeconds(),u=t.getMilliseconds(),h=t.getDay(),d=(s=n.customMeridiem)!=null?s:tk,p={YY:()=>String(r).slice(-2),YYYY:()=>r,M:()=>i+1,MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(n.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(n.locales,{month:"long"}),D:()=>String(o),DD:()=>`${o}`.padStart(2,"0"),H:()=>String(a),HH:()=>`${a}`.padStart(2,"0"),h:()=>`${a%12||12}`.padStart(1,"0"),hh:()=>`${a%12||12}`.padStart(2,"0"),m:()=>String(c),mm:()=>`${c}`.padStart(2,"0"),s:()=>String(l),ss:()=>`${l}`.padStart(2,"0"),SSS:()=>`${u}`.padStart(3,"0"),d:()=>h,dd:()=>t.toLocaleDateString(n.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(n.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(n.locales,{weekday:"long"}),A:()=>d(a,c),AA:()=>d(a,c,!1,!0),a:()=>d(a,c,!0),aa:()=>d(a,c,!0,!0)};return e.replace(ek,(m,v)=>v||p[m]())},sk=t=>{if(t===null)return new Date(NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(ZA);if(e){const n=e[2]-1||0,s=(e[7]||"0").substring(0,3);return new Date(e[1],n,e[3]||1,e[4]||0,e[5]||0,e[6]||0,s)}}return new Date(t)};function rk(t,e="HH:mm:ss",n={}){return We(()=>nk(sk($c(t)),$c(e),n))}function cr(t){var e;const n=$c(t);return(e=n==null?void 0:n.$el)!=null?e:n}const ty=ey?window:void 0;function Oi(...t){let e,n,s,r;if(YA(t[0])?([n,s,r]=t,e=ty):[e,n,s,r]=t,!e)return Ba;let i=Ba;const o=Wn(()=>cr(e),c=>{i(),c&&(c.addEventListener(n,s,r),i=()=>{c.removeEventListener(n,s,r),i=Ba})},{immediate:!0,flush:"post"}),a=()=>{o(),i()};return JA(a),a}function ik(t,e,n={}){const{window:s=ty,ignore:r,capture:i=!0,detectIframe:o=!1}=n;if(!s)return;const a=Ot(!0);let c;const l=p=>{s.clearTimeout(c);const m=cr(t);!m||m===p.target||p.composedPath().includes(m)||!a.value||e(p)},u=p=>r&&r.some(m=>{const v=cr(m);return v&&(p.target===v||p.composedPath().includes(v))}),h=[Oi(s,"click",l,{passive:!0,capture:i}),Oi(s,"pointerdown",p=>{const m=cr(t);a.value=!!m&&!p.composedPath().includes(m)&&!u(p)},{passive:!0}),Oi(s,"pointerup",p=>{if(p.button===0){const m=p.composedPath();p.composedPath=()=>m,c=s.setTimeout(()=>l(p),50)}},{passive:!0}),o&&Oi(s,"blur",p=>{var m;const v=cr(t);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(v!=null&&v.contains(document.activeElement))&&e(p)})].filter(Boolean);return()=>h.forEach(p=>p())}const Bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jc="__vueuse_ssr_handlers__";Bc[jc]=Bc[jc]||{};Bc[jc];var Vd;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Vd||(Vd={}));var ok=Object.defineProperty,$d=Object.getOwnPropertySymbols,ak=Object.prototype.hasOwnProperty,ck=Object.prototype.propertyIsEnumerable,Bd=(t,e,n)=>e in t?ok(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,lk=(t,e)=>{for(var n in e||(e={}))ak.call(e,n)&&Bd(t,n,e[n]);if($d)for(var n of $d(e))ck.call(e,n)&&Bd(t,n,e[n]);return t};const uk={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};lk({linear:XA},uk);const hk={class:"modal is-active p-2"},dk=O("div",{class:"modal-background"},null,-1),fk=O("p",{class:"modal-card-title"},"Delete Note?",-1),pk=O("section",{class:"modal-card-body"}," Are you sure? ",-1),gk={class:"modal-card-foot is-justify-content-flex-end"},mk={__name:"ModalDeleteNote",props:{modelValue:{type:Boolean,default:!1},noteId:String},emits:["update:modelValue"],setup(t,{emit:e}){const n=Ys(),s=()=>{e("update:modelValue",!1)},r=Ot(null);ik(r,s);const i=o=>{console.log("close"),o.key=="Escape"&&s()};return No(()=>{document.addEventListener("keyup",i)}),Do(()=>{document.removeEventListener("keyup",i)}),(o,a)=>(Pe(),at("div",hk,[dk,O("div",{class:"modal-card",ref_key:"modalCardRef",ref:r},[O("header",{class:"modal-card-head"},[fk,O("button",{class:"delete","aria-label":"close",onClick:s})]),pk,O("footer",gk,[O("button",{class:"button",onClick:s},"Cancel"),O("button",{onClick:a[0]||(a[0]=c=>xe(n).deleteNote(t.noteId)),class:"button is-danger"},"Delete")])],512)]))}},yk={class:"card mb-4"},vk={class:"card-content"},_k={class:"content"},wk={class:"columns is-mobile has-text-grey-light mt-2"},Ek={class:"column"},Ik={class:"column has-text-right"},bk={class:"card-footer"},Tk={__name:"Note",props:["note"],setup(t){const e=t;Ys();const n=We(()=>{let i=e.note.content.length>1?"characters":"character";return e.note.content.length+" "+i}),s=Nn({deleteNote:!1}),r=We(()=>{let i=new Date(parseInt(e.note.date));return rk(i,"MM-DD-YYYY @ HH:mm").value});return(i,o)=>{const a=il("RouterLink");return Pe(),at("div",yk,[O("div",vk,[O("div",_k,[Sr(Yt(t.note.content)+" ",1),O("div",wk,[O("small",Ek,Yt(xe(r)),1),O("small",Ik,Yt(xe(n)),1)])])]),O("footer",bk,[ke(a,{to:`/editNote/${t.note.id}`,class:"card-footer-item"},{default:ks(()=>[Sr(" Edit ")]),_:1},8,["to"]),O("a",{href:"#",class:"card-footer-item",onClick:o[0]||(o[0]=hr(c=>s.deleteNote=!0,["prevent"]))},"Delete")]),s.deleteNote?(Pe(),Oo(mk,{key:0,modelValue:s.deleteNote,"onUpdate:modelValue":o[1]||(o[1]=c=>s.deleteNote=c),noteId:t.note.id},null,8,["modelValue","noteId"])):xo("",!0)])}}},Sk={key:0,class:"label has-text-white"},Ck={class:"field"},Ak={class:"control"},kk=["value","placeholder"],Rk={class:"field is-grouped is-grouped-right"},Nk={class:"control"},ny={__name:"AddEditNote",props:{modelValue:{type:String,required:!0},bgColor:{type:String,default:"success"},placeholder:{type:String,default:"Type something..."},label:{type:String}},emits:["update:modelValue"],setup(t,{expose:e,emit:n}){const s=Ot(null);e({focusTextarea:()=>{s.value.focus()}});const i={mounted(o){o.focus()}};return(o,a)=>(Pe(),at("div",{class:Tn(["card p-4 mb-5",`has-background-${t.bgColor}-dark `])},[t.label?(Pe(),at("label",Sk,Yt(t.label),1)):xo("",!0),O("div",Ck,[O("div",Ak,[Ya(O("textarea",{value:t.modelValue,class:"textarea",placeholder:t.placeholder,onInput:a[0]||(a[0]=c=>o.$emit("update:modelValue",c.target.value)),ref_key:"textareaRef",ref:s,maxlength:"100"},null,40,kk),[[i]])])]),O("div",Rk,[O("div",Nk,[kv(o.$slots,"buttons")])])],2))}},Dk={class:"notes"},Ok=["disabled"],Pk={key:0,class:"progress is-large is-success",max:"100"},xk={key:0,class:"is-size-4 has-text-centered"},Mk={__name:"ViewNotes",setup(t){const e=Ys(),n=Ot(""),s=Ot(null),r=()=>{e.addNote(n.value),n.value="",s.value.focusTextarea()};return Wn(n,i=>{i.length==100&&alert("\u0441\u0442\u043E\u043F")}),(i,o)=>(Pe(),at("div",Dk,[ke(ny,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),ref_key:"addEditNoteRef",ref:s,placeholder:"Add New Note..."},{buttons:ks(()=>[O("button",{class:"button is-link has-background-success",onClick:r,disabled:!n.value}," Add New Note ",8,Ok)]),_:1},8,["modelValue"]),xe(e).notesLoaded?(Pe(),at(ht,{key:1},[(Pe(!0),at(ht,null,Av(xe(e).notes,a=>(Pe(),Oo(Tk,{key:a.id,note:a},null,8,["note"]))),128)),xe(e).notes.length?xo("",!0):(Pe(),at("div",xk," No notes yet added... "))],64)):(Pe(),at("progress",Pk))]))}},Lk={class:"stats"},Uk={class:"table is-fullwidth"},Fk=O("thead",null,[O("tr",null,[O("th",null,"Stat"),O("th",null,"Value")])],-1),Vk=O("td",null,"Number of Notes",-1),$k=O("td",null,"Number of Characters of all Notes",-1),Bk={__name:"ViewStats",setup(t){const e=Ys();return(n,s)=>(Pe(),at("div",Lk,[O("div",Uk,[Fk,O("tbody",null,[O("tr",null,[Vk,O("td",null,Yt(xe(e).totalNoteCount),1)]),O("tr",null,[$k,O("td",null,Yt(xe(e).totalCharactersCount),1)])])])]))}},jk={class:"edit-note"},Hk=["disabled"],qk={__name:"ViewEditNote",setup(t){const e=Ys(),n=Ot(""),s=QA(),r=GA();n.value=e.getNoteContent(s.params.id);const i=()=>{e.updateNote(s.params.id,n.value),r.push("/")};return(o,a)=>(Pe(),at("div",jk,[ke(ny,{bgColor:"link",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c),ref:"addEditNoteRef",placeholder:"Edit Note...",label:"Edit Note"},{buttons:ks(()=>[O("button",{button:"",onClick:a[0]||(a[0]=c=>o.$router.push("/")),class:"button is-link is-light"}," Cancel "),O("button",{onClick:i,class:"button is-link has-background-link",disabled:!n.value}," Save Note ",8,Hk)]),_:1},8,["modelValue"])]))}};const Kk={class:"auth"},zk={class:"tabs is-centered"},Wk={class:"card auth-form"},Gk={class:"card-content"},Qk={class:"title has-text-centered"},Yk=["onSubmit"],Xk={class:"field"},Jk=O("label",{class:"label"},"Email",-1),Zk={class:"control"},eR={class:"field"},tR=O("label",{class:"label"},"Password",-1),nR={class:"control"},sR={class:"field is-grouped is-grouped-right"},rR={class:"control"},iR={class:"button is-primary"},oR={__name:"ViewAuth",setup(t){const e=yi(),n=Ot(!1),s=We(()=>n.value?"Register":"Login"),r=Nn({email:"",password:""}),i=()=>{!r.email||!r.password?alert("Please enter an email and password"):n.value?e.registerUser(r):e.loginUser(r)};return(o,a)=>(Pe(),at("div",Kk,[O("div",zk,[O("ul",null,[O("li",{class:Tn({"is-active":!n.value})},[O("a",{onClick:a[0]||(a[0]=hr(c=>n.value=!1,["prevent"]))},"Login")],2),O("li",{class:Tn({"is-active":n.value})},[O("a",{onClick:a[1]||(a[1]=hr(c=>n.value=!0,["prevent"]))},"Register")],2)])]),O("div",Wk,[O("div",Gk,[O("div",Qk,Yt(xe(s)),1),O("form",{onSubmit:hr(i,["prevent"])},[O("div",Xk,[Jk,O("div",Zk,[Ya(O("input",{class:"input",type:"email",placeholder:"e.g. alexsmith@gmail.com","onUpdate:modelValue":a[2]||(a[2]=c=>r.email=c)},null,512),[[nh,r.email]])])]),O("div",eR,[tR,O("div",nR,[Ya(O("input",{class:"input",type:"password",placeholder:"Enter a password","onUpdate:modelValue":a[3]||(a[3]=c=>r.password=c)},null,512),[[nh,r.password]])])]),O("div",sR,[O("p",rR,[O("button",iR,Yt(xe(s)),1)])])],40,Yk)])])]))}},Eu=zA({history:cA("/noteballs/"),routes:[{path:"/",name:"home",component:Mk},{path:"/editNote/:id",name:"editNote",component:qk},{path:"/stats",name:"stats",component:Bk},{path:"/auth",name:"auth",component:oR}]});Eu.beforeEach(async(t,e)=>{const n=yi();if(!n.user.id&&t.name!=="auth")return{name:"auth"};if(n.user.id&&t.name==="auth")return!1});const Iu=N_(HC),sy=P_();sy.use(({store:t})=>{t.router=Zn(Eu)});Iu.use(sy);Iu.use(Eu);Iu.mount("#app");

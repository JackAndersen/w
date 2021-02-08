/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v9.1.1 <https://hydejack.com/>
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{356:function(e,t,r){"use strict";r.r(t),r.d(t,"HyPushState",(function(){return rt}));var n=r(2),o=r(327),c=r(317),i=r(310),a=r(333),u=r(144),l=r(142),s=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.scheduler=t,n.work=r,n}return Object(n.f)(t,e),t.prototype.requestAsyncId=function(t,r,n){return void 0===n&&(n=0),null!==n&&n>0?e.prototype.requestAsyncId.call(this,t,r,n):(t.actions.push(this),t.scheduled||(t.scheduled=l.a.requestAnimationFrame((function(){return t.flush(void 0)}))))},t.prototype.recycleAsyncId=function(t,r,n){if(void 0===n&&(n=0),null!=n&&n>0||null==n&&this.delay>0)return e.prototype.recycleAsyncId.call(this,t,r,n);0===t.actions.length&&(l.a.cancelAnimationFrame(r),t.scheduled=void 0)},t}(u.a),f=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(n.f)(t,e),t.prototype.flush=function(e){this.active=!0,this.scheduled=void 0;var t,r=this.actions,n=-1;e=e||r.shift();var o=r.length;do{if(t=e.execute(e.state,e.delay))break}while(++n<o&&(e=r.shift()));if(this.active=!1,t){for(;++n<o&&(e=r.shift());)e.unsubscribe();throw t}},t}(r(146).a))(s),p=r(360),h=r(362),b=r(46),y=r(147),O=r(151),d=r(328),j=r(334),v=r(331),m=r(14),w=r(10);function g(e,t){return void 0===t&&(t=0),Object(m.b)((function(r,n){r.subscribe(new w.a(n,(function(r){return n.add(e.schedule((function(){return n.next(r)}),t))}),(function(r){return n.add(e.schedule((function(){return n.error(r)}),t))}),(function(){return n.add(e.schedule((function(){return n.complete()}),t))})))}))}var S,P=r(332),k=r(358),E=r(148),A=r(150),R=r(363),T=r(361),L=r(312);function C(e){var t=e.protocol,r=e.host,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return t!==n.protocol||r!==n.host}function I(e){return e&&""===e.target}function q(e,t){var r=e.url,n=e.anchor,o=e.event,c=o.metaKey,i=o.ctrlKey;return!(c||i||!I(n)||C(r,t))}function M(e,t){var r=e.url;return!(!I(e.anchor)||C(r,t)||function(e){var t=e.hash,r=e.origin,n=e.pathname,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return""!==t&&r===o.origin&&n===o.pathname}(r,t))}function H(e){var t=e.cause,r=e.url,n=r.pathname,o=r.hash,c=e.oldURL;return n===(null==c?void 0:c.pathname)&&(t===S.Pop||t===S.Push&&""!==o)}!function(e){e.Init="init",e.Hint="hint",e.Push="push",e.Pop="pop"}(S||(S={}));var N=r(108),U=r(364),D=r(359);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){B(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var V=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t}var t,r,n;return t=e,(r=[{key:"fetchPage",value:function(e){return Object(L.g)(e.url.href,{method:"GET",mode:"cors",headers:{Accept:"text/html"}}).pipe(Object(E.a)((function(e){return e.text()})),Object(b.a)((function(t){return _(_({},e),{},{responseText:t})})),Object(R.a)((function(t){return Object(N.a)(_(_({},e),{},{error:t,responseText:null}))})))}},{key:"selectPrefetch",value:function(e,t,r){return e.href===t.url.href?Object(N.a)(t):r.pipe(Object(D.a)(1))}},{key:"getResponse",value:function(e,t,r){return Object(U.a)(this.selectPrefetch(t.url,r,e),this.parent.animPromise).pipe(Object(b.a)((function(e){return _(_({},x(e,1)[0]),t)})))}}])&&F(t.prototype,r),n&&F(t,n),e}(),J=r(18),K=r(311),X=r(345);function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ee(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var te=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t}var t,r,n;return t=e,(r=[{key:"removeScriptTags",value:function(e){var t=this,r=[];return e.forEach((function(e){e&&t.scriptSelector&&e.querySelectorAll(t.scriptSelector).forEach((function(e){if(e instanceof HTMLScriptElement){var t=[function(e){var t=document.createElement("script");return Array.from(e.attributes).forEach((function(e){return t.setAttributeNode(e.cloneNode())})),t.innerHTML=e.innerHTML,t}(e),e];r.push(t)}}))})),r}},{key:"reinsertScriptTags",value:function(e){var t=this;if(!this.scriptSelector)return Promise.resolve(e);var r=e.scripts,n=document.write;return Object(J.a)(r).pipe(Object(K.a)((function(e){return t.insertScript(e)})),Object(R.a)((function(t){return Object(N.a)(Y(Y({},e),{},{error:t}))})),Object(X.a)((function(){return document.write=n})),Object(P.a)(e)).toPromise()}},{key:"insertScript",value:function(e){var t=z(e,2),r=t[0],n=t[1];return document.write=function(){for(var e=document.createElement("div"),t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.innerHTML=r.join(),Array.from(e.childNodes).forEach((function(e){var t;return null===(t=n.parentNode)||void 0===t?void 0:t.insertBefore(e,n)}))},new Promise((function(e,t){var o,c;""!==r.src?(r.addEventListener("load",e),r.addEventListener("error",t),null===(o=n.parentNode)||void 0===o||o.replaceChild(r,n)):(null===(c=n.parentNode)||void 0===c||c.replaceChild(r,n),e({}))}))}},{key:"scriptSelector",get:function(){return this.parent.scriptSelector}}])&&ee(t.prototype,r),n&&ee(t,n),e}();function re(e,t){e.forEach((function(e){e&&(e.querySelectorAll("[href]").forEach(ne("href",t)),e.querySelectorAll("[src]").forEach(ne("src",t)),e.querySelectorAll("img[srcset]").forEach(function(e,t){return function(r){try{var n=r.getAttribute(e);if(null==n)return;r.setAttribute(e,n.split(/\s*,\s*/).map((function(e){var r=e.split(/\s+/);return r[0]=new URL(r[0],t).href,r.join(" ")})).join(", "))}catch(e){}}}("srcset",t)),e.querySelectorAll("blockquote[cite]").forEach(ne("cite",t)),e.querySelectorAll("del[cite]").forEach(ne("cite",t)),e.querySelectorAll("ins[cite]").forEach(ne("cite",t)),e.querySelectorAll("q[cite]").forEach(ne("cite",t)),e.querySelectorAll("img[longdesc]").forEach(ne("longdesc",t)),e.querySelectorAll("frame[longdesc]").forEach(ne("longdesc",t)),e.querySelectorAll("iframe[longdesc]").forEach(ne("longdesc",t)),e.querySelectorAll("img[usemap]").forEach(ne("usemap",t)),e.querySelectorAll("input[usemap]").forEach(ne("usemap",t)),e.querySelectorAll("object[usemap]").forEach(ne("usemap",t)),e.querySelectorAll("form[action]").forEach(ne("action",t)),e.querySelectorAll("button[formaction]").forEach(ne("formaction",t)),e.querySelectorAll("input[formaction]").forEach(ne("formaction",t)),e.querySelectorAll("video[poster]").forEach(ne("poster",t)),e.querySelectorAll("object[data]").forEach(ne("data",t)),e.querySelectorAll("object[codebase]").forEach(ne("codebase",t)),e.querySelectorAll("object[archive]").forEach(function(e,t){return function(r){try{var n=r.getAttribute(e);if(null==n)return;r.setAttribute(e,n.split(/[\s,]+/).map((function(e){return new URL(e,t).href})).join(", "))}catch(e){}}}("archive",t)))}))}function ne(e,t){return function(r){try{var n=r.getAttribute(e);if(null==n)return;r.setAttribute(e,new URL(n,t).href)}catch(e){}}}function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ce(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){ue(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function le(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var se=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t,this.scriptManager=new te(t)}var t,r,n;return t=e,(r=[{key:"getReplaceElements",value:function(e){if(this.replaceSelector)return this.replaceSelector.split(",").map((function(t){return e.querySelector(t)}));if(this.el.id)return[e.getElementById(this.el.id)];var t=Array.from(document.getElementsByTagName(this.el.tagName)).indexOf(this.el);return[e.getElementsByTagName(this.el.tagName)[t]]}},{key:"responseToContent",value:function(e){var t=e.responseText,r=(new DOMParser).parseFromString(t,"text/html"),n=r.title,o=void 0===n?"":n,c=this.getReplaceElements(r);if(c.every((function(e){return null==e})))throw new Error("Couldn't find any element in the document at '".concat(location,"'."));var i=this.scriptSelector?this.scriptManager.removeScriptTags(c):[];return ae(ae({},e),{},{document:r,title:o,replaceEls:c,scripts:i})}},{key:"replaceContentWithSelector",value:function(e,t){e.split(",").map((function(e){return document.querySelector(e)})).forEach((function(e,r){var n,o=t[r];o&&(null===(n=null==e?void 0:e.parentNode)||void 0===n||n.replaceChild(o,e))}))}},{key:"replaceContentWholesale",value:function(e){var t=oe(e,1)[0];t&&(this.el.innerHTML=t.innerHTML)}},{key:"replaceContent",value:function(e){this.replaceSelector?this.replaceContentWithSelector(this.replaceSelector,e):this.replaceContentWholesale(e)}},{key:"replaceHead",value:function(e){var t=this.el.ownerDocument.head,r=t.querySelector("link[rel=canonical]"),n=e.head.querySelector("link[rel=canonical]");r&&n&&(r.href=n.href);var o=t.querySelector("meta[name=description]"),c=e.head.querySelector("meta[name=description]");o&&c&&(o.content=c.content)}},{key:"updateDOM",value:function(e){try{var t=e.replaceEls,r=e.document;C(this.parent)&&re(t,this.parent.href),this.replaceHead(r),this.replaceContent(t)}catch(t){throw ae(ae({},e),{},{error:t})}}},{key:"reinsertScriptTags",value:function(e){return this.scriptManager.reinsertScriptTags(e)}},{key:"el",get:function(){return this.parent}},{key:"replaceSelector",get:function(){return this.parent.replaceSelector}},{key:"scriptSelector",get:function(){return this.parent.scriptSelector}}])&&le(t.prototype,r),n&&le(t,n),e}(),fe=r(47),pe=r(111);function he(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var be=function(e){return Array.prototype.concat.apply([],e)},ye=function(e){return{addedNodes:new Set(be(e.map((function(e){return Array.from(e.addedNodes)})))),removedNodes:new Set(be(e.map((function(e){return Array.from(e.removedNodes)}))))}},Oe=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"setupEventListeners",value:function(){var e=this,t=Object(i.a)(this.el,"click").pipe(Object(b.a)((function(t){var r=Object(L.k)(t.target,e.linkSelector);if(r instanceof HTMLAnchorElement)return[t,r]})),Object(y.a)((function(e){return!!e}))),r=function(e,t){return e.matches(t)&&e instanceof HTMLAnchorElement?Object(N.a)(e):Object(J.a)(e.querySelectorAll(t)).pipe(Object(y.a)((function(e){return e instanceof HTMLAnchorElement})))};return{hintEvent$:this.$.linkSelector.pipe(Object(E.a)((function(t){var n=new Map,o=function(e){n.has(e)||n.set(e,function(e){return Object(a.a)(Object(i.a)(e,"mouseenter",{passive:!0}),Object(i.a)(e,"touchstart",{passive:!0}),Object(i.a)(e,"focus",{passive:!0})).pipe(Object(b.a)((function(t){return[t,e]})))}(e))},c=function(e){n.delete(e)};return Object(L.d)(e.el,{childList:!0,subtree:!0}).pipe(Object(d.a)({addedNodes:[e.el],removedNodes:[]}),Object(L.c)(500),Object(b.a)(ye),Object(E.a)((function(e){var i=e.addedNodes,a=e.removedNodes;return Object(J.a)(a).pipe(Object(y.a)((function(e){return e instanceof Element})),Object(fe.a)((function(e){return r(e,t)})),Object(O.a)(c)).subscribe(),Object(J.a)(i).pipe(Object(y.a)((function(e){return e instanceof Element})),Object(fe.a)((function(e){return r(e,t)})),Object(O.a)(o)).subscribe(),Object(J.a)(n.values()).pipe(Object(pe.a)())})),Object(L.l)(e.$.prefetch))}))),pushEvent$:t}}}])&&he(t.prototype,r),n&&he(t,n),e}();function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){ve(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ve(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function me(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var we=function(e){return new Promise((function(t){return setTimeout(t,e)}))},ge=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t}var t,r,n;return t=e,(r=[{key:"onStart",value:function(e){var t=this;this.parent.animPromise=we(this.parent.duration),this.parent.fireEvent("start",{detail:je(je({},e),{},{transitionUntil:function(e){t.parent.animPromise=Promise.all([t.parent.animPromise,e])}})})}},{key:"emitDOMError",value:function(e){var t=location.href;window.history.back(),setTimeout((function(){return document.location.assign(t)}),100)}},{key:"emitNetworkError",value:function(e){this.parent.fireEvent("networkerror",{detail:e})}},{key:"emitError",value:function(e){this.parent.fireEvent("error",{detail:e})}},{key:"emitReady",value:function(e){this.parent.fireEvent("ready",{detail:e})}},{key:"emitAfter",value:function(e){var t=this;this.parent.fadePromise=we(this.parent.duration),this.parent.fireEvent("after",{detail:je(je({},e),{},{transitionUntil:function(e){t.parent.fadePromise=Promise.all([t.parent.fadePromise,e])}})})}},{key:"emitProgress",value:function(e){this.parent.fireEvent("progress",{detail:e})}},{key:"emitLoad",value:function(e){this.parent.fireEvent("load",{detail:e})}}])&&me(t.prototype,r),n&&me(t,n),e}();function Se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(r),!0).forEach((function(t){ke(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ke(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ee(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}window.HashChangeEvent=window.HashChangeEvent||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.oldURL,n=void 0===r?"":r,o=t.newURL,c=void 0===o?"":o,i=new CustomEvent(e);return i.oldURL=n,i.newURL=c,i};var Ae=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.updateHistoryScrollPosition=function(){if(!C(r.parent)){var e=r.assignScrollPosition(history.state||{});history.replaceState(e,document.title)}},this.parent=t}var t,r,n;return t=e,(r=[{key:"updateHistoryState",value:function(e){var t=e.cause,r=e.replace,n=e.url,o=e.oldURL;if(!C(this.parent))switch(t){case S.Init:case S.Push:var c=this.parent.histId;if(r||n.href===location.href){var i=Pe(Pe({},history.state),{},ke({},c,{}));history.replaceState(i,document.title,n.href)}else history.pushState(ke({},c,{}),document.title,n.href);case S.Pop:this.parent.simulateHashChange&&o&&function(e,t){e.hash!==t.hash&&window.dispatchEvent(new HashChangeEvent("hashchange",{newURL:e.href,oldURL:t.href}))}(n,o)}}},{key:"updateTitle",value:function(e){var t=e.cause,r=e.title;document.title=r,C(this.parent)||t!==S.Push||history.replaceState(history.state,r)}},{key:"assignScrollPosition",value:function(e){var t=this.parent.histId;return Pe(Pe({},e),{},ke({},t,Pe(Pe({},e[t]),{},{scrollTop:Object(L.j)(),scrollHeight:Object(L.i)()})))}}])&&Ee(t.prototype,r),n&&Ee(t,n),e}();function Re(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Te,Le,Ce,Ie,qe,Me,He,Ne,Ue,De,xe,We,$e=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t,"scrollRestoration"in history&&(history.scrollRestoration="manual")}var t,r,n;return t=e,(r=[{key:"manageScrollPosition",value:function(e){var t=e.cause,r=e.url.hash;switch(t){case S.Push:this.scrollHashIntoView(r,{behavior:"smooth",block:"start",inline:"nearest"});break;case S.Pop:this.restoreScrollPosition();break;case S.Init:this.restoreScrollPositionOnReload()}}},{key:"elementFromHash",value:function(e){return document.getElementById(decodeURIComponent(e.substr(1)))}},{key:"scrollHashIntoView",value:function(e,t){if(e){var r=this.elementFromHash(e);r&&r.scrollIntoView(t)}else window.scroll(window.pageXOffset,0)}},{key:"restoreScrollPosition",value:function(){var e=this.parent.histId,t=(history.state&&history.state[e]||{}).scrollTop;null!=t&&window.scroll(window.pageXOffset,t)}},{key:"restoreScrollPositionOnReload",value:function(){var e=this,t=this.parent.histId;history.state&&history.state[t]&&0===Object(L.j)()?this.restoreScrollPosition():location.hash&&requestAnimationFrame((function(){return e.scrollHashIntoView(location.hash,!0)}))}}])&&Re(t.prototype,r),n&&Re(t,n),e}();function _e(e){return(_e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Be(e){return function(e){if(Array.isArray(e))return Je(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Ve(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}(e,t)||Ve(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ve(e,t){if(e){if("string"==typeof e)return Je(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Je(e,t):void 0}}function Je(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ke(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ze(e,t,r){return(ze="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=et(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function Ge(e,t){return(Ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Qe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=et(e);if(t){var o=et(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Ye(this,r)}}function Ye(e,t){return!t||"object"!==_e(t)&&"function"!=typeof t?Ze(e):t}function Ze(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function et(e){return(et=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}
/**
 * Copyright (c) 2020 Florian Klampfer <https://qwtel.com/>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license
 * @nocompile
 */
function tt(e,t){return e.url.href===t.url.href&&e.error===t.error&&e.cacheNr===t.cacheNr}var rt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ge(e,t)}(l,e);var t,r,o,u=Qe(l);function l(){var e;return Ke(this,l),(e=u.apply(this,arguments)).el=Ze(e),e.linkSelector="a[href]:not([data-no-push])",e.prefetch=!1,e.duration=0,e.simulateHashChange=!1,e.baseURL=window.location.href,Te.set(Ze(e),Object(L.f)()),e.animPromise=Promise.resolve(null),e.fadePromise=Promise.resolve(null),Le.set(Ze(e),new $e(Ze(e))),Ce.set(Ze(e),new Ae(Ze(e))),Ie.set(Ze(e),new V(Ze(e))),qe.set(Ze(e),new se(Ze(e))),Me.set(Ze(e),new ge(Ze(e))),He.set(Ze(e),new URL(e.baseURL)),Ne.set(Ze(e),(function(t,r){var o=new URL(Object(n.c)(Ze(e),He).href);o[t]=r,e.assign(o.href)})),Ue.set(Ze(e),0),De.set(Ze(e),new c.a),xe.set(Ze(e),void 0),We.set(Ze(e),(function(){var t=e.setupEventListeners(),r=t.pushEvent$,o=t.hintEvent$,c=r.pipe(Object(b.a)((function(t){var r=Fe(t,2),o=r[0],c=r[1];return{cause:S.Push,url:new URL(c.href,e.href),anchor:c,event:o,cacheNr:Object(n.c)(Ze(e),Ue)}})),Object(y.a)((function(t){return q(t,Ze(e))})),Object(O.a)((function(t){t.event.preventDefault(),Object(n.c)(Ze(e),Ce).updateHistoryScrollPosition()}))),u=Object(i.a)(window,"popstate").pipe(Object(y.a)((function(){return window.history.state&&window.history.state[e.histId]})),Object(b.a)((function(t){return{cause:S.Pop,url:new URL(window.location.href),cacheNr:Object(n.c)(Ze(e),Ue),event:t}}))),l=Object(n.c)(Ze(e),De),s=Object(a.a)(c,u,l).pipe(Object(d.a)({url:new URL(window.location.href)}),Object(j.a)(),Object(b.a)((function(e){var t=Fe(e,2),r=t[0],n=t[1];return Object.assign(n,{oldURL:r.url})})),Object(v.a)()),h=s.pipe(Object(y.a)((function(e){return!H(e)})),Object(v.a)()),m=s.pipe(Object(y.a)((function(e){return H(e)})),Object(y.a)((function(){return history.state&&history.state[e.histId]})),g(f),Object(O.a)((function(t){Object(n.c)(Ze(e),Ce).updateHistoryState(t),Object(n.c)(Ze(e),Le).manageScrollPosition(t)}))),w=Object(p.a)((function(){return Object(a.a)(h.pipe(Object(P.a)(!0)),Object(n.c)(Ze(e),xe).pipe(Object(P.a)(!1)))})).pipe(Object(d.a)(!1)),C=o.pipe(Object(L.h)(w.pipe(Object(b.a)((function(e){return!e})))),Object(b.a)((function(t){var r=Fe(t,2),o=r[0],c=r[1];return{cause:S.Hint,url:new URL(c.href,e.href),anchor:c,event:o,cacheNr:Object(n.c)(Ze(e),Ue)}})),Object(y.a)((function(t){return M(t,Ze(e))}))),I=Object(a.a)(C,h).pipe(Object(k.a)((function(e,t){return tt(e,t)})),Object(E.a)((function(t){return Object(n.c)(Ze(e),Ie).fetchPage(t)})),Object(d.a)({url:{}}),Object(v.a)()),N=Object(n.d)(Ze(e),xe,h.pipe(Object(O.a)((function(t){Object(n.c)(Ze(e),Me).onStart(t),Object(n.c)(Ze(e),Ce).updateHistoryState(t),Object(n.d)(Ze(e),He,t.url)})),Object(A.a)(I),Object(E.a)((function(t){var r;return(r=Object(n.c)(Ze(e),Ie)).getResponse.apply(r,[I].concat(Be(t)))})),Object(v.a)())),U=N.pipe(Object(y.a)((function(e){return!e.error}))),D=N.pipe(Object(y.a)((function(e){return!!e.error}))),x=U.pipe(Object(b.a)((function(t){return Object(n.c)(Ze(e),qe).responseToContent(t)})),Object(O.a)((function(t){return Object(n.c)(Ze(e),Me).emitReady(t)})),g(f),Object(O.a)((function(t){Object(n.c)(Ze(e),qe).updateDOM(t),Object(n.c)(Ze(e),Ce).updateTitle(t),Object(n.c)(Ze(e),Me).emitAfter(t)})),Object(d.a)({cause:S.Init,url:Object(n.c)(Ze(e),He),scripts:[]}),g(f),Object(O.a)((function(t){return Object(n.c)(Ze(e),Le).manageScrollPosition(t)})),Object(O.a)({error:function(t){return Object(n.c)(Ze(e),Me).emitDOMError(t)}}),Object(R.a)((function(e,t){return t})),Object(E.a)((function(t){return e.fadePromise.then((function(){return t}))})),Object(E.a)((function(t){return Object(n.c)(Ze(e),qe).reinsertScriptTags(t)})),Object(O.a)({error:function(t){return Object(n.c)(Ze(e),Me).emitError(t)}}),Object(R.a)((function(e,t){return t})),Object(O.a)((function(t){return Object(n.c)(Ze(e),Me).emitLoad(t)}))),W=D.pipe(Object(O.a)((function(t){return Object(n.c)(Ze(e),Me).emitNetworkError(t)}))),$=h.pipe(Object(E.a)((function(t){return Object(p.a)((function(){return e.animPromise})).pipe(Object(T.a)(N),Object(P.a)(t))})),Object(O.a)((function(t){return Object(n.c)(Ze(e),Me).emitProgress(t)})));x.subscribe(),m.subscribe(),W.subscribe(),$.subscribe(),Object(n.c)(Ze(e),Te).resolve(Ze(e)),e.fireEvent("init")})),e}return t=l,(r=[{key:"createRenderRoot",value:function(){return this}},{key:"assign",value:function(e){Object(n.c)(this,De).next({cause:S.Push,url:new URL(e,this.href),cacheNr:Object(n.d)(this,Ue,+Object(n.c)(this,Ue)+1)})}},{key:"reload",value:function(){Object(n.c)(this,De).next({cause:S.Push,url:new URL(this.href),cacheNr:Object(n.d)(this,Ue,+Object(n.c)(this,Ue)+1),replace:!0})}},{key:"replace",value:function(e){Object(n.c)(this,De).next({cause:S.Push,url:new URL(e,this.href),cacheNr:Object(n.d)(this,Ue,+Object(n.c)(this,Ue)+1),replace:!0})}},{key:"connectedCallback",value:function(){ze(et(l.prototype),"connectedCallback",this).call(this),this.$={linkSelector:new h.a(this.linkSelector),prefetch:new h.a(this.prefetch)},window.addEventListener("beforeunload",Object(n.c)(this,Ce).updateHistoryScrollPosition),this.updateComplete.then(Object(n.c)(this,We))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("beforeunload",Object(n.c)(this,Ce).updateHistoryScrollPosition)}},{key:"initialized",get:function(){return Object(n.c)(this,Te)}},{key:"hash",get:function(){return Object(n.c)(this,He).hash},set:function(e){Object(n.c)(this,Ne).call(this,"hash",e)}},{key:"host",get:function(){return Object(n.c)(this,He).host},set:function(e){Object(n.c)(this,Ne).call(this,"host",e)}},{key:"hostname",get:function(){return Object(n.c)(this,He).hostname},set:function(e){Object(n.c)(this,Ne).call(this,"hostname",e)}},{key:"href",get:function(){return Object(n.c)(this,He).href},set:function(e){Object(n.c)(this,Ne).call(this,"href",e)}},{key:"pathname",get:function(){return Object(n.c)(this,He).pathname},set:function(e){Object(n.c)(this,Ne).call(this,"pathname",e)}},{key:"port",get:function(){return Object(n.c)(this,He).port},set:function(e){Object(n.c)(this,Ne).call(this,"port",e)}},{key:"protocol",get:function(){return Object(n.c)(this,He).protocol},set:function(e){Object(n.c)(this,Ne).call(this,"protocol",e)}},{key:"search",get:function(){return Object(n.c)(this,He).search},set:function(e){Object(n.c)(this,Ne).call(this,"search",e)}},{key:"origin",get:function(){return Object(n.c)(this,He).origin}},{key:"ancestorOrigins",get:function(){return window.location.ancestorOrigins}},{key:"histId",get:function(){return this.id||this.tagName}}])&&Xe(t.prototype,r),o&&Xe(t,o),l}(Object(L.b)(L.a,[Oe]));Te=new WeakMap,Le=new WeakMap,Ce=new WeakMap,Ie=new WeakMap,qe=new WeakMap,Me=new WeakMap,He=new WeakMap,Ne=new WeakMap,Ue=new WeakMap,De=new WeakMap,xe=new WeakMap,We=new WeakMap,Object(n.e)([Object(o.e)({type:String,reflect:!0,attribute:"replace-selector"})],rt.prototype,"replaceSelector",void 0),Object(n.e)([Object(o.e)({type:String,reflect:!0,attribute:"link-selector"})],rt.prototype,"linkSelector",void 0),Object(n.e)([Object(o.e)({type:String,reflect:!0,attribute:"script-selector"})],rt.prototype,"scriptSelector",void 0),Object(n.e)([Object(o.e)({type:Boolean,reflect:!0})],rt.prototype,"prefetch",void 0),Object(n.e)([Object(o.e)({type:Number,reflect:!0})],rt.prototype,"duration",void 0),Object(n.e)([Object(o.e)({type:Boolean,reflect:!0,attribute:"hashchange"})],rt.prototype,"simulateHashChange",void 0),Object(n.e)([Object(o.e)({type:String})],rt.prototype,"baseURL",void 0),Object(n.e)([Object(o.e)()],rt.prototype,"assign",null),Object(n.e)([Object(o.e)()],rt.prototype,"reload",null),Object(n.e)([Object(o.e)()],rt.prototype,"replace",null),rt=Object(n.e)([Object(o.c)("hy-push-state")],rt)},363:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(18),o=r(10),c=r(14);function i(e){return Object(c.b)((function(t,r){var c,a=null,u=!1;a=t.subscribe(new o.a(r,void 0,(function(o){c=Object(n.c)(e(o,i(e)(t))),a?(a.unsubscribe(),a=null,c.subscribe(r)):u=!0}))),u&&(a.unsubscribe(),a=null,c.subscribe(r))}))}},364:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(2),o=r(6),c=r(18),i=r(319),a=r(320),u=r(10),l=r(48);function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Object(l.b)(e),s=Object(i.a)(e);return s.length?new o.a((function(e){var t=s.map((function(){return[]})),o=s.map((function(){return!1}));e.add((function(){t=o=null}));for(var i=function(i){Object(c.c)(s[i]).subscribe(new u.a(e,(function(c){if(t[i].push(c),t.every((function(e){return e.length}))){var a=t.map((function(e){return e.shift()}));e.next(r?r.apply(void 0,Object(n.i)(a)):a),t.some((function(e,t){return!e.length&&o[t]}))&&e.complete()}}),void 0,(function(){o[i]=!0,!t[i].length&&e.complete()})))},a=0;!e.closed&&a<s.length;a++)i(a);return function(){t=o=null}})):a.a}},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(46),o=r(18),c=r(14),i=r(10);function a(e,t){return t?function(r){return r.pipe(a((function(r,c){return Object(o.c)(e(r,c)).pipe(Object(n.a)((function(e,n){return t(r,e,c,n)})))})))}:Object(c.b)((function(t,r){var n=0,c=null,a=!1;t.subscribe(new i.a(r,(function(t){c||(c=new i.a(r,void 0,void 0,(function(){c=null,a&&r.complete()})),Object(o.c)(e(t,n++)).subscribe(c))}),void 0,(function(){a=!0,!c&&r.complete()})))}))}}}]);
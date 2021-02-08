!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=5)}([function(t,e,i){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=this&&this.__read||function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,o,r=i.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)s.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(o)throw o.error}}return s},a=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(s(arguments[e]));return t},l=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],n=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.AssistiveMmlHandler=e.AssistiveMmlMathDocumentMixin=e.AssistiveMmlMathItemMixin=e.LimitedMmlVisitor=void 0;var u=i(2),c=i(3),p=i(4),h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.getAttributes=function(e){return t.prototype.getAttributes.call(this,e).replace(/ ?id=".*?"/,"")},e}(c.SerializedMmlVisitor);function m(t){return function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.assistiveMml=function(t,e){if(void 0===e&&(e=!1),!(this.state()>=u.STATE.ASSISTIVEMML)){if(!this.isEscaped&&(t.options.enableAssistiveMml||e)){var i=t.adaptor,n=t.toMML(this.root).replace(/\n */g,"").replace(/<!--.*?-->/g,""),o=i.firstChild(i.body(i.parse(n,"text/html"))),r=i.node("mjx-assistive-mml",{role:"presentation",unselectable:"on",display:this.display?"block":"inline"},[o]);i.setAttribute(this.typesetRoot,"role","presentation"),i.setAttribute(i.firstChild(this.typesetRoot),"aria-hidden","true"),i.setStyle(this.typesetRoot,"position","relative"),i.append(this.typesetRoot,r)}this.state(u.STATE.ASSISTIVEMML)}},e}(t)}function f(t){var e;return(e=function(t){function e(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var n=t.apply(this,a(e))||this,o=n.constructor,r=o.ProcessBits;return r.has("assistive-mml")||r.allocate("assistive-mml"),n.visitor=new h(n.mmlFactory),n.options.MathItem=m(n.options.MathItem),"addStyles"in n&&n.addStyles(o.assistiveStyles),n}return o(e,t),e.prototype.toMML=function(t){return this.visitor.visitTree(t)},e.prototype.assistiveMml=function(){var t,e;if(!this.processed.isSet("assistive-mml")){try{for(var i=l(this.math),n=i.next();!n.done;n=i.next()){n.value.assistiveMml(this)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}this.processed.set("assistive-mml")}return this},e.prototype.state=function(e,i){return void 0===i&&(i=!1),t.prototype.state.call(this,e,i),e<u.STATE.ASSISTIVEMML&&this.processed.clear("assistive-mml"),this},e}(t)).OPTIONS=r(r({},t.OPTIONS),{enableAssistiveMml:!0,renderActions:p.expandable(r(r({},t.OPTIONS.renderActions),{assistiveMml:[u.STATE.ASSISTIVEMML]}))}),e.assistiveStyles={"mjx-assistive-mml":{position:"absolute !important",top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)",padding:"1px 0px 0px 0px !important",border:"0px !important",display:"block !important",width:"auto !important",overflow:"hidden !important","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},'mjx-assistive-mml[display="block"]':{width:"100% !important"}},e}e.LimitedMmlVisitor=h,u.newState("ASSISTIVEMML",153),e.AssistiveMmlMathItemMixin=m,e.AssistiveMmlMathDocumentMixin=f,e.AssistiveMmlHandler=function(t){return t.documentClass=f(t.documentClass),t}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isObject=MathJax._.components.global.isObject,e.combineConfig=MathJax._.components.global.combineConfig,e.combineDefaults=MathJax._.components.global.combineDefaults,e.combineWithMathJax=MathJax._.components.global.combineWithMathJax,e.MathJax=MathJax._.components.global.MathJax},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.protoItem=MathJax._.core.MathItem.protoItem,e.AbstractMathItem=MathJax._.core.MathItem.AbstractMathItem,e.STATE=MathJax._.core.MathItem.STATE,e.newState=MathJax._.core.MathItem.newState},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DATAMJX=MathJax._.core.MmlTree.SerializedMmlVisitor.DATAMJX,e.toEntity=MathJax._.core.MmlTree.SerializedMmlVisitor.toEntity,e.SerializedMmlVisitor=MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.APPEND=MathJax._.util.Options.APPEND,e.REMOVE=MathJax._.util.Options.REMOVE,e.Expandable=MathJax._.util.Options.Expandable,e.expandable=MathJax._.util.Options.expandable,e.makeArray=MathJax._.util.Options.makeArray,e.keys=MathJax._.util.Options.keys,e.copy=MathJax._.util.Options.copy,e.insert=MathJax._.util.Options.insert,e.defaultOptions=MathJax._.util.Options.defaultOptions,e.userOptions=MathJax._.util.Options.userOptions,e.selectOptions=MathJax._.util.Options.selectOptions,e.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,e.separateOptions=MathJax._.util.Options.separateOptions},function(t,e,i){"use strict";i.r(e);var n=i(1),o=i(0);Object(n.combineWithMathJax)({_:{a11y:{"assistive-mml":o}}}),MathJax.startup&&MathJax.startup.extendHandler((function(t){return Object(o.AssistiveMmlHandler)(t)}))}]);
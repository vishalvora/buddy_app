function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function asyncGeneratorStep(n,e,t,r,o,i,c){try{var a=n[i](c),u=a.value}catch(s){return void t(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function c(n){asyncGeneratorStep(i,r,o,c,a,"next",n)}function a(n){asyncGeneratorStep(i,r,o,c,a,"throw",n)}c(void 0)}))}}function _defineProperty(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(n,e,t){var r="".concat(n*e/t-n,"ms"),o=2*Math.PI*e/t;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,e,t){var r=e/t,o="".concat(n*r-n,"ms"),i=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,e){return{r:6,style:{left:"".concat(9-9*e,"px"),"animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,e,t){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(n*e/t-n,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,e,t){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(n*e/t-n,"ms")}}}}}},KwJk:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return r})),t.d(e,"d",(function(){return a}));var r=function(n,e){return null!==e.closest(n)},o=function(n){return"string"==typeof n&&n.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(n),!0):void 0},i=function(n){var e={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return e[n]=!0})),e},c=/^[a-z][a-z0-9+\-.]*:/,a=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(e,t,r){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==e||"#"===e[0]||c.test(e)){n.next=4;break}if(!(o=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=t&&t.preventDefault(),o.push(e,r)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},NqGI:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o}));var r=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(e,t,r,o,i){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=2;break}return n.abrupt("return",e.attachViewToDom(t,r,i,o));case 2:if("string"==typeof r||r instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:if(c="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r,o&&o.forEach((function(n){return c.classList.add(n)})),i&&Object.assign(c,i),t.appendChild(c),n.t0=c.componentOnReady,!n.t0){n.next=12;break}return n.next=12,c.componentOnReady();case 12:return n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));return function(e,t,r,o,i){return n.apply(this,arguments)}}(),o=function(n,e){if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},Uwmq:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r=function(n){try{if("string"!=typeof n||""===n)return n;var e=document.createDocumentFragment(),t=document.createElement("div");e.appendChild(t),t.innerHTML=n,a.forEach((function(n){for(var t=e.querySelectorAll(n),r=t.length-1;r>=0;r--){var c=t[r];c.parentNode?c.parentNode.removeChild(c):e.removeChild(c);for(var a=i(c),u=0;u<a.length;u++)o(a[u])}}));for(var r=i(e),c=0;c<r.length;c++)o(r[c]);var u=document.createElement("div");u.appendChild(e);var s=u.querySelector("div");return null!==s?s.innerHTML:u.innerHTML}catch(f){return console.error(f),""}},o=function n(e){if(!e.nodeType||1===e.nodeType){for(var t=e.attributes.length-1;t>=0;t--){var r=e.attributes.item(t),o=r.name;if(c.includes(o.toLowerCase())){var a=r.value;null!=a&&a.toLowerCase().includes("javascript:")&&e.removeAttribute(o)}else e.removeAttribute(o)}for(var u=i(e),s=0;s<u.length;s++)n(u[s])}},i=function(n){return null!=n.children?n.children:n.childNodes},c=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},fzvj:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return c})),t.d(e,"d",(function(){return r}));var r=function(){var n=window.TapticEngine;n&&n.selection()},o=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},c=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}},qtYk:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r=function n(){_classCallCheck(this,n)}}}]);
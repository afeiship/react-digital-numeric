!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("classnames"),require("@feizheng/react-digital"),require("react-dom"),require("@feizheng/noop"),require("object-assign")):"function"==typeof define&&define.amd?define(["prop-types","react","classnames","@feizheng/react-digital","react-dom","@feizheng/noop","object-assign"],t):"object"==typeof exports?exports.ReactDigitalNumeric=t(require("prop-types"),require("react"),require("classnames"),require("@feizheng/react-digital"),require("react-dom"),require("@feizheng/noop"),require("object-assign")):e.ReactDigitalNumeric=t(e["prop-types"],e.react,e.classnames,e["@feizheng/react-digital"],e["react-dom"],e["@feizheng/noop"],e["object-assign"])}(window,(function(e,t,r,n,o,i,u){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=u},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),i=(r(4),r(0)),u=r.n(i),a=r(2),c=r.n(a),f=(r(5),r(6),r(3)),p=r.n(f);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v="react-digital-numeric",O=function(e){function t(){return b(this,t),d(this,g(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.flat,n=y(e,["className","flat"]);return o.a.createElement("div",s({"data-component":v,className:c()(v,t)},n),this.items.map((function(e,t){return o.a.createElement(p.a,{flat:r,key:t,value:e})})))}},{key:"items",get:function(){return this.props.value.split("")}}])&&m(r.prototype,n),i&&m(r,i),t}(n.Component);O.displayName=v,O.version="1.0.0",O.propTypes={className:u.a.string,value:u.a.any,onChange:u.a.func,flat:u.a.bool};t.default=O}])}));
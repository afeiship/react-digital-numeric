!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-digital"),require("react-dom")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","react-digital","react-dom"],t):"object"==typeof exports?exports.ReactDigitalNumeric=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-digital"),require("react-dom")):e.ReactDigitalNumeric=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-digital"],e["react-dom"])}(this,function(e,t,r,n,o,i,a){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=n(o);t.default=i.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,s,p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(6),d=n(l),y=r(8),m=(n(y),r(5)),b=n(m),v=r(2),g=n(v),h=r(3),j=(n(h),r(4)),x=(n(j),r(7)),O=n(x),_="",q=(s=c=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=o(e,["className"]),n=this.items;return d.default.createElement("div",p({},r,{className:(0,g.default)("react-digital-numeric",t)}),n.map(function(e,t){return d.default.createElement(O.default,{key:t,value:e})}))}},{key:"items",get:function(){var e=this.props.value;return e.split(_)}}]),t}(l.Component),c.propTypes={className:b.default.string,value:b.default.string},c.defaultProps={},s);t.default=q},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-digital-numeric.js.map
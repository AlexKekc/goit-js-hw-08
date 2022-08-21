!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var r=function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},n=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},o="feedback-form-state",i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,v=d||m||Function("return this")(),g=Object.prototype.toString,b=Math.max,y=Math.min,p=function(){return v.Date.now()};function S(e,t,r){var n,o,i,a,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(u);function v(t){var r=n,i=o;return n=o=void 0,l=t,a=e.apply(i,r)}function g(e){return l=e,f=setTimeout(h,t),s?v(e):a}function S(e){var r=e-c;return void 0===c||r>=t||r<0||d&&e-l>=i}function h(){var e=p();if(S(e))return O(e);f=setTimeout(h,function(e){var r=t-(e-c);return d?y(r,i-(e-l)):r}(e))}function O(e){return f=void 0,m&&n?v(e):(n=o=void 0,a)}function w(){var e=p(),r=S(e);if(n=arguments,o=this,c=e,r){if(void 0===f)return g(c);if(d)return f=setTimeout(h,t),v(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=T(t)||0,j(r)&&(s=!!r.leading,i=(d="maxWait"in r)?b(T(r.maxWait)||0,t):i,m="trailing"in r?!!r.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,n=c=o=f=void 0},w.flush=function(){return void 0===f?a:O(p())},w}function j(e){var r=void 0===e?"undefined":t(i)(e);return!!e&&("object"==r||"function"==r)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(j(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=j(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=c.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):f.test(e)?NaN:+e}var h,O={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")};O.form.addEventListener("input",(function(e){var t={email:"",message:""};t.email=e.currentTarget.email.value,t.message=e.currentTarget.message.value,r(o,t)})),O.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(n(o)),e.currentTarget.reset(),localStorage.removeItem(o)})),(h=n(o))&&(O.email.value=h.email,O.message.value=h.message)}();
//# sourceMappingURL=03-feedback.6ae7b237.js.map
!function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n(r.key),r)}}function o(e,t,o){return(t=n(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(t){var o=function(t,o){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(o)?o:String(o)}new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"$bodyElement",document.querySelector("body")),o(this,"bodyOverlayClassName","overlay"),o(this,"hideClassName","hide"),o(this,"showModalClassName","show"),o(this,"localStorageKey","modal"),this.modal=document.querySelector("#".concat(t)),this.closeButton=this.modal.querySelector("button")}var n,r;return n=e,(r=[{key:"setLocalStorage",value:function(){localStorage.setItem(this.localStorageKey,"accepted")}},{key:"checkLocalStorage",value:function(){return null===localStorage.getItem(this.localStorageKey)}},{key:"handleCloseButton",value:function(){this.closeButton.addEventListener("click",(function(){localStorage.setItem(this.localStorageKey,"accepted"),this.checkLocalStorage()?(this.handleCloseButton(),this.$bodyElement.classList.add(this.bodyOverlayClassName)):this.$bodyElement.classList.remove(this.bodyOverlayClassName)}))}},{key:"init",value:function(){this.checkLocalStorage(),this.handleCloseButton()}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}())("modal-welcome").init()}();
//# sourceMappingURL=app.js.map
var bobRpa=function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/Users/martindonadieu/Documents/Projects.nosync/Cashstory/bob-rpa/public",t(t.s=6)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=(s=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([i]).join("\n")}var s,c,a;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);o&&i[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),n.push(a))}},n}},function(e,n,t){"use strict";t.d(n,"a",(function(){return v})),t.d(n,"b",(function(){return b}));var o=()=>{const e=[];let n=!1;return{destroy(t){n=!0,e.forEach(e=>{e(t)})},onDestroy(t){n?t():e.push(t)}}};const i={"http:":"80","https:":"443"},r=/^(https?:)?\/\/([^/:]+)?(:(\d+))?/,s=["file:","data:"];var c,a,l,u,d,h=e=>(...n)=>{e&&console.log("[Penpal]",...n)};!function(e){e.Call="call",e.Reply="reply",e.Syn="syn",e.SynAck="synAck",e.Ack="ack"}(c||(c={})),function(e){e.Fulfilled="fulfilled",e.Rejected="rejected"}(a||(a={})),function(e){e.ConnectionDestroyed="ConnectionDestroyed",e.ConnectionTimeout="ConnectionTimeout",e.NotInIframe="NotInIframe",e.NoIframeSrc="NoIframeSrc"}(l||(l={})),function(e){e.DataCloneError="DataCloneError"}(u||(u={})),function(e){e.Message="message"}(d||(d={}));const f=({name:e,message:n,stack:t})=>({name:e,message:n,stack:t});var p=(e,n,t)=>{const{localName:o,local:i,remote:r,originForSending:s,originForReceiving:l}=e;let h=!1;const p=e=>{if(e.source!==r||e.data.penpal!==c.Call)return;if(e.origin!==l)return void t(`${o} received message from origin ${e.origin} which did not match expected origin ${l}`);const i=e.data,{methodName:d,args:p,id:m}=i;t(`${o}: Received ${d}() call`);const g=e=>n=>{if(t(`${o}: Sending ${d}() reply`),h)return void t(`${o}: Unable to send ${d}() reply due to destroyed connection`);const i={penpal:c.Reply,id:m,resolution:e,returnValue:n};e===a.Rejected&&n instanceof Error&&(i.returnValue=f(n),i.returnValueIsError=!0);try{r.postMessage(i,s)}catch(e){if(e.name===u.DataCloneError){const n={penpal:c.Reply,id:m,resolution:a.Rejected,returnValue:f(e),returnValueIsError:!0};r.postMessage(n,s)}throw e}};new Promise(e=>e(n[d].apply(n,p))).then(g(a.Fulfilled),g(a.Rejected))};return i.addEventListener(d.Message,p),()=>{h=!0,i.removeEventListener(d.Message,p)}};let m=0;var g=(e,n,t,o,i)=>{const{localName:r,local:s,remote:u,originForSending:h,originForReceiving:f}=n;let p=!1;i(r+": Connecting call sender");const g=e=>(...n)=>{let t;i(`${r}: Sending ${e}() call`);try{u.closed&&(t=!0)}catch(e){t=!0}if(t&&o(),p){const n=new Error(`Unable to send ${e}() call due to destroyed connection`);throw n.code=l.ConnectionDestroyed,n}return new Promise((t,o)=>{const l=++m,p=n=>{if(n.source!==u||n.data.penpal!==c.Reply||n.data.id!==l)return;if(n.origin!==f)return void i(`${r} received message from origin ${n.origin} which did not match expected origin ${f}`);const h=n.data;i(`${r}: Received ${e}() reply`),s.removeEventListener(d.Message,p);let m=h.returnValue;h.returnValueIsError&&(m=(e=>{const n=new Error;return Object.keys(e).forEach(t=>n[t]=e[t]),n})(m)),(h.resolution===a.Fulfilled?t:o)(m)};s.addEventListener(d.Message,p);const g={penpal:c.Call,id:l,methodName:e,args:n};u.postMessage(g,h)})};return t.reduce((e,n)=>(e[n]=g(n),e),e),()=>{p=!0}};var y=(e,n)=>{let t;return void 0!==e&&(t=window.setTimeout(()=>{const t=new Error(`Connection timed out after ${e}ms`);t.code=l.ConnectionTimeout,n(t)},e)),()=>{clearTimeout(t)}},v=e=>{let{iframe:n,methods:t={},childOrigin:a,timeout:u,debug:f=!1}=e;const m=h(f),v=o(),{onDestroy:b,destroy:w}=v;a||((e=>{if(!e.src&&!e.srcdoc){const e=new Error("Iframe must have src or srcdoc property defined.");throw e.code=l.NoIframeSrc,e}})(n),a=(e=>{if(e&&s.find(n=>e.startsWith(n)))return"null";const n=document.location,t=r.exec(e);let o,c,a;t?(o=t[1]?t[1]:n.protocol,c=t[2],a=t[4]):(o=n.protocol,c=n.hostname,a=n.port);return`${o}//${c}${a&&a!==i[o]?":"+a:""}`})(n.src));const C="null"===a?"*":a,E=((e,n,t,o)=>i=>{if(i.origin!==t)return void e(`Parent: Handshake - Received SYN message from origin ${i.origin} which did not match expected origin ${t}`);e("Parent: Handshake - Received SYN, responding with SYN-ACK");const r={penpal:c.SynAck,methodNames:Object.keys(n)};i.source.postMessage(r,o)})(m,t,a,C),S=((e,n,t,o,i)=>{const{destroy:r,onDestroy:s}=o;let c,a;const l={};return o=>{if(o.origin!==n)return void i(`Parent: Handshake - Received ACK message from origin ${o.origin} which did not match expected origin ${n}`);i("Parent: Handshake - Received ACK");const u={localName:"Parent",local:window,remote:o.source,originForSending:t,originForReceiving:n};c&&c(),c=p(u,e,i),s(c),a&&a.forEach(e=>{delete l[e]}),a=o.data.methodNames;const d=g(l,u,a,r,i);return s(d),l}})(t,a,C,v,m);return{promise:new Promise((e,t)=>{const o=y(u,w),i=t=>{if(t.source===n.contentWindow&&t.data)if(t.data.penpal!==c.Syn)if(t.data.penpal!==c.Ack);else{const n=S(t);n&&(o(),e(n))}else E(t)};window.addEventListener(d.Message,i),m("Parent: Awaiting handshake"),((e,n)=>{const{destroy:t,onDestroy:o}=n,i=setInterval(()=>{document.contains(e)||(clearInterval(i),t())},6e4);o(()=>{clearInterval(i)})})(n,v),b(e=>{window.removeEventListener(d.Message,i),e||((e=new Error("Connection destroyed")).code=l.ConnectionDestroyed),t(e)})}),destroy(){w()}}};var b=(e={})=>{const{parentOrigin:n="*",methods:t={},timeout:i,debug:r=!1}=e,s=h(r),a=o(),{destroy:u,onDestroy:f}=a;(()=>{if(window===window.top){const e=new Error("connectToParent() must be called within an iframe");throw e.code=l.NotInIframe,e}})();const m=((e,n,t,o)=>{const{destroy:i,onDestroy:r}=t;return t=>{if(!(e instanceof RegExp?e.test(t.origin):"*"===e||e===t.origin))return void o(`Child: Handshake - Received SYN-ACK from origin ${t.origin} which did not match expected origin ${e}`);o("Child: Handshake - Received SYN-ACK, responding with ACK");const s="null"===t.origin?"*":t.origin,a={penpal:c.Ack,methodNames:Object.keys(n)};window.parent.postMessage(a,s);const l={localName:"Child",local:window,remote:window.parent,originForSending:s,originForReceiving:t.origin},u=p(l,n,o);r(u);const d={},h=g(d,l,t.data.methodNames,i,o);return r(h),d}})(n,t,a,s);return{promise:new Promise((e,t)=>{const o=y(i,u),r=n=>{if((()=>{try{clearTimeout()}catch(e){return!1}return!0})()&&n.source===parent&&n.data&&n.data.penpal===c.SynAck){const t=m(n);t&&(window.removeEventListener(d.Message,r),o(),e(t))}};window.addEventListener(d.Message,r),(()=>{s("Child: Handshake - Sending SYN");const e={penpal:c.Syn},t=n instanceof RegExp?"*":n;window.parent.postMessage(e,t)})(),f(e=>{window.removeEventListener(d.Message,r),e||((e=new Error("Connection destroyed")).code=l.ConnectionDestroyed),t(e)})}),destroy(){u()}}}},function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var o=t(1);function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=t(3),a=t(4),l=new Promise((function(e){return document.addEventListener("DOMContentLoaded",e)})),u=function(){function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i(this,e),s(this,"version","1.0.0"),s(this,"speedClick",100),s(this,"speedLogin",1500),s(this,"iFrameDetected",!1),s(this,"loginFormClass","login-form"),s(this,"csLoader",null),s(this,"cssElem",null),s(this,"htmlElem",null),s(this,"bodyList",null),s(this,"bodyObserver",null),s(this,"parent",null),s(this,"loginRetry",null),s(this,"oldHref",null),s(this,"cssPlus",""),s(this,"htmlPlus",""),s(this,"htmlInject",[]),s(this,"cssInject",[]),s(this,"displayElems",[]),s(this,"cssBase",a),s(this,"htmlBase",c),s(this,"connexion",null),s(this,"watchFunctions",[]),s(this,"mutationConfig",{childList:!0,subtree:!0}),this.cssPlus=t,this.htmlPlus=o,l.then((function(){return n.initAll()}))}var n,t,u;return n=e,(t=[{key:"initAll",value:function(){var e=this;console.log("==> bob-rpa init"),this.speedClick=window.rpaSpeed?window.rpaSpeed:this.speedClick,this.speedLogin=window.rpaSpeed?10*window.rpaSpeed:this.speedLogin,this.iFrameDetected=!(window===window.parent),this.cssElem=document.createElement("style"),this.htmlElem=document.createElement("div"),this.csLoader=document.getElementById("cs_loader_wrap"),this.watchFunctions.push((function(){return e.addAnalytics()})),this.watchFunctions.push((function(){return e.setCSCSS()})),this.watchFunctions.push((function(){return e.setCSHTML()})),this.cssElem&&document.head.appendChild(this.cssElem),this.htmlElem&&document.body.appendChild(this.htmlElem),this.bodyList=document.querySelector("body"),this.bodyList&&(this.bodyObserver=new MutationObserver((function(){e.watchFunctions.forEach((function(e){e()}))})),this.bodyObserver.observe(this.bodyList,this.mutationConfig)),this.iFrameDetected?this.initPenpal():this.switchCSLoader("off")}},{key:"initPenpal",value:function(){var e=this;this.oldHref=document.location.href,console.log("==> bob-rpa iframe detected");var n=this;this.connexion=Object(o.b)({debug:!0,timeout:18e4,methods:{hideElements:function(e){e.forEach((function(e){var t=n.displayElems.findIndex((function(n){return n.name===e}));t>-1?n.displayElems[t]={name:e,display:"none"}:n.displayElems.push({name:e,display:"none"})})),n.setElementsDisplay()},showElements:function(e){e.forEach((function(e){var t=n.displayElems.findIndex((function(n){return n.name===e}));t>-1?n.displayElems[t]={name:e,display:""}:n.displayElems.push({name:e,display:""})})),n.setElementsDisplay()},switchCSLoader:function(e){n.switchCSLoader(e)},injectCSHTML:function(e){n.htmlInject.push(e),n.setCSHTML()},removeCSHTML:function(e){var t=n.htmlInject.findIndex((function(n){return n===e}));t>-1&&(n.cssInject.splice(t,1),n.setCSHTML())},injectCSCSS:function(e){n.cssInject.push(e),n.setCSCSS()},removeCSCSS:function(e){var t=n.cssInject.findIndex((function(n){return n===e}));t>-1&&(n.cssInject.splice(t,1),n.setCSCSS())}}}),this.connexion.promise.then((function(n){e.parent=n,n&&(console.log("==> bob-rpa connected !"),e.watchFunctions.push((function(){return e.applyZoom()})),e.initAutoLogin())})).catch((function(){console.log("==> bob-rpa iframe timeout"),e.switchCSLoader("off")}))}},{key:"switchCSLoader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"off",n=document.getElementById("cs_loader_wrap");n&&"off"==e&&"block"===n.style.display?n.style.display="none":n&&"on"==e&&"none"===n.style.display&&(n.style.display="block")}},{key:"setCSCSS",value:function(){if(this.cssElem){var e="".concat(this.cssBase,"\n\n").concat(this.cssPlus,"\n\n").concat(this.cssInject.join("\n"),"\n\n/* Cashstory ").concat(this.version," */");e!==this.cssElem.innerHTML&&(this.cssElem.innerHTML=e)}}},{key:"setCSHTML",value:function(){if(this.htmlElem){var e="".concat(this.htmlBase,"\n\n").concat(this.htmlPlus,"\n\n").concat(this.htmlInject.join("\n"),"\n\n/* Cashstory ").concat(this.version," */");e!==this.htmlElem.innerHTML&&(this.htmlElem.innerHTML=e)}}},{key:"checkLogin",value:function(){var e=this;!this.loginRetry&&this.isLoginWrapperPresent()?(this.switchCSLoader("on"),this.needLogin(),this.loginRetry=setTimeout((function(){return e.checkLogin()}),this.speedLogin)):this.loginRetry&&(console.log("==> bob-rpa mutation but not login wraper present",document.location.href),clearTimeout(this.loginRetry),this.loginRetry=null,this.switchCSLoader("off"))}},{key:"addAnalytics",value:function(){this.parent&&this.oldHref!=document.location.href&&(this.oldHref=document.location.href,console.log("==> bob-rpa url change !!"),this.parent.urlChangeEvent(this.oldHref))}},{key:"applyZoom",value:function(){this.parent&&this.parent.getZoomPercentage().then((function(e){var n="".concat(e,"%");console.log("newZoom",n),console.log("oldZoom",document.body.style.zoom),"zoom"in document.body.style&&n!==document.body.style.zoom&&(document.body.style.zoom=n)}))}},{key:"setElementsDisplay",value:function(){this.displayElems.forEach((function(e){var n=document.getElementsByClassName(e.name)[0];n&&(n.style.display=e.display)}))}},{key:"getFormElems",value:function(e){var n=document.getElementById(this.loginFormClass);return n&&n.getElementsByTagName(e)?Array.prototype.slice.call(n.getElementsByTagName(e)):[]}},{key:"getFormInputElem",value:function(e){var n=null;return this.getFormElems("input").forEach((function(t){t.type===e&&(n=t)})),n}},{key:"findButton",value:function(e){for(var n=document.getElementsByTagName("button"),t=null,o=0;o<n.length;o++)if(n[o].textContent==e){t=n[o];break}return t}},{key:"setNativeValue",value:function(e,n){var t,o,i=null===(t=Object.getOwnPropertyDescriptor(e,"value"))||void 0===t?void 0:t.set,r=Object.getPrototypeOf(e),s=null===(o=Object.getOwnPropertyDescriptor(r,"value"))||void 0===o?void 0:o.set,c=new Event("input",{bubbles:!0});i&&s&&i!==s?s.call(e,n):i?i.call(e,n):e.value=n,e.dispatchEvent(c)}},{key:"hiddePass",value:function(e){return Object.assign(e,{pwd:"****"})}},{key:"deleteCookie",value:function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}},{key:"cleanLogin",value:function(){var e=this;this.parent&&this.parent.getName().then((function(n){console.log("==> bob-rpa current name",n);var t=localStorage.getItem("cs_child_name");t&&n===t||e.logoutAction(),localStorage.setItem("cs_child_name",n)}))}},{key:"initAutoLogin",value:function(){var e=this;this.parent&&this.parent.needLogin().then((function(n){n?(console.log("==> bob-rpa need_login confirmed"),e.cleanLogin(),e.watchFunctions.push((function(){return e.checkLogin()})),e.checkLogin()):e.switchCSLoader("off")}))}},{key:"needLogin",value:function(){var e=this;this.parent&&this.isLoginWrapperPresent()&&this.parent.needLogin().then((function(n){if(!n)return console.log("==> bob-rpa no login from parent"),void e.switchCSLoader("off");console.log("==> bob-rpa need_login",e.hiddePass(n)),e.loginAction(n)}))}},{key:"isLoginWrapperPresent",value:function(){return console.error("==> bob-rpa no loginAction configuration"),!1}},{key:"logoutAction",value:function(){console.error("==> bob-rpa no logoutAction configuration")}},{key:"loginAction",value:function(e){console.error("==> bob-rpa no loginAction configuration"),e&&console.log("data",e)}}])&&r(n.prototype,t),u&&r(n,u),e}()},function(e,n){e.exports='<div id=cs_loader_wrap> <div id=cs_logo_wrap> <svg id=cs_logo_loading xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink id=svg version=1.1 width=400 height=400 viewBox="0, 0, 400,400"> <g id=svgg> <path id=path0 d="M229.809 140.032 C 228.312 142.614,219.827 157.206,210.953 172.458 C 202.079 187.710,194.656 200.547,194.457 200.984 C 194.127 201.707,230.479 266.171,232.157 267.840 C 232.930 268.608,308.409 268.726,309.116 267.961 C 309.409 267.643,316.740 255.166,325.406 240.234 C 334.072 225.303,342.603 210.607,344.362 207.578 L 347.562 202.070 342.214 192.734 C 339.272 187.600,330.830 172.852,323.454 159.961 C 316.077 147.070,309.798 136.260,309.499 135.938 C 309.024 135.424,304.202 135.351,270.744 135.344 L 232.531 135.336 229.809 140.032 M309.106 173.145 C 315.047 183.511,319.956 192.138,320.013 192.316 C 320.231 192.994,276.882 193.447,276.214 192.773 C 275.698 192.253,254.688 155.000,254.688 154.605 C 254.688 154.435,264.501 154.297,276.495 154.297 L 298.303 154.297 309.106 173.145 M242.541 171.975 C 244.992 176.324,249.715 184.690,253.037 190.565 C 256.359 196.441,259.155 201.544,259.250 201.907 C 259.347 202.280,257.154 206.451,254.187 211.536 C 242.603 231.391,238.691 238.166,238.450 238.794 C 237.968 240.052,237.520 239.357,227.115 221.191 C 221.362 211.147,216.485 202.647,216.276 202.302 C 215.936 201.739,237.205 164.129,237.891 164.082 C 237.998 164.074,240.091 167.626,242.541 171.975 M318.804 213.770 C 318.158 214.897,313.232 223.379,307.857 232.617 L 298.085 249.414 276.289 249.278 C 264.301 249.203,254.448 249.100,254.395 249.050 C 254.342 249.000,255.172 247.480,256.240 245.671 C 257.308 243.863,262.115 235.615,266.923 227.344 L 275.664 212.305 282.851 212.096 C 286.805 211.981,296.776 211.849,305.009 211.803 L 319.979 211.719 318.804 213.770 " stroke=none fill=#3edb7c fill-rule=evenodd /> <path id=path1 d="M129.149 77.832 C 128.842 78.315,117.564 97.783,104.087 121.094 C 90.609 144.404,76.323 169.102,72.339 175.977 C 68.355 182.852,63.365 191.479,61.250 195.149 L 57.405 201.822 76.871 235.579 C 87.577 254.145,103.797 282.298,112.915 298.141 L 129.492 326.945 201.747 326.851 L 274.001 326.758 290.929 297.907 C 300.240 282.038,307.801 268.999,307.732 268.930 C 307.663 268.861,302.986 268.748,297.339 268.679 L 287.071 268.555 275.268 288.672 L 263.465 308.789 226.752 308.911 C 206.560 308.979,178.755 308.914,164.963 308.767 L 139.888 308.500 109.171 255.198 C 92.277 225.881,78.542 201.688,78.650 201.436 C 78.758 201.183,92.640 177.158,109.500 148.047 L 140.154 95.117 201.815 95.117 L 263.477 95.117 264.585 96.875 C 265.195 97.842,270.469 106.807,276.304 116.797 L 286.914 134.961 297.363 135.065 C 303.110 135.122,307.813 135.066,307.812 134.941 C 307.812 134.815,300.221 121.717,290.942 105.833 L 274.072 76.953 201.889 76.953 L 129.706 76.953 129.149 77.832 " stroke=none fill=#3c3c3c fill-rule=evenodd /> </g> </svg> <div id=cs_spinner_loading></div> </div> </div>'},function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o)()(!1);i.push([e.i,"#_1TGXtk7JIzlsvFOBXZk3-e {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    position: absolute;\n    background-color: white;\n    z-index: 4210;\n}\n\n#_3bUtKZR2In9vGXHuwEoYis {\n    display: flex;\n    width: 150px;\n    height: 150px;\n    background: white;\n    border-radius: 50%;\n    margin: 0 auto;\n}\n\n#_2SjM69PtHusQN8WukqmP1b {\n    display: flex;\n    height: 120px;\n    margin: auto;\n    opacity: 0.7;\n}\n\n#_1ImhqFGqQClVDQMpWyY141 {\n    width: 150px;\n    height: 150px;\n    position: absolute;\n    border-top: 3px solid #3edb7c;\n    border-right: 3px solid rgba(0, 0, 0, 0);\n    border-left: 3px solid rgba(0, 0, 0, 0);\n    border-radius: 50%;\n    animation: _2mQUKB2SkvBlfheOUbPi3 1s ease-in-out infinite;\n}\n\n@keyframes _2mQUKB2SkvBlfheOUbPi3 {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    100% {\n        transform: rotate(360deg);\n    }\n}",""]),i.locals={cs_loader_wrap:"_1TGXtk7JIzlsvFOBXZk3-e",cs_logo_wrap:"_3bUtKZR2In9vGXHuwEoYis",cs_logo_loading:"_2SjM69PtHusQN8WukqmP1b",cs_spinner_loading:"_1ImhqFGqQClVDQMpWyY141","spin-bot":"_2mQUKB2SkvBlfheOUbPi3"},n.default=i},,function(e,n,t){"use strict";t.r(n),t.d(n,"jupyterRpa",(function(){return h}));var o=t(2);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,n){return(c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function a(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=u(e);if(n){var i=u(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return l(this,t)}}function l(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=t(7),h=new(function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&c(e,n)}(l,e);var n,t,o,i=a(l);function l(){return r(this,l),i.apply(this,arguments)}return n=l,(t=[{key:"isLoginWrapperPresent",value:function(){return!!document.getElementById("login-main")}},{key:"logoutAction",value:function(){localStorage.setItem("jupyterhub-hub-login",""),localStorage.setItem("jupyterhub-session-id",""),localStorage.setItem("jupyterhub-user-bobcashstory",""),window.location.href="/logout"}},{key:"loginAction",value:function(e){var n=document.getElementById("username_input"),t=document.getElementById("password_input"),o=document.getElementById("login_submit");o&&n&&t?(this.setNativeValue(n,e.login),this.setNativeValue(t,e.pwd),console.log("==> bob-rpa login filled"),setTimeout((function(){try{o.click(),console.log("==> bob-rpa login submit")}catch(e){console.error("==> bob-rpa login fail submit",o)}}),this.speedClick)):console.error("==> bob-rpa fail to get, buttonConnect, loginInput or pwdInput",o,n,t)}}])&&s(n.prototype,t),o&&s(n,o),l}(o.a))(d)},function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o)()(!1);i.push([e.i,"",""]),n.default=i}]);
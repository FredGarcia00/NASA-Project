!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=34)}([function(e,n,t){"use strict";var r=t(4),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,n){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var t=0,r=e.length;t<r;t++)n.call(null,e[t],t,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var n={};function t(t,r){"object"==typeof n[r]&&"object"==typeof t?n[r]=e(n[r],t):n[r]=t}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],t);return n},deepMerge:function e(){var n={};function t(t,r){"object"==typeof n[r]&&"object"==typeof t?n[r]=e(n[r],t):n[r]="object"==typeof t?e({},t):t}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],t);return n},extend:function(e,n,t){return u(n,(function(n,o){e[o]=t&&"function"==typeof n?r(n,t):n})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,n,t){e.exports=t(12)},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],c=n.base?i[0]+n.base:i[0],u=t[c]||0,f="".concat(c," ").concat(u);t[c]=u+1;var l=s(f),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(d)):a.push({identifier:f,updater:g(d,n),references:1}),r.push(f)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var f,l=(f=[],function(e,n){return f[e]=n,f.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(e,n){var t,r,o;if(n.singleton){var i=m++;t=h||(h=u(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=u(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=s(t[r]);a[o].references--}for(var i=c(e,n),u=0;u<t.length;u++){var f=s(t[u]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}t=i}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return function(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];return e.apply(n,t)}}},function(e,n,t){"use strict";var r=t(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,n,t){if(!n)return e;var i;if(t)i=t(n);else if(r.isURLSearchParams(n))i=n.toString();else{var a=[];r.forEach(n,(function(e,n){null!=e&&(r.isArray(e)?n+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(n)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,n,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,n,t){"use strict";(function(n){var r=t(0),o=t(18),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,n){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(s=t(8)),s),transformRequest:[function(e,n){return o(n,"Accept"),o(n,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,t(17))},function(e,n,t){"use strict";var r=t(0),o=t(19),i=t(5),a=t(21),s=t(24),c=t(25),u=t(9);e.exports=function(e){return new Promise((function(n,f){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+m)}var g=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:t,config:e,request:p};o(n,f,r),p=null}},p.onabort=function(){p&&(f(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){f(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var n="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(n=e.timeoutErrorMessage),f(u(n,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=t(26),v=(e.withCredentials||c(g))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;v&&(d[e.xsrfHeaderName]=v)}if("setRequestHeader"in p&&r.forEach(d,(function(e,n){void 0===l&&"content-type"===n.toLowerCase()?delete d[n]:p.setRequestHeader(n,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(n){if("json"!==e.responseType)throw n}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),f(e),p=null)})),void 0===l&&(l=null),p.send(l)}))}},function(e,n,t){"use strict";var r=t(20);e.exports=function(e,n,t,o,i){var a=new Error(e);return r(a,n,t,o,i)}},function(e,n,t){"use strict";var r=t(0);e.exports=function(e,n){n=n||{};var t={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){void 0!==n[e]&&(t[e]=n[e])})),r.forEach(i,(function(o){r.isObject(n[o])?t[o]=r.deepMerge(e[o],n[o]):void 0!==n[o]?t[o]=n[o]:r.isObject(e[o])?t[o]=r.deepMerge(e[o]):void 0!==e[o]&&(t[o]=e[o])})),r.forEach(a,(function(r){void 0!==n[r]?t[r]=n[r]:void 0!==e[r]&&(t[r]=e[r])}));var s=o.concat(i).concat(a),c=Object.keys(n).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(c,(function(r){void 0!==n[r]?t[r]=n[r]:void 0!==e[r]&&(t[r]=e[r])})),t}},function(e,n,t){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,n,t){"use strict";var r=t(0),o=t(4),i=t(13),a=t(10);function s(e){var n=new i(e),t=o(i.prototype.request,n);return r.extend(t,i.prototype,n),r.extend(t,n),t}var c=s(t(7));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=t(11),c.CancelToken=t(27),c.isCancel=t(6),c.all=function(e){return Promise.all(e)},c.spread=t(28),e.exports=c,e.exports.default=c},function(e,n,t){"use strict";var r=t(0),o=t(5),i=t(14),a=t(15),s=t(10);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=[a,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){n.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){n.push(e.fulfilled,e.rejected)}));n.length;)t=t.then(n.shift(),n.shift());return t},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(n,t){return this.request(r.merge(t||{},{method:e,url:n}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(n,t,o){return this.request(r.merge(o||{},{method:e,url:n,data:t}))}})),e.exports=c},function(e,n,t){"use strict";var r=t(0);function o(){this.handlers=[]}o.prototype.use=function(e,n){return this.handlers.push({fulfilled:e,rejected:n}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(n){null!==n&&e(n)}))},e.exports=o},function(e,n,t){"use strict";var r=t(0),o=t(16),i=t(6),a=t(7);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(n){delete e.headers[n]})),(e.adapter||a.adapter)(e).then((function(n){return s(e),n.data=o(n.data,n.headers,e.transformResponse),n}),(function(n){return i(n)||(s(e),n&&n.response&&(n.response.data=o(n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)}))}},function(e,n,t){"use strict";var r=t(0);e.exports=function(e,n,t){return r.forEach(t,(function(t){e=t(e,n)})),e}},function(e,n){var t,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&p())}function p(){if(!f){var e=s(d);f=!0;for(var n=u.length;n;){for(c=u,u=[];++l<n;)c&&c[l].run();l=-1,n=u.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function m(){}o.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new h(e,n)),1!==u.length||f||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,n,t){"use strict";var r=t(0);e.exports=function(e,n){r.forEach(e,(function(t,r){r!==n&&r.toUpperCase()===n.toUpperCase()&&(e[n]=t,delete e[r])}))}},function(e,n,t){"use strict";var r=t(9);e.exports=function(e,n,t){var o=t.config.validateStatus;!o||o(t.status)?e(t):n(r("Request failed with status code "+t.status,t.config,null,t.request,t))}},function(e,n,t){"use strict";e.exports=function(e,n,t,r,o){return e.config=n,t&&(e.code=t),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,n,t){"use strict";var r=t(22),o=t(23);e.exports=function(e,n){return e&&!r(n)?o(e,n):n}},function(e,n,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,n,t){"use strict";e.exports=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}},function(e,n,t){"use strict";var r=t(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var n,t,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),n=r.trim(e.substr(0,i)).toLowerCase(),t=r.trim(e.substr(i+1)),n){if(a[n]&&o.indexOf(n)>=0)return;a[n]="set-cookie"===n?(a[n]?a[n]:[]).concat([t]):a[n]?a[n]+", "+t:t}})),a):a}},function(e,n,t){"use strict";var r=t(0);e.exports=r.isStandardBrowserEnv()?function(){var e,n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function o(e){var r=e;return n&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=o(window.location.href),function(n){var t=r.isString(n)?o(n):n;return t.protocol===e.protocol&&t.host===e.host}}():function(){return!0}},function(e,n,t){"use strict";var r=t(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,n,t,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(n)),r.isNumber(t)&&s.push("expires="+new Date(t).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,n,t){"use strict";var r=t(11);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var t=this;e((function(e){t.reason||(t.reason=new r(e),n(t.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(n){e=n})),cancel:e}},e.exports=o},function(e,n,t){"use strict";e.exports=function(e){return function(n){return e.apply(null,n)}}},,,,,,function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r);t(35);o.a.get("https://api.nasa.gov/planetary/apod?api_key=6YmFdsVxaR5ewRLqHtIEIFBPM1jsqFUxjGAJPBPV&hd=false").then((function(e){return console.log(e)}));var i=function(e){"video"==e.data.media_type?(document.getElementById("pod").remove(),document.getElementById("p").innerHTML="\n        <h2>".concat(e.data.title,'</h2>\n            <iframe width="420" height="315"\n                src= "').concat(e.data.url,'">\n             </iframe>\n             <p>').concat(e.data.date,"</p>\n        "),document.getElementById("p2").innerHTML="\n        <h2>About this picture</h2>\n        <p>".concat(e.data.explanation,"</p>\n    "),document.getElementById("credit").innerHTML="\n        <p>&copy ".concat(e.data.copyright,"</p>\n    ")):(document.getElementById("pod").remove(),document.getElementById("p").innerHTML="\n     \n         <h2>".concat(e.data.title,'</h2>\n         <a href = "').concat(e.data.url,'" target = "_blank"> <img src="').concat(e.data.url,'"> </a>\n         <p>Uploaded: ').concat(e.data.date,"</p>\n         <p>Image by ").concat(e.data.copyright,"</p>\n             "),document.getElementById("p2").innerHTML="\n                 <h2>About this picture</h2>\n                 <p>".concat(e.data.explanation,"</p>\n             "),document.getElementById("credit").innerHTML="\n                 <p>&copy Design by Fred Garcia 2020</p>\n             ")};document.getElementById("pod").addEventListener("click",(function(){o()({method:"get",url:"https://api.nasa.gov/planetary/apod?api_key=6YmFdsVxaR5ewRLqHtIEIFBPM1jsqFUxjGAJPBPV&hd=false"}).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}))},function(e,n,t){var r=t(2),o=t(36);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,n,t){(n=t(3)(!1)).push([e.i,"\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n/* root{\r\n    --shadow:0 1px 5px rgba(104,104,104,0.8);\r\n} */\r\n\r\n\r\nbody{\r\n    background:linear-gradient(black,grey,black)repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: repeat;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    line-height: 1.6;\r\n    height: 100vh;\r\n}\r\n\r\n#p {\r\n    display: block;\r\n\r\n}\r\n\r\n/* The logo and title here */\r\nheader{\r\n    /* background: url(/img/sky-space-dark-galaxy-2162.jpg); */\r\n    background: linear-gradient(black,blue);\r\n    background-size: cover;\r\n    background-position: center;\r\n    /* opacity: .6; */\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: start;\r\n    align-items: center;\r\n}\r\n\r\nheader a{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    color: #fff; \r\n    \r\n\r\n\r\n}\r\n\r\n/* End of logo and title */\r\n\r\n/* Below is the banner info */\r\n\r\n.headline-info {\r\n    position: relative;\r\n}\r\n\r\n\r\n.headline-info h1{\r\n    color: #fff;\r\n    background:red;\r\n    padding: 5px;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n/* Below is the body styling */\r\n/* .wrapper{\r\n    display: grid;\r\n    \r\n    \r\n }  */\r\n.main-body {\r\n     margin: 15px 50px;\r\n    position: relative;\r\n    display: grid;\r\n    grid-gap: 20px;\r\n    grid-template-columns: 2fr 3fr;\r\n    /* margin-top: 0;\r\n       display: block;\r\n       width: 100%;\r\n       margin-left: auto;\r\n       margin-right: auto; */\r\n}\r\n\r\n\r\n\r\n\r\n.box1 h2{\r\n    color:#fff;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    padding: 10px;\r\n    border: 1px solid #fff;\r\n    background:linear-gradient(black,blue);\r\n    /* border-bottom:1px solid #000; */\r\n}\r\n\r\n\r\n.pod-btn {\r\n    padding: 12px;\r\n    background-color: blue;\r\n    border: 1px solid #fff;\r\n    border-radius: 2rem;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    font-size: 2rem;\r\n    position: relative;\r\n    top: -45px;\r\n    \r\n}\r\n\r\n div a:hover{\r\n    background-color: #ff0000;\r\n}\r\n\r\n.box1 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.box1 img{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto; \r\n    height:auto;\r\n    max-width: 100%;\r\n    background-size: cover;\r\n    background-position: center; \r\n   \r\n    /* border: 1px solid #000; */\r\n  \r\n}\r\n\r\n.box1 p{\r\n    position: relative;\r\n    color:#fff;\r\n    bottom: 0;\r\n    /* left: 13rem; */\r\n}\r\n\r\n.box2 p{\r\n    font-size: large;\r\n     background-color: #fff;\r\n    color: #000;\r\n    /* border: 1px solid #000; */\r\n    padding: 15px;\r\n}\r\n\r\n.box2 h2{\r\n    background:linear-gradient(black,blue);\r\n    text-align: center;\r\n    color: #fff;\r\n    padding: 10px;\r\n    border:1px solid #fff;\r\n    border-bottom:1px solid #000;\r\n}\r\n\r\n.bottom p{\r\n    background-color: #000;\r\n    color: #fff;\r\n    padding:2rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\n@media (max-width: 620px) {\r\n    .pod-btn {\r\n       position: relative;\r\n       top: -2px;\r\n    }\r\n    \r\n\r\n}\r\n@media (max-width:760px) {\r\n\r\n   .main-body {\r\n       margin-top: 0;\r\n       display: block;\r\n       width: 100%;\r\n       margin-left: auto;\r\n       margin-right: auto;\r\n   }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n",""]),e.exports=n}]);
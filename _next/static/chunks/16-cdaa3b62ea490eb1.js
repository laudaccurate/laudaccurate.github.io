(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{9669:function(t,e,n){t.exports=n(1609)},5448:function(t,e,n){"use strict";var r=n(4867),o=n(6026),i=n(4372),s=n(5327),a=n(4097),u=n(4109),c=n(7985),f=n(5061),l=n(5655),h=n(5263);t.exports=function(t){return new Promise((function(e,n){var d,p=t.data,m=t.headers,g=t.responseType;function v(){t.cancelToken&&t.cancelToken.unsubscribe(d),t.signal&&t.signal.removeEventListener("abort",d)}r.isFormData(p)&&delete m["Content-Type"];var y=new XMLHttpRequest;if(t.auth){var w=t.auth.username||"",b=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.Authorization="Basic "+btoa(w+":"+b)}var x=a(t.baseURL,t.url);function _(){if(y){var r="getAllResponseHeaders"in y?u(y.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:r,config:t,request:y};o((function(t){e(t),v()}),(function(t){n(t),v()}),i),y=null}}if(y.open(t.method.toUpperCase(),s(x,t.params,t.paramsSerializer),!0),y.timeout=t.timeout,"onloadend"in y?y.onloadend=_:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(_)},y.onabort=function(){y&&(n(f("Request aborted",t,"ECONNABORTED",y)),y=null)},y.onerror=function(){n(f("Network Error",t,null,y)),y=null},y.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||l.transitional;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(f(e,t,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",y)),y=null},r.isStandardBrowserEnv()){var E=(t.withCredentials||c(x))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;E&&(m[t.xsrfHeaderName]=E)}"setRequestHeader"in y&&r.forEach(m,(function(t,e){"undefined"===typeof p&&"content-type"===e.toLowerCase()?delete m[e]:y.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(y.withCredentials=!!t.withCredentials),g&&"json"!==g&&(y.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&y.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(d=function(t){y&&(n(!t||t&&t.type?new h("canceled"):t),y.abort(),y=null)},t.cancelToken&&t.cancelToken.subscribe(d),t.signal&&(t.signal.aborted?d():t.signal.addEventListener("abort",d))),p||(p=null),y.send(p)}))}},1609:function(t,e,n){"use strict";var r=n(4867),o=n(1849),i=n(321),s=n(7185);var a=function t(e){var n=new i(e),a=o(i.prototype.request,n);return r.extend(a,i.prototype,n),r.extend(a,n),a.create=function(n){return t(s(e,n))},a}(n(5655));a.Axios=i,a.Cancel=n(5263),a.CancelToken=n(4972),a.isCancel=n(6502),a.VERSION=n(7288).version,a.all=function(t){return Promise.all(t)},a.spread=n(8713),a.isAxiosError=n(6268),t.exports=a,t.exports.default=a},5263:function(t){"use strict";function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},4972:function(t,e,n){"use strict";var r=n(5263);function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,r=n._listeners.length;for(e=0;e<r;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,r=new Promise((function(t){n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},o.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},6502:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},321:function(t,e,n){"use strict";var r=n(4867),o=n(5327),i=n(782),s=n(3572),a=n(7185),u=n(4875),c=u.validators;function f(t){this.defaults=t,this.interceptors={request:new i,response:new i}}f.prototype.request=function(t,e){if("string"===typeof t?(e=e||{}).url=t:e=t||{},!e.url)throw new Error("Provided config url is not valid");(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(o=o&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var i,f=[];if(this.interceptors.response.forEach((function(t){f.push(t.fulfilled,t.rejected)})),!o){var l=[s,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(f),i=Promise.resolve(e);l.length;)i=i.then(l.shift(),l.shift());return i}for(var h=e;r.length;){var d=r.shift(),p=r.shift();try{h=d(h)}catch(m){p(m);break}}try{i=s(h)}catch(m){return Promise.reject(m)}for(;f.length;)i=i.then(f.shift(),f.shift());return i},f.prototype.getUri=function(t){if(!t.url)throw new Error("Provided config url is not valid");return t=a(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){f.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){f.prototype[t]=function(e,n,r){return this.request(a(r||{},{method:t,url:e,data:n}))}})),t.exports=f},782:function(t,e,n){"use strict";var r=n(4867);function o(){this.handlers=[]}o.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},4097:function(t,e,n){"use strict";var r=n(1793),o=n(7303);t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},5061:function(t,e,n){"use strict";var r=n(481);t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},3572:function(t,e,n){"use strict";var r=n(4867),o=n(8527),i=n(6502),s=n(5655),a=n(5263);function u(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a("canceled")}t.exports=function(t){return u(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||s.adapter)(t).then((function(e){return u(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},481:function(t){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}},7185:function(t,e,n){"use strict";var r=n(4867);t.exports=function(t,e){e=e||{};var n={};function o(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function i(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:o(void 0,t[n]):o(t[n],e[n])}function s(t){if(!r.isUndefined(e[t]))return o(void 0,e[t])}function a(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:o(void 0,t[n]):o(void 0,e[n])}function u(n){return n in e?o(t[n],e[n]):n in t?o(void 0,t[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=c[t]||i,o=e(t);r.isUndefined(o)&&e!==u||(n[t]=o)})),n}},6026:function(t,e,n){"use strict";var r=n(5061);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},8527:function(t,e,n){"use strict";var r=n(4867),o=n(5655);t.exports=function(t,e,n){var i=this||o;return r.forEach(n,(function(n){t=n.call(i,t,e)})),t}},5655:function(t,e,n){"use strict";var r=n(3454),o=n(4867),i=n(6016),s=n(481),a={"Content-Type":"application/x-www-form-urlencoded"};function u(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:function(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof r&&"[object process]"===Object.prototype.toString.call(r))&&(t=n(5448)),t}(),transformRequest:[function(t,e){return i(e,"Accept"),i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(u(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)||e&&"application/json"===e["Content-Type"]?(u(e,"application/json"),function(t,e,n){if(o.isString(t))try{return(e||JSON.parse)(t),o.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional||c.transitional,n=e&&e.silentJSONParsing,r=e&&e.forcedJSONParsing,i=!n&&"json"===this.responseType;if(i||r&&o.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(i){if("SyntaxError"===a.name)throw s(a,this,"E_JSON_PARSE");throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),o.forEach(["post","put","patch"],(function(t){c.headers[t]=o.merge(a)})),t.exports=c},7288:function(t){t.exports={version:"0.25.0"}},1849:function(t){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},5327:function(t,e,n){"use strict";var r=n(4867);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))})))})),i=s.join("&")}if(i){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},7303:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},4372:function(t,e,n){"use strict";var r=n(4867);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},6268:function(t,e,n){"use strict";var r=n(4867);t.exports=function(t){return r.isObject(t)&&!0===t.isAxiosError}},7985:function(t,e,n){"use strict";var r=n(4867);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},6016:function(t,e,n){"use strict";var r=n(4867);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},4109:function(t,e,n){"use strict";var r=n(4867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}})),s):s}},8713:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},4875:function(t,e,n){"use strict";var r=n(7288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){o[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var i={};o.transitional=function(t,e,n){function o(t,e){return"[Axios v"+r+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,s){if(!1===t)throw new Error(o(r," has been removed"+(e?" in "+e:"")));return e&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}},t.exports={assertOptions:function(t,e,n){if("object"!==typeof t)throw new TypeError("options must be an object");for(var r=Object.keys(t),o=r.length;o-- >0;){var i=r[o],s=e[i];if(s){var a=t[i],u=void 0===a||s(a,i,t);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:o}},4867:function(t,e,n){"use strict";var r=n(1849),o=Object.prototype.toString;function i(t){return Array.isArray(t)}function s(t){return"undefined"===typeof t}function a(t){return"[object ArrayBuffer]"===o.call(t)}function u(t){return null!==t&&"object"===typeof t}function c(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function f(t){return"[object Function]"===o.call(t)}function l(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:i,isArrayBuffer:a,isBuffer:function(t){return null!==t&&!s(t)&&null!==t.constructor&&!s(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"[object FormData]"===o.call(t)},isArrayBufferView:function(t){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&a(t.buffer)},isString:function(t){return"string"===typeof t},isNumber:function(t){return"number"===typeof t},isObject:u,isPlainObject:c,isUndefined:s,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:f,isStream:function(t){return u(t)&&f(t.pipe)},isURLSearchParams:function(t){return"[object URLSearchParams]"===o.call(t)},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:l,merge:function t(){var e={};function n(n,r){c(e[r])&&c(n)?e[r]=t(e[r],n):c(n)?e[r]=t({},n):i(n)?e[r]=n.slice():e[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return e},extend:function(t,e,n){return l(e,(function(e,o){t[o]=n&&"function"===typeof e?r(e,n):e})),t},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},3454:function(t,e,n){"use strict";t.exports=n.g.process||n(7663)},8418:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(u){a=!0,o=u}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=void 0;var i,s=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),u=n(387),c=n(7190);var f={};function l(t,e,n,r){if(t&&a.isLocalURL(e)){t.prefetch(e,n,r).catch((function(t){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:t&&t.locale;f[e+"%"+n+(o?"%"+o:"")]=!0}}var h=function(t){var e,n=!1!==t.prefetch,r=u.useRouter(),i=s.default.useMemo((function(){var e=o(a.resolveHref(r,t.href,!0),2),n=e[0],i=e[1];return{href:n,as:t.as?a.resolveHref(r,t.as):i||n}}),[r,t.href,t.as]),h=i.href,d=i.as,p=t.children,m=t.replace,g=t.shallow,v=t.scroll,y=t.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var w=(e=s.default.Children.only(p))&&"object"===typeof e&&e.ref,b=o(c.useIntersection({rootMargin:"200px"}),2),x=b[0],_=b[1],E=s.default.useCallback((function(t){x(t),w&&("function"===typeof w?w(t):"object"===typeof w&&(w.current=t))}),[w,x]);s.default.useEffect((function(){var t=_&&n&&a.isLocalURL(h),e="undefined"!==typeof y?y:r&&r.locale,o=f[h+"%"+d+(e?"%"+e:"")];t&&!o&&l(r,h,d,{locale:e})}),[d,h,_,y,n,r]);var O={ref:E,onClick:function(t){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,i,s,u){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&a.isLocalURL(n))&&(t.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),e[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:s}))}(t,r,h,d,m,g,v,y)},onMouseEnter:function(t){e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(t),a.isLocalURL(h)&&l(r,h,d,{priority:!0})}};if(t.passHref||"a"===e.type&&!("href"in e.props)){var S="undefined"!==typeof y?y:r&&r.locale,k=r&&r.isLocaleDomain&&a.getDomainLocale(d,S,r&&r.locales,r&&r.domainLocales);O.href=k||a.addBasePath(a.addLocale(d,S,r&&r.defaultLocale))}return s.default.cloneElement(e,O)};e.default=h},7190:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(u){a=!0,o=u}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!a,r=i.useRef(),c=o(i.useState(!1),2),f=c[0],l=c[1],h=i.useCallback((function(t){r.current&&(r.current(),r.current=void 0),n||f||t&&t.tagName&&(r.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=u.get(e);if(n)return n;var r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return u.set(e,n={id:e,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,s=r.elements;return s.set(t,e),i.observe(t),function(){s.delete(t),i.unobserve(t),0===s.size&&(i.disconnect(),u.delete(o))}}(t,(function(t){return t&&l(t)}),{rootMargin:e}))}),[n,e,f]);return i.useEffect((function(){if(!a&&!f){var t=s.requestIdleCallback((function(){return l(!0)}));return function(){return s.cancelIdleCallback(t)}}}),[f]),[h,f]};var i=n(7294),s=n(9311),a="undefined"!==typeof IntersectionObserver;var u=new Map},7663:function(t){!function(){var e={162:function(t){var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var a,u=[],c=!1,f=-1;function l(){c&&a&&(c=!1,a.length?u=a.concat(u):f=-1,u.length&&h())}function h(){if(!c){var t=s(l);c=!0;for(var e=u.length;e;){for(a=u,u=[];++f<e;)a&&a[f].run();f=-1,e=u.length}a=null,c=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function p(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new d(t,e)),1!==u.length||c||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}},s=!0;try{e[t](i,i.exports,r),s=!1}finally{s&&delete n[t]}return i.exports}r.ab="//";var o=r(162);t.exports=o}()},1664:function(t,e,n){t.exports=n(8418)},1163:function(t,e,n){t.exports=n(387)},2811:function(t,e,n){"use strict";n.d(e,{c:function(){return C},m:function(){return k}});var r=n(7294);const o="http://www.w3.org/2000/svg";class i{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function s(t,e,n,r,o){return{type:"path",ops:d(t,e,n,r,o)}}function a(t,e,n){const r=(t||[]).length;if(r>2){const o=[];for(let e=0;e<r-1;e++)o.push(...d(t[e][0],t[e][1],t[e+1][0],t[e+1][1],n));return e&&o.push(...d(t[r-1][0],t[r-1][1],t[0][0],t[0][1],n)),{type:"path",ops:o}}return 2===r?s(t[0][0],t[0][1],t[1][0],t[1][1],n):{type:"path",ops:[]}}function u(t,e,n,r,o){return function(t,e){return a(t,!0,e)}([[t,e],[t+n,e],[t+n,e+r],[t,e+r]],o)}function c(t,e,n,r,o){return function(t,e,n,r){const[o,i]=g(r.increment,t,e,r.rx,r.ry,1,r.increment*l(.1,l(.4,1,n),n),n);let s=m(o,null,n);if(!n.disableMultiStroke){const[o]=g(r.increment,t,e,r.rx,r.ry,1.5,0,n),i=m(o,null,n);s=s.concat(i)}return{estimatedPoints:i,opset:{type:"path",ops:s}}}(t,e,o,function(t,e,n){const r=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),o=Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*r),i=2*Math.PI/o;let s=Math.abs(t/2),a=Math.abs(e/2);const u=1-n.curveFitting;return s+=h(s*u,n),a+=h(a*u,n),{increment:i,rx:s,ry:a}}(n,r,o)).opset}function f(t){return t.randomizer||(t.randomizer=new i(t.seed||0)),t.randomizer.next()}function l(t,e,n,r=1){return n.roughness*r*(f(n)*(e-t)+t)}function h(t,e,n=1){return l(-t,t,e,n)}function d(t,e,n,r,o,i=!1){const s=i?o.disableMultiStrokeFill:o.disableMultiStroke,a=p(t,e,n,r,o,!0,!1);if(s)return a;const u=p(t,e,n,r,o,!0,!0);return a.concat(u)}function p(t,e,n,r,o,i,s){const a=Math.pow(t-n,2)+Math.pow(e-r,2),u=Math.sqrt(a);let c=1;c=u<200?1:u>500?.4:-.0016668*u+1.233334;let l=o.maxRandomnessOffset||0;l*l*100>a&&(l=u/10);const d=l/2,p=.2+.2*f(o);let m=o.bowing*o.maxRandomnessOffset*(r-e)/200,g=o.bowing*o.maxRandomnessOffset*(t-n)/200;m=h(m,o,c),g=h(g,o,c);const v=[],y=()=>h(d,o,c),w=()=>h(l,o,c);return i&&(s?v.push({op:"move",data:[t+y(),e+y()]}):v.push({op:"move",data:[t+h(l,o,c),e+h(l,o,c)]})),s?v.push({op:"bcurveTo",data:[m+t+(n-t)*p+y(),g+e+(r-e)*p+y(),m+t+2*(n-t)*p+y(),g+e+2*(r-e)*p+y(),n+y(),r+y()]}):v.push({op:"bcurveTo",data:[m+t+(n-t)*p+w(),g+e+(r-e)*p+w(),m+t+2*(n-t)*p+w(),g+e+2*(r-e)*p+w(),n+w(),r+w()]}),v}function m(t,e,n){const r=t.length,o=[];if(r>3){const i=[],s=1-n.curveTightness;o.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<r;e++){const n=t[e];i[0]=[n[0],n[1]],i[1]=[n[0]+(s*t[e+1][0]-s*t[e-1][0])/6,n[1]+(s*t[e+1][1]-s*t[e-1][1])/6],i[2]=[t[e+1][0]+(s*t[e][0]-s*t[e+2][0])/6,t[e+1][1]+(s*t[e][1]-s*t[e+2][1])/6],i[3]=[t[e+1][0],t[e+1][1]],o.push({op:"bcurveTo",data:[i[1][0],i[1][1],i[2][0],i[2][1],i[3][0],i[3][1]]})}if(e&&2===e.length){const t=n.maxRandomnessOffset;o.push({op:"lineTo",data:[e[0]+h(t,n),e[1]+h(t,n)]})}}else 3===r?(o.push({op:"move",data:[t[1][0],t[1][1]]}),o.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===r&&o.push(...d(t[0][0],t[0][1],t[1][0],t[1][1],n));return o}function g(t,e,n,r,o,i,s,a){const u=[],c=[],f=h(.5,a)-Math.PI/2;c.push([h(i,a)+e+.9*r*Math.cos(f-t),h(i,a)+n+.9*o*Math.sin(f-t)]);for(let l=f;l<2*Math.PI+f-.01;l+=t){const t=[h(i,a)+e+r*Math.cos(l),h(i,a)+n+o*Math.sin(l)];u.push(t),c.push(t)}return c.push([h(i,a)+e+r*Math.cos(f+2*Math.PI+.5*s),h(i,a)+n+o*Math.sin(f+2*Math.PI+.5*s)]),c.push([h(i,a)+e+.98*r*Math.cos(f+s),h(i,a)+n+.98*o*Math.sin(f+s)]),c.push([h(i,a)+e+.9*r*Math.cos(f+.5*s),h(i,a)+n+.9*o*Math.sin(f+.5*s)]),[c,u]}function v(t,e){return{maxRandomnessOffset:2,roughness:"highlight"===t?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==t,disableMultiStrokeFill:!1,seed:e}}function y(t,e,n,r,i,f){const l=[];let h=n.strokeWidth||2;const d=function(t){const e=t.padding;if(e||0===e){if("number"==typeof e)return[e,e,e,e];if(Array.isArray(e)){const t=e;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}(n),p=void 0===n.animate||!!n.animate,m=n.iterations||2,g=v("single",f);switch(n.type){case"underline":{const t=e.y+e.h+d[2];for(let n=0;n<m;n++)n%2?l.push(s(e.x+e.w,t,e.x,t,g)):l.push(s(e.x,t,e.x+e.w,t,g));break}case"strike-through":{const t=e.y+e.h/2;for(let n=0;n<m;n++)n%2?l.push(s(e.x+e.w,t,e.x,t,g)):l.push(s(e.x,t,e.x+e.w,t,g));break}case"box":{const t=e.x-d[3],n=e.y-d[0],r=e.w+(d[1]+d[3]),o=e.h+(d[0]+d[2]);for(let e=0;e<m;e++)l.push(u(t,n,r,o,g));break}case"bracket":{const t=Array.isArray(n.brackets)?n.brackets:n.brackets?[n.brackets]:["right"],r=e.x-2*d[3],o=e.x+e.w+2*d[1],i=e.y-2*d[0],s=e.y+e.h+2*d[2];for(const n of t){let t;switch(n){case"bottom":t=[[r,e.y+e.h],[r,s],[o,s],[o,e.y+e.h]];break;case"top":t=[[r,e.y],[r,i],[o,i],[o,e.y]];break;case"left":t=[[e.x,i],[r,i],[r,s],[e.x,s]];break;case"right":t=[[e.x+e.w,i],[o,i],[o,s],[e.x+e.w,s]]}t&&l.push(a(t,!1,g))}break}case"crossed-off":{const t=e.x,n=e.y,r=t+e.w,o=n+e.h;for(let e=0;e<m;e++)e%2?l.push(s(r,o,t,n,g)):l.push(s(t,n,r,o,g));for(let e=0;e<m;e++)e%2?l.push(s(t,o,r,n,g)):l.push(s(r,n,t,o,g));break}case"circle":{const t=v("double",f),n=e.w+(d[1]+d[3]),r=e.h+(d[0]+d[2]),o=e.x-d[3]+n/2,i=e.y-d[0]+r/2,s=Math.floor(m/2),a=m-2*s;for(let e=0;e<s;e++)l.push(c(o,i,n,r,t));for(let e=0;e<a;e++)l.push(c(o,i,n,r,g));break}case"highlight":{const t=v("highlight",f);h=.95*e.h;const n=e.y+e.h/2;for(let r=0;r<m;r++)r%2?l.push(s(e.x+e.w,n,e.x,n,t)):l.push(s(e.x,n,e.x+e.w,n,t));break}}if(l.length){const e=function(t){const e=[];for(const n of t){let t="";for(const r of n.ops){const n=r.data;switch(r.op){case"move":t.trim()&&e.push(t.trim()),t=`M${n[0]} ${n[1]} `;break;case"bcurveTo":t+=`C${n[0]} ${n[1]}, ${n[2]} ${n[3]}, ${n[4]} ${n[5]} `;break;case"lineTo":t+=`L${n[0]} ${n[1]} `}}t.trim()&&e.push(t.trim())}return e}(l),s=[],a=[];let u=0;const c=(t,e,n)=>t.setAttribute(e,n);for(const r of e){const e=document.createElementNS(o,"path");if(c(e,"d",r),c(e,"fill","none"),c(e,"stroke",n.color||"currentColor"),c(e,"stroke-width",""+h),p){const t=e.getTotalLength();s.push(t),u+=t}t.appendChild(e),a.push(e)}if(p){let t=0;for(let e=0;e<a.length;e++){const n=a[e],o=s[e],c=u?i*(o/u):0,f=r+t,l=n.style;l.strokeDashoffset=""+o,l.strokeDasharray=""+o,l.animation=`rough-notation-dash ${c}ms ease-out ${f}ms forwards`,t+=c}}}}class w{constructor(t,e){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout((()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()}),400))},this._e=t,this._config=JSON.parse(JSON.stringify(e)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){const t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}();const t=this._svg=document.createElementNS(o,"svg");t.setAttribute("class","rough-annotation");const e=t.style;e.position="absolute",e.top="0",e.left="0",e.overflow="visible",e.pointerEvents="none",e.width="100px",e.height="100px";const n="highlight"===this._config.type;if(this._e.insertAdjacentElement(n?"beforebegin":"afterend",t),this._state="not-showing",n){const t=window.getComputedStyle(this._e).position;(!t||"static"===t)&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver((t=>{for(const e of t)e.contentRect&&this._resizeListener()}))),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let e=0;e<t.length;e++)if(!this.isSameRect(t[e],this._lastSizes[e]))return!0}return!1}isSameRect(t,e){const n=(t,e)=>Math.round(t)===Math.round(e);return n(t.x,e.x)&&n(t.y,e.y)&&n(t.w,e.w)&&n(t.h,e.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then((()=>{this.isShowing()&&this.show(),delete this.pendingRefresh})))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,e){let n=this._config;e&&(n=JSON.parse(JSON.stringify(this._config)),n.animate=!1);const r=this.rects();let o=0;r.forEach((t=>o+=t.w));const i=n.animationDuration||800;let s=0;for(let a=0;a<r.length;a++){const e=i*(r[a].w/o);y(t,r[a],n,s+this._animationDelay,e,this._seed),s+=e}this._lastSizes=r,this._state="showing"}rects(){const t=[];if(this._svg)if(this._config.multiline){const e=this._e.getClientRects();for(let n=0;n<e.length;n++)t.push(this.svgRect(this._svg,e[n]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return t}svgRect(t,e){const n=t.getBoundingClientRect(),r=e;return{x:(r.x||r.left)-(n.x||n.left),y:(r.y||r.top)-(n.y||n.top),w:r.width,h:r.height}}}var b=function(){return(b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function x(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}var _=(0,r.createContext)(null),E=(0,r.createContext)(null),O={annotations:[]};function S(t,e){var n=e.type,r=e.payload;switch(n){case"ADD":var o=x(t.annotations,[r]).reduce((function(t,e){var n=b({},t);return"number"===typeof e.order?n.withOrder=x(n.withOrder,[e]).sort((function(t,e){return t.order-e.order})):n.withoutOrder=x(n.withoutOrder,[e]),n}),{withOrder:[],withoutOrder:[]});return b(b({},t),{annotations:x(o.withOrder,o.withoutOrder)});default:return t}}var k=function(t){var e=t.children,n=t.show,o=(0,r.useReducer)(S,O),i=o[0],s=o[1];return(0,r.useEffect)((function(){var t=function(t){let e=0;for(const r of t){const t=r;t._animationDelay=e,e+=0===t.animationDuration?0:t.animationDuration||800}const n=[...t];return{show(){for(const t of n)t.show()},hide(){for(const t of n)t.hide()}}}(i.annotations.map((function(t){return t.annotation.current})));n?t.show():t.hide()}),[n,i]),r.createElement(_.Provider,{value:i},r.createElement(E.Provider,{value:s},e))},C=function(t){var e=t.animate,n=void 0===e||e,o=t.animationDelay,i=void 0===o?0:o,s=t.animationDuration,a=void 0===s?800:s,u=t.brackets,c=t.children,f=t.color,l=t.customElement,h=void 0===l?"span":l,d=t.getAnnotationObject,p=t.iterations,m=void 0===p?2:p,g=t.multiline,v=void 0!==g&&g,y=t.order,x=t.padding,O=void 0===x?5:x,S=t.show,k=void 0!==S&&S,C=t.strokeWidth,T=void 0===C?1:C,R=t.type,A=void 0===R?"underline":R,j=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(t,["animate","animationDelay","animationDuration","brackets","children","color","customElement","getAnnotationObject","iterations","multiline","order","padding","show","strokeWidth","type"]),M=(0,r.useRef)(null),L=(0,r.useRef)(),N=(0,r.useRef)({playing:!1,timeout:null}),P=(0,r.useRef)({animate:n,animationDuration:a,brackets:u,color:f,getAnnotationObject:d,iterations:m,multiline:v,padding:O,strokeWidth:T,type:A});return function(t,e){var n=(0,r.useContext)(_),o=(0,r.useContext)(E),i=(0,r.useRef)({annotation:t,context:n,dispatch:o,order:e});(0,r.useEffect)((function(){var t=i.current,e=t.annotation,n=t.context,r=t.dispatch,o=t.order;n&&r&&r({type:"ADD",payload:{annotation:e,order:o}})}),[])}(L,"string"===typeof y?parseInt(y):y),(0,r.useEffect)((function(){var t=P.current,e=t.getAnnotationObject;return L.current=function(t,e){return new w(t,e)}(M.current,t),e&&e(L.current),function(){var t,e;null===(e=null===(t=L.current)||void 0===t?void 0:t.remove)||void 0===e||e.call(t)}}),[]),(0,r.useEffect)((function(){var t,e;k?N.current.timeout||(N.current.timeout=window.setTimeout((function(){var t,e;N.current.playing=!0,null===(e=null===(t=L.current)||void 0===t?void 0:t.show)||void 0===e||e.call(t),window.setTimeout((function(){N.current.playing=!1,N.current.timeout=null}),a)}),i)):(null===(e=null===(t=L.current)||void 0===t?void 0:t.hide)||void 0===e||e.call(t),N.current.playing=!1,N.current.timeout&&(clearTimeout(N.current.timeout),N.current.timeout=null))}),[L,k,i,N,a]),(0,r.useEffect)((function(){L.current&&(L.current.animate=n,L.current.animationDuration=a,L.current.color=f,L.current.strokeWidth=T,L.current.padding=O)}),[L,n,a,f,T,O]),r.createElement(h,b({ref:M},j),c)}}}]);
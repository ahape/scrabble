(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scrabblecore"] = factory();
	else
		root["scrabblecore"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/knockout/build/output/knockout-latest.js":
/*!***************************************************************!*\
  !*** ./node_modules/knockout/build/output/knockout-latest.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Knockout JavaScript library v3.5.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var A=this||(0,eval)("this"),w=A.document,R=A.navigator,v=A.jQuery,H=A.JSON;v||"undefined"===typeof jQuery||(v=jQuery);(function(n){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports,__webpack_require__], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})(function(S,T){function K(a,c){return null===a||typeof a in W?a===c:!1}function X(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function Y(b,c){var d;return function(){clearTimeout(d);
d=a.a.setTimeout(b,c)}}function Z(a,c){c&&"change"!==c?"beforeChange"===c?this.pc(a):this.gb(a,c):this.qc(a)}function aa(a,c){null!==c&&c.s&&c.s()}function ba(a,c){var d=this.qd,e=d[r];e.ra||(this.Qb&&this.mb[c]?(d.uc(c,a,this.mb[c]),this.mb[c]=null,--this.Qb):e.I[c]||d.uc(c,a,e.J?{da:a}:d.$c(a)),a.Ja&&a.gd())}var a="undefined"!==typeof S?S:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.L=function(a,c,d){a[c]=d};a.version="3.5.1";a.b("version",
a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1,foreachHidesDestroyed:!1};a.a=function(){function b(a,b){for(var c in a)f.call(a,c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)f.call(b,c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var l=b[c].match(q)||[];a.a.D(d.match(q),function(b){a.a.Na(l,b,e)});b[c]=l.join(" ")}var f=Object.prototype.hasOwnProperty,g={__proto__:[]}instanceof Array,h="function"===typeof Symbol,m={},k={};m[R&&/Firefox\/2/i.test(R.userAgent)?
"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];m.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(m,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)k[b[c]]=a});var l={propertychange:!0},p=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),q=/\S+/g,t;return{Jc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
D:function(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a)},A:"function"==typeof Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Lb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a))return a[d];return n},Pa:function(b,c){var d=a.a.A(b,c);0<d?b.splice(d,1):0===d&&b.shift()},wc:function(b){var c=[];b&&a.a.D(b,function(b){0>a.a.A(c,b)&&c.push(b)});return c},Mb:function(a,
b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)d.push(b.call(c,a[e],e));return d},jb:function(a,b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)b.call(c,a[e],e)&&d.push(a[e]);return d},Nb:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Na:function(b,c,d){var e=a.a.A(a.a.bc(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},Ba:g,extend:c,setPrototypeOf:d,Ab:g?d:c,P:b,Ga:function(a,b,c){if(!a)return a;var d={},e;for(e in a)f.call(a,e)&&(d[e]=
b.call(c,a[e],e,a));return d},Tb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Yb:function(b){b=a.a.la(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.oa(b[d]));return c},Ca:function(b,c){for(var d=0,e=b.length,l=[];d<e;d++){var k=b[d].cloneNode(!0);l.push(c?a.oa(k):k)}return l},va:function(b,c){a.a.Tb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},Xc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],
l=e.parentNode,k=0,f=c.length;k<f;k++)l.insertBefore(c[k],e);k=0;for(f=d.length;k<f;k++)a.removeNode(d[k])}},Ua:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},Zc:function(a,b){7>p?a.setAttribute("selected",b):a.selected=b},Db:function(a){return null===a||a===n?"":a.trim?
a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ud:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},vd:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(1!==a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Sb:function(b){return a.a.vd(b,b.ownerDocument.documentElement)},kd:function(b){return!!a.a.Lb(b,a.a.Sb)},R:function(a){return a&&
a.tagName&&a.tagName.toLowerCase()},Ac:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Ac(b),c)},Gc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},B:function(b,c,d){var e=a.a.Ac(d);d=l[c];if(a.options.useOnlyNativeEvents||d||!v)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var k=function(a){e.call(b,a)},f="on"+c;b.attachEvent(f,
k);a.a.K.za(b,function(){b.detachEvent(f,k)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else t||(t="function"==typeof v(b).on?"on":"bind"),v(b)[t](c,e)},Fb:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.R(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if("function"==typeof w.createEvent)if("function"==
typeof b.dispatchEvent)d=w.createEvent(k[c]||"HTMLEvents"),d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");else v(b).trigger(c)},f:function(b){return a.O(b)?b():b},bc:function(b){return a.O(b)?b.v():b},Eb:function(b,c,d){var l;c&&("object"===typeof b.classList?
(l=b.classList[d?"add":"remove"],a.a.D(c.match(q),function(a){l.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},Bb:function(b,c){var d=a.a.f(c);if(null===d||d===n)d="";var e=a.h.firstChild(b);!e||3!=e.nodeType||a.h.nextSibling(e)?a.h.va(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Ad(b)},Yc:function(a,b){a.name=b;if(7>=p)try{var c=a.name.replace(/[&<>'"]/g,function(a){return"&#"+a.charCodeAt(0)+";"});a.mergeAttributes(w.createElement("<input name='"+
c+"'/>"),!1)}catch(d){}},Ad:function(a){9<=p&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},wd:function(a){if(p){var b=a.style.width;a.style.width=0;a.style.width=b}},Pd:function(b,c){b=a.a.f(b);c=a.a.f(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},la:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Da:function(a){return h?Symbol(a):a},Zd:6===p,$d:7===p,W:p,Lc:function(b,c){for(var d=a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),
e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},l=[],k=d.length-1;0<=k;k--)e(d[k])&&l.push(d[k]);return l},Nd:function(b){return"string"==typeof b&&(b=a.a.Db(b))?H&&H.parse?H.parse(b):(new Function("return "+b))():null},hc:function(b,c,d){if(!H||!H.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return H.stringify(a.a.f(b),c,d)},Od:function(c,d,e){e=e||{};var l=e.params||{},k=e.includeFields||this.Jc,f=c;if("object"==typeof c&&"form"===a.a.R(c))for(var f=c.action,h=k.length-1;0<=h;h--)for(var g=a.a.Lc(c,k[h]),m=g.length-1;0<=m;m--)l[g[m].name]=g[m].value;d=a.a.f(d);var p=w.createElement("form");p.style.display="none";p.action=f;p.method="post";for(var q in d)c=w.createElement("input"),c.type="hidden",c.name=q,c.value=a.a.hc(a.a.f(d[q])),p.appendChild(c);b(l,function(a,b){var c=w.createElement("input");
c.type="hidden";c.name=a;c.value=b;p.appendChild(c)});w.body.appendChild(p);e.submitter?e.submitter(p):p.submit();setTimeout(function(){p.parentNode.removeChild(p)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.D);a.b("utils.arrayFirst",a.a.Lb);a.b("utils.arrayFilter",a.a.jb);a.b("utils.arrayGetDistinctValues",a.a.wc);a.b("utils.arrayIndexOf",a.a.A);a.b("utils.arrayMap",a.a.Mb);a.b("utils.arrayPushAll",a.a.Nb);a.b("utils.arrayRemoveItem",a.a.Pa);a.b("utils.cloneNodes",a.a.Ca);a.b("utils.createSymbolOrString",
a.a.Da);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Jc);a.b("utils.getFormFields",a.a.Lc);a.b("utils.objectMap",a.a.Ga);a.b("utils.peekObservable",a.a.bc);a.b("utils.postJson",a.a.Od);a.b("utils.parseJson",a.a.Nd);a.b("utils.registerEventHandler",a.a.B);a.b("utils.stringifyJson",a.a.hc);a.b("utils.range",a.a.Pd);a.b("utils.toggleDomNodeCssClass",a.a.Eb);a.b("utils.triggerEvent",a.a.Fb);a.b("utils.unwrapObservable",a.a.f);a.b("utils.objectForEach",a.a.P);a.b("utils.addOrRemoveItem",
a.a.Na);a.b("utils.setTextContent",a.a.Bb);a.b("unwrap",a.a.f);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.g=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={},e,f;a.a.W?(e=function(a,e){var f=a[c];if(!f||"null"===f||!d[f]){if(!e)return n;f=a[c]="ko"+b++;d[f]=
{}}return d[f]},f=function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}):(e=function(a,b){var d=a[c];!d&&b&&(d=a[c]={});return d},f=function(a){return a[c]?(delete a[c],!0):!1});return{get:function(a,b){var c=e(a,!1);return c&&c[b]},set:function(a,b,c){(a=e(a,c!==n))&&(a[b]=c)},Ub:function(a,b,c){a=e(a,!0);return a[b]||(a[b]=c)},clear:f,Z:function(){return b++ +c}}};a.b("utils.domData",a.a.g);a.b("utils.domData.clear",a.a.g.clear);a.a.K=new function(){function b(b,c){var d=a.a.g.get(b,e);
d===n&&c&&(d=[],a.a.g.set(b,e,d));return d}function c(c){var e=b(c,!1);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](c);a.a.g.clear(c);a.a.K.cleanExternalData(c);g[c.nodeType]&&d(c.childNodes,!0)}function d(b,d){for(var e=[],l,f=0;f<b.length;f++)if(!d||8===b[f].nodeType)if(c(e[e.length]=l=b[f]),b[f]!==l)for(;f--&&-1==a.a.A(e,b[f]););}var e=a.a.g.Z(),f={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{za:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},yb:function(c,
d){var f=b(c,!1);f&&(a.a.Pa(f,d),0==f.length&&a.a.g.set(c,e,n))},oa:function(b){a.u.G(function(){f[b.nodeType]&&(c(b),g[b.nodeType]&&d(b.getElementsByTagName("*")))});return b},removeNode:function(b){a.oa(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){v&&"function"==typeof v.cleanData&&v.cleanData([a])}}};a.oa=a.a.K.oa;a.removeNode=a.a.K.removeNode;a.b("cleanNode",a.oa);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.K);a.b("utils.domNodeDisposal.addDisposeCallback",
a.a.K.za);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.K.yb);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},g=8>=a.a.W;a.a.ua=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else{if((e=v.clean([c],d))&&e[0]){for(var l=e[0];l.parentNode&&11!==l.parentNode.nodeType;)l=l.parentNode;
l.parentNode&&l.parentNode.removeChild(l)}}else{(e=d)||(e=w);var l=e.parentWindow||e.defaultView||A,p=a.a.Db(c).toLowerCase(),q=e.createElement("div"),t;t=(p=p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/))&&f[p[1]]||b;p=t[0];t="ignored<div>"+t[1]+c+t[2]+"</div>";"function"==typeof l.innerShiv?q.appendChild(l.innerShiv(t)):(g&&e.body.appendChild(q),q.innerHTML=t,g&&q.parentNode.removeChild(q));for(;p--;)q=q.lastChild;e=a.a.la(q.lastChild.childNodes)}return e};a.a.Md=function(b,c){var d=a.a.ua(b,
c);return d.length&&d[0].parentElement||a.a.Yb(d)};a.a.fc=function(b,c){a.a.Tb(b);c=a.a.f(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ua(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.ua);a.b("utils.setHtml",a.a.fc);a.aa=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.aa.Uc(c.nodeValue);null!=f&&e.push({ud:c,Kd:f})}else if(1==c.nodeType)for(var f=0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],
e)}var c={};return{Xb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},bd:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete c[a]}},cd:function(c,e){var f=
[];b(c,f);for(var g=0,h=f.length;g<h;g++){var m=f[g].ud,k=[m];e&&a.a.Nb(k,e);a.aa.bd(f[g].Kd,k);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m)}},Uc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.aa);a.b("memoization.memoize",a.aa.Xb);a.b("memoization.unmemoize",a.aa.bd);a.b("memoization.parseMemoText",a.aa.Uc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.aa.cd);a.na=function(){function b(){if(f)for(var b=f,c=0,d;h<f;)if(d=e[h++]){if(h>b){if(5E3<=
++c){h=f;a.a.Gc(Error("'Too much recursion' after processing "+c+" task groups."));break}b=f}try{d()}catch(p){a.a.Gc(p)}}}function c(){b();h=f=e.length=0}var d,e=[],f=0,g=1,h=0;A.MutationObserver?d=function(a){var b=w.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):d=w&&"onreadystatechange"in w.createElement("script")?function(a){var b=w.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;w.documentElement.removeChild(b);
b=null;a()};w.documentElement.appendChild(b)}:function(a){setTimeout(a,0)};return{scheduler:d,zb:function(b){f||a.na.scheduler(c);e[f++]=b;return g++},cancel:function(a){a=a-(g-f);a>=h&&a<f&&(e[a]=null)},resetForTesting:function(){var a=f-h;h=f=e.length=0;return a},Sd:b}}();a.b("tasks",a.na);a.b("tasks.schedule",a.na.zb);a.b("tasks.runEarly",a.na.Sd);a.Ta={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.$({read:b,write:function(e){clearTimeout(d);d=a.a.setTimeout(function(){b(e)},
c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.Hb=!1;f="function"==typeof e?e:"notifyWhenChangesStop"==e?Y:X;a.ub(function(a){return f(a,d,c)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.Hb||(b.Hb=!0,b.ub(function(c){var e,f=!1;return function(){if(!f){a.na.cancel(e);e=a.na.zb(c);try{f=!0,b.notifySubscribers(n,"dirty")}finally{f=
!1}}}}))},notify:function(a,c){a.equalityComparer="always"==c?null:K}};var W={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Ta);a.ic=function(b,c,d){this.da=b;this.lc=c;this.mc=d;this.Ib=!1;this.fb=this.Jb=null;a.L(this,"dispose",this.s);a.L(this,"disposeWhenNodeIsRemoved",this.l)};a.ic.prototype.s=function(){this.Ib||(this.fb&&a.a.K.yb(this.Jb,this.fb),this.Ib=!0,this.mc(),this.da=this.lc=this.mc=this.Jb=this.fb=null)};a.ic.prototype.l=function(b){this.Jb=b;a.a.K.za(b,this.fb=this.s.bind(this))};
a.T=function(){a.a.Ab(this,D);D.qb(this)};var D={qb:function(a){a.U={change:[]};a.sc=1},subscribe:function(b,c,d){var e=this;d=d||"change";var f=new a.ic(e,c?b.bind(c):b,function(){a.a.Pa(e.U[d],f);e.hb&&e.hb(d)});e.Qa&&e.Qa(d);e.U[d]||(e.U[d]=[]);e.U[d].push(f);return f},notifySubscribers:function(b,c){c=c||"change";"change"===c&&this.Gb();if(this.Wa(c)){var d="change"===c&&this.ed||this.U[c].slice(0);try{a.u.xc();for(var e=0,f;f=d[e];++e)f.Ib||f.lc(b)}finally{a.u.end()}}},ob:function(){return this.sc},
Dd:function(a){return this.ob()!==a},Gb:function(){++this.sc},ub:function(b){var c=this,d=a.O(c),e,f,g,h,m;c.gb||(c.gb=c.notifySubscribers,c.notifySubscribers=Z);var k=b(function(){c.Ja=!1;d&&h===c&&(h=c.nc?c.nc():c());var a=f||m&&c.sb(g,h);m=f=e=!1;a&&c.gb(g=h)});c.qc=function(a,b){b&&c.Ja||(m=!b);c.ed=c.U.change.slice(0);c.Ja=e=!0;h=a;k()};c.pc=function(a){e||(g=a,c.gb(a,"beforeChange"))};c.rc=function(){m=!0};c.gd=function(){c.sb(g,c.v(!0))&&(f=!0)}},Wa:function(a){return this.U[a]&&this.U[a].length},
Bd:function(b){if(b)return this.U[b]&&this.U[b].length||0;var c=0;a.a.P(this.U,function(a,b){"dirty"!==a&&(c+=b.length)});return c},sb:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},toString:function(){return"[object Object]"},extend:function(b){var c=this;b&&a.a.P(b,function(b,e){var f=a.Ta[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.L(D,"init",D.qb);a.L(D,"subscribe",D.subscribe);a.L(D,"extend",D.extend);a.L(D,"getSubscriptionsCount",D.Bd);a.a.Ba&&a.a.setPrototypeOf(D,
Function.prototype);a.T.fn=D;a.Qc=function(a){return null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.T);a.b("isSubscribable",a.Qc);a.S=a.u=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{xc:b,end:c,cc:function(b){if(e){if(!a.Qc(b))throw Error("Only subscribable things can act as dependencies");e.od.call(e.pd,b,b.fd||(b.fd=++f))}},G:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},qa:function(){if(e)return e.o.qa()},
Va:function(){if(e)return e.o.Va()},Ya:function(){if(e)return e.Ya},o:function(){if(e)return e.o}}}();a.b("computedContext",a.S);a.b("computedContext.getDependenciesCount",a.S.qa);a.b("computedContext.getDependencies",a.S.Va);a.b("computedContext.isInitial",a.S.Ya);a.b("computedContext.registerDependency",a.S.cc);a.b("ignoreDependencies",a.Yd=a.u.G);var I=a.a.Da("_latestValue");a.ta=function(b){function c(){if(0<arguments.length)return c.sb(c[I],arguments[0])&&(c.ya(),c[I]=arguments[0],c.xa()),this;
a.u.cc(c);return c[I]}c[I]=b;a.a.Ba||a.a.extend(c,a.T.fn);a.T.fn.qb(c);a.a.Ab(c,F);a.options.deferUpdates&&a.Ta.deferred(c,!0);return c};var F={equalityComparer:K,v:function(){return this[I]},xa:function(){this.notifySubscribers(this[I],"spectate");this.notifySubscribers(this[I])},ya:function(){this.notifySubscribers(this[I],"beforeChange")}};a.a.Ba&&a.a.setPrototypeOf(F,a.T.fn);var G=a.ta.Ma="__ko_proto__";F[G]=a.ta;a.O=function(b){if((b="function"==typeof b&&b[G])&&b!==F[G]&&b!==a.o.fn[G])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
return!!b};a.Za=function(b){return"function"==typeof b&&(b[G]===F[G]||b[G]===a.o.fn[G]&&b.Nc)};a.b("observable",a.ta);a.b("isObservable",a.O);a.b("isWriteableObservable",a.Za);a.b("isWritableObservable",a.Za);a.b("observable.fn",F);a.L(F,"peek",F.v);a.L(F,"valueHasMutated",F.xa);a.L(F,"valueWillMutate",F.ya);a.Ha=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.ta(b);a.a.Ab(b,
a.Ha.fn);return b.extend({trackArrayChanges:!0})};a.Ha.fn={remove:function(b){for(var c=this.v(),d=[],e="function"!=typeof b||a.O(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];if(e(g)){0===d.length&&this.ya();if(c[f]!==g)throw Error("Array modified during remove; cannot remove item");d.push(g);c.splice(f,1);f--}}d.length&&this.xa();return d},removeAll:function(b){if(b===n){var c=this.v(),d=c.slice(0);this.ya();c.splice(0,c.length);this.xa();return d}return b?this.remove(function(c){return 0<=
a.a.A(b,c)}):[]},destroy:function(b){var c=this.v(),d="function"!=typeof b||a.O(b)?function(a){return a===b}:b;this.ya();for(var e=c.length-1;0<=e;e--){var f=c[e];d(f)&&(f._destroy=!0)}this.xa()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.A(b,c)}):[]},indexOf:function(b){var c=this();return a.a.A(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ya(),this.v()[d]=c,this.xa())},sorted:function(a){var c=this().slice(0);
return a?c.sort(a):c.sort()},reversed:function(){return this().slice(0).reverse()}};a.a.Ba&&a.a.setPrototypeOf(a.Ha.fn,a.ta.fn);a.a.D("pop push reverse shift sort splice unshift".split(" "),function(b){a.Ha.fn[b]=function(){var a=this.v();this.ya();this.zc(a,b,arguments);var d=a[b].apply(a,arguments);this.xa();return d===a?this:d}});a.a.D(["slice"],function(b){a.Ha.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.Pc=function(b){return a.O(b)&&"function"==typeof b.remove&&"function"==
typeof b.push};a.b("observableArray",a.Ha);a.b("isObservableArray",a.Pc);a.Ta.trackArrayChanges=function(b,c){function d(){function c(){if(m){var d=[].concat(b.v()||[]),e;if(b.Wa("arrayChange")){if(!f||1<m)f=a.a.Pb(k,d,b.Ob);e=f}k=d;f=null;m=0;e&&e.length&&b.notifySubscribers(e,"arrayChange")}}e?c():(e=!0,h=b.subscribe(function(){++m},null,"spectate"),k=[].concat(b.v()||[]),f=null,g=b.subscribe(c))}b.Ob={};c&&"object"==typeof c&&a.a.extend(b.Ob,c);b.Ob.sparse=!0;if(!b.zc){var e=!1,f=null,g,h,m=0,
k,l=b.Qa,p=b.hb;b.Qa=function(a){l&&l.call(b,a);"arrayChange"===a&&d()};b.hb=function(a){p&&p.call(b,a);"arrayChange"!==a||b.Wa("arrayChange")||(g&&g.s(),h&&h.s(),h=g=null,e=!1,k=n)};b.zc=function(b,c,d){function l(a,b,c){return k[k.length]={status:a,value:b,index:c}}if(e&&!m){var k=[],p=b.length,g=d.length,h=0;switch(c){case "push":h=p;case "unshift":for(c=0;c<g;c++)l("added",d[c],h+c);break;case "pop":h=p-1;case "shift":p&&l("deleted",b[h],h);break;case "splice":c=Math.min(Math.max(0,0>d[0]?p+d[0]:
d[0]),p);for(var p=1===g?p:Math.min(c+(d[1]||0),p),g=c+g-2,h=Math.max(p,g),U=[],L=[],n=2;c<h;++c,++n)c<p&&L.push(l("deleted",b[c],c)),c<g&&U.push(l("added",d[n],c));a.a.Kc(L,U);break;default:return}f=k}}}};var r=a.a.Da("_state");a.o=a.$=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.nb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}g.ra||
a.u.cc(e);(g.ka||g.J&&e.Xa())&&e.ha();return g.X}"object"===typeof b?d=b:(d=d||{},b&&(d.read=b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={X:n,sa:!0,ka:!0,rb:!1,jc:!1,ra:!1,wb:!1,J:!1,Wc:d.read,nb:c||d.owner,l:d.disposeWhenNodeIsRemoved||d.l||null,Sa:d.disposeWhen||d.Sa,Rb:null,I:{},V:0,Ic:null};e[r]=g;e.Nc="function"===typeof f;a.a.Ba||a.a.extend(e,a.T.fn);a.T.fn.qb(e);a.a.Ab(e,C);d.pure?(g.wb=!0,g.J=!0,a.a.extend(e,da)):
d.deferEvaluation&&a.a.extend(e,ea);a.options.deferUpdates&&a.Ta.deferred(e,!0);g.l&&(g.jc=!0,g.l.nodeType||(g.l=null));g.J||d.deferEvaluation||e.ha();g.l&&e.ja()&&a.a.K.za(g.l,g.Rb=function(){e.s()});return e};var C={equalityComparer:K,qa:function(){return this[r].V},Va:function(){var b=[];a.a.P(this[r].I,function(a,d){b[d.Ka]=d.da});return b},Vb:function(b){if(!this[r].V)return!1;var c=this.Va();return-1!==a.a.A(c,b)?!0:!!a.a.Lb(c,function(a){return a.Vb&&a.Vb(b)})},uc:function(a,c,d){if(this[r].wb&&
c===this)throw Error("A 'pure' computed must not be called recursively");this[r].I[a]=d;d.Ka=this[r].V++;d.La=c.ob()},Xa:function(){var a,c,d=this[r].I;for(a in d)if(Object.prototype.hasOwnProperty.call(d,a)&&(c=d[a],this.Ia&&c.da.Ja||c.da.Dd(c.La)))return!0},Jd:function(){this.Ia&&!this[r].rb&&this.Ia(!1)},ja:function(){var a=this[r];return a.ka||0<a.V},Rd:function(){this.Ja?this[r].ka&&(this[r].sa=!0):this.Hc()},$c:function(a){if(a.Hb){var c=a.subscribe(this.Jd,this,"dirty"),d=a.subscribe(this.Rd,
this);return{da:a,s:function(){c.s();d.s()}}}return a.subscribe(this.Hc,this)},Hc:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[r].Ic),this[r].Ic=a.a.setTimeout(function(){b.ha(!0)},c)):b.Ia?b.Ia(!0):b.ha(!0)},ha:function(b){var c=this[r],d=c.Sa,e=!1;if(!c.rb&&!c.ra){if(c.l&&!a.a.Sb(c.l)||d&&d()){if(!c.jc){this.s();return}}else c.jc=!1;c.rb=!0;try{e=this.zd(b)}finally{c.rb=!1}return e}},zd:function(b){var c=this[r],d=!1,e=c.wb?n:!c.V,d={qd:this,mb:c.I,Qb:c.V};a.u.xc({pd:d,
od:ba,o:this,Ya:e});c.I={};c.V=0;var f=this.yd(c,d);c.V?d=this.sb(c.X,f):(this.s(),d=!0);d&&(c.J?this.Gb():this.notifySubscribers(c.X,"beforeChange"),c.X=f,this.notifySubscribers(c.X,"spectate"),!c.J&&b&&this.notifySubscribers(c.X),this.rc&&this.rc());e&&this.notifySubscribers(c.X,"awake");return d},yd:function(b,c){try{var d=b.Wc;return b.nb?d.call(b.nb):d()}finally{a.u.end(),c.Qb&&!b.J&&a.a.P(c.mb,aa),b.sa=b.ka=!1}},v:function(a){var c=this[r];(c.ka&&(a||!c.V)||c.J&&this.Xa())&&this.ha();return c.X},
ub:function(b){a.T.fn.ub.call(this,b);this.nc=function(){this[r].J||(this[r].sa?this.ha():this[r].ka=!1);return this[r].X};this.Ia=function(a){this.pc(this[r].X);this[r].ka=!0;a&&(this[r].sa=!0);this.qc(this,!a)}},s:function(){var b=this[r];!b.J&&b.I&&a.a.P(b.I,function(a,b){b.s&&b.s()});b.l&&b.Rb&&a.a.K.yb(b.l,b.Rb);b.I=n;b.V=0;b.ra=!0;b.sa=!1;b.ka=!1;b.J=!1;b.l=n;b.Sa=n;b.Wc=n;this.Nc||(b.nb=n)}},da={Qa:function(b){var c=this,d=c[r];if(!d.ra&&d.J&&"change"==b){d.J=!1;if(d.sa||c.Xa())d.I=null,d.V=
0,c.ha()&&c.Gb();else{var e=[];a.a.P(d.I,function(a,b){e[b.Ka]=a});a.a.D(e,function(a,b){var e=d.I[a],m=c.$c(e.da);m.Ka=b;m.La=e.La;d.I[a]=m});c.Xa()&&c.ha()&&c.Gb()}d.ra||c.notifySubscribers(d.X,"awake")}},hb:function(b){var c=this[r];c.ra||"change"!=b||this.Wa("change")||(a.a.P(c.I,function(a,b){b.s&&(c.I[a]={da:b.da,Ka:b.Ka,La:b.La},b.s())}),c.J=!0,this.notifySubscribers(n,"asleep"))},ob:function(){var b=this[r];b.J&&(b.sa||this.Xa())&&this.ha();return a.T.fn.ob.call(this)}},ea={Qa:function(a){"change"!=
a&&"beforeChange"!=a||this.v()}};a.a.Ba&&a.a.setPrototypeOf(C,a.T.fn);var N=a.ta.Ma;C[N]=a.o;a.Oc=function(a){return"function"==typeof a&&a[N]===C[N]};a.Fd=function(b){return a.Oc(b)&&b[r]&&b[r].wb};a.b("computed",a.o);a.b("dependentObservable",a.o);a.b("isComputed",a.Oc);a.b("isPureComputed",a.Fd);a.b("computed.fn",C);a.L(C,"peek",C.v);a.L(C,"dispose",C.s);a.L(C,"isActive",C.ja);a.L(C,"getDependenciesCount",C.qa);a.L(C,"getDependencies",C.Va);a.xb=function(b,c){if("function"===typeof b)return a.o(b,
c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.o(b,c)};a.b("pureComputed",a.xb);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=d;break;case "object":case "undefined":var l=g.get(d);h[c]=l!==
n?l:b(d,f,g)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.values=[]}a.ad=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.O(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.ad(b);return a.a.hc(b,c,d)};d.prototype={constructor:d,save:function(b,c){var d=a.a.A(this.keys,
b);0<=d?this.values[d]=c:(this.keys.push(b),this.values.push(c))},get:function(b){b=a.a.A(this.keys,b);return 0<=b?this.values[b]:n}}})();a.b("toJS",a.ad);a.b("toJSON",a.toJSON);a.Wd=function(b,c,d){function e(c){var e=a.xb(b,d).extend({ma:"always"}),h=e.subscribe(function(a){a&&(h.s(),c(a))});e.notifySubscribers(e.v());return h}return"function"!==typeof Promise||c?e(c.bind(d)):new Promise(e)};a.b("when",a.Wd);(function(){a.w={M:function(b){switch(a.a.R(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?
a.a.g.get(b,a.c.options.$b):7>=a.a.W?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex]):n;default:return b.value}},cb:function(b,c,d){switch(a.a.R(b)){case "option":"string"===typeof c?(a.a.g.set(b,a.c.options.$b,n),"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__,b.value=c):(a.a.g.set(b,a.c.options.$b,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===
typeof c?c:"");break;case "select":if(""===c||null===c)c=n;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.w.M(b.options[f]),h==c||""===h&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e,6===a.a.W&&a.a.setTimeout(function(){b.selectedIndex=e},0);break;default:if(null===c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.w);a.b("selectExtensions.readValue",a.w.M);a.b("selectExtensions.writeValue",a.w.cb);a.m=function(){function b(b){b=a.a.Db(b);123===b.charCodeAt(0)&&(b=b.slice(1,
-1));b+="\n,";var c=[],d=b.match(e),p,q=[],h=0;if(1<d.length){for(var x=0,B;B=d[x];++x){var u=B.charCodeAt(0);if(44===u){if(0>=h){c.push(p&&q.length?{key:p,value:q.join("")}:{unknown:p||q.join("")});p=h=0;q=[];continue}}else if(58===u){if(!h&&!p&&1===q.length){p=q.pop();continue}}else if(47===u&&1<B.length&&(47===B.charCodeAt(1)||42===B.charCodeAt(1)))continue;else 47===u&&x&&1<B.length?(u=d[x-1].match(f))&&!g[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),x=-1,B="/"):40===u||123===u||91===u?++h:
41===u||125===u||93===u?--h:p||q.length||34!==u&&39!==u||(B=B.slice(1,-1));q.push(B)}if(0<h)throw Error("Unbalanced parentheses, braces, or brackets");}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},
h={};return{Ra:[],wa:h,ac:b,vb:function(e,f){function l(b,e){var f;if(!x){var k=a.getBindingHandler(b);if(k&&k.preprocess&&!(e=k.preprocess(e,b,l)))return;if(k=h[b])f=e,0<=a.a.A(c,f)?f=!1:(k=f.match(d),f=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:f),k=f;k&&q.push("'"+("string"==typeof h[b]?h[b]:b)+"':function(_z){"+f+"=_z}")}g&&(e="function(){return "+e+" }");p.push("'"+b+"':"+e)}f=f||{};var p=[],q=[],g=f.valueAccessors,x=f.bindingParams,B="string"===typeof e?b(e):e;a.a.D(B,function(a){l(a.key||a.unknown,
a.value)});q.length&&l("_ko_property_writers","{"+q.join(",")+" }");return p.join(",")},Id:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},eb:function(b,c,d,e,f){if(b&&a.O(b))!a.Za(b)||f&&b.v()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.m);a.b("expressionRewriting.bindingRewriteValidators",a.m.Ra);a.b("expressionRewriting.parseObjectLiteral",a.m.ac);a.b("expressionRewriting.preProcessBindings",a.m.vb);a.b("expressionRewriting._twoWayBindings",
a.m.wa);a.b("jsonExpressionRewriting",a.m);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.m.vb);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(d,e){for(var f=d,h=1,g=[];f=f.nextSibling;){if(c(f)&&(a.a.g.set(f,k,!0),h--,0===h))return g;g.push(f);b(f)&&h++}if(!e)throw Error("Cannot find closing comment tag to match: "+d.nodeValue);return null}function e(a,b){var c=d(a,b);return c?
0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0},k="__ko_matchedEndComment__";a.h={ea:{},childNodes:function(a){return b(a)?d(a):a.childNodes},Ea:function(c){if(b(c)){c=a.h.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Tb(c)},va:function(c,d){if(b(c)){a.h.Ea(c);for(var e=
c.nextSibling,f=0,k=d.length;f<k;f++)e.parentNode.insertBefore(d[f],e)}else a.a.va(c,d)},Vc:function(a,c){var d;b(a)?(d=a.nextSibling,a=a.parentNode):d=a.firstChild;d?c!==d&&a.insertBefore(c,d):a.appendChild(c)},Wb:function(c,d,e){e?(e=e.nextSibling,b(c)&&(c=c.parentNode),e?d!==e&&c.insertBefore(d,e):c.appendChild(d)):a.h.Vc(c,d)},firstChild:function(a){if(b(a))return!a.nextSibling||c(a.nextSibling)?null:a.nextSibling;if(a.firstChild&&c(a.firstChild))throw Error("Found invalid end comment, as the first child of "+
a);return a.firstChild},nextSibling:function(d){b(d)&&(d=e(d));if(d.nextSibling&&c(d.nextSibling)){var f=d.nextSibling;if(c(f)&&!a.a.g.get(f,k))throw Error("Found end comment without a matching opening comment, as child of "+d);return null}return d.nextSibling},Cd:b,Vd:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},Sc:function(d){if(m[a.a.R(d)]){var f=d.firstChild;if(f){do if(1===f.nodeType){var k;k=f.firstChild;var h=null;if(k){do if(h)h.push(k);else if(b(k)){var g=e(k,!0);g?k=
g:h=[k]}else c(k)&&(h=[k]);while(k=k.nextSibling)}if(k=h)for(h=f.nextSibling,g=0;g<k.length;g++)h?d.insertBefore(k[g],h):d.appendChild(k[g])}while(f=f.nextSibling)}}}}})();a.b("virtualElements",a.h);a.b("virtualElements.allowedBindings",a.h.ea);a.b("virtualElements.emptyNode",a.h.Ea);a.b("virtualElements.insertAfter",a.h.Wb);a.b("virtualElements.prepend",a.h.Vc);a.b("virtualElements.setDomNodeChildren",a.h.va);(function(){a.ga=function(){this.nd={}};a.a.extend(a.ga.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind")||a.j.getComponentNameForNode(b);case 8:return a.h.Cd(b);default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.j.tc(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.j.tc(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.h.Vd(b);default:return null}},
parseBindingsString:function(b,c,d,e){try{var f=this.nd,g=b+(e&&e.valueAccessors||""),h;if(!(h=f[g])){var m,k="with($context){with($data||{}){return{"+a.m.vb(b,e)+"}}}";m=new Function("$context","$element",k);h=f[g]=m}return h(c,d)}catch(l){throw l.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+l.message,l;}}});a.ga.instance=new a.ga})();a.b("bindingProvider",a.ga);(function(){function b(b){var c=(b=a.a.g.get(b,z))&&b.N;c&&(b.N=null,c.Tc())}function c(c,d,e){this.node=c;this.yc=
d;this.kb=[];this.H=!1;d.N||a.a.K.za(c,b);e&&e.N&&(e.N.kb.push(c),this.Kb=e)}function d(a){return function(){return a}}function e(a){return a()}function f(b){return a.a.Ga(a.u.G(b),function(a,c){return function(){return b()[c]}})}function g(b,c,e){return"function"===typeof b?f(b.bind(null,c,e)):a.a.Ga(b,d)}function h(a,b){return f(this.getBindings.bind(this,a,b))}function m(b,c){var d=a.h.firstChild(c);if(d){var e,f=a.ga.instance,l=f.preprocessNode;if(l){for(;e=d;)d=a.h.nextSibling(e),l.call(f,e);
d=a.h.firstChild(c)}for(;e=d;)d=a.h.nextSibling(e),k(b,e)}a.i.ma(c,a.i.H)}function k(b,c){var d=b,e=1===c.nodeType;e&&a.h.Sc(c);if(e||a.ga.instance.nodeHasBindings(c))d=p(c,null,b).bindingContextForDescendants;d&&!u[a.a.R(c)]&&m(d,c)}function l(b){var c=[],d={},e=[];a.a.P(b,function ca(f){if(!d[f]){var k=a.getBindingHandler(f);k&&(k.after&&(e.push(f),a.a.D(k.after,function(c){if(b[c]){if(-1!==a.a.A(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));
ca(c)}}),e.length--),c.push({key:f,Mc:k}));d[f]=!0}});return c}function p(b,c,d){var f=a.a.g.Ub(b,z,{}),k=f.hd;if(!c){if(k)throw Error("You cannot apply bindings multiple times to the same element.");f.hd=!0}k||(f.context=d);f.Zb||(f.Zb={});var g;if(c&&"function"!==typeof c)g=c;else{var p=a.ga.instance,q=p.getBindingAccessors||h,m=a.$(function(){if(g=c?c(d,b):q.call(p,b,d)){if(d[t])d[t]();if(d[B])d[B]()}return g},null,{l:b});g&&m.ja()||(m=null)}var x=d,u;if(g){var J=function(){return a.a.Ga(m?m():
g,e)},r=m?function(a){return function(){return e(m()[a])}}:function(a){return g[a]};J.get=function(a){return g[a]&&e(r(a))};J.has=function(a){return a in g};a.i.H in g&&a.i.subscribe(b,a.i.H,function(){var c=(0,g[a.i.H])();if(c){var d=a.h.childNodes(b);d.length&&c(d,a.Ec(d[0]))}});a.i.pa in g&&(x=a.i.Cb(b,d),a.i.subscribe(b,a.i.pa,function(){var c=(0,g[a.i.pa])();c&&a.h.firstChild(b)&&c(b)}));f=l(g);a.a.D(f,function(c){var d=c.Mc.init,e=c.Mc.update,f=c.key;if(8===b.nodeType&&!a.h.ea[f])throw Error("The binding '"+
f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.u.G(function(){var a=d(b,r(f),J,x.$data,x);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof e&&a.$(function(){e(b,r(f),J,x.$data,x)},null,{l:b})}catch(k){throw k.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+k.message,
k;}})}f=u===n;return{shouldBindDescendants:f,bindingContextForDescendants:f&&x}}function q(b,c){return b&&b instanceof a.fa?b:new a.fa(b,n,n,c)}var t=a.a.Da("_subscribable"),x=a.a.Da("_ancestorBindingInfo"),B=a.a.Da("_dataDependency");a.c={};var u={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.c[b]};var J={};a.fa=function(b,c,d,e,f){function k(){var b=p?h():h,f=a.a.f(b);c?(a.a.extend(l,c),x in c&&(l[x]=c[x])):(l.$parents=[],l.$root=f,l.ko=a);l[t]=q;g?f=l.$data:(l.$rawData=
b,l.$data=f);d&&(l[d]=f);e&&e(l,c,f);if(c&&c[t]&&!a.S.o().Vb(c[t]))c[t]();m&&(l[B]=m);return l.$data}var l=this,g=b===J,h=g?n:b,p="function"==typeof h&&!a.O(h),q,m=f&&f.dataDependency;f&&f.exportDependencies?k():(q=a.xb(k),q.v(),q.ja()?q.equalityComparer=null:l[t]=n)};a.fa.prototype.createChildContext=function(b,c,d,e){!e&&c&&"object"==typeof c&&(e=c,c=e.as,d=e.extend);if(c&&e&&e.noChildContext){var f="function"==typeof b&&!a.O(b);return new a.fa(J,this,null,function(a){d&&d(a);a[c]=f?b():b},e)}return new a.fa(b,
this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)},e)};a.fa.prototype.extend=function(b,c){return new a.fa(J,this,null,function(c){a.a.extend(c,"function"==typeof b?b(c):b)},c)};var z=a.a.g.Z();c.prototype.Tc=function(){this.Kb&&this.Kb.N&&this.Kb.N.sd(this.node)};c.prototype.sd=function(b){a.a.Pa(this.kb,b);!this.kb.length&&this.H&&this.Cc()};c.prototype.Cc=function(){this.H=!0;this.yc.N&&!this.kb.length&&(this.yc.N=
null,a.a.K.yb(this.node,b),a.i.ma(this.node,a.i.pa),this.Tc())};a.i={H:"childrenComplete",pa:"descendantsComplete",subscribe:function(b,c,d,e,f){var k=a.a.g.Ub(b,z,{});k.Fa||(k.Fa=new a.T);f&&f.notifyImmediately&&k.Zb[c]&&a.u.G(d,e,[b]);return k.Fa.subscribe(d,e,c)},ma:function(b,c){var d=a.a.g.get(b,z);if(d&&(d.Zb[c]=!0,d.Fa&&d.Fa.notifySubscribers(b,c),c==a.i.H))if(d.N)d.N.Cc();else if(d.N===n&&d.Fa&&d.Fa.Wa(a.i.pa))throw Error("descendantsComplete event not supported for bindings on this node");
},Cb:function(b,d){var e=a.a.g.Ub(b,z,{});e.N||(e.N=new c(b,e,d[x]));return d[x]==e?d:d.extend(function(a){a[x]=e})}};a.Td=function(b){return(b=a.a.g.get(b,z))&&b.context};a.ib=function(b,c,d){1===b.nodeType&&a.h.Sc(b);return p(b,c,q(d))};a.ld=function(b,c,d){d=q(d);return a.ib(b,g(c,d,b),d)};a.Oa=function(a,b){1!==b.nodeType&&8!==b.nodeType||m(q(a),b)};a.vc=function(a,b,c){!v&&A.jQuery&&(v=A.jQuery);if(2>arguments.length){if(b=w.body,!b)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
}else if(!b||1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");k(q(a,c),b)};a.Dc=function(b){return!b||1!==b.nodeType&&8!==b.nodeType?n:a.Td(b)};a.Ec=function(b){return(b=a.Dc(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("bindingEvent",a.i);a.b("bindingEvent.subscribe",a.i.subscribe);a.b("bindingEvent.startPossiblyAsyncContentBinding",a.i.Cb);a.b("applyBindings",a.vc);a.b("applyBindingsToDescendants",a.Oa);
a.b("applyBindingAccessorsToNode",a.ib);a.b("applyBindingsToNode",a.ld);a.b("contextFor",a.Dc);a.b("dataFor",a.Ec)})();(function(b){function c(c,e){var k=Object.prototype.hasOwnProperty.call(f,c)?f[c]:b,l;k?k.subscribe(e):(k=f[c]=new a.T,k.subscribe(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Gd:e};delete f[c];l||e?k.notifySubscribers(b):a.na.zb(function(){k.notifySubscribers(b)})}),l=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,
c)}):b(null,null)})}function e(c,d,f,l){l||(l=a.j.loaders.slice(0));var g=l.shift();if(g){var q=g[c];if(q){var t=!1;if(q.apply(g,d.concat(function(a){t?f(null):null!==a?f(a):e(c,d,f,l)}))!==b&&(t=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,l)}else f(null)}var f={},g={};a.j={get:function(d,e){var f=Object.prototype.hasOwnProperty.call(g,d)?g[d]:b;f?f.Gd?a.u.G(function(){e(f.definition)}):
a.na.zb(function(){e(f.definition)}):c(d,e)},Bc:function(a){delete g[a]},oc:e};a.j.loaders=[];a.b("components",a.j);a.b("components.get",a.j.get);a.b("components.clearCachedDefinition",a.j.Bc)})();(function(){function b(b,c,d,e){function g(){0===--B&&e(h)}var h={},B=2,u=d.template;d=d.viewModel;u?f(c,u,function(c){a.j.oc("loadTemplate",[b,c],function(a){h.template=a;g()})}):g();d?f(c,d,function(c){a.j.oc("loadViewModel",[b,c],function(a){h[m]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});
else if("function"===typeof b[m])d(b[m]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.R(b)){case "script":return a.a.ua(b.text);case "textarea":return a.a.ua(b.value);case "template":if(e(b.content))return a.a.Ca(b.content.childNodes)}return a.a.Ca(b.childNodes)}function e(a){return A.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?
T||A.require?(T||A.require)([b.require],function(a){a&&"object"===typeof a&&a.Xd&&a["default"]&&(a=a["default"]);c(a)}):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.j.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.j.tb(b))throw Error("Component "+b+" is already registered");h[b]=c};a.j.tb=function(a){return Object.prototype.hasOwnProperty.call(h,a)};a.j.unregister=function(b){delete h[b];
a.j.Bc(b)};a.j.Fc={getConfig:function(b,c){c(a.j.tb(b)?h[b]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.ua(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.la(c.childNodes));else if(c.element)if(c=c.element,A.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var h=w.getElementById(c);h?f(d(h)):b("Cannot find element with ID "+c)}else b("Unknown element type: "+
c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var m="createViewModel";a.b("components.register",a.j.register);a.b("components.isRegistered",a.j.tb);a.b("components.unregister",a.j.unregister);a.b("components.defaultLoader",a.j.Fc);a.j.loaders.push(a.j.Fc);a.j.dd=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ga(f,function(c){return a.o(c,null,{l:b})}),g=a.a.Ga(f,
function(c){var e=c.v();return c.ja()?a.o({read:function(){return a.a.f(c())},write:a.Za(e)&&function(a){c()(a)},l:b}):e});Object.prototype.hasOwnProperty.call(g,"$raw")||(g.$raw=f);return g}return{$raw:{}}}a.j.getComponentNameForNode=function(b){var c=a.a.R(b);if(a.j.tb(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.W&&b.tagName===c))return c};a.j.tc=function(c,e,f,g){if(1===e.nodeType){var h=a.j.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
var m={name:h,params:b(e,f)};c.component=g?function(){return m}:m}}return c};var c=new a.ga;9>a.a.W&&(a.j.register=function(a){return function(b){return a.apply(this,arguments)}}(a.j.register),w.createDocumentFragment=function(b){return function(){var c=b(),f=a.j.dd,g;for(g in f);return c}}(w.createDocumentFragment))})();(function(){function b(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.Ca(c);a.h.va(d,b)}function c(a,b,c){var d=a.createViewModel;return d?d.call(a,
b,c):b}var d=0;a.c.component={init:function(e,f,g,h,m){function k(){var a=l&&l.dispose;"function"===typeof a&&a.call(l);q&&q.s();p=l=q=null}var l,p,q,t=a.a.la(a.h.childNodes(e));a.h.Ea(e);a.a.K.za(e,k);a.o(function(){var g=a.a.f(f()),h,u;"string"===typeof g?h=g:(h=a.a.f(g.name),u=a.a.f(g.params));if(!h)throw Error("No component name specified");var n=a.i.Cb(e,m),z=p=++d;a.j.get(h,function(d){if(p===z){k();if(!d)throw Error("Unknown component '"+h+"'");b(h,d,e);var f=c(d,u,{element:e,templateNodes:t});
d=n.createChildContext(f,{extend:function(a){a.$component=f;a.$componentTemplateNodes=t}});f&&f.koDescendantsComplete&&(q=a.i.subscribe(e,a.i.pa,f.koDescendantsComplete,f));l=f;a.Oa(d,e)}})},null,{l:e});return{controlsDescendantBindings:!0}}};a.h.ea.component=!0})();var V={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.f(c())||{};a.a.P(d,function(c,d){d=a.a.f(d);var g=c.indexOf(":"),g="lookupNamespaceURI"in b&&0<g&&b.lookupNamespaceURI(c.substr(0,g)),h=!1===d||null===
d||d===n;h?g?b.removeAttributeNS(g,c):b.removeAttribute(c):d=d.toString();8>=a.a.W&&c in V?(c=V[c],h?b.removeAttribute(c):b[c]=d):h||(g?b.setAttributeNS(g,c,d):b.setAttribute(c,d));"name"===c&&a.a.Yc(b,h?"":d)})}};(function(){a.c.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=g();if(!a.S.Ya()&&(e||!m&&!a.S.qa())){var k=a.u.G(c);if(l){var q=p?k.v():k,z=t;t=f;z!==f?e&&(a.a.Na(q,f,!0),a.a.Na(q,z,!1)):a.a.Na(q,f,e);p&&a.Za(k)&&k(q)}else h&&(f===n?f=e:e||(f=n)),a.m.eb(k,
d,"checked",f,!0)}}function f(){var d=a.a.f(c()),e=g();l?(b.checked=0<=a.a.A(d,e),t=e):b.checked=h&&e===n?!!d:g()===d}var g=a.xb(function(){if(d.has("checkedValue"))return a.a.f(d.get("checkedValue"));if(q)return d.has("value")?a.a.f(d.get("value")):b.value}),h="checkbox"==b.type,m="radio"==b.type;if(h||m){var k=c(),l=h&&a.a.f(k)instanceof Array,p=!(l&&k.push&&k.splice),q=m||l,t=l?g():n;m&&!b.name&&a.c.uniqueName.init(b,function(){return!0});a.o(e,null,{l:b});a.a.B(b,"click",e);a.o(f,null,{l:b});
k=n}}};a.m.wa.checked=!0;a.c.checkedValue={update:function(b,c){b.value=a.a.f(c())}}})();a.c["class"]={update:function(b,c){var d=a.a.Db(a.a.f(c()));a.a.Eb(b,b.__ko__cssValue,!1);b.__ko__cssValue=d;a.a.Eb(b,d,!0)}};a.c.css={update:function(b,c){var d=a.a.f(c());null!==d&&"object"==typeof d?a.a.P(d,function(c,d){d=a.a.f(d);a.a.Eb(b,c,d)}):a.c["class"].update(b,c)}};a.c.enable={update:function(b,c){var d=a.a.f(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.c.disable=
{update:function(b,c){a.c.enable.update(b,function(){return!a.a.f(c())})}};a.c.event={init:function(b,c,d,e,f){var g=c()||{};a.a.P(g,function(g){"string"==typeof g&&a.a.B(b,g,function(b){var k,l=c()[g];if(l){try{var p=a.a.la(arguments);e=f.$data;p.unshift(e);k=l.apply(e,p)}finally{!0!==k&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.c.foreach={Rc:function(b){return function(){var c=b(),d=a.a.bc(c);
if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.ba.Ma};a.a.f(c);return{foreach:d.data,as:d.as,noChildContext:d.noChildContext,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.ba.Ma}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.Rc(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c.foreach.Rc(c),d,e,f)}};a.m.Ra.foreach=!1;a.h.ea.foreach=
!0;a.c.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(l){g=f.body}e=g===b}f=c();a.m.eb(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.B(b,"focus",f);a.a.B(b,"focusin",f);a.a.B(b,"blur",g);a.a.B(b,"focusout",g);b.__ko_hasfocusLastValue=!1},update:function(b,c){var d=!!a.a.f(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===
d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.u.G(a.a.Fb,null,[b,d?"focusin":"focusout"]))}};a.m.wa.hasfocus=!0;a.c.hasFocus=a.c.hasfocus;a.m.wa.hasFocus="hasfocus";a.c.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.fc(b,c())}};(function(){function b(b,d,e){a.c[b]={init:function(b,c,h,m,k){var l,p,q={},t,x,n;if(d){m=h.get("as");var u=h.get("noChildContext");n=!(m&&u);q={as:m,noChildContext:u,exportDependencies:n}}x=(t=
"render"==h.get("completeOn"))||h.has(a.i.pa);a.o(function(){var h=a.a.f(c()),m=!e!==!h,u=!p,r;if(n||m!==l){x&&(k=a.i.Cb(b,k));if(m){if(!d||n)q.dataDependency=a.S.o();r=d?k.createChildContext("function"==typeof h?h:c,q):a.S.qa()?k.extend(null,q):k}u&&a.S.qa()&&(p=a.a.Ca(a.h.childNodes(b),!0));m?(u||a.h.va(b,a.a.Ca(p)),a.Oa(r,b)):(a.h.Ea(b),t||a.i.ma(b,a.i.H));l=m}},null,{l:b});return{controlsDescendantBindings:!0}}};a.m.Ra[b]=!1;a.h.ea[b]=!0}b("if");b("ifnot",!1,!0);b("with",!0)})();a.c.let={init:function(b,
c,d,e,f){c=f.extend(c);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.let=!0;var Q={};a.c.options={init:function(b){if("select"!==a.a.R(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.jb(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,d){if(x&&l)a.i.ma(b,a.i.H);else if(t.length){var e=
0<=a.a.A(t,a.w.M(d[0]));a.a.Zc(d[0],e);x&&!e&&a.u.G(a.a.Fb,null,[b,"change"])}}var h=b.multiple,m=0!=b.length&&h?b.scrollTop:null,k=a.a.f(c()),l=d.get("valueAllowUnset")&&d.has("value"),p=d.get("optionsIncludeDestroyed");c={};var q,t=[];l||(h?t=a.a.Mb(e(),a.w.M):0<=b.selectedIndex&&t.push(a.w.M(b.options[b.selectedIndex])));k&&("undefined"==typeof k.length&&(k=[k]),q=a.a.jb(k,function(b){return p||b===n||null===b||!a.a.f(b._destroy)}),d.has("optionsCaption")&&(k=a.a.f(d.get("optionsCaption")),null!==
k&&k!==n&&q.unshift(Q)));var x=!1;c.beforeRemove=function(a){b.removeChild(a)};k=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(k=function(b,c){g(0,c);a.u.G(d.get("optionsAfterRender"),null,[c[0],b!==Q?b:n])});a.a.ec(b,q,function(c,e,g){g.length&&(t=!l&&g[0].selected?[a.w.M(g[0])]:[],x=!0);e=b.ownerDocument.createElement("option");c===Q?(a.a.Bb(e,d.get("optionsCaption")),a.w.cb(e,n)):(g=f(c,d.get("optionsValue"),c),a.w.cb(e,a.a.f(g)),c=f(c,d.get("optionsText"),g),
a.a.Bb(e,c));return[e]},c,k);if(!l){var B;h?B=t.length&&e().length<t.length:B=t.length&&0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex])!==t[0]:t.length||0<=b.selectedIndex;B&&a.u.G(a.a.Fb,null,[b,"change"])}(l||a.S.Ya())&&a.i.ma(b,a.i.H);a.a.wd(b);m&&20<Math.abs(m-b.scrollTop)&&(b.scrollTop=m)}};a.c.options.$b=a.a.g.Z();a.c.selectedOptions={init:function(b,c,d){function e(){var e=c(),f=[];a.a.D(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.w.M(b))});a.m.eb(e,d,"selectedOptions",
f)}function f(){var d=a.a.f(c()),e=b.scrollTop;d&&"number"==typeof d.length&&a.a.D(b.getElementsByTagName("option"),function(b){var c=0<=a.a.A(d,a.w.M(b));b.selected!=c&&a.a.Zc(b,c)});b.scrollTop=e}if("select"!=a.a.R(b))throw Error("selectedOptions binding applies only to SELECT elements");var g;a.i.subscribe(b,a.i.H,function(){g?e():(a.a.B(b,"change",e),g=a.o(f,null,{l:b}))},null,{notifyImmediately:!0})},update:function(){}};a.m.wa.selectedOptions=!0;a.c.style={update:function(b,c){var d=a.a.f(c()||
{});a.a.P(d,function(c,d){d=a.a.f(d);if(null===d||d===n||!1===d)d="";if(v)v(b).css(c,d);else if(/^--/.test(c))b.style.setProperty(c,d);else{c=c.replace(/-(\w)/g,function(a,b){return b.toUpperCase()});var g=b.style[c];b.style[c]=d;d===g||b.style[c]!=g||isNaN(d)||(b.style[c]=d+"px")}})}};a.c.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.B(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?
a.preventDefault():a.returnValue=!1)}})}};a.c.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Bb(b,c())}};a.h.ea.text=!0;(function(){if(A&&A.navigator){var b=function(a){if(a)return parseFloat(a[1])},c=A.navigator.userAgent,d,e,f,g,h;(d=A.opera&&A.opera.version&&parseInt(A.opera.version()))||(h=b(c.match(/Edge\/([^ ]+)$/)))||b(c.match(/Chrome\/([^ ]+)/))||(e=b(c.match(/Version\/([^ ]+) Safari/)))||(f=b(c.match(/Firefox\/([^ ]+)/)))||(g=a.a.W||b(c.match(/MSIE ([^ ]+)/)))||
(g=b(c.match(/rv:([^ )]+)/)))}if(8<=g&&10>g)var m=a.a.g.Z(),k=a.a.g.Z(),l=function(b){var c=this.activeElement;(c=c&&a.a.g.get(c,k))&&c(b)},p=function(b,c){var d=b.ownerDocument;a.a.g.get(d,m)||(a.a.g.set(d,m,!0),a.a.B(d,"selectionchange",l));a.a.g.set(b,k,c)};a.c.textInput={init:function(b,c,k){function l(c,d){a.a.B(b,c,d)}function m(){var d=a.a.f(c());if(null===d||d===n)d="";L!==n&&d===L?a.a.setTimeout(m,4):b.value!==d&&(y=!0,b.value=d,y=!1,v=b.value)}function r(){w||(L=b.value,w=a.a.setTimeout(z,
4))}function z(){clearTimeout(w);L=w=n;var d=b.value;v!==d&&(v=d,a.m.eb(c(),k,"textInput",d))}var v=b.value,w,L,A=9==a.a.W?r:z,y=!1;g&&l("keypress",z);11>g&&l("propertychange",function(a){y||"value"!==a.propertyName||A(a)});8==g&&(l("keyup",z),l("keydown",z));p&&(p(b,A),l("dragend",r));(!g||9<=g)&&l("input",A);5>e&&"textarea"===a.a.R(b)?(l("keydown",r),l("paste",r),l("cut",r)):11>d?l("keydown",r):4>f?(l("DOMAutoComplete",z),l("dragdrop",z),l("drop",z)):h&&"number"===b.type&&l("keydown",r);l("change",
z);l("blur",z);a.o(m,null,{l:b})}};a.m.wa.textInput=!0;a.c.textinput={preprocess:function(a,b,c){c("textInput",a)}}})();a.c.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.c.uniqueName.rd;a.a.Yc(b,d)}}};a.c.uniqueName.rd=0;a.c.using={init:function(b,c,d,e,f){var g;d.has("as")&&(g={as:d.get("as"),noChildContext:d.get("noChildContext")});c=f.createChildContext(c,g);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.using=!0;a.c.value={init:function(b,c,d){var e=a.a.R(b),f="input"==
e;if(!f||"checkbox"!=b.type&&"radio"!=b.type){var g=[],h=d.get("valueUpdate"),m=!1,k=null;h&&("string"==typeof h?g=[h]:g=a.a.wc(h),a.a.Pa(g,"change"));var l=function(){k=null;m=!1;var e=c(),f=a.w.M(b);a.m.eb(e,d,"value",f)};!a.a.W||!f||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.A(g,"propertychange")||(a.a.B(b,"propertychange",function(){m=!0}),a.a.B(b,"focus",function(){m=!1}),a.a.B(b,"blur",function(){m&&l()}));a.a.D(g,function(c){var d=l;a.a.Ud(c,"after")&&
(d=function(){k=a.w.M(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.B(b,c,d)});var p;p=f&&"file"==b.type?function(){var d=a.a.f(c());null===d||d===n||""===d?b.value="":a.u.G(l)}:function(){var f=a.a.f(c()),g=a.w.M(b);if(null!==k&&f===k)a.a.setTimeout(p,0);else if(f!==g||g===n)"select"===e?(g=d.get("valueAllowUnset"),a.w.cb(b,f,g),g||f===a.w.M(b)||a.u.G(l)):a.w.cb(b,f)};if("select"===e){var q;a.i.subscribe(b,a.i.H,function(){q?d.get("valueAllowUnset")?p():l():(a.a.B(b,"change",l),q=a.o(p,null,{l:b}))},
null,{notifyImmediately:!0})}else a.a.B(b,"change",l),a.o(p,null,{l:b})}else a.ib(b,{checkedValue:c})},update:function(){}};a.m.wa.value=!0;a.c.visible={update:function(b,c){var d=a.a.f(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};a.c.hidden={update:function(b,c){a.c.visible.update(b,function(){return!a.a.f(c())})}};(function(b){a.c[b]={init:function(c,d,e,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");
a.ca=function(){};a.ca.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.ca.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.ca.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.C.F(d)}if(1==b.nodeType||8==b.nodeType)return new a.C.ia(b);throw Error("Unknown template type: "+b);};a.ca.prototype.renderTemplate=
function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.ca.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.ca.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.ca);a.kc=function(){function b(b,c,d,h){b=a.m.ac(b);for(var m=a.m.Ra,k=0;k<b.length;k++){var l=b[k].key;if(Object.prototype.hasOwnProperty.call(m,
l)){var p=m[l];if("function"===typeof p){if(l=p(b[k].value))throw Error(l);}else if(!p)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.m.vb(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{xd:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kc.Ld(b,c)},d)},Ld:function(a,f){return a.replace(c,function(a,c,d,e,l){return b(l,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},md:function(b,c){return a.aa.Xb(function(d,h){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.ib(m,b,h)})}}}();a.b("__tr_ambtns",a.kc.md);(function(){a.C={};a.C.F=function(b){if(this.F=b){var c=
a.a.R(b);this.ab="script"===c?1:"textarea"===c?2:"template"==c&&b.content&&11===b.content.nodeType?3:4}};a.C.F.prototype.text=function(){var b=1===this.ab?"text":2===this.ab?"value":"innerHTML";if(0==arguments.length)return this.F[b];var c=arguments[0];"innerHTML"===b?a.a.fc(this.F,c):this.F[b]=c};var b=a.a.g.Z()+"_";a.C.F.prototype.data=function(c){if(1===arguments.length)return a.a.g.get(this.F,b+c);a.a.g.set(this.F,b+c,arguments[1])};var c=a.a.g.Z();a.C.F.prototype.nodes=function(){var b=this.F;
if(0==arguments.length){var e=a.a.g.get(b,c)||{},f=e.lb||(3===this.ab?b.content:4===this.ab?b:n);if(!f||e.jd){var g=this.text();g&&g!==e.bb&&(f=a.a.Md(g,b.ownerDocument),a.a.g.set(b,c,{lb:f,bb:g,jd:!0}))}return f}e=arguments[0];this.ab!==n&&this.text("");a.a.g.set(b,c,{lb:e})};a.C.ia=function(a){this.F=a};a.C.ia.prototype=new a.C.F;a.C.ia.prototype.constructor=a.C.ia;a.C.ia.prototype.text=function(){if(0==arguments.length){var b=a.a.g.get(this.F,c)||{};b.bb===n&&b.lb&&(b.bb=b.lb.innerHTML);return b.bb}a.a.g.set(this.F,
c,{bb:arguments[0]})};a.b("templateSources",a.C);a.b("templateSources.domElement",a.C.F);a.b("templateSources.anonymousTemplate",a.C.ia)})();(function(){function b(b,c,d){var e;for(c=a.h.nextSibling(c);b&&(e=b)!==c;)b=a.h.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=a.ga.instance,m=h.preprocessNode;if(m){b(e,f,function(a,b){var c=a.previousSibling,d=m.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):
(c.push(e,f),a.a.Ua(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.vc(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.aa.cd(b,[d])});a.a.Ua(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,m){m=m||{};var n=(b&&d(b)||f||{}).ownerDocument,B=m.templateEngine||g;a.kc.xd(f,B,n);f=B.renderTemplate(f,h,m,n);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.h.va(b,
f);n=!0;break;case "replaceNode":a.a.Xc(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(c(f,h),m.afterRender&&a.u.G(m.afterRender,null,[f,h[m.as||"$data"]]),"replaceChildren"==e&&a.i.ma(b,a.i.H));return f}function f(b,c,d){return a.O(b)?b():"function"===typeof b?b(c,d):b}var g;a.gc=function(b){if(b!=n&&!(b instanceof a.ca))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.dc=function(b,c,h,m,t){h=h||{};if((h.templateEngine||g)==
n)throw Error("Set a template engine before calling renderTemplate");t=t||"replaceChildren";if(m){var x=d(m);return a.$(function(){var g=c&&c instanceof a.fa?c:new a.fa(c,null,null,null,{exportDependencies:!0}),n=f(b,g.$data,g),g=e(m,t,n,g,h);"replaceNode"==t&&(m=g,x=d(m))},null,{Sa:function(){return!x||!a.a.Sb(x)},l:x&&"replaceNode"==t?x.parentNode:x})}return a.aa.Xb(function(d){a.dc(b,c,h,d,"replaceNode")})};a.Qd=function(b,d,g,h,m){function x(b,c){a.u.G(a.a.ec,null,[h,b,u,g,r,c]);a.i.ma(h,a.i.H)}
function r(a,b){c(b,v);g.afterRender&&g.afterRender(b,a);v=null}function u(a,c){v=m.createChildContext(a,{as:z,noChildContext:g.noChildContext,extend:function(a){a.$index=c;z&&(a[z+"Index"]=c)}});var d=f(b,a,v);return e(h,"ignoreTargetNode",d,v,g)}var v,z=g.as,w=!1===g.includeDestroyed||a.options.foreachHidesDestroyed&&!g.includeDestroyed;if(w||g.beforeRemove||!a.Pc(d))return a.$(function(){var b=a.a.f(d)||[];"undefined"==typeof b.length&&(b=[b]);w&&(b=a.a.jb(b,function(b){return b===n||null===b||
!a.a.f(b._destroy)}));x(b)},null,{l:h});x(d.v());var A=d.subscribe(function(a){x(d(),a)},null,"arrayChange");A.l(h);return A};var h=a.a.g.Z(),m=a.a.g.Z();a.c.template={init:function(b,c){var d=a.a.f(c());if("string"==typeof d||"name"in d)a.h.Ea(b);else if("nodes"in d){d=d.nodes||[];if(a.O(d))throw Error('The "nodes" option must be a plain, non-observable array.');var e=d[0]&&d[0].parentNode;e&&a.a.g.get(e,m)||(e=a.a.Yb(d),a.a.g.set(e,m,!0));(new a.C.ia(b)).nodes(e)}else if(d=a.h.childNodes(b),0<d.length)e=
a.a.Yb(d),(new a.C.ia(b)).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.f(g);d=!0;e=null;"string"==typeof c?c={}:(g="name"in c?c.name:b,"if"in c&&(d=a.a.f(c["if"])),d&&"ifnot"in c&&(d=!a.a.f(c.ifnot)),d&&!g&&(d=!1));"foreach"in c?e=a.Qd(g,d&&c.foreach||[],c,b,f):d?(d=f,"data"in c&&(d=f.createChildContext(c.data,{as:c.as,noChildContext:c.noChildContext,exportDependencies:!0})),
e=a.dc(g,d,c,b)):a.h.Ea(b);f=e;(c=a.a.g.get(b,h))&&"function"==typeof c.s&&c.s();a.a.g.set(b,h,!f||f.ja&&!f.ja()?n:f)}};a.m.Ra.template=function(b){b=a.m.ac(b);return 1==b.length&&b[0].unknown||a.m.Id(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.h.ea.template=!0})();a.b("setTemplateEngine",a.gc);a.b("renderTemplate",a.dc);a.a.Kc=function(a,c,d){if(a.length&&c.length){var e,f,g,h,m;for(e=f=0;(!d||e<d)&&(h=a[f]);++f){for(g=0;m=c[g];++g)if(h.value===
m.value){h.moved=m.index;m.moved=h.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.Pb=function(){function b(b,d,e,f,g){var h=Math.min,m=Math.max,k=[],l,p=b.length,q,n=d.length,r=n-p||1,v=p+n+1,u,w,z;for(l=0;l<=p;l++)for(w=u,k.push(u=[]),z=h(n,l+r),q=m(0,l-1);q<=z;q++)u[q]=q?l?b[l-1]===d[q-1]?w[q-1]:h(w[q]||v,u[q-1]||v)+1:q+1:l+1;h=[];m=[];r=[];l=p;for(q=n;l||q;)n=k[l][q]-1,q&&n===k[l][q-1]?m.push(h[h.length]={status:e,value:d[--q],index:q}):l&&n===k[l-1][q]?r.push(h[h.length]={status:f,value:b[--l],index:l}):
(--q,--l,g.sparse||h.push({status:"retained",value:d[q]}));a.a.Kc(r,m,!g.dontLimitMoves&&10*p);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Pb);(function(){function b(b,c,d,h,m){var k=[],l=a.$(function(){var l=c(d,m,a.a.Ua(k,b))||[];0<k.length&&(a.a.Xc(k,l),h&&a.u.G(h,null,[d,l,m]));k.length=0;a.a.Nb(k,l)},null,{l:b,Sa:function(){return!a.a.kd(k)}});
return{Y:k,$:l.ja()?l:n}}var c=a.a.g.Z(),d=a.a.g.Z();a.a.ec=function(e,f,g,h,m,k){function l(b){y={Aa:b,pb:a.ta(w++)};v.push(y);r||F.push(y)}function p(b){y=t[b];w!==y.pb.v()&&D.push(y);y.pb(w++);a.a.Ua(y.Y,e);v.push(y)}function q(b,c){if(b)for(var d=0,e=c.length;d<e;d++)a.a.D(c[d].Y,function(a){b(a,d,c[d].Aa)})}f=f||[];"undefined"==typeof f.length&&(f=[f]);h=h||{};var t=a.a.g.get(e,c),r=!t,v=[],u=0,w=0,z=[],A=[],C=[],D=[],F=[],y,I=0;if(r)a.a.D(f,l);else{if(!k||t&&t._countWaitingForRemove){var E=
a.a.Mb(t,function(a){return a.Aa});k=a.a.Pb(E,f,{dontLimitMoves:h.dontLimitMoves,sparse:!0})}for(var E=0,G,H,K;G=k[E];E++)switch(H=G.moved,K=G.index,G.status){case "deleted":for(;u<K;)p(u++);H===n&&(y=t[u],y.$&&(y.$.s(),y.$=n),a.a.Ua(y.Y,e).length&&(h.beforeRemove&&(v.push(y),I++,y.Aa===d?y=null:C.push(y)),y&&z.push.apply(z,y.Y)));u++;break;case "added":for(;w<K;)p(u++);H!==n?(A.push(v.length),p(H)):l(G.value)}for(;w<f.length;)p(u++);v._countWaitingForRemove=I}a.a.g.set(e,c,v);q(h.beforeMove,D);a.a.D(z,
h.beforeRemove?a.oa:a.removeNode);var M,O,P;try{P=e.ownerDocument.activeElement}catch(N){}if(A.length)for(;(E=A.shift())!=n;){y=v[E];for(M=n;E;)if((O=v[--E].Y)&&O.length){M=O[O.length-1];break}for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M)}for(E=0;y=v[E];E++){y.Y||a.a.extend(y,b(e,g,y.Aa,m,y.pb));for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M);!y.Ed&&m&&(m(y.Aa,y.Y,y.pb),y.Ed=!0,M=y.Y[y.Y.length-1])}P&&e.ownerDocument.activeElement!=P&&P.focus();q(h.beforeRemove,C);for(E=0;E<C.length;++E)C[E].Aa=d;q(h.afterMove,D);
q(h.afterAdd,F)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.ec);a.ba=function(){this.allowTemplateRewriting=!1};a.ba.prototype=new a.ca;a.ba.prototype.constructor=a.ba;a.ba.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.W?0:b.nodes)?b.nodes():null)return a.a.la(c.cloneNode(!0).childNodes);b=b.text();return a.a.ua(b,e)};a.ba.Ma=new a.ba;a.gc(a.ba.Ma);a.b("nativeTemplateEngine",a.ba);(function(){a.$a=function(){var a=this.Hd=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();
this.renderTemplateSource=function(b,e,f,g){g=g||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=v.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(h,b,e);e.appendTo(g.createElement("div"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(v.tmpl.tag.ko_code={open:"__.push($1 || '');"},v.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.$a.prototype=new a.ca;a.$a.prototype.constructor=a.$a;var b=new a.$a;0<b.Hd&&a.gc(b);a.b("jqueryTmplTemplateEngine",a.$a)})()})})();})();


/***/ }),

/***/ "./src/classes/bag.ts":
/*!****************************!*\
  !*** ./src/classes/bag.ts ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore-umd.js"), __webpack_require__(/*! ../constants */ "./src/constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Bag = void 0;
    _ = __importStar(_);
    var Bag = /** @class */ (function () {
        function Bag() {
            this.letters = constants_1.startingBagLetters.slice();
        }
        Bag.prototype.count = function () {
            return this.letters.length;
        };
        Bag.prototype.draw = function (count) {
            this.letters = _.shuffle(this.letters);
            return this.letters.splice(0, count);
        };
        Bag.prototype.swap = function (letters) {
            var drawn = this.draw(letters.length);
            // Ensure we can't receive more than we give (end of game scenario).
            this.add(letters.slice(0, drawn.length));
            // If attempting to exchange for more than is possible, give
            // them back their extra letters.
            if (letters.length > drawn.length)
                return drawn.concat(letters.slice(drawn.length));
            return drawn;
        };
        Bag.prototype.remove = function (letters) {
            var _this = this;
            letters.forEach(function (letter) {
                var index = _this.letters.indexOf(letter);
                if (index > -1)
                    _this.letters.splice(index, 1);
            });
        };
        Bag.prototype.add = function (letters) {
            var _a;
            (_a = this.letters).push.apply(_a, letters);
        };
        Bag.prototype.isEmpty = function () {
            return this.letters.length === 0;
        };
        Bag.prototype.totalPoints = function () {
            return this.letters.reduce(function (sum, c) { return sum + constants_1.letterValueMap[c]; }, 0);
        };
        Bag.prototype.print = function () {
            return ("(" + this.count() + ") " +
                JSON.stringify(_.countBy(this.letters.sort())).slice(1, -1));
        };
        Bag.prototype.toJSON = function () {
            return this.letters.slice();
        };
        return Bag;
    }());
    exports.Bag = Bag;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/classes/game.ts":
/*!*****************************!*\
  !*** ./src/classes/game.ts ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore-umd.js"), __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js"), __webpack_require__(/*! ../enums/actiontype */ "./src/enums/actiontype.ts"), __webpack_require__(/*! ../functions/parseplaycommand */ "./src/functions/parseplaycommand.ts"), __webpack_require__(/*! ../functions/playmove */ "./src/functions/playmove.ts"), __webpack_require__(/*! ../functions/printboard */ "./src/functions/printboard.ts"), __webpack_require__(/*! ../functions/parseletter */ "./src/functions/parseletter.ts"), __webpack_require__(/*! ../functions/getnextturn */ "./src/functions/getnextturn.ts"), __webpack_require__(/*! ../functions/getturnfromactions */ "./src/functions/getturnfromactions.ts"), __webpack_require__(/*! ../functions/getscoresfromactions */ "./src/functions/getscoresfromactions.ts"), __webpack_require__(/*! ../functions/getmovelogfromactions */ "./src/functions/getmovelogfromactions.ts"), __webpack_require__(/*! ../functions/parseaction */ "./src/functions/parseaction.ts"), __webpack_require__(/*! ../functions/createboardfromactions */ "./src/functions/createboardfromactions.ts"), __webpack_require__(/*! ../functions/createbagfromactions */ "./src/functions/createbagfromactions.ts"), __webpack_require__(/*! ../functions/playcommandhaslettersfromrack */ "./src/functions/playcommandhaslettersfromrack.ts"), __webpack_require__(/*! ../functions/createrackfromactions */ "./src/functions/createrackfromactions.ts"), __webpack_require__(/*! ../functions/createracksfromactions */ "./src/functions/createracksfromactions.ts"), __webpack_require__(/*! ../constants */ "./src/constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _, ko, actiontype_1, parseplaycommand_1, playmove_1, printboard_1, parseletter_1, getnextturn_1, getturnfromactions_1, getscoresfromactions_1, getmovelogfromactions_1, parseaction_1, createboardfromactions_1, createbagfromactions_1, playcommandhaslettersfromrack_1, createrackfromactions_1, createracksfromactions_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Game = void 0;
    _ = __importStar(_);
    ko = __importStar(ko);
    var Game = /** @class */ (function () {
        function Game(gameJson) {
            this.id = _.now().toString(36);
            this.teams = 2;
            /** Raw action strings */
            this.actions = [];
            this.actionIndex = -1;
            if (gameJson) {
                this.id = gameJson.id;
                this.teams = gameJson.teams;
                this.actions = gameJson.actions;
                this.actionIndex = gameJson.actionIndex;
            }
            this.currentState = ko.observable(this.snapshot());
            this.currentStatus = ko.observable(this.status());
            if (!gameJson) {
                this._handleAction(actiontype_1.ActionType.NewGame);
            }
        }
        Game.prototype.snapshot = function () {
            return {
                id: this.id,
                teams: this.teams,
                actions: this.actions,
                actionIndex: this.actionIndex,
            };
        };
        Game.prototype.status = function () {
            return {
                bag: this._bag().toJSON(),
                board: this._board().map(function (row) {
                    return row.map(function (sq) { return sq.blankLetter || sq.letter; });
                }),
                racks: createracksfromactions_1.createRacksFromActions(this._nonFutureActions(), this.teams).map(function (r) { return r.toJSON(); }),
                scores: getscoresfromactions_1.getScoresFromActions(this._nonFutureActions(), this.teams),
                teamTurn: this._teamTurn(),
                moveLog: getmovelogfromactions_1.getMoveLogFromActions(this._nonFutureActions(), this.teams),
                gameOver: parseaction_1.parseAction(this.actions[this.actionIndex])[0] ==
                    actiontype_1.ActionType.EndGame,
            };
        };
        Game.prototype.draw = function () {
            var drawn = this._draw();
            if (drawn.length > 0) {
                this._handleAction(actiontype_1.ActionType.Draw, actiontype_1.ActionType.Draw + " " + drawn.join(""));
            }
        };
        Game.prototype.skip = function () {
            this._handleAction(actiontype_1.ActionType.Skip);
        };
        Game.prototype.swap = function (actionRaw) {
            actionRaw = this._swap(actionRaw);
            this._handleAction(actiontype_1.ActionType.Swap, actionRaw);
        };
        Game.prototype.play = function (actionRaw) {
            var command = parseaction_1.parseAction(actionRaw)[1];
            var errorMessage = this._play(command);
            if (errorMessage) {
                // Check for if we are in the browser v. node
                if (typeof process !== "undefined") {
                    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                    console.log("!!!! Error: " + errorMessage);
                    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                }
                else {
                    alert(errorMessage);
                }
            }
            else
                this._handleAction(actiontype_1.ActionType.Play, actionRaw);
            if (!this._canGameContinue()) {
                this._handleAction(actiontype_1.ActionType.EndGame, actiontype_1.ActionType.EndGame + " " + this._bag().totalPoints());
            }
        };
        Game.prototype.undo = function () {
            this._handleAction(actiontype_1.ActionType.Undo);
        };
        Game.prototype.redo = function () {
            this._handleAction(actiontype_1.ActionType.Redo);
        };
        Game.prototype.print = function () {
            var _this = this;
            console.log("Tiles remaining in bag " + this._bag().print());
            console.log(printboard_1.printBoard(this._board()));
            this.actions.forEach(function (action, i) {
                if (i === _this.actionIndex)
                    action += " <<<";
                console.log(i + 1 + ". " + action);
            });
            console.log("It's team " + this._teamTurn() + "'s turn");
            console.log("Current letters: " + this._teamTurnRack().print());
        };
        Game.prototype.load = function (gameJson) {
            this.id = gameJson.id;
            this.teams = gameJson.teams;
            this.actions = gameJson.actions;
            this.actionIndex = gameJson.actionIndex;
            this.currentState(this.snapshot());
            this.currentStatus(this.status());
        };
        Game.prototype._handleAction = function (actionType, actionRaw) {
            switch (actionType) {
                case actiontype_1.ActionType.NewGame:
                case actiontype_1.ActionType.Draw:
                case actiontype_1.ActionType.Skip:
                case actiontype_1.ActionType.Swap:
                case actiontype_1.ActionType.Play:
                case actiontype_1.ActionType.EndGame:
                    // In order to overwrite any previous states (after undo)
                    this.actions.length = this.actionIndex + 1;
                    this.actions.push(actionRaw || actionType);
                    this.actionIndex++;
                    break;
                case actiontype_1.ActionType.Undo:
                    this.actionIndex = Math.max(this.actionIndex - 1, 0);
                    break;
                case actiontype_1.ActionType.Redo:
                    this.actionIndex = Math.min(this.actionIndex + 1, this.actions.length - 1);
                    break;
            }
            this.currentState(this.snapshot());
            this.currentStatus(this.status());
        };
        Game.prototype._nonFutureActions = function () {
            return this.actions.slice(0, this.actionIndex + 1);
        };
        Game.prototype._bag = function () {
            return createbagfromactions_1.createBagFromActions(this._nonFutureActions());
        };
        Game.prototype._board = function () {
            return createboardfromactions_1.createBoardFromActions(this._nonFutureActions());
        };
        Game.prototype._teamTurn = function () {
            return getturnfromactions_1.getTurnFromActions(this._nonFutureActions(), this.teams);
        };
        Game.prototype._teamTurnRack = function () {
            return createrackfromactions_1.createRackFromActions(this._nonFutureActions(), this.teams);
        };
        Game.prototype._teamPreviousRack = function () {
            return createracksfromactions_1.createRacksFromActions(this._nonFutureActions(), this.teams)[getnextturn_1.getNextTurn(this.teams, this._teamTurn(), true) - 1];
        };
        Game.prototype._draw = function () {
            var rack = this._teamTurnRack();
            var drawn = this._bag().draw(rack.needs());
            rack.add(drawn);
            return drawn;
        };
        /** @returns raw action containing drawn letters as well as exchanged letters */
        Game.prototype._swap = function (actionRaw) {
            var letters = parseaction_1.parseAction(actionRaw)[1].split("").map(parseletter_1.parseLetter);
            var rack = this._teamTurnRack();
            var uniqRackLetters = _.unique(rack.letters);
            var uniqSwapLetters = _.unique(letters);
            if (letters.length > constants_1.MAX_RACK_TILES ||
                // Check if the player is attempting to swap letters they don't have.
                _.intersection(uniqRackLetters, uniqSwapLetters).length !=
                    uniqSwapLetters.length) {
                throw new Error("You're trying to swap letters you don't have");
            }
            var bag = this._bag();
            // Prevent swapping for more than is in the bag.
            if (letters.length > bag.count())
                letters.length = bag.count();
            rack.remove(letters);
            var newLetters = bag.swap(letters);
            rack.add(newLetters);
            return actiontype_1.ActionType.Swap + " " + letters.join("") + " " + newLetters.join("");
        };
        Game.prototype._play = function (command) {
            var move;
            try {
                move = parseplaycommand_1.parsePlayCommand(command);
            }
            catch (err) {
                return err.message;
            }
            var rack = this._teamTurnRack();
            // Simple check
            var isValid = playcommandhaslettersfromrack_1.playCommandHasLettersFromRack(move, rack.letters);
            if (!isValid)
                return "Word doesn't use letters from rack (1)";
            try {
                var result = playmove_1.playMove(move, this._board());
                var owned = rack.letters.slice();
                var used = result.usedLetters.slice();
                var letter = void 0;
                while ((letter = used.pop())) {
                    var i = owned.indexOf(letter);
                    if (i === -1)
                        return "Word doesn't use letters from rack (2)";
                    owned.splice(i, 1);
                }
                return "";
            }
            catch (err) {
                throw err;
                //return err.message;
            }
        };
        Game.prototype._canGameContinue = function () {
            var previousTurnRackIndex = getnextturn_1.getNextTurn(this.teams, this._teamTurn(), true) - 1;
            var otherTeamsRacks = createracksfromactions_1.createRacksFromActions(this._nonFutureActions(), this.teams);
            otherTeamsRacks.splice(previousTurnRackIndex, 1);
            var otherTeamsRackNeeds = otherTeamsRacks.reduce(function (sum, c) { return sum + c.needs(); }, 0);
            if (
            // IF the team who just went played all of their tiles
            this._teamPreviousRack().isEmpty() &&
                // AND the bag is empty
                // OR the team who just went won't get a chance to draw again
                (this._bag().isEmpty() || this._bag().count() < otherTeamsRackNeeds))
                return false;
            return true;
        };
        return Game;
    }());
    exports.Game = Game;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/classes/rack.ts":
/*!*****************************!*\
  !*** ./src/classes/rack.ts ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../constants */ "./src/constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Rack = void 0;
    var Rack = /** @class */ (function () {
        function Rack() {
            this.letters = [];
        }
        Rack.prototype.count = function () {
            return this.letters.length;
        };
        Rack.prototype.needs = function () {
            return constants_1.MAX_RACK_TILES - this.count();
        };
        Rack.prototype.add = function (letters) {
            for (var i = 0; i < letters.length && this.letters.length <= constants_1.MAX_RACK_TILES; i++)
                this.letters.push(letters[i]);
        };
        Rack.prototype.remove = function (letters) {
            for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
                var letter = letters_1[_i];
                var existingIndex = this.letters.indexOf(letter);
                if (existingIndex > -1)
                    this.letters.splice(existingIndex, 1);
            }
        };
        Rack.prototype.totalPoints = function () {
            return this.letters.reduce(function (sum, c) { return sum + constants_1.letterValueMap[c]; }, 0);
        };
        Rack.prototype.isEmpty = function () {
            return this.letters.length === 0;
        };
        Rack.prototype.print = function () {
            return "[" + this.letters.join("") + "]";
        };
        Rack.prototype.toJSON = function () {
            return this.letters.slice();
        };
        return Rack;
    }());
    exports.Rack = Rack;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore-umd.js"), __webpack_require__(/*! ./enums/letter */ "./src/enums/letter.ts"), __webpack_require__(/*! ./enums/multiplier */ "./src/enums/multiplier.ts"), __webpack_require__(/*! ./enums/multipliertype */ "./src/enums/multipliertype.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _, letter_1, multiplier_1, multipliertype_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.coordinatesToMultiplierType = exports.coordinatesToMultiplier = exports.letterValueMap = exports.startingBagLetters = exports.emptyBoard = exports.coordinateChars = exports.BOARD_Y_LENGTH = exports.BOARD_X_LENGTH = exports.MAX_RACK_TILES = void 0;
    _ = __importStar(_);
    exports.MAX_RACK_TILES = 7;
    exports.BOARD_X_LENGTH = 15;
    exports.BOARD_Y_LENGTH = 15;
    exports.coordinateChars = "ABCDEFGHIJKLMNO";
    exports.emptyBoard = "\n   A B C D E F G H I J K L M N O\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 1| | | | | | | | | | | | | | | |0\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 2| | | | | | | | | | | | | | | |1\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 3| | | | | | | | | | | | | | | |2\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 4| | | | | | | | | | | | | | | |3\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 5| | | | | | | | | | | | | | | |4\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 6| | | | | | | | | | | | | | | |5\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 7| | | | | | | | | | | | | | | |6\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 8| | | | | | | | | | | | | | | |7\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 9| | | | | | | | | | | | | | | |8\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n10| | | | | | | | | | | | | | | |9\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n11| | | | | | | | | | | | | | | |10\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n12| | | | | | | | | | | | | | | |11\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n13| | | | | | | | | | | | | | | |12\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n14| | | | | | | | | | | | | | | |13\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n15| | | | | | | | | | | | | | | |14\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4\n";
    exports.startingBagLetters = _.flatten([
        _.times(2, function () { return letter_1.Letter.BLANK; }),
        _.times(9, function () { return letter_1.Letter.A; }),
        _.times(2, function () { return letter_1.Letter.B; }),
        _.times(2, function () { return letter_1.Letter.C; }),
        _.times(4, function () { return letter_1.Letter.D; }),
        _.times(12, function () { return letter_1.Letter.E; }),
        _.times(2, function () { return letter_1.Letter.F; }),
        _.times(3, function () { return letter_1.Letter.G; }),
        _.times(2, function () { return letter_1.Letter.H; }),
        _.times(9, function () { return letter_1.Letter.I; }),
        _.times(1, function () { return letter_1.Letter.J; }),
        _.times(1, function () { return letter_1.Letter.K; }),
        _.times(4, function () { return letter_1.Letter.L; }),
        _.times(2, function () { return letter_1.Letter.M; }),
        _.times(6, function () { return letter_1.Letter.N; }),
        _.times(8, function () { return letter_1.Letter.O; }),
        _.times(2, function () { return letter_1.Letter.P; }),
        _.times(1, function () { return letter_1.Letter.Q; }),
        _.times(6, function () { return letter_1.Letter.R; }),
        _.times(4, function () { return letter_1.Letter.S; }),
        _.times(6, function () { return letter_1.Letter.T; }),
        _.times(4, function () { return letter_1.Letter.U; }),
        _.times(2, function () { return letter_1.Letter.V; }),
        _.times(2, function () { return letter_1.Letter.W; }),
        _.times(1, function () { return letter_1.Letter.X; }),
        _.times(2, function () { return letter_1.Letter.Y; }),
        _.times(1, function () { return letter_1.Letter.Z; }),
    ]);
    exports.letterValueMap = (_a = {},
        _a[letter_1.Letter.UNSET] = 0,
        _a[letter_1.Letter.BLANK] = 0,
        _a[letter_1.Letter.A] = 1,
        _a[letter_1.Letter.B] = 3,
        _a[letter_1.Letter.C] = 3,
        _a[letter_1.Letter.D] = 2,
        _a[letter_1.Letter.E] = 1,
        _a[letter_1.Letter.F] = 4,
        _a[letter_1.Letter.G] = 2,
        _a[letter_1.Letter.H] = 4,
        _a[letter_1.Letter.I] = 1,
        _a[letter_1.Letter.J] = 8,
        _a[letter_1.Letter.K] = 5,
        _a[letter_1.Letter.L] = 1,
        _a[letter_1.Letter.M] = 3,
        _a[letter_1.Letter.N] = 1,
        _a[letter_1.Letter.O] = 1,
        _a[letter_1.Letter.P] = 3,
        _a[letter_1.Letter.Q] = 10,
        _a[letter_1.Letter.R] = 1,
        _a[letter_1.Letter.S] = 1,
        _a[letter_1.Letter.T] = 1,
        _a[letter_1.Letter.U] = 1,
        _a[letter_1.Letter.V] = 4,
        _a[letter_1.Letter.W] = 4,
        _a[letter_1.Letter.X] = 8,
        _a[letter_1.Letter.Y] = 4,
        _a[letter_1.Letter.Z] = 10,
        _a);
    exports.coordinatesToMultiplier = {
        // Triple words
        A1: multiplier_1.Multiplier.Triple,
        H1: multiplier_1.Multiplier.Triple,
        O1: multiplier_1.Multiplier.Triple,
        A8: multiplier_1.Multiplier.Triple,
        O8: multiplier_1.Multiplier.Triple,
        A15: multiplier_1.Multiplier.Triple,
        H15: multiplier_1.Multiplier.Triple,
        O15: multiplier_1.Multiplier.Triple,
        // Double words
        B2: multiplier_1.Multiplier.Double,
        N2: multiplier_1.Multiplier.Double,
        C3: multiplier_1.Multiplier.Double,
        M3: multiplier_1.Multiplier.Double,
        D4: multiplier_1.Multiplier.Double,
        L4: multiplier_1.Multiplier.Double,
        E5: multiplier_1.Multiplier.Double,
        K5: multiplier_1.Multiplier.Double,
        H8: multiplier_1.Multiplier.Double,
        E11: multiplier_1.Multiplier.Double,
        K11: multiplier_1.Multiplier.Double,
        D12: multiplier_1.Multiplier.Double,
        L12: multiplier_1.Multiplier.Double,
        C13: multiplier_1.Multiplier.Double,
        M13: multiplier_1.Multiplier.Double,
        B14: multiplier_1.Multiplier.Double,
        N14: multiplier_1.Multiplier.Double,
        // Triple letters
        F2: multiplier_1.Multiplier.Triple,
        J2: multiplier_1.Multiplier.Triple,
        B6: multiplier_1.Multiplier.Triple,
        F6: multiplier_1.Multiplier.Triple,
        J6: multiplier_1.Multiplier.Triple,
        N6: multiplier_1.Multiplier.Triple,
        B10: multiplier_1.Multiplier.Triple,
        F10: multiplier_1.Multiplier.Triple,
        J10: multiplier_1.Multiplier.Triple,
        N10: multiplier_1.Multiplier.Triple,
        F14: multiplier_1.Multiplier.Triple,
        J14: multiplier_1.Multiplier.Triple,
        // Double letters
        D1: multiplier_1.Multiplier.Double,
        L1: multiplier_1.Multiplier.Double,
        G3: multiplier_1.Multiplier.Double,
        I3: multiplier_1.Multiplier.Double,
        A4: multiplier_1.Multiplier.Double,
        H4: multiplier_1.Multiplier.Double,
        O4: multiplier_1.Multiplier.Double,
        C7: multiplier_1.Multiplier.Double,
        G7: multiplier_1.Multiplier.Double,
        I7: multiplier_1.Multiplier.Double,
        M7: multiplier_1.Multiplier.Double,
        D8: multiplier_1.Multiplier.Double,
        L8: multiplier_1.Multiplier.Double,
        C9: multiplier_1.Multiplier.Double,
        G9: multiplier_1.Multiplier.Double,
        I9: multiplier_1.Multiplier.Double,
        M9: multiplier_1.Multiplier.Double,
        A12: multiplier_1.Multiplier.Double,
        H12: multiplier_1.Multiplier.Double,
        O12: multiplier_1.Multiplier.Double,
        G13: multiplier_1.Multiplier.Double,
        I13: multiplier_1.Multiplier.Double,
        D15: multiplier_1.Multiplier.Double,
        L15: multiplier_1.Multiplier.Double,
    };
    exports.coordinatesToMultiplierType = {
        // Triple words
        A1: multipliertype_1.MultiplierType.Word,
        H1: multipliertype_1.MultiplierType.Word,
        O1: multipliertype_1.MultiplierType.Word,
        A8: multipliertype_1.MultiplierType.Word,
        O8: multipliertype_1.MultiplierType.Word,
        A15: multipliertype_1.MultiplierType.Word,
        H15: multipliertype_1.MultiplierType.Word,
        O15: multipliertype_1.MultiplierType.Word,
        // Double words
        B2: multipliertype_1.MultiplierType.Word,
        N2: multipliertype_1.MultiplierType.Word,
        C3: multipliertype_1.MultiplierType.Word,
        M3: multipliertype_1.MultiplierType.Word,
        D4: multipliertype_1.MultiplierType.Word,
        L4: multipliertype_1.MultiplierType.Word,
        E5: multipliertype_1.MultiplierType.Word,
        K5: multipliertype_1.MultiplierType.Word,
        H8: multipliertype_1.MultiplierType.Word,
        E11: multipliertype_1.MultiplierType.Word,
        K11: multipliertype_1.MultiplierType.Word,
        D12: multipliertype_1.MultiplierType.Word,
        L12: multipliertype_1.MultiplierType.Word,
        C13: multipliertype_1.MultiplierType.Word,
        M13: multipliertype_1.MultiplierType.Word,
        B14: multipliertype_1.MultiplierType.Word,
        N14: multipliertype_1.MultiplierType.Word,
        // Triple letters
        F2: multipliertype_1.MultiplierType.Letter,
        J2: multipliertype_1.MultiplierType.Letter,
        B6: multipliertype_1.MultiplierType.Letter,
        F6: multipliertype_1.MultiplierType.Letter,
        J6: multipliertype_1.MultiplierType.Letter,
        N6: multipliertype_1.MultiplierType.Letter,
        B10: multipliertype_1.MultiplierType.Letter,
        F10: multipliertype_1.MultiplierType.Letter,
        J10: multipliertype_1.MultiplierType.Letter,
        N10: multipliertype_1.MultiplierType.Letter,
        F14: multipliertype_1.MultiplierType.Letter,
        J14: multipliertype_1.MultiplierType.Letter,
        // Double letters
        D1: multipliertype_1.MultiplierType.Letter,
        L1: multipliertype_1.MultiplierType.Letter,
        G3: multipliertype_1.MultiplierType.Letter,
        I3: multipliertype_1.MultiplierType.Letter,
        A4: multipliertype_1.MultiplierType.Letter,
        H4: multipliertype_1.MultiplierType.Letter,
        O4: multipliertype_1.MultiplierType.Letter,
        C7: multipliertype_1.MultiplierType.Letter,
        G7: multipliertype_1.MultiplierType.Letter,
        I7: multipliertype_1.MultiplierType.Letter,
        M7: multipliertype_1.MultiplierType.Letter,
        D8: multipliertype_1.MultiplierType.Letter,
        L8: multipliertype_1.MultiplierType.Letter,
        C9: multipliertype_1.MultiplierType.Letter,
        G9: multipliertype_1.MultiplierType.Letter,
        I9: multipliertype_1.MultiplierType.Letter,
        M9: multipliertype_1.MultiplierType.Letter,
        A12: multipliertype_1.MultiplierType.Letter,
        H12: multipliertype_1.MultiplierType.Letter,
        O12: multipliertype_1.MultiplierType.Letter,
        G13: multipliertype_1.MultiplierType.Letter,
        I13: multipliertype_1.MultiplierType.Letter,
        D15: multipliertype_1.MultiplierType.Letter,
        L15: multipliertype_1.MultiplierType.Letter,
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/enums/actiontype.ts":
/*!*********************************!*\
  !*** ./src/enums/actiontype.ts ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.ActionType = void 0;
    var ActionType;
    (function (ActionType) {
        ActionType["Play"] = "PLAY";
        ActionType["Skip"] = "SKIP";
        ActionType["Swap"] = "SWAP";
        ActionType["Draw"] = "DRAW";
        /** Doesn't get added to `actions` array */
        ActionType["Undo"] = "UNDO";
        /** Doesn't get added to `actions` array */
        ActionType["Redo"] = "REDO";
        ActionType["NewGame"] = "NEW_GAME";
        ActionType["EndGame"] = "GAME_OVER";
    })(ActionType = exports.ActionType || (exports.ActionType = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/enums/letter.ts":
/*!*****************************!*\
  !*** ./src/enums/letter.ts ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Letter = void 0;
    var Letter;
    (function (Letter) {
        Letter["UNSET"] = "";
        Letter["BLANK"] = "?";
        Letter["A"] = "A";
        Letter["B"] = "B";
        Letter["C"] = "C";
        Letter["D"] = "D";
        Letter["E"] = "E";
        Letter["F"] = "F";
        Letter["G"] = "G";
        Letter["H"] = "H";
        Letter["I"] = "I";
        Letter["J"] = "J";
        Letter["K"] = "K";
        Letter["L"] = "L";
        Letter["M"] = "M";
        Letter["N"] = "N";
        Letter["O"] = "O";
        Letter["P"] = "P";
        Letter["Q"] = "Q";
        Letter["R"] = "R";
        Letter["S"] = "S";
        Letter["T"] = "T";
        Letter["U"] = "U";
        Letter["V"] = "V";
        Letter["W"] = "W";
        Letter["X"] = "X";
        Letter["Y"] = "Y";
        Letter["Z"] = "Z";
    })(Letter = exports.Letter || (exports.Letter = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/enums/multiplier.ts":
/*!*********************************!*\
  !*** ./src/enums/multiplier.ts ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Multiplier = void 0;
    var Multiplier;
    (function (Multiplier) {
        Multiplier[Multiplier["None"] = 0] = "None";
        Multiplier[Multiplier["Single"] = 1] = "Single";
        Multiplier[Multiplier["Double"] = 2] = "Double";
        Multiplier[Multiplier["Triple"] = 3] = "Triple";
    })(Multiplier = exports.Multiplier || (exports.Multiplier = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/enums/multipliertype.ts":
/*!*************************************!*\
  !*** ./src/enums/multipliertype.ts ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.MultiplierType = void 0;
    var MultiplierType;
    (function (MultiplierType) {
        MultiplierType["None"] = "";
        MultiplierType["Letter"] = "letter";
        MultiplierType["Word"] = "word";
    })(MultiplierType = exports.MultiplierType || (exports.MultiplierType = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/actionchangesturn.ts":
/*!********************************************!*\
  !*** ./src/functions/actionchangesturn.ts ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../enums/actiontype */ "./src/enums/actiontype.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, actiontype_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.actionChangesTurn = void 0;
    function actionChangesTurn(actionType) {
        switch (actionType) {
            case actiontype_1.ActionType.Play:
            case actiontype_1.ActionType.Skip:
            case actiontype_1.ActionType.Swap:
                return true;
            default:
                return false;
        }
    }
    exports.actionChangesTurn = actionChangesTurn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/createbagfromactions.ts":
/*!***********************************************!*\
  !*** ./src/functions/createbagfromactions.ts ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../classes/bag */ "./src/classes/bag.ts"), __webpack_require__(/*! ./parseaction */ "./src/functions/parseaction.ts"), __webpack_require__(/*! ./parseletter */ "./src/functions/parseletter.ts"), __webpack_require__(/*! ../enums/actiontype */ "./src/enums/actiontype.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, bag_1, parseaction_1, parseletter_1, actiontype_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createBagFromActions = void 0;
    function createBagFromActions(actions) {
        var bag = new bag_1.Bag();
        actions.forEach(function (raw) {
            var _a = parseaction_1.parseAction(raw), actionType = _a[0], commandPart = _a[1];
            switch (actionType) {
                case actiontype_1.ActionType.Draw:
                    var letters = commandPart.split("").map(parseletter_1.parseLetter);
                    bag.remove(letters);
                    break;
                case actiontype_1.ActionType.Swap:
                    // A swap command looks like: "SWAP ABC DEF".
                    // "SWAP" is the action
                    // "ABC DEF" is the command part
                    // "ABC" are the letters being exchanged
                    // "DEF" are the letters being drawn
                    var _b = commandPart.split(" "), sExchanged = _b[0], sDrawn = _b[1];
                    var exchanged = sExchanged.split("").map(parseletter_1.parseLetter);
                    var drawn = sDrawn.split("").map(parseletter_1.parseLetter);
                    bag.remove(drawn);
                    bag.add(exchanged);
                    break;
                default:
                    break;
            }
        });
        return bag;
    }
    exports.createBagFromActions = createBagFromActions;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/createboardfromactions.ts":
/*!*************************************************!*\
  !*** ./src/functions/createboardfromactions.ts ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./createnewboard */ "./src/functions/createnewboard.ts"), __webpack_require__(/*! ./parseplaycommand */ "./src/functions/parseplaycommand.ts"), __webpack_require__(/*! ./parseaction */ "./src/functions/parseaction.ts"), __webpack_require__(/*! ./playmove */ "./src/functions/playmove.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, createnewboard_1, parseplaycommand_1, parseaction_1, playmove_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createBoardFromActions = void 0;
    function createBoardFromActions(actions) {
        var board = createnewboard_1.createNewBoard();
        actions
            // Hacky way of filtering to all PLAY actions
            .filter(function (act) { return act.search(/PLAY /i) === 0; })
            .map(function (act) { return parseaction_1.parseAction(act)[1]; })
            .forEach(function (cmd) {
            var move = parseplaycommand_1.parsePlayCommand(cmd);
            var result = playmove_1.playMove(move, board);
            board = result.board;
        });
        return board;
    }
    exports.createBoardFromActions = createBoardFromActions;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/createnewboard.ts":
/*!*****************************************!*\
  !*** ./src/functions/createnewboard.ts ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./parseboard */ "./src/functions/parseboard.ts"), __webpack_require__(/*! ../constants */ "./src/constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parseboard_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createNewBoard = void 0;
    function createNewBoard() {
        return parseboard_1.parseBoard(constants_1.emptyBoard);
    }
    exports.createNewBoard = createNewBoard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/createplaycommand.ts":
/*!********************************************!*\
  !*** ./src/functions/createplaycommand.ts ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore-umd.js"), __webpack_require__(/*! ../constants */ "./src/constants.ts"), __webpack_require__(/*! ./parsesquarecoordinates */ "./src/functions/parsesquarecoordinates.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _, constants_1, parsesquarecoordinates_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createPlayCommand = void 0;
    _ = __importStar(_);
    /**
     * This function is for a UI implementation to create a play command.
     * It is expected that the UI context would only have knowledge of the letters
     * being played, and the letters on the board.
     * From that, we have to determine what the official "move" is.
     */
    function createPlayCommand(move, board) {
        // First check that all of the squares from the move are in the same row or col
        var sameCol = _.unique(move.map(function (sq) { return parsesquarecoordinates_1.parseSquareCoordinates(sq)[0]; })).length == 1;
        var sameRow = _.unique(move.map(function (sq) { return parsesquarecoordinates_1.parseSquareCoordinates(sq)[1]; })).length == 1;
        if (!sameRow && !sameCol)
            throw new Error("Move letters weren't placed on the same row or column");
        var word = "";
        var passedFirst = false;
        var passedLast = false;
        var started = false;
        var startingCoord = 0;
        if (sameRow) {
            var y = parsesquarecoordinates_1.parseSquareCoordinates(move[0])[1];
            var sorted = _.sortBy(move, function (sq) { return parsesquarecoordinates_1.parseSquareCoordinates(sq)[1]; });
            var first = sorted[0];
            var last = _.last(sorted);
            var _loop_1 = function (x) {
                var sq = board[y][x];
                // Does the square consist of a letter?
                if (sq.played || move.some(function (m) { return m.id === sq.id; })) {
                    if (!started) {
                        started = true;
                        startingCoord = x;
                        word = "";
                    }
                    word += sq.blankLetter
                        ? sq.blankLetter.toLowerCase()
                        : sq.letter;
                    if (!passedFirst && sq.id === first.id)
                        passedFirst = true;
                    if (!passedLast && sq.id === last.id)
                        passedLast = true;
                }
                else if (started) {
                    if (passedFirst && passedLast)
                        return { value: word + " " + (constants_1.coordinateChars.charAt(startingCoord) + (y + 1)) + " H" };
                    if (passedFirst || passedLast)
                        throw new Error("Move doesn't entirely connect");
                    started = false;
                }
            };
            for (var x = 0; x < constants_1.BOARD_X_LENGTH; x++) {
                var state_1 = _loop_1(x);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            // Should only be true if word ends at edge of board.
            if (passedFirst && passedLast)
                return word + " " + (constants_1.coordinateChars.charAt(startingCoord) + (y + 1)) + " H";
        }
        else {
            var x = parsesquarecoordinates_1.parseSquareCoordinates(move[0])[0];
            var sorted = _.sortBy(move, function (sq) { return parsesquarecoordinates_1.parseSquareCoordinates(sq)[0]; });
            var first = sorted[0];
            var last = _.last(sorted);
            var _loop_2 = function (y) {
                var sq = board[y][x];
                if (sq.played || move.some(function (m) { return m.id === sq.id; })) {
                    if (!started) {
                        started = true;
                        startingCoord = y;
                        word = "";
                    }
                    word += sq.blankLetter
                        ? sq.blankLetter.toLowerCase()
                        : sq.letter;
                    if (!passedFirst && sq.id === first.id)
                        passedFirst = true;
                    if (!passedLast && sq.id === last.id)
                        passedLast = true;
                }
                else if (started) {
                    if (passedFirst && passedLast)
                        return { value: word + " " + (constants_1.coordinateChars.charAt(x) + (startingCoord + 1)) + " V" };
                    if (passedFirst || passedLast)
                        throw new Error("Move doesn't entirely connect");
                    started = false;
                }
            };
            for (var y = 0; y < constants_1.BOARD_Y_LENGTH; y++) {
                var state_2 = _loop_2(y);
                if (typeof state_2 === "object")
                    return state_2.value;
            }
            // Should only be true if word ends at edge of board.
            if (passedFirst && passedLast)
                return word + " " + (constants_1.coordinateChars.charAt(x) + (startingCoord + 1)) + " V";
        }
        throw new Error("Invalid move");
    }
    exports.createPlayCommand = createPlayCommand;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/createrackfromactions.ts":
/*!************************************************!*\
  !*** ./src/functions/createrackfromactions.ts ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./createracksfromactions */ "./src/functions/createracksfromactions.ts"), __webpack_require__(/*! ./getturnfromactions */ "./src/functions/getturnfromactions.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, createracksfromactions_1, getturnfromactions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createRackFromActions = void 0;
    function createRackFromActions(rawActions, teams) {
        var racks = createracksfromactions_1.createRacksFromActions(rawActions, teams);
        var teamTurn = getturnfromactions_1.getTurnFromActions(rawActions, teams);
        // Rack index = team-number - 1 (since team counting starts at 1)
        return racks[teamTurn - 1];
    }
    exports.createRackFromActions = createRackFromActions;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/createracksfromactions.ts":
/*!*************************************************!*\
  !*** ./src/functions/createracksfromactions.ts ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore-umd.js"), __webpack_require__(/*! ../classes/rack */ "./src/classes/rack.ts"), __webpack_require__(/*! ../enums/actiontype */ "./src/enums/actiontype.ts"), __webpack_require__(/*! ./createnewboard */ "./src/functions/createnewboard.ts"), __webpack_require__(/*! ./playmove */ "./src/functions/playmove.ts"), __webpack_require__(/*! ./parseletter */ "./src/functions/parseletter.ts"), __webpack_require__(/*! ./parseaction */ "./src/functions/parseaction.ts"), __webpack_require__(/*! ./getnextturn */ "./src/functions/getnextturn.ts"), __webpack_require__(/*! ./actionchangesturn */ "./src/functions/actionchangesturn.ts"), __webpack_require__(/*! ./parseplaycommand */ "./src/functions/parseplaycommand.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _, rack_1, actiontype_1, createnewboard_1, playmove_1, parseletter_1, parseaction_1, getnextturn_1, actionchangesturn_1, parseplaycommand_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.createRacksFromActions = void 0;
    _ = __importStar(_);
    function createRacksFromActions(rawActions, teams) {
        var board = createnewboard_1.createNewBoard();
        var teamTurn = 1;
        var racks = _.times(teams, function () { return new rack_1.Rack(); });
        rawActions.forEach(function (raw) {
            var _a = parseaction_1.parseAction(raw), actionType = _a[0], commandPart = _a[1];
            var rack = racks[teamTurn - 1];
            switch (actionType) {
                case actiontype_1.ActionType.Play:
                    var result = playmove_1.playMove(parseplaycommand_1.parsePlayCommand(commandPart), board);
                    board = result.board;
                    rack.remove(result.usedLetters);
                    break;
                case actiontype_1.ActionType.Swap:
                    var _b = commandPart.split(" "), sExchanged = _b[0], sDrawn = _b[1];
                    var exchanged = sExchanged.split("").map(parseletter_1.parseLetter);
                    var drawn = sDrawn.split("").map(parseletter_1.parseLetter);
                    rack.remove(exchanged);
                    rack.add(drawn);
                    break;
                case actiontype_1.ActionType.Draw:
                    rack.add(commandPart.split("").map(parseletter_1.parseLetter));
                    break;
                default:
                    break;
            }
            if (actionchangesturn_1.actionChangesTurn(actionType)) {
                teamTurn = getnextturn_1.getNextTurn(teams, teamTurn, false);
            }
        });
        return racks;
    }
    exports.createRacksFromActions = createRacksFromActions;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/getmovelogfromactions.ts":
/*!************************************************!*\
  !*** ./src/functions/getmovelogfromactions.ts ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../enums/actiontype */ "./src/enums/actiontype.ts"), __webpack_require__(/*! ./createnewboard */ "./src/functions/createnewboard.ts"), __webpack_require__(/*! ./playmove */ "./src/functions/playmove.ts"), __webpack_require__(/*! ./parseaction */ "./src/functions/parseaction.ts"), __webpack_require__(/*! ./getnextturn */ "./src/functions/getnextturn.ts"), __webpack_require__(/*! ./actionchangesturn */ "./src/functions/actionchangesturn.ts"), __webpack_require__(/*! ./parseplaycommand */ "./src/functions/parseplaycommand.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, actiontype_1, createnewboard_1, playmove_1, parseaction_1, getnextturn_1, actionchangesturn_1, parseplaycommand_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getMoveLogFromActions = void 0;
    function getMoveLogFromActions(rawActions, teams) {
        var board = createnewboard_1.createNewBoard();
        var teamTurn = 1;
        var moves = [];
        rawActions.forEach(function (raw) {
            var _a = parseaction_1.parseAction(raw), actionType = _a[0], commandPart = _a[1];
            var move = "";
            switch (actionType) {
                case actiontype_1.ActionType.NewGame:
                    move += "Game started";
                    break;
                case actiontype_1.ActionType.Skip:
                    move += "Team " + teamTurn + " skipped";
                    break;
                case actiontype_1.ActionType.Draw:
                    move += "Team " + teamTurn + " drew " + commandPart.length + " tiles";
                    break;
                case actiontype_1.ActionType.Swap:
                    move += "Team " + teamTurn + " swapped " + commandPart.split(" ")[0].length + " tiles";
                    break;
                case actiontype_1.ActionType.Play:
                    move += "Team " + teamTurn + " played ";
                    var result = playmove_1.playMove(parseplaycommand_1.parsePlayCommand(commandPart), board);
                    board = result.board;
                    var words = [];
                    for (var _i = 0, _b = result.words; _i < _b.length; _i++) {
                        var word = _b[_i];
                        words.push(word.word + " (" + word.points + ")");
                    }
                    move += words.join(", ");
                    break;
                case actiontype_1.ActionType.EndGame:
                    move += "Game over";
                    break;
                default:
                    break;
            }
            moves.push(move);
            if (actionchangesturn_1.actionChangesTurn(actionType)) {
                teamTurn = getnextturn_1.getNextTurn(teams, teamTurn, false);
            }
        });
        return moves;
    }
    exports.getMoveLogFromActions = getMoveLogFromActions;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/getnextturn.ts":
/*!**************************************!*\
  !*** ./src/functions/getnextturn.ts ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getNextTurn = void 0;
    function getNextTurn(teams, teamTurn, oppositeDirection) {
        if (oppositeDirection) {
            return (teamTurn - 1) % teams || teams;
        }
        // Ensure non-zero (e.g. if 3 teams: 1 -> 2 -> 3 -> 1)
        return (teamTurn + 1) % teams || teams;
    }
    exports.getNextTurn = getNextTurn;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/getpointsfromsquare.ts":
/*!**********************************************!*\
  !*** ./src/functions/getpointsfromsquare.ts ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../constants */ "./src/constants.ts"), __webpack_require__(/*! ../enums/multipliertype */ "./src/enums/multipliertype.ts"), __webpack_require__(/*! ./parseletter */ "./src/functions/parseletter.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, constants_1, multipliertype_1, parseletter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getPointsFromSquare = void 0;
    /**
     * Returns points for a letter played on a square.
     * In the case of a square representing a word-multiplier,
     * the multiplier is added to the `multipliers` argument for
     * later evaluation.
     */
    function getPointsFromSquare(sq, multipliers) {
        var points = constants_1.letterValueMap[parseletter_1.parseLetter(sq.letter)];
        if (!sq.played) {
            if (sq.multiplierType === multipliertype_1.MultiplierType.Word) {
                multipliers.push(sq.multiplier);
            }
            else if (sq.multiplierType === multipliertype_1.MultiplierType.Letter) {
                points *= sq.multiplier;
            }
        }
        return points;
    }
    exports.getPointsFromSquare = getPointsFromSquare;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/getscoresfromactions.ts":
/*!***********************************************!*\
  !*** ./src/functions/getscoresfromactions.ts ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore-umd.js"), __webpack_require__(/*! ../enums/actiontype */ "./src/enums/actiontype.ts"), __webpack_require__(/*! ./createnewboard */ "./src/functions/createnewboard.ts"), __webpack_require__(/*! ./playmove */ "./src/functions/playmove.ts"), __webpack_require__(/*! ./parseaction */ "./src/functions/parseaction.ts"), __webpack_require__(/*! ./getnextturn */ "./src/functions/getnextturn.ts"), __webpack_require__(/*! ./actionchangesturn */ "./src/functions/actionchangesturn.ts"), __webpack_require__(/*! ./parseplaycommand */ "./src/functions/parseplaycommand.ts"), __webpack_require__(/*! ./createracksfromactions */ "./src/functions/createracksfromactions.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _, actiontype_1, createnewboard_1, playmove_1, parseaction_1, getnextturn_1, actionchangesturn_1, parseplaycommand_1, createracksfromactions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getScoresFromActions = void 0;
    _ = __importStar(_);
    function getScoresFromActions(rawActions, teams) {
        var board = createnewboard_1.createNewBoard();
        var teamTurn = 1;
        var scores = _.times(teams, function () { return 0; });
        rawActions.forEach(function (raw) {
            var _a = parseaction_1.parseAction(raw), actionType = _a[0], commandPart = _a[1];
            switch (actionType) {
                case actiontype_1.ActionType.Play:
                    var result = playmove_1.playMove(parseplaycommand_1.parsePlayCommand(commandPart), board);
                    board = result.board;
                    scores[teamTurn - 1] += result.words.reduce(function (sum, w) { return sum + w.points; }, 0);
                    break;
                case actiontype_1.ActionType.EndGame:
                    var racks = createracksfromactions_1.createRacksFromActions(rawActions, teams);
                    var prevTeamTurn = getnextturn_1.getNextTurn(teams, teamTurn, true);
                    // The following is debatable
                    // --------------------------
                    // It's very rare, but in the event of the previous team
                    // playing a bingo, and there being no possibility of them
                    // drawing tiles for their next turn given the needs of the
                    // other teams, then automatically award them all the
                    // remaining tiles in the bag.
                    if (commandPart) {
                        scores[prevTeamTurn - 1] += parseInt(commandPart, 10) || 0;
                    }
                    for (var i = 0; i < teams; i++) {
                        if (i === prevTeamTurn - 1)
                            continue;
                        var points = racks[i].totalPoints();
                        scores[i] -= points;
                        scores[prevTeamTurn - 1] += points;
                    }
                    break;
                default:
                    break;
            }
            if (actionchangesturn_1.actionChangesTurn(actionType)) {
                teamTurn = getnextturn_1.getNextTurn(teams, teamTurn, false);
            }
        });
        return scores;
    }
    exports.getScoresFromActions = getScoresFromActions;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/getturnfromactions.ts":
/*!*********************************************!*\
  !*** ./src/functions/getturnfromactions.ts ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./parseaction */ "./src/functions/parseaction.ts"), __webpack_require__(/*! ./actionchangesturn */ "./src/functions/actionchangesturn.ts"), __webpack_require__(/*! ./getnextturn */ "./src/functions/getnextturn.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parseaction_1, actionchangesturn_1, getnextturn_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getTurnFromActions = void 0;
    function getTurnFromActions(actions, teams) {
        var teamTurn = 1;
        actions.forEach(function (raw) {
            var actionType = parseaction_1.parseAction(raw)[0];
            if (actionchangesturn_1.actionChangesTurn(actionType)) {
                teamTurn = getnextturn_1.getNextTurn(teams, teamTurn, false);
            }
        });
        return teamTurn;
    }
    exports.getTurnFromActions = getTurnFromActions;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/parseaction.ts":
/*!**************************************!*\
  !*** ./src/functions/parseaction.ts ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseAction = void 0;
    function parseAction(rawAction) {
        var _a = (rawAction || "").split(" "), action = _a[0], rest = _a.slice(1);
        var actionType = action.toUpperCase();
        var commandPart = rest && rest.length > 0 ? rest.join(" ") : "";
        return [actionType, commandPart];
    }
    exports.parseAction = parseAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/parseboard.ts":
/*!*************************************!*\
  !*** ./src/functions/parseboard.ts ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore-umd.js"), __webpack_require__(/*! ../constants */ "./src/constants.ts"), __webpack_require__(/*! ../enums/letter */ "./src/enums/letter.ts"), __webpack_require__(/*! ./parseletter */ "./src/functions/parseletter.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _, constants_1, letter_1, parseletter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseBoard = void 0;
    _ = __importStar(_);
    var lowerCaseRx = /[a-z]/;
    function parseBoard(board) {
        var _a;
        var captures = [];
        var rx = /\|([A-Za-z ])/g;
        var result = null;
        while ((result = rx.exec(board))) {
            captures.push(((_a = result[1]) === null || _a === void 0 ? void 0 : _a.trim()) || "");
        }
        return _.chunk(captures, constants_1.BOARD_X_LENGTH).map(function (letters, i) {
            return letters.map(function (letter, j) {
                var coordinates = constants_1.coordinateChars.charAt(j) + (i + 1);
                var isBlank = lowerCaseRx.test(letter);
                return {
                    id: coordinates,
                    letter: parseletter_1.parseLetter(letter),
                    played: letter !== letter_1.Letter.UNSET,
                    blankLetter: isBlank ? letter.toUpperCase() : "",
                    multiplier: constants_1.coordinatesToMultiplier[coordinates],
                    multiplierType: constants_1.coordinatesToMultiplierType[coordinates],
                };
            });
        });
    }
    exports.parseBoard = parseBoard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/parseletter.ts":
/*!**************************************!*\
  !*** ./src/functions/parseletter.ts ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../enums/letter */ "./src/enums/letter.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, letter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseLetter = void 0;
    var lowerCaseRx = /[a-z]/;
    function parseLetter(letter) {
        if (lowerCaseRx.test(letter))
            return letter_1.Letter.BLANK;
        return letter;
    }
    exports.parseLetter = parseLetter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/parseplaycommand.ts":
/*!*******************************************!*\
  !*** ./src/functions/parseplaycommand.ts ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore-umd.js"), __webpack_require__(/*! ../constants */ "./src/constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parsePlayCommand = void 0;
    _ = __importStar(_);
    var playCommandRx = /^(\w+) ([A-Oa-o])(1?[0-9]) ([HhVv])$/;
    function parsePlayCommand(playCommand) {
        var parsed = playCommandRx.exec(playCommand);
        if (!parsed) {
            throw new Error("Bad command");
        }
        var _a = parsed.slice(-4), word = _a[0], startX = _a[1], startY = _a[2], dir = _a[3];
        if (_.any([word, startX, startY, dir], _.isUndefined)) {
            throw new Error("Bad command");
        }
        if (word.length < 2) {
            throw new Error("Word must be at least 2 letters long");
        }
        return {
            x: constants_1.coordinateChars.indexOf(startX.toUpperCase()),
            y: parseInt(startY, 10) - 1,
            isVertical: dir.toUpperCase() === "V",
            letters: word.split(""),
            id: startX + startY,
        };
    }
    exports.parsePlayCommand = parsePlayCommand;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/parsesquarecoordinates.ts":
/*!*************************************************!*\
  !*** ./src/functions/parsesquarecoordinates.ts ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../constants */ "./src/constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseSquareCoordinates = void 0;
    function parseSquareCoordinates(square) {
        var xPart = square.id.charAt(0); // e.g. "A"
        var yPart = square.id.substr(1); // e.g. "11"
        return [constants_1.coordinateChars.indexOf(xPart), parseInt(yPart, 10) - 1];
    }
    exports.parseSquareCoordinates = parseSquareCoordinates;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/playcommandhaslettersfromrack.ts":
/*!********************************************************!*\
  !*** ./src/functions/playcommandhaslettersfromrack.ts ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore-umd.js"), __webpack_require__(/*! ./parseletter */ "./src/functions/parseletter.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _, parseletter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.playCommandHasLettersFromRack = void 0;
    _ = __importStar(_);
    /**
     * Makes sure that at least one of the rack's tiles is in the move.
     */
    function playCommandHasLettersFromRack(move, letters) {
        var moveLetters = _.map(move.letters, parseletter_1.parseLetter);
        return _.intersection(moveLetters, letters).length > 0;
    }
    exports.playCommandHasLettersFromRack = playCommandHasLettersFromRack;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/playmove.ts":
/*!***********************************!*\
  !*** ./src/functions/playmove.ts ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js"), __webpack_require__(/*! ./getpointsfromsquare */ "./src/functions/getpointsfromsquare.ts"), __webpack_require__(/*! ./parseletter */ "./src/functions/parseletter.ts"), __webpack_require__(/*! ../constants */ "./src/constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ko, getpointsfromsquare_1, parseletter_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.playMove = void 0;
    ko = __importStar(ko);
    var lowerCaseRx = /[a-z]/;
    // Is first word?
    function playMove(move, board) {
        var isFirstWord = board.every(function (row) { return row.every(function (sq) { return !sq.played; }); });
        var wordMultipliers = [];
        var connectsToPlayedSquare = false;
        var points = 0;
        var newlyPlayedSquares = 0;
        var result = {
            board: ko.toJS(board),
            words: [],
            usedLetters: [],
        };
        if (move.isVertical) {
            var moveY_1 = move.y;
            move.letters.forEach(function (letter) {
                var sq = result.board[moveY_1][move.x];
                if (sq.played &&
                    sq.letter !== letter &&
                    sq.blankLetter !== letter) {
                    throw new Error("Invalid move");
                }
                if (!sq.played) {
                    // Set the letter.
                    sq.letter = parseletter_1.parseLetter(letter);
                    result.usedLetters.push(sq.letter);
                    if (lowerCaseRx.test(letter))
                        sq.blankLetter = letter;
                }
                else {
                    connectsToPlayedSquare = true;
                }
                // Extract the points.
                points += getpointsfromsquare_1.getPointsFromSquare(sq, wordMultipliers);
                if (!sq.played) {
                    newlyPlayedSquares += 1;
                    var crossingPoints_1 = 0;
                    var x = move.x;
                    var crossSq = void 0;
                    var word = [];
                    var xLength = result.board[moveY_1].length;
                    // If there is board space to the left
                    if (x > 0) {
                        x--;
                        // Collect all horizontally intersecting letters on the
                        // left side of our vertical word.
                        do {
                            crossSq = result.board[moveY_1][x];
                            if (crossSq && crossSq.letter) {
                                word.unshift(crossSq);
                            }
                        } while (--x >= 0 && crossSq.letter);
                    }
                    if (word.length > 0) {
                        // Add our letter to the crossing word.
                        word.push(sq);
                    }
                    x = move.x;
                    // If there is board space to the right.
                    if (x < xLength - 1) {
                        x++;
                        // Collect all horizontally intersecting letters on the
                        // right side of our vertical word.
                        do {
                            crossSq = result.board[moveY_1][x];
                            if (crossSq && crossSq.letter) {
                                word.push(crossSq);
                            }
                        } while (++x < xLength && crossSq.letter);
                    }
                    // Add our letter to the crossing word if it hasn't yet been.
                    if (word.length > 0 && word.indexOf(sq) === -1) {
                        word.unshift(sq);
                    }
                    var mults_1 = [];
                    word.forEach(function (_sq) {
                        crossingPoints_1 += getpointsfromsquare_1.getPointsFromSquare(_sq, mults_1);
                    });
                    mults_1.forEach(function (m) { return (crossingPoints_1 *= m); });
                    if (word.length > 0) {
                        connectsToPlayedSquare = true;
                        result.words.push({
                            word: word
                                .map(function (_sq) {
                                return _sq.blankLetter
                                    ? _sq.blankLetter.toLowerCase()
                                    : _sq.letter;
                            })
                                .join(""),
                            points: crossingPoints_1,
                        });
                    }
                }
                moveY_1++;
                sq.played = true;
            });
        }
        else {
            var moveX_1 = move.x;
            move.letters.forEach(function (letter) {
                var sq = result.board[move.y][moveX_1];
                if (sq.played &&
                    sq.letter !== letter &&
                    sq.blankLetter !== letter) {
                    throw new Error("Invalid move");
                }
                if (!sq.played) {
                    sq.letter = parseletter_1.parseLetter(letter);
                    result.usedLetters.push(sq.letter);
                    if (lowerCaseRx.test(letter))
                        sq.blankLetter = letter;
                }
                else {
                    connectsToPlayedSquare = true;
                }
                points += getpointsfromsquare_1.getPointsFromSquare(sq, wordMultipliers);
                if (!sq.played) {
                    newlyPlayedSquares += 1;
                    var crossingPoints_2 = 0;
                    var y = move.y;
                    var crossSq = void 0;
                    var word = [];
                    var yLength = result.board.length;
                    if (y > 0) {
                        y--;
                        do {
                            crossSq = result.board[y][moveX_1];
                            if (crossSq && crossSq.letter) {
                                word.unshift(crossSq);
                            }
                        } while (--y >= 0 && crossSq.letter);
                    }
                    if (word.length > 0) {
                        // Add our letter to the crossing word
                        word.push(sq);
                    }
                    y = move.y;
                    if (y < yLength - 1) {
                        y++;
                        do {
                            crossSq = result.board[y][moveX_1];
                            // starting right the NEXT left cell, add self + rest of
                            // cells until vacant one found
                            if (crossSq && crossSq.letter) {
                                word.push(crossSq);
                            }
                        } while (++y < yLength && crossSq.letter);
                    }
                    if (word.length > 0 && word.indexOf(sq) === -1) {
                        word.unshift(sq);
                    }
                    var mults_2 = [];
                    word.forEach(function (_sq) {
                        crossingPoints_2 += getpointsfromsquare_1.getPointsFromSquare(_sq, mults_2);
                    });
                    mults_2.forEach(function (m) { return (crossingPoints_2 *= m); });
                    if (word.length > 0) {
                        connectsToPlayedSquare = true;
                        result.words.push({
                            word: word
                                .map(function (_sq) {
                                return _sq.blankLetter
                                    ? _sq.blankLetter.toLowerCase()
                                    : _sq.letter;
                            })
                                .join(""),
                            points: crossingPoints_2,
                        });
                    }
                }
                moveX_1++;
                sq.played = true;
            });
        }
        if (isFirstWord && !result.board[7][7].played) {
            throw new Error("First word must include middle square");
        }
        else if (!isFirstWord && !connectsToPlayedSquare) {
            throw new Error("Word must connect to other words on the board");
        }
        else if (newlyPlayedSquares > constants_1.MAX_RACK_TILES) {
            throw new Error("Word is larger than maximum amount of tiles");
        }
        wordMultipliers.forEach(function (mult) {
            // Add up points for word in play command.
            points *= mult;
        });
        // Add the original word played.
        result.words.unshift({
            word: move.letters.join(""),
            points: points,
        });
        if (newlyPlayedSquares === constants_1.MAX_RACK_TILES) {
            // Add bingo points, if applicable.
            result.words.push({
                word: "*BINGO*",
                points: 50,
            });
        }
        return result;
    }
    exports.playMove = playMove;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/functions/printboard.ts":
/*!*************************************!*\
  !*** ./src/functions/printboard.ts ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../enums/multiplier */ "./src/enums/multiplier.ts"), __webpack_require__(/*! ../enums/multipliertype */ "./src/enums/multipliertype.ts"), __webpack_require__(/*! ../constants */ "./src/constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, multiplier_1, multipliertype_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.printBoard = void 0;
    function printBoard(board) {
        var template = "\n   A B C D E F G H I J K L M N O\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 1|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|0\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 2|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|1\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 3|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|2\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 4|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|3\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 5|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|4\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 6|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|5\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 7|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|6\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 8|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|7\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n 9|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|8\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n10|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|9\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n11|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|10\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n12|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|11\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n13|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|12\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n14|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|13\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n15|X|X|X|X|X|X|X|X|X|X|X|X|X|X|X|14\n  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4\n    ";
        var i = 0;
        return template.replace(/X/g, function (x) {
            var sq = board[Math.floor(i / constants_1.BOARD_X_LENGTH)][i % constants_1.BOARD_X_LENGTH];
            i += 1;
            var letter = sq.blankLetter || sq.letter || " ";
            if (letter == " " && sq.multiplier != multiplier_1.Multiplier.None) {
                if (sq.multiplier == multiplier_1.Multiplier.Double &&
                    sq.multiplierType == multipliertype_1.MultiplierType.Letter)
                    return ".";
                if (sq.multiplier == multiplier_1.Multiplier.Triple &&
                    sq.multiplierType == multipliertype_1.MultiplierType.Letter)
                    return ":";
                if (sq.multiplier == multiplier_1.Multiplier.Double &&
                    sq.multiplierType == multipliertype_1.MultiplierType.Word)
                    return "'";
                if (sq.multiplier == multiplier_1.Multiplier.Triple &&
                    sq.multiplierType == multipliertype_1.MultiplierType.Word)
                    return '"';
            }
            return letter;
        });
    }
    exports.printBoard = printBoard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/scrabblecore.ts":
/*!*****************************!*\
  !*** ./src/scrabblecore.ts ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./constants */ "./src/constants.ts"), __webpack_require__(/*! ./classes/bag */ "./src/classes/bag.ts"), __webpack_require__(/*! ./classes/game */ "./src/classes/game.ts"), __webpack_require__(/*! ./classes/rack */ "./src/classes/rack.ts"), __webpack_require__(/*! ./enums/actiontype */ "./src/enums/actiontype.ts"), __webpack_require__(/*! ./enums/letter */ "./src/enums/letter.ts"), __webpack_require__(/*! ./enums/multiplier */ "./src/enums/multiplier.ts"), __webpack_require__(/*! ./enums/multipliertype */ "./src/enums/multipliertype.ts"), __webpack_require__(/*! ./functions/actionchangesturn */ "./src/functions/actionchangesturn.ts"), __webpack_require__(/*! ./functions/createbagfromactions */ "./src/functions/createbagfromactions.ts"), __webpack_require__(/*! ./functions/createboardfromactions */ "./src/functions/createboardfromactions.ts"), __webpack_require__(/*! ./functions/createnewboard */ "./src/functions/createnewboard.ts"), __webpack_require__(/*! ./functions/createplaycommand */ "./src/functions/createplaycommand.ts"), __webpack_require__(/*! ./functions/createrackfromactions */ "./src/functions/createrackfromactions.ts"), __webpack_require__(/*! ./functions/createracksfromactions */ "./src/functions/createracksfromactions.ts"), __webpack_require__(/*! ./functions/getmovelogfromactions */ "./src/functions/getmovelogfromactions.ts"), __webpack_require__(/*! ./functions/getnextturn */ "./src/functions/getnextturn.ts"), __webpack_require__(/*! ./functions/getpointsfromsquare */ "./src/functions/getpointsfromsquare.ts"), __webpack_require__(/*! ./functions/getscoresfromactions */ "./src/functions/getscoresfromactions.ts"), __webpack_require__(/*! ./functions/getturnfromactions */ "./src/functions/getturnfromactions.ts"), __webpack_require__(/*! ./functions/parseaction */ "./src/functions/parseaction.ts"), __webpack_require__(/*! ./functions/parseboard */ "./src/functions/parseboard.ts"), __webpack_require__(/*! ./functions/parseletter */ "./src/functions/parseletter.ts"), __webpack_require__(/*! ./functions/parseplaycommand */ "./src/functions/parseplaycommand.ts"), __webpack_require__(/*! ./functions/parsesquarecoordinates */ "./src/functions/parsesquarecoordinates.ts"), __webpack_require__(/*! ./functions/playcommandhaslettersfromrack */ "./src/functions/playcommandhaslettersfromrack.ts"), __webpack_require__(/*! ./functions/playmove */ "./src/functions/playmove.ts"), __webpack_require__(/*! ./functions/printboard */ "./src/functions/printboard.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, constants, bag_1, game_1, rack_1, actiontype_1, letter_1, multiplier_1, multipliertype_1, actionchangesturn_1, createbagfromactions_1, createboardfromactions_1, createnewboard_1, createplaycommand_1, createrackfromactions_1, createracksfromactions_1, getmovelogfromactions_1, getnextturn_1, getpointsfromsquare_1, getscoresfromactions_1, getturnfromactions_1, parseaction_1, parseboard_1, parseletter_1, parseplaycommand_1, parsesquarecoordinates_1, playcommandhaslettersfromrack_1, playmove_1, printboard_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.printBoard = exports.playMove = exports.playCommandHasLettersFromRack = exports.parseSquareCoordinates = exports.parsePlayCommand = exports.parseLetter = exports.parseBoard = exports.parseAction = exports.getTurnFromActions = exports.getScoresFromActions = exports.getPointsFromSquare = exports.getNextTurn = exports.getMoveLogFromActions = exports.createRacksFromActions = exports.createRackFromActions = exports.createPlayCommand = exports.createNewBoard = exports.createBoardFromActions = exports.createBagFromActions = exports.actionChangesTurn = exports.MultiplierType = exports.Multiplier = exports.Letter = exports.ActionType = exports.Rack = exports.Game = exports.Bag = exports.constants = void 0;
    exports.constants = __importStar(constants);
    Object.defineProperty(exports, "Bag", ({ enumerable: true, get: function () { return bag_1.Bag; } }));
    Object.defineProperty(exports, "Game", ({ enumerable: true, get: function () { return game_1.Game; } }));
    Object.defineProperty(exports, "Rack", ({ enumerable: true, get: function () { return rack_1.Rack; } }));
    Object.defineProperty(exports, "ActionType", ({ enumerable: true, get: function () { return actiontype_1.ActionType; } }));
    Object.defineProperty(exports, "Letter", ({ enumerable: true, get: function () { return letter_1.Letter; } }));
    Object.defineProperty(exports, "Multiplier", ({ enumerable: true, get: function () { return multiplier_1.Multiplier; } }));
    Object.defineProperty(exports, "MultiplierType", ({ enumerable: true, get: function () { return multipliertype_1.MultiplierType; } }));
    Object.defineProperty(exports, "actionChangesTurn", ({ enumerable: true, get: function () { return actionchangesturn_1.actionChangesTurn; } }));
    Object.defineProperty(exports, "createBagFromActions", ({ enumerable: true, get: function () { return createbagfromactions_1.createBagFromActions; } }));
    Object.defineProperty(exports, "createBoardFromActions", ({ enumerable: true, get: function () { return createboardfromactions_1.createBoardFromActions; } }));
    Object.defineProperty(exports, "createNewBoard", ({ enumerable: true, get: function () { return createnewboard_1.createNewBoard; } }));
    Object.defineProperty(exports, "createPlayCommand", ({ enumerable: true, get: function () { return createplaycommand_1.createPlayCommand; } }));
    Object.defineProperty(exports, "createRackFromActions", ({ enumerable: true, get: function () { return createrackfromactions_1.createRackFromActions; } }));
    Object.defineProperty(exports, "createRacksFromActions", ({ enumerable: true, get: function () { return createracksfromactions_1.createRacksFromActions; } }));
    Object.defineProperty(exports, "getMoveLogFromActions", ({ enumerable: true, get: function () { return getmovelogfromactions_1.getMoveLogFromActions; } }));
    Object.defineProperty(exports, "getNextTurn", ({ enumerable: true, get: function () { return getnextturn_1.getNextTurn; } }));
    Object.defineProperty(exports, "getPointsFromSquare", ({ enumerable: true, get: function () { return getpointsfromsquare_1.getPointsFromSquare; } }));
    Object.defineProperty(exports, "getScoresFromActions", ({ enumerable: true, get: function () { return getscoresfromactions_1.getScoresFromActions; } }));
    Object.defineProperty(exports, "getTurnFromActions", ({ enumerable: true, get: function () { return getturnfromactions_1.getTurnFromActions; } }));
    Object.defineProperty(exports, "parseAction", ({ enumerable: true, get: function () { return parseaction_1.parseAction; } }));
    Object.defineProperty(exports, "parseBoard", ({ enumerable: true, get: function () { return parseboard_1.parseBoard; } }));
    Object.defineProperty(exports, "parseLetter", ({ enumerable: true, get: function () { return parseletter_1.parseLetter; } }));
    Object.defineProperty(exports, "parsePlayCommand", ({ enumerable: true, get: function () { return parseplaycommand_1.parsePlayCommand; } }));
    Object.defineProperty(exports, "parseSquareCoordinates", ({ enumerable: true, get: function () { return parsesquarecoordinates_1.parseSquareCoordinates; } }));
    Object.defineProperty(exports, "playCommandHasLettersFromRack", ({ enumerable: true, get: function () { return playcommandhaslettersfromrack_1.playCommandHasLettersFromRack; } }));
    Object.defineProperty(exports, "playMove", ({ enumerable: true, get: function () { return playmove_1.playMove; } }));
    Object.defineProperty(exports, "printBoard", ({ enumerable: true, get: function () { return printboard_1.printBoard; } }));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/underscore/underscore-umd.js":
/*!***************************************************!*\
  !*** ./node_modules/underscore/underscore-umd.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () {
  //     Underscore.js 1.13.1
  //     https://underscorejs.org
  //     (c) 2009-2021 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
  //     Underscore may be freely distributed under the MIT license.

  // Current version.
  var VERSION = '1.13.1';

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof __webpack_require__.g == 'object' && __webpack_require__.g.global === __webpack_require__.g && __webpack_require__.g ||
            Function('return this')() ||
            {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // Modern feature detection.
  var supportsArrayBuffer = typeof ArrayBuffer !== 'undefined',
      supportsDataView = typeof DataView !== 'undefined';

  // All **ECMAScript 5+** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create,
      nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;

  // Create references to these builtin functions because we override them.
  var _isNaN = isNaN,
      _isFinite = isFinite;

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  // The largest integer that can be represented exactly.
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  function restArguments(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  }

  // Is a given variable an object?
  function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }

  // Is a given value equal to null?
  function isNull(obj) {
    return obj === null;
  }

  // Is a given variable undefined?
  function isUndefined(obj) {
    return obj === void 0;
  }

  // Is a given value a boolean?
  function isBoolean(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  }

  // Is a given value a DOM element?
  function isElement(obj) {
    return !!(obj && obj.nodeType === 1);
  }

  // Internal function for creating a `toString`-based type tester.
  function tagTester(name) {
    var tag = '[object ' + name + ']';
    return function(obj) {
      return toString.call(obj) === tag;
    };
  }

  var isString = tagTester('String');

  var isNumber = tagTester('Number');

  var isDate = tagTester('Date');

  var isRegExp = tagTester('RegExp');

  var isError = tagTester('Error');

  var isSymbol = tagTester('Symbol');

  var isArrayBuffer = tagTester('ArrayBuffer');

  var isFunction = tagTester('Function');

  // Optimize `isFunction` if appropriate. Work around some `typeof` bugs in old
  // v8, IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if ( true && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  var isFunction$1 = isFunction;

  var hasObjectTag = tagTester('Object');

  // In IE 10 - Edge 13, `DataView` has string tag `'[object Object]'`.
  // In IE 11, the most common among them, this problem also applies to
  // `Map`, `WeakMap` and `Set`.
  var hasStringTagBug = (
        supportsDataView && hasObjectTag(new DataView(new ArrayBuffer(8)))
      ),
      isIE11 = (typeof Map !== 'undefined' && hasObjectTag(new Map));

  var isDataView = tagTester('DataView');

  // In IE 10 - Edge 13, we need a different heuristic
  // to determine whether an object is a `DataView`.
  function ie10IsDataView(obj) {
    return obj != null && isFunction$1(obj.getInt8) && isArrayBuffer(obj.buffer);
  }

  var isDataView$1 = (hasStringTagBug ? ie10IsDataView : isDataView);

  // Is a given value an array?
  // Delegates to ECMA5's native `Array.isArray`.
  var isArray = nativeIsArray || tagTester('Array');

  // Internal function to check whether `key` is an own property name of `obj`.
  function has$1(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }

  var isArguments = tagTester('Arguments');

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  (function() {
    if (!isArguments(arguments)) {
      isArguments = function(obj) {
        return has$1(obj, 'callee');
      };
    }
  }());

  var isArguments$1 = isArguments;

  // Is a given object a finite number?
  function isFinite$1(obj) {
    return !isSymbol(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
  }

  // Is the given value `NaN`?
  function isNaN$1(obj) {
    return isNumber(obj) && _isNaN(obj);
  }

  // Predicate-generating function. Often useful outside of Underscore.
  function constant(value) {
    return function() {
      return value;
    };
  }

  // Common internal logic for `isArrayLike` and `isBufferLike`.
  function createSizePropertyCheck(getSizeProperty) {
    return function(collection) {
      var sizeProperty = getSizeProperty(collection);
      return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
    }
  }

  // Internal helper to generate a function to obtain property `key` from `obj`.
  function shallowProperty(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  }

  // Internal helper to obtain the `byteLength` property of an object.
  var getByteLength = shallowProperty('byteLength');

  // Internal helper to determine whether we should spend extensive checks against
  // `ArrayBuffer` et al.
  var isBufferLike = createSizePropertyCheck(getByteLength);

  // Is a given value a typed array?
  var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
  function isTypedArray(obj) {
    // `ArrayBuffer.isView` is the most future-proof, so use it when available.
    // Otherwise, fall back on the above regular expression.
    return nativeIsView ? (nativeIsView(obj) && !isDataView$1(obj)) :
                  isBufferLike(obj) && typedArrayPattern.test(toString.call(obj));
  }

  var isTypedArray$1 = supportsArrayBuffer ? isTypedArray : constant(false);

  // Internal helper to obtain the `length` property of an object.
  var getLength = shallowProperty('length');

  // Internal helper to create a simple lookup structure.
  // `collectNonEnumProps` used to depend on `_.contains`, but this led to
  // circular imports. `emulatedSet` is a one-off solution that only works for
  // arrays of strings.
  function emulatedSet(keys) {
    var hash = {};
    for (var l = keys.length, i = 0; i < l; ++i) hash[keys[i]] = true;
    return {
      contains: function(key) { return hash[key]; },
      push: function(key) {
        hash[key] = true;
        return keys.push(key);
      }
    };
  }

  // Internal helper. Checks `keys` for the presence of keys in IE < 9 that won't
  // be iterated by `for key in ...` and thus missed. Extends `keys` in place if
  // needed.
  function collectNonEnumProps(obj, keys) {
    keys = emulatedSet(keys);
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = isFunction$1(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has$1(obj, prop) && !keys.contains(prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  function keys(obj) {
    if (!isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has$1(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  }

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  function isEmpty(obj) {
    if (obj == null) return true;
    // Skip the more expensive `toString`-based type checks if `obj` has no
    // `.length`.
    var length = getLength(obj);
    if (typeof length == 'number' && (
      isArray(obj) || isString(obj) || isArguments$1(obj)
    )) return length === 0;
    return getLength(keys(obj)) === 0;
  }

  // Returns whether an object has a given set of `key:value` pairs.
  function isMatch(object, attrs) {
    var _keys = keys(attrs), length = _keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = _keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  }

  // If Underscore is called as a function, it returns a wrapped object that can
  // be used OO-style. This wrapper holds altered versions of all functions added
  // through `_.mixin`. Wrapped objects may be chained.
  function _$1(obj) {
    if (obj instanceof _$1) return obj;
    if (!(this instanceof _$1)) return new _$1(obj);
    this._wrapped = obj;
  }

  _$1.VERSION = VERSION;

  // Extracts the result from a wrapped and chained object.
  _$1.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxies for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _$1.prototype.valueOf = _$1.prototype.toJSON = _$1.prototype.value;

  _$1.prototype.toString = function() {
    return String(this._wrapped);
  };

  // Internal function to wrap or shallow-copy an ArrayBuffer,
  // typed array or DataView to a new view, reusing the buffer.
  function toBufferView(bufferSource) {
    return new Uint8Array(
      bufferSource.buffer || bufferSource,
      bufferSource.byteOffset || 0,
      getByteLength(bufferSource)
    );
  }

  // We use this string twice, so give it a name for minification.
  var tagDataView = '[object DataView]';

  // Internal recursive comparison function for `_.isEqual`.
  function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  }

  // Internal recursive comparison function for `_.isEqual`.
  function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _$1) a = a._wrapped;
    if (b instanceof _$1) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    // Work around a bug in IE 10 - Edge 13.
    if (hasStringTagBug && className == '[object Object]' && isDataView$1(a)) {
      if (!isDataView$1(b)) return false;
      className = tagDataView;
    }
    switch (className) {
      // These types are compared by value.
      case '[object RegExp]':
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
      case '[object ArrayBuffer]':
      case tagDataView:
        // Coerce to typed array so we can fall through.
        return deepEq(toBufferView(a), toBufferView(b), aStack, bStack);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays && isTypedArray$1(a)) {
        var byteLength = getByteLength(a);
        if (byteLength !== getByteLength(b)) return false;
        if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) return true;
        areArrays = true;
    }
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(isFunction$1(aCtor) && aCtor instanceof aCtor &&
                               isFunction$1(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var _keys = keys(a), key;
      length = _keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = _keys[length];
        if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  }

  // Perform a deep comparison to check if two objects are equal.
  function isEqual(a, b) {
    return eq(a, b);
  }

  // Retrieve all the enumerable property names of an object.
  function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  }

  // Since the regular `Object.prototype.toString` type tests don't work for
  // some types in IE 11, we use a fingerprinting heuristic instead, based
  // on the methods. It's not great, but it's the best we got.
  // The fingerprint method lists are defined below.
  function ie11fingerprint(methods) {
    var length = getLength(methods);
    return function(obj) {
      if (obj == null) return false;
      // `Map`, `WeakMap` and `Set` have no enumerable keys.
      var keys = allKeys(obj);
      if (getLength(keys)) return false;
      for (var i = 0; i < length; i++) {
        if (!isFunction$1(obj[methods[i]])) return false;
      }
      // If we are testing against `WeakMap`, we need to ensure that
      // `obj` doesn't have a `forEach` method in order to distinguish
      // it from a regular `Map`.
      return methods !== weakMapMethods || !isFunction$1(obj[forEachName]);
    };
  }

  // In the interest of compact minification, we write
  // each string in the fingerprints only once.
  var forEachName = 'forEach',
      hasName = 'has',
      commonInit = ['clear', 'delete'],
      mapTail = ['get', hasName, 'set'];

  // `Map`, `WeakMap` and `Set` each have slightly different
  // combinations of the above sublists.
  var mapMethods = commonInit.concat(forEachName, mapTail),
      weakMapMethods = commonInit.concat(mapTail),
      setMethods = ['add'].concat(commonInit, forEachName, hasName);

  var isMap = isIE11 ? ie11fingerprint(mapMethods) : tagTester('Map');

  var isWeakMap = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester('WeakMap');

  var isSet = isIE11 ? ie11fingerprint(setMethods) : tagTester('Set');

  var isWeakSet = tagTester('WeakSet');

  // Retrieve the values of an object's properties.
  function values(obj) {
    var _keys = keys(obj);
    var length = _keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[_keys[i]];
    }
    return values;
  }

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of `_.object` with one argument.
  function pairs(obj) {
    var _keys = keys(obj);
    var length = _keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [_keys[i], obj[_keys[i]]];
    }
    return pairs;
  }

  // Invert the keys and values of an object. The values must be serializable.
  function invert(obj) {
    var result = {};
    var _keys = keys(obj);
    for (var i = 0, length = _keys.length; i < length; i++) {
      result[obj[_keys[i]]] = _keys[i];
    }
    return result;
  }

  // Return a sorted list of the function names available on the object.
  function functions(obj) {
    var names = [];
    for (var key in obj) {
      if (isFunction$1(obj[key])) names.push(key);
    }
    return names.sort();
  }

  // An internal function for creating assigner functions.
  function createAssigner(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  }

  // Extend a given object with all the properties in passed-in object(s).
  var extend = createAssigner(allKeys);

  // Assigns a given object with all the own properties in the passed-in
  // object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  var extendOwn = createAssigner(keys);

  // Fill in a given object with default properties.
  var defaults = createAssigner(allKeys, true);

  // Create a naked function reference for surrogate-prototype-swapping.
  function ctor() {
    return function(){};
  }

  // An internal function for creating a new object that inherits from another.
  function baseCreate(prototype) {
    if (!isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    var Ctor = ctor();
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  }

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  function create(prototype, props) {
    var result = baseCreate(prototype);
    if (props) extendOwn(result, props);
    return result;
  }

  // Create a (shallow-cloned) duplicate of an object.
  function clone(obj) {
    if (!isObject(obj)) return obj;
    return isArray(obj) ? obj.slice() : extend({}, obj);
  }

  // Invokes `interceptor` with the `obj` and then returns `obj`.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  function tap(obj, interceptor) {
    interceptor(obj);
    return obj;
  }

  // Normalize a (deep) property `path` to array.
  // Like `_.iteratee`, this function can be customized.
  function toPath$1(path) {
    return isArray(path) ? path : [path];
  }
  _$1.toPath = toPath$1;

  // Internal wrapper for `_.toPath` to enable minification.
  // Similar to `cb` for `_.iteratee`.
  function toPath(path) {
    return _$1.toPath(path);
  }

  // Internal function to obtain a nested property in `obj` along `path`.
  function deepGet(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  }

  // Get the value of the (deep) property on `path` from `object`.
  // If any property in `path` does not exist or if the value is
  // `undefined`, return `defaultValue` instead.
  // The `path` is normalized through `_.toPath`.
  function get(object, path, defaultValue) {
    var value = deepGet(object, toPath(path));
    return isUndefined(value) ? defaultValue : value;
  }

  // Shortcut function for checking if an object has a given property directly on
  // itself (in other words, not on a prototype). Unlike the internal `has`
  // function, this public version can also traverse nested properties.
  function has(obj, path) {
    path = toPath(path);
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (!has$1(obj, key)) return false;
      obj = obj[key];
    }
    return !!length;
  }

  // Keep the identity function around for default iteratees.
  function identity(value) {
    return value;
  }

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  function matcher(attrs) {
    attrs = extendOwn({}, attrs);
    return function(obj) {
      return isMatch(obj, attrs);
    };
  }

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indices.
  function property(path) {
    path = toPath(path);
    return function(obj) {
      return deepGet(obj, path);
    };
  }

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  function optimizeCb(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  }

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `_.identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  function baseIteratee(value, context, argCount) {
    if (value == null) return identity;
    if (isFunction$1(value)) return optimizeCb(value, context, argCount);
    if (isObject(value) && !isArray(value)) return matcher(value);
    return property(value);
  }

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only `argCount` argument.
  function iteratee(value, context) {
    return baseIteratee(value, context, Infinity);
  }
  _$1.iteratee = iteratee;

  // The function we call internally to generate a callback. It invokes
  // `_.iteratee` if overridden, otherwise `baseIteratee`.
  function cb(value, context, argCount) {
    if (_$1.iteratee !== iteratee) return _$1.iteratee(value, context);
    return baseIteratee(value, context, argCount);
  }

  // Returns the results of applying the `iteratee` to each element of `obj`.
  // In contrast to `_.map` it returns an object.
  function mapObject(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var _keys = keys(obj),
        length = _keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = _keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  }

  // Predicate-generating function. Often useful outside of Underscore.
  function noop(){}

  // Generates a function for a given object that returns a given property.
  function propertyOf(obj) {
    if (obj == null) return noop;
    return function(path) {
      return get(obj, path);
    };
  }

  // Run a function **n** times.
  function times(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  }

  // Return a random integer between `min` and `max` (inclusive).
  function random(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  // A (possibly faster) way to get the current timestamp as an integer.
  var now = Date.now || function() {
    return new Date().getTime();
  };

  // Internal helper to generate functions for escaping and unescaping strings
  // to/from HTML interpolation.
  function createEscaper(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  }

  // Internal list of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };

  // Function for escaping strings to HTML interpolation.
  var _escape = createEscaper(escapeMap);

  // Internal list of HTML entities for unescaping.
  var unescapeMap = invert(escapeMap);

  // Function for unescaping strings from HTML interpolation.
  var _unescape = createEscaper(unescapeMap);

  // By default, Underscore uses ERB-style template delimiters. Change the
  // following template settings to use alternative delimiters.
  var templateSettings = _$1.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `_.templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  function escapeChar(match) {
    return '\\' + escapes[match];
  }

  // In order to prevent third-party code injection through
  // `_.templateSettings.variable`, we test it against the following regular
  // expression. It is intentionally a bit more liberal than just matching valid
  // identifiers, but still prevents possible loopholes through defaults or
  // destructuring assignment.
  var bareIdentifier = /^\s*(\w|\$)+\s*$/;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  function template(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = defaults({}, settings, _$1.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    var argument = settings.variable;
    if (argument) {
      // Insure against third-party code injection. (CVE-2021-23358)
      if (!bareIdentifier.test(argument)) throw new Error(
        'variable is not a bare identifier: ' + argument
      );
    } else {
      // If a variable is not specified, place data values in local scope.
      source = 'with(obj||{}){\n' + source + '}\n';
      argument = 'obj';
    }

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(argument, '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _$1);
    };

    // Provide the compiled source as a convenience for precompilation.
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  }

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  function result(obj, path, fallback) {
    path = toPath(path);
    var length = path.length;
    if (!length) {
      return isFunction$1(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = isFunction$1(prop) ? prop.call(obj) : prop;
    }
    return obj;
  }

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  function uniqueId(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  }

  // Start chaining a wrapped Underscore object.
  function chain(obj) {
    var instance = _$1(obj);
    instance._chain = true;
    return instance;
  }

  // Internal function to execute `sourceFunc` bound to `context` with optional
  // `args`. Determines whether to execute a function as a constructor or as a
  // normal function.
  function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (isObject(result)) return result;
    return self;
  }

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. `_` acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  var partial = restArguments(function(func, boundArgs) {
    var placeholder = partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  partial.placeholder = _$1;

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally).
  var bind = restArguments(function(func, context, args) {
    if (!isFunction$1(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Internal helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var isArrayLike = createSizePropertyCheck(getLength);

  // Internal implementation of a recursive `flatten` function.
  function flatten$1(input, depth, strict, output) {
    output = output || [];
    if (!depth && depth !== 0) {
      depth = Infinity;
    } else if (depth <= 0) {
      return output.concat(input);
    }
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (isArray(value) || isArguments$1(value))) {
        // Flatten current level of array or arguments object.
        if (depth > 1) {
          flatten$1(value, depth - 1, strict, output);
          idx = output.length;
        } else {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  }

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  var bindAll = restArguments(function(obj, keys) {
    keys = flatten$1(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = bind(obj[key], obj);
    }
    return obj;
  });

  // Memoize an expensive function by storing its results.
  function memoize(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has$1(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  }

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  var delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  var defer = partial(delay, _$1, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var _now = now();
      if (!previous && options.leading === false) previous = _now;
      var remaining = wait - (_now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = _now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  }

  // When a sequence of calls of the returned function ends, the argument
  // function is triggered. The end of a sequence is defined by the `wait`
  // parameter. If `immediate` is passed, the argument function will be
  // triggered at the beginning of the sequence instead of at the end.
  function debounce(func, wait, immediate) {
    var timeout, previous, args, result, context;

    var later = function() {
      var passed = now() - previous;
      if (wait > passed) {
        timeout = setTimeout(later, wait - passed);
      } else {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
        // This check is needed because `func` can recursively invoke `debounced`.
        if (!timeout) args = context = null;
      }
    };

    var debounced = restArguments(function(_args) {
      context = this;
      args = _args;
      previous = now();
      if (!timeout) {
        timeout = setTimeout(later, wait);
        if (immediate) result = func.apply(context, args);
      }
      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = args = context = null;
    };

    return debounced;
  }

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  function wrap(func, wrapper) {
    return partial(wrapper, func);
  }

  // Returns a negated version of the passed-in predicate.
  function negate(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  }

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  }

  // Returns a function that will only be executed on and after the Nth call.
  function after(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  }

  // Returns a function that will only be executed up to (but not including) the
  // Nth call.
  function before(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  }

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  var once = partial(before, 2);

  // Returns the first key on an object that passes a truth test.
  function findKey(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = keys(obj), key;
    for (var i = 0, length = _keys.length; i < length; i++) {
      key = _keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  }

  // Internal function to generate `_.findIndex` and `_.findLastIndex`.
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a truth test.
  var findIndex = createPredicateIndexFinder(1);

  // Returns the last index on an array-like that passes a truth test.
  var findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  function sortedIndex(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  }

  // Internal function to generate the `_.indexOf` and `_.lastIndexOf` functions.
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), isNaN$1);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  var indexOf = createIndexFinder(1, findIndex, sortedIndex);

  // Return the position of the last occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  var lastIndexOf = createIndexFinder(-1, findLastIndex);

  // Return the first value which passes a truth test.
  function find(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? findIndex : findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  }

  // Convenience version of a common use case of `_.find`: getting the first
  // object containing specific `key:value` pairs.
  function findWhere(obj, attrs) {
    return find(obj, matcher(attrs));
  }

  // The cornerstone for collection functions, an `each`
  // implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  function each(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var _keys = keys(obj);
      for (i = 0, length = _keys.length; i < length; i++) {
        iteratee(obj[_keys[i]], _keys[i], obj);
      }
    }
    return obj;
  }

  // Return the results of applying the iteratee to each element.
  function map(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var _keys = !isArrayLike(obj) && keys(obj),
        length = (_keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  }

  // Internal helper to create a reducing function, iterating left or right.
  function createReduce(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var _keys = !isArrayLike(obj) && keys(obj),
          length = (_keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[_keys ? _keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = _keys ? _keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  var reduce = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  var reduceRight = createReduce(-1);

  // Return all the elements that pass a truth test.
  function filter(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  }

  // Return all the elements for which a truth test fails.
  function reject(obj, predicate, context) {
    return filter(obj, negate(cb(predicate)), context);
  }

  // Determine whether all of the elements pass a truth test.
  function every(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = !isArrayLike(obj) && keys(obj),
        length = (_keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  }

  // Determine if at least one element in the object passes a truth test.
  function some(obj, predicate, context) {
    predicate = cb(predicate, context);
    var _keys = !isArrayLike(obj) && keys(obj),
        length = (_keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = _keys ? _keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  }

  // Determine if the array or object contains a given item (using `===`).
  function contains(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return indexOf(obj, item, fromIndex) >= 0;
  }

  // Invoke a method (with arguments) on every item in a collection.
  var invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (isFunction$1(path)) {
      func = path;
    } else {
      path = toPath(path);
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `_.map`: fetching a property.
  function pluck(obj, key) {
    return map(obj, property(key));
  }

  // Convenience version of a common use case of `_.filter`: selecting only
  // objects containing specific `key:value` pairs.
  function where(obj, attrs) {
    return filter(obj, matcher(attrs));
  }

  // Return the maximum element (or element-based computation).
  function max(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  }

  // Return the minimum element (or element-based computation).
  function min(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  }

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `_.map`.
  function sample(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = values(obj);
      return obj[random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? clone(obj) : values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  }

  // Shuffle a collection.
  function shuffle(obj) {
    return sample(obj, Infinity);
  }

  // Sort the object's values by a criterion produced by an iteratee.
  function sortBy(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return pluck(map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  }

  // An internal function used for aggregate "group by" operations.
  function group(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  }

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  var groupBy = group(function(result, value, key) {
    if (has$1(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `_.groupBy`, but for
  // when you know that your index values will be unique.
  var indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  var countBy = group(function(result, value, key) {
    if (has$1(result, key)) result[key]++; else result[key] = 1;
  });

  // Split a collection into two arrays: one whose elements all pass the given
  // truth test, and one whose elements all do not pass the truth test.
  var partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Safely create a real, live array from anything iterable.
  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  function toArray(obj) {
    if (!obj) return [];
    if (isArray(obj)) return slice.call(obj);
    if (isString(obj)) {
      // Keep surrogate pair characters together.
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return map(obj, identity);
    return values(obj);
  }

  // Return the number of elements in a collection.
  function size(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : keys(obj).length;
  }

  // Internal `_.pick` helper function to determine whether `key` is an enumerable
  // property name of `obj`.
  function keyInObj(value, key, obj) {
    return key in obj;
  }

  // Return a copy of the object only containing the allowed properties.
  var pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (isFunction$1(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten$1(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the disallowed properties.
  var omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (isFunction$1(iteratee)) {
      iteratee = negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = map(flatten$1(keys, false, false), String);
      iteratee = function(value, key) {
        return !contains(keys, key);
      };
    }
    return pick(obj, iteratee, context);
  });

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  function initial(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  }

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. The **guard** check allows it to work with `_.map`.
  function first(array, n, guard) {
    if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
    if (n == null || guard) return array[0];
    return initial(array, array.length - n);
  }

  // Returns everything but the first entry of the `array`. Especially useful on
  // the `arguments` object. Passing an **n** will return the rest N values in the
  // `array`.
  function rest(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  }

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  function last(array, n, guard) {
    if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return rest(array, Math.max(0, array.length - n));
  }

  // Trim out all falsy values from an array.
  function compact(array) {
    return filter(array, Boolean);
  }

  // Flatten out an array, either recursively (by default), or up to `depth`.
  // Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.
  function flatten(array, depth) {
    return flatten$1(array, depth, false);
  }

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  var difference = restArguments(function(array, rest) {
    rest = flatten$1(rest, true, true);
    return filter(array, function(value){
      return !contains(rest, value);
    });
  });

  // Return a version of the array that does not contain the specified value(s).
  var without = restArguments(function(array, otherArrays) {
    return difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  function uniq(array, isSorted, iteratee, context) {
    if (!isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  }

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  var union = restArguments(function(arrays) {
    return uniq(flatten$1(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  function intersection(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  }

  // Complement of zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  function unzip(array) {
    var length = array && max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = pluck(array, index);
    }
    return result;
  }

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  var zip = restArguments(unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of `_.pairs`.
  function object(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  }

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](https://docs.python.org/library/functions.html#range).
  function range(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  }

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  function chunk(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  }

  // Helper function to continue chaining intermediate results.
  function chainResult(instance, obj) {
    return instance._chain ? _$1(obj).chain() : obj;
  }

  // Add your own custom functions to the Underscore object.
  function mixin(obj) {
    each(functions(obj), function(name) {
      var func = _$1[name] = obj[name];
      _$1.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_$1, args));
      };
    });
    return _$1;
  }

  // Add all mutator `Array` functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _$1.prototype[name] = function() {
      var obj = this._wrapped;
      if (obj != null) {
        method.apply(obj, arguments);
        if ((name === 'shift' || name === 'splice') && obj.length === 0) {
          delete obj[0];
        }
      }
      return chainResult(this, obj);
    };
  });

  // Add all accessor `Array` functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _$1.prototype[name] = function() {
      var obj = this._wrapped;
      if (obj != null) obj = method.apply(obj, arguments);
      return chainResult(this, obj);
    };
  });

  // Named Exports

  var allExports = {
    __proto__: null,
    VERSION: VERSION,
    restArguments: restArguments,
    isObject: isObject,
    isNull: isNull,
    isUndefined: isUndefined,
    isBoolean: isBoolean,
    isElement: isElement,
    isString: isString,
    isNumber: isNumber,
    isDate: isDate,
    isRegExp: isRegExp,
    isError: isError,
    isSymbol: isSymbol,
    isArrayBuffer: isArrayBuffer,
    isDataView: isDataView$1,
    isArray: isArray,
    isFunction: isFunction$1,
    isArguments: isArguments$1,
    isFinite: isFinite$1,
    isNaN: isNaN$1,
    isTypedArray: isTypedArray$1,
    isEmpty: isEmpty,
    isMatch: isMatch,
    isEqual: isEqual,
    isMap: isMap,
    isWeakMap: isWeakMap,
    isSet: isSet,
    isWeakSet: isWeakSet,
    keys: keys,
    allKeys: allKeys,
    values: values,
    pairs: pairs,
    invert: invert,
    functions: functions,
    methods: functions,
    extend: extend,
    extendOwn: extendOwn,
    assign: extendOwn,
    defaults: defaults,
    create: create,
    clone: clone,
    tap: tap,
    get: get,
    has: has,
    mapObject: mapObject,
    identity: identity,
    constant: constant,
    noop: noop,
    toPath: toPath$1,
    property: property,
    propertyOf: propertyOf,
    matcher: matcher,
    matches: matcher,
    times: times,
    random: random,
    now: now,
    escape: _escape,
    unescape: _unescape,
    templateSettings: templateSettings,
    template: template,
    result: result,
    uniqueId: uniqueId,
    chain: chain,
    iteratee: iteratee,
    partial: partial,
    bind: bind,
    bindAll: bindAll,
    memoize: memoize,
    delay: delay,
    defer: defer,
    throttle: throttle,
    debounce: debounce,
    wrap: wrap,
    negate: negate,
    compose: compose,
    after: after,
    before: before,
    once: once,
    findKey: findKey,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    sortedIndex: sortedIndex,
    indexOf: indexOf,
    lastIndexOf: lastIndexOf,
    find: find,
    detect: find,
    findWhere: findWhere,
    each: each,
    forEach: each,
    map: map,
    collect: map,
    reduce: reduce,
    foldl: reduce,
    inject: reduce,
    reduceRight: reduceRight,
    foldr: reduceRight,
    filter: filter,
    select: filter,
    reject: reject,
    every: every,
    all: every,
    some: some,
    any: some,
    contains: contains,
    includes: contains,
    include: contains,
    invoke: invoke,
    pluck: pluck,
    where: where,
    max: max,
    min: min,
    shuffle: shuffle,
    sample: sample,
    sortBy: sortBy,
    groupBy: groupBy,
    indexBy: indexBy,
    countBy: countBy,
    partition: partition,
    toArray: toArray,
    size: size,
    pick: pick,
    omit: omit,
    first: first,
    head: first,
    take: first,
    initial: initial,
    last: last,
    rest: rest,
    tail: rest,
    drop: rest,
    compact: compact,
    flatten: flatten,
    without: without,
    uniq: uniq,
    unique: uniq,
    union: union,
    intersection: intersection,
    difference: difference,
    unzip: unzip,
    transpose: unzip,
    zip: zip,
    object: object,
    range: range,
    chunk: chunk,
    mixin: mixin,
    'default': _$1
  };

  // Default Export

  // Add all of the Underscore functions to the wrapper object.
  var _ = mixin(allExports);
  // Legacy Node.js API.
  _._ = _;

  return _;

})));
//# sourceMappingURL=underscore-umd.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scrabblecore.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3NjcmFiYmxlY29yZS8uL25vZGVfbW9kdWxlcy9rbm9ja291dC9idWlsZC9vdXRwdXQva25vY2tvdXQtbGF0ZXN0LmpzIiwid2VicGFjazovL3NjcmFiYmxlY29yZS8uL3NyYy9jbGFzc2VzL2JhZy50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvY2xhc3Nlcy9nYW1lLnRzIiwid2VicGFjazovL3NjcmFiYmxlY29yZS8uL3NyYy9jbGFzc2VzL3JhY2sudHMiLCJ3ZWJwYWNrOi8vc2NyYWJibGVjb3JlLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvZW51bXMvYWN0aW9udHlwZS50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvZW51bXMvbGV0dGVyLnRzIiwid2VicGFjazovL3NjcmFiYmxlY29yZS8uL3NyYy9lbnVtcy9tdWx0aXBsaWVyLnRzIiwid2VicGFjazovL3NjcmFiYmxlY29yZS8uL3NyYy9lbnVtcy9tdWx0aXBsaWVydHlwZS50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvZnVuY3Rpb25zL2FjdGlvbmNoYW5nZXN0dXJuLnRzIiwid2VicGFjazovL3NjcmFiYmxlY29yZS8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlYmFnZnJvbWFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vc2NyYWJibGVjb3JlLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVib2FyZGZyb21hY3Rpb25zLnRzIiwid2VicGFjazovL3NjcmFiYmxlY29yZS8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlbmV3Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vc2NyYWJibGVjb3JlLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVwbGF5Y29tbWFuZC50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZXJhY2tmcm9tYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZXJhY2tzZnJvbWFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vc2NyYWJibGVjb3JlLy4vc3JjL2Z1bmN0aW9ucy9nZXRtb3ZlbG9nZnJvbWFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vc2NyYWJibGVjb3JlLy4vc3JjL2Z1bmN0aW9ucy9nZXRuZXh0dHVybi50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvZnVuY3Rpb25zL2dldHBvaW50c2Zyb21zcXVhcmUudHMiLCJ3ZWJwYWNrOi8vc2NyYWJibGVjb3JlLy4vc3JjL2Z1bmN0aW9ucy9nZXRzY29yZXNmcm9tYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvZnVuY3Rpb25zL2dldHR1cm5mcm9tYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvZnVuY3Rpb25zL3BhcnNlYWN0aW9uLnRzIiwid2VicGFjazovL3NjcmFiYmxlY29yZS8uL3NyYy9mdW5jdGlvbnMvcGFyc2Vib2FyZC50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvZnVuY3Rpb25zL3BhcnNlbGV0dGVyLnRzIiwid2VicGFjazovL3NjcmFiYmxlY29yZS8uL3NyYy9mdW5jdGlvbnMvcGFyc2VwbGF5Y29tbWFuZC50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvZnVuY3Rpb25zL3BhcnNlc3F1YXJlY29vcmRpbmF0ZXMudHMiLCJ3ZWJwYWNrOi8vc2NyYWJibGVjb3JlLy4vc3JjL2Z1bmN0aW9ucy9wbGF5Y29tbWFuZGhhc2xldHRlcnNmcm9tcmFjay50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvZnVuY3Rpb25zL3BsYXltb3ZlLnRzIiwid2VicGFjazovL3NjcmFiYmxlY29yZS8uL3NyYy9mdW5jdGlvbnMvcHJpbnRib2FyZC50cyIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvLi9zcmMvc2NyYWJibGVjb3JlLnRzIiwid2VicGFjazovL3NjcmFiYmxlY29yZS8uL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUtdW1kLmpzIiwid2VicGFjazovL3NjcmFiYmxlY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zY3JhYmJsZWNvcmUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsYUFBYSw0RUFBNEUsMkNBQTJDLGFBQWEsS0FBc0MsQ0FBQyxpQ0FBTyxDQUFDLE9BQVMsQ0FBQyxtQkFBUyxDQUFDLG9DQUFDLENBQUM7QUFBQTtBQUFBO0FBQUEsa0dBQUMsQ0FBQyxDQUF5RixDQUFDLGdCQUFnQixnQkFBZ0Isd0NBQXdDLGdCQUFnQixNQUFNLGtCQUFrQixnQ0FBZ0MsSUFBSSxJQUFJLE1BQU0sZ0JBQWdCLE1BQU0sa0JBQWtCO0FBQ3JnQix1QkFBdUIsZ0JBQWdCLHNFQUFzRSxpQkFBaUIscUJBQXFCLGlCQUFpQixxQkFBcUIsa0dBQWtHLEtBQUssd0JBQXdCLGtDQUFrQyxrQkFBa0IsK0JBQStCLGFBQWEsY0FBYyxvQkFBb0Isb0JBQW9CLFFBQVEsa0JBQWtCO0FBQ3hlLFdBQVcsV0FBVyxpRUFBaUUsZUFBZSxnQkFBZ0Isc0NBQXNDLGdCQUFnQiw2Q0FBNkMsU0FBUyxnQkFBZ0IsY0FBYyxTQUFTLG9CQUFvQix3QkFBd0IsNkJBQTZCLGNBQWMsRUFBRSxpQkFBaUIseUNBQXlDLGFBQWEsa0RBQWtELE1BQU07QUFDamUsMkRBQTJELCtHQUErRyxrQkFBa0IsbUNBQW1DLElBQUksY0FBYyxFQUFFLE9BQU8sa0JBQWtCLGlC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QUFDO0FBQ2pFLElBQUksWUFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsb0NBQW9DLEVBQUU7QUFDeEYsaUJBQWlCO0FBQ2pCLCtIQUErSCxtQkFBbUIsRUFBRTtBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBLCtCQUErQixrQkFBa0IsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZixjQUFjO0FBQ2QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0QkFBNEIsRUFBRSxpQkFBaUI7QUFDL0M7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw4QkFBOEI7QUFDdEQsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxpQkFBaUI7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFlBQVk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxlQUFlO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhCQUE4QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDBCQUEwQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4QkFBOEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQyxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFlBQVk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFlBQVk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDO0FBQ0Q7Ozs7Ozs7VUN6L0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1VDUEQ7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoic2NyYWJibGVjb3JlLmpzIiwic291cmNlUm9vdCI6IiJ9
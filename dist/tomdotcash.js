require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({5:[function(require,module,exports) {

},{}],4:[function(require,module,exports) {
"use strict";require("./index.sass");var e="16793c2cd11658bc4be9dc7d5fa5c848",n="https://api.openweathermap.org/data/2.5/weather?zip=94114,us&units=imperial&appid="+e;function t(e){e.json().then(function(e){var n=e.main.temp,t=e.main.temp_min,i=e.main.temp_max;document.getElementById("current").innerText=n+" F",document.getElementById("low").innerText=t+" F",document.getElementById("high").innerText=i+" F"})}function i(e){}function a(){var e=new Request(n);fetch(e,{method:"GET",cache:"no-cache"}).then(t,i)}document.addEventListener("DOMContentLoaded",function(){a()});
},{"./index.sass":5}]},{},[4])
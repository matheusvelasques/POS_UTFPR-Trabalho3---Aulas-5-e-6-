parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JQo1":[function(require,module,exports) {
var e=document.querySelector("#iniciar"),c=document.querySelector("#pausar"),t=document.querySelector("#parar");e.addEventListener("click",function(){return a("INICIAR")}),c.addEventListener("click",function(){return a("PAUSAR")}),t.addEventListener("click",function(){return a("PARAR")});var n=document.querySelector("output"),r=0,A="PARADO";function a(e){switch(A){case"PARADO":switch(e){case"INICIAR":A="RODANDO";break;case"PARAR":A="PARADO",r=0}break;case"RODANDO":switch(e){case"PAUSAR":A="PARADO";break;case"PARAR":A="PARADO",r=0}}}setInterval(function(){"RODANDO"===A&&(r+=100),n.innerHTML="".concat((r/1e3).toFixed(1)," s")},100);
},{}]},{},["JQo1"], null)
//# sourceMappingURL=/cronometro.5206a0a6.js.map
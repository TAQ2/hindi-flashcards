(this["webpackJsonphindi-flashcards"]=this["webpackJsonphindi-flashcards"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"english":"Hello","englishPronunciation":"Namaste","hindi":"\u0928\u092e\u0938\u094d\u0924\u0947","type":"WORD"},{"english":"One","englishPronunciation":"Ek","hindi":"\u090f\u0915","type":"WORD"},{"english":"Two","englishPronunciation":"Do","hindi":"\u0926\u094b","type":"WORD"},{"english":"Three","englishPronunciation":"Teen","hindi":"\u0924\u0940\u0928","type":"WORD"},{"english":"Four","englishPronunciation":"Chaar","hindi":"\u091a\u093e\u0930","type":"WORD"}]')},,,,function(e,n,t){e.exports=t(12)},,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(5),i=t.n(l),o=(t(11),t(1)),c=t(3);function u(e){return Math.floor(Math.random()*e)}function s(e){for(var n=e.length;n>0;){var t=u(n),a=e[--n];e[n]=e[t],e[t]=a}return e}function h(e,n){for(var t=[e];3!==t.length;){var a=u(n.length);t.includes(n[a])||t.push(n[a])}return s(t)}var d=t(2);var f=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],l=n[1],i=Object(a.useState)(null),u=Object(o.a)(i,2),f=u[0],m=u[1],g=Object(a.useState)(s(Object(c.a)(d))),v=Object(o.a)(g,2),b=v[0],E=v[1],O=b[b.length-1],p=Object(a.useState)(h(O,d)),j=Object(o.a)(p,2),w=j[0],k=j[1],y=function(e){for(var n=0,t=0;t<e.length;t++){var a=e[t];a.answer===a.question&&n++}return n}(t);return 0===b.length?r.a.createElement("div",null,r.a.createElement("div",null,"End of questions"),r.a.createElement("div",null,"Number of correct",y),r.a.createElement("div",null,"Total",t.length)):r.a.createElement("div",null,r.a.createElement("div",null,O.english),r.a.createElement("br",null),w.map((function(e,n){return r.a.createElement("div",{key:n,onClick:function(){return m(e)},style:{color:f===e?"red":"black"}},e.englishPronunciation)})),null!=f&&r.a.createElement("button",{onClick:function(e,n,a){return function(){m(null),l([].concat(Object(c.a)(t),[{questionType:"WORD",question:e,choices:n,answer:a}]));var r=b.filter((function(e,n){return n!==b.length-1}));E(r),k(h(r[r.length-1],d))}}(O,w,f)},"Confirmation"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"Number of correct",y),r.a.createElement("div",null,"Total",t.length))};function m(e){var n=e.setHasStarted;e.config,e.setConfig;return r.a.createElement("div",null,r.a.createElement("div",null,"fsd"),r.a.createElement("button",{onClick:function(){return n(!0)}},"Start"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement((function(){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),t=n[0],l=n[1],i=Object(a.useState)({questionCount:d.length}),c=Object(o.a)(i,2),u=c[0],s=c[1];return t?r.a.createElement(f,null):r.a.createElement(m,{setHasStarted:l,config:u,setConfig:s})}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.6a8632ef.chunk.js.map
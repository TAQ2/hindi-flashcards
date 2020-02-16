(this["webpackJsonphindi-flashcards"]=this["webpackJsonphindi-flashcards"]||[]).push([[0],{15:function(n,e,t){n.exports=t(22)},22:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(0),a=t.n(r),o=t(10),l=t.n(o),s=t(3),h=t(4),c=t(8),d=t(2);function u(n){return Math.floor(Math.random()*n)}function g(n){for(var e=n.length;e>0;){var t=u(e),i=n[--e];n[e]=n[t],n[t]=i}return n}function m(n,e,t){for(var i=[n];i.length!==t;){var r=u(e.length);i.includes(e[r])||i.push(e[r])}return g(i)}function p(n){for(var e=0,t=0;t<n.length;t++){var i=n[t];i.answer===i.question&&e++}return e}var f=t(5),y="rgb(48, 102, 190)",b="rgb(17, 157, 164)",O="rgb(109, 157, 197)",v="rgb(174, 236, 239)",E=576,w=750,x=1050;function P(){var n=Object(i.a)(["\n  background-color: ",";\n  border-radius: 5px;\n  color: ",";\n  padding: 0.2rem 1rem;\n  cursor: ",";\n  border: ","px solid;\n  font-size: ","rem;\n  opacity: ",";\n"]);return P=function(){return n},n}var R=d.b.button(P(),v,(function(n){return n.disabled?"gray":b}),(function(n){return n.disabled?"auto":"pointer"}),(function(n){return n.isSmall?2:4}),(function(n){return n.isSmall?1:2}),(function(n){return n.disabled?.5:1}));function D(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: ","px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return D=function(){return n},n}function W(){var n=Object(i.a)(["\n  text-align: center;\n  padding-top: 1rem;\n\n  @media (min-width: ","px) {\n    display: none;\n  }\n"]);return W=function(){return n},n}function k(){var n=Object(i.a)(["\n  padding-top: 4rem;\n\n  @media (max-width: ","px) {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n\n  @media (max-width: 900px) {\n    font-size: 0.7rem;\n  }\n\n  @media (max-width: ","px) {\n    display: none;\n  }\n"]);return k=function(){return n},n}var j=d.b.div(k(),x,w),S=d.b.div(W(),w+1),C=d.b.div(D(),E);function z(n){var e=n.history,t=n.handleExitHistory,i=n.isResults,r=i?function(){return a.a.createElement(R,{onClick:t,isSmall:!0,style:{position:"absolute",top:10,right:10}},"Restart")}:function(){return a.a.createElement(h.c,{onClick:t,style:{position:"absolute",top:10,right:10,fontSize:"3rem",color:"gray",cursor:"pointer"}})};return a.a.createElement(a.a.Fragment,null,a.a.createElement(r,null),a.a.createElement("div",{style:{padding:"4rem 0",margin:"0 auto",display:"flex",flexDirection:"column"}},i&&a.a.createElement("div",{style:{fontSize:"2rem",textAlign:"center",color:O}},"Congratulations! You got ",p(e)," out of ",e.length," correct."),a.a.createElement(j,null,e.map((function(n,e){return a.a.createElement("div",{key:e,style:{display:"flex",fontSize:"2em",color:y}},a.a.createElement("span",{style:{width:"20%",fontWeight:"bold"}},n.question[n.type[0]]),n.choices.map((function(e,t){var i=y;return e===n.question?i="green":e===n.answer&&n.answer!==n.question&&(i="red"),a.a.createElement("span",{key:t,style:{width:"20%",color:i}},e[n.type[1]])})))}))),a.a.createElement(S,null,e.map((function(n,e){return a.a.createElement("div",{key:e,style:{margin:"1rem 0",padding:"1rem 0"}},a.a.createElement("div",{style:{fontSize:"1.5em",fontWeight:"bold",color:y}},n.question[n.type[0]]),a.a.createElement(C,null,n.choices.map((function(e,t){var i=y;return e===n.question?i="green":e===n.answer&&n.answer!==n.question&&(i="red"),a.a.createElement("span",{key:t,style:{width:"25%",color:i,fontSize:"1.5rem"}},e[n.type[1]])}))))})))))}function N(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  color: ",";\n\n  @media (max-width: ","px) {\n    flex-direction: column;\n    margin: 0 auto;\n  }\n"]);return N=function(){return n},n}function q(){var n=Object(i.a)(["\n  font-size: 3rem;\n  line-height: 3rem;\n  cursor: pointer;\n  padding: 0 1rem;\n  width: 22%;\n  -webkit-tap-highlight-color: transparent;\n\n  @media (max-width: ","px) {\n    margin-bottom: 1rem;\n    width: 100%;\n  }\n"]);return q=function(){return n},n}function B(){var n=Object(i.a)(["\n  color: ",";\n  // margin-bottom: 10rem;\n  font-size: 7rem;\n  // set lineheight because the set default between english and hindi is different @Cleanup\n  line-height: 8rem;\n\n  @media (max-width: ","px) {\n    margin-bottom: 2rem;\n    font-size: 6rem;\n    // set lineheight because the set default between english and hindi is different @Cleanup\n    line-height: 6rem;\n  }\n\n  @media (max-width: ","px) {\n    margin-bottom: 2rem;\n    font-size: 5rem;\n    // set lineheight because the set default between english and hindi is different @Cleanup\n    line-height: 5rem;\n  }\n"]);return B=function(){return n},n}function H(){var n=Object(i.a)(["\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  color: ",";\n\n  @media (max-width: ","px) {\n    margin-bottom: 2rem;\n  }\n"]);return H=function(){return n},n}var F=d.b.div(H(),O,w),M=d.b.div(B(),y,w,E),U=d.b.div(q(),w),L=d.b.div(N(),O,w);function I(){var n,e=Math.floor(2*Math.random());return 0===e?n=["hindi","english"]:1===e&&(n=["english","hindi"]),n}var J=function(n){var e=n.config,t=n.setHasStarted,i=Object(r.useState)([]),o=Object(s.a)(i,2),l=o[0],d=o[1],u=Object(r.useState)(I()),y=Object(s.a)(u,2),b=y[0],O=y[1],v=Object(r.useState)(g(Object(c.a)(f)).slice(0,e.roundCount)),E=Object(s.a)(v,2),w=E[0],x=E[1],P=Object(r.useState)(null),D=Object(s.a)(P,2),W=D[0],k=D[1],j=Object(r.useState)(!1),S=Object(s.a)(j,2),C=S[0],N=S[1],q=w[w.length-1],B=Object(r.useState)(m(q,f,e.choiceCount)),H=Object(s.a)(B,2),J=H[0],T=H[1],V=function(){return function(){d([].concat(Object(c.a)(l),[{questionType:"WORD",question:q,choices:J,answer:W,type:b}])),k(null);var n=w.filter((function(n,e){return e!==w.length-1}));x(n),T(m(n[n.length-1],f,e.choiceCount)),O(I())}};Object(r.useEffect)((function(){var n=function(n){return"Enter"===n.key&&null!==W&&V()()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[W]);var A=p(l);return C?a.a.createElement(z,{history:l,handleExitHistory:function(){return N(!1)}}):0===w.length?a.a.createElement(z,{history:l,handleExitHistory:function(){return t(!1)},isResults:!0}):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{position:"absolute",top:10,right:10}},a.a.createElement(R,{onClick:function(){return N(!0)},isSmall:!0,style:{marginRight:"0.7rem"},disabled:0===l.length},"History"),a.a.createElement(R,{onClick:function(){return t(!1)},isSmall:!0},"Restart")),a.a.createElement("div",{style:{textAlign:"center",paddingTop:"4rem",display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"}},a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement(F,null,a.a.createElement(h.a,null),a.a.createElement("span",{style:{marginLeft:"1rem",marginRight:"3rem"}},A),a.a.createElement(h.c,null),a.a.createElement("span",{style:{marginLeft:"1rem"}},l.length-A))),a.a.createElement(M,null,q[b[0]]),a.a.createElement(L,null,J.map((function(n,e){return a.a.createElement(U,{key:e,onClick:function(){return k(n)}},a.a.createElement("div",{style:{borderBottom:W===n?"2px solid":"none",display:"inline"}},n[b[1]]))}))),a.a.createElement("div",null),a.a.createElement("div",{style:{marginBottom:"2rem"}},a.a.createElement(R,{onClick:V(),disabled:null==W},"Confirm"))))};function T(){var n=Object(i.a)(["\n  font-size: 9rem;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n  @media (max-width: ","px) {\n    font-size: 7rem;\n  }\n\n  @media (max-width: ","px) {\n    font-size: 4rem;\n  }\n"]);return T=function(){return n},n}var V=d.b.div(T(),y,w,E);function A(n){var e=n.setHasStarted;n.config,n.setConfig;return Object(r.useEffect)((function(){var n=function(n){return"Enter"===n.key&&e(!0)};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]),a.a.createElement("div",{style:{paddingTop:"4rem",height:"100%",display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems:"center"}},a.a.createElement("div",null),a.a.createElement(V,null,"Hindi Flashcards"),a.a.createElement("div",{style:{marginBottom:"3rem"}}),a.a.createElement("div",{style:{marginBottom:"2rem"}},a.a.createElement(R,{onClick:function(){return e(!0)}},"Start")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(){var n=Object(i.a)(["\n  body {\n    background-color: ",';\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html, body {\n    height: 100%;  \n  }\n\n  #root {\n    height: 100%;\n  }\n  \n  * {\n    box-sizing: border-box;\n  }\n\n']);return Y=function(){return n},n}var $=Object(d.a)(Y(),v);l.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement($,null),a.a.createElement((function(){var n=Object(r.useState)(!1),e=Object(s.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)({roundCount:f.length,choiceCount:4}),l=Object(s.a)(o,2),c=l[0],d=l[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{height:"100%",maxWidth:x,margin:"0 auto"}},t?a.a.createElement(J,{config:c,setHasStarted:i}):a.a.createElement(A,{setHasStarted:i,config:c,setConfig:d})),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.github.com/taq2/hindi-flashcards"},a.a.createElement(h.b,{style:{position:"fixed",bottom:10,right:10,color:"black",fontSize:"3rem"}})))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},5:function(n){n.exports=JSON.parse('[{"english":"hello","englishPronunciation":"namaste","hindi":"\u0928\u092e\u0938\u094d\u0924\u0947","gender":"","type":"WORD"},{"english":"sad","englishPronunciation":"udaas","hindi":"\u0909\u0926\u093e\u0938","gender":"","type":"WORD"},{"english":"happy","englishPronunciation":"khush","hindi":"\u0916\u0941\u0936"},{"english":"worry","englishPronunciation":"chinta","hindi":"\u091a\u093f\u0902\u0924\u093e","gender":"","type":"WORD"},{"english":"again","englishPronunciation":"phir","hindi":"\u092b\u093f\u0930","gender":"","type":"WORD"},{"english":"good","englishPronunciation":"achchha","hindi":"\u0905\u091a\u094d\u091b\u093e","gender":"","type":"WORD"},{"english":"student","englishPronunciation":"vidyaarthee","hindi":"\u0935\u093f\u0926\u094d\u092f\u093e\u0930\u094d\u0925\u0940","gender":"","type":"WORD"},{"english":"please","englishPronunciation":"krpya","hindi":"\u0915\u0943\u092a\u094d\u092f\u093e","gender":"","type":"WORD"},{"english":"thanks","englishPronunciation":"dhanyavaad","hindi":"\u0927\u0928\u094d\u092f\u0935\u093e\u0926","gender":"","type":"WORD"},{"english":"bye","englishPronunciation":"alavida","hindi":"\u0905\u0932\u0935\u093f\u0926\u093e","gender":"","type":"WORD"},{"english":"help","englishPronunciation":"madad","hindi":"\u092e\u0926\u0926","gender":"","type":"WORD"},{"english":"all","englishPronunciation":"sab","hindi":"\u0938\u092c","gender":"","type":"WORD"},{"english":"ill","englishPronunciation":"beemaar","hindi":"\u092c\u0940\u092e\u093e\u0930","gender":"","type":"WORD"},{"english":"surprised","englishPronunciation":"hairaan","hindi":"\u0939\u0948\u0930\u093e\u0928","gender":"","type":"WORD"},{"english":"ready","englishPronunciation":"taiyaar","hindi":"\u0924\u0948\u092f\u093e\u0930","gender":"","type":"WORD"},{"english":"but","englishPronunciation":"lekin","hindi":"\u0932\u0947\u0915\u093f\u0928","gender":"","type":"WORD"},{"english":"or","englishPronunciation":"ya","hindi":"\u092f\u093e","gender":"","type":"WORD"},{"english":"and","englishPronunciation":"aur","hindi":"\u0914\u0930","gender":"","type":"WORD"},{"english":"also","englishPronunciation":"bhee","hindi":"\u092d\u0940","gender":"","type":"WORD"},{"english":"hot","englishPronunciation":"garam","hindi":"\u0917\u0930\u092e","gender":"","type":"WORD"},{"english":"rain","englishPronunciation":"baarish","hindi":"\u092c\u093e\u0930\u093f\u0936","gender":"","type":"WORD"},{"english":"bad","englishPronunciation":"kharaab","hindi":"\u0916\u0930\u093e\u092c","gender":"","type":"WORD"},{"english":"very","englishPronunciation":"bahut","hindi":"\u092c\u0939\u0941\u0924","gender":"","type":"WORD"},{"english":"less","englishPronunciation":"kum","hindi":"\u0915\u092e"},{"english":"one","englishPronunciation":"ek","hindi":"\u090f\u0915","gender":"","type":"WORD"},{"english":"two","englishPronunciation":"do","hindi":"\u0926\u094b","gender":"","type":"WORD"},{"english":"three","englishPronunciation":"teen","hindi":"\u0924\u0940\u0928","gender":"","type":"WORD"},{"english":"four","englishPronunciation":"chaar","hindi":"\u091a\u093e\u0930","gender":"","type":"WORD"},{"english":"five","englishPronunciation":"paanch","hindi":"\u092a\u093e\u0902\u091a","gender":"","type":"WORD"},{"english":"six","englishPronunciation":"chhah","hindi":"\u091b\u0939","gender":"","type":"WORD"},{"english":"seven","englishPronunciation":"saat","hindi":"\u0938\u093e\u0924","gender":"","type":"WORD"},{"english":"eight","englishPronunciation":"aath","hindi":"\u0906\u0920","gender":"","type":"WORD"},{"english":"nine","englishPronunciation":"nau","hindi":"\u0928\u094c","gender":"","type":"WORD"},{"english":"ten","englishPronunciation":"das","hindi":"\u0926\u0938","gender":"","type":"WORD"},{"english":"umbrella","englishPronunciation":"chhataree","hindi":"\u091b\u0924\u0930\u0940","gender":"","type":"WORD"},{"english":"waterfall","englishPronunciation":"jharana","hindi":"\u091d\u0930\u0928\u093e","gender":"","type":"WORD"},{"english":"wedding","englishPronunciation":"shaadee","hindi":"\u0936\u093e\u0926\u0940","gender":"","type":"WORD"},{"english":"new","englishPronunciation":"naya","hindi":"\u0928\u092f\u093e","gender":"","type":"WORD"},{"english":"today","englishPronunciation":"aaj","hindi":"\u0906\u091c","gender":"","type":"WORD"},{"english":"nowadays","englishPronunciation":"aajakal","hindi":"\u0906\u091c\u0915\u0932","gender":"","type":"WORD"},{"english":"work","englishPronunciation":"kaam","hindi":"\u0915\u093e\u092e","gender":"M","type":"NOUN"},{"english":"family","englishPronunciation":"parivaar","hindi":"\u092a\u0930\u093f\u0935\u093e\u0930","gender":"M","type":"NOUN"},{"english":"food","englishPronunciation":"khaana","hindi":"\u0916\u093e\u0928\u093e","gender":"M","type":"NOUN"},{"english":"weather","englishPronunciation":"mausam","hindi":"\u092e\u094c\u0938\u092e","gender":"M","type":"NOUN"},{"english":"health","englishPronunciation":"sehat","hindi":"\u0938\u0947\u0939\u0924","gender":"F","type":"NOUN"},{"english":"wellbeing","englishPronunciation":"tabiyat","hindi":"\u0924\u092c\u093f\u092f\u0924","gender":"F","type":"NOUN"},{"english":"cold","englishPronunciation":"thand","hindi":"\u0920\u0902\u0921","gender":"","type":"ADJECTIVE"},{"english":"to meet","englishPronunciation":"meelana","hindi":"\u092e\u0940\u0932\u0928\u093c\u093e","gender":"","type":"VERB"},{"english":"to do","englishPronunciation":"karana","hindi":"\u0915\u0930\u0928\u093e","gender":"","type":"VERB"},{"english":"to be","englishPronunciation":"hona","hindi":"\u0939\u094b\u0928\u093e","gender":"","type":"VERB"}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.08394f79.chunk.js.map
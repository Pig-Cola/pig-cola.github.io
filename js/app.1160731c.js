(function(e){function n(n){for(var r,o,c=n[0],u=n[1],s=n[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==a[c]&&(r=!1)}r&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({"group-main":"group-main"}[e]||e)+"."+{"group-main":"f30287df"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"group-main":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({"group-main":"group-main"}[e]||e)+"."+{"group-main":"137c5b3a"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===r||p===a))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],p=s.getAttribute("data-href");if(p===r||p===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],l.parentNode.removeChild(l),t(i)},l.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=i);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,u.nc&&p.setAttribute("nonce",u.nc),p.src=c(e);var f=new Error;s=function(n){p.onerror=p.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:p})}),12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=p;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1f8e":function(e,n,t){"use strict";var r={};t.r(r),t.d(r,"audio",(function(){return s})),t.d(r,"errSound",(function(){return p})),t.d(r,"textLineSpace",(function(){return f})),t.d(r,"waitTime",(function(){return l})),t.d(r,"toInt",(function(){return d})),t.d(r,"stringReverse",(function(){return m})),t.d(r,"numberComma",(function(){return h}));var o=t("2909"),a=t("1da1"),i=(t("96cf"),t("a15b"),t("ac1f"),t("1276"),t("d3b7"),t("25f0"),t("00b4"),t("fb6a"),t("d81d"),t("2ef0")),c=t.n(i),u=t("5e54"),s=(new u["a"]).toDestination();s.volume.value=-2;var p=function(){var e=s.now();s.triggerAttackRelease("a2","16n",e),s.triggerAttackRelease("a2","16n",e+.15)},f=function(e){return e.split("\n").join("<br>")},l=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout((function(){e()}),n)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(e){return e=c.a.toInteger(e),e},m=function(e){return Object(o["a"])(e).reverse().join("")},h=function(e){if(e=c.a.toString(e),/[^0-9.]/.test(e))return"";var n="",t=e.indexOf(".");t>-1&&(n=e.slice(t),e=e.slice(0,t));var r=c()(Object(o["a"])(e).reverse()).chunk(3).map((function(e){return e.join("")})).join(",");return m(r)+n};n["a"]=r},"21dc":function(e,n,t){},"2d08":function(e,n,t){},"35c0":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("page-header"),t("router-view")],1)},a=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header-wrapper"},[t("div",{staticClass:"header"},[t("div",{staticClass:"banch",on:{click:function(n){return e.banchClick()}}},[e._v("성능 테스트")]),t("div",{staticClass:"dash"},[e._v("대시보드")]),[t("div",{staticClass:"sign-up"},[e._v("회원가입")]),t("div",{staticClass:"sign-in"},[e._v("로그인")])]],2)])},c=[],u={name:"Header",methods:{banchClick:function(){this.$router.push({name:"Main"}).catch((function(){}))},dashClick:function(){},signUpClick:function(){},signInClick:function(){}}},s=u,p=(t("a397"),t("2877")),f=Object(p["a"])(s,i,c,!1,null,"0f66399b",null),l=f.exports,d={name:"App",components:{PageHeader:l}},m=d,h=(t("5c0b"),Object(p["a"])(m,o,a,!1,null,null,null)),v=h.exports,b=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),g=function(){return t.e("group-main").then(t.bind(null,"841d"))},y=function(){return t.e("group-main").then(t.bind(null,"387d"))},w=function(){return t.e("group-main").then(t.bind(null,"1baf"))};r["a"].use(b["a"]);var C=new b["a"]({routes:[{path:"/",name:"Main",component:g},{path:"/test",component:w,redirect:{name:"Main"},children:[{path:"reaction",name:"Reaction",component:g,props:{testType:"reaction"}},{path:"sequence",name:"Sequence",component:g,props:{testType:"sequence"}},{path:"aim",name:"Aim",component:g,props:{testType:"aim"}},{path:"number",name:"Number",component:g,props:{testType:"number"}},{path:"word",name:"Word",component:g,props:{testType:"word"}}]},{path:"/play",component:w,redirect:{name:"Main"},children:[{path:"reaction",name:"PlayReaction",component:y,props:{testType:"reaction"}},{path:"sequence",name:"PlaySequence",component:y,props:{testType:"sequence"}},{path:"word",name:"PlayWord",component:y,props:{testType:"word"}},{path:"number",name:"PlayNumber",component:y,props:{testType:"number"}},{path:"aim",name:"PlayAim",component:y,props:{testType:"aim"}}]},{path:"*",redirect:{name:"Main"}}],mode:"history"}),j=t("5530"),k=(t("a4d3"),t("e01a"),t("b64b"),t("2f62"));r["a"].use(k["a"]);var T=new k["a"].Store({state:{title:{banchmark:"테스트 시작",reaction:"반응 속도",sequence:"순서 기억하기",aim:"표적 누르기",number:"숫자 기억하기",word:"단어 기억하기"},description:{banchmark:"주어진 테스트를 통해 성능을 확인합니다.\n테스트는 랜덤으로 주어지며, 하단에서 선택할 수 있습니다.\n\n지금은 서버와 관련된 기능을 이용하실 수 없습니다.\n(대시보드, 회원가입, 로그인, 결과저장 등등)",reaction:"화면의 색이 변할 때 빠르게 반응하세요.\n색이 변하기 전에 반응한 것은 반영되지 않습니다.",sequence:"타일이 생성되는 순서를 기억하세요.\n순서대로 누르세요.",aim:"30개의 표적을 빠르게 누르세요.",number:"숫자를 기억하세요.\n자릿수가 점점 증가합니다.",word:"단어가 등장하면 이미 등장했던 단어인지,\n처음 등장하는 단어인지 선택하세요."},icon:{banchmark:"",reaction:"power",sequence:"delicious",aim:"target",number:"calculator",word:"font-size"}},getters:{info:function(e){return function(n){return{title:e.title[n],description:e.description[n],icon:e.icon[n]}}},typeList:function(e){var n=Object(j["a"])({},e.title);return delete n.banchmark,Object.keys(n)}}}),O=(t("6ed9"),t("21dc"),t("35c0"),t("2ef0")),_=t.n(O),x=function(e){return console.log(e),e},E=function(){_.a.mixin({touch:x},{chain:!0})},P=t("6b26"),S=(t("4de4"),t("1f8e"));function q(e){e.filter("int",S["a"].toInt),e.filter("stringReverse",S["a"].stringReverse),e.filter("numberComma",S["a"].numberComma)}function A(e){e.directive("touch",{bind:function(e,n){(n.modifiers||{}).start&&e.addEventListener("touchstart",(function(n){n.preventDefault(),e.dispatchEvent(new Event("mousedown"))})),(n.modifiers||{}).end&&e.addEventListener("touchend",(function(n){n.preventDefault(),e.dispatchEvent(new Event("mouseup"))}))}})}function M(e){e.use(q),e.use(A)}r["a"].config.productionTip=!1,E(),r["a"].use(M),r["a"].component("my-icon",P["a"]),new r["a"]({router:C,store:T,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"6b26":function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("i",e._g({staticClass:"my-icon",class:e.iconClass},e.$listeners))},o=[],a=(t("498a"),t("2ef0")),i=t.n(a),c={name:"MyIcon",computed:{slotText:function(){return i.a.get(this.$slots,"default[0].text","").trim()},iconClass:function(){return this.slotText?"icon-"+this.slotText:""}},methods:{}},u=c,s=(t("f7cf"),t("2877")),p=Object(s["a"])(u,r,o,!1,null,"3fa6b938",null);n["a"]=p.exports},"6ed9":function(e,n,t){},"9c0c":function(e,n,t){},"9c18":function(e,n,t){},a397:function(e,n,t){"use strict";t("2d08")},f7cf:function(e,n,t){"use strict";t("9c18")}});
//# sourceMappingURL=app.1160731c.js.map
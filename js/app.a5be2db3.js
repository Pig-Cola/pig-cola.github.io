(function(e){function n(n){for(var r,o,c=n[0],u=n[1],s=n[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(n);while(p.length)p.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==a[c]&&(r=!1)}r&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({"group-main":"group-main"}[e]||e)+"."+{"group-main":"05e999c1"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"group-main":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({"group-main":"group-main"}[e]||e)+"."+{"group-main":"b89a407d"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return n()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),t(i)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var p=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,t[1](p)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var p=0;p<s.length;p++)n(s[p]);var f=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0180":function(e,n,t){"use strict";t("d6da")},"1f8e":function(e,n,t){"use strict";var r={};t.r(r),t.d(r,"audio",(function(){return u})),t.d(r,"errSound",(function(){return s})),t.d(r,"toInt",(function(){return l})),t.d(r,"stringReverse",(function(){return p})),t.d(r,"numberComma",(function(){return f})),t.d(r,"textLineSpace",(function(){return d}));var o=t("2909"),a=(t("a15b"),t("d3b7"),t("25f0"),t("ac1f"),t("00b4"),t("fb6a"),t("d81d"),t("1276"),t("2ef0")),i=t.n(a),c=t("5e54"),u=(new c["a"]).toDestination();u.volume.value=-2;var s=function(){var e=u.now();u.triggerAttackRelease("a2","16n",e),u.triggerAttackRelease("a2","16n",e+.15)},l=function(e){return e=i.a.toInteger(e),e},p=function(e){return Object(o["a"])(e).reverse().join("")},f=function(e){if(e=i.a.toString(e),/[^0-9.]/.test(e))return"";var n="",t=e.indexOf(".");t>-1&&(n=e.slice(t),e=e.slice(0,t));var r=i()(Object(o["a"])(e).reverse()).chunk(3).map((function(e){return e.join("")})).join(",");return p(r)+n},d=function(e){return e.split("\n").join("<br>")};n["a"]=r},"21dc":function(e,n,t){},"35c0":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("page-header"),t("router-view")],1)},a=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header"},[t("div",{staticClass:"banch",on:{click:function(n){return e.banchClick()}}},[e._v("성능 테스트")]),t("div",{staticClass:"dash"},[e._v("대시보드")]),[t("div",{staticClass:"sign-up"},[e._v("회원가입")]),t("div",{staticClass:"sign-in"},[e._v("로그인")])]],2)},c=[],u={name:"Header",methods:{banchClick:function(){this.$router.push({name:"Main"}).catch((function(){}))},dashClick:function(){},signUpClick:function(){},signInClick:function(){}}},s=u,l=(t("0180"),t("2877")),p=Object(l["a"])(s,i,c,!1,null,"6206e3bf",null),f=p.exports,d={name:"App",components:{PageHeader:f}},m=d,h=(t("5c0b"),Object(l["a"])(m,o,a,!1,null,null,null)),v=h.exports,b=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),g=function(){return t.e("group-main").then(t.bind(null,"841d"))},y=function(){return t.e("group-main").then(t.bind(null,"387d"))},w=function(){return t.e("group-main").then(t.bind(null,"1baf"))};r["a"].use(b["a"]);var C=new b["a"]({routes:[{path:"/",name:"Main",component:g},{path:"/test",component:w,redirect:{name:"Main"},children:[{path:"reaction",name:"Reaction",component:g,props:{testType:"reaction"}},{path:"sequence",name:"Sequence",component:g,props:{testType:"sequence"}},{path:"word",name:"Word",component:g,props:{testType:"word"}}]},{path:"/play",component:w,redirect:{name:"Main"},children:[{path:"reaction",name:"PlayReaction",component:y,props:{testType:"reaction"}},{path:"sequence",name:"PlaySequence",component:y,props:{testType:"sequence"}},{path:"word",name:"PlayWord",component:y,props:{testType:"word"}}]},{path:"*",redirect:{name:"Main"}}],mode:"history"}),j=t("5530"),k=(t("a4d3"),t("e01a"),t("b64b"),t("2f62"));r["a"].use(k["a"]);var O=new k["a"].Store({state:{title:{banchmark:"테스트 시작",reaction:"반응 속도",sequence:"순서 기억",word:"단어 기억하기"},description:{banchmark:"주어진 테스트를 통해 성능을 확인합니다.\n테스트는 랜덤으로 주어지며, 하단에서 선택할 수 있습니다.",reaction:"화면의 색이 변할 때 빠르게 반응하세요.\n색이 변하기 전에 반응한 것은 반영되지 않습니다.",sequence:"타일이 생성되는 순서를 기억하세요.",aim:"30개의 표적을 빠르게 누르세요.",number:"점점 증가하는 숫자를 기억하세요.",word:"단어가 등장하면 이미 등장했던 단어인지,\n처음 등장하는 단어인지 선택하세요."},icon:{banchmark:"",reaction:"power",sequence:"delicious",aim:"",number:"",word:"font-size"}},getters:{info:function(e){return function(n){return{title:e.title[n],description:e.description[n],icon:e.icon[n]}}},typeList:function(e){var n=Object(j["a"])({},e.title);return delete n.banchmark,Object.keys(n)}}}),_=(t("6ed9"),t("21dc"),t("35c0"),t("4de4"),t("1f8e"));function T(e){e.filter("int",_["a"].toInt),e.filter("stringReverse",_["a"].stringReverse),e.filter("numberComma",_["a"].numberComma)}var x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("i",{staticClass:"my-icon",class:e.iconClass})},S=[],P=(t("498a"),t("2ef0")),E=t.n(P),q={name:"MyIcon",computed:{slotText:function(){return E.a.get(this.$slots,"default[0].text","").trim()},iconClass:function(){return this.slotText?"icon-"+this.slotText:""}}},M=q,A=(t("6fa6"),Object(l["a"])(M,x,S,!1,null,"036789c4",null)),L=A.exports;r["a"].config.productionTip=!1,r["a"].use(T),r["a"].component("my-icon",L),new r["a"]({router:C,store:O,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"6ed9":function(e,n,t){},"6fa6":function(e,n,t){"use strict";t("9d50")},"9c0c":function(e,n,t){},"9d50":function(e,n,t){},d6da:function(e,n,t){}});
//# sourceMappingURL=app.a5be2db3.js.map
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[180],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),b=p(t),c=r,u=b["".concat(i,".").concat(c)]||b[c]||y[c]||l;return t?o.createElement(u,a(a({ref:n},s),{},{components:t})):o.createElement(u,a({ref:n},s))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=b;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,a[1]=m;for(var p=2;p<l;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1418:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return b}});var o=t(7462),r=t(3366),l=(t(7294),t(3905)),a=["components"],m={sidebar_position:6},i=void 0,p={unversionedId:"ES/symbol",id:"ES/symbol",isDocsHomePage:!1,title:"symbol",description:"\u7b80\u4ecb",source:"@site/docs/ES/symbol.md",sourceDirName:"ES",slug:"/ES/symbol",permalink:"/my-website/docs/ES/symbol",editUrl:"https://github.com/Min-wys/my-website/edit/master/docs/ES/symbol.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"class\u7684\u7ee7\u627f",permalink:"/my-website/docs/ES/class\u7684\u7ee7\u627f"},next:{title:"bigjs",permalink:"/my-website/docs/Big/bigjs"}},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"Symbol.prototype.description",id:"symbolprototypedescription",children:[]},{value:"Symbol\u4f5c\u4e3a\u5c5e\u6027\u540d",id:"symbol\u4f5c\u4e3a\u5c5e\u6027\u540d",children:[]},{value:"\u5c5e\u6027\u540d\u904d\u5386",id:"\u5c5e\u6027\u540d\u904d\u5386",children:[]},{value:"Symbol.for()\uff0cSymbol.keyFor()",id:"symbolforsymbolkeyfor",children:[]}],y={toc:s};function b(e){var n=e.components,t=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"symbol\u662f\u4e00\u79cd\u65b0\u7684\u6570\u636e\u7c7b\u578b\uff08object, string,number,undefined,null.boolean,bigint\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528typeof\u68c0\u6d4b\u8fd4\u56de\u7684\u662fsymbol")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"symbol\u751f\u6210\u7684\u662f\u4e00\u4e2a\u72ec\u4e00\u65e0\u4e8c\u7684\u503c\uff0c\u4e0d\u53ef\u4ee5\u4f7f\u7528new\u8fdb\u884c\u8c03\u7528")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c5e\u6027\u540d\u53ef\u4ee5\u4f7f\u7528symbol"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let s = Symbol();\ntypeof s\n// \"symbol\"\nconst obj = {\n    [s]:'nihao'\n}\nconsole.log(obj[s]) // nihao\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"symbol\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53c2\u6570\uff0c\u8868\u793a\u5bf9 Symbol \u5b9e\u4f8b\u7684\u63cf\u8ff0\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u5728\u63a7\u5236\u53f0\u663e\u793a\uff0c\u6216\u8005\u8f6c\u4e3a\u5b57\u7b26\u4e32\u65f6\uff0c\u6bd4\u8f83\u5bb9\u6613\u533a\u5206\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let s1 = Symbol('foo');\nlet s2 = Symbol('bar');\n\ns1 // Symbol(foo)\ns2 // Symbol(bar)\n\ns1.toString() // \"Symbol(foo)\"\ns2.toString() // \"Symbol(bar)\"\n//s1\u548cs2\u662f\u4e0d\u76f8\u7b49\u7684\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7c7b\u578b\u8f6c\u6362"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u53ef\u4ee5\u4e0e\u5176\u4ed6\u7684\u7c7b\u578b\u8fdb\u884c\u8fd0\u7b97\uff0c\u4f1a\u62a5\u9519")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Symbol \u503c\u53ef\u4ee5\u663e\u5f0f\u8f6c\u4e3a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let sym = Symbol('My symbol');\n\nString(sym) // 'Symbol(My symbol)'\nsym.toString() // 'Symbol(My symbol)'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Symbol \u503c\u4e5f\u53ef\u4ee5\u8f6c\u4e3a\u5e03\u5c14\u503c\uff0c\u4f46\u662f\u4e0d\u80fd\u8f6c\u4e3a\u6570\u503c\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let sym = Symbol();\nBoolean(sym) // true\n!sym  // false\n// \u6570\u503c\nNumber(sym) // TypeError\nsym + 2 // TypeError\n")))))),(0,l.kt)("h2",{id:"symbolprototypedescription"},"Symbol.prototype.description"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u83b7\u53d6symbol\u7684\u63cf\u8ff0\u7b26"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const sym = Symbol('foo');\nsym.description // \"foo\"\n")))),(0,l.kt)("h2",{id:"symbol\u4f5c\u4e3a\u5c5e\u6027\u540d"},"Symbol\u4f5c\u4e3a\u5c5e\u6027\u540d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let mySymbol = Symbol();\n\n// \u7b2c\u4e00\u79cd\u5199\u6cd5\nlet a = {};\na[mySymbol] = 'Hello!';\n\n// \u7b2c\u4e8c\u79cd\u5199\u6cd5\nlet a = {\n  [mySymbol]: 'Hello!'\n};\n\n// \u7b2c\u4e09\u79cd\u5199\u6cd5\nlet a = {};\nObject.defineProperty(a, mySymbol, { value: 'Hello!' });\n\n// \u4ee5\u4e0a\u5199\u6cd5\u90fd\u5f97\u5230\u540c\u6837\u7ed3\u679c\na[mySymbol] // \"Hello!\"\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Symbol \u503c\u4f5c\u4e3a\u5bf9\u8c61\u5c5e\u6027\u540d\u65f6\uff0c\u4e0d\u80fd\u7528\u70b9\u8fd0\u7b97\u7b26\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySymbol = Symbol();\nconst a = {};\n\na.mySymbol = 'Hello!'; // mySymbol\u5f53\u6210\u5b57\u7b26\u4e32\u4e86\na[mySymbol] // undefined\na['mySymbol'] // \"Hello!\"\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u5bf9\u8c61\u7684\u5185\u90e8\uff0c\u4f7f\u7528 Symbol \u503c\u5b9a\u4e49\u5c5e\u6027\u65f6\uff0cSymbol \u503c\u5fc5\u987b\u653e\u5728\u65b9\u62ec\u53f7\u4e4b\u4e2d\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let s = Symbol();\n\nlet obj = {\n  [s]: function (arg) { ... }\n};\n\nobj[s](123);\n// \u7b80\u5199\u4e3a\u4e0b\u9762\u8fd9\u4e2a\nlet obj = {\n  [s](arg) { ... }\n};\n")))),(0,l.kt)("h2",{id:"\u5c5e\u6027\u540d\u904d\u5386"},"\u5c5e\u6027\u540d\u904d\u5386"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Symbol \u4f5c\u4e3a\u5c5e\u6027\u540d\uff0c\u904d\u5386\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u8be5\u5c5e\u6027\u4e0d\u4f1a\u51fa\u73b0\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"for...in"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"for...of"),"\u5faa\u73af\u4e2d\uff0c\u4e5f\u4e0d\u4f1a\u88ab",(0,l.kt)("inlineCode",{parentName:"p"},"Object.keys()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Object.getOwnPropertyNames()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),"\u8fd4\u56de\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Object.getOwnPropertySymbols()"),"\u65b9\u6cd5\uff0c\u53ef\u4ee5\u83b7\u53d6\u6307\u5b9a\u5bf9\u8c61\u7684\u6240\u6709 Symbol \u5c5e\u6027\u540d\u3002\u8be5\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u6210\u5458\u662f\u5f53\u524d\u5bf9\u8c61\u7684\u6240\u6709\u7528\u4f5c\u5c5e\u6027\u540d\u7684 Symbol \u503c\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {};\nlet a = Symbol('a');\nlet b = Symbol('b');\n\nobj[a] = 'Hello';\nobj[b] = 'World';\n\nconst objectSymbols = Object.getOwnPropertySymbols(obj);\n\nobjectSymbols\n// [Symbol(a), Symbol(b)]\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53e6\u4e00\u4e2a\u65b0\u7684 API\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Reflect.ownKeys()"),"\u65b9\u6cd5\u53ef\u4ee5\u8fd4\u56de\u6240\u6709\u7c7b\u578b\u7684\u952e\u540d\uff0c\u5305\u62ec\u5e38\u89c4\u952e\u540d\u548c Symbol \u952e\u540d\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let obj = {\n  [Symbol(\'my_key\')]: 1,\n  enum: 2,\n  nonEnum: 3\n};\n\nReflect.ownKeys(obj)\n//  ["enum", "nonEnum", Symbol(my_key)]\n')))),(0,l.kt)("h2",{id:"symbolforsymbolkeyfor"},"Symbol.for()\uff0cSymbol.keyFor()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Symbol.for()\u4f7f\u7528\u7684\u662f\u540c\u4e00\u4e2aSymbol\u503c"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let s1 = Symbol.for('foo');\nlet s2 = Symbol.for('foo');\n\ns1 === s2 // true\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Symbol.for()"),"\u4e3a Symbol \u503c\u767b\u8bb0\u7684\u540d\u5b57\uff0c\u662f\u5168\u5c40\u73af\u5883\u7684\uff0c\u4e0d\u7ba1\u6709\u6ca1\u6709\u5728\u5168\u5c40\u73af\u5883\u8fd0\u884c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Symbol.keyFor()"),"\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5df2\u767b\u8bb0\u7684 Symbol \u7c7b\u578b\u503c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let s1 = Symbol.for("foo");\nSymbol.keyFor(s1) // "foo"\n\nlet s2 = Symbol("foo");\nSymbol.keyFor(s2) // undefined\n')))))}b.isMDXComponent=!0}}]);
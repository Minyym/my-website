"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1342],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(n),d=a,y=s["".concat(l,".").concat(d)]||s[d]||k[d]||p;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<p;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2606:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return s}});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),i=["components"],o={sidebar_position:7},l=void 0,m={unversionedId:"ES/proxy\u3001reflect",id:"ES/proxy\u3001reflect",isDocsHomePage:!1,title:"proxy\u3001reflect",description:"Proxy",source:"@site/docs/ES/proxy\u3001reflect.md",sourceDirName:"ES",slug:"/ES/proxy\u3001reflect",permalink:"/my-website/docs/ES/proxy\u3001reflect",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/ES/proxy\u3001reflect.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"symbol",permalink:"/my-website/docs/ES/symbol"},next:{title:"set\u548cmap",permalink:"/my-website/docs/ES/set\u548cmap"}},c=[{value:"Proxy",id:"proxy",children:[{value:"13\u79cd\u64cd\u4f5c",id:"13\u79cd\u64cd\u4f5c",children:[]},{value:"set",id:"set",children:[]},{value:"apply",id:"apply",children:[]},{value:"has",id:"has",children:[]},{value:"construct()",id:"construct",children:[]},{value:"todo\u3002\u3002\u3002\u3002",id:"todo",children:[]}]},{value:"reflect",id:"reflect",children:[]}],k={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"proxy"},"Proxy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Proxy \u53ef\u4ee5\u7406\u89e3\u6210\uff0c\u5728\u76ee\u6807\u5bf9\u8c61\u4e4b\u524d\u67b6\u8bbe\u4e00\u5c42\u201c\u62e6\u622a\u201d\uff0c\u5916\u754c\u5bf9\u8be5\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u90fd\u5fc5\u987b\u5148\u901a\u8fc7\u8fd9\u5c42\u62e6\u622a\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\uff0c\u53ef\u4ee5\u5bf9\u5916\u754c\u7684\u8bbf\u95ee\u8fdb\u884c\u8fc7\u6ee4\u548c\u6539\u5199\u3002Proxy \u8fd9\u4e2a\u8bcd\u7684\u539f\u610f\u662f\u4ee3\u7406\uff0c\u7528\u5728\u8fd9\u91cc\u8868\u793a\u7531\u5b83\u6765\u201c\u4ee3\u7406\u201d\u67d0\u4e9b\u64cd\u4f5c\uff0c\u53ef\u4ee5\u8bd1\u4e3a\u201c\u4ee3\u7406\u5668\u201d\u3002\u8981\u4f7f\u5f97",(0,p.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u8d77\u4f5c\u7528\uff0c\u5fc5\u987b\u9488\u5bf9",(0,p.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u5b9e\u4f8b\uff08\u4e0a\u4f8b\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"proxy"),"\u5bf9\u8c61\uff09\u8fdb\u884c\u64cd\u4f5c\uff0c\u800c\u4e0d\u662f\u9488\u5bf9\u76ee\u6807\u5bf9\u8c61\uff08\u4e0a\u4f8b\u662f\u7a7a\u5bf9\u8c61\uff09\u8fdb\u884c\u64cd\u4f5c\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u53ef\u4ee5\u8bbe\u7f6e\u3001\u4f46\u6ca1\u6709\u8bbe\u7f6e\u62e6\u622a\u7684\u64cd\u4f5c\uff0c\u5219\u76f4\u63a5\u843d\u5728\u76ee\u6807\u5bf9\u8c61\u4e0a\uff0c\u6309\u7167\u539f\u5148\u7684\u65b9\u5f0f\u4ea7\u751f\u7ed3\u679c\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {a:'a'}\nconst proxy = new Proxy(obj,{\n    get: function(tar,key){\n        return 'aa' + key\n    }\n})\nproxy.a //'aaa' get\u64cd\u4f5c\nproxy.b= 'b' // \u8fd9\u662fset\u64cd\u4f5c\uff0c\u4f46\u662fproxy\u6ca1\u6709\u8bbe\u7f6e\uff0c\u5c31\u76f4\u63a5\u843d\u5728\u4e86\u76ee\u6807\u5bf9\u8c61\u4e0a\nobj // {a: 'a', b: 'b'}\nproxy // Proxy\xa0{a: 'a', b: 'b'}\n")))),(0,p.kt)("h3",{id:"13\u79cd\u64cd\u4f5c"},"13\u79cd\u64cd\u4f5c"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"get(target, propKey, receiver)"),"\uff1a\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8bfb\u53d6\uff0c\u6bd4\u5982",(0,p.kt)("inlineCode",{parentName:"li"},"proxy.foo"),"\u548c",(0,p.kt)("inlineCode",{parentName:"li"},"proxy['foo']"),"\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"set(target, propKey, value, receiver)"),"\uff1a\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982",(0,p.kt)("inlineCode",{parentName:"li"},"proxy.foo = v"),"\u6216",(0,p.kt)("inlineCode",{parentName:"li"},"proxy['foo'] = v"),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"has(target, propKey)"),"\uff1a\u62e6\u622a",(0,p.kt)("inlineCode",{parentName:"li"},"propKey in proxy"),"\u7684\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"deleteProperty(target, propKey)"),"\uff1a\u62e6\u622a",(0,p.kt)("inlineCode",{parentName:"li"},"delete proxy[propKey]"),"\u7684\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"ownKeys(target)"),"\uff1a\u62e6\u622a",(0,p.kt)("inlineCode",{parentName:"li"},"Object.getOwnPropertyNames(proxy)"),"\u3001",(0,p.kt)("inlineCode",{parentName:"li"},"Object.getOwnPropertySymbols(proxy)"),"\u3001",(0,p.kt)("inlineCode",{parentName:"li"},"Object.keys(proxy)"),"\u3001",(0,p.kt)("inlineCode",{parentName:"li"},"for...in"),"\u5faa\u73af\uff0c\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\u3002\u8be5\u65b9\u6cd5\u8fd4\u56de\u76ee\u6807\u5bf9\u8c61\u6240\u6709\u81ea\u8eab\u7684\u5c5e\u6027\u7684\u5c5e\u6027\u540d\uff0c\u800c",(0,p.kt)("inlineCode",{parentName:"li"},"Object.keys()"),"\u7684\u8fd4\u56de\u7ed3\u679c\u4ec5\u5305\u62ec\u76ee\u6807\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u904d\u5386\u5c5e\u6027\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"getOwnPropertyDescriptor(target, propKey)"),"\uff1a\u62e6\u622a",(0,p.kt)("inlineCode",{parentName:"li"},"Object.getOwnPropertyDescriptor(proxy, propKey)"),"\uff0c\u8fd4\u56de\u5c5e\u6027\u7684\u63cf\u8ff0\u5bf9\u8c61\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"defineProperty(target, propKey, propDesc)"),"\uff1a\u62e6\u622a",(0,p.kt)("inlineCode",{parentName:"li"},"Object.defineProperty(proxy, propKey, propDesc\uff09"),"\u3001",(0,p.kt)("inlineCode",{parentName:"li"},"Object.defineProperties(proxy, propDescs)"),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"preventExtensions(target)"),"\uff1a\u62e6\u622a",(0,p.kt)("inlineCode",{parentName:"li"},"Object.preventExtensions(proxy)"),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"getPrototypeOf(target)"),"\uff1a\u62e6\u622a",(0,p.kt)("inlineCode",{parentName:"li"},"Object.getPrototypeOf(proxy)"),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"isExtensible(target)"),"\uff1a\u62e6\u622a",(0,p.kt)("inlineCode",{parentName:"li"},"Object.isExtensible(proxy)"),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"setPrototypeOf(target, proto)"),"\uff1a\u62e6\u622a",(0,p.kt)("inlineCode",{parentName:"li"},"Object.setPrototypeOf(proxy, proto)"),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u662f\u51fd\u6570\uff0c\u90a3\u4e48\u8fd8\u6709\u4e24\u79cd\u989d\u5916\u64cd\u4f5c\u53ef\u4ee5\u62e6\u622a\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"apply(target, object, args)"),"\uff1a\u62e6\u622a Proxy \u5b9e\u4f8b\u4f5c\u4e3a\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982",(0,p.kt)("inlineCode",{parentName:"li"},"proxy(...args)"),"\u3001",(0,p.kt)("inlineCode",{parentName:"li"},"proxy.call(object, ...args)"),"\u3001",(0,p.kt)("inlineCode",{parentName:"li"},"proxy.apply(...)"),"\u3002"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"construct(target, args)"),"\uff1a\u62e6\u622a Proxy \u5b9e\u4f8b\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982",(0,p.kt)("inlineCode",{parentName:"li"},"new proxy(...args)"),"\u3002")),(0,p.kt)("h3",{id:"set"},"set"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\x15\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u81ea\u8eab\u7684\u67d0\u4e2a\u5c5e\u6027\u4e0d\u53ef\u5199\uff0c\u90a3\u4e48",(0,p.kt)("inlineCode",{parentName:"li"},"set"),"\u65b9\u6cd5\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"set"),"\u4ee3\u7406\u5e94\u5f53\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c",(0,p.kt)("inlineCode",{parentName:"li"},"set"),"\u4ee3\u7406\u5982\u679c\u6ca1\u6709\u8fd4\u56de",(0,p.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5c31\u4f1a\u62a5\u9519\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"set"),"\u65b9\u6cd5\u7528\u6765\u62e6\u622a\u67d0\u4e2a\u5c5e\u6027\u7684\u8d4b\u503c\u64cd\u4f5c\uff0c\u53ef\u4ee5\u63a5\u53d7\u56db\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\u76ee\u6807\u5bf9\u8c61\u3001\u5c5e\u6027\u540d\u3001\u5c5e\u6027\u503c\u548c Proxy \u5b9e\u4f8b\u672c\u8eab\uff0c\u5176\u4e2d\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u53ef\u9009\u3002")),(0,p.kt)("h3",{id:"apply"},"apply"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"apply"),"\u65b9\u6cd5\u62e6\u622a\u51fd\u6570\u7684\u8c03\u7528\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"call"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"apply"),"\u64cd\u4f5c\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"apply"),"\u65b9\u6cd5\u53ef\u4ee5\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff0c\u5206\u522b\u662f\u76ee\u6807\u5bf9\u8c61\u3001\u76ee\u6807\u5bf9\u8c61\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff08",(0,p.kt)("inlineCode",{parentName:"p"},"this"),"\uff09\u548c\u76ee\u6807\u5bf9\u8c61\u7684\u53c2\u6570\u6570\u7ec4\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"var twice = {\n  apply (target, ctx, args) {\n    return Reflect.apply(...arguments) * 2;\n  }\n};\nfunction sum (left, right) {\n  return left + right;\n};\nvar proxy = new Proxy(sum, twice);\nproxy(1, 2) // 6\nproxy.call(null, 5, 6) // 22\nproxy.apply(null, [7, 8]) // 30\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u6bcf\u5f53\u6267\u884c",(0,p.kt)("inlineCode",{parentName:"p"},"proxy"),"\u51fd\u6570\uff08\u76f4\u63a5\u8c03\u7528\u6216",(0,p.kt)("inlineCode",{parentName:"p"},"call"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"apply"),"\u8c03\u7528\uff09\uff0c\u5c31\u4f1a\u88ab",(0,p.kt)("inlineCode",{parentName:"p"},"apply"),"\u65b9\u6cd5\u62e6\u622a\u3002"),(0,p.kt)("p",{parentName:"li"},"\u53e6\u5916\uff0c\u76f4\u63a5\u8c03\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect.apply"),"\u65b9\u6cd5\uff0c\u4e5f\u4f1a\u88ab\u62e6\u622a\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"Reflect.apply(proxy, null, [9, 10]) // 38\n")))),(0,p.kt)("h3",{id:"has"},"has"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"has()"),"\u65b9\u6cd5\u53ef\u4ee5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u5206\u522b\u662f\u76ee\u6807\u5bf9\u8c61\u3001\u9700\u67e5\u8be2\u7684\u5c5e\u6027\u540d\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u539f\u5bf9\u8c61\u4e0d\u53ef\u914d\u7f6e\u6216\u8005\u7981\u6b62\u6269\u5c55\uff0c\u8fd9\u65f6",(0,p.kt)("inlineCode",{parentName:"p"},"has()"),"\u62e6\u622a\u4f1a\u62a5\u9519\u3002\u2018")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"has()"),"\u62e6\u622a\u53ea\u5bf9",(0,p.kt)("inlineCode",{parentName:"p"},"in"),"\u8fd0\u7b97\u7b26\u751f\u6548\uff0c\u5bf9",(0,p.kt)("inlineCode",{parentName:"p"},"for...in"),"\u5faa\u73af\u4e0d\u751f\u6548\uff0c\u5bfc\u81f4\u4e0d\u7b26\u5408\u8981\u6c42\u7684\u5c5e\u6027\u6ca1\u6709\u88ab",(0,p.kt)("inlineCode",{parentName:"p"},"for...in"),"\u5faa\u73af\u6240\u6392\u9664\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-js"},"let stu1 = {name: '\u5f20\u4e09', score: 59};\nlet stu2 = {name: '\u674e\u56db', score: 99};\n\nlet handler = {\n  has(target, prop) {\n    if (prop === 'score' && target[prop] < 60) {\n      console.log(`${target.name} \u4e0d\u53ca\u683c`);\n      return false;\n    }\n    return prop in target;\n  }\n}\n\nlet oproxy1 = new Proxy(stu1, handler);\nlet oproxy2 = new Proxy(stu2, handler);\n\n'score' in oproxy1\n// \u5f20\u4e09 \u4e0d\u53ca\u683c\n// false\n\n'score' in oproxy2\n// true\n\nfor (let a in oproxy1) {\n  console.log(oproxy1[a]);\n}\n// \u5f20\u4e09\n// 59\n")))),(0,p.kt)("h3",{id:"construct"},"construct()"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"construct()"),"\u65b9\u6cd5\u7528\u4e8e\u62e6\u622a",(0,p.kt)("inlineCode",{parentName:"li"},"new"),"\u547d\u4ee4"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"construct()"),"\u65b9\u6cd5\u8fd4\u56de\u7684\u5fc5\u987b\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5426\u5219\u4f1a\u62a5\u9519"),(0,p.kt)("li",{parentName:"ol"},"\u7531\u4e8e",(0,p.kt)("inlineCode",{parentName:"li"},"construct()"),"\u62e6\u622a\u7684\u662f\u6784\u9020\u51fd\u6570\uff0c\u6240\u4ee5\u5b83\u7684\u76ee\u6807\u5bf9\u8c61\u5fc5\u987b\u662f\u51fd\u6570\uff0c\u5426\u5219\u5c31\u4f1a\u62a5\u9519\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"construct()"),"\u65b9\u6cd5\u4e2d\u7684",(0,p.kt)("inlineCode",{parentName:"li"},"this"),"\u6307\u5411\u7684\u662f",(0,p.kt)("inlineCode",{parentName:"li"},"handler"),"\uff0c\u800c\u4e0d\u662f\u5b9e\u4f8b\u5bf9\u8c61")),(0,p.kt)("h3",{id:"todo"},"todo\u3002\u3002\u3002\u3002"),(0,p.kt)("h2",{id:"reflect"},"reflect"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u4e0e",(0,p.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u5bf9\u8c61\u4e00\u6837\uff0c\u4e5f\u662f ES6 \u4e3a\u4e86\u64cd\u4f5c\u5bf9\u8c61\u800c\u63d0\u4f9b\u7684\u65b0 API\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u7684\u8bbe\u8ba1\u76ee\u7684\u6709\u8fd9\u6837\u51e0\u4e2a\u3002"),(0,p.kt)("p",{parentName:"li"},"\uff081\uff09 \u5c06",(0,p.kt)("inlineCode",{parentName:"p"},"Object"),"\u5bf9\u8c61\u7684\u4e00\u4e9b\u660e\u663e\u5c5e\u4e8e\u8bed\u8a00\u5185\u90e8\u7684\u65b9\u6cd5\uff08\u6bd4\u5982",(0,p.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"\uff09\uff0c\u653e\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u4e0a\u3002\u73b0\u9636\u6bb5\uff0c\u67d0\u4e9b\u65b9\u6cd5\u540c\u65f6\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"Object"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u4e0a\u90e8\u7f72\uff0c\u672a\u6765\u7684\u65b0\u65b9\u6cd5\u5c06\u53ea\u90e8\u7f72\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u4e0a\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4ece",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u4e0a\u53ef\u4ee5\u62ff\u5230\u8bed\u8a00\u5185\u90e8\u7684\u65b9\u6cd5\u3002"),(0,p.kt)("p",{parentName:"li"},"\uff082\uff09 \u4fee\u6539\u67d0\u4e9b",(0,p.kt)("inlineCode",{parentName:"p"},"Object"),"\u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u8ba9\u5176\u53d8\u5f97\u66f4\u5408\u7406\u3002\u6bd4\u5982\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"Object.defineProperty(obj, name, desc)"),"\u5728\u65e0\u6cd5\u5b9a\u4e49\u5c5e\u6027\u65f6\uff0c\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u800c",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect.defineProperty(obj, name, desc)"),"\u5219\u4f1a\u8fd4\u56de",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,p.kt)("p",{parentName:"li"},"\uff083\uff09 \u8ba9",(0,p.kt)("inlineCode",{parentName:"p"},"Object"),"\u64cd\u4f5c\u90fd\u53d8\u6210\u51fd\u6570\u884c\u4e3a\u3002\u67d0\u4e9b",(0,p.kt)("inlineCode",{parentName:"p"},"Object"),"\u64cd\u4f5c\u662f\u547d\u4ee4\u5f0f\uff0c\u6bd4\u5982",(0,p.kt)("inlineCode",{parentName:"p"},"name in obj"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"delete obj[name]"),"\uff0c\u800c",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect.has(obj, name)"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect.deleteProperty(obj, name)"),"\u8ba9\u5b83\u4eec\u53d8\u6210\u4e86\u51fd\u6570\u884c\u4e3a\u3002"),(0,p.kt)("p",{parentName:"li"},"\uff084\uff09",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e0e",(0,p.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u5bf9\u8c61\u7684\u65b9\u6cd5\u4e00\u4e00\u5bf9\u5e94\uff0c\u53ea\u8981\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5c31\u80fd\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u5bf9\u8c61\u4e0a\u627e\u5230\u5bf9\u5e94\u7684\u65b9\u6cd5\u3002\u8fd9\u5c31\u8ba9",(0,p.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u5bf9\u8c61\u53ef\u4ee5\u65b9\u4fbf\u5730\u8c03\u7528\u5bf9\u5e94\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u65b9\u6cd5\uff0c\u5b8c\u6210\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4f5c\u4e3a\u4fee\u6539\u884c\u4e3a\u7684\u57fa\u7840\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0d\u7ba1",(0,p.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u600e\u4e48\u4fee\u6539\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4f60\u603b\u53ef\u4ee5\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"Reflect"),"\u4e0a\u83b7\u53d6\u9ed8\u8ba4\u884c\u4e3a\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Reflect.get\u8fd4\u56de\u83b7\u53d6\u7684\u503c\uff0cReflect.set\u8fd4\u56de\u5e03\u5c14\u503c"))))}s.isMDXComponent=!0}}]);
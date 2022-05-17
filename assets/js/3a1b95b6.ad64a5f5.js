"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1805],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2398:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],o={sidebar_position:3},c=void 0,u={unversionedId:"TS/ts\u5de5\u5177\u51fd\u6570",id:"TS/ts\u5de5\u5177\u51fd\u6570",isDocsHomePage:!1,title:"ts\u5de5\u5177\u51fd\u6570",description:"Partial",source:"@site/docs/TS/ts\u5de5\u5177\u51fd\u6570.md",sourceDirName:"TS",slug:"/TS/ts\u5de5\u5177\u51fd\u6570",permalink:"/my-website/docs/TS/ts\u5de5\u5177\u51fd\u6570",editUrl:"https://github.com/Min-wys/my-website/edit/master/docs/TS/ts\u5de5\u5177\u51fd\u6570.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"tsconfig\u914d\u7f6e",permalink:"/my-website/docs/TS/tsconfig\u914d\u7f6e"},next:{title:"\u57fa\u7840\u6982\u5ff5",permalink:"/my-website/docs/babel/\u57fa\u7840\u6982\u5ff5"}},s=[{value:"Partial",id:"partial",children:[]},{value:"Required",id:"required",children:[]},{value:"Readonly",id:"readonly",children:[]},{value:"Record",id:"record",children:[]},{value:"Pick",id:"pick",children:[]},{value:"Exclude",id:"exclude",children:[]},{value:"Extract",id:"extract",children:[]},{value:"NonNullable",id:"nonnullable",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"ReturnType",id:"returntype",children:[]},{value:"ConditionalPick\uff08\u81ea\u5df1\u5c01\u88c5\u4f7f\u7528\uff09",id:"conditionalpick\u81ea\u5df1\u5c01\u88c5\u4f7f\u7528",children:[]}],d={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"partial"},"Partial"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JS"},'// Partial -------------------------\n// \u53d8\u6210\u53ef\u9009\u7684\ntype Partial1<T> = {\n  [k in keyof T]?: T[k];\n};\ninterface a {\n  name: string;\n  age: number;\n}\nconst obj: Partial1<a> = {\n  name: "123",\n};\n')),(0,i.kt)("h2",{id:"required"},"Required"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JS"},'// Required -------------------------\n// \u53d8\u6210\u4e00\u5b9a\u8981\u9009\u7684\ntype Required1<T> = {\n  [K in keyof T]-?: T[K];\n};\ninterface aa {\n  name?: string;\n  age?: number;\n}\nconst obj1: Required1<aa> = {\n  // \u62a5\u9519\n  name: "123",\n};\n\n')),(0,i.kt)("h2",{id:"readonly"},"Readonly"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TS"},'// Readonly -------------------------\n// \u53d8\u6210\u53ea\u8bfb\u7684\ntype Readonly1<T> = {\n  readonly [K in keyof T]: T[K];\n};\ninterface aaa {\n  name?: string;\n  age?: number;\n}\nconst obj2: Readonly1<aaa> = {\n  name: "123",\n};\nobj2.name = "1"; // \u62a5\u9519\n')),(0,i.kt)("h2",{id:"record"},"Record"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Record -------------------------\n// \u5feb\u901f\u6784\u5efa\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b\ntype Record1<K extends keyof any, T> = {\n  [V in K]: T;\n};\ninterface aaaa {\n  name: string;\n  age?: number;\n}\ntype l = "lili" | "lala";\n\nconst obj3: Record1<l, aaaa> = {\n  lili: {\n    name: "llii",\n  },\n  lala: {\n    name: "lala",\n  },\n};\n')),(0,i.kt)("h2",{id:"pick"},"Pick"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Pick-------------------------\n// \u4ece\u4e00\u4e2atype\u4e2d\u9009\u53d6\u65b0\u7684\u5c5e\u6027,\u7ec4\u6210\u65b0\u7684type\ntype Pick1<T, K extends keyof T> = {\n  [P in K]: T[P];\n};\ninterface aaaaa {\n  name: string;\n  age: number;\n  gender: string;\n}\nconst obj4: Pick1<aaaaa, "age" | "gender"> = {\n  age: 13,\n  gender: "nv",\n};\n')),(0,i.kt)("h2",{id:"exclude"},"Exclude"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Exclude-------------------------\n// \u53bb\u9664\u8054\u5408\u7c7b\u578b\u4e2d\u7684\u4e00\u4e9b\u7c7b\u578b,\u6784\u6210\u65b0\u7684\u7c7b\u578b\ntype Exclude1<T, K> = T extends K ? never : T;\n\n// Omit-------------------------\n// \u4ece\u4e00\u4e2atype\u4e2d\u5220\u9664\u4e00\u4e9b\u5c5e\u6027\u7ec4\u6210\u65b0\u7684\u5c5e\u6027\ntype Omit1<T, K extends keyof T> = Pick1<T, Exclude1<keyof T, K>>;\n\nconst obj5: Omit1<aaaaa, "name"> = {\n  //   name: "11",\n  age: 14,\n  gender: "nv",\n};\n')),(0,i.kt)("h2",{id:"extract"},"Extract"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Extract-------------------------\n// \u53d6\u51fa\u8054\u5408\u7c7b\u578b\u4e2d\u7684\u4e00\u4e9b\u7c7b\u578b,\u6784\u6210\u65b0\u7684\u7c7b\u578b\ntype Extract1<T, K> = T extends K ? T : never;\n")),(0,i.kt)("h2",{id:"nonnullable"},"NonNullable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// NonNullable-------------------------\n// \u53d6\u51fa\u8054\u5408\u7c7b\u578b\u4e2d\u7684null\u548cundefined,\u7ec4\u6210\u65b0\u7684\u7c7b\u578b\ntype NonNullable1<T> = T extends null | undefined ? never : T;\ntype a6 = NonNullable1<null | undefined | "name">;\n')),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Parameters-------------------------\n// Parameters,\u4ece [\u51fd\u6570 Type] \u7684\u5f62\u53c2\u6784\u9020\u4e00\u4e2a\u6570\u7ec4 Type\ntype Parameters1<T extends (...args: any) => any> = T extends (\n  ...args: infer P\n) => any\n  ? P\n  : never;\n")),(0,i.kt)("h2",{id:"returntype"},"ReturnType"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TS"},"// ReturnType \u51fd\u6570\u8fd4\u56de\u503c\ntype T0 = ReturnType<() => string>// TO = string\n\ntype ReturnType1<F extends (...args: any) => any> = F extends (\n  ...args: any\n) => infer A\n  ? A\n  : never\ntype T1 = ReturnType1<() => string>\n")),(0,i.kt)("h2",{id:"conditionalpick\u81ea\u5df1\u5c01\u88c5\u4f7f\u7528"},"ConditionalPick\uff08\u81ea\u5df1\u5c01\u88c5\u4f7f\u7528\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TS"},"// \u652f\u6301\u6839\u636e\u6307\u5b9a\u7684 Condition \u6761\u4ef6\u6765\u751f\u6210\u65b0\u7684\u7c7b\u578b\n// \u6548\u679c\ninterface Example {\n    a: string;\n    b: string | number;\n    c: () => void;\n    d: {};\n}\n\n// \u6d4b\u8bd5\u7528\u4f8b\uff1a\ntype StringKeysOnly = ConditionalPick<Example, string>;\n//=> {a: string}\n\ntype ConditionalPick<V, T> = {\n  [K in keyof V as V[K] extends T ? K : never]: V[K]\n}\ntype StringKeysOnly = ConditionalPick<Example, string | number>\n")))}p.isMDXComponent=!0}}]);
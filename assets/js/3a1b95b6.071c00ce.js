"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[805],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,l=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),y=s(t),m=a,f=y["".concat(l,".").concat(m)]||y[m]||p[m]||o;return t?r.createElement(f,i(i({ref:e},u),{},{components:t})):r.createElement(f,i({ref:e},u))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2398:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return y}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:3},l=void 0,s={unversionedId:"TS/ts\u5de5\u5177\u51fd\u6570",id:"TS/ts\u5de5\u5177\u51fd\u6570",isDocsHomePage:!1,title:"ts\u5de5\u5177\u51fd\u6570",description:"`TSX",source:"@site/docs/TS/ts\u5de5\u5177\u51fd\u6570.md",sourceDirName:"TS",slug:"/TS/ts\u5de5\u5177\u51fd\u6570",permalink:"/my-website/docs/TS/ts\u5de5\u5177\u51fd\u6570",editUrl:"https://github.com/Min-wys/my-website/edit/master/docs/TS/ts\u5de5\u5177\u51fd\u6570.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"tsconfig\u914d\u7f6e",permalink:"/my-website/docs/TS/tsconfig\u914d\u7f6e"},next:{title:"\u51fd\u6570\u7684\u6269\u5c55",permalink:"/my-website/docs/ES/\u51fd\u6570\u7684\u6269\u5c55"}},u=[],p={toc:u};function y(n){var e=n.components,t=(0,a.Z)(n,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TSX"},'// Partial -------------------------\n// \u53d8\u6210\u53ef\u9009\u7684\ntype Partial1<T> = {\n  [k in keyof T]?: T[k];\n};\ninterface a {\n  name: string;\n  age: number;\n}\nconst obj: Partial1<a> = {\n  name: "123",\n};\n\n// Required -------------------------\n// \u53d8\u6210\u4e00\u5b9a\u8981\u9009\u7684\ntype Required1<T> = {\n  [K in keyof T]-?: T[K];\n};\ninterface aa {\n  name?: string;\n  age?: number;\n}\nconst obj1: Required1<aa> = {\n  // \u62a5\u9519\n  name: "123",\n};\n\n// Readonly -------------------------\n// \u53d8\u6210\u53ea\u8bfb\u7684\ntype Readonly1<T> = {\n  readonly [K in keyof T]: T[K];\n};\ninterface aaa {\n  name?: string;\n  age?: number;\n}\nconst obj2: Readonly1<aaa> = {\n  name: "123",\n};\nobj2.name = "1"; // \u62a5\u9519\n\n// Record -------------------------\n// \u5feb\u901f\u6784\u5efa\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b\ntype Record1<K extends keyof any, T> = {\n  [V in K]: T;\n};\ninterface aaaa {\n  name: string;\n  age?: number;\n}\ntype l = "lili" | "lala";\n\nconst obj3: Record1<l, aaaa> = {\n  lili: {\n    name: "llii",\n  },\n  lala: {\n    name: "lala",\n  },\n};\n// Pick-------------------------\n// \u4ece\u4e00\u4e2atype\u4e2d\u9009\u53d6\u65b0\u7684\u5c5e\u6027,\u7ec4\u6210\u65b0\u7684type\ntype Pick1<T, K extends keyof T> = {\n  [P in K]: T[P];\n};\ninterface aaaaa {\n  name: string;\n  age: number;\n  gender: string;\n}\nconst obj4: Pick1<aaaaa, "age" | "gender"> = {\n  age: 13,\n  gender: "nv",\n};\n// Exclude-------------------------\n// \u53bb\u9664\u8054\u5408\u7c7b\u578b\u4e2d\u7684\u4e00\u4e9b\u7c7b\u578b,\u6784\u6210\u65b0\u7684\u7c7b\u578b\ntype Exclude1<T, K> = T extends K ? never : T;\n\n// Omit-------------------------\n// \u4ece\u4e00\u4e2atype\u4e2d\u5220\u9664\u4e00\u4e9b\u5c5e\u6027\u7ec4\u6210\u65b0\u7684\u5c5e\u6027\ntype Omit1<T, K extends keyof T> = Pick1<T, Exclude1<keyof T, K>>;\n\nconst obj5: Omit1<aaaaa, "name"> = {\n  //   name: "11",\n  age: 14,\n  gender: "nv",\n};\n\n// Extract-------------------------\n// \u53d6\u51fa\u8054\u5408\u7c7b\u578b\u4e2d\u7684\u4e00\u4e9b\u7c7b\u578b,\u6784\u6210\u65b0\u7684\u7c7b\u578b\ntype Extract1<T, K> = T extends K ? T : never;\n\n// NonNullable-------------------------\n// \u53d6\u51fa\u8054\u5408\u7c7b\u578b\u4e2d\u7684null\u548cundefined,\u7ec4\u6210\u65b0\u7684\u7c7b\u578b\ntype NonNullable1<T> = T extends null | undefined ? never : T;\ntype a6 = NonNullable1<null | undefined | "name">;\n\n// Parameters-------------------------\n// Parameters,\u4ece [\u51fd\u6570 Type] \u7684\u5f62\u53c2\u6784\u9020\u4e00\u4e2a\u6570\u7ec4 Type\ntype Parameters1<T extends (...args: any) => any> = T extends (\n  ...args: infer P\n) => any\n  ? P\n  : never;\n\n')))}y.isMDXComponent=!0}}]);
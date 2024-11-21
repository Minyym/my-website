"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9892],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),k=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=k(e.components);return a.createElement(o.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=k(t),u=l,c=s["".concat(o,".").concat(u)]||s[u]||b[u]||r;return t?a.createElement(c,p(p({ref:n},m),{},{components:t})):a.createElement(c,p({ref:n},m))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=s;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var k=2;k<r;k++)p[k]=t[k];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6971:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return k},toc:function(){return m},default:function(){return s}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),p=["components"],i={},o=void 0,k={unversionedId:"babel/\u9762\u8bd5\u9898",id:"babel/\u9762\u8bd5\u9898",isDocsHomePage:!1,title:"\u9762\u8bd5\u9898",description:"Babel",source:"@site/docs/babel/3.\u9762\u8bd5\u9898.md",sourceDirName:"babel",slug:"/babel/\u9762\u8bd5\u9898",permalink:"/my-website/docs/babel/\u9762\u8bd5\u9898",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/babel/3.\u9762\u8bd5\u9898.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Babel\u7684AST\u548cAPI",permalink:"/my-website/docs/babel/Babel\u7684AST\u548cAPI"},next:{title:"NPM\u8d26\u53f7\u7ba1\u7406",permalink:"/my-website/docs/npm&node/NPM\u8d26\u53f7\u7ba1\u7406"}},m=[{value:"Babel",id:"babel",children:[]},{value:"webpack\u548cbabel\u7684\u533a\u522b\u662f\u4ec0\u4e48",id:"webpack\u548cbabel\u7684\u533a\u522b\u662f\u4ec0\u4e48",children:[]},{value:"Babel\u7684\u4f5c\u7528",id:"babel\u7684\u4f5c\u7528",children:[]},{value:"\u539f\u7406",id:"\u539f\u7406",children:[]},{value:"Babel7 \u7684\u4f7f\u7528",id:"babel7-\u7684\u4f7f\u7528",children:[{value:"\u9884\u8bbe",id:"\u9884\u8bbe",children:[]},{value:"runtime",id:"runtime",children:[]}]}],b={toc:m};function s(e){var n=e.components,t=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"babel"},"Babel"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u7f16\u8bd1\u5668\uff01"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba7ef757dea247ffa6630ab5758fcbc1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"img"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u7684\u4f5c\u7528\u5c31\u662f\u5c06",(0,r.kt)("strong",{parentName:"p"},"\u6e90\u7801"),"\u8f6c\u6362\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u76ee\u6807\u4ee3\u7801"))),(0,r.kt)("h2",{id:"webpack\u548cbabel\u7684\u533a\u522b\u662f\u4ec0\u4e48"},"webpack\u548cbabel\u7684\u533a\u522b\u662f\u4ec0\u4e48"),(0,r.kt)("p",null,"Webpack\u548cBabel\u90fd\u662f\u5728JavaScript\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u7684\u5de5\u5177\uff0c\u4f46\u5b83\u4eec\u7684\u4e3b\u8981\u529f\u80fd\u662f\u4e0d\u540c\u7684\uff1a"),(0,r.kt)("p",null,"Webpack\u662f\u4e00\u4e2a\u6253\u5305\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u5c06\u591a\u4e2aJavaScript\u6587\u4ef6\u6253\u5305\u6210\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u3002Webpack\u63d0\u4f9b\u4e86\u8bb8\u591a\u529f\u80fd\uff0c\u4f8b\u5982\u4ee3\u7801\u62c6\u5206\uff0c\u52a8\u6001\u5bfc\u5165\uff0c\u70ed\u6a21\u5757\u66ff\u6362\u7b49\u3002Webpack\u662f\u7528\u4e8e\u6784\u5efa\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5c06\u4e0d\u540c\u7684\u6587\u4ef6\u7c7b\u578b\uff08\u4f8b\u5982JavaScript\uff0cCSS\uff0c\u56fe\u7247\u7b49\uff09\u6253\u5305\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u4e2d\uff0c\u5e76\u4e14\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6dfb\u52a0\u4e0d\u540c\u7684\u63d2\u4ef6\u548c\u52a0\u8f7d\u5668\u6765\u81ea\u5b9a\u4e49Webpack\u7684\u884c\u4e3a\u3002"),(0,r.kt)("p",null,"Babel\u662f\u4e00\u4e2aJavaScript\u7f16\u8bd1\u5668\uff0c\u5b83\u53ef\u4ee5\u5c06\u65b0\u7248\u672c\u7684JavaScript\u4ee3\u7801\u8f6c\u6362\u4e3a\u5411\u540e\u517c\u5bb9\u7684\u4ee3\u7801\u3002Babel\u7684\u4e3b\u8981\u529f\u80fd\u662f\u8f6c\u6362ES6+\u8bed\u6cd5\u4e3aES5\u8bed\u6cd5\uff0c\u4ee5\u4fbf\u5b83\u53ef\u4ee5\u5728\u65e7\u7684\u6d4f\u89c8\u5668\u548c\u73af\u5883\u4e2d\u8fd0\u884c\u3002Babel\u4e5f\u652f\u6301\u8f6c\u6362JSX\uff0cTypeScript\u7b49\u8bed\u8a00\u3002Babel\u63d0\u4f9b\u4e86\u8bb8\u591a\u63d2\u4ef6\u548c\u9884\u8bbe\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u81ea\u5b9a\u4e49Babel\u7684\u884c\u4e3a\u3002"),(0,r.kt)("p",null,"\u5c3d\u7ba1Webpack\u548cBabel\u662f\u4e24\u4e2a\u4e0d\u540c\u7684\u5de5\u5177\uff0c\u4f46\u5b83\u4eec\u7ecf\u5e38\u4e00\u8d77\u4f7f\u7528\u3002Webpack\u901a\u5e38\u7528\u4e8e\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\uff0c\u800cBabel\u7528\u4e8e\u5c06\u6700\u65b0\u7248\u672c\u7684JavaScript\u4ee3\u7801\u8f6c\u6362\u4e3a\u5411\u540e\u517c\u5bb9\u7684\u4ee3\u7801\uff0c\u4ee5\u4fbfWebpack\u53ef\u4ee5\u5904\u7406\u5b83\u4eec\u3002"),(0,r.kt)("h2",{id:"babel\u7684\u4f5c\u7528"},"Babel\u7684\u4f5c\u7528"),(0,r.kt)("p",null,"\u4e3b\u8981\u7528\u4e8e\u5c06\u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ECMAScript 2015+")," \u8bed\u6cd5\u7f16\u5199\u7684\u4ee3\u7801\u8f6c\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"es5")," \u8bed\u6cd5\uff0c\u8ba9\u5f00\u53d1\u8005\u65e0\u89c6\u7528\u6237\u6d4f\u89c8\u5668\u7684\u5dee\u5f02\u6027\uff0c\u5e76\u4e14\u80fd\u591f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u7684 JS \u8bed\u6cd5"),"\u53ca",(0,r.kt)("strong",{parentName:"p"},"\u7279\u6027"),"\u8fdb\u884c\u5f00\u53d1\u3002\u9664\u6b64\u4e4b\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u80fd\u591f\u8f6c\u6362 ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," \u8bed\u6cd5\uff0c\u5e76\u4e14\u80fd\u591f\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u8f6c\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u603b\u7ed3\u4e00\u4e0b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u7684\u4f5c\u7528\u5982\u4e0b"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u8bed\u6cd5\u8f6c\u6362"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"Polyfill")," \u65b9\u5f0f\u5728\u76ee\u6807\u73af\u5883\u4e2d",(0,r.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u7f3a\u5931\u7684\u7279\u6027")),(0,r.kt)("li",{parentName:"ol"},"\u6e90\u7801\u8f6c\u6362"))),(0,r.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u7684\u8fd0\u884c\u539f\u7406\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u8fd9\u5f20\u56fe\u6765\u6982\u62ec\u3002\u6574\u4f53\u6765\u770b\uff0c\u53ef\u4ee5\u5206\u4e3a\u4e09\u4e2a\u8fc7\u7a0b\uff0c\u5206\u522b\u662f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u89e3\u6790\uff0c",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u8bcd\u6cd5\u89e3\u6790"),(0,r.kt)("li",{parentName:"ol"},"\u8bed\u6cd5\u89e3\u6790"))),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u6362\uff0c"),(0,r.kt)("li",{parentName:"ol"},"\u751f\u6210\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/822560fe3587410aa301048a1ce3c00c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"img"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"babel7-\u7684\u4f7f\u7528"},"Babel7 \u7684\u4f7f\u7528"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u652f\u6301\u591a\u79cd\u5f62\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u6839\u636e\u4f7f\u7528\u573a\u666f\u4e0d\u540c\u53ef\u4ee5\u9009\u62e9\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u914d\u7f6e\u4e2d\u9700\u8981",(0,r.kt)("strong",{parentName:"li"},"\u4e66\u5199 js \u903b\u8f91"),"\uff0c\u53ef\u4ee5\u9009\u62e9",(0,r.kt)("strong",{parentName:"li"},"babel.config.js"),"\u6216\u8005 ",(0,r.kt)("strong",{parentName:"li"},".babelrc.js"),"\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u662f\u9700\u8981\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"key-value")," \u914d\u7f6e\uff0c\u90a3\u4e48\u53ef\u4ee5\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"li"},".babelrc"),"\uff0c\u751a\u81f3\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,r.kt)("strong",{parentName:"li"},"package.json")," \u4e2d\u914d\u7f6e\u3002")),(0,r.kt)("p",null,"\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u7684\u5305\u90fd\u53d1\u5e03\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u4e0a\uff0c\u5e76\u4e14\u540d\u79f0\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel")," \u4e3a\u524d\u7f00\uff08\u81ea\u4ece\u7248\u672c 7.0 \u4e4b\u540e\uff09,\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4e00\u8d77\u770b\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/cli")," \u8fd9\u4e24\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u5305\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@babel/core")," - \u6838\u5fc3\u5e93\uff0c\u5c01\u88c5\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"Babel")," \u7684\u6838\u5fc3\u80fd\u529b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@babel/cli")," - \u547d\u4ee4\u884c\u5de5\u5177\uff0c \u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"babel")," \u8fd9\u4e2a\u547d\u4ee4")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u6784\u5efa\u5728\u63d2\u4ef6\u4e4b\u4e0a\u7684\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u4e0d\u505a\u4efb\u4f55\u5904\u7406\uff0c\u9700\u8981\u501f\u52a9\u63d2\u4ef6\u6765\u5b8c\u6210\u8bed\u6cd5\u7684\u89e3\u6790\uff0c\u8f6c\u6362\uff0c\u8f93\u51fa\u3002")),(0,r.kt)("p",null,"\u63d2\u4ef6\u7684",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u5f62\u5f0f"),"\u5e38\u89c1\u6709\u4e24\u79cd\uff0c\u5206\u522b\u662f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b57\u7b26\u4e32\u683c\u5f0f"),(0,r.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u683c\u5f0f\uff0c\u5e76\u4e14\u53ef\u4ee5",(0,r.kt)("strong",{parentName:"li"},"\u4f20\u9012\u53c2\u6570"))),(0,r.kt)("p",null,"\u5982\u679c\u63d2\u4ef6\u540d\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/plugin-XXX"),"\uff0c\u53ef\u4ee5\u4f7f\u7528\u7b80\u5199\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/XXX"),"\uff0c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"@babel/plugin-transform-arrow-functions")," \u4fbf\u53ef\u4ee5\u7b80\u5199\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"@babel/transform-arrow-functions"),"\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63d2\u4ef6\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ece\u524d\u5f80\u540e\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'// .babelrc\n/*\n* \u4ee5\u4e0b\u4e09\u4e2a\u63d2\u4ef6\u7684\u6267\u884c\u987a\u5e8f\u662f\uff1a\n    @babel/proposal-class-properties ->\n    @babel/syntax-dynamic-import ->\n    @babel/plugin-transform-arrow-functions\n*/\n{\n    "plugins": [\n        // \u540c "@babel/plugin-proposal-class-properties"\n        "@babel/proposal-class-properties",\n        // \u540c ["@babel/plugin-syntax-dynamic-import"]\n        ["@babel/syntax-dynamic-import"],\n        [\n            "@babel/plugin-transform-arrow-functions",\n            {\n                "loose": true\n            }\n        ]\n    ]\n}\n\n\u590d\u5236\u4ee3\u7801\n')),(0,r.kt)("h3",{id:"\u9884\u8bbe"},"\u9884\u8bbe"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9884\u8bbe\u662f\u4e00\u7ec4\u63d2\u4ef6\u7684\u96c6\u5408\u3002")),(0,r.kt)("p",null,"\u4e0e\u63d2\u4ef6\u7c7b\u4f3c\uff0c\u9884\u8bbe\u7684\u914d\u7f6e\u5f62\u5f0f\u4e5f\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u6570\u7ec4"),"\u4e24\u79cd\uff0c\u9884\u8bbe\u4e5f\u53ef\u4ee5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/preset-XXX")," \u7b80\u5199\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/XXX")," \u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9884\u8bbe\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ece\u540e\u5f80\u524d\uff0c\u5e76\u4e14",(0,r.kt)("strong",{parentName:"p"},"\u63d2\u4ef6\u5728\u9884\u8bbe\u4e4b\u524d\u6267\u884c"),"\u3002")),(0,r.kt)("p",null,"\u6211\u4eec\u5e38\u89c1\u7684\u9884\u8bbe\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"@babel/preset-env\n")),(0,r.kt)("p",{parentName:"li"},"\uff1a \u53ef\u4ee5"),(0,r.kt)("p",{parentName:"li"},"\u65e0\u89c6\u6d4f\u89c8\u5668\u73af\u5883\u7684\u5dee\u5f02"),(0,r.kt)("p",{parentName:"li"},"\u800c\u5c3d\u60c5\u5730\u4f7f\u7528 ES6+ \u65b0\u8bed\u6cd5\u548c\u65b0\u7279\u6027\uff1b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6ce8\uff1a\u8bed\u6cd5\u548c\u7279\u6027\u4e0d\u662f\u4e00\u56de\u4e8b\uff0c\u8bed\u6cd5\u4e0a\u7684\u8fed\u4ee3\u662f\u8ba9\u6211\u4eec\u4e66\u5199\u4ee3\u7801\u66f4\u52a0\u7b80\u5355\u548c\u65b9\u4fbf\uff0c\u5982\u5c55\u5f00\u8fd0\u7b97\u7b26\u3001\u7c7b\uff0c\u7ed3\u6784\u7b49\uff0c\u56e0\u6b64\u8fd9\u4e9b\u8bed\u6cd5\u79f0\u4e3a\u8bed\u6cd5\u7cd6\uff1b\u7279\u6027\u4e0a\u7684\u8fed\u4ee3\u662f\u4e3a\u4e86\u6269\u5c55\u8bed\u8a00\u7684\u80fd\u529b\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"Map"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \u7b49\uff0c"),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u5b9e\u4e0a\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Babel")," \u5bf9\u65b0\u8bed\u6cd5\u548c\u65b0\u7279\u6027\u7684\u5904\u7406\u4e5f\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u5bf9\u4e8e\u65b0\u8bed\u6cd5\uff0cBabel \u901a\u8fc7\u63d2\u4ef6\u76f4\u63a5\u8f6c\u6362\uff0c\u800c\u5bf9\u4e8e\u65b0\u7279\u6027\uff0cBabel \u8fd8\u9700\u8981\u501f\u52a9 polyfill \u6765\u5904\u7406\u548c\u8f6c\u6362\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"@babe/preset-react"),"\uff1a \u53ef\u4ee5\u4e66\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," \u8bed\u6cd5\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," \u8bed\u6cd5\u8f6c\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"JS")," \u8bed\u6cd5\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"@babel/preset-typescript\n")),(0,r.kt)("p",{parentName:"li"},"\uff1a\u53ef\u4ee5\u4f7f\u7528 "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"TypeScript\n")),(0,r.kt)("p",{parentName:"li"}," \u7f16\u5199\u7a0b\u5e8f\uff0c\u5c06 "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"TS\n")),(0,r.kt)("p",{parentName:"li"}," \u8f6c\u6362\u4e3a "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"JS\n")),(0,r.kt)("p",{parentName:"li"},"\uff1b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6ce8\uff1a",(0,r.kt)("strong",{parentName:"li"},"\u8be5\u9884\u8bbe\u53ea\u662f\u5c06 TS \u8f6c\u4e3a JS\uff0c\u4e0d\u505a\u4efb\u4f55\u7c7b\u578b\u68c0\u67e5")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"@babel/preset-flow"),"\uff1a\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," \u6765\u63a7\u5236\u7c7b\u578b\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," \u8f6c\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"JS"),"\uff1b"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// .babelrc\n/*\n*  \u9884\u8bbe\u7684\u6267\u884c\u987a\u5e8f\u4e3a\uff1a\n    @babel/preset-react ->\n    @babel/preset-typescript ->\n    @babel/preset-env\n*/\n{\n    "presets": [\n        [\n            "@babel/preset-env",\n            {\n                "useBuiltIns": "usage",\n                "corejs": {\n                    "version": 3,\n                    "proposals": true // \u4f7f\u7528\u5c1a\u5728\u63d0\u8bae\u9636\u6bb5\u7279\u6027\u7684 polyfill\n                }\n            }\n        ],\n        "@babel/preset-typescript",\n        // \u540c @babel/preset-react\n        "@babel/react"\n    ]\n}\n\u590d\u5236\u4ee3\u7801\n')),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," \uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u8bbe\u7f6e\u76ee\u6807\u6d4f\u89c8\u5668\u73af\u5883\uff0c\u53ef\u4ee5\u5728\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".browserslistrc")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u5728\u8be5\u9884\u8bbe\u7684\u53c2\u6570\u9009\u9879\u4e2d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"targets"),"(",(0,r.kt)("strong",{parentName:"p"},"\u4f18\u5148\u7ea7\u6700\u9ad8"),") \u6216\u8005\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"browserslist")," \u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u4e0d\u8bbe\u7f6e\u7684\u8bdd\uff0c\u8be5\u9884\u8bbe\u9ed8\u8ba4\u4f1a\u5c06\u6240\u6709\u7684 ES6+ \u7684",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u8bed\u6cd5"),"\u5168\u90e8\u505a\u8f6c\u6362\uff0c\u5426\u5219\uff0c\u8be5\u9884\u8bbe\u53ea\u4f1a\u5bf9\u76ee\u6807\u6d4f\u89c8\u5668\u73af\u5883",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u517c\u5bb9\u7684\u65b0\u8bed\u6cd5\u505a\u8f6c\u6362"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63a8\u8350\u8bbe\u7f6e\u76ee\u6807\u6d4f\u89c8\u5668\u73af\u5883\uff0c\u8fd9\u6837\u5728\u4e2d\u5927\u578b\u9879\u76ee\u4e2d\u53ef\u4ee5\u660e\u663e\u7f29\u5c0f\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u4f53\u79ef\uff0c\u56e0\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u6709\u4e9b\u65b0\u8bed\u6cd5\u7684\u8f6c\u6362\u9700\u8981\u5f15\u5165\u4e00\u4e9b\u989d\u5916\u5b9a\u4e49\u7684 helper \u51fd\u6570\u7684\uff0c\u6bd4\u5982 class"),"\u3002")),(0,r.kt)("h4",{id:"babelrc"},".babelrc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl"},'{\n    "presets": [\n        [\n            "@babel/preset-env",\n            {\n                "targets": "> 0.25%, not dead"\n            }\n        ]\n    ]\n}\n\u590d\u5236\u4ee3\u7801\n')),(0,r.kt)("h4",{id:"browserslistrc"},".browserslistrc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"> 0.25%\nnot dead\n\u590d\u5236\u4ee3\u7801\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u65b0\u7279\u6027\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u4e5f\u662f\u80fd\u8f6c\u6362\u7684\u3002\u4f46\u662f\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"useBuiltIns")," \u8fd9\u4e2a\u53c2\u6570\u9009\u9879\u5b9e\u73b0\uff0c\u503c\u9700\u8981\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"usage"),"\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c\u53ea\u4f1a\u8f6c\u6362\u6211\u4eec\u4f7f\u7528\u5230\u7684",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u8bed\u6cd5\u548c\u65b0\u7279\u6027"),"\uff0c\u80fd\u591f\u6709\u6548\u51cf\u5c0f\u7f16\u8bd1\u540e\u7684\u5305\u4f53\u79ef\uff0c\u5e76\u4e14\u8fd8\u8981\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"corejs: { version: 3, proposals }")," \u9009\u9879\uff0c\u56e0\u4e3a\u8f6c\u6362\u65b0\u7279\u6027\u9700\u8981\u7528\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"polyfill"),"\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"corejs")," \u5c31\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"polyfill")," \u5305\u3002\u5982\u679c\u4e0d\u663e\u793a\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"corejs")," \u7684\u7248\u672c\u7684\u8bdd\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"version 2")," \uff0c\u800c version 2 \u5df2\u7ecf\u505c\u66f4\uff0c\u8bf8\u5982\u4e00\u4e9b\u66f4\u65b0\u7684\u7279\u6027\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"polyfill")," \u53ea\u4f1a\u66f4\u884c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"version 3")," \u91cc\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype.flat()"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// .babelrc\n"presets": [\n    [\n        "@babel/preset-env",\n        {\n            "useBuiltIns": "usage",\n            "corejs": {\n                "version": 3,\n                "proposals": true // \u4f7f\u7528\u5c1a\u5728\u63d0\u8bae\u9636\u6bb5\u7279\u6027\u7684 polyfill\n            }\n        }\n    ]\n]\n\n\u590d\u5236\u4ee3\u7801\n')),(0,r.kt)("p",null,"\u867d\u7136 ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/env")," \u53ef\u4ee5\u5e2e\u6211\u4eec\u505a\u65b0\u8bed\u6cd5\u548c\u65b0\u7279\u6027\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6309\u9700\u8f6c\u6362"),"\uff0c\u4f46\u662f\u4f9d\u7136\u5b58\u5728 2 \u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"corejs")," \u5f15\u5165\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"polyfill")," \u662f",(0,r.kt)("strong",{parentName:"li"},"\u5168\u5c40\u8303\u56f4"),"\u7684\uff0c\u4e0d\u662f\u6a21\u5757\u4f5c\u7528\u57df\u8fd4\u56de\u7684\uff0c\u53ef\u80fd\u5b58\u5728\u6c61\u67d3\u5168\u5c40\u53d8\u91cf\u7684\u98ce\u9669\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u67d0\u4e9b\u65b0\u8bed\u6cd5\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"class"),"\uff0c\u4f1a\u5728\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u4e2d\u6ce8\u5165\u5f88\u591a ",(0,r.kt)("inlineCode",{parentName:"li"},"helper")," \u51fd\u6570\u58f0\u660e\uff0c\u800c\u4e0d\u662f\u4ece\u67d0\u4e2a\u5730\u65b9 ",(0,r.kt)("inlineCode",{parentName:"li"},"require")," \u8fdb\u6765\u7684\u51fd\u6570\u5f15\u7528\uff0c\u4ece\u800c\u589e\u5927\u7f16\u8bd1\u540e\u7684\u5305\u4f53\u79ef\uff1b")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"runtime"},"runtime"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"babel7")," \u63d0\u51fa\u6765\u7684\u6982\u5ff5\uff0c\u65e8\u5728\u89e3\u51b3\u5982\u4e0a\u63d0\u51fa\u7684\u6027\u80fd\u95ee\u9898\u7684\u3002"),(0,r.kt)("p",null,"\u5b9e\u8df5\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," \u63d2\u4ef6\u914d\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npm install --save-dev @babel/plugin-transform-runtime\n// @babel/runtime \u662f\u8981\u5b89\u88c5\u5230\u751f\u4ea7\u4f9d\u8d56\u7684\uff0c\u56e0\u4e3a\u65b0\u7279\u6027\u7684\u7f16\u8bd1\u9700\u8981\u4ece\u8fd9\u4e2a\u5305\u91cc\u5f15\u7528 polyfill\n// \u5b83\u5c31\u662f\u4e00\u4e2a\u5c01\u88c5\u4e86 corejs \u7684 polyfill \u5305\nnpm install --save @babel/runtime\n\u590d\u5236\u4ee3\u7801\n// .babelrc\n{\n  "presets": [\n    "@babel/env"\n  ],\n  "plugins": [\n    [\n      "@babel/plugin-transform-runtime",{\n          "corejs": 3\n      }\n    ]\n  ],\n}\n\u590d\u5236\u4ee3\u7801\n')),(0,r.kt)("p",null,"\u7f16\u8bd1\u540e\uff0c\u53ef\u4ee5\u660e\u663e\u770b\u5230\uff0c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"polyfill")," \u4e0d\u518d\u662f\u5168\u5c40\u8303\u56f4\u5185\u7684\u4e86\uff0c\u800c\u662f\u6a21\u5757\u4f5c\u7528\u57df\u8303\u56f4\u5185\u7684\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5e76\u4e14\u4e0d\u518d\u662f\u5f80\u7f16\u8bd1\u6587\u4ef6\u4e2d\u76f4\u63a5\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"helper")," \u51fd\u6570\u4e86\uff0c\u800c\u662f\u901a\u8fc7\u5f15\u7528\u7684\u65b9\u5f0f\uff0c")),(0,r.kt)("p",null,"\u65e2\u89e3\u51b3\u4e86\u5168\u5c40\u53d8\u91cf\u6c61\u67d3\u7684\u95ee\u9898\uff0c\u53c8\u51cf\u5c0f\u4e86\u7f16\u8bd1\u540e\u5305\u7684\u4f53\u79ef"))}s.isMDXComponent=!0}}]);
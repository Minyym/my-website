"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9367],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=s(r),y=a,m=b["".concat(c,".").concat(y)]||b[y]||u[y]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[b]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1186:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const l={},i=void 0,o={unversionedId:"babel/babel\u7684\u4ecb\u7ecd\u548c\u7b80\u5355\u7f16\u8bd1\u6d41\u7a0b",id:"babel/babel\u7684\u4ecb\u7ecd\u548c\u7b80\u5355\u7f16\u8bd1\u6d41\u7a0b",isDocsHomePage:!1,title:"babel\u7684\u4ecb\u7ecd\u548c\u7b80\u5355\u7f16\u8bd1\u6d41\u7a0b",description:"\u4ecb\u7ecd",source:"@site/docs/babel/1.babel\u7684\u4ecb\u7ecd\u548c\u7b80\u5355\u7f16\u8bd1\u6d41\u7a0b.md",sourceDirName:"babel",slug:"/babel/babel\u7684\u4ecb\u7ecd\u548c\u7b80\u5355\u7f16\u8bd1\u6d41\u7a0b",permalink:"/my-website/docs/babel/babel\u7684\u4ecb\u7ecd\u548c\u7b80\u5355\u7f16\u8bd1\u6d41\u7a0b",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/babel/1.babel\u7684\u4ecb\u7ecd\u548c\u7b80\u5355\u7f16\u8bd1\u6d41\u7a0b.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u7ea7TS",permalink:"/my-website/docs/TS/\u9ad8\u7ea7TS"},next:{title:"Babel\u7684AST\u548cAPI",permalink:"/my-website/docs/babel/Babel\u7684AST\u548cAPI"}},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"Babel\u7684\u7f16\u8bd1\u6d41\u7a0b",id:"babel\u7684\u7f16\u8bd1\u6d41\u7a0b",children:[]},{value:"Presets\u3001plugins",id:"presetsplugins",children:[]}],s={toc:c},p="wrapper";function b(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"babel \u7684\u540d\u5b57\u6765\u81ea\u5df4\u522b\u5854\u7684\u5178\u6545\uff0c\u662f\u4e00\u4e2a js \u8f6c\u8bd1\u5668\uff0c\u7528\u4e8e es next\u3001typescript\u7b49\u4ee3\u7801\u7684\u8f6c\u6362\uff0c\u540c\u65f6\u8fd8\u66b4\u9732\u51fa\u4e86 api \u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u8fdb\u884c\u7279\u5b9a\u7528\u9014\u7684\u8f6c\u6362\u3002\u9664\u6b64\u4ee5\u5916\uff0c\u8fd8\u53ef\u4ee5\u505a\u5404\u79cd\u9759\u6001\u5206\u6790\u3002")),(0,a.yg)("h2",{id:"babel\u7684\u7f16\u8bd1\u6d41\u7a0b"},"Babel\u7684\u7f16\u8bd1\u6d41\u7a0b"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"parse\uff1a\u8bcd\u6cd5\u5206\u6790\u3001\u8bed\u6cd5\u5206\u6790\uff0c\u751f\u6210AST(\u62bd\u8c61\u8bed\u6cd5\u6811)"),(0,a.yg)("li",{parentName:"ol"},"transform\uff1a\u904d\u5386 AST\uff0c\u8c03\u7528\u5404\u79cd transform \u63d2\u4ef6\u5bf9 AST \u8fdb\u884c\u589e\u5220\u6539\uff0c\u8fdb\u884c\u8f6c\u6362"),(0,a.yg)("li",{parentName:"ol"},"generate\uff1a\u6253\u5370 ast \u6210\u76ee\u6807\u4ee3\u7801\u5e76\u751f\u6210 sourcemap")),(0,a.yg)("h2",{id:"presetsplugins"},"Presets\u3001plugins"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"plugins\u63d2\u4ef6\u987a\u5e8f\u4ece\u524d\u5f80\u540e"),(0,a.yg)("li",{parentName:"ul"},"presets\u662f\u4ece\u540e\u5f80\u524d")))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[802],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,y=f["".concat(a,".").concat(m)]||f[m]||l[m]||i;return n?r.createElement(y,u(u({ref:t},p),{},{components:n})):r.createElement(y,u({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var s=2;s<i;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1345:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],c={sidebar_position:2},a=void 0,s={unversionedId:"TS/\u7c7b\u578b\u5b88\u536b",id:"TS/\u7c7b\u578b\u5b88\u536b",isDocsHomePage:!1,title:"\u7c7b\u578b\u5b88\u536b",description:"type strAndNum = string | number",source:"@site/docs/TS/\u7c7b\u578b\u5b88\u536b.md",sourceDirName:"TS",slug:"/TS/\u7c7b\u578b\u5b88\u536b",permalink:"/my-website/docs/TS/\u7c7b\u578b\u5b88\u536b",editUrl:"https://github.com/Min-wys/my-website/edit/master/docs/TS/\u7c7b\u578b\u5b88\u536b.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ts\u57fa\u7840",permalink:"/my-website/docs/TS/ts\u57fa\u7840"},next:{title:"\u51fd\u6570\u7684\u6269\u5c55",permalink:"/my-website/docs/ES/\u51fd\u6570\u7684\u6269\u5c55"}},p=[],l={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"type strAndNum = string | number"),(0,i.kt)("p",null,"function isNumber(num: unknown): num is string {\nreturn typeof num === 'string'\n}"),(0,i.kt)("p",null,"function typea(type: strAndNum) {\nif (isNumber(type)) {\nreturn type.length\n}\n}"))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7755],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),y=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=y(e.components);return i.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=y(t),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return t?i.createElement(g,l(l({ref:n},d),{},{components:t})):i.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var y=2;y<a;y++)l[y]=t[y];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1162:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=t(8168),r=(t(6540),t(5680));const a={},l=void 0,o={unversionedId:"CSS/z-index",id:"CSS/z-index",isDocsHomePage:!1,title:"z-index",description:"\u6b63\u5e38\u60c5\u51b5",source:"@site/docs/CSS/z-index.md",sourceDirName:"CSS",slug:"/CSS/z-index",permalink:"/my-website/docs/CSS/z-index",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/CSS/z-index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bigjs",permalink:"/my-website/docs/Big/bigjs"},next:{title:"\u7f51\u9875\u53d8\u7070",permalink:"/my-website/docs/CSS/\u7f51\u9875\u53d8\u7070"}},p=[{value:"\u6b63\u5e38\u60c5\u51b5",id:"\u6b63\u5e38\u60c5\u51b5",children:[]},{value:"\u65e0\u5d4c\u5957",id:"\u65e0\u5d4c\u5957",children:[]},{value:"\u6709\u5d4c\u5957",id:"\u6709\u5d4c\u5957",children:[]},{value:"\u5c42\u53e0\u4e0a\u4e0b\u6587",id:"\u5c42\u53e0\u4e0a\u4e0b\u6587",children:[]}],y={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,i.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6b63\u5e38\u60c5\u51b5"},"\u6b63\u5e38\u60c5\u51b5"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4e00\u822c\u6765\u8bb2\uff0c\u5f53 CSS \u6837\u5f0f\u6ca1\u6709\u592a\u5927\u5dee\u522b\u7684\u65f6\u5019\uff0c\u54ea\u4e2a\u5143\u7d20\u5728\u540e\u9762\u54ea\u4e2a\u5143\u7d20\u5c31\u5728\u4e0a\u9762\u3002")),(0,r.yg)("h2",{id:"\u65e0\u5d4c\u5957"},"\u65e0\u5d4c\u5957"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u662f\u7684z-index\u5927\uff0c\u8c01\u5728\u5728\u4e0a\u9762\u663e\u793a")),(0,r.yg)("h2",{id:"\u6709\u5d4c\u5957"},"\u6709\u5d4c\u5957"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6839\u636e\u7956\u5148\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"z-index")," \u503c\u6765\u51b3\u5b9a\u8c01\u5728\u4e0a\u9762\uff0c\u5982\u679c\u7956\u5148\u672c\u8eab\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"z-index")," \u7684\u503c\u6ca1\u6709\u5176\u4ed6\u5143\u7d20\u7956\u5148\u672c\u8eab\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"z-index")," \u503c\u5927\uff0c\u5b50\u5143\u7d20 ",(0,r.yg)("inlineCode",{parentName:"p"},"z-index")," \u7684\u503c\u5c31\u7b97\u518d\u5927\u4e5f\u6ca1\u6709\u4f5c\u7528\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"z-index")," \u5c5e\u6027\u503c\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"-1")," \u65f6\uff0c\u867d\u7136\u662f\u5728\u5c42\u53e0\u4e0a\u4e0b\u6587\u4e4b\u4e0a\u7684\uff0c\u4f46\u662f\u5982\u679c\u6ca1\u6709\u5c42\u53e0\u4e0a\u4e0b\u6587\uff0c\u8be5\u5143\u7d20\u5c31\u4f1a\u5728\u6700\u4e0b\u9762\uff0c\u5728\u5c4f\u5e55\u4e0a\u662f\u770b\u4e0d\u5230\u7684\u3002"))),(0,r.yg)("h2",{id:"\u5c42\u53e0\u4e0a\u4e0b\u6587"},"\u5c42\u53e0\u4e0a\u4e0b\u6587"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u9875\u9762\u6839\u5143\u7d20\u5929\u751f\u5177\u6709\u5c42\u53e0\u4e0a\u4e0b\u6587\uff0c\u79f0\u4e4b\u4e3a ",(0,r.yg)("strong",{parentName:"li"},"\u6839\u5c42\u53e0\u4e0a\u4e0b\u6587")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"z-index")," \u503c\u4e3a\u6570\u503c\u7684\u5b9a\u4f4d\u5143\u7d20\u4e5f\u5177\u6709\u5c42\u53e0\u4e0a\u4e0b\u6587"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"position")," \u5c5e\u6027\u4e14\u503c\u4e0d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"static")," \uff0c\u4e14 ",(0,r.yg)("inlineCode",{parentName:"li"},"z-index")," \u503c\u4e0d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"auto")," \u7684\u5143\u7d20"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"flex")," \u5bb9\u5668\u7684\u5b50\u5143\u7d20\uff0c\u4e14 ",(0,r.yg)("inlineCode",{parentName:"li"},"z-index")," \u503c\u4e0d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"auto")),(0,r.yg)("li",{parentName:"ul"},"grid \u5bb9\u5668\u7684\u5b50\u5143\u7d20\uff0c\u4e14 z-index \u503c\u4e0d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"auto")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"opacity")," \u5c5e\u6027\u503c\u5c0f\u4e8e 1 \u7684\u5143\u7d20"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"transform")," \u5c5e\u6027\u503c\u4e0d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"none")," \u7684\u5143\u7d20"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"filter")," \u5c5e\u6027\u503c\u4e0d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"none")," \u7684\u5143\u7d20"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"isolation")," \u5c5e\u6027\u503c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"isolate")," \u7684\u5143\u7d20"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-webkit-overflow-scrolling")," \u5c5e\u6027\u503c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"touch")," \u7684\u5143\u7d20\uff1b")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5386],{5680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>u});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},g=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),o=s(r),y=a,u=o["".concat(m,".").concat(y)]||o[y]||c[y]||i;return r?n.createElement(u,p(p({ref:t},g),{},{components:r})):n.createElement(u,p({ref:t},g))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=y;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[o]="string"==typeof e?e:a,p[1]=l;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6929:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>p,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(8168),a=(r(6540),r(5680));const i={},p=void 0,l={unversionedId:"GIT/rebase",id:"GIT/rebase",isDocsHomePage:!1,title:"rebase",description:"Git rebase",source:"@site/docs/GIT/rebase.md",sourceDirName:"GIT",slug:"/GIT/rebase",permalink:"/my-website/docs/GIT/rebase",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/GIT/rebase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/my-website/docs/GIT/\u57fa\u7840"},next:{title:"tree-filter",permalink:"/my-website/docs/GIT/tree-filter"}},m=[{value:"Git rebase",id:"git-rebase",children:[]}],s={toc:m},g="wrapper";function o(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"git-rebase"},"Git rebase"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u51c6\u5907\u4e00\u4e2a\u4ed3\u5e93\uff0c\u4ed3\u5e93\u4e0a\u5b58\u5728\u4e24\u4e2a\u5206\u652f\uff0cmaster\u548cfeature/test(\u4ecemaster\u4e0a\u5207\u51fa\u6765\u7684\uff0ccommit\u4fdd\u6301\u4e00\u81f4)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6a21\u62df\u548c\u522b\u4eba\u5171\u540c\u5f00\u53d1\uff0c\u5728master\u3001feature/test\u5206\u522b\u63d0\u4ea4\u4e24\u4e2acommit"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518163926.png",alt:null}))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u73b0\u5728\u7684\u5206\u652f\u8282\u70b9\u56fe\uff0c\u4e24\u4e2a\u5206\u652f\u4e0a\u5206\u522b\u591a\u51fa\u4e24\u4e2acommit"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518164535.png",alt:null}))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"git checkout feature/test  \u5207\u56de\u5230feature/test\u5206\u652f\ngit rebase master  ---\u300b\u50cf\u662f git rebase master feature/test(\u8c01\u5f97\u5206\u652f\u5728\u540e\u9762\uff0c\u8c01\u7684commit\u5c31\u5728\u540e\u9762)\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"rebase \u4f1a\u5c06\u6574\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"feature")," \u5206\u652f\u79fb\u52a8\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"master")," \u5206\u652f\u7684",(0,a.yg)("strong",{parentName:"p"},"\u9876\u7aef"),"\uff0c\u4ece\u800c\u6709\u6548\u5730\u6574\u5408\u4e86\u6240\u6709 master \u5206\u652f\u4e0a\u7684\u63d0\u4ea4")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e0e merge \u63d0\u4ea4\u65b9\u5f0f\u4e0d\u540c\uff0crebase \u901a\u8fc7\u4e3a\u539f\u59cb\u5206\u652f\u4e2d\u7684\u6bcf\u4e2a\u63d0\u4ea4\u521b\u5efa",(0,a.yg)("strong",{parentName:"p"},"\u5168\u65b0\u7684 commits")," \u6765\u91cd\u5199\u9879\u76ee\u5386\u53f2\u8bb0\u5f55,\u7279\u70b9\u662f\u4ecd\u7136\u4f1a\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"feature"),"\u5206\u652f\u4e0a\u5f62\u6210\u7ebf\u6027\u63d0\u4ea4")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"reapply(\u91cd\u653e)"),"\uff1arebase\u4f1a",(0,a.yg)("strong",{parentName:"p"},"\u4f9d\u6b21"),"\u5730\u5c06\u4f60\u6240\u8981\u64cd\u4f5c\u7684\u5206\u652f\u7684\u6240\u6709\u63d0\u4ea4\u5e94\u7528\u5230\u76ee\u6807\u5206\u652f\u4e0a")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Feature/test\u5206\u652f\u7684\u591a\u4e2a\u8282\u70b9\uff0c\u53ef\u80fd\u4f1a\u89e3\u51b3\u591a\u6b21\u51b2\u7a81\uff0c\u6240\u4ee5\u5728rebase\u4e4b\u524d\uff0c\u5efa\u8bae\u5c06\u8282\u70b9\u5408\u5e76\u6210\u4e00\u4e2a")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e0b\u56fe\u662f\u4e24\u4e2acommit\uff0c\u8981\u89e3\u51b3\u4e24\u6b21\u51b2\u7a81\uff0cgit rebase --continue\u65f6\uff0c\u53ef\u4ee5\u4fee\u6539commit\u6ce8\u91ca\uff0c\u4e0b\u56fe\u4e2d\u4fee\u6539\u4e86feature1\u7684"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518164143.png",alt:null})),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518164447.png",alt:null}))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"rebase \u4f1a\u4ea7\u751f\u5b8c\u7f8e\u7ebf\u6027\u7684\u9879\u76ee\u5386\u53f2\u8bb0\u5f55\uff0c\u4f60\u53ef\u4ee5\u5728 feature\u5206\u652f\u4e0a\u6ca1\u6709\u4efb\u4f55\u5206\u53c9\u7684\u60c5\u51b5\u4e0b\u4e00\u76f4\u8ffd\u5bfb\u5230\u9879\u76ee\u7684\u521d\u59cb\u63d0\u4ea4\u3002"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518165329.png",alt:null})),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518170114.png",alt:null})))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5728master\u4e0amerge feature/test"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518170150.png",alt:null})),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518170200.png",alt:null})))))}o.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,g=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4683:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o=void 0,l={unversionedId:"\u9762\u8bd5/react",id:"\u9762\u8bd5/react",isDocsHomePage:!1,title:"react",description:"updateContainer ---\u300bscheduleUpdateOnFiber ---\u300b performSyncWorkOnRoot---\u300bensureRootIsScheduled--\u300bscheduleSyncCallback--\u300b    renderRootSync ---\u300bworkLoopSync();",source:"@site/docs/\u9762\u8bd5/11.react.md",sourceDirName:"\u9762\u8bd5",slug:"/\u9762\u8bd5/react",permalink:"/my-website/docs/\u9762\u8bd5/react",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/\u9762\u8bd5/11.react.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"axios",permalink:"/my-website/docs/\u9762\u8bd5/axios"},next:{title:"\u6d4f\u89c8\u5668",permalink:"/my-website/docs/\u9762\u8bd5/\u6d4f\u89c8\u5668"}},c=[{value:"\u8be6\u7ec6\u51fd\u6570\u8c03\u7528\u8fc7\u7a0b",id:"\u8be6\u7ec6\u51fd\u6570\u8c03\u7528\u8fc7\u7a0b",children:[]},{value:"renderer\uff08commit phase\uff09",id:"renderercommit-phase",children:[]},{value:"\u53cc\u7f13\u5b58\u6811",id:"\u53cc\u7f13\u5b58\u6811",children:[]},{value:"beginwork",id:"beginwork",children:[]},{value:"diff\u8fc7\u7a0b\u4e3b\u8981\u6d41\u7a0b",id:"diff\u8fc7\u7a0b\u4e3b\u8981\u6d41\u7a0b",children:[]},{value:"\u7c7b\u7ec4\u4ef6\u751f\u547d\u5468\u671f",id:"\u7c7b\u7ec4\u4ef6\u751f\u547d\u5468\u671f",children:[]},{value:"mount\u65f6\u548cupdate\u65f6\u66f4\u65b0\u7684\u5177\u4f53\u987a\u5e8f",id:"mount\u65f6\u548cupdate\u65f6\u66f4\u65b0\u7684\u5177\u4f53\u987a\u5e8f",children:[]}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"updateContainer ---\u300bscheduleUpdateOnFiber ---\u300b performSyncWorkOnRoot---\u300bensureRootIsScheduled--\u300bscheduleSyncCallback--\u300b    renderRootSync ---\u300bworkLoopSync();"),(0,i.kt)("p",null,"mount"),(0,i.kt)("p",null,"updateContainer ---\u300bscheduleUpdateOnFiber ---\u300b performSyncWorkOnRoot ---\u300b  renderRootSync ---\u300bworkLoopSync();"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scheduler\uff08\u8c03\u5ea6\u5668\uff09\uff1a \u6392\u5e8f\u4f18\u5148\u7ea7\uff0c\u8ba9\u4f18\u5148\u7ea7\u9ad8\u7684\u4efb\u52a1\u5148\u8fdb\u884creconcile"),(0,i.kt)("li",{parentName:"ul"},"Reconciler\uff08\u534f\u8c03\u5668\uff09\uff1a \u627e\u51fa\u54ea\u4e9b\u8282\u70b9\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u5e76\u6253\u4e0a\u4e0d\u540c\u7684Flags\uff08\u65e7\u7248\u672creact\u53ebTag\uff09"),(0,i.kt)("li",{parentName:"ul"},"Renderer\uff08\u6e32\u67d3\u5668\uff09\uff1a \u5c06Reconciler\u4e2d\u6253\u597d\u6807\u7b7e\u7684\u8282\u70b9\u6e32\u67d3\u5230\u89c6\u56fe\u4e0a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Minyym/figure-bed/master/img/202302081153603.png",alt:null})),(0,i.kt)("h2",{id:"\u8be6\u7ec6\u51fd\u6570\u8c03\u7528\u8fc7\u7a0b"},"\u8be6\u7ec6\u51fd\u6570\u8c03\u7528\u8fc7\u7a0b"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Minyym/figure-bed/master/img/202302081155434.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"createContainer",(0,i.kt)("inlineCode",{parentName:"li"},"\u901a\u8fc7\u8c03\u7528"),"createFiberRoot",(0,i.kt)("inlineCode",{parentName:"li"},"\u521b\u5efa\u4e86\u4e00\u4e2a"),"fiberRoot",(0,i.kt)("inlineCode",{parentName:"li"},"\uff0c\u518d\u901a\u8fc7"),"createHostRootFiber",(0,i.kt)("inlineCode",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a"),"rootFiber",(0,i.kt)("inlineCode",{parentName:"li"},"("),"ConcurrentRoot",(0,i.kt)("inlineCode",{parentName:"li"},")\uff0c\u524d\u8005\u901a\u8fc7"),"current",(0,i.kt)("inlineCode",{parentName:"li"},"\u6307\u5411\u540e\u8005\uff0c\u800c\u540e\u8005\u53c8\u901a\u8fc7"),"stateNode",(0,i.kt)("inlineCode",{parentName:"li"},"\u6307\u5411\u524d\u8005\uff0c\u6700\u540e\u5c31\u662f\u521d\u59cb\u5316"),"updateQueue.share.pending",(0,i.kt)("inlineCode",{parentName:"li"},"\u4e3a"),"App\u5bf9\u5e94\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"React.element")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7004648498423398431#heading-7"},"https://juejin.cn/post/7004648498423398431#heading-7"))),(0,i.kt)("h2",{id:"renderercommit-phase"},"renderer\uff08commit phase\uff09"),(0,i.kt)("p",null,"Renderer\u53d1\u751f\u5728commit\u9636\u6bb5\uff0ccommit\u9636\u6bb5\u904d\u5386effectList\u6267\u884c\u5bf9\u5e94\u7684dom\u64cd\u4f5c\u6216\u90e8\u5206\u751f\u547d\u5468\u671f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Minyym/figure-bed/master/img/202302151824554.png",alt:null})),(0,i.kt)("h2",{id:"\u53cc\u7f13\u5b58\u6811"},"\u53cc\u7f13\u5b58\u6811"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Minyym/figure-bed/master/img/202302171747466.png",alt:null})),(0,i.kt)("h2",{id:"beginwork"},"beginwork"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Minyym/figure-bed/master/img/202302171754128.png",alt:null})),(0,i.kt)("h2",{id:"diff\u8fc7\u7a0b\u4e3b\u8981\u6d41\u7a0b"},"diff\u8fc7\u7a0b\u4e3b\u8981\u6d41\u7a0b"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Minyym/figure-bed/master/img/202302201438780.png",alt:null})),(0,i.kt)("h2",{id:"\u7c7b\u7ec4\u4ef6\u751f\u547d\u5468\u671f"},"\u7c7b\u7ec4\u4ef6\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Minyym/figure-bed/master/img/20230220181727.png",alt:null})),(0,i.kt)("h2",{id:"mount\u65f6\u548cupdate\u65f6\u66f4\u65b0\u7684\u5177\u4f53\u987a\u5e8f"},"mount\u65f6\u548cupdate\u65f6\u66f4\u65b0\u7684\u5177\u4f53\u987a\u5e8f"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Minyym/figure-bed/master/img/20230221102957.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Minyym/figure-bed/master/img/20230222111057.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Minyym/figure-bed/master/img/202302221111684.png",alt:null})))}m.isMDXComponent=!0}}]);
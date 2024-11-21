"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4192],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2112:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={},p=void 0,d={unversionedId:"react/\u8fdb\u9636",id:"react/\u8fdb\u9636",isDocsHomePage:!1,title:"\u8fdb\u9636",description:"React",source:"@site/docs/react/\u8fdb\u9636.md",sourceDirName:"react",slug:"/react/\u8fdb\u9636",permalink:"/my-website/docs/react/\u8fdb\u9636",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/react/\u8fdb\u9636.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u865a\u62dfDOM",permalink:"/my-website/docs/react/\u865a\u62dfDOM"},next:{title:"\u9762\u8bd5\u9898",permalink:"/my-website/docs/react/\u9762\u8bd5\u9898"}},s=[{value:"React",id:"react",children:[]},{value:"ReactDOM",id:"reactdom",children:[]},{value:"fiber Tag",id:"fiber-tag",children:[]},{value:"fiber \u7ed3\u6784",id:"fiber-\u7ed3\u6784",children:[]},{value:"type\u7c7b\u578b",id:"type\u7c7b\u578b",children:[]},{value:"\u91cd\u8981\u6982\u5ff5",id:"\u91cd\u8981\u6982\u5ff5",children:[]},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",children:[]},{value:"Ref",id:"ref",children:[]},{value:"forwardRef",id:"forwardref",children:[]},{value:"\u6e32\u67d3\u63a7\u5236",id:"\u6e32\u67d3\u63a7\u5236",children:[]}],c={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220809142817.png",alt:null})),(0,o.kt)("h2",{id:"reactdom"},"ReactDOM"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220811103226.png",alt:null})),(0,o.kt)("h2",{id:"fiber-tag"},"fiber Tag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const FunctionComponent = 0;       // \u51fd\u6570\u7ec4\u4ef6\nexport const ClassComponent = 1;          // \u7c7b\u7ec4\u4ef6\nexport const IndeterminateComponent = 2;  // \u521d\u59cb\u5316\u7684\u65f6\u5019\u4e0d\u77e5\u9053\u662f\u51fd\u6570\u7ec4\u4ef6\u8fd8\u662f\u7c7b\u7ec4\u4ef6 \nexport const HostRoot = 3;                // Root Fiber \u53ef\u4ee5\u7406\u89e3\u4e3a\u6839\u5143\u7d20 \uff0c \u901a\u8fc7reactDom.render()\u4ea7\u751f\u7684\u6839\u5143\u7d20\nexport const HostPortal = 4;              // \u5bf9\u5e94  ReactDOM.createPortal \u4ea7\u751f\u7684 Portal \nexport const HostComponent = 5;           // dom \u5143\u7d20 \u6bd4\u5982 <div>\nexport const HostText = 6;                // \u6587\u672c\u8282\u70b9\nexport const Fragment = 7;                // \u5bf9\u5e94 <React.Fragment> \nexport const Mode = 8;                    // \u5bf9\u5e94 <React.StrictMode>   \nexport const ContextConsumer = 9;         // \u5bf9\u5e94 <Context.Consumer>\nexport const ContextProvider = 10;        // \u5bf9\u5e94 <Context.Provider>\nexport const ForwardRef = 11;             // \u5bf9\u5e94 React.ForwardRef\nexport const Profiler = 12;               // \u5bf9\u5e94 <Profiler/ >\nexport const SuspenseComponent = 13;      // \u5bf9\u5e94 <Suspense>\nexport const MemoComponent = 14;          // \u5bf9\u5e94 React.memo \u8fd4\u56de\u7684\u7ec4\u4ef6\n")),(0,o.kt)("h2",{id:"fiber-\u7ed3\u6784"},"fiber \u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function FiberNode(){\n\n  this.tag = tag;                  // fiber \u6807\u7b7e \u8bc1\u660e\u662f\u4ec0\u4e48\u7c7b\u578bfiber\u3002\n  this.key = key;                  // key\u8c03\u548c\u5b50\u8282\u70b9\u65f6\u5019\u7528\u5230\u3002 \n  this.type = null;                // dom\u5143\u7d20\u662f\u5bf9\u5e94\u7684\u5143\u7d20\u7c7b\u578b\uff0c\u6bd4\u5982div\uff0c\u7ec4\u4ef6\u6307\u5411\u7ec4\u4ef6\u5bf9\u5e94\u7684\u7c7b\u6216\u8005\u51fd\u6570\u3002  \n  this.stateNode = null;           // \u6307\u5411\u5bf9\u5e94\u7684\u771f\u5b9edom\u5143\u7d20\uff0c\u7c7b\u7ec4\u4ef6\u6307\u5411\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u88abref\u83b7\u53d6\u3002\n \n  this.return = null;              // \u6307\u5411\u7236\u7ea7fiber\n  this.child = null;               // \u6307\u5411\u5b50\u7ea7fiber\n  this.sibling = null;             // \u6307\u5411\u5144\u5f1ffiber \n  this.index = 0;                  // \u7d22\u5f15\n\n  this.ref = null;                 // ref\u6307\u5411\uff0cref\u51fd\u6570\uff0c\u6216\u8005ref\u5bf9\u8c61\u3002\n\n  this.pendingProps = pendingProps;// \u5728\u4e00\u6b21\u66f4\u65b0\u4e2d\uff0c\u4ee3\u8868element\u521b\u5efa\n  this.memoizedProps = null;       // \u8bb0\u5f55\u4e0a\u4e00\u6b21\u66f4\u65b0\u5b8c\u6bd5\u540e\u7684props\n  this.updateQueue = null;         // \u7c7b\u7ec4\u4ef6\u5b58\u653esetState\u66f4\u65b0\u961f\u5217\uff0c\u51fd\u6570\u7ec4\u4ef6\u5b58\u653e\n  this.memoizedState = null;       // \u7c7b\u7ec4\u4ef6\u4fdd\u5b58state\u4fe1\u606f\uff0c\u51fd\u6570\u7ec4\u4ef6\u4fdd\u5b58hooks\u4fe1\u606f\uff0cdom\u5143\u7d20\u4e3anull\n  this.dependencies = null;        // context\u6216\u662f\u65f6\u95f4\u7684\u4f9d\u8d56\u9879\n\n  this.mode = mode;                //\u63cf\u8ff0fiber\u6811\u7684\u6a21\u5f0f\uff0c\u6bd4\u5982 ConcurrentMode \u6a21\u5f0f\n\n  this.effectTag = NoEffect;       // effect\u6807\u7b7e\uff0c\u7528\u4e8e\u6536\u96c6effectList\n  this.nextEffect = null;          // \u6307\u5411\u4e0b\u4e00\u4e2aeffect\n\n  this.firstEffect = null;         // \u7b2c\u4e00\u4e2aeffect\n  this.lastEffect = null;          // \u6700\u540e\u4e00\u4e2aeffect\n\n  this.expirationTime = NoWork;    // \u901a\u8fc7\u4e0d\u540c\u8fc7\u671f\u65f6\u95f4\uff0c\u5224\u65ad\u4efb\u52a1\u662f\u5426\u8fc7\u671f\uff0c \u5728v17\u7248\u672c\u7528lane\u8868\u793a\u3002\n\n  this.alternate = null;           //\u53cc\u7f13\u5b58\u6811\uff0c\u6307\u5411\u7f13\u5b58\u7684fiber\u3002\u66f4\u65b0\u9636\u6bb5\uff0c\u4e24\u9897\u6811\u4e92\u76f8\u4ea4\u66ff\u3002\n}\n")),(0,o.kt)("h2",{id:"type\u7c7b\u578b"},"type\u7c7b\u578b"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"th"},"jsx"),"\u5143\u7d20\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"th"},"react.createElement")," \u8f6c\u6362\u540e"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"th"},"type")," \u5c5e\u6027"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"element"),"\u5143\u7d20\u7c7b\u578b"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"react element"),"\u7c7b\u578b"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6807\u7b7e\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"td"},"div"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"fragment"),"\u7c7b\u578b"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"react element"),"\u7c7b\u578b"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"symbol")," ",(0,o.kt)("inlineCode",{parentName:"td"},"react.fragment"),"\u7c7b\u578b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u7c7b\u578b"),(0,o.kt)("td",{parentName:"tr",align:null},"\u76f4\u63a5\u5b57\u7b26\u4e32"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u7ec4\u7c7b\u578b"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u6570\u7ec4\u7ed3\u6784\uff0c\u91cc\u9762\u5143\u7d20\u88ab",(0,o.kt)("inlineCode",{parentName:"td"},"react.createElement"),"\u8f6c\u6362"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u7c7b\u578b"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"react element"),"\u7c7b\u578b"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u7c7b\u6216\u8005\u7ec4\u4ef6\u51fd\u6570\u672c\u8eab")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u4e09\u5143\u8fd0\u7b97 / \u8868\u8fbe\u5f0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5148\u6267\u884c\u4e09\u5143\u8fd0\u7b97\uff0c\u7136\u540e\u6309\u7167\u4e0a\u8ff0\u89c4\u5219\u5904\u7406"),(0,o.kt)("td",{parentName:"tr",align:null},"\u770b\u4e09\u5143\u8fd0\u7b97\u8fd4\u56de\u7ed3\u679c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570\u6267\u884c"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5148\u6267\u884c\u51fd\u6570\uff0c\u7136\u540e\u6309\u7167\u4e0a\u8ff0\u89c4\u5219\u5904\u7406"),(0,o.kt)("td",{parentName:"tr",align:null},"\u770b\u51fd\u6570\u6267\u884c\u8fd4\u56de\u7ed3\u679c")))),(0,o.kt)("h2",{id:"\u91cd\u8981\u6982\u5ff5"},"\u91cd\u8981\u6982\u5ff5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* workloop React \u5904\u7406\u7c7b\u7ec4\u4ef6\u7684\u4e3b\u8981\u529f\u80fd\u65b9\u6cd5 */\nfunction updateClassComponent(){\n    let shouldUpdate\n    const instance = workInProgress.stateNode // stateNode \u662f fiber \u6307\u5411 \u7c7b\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u6307\u9488\u3002\n     if (instance === null) { // instance \u4e3a\u7ec4\u4ef6\u5b9e\u4f8b,\u5982\u679c\u7ec4\u4ef6\u5b9e\u4f8b\u4e0d\u5b58\u5728\uff0c\u8bc1\u660e\u8be5\u7c7b\u7ec4\u4ef6\u6ca1\u6709\u88ab\u6302\u8f7d\u8fc7\uff0c\u90a3\u4e48\u4f1a\u8d70\u521d\u59cb\u5316\u6d41\u7a0b\n        constructClassInstance(workInProgress, Component, nextProps); // \u7ec4\u4ef6\u5b9e\u4f8b\u5c06\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u88abnew\u3002\n        mountClassInstance(  workInProgress,Component, nextProps,renderExpirationTime ); //\u521d\u59cb\u5316\u6302\u8f7d\u7ec4\u4ef6\u6d41\u7a0b\n        shouldUpdate = true; // shouldUpdate \u6807\u8bc6\u7528\u6765\u8bc1\u660e \u7ec4\u4ef6\u662f\u5426\u9700\u8981\u66f4\u65b0\u3002\n     }else{  \n        shouldUpdate = updateClassInstance(current, workInProgress, Component, nextProps, renderExpirationTime) // \u66f4\u65b0\u7ec4\u4ef6\u6d41\u7a0b\n     }\n     if(shouldUpdate){\n         nextChildren = instance.render(); /* \u6267\u884crender\u51fd\u6570 \uff0c\u5f97\u5230\u5b50\u8282\u70b9 */\n        reconcileChildren(current,workInProgress,nextChildren,renderExpirationTime) /* \u7ee7\u7eed\u8c03\u548c\u5b50\u8282\u70b9 */\n     }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2460 ",(0,o.kt)("inlineCode",{parentName:"li"},"instance")," \u7c7b\u7ec4\u4ef6\u5bf9\u5e94\u5b9e\u4f8b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u2461 ",(0,o.kt)("inlineCode",{parentName:"li"},"workInProgress")," \u6811\uff0c\u5f53\u524d\u6b63\u5728\u8c03\u548c\u7684 fiber \u6811 \uff0c\u4e00\u6b21\u66f4\u65b0\u4e2d\uff0cReact \u4f1a\u81ea\u4e0a\u800c\u4e0b\u6df1\u5ea6\u904d\u5386\u5b50\u4ee3 fiber \uff0c\u5982\u679c\u904d\u5386\u5230\u4e00\u4e2a fiber \uff0c\u4f1a\u628a\u5f53\u524d fiber \u6307\u5411 workInProgress\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u2462 ",(0,o.kt)("inlineCode",{parentName:"li"},"current")," \u6811\uff0c\u5728\u521d\u59cb\u5316\u66f4\u65b0\u4e2d\uff0ccurrent = null \uff0c\u5728\u7b2c\u4e00\u6b21 fiber \u8c03\u548c\u4e4b\u540e\uff0c\u4f1a\u5c06 workInProgress \u6811\u8d4b\u503c\u7ed9 current \u6811\u3002React \u6765\u7528workInProgress \u548c current \u6765\u786e\u4fdd\u4e00\u6b21\u66f4\u65b0\u4e2d\uff0c\u5feb\u901f\u6784\u5efa\uff0c\u5e76\u4e14\u72b6\u6001\u4e0d\u4e22\u5931\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u2463 ",(0,o.kt)("inlineCode",{parentName:"li"},"Component")," \u5c31\u662f\u9879\u76ee\u4e2d\u7684 class \u7ec4\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u2464 ",(0,o.kt)("inlineCode",{parentName:"li"},"nextProps")," \u4f5c\u4e3a\u7ec4\u4ef6\u5728\u4e00\u6b21\u66f4\u65b0\u4e2d\u65b0\u7684 props \u3002"),(0,o.kt)("li",{parentName:"ul"},"\u2465 ",(0,o.kt)("inlineCode",{parentName:"li"},"renderExpirationTime")," \u4f5c\u4e3a\u4e0b\u4e00\u6b21\u6e32\u67d3\u7684\u8fc7\u671f\u65f6\u95f4\u3002")),(0,o.kt)("h2",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220816164526.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728\u7ec4\u4ef6\u5b9e\u4f8b\u4e0a\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"_reactInternals")," \u5c5e\u6027\u6765\u8bbf\u95ee\u7ec4\u4ef6\u5bf9\u5e94\u7684 fiber \u5bf9\u8c61\u3002\u5728 fiber \u5bf9\u8c61\u4e0a\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"stateNode")," \u6765\u8bbf\u95ee\u5f53\u524d fiber \u5bf9\u5e94\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u3002\u4e24\u8005\u7684\u5173\u7cfb\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220816143723.png",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getSnapshotBeforeUpdate")," \u7684\u6267\u884c\u4e5f\u662f\u5728 commit \u9636\u6bb5\uff0ccommit \u9636\u6bb5\u7ec6\u5206\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"before Mutation"),"( DOM \u4fee\u6539\u524d)\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Mutation")," ( DOM \u4fee\u6539)\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Layout"),"( DOM \u4fee\u6539\u540e) \u4e09\u4e2a\u9636\u6bb5\uff0cgetSnapshotBeforeUpdate \u53d1\u751f\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"before Mutation")," \u9636\u6bb5\uff0c\u751f\u547d\u5468\u671f\u7684\u8fd4\u56de\u503c\uff0c\u5c06\u4f5c\u4e3a\u7b2c\u4e09\u4e2a\u53c2\u6570 __reactInternalSnapshotBeforeUpdate \u4f20\u9012\u7ed9 componentDidUpdate \u3002"))),(0,o.kt)("h2",{id:"ref"},"Ref"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ref\u5c5e\u6027\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-JS"},'/* \u7c7b\u7ec4\u4ef6 */\nclass Children extends Component{  \n    render=()=><div>hello,world</div>\n}\n/* TODO:  Ref\u5c5e\u6027\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32 */\nexport default class Index extends React.Component{\n    componentDidMount(){\n       console.log(this.refs)\n    }\n    render=()=> <div>\n        <div ref="currentDom"  >\u5b57\u7b26\u4e32\u6a21\u5f0f\u83b7\u53d6\u5143\u7d20\u6216\u7ec4\u4ef6</div>\n        <Children ref="currentComInstance"  />\n    </div>\n}\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5982\u4e0a\u9762\u4ee3\u7801\u7247\u6bb5\uff0c\u7528\u4e00\u4e2a\u5b57\u7b26\u4e32 ref \u6807\u8bb0\u4e00\u4e2a DOM \u5143\u7d20\uff0c\u4e00\u4e2a\u7c7b\u7ec4\u4ef6(\u51fd\u6570\u7ec4\u4ef6\u6ca1\u6709\u5b9e\u4f8b\uff0c\u4e0d\u80fd\u88ab Ref \u6807\u8bb0)\u3002React \u5728\u5e95\u5c42\u903b\u8f91\uff0c\u4f1a\u5224\u65ad\u7c7b\u578b\uff0c\u5982\u679c\u662f DOM \u5143\u7d20\uff0c\u4f1a\u628a\u771f\u5b9e DOM \u7ed1\u5b9a\u5728\u7ec4\u4ef6 this.refs (\u7ec4\u4ef6\u5b9e\u4f8b\u4e0b\u7684 refs )\u5c5e\u6027\u4e0a\uff0c\u5982\u679c\u662f\u7c7b\u7ec4\u4ef6\uff0c\u4f1a\u628a\u5b50\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u7ed1\u5b9a\u5728 this.refs \u4e0a\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ref \u5c5e\u6027\u662f\u4e00\u4e2a\u51fd\u6570"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-JS"},"class Children extends React.Component{  \n    render=()=><div>hello,world</div>\n}\n/* TODO: Ref\u5c5e\u6027\u662f\u4e00\u4e2a\u51fd\u6570 */\nexport default class Index extends React.Component{\n    currentDom = null\n    currentComponentInstance = null\n    componentDidMount(){\n        console.log(this.currentDom)\n        console.log(this.currentComponentInstance)\n    }\n    render=()=> <div>\n        <div ref={(node)=> this.currentDom = node }  >Ref\u6a21\u5f0f\u83b7\u53d6\u5143\u7d20\u6216\u7ec4\u4ef6</div>\n        <Children ref={(node) => this.currentComponentInstance = node  }  />\n    </div>\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u4e0a\u4ee3\u7801\u7247\u6bb5\uff0c\u5f53\u7528\u4e00\u4e2a\u51fd\u6570\u6765\u6807\u8bb0 Ref \u7684\u65f6\u5019\uff0c\u5c06\u4f5c\u4e3a callback \u5f62\u5f0f\uff0c\u7b49\u5230\u771f\u5b9e DOM \u521b\u5efa\u9636\u6bb5\uff0c\u6267\u884c callback \uff0c\u83b7\u53d6\u7684 DOM \u5143\u7d20\u6216\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u5c06\u4ee5\u56de\u8c03\u51fd\u6570\u7b2c\u4e00\u4e2a\u53c2\u6570\u5f62\u5f0f\u4f20\u5165\uff0c\u6240\u4ee5\u53ef\u4ee5\u50cf\u4e0a\u8ff0\u4ee3\u7801\u7247\u6bb5\u4e2d\uff0c\u7528\u7ec4\u4ef6\u5b9e\u4f8b\u4e0b\u7684\u5c5e\u6027 ",(0,o.kt)("inlineCode",{parentName:"p"},"currentDom"),"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"currentComponentInstance")," \u6765\u63a5\u6536\u771f\u5b9e DOM \u548c\u7ec4\u4ef6\u5b9e\u4f8b\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Ref\u5c5e\u6027\u662f\u4e00\u4e2aref\u5bf9\u8c61\u3002")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-JS"},"class Children extends React.Component{  \n    render=()=><div>hello,world</div>\n}\nexport default class Index extends React.Component{\n    currentDom = React.createRef(null)\n    currentComponentInstance = React.createRef(null)\n    componentDidMount(){\n        console.log(this.currentDom)\n        console.log(this.currentComponentInstance)\n    }\n    render=()=> <div>\n         <div ref={ this.currentDom }  >Ref\u5bf9\u8c61\u6a21\u5f0f\u83b7\u53d6\u5143\u7d20\u6216\u7ec4\u4ef6</div>\n        <Children ref={ this.currentComponentInstance }  />\n   </div>\n}\n")))),(0,o.kt)("h2",{id:"forwardref"},"forwardRef"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6bd4\u5982\u60f3\u8981\u901a\u8fc7\u6807\u8bb0\u5b50\u7ec4\u4ef6 ref \uff0c\u6765\u83b7\u53d6\u5b59\u7ec4\u4ef6\u7684\u67d0\u4e00 DOM \u5143\u7d20\uff0c\u6216\u8005\u662f\u7ec4\u4ef6\u5b9e\u4f8b\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u573a\u666f\uff1a\u60f3\u8981\u5728 GrandFather \u7ec4\u4ef6\u901a\u8fc7\u6807\u8bb0 ref \uff0c\u6765\u83b7\u53d6\u5b59\u7ec4\u4ef6 Son \u7684\u7ec4\u4ef6\u5b9e\u4f8b\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b59\u7ec4\u4ef6\nfunction Son (props){\n    const { grandRef } = props\n    return <div>\n        <div> i am alien </div>\n        <span ref={grandRef} >\u8fd9\u4e2a\u662f\u60f3\u8981\u83b7\u53d6\u5143\u7d20</span>\n    </div>\n}\n// \u7236\u7ec4\u4ef6\nclass Father extends React.Component{\n    constructor(props){\n        super(props)\n    }\n    render(){\n        return <div>\n            <Son grandRef={this.props.grandRef}  />\n        </div>\n    }\n}\nconst NewFather = React.forwardRef((props,ref)=> <Father grandRef={ref}  {...props} />)\n// \u7237\u7ec4\u4ef6\nclass GrandFather extends React.Component{\n    constructor(props){\n        super(props)\n    }\n    node = null \n    componentDidMount(){\n        console.log(this.node) // span #text \u8fd9\u4e2a\u662f\u60f3\u8981\u83b7\u53d6\u5143\u7d20\n    }\n    render(){\n        return <div>\n            <NewFather ref={(node)=> this.node = node } />\n        </div>\n    }\n}\n")))),(0,o.kt)("h2",{id:"\u6e32\u67d3\u63a7\u5236"},"\u6e32\u67d3\u63a7\u5236"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220825182955.png",alt:null})))}m.isMDXComponent=!0}}]);
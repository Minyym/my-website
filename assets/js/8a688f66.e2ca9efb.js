"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),m=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},o=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=m(r),d=n,k=s["".concat(c,".").concat(d)]||s[d]||u[d]||l;return r?a.createElement(k,p(p({ref:t},o),{},{components:r})):a.createElement(k,p({ref:t},o))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,p[1]=i;for(var m=2;m<l;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3907:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={},p=void 0,i={unversionedId:"react/\u9762\u8bd5\u9898",id:"react/\u9762\u8bd5\u9898",isDocsHomePage:!1,title:"\u9762\u8bd5\u9898",description:"JSX\u662f\u4ec0\u4e48",source:"@site/docs/react/\u9762\u8bd5\u9898.md",sourceDirName:"react",slug:"/react/\u9762\u8bd5\u9898",permalink:"/my-website/docs/react/\u9762\u8bd5\u9898",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/react/\u9762\u8bd5\u9898.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8fdb\u9636",permalink:"/my-website/docs/react/\u8fdb\u9636"},next:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/my-website/docs/webpack/\u57fa\u672c\u6982\u5ff5"}},c=[{value:"JSX\u662f\u4ec0\u4e48",id:"jsx\u662f\u4ec0\u4e48",children:[]},{value:"JSX\u4e0eJS\u7684\u533a\u522b",id:"jsx\u4e0ejs\u7684\u533a\u522b",children:[]},{value:"\u4e3a\u4ec0\u4e48\u5728\u6587\u4ef6\u4e2d\u6ca1\u6709\u4f7f\u7528react\uff0c\u4e5f\u8981\u5728\u6587\u4ef6\u9876\u90e8import React from \u201creact\u201d",id:"\u4e3a\u4ec0\u4e48\u5728\u6587\u4ef6\u4e2d\u6ca1\u6709\u4f7f\u7528react\u4e5f\u8981\u5728\u6587\u4ef6\u9876\u90e8import-react-from-react",children:[]},{value:"\u4e3a\u4ec0\u4e48React\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u9996\u5b57\u6bcd\u8981\u5927\u5199",id:"\u4e3a\u4ec0\u4e48react\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u9996\u5b57\u6bcd\u8981\u5927\u5199",children:[]},{value:"React\u7ec4\u4ef6\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u8fd4\u56de\u591a\u4e2a\u5143\u7d20",id:"react\u7ec4\u4ef6\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u8fd4\u56de\u591a\u4e2a\u5143\u7d20",children:[]},{value:"React\u7ec4\u4ef6\u600e\u6837\u53ef\u4ee5\u8fd4\u56de\u591a\u4e2a\u7ec4\u4ef6",id:"react\u7ec4\u4ef6\u600e\u6837\u53ef\u4ee5\u8fd4\u56de\u591a\u4e2a\u7ec4\u4ef6",children:[]},{value:"React\u7684\u751f\u547d\u5468\u671f",id:"react\u7684\u751f\u547d\u5468\u671f",children:[]}],m={toc:c},o="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(o,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"jsx\u662f\u4ec0\u4e48"},"JSX\u662f\u4ec0\u4e48"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JSX\u662freact\u7684\u8bed\u6cd5\u7cd6\uff0c\u5b83\u5141\u8bb8\u5728html\u4e2d\u5199JS\uff0c\u5b83\u4e0d\u80fd\u88ab\u6d4f\u89c8\u5668\u76f4\u63a5\u8bc6\u522b\uff0c\u9700\u8981\u901a\u8fc7webpack\u3001babel\u4e4b\u7c7b\u7684\u7f16\u8bd1\u5de5\u5177\u8f6c\u6362\u4e3aJS\u6267\u884c")),(0,n.kt)("h2",{id:"jsx\u4e0ejs\u7684\u533a\u522b"},"JSX\u4e0eJS\u7684\u533a\u522b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JS\u53ef\u4ee5\u88ab\u6253\u5305\u5de5\u5177\u76f4\u63a5\u7f16\u8bd1\uff0c\u4e0d\u9700\u8981\u989d\u5916\u8f6c\u6362\uff0cjsx\u9700\u8981\u901a\u8fc7babel\u7f16\u8bd1\uff0c\u5b83\u662fReact.createElement\u7684\u8bed\u6cd5\u7cd6\uff0c\u4f7f\u7528jsx\u7b49\u4ef7\u4e8eReact.createElement"),(0,n.kt)("li",{parentName:"ul"},"jsx\u662fjs\u7684\u8bed\u6cd5\u6269\u5c55\uff0c\u5141\u8bb8\u5728html\u4e2d\u5199JS\uff1bJS\u662f\u539f\u751f\u5199\u6cd5\uff0c\u9700\u8981\u901a\u8fc7script\u6807\u7b7e\u5f15\u5165")),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u5728\u6587\u4ef6\u4e2d\u6ca1\u6709\u4f7f\u7528react\u4e5f\u8981\u5728\u6587\u4ef6\u9876\u90e8import-react-from-react"},"\u4e3a\u4ec0\u4e48\u5728\u6587\u4ef6\u4e2d\u6ca1\u6709\u4f7f\u7528react\uff0c\u4e5f\u8981\u5728\u6587\u4ef6\u9876\u90e8import React from \u201creact\u201d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ea\u8981\u4f7f\u7528\u4e86jsx\uff0c\u5c31\u9700\u8981\u5f15\u7528react\uff0c\u56e0\u4e3ajsx\u672c\u8d28\u5c31\u662fReact.createElement")),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48react\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u9996\u5b57\u6bcd\u8981\u5927\u5199"},"\u4e3a\u4ec0\u4e48React\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u9996\u5b57\u6bcd\u8981\u5927\u5199"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"jsx\u901a\u8fc7babel\u8f6c\u4e49\u65f6\uff0c\u8c03\u7528\u4e86React.createElement\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u4e09\u4e2a\u53c2\u6570\uff0c\u5206\u522b\u662ftype\u5143\u7d20\u7c7b\u578b\uff0cprops\u5143\u7d20\u5c5e\u6027\uff0cchildren\u5b50\u5143\u7d20\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u4ecejsx\u5230\u771f\u5b9eDOM\u9700\u8981\u7ecf\u5386",(0,n.kt)("em",{parentName:"p"},"jsx->\u865a\u62dfDOM->\u771f\u5b9eDOM"),"\u3002\u5982\u679c\u7ec4\u4ef6\u9996\u5b57\u6bcd\u4e3a\u5c0f\u5199\uff0c\u5b83\u4f1a\u88ab\u5f53\u6210\u5b57\u7b26\u4e32\u8fdb\u884c\u4f20\u9012\uff0c\u5728\u521b\u5efa\u865a\u62dfDOM\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u628a\u5b83\u5f53\u6210\u4e00\u4e2ahtml\u6807\u7b7e\uff0c\u800chtml\u6ca1\u6709app\u8fd9\u4e2a\u6807\u7b7e\uff0c\u5c31\u4f1a\u62a5\u9519\u3002\u7ec4\u4ef6\u9996\u5b57\u6bcd\u4e3a\u5927\u5199\uff0c\u5b83\u4f1a\u5f53\u6210\u4e00\u4e2a\u53d8\u91cf\u8fdb\u884c\u4f20\u9012\uff0cReact\u77e5\u9053\u5b83\u662f\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5c31\u4e0d\u4f1a\u62a5\u9519\u4e86"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'<app>lyllovelemon</app>\n// \u8f6c\u4e49\u540e\nReact.createElement("app",null,"lyllovelemon")\n\n<App>lyllovelemon</App>\n// \u8f6c\u4e49\u540e\nReact.createElement(App,null,lyllovelemon)\n\u590d\u5236\u4ee3\u7801\n')))),(0,n.kt)("h2",{id:"react\u7ec4\u4ef6\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u8fd4\u56de\u591a\u4e2a\u5143\u7d20"},"React\u7ec4\u4ef6\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u8fd4\u56de\u591a\u4e2a\u5143\u7d20"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"React\u7ec4\u4ef6\u6700\u540e\u4f1a\u7f16\u8bd1\u4e3arender\u51fd\u6570\uff0c\u51fd\u6570\u7684\u8fd4\u56de\u503c\u53ea\u80fd\u662f1\u4e2a\uff0c\u5982\u679c\u4e0d\u7528\u5355\u72ec\u7684\u6839\u8282\u70b9\u5305\u88f9\uff0c\u5c31\u4f1a\u5e76\u5217\u8fd4\u56de\u591a\u4e2a\u503c\uff0c\u8fd9\u5728js\u4e2d\u662f\u4e0d\u5141\u8bb8\u7684"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-JS"},"class App extends React.Component{\n  render(){ \n    return(\n    <div>\n     <h1 className=\"title\">lyllovelemon</h1>\n      <span>\u5185\u5bb9</span>   \n    </div>  \n  )\n}\n\n//\u7f16\u8bd1\u540e\nclass App extends React.Component{\n  render(){\n    return React.createElement('div',null,[\n      React.createElement('h1',{className:'title'},'lyllovelemon'),\n      React.createElement('span'),null,'\u5185\u5bb9'\n      ])\n  }\n}\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"react\u7684\u865a\u62dfDOM\u662f\u4e00\u4e2a\u6811\u72b6\u7ed3\u6784\uff0c\u6811\u7684\u6839\u8282\u70b9\u53ea\u80fd\u662f1\u4e2a\uff0c\u5982\u679c\u6709\u591a\u4e2a\u6839\u8282\u70b9\uff0c\u65e0\u6cd5\u786e\u8ba4\u662f\u5728\u54ea\u68f5\u6811\u4e0a\u8fdb\u884c\u66f4\u65b0"))),(0,n.kt)("h2",{id:"react\u7ec4\u4ef6\u600e\u6837\u53ef\u4ee5\u8fd4\u56de\u591a\u4e2a\u7ec4\u4ef6"},"React\u7ec4\u4ef6\u600e\u6837\u53ef\u4ee5\u8fd4\u56de\u591a\u4e2a\u7ec4\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528HOC\uff08\u9ad8\u9636\u51fd\u6570\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528React.Fragment,\u53ef\u4ee5\u8ba9\u4f60\u5c06\u5143\u7d20\u5217\u8868\u52a0\u5230\u4e00\u4e2a\u5206\u7ec4\u4e2d\uff0c\u800c\u4e14\u4e0d\u4f1a\u521b\u5efa\u989d\u5916\u7684\u8282\u70b9\uff08\u7c7b\u4f3cvue\u7684template)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-JS"},"renderList(){\n  this.state.list.map((item,key)=>{\n    return (<React.Fragment>\n      <tr key={item.id}>\n        <td>{item.name}</td>\n        <td>{item.age}</td>\n        <td>{item.address}</td>\n      </tr> \n    </React.Fragment>)\n  })\n}\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u6570\u7ec4\u8fd4\u56de"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-JS"},"renderList(){\n  this.state.list.map((item,key)=>{\n    return [\n      <tr key={item.id}>\n        <td>{item.name}</td>\n        <td>{item.age}</td>\n        <td>{item.address}</td>\n      </tr>\n    ]\n  })\n}\n")))),(0,n.kt)("h2",{id:"react\u7684\u751f\u547d\u5468\u671f"},"React\u7684\u751f\u547d\u5468\u671f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u751f\u547d\u5468\u671f\u6307\u7684\u662f\u7ec4\u4ef6\u5b9e\u4f8b\u4ece\u521b\u5efa\u5230\u9500\u6bc1\u7684\u6d41\u7a0b\uff0c\u51fd\u6570\u7ec4\u4ef6\u6ca1\u6709\u751f\u547d\u5468\u671f\uff0c\u53ea\u6709\u7c7b\u7ec4\u4ef6\u624d\u6709\uff0c\u56e0\u4e3a\u53ea\u6709class\u7ec4\u4ef6\u4f1a\u521b\u5efa\u7ec4\u4ef6\u5b9e\u4f8b"),(0,n.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u53ef\u4ee5\u5206\u4e3a",(0,n.kt)("strong",{parentName:"p"},"\u6302\u8f7d\u3001\u66f4\u65b0\u3001\u5378\u8f7d"),"\u9636\u6bb5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6302\u8f7d")),(0,n.kt)("p",{parentName:"li"},"\u200b\t",(0,n.kt)("strong",{parentName:"p"},"constructor")," \u53ef\u4ee5\u8fdb\u884cstate\u548cprops\u7684\u521d\u59cb\u5316"),(0,n.kt)("p",{parentName:"li"},"\u200b\tstatic getDerivedStateFromProps"),(0,n.kt)("p",{parentName:"li"},"\u200b\trender"),(0,n.kt)("p",{parentName:"li"},"\u200b\t",(0,n.kt)("strong",{parentName:"p"},"componentDidMount")," \u7b2c\u4e00\u6b21\u6e32\u67d3\u540e\u8c03\u7528\uff0c\u53ef\u4ee5\u8bbf\u95eeDOM\uff0c\u8fdb\u884c\u5f02\u6b65\u8bf7\u6c42\u548c\u5b9a\u65f6\u5668\u3001\u6d88\u606f\u8ba2\u9605"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u66f4\u65b0")),(0,n.kt)("p",{parentName:"li"},"\u200b\t\u5f53\u7ec4\u4ef6\u7684props\u6216state\u53d8\u5316\u4f1a\u89e6\u53d1\u66f4\u65b0"),(0,n.kt)("p",{parentName:"li"},"\u200b\tstatic getDerivedStateFromProps"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\tshouldComponentUpdate")," \u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u9ed8\u8ba4\u8fd4\u56detrue\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u94a9\u5b50\u8fdb\u884c\u6027\u80fd\u4f18\u5316\uff0c\u786e\u8ba4\u4e0d\u9700\u8981\u66f4\u65b0\u7ec4\u4ef6\u65f6\u8c03\u7528"),(0,n.kt)("p",{parentName:"li"},"\u200b\trender"),(0,n.kt)("p",{parentName:"li"},"\u200b\tgetSnapShotBeforeUpdate"),(0,n.kt)("p",{parentName:"li"},"\u200b\tcomponentDidUpdate \u5728\u7ec4\u4ef6\u5b8c\u6210\u66f4\u65b0\u540e\u8c03\u7528"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5378\u8f7d")),(0,n.kt)("p",{parentName:"li"},"\u200b\tcomponentWillUnmount \u7ec4\u4ef6\u4eceDOM\u4e2d\u88ab\u79fb\u9664\u7684\u65f6\u5019\u8c03\u7528"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u9519\u8bef\u6355\u83b7")),(0,n.kt)("p",{parentName:"li"},"\u200b\tstatic getDerivedStateFromError \u5728errorBoundary\u4e2d\u4f7f\u7528"),(0,n.kt)("p",{parentName:"li"},"\u200b\tcomponentDidCatch"),(0,n.kt)("p",{parentName:"li"},"\u200b\t",(0,n.kt)("strong",{parentName:"p"},"render"),"\u662fclass\u7ec4\u4ef6\u4e2d\u552f\u4e00\u5fc5\u987b\u5b9e\u73b0\u7684\u65b9\u6cd5"))))}s.isMDXComponent=!0}}]);
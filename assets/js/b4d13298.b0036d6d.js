"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2244],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,k=u["".concat(o,".").concat(s)]||u[s]||c[s]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4161:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],p={},o=void 0,m={unversionedId:"react/api\u6c47\u603b",id:"react/api\u6c47\u603b",isDocsHomePage:!1,title:"api\u6c47\u603b",description:"\u751f\u547d\u5468\u671f",source:"@site/docs/react/api\u6c47\u603b.md",sourceDirName:"react",slug:"/react/api\u6c47\u603b",permalink:"/my-website/docs/react/api\u6c47\u603b",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/react/api\u6c47\u603b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Babel\u7684AST\u548cAPI",permalink:"/my-website/docs/babel/Babel\u7684AST\u548cAPI"},next:{title:"\u865a\u62dfDOM",permalink:"/my-website/docs/react/\u865a\u62dfDOM"}},d=[{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",children:[]},{value:"\u7ec4\u4ef6\u7c7b",id:"\u7ec4\u4ef6\u7c7b",children:[{value:"memo",id:"memo",children:[]},{value:"<strong>StrictMode</strong>",id:"strictmode",children:[]}]},{value:"\u5de5\u5177\u7c7b",id:"\u5de5\u5177\u7c7b",children:[{value:"createElement",id:"createelement",children:[]},{value:"cloneElement",id:"cloneelement",children:[]},{value:"getDerivedStateFromProps",id:"getderivedstatefromprops",children:[]}]},{value:"hooks",id:"hooks",children:[{value:"useImperativeHandle",id:"useimperativehandle",children:[]},{value:"useRef",id:"useref",children:[]}]}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220816160247.png",alt:null})),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u7c7b"},"\u7ec4\u4ef6\u7c7b"),(0,i.kt)("h3",{id:"memo"},"memo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"React.memo"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"PureComponent"),"\u4f5c\u7528\u7c7b\u4f3c\uff0c\u53ef\u4ee5\u7528\u4f5c\u6027\u80fd\u4f18\u5316\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"React.memo")," \u662f",(0,i.kt)("strong",{parentName:"p"},"\u9ad8\u9636\u7ec4\u4ef6"),"\uff0c\u51fd\u6570\u7ec4\u4ef6\u548c\u7c7b\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c \u548c\u533a\u522b",(0,i.kt)("inlineCode",{parentName:"p"},"PureComponent"),"\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"React.memo"),"\u53ea\u80fd\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\u7684\u60c5\u51b5\u786e\u5b9a\u662f\u5426\u6e32\u67d3\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"PureComponent"),"\u662f\u9488\u5bf9",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"state"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"React.memo")," \u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u539f\u59cb\u7ec4\u4ef6\u672c\u8eab\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u6839\u636e\u4e00\u6b21\u66f4\u65b0\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\u662f\u5426\u76f8\u540c\u51b3\u5b9a\u539f\u59cb\u7ec4\u4ef6\u662f\u5426\u91cd\u65b0\u6e32\u67d3\u3002\u662f\u4e00\u4e2a\u8fd4\u56de\u5e03\u5c14\u503c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u8bc1\u660e\u7ec4\u4ef6\u65e0\u987b\u91cd\u65b0\u6e32\u67d3\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u8bc1\u660e\u7ec4\u4ef6\u9700\u8981\u91cd\u65b0\u6e32\u67d3\uff0c\u8fd9\u4e2a\u548c\u7c7b\u7ec4\u4ef6\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate()"),"\u6b63\u597d\u76f8\u53cd \u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"React.memo: \u7b2c\u4e8c\u4e2a\u53c2\u6570 \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"strong"},"true")," \u7ec4\u4ef6\u4e0d\u6e32\u67d3 \uff0c \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"strong"},"false")," \u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"shouldComponentUpdate: \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"strong"},"true")," \u7ec4\u4ef6\u6e32\u67d3 \uff0c \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"strong"},"false")," \u7ec4\u4ef6\u4e0d\u6e32\u67d3\u3002")))),(0,i.kt)("h3",{id:"strictmode"},(0,i.kt)("strong",{parentName:"h3"},"StrictMode")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StrictMode"),"\u89c1\u540d\u77e5\u610f\uff0c\u4e25\u683c\u6a21\u5f0f\uff0c\u7528\u4e8e\u68c0\u6d4b",(0,i.kt)("inlineCode",{parentName:"li"},"react"),"\u9879\u76ee\u4e2d\u7684\u6f5c\u5728\u7684\u95ee\u9898\uff0c\u3002\u4e0e ",(0,i.kt)("inlineCode",{parentName:"li"},"Fragment")," \u4e00\u6837\uff0c ",(0,i.kt)("inlineCode",{parentName:"li"},"StrictMode")," \u4e0d\u4f1a\u6e32\u67d3\u4efb\u4f55\u53ef\u89c1\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"UI")," \u3002\u5b83\u4e3a\u5176\u540e\u4ee3\u5143\u7d20\u89e6\u53d1\u989d\u5916\u7684\u68c0\u67e5\u548c\u8b66\u544a\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e25\u683c\u6a21\u5f0f\u68c0\u67e5\u4ec5\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u8fd0\u884c\uff1b\u5b83\u4eec\u4e0d\u4f1a\u5f71\u54cd\u751f\u4ea7\u6784\u5efa\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StrictMode"),"\u76ee\u524d\u6709\u52a9\u4e8e\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u2460\u8bc6\u522b\u4e0d\u5b89\u5168\u7684\u751f\u547d\u5468\u671f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u2461\u5173\u4e8e\u4f7f\u7528\u8fc7\u65f6\u5b57\u7b26\u4e32 ",(0,i.kt)("inlineCode",{parentName:"li"},"ref API")," \u7684\u8b66\u544a"),(0,i.kt)("li",{parentName:"ul"},"\u2462\u5173\u4e8e\u4f7f\u7528\u5e9f\u5f03\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"findDOMNode")," \u65b9\u6cd5\u7684\u8b66\u544a"),(0,i.kt)("li",{parentName:"ul"},"\u2463\u68c0\u6d4b\u610f\u5916\u7684\u526f\u4f5c\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u2464\u68c0\u6d4b\u8fc7\u65f6\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"context API"))))),(0,i.kt)("h2",{id:"\u5de5\u5177\u7c7b"},"\u5de5\u5177\u7c7b"),(0,i.kt)("h3",{id:"createelement"},"createElement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e00\u63d0\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"createElement"),"\uff0c\u5c31\u4e0d\u7531\u5f97\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"JSX"),"\u8054\u7cfb\u4e00\u8d77\u3002\u6211\u4eec\u5199\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"jsx"),"\uff0c\u6700\u7ec8\u4f1a\u88ab ",(0,i.kt)("inlineCode",{parentName:"p"},"babel"),"\uff0c\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"createElement"),"\u7f16\u8bd1\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"react"),"\u5143\u7d20\u5f62\u5f0f\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u6211\u4eec\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"render"),"\u91cc\u9762\u8fd9\u4e48\u5199\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'render(){\n    return <div className="box" >\n        <div className="item"  >\u751f\u547d\u5468\u671f</div>\n        <Text  mes="hello,world"  />\n        <React.Fragment> Flagment </React.Fragment>\n        { /*  */ }\n        text\u6587\u672c\n    </div>\n}\n')),(0,i.kt)("p",{parentName:"li"},"\u4f1a\u88ab\u7f16\u8bd1\u6210\u8fd9\u6837\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'render() {\n    return React.createElement("div", { className: "box" },\n            React.createElement("div", { className: "item" }, "\\u751F\\u547D\\u5468\\u671F"),\n            React.createElement(Text, { mes: "hello,world" }),\n            React.createElement(React.Fragment, null, " Flagment "),\n            "text\\u6587\\u672C");\n    }\n')))),(0,i.kt)("h3",{id:"cloneelement"},"cloneElement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"createElement"),"\u628a\u6211\u4eec\u5199\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"jsx"),"\uff0c\u53d8\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"element"),"\u5bf9\u8c61;  \u800c",(0,i.kt)("inlineCode",{parentName:"p"},"cloneElement"),"\u7684\u4f5c\u7528\u662f\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"element")," \u5143\u7d20\u4e3a\u6837\u677f\u514b\u9686\u5e76\u8fd4\u56de\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"React")," \u5143\u7d20\u3002\u8fd4\u56de\u5143\u7d20\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," \u662f\u5c06\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," \u4e0e\u539f\u59cb\u5143\u7d20\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," \u6d45\u5c42\u5408\u5e76\u540e\u7684\u7ed3\u679c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u90a3\u4e48",(0,i.kt)("inlineCode",{parentName:"p"},"cloneElement"),"\u611f\u89c9\u5728\u6211\u4eec\u5b9e\u9645\u4e1a\u52a1\u7ec4\u4ef6\u4e2d\uff0c\u53ef\u80fd\u6ca1\u4ec0\u4e48\u7528\uff0c\u4f46\u662f\u5728",(0,i.kt)("strong",{parentName:"p"},"\u4e00\u4e9b\u5f00\u6e90\u9879\u76ee\uff0c\u6216\u8005\u662f\u516c\u5171\u63d2\u69fd\u7ec4\u4ef6\u4e2d"),"\u7528\u5904\u8fd8\u662f\u86ee\u5927\u7684\uff0c\u6bd4\u5982\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u7ec4\u4ef6\u4e2d\uff0c\u52ab\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"children element"),"\uff0c\u7136\u540e\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"cloneElement"),"\u514b\u9686",(0,i.kt)("inlineCode",{parentName:"p"},"element"),"\uff0c\u6df7\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\u3002\u7ecf\u5178\u7684\u6848\u4f8b\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"react-router"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Swtich"),"\u7ec4\u4ef6\uff0c\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u6765\u5339\u914d\u552f\u4e00\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Route"),"\u5e76\u52a0\u4ee5\u6e32\u67d3\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6211\u4eec\u8bbe\u7f6e\u4e00\u4e2a\u573a\u666f\uff0c\u5728\u7ec4\u4ef6\u4e2d\uff0c\u53bb\u52ab\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"children"),"\uff0c\u7136\u540e\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"children"),"\u8d4b\u80fd\u4e00\u4e9b\u989d\u5916\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"props"),":"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function FatherComponent({ children }){\n    const newChildren = React.cloneElement(children, { age: 18})\n    return <div> { newChildren } </div>\n}\n\nfunction SonComponent(props){\n    console.log(props)\n    return <div>hello,world</div>\n}\n\nclass Index extends React.Component{    \n    render(){      \n        return <div className="box" >\n            <FatherComponent>\n                <SonComponent name="alien"  />\n            </FatherComponent>\n        </div>   \n    }\n}\n')),(0,i.kt)("h3",{id:"getderivedstatefromprops"},"getDerivedStateFromProps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getDerivedStateFromProps")," \u4f1a\u5728\u8c03\u7528 render \u65b9\u6cd5\u4e4b\u524d\u8c03\u7528\uff0c\u5e76\u4e14\u5728\u521d\u59cb\u6302\u8f7d\u53ca\u540e\u7eed\u66f4\u65b0\u65f6\u90fd\u4f1a\u88ab\u8c03\u7528\u3002\u5b83\u5e94\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u6765\u66f4\u65b0 state\uff0c\u5982\u679c\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," \u5219\u4e0d\u66f4\u65b0\u4efb\u4f55\u5185\u5bb9\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u628a getDerivedStateFromProps \u82f1\u6587\u5206\u89e3 get \uff5c Derived | State \uff5c From \uff5c Props \u7ffb\u8bd1 ",(0,i.kt)("strong",{parentName:"li"},"\u5f97\u5230 \u6d3e\u751f\u7684 state \u4ece props \u4e2d")," \uff0c\u6b63\u5982\u5b83\u7684\u540d\u5b57\u4e00\u6837\uff0c\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u7528\u4e8e\uff0c\u5728\u521d\u59cb\u5316\u548c\u66f4\u65b0\u9636\u6bb5\uff0c\u63a5\u53d7\u7236\u7ec4\u4ef6\u7684 props \u6570\u636e\uff0c \u53ef\u4ee5\u5bf9 props \u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u8fc7\u6ee4\u7b49\u64cd\u4f5c\uff0c\u8fd4\u56de\u503c\u5c06\u4f5c\u4e3a\u65b0\u7684 state \u5408\u5e76\u5230 state \u4e2d\uff0c\u4f9b\u7ed9\u89c6\u56fe\u6e32\u67d3\u5c42\u6d88\u8d39\u3002")),(0,i.kt)("h2",{id:"hooks"},"hooks"),(0,i.kt)("h3",{id:"useimperativehandle"},"useImperativeHandle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6b63\u5e38\u60c5\u51b5\u4e0b ref \u662f\u4e0d\u80fd\u6302\u5728\u5230\u51fd\u6570\u7ec4\u4ef6\u4e0a\u7684\uff0c\u56e0\u4e3a\u51fd\u6570\u7ec4\u4ef6\u6ca1\u6709\u5b9e\u4f8b\uff0c\u4f46\u662f useImperativeHandle \u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7c7b\u4f3c\u5b9e\u4f8b\u7684\u4e1c\u897f\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b83\u5e2e\u52a9\u6211\u4eec\u901a\u8fc7 useImperativeHandle \u7684\u7b2c 2 \u4e2a\u53c2\u6570\uff0c\u6240\u8fd4\u56de\u7684\u5bf9\u8c61\u7684\u5185\u5bb9\u6302\u8f7d\u5230 \u7236\u7ec4\u4ef6\u7684 ref.current \u4e0a\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"forwardRef\u4f1a\u521b\u5efa\u4e00\u4e2aReact\u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u80fd\u591f\u5c06\u5176\u63a5\u53d7\u7684 ref \u5c5e\u6027\u8f6c\u53d1\u5230\u5176\u7ec4\u4ef6\u6811\u4e0b\u7684\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-JS"},"import React, { forwardRef, useImperativeHandle, useEffect, useRef } from 'react'\n\nconst TestRef = forwardRef((props, ref) => {\n  useImperativeHandle(ref, () => ({\n    open() {\n      console.log(\"open\")\n    }\n  }))\n   return <div>1</div>\n})\n\nfunction App () {\n  const ref = useRef()\n  useEffect(() => {\n    ref.current.open()\n  },[])\n  \n  return(\n    <>\n      <div>\u54c8\u54c8\u54c8\u54c8</div>\n      <TestRef ref={ref}></TestRef>\n    </>\n  )\n}\nexport default App\n")))),(0,i.kt)("h3",{id:"useref"},"useRef"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"useRef \u53ef\u4ee5\u521b\u5efa\u51fa\u4e00\u4e2a ref \u539f\u59cb\u5bf9\u8c61\uff0c\u53ea\u8981\u7ec4\u4ef6\u6ca1\u6709\u9500\u6bc1\uff0cref \u5bf9\u8c61\u5c31\u4e00\u76f4\u5b58\u5728\uff0c\u90a3\u4e48\u5b8c\u5168\u53ef\u4ee5\u628a\u4e00\u4e9b\u4e0d\u4f9d\u8d56\u4e8e\u89c6\u56fe\u66f4\u65b0\u7684\u6570\u636e\u50a8\u5b58\u5230 ref \u5bf9\u8c61\u4e2d\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u6709\u4e24\u4e2a\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u80fd\u591f\u76f4\u63a5\u4fee\u6539\u6570\u636e\uff0c\u4e0d\u4f1a\u9020\u6210\u51fd\u6570\u7ec4\u4ef6\u5197\u4f59\u7684\u66f4\u65b0\u4f5c\u7528\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a useRef \u4fdd\u5b58\u6570\u636e\uff0c\u5982\u679c\u6709 useEffect \uff0cuseMemo \u5f15\u7528 ref \u5bf9\u8c61\u4e2d\u7684\u6570\u636e\uff0c\u65e0\u987b\u5c06 ref \u5bf9\u8c61\u6dfb\u52a0\u6210 dep \u4f9d\u8d56\u9879\uff0c\u56e0\u4e3a useRef \u59cb\u7ec8\u6307\u5411\u4e00\u4e2a\u5185\u5b58\u7a7a\u95f4\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u6240\u4ee5\u8fd9\u6837\u4e00\u70b9\u597d\u5904\u662f\u53ef\u4ee5\u968f\u65f6\u8bbf\u95ee\u5230\u53d8\u5316\u540e\u7684\u503c\u3002"))))))}u.isMDXComponent=!0}}]);
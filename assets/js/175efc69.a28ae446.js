"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2319],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),b=a,d=c["".concat(p,".").concat(b)]||c[b]||s[b]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2166:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p=void 0,m={unversionedId:"babel/Babel\u7684AST\u548cAPI",id:"babel/Babel\u7684AST\u548cAPI",isDocsHomePage:!1,title:"Babel\u7684AST\u548cAPI",description:"\u5e38\u89c1\u7684AST\u8282\u70b9",source:"@site/docs/babel/2.Babel\u7684AST\u548cAPI.md",sourceDirName:"babel",slug:"/babel/Babel\u7684AST\u548cAPI",permalink:"/my-website/docs/babel/Babel\u7684AST\u548cAPI",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/babel/2.Babel\u7684AST\u548cAPI.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"babel\u7684\u4ecb\u7ecd\u548c\u7b80\u5355\u7f16\u8bd1\u6d41\u7a0b",permalink:"/my-website/docs/babel/babel\u7684\u4ecb\u7ecd\u548c\u7b80\u5355\u7f16\u8bd1\u6d41\u7a0b"},next:{title:"api\u6c47\u603b",permalink:"/my-website/docs/react/api\u6c47\u603b"}},u=[{value:"\u5e38\u89c1\u7684AST\u8282\u70b9",id:"\u5e38\u89c1\u7684ast\u8282\u70b9",children:[]},{value:"AST\u53ef\u89c6\u5316\u67e5\u770b\u5de5\u5177",id:"ast\u53ef\u89c6\u5316\u67e5\u770b\u5de5\u5177",children:[]},{value:"AST \u7684\u516c\u5171\u5c5e\u6027",id:"ast-\u7684\u516c\u5171\u5c5e\u6027",children:[]},{value:"Babel\u7684api",id:"babel\u7684api",children:[]}],s={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5e38\u89c1\u7684ast\u8282\u70b9"},"\u5e38\u89c1\u7684AST\u8282\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Literal"),"\uff08\u5b57\u9762\u91cf\uff09\uff1a\u5b57\u7b26\u4e32\u5b57\u9762\u91cf StringLiteral\uff0c\u76f8\u5e94\u7684\u8fd8\u6709\u6570\u5b57\u5b57\u9762\u91cf NumericLiteral\uff0c\u5e03\u5c14\u5b57\u9762\u91cf BooleanLiteral\uff0c\u5b57\u7b26\u4e32\u5b57\u9762\u91cf StringLiteral\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u5b57\u9762\u91cf RegExpLiteral \u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Identifier"),"\uff08\u6807\u8bc6\u7b26\uff09\uff1a\u53d8\u91cf\u3001\u51fd\u6570\u540d\u3001\u5c5e\u6027\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Statement"),"\uff08\u8bed\u53e5\uff09\uff1a break\uff08BreakStatement\uff09\u3001continue\u3001debugger\u3001return \u6216\u8005 if \u8bed\u53e5\u3001while \u8bed\u53e5\u3001for \u8bed\u53e5\uff0c\u8fd8\u6709\u58f0\u660e\u8bed\u53e5\uff0c\u8868\u8fbe\u5f0f\u8bed\u53e5\u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Declaration"),"\uff08\u58f0\u660e\u8bed\u53e5\uff09\uff1a\u58f0\u660e\u8bed\u53e5\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u8bed\u53e5\uff0c\u5b83\u6267\u884c\u7684\u903b\u8f91\u662f\u5728\u4f5c\u7528\u57df\u5185\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf(VariableDeclaration)\u3001\u51fd\u6570\uff08FunctionDeclaration\uff09\u3001class\u3001import\u3001export \u7b49"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Expression"),"\uff08\u8868\u8fbe\u5f0f\uff09\uff1aexpression \u662f\u8868\u8fbe\u5f0f\uff0c\u7279\u70b9\u662f\u6267\u884c\u5b8c\u4ee5\u540e\u6709\u8fd4\u56de\u503c\uff0c\u8fd9\u662f\u548c\u8bed\u53e5 (statement) \u7684\u533a\u522b\u3002","[1,2,3]","\uff08ArrayExpression\uff09 a = 1 \uff08assignmentExpression\uff091 + 2;\uff08BinaryExpression\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"class"),"\uff1aclass \u7684\u8bed\u6cd5\u4e5f\u6709\u4e13\u95e8\u7684 AST \u8282\u70b9\u6765\u8868\u793a\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Modules"),"\uff1aes module \u662f\u8bed\u6cd5\u7ea7\u522b\u7684\u6a21\u5757\u89c4\u8303\uff0c\u6240\u4ee5\u4e5f\u6709\u4e13\u95e8\u7684 AST \u8282\u70b9\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"import")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"export")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Program & Directive"),"\uff1aprogram \u662f\u4ee3\u8868\u6574\u4e2a\u7a0b\u5e8f\u7684\u8282\u70b9\uff0c\u5b83\u6709 body \u5c5e\u6027\u4ee3\u8868\u7a0b\u5e8f\u4f53\uff0c\u5b58\u653e statement \u6570\u7ec4\uff0c\u5c31\u662f\u5177\u4f53\u6267\u884c\u7684\u8bed\u53e5\u7684\u96c6\u5408\u3002\u8fd8\u6709 directives \u5c5e\u6027\uff0c\u5b58\u653e Directive \u8282\u70b9\uff0c\u6bd4\u5982",(0,i.kt)("inlineCode",{parentName:"li"},'"use strict"')," \u8fd9\u79cd\u6307\u4ee4\u4f1a\u4f7f\u7528 Directive \u8282\u70b9\u8868\u793a\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"File & Comment"),"\uff1ababel \u7684 AST \u6700\u5916\u5c42\u8282\u70b9\u662f File\uff0c\u5b83\u6709 program\u3001comments\u3001tokens \u7b49\u5c5e\u6027\uff0c\u5206\u522b\u5b58\u653e Program \u7a0b\u5e8f\u4f53\u3001\u6ce8\u91ca\u3001token \u7b49\uff0c\u662f\u6700\u5916\u5c42\u8282\u70b9\u3002")),(0,i.kt)("h2",{id:"ast\u53ef\u89c6\u5316\u67e5\u770b\u5de5\u5177"},"AST\u53ef\u89c6\u5316\u67e5\u770b\u5de5\u5177"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://astexplorer.net/"},"https://astexplorer.net/"))),(0,i.kt)("h2",{id:"ast-\u7684\u516c\u5171\u5c5e\u6027"},"AST \u7684\u516c\u5171\u5c5e\u6027"),(0,i.kt)("p",null,"\u6bcf\u79cd AST \u90fd\u6709\u81ea\u5df1\u7684\u5c5e\u6027\uff0c\u4f46\u662f\u5b83\u4eec\u4e5f\u6709\u4e00\u4e9b\u516c\u5171\u7684\u5c5e\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\uff1a AST \u8282\u70b9\u7684\u7c7b\u578b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"start\u3001end\u3001loc"),"\uff1astart \u548c end \u4ee3\u8868\u8be5\u8282\u70b9\u5728\u6e90\u7801\u4e2d\u7684\u5f00\u59cb\u548c\u7ed3\u675f\u4e0b\u6807\u3002\u800c loc \u5c5e\u6027\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u6709 line \u548c column \u5c5e\u6027\u5206\u522b\u8bb0\u5f55\u5f00\u59cb\u548c\u7ed3\u675f\u7684\u884c\u5217\u53f7\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"leadingComments\u3001innerComments\u3001trailingComments"),"\uff1a \u8868\u793a\u5f00\u59cb\u7684\u6ce8\u91ca\u3001\u4e2d\u95f4\u7684\u6ce8\u91ca\u3001\u7ed3\u5c3e\u7684\u6ce8\u91ca\uff0c\u6bcf\u4e2a AST \u8282\u70b9\u4e2d\u90fd\u53ef\u80fd\u5b58\u5728\u6ce8\u91ca\uff0c\u800c\u4e14\u53ef\u80fd\u5728\u5f00\u59cb\u3001\u4e2d\u95f4\u3001\u7ed3\u675f\u8fd9\u4e09\u79cd\u4f4d\u7f6e\uff0c\u60f3\u62ff\u5230\u67d0\u4e2a AST \u7684\u6ce8\u91ca\u5c31\u901a\u8fc7\u8fd9\u4e09\u4e2a\u5c5e\u6027\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-JS"},"const a  = '\u54c8' // \u4e0b\u56fe\u5c55\u793a\u7684\u662f '\u54c8'\u7684ast\u7ed3\u6784\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Minyym/figure-bed/master/img/202301121120700.png",alt:null})))),(0,i.kt)("h2",{id:"babel\u7684api"},"Babel\u7684api"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@babel/parser")," \u5bf9\u6e90\u7801\u8fdb\u884c parse\uff0c\u53ef\u4ee5\u901a\u8fc7 plugins\u3001sourceType \u7b49\u6765\u6307\u5b9a parse \u8bed\u6cd5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@babel/traverse")," \u901a\u8fc7 visitor \u51fd\u6570\u5bf9\u904d\u5386\u5230\u7684 ast \u8fdb\u884c\u5904\u7406\uff0c\u5206\u4e3a enter \u548c exit \u4e24\u4e2a\u9636\u6bb5\uff0c\u5177\u4f53\u64cd\u4f5c AST \u4f7f\u7528 path \u7684 api\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7 state \u6765\u5728\u904d\u5386\u8fc7\u7a0b\u4e2d\u4f20\u9012\u4e00\u4e9b\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@babel/types")," \u7528\u4e8e\u521b\u5efa\u3001\u5224\u65ad AST \u8282\u70b9\uff0c\u63d0\u4f9b\u4e86 xxx\u3001isXxx\u3001assertXxx \u7684 api"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@babel/template")," \u7528\u4e8e\u6279\u91cf\u521b\u5efa\u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@babel/code-frame")," \u53ef\u4ee5\u521b\u5efa\u53cb\u597d\u7684\u62a5\u9519\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@babel/generator")," \u6253\u5370 AST \u6210\u76ee\u6807\u4ee3\u7801\u5b57\u7b26\u4e32\uff0c\u652f\u6301 comments\u3001minified\u3001sourceMaps \u7b49\u9009\u9879\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@babel/core")," \u57fa\u4e8e\u4e0a\u9762\u7684\u5305\u6765\u5b8c\u6210 babel \u7684\u7f16\u8bd1\u6d41\u7a0b\uff0c\u53ef\u4ee5\u4ece\u6e90\u7801\u5b57\u7b26\u4e32\u3001\u6e90\u7801\u6587\u4ef6\u3001AST \u5f00\u59cb\u3002")))}c.isMDXComponent=!0}}]);
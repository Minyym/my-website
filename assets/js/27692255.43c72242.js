"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8734],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return y}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),y=a,m=d["".concat(o,".").concat(y)]||d[y]||c[y]||i;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4225:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),s=["components"],l={},o=void 0,u={unversionedId:"TS/\u9ad8\u7ea7TS",id:"TS/\u9ad8\u7ea7TS",isDocsHomePage:!1,title:"\u9ad8\u7ea7TS",description:"1",source:"@site/docs/TS/\u9ad8\u7ea7TS.md",sourceDirName:"TS",slug:"/TS/\u9ad8\u7ea7TS",permalink:"/my-website/docs/TS/\u9ad8\u7ea7TS",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/TS/\u9ad8\u7ea7TS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ts\u9762\u8bd5\u9898",permalink:"/my-website/docs/TS/ts\u9762\u8bd5\u9898"},next:{title:"\u57fa\u7840\u6982\u5ff5",permalink:"/my-website/docs/babel/\u57fa\u7840\u6982\u5ff5"}},p=[{value:"1",id:"1",children:[]},{value:"2",id:"2",children:[]},{value:"3 -4",id:"3--4",children:[]},{value:"5",id:"5",children:[]},{value:"6",id:"6",children:[]},{value:"7",id:"7",children:[]},{value:"8",id:"8",children:[]},{value:"9",id:"9",children:[]},{value:"10",id:"10",children:[]},{value:"11",id:"11",children:[]},{value:"12",id:"12",children:[]},{value:"13",id:"13",children:[]},{value:"14",id:"14",children:[]},{value:"15",id:"15",children:[]},{value:"16",id:"16",children:[]},{value:"17",id:"17",children:[]}],c={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1"},"1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TS"},"type User = {\n  id: number\n  kind: string\n}\n\nfunction makeCustomer<T extends User>(u: T): T {\n  // Error\uff08TS \u7f16\u8bd1\u5668\u7248\u672c\uff1av4.4.2\uff09\n  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.\n  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',\n  // but 'T' could be instantiated with a different subtype of constraint 'User'.\n  return {\n    // ...u,\n    id: u.id,\n    kind: 'customer',\n  }\n}\n// \u62a5\u9519\u7684\u539f\u56e0\u662f\uff1a\u56e0\u4e3a T \u53ea\u662f\u7ea6\u675f\u4e0e User \u7c7b\u578b\uff0c\u800c\u4e0d\u5c40\u9650\u4e8eUser \u7c7b\u578b\uff0c\u6240\u4ee5\u8fd4\u56de\u4e3aT\u7c7b\u578b\u4e0d\u4ec5\u4ec5\u53ea\u6709 id\u548ckind\uff0cSo\u9700\u8981\u4e00\u4e2a\u63a5\u6536\u5176\u4ed6\u7c7b\u578b\u7684\u53d8\u91cf\n")),(0,i.kt)("h2",{id:"2"},"2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"\u7b2c\u4e8c\u9898\n\u672c\u9053\u9898\u6211\u4eec\u5e0c\u671b\u53c2\u6570 a \u548c b \u7684\u7c7b\u578b\u90fd\u662f\u4e00\u81f4\u7684\uff0c\u5373 a \u548c b \u540c\u65f6\u4e3a number \u6216 string \u7c7b\u578b\u3002\u5f53\u5b83\u4eec\u7684\u7c7b\u578b\u4e0d\u4e00\u81f4\u7684\u503c\uff0cTS \u7c7b\u578b\u68c0\u67e5\u5668\u80fd\u81ea\u52a8\u63d0\u793a\u5bf9\u5e94\u7684\u9519\u8bef\u4fe1\u606f\u3002\n\nfunction f(a: string | number, b: string | number) {\n  if (typeof a === 'string') {\n    return a + ':' + b; // no error but b can be number!\n  } else {\n    return a + b; // error as b can be number | string\n  }\n}\n\nf(2, 3); // Ok\nf(1, 'a'); // Error\nf('a', 2); // Error\nf('a', 'b') // Ok\n\nfunction f(a: number, b: number): number\nfunction f(a: string, b: string): string\n// function f(a: number, b: string): string\n// function f(a: string, b: number): string\n\nfunction f(a: number | string, b: number | string) {\n  // \u7b54\u6848\u7ed9\u7684\u4ee3\u7801\n  // if (typeof a === 'string') {\n  //   return a + ':' + b\n  // } else {\n  //   return (a as number) + (b as number)\n  // }\n\n  // \u8fd9\u6837\u66f4\u76f4\u89c2\u4e00\u4e9b\n  if (typeof a === 'string' || typeof b === 'string') {\n    return a + ':' + b\n  } else {\n    return a + b\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u51fd\u6570\u91cd\u8f7d\uff1a",(0,i.kt)("strong",{parentName:"li"},"\u51fd\u6570\u91cd\u8f7d\u6216\u65b9\u6cd5\u91cd\u8f7d\u662f\u4f7f\u7528\u76f8\u540c\u540d\u79f0\u548c\u4e0d\u540c\u53c2\u6570\u6570\u91cf\u6216\u7c7b\u578b\u521b\u5efa\u591a\u4e2a\u65b9\u6cd5\u7684\u4e00\u79cd\u80fd\u529b\u3002"),"\u8981\u89e3\u51b3\u524d\u9762\u9047\u5230\u7684\u95ee\u9898\uff0c\u65b9\u6cd5\u5c31\u662f\u4e3a\u540c\u4e00\u4e2a\u51fd\u6570\u63d0\u4f9b\u591a\u4e2a\u51fd\u6570\u7c7b\u578b\u5b9a\u4e49\u6765\u8fdb\u884c\u51fd\u6570\u91cd\u8f7d\uff0c\u7f16\u8bd1\u5668\u4f1a\u6839\u636e\u8fd9\u4e2a\u5217\u8868\u53bb\u5904\u7406\u51fd\u6570\u7684\u8c03\u7528\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u91cd\u8f7d\uff1a\u65b9\u6cd5\u91cd\u8f7d\u662f\u6307\u5728\u540c\u4e00\u4e2a\u7c7b\u4e2d\u65b9\u6cd5\u540c\u540d\uff0c\u53c2\u6570\u4e0d\u540c\uff08\u53c2\u6570\u7c7b\u578b\u4e0d\u540c\u3001\u53c2\u6570\u4e2a\u6570\u4e0d\u540c\u6216\u53c2\u6570\u4e2a\u6570\u76f8\u540c\u65f6\u53c2\u6570\u7684\u5148\u540e\u987a\u5e8f\u4e0d\u540c\uff09\uff0c\u8c03\u7528\u65f6\u6839\u636e\u5b9e\u53c2\u7684\u5f62\u5f0f\uff0c\u9009\u62e9\u4e0e\u5b83\u5339\u914d\u7684\u65b9\u6cd5\u6267\u884c\u64cd\u4f5c\u7684\u4e00\u79cd\u6280\u672f")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53 TypeScript \u7f16\u8bd1\u5668\u5904\u7406\u51fd\u6570\u91cd\u8f7d\u65f6\uff0c\u5b83\u4f1a\u67e5\u627e\u91cd\u8f7d\u5217\u8868\uff0c\u5c1d\u8bd5\u4f7f\u7528\u7b2c\u4e00\u4e2a\u91cd\u8f7d\u5b9a\u4e49\u3002\u5982\u679c\u5339\u914d\u7684\u8bdd\u5c31\u4f7f\u7528\u8fd9\u4e2a\u3002\u56e0\u6b64\uff0c\u5728\u5b9a\u4e49\u91cd\u8f7d\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u8981\u628a\u6700\u7cbe\u786e\u7684\u5b9a\u4e49\u653e\u5728\u6700\u524d\u9762\u3002")),(0,i.kt)("h2",{id:"3--4"},"3 -4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TS"},"//\u652f\u6301\u6839\u636e\u6307\u5b9a\u7684 Condition \u6761\u4ef6\u6765\u751f\u6210\u65b0\u7684\u7c7b\u578b\ninterface Example {\n  a: string;\n  e: number;\n  b: string | number;\n  c: () => void;\n  d: {};\n  f: string | number | boolean;\n}\ntype ConditionalPick<V, T> = {\n  [K in keyof V as V[K] extends T ? K : never]: V[K];\n};\ntype StringKeysOnly = ConditionalPick<Example, string | number>;\n")),(0,i.kt)("h2",{id:"5"},"5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type AppendArgument<F extends (...args: any) => any, A> \n  = (x: A, ...args: Parameters<F>) => ReturnType<F> \n\ntype Fn = (a: number, b: string) => number\ntype FinalF = AppendArgument<Fn, boolean> \n// (x: boolean, a: number, b: string) => number\n")),(0,i.kt)("h2",{id:"6"},"6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TS"},"// \u5b9a\u4e49\u4e00\u4e2a NativeFlat \u5de5\u5177\u7c7b\u578b\uff0c\u652f\u6301\u628a\u6570\u7ec4\u7c7b\u578b\u62cd\u5e73\uff08\u6241\u5e73\u5316\uff09\ntype Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]]\ntype DeepFlat<T extends any[]> = {\n    [K in keyof T] : T[K] extends any[] ? DeepFlat<T[K]> : T[K]\n}[number]\ntype DeepTestResult = DeepFlat<Deep>\n// DeepTestResult: \"a\" | \"b\" | \"c\" | \"d\" | \"e\"\n")),(0,i.kt)("h2",{id:"7"},"7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"1.\u4f7f\u7528\u7c7b\u578b\u522b\u540d\u5b9a\u4e49\u4e00\u4e2a EmptyObject \u7c7b\u578b\uff0c\u4f7f\u5f97\u8be5\u7c7b\u578b\u53ea\u5141\u8bb8\u7a7a\u5bf9\u8c61\u8d4b\u503c\uff1a\ntype EmptyObject = {\n  // type PropertyKey = string | number | symbol\n  [K in PropertyKey]: never\n}\n\n// \u6d4b\u8bd5\u7528\u4f8b\nconst shouldPass: EmptyObject = {} // \u53ef\u4ee5\u6b63\u5e38\u8d4b\u503c\nconst shouldFail: EmptyObject = {\n  // \u5c06\u51fa\u73b0\u7f16\u8bd1\u9519\u8bef\n  prop: 'TS',\n}\n2.\u5728\u901a\u8fc7 EmptyObject \u7c7b\u578b\u7684\u6d4b\u8bd5\u7528\u4f8b\u68c0\u6d4b\u540e\uff0c\u6211\u4eec\u6765\u66f4\u6539\u4ee5\u4e0b takeSomeTypeOnly \u51fd\u6570\u7684\u7c7b\u578b\u5b9a\u4e49\uff0c\u8ba9\u5b83\u7684\u53c2\u6570\u53ea\u5141\u8bb8\u4e25\u683cSomeType\u7c7b\u578b\u7684\u503c\ntype SomeType = {\n  prop: string\n}\n\ntype Exclusive<T1, T2 extends T1> = {\n  [K in keyof T2]: K extends keyof T1 ? T2[K] : never\n}\n\n// \u66f4\u6539\u4ee5\u4e0b\u51fd\u6570\u7684\u7c7b\u578b\u5b9a\u4e49\uff0c\u8ba9\u5b83\u7684\u53c2\u6570\u53ea\u5141\u8bb8\u4e25\u683cSomeType\u7c7b\u578b\u7684\u503c\nfunction takeSomeTypeOnly<T extends SomeType>(x: Exclusive<SomeType, T>) {\n  return x\n}\n\n// \u6d4b\u8bd5\u7528\u4f8b\uff1a\nconst x = { prop: 'a' }\ntakeSomeTypeOnly(x) // \u53ef\u4ee5\u6b63\u5e38\u8c03\u7528\n\nconst y = { prop: 'a', addditionalProp: 'x' }\ntakeSomeTypeOnly(y) // \u5c06\u51fa\u73b0\u7f16\u8bd1\u9519\u8bef\n")),(0,i.kt)("h2",{id:"8"},"8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TS"},"// \u5b9a\u4e49 NonEmptyArray \u5de5\u5177\u7c7b\u578b\uff0c\u7528\u4e8e\u786e\u4fdd\u6570\u636e\u975e\u7a7a\u6570\u7ec4\u3002\n// 1\ntype NonEmptyArray<T> = [T,...T[]]\n// 2\ntype NonEmptyArray<T> =[ 0 : T ] & T[]\nconst a: NonEmptyArray<string> = [] // \u5c06\u51fa\u73b0\u7f16\u8bd1\u9519\u8bef\nconst b: NonEmptyArray<string> = ['Hello TS'] // \u975e\u7a7a\u6570\u636e\uff0c\u6b63\u5e38\u4f7f\u7528\n")),(0,i.kt)("h2",{id:"9"},"9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"//\u5b9a\u4e49\u4e00\u4e2a JoinStrArray \u5de5\u5177\u7c7b\u578b\uff0c\u7528\u4e8e\u6839\u636e\u6307\u5b9a\u7684 Separator \u5206\u9694\u7b26\uff0c\u5bf9\u5b57\u7b26\u4e32\u6570\u7ec4\u7c7b\u578b\u8fdb\u884c\u62fc\u63a5\u3002\ntype JoinStrArray<\n  Arr extends string[],\n   Separator extends string,\n > = Arr extends [infer A, ...infer B]\n   ? `${A extends string ? A : ''}${B extends [string, ...string[]]\n       ? `${Separator}${JoinStrArray<B, Separator>}`\n      : ''}`\n  : ''\n\ntype Names = ['Sem', 'Lolo', 'Kaquko']\ntype NamesComma = JoinStrArray<Names, ','> // \"Sem,Lolo,Kaquko\"\ntype NamesSpace = JoinStrArray<Names, ' '> // \"Sem Lolo Kaquko\"\ntype NamesStars = JoinStrArray<Names, '\u2b50\ufe0f'> // \"Sem\u2b50\ufe0fLolo\u2b50\ufe0fKaquko\"\n")),(0,i.kt)("h2",{id:"10"},"10"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TS"},"type TypeName<T> = T extends string\n  ? string\n  : T extends number\n  ? number\n  : T extends boolean\n  ? boolean\n  : T extends undefined\n  ? undefined\n  : T extends Function\n  ? Function\n  : object\nconst g: TypeName<string> = 1\n")),(0,i.kt)("h2",{id:"11"},"11"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TS"},"// \u5b9e\u73b0\u4e00\u4e2a IsEqual \u5de5\u5177\u7c7b\u578b\uff0c\u7528\u4e8e\u6bd4\u8f83\u4e24\u4e2a\u7c7b\u578b\u662f\u5426\u76f8\u7b49\ntype IsEqual<A, B> = A extends B ? (B extends A ? true : false) : false;\n\n// \u6d4b\u8bd5\u7528\u4f8b\ntype E0 = IsEqual<1, 2>; // false\ntype E1 = IsEqual<{ a: 1 }, { a: 1 }>; // true\ntype E2 = IsEqual<[1], []>; // false\ntype E3 = IsEqual<{ a: 1; b: 2 }, { a: 1 }>; // false\ntype E4 = IsEqual<{ a: 1 }, { a: 1; b: 2 }>; // false\n")),(0,i.kt)("h2",{id:"12"},"12"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5b9e\u73b0\u4e00\u4e2a Head \u5de5\u5177\u7c7b\u578b\uff0c\u7528\u4e8e\u83b7\u53d6\u6570\u7ec4\u7c7b\u578b\u7684\u7b2c\u4e00\u4e2a\u7c7b\u578b\ntype Head<T extends Array<any>> = T extends [] ? never : T[0];\n\n// \u6d4b\u8bd5\u7528\u4f8b\ntype H0 = Head<[]>; // never\ntype H1 = Head<[1]>; // 1\ntype H2 = Head<[3, 2]>; // 3\n")),(0,i.kt)("h2",{id:"13"},"13"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JS"},"// \u5b9e\u73b0\u4e00\u4e2a Tail \u5de5\u5177\u7c7b\u578b\uff0c\u7528\u4e8e\u83b7\u53d6\u6570\u7ec4\u7c7b\u578b\u9664\u4e86\u7b2c\u4e00\u4e2a\u7c7b\u578b\u5916\uff0c\u5269\u4f59\u7684\u7c7b\u578b\u3002\ntype Tail<T extends Array<any>> = T extends [infer A, ...infer B] ? B : [];\n// \u6d4b\u8bd5\u7528\u4f8b\ntype T0 = Tail<[]>; // []\ntype T1 = Tail<[1, 2]>; // [2]\ntype T2 = Tail<[1, 2, 3, 4, 5]>; // [2, 3, 4, 5]\n")),(0,i.kt)("h2",{id:"14"},"14"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JS"},"// \u5b9e\u73b0\u4e00\u4e2a Unshift \u5de5\u5177\u7c7b\u578b\uff0c\u7528\u4e8e\u628a\u6307\u5b9a\u7c7b\u578b E \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u5143\u7d20\u6dfb\u52a0\u5230 T \u6570\u7ec4\u7c7b\u578b\u4e2d\ntype Unshift<T extends any[], E> = [E, ...T];\n\n// \u6d4b\u8bd5\u7528\u4f8b\ntype Arr0 = Unshift<[], 1>; // [1]\ntype Arr1 = Unshift<[1, 2, 3], 0>; // [0, 1, 2, 3]\n")),(0,i.kt)("h2",{id:"15"},"15"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9e\u73b0\u4e00\u4e2a Shift \u5de5\u5177\u7c7b\u578b\uff0c\u7528\u4e8e\u79fb\u9664 T \u6570\u7ec4\u7c7b\u578b\u4e2d\u7684\u7b2c\u4e00\u4e2a\u7c7b\u578b\ntype Shift<T extends any[]> = T extends [infer A ,...infer B] ? B :[]\n\n// \u6d4b\u8bd5\u7528\u4f8b\ntype S0 = Shift<[1, 2, 3]> \ntype S1 = Shift<[string,number,boolean]> \n")),(0,i.kt)("h2",{id:"16"},"16"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9e\u73b0\u4e00\u4e2a Push \u5de5\u5177\u7c7b\u578b\uff0c\u7528\u4e8e\u628a\u6307\u5b9a\u7c7b\u578b E \u4f5c\u4e3a\u7b2c\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u6dfb\u52a0\u5230 T \u6570\u7ec4\u7c7b\u578b\u4e2d\ntype Push<T extends any[], V> = [...T, V];\n\n// \u6d4b\u8bd5\u7528\u4f8b\ntype Arr01 = Push<[], 1>; // [1]\ntype Arr12 = Push<[1, 2, 3], 4>; // [1, 2, 3, 4]\n")),(0,i.kt)("h2",{id:"17"},"17"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9e\u73b0\u4e00\u4e2a Includes \u5de5\u5177\u7c7b\u578b\uff0c\u7528\u4e8e\u5224\u65ad\u6307\u5b9a\u7684\u7c7b\u578b E \u662f\u5426\u5305\u542b\u5728 T \u6570\u7ec4\u7c7b\u578b\u4e2d\ntype Includes<T extends any[], U> = U extends T[number] ? true : false;\n\ntype I0 = Includes<[], 1>; // false\ntype I1 = Includes<[2, 2, 3, true], true>; // true\ntype I2 = Includes<[2, 3, 3, 1], 1>; // true\n")))}d.isMDXComponent=!0}}]);
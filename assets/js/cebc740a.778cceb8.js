"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[798],{4891:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),l=["components"],i={sidebar_position:1},o=void 0,u={unversionedId:"TS/ts\u57fa\u7840",id:"TS/ts\u57fa\u7840",isDocsHomePage:!1,title:"ts\u57fa\u7840",description:"\u6cdb\u578b",source:"@site/docs/TS/ts\u57fa\u7840.md",sourceDirName:"TS",slug:"/TS/ts\u57fa\u7840",permalink:"/my-website/docs/TS/ts\u57fa\u7840",editUrl:"https://github.com/Min-wys/my-website/edit/master/docs/TS/ts\u57fa\u7840.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"2",permalink:"/my-website/docs/JS\u57fa\u7840/2"},next:{title:"\u7c7b\u578b\u5b88\u536b",permalink:"/my-website/docs/TS/\u7c7b\u578b\u5b88\u536b"}},p=[{value:"\u6cdb\u578b",id:"\u6cdb\u578b",children:[]},{value:"\u6cdb\u578b\u57fa\u7840",id:"\u6cdb\u578b\u57fa\u7840",children:[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]},{value:"\u6cdb\u578b\u7ea6\u675f",id:"\u6cdb\u578b\u7ea6\u675f",children:[]},{value:"\u6cdb\u578b\u53c2\u6570\u7684\u9ed8\u8ba4\u7c7b\u578b",id:"\u6cdb\u578b\u53c2\u6570\u7684\u9ed8\u8ba4\u7c7b\u578b",children:[]}]},{value:"\u6cdb\u578b\u9ad8\u7ea7",id:"\u6cdb\u578b\u9ad8\u7ea7",children:[]}],c={toc:p};function d(n){var e=n.components,t=(0,a.Z)(n,l);return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u6cdb\u578b"},"\u6cdb\u578b"),(0,s.kt)("p",null,"\u6cdb\u578b\uff08Generics\uff09\u662f\u6307\u5728\u5b9a\u4e49\u51fd\u6570\u3001\u63a5\u53e3\u6216\u7c7b\u7684\u65f6\u5019\uff0c\u4e0d\u9884\u5148\u6307\u5b9a\u5177\u4f53\u7684\u7c7b\u578b\uff0c\u800c\u5728\u4f7f\u7528\u7684\u65f6\u5019\u518d\u6307\u5b9a\u7c7b\u578b\u7684\u4e00\u79cd\u7279\u6027\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u5728\u7c7b\u578b\u7f16\u7a0b\u91cc\uff0c\u6cdb\u578b\u5c31\u662f\u53d8\u91cf")),(0,s.kt)("h2",{id:"\u6cdb\u578b\u57fa\u7840"},"\u6cdb\u578b\u57fa\u7840"),(0,s.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,s.kt)("p",null,"\u200b\t\u6211\u4eec\u9700\u8981\u7684\u662f ",(0,s.kt)("strong",{parentName:"p"},"\u5165\u53c2\u4e0e\u8fd4\u56de\u503c\u7c7b\u578b\u76f8\u540c")," \u7684\u6548\u679c\t"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"function foo<T>(arg: T): T {\n  return arg;\n}\n")),(0,s.kt)("p",null,"\u200b\t\u6cdb\u578b\u5728\u7bad\u5934\u51fd\u6570\u4e0b\u7684\u4e66\u5199"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const foo = <T>(arg: T) => arg;\n")),(0,s.kt)("p",null,"\u200b\t\u5982\u679c\u4f60\u5728 TSX \u6587\u4ef6\u4e2d\u8fd9\u4e48\u5199\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"<T>"),"\u53ef\u80fd\u4f1a\u88ab\u8bc6\u522b\u4e3a JSX \u6807\u7b7e\uff0c\u56e0\u6b64\u9700\u8981\u663e\u5f0f\u544a\u77e5\u7f16\u8bd1\u5668"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const foo = <T extends SomeBasicType>(arg: T) => arg;\n// \u6211\u4eec\u4f7f\u7528\u4e86 extends \u7ea6\u675f\u4e86\u6cdb\u578b T \u5fc5\u987b\u7b26\u5408\u63a5\u53e3 SomeBasicType \u7684\u5f62\u72b6\n")),(0,s.kt)("p",null,"\u200b\t\u9664\u4e86\u7528\u5728\u51fd\u6570\u4e2d\uff0c\u6cdb\u578b\u4e5f\u53ef\u4ee5\u5728\u7c7b\u4e2d\u4f7f\u7528"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"class Foo<T, U> {\n  constructor(public arg1: T, public arg2: U) {}\n\n  public method(): T {\n    return this.arg1;\n  }\n}\n")),(0,s.kt)("p",null,"\u200b\t\u591a\u4e2a\u7c7b\u578b\u53c2\u6570"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"\nfunction swap<T, U>(tuple: [T, U]): [U, T] {\n  return [tuple[1], tuple[0]]\n}\n//\u662fts\u81ea\u5df1\u9690\u5f0f\u63a8\u65ad\u7684\nswap([7, 'seven']); // ['seven', 7]\n// \u4e0b\u9762\u662f\u663e\u793a\u5b9a\u4e49\nswap<number, string>([7, 'seven']) // ['seven', 7]\n")),(0,s.kt)("h3",{id:"\u6cdb\u578b\u7ea6\u675f"},"\u6cdb\u578b\u7ea6\u675f"),(0,s.kt)("p",null,"\u200b\t\u5728\u51fd\u6570\u5185\u90e8\u4f7f\u7528\u6cdb\u578b\u53d8\u91cf\u7684\u65f6\u5019\uff0c\u7531\u4e8e\u4e8b\u5148\u4e0d\u77e5\u9053\u5b83\u662f\u54ea\u79cd\u7c7b\u578b\uff0c\u6240\u4ee5\u4e0d\u80fd\u968f\u610f\u7684\u64cd\u4f5c\u5b83\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"function loggingIdentity<T>(arg: T): T {\n    console.log(arg.length);\n    return arg;\n}\n\n// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.\n// \u7c7b\u578b\u201cT\u201d\u4e0a\u4e0d\u5b58\u5728\u5c5e\u6027\u201clength\u201d\u3002\n")),(0,s.kt)("p",null,"\u200b\t\u4e0a\u4f8b\u4e2d\uff0c\u6cdb\u578b ",(0,s.kt)("inlineCode",{parentName:"p"},"T")," \u4e0d\u4e00\u5b9a\u5305\u542b\u5c5e\u6027 ",(0,s.kt)("inlineCode",{parentName:"p"},"length"),"\uff0c\u6240\u4ee5\u7f16\u8bd1\u7684\u65f6\u5019\u62a5\u9519\u4e86\u3002"),(0,s.kt)("p",null,"\u200b\t\u8fd9\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u6cdb\u578b\u8fdb\u884c\u7ea6\u675f\uff0c\u53ea\u5141\u8bb8\u8fd9\u4e2a\u51fd\u6570\u4f20\u5165\u90a3\u4e9b\u5305\u542b ",(0,s.kt)("inlineCode",{parentName:"p"},"length")," \u5c5e\u6027\u7684\u53d8\u91cf\u3002\u8fd9\u5c31\u662f\u6cdb\u578b\u7ea6\u675f\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface Lengthwise {\n    length: number;\n}\n\nfunction loggingIdentity<T extends Lengthwise>(arg: T): T {\n    console.log(arg.length);\n    return arg;\n}\n")),(0,s.kt)("h3",{id:"\u6cdb\u578b\u53c2\u6570\u7684\u9ed8\u8ba4\u7c7b\u578b"},"\u6cdb\u578b\u53c2\u6570\u7684\u9ed8\u8ba4\u7c7b\u578b"),(0,s.kt)("p",null,"\u200b\t\u5728 TypeScript 2.3 \u4ee5\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u6cdb\u578b\u4e2d\u7684\u7c7b\u578b\u53c2\u6570\u6307\u5b9a\u9ed8\u8ba4\u7c7b\u578b\u3002\u5f53\u4f7f\u7528\u6cdb\u578b\u65f6\u6ca1\u6709\u5728\u4ee3\u7801\u4e2d\u76f4\u63a5\u6307\u5b9a\u7c7b\u578b\u53c2\u6570\uff0c\u4ece\u5b9e\u9645\u503c\u53c2\u6570\u4e2d\u4e5f\u65e0\u6cd5\u63a8\u6d4b\u51fa\u65f6\uff0c\u8fd9\u4e2a\u9ed8\u8ba4\u7c7b\u578b\u5c31\u4f1a\u8d77\u4f5c\u7528\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"function createArray<T = string>(length: number, value: T): Array<T> {\n    let result: T[] = [];\n    for (let i = 0; i < length; i++) {\n        result[i] = value;\n    }\n    return result;\n}\n")),(0,s.kt)("h2",{id:"\u6cdb\u578b\u9ad8\u7ea7"},"\u6cdb\u578b\u9ad8\u7ea7"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface A {\n  a: boolean\n  b: string\n  c: number\n}\ntype isString<T> = {\n  [K in keyof T]: T[K]\n}\nconst a: isString<A> = {\n  a: true,\n  b: '1',\n  c: 1,\n}\n// \u5c06\u6240\u6709\u7c7b\u578b\u53d8\u6210\u53ef\u9009\u7684\ntype Partial<T> = {\n  // K\u5c31\u662f\u6bcf\u4e00\u4e2akey\u503c\uff0c keyof T \u5148\u751f\u6210\u8054\u5408\u7c7b\u578b\uff0c\u8054\u5408\u7c7b\u578b\u7136\u540e\u4f7f\u7528in\u8fdb\u884c\u904d\u5386\uff0cT[K]\u53d6\u5f97\u6bcf\u4e00\u4e2avalue\u503c\n  // ?:\u662f\u53d8\u6210\u53ef\u9009\u7684\n  [K in keyof T]?: T[K]\n}\nconst b: Partial<A> = {\n  a: true,\n  b: '1',\n}\ntype TypeName<T> = T extends string\n  ? string\n  : T extends number\n  ? number\n  : T extends boolean\n  ? boolean\n  : T extends undefined\n  ? undefined\n  : T extends Function\n  ? Function\n  : object\nconst g: TypeName<string> = 1\n")))}d.isMDXComponent=!0}}]);
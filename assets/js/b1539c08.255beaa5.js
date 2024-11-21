"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9544],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,y=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5240:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(8168),a=(t(6540),t(5680));const o={},s="\u624b\u5199XXX",l={unversionedId:"\u9762\u8bd5/\u624b\u5199\u4ee3\u7801",id:"\u9762\u8bd5/\u624b\u5199\u4ee3\u7801",isDocsHomePage:!1,title:"\u624b\u5199XXX",description:"\u624b\u5199iterator",source:"@site/docs/\u9762\u8bd5/6.\u624b\u5199\u4ee3\u7801.md",sourceDirName:"\u9762\u8bd5",slug:"/\u9762\u8bd5/\u624b\u5199\u4ee3\u7801",permalink:"/my-website/docs/\u9762\u8bd5/\u624b\u5199\u4ee3\u7801",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/\u9762\u8bd5/6.\u624b\u5199\u4ee3\u7801.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nodeJS",permalink:"/my-website/docs/\u9762\u8bd5/nodejs"},next:{title:"\u4ee3\u7801\u64cd\u4f5c",permalink:"/my-website/docs/\u9762\u8bd5/\u4ee3\u7801\u64cd\u4f5c"}},i=[{value:"\u624b\u5199iterator",id:"\u624b\u5199iterator",children:[]},{value:"\u4f7f\u7528extends\u4e66\u5199\u4e00\u4e2a\u7ee7\u627f",id:"\u4f7f\u7528extends\u4e66\u5199\u4e00\u4e2a\u7ee7\u627f",children:[]},{value:"new\u6784\u9020\u51fd\u6570",id:"new\u6784\u9020\u51fd\u6570",children:[]},{value:"\u5c01\u88c5\u4e00\u4e2aaxios",id:"\u5c01\u88c5\u4e00\u4e2aaxios",children:[]},{value:"1.Promise\u6784\u9020\u51fd\u6570",id:"1promise\u6784\u9020\u51fd\u6570",children:[]},{value:"2.then",id:"2then",children:[]},{value:"3.catch",id:"3catch",children:[]},{value:"4.resolve",id:"4resolve",children:[]},{value:"5.reject",id:"5reject",children:[]},{value:"6.all",id:"6all",children:[]},{value:"7allSettled",id:"7allsettled",children:[]}],c={toc:i},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u624b\u5199xxx"},"\u624b\u5199XXX"),(0,a.yg)("h2",{id:"\u624b\u5199iterator"},"\u624b\u5199iterator"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JS"},"Array.prototype.myIterator = function () {\n    let index = 0;\n    const _this = this; //\u4fdd\u5b58\u5f53\u524d\u7684this\u6307\u5411\uff0c\u7528\u6765\u5728\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\n    return {\n        next: function () {\n            if (index < _this.length) {\n                return {\n                    value: _this[index++],\n                    done: false\n                }\n            } else {\n                return {\n                    value: undefined,\n                    done: true\n                }\n            }\n        }\n    }\n}\n")),(0,a.yg)("h2",{id:"\u4f7f\u7528extends\u4e66\u5199\u4e00\u4e2a\u7ee7\u627f"},"\u4f7f\u7528extends\u4e66\u5199\u4e00\u4e2a\u7ee7\u627f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JS"},"class Person {\n    constructor(name) {\n        this.name = name;\n    }\n    eat() {}\n}\nclass Student extends Person {\n    constructor(name, age) {\n        super(name);\n        this.age = age;\n    }\n    study() {}\n}\n")),(0,a.yg)("h2",{id:"new\u6784\u9020\u51fd\u6570"},"new\u6784\u9020\u51fd\u6570"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JS"}," //\u624b\u5199new\nfunction writeNew(constr) {\n    //\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\n    var o = {};\n    //\u628a\u6784\u9020\u51fd\u6570\u7684this\u6307\u5411\u5f53\u524d\u7684\u5bf9\u8c61o  \u5e76\u4e14\u5411\u8c03\u7528\u6784\u9020\u51fd\u6570\u5e76\u4f20\u5165\u53c2\u6570 \u8fd4\u56de\u503c\u5c31\u662fA\u51fd\u6570\u7684\u8fd4\u56de\u503c\n    var result = constr.apply(o, Array.prototype.slice.call(arguments, 1));\n    //\u628a\u81ea\u5b9a\u4e49\u5bf9\u8c61\u7684\u9690\u5f0f\u539f\u578b\u6307\u5411\u6784\u9020\u51fd\u6570\u7684\u663e\u5f0f\u539f\u578b\n    o.__proto__ = constr.prototype;\n    //\u5224\u65ad\u6784\u9020\u51fd\u6570\u7684\u8fd4\u56de\u503c\u662f\u57fa\u7840\u503c \u8fd8\u662f\u5bf9\u8c61\n    var isObj = typeof result === 'object' && typeof result != null;\n    var isFun = typeof result === 'function';\n    //\u6839\u636e\u6784\u9020\u51fd\u6570\u7684\u8fd4\u56de\u503c \u8bbe\u7f6enew\u7684\u8fd4\u56de\u503c\n    return (isObj || isFun) ? result : o;\n}\n")),(0,a.yg)("h2",{id:"\u5c01\u88c5\u4e00\u4e2aaxios"},"\u5c01\u88c5\u4e00\u4e2aaxios"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JS"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n\n<body>\n    <button id="btn01">GET</button>\n    <button id="btn02">POST</button>\n    <script>\n        /* \n            \u5c01\u88c5\u4e00\u4e2aaxios\n                1.\u53c2\u6570:\u662f\u4e00\u4e2a\u5bf9\u8c61\n                2.\u8fd4\u56de\u503c\u662f\u4e00\u4e2apromise\u5bf9\u8c61\n                3.\u5148\u521b\u5efa\u4e00\u4e2axhr\u5bf9\u8c61\n                    3.1\u5904\u7406method\u5927\u5c0f\u5199\u7684\u95ee\u9898\n                4.\u7ed1\u5b9aonreadystatechange\u4e8b\u4ef6\n                    2.1 \u5728\u8bf7\u6c42\u6570\u636e\u6210\u529f\u65f6\u548cxhr.readyState ===4 \u65f6\u8fd4\u56de\u6210\u529f\u7684promise\u5bf9\u8c61\n                    2.2 \u5728xhr.readyState ===4\u548c\u6ca1\u6709\u8bf7\u6c42\u6570\u636e\u6210\u529f\u65f6\uff0c\u8fd4\u56de\u4e00\u4e2a\u5931\u8d25\u7684promise\u5bf9\u8c61G\n                5.\u8bbe\u7f6e\u8bf7\u6c42\u4fe1\u606f\n                    5.1 \u5982\u679c\u4f20\u9012\u4e86params\uff0c\u5bf9\u5b83\u8fdb\u884c\u5904\u7406\uff0c\u5904\u7406\u6210\uff1fname = "123"&age =18 \u7684\u5f62\u5f0f\uff0c\u62fc\u63a5\u5728url\u5730\u5740\u7684\u540e\u9762\n                6.\u53d1\u9001\u8bf7\u6c42\n                    6.1 \u5224\u65ad\u662f\u4e0d\u662fPOST PUT PATCH\u65b9\u5f0f\u8bf7\u6c42\n                    6.2\u5c06\u4f20\u9012\u7684\u6570\u636e\u8f6c\u6362\u4e3aJSON\u7684\u683c\u5f0f\n         */\n\n        function myAxios({ method, url, data, params }) {\n\n            return new Promise((resolve, reject) => {\n                // 1.\u5148\u521b\u5efa\u4e00\u4e2axhr\u5bf9\u8c61\n                const xhr = new XMLHttpRequest();\n                // \u5904\u7406method\u7684\u5927\u5c0f\u5199\u7684\u95ee\u9898\n                method = method.toUpperCase();\n                // 2.\u7ed1\u5b9aonreadystatechange\u4e8b\u4ef6\n                xhr.onreadystatechange = function () {\n                    if (xhr.readyState === 4) {\n                        if (199 < xhr.status < 300) {\n                            const response = {\n                                request: xhr,\n                                status: xhr.status,\n                                data: JSON.parse(xhr.responseText),\n                            };\n                            resolve(response);\n                        } else {\n                            reject("err")\n                        }\n                    }\n                }\n                // \u5982\u679cparams\u4e5f\u4f20\u9012\u8fdb\u6765\uff0c\u5bf9\u5b83\u8fdb\u884c\u5904\u7406,params\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8981\u5c06\u4ed6\u8f6c\u6362\u6210  ?name="xiaoli"&age=18\u7684\u683c\u5f0f\uff0c\u62fc\u63a5\u5728\u5730\u5740\u4e0a\uff0c\u4e0d\u9700\u8981\u5224\u65ad\u662f\u4ec0\u4e48\u8bf7\u6c42\n                let queryString = ""\n                if (params) {\n                    queryString = Object.keys(params).reduce((p, i) => {\n                        return p + `${i}=${params[i]}&`\n                    }, \'?\').slice(0, -1)\n                }\n                // 3.\u8bbe\u7f6e\u8bf7\u6c42\u4fe1\u606f\n                xhr.open(method, url + queryString)\n                // \u5224\u65ad\u662f\u4ec0\u4e48\u662f\u4ec0\u4e48\u8bf7\u6c42\u65b9\u5f0f,\u662fPOST\u8bf7\u6c42\u7684\u8bdd\uff0c\u8981\u5904\u7406\u6570\u636e\uff0c\u5c06\u6570\u636e\u8f6c\u6362\u6210JSON\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\n                let body = ""\n                if ((method === "POST" || method === "PUT" || method === "PATCH") && data) {\n                    xhr.setRequestHeader("content-type", "application/json")\n                    body = JSON.stringify(data)\n                }\n                // 4.\u53d1\u9001\u8bf7\u6c42\n                xhr.send(body)\n            })\n        }\n        const btn01 = document.getElementById(\'btn01\');\n        const btn02 = document.getElementById(\'btn02\');\n        btn01.onclick = function () {\n            myAxios({\n                method: "GET",\n                url: "http://localhost:3000/comments"\n            }).then((value) => {\n                console.log(value);\n            })\n        }\n        btn02.onclick = function () {\n            myAxios({\n                method: "POST",\n                url: "http://localhost:3000/comments",\n                data: {\n                    body: "wys",\n                    postId: 2,\n                }\n            }).then((value) => {\n                console.log(value);\n            })\n        }\n\n    <\/script>\n</body>\n\n</html>\n')),(0,a.yg)("h2",{id:"1promise\u6784\u9020\u51fd\u6570"},"1.Promise\u6784\u9020\u51fd\u6570"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JS"},'  function myPromise(exec) {\n    const that = this;\n    that._status = "pending";\n    that._value = undefined;\n    // d\u5b9a\u4e49\u4e00\u4e2a\u5bb9\u5668\u7528\u6765\u5b58\u653e\uff0cthen\u65b9\u6cd5\u7684\u56de\u8c03,\u5f53promise\u5bf9\u8c61\u4e2d\u8c03\u7528\u4e86resolve\u548creject\u65b9\u6cd5\u540e\uff0cthen\u65b9\u6cd5\u7684\u56de\u8c03\u51fd\u6570\u624d\u4f1a\u8c03\u7528\uff0c\u5e76\u4e14\u5f02\u6b65\u8c03\u7528\n    that._callBack = {};\n    // \u8bbe\u7f6eresolve\u51fd\u6570\n    function resolve(value) {\n      // \u72b6\u6001\u503c\u53ea\u4f1a\u8be5\u6539\u53d8\u4e00\u6b21\uff0c\u8fd9\u5c31\u610f\u5473\u7740\uff0c\u72b6\u6001\u53ea\u80fd\u662f\u4ecepending\u5f00\u59cb\u7684\n      if (that._status !== "pending") return;\n      that._status = "resolved";\n      that._value = value;\n      setTimeout(() => {\n        that._callBack.onResolved?.(value);\n      });\n    }\n\n    function reject(reason) {\n      // \u72b6\u6001\u503c\u53ea\u4f1a\u8be5\u6539\u53d8\u4e00\u6b21\uff0c\u8fd9\u5c31\u610f\u5473\u7740\uff0c\u72b6\u6001\u53ea\u80fd\u662f\u4ecepending\u5f00\u59cb\u7684\n      if (that._status !== "pending") return;\n      that._status = "rejected";\n      that._value = reason;\n      setTimeout(() => {\n        that._callBack.onRejected?.(reason);\n      });\n    }\n    exec(resolve, reject);\n  }\n')),(0,a.yg)("h2",{id:"2then"},"2.then"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JS"},'  myPromise.prototype.then = function (onResolved, onRejected) {\n    //\u8981\u5c06\u6b63\u786e\u7684\u4f20\u9012\u4e0b\u53bb\n    onResolved =\n      typeof onResolved === "function" ? onResolved : (value) => value;\n    //\u5c06\u9519\u8bef\u7684\u4f20\u9012\u4e0b\u53bb\n    onRejected =\n      typeof onRejected === "function"\n        ? onRejected\n        : (reason) => {\n            throw reason;\n          };\n    const that = this;\n    // \u94fe\u5f0f\u8c03\u7528\uff0c\u8fd4\u56dePromise\u5bf9\u8c61\n    // \u8fd4\u56de\u7684Promise\u5bf9\u8c61\u7684\u72b6\u6001\uff0c\u662f\u7531then\u65b9\u6cd5\u7684\u56de\u8c03\u7684\u51fd\u6570\u7684\u8fd4\u56de\u503c\u51b3\u5b9a\u7684\n    return new myPromise((resolve, reject) => {\n      // \u53c8\u5957\u4e86\u4e00\u5c42\u51fd\u6570\uff0c\u662f\u4e3a\u4e86\u83b7\u53d6\u5230then\u65b9\u6cd5\u56de\u8c03\u7684\u8fd4\u56de\u503c\n      that._callBack.onResolved = function (value) {\n        try {\n          const res = onResolved(value);\n          if (res instanceof myPromise) {\n            // then\u65b9\u6cd5\u7684\u56de\u8c03\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2aPromise\u5bf9\u8c61\uff0c\u90a3\u4e48then\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u662f\u548c\u56de\u8c03\u7684Promise\u662f\u76f8\u540c\u7684\uff0c\u5931\u8d25\u8c03\u5931\u8d25\uff0c\u6210\u529f\u8c03\u6210\u529f\n            res.then(resolve, reject);\n          } else {\n            // \u5176\u4f59\u8fd4\u56de\u6210\u529f\u7684  res\u662f\u56de\u8c03\u7684\u8fd4\u56de\u503c\uff0c\u8fd9\u91ccres\u7684\u503c\u53ef\u80fd\u662f11\n            resolve(res);\n          }\n        } catch (e) {\n          reject(e);\n        }\n      };\n      that._callBack.onRejected = function (reason) {\n        try {\n          const res = onRejected(reason);\n          if (res instanceof myPromise) {\n            // then\u65b9\u6cd5\u7684\u56de\u8c03\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2aPromise\u5bf9\u8c61\uff0c\u90a3\u4e48then\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u662f\u548c\u56de\u8c03\u7684Promise\u662f\u76f8\u540c\u7684\uff0c\u5931\u8d25\u8c03\u5931\u8d25\uff0c\u6210\u529f\u8c03\u6210\u529f\n            res.then(resolve, reject);\n          } else {\n            // \u5176\u4f59\u8fd4\u56de\u6210\u529f\u7684  res\u662f\u56de\u8c03\u7684\u8fd4\u56de\u503c\uff0c\u8fd9\u91ccres\u7684\u503c\u53ef\u80fd\u662f11\n            resolve(res);\n          }\n        } catch (e) {\n          reject(e);\n        }\n      };\n    });\n  };\n')),(0,a.yg)("h2",{id:"3catch"},"3.catch"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JS"}," myPromise.prototype.catch = function (onRejected) {\n    return this.then(undefined, onRejected);\n  };\n")),(0,a.yg)("h2",{id:"4resolve"},"4.resolve"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JS"}," myPromise.resolve = function (value) {\n    if (value instanceof myPromise) {\n      return value;\n    } else {\n      return new myPromise((resolve) => resolve());\n    }\n  };\n")),(0,a.yg)("h2",{id:"5reject"},"5.reject"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JS"},"myPromise.reject = function (reason) {\n    return new myPromise((resolve, reject) => {\n      reject(reason);\n    });\n  };\n")),(0,a.yg)("h2",{id:"6all"},"6.all"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JS"},"  myPromise.all = function (arr) {\n    return new myPromise((resolve, reject) => {\n      const valueArr = [];\n      let count = 0;\n      arr.forEach((item, index) => {\n        if (item instanceof myPromise) {\n          item.then((value) => {\n            returnValue(index, value);\n          }, reject);\n        } else {\n          returnValue(index, item);\n        }\n      });\n      function returnValue(index, value) {\n        valueArr[index] = value;\n        count++;\n        if (arr.length === count) {\n          resolve(valueArr);\n        }\n      }\n    });\n  };\n")),(0,a.yg)("h2",{id:"7allsettled"},"7allSettled"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JS"},' myPromise.allSettled = function (arr) {\n    const valueArr = [];\n    let count = 0;\n    return new myPromise((resolve, reject) => {\n      arr.forEach((item, index) => {\n        if (item instanceof myPromise) {\n          item.then(\n            (value) => {\n              count++;\n              arr[index] = {\n                status: "resolved",\n                value,\n              };\n              if (count === arr.length) {\n                resolve(arr);\n              }\n            },\n            (reason) => {\n              count++;\n              arr[index] = {\n                status: "resolved",\n                reason,\n              };\n              if (count === arr.length) {\n                resolve(arr);\n              }\n            }\n          );\n        } else {\n          count++;\n          arr[index] = {\n            status: "rejected",\n            value:item,\n          };\n          if (count === arr.length) {\n            resolve(arr);\n          }\n        }\n      });\n    });\n  };\n')),(0,a.yg)("h2",{id:""}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"})))}d.isMDXComponent=!0}}]);
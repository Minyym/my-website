"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4269],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>d});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},g=Object.keys(e);for(n=0;n<g.length;n++)r=g[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(n=0;n<g.length;n++)r=g[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,g=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||g;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var g=r.length,o=new Array(g);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<g;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1704:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>g,metadata:()=>a,toc:()=>c});var n=r(8168),i=(r(6540),r(5680));const g={},o=void 0,a={unversionedId:"skills/zsh git\u7f29\u5199\u8868",id:"skills/zsh git\u7f29\u5199\u8868",isDocsHomePage:!1,title:"zsh git\u7f29\u5199\u8868",description:"`TS",source:"@site/docs/skills/zsh git\u7f29\u5199\u8868.md",sourceDirName:"skills",slug:"/skills/zsh git\u7f29\u5199\u8868",permalink:"/my-website/docs/skills/zsh git\u7f29\u5199\u8868",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/skills/zsh git\u7f29\u5199\u8868.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"window",permalink:"/my-website/docs/skills/window"},next:{title:"\u672a\u5206\u7c7b",permalink:"/my-website/docs/skills/\u672a\u5206\u7c7b"}},c=[],s={toc:c},l="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(l,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-TS"},'g - git\ngst - git status\ngl - git pull\ngup - git pull --rebase\ngp - git push\ngd - git diff\ngdc - git diff --cached\ngdv - git diff -w "$@" | view\ngc - git commit -v\ngc! - git commit -v --amend\ngca - git commit -v -a\ngca! - git commit -v -a --amend\ngcmsg - git commit -m\ngco - git checkout\ngcm - git checkout master\ngr - git remote\ngrv - git remote -v\ngrmv - git remote rename\ngrrm - git remote remove\ngsetr - git remote set-url\ngrup - git remote update\ngrbi - git rebase -i\ngrbc - git rebase --continue\ngrba - git rebase --abort\ngb - git branch\ngba - git branch -a\ngcount - git shortlog -sn\ngcl - git config --list\ngcp - git cherry-pick\nglg - git log --stat --max-count=10\nglgg - git log --graph --max-count=10\nglgga - git log --graph --decorate --all\nglo - git log --oneline --decorate --color\nglog - git log --oneline --decorate --color --graph\ngss - git status -s\nga - git add\ngm - git merge\ngrh - git reset HEAD\ngrhh - git reset HEAD --hard\ngclean - git reset --hard && git clean -dfx\ngwc - git whatchanged -p --abbrev-commit --pretty=medium\ngsts - git stash show --text\ngsta - git stash\ngstp - git stash pop\ngstd - git stash drop\nggpull - git pull origin $(current_branch)\nggpur - git pull --rebase origin $(current_branch)\nggpush - git push origin $(current_branch)\nggpnp - git pull origin $(current_branch) && git push origin $(current_branch)\nglp - _git_log_prettily\n')))}p.isMDXComponent=!0}}]);
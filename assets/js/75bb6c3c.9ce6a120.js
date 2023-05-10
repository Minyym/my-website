"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7553],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>d});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},g=Object.keys(t);for(n=0;n<g.length;n++)r=g[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(t);for(n=0;n<g.length;n++)r=g[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,g=t.originalType,c=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),p=s(r),m=i,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||g;return r?n.createElement(d,o(o({ref:e},l),{},{components:r})):n.createElement(d,o({ref:e},l))}));function d(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var g=r.length,o=new Array(g);o[0]=m;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[p]="string"==typeof t?t:i,o[1]=a;for(var s=2;s<g;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3364:(t,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>o,default:()=>p,frontMatter:()=>g,metadata:()=>a,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const g={},o=void 0,a={unversionedId:"\u672a\u5206\u7c7b/zsh git\u7f29\u5199\u8868",id:"\u672a\u5206\u7c7b/zsh git\u7f29\u5199\u8868",isDocsHomePage:!1,title:"zsh git\u7f29\u5199\u8868",description:"`TS",source:"@site/docs/\u672a\u5206\u7c7b/zsh git\u7f29\u5199\u8868.md",sourceDirName:"\u672a\u5206\u7c7b",slug:"/\u672a\u5206\u7c7b/zsh git\u7f29\u5199\u8868",permalink:"/my-website/docs/\u672a\u5206\u7c7b/zsh git\u7f29\u5199\u8868",editUrl:"https://github.com/Minyym/my-website/edit/master/docs/\u672a\u5206\u7c7b/zsh git\u7f29\u5199\u8868.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"window",permalink:"/my-website/docs/\u672a\u5206\u7c7b/window"},next:{title:"\u672a\u5206\u7c7b",permalink:"/my-website/docs/\u672a\u5206\u7c7b/\u672a\u5206\u7c7b"}},c=[],s={toc:c},l="wrapper";function p(t){let{components:e,...r}=t;return(0,i.kt)(l,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TS"},'g - git\ngst - git status\ngl - git pull\ngup - git pull --rebase\ngp - git push\ngd - git diff\ngdc - git diff --cached\ngdv - git diff -w "$@" | view\ngc - git commit -v\ngc! - git commit -v --amend\ngca - git commit -v -a\ngca! - git commit -v -a --amend\ngcmsg - git commit -m\ngco - git checkout\ngcm - git checkout master\ngr - git remote\ngrv - git remote -v\ngrmv - git remote rename\ngrrm - git remote remove\ngsetr - git remote set-url\ngrup - git remote update\ngrbi - git rebase -i\ngrbc - git rebase --continue\ngrba - git rebase --abort\ngb - git branch\ngba - git branch -a\ngcount - git shortlog -sn\ngcl - git config --list\ngcp - git cherry-pick\nglg - git log --stat --max-count=10\nglgg - git log --graph --max-count=10\nglgga - git log --graph --decorate --all\nglo - git log --oneline --decorate --color\nglog - git log --oneline --decorate --color --graph\ngss - git status -s\nga - git add\ngm - git merge\ngrh - git reset HEAD\ngrhh - git reset HEAD --hard\ngclean - git reset --hard && git clean -dfx\ngwc - git whatchanged -p --abbrev-commit --pretty=medium\ngsts - git stash show --text\ngsta - git stash\ngstp - git stash pop\ngstd - git stash drop\nggpull - git pull origin $(current_branch)\nggpur - git pull --rebase origin $(current_branch)\nggpush - git push origin $(current_branch)\nggpnp - git pull origin $(current_branch) && git push origin $(current_branch)\nglp - _git_log_prettily\n')))}p.isMDXComponent=!0}}]);
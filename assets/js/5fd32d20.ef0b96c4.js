"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[342],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3135:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"Builds"},l=void 0,c={unversionedId:"learn/builds",id:"learn/builds",isDocsHomePage:!1,title:"Builds",description:"One of the challenges of using a JAMStack frontend is having to run a build after every content update. Some frameworks are prone to long builds times, which can be very frustrating!",source:"@site/docs/learn/builds.md",sourceDirName:"learn",slug:"/learn/builds",permalink:"/nextjs-wordpress-starter/docs/learn/builds",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/canary/docs/learn/builds.md",tags:[],version:"current",lastUpdatedBy:"Greg Rickaby",lastUpdatedAt:1640318313,formattedLastUpdatedAt:"12/24/2021",frontMatter:{title:"Builds"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/nextjs-wordpress-starter/docs/storybook/index"},next:{title:"Comments",permalink:"/nextjs-wordpress-starter/docs/learn/comments"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the challenges of using a JAMStack frontend is having to run a build after every content update. Some frameworks are prone to long builds times, which can be very frustrating!"),(0,a.kt)("p",null,"Our starter solves this challenge, by leveraging Incremental Static Regeneration. This is a powerful feature ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration"},"baked into Next.js"),". Incremental Static Regeneration allows the frontend to dynamically update pages by re-rendering them in the background."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The bottom line:")," you can publish and update content in WordPress (just like with a traditional theme) and those updates will display on the frontend ",(0,a.kt)("em",{parentName:"p"},"almost instantly!")))}d.isMDXComponent=!0}}]);
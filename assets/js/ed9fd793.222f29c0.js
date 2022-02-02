"use strict";(self.webpackChunk_webdevstudios_docs=self.webpackChunk_webdevstudios_docs||[]).push([[117],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5228:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"Algolia"},s=void 0,c={unversionedId:"backend/algolia",id:"backend/algolia",title:"Algolia",description:"This document will explain how to enable Algolia with the Next.js Wordpress Starter.",source:"@site/docs/backend/algolia.md",sourceDirName:"backend",slug:"/backend/algolia",permalink:"/nextjs-wordpress-starter/docs/backend/algolia",editUrl:"https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/canary/docs/backend/algolia.md",tags:[],version:"current",lastUpdatedBy:"Greg Rickaby",lastUpdatedAt:1643763266,formattedLastUpdatedAt:"2/2/2022",frontMatter:{title:"Algolia"},sidebar:"tutorialSidebar",previous:{title:"wp-config.php",permalink:"/nextjs-wordpress-starter/docs/backend/wp-config"},next:{title:"Comments",permalink:"/nextjs-wordpress-starter/docs/backend/comments"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Backend Setup",id:"backend-setup",children:[{value:"Create an account with Algolia",id:"create-an-account-with-algolia",children:[],level:3},{value:"Configure credentials",id:"configure-credentials",children:[],level:3},{value:"Push Content to Algolia",id:"push-content-to-algolia",children:[],level:3}],level:2},{value:"Frontend Setup",id:"frontend-setup",children:[{value:"API Connection",id:"api-connection",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document will explain how to enable Algolia with the Next.js Wordpress Starter."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"You will need to have the following WordPress plugins installed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.algolia.com/"},"An account with Algolia")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wordpress.org/plugins/wp-search-with-algolia/"},"WP Search with Algolia")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://packagist.org/packages/webdevstudios/wds-headless-algolia"},"WDS Headless Algolia"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"These plugins should have been installed when you ran ",(0,l.kt)("inlineCode",{parentName:"p"},"composer install")," during the initial ",(0,l.kt)("a",{parentName:"p",href:"/docs/backend#step-2-install-theme-and-plugins"},"Backend Setup"),".")),(0,l.kt)("h2",{id:"backend-setup"},"Backend Setup"),(0,l.kt)("h3",{id:"create-an-account-with-algolia"},"Create an account with Algolia"),(0,l.kt)("p",null,"Before you can complete this step, you need to sign-up for a free account at ",(0,l.kt)("a",{parentName:"p",href:"https://www.algolia.com/"},"Algolia.com"),"."),(0,l.kt)("p",null,'After you sign up for an account, create a new "app" and then click on "API Keys".'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"screenshot",src:n(9143).Z})),(0,l.kt)("h3",{id:"configure-credentials"},"Configure credentials"),(0,l.kt)("p",null,"Copy your API keys into the WP Search with Algolia Settings Page:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Algolia Search --\x3e Settings")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"screenshot",src:n(6201).Z})),(0,l.kt)("p",null,"You can name the ",(0,l.kt)("em",{parentName:"p"},"Index name prefix")," to whatever you'd like."),(0,l.kt)("h3",{id:"push-content-to-algolia"},"Push Content to Algolia"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"Algolia Search --\x3e Search Page")),(0,l.kt)("li",{parentName:"ol"},"Click the blue button to ",(0,l.kt)("inlineCode",{parentName:"li"},'"Re-index search page records"'))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"screenshot",src:n(6201).Z})),(0,l.kt)("h2",{id:"frontend-setup"},"Frontend Setup"),(0,l.kt)("h3",{id:"api-connection"},"API Connection"),(0,l.kt)("p",null,"Algolia integration relies on three ",(0,l.kt)("a",{parentName:"p",href:"/docs/frontend/env-variables"},"ENV Vars")," to populate required Algolia variables. These variables are required to access and maintain the connection to Algolia."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Index Name"),": This is the full name of the index to search and pull records from."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Application ID"),": This is your unique application identifier. It's used to identify you when using Algolia's API."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.algolia.com/doc/guides/security/api-keys/#search-only-api-key"},(0,l.kt)("strong",{parentName:"a"},"Search Only Key")),": This is the public API key to use in your frontend code. This key is only usable for search queries and sending data to the Insights API.")),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},"Application ID")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Search Only Key")," can be found under ",(0,l.kt)("inlineCode",{parentName:"p"},"Dashboard > API Keys")," in your Algolia account."),(0,l.kt)("p",null,"Once successfully connected, both site search and search results will be populated from your Algolia indice."))}d.isMDXComponent=!0},6201:function(e,t,n){t.Z=n.p+"assets/images/screenshot-set-algolia-creds-80713b7610b0837c3d8d7b3d4f8b43f4.png"},9143:function(e,t,n){t.Z=n.p+"assets/images/screenshot-setup-algolia-account-be5a27f8b88e2b207d332e5f5726400e.png"}}]);
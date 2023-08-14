"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[57580],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,u=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),m=l(n),p=i,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||u;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var u=n.length,o=new Array(u);o[0]=p;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[m]="string"==typeof t?t:i,o[1]=a;for(var l=2;l<u;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93632:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(87462),i=n(63366),u=(n(67294),n(3905)),o=["components"],a={id:"cumulus_distribution_migration",title:"Migrate from TEA deployment to Cumulus Distribution",hide_title:!1},s=void 0,l={unversionedId:"upgrade-notes/cumulus_distribution_migration",id:"version-v17.0.0/upgrade-notes/cumulus_distribution_migration",title:"Migrate from TEA deployment to Cumulus Distribution",description:"Background",source:"@site/versioned_docs/version-v17.0.0/upgrade-notes/cumulus-distribution.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/cumulus_distribution_migration",permalink:"/cumulus/docs/upgrade-notes/cumulus_distribution_migration",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1692022753,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{id:"cumulus_distribution_migration",title:"Migrate from TEA deployment to Cumulus Distribution",hide_title:!1},sidebar:"docs",previous:{title:"Upgrade to RDS release",permalink:"/cumulus/docs/upgrade-notes/upgrade-rds"},next:{title:"Updates to task granule file schemas",permalink:"/cumulus/docs/upgrade-notes/update-task-file-schemas"}},c={},m=[{value:"Background",id:"background",level:2},{value:"Configuring a Cumulus Distribution deployment",id:"configuring-a-cumulus-distribution-deployment",level:2},{value:"Important note if migrating from TEA to Cumulus Distribution",id:"important-note-if-migrating-from-tea-to-cumulus-distribution",level:2}],d={toc:m},p="wrapper";function f(t){var e=t.components,n=(0,i.Z)(t,o);return(0,u.kt)(p,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"background"},"Background"),(0,u.kt)("p",null,"The Cumulus Distribution API is configured to use the AWS Cognito OAuth client. This API can be used instead of the Thin Egress App, which is the default distribution API if using the ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy"},"Deployment Template"),"."),(0,u.kt)("h2",{id:"configuring-a-cumulus-distribution-deployment"},"Configuring a Cumulus Distribution deployment"),(0,u.kt)("p",null,"See ",(0,u.kt)("a",{parentName:"p",href:"/cumulus/docs/deployment/cumulus_distribution"},"these instructions")," for deploying the Cumulus Distribution API."),(0,u.kt)("h2",{id:"important-note-if-migrating-from-tea-to-cumulus-distribution"},"Important note if migrating from TEA to Cumulus Distribution"),(0,u.kt)("p",null,"If you already have a deployment using the TEA distribution and want to switch to Cumulus Distribution, there will be an API Gateway change. This means that there will be downtime while you update your CloudFront endpoint to use\nthe new API gateway."))}f.isMDXComponent=!0}}]);
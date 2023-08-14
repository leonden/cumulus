"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[31254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"tracking-files",title:"Tracking Ancillary Files",hide_title:!1},d=void 0,p={unversionedId:"data-cookbooks/tracking-files",id:"version-v17.0.0/data-cookbooks/tracking-files",title:"Tracking Ancillary Files",description:"Contents",source:"@site/versioned_docs/version-v17.0.0/data-cookbooks/tracking-files.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/tracking-files",permalink:"/cumulus/docs/data-cookbooks/tracking-files",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1692022753,formattedLastUpdatedAt:"Aug 14, 2023",frontMatter:{id:"tracking-files",title:"Tracking Ancillary Files",hide_title:!1},sidebar:"docs",previous:{title:"Ingest Browse Generation",permalink:"/cumulus/docs/data-cookbooks/browse-generation"},next:{title:"Run Step Function Tasks in AWS Lambda or Docker",permalink:"/cumulus/docs/data-cookbooks/run-tasks-in-lambda-or-docker"}},s={},m=[{value:"Contents",id:"contents",level:2},{value:"Introduction",id:"introduction",level:3},{value:"File types",id:"file-types",level:3},{value:"File Type Configuration",id:"file-type-configuration",level:3},{value:"CMR Metadata",id:"cmr-metadata",level:3},{value:"Common Use Cases",id:"common-use-cases",level:3}],u={toc:m},c="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"contents"},"Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#contents"},"Contents"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#file-types"},"File types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#file-type-configuration"},"File Type Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cmr-metadata"},"CMR Metadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#common-use-cases"},"Common Use Cases"))))),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This document covers setting up ingest to track primary and ancillary files under various file types, which will carry through to the CMR and granule record.\nCumulus has a number of options for tracking files in granule records, and in CMR metadata under certain metadata elements or with specified file types.\nWe will cover Cumulus file types, file type configuration, effects on CMR metadata, and some common use case examples."),(0,i.kt)("h3",{id:"file-types"},"File types"),(0,i.kt)("p",null,"Cumulus follows the Cloud Notification Mechanism (CNM) file type conventions. Under this schema, there are four data types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"browse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"qa"))),(0,i.kt)("p",null,"In Cumulus, these data types are mapped to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," attribute on ",(0,i.kt)("inlineCode",{parentName:"p"},"RelatedURL"),"s for UMM-G metadata, or used to map\nresources to one of ",(0,i.kt)("inlineCode",{parentName:"p"},"OnlineAccessURL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"OnlineResource")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociatedBrowseImages")," for ECHO10 XML metadata."),(0,i.kt)("h3",{id:"file-type-configuration"},"File Type Configuration"),(0,i.kt)("p",null,"File types for each file in a granule can be configured in a number of different ways, depending on the ingest type and workflow.\nFor more information, see the ",(0,i.kt)("a",{parentName:"p",href:"../features/ancillary_metadata"},"ancillary metadata")," documentation."),(0,i.kt)("h3",{id:"cmr-metadata"},"CMR Metadata"),(0,i.kt)("p",null,"When updating granule CMR metadata, the ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateGranulesCmrMetadataFileLinks")," task will add the external facing URLs to the CMR metadata file based on the file type.\nThe table below shows how the CNM data types map to CMR metadata updates. Non-CNM file types are handled as 'data' file types.\nThe UMM-G column reflects the ",(0,i.kt)("inlineCode",{parentName:"p"},"RelatedURL"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," derived from the CNM type, whereas the ECHO10 column shows how the CNM type affects the destination element."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CNM Type"),(0,i.kt)("th",{parentName:"tr",align:null},"UMM-G ",(0,i.kt)("inlineCode",{parentName:"th"},"RelatedUrl.Type")),(0,i.kt)("th",{parentName:"tr",align:null},"ECHO10 Location"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ancillary")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'VIEW RELATED INFORMATION'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OnlineResource"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'GET DATA'"),"(HTTPS URL) or ",(0,i.kt)("inlineCode",{parentName:"td"},"'GET DATA VIA DIRECT ACCESS'"),"(S3 URI)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OnlineAccessURL"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"browse")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'GET RELATED VISUALIZATION'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AssociatedBrowseImage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"linkage")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'EXTENDED METADATA'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OnlineResource"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"metadata")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'EXTENDED METADATA'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OnlineResource"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"qa")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'EXTENDED METADATA'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OnlineResource"))))),(0,i.kt)("h3",{id:"common-use-cases"},"Common Use Cases"),(0,i.kt)("p",null,"This section briefly documents some common use cases and the recommended configuration for the file.\nThe examples shown here are for the DiscoverGranules use case, which allows configuration at the Cumulus dashboard level.\nThe other two cases covered in the ",(0,i.kt)("a",{parentName:"p",href:"../features/ancillary_metadata"},"ancillary metadata")," documentation require configuration at the provider notification level (either CNM message or PDR) and are not covered here."),(0,i.kt)("p",null,"Configuring browse imagery:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bucket": "public",\n  "regex": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}\\\\_[\\\\d]{1}.jpg$",\n  "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104_1.jpg",\n  "type": "browse"\n}\n')),(0,i.kt)("p",null,"Configuring a documentation entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bucket": "protected",\n  "regex": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}\\\\_README.pdf$",\n  "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104_README.pdf",\n  "type": "metadata"\n}\n')),(0,i.kt)("p",null,"Configuring other associated files (use types ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"qa")," as appropriate):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bucket": "protected",\n  "regex": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}\\\\_QA.txt$",\n  "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104_QA.txt",\n  "type": "qa"\n}\n')))}k.isMDXComponent=!0}}]);
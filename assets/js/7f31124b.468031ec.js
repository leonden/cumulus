"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[86560],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>g});var a=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),s=o,g=m["".concat(p,".").concat(s)]||m[s]||d[s]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},41440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=t(45072),o=t(95656),r=(t(11504),t(95788)),i=["components"],l={id:"workflow-configuration-how-to",title:"Workflow Configuration How To's",hide_title:!1},p=void 0,u={unversionedId:"workflows/workflow-configuration-how-to",id:"version-v15.0.2/workflows/workflow-configuration-how-to",title:"Workflow Configuration How To's",description:"How to specify a bucket for granules",source:"@site/versioned_docs/version-v15.0.2/workflows/workflow-configuration-how-to.md",sourceDirName:"workflows",slug:"/workflows/workflow-configuration-how-to",permalink:"/cumulus/docs/v15.0.2/workflows/workflow-configuration-how-to",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682721685,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"workflow-configuration-how-to",title:"Workflow Configuration How To's",hide_title:!1},sidebar:"docs",previous:{title:"Dockerizing Data Processing",permalink:"/cumulus/docs/v15.0.2/workflows/docker"},next:{title:"Contributing a Task",permalink:"/cumulus/docs/v15.0.2/adding-a-task"}},c={},m=[{value:"How to specify a bucket for granules",id:"how-to-specify-a-bucket-for-granules",level:2},{value:"Bucket configuration",id:"bucket-configuration",level:3},{value:"Point to buckets in the workflow configuration",id:"point-to-buckets-in-the-workflow-configuration",level:3},{value:"Hardcode a bucket",id:"hardcode-a-bucket",level:3},{value:"Using meta and hardcoding",id:"using-meta-and-hardcoding",level:3},{value:"How to specify a file location in a bucket",id:"how-to-specify-a-file-location-in-a-bucket",level:2},{value:"Hardcoding file placement",id:"hardcoding-file-placement",level:3},{value:"Using a template for file placement",id:"using-a-template-for-file-placement",level:3},{value:"Adding Metadata dates and times to the URL Path",id:"adding-metadata-dates-and-times-to-the-url-path",level:3}],d={toc:m},s="wrapper";function g(e){var n=e.components,t=(0,o.c)(e,i);return(0,r.yg)(s,(0,a.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"how-to-specify-a-bucket-for-granules"},"How to specify a bucket for granules"),(0,r.yg)("h3",{id:"bucket-configuration"},"Bucket configuration"),(0,r.yg)("p",null,"Buckets configured in your deployment for the ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus")," module's inputs will\nultimately become part of the workflow configuration. The ",(0,r.yg)("inlineCode",{parentName:"p"},"type")," property of a\nbucket describes how that bucket will be used:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"public")," indicates a completely public bucket."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"internal")," type is for Cumulus system use."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"protected")," buckets are for any information that should be behind either\nEarthdata Login (if using TEA for distribution) or Cognito authentication (if\nusing the Cumulus Distribution API for distribution)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"private")," buckets are for private data."),(0,r.yg)("li",{parentName:"ul"},"Any other type is allowed and the bucket will be configured with limited IAM\nprivileges used by your system but not directly related to your ingest and\ndistribution.  For example, your glacier backup bucket could have a type\n",(0,r.yg)("inlineCode",{parentName:"li"},"orca")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"recovery")," and it would be accessible to Cumulus but not part\nof the ingest/distrubution system.")),(0,r.yg)("p",null,"Consider the following ",(0,r.yg)("inlineCode",{parentName:"p"},"buckets")," configuration variable for the ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus"),"\nmodule for all following examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tcl"},'buckets =  {\n  internal = {\n    name = "sample-internal-bucket",\n    type = "internal"\n  },\n  private = {\n    name = "sample-private-bucket",\n    type = "private"\n  },\n  protected = {\n    name = "sample-protected-bucket",\n    type = "protected"\n  },\n  public = {\n    name = "sample-public-bucket",\n    type = "public"\n  },\n  protected-2 = {\n    name = "sample-protected-bucket-2",\n    type = "protected"\n  },\n  dashboard = {\n    name = "dashboard-bucket",\n    type = "dashboard"\n  },\n  glacier = {\n     name = "glacier-backup-bucket",\n     type = "orca"\n  }\n}\n')),(0,r.yg)("h3",{id:"point-to-buckets-in-the-workflow-configuration"},"Point to buckets in the workflow configuration"),(0,r.yg)("p",null,"Buckets specified in the ",(0,r.yg)("inlineCode",{parentName:"p"},"buckets")," input variable to the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/cumulus"},(0,r.yg)("inlineCode",{parentName:"a"},"cumulus")," module")," will be available in the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," object of the Cumulus message."),(0,r.yg)("p",null,"To use the buckets specified in the configuration, you can do the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "DiscoverGranules": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "task_config": {\n          "provider": "{$.meta.provider}",\n          "provider_path": "{$.meta.provider_path}",\n          "collection": "{$.meta.collection}",\n          "buckets": "{$.meta.buckets}"\n        }\n      }\n    }\n  }\n}\n')),(0,r.yg)("p",null,"Or, to map a specific bucket to a config value for a task:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "MoveGranules": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "task_config": {\n          "bucket": "{$.meta.buckets.internal.name}",\n          "buckets": "{$.meta.buckets}"\n        }\n      }\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"hardcode-a-bucket"},"Hardcode a bucket"),(0,r.yg)("p",null,"Bucket names can be hardcoded in your workflow configuration, for example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "DiscoverGranules": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "task_config": {\n          "provider": "{$.meta.provider}",\n          "provider_path": "{$.meta.provider_path}",\n          "collection": "{$.meta.collection}",\n          "buckets": {\n            "internal": "sample-internal-bucket",\n            "protected": "sample-protected-bucket-2"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.yg)("p",null,"Or you can do a combination of meta buckets and hardcoded:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "DiscoverGranules": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "task_config": {\n          "provider": "{$.meta.provider}",\n          "provider_path": "{$.meta.provider_path}",\n          "collection": "{$.meta.collection}",\n          "buckets": {\n            "internal": "sample-internal-bucket",\n            "private": "{$.meta.buckets.private.name}"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"using-meta-and-hardcoding"},"Using meta and hardcoding"),(0,r.yg)("p",null,"Bucket names can be configured using a mixture of hardcoded values and values from the meta. For example, to configure the bucket based on the collection name you could do something like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "DiscoverGranules": {\n    "Parameters": {\n      "cma": {\n        "event.$": "$",\n        "task_config": {\n          "provider": "{$.meta.provider}",\n          "provider_path": "{$.meta.provider_path}",\n          "collection": "{$.meta.collection}",\n          "buckets": {\n            "internal": "{$.meta.collection.name}-bucket"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.yg)("h2",{id:"how-to-specify-a-file-location-in-a-bucket"},"How to specify a file location in a bucket"),(0,r.yg)("p",null,"Granule files can be placed in folders and subfolders in buckets for better organization. This is done by setting a ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path")," in the base level of a collection configuration to be applied to all files. To only affect placement of a single file, the ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path")," variable can be placed in that specific file of the collection configuration. There are a number of different ways to populate ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path"),"."),(0,r.yg)("h3",{id:"hardcoding-file-placement"},"Hardcoding file placement"),(0,r.yg)("p",null,"A file path can be added as the ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path")," in the collection configuration to specify the final location of the files. For example, take the following collection configuration"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "MOD09GQ",\n  "version": "006",\n  "url_path": "example-path",\n  "files": [\n    {\n      "bucket": "protected",\n      "regex": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}\\\\.hdf$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n      "url_path": "file-example-path"\n    },\n    {\n      "bucket": "private",\n      "regex": "^MOD09GQ\\\\.A[\\\\d]{7}\\\\.[\\\\S]{6}\\\\.006\\\\.[\\\\d]{13}\\\\.hdf\\\\.met$",\n      "sampleFileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf.met"\n    }\n  ]\n}\n')),(0,r.yg)("p",null,"The first file, ",(0,r.yg)("inlineCode",{parentName:"p"},"MOD09GQ.A2017025.h21v00.006.2017034065104.hdf")," has its own ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path")," so the resulting file path might look like ",(0,r.yg)("inlineCode",{parentName:"p"},"s3://sample-protected-bucket/file-example-path/MOD09GQ.A2017025.h21v00.006.2017034065104.hdf"),".\nThe second file, ",(0,r.yg)("inlineCode",{parentName:"p"},"MOD09GQ.A2017025.h21v00.006.2017034065104.hdf.met"),", does not have it's own ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path")," so it will use the collection ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path")," and have a final file path of ",(0,r.yg)("inlineCode",{parentName:"p"},"s3://sample-private-bucket/example-path/MOD09GQ.A2017025.h21v00.006.2017034065104.hdf.met"),"."),(0,r.yg)("h3",{id:"using-a-template-for-file-placement"},"Using a template for file placement"),(0,r.yg)("p",null,"Instead of hardcoding the placement, the ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path")," can be a template to be populated with metadata during the move-granules step. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"url_path": "{cmrMetadata.Granule.Collection.ShortName}"\n')),(0,r.yg)("p",null,"This url path with be assigned as the collection shortname, ",(0,r.yg)("inlineCode",{parentName:"p"},'"MOD09GQ"'),".\nTo take a subset of any given metadata, use the option ",(0,r.yg)("inlineCode",{parentName:"p"},"substring"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"url_path": "{cmrMetadata.Granule.Collection.ShortName}/{substring(file.fileName, 0, 3)}"\n')),(0,r.yg)("p",null,"This example will populate to ",(0,r.yg)("inlineCode",{parentName:"p"},'"MOD09GQ/MOD"')),(0,r.yg)("p",null,"In addition to ",(0,r.yg)("inlineCode",{parentName:"p"},"substring"),", several datetime-specific functions are available, which can parse a datetime string in the metadata and extract a certain part of it:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"url_path": "{extractYear(cmrMetadata.Granule.Temporal.RangeDateTime.BeginningDateTime)}"\n')),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},' "url_path": "{dateFormat(cmrMetadata.Granule.Temporal.RangeDateTime.BeginningDateTime, YYYY-MM-DD[T]HH[:]mm[:]ss)}"\n')),(0,r.yg)("p",null,"The following functions are implemented:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"extractYear")," - returns the year, formatted as YYYY"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"extractMonth")," - returns the month, formatted as MM"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"extractDate")," - returns the day of the month, formatted as DD"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"extractHour")," - returns the hour in 24-hour format, with no leading zero"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dateFormat")," - takes a second argument describing how to format the date, and\npasses the metadata date string and the format argument to\n",(0,r.yg)("a",{parentName:"li",href:"https://momentjs.com/docs/#/displaying/format/"},"moment().format()"))),(0,r.yg)("p",null,"Note: the move-granules step needs to be in the workflow for this template to be populated and the file moved. This ",(0,r.yg)("inlineCode",{parentName:"p"},"cmrMetadata")," or CMR granule XML needs to have been generated and stored on S3. From there any field could be retrieved and used for a url_path."),(0,r.yg)("h3",{id:"adding-metadata-dates-and-times-to-the-url-path"},"Adding Metadata dates and times to the URL Path"),(0,r.yg)("p",null,"There are a number of options to pull dates from the CMR file metadata. With this metadata:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<Granule>\n    <Temporal>\n        <RangeDateTime>\n            <BeginningDateTime>2003-02-19T00:00:00Z</BeginningDateTime>\n            <EndingDateTime>2003-02-19T23:59:59Z</EndingDateTime>\n        </RangeDateTime>\n    </Temporal>\n</Granule>\n")),(0,r.yg)("p",null,"The following examples of ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path")," could be used."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"{extractYear(cmrMetadata.Granule.Temporal.RangeDateTime.BeginningDateTime)}")," will pull the year from the full date: ",(0,r.yg)("inlineCode",{parentName:"p"},"2003"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"{extractMonth(cmrMetadata.Granule.Temporal.RangeDateTime.BeginningDateTime)}")," will pull the month: ",(0,r.yg)("inlineCode",{parentName:"p"},"2"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"{extractDate(cmrMetadata.Granule.Temporal.RangeDateTime.BeginningDateTime)}")," will pull the day: ",(0,r.yg)("inlineCode",{parentName:"p"},"19"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"{extractHour(cmrMetadata.Granule.Temporal.RangeDateTime.BeginningDateTime)}")," will pull the hour: ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),"."),(0,r.yg)("p",null,"Different values can be combined to create the ",(0,r.yg)("inlineCode",{parentName:"p"},"url_path"),". For example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n"bucket": "sample-protected-bucket",\n"name": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n"url_path": "{cmrMetadata.Granule.Collection.ShortName}/{extractYear(cmrMetadata.Granule.Temporal.RangeDateTime.BeginningDateTime)/extractDate(cmrMetadata.Granule.Temporal.RangeDateTime.BeginningDateTime)}"\n}\n')),(0,r.yg)("p",null,"The final file location for the above would be ",(0,r.yg)("inlineCode",{parentName:"p"},"s3://sample-protected-bucket/MOD09GQ/2003/19/MOD09GQ.A2017025.h21v00.006.2017034065104.hdf"),"."))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[6934],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},37642:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],s={id:"troubleshooting-deployment",title:"Troubleshooting Deployment",hide_title:!1},l=void 0,d={unversionedId:"troubleshooting/troubleshooting-deployment",id:"version-v16.1.1/troubleshooting/troubleshooting-deployment",title:"Troubleshooting Deployment",description:"This document provides 'notes' on frequently encountered deployment issues. The issues reported are organized by relevant subsection.",source:"@site/versioned_docs/version-v16.1.1/troubleshooting/troubleshoot_deployment.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/troubleshooting-deployment",permalink:"/cumulus/docs/v16.1.1/troubleshooting/troubleshooting-deployment",draft:!1,tags:[],version:"v16.1.1",lastUpdatedBy:"Nate Pauzenga",lastUpdatedAt:1691507415,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"troubleshooting-deployment",title:"Troubleshooting Deployment",hide_title:!1},sidebar:"docs",previous:{title:"How to Troubleshoot and Fix Issues",permalink:"/cumulus/docs/v16.1.1/troubleshooting/"},next:{title:"Rerunning workflow executions",permalink:"/cumulus/docs/v16.1.1/troubleshooting/rerunning-workflow-executions"}},c={},p=[{value:"Terraform Logging",id:"terraform-logging",level:2},{value:"<code>terraform init</code>",id:"terraform-init",level:2},{value:"<code>Failed to get existing workspaces: AccessDenied: Access Denied</code>",id:"failed-to-get-existing-workspaces-accessdenied-access-denied",level:3},{value:"Deploying Data Persistence Resources",id:"deploying-data-persistence-resources",level:2},{value:"<code>Invalid index: aws_elasticsearch_domain.es_vpc[0] is empty tuple</code>",id:"invalid-index-aws_elasticsearch_domaines_vpc0-is-empty-tuple",level:3},{value:"Deploying Cumulus",id:"deploying-cumulus",level:2},{value:"<code>The provided execution role does not have permissions to call SendMessage on SQS</code>",id:"the-provided-execution-role-does-not-have-permissions-to-call-sendmessage-on-sqs",level:3},{value:"<code>The provided execution role does not have permissions to call CreateNetworkInterface on EC2</code>",id:"the-provided-execution-role-does-not-have-permissions-to-call-createnetworkinterface-on-ec2",level:3},{value:"<code>ValidationException: You must specify exactly one subnet.</code> when deploying the data-persistence module",id:"validationexception-you-must-specify-exactly-one-subnet-when-deploying-the-data-persistence-module",level:3},{value:"Install Dashboard",id:"install-dashboard",level:2},{value:"Dashboard Configuration",id:"dashboard-configuration",level:3},{value:"Issues",id:"issues",level:4},{value:"Dashboard Deployment",id:"dashboard-deployment",level:3},{value:"Issues",id:"issues-1",level:4}],u={toc:p},m="wrapper";function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document provides 'notes' on frequently encountered deployment issues. The issues reported are organized by relevant subsection."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In order to reduce your risk of the corruption or loss of your\nTerraform state file, or otherwise corrupt your Cumulus deployment, please see\nthe ",(0,r.kt)("a",{parentName:"p",href:"/cumulus/docs/v16.1.1/deployment/terraform-best-practices"},"Terraform Best Practices")," guide.")),(0,r.kt)("h2",{id:"terraform-logging"},"Terraform Logging"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TF_LOG")," environment variable can be set to help debug Terraform-specific issues. See ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/internals/debugging.html"},"Terraform debugging"),"."),(0,r.kt)("p",null,"For example ",(0,r.kt)("inlineCode",{parentName:"p"},"export TF_LOG=DEBUG")," will log verbose output from Terraform commands to help debug issues."),(0,r.kt)("h2",{id:"terraform-init"},(0,r.kt)("inlineCode",{parentName:"h2"},"terraform init")),(0,r.kt)("h3",{id:"failed-to-get-existing-workspaces-accessdenied-access-denied"},(0,r.kt)("inlineCode",{parentName:"h3"},"Failed to get existing workspaces: AccessDenied: Access Denied")),(0,r.kt)("p",null,"This is an issue accessing the remote configuration in your S3 bucket. You can check your access to the bucket via the CLI using ",(0,r.kt)("inlineCode",{parentName:"p"},"aws s3 ls <bucket-name>"),". If that works, Terraform may be looking at the incorrect bucket."),(0,r.kt)("p",null,"When switching between accounts, you may need to use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/commands/init.html#backend-initialization"},(0,r.kt)("inlineCode",{parentName:"a"},"-reconfigure"))," option and run ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform init -reconfigure"),"."),(0,r.kt)("h2",{id:"deploying-data-persistence-resources"},"Deploying Data Persistence Resources"),(0,r.kt)("h3",{id:"invalid-index-aws_elasticsearch_domaines_vpc0-is-empty-tuple"},(0,r.kt)("inlineCode",{parentName:"h3"},"Invalid index: aws_elasticsearch_domain.es_vpc[0] is empty tuple")),(0,r.kt)("p",null,"You may see this error if the Elasticsearch domain tracked by your Terraform state cannot be found or no longer exists. This could happen if you have accidentally deleted your Elasticsearch domain, producing an error on your next ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply")," that looks something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'Error: Invalid index\n\n  on ../../tf-modules/data-persistence/elasticsearch.tf line 144, in resource "aws_elasticsearch_domain_policy" "es_vpc_domain_policy":\n 144:       "Resource": "${aws_elasticsearch_domain.es_vpc[[0].arn}/*"\n    ----------------\n     aws_elasticsearch_domain.es_vpc[0] is empty tuple\n\nThe given key does not identify an element in this collection value.\n')),(0,r.kt)("p",null,"To resolve this issue, you need to manually remove the entry from your Terraform state referencing the missing resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ terraform state rm module.data_persistence.aws_elasticsearch_domain.es_vpc\nRemoved module.data_persistence.aws_elasticsearch_domain.es_vpc[0]\nSuccessfully removed 1 resource instance(s).\n")),(0,r.kt)("p",null,"After removing the entry from the Terraform state, ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply")," should work correctly."),(0,r.kt)("h2",{id:"deploying-cumulus"},"Deploying Cumulus"),(0,r.kt)("h3",{id:"the-provided-execution-role-does-not-have-permissions-to-call-sendmessage-on-sqs"},(0,r.kt)("inlineCode",{parentName:"h3"},"The provided execution role does not have permissions to call SendMessage on SQS")),(0,r.kt)("h3",{id:"the-provided-execution-role-does-not-have-permissions-to-call-createnetworkinterface-on-ec2"},(0,r.kt)("inlineCode",{parentName:"h3"},"The provided execution role does not have permissions to call CreateNetworkInterface on EC2")),(0,r.kt)("p",null,"You may see one or both of these error the first time you run ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply")," for your Cumulus deployment."),(0,r.kt)("admonition",{title:"IAM issue",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Amazon service for managing roles and permissions, ",(0,r.kt)("strong",{parentName:"p"},"IAM"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency"},"is eventually consistent"),", meaning there can be a delay between when permission updates are applied and when they actually take effect. As a result, when doing a Terraform deployment, the role permissions required for a resource may not have fully taken effect before Terraform attempts to create that resource, so the deployment fails."),(0,r.kt)("admonition",{parentName:"admonition",title:"solution",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Re-run ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply")," and the problem should not recur."))),(0,r.kt)("h3",{id:"validationexception-you-must-specify-exactly-one-subnet-when-deploying-the-data-persistence-module"},(0,r.kt)("inlineCode",{parentName:"h3"},"ValidationException: You must specify exactly one subnet.")," when deploying the data-persistence module"),(0,r.kt)("p",null,"This can happen if you have multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"subnet_ids")," configured for your\n",(0,r.kt)("inlineCode",{parentName:"p"},"data-persistence")," modules, but your config is only creating one\nElasticsearch instance. To fix the issue, update the ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch_config"),"\nvariable for your ",(0,r.kt)("inlineCode",{parentName:"p"},"data-persistence")," module to increase the number of instances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hcl"},'{\n  domain_name    = "es"\n  instance_count = 2\n  instance_type  = "t2.small.elasticsearch"\n  version        = "5.3"\n  volume_size    = 10\n}\n')),(0,r.kt)("h2",{id:"install-dashboard"},"Install Dashboard"),(0,r.kt)("h3",{id:"dashboard-configuration"},"Dashboard Configuration"),(0,r.kt)("h4",{id:"issues"},"Issues"),(0,r.kt)("admonition",{title:"Not Able To Clear Cache",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Problem clearing the cache: EACCES: permission denied, rmdir '/tmp/gulp-cache/default'"),'", this probably means the files at that location, and/or the folder, are owned by someone else (or some other factor prevents you from writing there).'),(0,r.kt)("admonition",{parentName:"admonition",title:"Workaround Option",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It's possible to workaround this by editing the file ",(0,r.kt)("inlineCode",{parentName:"p"},"cumulus-dashboard/node_modules/gulp-cache/index.js")," and alter the value of the line ",(0,r.kt)("inlineCode",{parentName:"p"},"var fileCache = new Cache({cacheDirName: 'gulp-cache'});")," to something like ",(0,r.kt)("inlineCode",{parentName:"p"},"var fileCache = new Cache({cacheDirName: '<prefix>-cache'});"),". Now gulp-cache will be able to write to ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/<prefix>-cache/default"),", and the error should resolve."))),(0,r.kt)("h3",{id:"dashboard-deployment"},"Dashboard Deployment"),(0,r.kt)("h4",{id:"issues-1"},"Issues"),(0,r.kt)("admonition",{title:"Earthdata Login Error",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The dashboard sends you to an Earthdata Login page that has an error reading ",(0,r.kt)("strong",{parentName:"p"},'"Invalid request, please verify the client status or redirect_uri before resubmitting"'),"."),(0,r.kt)("admonition",{parentName:"admonition",title:"Check your variables and values",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check to see if you are missing or have forgotten to update one or more of your ",(0,r.kt)("inlineCode",{parentName:"p"},"EARTHDATA_CLIENT_ID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EARTHDATA_CLIENT_PASSWORD"),' environment variables (from your app/.env file) and re-deploy Cumulus, or you haven\'t placed the correct values in them, or you\'ve forgotten to add both the "redirect" and "token" URL to the Earthdata Application.'))),(0,r.kt)("admonition",{title:"Caching Issue",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There is odd caching behavior associated with the dashboard and Earthdata Login at this point in time that can cause the above error to reappear on the Earthdata Login page loaded by the dashboard even after fixing the cause of the error."),(0,r.kt)("admonition",{parentName:"admonition",title:"browser solution",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you experience this, attempt to access the dashboard in a new browser window, and it should work."))))}h.isMDXComponent=!0}}]);
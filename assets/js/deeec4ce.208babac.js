"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[23136],{95788:(e,a,t)=>{t.d(a,{Iu:()=>d,yg:()=>g});var n=t(11504);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),i=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=i(e.components);return n.createElement(u.Provider,{value:a},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=i(t),c=o,g=m["".concat(u,".").concat(c)]||m[c]||p[c]||r;return t?n.createElement(g,l(l({ref:a},d),{},{components:t})):n.createElement(g,l({ref:a},d))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58324:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=t(45072),o=t(95656),r=(t(11504),t(95788)),l=["components"],s={id:"lambda",title:"Develop Lambda Functions",hide_title:!1},u=void 0,i={unversionedId:"workflows/lambda",id:"version-v18.2.0/workflows/lambda",title:"Develop Lambda Functions",description:"Develop a new Cumulus Lambda",source:"@site/versioned_docs/version-v18.2.0/workflows/lambda.md",sourceDirName:"workflows",slug:"/workflows/lambda",permalink:"/cumulus/docs/workflows/lambda",draft:!1,tags:[],version:"v18.2.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1707330127,formattedLastUpdatedAt:"Feb 7, 2024",frontMatter:{id:"lambda",title:"Develop Lambda Functions",hide_title:!1},sidebar:"docs",previous:{title:"Developing Workflow Tasks",permalink:"/cumulus/docs/workflows/developing-workflow-tasks"},next:{title:"Dockerizing Data Processing",permalink:"/cumulus/docs/workflows/docker"}},d={},m=[{value:"Develop a new Cumulus Lambda",id:"develop-a-new-cumulus-lambda",level:2},{value:"Deploy a Lambda",id:"deploy-a-lambda",level:2},{value:"Node.js Lambda",id:"nodejs-lambda",level:3},{value:"Java Lambda",id:"java-lambda",level:3},{value:"Python Lambda",id:"python-lambda",level:3},{value:"Cumulus Message Adapter",id:"cumulus-message-adapter",level:2},{value:"Other Lambda Options",id:"other-lambda-options",level:2},{value:"Cloudwatch log groups",id:"cloudwatch-log-groups",level:3}],p={toc:m},c="wrapper";function g(e){var a=e.components,t=(0,o.c)(e,l);return(0,r.yg)(c,(0,n.c)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"develop-a-new-cumulus-lambda"},"Develop a new Cumulus Lambda"),(0,r.yg)("p",null,"AWS provides great getting started guide for building Lambdas in the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html"},"developer guide"),"."),(0,r.yg)("p",null,"Cumulus currently supports the following environments for Cumulus Message Adapter enabled functions:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/programming-model.html"},"Node.js 12.18 - 16.19")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/java-programming-model.html"},"Java 8")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/python-programming-model.html"},"Python 2.7, 3.6"))),(0,r.yg)("p",null,"Additionally you may chose to include any of the other languages AWS ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html"},"supports")," as a resource with reduced feature support."),(0,r.yg)("h2",{id:"deploy-a-lambda"},"Deploy a Lambda"),(0,r.yg)("h3",{id:"nodejs-lambda"},"Node.js Lambda"),(0,r.yg)("p",null,"For a new Node.js Lambda, create a new function and add an ",(0,r.yg)("inlineCode",{parentName:"p"},"aws_lambda_function")," resource to your Cumulus deployment (for examples, see the example in source ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/example/cumulus-tf/lambdas.tf"},"example/lambdas.tf")," and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/ingest/lambda-functions.tf"},"ingest/lambda-functions.tf"),") as either a new ",(0,r.yg)("inlineCode",{parentName:"p"},".tf")," file, or added to an existing ",(0,r.yg)("inlineCode",{parentName:"p"},".tf")," file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_lambda_function" "myfunction" {\n  function_name    = "${var.prefix}-function"\n  filename         = "/path/to/zip/lambda.zip"\n  source_code_hash = filebase64sha256("/path/to/zip/lambda.zip")\n  handler          = "index.handler"\n  role             = module.cumulus.lambda_processing_role_arn\n  runtime          = "nodejs10.x"\n\n  vpc_config {\n    subnet_ids         = var.subnet_ids\n    security_group_ids = var.security_group_ids\n  }\n}\n')),(0,r.yg)("admonition",{title:"configuration example",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"This example contains the minimum set of required configuration.")),(0,r.yg)("p",null,"Make sure to include a ",(0,r.yg)("inlineCode",{parentName:"p"},"vpc_config")," that matches the information you've provided the ",(0,r.yg)("inlineCode",{parentName:"p"},"cumulus")," module if intending to integrate the lambda with a Cumulus deployment."),(0,r.yg)("h3",{id:"java-lambda"},"Java Lambda"),(0,r.yg)("p",null,"Java Lambdas are created in much the same way as the Node.js example ",(0,r.yg)("a",{parentName:"p",href:"#node.js-lambda"},"above"),"."),(0,r.yg)("p",null,"The source points to a folder with the compiled .class files and dependency libraries in the Lambda Java zip folder structure (details ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/create-deployment-pkg-zip-java.html"},"here"),"), not an uber-jar."),(0,r.yg)("p",null,"The deploy folder referenced here would contain a folder 'test_task/task/' which contains Task.class and TaskLogic.class as well as a lib folder containing dependency jars."),(0,r.yg)("h3",{id:"python-lambda"},"Python Lambda"),(0,r.yg)("p",null,"Python Lambdas are created the same way as the Node.js example ",(0,r.yg)("a",{parentName:"p",href:"#nodejs-lambda"},"above"),"."),(0,r.yg)("h2",{id:"cumulus-message-adapter"},"Cumulus Message Adapter"),(0,r.yg)("p",null,"For Lambdas wishing to utilize the ",(0,r.yg)("a",{parentName:"p",href:"cumulus-task-message-flow"},"Cumulus Message Adapter(CMA)"),", you should define a ",(0,r.yg)("inlineCode",{parentName:"p"},"layers")," key on your Lambda resource with the CMA you wish to include. See the ",(0,r.yg)("a",{parentName:"p",href:"/cumulus/docs/workflows/input_output"},"input_output docs")," for more on how to create/use the CMA."),(0,r.yg)("h2",{id:"other-lambda-options"},"Other Lambda Options"),(0,r.yg)("p",null,"Cumulus supports all of the options available to you via the ",(0,r.yg)("inlineCode",{parentName:"p"},"aws_lambda_function")," Terraform resource.   For more information on what's available, check out the ",(0,r.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/r/lambda_function.html"},"Terraform resource docs"),"."),(0,r.yg)("h3",{id:"cloudwatch-log-groups"},"Cloudwatch log groups"),(0,r.yg)("p",null,"If you want to enable ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/index.html"},"Cloudwatch")," logging for your Lambda resource, you'll need to add a ",(0,r.yg)("inlineCode",{parentName:"p"},"aws_cloudwatch_log_group")," resource to your Lambda definition:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hcl"},'resource "aws_cloudwatch_log_group" "myfunction_log_group" {\n  name = "/aws/lambda/${aws_lambda_function.myfunction.function_name}"\n  retention_in_days = 30\n  tags = { Deployment = var.prefix }\n}\n')))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[92778],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),p=a,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return o?n.createElement(g,r(r({ref:t},c),{},{components:o})):n.createElement(g,r({ref:t},c))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},27702:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=o(87462),a=o(63366),i=(o(67294),o(3905)),r=["components"],s={id:"monitoring-readme",title:"Monitoring Best Practices",hide_title:!1},l=void 0,u={unversionedId:"configuration/monitoring-readme",id:"version-v15.0.2/configuration/monitoring-readme",title:"Monitoring Best Practices",description:"This document intends to provide a set of recommendations and best practices for monitoring the state of a deployed Cumulus and diagnosing any issues.",source:"@site/versioned_docs/version-v15.0.2/configuration/monitoring.md",sourceDirName:"configuration",slug:"/configuration/monitoring-readme",permalink:"/cumulus/docs/v15.0.2/configuration/monitoring-readme",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682964595,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{id:"monitoring-readme",title:"Monitoring Best Practices",hide_title:!1},sidebar:"docs",previous:{title:"Cumulus Data Management Types",permalink:"/cumulus/docs/v15.0.2/configuration/data-management-types"},next:{title:"S3 Server Access Logging",permalink:"/cumulus/docs/v15.0.2/configuration/server_access_logging"}},c={},d=[{value:"Cumulus-provided resources and integrations for monitoring",id:"cumulus-provided-resources-and-integrations-for-monitoring",level:2},{value:"Cumulus Dashboard",id:"cumulus-dashboard",level:3},{value:"Cumulus-provided AWS resources",id:"cumulus-provided-aws-resources",level:3},{value:"Monitoring Lambda Functions",id:"monitoring-lambda-functions",level:4},{value:"Monitoring ECS services",id:"monitoring-ecs-services",level:4},{value:"Monitoring workflows",id:"monitoring-workflows",level:4},{value:"AWS recommendations",id:"aws-recommendations",level:2},{value:"Example: Setting up email notifications for CloudWatch logs",id:"example-setting-up-email-notifications-for-cloudwatch-logs",level:2}],m={toc:d},p="wrapper";function g(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)(p,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document intends to provide a set of recommendations and best practices for monitoring the state of a deployed Cumulus and diagnosing any issues."),(0,i.kt)("h2",{id:"cumulus-provided-resources-and-integrations-for-monitoring"},"Cumulus-provided resources and integrations for monitoring"),(0,i.kt)("p",null,"Cumulus provides a number set of resources that are useful for monitoring the system and its operation."),(0,i.kt)("h3",{id:"cumulus-dashboard"},"Cumulus Dashboard"),(0,i.kt)("p",null,"The primary tool for monitoring the Cumulus system is the Cumulus Dashboard. The dashboard is hosted ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-dashboard/"},"on Github")," and includes instructions on how to deploy and link it into your core Cumulus deployment."),(0,i.kt)("p",null,"The dashboard displays workflow executions, their status, inputs, outputs, and some diagnostic information such as logs. For further information on the dashboard, its usage, and the information it provides, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-dashboard/blob/master/README.md"},"documentation"),"."),(0,i.kt)("h3",{id:"cumulus-provided-aws-resources"},"Cumulus-provided AWS resources"),(0,i.kt)("p",null,"Cumulus sets up CloudWatch log groups for all Core-provided tasks."),(0,i.kt)("h4",{id:"monitoring-lambda-functions"},"Monitoring Lambda Functions"),(0,i.kt)("p",null,"Logging for each Lambda Function is available in Lambda-specific CloudWatch log groups."),(0,i.kt)("h4",{id:"monitoring-ecs-services"},"Monitoring ECS services"),(0,i.kt)("p",null,"Each deployed ",(0,i.kt)("inlineCode",{parentName:"p"},"cumulus_ecs_service")," module also includes a CloudWatch log group for the processes running on ECS."),(0,i.kt)("h4",{id:"monitoring-workflows"},"Monitoring workflows"),(0,i.kt)("p",null,"For advanced debugging, we also configure dead letter queues on critical system functions. These will allow you to monitor and debug invalid inputs to the functions we use to start workflows, which can be helpful if you find that you are not seeing workflows being started as expected. More information on these can be found in the ",(0,i.kt)("a",{parentName:"p",href:"/cumulus/docs/v15.0.2/features/dead_letter_queues"},"dead letter queue documentation")),(0,i.kt)("h2",{id:"aws-recommendations"},"AWS recommendations"),(0,i.kt)("p",null,"AWS has a number of recommendations on system monitoring. Rather than reproduce those here and risk providing outdated guidance, we've documented the following links which will take you to available AWS docs on monitoring recommendations and best practices for the services used in Cumulus:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring_ec2.html"},"EC2 Monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/lambda-monitoring.html"},"Lambda Monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/index.html"},"CloudWatch documentation"))),(0,i.kt)("h2",{id:"example-setting-up-email-notifications-for-cloudwatch-logs"},"Example: Setting up email notifications for CloudWatch logs"),(0,i.kt)("p",null,"Cumulus does not provide out-of-the-box support for email notifications at this time.\nHowever, setting up email notifications on AWS is fairly straightforward in that the operative components are an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/US_SetupSNS.html"},"AWS SNS topic and a subscribed email address"),"."),(0,i.kt)("p",null,"In terms of Cumulus integration, forwarding CloudWatch logs requires creating a mechanism, most likely a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#LambdaFunctionExample"},"Lambda Function subscribed to the log group")," that will receive, filter and forward these messages to the SNS topic."),(0,i.kt)("p",null,"As a very simple example, we could create a function that filters CloudWatch logs created by the ",(0,i.kt)("inlineCode",{parentName:"p"},"@cumulus/logger")," package and sends email notifications for ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fatal")," log levels, adapting the example linked above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const zlib = require('zlib');\nconst aws = require('aws-sdk');\nconst { promisify } = require('util');\n\nconst gunzip = promisify(zlib.gunzip);\nconst sns = new aws.SNS();\n\nexports.handler = async (event) => {\n  const payload = Buffer.from(event.awslogs.data, 'base64');\n  const decompressedData = await gunzip(payload);\n  const logData = JSON.parse(decompressedData.toString('ascii'));\n  return await Promise.all(logData.logEvents.map(async (logEvent) => {\n    const logMessage = JSON.parse(logEvent.message);\n    if (['error', 'fatal'].includes(logMessage.level)) {\n      return sns.publish({\n        TopicArn: process.env.EmailReportingTopicArn,\n        Message: logEvent.message\n      }).promise();\n    }\n    return Promise.resolve();\n  }));\n};\n")),(0,i.kt)("p",null,"After creating the SNS topic, We can deploy this code as a lambda function, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#LambdaFunctionExample"},"following the setup steps from Amazon"),". Make sure to include your SNS topic ARN as an environment variable on the lambda function by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--environment")," option on ",(0,i.kt)("inlineCode",{parentName:"p"},"aws lambda create-function"),"."),(0,i.kt)("p",null,"You will need to create subscription filters for each log group you want to receive emails for. We recommend automating this as much as possible, and you could very well handle this via Terraform, such as using a module to deploy filters alongside log groups, or exporting the log group names to an all-in-one email notification module."))}g.isMDXComponent=!0}}]);
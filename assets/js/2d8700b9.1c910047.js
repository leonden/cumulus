"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[1644],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>d});var n=a(11504);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),g=s,d=m["".concat(u,".").concat(g)]||m[g]||c[g]||o;return a?n.createElement(d,r(r({ref:t},p),{},{components:a})):n.createElement(d,r({ref:t},p))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:s,r[1]=i;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},91196:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(45072),s=a(95656),o=(a(11504),a(95788)),r=["components"],i={id:"cumulus-task-message-flow",title:"Cumulus Tasks: Message Flow",hide_title:!1},u=void 0,l={unversionedId:"workflows/cumulus-task-message-flow",id:"version-v10.1.0/workflows/cumulus-task-message-flow",title:"Cumulus Tasks: Message Flow",description:"Cumulus Tasks comprise Cumulus Workflows and are either AWS Lambda tasks or AWS Elastic Container Service (ECS) activities. Cumulus Tasks permit a payload as input to the main task application code. The task payload is additionally wrapped by the Cumulus Message Adapter. The Cumulus Message Adapter supplies additional information supporting message templating and metadata management of these workflows.",source:"@site/versioned_docs/version-v10.1.0/workflows/cumulus-task-message-flow.md",sourceDirName:"workflows",slug:"/workflows/cumulus-task-message-flow",permalink:"/cumulus/docs/v10.1.0/workflows/cumulus-task-message-flow",draft:!1,tags:[],version:"v10.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"cumulus-task-message-flow",title:"Cumulus Tasks: Message Flow",hide_title:!1},sidebar:"docs",previous:{title:"Workflow Inputs & Outputs",permalink:"/cumulus/docs/v10.1.0/workflows/input_output"},next:{title:"Workflow Triggers",permalink:"/cumulus/docs/v10.1.0/workflows/workflow-triggers"}},p={},m=[{value:"Cumulus Message Format",id:"cumulus-message-format",level:2},{value:"Cumulus Message Preparation",id:"cumulus-message-preparation",level:2},{value:"Preparation Step 1: Fetch remote event",id:"preparation-step-1-fetch-remote-event",level:3},{value:"Preparation Step 2: Parse step function config from CMA configuration parameters",id:"preparation-step-2-parse-step-function-config-from-cma-configuration-parameters",level:4},{value:"Preparation Step 3: Load nested event",id:"preparation-step-3-load-nested-event",level:4},{value:"Task Application Code",id:"task-application-code",level:2},{value:"Create Next Message functions",id:"create-next-message-functions",level:2},{value:"Create Next Message Step 1: Assign outputs",id:"create-next-message-step-1-assign-outputs",level:3},{value:"Create Next Message Step 2: Store remote event",id:"create-next-message-step-2-store-remote-event",level:4}],c={toc:m},g="wrapper";function d(e){var t=e.components,i=(0,s.c)(e,r);return(0,o.yg)(g,(0,n.c)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Cumulus Tasks comprise Cumulus Workflows and are either AWS Lambda tasks or AWS Elastic Container Service (ECS) activities. Cumulus Tasks permit a payload as input to the main task application code. The task payload is additionally wrapped by the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-message-adapter"},"Cumulus Message Adapter"),". The Cumulus Message Adapter supplies additional information supporting message templating and metadata management of these workflows."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Diagram showing how incoming and outgoing Cumulus messages for workflow steps are handled by the Cumulus Message Adapter",src:a(82144).c,width:"1283",height:"700"})),(0,o.yg)("p",null,"The steps in this flow are detailed in sections below."),(0,o.yg)("h2",{id:"cumulus-message-format"},"Cumulus Message Format"),(0,o.yg)("p",null,"A full ",(0,o.yg)("strong",{parentName:"p"},"Cumulus Message")," has the following keys:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"strong"},"cumulus_meta"),":")," System runtime information that should generally not be touched outside of Cumulus library code or the Cumulus Message Adapter. Stores meta information about the workflow such as the state machine name and the current workflow execution's name. This information is used to look up the current active task. The name of the current active task is used to look up the corresponding task's config in ",(0,o.yg)("inlineCode",{parentName:"li"},"task_config"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"strong"},"meta"),":")," Runtime information captured by the workflow operators. Stores execution-agnostic variables."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"strong"},"payload"),":")," Payload is runtime information for the tasks.")),(0,o.yg)("p",null,"In addition to the above keys, it ",(0,o.yg)("em",{parentName:"p"},"may")," contain the following keys:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"strong"},"replace"),":")," A key generated in conjunction with the Cumulus Message adapter.  It contains the location on S3 for a message payload and a Target JSON path in the message to extract it to."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"strong"},"exception"),":")," A key used to track workflow exceptions, should not be modified outside of Cumulus library code.")),(0,o.yg)("p",null,"Here's a simple example of a Cumulus Message:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "task_config": {\n    "inlinestr": "prefix{meta.foo}suffix",\n    "array": "{[$.meta.foo]}",\n    "object": "{$.meta}"\n  },\n  "cumulus_meta": {\n    "message_source": "sfn",\n    "state_machine": "arn:aws:states:us-east-1:1234:stateMachine:MySfn",\n    "execution_name": "MyExecution__id-1234",\n    "id": "id-1234"\n  },\n  "meta": {\n    "foo": "bar"\n  },\n  "payload": {\n    "anykey": "anyvalue"\n  }\n}\n')),(0,o.yg)("p",null,"A message utilizing the Cumulus Remote message functionality must have at least the keys ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus_meta"),".   Depending on configuration other portions of the message may be present, however the ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus_meta"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"meta"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"payload")," keys must be present once extraction is complete."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "replace": {\n    "Bucket": "cumulus-bucket",\n    "Key": "my-large-event.json",\n    "TargetPath": "$"\n  },\n  "cumulus_meta": {}\n}\n')),(0,o.yg)("h2",{id:"cumulus-message-preparation"},"Cumulus Message Preparation"),(0,o.yg)("p",null,"The event coming into a Cumulus Task is assumed to be a Cumulus Message and should first be handled by the functions described below before being passed to the task application code."),(0,o.yg)("h3",{id:"preparation-step-1-fetch-remote-event"},"Preparation Step 1: Fetch remote event"),(0,o.yg)("p",null,"Fetch remote event will fetch the full event from S3 if the cumulus message includes a ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," key."),(0,o.yg)("p",null,'Once "my-large-event.json" is fetched from S3, it\'s returned from the fetch remote event function. If no "replace" key is present, the event passed to the fetch remote event function is assumed to be a complete Cumulus Message and returned as-is.'),(0,o.yg)("h4",{id:"preparation-step-2-parse-step-function-config-from-cma-configuration-parameters"},"Preparation Step 2: Parse step function config from CMA configuration parameters"),(0,o.yg)("p",null,"This step  determines what current task is being executed. Note this is different from what lambda or activity is being executed, because the same lambda or activity can be used for different tasks. The current task name is used to load the appropriate configuration from the Cumulus Message's 'task_config' configuration parameter."),(0,o.yg)("h4",{id:"preparation-step-3-load-nested-event"},"Preparation Step 3: Load nested event"),(0,o.yg)("p",null,"Using the config returned from the previous step, load nested event resolves\ntemplates for the final config and input to send to the task's application code."),(0,o.yg)("h2",{id:"task-application-code"},"Task Application Code"),(0,o.yg)("p",null,"After message prep, the message passed to the task application code is of the form:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "input": {},\n  "config": {}\n}\n')),(0,o.yg)("h2",{id:"create-next-message-functions"},"Create Next Message functions"),(0,o.yg)("p",null,"Whatever comes out of the task application code is used to construct an outgoing Cumulus Message."),(0,o.yg)("h3",{id:"create-next-message-step-1-assign-outputs"},"Create Next Message Step 1: Assign outputs"),(0,o.yg)("p",null,"The config loaded from the ",(0,o.yg)("strong",{parentName:"p"},"Fetch step function config")," step may have a ",(0,o.yg)("inlineCode",{parentName:"p"},"cumulus_message")," key. This can be used to \"dispatch\" fields from the task's application output to a destination in the final event output (via URL templating). Here's an example where the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"input.anykey")," would be dispatched as the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"payload.out")," in the final cumulus message:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "task_config": {\n    "bar": "baz",\n    "cumulus_message": {\n      "input": "{$.payload.input}",\n      "outputs": [\n        {\n          "source": "{$.input.anykey}",\n          "destination": "{$.payload.out}"\n        }\n      ]\n    }\n  },\n  "cumulus_meta": {\n    "task": "Example",\n    "message_source": "local",\n    "id": "id-1234"\n  },\n  "meta": {\n    "foo": "bar"\n  },\n  "payload": {\n    "input": {\n      "anykey": "anyvalue"\n    }\n  }\n}\n')),(0,o.yg)("h4",{id:"create-next-message-step-2-store-remote-event"},"Create Next Message Step 2: Store remote event"),(0,o.yg)("p",null," If the ",(0,o.yg)("inlineCode",{parentName:"p"},"ReplaceConfiguration")," parameter is set, the configured key's value  will be stored in S3 and the final output of the task will include a ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," key that contains configuration for a future step to extract the payload on S3 back into the Cumulus Message.   The ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," key identifies where the large event node has been stored in S3."))}d.isMDXComponent=!0},82144:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/cumulus-task-message-flow-845ed61295e118f2896fff9103f5ffce.png"}}]);
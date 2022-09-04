"use strict";(self.webpackChunkshiryoku=self.webpackChunkshiryoku||[]).push([[398],{2398:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var r=n(2791),i=n(4565),o=n(8916),a=n(277),s=n(6015),c=n(1413),u=n(4165),l=n(5861),d=n(885),p=n(9434),g=n(9854),h=n(5209),f=n(4162),m=n(9454),v=n(4259),w=n(4456),b=n(184),x=(0,a.ZP)(f.Z)({flexWrap:"wrap",flexDirection:"row",gap:2,marginTop:4,maxHeight:"200px",overflow:"auto",padding:1,"&::-webkit-scrollbar":{width:"0.2em"},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0,0,0,0.00)",webkitBoxShadow:"inset 0 0 6px rgba(0,0,0,0.00)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.1)",borderRadius:"4px"}}),Z=function(){var e=(0,w.T)(),t=(0,p.v9)((function(e){return e.app})).selectedTags,n=(0,r.useState)([]),o=(0,d.Z)(n,2),a=o[0],f=o[1],Z=function(t){return function(){e((0,v.Qt)(t))}};(0,r.useEffect)((function(){var e=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.Tags.getTags();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===a.length&&e()}),[a]),(0,r.useEffect)((function(){var n=function(){var n=(0,l.Z)((0,u.Z)().mark((function n(){var r;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.Z.Resources.getResources(void 0,void 0,t);case 2:r=n.sent,e((0,v.xb)(r));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();t.length>=0&&n()}),[t,e]);var j={backgroundColor:"#0288d180","&:hover":{backgroundColor:"#0288d1 !important"}};return(0,b.jsxs)(s.Z,{children:[(0,b.jsxs)(i.Z,{mt:2,fontWeight:600,variant:"body2",children:[(0,b.jsx)(m.Z,{sx:{fontSize:"inherit"}})," Tags"," ",(0,b.jsxs)(i.Z,{component:"span",variant:"subtitle2",children:["| Click to filter resources"," "]}),t.length>0&&(0,b.jsx)(h.Z,{label:"Clear All Tags",size:"small",color:"error",variant:"outlined",sx:{transform:"scale(0.8)"},onClick:function(){e((0,v.t8)())}})]}),(0,b.jsx)(x,{children:a.length>0&&a.map((function(n){return(0,b.jsx)(h.Z,{label:n,sx:(0,c.Z)({cursor:"pointer",transition:"all 200ms","&:hover":{},"@media(min-width: 800px)":{margin:"0.1em"}},t.includes(n)?j:{}),size:"small",variant:"outlined",onClick:function(){return function(t){e((0,v.Qt)(t))}(n)},onDelete:t.includes(n)?Z(n):void 0},n)}))})]})},j=n(5548),y=n(6283),k=n(5403),S=function(){var e=(0,w.T)(),t=(0,p.v9)((function(e){return e.app})).selectedTags,n=(0,r.useState)(""),i=(0,d.Z)(n,2),o=i[0],a=i[1];return(0,r.useEffect)((function(){var n=function(){var n=(0,l.Z)((0,u.Z)().mark((function n(r){var i;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.Z.Resources.getResources(void 0,void 0,t,r);case 2:i=n.sent,e((0,v.xb)(i));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();o&&n(o),o||n()}),[o,e,t]),(0,b.jsxs)(s.Z,{mb:2,children:[(0,b.jsx)(j.Z,{type:"text",variant:"outlined",fullWidth:!0,label:"Search",placeholder:"Search for awesome resources...",value:o,onChange:function(e){return a(e.target.value)},InputProps:{endAdornment:(0,b.jsx)(k.Z,{})}}),o&&(0,b.jsx)(y.Z,{mt:0,fontSize:8,sx:{cursor:"pointer"},onClick:function(){return a("")},children:"Clear search"})]})},C=n(3504),T=n(4585),R=n(5953),P=n(5152),N=n(294),E=n(3978),I=n(3811),O=n(6650),W=n(580),z=n(5758),A=n(983),J=n(194),L=(0,a.ZP)(R.ZP)({}),B=(0,a.ZP)(O.Z)({padding:"1em",height:"100%"}),G=(0,a.ZP)(s.Z)({display:"flex",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",marginLeft:"auto"}),U=function(e){var t,n=(0,w.T)(),r=function(){var t=(0,l.Z)((0,u.Z)().mark((function t(){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.clipboard.writeText(e.url);case 3:n((0,v.OV)({message:"".concat(e.name," URL Copied to Clipboard!"),type:"success"})),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),n((0,v.OV)({message:"Unable to copy URL, try again later.",type:"error"}));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,l.Z)((0,u.Z)().mark((function t(){var n;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={url:e.url,title:"".concat(e.name," from Shiryoku by Kunal Keshan"),text:e.description},t.next=4,navigator.share(n);case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return(0,b.jsx)(L,{item:!0,xs:12,lg:5,children:(0,b.jsxs)(B,{elevation:3,children:[(0,b.jsxs)(s.Z,{display:"flex",alignItems:"center",width:"100%",flexWrap:"wrap",children:[(0,b.jsx)(P.Z,{title:"Click to Copy URL",sx:{cursor:"pointer !important"},children:(0,b.jsx)(N.Z,{badgeContent:(0,b.jsx)(J.Z,{sx:{backgroundColor:"#1976D290",borderRadius:"50%",padding:"0.2em"}}),overlap:"circular",anchorOrigin:{vertical:"top",horizontal:"left"},onClick:r,children:(0,b.jsx)(E.Z,{src:null!==(t=null===e||void 0===e?void 0:e.icon)&&void 0!==t?t:null===e||void 0===e?void 0:e.name,sx:{mr:2,cursor:"pointer"}})})}),(0,b.jsxs)("div",{children:[(0,b.jsx)(i.Z,{variant:"body1",fontWeight:600,maxWidth:"200px",children:e.name}),(0,b.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",width:"20ch"},children:(0,b.jsx)(P.Z,{title:e.description,arrow:!0,followCursor:!0,placement:"bottom",children:(0,b.jsx)(i.Z,{variant:"caption",noWrap:!0,children:e.description})})})]}),(0,b.jsxs)(G,{children:[(0,b.jsx)(P.Z,{title:"Visit Website",arrow:!0,followCursor:!0,placement:"bottom",children:(0,b.jsx)(I.Z,{href:e.url,target:"_blank",children:(0,b.jsx)(A.Z,{})})}),e.github&&(0,b.jsx)(P.Z,{title:"View Open Source Code",arrow:!0,followCursor:!0,placement:"bottom",children:(0,b.jsx)(I.Z,{href:null===e||void 0===e?void 0:e.github,target:"_blank",children:(0,b.jsx)(z.Z,{})})}),(0,b.jsx)(P.Z,{title:"Share ".concat(e.name),arrow:!0,followCursor:!0,placement:"bottom",children:(0,b.jsx)(I.Z,{onClick:o,children:(0,b.jsx)(W.Z,{})})})]})]}),(0,b.jsx)(f.Z,{direction:"row",flexWrap:"wrap",mt:2,children:e.tags.map((function(e){return(0,b.jsx)(h.Z,{label:e,size:"small",sx:{fontSize:"0.6rem",padding:"0.1em 0.2em",fontWeight:"bold",margin:"0.2em"}},e)}))})]})})},D=(0,a.ZP)(s.Z)({width:"65%",padding:"0.5em","@media(max-width: 800px)":{width:"100%"}}),M=(0,a.ZP)(R.ZP)({gap:4}),V=function(){var e=(0,w.T)(),t=(0,p.v9)((function(e){return e.app})).currentResources,n=(0,r.useState)({page:1,limit:20,total:0}),o=(0,d.Z)(n,2),a=o[0],h=o[1];(0,r.useEffect)((function(){var e=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.Resources.getTotalPages();case 2:t=e.sent,h((function(e){return(0,c.Z)((0,c.Z)({},e),{},{total:t})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===a.total&&e()}),[a.total]),(0,r.useEffect)((function(){var n=function(){var t=(0,l.Z)((0,u.Z)().mark((function t(){var n;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.Z.Resources.getResources(a.page,void 0);case 2:n=t.sent,e((0,v.xb)(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(0===t.length||a.page>=1)&&n()}),[a.page]);return(0,b.jsxs)(D,{children:[(0,b.jsx)(M,{container:!0,spacing:1,gridTemplateColumns:{xs:2},children:(null===t||void 0===t?void 0:t.length)>0?t.map((function(e,t){return(0,b.jsx)(U,(0,c.Z)({},e),t)})):(0,b.jsx)(s.Z,{children:(0,b.jsxs)(i.Z,{variant:"h5",textAlign:"center",children:["\ud83d\ude22 No Resources Found for Selected Tags or Search. Know some Resources?"," ",(0,b.jsx)(C.rU,{to:"/contribute",children:"Contribute now!"})]})})}),(0,b.jsx)(f.Z,{spacing:2,mt:2,children:(0,b.jsx)(T.Z,{count:a.total,page:a.page,onChange:function(e,t){h((function(e){return(0,c.Z)((0,c.Z)({},e),{},{page:t})}))}})})]})},_=(0,a.ZP)(s.Z)({width:"100%"}),q=(0,a.ZP)(s.Z)({width:"100%",height:"100%",display:"flex",marginTop:"1em",gap:"1em","@media(max-width: 800px)":{flexDirection:"column-reverse"}}),F=(0,a.ZP)(s.Z)({width:"35%",borderRadius:"8px",background:"#e3f2fd",padding:"1em",height:"fit-content","@media(max-width: 800px)":{width:"100%"},"@media(min-width:800px)":{position:"sticky",top:"100px"}}),H=function(){return(0,b.jsxs)(_,{children:[(0,b.jsxs)(i.Z,{variant:"h6",noWrap:!0,children:["Resources"," ",(0,b.jsx)(i.Z,{variant:"caption",component:"span",children:"that will blow your mind!"})]}),(0,b.jsx)(o.Z,{variant:"fullWidth"}),(0,b.jsxs)(q,{children:[(0,b.jsx)(V,{}),(0,b.jsxs)(F,{id:"cta",children:[(0,b.jsx)(S,{}),(0,b.jsx)(o.Z,{variant:"fullWidth"}),(0,b.jsx)(Z,{})]})]})]})}},9854:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(4165),i=n(5861),o=n(5671),a=n(3144),s=JSON.parse('["learning","programming","web development","coding","frontend","backend","cloud computing","finance","notes","study","college","ece","cse","career","interview","graphic design","ui/ux","srmist","html","css","javascript","typescript","react","cpp","github","node","security","aptitude","courses","free","all","certification","practice","open source","documentation","youtube","framework","jsx","tools","productivity","typing","gadgets","databases","mongodb","sql","redis","library"]'),c=JSON.parse('[{"name":"30 Seconds Of Interviews","description":"A curated collection of common interview questions to help you prepare for your next interview.","url":"https://30secondsofinterviews.org/","github":"https://github.com/30-seconds/30-seconds-of-interviews","icon":"https://30secondsofinterviews.org/30s-favicon.107cc86d.ico","tags":["web development","html","css","javascript","react","node","security","career","interview","node","programming","coding","frontend","backend","github","learning","github","free"]},{"name":"freeCodeCamp","description":"freeCodeCamp is a community of millions of people around the world who are learning to code together. You can learn to code with free online courses, programming projects, and interview preparation for developer jobs.","url":"https://www.freecodecamp.org/","github":"https://github.com/freeCodeCamp","icon":"https://www.freecodecamp.org/icons/icon-512x512.png?v=6cba562cbd10e31af925a976f3db73f7","tags":["career","programming","web development","javascript","frontend","backend","coding","learning","courses","github","all","free","certification"]},{"name":"The Odin Project","description":"The Odin Project provides a free open source coding curriculum that can be taken entirely online.","url":"https://www.theodinproject.com/","github":"https://github.com/TheOdinProject","icon":"https://www.theodinproject.com/favicon-32x32.png","tags":["career","programming","web development","javascript","frontend","backend","coding","learning","courses","all","free","github","certification"]},{"name":"CSSBattle","description":"CSSBattle is an online CSS Code Golfing game. Here, players from all around the world try to visually replicate \\"Targets\\" in smallest possible CSS code and battle it out to get to the top of the leaderboard.","url":"https://cssbattle.dev/","icon":"https://cssbattle.dev/images/logo-square.png","tags":["programming","web development","javascript","frontend","coding","css","html","learning","free","practice"]},{"name":"B. Tech ECE Notes","description":"Collection of all notes of SRMIST B.Tech Electronics and Communications Dept. for the academic year: 2020-24.","url":"https://notes.kunalkeshan.dev","github":"https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24","icon":"https://notes.kunalkeshan.dev/logo192.png","tags":["open source","ece","github","free","notes","srmist","college","study"]},{"name":"CSS Grid Garden","description":"A game for learning CSS grid layout","url":"https://cssgridgarden.com/","github":"https://github.com/thomaspark/gridgarden/","icon":"https://raw.githubusercontent.com/thomaspark/gridgarden/master/favicon.ico","tags":["open source","css","github","frontend","web development","learning","study","free","practice"]},{"name":"Learn Git Branching","description":"An interactive Git visualization tool to educate and challenge!","url":"https://learngitbranching.js.org/","github":"https://github.com/pcottle/learnGitBranching","icon":"https://learngitbranching.js.org/assets/favicon.ico","tags":["open source","css","github","frontend","web development","learning","study","free","practice","git"]},{"name":"10 Fast Fingers (Typing Tests)","description":"Test & Improve your Typing Speed with our free Typing Games","url":"https://10fastfingers.com/","icon":"https://pbs.twimg.com/profile_images/517343049085485056/6ll-wjg5_400x400.png","tags":["practice","productivity","tools","typing","programming","coding","free"]},{"name":"Checklist Design","description":"A collection of the best design practices.","url":"https://www.checklist.design/","icon":"https://uploads-ssl.webflow.com/5ba4b3c973b5d218459f7e6f/5f33ce6795b617814aa43eb1_checklist-favicon.png","tags":["practice","productivity","tools","graphic design","ui/ux","frontend","free","html"]},{"name":"React JS Documentation","description":"A JavaScript library for building user interfaces.","url":"https://reactjs.org/","github":"https://github.com/facebook/react","icon":"https://reactjs.org/logo-180x180.png","tags":["javascript","documentation","programming","coding","github","open source","typescript","framework","web development","jsx","react"]},{"name":"Coursera","description":"Coursera is the global online learning platform that offers anyone, anywhere access to online courses and degrees from world-class universities and companies.","url":"https://www.coursera.org/","icon":"https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/android-chrome-v2-192x192.png","tags":["career","programming","coding","learning","courses","all","certification","college"]},{"name":"Node JS","description":"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.","url":"https://nodejs.org/","icon":"https://nodejs.org/static/images/favicons/favicon-32x32.png","tags":["library","web development","tools","typing","programming","coding","backend","node","frontend","documentation","open source"]},{"name":"NPTEL (National Programme on Technology Enhanced Learning)","description":"NPTEL is a joint venture of the IITs and IISc, funded by the Ministry of Education (MoE) Government of India, and was launched in 2003.","url":"https://nptel.ac.in/","icon":"https://www.mooclab.club/showcase/nptel.174/cover-image","tags":["free","notes","college","study","notes","courses","certification"]},{"name":"edX","description":"edX is an American massive open online course provider created by Harvard and MIT.","url":"https://www.edx.org/","icon":"https://www.edx.org/favicon.ico","tags":["career","programming","coding","learning","courses","all","certification","college"]},{"name":"Udemy","description":"Udemy is an online learning and teaching marketplace with over 204000 courses and 54 million students.","url":"https://www.udemy.com/","icon":"https://www.udemy.com/staticx/udemy/images/v8/favicon-32x32.png","tags":["career","programming","coding","learning","courses","all","certification","college"]},{"name":"Varsity by Zerodha","description":"Varsity by Zerodha - Markets, Trading, and Investing Simplified.","url":"https://zerodha.com/varsity/","icon":"https://zerodha.com/varsity/wp-content/themes/varsity/images/favicon.png","tags":["learning","free","finance"]}]'),u=[],l=localStorage.getItem("readNotifications")?JSON.parse(localStorage.getItem("readNotifications")||"{}"):[],d=function(){function e(){(0,o.Z)(this,e)}return(0,a.Z)(e,null,[{key:"Resources",get:function(){var e={};return e.getResources=(0,i.Z)((0,r.Z)().mark((function e(){var t,n,i,o,a,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:1,n=s.length>1&&void 0!==s[1]?s[1]:20,i=s.length>2&&void 0!==s[2]?s[2]:[],o=s.length>3?s[3]:void 0,a=c,o&&(a=a.filter((function(e){o=o.replace(/([^a-zA-z0-9]+)/g,"");var t=new RegExp(o,"ig");return t.test(e.name)||t.test(e.description)||t.test(e.url)}))),(null===i||void 0===i?void 0:i.length)>0&&(a=a.filter((function(e){return e.tags.find((function(e){return i.includes(e)}))}))),e.abrupt("return",a.slice((t-1)*n,t*n));case 8:case"end":return e.stop()}}),e)}))),e.getSingleResource=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.find((function(e){return new URL(e.url).hostname.split(".").shift()===t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.getTotalPages=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Math.ceil(c.length/20));case 1:case"end":return e.stop()}}),e)}))),e}},{key:"Tags",get:function(){var e={};return e.getTags=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s);case 1:case"end":return e.stop()}}),e)}))),e}},{key:"Notifications",get:function(){var e={};return e.getAllNotification=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u.forEach((function(e){e.read=!1,l.find((function(t){return t===e.id}))&&(e.read=!0)})),e.abrupt("return",u);case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))),e.updateReadNotifications=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=u.find((function(e){return e.id===t}))){e.next=4;break}throw new Error("Notification with give Id does not exist!");case 4:if(!l.find((function(e){return e===t}))){e.next=6;break}return e.abrupt("return");case 6:return l.push(n.id),localStorage.setItem("readNotifications",JSON.stringify(l)),e.abrupt("return","Notification marked as read!");case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),e}}]),e}(),p=d}}]);
//# sourceMappingURL=398.9e0e54b7.chunk.js.map
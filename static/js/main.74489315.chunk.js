(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{10:function(t,e,s){},11:function(t,e,s){"use strict";s.r(e);var c=s(1),n=s.n(c),a=s(4),i=s.n(a),r=s(2),j=s(0);var o=function(t){return Object(j.jsxs)("div",{children:[0===t.time.h?"":Object(j.jsx)("span",{children:t.time.h>=10?t.time.h:"0"+t.time.h}),"\xa0\xa0",Object(j.jsx)("span",{children:t.time.m>=10?t.time.m:"0"+t.time.m}),"\xa0:\xa0",Object(j.jsx)("span",{children:t.time.s>=10?t.time.s:"0"+t.time.s}),"\xa0:\xa0",Object(j.jsx)("span",{children:t.time.ms>=10?t.time.ms:"0"+t.time.ms})]})};var b=function(t){return Object(j.jsxs)("div",{children:[0===t.status?Object(j.jsx)("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:t.start,children:"Start"}):"",1===t.status?Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"stopwatch-btn stopwatch-btn-red",onClick:t.stop,children:"Stop"}),Object(j.jsx)("button",{className:"stopwatch-btn stopwatch-btn-yel",onClick:t.reset,children:"Reset"})]}):"",2===t.status?Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:t.resume,children:"Resume"}),Object(j.jsx)("button",{className:"stopwatch-btn stopwatch-btn-yel",onClick:t.reset,children:"Reset"})]}):""]})};s(10);var h=function(){var t=Object(c.useState)({ms:0,s:0,m:0,h:0}),e=Object(r.a)(t,2),s=e[0],n=e[1],a=Object(c.useState)(),i=Object(r.a)(a,2),h=i[0],m=i[1],l=Object(c.useState)(0),u=Object(r.a)(l,2),d=u[0],O=u[1],p=function(){k(),O(1),m(setInterval(k,10))},x=s.ms,v=s.s,w=s.m,f=s.h,k=function(){return 60===w&&(f++,w=0),60===v&&(w++,v=0),100===x&&(v++,x=0),x++,n({ms:x,s:v,m:w,h:f})};return Object(j.jsx)("div",{className:"main-section",children:Object(j.jsx)("div",{className:"clock-holder",children:Object(j.jsxs)("div",{className:"stopwatch",children:[Object(j.jsx)(o,{time:s}),Object(j.jsx)(b,{status:d,resume:function(){return p()},reset:function(){clearInterval(h),O(0),n({ms:0,s:0,m:0,h:0})},stop:function(){clearInterval(h),O(2)},start:p})]})})})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.74489315.chunk.js.map
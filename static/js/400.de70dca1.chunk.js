"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[400],{713:function(e,t,n){n.d(t,{GC:function(){return p},M1:function(){return v},TP:function(){return l},UF:function(){return s},jP:function(){return g}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="ca6a18deac59aabbceac0a2518e15600";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},400:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(713),s=n(791),o=n(87),p=n(184),f=function(e){var t=e.setSearch,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({movies:u}),c("")},children:[(0,p.jsx)("input",{type:"text",name:"search",placeholder:"Search Movies",value:u,onChange:function(e){c(e.target.value)}}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})},l=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],l=(0,o.lr)(),h=(0,a.Z)(l,2),v=h[0],d=h[1],g=v.get("movies");return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,i.GC)(g);case 5:t=e.sent,u(t.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,p.jsxs)("main",{children:[(0,p.jsx)(f,{setSearch:d}),n.length>0&&n.map((function(e){var t=e.id,n=e.original_title;return(0,p.jsx)("ul",{children:(0,p.jsx)("li",{children:(0,p.jsx)(o.OL,{to:"".concat(t),children:n})})},t)}))]})}}}]);
//# sourceMappingURL=400.de70dca1.chunk.js.map
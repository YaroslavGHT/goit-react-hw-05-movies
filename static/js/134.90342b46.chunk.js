"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{339:function(e,t,r){r(791);var n=r(689),a=r(87),i=r(289),c=r(184);t.Z=function(e){var t=e.lists,r=(0,n.TH)();return(0,c.jsx)(c.Fragment,{children:t.map((function(e){return(0,c.jsx)("li",{className:i.Z.listItem,children:(0,c.jsx)(a.rU,{state:{from:r},to:"/movies/".concat(e.id),children:e.title||e.name})},e.id)}))})}},134:function(e,t,r){r.r(t);var n=r(861),a=r(439),i=r(757),c=r.n(i),u=r(791),s=r(87),o=r(690),h=r(339),l=r(289),p=r(184);t.default=function(){var e=(0,s.lr)(),t=(0,a.Z)(e,2),r=t[0],i=t[1],m=(0,u.useState)([]),d=(0,a.Z)(m,2),v=d[0],f=d[1],I=r.get("sQuery");(0,u.useEffect)((function(){if(null!==I){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.oD)(I);case 3:t=e.sent,f(t.results),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[I]);return(0,p.jsxs)("div",{className:l.Z.main,children:[(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchInput.value;i({sQuery:t})},children:[(0,p.jsx)("input",{type:"text",name:"searchInput",defaultValue:I,required:!0}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),v&&v.length>0?(0,p.jsx)("ul",{children:(0,p.jsx)(h.Z,{lists:v})}):(0,p.jsx)("p",{children:"Enter what you want find"})]})}},690:function(e,t,r){r.d(t,{$u:function(){return d},lX:function(){return p},mu:function(){return f},oD:function(){return s},zg:function(){return h}});var n=r(861),a=r(757),i=r.n(a),c=r(340),u={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:"searchQuery",include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmZmEwOWM1OGUxMWRkMDkxOWIwOWVhMGVlNzY3YyIsInN1YiI6IjY1OWRhMmRlOGU4ZDMwMDI1ZTEyMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TauG2kaZCWmE6tcTttPv005Z5SYBlyhLi3nQiU1XSEM"}},s=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.params.query=t,e.prev=1,e.next=4,c.Z.request(u);case 4:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),o={method:"GET",url:"https://api.themoviedb.org/3/trending/all/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmZmEwOWM1OGUxMWRkMDkxOWIwOWVhMGVlNzY3YyIsInN1YiI6IjY1OWRhMmRlOGU4ZDMwMDI1ZTEyMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TauG2kaZCWmE6tcTttPv005Z5SYBlyhLi3nQiU1XSEM"}},h=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.request(o);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l={method:"GET",url:"https://api.themoviedb.org/3/movie/movie_id",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmZmEwOWM1OGUxMWRkMDkxOWIwOWVhMGVlNzY3YyIsInN1YiI6IjY1OWRhMmRlOGU4ZDMwMDI1ZTEyMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TauG2kaZCWmE6tcTttPv005Z5SYBlyhLi3nQiU1XSEM"}},p=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.url="https://api.themoviedb.org/3/movie/".concat(t),e.prev=1,e.next=4,c.Z.request(l);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),m={method:"GET",url:"https://api.themoviedb.org/3/movie/{movieId}/credits",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmZmEwOWM1OGUxMWRkMDkxOWIwOWVhMGVlNzY3YyIsInN1YiI6IjY1OWRhMmRlOGU4ZDMwMDI1ZTEyMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TauG2kaZCWmE6tcTttPv005Z5SYBlyhLi3nQiU1XSEM"}},d=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.url="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),e.prev=1,e.next=4,c.Z.request(m);case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),v={method:"GET",url:"https://api.themoviedb.org/3/movie/movie_id/reviews",params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmZmEwOWM1OGUxMWRkMDkxOWIwOWVhMGVlNzY3YyIsInN1YiI6IjY1OWRhMmRlOGU4ZDMwMDI1ZTEyMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TauG2kaZCWmE6tcTttPv005Z5SYBlyhLi3nQiU1XSEM"}},f=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.url="https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),e.prev=1,e.next=4,c.Z.request(v);case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.90342b46.chunk.js.map
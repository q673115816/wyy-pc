(self.webpackChunkwyy=self.webpackChunkwyy||[]).push([[5268],{772:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d}),n(6992),n(1539),n(8674),n(8783),n(3948),n(1249),n(8309);var l=n(3804),a=n.n(l),m=n(847),r=n(8157),o=(0,l.lazy)((function(){return Promise.all([n.e(233),n.e(1216),n.e(6741)]).then(n.bind(n,6415))})),i=(0,l.lazy)((function(){return Promise.all([n.e(233),n.e(1216),n.e(7779)]).then(n.bind(n,8648))})),h=(0,l.lazy)((function(){return Promise.all([n.e(233),n.e(1216),n.e(1147)]).then(n.bind(n,7233))})),c=(0,l.lazy)((function(){return Promise.all([n.e(233),n.e(1216),n.e(8071)]).then(n.bind(n,2431))})),s=(0,l.lazy)((function(){return Promise.all([n.e(233),n.e(1216),n.e(7174)]).then(n.bind(n,1986))})),u=[{to:"/home/recommend",path:"/home/recommend",name:"个性推荐",Children:o},{to:"/home/playlist",path:"/home/playlist",name:"歌单",Children:h},{to:"/home/dj",path:"/home/dj",name:"主播电台",Children:(0,l.lazy)((function(){return Promise.all([n.e(1216),n.e(9631)]).then(n.bind(n,6517))}))},{to:"/home/toplist",path:"/home/toplist",name:"排行榜",Children:i},{to:"/home/artist",path:"/home/artist",name:"歌手",Children:c},{to:"/home/newest",path:"/home/newest",name:"最新音乐",Children:s}];const d=(0,l.memo)((function(){return a().createElement("div",{className:"domHome flex flex-col h-full"},a().createElement("div",{className:"domHome_nav ui_header text-base space-x-5"},u.map((function(e){var t=e.to,n=e.name;return a().createElement(m.NavLink,{className:"domHome_nav_link",activeClassName:"text-xl font-bold ui_underline",to:t,key:n},n)}))),a().createElement(l.Suspense,{fallback:a().createElement("div",{className:"flex-center w-full h-full"},a().createElement(r.Z,null))},a().createElement(m.Switch,null,u.map((function(e){var t=e.path,n=e.name,l=e.Children;return a().createElement(m.Route,{path:t,key:n},a().createElement(l,null))})),a().createElement(m.Redirect,{to:"/home/recommend"}))))}))}}]);
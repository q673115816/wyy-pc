(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[5268],{5423:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p}),n(6992),n(1539),n(8674),n(8783),n(3948),n(1249),n(8309);var a=n(3804),l=n.n(a),m=n(847),o=n(4849),r=n(7820),i=(0,a.lazy)((function(){return Promise.all([n.e(233),n.e(1216),n.e(6741)]).then(n.bind(n,2635))})),h=(0,a.lazy)((function(){return Promise.all([n.e(233),n.e(1216),n.e(7779)]).then(n.bind(n,9622))})),c=(0,a.lazy)((function(){return Promise.all([n.e(233),n.e(1216),n.e(1147)]).then(n.bind(n,1917))})),s=(0,a.lazy)((function(){return Promise.all([n.e(233),n.e(1216),n.e(8071)]).then(n.bind(n,2234))})),u=(0,a.lazy)((function(){return Promise.all([n.e(233),n.e(1216),n.e(7174)]).then(n.bind(n,305))})),d=[{to:"/home/recommend",path:"/home/recommend",name:"个性推荐",Children:i},{to:"/home/playlist",path:"/home/playlist",name:"歌单",Children:c},{to:"/home/dj",path:"/home/dj",name:"主播电台",Children:(0,a.lazy)((function(){return Promise.all([n.e(1216),n.e(9631)]).then(n.bind(n,9206))}))},{to:"/home/toplist",path:"/home/toplist",name:"排行榜",Children:h},{to:"/home/artist",path:"/home/artist",name:"歌手",Children:s},{to:"/home/newest",path:"/home/newest",name:"最新音乐",Children:u}];const p=(0,a.memo)((function(){return l().createElement("div",{className:"domHome flex flex-col h-full"},l().createElement("div",{className:"domHome_nav ui_header text-base space-x-5"},d.map((function(e){var t=e.to,n=e.name;return l().createElement(m.NavLink,{className:"domHome_nav_link",activeClassName:"text-xl font-bold ui_underline",to:t,key:n},n)}))),l().createElement(a.Suspense,{fallback:l().createElement("div",{className:"flex-center w-full h-full"},l().createElement(o.Z,null))},l().createElement(m.Switch,null,d.map((function(e){var t=e.path,n=e.name,a=e.Children;return l().createElement(m.Route,{path:t,key:n},(0,r.Z)(a))})),l().createElement(m.Redirect,{to:"/home/recommend"}))))}))}}]);
(self.webpackChunkwyy=self.webpackChunkwyy||[]).push([[174],{4252:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>H});var n=a(3804),s=a.n(n),l=a(847),r=a(2137),c=a(9351),m=a(7757),o=a.n(m),i=(a(3112),a(8309),a(1249),a(7941),a(7484)),u=a.n(i),d=a(5325),E=a(6955),p=a(5200),v=a(4184),_=a.n(v),f=a(6091),N={全部:0,华语:7,欧美:96,韩国:16,日本:8},w=(0,n.memo)((function(e){var t=e.item,a=e.index;return s().createElement("div",{className:_()("item h-20 py-2.5 flex items-center px-8 text-sm",{"bg-gray-50":a%2==0})},s().createElement("span",{className:"ranking text-gray-300 w-8"},String(a+1).padStart(2,0)),s().createElement("button",{type:"button",className:"cover w-16 relative rounded overflow-hidden ui_aspect-ratio-1/1"},s().createElement("img",{className:"",src:"".concat(t.album.blurPicUrl,"?param=100y100"),alt:""}),s().createElement("i",{className:"ico absolute w-6 h-6 m-auto flex-center inset-0 ui_themeColor bg-white bg-opacity-90 rounded-full"},s().createElement(p.IconPlayerPlay,{size:14,className:"fill-current"}))),s().createElement("span",{className:"name px-2.5 w-0 flex items-center flex-auto"},s().createElement("div",{className:"truncate"},t.name),s().createElement(f.Z,{item:t,mv:t.mvid})),s().createElement("span",{className:"artists truncate"},t.artists.map((function(e,t){return s().createElement("span",{key:e.id},t>0&&" / ",s().createElement(l.Link,{to:"/artist/".concat(e.id),className:"ui_text_gray_hover"},e.name))}))),s().createElement("span",{className:"album truncate"},s().createElement(l.Link,{to:"/playlist/album/".concat(t.album.id),className:"ui_text_gray_hover"},t.album.name)),s().createElement("span",{className:"duration text-gray-500 text-right"},u()(t.duration).format("mm:ss")))})),b=(0,n.memo)((function(){console.log("song main");var e=(0,l.useParams)().type,t=(0,n.useState)([]),a=(0,c.Z)(t,2),m=a[0],i=a[1],u=function(){var t=(0,r.Z)(o().mark((function t(){var a,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,E.nq)({type:N[e]});case 3:a=t.sent,n=a.data,i(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.warn(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return(0,n.useEffect)((function(){u()}),[e]),s().createElement("div",{className:"domHome_newest_song_list"},m.map((function(e,t){return s().createElement(w,{key:e.id,item:e,index:t})})))}));const y=(0,n.memo)((function(){return s().createElement(s().Fragment,null,s().createElement("div",{className:"domHome_newest_sub_nav"},Object.keys(N).map((function(e){return s().createElement(l.NavLink,{key:e,className:"domHome_newest_sub_nav_link",activeClassName:"on",to:"/home/newest/song/".concat(e)},e)})),s().createElement("div",{className:"domHome_newest_sub_control_center space-x-2"},s().createElement("span",{className:"playAll flex-center ui_theme_bg_color text-white rounded-full px-2 py-0.5"},s().createElement(p.IconPlayerPlay,{size:16,stroke:1,className:"fill-current"}),"播放全部"),s().createElement("span",{className:"subAll flex-center rounded-full border px-2 py-0.5"},s().createElement(p.IconFolderPlus,{size:16,stroke:1}),"收藏全部"))),s().createElement(b,null))}));a(7042);var h=a(1216),k=a(7253),g=a(801),x=[{name:"全部",code:"ALL"},{name:"华语",code:"ZH"},{name:"欧美",code:"EA"},{name:"韩国",code:"KR"},{name:"日本",code:"JP"}],L=function(e){var t=e.item;return s().createElement("div",{className:"item"},s().createElement("div",{className:"cover rounded overflow-hidden"},s().createElement(l.Link,{to:"/playlist/album/".concat(t.id)},s().createElement(h.ZP,{overflow:!0},s().createElement("img",{className:"ui_containimg",src:"".concat(t.blurPicUrl,"?param=200y200"),alt:""})))),s().createElement("div",{className:"name text-sm ui_ellipse mt-2"},s().createElement(l.Link,{to:"/playlist/album/".concat(t.id)},s().createElement("span",{className:"ui_text_black_hover"},t.name)," ",t.alias.length>0&&s().createElement("span",{className:"text-gray-400"},"(",t.alias,")"),t.transNames&&s().createElement("span",null,t.transNames))),s().createElement("div",{className:"artist mt-2"},s().createElement(l.Link,{to:"/artist/".concat(t.artist.id),key:t.artist.id,className:"ui_text_gray_hover"},t.artist.name)))};const D=function(){var e=(0,d.useDispatch)(),t=(0,d.useSelector)((function(e){return e.home.newest})),a=t.monthData,l=void 0===a?[]:a,m=t.weekData,i=void 0===m?[]:m,u=(0,n.useState)("ALL"),p=(0,c.Z)(u,2),v=p[0],f=p[1],N=(0,n.useState)("new"),w=(0,c.Z)(N,2),b=w[0],y=(w[1],(0,n.useState)((new Date).getFullYear())),h=(0,c.Z)(y,2),D=(h[0],h[1],(0,n.useState)((new Date).getMonth())),H=(0,c.Z)(D,2),C=(H[0],H[1],(0,n.useState)(0)),Z=(0,c.Z)(C,2),S=Z[0],P=(Z[1],(0,n.useState)("RECOMMEND")),A=(0,c.Z)(P,2),M=A[0],R=A[1],I=function(){var t=(0,r.Z)(o().mark((function t(){var a,n,s,l,r,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"RECOMMEND"!==M){t.next=10;break}return t.next=4,(0,E.ek)({area:v,type:b,limit:g.b9,offset:S});case 4:a=t.sent,n=a.monthData,s=a.weekData,e((0,k.TI)({monthData:n.slice(0,564),weekData:s})),t.next=16;break;case 10:return t.next=12,(0,E.ww)({area:v,type:b,limit:g.b9,offset:S});case 12:l=t.sent,r=l.albums,c=l.weekData,e((0,k.TI)({monthData:r,weekData:c}));case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(){return t.apply(this,arguments)}}();return(0,n.useEffect)((function(){I()}),[v,b,M]),s().createElement(s().Fragment,null,s().createElement("div",{className:"domHome_newest_sub_nav"},x.map((function(e){return s().createElement("button",{type:"button",key:e.name,className:_()("domHome_newest_sub_nav_link",{on:v===e.code}),onClick:function(){return f(e.code)}},e.name)})),s().createElement("div",{className:"domHome_newest_sub_control_center"},s().createElement("button",{type:"button",className:_()("showtype",{on:"RECOMMEND"===M}),onClick:function(){return R("RECOMMEND")}},"推荐"),s().createElement("button",{type:"button",className:_()("showtype",{on:"ALL"===M}),onClick:function(){return R("ALL")}},"全部"))),s().createElement("div",{className:"domHome_newest_album_list"},"ALL"===v&&"ALL"!==M&&i.length>0&&s().createElement("div",{className:"domHome_newest_album_sublist"},s().createElement("div",{className:"sign"},"本周",s().createElement("br",null),"新碟"),s().createElement("div",{className:"list grid grid-cols-4 gap-5"},i.map((function(e){return s().createElement(L,{item:e,key:e.id})})))),l.length>0&&s().createElement("div",{className:"domHome_newest_album_sublist"},s().createElement("div",{className:"sign"},"本月",s().createElement("br",null),"新碟"),s().createElement("div",{className:"list grid grid-cols-4 gap-5"},l.map((function(e){return s().createElement(L,{item:e,key:e.id})}))))))},H=(0,n.memo)((function(){return s().createElement("div",{className:"domHome_content overflow-auto max-h-full flex-auto"},s().createElement("div",{className:"domHome_newest"},s().createElement("div",{className:"domHome_newest_nav"},s().createElement(l.NavLink,{className:"domHome_newest_nav_link",activeClassName:"on",to:"/home/newest/song"},"新歌速递"),s().createElement(l.NavLink,{className:"domHome_newest_nav_link",activeClassName:"on",to:"/home/newest/album"},"新碟上架")),s().createElement(l.Switch,null,s().createElement(l.Route,{path:"/home/newest/song/:type"},s().createElement(y,null)),s().createElement(l.Route,{path:"/home/newest/album"},s().createElement(D,null)),s().createElement(l.Redirect,{to:"/home/newest/song/全部"}))))}))}}]);
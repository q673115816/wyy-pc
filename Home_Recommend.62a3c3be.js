(self.webpackChunkwyy=self.webpackChunkwyy||[]).push([[6741],{6686:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>O});var r=a(2137),n=a(9351),l=a(7757),c=a.n(l),o=(a(1249),a(7941),a(3290),a(6992),a(1539),a(8674),a(8783),a(3948),a(3804)),m=a.n(o),i=a(847),s=a(5325),u=a(6955),d=a(7253),v=a(9703),p=a(6209),f=a(5200),E=a(4600),g=a(7202),y=a(2042),N=a(4184),b=a.n(N),h=a(4584),x=a.n(h),w=a(205),_=["推荐歌单","独家放送","最新音乐","推荐MV","主播电台","看看"];const k=function(){var e=(0,s.useDispatch)(),t=(0,s.useSelector)((function(e){return e.mask})).dialogHomeOrderVisibility,a=(0,s.useSelector)((function(e){return e.setting})).homeOrder,r=(0,o.useState)(a),l=(0,n.Z)(r,2),c=l[0],i=l[1],u=(0,o.useState)(!1),d=(0,n.Z)(u,2),p=d[0],E=d[1],N=(0,o.useState)(""),h=(0,n.Z)(N,2),k=h[0],Z=h[1],P=(0,o.useState)(0),L=(0,n.Z)(P,2),C=L[0],H=L[1],S=(0,o.useState)(),z=(0,n.Z)(S,2),j=z[0],M=z[1],U=(0,o.useRef)(),I=(0,o.useRef)();return t?m().createElement(w.Z,{id:"dialogHomeOrder",title:"调整栏目顺序"},m().createElement("div",{className:"content"},m().createElement("div",{className:"tips mx-10 text-gray-400 mb-6 flex items-center"},m().createElement(f.IconBulb,{size:14}),m().createElement("span",{className:"ml-1"},"想调整首页栏目的顺序?按住右边的按钮拖动即可")),m().createElement("div",{className:"flex flex-col relative",ref:U},c.map((function(e,t){return m().createElement("div",{key:e,className:"h-12 text-base text-gray-500"},m().createElement("button",{type:"button",className:b()("w-full border-b hover:bg-gray-200 bg-white px-10 h-12 flex items-center",k===e&&"absolute shadow z-10"),style:k===e?{transform:"translate(0, ".concat(C,"px)")}:null,onMouseDown:function(a){return function(e,t,a){E(!0),Z(t),M(e.clientY),I.current=a}(a,e,t)}},e,m().createElement(f.IconMenu,{className:"ml-auto cursor-move"})))})),m().createElement(g.Z,{dragger:p,onMouseMove:function(e){if(p){var t=e.clientY-j,a=I.current;return!(a<=0&&t<=0)&&!(a>=c.length-1&&t>=0)&&(t>=36?(M((function(e){return e+48})),i(x()((function(e){var t=[e[a+1],e[a]];e[a]=t[0],e[a+1]=t[1]}))),I.current+=1,H(-12),!1):t<=-36?(M((function(e){return e-48})),i(x()((function(e){var t=[e[a-1],e[a]];e[a]=t[0],e[a-1]=t[1]}))),I.current-=1,H(12),!1):void H(t))}},onMouseUp:function(){E(!1),Z("")}})),m().createElement("div",{className:"flex-center py-4"},m().createElement("button",{onClick:function(){i(_)},type:"button",className:"underline text-gray-400 block"},"恢复默认排序")),m().createElement("div",{className:"flex-center pt-4 pb-8 space-x-2"},m().createElement("button",{onClick:function(){e((0,v.xJ)()),e((0,y.jt)(c))},type:"button",className:"rounded-full ui_theme_bg_color text-white h-8 w-20"},"完成"),m().createElement("button",{type:"button",className:"border rounded-full h-8 w-20",onClick:function(){return e((0,v.xJ)())}},"取消")))):null};var Z=a(8556),P=(a(7042),a(8309),a(7953)),L=a(2131),C=a(5594);const H=(0,o.memo)((function(e){var t=e.playlist,a=void 0===t?[]:t;return(0,s.useSelector)((function(e){return e.common})).isLogin?m().createElement("div",{className:"domHome_recommend_playlist grid gap-5 grid-cols-5 mt-4"},m().createElement("div",{className:"item"},m().createElement("div",{className:"cover border relative group rounded-lg overflow-hidden"},m().createElement(i.Link,{to:"/dailysong",className:"ui_aspect-ratio-1/1"},m().createElement("div",{className:"inner",style:{color:"var(--themeColor)"}},m().createElement(L.du,null))),m().createElement("button",{type:"button",className:"opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute m-2 right-0 bottom-0 rounded-full flex-center w-7 h-7 bg-white bg-opacity-90 ui_themeColor"},m().createElement(f.IconPlayerPlay,{size:16,className:"fill-current"}))),m().createElement("div",{className:"footer break-all text-sm mt-2"},m().createElement(i.Link,{to:"/dailysong"},"每日歌曲推荐"))),a.slice(0,9).map((function(e){return m().createElement("div",{key:e.id,className:"item"},m().createElement("div",{className:"cover relative group rounded-lg overflow-hidden border"},m().createElement(i.Link,{to:"/playlist/music/".concat(e.id),className:"ui_aspect-ratio-1/1"},m().createElement("img",{className:"ui_containimg",src:"".concat(e.picUrl,"?param=200y200"),alt:""}),m().createElement("div",{className:"absolute top-0 right-0 my-0.5 mx-2"},m().createElement("span",{className:"text-white flex-center"},m().createElement(f.IconPlayerPlay,{size:12}),(0,P.LU)(e.playcount)))),m().createElement(C.Z,{id:e.id,className:"opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute m-2 right-0 bottom-0 rounded-full flex-center w-7 h-7 bg-white bg-opacity-90 ui_themeColor"},m().createElement(f.IconPlayerPlay,{size:16,className:"fill-current"}))),m().createElement("div",{className:"footer break-all text-sm mt-2"},m().createElement(i.Link,{to:"/playlist/music/".concat(e.id),className:"name ui_ellipse"},e.name)))}))):m().createElement("div",null,"需要登录")}));var S=a(1216),z=a(292);const j=(0,o.memo)((function(e){var t=e.privatecontent,a=void 0===t?[]:t;return m().createElement("div",{className:"domHome_recommend_privatecontent grid grid-cols-3 gap-4 mt-4"},a.map((function(e){return m().createElement("div",{className:"item",key:e.id},m().createElement(z.Z,{item:e,type:"mv",schema:[["播放MV"]]},m().createElement("div",{className:"cover relative rounded overflow-hidden"},m().createElement(i.Link,{to:"/player/mv/".concat(e.id),className:"ui_aspect-ratio-16/9"},m().createElement("span",{className:"ico absolute top-2 left-2 rounded-full text-white w-6 h-6 bg-black bg-opacity-40 flex-center border border-gray-200"},m().createElement(f.IconPlayerPlay,{size:14,className:"fill-current"})),m().createElement(S.ZP,{overflow:!0,resize:!0},m().createElement("img",{className:"ui_containimg",src:e.sPicUrl,alt:""}))))),m().createElement("div",{className:"name text-sm loading-4 mt-2"},m().createElement(i.Link,{to:"/player/mv/".concat(e.id)},e.name)))})))}));var M=a(4808);const U=(0,o.memo)((function(e){var t=e.newsong,a=void 0===t?[]:t;return m().createElement("div",{className:"domHome_recommend_newsong grid gap-x-2 gap-y-4 mt-4 grid-cols-3 grid-rows-4 grid-flow-col"},a.map((function(e){return m().createElement("div",{key:e.id,className:"item flex hover:bg-gray-100 rounded overflow-hidden"},m().createElement("button",{type:"button",onClick:function(){return console.log(e.id)},className:"cover flex-none relative rounded overflow-hidden ui_aspect-ratio-1/1"},m().createElement("span",{className:"ico absolute text-red-500 bg-white rounded-full bg-opacity-90 inset-0 m-auto flex-center w-6 h-6"},m().createElement(f.IconPlayerPlay,{size:16,className:"fill-current"})),m().createElement(S.ZP,{overflow:!0,resize:!0},m().createElement("img",{className:"w-full h-full",src:"".concat(e.picUrl,"?param=50y50"),alt:""}))),m().createElement("div",{className:"content flex-auto flex flex-col w-0 px-2 py-1"},m().createElement("div",{className:"name text-sm truncate"},e.name),m().createElement("div",{className:"artist mt-1 flex"},m().createElement(M.Z,{item:e,sq:999e3===e.song.privilege.maxbr,mv:e.song.mvid}),m().createElement("div",{className:"truncate"},e.song.artists.map((function(e,t){return m().createElement("span",{key:e.id,className:"text-gray-400"},t>0&&" / ",m().createElement(i.Link,{to:"/artist/".concat(e.id),className:"ui_text_gray_hover"},e.name))}))))))})))})),I=(0,o.memo)((function(e){var t=e.djprogram,a=void 0===t?[]:t;return m().createElement("div",{className:"domHome_recommend_djprogram grid grid-cols-5 gap-5 mt-4"},a.slice(0,5).map((function(e){var t,a;return m().createElement("div",{className:"item",key:e.id},m().createElement("div",{className:"cover border relative rounded overflow-hidden "},m().createElement(i.Link,{to:"/playlist/dj/".concat(null===(t=e.program)||void 0===t||null===(a=t.radio)||void 0===a?void 0:a.id),className:"ui_aspect-ratio-1/1"},m().createElement(S.ZP,{overflow:!0,resize:!0},m().createElement("img",{className:"",src:"".concat(e.program.radio.picUrl,"?param=200y200"),alt:""})),m().createElement("div",{className:"mask absolute left-0 right-0 bottom-0 h-1/4 ui_linear_mask_bottom"}),m().createElement("div",{className:"absolute left-0 right-0 bottom-0 p-2"},m().createElement("div",{className:"text-white truncate"},e.program.radio.name)))),m().createElement("div",{className:"name leading-5 text-sm mt-2"},m().createElement(i.Link,{to:"/playlist/dj/".concat(e.program.radio.id),className:"text-gray-600 hover:text-black"},e.program.radio.rcmdText)))})))}));var V={推荐歌单:["/home/playlist",H],独家放送:["/exclusive",j],最新音乐:["/home/playlist",U],推荐MV:["/video/mvlist",(0,o.memo)((function(e){var t=e.mv,a=void 0===t?[]:t;return m().createElement("div",{className:"domHome_recommend_mv grid gap-x-5 grid-cols-3 mt-4"},a.map((function(e){return m().createElement("div",{className:"item",key:e.id},m().createElement(z.Z,{type:"mv",item:e,schema:[["评论","播放MV"],["收藏MV","分享","下载","复制链接"],["不感兴趣"]]},m().createElement("div",{className:"cover border relative overflow-hidden group rounded"},m().createElement(i.Link,{to:"/player/mv/".concat(e.id)},m().createElement("div",{className:"absolute top-0 left-0 right-0 h-1/4 ui_linear_mask_top"}),m().createElement("div",{className:"copywriter absolute top-0 left-0 right-0 bg-black bg-opacity-40 px-2 py-3 text-white transiton delay-200 duration-100 ease-in"},e.copywriter),m().createElement("div",{className:"playCount absolute top-0 right-0 px-2 py-1 text-white group-hover:opacity-0"},e.playCount),m().createElement(S.ZP,{overflow:!0,resize:!0},m().createElement("img",{className:"",src:e.picUrl,alt:""}))))),m().createElement("div",{className:"name truncate text-sm mt-2"},m().createElement(i.Link,{className:"ui_text_black_hover",to:"/player/mv/".concat(e.id)},e.name)),m().createElement("div",{className:"artist truncate mt-1"},e.artists.map((function(e,t){return m().createElement("span",{key:e.id,className:"text-gray-400"},t>0&&" / ",m().createElement(i.Link,{to:"/artist/:id",className:"ui_text_gray_hover"},e.name))}))))})))}))],主播电台:["/home/dj",I],看看:["https://look.163.com/hot?livetype=2",function(){return m().createElement("div",{className:"domHome_recommend_kankan grid grid-cols-4 gap-5"},Object.keys(Array(4).fill(0)).map((function(e){return m().createElement(E.Z,{key:e})})))}]};const O=(0,o.memo)((function(){var e=(0,s.useSelector)((function(e){return e.home.recommend})),t=e.banners,a=e.playlist,l=e.privatecontent,E=e.newsong,g=e.mv,y=e.djprogram,N=(0,s.useSelector)((function(e){return e.setting})).homeOrder,b=(0,o.useState)(!0),h=(0,n.Z)(b,2),x=h[0],w=h[1],_=(0,s.useDispatch)(),P=function(){var e=(0,r.Z)(c().mark((function e(){var t,a,r,l,o,m,i,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([(0,u.T8)(),(0,u.V3)({limit:9}),(0,u.bE)(),(0,u.yS)({limit:12}),(0,u.P2)(),(0,u.aW)()]);case 3:t=e.sent,a=(0,n.Z)(t,6),r=a[0].banners,l=a[1].recommend,o=a[2],m=a[3],i=a[4],s=a[5],_((0,d.iY)({banners:r,playlist:l,privatecontent:o.result,newsong:m.result,mv:i.result,djprogram:s.result})),w(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){P()}),[]),x?m().createElement("div",{className:"flex-center w-full h-full"},m().createElement(Z.Z,null)):m().createElement("div",{className:"domHome_content px-8 overflow-auto max-h-full flex-auto"},m().createElement("div",{className:"domHome_recommend ui_w1100"},m().createElement("div",{className:"domHome_item"},m().createElement(p.Z,{list:t,coverSrc:"imageUrl"})),N.map((function(e){var t=(0,n.Z)(V[e],2),r=t[0],c=t[1];return m().createElement("div",{className:"domHome_item mt-8",key:e},m().createElement(i.Link,{className:"domHome_recommend_subtitle h1 inline-flex items-center",to:r},e,m().createElement(f.IconChevronRight,{size:24})),m().createElement(c,{playlist:a,privatecontent:l,newsong:E,mv:g,djprogram:y}))})),m().createElement("div",{className:"domHome_recommend_diy"},m().createElement("div",{className:"text-gray-500"},"现在可以根据个人喜好，自由调整首页栏目顺序啦~"),m().createElement("br",null),m().createElement("button",{type:"button",className:"btn ui_themeColor border rounded-sm border-current",onClick:function(){return _((0,v.Ug)())}},"调整栏目顺序")),m().createElement(k,null)))}))}}]);
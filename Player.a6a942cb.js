(self.webpackChunkwyy=self.webpackChunkwyy||[]).push([[8265],{1665:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>re});var a=n(6814),r=n(2137),l=n(9351),o=n(7757),c=n.n(o),i=(n(1249),n(8309),n(86),n(9253),n(2526),n(1817),n(2222),n(3804)),s=n.n(i),u=n(847),d=n(4441),m=n(4184),f=n.n(m),v=n(7484),p=n.n(v),b=n(5200),h=n(7443),E=n(5380),y=n(9965),w=n(8804),g=n(3661),x=n(5325),k=n(8876),N=n(4020),D=n(8157),S=n(9703),Z=n(8176),I=n(6467),C=[["标清",!0],["高清（需要2云贝）",!1],["超清（需要5云贝）",!1]];const _=function(){var e=(0,x.useDispatch)(),t=(0,x.useSelector)((function(e){return e.mask})),n=t.callback;return t.dialogDownloadVideoVisibility?s().createElement(I.Z,{id:"dialogDownloadVideo",title:"选择下载清晰度"},s().createElement("div",{className:"content px-12 py-8"},s().createElement("div",{className:""},C.map((function(e){var t=(0,l.Z)(e,2),n=t[0];return t[1],s().createElement("div",{className:"flex items-center",key:n},s().createElement("label",{htmlFor:""},s().createElement(Z.Z,null),n))}))),s().createElement("div",{className:"flex justify-center mt-10 space-x-4"},s().createElement("button",{type:"button",className:"w-20 h-8 rounded-full ui_theme_bg_color text-white",onClick:function(){n(),e((0,S.xJ)())}},"确定"),s().createElement("button",{type:"button",className:"w-20 h-8 rounded-full border hover:bg-gray-50",onClick:function(){return e((0,S.xJ)())}},"取消")))):null};var P=n(1304);const T=function(e){var t=e.related,n=void 0===t?[]:t;return s().createElement("div",{className:"right",style:{width:280}},s().createElement("div",{className:"domVideoDetail_header flex items-center text-base font-bold"},"相关推荐"),s().createElement("div",{className:"domVideoDetail_related"},n.map((function(e){return s().createElement("div",{className:"item mb-2.5 flex",key:e.vid},s().createElement(u.Link,{to:"/player/".concat(d.$l[e.type],"/").concat(e.vid),className:"cover relative flex-none rounded overflow-hidden"},s().createElement("img",{className:"",src:e.coverUrl,alt:""}),s().createElement("div",{className:"playTime absolute top-0 right-0 mx-2 my-1 flex-center text-white"},s().createElement(b.IconPlayerPlay,{size:12}),(0,h.LU)(e.playTime)),s().createElement("div",{className:"durationms absolute bottom-0 right-0 mx-2 my-1 text-white"},p()(e.durationms).format("mm:ss"))),s().createElement("div",{className:"content p-2 flex-auto w-0"},s().createElement("div",{className:"title ui_ellipse"},s().createElement(u.Link,{title:e.title,to:"/player/".concat(d.$l[e.type],"/").concat(e.vid),className:"ui_text_black_hover"},0===e.type&&s().createElement(P.Z,{className:"inline-block"}),e.title)),s().createElement("div",{className:"username mt-2 truncate text-gray-400"},"by ",s().createElement(u.Link,{to:"/user/".concat(e.creator[0].userId),className:"ui_text_gray_hover"},e.creator[0].userName))))}))))};var L=n(9625),z=["标清","高清","超清","1080P","没这功能"],j=function(){var e=(0,i.useState)(!1),t=(0,l.Z)(e,2),n=t[0],a=t[1],r=(0,i.useState)("超清"),o=(0,l.Z)(r,2),c=o[0],u=o[1];return s().createElement("div",{className:"relative w-16"},s().createElement("button",{onClick:function(){return a(!n)},type:"button",className:"flex-center w-full group"},s().createElement(b.IconDeviceDesktop,{className:"text-gray-600 group-hover:text-gray-400",size:20})," ",s().createElement("span",{className:"text-gray-400"},c)),n&&s().createElement("div",{className:"absolute left-0 right-0 bottom-full border text-white divide-y divide-gray-400 transform -translate-y-4 bg-black bg-opacity-80 border-gray-400 text-center"},z.map((function(e){return s().createElement("button",{key:e,type:"button",className:"black w-full py-1",onClick:function(){return u(e),void a(!1)}},e)}))))};const M=function(){var e=(0,i.useContext)(q),t=e.handlechangeFull,n=e.full,a=e.handleChangePlay,r=e.play,l=e.currentTime,o=e.duration;return s().createElement("div",{className:"h-10 flex-none bg-black flex items-center pl-2"},s().createElement("button",{type:"button",className:"border rounded-full text-white border-current w-6 h-6 flex-center",onClick:a},r?s().createElement(b.IconPlayerPause,{className:"fill-current",size:12}):s().createElement(b.IconPlayerPlay,{className:"fill-current",size:12})),s().createElement("span",{className:"text-gray-300 ml-2"},p()(1e3*l).format("mm:ss"),"  /  ",p()(1e3*o).format("mm:ss")),s().createElement("div",{className:"ml-auto flex divide-x"},s().createElement("div",{className:"flex"},s().createElement("button",{type:"button"}),s().createElement("div",null)),s().createElement(j,null),s().createElement("button",{onClick:t,type:"button",className:"flex-center w-10 text-gray-400 hover:text-white"},n?s().createElement(b.IconArrowsMinimize,{size:20,stroke:1}):s().createElement(b.IconArrowsMaximize,{size:20,stroke:1}))))};var U=n(2512),O=n(6156),R="SET_FULL",V="SET_PLAY",F="SET_BUFFERED",B="SET_DURATION",A="SET_CURRENTTIME",Y="SET_JUMPTIME",J=function(e,t,n){return{type:e,payload:(0,O.Z)({},t,n)}};const W=function(){var e=(0,x.useDispatch)(),t=(0,i.useState)(!1),n=(0,l.Z)(t,2),a=n[0],r=n[1],o=(0,i.useState)(!1),c=(0,l.Z)(o,2),u=c[0],d=c[1],m=(0,i.useState)(0),f=(0,l.Z)(m,2),v=f[0],b=f[1],h=(0,i.useState)(0),E=(0,l.Z)(h,2),y=E[0],w=E[1],g=(0,i.useContext)(q),k=g.duration,N=g.currentTime,D=g.buffered,S=g.videoDispatch,Z=function(){},I=function(){d(!1)};return(0,i.useEffect)((function(){u||w(N/k)}),[N]),s().createElement("div",{className:"h-1 relative bg-black cursor-pointer"},a&&s().createElement("div",{className:"absolute bottom-0 text-white px-2 py-1 border border-gray-600 bg-black bg-opacity-80 transform -translate-y-4 -translate-x-1/2",style:{left:"".concat(100*v,"%")}},p()(v*k*1e3).format("mm:ss")),s().createElement("div",{className:"absolute inset-0",alt:"缓存"},D.map((function(e){var t=(0,l.Z)(e,2),n=t[0],a=t[1];return s().createElement("div",{key:"".concat(n,"-").concat(a),className:"absolute inset-y-0 bg-gray-400",style:{left:"".concat(n/k*100,"%"),right:"".concat(100*(1-a/k),"%")}})}))),s().createElement("div",{className:"h-full relative w-0 ui_theme_bg_color",alt:"播放进度",style:{width:"".concat(100*y,"%")}},s().createElement("button",{onMouseDown:function(){d(!0),e((0,U.o)({onMouseMove:Z,onMouseUp:I}))},type:"button",className:"absolute shadow right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-3 w-3 flex-center"},s().createElement("i",{className:"rounded-full ui_theme_bg_color w-1 h-1"}))),s().createElement("progress",{onMouseEnter:function(e){r(!0)},onMouseMove:function(e){var t=e.clientX,n=e.target.getBoundingClientRect(),a=n.left,r=n.width;b((t-a)/r),u&&w((t-a)/r)},onMouseLeave:function(e){r(!1)},onMouseUp:function(){d(!1)},onClick:function(e){var t=e.clientX,n=e.target.getBoundingClientRect(),a=(t-n.left)/n.width;w(a),S(J(Y,"jumpTime",a*k))},max:k,value:N,className:"absolute bottom-0 left-0 opacity-0 w-full"}))};function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(7941),n(7327),n(5003),n(4747),n(9337);var Q={play:!1,full:!1,buffered:[],duration:0,currentTime:0,jumpTime:0};const $=function(e,t){switch(t.type){case V:case R:return G(G({},e),t.payload);case F:return G(G({},e),{},{buffered:t.payload.buffered});case B:return G(G({},e),{},{duration:t.payload.duration});case A:return G(G({},e),t.payload);case Y:return G(G({},e),{},{jumpTime:t.payload.jumpTime});default:return e}};var q=(0,i.createContext)();const H=function(e){var t=e.url,n=(e.detail,e.brs,e.fixed),a=(0,i.useReducer)($,Q),o=(0,l.Z)(a,2),u=o[0],d=u.play,m=u.duration,v=u.currentTime,p=u.jumpTime,h=u.buffered,E=u.full,y=o[1],w=(0,i.useRef)(),g=(0,x.useDispatch)(),k=(0,i.useState)(!1),N=(0,l.Z)(k,2),D=(N[0],N[1]),S=function(){d?w.current.pause():w.current.play(),y(J(V,"play",!d))},Z=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=6;break}return e.next=3,document.webkitExitFullscreen();case 3:g((0,L.zQ)()),e.next=9;break;case 6:return e.next=8,document.documentElement.webkitRequestFullScreen();case 8:g((0,L.XG)());case 9:y(J(R,"full",!E));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){w.current.currentTime=p}),[p]),s().createElement("div",{className:f()("ui_aspect-ratio-16/9",n?" absolute bottom-16 right-8 z-10 w-80":"relative")},s().createElement("div",{className:f()("flex flex-col inset-0",E?"fixed z-50":"absolute")},s().createElement("div",{className:"bg-black flex-auto h-0 relative"},s().createElement("video",{src:t,ref:w,onClick:S,onProgress:function(e){for(var t=e.target,n=[],a=0;a<t.buffered.length;a+=1){var r=[t.buffered.start(a),t.buffered.end(a)];n.push(r)}y(J(F,"buffered",n))},onTimeUpdate:function(e){var t,n=e.target;y((t=n.currentTime,J(A,"currentTime",t)))},onLoadedMetadata:function(e){var t,n=e.target;y((t=n.duration,J(B,"duration",t)))},className:"h-full m-auto cursor-pointer",onDoubleClick:Z,onEnded:function(){D(!0)},playsInline:!0,autoPlay:d}),!d&&s().createElement("button",{onClick:S,type:"button",className:"ico text-white bg-black bg-opacity-10 border border-gray-300 cursor-pointer hover:border-white rounded-full absolute inset-0 m-auto w-16 h-16 flex-center"},s().createElement(b.IconPlayerPlay,{size:24,className:"fill-current"}))),s().createElement(q.Provider,{value:{handleChangePlay:S,play:d,duration:m,currentTime:v,buffered:h,handlechangeFull:Z,full:E,videoDispatch:y}},s().createElement(W,null),s().createElement(M,null))))};n(9826);var K=n(1808),ee=(n(6992),n(1539),n(8674),n(8783),n(3948),n(7196));function te(){return new Worker(n.p+"download.worker.12022082.worker.js")}n(285),n(4986);var ne={video:{init:function(){var e=(0,i.useState)(!1),t=(0,l.Z)(e,2),n=t[0],a=t[1],o=(0,i.useState)({}),s=(0,l.Z)(o,2),u=s[0],d=s[1],m=(0,i.useState)([]),f=(0,l.Z)(m,2),v=f[0],p=f[1],b=(0,i.useState)({}),h=(0,l.Z)(b,2),E=h[0],w=h[1],g=(0,i.useState)({}),x=(0,l.Z)(g,2),k=x[0],N=x[1];return{pending:n,urls:u,related:v,detail:E,detailInfo:k,handleInit:function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,o,i,s,u,m,f,v;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([(0,y.Bf)({id:t}),(0,y.kz)({id:t}),(0,y.ld)({id:t}),(0,y._r)({vid:t})]);case 3:n=e.sent,r=(0,l.Z)(n,4),o=r[0].urls,i=r[1].data,s=void 0===i?[]:i,u=r[2].data,m=void 0===u?{}:u,f=r[3],v=void 0===f?{}:f,m.playCount=m.playTime,(0,ee.unstable_batchedUpdates)((function(){d(o[0]),p(s),w(m),N(v),a(!0)})),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}()}},name:"视频详情",sub:"subscribeCount",apiComments:y.ju},mv:{init:function(){var e=(0,i.useState)(!1),t=(0,l.Z)(e,2),n=t[0],a=t[1],o=(0,i.useState)({}),s=(0,l.Z)(o,2),u=s[0],d=s[1],m=(0,i.useState)([]),f=(0,l.Z)(m,2),v=f[0],p=f[1],b=(0,i.useState)({}),h=(0,l.Z)(b,2),E=h[0],w=h[1],g=(0,i.useState)({}),x=(0,l.Z)(g,2),k=x[0],N=x[1];return{pending:n,urls:u,related:v,detail:E,detailInfo:k,handleInit:function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,o,i,s,u,m,f,v;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([(0,y.vc)({id:t}),(0,y.kz)({id:t}),(0,y.Ro)({mvid:t}),(0,y.Ay)({mvid:t})]);case 3:n=e.sent,r=(0,l.Z)(n,4),o=r[0].data,i=r[1].data,s=void 0===i?[]:i,u=r[2].data,m=void 0===u?{}:u,f=r[3],v=void 0===f?{}:f,m.title=m.name,m.description=m.desc,(0,ee.unstable_batchedUpdates)((function(){d(o),p(s),w(m),N(v),a(!0)})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}()}},name:"MV详情",sub:"subCount",apiComments:y.L}};var ae=function(e){var t=e.list,n=void 0===t?[]:t,a=e.func;return s().createElement("div",{className:"domVideoDetail_group mt-3 space-x-1"},n.map((function(e){return s().createElement(u.Link,{className:"group bg-gray-50 rounded-full px-2 py-1",onClick:function(){return a(e.id)},to:"/video/list",key:e.id},e.name)})))};const re=(0,i.memo)((function(e){var t,n,o,m,v,Z,I=e.type,C=e.vid;console.log("player");var P=(0,x.useDispatch)();(0,i.useEffect)((function(){P((0,E.in)())}),[]);var L=function(e){var t=e.vid,n=e.type,a=(0,x.useDispatch)(),o=(0,x.useSelector)((function(e){return e.account})).mvSublist,s=(0,i.useState)(1),u=(0,l.Z)(s,2),m=u[0],f=u[1],v=(0,i.useState)({}),p=(0,l.Z)(v,2),b=p[0],h=p[1],E=(0,i.useState)(!0),w=(0,l.Z)(E,2),g=w[0],k=w[1],N=(0,i.useMemo)((function(){return o.find((function(e){return e.vid===t}))}),[t,o]),D=(0,i.useMemo)((function(){return null}),[t]),Z=ne[n].init(),I=Z.pending,C=Z.urls,_=Z.related,P=Z.detail,T=Z.detailInfo,L=Z.handleInit,z=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.NU)();case 3:t=e.sent,n=t.data,a((0,K.og)({mvSublist:n})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"video"!==n){e.next=7;break}return e.next=4,(0,y.DD)({id:t,t:N?0:1});case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,(0,y.Bw)({mvid:t,t:N?0:1});case 9:e.t0=e.sent;case 10:200===e.t0.code&&z(),a((0,S.fz)(N?"取消收藏成功":"收藏成功")),e.next=19;break;case 16:e.prev=16,e.t1=e.catch(0),console.log(e.t1);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,r.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne[n].apiComments({id:t,limit:d.zI,offset:(m-1)*d.zI});case 3:a=e.sent,h(a),g&&k(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=(0,i.useMemo)((function(){return{type:n,vid:t}}),[n,t]),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=(0,x.useDispatch)(),a=(0,i.useRef)(),r=(0,i.useRef)(),o=(0,i.useState)(0),c=(0,l.Z)(o,2),s=c[0],u=c[1],d=(0,i.useState)("下载"),m=(0,l.Z)(d,2),f=m[0],v=m[1],p=function(){var n=new URL(e).pathname,a=n.substr(n.lastIndexOf(".")),l=window.URL.createObjectURL(r.current),o=document.createElement("a");o.download="".concat(t,".").concat(a),o.href=l,o.click(),window.URL.revokeObjectURL(l)},b=function(){v("缓存中");var t=new te;t.postMessage({method:"init",url:e}),t.addEventListener("message",(function(e){var t=e.data,n=e.data.callback;switch(n){case"progress":u(t[n]);break;case"state":v(t[n]),r.current=t.response,p()}})),a.current=t};return{downloadProcess:s,downloadState:f,handleInitDownload:function(){u(0),v("下载")},handleUnLoadDownload:function(){a.current&&(a.current.postMessage({method:"abort"}),a.current.terminate(),a.current=null)},handleDownload:function(){"已缓存"!==f?"下载"===f&&n((0,S.Jj)({callback:b})):p()}}}(null==C?void 0:C.url,null==P?void 0:P.title),R=O.downloadProcess,V=O.downloadState,F=O.handleInitDownload,B=O.handleUnLoadDownload,A=O.handleDownload;return(0,i.useEffect)((function(){return L(t),M(),F(),function(){B()}}),[t]),(0,i.useEffect)((function(){M()}),[m]),{params:U,name:ne[n].name,sub:ne[n].sub,isSub:N,isLike:D,pending:I,urls:C,related:_,detail:P,detailInfo:T,handleSub:j,handleInit:L,downloadProcess:R,downloadState:V,handleDownload:A,page:m,comments:b,commentsLoading:g,setPage:f}}({type:I,vid:C}),z=L.name,j=L.sub,M=L.isSub,U=(L.isLike,L.pending,L.urls),O=L.related,R=L.detail,V=L.detailInfo,F=L.handleSub,B=(L.handleInit,L.downloadProcess),A=L.downloadState,Y=L.handleDownload,J=L.page,W=L.comments,X=L.commentsLoading,G=L.setPage,Q=(0,u.useHistory)().goBack,$=(0,i.useState)(!1),q=(0,l.Z)($,2),ee=q[0],re=q[1],le=(0,i.useState)(""),oe=(0,l.Z)(le,2),ce=oe[0],ie=oe[1],se=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.iQ)({id:R.creator.userId,t:followed?0:1});case 3:t=e.sent,(0,a.Z)(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,i.useRef)(),t=(0,i.useRef)(),n=(0,i.useRef)(),a=(0,i.useState)(!1),r=(0,l.Z)(a,2),o=r[0],c=r[1];return(0,i.useEffect)((function(){return n.current=new IntersectionObserver((function(e){e.forEach((function(e){c(!e.isIntersecting)}))}),{root:t.current}),n.current.observe(e.current),function(){n.current.disconnect()}}),[]),{DomVideoWrap:e,DomScroll:t,fixed:o}}(),de=ue.DomVideoWrap,me=ue.DomScroll,fe=ue.fixed;return s().createElement("div",{className:" overflow-auto h-full",ref:me},s().createElement("div",{style:{width:930},className:"flex justify-between m-auto"},s().createElement("div",{className:"left",style:{width:620}},s().createElement("div",{className:"domVideoDetail_header flex items-center"},s().createElement("button",{type:"button",className:"flex items-center text-base font-bold",onClick:function(){return Q()}},s().createElement(b.IconChevronLeft,{size:28,stroke:1}),z)),s().createElement("div",{className:"ui_aspect-ratio-16/9",ref:de},s().createElement(H,{url:null==U?void 0:U.url,detail:R,fixed:fe})),s().createElement("div",{className:"domVideoDetail_creator flex items-center mt-5"},s().createElement(u.Link,{to:"/user/".concat(null==R||null===(t=R.creator)||void 0===t?void 0:t.userId),className:"avatar rounded-full overflow-hidden border"},s().createElement("img",{className:"",src:null==R||null===(n=R.creator)||void 0===n?void 0:n.avatarUrl,alt:""})),s().createElement(u.Link,{className:"nickname ml-2.5",to:"/user/".concat(null==R||null===(o=R.creator)||void 0===o?void 0:o.userId)},null==R||null===(m=R.creator)||void 0===m?void 0:m.nickname),"video"===I&&s().createElement("button",{onClick:se,type:"button",className:f()("follow text-red-500 bg-red-50 ml-auto h-8 rounded-full",{on:null==R||null===(v=R.creator)||void 0===v?void 0:v.followed})},null!=R&&null!==(Z=R.creator)&&void 0!==Z&&Z.followed?"+ 已关注":"+ 关注")),s().createElement("button",{type:"button",className:"domVideoDetail_title h1 flex items-center mt-5 text-left",onClick:function(){return re(!ee)}},null==R?void 0:R.title,ee?s().createElement(b.IconCaretUp,{size:24,className:"fill-current"}):s().createElement(b.IconCaretDown,{size:24,className:"fill-current"})),s().createElement("div",{className:"domVideoDetail_info text-gray-300 mt-3"},"发布：",p()(null==R?void 0:R.publishTime).format("YYYY-MM-DD"),"  播放",(0,h.LU)(null==R?void 0:R.playCount)),s().createElement(ae,{list:null==R?void 0:R.videoGroup,func:function(e){return P((0,w.C)({id:e}))}}),ee&&s().createElement("div",{className:"domVideoDetail_description mt-4"},R.description),s().createElement("div",{className:"domVideoDetail_actions flex space-x-3 mt-8"},s().createElement("button",{type:"button",className:"flex-center border h-8 rounded-full px-6 hover:bg-gray-100"},s().createElement(b.IconThumbUp,{size:20,stroke:1}),V.liked?"已赞":"赞","(",V.likedCount,")"),s().createElement("button",{type:"button",className:"flex-center border h-8 rounded-full px-6 hover:bg-gray-100",onClick:F},M?s().createElement(b.IconCheckbox,{size:20,stroke:1}):s().createElement(b.IconFolderPlus,{size:20,stroke:1}),M?"已收藏":"收藏","(",R[j],")"),s().createElement("button",{type:"button",className:"flex-center border h-8 rounded-full px-6 hover:bg-gray-100"},s().createElement(b.IconScreenShare,{size:20,stroke:1}),"分享","(".concat(V.shareCount,")")),s().createElement("button",{type:"button",onClick:Y,className:f()("relative w-24 h-8 rounded-full overflow-hidden",0===B?" border":"")},s().createElement("div",{className:"absolute inset-0 flex justify-end overflow-hidden"},s().createElement("span",{className:"w-24 h-8 flex-center bg-white"},s().createElement(b.IconDownload,{size:20,stroke:1}),A)),s().createElement("div",{className:"absolute inset-y-0 left-0 overflow-hidden",style:{right:"".concat(100*(1-B),"%")}},s().createElement("span",{className:"w-24 h-8 flex-center ui_theme_bg_color text-white"},s().createElement(b.IconDownload,{size:20,stroke:1}),A))),s().createElement(_,null)),s().createElement("div",{className:"domVideoDetail_main mt-8"},s().createElement("div",{className:"title mb-5"},s().createElement(u.Link,{to:"/comment/".concat(I,"/").concat(C),className:"h1 font-bold"},"评论")," ",s().createElement("span",null,"(".concat(R.commentCount,")"))),s().createElement("div",{className:"domVideoDetail_feedback mb-10"},s().createElement(g.Z,{value:ce,setValue:ie,length:140})),X?s().createElement("div",{className:""},s().createElement(D.Z,null)):s().createElement(s().Fragment,null,s().createElement(k.Z,{comments:W}),s().createElement(N.Z,{total:Math.ceil(W.total/d.zI),page:J,func:G})))),s().createElement(T,{related:O})))}))}}]);
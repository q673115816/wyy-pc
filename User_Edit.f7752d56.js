(self.webpackChunkwyy=self.webpackChunkwyy||[]).push([[119],{1276:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var n=a(2137),r=a(9351),c=a(7757),l=a.n(c),s=a(3804),i=a.n(s),m=a(6955),u=a(847),o=a(4184),d=a.n(o),f=a(8172),v=a(9703),g=a(5325),E=a(8556),p=a(205);const N=function(){var e=(0,g.useSelector)((function(e){return e.mask})),t=e.dialogUploadAvatarVisibility,a=e.avatar;return t?(console.log(a),i().createElement(p.Z,{id:"dialogUploadAvatar",title:"上传头像"},i().createElement("div",{className:"main"},i().createElement("div",{className:"content flex justify-center"},i().createElement("div",{className:"fullSize flex-center bg-black rounded overflow-hidden"},i().createElement("img",{className:"w-full h-full object-contain",src:a,alt:""})),i().createElement("div",{className:"aside ml-8"},i().createElement("div",{className:"bigSize border rounded w-24 h-24"},i().createElement("img",{src:a,alt:""})),i().createElement("div",{className:"text-gray-400 mt-1"},"大尺寸封面"),i().createElement("div",{className:"smallSize border rounded w-16 h-16"},i().createElement("img",{src:a,alt:""})),i().createElement("div",{className:"text-gray-400 mt-1"},"小尺寸封面"))),i().createElement("div",{className:"actions pb-4 pt-6 space-x-4 flex justify-center"},i().createElement("button",{type:"button",className:"flex-center border px-3 h-8 rounded-full"},"重新选择"),i().createElement("button",{type:"button",className:"flex-center text-white ui_theme_bg_color px-3 h-8 rounded-full"},"保持并关闭"))))):null};a(2222),a(9653),a(1249),a(5069),a(7941),a(3290);const h=function(e){var t=e.birthday,a=void 0===t?"":t,n=e.handleEdit,c=(0,s.useRef)((new Date).getFullYear()),l=(0,s.useRef)(new Date(a).getFullYear()),m=(0,s.useRef)(new Date(a).getMonth()),u=(0,s.useRef)(new Date(a).getDate()),o=(0,s.useState)(),d=(0,r.Z)(o,2),f=d[0],v=d[1],g=function(){n("birthday",new Date("".concat(l.current,"/").concat(m.current+1,"/").concat(u.current)).valueOf())};return(0,s.useEffect)((function(){!function(){switch(Number(m.current)){case 1:return void(l.current%4==0&&l.current%100!=0||l.current%400==0?v(29):v(28));case 0:case 2:case 4:case 6:case 7:case 9:case 11:return void v(31);default:v(30)}}()}),[m.current]),i().createElement(i().Fragment,null,i().createElement("select",{className:"select",value:l.current,onChange:function(e){l.current=e.target.value,m.current=0,u.current=1,g()}},Object.keys(Array(100).fill(0)).reverse().map((function(e){return i().createElement("option",{key:c.current-e,value:c.current-e},c.current-e,"年")}))),i().createElement("select",{className:"select",value:m.current,onChange:function(e){m.current=e.target.value,u.current=1,g()}},Object.keys(Array(12).fill(0)).map((function(e){return i().createElement("option",{key:e,value:e},Number(e)+1,"月")}))),i().createElement("select",{className:"select",value:u.current,onChange:function(e){u.current=e.target.value,g()}},Object.keys(Array(f).fill(0)).map((function(e){return i().createElement("option",{key:Number(e)+1,value:Number(e)+1},Number(e)+1,"日")}))))},b=(0,s.memo)((function(){var e=(0,g.useDispatch)(),t=(0,u.useParams)().uid,a=(0,s.useState)(!0),c=(0,r.Z)(a,2),o=c[0],p=c[1],b=(0,s.useState)(),y=(0,r.Z)(b,2),x=y[0],w=y[1],k=(0,s.useState)(),j=(0,r.Z)(k,2),C=j[0],Z=j[1],S=(0,s.useState)(""),_=(0,r.Z)(S,2),D=_[0],F=(_[1],(0,s.useState)(!0)),R=(0,r.Z)(F,2),U=R[0],A=R[1],O=function(){var e=(0,n.Z)(l().mark((function e(){var a,n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.um)({uid:t});case 3:if(a=e.sent,n=a.code,r=a.profile,200===n){e.next=8;break}return e.abrupt("return");case 8:w(r),Z((function(){return(0,f.ZP)(r,(function(){}))})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.prev=15,p(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var t=(0,n.Z)(l().mark((function t(){var a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a={gender:C.gender,birthday:C.birthday,nickname:C.nickname,province:C.province,city:C.city,signature:C.signature},t.next=4,(0,m.of)(a);case 4:if(200===t.sent.code){t.next=8;break}return t.abrupt("return");case 8:A(!0),w(C),e((0,v.fz)("修改个人资料成功")),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}(),L=function(e,t){Z((0,f.ZP)((function(a){a[e]=t})))};return(0,s.useEffect)((function(){O()}),[t]),(0,s.useEffect)((function(){A(JSON.stringify(x)===JSON.stringify(C))}),[C]),o?i().createElement("div",{className:"flex-center w-full h-full"},i().createElement(E.Z,null)):i().createElement("div",{className:"domUserEdit"},i().createElement("div",{className:"h1 domUser_subpage_header ui_header"},"编辑个人信息"),i().createElement("div",{className:"domUserEdit_main"},i().createElement("div",{className:"left"},i().createElement("div",{className:"row"},i().createElement("div",{className:"key"},"昵称："),i().createElement("div",{className:"value"},i().createElement("input",{type:"text",value:C.nickname,className:"input",onChange:function(e){var t=e.target;return L("nickname",t.value)}}))),i().createElement("div",{className:"row"},i().createElement("div",{className:"key"},"介绍："),i().createElement("div",{className:"value"},i().createElement("div",{className:"signature"},i().createElement("textarea",{type:"text",value:C.signature,className:"textarea",onChange:function(e){var t=e.target;return L("signature",t.value)}}),i().createElement("div",{className:d()("signatureLength",{ui_red:D.length>300})},300-D.length)))),i().createElement("div",{className:"row"},i().createElement("div",{className:"key"},"性别："),i().createElement("div",{className:"value"},i().createElement("label",{htmlFor:"secret",className:"gender"},i().createElement("input",{type:"radio",className:"radio",name:"gender",id:"secret",checked:0===C.gender,onChange:function(){return L("gender",0)}}),i().createElement("i",{className:"ico flex-center"}),i().createElement("span",null,"保密")),i().createElement("label",{htmlFor:"male",className:"gender"},i().createElement("input",{type:"radio",className:"radio",name:"gender",id:"male",checked:1===C.gender,onChange:function(){return L("gender",1)}}),i().createElement("i",{className:"ico flex-center"}),i().createElement("span",null,"男")),i().createElement("label",{htmlFor:"famale",className:"gender"},i().createElement("input",{type:"radio",className:"radio",name:"gender",id:"famale",checked:2===C.gender,onChange:function(){return L("gender",2)}}),i().createElement("i",{className:"ico flex-center"}),i().createElement("span",null,"女")))),i().createElement("div",{className:"row"},i().createElement("div",{className:"key"},"生日："),i().createElement("div",{className:"value",style:{display:"flex",justifyContent:"space-between"}},i().createElement(h,{birthday:C.birthday,handleEdit:L}))),i().createElement("div",{className:"row"},i().createElement("div",{className:"key"},"地区："),i().createElement("div",{className:"value"},i().createElement("select",{name:"",id:"",className:"select"},i().createElement("option",{value:""})))),i().createElement("div",{className:"row"},i().createElement("div",{className:"key"}),i().createElement("div",{className:"value"},i().createElement("div",{className:"actions"},i().createElement("button",{type:"button",className:d()("ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red",{disabled:U}),style:{marginRight:"2em"},disabled:U,onClick:z},"保 存"),i().createElement(u.Link,{to:"./",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"取 消"))))),i().createElement("div",{className:"right ml-20"},i().createElement("div",{className:"avatar border rounded overflow-hidden w-40 h-40"},i().createElement("img",{className:"",src:C.avatarUrl,alt:""})),i().createElement("label",{htmlFor:"avatar",className:"border cursor-pointer hover:bg-gray-50 flex-center h-8 m-auto mt-5 px-3 rounded-full update w-min whitespace-nowrap"},i().createElement("input",{onChange:function(t){var a=t.target,n=new FileReader,c=(0,r.Z)(a.files,1)[0];c&&(n.readAsDataURL(c),n.onload=function(t){e((0,v.Ci)({avatar:t.target.result}))})},type:"file",name:"",id:"avatar",hidden:!0,accept:"image/bmp,image/gif,image/jpg,image/svg,image/png,image/webp,image/ico,image/svgz,image/tif,image/jpeg,image/jfif,image/pjpeg,image/pjp,image/tiff,image/xbm"}),"修改头像"),i().createElement(N,null))))}))}}]);
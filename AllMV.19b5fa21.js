(self.webpackChunkwyy=self.webpackChunkwyy||[]).push([[983],{9789:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g}),r(7042),r(1038),r(2526),r(1817),r(2165),r(7941),r(7327),r(5003),r(4747),r(9337);var n=r(7329),a=r(6156),o=r(2137),c=r(9351),i=r(7757),l=r.n(i),u=(r(4916),r(4765),r(6992),r(1539),r(8783),r(3948),r(285),r(2222),r(1249),r(8309),r(3804)),s=r.n(u),f=r(847),m=r(6955),d=r(4184),p=r.n(d),y=r(6203),v=r(9301);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O=[["area","地区",["全部","内地","港台","欧美","韩国","日本"]],["type","类型",["全部","官方版","原声","现场版","网易出品"]],["order","排序",["上升最快","最热","最新"]]];const g=function(){var e,t=(0,f.useLocation)().search,r={area:"全部",type:"全部",order:"上升最快"},i=(0,u.useRef)(0),d=new URLSearchParams(t),b=(0,u.useRef)(),g=(0,u.useRef)(),E=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw o}}}}(d);try{for(E.s();!(e=E.n()).done;){var j=(0,c.Z)(e.value,2),x=j[0],N=j[1];r[x]=N}}catch(e){E.e(e)}finally{E.f()}var k=(0,u.useState)([]),S=(0,c.Z)(k,2),A=S[0],P=S[1],Z=function(){var e=(0,o.Z)(l().mark((function e(){var t,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.Au)(h(h({},r),{},{limit:30,offset:i.current}));case 3:t=e.sent,a=t.data,i.current+=30,P((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(a.map((function(e){var t=e.id,r=e.name,n=e.cover,a=e.playCount;return{id:t,cover:n,duration:e.duration,playCount:a,title:r,creator:e.artists.map((function(e){return{userId:e.id,userName:e.name}}))}}))))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,v.Z)(Z,b,g,[t]),(0,u.useEffect)((function(){P([]),i.current=0}),[t]),s().createElement("div",{className:"domAllMV overflow-auto h-full",ref:b},s().createElement("div",{className:"domAllMV_header ui_header"},s().createElement(f.Link,{to:"./",className:"h1 title"},"全部MV")),s().createElement("div",{className:"domAllMV_main px-8 flex-auto"},s().createElement("div",{className:"ui_filter"},O.map((function(e){return s().createElement("div",{className:"row flex my-2.5",key:e[1]},s().createElement("div",{className:"name flex-none"},e[1],":"),s().createElement("div",{className:"list divide-x"},e[2].map((function(t){return s().createElement("div",{className:"item flex-center",key:t},s().createElement(f.Link,{to:"/allmv?".concat(new URLSearchParams(h(h({},r),(0,a.Z)({},e[0],t)))),className:p()("btn rounded-full leading-5 px-3 whitespace-nowrap",t===r[e[0]]?"bg-red-50 text-red-500":"ui_text_gray_hover")},t))}))))}))),s().createElement("div",{className:"py-1"},s().createElement(y.Z,{list:A})),s().createElement("div",{ref:g})))}}}]);
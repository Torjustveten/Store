(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],p=0,m=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},a={app:0},n=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"aada2518"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=a[e]=[t,o]}));t.push(r[2]=o);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;n=function(t){c.onerror=c.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",u.name="ChunkLoadError",u.type=o,u.request=n,r[1](u)}a[e]=void 0}};var p=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var l=u;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1794:function(e,t,r){e.exports=r.p+"img/matebook13-space-gray.069d2297.png"},"21bb":function(e,t,r){"use strict";var o=r("2dad"),a=r.n(o);a.a},"2dad":function(e,t,r){},3360:function(e,t,r){var o={"./MatebookXPro.jpg":"832b","./matebook13-mystic-silver.png":"4f20","./matebook13-space-gray.png":"1794","./matebook14-mystic-silver.png":"b395","./matebookD14-mystic-silver.png":"f8a4","./matebookD14-space-gray.png":"a877","./matebookXPro-SpaceGray.png":"68a4","./matebookXPro-emeraldgreen.png":"c0af","./matebookXPro-mystic-silver.png":"6285"};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=n,e.exports=a,a.id="3360"},"4f20":function(e,t,r){e.exports=r.p+"img/matebook13-mystic-silver.a033f4bf.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},n=[],i=(r("5c0b"),r("2877")),s={},c=Object(i["a"])(s,a,n,!1,null,null,null),u=c.exports,p=(r("d3b7"),r("8c4f")),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{staticClass:"wrapper"},[r("h2",[e._v("Featured Items")]),r("ul",{staticClass:"featured-items"},e._l(e.products,(function(t){return r("li",{key:t.id,staticClass:"featured-items__item"},[r("img",{staticClass:"product-image",attrs:{src:e.imagePath(t),alt:""}}),r("p",{staticClass:"product-title"},[e._v(e._s(t.name))]),r("p",[r("em",[e._v("$"+e._s(t.price))])])])})),0)])])},m=[],d={name:"home",computed:{products:function(){return this.$store.state.products}},methods:{imagePath:function(e){return r("3360")("./".concat(e.images[0]))}}},g=d,f=(r("21bb"),Object(i["a"])(g,l,m,!1,null,null,null)),b=f.exports;o["a"].use(p["a"]);var y=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],h=new p["a"]({mode:"history",base:"/",routes:y}),v=h,k=r("2f62");o["a"].use(k["a"]);var M=new k["a"].Store({state:{cart:[],products:[{name:"Huawei Matebook X Pro",id:1,price:20990,color:"Space Grey/Emerald Green/Mystic Silver",display:"13.9 inches",touch:"Yes",resolution:"3000 x 2000",fingerprint:"Yes",brightness:"450 cd/m²",quantity:10,dateAdded:"Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",category:"Laptop",details:{material:"Aliminum",CPU:"4 core 8 thread Intel Core i7 10510U/4.9 GHz",GPU:"Nvidia GeForce MC250 / Intel UHD 620",Memory:"2GB Video memory/Dual Channel 16GB RAM 2133Mhz",Storage:"512GB SDD PCIe",Battery:"56 Wh, up to 13 hours",Speakers:"Quad speakers",Camera:"1MP/720p",Wireless:"802.11a/b/g/n/ac, NFC, Bluetooth 5.0",Weight:"1.33kg",Additional:"100% sRGB, 10 point multitouch, 260 ppi"},images:["matebookXPro-emeraldgreen.jpg","matebookXPro-SpaceGray.jpg","matebookXPro-mystic-silver.jpg"]},{name:"Huawei Matebook 14",id:2,price:7990,color:"Mystic Silver",display:"14 inches",touch:"No",resolution:"1920 x 1080",fingerprint:"Yes",brightness:"250 cd/m²",quantity:10,dateAdded:"Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",category:"Laptop",details:{material:"Aliminum",CPU:"4 core 8 thread AMD Ryzen 5 3500U/2.1GHz",GPU:"AMD Radeon Vega 8",Memory:"Dual Channel 16GB RAM 2400Mhz",Storage:"512GB SDD PCIe",Battery:"56 Wh, up to 9.5 hours",Speakers:"Stereo speakers",Camera:"1MP/720p",Wireless:"802.11a/b/g/n/ac, NFC, Bluetooth 5.0",Weight:"1.38kg",Additional:"157 ppi"},images:["matebook14-mystic-silver.jpg"]},{name:"Huawei Matebook 13",id:3,price:13990,color:"Mystic Silver/Space Gray",display:"13.9 inches",touch:"Yes",resolution:"3000 x 2000",fingerprint:"Yes",brightness:"450 cd/m²",quantity:10,dateAdded:"Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",category:"Laptop",details:{material:"Aliminum",CPU:"4 core 8 thread Intel Core i7 8565U/1.8GHz",GPU:"Nviadia GeForce MX250/Intel UHD 620",Memory:"2GB Video Memory/Dual Channel 8GB RAM 2133MHz",Storage:"512GB SDD PCIe",Battery:"56 Wh, up to 13 hours",Speakers:"Quad speakers",Camera:"1MP/720p",Wireless:"802.11a/b/g/n/ac, Bluetooth 5.0",Weight:"1.33kg",Additional:"100% sRGB 260 ppi"},images:["matebook13-mystic-silver.jpg","matebook13-space-gray"]},{name:"Huawei Matebook D14",id:4,price:7990,color:"Mystic Silver/Space Gray",display:"14 inches",touch:"No",resolution:"1920 x 1080",fingerprint:"Yes",brightness:"250 cd/m²",quantity:10,dateAdded:"Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",category:"Laptop",details:{material:"Aliminum",CPU:"4 core 8 thread AMD Ryzen 5 3500U/2.1GHz",GPU:"AMD Radeon Vega 8",Memory:"Dual Channel 8GB RAM 2400MHz",Storage:"512GB SDD PCIe",Battery:"56 Wh, up to 9.5 hours",Speakers:"Stereo speakers",Camera:"1MP/720p",Wireless:"802.11a/b/g/n/ac, Bluetooth 5.0",Weight:"1.38kg",Additional:"157 ppi"},images:["matebookD14-mystic-silver.jpg","matebookD14-space-gray"]}]},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:v,store:M,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var o=r("9c0c"),a=r.n(o);a.a},6285:function(e,t,r){e.exports=r.p+"img/matebookXPro-mystic-silver.9c568f5a.png"},"68a4":function(e,t,r){e.exports=r.p+"img/matebookXPro-SpaceGray.9af6de8b.png"},"832b":function(e,t,r){e.exports=r.p+"img/MatebookXPro.d6afa789.jpg"},"9c0c":function(e,t,r){},a877:function(e,t,r){e.exports=r.p+"img/matebookD14-space-gray.ae3c6523.png"},b395:function(e,t,r){e.exports=r.p+"img/matebook14-mystic-silver.085463a2.png"},c0af:function(e,t,r){e.exports=r.p+"img/matebookXPro-emeraldgreen.c5e253a1.png"},f8a4:function(e,t,r){e.exports=r.p+"img/matebookD14-mystic-silver.04b00c91.png"}});
//# sourceMappingURL=app.64c72f19.js.map
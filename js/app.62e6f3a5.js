(function(e){function t(t){for(var o,p,a=t[0],n=t[1],i=t[2],h=0,l=[];h<a.length;h++)p=a[h],Object.prototype.hasOwnProperty.call(c,p)&&c[p]&&l.push(c[p][0]),c[p]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);m&&m(t);while(l.length)l.shift()();return r.push.apply(r,i||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],o=!0,p=1;p<s.length;p++){var a=s[p];0!==c[a]&&(o=!1)}o&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var o={},p={app:0},c={app:0},r=[];function a(e){return n.p+"js/"+({error404:"error404",login:"login",profile:"profile"}[e]||e)+"."+{error404:"412bdf92",login:"c0c432e8",profile:"ff4ab3e8"}[e]+".js"}function n(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(e){var t=[],s={error404:1,login:1,profile:1};p[e]?t.push(p[e]):0!==p[e]&&s[e]&&t.push(p[e]=new Promise((function(t,s){for(var o="css/"+({error404:"error404",login:"login",profile:"profile"}[e]||e)+"."+{error404:"42b0ff23",login:"16c0f0fa",profile:"d48e0845"}[e]+".css",c=n.p+o,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var i=r[a],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===o||h===c))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){i=l[a],h=i.getAttribute("data-href");if(h===o||h===c)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete p[e],m.parentNode.removeChild(m),s(r)},m.href=c;var g=document.getElementsByTagName("head")[0];g.appendChild(m)})).then((function(){p[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,s){o=c[e]=[t,s]}));t.push(o[2]=r);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,n.nc&&h.setAttribute("nonce",n.nc),h.src=a(e);var l=new Error;i=function(t){h.onerror=h.onload=null,clearTimeout(m);var s=c[e];if(0!==s){if(s){var o=t&&("load"===t.type?"missing":t.type),p=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+p+")",l.name="ChunkLoadError",l.type=o,l.request=p,s[1](l)}c[e]=void 0}};var m=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(t)},n.m=e,n.c=o,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var m=h;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},"1cf3":function(e,t,s){"use strict";var o=[{author:"Seneca the Younger",quotes:["Luck is what happens when preparation meets opportunity","Every new beginning comes from some other beginning's end","Not how long, but how well you have lived is the main thing","Sometimes even to live is an act of courage","Fate leads the willing, and drags along the reluctant","As is a tale, so is life: not how long it is, but how good it is, is what matters","We are more often frightened than hurt; and we suffer more from imagination than from reality"]},{author:"Nipsey Hussle",quotes:["Own your mind. Mind your own."]}];t["a"]=o},2375:function(e,t,s){"use strict";var o=s("7a23"),p={class:"my-5 text-center",style:{height:"200px"}},c=Object(o["h"])("div",{class:"my-5 spinner-border",role:"status"},null,-1),r=Object(o["h"])("h5",null,"⏳ Fetching data, should be quick... 🤞",-1);function a(e,t){return Object(o["s"])(),Object(o["e"])("div",p,[c,r])}const n={};n.render=a;t["a"]=n},"526b":function(e,t,s){"use strict";s.d(t,"d",(function(){return n})),s.d(t,"a",(function(){return i})),s.d(t,"c",(function(){return h})),s.d(t,"b",(function(){return l}));var o=s("260b"),p=(s("ea7b"),s("000b"),s("e71f"),s("588e"),"production"),c={apiKey:"AIzaSyAvZhvOdcZctgok0Ktrk-ehP0j2uABMToc",authDomain:"instabio-c15ca.firebaseapp.com",databaseURL:"https://instabio-c15ca.firebaseio.com",projectId:"instabio-c15ca",storageBucket:"instabio-c15ca.appspot.com",messagingSenderId:"336040471368",appId:"1:336040471368:web:5e968f27eea0576937617d",measurementId:"G-NM6F1DZZ3M"},r=o["a"].initializeApp(c);r.analytics();var a=r.firestore(),n=r.storage().ref(),i=r.auth(),h="production"===p?a.collection("profiles"):a.collection("dev-profiles"),l=function(e){return"production"===p?a.collection("profiles/".concat(e,"/timeline")):a.collection("dev-profiles/".concat(e,"/timeline"))}},"5f4a":function(e,t,s){"use strict";var o=["https://images.pexels.com/photos/1122462/pexels-photo-1122462.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1694881/pexels-photo-1694881.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1168742/pexels-photo-1168742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/313104/pexels-photo-313104.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1751596/pexels-photo-1751596.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/853411/pexels-photo-853411.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1188470/pexels-photo-1188470.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/42078/pexels-photo-42078.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1587651/pexels-photo-1587651.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1545499/pexels-photo-1545499.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/428325/pexels-photo-428325.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1471204/pexels-photo-1471204.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1413883/pexels-photo-1413883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1070970/pexels-photo-1070970.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1425452/pexels-photo-1425452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1430675/pexels-photo-1430675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1090551/pexels-photo-1090551.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1440399/pexels-photo-1440399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1267244/pexels-photo-1267244.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439264/pexels-photo-1439264.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439251/pexels-photo-1439251.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1447358/pexels-photo-1447358.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439258/pexels-photo-1439258.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1452783/pexels-photo-1452783.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1453488/pexels-photo-1453488.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1261408/pexels-photo-1261408.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1467479/pexels-photo-1467479.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/840566/pexels-photo-840566.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1464565/pexels-photo-1464565.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/102170/pexels-photo-102170.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1461447/pexels-photo-1461447.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1461101/pexels-photo-1461101.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/952057/pexels-photo-952057.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/457446/pexels-photo-457446.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1753798/pexels-photo-1753798.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1751601/pexels-photo-1751601.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1173804/pexels-photo-1173804.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1684915/pexels-photo-1684915.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1587200/pexels-photo-1587200.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1587619/pexels-photo-1587619.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1391421/pexels-photo-1391421.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1416945/pexels-photo-1416945.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1093946/pexels-photo-1093946.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1471141/pexels-photo-1471141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1486669/pexels-photo-1486669.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1230349/pexels-photo-1230349.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/247519/pexels-photo-247519.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1430627/pexels-photo-1430627.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1254690/pexels-photo-1254690.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439951/pexels-photo-1439951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1436621/pexels-photo-1436621.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1454021/pexels-photo-1454021.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1356286/pexels-photo-1356286.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439317/pexels-photo-1439317.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1250643/pexels-photo-1250643.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/561462/pexels-photo-561462.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/122101/pexels-photo-122101.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/695779/pexels-photo-695779.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/106258/pexels-photo-106258.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1466852/pexels-photo-1466852.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/426893/pexels-photo-426893.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1461270/pexels-photo-1461270.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/689924/pexels-photo-689924.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/922100/pexels-photo-922100.png?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1166990/pexels-photo-1166990.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1701626/pexels-photo-1701626.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1721613/pexels-photo-1721613.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1206059/pexels-photo-1206059.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1340502/pexels-photo-1340502.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1391480/pexels-photo-1391480.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1545980/pexels-photo-1545980.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1545511/pexels-photo-1545511.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1448371/pexels-photo-1448371.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/689475/pexels-photo-689475.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1415268/pexels-photo-1415268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1058950/pexels-photo-1058950.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/873069/pexels-photo-873069.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/417801/pexels-photo-417801.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1436618/pexels-photo-1436618.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1425436/pexels-photo-1425436.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1019411/pexels-photo-1019411.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1439254/pexels-photo-1439254.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1449855/pexels-photo-1449855.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/248012/pexels-photo-248012.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/729982/pexels-photo-729982.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/175718/pexels-photo-175718.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1292684/pexels-photo-1292684.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/567451/pexels-photo-567451.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1464223/pexels-photo-1464223.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1463563/pexels-photo-1463563.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1058950/pexels-photo-1058950.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1083989/pexels-photo-1083989.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1096668/pexels-photo-1096668.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1098366/pexels-photo-1098366.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1174103/pexels-photo-1174103.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/206233/pexels-photo-206233.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1079384/pexels-photo-1079384.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1089845/pexels-photo-1089845.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1121797/pexels-photo-1121797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1142984/pexels-photo-1142984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1174179/pexels-photo-1174179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/293029/pexels-photo-293029.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/562622/pexels-photo-562622.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/673649/pexels-photo-673649.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1081672/pexels-photo-1081672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1115196/pexels-photo-1115196.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1143367/pexels-photo-1143367.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"];t["a"]=o},6456:function(e,t,s){"use strict";s("8036")},"73ec":function(e,t,s){"use strict";s.d(t,"d",(function(){return p})),s.d(t,"b",(function(){return c})),s.d(t,"a",(function(){return r})),s.d(t,"c",(function(){return a}));s("99af"),s("a15b"),s("d81d"),s("fb6a"),s("a9e3"),s("d3b7"),s("ac1f"),s("25f0"),s("466d"),s("d4ec"),s("bee2"),s("45eb"),s("7e84"),s("262e"),s("2caf"),s("9072");var o=["🖤","💜","💙","💚","💛","🧡","❤️","🔥","👌","🙌","🤲","💪","🎙️","🎵","🧙","✍️","✌️","🖖","🤜","🤛","👍","👊","✊","👏","☢️","👽","💉","🎧","⚠️","🔝","💯","✨","💣","💥","🥊","🌶️","🕶️","🌡️","🐲","☮️","☯️","😄","😃","😀","😊","😉","😍","😜","😝","😛","😁","😂","😆","😋","😎","😈","😮","😬","😏","😺","😸","😻","🙈","🙊"],p=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},c=function(e){return e[p(0,e.length-1)]},r=function(e){for(var t=[],s=0;s<e;s++)t.push(c(o));return t.join(" ")},a=function(e){var t=e.slice(1),s=t?"#".concat((16777215^Number("0x1".concat(t))).toString(16).substr(1).toUpperCase()):"";return s}},8036:function(e,t,s){},9224:function(e){e.exports=JSON.parse('{"a":"0.6.16"}')},afbc:function(e,t,s){"use strict";s("d3b7"),s("ac1f"),s("25f0"),s("5319"),s("96cf");var o=s("1da1"),p=s("6c02"),c=s("526b"),r=(s("99af"),s("73ec")),a=s("5f4a"),n=s("1cf3"),i={instagram:{icon:"fa fa-instagram",link:"https://www.instagram.com/..."},facebook:{icon:"fa fa-facebook",link:"https://www.facebook.com/..."},youtube:{icon:"fa fa-youtube",link:"https://youtube.com/c/..."},spotify:{icon:"fa fa-spotify",link:"https://open.spotify.com/artist/..."},twitter:{icon:"fa fa-twitter",link:""},github:{icon:"fa fa-github-alt",link:""},linkedin:{icon:"fa fa-linkedin",link:""}},h=function(){var e=Object(r["b"])(n["a"]),t=e.author,s=e.quotes,o=Object(r["b"])(s);return'"'.concat(o,'"    - ').concat(t)},l=function(e){var t=e.uid,s=e.displayName,o=e.photoURL;return{userUid:t,displayName:s,coverImg:Object(r["b"])(a["a"]),photoURL:o,bgColor:"#000000",shortBio:"".concat(Object(r["a"])(Object(r["d"])(1,3))," What/Where ").concat(Object(r["a"])(Object(r["d"])(1,3))),longBio:h(),socialLinks:i}},m=l,g=[{path:"/404",component:function(){return s.e("error404").then(s.bind(null,"b2ec"))}},{path:"/",component:function(){return s.e("login").then(s.bind(null,"a55b"))},beforeEnter:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,s,o){var p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(p=c["a"].currentUser,null===p||void 0===p||!p.uid){e.next=4;break}return e.next=4,u.replace("/u/".concat(null===p||void 0===p?void 0:p.uid));case 4:o();case 5:case"end":return e.stop()}}),e)})));function t(t,s,o){return e.apply(this,arguments)}return t}()},{path:"/u/:profileUid",props:!0,component:function(){return s.e("profile").then(s.bind(null,"c66d"))},beforeEnter:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,s,o){var p,r,a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return p=c["c"].doc(t.params.profileUid.toString()),e.next=3,p.get();case 3:if(r=e.sent,a=c["a"].currentUser,n=(null===a||void 0===a?void 0:a.uid)===t.params.profileUid,null!==r&&void 0!==r&&r.exists){e.next=15;break}if(!a||!n){e.next=13;break}return i=m(a),e.next=11,p.set(i);case 11:e.next=15;break;case 13:return e.next=15,u.replace("/404");case 15:o();case 16:case"end":return e.stop()}}),e)})));function t(t,s,o){return e.apply(this,arguments)}return t}()}],u=Object(p["a"])({history:Object(p["b"])(),routes:g});t["a"]=u},cd49:function(e,t,s){"use strict";s.r(t);s("ac1f"),s("5319"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("7a23");function p(e,t,s,p,c,r){var a=Object(o["A"])("PatchMeta"),n=Object(o["A"])("router-view"),i=Object(o["A"])("Spinner"),h=Object(o["A"])("Footer");return Object(o["s"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(a),(Object(o["s"])(),Object(o["e"])(o["b"],null,{default:Object(o["J"])((function(){return[Object(o["h"])(n)]})),fallback:Object(o["J"])((function(){return[Object(o["h"])(i)]})),_:1})),Object(o["h"])(h)],64)}var c=s("2375"),r=(s("fb6a"),s("cf05")),a=s.n(r),n={class:"container-fluid bg-secondary text-white text-center p-4"},i={class:"row justify-content-center"},h={class:"col-6 col-sm-2"},l=Object(o["h"])("img",{src:a.a,class:"img-fluid"},null,-1),m=Object(o["h"])("div",{class:"col-6 col-sm-4 text-right"},[Object(o["h"])("h4",null,"🚧 WIP..."),Object(o["h"])("hr"),Object(o["h"])("p",null,[Object(o["h"])("a",{target:"_blank",href:"https://github.com/yeikiu/instab.io/blob/master/README.md",class:"text-white"},"About")]),Object(o["h"])("p",null,[Object(o["h"])("a",{target:"_blank",href:"https://github.com/yeikiu/instab.io/issues",class:"text-white"},"Report an Issue")])],-1),g=Object(o["g"])("Created with ❤️ by "),u=Object(o["h"])("a",{href:"https://github.com/yeikiu/",target:"_blank",class:"text-white"},"JQ",-1);function b(e,t,s,p,c,r){var a=Object(o["A"])("router-link");return Object(o["s"])(),Object(o["e"])("div",n,[Object(o["h"])("div",i,[Object(o["h"])("div",h,[Object(o["h"])(a,{to:"/"},{default:Object(o["J"])((function(){return[l]})),_:1})]),m]),Object(o["h"])(a,{to:"/",class:"text-reset"},{default:Object(o["J"])((function(){return[Object(o["g"])("InstaB.io v"+Object(o["C"])(c.version)+" (beta)",1)]})),_:1}),Object(o["h"])("p",null,[g,u,Object(o["g"])("© "+Object(o["C"])((new Date).toDateString().slice(-4)),1)])])}var x=s("9224"),f={data:function(){return{version:x["a"]}}};f.render=b;var j=f;function y(e,t,s,p,c,r){return Object(o["s"])(),Object(o["e"])("span")}s("a4d3"),s("e01a"),s("99af"),s("4160"),s("a630"),s("3ca3"),s("159b");var w=s("3835"),d={siteName:"InstaB.io",title:"Your coolest Portfolio!",description:"One link to link them all!",previewUrl:"https://instab.io/android-chrome-192x192.png",shareUrl:location.href},v=function(e){var t=e.siteName,s=void 0===t?d.siteName:t,o=e.title,p=void 0===o?d.title:o,c=e.description,r=void 0===c?d.description:c,a=e.previewUrl,n=void 0===a?d.previewUrl:a,i=e.shareUrl,h=void 0===i?d.shareUrl:i,l=document.getElementsByTagName("title"),m=Object(w["a"])(l,1),g=m[0];g.textContent="".concat(s," | ").concat(p," - ").concat(r),Array.from(document.getElementsByClassName("APP_META")).forEach((function(e){e.remove()}));var u='<meta class="APP_META" property="og:title" content="'.concat(p,'">\n      <meta class="APP_META" property="og:description" content="').concat(r,'">\n      <meta class="APP_META" property="og:image" content="').concat(n,'">\n      <meta class="APP_META" property="og:url" content="').concat(h,'">\n      <meta class="APP_META" name="twitter:card" content="summary_large_image">\n      <meta class="APP_META" property="og:site_name" content="').concat(s,'">'),b=document.getElementsByTagName("head"),x=Object(w["a"])(b,1),f=x[0];f&&(f.innerHTML="".concat(f.innerHTML).concat(u))},O=Object(o["i"])({props:{siteName:{type:String,default:d.siteName},title:{type:String,default:d.title},description:{type:String,default:d.description},previewUrl:{type:String,default:d.previewUrl},shareUrl:{type:String,default:d.shareUrl}},setup:function(e){Object(o["q"])((function(){v(e)}))}});O.render=y;var k=O,A={components:{Spinner:c["a"],Footer:j,PatchMeta:k}};s("6456");A.render=p;var P,E=A,S=s("afbc"),_=s("526b");s("f9e3"),s("a8ba"),s("1f54");_["a"].onAuthStateChanged((function(e){console.log({authData:e}),P?null!==e&&void 0!==e&&e.uid?S["a"].replace("/u/".concat(e.uid)):S["a"].replace("/"):(P=Object(o["d"])(E),P.use(S["a"]).mount("#app"))}))},cf05:function(e,t,s){e.exports=s.p+"img/logo.f138b63b.png"}});
//# sourceMappingURL=app.62e6f3a5.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["in-feed"],{"1cfd":function(t,e,r){"use strict";(function(t){var n=r("cbd9"),a=(r("f923"),r("5b0e")),o={name:"CImage",mixins:[Object(n["i"])("CImage")],props:{src:String,fallbackSrc:String,ignoreFalback:Boolean,htmlWidth:String,htmlHeight:String,size:[String,Number]},data:function(){return{image:void 0,hasLoaded:!1}},computed:{componentStyles:function(){return{w:this.size,h:this.size}}},created:function(){t.browser&&this.loadImage(this.src)},methods:{loadImage:function(t){var e=this,r=new window.Image;r.src=t,r.onload=function(t){e.hasLoaded=!0,e.$emit("load",t)},r.onerror=function(t){e.hasLoaded=!1,e.$emit("error",t)}}},render:function(t){var e;return e=this.ignoreFallback?{src:this.src}:{src:this.hasLoaded?this.src:this.fallbackSrc},t(a["a"],[t("img",{class:this.className,attrs:Object.assign({},e,this.computedAttrs,{width:this.htmlWidth,height:this.htmlHeight})})])}};e["a"]=o}).call(this,r("c32c"))},"1d43":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("cbd9"),a=function(t){var e,r,a,o,s,i=t.variant,c=t.colorMode;switch(i){case"solid":return(e=t,r=e.theme.colors,a=e.color,o=r[a]&&r[a][500],s=Object(n["p"])(o,.6),{light:{backgroundColor:Object(n["o"])(a,500),color:"white"},dark:{backgroundColor:s,color:"whiteAlpha.800"}})[c];case"subtle":return function(t){var e=t.theme.colors,r=t.color,a=e[r]&&e[r][200],o=Object(n["q"])(a)[300];return{light:{backgroundColor:Object(n["o"])(r,100),color:Object(n["o"])(r,800)},dark:{backgroundColor:o,color:Object(n["o"])(r,200)}}}(t)[c];case"outline":return function(t){var e=t.theme.colors,r=t.color,a=e[r]&&e[r][200],o=Object(n["p"])(a,.8);return{light:{boxShadow:"inset 0 0 0px 1px "+(e[r]&&e[r][500]),color:Object(n["o"])(r,500)},dark:{boxShadow:"inset 0 0 0px 1px "+o,color:o}}}(t)[c];default:return{}}},o=function(t){return a(t)}},"61fe":function(t,e,r){"use strict";var n=r("cbd9"),a=(r("f923"),r("1d43")),o={name:"CBadge",mixins:[Object(n["i"])("CBadge")],props:{variant:{type:String,default:"subtle"},variantColor:{type:String,default:"gray"},as:{type:String,default:"div"}},computed:{badgeStyles:function(){return Object(a["a"])({theme:this.theme,colorMode:this.colorMode,color:this.variantColor,variant:this.variant})},componentStyles:function(){return Object.assign({},{d:"inline-block",textTransform:"uppercase",fontSize:"xs",fontFamily:"body",px:1,rounded:"sm",fontWeight:"bold",whiteSpace:"nowrap",verticalAlign:"middle"},this.badgeStyles)}},render:function(t){return t(this.as,{class:this.className,attrs:this.computedAttrs},this.$slots.default)}};e["a"]=o},aea6:function(t,e,r){"use strict";var n=r("da7d"),a=r.n(n);a.a},c32c:function(t,e,r){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,n="/";e.cwd=function(){return n},e.chdir=function(e){t||(t=r("d517")),n=t.resolve(e,n)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},d2db:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home VueCurrencyFilter"},[r("section",{staticClass:"container hero"},[r("c-flex",{attrs:{mb:"4",align:"center",justify:"center",direction:"column"}},[r("c-text",{attrs:{as:"h1",fontSize:"5xl"}},[t._v("In Feed Adsense")])],1)],1),r("section",{staticClass:"container ads"},[r("c-stack",{attrs:{spacing:5,"is-inline":"",shouldWrapChildren:!0,justify:"center",wrap:"wrap"}},[r("ImageCard"),r("ImageCard"),r("ImageCard"),r("c-box",{attrs:{maxW:"sm",mb:5,"border-width":"1px",rounded:"lg",overflow:"hidden"}},[r("InFeedAdsense",{staticStyle:{height:"300px",margin:"1em 0"},attrs:{"root-class":"wrapper VueInFeedAdsense","ins-class":"ins-custom","data-ad-layout-key":"-fg+5n+6t-e7+r","data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"2105028631"}})],1),r("ImageCard"),r("ImageCard"),r("ImageCard"),r("ImageCard"),r("ImageCard"),r("ImageCard"),r("c-box",{attrs:{maxW:"sm",mb:5,"border-width":"1px",rounded:"lg",overflow:"hidden"}},[r("InFeedAdsense",{staticStyle:{height:"300px",margin:"1em 0"},attrs:{"root-class":"wrapper VueInFeedAdsense","ins-class":"ins-custom","data-ad-layout-key":"-fg+5n+6t-e7+r","data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"2105028631"}})],1)],1)],1),r("section",{staticClass:"container"},[r("c-stack",{attrs:{spacing:5,"is-inline":""}},[r("Box",{attrs:{title:"Default Adsense",description:"A simple way to get ads on your page. Choose the size, placement and style you want to display.",link:"https://support.google.com/adsense/answer/6002575?hl=en_GB",demo:"/"}}),r("Box",{attrs:{title:"In Article Adsense",description:"Ads that fit seamlessly in between the paragraphs of your pages for an enhanced reading experience.",link:"https://support.google.com/adsense/answer/7320112?hl=en_GB",demo:"/in-article/"}})],1)],1),r("section",{staticClass:"container ads"},[r("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}})],1),r("footer",{staticClass:"footer"},[r("c-flex",{attrs:{m:"2",align:"center",justify:"center"}},[r("c-text",{attrs:{textAlign:"center"}},[t._v("Built with ❤️ by "),r("a",{attrs:{href:"https://mazipan.space"}},[t._v("Irfan Maulana")])])],1)],1)])},a=[],o=r("24a5"),s=r("1cc3"),i=r("6dd5"),c=r("c3ab"),l=r("f8e4"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("c-box",{attrs:{maxW:"sm",mb:5,"border-width":"1px",rounded:"lg",overflow:"hidden"}},[r("c-image",{attrs:{src:t.property.imageUrl,alt:t.property.imageAlt}}),r("c-box",{attrs:{p:"6"}},[r("c-box",{attrs:{d:"flex","align-items":"baseline"}},[r("c-badge",{attrs:{rounded:"full",px:"2","variant-color":"green"}},[t._v(" New ")]),r("c-box",{attrs:{color:"gray.500","font-weight":"semibold","letter-spacing":"wide","font-size":"xs","text-transform":"uppercase",ml:"2"}},[t._v(" "+t._s(t.property.beds)+" beds • "+t._s(t.property.baths)+" baths ")])],1),r("c-box",{attrs:{mt:"1","font-weight":"semibold",as:"h4","line-height":"tight","is-truncated":""}},[t._v(" "+t._s(t.property.title)+" ")]),r("c-box",[t._v(" "+t._s(t.property.formattedPrice)+" "),r("c-box",{attrs:{as:"span",color:"gray.600",fontSize:"sm"}},[t._v(" / wk ")])],1),r("c-box",{attrs:{d:"flex",mt:"2","align-items":"center"}},[t._l(Array(5).fill(""),(function(e,n){return r("c-icon",{key:n,attrs:{name:"star",color:n<t.property.rating?"green.500":"gray.300"}})})),r("c-box",{attrs:{as:"span",ml:"2",color:"gray.600","font-size":"sm"}},[t._v(" "+t._s(t.property.reviewCount)+" reviews ")])],2)],1)],1)},u=[],f=r("1cfd"),h=r("61fe"),p=r("81b4"),g={name:"ImageCard",components:{CBox:o["a"],CImage:f["a"],CBadge:h["a"],CIcon:p["a"]},data:function(){return{property:{imageUrl:"https://bit.ly/2Z4KKcF",imageAlt:"Rear view of modern home with pool",beds:3,baths:2,title:"Modern home in city center in the heart of historic Los Angeles",formattedPrice:"$1,900.00",reviewCount:34,rating:4}}}},m=g,b=r("fce9"),v=Object(b["a"])(m,d,u,!1,null,null,null),y=v.exports,w={name:"InFeed",components:{Box:l["a"],ImageCard:y,CBox:o["a"],CFlex:s["a"],CText:i["a"],CStack:c["a"]},data:function(){return{}}},x=w,C=(r("aea6"),Object(b["a"])(x,n,a,!1,null,null,null));e["default"]=C.exports},d517:function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var a=t[n];"."===a?t.splice(n,1):".."===a?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t){"string"!==typeof t&&(t+="");var e,r=0,n=-1,a=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!a){r=e+1;break}}else-1===n&&(a=!1,n=e+1);return-1===n?"":t.slice(r,n)}function a(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,n="/"===s.charAt(0))}return e=r(a(e.split("/"),(function(t){return!!t})),!n).join("/"),(n?"/":"")+e||"."},e.normalize=function(t){var n=e.isAbsolute(t),s="/"===o(t,-1);return t=r(a(t.split("/"),(function(t){return!!t})),!n).join("/"),t||n||(t="."),t&&s&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(a(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var r=t.length-1;r>=0;r--)if(""!==t[r])break;return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var a=n(t.split("/")),o=n(r.split("/")),s=Math.min(a.length,o.length),i=s,c=0;c<s;c++)if(a[c]!==o[c]){i=c;break}var l=[];for(c=i;c<a.length;c++)l.push("..");return l=l.concat(o.slice(i)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),r=47===e,n=-1,a=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!a){n=o;break}}else a=!1;return-1===n?r?"/":".":r&&1===n?"/":t.slice(0,n)},e.basename=function(t,e){var r=n(t);return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,r=0,n=-1,a=!0,o=0,s=t.length-1;s>=0;--s){var i=t.charCodeAt(s);if(47!==i)-1===n&&(a=!1,n=s+1),46===i?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!a){r=s+1;break}}return-1===e||-1===n||0===o||1===o&&e===n-1&&e===r+1?"":t.slice(e,n)};var o="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r("c32c"))},da7d:function(t,e,r){}}]);
//# sourceMappingURL=in-feed.6184a0f0.js.map
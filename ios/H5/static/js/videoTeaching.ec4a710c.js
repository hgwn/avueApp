(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["videoTeaching"],{"2c92":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isWechat?t._e():s("div",{staticClass:"header"},[s("div",{staticClass:"header_body"},[s("span",{staticClass:"goBack",on:{click:t.goBack}},[s("van-icon",{attrs:{name:"arrow-left"}})],1),s("div",{staticClass:"flex-vertical-centering"},[s("p",{staticClass:"textEllipsis",on:{click:t.showLog}},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?s("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},a=[],i={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{clickNum:0}},computed:{isWechat:function(){return this.$store.state.isWechat}},watch:{$route:function(){this.clickNum=0}},created:function(){},methods:{goBack:function(){var t=this;t.$router.go(-1)},shareSheet:function(){this.$emit("shareSheet")},showLog:function(){if(this.clickNum++,5===this.clickNum){this.clickNum=0;var t=document.getElementsByClassName("vc-switch")[0],e=window.getComputedStyle(t,null).getPropertyValue("display");"block"===e?VCONSOLE.hide():VCONSOLE.show()}}}},c=i,o=(s("c411"),s("2877")),r=Object(o["a"])(c,n,a,!1,null,"5db562cc",null);e["a"]=r.exports},"72d0":function(t,e,s){"use strict";var n=s("b5b8"),a=s.n(n);a.a},"7fce":function(t,e,s){"use strict";var n=s("eef9"),a=s.n(n);a.a},a33f:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend-page"},[n("top-msg",{attrs:{"header-name":"视频教学"}}),n("share-box",[[n("img",{attrs:{slot:"topImg",src:s("d473"),alt:""},slot:"topImg"})],[n("div",{staticClass:"box",attrs:{slot:"shareBox"},slot:"shareBox"},t._l(t.list,(function(e,s){return n("div",{key:s,staticClass:"item flex-row-between",on:{click:function(s){return t.$openLinks(e.url,e.name)}}},[n("div",{staticClass:"main flex-column"},[n("span",{staticClass:"title"},[t._v(t._s(e.name))])]),n("i",{staticClass:"iconfont icon-Path"})])})),0)]],2)],1)},a=[],i=s("2c92"),c=s("cffb"),o={name:"VideoTeaching",components:{topMsg:i["a"],shareBox:c["a"]},data:function(){return{msg:!0,list:[]}},created:function(){this.thisTitle(),this.getListInfo()},methods:{thisTitle:function(){document.title="视频教学"},getListInfo:function(){var t=this;this.$api.recommend.listVideo().then((function(e){console.log(e),t.list=e.data.data}))}}},r=o,l=(s("7fce"),s("2877")),u=Object(l["a"])(r,n,a,!1,null,"5b349b10",null);e["default"]=u.exports},b24c:function(t,e,s){},b5b8:function(t,e,s){},c411:function(t,e,s){"use strict";var n=s("b24c"),a=s.n(n);a.a},cffb:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"con_body position_re"},[t._t("topImg"),t._t("shareBox")],2)},a=[],i={name:"ShareBox",props:{},data:function(){return{}},computed:{},created:function(){},methods:{}},c=i,o=(s("72d0"),s("2877")),r=Object(o["a"])(c,n,a,!1,null,"374e2253",null);e["a"]=r.exports},d473:function(t,e,s){t.exports=s.p+"static/img/banner2@2x.26183a61.png"},eef9:function(t,e,s){}}]);
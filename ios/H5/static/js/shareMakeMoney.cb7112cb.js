(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shareMakeMoney"],{"29e8":function(t,e,s){"use strict";var n=s("3ff7"),a=s.n(n);a.a},"2c92":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isWechat?t._e():s("div",{staticClass:"header"},[s("div",{staticClass:"header_body"},[s("span",{staticClass:"goBack",on:{click:t.goBack}},[s("van-icon",{attrs:{name:"arrow-left"}})],1),s("div",{staticClass:"flex-vertical-centering"},[s("p",{staticClass:"textEllipsis",on:{click:t.showLog}},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?s("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},a=[],c={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{clickNum:0}},computed:{isWechat:function(){return this.$store.state.isWechat}},watch:{$route:function(){this.clickNum=0}},created:function(){},methods:{goBack:function(){var t=this;t.$router.go(-1)},shareSheet:function(){this.$emit("shareSheet")},showLog:function(){if(this.clickNum++,5===this.clickNum){this.clickNum=0;var t=document.getElementsByClassName("vc-switch")[0],e=window.getComputedStyle(t,null).getPropertyValue("display");"block"===e?VCONSOLE.hide():VCONSOLE.show()}}}},i=c,o=(s("88d0"),s("2877")),r=Object(o["a"])(i,n,a,!1,null,"0fe7e72d",null);e["a"]=r.exports},"3ff7":function(t,e,s){},"4acb":function(t,e,s){"use strict";var n=s("c4de"),a=s.n(n);a.a},"7c97":function(t,e,s){t.exports=s.p+"static/img/banner@2x.66e4e50f.png"},"88d0":function(t,e,s){"use strict";var n=s("a4c5"),a=s.n(n);a.a},a4c5:function(t,e,s){},c4de:function(t,e,s){},cffb:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"con_body position_re"},[t._t("topImg"),t._t("shareBox")],2)},a=[],c={name:"ShareBox",props:{},data:function(){return{}},computed:{},created:function(){},methods:{}},i=c,o=(s("4acb"),s("2877")),r=Object(o["a"])(i,n,a,!1,null,"2cf8e94f",null);e["a"]=r.exports},d6c8:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mgb110 recommend-page"},[n("top-msg",{attrs:{"header-name":"分享赚钱"}}),n("share-box",[[n("img",{attrs:{slot:"topImg",src:s("7c97"),alt:""},slot:"topImg"})],[n("div",{staticClass:"box",attrs:{slot:"shareBox"},slot:"shareBox"},t._l(t.list,(function(e,s){return n("div",{key:s,staticClass:"item flex-row-between",on:{click:function(s){return t.$openLinks(e.url,e.name)}}},[n("div",{staticClass:"main flex-column"},[n("span",{staticClass:"title"},[t._v(t._s(e.name))]),n("span",{staticClass:"content textEllipsis"},[t._v(t._s(e.sub_name))])]),n("i",{staticClass:"iconfont icon-Path"})])})),0)]],2)],1)},a=[],c=s("2c92"),i=s("cffb"),o={name:"ShareMakeMoney",components:{topMsg:c["a"],shareBox:i["a"]},data:function(){return{msg:!0,list:[]}},created:function(){this.thisTitle(),this.getListInfo()},methods:{thisTitle:function(){document.title="分享赚钱"},getListInfo:function(){var t=this;this.$api.recommend.listInfoMoney().then((function(e){console.log(e),t.list=e.data.data}))}}},r=o,l=(s("29e8"),s("2877")),u=Object(l["a"])(r,n,a,!1,null,"25cb8067",null);e["default"]=u.exports}}]);
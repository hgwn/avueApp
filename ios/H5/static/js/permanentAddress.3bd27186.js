(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["permanentAddress"],{"2c92":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isWechat?t._e():s("div",{staticClass:"header"},[s("div",{staticClass:"header_body"},[s("span",{staticClass:"goBack",on:{click:t.goBack}},[s("van-icon",{attrs:{name:"arrow-left"}})],1),s("div",{staticClass:"flex-vertical-centering"},[s("p",{staticClass:"textEllipsis",on:{click:t.showLog}},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?s("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},a=[],n={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{clickNum:0}},computed:{isWechat:function(){return this.$store.state.isWechat}},watch:{$route:function(){this.clickNum=0}},created:function(){},methods:{goBack:function(){var t=this;t.$router.go(-1)},shareSheet:function(){this.$emit("shareSheet")},showLog:function(){if(this.clickNum++,5===this.clickNum){this.clickNum=0;var t=document.getElementsByClassName("vc-switch")[0],e=window.getComputedStyle(t,null).getPropertyValue("display");"block"===e?VCONSOLE.hide():VCONSOLE.show()}}}},o=n,c=(s("c411"),s("2877")),r=Object(c["a"])(o,i,a,!1,null,"5db562cc",null);e["a"]=r.exports},"48a9b":function(t,e,s){"use strict";var i=s("c468"),a=s.n(i);a.a},b24c:function(t,e,s){},c411:function(t,e,s){"use strict";var i=s("b24c"),a=s.n(i);a.a},c468:function(t,e,s){},ec76:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("top-msg",{attrs:{"header-name":"常住地址"}}),s("div",{staticClass:"con_body"},[s("van-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.addressList,(function(e,i){return s("div",{key:i,staticClass:"address_item",on:{click:function(s){t.recordId&&t.addressSelected(e)}}},[s("div",{staticClass:"address_msg flex-row"},[s("i",{staticClass:"iconfont icon-dingwei"}),s("span",{staticClass:"size24 color666"},[t._v(t._s(e.address_info.area+e.address_info.address))])]),s("div",{staticClass:"item_footer flex-row-between"},[s("van-radio",{staticClass:"size24 color666",attrs:{name:i},on:{click:function(s){return t.setDefault(e.id)}}},[t._v("\n            设为默认\n          ")]),s("div",{staticClass:"item_footer_i flex-row-center"},[s("i",{staticClass:"iconfont icon-bianji",on:{click:function(s){return s.stopPropagation(),t.bianji(e)}}}),s("i",{staticClass:"iconfont icon-shanchu",on:{click:function(s){return s.stopPropagation(),t.shanchu(e.id)}}})])],1)])})),0)],1),s("div",{staticClass:"btn_footer"},[s("div",{staticClass:"flex-vertical-centering"},[s("router-link",{staticClass:"out_btn flex-vertical-centering",attrs:{to:"/newAddress"}},[s("div",{staticClass:"flex-row-center"},[s("i",{staticClass:"iconfont icon-jia"}),s("span",{staticClass:"color0F5 size30"},[t._v("添加地址")])])])],1)])],1)},a=[],n=s("2c92"),o={name:"ReceivingAddress",components:{topMsg:n["a"]},data:function(){return{radio:"0",addressList:[],recordId:""}},created:function(){this.thisTitle(),this.getAddressList(),this.$route.query.id&&(this.recordId=this.$route.query.id)},methods:{thisTitle:function(){document.title="常住地址"},getAddressList:function(){var t=this;t.$api.center.getUserAddress().then((function(e){console.log(e),t.addressList=e.data.data,t.addressList.map((function(e,s,i){e.use_default&&(t.radio=s)}))}))},bianji:function(t){console.log("编辑"),this.$router.push({path:"/newAddress",query:{items:t,type:"bianji"}})},shanchu:function(t){var e=this;e.$dialog({title:"确定要删除该地址？",showCancelButton:!0,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0}).then((function(s){e.$api.center.delUserAddress(t).then((function(t){e.getAddressList()}))}))},addressSelected:function(t){var e=this,s=this;console.log(t);var i={address:t.address_info.address,area:t.address_info.area,name:t.address_info.name,phone:t.address_info.phone};s.$api.recommend.setReocrd(s.recordId,i).then((function(t){console.log(t),e.$router.push({path:"/awardRecord",query:{}})}))},setDefault:function(t){var e=this;e.$api.center.setDefault(t).then((function(t){e.getAddressList()}))}}},c=o,r=(s("48a9b"),s("2877")),d=Object(r["a"])(c,i,a,!1,null,"51fae634",null);e["default"]=d.exports}}]);
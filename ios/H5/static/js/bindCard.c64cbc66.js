(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bindCard"],{"2c92":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isWechat?t._e():a("div",{staticClass:"header"},[a("div",{staticClass:"header_body"},[a("span",{staticClass:"goBack",on:{click:t.goBack}},[a("van-icon",{attrs:{name:"arrow-left"}})],1),a("div",{staticClass:"flex-vertical-centering"},[a("p",{staticClass:"textEllipsis",on:{click:t.showLog}},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?a("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},s=[],n={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{clickNum:0}},computed:{isWechat:function(){return this.$store.state.isWechat}},watch:{$route:function(){this.clickNum=0}},created:function(){},methods:{goBack:function(){var t=this;t.$router.go(-1)},shareSheet:function(){this.$emit("shareSheet")},showLog:function(){if(this.clickNum++,5===this.clickNum){this.clickNum=0;var t=document.getElementsByClassName("vc-switch")[0],e=window.getComputedStyle(t,null).getPropertyValue("display");"block"===e?VCONSOLE.hide():VCONSOLE.show()}}}},r=n,c=(a("88d0"),a("2877")),l=Object(c["a"])(r,i,s,!1,null,"0fe7e72d",null);e["a"]=l.exports},"68cc":function(t,e,a){},"85d4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("top-msg",{attrs:{"header-name":"发送验证码"}}),a("div",{staticClass:"con_body"},[a("div",{staticClass:"form_cells form_cells_form bgfff"},[a("div",{staticClass:"form_cell"},[t._m(0),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30"},[t._v(t._s(t.creditCardId))])])]),a("div",{staticClass:"form_cell"},[t._m(1),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30"},[t._v(t._s(t.bankSelect.name))])])]),a("div",{staticClass:"form_cell"},[t._m(2),a("div",{staticClass:"form_cellBd"},[a("span",[t._v(t._s(t.CVN2))])])]),a("div",{staticClass:"form_cell"},[t._m(3),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30 inline_block w30"},[t._v(t._s(t.validityMonthSelect?t.validityMonthSelect:""))]),a("span",[t._v("月")]),a("span",{staticClass:"w10 inline_block cen",staticStyle:{color:"#BEBEBE"}},[t._v(" / ")]),a("span",{staticClass:" size30 inline_block w30"},[t._v(t._s(t.validityYearSelect?t.validityYearSelect:""))]),a("span",[t._v("年")])])]),a("div",{staticClass:"form_cell"},[t._m(4),a("div",{staticClass:"form_cellBd"},[a("span",[t._v(t._s(t.tel))])])]),a("div",{staticClass:"form_cell"},[t._m(5),a("div",{staticClass:"form_cellBd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form_input",attrs:{type:"number",placeholder:"请输入验证码"},domProps:{value:t.code},on:{keyup:function(){t.code.length>2&&(t.code=t.code.slice(0,6))},input:function(e){e.target.composing||(t.code=e.target.value)}}})]),a("div",{staticClass:"form_cellFt"},[t.isGetCode?a("button",{staticClass:"btn_stay"},[t._v("\n            "+t._s(t.num)+"s后重发\n          ")]):a("button",{staticClass:"btn_getCode",on:{click:t.getCodeFun}},[t._v("\n            获取验证码\n          ")])])])]),t._m(6),a("div",{staticClass:"btn_warp"},[a("button",{staticClass:"btn btn_add",on:{click:t.confirmBindCard}},[t._v("\n        确  定\n      ")])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("银行卡号")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("所属银行")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("CVN2")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("有效期")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("预留手机号")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("验证码")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_tip flex_sb"},[a("p",{staticClass:"size26 color999"},[t._v("\n        验证码将发到预留手机号中\n      ")])])}],n=(a("5f5f"),a("f253")),r=(a("e7e5"),a("d399")),c=a("2c92"),l=(a("5b4d"),a("2b0e"));function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}l["default"].use(r["a"]);var d={name:"BindCard",components:o({topMsg:c["a"]},n["a"].name,n["a"]),props:["fromIntelligencePage","hideBindCard","cId","cCode"],data:function(){return{cardId:this.$util.getQueryVariable("cardId"),channelCode:this.$util.getQueryVariable("channelCode"),creditCardId:"",cardName:"",CVN2:"",validity:"",tel:"",code:"",isGetCode:!1,num:60,timer:"",bankSelect:{},bankListArr:[],validityMonthList:[],validityMonthSelect:"",validityYearList:[],validityYearSelect:"",bizOrderNumber:""}},computed:{currentCreditCard:function(){return this.$store.state.currentCreditCard},settleMsg:function(){return this.$store.state.settleMsg},orderData:function(){return this.$store.state.orderData},bankList:function(){return this.$store.state.bankList}},created:function(){this.fromIntelligencePage&&(this.cardId=this.cId,this.channelCode=this.cCode);for(var t=1;t<13;t++)t<10?this.validityMonthList.push("0"+t):this.validityMonthList.push(t);for(var e=18;e<100;e++)this.validityYearList.push("20"+e);this.thisTitle(),this.getBankListFun(),this.getCreditCardMsg()},methods:{thisTitle:function(){document.title="获取验证码"},getCodeFun:function(){var t=this,e=this;e.isGetCode||(console.log("获取验证码"),e.isGetCode=!0,e.timer=setInterval((function(){0!==e.num?e.num--:(e.isGetCode=!1,e.num=60,clearInterval(e.timer))}),1e3)),e.$api.card.bindChannelCard("CREDIT",e.cardId,e.channelCode).then((function(a){console.log(a.data.data.state);var i=a.data.data.state,s=a.data.data.errorMsg;t.bizOrderNumber=a.data.data.bizOrderNumber,"000"!=i&&(console.log(s),Object(r["a"])(s),e.isGetCode=!1,clearInterval(e.timer)),console.log("进入渠道绑卡"),e.codeToken=a.data.token,console.log(a),console.log(e.codeToken)})).catch((function(){e.isGetCode=!1,e.num=60,clearInterval(e.timer)}))},getCreditCardMsg:function(){if(console.log("获取信用卡信息"),console.log(this.currentCreditCard),this.creditCardId=this.currentCreditCard.card_info.card_no.replace(/\s/g,"").replace(/(\d{4})(?=\d)/g,"$1 "),this.$set(this.bankSelect,"name",this.currentCreditCard.bank_info.name),this.$set(this.bankSelect,"bank_no",this.currentCreditCard.bank_info.bank_no),this.CVN2=this.currentCreditCard.card_info.lass_three_cvn2,this.validity=this.currentCreditCard.card_info.valid_date,-1!==this.currentCreditCard.card_info.valid_date.indexOf("/")){var t=this.currentCreditCard.card_info.valid_date.split("/");this.validityMonthSelect=t[0],this.validityYearSelect="20"+t[1]}else this.validityMonthSelect=this.currentCreditCard.card_info.valid_date.substr(0,2),this.validityYearSelect="20"+this.currentCreditCard.card_info.valid_date.substr(2);this.tel=this.currentCreditCard.card_info.card_phone_number},confirmBindCard:function(){var t=this;t.code?t.payment():t.$dialog({title:"请输入收到的验证码",showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})},payFun:function(){var t=this;return t.$api.proceeds.tradePay(t.orderData).then((function(e){t.isLoading.clear(),e=e.data,"200000"===e.code&&("INTERNAL_PAGE"===t.settleMsg.pay_provider_config.param_type?t.$dialog({title:"交易完成",showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0}):"EXTERNAL_URL"===t.settleMsg.pay_provider_config.param_type&&(window.location.href=e.data.url))})).then((function(){t.isLoading.clear(),t.$router.push("/proceeds")}),(function(){t.isLoading.clear(),t.$router.push("/proceeds")}))},closeStatusPicker:function(t){this.bankSelect=t,this.bankPicker=!1,this.openTouch()},closeValidityMonth:function(t){this.validityMonthSelect=t,this.validityMonthPicker=!1,this.openTouch()},closeValidityYear:function(t){this.validityYearSelect=t,this.validityYearPicker=!1,this.openTouch()},getBankListFun:function(){var t=this;t.$store.dispatch("GetBankList").then((function(){for(var e in t.bankList)t.bankListArr.push({bankNo:e,text:t.bankList[e]})}))},selectCard:function(t){this.bankSelect=t,this.bankPicker=!1}}},u=d,f=(a("8f44"),a("2877")),h=Object(f["a"])(u,i,s,!1,null,"55810fff",null);e["default"]=h.exports},"88d0":function(t,e,a){"use strict";var i=a("a4c5"),s=a.n(i);s.a},"8f44":function(t,e,a){"use strict";var i=a("ff38"),s=a.n(i);s.a},a4c5:function(t,e,a){},a562:function(t,e,a){"use strict";var i=a("b75b"),s=a.n(i);s.a},b75b:function(t,e,a){},cf24:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("top-msg",{attrs:{"header-name":"银行卡验证"}}),a("div",{staticClass:"con_body"},[a("div",{staticClass:"form_cells form_cells_form bgfff"},[a("div",{staticClass:"form_cell"},[t._m(0),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30"},[t._v(t._s(t.creditCardId))])])]),a("div",{staticClass:"form_cell"},[t._m(1),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30"},[t._v(t._s(t.bankSelect.name))])])]),a("div",{staticClass:"form_cell"},[t._m(2),a("div",{staticClass:"form_cellBd"},[a("span",[t._v(t._s(t.CVN2))])])]),a("div",{staticClass:"form_cell"},[t._m(3),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30 inline_block w30"},[t._v(t._s(t.validityMonthSelect?t.validityMonthSelect:""))]),a("span",[t._v("月")]),a("span",{staticClass:"w10 inline_block cen",staticStyle:{color:"#BEBEBE"}},[t._v(" / ")]),a("span",{staticClass:" size30 inline_block w30"},[t._v(t._s(t.validityYearSelect?t.validityYearSelect:""))]),a("span",[t._v("年")])])]),a("div",{staticClass:"form_cell"},[t._m(4),a("div",{staticClass:"form_cellBd"},[a("span",[t._v(t._s(t.tel))])])]),a("div",{staticClass:"form_cell"},[t._m(5),a("div",{staticClass:"form_cellBd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form_input",attrs:{type:"number",placeholder:"请输入验证码"},domProps:{value:t.code},on:{keyup:function(){t.code.length>2&&(t.code=t.code.slice(0,6))},input:function(e){e.target.composing||(t.code=e.target.value)}}})]),a("div",{staticClass:"form_cellFt"},[t.isGetCode?a("button",{staticClass:"btn_stay"},[t._v("\n            "+t._s(t.num)+"s后重发\n          ")]):a("button",{staticClass:"btn_getCode",on:{click:t.getCodeFun}},[t._v("\n            获取验证码\n          ")])])])]),t._m(6),a("div",{staticClass:"btn_warp"},[a("button",{staticClass:"btn btn_add",on:{click:t.confirmBindCard}},[t._v("\n        保  存\n      ")])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("银行卡号")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("所属银行")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("CVN2")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("有效期")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("预留手机号")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("验证码")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_tip flex_sb"},[a("p",{staticClass:"size26 color999"},[t._v("\n        验证码将发到预留手机号中\n      ")])])}],n=(a("5f5f"),a("f253")),r=(a("e7e5"),a("d399")),c=a("2c92"),l=(a("5b4d"),a("2b0e"));function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}l["default"].use(r["a"]);var d={name:"BindCard",components:o({topMsg:c["a"]},n["a"].name,n["a"]),props:["fromIntelligencePage","hideBindCard","cId","cCode"],data:function(){return{cardId:this.$util.getQueryVariable("cardId"),channelCode:this.$util.getQueryVariable("channelCode"),creditCardId:"",cardName:"",CVN2:"",validity:"",tel:"",code:"",isGetCode:!1,num:60,timer:"",bankSelect:{},bankListArr:[],validityMonthList:[],validityMonthSelect:"",validityYearList:[],validityYearSelect:"",bizOrderNumber:""}},computed:{currentCreditCard:function(){return this.$store.state.currentCreditCard},settleMsg:function(){return this.$store.state.settleMsg},orderData:function(){return this.$store.state.orderData},bankList:function(){return this.$store.state.bankList}},created:function(){this.fromIntelligencePage&&(this.cardId=this.cId,this.channelCode=this.cCode);for(var t=1;t<13;t++)t<10?this.validityMonthList.push("0"+t):this.validityMonthList.push(t);for(var e=18;e<100;e++)this.validityYearList.push("20"+e);this.thisTitle(),this.getBankListFun(),this.getCreditCardMsg()},methods:{thisTitle:function(){document.title="获取验证码"},getCodeFun1:function(){var t=this;t.isGetCode||(console.log("获取验证码"),t.isGetCode=!0,t.timer=setInterval((function(){0!==t.num?t.num--:(t.isGetCode=!1,t.num=60,clearInterval(t.timer))}),1e3));var e={creditCardId:t.creditCardId,tel:t.tel};t.$api.card.getVerificationCode("CREDIT",e).then((function(e){console.log("进入渠道绑卡"),t.codeToken=e.data.token,console.log(e),console.log(t.codeToken)})).catch((function(){t.isGetCode=!1,t.num=60,clearInterval(t.timer)}))},getCodeFun:function(){var t=this,e=this;e.isGetCode||(console.log("获取验证码"),e.isGetCode=!0,e.timer=setInterval((function(){0!==e.num?e.num--:(e.isGetCode=!1,e.num=60,clearInterval(e.timer))}),1e3)),e.$api.card.bindChannelCard("CREDIT",e.cardId,e.channelCode).then((function(a){console.log(a.data.data.state);var i=a.data.data.state,s=a.data.data.errorMsg;t.bizOrderNumber=a.data.data.bizOrderNumber,"000"!=i&&(console.log(s),Object(r["a"])(s),e.isGetCode=!1,clearInterval(e.timer)),console.log("进入渠道绑卡"),e.codeToken=a.data.token,console.log(a),console.log(e.codeToken)})).catch((function(){e.isGetCode=!1,e.num=60,clearInterval(e.timer)}))},getCreditCardMsg:function(){if(console.log("获取信用卡信息"),console.log(this.currentCreditCard),this.creditCardId=this.currentCreditCard.card_info.card_no.replace(/\s/g,"").replace(/(\d{4})(?=\d)/g,"$1 "),this.$set(this.bankSelect,"name",this.currentCreditCard.bank_info.name),this.$set(this.bankSelect,"bank_no",this.currentCreditCard.bank_info.bank_no),this.CVN2=this.currentCreditCard.card_info.lass_three_cvn2,this.validity=this.currentCreditCard.card_info.valid_date,-1!==this.currentCreditCard.card_info.valid_date.indexOf("/")){var t=this.currentCreditCard.card_info.valid_date.split("/");this.validityMonthSelect=t[0],this.validityYearSelect="20"+t[1]}else this.validityMonthSelect=this.currentCreditCard.card_info.valid_date.substr(0,2),this.validityYearSelect="20"+this.currentCreditCard.card_info.valid_date.substr(2);this.tel=this.currentCreditCard.card_info.card_phone_number},confirmBindCard:function(){var t=this;if(t.code){var e={captcha_code:t.code};t.isLoading=this.$toast.loading({duration:3e3,forbidClick:!0,loadingType:"spinner",message:"请稍候..."}),t.$api.card.bindChannelCardConfirm("CREDIT",t.cardId,t.channelCode,t.bizOrderNumber,e).then((function(e){var a=e.data.data.state,i=e.data.data.errorMsg;"000"!=a?Object(r["a"])(i):(Object(r["a"])(i),t.$emit("toSuccess"),t.isLoading.clear(),setTimeout((function(){t.$router.go(-1)}),1e3))}))}else t.$dialog({title:"请输入收到的验证码",showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})},payFun:function(){var t=this;return t.$api.proceeds.tradePay(t.orderData).then((function(e){t.isLoading.clear(),e=e.data,"200000"===e.code&&("INTERNAL_PAGE"===t.settleMsg.pay_provider_config.param_type?t.$dialog({title:"交易完成",showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0}):"EXTERNAL_URL"===t.settleMsg.pay_provider_config.param_type&&(window.location.href=e.data.url))})).then((function(){t.isLoading.clear(),t.$router.push("/proceeds")}),(function(){t.isLoading.clear(),t.$router.push("/proceeds")}))},closeStatusPicker:function(t){this.bankSelect=t,this.bankPicker=!1,this.openTouch()},closeValidityMonth:function(t){this.validityMonthSelect=t,this.validityMonthPicker=!1,this.openTouch()},closeValidityYear:function(t){this.validityYearSelect=t,this.validityYearPicker=!1,this.openTouch()},getBankListFun:function(){var t=this;t.$store.dispatch("GetBankList").then((function(){for(var e in t.bankList)t.bankListArr.push({bankNo:e,text:t.bankList[e]})}))},selectCard:function(t){this.bankSelect=t,this.bankPicker=!1}}},u=d,f=(a("a562"),a("2877")),h=Object(f["a"])(u,i,s,!1,null,"c7eaaeba",null);e["default"]=h.exports},f456:function(t,e,a){"use strict";var i=a("68cc"),s=a.n(i);s.a},f933:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("top-msg",{attrs:{"header-name":"银行卡验证"}}),a("div",{staticClass:"con_body"},[a("div",{staticClass:"form_cells form_cells_form bgfff"},[a("div",{staticClass:"form_cell"},[t._m(0),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30"},[t._v(t._s(t.creditCardId))])])]),a("div",{staticClass:"form_cell"},[t._m(1),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30"},[t._v(t._s(t.bankSelect.name))])])]),a("div",{staticClass:"form_cell"},[t._m(2),a("div",{staticClass:"form_cellBd"},[a("span",[t._v(t._s(t.CVN2))])])]),a("div",{staticClass:"form_cell"},[t._m(3),a("div",{staticClass:"form_cellBd"},[a("span",{staticClass:"size30 inline_block w30"},[t._v(t._s(t.validityMonthSelect?t.validityMonthSelect:""))]),a("span",[t._v("月")]),a("span",{staticClass:"w10 inline_block cen",staticStyle:{color:"#BEBEBE"}},[t._v(" / ")]),a("span",{staticClass:" size30 inline_block w30"},[t._v(t._s(t.validityYearSelect?t.validityYearSelect:""))]),a("span",[t._v("年")])])]),a("div",{staticClass:"form_cell"},[t._m(4),a("div",{staticClass:"form_cellBd"},[a("span",[t._v(t._s(t.tel))])])]),a("div",{staticClass:"form_cell"},[t._m(5),a("div",{staticClass:"form_cellBd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form_input",attrs:{type:"number",placeholder:"请输入验证码"},domProps:{value:t.code},on:{keyup:function(){t.code.length>2&&(t.code=t.code.slice(0,6))},input:function(e){e.target.composing||(t.code=e.target.value)}}})]),a("div",{staticClass:"form_cellFt"},[t.isGetCode?a("button",{staticClass:"btn_stay"},[t._v("\n            "+t._s(t.num)+"s后重发\n          ")]):a("button",{staticClass:"btn_getCode",on:{click:t.getCodeFun}},[t._v("\n            获取验证码\n          ")])])])]),t._m(6),a("div",{staticClass:"btn_warp"},[a("button",{staticClass:"btn btn_add",on:{click:t.confirmBindCard}},[t._v("\n        保  存\n      ")])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("银行卡号")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("所属银行")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("CVN2")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("有效期")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("预留手机号")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("验证码")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_tip flex_sb"},[a("p",{staticClass:"size26 color999"},[t._v("\n        验证码将发到预留手机号中\n      ")])])}],n=(a("5f5f"),a("f253")),r=(a("e7e5"),a("d399")),c=a("2c92"),l=(a("5b4d"),a("2b0e"));function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}l["default"].use(r["a"]);var d={name:"BindCard",components:o({topMsg:c["a"]},n["a"].name,n["a"]),props:["fromIntelligencePage","hideBindCard","cId","cCode"],data:function(){return{cardId:this.$util.getQueryVariable("cardId"),channelCode:this.$util.getQueryVariable("channelCode"),creditCardId:"",cardName:"",CVN2:"",validity:"",tel:"",code:"",isGetCode:!1,smsFlag:1,num:60,timer:"",bankSelect:{},bankListArr:[],validityMonthList:[],validityMonthSelect:"",validityYearList:[],validityYearSelect:"",bizOrderNumber:""}},computed:{currentCreditCard:function(){return this.$store.state.currentCreditCard},settleMsg:function(){return this.$store.state.settleMsg},orderData:function(){return this.$store.state.orderData},bankList:function(){return this.$store.state.bankList}},created:function(){this.fromIntelligencePage&&(this.cardId=this.cId,this.channelCode=this.cCode);for(var t=1;t<13;t++)t<10?this.validityMonthList.push("0"+t):this.validityMonthList.push(t);for(var e=18;e<100;e++)this.validityYearList.push("20"+e);this.thisTitle(),this.getBankListFun(),this.getCreditCardMsg()},methods:{thisTitle:function(){document.title="获取验证码"},getCodeFun1:function(){var t=this;t.isGetCode||(console.log("获取验证码"),t.isGetCode=!0,t.timer=setInterval((function(){0!==t.num?t.num--:(t.isGetCode=!1,t.num=60,clearInterval(t.timer))}),1e3));var e={creditCardId:t.creditCardId,tel:t.tel};t.$api.card.getVerificationCode("CREDIT",e).then((function(e){console.log("进入渠道绑卡"),t.codeToken=e.data.token,console.log(e),console.log(t.codeToken)})).catch((function(){t.isGetCode=!1,t.num=60,clearInterval(t.timer)}))},getCodeFun:function(){var t=this,e=this;e.isGetCode||(console.log("获取验证码"),e.isGetCode=!0,e.timer=setInterval((function(){0!==e.num?e.num--:(e.isGetCode=!1,e.num=60,clearInterval(e.timer))}),1e3)),e.$api.card.bindChannelCard("CREDIT",e.cardId,e.channelCode).then((function(a){console.log(a.data.data.state);var i=a.data.data.state,s=a.data.data.errorMsg,n=a.data.data.smsFlag;t.bizOrderNumber=a.data.data.bizOrderNumber,"000"!=i?(console.log(s),"系统异常"===s?(Object(r["a"])("银行卡信息不匹配"),e.isGetCode=!1,e.num=60,clearInterval(e.timer)):(Object(r["a"])(s),e.isGetCode=!1,clearInterval(e.timer))):0===n&&(console.log("免短信验证银行签约:::"+n),e.nosmsSumbit()),console.log("进入渠道绑卡"),e.codeToken=a.data.token,console.log(a),console.log(e.codeToken)})).catch((function(){e.isGetCode=!1,e.num=60,clearInterval(e.timer)}))},nosmsSumbit:function(){var t=this;t.$dialog.alert({title:"签约成功",message:"当前信用卡是免短信签约"}).then((function(){t.$router.go(-1)}))},getCreditCardMsg:function(){if(console.log("获取信用卡信息"),console.log(this.currentCreditCard),this.creditCardId=this.currentCreditCard.card_info.card_no.replace(/\s/g,"").replace(/(\d{4})(?=\d)/g,"$1 "),this.$set(this.bankSelect,"name",this.currentCreditCard.bank_info.name),this.$set(this.bankSelect,"bank_no",this.currentCreditCard.bank_info.bank_no),this.CVN2=this.currentCreditCard.card_info.lass_three_cvn2,this.validity=this.currentCreditCard.card_info.valid_date,-1!==this.currentCreditCard.card_info.valid_date.indexOf("/")){var t=this.currentCreditCard.card_info.valid_date.split("/");this.validityMonthSelect=t[0],this.validityYearSelect="20"+t[1]}else this.validityMonthSelect=this.currentCreditCard.card_info.valid_date.substr(0,2),this.validityYearSelect="20"+this.currentCreditCard.card_info.valid_date.substr(2);this.tel=this.currentCreditCard.card_info.card_phone_number},confirmBindCard:function(){var t=this;if(t.code){var e={captcha_code:t.code};t.isLoading=this.$toast.loading({duration:3e3,forbidClick:!0,loadingType:"spinner",message:"请稍候..."}),t.$api.card.bindChannelCardConfirm("CREDIT",t.cardId,t.channelCode,t.bizOrderNumber,e).then((function(e){var a=e.data.data.state,i=e.data.data.errorMsg;"000"!=a?Object(r["a"])(i):(Object(r["a"])(i),t.hideBindCard(),t.$emit("toSuccess"),t.isLoading.clear())}))}else t.$dialog({title:"请输入收到的验证码",showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})},payFun:function(){var t=this;return t.$api.proceeds.tradePay(t.orderData).then((function(e){t.isLoading.clear(),e=e.data,"200000"===e.code&&("INTERNAL_PAGE"===t.settleMsg.pay_provider_config.param_type?t.$dialog({title:"交易完成",showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0}):"EXTERNAL_URL"===t.settleMsg.pay_provider_config.param_type&&(window.location.href=e.data.url))})).then((function(){t.isLoading.clear(),t.$router.push("/proceeds")}),(function(){t.isLoading.clear(),t.$router.push("/proceeds")}))},closeStatusPicker:function(t){this.bankSelect=t,this.bankPicker=!1,this.openTouch()},closeValidityMonth:function(t){this.validityMonthSelect=t,this.validityMonthPicker=!1,this.openTouch()},closeValidityYear:function(t){this.validityYearSelect=t,this.validityYearPicker=!1,this.openTouch()},getBankListFun:function(){var t=this;t.$store.dispatch("GetBankList").then((function(){for(var e in t.bankList)t.bankListArr.push({bankNo:e,text:t.bankList[e]})}))},selectCard:function(t){this.bankSelect=t,this.bankPicker=!1}}},u=d,f=(a("f456"),a("2877")),h=Object(f["a"])(u,i,s,!1,null,"0bdd3dec",null);e["default"]=h.exports},ff38:function(t,e,a){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["withdraw"],{1437:function(t,e,n){"use strict";var a=n("c31d"),i=n("a142"),s=n("8624"),o=n("7744"),r=n("dfaf"),c=n("f331"),u=Object(i["i"])("collapse-item"),h=u[0],d=u[1],l=["title","icon","right-icon"];e["a"]=h({mixins:[c["a"]],props:Object(a["a"])({},r["a"],{name:[String,Number],disabled:Boolean,isLink:{type:Boolean,default:!0}}),data:function(){return{show:null,inited:null}},computed:{items:function(){return this.parent.items},index:function(){return this.items.indexOf(this)},currentName:function(){return Object(i["c"])(this.name)?this.name:this.index},expanded:function(){var t=this;if(!this.parent)return null;var e=this.parent.value;return this.parent.accordion?e===this.currentName:e.some((function(e){return e===t.currentName}))}},created:function(){this.findParent("van-collapse"),this.items.push(this),this.show=this.expanded,this.inited=this.expanded},destroyed:function(){this.items.splice(this.index,1)},watch:{expanded:function(t,e){var n=this;null!==e&&(t&&(this.show=!0,this.inited=!0),Object(s["a"])((function(){var e=n.$refs,a=e.content,i=e.wrapper;if(a&&i){var o=a.clientHeight;if(o){var r=o+"px";i.style.height=t?0:r,Object(s["a"])((function(){i.style.height=t?r:0}))}else n.onTransitionEnd()}})))}},methods:{onClick:function(){if(!this.disabled){var t=this.parent,e=t.accordion&&this.currentName===t.value?"":this.currentName,n=!this.expanded;this.parent["switch"](e,n)}},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height=null:this.show=!1}},render:function(t){var e=this,n=l.reduce((function(t,n){return e.slots(n)&&(t[n]=function(){return e.slots(n)}),t}),{});this.slots("value")&&(n["default"]=function(){return e.slots("value")});var i=t(o["a"],{class:d("title",{disabled:this.disabled,expanded:this.expanded}),on:{click:this.onClick},scopedSlots:n,props:Object(a["a"])({},this.$props)}),s=this.inited&&t("div",{directives:[{name:"show",value:this.show}],ref:"wrapper",class:d("wrapper"),on:{transitionend:this.onTransitionEnd}},[t("div",{ref:"content",class:d("content")},[this.slots()])]);return t("div",{class:[d(),{"van-hairline--top":this.index}]},[i,s])}})},"240f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top-msg",{attrs:{"header-name":"提现"}}),n("div",{staticClass:"con_body height90vh flex_column flex_sb"},[n("div",[n("div",{staticClass:"userInfo_container"},[n("div",{staticClass:"money_warp"},[n("div",{staticClass:"userInfo_withdraw",on:{click:t.gotoWithdrawList}},[n("span",[t._v("提现记录")])]),n("div",{staticClass:"money_msg cen"},[n("span",{staticClass:"current-income"},[t._v("当前收益")]),n("p",{staticClass:"current-income-money"},[t._v("\n              "+t._s(t.balance)+"\n            ")])])])]),n("div",{staticClass:"CashWithdrawal"},[n("div",{staticClass:"flex-row-between"},[n("span",{staticClass:"size28 color333"},[t._v("提现金额")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.withdrawMoney,expression:"withdrawMoney",modifiers:{trim:!0}}],staticClass:"form_input",attrs:{type:"number",placeholder:"请输入提现金额"},domProps:{value:t.withdrawMoney},on:{input:function(e){e.target.composing||(t.withdrawMoney=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("span",[t._v("元")])])]),t.show1?n("div",{class:1===t.currentSelect?"BankCard flex-row-between card_item-on":"BankCard flex-row-between",on:{click:function(e){return t.toggle(1)}}},[n("div",{staticClass:"flex-row flex1"},[n("div",{staticClass:"size28 color333 mr100 BankCardMsg"},[t._v("\n            银行卡账号\n          ")]),n("div",{staticClass:"size28 color666"},[t.debitCardMsg?n("p",{staticClass:"flex-column BankCardMsg"},[n("span",[t._v(t._s(t.debitCardMsg.bank_info.name))]),n("span",{staticClass:"mt10"},[t._v(t._s(t.debitCardMsg.card_info.card_no.replace(/\s/g,"").replace(/(.{4})(?=\d)/g,"$1 ")))])]):n("p",{staticClass:"BankCardMsg"},[n("span",{staticClass:"size28 color999"},[t._v("请添加银行卡")])])])]),n("div",{staticClass:"BankCardClick"},[t.debitCardMsg?n("span",{staticClass:"maincolor size28",on:{click:t.gotoEditCard}},[t._v("\n            修改\n          ")]):n("span",{staticClass:"maincolor size28",on:{click:t.gotoAddCard}},[t._v("\n            添加\n          ")])])]):t._e(),t.show2?n("div",{class:2===t.currentSelect?"BankCard flex-row-between card_item-on":"BankCard flex-row-between",on:{click:function(e){return t.toggle(2)}}},[n("div",{staticClass:"flex-row flex1"},[n("div",{staticClass:"size28 color333 mr100 BankCardMsg"},[t._v("\n            支付宝账号\n          ")]),n("div",{staticClass:"size28 color666"},[t.accountNo?n("p",{staticClass:"flex-column BankCardMsg"},[n("span",[t._v(t._s(t.accountNo))])]):n("p",{staticClass:"BankCardMsg"},[n("span",{staticClass:"size28 color999"},[t._v("请添加支付宝")])])])]),n("div",{staticClass:"BankCardClick"},[t.accountNo?n("span",{staticClass:"maincolor size28",on:{click:t.gotoEditAlipay}},[t._v("\n            修改\n          ")]):n("span",{staticClass:"maincolor size28",on:{click:t.gotoAddAlipay}},[t._v("\n            添加\n          ")])])]):t._e(),n("div",{staticClass:"tip size24 color999"},[n("div",{domProps:{innerHTML:t._s(t.msg)}})])])]),t.isWithdraw?n("div",{staticClass:"btn_footer"},[t._v("\n    提现中...\n  ")]):t._e(),t.isWithdraw?t._e():n("div",{staticClass:"btn_footer",on:{click:t.confirmWithdraw}},[t._v("\n    确认提现\n  ")])],1)},i=[],s=(n("e7e5"),n("d399")),o=n("2c92"),r={name:"Withdraw",components:{topMsg:o["a"]},data:function(){return{withdrawMoney:"",cardMsg:"",debitCardMsg:"",accountNo:"",msg:"",currentSelect:"",radio:"",isWithdraw:!1,show1:!1,show2:!1,balance:0}},computed:{userInfo:function(){return this.$store.state.userInfo},currentDebitCard:function(){return this.$store.state.currentDebitCard}},watch:{withdrawMoney:function(t,e){this.withdrawMoney=this.withdrawMoney.length>20?this.withdrawMoney.substr(0,20):this.withdrawMoney}},created:function(){var t=this;this.thisTitle(),this.getshow1(),this.getshow2(),this.getBalance(),this.currentDebitCard?this.debitCardMsg=this.currentDebitCard:this.getCardListFun(),this.$store.state.userInfo||this.$store.commit("userInfoFun"),this.$api.richText.getText({type:"withdrawal"}).then((function(e){e.data.data&&(t.msg=e.data.data.content)}))},mounted:function(){this.getWithAccount()},methods:{thisTitle:function(){document.title="提现管理"},toggle:function(t){this.currentSelect=t},gotoFrontView:function(){this.$router.go(-1)},gotoWithdrawList:function(){this.$router.push({path:"/tixian",query:{current:"1"}})},gotoEditCard:function(){this.$router.push({path:"/changeCard",query:{type:"cashCard"}})},gotoAddCard:function(){this.$router.push({path:"/addCard",query:{status:"add"}})},gotoAddAlipay:function(){this.$router.push({path:"/addAlipay",query:{status:"add"}})},gotoEditAlipay:function(){this.$router.push({path:"/addAlipay",query:{status:"edit",old_account_no:this.accountNo}})},getWithAccount:function(){var t=this;this.$api.card.getWithAccount({accountType:2}).then((function(e){console.log(e.data),e.data&&e.data.data.length>0&&(t.accountNo=e.data.data[0].account_no)}))},getshow1:function(){var t=this;this.$api.plan.getFunction({groupName:"后台服务开关",functionName:"银行卡提现"}).then((function(e){"on"===e.data.data[0].enable?(t.show1=!0,t.currentSelect=1):t.show1=!1}))},getshow2:function(){var t=this;this.$api.plan.getFunction({groupName:"后台服务开关",functionName:"支付宝微信提现"}).then((function(e){"on"===e.data.data[0].enable?(t.show2=!0,t.currentSelect=2):t.show2=!1}))},getCardListFun:function(){var t=this;t.$api.card.getCardList("DEBIT").then((function(e){t.cardMsg=e.data.data,0!==t.cardMsg.length&&(t.debitCardMsg=t.cardMsg[0])})).catch((function(t){console.log(t)}))},getBalance:function(){var t=this;this.$api.center.getUserInfo().then((function(e){t.balance=e.data.data.balance||"0"})).catch((function(t){console.log("刷新当前收益 err: ",t)}))},submit:function(){var t=this,e=this;e.$dialog({title:"确定要提现吗？",showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",className:"dialog",closeOnClickOverlay:!0}).then((function(){e.isLoading=t.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"请稍候..."}),e.isWithdraw=!0;var n=e.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"请稍候..."});e.$api.center.x_postWithdrawal({card_id:e.debitCardMsg.id,order_amount:(100*e.withdrawMoney).toFixed(0)}).then((function(t){console.log(t),setTimeout((function(){e.isWithdraw=!1,n.clear()}),2e3),"200000"===t.data.code&&e.$dialog({title:"提现处理中"}).then((function(){e.$router.push({path:"/tixian",query:{current:1}})})),e.getBalance()})).catch((function(t){setTimeout((function(){e.isWithdraw=!1,n.clear()}),2e3),e.getBalance(),console.log(t),Object(s["a"])(t.data.msg||"数据处理中，请查看提现记录")}))}))},submitAlipay:function(){var t=this,e=this;e.$dialog({title:"确定要提现吗？",showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",className:"dialog",closeOnClickOverlay:!0}).then((function(){e.isLoading=t.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"请稍候..."}),e.isWithdraw=!0;var n=e.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"请稍候..."});e.$api.center.x_postWithdrawal_alipay({account_no:e.accountNo,order_amount:(100*e.withdrawMoney).toFixed(0)}).then((function(t){console.log(t),setTimeout((function(){e.isWithdraw=!1,n.clear()}),2e3),"200000"===t.data.code&&e.$dialog({title:"提现处理中"}).then((function(){e.$router.push({path:"/tixian",query:{current:1}})}))})).catch((function(t){setTimeout((function(){e.isWithdraw=!1,n.clear()}),2e3),console.log(t),Object(s["a"])(t.data.msg||"数据处理中，请查看提现记录")}))}))},payment:function(){},confirmWithdraw:function(){var t=this,e=function(e){return t.$dialog({title:e,showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})};if(t.withdrawMoney){if(t.isWithdraw)return;if(!t.currentSelect)return void e("请选择账户类型");1===t.currentSelect&&t.show1&&t.submit(),2===t.currentSelect&&t.show2&&t.submitAlipay()}else e("请输入提现金额")}}},c=r,u=(n("a37a"),n("2877")),h=Object(u["a"])(c,a,i,!1,null,"4a5f9470",null);e["default"]=h.exports},"29a4":function(t,e,n){},"2c92":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isWechat?t._e():n("div",{staticClass:"header"},[n("div",{staticClass:"header_body"},[n("span",{staticClass:"goBack",on:{click:t.goBack}},[n("van-icon",{attrs:{name:"arrow-left"}})],1),n("div",{staticClass:"flex-vertical-centering"},[n("p",{staticClass:"textEllipsis",on:{click:t.showLog}},[t._v("\n        "+t._s(t.headerName)+"\n      ")])]),t.shareShow?n("span",{staticClass:"shareSheet",on:{click:t.shareSheet}},[t._v("分享")]):t._e()])])},i=[],s={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{clickNum:0}},computed:{isWechat:function(){return this.$store.state.isWechat}},watch:{$route:function(){this.clickNum=0}},created:function(){},methods:{goBack:function(){var t=this;t.$router.go(-1)},shareSheet:function(){this.$emit("shareSheet")},showLog:function(){if(this.clickNum++,5===this.clickNum){this.clickNum=0;var t=document.getElementsByClassName("vc-switch")[0],e=window.getComputedStyle(t,null).getPropertyValue("display");"block"===e?VCONSOLE.hide():VCONSOLE.show()}}}},o=s,r=(n("88d0"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,"0fe7e72d",null);e["a"]=c.exports},"342a":function(t,e,n){"use strict";n("68ef"),n("bff0")},"4a8b":function(t,e,n){},"5d17":function(t,e,n){"use strict";n("68ef")},"69fa":function(t,e,n){n("a29f")},"88d0":function(t,e,n){"use strict";var a=n("a4c5"),i=n.n(a);i.a},"8d8c":function(t,e,n){n("a29f"),n("29a4")},a2d1:function(t,e,n){"use strict";var a=n("ed84"),i=n.n(a);i.a},a37a:function(t,e,n){"use strict";var a=n("e049"),i=n.n(a);i.a},a4c5:function(t,e,n){},b8a7:function(t,e,n){"use strict";var a=n("4a8b"),i=n.n(a);i.a},bff0:function(t,e,n){},c466:function(t,e,n){"use strict";function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss",n={"M+":t.getMonth()+1,"d+":t.getDate(),"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var a in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return e}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss";return a(new Date(t),e)}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";return a(new Date(t),e)}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:mm:ss";return a(new Date(t),e)}n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return o}))},e049:function(t,e,n){},e0c5:function(t,e,n){"use strict";n.r(e);var a,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("top-msg",{attrs:{"header-name":"提现记录"}}),a("div",{staticClass:"con_body"},[a("van-tabs",{attrs:{"title-active-color":"#0086F2"},on:{click:t.toggleNav},model:{value:t.currentNav,callback:function(e){t.currentNav=e},expression:"currentNav"}},[a("div",{staticClass:"con_bills"},[a("div",{staticClass:"bills_head flex_sb"},[a("div",{staticClass:"flex1"},[a("div",{staticClass:"box"},[a("span",{staticClass:"size26 bills_select",on:{click:t.openMonthPicker}},[t._v(t._s(t.monthSelect?t.monthSelect:"全部"))]),a("i",{staticClass:"iconfont icon-shouqi"})])]),a("div",{staticClass:"flex1"},[a("div",{staticClass:"box"},[a("span",{staticClass:"size26 bills_select",on:{click:function(e){t.statusPicker=!0,t.closeTouch()}}},[t._v(t._s(t.statusSelect?t.statusSelect:t.stateType))]),a("i",{staticClass:"iconfont icon-shouqi"})])]),a("div",{staticClass:"amount_all textalign_right"},[3===t.currentNav?a("p",{staticClass:"size26 color999"},[t._v("\n              获得：\n              "),a("span",{staticClass:"colorED0"},[t._v(t._s(t._f("parseAmount")(t.sumGainPointsAmount))+" ")]),t._v("\n              消费：\n              "),a("span",{staticClass:"colorED0"},[t._v(t._s(t._f("parseAmount")(Math.abs(t.sumConsumeProfitsAmount))))])]):a("p",{staticClass:"total"},[t._v("\n              总计：\n              "),a("span",{staticClass:"colorED0"},[t._v("¥"+t._s(t._f("parseAmount")(t.sumTotalAmount)))])])])])]),a("van-tab",{attrs:{title:"查看全部"}},[a("div",{staticClass:"bills_items"},[[a("van-list",{attrs:{finished:t.withdrawFinished,error:t.withdrawError,"finished-text":"已加载完毕","error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.withdrawError=e},load:t.getWithdrawListFun},model:{value:t.withdrawLoading,callback:function(e){t.withdrawLoading=e},expression:"withdrawLoading"}},[t.haveContent?[t._l(t.withdrawList,(function(e){return a("div",{key:e.id,staticClass:"bills_item flex_sb bgfff mgb20"},[a("div",{staticClass:"w100 flex-vertical-centering"},[a("div",{staticClass:"w100 flex-row-between item_top"},[a("div",{staticClass:"flex-row-center"},[a("i",{staticClass:"iconfont icon-dingdan"}),a("p",{staticClass:"size26 color333"},[t._v("\n                          订单号："+t._s(e.remission_no)+"\n                        ")])]),a("p",{class:["size26",t.state[e.state]]},[t._v("\n                        "+t._s("PENDING"==e.state?"提现中":"FAIL"==e.state?"提现失败":"提现成功")+"\n                      ")])]),a("div",{staticClass:"w100 flex-row-between mt20"},[a("p",{staticClass:"size28 color666"},[t._v("\n                        时间："+t._s(t._f("timeToFormatDate")(e.gmt_create))+"\n                      ")]),a("p",{staticClass:"size28 colorED0 bold"},[t._v("\n                        ¥ "+t._s(t._f("parseAmount")(e.actual_amount))+"\n                      ")])]),a("div",{staticClass:"w100 flex-row-between mt20"},[a("p",{staticClass:"size28 color666"},[t._v("\n                        备注："+t._s(e.remark)+"\n                      ")])]),"FAIL"==e.state&&"1"==e.account_type?a("div",{staticClass:"w100 flex-row-center TXfail"},[t._v("\n                      失败原因："+t._s(e.channel_error_code)+"\n                    ")]):t._e()])])})),a("div")]:[a("div",{staticClass:"unContent"},[a("div",{staticClass:"unContent_img"},[a("img",{attrs:{src:n("f0b7")}})]),a("div",[a("span",[t._v("没有相关记录")])])])]],2)]],2)])],1)],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.monthPicker,callback:function(e){t.monthPicker=e},expression:"monthPicker"}},[a("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate,"cancel-button-text":"当月全部"},on:{confirm:t.closeMonthPicker,cancel:t.wholeMonth},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.statusPicker,callback:function(e){t.statusPicker=e},expression:"statusPicker"}},[a("van-picker",{attrs:{columns:t.statusColumns,"show-toolbar":""},on:{confirm:t.closeStatusPicker,cancel:function(e){t.statusPicker=!1,t.openTouch()}},model:{value:t.statusSelect,callback:function(e){t.statusSelect=e},expression:"statusSelect"}})],1)],1)},s=[],o=(n("5f5f"),n("f253")),r=(n("d1cf"),n("ee83")),c=(n("342a"),n("1437")),u=(n("5d17"),n("f9bd")),h=n("c466"),d=n("3213"),l=(n("69fa"),n("8d8c"),n("f0a2"),n("5b4d"),n("2c92"));function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p={name:"Bill",components:(a={},f(a,u["a"].name,u["a"]),f(a,c["a"].name,c["a"]),f(a,r["a"].name,r["a"]),f(a,o["a"].name,o["a"]),f(a,"topMsg",l["a"]),a),filters:{timeToFormatDate:h["b"],parseAmount:d["a"],remissionState:function(t){return{UNPAID:"未支付",UNSETTLED:"待结算",SETTLED:"已结算",FAILED_PAY:"支付失败",FAILED_SETTLE:"结算失败",PROCESSING:"处理中"}[t]},profitsType:function(t){return{PAYMENT:"消费",REMISSION:"还款",THIRD_LEVEL:"三级分润",DIRECT_PARENT:"直推分润",RANKING_PARENT:"平推分润",RANK_RATE_DIFF:"费率差分润"}[t]||t}},data:function(){return{navList:["订单","分润","提现"],currentNav:this.$util.getQueryVariable("current")?this.$util.getQueryVariable("current"):0,activeNames:"",monthSelect:"",monthPicker:!1,currentDate:null,postCurrentDate:null,minDate:new Date(2019,0,1),statusSelect:"",statusPicker:!1,currentStatus:"",statusColumns:"",isOnMonth:!1,withdrawList:[],withdrawLoading:!1,withdrawFinished:!1,withdrawError:!1,withdrawPage:0,orderList:[],orderLoading:!1,orderFinished:!1,orderError:!1,orderPage:0,bonusList:[],bonusLoading:!1,bonusFinished:!1,bonusError:!1,bonusPage:0,pointsList:[],pointsLoading:!1,pointsFinished:!1,pointsError:!1,pointsPage:0,upgradeList:[],upgradeLoading:!1,upgradeFinished:!1,upgradeError:!1,upgradePage:0,haveContent:!1,isLoading:"",orderDetail:"",sumTotalAmount:0,sumGainPointsAmount:0,sumConsumeProfitsAmount:0,state:{REMITTED:"color999",FAIL:"fail",PENDING:"success"},statusSelects:{FINANCIAL_LEVERAGE_GROUP:"收款",FINANCIAL_REPAYMENT_GROUP:"代还",MANAGER:"管理奖"}}},computed:{stateType:function(){return 0===this.currentNav?"状态":"类型"}},created:function(){if(this.$route.query.type&&(this.currentStatus=this.$route.query.type,this.statusSelect=this.statusSelects[this.currentStatus]),this.$route.query.time){this.currentDate=new Date(this.$route.query.time),this.postCurrentDate=this.currentDate;var t=this.$route.query.time,e=new Date(t).getFullYear(),n=new Date(t).getDate(),a=new Date(t).getMonth()+1;a=String(a).length<2?"0"+a:a,this.monthSelect=e+"年"+a+"月"+n+"日"}this.currentNav=Number(this.currentNav),console.log("this.currentNav: ",this.currentNav),this.thisTitle(),this.statusColumnsList()},destroyed:function(){},methods:{thisTitle:function(){document.title="账单"},gotoFrontView:function(){this.$router.go(-1)},wholeMonth:function(){var t=this.currentDate,e=new Date(t).getFullYear(),n=new Date(t).getMonth()+1;n=String(n).length<2?"0"+n:n,this.monthSelect=e+"年"+n+"月",this.monthPicker=!1,this.openTouch(),this.currentDate=new Date(e,n-1),this.postCurrentDate=this.currentDate,this.isOnMonth=!0,this.fetchData(this.currentNav)},openMonthPicker:function(){this.postCurrentDate||(this.currentDate=new Date),this.monthPicker=!0,this.closeTouch()},closeMonthPicker:function(t){var e=new Date(t).getFullYear(),n=new Date(t).getMonth()+1,a=new Date(t).getDate();n=String(n).length<2?"0"+n:n,this.monthSelect=e+"年"+n+"月"+a+"日",this.monthPicker=!1,this.openTouch(),this.currentDate=new Date(e,n-1,a),this.postCurrentDate=this.currentDate,this.isOnMonth=!1,this.fetchData(this.currentNav)},fetchData:function(t){switch(t){case-1:return this.orderList=[],this.orderLoading=!0,this.orderFinished=!1,this.orderError=!1,this.orderPage=0,this.getOrderListFun();case 0:return this.withdrawList=[],this.withdrawLoading=!0,this.withdrawFinished=!1,this.withdrawError=!1,this.withdrawPage=0,this.getWithdrawListFun();case 1:return this.bonusList=[],this.bonusLoading=!0,this.bonusFinished=!1,this.bonusError=!1,this.bonusPage=0,this.getBonusListFun();case 2:return this.pointsList=[],this.pointsLoading=!0,this.pointsFinished=!1,this.pointsError=!1,this.pointsPage=0,this.getPointsListFun()}},closeStatusPicker:function(t){console.log(t),this.statusPicker=!1,this.openTouch(),this.statusSelect=t,this.statusChange(t)},statusChange:function(t){switch(t){case"未支付":this.currentStatus="UNPAID";break;case"未结算":this.currentStatus="UNSETTLED";break;case"已结算":this.currentStatus="SETTLED";break;case"收款":this.currentStatus="FINANCIAL_LEVERAGE_GROUP";break;case"代还":this.currentStatus="FINANCIAL_REPAYMENT_GROUP";break;case"失败":this.currentStatus="FAIL";break;case"已到账":this.currentStatus="REMITTED";break}this.fetchData(this.currentNav)},statusColumnsList:function(){switch(this.currentNav){case-1:this.statusColumns=["未支付","未结算","已结算"];break;case 1:this.statusColumns=["已到账","失败"];break}},getProfitsListFun:function(){var t=this;return t.$api.center.getProfitsList({page:t.profitsPage,size:10,searchDate:this.postCurrentDate&&Object(h["a"])(this.postCurrentDate,"yyyy-MM-dd"),type:this.currentStatus,isOnMonth:this.isOnMonth}).then((function(e){t.sumTotalAmount=e.data.data.aggregation.sumProfitsAmount,e.data.data.has_content?(t.profitsList=t.profitsList.concat(e.data.data.content),t.haveContent=!0,e.data.data.has_next?(t.profitsPage++,t.profitsLoading=!1):(t.profitsLoading=!1,t.profitsFinished=!0)):(t.haveContent=!1,t.profitsLoading=!1,t.profitsFinished=!0)})).catch((function(e){console.log(e),t.profitsLoading=!1,t.profitsError=!0}))},getWithdrawListFun:function(){var t=this;return t.$api.center.getWithdrawList({page:t.withdrawPage,size:10,searchDate:this.postCurrentDate&&Object(h["a"])(this.postCurrentDate,"yyyy-MM-dd"),remissionState:this.currentStatus,isOnMonth:this.isOnMonth}).then((function(e){t.sumTotalAmount=e.data.data.aggregation.sumActualAmount,e.data.data.has_content?(t.withdrawList=t.withdrawList.concat(e.data.data.content),t.haveContent=!0,e.data.data.has_next?(t.withdrawPage++,t.withdrawLoading=!1):(t.withdrawLoading=!1,t.withdrawFinished=!0)):(t.haveContent=!1,t.withdrawLoading=!1,t.withdrawFinished=!0)})).catch((function(e){console.log(e),t.withdrawLoading=!1,t.withdrawError=!0}))},getOrderListFun:function(){var t=this;return t.$api.center.getTradeList({page:t.orderPage,size:10,searchDate:this.postCurrentDate&&Object(h["a"])(this.postCurrentDate,"yyyy-MM-dd"),remissionState:this.currentStatus,isOnMonth:this.isOnMonth}).then((function(e){t.sumTotalAmount=e.data.data.aggregation.sumTotalAmount,e.data.data.has_content?(t.orderList=t.orderList.concat(e.data.data.content),t.haveContent=!0,e.data.data.has_next?(t.orderPage++,t.orderLoading=!1):(t.orderLoading=!1,t.orderFinished=!0)):(t.haveContent=!1,t.orderLoading=!1,t.orderFinished=!0)})).catch((function(e){console.log(e),t.orderLoading=!1,t.orderError=!0}))},getOrderDetailFun:function(t){var e=this;e.$api.center.getOrderDetail(t).then((function(t){e.orderDetail=t.data.data})).catch((function(t){console.log(t)}))},toggleNav:function(){this.monthSelect="",this.currentDate=null,this.postCurrentDate=null,this.statusSelect="",this.currentStatus="",this.statusColumnsList(),this.fetchData(this.currentNav)},closeTouch:function(){document.getElementsByTagName("body")[0].addEventListener("touchmove",this.handler,{passive:!1}),console.log("closeTouch haved happened.")},openTouch:function(){document.getElementsByTagName("body")[0].removeEventListener("touchmove",this.handler,{passive:!1}),console.log("openTouch haved happened.")}}},g=p,m=(n("a2d1"),n("b8a7"),n("2877")),w=Object(m["a"])(g,i,s,!1,null,"bffbaf12",null);e["default"]=w.exports},ed84:function(t,e,n){},f0a2:function(t,e,n){n("a29f"),n("911e")},f0b7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABcCAMAAACSh4HAAAAAeFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyRUjlNAAAAJ3RSTlMAVWbwzIha+wz2Fmm8uKsSsq5iCMJ15jEpHvjsy5JuaEzfn0LPpIBMC3spAAACYUlEQVRo3rzQOw7CMBBF0SESxIF8SOKKJkrl/e+QgmIkXmQ39j1LOPYv3M8+1XbegxXsMTURd8vrUiOb5cXUyGhZzz410j8t55WaOSxnTA64lunYVRT9ujh9s4pu6acrTw/BKgqDXxemZ6tq9mtkWq+pab0uT7PXh0wD1zLNXOs0da3TzLVOU9c6zV13Mk1c6zRwDUzLNTAt18y0XlPTeg1N6zU0rdfQtFv9mph2j8vrqdW0Xk9X06s149fLxfTDRINrYLp0vQDTl9cbMe3XGzSt19S0XkPTeg1N6zU1rdfQtF4z0y58/JqYdm+/Rqb1GprWa58evu3Ya2+CMBiG4UcQS1WkE8tB0DFP7///h/vQ6sIGhS4cYsL1ueROmtI36bKNkBGMIimWbfhrr/dWT7C9PfzuIciCA4MzWRCIycKH+cRaiEE2ChgsyQKzC8cw+CIL3C7MfDTyGVlwn2HhGV1IuaJRScrFMwp+hVcw8kk5odGpZVO0jV0YN7Usj9AgytWKG/oNP0g5t/3FXs/hjOkP1qi1zklJu4ZZtzACUgLz7bFF17DbMVyS6Xx5pF17D+PwKhu6W/QfThhpwRoVWUDaMR0gDElPrgzxEj5cepLoIWwcP/y+yCIA2eLO/wwvo89/hP2CKvKcVWeXj3Yrq7AWFmRQhBgqDF9QI+FjkLAmj1SLn4FBw0i3VEOkGDCsXQNGFSxIgGHDWiYPnDR+kBkwQliL0tKR0inTCEAfYXtzuIUzVXgzh1FvDs/h9w2fFiO5/IRHNnn4SJNwEdMkYuxoEjsknCbAEyARMaNxxSLBN+2j/Rbxc+RoAAAAAElFTkSuQmCC"},f9bd:function(t,e,n){"use strict";var a=n("a142"),i=Object(a["i"])("collapse"),s=i[0],o=i[1];e["a"]=s({props:{accordion:Boolean,value:[String,Number,Array],border:{type:Boolean,default:!0}},data:function(){return{items:[]}},methods:{switch:function(t,e){this.accordion||(t=e?this.value.concat(t):this.value.filter((function(e){return e!==t}))),this.$emit("change",t),this.$emit("input",t)}},render:function(t){return t("div",{class:[o(),{"van-hairline--top-bottom":this.border}]},[this.slots()])}})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forgetPassword"],{"083d":function(e,t,o){},"2c92":function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.isWechat?e._e():o("div",{staticClass:"header"},[o("div",{staticClass:"header_body"},[o("span",{staticClass:"goBack",on:{click:e.goBack}},[o("van-icon",{attrs:{name:"arrow-left"}})],1),o("div",{staticClass:"flex-vertical-centering"},[o("p",{staticClass:"textEllipsis",on:{click:e.showLog}},[e._v("\n        "+e._s(e.headerName)+"\n      ")])]),e.shareShow?o("span",{staticClass:"shareSheet",on:{click:e.shareSheet}},[e._v("分享")]):e._e()])])},i=[],a={name:"TopMsg",props:{headerName:{type:String,default:""},required:{type:Boolean,default:!0},shareShow:{type:Boolean,default:!1}},data:function(){return{clickNum:0}},computed:{isWechat:function(){return this.$store.state.isWechat}},watch:{$route:function(){this.clickNum=0}},created:function(){},methods:{goBack:function(){var e=this;e.$router.go(-1)},shareSheet:function(){this.$emit("shareSheet")},showLog:function(){if(this.clickNum++,5===this.clickNum){this.clickNum=0;var e=document.getElementsByClassName("vc-switch")[0],t=window.getComputedStyle(e,null).getPropertyValue("display");"block"===t?VCONSOLE.hide():VCONSOLE.show()}}}},n=a,r=(o("88d0"),o("2877")),c=Object(r["a"])(n,s,i,!1,null,"0fe7e72d",null);t["a"]=c.exports},"505b":function(e,t,o){"use strict";var s=o("083d"),i=o.n(s);i.a},"88d0":function(e,t,o){"use strict";var s=o("a4c5"),i=o.n(s);i.a},a4c5:function(e,t,o){},e179:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bgfff forget-pwd-wrap"},[o("div",{staticClass:"con_body"},[o("top-msg",{attrs:{"header-name":"忘记密码"}}),o("div",{staticClass:"form_cells"},[o("div",{staticClass:"cells_title"},[e._v("\n        找回密码\n      ")]),o("div",{staticClass:"form_cell"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.tel,expression:"tel",modifiers:{trim:!0}}],staticClass:"form_input",attrs:{type:"tel",placeholder:"请输入注册的手机号",maxlength:"11"},domProps:{value:e.tel},on:{input:function(t){t.target.composing||(e.tel=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),o("div",{staticClass:"form_cell"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.code,expression:"code",modifiers:{trim:!0}}],staticClass:"form_input",attrs:{type:"tel",maxlength:"6",placeholder:"请输入验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),o("div",{staticClass:"get-code",on:{click:e.getCode}},[e._v("\n          "+e._s(e.code_text)+"\n        ")])]),o("div",{staticClass:"form_cell"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.password,expression:"password",modifiers:{trim:!0}}],staticClass:"form_input",attrs:{maxlength:"18",type:"password",placeholder:"请设置新的密码（6~12个数字或字母）"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),o("div",{staticClass:"form_cell"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.repassword,expression:"repassword",modifiers:{trim:!0}}],staticClass:"form_input",attrs:{maxlength:"18",type:"password",placeholder:"请再次设置新的密码"},domProps:{value:e.repassword},on:{input:function(t){t.target.composing||(e.repassword=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),o("button",{staticClass:"btn btn_submit",on:{click:e.submitReset}},[e._v("\n        提交\n      ")])]),1==e.bg?o("div",{staticClass:"bg"}):e._e(),1==e.Popover?o("div",{staticClass:"flex-column-center",attrs:{id:"Popover"}},[o("i",{class:["iconfont",1==e.judge?"icon-gou maincolor":"icon-guanbi color999"]}),o("span",[e._v(e._s(1==e.judge?"密码重置成功":"密码重置失败"))]),o("div",{staticClass:"btn btn_submit pbtn",on:{click:function(t){1==e.judge?e.successgo():e.popoverhide()}}},[e._v("\n        "+e._s(1==e.judge?"去登录":"返回")+"\n      ")])]):e._e()],1)])},i=[],a=o("2c92"),n={name:"ForgetPassword",components:{topMsg:a["a"]},data:function(){return this.timer=null,this.code_idx=60,{tel:"",code:"",code_text:"获取验证码",codeToken:"",password:"",repassword:"",bg:0,Popover:0,judge:1}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null},methods:{thisTitle:function(){document.title="找回密码"},getCode:function(){var e=this;if(!this.timer){var t=function(t){return e.$dialog({title:t,showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})};if(""!==this.tel)if(this.$util.isPhone(this.tel)){this.code_idx--,this.code_text="".concat(this.code_idx,"秒后重发"),this.timer=setInterval((function(){e.code_idx--,e.code_idx<0?(clearInterval(e.timer),e.timer=null,e.code_text="获取验证码",e.code_idx=60):e.code_text="".concat(e.code_idx,"秒后重发")}),1e3);var o={phone:this.tel};this.$api.login.getCode(o).then((function(t){console.log(t),e.codeToken=t.data.data.token})).catch((function(e){console.log(e)}))}else t("请输入正确的手机号");else t("请输入手机号")}},submitReset:function(){var e=this,t=function(t){return e.$dialog({title:t,showCancelButton:!1,confirmButtonText:"确定",cancelButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})};if(e.tel)if(e.$util.isPhone(e.tel))if(e.code)if(e.password&&e.repassword)if(e.password.length<6)t("密码最短为 6 个字符");else if(e.password!==e.repassword)t("两次输入的密码不一致，请重新输入");else{var o={code_input:e.code,code_token:e.codeToken,password:e.password,phone:e.tel};e.$api.login.retrievePassword(o).then((function(){e.judge=1,e.popovershow()})).catch((function(){e.judge=0,e.popovershow()}))}else t("请输入您的新密码");else t("请输入收到的验证码");else t("请输入正确的手机号码");else t("请输入您的手机号码")},popovershow:function(){this.bg=1,this.Popover=1},popoverhide:function(){this.bg=0,this.Popover=0},successgo:function(){this.$router.push("/login")}}},r=n,c=(o("505b"),o("2877")),l=Object(c["a"])(r,s,i,!1,null,"604daebc",null);t["default"]=l.exports}}]);
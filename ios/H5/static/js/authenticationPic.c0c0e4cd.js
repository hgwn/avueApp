(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["authenticationPic"],{"0e5c":function(t,e,a){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e5;return new Promise((function(a){if(t.file.size>e){var n=document.createElement("canvas"),i=n.getContext("2d"),r=new Image;r.src=t.content,r.onload=function(){n.width=400,n.height=300,i.drawImage(r,0,0,400,300),t.content=n.toDataURL(t.file.type,.92)}}a(t)}))}a.d(e,"a",(function(){return n}))},"44d6":function(t,e,a){"use strict";a.r(e);var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isiOSFlag?a("top-msg",{attrs:{"header-name":"补充实名认证"}}):t._e(),a("div",{staticClass:"con_body"},[a("div",{staticClass:"form_cells form_cells_form bgfff mgb20"},[a("div",{staticClass:"form_cell"},[t._m(0),a("div",{staticClass:"form_cellBd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form_input",attrs:{type:"text",placeholder:"请输入您的名字",readonly:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),a("div",{staticClass:"form_cell"},[t._m(1),a("div",{staticClass:"form_cellBd"},[a("fun-components-input",{attrs:{"num-type":"identifyNo",placeholder:"请输入您的身份证件号码",readonly:""},on:{onRawValue:function(e){t.identify=e}},model:{value:t.identifyShow,callback:function(e){t.identifyShow=e},expression:"identifyShow"}})],1)])]),a("div",{staticClass:"form_cells form_cells_form bgfff"},[a("div",{staticClass:"form_cell"},[t._m(2),a("div",{staticClass:"form_cellBd"},[a("fun-components-input",{attrs:{"num-type":"cardNo",placeholder:"请输入您的储蓄卡号码",readonly:""},on:{onRawValue:function(e){t.cardId=e}},model:{value:t.cardIdShow,callback:function(e){t.cardIdShow=e},expression:"cardIdShow"}})],1)]),a("div",{staticClass:"form_cell",staticStyle:{display:"none"}},[t._m(3),a("div",{staticClass:"form_cellBd",on:{click:function(e){t.bankPicker=!0}}},[t.bankSelect.name?a("span",{staticClass:"size30",staticStyle:{color:"#666666"}},[t._v(t._s(t.bankSelect.name))]):a("span",{staticClass:"size30",staticStyle:{color:"#BEBEBE"}},[t._v("请选择所属银行")])])]),a("div",{staticClass:"form_cell"},[t._m(4),a("div",{staticClass:"form_cellBd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cardTel,expression:"cardTel"}],staticClass:"form_input",attrs:{type:"number",maxlength:"11",placeholder:"请输入预留手机号",readonly:""},domProps:{value:t.cardTel},on:{input:function(e){e.target.composing||(t.cardTel=e.target.value)}}})])]),a("div",{staticClass:"line"},[a("div",{staticClass:"form_cell_upload flex_sa"},[a("div",{staticClass:"upload_item flex_column flex_alCen"},[t.cardImgFront.url?[a("div",{staticClass:"cell_uploadImg"},[t.cardImgFront.fileData?a("img",{attrs:{src:t.cardImgFront.url}}):[a("img",{attrs:{src:t.cardImgFront.url}})],a("span",{staticClass:"upload_close",on:{click:function(e){return t.deleteImg("cardImgFront")}}})],2)]:[a("div",{staticClass:"cell_uploadImg"},[a("van-uploader",{attrs:{"after-read":t.onCardImgFront,accept:"image/*"}},[a("span",{staticClass:"upload_add"},[t._v("+")])])],1)],a("p",{staticClass:"color333 size24"},[t._v("\n              身份证正面照\n            ")])],2),a("div",{staticClass:"upload_item flex_column flex_alCen"},[t.cardImgAfter.url?[a("div",{staticClass:"cell_uploadImg"},[t.cardImgAfter.fileData?a("img",{attrs:{src:t.cardImgAfter.url}}):[a("img",{attrs:{src:t.cardImgAfter.url}})],a("span",{staticClass:"upload_close",on:{click:function(e){return t.deleteImg("cardImgAfter")}}})],2)]:[a("div",{staticClass:"cell_uploadImg"},[a("van-uploader",{attrs:{"after-read":t.onCardImgAfter,accept:"image/*"}},[a("span",{staticClass:"upload_add"},[t._v("+")])])],1)],a("p",{staticClass:"color333 size24"},[t._v("\n              身份证反面照\n            ")])],2)])])]),a("div",{staticClass:"btn_warp"},[a("button",{staticClass:"btn btn_submit",on:{click:t.confirmAuth}},[t._v("\n        确认提交\n      ")])])]),a("van-popup",{attrs:{position:"bottom"},model:{value:t.bankPicker,callback:function(e){t.bankPicker=e},expression:"bankPicker"}},[a("choose-card",{on:{selectCard:t.selectCard}})],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("姓名")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("身份证")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("储蓄卡号")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("所属银行")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form_cellHd"},[a("label",{staticClass:"form_label"},[t._v("预留手机号")])])}],s=(a("e7e5"),a("d399")),c=(a("5f5f"),a("f253")),l=a("2c92"),o=a("5515"),d=a("c506"),u=a("0e5c"),f=(a("5b4d"),a("bc3a")),m=a.n(f),g=a("5f87");function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p={name:"Authentication",components:(n={topMsg:l["a"]},h(n,c["a"].name,c["a"]),h(n,"chooseCard",o["a"]),h(n,"FunComponentsInput",d["a"]),n),data:function(){return{auth_url:"",isiOSFlag:"",auth_token:"",tel:"",code:"",isGetCode:!1,num:60,timer:"",name:"",identify:"",identifyShow:"",isAutoUpload:"",cardId:"",cardIdShow:"",cardTel:"",bankSelect:{},bankPicker:!1,bankListArr:[],items:{},cardImgFront:{url:"",file:"",fileData:"",imgType:""},cardImgAfter:{url:"",file:"",fileData:"",imgType:""}}},computed:{token:function(){return this.$store.state.token},userInfo:function(){return this.$store.state.userInfo},bankList:function(){return this.$store.state.bankList}},watch:{},created:function(){var t=this,e=navigator.userAgent,a=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);this.isiOSFlag=!!a,this.auth_url=this.STATIC_INFO.cfcaAuthUrl,this.auth_token=Object(g["a"])(),console.log(this.auth_token),this.thisTitle(),this.getBankListFun(),this.$store.dispatch("GetBankList").then((function(){t.judgeUserAuth()})),this.$store.dispatch("GetUserInfo").then((function(){}))},mounted:function(){this.getPic()},methods:{thisTitle:function(){document.title="补充实名认证"},getPic:function(){var t=this;this.$api.center.getSelectIdCardPic().then((function(e){console.log(e.data),t.cardImgFront.url=e.data.data.idCardFrontImageUrl,t.cardImgAfter.url=e.data.data.idCardOppositeImageUrl,t.cardImgFront.fileData=e.data.data.idCardFrontImage,t.cardImgAfter.fileData=e.data.data.idCardOppositeImage}))},createImage:function(t){var e=this,a=new FileReader,n=this;a.onload=function(t){var a=t.target.result,i=new Image;i.src=a,console.log("********未压缩前的图片大小********"),console.log(a.length/1024),a.length/1024>50?i.onload=function(){this.firImg=n.compress(i,.6)}:e.firImg=a},a.readAsDataURL(t)},compress:function(t,e){var a=document.createElement("canvas"),n=a.getContext("2d"),i=(t.src.length,t.width),r=t.height;a.width=i,a.height=r,n.fillStyle="#fff",n.fillRect(0,0,a.width,a.height),n.drawImage(t,0,0,i,r);var s=a.toDataURL("image/jpeg",e);return console.log("*******压缩后的图片大小*******"),console.log(s.length/1024),s},onCardImgFront:function(t){var e=this;if(/\/(?:jpeg|png)/i.test(t.file.type)&&t.file.size>1e6){var a=document.createElement("canvas"),n=a.getContext("2d"),i=new Image;i.src=t.content,i.onload=function(){a.width=400,a.height=300,n.drawImage(i,0,0,400,300),t.content=a.toDataURL(t.file.type,.72)}}this.cardImgFront.url=t.content,Object(u["a"])(t).then((function(t){e.cardImgFront.file=t.file,console.log(e.cardImgFront.file),e.uploadCardImgFun(e.cardImgFront.file,"ID_CARD_FRONT_IMAGE")}))},onCardImgAfter:function(t){var e=this;if(/\/(?:jpeg|png)/i.test(t.file.type)&&t.file.size>1e6){var a=document.createElement("canvas"),n=a.getContext("2d"),i=new Image;i.src=t.content,i.onload=function(){a.width=400,a.height=300,n.drawImage(i,0,0,400,300),t.content=a.toDataURL(t.file.type,.72)}}this.cardImgAfter.url=t.content,Object(u["a"])(t).then((function(t){e.cardImgAfter.file=t.file,console.log(e.cardImgFront.file),e.uploadCardImgFun(e.cardImgAfter.file,"ID_CARD_OPPOSITE_IMAGE")}))},uploadCardImgFun:function(t,e){var a=this,n=new FormData;n.append("file",t),n.append("target",e);var i=new XMLHttpRequest;i.open("post","http://app.zhr168.com/api/image/upload",!0);var r="Bearer "+a.token.replace(/[\"]/g,"");i.setRequestHeader("Authorization",r),i.onreadystatechange=function(){if(4===i.readyState){var t=JSON.parse(i.response);200===i.status?"ID_CARD_FRONT_IMAGE"===e?a.cardImgFront.fileData=t.data.file_name:"ID_CARD_OPPOSITE_IMAGE"===e?a.cardImgAfter.fileData=t.data.file_name:"ID_CARD_IN_HAND_IMAGE"===e&&(a.cardImgHold.fileData=t.data.file_name):a.$dialog({title:"提交失败，请重新提交",showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})}},i.send(n)},deleteImg:function(t){"cardImgFront"===t?(this.cardImgFront.url="",this.cardImgFront.file="",this.cardImgFront.fileData=""):"cardImgAfter"===t?(this.cardImgAfter.url="",this.cardImgAfter.file="",this.cardImgAfter.fileData=""):"cardImgHold"===t&&(this.cardImgHold.url="",this.cardImgHold.file="",this.cardImgHold.fileData="")},getCodeFun:function(){var t=this,e=function(e){return t.$dialog({title:e,showCancelButton:!1,confirmButtonText:"确定",cancelButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})};t.tel?t.$util.isPhone(t.tel)?t.isGetCode||(t.isGetCode=!0,t.timer=setInterval((function(){0!==t.num?t.num--:(t.isGetCode=!1,t.num=60,clearInterval(t.timer))}),1e3)):e("请输入正确的手机号码"):e("请输入您的手机号码")},submitAuthenticationBw:function(){var t=this,e=this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"请稍候..."}),a={idCardFrontImage:t.cardImgFront.fileData,idCardOppositeImage:t.cardImgAfter.fileData};t.$api.center.authenticationBwPic(a).then((function(a){e.clear(),t.$dialog({title:"提交成功",showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!1}).then((function(){t.isiOSFlag?t.$router.replace("/center"):baiwangxinxi.CloseView("关闭当前webview")}))}))},confirmAuth:function(){var t=this,e=function(e){return t.$dialog({title:e,showCancelButton:!1,confirmButtonText:"确定",className:"dialog",closeOnClickOverlay:!0})};if(t.name)if(t.identify)if(t.cardId)if(t.bankSelect)if(t.cardTel)if(this.$util.isPhone(t.cardTel))if(!t.cardImgFront.fileData&&t.cardImgAfter.fileData)e("请上传身份证正面照");else{if(!t.cardImgFront.fileData||t.cardImgAfter.fileData)return void t.submitAuthenticationBw();e("请上传身份证反面照")}else e("请输入正确的手机号");else e("请输入您的预留手机号码");else e("请选择储蓄卡所属银行");else e("请输入您的储蓄卡号");else e("请输入您的身份证");else e("请输入您的姓名")},showFace:function(t){},submitAuthentication:function(){var t=this,e=this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"请稍候..."}),a={agentId:"10000",bankCard:t.cardId,idCard:t.identify,name:t.name,mobile:t.cardTel};m.a.post("http://app.zhr168.com/api/auth/bank4Needs/hkj/auth",a).then((function(a){e.clear();var n=a.data.data;console.log("黑科四要素......"),console.log(n),"20"==n.verification?t.$api.center.saveYskAuth({id_card_no:t.identify,id_card_name:t.name,is_auth:1,auth_msg:""}).then((function(){s["a"].success("认证完成"),t.$router.replace("/center")})):Object(s["a"])(n.message)})).catch((function(t){console.log(t),Object(s["a"])("服务异常")}))},judgeUserAuth:function(){var t=this;t.getAuthenticationFun()},getAuthenticationFun:function(){var t=this;t.$api.center.getAuthentication().then((function(e){t.name=e.data.data.id_card_name,t.identify=e.data.data.id_card_no,t.identifyShow=t.identify.replace(/(\d{6})(?=\d)/,"$1 ").replace(/(\d{8})(?=\d)/,"$1 "),t.cardId=e.data.data.bank_card_no,t.cardIdShow=t.cardId.replace(/\s/g,"").replace(/(\d{4})(?=\d)/g,"$1 "),t.cardTel=e.data.data.bank_card_phone_num,t.$set(t.bankSelect,"bank_no",e.data.data.bank_code),t.$set(t.bankSelect,"name",t.bankList[t.bankSelect.bank_no])}))},closeStatusPicker:function(t){console.log(t),this.bankSelect=t,this.bankPicker=!1},getBankListFun:function(){var t=this;t.$store.dispatch("GetBankList").then((function(){for(var e in t.bankList)t.bankListArr.push({bankNo:e,text:t.bankList[e]})}))},selectCard:function(t){console.log(t),this.bankSelect=t,this.bankPicker=!1}}},_=p,v=(a("e3dd"),a("2877")),b=Object(v["a"])(_,i,r,!1,null,"b60b4e22",null);e["default"]=b.exports},5515:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bgfff"},[a("div",[t._m(0),a("div",{staticClass:"search_warp"},[a("i",{staticClass:"icon_search"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search_input",attrs:{type:"text",placeholder:"请输入银行名称关键词"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}})])]),a("div",{staticClass:"search_content"},[a("mt-index-list",{attrs:{height:312}},[t.searchValue?t._e():a("mt-index-section",{attrs:{index:""}},[a("li",[a("p",{staticClass:"line mint-indexsection-index"},[t._v("\n            热门银行\n          ")]),a("div",{staticClass:"hot_list"},t._l(t.bankHotListArr,(function(e,n){return a("div",{key:n,staticClass:"box",attrs:{index:n}},[a("div",{staticClass:"search_item",on:{click:function(a){return t.clickCard(e)}}},[a("div",{staticClass:"text"},[t._v("\n                  "+t._s(e.name)+"\n                ")])])])})),0)])]),t._l(t.bankListArr,(function(e,n){return a("mt-index-section",{key:n,attrs:{index:n}},t._l(e,(function(e,n){return a("li",{key:n,staticClass:"search_item",on:{click:function(a){return t.clickCard(e)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])})),0)}))],2)],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search_title"},[a("h5",{staticClass:"size36 color333"},[t._v("\n        选择银行\n      ")])])}],s=a("76a0");a("8635"),a("f1a6");function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={name:"SelectCard",components:(n={},c(n,s["IndexList"].name,s["IndexList"]),c(n,s["IndexSection"].name,s["IndexSection"]),n),data:function(){return{bankListArr:{},bankHotListArr:{},searchValue:"",resultsList:""}},computed:{bankList:function(){return this.$store.state.bankList}},watch:{searchValue:function(t,e){var a=String(t).toUpperCase(),n=[];this.resultsList.forEach((function(t){-1===String(t.name).indexOf(a)&&-1===String(t.first_pinyin_letter).indexOf(a)||n.push(t)})),this.bankListArr=n.reduce((function(t,e){return t[e.first_pinyin_letter[0]]||(t[e.first_pinyin_letter[0]]=[]),t[e.first_pinyin_letter[0]].push(e),t}),{}),this.bankListArr=this.objKeySort(this.bankListArr)}},created:function(){this.getBankListFun()},methods:{thisTitle:function(){document.title="选择银行卡"},getBankListFun:function(){var t=this;t.$api.card.getBankList().then((function(e){t.resultsList=e.data.data.bank_list,t.bankHotListArr=e.data.data.hot_bank_list,console.log(t.resultsList),t.bankListArr=t.resultsList.reduce((function(t,e){return console.log(t),console.log(e),t[e.first_pinyin_letter[0]]||(t[e.first_pinyin_letter[0]]=[]),t[e.first_pinyin_letter[0]].push(e),t}),{}),t.bankListArr=t.objKeySort(t.bankListArr)}))},objKeySort:function(t){console.log(t);var e=Object.keys(t).sort();console.log(e);for(var a={},n=0;n<e.length;n++)a[e[n]]=t[e[n]];return a},clickCard:function(t){this.$emit("selectCard",t)}}},o=l,d=(a("9b87"),a("2877")),u=Object(d["a"])(o,i,r,!1,null,"2cfd1e14",null);e["a"]=u.exports},"6b96":function(t,e,a){},"826b":function(t,e,a){},"9b87":function(t,e,a){"use strict";var n=a("826b"),i=a.n(n);i.a},c506:function(t,e,a){"use strict";function n(t,e){if("cardNo"===e){var a=t;return a=a.replace(/\s/g,"").replace(/\D/g,"").replace(/(\d{4})(?=\d)/g,"$1 "),a}if("identifyNo"===e){var n=t;return n=n.replace(/\s/g,"").replace(/[^0-9X]/g,"").replace(/(\d{6})(?=\d)/,"$1 ").replace(/(\d{8})(?=\d)/,"$1 "),n}}e["a"]={name:"card-no-input",data:function(){return{previousValue:null}},props:{value:{type:String},numType:{type:String}},render:function(t){var e=this,a=n(e.value,e.numType);return e.previousValue=a,t("input",{attrs:{placeholder:e.$attrs.placeholder,disabled:e.$attrs.disabled},class:{form_input:!0,bold:e.value},domProps:{value:a},on:{keyup:function(t){var a=t.target;if(a.selectionStart<e.previousValue.length)e.previousValue=t.target.value;else{e.previousValue=t.target.value;var i=n(t.target.value,e.numType),r=i.replace(/\s/g,"");e.$emit("input",i),e.$emit("onRawValue",r),t.target.value=n(t.target.value,e.numType)}},blur:function(t){var a=n(t.target.value,e.numType),i=a.replace(/\s/g,"");e.$emit("input",a),e.$emit("onRawValue",i),t.target.value=n(t.target.value,e.numType)}}})}}},e3dd:function(t,e,a){"use strict";var n=a("6b96"),i=a.n(n);i.a}}]);
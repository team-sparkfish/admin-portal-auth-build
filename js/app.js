(function(e){function i(i){for(var o,r,s=i[0],c=i[1],u=i[2],l=0,f=[];l<s.length;l++)r=s[l],n[r]&&f.push(n[r][0]),n[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(i);while(f.length)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,i=0;i<a.length;i++){for(var t=a[i],o=!0,s=1;s<t.length;s++){var c=t[s];0!==n[c]&&(o=!1)}o&&(a.splice(i--,1),e=r(r.s=t[0]))}return e}var o={},n={app:0},a=[];function r(i){if(o[i])return o[i].exports;var t=o[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=o,r.d=function(e,i,t){r.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,i){if(1&i&&(e=r(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var o in e)r.d(t,o,function(i){return e[i]}.bind(null,o));return t},r.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(i,"a",i),i},r.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=i,s=s.slice();for(var u=0;u<s.length;u++)i(s[u]);var d=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"034f":function(e,i,t){"use strict";var o=t("64a9"),n=t.n(o);n.a},"1c91":function(e,i,t){},"56d7":function(e,i,t){"use strict";t.r(i);t("cadf"),t("551c"),t("097d");var o=t("2b0e"),n=t("b6d0"),a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("LogIn",{attrs:{config:e.config}})],1)},r=[],s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"login"},[t("div",{staticClass:"modal is-active"},[t("div",{staticClass:"modal-background"}),t("div",{staticClass:"modal-card"},[t("header",{staticClass:"modal-card-head"},[t("img",{staticClass:"application-icon",attrs:{src:e.config.iconURL}}),t("p",{staticClass:"modal-card-title"},[e._v(e._s(e.config.applicationName))])]),t("section",{staticClass:"modal-card-body"},[e.submitted?e._e():t("label",{staticClass:"label has-text-centered",attrs:{for:"phoneNumber"}},[e._v("Please enter your phone number")]),e.submitted?e._e():t("input",{directives:[{name:"mask",rawName:"v-mask",value:e.phoneNumberMask,expression:"phoneNumberMask"},{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],staticClass:"input phoneNumber",attrs:{id:"phoneNumber",type:"text",placeholder:"(___) ___-____"},domProps:{value:e.phoneNumber},on:{keyup:function(i){e.focus("next",i)},input:function(i){i.target.composing||(e.phoneNumber=i.target.value)}}}),e.submitted?t("label",{staticClass:"label has-text-centered",attrs:{for:"phoneNumber"}},[e._v("Please enter the 6-digit confirmation code")]):e._e(),e.submitted?t("div",{staticClass:"is-flex verification-code"},[t("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode0,expression:"verificationCode0"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode0",type:"text",placeholder:"#"},domProps:{value:e.verificationCode0},on:{keyup:function(i){e.verificationCode0&&e.focus("verificationCode1",i)},input:function(i){i.target.composing||(e.verificationCode0=i.target.value)}}}),t("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode1,expression:"verificationCode1"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode1",type:"text",placeholder:"#"},domProps:{value:e.verificationCode1},on:{keyup:function(i){e.focus("verificationCode2",i)},input:function(i){i.target.composing||(e.verificationCode1=i.target.value)}}}),t("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode2,expression:"verificationCode2"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode2",type:"text",placeholder:"#"},domProps:{value:e.verificationCode2},on:{keyup:function(i){e.focus("verificationCode3",i)},input:function(i){i.target.composing||(e.verificationCode2=i.target.value)}}}),t("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode3,expression:"verificationCode3"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode3",type:"text",placeholder:"#"},domProps:{value:e.verificationCode3},on:{keyup:function(i){e.focus("verificationCode4",i)},input:function(i){i.target.composing||(e.verificationCode3=i.target.value)}}}),t("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode4,expression:"verificationCode4"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode4",type:"text",placeholder:"#"},domProps:{value:e.verificationCode4},on:{keyup:function(i){e.focus("verificationCode5",i)},input:function(i){i.target.composing||(e.verificationCode4=i.target.value)}}}),t("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode5,expression:"verificationCode5"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode5",type:"text",placeholder:"#"},domProps:{value:e.verificationCode5},on:{keyup:function(i){e.focus("verify",i)},input:function(i){i.target.composing||(e.verificationCode5=i.target.value)}}})]):e._e(),e.errorMessage?t("article",{staticClass:"message is-danger error-message"},[t("div",{staticClass:"message-body"},[e._v(e._s(e.errorMessage))])]):e._e()]),t("footer",{staticClass:"modal-card-foot"},[e.submitted?e._e():t("button",{staticClass:"button is-primary is-fullwidth",class:{"is-loading":e.submitting},style:{backgroundColor:e.config.primaryColor,borderColor:e.config.primaryColor,boxShadow:"none"},attrs:{id:"next",disabled:14!==e.phoneNumber.length},on:{click:function(i){e.submit()}}},[e._v("Next")]),e.submitted?t("button",{staticClass:"button is-primary is-fullwidth",class:{"is-loading":e.verifying},style:{backgroundColor:e.config.primaryColor,borderColor:e.config.primaryColor,boxShadow:"none"},attrs:{id:"verify",disabled:6!==e.verificationCode.length},on:{click:function(i){e.verify()}}},[e._v("Verify")]):e._e()])])])])},c=[],u=(t("4917"),{name:"LogIn",props:{config:Object},data:function(){return{phoneNumberMask:"(###) ###-####",verificationCodeMask:"######",errorMessage:"",phoneNumber:"",verificationCode:"",verificationCode0:"",verificationCode1:"",verificationCode2:"",verificationCode3:"",verificationCode4:"",verificationCode5:"",submitted:!1,submitting:!1,verifying:!1}},methods:{submit:function(){var e=this;this.submitting=!0;var i=this.phoneNumber.match(/[0-9]+/g).join("");this.$http.post(i).then(function(){e.submitted=!0,e.submitting=!1,setTimeout(function(){document.getElementById("verificationCode0").focus()})}).catch(function(){e.errorMessage="Invalid phone number.",e.submitting=!1})},verify:function(){var e=this;this.verifying=!0;var i=this.phoneNumber.match(/[0-9]+/g).join("");this.$http.post("",{oneTimePassword:this.verificationCode,phoneNumber:i}).then(function(){window.location.href=e.config.redirectUrl}).catch(function(){e.errorMessage="Invalid verification code.",e.verifying=!1})},focus:function(e,i){var t=parseInt(i.key);this.errorMessage="",(t>=0&&t<=9||"next"===e)&&setTimeout(function(){document.getElementById(e).focus()}),this.verificationCode=this.verificationCode0+this.verificationCode1+this.verificationCode2+this.verificationCode3+this.verificationCode4+this.verificationCode5}}}),d=u,l=(t("6d50"),t("2877")),f=Object(l["a"])(d,s,c,!1,null,"139e4a9e",null);f.options.__file="LogIn.vue";var p=f.exports,v=(t("92c6"),{name:"app",props:{config:Object},components:{LogIn:p}}),m=v,C=(t("034f"),Object(l["a"])(m,a,r,!1,null,null,null));C.options.__file="App.vue";var g=C.exports,h=t("bc3a");window.XClaimAuth=function(e){return{show:function(){o["a"].prototype.$http=h["create"]({baseURL:e.baseURL}),o["a"].config.productionTip=!1,o["a"].use(n["a"]),new o["a"]({props:{config:Object},render:function(i){return i(g,{props:{config:e}})}}).$mount("#app")},isLoggedIn:function(){return h["head"](e.baseURL)}}}},"64a9":function(e,i,t){},"6d50":function(e,i,t){"use strict";var o=t("1c91"),n=t.n(o);n.a}});
//# sourceMappingURL=app.3f90b457.js.map
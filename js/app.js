(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)r=s[l],n[r]&&f.push(n[r][0]),n[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],o=!0,s=1;s<i.length;s++){var c=i[s];0!==n[c]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var o={},n={app:0},a=[];function r(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=o,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["authApp"]=window["authApp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var o=i("64a9"),n=i.n(o);n.a},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var o=i("2b0e"),n=i("b6d0"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"auth-app"}},[i("LogIn",{attrs:{config:e.config}})],1)},r=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login"},[i("div",{staticClass:"modal is-active"},[i("div",{staticClass:"modal-background"}),i("div",{staticClass:"modal-card"},[i("header",{staticClass:"modal-card-head"},[i("img",{staticClass:"application-icon",attrs:{src:e.config.iconURL}}),i("p",{staticClass:"modal-card-title"},[e._v(e._s(e.config.applicationName))])]),i("section",{staticClass:"modal-card-body"},[e.submitted?e._e():i("label",{staticClass:"label has-text-centered",attrs:{for:"phoneNumber"}},[e._v("Please enter your phone number")]),e.submitted?e._e():i("input",{directives:[{name:"mask",rawName:"v-mask",value:e.phoneNumberMask,expression:"phoneNumberMask"},{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],staticClass:"input phoneNumber",attrs:{id:"phoneNumber",type:"text",placeholder:"(___) ___-____"},domProps:{value:e.phoneNumber},on:{keyup:function(t){e.focus("next",t)},input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}}),e.submitted?i("label",{staticClass:"label has-text-centered",attrs:{for:"phoneNumber"}},[e._v("Please enter the 6-digit confirmation code")]):e._e(),e.submitted?i("div",{staticClass:"is-flex verification-code"},[i("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode0,expression:"verificationCode0"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode0",type:"text",placeholder:"#"},domProps:{value:e.verificationCode0},on:{keyup:function(t){e.verificationCode0&&e.focus("verificationCode1",t)},input:function(t){t.target.composing||(e.verificationCode0=t.target.value)}}}),i("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode1,expression:"verificationCode1"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode1",type:"text",placeholder:"#"},domProps:{value:e.verificationCode1},on:{keyup:function(t){e.focus("verificationCode2",t)},input:function(t){t.target.composing||(e.verificationCode1=t.target.value)}}}),i("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode2,expression:"verificationCode2"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode2",type:"text",placeholder:"#"},domProps:{value:e.verificationCode2},on:{keyup:function(t){e.focus("verificationCode3",t)},input:function(t){t.target.composing||(e.verificationCode2=t.target.value)}}}),i("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode3,expression:"verificationCode3"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode3",type:"text",placeholder:"#"},domProps:{value:e.verificationCode3},on:{keyup:function(t){e.focus("verificationCode4",t)},input:function(t){t.target.composing||(e.verificationCode3=t.target.value)}}}),i("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode4,expression:"verificationCode4"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode4",type:"text",placeholder:"#"},domProps:{value:e.verificationCode4},on:{keyup:function(t){e.focus("verificationCode5",t)},input:function(t){t.target.composing||(e.verificationCode4=t.target.value)}}}),i("input",{directives:[{name:"mask",rawName:"v-mask",value:"#",expression:"'#'"},{name:"model",rawName:"v-model",value:e.verificationCode5,expression:"verificationCode5"}],staticClass:"input verification-code-input",attrs:{id:"verificationCode5",type:"text",placeholder:"#"},domProps:{value:e.verificationCode5},on:{keyup:function(t){e.focus("verify",t)},input:function(t){t.target.composing||(e.verificationCode5=t.target.value)}}})]):e._e(),e.submitted?i("div",{staticClass:"resend-code"},[i("a",{on:{click:function(t){e.submit()}}},[e._v("Resend Code")])]):e._e(),e.errorMessage?i("article",{staticClass:"message is-danger error-message"},[i("div",{staticClass:"message-body"},[e._v(e._s(e.errorMessage))])]):e._e()]),i("footer",{staticClass:"modal-card-foot"},[e.submitted?e._e():i("button",{staticClass:"button is-primary is-fullwidth",class:{"is-loading":e.submitting},style:{backgroundColor:e.config.primaryColor,borderColor:e.config.primaryColor,boxShadow:"none"},attrs:{id:"next",disabled:14!==e.phoneNumber.length},on:{click:function(t){e.submit()}}},[e._v("Next")]),e.submitted?i("button",{staticClass:"button is-primary is-fullwidth",class:{"is-loading":e.verifying},style:{backgroundColor:e.config.primaryColor,borderColor:e.config.primaryColor,boxShadow:"none"},attrs:{id:"verify",disabled:6!==e.verificationCode.length},on:{click:function(t){e.verify()}}},[e._v("Verify")]):e._e()])])])])},c=[],u=(i("4917"),{name:"LogIn",props:{config:Object},data:function(){return{phoneNumberMask:"(###) ###-####",verificationCodeMask:"######",errorMessage:"",phoneNumber:"",verificationCode:"",verificationCode0:"",verificationCode1:"",verificationCode2:"",verificationCode3:"",verificationCode4:"",verificationCode5:"",submitted:!1,submitting:!1,verifying:!1}},methods:{submit:function(){var e=this;this.submitting=!0;var t=this.phoneNumber.match(/[0-9]+/g).join("");this.$http(t,{method:"post",data:{},withCredentials:!0}).then(function(){e.submitted=!0,e.submitting=!1,setTimeout(function(){document.getElementById("verificationCode0").focus()})}).catch(function(t){var i=t.response.status;e.errorMessage=404===i?"Phone number not associated with a user.":"Invalid phone number.",e.submitting=!1})},verify:function(){var e=this;this.verifying=!0;var t=this.phoneNumber.match(/[0-9]+/g).join("");this.$http("",{method:"post",data:{oneTimePassword:this.verificationCode,phoneNumber:t},withCredentials:!0}).then(function(){window.location.href=e.config.redirectUrl}).catch(function(){e.errorMessage="Invalid verification code.",e.verifying=!1})},focus:function(e,t){var i=parseInt(t.key);if(8===t.which&&this.submitted){var o=parseInt(e.substr(e.length-1));return isNaN(o)&&(o=6),this["verificationCode".concat(o-1)]="",void document.getElementById("verificationCode".concat(o-2)).focus()}this.errorMessage="",(i>=0&&i<=9||"next"===e)&&setTimeout(function(){document.getElementById(e).focus()},50),this.verificationCode=this.verificationCode0+this.verificationCode1+this.verificationCode2+this.verificationCode3+this.verificationCode4+this.verificationCode5}}}),d=u,l=(i("a940"),i("2877")),f=Object(l["a"])(d,s,c,!1,null,"16662f52",null);f.options.__file="LogIn.vue";var p=f.exports,v=(i("92c6"),{name:"app",props:{config:Object},components:{LogIn:p}}),m=v,h=(i("034f"),Object(l["a"])(m,a,r,!1,null,null,null));h.options.__file="App.vue";var C=h.exports,b=i("bc3a");window.XClaimAuth=function(e){return{show:function(){o["a"].prototype.$http=b["create"]({baseURL:e.baseURL}),o["a"].config.productionTip=!1,o["a"].use(n["a"]),new o["a"]({props:{config:Object},render:function(t){return t(C,{props:{config:e}})}}).$mount("#auth-app"),setTimeout(function(){document.querySelector("#phoneNumber").focus()},100)},isLoggedIn:function(){return b["head"](e.baseURL,{withCredentials:!0})},logout:function(){return b["delete"](e.baseURL,{withCredentials:!0})},getUserInfo:function(){return b["get"](e.baseURL,{withCredentials:!0})}}}},"64a9":function(e,t,i){},"97fb":function(e,t,i){},a940:function(e,t,i){"use strict";var o=i("97fb"),n=i.n(o);n.a}});
//# sourceMappingURL=app.c02a1033.js.map

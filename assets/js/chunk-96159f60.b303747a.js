(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96159f60"],{"057f":function(e,t,n){var r=n("fc6a"),a=n("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return a(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==i.call(e)?c(e):a(r(e))}},"08ce":function(e,t,n){},"0b43":function(e,t,n){"use strict";n("08ce")},"16b0":function(e,t,n){},"1e8f":function(e,t,n){e.exports=n.p+"img/livia.jpeg"},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),a=n("825a"),i=n("577e"),s=n("d039"),c=n("ad6d"),o="toString",l=RegExp.prototype,u=l[o],f=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=o;(f||d)&&r(RegExp.prototype,o,(function(){var e=a(this),t=i(e.source),n=e.flags,r=i(void 0===n&&e instanceof RegExp&&!("flags"in l)?c.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"408d":function(e,t,n){"use strict";n("ea3f")},"428f":function(e,t,n){var r=n("da84");e.exports=r},"44dc":function(e,t,n){e.exports=n.p+"img/github.png"},"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),s=i("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"560a":function(e,t,n){"use strict";n("8c3e")},"746f":function(e,t,n){var r=n("428f"),a=n("5135"),i=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});a(t,e)||s(t,e,{value:i.f(e)})}},"84f3":function(e,t,n){},"8c3e":function(e,t,n){},9191:function(e,t,n){"use strict";n("84f3")},a4d3:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("d066"),s=n("c430"),c=n("83ab"),o=n("4930"),l=n("d039"),u=n("5135"),f=n("e8b5"),d=n("861d"),p=n("d9b5"),m=n("825a"),b=n("7b0b"),g=n("fc6a"),h=n("a04b"),v=n("577e"),y=n("5c6c"),k=n("7c73"),O=n("df75"),w=n("241c"),x=n("057f"),j=n("7418"),$=n("06cf"),C=n("9bf2"),S=n("d1e7"),_=n("9112"),P=n("6eeb"),E=n("5692"),M=n("f772"),D=n("d012"),T=n("90e3"),I=n("b622"),V=n("e538"),q=n("746f"),F=n("d44e"),J=n("69f3"),L=n("b727").forEach,N=M("hidden"),A="Symbol",B="prototype",R=I("toPrimitive"),Q=J.set,H=J.getterFor(A),W=Object[B],z=a.Symbol,G=i("JSON","stringify"),K=$.f,U=C.f,X=x.f,Y=S.f,Z=E("symbols"),ee=E("op-symbols"),te=E("string-to-symbol-registry"),ne=E("symbol-to-string-registry"),re=E("wks"),ae=a.QObject,ie=!ae||!ae[B]||!ae[B].findChild,se=c&&l((function(){return 7!=k(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=K(W,t);r&&delete W[t],U(e,t,n),r&&e!==W&&U(W,t,r)}:U,ce=function(e,t){var n=Z[e]=k(z[B]);return Q(n,{type:A,tag:e,description:t}),c||(n.description=t),n},oe=function(e,t,n){e===W&&oe(ee,t,n),m(e);var r=h(t);return m(n),u(Z,r)?(n.enumerable?(u(e,N)&&e[N][r]&&(e[N][r]=!1),n=k(n,{enumerable:y(0,!1)})):(u(e,N)||U(e,N,y(1,{})),e[N][r]=!0),se(e,r,n)):U(e,r,n)},le=function(e,t){m(e);var n=g(t),r=O(n).concat(me(n));return L(r,(function(t){c&&!fe.call(n,t)||oe(e,t,n[t])})),e},ue=function(e,t){return void 0===t?k(e):le(k(e),t)},fe=function(e){var t=h(e),n=Y.call(this,t);return!(this===W&&u(Z,t)&&!u(ee,t))&&(!(n||!u(this,t)||!u(Z,t)||u(this,N)&&this[N][t])||n)},de=function(e,t){var n=g(e),r=h(t);if(n!==W||!u(Z,r)||u(ee,r)){var a=K(n,r);return!a||!u(Z,r)||u(n,N)&&n[N][r]||(a.enumerable=!0),a}},pe=function(e){var t=X(g(e)),n=[];return L(t,(function(e){u(Z,e)||u(D,e)||n.push(e)})),n},me=function(e){var t=e===W,n=X(t?ee:g(e)),r=[];return L(n,(function(e){!u(Z,e)||t&&!u(W,e)||r.push(Z[e])})),r};if(o||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,t=T(e),n=function(e){this===W&&n.call(ee,e),u(this,N)&&u(this[N],t)&&(this[N][t]=!1),se(this,t,y(1,e))};return c&&ie&&se(W,t,{configurable:!0,set:n}),ce(t,e)},P(z[B],"toString",(function(){return H(this).tag})),P(z,"withoutSetter",(function(e){return ce(T(e),e)})),S.f=fe,C.f=oe,$.f=de,w.f=x.f=pe,j.f=me,V.f=function(e){return ce(I(e),e)},c&&(U(z[B],"description",{configurable:!0,get:function(){return H(this).description}}),s||P(W,"propertyIsEnumerable",fe,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:z}),L(O(re),(function(e){q(e)})),r({target:A,stat:!0,forced:!o},{for:function(e){var t=v(e);if(u(te,t))return te[t];var n=z(t);return te[t]=n,ne[n]=t,n},keyFor:function(e){if(!p(e))throw TypeError(e+" is not a symbol");if(u(ne,e))return ne[e]},useSetter:function(){ie=!0},useSimple:function(){ie=!1}}),r({target:"Object",stat:!0,forced:!o,sham:!c},{create:ue,defineProperty:oe,defineProperties:le,getOwnPropertyDescriptor:de}),r({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:pe,getOwnPropertySymbols:me}),r({target:"Object",stat:!0,forced:l((function(){j.f(1)}))},{getOwnPropertySymbols:function(e){return j.f(b(e))}}),G){var be=!o||l((function(){var e=z();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}));r({target:"JSON",stat:!0,forced:be},{stringify:function(e,t,n){var r,a=[e],i=1;while(arguments.length>i)a.push(arguments[i++]);if(r=t,(d(t)||void 0!==e)&&!p(e))return f(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!p(t))return t}),a[1]=t,G.apply(null,a)}})}z[B][R]||_(z[B],R,z[B].valueOf),F(z,A),D[N]=!0},b3d7:function(e,t,n){"use strict";n("16b0")},b64b:function(e,t,n){var r=n("23e7"),a=n("7b0b"),i=n("df75"),s=n("d039"),c=s((function(){i(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(e){return i(a(e))}})},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Profile"),n("Programming"),n("Experience"),n("Contact")],1)},a=[],i=n("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Section",{staticClass:"profile",attrs:{title:e.$t("title.profile"),"title-icon":"profile"}},[r("div",{staticClass:"profile-content"},[r("img",{attrs:{src:n("1e8f")}}),r("div",{staticClass:"profile-text"},[e._l(e.$t("profile"),(function(t,n){return r("p",{key:n},[e._v(" "+e._s(t)+" ")])})),r("a",{staticClass:"profile-resume",attrs:{href:"/resume/curriculum-en.pdf",download:"resume.pdf",rel:"alternate"},on:{click:e.onDownload}},[r("VButton",[r("Icon",{attrs:{name:"download"}}),e._v(" "+e._s(e.$t("title.resume"))+" ")],1)],1)],2)]),e._l(e.infos,(function(t){return r("Timeline",{key:t.title,staticClass:"profile-info",attrs:{icon:t.icon,"time-events":e.$t(t.items),title:e.$t(t.title)}})}))],2)},c=[],o=n("94ba"),l=n.n(o),u=i["a"].extend({computed:{infos:function(){return[{icon:"education",title:"title.education",items:"education"},{icon:"language",title:"title.languages",items:"languages"}]}},methods:{onDownload:function(){l.a.track("CV-download",{lang:this.$i18n.locale})}}}),f=u,d=(n("b3d7"),n("2877")),p=Object(d["a"])(f,s,c,!1,null,null,null),m=p.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Section",{staticClass:"programming",attrs:{"title-icon":"programming",title:e.$t("title.programming")}},[n("div",{staticClass:"skills"},e._l(e.skills,(function(t,r){return n("div",{key:r,staticClass:"skill"},[n("span",[e._v(e._s(t.name))]),n("ProgressBar",{attrs:{progress:t.progress}})],1)})),0)])},g=[],h=i["a"].extend({data:function(){return{skills:[{name:"C/C++",progress:.8},{name:"C#",progress:.3},{name:"CSS",progress:.9},{name:"HTML",progress:.8},{name:"JavaScript",progress:.9},{name:"Python",progress:.85},{name:"SQL",progress:.7},{name:"TypeScript",progress:.9}]}}}),v=h,y=(n("9191"),Object(d["a"])(v,b,g,!1,null,"b3df03a8",null)),k=y.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Section",{staticClass:"experience",attrs:{"title-icon":"tools",title:e.$t("menu.experience")}},e._l(e.experiences,(function(t){return n("Timeline",{key:t.title,staticClass:"experience-info",attrs:{icon:t.icon,"time-events":e.$t(t.items),title:e.$t(t.title)}})})),1)},w=[],x=i["a"].extend({computed:{experiences:function(){return[{icon:"work",title:"title.experience",items:"experience"},{icon:"microphone",title:"title.presentations",items:"presentations"},{icon:"rocket",title:"title.projects",items:"projects"}]}}}),j=x,$=(n("408d"),Object(d["a"])(j,O,w,!1,null,null,null)),C=$.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Section",{staticClass:"contact",attrs:{"title-icon":"message",title:e.$t("title.contact")}},[n("Message",{staticClass:"contact-form"}),n("div",{staticClass:"contact-icons"},e._l(e.contacts,(function(e,t){return n("AnimatedLink",{key:t,attrs:{image:e.image,text:e.text,href:e.href}})})),1),n("div",{staticClass:"contact-copyright"},[e._v(" Copyright © Lívia Almeida ")])],1)},_=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"message",on:{input:function(t){return e.onInput(t.target.form)},submit:function(t){return t.preventDefault(),e.sendMessage.apply(null,arguments)}}},[n("VInput",{staticClass:"message-name",attrs:{label:e.required(e.$t("contact.name.label")),placeholder:e.$t("contact.name.placeholder"),disabled:e.disabled,minlength:"3",required:""},model:{value:e.email.name,callback:function(t){e.$set(e.email,"name",t)},expression:"email.name"}}),n("div",{staticClass:"message-row"},[n("VInput",{attrs:{label:e.required(e.$t("contact.subject.label")),placeholder:e.$t("contact.subject.placeholder"),disabled:e.disabled,required:""},model:{value:e.email.subject,callback:function(t){e.$set(e.email,"subject",t)},expression:"email.subject"}}),n("VInput",{attrs:{label:e.$t("contact.email.label"),placeholder:e.$t("contact.email.placeholder"),disabled:e.disabled,type:"email"},model:{value:e.email.email,callback:function(t){e.$set(e.email,"email",t)},expression:"email.email"}})],1),n("VInput",{staticClass:"message-text",attrs:{label:e.required(e.$t("contact.message.label")),placeholder:e.$t("contact.message.placeholder"),disabled:e.disabled,type:"textarea",required:""},model:{value:e.email.message,callback:function(t){e.$set(e.email,"message",t)},expression:"email.message"}}),n("Captcha",{ref:"captcha",staticClass:"message-captcha",attrs:{callback:e.captchaCallback},model:{value:e.captcha,callback:function(t){e.captcha=t},expression:"captcha"}}),n("VButton",{attrs:{disabled:!e.valid||e.disabled,loading:e.sending}},[e._v(" "+e._s(e.$t("contact.button"))+" ")]),n("Modal",e._b({model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},"Modal",e.feedback,!1))],1)},E=[];n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n("d3b7"),n("25f0");var I=n("0e17"),V=i["a"].extend({data:function(){return{captcha:"",disabled:!!this.$cookies.get("CTMT"),email:{email:"",message:"",name:"",subject:""},feedback:{message:"",title:"",type:""},modal:!1,sending:!1,valid:!1}},computed:{captchaElement:function(){var e=this.$refs.captcha;return e.$data.captcha},errors:function(){return{abused:this.$t("contact.captcha.errors.abused").toString(),incorrect:this.$t("contact.captcha.errors.incorrect").toString()}}},methods:{captchaCallback:function(e,t,n){if("success"!==e){if(n>3)throw Error(this.errors.abused);throw Error(this.errors.incorrect)}},onInput:function(e){this.valid=e.checkValidity()&&!!this.captcha.length},required:function(e){return"".concat(e," *")},sendFinish:function(){this.captchaElement.reset(),this.captcha="",this.valid=!1,this.modal=!0},sendMessage:function(){var e=this;l.a.track("Message-send");try{this.captchaElement.validate()}catch(n){var t=n;switch(l.a.track("Message-error-captcha",{error:t.message}),this.feedback=T(T({},this.feedback),{},{title:"Ops!",type:"error"}),t.message){case this.errors.abused:this.$cookies.set("CTMT",!0),this.disabled=!0,this.feedback.message=this.errors.abused;break;case this.errors.incorrect:this.feedback.message=this.errors.incorrect;break}return void this.sendFinish()}this.sending=!0,I["a"].sendMail(this.email).then((function(){e.feedback={message:e.$t("contact.sent").toString(),title:"Ok!",type:"success"},e.email={email:"",message:"",name:"",subject:""},l.a.track("Message-sent")})).catch((function(t){e.feedback={message:t.message,title:"Ops!",type:"error"},l.a.track("Message-error-send",{error:t.message})})).finally((function(){e.sending=!1,e.sendFinish()}))}}}),q=V,F=(n("560a"),Object(d["a"])(q,P,E,!1,null,null,null)),J=F.exports,L=i["a"].extend({components:{Message:J},data:function(){return{contacts:[{image:n("ea71"),text:"Lívia Almeida",href:"https://linkedin.com/in/livia001"},{image:n("44dc"),text:"@liviaalmeida",href:"https://github.com/liviaalmeida"},{image:n("d557"),text:"leave.ah@gmail.com",href:"mailto:leave.ah@gmail.com"}]}}}),N=L,A=(n("0b43"),Object(d["a"])(N,S,_,!1,null,"7a71772d",null)),B=A.exports,R=i["a"].extend({components:{Profile:m,Programming:k,Experience:C,Contact:B}}),Q=R,H=Object(d["a"])(Q,r,a,!1,null,null,null);t["default"]=H.exports},d557:function(e,t,n){e.exports=n.p+"img/mail.png"},dbb4:function(e,t,n){var r=n("23e7"),a=n("83ab"),i=n("56ef"),s=n("fc6a"),c=n("06cf"),o=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),a=c.f,l=i(r),u={},f=0;while(l.length>f)n=a(r,t=l[f++]),void 0!==n&&o(u,t,n);return u}})},e439:function(e,t,n){var r=n("23e7"),a=n("d039"),i=n("fc6a"),s=n("06cf").f,c=n("83ab"),o=a((function(){s(1)})),l=!c||o;r({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(e,t){return s(i(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},ea3f:function(e,t,n){},ea71:function(e,t,n){e.exports=n.p+"img/linkedin.png"}}]);
//# sourceMappingURL=chunk-96159f60.b303747a.js.map
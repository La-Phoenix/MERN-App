"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[771],{839:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(885),r=t(791),i=t(712),s=t(184);var u=function(e){var n=(0,r.useState)(),t=(0,a.Z)(n,2),u=t[0],l=t[1],o=(0,r.useState)(),c=(0,a.Z)(o,2),d=c[0],p=c[1],f=(0,r.useState)(!1),v=(0,a.Z)(f,2),m=v[0],h=v[1],x=(0,r.useRef)();return(0,r.useEffect)((function(){if(u){var e=new FileReader;e.onload=function(){p(e.result)},e.readAsDataURL(u)}}),[u]),(0,s.jsxs)("div",{className:"form-control",children:[(0,s.jsx)("input",{id:e.id,ref:x,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(n){var t,a;n.target.files||1===n.target.files.lenth?(t=n.target.files[0],l(t),h(!0),a=!0):(h(!1),a=!1),e.onInput(e.id,t,a)}}),(0,s.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,s.jsxs)("div",{className:"image-upload__preview",children:[d&&(0,s.jsx)("img",{src:d,alt:"Preview"}),!d&&(0,s.jsx)("p",{children:"Please pick an image."})]}),(0,s.jsx)(i.Z,{type:"button",onClick:function(){x.current.click()},children:"PICK IMAGE"})]}),!m&&(0,s.jsx)("p",{children:e.errorText})]})}},397:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(885),r=t(413),i=t(791),s=t(25),u=t(184),l=function(e,n){switch(n.type){case"CHANGE":return(0,r.Z)((0,r.Z)({},e),{},{value:n.val,isValid:(0,s.Gu)(n.val,n.validators)});case"TOUCHED":return(0,r.Z)((0,r.Z)({},e),{},{isTouched:!0});default:return e}};var o=function(e){var n=(0,i.useReducer)(l,{value:e.initialValue||"",isValid:e.initialisValid||!1,isTouched:!1}),t=(0,a.Z)(n,2),r=t[0],s=t[1],o=e.id,c=e.onInput,d=r.value,p=r.isValid;(0,i.useEffect)((function(){c(o,d,p)}),[o,d,p,c]);var f=function(n){s({type:"CHANGE",val:n.target.value,validators:e.validators})},v=function(){s({type:"TOUCHED"})},m="input"===e.element?(0,u.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,value:r.value,onChange:f,onBlur:v}):(0,u.jsx)("textarea",{id:e.id,rows:e.rows||3,onBlur:v,onChange:f,value:r.value});return(0,u.jsxs)("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid"),children:[(0,u.jsx)("label",{htmlFor:e.id,children:e.label}),m,!r.isValid&&r.isTouched&&(0,u.jsx)("p",{children:e.errorText})]})}},8:function(e,n,t){t.d(n,{c:function(){return l}});var a=t(885),r=t(942),i=t(413),s=t(791),u=function(e,n){switch(n.type){case"INPUT_CHANGE":var t=!0;for(var a in e.inputs)e.inputs[a]&&(t=a===n.inputId?t&&n.isValid:t&&e.inputs[a].isValid);return(0,i.Z)((0,i.Z)({},e),{},{inputs:(0,i.Z)((0,i.Z)({},e.inputs),{},(0,r.Z)({},n.inputId,{value:n.value,isValid:n.isValid})),isValid:t});case"SET_DATA":return(0,i.Z)((0,i.Z)({},e),{},{inputs:n.inputs,formIsValid:n.formIsValid});default:return e}},l=function(e,n){var t=(0,s.useReducer)(u,{inputs:e,isValid:n}),r=(0,a.Z)(t,2),i=r[0],l=r[1];return[i,(0,s.useCallback)((function(e,n,t){l({type:"INPUT_CHANGE",value:n,isValid:t,inputId:e})}),[]),(0,s.useCallback)((function(e,n){l({type:"SET_DATA",inputs:e,formIsValid:n})}),[])]}},771:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(165),r=t(861),i=t(413),s=t(885),u=t(791),l=t(712),o=t(839),c=t(397),d=t(717),p=t(952),f=t(273),v=t(198),m=t(8),h=t(290),x=t(25),y=t(184);var Z=function(e){var n=(0,u.useContext)(v.V),t=(0,u.useState)(!0),Z=(0,s.Z)(t,2),g=Z[0],I=Z[1],j=(0,h.x)(),w=j.isLoading,T=j.error,b=j.sendRequest,V=j.clearError,C=(0,m.c)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),N=(0,s.Z)(C,3),S=N[0],k=N[1],E=N[2],P=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r,i,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!g){e.next=13;break}return e.prev=2,e.next=5,b("https://mern-app00001.herokuapp.com/api/users/login","POST",JSON.stringify({email:S.inputs.email.value,password:S.inputs.password.value}),{"Content-Type":"application/json"});case 5:r=e.sent,n.login(r.userId,r.token),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:e.next=27;break;case 13:return e.prev=13,(i=new FormData).append("email",S.inputs.email.value),i.append("name",S.inputs.name.value),i.append("password",S.inputs.password.value),i.append("image",S.inputs.image.value),e.next=21,b("https://mern-app00001.herokuapp.com/api/users/signup","POST",i);case 21:s=e.sent,n.login(s.userId,s.token),e.next=27;break;case 25:e.prev=25,e.t1=e.catch(13);case 27:case"end":return e.stop()}}),e,null,[[2,9],[13,25]])})));return function(n){return e.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.Z,{error:T,onClear:V}),(0,y.jsxs)(d.Z,{className:"authentication",children:[w&&(0,y.jsx)(f.Z,{asOverlay:!0}),(0,y.jsx)("h2",{children:g?"LOGIN Required":"SIGN UP Required"}),(0,y.jsx)("hr",{}),(0,y.jsxs)("form",{onSubmit:P,children:[!g&&(0,y.jsx)(c.Z,{element:"input",id:"name",type:"text",label:"Your name",validators:[(0,x.hg)()],errorText:"Please enter a name",onInput:k}),!g&&(0,y.jsx)(o.Z,{id:"image",center:!0,onInput:k,errorText:"Please provide an image"}),(0,y.jsx)(c.Z,{element:"input",id:"email",type:"email",label:"E-mail",validators:[(0,x.Ox)()],errorText:"Please enter a valid email address.",onInput:k}),(0,y.jsx)(c.Z,{element:"input",id:"password",type:"password",label:"Password",validators:[(0,x.CP)(6)],errorText:"Please enter a valid password, at least five characters.",onInput:k}),(0,y.jsx)(l.Z,{type:"submit",disabled:!S.isValid,children:g?"LOGIN":"SIGNUP"})]}),(0,y.jsxs)(l.Z,{inverse:!0,onClick:function(){g?E((0,i.Z)((0,i.Z)({},S.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):E((0,i.Z)((0,i.Z)({},S.inputs),{},{name:void 0,image:void 0}),S.inputs.email.isValid&&S.inputs.password.isValid),I((function(e){return!e}))},children:["SWITCH TO ",g?"SIGNUP":"LOGIN"]})]})]})}},25:function(e,n,t){t.d(n,{Ox:function(){return c},CP:function(){return o},hg:function(){return l},Gu:function(){return d}});var a=t(181);var r="REQUIRE",i="MINLENGTH",s="MAXLENGTH",u="EMAIL",l=function(){return{type:r}},o=function(e){return{type:i,val:e}},c=function(){return{type:u}},d=function(e,n){var t,l=!0,o=function(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,a.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,u=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){l=!0,s=e},f:function(){try{u||null==t.return||t.return()}finally{if(l)throw s}}}}(n);try{for(o.s();!(t=o.n()).done;){var c=t.value;c.type===r&&(l=l&&e.trim().length>0),c.type===i&&(l=l&&e.trim().length>=c.val),c.type===s&&(l=l&&e.trim().length<=c.val),"MIN"===c.type&&(l=l&&+e>=c.val),"MAX"===c.type&&(l=l&&+e<=c.val),c.type===u&&(l=l&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){o.e(d)}finally{o.f()}return l}}}]);
//# sourceMappingURL=771.68b63d10.chunk.js.map
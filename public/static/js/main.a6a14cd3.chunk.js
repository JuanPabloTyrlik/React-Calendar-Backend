(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{210:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a(9),o=a.n(c),s=a(83),i=a(6),l="[UI] Open Modal",u="[UI] Close Modal",d="[EVENT] Add New",j="[EVENT] Set Active",b="[EVENT] Clear Active",m="[EVENT] Clear All",p="[EVENT] Update Event",O="[EVENT] Delete Event",f="[EVENT] Load Events",v="[AUTH] Login",h="[AUTH] Logout",x="[AUTH] Finish checking login state",g={modalOpen:!1},w=a(24),E=a(64),y={events:[],activeEvent:null},N={checking:!0},k=Object(w.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type;t.payload;switch(a){case l:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case u:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case v:return Object(i.a)(Object(i.a)(Object(i.a)({},e),n),{},{checking:!1});case h:return{checking:!1};case x:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case d:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(E.a)(e.events),[n])});case j:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:n});case b:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case m:return y;case p:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===n.id?n:e}))});case O:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case f:return Object(i.a)(Object(i.a)({},e),{},{events:Object(E.a)(n)});default:return e}}}),R="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.d,S=Object(w.e)(k,R(Object(w.a)(s.a))),C=a(11),T=a(40),L=a(12),A=a(14),D=a.n(A),I=a(23),P=a(10),V=a.n(P),U=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat("https://jp-calendar-app.herokuapp.com/api","/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a.toUpperCase(),headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},_=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n=localStorage.getItem("token")||"",r="".concat("https://jp-calendar-app.herokuapp.com/api","/").concat(e);return"GET"===a?fetch(r,{method:a,headers:{Authorization:"Bearer ".concat(n)}}):fetch(r,{method:a.toUpperCase(),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:t?JSON.stringify(t):void 0})},H=a(15),F=a.n(H),G=function(){return{type:b,payload:null}},M=function(e){return{type:d,payload:e}},z=function(e){return{type:p,payload:e}},B=function(){return{type:O,payload:null}},J=function(e){return{type:f,payload:e}},q=function(){return function(e){localStorage.clear(),e($()),e({type:m,payload:null})}},X=function(e){return{type:v,payload:e}},$=function(){return{type:h,payload:null}},Z=function(){return{type:x,payload:null}},K=a(17),Q=a(57),W=a.n(Q),Y=a(27),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),a=Object(K.a)(t,2),n=a[0],c=a[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},n),{},Object(Y.a)({},t.name,t.value)))};return[n,s,o]},te=(a(97),function(){var e=Object(C.b)(),t=Object(r.useState)({Lemail:!1,Lpassword:!1,Rname:!1,Remail:!1,Rpassword:!1,Rpassword2:!1}),a=Object(K.a)(t,2),c=a[0],o=a[1],s=ee({Lemail:"",Lpassword:""}),l=Object(K.a)(s,2),u=l[0],d=l[1],j=ee({Rname:"",Remail:"",Rpassword:"",Rpassword2:""}),b=Object(K.a)(j,2),m=b[0],p=b[1],O=u.Lemail,f=u.Lpassword,v=m.Rname,h=m.Remail,x=m.Rpassword,g=m.Rpassword2,w=function(){return W.a.isEmail(O)?f.trim().length<8?(o(Object(i.a)(Object(i.a)({},c),{},{Lpassword:!0})),V.a.fire("Error","Password must be at least 8 characters","error"),!1):(o({Lemail:!1,Lpassword:!1,Rname:!1,Remail:!1,Rpassword:!1,Rpassword2:!1}),!0):(o(Object(i.a)(Object(i.a)({},c),{},{Lemail:!0})),V.a.fire("Error","Email must be valid","error"),!1)},E=function(){return/^\s*$/.test(v)?(o(Object(i.a)(Object(i.a)({},c),{},{Rname:!0})),V.a.fire("Error","Name cannot be empty","error"),!1):W.a.isEmail(h)?x.trim().length<8||x.trim().length>32?(o(Object(i.a)(Object(i.a)({},c),{},{Rpassword:!0})),V.a.fire("Error","Password must be at least 8 characters and less that 32 characters","error"),!1):/[0-9]/.test(x)?/[a-z]/.test(x)?/[A-Z]/.test(x)?/[*.!@$%^&(){}[\]:;,.?/\\~_+\-=|]/.test(x)?x!==g?(o(Object(i.a)(Object(i.a)({},c),{},{Rpassword:!0})),o(Object(i.a)(Object(i.a)({},c),{},{Rpassword2:!0})),V.a.fire("Error","Passwords don't match","error"),!1):(o({Lemail:!1,Lpassword:!1,Rname:!1,Remail:!1,Rpassword:!1,Rpassword2:!1}),!0):(o(Object(i.a)(Object(i.a)({},c),{},{Rpassword:!0})),V.a.fire("Error","Password must contain a special character","error"),!1):(o(Object(i.a)(Object(i.a)({},c),{},{Rpassword:!0})),V.a.fire("Error","Password must contain an upper case letter","error"),!1):(o(Object(i.a)(Object(i.a)({},c),{},{Rpassword:!0})),V.a.fire("Error","Password must contain a lower case letter","error"),!1):(o(Object(i.a)(Object(i.a)({},c),{},{Rpassword:!0})),V.a.fire("Error","Password must contain a number","error"),!1):(o(Object(i.a)(Object(i.a)({},c),{},{Remail:!0})),V.a.fire("Error","Email must be valid","error"),!1)};return Object(n.jsx)("div",{className:"container login-container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(n.jsx)("h3",{children:"Ingreso"}),Object(n.jsxs)("form",{onSubmit:function(t){var a,n;t.preventDefault(),w()&&e((a=O,n=f,function(){var e=Object(I.a)(D.a.mark((function e(t){var r,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("auth/login",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(X({uid:c.uid,name:c.name}))):V.a.fire("Error",c.message,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:c.Lemail?"form-control is-invalid":"form-control",placeholder:"Correo",name:"Lemail",value:O,onChange:d})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:c.Lpassword?"form-control is-invalid":"form-control",placeholder:"Contrase\xf1a",name:"Lpassword",value:f,onChange:d})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(n.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(n.jsx)("h3",{children:"Registro"}),Object(n.jsxs)("form",{onSubmit:function(t){var a,n,r;t.preventDefault(),E()&&e((a=v,n=h,r=x,function(){var e=Object(I.a)(D.a.mark((function e(t){var c,o;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("auth/register",{name:a,email:n,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(X({uid:o.uid,name:o.name}))):V.a.fire("Error",o.message,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:c.Rname?"form-control is-invalid":"form-control",placeholder:"Nombre",name:"Rname",value:v,onChange:p})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"email",className:c.Remail?"form-control is-invalid":"form-control",placeholder:"Correo",name:"Remail",value:h,onChange:p})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:c.Rpassword?"form-control is-invalid":"form-control",placeholder:"Contrase\xf1a",name:"Rpassword",value:x,onChange:p})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:c.Rpassword2?"form-control is-invalid":"form-control",placeholder:"Repita la contrase\xf1a",name:"Rpassword2",value:g,onChange:p})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})}),ae=(a(173),a(63)),ne=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.auth})).name;return Object(n.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-3",children:[Object(n.jsx)("span",{className:"navbar-brand",children:t}),Object(n.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(q())},children:[Object(n.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(n.jsx)("span",{children:" Salir"})]})]})},re={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},ce=(a(174),function(e){var t=e.event,a=t.title,r=t.user.name;return Object(n.jsxs)("div",{children:[Object(n.jsx)("strong",{children:a}),Object(n.jsxs)("span",{children:[" - ",r]})]})}),oe=a(58),se=a.n(oe),ie=a(59),le=a.n(ie),ue=function(){return{type:l,payload:null}},de={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};se.a.setAppElement("#root");var je=F()().minutes(0).seconds(0).toDate(),be=F()(je).add(1,"hour").toDate(),me={title:"",notes:"",start:je,end:be},pe=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e})),a=t.ui.modalOpen,c=t.calendar.activeEvent,o=Object(r.useState)(je),s=Object(K.a)(o,2),l=s[0],d=s[1],j=Object(r.useState)(be),b=Object(K.a)(j,2),m=b[0],p=b[1],O=Object(r.useState)(me),f=Object(K.a)(O,2),v=f[0],h=f[1],x=function(){e({type:u,payload:null}),setTimeout((function(){e(G())}),200)},g=function(e){h(Object(i.a)(Object(i.a)({},v),{},Object(Y.a)({},e.target.name,e.target.value)))};return Object(r.useEffect)((function(){h({title:(null===c||void 0===c?void 0:c.title)||"",notes:(null===c||void 0===c?void 0:c.notes)||"",start:(null===c||void 0===c?void 0:c.start)||je,end:(null===c||void 0===c?void 0:c.end)||be})}),[c]),Object(n.jsx)("div",{children:Object(n.jsxs)(se.a,{isOpen:a,onRequestClose:x,style:de,className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200,children:[Object(n.jsxs)("h1",{children:[" ",c?"Editar evento":"Nuevo evento"," "]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,n=F()(v.start),r=F()(v.end);return v.title?v.end?r.isBefore(n)?V.a.fire("Error","La fecha de fin debe ser mayor a la inicial","error"):(e(c?(a=Object(i.a)(Object(i.a)({},c),v),function(){var e=Object(I.a)(D.a.mark((function e(t){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(z(a)):V.a.fire("Error",r.message,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),V.a.fire("Error",e.t0.message,"error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(I.a)(D.a.mark((function t(a,n){var r,c,o;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.name,t.prev=1,t.next=4,_("events",e,"POST");case 4:return c=t.sent,t.next=7,c.json();case 7:(o=t.sent).ok&&(e.id=o.event.id,e.user={_id:o.event.user,name:r},a(M(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),V.a.fire("Error",t.t0.message,"error");case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(v)),void x()):V.a.fire("Error","El evento debe tener una fecha de fin","error"):V.a.fire("Error","El evento debe tener un t\xedtulo","error")},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Fecha y hora inicio"}),Object(n.jsx)(le.a,{onChange:function(e){if(d(e),e){var t=F()(e).add(1,"hours").toDate();p(t),h(Object(i.a)(Object(i.a)({},v),{},{start:e,end:t}))}else h(Object(i.a)(Object(i.a)({},v),{},{start:e}))},value:l,className:"form-control ".concat(l?"is-valid":"is-invalid"),required:!0,clearIcon:null})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Fecha y hora fin"}),Object(n.jsx)(le.a,{onChange:function(e){p(e),h(Object(i.a)(Object(i.a)({},v),{},{end:e}))},value:m,minDate:l,className:"form-control ".concat(m&&F()(m).isAfter(l)?"is-valid":"is-invalid"),required:!0,clearIcon:null})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Titulo y notas"}),Object(n.jsx)("input",{type:"text",className:"form-control ".concat(v.title&&"is-valid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:v.title,onChange:g}),Object(n.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:v.notes,onChange:g}),Object(n.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(n.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(n.jsx)("i",{className:"far fa-save"}),Object(n.jsx)("span",{children:" Guardar"})]})]})]})})},Oe=function(){var e=Object(C.b)();return Object(n.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(G()),e(ue())},children:Object(n.jsx)("i",{className:"fas fa-plus"})})},fe=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.calendar})).activeEvent;return Object(n.jsx)("button",{className:"btn btn-danger fab-danger",onClick:function(){var a;e((a=t.id,function(){var e=Object(I.a)(D.a.mark((function e(t){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_("events/".concat(a),null,"DELETE");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(B()):V.a.fire("Error",r.message,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),V.a.fire("Error",e.t0.message,"error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))},children:Object(n.jsx)("i",{className:"fas fa-trash"})})};F.a.locale("es");var ve=Object(ae.b)(F.a),he=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,o=Object(C.c)((function(e){return e.auth})).uid,s=Object(r.useState)(localStorage.getItem("lastView")||"month"),l=Object(K.a)(s,2),u=l[0],d=l[1];return Object(r.useEffect)((function(){e(function(){var e=Object(I.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_("events");case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).ok&&t(J(n.events.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{start:F()(e.start).toDate(),end:F()(e.end).toDate()})})))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),V.a.fire("Error",e.t0.message,"error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(n.jsxs)("div",{className:"calendar-screen",children:[Object(n.jsx)(ne,{}),Object(n.jsx)(ae.a,{localizer:ve,events:a,startAccessor:"start",endAccessor:"end",messages:re,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(){e(ue())},onSelectEvent:function(t){e({type:j,payload:t})},onSelectSlot:function(){e(G())},selectable:!0,onView:function(t){e(G()),d(t),localStorage.setItem("lastView",t)},view:u,components:{event:ce}}),c&&Object(n.jsx)(fe,{}),Object(n.jsx)(Oe,{}),Object(n.jsx)(pe,{})]})},xe=a(44),ge=function(e){var t=e.isAuthenticated,a=e.component,r=Object(xe.a)(e,["isAuthenticated","component"]);return Object(n.jsx)(L.b,Object(i.a)(Object(i.a)({},r),{},{component:function(e){return t?Object(n.jsx)(a,Object(i.a)({},e)):Object(n.jsx)(L.a,{to:"/login"})}}))},we=function(e){var t=e.isAuthenticated,a=e.component,r=Object(xe.a)(e,["isAuthenticated","component"]);return Object(n.jsx)(L.b,Object(i.a)(Object(i.a)({},r),{},{component:function(e){return t?Object(n.jsx)(L.a,{to:"/"}):Object(n.jsx)(a,Object(i.a)({},e))}}))},Ee=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(r.useEffect)((function(){e(function(){var e=Object(I.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("auth/token");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(X({uid:n.uid,name:n.name}))):t(Z());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(n.jsx)(n.Fragment,{children:a?Object(n.jsx)("h5",{children:"Loading..."}):Object(n.jsx)(T.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(L.d,{children:[Object(n.jsx)(we,{exact:!0,path:"/login",component:te,isAuthenticated:!!c}),Object(n.jsx)(ge,{exact:!0,path:"/",component:he,isAuthenticated:!!c}),Object(n.jsx)(L.a,{to:"/"})]})})})})},ye=function(){return Object(n.jsx)(C.a,{store:S,children:Object(n.jsx)(Ee,{})})};a(210);o.a.render(Object(n.jsx)(ye,{}),document.getElementById("root"))},97:function(e,t,a){}},[[212,1,2]]]);
//# sourceMappingURL=main.a6a14cd3.chunk.js.map
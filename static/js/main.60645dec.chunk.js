(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={menu:"Header_menu__3L3m0",menu_list:"Header_menu_list__N-NCI",menu_item:"Header_menu_item__1dwBR",menu_link:"Header_menu_link__2drI_",menuBurgerInFuture:"Header_menuBurgerInFuture__3fOoy"}},,,function(e,a,t){e.exports={column:"HW4_column__Kl9Jd",testSpanError:"HW4_testSpanError__3eZkt",superInput:"HW4_superInput__3Ppsl",blue:"HW4_blue__1nVLK",title:"HW4_title__UovoT",btn_wrapper:"HW4_btn_wrapper__1l3iS",checkbox_wrap:"HW4_checkbox_wrap__1V4b2"}},,function(e,a,t){e.exports={message:"Message_message__2vZ0s",avatar:"Message_avatar__38ZFI",dialog_wrapper:"Message_dialog_wrapper__1aaRQ",title:"Message_title__1GUXw",text:"Message_text__2VMtR",time:"Message_time__1JFVW"}},function(e,a,t){e.exports={affairs_inner:"Affairs_affairs_inner__2lkyt",filter_wrap:"Affairs_filter_wrap__3bIMZ",btn:"Affairs_btn__1W-lJ"}},,function(e,a,t){e.exports={form:"Greeting_form__2Vh-W",btn:"Greeting_btn__2IhdZ",error:"Greeting_error__2qwxP"}},,,,,function(e,a,t){e.exports={affair:"Affair_affair__39Rt6",btn:"Affair_btn__3vLsI"}},function(e,a,t){e.exports={affairs:"HW2_affairs__3UyLJ"}},function(e,a,t){e.exports={errorInput:"SuperInputText_errorInput__3xDWt",error:"SuperInputText_error__2XyFP"}},function(e,a,t){e.exports={default:"SuperButton_default__2YlZ4",red:"SuperButton_red__2vfQ3"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3x3c1",spanClassName:"SuperCheckbox_spanClassName__XNRfU"}},,,,,,,function(e,a,t){e.exports={App:"App_App__2r0pE"}},function(e,a,t){e.exports={hw_wrap:"HW1_hw_wrap__2TYFt"}},,,function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),s=(t(36),t(27)),i=t.n(s),o=t(3),m=t.n(o),u=t(7),_=t(1),f=t(8),p=t.n(f);var d=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("img",{src:e.avatar,alt:"",className:p.a.avatar}),r.a.createElement("div",{className:p.a.dialog_wrapper},r.a.createElement("h2",{className:p.a.title},e.name),r.a.createElement("div",{className:p.a.text},e.message),r.a.createElement("time",{className:p.a.time},e.time)))},E=t(28),b=t.n(E),v="https://i.pinimg.com/originals/32/62/8c/32628c0b689967a8c044a35f8217d838.jpg",h="Some Name",N="some text",g="22:00";var k=function(){return r.a.createElement("div",{className:b.a.hw_wrap},r.a.createElement(d,{avatar:v,name:h,message:N,time:g}))},C=t(5),w=t(16),x=t.n(w);var y=function(e){return r.a.createElement("div",{className:x.a.affair},r.a.createElement("span",null,e.affair.name),r.a.createElement("button",{className:x.a.btn,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},j=t(9),O=t.n(j);var I=function(e){var a=e.data.map((function(a){return r.a.createElement(y,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:O.a.affairs_inner},a,r.a.createElement("div",{className:O.a.filter_wrap},r.a.createElement("button",{className:O.a.btn,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:O.a.btn,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:O.a.btn,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:O.a.btn,onClick:function(){e.setFilter("low")}},"Low")))},S=t(17),H=t.n(S),A=[{_id:1,name:"Amazon",priority:"high"},{_id:2,name:"Intel",priority:"low"},{_id:3,name:"Apple",priority:"low"},{_id:4,name:"Google",priority:"high"},{_id:5,name:"Microsoft",priority:"middle"}];var W=function(){var e=Object(n.useState)(A),a=Object(C.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(C.a)(c,2),i=s[0],o=s[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e.filter((function(e){return"low"===e.priority}))}(t,i);return r.a.createElement("section",{className:H.a.affairs},r.a.createElement("h2",{className:H.a.title},"Price of stocks"),r.a.createElement(I,{data:m,setFilter:o,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))},F=t(30),P=t(11),M=t.n(P),T=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=e.onKeyPressHandler,i=l?M.a.error:M.a.form_input;return r.a.createElement("div",{className:M.a.form},r.a.createElement("input",{value:a,onChange:t,className:i,onKeyPress:s,onBlur:t}),r.a.createElement("span",{className:M.a.error},l),r.a.createElement("button",{className:M.a.btn,onClick:n,disabled:!a},"add"),r.a.createElement("span",null,c))},U=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(C.a)(l,2),s=c[0],i=c[1],o=Object(n.useState)(""),m=Object(C.a)(o,2),u=m[0],_=m[1],f=function(){t(s),alert("Hello  ".concat(s,"!")),i("")},p=a.length;return r.a.createElement(T,{name:s,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(i(a),u&&_("")):(s&&i(""),_("name is require"))},addUser:f,error:u,totalUsers:p,onKeyPressHandler:function(e){"Enter"===e.key&&s&&(f(),i(""))}})},B=t(44);var J=function(){var e=Object(n.useState)([]),a=Object(C.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(U,{users:t,addUserCallback:function(e){var a={_id:Object(B.a)(),name:e};l([].concat(Object(F.a)(t),[a]))}}))},K=t(10),L=t(18),G=t.n(L),Z=function(e){var a=e.type,t=e.onChange,n=e.onChangeText,l=e.onKeyPress,c=e.onEnter,s=e.error,i=e.className,o=e.spanClassName,m=Object(K.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(G.a.error," ").concat(o||""),_="".concat(s?G.a.errorInput:i);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:a,onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){l&&l(e),c&&"Enter"===e.key&&c()},className:_},m)),s&&r.a.createElement("span",{className:u},s))},R=t(6),V=t.n(R),X=t(19),q=t.n(X),Q=function(e){var a=e.red,t=e.className,n=Object(K.a)(e,["red","className"]),l="".concat(a?q.a.red:q.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},Y=t(20),z=t.n(Y),D=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(K.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:z.a.spanClassName},l))};var $=function(){var e=Object(n.useState)(""),a=Object(C.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),o=Object(C.a)(i,2),m=o[0],u=o[1];return r.a.createElement("div",null,r.a.createElement("div",{className:V.a.column},r.a.createElement("h3",{className:V.a.title},"Get over here"),r.a.createElement(Z,{value:t,onChangeText:l,onEnter:s,error:c,spanClassName:V.a.testSpanError,className:V.a.superInput}),r.a.createElement(Z,{type:"password",className:V.a.blue}),r.a.createElement("div",{className:V.a.checkbox_wrap},r.a.createElement(D,{checked:m,onChangeChecked:u},"Forgot "),r.a.createElement(D,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}})),r.a.createElement("div",{className:V.a.btn_wrapper},r.a.createElement(Q,null,"default"),r.a.createElement(Q,{disabled:!0},"disabled"),r.a.createElement(Q,{red:!0,onClick:s},"delete "))))},ee=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(W,null),r.a.createElement(J,null),r.a.createElement($,null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},te=function(){return r.a.createElement("div",null)},ne=function(){return r.a.createElement("div",null)},re="/pre-junior",le="/junior",ce="/juniorplus";var se=function(){return r.a.createElement("div",null,r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",exact:!0,render:function(){return r.a.createElement(_.a,{to:re})}}),r.a.createElement(_.b,{path:re,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(_.b,{path:le,render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(_.b,{path:ce,render:function(){return r.a.createElement(te,null)}}),r.a.createElement(_.b,{render:function(){return r.a.createElement(ae,null)}})))},ie=function(){return r.a.createElement("nav",{className:m.a.menu},r.a.createElement("ul",{className:m.a.menu_list},r.a.createElement("li",{className:m.a.menu_item},r.a.createElement(u.b,{to:re,className:m.a.menu_link,activeClassName:m.a.menu_activeLink},"Pre Junior")),r.a.createElement("li",{className:m.a.menu_item},r.a.createElement(u.b,{to:le,className:m.a.menu_link,activeClassName:m.a.menu_activeLink},"Junior")),r.a.createElement("li",{className:m.a.menu_item},r.a.createElement(u.b,{to:ce,className:m.a.menu_link,activeClassName:m.a.menu_activeLink},"Junior+")),r.a.createElement("li",{className:m.a.menuBurgerInFuture})))};var oe=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(ie,null),r.a.createElement(se,null)))};var me=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.60645dec.chunk.js.map
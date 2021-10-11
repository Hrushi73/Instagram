(this["webpackJsonpreact-e-web"]=this["webpackJsonpreact-e-web"]||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a,s,c,r,i,o,l,j,d,b=n(1),u=n.n(b),h=n(72),p=n.n(h),x=n(23),m=n(31),f=Object(m.a)(a||(a=Object(x.a)(['\n:root{\n  html,body{\n    margin:0px;\n    padding:0;\n    box-sizing: border-box;\n    font-family: "Source Sans Pro", sans-serif;\n    background-color: #fafafa;\n  }\n}\n']))),O=n(17),g=n(13),v=n(7),w=n.n(v),y=n(15),N=n(6),k=n(20),C=n(21),P=n(166),S=n(167),M=n(168),A=n(161),F=n(163),R=n(169),z=n(162),I=m.b.div(s||(s=Object(x.a)(["\n  margin: 0 5%;\n"]))),E=m.b.div(c||(c=Object(x.a)(["\n  .Grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 5px;\n  }\n\n  .Post-style {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button {\n    width: 3rem;\n    border: none;\n    outline: none;\n    border-radius: 20px;\n    background-color: white;\n  }\n  .edit-icon {\n    text-align: right;\n  }\n"]))),D=m.b.div(r||(r=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 2fr);\n  grid-gap: 30px;\n\n  .Profile-Image::-webkit-file-upload-button {\n    visibility: hidden;\n  }\n\n  @media screen and (max-width: 540px) {\n    grid-template-columns: none;\n    grid-template-rows: repeat(2, 2fr);\n    justify-items: center;\n    grid-gap: 20px;\n  }\n"]))),L=m.b.div(i||(i=Object(x.a)(["\n  color: transparent;\n  transition: all 0.3s ease;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  transition: all 0.3s ease;\n\n  input {\n    display: none;\n  }\n\n  img {\n    position: absolute;\n    object-fit: cover;\n    width: 165px;\n    height: 165px;\n    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);\n    border-radius: 100px;\n    z-index: 0;\n  }\n\n  .-label {\n    cursor: pointer;\n    height: 165px;\n    width: 165px;\n  }\n\n  &:hover {\n    .-label {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: rgba(0, 0, 0, 0.8);\n      z-index: 10000;\n      color: rgb(250, 250, 250);\n      transition: background-color 0.2s ease-in-out;\n      border-radius: 100px;\n      margin-bottom: 0;\n    }\n  }\n\n  span {\n    display: inline-flex;\n    padding: 0.2em;\n    height: 2em;\n  }\n"]))),W=m.b.div(o||(o=Object(x.a)(["\n  .info-split {\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-gap: 10px;\n  }\n  @media screen and (max-width: 540px) {\n    .info-split {\n      grid-template-columns: 2fr 0.5fr;\n      grid-gap: 40px;\n    }\n  }\n\n  .line {\n    display: none;\n  }\n"]))),H=m.b.div(l||(l=Object(x.a)(['\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  grid-gap: 20px;\n  color: #a7a6ba;\n\n  button:hover {\n    color: black;\n  }\n\n  .hover-underline-animation {\n    position: relative;\n  }\n\n  .hover-underline-animation:after {\n    content: "";\n    position: absolute;\n    width: 235%;\n    transform: scaleX(0);\n    height: 10px;\n    bottom: -16px;\n    left: -25px;\n    background-color: black;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n    transform-origin: bottom right;\n    transition: transform 0.25s ease-out;\n  }\n\n  .hover-underline-animation:hover:after {\n    transform: scaleX(1);\n    transform-origin: bottom left;\n  }\n']))),Z=n(16),_=n.n(Z),$=m.b.div(j||(j=Object(x.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  width: 100%;\n  box-shadow: 0px 5px 0px 0px #ff007b;\n  -webkit-box-shadow: 0px 5px 0px 0px #ff007b;\n  -moz-box-shadow: 0px 5px 0px 0px #ff007b;\n  align-items: center;\n\n  h2 {\n    grid-column: 2/3;\n  }\n"]))),q=m.b.div(d||(d=Object(x.a)(["\n  cursor: pointer;\n  grid-column: 4/5;\n\n  ul {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-column-gap: 20px;\n    margin: 10px 0;\n    align-items: center;\n  }\n\n  li {\n    list-style: none;\n    font-size: var(--fontBig);\n  }\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  a:hover {\n    font-weight: bolder;\n  }\n\n  /* media query */\n  @media screen and (min-width: 540px) {\n    .Home-icon,\n    .new-friend-icon,\n    .profile-icon,\n    .search-icon {\n      display: none;\n    }\n    .post-icon {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 540px) {\n    .Home,\n    .post,\n    .new-friend,\n    .profile,\n    .search {\n      display: none;\n    }\n\n    ul {\n      grid-template-columns: repeat(auto, 1fr);\n      grid-column-gap: 12px;\n    }\n\n    .post-icon {\n      position: fixed;\n      z-index: 1;\n      bottom: 30px;\n      right: 30px;\n      background-color: #03bfff;\n      border-radius: 50%;\n      padding: 10px 15px;\n    }\n  }\n"]))),U=n(0),B=function(){return Object(U.jsxs)($,{children:[Object(U.jsx)("h2",{children:"FrienZone"}),Object(U.jsxs)(q,{children:[Object(U.jsxs)("ul",{children:[Object(U.jsx)(O.b,{to:"/home",children:Object(U.jsx)("a",{href:"#",className:"Home",children:Object(U.jsx)("div",{children:Object(U.jsx)("li",{children:"Home"})})})}),Object(U.jsx)(O.b,{to:"/post",children:Object(U.jsx)("a",{href:"##",className:"post",children:Object(U.jsx)("li",{children:"Post"})})}),Object(U.jsx)(O.b,{to:"/request",children:Object(U.jsx)("a",{href:"###",className:"new-friend",children:Object(U.jsx)("li",{children:"Requests"})})}),Object(U.jsx)(O.b,{to:"/profile",children:Object(U.jsx)("a",{href:"#",className:"profile",children:Object(U.jsx)("li",{children:"Profile"})})}),Object(U.jsx)(O.b,{to:"/search",children:Object(U.jsx)("a",{href:"#",className:"search",children:Object(U.jsx)("li",{children:"Search"})})}),Object(U.jsx)(O.b,{to:"/home",children:Object(U.jsx)("div",{children:Object(U.jsx)("li",{className:"Home-icon",children:Object(U.jsx)(k.a,{icon:C.d})})})}),Object(U.jsx)(O.b,{to:"/request",children:Object(U.jsx)("li",{className:"new-friend-icon",children:Object(U.jsx)(k.a,{icon:C.l})})}),Object(U.jsx)(O.b,{to:"/search",children:Object(U.jsx)("li",{className:"search-icon",children:Object(U.jsx)(k.a,{icon:C.g})})}),Object(U.jsx)(O.b,{to:"/profile",children:Object(U.jsx)("li",{className:"profile-icon",children:Object(U.jsx)(k.a,{icon:C.j})})})]}),Object(U.jsx)(O.b,{to:"/post",children:Object(U.jsx)("li",{className:"post-icon",children:Object(U.jsx)(k.a,{icon:C.f})})})]})]})},T=function(){var e=Object(b.useState)({followers:[],following:[]}),t=Object(N.a)(e,2),n=t[0],a=t[1],s=Object(b.useState)([]),c=Object(N.a)(s,2),r=c[0],i=c[1],o=Object(b.useState)("posts"),l=Object(N.a)(o,2),j=l[0],d=l[1],u=Object(g.f)();function h(){return(h=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://localhost:3001/Profile");case 2:t=e.sent,a(t.data),i(t.data.posts);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(b.useEffect)((function(){try{!function(){h.apply(this,arguments)}()}catch(e){u.push("/Login")}}),[]);var p=function(){var e=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t.target.files[0]),(n=new FormData).append("file",t.target.files[0]),e.next=6,_.a.post("http://localhost:3001/Profile",n);case 6:500!==e.sent.status&&window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(B,{}),Object(U.jsx)(I,{children:Object(U.jsxs)(E,{children:[Object(U.jsxs)(D,{children:[Object(U.jsxs)(L,{children:[Object(U.jsxs)("label",{className:"-label",for:"file",children:[Object(U.jsx)("span",{className:"glyphicon glyphicon-camera",children:" "}),Object(U.jsx)("span",{children:" Change Image "})]}),Object(U.jsx)("input",{id:"file",type:"file",onChange:p}),Object(U.jsx)("img",{src:"http://localhost:3001/ProfileImages/".concat(n.profile),alt:"profile",id:"output",width:"200"})]}),Object(U.jsx)(W,{children:Object(U.jsxs)("div",{children:[Object(U.jsxs)("h1",{children:[" ",n.userName," "]}),Object(U.jsx)("hr",{style:{width:"20rem"},className:"line"}),Object(U.jsxs)("div",{className:"info-split",children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("h5",{children:" posts "})," ",Object(U.jsx)("h5",{children:" Followers "})," ",Object(U.jsx)("h5",{children:" Following "}),Object(U.jsx)("br",{})]}),Object(U.jsxs)("div",{children:[Object(U.jsxs)("h5",{children:[" ",r.length," "]})," ",Object(U.jsxs)("h5",{children:[" ",n.followers.length," "]})," ",Object(U.jsxs)("h5",{children:[n.following.length," "]})]})]})]})})]}),Object(U.jsx)("hr",{}),Object(U.jsxs)(H,{children:[Object(U.jsx)("button",{title:"Posts",onClick:function(e){try{e.preventDefault(),d("posts")}catch(t){console.log(t)}},className:"hover-underline-animation",children:Object(U.jsx)(k.a,{icon:C.e,size:"3x"})}),Object(U.jsx)("button",{title:"Followers",onClick:function(e){try{e.preventDefault(),d("followers")}catch(t){console.log(t)}},className:"hover-underline-animation",children:Object(U.jsx)(k.a,{icon:C.i,size:"3x"})}),Object(U.jsx)("button",{title:"Following",onClick:function(e){try{e.preventDefault(),d("following")}catch(t){console.log(t)}},className:"hover-underline-animation",children:Object(U.jsx)(k.a,{icon:C.k,size:"3x"})})]}),Object(U.jsx)("hr",{className:"hover-underline-animation"}),Object(U.jsxs)("div",{children:["posts"===j&&Object(U.jsx)("div",{className:"Grid",children:r.map((function(e,t){return Object(U.jsx)("div",{id:t,children:Object(U.jsx)("img",{className:"Post-style",src:"http://localhost:3001/inProcessImages/".concat(e.image),alt:"posts"})})}))}),"followers"===j&&Object(U.jsx)(P.a,{maxWidth:"sm",children:Object(U.jsx)(S.a,{sx:{display:"flex",justifyContent:"center",borderRadius:"10px",margin:"0",height:"50vh",boxSizing:"border-box",overflow:"auto"},children:Object(U.jsxs)(M.a,{sx:{width:"100%",maxWidth:360,borderRadius:"10px",boxSizing:"border-box"},children:[Object(U.jsx)(A.a,{sx:{maxWidth:360,borderRadius:"10px",margin:"10px 0"},children:Object(U.jsx)(F.a,{primary:"Followers"})}),n.followers.map((function(e,t){return Object(U.jsxs)(A.a,{id:t,sx:{maxWidth:360,backgroundColor:"#AAAAAA",borderRadius:"10px",margin:"10px 0"},children:[Object(U.jsx)(R.a,{children:Object(U.jsx)(z.a,{alt:"Remy Sharp",src:"http://localhost:3001/ProfileImages/".concat(e.profile)})}),Object(U.jsx)(F.a,{primary:e.userName,secondary:"followers : ".concat(e.followers.length)})]})}))]})})}),"following"===j&&Object(U.jsx)(P.a,{maxWidth:"sm",children:Object(U.jsx)(S.a,{sx:{display:"flex",justifyContent:"center",borderRadius:"10px",margin:"0",height:"50vh",boxSizing:"border-box",overflow:"auto"},children:Object(U.jsxs)(M.a,{sx:{width:"100%",maxWidth:360,borderRadius:"10px",boxSizing:"border-box"},children:[Object(U.jsx)(A.a,{sx:{maxWidth:360,borderRadius:"10px",margin:"10px 0"},children:Object(U.jsx)(F.a,{primary:"Following"})}),n.following.map((function(e,t){return Object(U.jsxs)(A.a,{id:t,sx:{maxWidth:360,backgroundColor:"#AAAAAA",borderRadius:"10px",margin:"10px 0"},children:[Object(U.jsx)(R.a,{children:Object(U.jsx)(z.a,{alt:"Remy Sharp",src:"http://localhost:3001/ProfileImages/".concat(e.profile)})}),Object(U.jsx)(F.a,{primary:e.userName,secondary:"followers : ".concat(e.followers.length)})]})}))]})})})]})]})})]})},G=n(9),J=n(12),X=(n(120),n(16)),Q=function(){var e=Object(g.f)(),t=Object(b.useState)({userName:"",email:"",password:"",confPassword:""}),n=Object(N.a)(t,2),a=n[0],s=n[1],c=Object(b.useState)({userNameMessage:"",emailMessage:"",passwordMessage:"",confPasswordMessage:""}),r=Object(N.a)(c,2),i=r[0],o=r[1],l=function(e){return""!==e},j=function(e){return e=e.trim(),l(e)?!!function(e){return new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})").test(e)}(e)||(o((function(e){return Object(J.a)(Object(J.a)({},e),{},{passwordMessage:"Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"})})),!1):(o((function(e){return Object(J.a)(Object(J.a)({},e),{},{passwordMessage:"Password cannot be blank."})})),!1)},d=function(){var t=Object(y.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o((function(){return{userNameMessage:"",emailMessage:"",passwordMessage:"",confPasswordMessage:""}})),n.preventDefault(),u=(u=a.userName).trim(),!((l(u)?(r=u.length,i=3,d=25,r>=i&&r<=d||(o((function(e){return Object(J.a)(Object(J.a)({},e),{},{userNameMessage:"Username must be between ".concat(3," and ").concat(25," characters.")})})),0)):(o((function(e){return Object(J.a)(Object(J.a)({},e),{},{userNameMessage:"Username is required"})})),0))&&(b=a.email,b=b.trim(),l(b)?function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(b)||(o((function(e){return Object(J.a)(Object(J.a)({},e),{},{emailMessage:"Email is not valid."})})),0):(o((function(e){return Object(J.a)(Object(J.a)({},e),{},{emailMessage:"Email cannot be blank"})})),0))&&j(a.password)&&(s=a.password,c=a.confPassword,c=c.trim(),s=s.trim(),l(c)?s===c||(o((function(e){return Object(J.a)(Object(J.a)({},e),{},{confPasswordMessage:"The password does not match"})})),0):(o((function(e){return Object(J.a)(Object(J.a)({},e),{},{confPasswordMessage:"Please enter the password again"})})),0)))){t.next=8;break}return t.next=6,X.post("http://localhost:3001/signup",{userName:a.userName,email:a.email,password:a.password});case 6:200===t.sent.status&&e.push("/Login");case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}var s,c,r,i,d,b,u}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(J.a)(Object(J.a)({},e),{},Object(G.a)({},n,a))}))};return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)("div",{className:"outerContainer atcenter",children:Object(U.jsx)("div",{children:Object(U.jsxs)("form",{method:"post",children:[Object(U.jsx)("h1",{style:{textAlign:"center"},children:"FrenZone"}),Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{type:"text",id:"userName",name:"userName",value:a.userName,placeholder:"username",autoCorrect:"false",autoComplete:"off",onChange:u}),Object(U.jsx)("br",{}),Object(U.jsx)("small",{children:i.userNameMessage})]}),Object(U.jsx)("br",{}),Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{type:"text",id:"email",name:"email",value:a.email,placeholder:"email address",autoCorrect:"false",autoComplete:"off",onChange:u}),Object(U.jsx)("br",{}),Object(U.jsx)("small",{children:i.emailMessage})]}),Object(U.jsx)("br",{}),Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{type:"password",id:"password",name:"password",value:a.password,placeholder:"Password",autoCorrect:"false",autoComplete:"off",onChange:u}),Object(U.jsx)("br",{}),Object(U.jsx)("small",{children:i.passwordMessage})]}),Object(U.jsx)("br",{}),Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{type:"password",id:"confPassword",name:"confPassword",value:a.confPassword,placeholder:"Confirm Password",autoCorrect:"false",autoComplete:"off",onChange:u}),Object(U.jsx)("br",{}),Object(U.jsx)("small",{children:i.confPasswordMessage})]}),Object(U.jsx)("br",{}),Object(U.jsx)("button",{type:"submit",className:"submitbutton",onClick:d,children:"Sign Up"})]})})})})},K=(n(121),n(16));K.defaults.withCredentials=!0;var V=function(){var e=Object(g.f)(),t=Object(b.useState)(""),n=Object(N.a)(t,2),a=n[0],s=n[1],c=Object(b.useState)(""),r=Object(N.a)(c,2),i=r[0],o=r[1],l=Object(b.useState)({emailMessage:"",passwordMessage:""}),j=Object(N.a)(l,2),d=j[0],u=j[1],h=Object(b.useState)(""),p=Object(N.a)(h,2),x=p[0],m=p[1],f=function(e){return""!==e},v=function(e){return e=e.trim(),f(e)?!!function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(e)||(u((function(e){return Object(J.a)(Object(J.a)({},e),{},{emailMessage:"Email is not valid."})})),!1):(u((function(e){return Object(J.a)(Object(J.a)({},e),{},{emailMessage:"Email cannot be blank"})})),!1)},k=function(e){return e=e.trim(),f(e)?!!function(e){return new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})").test(e)}(e)||(u((function(e){return Object(J.a)(Object(J.a)({},e),{},{passwordMessage:"Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"})})),!1):(u((function(e){return Object(J.a)(Object(J.a)({},e),{},{passwordMessage:"Password cannot be blank."})})),!1)},C=function(){var t=Object(y.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n.preventDefault(),u((function(){return{emailMessage:"",passwordMessage:""}})),!v(a)||!k(i)){t.next=8;break}return t.next=6,K.post("http://localhost:3001/Login",{email:a,password:i});case 6:200===t.sent.status&&(m(""),e.push("/home"));case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),m("Either Email or password didn't match"),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("div",{className:"background"}),Object(U.jsxs)("div",{className:"outerContainer atcenter",children:[Object(U.jsx)("div",{children:Object(U.jsxs)("form",{children:[Object(U.jsx)("h1",{style:{textAlign:"center"},children:"FrenZone"}),Object(U.jsx)("small",{style:{color:"red"},children:x}),Object(U.jsx)("input",{type:"text",id:"username",name:"username",value:a,placeholder:"Email address",autoCorrect:"false",autoComplete:"false",onChange:function(e){s(e.target.value)}}),Object(U.jsx)("br",{}),Object(U.jsx)("small",{children:d.emailMessage}),Object(U.jsx)("input",{type:"password",id:"password",name:"password",value:i,placeholder:"Password",autoCorrect:"false",autoComplete:"false",onChange:function(e){o(e.target.value)}}),Object(U.jsx)("br",{}),Object(U.jsx)("small",{children:d.passwordMessage}),Object(U.jsx)("button",{type:"submit",className:"submitbutton",onClick:C,children:"Login"})]})}),Object(U.jsx)("div",{children:Object(U.jsxs)("h4",{children:["Don't have account?"," ",Object(U.jsx)(O.b,{to:"/signup",children:Object(U.jsx)("a",{href:"",children:"Sign Up"})})]})})]})]})},Y=(n(122),n(123),function(e){var t=e.key,n=e.post,a=n.image,s=n.description,c=n.user,r=Object(b.useState)(""),i=Object(N.a)(r,2),o=i[0],l=i[1],j=Object(b.useState)("#adadad"),d=Object(N.a)(j,2),u=d[0],h=d[1],p=Object(g.f)(),x=function(){var e=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("/comment",{comment:o,postid:n._id});case 2:500!==e.sent.status&&l("");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(y.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="#adadad"===u?1:-1,e.next=3,_.a.post("like",{value:t,postid:n._id});case 3:500!==(a=e.sent).status?h("#ff3377"):console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.jsx)(O.b,{to:{pathname:"/allcomments/".concat(n._id)}});case 2:p.push("/allcomments/".concat(n._id));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(U.jsx)("article",{id:t,children:Object(U.jsxs)("div",{className:"article-border",children:[Object(U.jsxs)("div",{className:"post-top",children:[Object(U.jsxs)("header",{children:[Object(U.jsx)("img",{className:"profile-image",src:"http://localhost:3001/ProfileImages/".concat(c.profile),alt:"Profile"}),Object(U.jsx)("div",{className:"username-info",children:Object(U.jsx)("div",{className:"username",children:c.userName})})]}),Object(U.jsx)("div",{className:"button-container",children:Object(U.jsx)("button",{children:Object(U.jsx)("h1",{children:"..."})})})]}),Object(U.jsx)("div",{className:"post-middle",children:Object(U.jsx)("div",{children:Object(U.jsx)("img",{className:"post-image",src:"http://localhost:3001/inProcessImages/".concat(a),alt:"post"})})}),Object(U.jsxs)("div",{className:"post-bottom",children:[Object(U.jsxs)("div",{className:"like-share-row",children:[Object(U.jsx)("div",{children:Object(U.jsx)("button",{title:"like",style:{color:u},onClick:m,children:Object(U.jsx)(k.a,{icon:C.c})})}),Object(U.jsx)("div",{children:Object(U.jsx)("button",{title:"See all comments",onClick:f,children:Object(U.jsx)(k.a,{icon:C.b})})})]}),Object(U.jsx)("div",{className:"description",children:s}),Object(U.jsxs)("div",{className:"comment-bar-container",children:[Object(U.jsx)("div",{className:"left-button",children:Object(U.jsx)("button",{title:"emoji keyboard",children:Object(U.jsx)(k.a,{style:{color:"FFAA00"},icon:C.h})})}),Object(U.jsx)("div",{className:"text-wrapper",children:Object(U.jsx)("input",{type:"text",value:o,onChange:function(e){l(e.target.value)}})}),Object(U.jsx)("div",{children:Object(U.jsx)("button",{className:"right-button",title:"post",onClick:""!==o?x:{},children:Object(U.jsx)(k.a,{style:{color:"#1060FF"},icon:C.f})})})]})]})]})})});n(124),n(125);var ee=function(e){var t=e.key,n=e.suggestion,a=e.fetchSuggestions,s=function(){var e=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("http://localhost:3001/following",{_id:n._id,userName:n.userName});case 3:a(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Some error happened"+e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(U.jsxs)("div",{id:t,className:"main-container",children:[Object(U.jsxs)("div",{className:"left-container",children:[Object(U.jsx)("img",{className:"profile-image",src:"http://localhost:3001/ProfileImages/".concat(n.profile),alt:"Profile"}),Object(U.jsx)("div",{children:n.userName})]}),Object(U.jsx)("div",{children:Object(U.jsx)("button",{className:"follow-button",onClick:s,children:"Follow"})})]})},te=function(e){var t=e.fetchPosts,n=Object(b.useState)([]),a=Object(N.a)(n,2),s=a[0],c=a[1];function r(){return i.apply(this,arguments)}function i(){return(i=Object(y.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://localhost:3001/suggestions");case 2:n=e.sent,c(n.data),t();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.useEffect)((function(){try{r()}catch(e){console.log("some error happened")}}),[]),Object(U.jsxs)("div",{className:"suggestion",children:[Object(U.jsxs)("div",{className:"heading",children:[Object(U.jsx)("div",{className:"heading-left",children:Object(U.jsx)("h3",{children:"Suggestions for you"})}),Object(U.jsx)("div",{className:"heading-right",children:Object(U.jsx)("button",{children:"see all"})})]}),Object(U.jsx)("div",{className:"follow-container",children:s.map((function(e,t){return Object(U.jsx)(ee,{suggestion:e,fetchSuggestions:r},t)}))})]})},ne=function(){var e=Object(b.useState)({}),t=Object(N.a)(e,2),n=(t[0],t[1]),a=Object(b.useState)([]),s=Object(N.a)(a,2),c=s[0],r=s[1],i=Object(g.f)();function o(){return l.apply(this,arguments)}function l(){return(l=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://localhost:3001/fetchpost");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://localhost:3001/Profile");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.useEffect)((function(){try{!function(){j.apply(this,arguments)}(),o()}catch(e){i.push("/Login")}}),[]),Object(U.jsxs)("div",{children:[Object(U.jsx)(B,{}),Object(U.jsxs)("div",{className:"feed-container",children:[Object(U.jsx)("div",{children:c.map((function(e,t){return Object(U.jsx)(Y,{post:e},t)}))}),Object(U.jsx)("div",{className:"suggestions-container",children:Object(U.jsx)(te,{fetchPosts:o})})]})]})},ae=n(79),se=n.n(ae),ce=(n(137),n(138),function(){var e=Object(b.useState)(""),t=Object(N.a)(e,2),n=t[0],a=t[1],s=Object(b.useState)(null),c=Object(N.a)(s,2),r=c[0],i=c[1],o=Object(b.useState)({}),l=Object(N.a)(o,2),j=(l[0],l[1]),d=Object(b.useState)(""),u=Object(N.a)(d,2),h=u[0],p=u[1],x=Object(b.useState)(""),m=Object(N.a)(x,2),f=m[0],O=m[1],v=Object(g.f)(),P=Object(b.useRef)(null),S=Object(b.useRef)(null),M=Object(b.useState)({unit:"px",width:500,aspect:1}),A=Object(N.a)(M,2),F=A[0],R=A[1],z=Object(b.useRef)(null);Object(b.useEffect)((function(){try{var e=function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://localhost:3001/Profile");case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){v.push("/Login")}}),[]);var I=function(){var e=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(P.current&&t.width&&t.height)){e.next=4;break}return e.next=3,E(P.current,t,"newFile.jpeg");case 3:z.current=e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e,t,n){if(S.current&&P.current){var a=S.current,s=e.naturalWidth/e.width,c=e.naturalHeight/e.height,r=a.getContext("2d"),i=window.devicePixelRatio;return a.width=t.width*i,a.height=t.height*i,r.setTransform(i,0,0,i,0,0),r.imageSmoothingQuality="high",r.drawImage(e,t.x*s,t.y*c,t.width*s,t.height*c,0,0,t.width,t.height),new Promise((function(e,t){a.toBlob((function(t){t?(t.name=n,e(t)):console.error("Canvas is empty")}),"image/jpeg")}))}};return Object(U.jsx)("div",{children:Object(U.jsxs)("form",{method:"post",enctype:"multipart/form-data",children:[!r&&Object(U.jsxs)("div",{className:"input-container",children:[Object(U.jsx)("input",{id:"profile-pic",onChange:function(e){if(e.target.files&&e.target.files.length>0){a(e.target.files[0].name);var t=new FileReader;t.addEventListener("load",(function(){return i(t.result)})),t.readAsDataURL(e.target.files[0]),p("Crop")}},type:"file",hidden:"hidden"}),Object(U.jsx)("label",{for:"profile-pic",children:"Choose File"})]}),r&&Object(U.jsx)("div",{children:Object(U.jsxs)("div",{className:"boss-container",children:[Object(U.jsxs)("div",{className:"top-header",children:[Object(U.jsx)("div",{className:"left-button",children:Object(U.jsx)("button",{className:"back-button",onClick:function(e){e.preventDefault(),"Crop"===h?i(null):"Compose"===h&&p("Crop")},children:Object(U.jsx)(k.a,{icon:C.a,size:"4x"})})}),Object(U.jsx)("div",{className:"middle-header",children:Object(U.jsx)("h1",{children:h})}),Object(U.jsx)("div",{className:"right-button",children:Object(U.jsx)("button",{className:"close-button",onClick:function(e){e.preventDefault(),i(null)},children:Object(U.jsx)(k.a,{icon:C.m,size:"4x"})})})]}),Object(U.jsxs)("div",{className:"body-container",children:[Object(U.jsx)("div",{className:"left-body",children:Object(U.jsx)("div",{className:"crop-container",children:Object(U.jsx)(se.a,{src:r,onImageLoaded:function(e){P.current=e},crop:F,onChange:function(e){return R(e)},onComplete:function(e){I(e)}})})}),Object(U.jsxs)("div",{className:"right-body",children:["Crop"===h&&Object(U.jsxs)("div",{children:[Object(U.jsx)("div",{className:"cropped-image-container",children:Object(U.jsx)("canvas",{ref:S})}),Object(U.jsx)("div",{className:"next-button-container",children:Object(U.jsx)("button",{className:"next-button",onClick:function(e){e.preventDefault(),p("Compose")},children:Object(U.jsx)("h3",{children:"Next"})})})]}),"Compose"===h&&Object(U.jsxs)("div",{children:[Object(U.jsx)("div",{className:"text-area-container",children:Object(U.jsx)("textarea",{id:"subject",name:"subject",value:f,placeholder:"Write a caption",onChange:function(e){e.preventDefault(),O(e.target.value)},children:f})}),Object(U.jsx)("div",{className:"next-button-container",children:Object(U.jsx)("button",{className:"next-button",onClick:function(e){try{e.preventDefault();var t=new File([z.current],n),a=new FormData;a.append("file",t),a.append("caption",f),console.log(a),500!==_.a.post("http://localhost:3001/selectImage",a).status&&v.push("/Home")}catch(s){console.log(s)}},children:Object(U.jsx)("h3",{children:"Share"})})})]})]})]})]})})]})})});var re=function(){var e=Object(b.useState)({}),t=Object(N.a)(e,2),n=(t[0],t[1]),a=Object(g.f)();return Object(b.useEffect)((function(){try{var e=function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://localhost:3001/Profile");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){a.push("/Login")}}),[]),Object(U.jsxs)("div",{children:[Object(U.jsx)(B,{}),Object(U.jsx)("div",{children:Object(U.jsx)(ce,{})})]})},ie=n(170),oe=n(165),le=n(171),je=function(){var e=Object(g.g)().idOfPost,t=Object(b.useState)({}),n=Object(N.a)(t,2),a=n[0],s=n[1],c=Object(b.useState)([]),r=Object(N.a)(c,2),i=r[0],o=r[1],l=Object(b.useState)({}),j=Object(N.a)(l,2),d=j[0],h=j[1],p=function(){var t=Object(y.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.post("/getComments",{_id:e});case 2:n=t.sent,s(n.data),h(n.data.user),o(n.data.Comments);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.useEffect)((function(){try{p()}catch(e){History.push("/Login")}}),[]),Object(U.jsxs)(u.a.Fragment,{children:[Object(U.jsx)(ie.a,{}),Object(U.jsx)(P.a,{sx:{padding:"1rem 0",bgcolor:"#CCF2F4",borderRadius:"10px",marginTop:"20px"},children:Object(U.jsxs)(oe.a,{container:!0,spacing:2,children:[Object(U.jsx)(oe.a,{item:!0,xs:0,lg:6,children:Object(U.jsxs)(S.a,{sx:{display:{xs:"none",md:"none",lg:"block"}},children:[Object(U.jsxs)(A.a,{alignItems:"flex-start",sx:{bgcolor:"#CCF2F4"},children:[Object(U.jsx)(R.a,{children:Object(U.jsx)(z.a,{alt:"Remy Sharp",src:"http://localhost:3001/ProfileImages/default-avatar.jpg}"})}),Object(U.jsx)(F.a,{primary:d&&d.userName,secondary:Object(U.jsx)(u.a.Fragment,{children:a.description})})]}),Object(U.jsx)("img",{className:"post-image",src:"http://localhost:3001/inProcessImages/".concat(a.image),alt:"post"})]})}),Object(U.jsx)(oe.a,{item:!0,xs:12,lg:6,children:Object(U.jsx)(S.a,{sx:{maxHeight:"80vh",borderRadius:"10px",bgcolor:"#AAAAAA",overflow:"auto"},children:i.map((function(e,t){return Object(U.jsxs)(M.a,{id:t,children:[Object(U.jsxs)(A.a,{alignItems:"flex-start",children:[Object(U.jsx)(R.a,{children:Object(U.jsx)(z.a,{alt:"Remy Sharp",src:"http://localhost:3001/ProfileImages/".concat(e.user.profile)})}),Object(U.jsx)(F.a,{primary:e.user.userName,secondary:Object(U.jsx)(u.a.Fragment,{children:e.comment})})]}),Object(U.jsx)(le.a,{variant:"inset",component:"li"})]})}))})})]})})]})},de=function(){return Object(U.jsx)(O.a,{children:Object(U.jsxs)(g.c,{children:[Object(U.jsx)(g.a,{path:"/signup",children:Object(U.jsx)(Q,{})}),Object(U.jsx)(g.a,{path:"/login",children:Object(U.jsx)(V,{})}),Object(U.jsx)(g.a,{path:"/home",children:Object(U.jsx)(ne,{})}),Object(U.jsx)(g.a,{path:"/profile",children:Object(U.jsx)(T,{})}),Object(U.jsx)(g.a,{path:"/post",children:Object(U.jsx)(re,{})}),Object(U.jsx)(g.a,{path:"/allComments/:idOfPost",children:Object(U.jsx)(je,{})})]})})};p.a.render(Object(U.jsxs)(u.a.StrictMode,{children:[Object(U.jsx)(f,{}),Object(U.jsx)(de,{className:"App"})]}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.b450c49d.chunk.js.map
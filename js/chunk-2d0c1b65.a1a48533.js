(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1b65"],{"46e2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header",staticStyle:{"min-height":"600px","background-image":"url(img/theme/profile-cover.jpg)","background-size":"cover","background-position":"center top"}},[e("b-container",{attrs:{fluid:""}},[e("span",{staticClass:"mask bg-gradient-success opacity-8"}),e("b-container",{staticClass:"d-flex align-items-center",attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{lg:"7",md:"10"}},[e("h1",{staticClass:"display-2 text-white"},[t._v("Hello Rajesh")]),e("p",{staticClass:"text-white mt-0 mb-5"},[t._v("This is your profile page. You can see the progress you've made with your\n              work and manage your projects or assigned tasks")]),e("a",{staticClass:"btn btn-info",attrs:{href:"#!"}},[t._v("Edit profile")])])],1)],1)],1)],1),e("b-container",{staticClass:"mt--6",attrs:{fluid:""}},[e("b-row",[e("b-col",{staticClass:"order-xl-2 mb-5",attrs:{xl:"4"}},[e("user-card")],1),e("b-col",{staticClass:"order-xl-1",attrs:{xl:"8"}},[e("edit-profile-form")],1)],1)],1)],1)},l=[],r=function(){var t=this,e=t._self._c;return e("card",[e("b-row",{attrs:{slot:"header","align-v":"center"},slot:"header"},[e("b-col",{attrs:{cols:"8"}},[e("h3",{staticClass:"mb-0"},[t._v("Edit Profile")])]),e("b-col",{staticClass:"text-right",attrs:{cols:"4"}},[e("a",{staticClass:"btn btn-sm btn-primary",attrs:{href:"#!"}},[t._v("Settings")])])],1),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateProfile.apply(null,arguments)}}},[e("h6",{staticClass:"heading-small text-muted mb-4"},[t._v("User information")]),e("div",{staticClass:"pl-lg-4"},[e("b-row",[e("b-col",{attrs:{lg:"6"}},[e("base-input",{attrs:{type:"text",label:"Username",placeholder:"Username"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),e("b-col",{attrs:{lg:"6"}},[e("base-input",{attrs:{type:"email",label:"Email address",placeholder:"arjun@domain.com"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)],1),e("b-row",[e("b-col",{attrs:{lg:"6"}},[e("base-input",{attrs:{type:"text",label:"First Name",placeholder:"First Name"},model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}})],1),e("b-col",{attrs:{lg:"6"}},[e("base-input",{attrs:{type:"text",label:"Last Name",placeholder:"Last Name"},model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1)],1)],1),e("hr",{staticClass:"my-4"}),e("h6",{staticClass:"heading-small text-muted mb-4"},[t._v("Contact information")]),e("div",{staticClass:"pl-lg-4"},[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("base-input",{attrs:{type:"text",label:"Address",placeholder:"Home Address"},model:{value:t.user.address,callback:function(e){t.$set(t.user,"address",e)},expression:"user.address"}})],1)],1),e("b-row",[e("b-col",{attrs:{lg:"4"}},[e("base-input",{attrs:{type:"text",label:"City",placeholder:"City"},model:{value:t.user.city,callback:function(e){t.$set(t.user,"city",e)},expression:"user.city"}})],1),e("b-col",{attrs:{lg:"4"}},[e("base-input",{attrs:{type:"text",label:"Country",placeholder:"Country"},model:{value:t.user.country,callback:function(e){t.$set(t.user,"country",e)},expression:"user.country"}})],1),e("b-col",{attrs:{lg:"4"}},[e("base-input",{attrs:{label:"Postal Code",placeholder:"PIN Code"},model:{value:t.user.postalCode,callback:function(e){t.$set(t.user,"postalCode",e)},expression:"user.postalCode"}})],1)],1)],1),e("hr",{staticClass:"my-4"}),e("h6",{staticClass:"heading-small text-muted mb-4"},[t._v("About me")]),e("div",{staticClass:"pl-lg-4"},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"About Me","label-class":"form-control-label","label-for":"about-form-textaria"}},[e("b-form-textarea",{attrs:{rows:"4",id:"about-form-textaria",placeholder:"A few words about you ..."},model:{value:t.user.aboutMe,callback:function(e){t.$set(t.user,"aboutMe",e)},expression:"user.aboutMe"}})],1)],1)])],1)},i=[],o={data:function(){return{user:{company:"Tech Solutions Pvt. Ltd.",username:"arjun24",email:"arjun@domain.com",firstName:"Arjun",lastName:"Singh",address:"123 MG Road, Block 5, Sector 17",city:"Bengaluru",country:"India",postalCode:"560001",aboutMe:"Tech enthusiast, love cricket, and always up for new challenges in software development."}}},methods:{updateProfile:function(){alert("Your data: "+JSON.stringify(this.user))}}},n=o,c=s("2877"),u=Object(c["a"])(n,r,i,!1,null,null,null),d=u.exports,b=function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"card-profile",attrs:{"no-body":"",alt:"Image placeholder","img-top":""}},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{staticClass:"order-lg-2",attrs:{lg:"3"}},[e("div",{staticClass:"card-profile-image"},[e("a",{attrs:{href:"#"}},[e("b-img",{attrs:{src:"img/theme/team8.png",rounded:"circle"}})],1)])])],1),e("b-card-header",{staticClass:"text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"},[e("div",{staticClass:"d-flex justify-content-between"},[e("a",{staticClass:"btn btn-sm btn-info mr-4",attrs:{href:"#"}},[t._v("Connect")]),e("a",{staticClass:"btn btn-sm btn-default float-right",attrs:{href:"#"}},[t._v("Message")])])]),e("b-card-body",{staticClass:"pt-0"},[e("b-row",[e("b-col",[e("div",{staticClass:"card-profile-stats d-flex justify-content-center mt-md-5"},[e("div",[e("span",{staticClass:"heading"},[t._v("150")]),e("span",{staticClass:"description"},[t._v("Friends")])]),e("div",[e("span",{staticClass:"heading"},[t._v("50")]),e("span",{staticClass:"description"},[t._v("Photos")])]),e("div",[e("span",{staticClass:"heading"},[t._v("200")]),e("span",{staticClass:"description"},[t._v("Comments")])])])])],1),e("div",{staticClass:"text-center"},[e("h5",{staticClass:"h3"},[t._v("\n        Rajesh Kumar"),e("span",{staticClass:"font-weight-light"},[t._v(", 15")])]),e("div",{staticClass:"h5 font-weight-300"},[e("i",{staticClass:"ni location_pin mr-2"}),t._v("New Delhi, India\n      ")]),e("div",[e("i",{staticClass:"ni education_hat mr-2"}),t._v("Navodya Vidyalaya\n      ")]),e("hr",{staticClass:"my-4"}),e("p",[t._v("Rajesh is passionate about solving real-world problems with technology, having led several successful projects in AI and software development.")]),e("a",{attrs:{href:"#"}},[t._v("Show more")])])],1)],1)},m=[],p={},f=p,h=Object(c["a"])(f,b,m,!1,null,null,null),v=h.exports,C={components:{EditProfileForm:d,UserCard:v}},g=C,y=Object(c["a"])(g,a,l,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d0c1b65.a1a48533.js.map
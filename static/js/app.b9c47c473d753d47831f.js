webpackJsonp([10],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o=n("Dd8w"),a=n.n(o),s=n("p+dL"),i="/auth/register",u="/auth/login",c="/auth/logout",l="/auth",d={register:function(e){var t=e.username,n=e.password;return Object(s.a)(i,"POST",{username:t,password:n})},login:function(e){var t=e.username,n=e.password;return Object(s.a)(u,"POST",{username:t,password:n})},logout:function(){return localStorage.removeItem("token"),Object(s.a)(c)},getInfo:function(){return Object(s.a)(l)}},f=n("NYxO");window.auth=d;var h={data:function(){return{}},computed:a()({},Object(f.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:a()({},Object(f.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}})},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{login:e.isLogin,"no-login":!e.isLogin}},[e.isLogin?e._e():[n("h1",[e._v("Let's share")]),e._v(" "),n("h2",[e._v("博客汇聚")]),e._v(" "),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/login"}},[n("el-button",[e._v("立即登录")])],1),e._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",[e._v("注册账号")])],1)],1)],e._v(" "),e.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("BLOG")])],1),e._v(" "),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"edit el-icon-plus"})]),e._v(" "),n("div",{staticClass:"user"},[n("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:e.user.username,title:e.user.username}}),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/my"}},[n("a",[e._v("我的")])])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/index"}},[n("a",{attrs:{href:"#"},on:{click:e.onLogout}},[e._v("注销")])])],1)])])]:e._e()],2)},staticRenderFns:[]};var g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("p",[this._v("© 多人技术博客")])])}]};var m={name:"App",components:{Header:n("VU/8")(h,p,!1,function(e){n("rZpl")},null,null).exports,Footer:n("VU/8")(null,g,!1,function(e){n("gQOX")},"data-v-4b810664",null).exports}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{id:"header"}}),this._v(" "),t("main",{attrs:{id:"main"}},[t("router-view")],1),this._v(" "),t("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var b=n("VU/8")(m,v,!1,function(e){n("RCRX")},null,null).exports,L=n("/ocq"),w=n("Xxa5"),_=n.n(w),k=n("exGp"),x=n.n(k),O={state:{user:null,isLogin:!1},getters:{user:function(e){return e.user},isLogin:function(e){return e.isLogin}},mutations:{setUser:function(e,t){e.user=t.user},setLogin:function(e,t){e.isLogin=t.isLogin}},actions:{login:function(e,t){var n=e.commit,r=t.username,o=t.password;return d.login({username:r,password:o}).then(function(e){n("setUser",{user:e.data}),n("setLogin",{isLogin:!0})})},register:function(e,t){var n=this,r=e.commit,o=t.username,a=t.password;return x()(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.register({username:o,password:a});case 2:return t=e.sent,r("setUser",{user:t.data}),r("setLogin",{isLogin:!0}),e.abrupt("return",t.data);case 6:case"end":return e.stop()}},e,n)}))()},logout:function(e){var t=this,n=e.commit;return x()(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.logout();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return e.stop()}},e,t)}))()},checkLogin:function(e){var t=this,n=e.commit,r=e.state;return x()(_.a.mark(function e(){var o;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.isLogin){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,d.getInfo();case 4:if(o=e.sent,n("setLogin",{isLogin:o.isLogin}),o.isLogin){e.next=8;break}return e.abrupt("return",!1);case 8:return n("setUser",{user:o.data}),e.abrupt("return",!0);case 10:case"end":return e.stop()}},e,t)}))()}}};r.default.use(f.a);var P=new f.a.Store({modules:{auth:O,blog:{state:{},getters:{},mutations:{},actions:{}}}});window.store=P,r.default.use(L.a);var R=new L.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"epW7"))}},{path:"/login",component:function(){return n.e(8).then(n.bind(null,"OpX7"))}},{path:"/detail/:blogId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"YE8u"))}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"R6sS"))},meta:{requiresAuth:!0}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"/oBs"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"bywM"))}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"vv7P"))},meta:{requiresAuth:!0}},{path:"/register",component:function(){return n.e(2).then(n.bind(null,"YDhy"))}}]});R.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?P.dispatch("checkLogin").then(function(t){t?n():n({path:"/login",query:{redirect:e.fullPath}})}):n()});var y=R,q=n("zL8q"),U=n.n(q),j=(n("tvR6"),n("pFYg")),A=n.n(j);function C(e){var t=("object"===(void 0===e?"undefined":A()(e))?e:new Date(e)).getTime(),n=Date.now()-t,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var M={install:function(e,t){e.prototype.friendlyDate=C}};r.default.use(U.a),r.default.use(M),r.default.config.productionTip=!1,new r.default({el:"#app",router:y,store:P,components:{App:b},template:"<App/>"})},RCRX:function(e,t){},gQOX:function(e,t){},"p+dL":function(e,t,n){"use strict";t.a=u;var r=n("//Fk"),o=n.n(r),a=n("mtWM"),s=n.n(a),i=n("zL8q");n.n(i);function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new o.a(function(r,o){var a={url:e,method:t};"get"===t.toLowerCase()?a.params=n:a.data=n,localStorage.token&&(s.a.defaults.headers.common.Authorization=localStorage.token),s()(a).then(function(e){console.log(e.data),"ok"===e.data.status?(e.data.token&&(localStorage.token=e.data.token),r(e.data)):(i.Message.error(e.data.msg),o(e.data))}).catch(function(e){i.Message.error("网络异常"),o({msg:"网络异常"})})})}s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.baseURL="//blog-server.hunger-valley.com",window.request=u},rZpl:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b9c47c473d753d47831f.js.map
(function(t){function e(e){for(var s,a,c=e[0],l=e[1],r=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},o={app:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0dc2":function(t,e,n){"use strict";n("9823")},"1c94":function(t,e,n){"use strict";n("31cd")},"31cd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("99af"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-secondary",attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[t.onLoad?n("div",{attrs:{id:"nav"}},[n("b-spinner",{staticStyle:{"z-index":"1001",width:"5rem",height:"5rem"},attrs:{label:"Загрузка",variant:"primary"}})],1):t._e()]),n("router-view")],1)},i=[],a=n("5530"),c=n("2f62"),l={name:"app",components:{},computed:Object(a["a"])({},Object(c["c"])(["onLoad"])),methods:Object(a["a"])({},Object(c["b"])(["GetLists"])),created:function(){this.GetLists()}},r=l,u=(n("5c0b"),n("2877")),d=Object(u["a"])(r,o,i,!1,null,null,null),f=d.exports,h=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Lists")],1)},m=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-wrap border-primary bg-light"},[n("b-modal",{attrs:{title:t.AcceptModal.title},on:{ok:function(e){return t.DelList(t.listToDelete)}},model:{value:t.AcceptModal.show,callback:function(e){t.$set(t.AcceptModal,"show",e)},expression:"AcceptModal.show"}},[n("p",[t._v(t._s(t.AcceptModal.message))])]),n("b-modal",{attrs:{title:t.SuccessModal.title},model:{value:t.SuccessModal.show,callback:function(e){t.$set(t.SuccessModal,"show",e)},expression:"SuccessModal.show"}},[n("p",[t._v(t._s(t.SuccessModal.message))])]),n("b-modal",{attrs:{title:t.ErrorModal.title},model:{value:t.ErrorModal.show,callback:function(e){t.$set(t.ErrorModal,"show",e)},expression:"ErrorModal.show"}},[n("p",{staticClass:"text-danger"},[t._v(t._s(t.ErrorModal.message))])]),n("b-form-select",{staticClass:"my-3 mx-5",staticStyle:{width:"unset"},attrs:{options:t.filters},model:{value:t.filterID,callback:function(e){t.filterID=e},expression:"filterID"}}),n("div",{staticClass:"hr"}),n("b-list-group",{staticClass:"lists"},[n("transition-group",{attrs:{name:"slide-fade"}},t._l(t.listsFiltered,(function(e){return n("b-list-group-item",{key:e.id,style:"background-color: "+e.color+"; transition: all .3s ease"},[n("div",{staticClass:"row no-gutters justify-content-between"},[n("router-link",{staticClass:"row no-gutters justify-content-between align-items-center",attrs:{to:e.link}},[n("div",{staticClass:"mx-1"},[t._v(t._s(e.title))])]),n("b-button",{staticClass:"mx-1",attrs:{variant:"danger"},on:{click:function(n){return t.ShowAcceptModal(e)}}},[t._v("Delete")])],1)])})),1)],1),n("div",{staticClass:"hr"}),n("form",{staticClass:"d-flex flex-column",on:{submit:function(e){return e.preventDefault(),t.NewList(e)}}},[n("div",{staticClass:"px-1"},[n("b-input",{attrs:{placeholder:"Название списка"},model:{value:t.newListTitle,callback:function(e){t.newListTitle=e},expression:"newListTitle"}})],1),n("b-button",{staticClass:"align-self-end m-1",attrs:{variant:"primary",type:"submit"}},[t._v("Создать список")]),t._m(0)],1)],1)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("© 2020 "),n("a",{attrs:{href:"https://d0rich.github.io",target:"_blank"}},[t._v("Nikolay Dorofeev (d0rich)")])])}],g=(n("4de4"),n("4160"),n("159b"),n("d4ec")),w=n("bee2"),_=n("bc3a"),M=n.n(_);n("7db0"),n("c975"),n("a434"),n("d3b7");s["default"].use(c["a"]);var y=new c["a"].Store({state:{todoUrl:"https://sa-mysite-anchousi.herokuapp.com",token:"1|XqkJHQC2Pocys7tiXsPQnFVSv0rCT2nyyp860syv",plans:[],lists:[],listsOnLoad:!1},mutations:{DeleteListLocally:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new O({});t.lists.splice(t.lists.indexOf(e),1)},DeletePlanLocally:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new C({});t.lists.find((function(t){return t.id===e.list_id})).plans.splice(t.lists.find((function(t){return t.id===e.list_id})).plans.indexOf(e),1)}},actions:{GetLists:function(t){var e=t.state,n=t.getters;return new Promise((function(t,s){e.listsOnLoad=!0,M.a.get("".concat(e.todoUrl,"/api/to_do/lists/get?count=99"),n.reqConfig).then((function(n){console.log(n),e.lists=[],n.data.forEach((function(t){e.lists.push(new O(t))})),e.lists.sort(L.byAttr("title")),e.listsOnLoad=!1,t()})).catch((function(t){e.listsOnLoad=!1,s(t)}))}))},CreateList:function(t,e){var n=t.state,s=t.getters;return new Promise((function(t,o){M.a.post("".concat(n.todoUrl,"/api/to_do/lists/create"),{title:e},s.reqConfig).then((function(e){console.log(e),t()})).catch((function(t){o(t)}))}))},DeleteList:function(t,e){var n=t.state,s=t.getters;return new Promise((function(t,o){M.a.delete("".concat(n.todoUrl,"/api/to_do/lists/delete/").concat(e),s.reqConfig).then((function(e){console.log(e),t()})).catch((function(t){o(t)}))}))},CreatePlan:function(t){var e=t.state,n=t.getters,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new C({title:"test",description:"test",priority:1,list_id:6});return new Promise((function(t,o){M.a.post("".concat(e.todoUrl,"/api/to_do/plans/create/").concat(s.list_id),s,n.reqConfig).then((function(e){console.log(e),t()})).catch((function(t){o(t)}))}))},DeletePlan:function(t,e){var n=t.state,s=t.getters,o=e.id;return new Promise((function(t,e){M.a.delete("".concat(n.todoUrl,"/api/to_do/plans/delete/").concat(o),s.reqConfig).then((function(e){console.log(e),t()})).catch((function(t){e(t)}))}))}},getters:{onLoad:function(t){return t.listsOnLoad},reqConfig:function(t){return{headers:{Authorization:"Bearer ".concat(t.token)}}}},modules:{}}),O=function(){function t(e){var n=e.id,s=void 0===n?1:n,o=e.title,i=void 0===o?"":o,a=e.undone,c=void 0===a?0:a,l=e.created_at,r=void 0===l?new Date:l,u=e.updated_at,d=void 0===u?new Date:u;Object(g["a"])(this,t),this.id=s,this.title=i,this.undone=c,this.created=new Date(r),this.changed=new Date(d),this.plans=[],this.GetPlans()}return Object(w["a"])(t,[{key:"GetPlans",value:function(){var t=this;M.a.get("".concat(y.state.todoUrl,"/api/to_do/plans/get/").concat(this.id),y.getters.reqConfig).then((function(e){t.plans=[],e.data.forEach((function(e){t.plans.push(new C(e))})),t.plans.sort(L.byAttrDesc("created"))}))}},{key:"undoneLocal",get:function(){return this.plans.filter((function(t){return!t.complete})).length}},{key:"type",get:function(){return 0===this.plans.length?1:this.undoneLocal>0?2:3}},{key:"color",get:function(){return 1===this.type?"white":2===this.type?"#b8ef8b":"#cfcdcd"}},{key:"link",get:function(){return{name:"List",params:{list_id:this.id}}}}]),t}(),C=(n("a4d3"),n("e01a"),function(){function t(e){var n=e.id,s=void 0===n?1:n,o=e.list_id,i=void 0===o?1:o,a=e.title,c=void 0===a?"":a,l=e.description,r=void 0===l?"":l,u=e.priority,d=void 0===u?0:u,f=e.complete,h=void 0!==f&&f,p=e.created_at,m=void 0===p?new Date:p,b=e.updated_at,v=void 0===b?new Date:b;Object(g["a"])(this,t),this.id=s,this.list_id=i,this.title=c,this.description=r,this.priority=d,this.complete=h,this.created=new Date(m),this.changed=new Date(v)}return Object(w["a"])(t,[{key:"MarkPlanComplete",value:function(){var t=this;this.complete?M.a.post("".concat(y.state.todoUrl,"/api/to_do/plans/change/").concat(this.id,"/").concat(this.list_id),this,y.getters.reqConfig).then((function(e){console.log(e),t.complete=!1})).catch((function(){t.complete=!0})):M.a.post("".concat(y.state.todoUrl,"/api/to_do/plans/change/").concat(this.id,"/").concat(this.list_id),this,y.getters.reqConfig).then((function(e){console.log(e),t.complete=!0})).catch((function(){t.complete=!1}))}},{key:"important",get:function(){return this.priority>3}}]),t}()),L={byAttr:function(t){return function(e,n){return e[t]>n[t]?1:e[t]===n[t]?0:e[t]<n[t]?-1:void 0}},byAttrDesc:function(t){return function(e,n){return e[t]>n[t]?-1:e[t]===n[t]?0:e[t]<n[t]?1:void 0}}},j={name:"Lists",data:function(){return{newListTitle:"",listToDelete:{},filterID:1,filters:[{value:1,text:"Неисполненные"},{value:2,text:"Исполненные"},{value:3,text:"Все"}],AcceptModal:{show:!1,title:"Вы уверены в своих действиях?",message:""},ErrorModal:{show:!1,title:"Ошибка",message:""},SuccessModal:{show:!1,title:"Успешно",message:""}}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(c["e"])(["lists"])),Object(c["c"])(["onLoad"])),{},{listsFiltered:function(){return 1===this.filterID?this.lists.filter((function(t){return 1===t.type||2===t.type})):2===this.filterID?this.lists.filter((function(t){return 3===t.type})):this.lists}}),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(c["b"])(["GetLists","CreateList","DeleteList"])),Object(c["d"])(["DeleteListLocally"])),{},{ShowAcceptModal:function(t){this.AcceptModal.show=!0,this.AcceptModal.message='Удалить список дел "'.concat(t.title,'"?'),this.listToDelete=t},ShowErrorModal:function(t){this.ErrorModal.show=!0,this.ErrorModal.message=t},ShowSuccessModal:function(t){this.SuccessModal.show=!0,this.SuccessModal.message=t},NewList:function(){var t=this;this.CreateList(this.newListTitle).then((function(){t.GetLists(),t.ShowSuccessModal('Список дел "'.concat(t.newListTitle,'" добавлен')),t.newListTitle=""})).catch((function(e){t.ShowErrorModal(e.message)}))},DelList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new O({});this.DeleteList(e.id).then((function(){t.DeleteListLocally(e)}))}})},D=j,x=(n("1c94"),Object(u["a"])(D,b,v,!1,null,"0a95cc84",null)),P=x.exports,S={name:"Home",components:{Lists:P},computed:Object(a["a"])({},Object(c["e"])(["lists"])),methods:Object(a["a"])({},Object(c["b"])(["GetLists","CreateList","CreatePlan"]))},k=S,E=(n("cccb"),Object(u["a"])(k,p,m,!1,null,null,null)),A=E.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-page"},[n("Lists",{staticClass:"lists-display"}),n("Plans",{staticClass:"plans-display"})],1)},$=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plans-wrap bg-light"},[n("b-modal",{attrs:{title:t.AcceptModal.title},on:{ok:function(e){return t.DelPlan(t.planToDelete)}},model:{value:t.AcceptModal.show,callback:function(e){t.$set(t.AcceptModal,"show",e)},expression:"AcceptModal.show"}},[n("p",[t._v(t._s(t.AcceptModal.message))])]),n("b-modal",{attrs:{title:t.SuccessModal.title},model:{value:t.SuccessModal.show,callback:function(e){t.$set(t.SuccessModal,"show",e)},expression:"SuccessModal.show"}},[n("p",[t._v(t._s(t.SuccessModal.message))])]),n("b-modal",{attrs:{title:t.ErrorModal.title},model:{value:t.ErrorModal.show,callback:function(e){t.$set(t.ErrorModal,"show",e)},expression:"ErrorModal.show"}},[n("p",[t._v(t._s(t.ErrorModal.message))])]),n("b-button",{staticClass:"align-self-end m-1",attrs:{variant:"danger"},on:{click:function(e){return t.$router.push("/")}}},[t._v("Закрыть")]),n("div",{staticClass:"text-center h2"},[t._v(t._s(t.list.title))]),n("div",{staticClass:"hr"}),n("b-list-group",{staticClass:"plans"},[n("transition-group",{attrs:{name:"slide-fade"}},t._l(t.list.plans,(function(e){return n("b-list-group-item",{key:e.id},[n("div",{staticClass:"row no-gutters justify-content-between"},[n("b-checkbox",{staticClass:"mx-1 d-flex align-items-center",on:{change:function(t){return e.MarkPlanComplete()}},model:{value:e.complete,callback:function(n){t.$set(e,"complete",n)},expression:"plan.complete"}},[t._v(" "+t._s(e.title)+" ")]),n("div",{staticClass:"mx-1 d-flex align-items-center"},[t._v("Создано: "+t._s(t.DateToString(e.created)))]),n("div",{staticClass:"h4 my-0 mx-1 d-flex align-items-center "},[e.important?n("b-icon",{attrs:{icon:"exclamation-circle-fill",variant:"danger"}}):t._e()],1),n("b-button",{staticClass:"mx-1",attrs:{variant:"danger"},on:{click:function(n){return t.ShowAcceptModal(e)}}},[t._v("Delete")])],1)])})),1)],1),n("div",{staticClass:"hr"}),n("form",{on:{submit:function(e){return e.preventDefault(),t.NewPlan(e)}}},[n("div",{staticClass:"px-1"},[n("b-input",{attrs:{placeholder:"Введите план"},model:{value:t.newPlan.title,callback:function(e){t.$set(t.newPlan,"title",e)},expression:"newPlan.title"}})],1),n("div",{staticClass:"row no-gutters align-items-center m-1 justify-content-end"},[n("b-form-checkbox",{staticClass:"mx-1",model:{value:t.newPlan.important,callback:function(e){t.$set(t.newPlan,"important",e)},expression:"newPlan.important"}},[t._v(" Срочно ")]),n("b-button",{staticClass:"mx-1",attrs:{variant:"primary",type:"submit"}},[t._v("Создать план")])],1)])],1)},G=[],U={name:"Plans",data:function(){return{planToDelete:new C({}),newPlan:{title:"",important:!1},AcceptModal:{show:!1,title:"Вы уверены в своих действиях?",message:""},ErrorModal:{show:!1,title:"Ошибка",message:""},SuccessModal:{show:!1,title:"Успешно",message:""}}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(c["e"])(["lists"])),Object(c["c"])(["onLoad"])),{},{list:function(){var t=this;if(this.onLoad)return new O({title:"Загрузка..."});var e=this.lists.find((function(e){return e.id===t.$route.params.list_id}));return console.log(this.lists),console.log(e),e||new O({title:"Ошибка: список не найден"})}}),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(c["b"])(["CreatePlan","DeletePlan"])),Object(c["d"])(["DeletePlanLocally"])),{},{NewPlan:function(){var t=this,e=new C(Object(a["a"])(Object(a["a"])({},this.newPlan),{},{list_id:this.$route.params.list_id,priority:this.newPlan.important?5:1}));this.CreatePlan(e).then((function(){t.list.GetPlans(),t.ShowSuccessModal('"'.concat(e.title,'" успешно добавлено в "').concat(t.list.title,'"')),t.newPlan={title:"",important:!1}})).catch((function(e){t.ShowErrorModal(e.message)}))},DelPlan:function(){var t=this;this.DeletePlan(this.planToDelete).then((function(){t.DeletePlanLocally(t.planToDelete)})).catch((function(e){t.ShowErrorModal(e.message)}))},ShowAcceptModal:function(t){this.AcceptModal.show=!0,this.AcceptModal.message='Удалить дело "'.concat(t.title,'"?'),this.planToDelete=t},ShowErrorModal:function(t){this.ErrorModal.show=!0,this.ErrorModal.message=t},ShowSuccessModal:function(t){this.SuccessModal.show=!0,this.SuccessModal.message=t}})},H=U,I=(n("0dc2"),Object(u["a"])(H,q,G,!1,null,"ea807f80",null)),N=I.exports,F={name:"List",components:{Lists:P,Plans:N}},J=F,z=(n("98de"),Object(u["a"])(J,T,$,!1,null,"74636ad7",null)),Q=z.exports;s["default"].use(h["a"]);var X=[{path:"/",name:"Home",component:A},{path:"/lists/:list_id",name:"List",component:Q}],B=new h["a"]({routes:X}),V=B,Y=n("2106"),K=n.n(Y),R=n("5f5b"),W=n("b1e0");n("f9e3"),n("2dd8");s["default"].use(R["a"]),s["default"].use(W["a"]),s["default"].use(K.a,M.a),s["default"].config.productionTip=!1,s["default"].mixin({methods:{DateToString:function(t){var e=new Date(t),n="".concat(e.getDate());e.getDate()<10&&(n="0".concat(e.getDate()));var s="".concat(e.getMonth());e.getMonth()<10&&(s="0".concat(e.getMonth()));var o="".concat(e.getHours());e.getHours()<10&&(o="0".concat(e.getHours()));var i="".concat(e.getMinutes());return e.getMinutes()<10&&(i="0".concat(e.getMinutes())),"".concat(n,"/").concat(s,"/").concat(e.getFullYear()," ").concat(o,":").concat(i)}}}),new s["default"]({router:V,store:y,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ced":function(t,e,n){},"86e3":function(t,e,n){},9823:function(t,e,n){},"98de":function(t,e,n){"use strict";n("86e3")},"9c0c":function(t,e,n){},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.9582a78a.js.map
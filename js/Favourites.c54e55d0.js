(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Favourites"],{"0671":function(e,t,s){e.exports={label:"index_label_1MMS4",input:"index_input_1twND",select:"index_select_1Zh_V",slider:"index_slider_f6jUc",range:"index_range_2CUBT","select-item":"index_select-item_2G22U",title:"index_title_2T-Z7",buttons:"index_buttons_W0Qe_",button:"index_button_2Wm9b",success:"index_success_fayOD"}},"12ab":function(e,t,s){"use strict";var a=s("0671"),i=s.n(a);t["default"]=i.a},"20f6":function(e,t,s){"use strict";var a=s("b0414"),i=s.n(a);i.a},"22cf":function(e,t,s){"use strict";var a=s("3859"),i=s.n(a);i.a},3859:function(e,t,s){},"7b7a":function(e,t,s){},b0414:function(e,t,s){},eace:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"favourites"},[s("div",{staticClass:"favourites__title"},[e._v(" Избранное ")]),s("div",{staticClass:"favourites__list"},e._l(e.favourites,(function(e){return s("div",{key:e.id},[s("item-favourit",{attrs:{item:e}})],1)})),0)])},i=[],l=s("5530"),n=s("2f62"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"item-favourit"},[s("div",{staticClass:"item-favourit__title"},[e._v(" "+e._s(e.item.name)+" ")]),s("div",{staticClass:"item-favourit__buttons"},[s("a",{on:{click:function(t){return e.search(e.item)}}},[e._v(" Выполнить ")]),s("a",{on:{click:e.edit}},[e._v(" Изменить ")]),s("a",{staticClass:"button__remove",on:{click:function(t){return e.REMOVE_FAVOURITES(e.item.id)}}},[e._v(" Удалить ")])]),e.visible?s("favourites-modal",{attrs:{type:"edit",request:e.item},on:{close:e.closeModal}}):e._e()],1)},u=[],r=s("f321"),o={name:"ItemFavourit",components:{FavouritesModal:r["a"]},props:{item:{type:Object,required:!0}},data:function(){return{visible:!1}},methods:Object(l["a"])(Object(l["a"])({},Object(n["b"])("favourites",["REMOVE_FAVOURITES"])),{},{search:function(e){this.$router.push({name:"MainPage",query:Object(l["a"])(Object(l["a"])({},e),{},{id:void 0})})},edit:function(){this.visible=!0},closeModal:function(){this.visible=!1}})},v=o,d=(s("ed6e"),s("2877")),b=Object(d["a"])(v,c,u,!1,null,"7b681855",null),_=b.exports,f={name:"Favourites",components:{ItemFavourit:_},computed:Object(l["a"])({},Object(n["d"])("favourites",["favourites"])),created:function(){this.GET_FAVOURITES()},methods:Object(l["a"])({},Object(n["b"])("favourites",["GET_FAVOURITES"]))},m=f,p=(s("22cf"),Object(d["a"])(m,a,i,!1,null,"257fe118",null));t["default"]=p.exports},ed6e:function(e,t,s){"use strict";var a=s("7b7a"),i=s.n(a);i.a},f321:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-modal",{attrs:{"after-close":e.close,centered:"","dialog-class":e.$s["modal"],footer:null,closable:!1},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[s("span",{class:e.$s.title},[e._v(" "+e._s("save"===e.type?"Сохранить":"Изменить")+" запрос ")]),s("label",{class:e.$s.label},[e._v(" Запрос "),s("a-input",{class:e.$s.input,attrs:{disabled:"save"===e.type},model:{value:e.result.search,callback:function(t){e.$set(e.result,"search",t)},expression:"result.search"}})],1),s("label",{class:e.$s.label},[e._v(" *Название "),s("a-input",{class:e.$s.input,attrs:{placeholder:"Укажите название"},model:{value:e.result.name,callback:function(t){e.$set(e.result,"name",t)},expression:"result.name"}})],1),s("label",{class:e.$s.label},[e._v(" Сортировать по "),s("a-select",{class:e.$s.select,attrs:{placeholder:"Без сортировки"},on:{change:e.changeOrder}},e._l(e.orders,(function(t,a){return s("a-select-option",{key:a,class:e.$s["select-item"],attrs:{value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1),s("label",{class:e.$s.label},[e._v(" Максимальное количество "),s("a-row",{class:e.$s.slider},[s("a-slider",{class:e.$s.range,attrs:{min:1,max:50},model:{value:e.result.maxResults,callback:function(t){e.$set(e.result,"maxResults",t)},expression:"result.maxResults"}}),s("a-input-number",{class:e.$s.input,attrs:{min:1,max:50},model:{value:e.result.maxResults,callback:function(t){e.$set(e.result,"maxResults",t)},expression:"result.maxResults"}})],1)],1),s("div",{class:e.$s.buttons},[s("a-button",{class:e.$s.button,on:{click:e.close}},[e._v(" "+e._s("save"===e.type?"Не сохранять":"Не изменять")+" ")]),s("a-button",{staticClass:"success",class:[e.$s.button,e.$s.success],attrs:{type:"primary"},on:{click:e.saveFavourites}},[e._v(" "+e._s("save"===e.type?"Сохранить":"Изменить")+" ")])],1)])},i=[],l=(s("b0c0"),s("5530")),n=s("2f62"),c={name:"FavouritesModal",props:{request:{type:Object,required:!0},type:{type:String,default:"save"}},data:function(){return{orders:["relevance","rating","title","data","viewCount"],visible:!0,result:{search:null,name:null,order:null,maxResults:12}}},created:function(){this.result=Object(l["a"])(Object(l["a"])({},this.result),this.request)},methods:Object(l["a"])(Object(l["a"])({},Object(n["b"])("favourites",["SAVE_FAVOURITES","GET_FAVOURITES","UPDATE_FAVOURITES"])),{},{changeOrder:function(e){this.result.order=e},saveFavourites:function(){this.result.name&&(this.GET_FAVOURITES(),"save"===this.type?this.SAVE_FAVOURITES(Object(l["a"])(Object(l["a"])({},this.result),{},{id:Date.now()})):this.UPDATE_FAVOURITES(this.result),this.close(!0))},close:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("close",e)}})},u=c,r=s("12ab"),o=(s("20f6"),s("2877"));function v(e){this["$s"]=r["default"].locals||r["default"]}var d=Object(o["a"])(u,a,i,!1,v,null,null);t["a"]=d.exports}}]);
//# sourceMappingURL=Favourites.c54e55d0.js.map
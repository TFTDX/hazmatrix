(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d0dc5e4"],{"1b7f":function(t,e,i){"use strict";i("9344")},2040:function(t,e,i){"use strict";var n=function(t,e){e._c;return e._m(0)},s=[function(t,e){var i=e._c;return i("div",{staticClass:"center",attrs:{id:"loader"}},[i("b",{staticStyle:{"font-size":"1.4em"}},[e._v("... LOADING ...")]),i("br"),i("div",{attrs:{id:"spinner"}})])}],a={name:"loader"},l=a,o=(i("ef06"),i("2877")),r=Object(o["a"])(l,n,s,!0,null,"2794b8e9",null);e["a"]=r.exports},"26d3":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section center"},[t.loader?i("loader"):i("div",[i("div",{staticClass:"columns is-multiline"},[i("div",{staticClass:"column is-full"},[i("label",[i("b",[t._v("Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"E.g. JJ",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),i("div",{staticClass:"column is-full"},[i("label",[i("b",[t._v("Firestation")]),i("br"),i("div",{staticClass:"select is-fullwidth"},[i("select",{on:{change:function(e){return t.updateFirestationID(e)}}},t._l(t.firestations,(function(e){return i("option",{key:e.id,domProps:{value:e.id,selected:e.id===t.userFirestationID}},[t._v(" "+t._s(e.name)+" ")])})),0)])])]),i("div",{staticClass:"column"},[i("button",{staticClass:"button is-light is-fullwidth is-success",on:{click:t.help}},[t._v(" Get help ")])])]),i("div",{staticClass:"columns is-mobile"},[i("div",{staticClass:"column"},[i("router-link",{staticClass:"button is-light is-fullwidth",attrs:{to:{name:"home"}}},[t._v(" home ")])],1),i("div",{staticClass:"column"},[i("button",{staticClass:"button is-fullwidth",class:{"is-light":t.unedited,"is-success":!t.unedited},attrs:{disabled:t.unedited},on:{click:t.saveSettings}},[t._v(" save ")])])]),i("version")],1)],1)},s=[],a=(i("b0c0"),i("2040")),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level",staticStyle:{"font-size":"0.7em",position:"fixed",bottom:"1em","max-width":"30em"}},[t._v(" Version: "+t._s(t.gitBranch+" "+t.commitHash.slice(0,6).toString())+" "),i("br"),t._v(" Build Time: "+t._s(t.buildTime)+" ")])},o=[],r={name:"version",data:function(){return{buildTime:"8/7/2021, 8:24:41 PM",commitHash:"1d39fee6c17c678c411a58b11ae66d2f80fe260f\n",gitBranch:"master\n"}}},c=r,u=i("2877"),d=Object(u["a"])(c,l,o,!1,null,null,null),m=d.exports,f={name:"settings",components:{loader:a["a"],version:m},data:function(){var t=2;return{loader:!1,original:{name:name,userFirestationID:t},name:"JJ",userFirestationID:t,firestations:[{id:1,name:"Paya lebar"},{id:2,name:"Ang Mo Kio"},{id:3,name:"Changi"},{id:4,name:"Tampines"}]}},computed:{unedited:function(){return this.original.name===this.name&&this.original.userFirestationID===this.userFirestationID}},methods:{updateFirestationID:function(t){this.userFirestationID=parseInt(t.target.value)}}},v=f,b=(i("1b7f"),Object(u["a"])(v,n,s,!1,null,"88b42ed4",null));e["default"]=b.exports},"3a25":function(t,e,i){},9344:function(t,e,i){},b0c0:function(t,e,i){var n=i("83ab"),s=i("9bf2").f,a=Function.prototype,l=a.toString,o=/^\s*function ([^ (]*)/,r="name";n&&!(r in a)&&s(a,r,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(t){return""}}})},ef06:function(t,e,i){"use strict";i("3a25")}}]);
//# sourceMappingURL=chunk-1d0dc5e4.e723e47c.js.map
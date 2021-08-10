(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bfedc9c"],{"06d2":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"px-4 pt-4",staticStyle:{"text-align":"left"}},[i("div",{staticClass:"columns is-multiline"},[i("div",{staticClass:"column"},[i("p",{staticClass:"title is-4"},[e._v(e._s(e.equipment.name))])]),i("div",{staticClass:"column content pb-0 mb-0"},[i("details",{staticClass:"pb-0",attrs:{open:""}},[i("summary",{staticClass:"subtitle"},[e._v("Mitigation Limitations")]),i("ul",e._l(e.equipment["Mitigation Limitations"],(function(t,a){return i("li",{key:a},[Array.isArray(t)?i("div",[e._v(" "+e._s(t[0])+" "),e._l(t[1],(function(t,a){return i("ul",{key:a},[i("li",[e._v(e._s(t))])])}))],2):i("span",[e._v(e._s(t))])])})),0)])]),e._m(0),i("div",{staticClass:"column pb-0 mb-0"},[i("p",{staticClass:"subtitle"},[e._v(" Operating Pressure: "),i("b",[e._v(e._s(e.equipment["Operating Pressure"]))])])]),e._m(1),i("div",{staticClass:"column pb-0 mb-0"},[i("p",{staticClass:"subtitle"},[e._v(" Working Temperature: "),i("b",[e._v(e._s(e.equipment["Working Temperature"]))])])]),e._m(2),i("div",{staticClass:"column pb-0 mb-0"},[i("p",{staticClass:"subtitle"},[e._v(" Can use in flammable environment: "),i("b",[e._v(e._s(e.equipment["flammable environment"]))])])]),e._m(3),i("div",{staticClass:"column pb-0 mb-0"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("button",{staticClass:"button is-light is-fullwidth is-success",on:{click:e.shareViaWebShare}},[e._v(" share ")])]),i("div",{staticClass:"column"},[i("button",{staticClass:"button is-light is-fullwidth",on:{click:function(t){return e.$router.back()}}},[e._v(" back ")])]),i("div",{staticClass:"column"},[i("router-link",{staticClass:"button is-light is-fullwidth is-danger",attrs:{to:{name:"home"}}},[e._v(" home ")])],1)])])])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"column"},[i("hr",{staticClass:"my-0",staticStyle:{"background-color":"#dedede"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"column"},[i("hr",{staticClass:"my-0",staticStyle:{"background-color":"#dedede"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"column"},[i("hr",{staticClass:"my-0",staticStyle:{"background-color":"#dedede"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"column"},[i("hr",{staticClass:"my-0",staticStyle:{"background-color":"#dedede"}})])}],s=(i("b0c0"),i("e013")),r={name:"Equipment",props:["id"],data:function(){return{equipment:s[this.id]}},methods:{shareViaWebShare:function(){navigator.share({title:"Share this Equipment",text:this.equipment.name,url:"https://singapore-civil-defence-force.github.io/hazmatrix/#/equipment/".concat(this.id)})}}},c=r,o=i("2877"),l=Object(o["a"])(c,a,n,!1,null,null,null);t["default"]=l.exports},b0c0:function(e,t,i){var a=i("83ab"),n=i("9bf2").f,s=Function.prototype,r=s.toString,c=/^\s*function ([^ (]*)/,o="name";a&&!(o in s)&&n(s,o,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(e){return""}}})},e013:function(e){e.exports=JSON.parse('{"1":{"name":"Flange drainage bag (Chloroprene rubber)","Mitigation Limitations":["Flange connection: Ø < 21 cm","Pipe: Ø < 10 cm"],"Operating Pressure":"1.5 Bar","Working Temperature":"-55°C to 85°C","flammable environment":"Yes"},"2":{"name":"Leak sealing lance (Chloroprene rubber)","Mitigation Limitations":[["Leaking opening and width",["Wedge bag 6: 1.5-4.5 cm, 6-9 cm","Wedge bag 8: 1.5-4.5 cm, 8-12 cm","Wedge bag 11: 3-6 cm, 11-17 cm","Cone bag 7: Ø 3-9 cm"]]],"Operating Pressure":"1.5 Bar","Working Temperature":"-55°C to 85°C","flammable environment":"Yes"},"3":{"name":"Mini leak sealing bag (Chloroprene rubber)","Mitigation Limitations":["For container Ø 10-90 cm",["Size and sealing area",["LDK 10/10: 15 x 15 x 1.2 cm, 9.5 x 9.5 cm","LDK 10/25: 15 x 31 x 1.2 cm, 9.5 x 25.5 cm","LDK 20/20: 25 x 25 x 1.2 cm, 19.5 x 19.5 cm"]]],"Operating Pressure":"1.5 Bar","Working Temperature":"-40°C to 95°C","flammable environment":"Yes"},"4":{"name":"Leak sealing bag (Chloroprene rubber)","Mitigation Limitations":["For container Ø > 50 cm","Size: 61.5 x 30 x 2 cm","Sealing area: 50 x 30 cm","PVC acid protective cover","Tension and extension belt: 10 m","2 Sealing plates: 60 x 30 x 3 cm"],"Operating Pressure":"1.5 Bar","Working Temperature":"-40°C to 90°C","flammable environment":"Yes (Only when using with Vetter\'s original set)"},"5":{"name":"Leak drainage bag (Natural rubber)","Mitigation Limitations":["For container Ø > 50 cm","Size: 62 x 30 x 6 cm","Sealing area: 50 x 30 cm","Drainage space: 40 x 20 x 3.5 cm","Tension and extension belt: 10 m","Acid drain hose: 5 m"],"Operating Pressure":"1.5 Bar","Working Temperature":"-40°C to 90°C","flammable environment":"Yes (Only when using with Vetter\'s original set)"},"6":{"name":"Pipe sealing bag (Natural rubber)","Mitigation Limitations":["For pipe/drain Ø 10-120 cm",["Size and pipe/drain Ø",["PDK 10/20: 63.5 x 9.7 cm, 10-20 cm","PDK 20/50: 70 x 19.5 cm, 20-50 cm","PDK 50/80: 72 x 45 cm, 50-80 cm (store)","PDK 50/120: 107 x 45 cm, 50-120 cm (store)"]],["Drainage hose",["1 x 2.5” Storz x 10 m (store)","1 x 4” Storz x 10 m (store)"]]],"Operating Pressure":"1.5 Bar","Working Temperature":"-40°C to 70°C","flammable environment":"Yes"},"7":{"name":"Emergency response containment vessel (ERCV) (Salvage Cylinder)","Mitigation Limitations":["Cylinder size limit","Length: < 90 cm (inclusive of cap)","Diameter: < 25 cm","Only for metallic containers with no explosive mixture, and cylinders that are not damaged by fire or explosion-damage.","Cylinders cannot be liquid-full."],"Operating Pressure":"10 Bar","Working Temperature":"20°C to 50°C","flammable environment":"Yes"}}')}}]);
//# sourceMappingURL=chunk-4bfedc9c.6d02bf07.js.map
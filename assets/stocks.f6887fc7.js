import{a as o}from"./vendor.4c35be11.js";import{n as c}from"./index.d7eaeca0.js";var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"container text-center"},e._l(e.stock,function(n){return t("button",{key:n.stock,staticClass:"company-button",on:{click:function(d){return e.selectCompany(n)}}},[e._v(e._s(n.companyName))])}),0),e.selectedCompany?t("div",[t("p",{staticClass:"card-text card-body text-black"}),t("h5",{staticClass:"card-title"},[t("strong",[e._v(e._s(e.selectedCompany.companyName))])]),t("u",{},[t("span",[e._v(e._s(e.selectedCompany.symbol))])]),t("br"),t("u",{},[t("span",{},[e._v("Price:"+e._s(e.selectedCompany.price)+" $")])]),t("br"),t("u",[t("span",[e._v("Mcap:"+e._s(e.selectedCompany.mktCap))])]),t("br"),t("u",{},[t("span",[e._v("Exchange:"+e._s(e.selectedCompany.exchange))])]),t("br"),t("u",{},[t("span",[e._v("Industry:"+e._s(e.selectedCompany.industry))])]),t("br"),t("u",{},[t("span",[e._v("Ceo:"+e._s(e.selectedCompany.ceo))])]),t("br"),t("u",{},[t("span",[e._v("Country:"+e._s(e.selectedCompany.country))])]),t("br"),t("u",{},[t("span",[e._v("Phone:"+e._s(e.selectedCompany.phone))])]),t("br"),t("u",{},[t("span",[e._v("Address:"+e._s(e.selectedCompany.address))])]),t("br"),t("u",{},[t("span",[e._v("City:"+e._s(e.selectedCompany.city))])]),t("br"),t("u",{},[t("span",[e._v("State:"+e._s(e.selectedCompany.state))])]),t("br"),t("p"),t("p",[t("u",{},[t("span",[t("strong",[e._v(e._s(e.selectedCompany.description))])])])]),t("br"),t("div",{staticClass:"m-2 p-2"},[t("button",{staticClass:"button  p-1 rounded-2 m-2 mt-1",on:{click:function(n){return e.openWebsite(e.selectedCompany.website)}}},[e._v("Open Website")]),t("button",{staticClass:"button1 p-1 m-2 rounded-2 mt-1 ",on:{click:e.closeInfo}},[e._v("Close")])])]):e._e()])},p=[];const l={name:"Stocks",data(){return{img:"https://mir-s3-cdn-cf.behance.net/projects/404/80440e173273301.Y3JvcCwyNDk5LDE5NTUsMCww.jpg",stock:[],errors:[],selectedCompany:null}},methods:{closeInfo(){this.selectedCompany=null},selectCompany(e){this.selectedCompany=e},openWebsite(e){window.open(e,"_blank")}},created(){o.get("https://financialmodelingprep.com/api/v3/profile/AAPL,NVDA,TSLA,AMD,INTC,MDB,SPCE,V,DAL,DOCU,OKTA,AMZN,PINS,TRIP,GDDY,DIS,MCD,NOK,UPWK,IBM,FB,ZM,OZON,NFLX,EA,HLT,H,CCL,META?apikey=6c9be8fcb7df7894ba5ae48be14935fc").then(e=>{this.stock=e.data,console.log(e)}).catch(e=>{this.errors.push(e)})}},a={};var _=c(l,r,p,!1,i,"1a8a3724",null,null);function i(e){for(let s in a)this[s]=a[s]}var C=function(){return _.exports}();export{C as default};

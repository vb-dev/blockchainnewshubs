import{l as r,q as o,f as i,p as c,x as l,g as u}from"./vendor.4c35be11.js";import{n as _}from"./index.d7eaeca0.js";var g=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"my-4"},[e(r,t._l(t.paginatedArticles,function(a){return e(o,{attrs:{cols:"12",lg:"4",md:"6",keys:a}},[e(i,[e(c,{attrs:{src:a.imageurl,"aspect-ratio":16/9,gradient:"to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"}},[e("div",{staticClass:"mask",staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)"}},[e("div",{staticClass:"d-flex flex-column justify-space-between fill-height"},[e(l,{attrs:{color:"",size:"46"}},[e("img",{attrs:{src:a.source_info.img}})]),e("span",{staticStyle:{color:"white","font-weight":"bold"}},[t._v(" "+t._s(a.source_info.name))]),e(u,[e("div",{staticClass:"text-h5 py-3 font-weight-bold",staticStyle:{"line-height":"1.2"}},[e("a",{staticStyle:{color:"white","text-decoration":"none"},attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])])])],1)])])],1)],1)}),1)],1)},h=[];const d={data(){return{articles:[],currentPage:1,totalPages:1,rows:12}},computed:{paginatedArticles(){const t=(this.currentPage-1)*this.rows,s=t+this.rows;return this.articles.slice(t,s)}},methods:{formatDateTime(t){const s={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};return new Date(t).toLocaleString(void 0,s)},async getData(){try{return(await(await fetch("https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Defi,Nft")).json()).Data}catch(t){return console.error("Error fetching news:",t),[]}},async fetchNews(){const t=await this.getData();this.articles=t,this.totalPages=Math.ceil(t.length/this.rows)},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},mounted(){this.fetchNews()}},n={};var p=_(d,g,h,!1,f,null,null,null);function f(t){for(let s in n)this[s]=n[s]}var w=function(){return p.exports}();export{w as default};

(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{382:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("586fb509",content,!0,{sourceMap:!1})},389:function(t,e,n){"use strict";n(382)},390:function(t,e,n){var r=n(24)(!1);r.push([t.i,".articles__item{background:#272727;margin:5px 0;padding:8px;color:#fff;page-break-inside:avoid;-moz-column-break-inside:avoid;break-inside:avoid}.articles__list{list-style-type:none;padding:24px;-moz-columns:4;column-count:4}.article img{width:100%}.article a{color:#fff}@media screen and (max-width:1010px){.articles__list{-moz-columns:2;column-count:2}}@media screen and (max-width:768px){.articles__list{-moz-columns:1;column-count:1}}",""]),t.exports=r},402:function(t,e,n){"use strict";n.r(e);var r=n(22),c=(n(73),n(175)),l={name:"ArticlePage",layout:"default",data:function(){return{articles:null}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)("get","articles").then((function(e){t.articles=e}));case 2:case"end":return e.stop()}}),e)})))()}},o=(n(389),n(51)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.articles?n("ul",{staticClass:"articles__list"},t._l(t.articles,(function(article){return n("li",{key:article.id,staticClass:"articles__item article"},[n("article",[n("h2",[t._v(t._s(article.name))]),t._v(" "),n("p",[t._v(t._s(article.shortDesc))]),t._v(" "),n("img",{attrs:{src:"images/"+article.preview_image,alt:article.name+"card image"}}),t._v(" "),n("router-link",{attrs:{to:"/articles/"+article.id}},[t._v(" Подробнее...")])],1)])})),0):n("div",[t._v("Loading data")])}),[],!1,null,null,null);e.default=component.exports}}]);
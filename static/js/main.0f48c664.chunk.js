(this.webpackJsonpcataloge=this.webpackJsonpcataloge||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var r=n(41),c=n(0),i=n.n(c),a=n(35),o=n.n(a),s=(n(118),n(119),n(17)),l=n(192),u=n(205),j=Object(s.h)((function(e){var t=e.history;return Object(c.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null})),d=n(100),b=Object(d.a)({palette:{primary:{main:"#60b0f4"},secondary:{main:"#fff"}}}),O="REQUEST_CATEGORIES_PENDING",h="REQUEST_CATEGORIES_SUCCESS",g="REQUEST_CATEGORIES_FAILED",f="REQUEST_PRODUCTS_PENDING",x="REQUEST_PRODUCTS_SUCCESS",p="REQUEST_PRODUCTS_FAILED",m="SET_IS_FILTER_OPEN",y="SET_SORT",v="SET_PRICE_FIELD",C="SET_SELECTED_COLORS",w="SET_SELECTED_RATING",S=n(65),E=Object(S.b)((function(e){return{categories:e.requestCategories.categories,isCategoriesPending:e.requestCategories.isPending,products:e.requestProducts.products,isProductsPending:e.requestProducts.isPending,isFilterOpen:e.setIsFilterOpen.isFilterOpen,sort:e.setSort.sortValue,priceField:e.setPriceField.priceField,selectedColors:e.setSelectedColors.selectedColors,selectedRating:e.setSelectedRating.selectedRating}}),(function(e){return{requestCategories:function(){return e((function(e){e({type:O}),fetch("https://test-api.edfa3ly.io/category").then((function(e){return e.json()})).then((function(t){return e({type:h,payload:t})})).catch((function(t){return e({type:g,payload:t})}))}))},requestProducts:function(){return e((function(e){e({type:f}),fetch("https://test-api.edfa3ly.io/product").then((function(e){return e.json()})).then((function(t){return e({type:x,payload:t})})).catch((function(t){return e({type:p,payload:t})}))}))},setIsFilterOpen:function(t){return e(function(e){return{type:m,payload:e}}(t))},setSort:function(t){return e(function(e){return{type:y,payload:e}}(t))},setPriceField:function(t){return e(function(e){return{type:v,payload:e}}(t))},setSelectedColors:function(t){return e(function(e){return{type:C,payload:e}}(t))},setSelectedRating:function(t){return e(function(e){return{type:w,payload:e}}(t))}}})),F=n(12),P=n(193),R=n(195),k=n(196),I=n(3),T=function(e){return{flex:{display:"flex"},flexEnd:{display:"flex",alignItems:"center",justifyContent:"flex-end"},wrap:{flexWrap:"wrap"},pushCenter:{marginLeft:"auto",marginRight:"auto"},pushRight:{marginLeft:"auto"},higher:{zIndex:e.zIndex.drawer+1},drawer:Object(I.a)({width:270,flexShrink:0},"& .MuiDrawer-paper",{width:270,boxSizing:"border-box"}),barMargin:{mt:document.querySelector("#mainBar")?document.querySelector("#mainBar").offsetHeight+"px":0},flipX:{transform:"scaleX(-1)"},pointer:{cursor:"pointer"},categoryCircle:{borderRadius:"50%",objectFit:"cover",height:75,width:75},spin:{transition:"0.25s transform","&:hover":{transform:"rotate(-20deg)"}},widthXS:{width:100},widthSM:{width:200},maxWidthMD:Object(I.a)({maxWidth:250},e.breakpoints.up("sm"),{maxWidth:330}),capitalize:{textTransform:"capitalize"},raleway:{fontFamily:"raleway"},whiteFont:{color:e.palette.secondary.main},grayFont:{color:e.palette.secondary.dark},fullWidth:{width:"100%"},fit:{width:"fit-content",height:"fit-content"},pageContainer:Object(I.a)({justifyContent:"center"},e.breakpoints.up("sm"),{justifyContent:"initial"}),productCardImg:{objectFit:"contain",width:250,height:250},sectionDesktop:Object(I.a)({display:"none"},e.breakpoints.up("sm"),{display:"flex"}),sectionMobile:Object(I.a)({display:"flex"},e.breakpoints.up("sm"),{display:"none"})}},_=n(2),L=function(){var e=T(b);return Object(_.jsx)(P.a,{id:"mainBar",sx:e.higher,children:Object(_.jsx)(R.a,{children:Object(_.jsx)(k.a,{component:"h1",variant:"label",margin:1,sx:Object(F.a)(Object(F.a)(Object(F.a)({},e.whiteFont),e.raleway),e.pushCenter),children:"eShop Store"})})})},D=n(188),W=n(197),N=function(){var e=T(b);return Object(_.jsxs)(D.a,{container:!0,alignItems:"center",direction:"column",sx:e.barMargin,children:[Object(_.jsxs)(D.a,{item:!0,sx:{m:3},children:[Object(_.jsx)(k.a,{component:"h1",variant:"h1",color:"primary",align:"center",children:"404"}),Object(_.jsx)(k.a,{component:"h2",variant:"h5",align:"center",children:"Page Not Found!"})]}),Object(_.jsx)(W.a,{variant:"contained",color:"primary",component:r.b,to:"/",sx:e.whiteFont,children:"go back home"})]})},q=n(198),M=n(200),U=n(178),z=function(e,t,n,r){return e[n]>t[n]?r?-1:1:r?1:-1},H={USD:"$"},A=1e3,G=["black","white","cyan","silver","gold","lavender","orchid","maroon","yellow","mint green","fuchsia","ivory","teal","blue","red","green","olive","orange","salmon","indigo","azure","turquoise","purple","magenta","plum","pink","violet","grey","sky blue","lime","tan"],Q=["Price: Low to High","Price: High to Low","Customer Rating"],X=n(98),B=n.n(X),$=n(14),V=function(e){var t=e.children,n=Object(c.useState)(t.length>8?8:t.length),r=Object($.a)(n,2),i=r[0],a=r[1],o=Object(c.useRef)(t),s=Object(c.useCallback)((function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(t.length>i+8?a(i+8):a(t.length))}),[i,t.length]);return Object(c.useEffect)((function(){return document.body.offsetHeight<window.innerHeight&&i!==t.length&&a(i+1),o.current!==t&&(o.current=t,a(t.length>8?8:t.length)),window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[s,i,t]),Object(_.jsx)(_.Fragment,{children:t.slice(0,i)})},J=n(194),Y=n(182),K=function(e){var t=e.product,n=T(b),r=t.name.split(" ",1)[0],c=t.name.replace(r,"");return Object(_.jsx)(D.a,{item:!0,margin:1,xs:!0,sx:n.maxWidthMD,children:Object(_.jsxs)(J.a,{"aria-label":"product",elevation:3,children:[Object(_.jsx)(D.a,{container:!0,justifyContent:"center",children:Object(_.jsx)("img",{src:t.image,alt:"Product",style:Object(F.a)({},n.productCardImg)})}),Object(_.jsx)(k.a,{align:"center",component:"h2",variant:"label",sx:n.raleway,children:r}),c&&Object(_.jsx)(k.a,{margin:.5,align:"center",component:"h3",variant:"label",sx:n.raleway,children:c}),Object(_.jsx)(k.a,{align:"center",component:"h2",variant:"h6",color:"error",margin:1,children:"".concat(H[t.currency]).concat(t.price)}),Object(_.jsx)(k.a,{align:"center",margin:1,children:Object(_.jsx)(Y.a,{value:t.rating,readOnly:!0})}),Object(_.jsx)(W.a,{variant:"contained",sx:n.whiteFont,fullWidth:!0,children:"view item"})]})})},Z=n(191),ee=n(177),te=n(183),ne=n(185),re=n(16),ce=function(e,t,n){for(var r=e;window.innerWidth<r*t+n;)r--;return r<=0?1:r},ie=function(e,t){for(var n=Object(re.a)(e),r=[];n.length>0;)r.push(n.splice(0,t));return r},ae=function(e,t){return e.map((function(e){return t?e*A/100:100*e/A}))},oe=n(199),se=n(95),le=n.n(se),ue=function(e){var t=e.onClick;return Object(_.jsx)(q.a,{margin:1,children:Object(_.jsx)(oe.a,{label:"Clear",onClick:t,control:Object(_.jsx)(M.a,{color:"error",children:Object(_.jsx)(le.a,{})})})})},je=E((function(e){var t=e.priceField,n=e.setPriceField,r=T(b),i=Object(c.useState)(ae(t)),a=Object($.a)(i,2),o=a[0],s=a[1],l=function(e,r){var c=e.target.value,i=function(e,t,n){var r=Object(re.a)(e);return t>=0?1===n?(Number(r[0])>Number(t)&&(r[0]=0),r[1]=t>A?A:t,r):(Number(t)>Number(r[1])?r[0]=r[1]:r[0]=t,r):e}(t,c,r);n(i),s(ae(t))};return Object(_.jsxs)(q.a,{margin:1,children:[Object(_.jsx)(k.a,{margin:1,children:"Price range"}),Object(_.jsxs)(D.a,{container:!0,children:[Object(_.jsx)(te.a,{"aria-label":"from $",label:"From ($)",variant:"outlined",type:"number",min:0,value:t[0],onChange:function(e){return l(e,0)},sx:Object(F.a)(Object(F.a)({},r.widthXS),{},{m:1})}),Object(_.jsx)(te.a,{"aria-label":"to $",label:"To ($)",variant:"outlined",type:"number",min:0,value:t[1],onChange:function(e){return l(e,1)},sx:Object(F.a)(Object(F.a)({},r.widthXS),{},{m:1})})]}),Object(_.jsx)(ne.a,{getAriaLabel:function(){return"money range"},value:o,onChange:function(e,t){s(t),n(ae(o,!0))},sx:Object(F.a)(Object(F.a)({},r.widthSM),{},{m:2})}),!(0===o[0]&&100===o[1])&&Object(_.jsx)(ue,{onClick:function(){s([0,100]),n([0,A])}})]})})),de=n(190),be=n(186),Oe=n(203),he=n(184),ge=n(179),fe=n(189),xe=E((function(e){var t=e.selectedColors,n=e.setSelectedColors,r=T(b);return Object(_.jsxs)(q.a,{margin:1,children:[Object(_.jsx)(k.a,{margin:1,children:"Color"}),Object(_.jsxs)(Oe.a,{sx:Object(F.a)(Object(F.a)({},r.widthSM),{},{m:1}),children:[Object(_.jsx)(he.a,{children:"Selected"}),Object(_.jsx)(ge.a,{multiple:!0,value:t,onChange:function(e){n(e.target.value)},input:Object(_.jsx)(fe.a,{label:"Selected"}),renderValue:function(){return Object(_.jsx)(q.a,{sx:Object(F.a)(Object(F.a)(Object(F.a)(Object(F.a)({},r.capitalize),r.flex),r.wrap),{},{gap:.5}),children:t.map((function(e){return Object(_.jsx)(de.a,{label:e},e)}))})},children:G.map((function(e){return Object(_.jsx)(be.a,{value:e,style:r.capitalize,sx:t.includes(e)?r.grayFont:null,children:e},e)}))})]}),0!==t.length&&Object(_.jsx)(ue,{onClick:function(){return n([])}})]})})),pe=E((function(e){var t=e.selectedRating,n=e.setSelectedRating,r=T(b);return Object(_.jsxs)(q.a,{margin:1,children:[Object(_.jsx)(k.a,{margin:1,children:"Average rating"}),Object(_.jsx)(q.a,{sx:{mt:2},children:[5,4,3,2,1].map((function(e){return Object(_.jsxs)(D.a,{container:!0,alignItems:"center",margin:1,style:r.fit,sx:r.pointer,onClick:function(){return n(e)},children:[Object(_.jsx)(Y.a,{value:e,readOnly:!0,color:"primary"}),Object(_.jsx)(k.a,{style:t===e?r.grayFont:null,children:"\xa0 & UP"})]},e)}))}),0!==t&&Object(_.jsx)(ue,{onClick:function(){return n(0)}})]})})),me=function(e){var t=e.open,n=e.setOpen,r=T(b);return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(Z.a,{open:t,onClose:function(){return n(!1)},variant:window.innerWidth<450?"temporary":"persistent",sx:t?r.drawer:null,children:Object(_.jsxs)(q.a,{sx:Object(F.a)(Object(F.a)({},r.barMargin),{},{overflowY:"auto"}),children:[Object(_.jsx)("div",{style:r.flexEnd,children:Object(_.jsx)(M.a,{"aria-label":"back",color:"inherit",onClick:function(){return n(!1)},sx:{m:1},children:Object(_.jsx)(ee.a,{})})}),Object(_.jsx)(je,{}),Object(_.jsx)(U.a,{}),Object(_.jsx)(xe,{}),Object(_.jsx)(U.a,{}),Object(_.jsx)(pe,{})]})})})},ye=E((function(e){var t=e.sort,n=e.setSort,r=T(b);return Object(_.jsx)(q.a,{sx:r.pushRight,children:Object(_.jsxs)(Oe.a,{sx:Object(F.a)(Object(F.a)({},r.widthSM),{},{m:2}),children:[Object(_.jsx)(he.a,{children:"Sort"}),Object(_.jsx)(ge.a,{value:t,onChange:function(e){n(e.target.value)},input:Object(_.jsx)(fe.a,{label:"Sort"}),children:Q.map((function(e){return Object(_.jsx)(be.a,{value:e,sx:t===e?r.grayFont:null,children:e},e)}))})]})})})),ve=n(97),Ce=n.n(ve),we=function(e){var t=e.category,n=T(b),c=Object(s.g)().pathname.includes("/cataloge/category/".concat(t.id));return Object(_.jsxs)(D.a,{item:!0,component:r.b,margin:1,to:"/cataloge/category/".concat(t.id),sx:Object(F.a)({ml:3,mr:3},c?{transition:"transform 0.25s"}:Object(F.a)(Object(F.a)({},n.spin),n.pointer)),children:[Object(_.jsx)("img",{alt:t.name,src:t.image,style:n.categoryCircle}),Object(_.jsx)(k.a,{component:"h6",color:"initial",align:"center",margin:1,sx:c?n.grayFont:null,children:t.name})]},t.id)},Se=function(e){var t=e.categories,n=Object(c.useState)(!1),r=Object($.a)(n,2),i=r[0],a=r[1];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Z.a,{open:i,anchor:"bottom",onClose:function(){return a(!1)},children:Object(_.jsx)(D.a,{container:!0,justifyContent:"center",sx:{p:1,maxHeight:350},children:t.map((function(e){return Object(_.jsx)(we,{category:e},e.id)}))})}),Object(_.jsx)(M.a,{"aria-label":"category",onClick:function(){return a(!0)},children:Object(_.jsx)(Ce.a,{})})]})},Ee=n(204),Fe=function(e){var t=e.children,n=e.elementWidth,r=e.extraWidth,i=T(b),a=Object(c.useRef)(r),o=Object(c.useState)(ce(t.length,n,r?144+r:144)),s=Object($.a)(o,2),l=s[0],u=s[1],j=Object(c.useState)(ie(t,l)),d=Object($.a)(j,2),O=d[0],h=d[1],g=Object(c.useState)(0),f=Object($.a)(g,2),x=f[0],p=f[1],m=function(){var e=ce(t.length,n,r?144+r:144);u(e),h(ie(t,e)),p(0)};return Object(c.useEffect)((function(){return a.current!==r&&(a.current=r,m()),window.addEventListener("resize",m),function(){window.removeEventListener("resize",m)}})),0!==t.length?Object(_.jsxs)(D.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(_.jsx)(D.a,{item:!0,margin:2,children:Object(_.jsx)(M.a,{"aria-label":"back",color:"inherit",disabled:0===x,onClick:function(){return p(x-1)},children:Object(_.jsx)(ee.a,{})})}),Object(_.jsx)(D.a,{container:!0,sx:i.fit,children:O[x]}),Object(_.jsx)(D.a,{item:!0,margin:2,children:Object(_.jsx)(M.a,{"aria-label":"back",color:"inherit",disabled:x===O.length-1,onClick:function(){return p(x+1)},sx:i.flipX,children:Object(_.jsx)(ee.a,{})})})]}):null},Pe=function(e){var t=e.categories,n=e.isCategoriesPending,r=e.isFilterOpen;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(D.a,{container:!0,justifyContent:"center",sx:{mt:2},children:n?Object(_.jsx)(D.a,{item:!0,margin:1,children:Object(_.jsx)(Ee.a,{})}):Object(_.jsx)(Fe,{elementWidth:130,extraWidth:r?280:0,children:t.map((function(e){return Object(_.jsx)(we,{category:e},e.id)}))})}),Object(_.jsx)(U.a,{})]})},Re=E((function(e){var t=e.categories,n=e.isCategoriesPending,r=e.products,i=e.isProductsPending,a=e.isFilterOpen,o=e.setIsFilterOpen,s=e.sort,l=e.priceField,j=e.selectedColors,d=e.selectedRating,O=e.match.params.id,h=T(b),g=Object(c.useRef)(0);return isNaN(Number(O))||O>t.length&&0!==t.length?Object(_.jsx)(N,{}):Object(_.jsxs)(q.a,{sx:h.flex,children:[Object(_.jsx)(me,{open:a,setOpen:o}),Object(_.jsxs)(q.a,{sx:Object(F.a)(Object(F.a)({},h.barMargin),h.fullWidth),children:[window.innerWidth>450?Object(_.jsx)(Pe,{categories:t,isCategoriesPending:n,isFilterOpen:a}):null,Object(_.jsxs)(R.a,{children:[Object(_.jsx)(M.a,{"aria-label":"filter",color:a?"primary":"default",onClick:function(){return o(!a)},children:Object(_.jsx)(B.a,{})}),window.innerWidth<=450?Object(_.jsx)(Se,{categories:t}):null,Object(_.jsx)(ye,{})]}),Object(_.jsx)(U.a,{}),Object(_.jsx)(R.a,{children:Object(_.jsxs)(k.a,{sx:{ml:1},variant:"h6",children:["(",g.current,") Items"]})}),Object(_.jsx)(D.a,{container:!0,padding:2,gap:.5,sx:h.pageContainer,children:i?Object(_.jsx)(u.a,{}):Object(_.jsx)(V,{children:function(){var e=r.filter((function(e){return function(e,t,n){if(n===e[t])return!0}(e,"categoryId",Number(O))}));switch(0!==j.length&&(e=e.filter((function(e){return function(e,t){if(t.includes(e.color))return!0}(e,j)}))),0!==d&&(e=e.filter((function(e){return function(e,t){if(e.rating>=t)return!0}(e,d)}))),0===l[0]&&l[1]===A||(e=e.filter((function(e){return function(e,t){if(e.price>=t[0]&&e.price<=t[1])return!0}(e,l)}))),g.current=e.length,s){case"Price: High to Low":return e.sort((function(e,t){return z(e,t,"price",!0)}));case"Customer Rating":return e.sort((function(e,t){return z(e,t,"rating",!0)}));default:return e.sort((function(e,t){return z(e,t,"price")}))}}().map((function(e){return Object(_.jsx)(K,{product:e},e.id)}))})})]})]})}));var ke=E((function(e){var t=Object(s.g)(),n=e.requestCategories,r=e.requestProducts,i=e.isCategoriesPending,a=e.products,o=e.categories;return Object(c.useEffect)((function(){0===a.length&&r(),0===o.length&&n()}),[n,r,o.length,a.length]),Object(_.jsxs)(l.a,{theme:b,children:[Object(_.jsx)(L,{}),i&&Object(_.jsx)(u.a,{}),0===o.length||"/"!==t.pathname&&"/cataloge/"!==t.pathname?null:Object(_.jsx)(s.a,{to:"/cataloge/category/".concat(o[0].id)}),Object(_.jsx)(j,{}),Object(_.jsxs)(s.d,{location:t,children:[Object(_.jsx)(s.b,{exact:!0,path:"/"}),Object(_.jsx)(s.b,{exact:!0,path:"/cataloge"}),Object(_.jsx)(s.b,{exact:!0,path:"/cataloge/category/:id",component:Re}),Object(_.jsx)(s.b,{component:N})]})]})})),Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},Te=n(59),_e=n(99),Le={isPending:!1,categories:[],error:""},De={isPending:!1,products:[],error:""},We={isFilterOpen:!1},Ne={sortValue:"Price: Low to High"},qe={priceField:[0,A]},Me={selectedColors:[]},Ue={selectedRating:0},ze=Object(Te.b)({requestCategories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return Object(F.a)(Object(F.a)({},e),{},{isPending:!0});case h:return Object(F.a)(Object(F.a)({},e),{},{isPending:!1,categories:t.payload});case g:return Object(F.a)(Object(F.a)({},e),{},{isPending:!1,error:t.payload});default:return e}},requestProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object(F.a)(Object(F.a)({},e),{},{isPending:!0});case x:return Object(F.a)(Object(F.a)({},e),{},{isPending:!1,products:t.payload});case p:return Object(F.a)(Object(F.a)({},e),{},{isPending:!1,error:t.payload});default:return e}},setIsFilterOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===m?Object(F.a)(Object(F.a)({},e),{},{isFilterOpen:t.payload}):Object(F.a)({},e)},setSort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===y?Object(F.a)(Object(F.a)({},e),{},{sortValue:t.payload}):Object(F.a)({},e)},setPriceField:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===v?Object(F.a)(Object(F.a)({},e),{},{priceField:t.payload}):Object(F.a)({},e)},setSelectedColors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===C?Object(F.a)(Object(F.a)({},e),{},{selectedColors:t.payload}):Object(F.a)({},e)},setSelectedRating:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===w?Object(F.a)(Object(F.a)({},e),{},{selectedRating:t.payload}):Object(F.a)({},e)}}),He=ze,Ae=Object(Te.c)(He,Object(Te.a)(_e.a));n(131);o.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(S.a,{store:Ae,children:Object(_.jsx)(r.a,{children:Object(_.jsx)(ke,{})})})}),document.getElementById("root")),Ie()}},[[132,1,2]]]);
//# sourceMappingURL=main.0f48c664.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{192:function(t,e,i){"use strict";i(207)},193:function(t,e,i){"use strict";e.a=(t,e)=>new Promise((i=>{const s="object"==typeof window&&window.storefront;if(s){const o=()=>{let o=s.info&&s.info[t];return!!(o&&(e&&(o=o[e]),o&&Object.keys(o).length))&&(i(o),!0)};o()||s.on(`info:${t}`,o)}}))},194:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return a}));i(8);var s=i(40);const o=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.a;const i=e.getCustomer().favorites||[],o=a(t,e);if(o){const e=i.indexOf(t);i.splice(e,1)}else i.push(t);return e.requestApi("/me.json","patch",{favorites:i}),!o},a=(t,e)=>{const{favorites:i}=e.getCustomer();return i&&i.includes(t)}},204:function(t,e,i){"use strict";i(3),i(17);var s={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((t=>{let{path:e}=t;return e===this.href}))))}}},o=i(65),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},205:function(t,e,i){"use strict";var s=i(36),o=i(54),a=i(39),r=i(55),n=i(104),c=i(193);const l=(t,e)=>{const{type:i,value:s}=e;let o;if(s)return o="percentage"===i?t*(100-s)/100:t-s,o>0?o:0};var u={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""},canShowPriceOptions:{type:Boolean,default:!0}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0,min_amount:0},discountLabel:this.discountText,pointsProgramName:null,pointsMinPrice:0,earnPointsFactor:0}},computed:{i19asOf:()=>Object(o.a)(s.r),i19from:()=>Object(o.a)(s.Gb),i19interestFree:()=>Object(o.a)(s.Ub),i19of:()=>Object(o.a)(s.Gc),i19to:()=>Object(o.a)(s.de),i19upTo:()=>Object(o.a)(s.oe),i19youEarn:()=>Object(o.a)(s.xe),price(){const t=Object(a.a)(this.product);return this.extraDiscount.value&&(!this.extraDiscount.min_amount||t>this.extraDiscount.min_amount)?l(t,this.extraDiscount):t},comparePrice(){return Object(r.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(a.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const e=Object(a.a)(this.product);for(let i=0;i<t.length;i++){if(Object(a.a)({...this.product,...t[i]})>e)return!0}}return!1},priceWithDiscount(){return this.canShowPriceOptions&&l(this.price,this.discount)},installmentValue(){if(this.canShowPriceOptions&&this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:n.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,i=parseInt(this.price/e,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel=`via ${t.label}`))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){this.canShowPriceOptions&&(this.discountOption?this.updateDiscount(this.discountOption):Object(c.a)("apply_discount").then((t=>{t.available_extra_discount&&(this.extraDiscount=t.available_extra_discount)})),this.installmentsOption?this.updateInstallments(this.installmentsOption):Object(c.a)("list_payments").then((t=>{this.updateInstallments(t.installments_option),this.updateDiscount(t.discount_option);const e=t.loyalty_points_programs;this.isLiteral&&e&&this.$nextTick((()=>{for(const t in e){const i=e[t];if(i&&i.earn_percentage>0){this.pointsMinPrice=i.min_subtotal_to_earn,this.pointsProgramName=i.name,this.earnPointsFactor=i.earn_percentage/100;break}}}))})))}},d=(i(192),i(65)),h=Object(d.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?i("span",{staticClass:"prices__compare"},[t.isLiteral?[i("small",[t._v(" "+t._s(t.i19from)+" ")]),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),i("small",[t._v(" "+t._s(t.i19to)+" ")])]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),i("strong",{staticClass:"prices__value"},[t.hasVariedPrices?i("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" ")]),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.earnPointsFactor>0&&!(t.pointsMinPrice>t.price)?i("div",{key:"points",staticClass:"prices__points"},[i("i",{staticClass:"i-check-circle"}),t._v(" "+t._s(t.i19youEarn)+" "),i("span",[t._v(" +"+t._s((t.earnPointsFactor*t.price).toFixed(1))+" ")]),i("em",[t._v(t._s(t.pointsProgramName))])]):t._e(),t.installmentsNumber>1&&t.installmentValue?i("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?i("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?i("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),i("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?i("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),i("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[i("small",[t._v(" "+t._s(t.i19asOf)+" ")]),i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=h.exports},206:function(t,e,i){"use strict";i(8),i(37);var s=i(35),o=i(117),a=i(63);var r={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[s.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],imgWidth:0,imgHeight:0,height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(o.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:i}=this;if(i)return i;const s="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return s?s.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:i}=this;return t||(e?i.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:i}=this.$el,s=((t,e,i,s)=>{let o,a;for(const r in s){const n=s[r];if(void 0!==n&&t[r]){if(void 0!==a)if(null===n){if(a>=e)continue}else if(n<e||n-50<=i||null!==a&&n>a)continue;o=r,a=n}}return o})(this.src,t,i,this.containerBreakpoints),o=this.src[s],{url:a,size:r}=o||this.defaultImgObj;e=a,r&&([this.imgWidth,this.imgHeight]=r.split("x").map((t=>parseInt(t,10))),t&&this.imgHeight&&this.canCalcHeight&&(this.height=(t>=this.imgWidth?this.imgHeight:t*this.imgHeight/this.imgWidth)+"px"))}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/"+(".png"===e.substr(-9,4)?"png":"jpeg")}):e.endsWith(".avif")?t.push({srcset:e,type:"image/avif"},{srcset:e.replace(".avif",".webp"),type:"image/webp"}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(a.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,i="IMG"===t.tagName?t:t.lastChild;i.style.opacity=0,this.imgHeight&&(i.height=this.imgHeight,i.width=this.imgWidth),i.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const i=document.createElement("IMG");i.src=e,t.parentNode.insertBefore(i,t.nextSibling)},i.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=i.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},n=(i(192),i(65)),c=Object(n.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var s=t.srcset,o=t.type;return i("source",{key:e,attrs:{srcset:s,type:o}})})):i("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},207:function(t,e,i){var s=i(236);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(191).default)("083be3a1",s,!0,{})},208:function(t,e,i){"use strict";var s=i(195),o=i(36),a=i(54),r=i(39),n=i(33),c=i(108),l=i(55),u=i(38),d=i(5),h=i(10),p=i(204),m=i(206),b=i(205),g=i(40),_=i(194);const f=(t,e)=>{if("object"==typeof window){t=`productCard${t}Html`;const i="function"==typeof window[t]?window[t](e):window[t];if("string"==typeof i)return i}};var y={name:"ProductCard",components:{ALink:p.a,APicture:m.a,APrices:b.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},ecomPassport:{type:Object,default:()=>g.a},accountUrl:{type:String,default:"/app/#/account/"},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,isFavorite:!1,error:""}),computed:{i19addToFavorites:()=>Object(a.a)(o.m),i19outOfStock:()=>Object(a.a)(o.Sc),i19unavailable:()=>Object(a.a)(o.je),i19uponRequest:()=>"Sob consulta",isWithoutPrice(){return!Object(r.a)(this.body)},ratingHtml(){return f("Rating",this.body)},buyHtml(){return f("Buy",this.body)},footerHtml(){return f("Footer",this.body)},name(){return Object(n.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(a.a)(o.z)},isInStock(){return Object(c.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},isLogged:()=>g.a.checkAuthorization(),discount(){const{body:t}=this;return Object(l.a)(t)?Math.round(100*(t.base_price-Object(r.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records,this.isFavorite=Object(_.a)(this.body._id,this.ecomPassport)},fetchItem(){this.productId&&(this.isLoading=!0,Object(d.g)({url:`/products/${this.productId}.json`}).then((t=>{let{data:e}=t;this.$emit("update:product",e),this.setBody(e),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(a.a)(o.W))})).finally((()=>{this.isLoading=!1})))},toggleFavorite(){this.isLogged&&(this.isFavorite=Object(_.b)(this.body._id,this.ecomPassport))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(d.g)({url:`/products/${t._id}.json`}).then((e=>{let{data:s}=e;const o=["variations","customizations","kit_composition"];for(let t=0;t<o.length;t++){const e=s[o[t]];if(e&&e.length)return Promise.all([i.e(0),i.e(2),i.e(3),i.e(19),i.e(46)]).then(i.bind(null,473)).then((t=>{new u.a({render:e=>e(t.default,{props:{product:s}})}).$mount(this.$refs.quickview)}))}const{quantity:a,price:r}=s;h.a.addProduct({...t,quantity:a,price:r})})).catch((e=>{console.error(e),window.location=`/${t.slug}`})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},v=(i(192),i(65)),A=Object(v.a)(y,s.a,s.b,!1,null,null,null);e.a=A.exports},235:function(t,e,i){"use strict";var s=i(24),o=i(66),a=i(23),r=i(7),n=i(42),c=TypeError;s({target:"Iterator",proto:!0,real:!0},{reduce:function(t){r(this),a(t);var e=n(this),i=arguments.length<2,s=i?void 0:arguments[1],l=0;if(o(e,(function(e){i?(i=!1,s=e):s=t(s,e,l),l++}),{IS_RECORD:!0}),i)throw new c("Reduce of empty iterator with no initial value");return s}})},236:function(t,e,i){(e=i(190)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"empty.scss"}]),t.exports=e},238:function(t,e,i){"use strict";i.r(e);i(3),i(17),i(15),i(235);var s=i(39),o=i(104),a=i(112),r=i(5),n=i(10),c=i(79),l=i(205),u=i(208);const d="object"==typeof window&&window.storefront||{};var h={name:"BuyTogether",components:{APrices:l.a,ProductCard:u.a},props:{baseProduct:{type:Object,default:()=>d.context&&d.context.body||{}},ecomCart:{type:Object,default:()=>n.a},productCardProps:{type:Object,default:()=>({isSmall:!0})},fallbackMatchType:{type:String,default:"object"==typeof window&&window.ecomRecommendationsType||"recommended"}},data:()=>({ecomSearch:(new c.a).mergeFilter({range:{quantity:{gt:0}}}).mergeFilter({term:{available:!0}}),hasLoadedIds:!1,hasLoadedItems:!1,productQnts:{},recommendedItems:[],discount:0,discountType:"fixed",discountValue:0}),computed:{i19buyTogether:()=>"Compre junto",i19buyTogetherWith:()=>"Compre junto com",items(){return[this.baseProduct,...this.recommendedItems]},productIds(){return Object.keys(this.productQnts)},relatedProducts(){const t=this.baseProduct.related_products&&this.baseProduct.related_products[0];return t&&t.product_ids.length?t.product_ids:[]},subtotal(){return this.items.reduce(((t,e)=>t+(this.productQnts[e._id]||1)*Object(s.a)(e)),0)},canAddToCart(){return!this.items.find((t=>t.variations||t.customizations||t.kit_composition))}},methods:{formatMoney:o.a,buy(){const t=(this.subtotal-this.discount)/this.subtotal;this.items.forEach((e=>{const i=this.ecomCart.parseProduct({...e,base_price:Object(s.a)(e),price:Object(s.a)(e)*t,price_effective_date:{}});i.quantity=this.productQnts[e._id]||1,i.keep_item_quantity=!0,this.ecomCart.addItem(i)}))},calcDiscount(){"fixed"===this.discountType?this.discount=this.discountValue:this.discount=this.subtotal*this.discountValue/100},setProductQnts(t){if(t.length){const e={};t.slice(0,3).forEach((t=>{e[t]=1})),this.productQnts=e}},fetchItems(){this.productIds.length?(this.ecomSearch.setProductIds(this.productIds),delete this.ecomSearch.dsl.aggs,this.ecomSearch.fetch().then((()=>{this.recommendedItems=this.recommendedItems.concat(this.ecomSearch.getItems())})).finally((()=>{this.hasLoadedItems=!0}))):this.hasLoadedItems=!0}},watch:{subtotal:{handler(t,e){t!==e&&this.calcDiscount()},immediate:!0}},created(){if(this.baseProduct&&this.baseProduct._id){const t=n.a.parseProduct((t=>{const e=Object.assign({},t);return delete e.body_html,delete e.body_text,delete e.specifications,delete e.inventory_records,delete e.price_change_records,e})(this.baseProduct)),e=Object(s.a)(t)*t.quantity;Object(r.c)({url:"/apply_discount.json",method:"POST",data:{amount:{subtotal:e,total:e,discount:0},items:[t]}}).then((t=>{let{data:e}=t;for(let t=0;t<e.result.length;t++){const{validated:i,error:s,response:o}=e.result[t];if(i&&!s&&o.buy_together){const t=o.buy_together.sort(((t,e)=>t.products&&t.products.length?e.products&&e.products.length?t.products.length<=e.products.length&&t.discount.value>=e.discount.value?-1:0:-1:1));if(t[0]){const{products:e,discount:i}=t[0];this.productQnts=e||[],this.discountType=i.type,this.discountValue=i.value,this.$nextTick((()=>{this.calcDiscount()}))}}}})).finally((()=>{this.hasLoadedIds=!0,this.$nextTick((()=>{this.productIds.length?this.fetchItems():this.relatedProducts.length?(this.setProductQnts(this.relatedProducts),this.fetchItems()):this.fallbackMatchType&&Object(r.b)({url:`/products/${this.baseProduct._id}/${this.fallbackMatchType}.json`}).then((t=>{let{data:e}=t;this.setProductQnts(Object(a.a)(e)),this.$nextTick((()=>{this.fetchItems()}))}))}))}))}}},p=(i(369),i(65)),m=Object(p.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"buy-together"},[i("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.hasLoadedItems&&t.recommendedItems.length?i("div",[i("div",{staticClass:"buy-together__title"},[i("div",{staticClass:"buy-together__discount lead mb-3"},[t._v(" "+t._s(t.i19buyTogether)+" "),t.discount?i("span",{staticClass:"badge badge-success"},[t._v(" "+t._s(t.formatMoney(t.discount))+" "),i("span",[t._v("OFF")])]):t._e()])]),i("div",{staticClass:"buy-together__row row"},[i("div",{staticClass:"col-12",class:t.productIds.length>1?"col-md":"col-md-6 col-lg-4"},[i("div",{staticClass:"row"},t._l(t.items,(function(e){return t.items.length?i("div",{key:e._id,staticClass:"buy-together__item col-12",class:"col-md-"+12/t.items.length},[i("product-card",t._b({attrs:{product:e,productId:e._id,"is-loaded":!0}},"product-card",t.productCardProps,!1))],1):t._e()})),0)]),i("div",{staticClass:"buy-together__cta col-auto"},[i("a-prices",{attrs:{product:{price:t.subtotal-t.discount,base_price:t.subtotal},"is-literal":!0,"is-big":!0}}),t.canAddToCart?i("button",{staticClass:"btn btn-lg btn-primary mt-3",on:{click:t.buy}},[i("i",{staticClass:"i-shopping-basket mr-1"}),t._v(" "+t._s(t.i19buyTogether)+" ")]):t._e()],1)])]):t._e()]),i("transition",{attrs:{"leave-active-class":"animated fadeOut"}},[t.hasLoadedItems?t._e():t._t("default")],2)],1)}),[],!1,null,null,null);e.default=m.exports},304:function(t,e,i){var s=i(370);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(191).default)("718c747a",s,!0,{})},369:function(t,e,i){"use strict";i(304)},370:function(t,e,i){(e=i(190)(!0)).push([t.i,'.buy-together__title{text-align:center}.buy-together__row{align-items:center;justify-content:center}.buy-together__item{margin:0 auto;max-width:275px;padding-bottom:2rem!important}.buy-together__item:after{content:"+";font-size:1.5rem;position:absolute;right:50%}.buy-together__item:last-child:after{content:"="}@media(min-width:767px){.buy-together__item{max-width:none;padding-left:var(--spacer-2);padding-right:var(--spacer-2)}.buy-together__item:after{right:0;top:50%}}',"",{version:3,sources:["BuyTogether.scss"],names:[],mappings:"AAAA,qBAAqB,iBAAiB,CAAC,mBAAmB,kBAAkB,CAAC,sBAAsB,CAAC,oBAAoB,aAAa,CAAC,eAAe,CAAC,6BAA6B,CAAC,0BAA0B,WAAW,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,SAAS,CAAC,qCAAqC,WAAW,CAAC,wBAAwB,oBAAoB,cAAc,CAAC,4BAA4B,CAAC,6BAA6B,CAAC,0BAA0B,OAAO,CAAC,OAAO,CAAC",file:"BuyTogether.scss",sourcesContent:['.buy-together__title{text-align:center}.buy-together__row{align-items:center;justify-content:center}.buy-together__item{margin:0 auto;max-width:275px;padding-bottom:2rem!important}.buy-together__item:after{content:"+";font-size:1.5rem;position:absolute;right:50%}.buy-together__item:last-child:after{content:"="}@media(min-width:767px){.buy-together__item{max-width:none;padding-left:var(--spacer-2);padding-right:var(--spacer-2)}.buy-together__item:after{right:0;top:50%}}']}]),t.exports=e}}]);
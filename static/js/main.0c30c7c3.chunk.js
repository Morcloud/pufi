(this.webpackJsonppufi=this.webpackJsonppufi||[]).push([[0],{10:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(4),n=c.n(i),l=c(2),r=c(8),o=c(9),j=c(12),d=[{image:"",title:"Pufi RAIN",description:"Descripci\xf3n del producto. Este es un texto simulado",moreInfo:"ver m\xe1s",buttonToggle:!0},{image:"",title:"Pufi PUFF",description:"Descripci\xf3n del producto. Este es un texto simulado",moreInfo:"ver m\xe1s",buttonToggle:!1},{image:"",title:"Pufi CART",description:"Descripci\xf3n del producto. Este es un texto simulado",moreInfo:"ver m\xe1s",buttonToggle:!1},{image:"",title:"Pufi NAP",description:"Descripci\xf3n del producto. Este es un texto simulado",moreInfo:"m\xe1s info",buttonToggle:!1}],p=Object(r.a)({form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{email:"",valid:!1},t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;if("verifyEmail"===c){var a=/[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?\xbf!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/;return Object(o.a)(Object(o.a)({},e),{},{valid:a.test(s)})}return e},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;return"addProduct"===c?[].concat(Object(j.a)(e),[{image:s.image,title:s.title,description:s.description,buttonToggle:s.buttonToggle}]):e}}),A=Object(r.b)(p,window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()),m=c.p+"static/media/pufi.eca7ad43.png",f=c.p+"static/media/pufi-puff.fe4dacc7.png",b=c.p+"static/media/umbrella.a50a10ec.png",O=c.p+"static/media/cart.e5e61327.png",g=c.p+"static/media/nap.fa74e115.png",u=(c(24),c(0)),h=function(){return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("figure",{className:"header__logo",children:Object(u.jsx)("img",{src:m,alt:"Logo pufi"})}),Object(u.jsx)("nav",{className:"header__nav",children:Object(u.jsxs)("ul",{className:"nav__list",children:[Object(u.jsxs)("li",{className:"nav__list--item",children:[Object(u.jsx)("img",{src:f,alt:""}),Object(u.jsx)("a",{href:"/",children:"pufi puff"})]}),Object(u.jsxs)("li",{className:"nav__list--item",children:[Object(u.jsx)("img",{src:b,alt:""}),Object(u.jsx)("a",{href:"/",children:"pufi rain"})]}),Object(u.jsxs)("li",{className:"nav__list--item",children:[Object(u.jsx)("img",{src:O,alt:""}),Object(u.jsx)("a",{href:"/",children:"pufi cart"})]}),Object(u.jsxs)("li",{className:"nav__list--item",children:[Object(u.jsx)("img",{src:g,alt:""}),Object(u.jsx)("a",{href:"/",children:"pufi nap"})]})]})}),Object(u.jsxs)("div",{className:"header__menu",children:[Object(u.jsxs)("p",{children:["mi cuenta ",Object(u.jsx)("i",{className:"fas fa-angle-down"})]}),Object(u.jsx)("p",{children:"mi compra"})]})]})},x=(c(26),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{className:"hero",children:[Object(u.jsx)(h,{}),Object(u.jsxs)("h1",{className:"hero__title",children:["est\xe1r c\xf3modo,",Object(u.jsx)("br",{})," nunca fue tan facil."]}),Object(u.jsx)("button",{className:"hero__button",children:"shop"}),Object(u.jsxs)("div",{className:"hero__slides",children:[Object(u.jsx)("input",{type:"radio",className:"hero__slides--element"}),Object(u.jsx)("input",{type:"radio",className:"hero__slides--element"}),Object(u.jsx)("input",{type:"radio",className:"hero__slides--element"})]})]})})}),N=function(e){var t=e.cover,c=e.imageProduct,s=e.title,a=e.description,i=e.buttonToggle,n=e.moreInfo;return Object(u.jsxs)("article",{className:"product",children:[Object(u.jsx)("div",{className:"product__cover",style:{backgroundImage:"url(".concat(t,")")},children:i&&Object(u.jsx)("div",{className:"product__cover--button",children:"shop"})}),Object(u.jsxs)("div",{className:"product__details",children:[c?Object(u.jsx)("figure",{className:"product__details--image",children:Object(u.jsx)("img",{src:c,alt:"Imagen del producto"})}):Object(u.jsx)("p",{className:"product__details--fail",children:"No hay imagen disponible :("}),Object(u.jsx)("p",{className:"product__details--title",children:s}),Object(u.jsx)("div",{className:"product__details--divider"}),Object(u.jsx)("p",{className:"product__details--description",children:a}),Object(u.jsxs)("p",{className:"product__details--see-more",children:[Object(u.jsx)("i",{className:"fas fa-angle-right"}),Object(u.jsx)("span",{children:n})]})]})]})},v=c.p+"static/media/p-rain.a2758d26.png",I=c.p+"static/media/p-puff.5bea480c.png",Z=c.p+"static/media/p-cart.98b93122.png",C=c.p+"static/media/p-nap.41f7f76c.png",B=c.p+"static/media/p-rain-cover.ab3c0d0c.jpg",S=c.p+"static/media/p-puff-cover.cf96bbf3.jpg",k=c.p+"static/media/p-cart-cover.15c8dfb4.jpeg",E=c.p+"static/media/p-nap-cover.3875b1a5.jpg",U=(c(27),[v,I,Z,C]),X=[B,S,k,E],q=Object(l.b)((function(e){return{product:e.product}}))((function(e){var t=e.product;return Object(u.jsx)("section",{className:"product-list",children:t.map((function(e,t){return Object(u.jsx)(N,{cover:X[t],imageProduct:U[t],title:e.title,description:e.description,buttonToggle:e.buttonToggle,moreInfo:e.moreInfo},e.title)}))})})),y=(c(13),function(e){var t=e.image;return Object(u.jsx)("figure",{className:"social__grid--image",children:Object(u.jsx)("img",{src:t,alt:"Usuarios de Pufi",title:"Usuarios satisfechos"})})}),R=c.p+"static/media/Holidays.21f6f6a3.jpg",T=(c(28),function(){return Object(u.jsxs)("section",{className:"social",children:[Object(u.jsxs)("div",{className:"social__details",children:[Object(u.jsx)("p",{className:"social__details--instagram",children:"instagram"}),Object(u.jsx)("h2",{className:"social__details--hashtag",children:"#espufi"})]}),Object(u.jsxs)("div",{className:"social__grid",children:[Object(u.jsx)(y,{image:R}),Object(u.jsx)(y,{image:R}),Object(u.jsx)(y,{image:R}),Object(u.jsx)(y,{image:R}),Object(u.jsx)(y,{image:R}),Object(u.jsx)(y,{image:R})]})]})}),z=(c(29),Object(l.b)((function(e){return{valid:e.form.valid}}))((function(e){var t=e.valid,c=Object(l.c)();return Object(u.jsxs)("section",{className:"contact",children:[Object(u.jsx)("p",{className:"contact--title",children:"newsletter"}),Object(u.jsx)("h2",{className:"contact--subtitle",children:"suscribite"}),Object(u.jsx)("p",{className:"contact--text",children:"Y enterate de todas las novedades"}),Object(u.jsxs)("div",{className:"contact__form",children:[Object(u.jsx)("input",{className:"contact__form--input ".concat(t&&"is-valid"),name:"email",type:"text",placeholder:"Ingresa tu email",autoComplete:"off",onChange:function(e){var t=e.target;c({type:"verifyEmail",payload:t.value})}}),Object(u.jsx)("span",{className:"focus-bg"}),Object(u.jsx)("i",{className:"fas fa-arrow-right arrow"})]})]})}))),P=c.p+"static/media/pufi-footer.a9d87cbf.png",w=c.p+"static/media/qr.d2458290.png",G=(c(30),function(){return Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsx)("figure",{className:"footer__logo",children:Object(u.jsx)("img",{src:P,alt:"Logo pufi"})}),Object(u.jsxs)("ul",{className:"footer__list",children:[Object(u.jsx)("li",{className:"footer__list--item",children:Object(u.jsx)("a",{href:"/",children:"pufi rain"})}),Object(u.jsx)("li",{className:"footer__list--item",children:Object(u.jsx)("a",{href:"/",children:"pufi puff"})}),Object(u.jsx)("li",{className:"footer__list--item",children:Object(u.jsx)("a",{href:"/",children:"pufi cart"})}),Object(u.jsx)("li",{className:"footer__list--item",children:Object(u.jsx)("a",{href:"/",children:"pufi nap"})})]}),Object(u.jsxs)("ul",{className:"footer__list",children:[Object(u.jsx)("li",{className:"footer__list--item",children:Object(u.jsx)("a",{href:"/",children:"contacto"})}),Object(u.jsx)("li",{className:"footer__list--item",children:Object(u.jsx)("a",{href:"/",children:"ayuda"})}),Object(u.jsx)("li",{className:"footer__list--item",children:Object(u.jsx)("a",{href:"/",children:"c\xf3mo comprar"})}),Object(u.jsx)("li",{className:"footer__list--item",children:Object(u.jsx)("a",{href:"/",children:"t\xe9rminos & condiciones"})})]}),Object(u.jsxs)("div",{className:"footer__guarantee",children:[Object(u.jsx)("p",{className:"footer__guarantee--title",children:"compra 100% segura"}),Object(u.jsxs)("div",{className:"footer__tags",children:[Object(u.jsx)("figure",{className:"footer__tags--image",children:Object(u.jsx)("img",{src:w,alt:"C\xf3digo QR"})}),Object(u.jsx)("figure",{className:"footer__tags--image",children:Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:"shield"})}),Object(u.jsx)("p",{className:"footer__tags--info",children:"compra con la garantia de pufi"})]})]}),Object(u.jsxs)("div",{className:"footer__social",children:[Object(u.jsx)("p",{className:"footer__social--text",children:"seguinos en"}),Object(u.jsx)("p",{className:"footer__social--text",children:Object(u.jsx)("i",{className:"fab fa-facebook-f"})}),Object(u.jsx)("p",{className:"footer__social--text",children:Object(u.jsx)("i",{className:"fab fa-twitter"})}),Object(u.jsx)("p",{className:"footer__social--text",children:Object(u.jsx)("i",{className:"fab fa-instagram"})})]})]})});c(10);var J=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{}),Object(u.jsx)(q,{}),Object(u.jsx)(T,{}),Object(u.jsx)(z,{}),Object(u.jsx)(G,{})]})};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l.a,{store:A,children:Object(u.jsx)(J,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.0c30c7c3.chunk.js.map
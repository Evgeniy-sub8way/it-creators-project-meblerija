import{i as L,A as M}from"./assets/vendor-BBeJe__H.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();const n={categoriesList:document.querySelector("#categories"),furnitureList:document.querySelector("#furniture-list"),loadMoreBtn:document.querySelector("#load-more"),loader:document.querySelector("#loader")};let g="",f=1;function p(t){L.error({message:t,position:"topRight"})}function y(t){L.info({message:t,position:"topRight"})}function x(){n.furnitureList&&n.furnitureList.addEventListener("click",t=>{const e=t.target.closest(".details-btn");if(!e||!e.closest(".furniture-item"))return;const a=e.dataset.id;typeof openProductModal=="function"&&openProductModal(a)})}const I=["Всі товари","М'які меблі","Шафи та системи зберігання","Ліжка та матраци","Столи","Стільці та табурети","Кухні","Меблі для дитячої","Меблі для офісу","Меблі для передпокою","Меблі для ванної кімнати","Садові та вуличні меблі","Декор та аксесуари"];async function B(){try{w();const t=await fetchCategories(),e=I.map(a=>{const s=t.find(c=>c.name.trim()===a.trim());return{_id:a==="Всі товари"?"":s?s._id:"temp-id",name:a}});n.categoriesList.innerHTML=createCategoriesMarkup(e);const r=n.categoriesList.querySelector(".category-btn");r&&r.classList.add("is-active"),await h("",1),x()}catch{p("Не вдалося завантажити товари. Спробуйте пізніше.")}finally{q()}}document.addEventListener("DOMContentLoaded",B);async function h(t="",e=1){try{w(),g=t,f=e;const r=await fetchFurniture(t,e),a=(r==null?void 0:r.furnitures)||[],s=(r==null?void 0:r.totalItems)||0,c=(r==null?void 0:r.limit)||8,i=Math.ceil(s/c);if(e===1){if(n.furnitureList.innerHTML="",a.length===0)return y("Товарів не знайдено"),m(),r;n.furnitureList.innerHTML=createFurnitureMarkup(a)}else appendFurniture(n.furnitureList,a);return e>=i||a.length<c?m():T(),e>1&&(e>=i||a.length<c)&&y("Ви досягли кінця списку"),r}catch{n.furnitureList.innerHTML="",m(),p("Сталася помилка. Спробуйте пізніше")}finally{q()}}async function F(t){var r;const e=t.target.closest(".category-btn");if(e){(r=document.querySelector(".category-btn.is-active"))==null||r.classList.remove("is-active"),e.classList.add("is-active"),g=e.dataset.category||"",f=1;try{await h(g,f)}catch{p("Помилка при зміні категорії")}}}n.categoriesList.addEventListener("click",F);n.loadMoreBtn.addEventListener("click",async()=>{f+=1,m();try{await h(g,f)}catch{p("Сталася помилка. Спробуйте пізніше")}});function w(){var t;(t=n.loader)==null||t.classList.add("is-visible")}function q(){var t;(t=n.loader)==null||t.classList.remove("is-visible")}function T(){var t;(t=n.loadMoreBtn)==null||t.classList.add("is-visible")}function m(){var t;(t=n.loadMoreBtn)==null||t.classList.remove("is-visible")}const S=[{_id:"682f9bbf8acbdf505592ac36",name:'Диван "Комфорт Плюс"',rate:4.8,price:9999,sizes:"220x95x90",category:{_id:"66504a50a1b2c3d4e5f6a7b9",name:"Дивани"},description:"Класичний диван з м’якими подушками та високою спинкою, ідеальний для сімейного відпочинку. Оббивка з якісної зносостійкої тканини.",images:["./img/product-modal/bigsofa1x.jpg","./img/product-modal/cornersofa1x.jpg","./img/product-modal/smallsofa1x.jpg"],color:["#c7c3bb","#ffffff","#201a19"]},{_id:"682f9bbf8acbdf505592ac37",name:"Крісло Comfort",rate:4.5,price:2499,sizes:"85x110x90",category:{_id:"66504a50a1b2c3d4e5f6a7ba",name:"Крісла"},description:"Зручне крісло з опорою для спини. Підходить для робочого кабінету або вітальні. Екологічна тканина.",images:["./img/product-modal/cornersofa1x.jpg","./img/product-modal/bigsofa1x.jpg"],color:["#c7c3bb","#201a19"]},{_id:"682f9bbf8acbdf505592ac38",name:"Ліжко Premium",rate:5,price:15999,sizes:"160x50x200",category:{_id:"66504a50a1b2c3d4e5f6a7bb",name:"Ліжка"},description:"Ортопедичне ліжко з матрацом. Покращує якість сну. Розмір: 160х200 см.",images:["./img/product-modal/smallsofa1x.jpg","./img/product-modal/bigsofa1x.jpg"],color:["#201a19","#ffffff"]}],o={backdrop:document.querySelector("[data-product-backdrop]"),modal:document.querySelector("[data-product-modal]"),closeBtn:document.querySelector(".product-modal-close"),orderBtn:document.querySelector("[data-open-order-modal]"),gallery:document.querySelector("[data-product-gallery]"),mainImage:document.querySelector("[data-product-main-image]"),galleryList:document.querySelector(".product-modal-gallery-list"),name:document.querySelector("[data-product-name]"),category:document.querySelector("[data-product-category]"),price:document.querySelector("[data-product-price]"),ratingWrap:document.querySelector("[data-product-rating]"),ratingValue:document.querySelector("[data-product-rating-value]"),colorsList:document.querySelector("[data-product-colors]"),description:document.querySelector("[data-product-description]"),width:document.querySelector("[data-product-width]"),height:document.querySelector("[data-product-height]"),depth:document.querySelector("[data-product-depth]")},l={isOpen:!1,lastFocusedEl:null,requestId:0};o.backdrop&&o.modal&&(U(),O(),N());function O(){var t,e,r,a,s;(t=o.closeBtn)==null||t.addEventListener("click",d),(e=o.backdrop)==null||e.addEventListener("click",c=>{c.target===o.backdrop&&d()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&l.isOpen&&d()}),(r=o.orderBtn)==null||r.addEventListener("click",()=>{d(),J()}),(a=o.galleryList)==null||a.addEventListener("click",j),(s=o.colorsList)==null||s.addEventListener("change",z)}function N(){document.addEventListener("click",t=>{const e=t.target.closest("[data-open-product-modal], [data-open-product]");if(!e)return;t.preventDefault();const r=e.dataset.productId||e.getAttribute("data-product-id")||"682f9bbf8acbdf505592ac36";k(r)})}async function k(t="682f9bbf8acbdf505592ac36"){var r;l.lastFocusedEl=document.activeElement,A(),v(!0);const e=++l.requestId;try{const a=await W(t);if(e!==l.requestId)return;P(a),l.isOpen=!0,(r=o.closeBtn)==null||r.focus()}catch{d(),D("Не вдалося завантажити інформацію про товар. Спробуйте пізніше.")}finally{v(!1)}}function d(){o.backdrop&&(o.backdrop.classList.add("is-hidden"),document.body.style.overflow="",l.isOpen=!1,l.lastFocusedEl&&typeof l.lastFocusedEl.focus=="function"&&l.lastFocusedEl.focus())}function A(){o.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function P(t){$(t),R(t.rate),_(t.images||[]),H(t.color||[])}function $(t){var e;if(o.name&&(o.name.textContent=t.name||""),o.category&&(o.category.textContent=((e=t.category)==null?void 0:e.name)||""),o.price&&(o.price.textContent=G(t.price)),o.description&&(o.description.textContent=t.description||""),t.sizes){const[r,a,s]=t.sizes.split("x").map(c=>c.trim());o.width&&(o.width.textContent=r||"-"),o.height&&(o.height.textContent=a||"-"),o.depth&&(o.depth.textContent=s||"-")}}function R(t=0){if(!o.ratingWrap)return;const e=Math.round(Number(t)),r=Number.isFinite(Number(t))?Number(t).toFixed(1):"0.0";o.ratingWrap.querySelectorAll(".product-modal-star").forEach((s,c)=>{s.classList.toggle("is-active",c<e)}),o.ratingValue&&(o.ratingValue.textContent=r)}function _(t){if(!o.mainImage||!o.galleryList||!t.length)return;const[e,...r]=t;C(e),o.galleryList.querySelectorAll("[data-product-thumb]").forEach((s,c)=>{const i=r[c];i&&(s.src=i,s.srcset=i,s.alt=`Фото ${c+1}`,s.dataset.index=String(c+1))}),o.gallery.dataset.images=JSON.stringify(t)}function j(t){const e=t.target.closest("[data-product-thumb]");if(!e||!o.gallery)return;const r=JSON.parse(o.gallery.dataset.images||"[]"),a=Number(e.dataset.index);r[a]&&C(r[a])}function C(t){!o.mainImage||!t||(o.mainImage.src=t,o.mainImage.srcset=t,o.mainImage.alt="Фото товару")}function H(t){if(!o.colorsList)return;const e=o.colorsList.querySelectorAll(".product-modal-color-checkbox"),r=o.colorsList.querySelectorAll(".product-modal-color-swatch"),a=o.colorsList.querySelectorAll(".visually-hidden"),s={"#c7c3bb":"product-modal-color-swatch--beige","#ffffff":"product-modal-color-swatch--white","#201a19":"product-modal-color-swatch--black"};e.forEach((c,i)=>{const u=t[i];if(u){if(c.value=u,c.checked=i===0,r[i]){const E=s[u]||"product-modal-color-swatch--beige";r[i].className=`product-modal-color-swatch ${E}`,r[i].style.backgroundColor=u}a[i]&&(a[i].textContent=u)}})}function z(t){const e=t.target.closest(".product-modal-color-checkbox");if(!e||!o.colorsList)return;o.colorsList.querySelectorAll(".product-modal-color-checkbox").forEach(a=>{a.checked=a===e})}function U(){if(!o.modal||o.modal.querySelector(".product-modal-loader"))return;const t=document.createElement("div");t.className="product-modal-loader",t.setAttribute("aria-hidden","true"),o.modal.appendChild(t)}function v(t){var r;const e=(r=o.modal)==null?void 0:r.querySelector(".product-modal-loader");e&&(e.classList.toggle("is-visible",t),e.setAttribute("aria-hidden",String(!t)))}function D(t){var e;if((e=window.iziToast)!=null&&e.error){window.iziToast.error({title:"Помилка",message:t,position:"topRight",timeout:3500});return}alert(t)}function G(t){return`${new Intl.NumberFormat("uk-UA").format(Number(t||0))} грн`}async function W(t){return new Promise((e,r)=>{setTimeout(()=>{const a=S.find(s=>s._id===String(t));if(!a){r(new Error("Not found"));return}e(a)},450)})}function J(){const t=document.querySelector("[data-order-backdrop]");if(t){t.classList.remove("is-hidden"),document.body.style.overflow="hidden";return}document.dispatchEvent(new CustomEvent("open-order-modal"))}window.ProductModal={openById:k,close:d,updateMock(t){S.push(t)}};const K=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно відрегіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}],b=document.querySelector(".container-faq"),V=K.map(({question:t,answer:e})=>`
<div class="ac">
        <h3 class="ac-header">
          <button type="button" class="ac-trigger">
          <span>${t}</span>
          <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.29297 14.2929L7.70697 15.7069L12 11.4139L16.293 15.7069L17.707 14.2929L12 8.58594L6.29297 14.2929Z" fill="#080C09" />
</svg>
          </button>
        </h3><div class="ac-panel">
          <p class="ac-text">${e}</p>
        </div></div>`).join("");b&&(b.innerHTML=V,new M(".container-faq",{duration:400,сollapse:!0,showMultiple:!1}));function Z(t){const e=t.rate,r=Math.floor(e),s=e%1!==0?"half":"";return`<li class="feedback-item">
	<div class="rating star-svg value-${r} ${s} color-default">
		<ul class="star-container">
			<li class="star">
				<svg class="star-empty">
					<use href="./img/star-rating.icons.svg#star-empty"></use>
				</svg>
				<svg class="star-half">
					<use href="./img/star-rating.icons.svg#star-half"></use>
				</svg>
				<svg class="star-filled">
					<use href="./img/star-rating.icons.svg#star-filled"></use>
				</svg>
			</li>
			<li class="star">
				<svg class="star-empty">
					<use href="./img/star-rating.icons.svg#star-empty"></use>
				</svg>
				<svg class="star-half">
					<use href="./img/star-rating.icons.svg#star-half"></use>
				</svg>
				<svg class="star-filled">
					<use href="./img/star-rating.icons.svg#star-filled"></use>
				</svg>
			</li>
			<li class="star">
				<svg class="star-empty">
					<use href="./img/star-rating.icons.svg#star-empty"></use>
				</svg>
				<svg class="star-half">
					<use href="./img/star-rating.icons.svg#star-half"></use>
				</svg>
				<svg class="star-filled">
					<use href="./img/star-rating.icons.svg#star-filled"></use>
				</svg>
			</li>
			<li class="star">
				<svg class="star-empty">
					<use href="./img/star-rating.icons.svg#star-empty"></use>
				</svg>
				<svg class="star-half">
					<use href="./img/star-rating.icons.svg#star-half"></use>
				</svg>
				<svg class="star-filled">
					<use href="./img/star-rating.icons.svg#star-filled"></use>
				</svg>
			</li>
			<li class="star">
				<svg class="star-empty">
					<use href="./img/star-rating.icons.svg#star-empty"></use>
				</svg>
				<svg class="star-half">
					<use href="./img/star-rating.icons.svg#star-half"></use>
				</svg>
				<svg class="star-filled">
					<use href="./img/star-rating.icons.svg#star-filled"></use>
				</svg>
			</li>
		</ul>
	</div>
	<p class="feedback-text">${t.descr}</p>
	<p class="feedback-author">${t.name}</p>
</li>`}function Q(t){const e=document.querySelector(".feedback-list");!e||!t||!t.length||(e.innerHTML=t.map(Z).join(""))}window.FeedbackModule={render:Q};window.addEventListener("load",()=>{const t=document.getElementById("loader");t.classList.add("hidden"),setTimeout(()=>{t.style.display="none"},8e3)});
//# sourceMappingURL=index.js.map

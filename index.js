import{A as y}from"./assets/vendor-CK-IXynA.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const g=[{_id:"682f9bbf8acbdf505592ac36",name:'Диван "Комфорт Плюс"',rate:4.8,price:9999,sizes:"220x95x90",category:{_id:"66504a50a1b2c3d4e5f6a7b9",name:"Дивани"},description:"Класичний диван з м’якими подушками та високою спинкою, ідеальний для сімейного відпочинку. Оббивка з якісної зносостійкої тканини.",images:["./img/product-modal/bigsofa1x.jpg","./img/product-modal/cornersofa1x.jpg","./img/product-modal/smallsofa1x.jpg"],color:["#c7c3bb","#ffffff","#201a19"]},{_id:"682f9bbf8acbdf505592ac37",name:"Крісло Comfort",rate:4.5,price:2499,sizes:"85x110x90",category:{_id:"66504a50a1b2c3d4e5f6a7ba",name:"Крісла"},description:"Зручне крісло з опорою для спини. Підходить для робочого кабінету або вітальні. Екологічна тканина.",images:["./img/product-modal/cornersofa1x.jpg","./img/product-modal/bigsofa1x.jpg"],color:["#c7c3bb","#201a19"]},{_id:"682f9bbf8acbdf505592ac38",name:"Ліжко Premium",rate:5,price:15999,sizes:"160x50x200",category:{_id:"66504a50a1b2c3d4e5f6a7bb",name:"Ліжка"},description:"Ортопедичне ліжко з матрацом. Покращує якість сну. Розмір: 160х200 см.",images:["./img/product-modal/smallsofa1x.jpg","./img/product-modal/bigsofa1x.jpg"],color:["#201a19","#ffffff"]}],t={backdrop:document.querySelector("[data-product-backdrop]"),modal:document.querySelector("[data-product-modal]"),closeBtn:document.querySelector(".product-modal-close"),orderBtn:document.querySelector("[data-open-order-modal]"),gallery:document.querySelector("[data-product-gallery]"),mainImage:document.querySelector("[data-product-main-image]"),galleryList:document.querySelector(".product-modal-gallery-list"),name:document.querySelector("[data-product-name]"),category:document.querySelector("[data-product-category]"),price:document.querySelector("[data-product-price]"),ratingWrap:document.querySelector("[data-product-rating]"),ratingValue:document.querySelector("[data-product-rating-value]"),colorsList:document.querySelector("[data-product-colors]"),description:document.querySelector("[data-product-description]"),width:document.querySelector("[data-product-width]"),height:document.querySelector("[data-product-height]"),depth:document.querySelector("[data-product-depth]")},i={isOpen:!1,lastFocusedEl:null,requestId:0};t.backdrop&&t.modal&&(I(),v(),b());function v(){var e,r,o,c,s;(e=t.closeBtn)==null||e.addEventListener("click",l),(r=t.backdrop)==null||r.addEventListener("click",a=>{a.target===t.backdrop&&l()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&i.isOpen&&l()}),(o=t.orderBtn)==null||o.addEventListener("click",()=>{l(),A()}),(c=t.galleryList)==null||c.addEventListener("click",k),(s=t.colorsList)==null||s.addEventListener("change",C)}function b(){document.addEventListener("click",e=>{const r=e.target.closest("[data-open-product-modal], [data-open-product]");if(!r)return;e.preventDefault();const o=r.dataset.productId||r.getAttribute("data-product-id")||"682f9bbf8acbdf505592ac36";m(o)})}async function m(e="682f9bbf8acbdf505592ac36"){var o;i.lastFocusedEl=document.activeElement,w(),u(!0);const r=++i.requestId;try{const c=await O(e);if(r!==i.requestId)return;q(c),i.isOpen=!0,(o=t.closeBtn)==null||o.focus()}catch{l(),N("Не вдалося завантажити інформацію про товар. Спробуйте пізніше.")}finally{u(!1)}}function l(){t.backdrop&&(t.backdrop.classList.add("is-hidden"),document.body.style.overflow="",i.isOpen=!1,i.lastFocusedEl&&typeof i.lastFocusedEl.focus=="function"&&i.lastFocusedEl.focus())}function w(){t.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function q(e){L(e),S(e.rate),x(e.images||[]),E(e.color||[])}function L(e){var r;if(t.name&&(t.name.textContent=e.name||""),t.category&&(t.category.textContent=((r=e.category)==null?void 0:r.name)||""),t.price&&(t.price.textContent=M(e.price)),t.description&&(t.description.textContent=e.description||""),e.sizes){const[o,c,s]=e.sizes.split("x").map(a=>a.trim());t.width&&(t.width.textContent=o||"-"),t.height&&(t.height.textContent=c||"-"),t.depth&&(t.depth.textContent=s||"-")}}function S(e=0){if(!t.ratingWrap)return;const r=Math.round(Number(e)),o=Number.isFinite(Number(e))?Number(e).toFixed(1):"0.0";t.ratingWrap.querySelectorAll(".product-modal-star").forEach((s,a)=>{s.classList.toggle("is-active",a<r)}),t.ratingValue&&(t.ratingValue.textContent=o)}function x(e){if(!t.mainImage||!t.galleryList||!e.length)return;const[r,...o]=e;p(r),t.galleryList.querySelectorAll("[data-product-thumb]").forEach((s,a)=>{const n=o[a];n&&(s.src=n,s.srcset=n,s.alt=`Фото ${a+1}`,s.dataset.index=String(a+1))}),t.gallery.dataset.images=JSON.stringify(e)}function k(e){const r=e.target.closest("[data-product-thumb]");if(!r||!t.gallery)return;const o=JSON.parse(t.gallery.dataset.images||"[]"),c=Number(r.dataset.index);o[c]&&p(o[c])}function p(e){!t.mainImage||!e||(t.mainImage.src=e,t.mainImage.srcset=e,t.mainImage.alt="Фото товару")}function E(e){if(!t.colorsList)return;const r=t.colorsList.querySelectorAll(".product-modal-color-checkbox"),o=t.colorsList.querySelectorAll(".product-modal-color-swatch"),c=t.colorsList.querySelectorAll(".visually-hidden"),s={"#c7c3bb":"product-modal-color-swatch--beige","#ffffff":"product-modal-color-swatch--white","#201a19":"product-modal-color-swatch--black"};r.forEach((a,n)=>{const d=e[n];if(d){if(a.value=d,a.checked=n===0,o[n]){const h=s[d]||"product-modal-color-swatch--beige";o[n].className=`product-modal-color-swatch ${h}`,o[n].style.backgroundColor=d}c[n]&&(c[n].textContent=d)}})}function C(e){const r=e.target.closest(".product-modal-color-checkbox");if(!r||!t.colorsList)return;t.colorsList.querySelectorAll(".product-modal-color-checkbox").forEach(c=>{c.checked=c===r})}function I(){if(!t.modal||t.modal.querySelector(".product-modal-loader"))return;const e=document.createElement("div");e.className="product-modal-loader",e.setAttribute("aria-hidden","true"),t.modal.appendChild(e)}function u(e){var o;const r=(o=t.modal)==null?void 0:o.querySelector(".product-modal-loader");r&&(r.classList.toggle("is-visible",e),r.setAttribute("aria-hidden",String(!e)))}function N(e){var r;if((r=window.iziToast)!=null&&r.error){window.iziToast.error({title:"Помилка",message:e,position:"topRight",timeout:3500});return}alert(e)}function M(e){return`${new Intl.NumberFormat("uk-UA").format(Number(e||0))} грн`}async function O(e){return new Promise((r,o)=>{setTimeout(()=>{const c=g.find(s=>s._id===String(e));if(!c){o(new Error("Not found"));return}r(c)},450)})}function A(){const e=document.querySelector("[data-order-backdrop]");if(e){e.classList.remove("is-hidden"),document.body.style.overflow="hidden";return}document.dispatchEvent(new CustomEvent("open-order-modal"))}window.ProductModal={openById:m,close:l,updateMock(e){g.push(e)}};const F=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно відрегіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}],f=document.querySelector(".container-faq"),T=F.map(({question:e,answer:r})=>`
<div class="ac">
        <h3 class="ac-header">
          <button type="button" class="ac-trigger">
          <span>${e}</span>
          <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.29297 14.2929L7.70697 15.7069L12 11.4139L16.293 15.7069L17.707 14.2929L12 8.58594L6.29297 14.2929Z" fill="#080C09" />
</svg>
          </button>
        </h3><div class="ac-panel">
          <p class="ac-text">${r}</p>
        </div></div>`).join("");f&&(f.innerHTML=T,new y(".container-faq",{duration:400,сollapse:!0,showMultiple:!1}));function B(e){const r=e.rate,o=Math.floor(r),s=r%1!==0?"half":"";return`<li class="feedback-item">
	<div class="rating star-svg value-${o} ${s} color-default">
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
	<p class="feedback-text">${e.descr}</p>
	<p class="feedback-author">${e.name}</p>
</li>`}function P(e){const r=document.querySelector(".feedback-list");!r||!e||!e.length||(r.innerHTML=e.map(B).join(""))}window.FeedbackModule={render:P};window.addEventListener("load",()=>{const e=document.getElementById("loader");e.classList.add("hidden"),setTimeout(()=>{e.style.display="none"},8e3)});
//# sourceMappingURL=index.js.map

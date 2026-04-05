import{i as w,A as B,a as T,S as P,N as F,P as N}from"./assets/vendor-U2pVx9R6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const c={categoriesList:document.querySelector("#categories"),furnitureList:document.querySelector("#furniture-list"),loadMoreBtn:document.querySelector("#load-more"),loader:document.querySelector("#loader")};let m="",f=1;function p(e){w.error({message:e,position:"topRight"})}function v(e){w.info({message:e,position:"topRight"})}function O(){c.furnitureList&&c.furnitureList.addEventListener("click",e=>{const t=e.target.closest(".details-btn");if(!t||!t.closest(".furniture-item"))return;const o=t.dataset.id;typeof openProductModal=="function"&&openProductModal(o)})}const A=["Всі товари","М'які меблі","Шафи та системи зберігання","Ліжка та матраци","Столи","Стільці та табурети","Кухні","Меблі для дитячої","Меблі для офісу","Меблі для передпокою","Меблі для ванної кімнати","Садові та вуличні меблі","Декор та аксесуари"];async function $(){try{L();const e=await fetchCategories(),t=A.map(o=>{const a=e.find(i=>i.name.trim()===o.trim());return{_id:o==="Всі товари"?"":a?a._id:"temp-id",name:o}});c.categoriesList.innerHTML=createCategoriesMarkup(t);const s=c.categoriesList.querySelector(".category-btn");s&&s.classList.add("is-active"),await h("",1),O()}catch{p("Не вдалося завантажити товари. Спробуйте пізніше.")}finally{q()}}document.addEventListener("DOMContentLoaded",$);async function h(e="",t=1){try{L(),m=e,f=t;const s=await fetchFurniture(e,t),o=(s==null?void 0:s.furnitures)||[],a=(s==null?void 0:s.totalItems)||0,i=(s==null?void 0:s.limit)||8,n=Math.ceil(a/i);if(t===1){if(c.furnitureList.innerHTML="",o.length===0)return v("Товарів не знайдено"),g(),s;c.furnitureList.innerHTML=createFurnitureMarkup(o)}else appendFurniture(c.furnitureList,o);return t>=n||o.length<i?g():H(),t>1&&(t>=n||o.length<i)&&v("Ви досягли кінця списку"),s}catch{c.furnitureList.innerHTML="",g(),p("Сталася помилка. Спробуйте пізніше")}finally{q()}}async function R(e){var s;const t=e.target.closest(".category-btn");if(t){(s=document.querySelector(".category-btn.is-active"))==null||s.classList.remove("is-active"),t.classList.add("is-active"),m=t.dataset.category||"",f=1;try{await h(m,f)}catch{p("Помилка при зміні категорії")}}}c.categoriesList.addEventListener("click",R);c.loadMoreBtn.addEventListener("click",async()=>{f+=1,g();try{await h(m,f)}catch{p("Сталася помилка. Спробуйте пізніше")}});function L(){var e;(e=c.loader)==null||e.classList.add("is-visible")}function q(){var e;(e=c.loader)==null||e.classList.remove("is-visible")}function H(){var e;(e=c.loadMoreBtn)==null||e.classList.add("is-visible")}function g(){var e;(e=c.loadMoreBtn)==null||e.classList.remove("is-visible")}const S=[{_id:"682f9bbf8acbdf505592ac36",name:'Диван "Комфорт Плюс"',rate:4.8,price:9999,sizes:"220x95x90",category:{_id:"66504a50a1b2c3d4e5f6a7b9",name:"Дивани"},description:"Класичний диван з м’якими подушками та високою спинкою, ідеальний для сімейного відпочинку. Оббивка з якісної зносостійкої тканини.",images:["./img/product-modal/bigsofa1x.jpg","./img/product-modal/cornersofa1x.jpg","./img/product-modal/smallsofa1x.jpg"],color:["#c7c3bb","#ffffff","#201a19"]},{_id:"682f9bbf8acbdf505592ac37",name:"Крісло Comfort",rate:4.5,price:2499,sizes:"85x110x90",category:{_id:"66504a50a1b2c3d4e5f6a7ba",name:"Крісла"},description:"Зручне крісло з опорою для спини. Підходить для робочого кабінету або вітальні. Екологічна тканина.",images:["./img/product-modal/cornersofa1x.jpg","./img/product-modal/bigsofa1x.jpg"],color:["#c7c3bb","#201a19"]},{_id:"682f9bbf8acbdf505592ac38",name:"Ліжко Premium",rate:5,price:15999,sizes:"160x50x200",category:{_id:"66504a50a1b2c3d4e5f6a7bb",name:"Ліжка"},description:"Ортопедичне ліжко з матрацом. Покращує якість сну. Розмір: 160х200 см.",images:["./img/product-modal/smallsofa1x.jpg","./img/product-modal/bigsofa1x.jpg"],color:["#201a19","#ffffff"]}],r={backdrop:document.querySelector("[data-product-backdrop]"),modal:document.querySelector("[data-product-modal]"),closeBtn:document.querySelector(".product-modal-close"),orderBtn:document.querySelector("[data-open-order-modal]"),gallery:document.querySelector("[data-product-gallery]"),mainImage:document.querySelector("[data-product-main-image]"),galleryList:document.querySelector(".product-modal-gallery-list"),name:document.querySelector("[data-product-name]"),category:document.querySelector("[data-product-category]"),price:document.querySelector("[data-product-price]"),ratingWrap:document.querySelector("[data-product-rating]"),ratingValue:document.querySelector("[data-product-rating-value]"),colorsList:document.querySelector("[data-product-colors]"),description:document.querySelector("[data-product-description]"),width:document.querySelector("[data-product-width]"),height:document.querySelector("[data-product-height]"),depth:document.querySelector("[data-product-depth]")},l={isOpen:!1,lastFocusedEl:null,requestId:0};r.backdrop&&r.modal&&(Z(),j(),_());function j(){var e,t,s,o,a;(e=r.closeBtn)==null||e.addEventListener("click",d),(t=r.backdrop)==null||t.addEventListener("click",i=>{i.target===r.backdrop&&d()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&l.isOpen&&d()}),(s=r.orderBtn)==null||s.addEventListener("click",()=>{d(),ee()}),(o=r.galleryList)==null||o.addEventListener("click",W),(a=r.colorsList)==null||a.addEventListener("change",K)}function _(){document.addEventListener("click",e=>{const t=e.target.closest("[data-open-product-modal], [data-open-product]");if(!t)return;e.preventDefault();const s=t.dataset.productId||t.getAttribute("data-product-id")||"682f9bbf8acbdf505592ac36";k(s)})}async function k(e="682f9bbf8acbdf505592ac36"){var s;l.lastFocusedEl=document.activeElement,z(),y(!0);const t=++l.requestId;try{const o=await Y(e);if(t!==l.requestId)return;U(o),l.isOpen=!0,(s=r.closeBtn)==null||s.focus()}catch{d(),Q("Не вдалося завантажити інформацію про товар. Спробуйте пізніше.")}finally{y(!1)}}function d(){r.backdrop&&(r.backdrop.classList.add("is-hidden"),document.body.style.overflow="",l.isOpen=!1,l.lastFocusedEl&&typeof l.lastFocusedEl.focus=="function"&&l.lastFocusedEl.focus())}function z(){r.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function U(e){D(e),V(e.rate),G(e.images||[]),J(e.color||[])}function D(e){var t;if(r.name&&(r.name.textContent=e.name||""),r.category&&(r.category.textContent=((t=e.category)==null?void 0:t.name)||""),r.price&&(r.price.textContent=X(e.price)),r.description&&(r.description.textContent=e.description||""),e.sizes){const[s,o,a]=e.sizes.split("x").map(i=>i.trim());r.width&&(r.width.textContent=s||"-"),r.height&&(r.height.textContent=o||"-"),r.depth&&(r.depth.textContent=a||"-")}}function V(e=0){if(!r.ratingWrap)return;const t=Math.round(Number(e)),s=Number.isFinite(Number(e))?Number(e).toFixed(1):"0.0";r.ratingWrap.querySelectorAll(".product-modal-star").forEach((a,i)=>{a.classList.toggle("is-active",i<t)}),r.ratingValue&&(r.ratingValue.textContent=s)}function G(e){if(!r.mainImage||!r.galleryList||!e.length)return;const[t,...s]=e;E(t),r.galleryList.querySelectorAll("[data-product-thumb]").forEach((a,i)=>{const n=s[i];n&&(a.src=n,a.srcset=n,a.alt=`Фото ${i+1}`,a.dataset.index=String(i+1))}),r.gallery.dataset.images=JSON.stringify(e)}function W(e){const t=e.target.closest("[data-product-thumb]");if(!t||!r.gallery)return;const s=JSON.parse(r.gallery.dataset.images||"[]"),o=Number(t.dataset.index);s[o]&&E(s[o])}function E(e){!r.mainImage||!e||(r.mainImage.src=e,r.mainImage.srcset=e,r.mainImage.alt="Фото товару")}function J(e){if(!r.colorsList)return;const t=r.colorsList.querySelectorAll(".product-modal-color-checkbox"),s=r.colorsList.querySelectorAll(".product-modal-color-swatch"),o=r.colorsList.querySelectorAll(".visually-hidden"),a={"#c7c3bb":"product-modal-color-swatch--beige","#ffffff":"product-modal-color-swatch--white","#201a19":"product-modal-color-swatch--black"};t.forEach((i,n)=>{const u=e[n];if(u){if(i.value=u,i.checked=n===0,s[n]){const I=a[u]||"product-modal-color-swatch--beige";s[n].className=`product-modal-color-swatch ${I}`,s[n].style.backgroundColor=u}o[n]&&(o[n].textContent=u)}})}function K(e){const t=e.target.closest(".product-modal-color-checkbox");if(!t||!r.colorsList)return;r.colorsList.querySelectorAll(".product-modal-color-checkbox").forEach(o=>{o.checked=o===t})}function Z(){if(!r.modal||r.modal.querySelector(".product-modal-loader"))return;const e=document.createElement("div");e.className="product-modal-loader",e.setAttribute("aria-hidden","true"),r.modal.appendChild(e)}function y(e){var s;const t=(s=r.modal)==null?void 0:s.querySelector(".product-modal-loader");t&&(t.classList.toggle("is-visible",e),t.setAttribute("aria-hidden",String(!e)))}function Q(e){var t;if((t=window.iziToast)!=null&&t.error){window.iziToast.error({title:"Помилка",message:e,position:"topRight",timeout:3500});return}alert(e)}function X(e){return`${new Intl.NumberFormat("uk-UA").format(Number(e||0))} грн`}async function Y(e){return new Promise((t,s)=>{setTimeout(()=>{const o=S.find(a=>a._id===String(e));if(!o){s(new Error("Not found"));return}t(o)},450)})}function ee(){const e=document.querySelector("[data-order-backdrop]");if(e){e.classList.remove("is-hidden"),document.body.style.overflow="hidden";return}document.dispatchEvent(new CustomEvent("open-order-modal"))}window.ProductModal={openById:k,close:d,updateMock(e){S.push(e)}};const te=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно відрегіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}],b=document.querySelector(".container-faq"),se=te.map(({question:e,answer:t})=>`
<div class="ac">
        <h3 class="ac-header">
          <button type="button" class="ac-trigger">
          <span>${e}</span>
          <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.29297 14.2929L7.70697 15.7069L12 11.4139L16.293 15.7069L17.707 14.2929L12 8.58594L6.29297 14.2929Z" fill="#080C09" />
</svg>
          </button>
        </h3><div class="ac-panel">
          <p class="ac-text">${t}</p>
        </div></div>`).join("");b&&(b.innerHTML=se,new B(".container-faq",{duration:400,сollapse:!0,showMultiple:!1}));function re(e){const t=e.rate,s=Math.floor(t),a=t%1!==0?"half":"";return`<li class="feedback-item">
	<div class="rating star-svg value-${s} ${a} color-default">
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
</li>`}function ae(e){const t=document.querySelector(".feedback-list");!t||!e||!e.length||(t.innerHTML=e.map(re).join(""))}window.FeedbackModule={render:ae};const oe=document.querySelector(".swiper-wrapper"),C=document.querySelector(".swiper-button-prev"),x=document.querySelector(".swiper-button-next"),M=document.querySelector(".swiper-pagination");async function ie(){const s="https://furniture-store-v2.b.goit.study/api"+"/feedbacks",o={limit:10,page:1};return(await T.get(s,{params:o})).data}function ne(e){const t=e.rate,s=Math.floor(t),a=t%1!==0?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="rating star-svg value-${s} ${a} color-default">
        <ul class="star-container">
          <li class="star">
          <svg class="star-empty">
                <use href="/img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="/img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="/img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="/img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="/img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="/img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="/img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="/img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="/img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="/img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="/img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="/img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="/img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="/img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="/img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
        </ul>
        </div>
        <p class="feedback-text">${e.descr}</p>
        <p class="feedback-author">${e.name}</p>
      </li>`}function ce(e){return e.map(ne).join("")}function le(){new P(".swiper",{modules:[F,N],direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},allowSlideNext:!0,allowSlidePrev:!0,grabCursor:!0,simulateTouch:!0})}function de(){C.classList.remove("hidden"),x.classList.remove("hidden"),M.classList.remove("hidden")}function ue(){C.classList.add("hidden"),x.classList.add("hidden"),M.classList.add("hidden")}document.addEventListener("DOMContentLoaded",async()=>{ue();try{const e=await ie();oe.insertAdjacentHTML("afterbegin",ce(e.feedbacks)),le(),de()}catch{}finally{}});window.addEventListener("load",()=>{const e=document.getElementById("loader");e.classList.add("hidden"),setTimeout(()=>{e.style.display="none"},8e3)});
//# sourceMappingURL=index.js.map

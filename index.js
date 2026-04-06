import{a as p,i as q,A as I,S as T,N as A,P as F}from"./assets/vendor-CXD_EiBz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const r={backdrop:document.querySelector("[data-product-backdrop]"),modal:document.querySelector("[data-product-modal]"),closeBtn:document.querySelector(".product-modal-close"),orderBtn:document.querySelector("[data-open-order-modal]"),gallery:document.querySelector("[data-product-gallery]"),mainImage:document.querySelector("[data-product-main-image]"),galleryList:document.querySelector(".product-modal-gallery-list"),name:document.querySelector("[data-product-name]"),category:document.querySelector("[data-product-category]"),price:document.querySelector("[data-product-price]"),ratingWrap:document.querySelector("[data-product-rating]"),ratingValue:document.querySelector("[data-product-rating-value]"),colorsList:document.querySelector("[data-product-colors]"),description:document.querySelector("[data-product-description]"),width:document.querySelector("[data-product-width]"),height:document.querySelector("[data-product-height]"),depth:document.querySelector("[data-product-depth]")},l={isOpen:!1,lastFocusedEl:null,requestId:0};r.backdrop&&r.modal&&(_(),O(),P());function O(){var e,t,s,o,a;(e=r.closeBtn)==null||e.addEventListener("click",u),(t=r.backdrop)==null||t.addEventListener("click",i=>{i.target===r.backdrop&&u()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&l.isOpen&&u()}),(s=r.orderBtn)==null||s.addEventListener("click",()=>{u(),K()}),(o=r.galleryList)==null||o.addEventListener("click",D),(a=r.colorsList)==null||a.addEventListener("change",W)}function P(){document.addEventListener("click",e=>{const t=e.target.closest("[data-open-product-modal], [data-open-product]");if(!t)return;e.preventDefault();const s=t.dataset.productId||t.getAttribute("data-product-id")||"682f9bbf8acbdf505592ac36";b(s)})}async function b(e){var s;l.lastFocusedEl=document.activeElement,N(),L(!0);const t=++l.requestId;try{const a=await(await fetch(`https://furniture-store-v2.b.goit.study/api/furnitures/${e}`)).json();if(t!==l.requestId)return;H(a),l.isOpen=!0,(s=r.closeBtn)==null||s.focus()}catch(o){console.error("Error fetching product:",o),u(),G("Не вдалося завантажити інформацію про товар. Спробуйте пізніше.")}finally{L(!1)}}function u(){r.backdrop&&(r.backdrop.classList.add("is-hidden"),document.body.style.overflow="",l.isOpen=!1,l.lastFocusedEl&&typeof l.lastFocusedEl.focus=="function"&&l.lastFocusedEl.focus())}function N(){r.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function H(e){R(e),z(e.rate),U(e.images||[]),V(e.color||[])}function R(e){var t;if(r.name&&(r.name.textContent=e.name||""),r.category&&(r.category.textContent=((t=e.category)==null?void 0:t.name)||""),r.price&&(r.price.textContent=J(e.price)),r.description&&(r.description.textContent=e.description||""),e.sizes){const[s,o,a]=e.sizes.split("x").map(i=>i.trim());r.width&&(r.width.textContent=s||"-"),r.height&&(r.height.textContent=o||"-"),r.depth&&(r.depth.textContent=a||"-")}}function z(e=0){if(!r.ratingWrap)return;const t=Math.round(Number(e)),s=Number.isFinite(Number(e))?Number(e).toFixed(1):"0.0";r.ratingWrap.querySelectorAll(".product-modal-star").forEach((a,i)=>{a.classList.toggle("is-active",i<t)}),r.ratingValue&&(r.ratingValue.textContent=s)}function U(e){if(!r.mainImage||!r.galleryList||!e.length)return;const[t,...s]=e;k(t),r.galleryList.querySelectorAll("[data-product-thumb]").forEach((a,i)=>{const n=s[i];n&&(a.src=n,a.srcset=n,a.alt=`Фото ${i+1}`,a.dataset.index=String(i+1))}),r.gallery.dataset.images=JSON.stringify(e)}function D(e){const t=e.target.closest("[data-product-thumb]");if(!t||!r.gallery)return;const s=JSON.parse(r.gallery.dataset.images||"[]"),o=Number(t.dataset.index);s[o]&&k(s[o])}function k(e){!r.mainImage||!e||(r.mainImage.src=e,r.mainImage.srcset=e,r.mainImage.alt="Фото товару")}function V(e){if(!r.colorsList)return;const t=r.colorsList.querySelectorAll(".product-modal-color-checkbox"),s=r.colorsList.querySelectorAll(".product-modal-color-swatch"),o=r.colorsList.querySelectorAll(".visually-hidden"),a={"#c7c3bb":"product-modal-color-swatch--beige","#ffffff":"product-modal-color-swatch--white","#201a19":"product-modal-color-swatch--black"};t.forEach((i,n)=>{const d=e[n];if(d){if(i.value=d,i.checked=n===0,s[n]){const v=a[d]||"product-modal-color-swatch--beige";s[n].className=`product-modal-color-swatch ${v}`,s[n].style.backgroundColor=d}o[n]&&(o[n].textContent=d)}})}function W(e){const t=e.target.closest(".product-modal-color-checkbox");if(!t||!r.colorsList)return;r.colorsList.querySelectorAll(".product-modal-color-checkbox").forEach(o=>{o.checked=o===t})}function _(){if(!r.modal||r.modal.querySelector(".product-modal-loader"))return;const e=document.createElement("div");e.className="product-modal-loader",e.setAttribute("aria-hidden","true"),r.modal.appendChild(e)}function L(e){var s;const t=(s=r.modal)==null?void 0:s.querySelector(".product-modal-loader");t&&(t.classList.toggle("is-visible",e),t.setAttribute("aria-hidden",String(!e)))}function G(e){var t;if((t=window.iziToast)!=null&&t.error){window.iziToast.error({title:"Помилка",message:e,position:"topRight",timeout:3500});return}alert(e)}function J(e){return`${new Intl.NumberFormat("uk-UA").format(Number(e||0))} грн`}function K(){const e=document.querySelector("[data-order-backdrop]");if(e){e.classList.remove("is-hidden"),document.body.style.overflow="hidden";return}document.dispatchEvent(new CustomEvent("open-order-modal"))}window.ProductModal={openById:b,close:u,updateMock(e){}};p.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function Z(){return(await p.get("/categories")).data}async function Q(e="",t=1){const s={page:t,limit:8};return e&&(s.category=e),(await p.get("/furnitures",{params:s})).data}const X=["all-products","sofas","wardrobes","beds","tables","chairs","kitchens","kids","office","hallway","bathroom","outdoor","decor"];function Y(e){return e.map((t,s)=>`
        <li class="category-item">
          <button
            class="category-btn ${X[s]||"default"}"
            type="button"
            data-category="${t._id}">
            ${t.name}
          </button>
        </li>
      `).join("")}function j(e){return e.map(t=>{const{_id:s,name:o,images:a=[],color:i=[],price:n=0}=t,d=a[0]||"placeholder.jpg",v=Array.isArray(i)?i:[i];return`
        <li class="furniture-item">
          <div class="furniture-thumb">
            <img src="${d}" alt="${o}" loading="lazy" />
          </div>
          <div class="furniture-info">
            <h3 class="furniture-heading">${o}</h3>
                <div class="container-colors">
                  <ul class="furniture-color">
                      ${v.map(B=>`
                        <li>
                          <svg width="24" height="24">
                            <circle cx="12" cy="12" r="12" fill="${B}" />
                          </svg>
                        </li>
                      `).join("")}
                   </ul>
               </div>
                    <p class="furniture-price">${n} грн</p>
          </div>
             <button class="details-btn btn-furniture" data-id="${s}" type="button">Детальніше</button>
        </li>
      `}).join("")}function ee(e,t){e.insertAdjacentHTML("beforeend",j(t))}const c={categoriesList:document.querySelector("#categories"),furnitureList:document.querySelector("#furniture-list"),loadMoreBtn:document.querySelector("#load-more"),loader:document.querySelector("#loader")};let m="",g=1;function h(e){q.error({message:e,position:"topRight",maxWidth:400,close:!0})}function y(e){q.info({message:e,position:"topRight",maxWidth:400,close:!0})}function te(){c.furnitureList&&c.furnitureList.addEventListener("click",e=>{const t=e.target.closest(".details-btn");if(!t)return;const s=t.dataset.id;if(!s){y("На жаль, інформація про цей товар недоступна.");return}b(s)})}const se=["Всі товари","М'які меблі","Шафи та системи зберігання","Ліжка та матраци","Столи","Стільці та табурети","Кухні","Меблі для дитячої","Меблі для офісу","Меблі для передпокою","Меблі для ванної кімнати","Садові та вуличні меблі","Декор та аксесуари"];async function re(){try{E();const e=await Z(),t=se.map(o=>{const a=e.find(i=>i.name.trim()===o.trim());return{_id:o==="Всі товари"?"":a?a._id:"temp-id",name:o}});c.categoriesList.innerHTML=Y(t);const s=c.categoriesList.querySelector(".category-btn");s&&s.classList.add("is-active"),await w("",1),te()}catch{h("Не вдалося завантажити товари. Спробуйте пізніше.")}finally{C()}}document.addEventListener("DOMContentLoaded",re);async function w(e="",t=1){try{E(),m=e,g=t;const s=await Q(e,t),o=(s==null?void 0:s.furnitures)||[],a=(s==null?void 0:s.totalItems)||0,i=(s==null?void 0:s.limit)||8,n=Math.ceil(a/i);if(t===1){if(c.furnitureList.innerHTML="",o.length===0)return y("Товарів не знайдено"),f(),s;c.furnitureList.innerHTML=j(o)}else ee(c.furnitureList,o);return t>=n||o.length<i?f():oe(),t>1&&(t>=n||o.length<i)&&y("Ви досягли кінця списку"),s}catch{c.furnitureList.innerHTML="",f(),h("Сталася помилка. Спробуйте пізніше")}finally{C()}}async function ae(e){var s;const t=e.target.closest(".category-btn");if(t){(s=document.querySelector(".category-btn.is-active"))==null||s.classList.remove("is-active"),t.classList.add("is-active"),m=t.dataset.category||"",g=1;try{await w(m,g)}catch{h("Помилка при зміні категорії")}}}c.categoriesList.addEventListener("click",ae);c.loadMoreBtn.addEventListener("click",async()=>{g+=1,f();try{await w(m,g)}catch{h("Сталася помилка. Спробуйте пізніше")}});function E(){var e;(e=c.loader)==null||e.classList.add("is-visible")}function C(){var e;(e=c.loader)==null||e.classList.remove("is-visible")}function oe(){var e;(e=c.loadMoreBtn)==null||e.classList.add("is-visible")}function f(){var e;(e=c.loadMoreBtn)==null||e.classList.remove("is-visible")}const ie=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно відрегіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}],S=document.querySelector(".container-faq"),ne=ie.map(({question:e,answer:t})=>`
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
        </div></div>`).join("");S&&(S.innerHTML=ne,new I(".container-faq",{duration:400,сollapse:!0,showMultiple:!1}));function ce(e){const t=e.rate,s=Math.floor(t),a=t%1!==0?"half":"";return`<li class="feedback-item">
	<div class="rating star-svg value-${s} ${a} color-default">
		<ul class="star-container">
			<li class="star">
				<svg class="star-empty">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-empty"></use>
				</svg>
				<svg class="star-half">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-half"></use>
				</svg>
				<svg class="star-filled">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-filled"></use>
				</svg>
			</li>
			<li class="star">
				<svg class="star-empty">
					<use href="/it-creators-project-meblerij/it-creators-project-meblerija/img/star-rating.icons.svg#star-empty"></use>
				</svg>
				<svg class="star-half">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-half"></use>
				</svg>
				<svg class="star-filled">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-filled"></use>
				</svg>
			</li>
			<li class="star">
				<svg class="star-empty">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-empty"></use>
				</svg>
				<svg class="star-half">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-half"></use>
				</svg>
				<svg class="star-filled">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-filled"></use>
				</svg>
			</li>
			<li class="star">
				<svg class="star-empty">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-empty"></use>
				</svg>
				<svg class="star-half">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-half"></use>
				</svg>
				<svg class="star-filled">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-filled"></use>
				</svg>
			</li>
			<li class="star">
				<svg class="star-empty">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-empty"></use>
				</svg>
				<svg class="star-half">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-half"></use>
				</svg>
				<svg class="star-filled">
					<use href="/it-creators-project-meblerija/img/star-rating.icons.svg#star-filled"></use>
				</svg>
			</li>
		</ul>
	</div>
	<p class="feedback-text">${e.descr}</p>
	<p class="feedback-author">${e.name}</p>
</li>`}function le(e){const t=document.querySelector(".feedback-list");!t||!e||!e.length||(t.innerHTML=e.map(ce).join(""))}window.FeedbackModule={render:le};const de=document.querySelector(".swiper-wrapper"),M=document.querySelector(".swiper-button-prev"),x=document.querySelector(".swiper-button-next"),$=document.querySelector(".swiper-pagination");async function ue(){const s="https://furniture-store-v2.b.goit.study/api"+"/feedbacks",o={limit:10,page:1};return(await p.get(s,{params:o})).data}function ge(e){const t=e.rate,s=Math.floor(t),a=t%1!==0?"half":"";return`<li class="feedback-item swiper-slide">
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
      </li>`}function fe(e){return e.map(ge).join("")}function me(){new T(".swiper",{modules:[A,F],direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},allowSlideNext:!0,allowSlidePrev:!0,grabCursor:!0,simulateTouch:!0})}function pe(){M.classList.remove("hidden"),x.classList.remove("hidden"),$.classList.remove("hidden")}function he(){M.classList.add("hidden"),x.classList.add("hidden"),$.classList.add("hidden")}document.addEventListener("DOMContentLoaded",async()=>{he();try{const e=await ue();de.insertAdjacentHTML("afterbegin",fe(e.feedbacks)),me(),pe()}catch{}finally{}});window.addEventListener("load",()=>{const e=document.getElementById("loader");e.classList.add("hidden"),setTimeout(()=>{e.style.display="none"},8e3)});
//# sourceMappingURL=index.js.map

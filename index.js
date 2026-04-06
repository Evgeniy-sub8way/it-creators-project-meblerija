import{a as p,i as q,A as T,S as A,N as F,P as O}from"./assets/vendor-CXD_EiBz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const r={backdrop:document.querySelector("[data-product-backdrop]"),modal:document.querySelector("[data-product-modal]"),closeBtn:document.querySelector(".product-modal-close"),orderBtn:document.querySelector("[data-open-order-modal]"),gallery:document.querySelector("[data-product-gallery]"),mainImage:document.querySelector("[data-product-main-image]"),galleryList:document.querySelector(".product-modal-gallery-list"),name:document.querySelector("[data-product-name]"),category:document.querySelector("[data-product-category]"),price:document.querySelector("[data-product-price]"),ratingWrap:document.querySelector("[data-product-rating]"),ratingValue:document.querySelector("[data-product-rating-value]"),colorsList:document.querySelector("[data-product-colors]"),description:document.querySelector("[data-product-description]"),width:document.querySelector("[data-product-width]"),height:document.querySelector("[data-product-height]"),depth:document.querySelector("[data-product-depth]")},l={isOpen:!1,lastFocusedEl:null,requestId:0};r.backdrop&&r.modal&&(_(),P(),N());function P(){var t,e,s,o,a;(t=r.closeBtn)==null||t.addEventListener("click",u),(e=r.backdrop)==null||e.addEventListener("click",i=>{i.target===r.backdrop&&u()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&l.isOpen&&u()}),(s=r.orderBtn)==null||s.addEventListener("click",()=>{u(),K()}),(o=r.galleryList)==null||o.addEventListener("click",D),(a=r.colorsList)==null||a.addEventListener("change",W)}function N(){document.addEventListener("click",t=>{const e=t.target.closest("[data-open-product-modal], [data-open-product]");if(!e)return;t.preventDefault();const s=e.dataset.productId||e.getAttribute("data-product-id")||"682f9bbf8acbdf505592ac36";b(s)})}async function b(t){var s;l.lastFocusedEl=document.activeElement,H(),L(!0);const e=++l.requestId;try{const a=await(await fetch(`https://furniture-store-v2.b.goit.study/api/furnitures/${t}`)).json();if(e!==l.requestId)return;R(a),l.isOpen=!0,(s=r.closeBtn)==null||s.focus()}catch(o){console.error("Error fetching product:",o),u(),G("Не вдалося завантажити інформацію про товар. Спробуйте пізніше.")}finally{L(!1)}}function u(){r.backdrop&&(r.backdrop.classList.add("is-hidden"),document.body.style.overflow="",l.isOpen=!1,l.lastFocusedEl&&typeof l.lastFocusedEl.focus=="function"&&l.lastFocusedEl.focus())}function H(){r.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function R(t){j(t),z(t.rate),U(t.images||[]),V(t.color||[])}function j(t){var e;if(r.name&&(r.name.textContent=t.name||""),r.category&&(r.category.textContent=((e=t.category)==null?void 0:e.name)||""),r.price&&(r.price.textContent=J(t.price)),r.description&&(r.description.textContent=t.description||""),t.sizes){const[s,o,a]=t.sizes.split("x").map(i=>i.trim());r.width&&(r.width.textContent=s||"-"),r.height&&(r.height.textContent=o||"-"),r.depth&&(r.depth.textContent=a||"-")}}function z(t=0){if(!r.ratingWrap)return;const e=Math.round(Number(t)),s=Number.isFinite(Number(t))?Number(t).toFixed(1):"0.0";r.ratingWrap.querySelectorAll(".product-modal-star").forEach((a,i)=>{a.classList.toggle("is-active",i<e)}),r.ratingValue&&(r.ratingValue.textContent=s)}function U(t){if(!r.mainImage||!r.galleryList||!t.length)return;const[e,...s]=t;k(e),r.galleryList.querySelectorAll("[data-product-thumb]").forEach((a,i)=>{const n=s[i];n&&(a.src=n,a.srcset=n,a.alt=`Фото ${i+1}`,a.dataset.index=String(i+1))}),r.gallery.dataset.images=JSON.stringify(t)}function D(t){const e=t.target.closest("[data-product-thumb]");if(!e||!r.gallery)return;const s=JSON.parse(r.gallery.dataset.images||"[]"),o=Number(e.dataset.index);s[o]&&k(s[o])}function k(t){!r.mainImage||!t||(r.mainImage.src=t,r.mainImage.srcset=t,r.mainImage.alt="Фото товару")}function V(t){if(!r.colorsList)return;const e=r.colorsList.querySelectorAll(".product-modal-color-checkbox"),s=r.colorsList.querySelectorAll(".product-modal-color-swatch"),o=r.colorsList.querySelectorAll(".visually-hidden"),a={"#c7c3bb":"product-modal-color-swatch--beige","#ffffff":"product-modal-color-swatch--white","#201a19":"product-modal-color-swatch--black"};e.forEach((i,n)=>{const d=t[n];if(d){if(i.value=d,i.checked=n===0,s[n]){const v=a[d]||"product-modal-color-swatch--beige";s[n].className=`product-modal-color-swatch ${v}`,s[n].style.backgroundColor=d}o[n]&&(o[n].textContent=d)}})}function W(t){const e=t.target.closest(".product-modal-color-checkbox");if(!e||!r.colorsList)return;r.colorsList.querySelectorAll(".product-modal-color-checkbox").forEach(o=>{o.checked=o===e})}function _(){if(!r.modal||r.modal.querySelector(".product-modal-loader"))return;const t=document.createElement("div");t.className="product-modal-loader",t.setAttribute("aria-hidden","true"),r.modal.appendChild(t)}function L(t){var s;const e=(s=r.modal)==null?void 0:s.querySelector(".product-modal-loader");e&&(e.classList.toggle("is-visible",t),e.setAttribute("aria-hidden",String(!t)))}function G(t){var e;if((e=window.iziToast)!=null&&e.error){window.iziToast.error({title:"Помилка",message:t,position:"topRight",timeout:3500});return}alert(t)}function J(t){return`${new Intl.NumberFormat("uk-UA").format(Number(t||0))} грн`}function K(){const t=document.querySelector("[data-order-backdrop]");if(t){t.classList.remove("is-hidden"),document.body.style.overflow="hidden";return}document.dispatchEvent(new CustomEvent("open-order-modal"))}window.ProductModal={openById:b,close:u,updateMock(t){}};p.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function Z(){return(await p.get("/categories")).data}async function Q(t="",e=1){const s={page:e,limit:8};return t&&(s.category=t),(await p.get("/furnitures",{params:s})).data}const X=["all-products","sofas","wardrobes","beds","tables","chairs","kitchens","kids","office","hallway","bathroom","outdoor","decor"];function Y(t){return t.map((e,s)=>`
        <li class="category-item">
          <button
            class="category-btn ${X[s]||"default"}"
            type="button"
            data-category="${e._id}">
            ${e.name}
          </button>
        </li>
      `).join("")}function E(t){return t.map(e=>{const{_id:s,name:o,images:a=[],color:i=[],price:n=0}=e,d=a[0]||"placeholder.jpg",v=Array.isArray(i)?i:[i];return`
        <li class="furniture-item">
          <div class="furniture-thumb">
            <img src="${d}" alt="${o}" loading="lazy" />
          </div>
          <div class="furniture-info">
            <h3 class="furniture-heading">${o}</h3>
                <div class="container-colors">
                  <ul class="furniture-color">
                      ${v.map(I=>`
                        <li>
                          <svg width="24" height="24">
                            <circle cx="12" cy="12" r="12" fill="${I}" />
                          </svg>
                        </li>
                      `).join("")}
                   </ul>
               </div>
                    <p class="furniture-price">${n} грн</p>
          </div>
             <button class="details-btn btn-furniture" data-id="${s}" type="button">Детальніше</button>
        </li>
      `}).join("")}function tt(t,e){t.insertAdjacentHTML("beforeend",E(e))}const c={categoriesList:document.querySelector("#categories"),furnitureList:document.querySelector("#furniture-list"),loadMoreBtn:document.querySelector("#load-more"),loader:document.querySelector("#loader")};let m="",g=1;function h(t){q.error({message:t,position:"topRight",maxWidth:400,close:!0})}function y(t){q.info({message:t,position:"topRight",maxWidth:400,close:!0})}function et(){c.furnitureList&&c.furnitureList.addEventListener("click",t=>{const e=t.target.closest(".details-btn");if(!e)return;const s=e.dataset.id;if(!s){y("На жаль, інформація про цей товар недоступна.");return}b(s)})}const st=["Всі товари","М'які меблі","Шафи та системи зберігання","Ліжка та матраци","Столи","Стільці та табурети","Кухні","Меблі для дитячої","Меблі для офісу","Меблі для передпокою","Меблі для ванної кімнати","Садові та вуличні меблі","Декор та аксесуари"];async function rt(){try{C();const t=await Z(),e=st.map(o=>{const a=t.find(i=>i.name.trim()===o.trim());return{_id:o==="Всі товари"?"":a?a._id:"temp-id",name:o}});c.categoriesList.innerHTML=Y(e);const s=c.categoriesList.querySelector(".category-btn");s&&s.classList.add("is-active"),await w("",1),et()}catch{h("Не вдалося завантажити товари. Спробуйте пізніше.")}finally{M()}}document.addEventListener("DOMContentLoaded",rt);async function w(t="",e=1){try{C(),m=t,g=e;const s=await Q(t,e),o=(s==null?void 0:s.furnitures)||[],a=(s==null?void 0:s.totalItems)||0,i=(s==null?void 0:s.limit)||8,n=Math.ceil(a/i);if(e===1){if(c.furnitureList.innerHTML="",o.length===0)return y("Товарів не знайдено"),f(),s;c.furnitureList.innerHTML=E(o)}else tt(c.furnitureList,o);return e>=n||o.length<i?f():ot(),e>1&&(e>=n||o.length<i)&&y("Ви досягли кінця списку"),s}catch{c.furnitureList.innerHTML="",f(),h("Сталася помилка. Спробуйте пізніше")}finally{M()}}async function at(t){var s;const e=t.target.closest(".category-btn");if(e){(s=document.querySelector(".category-btn.is-active"))==null||s.classList.remove("is-active"),e.classList.add("is-active"),m=e.dataset.category||"",g=1;try{await w(m,g)}catch{h("Помилка при зміні категорії")}}}c.categoriesList.addEventListener("click",at);c.loadMoreBtn.addEventListener("click",async()=>{g+=1,f();try{await w(m,g)}catch{h("Сталася помилка. Спробуйте пізніше")}});function C(){var t;(t=c.loader)==null||t.classList.add("is-visible")}function M(){var t;(t=c.loader)==null||t.classList.remove("is-visible")}function ot(){var t;(t=c.loadMoreBtn)==null||t.classList.add("is-visible")}function f(){var t;(t=c.loadMoreBtn)==null||t.classList.remove("is-visible")}const it=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно відрегіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}],S=document.querySelector(".container-faq"),nt=it.map(({question:t,answer:e})=>`
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
        </div></div>`).join("");S&&(S.innerHTML=nt,new T(".container-faq",{duration:400,сollapse:!0,showMultiple:!1}));function ct(t){const e=t.rate,s=Math.floor(e),a=e%1!==0?"half":"";return`<li class="feedback-item">
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
	<p class="feedback-text">${t.descr}</p>
	<p class="feedback-author">${t.name}</p>
</li>`}function lt(t){const e=document.querySelector(".feedback-list");!e||!t||!t.length||(e.innerHTML=t.map(ct).join(""))}window.FeedbackModule={render:lt};const dt=document.querySelector(".swiper-wrapper"),x=document.querySelector(".swiper-button-prev"),$=document.querySelector(".swiper-button-next"),B=document.querySelector(".swiper-pagination");async function ut(){const s="https://furniture-store-v2.b.goit.study/api"+"/feedbacks",o={limit:10,page:1};return(await p.get(s,{params:o})).data}function gt(t){const e=t.rate,s=Math.floor(e),a=e%1!==0?"half":"";return`<li class="feedback-item swiper-slide">
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
        <p class="feedback-text">${t.descr}</p>
        <p class="feedback-author">${t.name}</p>
      </li>`}function ft(t){return t.map(gt).join("")}function mt(){new A(".swiper",{modules:[F,O],direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},allowSlideNext:!0,allowSlidePrev:!0,grabCursor:!0,simulateTouch:!0})}function pt(){x.classList.remove("hidden"),$.classList.remove("hidden"),B.classList.remove("hidden")}function ht(){x.classList.add("hidden"),$.classList.add("hidden"),B.classList.add("hidden")}document.addEventListener("DOMContentLoaded",async()=>{ht();try{const t=await ut();dt.insertAdjacentHTML("afterbegin",ft(t.feedbacks)),mt(),pt()}catch{}finally{}});window.addEventListener("load",()=>{const t=document.getElementById("loader");t.classList.add("hidden"),setTimeout(()=>{t.style.display="none"},8e3)});
//# sourceMappingURL=index.js.map

import{a as p,i as S,A as P,S as A,N as F,P as N}from"./assets/vendor-CXD_EiBz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();p.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function O(){return(await p.get("/categories")).data}async function j(t="",e=1){const s={page:e,limit:8};return t&&(s.category=t),(await p.get("/furnitures",{params:s})).data}const R=["all-products","sofas","wardrobes","beds","tables","chairs","kitchens","kids","office","hallway","bathroom","outdoor","decor"];function H(t){return t.map((e,s)=>`
        <li class="category-item">
          <button
            class="category-btn ${R[s]||"default"}"
            type="button"
            data-category="${e._id}">
            ${e.name}
          </button>
        </li>
      `).join("")}function q(t){return t.map(e=>{const{_id:s,name:a,images:o=[],color:i=[],price:n=0}=e,d=o[0]||"placeholder.jpg",v=Array.isArray(i)?i:[i];return`
        <li class="furniture-item" data-id="${s}">
          <div class="furniture-thumb">
            <img src="${d}" alt="${a}" loading="lazy" />
          </div>
          <div class="furniture-info">
            <h3 class="furniture-heading">${a}</h3>
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
             <button class="details-btn" type="button">Детальніше</button>
        </li>
      `}).join("")}function _(t,e){t.insertAdjacentHTML("beforeend",q(e))}const c={categoriesList:document.querySelector("#categories"),furnitureList:document.querySelector("#furniture-list"),loadMoreBtn:document.querySelector("#load-more"),loader:document.querySelector("#loader")};let m="",f=1;function h(t){S.error({message:t,position:"topRight"})}function b(t){S.info({message:t,position:"topRight"})}function z(){c.furnitureList&&c.furnitureList.addEventListener("click",t=>{const e=t.target.closest(".details-btn");if(!e||!e.closest(".furniture-item"))return;const a=e.dataset.id;typeof openProductModal=="function"&&openProductModal(a)})}const U=["Всі товари","М'які меблі","Шафи та системи зберігання","Ліжка та матраци","Столи","Стільці та табурети","Кухні","Меблі для дитячої","Меблі для офісу","Меблі для передпокою","Меблі для ванної кімнати","Садові та вуличні меблі","Декор та аксесуари"];async function D(){try{k();const t=await O(),e=U.map(a=>{const o=t.find(i=>i.name.trim()===a.trim());return{_id:a==="Всі товари"?"":o?o._id:"temp-id",name:a}});c.categoriesList.innerHTML=H(e);const s=c.categoriesList.querySelector(".category-btn");s&&s.classList.add("is-active"),await y("",1),z()}catch{h("Не вдалося завантажити товари. Спробуйте пізніше.")}finally{C()}}document.addEventListener("DOMContentLoaded",D);async function y(t="",e=1){try{k(),m=t,f=e;const s=await j(t,e),a=(s==null?void 0:s.furnitures)||[],o=(s==null?void 0:s.totalItems)||0,i=(s==null?void 0:s.limit)||8,n=Math.ceil(o/i);if(e===1){if(c.furnitureList.innerHTML="",a.length===0)return b("Товарів не знайдено"),g(),s;c.furnitureList.innerHTML=q(a)}else _(c.furnitureList,a);return e>=n||a.length<i?g():G(),e>1&&(e>=n||a.length<i)&&b("Ви досягли кінця списку"),s}catch{c.furnitureList.innerHTML="",g(),h("Сталася помилка. Спробуйте пізніше")}finally{C()}}async function V(t){var s;const e=t.target.closest(".category-btn");if(e){(s=document.querySelector(".category-btn.is-active"))==null||s.classList.remove("is-active"),e.classList.add("is-active"),m=e.dataset.category||"",f=1;try{await y(m,f)}catch{h("Помилка при зміні категорії")}}}c.categoriesList.addEventListener("click",V);c.loadMoreBtn.addEventListener("click",async()=>{f+=1,g();try{await y(m,f)}catch{h("Сталася помилка. Спробуйте пізніше")}});function k(){var t;(t=c.loader)==null||t.classList.add("is-visible")}function C(){var t;(t=c.loader)==null||t.classList.remove("is-visible")}function G(){var t;(t=c.loadMoreBtn)==null||t.classList.add("is-visible")}function g(){var t;(t=c.loadMoreBtn)==null||t.classList.remove("is-visible")}const E=[{_id:"682f9bbf8acbdf505592ac36",name:'Диван "Комфорт Плюс"',rate:4.8,price:9999,sizes:"220x95x90",category:{_id:"66504a50a1b2c3d4e5f6a7b9",name:"Дивани"},description:"Класичний диван з м’якими подушками та високою спинкою, ідеальний для сімейного відпочинку. Оббивка з якісної зносостійкої тканини.",images:["./img/product-modal/bigsofa1x.jpg","./img/product-modal/cornersofa1x.jpg","./img/product-modal/smallsofa1x.jpg"],color:["#c7c3bb","#ffffff","#201a19"]},{_id:"682f9bbf8acbdf505592ac37",name:"Крісло Comfort",rate:4.5,price:2499,sizes:"85x110x90",category:{_id:"66504a50a1b2c3d4e5f6a7ba",name:"Крісла"},description:"Зручне крісло з опорою для спини. Підходить для робочого кабінету або вітальні. Екологічна тканина.",images:["./img/product-modal/cornersofa1x.jpg","./img/product-modal/bigsofa1x.jpg"],color:["#c7c3bb","#201a19"]},{_id:"682f9bbf8acbdf505592ac38",name:"Ліжко Premium",rate:5,price:15999,sizes:"160x50x200",category:{_id:"66504a50a1b2c3d4e5f6a7bb",name:"Ліжка"},description:"Ортопедичне ліжко з матрацом. Покращує якість сну. Розмір: 160х200 см.",images:["./img/product-modal/smallsofa1x.jpg","./img/product-modal/bigsofa1x.jpg"],color:["#201a19","#ffffff"]}],r={backdrop:document.querySelector("[data-product-backdrop]"),modal:document.querySelector("[data-product-modal]"),closeBtn:document.querySelector(".product-modal-close"),orderBtn:document.querySelector("[data-open-order-modal]"),gallery:document.querySelector("[data-product-gallery]"),mainImage:document.querySelector("[data-product-main-image]"),galleryList:document.querySelector(".product-modal-gallery-list"),name:document.querySelector("[data-product-name]"),category:document.querySelector("[data-product-category]"),price:document.querySelector("[data-product-price]"),ratingWrap:document.querySelector("[data-product-rating]"),ratingValue:document.querySelector("[data-product-rating-value]"),colorsList:document.querySelector("[data-product-colors]"),description:document.querySelector("[data-product-description]"),width:document.querySelector("[data-product-width]"),height:document.querySelector("[data-product-height]"),depth:document.querySelector("[data-product-depth]")},l={isOpen:!1,lastFocusedEl:null,requestId:0};r.backdrop&&r.modal&&(rt(),W(),J());function W(){var t,e,s,a,o;(t=r.closeBtn)==null||t.addEventListener("click",u),(e=r.backdrop)==null||e.addEventListener("click",i=>{i.target===r.backdrop&&u()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&l.isOpen&&u()}),(s=r.orderBtn)==null||s.addEventListener("click",()=>{u(),nt()}),(a=r.galleryList)==null||a.addEventListener("click",tt),(o=r.colorsList)==null||o.addEventListener("change",st)}function J(){document.addEventListener("click",t=>{const e=t.target.closest("[data-open-product-modal], [data-open-product]");if(!e)return;t.preventDefault();const s=e.dataset.productId||e.getAttribute("data-product-id")||"682f9bbf8acbdf505592ac36";x(s)})}async function x(t="682f9bbf8acbdf505592ac36"){var s;l.lastFocusedEl=document.activeElement,K(),w(!0);const e=++l.requestId;try{const a=await it(t);if(e!==l.requestId)return;Z(a),l.isOpen=!0,(s=r.closeBtn)==null||s.focus()}catch{u(),at("Не вдалося завантажити інформацію про товар. Спробуйте пізніше.")}finally{w(!1)}}function u(){r.backdrop&&(r.backdrop.classList.add("is-hidden"),document.body.style.overflow="",l.isOpen=!1,l.lastFocusedEl&&typeof l.lastFocusedEl.focus=="function"&&l.lastFocusedEl.focus())}function K(){r.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function Z(t){Q(t),X(t.rate),Y(t.images||[]),et(t.color||[])}function Q(t){var e;if(r.name&&(r.name.textContent=t.name||""),r.category&&(r.category.textContent=((e=t.category)==null?void 0:e.name)||""),r.price&&(r.price.textContent=ot(t.price)),r.description&&(r.description.textContent=t.description||""),t.sizes){const[s,a,o]=t.sizes.split("x").map(i=>i.trim());r.width&&(r.width.textContent=s||"-"),r.height&&(r.height.textContent=a||"-"),r.depth&&(r.depth.textContent=o||"-")}}function X(t=0){if(!r.ratingWrap)return;const e=Math.round(Number(t)),s=Number.isFinite(Number(t))?Number(t).toFixed(1):"0.0";r.ratingWrap.querySelectorAll(".product-modal-star").forEach((o,i)=>{o.classList.toggle("is-active",i<e)}),r.ratingValue&&(r.ratingValue.textContent=s)}function Y(t){if(!r.mainImage||!r.galleryList||!t.length)return;const[e,...s]=t;M(e),r.galleryList.querySelectorAll("[data-product-thumb]").forEach((o,i)=>{const n=s[i];n&&(o.src=n,o.srcset=n,o.alt=`Фото ${i+1}`,o.dataset.index=String(i+1))}),r.gallery.dataset.images=JSON.stringify(t)}function tt(t){const e=t.target.closest("[data-product-thumb]");if(!e||!r.gallery)return;const s=JSON.parse(r.gallery.dataset.images||"[]"),a=Number(e.dataset.index);s[a]&&M(s[a])}function M(t){!r.mainImage||!t||(r.mainImage.src=t,r.mainImage.srcset=t,r.mainImage.alt="Фото товару")}function et(t){if(!r.colorsList)return;const e=r.colorsList.querySelectorAll(".product-modal-color-checkbox"),s=r.colorsList.querySelectorAll(".product-modal-color-swatch"),a=r.colorsList.querySelectorAll(".visually-hidden"),o={"#c7c3bb":"product-modal-color-swatch--beige","#ffffff":"product-modal-color-swatch--white","#201a19":"product-modal-color-swatch--black"};e.forEach((i,n)=>{const d=t[n];if(d){if(i.value=d,i.checked=n===0,s[n]){const v=o[d]||"product-modal-color-swatch--beige";s[n].className=`product-modal-color-swatch ${v}`,s[n].style.backgroundColor=d}a[n]&&(a[n].textContent=d)}})}function st(t){const e=t.target.closest(".product-modal-color-checkbox");if(!e||!r.colorsList)return;r.colorsList.querySelectorAll(".product-modal-color-checkbox").forEach(a=>{a.checked=a===e})}function rt(){if(!r.modal||r.modal.querySelector(".product-modal-loader"))return;const t=document.createElement("div");t.className="product-modal-loader",t.setAttribute("aria-hidden","true"),r.modal.appendChild(t)}function w(t){var s;const e=(s=r.modal)==null?void 0:s.querySelector(".product-modal-loader");e&&(e.classList.toggle("is-visible",t),e.setAttribute("aria-hidden",String(!t)))}function at(t){var e;if((e=window.iziToast)!=null&&e.error){window.iziToast.error({title:"Помилка",message:t,position:"topRight",timeout:3500});return}alert(t)}function ot(t){return`${new Intl.NumberFormat("uk-UA").format(Number(t||0))} грн`}async function it(t){return new Promise((e,s)=>{setTimeout(()=>{const a=E.find(o=>o._id===String(t));if(!a){s(new Error("Not found"));return}e(a)},450)})}function nt(){const t=document.querySelector("[data-order-backdrop]");if(t){t.classList.remove("is-hidden"),document.body.style.overflow="hidden";return}document.dispatchEvent(new CustomEvent("open-order-modal"))}window.ProductModal={openById:x,close:u,updateMock(t){E.push(t)}};const ct=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно відрегіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}],L=document.querySelector(".container-faq"),lt=ct.map(({question:t,answer:e})=>`
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
        </div></div>`).join("");L&&(L.innerHTML=lt,new P(".container-faq",{duration:400,сollapse:!0,showMultiple:!1}));function dt(t){const e=t.rate,s=Math.floor(e),o=e%1!==0?"half":"";return`<li class="feedback-item">
	<div class="rating star-svg value-${s} ${o} color-default">
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
</li>`}function ut(t){const e=document.querySelector(".feedback-list");!e||!t||!t.length||(e.innerHTML=t.map(dt).join(""))}window.FeedbackModule={render:ut};const ft=document.querySelector(".swiper-wrapper"),$=document.querySelector(".swiper-button-prev"),I=document.querySelector(".swiper-button-next"),T=document.querySelector(".swiper-pagination");async function gt(){const s="https://furniture-store-v2.b.goit.study/api"+"/feedbacks",a={limit:10,page:1};return(await p.get(s,{params:a})).data}function mt(t){const e=t.rate,s=Math.floor(e),o=e%1!==0?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="rating star-svg value-${s} ${o} color-default">
        <ul class="star-container">
          <li class="star">
          <svg class="star-empty">
                <use href="../img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="../img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="../img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="../img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="../img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="../img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="../img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="../img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="../img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="../img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="../img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="../img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="../img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="../img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="../img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
        </ul>
        </div>
        <p class="feedback-text">${t.descr}</p>
        <p class="feedback-author">${t.name}</p>
      </li>`}function pt(t){return t.map(mt).join("")}function ht(){new A(".swiper",{modules:[F,N],direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},allowSlideNext:!0,allowSlidePrev:!0,grabCursor:!0,simulateTouch:!0})}function vt(){$.classList.remove("hidden"),I.classList.remove("hidden"),T.classList.remove("hidden")}function yt(){$.classList.add("hidden"),I.classList.add("hidden"),T.classList.add("hidden")}document.addEventListener("DOMContentLoaded",async()=>{yt();try{const t=await gt();ft.insertAdjacentHTML("afterbegin",pt(t.feedbacks)),ht(),vt()}catch{}finally{}});window.addEventListener("load",()=>{const t=document.getElementById("loader");t.classList.add("hidden"),setTimeout(()=>{t.style.display="none"},8e3)});
//# sourceMappingURL=index.js.map

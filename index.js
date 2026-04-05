import{a as f,i as S,A as I,S as T,N as P,P as j}from"./assets/vendor-CXD_EiBz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();f.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function N(){return(await f.get("/categories")).data}async function O(t="",e=1){const s={page:e,limit:8};return t&&(s.category=t),(await f.get("/furnitures",{params:s})).data}const _=["all-products","sofas","wardrobes","beds","tables","chairs","kitchens","kids","office","hallway","bathroom","outdoor","decor"];function z(t){return t.map((e,s)=>`
        <li class="category-item">
          <button
            class="category-btn ${_[s]||"default"}"
            type="button"
            data-category="${e._id}">
            ${e.name}
          </button>
        </li>
      `).join("")}function q(t){return t.map(e=>{const{_id:s,name:o,images:i=[],color:a=[],price:n=0}=e,d=i[0]||"placeholder.jpg",v=Array.isArray(a)?a:[a];return`
        <li class="furniture-item" data-id="${s}">
          <div class="furniture-thumb">
            <img src="${d}" alt="${o}" loading="lazy" />
          </div>
          <div class="furniture-info">
            <h3 class="furniture-heading">${o}</h3>
                <div class="container-colors">
                  <ul class="furniture-color">
                      ${v.map(F=>`
                        <li>
                          <svg width="24" height="24">
                            <circle cx="12" cy="12" r="12" fill="${F}" />
                          </svg>
                        </li>
                      `).join("")}
                   </ul>
               </div>
                    <p class="furniture-price">${n} грн</p>
          </div>
             <button class="details-btn" type="button">Детальніше</button>
        </li>
      `}).join("")}function R(t,e){t.insertAdjacentHTML("beforeend",q(e))}const c={categoriesList:document.querySelector("#categories"),furnitureList:document.querySelector("#furniture-list"),loadMoreBtn:document.querySelector("#load-more"),loader:document.querySelector("#loader")};let p="",g=1;function h(t){S.error({message:t,position:"topRight"})}function b(t){S.info({message:t,position:"topRight"})}function H(){c.furnitureList&&c.furnitureList.addEventListener("click",t=>{const e=t.target.closest(".details-btn");if(!e||!e.closest(".furniture-item"))return;const o=e.dataset.id;typeof openProductModal=="function"&&openProductModal(o)})}const U=["Всі товари","М'які меблі","Шафи та системи зберігання","Ліжка та матраци","Столи","Стільці та табурети","Кухні","Меблі для дитячої","Меблі для офісу","Меблі для передпокою","Меблі для ванної кімнати","Садові та вуличні меблі","Декор та аксесуари"];async function V(){try{k();const t=await N(),e=U.map(o=>{const i=t.find(a=>a.name.trim()===o.trim());return{_id:o==="Всі товари"?"":i?i._id:"temp-id",name:o}});c.categoriesList.innerHTML=z(e);const s=c.categoriesList.querySelector(".category-btn");s&&s.classList.add("is-active"),await y("",1),H()}catch{h("Не вдалося завантажити товари. Спробуйте пізніше.")}finally{x()}}document.addEventListener("DOMContentLoaded",V);async function y(t="",e=1){try{k(),p=t,g=e;const s=await O(t,e),o=(s==null?void 0:s.furnitures)||[],i=(s==null?void 0:s.totalItems)||0,a=(s==null?void 0:s.limit)||8,n=Math.ceil(i/a);if(e===1){if(c.furnitureList.innerHTML="",o.length===0)return b("Товарів не знайдено"),m(),s;c.furnitureList.innerHTML=q(o)}else R(c.furnitureList,o);return e>=n||o.length<a?m():G(),e>1&&(e>=n||o.length<a)&&b("Ви досягли кінця списку"),s}catch{c.furnitureList.innerHTML="",m(),h("Сталася помилка. Спробуйте пізніше")}finally{x()}}async function D(t){var s;const e=t.target.closest(".category-btn");if(e){(s=document.querySelector(".category-btn.is-active"))==null||s.classList.remove("is-active"),e.classList.add("is-active"),p=e.dataset.category||"",g=1;try{await y(p,g)}catch{h("Помилка при зміні категорії")}}}c.categoriesList.addEventListener("click",D);c.loadMoreBtn.addEventListener("click",async()=>{g+=1,m();try{await y(p,g)}catch{h("Сталася помилка. Спробуйте пізніше")}});function k(){var t;(t=c.loader)==null||t.classList.add("is-visible")}function x(){var t;(t=c.loader)==null||t.classList.remove("is-visible")}function G(){var t;(t=c.loadMoreBtn)==null||t.classList.add("is-visible")}function m(){var t;(t=c.loadMoreBtn)==null||t.classList.remove("is-visible")}const W="https://furniture-store-v2.b.goit.study",J=f.create({baseURL:W,timeout:1e4});async function K(t){if(!t)throw new Error("Furniture id is required");const{data:e}=await J.get(`/furnitures/${t}`);return e}const E=[{_id:"682f9bbf8acbdf505592ac36",name:'Диван "Комфорт Плюс"',rate:4.8,price:9999,sizes:"220x95x90",category:{_id:"66504a50a1b2c3d4e5f6a7b9",name:"Дивани"},description:"Класичний диван з м’якими подушками та високою спинкою, ідеальний для сімейного відпочинку. Оббивка з якісної зносостійкої тканини.",images:["./img/product-modal/bigsofa1x.jpg","./img/product-modal/cornersofa1x.jpg","./img/product-modal/smallsofa1x.jpg"],color:["#c7c3bb","#ffffff","#201a19"]},{_id:"682f9bbf8acbdf505592ac37",name:"Крісло Comfort",rate:4.5,price:2499,sizes:"85x110x90",category:{_id:"66504a50a1b2c3d4e5f6a7ba",name:"Крісла"},description:"Зручне крісло з опорою для спини. Підходить для робочого кабінету або вітальні. Екологічна тканина.",images:["./img/product-modal/cornersofa1x.jpg","./img/product-modal/bigsofa1x.jpg"],color:["#c7c3bb","#201a19"]},{_id:"682f9bbf8acbdf505592ac38",name:"Ліжко Premium",rate:5,price:15999,sizes:"160x50x200",category:{_id:"66504a50a1b2c3d4e5f6a7bb",name:"Ліжка"},description:"Ортопедичне ліжко з матрацом. Покращує якість сну. Розмір: 160х200 см.",images:["./img/product-modal/smallsofa1x.jpg","./img/product-modal/bigsofa1x.jpg"],color:["#201a19","#ffffff"]}],r={backdrop:document.querySelector("[data-product-backdrop]"),modal:document.querySelector("[data-product-modal]"),closeBtn:document.querySelector(".product-modal-close"),orderBtn:document.querySelector("[data-open-order-modal]"),gallery:document.querySelector("[data-product-gallery]"),mainImage:document.querySelector("[data-product-main-image]"),galleryList:document.querySelector(".product-modal-gallery-list"),name:document.querySelector("[data-product-name]"),category:document.querySelector("[data-product-category]"),price:document.querySelector("[data-product-price]"),ratingWrap:document.querySelector("[data-product-rating]"),ratingValue:document.querySelector("[data-product-rating-value]"),colorsList:document.querySelector("[data-product-colors]"),description:document.querySelector("[data-product-description]"),width:document.querySelector("[data-product-width]"),height:document.querySelector("[data-product-height]"),depth:document.querySelector("[data-product-depth]")},l={isOpen:!1,lastFocusedEl:null,requestId:0};r.backdrop&&r.modal&&(it(),Z(),Q());function Z(){var t,e,s,o,i;(t=r.closeBtn)==null||t.addEventListener("click",u),(e=r.backdrop)==null||e.addEventListener("click",a=>{a.target===r.backdrop&&u()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&l.isOpen&&u()}),(s=r.orderBtn)==null||s.addEventListener("click",()=>{u(),ut()}),(o=r.galleryList)==null||o.addEventListener("click",rt),(i=r.colorsList)==null||i.addEventListener("change",ot)}function Q(){document.addEventListener("click",t=>{const e=t.target.closest("[data-open-product-modal], [data-open-product]");if(!e)return;t.preventDefault();const s=e.dataset.productId||e.getAttribute("data-product-id")||"682f9bbf8acbdf505592ac36";C(s)})}async function C(t="682f9bbf8acbdf505592ac36"){var s;l.lastFocusedEl=document.activeElement,X(),w(!0);const e=++l.requestId;try{const o=await lt(t);return e!==l.requestId?void 0:(Y(o),l.isOpen=!0,(s=r.closeBtn)==null||s.focus(),o)}catch{return u(),nt("Не вдалося завантажити інформацію про товар. Спробуйте пізніше."),null}finally{w(!1)}}function u(){r.backdrop&&(r.backdrop.classList.add("is-hidden"),document.body.style.overflow="",l.isOpen=!1,l.lastFocusedEl&&typeof l.lastFocusedEl.focus=="function"&&l.lastFocusedEl.focus())}function X(){r.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function Y(t){tt(t),et(t.rate),st(t.images||[]),at(t.color||[])}function tt(t){var e;if(r.name&&(r.name.textContent=t.name||""),r.category&&(r.category.textContent=((e=t.category)==null?void 0:e.name)||""),r.price&&(r.price.textContent=ct(t.price)),r.description&&(r.description.textContent=t.description||""),t.sizes){const[s,o,i]=t.sizes.split("x").map(a=>a.trim());r.width&&(r.width.textContent=s||"-"),r.height&&(r.height.textContent=o||"-"),r.depth&&(r.depth.textContent=i||"-")}}function et(t=0){if(!r.ratingWrap)return;const e=Math.round(Number(t)),s=Number.isFinite(Number(t))?Number(t).toFixed(1):"0.0";r.ratingWrap.querySelectorAll(".product-modal-star").forEach((i,a)=>{i.classList.toggle("is-active",a<e)}),r.ratingValue&&(r.ratingValue.textContent=s)}function st(t){if(!r.mainImage||!r.galleryList||!t.length)return;const[e,...s]=t;M(e),r.galleryList.querySelectorAll("[data-product-thumb]").forEach((i,a)=>{const n=s[a];n&&(i.src=n,i.srcset=n,i.alt=`Фото ${a+1}`,i.dataset.index=String(a+1))}),r.gallery.dataset.images=JSON.stringify(t)}function rt(t){const e=t.target.closest("[data-product-thumb]");if(!e||!r.gallery)return;const s=JSON.parse(r.gallery.dataset.images||"[]"),o=Number(e.dataset.index);s[o]&&M(s[o])}function M(t){!r.mainImage||!t||(r.mainImage.src=t,r.mainImage.srcset=t,r.mainImage.alt="Фото товару")}function at(t){if(!r.colorsList)return;const e=r.colorsList.querySelectorAll(".product-modal-color-checkbox"),s=r.colorsList.querySelectorAll(".product-modal-color-swatch"),o=r.colorsList.querySelectorAll(".visually-hidden"),i={"#c7c3bb":"product-modal-color-swatch--beige","#ffffff":"product-modal-color-swatch--white","#201a19":"product-modal-color-swatch--black"};e.forEach((a,n)=>{const d=t[n];if(d){if(a.value=d,a.checked=n===0,s[n]){const v=i[d]||"product-modal-color-swatch--beige";s[n].className=`product-modal-color-swatch ${v}`,s[n].style.backgroundColor=d}o[n]&&(o[n].textContent=d)}})}function ot(t){const e=t.target.closest(".product-modal-color-checkbox");if(!e||!r.colorsList)return;r.colorsList.querySelectorAll(".product-modal-color-checkbox").forEach(o=>{o.checked=o===e})}function it(){if(!r.modal||r.modal.querySelector(".product-modal-loader"))return;const t=document.createElement("div");t.className="product-modal-loader",t.setAttribute("aria-hidden","true"),r.modal.appendChild(t)}function w(t){var s;const e=(s=r.modal)==null?void 0:s.querySelector(".product-modal-loader");e&&(e.classList.toggle("is-visible",t),e.setAttribute("aria-hidden",String(!t)))}function nt(t){var e;if((e=window.iziToast)!=null&&e.error){window.iziToast.error({title:"Помилка",message:t,position:"topRight",timeout:3500});return}alert(t)}function ct(t){return`${new Intl.NumberFormat("uk-UA").format(Number(t||0))} грн`}async function lt(t){const e=E.find(s=>s._id===String(t));if(e)return e;try{const s=await K(t);return dt(s)}catch(s){throw s}}function dt(t){if(!t||typeof t!="object")return t;const e=Array.isArray(t.images)?t.images.map(a=>typeof a=="string"?a:a&&typeof a=="object"&&a.src||"").filter(Boolean):[],s=Array.isArray(t.color)?t.color:Array.isArray(t.colors)?t.colors.map(a=>typeof a=="string"?a:a&&typeof a=="object"&&a.value||"").filter(Boolean):[],o=typeof t.sizes=="string"&&t.sizes.includes("x"),i=t.dimensions?`${t.dimensions.width??"-"}x${t.dimensions.height??"-"}x${t.dimensions.depth??"-"}`:"-x-x-";return{...t,_id:t._id||t.id||"",rate:Number(t.rate??t.rating??0),sizes:o?t.sizes:i,images:e,color:s,category:typeof t.category=="string"?{_id:"",name:t.category}:t.category||{_id:"",name:t.type||""}}}function ut(){const t=document.querySelector("[data-order-backdrop]");if(t){t.classList.remove("is-hidden"),document.body.style.overflow="hidden";return}document.dispatchEvent(new CustomEvent("open-order-modal"))}window.ProductModal={openById:C,close:u,updateMock(t){E.push(t)}};const gt=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно відрегіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}],L=document.querySelector(".container-faq"),ft=gt.map(({question:t,answer:e})=>`
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
        </div></div>`).join("");L&&(L.innerHTML=ft,new I(".container-faq",{duration:400,сollapse:!0,showMultiple:!1}));function mt(t){const e=t.rate,s=Math.floor(e),i=e%1!==0?"half":"";return`<li class="feedback-item">
	<div class="rating star-svg value-${s} ${i} color-default">
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
</li>`}function pt(t){const e=document.querySelector(".feedback-list");!e||!t||!t.length||(e.innerHTML=t.map(mt).join(""))}window.FeedbackModule={render:pt};const ht=document.querySelector(".swiper-wrapper"),$=document.querySelector(".swiper-button-prev"),A=document.querySelector(".swiper-button-next"),B=document.querySelector(".swiper-pagination");async function vt(){const s="https://furniture-store-v2.b.goit.study/api"+"/feedbacks",o={limit:10,page:1};return(await f.get(s,{params:o})).data}function yt(t){const e=t.rate,s=Math.floor(e),i=e%1!==0?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="rating star-svg value-${s} ${i} color-default">
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
      </li>`}function bt(t){return t.map(yt).join("")}function wt(){new T(".swiper",{modules:[P,j],direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},allowSlideNext:!0,allowSlidePrev:!0,grabCursor:!0,simulateTouch:!0})}function Lt(){$.classList.remove("hidden"),A.classList.remove("hidden"),B.classList.remove("hidden")}function St(){$.classList.add("hidden"),A.classList.add("hidden"),B.classList.add("hidden")}document.addEventListener("DOMContentLoaded",async()=>{St();try{const t=await vt();ht.insertAdjacentHTML("afterbegin",bt(t.feedbacks)),wt(),Lt()}catch{}finally{}});window.addEventListener("load",()=>{const t=document.getElementById("loader");t.classList.add("hidden"),setTimeout(()=>{t.style.display="none"},8e3)});
//# sourceMappingURL=index.js.map

import{a as p,i as q,A,S as T,N as O,P}from"./assets/vendor-DWEB2HqH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const s={backdrop:document.querySelector("[data-product-backdrop]"),modal:document.querySelector("[data-product-modal]"),closeBtn:document.querySelector(".product-modal-close"),orderBtn:document.querySelector("[data-open-order-modal]"),gallery:document.querySelector("[data-product-gallery]"),mainImage:document.querySelector("[data-product-main-image]"),galleryList:document.querySelector(".product-modal-gallery-list"),name:document.querySelector("[data-product-name]"),category:document.querySelector("[data-product-category]"),price:document.querySelector("[data-product-price]"),ratingWrap:document.querySelector("[data-product-rating]"),ratingValue:document.querySelector("[data-product-rating-value]"),colorsList:document.querySelector("[data-product-colors]"),description:document.querySelector("[data-product-description]"),width:document.querySelector("[data-product-width]"),height:document.querySelector("[data-product-height]"),depth:document.querySelector("[data-product-depth]")},l={isOpen:!1,lastFocusedEl:null,requestId:0};s.backdrop&&s.modal&&(_(),N(),F());function N(){var t,e,r,a,o;(t=s.closeBtn)==null||t.addEventListener("click",u),(e=s.backdrop)==null||e.addEventListener("click",n=>{n.target===s.backdrop&&u()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&l.isOpen&&u()}),(r=s.orderBtn)==null||r.addEventListener("click",()=>{u(),K()}),(a=s.galleryList)==null||a.addEventListener("click",D),(o=s.colorsList)==null||o.addEventListener("change",W)}function F(){document.addEventListener("click",t=>{const e=t.target.closest("[data-open-product-modal], [data-open-product]");if(!e)return;t.preventDefault();const r=e.dataset.productId||e.getAttribute("data-product-id")||"682f9bbf8acbdf505592ac36";b(r)})}async function b(t){var r;l.lastFocusedEl=document.activeElement,R(),w(!0);const e=++l.requestId;try{const o=await(await fetch(`https://furniture-store-v2.b.goit.study/api/furnitures/${t}`)).json();if(e!==l.requestId)return;H(o),l.isOpen=!0,(r=s.closeBtn)==null||r.focus()}catch(a){console.error("Error fetching product:",a),u(),G("Не вдалося завантажити інформацію про товар. Спробуйте пізніше.")}finally{w(!1)}}function u(){s.backdrop&&(s.backdrop.classList.add("is-hidden"),document.body.style.overflow="",l.isOpen=!1,l.lastFocusedEl&&typeof l.lastFocusedEl.focus=="function"&&l.lastFocusedEl.focus())}function R(){s.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function H(t){j(t),z(t.rate),U(t.images||[]),V(t.color||[])}function j(t){var e;if(s.name&&(s.name.textContent=t.name||""),s.category&&(s.category.textContent=((e=t.category)==null?void 0:e.name)||""),s.price&&(s.price.textContent=J(t.price)),s.description&&(s.description.textContent=t.description||""),t.sizes){const[r,a,o]=t.sizes.split("x").map(n=>n.trim());s.width&&(s.width.textContent=r||"-"),s.height&&(s.height.textContent=a||"-"),s.depth&&(s.depth.textContent=o||"-")}}function z(t=0){if(!s.ratingWrap)return;const e=Math.round(Number(t)),r=Number.isFinite(Number(t))?Number(t).toFixed(1):"0.0";s.ratingWrap.querySelectorAll(".product-modal-star").forEach((o,n)=>{o.classList.toggle("is-active",n<e)}),s.ratingValue&&(s.ratingValue.textContent=r)}function U(t){if(!s.mainImage||!s.galleryList||!t.length)return;const[e,...r]=t;k(e),s.galleryList.querySelectorAll("[data-product-thumb]").forEach((o,n)=>{const i=r[n];i&&(o.src=i,o.srcset=i,o.alt=`Фото ${n+1}`,o.dataset.index=String(n+1))}),s.gallery.dataset.images=JSON.stringify(t)}function D(t){const e=t.target.closest("[data-product-thumb]");if(!e||!s.gallery)return;const r=JSON.parse(s.gallery.dataset.images||"[]"),a=Number(e.dataset.index);r[a]&&k(r[a])}function k(t){!s.mainImage||!t||(s.mainImage.src=t,s.mainImage.srcset=t,s.mainImage.alt="Фото товару")}function V(t){if(!s.colorsList)return;const e=s.colorsList.querySelectorAll(".product-modal-color-checkbox"),r=s.colorsList.querySelectorAll(".product-modal-color-swatch"),a=s.colorsList.querySelectorAll(".visually-hidden"),o={"#c7c3bb":"product-modal-color-swatch--beige","#ffffff":"product-modal-color-swatch--white","#201a19":"product-modal-color-swatch--black"};e.forEach((n,i)=>{const d=t[i];if(d){if(n.value=d,n.checked=i===0,r[i]){const y=o[d]||"product-modal-color-swatch--beige";r[i].className=`product-modal-color-swatch ${y}`,r[i].style.backgroundColor=d}a[i]&&(a[i].textContent=d)}})}function W(t){const e=t.target.closest(".product-modal-color-checkbox");if(!e||!s.colorsList)return;s.colorsList.querySelectorAll(".product-modal-color-checkbox").forEach(a=>{a.checked=a===e})}function _(){if(!s.modal||s.modal.querySelector(".product-modal-loader"))return;const t=document.createElement("div");t.className="product-modal-loader",t.setAttribute("aria-hidden","true"),s.modal.appendChild(t)}function w(t){var r;const e=(r=s.modal)==null?void 0:r.querySelector(".product-modal-loader");e&&(e.classList.toggle("is-visible",t),e.setAttribute("aria-hidden",String(!t)))}function G(t){var e;if((e=window.iziToast)!=null&&e.error){window.iziToast.error({title:"Помилка",message:t,position:"topRight",timeout:3500});return}alert(t)}function J(t){return`${new Intl.NumberFormat("uk-UA").format(Number(t||0))} грн`}function K(){const t=document.querySelector("[data-order-backdrop]");if(t){t.classList.remove("is-hidden"),document.body.style.overflow="hidden";return}document.dispatchEvent(new CustomEvent("open-order-modal"))}window.ProductModal={openById:b,close:u,updateMock(t){}};p.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function Z(){return(await p.get("/categories")).data}async function Q(t="",e=1){const r={page:e,limit:8};return t&&(r.category=t),(await p.get("/furnitures",{params:r})).data}const X=["all-products","sofas","wardrobes","beds","tables","chairs","kitchens","kids","office","hallway","bathroom","outdoor","decor"];function Y(t){return t.map((e,r)=>`
        <li class="category-item">
          <button
            class="category-btn ${X[r]||"default"}"
            type="button"
            data-category="${e._id}">
            ${e.name}
          </button>
        </li>
      `).join("")}function E(t){return t.map(e=>{const{_id:r,name:a,images:o=[],color:n=[],price:i=0}=e,d=o[0]||"placeholder.jpg",y=Array.isArray(n)?n:[n];return`
        <li class="furniture-item">
          <div class="furniture-thumb">
            <img src="${d}" alt="${a}" loading="lazy" />
          </div>
          <div class="furniture-info">
            <h3 class="furniture-heading">${a}</h3>
                <div class="container-colors">
                  <ul class="furniture-color">
                      ${y.map($=>`
                        <li>
                          <svg width="24" height="24">
                            <circle cx="12" cy="12" r="12" fill="${$}" />
                          </svg>
                        </li>
                      `).join("")}
                   </ul>
               </div>
                    <p class="furniture-price">${i} грн</p>
          </div>
             <button class="details-btn btn-furniture" data-id="${r}" type="button">Детальніше</button>
        </li>
      `}).join("")}function tt(t,e){t.insertAdjacentHTML("beforeend",E(e))}const c={categoriesList:document.querySelector("#categories"),furnitureList:document.querySelector("#furniture-list"),loadMoreBtn:document.querySelector("#load-more"),loader:document.querySelector("#loader")};let m="",f=1;function h(t){q.error({message:t,position:"topRight",maxWidth:400,close:!0})}function v(t){q.info({message:t,position:"topRight",maxWidth:400,close:!0})}function et(){c.furnitureList&&c.furnitureList.addEventListener("click",t=>{const e=t.target.closest(".details-btn");if(!e)return;const r=e.dataset.id;if(!r){v("На жаль, інформація про цей товар недоступна.");return}b(r)})}const rt=["Всі товари","М'які меблі","Шафи та системи зберігання","Ліжка та матраци","Столи","Стільці та табурети","Кухні","Меблі для дитячої","Меблі для офісу","Меблі для передпокою","Меблі для ванної кімнати","Садові та вуличні меблі","Декор та аксесуари"];async function st(){try{C();const t=await Z(),e=rt.map(a=>{const o=t.find(n=>n.name.trim()===a.trim());return{_id:a==="Всі товари"?"":o?o._id:"temp-id",name:a}});c.categoriesList.innerHTML=Y(e);const r=c.categoriesList.querySelector(".category-btn");r&&r.classList.add("is-active"),await L("",1),et()}catch{h("Не вдалося завантажити товари. Спробуйте пізніше.")}finally{M()}}document.addEventListener("DOMContentLoaded",st);async function L(t="",e=1){try{C(),m=t,f=e;const r=await Q(t,e),a=(r==null?void 0:r.furnitures)||[],o=(r==null?void 0:r.totalItems)||0,n=(r==null?void 0:r.limit)||8,i=Math.ceil(o/n);if(e===1){if(c.furnitureList.innerHTML="",a.length===0)return v("Товарів не знайдено"),g(),r;c.furnitureList.innerHTML=E(a)}else tt(c.furnitureList,a);return e>=i||a.length<n?g():at(),e>1&&(e>=i||a.length<n)&&v("Ви досягли кінця списку"),r}catch{c.furnitureList.innerHTML="",g(),h("Сталася помилка. Спробуйте пізніше")}finally{M()}}async function ot(t){var r;const e=t.target.closest(".category-btn");if(e){(r=document.querySelector(".category-btn.is-active"))==null||r.classList.remove("is-active"),e.classList.add("is-active"),m=e.dataset.category||"",f=1;try{await L(m,f)}catch{h("Помилка при зміні категорії")}}}c.categoriesList.addEventListener("click",ot);c.loadMoreBtn.addEventListener("click",async()=>{f+=1,g();try{await L(m,f)}catch{h("Сталася помилка. Спробуйте пізніше")}});function C(){var t;(t=c.loader)==null||t.classList.add("is-visible")}function M(){var t;(t=c.loader)==null||t.classList.remove("is-visible")}function at(){var t;(t=c.loadMoreBtn)==null||t.classList.add("is-visible")}function g(){var t;(t=c.loadMoreBtn)==null||t.classList.remove("is-visible")}const nt=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно відрегіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}],S=document.querySelector(".container-faq"),it=nt.map(({question:t,answer:e})=>`
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
        </div></div>`).join("");S&&(S.innerHTML=it,new A(".container-faq",{duration:400,сollapse:!0,showMultiple:!1}));const ct=document.querySelector(".swiper-wrapper"),x=document.querySelector(".swiper-button-prev"),B=document.querySelector(".swiper-button-next"),I=document.querySelector(".swiper-pagination");async function lt(){const r="https://furniture-store-v2.b.goit.study/api"+"/feedbacks",a={limit:10,page:1};return(await p.get(r,{params:a})).data}function dt(t){const e=t.rate,r=Math.floor(e),o=e%1!==0?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="rating star-svg value-${r} ${o} color-default">
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
      </li>`}function ut(t){return t.map(dt).join("")}function ft(){new T(".swiper",{modules:[O,P],direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},allowSlideNext:!0,allowSlidePrev:!0,grabCursor:!0,simulateTouch:!0})}function gt(){x.classList.remove("hidden"),B.classList.remove("hidden"),I.classList.remove("hidden")}function mt(){x.classList.add("hidden"),B.classList.add("hidden"),I.classList.add("hidden")}document.addEventListener("DOMContentLoaded",async()=>{mt();try{const t=await lt();ct.insertAdjacentHTML("afterbegin",ut(t.feedbacks)),ft(),gt()}catch{}finally{}});window.addEventListener("load",()=>{const t=document.getElementById("loader");t.classList.add("hidden"),setTimeout(()=>{t.style.display="none"},8e3)});
//# sourceMappingURL=index.js.map

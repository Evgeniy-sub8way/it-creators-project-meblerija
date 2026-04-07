import{a as L,i as m,A as R,S as F,N,P as D}from"./assets/vendor-DWEB2HqH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const o={backdrop:document.querySelector("[data-product-backdrop]"),modal:document.querySelector("[data-product-modal]"),closeBtn:document.querySelector(".product-modal-close"),orderBtn:document.querySelector("[data-open-order-modal]"),gallery:document.querySelector("[data-product-gallery]"),mainImage:document.querySelector("[data-product-main-image]"),galleryList:document.querySelector(".product-modal-gallery-list"),name:document.querySelector("[data-product-name]"),category:document.querySelector("[data-product-category]"),price:document.querySelector("[data-product-price]"),ratingWrap:document.querySelector("[data-product-rating]"),ratingValue:document.querySelector("[data-product-rating-value]"),colorsList:document.querySelector("[data-product-colors]"),description:document.querySelector("[data-product-description]"),width:document.querySelector("[data-product-width]"),height:document.querySelector("[data-product-height]"),depth:document.querySelector("[data-product-depth]")},u={isOpen:!1,lastFocusedEl:null,requestId:0,activeModelId:""};o.backdrop&&o.modal&&(Q(),j(),H());function j(){var t,e,r,n,s;(t=o.closeBtn)==null||t.addEventListener("click",p),(e=o.backdrop)==null||e.addEventListener("click",a=>{a.target===o.backdrop&&p()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&u.isOpen&&p()}),(r=o.orderBtn)==null||r.addEventListener("click",()=>{const a={modelId:u.activeModelId||"",color:V()};p(),document.dispatchEvent(new CustomEvent("open-order-modal",{detail:a}))}),(n=o.galleryList)==null||n.addEventListener("click",J),(s=o.colorsList)==null||s.addEventListener("change",Z)}function H(){document.addEventListener("click",t=>{const e=t.target.closest("[data-open-product-modal], [data-open-product]");if(!e)return;t.preventDefault();const r=e.dataset.productId||e.getAttribute("data-product-id")||"682f9bbf8acbdf505592ac36";E(r)})}async function E(t){var r;u.lastFocusedEl=document.activeElement,z(),I(!0);const e=++u.requestId;try{const s=await(await fetch(`https://furniture-store-v2.b.goit.study/api/furnitures/${t}`)).json();if(e!==u.requestId)return;U(s),u.isOpen=!0,(r=o.closeBtn)==null||r.focus()}catch(n){console.error("Error fetching product:",n),p(),X("Не вдалося завантажити інформацію про товар. Спробуйте пізніше.")}finally{I(!1)}}function p(){o.backdrop&&(o.backdrop.classList.add("is-hidden"),document.body.style.overflow="",u.isOpen=!1,u.activeModelId="",u.lastFocusedEl&&typeof u.lastFocusedEl.focus=="function"&&u.lastFocusedEl.focus())}function z(){o.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function U(t){W(t),_(t.rate),G(t.images||[]),K(t.color||[]),u.activeModelId=String(t._id||t.id||"")}function V(){if(!o.colorsList)return"";const t=o.colorsList.querySelector(".product-modal-color-checkbox:checked");return(t==null?void 0:t.value)||""}function W(t){var e;if(o.name&&(o.name.textContent=t.name||""),o.category&&(o.category.textContent=((e=t.category)==null?void 0:e.name)||""),o.price&&(o.price.textContent=Y(t.price)),o.description&&(o.description.textContent=t.description||""),t.sizes){const[r,n,s]=t.sizes.split("x").map(a=>a.trim());o.width&&(o.width.textContent=r||"-"),o.height&&(o.height.textContent=n||"-"),o.depth&&(o.depth.textContent=s||"-")}}function _(t=0){if(!o.ratingWrap)return;const e=Math.round(Number(t)),r=Number.isFinite(Number(t))?Number(t).toFixed(1):"0.0";o.ratingWrap.querySelectorAll(".product-modal-star").forEach((s,a)=>{s.classList.toggle("is-active",a<e)}),o.ratingValue&&(o.ratingValue.textContent=r)}function G(t){if(!o.mainImage||!o.galleryList||!t.length)return;const[e,...r]=t;x(e),o.galleryList.querySelectorAll("[data-product-thumb]").forEach((s,a)=>{const i=r[a];i&&(s.src=i,s.srcset=i,s.alt=`Фото ${a+1}`,s.dataset.index=String(a+1))}),o.gallery.dataset.images=JSON.stringify(t)}function J(t){const e=t.target.closest("[data-product-thumb]");if(!e||!o.gallery)return;const r=JSON.parse(o.gallery.dataset.images||"[]"),n=Number(e.dataset.index);r[n]&&x(r[n])}function x(t){!o.mainImage||!t||(o.mainImage.src=t,o.mainImage.srcset=t,o.mainImage.alt="Фото товару")}function K(t){if(!o.colorsList)return;const e=o.colorsList.querySelectorAll(".product-modal-color-checkbox"),r=o.colorsList.querySelectorAll(".product-modal-color-swatch"),n=o.colorsList.querySelectorAll(".visually-hidden"),s={"#c7c3bb":"product-modal-color-swatch--beige","#ffffff":"product-modal-color-swatch--white","#201a19":"product-modal-color-swatch--black"};e.forEach((a,i)=>{const d=t[i];if(d){if(a.value=d,a.checked=i===0,r[i]){const g=s[d]||"product-modal-color-swatch--beige";r[i].className=`product-modal-color-swatch ${g}`,r[i].style.backgroundColor=d}n[i]&&(n[i].textContent=d)}})}function Z(t){const e=t.target.closest(".product-modal-color-checkbox");if(!e||!o.colorsList)return;o.colorsList.querySelectorAll(".product-modal-color-checkbox").forEach(n=>{n.checked=n===e})}function Q(){if(!o.modal||o.modal.querySelector(".product-modal-loader"))return;const t=document.createElement("div");t.className="product-modal-loader",t.setAttribute("aria-hidden","true"),o.modal.appendChild(t)}function I(t){var r;const e=(r=o.modal)==null?void 0:r.querySelector(".product-modal-loader");e&&(e.classList.toggle("is-visible",t),e.setAttribute("aria-hidden",String(!t)))}function X(t){var e;if((e=window.iziToast)!=null&&e.error){window.iziToast.error({title:"Помилка",message:t,position:"topRight",timeout:3500});return}alert(t)}function Y(t){return`${new Intl.NumberFormat("uk-UA").format(Number(t||0))} грн`}window.ProductModal={openById:E,close:p,updateMock(t){}};L.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function tt(){return(await L.get("/categories")).data}async function et(t="",e=1){const r={page:e,limit:8};return t&&(r.category=t),(await L.get("/furnitures",{params:r})).data}const rt=["all-products","sofas","wardrobes","beds","tables","chairs","kitchens","kids","office","hallway","bathroom","outdoor","decor"];function ot(t){return t.map((e,r)=>`
        <li class="category-item">
          <button
            class="category-btn ${rt[r]||"default"}"
            type="button"
            data-category="${e._id}">
            ${e.name}
          </button>
        </li>
      `).join("")}function A(t){return t.map(e=>{const{_id:r,name:n,images:s=[],color:a=[],price:i=0}=e,d=s[0]||"placeholder.jpg",g=Array.isArray(a)?a:[a];return`
        <li class="furniture-item">
          <div class="furniture-thumb">
            <img src="${d}" alt="${n}" loading="lazy" />
          </div>
          <div class="furniture-info">
            <h3 class="furniture-heading">${n}</h3>
                <div class="container-colors">
                  <ul class="furniture-color">
                      ${g.map(q=>`
                        <li>
                          <svg width="24" height="24">
                            <circle cx="12" cy="12" r="12" fill="${q}" />
                          </svg>
                        </li>
                      `).join("")}
                   </ul>
               </div>
                    <p class="furniture-price">${i} грн</p>
          </div>
             <button class="details-btn btn-furniture" data-id="${r}" type="button">Детальніше</button>
        </li>
      `}).join("")}function st(t,e){t.insertAdjacentHTML("beforeend",A(e))}const c={categoriesList:document.querySelector("#categories"),furnitureList:document.querySelector("#furniture-list"),loadMoreBtn:document.querySelector("#load-more"),loader:document.querySelector("#loader")};let b="",y=1;function w(t){m.error({message:t,position:"topRight",maxWidth:400,close:!0})}function k(t){m.info({message:t,position:"topRight",maxWidth:400,close:!0})}function nt(){c.furnitureList&&c.furnitureList.addEventListener("click",t=>{const e=t.target.closest(".details-btn");if(!e)return;const r=e.dataset.id;if(!r){k("На жаль, інформація про цей товар недоступна.");return}E(r)})}const at=["Всі товари","М'які меблі","Шафи та системи зберігання","Ліжка та матраци","Столи","Стільці та табурети","Кухні","Меблі для дитячої","Меблі для офісу","Меблі для передпокою","Меблі для ванної кімнати","Садові та вуличні меблі","Декор та аксесуари"];async function it(){try{O();const t=await tt(),e=at.map(n=>{const s=t.find(a=>a.name.trim()===n.trim());return{_id:n==="Всі товари"?"":s?s._id:"temp-id",name:n}});c.categoriesList.innerHTML=ot(e);const r=c.categoriesList.querySelector(".category-btn");r&&r.classList.add("is-active"),await C("",1),nt()}catch{w("Не вдалося завантажити товари. Спробуйте пізніше.")}finally{P()}}document.addEventListener("DOMContentLoaded",it);async function C(t="",e=1){try{O(),b=t,y=e;const r=await et(t,e),n=(r==null?void 0:r.furnitures)||[],s=(r==null?void 0:r.totalItems)||0,a=(r==null?void 0:r.limit)||8,i=Math.ceil(s/a);if(e===1){if(c.furnitureList.innerHTML="",n.length===0)return k("Товарів не знайдено"),v(),r;c.furnitureList.innerHTML=A(n)}else st(c.furnitureList,n);return e>=i||n.length<a?v():lt(),e>1&&(e>=i||n.length<a)&&k("Ви досягли кінця списку"),r}catch{c.furnitureList.innerHTML="",v(),w("Сталася помилка. Спробуйте пізніше")}finally{P()}}async function ct(t){var r;const e=t.target.closest(".category-btn");if(e){(r=document.querySelector(".category-btn.is-active"))==null||r.classList.remove("is-active"),e.classList.add("is-active"),b=e.dataset.category||"",y=1;try{await C(b,y)}catch{w("Помилка при зміні категорії")}}}c.categoriesList.addEventListener("click",ct);c.loadMoreBtn.addEventListener("click",async()=>{y+=1,v();try{await C(b,y)}catch{w("Сталася помилка. Спробуйте пізніше")}});function O(){var t;(t=c.loader)==null||t.classList.add("is-visible")}function P(){var t;(t=c.loader)==null||t.classList.remove("is-visible")}function lt(){var t;(t=c.loadMoreBtn)==null||t.classList.add("is-visible")}function v(){var t;(t=c.loadMoreBtn)==null||t.classList.remove("is-visible")}const dt="https://furniture-store-v2.b.goit.study/api/orders";let l,f,h={modelId:"",color:""};function ut(t){return t.replace(/\D/g,"")}function ft(t){return!!(t.length===10&&t.startsWith("0")||t.length===12&&t.startsWith("380"))}function mt(t){const e=t.detail||{};h={modelId:e.modelId!=null?String(e.modelId):"",color:e.color!=null?String(e.color):""},gt()}function gt(){if(!l)return;l.classList.remove("is-hidden"),document.body.style.overflow="hidden";const t=l.querySelector(".order-modal");t==null||t.focus()}function S(){l&&(l.classList.add("is-hidden"),document.body.style.overflow="",h={modelId:"",color:""})}function pt(t){t.target===l&&S()}function ht(t){t.key==="Escape"&&l&&!l.classList.contains("is-hidden")&&(t.preventDefault(),S())}async function yt(t){if(t.preventDefault(),!f)return;if(!f.checkValidity()){f.reportValidity();return}const e=new FormData(f),r=String(e.get("name")??"").trim(),n=String(e.get("phone")??""),s=String(e.get("comment")??"").trim(),a=ut(n);if(!ft(a)){m.error({title:"Помилка",message:"Введіть коректний номер телефону у форматі українського мобільного.",position:"topRight"});return}if(!h.modelId||!h.color){m.error({title:"Помилка",message:"Оберіть товар і колір у картці товару, потім натисніть «Перейти до замовлення».",position:"topRight"});return}if(s.length>0&&s.length<5){m.error({title:"Помилка",message:"Коментар має бути не коротшим за 5 символів або залиште поле порожнім.",position:"topRight"});return}const i={name:r,phone:n.trim(),modelId:h.modelId,color:h.color};s.length>=5&&(i.comment=s);try{const d=await fetch(dt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),g=await d.json().catch(()=>({}));if(!d.ok){const q=typeof g.message=="string"?g.message:"Сталася помилка. Спробуйте пізніше.";throw new Error(q)}m.success({title:"Успішно",message:"Заявку надіслано.",position:"topRight"}),f.reset(),S()}catch(d){m.error({title:"Помилка",message:d.message||"Сталася помилка. Спробуйте пізніше.",position:"topRight"})}}function vt(){if(l=document.querySelector("[data-order-modal]"),f=document.querySelector("[data-order-form]"),!l||!f)return;l.querySelectorAll("[data-order-modal-close]").forEach(e=>{e.addEventListener("click",S)}),l.addEventListener("click",pt),document.addEventListener("keydown",ht),document.addEventListener("open-order-modal",mt),f.addEventListener("submit",yt);const t=l.querySelector(".order-modal");t&&t.addEventListener("click",e=>e.stopPropagation())}vt();const bt=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно відрегіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}],M=document.querySelector(".container-faq"),Lt=bt.map(({question:t,answer:e})=>`
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
        </div></div>`).join("");M&&(M.innerHTML=Lt,new R(".container-faq",{duration:400,сollapse:!0,showMultiple:!1}));const wt=document.querySelector(".swiper-wrapper"),B=document.querySelector(".swiper-button-prev"),T=document.querySelector(".swiper-button-next"),$=document.querySelector(".swiper-pagination");async function St(){const r="https://furniture-store-v2.b.goit.study/api"+"/feedbacks",n={limit:10,page:1};return(await L.get(r,{params:n})).data}function qt(t){const e=t.rate,r=Math.floor(e),s=e%1!==0?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="rating star-svg value-${r} ${s} color-default">
        <ul class="star-container">
          <li class="star">
          <svg class="star-empty">
                <use href="img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
          <li class="star">
            <svg class="star-empty">
                <use href="img/star-rating.icons.svg#star-empty"></use>
            </svg>
             <svg class="star-half">
                <use href="img/star-rating.icons.svg#star-half"></use>
            </svg>
            <svg class="star-filled">
                <use href="img/star-rating.icons.svg#star-filled"></use>
            </svg>
          </li>
        </ul>
        </div>
        <p class="feedback-text">${t.descr}</p>
        <p class="feedback-author">${t.name}</p>
      </li>`}function kt(t){return t.map(qt).join("")}function Et(){new F(".swiper",{modules:[N,D],direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},allowSlideNext:!0,allowSlidePrev:!0,grabCursor:!0,simulateTouch:!0})}function Ct(){B.classList.remove("hidden"),T.classList.remove("hidden"),$.classList.remove("hidden")}function It(){B.classList.add("hidden"),T.classList.add("hidden"),$.classList.add("hidden")}document.addEventListener("DOMContentLoaded",async()=>{It();try{const t=await St();wt.insertAdjacentHTML("afterbegin",kt(t.feedbacks)),Et(),Ct()}catch{}finally{}});window.addEventListener("load",()=>{const t=document.getElementById("loader");t.classList.add("hidden"),setTimeout(()=>{t.style.display="none"},8e3)});
//# sourceMappingURL=index.js.map

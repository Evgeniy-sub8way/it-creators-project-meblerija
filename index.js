import{a as w,i as f,A as F,S as R,N,P as D}from"./assets/vendor-CXD_EiBz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const r={backdrop:document.querySelector("[data-product-backdrop]"),modal:document.querySelector("[data-product-modal]"),closeBtn:document.querySelector(".product-modal-close"),orderBtn:document.querySelector("[data-open-order-modal]"),gallery:document.querySelector("[data-product-gallery]"),mainImage:document.querySelector("[data-product-main-image]"),galleryList:document.querySelector(".product-modal-gallery-list"),name:document.querySelector("[data-product-name]"),category:document.querySelector("[data-product-category]"),price:document.querySelector("[data-product-price]"),ratingWrap:document.querySelector("[data-product-rating]"),ratingValue:document.querySelector("[data-product-rating-value]"),colorsList:document.querySelector("[data-product-colors]"),description:document.querySelector("[data-product-description]"),width:document.querySelector("[data-product-width]"),height:document.querySelector("[data-product-height]"),depth:document.querySelector("[data-product-depth]")},u={isOpen:!1,lastFocusedEl:null,requestId:0,activeModelId:""};r.backdrop&&r.modal&&(Q(),H(),j());function H(){var t,e,s,a,o;(t=r.closeBtn)==null||t.addEventListener("click",p),(e=r.backdrop)==null||e.addEventListener("click",n=>{n.target===r.backdrop&&p()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&u.isOpen&&p()}),(s=r.orderBtn)==null||s.addEventListener("click",()=>{const n={modelId:u.activeModelId||"",color:V()};p(),document.dispatchEvent(new CustomEvent("open-order-modal",{detail:n}))}),(a=r.galleryList)==null||a.addEventListener("click",J),(o=r.colorsList)==null||o.addEventListener("change",Z)}function j(){document.addEventListener("click",t=>{const e=t.target.closest("[data-open-product-modal], [data-open-product]");if(!e)return;t.preventDefault();const s=e.dataset.productId||e.getAttribute("data-product-id")||"682f9bbf8acbdf505592ac36";E(s)})}async function E(t){var s;u.lastFocusedEl=document.activeElement,z(),M(!0);const e=++u.requestId;try{const o=await(await fetch(`https://furniture-store-v2.b.goit.study/api/furnitures/${t}`)).json();if(e!==u.requestId)return;U(o),u.isOpen=!0,(s=r.closeBtn)==null||s.focus()}catch(a){console.error("Error fetching product:",a),p(),X("Не вдалося завантажити інформацію про товар. Спробуйте пізніше.")}finally{M(!1)}}function p(){r.backdrop&&(r.backdrop.classList.add("is-hidden"),document.body.style.overflow="",u.isOpen=!1,u.activeModelId="",u.lastFocusedEl&&typeof u.lastFocusedEl.focus=="function"&&u.lastFocusedEl.focus())}function z(){r.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function U(t){W(t),_(t.rate),G(t.images||[]),K(t.color||[]),u.activeModelId=String(t._id||t.id||"")}function V(){if(!r.colorsList)return"";const t=r.colorsList.querySelector(".product-modal-color-checkbox:checked");return(t==null?void 0:t.value)||""}function W(t){var e;if(r.name&&(r.name.textContent=t.name||""),r.category&&(r.category.textContent=((e=t.category)==null?void 0:e.name)||""),r.price&&(r.price.textContent=Y(t.price)),r.description&&(r.description.textContent=t.description||""),t.sizes){const[s,a,o]=t.sizes.split("x").map(n=>n.trim());r.width&&(r.width.textContent=s||"-"),r.height&&(r.height.textContent=a||"-"),r.depth&&(r.depth.textContent=o||"-")}}function _(t=0){if(!r.ratingWrap)return;const e=Math.round(Number(t)),s=Number.isFinite(Number(t))?Number(t).toFixed(1):"0.0";r.ratingWrap.querySelectorAll(".product-modal-star").forEach((o,n)=>{o.classList.toggle("is-active",n<e)}),r.ratingValue&&(r.ratingValue.textContent=s)}function G(t){if(!r.mainImage||!r.galleryList||!t.length)return;const[e,...s]=t;x(e),r.galleryList.querySelectorAll("[data-product-thumb]").forEach((o,n)=>{const i=s[n];i&&(o.src=i,o.srcset=i,o.alt=`Фото ${n+1}`,o.dataset.index=String(n+1))}),r.gallery.dataset.images=JSON.stringify(t)}function J(t){const e=t.target.closest("[data-product-thumb]");if(!e||!r.gallery)return;const s=JSON.parse(r.gallery.dataset.images||"[]"),a=Number(e.dataset.index);s[a]&&x(s[a])}function x(t){!r.mainImage||!t||(r.mainImage.src=t,r.mainImage.srcset=t,r.mainImage.alt="Фото товару")}function K(t){if(!r.colorsList)return;const e=r.colorsList.querySelectorAll(".product-modal-color-checkbox"),s=r.colorsList.querySelectorAll(".product-modal-color-swatch"),a=r.colorsList.querySelectorAll(".visually-hidden"),o={"#c7c3bb":"product-modal-color-swatch--beige","#ffffff":"product-modal-color-swatch--white","#201a19":"product-modal-color-swatch--black"};e.forEach((n,i)=>{const d=t[i];if(d){if(n.value=d,n.checked=i===0,s[i]){const m=o[d]||"product-modal-color-swatch--beige";s[i].className=`product-modal-color-swatch ${m}`,s[i].style.backgroundColor=d}a[i]&&(a[i].textContent=d)}})}function Z(t){const e=t.target.closest(".product-modal-color-checkbox");if(!e||!r.colorsList)return;r.colorsList.querySelectorAll(".product-modal-color-checkbox").forEach(a=>{a.checked=a===e})}function Q(){if(!r.modal||r.modal.querySelector(".product-modal-loader"))return;const t=document.createElement("div");t.className="product-modal-loader",t.setAttribute("aria-hidden","true"),r.modal.appendChild(t)}function M(t){var s;const e=(s=r.modal)==null?void 0:s.querySelector(".product-modal-loader");e&&(e.classList.toggle("is-visible",t),e.setAttribute("aria-hidden",String(!t)))}function X(t){var e;if((e=window.iziToast)!=null&&e.error){window.iziToast.error({title:"Помилка",message:t,position:"topRight",timeout:3500});return}alert(t)}function Y(t){return`${new Intl.NumberFormat("uk-UA").format(Number(t||0))} грн`}window.ProductModal={openById:E,close:p,updateMock(t){}};w.defaults.baseURL="https://furniture-store-v2.b.goit.study/api";async function tt(){return(await w.get("/categories")).data}async function et(t="",e=1){const s={page:e,limit:8};return t&&(s.category=t),(await w.get("/furnitures",{params:s})).data}const st=["all-products","sofas","wardrobes","beds","tables","chairs","kitchens","kids","office","hallway","bathroom","outdoor","decor"];function rt(t){return t.map((e,s)=>`
        <li class="category-item">
          <button
            class="category-btn ${st[s]||"default"}"
            type="button"
            data-category="${e._id}">
            ${e.name}
          </button>
        </li>
      `).join("")}function $(t){return t.map(e=>{const{_id:s,name:a,images:o=[],color:n=[],price:i=0}=e,d=o[0]||"placeholder.jpg",m=Array.isArray(n)?n:[n];return`
        <li class="furniture-item">
          <div class="furniture-thumb">
            <img src="${d}" alt="${a}" loading="lazy" />
          </div>
          <div class="furniture-info">
            <h3 class="furniture-heading">${a}</h3>
                <div class="container-colors">
                  <ul class="furniture-color">
                      ${m.map(q=>`
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
             <button class="details-btn btn-furniture" data-id="${s}" type="button">Детальніше</button>
        </li>
      `}).join("")}function ot(t,e){t.insertAdjacentHTML("beforeend",$(e))}const c={categoriesList:document.querySelector("#categories"),furnitureList:document.querySelector("#furniture-list"),loadMoreBtn:document.querySelector("#load-more"),loader:document.querySelector("#loader")};let b="",v=1;function L(t){f.error({message:t,position:"topRight",maxWidth:400,close:!0})}function k(t){f.info({message:t,position:"topRight",maxWidth:400,close:!0})}function at(){c.furnitureList&&c.furnitureList.addEventListener("click",t=>{const e=t.target.closest(".details-btn");if(!e)return;const s=e.dataset.id;if(!s){k("На жаль, інформація про цей товар недоступна.");return}E(s)})}const nt=["Всі товари","М'які меблі","Шафи та системи зберігання","Ліжка та матраци","Столи","Стільці та табурети","Кухні","Меблі для дитячої","Меблі для офісу","Меблі для передпокою","Меблі для ванної кімнати","Садові та вуличні меблі","Декор та аксесуари"];async function it(){try{T();const t=await tt(),e=nt.map(a=>{const o=t.find(n=>n.name.trim()===a.trim());return{_id:a==="Всі товари"?"":o?o._id:"temp-id",name:a}});c.categoriesList.innerHTML=rt(e);const s=c.categoriesList.querySelector(".category-btn");s&&s.classList.add("is-active"),await C("",1),at()}catch{L("Не вдалося завантажити товари. Спробуйте пізніше.")}finally{A()}}document.addEventListener("DOMContentLoaded",it);async function C(t="",e=1){try{T(),b=t,v=e;const s=await et(t,e),a=(s==null?void 0:s.furnitures)||[],o=(s==null?void 0:s.totalItems)||0,n=(s==null?void 0:s.limit)||8,i=Math.ceil(o/n);if(e===1){if(c.furnitureList.innerHTML="",a.length===0)return k("Товарів не знайдено"),y(),s;c.furnitureList.innerHTML=$(a)}else ot(c.furnitureList,a);return e>=i||a.length<n?y():lt(),e>1&&(e>=i||a.length<n)&&k("Ви досягли кінця списку"),s}catch{c.furnitureList.innerHTML="",y(),L("Сталася помилка. Спробуйте пізніше")}finally{A()}}async function ct(t){var s;const e=t.target.closest(".category-btn");if(e){(s=document.querySelector(".category-btn.is-active"))==null||s.classList.remove("is-active"),e.classList.add("is-active"),b=e.dataset.category||"",v=1;try{await C(b,v)}catch{L("Помилка при зміні категорії")}}}c.categoriesList.addEventListener("click",ct);c.loadMoreBtn.addEventListener("click",async()=>{v+=1,y();try{await C(b,v)}catch{L("Сталася помилка. Спробуйте пізніше")}});function T(){var t;(t=c.loader)==null||t.classList.add("is-visible")}function A(){var t;(t=c.loader)==null||t.classList.remove("is-visible")}function lt(){var t;(t=c.loadMoreBtn)==null||t.classList.add("is-visible")}function y(){var t;(t=c.loadMoreBtn)==null||t.classList.remove("is-visible")}const dt="https://furniture-store-v2.b.goit.study/api/orders";let l,g,h={modelId:"",color:""};function ut(t){return t.replace(/\D/g,"")}function gt(t){return!!(t.length===10&&t.startsWith("0")||t.length===12&&t.startsWith("380"))}function ft(t){const e=t.detail||{};h={modelId:e.modelId!=null?String(e.modelId):"",color:e.color!=null?String(e.color):""},mt()}function mt(){if(!l)return;l.classList.remove("is-hidden"),document.body.style.overflow="hidden";const t=l.querySelector(".order-modal");t==null||t.focus()}function S(){l&&(l.classList.add("is-hidden"),document.body.style.overflow="",h={modelId:"",color:""})}function pt(t){t.target===l&&S()}function ht(t){t.key==="Escape"&&l&&!l.classList.contains("is-hidden")&&(t.preventDefault(),S())}async function vt(t){if(t.preventDefault(),!g)return;if(!g.checkValidity()){g.reportValidity();return}const e=new FormData(g),s=String(e.get("name")??"").trim(),a=String(e.get("phone")??""),o=String(e.get("comment")??"").trim(),n=ut(a);if(!gt(n)){f.error({title:"Помилка",message:"Введіть коректний номер телефону у форматі українського мобільного.",position:"topRight"});return}if(!h.modelId||!h.color){f.error({title:"Помилка",message:"Оберіть товар і колір у картці товару, потім натисніть «Перейти до замовлення».",position:"topRight"});return}if(o.length>0&&o.length<5){f.error({title:"Помилка",message:"Коментар має бути не коротшим за 5 символів або залиште поле порожнім.",position:"topRight"});return}const i={name:s,phone:a.trim(),modelId:h.modelId,color:h.color};o.length>=5&&(i.comment=o);try{const d=await fetch(dt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),m=await d.json().catch(()=>({}));if(!d.ok){const q=typeof m.message=="string"?m.message:"Сталася помилка. Спробуйте пізніше.";throw new Error(q)}f.success({title:"Успішно",message:"Заявку надіслано.",position:"topRight"}),g.reset(),S()}catch(d){f.error({title:"Помилка",message:d.message||"Сталася помилка. Спробуйте пізніше.",position:"topRight"})}}function yt(){if(l=document.querySelector("[data-order-modal]"),g=document.querySelector("[data-order-form]"),!l||!g)return;l.querySelectorAll("[data-order-modal-close]").forEach(e=>{e.addEventListener("click",S)}),l.addEventListener("click",pt),document.addEventListener("keydown",ht),document.addEventListener("open-order-modal",ft),g.addEventListener("submit",vt);const t=l.querySelector(".order-modal");t&&t.addEventListener("click",e=>e.stopPropagation())}yt();const bt=[{question:"Як здійснюється доставка меблів?",answer:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно відрегіону."},{question:"Чи є можливість вибрати колір або матеріал?",answer:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{question:"Чи можна повернути товар, якщо він не підійшов?",answer:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{question:"Чи надаєте ви послугу збирання меблів?",answer:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{question:"Як здійснити оплату?",answer:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}],I=document.querySelector(".container-faq"),wt=bt.map(({question:t,answer:e})=>`
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
        </div></div>`).join("");I&&(I.innerHTML=wt,new F(".container-faq",{duration:400,сollapse:!0,showMultiple:!1}));function Lt(t){const e=t.rate,s=Math.floor(e),o=e%1!==0?"half":"";return`<li class="feedback-item">
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
</li>`}function St(t){const e=document.querySelector(".feedback-list");!e||!t||!t.length||(e.innerHTML=t.map(Lt).join(""))}window.FeedbackModule={render:St};const qt=document.querySelector(".swiper-wrapper"),O=document.querySelector(".swiper-button-prev"),P=document.querySelector(".swiper-button-next"),B=document.querySelector(".swiper-pagination");async function kt(){const s="https://furniture-store-v2.b.goit.study/api"+"/feedbacks",a={limit:10,page:1};return(await w.get(s,{params:a})).data}function Et(t){const e=t.rate,s=Math.floor(e),o=e%1!==0?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="rating star-svg value-${s} ${o} color-default">
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
      </li>`}function Ct(t){return t.map(Et).join("")}function Mt(){new R(".swiper",{modules:[N,D],direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}},allowSlideNext:!0,allowSlidePrev:!0,grabCursor:!0,simulateTouch:!0})}function It(){O.classList.remove("hidden"),P.classList.remove("hidden"),B.classList.remove("hidden")}function xt(){O.classList.add("hidden"),P.classList.add("hidden"),B.classList.add("hidden")}document.addEventListener("DOMContentLoaded",async()=>{xt();try{const t=await kt();qt.insertAdjacentHTML("afterbegin",Ct(t.feedbacks)),Mt(),It()}catch{}finally{}});window.addEventListener("load",()=>{const t=document.getElementById("loader");t.classList.add("hidden"),setTimeout(()=>{t.style.display="none"},8e3)});
//# sourceMappingURL=index.js.map

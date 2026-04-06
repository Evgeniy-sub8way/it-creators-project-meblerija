import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.css';
import axios from 'axios';

//Посилання на елементи JS
const feedbackList = document.querySelector('.swiper-wrapper');
const leftBtn = document.querySelector('.swiper-button-prev');
const rightBtn = document.querySelector('.swiper-button-next');
const paginationElem = document.querySelector('.swiper-pagination');

// Функція для запиту сервера
async function getFeedbacks() {
  const baseURL = 'https://furniture-store-v2.b.goit.study/api';
  const endPoint = '/feedbacks';
  const url = baseURL + endPoint;
  const params = {
    limit: 10,
    page: 1,
  };
  const response = await axios.get(url, { params });
  return response.data;
}

// Функція для рендеру
function feedbackTemplate(feedback) {
  const rating = feedback.rate;
  const valueRating = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const halfClass = hasHalf ? 'half' : '';

  return `<li class="feedback-item swiper-slide">
  <div class="rating star-svg value-${valueRating} ${halfClass} color-default">
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
        <p class="feedback-text">${feedback.descr}</p>
        <p class="feedback-author">${feedback.name}</p>
      </li>`;
}

function feedbacksTemplate(feedbacks) {
  return feedbacks.map(feedbackTemplate).join('');
}

// Налаштування Swiper and Pagination
function initSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },

    allowSlideNext: true,
    allowSlidePrev: true,
    grabCursor: true,
    simulateTouch: true,
  });
}

// Функції, щоб зробити елементи навігації та пагінаціїї видимими і невидимими

function showAllElem() {
  leftBtn.classList.remove('hidden');
  rightBtn.classList.remove('hidden');
  paginationElem.classList.remove('hidden');
}

function hideAllElem() {
  leftBtn.classList.add('hidden');
  rightBtn.classList.add('hidden');
  paginationElem.classList.add('hidden');
}

// Загальна логіка
document.addEventListener('DOMContentLoaded', async () => {
  hideAllElem();
  // ДОПИСАТИ loader start
  try {
    const res = await getFeedbacks();
    feedbackList.insertAdjacentHTML(
      'afterbegin',
      feedbacksTemplate(res.feedbacks)
    );
    initSwiper();
    showAllElem();
  } catch (error) {
    // ДОПИСАТИ show Error message
  } finally {
    // ДОПИСАТИ loader finish
  }
});

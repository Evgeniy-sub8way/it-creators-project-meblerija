import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.css';
import { buildStarRatingDiv } from './feedback.js';
import axios from 'axios';

import { showError } from './furniture/furniture-logic.js';

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

//!========================================================
// Функція для рендеру
function feedbackTemplate(feedback) {
  return `<li class="feedback-item swiper-slide">
  ${buildStarRatingDiv(feedback.rate)}
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
    modules: [Navigation, Pagination, Keyboard, Mousewheel],
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

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    mousewheel: {
      forceToAxis: true,
      invert: false,
    },
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

  try {
    const res = await getFeedbacks();
    feedbackList.insertAdjacentHTML(
      'afterbegin',
      feedbacksTemplate(res.feedbacks)
    );
    initSwiper();
    showAllElem();
  } catch (error) {
    showError('Вибачте, не вдалося завантажити коментарі. Спробуйте пізніше.');
  } finally {
  }
});

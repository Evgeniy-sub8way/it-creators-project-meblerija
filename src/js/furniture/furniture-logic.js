import '../../css/furniture.css';

import { openProductModal } from '../product-modal.js';
import { fetchCategories, fetchFurniture } from './furniture-api.js';
import {
  createCategoriesMarkup,
  createFurnitureMarkup,
  appendFurniture,
} from './furniture-render.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ----------------- refs -----------------

const refs = {
  categoriesList: document.querySelector('#categories'),
  furnitureList: document.querySelector('#furniture-list'),
  loadMoreBtn: document.querySelector('#load-more'),
  loader: document.querySelector('#loaderid'),
};

let currentCategory = '';
let currentPage = 1;

// ----------------- helpers -----------------

export function showError(message) {
  iziToast.error({ message, position: 'topRight', maxWidth: 400, close: true });
}

export function showInfo(message) {
  iziToast.info({ message, position: 'topRight', maxWidth: 400, close: true });
}

// ----------------- modal call -----------------

function initFurnitureModals() {
  if (!refs.furnitureList) return;

  refs.furnitureList.addEventListener('click', e => {
    const btn = e.target.closest('.details-btn');
    if (!btn) return;

    const furnitureId = btn.dataset.id;
    if (!furnitureId) {
      showInfo('На жаль, інформація про цей товар недоступна.');
      return;
    }
    openProductModal(furnitureId);
  });
}

// ---------- Init-categories ----------

const CATEGORIES_ORDER = [
  'Всі товари',
  "М'які меблі",
  'Шафи та системи зберігання',
  'Ліжка та матраци',
  'Столи',
  'Стільці та табурети',
  'Кухні',
  'Меблі для дитячої',
  'Меблі для офісу',
  'Меблі для передпокою',
  'Меблі для ванної кімнати',
  'Садові та вуличні меблі',
  'Декор та аксесуари',
];

async function initCategories() {
  try {
    showLoader();

    const apiCategories = await fetchCategories();

    const finalCategories = CATEGORIES_ORDER.map(name => {
      const found = apiCategories.find(c => c.name.trim() === name.trim());
      return {
        _id: name === 'Всі товари' ? '' : found ? found._id : 'temp-id',
        name,
      };
    });

    refs.categoriesList.innerHTML = createCategoriesMarkup(finalCategories);

    const firstBtn = refs.categoriesList.querySelector('.category-btn');
    if (firstBtn) firstBtn.classList.add('is-active');

    await renderFurnitureSection('', 1);

    initFurnitureModals();
  } catch (error) {
    showError('Не вдалося завантажити товари. Спробуйте пізніше.');
  } finally {
    hideLoader();
  }
}

document.addEventListener('DOMContentLoaded', initCategories);

// ---------- Fetches and renders furniture ----------

export async function renderFurnitureSection(category = '', page = 1) {
  try {
    showLoader();

    currentCategory = category;
    currentPage = page;

    const data = await fetchFurniture(category, page);

    const items = data?.furnitures || [];
    const totalItems = data?.totalItems || 0;
    const limit = data?.limit || 8;
    const totalPages = Math.ceil(totalItems / limit);

    if (page === 1) {
      refs.furnitureList.innerHTML = '';

      if (items.length === 0) {
        showInfo('Товарів не знайдено');
        hideLoadMoreButton();
        return data;
      }

      refs.furnitureList.innerHTML = createFurnitureMarkup(items);
    } else {
      appendFurniture(refs.furnitureList, items);
    }

    if (page >= totalPages || items.length < limit) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }

    if (page > 1 && (page >= totalPages || items.length < limit)) {
      showInfo('Ви досягли кінця списку');
    }

    return data;
  } catch (error) {
    refs.furnitureList.innerHTML = '';
    hideLoadMoreButton();
    showError('Сталася помилка. Спробуйте пізніше');
  } finally {
    hideLoader();
  }
}

// ---------- Handles category selection ----------

async function handleCategoryClick(event) {
  const clickedBtn = event.target.closest('.category-btn');
  if (!clickedBtn) return;

  document
    .querySelector('.category-btn.is-active')
    ?.classList.remove('is-active');

  clickedBtn.classList.add('is-active');

  currentCategory = clickedBtn.dataset.category || '';
  currentPage = 1;

  try {
    await renderFurnitureSection(currentCategory, currentPage);
  } catch {
    showError('Помилка при зміні категорії');
  }
}

refs.categoriesList.addEventListener('click', handleCategoryClick);

// --------------- Load More ---------------

refs.loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  hideLoadMoreButton();

  try {
    await renderFurnitureSection(currentCategory, currentPage);
  } catch {
    showError('Сталася помилка. Спробуйте пізніше');
  }
});

// --------------- UI helpers ---------------

function showLoader() {
  refs.loader?.classList.add('is-visible');
}

function hideLoader() {
  refs.loader?.classList.remove('is-visible');
}

function showLoadMoreButton() {
  refs.loadMoreBtn?.classList.add('is-visible');
}

function hideLoadMoreButton() {
  refs.loadMoreBtn?.classList.remove('is-visible');
}

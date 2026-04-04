import './css/furniture.css';
import './js/api';
import './js/menu.js';
import './js/order-modal.js';
import './js/product-modal.js';
import './js/faq.js';
import './js/feedback.js';

import { initCategories } from './js/furniture/furniture-logic.js';

document.addEventListener('DOMContentLoaded', () => {
  initCategories();
});

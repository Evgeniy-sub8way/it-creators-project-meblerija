import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ORDER_API = 'https://furniture-store-v2.b.goit.study/api/orders';

let backdropEl;
let formEl;
let orderContext = { modelId: '', color: '' };

function normalizePhoneDigits(value) {
  return value.replace(/\D/g, '');
}

function isValidUkrainePhoneDigits(digits) {
  if (digits.length === 10 && digits.startsWith('0')) return true;
  if (digits.length === 12 && digits.startsWith('380')) return true;
  return false;
}

function openOrderModalFromEvent(e) {
  const d = e.detail || {};
  orderContext = {
    modelId: d.modelId != null ? String(d.modelId) : '',
    color: d.color != null ? String(d.color) : '',
  };
  openOrderModal();
}

function openOrderModal() {
  if (!backdropEl) return;
  formEl.reset();
  backdropEl.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  const dialog = backdropEl.querySelector('.order-modal');
  dialog?.focus();
}

function closeOrderModal() {
  if (!backdropEl) return;
  backdropEl.classList.add('is-hidden');
  document.body.style.overflow = '';
  orderContext = { modelId: '', color: '' };
}

function onBackdropClick(e) {
  if (e.target === backdropEl) closeOrderModal();
}

function onDocumentKeydown(e) {
  if (e.key !== 'Escape') return;
  if (backdropEl && !backdropEl.classList.contains('is-hidden')) {
    e.preventDefault();
    closeOrderModal();
  }
}

async function onFormSubmit(e) {
  e.preventDefault();
  if (!formEl) return;

  if (!formEl.checkValidity()) {
    iziToast.error({
      title: 'Помилка',
      message: 'Будь ласка, заповніть всі обов’язкові поля коректно!',
      position: 'topRight',
    });
    return;
  }

  const fd = new FormData(formEl);
  const name = String(fd.get('name') ?? '').trim();
  const phoneRaw = String(fd.get('phone') ?? '');
  const comment = String(fd.get('comment') ?? '').trim();

  const phoneDigits = normalizePhoneDigits(phoneRaw);
  if (!isValidUkrainePhoneDigits(phoneDigits)) {
    iziToast.error({
      title: 'Помилка',
      message:
        'Введіть коректний номер телефону у форматі українського мобільного.',
      position: 'topRight',
    });
    return;
  }

  if (!orderContext.modelId || !orderContext.color) {
    iziToast.error({
      title: 'Помилка',
      message:
        'Оберіть товар і колір у картці товару, потім натисніть «Перейти до замовлення».',
      position: 'topRight',
    });
    return;
  }

  if (comment.length > 0 && comment.length < 5) {
    iziToast.error({
      title: 'Помилка',
      message:
        'Коментар має бути не коротшим за 5 символів або залиште поле порожнім.',
      position: 'topRight',
    });
    return;
  }

  const payload = {
    name,
    phone: phoneRaw.trim(),
    modelId: orderContext.modelId,
    color: orderContext.color,
  };
  if (comment.length >= 5) {
    payload.comment = comment;
  }

  try {
    const res = await fetch(ORDER_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg =
        typeof data.message === 'string'
          ? data.message
          : 'Сталася помилка. Спробуйте пізніше.';
      throw new Error(msg);
    }
    iziToast.success({
      title: 'Успішно',
      message: 'Заявку надіслано.',
      position: 'topRight',
    });
    formEl.reset();
    closeOrderModal();
  } catch (err) {
    iziToast.error({
      title: 'Помилка',
      message: err.message || 'Сталася помилка. Спробуйте пізніше.',
      position: 'topRight',
    });
  }
}

function init() {
  backdropEl = document.querySelector('[data-order-modal]');
  formEl = document.querySelector('[data-order-form]');
  if (!backdropEl || !formEl) return;

  backdropEl.querySelectorAll('[data-order-modal-close]').forEach(el => {
    el.addEventListener('click', closeOrderModal);
  });
  backdropEl.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('open-order-modal', openOrderModalFromEvent);
  formEl.addEventListener('submit', onFormSubmit);

  const dialog = backdropEl.querySelector('.order-modal');
  if (dialog) {
    dialog.addEventListener('click', ev => ev.stopPropagation());
  }
}

init();

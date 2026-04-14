import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ORDER_API = 'https://furniture-store-v2.b.goit.study/api/orders';

const MSG_NAME_RULES = 'Мінімум дві літери, лише літери';
const MSG_NAME_REQUIRED = 'Вкажіть ім’я.';
const MSG_PHONE_REQUIRED = 'Вкажіть номер телефону.';
const MSG_PHONE_FORMAT =
  'Потрібно 10 цифр (0…) або 12 цифр, що починаються з 380.';

let backdropEl;
let formEl;
let nameFieldEl;
let phoneFieldEl;
let nameInputEl;
let phoneInputEl;
let orderContext = { modelId: '', color: '' };

function normalizePhoneDigits(value) {
  return value.replace(/\D/g, '');
}

function sanitizeNameLetters(value) {
  return value.replace(/[^\p{L}]/gu, '');
}

function isValidUkrainePhoneDigits(digits) {
  if (digits.length === 10 && digits.startsWith('0')) return true;
  if (digits.length === 12 && digits.startsWith('380')) return true;
  return false;
}

function setFieldError(fieldEl, inputEl, errorEl, message) {
  if (!fieldEl || !inputEl || !errorEl) return;
  fieldEl.classList.add('order-form__field--error');
  errorEl.textContent = message;
  errorEl.hidden = false;
  inputEl.setAttribute('aria-invalid', 'true');
}

function clearFieldError(fieldEl, inputEl, errorEl) {
  if (!fieldEl || !inputEl || !errorEl) return;
  fieldEl.classList.remove('order-form__field--error');
  errorEl.textContent = '';
  errorEl.hidden = true;
  inputEl.setAttribute('aria-invalid', 'false');
}

function clearOrderFieldErrors() {
  if (nameFieldEl && nameInputEl) {
    const err = nameFieldEl.querySelector('.order-form__error');
    clearFieldError(nameFieldEl, nameInputEl, err);
  }
  if (phoneFieldEl && phoneInputEl) {
    const err = phoneFieldEl.querySelector('.order-form__error');
    clearFieldError(phoneFieldEl, phoneInputEl, err);
  }
}

function validateNameField() {
  const errorEl = nameFieldEl?.querySelector('.order-form__error');
  if (!nameFieldEl || !nameInputEl || !errorEl) return true;
  const trimmed = nameInputEl.value.trim();
  if (!trimmed) {
    setFieldError(nameFieldEl, nameInputEl, errorEl, MSG_NAME_REQUIRED);
    return false;
  }
  if (trimmed.length < 2 || !/^[\p{L}]{2,}$/u.test(trimmed)) {
    setFieldError(nameFieldEl, nameInputEl, errorEl, MSG_NAME_RULES);
    return false;
  }
  clearFieldError(nameFieldEl, nameInputEl, errorEl);
  return true;
}

function validatePhoneField() {
  const errorEl = phoneFieldEl?.querySelector('.order-form__error');
  if (!phoneFieldEl || !phoneInputEl || !errorEl) return true;
  const digits = normalizePhoneDigits(phoneInputEl.value);
  if (!digits) {
    setFieldError(phoneFieldEl, phoneInputEl, errorEl, MSG_PHONE_REQUIRED);
    return false;
  }
  if (!isValidUkrainePhoneDigits(digits)) {
    setFieldError(phoneFieldEl, phoneInputEl, errorEl, MSG_PHONE_FORMAT);
    return false;
  }
  clearFieldError(phoneFieldEl, phoneInputEl, errorEl);
  return true;
}

function onNameInput() {
  if (!nameInputEl) return;
  const cur = nameInputEl.value;
  const cleaned = sanitizeNameLetters(cur).slice(0, 30);
  if (cur !== cleaned) nameInputEl.value = cleaned;
  if (nameFieldEl?.classList.contains('order-form__field--error')) {
    const t = nameInputEl.value.trim();
    if (t.length >= 2 && /^[\p{L}]{2,}$/u.test(t)) {
      const err = nameFieldEl.querySelector('.order-form__error');
      clearFieldError(nameFieldEl, nameInputEl, err);
    }
  }
}

function onPhoneInput() {
  if (!phoneInputEl) return;
  const cur = phoneInputEl.value;
  const cleaned = normalizePhoneDigits(cur).slice(0, 12);
  if (cur !== cleaned) phoneInputEl.value = cleaned;
  if (phoneFieldEl?.classList.contains('order-form__field--error')) {
    const digits = normalizePhoneDigits(phoneInputEl.value);
    if (isValidUkrainePhoneDigits(digits)) {
      const err = phoneFieldEl.querySelector('.order-form__error');
      clearFieldError(phoneFieldEl, phoneInputEl, err);
    }
  }
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
  clearOrderFieldErrors();
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

  const nameOk = validateNameField();
  const phoneOk = validatePhoneField();
  if (!nameOk || !phoneOk) {
    if (!nameOk) nameInputEl?.focus();
    else phoneInputEl?.focus();
    return;
  }

  const fd = new FormData(formEl);
  const name = String(fd.get('name') ?? '').trim();
  const phoneRaw = String(fd.get('phone') ?? '');
  const comment = String(fd.get('comment') ?? '').trim();

  const phoneDigits = normalizePhoneDigits(phoneRaw);

  if (!orderContext.modelId || !orderContext.color) {
    iziToast.error({
      title: 'Помилка',
      message:
        'Оберіть товар і колір у картці товару, потім натисніть «Перейти до замовлення».',
      position: 'topCenter',
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
      position: 'topCenter',
    });
    formEl.reset();
    clearOrderFieldErrors();
    closeOrderModal();
  } catch (err) {
    iziToast.error({
      title: 'Помилка',
      message: err.message || 'Сталася помилка. Спробуйте пізніше.',
      position: 'topCenter',
    });
  }
}

function init() {
  backdropEl = document.querySelector('[data-order-modal]');
  formEl = document.querySelector('[data-order-form]');
  if (!backdropEl || !formEl) return;

  nameFieldEl = formEl.querySelector('[data-order-field="name"]');
  phoneFieldEl = formEl.querySelector('[data-order-field="phone"]');
  nameInputEl = nameFieldEl?.querySelector('input[name="name"]') ?? null;
  phoneInputEl = phoneFieldEl?.querySelector('input[name="phone"]') ?? null;

  nameInputEl?.addEventListener('input', onNameInput);
  nameInputEl?.addEventListener('blur', validateNameField);
  phoneInputEl?.addEventListener('input', onPhoneInput);
  phoneInputEl?.addEventListener('blur', validatePhoneField);

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

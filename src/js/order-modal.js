// import { postOrder } from './api.js';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// let backdropEl;
// let formEl;
// let orderContext = { id: null, marker: null };

// function normalizePhoneDigits(value) {
//     return value.replace(/\D/g, '');
// }

// function isValidUkrainePhoneDigits(digits) {
//     if (digits.length === 10 && digits.startsWith('0')) return true;
//     if (digits.length === 12 && digits.startsWith('380')) return true;
//     return false;
// }

// function lockBodyScroll() {
//     document.body.classList.add('modal-open');
// }

// function unlockBodyScroll() {
//     document.body.classList.remove('modal-open');
// }

// function getErrorMessage(error) {
//     const res = error.response;
//     if (!res?.data) return error.message || 'Сталася помилка. Спробуйте пізніше.';
//     const d = res.data;
//     if (typeof d === 'string') return d;
//     if (d.message != null) {
//         return Array.isArray(d.message) ? d.message.join(', ') : String(d.message);
//     }
//     if (d.error != null) return String(d.error);
//     if (typeof d === 'object' && d !== null) {
//         const first = Object.values(d).find(v => typeof v === 'string' || Array.isArray(v));
//         if (Array.isArray(first)) return first.join(', ');
//         if (typeof first === 'string') return first;
//     }
//     return 'Сталася помилка. Спробуйте пізніше.';
// }

// export function openOrderModal({ id, marker } = {}) {
//     orderContext = {
//         id: id ?? null,
//         marker: marker ?? null,
//     };
//     if (!backdropEl) return;
//     backdropEl.classList.remove('is-hidden');
//     lockBodyScroll();
//     const dialog = backdropEl.querySelector('.order-modal');
//     dialog?.focus();
// }

// export function closeOrderModal() {
//     if (!backdropEl) return;
//     backdropEl.classList.add('is-hidden');
//     unlockBodyScroll();
//     orderContext = { id: null, marker: null };
// }

// function onBackdropClick(e) {
//     if (e.target === backdropEl) closeOrderModal();
// }

// function onDocumentKeydown(e) {
//     if (e.key !== 'Escape') return;
//     if (backdropEl && !backdropEl.classList.contains('is-hidden')) {
//         e.preventDefault();
//         closeOrderModal();
//     }
// }

// async function onFormSubmit(e) {
//     e.preventDefault();
//     if (!formEl) return;

//     if (!formEl.checkValidity()) {
//         formEl.reportValidity();
//         return;
//     }

//     const fd = new FormData(formEl);
//     const name = String(fd.get('name') ?? '').trim();
//     const phoneRaw = String(fd.get('phone') ?? '');
//     const comment = String(fd.get('comment') ?? '').trim();

//     const phoneDigits = normalizePhoneDigits(phoneRaw);
//     if (!isValidUkrainePhoneDigits(phoneDigits)) {
//         iziToast.error({
//             title: 'Помилка',
//             message: 'Введіть коректний номер телефону у форматі українського мобільного.',
//             position: 'topRight',
//         });
//         return;
//     }

//     const payload = {
//         name,
//         phone: phoneRaw.trim(),
//         comment,
//         id: orderContext.id,
//         marker: orderContext.marker,
//     };

//     try {
//         await postOrder(payload);
//         iziToast.success({
//             title: 'Успіх',
//             message: 'Заявку надіслано.',
//             position: 'topRight',
//         });
//         formEl.reset();
//         closeOrderModal();
//     } catch (err) {
//         iziToast.error({
//             title: 'Помилка',
//             message: getErrorMessage(err),
//             position: 'topRight',
//         });
//     }
// }

// function init() {
//     backdropEl = document.querySelector('[data-order-modal]');
//     formEl = document.querySelector('[data-order-form]');
//     if (!backdropEl || !formEl) return;

//     backdropEl.querySelectorAll('[data-order-modal-close]').forEach(el => {
//         el.addEventListener('click', closeOrderModal);
//     });
//     backdropEl.addEventListener('click', onBackdropClick);
//     document.addEventListener('keydown', onDocumentKeydown);
//     formEl.addEventListener('submit', onFormSubmit);

//     const dialog = backdropEl.querySelector('.order-modal');
//     if (dialog) {
//         dialog.addEventListener('click', ev => ev.stopPropagation());
//     }
// }

// document.addEventListener('DOMContentLoaded', init);

const MOCK_FURNITURE = [
	{
		_id: '682f9bbf8acbdf505592ac36',
		name: 'Диван "Комфорт Плюс"',
		rate: 4.8,
		price: 9999,
		sizes: '220x95x90',
		category: { _id: '66504a50a1b2c3d4e5f6a7b9', name: 'Дивани' },
		description:
			'Класичний диван з м’якими подушками та високою спинкою, ідеальний для сімейного відпочинку. Оббивка з якісної зносостійкої тканини.',
		images: [
			'./img/product-modal/bigsofa1x.jpg',
			'./img/product-modal/cornersofa1x.jpg',
			'./img/product-modal/smallsofa1x.jpg',
		],
		color: ['#c7c3bb', '#ffffff', '#201a19'],
	},
	{
		_id: '682f9bbf8acbdf505592ac37',
		name: 'Крісло Comfort',
		rate: 4.5,
		price: 2499,
		sizes: '85x110x90',
		category: { _id: '66504a50a1b2c3d4e5f6a7ba', name: 'Крісла' },
		description:
			'Зручне крісло з опорою для спини. Підходить для робочого кабінету або вітальні. Екологічна тканина.',
		images: [
			'./img/product-modal/cornersofa1x.jpg',
			'./img/product-modal/bigsofa1x.jpg',
		],
		color: ['#c7c3bb', '#201a19'],
	},
	{
		_id: '682f9bbf8acbdf505592ac38',
		name: 'Ліжко Premium',
		rate: 5,
		price: 15999,
		sizes: '160x50x200',
		category: { _id: '66504a50a1b2c3d4e5f6a7bb', name: 'Ліжка' },
		description: 'Ортопедичне ліжко з матрацом. Покращує якість сну. Розмір: 160х200 см.',
		images: [
			'./img/product-modal/smallsofa1x.jpg',
			'./img/product-modal/bigsofa1x.jpg',
		],
		color: ['#201a19', '#ffffff'],
	},
];

const refs = {
	backdrop: document.querySelector('[data-product-backdrop]'),
	modal: document.querySelector('[data-product-modal]'),
	closeBtn: document.querySelector('.product-modal-close'),
	orderBtn: document.querySelector('[data-open-order-modal]'),
	gallery: document.querySelector('[data-product-gallery]'),
	mainImage: document.querySelector('[data-product-main-image]'),
	galleryList: document.querySelector('.product-modal-gallery-list'),
	name: document.querySelector('[data-product-name]'),
	category: document.querySelector('[data-product-category]'),
	price: document.querySelector('[data-product-price]'),
	ratingWrap: document.querySelector('[data-product-rating]'),
	ratingValue: document.querySelector('[data-product-rating-value]'),
	colorsList: document.querySelector('[data-product-colors]'),
	description: document.querySelector('[data-product-description]'),
	width: document.querySelector('[data-product-width]'),
	height: document.querySelector('[data-product-height]'),
	depth: document.querySelector('[data-product-depth]'),
};

const state = {
	isOpen: false,
	lastFocusedEl: null,
	requestId: 0,
};

if (refs.backdrop && refs.modal) {
	ensureLoader();
	bindStaticEvents();
	bindOpenTriggers();
}

function bindStaticEvents() {
	refs.closeBtn?.addEventListener('click', closeProductModal);

	refs.backdrop?.addEventListener('click', event => {
		if (event.target === refs.backdrop) {
			closeProductModal();
		}
	});

	document.addEventListener('keydown', event => {
		if (event.key === 'Escape' && state.isOpen) {
			closeProductModal();
		}
	});

	refs.orderBtn?.addEventListener('click', () => {
		closeProductModal();
		openOrderModal();
	});

	refs.galleryList?.addEventListener('click', onGalleryThumbClick);
	refs.colorsList?.addEventListener('change', onColorChange);
}

function bindOpenTriggers() {
	document.addEventListener('click', event => {
		const trigger = event.target.closest('[data-open-product-modal], [data-open-product]');
		if (!trigger) return;

		event.preventDefault();
		const id = trigger.dataset.productId || trigger.getAttribute('data-product-id') || '682f9bbf8acbdf505592ac36';
		openProductModal(id);
	});
}

async function openProductModal(id = '682f9bbf8acbdf505592ac36') {
	state.lastFocusedEl = document.activeElement;
	showBackdrop();
	showLoader(true);

	const currentRequestId = ++state.requestId;

	try {
		const furniture = await getFurnitureById(id);

		if (currentRequestId !== state.requestId) return;

		renderFurniture(furniture);
		state.isOpen = true;
		refs.closeBtn?.focus();
	} catch {
		closeProductModal();
		showErrorToast('Не вдалося завантажити інформацію про товар. Спробуйте пізніше.');
	} finally {
		showLoader(false);
	}
}

function closeProductModal() {
	if (!refs.backdrop) return;

	refs.backdrop.classList.add('is-hidden');
	document.body.style.overflow = '';
	state.isOpen = false;

	if (state.lastFocusedEl && typeof state.lastFocusedEl.focus === 'function') {
		state.lastFocusedEl.focus();
	}
}

function showBackdrop() {
	refs.backdrop.classList.remove('is-hidden');
	document.body.style.overflow = 'hidden';
}

function renderFurniture(furniture) {
	renderTextContent(furniture);
	renderRating(furniture.rate);
	renderGallery(furniture.images || []);
	renderColors(furniture.color || []);
}

function renderTextContent(furniture) {
	if (refs.name) refs.name.textContent = furniture.name || '';
	if (refs.category) refs.category.textContent = furniture.category?.name || '';
	if (refs.price) refs.price.textContent = formatPriceUAH(furniture.price);
	if (refs.description) refs.description.textContent = furniture.description || '';

	// Парсимо sizes: "220x95x90" => { width, height, depth }
	if (furniture.sizes) {
		const [w, h, d] = furniture.sizes.split('x').map(s => s.trim());
		if (refs.width) refs.width.textContent = w || '-';
		if (refs.height) refs.height.textContent = h || '-';
		if (refs.depth) refs.depth.textContent = d || '-';
	}
}

function renderRating(rating = 0) {
	if (!refs.ratingWrap) return;

	const rounded = Math.round(Number(rating));
	const value = Number.isFinite(Number(rating)) ? Number(rating).toFixed(1) : '0.0';

	const stars = refs.ratingWrap.querySelectorAll('.product-modal-star');
	stars.forEach((star, index) => {
		star.classList.toggle('is-active', index < rounded);
	});

	if (refs.ratingValue) refs.ratingValue.textContent = value;
}

function renderGallery(images) {
	if (!refs.mainImage || !refs.galleryList || !images.length) return;

	const [mainImageUrl, ...thumbUrls] = images;
	setMainImage(mainImageUrl);

	const thumbElements = refs.galleryList.querySelectorAll('[data-product-thumb]');
	thumbElements.forEach((thumbEl, index) => {
		const imageUrl = thumbUrls[index];
		if (!imageUrl) return;

		thumbEl.src = imageUrl;
		thumbEl.srcset = imageUrl;
		thumbEl.alt = `Фото ${index + 1}`;
		thumbEl.dataset.index = String(index + 1);
	});

	refs.gallery.dataset.images = JSON.stringify(images);
}

function onGalleryThumbClick(event) {
	const thumb = event.target.closest('[data-product-thumb]');
	if (!thumb || !refs.gallery) return;

	const images = JSON.parse(refs.gallery.dataset.images || '[]');
	const index = Number(thumb.dataset.index);
	if (!images[index]) return;

	setMainImage(images[index]);
}

function setMainImage(imageUrl) {
	if (!refs.mainImage || !imageUrl) return;

	refs.mainImage.src = imageUrl;
	refs.mainImage.srcset = imageUrl;
	refs.mainImage.alt = 'Фото товару';
}

function renderColors(hexColors) {
	if (!refs.colorsList) return;

	const checkboxes = refs.colorsList.querySelectorAll('.product-modal-color-checkbox');
	const swatches = refs.colorsList.querySelectorAll('.product-modal-color-swatch');
	const labels = refs.colorsList.querySelectorAll('.visually-hidden');

	// Map hex до стилів (може розширитися за потребою)
	const hexToClass = {
		'#c7c3bb': 'product-modal-color-swatch--beige',
		'#ffffff': 'product-modal-color-swatch--white',
		'#201a19': 'product-modal-color-swatch--black',
	};

	checkboxes.forEach((checkbox, index) => {
		const hexColor = hexColors[index];
		if (!hexColor) return;

		checkbox.value = hexColor;
		checkbox.checked = index === 0;

		if (swatches[index]) {
			const swatchClass = hexToClass[hexColor] || 'product-modal-color-swatch--beige';
			swatches[index].className = `product-modal-color-swatch ${swatchClass}`;
			swatches[index].style.backgroundColor = hexColor;
		}

		if (labels[index]) {
			labels[index].textContent = hexColor;
		}
	});
}

function onColorChange(event) {
	const changed = event.target.closest('.product-modal-color-checkbox');
	if (!changed || !refs.colorsList) return;

	const allCheckboxes = refs.colorsList.querySelectorAll('.product-modal-color-checkbox');
	allCheckboxes.forEach(item => {
		item.checked = item === changed;
	});
}

function ensureLoader() {
	if (!refs.modal || refs.modal.querySelector('.product-modal-loader')) return;

	const loader = document.createElement('div');
	loader.className = 'product-modal-loader';
	loader.setAttribute('aria-hidden', 'true');
	refs.modal.appendChild(loader);
}

function showLoader(isVisible) {
	const loader = refs.modal?.querySelector('.product-modal-loader');
	if (!loader) return;

	loader.classList.toggle('is-visible', isVisible);
	loader.setAttribute('aria-hidden', String(!isVisible));
}

function showErrorToast(message) {
	if (window.iziToast?.error) {
		window.iziToast.error({
			title: 'Помилка',
			message,
			position: 'topRight',
			timeout: 3500,
		});
		return;
	}

	alert(message);
}

function formatPriceUAH(price) {
	return `${new Intl.NumberFormat('uk-UA').format(Number(price || 0))} грн`;
}

async function getFurnitureById(id) {
	// MOCK-версія: імітує затримку як при запиті на сервер
	// Коли буде реальне API, замінити на:
	// const response = await fetch(`/api/furniture/${id}`);
	// return response.json();

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const furniture = MOCK_FURNITURE.find(item => item._id === String(id));
			if (!furniture) {
				reject(new Error('Not found'));
				return;
			}

			resolve(furniture);
		}, 450);
	});
}

function openOrderModal() {
	const orderBackdrop = document.querySelector('[data-order-backdrop]');
	if (orderBackdrop) {
		orderBackdrop.classList.remove('is-hidden');
		document.body.style.overflow = 'hidden';
		return;
	}

	document.dispatchEvent(new CustomEvent('open-order-modal'));
}

window.ProductModal = {
	openById: openProductModal,
	close: closeProductModal,
	// Для тестування: window.ProductModal.updateMock(newFurniture)
	updateMock(data) {
		MOCK_FURNITURE.push(data);
	},
};

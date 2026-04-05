// import axios from 'axios';

// const BASE_URL = 'https://furniture-store.b.goit.study/api';

// export const api = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
// });

// let activeRequests = 0;

// function getLoaderEl() {
//     return document.getElementById('global-loader');
// }

// function showLoader() {
//     const el = getLoaderEl();
//     if (!el) return;
//     el.classList.remove('is-hidden');
//     el.setAttribute('aria-hidden', 'false');
//     el.setAttribute('aria-busy', 'true');
// }

// function hideLoader() {
//     const el = getLoaderEl();
//     if (!el) return;
//     el.classList.add('is-hidden');
//     el.setAttribute('aria-hidden', 'true');
//     el.setAttribute('aria-busy', 'false');
// }

// function syncLoader() {
//     if (activeRequests > 0) showLoader();
//     else hideLoader();
// }

// api.interceptors.request.use(
//     config => {
//         activeRequests += 1;
//         syncLoader();
//         return config;
//     },
//     error => {
//         activeRequests = Math.max(0, activeRequests - 1);
//         syncLoader();
//         return Promise.reject(error);
//     }
// );

// api.interceptors.response.use(
//     response => {
//         activeRequests = Math.max(0, activeRequests - 1);
//         syncLoader();
//         return response;
//     },
//     error => {
//         activeRequests = Math.max(0, activeRequests - 1);
//         syncLoader();
//         return Promise.reject(error);
//     }
// );

// export async function postOrder(payload) {
//     const { data } = await api.post('/orders', payload);
//     return data;}
// export const BASE_URL = 'https://furniture-store-v2.b.goit.study';

// const api = axios.create({
// 	baseURL: BASE_URL,
// 	timeout: 10000,
// });

// export async function getFurnitures(params = {}) {
// 	const { data } = await api.get('/furnitures', {
// 		params: {
// 			page: params.page ?? 1,
// 			limit: params.limit ?? 10,
// 			...params,
// 		},
// 	});

// 	return data;
// }

// export async function getFurnitureById(id) {
// 	if (!id) throw new Error('Furniture id is required');

// 	const { data } = await api.get(`/furnitures/${id}`);
// 	return data;
// }

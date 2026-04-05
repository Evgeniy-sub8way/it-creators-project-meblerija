import axios from 'axios';

export const BASE_URL_V1 = 'https://furniture-store.b.goit.study/api';

export const apiV1 = axios.create({
  baseURL: BASE_URL_V1,
  headers: { 'Content-Type': 'application/json' },
});

let activeRequests = 0;

function getLoaderEl() {
  return document.getElementById('global-loader');
}

function showLoader() {
  const el = getLoaderEl();
  if (!el) return;
  el.classList.remove('is-hidden');
  el.setAttribute('aria-hidden', 'false');
  el.setAttribute('aria-busy', 'true');
}

function hideLoader() {
  const el = getLoaderEl();
  if (!el) return;
  el.classList.add('is-hidden');
  el.setAttribute('aria-hidden', 'true');
  el.setAttribute('aria-busy', 'false');
}

function syncLoader() {
  if (activeRequests > 0) showLoader();
  else hideLoader();
}

apiV1.interceptors.request.use(
  config => {
    activeRequests += 1;
    syncLoader();
    return config;
  },
  error => {
    activeRequests = Math.max(0, activeRequests - 1);
    syncLoader();
    return Promise.reject(error);
  }
);

apiV1.interceptors.response.use(
  response => {
    activeRequests = Math.max(0, activeRequests - 1);
    syncLoader();
    return response;
  },
  error => {
    activeRequests = Math.max(0, activeRequests - 1);
    syncLoader();
    return Promise.reject(error);
  }
);

export async function postOrder(payload) {
  const { data } = await apiV1.post('/orders', payload);
  return data;
}

import axios from 'axios';

export const BASE_URL_V2 = 'https://furniture-store-v2.b.goit.study';

export const apiV2 = axios.create({
  baseURL: BASE_URL_V2,
  timeout: 10000,
});

export async function getFurnitures(params = {}) {
  const { data } = await apiV2.get('/furnitures', {
    params: {
      page: params.page ?? 1,
      limit: params.limit ?? 10,
      ...params,
    },
  });
  return data;
}

export async function getFurnitureById(id) {
  if (!id) throw new Error('Furniture id is required');
  const { data } = await apiV2.get(`/furnitures/${id}`);
  return data;
}

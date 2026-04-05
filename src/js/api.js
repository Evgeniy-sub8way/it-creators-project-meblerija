import axios from 'axios';

export const BASE_URL = 'https://furniture-store-v2.b.goit.study';

const api = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
});

export async function getFurnitures(params = {}) {
	const { data } = await api.get('/furnitures', {
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

	const { data } = await api.get(`/furnitures/${id}`);
	return data;
}

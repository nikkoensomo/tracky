import api from '../api/axios.js';
import type { CategoryFormData } from '../types/category.types.js';

export const createCategoryService = async (formData: CategoryFormData) => {
    const response = await api.post('/categories/', formData);
    return response.data;
}
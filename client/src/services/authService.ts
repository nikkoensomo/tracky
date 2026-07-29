import api from '../api/axios.js';
import type { RegisterPayload } from '../types/auth.types.js';

export const signupService = async (formData: RegisterPayload) => {
    const response = await api.post('/auth/signup', formData);
    return response.data;
}
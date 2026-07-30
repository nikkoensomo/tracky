import api from '../api/axios.js';
import type { RegisterPayload, LoginFormData } from '../types/auth.types.js';

export const signupService = async (formData: RegisterPayload) => {
    const response = await api.post('/auth/signup', formData);
    return response.data;
}

export const loginService = async (formData: LoginFormData) => {
    const response = await api.post('/auth/login', formData);
    return response.data;
}
import api from "../api/axios";
import type { WelcomeFormData } from "../types/user.types";

export const getLoggedInUserService = async () => {
    const response = await api.get('/users/me');
    return response.data;
}

export const createUserNicknameService = async (formData: WelcomeFormData) => {
    const response = await api.put('/users/', formData);
    return response.data;
}
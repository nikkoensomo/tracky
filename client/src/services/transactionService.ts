import api from "../api/axios";
import type { AccountFormData } from "../types/account.types";

export const createAccountService = async (formData: AccountFormData) => {
    const response = await api.post('/api/accounts', formData);
    return response.data;
}
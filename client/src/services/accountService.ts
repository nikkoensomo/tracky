import api from "../api/axios";
import type { Account } from "../types/account.types";

export const getUserAccountsService = async () => {
    const response = await api.get('/accounts/');
    return response.data.accounts;
}
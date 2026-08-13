import api from "../api/axios";
import type { Account } from "../types/account.types";

export const getUserAccountsService = async () => {
    const response = await api.get('/accounts/');
    return response.data.accounts;
}

export const getTotalBalanceService = async () => {
    const response = await api.get('/accounts/total-balance/');
    return response.data.totalBalance;
}
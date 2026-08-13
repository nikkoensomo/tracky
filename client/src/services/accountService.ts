import api from "../api/axios";

export const getUserAccountsService = async () => {
    const response = await api.get('/accounts/');
    return response.data.accounts;
}

export const getTotalBalanceService = async () => {
    const response = await api.get('/accounts/total-balance/');
    return response.data.totalBalance;
}
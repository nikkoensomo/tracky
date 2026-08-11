import api from "../api/axios";
import type { AccountFormData } from "../types/account.types";
import type { TransactionFormData } from "../types/transaction.types";

export const createAccountService = async (formData: AccountFormData) => {
    const response = await api.post('/accounts/', formData);
    return response.data;
}

export const getRecentTransactionsService = async () => {
    const response = await api.get('/transactions/');
    return response.data.transactions;
}

export const createExpenseService = async (formData: TransactionFormData) => {
    const response = await api.post('/transactions/expense', formData);
    return response.data;
}

export const createIncomeService = async (formData: TransactionFormData) => {
    const response = await api.post('/transactions/income', formData);
    return response.data;
}
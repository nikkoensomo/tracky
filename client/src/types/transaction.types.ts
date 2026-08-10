export type Transaction = {
    _id: string;
    title: string;
    type: 'income' | 'expense' | 'transfer';
    accountId: {
        _id: string;
        name: string;
        type: 'cash' | 'bank' | 'ewallet' | 'credit_card';
    };
    categoryId: {
        _id: string;
        name: string;
        type: 'income' | 'expense';
    };
    amount: number;
    note: string;
    paymentMethod?: 'cash' | 'ewallet' | 'credit_card';
    createdAt: string;
    updatedAt: string;
}

export type TransactionFormData = {
    accountId: string;
    categoryId: string;
    title: string;
    amount: number;
    note?: string;
    transactionDate: string;
    paymentMethod: 'cash' | 'ewallet' | 'credit_card';
}

export type TransactionFormErrors = {
    accountId?: string;
    categoryId?: string;
    title?: string;
    amount?: string;
    note?: string;
    transactionDate?: string;
    paymentMethod?: string;
    general?: string;
}
export type Transaction = {
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
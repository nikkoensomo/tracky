export type Transaction = {
    title: string;
    type: 'income' | 'expense' | 'transfer';
    amount: number;
    note: string;
    paymentMethod?: 'cash' | 'ewallet' | 'credit_card';
    createdAt: string;
}
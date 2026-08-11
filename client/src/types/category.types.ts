export type Category = {
    _id: string;
    userId: string;
    name: string;
    type: 'income' | 'expense';
}

export type CategoryFormData = {
    name: string;
    type: 'income' | 'expense';
}

export type CategoryFormErrors = {
    name?: string;
    type?: string;
    general?: string;
}
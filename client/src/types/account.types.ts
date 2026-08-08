export type AccountFormData = {
    name: string;
    type: 'cash' | 'ewallet' | 'bank' | 'credit_card';
    initialBalance: number;
}


// ERRORS
export type AccountFormErrors = {
    name?: string;
    type?: string;
    initialBalance?: string;
    general?: string;
}
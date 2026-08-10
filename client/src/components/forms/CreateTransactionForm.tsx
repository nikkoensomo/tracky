import { useState } from 'react';
import type { TransactionFormData, TransactionFormErrors } from "../../types/transaction.types";

const CreateTransactionForm = () => {
    const [formData, setFormData] = useState<TransactionFormData>({
        accountId: '',
        categoryId: '',
        title: '',
        amount: 0,
        note: '',
        transactionDate: new Date().toISOString().split('T')[0],
        paymentMethod: 'cash',
    });

    const [errors, setErrors] = useState<TransactionFormErrors>({
        accountId: '',
        categoryId: '',
        title: '',
        amount: '',
        note: '',
        transactionDate: '',
        paymentMethod: '',
        general: '',
    })

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        setErrors({...errors, })
    }

    const validate = () => {
        const newErrors: TransactionFormErrors = {};

        if (!formData.accountId.trim()) {
            newErrors.accountId = 'Please select an account.';
        }

        if (!formData.categoryId.trim()) {
            newErrors.categoryId = 'Please select a category';
        }

        if (!formData.title.trim()) {
            newErrors.title = 'Please enter a title.';
        }

        if (!formData.amount) {
            newErrors.amount = 'Please enter the amount.';
        }

        if (!formData.transactionDate.trim()) {
            newErrors.transactionDate = 'Please enter the transaction date.';
        }

        if (!formData.paymentMethod?.trim()) {
            newErrors.paymentMethod = 'Please enter the payment method.';        
        }

        return newErrors;
    }

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
        } catch (error) {
            setErrors({
                ...errors,
                general: error instanceof Error ? error.message : 'Unkown error'
            })
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>

        </>
    )
}

export default CreateTransactionForm;
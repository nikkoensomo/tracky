import { useState } from 'react';
import type { TransactionFormData, TransactionFormErrors } from "../../types/transaction.types";
import type { Account } from '../../types/account.types';
import type { Category } from '../../types/category.types';
import { createExpenseService } from '../../services/transactionService';
import CancelButton from '../buttons/reusable/CancelButton';
import CreateButton from '../buttons/reusable/SubmitButton';

type CreateTransactionFormProps = {
    accounts: Account[];
    categories: Category[];
    onSuccess: () => void;
    onClose: () => void;
}

const CreateTransactionForm = ({ accounts, categories, onSuccess, onClose }: CreateTransactionFormProps ) => {
    const [formData, setFormData] = useState<TransactionFormData>({
        accountId: '',
        categoryId: '',
        type: 'expense',
        title: '',
        amount: 0,
        note: '',
        transactionDate: new Date().toISOString().split('T')[0],
        paymentMethod: 'cash',
    });

    const [errors, setErrors] = useState<TransactionFormErrors>({
        accountId: '',
        categoryId: '',
        type: '',
        title: '',
        amount: '',
        note: '',
        transactionDate: '',
        paymentMethod: '',
        general: '',
    })

    // const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, })
    }

    const validate = () => {
        const newErrors: TransactionFormErrors = {};

        if (!formData.accountId) {
            newErrors.accountId = 'Please select an account.';
        }

        if (!formData.categoryId) {
            newErrors.categoryId = 'Please select a category';
        }

        if (!formData.type.trim()) {
            newErrors.type = "Please select transaction type.";
        }

        if (!formData.title.trim()) {
            newErrors.title = 'Please enter a title.';
        }

        if (!formData.amount) {
            newErrors.amount = 'Please enter the amount.';
        }

        if (!formData.transactionDate) {
            newErrors.transactionDate = 'Please enter the transaction date.';
        }

        if (!formData.paymentMethod.trim()) {
            newErrors.paymentMethod = 'Please enter the payment method.';
        }

        return newErrors;
    }

    const handleSubmit = async () => {
        const newErrors: TransactionFormErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            // setIsLoading(true);

            if (formData.type === 'expense') {
                const transaction = await createExpenseService(formData);

                console.log({
                    messsage: 'Transaction Success.',
                    transaction
                });
            }

            onSuccess();
        } catch (error) {
            setErrors({
                ...errors,
                general: error instanceof Error ? error.message : 'Unkown error'
            })
        } finally {
            // setIsLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-4">
                <div>
                    <label className="text-sm text-slate-700">Transaction Type</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
                </div>

                <div className="grid grid-cols-[2fr_1fr] gap-4">
                    <div className="flex flex-col">
                        <label className="text-sm text-slate-700 mb-2">Title</label>
                        <input
                            type="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Title"
                            className="border border-gray-300 rounded-lg px-4 py-2 placeholder:text-slate-400 placeholder:text-[14px] placeholder:text-focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-slate-700 mb-2">Amount</label>
                        <div className="relative">
                            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                                ₱
                            </span>

                            <input
                                type="number"
                                inputMode="decimal"
                                step="0.01"
                                min="0"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                placeholder="0.00"
                                className="w-full rounded-lg border border-gray-300 py-3 pl-8 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                            />
                        </div>
                        {errors.amount && <p className="text-red-500 text-xs">{errors.amount}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-slate-700">Account</label>
                        <select
                            name="accountId"
                            value={formData.accountId}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        >
                            <option value="">Select an account</option>
                            {accounts ? (
                                accounts.map((account) => (
                                    <option key={account._id} value={account._id}>{ account.name }</option>
                                ))
                            ) : (
                                <></>
                            )}
                        </select>
                        {errors.accountId && <p className="text-red-500 text-xs">{errors.accountId}</p>}
                    </div>

                    <div>
                        <label className="text-sm text-slate-700">Category</label>
                        <select
                            name="categoryId"
                            value={formData.categoryId}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        >
                            <option value="">Select a category</option>
                            {categories ? (
                                categories.map((category) => (
                                    <option key={category._id} value={category._id}>{ category.name }</option>
                                ))
                            ) : (
                                <></>
                            )}
                        </select>
                        {errors.categoryId && <p className="text-red-500 text-xs">{errors.categoryId}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-sm text-slate-700 mb-2">Transaction Date</label>
                        <input
                            type="date"
                            name="transactionDate"
                            value={formData.transactionDate}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg px-4 py-2 placeholder:text-slate-400 placeholder:text-[14px] placeholder:text-focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        {errors.transactionDate && <p className="text-red-500 text-xs">{errors.transactionDate}</p>}
                    </div>

                    <div>
                        <label className="text-sm text-slate-700">Payment Method</label>
                        <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                        >
                            <option value="">Select type</option>
                            <option value="cash">Cash</option>
                            <option value="ewallet">E-wallet</option>
                            <option value="credit_card">Credit Card</option>
                        </select>
                        {errors.paymentMethod && <p className="text-red-500 text-xs">{errors.paymentMethod}</p>}
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-slate-700">Additional Notes</label>
                    <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder="Add a note"
                        rows={3}
                        className="border border-gray-300 rounded-lg px-4 py-2 placeholder:text-slate-400 placeholder:text-[14px] placeholder:text-focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    {errors.note && <p className="text-red-500 text-xs">{errors.note}</p>}
                </div>

                <div className="flex items-center justify-end space-x-4 mt-2">
                    <CancelButton 
                        onClick={onClose}
                    />

                    <CreateButton 
                        onClick={handleSubmit}
                    />
                </div>

            </div>
        </>
    )
}

export default CreateTransactionForm;
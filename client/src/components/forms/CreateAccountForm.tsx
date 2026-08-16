import { useState } from 'react';
import type { AccountFormData, AccountFormErrors } from "../../types/account.types";
import { createAccountService } from '../../services/transactionService';
import { LoaderCircle } from 'lucide-react';

import CreateButton from '../buttons/reusable/SubmitButton';
import CancelButton from '../buttons/reusable/CancelButton';

type CreateAccountFormProps = {
    onClose: () => void;
    onSuccess: () => void;
}

const CreateAccountForm = ({ onClose, onSuccess}: CreateAccountFormProps ) => {

    const [formData, setFormData] = useState<AccountFormData>({
        name: '',
        type: 'cash',
        initialBalance: 0,
    });

    const [errors, setErrors] = useState<AccountFormErrors>({
        name: '',
        type: '',
        initialBalance: '',
        general: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    }

    const validate = () => {
        const newErrors: AccountFormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Please input the account name.';
        }

        if (!formData.type.trim()) {
            newErrors.type = 'Account type is required.';
        }

        if (!formData.initialBalance) {
            newErrors.initialBalance = 'Please input the initial balance.';
        }

        return newErrors;
    }

    const handleSubmit = async () => {
        const newErrors: AccountFormErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setIsLoading(true);

            const payload = await createAccountService(formData);

            onSuccess();
            console.log({
                message: 'Account creation success',
                payload
            })
        } catch (error) {
            setErrors({
                ...errors,
                general: error instanceof Error ? error.message : 'Unkown error.'
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-4 px-4 mt-6">
                <div className="flex flex-col">
                    <label className="text-sm text-slate-700 mb-2">Acount Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Account name"
                        className="border border-gray-300 rounded-lg px-4 py-2 placeholder:text-slate-400 placeholder:text-[14px] placeholder:text-focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-slate-700 mb-2">Account Type</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                        <option value="">Select type</option>
                        <option value="cash">Cash</option>
                        <option value="ewallet">E-wallet</option>
                        <option value="credit_card">Credit Card</option>
                        <option value="bank">Bank</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-slate-700 mb-2">Initial Balance</label>
                    <div className="relative">
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                            ₱
                        </span>

                        <input
                            type="number"
                            inputMode="decimal"
                            step="0.01"
                            min="0"
                            name="initialBalance"
                            value={formData.initialBalance}
                            onChange={handleChange}
                            placeholder="0.00"
                            className="w-full rounded-lg border border-gray-300 py-3 pl-8 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                        />
                    </div>
                    {errors.initialBalance && <p className="text-red-500 text-xs">{errors.initialBalance}</p>}
                </div>

                <span className="text-[12px] text-slate-500">Your starting balance will be, balance here.</span>

                <div className="flex justify-end space-between gap-4 mt-4">
                    <CancelButton
                        onClick={onClose}
                    />
                    <CreateButton
                        onClick={handleSubmit}
                        label={isLoading ? (
                            <>
                                Creating...
                                <LoaderCircle size={20} />
                            </>
                        ) : (
                            'Create'
                        )}
                    />
                </div>
            </div>
        </>
    )
}

export default CreateAccountForm;
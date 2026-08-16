import { useState } from 'react';
import { createCategoryService } from '../../services/categoryService';
import type { CategoryFormData, CategoryFormErrors } from '../../types/category.types';
import { LoaderCircle } from 'lucide-react';

import CancelButton from '../buttons/reusable/CancelButton';
import CreateButton from '../buttons/reusable/SubmitButton';

type CategoryFormProps = {
    onClose: () => void;
    onSuccess: () => void;
}

const CreateCategoryForm = ({ onSuccess, onClose }: CategoryFormProps ) => {
    const [formData, setFormData] = useState<CategoryFormData>({
        name: '',
        type: 'expense',
    });

    const [errors, setErrors] = useState<CategoryFormErrors>({
        name: '',
        type: '',
        general: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        setErrors({...errors, [e.target.name]: ''});
    }

    const validate = () => {
        const newErrors: CategoryFormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Please input the category name.';
        }

        if (!formData.type) {
            newErrors.type = 'Please select the category type.';
        }

        return newErrors;
    }

    const handleSubmit = async () => {
        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setIsLoading(true);

            const payload = await createCategoryService(formData);

            console.log({ 
                message: 'Created Category',
                payload,
            })

            onSuccess();
        } catch (error) {
            setErrors({
                ...errors,
                general: error instanceof Error ? error.message : 'Unknown error',
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-4 px-4 mt-6">
                <div className="flex flex-col">
                    <label className="text-sm text-slate-700 mb-2">Category Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Category name"
                        className="border border-gray-300 rounded-lg px-4 py-2 placeholder:text-slate-400 placeholder:text-[14px] placeholder:text-focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-slate-700 mb-2">Category Type</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                        <option value="">Select type</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                <div className="flex space-x-4 justify-end">
                    <CancelButton 
                        onClick={onClose}
                    />

                    <CreateButton 
                        onClick={handleSubmit}
                        isDisabled={isLoading}
                        label={isLoading ? (
                            <>
                                Creating...
                                <LoaderCircle className="animate-spin" size={20} />
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

export default CreateCategoryForm;
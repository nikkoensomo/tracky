import { useEffect, useRef, useState } from 'react';
import type { Account } from '../../../types/account.types';
import type { Category } from '../../../types/category.types';
import { getUserAccountsService } from '../../../services/accountService';
import { getUserCategoriesService } from '../../../services/categoryService';

import CreateTransactionForm from '../../forms/CreateTransactionForm';

type CreateTransactionModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const CreateTransactionModal = ({ isOpen, onClose }: CreateTransactionModalProps) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    const [accounts, setAccounts] = useState<Account[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (!isOpen) return;

        async function fetchFormOptions() {
            try {
                const accounts = await getUserAccountsService();
                const categories = await getUserCategoriesService();

                setAccounts(accounts);
                setCategories(categories);

                console.log({
                    message: 'User Accounts',
                    accounts,
                });

                console.log({
                    message: 'User Categories',
                    categories,
                });
            } catch (error) {
                console.log(error);
            }
        }

        fetchFormOptions();
    }, [isOpen]);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (!isOpen) return;

            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                <div
                    ref={modalRef}
                    className="bg-white max-w-md rounded-lg p-6">
                    <div className="flex flex-col gap-4 justify-center text-center">
                        <span className="text-lg font-medium text-slate-700">Create Transaction</span>

                        <CreateTransactionForm 
                            accounts={accounts}
                            categories={categories}
                            onSuccess={onClose}
                            onClose={onClose}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTransactionModal;
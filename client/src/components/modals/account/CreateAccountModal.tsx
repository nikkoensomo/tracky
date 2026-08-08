import { useEffect, useRef } from 'react';

import CreateAccountForm from '../../forms/CreateAccountForm';

type CreateAccountModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const CreateAccountModal = ({ isOpen, onClose }: CreateAccountModalProps) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

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
                    className="w-full bg-white max-w-md rounded-lg p-6">
                    <div className="flex flex-col gap-2 items-center text-center px-4">
                        <span className="text-lg text-slate-700 font-medium">Add Account</span>
                        <span className="text-[13px] text-slate-500">Create a place to track your money, like cash, bank accounts, or e-wallets.</span>
                    </div>

                    <div className="w-full px-4">
                        <CreateAccountForm 
                            onClose={onClose}
                            onSuccess={onClose}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAccountModal;
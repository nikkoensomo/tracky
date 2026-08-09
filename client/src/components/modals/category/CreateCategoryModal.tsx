import { useEffect, useRef } from 'react';
import CreateCategoryForm from '../../forms/CreateCategoryForm';

type CreateCategoryModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const CreateCategoryModal = ({ isOpen, onClose }: CreateCategoryModalProps ) => {
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
                    className="w-max-lg bg-white rounded-lg p-6">
                    <div className="flex flex-col gap-4 justify-center text-center">
                        <span className="text-slate-700 text-lg font-medium">Add Category</span>
                        <span className="text-slate-500 text-[13px]">Organize your transactions with a custom category.</span>
                    </div>

                    <CreateCategoryForm 
                        onSuccess={onClose}
                        onClose={onClose}
                    />
                </div>
            </div>
        </>
    )
}

export default CreateCategoryModal;
import { useEffect, useRef } from 'react';
import CancelButton from '../../buttons/reusable/CancelButton';
import CreateButton from '../../buttons/reusable/SubmitButton';

type CreateAccountFirstModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreateAccount: () => void;
}

const CreateAccountFirstModal = ({ isOpen, onClose, onCreateAccount }: CreateAccountFirstModalProps ) => {
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
                    className="bg-white max-w-md rounded-lg p-6">
                    <div className="flex flex-col justify-center text-center gap-4">
                        <span className="text-slate-700 font-medium">Let's add your first account</span>
                        <span className="text-sm text-slate-700">Before tracking income or expenses, create a place where your money lives.</span>

                        <div className="flex space-x-4 justify-center mt-4">
                            <CancelButton 
                                onClick={onClose}
                                label='Maybe Later'
                            />

                            <CreateButton 
                                onClick={onCreateAccount}
                                label='Create Account'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAccountFirstModal;
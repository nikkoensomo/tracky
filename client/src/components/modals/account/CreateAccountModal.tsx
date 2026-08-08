import { useEffect, useRef } from 'react';

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
                    <div className="flex flex-col gap-4 items-center">
                        <span>Please create an account.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAccountModal;
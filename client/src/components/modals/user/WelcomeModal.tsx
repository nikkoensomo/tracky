import { useEffect, useRef } from 'react';

import WelcomeForm from '../../forms/WelcomeForm';

type WelcomeModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onLater: () => void;
}

const WelcomeModal = ({ isOpen, onClose, onLater }: WelcomeModalProps) => {
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
                    className="w-full max-w-sm bg-white p-6 rounded-lg">
                    <div className="flex flex-col gap-4 items-center">
                        <span className="text-2xl text-slate-950 font-semibold">Welcome to Tracky!</span>
                        <span className="text-sm text-gray-500 font-medium">What should we call you?</span>

                        <WelcomeForm 
                            onSuccess={onClose}
                            onLater={onLater}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomeModal;
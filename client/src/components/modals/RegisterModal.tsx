import { useRef, useEffect } from 'react';
import RegisterForm from '../forms/RegisterForm';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: ModalProps) => {
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
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
                <div
                    ref={modalRef}
                    className="w-full max-w-md rounded-lg shadow-lg bg-white p-6"
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-700 text-lg font-bold text-white">
                            TR
                        </div>

                        <h2 className="text-2xl font-semibold text-zinc-950">
                            Create your Tracky account!
                        </h2>

                        <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500 mb-4">
                            Start tracking smarter. Build better habits.
                            <br />
                            Take control today.
                        </p>
                    </div>

                    <div className="w-full">
                        <RegisterForm
                            onSuccess={onClose}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModal;
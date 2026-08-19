import { useRef, useEffect } from 'react';
import LoginForm from '../forms/LoginForm';

import trackyIcon from '../../assets/illustrations/tracky-icon.png';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onRedirect: () => void;
}

const LoginModal = ({ isOpen, onClose, onRedirect }: ModalProps) => {
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
                    <div className="mb-6 flex flex-col items-center text-center">
                        <img
                            src={trackyIcon}
                            alt="Tracky Icon"
                            className="w-10 object-contain mb-2"
                        />

                        <h2 className="text-2xl font-semibold text-zinc-950">
                            Welcome back!
                        </h2>

                        <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                            Track your spending. Grow your savings.
                            <br></br>
                            Stay in control.
                        </p>
                    </div>

                    <div className="w-full">
                        <LoginForm
                            onSuccess={onClose}
                        />
                    </div>

                    <div className="flex justify-center text-center items-center mt-4">
                        <p className="text-sm text-gray-500">
                            New to Tracky?{" "}
                            <button
                                type='button'
                                onClick={onRedirect}
                                className="text-teal-800 hover:text-teal-900 hover:underline font-medium cursor-pointer"
                            >
                                Sign Up
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModal;
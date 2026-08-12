import { useState, useEffect, useRef } from 'react';
import CancelButton from '../buttons/reusable/CancelButton';
import ConfirmButton from '../buttons/reusable/ConfirmButton';

type LogoutModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onLogout: () => void;
}

const LogoutModal = ({ isOpen, onClose, onLogout }: LogoutModalProps ) => {
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
                    <div className="flex flex-col gap-6">
                        <span>Are you sure you want to logout?</span>
                        <div className="flex justify-center space-x-4">
                            <CancelButton 
                                onClick={onClose}
                            />

                            <ConfirmButton 
                                onClick={onLogout}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoutModal;
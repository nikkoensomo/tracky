import { useState } from 'react';

import LandingPageHeader from "../components/headers/LandingPageHeader";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";

const LandingPage = () => {
    type ModalMode = 'login' | 'register' | null;

    const [modalMode, setModalMode] = useState<ModalMode>(null);

    const handleLoginModal = () => {
        setModalMode('login');
    }

    const handleRegisterModal = () => {
        setModalMode('register');
    }

    const handleCloseModal = () => {
        setModalMode(null);
    }

    return (
        <>
            <LandingPageHeader 
                onLogin={handleLoginModal}
                onRegister={handleRegisterModal}
            />

            <main>
                
            </main>

            <LoginModal 
                isOpen={modalMode === 'login'}
                onClose={handleCloseModal}
            />

            <RegisterModal 
                isOpen={modalMode === 'register'}
                onClose={handleCloseModal}
            />
        </>
    )
}

export default LandingPage;
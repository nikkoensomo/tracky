import { useState } from 'react';

import LandingPageHeader from "../components/headers/LandingPageHeader";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import LandingPageHero from '../components/sections/heroes/LandingPageHero';
import AboutUsSection from '../components/sections/AboutUsSection';
import ContactUsSection from '../components/sections/ContactUsSection';

import useDocumentTitle from '../hooks/useDocumentTitle';

const LandingPage = () => {
    useDocumentTitle('Landing - Tracky');

    type ModalMode = 'login' | 'register' | 'success' | null;

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

    const handleRedirect = () => {
        handleCloseModal();

        if (modalMode === 'login') {
            setModalMode('register');
        }

        if (modalMode === 'register') {
            setModalMode('login');
        }
    }

    const handleSentContactForm = () => {
        handleCloseModal();
        setModalMode('success');
    }

    return (
        <>
            <LandingPageHeader 
                onLogin={handleLoginModal}
                onRegister={handleRegisterModal}
            />

            <main>
                <LandingPageHero 
                    onGetStarted={handleLoginModal}
                />
                <AboutUsSection />
                <ContactUsSection 
                    onSuccess={handleSentContactForm}
                />
            </main>

            <LoginModal 
                isOpen={modalMode === 'login'}
                onClose={handleCloseModal}
                onRedirect={handleRedirect}
            />

            <RegisterModal 
                isOpen={modalMode === 'register'}
                onClose={handleCloseModal}
                onRedirect={handleRedirect}
            />
        </>
    )
}

export default LandingPage;
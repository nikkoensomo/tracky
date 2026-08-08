import { useState } from 'react';

import DashboardPageHeader from "../components/headers/DashboardPageHeader";
import DashboardPageHero from "../components/sections/heroes/DashboardPageHero";

import CreateAccountModal from '../components/modals/account/CreateAccountModal';

type ModalMode = 'account' | 'expense' | null;

const DashboardPage = () => {

    const [modalMode, setModalMode] = useState<ModalMode>(null);

    const handleCreateAccount = () => {
        setModalMode('account');
    }

    const handleCreateExpense = () => {
        setModalMode('expense');
    }

    const handleCloseModal = () => {
        setModalMode(null);
    }

    return (
        <>
            <main className="flex flex-col gap-4">
                <DashboardPageHero 
                    onCreateAccount={handleCreateAccount}
                />
            </main>

            <CreateAccountModal 
                isOpen={modalMode === 'account'}
                onClose={handleCloseModal}
            />
        </>
    )
}

export default DashboardPage;
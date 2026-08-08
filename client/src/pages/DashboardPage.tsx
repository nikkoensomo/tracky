import { useState, useEffect } from 'react';
import { ArrowDownUp } from 'lucide-react';
import { getRecentTransactionsService } from '../services/transactionService';
import type { Transaction } from '../types/transaction.types';

import DashboardPageHeader from "../components/headers/DashboardPageHeader";
import DashboardPageHero from "../components/sections/heroes/DashboardPageHero";
import RecentTransactionsTable from '../components/tables/RecentTransactionsTable';

import CreateAccountModal from '../components/modals/account/CreateAccountModal';

type ModalMode = 'account' | 'expense' | null;

const DashboardPage = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([])

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

    useEffect(() => {
        async function fetchRecentTransactions() {
            try {
                const transactions = await getRecentTransactionsService();
                setTransactions(transactions);
                console.log(transactions);
            } catch (error) {
                console.log(error);
            }
        }

        fetchRecentTransactions();
    }, [])

    return (
        <>
            <main className="flex flex-col gap-4">
                <DashboardPageHero
                    onCreateAccount={handleCreateAccount}
                />

                <div className="grid grid-cols-[2fr_1fr] gap-4">
                    <div className="flex flex-col gap-4 bg-whtie border border-gray-200 rounded-lg p-6">
                        <div className="flex gap-2 items-center">
                            <ArrowDownUp size={20} />
                            <span className="text-slate-800 text-sm">Recent Transactions</span>
                        </div>

                        <RecentTransactionsTable
                            transactions={transactions}
                        />
                    </div>
                </div>
            </main>

            <CreateAccountModal
                isOpen={modalMode === 'account'}
                onClose={handleCloseModal}
            />
        </>
    )
}

export default DashboardPage;
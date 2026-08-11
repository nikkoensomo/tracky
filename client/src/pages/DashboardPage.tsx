import { useState, useEffect } from 'react';
import { ArrowDownUp } from 'lucide-react';
import { getRecentTransactionsService } from '../services/transactionService';
import { getUserAccountsService } from '../services/accountService';
import type { Transaction } from '../types/transaction.types';
import type { Account } from '../types/account.types';

import DashboardPageHeader from "../components/headers/DashboardPageHeader";
import DashboardPageHero from "../components/sections/heroes/DashboardPageHero";
import RecentTransactionsTable from '../components/tables/RecentTransactionsTable';

import CreateAccountModal from '../components/modals/account/CreateAccountModal';
import CreateCategoryModal from '../components/modals/category/CreateCategoryModal';
import CreateTransactionModal from '../components/modals/transaction/CreateTransactionModal';

type ModalMode = 'account' | 'transaction' | 'category' | null;

const DashboardPage = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [accounts, setAccounts] = useState<Account[]>([]);

    const [modalMode, setModalMode] = useState<ModalMode>(null);

    const handleCreateAccount = () => {
        setModalMode('account');
    }

    const handleCreateTransaction = () => {
        setModalMode('transaction');
    }

    const handleCreateCategory = () => {
        setModalMode('category');
    }

    const handleCloseModal = () => {
        setModalMode(null);
    }

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                const transactions = await getRecentTransactionsService();
                const accounts = await getUserAccountsService();

                setTransactions(transactions);
                setAccounts(accounts);

                console.log(transactions);
                console.log(accounts);
            } catch (error) {
                console.log(error);
            }
        }

        fetchDashboardData();
    }, [])

    return (
        <>
            <main className="flex flex-col gap-4">
                <DashboardPageHero
                    onCreateAccount={handleCreateAccount}
                    onCreateCategory={handleCreateCategory}
                    onCraeteTransaction={handleCreateTransaction}
                />

                <div className="grid grid-cols-[2fr_1fr] items-start gap-4">
                    <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex gap-2 items-center">
                            <ArrowDownUp size={20} />
                            <span className="text-slate-800 text-sm">Recent Transactions</span>
                        </div>

                        <RecentTransactionsTable
                            transactions={transactions}
                        />
                    </div>

                    <div className="flex h-[calc(100vh-14rem)] flex-col gap-4">
                        <div className="grid grid-rows-3 gap-4">
                            {accounts.map((account) => (
                                <div className="border border-gray-200 rounded-lg p-6">
                                    <div key={account._id} className="flex flex-col gap-2">
                                        <span className="text-sm text-slate-700 font-medium">{account.name}</span>
                                        <span className="text-sm text-slate-700">Type: {account.type}</span>
                                        <span className="text-sm text-slate-700">Current Balance: {account.currentBalance}</span>
                                        <span className="text-sm text-slate-700">Initial Balance: {account.initialBalance}</span>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <CreateAccountModal
                isOpen={modalMode === 'account'}
                onClose={handleCloseModal}
            />

            <CreateCategoryModal
                isOpen={modalMode === 'category'}
                onClose={handleCloseModal}
            />

            <CreateTransactionModal
                isOpen={modalMode === 'transaction'}
                onClose={handleCloseModal}
            />
        </>
    )
}

export default DashboardPage;
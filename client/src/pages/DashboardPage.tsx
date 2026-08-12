import { useState, useEffect } from 'react';
import { ArrowDownUp } from 'lucide-react';
import { getRecentTransactionsService } from '../services/transactionService';
import { getUserAccountsService, getTotalBalanceService } from '../services/accountService';
import type { Transaction } from '../types/transaction.types';
import type { Account } from '../types/account.types';

import DashboardPageHero from "../components/sections/heroes/DashboardPageHero";
import RecentTransactionsTable from '../components/tables/RecentTransactionsTable';
import DashboardAccountCards from '../components/cards/DashboardAccountCards';

import CreateAccountModal from '../components/modals/account/CreateAccountModal';
import CreateCategoryModal from '../components/modals/category/CreateCategoryModal';
import CreateTransactionModal from '../components/modals/transaction/CreateTransactionModal';

type ModalMode = 'account' | 'transaction' | 'category' | null;

const DashboardPage = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [totalBalance, setTotalBalance] = useState<number>(0);

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

    const handleAccountCreated = async () => {
        await fetchDashboardData();
        setModalMode(null);
    }

    const handleTransactionCreated = async () => {
        await fetchDashboardData();
        setModalMode(null);
    }

    const handleCategoryCreated = async () => {
        await fetchDashboardData();
        setModalMode(null);
    }

    const fetchDashboardData = async () => {
        try {
            const [transactions, accounts, totalBalance] = await Promise.all([
                getRecentTransactionsService(),
                getUserAccountsService(),
                getTotalBalanceService(),
            ]);

            setTransactions(transactions);
            setAccounts(accounts);
            setTotalBalance(totalBalance);

            console.log(transactions);
            console.log(accounts);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDashboardData();
    }, []);

    return (
        <>
            <main className="flex flex-col gap-4">
                <DashboardPageHero
                    onCreateAccount={handleCreateAccount}
                    onCreateCategory={handleCreateCategory}
                    onCraeteTransaction={handleCreateTransaction}
                    totalBalance={totalBalance}
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
                            <DashboardAccountCards
                                accounts={accounts}
                            />
                        </div>
                    </div>
                </div>
            </main>

            <CreateAccountModal
                isOpen={modalMode === 'account'}
                onClose={handleAccountCreated}
            />

            <CreateCategoryModal
                isOpen={modalMode === 'category'}
                onClose={handleCategoryCreated}
            />

            <CreateTransactionModal
                isOpen={modalMode === 'transaction'}
                onClose={handleTransactionCreated}
            />
        </>
    )
}

export default DashboardPage;
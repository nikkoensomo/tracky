import { useState, useEffect } from 'react';
import { ArrowDownUp } from 'lucide-react';
import { getRecentTransactionsService } from '../services/transactionService';
import { getUserAccountsService, getTotalBalanceService } from '../services/accountService';
import { getLoggedInUserService } from '../services/userService';
import type { Transaction } from '../types/transaction.types';
import type { Account } from '../types/account.types';
import type { User } from '../types/user.types';

import DashboardPageHero from "../components/sections/heroes/DashboardPageHero";
import RecentTransactionsTable from '../components/tables/RecentTransactionsTable';
import DashboardAccountCards from '../components/cards/DashboardAccountCards';

import CreateAccountModal from '../components/modals/account/CreateAccountModal';
import CreateCategoryModal from '../components/modals/category/CreateCategoryModal';
import CreateTransactionModal from '../components/modals/transaction/CreateTransactionModal';
import CreateAccountFirstModal from '../components/modals/account/CreateAccountFirstModal';
import WelcomeModal from '../components/modals/user/welcomeModal';

import useDocumentTitle from '../hooks/useDocumentTitle';

type ModalMode = 'account' | 'transaction' | 'category' | 'account-required' | 'welcome' | null;

const DashboardPage = () => {
    useDocumentTitle('Dashboard - Tracky');

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const [totalBalance, setTotalBalance] = useState<number>(0);

    const [modalMode, setModalMode] = useState<ModalMode>(null);

    const [hasDismissedWelcome, setHasDismissedWelcome] = useState(false);

    const handleCreateAccount = () => {
        setModalMode('account');
    }

    const handleCreateTransaction = () => {
        if (accounts.length === 0) {
            setModalMode('account-required');
            return;
        }

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

    const handleNicknameCreated = async () => {
        await fetchDashboardData();
        setModalMode(null);
    }

    const handleMaybeLater =  () => {
        setModalMode(null);
        setHasDismissedWelcome(true);
    }

    const fetchDashboardData = async () => {
        try {
            const [transactions, accounts, totalBalance, loggedUser] = await Promise.all([
                getRecentTransactionsService(),
                getUserAccountsService(),
                getTotalBalanceService(),
                getLoggedInUserService(),
            ]);

            setTransactions(transactions);
            setAccounts(accounts);
            setTotalBalance(totalBalance);
            setUser(loggedUser.user);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDashboardData();
    }, []);

    useEffect(() => {
        if (!user) return;
        if (hasDismissedWelcome) return;

        if (!user.nickname) {
            setModalMode('welcome');
        }
    }, [user]);

    return (
        <>
            <main className="flex flex-col gap-4">
                <DashboardPageHero
                    onCreateAccount={handleCreateAccount}
                    onCreateCategory={handleCreateCategory}
                    onCreateTransaction={handleCreateTransaction}
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

                    <div className="flex h-[calc(100vh-14rem)] flex-col gap-4 overflow-auto">
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

            <CreateAccountFirstModal 
                isOpen={modalMode === 'account-required'}
                onClose={handleAccountCreated}
                onCreateAccount={() => setModalMode('account')}
            />

            <WelcomeModal 
                isOpen={modalMode === 'welcome'}
                onClose={handleNicknameCreated}
                onLater={handleMaybeLater}
            />
        </>
    )
}

export default DashboardPage;
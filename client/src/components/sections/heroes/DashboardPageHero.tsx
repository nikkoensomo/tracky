import { ArrowDownUp } from 'lucide-react';
import AddAccountButton from "../../buttons/AddAccountButton";
import AddTransactionButton from "../../buttons/AddTransactionButton";
import SetBudgetButton from "../../buttons/SetBudgetButton";

const DashboardPageHero = () => {
    return (
        <>
            <section className="flex flex-col gap-4">
                <div className="flex justify-between bg-linear-to-r from-teal-800 to-emerald-500 rounded-lg px-4 py-6">
                    <div className="flex flex-col">
                        <span className="text-lg text-gray-300 font-medium">Total Balance</span>
                        <span className="text-3xl text-white font-mono">320,032.03</span>
                    </div>

                    <div className="flex justify-center items-center space-x-6 p-4">
                        <AddTransactionButton 
                            onClick={() => {}}
                        />

                        <AddAccountButton 
                            onClick={() => {}}
                        />

                        <SetBudgetButton 
                            onClick={() => {}}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-[2fr_1fr] gap-4">
                    <div className="bg-whtie border border-gray-200 rounded-lg p-6">
                        <div className="flex gap-2 items-center">
                            <ArrowDownUp size={20}/>
                            <span className="text-slate-800 text-sm">Recent Transactions</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardPageHero;
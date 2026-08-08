import { ArrowDownUp } from 'lucide-react';
import AddAccountButton from "../../buttons/AddAccountButton";
import AddTransactionButton from "../../buttons/AddTransactionButton";
import SetBudgetButton from "../../buttons/SetBudgetButton";

type DashboardPageHeroProps = {
    onCreateAccount: () => void;
}

const DashboardPageHero = ({ onCreateAccount }: DashboardPageHeroProps ) => {
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
                            onClick={onCreateAccount}
                        />

                        <SetBudgetButton 
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardPageHero;
import type { Account } from "../../types/account.types";
import { EyeIcon } from "lucide-react";

type DashboardAccountCardsProps = {
    accounts: Account[];
}

const DashboardAccountCards = ({ accounts }: DashboardAccountCardsProps) => {
    return (
        <>
            {accounts.map((account) => (
                <div
                    key={account._id}
                    className="rounded-lg border border-teal-800/20 bg-linear-to-br from-teal-900 via-teal-800 to-emerald-700 p-6 shadow-sm"
                >
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-white">
                                {account.name}
                            </span>

                            <EyeIcon
                                className="cursor-pointer text-teal-100 hover:text-white"
                                size={20}
                            />
                        </div>

                        <span className="text-sm text-teal-100">Type: {account.type}</span>
                        <span className="text-sm text-teal-100">
                            Current Balance: {account.currentBalance}
                        </span>
                        <span className="text-sm text-teal-100">
                            Initial Balance: {account.initialBalance}
                        </span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default DashboardAccountCards;
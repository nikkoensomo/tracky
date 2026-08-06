import type { Transaction } from "../../types/transaction.types";

type RecentTransactionsTableProps = {
    transactions: Transaction[];
}

const RecentTransactionsTable = ({ transactions }: RecentTransactionsTableProps ) => {
    return (
        <>
            <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 text-slate-500">
                    <tr>
                        <th className="py-3 font-medium">Transaction</th>
                        <th className="py-3 font-medium">Type</th>
                        <th className="py-3 font-medium">Amount</th>
                        <th className="py-3 font-medium">Note</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                    
                </tbody>
            </table>
        </>
    )
}

export default RecentTransactionsTable;
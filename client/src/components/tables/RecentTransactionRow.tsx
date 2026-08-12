import type { Transaction } from "../../types/transaction.types";

type TransactionRowProps = {
    transaction: Transaction;
}

const RecentTransactionRow = ({ transaction }: TransactionRowProps ) => {
    return (
        <>
            <tr>
                <td className="py-3 text-slate-500">{transaction.title}</td>
                <td className="py-3 text-slate-500">{transaction.type}</td>
                <td className="py-3 text-slate-500">{transaction.amount}</td>
                <td className="py-3 text-slate-500">{transaction.note}</td>
                <td className="py-3 text-slate-500">{transaction.transactionDate.split('T')[0]}</td>
            </tr>
        </>
    );
}

export default RecentTransactionRow;
import type { Transaction } from "../../types/transaction.types";

type TransactionRowProps = {
    transaction: Transaction;
}

const RecentTransactionRow = ({ transaction }: TransactionRowProps ) => {
    return (
        <>
            <tr>
                <td>{transaction.title}</td>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.note}</td>
            </tr>
        </>
    );
}

export default RecentTransactionRow;
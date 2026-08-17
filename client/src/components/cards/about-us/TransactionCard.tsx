import paymentsIllustration from '../../../assets/illustrations/payments.svg';

const TransactionCard = () => {
    return (
        <>
            <div className="w-full bg-sky-50 border border-sky-100 rounded-xl flex flex-col gap-4 p-6">
                <span className="text-xl font-semibold text-sky-950 ">Organize Every Transaction</span>

                <p className="text-sm leading-relaxed text-sky-800">Separate income and expenses by category so your spending history is easier to review.</p>

                <img 
                    src={paymentsIllustration}
                    alt="payments illustration"
                    className="mx-auto mt-12 h-36 w-full max-w-xs object-contain"
                />
            </div>
        </>
    )
}

export default TransactionCard;
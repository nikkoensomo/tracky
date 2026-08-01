type ButtonProps = {
    onClick: () => void;
}

const AddTransactionButton = ({ onClick }: ButtonProps) => {
    return (
        <>
            <button
                className="bg-emerald-400 text-teal-950 hover:bg-emerald-300 rounded-lg cursor-pointer px-4 py-2"
                onClick={onClick}
            >
                + Transaction
            </button>
        </>
    )
}

export default AddTransactionButton;
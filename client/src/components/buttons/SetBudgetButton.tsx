type ButtonProps = {
    onClick: () => void;
}

const SetBudgetButton = ({ onClick }: ButtonProps ) => {
    return (
        <>
            <button
                className="bg-white/15 text-white border border-white/20 hover:bg-white/25 rounded-lg cursor-pointer"
                onClick={onClick}
            >
                Set Budget
            </button>
        </>
    )
}

export default SetBudgetButton;
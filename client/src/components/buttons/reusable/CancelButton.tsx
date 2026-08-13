type ButtonProps = {
    onClick: () => void;
    label?: string;
}

const CancelButton = ({ onClick, label }: ButtonProps) => {
    return (
        <>
            <button
                type="button"
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
                onClick={onClick}
            >
                {label ? label : "Cancel"}
            </button>
        </>
    )
}

export default CancelButton;
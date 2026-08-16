type ButtonProps = {
    onClick: () => void;
    isDisabled: boolean;
    label: any;
}

const ConfirmButton = ({ onClick, isDisabled, label }: ButtonProps ) => {
    return (
        <>
            <button
                type="button"
                disabled={isDisabled}
                className="text-white bg-teal-700 hover:bg-teal-800 px-4 py-2 cursor-pointer rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={onClick}
            >
                {label ? label : 'Confirm'}
            </button>
        </>
    )
}

export default ConfirmButton;
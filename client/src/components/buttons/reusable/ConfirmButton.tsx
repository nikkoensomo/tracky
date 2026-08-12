type ButtonProps = {
    onClick: () => void;
}

const ConfirmButton = ({ onClick }: ButtonProps ) => {
    return (
        <>
            <button
                type="button"
                className="text-white bg-teal-700 hover:bg-teal-800 px-4 py-2 cursor-pointer rounded-lg"
                onClick={onClick}
            >
                Confirm
            </button>
        </>
    )
}

export default ConfirmButton;
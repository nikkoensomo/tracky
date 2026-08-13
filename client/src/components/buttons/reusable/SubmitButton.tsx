type ButtonProps = {
    onClick: () => void;
    label?: string;
}

const CreateButton = ({ onClick, label }: ButtonProps ) => {
    return (
        <>
            <button
                type="button"
                className="text-white bg-teal-700 hover:bg-teal-800 px-4 py-2 cursor-pointer rounded-lg"
                onClick={onClick}
            >
                {label ? label : "Create"}
            </button>
        </>
    )
}

export default CreateButton;
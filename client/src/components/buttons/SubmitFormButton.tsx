type ButtonProps = {
    onClick: () => void;
    label: any;
}

const SubmitFormButton = ({ onClick, label }: ButtonProps ) => {
    return (
        <>
            <button
                className="text-white bg-teal-700 hover:bg-teal-800 rounded-lg cursor-pointer px-4 p-2 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={onClick}
            >
                { label }
            </button>
        </>
    );
}

export default SubmitFormButton;
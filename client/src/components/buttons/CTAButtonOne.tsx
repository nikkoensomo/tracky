type ButtonProps = {
    onClick: () => void;
}

const CTAButtonOne = ({ onClick }: ButtonProps ) => {
    return (
        <>
            <button
                className="bg-teal-700 text-white rounded-md px-6 py-3 font-semibold hover:bg-teal-800 cursor-pointer"
                onClick={onClick}
            >
                Start tracking for free
            </button>
        </>
    )
}

export default CTAButtonOne;
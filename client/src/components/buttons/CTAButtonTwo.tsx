type ButtonProps = {
    onClick: () => void;
}

const CTAButtonTwo = ({ onClick }: ButtonProps ) => {
    return (
        <>
            <button
                className="rounded-md border border-slate-200 bg-white px-6 py-3 text-slate-700 font-semibold hover:bg-slate-50 cursor-pointer"
                onClick={onClick}
            >
                See how it works
            </button>
        </>
    )
}

export default CTAButtonTwo;
type ButtonProps = {
    onClick: () => void;
}

const SignUpHeaderButton = ({ onClick }: ButtonProps) => {
    return (
        <>
            <button
                className="text-white text-sm bg-teal-700 hover:bg-teal-800 rounded-lg cursor-pointer px-3 p-2 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                onClick={onClick}
            >
                Register
            </button>
        </>
    )
}

export default SignUpHeaderButton;
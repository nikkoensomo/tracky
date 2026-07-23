type ButtonProps = {
    onClick: () => void;
}

const LoginHeaderButton = ({ onClick }: ButtonProps) => {
    return (
        <>
            <button
                className="text-black text-sm bg-white hover:bg-gray-100 border border-gray-100 rounded-lg cursor-pointer px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                onClick={onClick}
            >
                Login
            </button>
        </>
    )
}

export default LoginHeaderButton;
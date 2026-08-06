import { LogOutIcon } from "lucide-react";

type ButtonProps = {
    onClick: () => void;
}

const LogoutButton = ({ onClick }: ButtonProps ) => {
    return (
        <>
            <button
                className="w-full flex text-slate-600 text-sm gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-200"
                onClick={onClick}
            >
               <LogOutIcon size={20}/> Logout
            </button>
        </>
    )
}

export default LogoutButton;
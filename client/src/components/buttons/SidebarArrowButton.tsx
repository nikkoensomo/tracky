import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

type ButtonProps = {
    onClick: () => void;
    isOpen: boolean;
}

const SidebarArrowButton = ({ onClick, isOpen }: ButtonProps ) => {
    return (
        <>
            <button
                className="px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
                onClick={onClick}
            >
                {isOpen ? (
                    <ArrowBigLeftDash size={20}/>
                ) : (
                    <ArrowBigRightDash size={20}/>
                )}
            </button>
        </> 
    );
}

export default SidebarArrowButton;
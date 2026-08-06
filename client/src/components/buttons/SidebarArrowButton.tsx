import { ArrowBigLeftDash } from "lucide-react";

type ButtonProps = {
    onClick: () => void;
}

const SidebarArrowButton = ({ onClick }: ButtonProps ) => {
    return (
        <>
            <button
                className="px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
                onClick={onClick}
            >
                <ArrowBigLeftDash size={20}/>
            </button>
        </> 
    );
}

export default SidebarArrowButton;
import { NavLink } from "react-router-dom";

import LoginHeaderButton from "../buttons/LoginHeaderButton";
import SignUpHeaderButton from "../buttons/SignUpHeaderButton";

type ModalProps = {
    onLogin: () => void;
    onRegister: () => void;
}

const LandingPageHeader = ({ onLogin, onRegister }: ModalProps ) => {
    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-slate-50 backdrop-blur">
                <div className="mx-auto w-full flex items-center justify-between px-12 py-4">
                    <span className="text-xl font-bold text-zinc-950">Tracky</span>

                    <nav className="hidden gap-6 text-sm font-medium text-gray-600 md:flex">
                        <NavLink to="/" className="hover:text-slate-900">
                            Home
                        </NavLink>

                        <NavLink to="/" className="hover:text-slate-900">
                            About Us
                        </NavLink>

                        <NavLink to="/" className="hover:text-slate-900">
                            Contact Us
                        </NavLink>
                    </nav>

                    <div className="flex gap-3">
                        <LoginHeaderButton 
                            onClick={onLogin}
                        />

                        <SignUpHeaderButton 
                            onClick={onRegister}
                        />
                    </div>
                </div>
            </header>
        </>
    );
}

export default LandingPageHeader;
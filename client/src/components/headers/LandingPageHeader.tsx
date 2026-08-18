import LoginHeaderButton from "../buttons/LoginHeaderButton";
import SignUpHeaderButton from "../buttons/SignUpHeaderButton";
import trackyIcon from '../../../src/assets/illustrations/tracky-icon.png'

type ModalProps = {
    onLogin: () => void;
    onRegister: () => void;
}

const LandingPageHeader = ({ onLogin, onRegister }: ModalProps) => {
    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-slate-50 backdrop-blur">
                <div className="mx-auto w-full grid grid-cols-3 items-center px-12 py-4">
                    <img
                        src={trackyIcon}
                        alt="tracky icon"
                        className="h-10 object-contain"
                    />

                    <nav className="hidden justify-center gap-6 text-sm font-medium text-gray-600 md:flex">
                        <a href="#home" className="hover:text-slate-900">Home</a>

                        <a href="#about" className="hover:text-slate-900">About Us</a>

                        <a href="#contact" className="hover:text-slate-900">Contact Us</a>
                    </nav>

                    <div className="flex justify-end gap-3">
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
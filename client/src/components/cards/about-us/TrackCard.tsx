import walletIllustration from '../../../assets/illustrations/wallet.svg';

const TrackCard = () => {
    return (
        <>
            <div className="w-full bg-teal-50 border border-teal-100 rounded-xl flex flex-col gap-4 p-6">
                <span className="text-xl font-semibold text-teal-950 ">Track Every Account</span>

                <p className="text-sm leading-relaxed text-teal-800">Keep cash, bank accounts, and e-wallets in one place so your total balance stays clear.</p>

                <img
                    src={walletIllustration}
                    alt="Wallet illustration"
                    className="mx-auto mt-8 h-40 w-full max-w-xs object-contain"
                />
            </div>
        </>
    );
}

export default TrackCard;
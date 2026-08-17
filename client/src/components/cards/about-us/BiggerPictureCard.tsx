import analyticsIllustration from '../../../assets/illustrations/analytics.svg';

const BiggerPictureCard = () => {
    return (
        <>
            <div className="w-full bg-amber-50 border border-amber-100 rounded-xl flex items-center gap-4 p-6">
                <div className="flex flex-col gap-4 max-w-80">
                    <span className="text-xl font-semibold text-amber-950 ">See The Bigger Picture</span>

                    <p className="text-sm leading-relaxed text-amber-800">View recent transactions, account summaries, and balance changes from a clean dashboard.</p>
                </div>

                <img
                    src={analyticsIllustration}
                    alt="Wallet illustration"
                    className="mx-auto mt-8 h-40 w-full max-w-xs object-contain"
                />
            </div>
        </>
    );
}

export default BiggerPictureCard;
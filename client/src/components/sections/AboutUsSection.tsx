import TrackCard from "../cards/about-us/TrackCard";
import TransactionCard from "../cards/about-us/TransactionCard";
import BiggerPictureCard from "../cards/about-us/BiggerPictureCard";

const AboutUsSection = () => {
    return (
        <>
            <section id="about" className="scroll-mt-24 px-6 py-24">
                <div className="flex flex-col items-center text-center gap-4">
                    <h2 className="text-4xl text-slate-950 font-bold max-w-2xl">Understand your money without overthinking it.</h2>

                    <p className="text-sm font-medium text-slate-500 max-w-xl mt-4">
                        Tracky gives you a simple way to organize accounts, record income and expenses, and see where your balance is moving.
                    </p>

                    <div className="grid grid-cols-2 gap-6 max-w-5xl m-6">
                        <TrackCard />

                        <TransactionCard />
                    </div>

                    <div className="flex">
                        <BiggerPictureCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsSection;
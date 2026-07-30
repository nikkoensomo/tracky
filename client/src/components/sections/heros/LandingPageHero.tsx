import CTAButtonOne from "../../buttons/CTAButtonOne";
import CTAButtonTwo from "../../buttons/CTAButtonTwo";

const LandingPageHero = () => {
    const handleStart = () => {
        console.log('Not patched');
    }

    const handleSee = () => {
        console.log('Not patched');
    }

    return (
        <>
            <section className="flex flex-col gap-6 px-4 py-20 items-center text-center">
                
                    <h1 className="text-5xl text-slate-950 font-bold max-w-2xl"> 
                        Know where every peso goes - automatically
                    </h1>

                    <p className="text-sm text-slate-500 font-medium max-w-xl">
                        Track expenses, set budgets, and hit your savings goals — all in one simple dashboard.
                        No spreadsheets required.
                    </p>
                
                    <div className="flex justify-between gap-4">
                        <CTAButtonOne 
                            onClick={handleStart}
                        />
                        <CTAButtonTwo 
                            onClick={handleSee}
                        />
                    </div>

            </section>
        </>
    )
}

export default LandingPageHero;
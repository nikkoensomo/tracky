import { Check } from 'lucide-react';
import CTAButtonOne from "../../buttons/CTAButtonOne";
import CTAButtonTwo from "../../buttons/CTAButtonTwo";
import MockupCard from '../../cards/landing/MockupCard';

type LandingPageHeroProps = {
    onGetStarted: () => void;
}

const LandingPageHero = ({ onGetStarted }: LandingPageHeroProps ) => {
    
    const handleSee = () => {
        console.log('Not patched');
    }

    return (
        <>
            <section id="home" className="flex flex-col gap-6 px-4 py-20 items-center text-center">
                    <h1 className="text-5xl text-slate-950 font-bold max-w-3xl"> 
                        Track every peso with less effort
                    </h1>

                    <p className="text-sm text-slate-500 font-medium max-w-xl mb-4">
                        Track expenses, set budgets, and hit your savings goals — all in one simple dashboard.
                        No spreadsheets required.
                    </p>
                
                    <div className="flex justify-between gap-4">
                        <CTAButtonOne 
                            onClick={onGetStarted}
                        />
                        <CTAButtonTwo 
                            onClick={handleSee}
                        />
                    </div>

                    <div className="flex justify-between gap-3">
                        <div className="flex gap-2">
                            <Check size={20}/>
                            <span className="text-slate-500 text-sm">Free to get started</span>
                        </div>

                        <div className="flex gap-2">
                            <Check size={20}/>
                            <span className="text-slate-500 text-sm">No credit card required</span>
                        </div>

                        <div className="flex gap-2">
                            <Check size={20}/>
                            <span className="text-slate-500 text-sm">Your data stays private</span>
                        </div>
                    </div>

                    <MockupCard />
            </section>
        </>
    )
}

export default LandingPageHero;
import DashboardPageHeader from "../components/headers/DashboardPageHeader";
import DashboardPageHero from "../components/sections/heroes/DashboardPageHero";

const DashboardPage = () => {
    return (
        <>
            <main className="flex flex-col gap-4">
                <DashboardPageHero />
            </main>
        </>
    )
}

export default DashboardPage;
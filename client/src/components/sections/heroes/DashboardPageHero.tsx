import SearchBar from "../../search/Searchbar";

const DashboardPageHero = () => {
    return (
        <>
            <section className="flex flex-col gap-4">
                <div className="flex justify-between bg-teal-700 rounded-lg px-4 py-6">
                    <div className="flex flex-col">
                        <span className="text-lg text-gray-300 font-medium">Total Balance</span>
                        <span className="text-3xl text-white">320,032.03</span>
                    </div>


                </div>
            </section>
        </>
    )
}

export default DashboardPageHero;
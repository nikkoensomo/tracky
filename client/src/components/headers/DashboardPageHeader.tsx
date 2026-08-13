import SearchBar from "../search/Searchbar";

const DashboardPageHeader = () => {
    return (
        <>
            <header className="w-full flex items-center justify-between bg-white px-6 py-4 mt-2">
                <SearchBar
                    value=""
                    onChange={() => { }}
                    placeholder="Search"
                />

                <span className="text-slate-700 font-semibold">Hola Cretsyy!</span>
            </header>
        </>
    )
}

export default DashboardPageHeader;
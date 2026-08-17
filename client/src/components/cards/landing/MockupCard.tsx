const MockupCard = () => {
    return (
        <>
            <div className="mx-auto mt-14 w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-300" />
                        <span className="h-3 w-3 rounded-full bg-amber-300" />
                        <span className="h-3 w-3 rounded-full bg-emerald-300" />
                    </div>

                    <span className="text-xs font-medium text-slate-400">
                        Tracky Dashboard
                    </span>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.3fr_1fr]">
                    {/* total balance card */}
                    <div className="rounded-xl border border-teal-700 bg-teal-800 p-6 text-white shadow-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-teal-100">
                                Total Balance
                            </span>

                            <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-teal-50">
                                Live
                            </span>
                        </div>

                        <span className="mt-4 block font-mono text-4xl font-semibold tracking-tight">
                            ₱12,480.50
                        </span>

                        <span className="mt-3 block text-sm font-medium text-emerald-200">
                            +₱1,240 this month
                        </span>
                    </div>

                    {/* this month card */}
                    <div className="rounded-xl bg-white border border-slate-200 p-6">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500 tracking-wide">This Month</span>

                            <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-teal-50">
                                Live
                            </span>
                        </div>

                        <div className="flex flex-col mt-4 items-center justify-center">
                            <span className="text-slate-600">
                                Income
                            </span>

                            <span className="text-2xl text-emerald-600 font-mono">
                                ₱8,000.00
                            </span>
                        </div>

                        <div className="flex flex-col mt-4 items-center justify-center">
                            <span className="text-slate-600">
                                Expenses
                            </span>

                            <span className="text-2xl text-rose-600 font-mono">
                                ₱3,240.00
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl flex flex-col p-6 mt-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-900 font-semibold">Recent Activity</span>

                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-teal-50">
                            Live
                        </span>
                    </div>

                    <table className="w-full text-sm mt-4">
                        <tbody className="divide-y divide-slate-100">
                            <tr className="hover:bg-gray-100">
                                <td className="py-3 font-medium text-slate-800">
                                    Lunch
                                </td>
                                <td className="py-3 text-slate-500">
                                    Food
                                </td>
                                <td className="py-3 text-right font-mono font-medium text-rose-600">
                                    -₱120.00
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-100">
                                <td className="py-3 font-medium text-slate-800">
                                    Jeepney Fare
                                </td>
                                <td className="py-3 text-slate-500">
                                    Commute
                                </td>
                                <td className="py-3 text-right font-mono font-medium text-rose-600">
                                    -₱25.00
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-100">
                                <td className="py-3 font-medium text-slate-800">
                                    Allowance
                                </td>
                                <td className="py-3 text-slate-500">
                                    Income
                                </td>
                                <td className="py-3 text-right font-mono font-medium text-emerald-600">
                                    +₱1,000.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default MockupCard;
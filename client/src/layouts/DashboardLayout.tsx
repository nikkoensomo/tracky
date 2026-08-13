import { useState } from 'react';
import { Outlet } from "react-router-dom";

import DashboardPageHeader from "../components/headers/DashboardPageHeader";
import Sidebar from "../components/sidebar/Sidebar";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    }

    return (
        <>
            <div className="flex h-screen">
                <Sidebar 
                    isOpen={isSidebarOpen}
                    onClose={handleToggleSidebar}
                />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <DashboardPageHeader />
                    <main className="flex-1 overflow-y-auto bg-white px-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout;
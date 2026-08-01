import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
    Gauge
} from 'lucide-react';

type SidebarProps = {
    onClose: () => void;
}

type NavItemData = {
    label: string;
    icon: LucideIcon;
    to: string;
    end?: boolean;
}

// const navItems: NavItemData = [
//     { label: 'Dashboard', icon: Gauge, to: '/', end: true },
//     { label: 'Accounts', icon: Gauge, to: '/' },
//     { label: 'Transactions', icon: Gauge, to: '/' },
//     { label: 'Settings', icon: Gauge, to: '/' },
// ];

const Sidebar = () => {
    const navigate = useNavigate();


    return (
        <>
            <aside className="h-screen w-64 shrink-0 border-r border-gray-200 bg-gray-50 px-4 py-5">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-700 text-lg font-bold text-white">
                        TR
                    </div>

                    <span className="text-2xl font-medium text-teal-950">
                        Tracky
                    </span>

                    <div className="ml-auto">
                        <span>arrow here</span>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
    Gauge,
    ArrowBigLeftDash,
    ArrowRightLeft,
    ChartBarDecreasing,
    ShelvingUnit,
    Settings,
    CircleQuestionMark,
} from 'lucide-react';
import SidebarArrowButton from '../buttons/SidebarArrowButton';
import LogoutButton from '../buttons/LogoutButton';
import SidebarNavItem from './SidebarNavItem';

type SidebarProps = {
    onClose: () => void;
}

type NavItemData = {
    label: string;
    icon: LucideIcon;
    to: string;
    end?: boolean;
}

const navItems: NavItemData[] = [
    { label: 'Dashboard', icon: Gauge, to: '/dashboard-page', end: true },
    { label: 'Accounts', icon: ArrowRightLeft, to: '/' },
    { label: 'Transactions', icon: ChartBarDecreasing, to: '/' },
    { label: 'Categories', icon: ShelvingUnit, to: '/' },
];

const navItemsSecondary: NavItemData[] = [
    { label: 'Settings', icon: Settings, to: '/', end: true },
    { label: 'Help', icon: CircleQuestionMark, to: '/' },
]

const Sidebar = () => {
    const navigate = useNavigate();


    return (
        <>
            <aside className="flex flex-col h-screen w-64 shrink-0 border-r border-gray-200 bg-gray-50 px-4 py-5">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-700 text-lg font-bold text-white">
                        TR
                    </div>

                    <span className="text-2xl font-medium text-teal-950">
                        Tracky
                    </span>

                    <div className="ml-auto">
                        <SidebarArrowButton 
                            onClick={() => {}}
                        />
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4"></div>

                <div className="flex flex-1 flex-col mt-4 justify-center">
                    <span className="text-gray-400 text-sm font-medium px-3">General</span>

                    <nav className="flex flex-1 flex-col justify-between mt-2">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <SidebarNavItem 
                                    key={item.label}
                                    label={item.label}
                                    icon={item.icon}
                                    to={item.to}
                                    end={item.end}
                                />
                            ))}

                            <span className="text-gray-400 text-sm font-medium px-3 mt-4">Support</span>

                            {navItemsSecondary.map((item) => (
                                <SidebarNavItem 
                                    key={item.label}
                                    label={item.label}
                                    icon={item.icon}
                                    to={item.to}
                                    end={item.end}
                                />
                            ))}
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                            <LogoutButton
                                onClick={() => {}}
                            />
                        </div>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Sidebar;
import { NavLink } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

type SidebarNavItemProps = {
    label: string;
    icon: LucideIcon;
    to: string;
    end?: boolean;
    isOpen: boolean;
}

const SidebarNavItem = ({ label, icon: Icon, to, end = false, isOpen }: SidebarNavItemProps) => {
    return (
        <>
            <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                    `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${isActive
                        ? 'bg-white text-teal-800 shadow-sm hover:bg-gray-100 border transition-200 border-gray-100'
                        : 'text-slate-600 hover:bg-gray-200 transition-200 hover:text-zinc-950'
                    }`
                }
            >
                {Icon && <Icon className={`h-5 w-5 shrink-0`} />}
                {isOpen && <span>{ label }</span>}
            </NavLink>
        </>
    )
}

export default SidebarNavItem;
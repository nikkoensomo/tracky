import { Search, X } from 'lucide-react';

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};

const SearchBar = ({
    value,
    onChange,
    placeholder = 'Search...',
}: SearchBarProps) => {
    const handleClear = () => {
        onChange('');
    };

    return (
        <div className="relative w-full max-w-md">
            <Search
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-100"
            />

            {value && (
                <button
                    type="button"
                    onClick={handleClear}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Clear search"
                >
                    <X size={16} />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
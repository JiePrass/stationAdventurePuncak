'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchInputProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
    onChange?: (query: string) => void;
    className?: string;
}

export default function SearchInput({
    placeholder = 'Cari...',
    onSearch,
    onChange,
    className = '',
}: SearchInputProps) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch?.(query.trim());
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setQuery(val);
        onChange?.(val);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={`relative w-full ${className}`}>
            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
            <input
                type="text"
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="w-full rounded-full border bg-white border-gray-300 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

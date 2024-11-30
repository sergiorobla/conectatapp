import React from "react";

interface SearchBarProps {
    filterText: string;
    onFilterTextChange: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ filterText, onFilterTextChange }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Buscar eventos..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
            />
        </div>
    );
};

export default SearchBar;

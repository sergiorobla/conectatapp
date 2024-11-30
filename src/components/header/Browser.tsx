import React, { useState, ChangeEvent, FormEvent } from "react";
import { useTheme } from "../../logic/ThemeContext";

const Browser: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { theme } = useTheme();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  };

  const clearSearch = (): void => {
    setSearchText("");
  };

  return (
    <form className={`browser ${theme}`} onSubmit={(e: FormEvent) => e.preventDefault()}>
      <input
        placeholder="Buscar"
        value={searchText}
        onChange={handleInputChange}
      />
      <span className="bt-browser">
        <img src="./magnifying-glass.svg" alt="Buscar" />
      </span>
      {searchText && (
        <span className="mark-x" onClick={clearSearch}>
          <img src="./x-mark.svg" alt="Limpiar búsqueda" />
        </span>
      )}
    </form>
  );
};

export default Browser;

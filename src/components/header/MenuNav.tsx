import React from "react";
import { useTheme } from "../../logic/ThemeContext";
import { handleScrollToTop } from "../../logic/ScrollToTop";
import { Link } from "react-router-dom";

const MenuNav: React.FC = () => {
  const { theme } = useTheme();

  return (
    <nav className={`menu ${theme === "light" ? "menu-light" : "menu-dark"}`}>
      <ul>
        <Link to="/" onClick={handleScrollToTop}>
          <li>Inicio</li>
        </Link>
        <Link to="/carteleras">
          <li>Carteleras</li>
        </Link>
        <Link to="/mapa" onClick={handleScrollToTop}>
          <li className="MenuLat-6">Mapa</li>
        </Link>
      </ul>
    </nav>
  );
};

export default MenuNav;

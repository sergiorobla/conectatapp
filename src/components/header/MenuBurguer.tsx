import React, { useState } from "react";
import BotonTheme from "./BotonTheme";
import { useTheme } from "../../logic/ThemeContext";

const MenuBurguer: React.FC = () => {
  // Estado para manejar la activación de las barras y el menú
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuActive((prevState) => !prevState);
  };

  const { theme } = useTheme();

  return (
    <div>
      {/* Botón del menú hamburguesa */}
      <div
        className={`bars_menu ${isMenuActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span
          className={`line1_bars-menu ${
            isMenuActive ? "activeline1_bars-menu" : ""
          }`}
        ></span>
        <span
          className={`line2_bars-menu ${
            isMenuActive ? "activeline2_bars-menu" : ""
          }`}
        ></span>
        <span
          className={`line3_bars-menu ${
            isMenuActive ? "activeline3_bars-menu" : ""
          }`}
        ></span>
      </div>

      {/* Menú desplegable */}
      <div
        className={`menu-sec ${isMenuActive ? "menu-active" : ""} ${
          theme === "light" ? "menu-sec-light" : "menu-sec-dark"
        }`}
      >
        <ul>
          <li className="mode mode-sec">
            <BotonTheme />
          </li>
          <li>
            <a href="#about">Características</a>
          </li>
          <li>
            <a href="#home">Nosotros</a>
          </li>
          <li>
            <a href="#services">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBurguer;

import React from "react"; // Import React
import { fechaFormateada } from "../../logic/Fecha";
import { useTheme } from "../../logic/ThemeContext";

function NotIndPri(): JSX.Element { // Specify return type as JSX.Element
  const { theme } = useTheme();

  return (
    <div className="not-1">
      <p>{fechaFormateada}</p>
      <p className={`not-tit ${theme === "light" ? "not-tit-light" : "not-tit-dark"}`}>
      Tarragona Impulsa celebra un Hackaton en la Tabacalera
      </p>
      <p className="not-in-text">
      El sábado 30 de noviembre el emblemático edificio de Tarragona acogerá esta competición de programación, apadrinada por diferentes instituciones de la zona.
      </p>
      <img src="./img1.jpeg" alt="Imagen destacada" /> {/* Added alt text for accessibility */}
    </div>
  );
}

export default NotIndPri;
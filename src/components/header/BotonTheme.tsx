import React from "react";
import { useTheme } from "../../logic/ThemeContext";

const BotonTheme: React.FC = () => {
  const { theme, handleThemeToggle } = useTheme();

  return (
    <div className="buttons-cab">
      <div onClick={handleThemeToggle}>
        <img
          src={theme === "light" ? "./moon.svg" : "./sun.svg"}
          alt={theme === "light" ? "Modo nocturno" : "Modo diurno"}
        />
      </div>
      <div>
        <img src="./user.svg" alt="Usuario" />
      </div>
    </div>
  );
};

export default BotonTheme;

import React from "react";
import { fechaFormateada } from "../../logic/Fecha";
import { useTheme } from "../../logic/ThemeContext";

const NotIndSec: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="not-secundarias">
      <p>{fechaFormateada}</p>
      <p
        className={`not-tit ${
          theme === "light" ? "not-tit-light" : "not-tit-dark"
        }`}
      >
     Conferencia sobre el futuro de la tecnología en Reus
      </p>
      <p className="not-in-text-sec">
      El domingo 1 de diciembre se llevará a cabo una conferencia sobre el impacto de la inteligencia artificial en las empresas, con la participación de expertos del sector.
      </p>
    </div>
  );
};

export default NotIndSec;
import React from "react";
import NotIndSec from "./NotIndSec";
import NotIndPri from "./NotIndaPri";
import { useTheme } from "../../logic/ThemeContext";

const PrimeraParteIndex: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="in">
        <div
          className={`not-in ${
            theme === "light" ? "not-in-light" : "not-in-dark"
          }`}
        >
          <h1
            className={` ${theme === "light" ? "h1-in-light" : "h1-in-dark"}`}
          >
            Noticias
          </h1>
          <div className="grp-not">
            <NotIndPri />
            <div className="not-sec">
              <NotIndSec />
              <NotIndSec />
              <NotIndSec />
              <button
                className={`but-in ${
                  theme === "light" ? "but-in-light" : "but-in-dark"
                }`}
              >
                Ver más Noticias
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimeraParteIndex;

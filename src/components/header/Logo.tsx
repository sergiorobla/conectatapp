import React from "react";
import MenuBurguer from "./MenuBurguer";
import { Link } from "react-router-dom";
import { handleScrollToTop } from "../../logic/ScrollToTop";

const Logo: React.FC = () => {
  return (
    <div className="logo-menu">
      <Link to="/">
        <div className="logo" onClick={handleScrollToTop}>
          <img src="/escudo.png" alt="Logo de la página" />
        </div>
      </Link>
      <MenuBurguer />
    </div>
  );
};

export default Logo;

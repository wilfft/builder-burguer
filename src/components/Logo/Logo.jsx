import React from "react";
import burguerLogo from "../../assets/images/burger-logo.png";

import "./logo.css";

const Logo = (props) => (
  <div className="logo">
    <img
      src={burguerLogo}
      //height={props.altura}
      style={props.style}
      alt="logoBurguer"
    />
  </div>
);
const LogoMobile = (props) => (
  <div className="logoMobile">
    <img src={burguerLogo} style={props.style} alt="logoBurguer" />
  </div>
);
export { Logo, LogoMobile };

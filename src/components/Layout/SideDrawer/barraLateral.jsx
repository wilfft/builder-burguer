import React from "react";
import { LogoMobile } from "../../Logo/Logo";
import BackDrop from "../../ui/backdrop/Backdrop";
import ItensNavegacao from "../Navegacao/Toolbar/itensNavegacao/itensNavegacao";
import Aux from "../../hoc/Auxiliary";
import "./barraLateral.css";

const barraLateral = (props) => {
  let condicaoBarra = ["barraLateral", "close"];

  if (props.show) {
    condicaoBarra = ["barraLateral", "open"];
  }

  return (
    <Aux>
      <BackDrop show={props.show} fechaBackdrop={props.fechaBackdrop} />
      <div className={condicaoBarra.join(" ")}>
        <LogoMobile style={{ height: "30px", marginBottom: "32px" }} />
        <nav>
          <ItensNavegacao />
        </nav>
      </div>
    </Aux>
  );
};
export default barraLateral;

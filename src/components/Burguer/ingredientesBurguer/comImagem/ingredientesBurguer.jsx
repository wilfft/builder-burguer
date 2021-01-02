import React from "react";
import PropTypes from "prop-types";
import "./ingredientesBurguer.css";
import paoCima from "../../../assets/paoCima.png";
import paoBaixo from "../../../assets/paoBaixo.png";
import carne from "../../../assets/burguer.png";
import queijo from "../../../assets/queijo.png";
import bacon from "../../../assets/burguer.png";
import salada from "../../../assets/salada.png";

import tomate from "../../../assets/tomate.png";
class ingredientesBurguer extends React.Component {
  render() {
    let ingrediente = null;

    switch (this.props.tipo) {
      case "paoDeBaixo":
        ingrediente = (
          // <div className={this.props.tipo}></div>
          <img src={paoBaixo} width={300} alt="paoBaixo" />
        );
        break;
      case "paoDeCima":
        ingrediente = (
          //<div className={this.props.tipo}>
          <img src={paoCima} width={300} alt="paoDeCima" />
          // <div className="semente1"></div>
          //      <div className="semente2"></div>
          //   </div>
        );
        break;
      case "carne":
        ingrediente = <img src={carne} width={300} alt="burguer" />;
        break;
      case "salada":
        ingrediente = <img src={tomate} width={300} alt="burguer" />;
        break;
      case "queijo":
        ingrediente = (
          <img className="queijo2" src={queijo} width={300} alt="burguer" />
        );
        break;
      case "bacon":
        ingrediente = <img src={bacon} width={250} alt="burguer" />;
        break;
      default:
        ingrediente = null;
    }

    return ingrediente;
  }
}

ingredientesBurguer.propTypes = {
  tipo: PropTypes.string.isRequired,
};

export default ingredientesBurguer;

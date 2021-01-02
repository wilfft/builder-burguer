import React from "react";
import PropTypes from "prop-types";
import "./ingredientesBurguer.css";
class ingredientesBurguer extends React.Component {
  render() {
    let ingrediente = null;

    switch (this.props.tipo) {
      case "paoDeBaixo":
        ingrediente = <div className={this.props.tipo}></div>;
        break;
      case "paoDeCima":
        ingrediente = (
          <div className={this.props.tipo}>
            <div className="semente1"></div>
            <div className="semente2"></div>
          </div>
        );
        break;
      case "carne":
        ingrediente = <div className={this.props.tipo}></div>;
        break;
      case "salada":
        ingrediente = <div className={this.props.tipo}></div>;
        break;
      case "queijo":
        ingrediente = <div className={this.props.tipo}></div>;
        break;
      case "bacon":
        ingrediente = <div className={this.props.tipo}></div>;
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

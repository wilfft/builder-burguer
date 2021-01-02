import React from "react";
import "./BurgerIngredient.css";

const ingredientes = (props) => {
  let ingrediente = null;

  switch (props.tipo) {
    case "paoDeBaixo":
      ingrediente = <div className={props.tipo}></div>;
      break;
    case "paoDeCima":
      ingrediente = (
        <div className={props.tipo}>
          <div className="semente1"></div>
          <div className="semente2"></div>
        </div>
      );
      break;
    case "carne":
      ingrediente = <div className={props.tipo}></div>;
      break;
    case "salada":
      ingrediente = <div className={props.tipo}></div>;
      break;
    case "queijo":
      ingrediente = <div className={props.tipo}></div>;
      break;
    case "bacon":
      ingrediente = <div className={props.tipo}></div>;
      break;
    default:
      ingrediente = null;
  }
  return ingrediente;
};
export default ingredientes;

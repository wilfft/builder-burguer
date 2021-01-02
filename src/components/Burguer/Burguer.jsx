import React from "react";
import IngredientesBurguer from "./ingredientesBurguer/ingredientesBurguer.jsx";
import "./burguer.css";
const burguer = (props) => {
  let listaIngredientes = Object.keys(props.ingredientes)
    .map((value) => {
      return [...Array(props.ingredientes[value])].map((a, qtdade) => {
        return <IngredientesBurguer key={value + qtdade} tipo={value} />;
      });
    })
    .reduce((prev, current) => {
      return prev.concat(current);
    }, []);

  if (listaIngredientes.length === 0)
    listaIngredientes = <p> INSIRA OS INGREDIENTES</p>;
  return (
    <div className="burguer">
      <IngredientesBurguer tipo="paoDeCima" />
      {listaIngredientes}
      <IngredientesBurguer tipo="paoDeBaixo" />
    </div>
  );
};

export default burguer;

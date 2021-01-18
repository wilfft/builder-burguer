import React from "react";
import "./Order.css";
const order = (props) => {
  const ingredientes = [];

  for (let nomeIngrediente in props.ingredientes) {
    ingredientes.push({
      nome: nomeIngrediente,
      quantidade: props.ingredientes[nomeIngrediente],
    });
  }
  const componenteIngredientes = ingredientes.map((e) => {
    return (
      <span
        key={e.nome}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {e.nome} ({e.quantidade})
      </span>
    );
  });

  return (
    <div className="order">
      <p>Ingredientes: {componenteIngredientes}</p>
      <p>
        Valor: <strong>R$ {Number.parseFloat(props.valorTotal)}</strong>
      </p>
    </div>
  );
};
export default order;

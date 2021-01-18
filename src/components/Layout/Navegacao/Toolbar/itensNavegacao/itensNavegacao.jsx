import React from "react";
import ItemNavegacao from "./ItemNavegacao/itemNavegacao";
import "./itensNavegacao.css";
const itensNavegacao = (props) => (
  <ul className="itens">
    <ItemNavegacao link="/" exact="exact">
      Menu
    </ItemNavegacao>
    <ItemNavegacao link="/orders">Pedidos</ItemNavegacao>
  </ul>
);

export default itensNavegacao;
/*  <ItemNavegacao ativo link="/">
      Menu
    </ItemNavegacao>*/

import React from "react";
import ItemNavegacao from "./ItemNavegacao/itemNavegacao";
import "./itensNavegacao.css";
const itensNavegacao = (props) => (
  <ul className="itens">
    <ItemNavegacao ativo link="/">
      MENU
    </ItemNavegacao>
    <ItemNavegacao link="/">ORDEM</ItemNavegacao>
  </ul>
);

export default itensNavegacao;

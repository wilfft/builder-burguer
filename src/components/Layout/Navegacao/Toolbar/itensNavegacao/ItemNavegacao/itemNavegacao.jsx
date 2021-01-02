import React from "react";
import "./itemNavegacao.css";

const itemNavegacao = (props) => (
  <li className="item ativo">
    <a className={props.ativo ? "ativo" : null} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default itemNavegacao;

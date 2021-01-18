import React from "react";
import { NavLink } from "react-router-dom";
import "./itemNavegacao.css";

const itemNavegacao = (props) => (
  <li className="item">
    <NavLink to={props.link}> {props.children}</NavLink>
  </li>
);

export default itemNavegacao;
/*
<a className={props.ativo ? "ativo" : null} href={props.link}>
      {props.children}
    </a> */

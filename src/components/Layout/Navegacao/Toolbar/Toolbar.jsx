import React from "react";
import { Logo } from "../../../../components/Logo/Logo";
import ItensNavegacao from "../../Navegacao/Toolbar/itensNavegacao/itensNavegacao";
import MenuHamburguer from "../../SideDrawer/MenuHamburguer/MenuHamburguer";
import "./toolbar.css";

const toolbar = (props) => (
  <header className="toolbar">
    <MenuHamburguer abreMenu={props.abreMenu} />
    <Logo style={{ height: "30px" }} />
    <nav className="desktopOnly">
      <ItensNavegacao />
    </nav>
  </header>
);

export default toolbar;

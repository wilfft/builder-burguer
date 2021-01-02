import React from "react";
import Auxiliary from "../hoc/Auxiliary";
import Toolbar from "./Navegacao/Toolbar/Toolbar";
import BarraLateral from "./SideDrawer/barraLateral";
import "./layout.css";

class Layout extends React.Component {
  state = {
    backdropShow: false,
  };
  fechaBackdrop = () => {
    this.setState({ backdropShow: false });
  };
  abreMenu = () => {
    this.setState((estadoAntigo) => {
      return {
        backdropShow: !estadoAntigo.backdropShow,
      };
    });
  };
  //QUANDO ALGO DEPENDE DO ESTADO ANTIGO< DEVO FAZER DESSA FORMA

  render() {
    return (
      <Auxiliary>
        <BarraLateral
          show={this.state.backdropShow}
          fechaBackdrop={this.fechaBackdrop}
        />
        <Toolbar abreMenu={this.abreMenu} />
        <div> tooll bar, menu, etc</div>
        <main className="content">{this.props.children}</main>
      </Auxiliary>
    );
  }
}
export default Layout;
//

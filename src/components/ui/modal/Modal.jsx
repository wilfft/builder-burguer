import React from "react";
import Backdrop from "../backdrop/Backdrop";
import Aux from "../../hoc/Auxiliary";
import "./modal.css";
class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[MODAL] shouldComponentUpdate");
    //  console.log("this:", this.props.children);

    // console.log("next children:", nextProps.children);
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  UNSAFE_componentWillUpdate() {
    console.log("[MODAL] componentWillUpdate ");
    return;
  }
  //SO vou retornar a atualizaçao do componente, se houver props show diferente do atual
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.cancelaCompra} />
        <div
          className="modal"
          style={{
            transform: this.props.show ? "translate(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;

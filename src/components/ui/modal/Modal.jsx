import React from "react";
import Backdrop from "../backdrop/Backdrop";
import Aux from "../../hoc/Auxiliary";
import "./modal.css";
const Modal = (props) => (
  <Aux>
    <Backdrop show={props.show} fechaBackdrop={props.cancelaCompra} />
    <div
      className="modal"
      style={{
        transform: props.show ? "translate(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default Modal;

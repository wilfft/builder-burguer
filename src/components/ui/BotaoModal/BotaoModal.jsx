import "./BotaoModal.css";

const botaoModal = (props) => (
  <div className="botaoContainer">
    <button
      onClick={props.clique}
      className={["botaoModal", props.botaoTipo].join(" ")}
    >
      {props.children}
    </button>
  </div>
);

export default botaoModal;
//className={`botaoModal ${props.botaoTipo}`}

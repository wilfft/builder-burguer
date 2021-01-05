import "./controladorBotao.css";
const controladorBotao = (props) => {
  return (
    <div className="botao-container">
      <p className="label">{props.label}</p>

      <button onClick={props.mais} className="mais">
        Mais
      </button>
      <button disabled={props.estado} onClick={props.menos} className="menos">
        Menos
      </button>
    </div>
  );
};
export default controladorBotao;

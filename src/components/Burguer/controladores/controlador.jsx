import ControladorBotao from "./controladorBotao/controladorBotao";
import "./controlador.css";
const ingredientes = [
  { label: "Hamburguer", tipo: "carne" },
  { label: "Salada", tipo: "salada" },
  { label: "Queijo", tipo: "queijo" },
  { label: "Bacon", tipo: "bacon" },
];
const controlador = (props) => (
  <div className="controlador-container">
    <p className="valor">
      Valor total: {"  "}
      <strong>R$ {props.valorTotal}</strong>
    </p>
    {ingredientes.map((e) => (
      <ControladorBotao
        key={e.label}
        label={e.label}
        mais={() => props.mais(e.tipo)}
        menos={() => props.menos(e.tipo)}
        estado={props.ingredientes[e.tipo] === 0 ? true : null}
        disabled={props.disabled[e.tipo]}
      />
    ))}
    <button
      onClick={props.botaoComprar}
      disabled={props.finalizavel}
      className="finalizar"
    >
      FINALIZAR
    </button>
  </div>
);

export default controlador;

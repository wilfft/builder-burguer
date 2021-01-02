import Auxiliary from "../../hoc/Auxiliary";
import BotaoModal from "../../ui/BotaoModal/BotaoModal";
const ordemPedido = (props) => {
  const itemPedido = Object.keys(props.ingredientes);
  // const items = itempedido.map((e) => console.log(e));

  const item = [
    ...Array(
      itemPedido.map((e) => (
        <li key={e}>
          <p>
            {props.ingredientes[e]}x{" "}
            <span style={{ textTransform: "Capitalize" }}> {e}</span>
          </p>
        </li>
      ))
    ),
  ];
  return (
    <Auxiliary>
      <h3> Sua Ordem de Pedido</h3>
      <p> Um delícioso e suculento burgão contendo: </p>
      <ul>{item}</ul>
      <p>
        <strong>
          Valor do Pedido: {"  "}
          {props.valorTotal}
        </strong>
      </p>
      <p> Deseja finalizar? </p>
      <BotaoModal botaoTipo="sucesso" clique={props.ordemExecutada}>
        CONTINUAR
      </BotaoModal>
      <BotaoModal botaoTipo="falha" clique={props.ordemCancelada}>
        VOLTAR
      </BotaoModal>
    </Auxiliary>
  );
};

export default ordemPedido;
//  <li>{e.replace(e.charAt(0), e.charAt(0).toUpperCase())}</li>

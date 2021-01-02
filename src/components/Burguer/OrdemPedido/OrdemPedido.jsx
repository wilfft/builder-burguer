import Auxiliary from "../../hoc/Auxiliary";
import BotaoModal from "../../ui/BotaoModal/BotaoModal";
import React from "react";
class OrdemPedido extends React.Component {
  componentWillUpdate() {
    console.log("[ordemPedido]");
  }
  render() {
    const itemPedido = Object.keys(this.props.ingredientes);
    // const items = itempedido.map((e) => console.log(e));

    const item = [
      ...Array(
        itemPedido.map((e) => (
          <li key={e}>
            <p>
              {this.props.ingredientes[e]}x{" "}
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
            {this.props.valorTotal}
          </strong>
        </p>
        <p> Deseja finalizar? </p>
        <BotaoModal botaoTipo="sucesso" clique={this.props.ordemExecutada}>
          CONTINUAR
        </BotaoModal>
        <BotaoModal botaoTipo="falha" clique={this.props.ordemCancelada}>
          VOLTAR
        </BotaoModal>
      </Auxiliary>
    );
  }
}

export default OrdemPedido;
//  <li>{e.replace(e.charAt(0), e.charAt(0).toUpperCase())}</li>

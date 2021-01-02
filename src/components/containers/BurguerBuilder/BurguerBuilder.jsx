import React from "react";
import Burguer from "../../Burguer/Burguer";
import Aux from "../../hoc/Auxiliary";
import Controlador from "../../Burguer/controladores/controlador";
import Modal from "../../ui/modal/Modal";
import OrdemPedido from "../../Burguer/OrdemPedido/OrdemPedido";
const INGREDIENTE_VALORES = {
  bacon: 2.5,
  salada: 2,
  carne: 3,
  queijo: 2,
};

class BurguerBuilder extends React.Component {
  /*construtor(props) {
    super(props);
    this.state = { teste: "" };
  } */
  state = {
    ingredientes: { carne: 0, queijo: 0, salada: 0, bacon: 0 },
    valorTotal: 5.0,
    finalizavel: false,
    comprando: false,
  };

  comprandoHandler = () => {
    this.setState({ comprando: true });
  };
  cancelaCompra = () => {
    this.setState({ comprando: false });
  };

  atualizaIngredientes = (ingredientes) => {
    const sum = Object.keys(ingredientes)
      .map((e) => {
        return ingredientes[e];
      })
      .reduce((sum, atual) => {
        return sum + atual;
      }, 0);
    this.setState({ finalizavel: sum > 0 });
  };

  maisIngredienteHandler = (tipo) => {
    const oldIngrediente = this.state.ingredientes[tipo];
    const novoingrediente = oldIngrediente + 1;
    const novaLista = { ...this.state.ingredientes };
    novaLista[tipo] = novoingrediente;
    const oldValor = INGREDIENTE_VALORES[tipo];
    const novoValor = this.state.valorTotal + oldValor;
    this.atualizaIngredientes(novaLista);
    this.setState({ ingredientes: novaLista, valorTotal: novoValor });
  };
  menosIngredienteHandler = (tipo) => {
    const oldIngrediente = this.state.ingredientes[tipo];
    if (this.state.ingredientes[tipo] === 0) return;
    const novoingrediente = oldIngrediente - 1;
    const novaLista = { ...this.state.ingredientes };
    novaLista[tipo] = novoingrediente;
    const oldValor = INGREDIENTE_VALORES[tipo];
    const novoValor = this.state.valorTotal - oldValor;
    this.atualizaIngredientes(novaLista);
    this.setState({ ingredientes: novaLista, valorTotal: novoValor });
  };
  ordemExecutada = () => {
    alert("Obrigado pela preferencia");
  };

  render() {
    // FORMA Do MAX RESOLVER
    const disabledInfo = { ...this.state.ingredientes };
    const valorDaOrdem = this.state.valorTotal.toFixed(2).replace(".", ",");
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    } //return true ou false para cada item
    /*------------------*/

    return (
      <Aux>
        <Modal show={this.state.comprando} cancelaCompra={this.cancelaCompra}>
          <OrdemPedido
            ingredientes={this.state.ingredientes}
            ordemExecutada={this.ordemExecutada}
            fechaBackdrop={this.cancelaCompra}
            valorTotal={this.state.valorTotal.toFixed(2).replace(".", ",")}
          />
        </Modal>

        <Burguer ingredientes={this.state.ingredientes} />

        <Controlador
          mais={this.maisIngredienteHandler}
          menos={this.menosIngredienteHandler}
          ingredientes={this.state.ingredientes}
          valorTotal={valorDaOrdem}
          disabled={disabledInfo}
          finalizavel={!this.state.finalizavel}
          botaoComprar={this.comprandoHandler}
        />
      </Aux>
    );
  }
}

export default BurguerBuilder;

/*  const lista = Object.keys(this.state.ingredientes)
      .map((e) => {
        return [...Array(this.state.ingredientes[e])];
      })
      .reduce((prev, total) => {
        return (total = total.concat(prev));
      }, []); */

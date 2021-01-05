import React from "react";
import Burguer from "../../Burguer/Burguer";
import Aux from "../../hoc/Auxiliary";
import Controlador from "../../Burguer/controladores/controlador";
import Modal from "../../ui/modal/Modal";
import OrdemPedido from "../../Burguer/OrdemPedido/OrdemPedido";
import axios from "../../../axiosInstance";
import Spinner from "../../ui/modal/spinner/spinner";

import thisErrorHandler from "../../hoc/thisErrorHandler";

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
    ingredientes: null,
    valorTotal: 5.0,
    finalizavel: false,
    comprando: false,
    loading: false,
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
    this.setState({ loading: true });
    const order = {
      ingredientes: this.state.ingredientes,
      valorTotal: this.state.valorTotal,
      customer: {
        nome: "william",
        cpf: "410.00.00.20",
        endereco: {
          rua: "jose augusto",
          bairro: "jd aeroporto",
        },
      },
    };
    axios
      .post("orders.json", order)
      .then(() => this.setState({ loading: false, comprando: false }))
      .catch(
        (err) => console.log(err),
        this.setState({ loading: false, comprando: false })
      );
  };

  componentDidMount() {
    console.log("[BURGUER BUILDER] montei");
    axios
      .get(
        "https://react-burguer-36dbe-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((res) => this.setState({ ingredientes: res.data }));
  }
  render() {
    // FORMA Do MAX RESOLVER
    const disabledInfo = { ...this.state.ingredientes };
    const valorDaOrdem = this.state.valorTotal.toFixed(2).replace(".", ",");
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    } //return true ou false para cada item
    /*------------------*/
    let ordemPedido = (
      <OrdemPedido
        ingredientes={this.state.ingredientes}
        ordemExecutada={this.ordemExecutada}
        fechaBackdrop={this.cancelaCompra}
        valorTotal={this.state.valorTotal.toFixed(2).replace(".", ",")}
      />
    );
    if (this.state.loading) {
      ordemPedido = <Spinner />;
    }
    let burguer = <Burguer ingredientes={this.state.ingredientes} />;
    let controlador = (
      <Controlador
        mais={this.maisIngredienteHandler}
        menos={this.menosIngredienteHandler}
        ingredientes={this.state.ingredientes}
        valorTotal={valorDaOrdem}
        disabled={disabledInfo}
        finalizavel={!this.state.finalizavel}
        botaoComprar={this.comprandoHandler}
      />
    );

    return (
      <Aux>
        {this.state.ingredientes ? (
          <div>
            <Modal
              show={this.state.comprando}
              cancelaCompra={this.cancelaCompra}
            >
              {ordemPedido}
            </Modal>
            {burguer} {controlador}{" "}
          </div>
        ) : null}
      </Aux>
    );
  }
}

export default thisErrorHandler(BurguerBuilder, axios);

/*  const lista = Object.keys(this.state.ingredientes)
      .map((e) => {
        return [...Array(this.state.ingredientes[e])];
      })
      .reduce((prev, total) => {
        return (total = total.concat(prev));
      }, []); */

import React from "react";
import { Route } from "react-router";
import CheckoutSummary from "../../Order/CheckoutSummary";
import Contato from "./Contato/Contato";

class Checkout extends React.Component {
  state = {
    ingredientes: null,
    valorTotal: 0,
  };

  //Pra colocar o ingredinete como null, preciso definir o willmount ao inves de did, pois o contact pede o conteudo dos ingredientes
  clicaFinalizar = () => {
    this.props.history.push(this.props.match.url + "/contato");
  };
  clicaCancelar = () => {
    this.props.history.goBack();
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredientes = {};
    let valorTotal = 0;
    for (let param of query.entries()) {
      if (param[0] === "valorTotal") {
        valorTotal = param[1];
        console.log(valorTotal);
      } else ingredientes[param[0]] = +param[1];
    }
    this.setState({ ingredientes: ingredientes, valorTotal: valorTotal });
  }
  render() {
    return (
      <div>
        <CheckoutSummary
          clicaCancelar={this.clicaCancelar}
          clicaFinalizar={this.clicaFinalizar}
          ingredientes={this.state.ingredientes}
        />
        <Route
          path={this.props.match.path + "/contato"}
          render={() => (
            <Contato
              ingredientes={this.state.ingredientes}
              valorTotal={this.state.valorTotal}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;

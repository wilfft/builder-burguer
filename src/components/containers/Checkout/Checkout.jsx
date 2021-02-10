import React from "react";
import { Route } from "react-router";
import CheckoutSummary from "../../Order/CheckoutSummary/CheckoutSummary";
import Contato from "./Contato/Contato";
import { connect } from "react-redux";

class Checkout extends React.Component {
  //Pra colocar o ingredinete como null, preciso definir o willmount ao inves de did, pois o contact pede o conteudo dos ingredientes
  clicaFinalizar = () => {
    this.props.history.push(this.props.match.url + "/contato");
  };
  clicaCancelar = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          clicaCancelar={this.clicaCancelar}
          clicaFinalizar={this.clicaFinalizar}
          ingredientes={this.props.ings}
        />
        <Route
          path={this.props.match.path + "/contato"}
          component={Contato}
          /*  render={(props) => (
            <Contato
              ingredientes={this.props.ings}
              valorTotal={this.props.price}
              {...props}
        />
        )}*/
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    //   price: state.totalPrice,
  };
};
export default connect(mapStateToProps)(Checkout);

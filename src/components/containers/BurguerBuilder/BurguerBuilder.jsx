import React from "react";
import { connect } from "react-redux";
import Burguer from "../../Burguer/Burguer";
import Aux from "../../hoc/Auxiliary";
import Controlador from "../../Burguer/controladores/controlador";
import Modal from "../../ui/modal/Modal";
import OrdemPedido from "../../Burguer/OrdemPedido/OrdemPedido";
import axios from "../../../axiosInstance";
import Spinner from "../../ui/modal/spinner/spinner";

import * as burguerBuilderActions from "../../store/actions/index";
import thisErrorHandler from "../../hoc/thisErrorHandler";

class BurguerBuilder extends React.Component {
  state = {
    purchasing: false,
    loading: false,
    error: false,
    finalizavel: false,
    comprando: false,
  };

  comprandoHandler = () => {
    this.setState({ comprando: true });
  };
  cancelaCompra = () => {
    this.setState({ comprando: false });
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, atual) => {
        return sum + atual;
      }, 0);
    return sum > 0;
  };

  ordemExecutada = () => {
    this.props.history.push({
      pathname: "/checkout",
    });
  };
  componentDidMount() {
    console.log("[BURGUER BUILDER] montei", this.props);
    this.props.onInitIngredients();
  }
  render() {
    // FORMA Do MAX RESOLVER
    const disabledInfo = { ...this.props.ings };

    const valorDaOrdem = this.props.price.toFixed(2).replace(".", ",");

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let ordemResumo = null;

    let burguer = this.props.error ? (
      <p style={{ textAlign: "center" }}>
        ingredientes não puderam ser carregados
      </p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      burguer = (
        <Aux>
          <Burguer ingredientes={this.props.ings} />;
          <Controlador
            mais={this.props.onIngredientAdded}
            menos={this.props.onIngredientRemoved}
            ingredientes={this.props.ings}
            valorTotal={valorDaOrdem}
            disabled={disabledInfo}
            finalizavel={!this.updatePurchaseState(this.props.ings)}
            botaoComprar={this.comprandoHandler}
          />
        </Aux>
      );
      ordemResumo = (
        <OrdemPedido
          ingredientes={this.props.ings}
          ordemExecutada={this.ordemExecutada}
          fechaBackdrop={this.cancelaCompra}
          valorTotal={valorDaOrdem}
        />
      );
    }

    return (
      <Aux>
        <Modal show={this.state.comprando} cancelaCompra={this.cancelaCompra}>
          {ordemResumo}
        </Modal>
        {burguer}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch(burguerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(burguerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burguerBuilderActions.initIngredients()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(thisErrorHandler(BurguerBuilder, axios));

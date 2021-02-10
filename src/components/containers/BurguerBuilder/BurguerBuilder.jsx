import React from "react";
import { connect } from "react-redux";
import Burguer from "../../Burguer/Burguer";
import Aux from "../../hoc/Auxiliary";
import Controlador from "../../Burguer/controladores/controlador";
import Modal from "../../ui/modal/Modal";
import OrdemPedido from "../../Burguer/OrdemPedido/OrdemPedido";
import axios from "../../../axiosInstance";
import Spinner from "../../ui/modal/spinner/spinner";

import * as actionTypes from "../../store/actions";
import thisErrorHandler from "../../hoc/thisErrorHandler";

/*const INGREDIENTE_VALORES = {
  bacon: 2.5,
  salada: 2,
  carne: 3,
  queijo: 2,
};*/

class BurguerBuilder extends React.Component {
  /*construtor(props) {
    super(props);
    this.state = { teste: "" };
  } */

  state = {
    purchasing: false,
    loading: false,
    error: false,
    finalizavel: false,
    comprando: false,
  };
  /*
  state = {
    //  ingredients: 0,
    valorTotal: 5.0,
    finalizavel: false,
    comprando: false,
    loading: false,
    error: null,
  };*/

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
    return sum > 0;
  };

  /* maisIngredienteHandler = (tipo) => {
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
  };*/
  ordemExecutada = () => {
    const query = [];
    for (let i in this.props.ing) {
      query.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(this.props.ing[i])
      );
      query.push("valorTotal=" + this.props.price);
    }
    const queryString = query.join("&");

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };
  componentDidMount() {
    console.log("[BURGUER BUILDER] montei", this.props);

    /*axios
      .get(
        "https://react-burguer-36dbe-default-rtdb.firebaseio.com/ingredients.json "
      )
      .then((res) => this.setState({ ingredientes: res.data }))
      .catch((err) => this.setState({ error: err }));*/
  }
  render() {
    // FORMA Do MAX RESOLVER
    const disabledInfo = { ...this.props.ings };
    const valorDaOrdem = this.props.price.toFixed(2).replace(".", ",");
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    } //return true ou false para cada item
    /*------------------*/

    let ordemPedido = (
      <OrdemPedido
        ingredientes={this.props.ings}
        ordemExecutada={this.ordemExecutada}
        fechaBackdrop={this.cancelaCompra}
        valorTotal={valorDaOrdem}
      />
    );
    if (this.state.loading) {
      ordemPedido = <Spinner />;
    }

    let burguer = <Burguer ingredientes={this.props.ings} />;
    let controlador = (
      <Controlador
        mais={this.props.onIngredientAdded}
        //mais={this.maisIngredienteHandler}
        menos={this.props.onIngredientRemoved}
        ingredientes={this.props.ings}
        valorTotal={valorDaOrdem}
        disabled={disabledInfo}
        finalizavel={!this.atualizaIngredientes(this.props.ings)}
        botaoComprar={this.comprandoHandler}
      />
    );

    return (
      <Aux>
        {this.state.error ? (
          <p style={{ textAlign: "center" }}>
            ingredientes não puderam ser carregados
          </p>
        ) : (
          <>
            {this.props.ings ? (
              <div>
                <Modal
                  show={this.state.comprando}
                  cancelaCompra={this.cancelaCompra}
                >
                  {ordemPedido}
                </Modal>
                {burguer} {controlador}
              </div>
            ) : (
              <Spinner />
            )}
          </>
        )}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(thisErrorHandler(BurguerBuilder, axios));

/*  const lista = Object.keys(this.state.ingredientes)
      .map((e) => {
        return [...Array(this.state.ingredientes[e])];
      })
      .reduce((prev, total) => {
        return (total = total.concat(prev));
      }, []); */

/*
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
      };*/

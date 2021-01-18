import React from "react";
import BotaoModal from "../../../ui/BotaoModal/BotaoModal";
import "./Contato.css";
import axios from "../../../../axiosInstance";
import Spinner from "../../../ui/modal/spinner/spinner";

class Contato extends React.Component {
  state = {
    nome: "",
    email: "",
    endereco: {
      rua: "",
      cep: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredientes: this.props.ingredientes,
      valorTotal: this.props.valorTotal, //esse foi calculado no burguer vuilder
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
      .then(() => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => console.log(err), this.setState({ loading: false }));
  };
  render() {
    let form = (
      <form>
        <input className="inputs" type="text" name="nome" placeholder="Nome" />
        <input
          className="inputs"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input className="inputs" type="text" name="rua" placeholder="Rua" />
        <input className="inputs" type="text" name="cep" placeholder="CEP" />
        <BotaoModal botaoTipo="sucesso" clique={this.orderHandler}>
          FINALIZAR
        </BotaoModal>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="contato">
        <h4>Preencha seus dados</h4>
        {form}
      </div>
    );
  }
}

export default Contato;

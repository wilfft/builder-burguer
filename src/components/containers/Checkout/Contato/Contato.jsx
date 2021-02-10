import React from "react";
import BotaoModal from "../../../ui/BotaoModal/BotaoModal";
import "./Contato.css";
import axios from "../../../../axiosInstance";
import Spinner from "../../../ui/modal/spinner/spinner";
import Input from "../../../ui/input/input";
import { connect } from "react-redux";
class Contato extends React.Component {
  state = {
    orderForm: {
      nome: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Nome",
        },
        value: "",
        validacao: {
          isRequired: true,
          min: 3,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
        validacao: {
          isRequired: true,
          minLength: 8,
        },
        valid: false,
        touched: false,
      },
      endereco: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Endereço",
        },
        value: "",
        validacao: {
          isRequired: true,
        },
        valid: false,
        touched: false,
      },
      cep: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "CEP",
        },
        value: "",
        validacao: {
          isRequired: true,
          minLength: 8,
          maxLenght: 8,
          onlyNumber: null,
        },
        valid: false,
        touched: false,
      },
      metodoEntrega: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "maisRapido", displayValue: "Mais Rápido" },
            { value: "maisBarata", displayValue: "Econômico" },
          ],
        },
        validacao: {
          isRequired: false,
        },
        value: "maisRapido",

        valid: true,
      },
    },
    loading: false,
    formIsValid: false,
  };

  validar(value, rules) {
    let isValid = true;

    // if (!rules) return true;
    if (rules.isRequired) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLenght) {
      isValid = value.length <= rules.maxLenght && isValid;
    }

    return isValid;
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      ingredientes: this.props.omg,
      valorTotal: this.props.price, //esse foi calculado no burguer vuilder
      orderData: formData,
    };

    axios
      .post("orders.json", order)
      .then(() => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => console.log(err), this.setState({ loading: false }));
  };
  inputChangedHandler = (event, id) => {
    const temporaryOrder = { ...this.state.orderForm };
    const temporaryOrderElement = { ...temporaryOrder[id] };
    temporaryOrderElement.value = event.target.value;
    temporaryOrderElement.valid = this.validar(
      temporaryOrderElement.value,
      temporaryOrderElement.validacao
    );
    temporaryOrderElement.touched = true;
    temporaryOrder[id] = temporaryOrderElement;

    let formIsValid = true;
    for (let key in temporaryOrder) {
      formIsValid = temporaryOrder[key].valid && formIsValid;
    }
    this.setState({ orderForm: temporaryOrder, formIsValid: formIsValid });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            valid={formElement.config.valid}
            touched={formElement.config.touched}
            //   needValidate={!formElement.config.needValidate}
            changed={(e) => this.inputChangedHandler(e, formElement.id)}
          />
        ))}
        <BotaoModal disabled={!this.state.formIsValid} botaoTipo="sucesso">
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
const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};
export default connect(mapStateToProps)(Contato);

import Modal from "../ui/modal/Modal";
import Aux from "./Auxiliary";
import React from "react";
const thisErrorHandler = (WrappedComponent, axios) => {
  //  2)  SEGUNDO ARGUMENTO, estou chamando o AXIOS
  //  3) mas pra usar o axios, previso transformar o RETORNO funcional em RETORNO DE CLASSE para usar o COMPONENTEDIDMOUNT
  //  4) O USE EFFECT FARIA O MESMO, NO COMPONENTE FUNCIONAL, pois iria ser executado assim que aberto o componente
  return class extends React.Component {
    state = {
      errorStatus: null,
    };
    closeErrorModal = () => {
      this.setState({ errorStatus: null });
    };

    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ errorStatus: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ errorStatus: error });
        }
      );
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.errorStatus}
            cancelaCompra={this.closeErrorModal}
          >
            {this.state.errorStatus ? this.state.errorStatus.message : null}
          </Modal>

          <WrappedComponent {...this.props} />
        </Aux>
      );
    }

    //  1) NO MODAL PRECISO PASSAR A INFORMAÇAO DE ALGUM ERRO, ESSE ERRO DEVE VIR DO WRAPPED COMPOMENTE, ENTAO PASSAREI UM SEGUNDO ARGUMENTO, QUE É O AXIOS
  };
};
export default thisErrorHandler;

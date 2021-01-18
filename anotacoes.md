CONTAINERS -> Stateful components que usam Estados, class ou functional based
COMPONENTS -> dumb ou presentation, nao usam estado

---

2 formas de chamar função

```javascript
function App(props) {
  return <div className="App"></div>;
}

export default App;
---------------------------
const App = (props) => (
 <div className="App"></div>;
);

export default App;
```

---

PERFOMANCE
componente filho

```javascript
 componentWillUpdate() {
    console.log("[ordemPedido]");
  }
```

componente PAI

```javascript
class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  componentWillUpdate() {
    console.log("modal atualizou");
  }

```

Melhorando a perfomance do Modal apos adicionar o spinner.

```javascript
return (
  nextProps.show !== this.props.show ||
  nextProps.children !== this.props.children
);
```

O COMPONENT DID MOUND NAO MOSTRA O ERRO AO TIRAR O JSON DA CONEXAO POIS O DID MOUNT OCORRE SO depos de chamar todos os childrens. A SOLUÇAP COmponent WILL MOUNT

```javascript
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

    componentDidMount() {    PASSAR PARA WILL MOUNT
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
```

passando propriedadse atraves de router

```javascript
<Route
  path={this.props.match.path + "/contato"}
  render={() => <Contato ingredientes={this.state.ingredientes} />}
/>
```

ATENÇAO, Dessa foram eu nao consigo usar o history.push desntro do contato pois foi passado manualmente
SOLUÇAO 1: wrap com withroute;
SOLUÇAO 2: passar o props atual com junto da funçao

```javascript
<Route
  path={this.props.match.path + "/contato"}
  render={(props) => (
    <Contato ingredientes={this.state.ingredientes} {...props} />
  )}
/>
```

 <NavLink exact to={props.link} activeClassName="ativado">
      {props.children}
    </NavLink>  POSSO DEFINIR UMA NOVA CLASSE PARA O ESTADO active
```

```

```

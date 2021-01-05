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

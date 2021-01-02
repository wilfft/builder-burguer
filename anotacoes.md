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

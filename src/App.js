import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BurguerBuilder from "./components/containers/BurguerBuilder/BurguerBuilder";
import Checkout from "./components/containers/Checkout/Checkout";
import Orders from "./components/containers/Orders/Orders";
class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurguerBuilder} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

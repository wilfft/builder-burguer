import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BurguerBuilder from "./components/containers/BurguerBuilder/BurguerBuilder";
import Checkout from "./components/containers/Checkout/Checkout";
class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={BurguerBuilder} />

          <Route path="/checkout" component={Checkout} />
        </Layout>
      </div>
    );
  }
}

export default App;

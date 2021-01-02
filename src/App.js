import "./App.css";
import React from "react";
import Layout from "./components/Layout/Layout";
import BurguerBuilder from "./components/containers/BurguerBuilder/BurguerBuilder";
class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;

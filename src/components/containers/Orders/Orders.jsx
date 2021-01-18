import React from "react";
import axios from "../../../axiosInstance";
import thisErrorHandler from "../../hoc/thisErrorHandler";
import Order from "../../Order/Order";

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    const novaOrdem = [];
    axios
      .get("/orders.json")
      .then((res) => {
        for (let key in res.data) {
          novaOrdem.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: novaOrdem });
        console.log(novaOrdem);
      })
      .catch((err) => this.setState({ loading: false }));
  }
  render() {
    return (
      <div>
        {this.state.orders.map((e) => (
          <Order
            key={e.id}
            ingredientes={e.ingredientes}
            valorTotal={e.valorTotal}
          />
        ))}
      </div>
    );
  }
}
export default thisErrorHandler(Orders, axios);

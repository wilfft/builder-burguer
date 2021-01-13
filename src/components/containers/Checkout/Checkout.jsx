import React from "react";
import CheckoutSummary from "../../Order/CheckoutSummary";
class Checkout extends React.Component {
  state = {
    ingredients: {
      salada: 1,
      carne: 1,
      queijo: 1,
      bacon: 1,
    },
  };
  render() {
    return (
      <div>
        <CheckoutSummary ingredientes={this.state.ingredients} />;
      </div>
    );
  }
}

export default Checkout;

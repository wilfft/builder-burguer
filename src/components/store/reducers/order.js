import { findAllByDisplayValue } from "@testing-library/react";
import * as actionTypes from "../actions/actionsType";

const initialState = {
  orders: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGUER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      };
      return {
        ...state,
        loading: findAllByDisplayValue,
        orders: state.orders.concat(newOrder),
      };
    case actionTypes.PURCHASE_BURGUER_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;

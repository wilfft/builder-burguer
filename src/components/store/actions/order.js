import * as actiontypes from "./actionsType";
import axios from "../../../axiosInstance";
export const purchaseBurguerSuccess = (id) => {
  return {
    type: actiontypes.PURCHASE_BURGUER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurguerFail = (error) => {
  return {
    type: actiontypes.PURCHASE_BURGUER_FAIL,
    error: error,
  };
};

export const purchaseBurguerStart = (orderData) => {
  return (dispatch) => {
    axios
      .post("orders.json", orderData)
      .then((response) => {
        console.log(response.data);
        dispatch(purchaseBurguerSuccess(response.data, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurguerFail(error));
      });
  };
};

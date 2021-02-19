import axios from "../../../axiosInstance";
import * as actionsType from "./actionsType";

export const addIngredient = (ingredientName) => {
  return {
    type: actionsType.ADD_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const removeIngredient = (ingredientName) => {
  return {
    type: actionsType.REMOVE_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const setIngredients = (ingredientsResponse) => {
  return {
    type: actionsType.SET_INGREDIENTS,
    ingredients: ingredientsResponse,
  };
};
export const fetchIngredientsFailed = () => {
  return {
    type: actionsType.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        "https://react-burguer-36dbe-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
    //run assync code
  };
};

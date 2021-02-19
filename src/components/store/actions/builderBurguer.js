import * as actionsType from "./actionsType";

export const addIngredient = (ingredientName) => {
  return {
    type: actionsType.ADD_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const removeIngredient = (ingredientName) => {
  return {
    type: actionsTypes.REMOVE_INGREDIENT,
    ingredientName: ingredientName,
  };
};

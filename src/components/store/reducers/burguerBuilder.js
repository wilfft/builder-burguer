import * as actionsType from "../actions/actionsType";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const INGREDIENTE_VALORES = {
  bacon: 2.5,
  salada: 2,
  carne: 3,
  queijo: 2,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
          //no ES6 OS COLCHOTES FAZER OVERWIRTE ALGUM CONTEUDO, E NAO CRIAR
        },
        totalPrice:
          state.totalPrice + INGREDIENTE_VALORES[action.ingredientName],
      };

    case actionsType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
          //no ES6 OS COLCHOTES FAZER OVERWIRTE ALGUM CONTEUDO, E NAO CRIAR
        },
        totalPrice:
          state.totalPrice - INGREDIENTE_VALORES[action.ingredientName],
      };
    default:
      return state;
  }
};
export default reducer;

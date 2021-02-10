import * as actionsType from "./actions";

const initialState = {
  ingredients: {
    salada: 0,
    bacon: 0,
    queijo: 0,
    carne: 0,
  },
  totalPrice: 4,
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

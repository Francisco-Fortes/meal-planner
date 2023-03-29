import { GET_RECIPES } from "../actions/index.js";

const initialState = {
  recipes: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;

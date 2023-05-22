import { GET_RECIPE, GET_RECIPES } from "../actions/index.js";

const initialState = {
  recipes: [],
  recipe: {},
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;

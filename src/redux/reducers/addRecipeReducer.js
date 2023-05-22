import { ADD_RECIPES } from "../actions/index.js";

const initialState = {
  addedRecipe: {},
};

const addRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPES:
      return {
        ...state,
        addedRecipe: action.payload,
      };
    default:
      return state;
  }
};

export default addRecipeReducer;

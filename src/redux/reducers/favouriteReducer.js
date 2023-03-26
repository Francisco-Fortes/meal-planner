import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions/index.js";

const initialState = {
  favouriteRecipes: [],
  favouriteCount: 0,
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favouriteRecipes: [...state.favouriteRecipes, action.payload],
        favouriteCount: state.favouriteCount + 1,
      };
    case REMOVE_FAVOURITE:
      const updatedFavouriteRecipes = state.favouriteRecipes.filter(
        (recipe) => recipe._id !== action.payload
      );
      return {
        ...state,
        favouriteRecipes: updatedFavouriteRecipes,
        favouriteCount: state.favouriteCount - 1,
      };
    default:
      return state;
  }
};

export default favouriteReducer;

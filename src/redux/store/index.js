import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import recipeReducer from "../reducers/recipeReducer";

const bigReducer = combineReducers({
  recipe: recipeReducer,
  favourite: favouriteReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;

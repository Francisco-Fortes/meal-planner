import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import allPlannerReducer from "../reducers/allPlannersReducer";
import favouriteReducer from "../reducers/favouriteReducer";
import plannerReducer from "../reducers/plannerReducer";
import recipeReducer from "../reducers/recipeReducer";
import userReducer from "../reducers/userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["recipe", "favourite", "user", "planner"],
};

const bigReducer = combineReducers({
  recipe: recipeReducer,
  favourite: favouriteReducer,
  user: userReducer,
  planner: plannerReducer,
  allPanners: allPlannerReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

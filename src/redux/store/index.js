import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import favouriteReducer from "../reducers/favouriteReducer";
import recipeReducer from "../reducers/recipeReducer";
import userReducer from "../reducers/userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["recipe", "favourite", "user"],
};

const bigReducer = combineReducers({
  recipe: recipeReducer,
  favourite: favouriteReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

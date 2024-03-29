import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../reducers";
const uniedReducer = combineReducers({
  ricercati: searchReducer,
});

const store = configureStore({
  reducer: uniedReducer,
});

export default store;

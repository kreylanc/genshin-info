import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filterSlice";
import searchReduer from "../features/searchSlice";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReduer,
  },
});

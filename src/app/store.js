import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filterSlice";
import searchReduer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReduer,
  },
});

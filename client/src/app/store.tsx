/** @format */

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/products/productSlice";
import searchProductReducer from "./feature/products/searchProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    search: searchProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

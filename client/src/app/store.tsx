/** @format */

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/products/productSlice";
import searchProductReducer from "./feature/products/searchProductSlice";
import myProductReducer from "./feature/products/myproductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    search: searchProductReducer,
    myProducts: myProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

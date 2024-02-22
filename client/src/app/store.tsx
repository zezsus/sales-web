/** @format */

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/products/productSlice";
import searchProductReducer from "./feature/products/searchProductSlice";
import myProductReducer from "./feature/products/myproductSlice";
import userReducer from "./feature/users/userSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    search: searchProductReducer,
    myProducts: myProductReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

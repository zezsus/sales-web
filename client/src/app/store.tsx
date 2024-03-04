/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/auth/common/redux/userSlice";
import productReducer from "@/products/common/redux/productSlice";
import searchProductReducer from "@/products/common/redux/searchProductSlice";
import myproductReducer from "@/navbar/usermenu/myshop/common/redux/myproductSlice";
import profileReducer from "@/navbar/usermenu/profile/common/redux/profileSlice";
import cartReducer from "@/products/cart/common/redux/cartSlices";

export const store = configureStore({
  reducer: {
    products: productReducer,
    search: searchProductReducer,
    myProducts: myproductReducer,
    carts: cartReducer,
    users: userReducer,
    profileUser: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

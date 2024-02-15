/** @format */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IProductState = {
  numberItem: 0,
  buyItem: [],
  listCartItem: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCartItem: (state, action) => {
      const cartItem = [...state.listCartItem, action.payload];
      state.listCartItem = cartItem;
      state.numberItem += 1;
    },
    setBuyItem: (state, action) => {
      state.buyItem = action.payload;
    },
  },
});

export const { setCartItem, setBuyItem } = productSlice.actions;

export default productSlice.reducer;

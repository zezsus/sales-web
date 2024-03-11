/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { ICartState } from "../interface";

const initialState: ICartState = {
  deleteItemCartId: "",
  isShowDeleteCart: false,
};

export const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDeleteItemCartId: (state, action) => {
      state.deleteItemCartId = action.payload;
    },
    showDeleteCartItemModal: (state, action) => {
      state.isShowDeleteCart = action.payload;
    },
  },
});

export const { setDeleteItemCartId, showDeleteCartItemModal } =
  cartSlice.actions;

export default cartSlice.reducer;

/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { IProductState } from "../interface";

const initialState: IProductState = {
  buyItem: [],
  buyNumberProduct: 1,
  isShowModal: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setBuyItem: (state, action) => {
      state.buyItem = action.payload;
    },
    setBuyNumberProduct: (state, action) => {
      state.buyNumberProduct = action.payload;
    },
    setShowModal: (state, action) => {
      state.isShowModal = action.payload;
    },
  },
});

export const { setBuyItem, setBuyNumberProduct, setShowModal } =
  productSlice.actions;

export default productSlice.reducer;

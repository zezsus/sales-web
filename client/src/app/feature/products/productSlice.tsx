/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState: IProductState = {
  numberItem: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setNumberItem: (state) => {
      state.numberItem += 1;
    },
  },
});

export const { setNumberItem } = productSlice.actions;

export default productSlice.reducer;

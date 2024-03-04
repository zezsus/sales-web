/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { ISearchProductState } from "../interface";

const initialState: ISearchProductState = {
  searchName: "",
  selectedType: "",
  selectedPrice: "",

};

export const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    setSearchName: (state, action) => {
      state.searchName = action.payload;
    },
    setSearchType: (state, action) => {
      state.selectedType = action.payload;
    },
    setSearchPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
  },
});

export const { setSearchName, setSearchType, setSearchPrice } =
  searchProductSlice.actions;

export default searchProductSlice.reducer;

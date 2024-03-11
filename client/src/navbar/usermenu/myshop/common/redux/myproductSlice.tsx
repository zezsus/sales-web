/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { IMyProductState } from "../interfaces/myshop.interface";

const initialState: IMyProductState = {
  editMyProduct: {},
  deleteMyProductId: "",
  isShowAddMyProduct: false,
  isShowEditMyProduct: false,
  isShowDeleteMyProduct: false,
  isShowAddBrand: false,
  isShowAddCategory: false,
};

export const myProductSlice = createSlice({
  name: "myProductSlice",
  initialState,
  reducers: {
    setShowAddMyProduct: (state, action) => {
      state.isShowAddMyProduct = action.payload;
    },
    setShowEditMyProduct: (state, action) => {
      state.isShowEditMyProduct = action.payload;
    },
    setEditMyProduct: (state, action) => {
      state.editMyProduct = action.payload;
    },

    setShowDeleteMyProduct: (state, action) => {
      state.isShowDeleteMyProduct = action.payload;
    },
    getDeleteProductId: (state, action) => {
      state.deleteMyProductId = action.payload;
    },
    setShowAddBrand: (state, action) => {
      state.isShowAddBrand = action.payload;
    },
    setShowAddCategory: (state, action) => {
      state.isShowAddCategory = action.payload;
    },
  },
});

export const {
  setShowAddMyProduct,
  setShowEditMyProduct,
  setEditMyProduct,
  setShowDeleteMyProduct,
  getDeleteProductId,
  setShowAddBrand,
  setShowAddCategory,
} = myProductSlice.actions;

export default myProductSlice.reducer;

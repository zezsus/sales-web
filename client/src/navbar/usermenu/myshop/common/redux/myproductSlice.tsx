/** @format */

import { IMyProductState, IProduct } from "@/products/common/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IMyProductState = {
  myShopProduct: [],
  editMyProduct: [],
  deleteMyProductId: 0,
  isShowAddMyProduct: false,
  isShowEditMyProduct: false,
  isShowDeleteMyProduct: false,
};

export const myProductSlice = createSlice({
  name: "myProductSlice",
  initialState,
  reducers: {
    setShowAddMyProduct: (state, action) => {
      state.isShowAddMyProduct = action.payload;
    },
    setAddMyProduct: (state, action) => {
      state.myShopProduct = [...state.myShopProduct, action.payload];
    },

    setShowEditMyProduct: (state, action) => {
      state.isShowEditMyProduct = action.payload;
    },
    setEditMyProduct: (state, action) => {
      state.editMyProduct = action.payload;
    },

    setUpdateProduct: (state, action) => {
      const updatedIndex = state.myShopProduct.findIndex(
        (product:IProduct) => product.id === action.payload.id
      );
      if (updatedIndex !== -1) {
        state.myShopProduct[updatedIndex] = action.payload;
        state.editMyProduct = [];
      }
    },

    setShowDeleteMyProduct: (state, action) => {
      state.isShowDeleteMyProduct = action.payload;
    },
    getDeleteProductId: (state, action) => {
      state.deleteMyProductId = action.payload;
    },
    setDeleteMyProduct: (state, action) => {
      state.myShopProduct = action.payload;
    },
  },
});

export const {
  setShowAddMyProduct,
  setAddMyProduct,
  setShowEditMyProduct,
  setEditMyProduct,
  setUpdateProduct,
  setShowDeleteMyProduct,
  getDeleteProductId,
  setDeleteMyProduct,
} = myProductSlice.actions;

export default myProductSlice.reducer;

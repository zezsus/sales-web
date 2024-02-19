/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState: IMyProductState = {
  myShopProduct: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      rating: 4.69,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
  ],
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
        (product) => product.id === action.payload.id
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

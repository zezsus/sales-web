/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState: IProductState = {
  numberItem: 0,
  buyItem: [],
  listCartItem: [],
  isDeleteCartItem: false,
  deleteItemId: 0,
  isShowModal: false,
  numberBuyProduct: 1,
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
    showDeleteCartItemModal: (state, action) => {
      state.isDeleteCartItem = action.payload;
    },
    setDeleteItemId: (state, action) => {
      state.deleteItemId = action.payload;
    },

    setDeleteCartItem: (state) => {
      const deleteItem = state.listCartItem.filter(
        (item: any) => item.id !== state.deleteItemId
      );
      state.listCartItem = deleteItem;
      state.numberItem -= 1;
    },

    setShowModal: (state, action) => {
      state.isShowModal = action.payload;
    },

    setBuyNumberProduct: (state, action) => {
      state.numberBuyProduct = action.payload;
    },
  },
});

export const {
  setCartItem,
  setBuyItem,
  showDeleteCartItemModal,
  setDeleteCartItem,
  setDeleteItemId,
  setShowModal,
  setBuyNumberProduct,
} = productSlice.actions;

export default productSlice.reducer;

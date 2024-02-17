/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState: IProductState = {
  numberItem: 0,
  buyItem: [],
  listCartItem: [],
  isDeleteCartItem: false,
  deleteItemId: 0,
  searchValue: null,
  resultSearch: [],
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

    getSearchValue: (state, action)=>{
      state.searchValue = action.payload
    }
  },
});

export const {
  setCartItem,
  setBuyItem,
  showDeleteCartItemModal,
  setDeleteCartItem,
  setDeleteItemId,
} = productSlice.actions;

export default productSlice.reducer;

/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../interfaces";

const initialState: IUserState = {
  isLogin: false,
  isLocalStorage: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setIsLocalStorage: (state) => {
      if (localStorage.getItem("user")) {
        state.isLocalStorage = true;
      } else {
        state.isLocalStorage = false;
      }
    },
  },
});

export const { setIsLogin, setIsLocalStorage } = userSlice.actions;

export default userSlice.reducer;

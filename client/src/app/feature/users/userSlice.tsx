/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState: IUserState = {
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setIsLogin } = userSlice.actions;

export default userSlice.reducer;

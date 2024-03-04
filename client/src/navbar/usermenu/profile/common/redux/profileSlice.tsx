/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { IUserProfileState } from "../interfaces/profile.interface";

const initialState: IUserProfileState = {
  isUpdateUser: false,
  isChangePassword: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUpdateUser: (state, action) => {
      state.isUpdateUser = action.payload;
    },
    setIsChangePassword: (state, action) => {
      state.isChangePassword = action.payload;
    },
  },
});

export const { setUpdateUser, setIsChangePassword } = profileSlice.actions;

export default profileSlice.reducer;

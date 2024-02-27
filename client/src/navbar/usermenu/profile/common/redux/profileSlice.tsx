/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { IUserProfileState } from "../interfaces";

const initialState: IUserProfileState = {
  isUpdateUser: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUpdateUser: (state, action) => {
      state.isUpdateUser = action.payload;
    },
  },
});

export const { setUpdateUser } = profileSlice.actions;

export default profileSlice.reducer;

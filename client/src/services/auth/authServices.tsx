/** @format */

import { authRouter } from "@/util/api";
import axios from "axios";

export const getDataUser = async () => {
  const res = await axios.get(authRouter);
  return res.data;
};

export const postNewUser = async (newUser: IUser) => {
  const res = await axios.post(authRouter, newUser);
  return res.data;
};

export const updateUser = async (id: string, updateUser: IUser) => {
  const res = await axios.put(`${authRouter}/${id}`, updateUser);
  return res.data;
};

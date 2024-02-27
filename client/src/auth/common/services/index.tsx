/** @format */

import { authRouter } from "@/util/api";
import axios from "axios";
import { usersSchemas } from "../schemas/usersSchemas";
import { validateSchemas } from "../utils";
import { IUser } from "../interfaces";

export const getDataUser = async () => {
  const res = await axios.get(authRouter);
  const data = await res.data;
  return validateSchemas(usersSchemas, data);
};

export const postNewUser = async (newUser: IUser) => {
  const res = await axios.post(authRouter, newUser);
  const data = res.data;
  return validateSchemas(usersSchemas, data);
};

export const updateUser = async (id: string, updateUser: IUser) => {
  const res = await axios.put(`${authRouter}/${id}`, updateUser);
  const data = res.data;
  return validateSchemas(usersSchemas, data);
};

/** @format */

import { IUser } from "@/auth/common/interfaces";
import { userSchemas } from "@/auth/common/schemas/usersSchemas";
import { validateSchemas } from "@/auth/common/utils";
import { authRouter } from "@/util/api";
import axios from "axios";

export const updateUser = async (updateValue: IUser, id: string) => {
  const res = await axios.put(`${authRouter}/${id}`, updateValue);
  const data = res.data;
  return validateSchemas(userSchemas, data);
};

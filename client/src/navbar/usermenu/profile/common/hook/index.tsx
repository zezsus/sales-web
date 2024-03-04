/** @format */

import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../services";
import { IUser } from "@/auth/common/interfaces";

export const useUpdateUser = (id: string) => {
  return useMutation((updateValue: IUser) => updateUser(updateValue, id));
};

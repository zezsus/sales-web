/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/profile.service";
import { IUser } from "@/auth/common/interfaces";

export const useUpdateUser = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation((updateValue: IUser) => updateUser(updateValue, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["userData"]);
    },
  });
};

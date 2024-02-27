/** @format */

import { IUser } from "@/auth/common/interfaces";
import { getDataUser, postNewUser } from "@/auth/common/services";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetUserData = () => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: getDataUser,
  });
};

export const usePostNewtUser = () => {
  return useMutation((newUser: IUser) => postNewUser(newUser));
};

/** @format */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteCartData,
  getCartData,
  postCartData,
} from "../services/cartservices";
import { ICartItem } from "../../../common/interface";

export const useGetCartItem = () => {
  return useQuery({
    queryKey: ["getCartItems"],
    queryFn: getCartData,
  });
};

export const usePostCartItem = () => {
  const clientQuery = useQueryClient();
  return useMutation((postData: ICartItem) => postCartData(postData), {
    onSuccess: () => {
      clientQuery.invalidateQueries(["getCartItems"]);
    },
  });
};

export const useDeleteCartItem = () => {
  const clientQuery = useQueryClient();
  return useMutation((cartItemId: string) => deleteCartData(cartItemId), {
    onSuccess: () => {
      clientQuery.invalidateQueries(["getCartItems"]);
    },
  });
};

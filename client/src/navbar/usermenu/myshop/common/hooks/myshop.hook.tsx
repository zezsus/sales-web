/** @format */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteMyProduct,
  editProduct,
  getMyProduct,
  postNewProduct,
} from "../services/myshop.service";
import { IProduct } from "@/products/common/interface";

export const useGetMyProductData = () => {
  return useQuery({
    queryKey: ["getMyProduct"],
    queryFn: getMyProduct,
  });
};

export const usePostMyProductData = () => {
  const queryClient = useQueryClient();
  return useMutation((productValue: IProduct) => postNewProduct(productValue), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getMyProduct"]);
    },
  });
};

export const useEditMyProductData = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    (productValue: IProduct) => editProduct(productValue, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getMyProduct"]);
      },
    }
  );
};

export const useDeleteMyProductData = () => {
  const queryClient = useQueryClient();
  return useMutation((deleteItemId: string) => deleteMyProduct(deleteItemId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getMyProduct"]);
    },
  });
};

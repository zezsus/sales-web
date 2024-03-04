/** @format */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteProduct,
  detailProdut,
  editProduct,
  getListProduct,
  postProduct,
} from "../services";
import { IProduct } from "../interface";

export const useGetProductData = () => {
  return useQuery({
    queryKey: ["getProductData"],
    queryFn: getListProduct,
  });
};

export const usePosProductData = () => {
  const queryClient = useQueryClient();
  return useMutation((productValue: IProduct) => postProduct(productValue), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getProductData"]);
    },
  });
};

export const useEditProductData = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation(
    (productValue: IProduct) => editProduct(productValue, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getProductData"]);
      },
    }
  );
};

export const useDeleteProductData = () => {
  const queryClient = useQueryClient();
  return useMutation((deleteItemId: number) => deleteProduct(deleteItemId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getProductData"]);
    },
  });
};

export const useGetProductDetailData = (id: number) => {
  return useQuery({
    queryKey: ["productDetailData", id],
    queryFn: () => detailProdut(id),
  });
};

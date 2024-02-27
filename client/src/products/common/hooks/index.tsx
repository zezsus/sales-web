/** @format */

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  detailProdut,
  editProduct,
  getListProduct,
  postNewProduct,
} from "../services";

export const useGetProductData = () => {
  return useQuery({
    queryKey: ["getProductData"],
    queryFn: getListProduct,
  });
};

export const usePostProductData = () => {
  return useMutation(postNewProduct);
};

export const useEditProductData = () => {
  return useMutation(editProduct);
};

export const useGetProductDetailData = (id: number) => {
  return useQuery({
    queryKey: ["productDetailData", id],
    queryFn: () => detailProdut(id),
  });
};

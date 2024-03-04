/** @format */

import { useMutation, useQuery } from "@tanstack/react-query";
import { detailProdut, getListProduct } from "../services";

export const useGetProductData = () => {
  return useQuery({
    queryKey: ["getProductData"],
    queryFn: getListProduct,
  });
};

export const useGetProductDetailData = (id: number) => {
  return useQuery({
    queryKey: ["productDetailData", id],
    queryFn: () => detailProdut(id),
  });
};

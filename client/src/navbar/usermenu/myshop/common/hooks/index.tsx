/** @format */

import { useMutation } from "@tanstack/react-query";
import { editProduct, postNewProduct } from "../services";
import { IProduct } from "@/products/common/interface";

export const usePostProductData = () => {
  return useMutation((productValue: IProduct) => postNewProduct(productValue));
};

export const useEditProductData = () => {
  return useMutation((productValue: IProduct) => editProduct(productValue));
};

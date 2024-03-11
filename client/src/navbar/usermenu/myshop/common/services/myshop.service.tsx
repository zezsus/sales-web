/** @format */

import { IProduct } from "@/products/common/interface";
import {
  productSchemas,
  productsSchemas,
} from "@/products/common/schemas/productsSchemas";
import { myProductsRouter } from "@/util/api";
import axios from "axios";
import { deleteMyProductSchemas } from "../schemas/myshop.schemas";
import { validateMyProductSchemas } from "../util";

export const getMyProduct = async () => {
  const res = await axios.get(myProductsRouter);
  const product = await res.data;
  return validateMyProductSchemas(productsSchemas, product);
};

export const postNewProduct = async (newProduct: IProduct) => {
  const res = await axios.post(myProductsRouter, newProduct);
  const product = await res.data;
  return validateMyProductSchemas(productsSchemas, product.products);
};

export const editProduct = async (updateProduct: IProduct, id: string) => {
  const res = await axios.put(`${myProductsRouter}/${id}`, updateProduct);
  const product = await res.data;
  return validateMyProductSchemas(productSchemas, product);
};

export const deleteMyProduct = async (deleteItemId: string) => {
  const res = await axios.delete(`${myProductsRouter}/${deleteItemId}`);
  const product = await res.data;
  return validateMyProductSchemas(deleteMyProductSchemas, product);
};

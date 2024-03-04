/** @format */

import { IProduct } from "@/products/common/interface";
import { productsSchemas } from "@/products/common/schemas/productsSchemas";
import { validateSchemas } from "@/products/common/utils";
import axios from "axios";

export const postNewProduct = async (newProduct: IProduct) => {
  const res = await axios.post("https://dummyjson.com/products", newProduct);
  const product = await res.data;
  return validateSchemas(productsSchemas, product.products);
};

export const editProduct = async (updateProduct: IProduct) => {
  const res = await axios.put("https://dummyjson.com/products", updateProduct);
  const product = await res.data;
  return validateSchemas(productsSchemas, product.products);
};

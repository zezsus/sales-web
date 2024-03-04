/** @format */

import axios from "axios";
import { validateSchemas } from "../utils";
import { productSchemas, productsSchemas } from "../schemas/productsSchemas";

export const getListProduct = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  const product = await res.data;
  return validateSchemas(productsSchemas, product.products);
};

export const detailProdut = async (id: number) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  const productDetail = await res.data;
  return validateSchemas(productSchemas, productDetail);
};

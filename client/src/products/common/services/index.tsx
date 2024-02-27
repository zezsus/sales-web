/** @format */

import axios from "axios";
import { validateSchemas } from "../utils";
import { productSchemas, productsSchemas } from "../schemas/productsSchemas";
import { IProduct } from "../interface";

export const getListProduct = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  const product = await res.data;
  return validateSchemas(productsSchemas, product.products);
};

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

export const detailProdut = async (id: number) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  const productDetail = await res.data;
  return validateSchemas(productSchemas, productDetail);
};

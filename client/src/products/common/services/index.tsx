/** @format */

import axios from "axios";
import { validateSchemas } from "../utils";
import {
  deleteProductSchemas,
  productSchemas,
  productsSchemas,
} from "../schemas/productsSchemas";
import { productsRouter } from "@/util/api";
import { IProduct } from "../interface";

export const getListProduct = async () => {
  const res = await axios.get(productsRouter);
  const product = await res.data;
  return validateSchemas(productsSchemas, product);
};

export const postProduct = async (newProduct: IProduct) => {
  const res = await axios.post(productsRouter, newProduct);
  const product = await res.data;
  return validateSchemas(productsSchemas, product);
};

export const editProduct = async (editProduct: IProduct, id: number) => {
  const res = await axios.put(`${productsRouter}/${id}`, editProduct);
  const product = await res.data;
  return validateSchemas(productSchemas, product);
};

export const deleteProduct = async (deleteProductId: number) => {
  const res = await axios.delete(`${productsRouter}/${deleteProductId}`);
  const product = await res.data;
  return validateSchemas(productSchemas, product);
};

export const detailProdut = async (id: number) => {
  const res = await axios.get(`${productsRouter}/${id}`);
  const productDetail = await res.data;
  return validateSchemas(deleteProductSchemas, productDetail);
};

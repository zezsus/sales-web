/** @format */

import { cartsRouter } from "@/util/api";
import axios from "axios";
import {
  productSchemas,
  productsSchemas,
} from "../../../common/schemas/productsSchemas";
import { validateSchemas } from "../../../common/utils";
import { IProduct } from "../../../common/interface";
import { deleteCartSchemas } from "@/products/cart/common/schemas";

export const getCartData = async () => {
  const res = await axios.get(cartsRouter);
  const cartItems = res.data;
  return validateSchemas(productsSchemas, cartItems);
};

export const postCartData = async (cartItem: IProduct) => {
  const res = await axios.post(cartsRouter, cartItem);
  const cartItems = res.data;
  return validateSchemas(productSchemas, cartItems);
};

export const deleteCartData = async (cartItemId: string) => {
  const res = await axios.delete(`${cartsRouter}/${cartItemId}`);
  const cartItem = await res.data;
  return validateSchemas(deleteCartSchemas, cartItem);
};

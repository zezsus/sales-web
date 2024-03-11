/** @format */

import { InferType } from "yup";
import { productSchemas } from "../schemas/productsSchemas";

export interface IProductState {
  buyItem: Array<IProduct>;
  buyNumberProduct: number;
  isShowModal: boolean;
}

export interface ISearchProductState {
  searchName: string;
  selectedType: string;
  selectedPrice: string;
}

export type IProduct = InferType<typeof productSchemas>;

export interface ICartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  userId: string;
}

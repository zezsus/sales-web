/** @format */

import { InferType } from "yup";
import { productSchemas } from "../schemas/productsSchemas";

export interface IProductState {
  numberItem: number;
  buyItem: Array<IProduct>;
  listCartItem: Array<IProduct>;
  isDeleteCartItem: boolean;
  deleteItemId: number;
  isShowModal: boolean;
  numberBuyProduct: number;
}

export interface ISearchProductState {
  searchName: string;
  selectedType: string;
  selectedPrice: string;
}

export interface IMyProductState {
  myShopProduct: Array<IProduct>;
  editMyProduct: Array<IProduct>;
  deleteMyProductId: number;
  isShowAddMyProduct: boolean;
  isShowEditMyProduct: boolean;
  isShowDeleteMyProduct: boolean;
}

export type IProduct = InferType<typeof productSchemas>;

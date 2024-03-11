/** @format */

import { categorysRouter } from "@/util/api";
import axios from "axios";
import { validataSchemas } from "../utils";
import { ICategory } from "../interfaces/category.interface";
import { categorySchemas, listCategorySchemas } from "../schemas/category.schemas";

export const getListCategory = async () => {
  const res = await axios.get(categorysRouter);
  const listCategory: ICategory = await res.data;
  return validataSchemas(listCategorySchemas, listCategory);
};

export const postNewCategory = async (newCategory: ICategory) => {
  const res = await axios.post(categorysRouter, newCategory);
  const category: ICategory = await res.data;

  return validataSchemas(categorySchemas, category);
};

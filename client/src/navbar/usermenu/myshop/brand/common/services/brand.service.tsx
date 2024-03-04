/** @format */

import { brandsRouter } from "@/util/api";
import axios from "axios";
import { IBrand } from "../interfaces/brand.interface";
import { validataSchemas } from "../utils";
import { brandSchemas, listBrandSchemas } from "../schemas/brand.schemas";

export const getListBrand = async () => {
  const res = await axios.get(brandsRouter);
  const listBrand: IBrand = await res.data;
  return validataSchemas(listBrandSchemas, listBrand);
};

export const postNewBrand = async (newBrand: IBrand) => {
  const res = await axios.post(brandsRouter, newBrand);
  const listBrand: IBrand = await res.data;
  return validataSchemas(brandSchemas, listBrand);
};

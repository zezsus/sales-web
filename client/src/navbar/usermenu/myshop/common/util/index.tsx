/** @format */

import { IProduct } from "@/products/common/interface";

export const validateMyProductSchemas = async (
  schemas: any,
  data: Array<IProduct>
) => {
  try {
    return schemas.validate(data);
  } catch (error) {
    throw error;
  }
};

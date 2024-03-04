/** @format */

import { IBrand } from "../interfaces/category.interface";

export const validataSchemas = (schemas: any, data: IBrand) => {
  try {
    return schemas.validate(data);
  } catch (error) {
    throw error;
  }
};

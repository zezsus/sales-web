/** @format */

import { IProduct } from "../interface";

export const validateSchemas = async (schemas: any, data: Array<IProduct>) => {
  try {
    return schemas.validate(data);
  } catch (error) {
    throw error;
  }
};

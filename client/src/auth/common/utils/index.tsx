/** @format */

import { IUser } from "../interfaces";

export const validateSchemas = async (schemas: any, data: Array<IUser>) => {
  try {
    return schemas.validate(data);
  } catch (error) {
    throw error;
  }
};

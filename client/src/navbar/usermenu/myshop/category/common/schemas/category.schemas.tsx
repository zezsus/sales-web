/** @format */

import * as Yup from "yup";

export const categorySchemas = Yup.object().shape({
  id: Yup.number().required(),
  category: Yup.string().required(),
});

export const listCategorySchemas = Yup.array().of(categorySchemas);

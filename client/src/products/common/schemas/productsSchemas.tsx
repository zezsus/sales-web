/** @format */

import * as Yup from "yup";

export const productSchemas = Yup.object().shape({
  id: Yup.number().required(),
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
  rating: Yup.number().required(),
  brand: Yup.string().required(),
  category: Yup.string().required(),
  thumbnail: Yup.string().required(),
  userId: Yup.number().required(),
});

export const deleteProductSchemas = Yup.object().shape({
  id: Yup.number().notRequired(),
  title: Yup.string().notRequired(),
  description: Yup.string().notRequired(),
  price: Yup.number().notRequired(),
  rating: Yup.number().notRequired(),
  brand: Yup.string().notRequired(),
  category: Yup.string().notRequired(),
  thumbnail: Yup.string().notRequired(),
});

export const productsSchemas = Yup.array().of(productSchemas);

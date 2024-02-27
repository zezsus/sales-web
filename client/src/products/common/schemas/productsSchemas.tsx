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
  thumbnail: Yup.string().url().required(),
  discountPercentage: Yup.number().nullable(),
  stock: Yup.number().nullable(),
  images: Yup.array().of(Yup.string().url()).nullable(),
});

export const productsSchemas = Yup.array().of(productSchemas);

/** @format */
import * as Yup from "yup";
export const deleteMyProductSchemas = Yup.object().shape({
  id: Yup.number().notRequired(),
  title: Yup.string().notRequired(),
  description: Yup.string().notRequired(),
  price: Yup.number().notRequired(),
  rating: Yup.number().notRequired(),
  brand: Yup.string().notRequired(),
  category: Yup.string().notRequired(),
  thumbnail: Yup.string().notRequired(),
});

/** @format */
import * as Yup from "yup";

export const userSchemas = Yup.object().shape({
  id: Yup.string().required(),
  username: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().max(6).required(),
  address: Yup.string().nullable(),
  phoneNumber: Yup.string().nullable(),
});

export const usersSchemas = Yup.array().of(userSchemas);

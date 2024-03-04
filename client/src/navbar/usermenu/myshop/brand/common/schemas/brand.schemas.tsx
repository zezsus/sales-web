/** @format */

import * as Yup from "yup";

export const brandSchemas = Yup.object().shape({
  id: Yup.number().required(),
  brand: Yup.string().required(),
});

export const listBrandSchemas = Yup.array().of(brandSchemas);

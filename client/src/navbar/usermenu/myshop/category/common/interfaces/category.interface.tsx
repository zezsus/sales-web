/** @format */

import { InferType } from "yup";
import { categorySchemas } from "../schemas/category.schemas";

export type ICategory = InferType<typeof categorySchemas>;

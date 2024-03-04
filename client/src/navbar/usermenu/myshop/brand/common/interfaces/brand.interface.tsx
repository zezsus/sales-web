/** @format */

import { InferType } from "yup";
import { brandSchemas } from "../schemas/brand.schemas";

export type IBrand = InferType<typeof brandSchemas>;

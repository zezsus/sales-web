/** @format */
"use client";

import { Container, Stack } from "@mui/material";
import {
  ProductBody,
  ProductHeader,
} from "@/products/home/common/assets/productpage";
import ListProductElement from "../elements/listproduct.element";
import SearchProductElement from "../elements/searchproduct.emelent";

const ProductComponent = () => {
  return (
    <Stack>
      <Container>
        <ProductHeader>
          <SearchProductElement />
        </ProductHeader>
        <ProductBody>
          <ListProductElement />
        </ProductBody>
      </Container>
    </Stack>
  );
};
export default ProductComponent;

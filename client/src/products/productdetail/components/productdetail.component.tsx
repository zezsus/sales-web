/** @format */
"use client";

import SpinnerComponent from "@/components/spinnercomponent";
import { useGetProductDetailData } from "@/products/common/hooks";
import { Box, CardActions, Container, Typography } from "@mui/material";
import { ContentProduct, ProductDetail } from "../common/assets";
import ContentProductElement from "../elements/contentproduct.element";
import ActionElement from "../elements/action.element";
import ButtonBackProductDetailElement from "@/products/productdetail/elements/buttonbackproductdetail.element";
import ImageProductElement from "@/products/elements/imageproduct.element";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import ToastMessageComponent from "@/components/toasmessage.component";

const ProductDetailComponent = ({ idProduct }: any) => {
  const getDataProdutDetail = useGetProductDetailData(idProduct);
  if (getDataProdutDetail.isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <Box>
      <ToastMessageComponent />
      <Container>
        <ButtonBackProductDetailElement />{" "}
        <ProductDetail>
          <ContentProduct>
            <ImageProductElement
              imageProduct={getDataProdutDetail.data.thumbnail}
              titleProduct={getDataProdutDetail.data.title}
              style={{ maxWidth: "400px" }}
            />
            <Box>
              <ContentProductElement
                titleProduct={getDataProdutDetail.data.title}
                descriptionProduct={getDataProdutDetail.data.description}
                priceProduct={getDataProdutDetail.data.price}
                ratingProduct={getDataProdutDetail.data.rating}
              />
              <CardActions>
                <ActionElement dataProduct={getDataProdutDetail.data} />
              </CardActions>
            </Box>
          </ContentProduct>
        </ProductDetail>
      </Container>
    </Box>
  );
};

export default ProductDetailComponent;

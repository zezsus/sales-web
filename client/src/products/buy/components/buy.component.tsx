/** @format */
"use client";

import { RootState } from "@/app/store";
import SpinnerComponent from "@/components/spinnercomponent";
import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ButtonBackBuyElement from "../elements/buttonbackbuy.element";
import {
  BuyPageBody,
  BuyPageDetail,
  BuyPageFooter,
  BuyPageHeader,
} from "@/products/common/assets/buypage";
import ImageProductElement from "@/products/elements/imageproduct.element";
import BuyContentElement from "../elements/buycontent.element";
import ToTalProduct from "../elements/total.element";
import BuyButtonElement from "../elements/buttonbuy.element";
import ModalSuccessElement from "../elements/modalsuccess.element";

const ProductBuyComponent = () => {
  const buyItem: any = useSelector(
    (state: RootState) => state.products.buyItem
  );

  if (!buyItem) {
    return <SpinnerComponent />;
  }

  return (
    <Box>
      <ButtonBackBuyElement idProductBuy={buyItem.id} />
      <Container>
        <BuyPageDetail p={2}>
          <BuyPageHeader>
            <ImageProductElement
              imageProduct={buyItem.thumbnail}
              titleProduct={buyItem.title}
              style={{ minHeight: 100, width: 200 }}
            />
            <Typography variant='h5'>{buyItem?.title}</Typography>
          </BuyPageHeader>
          <BuyPageBody>
            <BuyContentElement priceBuyProduct={buyItem.price} />
            <hr />
            <ToTalProduct />
            <hr />
          </BuyPageBody>
          <BuyPageFooter>
            <BuyButtonElement />
          </BuyPageFooter>
        </BuyPageDetail>
      </Container>
      <ModalSuccessElement />
    </Box>
  );
};
export default ProductBuyComponent;

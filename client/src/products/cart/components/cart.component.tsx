/** @format */

import { RootState } from "@/app/store";
import { Box, Container, Stack, styled } from "@mui/material";
import { useSelector } from "react-redux";
import CartNotFoundElement from "../elements/cartnotfound.element";
import CartInfoElement from "../elements/cartinfo.element";
import DeleteCartItemComponent from "@/products/cart/components/deletecartitemcomponent";
import { IProduct } from "@/products/common/interface";

const CartComponent = () => {
  const listCartItem = useSelector(
    (state: RootState) => state.products.listCartItem
  );
  const showDelete = useSelector(
    (state: RootState) => state.products.isDeleteCartItem
  );
  return (
    <Container>
      <Cart>
        {listCartItem.length === 0 ? (
          <CartNotFoundElement />
        ) : (
          <Stack spacing={2} p={1}>
            {listCartItem?.map((item: IProduct) => {
              return <CartInfoElement cartProduct={item} key={item.id} />;
            })}
          </Stack>
        )}
      </Cart>
      {showDelete && <DeleteCartItemComponent />}
    </Container>
  );
};
export default CartComponent;

const Cart = styled(Box)({
  maxHeight: "89vh",
  overflow: "auto",
});

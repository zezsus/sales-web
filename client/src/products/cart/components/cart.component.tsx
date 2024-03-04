/** @format */

import { RootState } from "@/app/store";
import { Container, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import CartNotFoundElement from "../elements/cartnotfound.element";
import CartInfoElement from "../elements/cartinfo.element";
import DeleteCartItemComponent from "@/products/cart/components/deletecartitemcomponent";
import { Cart } from "../common/assets/cartinfo";
import ToastMessageComponent from "@/components/toasmessage.component";
import { IMyProduct } from "@/navbar/usermenu/myshop/common/interfaces/myshop.interface";
import { useGetCartItem } from "../common/hooks/cartproducts";

const CartComponent = () => {
  const listCartItem = useGetCartItem();
  const showDelete = useSelector(
    (state: RootState) => state.carts.isShowDeleteCart
  );
  return (
    <Container>
      <ToastMessageComponent />
      <Cart>
        {listCartItem.data && listCartItem.data.length === 0 ? (
          <CartNotFoundElement />
        ) : (
          <Stack spacing={2} p={1}>
            {listCartItem.data?.map((item: IMyProduct) => {
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

/** @format */

import { RootState } from "@/app/store";
import { Container, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import CartNotFoundElement from "../elements/cartnotfound.element";
import CartInfoElement from "../elements/cartinfo.element";
import DeleteCartItemComponent from "@/products/cart/components/deletecartitemcomponent";
import { Cart } from "../common/assets/cartinfo";
import ToastMessageComponent from "@/components/toasmessage.component";
import { useGetCartItem } from "../common/hooks/cartproducts";
import { IProduct } from "@/products/common/interface";
import { useEffect, useState } from "react";
import { IUser } from "@/auth/common/interfaces";

const CartComponent = () => {
  const [listCart, setListCart] = useState<IProduct[]>([]);
  const listCartItem = useGetCartItem();
  const showDelete = useSelector(
    (state: RootState) => state.carts.isShowDeleteCart
  );
  const [userId, setUserId] = useState<string>("");
  useEffect(() => {
    const user: IUser[] = JSON.parse(localStorage.getItem("user"));
    user?.map((user: IUser) => {
      setUserId(user.id);
    });
  });

  useEffect(() => {
    if (listCartItem.data) {
      const cart = listCartItem.data?.filter(
        (item: IProduct) => item.userId === userId
      );
      setListCart(cart);
    }
  }, [listCartItem.data, userId]);

  return (
    <Container>
      <ToastMessageComponent />
      <Cart>
        {listCart && listCart.length === 0 ? (
          <CartNotFoundElement />
        ) : (
          <Stack spacing={2} p={1}>
            {listCart?.map((item: IProduct) => {
              return (
                <CartInfoElement
                  userId={userId}
                  cartProduct={item}
                  key={item.id}
                />
              );
            })}
          </Stack>
        )}
      </Cart>
      {showDelete && <DeleteCartItemComponent />}
    </Container>
  );
};
export default CartComponent;

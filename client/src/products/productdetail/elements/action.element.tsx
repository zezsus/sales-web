/** @format */
"use client";

import { AppDispatch } from "@/app/store";
import {
  useGetCartItem,
  usePostCartItem,
} from "@/products/cart/common/hooks/cartproducts";
import { ICartItem, IProduct } from "@/products/common/interface";
import { setBuyItem } from "@/products/common/redux/productSlice";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  setColor,
  setIsMessage,
  setMessage,
} from "@/auth/common/redux/userSlice";
import { useEffect, useState } from "react";
import { IUser } from "@/auth/common/interfaces";
import { v4 as uuidv4 } from "uuid";

const ActionElement = ({ dataProduct }: any) => {
  const [userId, setUserId] = useState<string>("");
  const [cartItemId, setCartItemId] = useState<string>(uuidv4());
  const router = useRouter();
  const postCartItem = usePostCartItem();
  const getCartItem = useGetCartItem();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const listUser: IUser[] = JSON.parse(localStorage.getItem("user"));
      listUser?.map((user: IUser) => setUserId(user.id));
    }
  }, []);

  const handleAddToCart = (cartItem: ICartItem) => {
    if (!localStorage.getItem("user")) {
      router.push("/auth/login");
      return;
    }

    const newCartItem: ICartItem = {
      ...cartItem,
      id: cartItemId,
      userId: userId,
    };

    const checkCartItem = getCartItem.data.filter(
      (item: any) => item.userId === userId && item.title === newCartItem.title
    );

    if (checkCartItem.length > 0) {
      dispatch(setIsMessage(true));
      dispatch(setMessage("Products already in the cart."));
      dispatch(setColor("error"));
    } else {
      dispatch(setIsMessage(true));
      dispatch(setMessage("Add to cart successfully."));
      dispatch(setColor("success"));
      postCartItem.mutate(newCartItem);
    }
  };

  const handleBuyNow = (buyItem: IProduct) => {
    if (localStorage.getItem("user")) {
      router.push("/buy");
      dispatch(setBuyItem(buyItem));
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button variant='contained' onClick={() => handleBuyNow(dataProduct)}>
        Buy now
      </Button>
      <Button
        variant='contained'
        color='warning'
        onClick={() => handleAddToCart(dataProduct)}>
        Add to cart
      </Button>
    </Box>
  );
};
export default ActionElement;

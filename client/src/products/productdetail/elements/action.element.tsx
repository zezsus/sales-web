/** @format */
"use client";

import { AppDispatch } from "@/app/store";
import { IProduct } from "@/products/common/interface";
import { setBuyItem, setCartItem } from "@/products/common/redux/productSlice";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const ActionElement = ({ dataProduct }: any) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (cartItem: IProduct) => {
    if (!localStorage.getItem("user")) {
      router.push("/auth/login");
      return;
    }
    dispatch(setCartItem(cartItem));
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

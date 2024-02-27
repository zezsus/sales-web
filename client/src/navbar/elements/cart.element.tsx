/** @format */
"use client";

import { IconButton, Tooltip } from "@mui/material";
import { NumberItem } from "../common/assets/navbarcomponent";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useRouter } from "next/navigation";

const CartElement = () => {
  const numberItem: number = useSelector(
    (state: RootState) => state.products.numberItem
  );
  const [checkLocalStorage, setCheckLocalStorage] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setCheckLocalStorage(true);
    } else {
      setCheckLocalStorage(false);
    }
  }, [checkLocalStorage]);

  const handleClickCart = () => {
    if (checkLocalStorage) {
      router.push("/cart");
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <IconButton
      onClick={() => {
        handleClickCart();
      }}>
      <Tooltip title='Cart' arrow>
        <AddShoppingCartIcon fontSize='large' color='secondary' />
      </Tooltip>

      <NumberItem variant='body2' color='text.secondary'>
        {numberItem !== 0 ? numberItem : ""}
      </NumberItem>
    </IconButton>
  );
};

export default CartElement;

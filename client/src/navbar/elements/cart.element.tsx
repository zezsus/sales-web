/** @format */
"use client";

import { IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

const CartElement = () => {
  const [checkLocalStorage, setCheckLocalStorage] = useState<boolean>(false);
  const isLogin = useSelector((state: RootState) => state.users.isLogin);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setCheckLocalStorage(true);
    } else {
      setCheckLocalStorage(false);
    }
  }, [checkLocalStorage]);

  const handleClickCart = () => {
    if (!checkLocalStorage && !isLogin) {
      router.push("/auth/login");
    } else {
      router.push("/cart");
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
    </IconButton>
  );
};

export default CartElement;

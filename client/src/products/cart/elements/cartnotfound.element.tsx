/** @format */
"use client";

import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const CartNotFoundElement = () => {
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      sx={{
        flexDirection: "column",
      }}
      p={2}>
      <Typography variant='h6'>Your shopping cart is empty</Typography>
      <Button variant='contained' onClick={() => router.push("/")}>
        Home
      </Button>
    </Box>
  );
};

export default CartNotFoundElement;

/** @format */

import { Box, Card, CardContent, styled } from "@mui/material";

export const Cart = styled(Box)({
  maxHeight: "89vh",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
});

export const CartItem = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "10px",
  gap: "1rem",
});

export const CartContent = styled(CardContent)({
  width: "50%",
  display: "flex",
  gap: "2rem",
});

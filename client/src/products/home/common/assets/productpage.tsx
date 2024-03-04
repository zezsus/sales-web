/** @format */

import { Box, CardMedia, Stack, styled } from "@mui/material";

export const ProductHeader = styled(Stack)({
  padding: "1rem 0 0.5rem 1rem",
  display: "flex",
  justifyContent: "flex-start",
});

export const ProductBody = styled(Box)({
  maxHeight: "79vh",
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

export const ListProducts = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  gap: "1rem",
  padding: "0.5rem 1rem 1rem 1rem",
  boxSizing: "border-box",
});

export const ImageProduct = styled(CardMedia)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 200,
  width: "auto",
});

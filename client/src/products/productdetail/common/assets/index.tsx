/** @format */

import { Box, Card, Typography, styled } from "@mui/material";

export const ProductDetail = styled(Card)({
  boxSizing: "border-box",
  maxHeight: "83vh",
  padding: "0.5rem",
  overflow: "auto",
  boxShadow: "none",
});

export const ContentProduct = styled(Box)({
  display: "flex",
  gap: "2rem",
});

export const Rating = styled(Typography)({
  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
});

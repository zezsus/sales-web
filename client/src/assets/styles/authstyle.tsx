/** @format */

import { Box, Typography, styled } from "@mui/material";

export const Div = styled(Box)({
  backgroundColor: "gray",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
});

export const AuthForm = styled(Box)({
  width: 350,
  minHeight: 300,
  borderRadius: 10,
  boxShadow: "1px 1px 5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.5rem",
  padding: "2rem",
  backgroundColor: "white",
});

export const AuthHeader = styled(Typography)({
  textTransform: "uppercase",
  color: "green",
  fontWeight: "bold",
});

export const AuthBody = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "80%",
});

export const AuthFooter = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap:'0.8rem'
});

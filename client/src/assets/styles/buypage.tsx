/** @format */

import { Box, InputBase,  styled } from "@mui/material";

export const BuyPageDetail = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const BuyPageHeader = styled(Box)({
  display: "flex",
  gap: "2rem",
  alignItems: "center",
});

export const BuyPageBody = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const Counter = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: 0,
  margin: 0,
});

export const CounterInput = styled(InputBase)({
  width: 50,
  border: "1px solid black",
  paddingLeft: "10px",
  borderRadius: "5px",
});

export const BuyPageFooter = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

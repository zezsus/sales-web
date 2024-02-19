/** @format */

import { Box, styled } from "@mui/material";

export const formStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 450,
  bgcolor: "background.paper",
  borderRadius: "0.5rem",
};

export const FormHeader = styled(Box)({
  display: "flex",
  justifyContent: "center",
  color: "white",
  borderTopLeftRadius: "0.5rem",
  borderTopRightRadius: "0.5rem",
  padding: "1rem 0 1rem 0",
  textTransform: "uppercase",
});

export const FormBody = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 10,
  padding: 10,
  boxSizing: "content-box",
});
export const FormFooter = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  paddingBottom: 10,
});

/** @format */

import { Box, styled } from "@mui/material";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  borderRadius: "5px",
};

export const ModalAction = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
});

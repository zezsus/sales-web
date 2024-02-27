/** @format */
"use client";

import { Box, IconButton, InputBase, Typography, styled } from "@mui/material";

export const NavBody = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "1rem",
});

export const Search = styled("div")({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "transparent",
  marginLeft: 0,
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const SearchIconWrapper = styled(IconButton)({
  border: "none",
  borderRadius: 0,
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px",
  backgroundColor: "#DDDDDD",

  "&:hover": {
    backgroundColor: "#DDDDDD",
  },
});

export const InputSearch = styled(InputBase)({
  border: "none",
  borderTopLeftRadius: "8px",
  borderBottomLeftRadius: "8px",
  width: "50%",
  maxHeight: "max-content",
  paddingLeft: "10px",
  backgroundColor: "#DDDDDD",
});

export const NumberItem = styled(Typography)({
  position: "absolute",
  top: "5px",
  right: "0px",
});

export const NavFooter = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
});

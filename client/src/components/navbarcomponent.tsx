/** @format */

"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  InputSearch,
  NavBody,
  NavFooter,
  SearchIconWrapper,
  Search,
} from "@/assets/styles/navbarcomponent";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { useState } from "react";
import { setSearchName } from "@/app/feature/products/searchProductSlice";

const NavbarComponent = () => {
  const [nameProduct, setNameProduct] = useState("");
  const router = useRouter();
  const numberItem = useSelector(
    (state: RootState) => state.products.numberItem
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleEnterSearch = (e: any) => {
    if (e.key === "Enter") {
      handleSearchName();
    }
  };

  const handleSearchName = () => {
    dispatch(setSearchName(nameProduct));
  };

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar sx={{ display: "flex", gap: "2rem" }}>
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              variant='h5'
              onClick={() => router.push("/")}
              sx={{ cursor: "pointer" }}>
              MyWeb
            </Typography>
          </Box>
          <NavBody>
            <Search>
              <InputSearch
                placeholder='Search name...'
                value={nameProduct}
                onChange={(e: any) => setNameProduct(e.target.value)}
                onKeyDown={handleEnterSearch}
              />
              <SearchIconWrapper onClick={handleSearchName}>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
            <IconButton onClick={() => router.push("/cart")}>
              <AddShoppingCartIcon fontSize='large' color='secondary' />
              <NumberItem variant='body2' color='text.secondary'>
                {numberItem !== 0 ? numberItem : ""}
              </NumberItem>
            </IconButton>
          </NavBody>
          <NavFooter>
            <Typography component={"span"}>username</Typography>
            <Button variant='contained' color='error'>
              Logout
            </Button>
          </NavFooter>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarComponent;

const NumberItem = styled(Typography)({
  position: "absolute",
  top: "5px",
  right: "0px",
});

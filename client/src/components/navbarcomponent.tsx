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
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const NavbarComponent = () => {
  const router = useRouter();
  const numberItem = useSelector(
    (state: RootState) => state.products.numberItem
  );
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
              <InputSearch placeholder='Search name...' />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
            <IconButton>
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

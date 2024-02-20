/** @format */

"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
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
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);
  const isShowUserMenu = Boolean(userMenu);
  const router = useRouter();
  const numberItem = useSelector(
    (state: RootState) => state.products.numberItem
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserMenu(event.currentTarget);
  };
  const handleClose = () => {
    setUserMenu(null);
  };

  const handleEnterSearch = (e: any) => {
    if (e.key === "Enter") {
      handleSearchName();
    }
  };

  const handleSearchName = () => {
    dispatch(setSearchName(nameProduct));
  };

  const handleLogout = () => {
    router.push("/auth/login");
    handleClose();
  };

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar sx={{ display: "flex", gap: "2rem" }}>
          <Box display={"flex"} alignItems={"center"}>
            <Tooltip title='Home' arrow>
              <Typography
                variant='h5'
                onClick={() => router.push("/")}
                sx={{ cursor: "pointer" }}>
                MyWeb
              </Typography>
            </Tooltip>
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
              <Tooltip title='Cart' arrow>
                <AddShoppingCartIcon fontSize='large' color='secondary' />
              </Tooltip>
              <NumberItem variant='body2' color='text.secondary'>
                {numberItem !== 0 ? numberItem : ""}
              </NumberItem>
            </IconButton>
          </NavBody>
          <NavFooter>
            <Tooltip title='User Menu' arrow>
              <Typography
                component={"span"}
                sx={{ cursor: "pointer" }}
                onClick={handleClick}>
                username
              </Typography>
            </Tooltip>

            <Menu
              id='user-menu'
              anchorEl={userMenu}
              open={isShowUserMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}>
              <MenuItem
                onClick={() => {
                  router.push("/usermenu/profile");
                  handleClose();
                }}>
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  router.push("/usermenu/myshop");
                  handleClose();
                }}>
                My Shop
              </MenuItem>
              <MenuItem onClick={handleLogout}>LogOut</MenuItem>
            </Menu>
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

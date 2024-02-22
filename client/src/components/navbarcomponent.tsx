/** @format */

"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
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
import { useEffect, useState } from "react";
import { setSearchName } from "@/app/feature/products/searchProductSlice";

const NavbarComponent = () => {
  const [nameProduct, setNameProduct] = useState<string>("");
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);
  const isShowUserMenu = Boolean(userMenu);
  const [checkLogin, setCheckLogin] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const numberItem: number = useSelector(
    (state: RootState) => state.products.numberItem
  );

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setCheckLogin(true);
    }
  }, [checkLogin]);

  useEffect(() => {
    const userLoaclStorage = localStorage.getItem("userInfo");
    if (userLoaclStorage) {
      const user: IUser = JSON.parse(userLoaclStorage);
      setUsername(user?.name);
    }
  }, [username]);

  const handleClickUserName = (e: any) => {
    setUserMenu(e.currentTarget);
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
    localStorage.clear();
    router.push("/");
    setCheckLogin(false);
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
            <IconButton
              onClick={() => {
                if (!localStorage.getItem("userToken")) {
                  router.push("/auth/login");
                } else {
                  router.push("/cart");
                }
              }}>
              <Tooltip title='Cart' arrow>
                <AddShoppingCartIcon fontSize='large' color='secondary' />
              </Tooltip>
              {localStorage.getItem("userToken") ? (
                <NumberItem variant='body2' color='text.secondary'>
                  {numberItem !== 0 ? numberItem : ""}
                </NumberItem>
              ) : (
                ""
              )}
            </IconButton>
          </NavBody>
          <NavFooter>
            {!checkLogin ? (
              <Tooltip title='LogIn' arrow>
                <Button
                  variant='contained'
                  color='success'
                  onClick={() => router.push("/auth/login")}>
                  Login
                </Button>
              </Tooltip>
            ) : (
              <Tooltip title='User Menu' arrow>
                <Typography
                  component={"span"}
                  sx={{ cursor: "pointer" }}
                  onClick={handleClickUserName}>
                  {username}
                </Typography>
              </Tooltip>
            )}
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

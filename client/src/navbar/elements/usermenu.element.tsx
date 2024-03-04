/** @format */
"use client";

import { AppDispatch, RootState } from "@/app/store";
import { useGetUserData } from "@/auth/common/hook";
import { IUser } from "@/auth/common/interfaces";
import { setIsLogin } from "@/auth/common/redux/userSlice";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserMenuElement = () => {
  const [userMenu, setUserMenu] = useState<any>(null);
  const isLogin = useSelector((state: RootState) => state.users.isLogin);
  const isShowUserMenu = Boolean(userMenu);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const userData = useGetUserData();
  const isLocalStorage = localStorage.getItem("user");
  const storedUser: string | null = localStorage.getItem("user");
  const checkLoginUser: Array<IUser> = storedUser ? JSON.parse(storedUser) : [];
  const user: Array<IUser> = userData.data?.filter((user: IUser) => {
    return checkLoginUser?.find((item: IUser) => item.id === user.id);
  });

  const handleClickUserName = (e: any) => {
    setUserMenu(e.currentTarget);
  };
  const handleClose = () => {
    setUserMenu(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
    dispatch(setIsLogin(false));
    handleClose();
  };

  return (
    <Box>
      {isLocalStorage || isLogin ? (
        <Tooltip title='User Menu' arrow>
          <Typography
            component={"span"}
            sx={{ cursor: "pointer", width: "max-content" }}
            onClick={handleClickUserName}>
            {user?.length > 0 && user?.map((user: IUser) => user.username)}
          </Typography>
        </Tooltip>
      ) : (
        <Tooltip title='LogIn' arrow>
          <Button
            variant='contained'
            color='success'
            onClick={() => router.push("/auth/login")}>
            Login
          </Button>
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
    </Box>
  );
};

export default UserMenuElement;

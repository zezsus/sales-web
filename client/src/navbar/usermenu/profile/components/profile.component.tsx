/** @format */
"use client";

import { Profile } from "../common/assets/profile";
import UpdateUserElement from "../elements/updateuser.element";
import GetUserInfoElement from "../elements/getuserinfo.element";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useGetUserData } from "@/auth/common/hook";
import { useEffect, useState } from "react";
import { IUser } from "@/auth/common/interfaces";
import ChangePassWordComponent from "./changepassword.component";
import ToastMessageComponent from "@/components/toasmessage.component";
import { Box } from "@mui/material";

const ProfileComponent = () => {
  const isUpdateUser: boolean = useSelector(
    (state: RootState) => state.profileUser.isUpdateUser
  );
  const isChangePassword: boolean = useSelector(
    (state: RootState) => state.profileUser.isChangePassword
  );
  const [userInfo, setUserInfo] = useState<IUser | null>(null);
  const [userLogin, setUserLogin] = useState<any>({});

  const getUserInfo: any = useGetUserData();

  useEffect(() => {
    const userLoaclStorage = localStorage.getItem("user");
    if (userLoaclStorage) {
      const user: any = JSON.parse(userLoaclStorage);
      user.map((item: IUser) => {
        if (
          item.username !== userLogin.username ||
          item.address !== userLogin.address ||
          item.phoneNumber !== userLogin.phoneNumber
        ) {
          setUserLogin(item);
        }
      });
    }
  }, [userLogin]);

  useEffect(() => {
    if (getUserInfo.data) {
      const user = getUserInfo.data?.filter(
        (item: IUser) => item.email === userLogin.email
      );
      user?.map((item: IUser) => setUserInfo(item));
    }
  }, [getUserInfo.data, userLogin]);

  return (
    <Box>
      <ToastMessageComponent />

      <Profile>
        {isUpdateUser ? (
          <UpdateUserElement userData={userInfo} />
        ) : isChangePassword ? (
          <ChangePassWordComponent userData={userInfo} />
        ) : (
          <GetUserInfoElement userData={userInfo} />
        )}
      </Profile>
    </Box>
  );
};

export default ProfileComponent;

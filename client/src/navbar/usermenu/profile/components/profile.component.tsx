/** @format */
"use client";

import { Profile } from "../common/assets/profile";
import UpdateUserElement from "../elements/updateuser.element";
import GetUserInfoElement from "../elements/getuserinfo.element";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
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
  const [userLogin, setUserLogin] = useState<any>({});

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

  return (
    <Box>
      <ToastMessageComponent />

      <Profile>
        {isUpdateUser ? (
          <UpdateUserElement userData={userLogin} />
        ) : isChangePassword ? (
          <ChangePassWordComponent userData={userLogin} />
        ) : (
          <GetUserInfoElement userData={userLogin} />
        )}
      </Profile>
    </Box>
  );
};

export default ProfileComponent;

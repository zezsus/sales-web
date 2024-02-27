/** @format */
"use client";

import { Profile } from "../common/assets/profile";
import UpdateUserElement from "../elements/updateuser.element";
import GetUserInfoElement from "../elements/getuserinfo.element";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const ProfileComponent = () => {
  const isUpdateUser = useSelector(
    (state: RootState) => state.profileUser.isUpdateUser
  );

  return (
    <Profile>
      {isUpdateUser ? <UpdateUserElement /> : <GetUserInfoElement />}
    </Profile>
  );
};

export default ProfileComponent;

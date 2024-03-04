/** @format */

import { Box, Button, TextField } from "@mui/material";
import { styleBox } from "../common/assets/profile";
import { FormBody, FormFooter } from "../../common/assets/formstyle";
import { useState } from "react";
import { IUser } from "@/auth/common/interfaces";
import { useUpdateUser } from "../common/hook/profile.hook";
import { setUpdateUser } from "../common/redux/profileSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { useGetUserData } from "@/auth/common/hook";
import {
  setColor,
  setIsMessage,
  setMessage,
} from "@/auth/common/redux/userSlice";

const UpdateUserElement = ({ userData }: any) => {
  const [userInfo, setUserInfo] = useState<IUser>(userData);

  const dispatch = useDispatch<AppDispatch>();

  const updateUserMutation = useUpdateUser(userInfo.id);
  const getUserData = useGetUserData();

  const onChangeUserInfo = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    const updateUser = {
      ...userInfo,
    };
    updateUserMutation.mutate(updateUser, {
      onSuccess: () => {
        getUserData.refetch();
      },
    });
    dispatch(setIsMessage(true));
    dispatch(setMessage("Update user success."));
    dispatch(setColor("success"));
    dispatch(setUpdateUser(false));
  };

  return (
    <Box width={500} sx={styleBox}>
      <FormBody>
        <TextField
          label='Name'
          variant='outlined'
          size='small'
          value={userInfo.username}
          name='username'
          onChange={onChangeUserInfo}
        />
        <TextField
          label='Address'
          variant='outlined'
          size='small'
          value={userInfo.address}
          name='address'
          onChange={onChangeUserInfo}
        />
        <TextField
          label='Phone Number'
          size='small'
          variant='outlined'
          value={userInfo.phoneNumber}
          name='phoneNumber'
          onChange={onChangeUserInfo}
        />
      </FormBody>
      <hr></hr>
      <FormFooter mt={5}>
        <Button variant='contained' color='warning' onClick={handleSave}>
          Save
        </Button>
      </FormFooter>
    </Box>
  );
};

export default UpdateUserElement;

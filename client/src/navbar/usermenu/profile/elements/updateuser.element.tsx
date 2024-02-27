/** @format */

import { Box, Button, TextField } from "@mui/material";
import { styleBox } from "../common/assets/profile";
import { FormBody, FormFooter } from "../../common/assets/formstyle";
import { useEffect, useState } from "react";
import { IUser } from "@/auth/common/interfaces";
import { useGetUserData } from "@/auth/common/hook";
import { useUpdateUser } from "../common/hook";
import { setUpdateUser } from "../common/redux/profileSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";

const UpdateUserElement = () => {
  const [userInfo, setUserInfo] = useState<IUser>({
    id: "",
    username: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });
  const [userLogin, setUserLogin] = useState<any>({});

  const dispatch = useDispatch<AppDispatch>();
  const getUser = useGetUserData();

  const updateUserMutation = useUpdateUser();

  useEffect(() => {
    const user = getUser?.data?.filter(
      (user: IUser) => user.email === userLogin.email
    );
    user?.map((item: IUser) => setUserInfo(item));
  }, []);

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

  const onChangeUserInfo = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    const updateUser = {
      id: userInfo.id,
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
      address: userInfo.address,
      phoneNumber: userInfo.phoneNumber,
    };
    updateUserMutation.mutate(updateUser);
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

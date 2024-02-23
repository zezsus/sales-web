/** @format */
"use client";

import { FormBody, FormFooter } from "@/assets/styles/formstyle";
import SpinnerComponent from "@/components/spinnercomponent";
import { getDataUser, updateUser } from "@/services/auth/authServices";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [update, setUpdate] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IUser>({
    id: "",
    username: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });
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

  const { data, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getDataUser,
  });

  const updateUserMutation = useMutation((user: any) =>
    updateUser(userInfo.id, user)
  );

  useEffect(() => {
    const user = data?.filter((user: IUser) => user.email === userLogin.email);
    user?.map((item: IUser) => setUserInfo(item));
  }, [data]);

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
    setUpdate(false);
  };

  if (updateUserMutation.isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <Profile>
      {update ? (
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
      ) : (
        <Box width={500} sx={styleBox}>
          <FormBody>
            <Typography variant='body1'>name: {userInfo?.username}</Typography>
            <Typography variant='body1'>address:{userInfo?.address}</Typography>
            <Typography variant='body1'>
              phone number:{userInfo?.phoneNumber}
            </Typography>
          </FormBody>
          <hr />
          <FormFooter mt={5}>
            <Button
              variant='contained'
              color='warning'
              onClick={() => setUpdate(true)}>
              Update
            </Button>
            <Button variant='contained'>Change Password</Button>
          </FormFooter>
        </Box>
      )}
    </Profile>
  );
};

export default ProfilePage;

const Profile = styled(Box)({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const styleBox = {
  boxShadow: 10,
  py: 5,
  px: 3,
  borderRadius: 2,
};

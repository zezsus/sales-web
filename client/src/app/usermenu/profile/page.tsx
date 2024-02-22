/** @format */
"use client";

import { FormBody, FormFooter } from "@/assets/styles/formstyle";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [update, setUpdate] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IUser>({
    name: "",
    address: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const userLoaclStorage = localStorage.getItem("userInfo");
    if (userLoaclStorage) {
      const user: IUser = JSON.parse(userLoaclStorage);
      if (
        user.name !== userInfo.name ||
        user.address !== userInfo.address ||
        user.phoneNumber !== userInfo.phoneNumber
      ) {
        setUserInfo(user);
      }
    }
  }, [userInfo]);

  const onChangeUserInfo = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    const updateUser = {
      name: userInfo.name,
      address: userInfo.address,
      phoneNumber: userInfo.phoneNumber,
    };
    setUserInfo(updateUser);

    console.log(userInfo);

    setUpdate(false);
  };

  return (
    <Profile>
      {update ? (
        <Box width={500}>
          <FormBody>
            <TextField
              label='Name'
              variant='outlined'
              size='small'
              value={userInfo.name}
              name='name'
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
          <FormFooter mt={5}>
            <Button variant='contained' color='warning' onClick={handleSave}>
              Save
            </Button>
          </FormFooter>
        </Box>
      ) : (
        <Box width={500}>
          <FormBody>
            <Typography variant='body1'>name: {userInfo?.name}</Typography>
            <Typography variant='body1'>address:{userInfo?.address}</Typography>
            <Typography variant='body1'>
              phone number:{userInfo?.phoneNumber}
            </Typography>
          </FormBody>
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

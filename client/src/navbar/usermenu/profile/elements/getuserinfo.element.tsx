/** @format */

import { IUser } from "@/auth/common/interfaces";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { styleBox } from "../common/assets/profile";
import { FormBody, FormFooter } from "../../common/assets/formstyle";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { setUpdateUser } from "../common/redux/profileSlice";

const GetUserInfoElement = () => {
  const [userInfo, setUserInfo] = useState<IUser>({
    id: "",
    username: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });

  const dispatch = useDispatch<AppDispatch>();

  return (
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
          onClick={() => dispatch(setUpdateUser(true))}>
          Update
        </Button>
        <Button variant='contained'>Change Password</Button>
      </FormFooter>
    </Box>
  );
};

export default GetUserInfoElement;

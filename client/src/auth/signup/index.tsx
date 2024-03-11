/** @format */
"use client";

import {
  AuthBody,
  AuthFooter,
  AuthForm,
  AuthHeader,
  Div,
} from "@/auth/common/assets/authstyle";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetUserData, usePostNewtUser } from "../common/hook";
import { stylePassword } from "../common/assets/signupstyle";
import { IUser } from "../common/interfaces";
import { setColor, setIsMessage, setMessage } from "../common/redux/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import ToastMessageComponent from "@/components/toasmessage.component";
import { v4 as uuidv4 } from "uuid";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [comfirmPassword, setComfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const postUser = usePostNewtUser();
  const listUser = useGetUserData();

  const handleSignUp = async () => {
    if (!username || !email || !password || !comfirmPassword) {
      dispatch(setIsMessage(true));
      dispatch(setMessage("Please complete all the required fields"));
      dispatch(setColor("error"));
      return;
    }
    if (password !== comfirmPassword) {
      dispatch(setIsMessage(true));
      dispatch(setMessage("Password and Confirm Password do not match"));
      dispatch(setColor("error"));
      return;
    }

    if (listUser.data) {
      const checkUser = listUser.data?.filter(
        (user: IUser) => user.email === email
      );

      if (checkUser.length > 0) {
        dispatch(setIsMessage(true));
        dispatch(setMessage("Email already"));
        dispatch(setColor("error"));
        return;
      }
    }

    const newUser: IUser = {
      id: uuidv4(),
      username,
      email,
      password,
      address: "",
      phoneNumber: "",
    };
    postUser.mutate(newUser);
    setUsername("");
    setEmail("");
    setPassword("");
    setComfirmPassword("");
    dispatch(setIsMessage(true));
    dispatch(setMessage("SignUp successfully"));
    dispatch(setColor("success"));
  };

  return (
    <Div>
      <ToastMessageComponent />
      <AuthForm>
        <AuthHeader variant='h5'>Sign Up</AuthHeader>
        <AuthBody>
          <TextField
            variant='outlined'
            label='UserName'
            size='small'
            fullWidth
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
          />
          <TextField
            type='email'
            variant='outlined'
            label='Email'
            size='small'
            fullWidth
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          {showPassword ? (
            <Box sx={stylePassword}>
              <TextField
                variant='outlined'
                label='Password'
                size='small'
                fullWidth
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <TextField
                variant='outlined'
                label='Comfirm Password'
                size='small'
                fullWidth
                value={comfirmPassword}
                onChange={(e: any) => setComfirmPassword(e.target.value)}
              />
            </Box>
          ) : (
            <Box sx={stylePassword}>
              <TextField
                type='password'
                variant='outlined'
                label='Password'
                size='small'
                fullWidth
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <TextField
                type='password'
                variant='outlined'
                label='Comfirm Password'
                size='small'
                fullWidth
                value={comfirmPassword}
                onChange={(e: any) => setComfirmPassword(e.target.value)}
              />
            </Box>
          )}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox onClick={() => setShowPassword(!showPassword)} />
              }
              label='Show Password'
            />
          </FormGroup>
        </AuthBody>
        <AuthFooter>
          <Button variant='contained' color='success' onClick={handleSignUp}>
            Sign Up
          </Button>
          <Typography
            variant='body1'
            sx={{ display: "flex", alignItems: "center" }}>
            {`If you have account`}
            <Button onClick={() => router.push("/auth/login")}>Login</Button>
          </Typography>
        </AuthFooter>
      </AuthForm>
    </Div>
  );
};
export default SignUpPage;

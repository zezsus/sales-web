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
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useGetUserData } from "../common/hook";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import {
  setColor,
  setIsLogin,
  setIsMessage,
  setMessage,
} from "../common/redux/userSlice";
import ToastMessageComponent from "@/components/toasmessage.component";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const getDataUser = useGetUserData();

  const handleLogin = async () => {
    if (!email || !password) {
      dispatch(setIsMessage(true));
      dispatch(setMessage("Please complete all the required fields"));
      dispatch(setColor("error"));
      return;
    }

    if (getDataUser.data) {
      const checkUser = getDataUser.data?.filter(
        (user: any) => user.email === email && user.password === password
      );

      if (checkUser.length === 0) {
        dispatch(setIsMessage(true));
        dispatch(setMessage("User not found"));
        dispatch(setColor("error"));
        return;
      }

      router.push("/product");
      if (!localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify(checkUser));
      }
      dispatch(setIsLogin(true));
    }
  };

  return (
    <Div>
      <ToastMessageComponent />
      <AuthForm>
        <AuthHeader variant='h5'>Login In</AuthHeader>
        <AuthBody>
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
            <TextField
              variant='outlined'
              label='Password'
              size='small'
              fullWidth
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          ) : (
            <TextField
              type='password'
              variant='outlined'
              label='Password'
              size='small'
              fullWidth
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
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
          <Button variant='contained' color='success' onClick={handleLogin}>
            Login
          </Button>
          <Typography
            variant='body1'
            sx={{ display: "flex", alignItems: "center" }}>
            {`If you don't account`}
            <Button onClick={() => router.push("/auth/signup")}>SignUp</Button>
          </Typography>
        </AuthFooter>
      </AuthForm>
    </Div>
  );
};
export default LoginPage;

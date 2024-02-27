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

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [comfirmPassword, setComfirmPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const postUser = usePostNewtUser();
  const listUser = useGetUserData();

  const handleSignUp = async () => {
    if (!username || !email || !password || !comfirmPassword) {
      setErrorMsg("Please complete all the required fields");
      setTimeout(() => setErrorMsg(""), 3000);
      return;
    }
    if (password !== comfirmPassword) {
      setErrorMsg("Password and Confirm Password do not match");
      setTimeout(() => setErrorMsg(""), 3000);
      return;
    }

    if (listUser.data) {
      const checkUser = listUser.data?.filter(
        (user: IUser) => user.email === email
      );

      if (checkUser.length > 0) {
        setErrorMsg("Email already");
        setTimeout(() => setErrorMsg(""), 3000);
        return;
      }
    }

    const newUser: IUser = {
      id: Math.random().toString(36).substr(2, 10),
      username,
      email,
      password,
    };
    postUser.mutate(newUser);
    router.push("/auth/login");
  };

  return (
    <Div>
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
          <Typography variant='body2' color={"error"}>
            {errorMsg}
          </Typography>
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

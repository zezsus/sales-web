/** @format */
"use client";

import {
  AuthBody,
  AuthFooter,
  AuthForm,
  AuthHeader,
  Div,
} from "@/assets/styles/authstyle";
import { signupRouter } from "@/util/api";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignUpPage = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [comfirmPassword, setComfirmPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const userMutation = useMutation(async (newUser: any) => {
    const res = await axios.post(signupRouter, newUser);
    return res.data;
  });

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    if (!comfirmPassword) {
      setErrorMsg("Missing comfirm password");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    }
    if (password !== comfirmPassword) {
      setErrorMsg("password and confirm password should be same.");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    }

    const newUser = { name, username, password };
    // userMutation.mutate(newUser);
    try {
      const data = await userMutation.mutateAsync(newUser);
      if (!data.success) {
        setErrorMsg(data.msg);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      } else {
        router.push("/auth/login");
      }
    } catch (error: any) {
      setErrorMsg(error.response.data.msg);
    }
  };

  return (
    <Div>
      <AuthForm>
        <AuthHeader variant='h5'>Sign Up</AuthHeader>
        <AuthBody>
          <TextField
            variant='outlined'
            label='Name'
            size='small'
            fullWidth
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <TextField
            variant='outlined'
            label='UserName'
            size='small'
            fullWidth
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
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
            {`If you have account`} <Button href='/auth/login'>Login</Button>
          </Typography>
        </AuthFooter>
      </AuthForm>
    </Div>
  );
};
export default SignUpPage;

const stylePassword = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

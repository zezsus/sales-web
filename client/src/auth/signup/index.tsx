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
import { stylePassword } from "../common/assets/signupstyle";
import ToastMessageComponent from "@/components/toasmessage.component";
import { createNewUser } from "../common/mockData/moockListUser";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [comfirmPassword, setComfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleSignUp = async () => {
    createNewUser();
  };

  return (
    <Div>
      <ToastMessageComponent />
      <AuthForm>
        <AuthHeader variant='h5'>Sign Up</AuthHeader>
        <AuthBody>
          <TextField
            type='text'
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
                type='text'
                variant='outlined'
                label='Password'
                size='small'
                fullWidth
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <TextField
                type='text'
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

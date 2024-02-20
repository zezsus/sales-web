/** @format */
"use client";

import {
  AuthBody,
  AuthFooter,
  AuthForm,
  AuthHeader,
  Div,
} from "@/assets/styles/authstyle";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Div>
      <AuthForm>
        <AuthHeader variant='h5'>Login In</AuthHeader>
        <AuthBody>
          <TextField
            variant='outlined'
            label='UserName'
            size='small'
            fullWidth
          />
          <TextField
            variant='outlined'
            label='Password'
            size='small'
            fullWidth
          />
        </AuthBody>
        <AuthFooter>
          <Button variant='contained' color='success'>
            Login
          </Button>
          <Typography variant='body1'>
            {`If you don't account `}{" "}
            <Link href={"/auth/signup"} underline='none'>
              SignUp
            </Link>
          </Typography>
        </AuthFooter>
      </AuthForm>
    </Div>
  );
};
export default LoginPage;

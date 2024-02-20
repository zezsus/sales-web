/** @format */
"use client";

import {
  AuthBody,
  AuthFooter,
  AuthForm,
  AuthHeader,
  Div,
} from "@/assets/styles/authstyle";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

const SignUpPage = () => {
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
          />
          <TextField
            variant='outlined'
            label='Password'
            size='small'
            fullWidth
          />
          <TextField
            variant='outlined'
            label='Comform Password'
            size='small'
            fullWidth
          />
        </AuthBody>
        <AuthFooter>
          <Button variant='contained' color='success'>
            Sign Up
          </Button>
          <Typography variant='body1'>
            {`If you have account `}{" "}
            <Link href={"/auth/login"} underline='none'>
              Login
            </Link>
          </Typography>
        </AuthFooter>
      </AuthForm>
    </Div>
  );
};
export default SignUpPage;

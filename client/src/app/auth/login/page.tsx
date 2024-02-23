/** @format */
"use client";

import { setIsLogin } from "@/app/feature/users/userSlice";
import { AppDispatch } from "@/app/store";
import {
  AuthBody,
  AuthFooter,
  AuthForm,
  AuthHeader,
  Div,
} from "@/assets/styles/authstyle";
import SpinnerComponent from "@/components/spinnercomponent";
import { getDataUser } from "@/services/auth/authServices";
import { authRouter } from "@/util/api";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: getDataUser,
  });

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMsg("Please complete all the required fields");
      setTimeout(() => setErrorMsg(""), 3000);
      return;
    }

    if (data) {
      const checkUser = data?.filter(
        (user: any) => user.email === email && user.password === password
      );
      if (checkUser.length === 0) {
        setErrorMsg("User not found");
        setTimeout(() => setErrorMsg(""), 3000);
        return;
      }
      router.push("/");
      dispatch(setIsLogin(true));
      if (!localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify(checkUser));
      }
    }
  };

  if (isLoading) {
    return <SpinnerComponent />;
  }

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

          <Typography variant='body2' color={"error"}>
            {errorMsg}
          </Typography>
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

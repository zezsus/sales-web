/** @format */
"use client";

import { getUser } from "@/app/feature/users/userSlice";
import { AppDispatch } from "@/app/store";
import {
  AuthBody,
  AuthFooter,
  AuthForm,
  AuthHeader,
  Div,
} from "@/assets/styles/authstyle";
import { loginRouter } from "@/util/api";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const userMutation = useMutation(async (user: any) => {
    const res = await axios.post(loginRouter, user);
    return res.data;
  });

  const handleLogin = async () => {
    const user = { username, password };
    try {
      const data = await userMutation.mutateAsync(user);

      if (data.success) {
        if (!localStorage.getItem("userToken")) {
          localStorage.setItem("userToken", JSON.stringify(data.accessToken));
        }
        if (!localStorage.getItem("userInfo")) {
          localStorage.setItem("userInfo", JSON.stringify(data.userLogin));
        }
        dispatch(getUser(data.userLogin));
        router.push("/");
      } else {
        setErrorMsg(data.msg);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      }
    } catch (error: any) {
      setErrorMsg(error.response.data.msg);
    }
  };

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
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
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
            <Button href='/auth/signup'>SignUp</Button>
          </Typography>
        </AuthFooter>
      </AuthForm>
    </Div>
  );
};
export default LoginPage;

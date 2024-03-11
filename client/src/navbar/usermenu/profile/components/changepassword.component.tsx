/** @format */

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { FormBody, FormFooter } from "../../common/assets/formstyle";
import { styleBox } from "../common/assets/profile";
import { useState } from "react";
import { INewDataUser } from "../common/interfaces/profile.interface";
import { useUpdateUser } from "../common/hook/profile.hook";
import { stylePassword } from "@/auth/common/assets/signupstyle";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { setIsChangePassword } from "../common/redux/profileSlice";
import { useGetUserData } from "@/auth/common/hook";
import {
  setColor,
  setIsMessage,
  setMessage,
} from "@/auth/common/redux/userSlice";

const ChangePassWordComponent = ({ userData }: any) => {
  const [newData, setNewData] = useState<INewDataUser>({
    email: "",
    password: "",
    newPassword: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const onChangeData = (e: any) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const updatePassword = useUpdateUser(userData.id);
  const getDataUser = useGetUserData();

  const handleSave = () => {
    if (!newData.email || !newData.password || !newData.newPassword) {
      dispatch(setIsMessage(true));
      dispatch(setMessage("Please fill in all fields"));
      dispatch(setColor("error"));
      return;
    }
    if (
      userData.email !== newData.email ||
      userData.password !== newData.password
    ) {
      dispatch(setIsMessage(true));
      dispatch(setMessage("Incorrect email or password"));
      dispatch(setColor("error"));
      return;
    }
    if (userData.password === newData.newPassword) {
      dispatch(setIsMessage(true));
      dispatch(setMessage("Password cannot be the same as the new password"));
      dispatch(setColor("error"));
      return;
    }
    const newPassword: any = { ...userData, password: newData.newPassword };

    updatePassword.mutate(newPassword, {
      onSuccess: () => {
        getDataUser.refetch();
      },
    });
    setNewData({ email: "", password: "", newPassword: "" });
    dispatch(setIsMessage(true));
    dispatch(setMessage("Change password successfully."));
    dispatch(setColor("success"));
  };

  const handleClose = () => {
    dispatch(setIsChangePassword(false));
    setNewData({ email: "", password: "", newPassword: "" });
  };
  return (
    <Box width={500} sx={styleBox}>
      <FormBody>
        <TextField
          label='Email'
          variant='outlined'
          size='small'
          value={newData.email}
          name='email'
          onChange={onChangeData}
        />
        {showPassword ? (
          <Box sx={stylePassword}>
            <TextField
              label='Password'
              variant='outlined'
              size='small'
              value={newData.password}
              name='password'
              onChange={onChangeData}
            />
            <TextField
              label='NewPassword'
              size='small'
              variant='outlined'
              value={newData.newPassword}
              name='newPassword'
              onChange={onChangeData}
            />
          </Box>
        ) : (
          <Box sx={stylePassword}>
            <TextField
              type='password'
              label='Password'
              variant='outlined'
              size='small'
              value={newData.password}
              name='password'
              onChange={onChangeData}
            />
            <TextField
              type='password'
              label='NewPassword'
              size='small'
              variant='outlined'
              value={newData.newPassword}
              name='newPassword'
              onChange={onChangeData}
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
      </FormBody>
      <FormFooter>
        <Button variant='contained' color='warning' onClick={handleSave}>
          Save
        </Button>
        <Button variant='contained' color='info' onClick={handleClose}>
          Close
        </Button>
      </FormFooter>
    </Box>
  );
};
export default ChangePassWordComponent;

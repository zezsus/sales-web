/** @format */

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { FormBody, FormFooter } from "../../common/assets/formstyle";
import { styleBox } from "../common/assets/profile";
import { useState } from "react";
import { INewDataUser } from "../common/interfaces";
import { useUpdateUser } from "../common/hook";
import { stylePassword } from "@/auth/common/assets/signupstyle";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { setIsChangePassword } from "../common/redux/profileSlice";

const ChangePassWordComponent = ({ userData }: any) => {
  const [newData, setNewData] = useState<INewDataUser>({
    email: "",
    password: "",
    newPassword: "",
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const onChangeData = (e: any) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const updatePassword = useUpdateUser(userData.id);

  const handleSave = () => {
    if (!newData.email || !newData.password || !newData.newPassword) {
      setError("Please fill in all fields");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    if (
      userData.email !== newData.email ||
      userData.password !== newData.password
    ) {
      setError("Incorrect email or password");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    if (userData.password === newData.newPassword) {
      setError("Password cannot be the same as the new password");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    const newPassword: any = { password: newData.newPassword, ...userData };
    updatePassword.mutate(newPassword);
    setNewData({ email: "", password: "", newPassword: "" });
    setSuccess("Change password successfully.");
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  const handleClose = () => {
    dispatch(setIsChangePassword(false));
    setNewData({ email: "", password: "", newPassword: "" });
  };
  return (
    <Box width={500} sx={styleBox}>
      <Typography
        component={"div"}
        width={500}
        mb={2}
        sx={{ textAlign: "center", color: "green" }}>
        {success}
      </Typography>
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
      <Typography
        component={"div"}
        color={"error"}
        width={500}
        mb={2}
        sx={{ textAlign: "center" }}>
        {error}
      </Typography>
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

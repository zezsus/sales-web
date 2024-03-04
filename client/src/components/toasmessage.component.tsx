/** @format */

import { Alert, IconButton } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { setIsMessage } from "@/auth/common/redux/userSlice";

export default function ToastMessageComponent() {
  const showMessage: boolean = useSelector(
    (state: RootState) => state.users.isMessage
  );
  const message: string = useSelector(
    (state: RootState) => state.users.message
  );
  const color: string = useSelector((state: RootState) => state.users.color);
  const dispatch = useDispatch<AppDispatch>();
  const handleCloseMessage = () => {
    dispatch(setIsMessage(false));
  };
  const action = (
    <IconButton size='small' onClick={handleCloseMessage}>
      <CloseIcon />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={showMessage}
      autoHideDuration={3000}
      onClose={handleCloseMessage}>
      <Alert
        severity={color}
        variant='filled'
        sx={{ width: "100%" }}
        onClose={handleCloseMessage}>
        {message}
      </Alert>
    </Snackbar>
  );
}

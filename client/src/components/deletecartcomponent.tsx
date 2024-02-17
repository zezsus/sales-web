/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import {
  setDeleteCartItem,
  showDeleteCartItemModal,
} from "@/app/feature/products/productSlice";
import { styled } from "@mui/material";

const DeleteCartComponent = () => {
  const showDelete = useSelector(
    (state: RootState) => state.products.isDeleteCartItem
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteCartItem = () => {
    dispatch(setDeleteCartItem());
    handleCloseCartItem();
  };

  const handleCloseCartItem = () => {
    dispatch(showDeleteCartItemModal(false));
  };

  return (
    <Modal
      open={showDelete}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box sx={style}>
        <Typography
          id='modal-modal-title'
          variant='h5'
          component='h2'
          color={"error"}
          textAlign={"center"}
          p={1}>
          Delete Cart Item
        </Typography>
        <hr />
        <Typography
          id='modal-modal-description'
          textAlign={"center"}
          sx={{ p: 3 }}>
          Do you want remove this item?
        </Typography>
        <hr />
        <ModalAction>
          <Button onClick={handleDeleteCartItem} color='error'>
            Yes
          </Button>
          <Button onClick={handleCloseCartItem} color='info'>
            No
          </Button>
        </ModalAction>
      </Box>
    </Modal>
  );
};

export default DeleteCartComponent;

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  borderRadius: "5px",
};

const ModalAction = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
});

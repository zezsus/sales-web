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
} from "@/products/common/redux/productSlice";
import { ModalAction, style } from "../common/assets/deletecartitem";

const DeleteCartItemComponent = () => {
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

export default DeleteCartItemComponent;

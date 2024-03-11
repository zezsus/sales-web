/** @format */

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { ModalAction, style } from "../common/assets/deletecartitem";
import { showDeleteCartItemModal } from "../common/redux/cartSlices";
import { useDeleteCartItem } from "../common/hooks/cartproducts";
import { Box, Button, Modal, Typography } from "@mui/material";

const DeleteCartItemComponent = () => {
  const showDelete: boolean = useSelector(
    (state: RootState) => state.carts.isShowDeleteCart
  );
  const deleteItemCartId: string = useSelector(
    (state: RootState) => state.carts.deleteItemCartId
  );

  const dispatch = useDispatch<AppDispatch>();

  const deleteCartItem = useDeleteCartItem();

  const handleDeleteCartItem = () => {
    deleteCartItem.mutate(deleteItemCartId);
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
          <Button onClick={() => handleDeleteCartItem()} color='error'>
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

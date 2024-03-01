/** @format */

import { Box, Button, Modal, Typography } from "@mui/material";
import { styleModal } from "../common/assets";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { useRouter } from "next/navigation";
import {
  setCartItem,
  setShowModal,
} from "@/products/common/redux/productSlice";

const ModalSuccessElement = () => {
  const buyItem: any = useSelector(
    (state: RootState) => state.products.buyItem
  );
  const isShowModal = useSelector(
    (state: RootState) => state.products.isShowModal
  );
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleClickBuy = () => {
    dispatch(setShowModal(false));
    dispatch(setCartItem(buyItem));
    router.push("/cart");
  };

  return (
    <Modal open={isShowModal} aria-describedby='modal-modal-description'>
      <Box sx={styleModal}>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Buy success
        </Typography>
        <Button
          onClick={() => handleClickBuy()}
          sx={{ textAlign: "right", width: "100%" }}>
          OK
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalSuccessElement;

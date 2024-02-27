/** @format */

import { AppDispatch } from "@/app/store";
import { setShowModal } from "@/products/common/redux/productSlice";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

const BuyButtonElement = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Button
      variant='contained'
      sx={{ width: 200 }}
      onClick={() => dispatch(setShowModal(true))}>
      Buy
    </Button>
  );
};
export default BuyButtonElement;

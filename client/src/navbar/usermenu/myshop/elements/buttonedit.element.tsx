/** @format */

import { IconButton, Tooltip } from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import {
  setEditMyProduct,
  setShowEditMyProduct,
} from "../common/redux/myproductSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { IProduct } from "@/products/common/interface";

const ButtonEditElement = ({ editItem }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClickEditProduct = (editItem: IProduct) => {
    dispatch(setShowEditMyProduct(true));
    dispatch(setEditMyProduct(editItem));
  };

  return (
    <Tooltip title='Edit' arrow>
      <IconButton
        color='warning'
        onClick={() => handleClickEditProduct(editItem)}>
        <EditCalendarIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ButtonEditElement;

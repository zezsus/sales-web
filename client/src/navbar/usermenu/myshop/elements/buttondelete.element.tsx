/** @format */

import { IconButton, Tooltip } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import {
  getDeleteProductId,
  setShowDeleteMyProduct,
} from "../common/redux/myproductSlice";

const ButtonDeleteItem = ({ deleteItem }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClickDeleteProduct = (productDeleteId: string) => {
    dispatch(getDeleteProductId(productDeleteId));
    dispatch(setShowDeleteMyProduct(true));
  };
  return (
    <Tooltip title='Delete' arrow>
      <IconButton
        color='error'
        onClick={() => handleClickDeleteProduct(deleteItem.id)}>
        <DeleteForeverIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ButtonDeleteItem;

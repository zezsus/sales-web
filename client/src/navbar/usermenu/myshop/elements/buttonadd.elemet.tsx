/** @format */

import { AppDispatch } from "@/app/store";
import { setShowAddMyProduct } from "@/navbar/usermenu/myshop/common/redux/myproductSlice";
import { AddIcCallOutlined } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";

const ButtonAddProductElement = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Tooltip title='Add' arrow>
      <Fab
        color='primary'
        aria-label='add'
        size='small'
        onClick={() => dispatch(setShowAddMyProduct(true))}>
        <AddIcCallOutlined />
      </Fab>
    </Tooltip>
  );
};

export default ButtonAddProductElement;

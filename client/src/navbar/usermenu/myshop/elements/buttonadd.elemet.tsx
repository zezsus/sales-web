/** @format */

import { AppDispatch } from "@/app/store";
import { setShowAddMyProduct } from "@/navbar/usermenu/myshop/common/redux/myproductSlice";
import AddIcon from "@mui/icons-material/Add";
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
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default ButtonAddProductElement;

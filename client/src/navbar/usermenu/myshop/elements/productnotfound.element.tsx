/** @format */

import { AppDispatch } from "@/app/store";
import { setShowAddMyProduct } from "@/navbar/usermenu/myshop/common/redux/myproductSlice";
import { Button, TableCell, TableRow, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const ProductNotFoundElement = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <TableRow>
      <TableCell align='center' colSpan={9}>
        <Typography variant='h5'> Products Not Found</Typography>
        <Button
          variant='contained'
          onClick={() => dispatch(setShowAddMyProduct(true))}>
          Add New Product
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ProductNotFoundElement;

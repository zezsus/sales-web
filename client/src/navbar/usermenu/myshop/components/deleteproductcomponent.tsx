/** @format */

import {
  setDeleteMyProduct,
  setShowDeleteMyProduct,
} from "@/navbar/usermenu/myshop/common/redux/myproductSlice";
import { AppDispatch, RootState } from "@/app/store";
import {
  FormBody,
  FormFooter,
  FormHeader,
  formStyle,
} from "@/navbar/usermenu/common/assets/formstyle";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const DeleteProductComponent = () => {
  const showDeleteProduct = useSelector(
    (state: RootState) => state.myProducts.isShowDeleteMyProduct
  );
  const deleteMyProductId = useSelector(
    (state: RootState) => state.myProducts.deleteMyProductId
  );
  const myShopProduct = useSelector(
    (state: RootState) => state.myProducts.myShopProduct
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteProduct = () => {
    const myProduct = myShopProduct.filter(
      (product: IProduct) => product.id !== deleteMyProductId
    );

    dispatch(setDeleteMyProduct(myProduct));
    handleCloseDelete();
  };

  const handleCloseDelete = () => {
    dispatch(setShowDeleteMyProduct(false));
  };

  return (
    <Modal open={showDeleteProduct}>
      <Box sx={formStyle}>
        <FormHeader sx={{ backgroundColor: "red" }}>
          <Typography variant='h6'>Delete Product</Typography>
        </FormHeader>
        <FormBody>
          <Typography
            variant='h6'
            component={"div"}
            py={3}
            sx={{ textAlign: "center" }}>
            Do you want remove this item?
          </Typography>
        </FormBody>
        <hr />
        <FormFooter sx={{ marginTop: 1 }}>
          <Button
            variant='contained'
            color='error'
            onClick={handleDeleteProduct}>
            Yes
          </Button>
          <Button variant='contained' color='info' onClick={handleCloseDelete}>
            No
          </Button>
        </FormFooter>
      </Box>
    </Modal>
  );
};

export default DeleteProductComponent;

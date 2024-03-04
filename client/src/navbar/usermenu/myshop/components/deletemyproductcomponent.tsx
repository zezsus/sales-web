/** @format */

import { setShowDeleteMyProduct } from "@/navbar/usermenu/myshop/common/redux/myproductSlice";
import { AppDispatch, RootState } from "@/app/store";
import {
  FormBody,
  FormFooter,
  FormHeader,
  formStyle,
} from "@/navbar/usermenu/common/assets/formstyle";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  useDeleteMyProductData,
  useGetMyProductData,
} from "../common/hooks/myshop.hook";
import {
  useDeleteProductData,
  useGetProductData,
} from "@/products/common/hooks";
import {
  setColor,
  setIsMessage,
  setMessage,
} from "@/auth/common/redux/userSlice";

const DeleteProductComponent = () => {
  const showDeleteMyProduct = useSelector(
    (state: RootState) => state.myProducts.isShowDeleteMyProduct
  );
  const deleteMyProductId = useSelector(
    (state: RootState) => state.myProducts.deleteMyProductId
  );
  const dispatch = useDispatch<AppDispatch>();

  const deleteMyProduct = useDeleteMyProductData();
  const getMyProduct = useGetMyProductData();
  const deleteProduct = useDeleteProductData();
  const getProduct = useGetProductData();

  const handleDeleteMyProduct = () => {
    deleteMyProduct.mutate(deleteMyProductId, {
      onSuccess: () => {
        getMyProduct.refetch();
        dispatch(setIsMessage(true));
        dispatch(setMessage("Delete product success"));
        dispatch(setColor("success"));
        handleCloseDelete();
      },
    });

    deleteProduct.mutate(deleteMyProductId, {
      onSuccess: () => {
        getProduct.refetch();
        handleCloseDelete();
      },
    });
  };

  const handleCloseDelete = () => {
    dispatch(setShowDeleteMyProduct(false));
  };

  return (
    <Modal open={showDeleteMyProduct}>
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
            onClick={handleDeleteMyProduct}>
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

/** @format */

import { setShowEditMyProduct } from "@/navbar/usermenu/myshop/common/redux/myproductSlice";
import { AppDispatch, RootState } from "@/app/store";
import {
  FormHeader,
  formStyle,
} from "@/navbar/usermenu/common/assets/formstyle";
import { Box, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerComponent from "@/components/spinnercomponent";
import { useEditProductData, useGetProductData } from "@/products/common/hooks";
import {
  useEditMyProductData,
  useGetMyProductData,
} from "../common/hooks/myshop.hook";
import {
  setColor,
  setIsMessage,
  setMessage,
} from "@/auth/common/redux/userSlice";
import FormFooterMyProductElement from "../elements/formfootermyproduct.element";
import FormBodyMyProductElement from "../elements/formbodymyproduct.element";
import { useGetListBrand } from "../brand/common/hook/brand.hook";
import { useGetListCategory } from "../category/common/hook/category.hook";

const EditProductComponent = () => {
  const showEditProduct = useSelector(
    (state: RootState) => state.myProducts.isShowEditMyProduct
  );
  const editMyProduct = useSelector(
    (state: RootState) => state.myProducts.editMyProduct
  );
  const [brandProduct, setBrandProduct] = useState<Array<string>>([]);
  const [categoryProduct, setCategoryProduct] = useState<Array<string>>([]);
  const [editValue, setEditValue] = useState<any>(editMyProduct);

  const dispatch = useDispatch<AppDispatch>();

  const getProduct = useGetProductData();
  const getMyProduct = useGetMyProductData();
  const updateMyProduct = useEditMyProductData(editValue.id);
  const updateProduct = useEditProductData(editValue.id);
  const getListBrand = useGetListBrand();
  const getListCategory = useGetListCategory();

  useEffect(() => {
    setBrandProduct(getListBrand.data);
    setCategoryProduct(getListCategory.data);
  }, [getListBrand.data, getListCategory.data]);

  const onChangeEditValue = (e: any) => {
    setEditValue({ ...editValue, [e.target.name]: e.target.value });
  };

  const handleUpdateInfoProduct = () => {
    const editProductValue = { ...editValue };
    updateMyProduct.mutate(editProductValue, {
      onSuccess: () => {
        getMyProduct.refetch();
        handleCloseEdit();
      },
    });
    updateProduct.mutate(editProductValue, {
      onSuccess: () => {
        getProduct.refetch();
      },
    });
    dispatch(setIsMessage(true));
    dispatch(setMessage("Update product success"));
    dispatch(setColor("success"));
  };

  const handleCloseEdit = () => {
    dispatch(setShowEditMyProduct(false));
  };

  if (getProduct.isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <Modal open={showEditProduct}>
      <Box sx={formStyle}>
        <FormHeader sx={{ backgroundColor: "orange" }}>
          <Typography variant='h6'>Edit Infomation Product</Typography>
        </FormHeader>
        <FormBodyMyProductElement
          myProductValue={editValue}
          onChangeValue={onChangeEditValue}
          categoryProduct={categoryProduct}
          brandProduct={brandProduct}
        />
        <FormFooterMyProductElement
          handleAction={handleUpdateInfoProduct}
          handleClose={handleCloseEdit}
          action={"Save"}
          color={"warning"}
        />
      </Box>
    </Modal>
  );
};

export default EditProductComponent;

/** @format */

import { setShowAddMyProduct } from "@/navbar/usermenu/myshop/common/redux/myproductSlice";
import { AppDispatch, RootState } from "@/app/store";
import {
  FormHeader,
  formStyle,
} from "@/navbar/usermenu/common/assets/formstyle";
import { Box, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerComponent from "@/components/spinnercomponent";
import { IProduct } from "@/products/common/interface";
import { useGetProductData, usePosProductData } from "@/products/common/hooks";
import {
  useGetMyProductData,
  usePostMyProductData,
} from "../common/hooks/myshop.hook";
import {
  setColor,
  setIsMessage,
  setMessage,
} from "@/auth/common/redux/userSlice";
import FormFooterElement from "../elements/formfootermyproduct.element";
import FormBodyMyProductElement from "../elements/formbodymyproduct.element";
import AddNewBrandComponent from "../brand/components/addnewbrand.component";
import { useGetListBrand } from "../brand/common/hook/brand.hook";
import AddNewCategoryComponent from "../category/components/addnewcategorycomponent";
import { useGetListCategory } from "../category/common/hook/category.hook";
import { IUser } from "@/auth/common/interfaces";
import { v4 as uuidv4 } from "uuid";

const AddProductComponent = () => {
  const showAddProduct = useSelector(
    (state: RootState) => state.myProducts.isShowAddMyProduct
  );
  const showAddBrand = useSelector(
    (state: RootState) => state.myProducts.isShowAddBrand
  );
  const showAddCategory = useSelector(
    (state: RootState) => state.myProducts.isShowAddCategory
  );
  const [userId, setUserId] = useState<string>("");
  const [newMyProduct, setNewMyProduct] = useState<IProduct>({
    id: "",
    thumbnail: "",
    title: "",
    description: "",
    rating: 0,
    price: 0,
    brand: "",
    category: "",
    userId: "",
  });
  const [listBrandProduct, setListBrandProduct] = useState<Array<string>>([]);
  const [listCategoryProduct, setListCategoryProduct] = useState<Array<string>>(
    []
  );
  const dispatch = useDispatch<AppDispatch>();

  const getProduct = useGetProductData();
  const getMyProduct = useGetMyProductData();
  const postNewProduct = usePostMyProductData();
  const postProduct = usePosProductData();
  const getListBrand = useGetListBrand();
  const getListCategory = useGetListCategory();

  useEffect(() => {
    setListBrandProduct(getListBrand.data);
    setListCategoryProduct(getListCategory.data);
  }, [getListBrand.data, getListCategory.data]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const listUser: IUser[] = JSON.parse(localStorage.getItem("user"));
      listUser?.map((user: IUser) => setUserId(user.id));
    }
  }, []);

  const handleOnChangeAddValue = (e: any) => {
    setNewMyProduct({ ...newMyProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (
      !newMyProduct.thumbnail ||
      !newMyProduct.brand ||
      !newMyProduct.category ||
      !newMyProduct.title
    ) {
      dispatch(setIsMessage(true));
      dispatch(setMessage("Please fill in all fields"));
      dispatch(setColor("error"));
      return;
    } else {
      const newProduct: IProduct = {
        ...newMyProduct,
        id: uuidv4(),
        userId: userId,
      };
      dispatch(setIsMessage(true));
      dispatch(setMessage("Add new product success"));
      dispatch(setColor("success"));
      postNewProduct.mutate(newProduct, {
        onSuccess: () => {
          getMyProduct.refetch();
          handleCloseAdd();
        },
      });
      postProduct.mutate(newProduct, {
        onSuccess: () => {
          getProduct.refetch();
        },
      });
    }
  };

  const handleCloseAdd = () => {
    setNewMyProduct({
      id: "",
      thumbnail: "",
      title: "",
      description: "",
      rating: 0,
      price: 0,
      brand: "",
      category: "",
      userId: "",
    });
    dispatch(setShowAddMyProduct(false));
  };

  if (getProduct.isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <Box>
      <Modal open={showAddProduct}>
        <Box sx={formStyle}>
          <FormHeader sx={{ backgroundColor: "blue" }}>
            <Typography variant='h6'>Add New Product</Typography>
          </FormHeader>
          <FormBodyMyProductElement
            myProductValue={newMyProduct}
            onChangeValue={handleOnChangeAddValue}
            categoryProduct={listCategoryProduct}
            brandProduct={listBrandProduct}
          />
          <FormFooterElement
            handleAction={handleAddProduct}
            handleClose={handleCloseAdd}
            action={"Add"}
            color={"primary"}
          />
        </Box>
      </Modal>
      {showAddBrand && <AddNewBrandComponent />}
      {showAddCategory && <AddNewCategoryComponent />}
    </Box>
  );
};

export default AddProductComponent;

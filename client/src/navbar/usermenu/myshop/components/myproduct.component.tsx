/** @format */
"use client";

import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import AddProductComponent from "./addmyproductcomponent";
import EditProductComponent from "./editmyproductcomponent";
import DeleteProductComponent from "./deletemyproductcomponent";
import ButtonAddProductElement from "../elements/buttonadd.elemet";
import TableListProductElement from "../elements/tablelistproduct.element";
import ProductNotFoundElement from "../elements/productnotfound.element";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { MyShop } from "../common/assets/myproduct";
import SpinnerComponent from "@/components/spinnercomponent";
import { useGetMyProductData } from "../common/hooks/myshop.hook";
import ToastMessageComponent from "@/components/toasmessage.component";
import { useEffect, useState } from "react";
import { IUser } from "@/auth/common/interfaces";

const MyProductComponent = () => {
  const myShopProduct = useGetMyProductData();
  const showAddProduct = useSelector(
    (state: RootState) => state.myProducts.isShowAddMyProduct
  );
  const showEditProduct = useSelector(
    (state: RootState) => state.myProducts.isShowEditMyProduct
  );
  const showDeleteProduct = useSelector(
    (state: RootState) => state.myProducts.isShowDeleteMyProduct
  );
  const [userId, setUserId] = useState<string>("");
  useEffect(() => {
    const user: IUser[] = JSON.parse(localStorage.getItem("user"));
    user?.map((user: IUser) => {
      setUserId(user.id);
    });
  });

  if (myShopProduct.isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <MyShop>
      <ToastMessageComponent />
      <ButtonAddProductElement />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        {myShopProduct.data.length > 0 ? (
          <TableListProductElement userId={userId} />
        ) : (
          <ProductNotFoundElement />
        )}

        <TableContainer sx={{ maxHeight: 500 }}></TableContainer>
      </Paper>
      {showAddProduct && <AddProductComponent />}
      {showEditProduct && <EditProductComponent />}
      {showDeleteProduct && <DeleteProductComponent />}
    </MyShop>
  );
};

export default MyProductComponent;

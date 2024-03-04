/** @format */
"use client";

import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import AddProductComponent from "./addproductcomponent";
import EditProductComponent from "../components/editproductcomponent";
import DeleteProductComponent from "../components/deleteproductcomponent";
import ButtonAddProductElement from "../elements/buttonadd.elemet";
import TableListProductElement from "../elements/tablelistproduct.element";
import ProductNotFoundElement from "../elements/productnotfound.element";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { MyShop } from "../common/assets/myproduct";

const MyProductComponent = () => {
  const myShopProduct = useSelector(
    (state: RootState) => state.myProducts.myShopProduct
  );
  const showAddProduct = useSelector(
    (state: RootState) => state.myProducts.isShowAddMyProduct
  );
  const showEditProduct = useSelector(
    (state: RootState) => state.myProducts.isShowEditMyProduct
  );
  const showDeleteProduct = useSelector(
    (state: RootState) => state.myProducts.isShowDeleteMyProduct
  );

  return (
    <MyShop>
      <ButtonAddProductElement />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        {myShopProduct.length > 0 ? (
          <TableListProductElement />
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

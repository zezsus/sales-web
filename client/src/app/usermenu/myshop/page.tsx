/** @format */
"use client";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SpinnerComponent from "@/components/spinnercomponent";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Fab,
  IconButton,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import {
  getDeleteProductId,
  setEditMyProduct,
  setShowAddMyProduct,
  setShowDeleteMyProduct,
  setShowEditMyProduct,
} from "@/app/feature/products/myproductSlice";
import AddProductComponent from "@/components/products/addproductcomponent";
import EditProductComponent from "@/components/products/editproductcomponent";
import DeleteProductComponent from "@/components/products/deleteproductcomponent";

const MyShopPage = () => {
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
  const [myProducts, setMyProducts] = useState<Array<IProduct>>([]);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (myShopProduct.length > 0) {
      setMyProducts(myShopProduct);
    }
  }, [myShopProduct]);

  const handleClickDeleteProduct = (productDeleteId: number) => {
    dispatch(getDeleteProductId(productDeleteId));
    dispatch(setShowDeleteMyProduct(true));
  };

  const handleClickEditProduct = (editItem: IProduct) => {
    dispatch(setShowEditMyProduct(true));
    dispatch(setEditMyProduct(editItem));
  };

  if (!myProducts) {
    return <SpinnerComponent />;
  }

  return (
    <MyShop>
      <Tooltip title='Add' arrow>
        <Fab
          color='primary'
          aria-label='add'
          size='small'
          onClick={() => dispatch(setShowAddMyProduct(true))}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell align='center' sx={{ fontWeight: "bold" }}>
                  No
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Rating</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Brand</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
              </TableRow>
            </TableHead>{" "}
            <TableBody>
              {myShopProduct.length > 0 ? (
                myProducts.map((product: any, index: number) => {
                  return (
                    <TableRow hover tabIndex={-1} key={product.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <CardMedia
                          image={product.thumbnail}
                          title={product.title}
                          sx={{ height: 50, maxWidth: 100 }}
                        />
                      </TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.rating}</TableCell>
                      <TableCell>{product.brand}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>
                        <Box display={"flex"}>
                          <Tooltip title='Edit' arrow>
                            <IconButton
                              color='warning'
                              onClick={() => handleClickEditProduct(product)}>
                              <EditCalendarIcon />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title='Delete' arrow>
                            <IconButton
                              color='error'
                              onClick={() =>
                                handleClickDeleteProduct(product.id)
                              }>
                              <DeleteForeverIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
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
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {showAddProduct && <AddProductComponent />}
      {showEditProduct && <EditProductComponent />}
      {showDeleteProduct && <DeleteProductComponent />}
    </MyShop>
  );
};

export default MyShopPage;

const MyShop = styled(Container)({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginTop: 10,
});

/** @format */

import {
  Box,
  CardMedia,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import ButtonEditElement from "./buttonedit.element";
import ButtonDeleteItem from "./buttondelete.element";
import { useGetMyProductData } from "../common/hooks/myshop.hook";
import { IProduct } from "@/products/common/interface";
import { useEffect, useState } from "react";
import ProductNotFoundElement from "./productnotfound.element";

const TableListProductElement = ({ userId }: any) => {
  const [myProduct, setMyProduct] = useState<IProduct[]>([]);
  const myShopProduct = useGetMyProductData();

  useEffect(() => {
    if (myShopProduct.data) {
      const listMyProduct = myShopProduct.data?.filter(
        (product: IProduct) => product.userId === userId
      );
      setMyProduct(listMyProduct);
    }
  }, [myShopProduct.data, userId]);

  return (
    <Box>
      {myProduct.length ? (
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
              </TableHead>
              <TableBody>
                {myProduct?.map((product: any, index: number) => {
                  return (
                    <TableRow hover tabIndex={-1} key={product.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <CardMedia
                          component='img'
                          image={product.thumbnail}
                          alt={product.thumbnail}
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
                          <ButtonEditElement editItem={product} />
                          <ButtonDeleteItem deleteItem={product} />
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <ProductNotFoundElement />
      )}
    </Box>
  );
};
export default TableListProductElement;

/** @format */

import {
  Box,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { useEffect, useState } from "react";
import ButtonEditElement from "./buttonedit.element";
import ButtonDeleteItem from "./buttondelete.element";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const TableListProductElement = () => {
  const [myProducts, setMyProducts] = useState<Array<IProduct>>([]);
  const myShopProduct = useSelector(
    (state: RootState) => state.myProducts.myShopProduct
  );

  useEffect(() => {
    if (myShopProduct.length > 0) {
      setMyProducts(myShopProduct);
    }
  }, [myShopProduct]);

  return (
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
        {myProducts.map((product: any, index: number) => {
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
                  <ButtonEditElement editItem={product} />
                  <ButtonDeleteItem deleteItem={product} />
                </Box>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
export default TableListProductElement;

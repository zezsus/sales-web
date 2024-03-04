/** @format */
"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { ImageProduct, ListProducts } from "../common/assets/productpage";
import Link from "next/link";
import { useEffect, useState } from "react";
import SpinnerComponent from "@/components/spinnercomponent";
import { useSelector } from "react-redux";
import { useGetProductData } from "@/products/common/hooks";
import { RootState } from "@/app/store";
import { IProduct } from "@/products/common/interface";

const ListProductElement = () => {
  const [products, setProducts] = useState([]);
  const searchNameProduct = useSelector(
    (state: RootState) => state.search.searchName
  );
  const selectedType = useSelector(
    (state: RootState) => state.search.selectedType
  );
  const selectedPrice = useSelector(
    (state: RootState) => state.search.selectedPrice
  );

  const getData = useGetProductData();

  useEffect(() => {
    if (!getData.data) return;
    const filteredProducts = getData.data.filter((product: any) => {
      const isTypeMatch =
        selectedType === "all" || product.category.includes(selectedType);

      let isPriceMatch = true;

      switch (selectedPrice) {
        case "0-100":
          isPriceMatch = product.price <= 100;
          break;
        case "100-500":
          isPriceMatch = product.price > 100 && product.price <= 500;
          break;
        case "500-1000":
          isPriceMatch = product.price > 500 && product.price <= 1000;
          break;
        case "1000-1500":
          isPriceMatch = product.price > 1000 && product.price <= 1500;
          break;
        case "1500-2000":
          isPriceMatch = product.price > 1500 && product.price <= 2000;
          break;
        case ">2000":
          isPriceMatch = product.price > 2000;
          break;
      }

      return (
        product.title.toLowerCase().includes(searchNameProduct.toLowerCase()) &&
        isTypeMatch &&
        isPriceMatch
      );
    });
    setProducts(filteredProducts);
  }, [searchNameProduct, selectedType, selectedPrice, getData.data]);

  if (getData.isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <Box>
      {products.length > 0 ? (
        <ListProducts>
          {products?.map((item: IProduct, index: number) => {
            return (
              <Card sx={{ width: 300 }} key={index}>
                <ImageProduct image={item.thumbnail} />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {item.title}
                  </Typography>
                  <Typography variant='h6'>$ {item.price}</Typography>
                </CardContent>
                <CardActions>
                  <Link href={`product/${item.id}`}>
                    <Button size='small'>Detail</Button>
                  </Link>
                </CardActions>
              </Card>
            );
          })}
        </ListProducts>
      ) : (
        <ListProducts>
          <Typography variant='h5'>Products Not Found</Typography>
        </ListProducts>
      )}
    </Box>
  );
};
export default ListProductElement;

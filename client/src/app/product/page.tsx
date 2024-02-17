/** @format */
"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import SpinnerComponent from "@/components/spinnercomponent";
import SearchComponent from "@/components/searchcomponent";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import {
  ImageProduct,
  ListProducts,
  ProductBody,
  ProductHeader,
} from "@/assets/styles/productpage";

const ProductPage = () => {
  const searchNameProduct = useSelector(
    (state: RootState) => state.search.searchName
  );
  const selectedType = useSelector(
    (state: RootState) => state.search.selectedType
  );
  const selectedPrice = useSelector(
    (state: RootState) => state.search.selectedPrice
  );

  const { data, isLoading } = useQuery({
    queryKey: ["productData"],
    queryFn: async () => {
      const res = await axios.get("https://dummyjson.com/products");
      const product = await res.data;
      return product.products;
    },
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!data) return;

    const filteredProducts = data.filter((product: any) => {
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
  }, [searchNameProduct, selectedType, selectedPrice, data]);

  if (isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <Stack>
      <Container>
        <ProductHeader>
          <SearchComponent />
        </ProductHeader>
        <ProductBody>
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
        </ProductBody>
      </Container>
    </Stack>
  );
};
export default ProductPage;

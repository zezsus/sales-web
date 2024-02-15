/** @format */
"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import Link from "next/link";

const ProductPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["productData"],
    queryFn: async () => {
      const res = await axios.get("https://dummyjson.com/products");
      const product = await res.data;
      return product.products;
    },
  });

  const dispatch = useDispatch();

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <Stack>
      <Stack>
        <ProductHeader direction='row' spacing={1}>
          <Chip sx={{ cursor: "pointer" }} label='Chip Filled' />
          <Chip label='Chip Outlined' />
        </ProductHeader>
        <ProductBody>
          <Container>
            <ListProducts>
              {data?.map((item: IProduct, index: number) => {
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
          </Container>
        </ProductBody>
      </Stack>
    </Stack>
  );
};
export default ProductPage;

const ProductHeader = styled(Stack)({
  padding: "1rem 0  0.5rem 0",
  display: "flex",
  justifyContent: "center",
});

const ProductBody = styled(Box)({
  maxHeight: "80vh",
  overflow: "auto",
});

const ListProducts = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "0.5rem 1rem 1rem 1rem",
  boxSizing: "border-box",
});

const ImageProduct = styled(CardMedia)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 200,
  width: "auto",
});

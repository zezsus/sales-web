/** @format */
"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setBuyItem, setCartItem } from "@/app/feature/products/productSlice";
import { useDispatch } from "react-redux";

const ProductDetailPage = ({ params }: { params: { productid: number } }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery({
    queryKey: ["productDetailData", params.productid],
    queryFn: async () => {
      const res = await axios.get(
        `https://dummyjson.com/products/${params.productid}`
      );
      const productDetail = await res.data;
      return productDetail;
    },
  });

  if (isLoading) {
    return <Box>...Loading</Box>;
  }

  const handleAddToCart = (cartItem: IProduct) => {
    dispatch(setCartItem(cartItem));
  };

  const handleBuyNow = (buyItem: IProduct) => {
    router.push("/buy");
    dispatch(setBuyItem(buyItem));
  };

  return (
    <Box>
      <IconButton
        sx={{ color: "black" }}
        onClick={() => router.push("/product")}>
        <ArrowBackIcon />
      </IconButton>
      <ProductDetail>
        <ContentProduct>
          <CardMedia
            component='img'
            image={data.thumbnail}
            alt={data.title}
            sx={{ maxWidth: "400px" }}
          />
          <Box>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {data.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {data.description}
              </Typography>
              <Typography gutterBottom variant='h6' component='div'>
                ${data.price}
              </Typography>
              <Rating variant='body2' color='text.secondary'>
                <StarIcon color='warning' />
                {data.rating}
              </Rating>
            </CardContent>
            <CardActions>
              <Button variant='contained' onClick={() => handleBuyNow(data)}>
                Buy now
              </Button>
              <Button
                variant='contained'
                color='warning'
                onClick={() => handleAddToCart(data)}>
                Add to cart
              </Button>
            </CardActions>
          </Box>
        </ContentProduct>
      </ProductDetail>
    </Box>
  );
};

export default ProductDetailPage;

const ProductDetail = styled(Card)({
  boxSizing: "border-box",
  maxHeight: "83vh",
  padding: "0.5rem",
  overflow: "auto",
  boxShadow: "none",
});

const ContentProduct = styled(Box)({
  display: "flex",
  gap: "2rem",
});

const Rating = styled(Typography)({
  display: "flex",
  alignItems: "center",
  gap: "0.2rem",
});

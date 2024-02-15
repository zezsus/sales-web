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
  Stack,
  Typography,
  styled,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const CartPage = () => {
  const router = useRouter();
  const listCartItem = useSelector(
    (state: RootState) => state.products.listCartItem
  );

  return (
    <Cart>
      {listCartItem.length === 0 ? (
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{
            flexDirection: "column",
          }}
          p={2}>
          <Typography variant='h6'>Your shopping cart is empty</Typography>
          <Button variant='contained' onClick={() => router.push("/")}>
            Home
          </Button>
        </Box>
      ) : (
        <Stack spacing={2} p={1}>
          {listCartItem?.map((item: IProduct) => {
            return (
              <CartItem key={item.id}>
                <CardMedia
                  sx={{ height: "50px", minWidth: "80px" }}
                  image={item.thumbnail}
                  title={item.title}
                />
                <CartContent>
                  <Typography gutterBottom variant='body2' component='div'>
                    {item.title}
                  </Typography>
                  <Typography variant='body2'>${item.price}</Typography>
                </CartContent>
                <CardActions>
                  <Button onClick={() => router.push(`/product/${item.id}`)}>
                    Buy now
                  </Button>
                  <IconButton color='error'>
                    <DeleteForeverIcon />
                  </IconButton>
                </CardActions>
              </CartItem>
            );
          })}
        </Stack>
      )}
    </Cart>
  );
};
export default CartPage;

const Cart = styled(Box)({
  maxHeight: "89vh",
  overflow: "auto",
});

const CartItem = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "10px",
  gap: "1rem",
});

const CartContent = styled(CardContent)({
  width: "50%",
  display: "flex",
  gap: "2rem",
});

/** @format */

import {
  Button,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { CartContent, CartItem } from "../common/assets/cartinfo";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/app/store";
import {
  setDeleteItemId,
  showDeleteCartItemModal,
} from "@/products/common/redux/productSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CartInfoElement = ({ cartProduct }: any) => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteItemCart = (deleteItem: any) => {
    dispatch(showDeleteCartItemModal(true));
    dispatch(setDeleteItemId(deleteItem));
  };

  return (
    <CartItem>
      <CardMedia
        sx={{ height: "50px", minWidth: "80px" }}
        image={cartProduct.thumbnail}
        title={cartProduct.title}
      />
      <CartContent>
        <Typography gutterBottom variant='body2' component='div'>
          {cartProduct.title}
        </Typography>
        <Typography variant='body2'>${cartProduct.price}</Typography>
      </CartContent>
      <CardActions>
        <Button onClick={() => router.push(`/product/${cartProduct.id}`)}>
          Buy now
        </Button>
        <IconButton
          color='error'
          onClick={() => handleDeleteItemCart(cartProduct.id)}>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </CartItem>
  );
};

export default CartInfoElement;

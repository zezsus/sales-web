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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  setDeleteItemCartId,
  showDeleteCartItemModal,
} from "../common/redux/cartSlices";

const CartInfoElement = ({ cartProduct }: any) => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteItemCart = (deleteItemId: number) => {
    dispatch(showDeleteCartItemModal(true));
    dispatch(setDeleteItemCartId(deleteItemId));
  };
  return (
    <CartItem>
      <CardMedia
        component={"img"}
        sx={{ height: "50px", maxWidth: "80px" }}
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

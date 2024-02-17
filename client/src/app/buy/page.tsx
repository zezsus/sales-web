/** @format */
"use client";

import {
  Box,
  Button,
  CardMedia,
  Container,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import {
  BuyPageBody,
  BuyPageDetail,
  BuyPageFooter,
  BuyPageHeader,
  Counter,
  CounterInput,
} from "@/assets/styles/buypage";
import { useRouter } from "next/navigation";
import SpinnerComponent from "@/components/spinnercomponent";
import { useState } from "react";
import { setCartItem } from "../feature/products/productSlice";

const BuyPage = () => {
  const [numberProduct, setNumberProduct] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const buyItem = useSelector((state: RootState) => state.products.buyItem);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  if (!buyItem) {
    return <SpinnerComponent />;
  }

  const incrementNumberProduct = () => {
    setNumberProduct(numberProduct + 1);
  };

  const decrementNumberProduct = () => {
    if (numberProduct > 0) {
      setNumberProduct(numberProduct - 1);
    } else {
      setNumberProduct(0);
    }
  };

  const handleClickBuy = () => {
    setOpenModal(false);
    dispatch(setCartItem(buyItem));
  };

  return (
    <Box>
      <IconButton
        sx={{ color: "black" }}
        onClick={() => router.push(`/product/${buyItem?.id}`)}>
        <ArrowBackIcon />
      </IconButton>
      <Container>
        <BuyPageDetail p={2}>
          <BuyPageHeader>
            <CardMedia
              sx={{ minHeight: 100, width: 200 }}
              image={buyItem?.thumbnail}
              title={buyItem?.title}
            />
            <Typography variant='h5'>{buyItem?.title}</Typography>
          </BuyPageHeader>
          <BuyPageBody>
            <Typography variant='body1'>
              Price product: ${buyItem?.price}
            </Typography>
            <Typography
              variant='body1'
              py={2}
              sx={{ display: "flex", alignItems: "center" }}
              component={"div"}>
              Number:
              <Counter>
                <IconButton onClick={decrementNumberProduct}>
                  <RemoveIcon />
                </IconButton>
                <CounterInput
                  value={numberProduct}
                  onChange={(e: any) => setNumberProduct(e.target.value)}
                />
                <IconButton onClick={incrementNumberProduct}>
                  <AddIcon />
                </IconButton>
              </Counter>
            </Typography>
            <hr />
            <Box py={2}>
              <Typography
                variant='body1'
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}>
                Number: {numberProduct}
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}>
                Total: $ {buyItem?.price * numberProduct}
              </Typography>
            </Box>
            <hr />
          </BuyPageBody>

          <BuyPageFooter>
            <Button
              variant='contained'
              sx={{ width: 200 }}
              onClick={() => setOpenModal(true)}>
              Buy
            </Button>

            {
              <Modal
                open={openModal}
                aria-describedby='modal-modal-description'>
                <Box sx={style}>
                  <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                    Buy success
                  </Typography>
                  <Button
                    onClick={() => handleClickBuy()}
                    sx={{ textAlign: "right", width: "100%" }}>
                    OK
                  </Button>
                </Box>
              </Modal>
            }
          </BuyPageFooter>
        </BuyPageDetail>
      </Container>
    </Box>
  );
};
export default BuyPage;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 1,
};

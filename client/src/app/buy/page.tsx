/** @format */
"use client";

import { Box, Button, CardMedia, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  BuyPageBody,
  BuyPageDetail,
  BuyPageFooter,
  BuyPageHeader,
  Counter,
  CounterInput,
} from "@/assets/styles/buypage";
import { useRouter } from "next/navigation";

const BuyPage = () => {
  const [numberProduct, setNumberProduct] = useState<number>(0);
  const buyItem = useSelector((state: RootState) => state.products.buyItem);
  const router = useRouter();

  if (!buyItem) {
    return <div>...Loading</div>;
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

  return (
    <Box>
      <IconButton
        sx={{ color: "black" }}
        onClick={() => router.push(`/product/${buyItem?.id}`)}>
        <ArrowBackIcon />
      </IconButton>
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
          <Button variant='contained' sx={{ width: 200 }}>
            Buy
          </Button>
        </BuyPageFooter>
      </BuyPageDetail>
    </Box>
  );
};
export default BuyPage;

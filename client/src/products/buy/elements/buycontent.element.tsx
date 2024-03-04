/** @format */

import { Counter, CounterInput } from "@/products/common/assets/buypage";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { setBuyNumberProduct } from "@/products/common/redux/productSlice";

const BuyContentElement = ({ priceBuyProduct }: any) => {
  const [numberProduct, setNumberProduct] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();

  const incrementNumberProduct = () => {
    setNumberProduct(numberProduct + 1);
    dispatch(setBuyNumberProduct(numberProduct + 1));
  };

  const decrementNumberProduct = () => {
    if (numberProduct > 0) {
      setNumberProduct(numberProduct - 1);
    } else {
      setNumberProduct(0);
    }
    dispatch(setBuyNumberProduct(numberProduct - 1));
  };

  const handleOnChangeNumberProduct = (e: any) => {
    setNumberProduct(e.target.value);
    dispatch(setBuyNumberProduct(numberProduct));
  };

  return (
    <Box>
      <Typography variant='body1'>Price product: ${priceBuyProduct}</Typography>
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
            onChange={handleOnChangeNumberProduct}
          />
          <IconButton onClick={incrementNumberProduct}>
            <AddIcon />
          </IconButton>
        </Counter>
      </Typography>
    </Box>
  );
};

export default BuyContentElement;

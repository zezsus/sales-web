/** @format */

import { RootState } from "@/app/store";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ToTalProduct = () => {
  const buyItem: any = useSelector(
    (state: RootState) => state.products.buyItem
  );
  const numberBuyProduct = useSelector(
    (state: RootState) => state.products.buyNumberProduct
  );

  return (
    <Box py={2}>
      <Typography
        variant='body1'
        sx={{
          display: "flex",
          justifyContent: "end",
        }}>
        Number: {numberBuyProduct}
      </Typography>
      <Typography
        variant='body1'
        sx={{
          display: "flex",
          justifyContent: "end",
        }}>
        Total: $ {buyItem?.price * numberBuyProduct}
      </Typography>
    </Box>
  );
};
export default ToTalProduct;

/** @format */

import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const ButtonBackBuyElement = ({ idProductBuy }: any) => {
  const router = useRouter();

  return (
    <IconButton
      sx={{ color: "black" }}
      onClick={() => router.push(`/product/${idProductBuy}`)}>
      <ArrowBackIcon />
    </IconButton>
  );
};

export default ButtonBackBuyElement;

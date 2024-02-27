/** @format */

import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const ButtonBackElement = () => {
  const router = useRouter();

  return (
    <IconButton sx={{ color: "black" }} onClick={() => router.push("/product")}>
      <ArrowBackIcon />
    </IconButton>
  );
};

export default ButtonBackElement;

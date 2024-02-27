/** @format */

import { CardMedia } from "@mui/material";

const ImageProductElement = (props: any) => {
  return (
    <CardMedia
      component='img'
      image={props.imageProduct}
      alt={props.titleProduct}
      sx={props.style}
    />
  );
};

export default ImageProductElement;

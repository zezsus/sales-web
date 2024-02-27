/** @format */

import { CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Rating } from "../common/assets";

const ContentProductElement = (props: any) => {
  return (
    <CardContent>
      <Typography gutterBottom variant='h5' component='div'>
        {props.titleProduct}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {props.descriptionProduct}
      </Typography>
      <Typography gutterBottom variant='h6' component='div'>
        ${props.priceProduct}
      </Typography>
      <Rating variant='body2' color='text.secondary'>
        <StarIcon color='warning' />
        {props.ratingProduct}
      </Rating>
    </CardContent>
  );
};
export default ContentProductElement;

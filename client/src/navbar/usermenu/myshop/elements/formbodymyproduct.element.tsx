/** @format */

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FormBody } from "../../common/assets/formstyle";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import {
  setShowAddBrand,
  setShowAddCategory,
} from "../common/redux/myproductSlice";
import { IBrand } from "../brand/common/interfaces/brand.interface";
import { ICategory } from "../category/common/interfaces/category.interface";

const FormBodyMyProductElement = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <FormBody>
      <TextField
        label='Image'
        variant='outlined'
        size='small'
        name='thumbnail'
        value={props.myProductValue?.thumbnail}
        onChange={props.onChangeValue}
      />
      <TextField
        label='Name'
        variant='outlined'
        size='small'
        name='title'
        value={props.myProductValue?.title}
        onChange={props.onChangeValue}
      />
      <TextField
        label='Description'
        size='small'
        variant='outlined'
        multiline
        maxRows={4}
        name='description'
        value={props.myProductValue?.description}
        onChange={props.onChangeValue}
      />
      <TextField
        label='Price'
        variant='outlined'
        size='small'
        name='price'
        value={props.myProductValue?.price}
        onChange={props.onChangeValue}
      />
      <TextField
        label='Rating'
        variant='outlined'
        size='small'
        name='rating'
        value={props.myProductValue?.rating}
        onChange={props.onChangeValue}
      />
      <FormControl size='small'>
        <InputLabel id='brandProduct-label'>Brand</InputLabel>
        <Select
          labelId='brandProduct'
          id='brandProduct'
          label='Brand'
          name='brand'
          value={props.myProductValue?.brand}
          onChange={props.onChangeValue}>
          {props.brandProduct?.map((item: IBrand) => {
            return (
              <MenuItem
                key={item.id}
                value={item.brand}
                sx={{ width: "max-content" }}>
                {item.brand}
              </MenuItem>
            );
          })}
          <MenuItem>
            <Button onClick={() => dispatch(setShowAddBrand(true))}>
              Add new...
            </Button>
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }} size='small'>
        <InputLabel id='categoryProduct-label'>Category</InputLabel>
        <Select
          labelId='categoryProduct'
          id='categoryProduct'
          label='Category'
          name='category'
          value={props.myProductValue?.category}
          onChange={props.onChangeValue}>
          {props.categoryProduct?.map((item: ICategory) => {
            return (
              <MenuItem
                key={item.id}
                value={item.category}
                sx={{ width: "max-content" }}>
                {item.category}
              </MenuItem>
            );
          })}
          <MenuItem>
            <Button onClick={() => dispatch(setShowAddCategory(true))}>
              Add new...
            </Button>
          </MenuItem>
        </Select>
      </FormControl>
    </FormBody>
  );
};

export default FormBodyMyProductElement;

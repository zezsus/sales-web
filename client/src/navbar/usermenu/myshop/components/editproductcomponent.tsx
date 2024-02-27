/** @format */

import {
  setShowEditMyProduct,
  setUpdateProduct,
} from "@/navbar/usermenu/myshop/common/redux/myproductSlice";
import { AppDispatch, RootState } from "@/app/store";
import {
  FormBody,
  FormFooter,
  FormHeader,
  formStyle,
} from "@/navbar/usermenu/common/assets/formstyle";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerComponent from "@/components/spinnercomponent";

const EditProductComponent = () => {
  const showEditProduct = useSelector(
    (state: RootState) => state.myProducts.isShowEditMyProduct
  );
  const editMyProduct = useSelector(
    (state: RootState) => state.myProducts.editMyProduct
  );
  const [brandProduct, setBrandProduct] = useState<Array<string>>([]);
  const [categoryProduct, setCategoryProduct] = useState<Array<string>>([]);
  const [editValue, setEditValue] = useState<any>(editMyProduct);

  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading } = useQuery({
    queryKey: ["addProduct"],
    queryFn: async () => {
      const res = await axios.get("https://dummyjson.com/products");
      const data = await res.data;
      return data.products;
    },
  });

  useEffect(() => {
    const brands: any = [];
    const category: any = [];
    if (data) {
      data?.map((product: IProduct) => {
        if (!brands?.includes(product.brand)) {
          brands.push(product.brand);
        }

        if (!category?.includes(product.category)) {
          category.push(product.category);
        }
      });
      setBrandProduct(brands);
      setCategoryProduct(category);
    }
  }, [data]);

  const onChangeEditValue = (e: any) => {
    setEditValue({ ...editValue, [e.target.name]: e.target.value });
  };

  const handleUpdateInfoProduct = () => {
    dispatch(setUpdateProduct(editValue));
    handleCloseEdit();
  };

  const handleCloseEdit = () => {
    dispatch(setShowEditMyProduct(false));
  };

  if (isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <Modal open={showEditProduct}>
      <Box sx={formStyle}>
        <FormHeader sx={{ backgroundColor: "orange" }}>
          <Typography variant='h6'>Edit Infomation Product</Typography>
        </FormHeader>
        <FormBody>
          <TextField
            label='Image'
            variant='outlined'
            size='small'
            name='thumbnail'
            value={editValue?.thumbnail}
            onChange={onChangeEditValue}
          />
          <TextField
            label='Name'
            variant='outlined'
            size='small'
            name='title'
            value={editValue?.title}
            onChange={onChangeEditValue}
          />
          <TextField
            label='Description'
            size='small'
            variant='outlined'
            multiline
            maxRows={4}
            name='description'
            value={editValue?.description}
            onChange={onChangeEditValue}
          />
          <TextField
            label='Price'
            variant='outlined'
            size='small'
            name='price'
            value={editValue?.price}
            onChange={onChangeEditValue}
          />
          <TextField
            label='Rating'
            variant='outlined'
            size='small'
            name='rating'
            value={editValue?.rating}
            onChange={onChangeEditValue}
          />
          <FormControl size='small'>
            <InputLabel id='brandProduct-label'>Brand</InputLabel>
            <Select
              labelId='brandProduct'
              id='brandProduct'
              label='Brand'
              name='brand'
              value={editValue?.brand}
              onChange={onChangeEditValue}>
              {brandProduct.map((brand: string, index: number) => {
                return (
                  <MenuItem
                    key={index}
                    value={brand}
                    sx={{ width: "max-content" }}>
                    {brand}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }} size='small'>
            <InputLabel id='categoryProduct-label'>Category</InputLabel>
            <Select
              labelId='categoryProduct'
              id='categoryProduct'
              label='Category'
              name='category'
              value={editValue?.category}
              onChange={onChangeEditValue}>
              {categoryProduct.map((category: string, index: number) => {
                return (
                  <MenuItem
                    key={index}
                    value={category}
                    sx={{ width: "max-content" }}>
                    {category}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </FormBody>
        <FormFooter>
          <Button
            variant='contained'
            color='warning'
            onClick={handleUpdateInfoProduct}>
            Save
          </Button>
          <Button variant='contained' color='info' onClick={handleCloseEdit}>
            Close
          </Button>
        </FormFooter>
      </Box>
    </Modal>
  );
};

export default EditProductComponent;

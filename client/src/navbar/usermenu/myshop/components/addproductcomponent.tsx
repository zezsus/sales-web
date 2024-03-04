/** @format */

import {
  setAddMyProduct,
  setShowAddMyProduct,
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
import { IProduct } from "@/products/common/interface";
import { useGetProductData } from "@/products/common/hooks";
import { usePostProductData } from "../common/hooks";

const AddProductComponent = () => {
  const showAddProduct = useSelector(
    (state: RootState) => state.myProducts.isShowAddMyProduct
  );
  const [imageProduct, setImageProduct] = useState<string>("");
  const [titleProduct, setTitleProduct] = useState<string>("");
  const [descriptionProduct, setDescriptionProduct] = useState<string>("");
  const [ratingProduct, setRatingProduct] = useState<number | null>(null);
  const [priceProduct, setPriceProduct] = useState<number | null>(null);
  const [brandProduct, setBrandProduct] = useState<string>("");
  const [categoryProduct, setCategoryProduct] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [listBrandProduct, setListBrandProduct] = useState<Array<string>>([]);
  const [listCategoryProduct, setListCategoryProduct] = useState<Array<string>>(
    []
  );
  const dispatch = useDispatch<AppDispatch>();

  const getProduct: any = useGetProductData();
  const postNewProduct: any = usePostProductData();

  useEffect(() => {
    const brands: any = [];
    const category: any = [];
    if (getProduct.data) {
      getProduct.data?.map((product: IProduct) => {
        if (!brands?.includes(product.brand)) {
          brands.push(product.brand);
        }

        if (!category?.includes(product.category)) {
          category.push(product.category);
        }
      });
      setListBrandProduct(brands);
      setListCategoryProduct(category);
    }
  }, [getProduct.data]);

  const handleAddProduct = () => {
    if (
      !imageProduct ||
      !titleProduct ||
      !descriptionProduct ||
      !ratingProduct ||
      !priceProduct ||
      !brandProduct ||
      !categoryProduct
    ) {
      setError("Please fill in all fields");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    } else {
      const newProduct: IProduct = {
        id: Math.random() * 10000,
        thumbnail: imageProduct,
        title: titleProduct,
        description: descriptionProduct,
        rating: ratingProduct,
        price: priceProduct,
        brand: brandProduct,
        category: categoryProduct,
      };
      dispatch(setAddMyProduct(newProduct));
      postNewProduct.mutate(newProduct);
      handleCloseAdd();
    }
  };

  const handleCloseAdd = () => {
    setImageProduct("");
    setTitleProduct("");
    setDescriptionProduct("");
    setRatingProduct(null);
    setPriceProduct(null);
    setBrandProduct("");
    setCategoryProduct("");
    dispatch(setShowAddMyProduct(false));
  };

  if (getProduct.isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <Modal open={showAddProduct}>
      <Box sx={formStyle}>
        <FormHeader sx={{ backgroundColor: "blue" }}>
          <Typography variant='h6'>Add New Product</Typography>
        </FormHeader>
        <FormBody>
          <TextField
            label='Image'
            variant='outlined'
            size='small'
            value={imageProduct}
            onChange={(e: any) => setImageProduct(e.target.value)}
          />
          <TextField
            label='Name'
            variant='outlined'
            size='small'
            value={titleProduct}
            onChange={(e: any) => setTitleProduct(e.target.value)}
          />
          <TextField
            label='Description'
            size='small'
            variant='outlined'
            multiline
            maxRows={3}
            value={descriptionProduct}
            onChange={(e: any) => setDescriptionProduct(e.target.value)}
          />
          <TextField
            label='Price'
            variant='outlined'
            size='small'
            value={priceProduct}
            onChange={(e: any) => setPriceProduct(e.target.value)}
          />
          <TextField
            label='Rating'
            variant='outlined'
            size='small'
            value={ratingProduct}
            onChange={(e: any) => setRatingProduct(e.target.value)}
          />
          <FormControl size='small'>
            <InputLabel id='brandProduct-label'>Brand</InputLabel>
            <Select
              labelId='brandProduct'
              id='brandProduct'
              label='Brand'
              value={brandProduct}
              onChange={(e: any) => setBrandProduct(e.target.value)}>
              {listBrandProduct.map((brand: string, index: number) => {
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
              value={categoryProduct}
              onChange={(e: any) => setCategoryProduct(e.target.value)}>
              {listCategoryProduct.map((category: string, index: number) => {
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
          <Typography component={"div"} color={"error"} align='center'>
            {error}
          </Typography>
        </FormBody>
        <FormFooter>
          <Button variant='contained' onClick={handleAddProduct}>
            Add
          </Button>
          <Button variant='contained' color='info' onClick={handleCloseAdd}>
            Close
          </Button>
        </FormFooter>
      </Box>
    </Modal>
  );
};

export default AddProductComponent;

/** @format */

import {
  setSearchPrice,
  setSearchType,
} from "@/products/common/redux/searchProductSlice";
import { AppDispatch, RootState } from "@/app/store";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductData } from "@/products/common/hooks";
import { useGetListCategory } from "@/navbar/usermenu/myshop/category/common/hook/category.hook";
import { ICategory } from "@/navbar/usermenu/myshop/category/common/interfaces/category.interface";

const SearchProductElement = () => {
  const selectedType = useSelector(
    (state: RootState) => state.search.selectedType
  );
  const selectedPrice = useSelector(
    (state: RootState) => state.search.selectedPrice
  );
  const product = useGetProductData();
  const listType = useGetListCategory();

  const [typeProduct, setTypeProduct] = useState([]);
  const [priceProduct, setPriceProduct] = useState([
    "all",
    "0-100",
    "100-500",
    "500-1000",
    "1000-1500",
    "1500-2000",
    ">2000",
  ]);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (listType.data) {
      setTypeProduct(listType.data);
    }
  }, [listType.data]);

  const handleOnChangeType = (e: any) => {
    dispatch(setSearchType(e.target.value));
  };

  const handleOnChangePrice = (e: any) => {
    dispatch(setSearchPrice(e.target.value));
  };

  return (
    <Box sx={styleSearch}>
      <FormControl sx={{ minWidth: 120 }} size='small'>
        <InputLabel id='typeSearch-label'>Type</InputLabel>
        <Select
          labelId='typeSearch'
          id='typeSearch'
          label='Type'
          value={selectedType}
          onChange={handleOnChangeType}>
          <MenuItem value={"all"}>all</MenuItem>
          {typeProduct.map((type: ICategory) => {
            return (
              <MenuItem key={type.id} value={type.category}>
                {type.category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120 }} size='small'>
        <InputLabel id='priceSearch-label'>Price</InputLabel>
        <Select
          labelId='priceSearch'
          id='priceSearch'
          label='Price'
          value={selectedPrice}
          onChange={handleOnChangePrice}>
          {priceProduct?.map((price: any, index: number) => {
            return (
              <MenuItem key={index} value={price}>
                {price}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchProductElement;

const styleSearch = {
  display: "flex",
  gap: "2rem",
};

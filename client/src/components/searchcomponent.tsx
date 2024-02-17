/** @format */

import {
  setSearchPrice,
  setSearchType,
} from "@/app/feature/products/searchProductSlice";
import { AppDispatch, RootState } from "@/app/store";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchComponent = () => {
  const selectedType = useSelector(
    (state: RootState) => state.search.selectedType
  );
  const selectedPrice = useSelector(
    (state: RootState) => state.search.selectedPrice
  );
  const queryProduct = useQueryClient();
  const product = queryProduct.getQueryData(["productData"]);

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
    if (product) {
      const types: any = [];
      product?.map((item: any) => {
        if (!types?.includes(item.category)) {
          types.push(item.category);
        }
      });
      setTypeProduct(types);
    }
  }, [product]);

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
          {typeProduct.map((type: string, index: number) => {
            return (
              <MenuItem key={index} value={type}>
                {type}
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

export default SearchComponent;

const styleSearch = {
  display: "flex",
  gap: "2rem",
};

/** @format */
"use client";

import { useState } from "react";
import {
  InputSearch,
  Search,
  SearchIconWrapper,
} from "../common/assets/navbarcomponent";
import SearchIcon from "@mui/icons-material/Search";
import { setSearchName } from "@/products/common/redux/searchProductSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";

const SearchElement = () => {
  const [nameProduct, setNameProduct] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearchName = () => {
    dispatch(setSearchName(nameProduct));
  };

  const handleEnterSearch = (e: any) => {
    if (e.key === "Enter") {
      handleSearchName();
    }
  };

  return (
    <Search>
      <InputSearch
        placeholder='Search name...'
        value={nameProduct}
        onChange={(e: any) => setNameProduct(e.target.value)}
        onKeyDown={handleEnterSearch}
      />
      <SearchIconWrapper onClick={handleSearchName}>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchElement;

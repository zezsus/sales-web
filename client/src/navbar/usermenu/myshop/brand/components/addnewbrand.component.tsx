/** @format */

import { AppDispatch, RootState } from "@/app/store";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddBrand } from "../../common/redux/myproductSlice";
import {
  FormBody,
  FormFooter,
  FormHeader,
  formStyle,
} from "@/navbar/usermenu/common/assets/formstyle";
import { useState } from "react";
import { useGetListBrand, usePostNewBrand } from "../common/hook/brand.hook";
import { v4 as uuidv4 } from "uuid";

const AddNewBrandComponent = () => {
  const [brand, setBrand] = useState<string>("");
  const showAddBrand = useSelector(
    (state: RootState) => state.myProducts.isShowAddBrand
  );
  const dispatch = useDispatch<AppDispatch>();
  const getBrand = useGetListBrand();
  const postNewBrand = usePostNewBrand();
  const handleAddBrand = () => {
    const newBrand = { id: uuidv4(), brand };
    postNewBrand.mutate(newBrand, {
      onSuccess: () => {
        getBrand.refetch(), handleCloseAddBrand();
      },
    });
  };
  const handleCloseAddBrand = () => {
    dispatch(setShowAddBrand(false));
  };

  return (
    <Modal open={showAddBrand}>
      <Box sx={formStyle}>
        <FormHeader sx={{ backgroundColor: "blue" }}>
          <Typography variant='h6'>Add New Brand</Typography>
        </FormHeader>
        <FormBody>
          <TextField
            label='New Brand'
            variant='outlined'
            size='small'
            value={brand}
            onChange={(e: any) => setBrand(e.target.value)}
          />
        </FormBody>
        <FormFooter>
          <Button variant='contained' onClick={handleAddBrand}>
            Add
          </Button>
          <Button
            variant='contained'
            color='info'
            onClick={handleCloseAddBrand}>
            Close
          </Button>
        </FormFooter>
      </Box>
    </Modal>
  );
};
export default AddNewBrandComponent;

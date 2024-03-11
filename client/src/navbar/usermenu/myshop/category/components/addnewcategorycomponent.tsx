/** @format */

import { AppDispatch, RootState } from "@/app/store";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddCategory } from "../../common/redux/myproductSlice";
import {
  FormBody,
  FormFooter,
  FormHeader,
  formStyle,
} from "@/navbar/usermenu/common/assets/formstyle";
import { useState } from "react";
import { ICategory } from "../common/interfaces/category.interface";
import {
  useGetListCategory,
  usePostNewCategory,
} from "../common/hook/category.hook";
import { v4 as uuidv4 } from "uuid";

const AddNewCategoryComponent = () => {
  const [category, setCategory] = useState<string>("");
  const showAddCategory = useSelector(
    (state: RootState) => state.myProducts.isShowAddCategory
  );
  const dispatch = useDispatch<AppDispatch>();
  const getListCategory = useGetListCategory();
  const postNewCategory = usePostNewCategory();
  const handleAddCategory = () => {
    const newCategory: ICategory = {
      id: uuidv4(),
      category: category,
    };

    postNewCategory.mutate(newCategory, {
      onSuccess: () => {
        getListCategory.refetch(), handleCloseAddCategory();
      },
    });
  };
  const handleCloseAddCategory = () => {
    dispatch(setShowAddCategory(false));
  };

  return (
    <Modal open={showAddCategory}>
      <Box sx={formStyle}>
        <FormHeader sx={{ backgroundColor: "blue" }}>
          <Typography variant='h6'>Add New Category</Typography>
        </FormHeader>
        <FormBody>
          <TextField
            label='New Category'
            variant='outlined'
            size='small'
            value={category}
            onChange={(e: any) => setCategory(e.target.value)}
          />
        </FormBody>
        <FormFooter>
          <Button variant='contained' onClick={handleAddCategory}>
            Add
          </Button>
          <Button
            variant='contained'
            color='info'
            onClick={handleCloseAddCategory}>
            Close
          </Button>
        </FormFooter>
      </Box>
    </Modal>
  );
};
export default AddNewCategoryComponent;

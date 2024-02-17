/** @format */

import { Box, CircularProgress } from "@mui/material";

const SpinnerComponent = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} p={2}>
      <CircularProgress />
    </Box>
  );
};
export default SpinnerComponent;

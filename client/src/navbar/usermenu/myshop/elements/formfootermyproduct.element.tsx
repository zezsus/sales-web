/** @format */

import { Button } from "@mui/material";
import { FormFooter } from "../../common/assets/formstyle";

const FormFooterMyProductElement = (props: any) => {
  return (
    <FormFooter>
      <Button
        variant='contained'
        color={props.color}
        onClick={props.handleAction}>
        {props.action}
      </Button>
      <Button variant='contained' color='info' onClick={props.handleClose}>
        Close
      </Button>
    </FormFooter>
  );
};

export default FormFooterMyProductElement;

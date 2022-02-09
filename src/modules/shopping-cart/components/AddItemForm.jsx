import { Box, Button, FormControl, MenuItem, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";

import { ALL_PRODUCTS, ShoppingCartItem } from "../models";

const AddItemBox = styled(Box)(() => ({
  display: "flex",
  flex: 1,
  marginTop: "25px",
}));

const ItemSelectWrapper = styled(FormControl)(() => ({
  width: "200px",
  marginRight: "20px",
}));

const QuantityInputWrapper = styled(FormControl)(() => ({
  width: "80px",
  marginRight: "20px",
}));

// type AddItemFormProps = {};

const AddItemForm = ({ items, addItems }) => {
  const [productId, setProductId] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);

  const textfieldHandle = (event) => {
    const target = event.target.value;
    const elem = ALL_PRODUCTS.find((el) => el.id === target);
    setProductId(target);
  };

  const quantityHandle = (event) => {
    const target = event.target.value;
    setQuantity(target);
  };

  const addValue = React.useCallback(() => {
    return addItems(productId, quantity);
  }, [productId, quantity]);

  return (
    <AddItemBox>
      <ItemSelectWrapper>
        <TextField
          select
          value={productId}
          label="Item"
          onChange={(event) => textfieldHandle(event)}
        >
          {ALL_PRODUCTS.map((product) => (
            <MenuItem key={product.id} value={product.id}>
              {product.label}
            </MenuItem>
          ))}
        </TextField>
      </ItemSelectWrapper>
      <QuantityInputWrapper>
        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(event) => quantityHandle(event)}
        />
      </QuantityInputWrapper>
      <Button variant="contained" disabled={!quantity || !productId} onClick={addValue}>
        Add
      </Button>
    </AddItemBox>
  );
};

export default AddItemForm;

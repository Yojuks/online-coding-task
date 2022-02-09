import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";

import { ShoppingCartItem } from "../models";

import AddItemForm from "./AddItemForm";
import ItemsList from "./ItemsList";
import Total from "./Total";

const ShoppingCardWrapper = styled(Paper)(() => ({
  width: 600,
  margin: "auto",
  padding: 50,
  minHeight: 500,
}));

const ShoppingCartHeader = styled(Typography)(() => ({
  textTransform: "uppercase",
  fontWeight: "bold",
  fontSize: 24,
}));

const ShoppingCart = () => {
  const [items, setItems] = React.useState([]);

  const addItems = (productId, quantity) => {
    const obj = { productId, quantity };

    let findElement = [...items].find((el) => el.productId === productId);
    console.log(findElement, "findElement");

    if (findElement === undefined) {
      setItems((items) => {
        return [...items, obj];
      });
    } else {
      setItems((items) => {
        let arr = [...items].map((el) => {
          if (el.productId === productId) {
            el.quantity = +el.quantity + +quantity;
          }
        });
        return [...arr];
      });
    }
  };
  // setItems((items) => {
  // let findElement = [...items].find((el) => el.productId === productId);
  // findElement.quantity = +findElement.quantity + +quantity;

  // if (findElement !== undefined) {
  //   let newState = [...items, obj];
  //   let arr = newState.map((el) => {
  //     if (el.productId === productId) {
  //       el.productId = productId;
  //       el.quantity = +el.quantity + +quantity;
  //     }
  //   });
  // };
  //     return [...items, obj];
  //   });
  // };

  return (
    <ShoppingCardWrapper>
      {/* {console.log(items)} */}
      <ShoppingCartHeader>Shopping Cart</ShoppingCartHeader>
      <AddItemForm items={items} addItems={addItems} />
      {!!items.length && (
        <React.Fragment>
          <ItemsList items={items} />
          <Total items={items} />
        </React.Fragment>
      )}
    </ShoppingCardWrapper>
  );
};
export default ShoppingCart;

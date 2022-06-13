import { DeleteOutline } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import { useCart } from "../contexts/Cart";

export const CartProduct = ({ product }) => {
  const [hover, setHover] = useState(false);
  const { removeFromCart, plusAmount, minusAmount } = useCart();
  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        display: "flex",
        gap: 2,
        border: "1px solid",
        borderColor: (theme) => theme.palette.divider,
        position: "relative",
        overflow: "hidden",
        p: 1,
      }}
    >
      <Box
        component="img"
        src={product.image}
        sx={{
          width: 70,
          height: 80,
          background: (theme) => theme.palette.primary.light,
        }}
      />

      <Box>
        <Typography>{product.title.substring(0, 15)}...</Typography>
        <Typography
          sx={{
            fontSize: 20,
            color: (theme) => theme.palette.success.dark,
          }}
        >
          ${product.price}
        </Typography>
        <Typography>Amount:</Typography>
        <ButtonGroup color="success" size="small">
          <Button disabled={product.total === 1 ? true : false} onClick={() => minusAmount(product.id)}>-</Button>
          <Button>{product.total}</Button>
          <Button onClick={() => plusAmount(product.id)}>+</Button>
        </ButtonGroup>
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: hover ? 0 : "-20%",
          top: 0,
          height: "100%",
          transition: "0.5s",
        }}
      >
        <Box
          onClick={() => removeFromCart(product.id)}
          sx={{
            background: (theme) => theme.palette.error.light,
            height: "100%",
            padding: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            cursor: "pointer",
          }}
        >
          <DeleteOutline />
        </Box>
      </Box>
    </Box>
  );
};

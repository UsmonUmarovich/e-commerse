import { Box } from "@mui/material";
import React from "react";
import { useCart } from "../contexts/Cart";

export const TotalSum = () => {
  const { cart } = useCart();
  const summ = cart.reduce((p, v) => {
    let sum = v.price * v.total;
    return p + sum;
  }, 0);
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        padding: "5px",
        background: (theme) => theme.palette.success.light,
        color: "#fff",
        borderRadius: "5px",
      }}
    >
      Total sum: ${summ.toFixed(2)}
    </Box>
  );
};

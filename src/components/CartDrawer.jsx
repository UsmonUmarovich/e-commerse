import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useCart } from "../contexts/Cart";
import { useDrawer } from "../contexts/Drawer";
import { CartProduct } from "./CartProduct";
import { TotalSum } from "./TotalSum";

export const CartDrawer = () => {
  const { open, closeDrawer } = useDrawer();
  const { cart, clearCart } = useCart();
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={closeDrawer}
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 777,
          boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ width: 300, p: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 20 }}>Your Shopping Cart</Typography>

            <IconButton>
              <Close onClick={closeDrawer} />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 2,
            }}
          >
            <Button
              onClick={clearCart}
              sx={{ width: "100%" }}
              color="warning"
              variant="outlined"
            >
              Clear
            </Button>
            <Button sx={{ width: "100%" }} color="warning" variant="contained">
              Buy
            </Button>
          </Box>
          <Divider
            sx={{
              my: 2,
            }}
          />
          <TotalSum />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginTop: 2,
        }}
      >
        {cart.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </Box>
    </Drawer>
  );
};

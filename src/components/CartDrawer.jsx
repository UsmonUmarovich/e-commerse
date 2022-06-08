import { Box, Drawer, Typography } from "@mui/material";
import React from "react";

export const CartDrawer = ({ open }) => {
  return (
    <Drawer anchor="right" open={open}>
      <Box sx={{ width: 300, p: 2 }}>
        <Typography sx={{ fontSize: 35 }}>Cart</Typography>
      </Box>
    </Drawer>
  );
};

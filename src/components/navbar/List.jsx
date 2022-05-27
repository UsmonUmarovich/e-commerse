import { Menu } from "@mui/material";
import React from "react";

const list = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Cart",
    path: "/cart",
  },
];

export const List = ({ anchorElNav, handleCloseNavMenu }) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      {
          
      }
    </Menu>
  );
};

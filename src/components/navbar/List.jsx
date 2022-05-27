import { AddShoppingCartOutlined, HomeOutlined } from "@mui/icons-material";
import { Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const list = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: HomeOutlined,
  },
  {
    id: 2,
    title: "Cart",
    path: "/cart",
    icon: AddShoppingCartOutlined,
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
      {list.map((item) => {
        return (
          <MenuItem key={item.id}>
            <Typography
              to={item.path}
              component={Link}
              sx={{
                display: "flex",
                gap: "1",
                alignItems: "center",
                color: (theme) => theme.palette.primary.main,
                textDecoration: "none"
              }}
            >
              <item.icon />
              {item.title}
            </Typography>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

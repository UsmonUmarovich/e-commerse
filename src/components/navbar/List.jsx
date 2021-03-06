import { HomeOutlined, ShoppingCart } from "@mui/icons-material";
import { Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDrawer } from "../../contexts/Drawer";

export const List = ({ anchorElNav, handleCloseNavMenu }) => {
  const { openDrawer } = useDrawer();

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
      <MenuItem>
        <Typography
          component={Link}
          to="/"
          sx={{
            display: "flex",
            gap: "1",
            alignItems: "center",
            color: (theme) => theme.palette.primary.main,
            textDecoration: "none",
          }}
        >
          <HomeOutlined />
          Home
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography
          onClick={() => openDrawer()}
          sx={{
            display: "flex",
            gap: "1",
            alignItems: "center",
            color: (theme) => theme.palette.primary.main,
            textDecoration: "none",
          }}
        >
          <ShoppingCart />
          Cart
        </Typography>
      </MenuItem>
    </Menu>
  );
};

import { Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { list } from "./listarray";

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
                textDecoration: "none",
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

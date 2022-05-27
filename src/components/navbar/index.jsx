import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { List } from "./List";
import { list } from "./listarray";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5">3-COM</Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={handleOpenNavMenu}
              sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <List
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
            />
            <Box sx={{display: {xs: "none", md: "flex"}}}>
              {list.map((item) => {
                return (
                  <Button
                    component={Link}
                    to={item.path}
                    startIcon={<item.icon />}
                    variant="text"
                    color="inherit"
                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

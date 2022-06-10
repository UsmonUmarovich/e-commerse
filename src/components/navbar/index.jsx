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
import { Link } from "react-router-dom";
import { HomeOutlined, ShoppingCart } from "@mui/icons-material";
import { useDrawer } from "../../contexts/Drawer";

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { openDrawer } = useDrawer();

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
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                component={Link}
                to="/"
                startIcon={<HomeOutlined />}
                variant="text"
                color="inherit"
              >
                Home
              </Button>
              <Button
                startIcon={<ShoppingCart />}
                variant="text"
                color="inherit"
                onClick={() => openDrawer()}
              >
                Cart
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import { MenuIcon } from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { List } from "./List";

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
          <Box>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <List
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

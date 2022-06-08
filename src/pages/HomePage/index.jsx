import { SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { CartDrawer } from "../../components/CartDrawer";
import { HomeTop } from "../../components/home/HomeTop";

const HomePage = () => {
  const [open, setOpen] = useState(false)

  const openCart = () => {
    setOpen(true)
  }

  const closeCart = () => {
    setOpen(false)
  }

  const toggleCart = () => {
    setOpen(prew => !prew)
  }
  return (
    <Fragment>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            mt: 6,
          }}
        >
          <HomeTop />
          <Paper
            variant="outlined"
            sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
          >
            <InputBase placeholder="search" />
            <IconButton>
              <SearchOutlined />
            </IconButton>
          </Paper>
        </Box>
        <Divider sx={{ mt: 4 }} />
        <Outlet />

        <CartDrawer open={open}/>
      </Container>
    </Fragment>
  );
};

export default HomePage;

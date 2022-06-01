import { SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { HomeTop } from "../../components/home/HomeTop";

const HomePage = () => {
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
      </Container>
    </Fragment>
  );
};

export default HomePage;

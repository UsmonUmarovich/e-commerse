import { SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

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
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} to="/" variant="outlined">All</Button>
            <Button component={Link} to="/" variant="outlined">Electronics</Button>
            <Button component={Link} to="/" variant="outlined">jewelery</Button>
            <Button component={Link} to="/" variant="outlined">men's clothing</Button>
            <Button component={Link} to="/" variant="outlined">women's clothing</Button>
          </Box>

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
      </Container>
    </Fragment>
  );
};

export default HomePage;

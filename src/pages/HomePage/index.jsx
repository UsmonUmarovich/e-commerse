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
import { Outlet, useNavigate } from "react-router-dom";
import { HomeTop } from "../../components/home/HomeTop";
import { useEffect } from "react";

const HomePage = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [warning, setWarning] = useState(false);

  const clickHandler = () => {
    if (!value.trim() || value.length < 3) {
      setWarning(true);
      return;
    }
    navigate("/search/" + value);
  };

  useEffect(() => {
    setTimeout(() => {
      setWarning(false);
    }, 3000);
  }, [warning === true]);

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
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              border: "1px solid",
              borderColor: warning ? "red" : "gray",
            }}
          >
            <InputBase
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={warning ? "Min charaters 3" : "Search"}
            />
            <IconButton onClick={clickHandler}>
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

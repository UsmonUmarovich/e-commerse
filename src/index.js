import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import AllProductProvider from "./contexts/AllProducts";
import Routers from "./Routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <AllProductProvider>
        <Routers />
      </AllProductProvider>
      <CssBaseline />
    </BrowserRouter>
  </>
);

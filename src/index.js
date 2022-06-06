import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import AllProductProvider from "./contexts/AllProducts";
import CategoriesProvider from "./contexts/Categories";
import ProductsByCategoryProvider from "./contexts/ProductsByCategory";
import ProductProvider from "./contexts/Product";
import Routers from "./Routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <AllProductProvider>
        <CategoriesProvider>
          <ProductsByCategoryProvider>
            <ProductProvider>
              <Routers />
            </ProductProvider>
          </ProductsByCategoryProvider>
        </CategoriesProvider>
      </AllProductProvider>
      <CssBaseline />
    </BrowserRouter>
  </>
);

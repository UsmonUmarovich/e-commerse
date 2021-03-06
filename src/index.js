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
import CartProvider from "./contexts/Cart";
import DrawerProvider from "./contexts/Drawer";
import DialogProvider from "./contexts/CartDialog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <AllProductProvider>
        <CategoriesProvider>
          <ProductsByCategoryProvider>
            <ProductProvider>
              <CartProvider>
                <DrawerProvider>
                  <DialogProvider>
                    <Routers />
                  </DialogProvider>
                </DrawerProvider>
              </CartProvider>
            </ProductProvider>
          </ProductsByCategoryProvider>
        </CategoriesProvider>
      </AllProductProvider>
      <CssBaseline />
    </BrowserRouter>
  </>
);

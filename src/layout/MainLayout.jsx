import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useAllProducts } from "../contexts/AllProducts";

export const MainLayout = () => {
  const {isError, isLoading, products} = useAllProducts()

  console.log();
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

import React from "react";
import { Outlet } from "react-router-dom";
import { BuyDialog } from "../components/BuyDialog";
import { Footer } from "../components/Footer";
import Navbar from "../components/navbar";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <BuyDialog />
      <Footer />
    </div>
  );
};

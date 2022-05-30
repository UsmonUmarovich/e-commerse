import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import query from "../services/api/api.service";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

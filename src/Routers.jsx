import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import { Products } from "./pages/HomePage/Products";

function Routers() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<Products />} />
            <Route path="/:id" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default Routers;

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kids_banner from "./assets/banner_kids.png";
import ShopCategory from "./Pages/ShopCategory";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/mens"
        element={<ShopCategory banner={men_banner} category="men" />}
      />
      <Route
        path="/womens"
        element={<ShopCategory banner={women_banner} category="women" />}
      />
      <Route
        path="/kids"
        element={<ShopCategory banner={kids_banner} category="kid" />}
      />
      <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<Product />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;

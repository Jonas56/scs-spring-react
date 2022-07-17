import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import CategoryFilter from "../pages/CategoryFilter";
import NotFound from "../pages/404";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import OrderPlaced from "../pages/OrderPlaced";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import OrderDetails from "../pages/OrderDetails";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="checkout" element={<Checkout />} />

        <Route path="products" element={<CategoryFilter />} />

        <Route path="products/:id" element={<ProductDetails />} />

        <Route path="profile" element={<Profile />} />

        <Route path="orderDetails/:id" element={<OrderDetails />} />
        
        <Route path="success" element={<OrderPlaced />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

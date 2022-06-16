import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import CategoryFilter from "./pages/CategoryFilter";
import NotFound from "./pages/404";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="checkout" element={<Checkout />} />

        <Route path="products" element={<CategoryFilter />} />
        <Route path="products/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

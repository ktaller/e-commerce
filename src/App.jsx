import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Registration from "./components/Registration";
import LoginForm from "./components/LoginForm";
import Contact from "./pages/About";
import Layout from "./components/Layout";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { LoginProvider } from "./context/LoginContext"; // Import LoginProvider

function App() {
  return (
    <LoginProvider> {/* Wrap the application with LoginProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;

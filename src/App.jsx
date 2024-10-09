import React from "react";
// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Registration from "./components/Registration";
import LoginForm from "./components/LoginForm";
import About from "./pages/About";
import Contact from "./pages/About";
import Layout from "./components/Layout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index path = "/" element ={<Home/>}/>
          <Route path = "/products" element = {<Products/>}/>
          <Route path = "/registration" element = {<Registration/>}/>
          <Route path = "/login" element = {<LoginForm/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path = "/about" element = {<About/>}/>
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

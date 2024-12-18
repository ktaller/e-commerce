import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm"style={{backgroundColor:"#d8d4d4"}}>
        <div className="container">
          <Link className="navbar-brand fw-bolder fs-4" to="/">
            stAr-SHOP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent "
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-normal text-dark">
              <li className="nav-item ms-2">
                <Link to={"/  "}> Home </Link>
              </li>
              <li className="nav-item ms-2">
                <Link to={"/products"}> Products </Link>
              </li>

              <li className="nav-item ms-2">
                <Link to={"/contact"}> Contact </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to={`/login`} className="btn btn-outline-dark ms-1">
                <i className="fa fa-sign-in me-1"></i> Login
              </Link>

              <Link to={"/cart"} className="btn btn-outline-dark ms-1">
                <i className="fa fa-cart-plus me-1"></i> Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

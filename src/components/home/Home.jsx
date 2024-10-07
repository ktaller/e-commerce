import React from "react";
import Products from "../products/Products";
// import pic from ./assets

function Home() {
  return (
    <div className="hero">
      <div className="card bg-success text-black border-0">
        <img src='/src/assets/player.png' className="card-img" alt="background" height='550px'/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SPECIAL ARRIVALS </h5>
          <p className="card-text lead fs-2">
            CHECK OUT TRENDS
          </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;

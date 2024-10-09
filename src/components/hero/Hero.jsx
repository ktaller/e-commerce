import React from "react";
import Products from "../products/Products";
// import pic from ./assets

function Hero() {
  return (
    <>
      <div className="hero ">
        <div className="card bg-success text-black border-0">
          <img
            src="/src/assets/player.png"
            className="card-img"
            alt="background"
            height="750px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                NEW SPECIAL ARRIVALS{" "}
              </h5>
              <p className="card-text lead fs-1 fw-light">CHECK OUT THIS FLASHY TRENDS</p>
              
            </div>
          </div>
        </div>
        <hr />
        {/* <Products /> */}
      </div>
    </>
  );
}

export default Hero;

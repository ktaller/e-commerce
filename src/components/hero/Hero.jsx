import React from "react";
import { Carousel } from "react-bootstrap"; // Import Bootstrap Carousel
// import Products from "../products/Products";

function Hero() {
  return (
    <>
      <div className="hero">
        <div
          className="card text- border-0"
          style={{
            height: "100vh",
            backgroundColor:"#d8d4d4"
          }}
        >
          <div className="card-img-overlay d-flex flex-row justify-content-end text-end">
            <div className="container">
              <h5 className="card-title display-4 fw-bolder mb-0">
                NEW SPECIAL ARRIVALS
              </h5>
              <p className="card-text lead fs-1 fw-light">
                CHECK OUT THIS FLASHY TRENDS
              </p>
            </div>

          </div>
          {/* Carousel for swiping images */}
          <Carousel
            controls={false}
            indicators={false}
            interval={1000}
            fade
            className="position-absolute w-100 h-100"
            style={{ top: 0, left: 0 }}
          >
            <Carousel.Item>
              <img
                src="/assets/all-star-converse.png"
                className="d-block w-100"
                alt="Image 2"
                style={{
                  objectFit: "scale-down",
                  height: "100vh",
                  opacity: "0.7",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/shoe-bla.png" // Change to your image path
                className="d-block w-100"
                alt="Image 3"
                style={{
                  objectFit: "scale-down",
                  height: "100vh",
                  opacity: "0.7",
                }}

              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/converse-3.png" // Change to your image path
                className="d-block w-100"
                alt="Image 3"
                style={{
                  objectFit: "scale-down",
                  height: "100vh",
                  opacity: "0.7",
                }}

              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/shoe-311826_1280.png" // Change to your image path
                className="d-block w-100"
                alt="Image 3"
                style={{
                  objectFit: "scale-down",
                  height: "100vh",
                  opacity: "0.7",
                }}

              />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* <hr /> */}
        {/* <Products /> */}
      </div>
    </>
  );
}

export default Hero;

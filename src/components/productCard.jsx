import React from "react";
import { Link } from "react-router-dom";

function Card({ items: product }) {
  return (<>
    <div className="col-md-4 mb-3">
    {/* <Link to ={`productdetail/${product.id}`}> */}
      <div className="card h-70 text-center p-0 bg-warning">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          height="250px"
        />
        <div className="card-body">
          <h5 className="card-title mb-0 ">
            {product.title.substring(0, 15)}...
          </h5>
          <p className="card-text lead fw-bold text-danger">{product.price}</p>
          <Link to = {`/productdetail/${product.id}`} className="btn btn-outline-dark fw-bolder bg-success text-white cursor-pointer">
            Buy Now
          </Link>
        </div>
      </div>
    {/* </Link> */}
    </div>
    </>
  );
}

export default Card;

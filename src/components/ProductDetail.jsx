import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Import the CartContext
import Loader from "./Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { addToCart, notification } = useContext(CartContext); // Get addToCart and notification from context

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching the product:", error);
      }
      setLoading(false);
    };
    getProduct();
  }, [id]); // Dependency array added to only fetch once when `id` changes

  const ShowProduct = () => {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div
            className="card mb-3"
            style={{
              maxWidth: "800px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.image}
                  className="img-fluid rounded-start"
                  alt={product.title}
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </div>
              <div className="col-md-8" style={{ backgroundColor: "#d8d4d4" }}>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>${product.price}</strong>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Category: {product.category}
                    </small>
                  </p>
                  <button
                    className="btn btn-outline-dark mt-2"
                    onClick={() => addToCart(product)}
                  >
                    <i className="fa fa-cart-plus me-1"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        {/* Show notification if it exists */}
        {notification && (
          <div className="alert alert-success" role="alert">
            {notification}
          </div>
        )}
        <div className="row">{loading ? <Loader /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default ProductDetail;

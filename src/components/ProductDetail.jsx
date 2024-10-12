import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Priduct ID form url", id);
    
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

  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="card mb-1">
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt={product.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>${product.price}</strong>
                </p>
                <p className="card-text">
                  <small className="text-muted">Category: {product.category}</small>
                </p>
                <button className="btn btn-outline-dark ms-1">
                  <i className="fa fa-sign-in me-1"></i> Add to Cart
                </button>
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
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default ProductDetail;

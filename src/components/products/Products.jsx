import React, { useState, useEffect } from "react";
import Card from "../productCard";
import Loader from "../Loader";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const FilterProducts = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => FilterProducts("men's clothing")}
          >
            Men's Category
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => FilterProducts("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => FilterProducts("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => FilterProducts("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
        //  console.log(product) 
          return (
            <Card items={product} key={product.id}/>
          );
        })}``
      </>
    );
  };
  return (
    <div>
      <div className="container my-4 py-4">
        <div className="row">
          {/* <div className="col-12 mb-5"> */}
            {/* <h1 className="display-6 fw-bolder text-center">New products.</h1> */}
          {/* </div> */}
        </div>
        <div className="row justify-content-center">
          {loading ? <Loader /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import { Link } from "react-router-dom";
import "../Components/Product.css";

const Product = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt="Avatar" />
      <Link to={`/products/${product.id}/`}>
        <div className="container">
          <h5>
            <b>{product.name}</b>
          </h5>
          <h6>${product.price}</h6>
        </div>
      </Link>
      <div className=""></div>
    </div>
  );
};

export default Product;

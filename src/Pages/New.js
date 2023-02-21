import React from "react";
import ProductNewForm from "../Components/ProductNewForm";

import "./New.css"

const New = () => {
  return (
    <div className="new-page">
      <h1 className="new-h1">Add Product</h1>
      <ProductNewForm />
    </div>
  );
};

export default New;

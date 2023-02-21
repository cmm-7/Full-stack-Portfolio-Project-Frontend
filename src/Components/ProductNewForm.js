import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./ProductNew.css"

const API = process.env.REACT_APP_API_URL;

const SnackNewForm = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    type: "",
    img: "",
  });

  const handleTextChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${API}/products`, product)
      .then(() => {
        navigate("/products");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="newProduct">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="new_labels">
          Name
        </label>
        <input
          onChange={handleTextChange}
          id="name"
          name="name"
          type="text"
          value={product.name}
        />

        <label htmlFor="price" className="new_labels">
          Price
        </label>
        <input
          onChange={handleTextChange}
          id="price"
          name="price"
          type="number"
          value={product.price}
        />

        <label htmlFor="description" className="new_labels">
          Description
        </label>
        <input
          onChange={handleTextChange}
          id="description"
          name="description"
          type="text"
          value={product.description}
        />

        <label htmlFor="img" className="new_labels">
          Image
        </label>
        <input
          onChange={handleTextChange}
          id="img"
          name="img"
          type="text"
          value={product.img}
        />

        <label htmlFor="type" className="new_labels">
          Type
        </label>
        <input
          onChange={handleTextChange}
          id="type"
          name="type"
          type="text"
          value={product.type}
        />

        <br />

        <input
          className="new-submit"
          type="submit"
          value="Submit"
          style={{ color: "black" }}
        />
      </form>
    </div>
  );
};

export default SnackNewForm;

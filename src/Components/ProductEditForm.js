import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./ProductEditForm.css";

const ProductEditForm = () => {
  const API = process.env.REACT_APP_API_URL;
  let { id } = useParams();
  let navigate = useNavigate();

  const [edit, setEdit] = useState({
    name: "",
    price: "",
    description: "",
    type: "",
    img: "",
  });

  const updateProduct = (updatedProduct) => {
    axios
      .put(`${API}/products/${id}`, updatedProduct)
      .then(
        () => {
          navigate(`/products/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleText = (e) => {
    setEdit({ ...edit, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/products/${id}`)
    .then(
      (res) => setEdit(res.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate, API]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(edit, id);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="edit_labels">
          Name:
        </label>
        <input
          id="name"
          value={edit.name}
          type="text"
          onChange={handleText}
          placeholder="Product Name"
          required
        />
        <label htmlFor="price" className="edit_labels">
          Price:
        </label>
        <input
          id="price"
          type="text"
          value={edit.price}
          onChange={handleText}
        />
        <label htmlFor="description" className="edit_labels">
          Description:
        </label>
        <input
          id="description"
          type="text"
          name="description"
          value={edit.description}
          onChange={handleText}
        />
        <label htmlFor="type" className="edit_labels">
          Type:
        </label>
        <input
          id="type"
          type="text"
          name="type"
          onChange={handleText}
          value={edit.type}
        />
        <label htmlFor="img" className="edit_labels">
          Image:
        </label>
        <input
          id="img"
          type="text"
          pattern="https://.*"
          name="img"
          onChange={handleText}
          value={edit.img}
        />

        <br />

        <input
          classname="edit-submit"
          type="submit"
        />
      </form>
      <Link to={`/products/${id}`}>
        <button className="edit-button">Nevermind!</button>
      </Link>
    </div>
  );
};

export default ProductEditForm;

import { useState, useEffect } from "react";
import axios from "axios";

import "../Components/Products.css"
import Product from "./Product";

const API = process.env.REACT_APP_API_URL;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // function sortByNameDesc() {
  //   const sortedNames = [...snacks].sort((a, b) => {
  //     return a.name > b.name ? 1 : -1;
  //   });
  //   setSnacks(sortedNames);
  // }

  // function sortByNameAsc() {
  //   const sortedNames = [...products].sort((a, b) => {
  //     return a.name > b.name ? 1 : -1;
  //   });
  //   setProducts(sortedNames);
  // }

  return (
    <div className="Products">
      <div className="name">
        {/* <button onClick={sortByNameAsc}>Sort by Name ⬇️</button> */}
      </div>
      <div className="cards">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;

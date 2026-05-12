//go intio product-list-crud-api-node
//npm i
//npm start
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./Product";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://10.5.1.238:3000/itlab/minor2/product.json") //change this with given link 
      .then((response) => {
        // console.log("Full response:", response);
        // console.log("Response data:", response.data);
        
        // console.log("Is Array?", Array.isArray(response.data));
        // console.log("Data keys:", Object.keys(response.data));

        // console.log("First item:", response.data[0]);
        // console.log("First item keys:", Object.keys(response.data[0]));

        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.error("Error object:", err);
        // console.error("Error message:", err.message);
        // console.error("Error status:", err.response?.status);

        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Product List</h1>

      <div className="product-container">
        {products.map((product) => (
          // console.log("Product item:", product)   ← can't use here, move it above return
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import React from "react";

function ProductCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>

      <p>
        <strong>Price:</strong> {props.price}
      </p>

      <p>
        <strong>Category:</strong> {props.category}
      </p>
    </div>
  );
}

export default ProductCard;
import React from "react";

function Product({ imageUrl, description }) {
  return (
    <div className="product">
      <img src={imageUrl} alt={description} />
      <p>{description}</p>
    </div>
  );
}

export default Product;

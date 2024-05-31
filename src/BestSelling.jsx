import React from "react";
import Product from "./Product";
import img1 from "../src/assets/perfume1.png";

function BestSelling() {
  const products = [
    {
      imageUrl: img1,
      description: "Eau de Toilette",
    },
    {
      imageUrl: img1,
      description: "Eau de Toilette",
    },
    {
      imageUrl: img1,
      description: "Eau de Toilette",
    },
    {
      imageUrl: img1,
      description: "Eau de Toilette",
    },
    {
      imageUrl: img1,
      description: "Eau de Toilette",
    },
    {
      imageUrl: img1,
      description: "Eau de Toilette",
    },
  ];

  return (
    <div className="bestSelling">
      <div className="title">
        <h1>Meet our Favorites and Best Selling</h1>
        <p>"Perfume is the art that makes memory speak."</p>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <Product
            key={index}
            imageUrl={product.imageUrl}
            description={product.description}
          />
        ))}
      </div>
      <div className="button-container">
        <button className="button-all-products">view all products</button>
      </div>
    </div>
  );
}

export default BestSelling;

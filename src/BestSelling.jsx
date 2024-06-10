import React from "react";
import Product from "./Product";
import img1 from "../src/assets/perfume1.png";
import img2 from "../src/assets/perfume2.png";
import img3 from "../src/assets/perfume3.png";
import img4 from "../src/assets/perfume4.png";
import img5 from "../src/assets/perfume5.png";
import img6 from "../src/assets/perfume6.png";
import { NavLink } from "react-router-dom";

function BestSelling() {
  const products = [
    {
      imageUrl: img1,
      description: "Eau de Toilette",
    },
    {
      imageUrl: img2,
      description: "Eau de Toilette",
    },
    {
      imageUrl: img3,
      description: "Eau de Toilette",
    },
    {
      imageUrl: img4,
      description: "Eau de Toilette",
    },
    {
      imageUrl: img5,
      description: "Eau de Toilette",
    },
    {
      imageUrl: img6,
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

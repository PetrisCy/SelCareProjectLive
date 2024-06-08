import React, { useState } from "react";
import Product from "./Product";
import img1 from "../src/assets/perfume1.png";
import img2 from "../src/assets/perfume2.png";
import img3 from "../src/assets/perfume3.png";
import img4 from "../src/assets/perfume4.png";
import img5 from "../src/assets/perfume5.png";
import img6 from "../src/assets/perfume6.png";
import s1 from "../src/assets/skin1.webp";
import s2 from "../src/assets/skin2.webp";
import s3 from "../src/assets/skin3.webp";
import h1 from "../src/assets/hair1.webp";
import h2 from "../src/assets/hair2.webp";
import h3 from "../src/assets/hair3.webp";
import h4 from "../src/assets/hair4.webp";

const products = [
  {
    imageUrl: img1,
    description: "Eau de Toilette",
    category: "Perfume",
  },
  {
    imageUrl: img2,
    description: "Eau de Toilette",
    category: "Perfume",
  },
  {
    imageUrl: img3,
    description: "Eau de Toilette",
    category: "Perfume",
  },
  {
    imageUrl: img4,
    description: "Eau de Toilette",
    category: "Perfume",
  },
  {
    imageUrl: img5,
    description: "Eau de Toilette",
    category: "Perfume",
  },
  {
    imageUrl: img6,
    description: "Eau de Toilette",
    category: "Perfume",
  },
  {
    imageUrl: s1,
    description: "Eau de Cream",
    category: "Skin",
  },
  {
    imageUrl: s2,
    description: "Eau de Cream",
    category: "Skin",
  },
  {
    imageUrl: s3,
    description: "Eau de Cream",
    category: "Skin",
  },
  {
    imageUrl: h1,
    description: "Eau de Cream",
    category: "Hair",
  },
  {
    imageUrl: h2,
    description: "Eau de Cream",
    category: "Hair",
  },
  {
    imageUrl: h3,
    description: "Eau de Cream",
    category: "Hair",
  },
  {
    imageUrl: h4,
    description: "Eau de Cream",
    category: "Hair",
  },
];

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <div className="shop">
        <h1>Shop</h1>
        <div className="filters">
          <button onClick={() => handleSelectedCategory("All")}>All</button>
          <button onClick={() => handleSelectedCategory("Perfume")}>
            Perfume
          </button>
          <button onClick={() => handleSelectedCategory("Hair")}>Hair</button>
          <button onClick={() => handleSelectedCategory("Skin")}>
            Skin Care
          </button>
        </div>
        <div className="products">
          {filteredProducts.map((product, index) => (
            <Product
              key={index}
              imageUrl={product.imageUrl}
              description={product.description}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;

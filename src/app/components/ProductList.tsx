"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductCard.module.css";
import Data from "../utils/Data";

const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const productData = Data.productData;

  return (
    <>
      <div className={styles.totalProducts}>
        <p>120 Products</p>
      </div>
      <div className={styles.productsCategory}>
        <div
          style={{
            backgroundColor:
              selectedCategory === "All" ? "#7e59e7" : "transparent",
            color: selectedCategory === "All" ? "white" : "black",
          }}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </div>
        <div
          style={{
            backgroundColor:
              selectedCategory === "Home" ? "#7e59e7" : "transparent",
            color: selectedCategory === "Home" ? "white" : "black",
          }}
          onClick={() => setSelectedCategory("Home")}
        >
          Home
        </div>
        <div
          style={{
            backgroundColor:
              selectedCategory === "Apparel" ? "#7e59e7" : "transparent",
            color: selectedCategory === "Apparel" ? "white" : "black",
          }}
          onClick={() => setSelectedCategory("Apparel")}
        >
          Apparel
        </div>
        <div
          style={{
            backgroundColor:
              selectedCategory === "Accessories" ? "#7e59e7" : "transparent",
            color: selectedCategory === "Accessories" ? "white" : "black",
          }}
          onClick={() => setSelectedCategory("Accessories")}
        >
          Accessories
        </div>
      </div>

      <div className={styles.productList}>
        {productData.map((item, index) => {
          return (
            <ProductCard
              key={index}
              image={item.images[0].src}
              brand={item.brandName}
              title={item.title}
              price={item.compare_at_price}
              discount={item.furrlDiscountPercent}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;

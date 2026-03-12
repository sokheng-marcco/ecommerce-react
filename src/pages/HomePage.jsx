import React from "react";
import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const products = getProducts();

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to Our E-Commerce Store</h1>
        <p className="home-subtitle">
          Discover the best products at the lowest prices.
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

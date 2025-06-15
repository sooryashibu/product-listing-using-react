import React from "react";

export default function ProductCard({ product }) {
  const { name, price, category, rating, image } = product;

  function handleAddToCart() {
    console.log(`Added to cart: ${name}`);
  }

  return (
    <div className="product-card d-flex flex-column">
      <img src={image} alt={name} />
      <div className="product-name">{name}</div>
      <div className="product-category">{category}</div>
      <div className="product-price">${price.toFixed(2)}</div>
      <div className="product-rating">⭐ {rating.toFixed(1)}</div>
      <button
        className="btn btn-success btn-sm mt-auto"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
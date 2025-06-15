import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.length ? (
        products.map((p) => <ProductCard key={p.id} product={p} />)
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

import React from "react";

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <select
      className="form-select"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}

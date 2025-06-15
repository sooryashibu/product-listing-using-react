import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

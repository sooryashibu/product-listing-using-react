import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import SortOptions from "./components/SortOptions";
import ProductList from "./components/ProductList";
import { products as productsData } from "./data/products";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  // derive unique categories + "All"
  const categories = useMemo(() => {
    const cats = productsData.map((p) => p.category);
    return ["All", ...new Set(cats)];
  }, []);

  // filter & sort
  const filteredProducts = useMemo(() => {
    let arr = productsData;

    // search filter
    if (search.trim()) {
      arr = arr.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // category filter
    if (category !== "All") {
      arr = arr.filter((p) => p.category === category);
    }

    // sort
    if (sortOption === "price-asc") {
      arr = arr.slice().sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      arr = arr.slice().sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating-desc") {
      arr = arr.slice().sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "rating-asc") {
      arr = arr.slice().sort((a, b) => a.rating - b.rating);
    }

    return arr;
  }, [search, category, sortOption]);

  return (
    <>
      <Header />
      <main className="container my-4">
        <div className="row mb-3 align-items-center">
          <div className="col-md-4 mb-2">
            <SearchBar search={search} setSearch={setSearch} />
          </div>
          <div className="col-md-3 mb-2">
            <CategoryFilter
              categories={categories}
              selectedCategory={category}
              setSelectedCategory={setCategory}
            />
          </div>
          <div className="col-md-3 mb-2">
            <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
          </div>
        </div>

        <ProductList products={filteredProducts} />
      </main>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import ProductCard from "../components/common/ProductCard";

const CATEGORIES = [
  { label: "Men", value: "men's clothing" },
  { label: "Women", value: "women's clothing" },
  { label: "Jewellery", value: "jewelery" },
  { label: "Electronics", value: "electronics" },
];

const SORT_OPTIONS = [
  { label: "Recommended", value: "recommended" },
  { label: "Price : Low to High", value: "lowToHigh" },
  { label: "Price : High to Low", value: "highToLow" },
];

export default function ProductListing() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("recommended");
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    let filtered = products.filter((p) =>
      selectedCategories.length === 0
        ? true
        : selectedCategories.includes(p.category)
    );
    if (sortOption === "lowToHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(filtered);
  }, [products, selectedCategories, sortOption]);

  const handleCategoryChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleUnselectAll = () => setSelectedCategories([]);

  // Responsive: hide sidebar on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-lg">
              {filteredProducts.length} ITEMS
            </span>
            <button
              className="text-sm text-gray-500 hover:underline ml-2 md:hidden"
              onClick={() => setFilterOpen((v) => !v)}
            >
              {filterOpen ? "HIDE FILTER" : "SHOW FILTER"}
            </button>
            <button
              className="text-sm text-gray-500 hover:underline ml-2 hidden md:inline"
              onClick={() => setFilterOpen((v) => !v)}
            >
              {filterOpen ? "HIDE FILTER" : "SHOW FILTER"}
            </button>
          </div>
          <div className="relative">
            <button
              className="uppercase font-semibold text-sm flex items-center gap-2 border-none bg-transparent focus:outline-none"
              onClick={() => setSortDropdownOpen((v) => !v)}
            >
              {SORT_OPTIONS.find((o) => o.value === sortOption).label}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {sortDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${
                      sortOption === option.value
                        ? "font-semibold text-black"
                        : "text-gray-700"
                    }`}
                    onClick={() => {
                      setSortOption(option.value);
                      setSortDropdownOpen(false);
                    }}
                  >
                    {sortOption === option.value && (
                      <svg
                        className="w-4 h-4 mr-2 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filter */}
          {filterOpen && (
            <aside className="w-64 hidden md:block flex-shrink-0">
              <div className="border-r pr-6">
                <div className="mb-6">
                  <label className="font-bold text-xs tracking-widest text-gray-900 flex items-center gap-2">
                    <input type="checkbox" className="accent-black" disabled />
                    CUSTOMIZBLE
                  </label>
                </div>
                <div>
                  <div className="font-bold text-xs tracking-widest text-gray-900 mb-2">
                    IDEAL FOR
                  </div>
                  <div className="mb-2 text-xs text-gray-500">All</div>
                  <button
                    className="text-xs text-gray-500 underline mb-2"
                    onClick={handleUnselectAll}
                  >
                    Unselect all
                  </button>
                  <div className="space-y-2 mt-2">
                    {CATEGORIES.map((cat) => (
                      <label
                        key={cat.value}
                        className="flex items-center gap-2 text-sm text-gray-800"
                      >
                        <input
                          type="checkbox"
                          className="accent-black"
                          checked={selectedCategories.includes(cat.value)}
                          onChange={() => handleCategoryChange(cat.value)}
                        />
                        {cat.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          )}
          {/* Mobile Filter */}
          {filterOpen && (
            <aside className="w-full md:hidden mb-6">
              <div className="border-b pb-4 mb-4">
                <div className="mb-4">
                  <label className="font-bold text-xs tracking-widest text-gray-900 flex items-center gap-2">
                    <input type="checkbox" className="accent-black" disabled />
                    CUSTOMIZBLE
                  </label>
                </div>
                <div>
                  <div className="font-bold text-xs tracking-widest text-gray-900 mb-2">
                    IDEAL FOR
                  </div>
                  <div className="mb-2 text-xs text-gray-500">All</div>
                  <button
                    className="text-xs text-gray-500 underline mb-2"
                    onClick={handleUnselectAll}
                  >
                    Unselect all
                  </button>
                  <div className="space-y-2 mt-2">
                    {CATEGORIES.map((cat) => (
                      <label
                        key={cat.value}
                        className="flex items-center gap-2 text-sm text-gray-800"
                      >
                        <input
                          type="checkbox"
                          className="accent-black"
                          checked={selectedCategories.includes(cat.value)}
                          onChange={() => handleCategoryChange(cat.value)}
                        />
                        {cat.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          )}
          {/* Product Grid */}
          <section className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

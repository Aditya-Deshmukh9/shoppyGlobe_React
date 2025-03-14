import React from "react";
import useFetchData from "../../hooks/useFetchData";
import ProductItem from "../ProductItem/ProductItem";
import { useState } from "react";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import Loading from "../Loading";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, loading } = useFetchData(
    "https://dummyjson.com/products"
  );

  useEffect(() => {
    if (data?.products) {
      setProducts(data?.products);
    }
  }, [data]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedCategory === "all" ? true : product.category === selectedCategory
    );

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto">
      <div className="flex justify-between w-full mb-2 px-6">
        <div className="relative hidden md:block">
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 transition-all duration-200"
          />
        </div>
        <div>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="pl-3 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 transition-all duration-200 bg-gray-900"
          >
            <option value="all">All Categories</option>
            {Array.from(
              new Set(products.map((product) => product.category))
            ).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        "Products Not Found"
      ) : (
        <>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-1">
            {filteredProducts.map((item) => (
              <ProductItem key={item.id} {...item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductList;

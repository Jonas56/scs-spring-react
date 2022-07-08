import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  httpGetAllProducts,
  httpGetAllProductsByName,
} from "../../api/productService";
import ProductCard from "./ProductCard";

export default function ListProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [query] = useSearchParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        if (query.get("name")) {
          const products = await httpGetAllProductsByName(query.get("name"));
          setProducts(products);
        } else {
          const products = await httpGetAllProducts();
          setProducts(products);
        }
      } catch (error) {
        setError("Ooops! Something went wrong. Please try again later.");
      }
    }
    fetchProducts();
  }, [setProducts, query]);
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {error && (
            <h1 className="text-gray-900 text-center text-4xl font-bold">
              {error}
            </h1>
          )}
          {products?.length === 0 && (
            <h1 className="text-gray-900 text-center text-4xl font-bold">
              No products found.
            </h1>
          )}
          {products === null && (
            <h1 className="text-gray-900 text-center text-4xl font-bold">
              Loading...
            </h1>
          )}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

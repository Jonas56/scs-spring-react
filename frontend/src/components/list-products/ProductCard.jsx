import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={product?.images[0]?.path}
          alt="alt"
          className="w-auto h-full object-center object-cover lg:w-auto lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <Link to={`/products/${product.id}`}>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {"$"}
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

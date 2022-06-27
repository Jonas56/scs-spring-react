import React from "react";
import { Link } from "react-router-dom";

export default function OrderPlaced() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-green-500 mb-3">
        <svg
          className="w-20 h-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <h1 className="text-6xl font-bold text-center mb-3">
        Order Placed successfully
      </h1>
      <Link to="/" className="text-indigo-700 p-2 font-bold text-lg" href="#">
        Go Back Home &rarr;
      </Link>
    </div>
  );
}

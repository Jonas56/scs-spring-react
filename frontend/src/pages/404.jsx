import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-center">404</h1>
      <h2 className="text-4xl font-bold text-center">Page not found</h2>
      <Link to="/" className="text-indigo-700 p-2 font-bold text-base">
        Go Back Home &rarr;
      </Link>
    </div>
  );
}

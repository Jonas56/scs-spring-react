import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-center">404</h1>
      <h2 className="text-4xl font-bold text-center">Page not found</h2>
      <a className="text-indigo-700 p-2 font-bold text-base" href="http://localhost:3000/">
        Go Back Home &rarr;
      </a>
    </div>
  );
}

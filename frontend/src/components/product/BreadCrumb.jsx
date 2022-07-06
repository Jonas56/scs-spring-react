import { Link } from "react-router-dom";

export default function BreadCrumb({ product }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div className="flex items-center">
            <Link to="/" className="mr-2 text-sm font-medium text-gray-900">
              Home
            </Link>
            <svg
              width={16}
              height={20}
              viewBox="0 0 16 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-5 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <Link
              to="/products"
              className="mr-2 text-sm font-medium text-gray-900"
            >
              Luggage
            </Link>
            <svg
              width={16}
              height={20}
              viewBox="0 0 16 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-5 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li className="text-sm">
          <Link
            to={`/products/${product?.id}`}
            aria-current="page"
            className="font-medium text-gray-500 hover:text-gray-600"
          >
            {product?.name}
          </Link>
        </li>
      </ol>
    </nav>
  );
}

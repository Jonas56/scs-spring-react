import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(product);

  const handleRemoveItem = () => {
    const cartItem = { ...product };
    dispatch(removeFromCart({ cartItem }));
    navigate(0);
  };

  return (
    <li key={product.id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product?.image}
          alt="alt"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={`/products/${product.id}`}> {product.name} </Link>
            </h3>
            <p className="ml-4">${product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product?.color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {product.quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={handleRemoveItem}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

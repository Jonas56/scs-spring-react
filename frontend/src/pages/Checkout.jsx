import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, removeAllFromCart } from "../redux/slices/cartSlice";
import useFormInputs from "../hooks/useFormInputs";
import { httpAddOrder } from "../api/orderService";
import Alert from "../components/utils/Alert";

export default function Checkout() {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useFormInputs({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    zipCode: "",
  });
  const cartSelector = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (cartSelector.cartItems.length > 0) {
      setCart(cartSelector);
    } else {
      navigate("/");
    }
  }, [cartSelector, cart, user, navigate]);

  const handleRemoveItem = (product) => {
    const cartItem = { ...product };
    dispatch(removeFromCart({ cartItem }));
    navigate(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const products = cart.cartItems.map((product) => {
      return {
        product: { id: product.id },
        quantity: product.quantity,
        totalPrice: product.price * product.quantity,
      };
    });
    const order = {
      orderShipping: inputs.streetAddress,
      orderTotal: cart?.cartTotalPrice + 5,
      orderDetails: products,
    };
    try {
      await httpAddOrder(order, user.accessToken);
      navigate("/success");
      dispatch(removeAllFromCart());
    } catch (error) {
      setError("Something went wrong! Please try again later.");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 p-12">
        <div className="flex md:flex-row  justify-center flex-col">
          <div className="md:grid md:grid-cols-2 md:gap-6 w-full flex-1 mr-10">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="px-4 pb-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Shipping Information
                </h3>
              </div>
              <div>
                <form id="checkout" onSubmit={handleSubmit}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      {error && <Alert error={error} />}
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={setInputs}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={setInputs}
                            required
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email-address"
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={setInputs}
                            required
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                          >
                            <option value="us">United States</option>
                            <option value="cn">Canada</option>
                            <option value="mex">Mexico</option>
                            <option value="au">Australia</option>
                            <option value="br">Brazil</option>
                            <option vlaue="fr">France</option>
                            <option value="ger">Germany</option>
                            <option value="in">India</option>
                            <option value="it">Italy</option>
                            <option value="jp">Japan</option>
                            <option value="russ">Russia</option>
                            <option value="sp">Spain</option>
                          </select>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Street address
                          </label>
                          <input
                            type="text"
                            name="streetAddress"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={setInputs}
                            required
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal code
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={setInputs}
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Confirm order
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/** cart */}
          <div className="mt-10 sm:mt-0 flex-1">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Order Summary
              </h3>
            </div>
            {cart && (
              <div className="bg-white overflow-hidden shadow-lg rounded-lg px-10">
                <div className="mt-8">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cart.cartItems.map((product) => {
                        return (
                          <li key={product.id} className="flex py-6 mb-8">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="alt"
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}> {product.name} </a>
                                  </h3>
                                  <p className="ml-4">${product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product?.color}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <select
                                  id="quantity"
                                  name="quantity"
                                  autoComplete="quantity"
                                  className="mt-1 block w-24 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                    (item) => {
                                      return Number(product.quantity) ===
                                        item ? (
                                        <option
                                          key={item}
                                          value={item}
                                          selected
                                        >
                                          {item}
                                        </option>
                                      ) : (
                                        <option key={item} value={item}>
                                          {item}
                                        </option>
                                      );
                                    }
                                  )}
                                </select>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => handleRemoveItem(product)}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-200 py-10 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-700 py-5">
                    <p>Subtotal</p>
                    <p>${cart?.cartTotalPrice}</p>
                  </div>
                  <div className="flex justify-between text-base font-medium text-gray-700 py-5">
                    <p>Shipping</p>
                    <p>$5.00</p>
                  </div>
                  <div className="flex justify-between text-base font-medium text-gray-700 py-5">
                    <p>Taxes</p>
                    <p>$0.00</p>
                  </div>
                  <div className="border-t border-gray-200 py-8">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <p>Total</p>
                      <p>${cart?.cartTotalPrice + 5}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// const Cart = () => {
// }

// const CartItem = () => {
// }

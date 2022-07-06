import React, { useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import useFormInputs from "../hooks/useFormInputs";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/utils/Alert";
import AlertSuccess from "../components/utils/AlertSuccess";
import Spinner from "../components/utils/Spinner";
import { FaSuitcaseRolling, FaSpeakerDeck } from "react-icons/fa";

export default function SignUp() {
  const userAvatar = "https://avatars.dicebear.com/api/male/";
  const [inputs, handleInputChange] = useFormInputs({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [signedUp, setSignedUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);

  let { user, status, message } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = inputs;
    setSpinner(true);
    dispatch(
      register({
        ...credentials,
        userAvatar: userAvatar + credentials.username + ".svg",
      })
    );
    document.getElementById("signup-form").reset();
  };

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 1000);
    if (status === "failed") {
      setError(message);
      setTimeout(() => {
        setError(null);
      }, 5000);
    } else if (status === "succeeded") {
      setError(null);
      setSignedUp(true);
      setTimeout(() => {
        setSignedUp(false);
      }, 7000);
    } else if (user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, status, message, setError, navigate, dispatch]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 h-100">
        {spinner && <Spinner />}
        <div className="max-w-md w-full space-y-8">
          <div>
          <a href="http://localhost:3000/">
                  
                  <FaSuitcaseRolling className="mx-auto h-10 w-auto  fill-[#313178] "/> 
                  <FaSpeakerDeck  className="mx-auto h-10 w-auto  fill-[#313178] "/>          
             </a>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up to your new account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                already have an account?
              </Link>
            </p>
          </div>
          <form
            className="mt-8 space-y-6 bg-white p-8 rounded-md shadow-md"
            onSubmit={handleSubmit}
            id="signup-form"
          >
            {error && <Alert error={error} />}
            {signedUp && <AlertSuccess />}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className=" flex justify-between my-4">
                <label htmlFor="first-name" className="sr-only">
                  First Name
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="first-name"
                  required
                  className="appearance-none relative only: block w-full mr-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />
                <label htmlFor="last-name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="last-name"
                  required
                  className="appearance-none relative  block w-full ml-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none relative my-4 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative my-4 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="appearance-none relative my-4 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="confirm-password"
                  required
                  className="appearance-none relative my-4 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign Up
              </button>
              <div className="mt-6 text-center">
                <hr className="border-gray-300 sm:mx-auto lg:mt-8 my-4" />
                <div className="text-sm text-gray-600 mb-5">
                  or continue with
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.facebook.com"
                    type="button"
                    className="text-gray-500 bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-10 py-1.5 text-center mr-2 mb-2 border border-gray-300 shadow-sm"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    type="button"
                    className="text-gray-500 bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-10 py-1.5 text-center mr-2 mb-2 border border-gray-300 shadow-sm"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="https://www.github.com/jonas56"
                    type="button"
                    className="text-gray-500 bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-10 py-1.5 text-center mr-2 mb-2 border border-gray-300 shadow-sm"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
